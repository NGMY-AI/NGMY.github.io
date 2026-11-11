((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Aj,A7,Ak,Al,V,A8,Am,An,C={
ud(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
h8v(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Kh(d){var w
if(d===0)return $.Dv()
if(d===1)return $.a3p()
if(d===2)return $.hED()
if(Math.abs(d)<4294967296)return C.bbK(A.o.N(d))
w=C.hZw(d)
return w},
bbK(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ud(4,w)
return new C.ob(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ud(1,w)
return new C.ob(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aD(d,16)
v=C.ud(2,w)
return new C.ob(v===0?!1:s,w,v)}v=A.o.ao(A.o.gald(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ao(d,65536)}v=C.ud(v,w)
return new C.ob(v===0?!1:s,w,v)},
hZw(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dM("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.Dv()
w=$.hEC()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lm(A.aG.gaS(w))
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
q=new C.ob(!1,r,4)
if(s<0)p=q.mB(0,-s)
else p=s>0?q.dW(0,s):q
return p},
h8w(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hqS(d,e,f,g){var w,v,u,t,s,r=A.o.ao(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dW(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fS(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dW(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hqN(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16)
if(A.o.F(f,16)===0)return C.h8w(d,e,s,g)
w=e+s+1
C.hqS(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hZz(d,e,f,g){var w,v,u,t,s=A.o.ao(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dW(1,r)-1,o=A.o.fS(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dW(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fS(u,r)}w&2&&B.aj(g)
g[n]=o},
cMX(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hZx(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bbL(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aD(v,16)&1)}},
hqT(d,e,f,g,h,i){var w,v,u,t,s,r
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
hZy(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ec((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
ob:function ob(d,e,f){this.a=d
this.b=e
this.c=f},
cMY:function cMY(){},
cMZ:function cMZ(){},
cN_:function cN_(d,e){this.a=d
this.b=e},
cN0:function cN0(d){this.a=d},
aT0:function aT0(d,e){this.a=d
this.b=e},
hgF(d,e,f){var w=new C.Sx(d,A.o.ao(Date.now(),1000),e)
w.Q=f
return w},
Sx:function Sx(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4y:function a4y(d,e){this.a=d
this.b=e},
bJY:function bJY(d){this.a=d
this.c=this.b=0},
hHS(){return new C.bIi()},
bIi:function bIi(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cF6:function cF6(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hZe(d,e,f){var w,v,u,t,s
if(d.gan(d))return new Uint8Array(0)
w=new Uint8Array(B.cn(d.gd0X(d)))
v=f*2+2
u=C.hox(C.hoz(),64)
t=new C.co4(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.co5(e,1000,v)
s=new Uint8Array(v)
return A.aG.du(s,0,t.cOZ(w,0,s,0))},
cF4:function cF4(d,e){this.c=d
this.d=e},
ayu:function ayu(d,e){this.a=d
this.b=e},
cF7:function cF7(d,e,f,g){var _=this
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
bas:function bas(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cF5:function cF5(){this.a=$},
hqj(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hHB(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bGT:function bGT(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hej(d,e){e&=31
return(d&$.qs[e])<<e>>>0},
nG(d,e){e&=31
return(d>>>e|C.hej(d,32-e))>>>0},
hoy(d){var w,v=new C.au2()
if(B.iS(d))v.aLX(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hoz(){var w=C.hoy(0),v=new Uint8Array(4),u=x.S
u=new C.co6(w,v,A.Fa,5,B.bZ(5,0,!1,u),B.bZ(80,0,!1,u))
u.jW(0)
return u},
hox(d,e){var w=new C.co2(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
co1:function co1(){},
co5:function co5(d,e,f){this.a=d
this.b=e
this.c=f},
co_:function co_(){},
au1:function au1(d){this.a=d},
co4:function co4(d){this.a=$
this.b=d
this.c=$},
co0:function co0(){},
cnZ:function cnZ(){},
au2:function au2(){this.b=this.a=$},
co3:function co3(){},
co6:function co6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
co2:function co2(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cnY:function cnY(){},
cnX:function cnX(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bSb:function bSb(){},
bSc:function bSc(d){this.a=d},
i1w(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bc_:function bc_(){},
cyr:function cyr(){},
bTe:function bTe(d,e){this.a=d
this.b=!1
this.c=e},
bTf:function bTf(){},
iaK(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
ax5(d){var w=0,v=B.j(x.H),u
var $async$ax5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fis?2:4
break
case 2:w=5
return B.b(A.kw.h9("SystemChrome.setEnabledSystemUIMode",d.a6(),u),$async$ax5)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kw.h9("SystemChrome.setEnabledSystemUIOverlays",C.iaK(null),u),$async$ax5)
case 6:case 3:return B.h(null,v)}})
return B.i($async$ax5,v)},
ax8:function ax8(d,e){this.a=d
this.b=e},
a9a:function a9a(d){this.a=d},
idx(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fEg(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fEg:function fEg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aox(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aox=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.ahH("ngmy_menu_lib_v1_zzslides_index",A.bJ),$async$aox)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.r(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cH(t,new C.c39(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a6(t).k("M.E"))}else r=B.a([],x.d)
A.d.aX(r,new C.c3a())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aox,v)},
aoz(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$aoz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aox(),$async$aoz)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.U(t,x.P)
for(r=J.aX(j);r.C();){q=r.gS(r)
p=J.r(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).a9().ae()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nF("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.H(["deck",m.ah(),"savedAt",l],t,q),null),$async$aoz)
case 7:if(!f){w=5
break}s.n(0,p,B.H(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.K)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b9<2>")
s=B.C(new B.b9(s,r),r.k("M.E"))
w=10
return B.b(B.nF("ngmy_menu_lib_v1_zzslides_index",B.H(["items",s,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],t,q),null),$async$aoz)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoz,v)},
c3b(d){return C.hNt(d)},
hNt(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c3b=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.ahH("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.i6),$async$c3b)
case 7:r=f
o=r.b
q=o==null?null:J.r(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.WC(B.a2(q,x.N,x.z))
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
return B.i($async$c3b,v)},
aoy(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$aoy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aox(),$async$aoy)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nJ(r,new C.c3c(d))
w=4
return B.b(B.nF("ngmy_menu_lib_v1_zzslides_index",B.H(["items",r,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z),null),$async$aoy)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(T.aQZ("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$aoy)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aoy,v)},
c39:function c39(){},
c3a:function c3a(){},
c3c:function c3c(d){this.a=d},
inD(d,e,f){return B.bV(A.L,null,new C.fUW(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fUW:function fUW(d,e,f){this.a=d
this.b=e
this.c=f},
a1F:function a1F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aKC:function aKC(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fg_:function fg_(d,e){this.a=d
this.b=e},
fg3:function fg3(d){this.a=d},
fg4:function fg4(d){this.a=d},
fg5:function fg5(d,e,f){this.a=d
this.b=e
this.c=f},
fg0:function fg0(d){this.a=d},
fg1:function fg1(d){this.a=d},
fg2:function fg2(d,e){this.a=d
this.b=e},
ffV:function ffV(d){this.a=d},
ffT:function ffT(d){this.a=d},
ffU:function ffU(d){this.a=d},
ffW:function ffW(d){this.a=d},
ffX:function ffX(d){this.a=d},
fg9:function fg9(d,e){this.a=d
this.b=e},
fg8:function fg8(d,e){this.a=d
this.b=e},
ffZ:function ffZ(d,e,f){this.a=d
this.b=e
this.c=f},
ffY:function ffY(d,e,f){this.a=d
this.b=e
this.c=f},
fg6:function fg6(d,e){this.a=d
this.b=e},
fg7:function fg7(d,e){this.a=d
this.b=e},
fgc:function fgc(d){this.a=d},
fgd:function fgd(d,e){this.a=d
this.b=e},
fgb:function fgb(d,e){this.a=d
this.b=e},
fga:function fga(){},
hti(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.X.aN(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cH(v,new C.fnF(),v.$ti.k("M.E"),x.ea)
u=B.a6(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fnG(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a2D(d){return C.ieO(d)},
ieO(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a2D=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.U(x.N,x.ea)
m=new C.fHj(n)
t=4
j=m
i=C
w=7
return B.b(B.a3c("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a2D)
case 7:j.$1(i.hti(f))
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
return B.b(B.az(),$async$a2D)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hti(B.aS(J.r(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("b9<2>")
o=p.k("Y<M.E>")
j=B
i=B
h=new B.b9(n,p)
g=C
w=13
return B.b(C.fnO(d),$async$a2D)
case 13:p=j.C(new i.Y(h,new g.fHh(f),o),o.k("M.E"))
A.d.aX(p,new C.fHi())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a2D,v)},
aih(d,e){return C.ini(d,e)},
ini(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aih=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fUr(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.X.aq(n,null)
q=!1
t=4
w=7
return B.b(B.ai9("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aih)
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
return B.b(B.az(),$async$aih)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aih)
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
return B.i($async$aih,v)},
fnO(d){return C.i2X(d)},
i2X(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fnO=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$fnO)
case 7:r=f
q=r.tH("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.jU(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aV(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$fnO,v)},
ah8(d,e){return C.idq(d,e)},
idq(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ah8=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$ah8)
case 6:s=g
r=B.aV(x.N)
q=s.tH("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.ha(r,q)
J.cc(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a6(q).k("cs.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$ah8)
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
return B.b(C.a2D(d),$async$ah8)
case 8:n=g
J.nJ(n,new C.fDV(e))
w=9
return B.b(C.aih(d,n),$async$ah8)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ah8,v)},
inI(d,e){return B.a5(d,!1).cc(B.ej(new C.fVh(e),!0,null,x.H))},
hZB(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cJ(w.d,new C.cOk())},
oE:function oE(d,e,f){this.a=d
this.b=e
this.c=f},
fnF:function fnF(){},
fnG:function fnG(){},
fHj:function fHj(d){this.a=d},
fHh:function fHh(d){this.a=d},
fHi:function fHi(){},
fUr:function fUr(){},
fDV:function fDV(d){this.a=d},
fVh:function fVh(d){this.a=d},
Zl:function Zl(d,e){this.c=d
this.a=e},
az2:function az2(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cOk:function cOk(){},
cOm:function cOm(d,e){this.a=d
this.b=e},
cOp:function cOp(d){this.a=d},
cOq:function cOq(d){this.a=d},
cOo:function cOo(){},
cOr:function cOr(d,e){this.a=d
this.b=e},
cOn:function cOn(d){this.a=d},
cOs:function cOs(){},
cOl:function cOl(d,e){this.a=d
this.b=e},
cOt:function cOt(){},
cOg:function cOg(d){this.a=d},
cOe:function cOe(d){this.a=d},
cOf:function cOf(d){this.a=d},
cOh:function cOh(d,e){this.a=d
this.b=e},
cOd:function cOd(d){this.a=d},
cOc:function cOc(d){this.a=d},
cOa:function cOa(d,e){this.a=d
this.b=e},
cOb:function cOb(d){this.a=d},
cOj:function cOj(){},
cOi:function cOi(d){this.a=d},
cO9:function cO9(d,e){this.a=d
this.b=e},
cO8:function cO8(d,e){this.a=d
this.b=e},
cO7:function cO7(d,e){this.a=d
this.b=e},
cOu:function cOu(d){this.a=d},
Zj:function Zj(d,e,f){this.c=d
this.d=e
this.a=f},
aGp:function aGp(d,e,f){this.a=d
this.b=e
this.c=f},
ayZ:function ayZ(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cNB:function cNB(d){this.a=d},
cNA:function cNA(d){this.a=d},
cND:function cND(d,e,f){this.a=d
this.b=e
this.c=f},
cNL:function cNL(){},
cNM:function cNM(d){this.a=d},
cNE:function cNE(d,e,f){this.a=d
this.b=e
this.c=f},
cNC:function cNC(d,e){this.a=d
this.b=e},
cNG:function cNG(d,e){this.a=d
this.b=e},
cNH:function cNH(d,e){this.a=d
this.b=e},
cNI:function cNI(d,e){this.a=d
this.b=e},
cNF:function cNF(d){this.a=d},
cNK:function cNK(d){this.a=d},
cNJ:function cNJ(d,e){this.a=d
this.b=e},
cNR:function cNR(d){this.a=d},
cNN:function cNN(d,e){this.a=d
this.b=e},
cNO:function cNO(d,e){this.a=d
this.b=e},
cNP:function cNP(d,e){this.a=d
this.b=e},
cNQ:function cNQ(d,e){this.a=d
this.b=e},
az0:function az0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
iha(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ed(v,x.cK).bJ(new C.fLR(),x.H).eK(new C.fLS())}}else if(s)C.huR()}catch(t){}},
huR(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ed(v,x.cK).eK(new C.frW())}catch(u){}},
ihd(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fLR:function fLR(){},
fLS:function fLS(){},
frW:function frW(){},
hzJ(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.em(v,w,"").split(":"))},
hzG(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.lm)return null
return A.a.b3(w,14)},
hd0(d){var w
if(d.b!==D.lm)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b3(w,21)},
ihD(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hzK(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ihy(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.U(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.lh(0,f)
t=x.N
u=B.cH(u,new C.fMQ(),B.a6(u).k("M.E"),t)
s=B.C(u,B.a6(u).k("M.E"))
if(s.length===0)return B.U(t,t)
for(u=v.lh(0,f),u=new B.Kg(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Se(A.a.au(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Se(A.a.b3(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.U(t,t)
k=B.U(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
ihw(d,e){var w,v,u,t,s,r=B.a6(e).k("cy<1>"),q=B.C(new B.cy(e,r),r.k("M.E"))
A.d.aX(q,new C.fMP())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.c9(s,"]"))continue
w=B.aRZ(w,u,s,0)}return w},
ihA(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a6o:$.hGF(),s=x.N,r=B.U(s,s)
for(s=t.gdR(t),s=s.gaf(s);s.C();){w=s.gS(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.c9(u,"]"))continue
r.n(0,w.b,u)}return r},
hzH(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
foI(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hzJ(q)===e)return q}return null},
ihB(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b3(v,u)
return A.d.gI(D.HW).a},
ihC(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.aeT(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.aeT(0,0,0)
v=C.foI(b6,b0)
u=C.foI(b5,b0)
t=0
if(v!=null&&u!=null){s=C.ihA(b2,C.ihy(C.hzH(b2),v.r))
if(s.a!==0){u.r=C.ihw(C.hzH(b4),s)
t=s.a}}r=B.aV(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hzJ(o[m])
if(l==null||l==="utangulizi")continue
r.M(0,l)}for(q=B.eg(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.foI(b6,n)
i=C.foI(b5,n)
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
a0=C.hd0(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hzG(a8)===a0||C.hd0(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RE(a1,new C.fMW(a0),!0)
a1=f.z
a6=Date.now()
a9=$.jb
$.jb=a9+1
A.d.M(a1,new C.eP(""+1000*a6+"_"+a9,D.lm,a2,a3,a4,a5,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,d.at,D.bi,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.co,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.aeT(k,t,e)},
ihx(d){var w=C.ihB(d)
if(d.w==="hati_kuhowa")return C.hz3("",w)
return C.hz2("",w)},
fMQ:function fMQ(){},
fMP:function fMP(){},
fMW:function fMW(d){this.a=d},
huy(){var w=new B.V(Date.now(),0,!1),v=new C.fqZ()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hd9(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fNO(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lm&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hzY(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fNO(d)
w=B.bk(u)
if(w==null)return!C.fNO(d)
return new B.V(Date.now(),0,!1).a9().d3(w.a9().bS(18e9))},
iii(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).a9().ae()},
hRw(d){return A.a.i(d).toLowerCase()},
aqW(d){return C.hRy(d)},
hRy(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aqW=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$aqW)
case 7:r=f
p=r.tH("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Y:p
o=q
o=new B.N(o,C.ilU(),B.T(o).k("N<1,m>")).bZ(0,new C.ceR())
o=B.dh(o,o.$ti.k("M.E"))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
u=B.aV(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqW,v)},
aqV(d,e){return C.hRx(d,e)},
hRx(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqV=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqW(d),$async$aqV)
case 3:r=g
if(!J.cc(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqV)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pS(r)),$async$aqV)
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
return B.i($async$aqV,v)},
aqX(d,e){return C.hRz(d,e)},
hRz(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aqX=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aqW(d),$async$aqX)
case 3:r=g
if(!J.hv(r,o)){w=1
break}t=5
w=8
return B.b(B.az(),$async$aqX)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.pS(r)),$async$aqX)
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
return B.i($async$aqX,v)},
W_(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$W_=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.h5S&&!a5){w=1
break}t=4
w=7
return B.b(B.az(),$async$W_)
case 7:r=a7
q=B.aS(J.r(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.X.aN(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.U(e,x.I)
for(d=J.k2(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gS(d)
if(f.b(n.b))J.aJ(o,J.k(n.a),C.WC(B.a2(f.a(n.b),e,a0)))}$.a7Z=o}}t=2
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
return B.b(B.c8(),$async$W_)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.ut("civic_hati_kiapo_uongozi",null,A.eq),$async$W_)
case 17:l=a7
w=l!=null&&x.f.b(J.r(l,"byState"))?18:19
break
case 18:o=x.N
k=B.U(o,x.I)
for(f=x.f,e=J.k2(f.a(J.r(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gS(e)
if(!f.b(j.b))continue
J.aJ(k,J.k(j.a),C.WC(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cE(o,B.a6(o).k("cE<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a7Z.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbr())f=d===e.gbr()&&f.b<e.gcE()
else f=!0
f=!f}else f=!0
if(f)$.a7Z.n(0,i.a,i.b)}w=20
return B.b(C.aqY(),$async$W_)
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
case 16:case 9:$.h5S=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$W_,v)},
aqY(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$aqY=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aqY)
case 6:s=e
r=B.U(x.N,x.P)
for(o=$.a7Z,o=new B.cE(o,B.a6(o).k("cE<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aJ(r,q.a,q.b.ah())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.X.aq(r,null)),$async$aqY)
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
return B.i($async$aqY,v)},
b13(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$b13=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.W_(!1),$async$b13)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a7Z.h(0,t)
r=s==null?null:s.hR()
if(r==null){u=null
w=1
break}u=C.bEp(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b13,v)},
a8_(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a8_=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.V(Date.now(),0,!1)
o=a1.hR()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a7Z.n(0,d,o)
$.h5S=!0
w=3
return B.b(C.aqY(),$async$a8_)
case 3:w=4
return B.b(B.c8(),$async$a8_)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.U(e,x.P)
for(n=$.a7Z,n=new B.cE(n,B.a6(n).k("cE<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aJ(r,q.a,q.b.ah())}w=9
return B.b(B.nF("civic_hati_kiapo_uongozi",B.H(["byState",r,"updatedAt",new B.V(Date.now(),0,!1).a9().ae()],e,x.z),null),$async$a8_)
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
return B.i($async$a8_,v)},
aqZ(d){var w=0,v=B.j(x.T),u,t,s
var $async$aqZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a6C(A.eL),$async$aqZ)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fn(),$async$aqZ)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b12(t,d),$async$aqZ)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqZ,v)},
b12(d,e){return C.hRA(d,e)},
hRA(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b12=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b12)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f1().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iw("media")
w=8
return B.b(p.xm(q,new Uint8Array(B.cn(d)),D.bJf),$async$b12)
case 8:n=p.CX(q)
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
return B.i($async$b12,v)},
L5(d,e,f,g,h,i,j,k,l,m,n){var w=C.cG()
return C.ew(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,l,m,n)},
fqq(d,e,f,g,h,i,j,k,l){var w=C.cG()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.co,D.fc,j,k,l)},
ha5(d,e,f,g,h,i,j,k){var w=C.cG(),v=A.k.E(i*0.0017,0.02,0.06)
return C.ew(h,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.cD,A.U,"",v,w,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.co,D.cV,g,e,f)},
fpZ(d,e,f,g){return C.fqq(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
ha6(d,e,f,g,h,i,j,k){var w=C.cG()
return C.ew(A.r0,!1,j,A.aF,"marriage_field_"+d+":"+A.k.ac(g,3),4280640491,i,A.bp,A.a7,"",h,w,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.co,D.cV,g,e,f)},
hux(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gI(A.a.em(v,w,"").split(":"))},
bEp(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hux(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.lm&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hR()}h=C.hcF(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.C8(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gI(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hux(m)
if(l!=null&&r.aj(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.lm&&A.a.c9(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bs(a1.z,new C.fLP(a2))}else A.d.bs(a1.z,new C.fLQ())
A.d.M(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fNO(a0))a0.ax=a6.f.a9().ae()
return a0},
hcF(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fOB(D.a7q),l=C.cG(),k=x.u,j=B.a([C.ew(A.bj,!1,s,A.aF,"marriage_locked_bg",r,24,A.bp,A.a7,"",1,C.cG(),m,"","",0,!1,"",0,D.bi,q,2,"",0,0,"",D.co,D.lO,1,0,0)],k),i=B.a([],k)
i.push(C.L5("NGMY",A.K,236069181,52,A.bp,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.L5("TAREHE:",A.bj,o,16,A.bp,A.H,A.k.E(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.ha5("tarehe",0.8059999999999999,0.026,0.18,A.bj,16,p,C.huy()))
i.push(C.fpZ(0.8099999999999999,0.026+A.k.E(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.L5("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bp,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.L5("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cD,A.a7,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fqq(0,0.002,D.fD,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.ha6("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.ha6("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.ha6("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fqq(268435456,0.175,D.bi,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.L5("VIDEO YA KIAPO",A.bj,o,10,A.bp,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ew(A.bj,!1,s,A.aF,"__kiapo_video__",r,24,A.bp,A.a7,"",0.131,C.cG(),t,"","",0,!1,"",0,D.bi,q,2,"",0,0,"",D.co,D.lO,0.77,0.115,0.492))
i.push(C.L5("Rais Anayeapa:",A.bj,p,15,A.bp,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.L5("Jina:",A.bj,p,13,A.bp,A.U,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.ha5("rais_jina",0.195,0.6930000000000001,0.62,A.bj,13,p,""))
i.push(C.fpZ(0.195,0.7130000000000001,0.62,n))
i.push(C.L5("Sahihi:",A.bj,p,13,A.bp,A.U,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ew(A.bj,!1,s,A.aF,"marriage_sign_rais",0,24,A.bp,A.a7,"",0.07,C.cG(),t,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fc,0.38,0.21500000000000002,0.73))
i.push(C.fpZ(0.21500000000000002,0.795,0.38,n))
i.push(C.L5("Tarehe:",A.bj,p,13,A.bp,A.U,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.ha5("rais_tarehe",0.745,0.74,0.2,A.bj,12,p,C.huy()))
i.push(C.fpZ(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fqq(0,0.032,D.bi,o,1,"state_box",0.72,0.14,0.875),C.L5("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bp,A.U,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rS(4294967035,t,0,0,j,l,D.qP,"","",u,D.dh)
return C.C8(t,t,t,t,D.oG,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cG(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ahi(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahi=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.L(x.q).f.U(D.fdc)
w=1
break}w=3
return B.b(C.W_(!0),$async$ahi)
case 3:w=4
return B.b(C.b13(p),$async$ahi)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hzY(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bV(D.bl1,null,new C.fGF(p),f,!0,!0,!1,A.lP,!1,!1,x.N),$async$ahi)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ch(null,null,!0,null,new C.fGG(),f,null,!0,!0,x.y),$async$ahi)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.hcF(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.L(x.q).f
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.hcF(p))
case 1:return B.h(u,v)}})
return B.i($async$ahi,v)},
fqZ:function fqZ(){},
ceR:function ceR(){},
fLP:function fLP(d){this.a=d},
fLQ:function fLQ(){},
fGF:function fGF(d){this.a=d},
fGD:function fGD(d){this.a=d},
fGE:function fGE(d){this.a=d},
fGG:function fGG(){},
fGB:function fGB(d){this.a=d},
fGC:function fGC(d){this.a=d},
art:function art(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFd:function aFd(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
ejN:function ejN(d){this.a=d},
ejL:function ejL(d){this.a=d},
ejM:function ejM(d){this.a=d},
ejO:function ejO(d){this.a=d},
ejP:function ejP(d){this.a=d},
wY(d,e,f,g,h,i,j,k,l,m,n){var w=C.cG()
return C.ew(e,!1,f,A.aF,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",j,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,l,m,n)},
hu9(d,e,f){var w=4291404327
return B.a([C.qr(0,f,D.eT,w,2,"ring_l",f,d-f*0.42,e),C.qr(0,f,D.eT,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fpp(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qr(4294967288,f,D.eT,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qr(h,s,D.eT,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qr(h,f*0.46,D.eT,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qr(d,e,f,g,h,i,j,k,l){var w=C.cG()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.co,D.fc,j,k,l)},
fpo(d,e,f,g,h,i,j,k,l){var w=C.cG(),v=A.k.E(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ew(h,!1,k,A.aF,i?u+A.k.ac(g,3)+":"+A.o.ac(j,1):u+A.k.ac(g,3),4280640491,j,A.cD,A.U,"",v,w,null,"","",0,!1,"",0,D.bi,4280172719,2,l,0,0,"",D.co,D.cV,g,e,f)},
bBO(d,e,f,g){return C.qr(0,0.002,D.fD,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hu8(d,e,f,g,h){var w=A.k.E(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qr(0,0.036,D.bi,h,1.4,"banner_box_"+d,w,v,e),C.wY(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hzI(){var w=new B.V(Date.now(),0,!1),v=new C.fMV()
return B.w(v.$1(B.bW(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hua(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wY(r+".",A.bj,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fpo("witness_"+d+"_"+r+"_name",q,g,p,A.bj,!0,16,j,"[Jina la Shahidi]"),C.bBO(q,g+A.k.E(0.0272,0.02,0.06),p,w),C.wY("Sahihi:",A.bj,j,15,A.a7,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_"+d+"_witness_"+r,0,24,A.bp,A.a7,"",0.05,C.cG(),null,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fc,s,t,g-0.004),C.bBO(t,g+0.044,s,w)],x.u)},
ahJ(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dqo,D.csR,D.dih,D.dke],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gS(0)
if(u.a===d)return u}return null},
h9k(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fOB(d.d),v=B.a([C.ew(A.bj,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cG(),w,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lO,1,0,0)],x.u)
A.d.v(v,C.i5v(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
i5v(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wY("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hu9(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hu9(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fpp(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fpp(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wY("\ud83c\udf33",A.K,4279898632,22,A.a7,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.qr(0,0.062,D.eT,b1,1.6,"crest_o",0.11,0.445,0.012),C.qr(0,0.046,D.eT,b1,1,"crest_i",0.084,0.458,0.02),C.wY("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.qr(0,0.002,D.fD,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qr(b9,0.016,D.ln,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qr(0,0.002,D.fD,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wY("TAREHE:",A.bj,c0,20,A.H,A.k.E(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fpo("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bj,!1,21,b9,C.hzI()),C.bBO(0.814,0.026+A.k.E(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wY(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qr(c0,0.0026,D.bi,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qr(c3.e,0.138,D.bi,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cG()
c2.push(C.ew(A.bj,!1,b9,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.82,3),b2,19,A.bp,A.cA,"",0.128,s,a9,"","",0,!1,"",0,D.bi,b3,2,c5,0,0,"",D.co,D.cV,0.82,0.09,t))
t+=c4
if(c8){r=A.k.E(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qr(0,0.036,D.bi,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cG()
A.d.v(c2,B.a([s,C.ew(A.K,!1,c0,A.aF,"marriage_field_nimetowe_label:"+A.k.ac(r,3),b2,30,A.bp,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bi,b3,2,c7,0,0,"",D.co,D.cV,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hu8(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wY(c9,A.bj,b9,d0,A.U,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.E(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.E(0.037399999999999996,0.02,0.06):A.k.E(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fpo("mahari_"+p,0.132,k,m,A.bj,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.jb
$.jb=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.jb
$.jb=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eP(""+1000*i+"_"+h,D.cV,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bp,A.aF,c0,A.bj,a9,D.bi,b2,b3,2,0,!1,s,0,D.co,0,"","","","","",!1,0),j,new C.eP(""+1000*f+"_"+e,D.fc,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.fD,0,b5,0.8,0,!1,g,0,D.co,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.jb
$.jb=p+1
i=Date.now()
h=$.jb
$.jb=h+1
g=Date.now()
f=$.jb
$.jb=f+1
e=Date.now()
a3=$.jb
$.jb=a3+1
A.d.v(d,B.a([new C.eP(""+1000*s+"_"+p,D.cV,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bp,A.aF,b7,A.dV,a9,D.bi,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.co,0,"","","","","",!1,0),new C.eP(""+1000*i+"_"+h,D.fc,a1,a2,0.046,0.025875,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.bi,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.co,0,"","","","","",!1,0),new C.eP(""+1000*g+"_"+f,D.cV,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bp,A.aF,b7,A.K,a9,D.bi,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.co,0,"","","","","",!1,0),new C.eP(""+1000*e+"_"+a3,D.fc,a0,k,a1+0.046-a0,l,"",24,A.a7,A.bp,A.aF,b6,A.bj,a9,D.bi,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.co,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hu8("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a7f||w===D.a7h||w===D.a7e||w===D.a7g){w=t-0.008
A.d.v(c2,C.fpp(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fpp(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.qr(0,a4,D.bi,c0,1.3,"wit_table_border",0.82,0.09,t),C.qr(c0,a4,D.bi,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qr(0,0.0022,D.fD,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wY("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wY("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hua("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hua("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.qr(0,0.11,D.bi,c0,1.2,"mw_box",0.82,0.09,t),C.wY("MWANDISHI",A.bj,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wY("Jina:",A.bj,b9,15,A.a7,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fpo("mwandishi_jina",0.215,w,0.3116,A.bj,!0,15,b9,""),C.bBO(0.215,p,0.3116,b5),C.wY("Sahihi:",A.bj,b9,15,A.a7,0.028,0,"mw_sl",0.09,0.5,w),C.ew(A.bj,!1,b6,A.aF,"marriage_sign_mwandishi",0,24,A.bp,A.a7,"",0.044,C.cG(),a9,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fc,0.3161999999999999,0.5738,s-0.044),C.bBO(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.qr(0,0.032,D.bi,c0,1,"state_box",0.7,0.15,a8),C.wY("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.U,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
ihz(d){var w,v,u,t=null,s=B.b1(d.f),r=B.b1(d.r),q=C.hdj(d.d),p=new C.fMR(s),o=new C.fMS(s),n=d.z,m=n===D.a7f||n===D.a7h||n===D.a7e||n===D.a7g,l=n===D.aJm||n===D.a7i||n===D.aJn,k=B.bT(0,B.fU(q,A.A,t,t,A.ci,A.bY,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a7i?26:16
i.push(new C.fMU().$1$size(w))}if(n===D.aJo)i.push(D.fV3)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.iP,A.i,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.L(r,A.r,1.1)
w=B.n(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aSO,p.$1$w(0.9),D.aSO,p.$1$w(0.75)],j),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(D.bfw,t,n,w,t,t,A.n),t,t,t,t,A.ams,t,t,t))
i.push(A.am)
i.push(new C.fMT(r).$1("NIMETOWE"))
i.push(A.fG)
v=J.e0(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.NB,new B.ca(A.aL,A.e,A.i,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.by(1,A.bb,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b2)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a_,t,A.b3,A.t,B.a([k,new B.D(A.al3,B.x(i,A.ak,t,A.e,A.i,0,A.p),t)],j),t)},
hz2(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.ahJ(e,t)
if(r==null)r=A.d.gI(D.HW)
w=C.cG()
v=C.rS(r.e,t,0,0,C.h9k(r,0.165,y.O,D.dkQ,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qP,"","",s,D.dh)
w=C.cG()
u=A.a.i(d)
if(u.length===0)u=t
return C.C8(t,t,t,t,D.oG,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hz3(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.ahJ(e,t)
if(r==null)r=A.d.gI(D.HW)
w=C.cG()
v=C.rS(r.e,t,0,0,C.h9k(r,0.165,y.f,D.dgg,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qP,"","",s,D.dh)
w=C.cG()
u=A.a.i(d)
if(u.length===0)u=t
return C.C8(t,t,t,t,D.oG,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bFL(d,e,f){var w=0,v=B.j(x.T),u
var $async$bFL=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.fYK(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFL,v)},
ahj(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahj=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fGJ(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.MJ,null,new C.fGK(p),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ahj)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFL(d,"Hati ya Kuhowa",D.HW),$async$ahj)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LL(d,"Tafuta jimbo\u2026","",A.kq,"Chagua jimbo"),$async$ahj)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hz2(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahj,v)},
ahk(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahk=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.T(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fGN(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.MJ,null,new C.fGO(p),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ahk)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(p).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFL(d,"Hati ya Kuhoweya",D.HW),$async$ahk)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LL(d,"Tafuta jimbo\u2026","",A.kq,"Chagua jimbo"),$async$ahk)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hz3(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahk,v)},
ahl(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahl=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.T(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fGR(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(D.MJ,null,new C.fGS(m),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ahl)
case 5:t=k
if(t==="continue"){f.$1(A.d.gI(m).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bFL(d,"Malipo ya Awamu ya Mahari",D.S4),$async$ahl)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.LL(d,"Tafuta jimbo\u2026","",A.kq,"Chagua jimbo"),$async$ahl)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.ahJ(s,D.S4)
if(q==null)q=A.d.gI(D.S4)
n=C.cG()
p=C.rS(q.e,null,0,0,C.h9k(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.daQ,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qP,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dh)
n=C.cG()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.C8(null,null,null,null,D.oG,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahl,v)},
xY:function xY(d,e){this.a=d
this.b=e},
jB:function jB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fMV:function fMV(){},
fMR:function fMR(d){this.a=d},
fMT:function fMT(d){this.a=d},
fMU:function fMU(){},
fMS:function fMS(d){this.a=d},
fYK:function fYK(d,e){this.a=d
this.b=e},
ae1:function ae1(d,e,f){this.c=d
this.d=e
this.a=f},
e6i:function e6i(d,e,f){this.a=d
this.b=e
this.c=f},
e6h:function e6h(d,e){this.a=d
this.b=e},
e6g:function e6g(d,e){this.a=d
this.b=e},
adq:function adq(d,e,f){this.c=d
this.d=e
this.a=f},
fGJ:function fGJ(){},
fGK:function fGK(d){this.a=d},
fGH:function fGH(d){this.a=d},
fGI:function fGI(d){this.a=d},
fGN:function fGN(){},
fGO:function fGO(d){this.a=d},
fGL:function fGL(d){this.a=d},
fGM:function fGM(d){this.a=d},
fGR:function fGR(){},
fGS:function fGS(d){this.a=d},
fGP:function fGP(d){this.a=d},
fGQ:function fGQ(d){this.a=d},
L8(d,e,f,g,h,i,j,k,l,m){var w=C.cG()
return C.ew(e,!1,f,A.aF,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bp,h,"",i,w,null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,k,l,m)},
Db(d,e,f,g,h,i,j,k,l){var w=C.cG()
return C.ew(A.bj,!1,4279310375,A.aF,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bp,A.a7,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.co,D.fc,j,k,l)},
huU(d,e,f){return C.Db(0,0.002,D.fD,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bBY(d,e,f,g,h){return B.a([C.Db(4294967288,0.032,D.bi,4291404327,1.15,"pill_"+d,g,f,e),C.L8(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
haa(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Db(0,0.002,D.fD,g,1,"orn_l_"+t,u,d,v),C.Db(h,0.016,D.ln,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Db(0,0.002,D.fD,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a21(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.L8(d,A.bj,j,i,A.U,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cG()
return B.a([v,C.ew(A.K,!1,j,A.aF,"marriage_field_"+e+":"+A.k.ac(t,3),4280640491,i,A.cD,A.U,"",0.02,s,null,"","",0,!1,"",0,D.bi,4280172719,2,k,0,0,"",D.co,D.cV,t,u,g-0.002),C.huU(u,g+0.018,t)],x.u)},
huV(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Db(h,0.028,D.bi,h,0,"chv_"+d,g,e,f),C.Db(w,0.024,D.ln,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Db(w,0.024,D.ln,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.L8(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bBX(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.L8("Sahihi:",A.bj,h,10,A.U,0.02,"is_"+d,0.12,e,f),C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_"+d,0,24,A.bp,A.a7,"",0.032,C.cG(),null,"","",0,!1,"",0,D.bi,0,2,"",0,0,"",D.co,D.fc,v,w,f-0.006),C.huU(w,f+0.016,v)],x.u)},
hdk(d){var w,v
for(w=0;w<19;++w){v=D.Sk[w]
if(v.a===d)return v}return null},
ijS(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.ahJ(A.a.b3(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.ahJ(A.a.b3(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b3(k,18)
w=C.ahJ(u,D.S4)
v=w==null?l:w.d
if(v==null){w=C.ahJ(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.hdk(A.a.b3(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hvJ.aa(0)
$.hvW.aa(0)
t=C.fOB(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
her(d){var w=0,v=B.j(x.T),u
var $async$her=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bV(A.L,null,new C.h_c(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$her,v)},
y0:function y0(d,e){this.a=d
this.b=e},
nY:function nY(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blf:function blf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h_c:function h_c(){},
ae4:function ae4(d){this.a=d},
eoz:function eoz(d,e){this.a=d
this.b=e},
eoy:function eoy(d){this.a=d},
eox:function eox(d,e){this.a=d
this.b=e},
afK:function afK(d,e,f){this.c=d
this.d=e
this.a=f},
hdj(d){return $.hvW.c3(0,d,new C.fOD(d))},
fOB(d){return $.hvJ.c3(0,d,new C.fOC(d))},
fI(d){return B.h3r(d>>>16&255,d>>>8&255,d&255,255)},
i8H(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hx5(4294570461,4293910718,4284234270,u)
case 1:return C.hx5(4294635750,4293975240,t,4292912216)
case 2:w=C.fnW(s,4294505966,r)
C.bBI(w,14,16,p)
C.kG(w,8,9,464,836,u,1.2)
C.D7(w,2,2,1,1,u,10)
C.D7(w,478,2,-1,1,u,10)
C.D7(w,2,852,1,-1,u,10)
C.D7(w,478,852,-1,-1,u,10)
return w
case 3:return C.fnW(4294966515,4294373082,4289102906)
case 4:return C.i3e(C.fnW(4294376440,4293653998,4290287194))
case 5:w=C.fnW(4294965238,4294437098,4288444980)
C.bBI(w,14,16,4283043359)
C.kG(w,6,7,468,840,u,1)
C.kG(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,n,4294175448)
C.tc(v,n)
C.kG(v,24,24,432,806,4286209070,1)
C.a1P(v,12,12,468,12,o,3,20)
C.a1P(v,12,842,468,842,o,3,20)
C.a1P(v,12,12,12,842,o,3,20)
C.a1P(v,468,12,468,842,o,3,20)
return v
case 7:return C.i1a(4294440434,4293518297,4280228630,r)
case 8:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,m,4293911504)
C.tc(v,m)
C.kG(v,28,28,424,798,l,1)
C.fxA(v,28,28,l,k)
C.fxA(v,452,28,l,k)
C.fxA(v,28,826,l,k)
C.fxA(v,452,826,l,k)
return v
case 9:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,j,4294111986)
C.tc(v,j)
C.kG(v,18,18,444,818,4292401368,0.7)
B.iU(v,!0,C.fI(p),0,13,0,853)
return v
case 10:return C.i5h(i,4294173372)
case 11:return C.i6p(4294439140,4293449662)
case 12:return C.i12(h,4294239432)
case 13:return C.i5R(4294244340,4293193448)
case 14:return C.iah(4294505710,4293780694)
case 15:return C.fmS(4294966259,4294439138,o,p,q)
case 16:return C.fmS(4294966776,4294178544,o,g,g)
case 17:return C.fmS(4294965493,4294504170,o,4286200650,q)
case 18:return C.fmS(4294966519,4294373862,o,p,p)
case 19:return C.i4n()
case 20:return C.i4o()
case 21:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,h,4293976768)
C.tc(v,h)
C.bBI(v,14,16,p)
B.iU(v,!0,C.fI(u),4,475,4,9)
B.iU(v,!0,C.fI(u),4,475,844,849)
B.iU(v,!0,C.fI(u),4,9,4,849)
B.iU(v,!0,C.fI(u),470,475,4,849)
C.a1P(v,10,12,470,12,u,2,16)
C.a1P(v,10,842,470,842,u,2,16)
C.a1P(v,10,12,10,842,u,2,18)
C.a1P(v,470,12,470,842,u,2,18)
C.D7(v,2,2,1,1,t,10)
C.D7(v,478,2,-1,1,t,10)
C.D7(v,2,852,1,-1,t,10)
C.D7(v,478,852,-1,-1,t,10)
C.kG(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,s,4294438872)
C.tc(v,s)
C.kG(v,14,16,452,822,o,2.2)
C.kG(v,22,24,436,806,o,1)
C.hbw(v,!1,!1,o,p,p,36,14,16)
C.kV(v,240,20,7,o,!0)
C.kV(v,240,834,7,o,!0)
C.kV(v,18,427,7,o,!0)
C.kV(v,462,427,7,o,!0)
return v
case 23:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,i,4293910712)
C.tc(v,i)
B.iU(v,!0,C.fI(u),0,479,0,20)
B.iU(v,!0,C.fI(u),0,479,834,853)
B.iU(v,!0,C.fI(u),0,20,0,853)
B.iU(v,!0,C.fI(u),460,479,0,853)
B.iU(v,!0,C.fI(f),5,474,5,9)
B.iU(v,!0,C.fI(f),5,474,844,848)
B.iU(v,!0,C.fI(f),5,9,5,848)
B.iU(v,!0,C.fI(f),470,474,5,848)
C.kG(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hs(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.yR(v,e,4294174404)
C.tc(v,e)
C.bBI(v,14,16,p)
B.iU(v,!0,C.fI(u),3,476,3,8)
B.iU(v,!0,C.fI(u),3,476,845,850)
B.iU(v,!0,C.fI(u),3,8,3,850)
B.iU(v,!0,C.fI(u),471,476,3,850)
C.kG(v,9,10,462,834,t,1)
C.kG(v,14,16,452,822,u,1.8)
C.kV(v,240,8,4,u,!0)
C.kV(v,240,846,4,u,!0)
C.kV(v,8,427,4,u,!0)
C.kV(v,472,427,4,u,!0)
C.kV(v,8,8,3,t,!0)
C.kV(v,472,8,3,t,!0)
C.kV(v,8,846,3,t,!0)
C.kV(v,472,846,3,t,!0)
return v}},
yR(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kX(d,!1,A.dg,new B.ST(s),r,A.d_,1,0,w-1,k,k);++k}},
tc(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e6()
n.cZ(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.ap(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.ap(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iu()
v=A.o.E(A.k.N(s.gb6(s))-3,0,255)
r=A.o.E(A.k.N(s.gbc())-3,0,255)
q=A.o.E(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.k6(u,t,v,r,q,255)}},
kG(d,e,f,g,h,i,j){var w,v=null,u=C.fI(i),t=e+g
B.kX(d,!0,A.dg,u,v,A.d_,j,e,t,f,f)
w=f+h
B.kX(d,!0,A.dg,u,v,A.d_,j,e,t,w,w)
B.kX(d,!0,A.dg,u,v,A.d_,j,e,e,f,w)
B.kX(d,!0,A.dg,u,v,A.d_,j,t,t,f,w)},
D7(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.E(A.k.V(j*0.72),8,j-2)
B.kX(d,!0,A.dg,C.fI(i),u,A.d_,2,e,e+g*j,f,f)
B.kX(d,!0,A.dg,C.fI(i),u,A.d_,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kX(d,!0,A.dg,C.fI(i),u,A.d_,1,w,e+g*t,v,v)
B.kX(d,!0,A.dg,C.fI(i),u,A.d_,1,w,w,v,f+h*t)},
hx5(d,e,f,g){var w=null,v=B.hs(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yR(v,d,e)
C.tc(v,d)
B.iU(v,!0,C.fI(f),0,479,0,28)
B.iU(v,!0,C.fI(f),0,479,826,853)
B.iU(v,!0,C.fI(f),0,28,0,853)
B.iU(v,!0,C.fI(f),452,479,0,853)
C.kG(v,5,5,470,844,g,1.1)
C.kG(v,28,28,424,798,g,1.6)
C.D7(v,2,2,1,1,g,11)
C.D7(v,478,2,-1,1,g,11)
C.D7(v,2,852,1,-1,g,11)
C.D7(v,478,852,-1,-1,g,11)
return v},
fnW(d,e,f){var w=null,v=B.hs(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yR(v,d,e)
C.tc(v,d)
C.kG(v,14,16,452,822,f,1.6)
C.kG(v,20,22,440,810,f,0.8)
return v},
bBI(d,e,f,g){var w,v=C.fI(g)
B.iU(d,!0,v,0,479,0,f-1)
w=854-f
B.iU(d,!0,v,0,479,w,853);--w
B.iU(d,!0,v,0,e-1,f,w)
B.iU(d,!0,v,480-e,479,f,w)},
i3e(d){var w,v,u=4291404327
C.bBI(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kV(d,w,8,3,u,!0)
C.kV(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kV(d,7,v,3,u,!0)
C.kV(d,473,v,3,u,!0)}return d},
fAK(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.js(e,f),new B.js(e+g*n,f),new B.js(e,f+h*n)],t)
B.a2A(d,C.fI(m),s)
w=A.o.E(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.js(s,u),new B.js(e+g*v,u),new B.js(s,f+h*v)],t)
B.a2A(d,C.fI(k),t)
t=A.k.V(n*0.39)
C.kV(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kV(d,e+g*t,f+h*3,4,k,!0)
C.kV(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kV(d,e+g*t,f,5,k,!0)
C.kV(d,e,f+h*t,5,k,!0)}},
hbw(d,e,f,g,h,i,j,k,l){var w,v
C.fAK(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fAK(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fAK(d,k,v,1,-1,e,f,g,h,i,j)
C.fAK(d,w,v,-1,-1,e,f,g,h,i,j)},
a1P(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.li(d,!0,A.dg,new B.rn(p),null,A.d_,j,r,q)}},
fzI(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kX(d,!0,A.dg,new B.rn(o),null,A.d_,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kX(d,!0,A.dg,new B.rn(o),null,A.d_,1.4,q,q,p,p+h*r)}},
i1a(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hs(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.yR(n,d,e)
C.tc(n,d)
C.kG(n,20,20,440,814,f,1.2)
C.fzI(n,0,0,1,1,g)
C.fzI(n,480,0,-1,1,g)
C.fzI(n,0,854,1,-1,g)
C.fzI(n,480,854,-1,-1,g)
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
B.kX(n,!0,A.dg,new B.rn(p),o,A.d_,1.2,240,r,60,q)}return n},
fxA(d,e,f,g,h){var w
C.fEh(d,!0,C.fI(g),13,e,f)
C.fEh(d,!0,C.fI(g),9,e,f)
w=B.a([new B.js(e,f-4),new B.js(e+4,f),new B.js(e,f+4),new B.js(e-4,f)],x.J)
B.a2A(d,C.fI(h),w)},
kV(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.js(e,v),new B.js(u,f),new B.js(e,t),new B.js(s,f)],x.J)
if(i){B.a2A(d,C.fI(h),r)
return}B.kX(d,!0,A.dg,C.fI(h),w,A.d_,1,e,u,v,f)
B.kX(d,!0,A.dg,C.fI(h),w,A.d_,1,u,e,f,t)
B.kX(d,!0,A.dg,C.fI(h),w,A.d_,1,e,s,t,f)
B.kX(d,!0,A.dg,C.fI(h),w,A.d_,1,s,e,f,v)},
fmR(d,e,f,g,h,i,j){var w,v=B.a([new B.js(e,f),new B.js(e+g*28,f),new B.js(e,f+h*28)],x.J)
B.a2A(d,C.fI(i),v)
v=e+g*14
w=f+h*14
C.kV(d,v,w,6,j,!0)
C.kV(d,v,w,3,i,!0)},
fmS(d,e,f,g,h){var w=null,v=B.hs(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.yR(v,d,e)
C.tc(v,d)
C.kG(v,18,18,444,818,f,2)
C.kG(v,26,26,428,802,f,0.9)
if(h!=null)B.iU(v,!0,C.fI(h),28,451,28,34)
C.fmR(v,18,18,1,1,g,f)
C.fmR(v,462,18,-1,1,g,f)
C.fmR(v,18,836,1,-1,g,f)
C.fmR(v,462,836,-1,-1,g,f)
return v},
i4n(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hs(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.yR(r,u,4294240980)
C.tc(r,u)
C.kG(r,10,12,460,830,t,3.2)
C.kG(r,18,20,444,814,s,1.2)
C.kG(r,24,26,432,802,t,1.8)
C.hbw(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kV(r,w,16,3,t,!0)
C.kV(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kV(r,16,w,3,t,!0)
C.kV(r,464,w,3,t,!0)}return r},
i4o(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hs(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.yR(p,s,4294373080)
C.tc(p,s)
C.kG(p,16,18,448,818,r,2.4)
C.kG(p,24,26,432,802,4286209044,1)
w=new C.fpg(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hbw(p,!1,!0,r,q,q,34,16,18)
return p},
bCo(d,e,f,g,h,i){B.iU(d,!0,C.fI(i),e,e+g,f,f+h)},
bDf(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kX(d,!1,A.dg,new B.ST(i),null,A.d_,1,e,w,l,l)}},
i5g(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kX(d,!1,A.dg,new B.rn(r),null,A.d_,1,e,s,t,t);++v}return}w=f+g-1
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
B.kX(d,!1,A.dg,new B.rn(r),null,A.d_,1,t,t,f,s);++q}},
i5h(d,e){var w,v,u=null,t=B.hs(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.i5g(t,v,w,30,D.d33,(A.o.ao(v,30)+A.o.ao(w,30)&1)===0)
C.bCo(t,44,44,392,766,d)
C.bDf(t,44,44,392,766,d,e)
C.tc(t,d)
C.kG(t,44,44,392,766,4292128567,2.2)
C.kG(t,50,50,380,754,4279898632,0.8)
return t},
i6o(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kV(d,e,f,7,h,!0)
C.kV(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kX(d,!0,A.dg,C.fI(h),o,A.d_,1.6,w,u,v,t)
B.kX(d,!0,A.dg,C.fI(h),o,A.d_,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kX(d,!0,A.dg,new B.rn(p),o,A.d_,1.2,w,v,q,q)}break
default:B.kX(d,!0,A.dg,C.fI(h),o,A.d_,1.5,e-8,e+8,f,f)
B.kX(d,!0,A.dg,C.fI(h),o,A.d_,1.5,e,e,f-8,f+8)
B.li(d,!0,A.dg,C.fI(h),o,A.d_,2,e,f)}},
i6p(d,e){var w,v,u,t,s=null,r=B.hs(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iU(r,!0,C.fI(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.i6o(r,u,v,w,4292391514)}C.bCo(r,46,46,388,762,d)
C.bDf(r,46,46,388,762,d,e)
C.tc(r,d)
C.kG(r,46,46,388,762,4291404327,1.8)
return r},
hsj(d,e,f,g){C.fEh(d,!0,C.fI(g),16,e,f)
C.fEh(d,!0,C.fI(g),11,e,f)
C.kV(d,e,f,6,g,!0)
B.kX(d,!0,A.dg,C.fI(g),null,A.d_,1.3,e-14,e+14,f,f)
B.kX(d,!0,A.dg,C.fI(g),null,A.d_,1.3,e,e,f-14,f+14)},
i12(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hs(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iU(s,!0,C.fI(4280948752),0,479,0,853)
B.iU(s,!0,C.fI(u),0,479,0,78)
B.iU(s,!0,C.fI(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hsj(s,w,39,t)
C.hsj(s,w,815,t)}C.bCo(s,38,92,404,670,d)
C.bDf(s,38,92,404,670,d,e)
C.tc(s,d)
C.kG(s,38,92,404,670,t,1.8)
C.kG(s,45,99,390,656,4287322667,0.8)
return s},
i5Q(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.js(e,f),new B.js(q-5,w),new B.js(q,f-(18-Math.abs(r)*3)),new B.js(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a2A(d,new B.rn(o),p)}B.li(d,!0,A.dg,C.fI(4292128567),null,A.d_,3,e,f)},
i5R(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hs(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.yR(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kX(q,!0,A.dg,new B.rn(v),s,A.d_,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kX(q,!0,A.dg,new B.rn(u),s,A.d_,1.1,v,v,0,853)}B.iU(q,!0,C.fI(r),0,479,0,70)
B.iU(q,!0,C.fI(r),0,479,798,853)
for(t=0;t<5;++t)C.i5Q(q,70+t*85,48,4292128567)
C.bCo(q,48,78,384,712,d)
C.bDf(q,48,78,384,712,d,e)
C.tc(q,d)
C.kG(q,48,78,384,712,4291404327,1.6)
return q},
iah(d,e){var w,v,u,t=null,s=4279970378,r=B.hs(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iU(r,!0,C.fI(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kV(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.li(r,!0,A.dg,new B.rn(u),t,A.d_,1,v,w)}C.bCo(r,40,40,400,774,d)
C.bDf(r,40,40,400,774,d,e)
C.tc(r,d)
C.kG(r,40,40,400,774,4291058750,2)
C.kG(r,48,48,384,758,s,0.8)
return r},
l6:function l6(d,e){this.a=d
this.b=e},
fOD:function fOD(d){this.a=d},
fOC:function fOC(d){this.a=d},
fpg:function fpg(d){this.a=d},
fPg(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
i6i(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
ha3(d){var w,v,u,t=null,s=A.a.cp(d,"{"),r=A.a.oU(d,"}")
if(s<0||r<=s)return t
try{w=A.X.aN(0,Ak.ahF(A.a.au(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
ag8(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$ag8=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$ag8)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nl(n)
if(e==null)s=A.hV
else{r=C.i6i(e)
s=B.a([new B.a0N(A.cK.gcu().aP(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.re(t,d,s,"news",E.Gs),$async$ag8)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LA(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
bET(d){return C.ijy(d)},
ijy(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bET=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.X.aq(d.ah(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.ag8(r,null),$async$bET)
case 7:q=f
p=C.ha3(q)
if(p==null){u=d
w=1
break}o=d.aE6(p)
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
return B.i($async$bET,v)},
hwj(d){var w,v=F.hcB(d)
v=B.aL(v,"book","newspaper")
if(F.a2T(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fTf(d,e,f,g){return C.ilr(d,e,f,g)},
ilr(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fTf=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fPg(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hA6()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.ag8('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hwj(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fTf)
case 3:r=m.ha3(i)
if(r==null)throw B.W(y.S)
q=new C.zX(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","").aE6(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a2T(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a2T(A.d.aI(t," "))==="sw"?C.bET(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTf,v)},
bEn(d,e,f,g,h){return C.ih8(d,e,f,g,h)},
ih8(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bEn=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fQ(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hA6()
k=A.X.aq(d.ah(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.ag8('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hwj(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bEn)
case 3:p=j.ha3(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cM(o)){n=d.aE6(B.a2(o,x.N,x.z))
m=A.X.aq(n.ah(),null)!==A.X.aq(d.ah(),null)}else{n=d
m=!1}w=m&&F.a2T(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bET(n),$async$bEn)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a8D(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEn,v)},
a8D:function a8D(d,e,f){this.a=d
this.b=e
this.c=f},
iog(d,e){return B.a5(d,!1).cc(B.ej(new C.h_n(e),!0,null,x.H))},
h_n:function h_n(d){this.a=d},
Ws:function Ws(d,e){this.c=d
this.a=e},
aFu:function aFu(d,e,f,g,h,i,j,k){var _=this
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
erw:function erw(d){this.a=d},
erv:function erv(){},
erx:function erx(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
ery:function ery(){},
er8:function er8(d,e){this.a=d
this.b=e},
er4:function er4(d,e){this.a=d
this.b=e},
erf:function erf(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
erh:function erh(d){this.a=d},
era:function era(d,e){this.a=d
this.b=e},
erb:function erb(d,e){this.a=d
this.b=e},
erc:function erc(d,e){this.a=d
this.b=e},
erd:function erd(d){this.a=d},
ere:function ere(d){this.a=d},
er9:function er9(d,e){this.a=d
this.b=e},
er6:function er6(d){this.a=d},
er7:function er7(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d){this.a=d},
erm:function erm(d){this.a=d},
erp:function erp(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
erq:function erq(d){this.a=d},
erk:function erk(d){this.a=d},
err:function err(d){this.a=d},
erj:function erj(d){this.a=d},
ers:function ers(d,e){this.a=d
this.b=e},
eri:function eri(d,e){this.a=d
this.b=e},
ert:function ert(d){this.a=d},
er5:function er5(d,e){this.a=d
this.b=e},
fOc(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fOc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.htS){w=1
break}r=new C.fOd()
t=4
q=x.s
w=7
return B.b(B.iX(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fOc)
case 7:$.htS=!0
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
return B.i($async$fOc,v)},
bEK(d){return A.D9[B.mo(d)-1]+", "+A.oA[B.bL(d)-1]+" "+B.bW(d)+", "+B.bC(d)},
i9l(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.duY[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hd_(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.ft(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.Y(v,new C.fMv(),B.T(v).k("Y<1>")))
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
continue}o=new C.fMx(j,h)
n=new C.fMw(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ao(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j7(o.$1(l)))
j.a+=l}return u},
h9N(d,e){var w=new C.foQ()
return A.d.cG(e,0,new C.foO(w))>=A.d.cG(d,0,new C.foP(w))},
hqZ(d){var w,v,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v))
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
zX:function zX(d,e,f,g,h,i,j,k,l,m){var _=this
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
ciw:function ciw(d){this.a=d},
ciu:function ciu(){},
civ:function civ(){},
tG:function tG(d,e){this.a=d
this.b=e},
BV:function BV(d,e){this.a=d
this.b=e},
lu:function lu(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fOd:function fOd(){},
fMv:function fMv(){},
fMx:function fMx(d,e){this.a=d
this.b=e},
fMw:function fMw(d,e,f){this.a=d
this.b=e
this.c=f},
foQ:function foQ(){},
foR:function foR(){},
foO:function foO(d){this.a=d},
foP:function foP(d){this.a=d},
b2y:function b2y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cix:function cix(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ciy:function ciy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ciz:function ciz(d){this.a=d},
bef:function bef(d){this.a=d},
bee:function bee(d,e){this.b=d
this.a=e},
bwa:function bwa(d){this.a=d},
baK:function baK(d,e){this.b=d
this.a=e},
btF:function btF(d,e){this.b=d
this.a=e},
hCa(d,e){return B.a5(d,!1).cc(B.ej(new C.h_q(e,null),!0,null,x.E))},
h_q:function h_q(d,e){this.a=d
this.b=e},
Wt:function Wt(d,e,f){this.c=d
this.d=e
this.a=f},
aFx:function aFx(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
esi:function esi(){},
esj:function esj(d){this.a=d},
esh:function esh(d,e){this.a=d
this.b=e},
es5:function es5(d){this.a=d},
es6:function es6(d){this.a=d},
esc:function esc(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
esb:function esb(d,e,f){this.a=d
this.b=e
this.c=f},
es7:function es7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ese:function ese(d,e){this.a=d
this.b=e},
es9:function es9(d,e){this.a=d
this.b=e},
esf:function esf(d){this.a=d},
es8:function es8(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
bdM:function bdM(d,e,f){this.b=d
this.c=e
this.a=f},
iom(d){return B.a5(d,!1).cc(B.ej(new C.h_G(),!0,null,x.I))},
bC9(d,e){var w,v,u,t,s,r,q=B.bZ(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hbd(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h_G:function h_G(){},
a0E:function a0E(d){this.a=d},
oQ:function oQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aGW:function aGW(d,e,f,g,h,i,j,k,l){var _=this
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
_.aC=_.aM=_.aH=_.aB=_.a_=_.b8=_.bk=_.y2=0
_.b5=null
_.b4=0.25
_.be=null
_.bM=0.5
_.aL=1
_.c8=_.bG=_.bj=0
_.cL=_.c5=!1
_.c=_.a=null},
f18:function f18(d){this.a=d},
f00:function f00(d,e){this.a=d
this.b=e},
f0o:function f0o(d,e){this.a=d
this.b=e},
f0y:function f0y(d){this.a=d},
f_K:function f_K(d){this.a=d},
f_L:function f_L(d){this.a=d},
f_I:function f_I(d){this.a=d},
f_J:function f_J(d){this.a=d},
f0h:function f0h(d,e){this.a=d
this.b=e},
f0i:function f0i(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0u:function f0u(d,e,f){this.a=d
this.b=e
this.c=f},
f0t:function f0t(d,e){this.a=d
this.b=e},
f0v:function f0v(d,e){this.a=d
this.b=e},
f0s:function f0s(d,e){this.a=d
this.b=e},
f0x:function f0x(d,e,f){this.a=d
this.b=e
this.c=f},
f0w:function f0w(d,e){this.a=d
this.b=e},
f_A:function f_A(d){this.a=d},
f_B:function f_B(d){this.a=d},
f_C:function f_C(d){this.a=d},
f_z:function f_z(){},
f_D:function f_D(d,e){this.a=d
this.b=e},
f_y:function f_y(d,e){this.a=d
this.b=e},
f_F:function f_F(){},
f_E:function f_E(d,e){this.a=d
this.b=e},
f_x:function f_x(d,e){this.a=d
this.b=e},
f_u:function f_u(d,e){this.a=d
this.b=e},
f_G:function f_G(d){this.a=d},
f_w:function f_w(d,e){this.a=d
this.b=e},
f_H:function f_H(d){this.a=d},
f_v:function f_v(d,e){this.a=d
this.b=e},
f0Y:function f0Y(d,e){this.a=d
this.b=e},
f14:function f14(d){this.a=d},
f15:function f15(d,e){this.a=d
this.b=e},
f16:function f16(){},
f0Z:function f0Z(d,e){this.a=d
this.b=e},
f0X:function f0X(d,e){this.a=d
this.b=e},
f1_:function f1_(d,e){this.a=d
this.b=e},
f0W:function f0W(d,e){this.a=d
this.b=e},
f10:function f10(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0V:function f0V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f11:function f11(d){this.a=d},
f12:function f12(d,e){this.a=d
this.b=e},
f13:function f13(d){this.a=d},
f0U:function f0U(d){this.a=d},
f0H:function f0H(d){this.a=d},
f0I:function f0I(d){this.a=d},
f0G:function f0G(d,e){this.a=d
this.b=e},
f0B:function f0B(d,e){this.a=d
this.b=e},
f0J:function f0J(d){this.a=d},
f0M:function f0M(d){this.a=d},
f0F:function f0F(d){this.a=d},
f0N:function f0N(d){this.a=d},
f0O:function f0O(d){this.a=d},
f0P:function f0P(d){this.a=d},
f0Q:function f0Q(d){this.a=d},
f0E:function f0E(d){this.a=d},
f0R:function f0R(d){this.a=d},
f0D:function f0D(d){this.a=d},
f0S:function f0S(d,e){this.a=d
this.b=e},
f0C:function f0C(d,e){this.a=d
this.b=e},
f0T:function f0T(d){this.a=d},
f0K:function f0K(d){this.a=d},
f0L:function f0L(d){this.a=d},
f0l:function f0l(d){this.a=d},
f0k:function f0k(d){this.a=d},
f0m:function f0m(d,e){this.a=d
this.b=e},
f0j:function f0j(d,e){this.a=d
this.b=e},
f0n:function f0n(d){this.a=d},
f0d:function f0d(d){this.a=d},
f0c:function f0c(d){this.a=d},
f0e:function f0e(d){this.a=d},
f0b:function f0b(d){this.a=d},
f0f:function f0f(d,e){this.a=d
this.b=e},
f0a:function f0a(d,e){this.a=d
this.b=e},
f09:function f09(d,e){this.a=d
this.b=e},
f_S:function f_S(d){this.a=d},
f_T:function f_T(d){this.a=d},
f_U:function f_U(d){this.a=d},
f_V:function f_V(d){this.a=d},
f_W:function f_W(d){this.a=d},
f_X:function f_X(d){this.a=d},
f_Y:function f_Y(d){this.a=d},
f_Z:function f_Z(d){this.a=d},
f0_:function f0_(d){this.a=d},
f_d:function f_d(d){this.a=d},
f_e:function f_e(d){this.a=d},
f_f:function f_f(d){this.a=d},
f_g:function f_g(d){this.a=d},
f_h:function f_h(d){this.a=d},
f_c:function f_c(d){this.a=d},
f_i:function f_i(d){this.a=d},
f_j:function f_j(d){this.a=d},
f_M:function f_M(d){this.a=d},
f_N:function f_N(d){this.a=d},
f_O:function f_O(d){this.a=d},
f_P:function f_P(d){this.a=d},
f_Q:function f_Q(d){this.a=d},
f_n:function f_n(d){this.a=d},
f_o:function f_o(d){this.a=d},
f_p:function f_p(d){this.a=d},
f_q:function f_q(d){this.a=d},
f_r:function f_r(d){this.a=d},
f_m:function f_m(d){this.a=d},
f_s:function f_s(d){this.a=d},
f_l:function f_l(d){this.a=d},
f_t:function f_t(d){this.a=d},
f_k:function f_k(d){this.a=d},
f0g:function f0g(d){this.a=d},
f08:function f08(d){this.a=d},
f04:function f04(d){this.a=d},
f03:function f03(d){this.a=d},
f05:function f05(d,e){this.a=d
this.b=e},
f02:function f02(d,e){this.a=d
this.b=e},
f06:function f06(d,e){this.a=d
this.b=e},
f01:function f01(d,e){this.a=d
this.b=e},
f07:function f07(d){this.a=d},
f0r:function f0r(d){this.a=d},
f0q:function f0q(d,e,f){this.a=d
this.b=e
this.c=f},
f0p:function f0p(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f0A:function f0A(d,e){this.a=d
this.b=e},
f0z:function f0z(d,e){this.a=d
this.b=e},
f_R:function f_R(d){this.a=d},
f17:function f17(d){this.a=d},
bhp:function bhp(d,e){this.b=d
this.a=e},
ijJ(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ijK(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).lh(0,d),m=B.C(n,B.a6(n).k("M.E"))
if(m.length===0)return d
w=new B.fi("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.au(d,v,n)
p=m[r].b
p=A.a.au(d,n,p.index+p[0].length)
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
v=t.index+t[0].length}n=w.a=n+A.a.b3(d,v)
return n.charCodeAt(0)==0?n:n},
bCK(){var w=$.bBS,v=$.R8
$.R8=v+1
return w+"_"+v},
ij(d,e,f,g,h,i,j){return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,C.bCK(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.co,D.fc,g,e,f)},
oe(d,e,f,g){var w=f*9
return C.ij(D.eT,d-f/2,e-w/32,f,w/16,g,0)},
i2M(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bBS
p=$.R8
$.R8=p+1
w.push(new C.eP(q+"_"+p,D.fc,0,r,1,0.0016,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.bi,t,t,0,0,!1,"",0,D.co,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bBS
p=$.R8
$.R8=p+1
w.push(new C.eP(q+"_"+p,D.fc,o,0,0.004,1,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.bi,t,t,0,0,!1,"",0,D.co,0,"","","","","",!1,0))}w.push(C.oe(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.oe(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ij(D.bi,0.08,0.08,0.5,0.003,v,0),C.ij(D.bi,0.58,0.08,0.004,0.06,v,0),C.ij(D.bi,0.58,0.14,0.34,0.003,v,0),C.ij(D.bi,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ij(D.bi,0.08,0.8,0.004,0.14,t,0),C.ij(D.bi,0.08,0.94,0.6,0.003,t,0),C.oe(0.58,0.08,0.05,e),C.oe(0.92,0.22,0.05,e),C.oe(0.08,0.8,0.05,f),C.oe(0.68,0.94,0.05,f),C.oe(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ij(D.ln,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ij(D.ln,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ij(D.ln,0.7,0.8,0.22,0.12,w|1140850688,0),C.ij(D.ln,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.oe(0.5,0.5,1.5,w|335544320),C.oe(0.5,0.5,1.15,w|402653184),C.oe(0.5,0.5,0.8,v|436207616),C.oe(0.95,0.05,0.4,v|855638016),C.oe(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.oe(0.85,0.08,0.7,w|1140850688),C.oe(0.1,0.35,0.5,v|855638016),C.oe(0.9,0.62,0.55,v|771751936),C.oe(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ij(D.bi,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ij(D.bi,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ij(D.bi,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ij(D.bi,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.oe(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.oe(0.5,0.2,0.65,(w|3422552064)>>>0),C.oe(0.5,0.2,0.95,w|855638016),C.ij(D.bi,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ij(D.bi,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ij(D.k5,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ij(D.k5,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ij(D.k5,0.15,0.86,0.6,0.14,1712265002,0),C.oe(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.d4C[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bBS
l=$.R8
$.R8=l+1
w.push(new C.eP(m+"_"+l,D.fc,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a7,A.bp,A.aF,k,A.bj,null,D.eT,q,q,0,0,!1,"",0,D.co,0,"","","","","",!1,0))}w.push(C.oe(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ij(D.k5,0.35,-0.1,0.3,0.62,w|855638016,0),C.ij(D.k5,0.05,-0.1,0.3,0.55,v,-0.5),C.ij(D.k5,0.65,-0.1,0.3,0.55,v,0.5),C.oe(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ij(D.bi,0.06,0.04,0.88,0.002,e,0),C.ij(D.bi,0.06,0.96,0.88,0.002,e,0),C.ij(D.bi,0.06,0.04,0.004,0.92,e,0),C.ij(D.bi,0.936,0.04,0.004,0.92,e,0),C.ij(D.bi,0.09,0.07,0.82,0.001,w,0),C.ij(D.bi,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ij(D.k6,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ij(D.k6,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ij(D.k6,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ij(D.bi,0,0,0.3,0.09,w|1140850688,0),C.ij(D.bi,0.7,0.9,0.3,0.1,v|1426063360,0),C.ij(D.bi,0.82,0.04,0.12,0.07,w|771751936,0),C.ij(D.bi,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ij(D.eT,0.62,0.02,0.5,0.16,v,0.6),C.ij(D.eT,0.78,0.12,0.4,0.12,u,0.9),C.ij(D.eT,-0.12,0.8,0.5,0.16,u,-0.6),C.ij(D.eT,-0.05,0.9,0.4,0.12,v,-0.9),C.oe(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ij(D.bi,0.09,0.12,0.16,0.006,e,0),C.ij(D.bi,0.05,0.03,0.9,0.001,w,0),C.ij(D.bi,0.05,0.97,0.9,0.001,w,0)],x.u)}},
igb(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bBS=j
$.R8=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fJU()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ew(A.bj,!1,n,A.aF,"ngmy_quote_background",m,24,A.bp,A.a7,"",1,C.bCK(),g,"","",0,!1,"",0,D.bi,l,2,"",0,0,"",D.co,D.lO,1,0,0))
if(a9)A.d.v(q,C.i2M(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.E(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ijJ(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fJT(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.E(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cD,A.a7))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a7))
if(a0!=null&&a0.length!==0)q.push(C.ew(A.bj,!1,n,A.aF,"ngmy_quote_logo",m,24,A.bp,A.a7,a1,a3*9/16,C.bCK(),a0,"","",0,!1,a2,0,D.bi,l,2,"",0,0,"",D.co,D.lO,a3,a4,a5))
return C.rS(s,r,0,0,q,j+"_slide",D.qP,"","","",D.dh)},
rR:function rR(d,e){this.a=d
this.b=e},
mm:function mm(d,e,f,g,h,i,j,k,l,m){var _=this
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
fJU:function fJU(){},
fJT:function fJT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hTJ(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bk(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.ck1(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.zY(u,t,s,B.w(w==null?"":w))},
fRC(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fRC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hue){w=1
break}$.hue=!0
t=4
w=7
return B.b(B.az(),$async$fRC)
case 7:r=e
q=B.aS(J.r(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.X.aN(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.k2(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gS(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aX(j.a(o.b));h.C();){m=h.gS(h)
l=C.hTJ(m)
if(l!=null)J.cc(n,l)}$.D8.c3(0,B.w(o.a),new C.fRD(n))}C.haT()
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
return B.i($async$fRC,v)},
haT(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.du($.D8,$.D8.r,$.D8.e);w.C();)J.nJ(w.d,new C.fwN(v))
$.D8.bs($.D8,new C.fwO())},
aPD(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aPD=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$aPD)
case 6:s=a0
m=x.N
l=x.z
r=B.U(m,l)
for(k=new B.cE($.D8,B.a6($.D8).k("cE<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aX(q.b);h.C();){o=h.gS(h)
g=o
J.cc(p,B.H(["at",g.a.a9().ae(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aJ(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.X.aq(n,null)),$async$aPD)
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
return B.i($async$aPD,v)},
ikm(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.haT()
w=$.D8.c3(0,d,new C.fRF())
v=Date.now()
u=B.C(e,B.a6(e).k("cs.E"))
J.pR(w,0,new C.zY(new B.V(v,0,!1),f,u,g))
C.aPD()},
ikj(d){var w,v=$.D8.h(0,d)
if(v==null||J.ct(v))return
w=J.cF(v)
w.cz(v,0)
if(w.gan(v))$.D8.W(0,d)
C.aPD()},
zY:function zY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ck1:function ck1(){},
fRD:function fRD(d){this.a=d},
fwN:function fwN(d){this.a=d},
fwO:function fwO(){},
fRF:function fRF(){},
iko(d){return A.d.dN(D.wN,new C.fRI(d),new C.fRJ())},
hTH(d){var w
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
hTG(d){var w
switch(d.a){case 0:w=D.aoX
break
case 1:w=A.z5
break
case 2:w=A.Pq
break
case 3:w=I.aoC
break
case 4:w=A.apt
break
case 5:w=A.me
break
default:w=null}return w},
i5W(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Rt[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Rt[w]
if(!B.cV(v.toLowerCase(),t,0))u=B.cV(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hTI(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.X.aq(B.H(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
ikk(d,e,f,g,h){var w=new B.N(D.wN,new C.fRB(),x.eC).aI(0,", "),v=""+d,u=C.hzZ(h),t=F.fLi(h),s=C.hvU(g),r=e.q(0,D.Jd)?'- New slides get an "emoji".\n':"",q=e.q(0,D.Je)?'- New slides get an "icon3d" from: '+A.d.aI(D.Rt,", ")+".\n":"",p=e.q(0,D.DN)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ikl(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.wN,new C.fRE(),x.eC).aI(0,", "),p=new B.fi("")
if(e.q(0,D.Jd)){p.a=s
w=s}else w=""
if(e.q(0,D.Je))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Rt,", ")+".\n")
if(e.q(0,D.DN))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hzZ(d)
v=F.fLi(d)
u=C.hvU(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ahV(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.Dy(a3,"{"),a5=J.h3_(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.LT(a3,a4,a5+1)
try{w=A.X.aN(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.r(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aX(v),n=x.s,m=x.N;o.C();){t=o.gS(o)
if(!q.b(t))continue
if(p.b(J.r(t,a2))){l=J.b7(p.a(J.r(t,a2)),new C.fPz(),m).bZ(0,new C.fPA())
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
f=C.i5W(B.w(f==null?"":f))
if(f==null)f=""
e=J.r(t,"image_query")
if(e==null)e=J.r(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.r(t,"picture")
d=B.ce(B.w(d==null?0:d),a1)
if(d==null)d=0
J.cc(u,new C.a8L(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.r(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.r(w,"title")
q=A.a.i(B.w(q==null?J.fv(u).b:q))
p=A.d.b_(D.wN,new C.fPB(r))?r:a7
o=C.fw1(J.r(w,"logo_frame"),D.D5)
n=C.fw1(J.r(w,"logo_ring"),D.CZ)
m=C.fw1(J.r(w,"photo_frame"),D.D5)
l=C.fw1(J.r(w,"photo_ring"),D.CZ)
return new C.asn(q,p,u,o,n,m,l)}catch(a0){return a1}},
a2q(d,e){return(A.o.E(e,0,255)<<24|d&16777215)>>>0},
hz5(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.DO),f7=f6?C.i_o():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e6()
v.cZ(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.e_(t,v)
s=u.c
s=new C.o1("luxe",u.a,A.me,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dh)
w=s}if(w==null)w=C.iko(f9.b)
r=g2.q(0,D.a7z)||f6
q=g2.q(0,D.Jd)
p=g2.q(0,D.Tu)
o=new C.fJY()
n=B.a([],x.g)
m=new C.fK0(o,w,r)
l=new C.fK_(o,r)
k=new C.fJZ(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.b_(u,new C.fJX(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.d6i[b8]
c0=D.d58[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.f7G.q(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mY,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.qQ,500,f2,f0))
c1.push(l.$8$fx$key(D.bi,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.Tr
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eT,0.64,0.46,0.42,0.75,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.ln,0.78,0.1,0.18,0.32,(A.o.E(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bi,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.DL
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eT,-0.12,-0.2,0.36,0.64,(A.o.E(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,0.82,0.66,0.26,0.46,(A.o.E(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mY,(A.o.E(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cD,A.U))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.qQ,500,f2,f0))
d3=D.mX
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eT,0.58,0.04,0.44,0.8,(A.o.E(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bi,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.v6:D.co
c1.push(new C.eP(b4,D.a7x,0.64,0.05,0.27,0.9,g1,24,A.a7,A.bp,A.aF,4279310375,A.bj,e4,D.bi,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mX
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eT,-0.15,-0.3,0.5,0.9,(A.o.E(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eT,0.78,0.62,0.3,0.54,(A.o.E(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mY,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.qQ,450,f2,f0))
c1.push(l.$8$fx$key(D.bi,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.Tr
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
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.Jb,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mX}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dh,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i11(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dxq[A.o.F(b1,6)]:s
n.push(new C.lX(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.C8(e4,e4,e4,e4,D.DK,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.au(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fMl(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fMl=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.DN)
n=e.q(0,D.Je)
if(!o&&!n){u=D.a6v
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fMo(o,s[r],n,$.i4E,r).$0())
s=B.U(x.S,x.aH)
m=J
w=3
return B.b(B.iX(t,x.e),$async$fMl)
case 3:q=m.aX(g)
case 4:if(!q.C()){w=5
break}p=q.gS(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fMl,v)},
fLl(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fLl=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.ikl(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aOX(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fLl)
case 3:u=s.aPi(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLl,v)},
bEo(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bEo=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aV(x.N)
for(s=B.eg(f,f.r,B.a6(f).c),r=s.$ti.c;s.C();){q=s.d
t.M(0,(q==null?r.a(q):q).b)}C.ikm(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ahV(i,"colorful")
t=C.ikk(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aOX(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hV),$async$bEo)
case 3:u=o.aPi(m,f,h,g,D.eaW,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEo,v)},
aOX(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aOX=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vK(null,""),$async$aOX)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nl(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.re(t,d,g,"slides",null),$async$aOX)
case 7:q=i
p=q.b
if(p!=null){o=C.ahV(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LA(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aOX,v)},
aPi(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPi=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.DN)||e.q(0,D.Je)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.dh(e,x.Q)
t.W(0,D.DN)}w=6
return B.b(C.fMl(d,t),$async$aPi)
case 6:s=k
w=4
break
case 5:s=D.a6v
case 4:t=d.c
w=A.d.b_(t,new C.foK())?7:9
break
case 7:r=$.hAR
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dV(r,x.aP),$async$aPi)
case 10:q=k
p=q!=null?A.X.aq(q.ah(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hz5(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hTI(new C.asn(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.T(m).k("N<1,m>")
t=B.C(new B.N(m,new C.foL(),n),n.k("ak.E"))
l.cx=t
t=B.a6(e).k("k5<cs.E,m>")
t=B.C(new B.k5(e,new C.foM(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.Tu)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPi,v)},
hdJ(d){var w,v,u,t=d.cy
if(t==null)t=A.Y
w=B.aV(x.Q)
for(v=0;v<6;++v){u=D.a5h[v]
if(A.d.q(t,u.b))w.M(0,u)}return w},
ior(d){return B.bV(A.L,null,new C.h_S(),d,!0,!0,!0,null,!1,!1,x.I)},
i00(d,e){var w,v=e.toLowerCase()
if(A.a.c9(v,".png"))w="image/png"
else w=A.a.c9(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cK.gcu().aP(d)},
ioq(d,e,f){return B.bV(A.L,null,new C.h_R(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hdK(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hdL(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fw1(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.b_(e,new C.fw2(w))?w:""},
hvU(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hAP(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ahV(a1==null?"":a1,a0),a3=C.ahV(a5,a0)
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
for(v=t.length,r=a4.r,q=B.T(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.ow(new B.Y(r,new C.fRK(t[p]),q))
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
g=B.C(new B.Y(k,new C.fRL(),v),r)
A.d.aX(g,new C.fRM())
if(g.length===0)continue
f=new C.fRN(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
ikF(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aKt
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ecP
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ecQ
return null},
hvv(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bf(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.cO(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
ikp(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.E(a1,0,d-1)]],x.g)
w=a0.d===D.oG
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.K)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.K)(q),++o){n=q[o]
if(n.b!==D.cV)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.E(m*0.85,10,120)
break
case 1:j=A.k.E(m*1.15,10,120)
if(C.hvv(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hvv(n,i,v,u))if(n.w>10){f=h+1
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
ikn(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ahV(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aV(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a5h[r]
if(q.b===s)w.M(0,q)}}v=C.hdK(e)
u=C.hdL(e)
p=C.hz5(n,D.a6v,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.T(o).k("N<1,m>")
o=B.C(new B.N(o,new C.fRG(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("k5<cs.E,m>")
o=B.C(new B.k5(w,new C.fRH(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.Tu)
return p},
iod(d,e,f){return B.bV(A.L,null,new C.h_4(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i_o(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e6()
s.cZ(t)
w=D.cKn[s.ap(10)]
v=new C.enX(s)
u=x.N
return new C.enW(w,s.ap(4),J.fv(v.$1$2(D.db4,1,x.ff)),w.r[s.ap(3)],v.$1$2(D.dsB,2+s.ap(2),u),v.$1$2(D.dl0,2,u),v.$1$2(D.dvR,4,x.fP),t)},
i11(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e6()
a1.cZ(a5.w+a3*13)
w=new C.fl5(a4)
v=new C.fl7(a4,d)
u=new C.fl6(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cV){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aY(A.o.fA(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aY(A.o.fA(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c6(a2,0,w.$8(D.eT,0.1+a1.ag()*0.45,0.05+a1.ag()*0.3,0.45,0.75,C.a2q(a0,52),"lux_spot",a5.wR(0,"spotlight")))
else A.d.c6(a2,0,w.$8(D.bi,0,0,1,1,0,"lux_back",a5.wR(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c6(a2,1,w.$8(D.bi,0,0,1,1,0,"lux_back2",a5.aGE(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.022,0.038,0.956,0.924,0,g,a5.wR(0,f),D.dh,150,C.a2q(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.018,0.032,0.964,0.936,0,g,a5.wR(0,f),D.dh,120,C.a2q(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bi,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dh,260,C.a2q(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bi,0,0,1,1,0,"lux_filigree",a5.wR(0,"filigree"),D.dh,200))
break
default:a2.push(w.$10$anim$delay(D.bi,0.08,0.06,0.84,0.004,C.a2q(a0,208),"lux_rule",a5.aGE(0,"shimmer",r),D.v5,150))
a2.push(w.$10$anim$delay(D.bi,0.08,0.936,0.84,0.004,C.a2q(a0,144),"lux_rule2","",D.Jb,220))}l=!A.d.b_(a2,new C.fl4())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wR(0,"crest"),350))
else{o=a1.ha()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wR(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a2q(r,242)
j=a5.wR(0,"orbit")
i=s===D.bi?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qQ,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eT,t-0.007,0.9495,0.014,0.025,C.a2q(r,242),"lux_g2",a5.wR(0,"orbit"),D.qQ,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bi,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aY(A.o.fA(a0,16),8,"0").toUpperCase()))}if((A.d.gI(d.b).a&16777215)<8421504)a2.push(w.$8(D.bi,0,0,1,1,0,"lux_velvet",a5.wR(0,"velvet")))},
o1:function o1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fRI:function fRI(d){this.a=d},
fRJ:function fRJ(){},
wo:function wo(d,e){this.a=d
this.b=e},
a8L:function a8L(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
asn:function asn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fRB:function fRB(){},
fRE:function fRE(){},
fPz:function fPz(){},
fPA:function fPA(){},
fPB:function fPB(d){this.a=d},
fJY:function fJY(){},
fK0:function fK0(d,e,f){this.a=d
this.b=e
this.c=f},
fK_:function fK_(d,e){this.a=d
this.b=e},
fJZ:function fJZ(d,e){this.a=d
this.b=e},
fJX:function fJX(d){this.a=d},
fMo:function fMo(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fMm:function fMm(d){this.a=d},
fMn:function fMn(d){this.a=d},
foK:function foK(){},
foL:function foL(){},
foM:function foM(){},
h_S:function h_S(){},
a1a:function a1a(d){this.a=d},
aIT:function aIT(d,e,f,g,h){var _=this
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
f7z:function f7z(d,e,f){this.a=d
this.b=e
this.c=f},
f7A:function f7A(d,e){this.a=d
this.b=e},
f7x:function f7x(d,e){this.a=d
this.b=e},
f7y:function f7y(d,e){this.a=d
this.b=e},
f7w:function f7w(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
f7r:function f7r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7v:function f7v(d,e){this.a=d
this.b=e},
f7q:function f7q(d,e){this.a=d
this.b=e},
f7u:function f7u(d,e){this.a=d
this.b=e},
f7p:function f7p(d,e){this.a=d
this.b=e},
f7s:function f7s(d){this.a=d},
f7t:function f7t(d,e){this.a=d
this.b=e},
f7f:function f7f(d,e){this.a=d
this.b=e},
f7g:function f7g(d,e){this.a=d
this.b=e},
f7i:function f7i(d){this.a=d},
f7j:function f7j(d){this.a=d},
f7k:function f7k(d){this.a=d},
f7l:function f7l(d){this.a=d},
f7h:function f7h(d,e){this.a=d
this.b=e},
f7m:function f7m(d,e){this.a=d
this.b=e},
f7N:function f7N(d){this.a=d},
f7O:function f7O(d){this.a=d},
f7M:function f7M(d){this.a=d},
f7P:function f7P(d){this.a=d},
f7L:function f7L(d){this.a=d},
f7R:function f7R(d){this.a=d},
f7K:function f7K(d,e){this.a=d
this.b=e},
f7S:function f7S(d){this.a=d},
f7J:function f7J(d,e){this.a=d
this.b=e},
f7T:function f7T(d){this.a=d},
f7I:function f7I(d){this.a=d},
f7U:function f7U(d){this.a=d},
f7H:function f7H(d,e){this.a=d
this.b=e},
f7V:function f7V(d){this.a=d},
f7G:function f7G(d,e){this.a=d
this.b=e},
f7W:function f7W(d){this.a=d},
f7F:function f7F(d){this.a=d},
f7X:function f7X(d,e){this.a=d
this.b=e},
f7E:function f7E(d,e){this.a=d
this.b=e},
f7Y:function f7Y(d){this.a=d},
f7Q:function f7Q(d){this.a=d},
f7D:function f7D(d,e){this.a=d
this.b=e},
f7n:function f7n(d,e,f){this.a=d
this.b=e
this.c=f},
f7o:function f7o(d,e,f){this.a=d
this.b=e
this.c=f},
f7C:function f7C(d,e){this.a=d
this.b=e},
f7B:function f7B(d,e){this.a=d
this.b=e},
h_R:function h_R(d,e){this.a=d
this.b=e},
a19:function a19(d,e,f){this.c=d
this.d=e
this.a=f},
aIS:function aIS(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
f78:function f78(d){this.a=d},
f79:function f79(d){this.a=d},
f7a:function f7a(d,e){this.a=d
this.b=e},
f7b:function f7b(d){this.a=d},
f7c:function f7c(d){this.a=d},
f77:function f77(d,e){this.a=d
this.b=e},
f7d:function f7d(d,e){this.a=d
this.b=e},
f7e:function f7e(d,e){this.a=d
this.b=e},
fw2:function fw2(d){this.a=d},
b2X:function b2X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aFo:function aFo(d,e,f){this.c=d
this.d=e
this.a=f},
bmb:function bmb(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
enZ:function enZ(d){this.a=d},
enY:function enY(){},
bjH:function bjH(d,e){this.b=d
this.a=e},
fRK:function fRK(d){this.a=d},
fRL:function fRL(){},
fRM:function fRM(){},
fRN:function fRN(d){this.a=d},
asV:function asV(d,e){this.a=d
this.b=e},
fRG:function fRG(){},
fRH:function fRH(){},
h_4:function h_4(d,e){this.a=d
this.b=e},
a_w:function a_w(d,e,f){this.c=d
this.d=e
this.a=f},
aCU:function aCU(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
drc:function drc(d){this.a=d},
drd:function drd(d){this.a=d},
dre:function dre(d,e){this.a=d
this.b=e},
drh:function drh(d){this.a=d},
dri:function dri(d,e){this.a=d
this.b=e},
drg:function drg(d,e){this.a=d
this.b=e},
drj:function drj(d){this.a=d},
drf:function drf(d,e){this.a=d
this.b=e},
buM:function buM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
enW:function enW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
enX:function enX(d){this.a=d},
fl5:function fl5(d){this.a=d},
fl7:function fl7(d,e){this.a=d
this.b=e},
fl6:function fl6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fl4:function fl4(){},
aNw:function aNw(){},
hcy(d){var w,v,u
try{w=A.X.aN(0,d,null)
if(x.f.b(w)){v=B.wh(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b2T:function b2T(d,e,f){this.c=d
this.d=e
this.a=f},
bnM:function bnM(d,e){this.c=d
this.a=e},
igF(d){return A.d.dN(D.Ie,new C.fL4(d),new C.fL5())},
igG(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b3(t,6)
if(w.length===0)return null
v=new B.Y(D.Ie,new C.fL6(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gI(0)
return new C.jW("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lr:function lr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fL4:function fL4(d){this.a=d},
fL5:function fL5(){},
fL6:function fL6(d){this.a=d},
nb(d,e,f,g,h){return new C.Fb(f,g,d)},
i2g(d){var w=d.z,v=B.T(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fna(),v),v.k("M.E"))
d.z=w
d.x=""},
dC(d,e){var w=$.KY
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c6(d.z,0,e)},
dD(d,e,f,g,h,i,j,k,l){return C.ew(A.bj,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,"design_"+C.cG(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.co,D.fc,j,k,l)},
hyT(d,e){var w
C.i2g(d)
w=A.d.dN($.bGp(),new C.fIV(e),new C.fIW())
$.KY=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.KY=""}d.z=B.bp(d.z,!0,x.F)},
Fb:function Fb(d,e,f){this.a=d
this.b=e
this.e=f},
fna:function fna(){},
fRc:function fRc(){},
fRd:function fRd(){},
fRe:function fRe(){},
fRp:function fRp(){},
fRu:function fRu(){},
fRv:function fRv(){},
fRw:function fRw(){},
fRx:function fRx(){},
fRy:function fRy(){},
fRz:function fRz(){},
fRA:function fRA(){},
fRf:function fRf(){},
fRg:function fRg(){},
fRh:function fRh(){},
fRi:function fRi(){},
fRj:function fRj(){},
fRk:function fRk(){},
fRl:function fRl(){},
fRm:function fRm(){},
fRn:function fRn(){},
fRo:function fRo(){},
fRq:function fRq(){},
fRr:function fRr(){},
fRs:function fRs(){},
fRt:function fRt(){},
fIV:function fIV(d){this.a=d},
fIW:function fIW(){},
j5(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ew(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bi,4280172719,2,m,n,0,"",o,D.cV,p,q,r)},
Dp(d,e,f,g,h,i,j,k,l){return C.ew(A.bj,!1,4279310375,A.aF,"",d,24,A.bp,A.a7,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.co,D.fc,j,k,l)},
bF7(){var w=new B.V(Date.now(),0,!1)
return A.iN[B.bL(w)-1]+" "+B.bW(w)+", "+B.bC(w)},
eA:function eA(d,e,f){this.a=d
this.b=e
this.c=f},
bCu(d){return new B.j_((A.o.aD(d,24)&255)/255,(A.o.aD(d,16)&255)/255,(A.o.aD(d,8)&255)/255,(d&255)/255)},
i7D(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.anS(A.cF.aP(A.d.gak(d.split(","))))
return w}catch(v){return null}},
i7H(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fvl(),x.dv).aI(0,"\n")},
i7G(d){switch(d.a){case 2:return A.nJ
case 1:case 5:return A.fiX
default:return A.UY}},
i7A(d){switch(d.a){case 2:return A.vH
case 1:case 5:return A.WZ
default:return A.acN}},
i7E(d,e){var w,v=null,u=d.ay,t=A.o.aD(u,24),s=A.o.aD(d.ch,24),r=(t&255)===0?v:C.bCu(u),q=(s&255)===0?v:C.bCu(d.ch),p=A.k.E(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nL(q,p,A.l1)
w=new B.pT(t,t,t,t)}switch(d.ax.a){case 1:return B.lM(v,v,v,new B.kN(r,w,v,A.ae5,v),v,v,v,v)
case 4:return u?new B.fY(v,v,v):B.xq(B.lM(v,v,q,v,p+0.4,v,v,v))
default:return B.lM(v,v,v,new B.kN(r,w,B.vV(4),A.hY,v),v,v,v,v)}},
i7C(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fc?0.4:12,g=A.k.E(d.e*e,h,e),f=A.k.E(d.f*a0,h,a0)
switch(i.a){case 0:w=C.i7A(d.as)
v=A.k.E(d.w*(e/960),3,96)
u=C.i7H(d)
t=C.bCu(d.Q)
s=d.x.a>=700?A.ew:A.wi
r=d.y===A.cD?A.yM:A.anl
q=d.z
p=new B.DB(w,l,l,B.fe(u,l,l,l,B.he(l,t,1===q.a?A.aTL:A.aTK,l,l,l,l,l,l,A.dx,l,l,v,r,s,l,!0,l,l,l,l),C.i7G(d.as)))
break
case 1:case 4:o=C.i7D(d.at)
n=i===D.lO&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xq(B.fe(w,l,l,l,B.he(l,A.tc,l,l,l,l,l,l,l,A.dx,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Ip(o,n?A.ae1:A.Xm,l,l)
break
case 3:w=new B.nL(A.Jy,1,A.l1)
u=B.vV(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lM(A.vH,B.fe(t,l,l,l,B.he(l,D.er4,l,l,l,l,l,l,l,A.dx,l,l,11,l,A.ew,l,!0,l,l,l,l),A.nJ),l,new B.kN(E.aLT,new B.pT(w,w,w,w),u,A.hY,l),l,l,l,l)
break
case 2:p=C.i7E(d,e)
break
case 5:p=C.i7B(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hqd(-w,p)
w=i===D.cV
if(w){m=A.o.aD(d.Q,24)&255
if(m<255)p=new B.atK(m/255,p)}if(w)return new F.wu(k,l,j,l,new B.T_(new B.kM(g,g,f,1/0),p))
if(i===D.lm){i=new B.nL(A.Jy,1,A.l1)
i=B.lM(A.vH,p,l,new B.kN(A.py,new B.pT(i,i,i,i),B.vV(4),A.hY,l),l,l,D.bF6,l)}else i=p
return new F.wu(k,l,j,l,new B.fY(g,f,i))},
i7F(d,e,f,g){var w,v=null,u=C.bCu(d.e),t=d.f
t=B.a([F.hoQ(t!=null?B.lM(v,v,v,new B.kN(v,v,v,A.hY,new B.aYo(E.X0,A.acH,B.a([u,C.bCu(t)],x.cR),v)),v,v,v,v):B.lM(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.N(w,new C.fvk(f,g),B.T(w).k("N<1,fj>")))
return F.cyU(t)},
hdN(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hdN=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a51(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Xe(A.wW,A.Jv,D.bGj,null,null,null,!1,null)
o=new B.Cd(o,new C.fRT(607,787,p,d))
o.Ne(n,null)
r.push(o)}u=n.jF(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hdN,v)},
i7B(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hcy(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gakQ()
if(h==null)h=A.aB5
j=B.tT(4279308564)
w=B.vV(18)
v=new B.nL(B.tT(4287531653),3,A.l1)
u=i.length===0?"My links":i
u=B.a([B.xq(B.fe(u,m,m,m,B.he(m,A.py,m,m,m,m,m,m,m,A.dx,m,m,12,m,A.ew,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xq(B.fe(A.a.i(l.c),m,m,m,D.fqC,m)))
u.push(new B.fY(m,8,m))
for(t=B.d2(h,0,B.dz(8,"count",x.S),B.T(h).c),s=t.$ti,t=new B.bS(t,t.gK(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tT(4280690220)
o=new B.aa5(8,8)
n=A.a.i(r.b)
u.push(new B.o2(D.bzb,new C.ay3(new C.aj1(q),B.lM(m,B.fe(n.length===0?A.a.i(r.c):n,m,m,m,D.ft0,A.nJ),m,new B.kN(p,m,new B.ajs(o,o,o,o),A.hY,m),m,m,D.bFz,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xq(B.fe(k,m,m,m,D.fse,m))
u.push(new C.ay3(C.hHH(k),t))}return B.lM(m,B.ze(u,A.Ni,A.lN),m,new B.kN(j,new B.pT(v,v,v,v),w,A.hY,m),m,m,D.bA2,m)},
fvl:function fvl(){},
fvk:function fvk(d,e){this.a=d
this.b=e},
fRT:function fRT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ahI(d){var w,v
for(w=0;w<32;++w){v=D.I5[w]
if(v.a===d)return v}return null},
hsQ(d){var w,v,u=A.a.cp(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cF.aP(A.a.b3(d,u+1))
return w}catch(v){return null}},
d_(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hC6(d,e){return B.a5(d,!1).cc(B.ej(new C.fYu(e),!0,null,x.fB))},
hC5(d,e){return B.bV(A.L,null,new C.fYt(e),d,!0,!0,!0,null,!1,!1,x.fB)},
ja:function ja(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
F2:function F2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
O4:function O4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
blx:function blx(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a8$=f
_.c=_.a=null},
e1x:function e1x(d){this.a=d},
e1w:function e1w(d,e,f){this.a=d
this.b=e
this.c=f},
e1v:function e1v(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btk:function btk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f6m:function f6m(d,e){this.a=d
this.b=e},
bgt:function bgt(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b0N:function b0N(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ces:function ces(){},
cet:function cet(d){this.a=d},
ceu:function ceu(d,e,f){this.a=d
this.b=e
this.c=f},
cev:function cev(d,e,f){this.a=d
this.b=e
this.c=f},
fYu:function fYu(d){this.a=d},
a_3:function a_3(d,e){this.c=d
this.a=e},
aBh:function aBh(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dgq:function dgq(d,e,f){this.a=d
this.b=e
this.c=f},
dgv:function dgv(d){this.a=d},
dgw:function dgw(d){this.a=d},
dgu:function dgu(d){this.a=d},
dgx:function dgx(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgy:function dgy(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgz:function dgz(d){this.a=d},
dgr:function dgr(d,e){this.a=d
this.b=e},
dgA:function dgA(d,e){this.a=d
this.b=e},
fYt:function fYt(d){this.a=d},
fYs:function fYs(d){this.a=d},
fYr:function fYr(d,e,f){this.a=d
this.b=e
this.c=f},
fYq:function fYq(d,e){this.a=d
this.b=e},
aN0:function aN0(){},
iop(d){return B.bV(A.L,null,new C.h_Q(),d,!0,!0,!0,null,!1,!1,x.N)},
h_Q:function h_Q(){},
a_o:function a_o(d){this.a=d},
bi0:function bi0(d){this.d=d
this.c=this.a=null},
dne:function dne(d){this.a=d},
dnf:function dnf(d,e){this.a=d
this.b=e},
dng:function dng(d){this.a=d},
i3T(d){var w,v=d.split("@")
if(v.length>1){w=B.ce(v[1],16)
if(w!=null)return B.b1(w)}return D.yb},
iiA(d){var w,v=A.d.gI(d.split("@"))
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
iiz(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gI(d.split("@")),p=C.i3T(d)
switch(q){case"shimmer":return B.o6(A.LA,g,new C.fOw(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.e_(B.b4(r,r,r,new C.bhl(e,f,p,r),A.ax),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dR(B.ee(A.A,B.db(F.bWG(g,B.TZ(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.e_(B.b4(r,r,r,new C.bh2(e,p,r),A.ax),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.E(0.55+s*0.45,0,1)
return B.db(B.eM(A.A,e*0.5,B.ee(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dt()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fN(e)
u.mV(Math.sin(e)*0.3)
return B.dR(B.fA(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.a_,r,A.b3,A.t,B.a([B.e_(B.b4(r,r,r,new C.bq6(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.a_,r,A.b3,A.t,B.a([B.e_(B.b4(r,r,r,new C.bbS(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"aurora":return new B.an(A.a_,r,A.b3,A.t,B.a([B.e_(B.b4(r,r,r,new C.bbw(e,f,p,r),A.ax),!0,r),g],x.p),r)
case"velvet":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.e_(B.b4(r,r,r,new C.bx8(e,p,r),A.ax),!0,r)],x.p),r)
case"sparkle":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.e_(B.b4(r,r,r,new C.bu7(e,f,p,r),A.ax),!0,r)],x.p),r)
case"sheen":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.e_(B.b4(r,r,r,new C.btg(e,p,r),A.ax),!0,r)],x.p),r)
case"filigree":return new B.an(A.a_,r,A.b3,A.t,B.a([g,B.e_(B.b4(r,r,r,new C.bgm(e,p,r),A.ax),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ab,A.f,B.a([B.bT(0,B.e_(B.ee(A.A,B.c4(r,new B.o(r,r,r,r,r,new B.c_(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bh),1.6+s*0.15,r,r),!0,r),0,0,0),B.eM(A.A,s*0.06,B.ee(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fOw:function fOw(d,e){this.a=d
this.b=e},
bhl:function bhl(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bh2:function bh2(d,e,f){this.b=d
this.c=e
this.a=f},
bq6:function bq6(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbS:function bbS(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bbw:function bbw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bx8:function bx8(d,e,f){this.b=d
this.c=e
this.a=f},
bu7:function bu7(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
btg:function btg(d,e,f){this.b=d
this.c=e
this.a=f},
bgm:function bgm(d,e,f){this.b=d
this.d=e
this.a=f},
dg7:function dg7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
y_:function y_(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fOz(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.lm},
iiF(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aX(j,new C.fOA())
s=A.d.gI(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gI(B.aRZ(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
iiE(d,e){var w,v,u,t,s,r=d.db
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
d.e=A.k.E(s,0.06,u)}else{d.w=A.k.E((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.E(r*(d.w*0.001)+0.028,0.06,u)},
ahm(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahm=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.T(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fGV(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bV(A.dP,null,new C.fGW(e),d,!0,!0,!1,A.lP,!1,!1,x.N),$async$ahm)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gI(e).hR())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.her(d),$async$ahm)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.LL(d,"Search states\u2026","",A.kq,"Choose state"),$async$ahm)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hdk(s)
if(p==null)p=A.d.gI(D.Sk)
f=C.cG()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cG()
m=p.e
l=C.fOB(p.d)
k=x.u
j=B.a([C.ew(A.bj,!1,4279310375,A.aF,"marriage_locked_bg",4280640491,24,A.bp,A.a7,"",1,C.cG(),l,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lO,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Db(i,0.016,D.ln,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Db(0,0.058,D.eT,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Db(0,0.058,D.eT,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.L8("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.L8("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a7,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.haa(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bBY("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a21("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a21("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a21("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a21("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bBY("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Db(m,0.082,D.bi,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cG()
k.push(C.ew(A.bj,!1,i,A.aF,"marriage_field_utangulizi:"+A.k.ac(0.78,3),4280640491,9.5,A.bp,A.cA,"",0.074,g,null,"","",0,!1,"",0,D.bi,4280172719,2,y.O,0,0,"",D.co,D.cV,0.78,0.11,0.388))
A.d.v(k,C.haa(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bBY("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.huV("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.huV("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a21("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a21("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bBX("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bBX("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bBY("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.L8("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.L8("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bBX("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bBX("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bBY("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a21("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bBX("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a21("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.haa(0.22,0.83,0.56,4291404327,i),h)
h.push(C.L8("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.L8("Nakala ya Hati",A.K,4291404327,9,A.a7,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.C8(null,null,null,null,D.oG,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rS(m,null,0,0,j,n,D.qP,"","","Hati ya Ndoa",D.dh)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahm,v)},
fOA:function fOA(){},
fGV:function fGV(){},
fGW:function fGW(d){this.a=d},
fGT:function fGT(d){this.a=d},
fGU:function fGU(d){this.a=d},
i71(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
i70(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.n2
case"lineThrough":return A.x4
default:return A.aF}},
ew(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eP(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hx3(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.S3[w]
if(v.b===u)return v}return D.dh},
i3f(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d1H[w]
if(v.b===u)return v}return D.cV},
i9V(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dtk[w]
if(v.b===u)return v}return D.bi},
rS(d,e,f,g,h,i,j,k,l,m,n){return new C.lX(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hnB(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.i5l(d.h(0,"layout"))
t=B.aK(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aK(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hx3(d.h(0,"transition"))
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
n=B.cH(n,new C.cjZ(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a6(n).k("M.E"))}return C.rS(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
i5l(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.asI[w]
if(v.b===u)return v}return D.mX},
C8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.i7(p,t,a1,h,i,w,a0==null?B.a([C.rS(4294967295,null,0,0,null,C.cG(),D.qP,"","","",D.dh)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
WC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i1h(a6.h(0,"aspectRatio"))
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
o=C.kI(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kI(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b7(f,new C.cjM(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cjN(),x.N)
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
g=B.cH(g,new C.cjO(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a6(g).k("M.E"))}return C.C8(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rS(4294967295,a3,0,0,a3,C.cG(),D.qP,"","","",D.dh)],x.g):g,v,p,o,s)},
kI(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i1h(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dud[w]
if(v.b===u)return v}return D.DK},
cG(){var w=Date.now(),v=$.jb
$.jb=v+1
return""+1000*w+"_"+v},
ckf(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.aa(d.z)
if(e!==D.DL){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cG()
v=C.ew(A.K,!1,f.d.l(),A.aF,"",n,40,A.bp,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bi,m,2,o,0,0,"",D.co,D.cV,0.84,0.08,0.3)
u=C.cG()
A.d.v(w,B.a([v,C.ew(A.K,!1,f.e.l(),A.aF,"",n,20,A.bp,A.cA,"",0.12,u,p,"","",0,!1,"",0,D.bi,m,2,"Click to add subtitle",0,0,"",D.co,D.cV,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cG()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,32,A.bp,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bi,m,2,o,0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cG()
A.d.v(w,B.a([v,C.ew(A.bj,!0,f.e.l(),A.aF,"",n,20,A.bp,A.cA,"",0.68,u,p,"","",0,!1,"",0,D.bi,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.co,D.cV,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cG()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bi,m,2,"Two Column Slide",0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cG()
t=f.e
u=C.ew(A.bj,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,u,p,"","",0,!1,"",0,D.bi,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.co,D.cV,0.42,0.06,0.22)
s=C.cG()
A.d.v(w,B.a([v,u,C.ew(A.bj,!0,t.l(),A.aF,"",n,18,A.bp,A.a7,"",0.7,s,p,"","",0,!1,"",0,D.bi,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.co,D.cV,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.M(d.z,C.ew(A.K,!1,4294967295,A.aF,"",n,42,A.bp,A.u,"",0.2,C.cG(),p,"","",0,!1,"",0,D.bi,m,2,"Section Header",0,0,"",D.co,D.cV,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cG()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,30,A.bp,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bi,m,2,"Compare",0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cG()
t=f.c
u=C.ew(A.bj,!1,l,A.aF,"",t.j(0.12).l(),24,A.bp,A.a7,"",0.68,u,p,"","",0,!1,"",0,D.bi,t.l(),2,"",0,0,"",D.co,D.fc,0.42,0.06,0.22)
s=C.cG()
r=f.e
s=C.ew(A.bj,!1,r.l(),A.aF,"",n,20,A.bp,A.U,"",0.6,s,p,"","",0,!1,"",0,D.bi,m,2,"Option A",0,0,"",D.co,D.cV,0.38,0.08,0.26)
q=C.cG()
t=C.ew(A.bj,!1,l,A.aF,"",t.j(0.06).l(),24,A.bp,A.a7,"",0.68,q,p,"","",0,!1,"",0,D.bi,t.j(0.5).l(),2,"",0,0,"",D.co,D.fc,0.42,0.52,0.22)
q=C.cG()
A.d.v(w,B.a([v,u,s,t,C.ew(A.bj,!1,r.l(),A.aF,"",n,20,A.bp,A.U,"",0.6,q,p,"","",0,!1,"",0,D.bi,m,2,"Option B",0,0,"",D.co,D.cV,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cG()
v=C.ew(A.K,!1,f.d.l(),A.aF,"",n,36,A.bp,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bi,m,2,"TERM / QUESTION",0,0,"",D.co,D.cV,0.8,0.1,0.12)
u=C.cG()
A.d.v(w,B.a([v,C.ew(A.K,!1,f.e.l(),A.aF,"",n,22,A.bp,A.cA,"",0.35,u,p,"","",0,!1,"",0,D.bi,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.co,D.cV,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cG()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,28,A.bp,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bi,m,2,"Quiz Question",0,0,"",D.co,D.cV,0.88,0.06,0.06)
u=C.cG()
A.d.v(w,B.a([v,C.ew(A.bj,!1,f.e.l(),A.aF,"",n,20,A.bp,A.a7,"",0.62,u,p,"","",0,!1,"",0,D.bi,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.co,D.cV,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cG()
v=C.ew(A.bj,!1,f.d.l(),A.aF,"",n,26,A.bp,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bi,m,2,"Worksheet / Assignment",0,0,"",D.co,D.cV,0.88,0.06,0.04)
u=C.cG()
A.d.v(w,B.a([v,C.ew(A.bj,!1,f.e.l(),A.aF,"",n,18,A.bp,A.a7,"",0.78,u,p,"","",0,!1,"",0,D.bi,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.co,D.cV,0.88,0.06,0.16)],x.u))
break}},
hTS(d){return A.d.dN(D.a4V,new C.ckg(d),new C.ckh())},
hTP(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.X.aN(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aX(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gS(t)
if(!q.b(u))continue
try{J.cc(v,C.WC(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
h6t(d,e){var w,v,u,t=B.U(x.N,x.I),s=new C.ckb(t)
for(w=J.aX(d);w.C();)s.$1(w.gS(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("b9<2>")
u=B.C(new B.b9(t,w),w.k("M.E"))
A.d.aX(u,new C.cka())
return u},
hnE(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.ck6()
if(u!==w)return u>=w?d:e
return v.$1(d).ce(v.$1(e))?d:e},
aso(d){return C.hTN(d)},
hTN(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aso=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.ck9()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3c(m),$async$aso)
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
return B.b(B.az(),$async$aso)
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
case 11:o=l.$1($.hnD.h(0,m))
n=C.h6t(C.h6t(j,r),o)
if(n.length===0){u=C.hnE(C.hnE(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aso,v)},
ck5(d){return C.hTM(d)},
hTM(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$ck5=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.az(),$async$ck5)
case 7:r=f
q=r.tH("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Y
q=B.jU(q,B.T(q).c)
u=q
w=1
break
t=2
w=6
break
case 4:t=3
o=s.pop()
u=B.aV(x.N)
w=1
break
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ck5,v)},
b2Z(d,e){return C.hTO(d,e)},
hTO(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b2Z=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.az(),$async$b2Z)
case 6:s=g
q=s.tH("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.M(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.LS(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b2Z)
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
return B.i($async$b2Z,v)},
WD(d,e){return C.hTQ(d,e)},
hTQ(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$WD=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hnC.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aso(a3),$async$WD)
case 5:p=a6
case 4:w=6
return B.b(C.ck5(a3),$async$WD)
case 6:o=a6
n=B.U(x.N,x.I)
for(m=J.aX(p);m.C();){l=m.gS(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.K)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbr())k=f===g.gbr()&&k.b>g.gcE()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b9<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b9(n,m),new C.ckc(o),l),l.k("M.E"))
A.d.aX(e,new C.ckd())
$.hnC.n(0,a0,e)
n=B.T(e).k("N<1,a8<m,@>>")
n=B.C(new B.N(e,new C.cke(),n),n.k("ak.E"))
r=A.X.aq(n,null)
$.hnD.n(0,a0,r)
t=8
w=11
return B.b(B.ai9(a0,r),$async$WD)
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
return B.b(B.az(),$async$WD)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$WD)
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
return B.i($async$WD,v)},
Jj:function Jj(d,e){this.a=d
this.b=e},
asm:function asm(d,e){this.a=d
this.b=e},
v7:function v7(d,e){this.a=d
this.b=e},
mQ:function mQ(d,e){this.a=d
this.b=e},
hJ:function hJ(d,e){this.a=d
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
lX:function lX(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ck_:function ck_(){},
ck0:function ck0(){},
cjZ:function cjZ(){},
i7:function i7(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cjP:function cjP(){},
cjQ:function cjQ(){},
cjM:function cjM(){},
cjN:function cjN(){},
cjO:function cjO(){},
jW:function jW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ckg:function ckg(d){this.a=d},
ckh:function ckh(){},
ckb:function ckb(d){this.a=d},
cka:function cka(){},
ck6:function ck6(){},
ck7:function ck7(){},
ck8:function ck8(){},
ck9:function ck9(){},
ckc:function ckc(d){this.a=d},
ckd:function ckd(){},
cke:function cke(){},
iiQ(d,e){var w=x.N,v=B.U(w,x.F)
w=new C.fP8(e,v,d,B.aV(w))
w.$1(new C.fP4())
w.$1(new C.fP5())
w.$1(new C.fP6())
w.$1(new C.fP7())
return v},
fP8:function fP8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fP4:function fP4(){},
fP5:function fP5(){},
fP6:function fP6(){},
fP7:function fP7(){},
b2W:function b2W(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cjV:function cjV(d){this.a=d},
cjU:function cjU(){},
cjW:function cjW(){},
cjX:function cjX(d,e){this.a=d
this.b=e},
cjY:function cjY(d){this.a=d},
apo:function apo(d,e){this.c=d
this.a=e},
blh:function blh(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
dOG:function dOG(){},
aMM:function aMM(){},
ck2(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$ck2=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.fg8)
u=!1
w=1
break}u=B.l8(!1,d,t,!1,null,A.a7B,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ck2,v)},
hTK(d){var w=A.d.bg(D.Ie,new C.ck3(d))
if(w<0)return!0
return w>=4},
hTL(d){var w=A.d.bg($.bGp(),new C.ck4(d))
if(w<0)return!0
return w>=5},
ck3:function ck3(d){this.a=d},
ck4:function ck4(d){this.a=d},
ikz(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xf()
$.pO().p0(t,new C.fS_(s),!0)
u=B.a([B.BH(v,A.pz,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ap(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fr4,v,v,v),A.f,v,v,new B.o(A.aS,v,v,w,v,v,A.n),v,v,v,v,A.mN,v,v,v),v,v,4,v,4,v))}return new B.an(A.a_,v,A.b3,A.t,u,v)},
fS_:function fS_(d){this.a=d},
ika(){return C.hdG()},
ih3(){return C.bEl()},
ij8(){return C.hdx()},
aR1(d,e,f){var w=0,v=B.j(x.H),u
var $async$aR1=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fR5(d,f),$async$aR1)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aR1,v)},
fR5(d,e){var w=0,v=B.j(x.H),u
var $async$fR5=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bCv
if(u==null)u=e+".pdf"
w=2
return B.b(B.bV(A.L,null,new C.fR6(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fR5)
case 2:return B.h(null,v)}})
return B.i($async$fR5,v)},
fR6:function fR6(d,e){this.a=d
this.b=e},
ae7:function ae7(d,e,f){this.c=d
this.d=e
this.a=f},
eAi:function eAi(d,e){this.a=d
this.b=e},
eAj:function eAj(d,e){this.a=d
this.b=e},
eAk:function eAk(d,e){this.a=d
this.b=e},
eAl:function eAl(d){this.a=d},
aeo:function aeo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b2V(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b2U(g,m,f,d,e,h,l,k,j,o,i,null)},
hAd(d){return B.cu(new C.fP3(d))},
hdI(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
iki(d){if(d===D.co)return"None"
return C.hdI(d)},
bD0(d,e,f,g){return C.ia1(d,e,f,g)},
ia1(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bD0=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.hat&&t.pT())t.eN()
$.hat=!0
s.a=null
w=3
return B.b(B.i3(A.bk,!0,"Animation preview",d,new C.fy8(s,e,g,f),null,A.eH,!0,x.H),$async$bD0)
case 3:s=s.a
if(s!=null)s.a2(0)
$.hat=!1
case 1:return B.h(u,v)}})
return B.i($async$bD0,v)},
h0E(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h0E=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bZ,x.w).w.a.a*0.88,280,440)
s=f===D.co
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hdI(f)+" Slide transition preview"
s=s?Ah.Gw:A.ue
w=3
return B.b(C.bD0(d,s,new B.a4(t,t*0.56,B.bx(B.n(14),new C.aKh(f,null),A.ap),null),r),$async$h0E)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h0E,v)},
hzv(d,e,f){var w,v,u=null,t=A.cu.aw(0,A.k.E(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.db(f,t)
case 2:case 17:return B.dR(B.db(f,t),new B.u((1-t)*48,0))
case 3:return B.dR(B.db(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dR(B.db(f,t),new B.u(0,(1-t)*36))
case 5:return B.dR(B.db(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ee(A.A,B.db(f,t),0.5+t*0.5,u,u)
case 7:return B.ee(A.A,B.db(f,t),1.4-t*0.4,u,u)
case 8:w=B.dt()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fN((1-t)*1.2)
return B.fA(A.A,B.db(f,t),u,w,!0)
case 9:w=B.dt()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.km((1-t)*1.2)
return B.fA(A.A,B.db(f,t),u,w,!0)
case 10:case 19:w=B.dt()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mV((1-t)*0.8)
v=0.6+t*0.4
w.k0(v,v,v,1)
return B.fA(A.A,B.db(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dR(B.db(f,t),new B.u((1-t)*24,0))}},
bFU(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bFU=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.E(B.aG(d,A.bZ,x.w).w.a.a*0.88,300,440)
s=f===D.co
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hdI(f)+" Element animation preview"
s=s?Ah.Gw:A.ue
w=3
return B.b(C.bD0(d,s,new B.a4(t,t*0.62,B.bx(B.n(14),new C.aAX(f,null),A.ap),null),r),$async$bFU)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bFU,v)},
ikh(d){var w,v,u,t,s=$.agO.W(0,d)
if(s!=null){$.agO.n(0,d,s)
return s}w=A.cF.aP(A.a.b3(d,A.a.cp(d,",")+1))
$.agO.n(0,d,w)
v=$.hbi=$.hbi+w.length
u=B.a6($.agO).k("cy<1>")
for(;;){if(!(v>41943040&&$.agO.a>1))break
t=new B.cy($.agO,u).gaf(0)
if(!t.C())B.ba(B.fs())
v-=$.agO.W(0,t.gS(0)).length
$.hbi=v}return w},
ijX(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).lh(0,d),j=B.C(k,B.a6(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.au(d,r,o)
m=f.$1(e)
v.push(new B.es(n,l,l,A.cL,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Tn(s,A.u))
v.push(new B.es(n,l,l,A.cL,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Tn(t,A.u))
v.push(new B.es(n,l,l,A.cL,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Tn(u,A.cA))
v.push(new B.es(n,l,l,A.cL,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b3(d,r)
v.push(B.cT(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3b(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.jM(e))
return m
case"rounded":m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
w=e.gdE()*0.18
m.D(new B.iV(B.br(e,new B.aP(w,w))))
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
m.bcr(new B.u(t,p),new B.aP(s,s))
m.D(new B.aq(t,u))
m.D(new B.bt())
return m
default:m=new B.aF($.S().r,A.ag,n,n,B.a([],m))
m.D(new B.on(e))
return m}},
fMD(d,e,f){return B.cu(new C.fME(D.f8k.q(0,d),d,f,e))},
b2U:function b2U(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cjT:function cjT(d){this.a=d},
cjS:function cjS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cjR:function cjR(){},
b2R:function b2R(d,e){this.b=d
this.a=e},
fP3:function fP3(d){this.a=d},
fP2:function fP2(d,e){this.a=d
this.b=e},
fy8:function fy8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fy6:function fy6(d){this.a=d},
fy7:function fy7(d,e){this.a=d
this.b=e},
aKh:function aKh(d,e){this.c=d
this.a=e},
bwD:function bwD(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
feU:function feU(d,e,f){this.a=d
this.b=e
this.c=f},
aL_:function aL_(d,e){this.b=d
this.a=e},
VK:function VK(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
blt:function blt(d,e){var _=this
_.d=$
_.bw$=d
_.a8$=e
_.c=_.a=null},
e_g:function e_g(d){this.a=d},
e_f:function e_f(d){this.a=d},
e_e:function e_e(d){this.a=d},
Ji:function Ji(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cjL:function cjL(d){this.a=d},
cjK:function cjK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aAX:function aAX(d,e){this.c=d
this.a=e},
bfN:function bfN(){this.d=0
this.c=this.a=null},
ddl:function ddl(d){this.a=d},
ddk:function ddk(d){this.a=d},
a8t:function a8t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bm9:function bm9(d,e){var _=this
_.d=null
_.bw$=d
_.a8$=e
_.c=_.a=null},
enF:function enF(d,e,f){this.a=d
this.b=e
this.c=f},
b0Q:function b0Q(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bh0:function bh0(d,e,f){this.b=d
this.c=e
this.a=f},
bsa:function bsa(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f3M:function f3M(){},
fME:function fME(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btd:function btd(d,e,f){this.b=d
this.c=e
this.a=f},
aN_:function aN_(){},
aNu:function aNu(){},
aOO:function aOO(){},
fQ4(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fQ4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xB.ca().MC(D.drd,A.us,!0),$async$fQ4)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fv(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ijR(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQ4,v)},
ijR(d,e){var w,v=d.toLowerCase()
if(A.a.c9(v,".pdf"))return new C.a8M(d,new B.a0N(A.cK.gcu().aP(e),"application/pdf"),"")
if(A.a.c9(v,".docx")){w=C.ibK(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a8M(d,null,w.length>6e4?A.a.au(w,0,6e4):w)}w=A.ch.Ll(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a8M(d,null,w.length>6e4?A.a.au(w,0,6e4):w)},
ibK(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cF5().cOK(B.rC(d,A.im,o,o),o,o,!1).cQB(0,"word/document.xml")
if(n==null)return""
w=n.cYK()
v=A.ch.Ll(0,w==null?$.hCD():w,!0).split("</w:p>")
u=new B.fi("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).lh(0,r)
p=A.a.i(B.cH(q,new C.fB8(),B.a6(q).k("M.E"),t).hf(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a8M:function a8M(d,e,f){this.a=d
this.b=e
this.c=f},
fB8:function fB8(){},
hTR(d,e,f,g,h,i,j,k,l){return new C.Oy(l,e,d,g,f,i,h,j,k,null)},
Oy:function Oy(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFO:function aFO(d,e,f,g,h,i,j,k,l){var _=this
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
eGw:function eGw(d){this.a=d},
eGu:function eGu(){},
eGv:function eGv(d){this.a=d},
eCU:function eCU(){},
eCV:function eCV(){},
eCW:function eCW(d,e){this.a=d
this.b=e},
eEu:function eEu(d){this.a=d},
eEi:function eEi(){},
eEj:function eEj(){},
eCh:function eCh(){},
eFC:function eFC(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eEs:function eEs(d,e){this.a=d
this.b=e},
eGf:function eGf(d){this.a=d},
eGg:function eGg(){},
eGh:function eGh(){},
eGi:function eGi(d){this.a=d},
eGj:function eGj(){},
eBG:function eBG(d){this.a=d},
eGt:function eGt(){},
eDB:function eDB(d,e){this.a=d
this.b=e},
eBE:function eBE(d){this.a=d},
eBF:function eBF(d){this.a=d},
eDY:function eDY(d){this.a=d},
eDZ:function eDZ(d,e,f){this.a=d
this.b=e
this.c=f},
eE_:function eE_(d){this.a=d},
eDA:function eDA(){},
eDz:function eDz(d){this.a=d},
eDx:function eDx(){},
eDw:function eDw(d){this.a=d},
eDy:function eDy(){},
eCQ:function eCQ(d){this.a=d},
eCR:function eCR(d){this.a=d},
eDH:function eDH(d){this.a=d},
eDC:function eDC(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDI:function eDI(d,e){this.a=d
this.b=e},
eBI:function eBI(){},
eBJ:function eBJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDT:function eDT(){},
eDU:function eDU(d,e){this.a=d
this.b=e},
eDR:function eDR(d,e,f){this.a=d
this.b=e
this.c=f},
eDS:function eDS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDL:function eDL(d,e,f){this.a=d
this.b=e
this.c=f},
eDM:function eDM(d,e,f){this.a=d
this.b=e
this.c=f},
eDN:function eDN(d){this.a=d},
eDO:function eDO(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eDW:function eDW(d){this.a=d},
eDX:function eDX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDV:function eDV(d){this.a=d},
eEd:function eEd(){},
eEe:function eEe(){},
eEf:function eEf(){},
eEg:function eEg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEa:function eEa(d){this.a=d},
eEc:function eEc(){},
eEb:function eEb(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eE8:function eE8(d,e,f){this.a=d
this.b=e
this.c=f},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEh:function eEh(){},
eDJ:function eDJ(d,e){this.a=d
this.b=e},
eBZ:function eBZ(){},
eC_:function eC_(d,e,f){this.a=d
this.b=e
this.c=f},
eC0:function eC0(d){this.a=d},
eC1:function eC1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eBY:function eBY(d){this.a=d},
eEn:function eEn(d){this.a=d},
eEm:function eEm(d,e){this.a=d
this.b=e},
eEl:function eEl(d,e){this.a=d
this.b=e},
eEk:function eEk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEo:function eEo(d,e){this.a=d
this.b=e},
eAD:function eAD(d,e){this.a=d
this.b=e},
eBX:function eBX(d,e){this.a=d
this.b=e},
eBV:function eBV(d){this.a=d},
eEw:function eEw(d,e,f){this.a=d
this.b=e
this.c=f},
eBR:function eBR(d,e){this.a=d
this.b=e},
eBQ:function eBQ(d){this.a=d},
eEv:function eEv(d,e,f){this.a=d
this.b=e
this.c=f},
eBH:function eBH(d){this.a=d},
eCi:function eCi(){},
eGd:function eGd(d,e){this.a=d
this.b=e},
eGe:function eGe(d,e,f){this.a=d
this.b=e
this.c=f},
eFD:function eFD(d,e,f){this.a=d
this.b=e
this.c=f},
eAE:function eAE(d){this.a=d},
eAB:function eAB(d,e){this.a=d
this.b=e},
eAr:function eAr(d,e){this.a=d
this.b=e},
eAo:function eAo(d){this.a=d},
eAn:function eAn(d,e){this.a=d
this.b=e},
eAp:function eAp(d,e){this.a=d
this.b=e},
eBT:function eBT(d){this.a=d},
eBU:function eBU(d,e){this.a=d
this.b=e},
eBS:function eBS(d){this.a=d},
eB5:function eB5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eB6:function eB6(d,e){this.a=d
this.b=e},
eBa:function eBa(d,e){this.a=d
this.b=e},
eBb:function eBb(d){this.a=d},
eB8:function eB8(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eB9:function eB9(d){this.a=d},
eB7:function eB7(){},
eB4:function eB4(d,e,f){this.a=d
this.b=e
this.c=f},
eE7:function eE7(d,e){this.a=d
this.b=e},
eGm:function eGm(d){this.a=d},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d,e,f){this.a=d
this.b=e
this.c=f},
eGl:function eGl(d){this.a=d},
eFT:function eFT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFS:function eFS(d,e,f){this.a=d
this.b=e
this.c=f},
eFR:function eFR(){},
eFQ:function eFQ(d,e,f){this.a=d
this.b=e
this.c=f},
eFP:function eFP(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e,f){this.a=d
this.b=e
this.c=f},
eFK:function eFK(d){this.a=d},
eFL:function eFL(d){this.a=d},
eFO:function eFO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFN:function eFN(d){this.a=d},
eCM:function eCM(d,e){this.a=d
this.b=e},
eCL:function eCL(d,e){this.a=d
this.b=e},
eFE:function eFE(){},
eGc:function eGc(d,e){this.a=d
this.b=e},
eGa:function eGa(d){this.a=d},
eGb:function eGb(d){this.a=d},
eAw:function eAw(d,e){this.a=d
this.b=e},
eAu:function eAu(d){this.a=d},
eAv:function eAv(d){this.a=d},
eAx:function eAx(d,e){this.a=d
this.b=e},
eAy:function eAy(d,e,f){this.a=d
this.b=e
this.c=f},
eAC:function eAC(d,e){this.a=d
this.b=e},
eAt:function eAt(d,e,f){this.a=d
this.b=e
this.c=f},
eAs:function eAs(d){this.a=d},
eEt:function eEt(d,e,f){this.a=d
this.b=e
this.c=f},
eGk:function eGk(d,e,f){this.a=d
this.b=e
this.c=f},
eCP:function eCP(d,e,f){this.a=d
this.b=e
this.c=f},
eCO:function eCO(){},
eBe:function eBe(d,e,f){this.a=d
this.b=e
this.c=f},
eBf:function eBf(d){this.a=d},
eAq:function eAq(d,e){this.a=d
this.b=e},
eCg:function eCg(d,e){this.a=d
this.b=e},
eAz:function eAz(d,e){this.a=d
this.b=e},
eAI:function eAI(d){this.a=d},
eAJ:function eAJ(d,e){this.a=d
this.b=e},
eAK:function eAK(d,e){this.a=d
this.b=e},
eAH:function eAH(d){this.a=d},
eAV:function eAV(d,e){this.a=d
this.b=e},
eAG:function eAG(d){this.a=d},
eAY:function eAY(d){this.a=d},
eAZ:function eAZ(d){this.a=d},
eB_:function eB_(d){this.a=d},
eB0:function eB0(d){this.a=d},
eB1:function eB1(d){this.a=d},
eB2:function eB2(){},
eB3:function eB3(){},
eAL:function eAL(d){this.a=d},
eAM:function eAM(d){this.a=d},
eAN:function eAN(d){this.a=d},
eAO:function eAO(d){this.a=d},
eAP:function eAP(d){this.a=d},
eAQ:function eAQ(d){this.a=d},
eAR:function eAR(d){this.a=d},
eAS:function eAS(d){this.a=d},
eAT:function eAT(d){this.a=d},
eAU:function eAU(d){this.a=d},
eAW:function eAW(d){this.a=d},
eAX:function eAX(d,e){this.a=d
this.b=e},
eCf:function eCf(d,e,f){this.a=d
this.b=e
this.c=f},
eCe:function eCe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eCd:function eCd(d,e,f){this.a=d
this.b=e
this.c=f},
eCc:function eCc(d,e){this.a=d
this.b=e},
eAA:function eAA(d,e){this.a=d
this.b=e},
eBi:function eBi(d){this.a=d},
eBh:function eBh(d){this.a=d},
eBg:function eBg(d,e){this.a=d
this.b=e},
eBj:function eBj(d){this.a=d},
eBk:function eBk(d){this.a=d},
eBl:function eBl(d,e){this.a=d
this.b=e},
eBW:function eBW(d){this.a=d},
eE6:function eE6(d,e){this.a=d
this.b=e},
eE5:function eE5(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE2:function eE2(d){this.a=d},
eE3:function eE3(d,e){this.a=d
this.b=e},
eE0:function eE0(){},
eE1:function eE1(){},
eFF:function eFF(){},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFH:function eFH(){},
eFI:function eFI(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eAF:function eAF(d,e){this.a=d
this.b=e},
eBK:function eBK(){},
eBL:function eBL(){},
eBM:function eBM(){},
eBP:function eBP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eBO:function eBO(d,e){this.a=d
this.b=e},
eBN:function eBN(d,e,f){this.a=d
this.b=e
this.c=f},
eDf:function eDf(d){this.a=d},
eDe:function eDe(){},
eDg:function eDg(d,e){this.a=d
this.b=e},
eDh:function eDh(d,e){this.a=d
this.b=e},
eDd:function eDd(d){this.a=d},
eDi:function eDi(d,e){this.a=d
this.b=e},
eDc:function eDc(d){this.a=d},
eDj:function eDj(d,e){this.a=d
this.b=e},
eDb:function eDb(d){this.a=d},
eDk:function eDk(d,e){this.a=d
this.b=e},
eDa:function eDa(d){this.a=d},
eDl:function eDl(d,e){this.a=d
this.b=e},
eD9:function eD9(d,e){this.a=d
this.b=e},
eDm:function eDm(d,e){this.a=d
this.b=e},
eD8:function eD8(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eD7:function eD7(d){this.a=d},
eD0:function eD0(d,e){this.a=d
this.b=e},
eD1:function eD1(d){this.a=d},
eD2:function eD2(d){this.a=d},
eD_:function eD_(d){this.a=d},
eD3:function eD3(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eCY:function eCY(d){this.a=d},
eD5:function eD5(d,e){this.a=d
this.b=e},
eCX:function eCX(d){this.a=d},
eD6:function eD6(d){this.a=d},
eC8:function eC8(d){this.a=d},
eC9:function eC9(d){this.a=d},
eCb:function eCb(d){this.a=d},
eC3:function eC3(d){this.a=d},
eC2:function eC2(d,e){this.a=d
this.b=e},
eC4:function eC4(d,e){this.a=d
this.b=e},
eC5:function eC5(d){this.a=d},
eC6:function eC6(d){this.a=d},
eC7:function eC7(d,e){this.a=d
this.b=e},
eCa:function eCa(d){this.a=d},
eGq:function eGq(d){this.a=d},
eGr:function eGr(d){this.a=d},
eDq:function eDq(d,e){this.a=d
this.b=e},
eDp:function eDp(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eEP:function eEP(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d){this.a=d},
eER:function eER(d){this.a=d},
eF1:function eF1(d){this.a=d},
eFc:function eFc(d){this.a=d},
eFn:function eFn(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFv:function eFv(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFx:function eFx(d){this.a=d},
eFy:function eFy(d,e){this.a=d
this.b=e},
eES:function eES(d){this.a=d},
eET:function eET(d){this.a=d},
eEU:function eEU(d){this.a=d},
eEV:function eEV(d){this.a=d},
eEW:function eEW(d){this.a=d},
eEX:function eEX(d){this.a=d},
eEY:function eEY(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d){this.a=d},
eF2:function eF2(d){this.a=d},
eF3:function eF3(d){this.a=d},
eF4:function eF4(d){this.a=d},
eF5:function eF5(d){this.a=d},
eF6:function eF6(d){this.a=d},
eF7:function eF7(d){this.a=d},
eF8:function eF8(d){this.a=d},
eF9:function eF9(d){this.a=d},
eFa:function eFa(d){this.a=d},
eEF:function eEF(d){this.a=d},
eFb:function eFb(d){this.a=d},
eEN:function eEN(d){this.a=d},
eFd:function eFd(d){this.a=d},
eEM:function eEM(d,e){this.a=d
this.b=e},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e){this.a=d
this.b=e},
eEL:function eEL(d,e,f){this.a=d
this.b=e
this.c=f},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEO:function eEO(d){this.a=d},
eFz:function eFz(d,e){this.a=d
this.b=e},
eFB:function eFB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFA:function eFA(d,e){this.a=d
this.b=e},
eFg:function eFg(d,e,f){this.a=d
this.b=e
this.c=f},
eEK:function eEK(d,e,f){this.a=d
this.b=e
this.c=f},
eEA:function eEA(d,e,f){this.a=d
this.b=e
this.c=f},
eEy:function eEy(d,e){this.a=d
this.b=e},
eFh:function eFh(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEx:function eEx(d,e){this.a=d
this.b=e},
eFi:function eFi(d){this.a=d},
eEI:function eEI(d){this.a=d},
eFj:function eFj(d){this.a=d},
eFk:function eFk(d){this.a=d},
eFl:function eFl(d){this.a=d},
eFm:function eFm(d){this.a=d},
eEH:function eEH(d){this.a=d},
eFo:function eFo(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFq:function eFq(d,e){this.a=d
this.b=e},
eEG:function eEG(d){this.a=d},
eFr:function eFr(d,e){this.a=d
this.b=e},
eEE:function eEE(d){this.a=d},
eFs:function eFs(d,e){this.a=d
this.b=e},
eED:function eED(d){this.a=d},
eFt:function eFt(d,e){this.a=d
this.b=e},
eEC:function eEC(d){this.a=d},
eBd:function eBd(d,e,f){this.a=d
this.b=e
this.c=f},
eBc:function eBc(d,e){this.a=d
this.b=e},
eFW:function eFW(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFU:function eFU(d,e){this.a=d
this.b=e},
eCl:function eCl(d,e){this.a=d
this.b=e},
eCk:function eCk(d){this.a=d},
eCm:function eCm(d,e){this.a=d
this.b=e},
eCj:function eCj(d){this.a=d},
eCT:function eCT(){},
eCS:function eCS(){},
eG8:function eG8(d){this.a=d},
eG7:function eG7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG1:function eG1(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eG2:function eG2(d,e){this.a=d
this.b=e},
eFY:function eFY(d){this.a=d},
eFZ:function eFZ(d){this.a=d},
eG_:function eG_(d){this.a=d},
eG0:function eG0(d){this.a=d},
eG3:function eG3(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eBD:function eBD(d){this.a=d},
eBC:function eBC(d,e,f){this.a=d
this.b=e
this.c=f},
eBB:function eBB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBq:function eBq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eBr:function eBr(d,e){this.a=d
this.b=e},
eBs:function eBs(d,e){this.a=d
this.b=e},
eBt:function eBt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBp:function eBp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBu:function eBu(d,e){this.a=d
this.b=e},
eBw:function eBw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBv:function eBv(d,e){this.a=d
this.b=e},
eBx:function eBx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBo:function eBo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eBy:function eBy(d,e){this.a=d
this.b=e},
eBn:function eBn(d,e){this.a=d
this.b=e},
eBz:function eBz(d,e){this.a=d
this.b=e},
eBm:function eBm(d){this.a=d},
eBA:function eBA(d,e){this.a=d
this.b=e},
eDu:function eDu(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDv:function eDv(d,e){this.a=d
this.b=e},
eCz:function eCz(d,e){this.a=d
this.b=e},
eCA:function eCA(d,e){this.a=d
this.b=e},
eCy:function eCy(d,e){this.a=d
this.b=e},
eCB:function eCB(d,e){this.a=d
this.b=e},
eCx:function eCx(d,e){this.a=d
this.b=e},
eCC:function eCC(d,e){this.a=d
this.b=e},
eCw:function eCw(d,e){this.a=d
this.b=e},
eCD:function eCD(d,e){this.a=d
this.b=e},
eCv:function eCv(d,e){this.a=d
this.b=e},
eCE:function eCE(d,e){this.a=d
this.b=e},
eCu:function eCu(d,e){this.a=d
this.b=e},
eCF:function eCF(d,e,f){this.a=d
this.b=e
this.c=f},
eCt:function eCt(d,e){this.a=d
this.b=e},
eCG:function eCG(d,e,f){this.a=d
this.b=e
this.c=f},
eCs:function eCs(d,e){this.a=d
this.b=e},
eCH:function eCH(d,e){this.a=d
this.b=e},
eCr:function eCr(d,e,f){this.a=d
this.b=e
this.c=f},
eCo:function eCo(d,e){this.a=d
this.b=e},
eCI:function eCI(d,e){this.a=d
this.b=e},
eCq:function eCq(d,e){this.a=d
this.b=e},
eCJ:function eCJ(d,e){this.a=d
this.b=e},
eCp:function eCp(d,e,f){this.a=d
this.b=e
this.c=f},
eCn:function eCn(d,e){this.a=d
this.b=e},
eCK:function eCK(d,e){this.a=d
this.b=e},
eCN:function eCN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eAm:function eAm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEp:function eEp(d){this.a=d},
eEq:function eEq(d,e){this.a=d
this.b=e},
afU:function afU(d,e,f){this.a=d
this.b=e
this.c=f},
aAi:function aAi(d,e){this.c=d
this.a=e},
bez:function bez(d,e){var _=this
_.e=_.d=$
_.cP$=d
_.b7$=e
_.c=_.a=null},
d8P:function d8P(d){this.a=d},
d8O:function d8O(d){this.a=d},
beO:function beO(d,e){this.c=d
this.a=e},
d9c:function d9c(d){this.a=d},
d9d:function d9d(d){this.a=d},
Kl:function Kl(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bey:function bey(){this.d=!1
this.c=this.a=null},
d8M:function d8M(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8N:function d8N(d){this.a=d},
d8H:function d8H(d){this.a=d},
d8L:function d8L(d){this.a=d},
d8J:function d8J(d){this.a=d},
d8K:function d8K(d,e){this.a=d
this.b=e},
Qf:function Qf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0g:function a0g(d,e,f){this.c=d
this.d=e
this.a=f},
aFR:function aFR(d,e,f){var _=this
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
eH6:function eH6(){},
eGX:function eGX(d){this.a=d},
eH5:function eH5(d){this.a=d},
eGY:function eGY(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eGT:function eGT(d){this.a=d},
eGU:function eGU(d,e){this.a=d
this.b=e},
eGV:function eGV(d){this.a=d},
eGW:function eGW(d,e,f){this.a=d
this.b=e
this.c=f},
eH3:function eH3(){},
eH4:function eH4(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH7:function eH7(d,e,f){this.a=d
this.b=e
this.c=f},
eH9:function eH9(d,e){this.a=d
this.b=e},
eH8:function eH8(d){this.a=d},
Kr:function Kr(d,e){this.c=d
this.a=e},
btI:function btI(d,e){this.b=d
this.a=e},
bjA:function bjA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bjz:function bjz(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aLH:function aLH(){},
aNH:function aNH(){},
bzy:function bzy(){},
aNI:function aNI(){},
fS0(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fS0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xB.ca().MC(B.a(["pdf"],x.s),A.us,!0),$async$fS0)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fv(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bqT(s,"data:application/pdf;base64,"+A.cK.gcu().aP(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fS0,v)},
ikt(d){var w,v,u,t,s,r
try{w=B.jG(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ce(s,null)
if(u!=null&&u>0){s=A.o.E(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).lh(0,w).gK(0)
if(t>0){s=J.aSs(t,1,200)
return s}}catch(r){}return 1},
fRS(d){return C.iks(d)},
iks(d){var w=0,v=B.j(x.T),u
var $async$fRS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fRS,v)},
bF6(d,e,f,g){return C.ikC(d,e,f,g)},
ikC(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bF6=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.ef(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.E(b7.a,80,2400)
q=A.k.E(b7.b,80,2400)
p=B.hAO(b9,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
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
l=Math.max(B.jh(b0),a9)}o=A.k.E(o-0.04,0,1)
n=A.k.E(n-0.04,0,1)
m=A.k.E(m+0.04,0,1)
l=A.k.E(l+0.04,0,1)
j=A.k.E(m-o,0.12,1)
i=A.k.E(l-n,0.12,1)
h=A.o.E(A.k.V(800*(i/j)),180,420)
$.S()
g=new B.p7()
f=B.zd(g,null)
a7=B.J()
a7.r=A.rm.gp(0)
f.aQ(new B.a3(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.J()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.by
b1.e=A.dQ
b1.b=A.a9
b1.f=!0
d=b1
a0=null
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.K)(b6),++a8){a1=b6[a8]
if(a1==null){a0=null
continue}a2=new B.u((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null){a9=a0
b0=a2
b2=d.G()
b3=f.a
b3.drawLine.apply(b3,[a9.a,a9.b,b0.a,b0.b,b2])
b2.delete()}a0=a2}a3=g.nk()
w=7
return B.b(a3.xh(800,h),$async$bF6)
case 7:a4=c1
a3.t()
w=8
return B.b(a4.hA(A.hb),$async$bF6)
case 8:a5=c1
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dK.gaS(a5))
a7=A.cK.gcu().aP(a7)
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
return B.i($async$bF6,v)},
aRA(d,e,f){return C.ikq(d,e,f)},
ikq(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aRA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.au:e
r.c=f==null?5.2:f
w=3
return B.b(B.ain(d,e,f,new C.fRQ(r,q),q,"Sign document"),$async$aRA)
case 3:if(!new B.ef(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bF6(q,t,r.b,r.c),$async$aRA)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b2Y(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRA,v)},
ikA(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.htD(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.htD(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b3(A.a.aY(A.o.fA(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ac(q.c*100,2)+"%;top:"+A.k.ac(q.d*100,2)+"%;width:"+A.k.ac(q.e*100,2)+"%;height:"+A.k.ac(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b3(A.a.aY(A.o.fA(q.Q,16),8,"0"),2)
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.hte(q.ay)+";border:2px solid "+C.hte(q.ch)+'"></div>'
break
case 5:l=C.hcy(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.gakQ()
if(p==null)p=A.aB5
n=B.T(p)
k=n.k("jf<1>")
j=new B.jf(p,0,8,k)
j.of(p,0,8,n.c)
j=new B.bS(j,j.gK(0),k.k("bS<ak.E>"))
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
hte(d){var w=A.o.aD(d,24)
return"rgba("+(A.o.aD(d,16)&255)+","+(A.o.aD(d,8)&255)+","+(d&255)+","+A.k.ac((w&255)/255,3)+")"},
htD(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bF4(d,e){var w=0,v=B.j(x.H)
var $async$bF4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ch(null,null,!0,null,new C.fRZ(e,C.ikA(e),d),d,null,!0,!0,x.H),$async$bF4)
case 2:return B.h(null,v)}})
return B.i($async$bF4,v)},
bF5(){var w=0,v=B.j(x.T),u,t,s
var $async$bF5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hc(92,2400),$async$bF5)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fRS(s),$async$bF5)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bF5,v)},
aRB(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aRB=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hdN(d),$async$aRB)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A0.fUz(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aRB,v)},
hnA(d,e){var w
if(e<0||e>=d.r.length)return A.o.E(d.e,1,120)
w=d.r[e].w
return A.o.E(w>0?w:d.e,1,120)},
b2Y:function b2Y(d,e,f){this.a=d
this.b=e
this.c=f},
fRQ:function fRQ(d,e){this.a=d
this.b=e},
fRZ:function fRZ(d,e,f){this.a=d
this.b=e
this.c=f},
fRW:function fRW(d){this.a=d},
fRX:function fRX(d,e,f){this.a=d
this.b=e
this.c=f},
fRY:function fRY(d,e,f){this.a=d
this.b=e
this.c=f},
ikr(d){return C.kI(d.w)},
iky(d){var w,v,u,t
if(d.length===0||!A.d.cJ(d,C.imi()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
z_(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hGH()
if(w.b.test(u))return u
return null},
hAQ(d,e,f){var w,v,u=C.hPu(d),t=$.ok()
for(w=0;w<80;++w){v=u+A.a.aY(A.o.u(t.ap(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.aY(A.o.u(Date.now()%1000),3,"0")},
ikE(d){var w,v,u,t,s=B.aV(x.N)
for(w=J.aX(d.a),v=new B.eR(w,d.b);v.C();){u=w.gS(w).y
t=C.z_(u==null?"":u)
if(t!=null)s.M(0,t)}return s},
fRO(d,e){var w,v=d.y,u=C.z_(v==null?"":v)
if(u!=null)return d.y=u
w=C.ikE(new B.Y(e,new C.fRP(d),B.T(e).k("Y<1>")))
v=d.x
return d.y=C.hAQ(v==null?"":v,null,w)},
ikD(d){var w,v
if(d.length!==1)return null
w=A.d.gI(d)
if(!C.kI(w.w))return null
v=w.y
return C.z_(v==null?"":v)},
hTT(){var w,v=$.ok(),u=J.e0(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.ap(32)]
return"SL"+A.d.hf(u)},
WG(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$WG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$WG)
case 3:if(!e){u=B.U(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f7("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bJ),$async$WG)
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
return B.i($async$WG,v)},
WH(d){return C.hTU(d)},
hTU(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$WH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$WH)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hO("ngmy_slides_transfer_qr_stashes_v1",B.H(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).a9().ae()],x.N,x.z),!1,!1,A.cH,null),$async$WH)
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
return B.i($async$WH,v)},
a8O(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a8O=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8O)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.WG(),$async$a8O)
case 4:s=a6
r=C.z_(a2==null?"":a2)
if(r==null)r=a3!=null?C.hAQ(a3,null,A.vo):null
q=x.N
p=B.aV(q)
for(o=J.dq(s),n=J.aX(o.gi6(s)),m=x.f;n.C();){l=n.gS(n)
if(!m.b(l))continue
k=J.r(l,"claimCode")
j=C.z_(J.k(k==null?"":k))
if(j!=null)p.M(0,j)}n=o.gdR(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gS(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dO.aP(t)
g.n(0,"payload",A.cK.gcu().aP(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).a9().ae())
if(D.Uz.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.z_(J.k(q==null?"":q))
if(f==null)f=C.hnF(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.WH(s),$async$a8O)
case 7:u=new B.aHj(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hTT()
n=r==null
d=n?C.hnF(p):r
q=B.U(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dO.aP(t)
q.n(0,"payload",A.cK.gcu().aP(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).a9().ae())
if(D.Uz.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.WH(s),$async$a8O)
case 8:u=new B.aHj(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8O,v)},
hnF(d){var w,v,u=$.ok()
for(w=0;w<200;++w){v="SL"+A.a.aY(A.o.u(u.ap(1000)),3,"0")
if(d.M(0,v))return v}return"SL"+A.a.aY(A.o.u(Date.now()%1000),3,"0")},
asq(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$asq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asq)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.WG(),$async$asq)
case 6:t=f
s=J.a7(t)
r=s.gK(t)
s.bs(t,new C.cki(q))
w=s.gK(t)!==r?7:8
break
case 7:w=9
return B.b(C.WH(t),$async$asq)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$asq,v)},
asp(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$asp=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.z_(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$asp)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.WG(),$async$asp)
case 6:t=o.k2(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gS(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.r(q,"claimCode")
if(C.z_(J.k(q==null?"":q))===p){u=C.a8N(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$asp,v)},
a8N(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a8N=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a8N)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.WG(),$async$a8N)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
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
try{s=A.ch.cB(0,A.cF.aP(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Uz.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.X.aN(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aJ(q,"sharedByAdmin",!0)
s=A.X.aq(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dO(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).a9().ae())
o.n(p,g,l)}w=7
return B.b(C.WH(p),$async$a8N)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8N,v)},
ikx(d,e,f){var w,v=B.U(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).a9().ae())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.T(d).k("N<1,a8<m,@>>")
w=B.C(new B.N(d,new C.fRV(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fS2(d,e,f,g){var w
if(e!=null){w=B.U(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).a9().ae())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ah())
return A.X.aq(w,null)}return A.X.aq(C.ikx(d==null?B.a([],x.D):d,f,g),null)},
fS1(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fS1=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a8O(h,d,e,f,g),$async$fS1)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.z_(e==null?"":e)
u=new B.aH5(s,t)
w=1
break}t=A.dO.aP(h)
t=A.kD.gcu().aP(t)
u=new B.aH5(C.z_(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fS1,v)},
hdP(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d3(q,"NGMYSLIDESYNC2|"))return!0
if(J.d3(q,"NGMYSLIDECODE|"))return!0
if(J.d3(q,"NGMY_SL:"))return!0
if(J.f2(q,s)||J.f2(q,r))return!0
if(J.d3(q,"{"))try{w=A.X.aN(0,q,null)
if(x.f.b(w)){u=J.r(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
ikB(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.hdP(v))return v
u=A.a.cp(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b3(v,u))
if(C.hdP(t))return t}s=A.a.cp(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b3(v,s))
if(C.hdP(t))return t}}return null},
fRR(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d3(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d3(t,"NGMY_SL:"))w=v.a(A.X.aN(0,A.ch.cB(0,A.cF.aP(J.nn(t,8))),null))
else w=v.a(A.X.aN(0,t,null))
v=C.i2I(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ai8(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ai8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.asp(t[1]),$async$ai8)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fRR(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.z_(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.asp(r),$async$ai8)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fRR(s)
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
return B.b(C.a8N(t[1]),$async$ai8)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fRR(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fRR(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ai8,v)},
i2I(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Uz.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hdM(C.WC(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cH(t,new C.fnE(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a6(t).k("M.E"))
return t}return B.a([],x.D)},
hdM(d,e){var w,v,u,t,s,r,q,p,o=d.ah()
o.n(0,"id",C.cG())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aX(v),t=x.f;u.C();){s=u.gS(u)
if(t.b(s)){r=Date.now()
q=$.jb
$.jb=q+1
J.aJ(s,"id",""+1000*r+"_"+q)}}p=C.WC(B.a2(o,x.N,x.z))
if(e&&C.kI(p.w))p.Q=new B.V(Date.now(),0,!1).a9().bS(144e8).ae()
return p},
bEQ(){var w=0,v=B.j(x.aT),u,t,s
var $async$bEQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hb(),$async$bEQ)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ai8(s),$async$bEQ)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bEQ,v)},
h_T(d){var w=0,v=B.j(x.T),u,t
var $async$h_T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.i3(D.YB,!0,"Dismiss",d,new C.h_U(),new C.h_V(),A.Gu,!0,x.N),$async$h_T)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.U(D.feh)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_T,v)},
ios(d,e,f,g,h){return B.a5(d,!1).cc(B.ej(new C.h_W(h,e,g,f),!0,null,x.H))},
fRP:function fRP(d){this.a=d},
cki:function cki(d){this.a=d},
fRV:function fRV(){},
fnE:function fnE(d){this.a=d},
h_U:function h_U(){},
h_V:function h_V(){},
h_W:function h_W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
WE:function WE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFP:function aFP(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eGD:function eGD(){},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGC:function eGC(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGB:function eGB(d){this.a=d},
eGE:function eGE(d){this.a=d},
eGF:function eGF(d){this.a=d},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d){this.a=d},
eGH:function eGH(d){this.a=d},
eGK:function eGK(d){this.a=d},
eGG:function eGG(d){this.a=d},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGy:function eGy(d,e){this.a=d
this.b=e},
eGx:function eGx(d,e){this.a=d
this.b=e},
WF:function WF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmv:function bmv(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGN:function eGN(d){this.a=d},
eGO:function eGO(){},
eGP:function eGP(d){this.a=d},
eGQ:function eGQ(d,e){this.a=d
this.b=e},
aFM:function aFM(d){this.a=d},
aFN:function aFN(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eAg:function eAg(d){this.a=d},
eAf:function eAf(){},
eAh:function eAh(d){this.a=d},
eAc:function eAc(d){this.a=d},
eAb:function eAb(){},
eAd:function eAd(d){this.a=d},
eAe:function eAe(d){this.a=d},
bwZ:function bwZ(){},
asr:function asr(d){this.a=d},
aFQ:function aFQ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eGS:function eGS(d){this.a=d},
eGR:function eGR(d){this.a=d},
i89(){var w,v,u,t
for(v=0;v<4;++v){w=D.df7[v]
try{if(Ae.c0F(w)){u=w
return u}}catch(t){}}return null},
RT(d,e){return C.ihe(d,e)},
ihe(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$RT=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.i89()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oG?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qR(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cx(null,x.A)
b8=A.d.gI(c3)
b9=$.aw()
o=new B.eC(b8,b9)
n=new B.eC("Getting ready\u2026",b9)
m=new B.eC(0,b9)
l=B.oF(new C.fM6(c2,b7,o),!1,!1)
b6.m2(0,l)
b9=x.H
B.ch(null,A.dd,!1,null,new C.fM7(n,m),c6,null,!0,!0,b9)
k=new C.fMb(b7)
j=new C.fMc()
i=null
t=4
b3=c2.a
h=Al.aTX(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h2R(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ae.aYX(f,B.H(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.IS.yK(i,"dataavailable",new C.fM8(e))
d=new B.c0(new B.bj($.bB,x.dT),x.b2)
A.IS.yK(i,"stop",new C.fM9(d))
J.aiK(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$RT)
case 8:w=7
return B.b(c5.$1(d0),$async$RT)
case 7:a0=d0
J.h2T(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.aiK(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.aiK(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$RT)
case 15:w=14
return B.b(c5.$1(d0),$async$RT)
case 14:a0=d0
case 13:J.h2T(g,a0,0,0,c2.a,c2.b)
a3=A.o.E(a2.w>0?a2.w:c7.e,1,120)
J.aiK(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbr())b3=b3===b8.gbr()&&0<b8.gcE()
else b3=!0
if(!b3){w=17
break}J.h2T(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bP(A.fu,null,b9),$async$RT)
case 18:w=16
break
case 17:J.aiK(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.aiK(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dc(0,A.of),$async$RT)
case 19:a5=A.d.gI(q.split(";"))
a6=B.hP(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n1(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.Hp(b0)
J.lG(b0)
B.bP(A.qg,new C.fMa(a7),b9)
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
J.lG(l)
if(p.pT())p.eN()
c3=o
b3=$.aw()
c3.sia(b3)
J.aSw(c3,0)
c3=n
c3.sia(b3)
J.aSw(c3,0)
c3=m
c3.sia(b3)
J.aSw(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$RT,v)},
fM6:function fM6(d,e,f){this.a=d
this.b=e
this.c=f},
fM5:function fM5(){},
fM7:function fM7(d,e){this.a=d
this.b=e},
fMb:function fMb(d){this.a=d},
fMc:function fMc(){},
fM8:function fM8(d){this.a=d},
fM9:function fM9(d){this.a=d},
fMa:function fMa(d){this.a=d},
bxc:function bxc(d,e,f){this.c=d
this.d=e
this.a=f},
fhx:function fhx(){},
fhy:function fhy(){},
ckE(d){var w=0,v=B.j(x.at),u,t,s
var $async$ckE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.asz(d,A.A2),$async$ckE)
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
return B.i($async$ckE,v)},
ckD(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a8u:function a8u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bme:function bme(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
eow:function eow(d){this.a=d},
eou:function eou(d){this.a=d},
eov:function eov(d,e){this.a=d
this.b=e},
a9n:function a9n(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oK$=k
_.oL$=l
_.oM$=m
_.o0$=n},
a9o:function a9o(d,e){this.a=d
this.b=e},
b4C:function b4C(){},
co7:function co7(){},
co8:function co8(){},
co9:function co9(d,e,f,g,h,i,j,k,l){var _=this
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
hHH(d){return new C.aj1(d)},
a3C:function a3C(){},
aj1:function aj1(d){this.a=d},
aSR:function aSR(){},
ay3:function ay3(d,e){this.d=d
this.b=e
this.a=null},
aUn:function aUn(d){this.b=d
this.a=null},
fHe(d,e){var w=0,v=B.j(x.H)
var $async$fHe=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gxV().Mj(d,e),$async$fHe)
case 2:B.fUF()
return B.h(null,v)}})
return B.i($async$fHe,v)},
hy5(d,e){return(A.rZ[(d^e)&255]^A.o.aD(d,8))>>>0},
fEh(d,e,f,g,h,i){var w=C.idx(d,A.dg,f,null,A.d_,g,h,i)
return w},
hzZ(d){var w=F.hAH(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hPu(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pv.h(0,w)
if(v!=null)return v
for(u=A.pv.gdR(A.pv),u=u.gaf(u);u.C();){t=u.gS(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.au(s,0,2)
return A.a.au(s+"XX",0,2)},
hA6(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<52;++w)v+="- "+D.dr2[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bCY(d,e){return C.i9X(d,e)},
i9X(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bCY=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hP([d],"application/pdf")
n=x.z
q=B.aW5(B.a([r],x.e3),e,B.H(["type","application/pdf"],n,n))
p=B.cC(B.H(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ed(B.k0(o,"share",[p]),x.H),$async$bCY)
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
return B.i($async$bCY,v)},
hdG(){var w=0,v=B.j(x.y),u,t,s
var $async$hdG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fvm
s=$.bCv
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bCY(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hdG,v)},
bEl(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bEl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fvm
l=$.bCv
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A0.hul()?3:4
break
case 3:w=5
return B.b(C.bCY(m,k),$async$bEl)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bCw
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n1(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.Hp(q)
w=10
return B.b(B.bP(A.a2,null,x.H),$async$bEl)
case 10:J.lG(q)
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
return B.i($async$bEl,v)},
hdx(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hdx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bCw
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lT.r8(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hdx,v)},
hdO(d,e){var w=0,v=B.j(x.H),u,t
var $async$hdO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hP([d],"text/html"))
t.toString
u=window
u.toString
A.lT.r8(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hdO,v)},
b3z(d,e){var w=0,v=B.j(x.y),u
var $async$b3z=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b3B(d,e),$async$b3z)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b3A(d),$async$b3z)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b3z,v)}},D,O,Ao,A9,A_,Aa,W,Ap,G,F,E,H,X,R,A0,A1,Aq,M,Ar,A2,As,At,Ab,K,Au,Av,A3,N,Y,P,Z,Ac,Aw,Q,Ad,Ax,Ae,Af,Ay,Ag,Az,Ah,Ai,AA,AB,S,AC,I,AD,T,U,L,A4,A5,A6
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
C.ob.prototype={
vq(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ud(t,v)
return new C.ob(t===0?!1:w,v,t)},
bOy(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.Dv()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ud(w,u)
return new C.ob(r===0?!1:s,u,r)},
bP4(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.Dv()
w=o-d
if(w<=0)return p.a?$.hfe():$.Dv()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ud(w,u)
q=new C.ob(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aG(0,$.a3p())
return q},
dW(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ao(e,16)
if(A.o.F(e,16)===0)return r.bOy(v)
u=w+v+1
t=new Uint16Array(u)
C.hqS(r.b,w,e,t)
w=r.a
s=C.ud(u,t)
return new C.ob(s===0?!1:w,t,s)},
mB(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dM("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ao(e,16)
u=A.o.F(e,16)
if(u===0)return n.bP4(v)
t=w-v
if(t<=0)return n.a?$.hfe():$.Dv()
s=n.b
r=new Uint16Array(t)
C.hZz(s,w,e,r)
w=n.a
q=C.ud(t,r)
p=new C.ob(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dW(1,u)-1)!==0)return p.aG(0,$.a3p())
for(o=0;o<v;++o)if(s[o]!==0)return p.aG(0,$.a3p())}return p},
aO(d,e){var w,v=this.a
if(v===e.a){w=C.cMX(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a94(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a94(t,e)
if(s===0)return $.Dv()
if(r===0)return t.a===e?t:t.vq(0)
w=s+1
v=new Uint16Array(w)
C.hZx(t.b,s,d.b,r,v)
u=C.ud(w,v)
return new C.ob(u===0?!1:e,v,u)},
HH(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.Dv()
w=d.c
if(w===0)return t.a===e?t:t.vq(0)
v=new Uint16Array(s)
C.bbL(t.b,s,d.b,w,v)
u=C.ud(s,v)
return new C.ob(u===0?!1:e,v,u)},
bBt(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ud(r,u)
return new C.ob(!1,u,s)},
bBs(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ud(u,r)
return new C.ob(!1,r,v)},
bBu(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ud(p,m)
return new C.ob(s!==0,m,s)},
Vs(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.Dv()
w=t.a
if(w===e.a){if(w){w=$.a3p()
return t.HH(w,!0).bBu(e.HH(w,!0),!0).a94(w,!0)}return t.bBt(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bBs(v.HH($.a3p(),!1),!1)},
a7(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a94(e,v)
if(C.cMX(u.b,t,e.b,w)>=0)return u.HH(e,v)
return e.HH(u,!v)},
aG(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vq(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a94(e,v)
if(C.cMX(u.b,t,e.b,w)>=0)return u.HH(e,v)
return e.HH(u,!v)},
aJ(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.Dv()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hqT(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ud(w,t)
return new C.ob(q===0?!1:r,t,q)},
bOx(d){var w,v,u,t
if(this.c<d.c)return $.Dv()
this.aT7(d)
w=$.h8t.ca()-$.ayR.ca()
v=C.h8v($.h8s.ca(),$.ayR.ca(),$.h8t.ca(),w)
u=C.ud(w,v)
t=new C.ob(!1,v,u)
return this.a!==d.a&&u>0?t.vq(0):t},
crJ(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aT7(d)
w=C.h8v($.h8s.ca(),0,$.ayR.ca(),$.ayR.ca())
v=C.ud($.ayR.ca(),w)
u=new C.ob(!1,w,v)
if($.h8u.ca()>0)u=u.mB(0,$.h8u.ca())
return t.a&&u.c>0?u.vq(0):u},
aT7(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hqP&&d.c===$.hqR&&g.b===$.hqO&&d.b===$.hqQ)return
w=d.b
v=d.c
u=16-A.o.gald(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hqN(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hqN(g.b,f,u,r)}else{r=C.h8v(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.h8w(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cMX(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bbL(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bbL(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hZy(p,r,i);--o
C.hqT(h,j,0,r,o,s)
if(r[i]<h){m=C.h8w(j,s,o,n)
C.bbL(r,l,n,m,r)
while(--h,r[i]<h)C.bbL(r,l,n,m,r)}--i}$.hqO=g.b
$.hqP=f
$.hqQ=w
$.hqR=v
$.h8s.b=r
$.h8t.b=l
$.ayR.b=s
$.h8u.b=u},
gX(d){var w,v,u,t=new C.cMY(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cMZ().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.ob&&this.aO(0,e)===0},
tI(d,e){return this.aO(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vl(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gald(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aD(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cN_(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cN0(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lm(A.aG.gaS(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vq(0):r
while(v.c>1){u=$.hEB()
if(u.c===0)B.ba(D.b9q)
t=v.crJ(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bOx(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dy(w,x.bJ).hf(0)},
$iaTA:1,
$ihR:1}
C.aT0.prototype={
M(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gK(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cQB(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gI(d){return A.d.gI(this.a)},
gak(d){return A.d.gak(this.a)},
gan(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.kf(w,w.length,B.T(w).k("kf<1>"))}}
C.Sx.prototype={
cYK(){var w,v
if(this.as==null)this.beO()
w=this.as
v=w==null?null:w.aqb()
return v==null?null:v.eU()},
beO(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aqb().eU()
this.as=new C.bSc(v)}},
gY(d){return this.at}}
C.a4y.prototype={
a6(){return"CompressionType."+this.b}}
C.bJY.prototype={
eF(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dW(v,u)+(s.b&A.zC[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dW(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fS(u,t)&A.zC[d])
s.c=t}return v}}
C.bIi.prototype={
cOJ(d,e){var w,v,u,t,s,r=this,q=new C.bJY(d)
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
t=r.cq0(q)
if(t<0)return!1
if(t===0){q.eF(8)
q.eF(8)
q.eF(8)
q.eF(8)
s=r.cq3(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eF(8)
q.eF(8)
q.eF(8)
q.eF(8)
return!0}}return!0},
cq0(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eF(8)
if(t!==D.dwR[u])v=!1
if(t!==D.d88[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cq3(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eF(1),d2=((d3.eF(8)<<8|d3.eF(8))<<8|d3.eF(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eF(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eF(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c4G()
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
u[w]=l}c9.fr=B.bZ(6,$.hCH(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eF(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eF(1)===0)break
i=d3.eF(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hCG()
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
if(f<h)h=f}c9.c0_(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.ava(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.ava(d3)}while(a3===0||a3===1);++a5
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
a3=c9.ava(d3)
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
c1=(c1<<8^D.Ik[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.Ip[b9];++b9
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
if(b8===0){b8=D.Ip[b9];++b9
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
if(b8===0){b8=D.Ip[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.Ip[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.Ip[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bt(c3)
c1=c1<<8^D.Ik[c1>>>24&255^v];--c2}d4.bt(c3)
c1=(c1<<8^D.Ik[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bt(c7)
c1=(c1<<8^D.Ik[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bt(c7)
c1=(c1<<8^D.Ik[c1>>>24&255^c7&255])>>>0
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
ava(d){var w,v,u,t,s=this,r=s.ay
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
c0_(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c4G(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cF6.prototype={
aJr(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bS7(e)
if(q<0)return
e.c=q
if(e.aR()!==101010256)return
e.b0()
e.b0()
e.b0()
e.b0()
r.f=e.aR()
r.r=e.aR()
w=e.b0()
if(w>0)e.aJu(w,!1)
r.cqo(e)
q=r.r
v=r.f
u=e.aMw(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aR()!==33639248)break
s=new C.bas()
s.cYJ(0,u,e,f)
q.push(s)}},
cqo(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a8I(20,r)
if(w.aR()!==117853008){d.c=s
return}w.aR()
v=w.tu()
w.aR()
d.c=v
if(d.aR()!==101075792){d.c=s
return}d.tu()
d.b0()
d.b0()
d.aR()
d.aR()
d.tu()
d.tu()
u=d.tu()
t=d.tu()
this.f=u
this.r=t
d.c=s},
bS7(d){var w,v,u,t,s,r,q,p,o,n
if(d.gK(0)<=4)return-1
w=d.c
v=d.gK(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a8I(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.amQ(A.im)
o.aNN(r.eU(),A.im,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aR()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cF4.prototype={}
C.ayu.prototype={
a6(){return"ZipEncryptionMode."+this.b}}
C.cF7.prototype={
aJr(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aR()!==67324752)return
e.b0()
o.b=e.b0()
w=D.aHN.h(0,e.b0())
o.c=w==null?D.Nc:w
o.d=e.b0()
o.e=e.b0()
o.f=e.aR()
o.r=e.aR()
o.w=e.aR()
v=e.b0()
u=e.b0()
o.x=e.aoT(v)
o.y=e.hs(u).eU()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aZx:D.EK
o.ay=f
o.Q=e.hs(t)
if(o.at!==D.EK&&u>2){w=o.y
w.toString
s=B.rC(w,A.im,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b0()===39169){s.b0()
s.b0()
s.aoT(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b0()
o.at=D.aZy
o.ax=new C.cF4(r,q)
w=D.aHN.h(0,q)
o.c=w==null?D.Nc:w}}}if((o.b&8)!==0){p=e.aR()
if(p===134695760)o.f=e.aR()
else o.f=p
o.r=e.aR()
o.w=e.aR()}},
gK(d){return this.bow().length},
aqb(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rC(new Uint8Array(0),A.im,q,q)
w=r.at
if(w!==D.EK)if(p.gK(0)<=0)r.at=D.EK
else{if(w===D.aZx){p=r.bMQ(p)
r.Q=p}else if(w===D.aZy){p=r.bMt(p)
r.Q=p}r.at=D.EK}w=r.c
if(w===D.ajW){v=p.c
u=B.dm()
p=r.Q
if(p.gK(0)<=524288e3)u.b=A.pU.BM(p.eU(),!0,!1)
else{t=B.a9c(A.im,r.w)
p=r.Q
p.toString
A.pU.a4S(p,t,!0,!1)
u.b=t.Hd()}r.Q.c=v
return B.rC(u.bi(),A.im,q,q)}else if(w===D.ajX){s=B.a9c(A.im,32768)
p=r.Q
v=p.c
C.hHS().cOJ(p,s)
u=s.Hd()
r.Q.c=v
return B.rC(u,A.im,q,q)}else return B.rC(p.eU(),A.im,q,q)},
bow(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eU()},
u(d){return this.x},
baH(d){var w=this.ch,v=C.Kh(C.hy5(w[0].N(0),d))
w[0]=v
v=w[1].a7(0,v.Vs(0,C.Kh(255)))
w[1]=v
w[1]=v.aJ(0,C.Kh(134775813)).a7(0,C.Kh(1)).Vs(0,C.Kh(4294967295))
w[2]=C.Kh(C.hy5(w[2].N(0),w[1].mB(0,24).N(0)))},
aSw(){var w=(this.ch[2].Vs(0,C.Kh(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bMQ(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rC(new Uint8Array(0),A.im,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.baH(u[v.c++]^r.aSw())}t=r.Q.eU()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aSw()
r.baH(s)
u&2&&B.aj(t)
t[w]=s}return B.rC(t,A.im,q,q)},
bMt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hs(8).eU()
v=16}else if(k===2){w=d.hs(12).eU()
v=24}else{w=d.hs(16).eU()
v=32}u=d.hs(2).eU()
t=d.hs(d.gK(0)-10)
s=d.hs(10)
r=t.eU()
k=this.ay
k.toString
q=C.hZe(k,w,v)
p=new Uint8Array(B.cn(A.aG.du(q,0,v)))
k=v*2
o=new Uint8Array(B.cn(A.aG.du(q,v,k)))
if(!C.hqj(A.aG.du(q,k,k+2),u))throw B.W(B.fp("password error"))
k=new Uint8Array(16)
n=new C.bGT(k,new Uint8Array(16),p)
k=x.S
m=J.a6_(0,k)
m=n.r=new C.cnX(m)
m.c=!0
m.b=m.bnO(!0,new C.au1(p))
if(m.c)m.d=B.bp(D.oC,!0,k)
else m.d=B.bp(D.zr,!0,k)
l=C.hox(C.hoz(),64)
l.bhc(new C.au1(o))
n.w=l
n.cYj(r,0,r.length)
k=s.eU()
m=n.x
m===$&&B.c()
if(!C.hqj(k,m))throw B.W(B.fp("macs don't match"))
return B.rC(r,A.im,null,null)}}
C.bas.prototype={
cYJ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b0()
e.b0()
e.b0()
e.b0()
e.b0()
e.b0()
e.aR()
n.w=e.aR()
n.x=e.aR()
w=e.b0()
v=e.b0()
u=e.b0()
n.y=e.b0()
e.b0()
n.Q=e.aR()
n.as=e.aR()
if(w>0)n.at=e.aoT(w)
if(v>0){t=e.hs(v).eU()
n.ax=t
if(v>=4){s=B.rC(t,A.im,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b0()
p=s.b0()
o=s.a8I(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tu()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tu()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tu()
p-=8}if(p>=4&&n.y===65535)n.y=o.aR()}}}}if(u>0)e.aoT(u)
f.c=n.as
t=new C.cF7(D.Nc,n,D.EK,B.a([C.Kh(0),C.Kh(0),C.Kh(0)],x.f3))
n.ch=t
t.aJr(0,f,g)},
u(d){return this.at}}
C.cF5.prototype={
cOK(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cF6(B.a([],x.fT))
this.a=g
g.aJr(0,d,f)
g=B.a([],x.bm)
w=B.U(x.N,x.S)
v=new C.aT0(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c9(o,"/")||A.a.c9(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Sx(o,A.o.ao(Date.now(),1000),0):C.hgF(o,q.w,q)
v.M(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hgF(o,q.w,q)
if(k.as==null)k.beO()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.amQ(A.im)
j.aNN(o,A.im,h,h)}i=j==null?h:j.eU()
if(i!=null)new B.GA(!1).DP(i,0,h,!0)}}return v}}
C.bGT.prototype={
cYj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.CI(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hHB(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dM("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dM("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bQm(u,0,w,0,o)}else{o===$&&B.c()
q.bMU(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LC(w,0)
m.x=A.aG.du(m.x,0,10)
w=m.w
l=w.a
l.jW(0)
w=w.d
w===$&&B.c()
l.CI(0,w,0,w.length)
return f}}
C.co1.prototype={}
C.co5.prototype={}
C.co_.prototype={}
C.au1.prototype={}
C.co4.prototype={
cOZ(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ec(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bhc(new C.au1(A.aG.fQ(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bRs(n.a,n.b,t,s,r)
r+=v}A.aG.hi(f,g,g+w,s)
return o.a.c},
bRs(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dM("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.CI(0,d,0,d.length)
v.CI(0,f,0,4)
u=m.c
u===$&&B.c()
w.LC(u,0)
u=m.c
A.aG.hi(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.CI(0,s,0,s.length)
w.LC(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.co0.prototype={}
C.cnZ.prototype={}
C.au2.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.au2){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tI(d,e){var w=this.a
w===$&&B.c()
w=A.o.tI(w,e.gc0g())
if(!w)e.gc0g()
return w},
aLX(d,e){this.a=0
this.b=d},
tL(d){return this.aLX(d,null)},
aMz(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
u(d){var w=this,v=new B.fi(""),u=w.a
u===$&&B.c()
w.b2n(v,u)
u=w.b
u===$&&B.c()
w.b2n(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b2n(d,e){var w,v=A.o.fA(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bw(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.co3.prototype={
jW(d){var w,v=this
v.a.tL(0)
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
apF(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b3P(u,0)
v.c=0}v.a.aMz(1)},
CI(d,e,f,g){var w=this.coK(e,f,g)
f+=w
g-=w
w=this.coL(e,f,g)
this.coB(e,f+w,g-w)},
LC(d,e){var w,v=this,u=C.hoy(v.a),t=u.a
t===$&&B.c()
t=C.hej(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hej(w,3)
v.coF()
v.coC(u)
v.au_()
v.ciM(d,e)
v.jW(0)
return 20},
b3P(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.om(A.aG.gaS(d),d.byteOffset,d.length).getUint32(e,A.ix===w.d)
if(w.w===16)w.au_()},
au_(){this.cYi()
this.w=0
A.d.hx(this.r,0,16,0)},
coB(d,e,f){while(f>0){this.apF(d[e]);++e;--f}},
coL(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b3P(d,e)
e+=4
f-=4
w.aMz(4)
v+=4}return v},
coK(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.apF(d[e]);++e;--f;++v}return v},
coF(){this.apF(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.apF(0)}},
coC(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.au_()
u=v.d
switch(u){case A.ix:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.Fa:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.be("Invalid endianness: "+u.u(0)))}},
ciM(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.ix===this.d,s=0;s<w;++s){r=v[s]
q=J.om(A.aG.gaS(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdd(d){return this.f}}
C.co6.prototype={
cYi(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qs[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qs[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qs[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qs[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qs[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qs[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qs[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qs[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qs[30]
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
C.co2.prototype={
bhc(d){var w,v,u,t,s=this,r=s.a
r.jW(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.CI(0,w,0,v)
w=s.d
w===$&&B.c()
r.LC(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hi(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.hx(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hi(w,0,u,s.d)
s.bbV(s.d,u,54)
s.bbV(s.e,u,92)
u=s.d
r.CI(0,u,0,u.length)},
LC(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LC(s,w)
s=u.e
t.CI(0,s,0,s.length)
v=t.LC(d,e)
s=u.e
A.aG.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.CI(0,s,0,s.length)
return v},
bbV(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cnY.prototype={}
C.cnX.prototype={
a37(d){return(D.oC[d&255]&255|(D.oC[d>>>8&255]&255)<<8|(D.oC[d>>>16&255]&255)<<16|D.oC[d>>>24&255]<<24)>>>0},
bnO(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dM("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e0(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.bZ(4,0,!1,u)
switch(v){case 4:q=J.om(A.aG.gaS(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a37((m>>>8|(m&$.qs[24])<<24)>>>0)^D.cKf[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.om(A.aG.gaS(e),e.byteOffset,w)
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
p=(p^f.a37((k>>>8|(k&$.qs[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a37((k>>>8|(k&$.qs[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.om(A.aG.gaS(e),e.byteOffset,w)
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
p=(p^f.a37((g>>>8|(g&$.qs[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a37(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.be("Should never get here"))}return s},
bQm(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.om(A.aG.gaS(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.eg[a8&255]
u=D.eg[a9>>>8&255]
t=$.qs[8]
s=D.eg[b0>>>16&255]
r=$.qs[16]
q=D.eg[b1>>>24&255]
p=$.qs[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.eg[a9&255]
s=D.eg[b0>>>8&255]
u=D.eg[b1>>>16&255]
v=D.eg[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.eg[b0&255]
u=D.eg[b1>>>8&255]
s=D.eg[a8>>>16&255]
q=D.eg[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.eg[b1&255]
a8=D.eg[a8>>>8&255]
a9=D.eg[a9>>>16&255]
b0=D.eg[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.eg[n&255]
b0=D.eg[m>>>8&255]
a9=D.eg[l>>>16&255]
a8=D.eg[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.eg[m&255]
b0=D.eg[l>>>8&255]
o=D.eg[b1>>>16&255]
s=D.eg[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.eg[l&255]
o=D.eg[b1>>>8&255]
b0=D.eg[n>>>16&255]
u=D.eg[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.eg[b1&255]
o=D.eg[n>>>8&255]
s=D.eg[m>>>16&255]
v=D.eg[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eg[a8&255]^C.nG(D.eg[a9>>>8&255],24)^C.nG(D.eg[b0>>>16&255],16)^C.nG(D.eg[b1>>>24&255],8)^b6[w][0]
m=D.eg[a9&255]^C.nG(D.eg[b0>>>8&255],24)^C.nG(D.eg[b1>>>16&255],16)^C.nG(D.eg[a8>>>24&255],8)^b6[w][1]
l=D.eg[b0&255]^C.nG(D.eg[b1>>>8&255],24)^C.nG(D.eg[a8>>>16&255],16)^C.nG(D.eg[a9>>>24&255],8)^b6[w][2]
b1=D.eg[b1&255]^C.nG(D.eg[a8>>>8&255],24)^C.nG(D.eg[a9>>>16&255],16)^C.nG(D.eg[b0>>>24&255],8)^b6[w][3]
a7=D.oC[n&255]
b0=D.oC[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oC[l>>>8&255]
a9=D.oC[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oC[b1>>>8&255]
h=D.oC[n>>>16&255]
g=D.oC[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oC[l>>>24&255]
s=s[3]
a1=J.om(A.aG.gaS(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.om(A.aG.gaS(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.om(A.aG.gaS(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.om(A.aG.gaS(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bMU(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.om(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.om(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.om(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.om(A.aG.gaS(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.ef[a6&255]
v=D.ef[b0>>>8&255]
u=$.qs[8]
t=D.ef[a5>>>16&255]
s=$.qs[16]
r=D.ef[a4>>>24&255]
q=$.qs[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.ef[a4&255]
t=D.ef[a6>>>8&255]
v=D.ef[b0>>>16&255]
w=D.ef[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.ef[a5&255]
v=D.ef[a4>>>8&255]
t=D.ef[a6>>>16&255]
r=D.ef[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.ef[b0&255]
a5=D.ef[a5>>>8&255]
a4=D.ef[a4>>>16&255]
a6=D.ef[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.ef[p&255]
a6=D.ef[b0>>>8&255]
a4=D.ef[n>>>16&255]
a5=D.ef[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.ef[o&255]
a4=D.ef[p>>>8&255]
a7=D.ef[b0>>>16&255]
t=D.ef[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.ef[n&255]
a7=D.ef[o>>>8&255]
a5=D.ef[p>>>16&255]
v=D.ef[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.ef[b0&255]
a7=D.ef[n>>>8&255]
t=D.ef[o>>>16&255]
w=D.ef[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.ef[a6&255]^C.nG(D.ef[b0>>>8&255],24)^C.nG(D.ef[a5>>>16&255],16)^C.nG(D.ef[a4>>>24&255],8)^b5[a9][0]
o=D.ef[a4&255]^C.nG(D.ef[a6>>>8&255],24)^C.nG(D.ef[b0>>>16&255],16)^C.nG(D.ef[a5>>>24&255],8)^b5[a9][1]
n=D.ef[a5&255]^C.nG(D.ef[a4>>>8&255],24)^C.nG(D.ef[a6>>>16&255],16)^C.nG(D.ef[b0>>>24&255],8)^b5[a9][2]
b0=D.ef[b0&255]^C.nG(D.ef[a5>>>8&255],24)^C.nG(D.ef[a4>>>16&255],16)^C.nG(D.ef[a6>>>24&255],8)^b5[a9][3]
a4=D.zr[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zr[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zr[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zr[o>>>8&255]
i=D.zr[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zr[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.om(A.aG.gaS(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bSb.prototype={}
C.bSc.prototype={
gK(d){var w=this.a.length
return w},
aqb(){return B.rC(this.a,A.im,null,null)}}
C.bc_.prototype={
vm(d){return C.i1w(d)}}
C.cyr.prototype={
Ni(d){var w=d.w,v=Math.max(1,A.k.cO(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.aaQ(v,t+20,u+16,t,u,B.un(d.x))},
nA(d){return!1}}
C.bTe.prototype={
cIM(d){if(this.b)throw B.W(B.be("FontLoader is already loaded"))
this.c.push(d.bJ(new C.bTf(),x.E))},
mR(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.be("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mR)
case 6:w=5
return B.b(p.fHe(f,r),$async$mR)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mR,v)}}
C.ax8.prototype={
a6(){return"SystemUiMode."+this.b}}
C.a9a.prototype={
A(d,e){if(e==null)return!1
if(J.bR(e)!==B.b0(this))return!1
return e instanceof C.a9a&&e.a===this.a},
gX(d){return B.bw(B.b0(this),B.xc(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b0(this)===D.h_X)return"["+(w+B.e9(this.a))+"]"
return"[ObjectKey "+(w+B.e9(this.a))+"]"}}
C.a1F.prototype={
R(){return new C.aKC(B.aV(x.N))},
cWq(d){return this.d.$1(d)},
cU6(){return this.e.$0()}}
C.aKC.prototype={
Z(){this.a3()
this.PE()},
PE(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cU6(),$async$PE)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fg_(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PE,v)},
ZN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.T(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fg3(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fg4(t))
w=3
return B.b(C.aoz(p),$async$ZN)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fg5(t,s,p))
w=4
return B.b(t.PE(),$async$ZN)
case 4:case 1:return B.h(u,v)}})
return B.i($async$ZN,v)},
a22(d){return this.csX(d)},
csX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a22=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fg0(t))
s=J.r(d,"id")
w=3
return B.b(C.c3b(J.k(s==null?"":s)),$async$a22)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fg1(t))
w=1
break}q=C.hdM(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cWq(B.a([q],x.D)),$async$a22)
case 4:if(t.c==null){w=1
break}t.m(new C.fg2(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a22,v)},
PD(d,e){return this.bNl(0,e)},
bNl(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PD=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ch(null,null,!0,null,new C.ffV(q),r,null,!0,!0,x.y),$async$PD)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.ffW(t))
s=s.h(e,"id")
w=4
return B.b(C.aoy(J.k(s==null?"":s)),$async$PD)
case 4:if(t.c==null){w=1
break}t.m(new C.ffX(t))
w=5
return B.b(t.PE(),$async$PD)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PD,v)},
cHL(d){var w=B.bk(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iN[B.bL(v)-1]+" "+B.bW(v)},
aSn(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.PM,A.n),w,e,w,w,w,w,w,e)},
aSm(d){return this.aSn(d,44)},
b90(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.PM:u,r=B.n(14),q=B.X(e,t?A.c:A.aC,u,u,u,17),p=x.p
q=B.a([q,Z.En,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aC,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([Z.En,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bGl,u,u,u)],p))}return B.E(B.aA(A.c6,B.cY(u,B.B(q,A.m,u,A.b9,A.i,0,u,u),u,u,A.b5,new B.o(u,u,u,r,u,s,A.n),A.h5,u,u,u,u,A.rF,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fg9(this,d),u,u,u,u,u,u,!1,A.a3),1)},
cmJ(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d3.j(0.14):D.ZA,n=B.n(18),m=p?A.d3:A.dr
m=B.L(m,A.r,p?1.8:1)
w=this.aSm(A.qC)
v=B.d(d.b,q,1,A.a1,q,q,q,D.aVu,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aVw,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
v=p?D.PM:q
u=p?q:B.L(A.aX,A.r,1.6)
r=p?D.bXw:q
return B.aA(q,B.cY(q,B.B(B.a([w,A.bd,t,B.cY(q,r,q,q,A.b5,new B.o(q,q,u,q,q,v,A.a6),A.fO,q,26,q,q,q,q,q,26)],s),A.m,q,A.e,A.i,0,q,q),q,q,A.b5,new B.o(o,q,m,n,q,q,A.n),A.fO,q,q,q,A.d1,A.bg,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ffZ(this,p,d),q,q,q,q,q,q,!1,A.a3)},
cuA(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cHL(J.k(o==null?"":o))
o=B.n(18)
w=B.L(A.dr,A.r,1)
v=r.aSm(A.OT)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a1,q,q,q,D.aVu,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aVw,q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
p=r.b5w(A.hU,A.bv,"Bring it back",r.r?q:new C.fg6(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bm,r.b5w(A.eb,A.c0,"Delete",r.r?q:new C.fg7(r,d))],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(D.ZA,q,w,o,q,q,A.n),q,q,q,A.d1,D.bAC,q,q,q)},
b5w(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hf(B.aA(w,B.p(w,B.X(d,v?A.aX:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a3),w,f,w,w)},
auf(d,e,f){var w=null
return new B.D(D.bzC,B.x(B.a([B.X(d,A.aX,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fwn,w,w,w),A.av,B.d(f,w,w,w,w,w,w,D.fop,A.K,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ca
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aG(d,A.bZ,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aX,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aSn(A.ze,46),A.bd,D.bHd],t)
if(j.r)s.push(D.epx)
s.push(B.aH(i,i,i,i,A.rV,i,i,i,new C.fgc(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.i,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.L(A.dr,A.r,1)
o=J.a7(h)
q=B.a([A.W,u,new B.D(D.bDj,s,i),B.p(i,B.B(B.a([j.b90(0,A.yY,"Save",j.a.c.length),j.b90(1,A.Pa,"Saved",o.gK(h))],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bCk,A.ev,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c0:A.bv).j(0.12)
s=B.n(14)
r=B.L((j.y?A.c0:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.OW:A.e6
n=B.X(n,p?A.c0:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ad,B.E(B.d(m,i,i,i,i,i,i,A.Ve,i,i,i),1)],t),A.m,i,A.e,A.i,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bCg,A.it,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fsa,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aA(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fvm,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fgd(j,v),i,i,i,i,i,i,!1,A.a3))
s=B.a([B.B(s,A.m,i,A.e,A.i,0,i,i),A.W],t)
if(j.a.c.length===0)s.push(j.auf(A.qC,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cmJ(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ep3)
else if(j.e==null)s.push(j.auf(A.a23,"Could not reach the database","Check the connection, then open this again."))
else if(o.gan(h))s.push(j.auf(A.ph,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cuA(r.gS(r)))
A.d.v(u,s)}q.push(new B.ds(1,A.cn,B.cl(u,i,i,A_.alK,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc7f()
p=s?i:D.PM
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cy,18)],x.V)
u=u.a
m=u===0
k=B.X(A.yY,m?A.jS:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bCW,B.aA(i,B.cY(i,B.B(B.a([k,A.a9M,new B.ds(1,A.cn,B.eO(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jS:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.e3),i)],t),A.m,i,A.b9,A.i,0,i,i),i,i,A.b5,new B.o(s,i,i,o,n,p,A.n),A.h5,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a3),i))}else q.push(A.W)
return B.p(i,B.bn(!0,B.x(q,A.m,i,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aZ(0,1/0,0,w.a.b*0.9),D.b6i,i,i,i,i,i,i,i,i)}}
C.oE.prototype={
ah(){return B.H(["id",this.a,"doc",this.b.ah(),"updatedAt",this.c.a9().ae()],x.N,x.z)}}
C.Zl.prototype={
R(){return new C.az2(B.a([],x.k),B.f9(null,x.H))},
ge2(){return this.c}}
C.az2.prototype={
Z(){this.a3()
this.PO()},
PO(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a2D(t.a.c),$async$PO)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cOm(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PO,v)},
cAV(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.qC(t.d,new C.cOp(d))
v=w<0
if(v&&C.hZB(d))return t.f
u=t.d
if(v)J.pR(u,0,d)
else J.aJ(u,w,d)
v=x.a
B.h4b(new C.cOq(t),v)
return t.f=t.f.bJ(new C.cOr(t,d),v).eK(new C.cOs())},
J5(d,e,f){return this.cgh(0,e,f)},
b_i(d,e){return this.J5(0,e,!1)},
cgh(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$J5=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).cc(B.ej(new C.cOl(t,e),!1,null,x.H)),$async$J5)
case 3:w=4
return B.b(t.f,$async$J5)
case 4:w=5
return B.b(t.PO(),$async$J5)
case 5:case 1:return B.h(u,v)}})
return B.i($async$J5,v)},
aZx(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dJJ:d
this.J5(0,new C.oE(w,v,new B.V(Date.now(),0,!1)),!0)},
c6I(){return this.aZx(null)},
aeo(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cOt(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeo)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aZx(s)
case 1:return B.h(u,v)}})
return B.i($async$aeo,v)},
J4(d,e){return this.bNc(0,e)},
bNc(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$J4=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ch(null,null,!0,null,new C.cOg(e),s,null,!0,!0,x.y),$async$J4)
case 3:if(g!==!0){w=1
break}t.m(new C.cOh(t,e))
w=4
return B.b(t.f,$async$J4)
case 4:w=5
return B.b(C.ah8(t.a.c,e.a),$async$J4)
case 5:w=6
return B.b(t.PO(),$async$J4)
case 6:case 1:return B.h(u,v)}})
return B.i($async$J4,v)},
Dx(d){return this.bFj(d)},
bFj(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Dx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.cOc(d),r,!0,!0,!1,null,!1,!1,x.N),$async$Dx)
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
return B.b(t.b_i(0,d),$async$Dx)
case 9:w=5
break
case 7:w=10
return B.b(F.hel(r,d.b,null),$async$Dx)
case 10:w=5
break
case 8:w=11
return B.b(t.J4(0,d),$async$Dx)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$Dx,v)},
c0c(){var w,v,u=null,t=[D.dJM,D.dJK,D.dJL],s=new C.cOj(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d0.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aP(999,999)
n.push(B.p(u,new B.y(D.dth[w],u,A.oR,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bh(v,v,v,v),u,u,A.n),u,u,u,u,A.oi,u,u,u))}return B.p(u,B.B(B.a([B.E(B.x(B.a([D.fWe,A.N,B.bX(A.bG,n,A.br,u,6,6),A.aQ,B.aA(u,B.p(u,D.f69,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cI,10)],q),u,A.n),u,u,u,u,V.am8,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cOi(this),u,u,u,u,u,u,!1,A.a3)],o),A.E,u,A.e,A.i,0,A.p),1),new B.a4(130,110,new B.an(A.A,u,A.ab,A.t,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.i,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.c4Z,A.n),u,u,u,u,D.bDt,u,u,u)},
bFh(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cy,14)],x.V),r=x.p
s=B.p(v,B.bx(B.n(6),new B.an(A.a_,v,A.b3,A.t,B.a([B.eO(A.A,F.apa(d.b),A.f,A.bY),D.evy,B.ap(v,B.aA(v,B.p(v,D.bYl,A.f,v,v,D.b7f,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cO7(this,d),v,v,v,v,v,v,!1,A.a3),v,v,v,4,4,v)],r),v),A.ap),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a1,v,v,v,D.flx,v,v,v)
w=u===1?"":"s"
return B.aA(v,B.x(B.a([new B.fK(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fsm,v,v,v)],r),A.E,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cO8(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cO9(this,d),v,v,v,v,v,v,!1,A.a3)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eI(B.a([new B.D(O.akF,B.hf(B.aA(s,B.p(s,A.arr,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.I,12)],x.V),E.wI,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc84(),s,s,s,s,s,s,!1,A.a3),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nl,s,s,s,!0,s,s,s,s,s,D.fWi,s,s,s,1,s,!0)
if(t.e)r=D.baK
else{w=t.c0c()
v=B.a([D.fHs,A.ad],r)
if(J.cM(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fkY,s,s,s),A.f,s,s,new B.o(D.bfZ,s,s,u,s,s,A.n),s,s,s,s,A.yE,s,s,s))}r=B.a([new B.o7(A7.a_V,new B.mr(w,s),s),new B.o7(D.bCQ,new B.mr(B.B(v,A.m,s,A.e,A.i,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.fcV)
else r.push(new B.o7(D.bCi,B.Py(new B.oJ(new C.cOu(t),J.ad(t.d),!0,!0,!0,0,B.ti(),s),D.b9Z),s))
r=B.w_(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c6(q,D.bez,r,s,!1,!1,s,s)}}
C.Zj.prototype={
R(){return new C.ayZ(B.a([],x.bx))},
UE(d){return this.d.$1(d)}}
C.aGp.prototype={}
C.ayZ.prototype={
b2p(d,e,f){var w=$.aw(),v=new B.au(new B.bb(d,A.b4,A.aO),w),u=this.gb_h()
v.aT(0,u)
w=new B.au(new B.bb(e,A.b4,A.aO),w)
w.aT(0,u)
return new C.aGp(v,w,f)},
Eo(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a2(0)
v.x=B.cD(A.ql,new C.cNB(v))},
Z(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.aw()
u=new B.au(new B.bb(w.a,A.b4,A.aO),v)
t=m.gb_h()
u.aT(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.bb(w.b,A.b4,A.aO),v)
u.aT(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.bb(w.c,A.b4,A.aO),v)
u.aT(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.au(new B.bb(p.a,A.b4,A.aO),v)
o.aT(0,t)
n=new B.au(new B.bb(p.b,A.b4,A.aO),v)
n.aT(0,t)
r.push(new C.aGp(o,n,p.c))}if(r.length===0)r.push(m.b2p("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a2(0)
if(r.y){r.a.c.b=r.gps()
q=r.a
q.UE(q.c)}q=r.d
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
s.P$=0}r.a1()},
gps(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mM(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rH(n,w,v,t,u)},
B1(){var w=0,v=B.j(x.H),u=this,t
var $async$B1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a2(0)
u.y=!1
u.a.c.b=u.gps()
t=u.a
w=2
return B.b(t.UE(t.c),$async$B1)
case 2:return B.h(null,v)}})
return B.i($async$B1,v)},
c82(){this.m(new C.cNA(this))
this.Eo()},
aZc(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cND(w,d,v))
w.Eo()},
c83(d,e){var w=A.d.cz(this.w,e)
this.m(new C.cNL())
this.Eo()
$.aW.x1$.push(new C.cNM(w))},
R4(d){return this.cmz(d)},
cmz(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$R4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l6(80,1400,A.eL),$async$R4)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$R4)
case 8:p=f
o=q.b.toLowerCase()
n=J.aiF(o,".png")?"image/png":"image/jpeg"
r.m(new C.cNE(d,n,p))
r.Eo()
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
return B.i($async$R4,v)},
y4(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$y4=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hBU(r,t.gps()),$async$y4)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cNC(t,s))
t.Eo()
case 1:return B.h(u,v)}})
return B.i($async$y4,v)},
cmR(d){var w,v=this,u=null,t=F.fLn(d.c)
if(t==null)return new B.bN(A.a5,u,u,B.ht(D.bRu,D.fK_,new C.cNG(v,d),u),u)
w=x.p
return new B.D(A.ct,new B.an(A.a_,u,A.ab,A.t,B.a([B.bx(B.n(12),B.fU(t,A.A,u,u,A.ci,A.bY,!0,140,!1,u,1/0),A.ap),B.ap(u,B.B(B.a([v.b5x(A.jH,new C.cNH(v,d)),A.bm,v.b5x(A.cx,new C.cNI(v,d))],w),A.m,u,A.e,A.i,0,u,u),u,u,u,6,6,u)],w),u),u)},
b5x(d,e){var w=null
return B.aI(!1,A.a2,!0,w,B.aO(!1,w,!0,new B.D(A.hS,B.X(d,A.c,w,w,w,18),w),A.cO,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aS,0,w,w,A.cO,w,w,A.ai)},
J6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$J6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.B1(),$async$J6)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hel(s,t.gps(),new C.cNK(t)),$async$J6)
case 4:case 1:return B.h(u,v)}})
return B.i($async$J6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eI(B.a([new B.D(A.qm,B.ht(D.bWf,D.fQa,n.gaxY(),B.fy(m,m,m,m,m,m,m,m,m,m,m,A.bM,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.arq,m,m,m,new C.cNN(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.YH,m,1,m,m,m,!1,m,!1,E.nl,m,m,m,!0,m,m,m,m,m,D.fKR,m,m,m,1,m,!0),j=Ay.aWh(N.lC,A.c,Ag.Xu,A.ow,D.fLB,n.gc81()),i=B.n(18),h=n.gaxX(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.j6,12)],x.V)
g=B.aA(m,B.p(m,new B.a4(92,142.1818181818182,B.eO(A.A,F.apa(n.gps()),A.f,A.dz),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a3)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.es,B.E(B.x(B.a([D.fXT,A.av,B.d(F.hcP(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fyc,m,m,m),A.W,B.dj(E.aqJ,E.aWh,h,B.bo(A.d0,m,m,m,m,m,m,m,m,m,m,m))],l),A.E,m,A.e,A.i,0,A.p),1)],l),A.m,m,A.e,A.i,0,m,m),A.f,m,m,new B.o(E.YH,m,m,i,m,m,A.n),m,m,m,m,A.bg,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b6(4,B.n(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.oP,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b6(4,B.n(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.N,w,A.N,B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b6(4,B.n(12),A.dk),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aP(16,16)
u=new B.ay(N.lC.j(0.18),1,A.r,-1)
t=v+1
s=B.aH(m,m,m,m,D.bUT,m,m,m,v===0?m:new C.cNO(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aH(m,m,m,m,D.c0m,m,m,m,v===r-1?m:new C.cNP(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cNQ(n,v)
p=new B.aP(12,12)
o=new B.aP(12,12)
g.push(B.p(m,B.x(B.a([new B.ca(A.aL,A.e,A.i,A.m,m,A.p,m,0,B.a([new B.y("Page "+t,m,D.fyK,m,m,m,m,m,m,m,m,m),A.b2,s,q,B.aH(m,m,m,m,B.X(A.eb,A.p8,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e8(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b6(4,new B.bh(p,p,p,p),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,A.ce,!0,A.a4,m,A.an,m,m,m,m),A.am,n.cmR(i[v]),B.aM(m,A.Y,!1,m,!0,A.t,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e8(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b6(4,new B.bh(o,o,o,o),A.dk),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.aj,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.aa,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.i,0,A.p),A.f,m,m,new B.o(E.nl,m,new B.bG(u,u,u,u),new B.bh(w,w,w,w),m,m,A.n),m,m,new C.a9a(h),A.ee,D.bAS,m,m,m))}return B.oG(!0,B.c6(k,E.aiA,B.cl(g,m,m,D.bBl,m,m,A.ah,!1),m,!1,!1,j,m),new C.cNR(n),x.C)}}
C.az0.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c0:E.nl,q=B.n(16),p=B.n(16),o=s?A.aw.j(0.08):A.c.j(0.04)
s=s?A.aw.j(0.16):A.d0.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eI,B.aI(!1,A.a2,!0,t,B.aO(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(u.e,t,t,t,t,t,t,D.aUR,t,t,t)],v),A.E,t,A.e,A.i,0,A.p),1),B.X(A.eE,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.i,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bg,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.ai),t)}}
C.art.prototype={
R(){return new C.aFd()}}
C.aFd.prototype={
Z(){this.a3()
this.a_s()},
bz(d){this.bH(d)
if(d.c!=this.a.c)this.a1S()},
a1S(){var w=0,v=B.j(x.H),u=this,t
var $async$a1S=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dV(t,x.H),$async$a1S)
case 2:u.d=null
if(u.c!=null)u.m(new C.ejN(u))
w=3
return B.b(u.a_s(),$async$a1S)
case 3:return B.h(null,v)}})
return B.i($async$a1S,v)},
a_s(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_s=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d3(n,"http://")||J.d3(n,"https://")||J.d3(n,"data:")){o=B.YX(B.cI(n,0,null),new B.PV(!0))
r.d=o}else{o=B.fp("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.ix(0).dc(0,A.qi),$async$a_s)
case 7:if(r.c==null){w=1
break}r.d.tN(!1)
r.m(new C.ejL(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ab(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.ejM(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_s,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a1()},
caZ(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hh(0)
w.m(new C.ejO(w))}else{v.qh(0)
w.m(new C.ejP(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bK
n=B.n(8*n.d)
m=B.a([D.jv.j(0.92),D.M8.j(0.95)],x.O)
w=B.L(A.c3.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qF,A.c3,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c4(B.at(B.x(B.a([t,new B.a4(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.m,o,A.e,A.P,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a9(A.az,A.aE,A.x,m,o,o),A.n),A.bh)}if(p.f)return B.at(B.X(A.apZ,A.aC,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bbD
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.eO(A.A,new B.a4(r,q,new B.Av(s,o),o),A.t,A.bY)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.at(B.p(o,B.X(A.hp,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aA(o,B.bx(n,new B.an(A.a_,o,A.b3,A.t,m,o),A.ap),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcaY(),o,o,o,o,o,o,!1,A.a3)}}
C.xY.prototype={
a6(){return"NgmyHatiLayoutKind."+this.b}}
C.jB.prototype={}
C.ae1.prototype={
B(d){return B.pa(new C.e6i(this,B.R(d).ax.a===A.J,d),!0,0.72,0.9,0.5,!1,null)}}
C.adq.prototype={
B(d){var w,v,u=null,t=B.R(d).ax.a===A.J,s=B.n(18),r=B.n(18),q=B.L(D.jv.j(t?0.35:0.4),A.r,1),p=t?D.MJ:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cy,14)],o),m=B.n(10),l=B.L(A.c3.j(0.5),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],o)
w=this.c
o=B.E(B.p(u,new B.fK(0.5625,C.ihz(w),u),A.ap,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.amD,u,u,u,u),1)
m=D.jv.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jv,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aI(!1,A.a2,!0,u,B.aO(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cS,B.d(w.c,u,2,A.a1,u,u,u,B.l(u,u,t?A.aC:D.bnh,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a0,A.a0,A.a0),u,u,u,A.n),u,u,u,u,D.akW,u,u,u)],v),A.ak,u,A.e,A.i,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}}
C.y0.prototype={
a6(){return"NgmyMarriageLayoutKind."+this.b}}
C.nY.prototype={}
C.blf.prototype={
a_B(d){var w=null
return new B.bN(A.a5,w,w,B.BF(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cbs(){return this.a_B(1)},
ayD(d){var w=null,v=B.n(8),u=B.L(A.ip,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ag9,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.L(A.ip,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dR(B.p(v,v,A.f,v,v,new B.o(v,v,B.L(A.ip,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b9,A.i,0,v,v),A.av,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.ayD("TAARIFA ZA WANANDOA"),A.am,w.cbs(),A.cS,w.a_B(0.9),A.cS,w.a_B(0.7),A.N,w.ayD("TAMKO LA MAKUBALIANO"),A.fG,w.a_B(1),A.cS,w.a_B(0.95),A.N,w.ayD("MASHAHIDI"),A.b2,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.i,0,A.p)}}
C.ae4.prototype={
B(d){return B.pa(new C.eoz(B.R(d).ax.a===A.J,d),!0,0.92,0.96,0.5,!1,null)}}
C.afK.prototype={
B(d){var w,v,u,t,s,r=null,q=B.R(d).ax.a===A.J,p=B.n(18),o=B.n(18),n=B.L(A.aA.j(q?0.35:0.4),A.r,1),m=q?D.bmO:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cy,14)],l),j=B.n(10),i=B.L(A.aA.j(0.5),A.r,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dC,6)],l)
w=this.c
v=C.hdk(w.a)
if(v==null)v=A.d.gI(D.Sk)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fK(0.5625,new B.an(A.a_,r,A.b3,A.t,B.a([B.bT(0,B.fU(C.hdj(v.d),A.A,r,r,A.ci,A.bY,!0,r,!1,r,r),0,0,0),new B.D(A.alA,new C.blf(v,u,t,r),r)],s),r),r),A.ap,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.amD,r,r,r,r),1)
j=A.aA.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:A1.MK,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aI(!1,A.a2,!0,r,B.aO(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cS,B.d(w.c,r,2,A.a1,r,r,r,B.l(r,r,q?A.aC:D.bfd,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a0,A.a0,A.a0),r,r,r,A.n),r,r,r,r,D.akW,r,r,r)],s),A.ak,r,A.e,A.i,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.l6.prototype={
a6(){return"NgmyMarriagePaperStyle."+this.b}}
C.a8D.prototype={}
C.Ws.prototype={
R(){var w=$.aw()
return new C.aFu(new B.cx(null,x.A),new B.au(A.at,w),new B.au(A.at,w),B.mU(0,null,null),A.d.gI(D.a5a),D.dU_,B.a([],x.L),B.a([],x.gE))}}
C.aFu.prototype={
Z(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.zX(C.fPg(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
w=x.a
C.fOc().bJ(new C.erw(v),w)
$.rg().jl(0,"assets/images/ngmy_logo.png").bJ(new C.erx(v),w).eK(new C.ery())},
t(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.t()
w.a1()},
afc(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.U(B.b3(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Z,w,w,w,w,w,w,w,w,w,w))},
Jo(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$Jo=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l6(88,1600,A.eL),$async$Jo)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$Jo)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hCa(m,p),$async$Jo)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bFv(new B.q4(o,1),m),$async$Jo)
case 10:if(r.c!=null)r.m(new C.er8(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ab(k)
r.afc("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Jo,v)},
XA(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hCa(s,q),$async$XA)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bFv(new B.q4(r,1),s),$async$XA)
case 4:if(t.c!=null)t.m(new C.er4(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XA,v)},
afd(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afd=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.erf(q))
t=4
q.a.toString
p=C.im4()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afd)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.erg(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ab(i)
q.afc(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.erh(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afd,v)},
a_G(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a_G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.era(q,i))
t=4
q.a.toString
p=C.im3()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a_G)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.erb(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ab(g)
if(q.c!=null)q.m(new C.erc(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.erd(q))
$.aW.x1$.push(new C.ere(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_G,v)},
cbI(d){this.m(new C.er9(this,d))},
EG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.er6(q))
t=4
w=7
return B.b($.aW.gmN(),$async$EG)
case 7:w=8
return B.b(B.bP(A.mI,null,x.H),$async$EG)
case 8:k=$.aW.al$.x.h(0,q.d)
p=k==null?null:k.gbd()
if(!(p instanceof B.qe))throw B.W("The page is not ready yet.")
w=9
return B.b(p.m9(1800/p.gY(0).a),$async$EG)
case 9:o=e
w=10
return B.b(o.hA(A.hb),$async$EG)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A8.ahb(J.eT(A.dK.gaS(n)),"ngmy_news.png","image/png"),$async$EG)
case 11:m=e
q.afc(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
q.afc(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.er7(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EG,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.lh,a2,a2,a2,new C.ern(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bWL,a2,a2,a2,new C.ero(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.ov,a2,a2,a2,a4?a1.gb0x():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eI(v,a2,a2,!0,!0,A.BJ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.f6j,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fK(0.7142857142857143,B.eO(A.A,new B.er(new C.b2y(t,s,r,a1.x,a2),a1.d),A.f,A.dz),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,X.ts,a2,a2,a2)
t=a1.as?a2:a1.gcbH()
t=B.a([B.E(B.dj(D.bXx,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ce,a2,a2,a2),t,B.bo(D.tZ,a2,a2,a2,A.c,A.h0,a2,a2,new B.b8(B.n(14),Q.vJ),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bx(B.n(10),B.fU(r,A.A,a2,a2,A.ci,A.bY,!1,48,!1,a2,48),A.ap)
A.d.v(t,B.a([A.as,r,B.aH(a2,a2,a2,a2,D.bUa,a2,a2,a2,a1.as?a2:a1.gbLN(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.i,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,X.ts,a2,a2,a2)
q=B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aUd("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dna[o]
p.push(B.n0(a2,D.tZ,new B.y(n.a,a2,A.pG,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.he,new C.erp(a1,n),a2,a2,Q.vJ,a2))}p=B.bX(A.bG,p,A.br,a2,6,8)
m=a1.Q
m=B.bX(A.bG,B.a([D.fWr,A.bd,B.jw(a2,a2,a2,D.fG8,a2,new C.erq(a1),m==="en",a2,a2,a2,a2),A.ad,B.jw(a2,a2,a2,D.fG3,a2,new C.err(a1),m==="sw",a2,a2,a2,a2)],w),A.vC,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,X.ts,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.d2(D.a5a,0,B.dz(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gK(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aSH(g==null?h.a(g):g))}k=B.cl(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.d2(D.a5a,10,a2,j),h=j.$ti,j=new B.bS(j,j.gK(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aSH(g==null?h.a(g):g))}j=B.cl(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcbK()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bE.j(0.4),A.I,18)],v)
v=B.a([u,A.aB,new B.D(A.ct,s,a2),t,A.aB,new B.D(A.ct,r,a2),q,A.N,p,A.W,m,A.aB,new B.D(A.ct,l,a2),new B.a4(a2,78,k,a2),A.N,new B.a4(a2,78,j,a2),A.aQ,B.aA(a2,B.p(A.A,B.B(B.a([D.bXr,A.ad,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fy,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.uQ,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a3)],w)
if(a4){u=B.a([A.dT,B.B(B.a([D.dEq,A.as,D.bHz],w),A.m,a2,A.e,A.i,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a5
q=e?A.b7.j(0.35):D.tZ
p=new B.aP(16,16)
d=new B.ay(A.bz,1,A.r,-1)
u.push(new B.bN(r,a2,a2,B.p(a2,new B.y(f.b,a2,D.fw7,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A9.Xi,new B.o(q,a2,new B.bG(d,d,d,d),new B.bh(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.ct,A.it,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.d8C[o]
t.push(B.n0(a2,D.tZ,new B.y(a0,a2,A.Kp,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.he,new C.ers(a1,a0),a2,a2,Q.vJ,a2))}u.push(B.bX(A.bG,t,A.br,a2,6,8))
u.push(A.W)
t=B.E(B.aM(a2,A.Y,!1,a2,!0,A.t,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aUd("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.aj,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ert(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.aa,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.df,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcbJ()
u.push(B.B(B.a([t,A.ad,B.Ii(A.zi,s,B.nS(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.i,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb0x()
u.push(B.dj(A.ov,D.fRR,t,B.bo(A.cT,a2,a2,a2,a2,A.K9,a2,a2,new B.b8(B.n(16),A.a0),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cl(v,a1.r,a2,A.all,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.L(E.kg.j(0.5),A.r,1)
v.push(B.bT(0,B.ec(B.at(B.p(a2,B.B(B.a([E.a9N,A.es,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jq,a2,a2,a2)],w),A.m,a2,A.e,A.P,0,a2,a2),A.f,a2,a2,new B.o(E.Bw,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bDL,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c6(a3,A.BJ,new B.an(A.a_,a2,A.ab,A.t,v,a2),a2,!1,!1,a2,a2)},
aUd(d){var w=null
return B.bs(w,new B.b6(4,B.n(14),A.a0),w,A.eS,w,w,w,w,!0,w,w,w,w,w,w,D.tZ,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,Y.Er,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aSH(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b1(d.f),p=s?A.bE:A.bz
p=B.L(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.km,t,t,t,t),A.fG],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bzR,t,t,t,t))
w.push(A.cS)
w.push(new B.D(A.jC,B.d(d.b,t,1,A.a1,t,t,t,B.l(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aA(t,B.p(t,B.x(w,A.m,t,A.b9,A.i,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iJ,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.er5(this,d),t,t,t,t,t,t,!1,A.a3)}}
C.zX.prototype={
be1(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zX(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cMt(d){var w=null
return this.be1(w,w,w,w,w,d,w,w,w,w)},
ah(){var w=this
return B.H(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aE6(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ciw(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aX(g);v.C();){u=v.gS(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.ft(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ciu(),B.T(w).k("N<1,m>")).bZ(0,new C.civ())
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
return this.be1(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFT(d){return this.f}}
C.tG.prototype={
a6(){return"NewsLayout."+this.b}}
C.BV.prototype={
a6(){return"NewsFrame."+this.b}}
C.lu.prototype={}
C.b2y.prototype={
rL(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b0z(d,e,f,g){return this.rL(d,e,null,1.25,f,A.bp,g)},
Qo(d,e,f,g,h){return this.rL(d,e,f,1.25,g,A.bp,h)},
ayJ(d,e,f,g,h){return this.rL(d,e,null,f,g,A.bp,h)},
ayI(d,e,f,g,h){return this.rL(d,e,f,g,0,A.bp,h)},
b0B(d,e,f,g,h){return this.rL(d,e,null,f,0,g,h)},
cbO(d,e,f,g,h,i){return this.rL(d,e,f,g,0,h,i)},
ayH(d,e,f,g){return this.rL(d,e,null,f,0,A.bp,g)},
afg(d,e,f){return this.rL(d,e,null,f,0,A.bp,A.cR)},
b0A(d,e,f,g,h){return this.rL(d,e,f,g,0,h,A.cR)},
cbN(d,e,f,g){return this.rL(d,e,null,f,0,g,A.cR)},
cbM(d,e,f,g){return this.rL(d,e,f,g,0,A.bp,A.cR)},
afh(d,e,f,g,h,i){return this.rL(d,e,f,g,h,A.bp,i)},
b0y(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iH(new B.es(d,u,u,A.cL,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.bX,new B.jg(1),u,u,h,u,A.bV,u)
v.o2(g)
if(!v.b.a.c.gaFS())return w
w-=2}return j},
afe(d,e,f,g,h,i,j,k){return this.b0y(d,e,f,g,h,i,j,k,A.bp)},
aAU(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a4(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.m,w,A.e,A.i,0,A.p)},
aAT(d){return this.aAU(null,!1,d)},
aic(d,e){return this.aAU(null,d,e)},
ctI(d,e){return this.aAU(d,!1,e)},
gb2M(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaWT(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
P8(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afe(w.gaWT(),u,A.U,d,g,h,i,1.02)
return B.d(w.gaWT(),v,g,A.a1,v,v,v,w.ayI(u,t,f,1.02,A.U),e,v,v)},
aWY(d){return this.P8(d,A.K,null,2,78,30)},
acy(d,e,f,g,h){return this.P8(d,e,null,f,g,h)},
c05(d,e,f,g,h){return this.P8(d,A.K,e,f,g,h)},
c04(d,e,f){return this.P8(d,A.K,null,e,f,30)},
Sm(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bK
w=v.d.as
return new B.D(A.jB,B.d(s,u,g,A.a1,u,u,u,v.b0A(w,v.b0y(t,w,A.cR,d,g,h,15,1.2,A.cD),f,1.2,A.cD),e,u,u),u)},
b8F(d){return this.Sm(d,A.K,null,3,24)},
aCo(d,e,f,g){return this.Sm(d,e,null,f,g)},
cBo(d,e,f){return this.Sm(d,A.K,e,3,f)},
b8G(d,e){return this.Sm(d,e,null,3,24)},
cBm(d,e){return this.Sm(d,A.K,null,3,e)},
cBn(d,e,f){return this.Sm(d,e,null,3,f)},
ash(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.eZ,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Qo("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.i,0,v,v)},
O4(){return this.ash(null,!0)},
asg(d){return this.ash(null,d)},
bHJ(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bK
return new B.D(A.i7,new B.a4(d,w,B.d(v,w,2,A.a1,w,w,w,this.cbN(this.d.as,13.5,1.2,A.cD),e,w,w),w),w)},
vR(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb2M(),h=A.o.ao(j.bF(B.c3(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.i9l(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b0z(k,12,1.2,A.U),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afe(i,v,A.U,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afe(i.toUpperCase(),v,A.U,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eM,l,l,l,m.afh(v,u*0.84,h,1,1,A.U),l,l,l),1)],s),A.m,l,A.e,A.i,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bEK(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.iP,A.i,0,l,l),A.am,m.aic(!0,3)],s),A.m,l,A.e,A.i,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.B(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.es,B.E(B.d(i,l,1,A.eM,l,l,l,m.ayH(v,u*0.9,1,A.U),l,l,l),1)],w),A.m,l,A.e,A.i,0,l,l),A.W,B.B(B.a([B.d(C.bEK(j),l,l,l,l,l,l,m.Qo(k,13,B.b1(h),0.6,A.U),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.iP,A.i,0,l,l),A.N,m.ctI(B.b1(h),3)],w),A.m,l,A.e,A.i,0,A.p)
case"logo":r=a0?52:64
w=m.gb2M()
v=B.d("NGMY",l,l,l,l,l,l,m.ayJ(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.B(B.a([v,A.ad,B.eM(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rL(k,r*0.72,o,1.05,-0.5,A.cD,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b2,new B.ds(1,A.cn,B.d(w.toUpperCase(),l,2,A.a1,l,l,l,m.afh(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.U),A.dV,l,l),l)],n),A.m,l,A.e,A.i,0,l,l),A.N,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.i,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iP,A.i,0,l,l)
t=m.aic(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.ayH(v,u,1,A.U),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.av,t,new B.a4(l,s,l,l),v,new B.a4(l,q,l,l),m.aic(!0,1.4),A.av,B.d(C.bEK(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.av,m.aAT(3)],h),A.m,l,A.e,A.i,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.ayJ(v,u,1,3,A.U),A.K,l,l),A.N,m.aic(!0,1.2),A.av,B.B(B.a([B.d(C.bEK(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.iP,A.i,0,l,l),A.av,m.aAT(3)],h),A.m,l,A.e,A.i,0,A.p)}},
adJ(d){return this.vR(d,!1)},
aff(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afh("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
cbL(d,e){return this.aff(d,null,e,null)},
aZ4(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.di(v),12)===0?12:A.o.F(B.di(v),12),t=B.b1(this.d.w).j(0.75),s=this.ayI("Roboto",15,t,1,A.cA),r=B.X(E.ao8,t,w,w,w,18),q=A.a.au(A.oA[B.bL(v)-1],0,3),p=A.a.aY(A.o.u(B.fS(v)),2,"0"),o=B.di(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ad,B.d(q+" "+B.bW(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fZ,w,w,w,1),B.X(d,t,w,w,w,19),A.ad,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
axp(){return this.aZ4(A.mR)},
b5L(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a1,w,w,w,this.afh("Roboto",this.afe(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aAX(d,e,f){return this.b5L(d,e,f,30)},
aCr(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bK
return new B.D(A.w5,B.d(v,w,e,A.a1,w,w,w,this.cbM("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
b8K(d){return this.aCr(d,3,22)},
cBz(d,e){return this.aCr(d,e,22)},
u2(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fU(r,A.A,s,s,A.ci,A.bY,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Bs(D.bGC,w,s)
if(v==="sepia")w=new B.Bs(D.bGB,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.at(B.X(A.yT,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c4(s,new B.o(s,s,s,s,s,new B.c_(A.A,0.95,A.x,s,0,B.a([A.L,A.YD.j(0.38)],x.O),s,s),A.n),A.bh))
return new B.a4(d,e,new B.an(A.a_,s,A.b3,A.t,v,s),s)},
qO(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.L(B.b1(j),A.r,3)
j=B.L(B.b1(j),A.r,1)
return B.p(k,B.p(k,l.u2(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ev,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.mb,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.ekP,14)],x.V)
v=l.u2(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eM(A.A,-0.035,B.p(k,B.x(B.a([v,B.E(B.at(B.d(u,k,2,A.a1,k,k,k,l.b0A(j.as,13.5,D.bh_,1.1,A.cD),A.K,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.i,0,A.p),A.f,k,k,new B.o(D.bkQ,k,k,k,w,k,A.n),k,e,k,k,D.bBg,k,k,d),k)
case 3:w=B.n(30)
j=B.L(B.b1(j.x),A.r,5)
return B.p(k,B.bx(B.n(25),l.u2(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.L(B.b1(j.x),A.r,6)
j=B.b1(j.f)
v=t-10
return new B.a4(d,e,B.at(B.p(k,B.hW(l.u2(v,v),A.ap),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.mb,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.ekv,10)],x.V)
return B.eM(A.A,0.025,new B.a4(d,e,new B.an(A.a_,k,A.ab,A.f,B.a([B.bT(0,B.p(k,l.u2(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.rJ,k,k,k),0,0,0),B.ap(k,B.eM(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ap(-10,B.eM(A.A,-0.6,B.p(k,k,A.f,A.bM.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b1(j.x)
return new B.a4(d,e,B.b4(B.nM(l.u2(d,e),A.ap,D.hpb),new C.bee(j,k),k,k,A.ax),k)
case 7:j=x.p
w=B.a([l.u2(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bf(u));++n){m=new B.aP(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bh(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cO(0,q,0,p,k,k,new B.ca(A.aL,A.qK,A.i,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.a_,k,A.b3,A.t,w,k),A.f,A.ei,k,k,k,e,k,k,D.bFQ,k,k,d)
case 8:w=d/2
v=B.xl(A.fE,new B.aP(w,w))
j=B.L(B.b1(j.x),A.r,5)
w-=5
return B.p(k,B.bx(B.xl(A.hH,new B.aP(w,w)),l.u2(d-10,e-10),A.ap),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.h_,22)],x.V)
return B.p(k,l.u2(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a4(d,e,B.nM(l.u2(d,e),A.ap,D.hwV),k)
case 0:j=B.L(B.b1(j.w),A.r,2.4)
return B.p(k,l.u2(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ev,k,k,d)}},
aQg(d,e){return this.d.e===D.SY?A.bK:this.bHJ(d,e)},
X6(d){return this.aQg(d,A.K)},
gaBI(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aBH(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.at(B.d("\u201c"+m+"\u201d",n,7,A.a1,n,n,n,o.b0B(v.Q,19,1.15,A.cD,A.U),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a1,n,n,n,o.Qo("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.av)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a1,n,n,n,o.afg(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jm(B.x(q,A.E,n,A.e,A.i,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bg,n,n,d)},
gck3(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaf(d,e,f,g){return B.cu(new C.cix(this,e,d,f,g))},
aae(d){return this.aaf(d,22,!0,18)},
Xj(d,e){return this.aaf(d,22,!0,e)},
aRi(d,e,f){return this.aaf(d,22,e,f)},
bJJ(d,e,f){return this.aaf(d,e,!0,f)},
bbI(d,e,f,g){return B.cu(new C.ciy(this,e,d,g,!0,f))},
ciR(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.adJ(824),A.aB,k.aWY(824),k.b8F(824),A.N,k.O4(),A.ae,B.at(k.qO(824,360),j,j,j),k.X6(824),A.ae,B.E(k.aae(3),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 1:w=x.p
return B.x(B.a([k.adJ(824),A.aQ,new B.a4(j,350,B.B(B.a([new B.a4(440,j,B.x(B.a([k.acy(440,A.bj,3,62,26),k.aCo(440,A.bj,2,20),A.b2,k.ash(B.b1(h.x),!1)],w),A.E,j,A.e,A.i,0,A.p),j),A.Ka,B.x(B.a([k.qO(362,310),k.X6(362)],w),A.m,j,A.e,A.i,0,A.p)],w),A.E,j,A.e,A.i,0,j,j),j),A.W,k.aAT(2),A.ae,B.E(k.aae(3),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 2:w=k.vR(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.c05(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cBo(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.m,j,A.e,A.i,0,A.p),A.f,v,j,j,j,j,j,j,A.C3,j,j,j)
u=B.a([B.at(k.qO(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.SY){h=A.w.j(0.65)
u.push(B.ap(0,B.p(j,B.d(s,j,2,A.a1,j,j,j,k.ayI(i,14,A.c,1.15,A.U),j,j,j),A.f,h,j,j,j,j,j,j,A.lG,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a_,j,A.ab,A.t,u,j),A.N,k.O4(),A.W,B.E(k.Xj(2,21),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 3:h=k.vR(824,!0)
w=k.qO(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b6,j,A.ab,A.t,B.a([w,B.ap(0,B.p(j,k.P8(780,A.bj,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a9(A.b0,A.b6,A.x,v,j,j),A.n),j,j,j,j,D.bE3,j,j,j),j,j,0,0,j,j)],u),j),k.b8G(824,A.bj),A.N,k.O4(),A.W,B.E(k.aae(3),1)],u),A.ak,j,A.e,A.i,0,A.p)
case 4:h=x.p
return B.x(B.a([k.adJ(824),A.aB,k.aWY(824),k.b8F(824),A.N,k.O4(),A.ae,B.E(k.bbI(3,300,B.x(B.a([k.qO(300,300),k.X6(300)],h),A.m,j,A.e,A.i,0,A.p),360),1)],h),A.ak,j,A.e,A.i,0,A.p)
case 5:w=k.vR(824,!0)
v=x.p
u=B.x(B.a([k.acy(440,A.bj,3,62,26),k.aCo(440,A.bj,2,20),A.b2,k.asg(!1)],v),A.E,j,A.e,A.i,0,A.p)
return B.x(B.a([w,A.bx,new B.a4(j,400,B.B(B.a([new B.a4(440,j,u,j),A.aSL,new B.D(A.i7,k.qO(364,h.e===D.SY?400:330),j)],v),A.E,j,A.e,A.i,0,j,j),j),A.aB,B.E(k.Xj(2,21),1)],v),A.ak,j,A.e,A.i,0,A.p)
case 6:return B.x(B.a([k.adJ(824),A.ae,k.c04(824,2,70),k.cBm(824,21),A.N,k.O4(),A.ae,B.E(k.bbI(3,340,B.at(k.qO(340,340),j,j,j),350),1)],x.p),A.ak,j,A.e,A.i,0,A.p)
case 7:w=k.vR(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bEK(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Qo(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bg,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b0B(h.Q,24,1.15,A.cD,A.U),j,j,j))
v.push(A.b2)
if(k.gaBI())v.push(k.aBH(230,250))
return B.x(B.a([w,A.aB,B.E(B.B(B.a([new B.a4(230,j,B.x(v,A.ak,j,A.e,A.i,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.akU,j,j,j,1.2),new B.a4(570,j,B.x(B.a([k.acy(570,A.bj,3,62,28),k.cBn(570,A.bj,20),A.N,k.asg(!1),A.N,B.at(k.qO(570,330),j,j,j),k.X6(570),A.W,B.E(k.aRi(2,!1,17),1)],t),A.ak,j,A.e,A.i,0,A.p),j)],t),A.E,j,A.e,A.i,0,j,j),1)],t),A.ak,j,A.e,A.i,0,A.p)
case 8:w=k.vR(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Qo(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.p(j,B.x(B.a([t,A.am,k.P8(788,A.bj,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.i,0,A.p),A.f,u,j,j,j,j,j,j,D.bCl,j,j,j),k.b8G(824,A.bj),A.W,B.at(k.qO(824,310),j,j,j),k.X6(824),A.N,k.O4(),A.W,B.E(k.aae(3),1)],s),A.ak,j,A.e,A.i,0,A.p)
case 10:w=x.p
return B.x(B.a([k.vR(824,!0),A.aQ,new B.an(A.a_,j,A.ab,A.t,B.a([k.qO(824,430),B.ap(18,k.cbL(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.aAX(824,3,66),k.b8K(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.axp(),A.aB,B.E(k.Xj(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.vR(824,!0),A.bx,new B.a4(j,500,B.B(B.a([new B.a4(410,j,B.x(B.a([k.aff(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aQ,k.b5L(410,4,58,28),k.aCr(410,6,20),A.b2],w),A.E,j,A.e,A.i,0,A.p),j),V.aSM,k.qO(390,500)],w),A.E,j,A.e,A.i,0,j,j),j),A.aB,k.axp(),A.aQ,B.E(k.Xj(2,18),1)],w),A.ak,j,A.e,A.i,0,A.p)
case 12:w=k.vR(824,!0)
v=k.qO(824,420)
u=B.hMD(-0.25)
t=B.b1(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.I,10)],x.V)
r=x.p
return B.x(B.a([w,A.aQ,new B.an(A.a_,j,A.ab,A.t,B.a([v,B.ap(22,B.fA(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cbO(i,30,A.c,1,A.cD,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bEj,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.aAX(824,3,62),k.b8K(824),A.ae,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.aZ4(A.lL),A.aB,B.E(k.Xj(2,18),1)],r),A.ak,j,A.e,A.i,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vR(824,!0)
u=h.w
t=x.p
w=B.a([k.qO(824,380),B.ap(j,k.aff(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aAX(824,2,60)
r=k.cBz(824,2)
p=k.axp()
o=B.E(k.aRi(2,!1,18),1)
n=B.L(B.b1(u).j(0.18),A.r,1)
m=B.n(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aQ,new B.an(A.a_,j,A.ab,A.t,w,j),A.aQ,s,r,A.W,p,A.aB,o,A.ae,B.p(j,B.B(B.a([B.bx(B.n(14),k.u2(150,104),A.ap),A.oM,B.E(B.x(B.a([k.aff("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.N,B.d(q,j,2,A.a1,j,j,j,k.ayH(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.P,0,A.p),1),B.X(A.eE,B.b1(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bg,j,j,j)],t),A.ak,j,A.e,A.i,0,A.p)
case 9:return B.x(B.a([k.vR(824,!0),A.bx,k.acy(824,A.bj,3,62,30),k.aCo(824,A.bj,2,22),A.W,k.asg(!1),A.W,B.at(k.qO(824,330),j,j,j),k.aQg(824,A.bj),A.aQ,B.E(k.bJJ(2,40,21),1)],x.p),A.ak,j,A.e,A.i,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bT(0,B.c4(s,new B.o(s,s,s,s,s,new B.a9(A.az,A.aE,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bh),0,0,0)],o)
if(q.ax)n.push(B.bT(0,B.b4(s,s,s,new C.baK(B.b1(q.w),s),A.ax),0,0,0))
w=q.w
n.push(new B.D(D.bEQ,B.x(B.a([B.E(t.ciR(),1),A.N,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fG,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b0z(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Qo(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.iP,A.i,0,s,s)],o),A.ak,s,A.e,A.i,0,A.p),s))
v=B.b1(w)
n.push(B.bT(0,B.e_(B.b4(s,s,s,new C.btF(v.j(q.ch?0.07:0.06),s),A.ax),!0,s),0,0,0))
p=B.b1(p).j(0.75)
v=B.L(B.b1(w).j(0.5),A.r,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hW(B.fU(q,A.A,s,s,A.ci,A.bY,!1,30,!1,s,30),A.ap))
else o.push(B.X(A.mR,B.b1(w),s,s,s,28))
o.push(A.ad)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.ayJ(r,15,1,1.6,A.u),s,s,s))
n.push(B.ap(52,B.e_(B.db(B.p(s,B.B(o,A.m,s,A.e,A.P,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bFZ,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a4(900,1260,B.jm(new B.an(A.a_,s,A.ab,A.t,n,s),A.t,s),s)}}
C.bef.prototype={
jr(d){return C.hqZ(d)},
k8(d){return!1}}
C.bee.prototype={
a4(d,e){var w,v=C.hqZ(e)
$.S()
w=B.J()
w.r=this.b.gp(0)
w.b=A.a9
w.c=6
return d.aK(v,w)},
av(d){return!d.b.A(0,this.b)}}
C.bwa.prototype={
jr(d){var w,v,u,t,s,r,q,p,o=new B.e6()
o.cZ(3)
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
k8(d){return!1}}
C.baK.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.e6()
k.cZ(7)
$.S()
w=B.J()
for(v=this.b,u=e.a,t=e.b,s=d.a,r=0;r<700;++r){w.r=v.j(0.03+k.ag()*0.07).gp(0)
q=k.ag()
p=k.ag()
o=k.ag()
n=w.G()
s.drawCircle(q*u,p*t,0.4+o*1.4,n)
n.delete()}for(v=x.O,r=0;r<5;++r){q=k.ag()*u
p=k.ag()*t
m=50+k.ag()*90
w.sam(new B.c_(A.A,0.5,A.x,l,0,B.a([A.Y4.j(0.13),A.L],v),l,l).aA(0,B.bY(new B.u(q,p),m)))
n=w.G()
s.drawCircle(q,p,m,n)
n.delete()}w.sam(l)},
av(d){return!1}}
C.btF.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fz(u,u,u,u,B.cT(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.bX,u,A.dA,A.bV)
s.eg()
w=d.a
J.bl(w.save())
w.translate(t/2,e.b*0.52)
d.io(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gba(t)/2))
w.restore()},
av(d){return!d.b.A(0,this.b)}}
C.Wt.prototype={
R(){return new C.aFx()}}
C.aFx.prototype={
Z(){var w=this
w.a3()
B.fFE(w.a.c,null).bJ(new C.esi(),x.g7).bJ(new C.esj(w),x.a)
w.a.toString},
gaP4(){var w=D.ayK[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gayK(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaP4()
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
a_I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a_I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.es5(r))
t=4
q=r.gayK()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.p7()
m=B.zd(n,null)
i=B.J()
i.Q=A.h9
m.oF(g,q,new B.a3(0,0,0+p,0+o),i)
w=7
return B.b(n.nk().xh(J.hgo(p),J.hgo(o)),$async$a_I)
case 7:l=e
w=8
return B.b(l.hA(A.hb),$async$a_I)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eT(J.vR(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.es6(r))
r.c.L(x.q).f.U(D.ffz)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_I,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.lh,s,s,s,new C.esc(d),s,s,s,s,s,s),p=x.p
q=B.eI(B.a([B.bM(!1,D.fUu,s,s,!0,s,s,s,t.y||r==null?s:t.gcbP(),s,s)],p),s,s,!0,!0,A.BJ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fYw,s,s,s,1,s,!0)
if(r==null)p=A.lZ
else{w=B.E(new B.D(A.bQ,B.at(new B.fK(t.gaP4(),B.cu(new C.esd(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iJ,B.jw(s,s,s,new B.y(D.ayK[u].a,s,A.aap,s,s,s,s,s,s,s,s,s),s,new C.ese(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bn(!0,B.x(B.a([new B.a4(s,40,B.cl(v,s,s,s,s,s,A.aL,!1),s),B.B(B.a([D.bYc,B.E(B.kS(s,s,s,6,1,new C.esf(t),t.f),1),D.bXO],p),A.m,s,A.e,A.i,0,s,s),D.fRK,A.am,B.bM(!1,D.fRs,s,s,!0,s,s,s,new C.esg(t,d),s,s)],p),A.m,s,A.e,A.P,0,A.p),!0,!1,A.af,!0,!1),A.f,D.YS,s,s,s,s,s,s,D.bBH,s,s,s)],p),A.m,s,A.e,A.i,0,A.p)}return B.c6(q,A.BJ,p,s,!1,!1,s,s)}}
C.bdM.prototype={
a4(d,e){var w
$.S()
w=B.J()
w.Q=A.ci
return d.oF(this.b,this.c,new B.a3(0,0,0+e.a,0+e.b),w)},
av(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a0E.prototype={
R(){var w=$.aw(),v=x.A
return new C.aGW(new B.au(A.at,w),new B.au(new B.bb("NGMY",A.b4,A.aO),w),new B.cx(null,v),new B.cx(null,v),A.d.gI(D.a5K),"quote"+1000*Date.now(),B.a([],x.t),B.aV(x.S),A.K)}}
C.oQ.prototype={}
C.aGW.prototype={
gaX5(){var w,v,u=this
if(u.p1)w=new B.w5(1,u.p2,0.9,u.p3).jY().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.E(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
Z(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.f18(w))},
t(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a1()},
Zj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rg().jl(0,"assets/images/ngmy_logo.png"),$async$Zj)
case 7:q=e
p=J.eT(J.vR(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bFv(new B.q4(p,1),o),$async$Zj)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f00(r,p))
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
return B.i($async$Zj,v)},
Qr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l6(92,1800,A.eL),$async$Qr)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$Qr)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bFv(new B.q4(p,1),n),$async$Qr)
case 9:if(r.c==null){w=1
break}r.m(new C.f0o(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ab(l)
n=r.c
if(n!=null)n.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Qr,v)},
b56(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aC=w.aM=w.aH=w.aB=w.a_=w.b8=w.bk=w.y2=0
w.b5=null
w.b4=0.25
w.be=null
w.bM=0.5
w.aL=1
w.c8=w.bG=w.bj=0
w.cL=w.c5=!1},
aYP(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bC9(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dqj)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bC9(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bC9(C.hbd(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bC9(C.hbd(1-a0*0.5,n,n,n),w)}return a1?C.bC9(C.hbd(-1,255,255,255),w):w},
aCx(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).lh(0,this.d.a.a),t=B.C(u,B.a6(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xg(u,v,w)
this.dx.pt(new C.f0y(t),!0)
return t},
b7E(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aCx()
w=C.ijK(e.d.a.a,e.db)
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
return C.igb(d,k,v,a0,j,e.gaX5(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
czc(){return this.b7E(null)},
Dw(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$Dw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmN(),$async$Dw)
case 3:w=4
return B.b(B.bP(A.eR,null,x.H),$async$Dw)
case 4:w=5
return B.b($.aW.gmN(),$async$Dw)
case 5:s=$.aW.al$.x.h(0,t.r)
r=s==null?null:s.gbd()
if(!(r instanceof B.qe)){u=null
w=1
break}w=7
return B.b(r.m9(1080/r.gY(0).a),$async$Dw)
case 7:w=6
return B.b(e.hA(A.hb),$async$Dw)
case 6:q=e
u=q==null?null:J.eT(A.dK.gaS(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$Dw,v)},
ab7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$ab7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f_K(q))
t=4
w=7
return B.b(q.Dw(),$async$ab7)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cK.gcu().aP(p)
n=C.C8(null,null,null,null,D.oG,6,!1,null,null,null,null,null,C.cG(),null,!1,null,"NGMY Quote",null,null,B.a([q.b7E(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ab(j)
l=q.c
if(l!=null)l.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f_L(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ab7,v)},
AL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$AL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f_I(q))
t=4
w=7
return B.b($.aW.gmN(),$async$AL)
case 7:w=8
return B.b(B.bP(A.nr,null,x.H),$async$AL)
case 8:w=9
return B.b($.aW.gmN(),$async$AL)
case 9:k=$.aW.al$.x.h(0,q.f)
p=k==null?null:k.gbd()
if(!(p instanceof B.qe))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.m9(1080/p.gY(0).a),$async$AL)
case 10:o=e
w=11
return B.b(o.hA(A.hb),$async$AL)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A8.ahb(J.eT(A.dK.gaS(n)),"ngmy_quote.png","image/png"),$async$AL)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.U(B.b3(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ab(i)
k=q.c
if(k!=null)k.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f_J(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AL,v)},
clZ(){var w=this.p4
w.toString
return B.cu(new C.f0h(this,w))},
b0I(d,e){var w=null
return B.bs(w,w,w,w,w,D.fqo,w,w,!0,new B.b6(4,B.n(16),Q.vJ),w,w,w,w,w,D.tZ,!0,w,w,w,w,new B.b6(4,B.n(16),D.b3Y),w,w,w,w,w,w,w,w,Ad.Ez,e,w,w,w,w,w,w,w,D.fvY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yd(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aVs,w,w,w))
return new B.D(H.akK,B.B(u,A.m,w,A.e,A.i,0,w,w),w)},
b0H(d,e){var w=null,v=B.n(18),u=B.L(A.bz,A.r,1)
return B.p(w,B.aI(!1,A.a2,!0,w,d,A.f,w,0,w,w,w,w,w,A.k1),A.f,w,w,new B.o(D.tZ,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vX(d){return this.b0H(d,A.bD)},
oq(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.uQ:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.L(f?A.L:A.bz,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jS,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jS,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aA(r,B.cY(r,B.B(s,A.m,r,A.e,A.P,0,r,r),r,r,A.b5,new B.o(w,r,u,v,r,p,A.n),A.h5,r,r,r,r,A.GC,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a3)},
aha(d,e,f){return this.oq(d,null,e,f)},
ayO(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eG:A.bz,s=x.p
v=B.a([B.cY(w,d,w,w,A.b5,new B.o(u,w,B.L(t,A.r,g?2:1),v,w,w,A.n),A.h5,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aC
A.d.v(v,B.a([A.av,B.d(f,w,1,A.a1,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aA(w,new B.a4(j,w,B.x(v,A.m,w,A.e,A.P,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a3)},
b0L(d,e,f,g,h,i){return this.ayO(d,e,f,g,h,5,i)},
ky(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aUf,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aA(u,D.ep7,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f0u(this,h,i),u,u,u,u,u,u,!1,A.a3))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aUu,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a0m,u,u,u))
s=B.B(s,A.m,u,A.e,A.i,0,u,u)
w=this.c
w.toString
w=B.awz(w).cNQ(A.b7,A.bz,A.b7.j(0.2),A.c,D.f5A,4)
return new B.D(A.yn,B.x(B.a([s,B.aaM(B.kS(u,u,u,g,f,new C.f0v(this,h),A.k.E(e,f,g)),w)],t),A.m,u,A.e,A.i,0,A.p),u)},
ajb(d,e,f,g,h,i){return this.ky(d,e,f,g,h,null,i)},
ajB(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b1(u)
r=d==u
q=r?A.c:A.aX
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bR5:o
n.push(B.aA(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bG(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f0x(this,e,u),o,o,o,o,o,o,!1,A.a3))}return B.bX(A.bG,n,A.br,o,10,10)},
bNS(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a5K
else{v=x.a8
w=B.C(new B.Y(D.a5K,new C.f_A(o),v),v.k("M.E"))}v=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.d,n,n,n,n,n,2,o.b0I("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f_B(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.aaI,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.Y,!1,n,!0,A.t,n,B.aN(),o.e,n,n,n,n,n,2,o.b0I("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.aj,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f_C(o),n,n,n,!1,n,n,!1,n,!0,n,A.aa,n,n,n,n,n,n,n,n,n,n,n,A.df,!0,A.a4,n,A.an,n,n,n,n)
t=o.yd("DESIGNS",A.uA)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d_v[q]
r.push(new B.D(A.iJ,o.aha(p,o.x===p,new C.f_D(o,p)),n))}return B.x(B.a([v,A.W,u,t,B.ci(B.B(r,A.m,n,A.e,A.i,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.ae,new B.a4(n,118,B.hS(n,new C.f_E(o,w),w.length,n,n,A.aL,new C.f_F(),!1),n),A.N,o.b0H(B.x(B.a([B.iP(A.b7,n,n,A.af,!0,new C.f_G(o),n,D.fIA,n,D.fEL,o.k3),B.iP(A.b7,n,n,A.af,!0,new C.f_H(o),n,n,n,D.fBW,o.k2)],s),A.m,n,A.e,A.i,0,A.p),A.alk)],s),A.E,n,A.e,A.i,0,A.p)},
cI2(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aCx()
if(a7.length===0)return a5.vX(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.Ky,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.K)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.au(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gak(v)+1
u=a5.dx
m=B.C(u,B.a6(u).k("cs.E"))
A.d.fh(m)
l=m.length!==0&&A.d.cJ(m,new C.f0Y(a5,m))?a5.db[A.d.gI(m)]:a6
k=new C.f14(a5)
j=new C.f16()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.Ky,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.eG:A.bz
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.au(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a7
o.push(B.aA(a6,B.p(a6,new B.y(e,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bG(d,d,d,d),new B.bh(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.O6,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f0Z(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a3))}o=a5.vX(B.bX(A.bG,o,A.vC,a6,6,6))
i=B.a([a5.oq("All words",K.apI,!1,new C.f1_(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aha("Sentence "+a3,!1,new C.f10(a5,a7,v,a2)))
a2=a3}}i.push(a5.aha("Clear picks",!1,new C.f11(a5)))
i=B.bX(A.bG,i,A.br,a6,8,8)
g=a5.yd("SIZE OF THE PICKED WORDS",D.ap8)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dwq[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f12(e,k)
f.push(a5.aha(a0.b,l===a4,e))}return B.x(B.a([q,A.W,o,A.W,i,g,B.bX(A.bG,f,A.br,a6,8,8),A.W,a5.oq("Make every word normal",A.k_,!1,new C.f13(a5))],p),A.E,a6,A.e,A.i,0,A.p)},
cD4(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bHa,B.d(A.d.fG(D.aAy,new C.f0H(q)).b,p,p,p,p,p,p,D.foM,p,p,p)],o),A.m,p,A.e,A.i,0,p,p),m=B.cu(new C.f0I(q)),l=q.yd("HIGHLIGHT BEHIND THE WORDS",A.a2j),k=q.p1?-1:q.k4
k=q.ajB(k,new C.f0J(q),D.daL)
w=q.p1
v=w?A.c:A.aX
n=B.a([n,A.W,m,l,B.bX(A.bG,B.a([k,B.aA(p,B.p(p,D.bU4,A.f,p,p,new B.o(p,p,B.L(v,A.r,w?3:1),p,p,D.fib,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f0M(q),p,p,p,p,p,p,!1,A.a3)],o),A.vC,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.Ky,p,p,p)],o)
if(q.gaX5()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajb("Colour",l,0,360,new C.f0N(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ajb("Shade",k,0.15,0.9,new C.f0O(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ky("Strength",l,0.15,1,new C.f0P(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.W,q.vX(B.x(m,A.m,p,A.e,A.i,0,A.p))],o))}n.push(q.yd("LOOK",A.wD))
m=B.a([q.oq("Bold",I.ap6,q.fy,new C.f0Q(q)),q.oq("Italic",I.ap7,q.go,new C.f0R(q))],o)
for(u=0;u<3;++u){l={}
k=D.d0I[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.uQ:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bz,1,A.r,-1)
m.push(B.aA(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bG(r,r,r,r),new B.bh(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f0S(l,q),p,p,p,p,p,p,!1,A.a3))}n.push(B.bX(A.bG,m,A.vC,p,8,8))
n.push(q.yd("COLOUR",A.md))
n.push(q.ajB(q.fx,new C.f0T(q),D.dmB))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.Ky,p,p,p))
n.push(q.yd("SIZE AND PLACE",A.Hy))
m=q.fr
m=q.ky("Text size",m,0.5,1.6,new C.f0K(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vX(B.x(B.a([m,q.ky("Up / down",l,0.12,0.5,new C.f0L(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.i,0,A.p)))
return B.x(n,A.E,p,A.e,A.i,0,A.p)},
cm_(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.L(A.b7.j(0.6),A.r,1.6)
u=B.a([A.b7.j(0.18),A.bE.j(0.12)],x.O)
return B.aA(p,B.p(p,B.x(B.a([B.p(p,D.bZG,A.f,p,p,D.b6V,p,62,p,p,p,p,p,62),A.aB,D.fG1,A.am,D.fKP],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(D.tZ,p,v,w,p,new B.a9(A.a5,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.bCV,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gb0K(),p,p,p,p,p,p,!1,A.a3)}w=x.p
v=B.B(B.a([B.bx(B.n(12),new B.a4(46,62,B.fU(o,A.A,120,p,A.ci,A.bY,!1,p,!1,p,p),p),A.ap),A.bd,B.E(B.x(B.a([D.fFy,A.N,B.bX(A.bG,B.a([q.oq("Change",A.jH,!1,q.gb0K()),q.oq("Remove",A.eb,!1,new C.f0l(q))],w),A.br,p,6,6)],w),A.E,p,A.e,A.i,0,A.p),1)],w),A.m,p,A.e,A.i,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.diO[t]
u.push(q.oq(s.b,s.a,q.at===t,new C.f0m(q,t)))}u=B.bX(A.bG,u,A.br,p,8,8)
r=q.at
A:{if(0===r){s=q.c49(o)
break A}if(1===r){s=q.c33()
break A}if(2===r){s=q.bJI()
break A}if(3===r){s=q.bQ9()
break A}s=q.bLO()
break A}return B.x(B.a([v,A.ae,u,A.aB,s,A.W,new B.bN(A.a5,p,p,q.oq("Reset the whole picture",A.k_,!1,new C.f0n(q)),p)],w),A.E,p,A.e,A.i,0,A.p)},
c49(d){var w=this,v=x.p
return B.x(B.a([B.bX(A.bG,B.a([w.oq("Auto enhance",E.a1W,!1,new C.f0d(w)),w.oq("Make words easy to read",A.pm,!1,new C.f0e(w))],v),A.br,null,8,8),A.aB,B.cu(new C.f0f(w,d))],v),A.E,null,A.e,A.i,0,A.p)},
c33(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ky("Exposure",n,-1.5,1.5,new C.f_S(o),0,A.k.ac(n,1))
w=o.RG
w=o.ky("Brightness",w,-0.5,0.5,new C.f_T(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ky("Contrast",v,0.4,2,new C.f_U(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ky("Fade",u,0,1,new C.f_V(o),0,""+A.k.V(u*100))
t=o.aH
t=o.ky("Spotlight",t,0,1,new C.f_W(o),0,""+A.k.V(t*100))
s=o.a_
s=o.ky("Darken",s,0,0.85,new C.f_X(o),0,""+A.k.V(s*100))
r=o.b8
r=o.ky("Vignette",r,0,0.9,new C.f_Y(o),0,""+A.k.V(r*100))
q=o.aC
q=o.ky("Shade behind words",q,0,0.85,new C.f_Z(o),0,""+A.k.V(q*100))
p=o.aM
return o.vX(B.x(B.a([n,w,v,u,t,s,r,q,o.ky("Shade top & bottom",p,0,0.85,new C.f0_(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.i,0,A.p))},
bJI(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ky("Colour strength",q,0,2.2,new C.f_d(s),1,""+A.k.V(q*100))
w=s.to
w=s.ky("Warmth",w,-1,1,new C.f_e(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ky("Tint",v,-1,1,new C.f_f(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vX(B.x(B.a([q,w,v,s.ky("Shift colours",u,-180,180,new C.f_g(s),0,""+A.k.V(u)+"\xb0"),new B.bN(A.a5,r,r,s.oq("Negative",D.bP4,s.y1,new C.f_h(s)),r)],t),A.m,r,A.e,A.i,0,A.p))
v=s.yd("COLOUR WASH",A.P2)
w=s.b5
q=B.a([null],x.Z)
A.d.v(q,D.az8)
t=B.a([u,v,s.ajB(w,new C.f_i(s),q),A.N],t)
if(s.b5!=null){q=s.b4
t.push(s.vX(s.ajb("Wash strength",q,0,0.9,new C.f_j(s),""+A.k.V(q*100))))}return B.x(t,A.E,r,A.e,A.i,0,A.p)},
bQ9(){var w,v,u,t,s,r=this,q=r.y2
q=r.ky("Blur",q,0,24,new C.f_M(r),0,A.o.u(A.k.V(q)))
w=r.bk
w=r.ky("Soft focus",w,0,1,new C.f_N(r),0,""+A.k.V(w*100))
v=r.aB
u=x.p
v=r.vX(B.x(B.a([q,w,r.ky("Film grain",v,0,1,new C.f_O(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.i,0,A.p))
w=r.yd("LIGHT LEAK",D.bON)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.d2(D.az8,0,B.dz(8,"count",s),s))
u=B.a([v,w,r.ajB(q,new C.f_P(r),t),A.N],u)
if(r.be!=null){q=r.bM
u.push(r.vX(r.ajb("Leak strength",q,0,1,new C.f_Q(r),""+A.k.V(q*100))))}return B.x(u,A.E,null,A.e,A.i,0,A.p)},
bLO(){var w,v,u,t,s=this,r=s.aL
r=s.ky("Zoom",r,1,3,new C.f_n(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.ky("Left / right",w,-1,1,new C.f_o(s),0,""+A.k.V(w*100))
v=s.bG
v=s.ky("Up / down",v,-1,1,new C.f_p(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.vX(B.x(B.a([r,w,v,s.ky("Turn",u,-180,180,new C.f_q(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.i,0,A.p)),A.W,B.bX(A.bG,B.a([s.oq("Turn 90\xb0",H.aqa,!1,new C.f_r(s)),s.oq("Flip sideways",A.Cx,s.c5,new C.f_s(s)),s.oq("Flip upside down",A.Cx,s.cL,new C.f_t(s))],t),A.br,null,8,8)],t),A.E,null,A.e,A.i,0,A.p)},
c6R(){var w=null,v=B.n(22),u=B.L(A.bz,A.r,1)
return B.p(w,B.x(B.a([D.f5M,A.W,D.fHB,A.aB,B.aA(w,B.p(A.A,D.f6_,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.uQ,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f0g(this),w,w,w,w,w,w,!1,A.a3)],x.p),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(D.tZ,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
c3X(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f08(p),m=x.p,l=B.B(B.a([D.bHg,p.oq("Reset",A.k_,!1,new C.f04(p))],m),A.m,o,A.e,A.i,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.Ky,o,o,o),j=p.yd("SHAPE",A.aq7),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.D5[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b0L(n.$2(t,p.cy),62,u.b,s===t,new C.f05(v,p),62))}}i=B.bX(A.bG,i,A.br,o,8,8)
v=p.yd("RING",A.pf)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.CZ[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b0L(n.$2(p.cx,t),62,r.b,q===t,new C.f06(s,p),62))}u=B.bX(A.bG,u,A.br,o,8,8)
s=p.CW
return B.x(B.a([l,A.av,k,j,i,v,u,A.ae,p.vX(p.ky("Size",s,0.12,0.4,new C.f07(p),0.22,""+A.k.V(s*100)))],m),A.E,o,A.e,A.i,0,A.p)},
b3I(d){return new B.a4(null,d,new B.fK(0.5625,B.cu(new C.f0r(this)),null),null)},
cCj(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.L(A.bz,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.uQ:q
t=new B.aP(14,14)
s=D.dl_[w]
r=v?A.c:A.aC
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aC
l.push(new B.by(1,A.bb,B.aA(A.c6,B.cY(q,B.x(B.a([r,A.cS,new B.qH(A.e3,A.A,A.f,new B.y(s.b,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.P,0,A.p),q,q,A.b5,new B.o(q,q,q,new B.bh(t,t,t,t),q,u,A.n),D.byq,q,q,q,q,A.hA,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f0A(this,w),q,q,q,q,q,q,!1,A.a3),q))}return B.p(q,B.B(l,A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bAz,A.mb,q,q,q)},
aRP(){var w,v,u=this,t=null,s=u.cCj(),r=u.as
A:{if(0===r){w=u.bNS()
break A}if(1===r){w=u.cI2()
break A}if(2===r){w=u.cD4()
break A}if(3===r){w=u.cm_()
break A}if(4===r){w=u.c3X()
break A}w=u.c6R()
break A}v=x.p
return B.bx(A.tE,B.ec(B.x(B.a([s,B.E(B.cl(B.a([w],v),t,t,D.bBI,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.i,0,A.p),D.YS,!0),A.ap)},
aO_(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gccf(),p=B.n(16)
q=B.E(B.aA(r,B.p(r,D.f6a,A.f,r,r,new B.o(A.c.j(0.08),r,B.L(A.aX,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a3),1)
p=s.Q?r:s.gbPI()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bE.j(0.35),A.cy,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.fbM)
else t.push(D.bTa)
t.push(A.ad)
t.push(D.bJz)
return B.p(r,B.B(B.a([q,A.as,B.E(B.aA(r,B.p(r,B.B(t,A.m,r,A.b9,A.i,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.uQ,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a3),1)],u),A.m,r,A.e,A.i,0,r,r),A.f,r,r,D.b61,r,r,r,r,G.ala,r,r,r)},
b0J(){var w=null
return new B.D(U.a0h,B.B(B.a([B.aH(w,w,w,w,A.mT,w,w,w,new C.f_R(this),w,w,w,w,w,w),D.fXp,A.b2,D.c1_],x.p),A.m,w,A.e,A.i,0,w,w),w)},
B(d){var w=null
return B.c6(w,A.BJ,B.bn(!0,B.cu(new C.f17(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.bhp.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.e6()
m.cZ(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.S()
t=B.J()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.J()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.ag()*w
o=m.ag()*v
n=((q&1)===0?t:r).G()
s.drawRect(B.bH(new B.a3(p,o,p+1.1,o+1.1)),n)
n.delete()}},
av(d){return d.b!==this.b}}
C.rR.prototype={
a6(){return"NgmyQuoteDeco."+this.b}}
C.mm.prototype={}
C.zY.prototype={
ah(){var w=this
return B.H(["at",w.a.a9().ae(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.o1.prototype={}
C.wo.prototype={
a6(){return"NgmySlidesAiExtra."+this.b}}
C.a8L.prototype={}
C.asn.prototype={}
C.a1a.prototype={
R(){return new C.aIT(new B.au(A.at,$.aw()),B.k6(!0,null,!0,!0,null,null,!1),D.dML,B.a([],x.s),B.eD([D.Jd],x.Q))}}
C.aIT.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.t()
this.a1()},
a14(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a14=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().Co(90,700,700,A.eL),$async$a14)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$a14)
case 8:p=e
if(r.c!=null)r.m(new C.f7z(r,p,q))
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
return B.i($async$a14,v)},
a17(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a17=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hY().aJ7(78,n,1100,1100),$async$a17)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bp(r.y,!0,x.N)
n=J.aX(q)
case 8:if(!n.C()){w=9
break}o=n.gS(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fn(),$async$a17)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c9(l,".png"))k="image/png"
else k=A.a.c9(l,".webp")?"image/webp":"image/jpeg"
J.cc(p,"data:"+k+";base64,"+A.cK.gcu().aP(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.f7A(r,p))
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
return B.i($async$a17,v)},
b5K(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fU(A.cF.aP(A.d.gak(d.split(","))),A.A,u,u,A.ci,A.bY,!0,u,!1,u,u)
return w}catch(v){}return D.bwA},
c43(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cyf(C.fMD(w,this.b5K(d),f),g)},
adt(d,e,f,g,h){var w=null,v=new C.f7x(f,e),u=new C.f7y(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.L(p?A.bz:A.b7.j(0.6),A.r,1)
if(p)p=new B.a4(34,30,new B.an(A.a_,w,A.ab,A.f,B.a([B.at(B.X(f?A.CF:A.OS,A.bU,w,w,w,26),w,w,w),D.evm],x.p),w),w)
else p=this.c43(g,v.$1(h),u.$1(h),34)
return B.aI(!1,A.a2,!0,s,B.aO(!1,r,!0,B.p(w,B.B(B.a([B.E(B.at(p,w,w,w),1),D.bSS],x.p),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mM,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.f7w(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
aYV(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bx(B.n(8),B.fU(A.cF.aP(A.d.gak(h.split(","))),A.A,p,p,A.ci,A.bY,!1,30,!1,p,30),A.ap)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.L(n?A.bz:A.bf.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ep,p,p,p,20):q
n=B.a([n,A.ad,B.E(B.d(e,p,1,A.a1,p,p,p,A.KE,p,p,p),1)],x.p)
if(f!=null)n.push(B.aA(p,H.PD,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a3))
return B.aI(!1,A.a2,!0,u,B.aO(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.i,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.km,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
a9z(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a9z=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fQ4(),$async$a9z)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.f7f(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ab(n)
if(r.c!=null)r.m(new C.f7g(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9z,v)},
afp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afp=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.f7i(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.f7j(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.f7k(r))
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
return B.b(C.fLl(q,r.cx,j,new C.b2X(r.z,r.Q,r.as,r.at),new C.f7l(r),i,m,p,k),$async$afp)
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
if(r.c!=null)r.m(new C.f7m(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afp,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aG(d,A.eN,g).w
g=B.aG(d,A.bZ,g).w
w=B.at(B.p(h,h,A.f,h,h,new B.o(A.aX,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.at(B.aA(h,B.p(h,D.bWa,A.f,h,h,new B.o(h,h,B.L(A.c.j(0.35),A.r,2),h,B.a([new B.ac(2,A.G,A.bf.j(0.5),A.I,24)],v),D.c58,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f7N(i),h,h,h,h,h,h,!1,A.a3),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,H.PD,h,h,h,i.ax?h:new C.f7O(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbED()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.I,10)],v)
s.push(B.hf(B.aI(!1,A.a2,!0,h,B.aO(!1,h,!0,B.p(h,B.X(i.e==null?A.wr:A.hB,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.wI,A.a6),h,40,h,h,h,h,h,40),A.cO,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cO,h,h,A.ai),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.P,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.n(16),D.b3v),h,h,h,h,h,h,h,h,Y.Er,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iJ,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.aj,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,h,D.aUT,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.f7P(i)
s=i.aYV(A.lf,q,r,i.gcms(),s)
r=i.z
r=B.E(i.adt(new C.f7R(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.B(B.a([r,A.bm,B.E(i.adt(new C.f7S(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gI(s)
p=i.y.length===0?h:new C.f7T(i)
s=i.aYV(A.uv,r,p,i.gcmA(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gI(o)
p=B.E(i.adt(new C.f7U(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gI(n)
o=B.a([w,A.aB,D.fM8,A.av,D.fP2,A.bx,u,A.N,D.fNq,A.aB,v,A.bx,B.B(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.B(B.a([p,A.bm,B.E(i.adt(new C.f7V(i),r,!0,n,o),1)],t),A.m,h,A.e,A.i,0,h,h)],t),A.m,h,A.e,A.i,0,A.p),1)],t),A.E,h,A.e,A.i,0,h,h),A.am,D.fQU],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.L(D.bo8,A.r,1)
w=C.ahI(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.W,new B.bN(A.a5,h,h,B.p(h,B.B(B.a([D.bXh,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fuA,h,h,h),B.aO(!1,h,!0,D.epn,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.f7W(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.P,0,h,h),A.f,h,h,new B.o(D.bg6,h,u,v,h,h,A.n),h,h,h,h,D.bAe,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fCF)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dcY[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aC:A.bz,1,A.r,-1)
u=u?A.u:A.U
w.push(new B.by(1,A.bb,new B.D(A.jC,B.aA(h,B.cY(A.A,new B.y(""+l,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.b5,new B.o(v,h,new B.bG(k,k,k,k),h,h,h,A.a6),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.f7X(i,l),h,h,h,h,h,h,!1,A.a3),h),h))}o.push(B.B(w,A.m,h,A.e,A.i,0,h,h))
o.push(A.bx)
o.push(D.fVD)
o.push(A.N)
o.push(B.cu(new C.f7Y(i)))
o.push(A.bx)
o.push(D.fKb)
o.push(A.N)
w=B.a([i.b8D("auto","Let AI choose",A.e5,A.RI)],t)
for(v=x.O,m=0;m<11;++m){j=D.wN[m]
u=j.d
w.push(i.b8D(j.a,j.b,j.c,B.a([B.b1(A.d.gI(u).a),B.b1(A.d.gI(u).b)],v)))}o.push(B.bX(A.bG,w,A.br,h,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.n(16)
u=B.L(i.r?A.bf.j(0.5):A.bz,A.r,1)
o.push(B.p(h,B.iP(h,A.bf,h,h,h,new C.f7Q(i),D.bSk,D.fUS,h,D.fF1,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aU1,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gccj()
v=B.fr(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b8(B.n(18),A.a0),h,h,h,h,h)
u=i.ax
t=u?D.fbC:A.HL
o.push(new B.a4(h,54,B.lN(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.nN,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.ci(B.x(o,A.ak,h,A.e,A.i,0,A.p),A.t,h,A.y,h,A.wf,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aZ(0,680,0,g.a.b*0.92),D.adV,h,h,h,h,h,h,h,h),h)},
bRp(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.f7n(this,p,d)
if(d===D.DO)return new C.aFo(p,o,q)
w=B.n(16)
v=p?E.wI:q
u=p?q:A.c.j(0.05)
t=B.L(p?A.aC:A.bz,A.r,1)
s=B.X(p?A.e6:C.hTG(d),A.c,q,q,q,20)
r=C.hTH(d)
return B.aA(q,B.cY(q,B.x(B.a([s,A.av,B.eO(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.e3)],x.p),A.m,q,A.b9,A.i,0,A.p),q,q,A.b5,new B.o(u,q,t,w,q,v,A.n),A.h5,q,64,q,q,A.hS,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a3)},
b8D(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ac:A.bz
r=B.L(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a9(A.a5,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aA(v,B.cY(v,B.B(B.a([w,Z.En,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a7,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,v,v),v,v,A.b5,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.amt,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f7C(this,d),v,v,v,v,v,v,!1,A.a3)}}
C.a19.prototype={
R(){return new C.aIS(new B.au(A.at,$.aw()))}}
C.aIS.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a1()},
afq(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afq=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.f78(r))
w=1
break}B.eZ()
r.m(new C.f79(r))
t=4
q=C.ikF(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.ikp(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.f7a(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.haT()
f=$.D8.h(0,k.a)
o=f==null||J.ct(f)?null:J.fv(f)
if(o==null){r.m(new C.f7b(r))
w=1
break}n=C.ikn(o,r.a.c)
C.ikj(r.a.c.a)
$.ha8=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hdJ(j)
h=C.hdK(r.a.c)
e=C.hdL(r.a.c)
w=7
return B.b(C.bEo(k,r.a.c.a,j,h,new C.f7c(r),i,e,a0),$async$afq)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ab(a1)
if(r.c!=null)r.m(new C.f7d(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afq,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aG(d,A.eN,i).w
i=B.aG(d,A.bZ,i).w
w=B.at(B.p(j,j,A.f,j,j,new B.o(A.aX,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.aqq,A.f,j,j,D.b5H,j,34,j,j,j,j,j,34),A.as,D.bHT],v),A.m,j,A.e,A.i,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Y.aam,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.n(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.n(16),Aw.adl),j,j,j,j,j,j,j,j,Y.Er,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.aj,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,D.aUT,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.d94[q]
o=A.c.j(0.06)
n=k.e?j:new C.f7e(k,p)
r.push(B.n0(j,o,new B.y(p,j,AC.Vd,j,j,j,j,j,j,j,j,j),j,n,j,j,Q.vJ,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.W,B.bX(A.bG,r,A.br,j,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aU1,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gcck()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bf.j(0.5),A.ej.j(0.5)],x.O):D.cGU
o=B.a([new B.ac(0,A.G,A.bf.j(0.35),A.cy,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.epj:D.bWR
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aI(!1,A.a2,!0,j,B.aO(!1,s,!0,B.eK(B.B(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hv,j,j,j)],v),A.m,j,A.b9,A.i,0,j,j),j,new B.o(j,j,j,r,o,new B.a9(A.a5,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.ci(B.x(w,A.ak,j,A.e,A.i,0,A.p),A.t,j,A.y,j,A.wf,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aZ(0,680,0,i.a.b*0.85),D.adV,j,j,j,j,j,j,j,j),j)}}
C.b2X.prototype={}
C.aFo.prototype={
R(){return new C.bmb(null,null)}}
C.bmb.prototype={
gayP(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.qj,null,1,null,v)
w.cM(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gayP().t()
this.byv()},
B(d){var w=null,v=this.a.d
return B.aA(w,B.cb(this.gayP(),new C.enZ(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a3)}}
C.bjH.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.dfo[s]
p=q.a*v
q=q.b*u
$.S()
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.r=D.yb.j(0.25+r*0.6).gp(0)
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
C.asV.prototype={
a6(){return"NgmyTextCommand."+this.b}}
C.a_w.prototype={
R(){return new C.aCU()}}
C.aCU.prototype={
gajy(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ahV(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAt(){var w=this.e
return w===$?this.e=C.hdJ(this.a.c).q(0,D.DO):w},
a9m(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9m=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.drc(s))
u=3
r=A.d.fG(D.wN,new C.drd(s))
q=B.dh(C.hdJ(s.a.c),x.Q)
l=q
J.hv(l,D.DO)
p=l
if(s.gAt())J.cc(p,D.DO)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAt()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hdK(i.c)
g=C.hdL(s.a.c)
w=6
return B.b(C.bEo(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9m)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ahV(q,s.gajy())
f=q==null?null:q.b
n=f==null?s.gajy():f
if(!J.A(n,r.a)&&!s.gAt())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ab(d)
if(s.c!=null)s.m(new C.dre(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9m,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.c:A.O,k=m?A.aR:A.al,j=m?A.O:A.c,i=B.n(28),h=B.L(m?A.bz:A.aN,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bF,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1),e=o.f?n:new C.drh(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cx,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.i,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.wN[w]
u=o.gajy()
t=o.f?n:new C.dri(o,v)
f.push(new C.buM(v,u===v.a,t,n))}f=B.kR(1.25,f,3,10,10,n,A.dS,!0)
u=B.n(18)
t=o.gAt()?D.c7W:n
if(o.gAt())s=n
else s=m?A.bo:A.bN
r=B.X(A.e5,o.gAt()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gAt()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gAt()?A.ac:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.i,0,A.p),1)
p=o.gAt()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.as,q,B.b8E(n,A.c,n,A.bM,!1,A.y,n,n,n,n,n,n,o.f?n:new C.drj(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,O.alc,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.W,B.d(u,n,n,n,n,n,n,D.fuU,n,n,n)],g))
f=B.ci(B.x(f,A.E,n,A.e,A.i,0,A.p),A.t,n,A.y,n,A.GJ,n,n,A.ah)
u=o.f?n:o.gbDC()
t=B.bo(A.L,n,n,n,n,n,A.af,n,new B.b8(B.n(16),A.a0),n,n,n)
s=B.n(16)
return B.bn(!0,B.p(n,B.x(B.a([new B.D(D.bDo,e,n),new B.ds(1,A.cn,f,n),new B.D(A.GI,new B.a4(1/0,50,B.bI(B.eK(B.at(o.f?A.tn:D.fMD,n,n,n),n,new B.o(n,n,n,s,n,D.c6u,A.n),n,n,n),n,u,t),n),n)],g),A.m,n,A.e,A.P,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uk,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.buM.prototype={
B(d){var w=null,v=this.c,u=A.d.gI(v.d),t=B.n(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.L(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ac(0,A.G,B.b1(s).j(0.5),A.I,12)],x.V):w
v=B.a([new B.bN(A.lu,w,w,B.X(v.c,A.ac,w,w,w,18),w),new B.bN(A.lv,w,w,B.d(v.b,w,w,w,w,w,w,D.fuR,w,w,w),w)],x.p)
if(q)v.push(D.b0V)
return B.aA(w,B.cY(w,new B.an(A.a_,w,A.ab,A.t,v,w),w,w,A.b5,new B.o(w,w,p,t,s,new B.a9(A.az,A.aE,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.ck,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a3)}}
C.enW.prototype={
aGE(d,e,f){return e+"@"+A.a.aY(A.o.fA(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wR(d,e){return this.aGE(0,e,null)}}
C.aNw.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.b2T.prototype={
B(d){var w,v,u=null,t=C.hcy(this.c)
if(t==null)w=D.bv4
else{w=B.aG(d,u,x.w).w.cNi(D.bzK,D.faM)
v=this.d
w=B.q3(B.e_(B.ap3(!1,t,!1,v,!1,390),!v,u),w)}return B.eO(A.A,new B.a4(416,870,new C.bnM(w,u),u),A.f,A.dz)}}
C.bnM.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.ds5[w]
u=new B.aP(3,3)
s.push(new B.cO(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bh(u,u,u,u),t,D.asn,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dtr[w]
u=new B.aP(3,3)
s.push(new B.cO(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bh(u,u,u,u),t,D.asn,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bT(0,B.c4(t,new B.o(t,t,t,B.n(64),D.cZ1,D.c4Q,A.n),A.bh),0,0,0))
s.push(B.bT(3,B.c4(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.bh),3,3,3))
s.push(B.bT(13,B.bx(B.n(51),B.ec(this.c,A.w,!0),A.ap),13,13,13))
u=B.n(20)
s.push(B.ap(t,B.at(B.p(D.b15,B.p(t,t,A.f,t,t,D.b6_,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bT(13,B.e_(B.bx(B.n(51),D.bwG,A.ap),!0,t),13,13,13))
s.push(B.ap(22,B.e_(B.at(B.p(t,t,A.f,t,t,new B.o(A.ac,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.a_,t,A.ab,A.f,s,t)}}
C.lr.prototype={
pS(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cG(),f=C.cG(),e=m.r
f=C.ew(A.K,!1,e.l(),A.aF,"",k,42,A.bp,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bi,j,2,"Your Presentation Title",0,0,"",D.mY,D.cV,0.84,0.08,0.26)
w=C.cG()
v=m.w
w=C.ew(A.K,!1,v.l(),A.aF,"",k,20,A.bp,A.a7,"",0.12,w,l,"","",0,!1,"",0,D.bi,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dh,D.cV,0.76,0.12,0.56)
u=C.cG()
t=m.d
s=x.u
t=C.rS(i,l,0,0,B.a([f,w,C.ew(A.bj,!1,4279310375,A.aF,"",t.j(0.8).l(),24,A.bp,A.a7,"",0.006,u,l,"","",0,!1,"",0,D.fD,t.l(),3,"",0,0,"",D.co,D.fc,0.3,0.35,0.72)],s),C.cG(),D.mX,"","","Welcome",D.dh)
u=C.cG()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,34,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bi,j,2,"Agenda",0,0,"",D.co,D.cV,0.84,0.08,0.08)
w=C.cG()
w=C.rS(i,l,0,0,B.a([u,C.ew(A.bj,!0,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.6,w,l,"","",0,!1,"",0,D.bi,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.v6,D.cV,0.8,0.1,0.26)],s),C.cG(),D.mX,"","","Agenda",D.dh)
u=C.cG()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,32,A.bp,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bi,j,2,"Main Idea",0,0,"",D.co,D.cV,0.84,0.08,0.08)
f=C.cG()
f=C.rS(i,l,0,0,B.a([u,C.ew(A.bj,!0,v.l(),A.aF,"",k,21,A.bp,A.a7,"",0.62,f,l,"","",0,!1,"",0,D.bi,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.co,D.cV,0.8,0.1,0.26)],s),C.cG(),D.mX,"","","Key Point 1",D.dh)
u=C.cG()
u=C.ew(A.bj,!1,e.l(),A.aF,"",k,30,A.bp,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bi,j,2,"Compare & Contrast",0,0,"",D.co,D.cV,0.84,0.08,0.08)
r=C.cG()
r=C.ew(A.bj,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,r,l,"","",0,!1,"",0,D.bi,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.co,D.cV,0.4,0.08,0.24)
q=C.cG()
q=C.rS(i,l,0,0,B.a([u,r,C.ew(A.bj,!0,v.l(),A.aF,"",k,18,A.bp,A.a7,"",0.62,q,l,"","",0,!1,"",0,D.bi,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.co,D.cV,0.4,0.52,0.24)],s),C.cG(),D.mX,"","","Key Point 2",D.dh)
r=C.cG()
r=C.ew(A.K,!1,e.l(),A.aF,"",k,48,A.bp,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bi,j,2,h,0,0,"",D.dh,D.cV,0.8,0.1,0.32)
e=C.cG()
p=C.C8(l,l,l,l,D.DK,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rS(i,l,0,0,B.a([r,C.ew(A.K,!1,v.l(),A.aF,"",k,22,A.bp,A.a7,"",0.1,e,l,"","",0,!1,"",0,D.bi,j,2,"Questions?",0,0,"",D.co,D.cV,0.7,0.15,0.58)],s),C.cG(),D.mX,"","",h,D.dh)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fb.prototype={
bx(d){return this.e.$1(d)}}
C.eA.prototype={}
C.ja.prototype={}
C.F2.prototype={
gaMy(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.ahI(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4w(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.F2(v,u,t,d==null?w.d:d)},
G0(d){return this.a4w(null,d,null,null)},
aFk(d){return this.a4w(null,null,null,d)},
cNg(d,e){return this.a4w(d,e,null,null)},
bdU(d){return this.a4w(d,null,null,null)},
be_(d){return this.a4w(null,null,d,null)}}
C.O4.prototype={
R(){return new C.blx(new B.eC(0,$.aw()),null,null)}}
C.blx.prototype={
Z(){var w,v=this
v.a3()
w=v.pW(new C.e1x(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fZ(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.T$=$.aw()
w.P$=0
this.bxZ()},
B(d){var w=C.ahI(this.a.c.a)
if(w==null)w=A.d.gI(D.I5)
return B.cu(new C.e1w(this,w,C.hsQ(this.a.c.d)))}}
C.btk.prototype={
B(d){return B.o6(A.X8,this.e,new C.f6m(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bgt.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aUs(d,e,v)
break
case"confetti":w.bKb(d,e,v)
break
case"crown":w.bLQ(d,e,v)
break
case"aurora":w.bEH(d,e,v)
break
case"champagne":w.bI3(d,e,v)
break
case"diamonds":w.bO0(d,e,v)
break
case"starburst":w.czW(d,e,v)
break
case"balloons":w.bEV(d,e,v)
break
case"galaxy":w.bTh(d,e,v)
break
case"redcarpet":w.cqM(d,e,v)
break
case"coins":w.bJA(d,e,v)
break
case"lanterns":w.c2y(d,e,v)
break
case"hearts":w.c08(d,e,v)
break
case"petals":w.clR(d,e,v)
break
case"butterflies":w.bH2(d,e,v)
break
case"neon":w.c6B(d,e,v)
break
case"disco":w.bOb(d,e,v)
break
case"sunrise":w.cBB(d,e,v)
break
case"pearls":w.ckV(d,e,v)
break
case"snow":w.czD(d,e,v)
break
case"laurel":w.c2E(d,e,v)
break
case"ribbons":w.cti(d,e,v)
break
case"kente":w.c2m(d,e,v)
break
case"trophy":w.cFh(d,e,v)
break
case"shooting":w.cxn(d,e,v)
break
case"bokeh":w.bFg(d,e,v)
break
case"orbits":w.cix(d,e,v)
break
case"flowers":w.bSw(d,e,v)
break
case"music":w.c6j(d,e,v)
break
case"mandala":w.c4K(d,e,v)
break
case"sparklers":w.czK(d,e,v)
break
case"city":w.bIR(d,e,v)
break}},
t_(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.J()
v.r=g.j(A.k.E(h,0,1)).gp(0)
v.a=A.oY
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
d.aK(u,v)
d.ad(e,f*0.18,v)},
lW(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.d_(q,v)*2.5)+C.d_(q,u)*6.28)+1)/2
this.t_(d,new B.u(C.d_(q,t)*o,C.d_(q,s)*n),m*(0.006+0.014*C.d_(q,r))*(0.5+p),h,p*p)}},
aUs(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lW(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bM,A.ay],w),B.a([A.io,A.bE],w),B.a([A.eA,A.aJ],w),B.a([A.c,A.aA],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bf(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.d_(h,1))
f=g+c0*(C.d_(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.d_(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.kB(new B.u(g,c1),new B.u(f,e),A.cu.aw(0,i/0.22))
a0.toString
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.sam(new B.a9(A.a5,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aA(0,B.rU(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.by
a2=B.kB(new B.u(g,c1),a0,0.75)
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
a6=A.cu.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.d_(h,4)
if(a5<0.15){a4=1-a5/0.15
$.S()
a8=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hj(A.G,o)
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
b9=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.by
b9.a=A.oY
a3=b9.G()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.d_(h,b1+120)>0.5)this.t_(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bKb(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.S(),a0=B.J()
a0.sam(new B.a9(A.az,A.aE,A.x,D.dmg,B.a([A.k.E(g-0.15,0,1),A.k.E(g,0,1),A.k.E(g+0.15,0,1)],x.x),null).aA(0,new B.a3(0,0,f,e)))
a1.aQ(new B.a3(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.d_(u,1)))+C.d_(u,2)*w,w)
s=C.d_(u,3)
r=Math.sin(a3*(0.8+C.d_(u,4))+u)
q=h*(0.012+0.012*C.d_(u,5))
p=Math.cos(a3*(2+3*C.d_(u,6))+u)
o=D.R9[A.o.E(A.k.bf(C.d_(u,7)*5),0,4)]
J.bl(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.d_(u,8)*2)+u)*180/3.141592653589793,0,0)
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
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.S()
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=B.b1(n.r).gp(0)
t.b=A.a9
t.c=q*0.35
k=t.G()
t=m.e
f.drawPath((t==null?m.e=new B.cd(m.gbu().a.snapshot()):t).a,k)
k.delete()}else{t=B.bK(A.I,q*1.8*A.k.E(t,0.15,1),q)
k=n.G()
f.drawRect(B.bH(t),k)
k.delete()}f.restore()}this.lW(a1,a2,a3,25,A.bM,30)},
bLQ(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
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
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.bM.j(0.22),D.bie],v),a4,a4).aA(0,B.bY(w,u)))
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
if(s){n=B.J()
n.sam(new B.a9(A.b0,A.b6,A.x,D.dkU,a4,a4).aA(0,new B.a3(a5,a6,o,v)))
a8.aK(i,n)
for(v=[D.eFE,D.eyO,D.ePi],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.i2.gp(0)
l=g.G()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.xz(i),u=B.a([],x.X),o=new B.rs(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jE(y.M));--f
o.ii()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aF(n,v.b,a4,new B.cw([new B.BA(o,f),0,d*h,!0]),B.a([],r))
f=new B.ao(A.Q,A.M,A.S,A.T,A.R)
f.b=A.a9
f.c=g
f.e=A.dQ
f.r=A.bM.gp(0)
l=f.G()
f=d.gbu().a.snapshot()
t.drawPath((d.e=new B.cd(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.t_(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lW(a8,a9,b0,45,A.bM,40)},
bEH(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lW(a8,a9,b0,60,A.c,50)
w=[D.f10,D.f0J,D.f0C,D.f2_]
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
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.b=A.a9
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.oY
n.z=new B.hj(A.G,s)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cd(h.gbu().a.snapshot()):n).a,a2)
a2.delete()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.b=A.a9
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.oY
n.z=new B.hj(A.G,v)
a2=n.G()
n=h.e
u.drawPath((n==null?h.e=new B.cd(h.gbu().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.d_(a4,1))+C.d_(a4,2)*a3,a3)
r=C.d_(a4,3)
q=Math.sin(b0+a4)
p=C.d_(a4,4)
$.S()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=A.w2.j(0.4+0.5*C.d_(a4,5)).gp(0)
n.a=A.oY
a2=n.G()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bI3(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.S(),a0=B.J()
a0.sam(new B.c_(A.A,0.5,A.x,l,0,B.a([A.i_.j(0.25+0.1*h),D.Z1],x.O),l,l).aA(0,B.bY(new B.u(g,f),e)))
a1.ad(new B.u(g,f),e,a0)
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
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.b=A.a9
a0.c=h
a0.r=D.R9[A.o.F(w,4)].j(0.7).gp(0)
p=a0.G()
a0=u.e
g.drawPath((a0==null?u.e=new B.cd(u.gbu().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.d_(w,1)))+C.d_(w,2)*o,o)
r=k*(0.1+0.8*C.d_(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.d_(w,4))
if(n<f){this.t_(a1,new B.u(r,n),m*2.4,A.bM,A.k.E(n/f,0,1))
continue}$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.tX.j(0.75).gp(0)
p=d.G()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.r=A.c.j(0.8).gp(0)
p=t.G()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bO0(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lW(a9,b0,b1,30,A.l6,60)
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
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.sam(new B.a9(A.az,A.aE,A.x,D.dgt,a5,a5).aA(0,B.bK(A.I,k*1.2,o)))
a2=g.G()
g=f.gbu().a.snapshot()
v.drawPath((f.e=new B.cd(g)).a,a2)
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
if(a4>0.85)this.t_(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
czW(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=A.bM.j(r?0.12:0.07).gp(0)
m=p.G()
r=n.gbu().a.snapshot()
w.drawPath((n.e=new B.cd(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ao(A.Q,A.M,A.S,A.T,A.R)
u.b=A.a9
r=1-k
u.c=v*r
u.r=A.bM.j(r*0.6).gp(0)
m=u.G()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bf(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.d_(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bw3.aw(0,k)*(0.5+0.5*C.d_(t,v)))
this.t_(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.d_(t,3)),D.R9[A.o.E(A.k.bf(C.d_(t,4)*5),0,4)],u)}},
bEV(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.d_(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.d_(o,2))+C.d_(o,3)*m,m)
j=C.d_(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.azA[A.o.F(o,6)]
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
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.G()
d=f.e
u.drawPath((d==null?f.e=new B.cd(f.gbu().a.snapshot()):d).a,a1)
a1.delete()
a2=B.bK(new B.u(j,k),n*2.3,l)
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d=B.ar(i,A.w,0.35)
d.toString
l.sam(new B.c_(D.b18,0.9,A.x,a3,0,B.a([A.c,i,d],t),W.azq,a3).aA(0,a2))
a1=l.G()
u.drawOval(B.bH(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aF(g.r,A.ag,a3,a3,l)
d=n*0.12
l.push(new B.aY(j-d,h))
l.push(new B.aq(j+d,h))
l.push(new B.aq(j,k+n))
l.push(new B.bt())
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
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
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=D.azA[A.o.F(o,6)].j(0.85).gp(0)
a1=r.G()
u.drawRect(B.bH(s),a1)
a1.delete()
u.restore()}},
bTh(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lW(b1,b2,b3,50,A.c,70)
for(w=[D.f18,D.f0P,D.f0V],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.S()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.sam(new B.c_(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).aA(0,B.bY(new B.u(r,m),l)))
j=k.G()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.d_(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.d_(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.ar(A.bM,A.eG,g)
k.toString
d=C.d_(i,3)
$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.r=k.j(0.5+0.5*C.d_(i,4)).gp(0)
a0.a=A.oY
j=a0.G()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.S()
a9=B.J()
a9.sam(new B.c_(A.A,0.5,A.x,a4,0,B.a([A.tX.j(0.55),D.aiD],u),a4,a4).aA(0,B.bY(b0,a8)))
b1.ad(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bf(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.d_(a2,9)),a6*0.1*C.d_(a2,8))
a5=B.kB(a3,a3.a7(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.kB(a3,a5,0.6)
a6.toString
a8=B.J()
a8.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aA(0,B.rU(a3,a5)))
a8.c=a7*0.005
a8.d=A.by
b1.bo(a6,a5,a8)}},
cqM(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o=new B.ao(A.Q,A.M,A.S,A.T,A.R)
o.sam(new B.c_(A.A,0.5,A.x,b5,0,B.a([A.tX.j(0.28),D.aiD],w),b5,b5).aA(0,B.bY(new B.u(q,u),t)))
o.a=A.oY
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
a9=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a9.sam(new B.a9(A.a5,A.a8,A.x,a7,b5,b5).aA(0,new B.a3(a6,0,a6+i,j)))
l=a9.G()
a9=m.gbu().a.snapshot()
v.drawPath((m.e=new B.cd(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
b1.r=A.i_.gp(0)
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
v=B.J()
v.sam(D.c6n.aA(0,new B.a3(0,w,0+b6,w+b7*0.22)))
b9.aK(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.d_(r,1))+C.d_(r,2)*b3,b3)
u=C.d_(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.t_(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.d_(r,4)),A.bM,0.3+0.7*((q+1)/2))}},
bJA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.d_(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.d_(t,2))+C.d_(t,3)*r,r)-q
o=C.d_(t,4)*i
n=Math.cos(f*(2+3*C.d_(t,5))+t)
m=Math.abs(n)
l=B.bK(new B.u(o,p),q,q*A.k.E(m,0.12,1))
$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.sam(new B.a9(A.az,A.aE,A.x,n>0?D.dwX:D.cMK,null,null).aA(0,l))
k=q.G()
v.drawOval(B.bH(l),k)
k.delete()
q=-(s*0.22)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=Math.max(0.6,s*0.08)
j.r=D.bsJ.gp(0)
k=j.G()
v.drawOval(B.bH(new B.a3(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.t_(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lW(d,e,f,30,A.bM,110)},
c2y(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lW(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.d_(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.d_(p,2))+C.d_(p,3)*n,n)
l=C.d_(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.sam(new B.c_(A.A,0.5,A.x,d,0,B.a([As.G6.j(0.45*k),D.ah9],u),d,d).aA(0,B.bY(new B.u(l,m),j)))
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
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i=B.ar(D.bit,A.c,0.2*k)
i.toString
j.sam(new B.a9(A.b0,A.b6,A.x,B.a([D.bnK,i],u),d,d).aA(0,B.bK(new B.u(l,m),o*1.4,o)))
g=j.G()
j=f.gbu().a.snapshot()
v.drawPath((f.e=new B.cd(j)).a,g)
g.delete()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.c.j(k).gp(0)
g=j.G()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
c08(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
l.push(new B.kO(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.kO(m,g,o*1.8,h,0,m))
l.push(new B.bt())
f=D.d6O[A.o.F(p,5)]
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l=B.ar(f,A.w,0.25)
l.toString
m.sam(new B.c_(A.tB,0.5,A.x,d,0,B.a([A.c,f,l],u),M.a4C,d).aA(0,B.bY(A.I,o*1.4)))
e=m.G()
m=i.gbu().a.snapshot()
v.drawPath((i.e=new B.cd(m)).a,e)
e.delete()
v.restore()}this.lW(a3,a4,a5,30,A.io,130)},
clR(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m=(q&1)===0?D.cGT:D.dhQ
n.sam(new B.a9(A.a5,A.a8,A.x,m,i,i).aA(0,B.bY(A.I,p)))
j=n.G()
n=k.gbu().a.snapshot()
v.drawPath((k.e=new B.cd(n)).a,j)
j.delete()
v.restore()}this.lW(d,e,a0,25,A.bM,140)},
bH2(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lW(b0,b1,b2,40,A.bM,150)
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
a3.push(new B.kO(f,e,l,d,h,0))
a3.push(new B.kO(q,h,g,q,0,h))
a3.push(new B.bt())
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.sam(new B.a9(A.a5,A.a8,A.x,i?D.dhz:D.dkn,a6,a6).aA(0,new B.a3(0,m,k,j)))
a5=a2.G()
a2=a4.gbu().a.snapshot()
v.drawPath((a4.e=new B.cd(a2)).a,a5)
a5.delete()
a2=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a2.b=A.a9
a2.c=Math.max(0.6,o)
a2.r=D.Bz.gp(0)
a5=a2.G()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cd(a4.gbu().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.r=D.brY.gp(0)
p.c=q*0.1
p.d=A.by
a5=p.G()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c6B(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.S()
q=new B.ao(A.Q,A.M,A.S,A.T,A.R)
q.b=A.a9
q.c=v
q.r=D.aAK[t].j((1-s)*0.9).gp(0)
q.z=new B.hj(A.G,v)
p=r*0.3
p=B.br(B.bK(e,r,r*1.6),new B.aP(p,p))
o=q.G()
u.drawRRect(B.e7(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.d_(m,1)*4)+m)))
k=D.aAK[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.br(new B.a3(j,i,j+w,i+l),new B.aP(v,v))
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=k.j(0.85).gp(0)
j.z=new B.hj(A.ad9,p)
o=j.G()
u.drawRRect(B.e7(i),o)
o.delete()}},
bOb(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.d_(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.d_(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bM,A.nX,A.du][A.o.F(p,4)]
j=C.d_(p,3)
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.r=k.j(0.75).gp(0)
i.a=A.oY
i.z=new B.hj(A.G,r)
h=i.G()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.S()
t=B.J()
t.r=A.aC.gp(0)
t.c=1.2
a3.bo(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.J()
t.r=A.dn.gp(0)
a3.ad(v,u,t)
J.bl(q.save())
a1=new B.aF(a1.r,A.ag,null,null,B.a([],x.v))
a1.D(new B.jM(B.bY(v,u)))
a3.mM(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.S()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=B.ar(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.G()
q.drawRect(B.bH(new B.a3(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.t_(a3,v.a7(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cBB(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.cu.aw(0,A.k.E(a4/3,0,1))),a1=new B.u(d,a0)
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
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=A.bM.j(0.1).gp(0)
o=r.G()
r=p.gbu().a.snapshot()
w.drawPath((p.e=new B.cd(r)).a,o)
o.delete()}d=e*0.5
$.S()
a0=B.J()
a0.sam(new B.c_(A.A,0.5,A.x,h,0,B.a([D.bdJ.j(0.6),D.ah9],x.O),h,h).aA(0,B.bY(a1,d)))
a2.ad(a1,d,a0)
a0=e*0.2
d=B.J()
d.sam(D.ewc.aA(0,B.bY(a1,a0)))
a2.ad(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.d_(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.r=A.c.j(0.18).gp(0)
i=B.bK(new B.u(l,k),r,u)
o=j.G()
w.drawOval(B.bH(i),o)
o.delete()
i=B.bK(new B.u(l+q,k-n),r,m)
o=j.G()
w.drawOval(B.bH(i),o)
o.delete()}this.lW(a2,a3,a4,20,A.i2,180)},
ckV(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r=new B.ao(A.Q,A.M,A.S,A.T,A.R)
r.r=B.ar(A.cw,A.jc,s/3).j(0.55).gp(0)
k=r.G()
r=p.e
w.drawPath((r==null?p.e=new B.cd(p.gbu().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.d_(i,1))
g=d-A.k.F(u*(0.04+0.05*C.d_(i,2))+C.d_(i,3)*j,j)
n=C.d_(i,4)*e+Math.sin(a3+i)*a0*0.02
$.S()
t=new B.ao(A.Q,A.M,A.S,A.T,A.R)
t.sam(new B.c_(Ap.xz,0.5,A.x,f,0,D.do_,f,f).aA(0,B.bY(new B.u(n,g),h)))
k=t.G()
w.drawCircle(n,g,h,k)
k.delete()}this.lW(a1,a2,a3,25,A.c,190)},
czD(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.d_(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.d_(r,2))+C.d_(r,3)*p,p)
n=C.d_(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
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
h.delete()}v.restore()}this.lW(d,a0,a1,40,A.eA,200)},
c2E(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.E(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.cO(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.bl(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.bK(new B.u(p,0),q,r)
$.S()
f=new B.ao(A.Q,A.M,A.S,A.T,A.R)
f.sam(D.c6a.aA(0,new B.a3(0,o,n,m)))
e=f.G()
s.drawOval(B.bH(g),e)
e.delete()
s.restore()}}$.S()
a0=B.J()
a0.b=A.a9
a0.c=a2*0.003
a0.r=D.biM.gp(0)
a3.ad(w,v*1.08,a0)
d=a5*0.8
this.t_(a3,w.a7(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lW(a3,a4,a5,40,A.bM,210)},
cti(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.i_,A.i2],a6),B.a([A.p5,A.io],a6),B.a([A.aD,A.eG],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.S()
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dy(i,s),l=new B.bS(l,l.gK(0),r);l.C();){h=l.d
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
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k=a7[m]
h=k[0]
l.sam(new B.a9(A.a5,A.a8,A.x,B.a([h,k[1],h],a6),At.zx,new B.mG(w)).aA(0,new B.a3(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.G()
l=j.e
t.drawPath((l==null?j.e=new B.cd(j.gbu().a.snapshot()):l).a,a2)
a2.delete()}this.lW(a8,a9,b0,40,A.c,220)},
c2m(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2.r=D.a4G[a3].gp(0)
a4=a2.G()
s.drawRect(B.bH(new B.a3(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a5.r=D.a4G[A.o.F(a3+2,5)].gp(0)
a4=a5.G()
s.drawRect(B.bH(new B.a3(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.d_(a0,1))+C.d_(a0,2)*a6,a6)
v=C.d_(a0,3)
t=C.d_(a0,4)
this.t_(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a4G[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cFh(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ao(A.Q,A.M,A.S,A.T,A.R)
p.c=v
p.r=A.bM.j(0.06).gp(0)
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
f=B.bK(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=q
d.r=A.aA.gp(0)
o=d.G()
u.drawArc.apply(u,[B.bH(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.J()
a1.sam(new B.a9(A.a5,A.a8,A.x,D.dqL,A.azI,null).aA(0,new B.a3(v,a2,r,j)))
a4.aK(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.t_(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bKc(a4,a5,a6,60)},
bKc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.d_(p,31))+C.d_(p,32)*v,v)
n=C.d_(p,33)
J.bl(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bK(A.I,r*A.k.E(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ao(A.Q,A.M,A.S,A.T,A.R)
n.r=D.R9[A.o.F(p,5)].gp(0)
m=n.G()
u.drawRect(B.bH(o),m)
m.delete()
u.restore()}},
cxn(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lW(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.d_(o,1)*1.6
m=A.k.F(a2+C.d_(o,2)*n,n)/n
l=e*(C.d_(o*7+A.k.bf((a2+C.d_(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.S()
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.sam(new B.a9(A.a5,A.a8,A.x,B.a([A.c.j(0),A.bM],s),null,null).aA(0,B.rU(new B.u(l,h),i)))
g.c=r
g.d=A.by
f=g.G()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.t_(a0,i,p,A.c,1-m)}},
bFg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.d_(r,1))
p=A.k.F(C.d_(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.d_(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.S()
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l=A.o.F(r,5)
m.r=D.aCu[l].j(n).gp(0)
m.a=A.oY
m.z=new B.hj(A.G,q*0.12)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.ao(A.Q,A.M,A.S,A.T,A.R)
m.b=A.a9
m.c=Math.max(0.6,q*0.05)
m.r=D.aCu[l].j(n*1.4).gp(0)
k=m.G()
s.drawCircle(p,o,q,k)
k.delete()}},
cix(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
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
o.r=A.bM.j(0.45).gp(0)
n=o.G()
w.drawOval(B.bH(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=A.i2.gp(0)
n=k.G()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=A.i_.j(0.4).gp(0)
k.z=new B.hj(A.G,r)
n=k.G()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lW(d,e,f,45,A.bM,270)},
bSw(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.d_(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.d_(o,2)*4,4)/4
j=A.et.aw(0,A.k.E(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.d_(o,3))*(j*i)
if(h<=0.5)continue
g=D.dev[A.o.F(o,5)]
J.bl(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bK(new B.u(0,l),i,j)
$.S()
a0=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a0.sam(new B.a9(A.b0,A.b6,A.x,B.a([A.c,g],u),null,null).aA(0,B.bK(new B.u(0,l),f,h)))
a1=a0.G()
v.drawOval(B.bH(d),a1)
a1.delete()}$.S()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.r=A.i_.gp(0)
a1=l.G()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lW(a5,a6,a7,30,A.i2,280)},
c6j(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bY(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.b=A.a9
j.c=v
j.r=D.ayL[n].j((1-m)*0.8).gp(0)
i=j.G()
u.drawArc.apply(u,[B.bH(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.d_(g,1))+C.d_(g,2)*h,h)
e=C.d_(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.d_(g,4))
a0=D.ayL[A.o.F(g,4)]
$.S()
a1=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a1.r=a0.gp(0)
J.bl(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.bK(A.I,d,d*1.5)
i=a1.G()
u.drawOval(B.bH(s),i)
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
c4K(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.u(a4,a5)
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
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.b=A.a9
d.c=t
d.r=B.ar(A.bM,A.nX,k).j(0.7).gp(0)
a2=d.G()
d=a1.gbu().a.snapshot()
v.drawPath((a1.e=new B.cd(d)).a,a2)
a2.delete()
d=new B.ao(A.Q,A.M,A.S,A.T,A.R)
d.r=A.i2.j(0.8).gp(0)
a2=d.G()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.S()
a5=B.J()
a5.sam(new B.c_(A.A,0.5,A.x,a3,0,B.a([A.i_.j(0.25),D.Z1],x.O),a3,a3).aA(0,B.bY(w,a4)))
a7.ad(w,a4,a5)
this.lW(a7,a8,a9,30,A.bM,300)},
czK(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.S()
h=new B.ao(A.Q,A.M,A.S,A.T,A.R)
h.r=A.bn.gp(0)
h.c=q
h.d=A.by
g=h.G()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.ao(A.Q,A.M,A.S,A.T,A.R)
l.sam(new B.c_(A.A,0.5,A.x,null,0,B.a([A.i2,A.i_.j(0.6),D.Z1],o),null,null).aA(0,B.bY(new B.u(j,i),p)))
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
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a6.r=B.ar(A.i2,A.ay,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.by
a6.a=A.oY
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
g.delete()}}}this.lW(b0,b1,b2,35,A.bM,310)},
bIR(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aUs(a9,new B.av(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.d_(n,1))
l=a8*(0.14+0.24*C.d_(n,2))
k=a8-l
j=new B.a3(o,k,o+m,k+l)
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.sam(D.c77.aA(0,j))
h=i.G()
r.drawRect(B.bH(j),h)
h.delete()
g=A.k.bf(m/q)
f=A.k.bf(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.d_(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.S()
a6=new B.ao(A.Q,A.M,A.S,A.T,A.R)
a6.r=A.bM.j(0.85).gp(0)
h=a6.G()
r.drawRect(B.bH(new B.a3(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
av(d){return d.b!==this.b||d.d!==this.d}}
C.b0N.prototype={
B(d){var w,v=null,u=new C.ces(),t=new C.ceu(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.arw,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cet(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.I5[w]))
return B.bX(A.bG,s,A.br,v,12,10)}}
C.a_3.prototype={
R(){return new C.aBh()}}
C.aBh.prototype={
gvY(){var w=this.d
return w===$?this.d=this.a.c:w},
gb0O(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.bb(w.b,A.b4,A.aO),$.aw())}return v},
gayQ(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaMy()
v=$.aw()
u.f!==$&&B.bE()
t=u.f=new B.au(new B.bb(w,A.b4,A.aO),v)}return t},
t(){var w=this.gb0O(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gayQ()
w.T$=v
w.P$=0
this.a1()},
a_T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a_T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().Co(90,700,700,A.eL),$async$a_T)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fn(),$async$a_T)
case 8:p=e
o=q.b.toLowerCase()
n=J.aiF(o,".png")?"image/png":"image/jpeg"
r.m(new C.dgq(r,n,p))
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
return B.i($async$a_T,v)},
b0N(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b6(4,B.n(12),A.a0),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.Vo,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.ahI(p.gvY().a)
if(n==null)n=A.d.gI(D.I5)
w=p.gvY()
v=p.r
u=x.p
v=B.E(new B.an(A.a_,o,A.ab,A.t,B.a([B.bT(0,new C.O4(p.gvY(),!1,!0,new B.bQ(w.a+v,x.W)),0,0,0),B.ap(o,B.Ii(A.mT,new C.dgv(d),B.nS(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ap(o,B.Ii(A.aqo,new C.dgw(p),B.nS(o,A.aS,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aUS,o,o,o)
t=B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gb0O(0),o,o,o,o,o,2,p.b0N("Big words"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dgx(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.fS,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.L(A.i_.j(0.6),A.r,1)
if(p.gvY().d.length===0)q=D.bUy
else{q=C.hsQ(p.gvY().d)
if(q==null)q=new Uint8Array(0)
q=B.hW(B.fU(q,A.A,o,o,A.ci,A.bY,!1,o,!1,o,o),A.ap)}r=B.a([t,A.ad,B.aA(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccl(),o,o,o,o,o,o,!1,A.a3)],u)
if(p.gvY().d.length!==0)r.push(B.aH(o,o,o,o,H.PD,o,o,o,new C.dgy(p),o,o,o,o,"Remove logo",o))
return B.c6(o,A.w,B.bn(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.W,B.B(r,A.m,o,A.e,A.i,0,o,o),A.N,B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),p.gayQ(),o,o,o,o,o,2,p.b0N("Line under it"),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.dgz(p),o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,A.df,!0,A.a4,o,A.an,o,o,o,o),A.ae,B.dj(D.bTs,D.fWy,new C.dgA(p,d),B.bo(A.aA,o,o,o,A.w,o,A.cm,o,new B.b8(B.n(14),A.a0),o,o,o))],u),A.ak,o,A.e,A.P,0,A.p),A.f,o,o,D.b6b,o,o,o,o,A.GF,o,o,o)],u),A.m,o,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aN0.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.a_o.prototype={
R(){return new C.bi0(new B.au(A.at,$.aw()))}}
C.bi0.prototype={
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a1()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.R(d).ax.a===A.J,m=n?A.c:A.O,l=n?A.aR:A.al,k=B.aG(d,A.bZ,x.w).w,j=n?A.O:A.c,i=B.n(28),h=B.L(n?A.bz:A.aN,A.r,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cx,l,o,o,o,o),o,o,o,new C.dne(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.i,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cYt[w]
u=B.a([],g)
for(t=J.aX(v.b);t.C();){s=t.gS(t)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.bN
u.push(B.aO(!1,new B.bh(r,r,r,r),!0,B.p(A.A,new B.y(s,o,A.pJ,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bh(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dnf(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hA,new B.y(v.a.toUpperCase(),o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.CK(A.bG,6,6,A.br,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.Y,!1,o,!0,A.t,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b6(4,B.n(14),A.a0),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.aj,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.aa,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ad,B.bI(A.aVQ,o,new C.dng(this),o)],g),A.m,o,A.e,A.i,0,o,o))
e.push(A.N)
return B.bn(!0,B.p(o,B.x(B.a([f,new B.ds(1,A.cn,B.cl(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.P,0,A.p),A.f,o,new B.aZ(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uk,A.a_Y,o,o,o),!0,!1,A.af,!0,!0)}}
C.bhl.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.e6()
a2.cZ(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.J()
u.z=A.IQ
t=B.J()
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
C.bh2.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.br(new B.a3(0,0,0+a7.a,0+a7.b),A.jJ),a2=this.b,a3=Math.sin(a2*2),a4=$.S(),a5=B.J()
a5.b=A.a9
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.mW
a6.az(a1,a5)
a5=x.v
a4=new B.aF(a4.r,A.ag,a0,a0,B.a([],a5))
a4.D(new B.iV(a1))
v=new B.Tk(new B.rs(B.xz(a4),!1,B.a([],x.X))).gI(0)
a4=v.a
a3=v.b
a4.ii()
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
j.d=A.by
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aF(r,k,a0,new B.cw([v,i,h,!0]),B.a([],a5))
g=j.G()
f=k.gbu().a.snapshot()
q.drawPath((k.e=new B.cd(f)).a,g)
g.delete()}else{k=new B.aF(r,k,a0,new B.cw([v,i,t,!0]),B.a([],a5))
g=j.G()
f=k.gbu().a.snapshot()
q.drawPath((k.e=new B.cd(f)).a,g)
g.delete()
k=new B.aF(r,a2.b,a0,new B.cw([v,0,h,!0]),B.a([],a5))
g=j.G()
f=k.gbu().a.snapshot()
q.drawPath((k.e=new B.cd(f)).a,g)
g.delete()}}a4.ii()
e=u[a3].Hj(n).a
$.S()
k=new B.ao(A.Q,A.M,A.S,A.T,A.R)
k.r=w.gp(0)
k.z=Ad.oE
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
C.bq6.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.e6()
e.cZ(this.c)
w=a0.a*(0.2+e.ag()*0.6)
v=e.ha()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.ganJ()*1.4
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
j=new B.ao(A.Q,A.M,A.S,A.T,A.R)
j.sam(B.tz(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.kS
g=j.G()
j=h.gbu().a.snapshot()
q.drawPath((h.e=new B.cd(j)).a,g)
g.delete()}},
av(d){return d.b!==this.b}}
C.bbS.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e6()
a0.cZ(this.c*7+3)
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
e=new B.ao(A.Q,A.M,A.S,A.T,A.R)
e.r=f.j(g).gp(0)
e.z=new B.hj(A.G,k*0.35)
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
C.bbw.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.e6()
a0.cZ(this.c+11)
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
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
i.b=A.a9
i.c=r
i.d=A.by
if(m===1){h=B.ar(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hj(A.G,u)
d=i.G()
i=g.e
t.drawPath((i==null?g.e=new B.cd(g.gbu().a.snapshot()):i).a,d)
d.delete()}},
av(d){return d.b!==this.b}}
C.bx8.prototype={
a4(d,e){var w,v,u=new B.a3(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.J()
t=(0.5+0.5*t)*0.12
w.sam(new B.c_(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),D.d5w,null).aA(0,u))
d.aQ(u,w)
w=u.cr(-3)
v=B.J()
v.b=A.a9
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.kS
d.aQ(w,v)},
av(d){return d.b!==this.b}}
C.bu7.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bf(d)*7,p=0;p<7;++p){o=new B.e6()
o.cZ(q+p)
n=o.ag()*w
m=o.ag()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.ag()*0.025)*l
j=B.ar(s,A.c,0.7).j(l)
$.S()
i=new B.ao(A.Q,A.M,A.S,A.T,A.R)
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
g=new B.ao(A.Q,A.M,A.S,A.T,A.R)
g.r=A.c.j(l*0.9).gp(0)
g.z=new B.hj(A.G,k*0.3)
h=g.G()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
av(d){return d.b!==this.b}}
C.btg.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a3(0,0,0+e.a,0+e.b)
$.S()
v=B.J()
v.a=A.oY
v.sam(new B.a9(A.az,A.aE,A.x,B.a([A.L,B.ar(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.k.E(u-0.15,0,1),A.k.E(u,0,1),A.k.E(u+0.15,0,1)],x.x),null).aA(0,w))
d.aQ(w,v)},
av(d){return d.b!==this.b}}
C.bgm.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdE(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.J()
w.b=A.a9
w.c=1.4
w.d=A.by
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.J()
u.b=A.a9
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.v_
r=new C.dg7(this,r*0.16,d,u,w)
t=e.gdE()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
av(d){return d.b!==this.b}}
C.y_.prototype={}
C.Jj.prototype={
a6(){return"NgmySlideElementType."+this.b}}
C.asm.prototype={
a6(){return"NgmySlideAspectRatio."+this.b}}
C.v7.prototype={
a6(){return"NgmySlideShapeKind."+this.b}}
C.mQ.prototype={
a6(){return"NgmySlideLayout."+this.b}}
C.hJ.prototype={
a6(){return"NgmySlideTransition."+this.b}}
C.eP.prototype={
hR(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
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
u.n(0,"decoration",C.i71(v.z))
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
C.lX.prototype={
hR(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,eP>")
n=B.C(new B.N(n,new C.ck_(),m),m.k("ak.E"))
return C.rS(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ah(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.T(n).k("N<1,a8<m,@>>")
n=B.C(new B.N(n,new C.ck0(),m),m.k("ak.E"))
return B.H(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i7.prototype={
gbcd(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bk(v)},
gSX(){if(!C.kI(this.w))return!1
var w=this.gbcd()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d3(w.bU())},
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
q=B.T(r).k("N<1,lX>")
r=B.C(new B.N(r,new C.cjP(),q),q.k("ak.E"))
return C.C8(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.T(w).k("N<1,a8<m,@>>")
w=B.C(new B.N(w,new C.cjQ(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jW.prototype={}
C.b2W.prototype={
B(d){return B.cu(new C.cjV(this))}}
C.apo.prototype={
R(){return new C.blh(null,null)}}
C.blh.prototype={
gb0P(){var w,v=this,u=v.d
if(u===$){w=B.bm(null,A.fB,null,1,null,v)
w.cM(0)
v.d!==$&&B.bE()
v.d=w
u=w}return u},
t(){this.gb0P().t()
this.bxJ()},
B(d){return B.cb(this.gb0P(),new C.dOG(),this.a.c)}}
C.aMM.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.ae7.prototype={
Qu(d,e,f,g){return this.bS9(d,e,f,g)},
bS9(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Qu=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Qu)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.L(x.q).f
t.U(B.b3(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.eq,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Qu,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.L(A.c.j(0.08),A.r,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.ds,24)],x.V),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aX,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.de,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.am,B.d(o,v,n,A.a1,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.v(n,B.a([A.av,B.d(w.c,v,2,A.a1,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a7,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.d4)
n.push(B.B(B.a([B.E(new C.aeo(A.hU,"Download",A.c3,new C.eAi(w,d),!0,v),1),A.as,B.E(new C.aeo(A.uF,"Share",A.bl,new C.eAj(w,d),!1,v),1),A.as,B.E(new C.aeo(A.hD,"Safari",A.b1,new C.eAk(w,d),!1,v),1)],m),A.m,v,A.e,A.i,0,v,v))
n.push(A.aB)
n.push(B.bM(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eAl(d),v,v))
return B.bn(!0,new B.D(A.qo,B.x(B.a([B.p(v,B.x(n,A.ak,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(A.jf,v,t,u,s,v,A.n),v,v,v,v,A.GM,v,v,1/0)],m),A.m,v,A.e,A.P,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.aeo.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.L(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aI(!1,A.a2,!0,v,B.aO(!1,u,!0,B.eK(B.x(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.P,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bFP,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.b2U.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.art(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.ccm().alN(1.35)
s=B.ax_(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bDc(v)
if(i.e&&i.w!=null)q=B.aM(h,A.Y,!1,h,!0,A.t,h,B.aN(),i.w,A.bl,h,h,h,h,2,D.c1P,A.y,!0,h,!0,h,!1,i.x,A.aj,h,h,h,new B.bQ("slide_tf_"+g.a,x.W),h,A.x5,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.aa,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.Al,A.an,h,A.V0,h,h)
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
w=n?t.cN3(B.b1(g.Q).j(0.45),A.cD):t
p=g.as
l=m?1:h
k=m?A.eM:A.Ep
p=B.d(f,new B.bQ("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.US:s
$.S()
j=B.J()
j.b=A.a9
j.c=3*w
j.e=A.dQ
j.r=A.au.gp(0)
j=i.ctl(p,t,k,j)
k=g.r
w=new B.an(A.a_,h,A.ab,A.t,B.a([j,i.ctj(k,t,l?A.US:s)],x.p),h)}else w=i.ctk(p,t,g.k2?A.US:s,m)
v=new B.mI(w,new B.bQ("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aA(A.c6,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a3)}return new B.D(u,new B.bN(r,h,h,q,h),h)
case 1:case 4:return i.c0Q()
case 3:return i.ckU()
case 2:return B.b4(h,h,h,new C.b2R(g,h),A.fF)
case 5:g=g.r
return new C.b2T(g,!i.e&&i.z==null,h)}},
ccm(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jX
j=A.cD
break
case"shadow":v=o.d
e=B.a([new B.cW(D.ah7,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cW(l,A.I,6*v),new B.cW(l,A.I,16*v),new B.cW(l.j(0.8),A.I,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bs
w=A.au
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.n2
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cW(A.bE,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ar(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cW(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cW(A.b8,new B.u(-3*v,0),0),new B.cW(A.aw,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cW(A.cG,A.I,8*v),new B.cW(A.aw,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=A2.xR
break
case"ice":v=o.d
e=B.a([new B.cW(A.aJ,A.I,10*v),new B.cW(A.cw,A.I,22*v)],x.r)
k=A.U
w=A.eA
break
case"chalk":h=o.d
e=B.a([new B.cW(l.j(0.45),A.I,3*h)],x.r)
w=l
k=A.jX
break
case"comic":v=B.ar(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.d7D[q]
u.push(new B.cW(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cW(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.J()
v=o.d
f.sam(D.c4x.aA(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cW(A.LY,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.J()
v=o.d
f.sam(D.c4S.aA(0,new B.a3(0,0,0+900*v,0+m.w*v*1.6)))
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
e=B.a([new B.cW(l.j(0.45),new B.u(u,u),0),new B.cW(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jX
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b1(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aAQ(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.f7J.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cjT(h)
v=r.k2?C.ijX(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eM:A.Ep
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Yv(B.cT(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
ctl(d,e,f,g){return this.aAQ(d,e,f,!1,g)},
ctj(d,e,f){return this.aAQ(d,e,f,!1,null)},
ctk(d,e,f,g){return this.aAQ(d,e,f,g,null)},
bDc(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a5}},
c0Q(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bK
return B.at(B.X(s.b===D.lm?A.HG:A.Cj,A.aC,t,t,t,32),t,t,t)}w=u.bGg(r)
if(s.b===D.lm){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.L(A.cq,A.r,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dC,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aPJ(r,!0)
return C.fMD(s.go,v,s.id)}return w},
aPJ(d,e){var w,v,u,t
try{w=C.ikh(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c9(u,"_bg")
u=B.cu(new C.cjS(this,w,v,e))
return u}catch(t){return D.aeA}},
bGg(d){return this.aPJ(d,!1)},
ckU(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.bbE
return C.ikz(v,w.db,w.dx)}}
C.b2R.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.J(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.J()
w.r=B.b1(f.ch).gp(0)
w.b=A.a9
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a3(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aQ(s,g)
d.aQ(s,w)
break
case 1:d.dQ(s,g)
d.dQ(s,w)
break
case 2:r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aY(u/2,0))
r.D(new B.aq(u,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.aK(r,g)
d.aK(r,w)
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
d.aK(r,g)
d.aK(r,w)
break
case 4:h=t/2
w.c=v+2
d.bo(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aF(h.r,A.ag,i,i,B.a([],x.v))
r.D(new B.aY(q,0))
r.D(new B.aq(u,0))
r.D(new B.aq(u-q,t))
r.D(new B.aq(0,t))
r.D(new B.bt())
d.aK(r,g)
d.aK(r,w)
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
d.aK(r,g)
d.aK(r,w)
break}},
av(d){return d.b!==this.b}}
C.aKh.prototype={
R(){return new C.bwD(null,null)}}
C.bwD.prototype={
Z(){var w,v=this
v.a3()
w=B.bm(null,A.hz,null,1,null,v)
w.cM(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzY()},
aPU(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c4(B.at(B.d(d,w,w,w,w,w,w,A.de,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a9(A.a5,A.a8,A.x,v,w,w),A.n),A.bh)},
bDq(){var w,v=this,u=null,t=v.aPU("Slide A",A.bl),s=v.aPU("Slide B",A.b1)
if(v.a.c===D.co)return new B.an(A.a_,u,A.b3,A.t,B.a([t,B.at(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.U,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.cb(w,new C.feU(v,s,t),u)},
B(d){return this.bDq()}}
C.aL_.prototype={
jr(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
k8(d){return d.b!==this.b}}
C.VK.prototype={
R(){return new C.blt(null,null)}}
C.blt.prototype={
Z(){var w,v,u=this
u.a3()
w=B.bm(null,A.BR,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.co){w.sp(0,1)
return}B.bP(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.e_g(u),x.a)},
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
else B.bP(B.dA(0,0,0,v.c.fr+v.f*120,0,0),new C.e_f(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bxY()},
B(d){var w,v=this.a
if(v.c.dy===D.co||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.cb(w,new C.e_e(this),v.d)}}
C.Ji.prototype={
B(d){return B.cu(new C.cjL(this))}}
C.aAX.prototype={
R(){return new C.bfN()}}
C.bfN.prototype={
Z(){this.a3()
if(this.a.c!==D.co)B.bP(A.Nt,new C.ddl(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.co)n=B.at(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.U,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ap(p,new C.VK(C.ew(A.bj,!1,4279310375,A.aF,"",4294538006,24,A.bp,A.a7,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bi,o,2,"",0,0,"",u,D.fc,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cd,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bQ("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ew(A.bj,!1,4294967295,A.aF,"",4280640491,22,A.bp,A.a7,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bi,o,2,"Element flies in",0,0,"",q.a.c,D.cV,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.a_,p,A.ab,A.t,B.a([w,B.ap(32,new C.VK(t,B.p(p,D.fHN,A.f,p,p,new B.o(s,p,B.L(A.aX,A.r,1),r,p,p,A.n),p,p,p,p,A.jj,p,p,1/0),!0,1,new B.bQ("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c4(n,D.b6L,A.bh)}}
C.a8t.prototype={
R(){return new C.bm9(null,null)}}
C.bm9.prototype={
gb1q(){var w=this.a
if(w.e)w=D.f7T.q(0,w.c)||D.aRY.q(0,A.d.gI(this.a.c.split("@")))
else w=!1
return w},
Z(){var w,v=this
v.a3()
if(v.gb1q()){w=C.iiA(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bm(null,B.dA(0,0,0,w,0,0),null,1,null,v)
w.cM(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.byt()},
B(d){var w,v=this,u=v.d
if(!v.gb1q()||u==null)return v.a.d
w=v.a
return B.cb(u,new C.enF(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b0Q.prototype={
B(d){var w=null
return B.at(C.b2V(!0,w,!1,C.ew(A.K,!1,this.e.l(),A.aF,"",4280640491,this.f,A.bp,A.a7,"",0.2,"fx",w,"","",0,!1,"",0,D.bi,4280172719,2,"Aa",0,0,this.c,D.co,D.cV,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bh0.prototype={
jr(d){return C.a3b(this.b,new B.a3(0,0,0+d.a,0+d.b).cr(-this.c))},
k8(d){return d.b!==this.b||d.c!==this.c}}
C.bsa.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a3(0,0,0+a1.a,0+a1.b).cr(-this.d),g=this.b,f=C.a3b(g,h),e=a1.gdE(),d=new C.f3M()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.sam(D.aTt.aA(0,h))
a0.aK(f,w)
g=C.a3b(g,h.cr(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bst.gp(0)
a0.aK(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.sam(D.fi8.aA(0,h))
a0.aK(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hj(A.G,e*0.04)
a0.aK(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aK(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.sam(D.fi6.aA(0,h))
a0.aK(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aK(f,w)
g=C.a3b(g,h.cr(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aK(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hj(A.G,e*0.035)
a0.aK(f,g)
g=d.$1(e*0.016)
g.r=A.p6.gp(0)
a0.aK(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.sam(D.fi1.aA(0,h))
a0.aK(f,w)
w=C.a3b(g,h.cr(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.bfu.gp(0)
a0.aK(w,v)
g=C.a3b(g,h.cr(e*0.03))
v=d.$1(e*0.004)
v.r=D.biw.gp(0)
a0.aK(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.sam(D.aTt.aA(0,h))
a0.aK(f,g)
for(g=B.xz(f),w=B.a([],x.X),g=new B.rs(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jE(y.M));--q
g.ii()
p=w[q].b
p===$&&B.c()
o=A.o.E(A.k.bf(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.ii()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.ii()
m=w[q].Hj(p*n/o).a
l=D.d4L[A.o.F(n,4)]
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
g.sam(D.fia.aA(0,h))
g.z=new B.hj(A.G,e*0.03)
a0.aK(f,g)
g=d.$1(e*0.018)
g.sam(D.fi7.aA(0,h))
a0.aK(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aK(f,w)
g=C.a3b(g,h.cr(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.o1.gp(0)
a0.aK(g,w)
break}},
av(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btd.prototype={
a4(d,e){d.Gg(C.a3b(this.b,new B.a3(0,0,0+e.a,0+e.b).cr(-this.c)),A.w,e.gdE()*0.05,!1)},
av(d){return d.b!==this.b||d.c!==this.c}}
C.aN_.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.aNu.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.aOO.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.a8M.prototype={}
C.Oy.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aFO(B.a([],x.D),B.a([],w),B.a([],w),B.U(v,u),B.U(v,x.bo),B.U(v,u),B.aV(v),null,null)},
ge2(){return this.c},
gUh(){return this.r},
gUi(){return this.w},
gM9(){return this.x}}
C.aFO.prototype={
Z(){var w,v=this
v.a3()
$.aW.c1$.push(v)
C.fRC()
$.hAR=new C.eGw(v)
w=B.bm(null,A.BO,null,1,null,v)
w.fp(0,!0)
v.fy!==$&&B.aQ()
v.fy=w
v.IQ()},
bz(d){var w,v,u=this
u.bH(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.P_(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.IQ()}},
ji(d){if(d===A.AR||d===A.tD||d===A.tC||d===A.pR)this.u_()},
t(){var w,v,u,t=this
$.aW.hV(t)
w=t.at
if(w!=null)w.a2(0)
t.u_()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.du(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bO(0)
v.hj()}for(w=t.cx,w=new B.du(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.byG()},
gacs(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPj(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
acY(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gSX())return!1
return!0},
kv(){return this.acY(null)},
ajQ(){var w=this.c
if(w==null)return
w.L(x.q).f.U(D.fgp)},
qH(){if(!this.kv())return!1
this.ajQ()
return!0},
asm(d){var w,v,u,t,s,r=this
if(r.acY(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hzY(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
A7(){return this.asm(null)},
IQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$IQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aso(k),$async$IQ)
case 3:j=e
w=4
return B.b(C.aqW(k),$async$IQ)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.h6t(j,t.c3N())
w=t.gacs()?5:7
break
case 5:r=t.gPj()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.b13(r),$async$IQ)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bs(s,new C.eCU())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c6(s,0,q)}case 9:w=6
break
case 7:A.d.bs(s,new C.eCV())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.z_(m==null?"":m)!=null)continue
C.fRO(n,s)
p=!0}t.m(new C.eCW(t,s))
if(p||s.length>J.ad(j))t.u_()
case 1:return B.h(u,v)}})
return B.i($async$IQ,v)},
c3N(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kI(w)&&w!==q}if(w)p.push(r)
return p},
crL(d){var w,v=this,u=d.w
if(!C.kI(u)||u==="hati_kiapo_uongozi")return
v.abh(d)
w=A.d.bg(v.d,new C.eEu(d))
u=v.d
if(w>=0){u[w]=d.hR()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c6(u,0,d.hR())
v.db=!1},
clQ(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kI(s)&&s!=="hati_kiapo_uongozi"}if(s)u.crL(t)
s=u.d
w=B.T(s)
v=w.k("cP<1,i7>")
s=B.C(new B.cP(new B.Y(s,new C.eEi(),w.k("Y<1>")),new C.eEj(),v),v.k("M.E"))
return s},
P_(d){return this.bSA(d)},
u_(){return this.P_(null)},
bSA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$P_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.clQ()
w=3
return B.b(C.WD(d==null?t.a.c:d,s),$async$P_)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.asm(r)?4:5
break
case 4:w=6
return B.b(C.a8_(r),$async$P_)
case 6:q=r.x
p=A.a.i(q==null?t.gPj():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bg(t.d,new C.eCh())
q=t.d
if(o>=0)q[o]=r.hR()
else A.d.c6(q,0,r.hR())
case 5:case 1:return B.h(u,v)}})
return B.i($async$P_,v)},
pF(){var w,v=this,u=v.at
if(u!=null)u.a2(0)
u=v.e
w=(u==null?null:C.kI(u.w))===!0?A.h5:A.lE
v.at=B.cD(w,new C.eFC(v))},
b0Q(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.afU(u.hR(),v.f,v.r))
if(w.length>40)A.d.cz(w,0)
A.d.aa(v.ay)},
cFz(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.afU(w.e.hR(),w.f,w.r))
w.m(new C.eGs(w,v.pop()))
w.pF()},
cqR(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.afU(w.e.hR(),w.f,w.r))
w.m(new C.eEs(w,v.pop()))
w.pF()},
ov(){var w,v,u=this
if(u.e==null)return
w=A.d.bg(u.d,new C.eGf(u))
if(w>=0){u.d[w]=u.e.hR()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
Yo(d){var w,v,u,t,s=this.gdA()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xP(){var w,v,u,t
for(w=this.ch,v=new B.du(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.aa(0)
for(w=this.CW,v=new B.du(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bO(0)
u.hj()}w.aa(0)},
KA(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdA()
if(l==null)return
w=l.z
v=B.T(w)
u=v.k("cP<1,m>")
t=B.dh(new B.cP(new B.Y(w,new C.eGg(),v.k("Y<1>")),new C.eGh(),u),u.k("M.E"))
w=this.ch
v=B.a6(w).k("cy<1>")
v=B.C(new B.cy(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bO(0)
p.hj()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cV)continue
p=n.a
m=w.c3(0,p,new C.eGi(n))
s.c3(0,p,new C.eGj())
p=m.a.a
o=n.r
if(p!==o)m.saZ(0,o)}},
I9(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b_(u.d,new C.eBG(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPj()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c6(u.d,0,u.e.hR())}u.ov()
u.pF()},
akb(d,e){var w,v,u,t,s=this
if(s.kv())return
w=s.Yo(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kI(v.w))===!0
if(u){C.iiE(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdA()
if(t!=null)C.iiF(t,w.d+w.f*0.5)}}s.I9()
s.ov()
s.pF()
if(u&&s.c!=null)s.m(new C.eGt())},
cGD(d,e){var w=this,v=w.gdA()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.I9()
w.ov()
w.pF()},
gdA(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.E(this.f,0,w.length-1)]},
gqL(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.igG(o)
if(w!=null)return w
v=q.gdA()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gI(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c14(v)
t=q.c13(v)
s=B.b1(v.e)
r=v.f
return new C.jW(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.hTS(o)},
c14(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cV)s=t.w>=28||A.o.E(A.o.ao(t.x.a,100)-1,0,8)>=A.o.E(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.O},
c13(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cV&&t.w<28)return B.b1(t.Q)}return A.aK},
ag9(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gacs()){w.c.L(x.q).f.U(D.ff0)
return}w.abh(d)
w.b27(C.bEp(d))
return}if(C.ckD(v)){w.abh(d)
w.b27(d)
return}w.m(new C.eDB(w,d))},
asV(){var w,v,u,t,s,r,q=this
q.a32(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kI(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eBE(q))
if(r&&q.c!=null){u.toString
q.K9(u,s)}return}q.u_()
q.m(new C.eBF(q))},
b26(d){this.abh(d)
this.a0v(d,!0)},
abh(d){if(!C.kI(d.w))return
C.fRO(d,this.d)},
a0v(d,e){return this.chJ(d,e)},
b27(d){return this.a0v(d,!1)},
chJ(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0v=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bEp(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPj():r)
t.dy.W(0,q.toLowerCase())
C.aqX(t.a.c,q)}r=s}else r=d
w=C.ckD(r.w)?3:4
break
case 3:w=5
return B.b(t.abi(r),$async$a0v)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b_(t.d,new C.eDY(l))
o=l.a.hR()
n=C.kI(o.w)&&C.ijS(o)
t.m(new C.eDZ(t,o,p))
if(n){m=A.d.bg(t.d,new C.eE_(o))
if(m>=0){t.d[m]=o.hR()
t.u_()}}if(!t.acY(l.a))t.Zz()
r=!1
if(t.c!=null)if(!t.acY(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.asm(r)&&C.fNO(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.U(D.ffB)
case 1:return B.h(u,v)}})
return B.i($async$a0v,v)},
abi(d){return this.bQD(d)},
bQD(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lv(r.c,A.A2),$async$abi)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.l8(!1,r,s.c,s.d,null,A.A2,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abi,v)},
oj(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ckD(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.ck2(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oj,v)},
afR(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ch(null,null,!1,null,new C.eDA(),s,null,!0,!0,x.H),$async$afR)
case 3:if(t.c==null){w=1
break}t.asV()
case 1:return B.h(u,v)}})
return B.i($async$afR,v)},
afQ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$afQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ch(null,null,!1,null,new C.eDx(),s,null,!0,!0,x.H),$async$afQ)
case 3:if(t.c==null){w=1
break}t.m(new C.eDy())
t.asV()
case 1:return B.h(u,v)}})
return B.i($async$afQ,v)},
Zz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Zz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.az(),$async$Zz)
case 3:r=e
if(B.k_(J.r(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Zz)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fdB)
case 1:return B.h(u,v)}})
return B.i($async$Zz,v)},
K9(d,e){return this.csa(d,e)},
csa(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$K9=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahj(s,t.gEN(),t.gEM(),!0,e,t.d),$async$K9)
case 9:w=4
break
case 6:w=10
return B.b(C.ahk(s,t.gEN(),t.gEM(),!0,e,t.d),$async$K9)
case 10:w=4
break
case 7:w=11
return B.b(C.ahl(s,t.gEN(),t.gEM(),!0,e,t.d),$async$K9)
case 11:w=4
break
case 8:w=12
return B.b(C.ahm(s,t.gEN(),t.gEM(),!0,e,t.d),$async$K9)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$K9,v)},
c2C(){var w,v,u,t,s=this
if(!s.gacs()){s.c.L(x.q).f.U(D.fdO)
return}w=s.gPj()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ahi(u,t,v,new C.eCQ(s),new C.eCR(s),w)},
aga(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aga=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bV(A.dP,null,new C.eDH(u),s,!0,!0,!1,A.lP,!1,!1,x.N),$async$aga)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahm(s,u.gEN(),u.gEM(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahj(s,u.gEN(),u.gEM(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahk(s,u.gEN(),u.gEM(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahl(s,u.gEN(),u.gEM(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.c2C()
return B.h(null,v)}})
return B.i($async$aga,v)},
cgP(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b0Q()
w=C.cG()
v=C.C8(t,t,t,t,D.DK,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eDI(u,v))},
aaH(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aaH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qH()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ior(s),$async$aaH)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cJ(q.r,new C.eBI())
t.d8(new C.eBJ(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aaH,v)},
ai9(d,e,f,g){var w=null,v=g?A.dr:A.bN,u=B.L(g?A.aX:A.cq,A.r,1)
return B.hf(B.aA(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a3),w,e,w,w)},
a0u(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0u=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qH()){w=1
break}s=t.kb()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.T(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eDT(),q),q.k("M.E"))}o=s!=null&&s.b===D.lO?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.U(D.ffM)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.eDU(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0u)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0u,v)},
agr(){return this.chI()},
chI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$agr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qH()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iod(s,t.f+1,o),$async$agr)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Y
q=B.jU(s,B.T(s).c)
p.a=A.d.bg(o.r,new C.eDW(q))
t.d8(new C.eDX(p,t,o,q,r))
t.c.L(x.q).f.U(D.fga)
case 1:return B.h(u,v)}})
return B.i($async$agr,v)},
agy(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$agy=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qH()||!t.A7()){w=1
break}s=t.gdA()
if(s==null){w=1
break}r=s.z
q=B.T(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eEd(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.U(D.fdm)
w=1
break}o=new B.N(p,new C.eEe(),B.T(p).k("N<1,I>")).f6(0,new C.eEf())
r=B.U(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.bb(l,A.b4,A.aO),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bV(A.L,null,new C.eEg(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$agy)
case 3:for(r=new B.du(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eEh())
case 1:return B.h(u,v)}})
return B.i($async$agy,v)},
agd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qH()){w=1
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
return B.b(C.hC5(s,new C.F2(r,q,p,o==null?"":o)),$async$agd)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d8(new C.eDJ(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.ahI(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agd,v)},
abb(){return this.bPV()},
bPV(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abb=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qH()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ioq(s,t.f+1,l),$async$abb)
case 3:r=e
q=$.ha8
$.ha8=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d8(new C.eBZ())
t.c.L(x.q).f.U(D.fdd)
w=1
break}if(!q){s=r.CW
s=C.hAP(l,s==null?"":s,!1)}else s=!1
if(s){t.d8(new C.eC_(t,l,r))
t.c.L(x.q).f.U(D.fgE)
w=1
break}s=l.cx
if(s==null)s=A.Y
p=B.jU(s,B.T(s).c)
s=l.r
m.a=A.d.bg(s,new C.eC0(p))
o=s.length
t.d8(new C.eC1(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abb,v)},
aS1(d,e){if(e){this.ah0()
return}this.cgP(d,!1)},
bLp(){return this.aS1(null,!1)},
ah0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bV(A.c2,null,new C.eEn(t),r,!0,!0,!0,A.pC,!1,!1,x.N),$async$ah0)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eEo(t,C.igF(s).pS()))
case 1:return B.h(u,v)}})
return B.i($async$ah0,v)},
d8(d){var w=this
if(w.qH())return
w.I9()
w.b0Q()
w.m(d)
w.KA()
w.ov()
w.pF()},
a9b(){this.d8(new C.eAD(this,D.mX))},
aTv(){var w=this.gdA()
if(w==null)return
this.d8(new C.eBX(this,w))},
aSD(){var w=this.e
if(w==null||w.r.length<=1)return
this.d8(new C.eBV(this))},
b51(d,e){if(this.e==null||d===e)return
this.d8(new C.eEw(this,d,e))},
Ow(d){return this.bNr(d)},
bNr(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Ow=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gPj():s)
w=5
return B.b(C.aqV(t.a.c,r),$async$Ow)
case 5:t.dy.M(0,r.toLowerCase())
case 4:s=d.a
C.asq(s)
w=6
return B.b(C.b2Z(t.a.c,s),$async$Ow)
case 6:if(t.c==null){w=1
break}t.m(new C.eBR(t,d))
w=7
return B.b(t.u_(),$async$Ow)
case 7:case 1:return B.h(u,v)}})
return B.i($async$Ow,v)},
cs7(d,e){var w=this
if(d.z){w.ajQ()
return}w.m(new C.eEv(w,d,e))
w.pF()},
kb(){var w,v,u,t,s,r=this.gdA()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Xo(d){return this.ch.c3(0,d.a,new C.eBH(d))},
auN(d){return this.CW.c3(0,d.a,new C.eCi())},
a32(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Yo(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.al$.d.c
if(u!=null)u.jp()},
b8x(){return this.a32(!0)},
a2Z(d){var w,v,u=this
if(u.qH())return
if(!u.A7())return
w=u.Yo(d)
if(w==null||w.b!==D.cV)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Xo(w).saZ(0,"")}u.m(new C.eGd(u,d))
$.aW.x1$.push(new C.eGe(u,d,w))},
b95(d){var w=this
if(d.b===D.cV&&!w.kv()&&w.A7()){w.a2Z(d.a)
return}w.aBg(d.a)},
aBg(d){var w,v,u,t,s,r=this
if(r.kv())return
w=r.r
if(w!=null&&w!==d){v=r.Yo(w)
if(v!=null&&v.b===D.cV){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eFD(r,s,d))
if(s||d==null){t=$.aW.al$.d.c
if(t!=null)t.jp()}},
aOf(){this.d8(new C.eAE(this))},
pl(d){return this.bCt(d)},
bCt(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oj(),$async$pl)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d8(new C.eAB(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pl,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hc(78,1920),$async$Wu)
case 3:s=e
if(s==null||t.gdA()==null){w=1
break}t.d8(new C.eAr(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
Wo(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wo=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdA()==null){w=1
break}w=3
return B.b(T.Dk(t.a.c),$async$Wo)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gan(s)){t.c.L(x.q).f.U(D.fhd)
w=1
break}w=r.gK(s)===1?4:6
break
case 4:q=r.gI(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bV(null,null,new C.eAo(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Wo)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdA()==null){w=1
break}t.d8(new C.eAp(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Wo,v)},
atL(){var w=this,v=w.r
if(v==null||w.gdA()==null)return
if(A.d.b_(w.gdA().z,new C.eBT(v))){w.c.L(x.q).f.U(D.fge)
return}if(w.w===v)w.a32(!0)
w.d8(new C.eBU(w,v))},
bJG(){var w=this.kb(),v=w==null
if((v?null:w.b)===D.fc)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cV)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aOY(d,e){var w=this,v=w.kb(),u=w.gdA(),t=w.e
if(t==null)return
w.d8(new C.eB5(w,v,d,e,t,u))},
bE3(d){return this.aOY(d,null)},
a9t(d){return this.bEb(d)},
bEb(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a9m.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oj(),$async$a9t)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kb()
if(s!=null){r=s.b
if(r===D.cV)t.bE3(s.w>=28||s.x.gdP(0)>=A.H.gdP(0)?d.d:d.e)
else if(r===D.fc){r=d.c
t.aOY(r.j(0.88),r)}w=1
break}t.d8(new C.eBa(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9t,v)},
a9s(d){return this.bE9(d)},
bE9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9s=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kb()
r=t.gdA()
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
return B.b(t.oj(),$async$a9s)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d8(new C.eB8(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9s,v)},
bDU(d){var w=this.gdA()
if(w==null)return
this.d8(new C.eB4(this,w,d))},
a0A(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a0A=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iom(r),$async$a0A)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.ov()
t.m(new C.eE7(t,s))
w=4
return B.b(t.u_(),$async$a0A)
case 4:if(t.c!=null)t.ag9(s)
case 1:return B.h(u,v)}})
return B.i($async$a0A,v)},
ab2(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$ab2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a32(!0)
t.ov()
s=t.c
s.toString
w=3
return B.b(C.RT(s,q),$async$ab2)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ab2,v)},
DV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$DV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.ov()
t=4
w=7
return B.b(C.aRB(m),$async$DV)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aR1(o,q,m.b),$async$DV)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ab(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$DV,v)},
FB(d,e){return this.cEX(d,e)},
cEX(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FB=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qH()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a32(!0)
t.ov()
s=h.a=t.e.hR()}else{r=A.d.bg(t.d,new C.eGm(d))
s=h.a=r>=0?t.d[r].hR():d.hR()}s=s.w
q=s==null
p=C.ihD(q?"":s)
o=C.hzK(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.T(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eGn(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cy4(n.length,o,s),$async$FB)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ihx(h.a)
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
return B.b(t.cy3(n,o),$async$FB)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fG(t.d,new C.eGo(s))
s=h.a.b
w=11
return B.b(t.cy1(k.b,s),$async$FB)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hR()
case 5:j=C.ihC(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.U(D.fhp)
w=1
break}w=12
return B.b(t.cy2(j.a,s,o,j.c),$async$FB)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eGp(h,t,i))
t.pF()
case 1:return B.h(u,v)}})
return B.i($async$FB,v)},
cy4(d,e,f){var w=this.c
w.toString
return B.bV(A.L,null,new C.eFT(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cy3(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eFS(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cy1(d,e){var w=this.c
w.toString
return B.bV(A.L,null,new C.eFM(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cy2(d,e,f,g){var w=this.c
w.toString
return B.bV(A.L,null,new C.eFO(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acw(){var w=null
return B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
acx(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.ar(d,A.c2,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.ds,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a9(A.az,A.aE,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.es,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fsn,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a7,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.i,0,A.p),1)],v),A.E,u,A.e,A.i,0,u,u)},
aWP(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.L(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a1,w,w,w,A.VC,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aWS(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a9(A.az,A.aE,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.L(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.n5,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a7,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.i,0,A.p),1),B.X(A.yX,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bD,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eCM(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
c_Z(d,e,f,g,h,i){return this.aWS(d,e,f,!1,g,h,i)},
aw7(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.L(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.de,w,w,w),A.bF,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a0k,w,w,w)},
aWR(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cm,w,new B.b8(B.n(14),A.a0),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.nM,w,w,w),w,new C.eCL(d,f),v)},
aWQ(d,e){return this.aWR(d,e,null)},
Kr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$Kr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pr(l,s.c,s.d),$async$Kr)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aJ("=",l.length)+"\n\n"
q=new B.fi(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.eR(l,new C.eFE());n.C();){m=l.gS(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.aaF(l.charCodeAt(0)==0?l:l,r.b),$async$Kr)
case 4:l=t.a
w=5
return B.b(B.pq(l.c,l.d),$async$Kr)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Kr,v)},
Iv(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Iv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pr(q,s.c,s.d),$async$Iv)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.aaF(A.X.aq(r.ah(),null),r.b+".json"),$async$Iv)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.d),$async$Iv)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Iv,v)},
b8g(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.ov()
u.u_()
w=u.c
w.toString
v=B.ej(new C.eGc(u,t),!1,null,x.z)
B.a5(w,!1).cc(v)},
HJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oj(),$async$HJ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fS0(),$async$HJ)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.ikt(s.a)
q=t.c
q.toString
w=5
return B.b(B.bV(A.au,null,new C.eAw(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HJ)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d8(new C.eAx(t,s))
w=1
break}if(p==="split")t.d8(new C.eAy(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HJ,v)},
NT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qH()){w=1
break}w=3
return B.b(t.oj(),$async$NT)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aRA(s,null,null),$async$NT)
case 4:r=e
if(r==null||t.gdA()==null){w=1
break}t.d8(new C.eAC(t,r))
case 1:return B.h(u,v)}})
return B.i($async$NT,v)},
b4O(d){var w=this.e
if(w==null||!C.kI(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aQh(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aRA(s,t==null?null:B.b1(t),u)},
a99(d){return this.bCk(d)},
bCk(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a99=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qH()){w=1
break}if(!t.A7()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fhE)
w=1
break}w=3
return B.b(t.aQh(),$async$a99)
case 3:r=f
if(r==null||t.gdA()==null){w=1
break}t.d8(new C.eAt(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a99,v)},
ahK(d){return this.cqU(d)},
cqU(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qH()){w=1
break}if(!t.A7()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.fgM)
w=1
break}w=3
return B.b(t.aQh(),$async$ahK)
case 3:r=f
if(r==null||t.gdA()==null){w=1
break}t.d8(new C.eEt(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ahK,v)},
cdw(){var w,v,u=this
if(u.kv())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bF(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cDZ()}},
cDZ(){var w,v,u,t,s,r=this.gdA()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d8(new C.eGk(this,r,(A.o.aD(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c0j(){var w,v,u,t,s,r=this.gdA()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d8(new C.eCP(this,r,u.d))},
c55(d){var w
if(this.kv())return!1
w=this.e
if((w==null?null:C.kI(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fOz(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lm&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c56(d){var w
if(this.kv())return!1
w=this.e
if((w==null?null:C.kI(w.w))!==!0)return!0
if(!this.A7())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fOz(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.lm&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
O0(d){return this.bEB(d)},
bEB(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$O0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qH()){w=1
break}if(!t.A7()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(D.ffC)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.aqZ(p),$async$O0)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.U(D.fgg)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gI(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a8_(r)
w=1
break}t.m(new C.eBe(t,d,o))
t.ov()
$.aW.x1$.push(new C.eBf(t))
case 1:return B.h(u,v)}})
return B.i($async$O0,v)},
Ws(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ws=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oj(),$async$Ws)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bF5(),$async$Ws)
case 4:s=e
if(s==null||t.gdA()==null){w=1
break}t.d8(new C.eAq(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Ws,v)},
OL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oj(),$async$OL)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kb()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fRS(r),$async$OL)
case 4:q=e
if(q==null){w=1
break}t.d8(new C.eCg(s,q))
case 1:return B.h(u,v)}})
return B.i($async$OL,v)},
jg(d){this.d8(new C.eAz(this,d))},
qw(d){return this.bDN(d)},
bDN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qw=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qH()){w=1
break}m=!D.aS0.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oj(),$async$qw)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HJ()
w=1
break A
case"sign_paper":t.NT()
w=1
break A
case"hd_photo":t.Ws()
w=1
break A
case"sharpen":t.OL()
w=1
break A
case"print":t.DV()
w=1
break A
case"rotate":s=t.kb()
if(s!=null)t.d8(new C.eAI(s))
w=1
break A
case"text_box":t.aOf()
w=1
break A
case"picture":t.Wu()
w=1
break A
case"present":t.b8g()
w=1
break A
case"new_slide":t.a9b()
w=1
break A
case"export_json":t.Iv()
w=1
break A
case"outline_share":t.Kr()
w=1
break A
case"flashcard_tool":t.vz(D.J8)
w=1
break A
case"quiz_tool":t.vz(D.J9)
w=1
break A
case"worksheet_tool":t.vz(D.Ja)
w=1
break A
case"duplicate_el":s=t.kb()
if(s==null){w=1
break A}t.d8(new C.eAJ(t,s))
w=1
break A
case"delete_el":t.atL()
w=1
break A
case"bring_fwd":s=t.kb()
if(s==null||t.gdA()==null){w=1
break A}t.d8(new C.eAK(t,s))
w=1
break A
case"send_back":s=t.kb()
if(s==null||t.gdA()==null){w=1
break A}t.d8(new C.eAV(t,s))
w=1
break A
case"align_left":s=t.kb()
if(s!=null)t.d8(new C.eAY(s))
w=1
break A
case"align_center":s=t.kb()
if(s!=null)t.d8(new C.eAZ(s))
w=1
break A
case"align_right":s=t.kb()
if(s!=null)t.d8(new C.eB_(s))
w=1
break A
case"grayscale":case"brighten":t.OL()
w=1
break A
case"flip_h":s=t.kb()
if(s!=null)t.d8(new C.eB0(s))
w=1
break A
case"flip_v":s=t.kb()
if(s!=null)t.d8(new C.eB1(s))
w=1
break A
case"rectangle":t.pl(D.bi)
w=1
break A
case"circle":t.pl(D.eT)
w=1
break A
case"triangle":t.pl(D.k5)
w=1
break A
case"arrow":t.pl(D.DM)
w=1
break A
case"line":case"divider":t.pl(D.fD)
w=1
break A
case"word_count":r=t.gdA()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.eR(q,new C.eB2()),o=0;p.C();){n=A.a.ft(A.a.i(q.gS(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eB3(),B.T(n).k("Y<1>")).gK(0)}t.c.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cG()
t.jg(C.j5(A.K,!1,t.gqL().d.l(),A.aF,40,A.bp,A.u,0.18,q,"Presentation Title",0,D.mY,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cG()
t.jg(C.j5(A.K,!1,t.gqL().e.l(),A.aF,22,A.bp,A.a7,0.12,q,"Subtitle goes here",0,D.dh,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jg(C.j5(A.bj,!0,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cG(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.v6,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jg(C.j5(A.bj,!1,4279310375,A.aF,20,A.bp,A.a7,0.5,C.cG(),"1. First item\n2. Second item\n3. Third item",0,D.v5,0.8,0.1,0.22))
w=1
break A
case"quote":t.jg(C.j5(A.K,!1,4279310375,A.aF,24,A.cD,A.a7,0.25,C.cG(),'"Insert meaningful quote here."',0,D.dh,0.8,0.1,0.3))
w=1
break A
case"citation":t.jg(C.j5(A.bj,!1,4284773515,A.aF,14,A.bp,A.a7,0.1,C.cG(),"Author, Title (Year). Publisher.",0,D.v6,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jg(C.j5(A.dV,!1,4279310375,A.aF,14,A.bp,A.a7,0.08,C.cG(),C.bF7(),0,D.dh,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jg(C.j5(A.dV,!1,4279310375,A.aF,13,A.bp,A.a7,0.06,C.cG(),"Page "+(t.f+1),0,D.dh,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d8(new C.eAL(t))
w=1
break A
case"footer_bar":t.d8(new C.eAM(t))
w=1
break A
case"highlight":t.d8(new C.eAN(t))
w=1
break A
case"redact":t.d8(new C.eAO(t))
w=1
break A
case"callout":t.d8(new C.eAP(t))
w=1
break A
case"checkboxes":t.jg(C.j5(A.bj,!1,4279310375,A.aF,20,A.bp,A.a7,0.45,C.cG(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dh,0.8,0.1,0.2))
w=1
break A
case"table":t.jg(C.j5(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.55,C.cG(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dh,0.8,0.1,0.18))
w=1
break A
case"memo":t.d8(new C.eAQ(t))
w=1
break A
case"letter":t.jg(C.j5(A.bj,!1,4279179050,A.aF,17,A.bp,A.a7,0.82,C.cG(),C.bF7()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jg(C.j5(A.bj,!1,4279310375,A.aF,22,A.bp,A.U,0.76,C.cG(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.v6,0.8,0.1,0.12))
w=1
break A
case"toc":t.jg(C.j5(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.76,C.cG(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dh,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jg(C.j5(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cG(),"Signature: _________________________",0,D.dh,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jg(C.j5(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.08,C.cG(),"Initials: ______",0,D.dh,0.3,0.65,0.78))
w=1
break A
case"approved":t.jg(C.j5(A.K,!1,4278556265,A.aF,28,A.bp,A.u,0.12,C.cG(),"APPROVED",0,D.mY,0.32,0.62,0.08))
w=1
break A
case"draft":t.jg(C.j5(A.K,!1,4292617766,A.aF,28,A.bp,A.u,0.12,C.cG(),"DRAFT",0,D.dh,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jg(C.j5(A.K,!1,871318596,A.aF,36,A.bp,A.u,0.12,C.cG(),"CONFIDENTIAL",0,D.dh,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d8(new C.eAR(t))
w=1
break A
case"progress":t.d8(new C.eAS(t))
w=1
break A
case"stars":t.jg(C.j5(A.K,!1,4279310375,A.aF,36,A.bp,A.a7,0.12,C.cG(),"\u2605\u2605\u2605\u2605\u2606",0,D.qQ,0.8,0.1,0.4))
w=1
break A
case"equation":t.jg(C.j5(A.K,!1,4279310375,A.aF,32,A.bp,A.U,0.14,C.cG(),"y = mx + b",0,D.dh,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jg(C.j5(A.K,!1,4279310375,A.aF,18,A.bp,A.a7,0.2,C.cG(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.v5,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d8(new C.eAT(t))
w=1
break A
case"compare":t.d8(new C.eAU(t))
w=1
break A
case"link_text":t.jg(C.j5(A.bj,!1,4280640491,A.n2,16,A.bp,A.a7,0.1,C.cG(),"https://example.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"phone":t.jg(C.j5(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.1,C.cG(),"(555) 123-4567",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"email":t.jg(C.j5(A.bj,!1,4280640491,A.aF,18,A.bp,A.a7,0.1,C.cG(),"name@email.com",0,D.dh,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d8(new C.eAW(t))
w=1
break A
case"cover_page":r=t.gdA()
if(r==null){w=1
break A}t.d8(new C.eAX(t,r))
w=1
break A
case"invoice":t.jg(C.j5(A.bj,!1,4279179050,A.aF,16,A.bp,A.a7,0.84,C.cG(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"resume":t.jg(C.j5(A.bj,!1,4279179050,A.aF,17,A.bp,A.a7,0.84,C.cG(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dh,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jg(C.j5(A.bj,!1,4279310375,A.aF,16,A.bp,A.a7,0.88,C.cG(),"MEETING MINUTES\nDate: "+C.bF7()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jg(C.j5(A.bj,!1,4279310375,A.aF,17,A.bp,A.a7,0.88,C.cG(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dh,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jg(C.j5(A.bj,!1,4279310375,A.aF,15,A.bp,A.a7,0.8,C.cG(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dh,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qw,v)},
cxw(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.f7P.q(0,this.z)},
cxv(d){if(this.kb()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b9Y(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.co,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bz
u=B.L(u,A.r,o&&e?2:1)
t=C.iki(d)
s=o?12:18
r=o?A.H:A.cR
if(o)if(e)q=f
else q=g?A.ac:A.al
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ap(p,B.p(p,D.Pu,A.f,p,p,D.F8,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fv,B.aA(p,new B.an(A.a_,p,A.ab,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a3),p)},
bQb(d){var w,v=null,u=this.kb()
if(u==null)return A.bK
w=B.a([A.ad,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aC:A.al,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.v(w,new B.N(D.S3,new C.eCf(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.i,0,v,v)},
vz(d){return this.bCs(d)},
bCs(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aRV.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oj(),$async$vz)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d8(new C.eAA(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vz,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.f6v
w=h.e
if(w==null)return h.bGm()
v=h.gdA()
v.toString
u=h.c
u.toString
t=B.R(u).ax.a===A.J
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
m=t?A.c2:D.bhT
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gSX()}else j=!1
if(j)k.push(new C.a8u(h.a.c,!1,h.e.gbcd(),h.gcdt(),g))
else if(s&&h.e!=null&&!h.kv()&&C.ckD(h.e.w)){j=h.a
k.push(new C.a8u(j.c,j.d,g,h.gceC(),g))}if(s)k.push(h.bQ6(w,t,r))
if(s&&h.kv()){w=t?A.fN:A.kJ
j=B.n(14)
i=B.L(A.bl.j(0.35),A.r,1)
k.push(B.p(g,B.B(B.a([D.bWq,A.ad,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fN,g,g,g,g,g,g,g,g,12,g,g,A.U,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.i,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yp,A.it,g,g,g))}w=!n
if(w&&!h.kv())k.push(h.c62(t,r))
if(w&&h.kv())k.push(h.cEY(t))
if(r&&h.kb()!=null&&w&&!h.kv())k.push(h.c5Y(t))
j=B.a([],l)
if(q&&w)j.push(new B.a4(132,g,h.b7G(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a4(g,72,h.b7G(t,!1),g))
i.push(B.E(new B.bN(A.b0,g,g,h.bHG(v,t,!s||p),g),1))
if(h.cxw(r)&&u&&s&&!h.kv())i.push(h.cdf(v,t,r))
j.push(B.E(B.x(i,A.m,g,A.e,A.i,0,A.p),1))
if(q&&!h.kv()&&h.cxv(!1))j.push(new B.a4(240,g,h.bSY(t),g))
k.push(B.E(B.B(j,A.ak,g,A.e,A.i,0,g,g),1))
if(u&&s)k.push(new B.a4(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.m,g,A.e,A.i,0,A.p)],l)
if(o&&r)w.push(h.c5Z(t))
return B.c6(g,m,B.bn(!1,new B.an(A.a_,g,A.ab,A.t,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bGm(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.R(p).ax.a===A.J
p=w?A.c2:A.bN
v=r.a.e
u=r.ccn(A.bl,A.qv,new C.eBi(r),r.gcgM(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aNY(A.bl,A.hT,"Blank Presentation",new C.eBj(r)),1),A.as,B.E(r.aNY(A.b1,A.uK,"Class Template",new C.eBk(r)),1)],t),A.m,q,A.e,A.i,0,q,q)
u=B.a([u,A.bx,s,A.n1,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aC:A.al,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ae],t)
t=r.d
if(t.length===0)u.push(r.bDf(w))
else{t=new B.i5(t,B.T(t).k("i5<1>"))
A.d.v(u,t.gdR(t).dH(0,new C.eBl(r,w),x.l))}return B.c6(q,p,B.bn(!1,B.cl(u,q,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bOe(){this.m(new C.eBW(this))
var w=this.c
w.toString
if(B.aG(w,A.bZ,x.w).w.a.a<900){w=$.aW.al$.d.c
if(w!=null)w.jp()}},
ags(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ags=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kb()==null){w=1
break}s=t.c
s.toString
s=B.R(s)
r=t.c
r.toString
w=3
return B.b(B.bV(A.L,null,new C.eE6(t,s.ax.a===A.J),r,!0,!0,!0,null,!1,!1,x.H),$async$ags)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ags,v)},
B6(d,e){return this.cxS(d,e)},
cxS(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$B6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.i3(D.YB,!0,"Dismiss",j,new C.eFF(),new C.eFG(d,e),A.iG,!0,x.N),$async$B6)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ajQ()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gSX()){r.ajQ()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aRB(d),$async$B6)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aR1(j,q,d.b),$async$B6)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ab(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FB(d,!1),$async$B6)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.i3(D.YB,!0,"Dismiss",j,new C.eFH(),new C.eFI(d),A.a2,!0,x.y),$async$B6)
case 20:if(g===!0)r.Ow(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ahu("Rename presentation",d.b),$async$B6)
case 24:l=g
if(l!=null)r.cs7(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ah()
k.n(0,"id",C.cG())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eFJ(r,k))
r.pF()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B6,v)},
b2L(d,e){var w=null
return B.bM(!1,D.fSa,w,w,!0,w,w,w,e,w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bl,w,w,w,A.ax,w,A.lG,w,w,w,w,w,A.kt,w,w))},
bDf(d){var w=this.fy
w===$&&B.c()
return B.cb(w,new C.eAF(this,d),null)},
bMk(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eBK(),x.dv).bZ(0,new C.eBL()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.akP,this.aOy(v,e,new C.eBM(),f),null)},
aOy(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ac:A.bt,n,n,n,10),A.qY],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.y(p,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.ca(A.aL,A.e,A.P,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bG(r,r,r,r),new B.bh(s,s,s,s),n,n,A.n),n,n,n,n,A.mN,n,n,n))
A.d.v(l,u)}return B.eO(A.a5,B.B(l,A.m,n,A.e,A.P,0,n,n),A.f,A.e3)},
bDd(d,e,f){return this.aOy(d,e,null,f)},
bMm(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dr3
else if(v==="hati_kuhoweya")w=D.dbD
else{if(v==="hati_kiapo_uongozi")v=D.cYn
else v=C.kI(v)?D.d57:A.RE
w=v}v=this.fy
v===$&&B.c()
return B.cb(v,new C.eBP(this,f,d,e,w),null)},
c5Z(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kb()
if(i==null||i.b!==D.cV)return A.bK
w=k.Xo(i)
v=k.auN(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.D(A.BY,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b2,B.bM(!1,D.fNC,j,j,!0,j,j,j,new C.eDf(k),j,j)],t),A.m,j,A.e,A.i,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.au:A.c
q=B.n(18)
p=B.L(A.bl.j(0.45),A.r,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h8,B.c4(new B.D(A.eS,B.aM(j,A.Y,!0,j,!0,A.t,j,B.aN(),w,A.bl,j,j,j,j,2,D.c1x,A.y,!0,j,!0,j,!0,v,A.aj,j,j,j,j,j,A.x5,j,j,j,j,j,j,!1,"\u2022",j,new C.eDg(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.aa,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.O,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.Al,A.an,j,A.V0,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bh),j),1)
q=B.n(16)
p=d?A.bo:A.c
o=B.L(d?A.aK:A.aN,A.r,1)
n=B.E(B.ci(B.B(B.a([k.ur(G.Ov,j,new C.eDh(k,i),d),k.ur(G.a1u,j,new C.eDi(k,i),d),k.ur(I.ap9,j,new C.eDj(k,i),d),k.ur(I.a2g,j,new C.eDk(k,i),d),k.ur(k.bDb(i.as),j,new C.eDl(k,i),d),k.ur(D.aqf,j,new C.eDm(k,i),d),k.ur(D.aqe,j,new C.eDn(k,i),d)],t),A.m,j,A.e,A.i,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.k.N(i.w)
return B.bT(0,B.aI(!1,A.a2,!0,j,B.x(B.a([s,r,new B.D(H.akY,B.p(j,B.B(B.a([n,A.ad,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aC:A.al,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.i,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lH,j,j,j),j)],t),A.m,j,A.e,A.i,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c5Y(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kb()
if(m==null)return A.bK
w=m.b
v=w===D.cV
u=B.n(18)
t=x.O
t=d?B.a([A.bo,A.O],t):B.a([A.c,A.aP],t)
s=B.L(d?A.aK:A.aN,A.r,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cy,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b6k(A.j1,"Edit",new C.eD0(o,m),d,!0))
if(w===D.lO)p.push(o.b6k(A.HB,"Shape & ring",new C.eD1(o),d,!0))
p.push(o.ur(A.CN,"Format",new C.eD2(o),d))
if(v)A.d.v(p,B.a([o.ur(G.Ov,n,new C.eD3(o,m),d),o.ur(D.aqf,n,new C.eD4(o,m),d),o.ur(D.aqe,n,new C.eD5(o,m),d)],q))
p.push(A.b2)
p.push(o.cvI(A.eb,n,o.gaSB(),d,!0))
p.push(o.ur(A.hB,"Done",new C.eD6(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a9(A.a5,A.a8,A.x,t,n,n),A.n),n,n,n,A.BX,A.lH,n,n,n)},
bDb(d){switch(d.a){case 2:return D.a2d
case 1:case 5:return D.a2f
default:return D.a2e}},
c6T(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.dV
default:return A.bj}},
aBe(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aw
else if(h)w=A.c
else{v=g?A.ac:A.aK
w=v}v=B.n(12)
u=B.n(12)
t=h?K.HU:n
if(h)s=n
else s=g?A.c.j(0.06):A.bN
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.qm,B.aI(!1,A.a2,!0,n,B.aO(!1,v,!1,B.eK(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.P,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai),n)},
ur(d,e,f,g){return this.aBe(d,e,f,g,!1,!1)},
b6k(d,e,f,g,h){return this.aBe(d,e,f,g,h,!1)},
cvI(d,e,f,g,h){return this.aBe(d,e,f,g,!1,h)},
bQ6(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bo,A.O],m):B.a([A.c,A.nd],m)
w=B.L(e?A.aK:A.o_,A.r,1.2)
v=B.a([new B.ac(0,A.G,A.bl.j(e?0.18:0.1),A.cy,18)],x.V)
u=p.a3t(A.eK,"Back",p.gbJq(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a1,o,o,o,B.l(o,o,e?A.c:A.O,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.ds(1,A.cn,t,o),A.ad,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.bU:A.al,o,o,o,o,o,o,o,o,11,o,o,A.U,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.u9,o,A.e,A.i,0,A.cZ,o),1)],q)
if(!p.kv()){u=p.a3t(A.pl,"Undo",p.ax.length===0?o:p.gcFy(),e)
A.d.v(r,B.a([u,p.a3t(D.bPR,"Redo",p.ay.length===0?o:p.gcqQ(),e)],q))}r.push(p.a3t(A.yV,"PDF",new C.eC8(p),e))
r.push(p.a3t(A.hU,"Download as video",new C.eC9(p),e))
if(!p.kv())r.push(B.Cl(o,o,B.X(A.oo,e?A.ac:A.bt,o,o,o,o),new C.eCa(p),A.I,new C.eCb(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aI(!1,A.a2,!0,o,B.aO(!1,B.n(14),!0,B.eK(D.epq,o,new B.o(o,o,o,B.n(14),o,K.HU,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaC3(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.ai))
return B.p(o,B.B(r,A.m,o,A.e,A.i,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a9(A.az,A.aE,A.x,m,o,o),A.n),o,o,o,D.bAh,D.bFE,o,o,o)},
cEY(d){var w=this,v=null,u=B.n(18),t=d?A.au.j(0.92):A.c.j(0.96),s=B.L(d?A.cr:A.aN,A.r,1)
return B.p(v,B.ci(B.B(B.a([w.j2(A.uI,"Print",new C.eGq(w),d),w.j2(A.yV,"Download PDF",new C.eGr(w),d),w.j2(A.qC,"Present",w.gaC3(),d)],x.p),A.m,v,A.e,A.i,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yp,G.amA,v,v,v)},
a3t(d,e,f,g){var w,v=null
if(f==null)w=g?A.aX:A.dm
else w=g?A.ac:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c62(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.au.j(0.92):A.c.j(0.96)
u=B.L(d?A.cr:A.aN,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eDq(r,d),t),t.k("ak.E"))
t.push(new B.D(A_.amf,new B.fg(new C.eDr(r),q),q))
A.d.v(t,w?B.a([new B.D(S.wg,r.ai9(A.kp,"Ending celebration",r.gcgZ(),d),q),new B.D(S.wg,r.ai9(A.HB,"Logo ring & frame",r.gchG(),d),q)],x.p):A.f2)
A.d.v(t,w?B.a([new B.D(S.wg,r.ai9(A.md,"Look and feel",r.gchH(),d),q),new B.D(S.wg,r.ai9(A.po,"Edit this slide's text",r.gcid(),d),q)],x.p):A.f2)
t.push(new B.D(S.wg,B.hf(B.aA(q,B.p(q,D.f5V,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,N.lC.j(0.4),A.I,10)],x.V),D.ash,A.n),q,34,q,q,A.eZ,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eDs(r),q,q,q,q,q,q,!1,A.a3),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.ci(B.B(t,A.m,q,A.e,A.i,0,q,q),A.t,q,A.y,q,D.bG7,q,q,A.aL)
s=e?8:10
return B.p(q,B.x(B.a([t,B.ci(r.cth(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aL)],x.p),A.ak,q,A.e,A.i,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yp,q,q,q,q)},
cth(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dka[v]
u.a=null
s=u.a=t.b
w.push(e.lT(e.cv5(s),t.a,new C.eEP(u,e),a3,D.aRV.q(0,s)))}w.push(e.j2(A.ld,"Notes Slide",new C.eEQ(e),a3))
w.push(e.lT(A.HA,"Quiz",new C.eER(e),a3,!0))
w.push(e.lT(P.Hc,"Worksheet",new C.eF1(e),a3,!0))
w.push(e.lT(W.HE,"Flashcard",new C.eFc(e),a3,!0))
w.push(e.lT(A.Pk,"Lab Report",new C.eFn(e),a3,!0))
w.push(e.lT(A.qy,"Rubric",new C.eFu(e),a3,!0))
w.push(e.lT(A.pi,"Minutes",new C.eFv(e),a3,!0))
w.push(e.lT(A.on,"Syllabus",new C.eFw(e),a3,!0))
w.push(e.lT(A.a2N,"Timeline",new C.eFx(e),a3,!0))
return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dlw[v]
w.push(e.lT(r.b,r.c,new C.eFy(e,r),a3,!D.aS0.q(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.i,0,d,d)
case"Insert":return B.B(B.a([e.j2(A.wD,a0,e.gaOe(),a3),e.j2(A.uE,"Picture",new C.eES(e),a3),e.j2(A.z4,"Bio link",new C.eET(e),a3),e.j2(A.a2M,"Table",new C.eEU(e),a3),e.j2(A.Po,"Sticky",new C.eEV(e),a3),e.j2(A.rO,"Divider",new C.eEW(e),a3),e.j2(A.zb,"Header",new C.eEX(e),a3),e.lT(A5.rM,"Rectangle",new C.eEY(e),a3,!0),e.lT(A.pf,"Circle",new C.eEZ(e),a3,!0),e.lT(A.a22,"Triangle",new C.eF_(e),a3,!0),e.lT(A.jD,"Arrow",new C.eF0(e),a3,!0),e.lT(D.bOj,"Parallelogram",new C.eF2(e),a3,!0),e.lT(D.bQN,"Hexagon",new C.eF3(e),a3,!0),e.lT(A.rO,"Line",new C.eF4(e),a3,!0),e.lT(A.yV,"PDF",new C.eF5(e),a3,!0),e.lT(N.a2X,"Signature",new C.eF6(e),a3,!0),e.j2(A4.Cy,"Quote",new C.eF7(e),a3),e.j2(D.a1C,a1,new C.eF8(e),a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Design":w=e.c
w.toString
w=B.aG(w,A.bZ,x.w).w
u=x.p
t=B.B(B.a([e.aP5("Wide 16:9",D.DK,a3),e.aP5("Short 9:16",D.oG,a3),new B.D(A.fv,B.n0(D.bSY,d,D.fJR,d,new C.eF9(e),d,d,d,d),d)],u),A.m,d,A.e,A.i,0,d,d)
q=B.B(B.a([e.bJF("This slide",!e.Q,a3,new C.eFa(e)),A.bm,e.aRh("All slides",e.Q,a3,new C.eFb(e),!0)],u),A.m,d,A.e,A.i,0,d,d)
p=e.bJG()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.bU:A.bL,d,d,d,d,d,d,d,d,10,d,d,A.a7,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a4V,new C.eFd(e),n),n.k("ak.E"))
n=B.ci(B.B(n,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dmx[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dm:A.aX,1.5,A.r,-1)
l.push(new B.D(A.fv,B.aA(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bG(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eFe(e,k),d,d,d,d,d,d,!1,A.a3),d))}l=B.ci(B.B(l,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bGp()
g=B.T(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eFf(e,a3),g),g.k("ak.E"))
return new B.a4(w.a.a-20,d,B.x(B.a([t,A.N,q,A.am,p,A.N,o,A.av,n,A.N,m,A.av,l,A.N,j,A.av,B.ci(B.B(h,A.m,d,A.e,A.i,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c2J(a3)],u),A.E,d,A.e,A.P,0,A.p),d)
case"Transitions":f=e.kb()
w=e.c
w.toString
w=B.aG(w,A.bZ,x.w).w
u=new C.eEO(e)
t=new C.eFz(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.S3,f.dy,new C.eFg(e,u,f),A.b1)
A.d.v(p,B.a([o,A.av,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aC:A.al,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.av],q))}q=e.gdA()
q=q==null?d:q.r
p.push(t.$4(D.S3,q,new C.eFh(e,u),A.bl))
return new B.a4(w.a.a-20,d,B.x(p,A.E,d,A.e,A.P,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.j2(A.ld,w,new C.eFi(e),a3),e.j2(A.uI,"Print deck",new C.eFj(e),a3),e.lT(D.aof,"Export JSON",new C.eFk(e),a3,!0),e.j2(A.fQ,"Duplicate Slide",e.gaTu(),a3),e.j2(A.eb,a2,e.gaSC(),a3),e.czd(a3)],x.p),A.m,d,A.e,A.i,0,d,d)
case"Home":default:f=e.kb()
w=x.p
u=B.a([e.j2(D.a1C,a1,new C.eFl(e),a3),e.j2(A.fQ,"Duplicate",e.gaTu(),a3),e.j2(A.eb,a2,e.gaSC(),a3),e.j2(A.qC,"Present",e.gaC3(),a3),e.j2(A.CL,a0,e.gaOe(),a3),e.j2(A.CD,"Fit Text",new C.eFm(e),a3),e.j2(A.yV,"Download PDF",new C.eFo(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j2(A.jH,"Transfer",new C.eFp(e),a3))
if(f!=null){w=B.a([A.ad,e.j2(G.Ov,"Bold",new C.eFq(e,f),a3),e.j2(G.a1u,"Italic",new C.eFr(e,f),a3),e.j2(G.anR,"Underline",new C.eFs(e,f),a3),e.j2(Ag.Ow,"Bullets",new C.eFt(e,f),a3),e.bSH(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bQb(a3))
w.push(e.j2(D.bN0,"Delete",e.gaSB(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.i,0,d,d)}},
aP5(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oG
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.aaR,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bS9],v))
return new B.D(A.fv,B.jw(t,t,t,B.B(u,A.m,t,A.e,A.P,0,t,t),t,new C.eBd(this,w,e),s===e,A.bl.j(0.25),t,t,t),t)},
czd(d){var w,v,u,t,s,r=this,q=null,p=r.gdA()
if(p==null)return A.bK
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.L(d?A.aX:A.cq,A.r,1)
u=B.n(8)
t=B.X(A.Ha,d?A.aC:A.al,q,q,q,14)
s=B.aH(q,q,q,q,D.arg,q,q,q,new C.eFW(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bk,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.ar7,q,q,q,new C.eFX(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.P,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.GR,A.mM,q,q,q)},
cv5(d){switch(d.a){case 6:return W.HE
case 7:return A.HA
case 8:return P.Hc
case 4:return A.zb
default:return A.ld}},
bSH(d,e){var w=null,v=B.L(e?A.aX:A.cq,A.r,1),u=B.n(8),t=B.aH(w,w,w,w,D.arg,w,w,w,new C.eCl(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bk,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.ar7,w,w,w,new C.eCm(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.P,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uq,A.mM,w,w,w)},
c2J(d){var w=null
return B.Cl(B.DR(B.X(A7.a1F,d?A.ac:A.bt,w,w,w,16),w,w,D.fPx,w,w,w),w,w,new C.eCT(),A.I,this.gbDT(),A.ck,"Slide layout",x.fO)},
lT(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bN,s=B.L(g?A.dr:A.aN,A.r,1),r=x.p,q=B.a([B.X(d,g?A.du:A.bl,w,w,w,18)],r)
if(h)q.push(B.ap(w,B.p(w,D.Pu,A.f,w,w,D.F8,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fv,B.aI(!1,A.a2,!0,w,B.aO(!1,v,!0,B.eK(new B.D(A.h8,B.x(B.a([new B.an(A.a_,w,A.ab,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bt,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.P,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w)},
j2(d,e,f,g){return this.lT(d,e,f,g,!1)},
b7G(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hS(t,new C.eG7(u,s,e,d),s.r.length,A.ck,t,w,new C.eG8(e),!1)
s=d?A.au:A.bN
w=B.a([],x.p)
if(e&&!u.kv())w.push(new B.D(A.ck,B.Ii(E.aru,new C.eG9(u),B.nS(t,A.bl,t,t,t,t,t,t,t,t,t,t,E.aSE,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.m,t,A.e,A.i,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bHG(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oG?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bN(A.b0,v,v,new B.fK(w,B.aA(v,B.cu(new C.eBC(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eBD(this),v,v,v,v,v,v,!1,A.a3),v),v),v)},
bHI(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kI(a9.w))===!0,b1=b0&&C.fOz(b3),b2=b0&&b3.b===D.lm&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kv())v=!b0||a7.c56(b3)
else v=!1
if(!a7.kv())u=!b0||a7.c55(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cd:A.bl
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hd9(b3))o=a8
else if(p&&!a7.kv())o=a7.gcdv()
else o=a7.kv()?a8:new C.eBq(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c6:A.iK
i=w&&C.hd9(b3)&&a7.A7()?new C.eBr(a7,b3):a8
h=v&&b3.b===D.cV?new C.eBs(a7,b3):a8
g=u?new C.eBt(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bf
else e=q?A.c3:r
else e=A.L
e=B.L(e,A.r,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c3.j(0.08)
else a0=b3.b===D.lm?A.L:a8
if(b1){a1=a7.kv()?"":"Tap to sign"
a1=B.at(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c3.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.U,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aG(a1,A.bZ,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.A7()
a3=b3.b===D.cV
a4=a3?a7.Xo(b3):a8
a5=a3?a7.auN(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aG(a6,A.bZ,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eBu(a7,b3):a8
a3=v&&a3?new C.eBv(a7,b3):a8
a6=C.b2V(q,a4,a1,b3,a5,a2,a3,new C.eBw(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ap(-4,B.aA(a8,B.p(a8,D.bUZ,A.f,a8,a8,new B.o(r,a8,B.L(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eBx(a7,b3,b4,b5),a8,a8,new C.eBy(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kv()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bVG,A.f,a8,a8,new B.o(A.dn,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc0i(),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kv()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ap(a8,B.aA(a8,B.p(a8,D.bXj,A.f,a8,a8,new B.o(A.c3,a8,B.L(A.c,A.r,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.I,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eBz(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cV)if(a7.w!==a9){e=a7.c
e.toString
e=B.aG(e,A.bZ,x.w).w.a.a<900}if(e)d.push(B.ap(-28,B.at(B.aA(a8,B.p(a8,D.fYD,A.f,a8,a8,new B.o(A.bl,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.I,8)],x.V),a8,A.n),a8,a8,a8,a8,A.la,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eBA(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a3),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ap(a8,B.aA(j,B.eM(A.A,f,new B.an(A.a_,a8,A.ab,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a3),k*b5,new B.bQ("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aRh(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bl.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.L(e?A.bl:A.bz,A.r,1)
if(e)t=A.bl
else t=f?A.aC:A.al
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.Pu,A.f,r,r,D.F8,r,12,r,r,r,r,r,12)],s))
return B.aA(r,B.p(r,B.B(t,A.m,r,A.e,A.P,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a3)},
bJF(d,e,f,g){return this.aRh(d,e,f,g,!1)},
cdf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.bb(v,A.b4,A.aO),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.au:A.aP
t=f?A.xC:l
if(f)s=new B.bG(new B.ay(e?A.bz:A.aN,1,A.r,-1),A.a0,A.a0,A.a0)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tb,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ac:A.bt,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b2,m.b2L(e,new C.eDu(m))],q),A.m,l,A.e,A.i,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.bU:A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aM(l,A.Y,!1,l,!0,A.t,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b6(4,B.n(10),A.dk),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.aj,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eDv(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.aa,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.ak,l,A.e,A.i,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aUM(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kb()
if(a2==null)return A.bK
w=new C.eCz(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.E(1-a2.c,0.06,1)
t=A.k.E(1-a2.d,0.06,1)
s=A.k.E(1-a2.e,0.01,1)
r=A.k.E(1-a2.f,0.01,1)
q=a5?A.dS:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.O,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b2,a0.b2L(a3,a0.gbOd())],p),A.m,a1,A.e,A.i,0,a1,a1))
if(n)o.push(A.W)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fKm,B.E(B.kS(a1,a1,a1,u,0.05,new C.eCA(w,a2),A.k.E(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
o.push(B.B(B.a([D.fX_,B.E(B.kS(a1,a1,a1,t,0.05,new C.eCB(w,a2),A.k.E(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
n=a2.b
m=n===D.cV
if(m)o.push(B.B(B.a([D.fDU,B.E(B.kS(a1,a1,a1,96,10,new C.eCC(w,a2),A.k.E(a2.w,10,96)),1)],p),A.m,a1,A.e,A.i,0,a1,a1))
l=n===D.lO
if(l||n===D.lm||n===D.Tq)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fQj,B.E(B.kS(a1,a1,a1,s,0,new C.eCD(w,a2),A.k.E(a2.c,0,s)),1)],p),A.m,a1,A.e,A.i,0,a1,a1),B.B(B.a([D.fYk,B.E(B.kS(a1,a1,a1,r,0,new C.eCE(w,a2),A.k.E(a2.d,0,r)),1)],p),A.m,a1,A.e,A.i,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.D5[j]
i.a=null
g=h.a
i.a=g
k.push(B.jw(a1,a1,a1,new B.y(h.b,a1,A.pI,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eCF(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bX(A.bG,k,A.br,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.CZ[j]
f.a=null
g=e.a
f.a=g
h.push(B.jw(a1,a1,a1,new B.y(e.b,a1,A.pI,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eCG(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bX(A.bG,h,A.br,a1,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eCH(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bX(A.bG,l,A.br,a1,6,6),A.ae,B.hpp(new C.eCI(w,a2),D.cz8,B.eD([a2.as],k),!0,a1,k)],p))}if(n===D.fc){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aC:A.al,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eCJ(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bX(A.bG,m,A.br,a1,0,6)],p))}o.push(A.ae)
o.push(B.dj(D.bX5,D.fSm,new C.eCK(a0,a5),B.bo(A.bB,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cl(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cr:A.c
p=a4?A.xC:a1
if(a4)o=new B.bG(new B.ay(a3?A.bz:A.aN,1,A.r,-1),A.a0,A.a0,A.a0)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.tb,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.GA,a1,a1,a1)},
bSY(d){return this.aUM(d,!1,!1,null)},
ccn(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.cb(p,new C.eCN(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.fth,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.x(B.a([w,A.bF,A.cS,r.bDd(D.d2m,d,B.R(v).ax.a===A.J)],u),A.E,q,A.e,A.i,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ad,B.dR(B.hf(B.aI(!1,A.a2,!0,q,B.aO(!1,q,!0,B.eK(D.fbY,q,new B.o(q,q,B.L(A.c.j(0.55),A.r,1.3),q,B.a([new B.ac(0,A.G,A.c3.j(0.4),A.en,8)],p),D.asm,A.a6),q,q,q),A.cO,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,"Documents (Hati)",q,q),A.I)],u))
t=B.B(v,A.m,q,A.e,A.i,0,q,q)
w=r.c
w.toString
s=B.R(w).ax.a===A.J
w=B.n(20)
v=x.O
v=s?B.a([D.bdW,D.beo],v):B.a([A.c,A.kJ],v)
u=B.L(d.j(s?0.45:0.25),A.r,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cy,14)],p),new B.a9(A.az,A.aE,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aNY(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.cb(w,new C.eAm(this,g,d,e,f),null)},
ahu(d,e){return this.cp3(d,e)},
cp3(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ahu=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.au(new B.bb(e,A.b4,A.aO),r)
p=t.c
p.toString
w=3
return B.b(B.ch(null,null,!0,null,new C.eEr(d,q),p,null,!0,!0,x.N),$async$ahu)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ahu,v)},
Qv(d){var w=d.bU()
return""+B.bL(w)+"/"+B.bW(w)+"/"+B.bC(w)}}
C.afU.prototype={}
C.aAi.prototype={
R(){return new C.bez(null,null)}}
C.bez.prototype={
gcBy(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bL(u)+"/"+B.bW(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Z(){var w,v=this,u=null
v.a3()
w=B.bm(u,A.qj,u,1,u,v)
w.fp(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bm(u,D.byL,u,1,u,v)
w.cq(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.bwB()},
Jr(d){var w=0.12+d*0.09,v=A.k.E(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cu.aw(0,new B.hZ(w,v,A.cu).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.at(new B.D(D.bEr,B.cb(new B.h9(B.a([u,w],x.dS)),new C.d8P(this),v),v),v,v,v)}}
C.beO.prototype={
B(d){var w=null,v=B.n(22),u=B.L(A.aK,A.r,1),t=x.p
return B.at(new B.D(D.bEI,B.aI(!1,A.a2,!0,w,B.p(w,B.bx(B.n(22),B.x(B.a([new B.D(D.bDT,B.x(B.a([B.p(w,D.bVM,A.f,w,w,new B.o(A.aw.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fUy,A.W,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fuw,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dT,D.bxO,B.B(B.a([B.E(B.bM(!1,D.fIy,w,w,!0,w,w,w,new C.d9c(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.bL,w,w,w,w,w,A.nt,w,A.oK,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bM(!1,D.fNX,w,w,!0,w,w,w,new C.d9d(d),w,B.fy(w,w,w,w,w,w,w,w,w,w,w,A.aw,w,w,w,w,w,A.nt,w,A.oK,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w)],t),A.m,w,A.e,A.P,0,A.p),A.ap),A.f,w,A9.Xi,new B.o(A.au,w,u,v,D.d2L,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.Kl.prototype={
R(){return new C.bey()}}
C.bey.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.L(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dC,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dR(B.db(B.aA(o,B.vT(B.cY(o,B.B(B.a([r,A.as,new B.ds(1,A.cn,B.d(q,o,2,A.a1,o,o,o,B.l(o,o,l?A.eO:A.c,o,o,o,o,o,o,o,o,13,o,o,A.U,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.m,o,A.b9,A.P,0,o,o),o,o,A.b5,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nu,o,o,1/0),A.cu,A.ji,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d8K(p,d),new C.d8L(p),new C.d8M(p),new C.d8N(p),o,o,o,!1,A.a3),k),new B.u(0,(1-k)*16))}}
C.Qf.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.L(A.c.j(0.5),A.r,1.2),p=x.p
return B.aI(!1,A.a2,!0,t,B.aO(!1,s,!0,new B.D(A.eS,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a9(A.az,A.aE,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.es,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.n5,v,v,v),A.bF,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.i,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a0g.prototype={
R(){return new C.aFR(D.dh,null,null)}}
C.aFR.prototype={
gZG(){var w,v=this,u=v.w
if(u===$){w=B.bm(null,D.byk,null,1,null,v)
v.w!==$&&B.bE()
v.w=w
u=w}return u},
b89(d){if(!this.a.c.ay)return
this.x=d
this.gZG().iv(0,0)},
Z(){var w,v=this
v.a3()
w=v.a
v.d=A.o.E(w.d,0,w.c.r.length-1)
C.ax5(D.fiq)
C.iha()
v.RW()},
t(){var w=this,v=w.f
if(v!=null)v.a2(0)
w.gZG().t()
v=w.z
if(v!=null)v.a2(0)
C.ax5(D.fir)
C.ihd()
w.byH()},
cEl(){B.jR()
this.m(new C.eH6())
var w=this.c.L(x.q).f
w.a5H()
if($.bmw)w.U(D.ffh)},
RW(){var w,v=this,u=v.f
if(u!=null)u.a2(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cD(B.dA(0,0,0,0,0,A.o.E(C.hnA(u,w),1,120)),new C.eGX(v))},
cE0(){var w,v=this
v.m(new C.eH5(v))
if(v.r)v.RW()
else{w=v.f
if(w!=null)w.a2(0)}},
gaWI(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cxY(){var w=this,v=w.f
if(v!=null)v.a2(0)
w.m(new C.eGY(w))
v=w.z
if(v!=null)v.a2(0)
if(w.a.c.ch&&w.r)w.z=B.cD(A.lF,new C.eGZ(w))},
ayR(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a2(0)
if(u.a.c.ch){u.m(new C.eGT(u))
u.RW()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaWI()){u.cxY()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eGU(u,A.o.F(w+1,s)))
u.b89(w)
u.RW()}},
cnI(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a2(0)
v.m(new C.eGV(v))
v.RW()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eGW(v,w,t))
v.b89(w)
v.RW()}},
czt(d){var w,v=this,u=v.e
if(u===D.co){u=v.d
u===$&&B.c()
return new B.mI(d,new B.bQ(u,x.ac))}w=v.czu(u)
u=v.d
u===$&&B.c()
return B.p4(new B.mI(d,new B.bQ(u,x.ac)),w,new C.eH3(),A.b5,A.b5,new C.eH4(v))},
czu(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.byH
case 16:return A.iI
case 18:return A.mI
default:return A.m8}},
czs(d,e,f){var w,v,u,t=null,s=B.cK(A.cu,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d1(s,!1,e,t)
case 2:case 17:w=x.K
return B.jF(e,new B.bg(s,new B.bq(A.vf,A.I,w),w.k("bg<bO.T>")),t,!0)
case 3:w=x.K
return B.jF(e,new B.bg(s,new B.bq(A.TE,A.I,w),w.k("bg<bO.T>")),t,!0)
case 4:case 21:w=x.K
return B.jF(e,new B.bg(s,new B.bq(A.ig,A.I,w),w.k("bg<bO.T>")),t,!0)
case 5:w=x.K
return B.jF(e,new B.bg(s,new B.bq(A.ta,A.I,w),w.k("bg<bO.T>")),t,!0)
case 6:case 16:w=x.b
return B.iv(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.bq(0.82,1,w),w.k("bg<bO.T>")))
case 7:w=x.b
return B.iv(A.A,new B.d1(s,!1,e,t),t,new B.bg(s,new B.bq(1.18,1,w),w.k("bg<bO.T>")))
case 8:return B.cb(s,new C.eH_(s),e)
case 9:return B.cb(s,new C.eH0(s),e)
case 10:return B.cb(s,new C.eH1(s),e)
case 11:return B.cb(s,new C.eH2(s),e)
case 12:w=x.b
return new B.d1(s,!1,B.iv(A.A,e,t,new B.bg(s,new B.bq(1.03,1,w),w.k("bg<bO.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jm(B.jF(e,new B.bg(s,new B.bq(A.vf,A.I,v),v.k("bg<bO.T>")),t,!0),A.t,new C.btI(w,t))
case 15:w=x.K
return B.jF(e,new B.bg(s,new B.bq(A.TE,A.I,w),w.k("bg<bO.T>")),t,!0)
case 19:w=B.dt()
w.mV((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k0(v,u,v,1)
return B.fA(A.A,B.db(e,s.gp(0)),t,w,!0)
case 20:return B.eM(A.A,(1-s.gp(0))*0.2,new B.d1(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jm(new C.apo(B.cb(n.gZG(),new C.eH7(n,v,w),m),m),A.t,m)}else{t=B.rY(new C.Ji(w,!0,!1,m))
l=B.b1(w.e)
u=n.czt(B.ec(B.jm(t,A.t,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.hnA(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oR,m,m,m),A.bm,D.bYa],k),A.m,m,A.e,A.P,0,m,m),A.f,m,m,new B.o(A.aS,m,m,l,m,m,A.n),m,m,m,m,A.h7,m,m,m)
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
l.push(B.bT(0,new C.O4(new C.F2(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oG?0.5625:1.7777777777777777
l.push(B.at(new B.fK(r,B.jm(B.uT(A.af,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bmw){r=B.Ii(A.lh,new C.eH8(d),B.nS(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ap(m,B.bn(!0,B.B(B.a([r,A.ad,B.Ii(B.X(n.r?Am.uH:A.hp,m,m,m,m,m),n.gcE_(),B.nS(m,A.aS,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.i,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ap(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.fS,m,m,m),A.f,m,m,new B.o(A.aS,m,m,r,m,m,A.n),m,m,m,m,A.h7,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ap(m,B.bn(!0,B.aA(A.c6,B.p(A.lu,$.bmw?A.bK:s,A.f,m,m,m,m,64,m,m,D.bzr,m,m,150),A.y,!1,m,n.gcEk(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a3),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c6(m,A.w,B.aA(m,new B.an(A.a_,m,A.b3,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eH9(n,d),m,m,m,!1,A.a3),m,!1,!1,m,m)}}
C.Kr.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.D(E.am1,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b6t,w,w,w,w,w,w,w,w)}}
C.btI.prototype={
jr(d){return new B.a3(0,0,0+d.a*A.k.E(this.b,0,1),0+d.b)},
k8(d){return d.b!==this.b}}
C.bjA.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.b3f
break A}w=B.n(6)
break A}v=s.e
u=B.L(v?A.aD:A.L,A.r,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.cY(r,B.at(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.wI,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b5,new B.o(s.f,r,u,w,r,r,A.n),A.h5,r,64,r,r,r,r,r,64)
return B.aA(r,new B.a4(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a1,r,r,r,B.l(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.i,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a3)}}
C.bjz.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dA4.h(0,p)
if(o==null)o=D.dlG
p=p==="none"
w=p?q:new B.a9(A.a5,A.a8,A.x,o,q,q)
p=p?A.cY.j(0.25):q
v=r.e
u=v?B.L(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.aqs:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ev,q,q,52)
return B.aA(q,new B.a4(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a1,q,q,q,B.l(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.m,q,A.e,A.i,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a3)}}
C.aLH.prototype={
aV(){this.b2()
this.b1()
this.dK()},
t(){var w=this,v=w.b7$
if(v!=null)v.a5(0,w.gdF())
w.b7$=null
w.a1()}}
C.aNH.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.bzy.prototype={}
C.aNI.prototype={
t(){var w=this,v=w.a8$
if(v!=null)v.a5(0,w.gbB())
w.a8$=null
w.a1()},
aV(){this.b2()
this.b1()
this.bC()}}
C.b2Y.prototype={}
C.WE.prototype={
R(){return new C.aFP()},
biT(d){return this.e.$1(d)}}
C.aFP.prototype={
gb6q(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabq(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb6q()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaPW(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb6q()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb7F(){return A.d.cG(this.gabq(),0,new C.eGD())},
Z(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gI(w).a
v.Ry()},
Ry(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ry=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b3z(s.c,s.f),$async$Ry)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eGz(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Ry,v)},
Jt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Jt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabq()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fRO(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pr(o,q.c,q.f),$async$Jt)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ej(new C.eGC(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).cc(q),$async$Jt)
case 4:q=t.a
w=5
return B.b(B.pq(q.c,q.f),$async$Jt)
case 5:w=6
return B.b(t.Ry(),$async$Jt)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jt,v)},
RU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$RU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hI(o,D.ecE,!0,"NgmySlidesTransferScan",x.N),$async$RU)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eGA(t))
w=4
return B.b(C.ai8(s),$async$RU)
case 4:r=e
t.m(new C.eGB(t))
o=J.a7(r)
if(o.gan(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.U(D.fe6)
w=1
break}w=5
return B.b(t.a.biT(r),$async$RU)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.L(x.q).f
p=o.gK(r)
o=o.gK(r)===1?"":"s"
q.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$RU,v)},
Js(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$Js=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabq()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pr(s,r.c,r.f),$async$Js)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fS2(null,A.d.gI(n),s,t.a.f)}else q=C.fS2(n,null,r.c,r.f)
if(n.length===1){s=A.d.gI(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.H_(q,"ngmy_slides_"+p,!1),$async$Js)
case 4:o=e
s=t.a
w=5
return B.b(B.pq(s.c,s.f),$async$Js)
case 5:w=6
return B.b(t.Ry(),$async$Js)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.U(B.b3(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Js,v)},
a3E(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a3E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eGE(t))
w=3
return B.b(C.bEQ(),$async$a3E)
case 3:s=e
t.m(new C.eGF(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.biT(s),$async$a3E)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gK(s)
q=q.gK(s)===1?"":"s"
r.U(B.b3(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a3E,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.R(d).ax.a===A.J,l=m?A.dd:A.bN,k=o.gabq().length!==0,j=B.ap(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.c_(A.A,0.5,A.x,n,0,B.a([A.bl.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cx,m?A.ac:A.al,n,n,n,n),n,n,n,new C.eGI(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.O,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.Aj],h),A.m,n,A.e,A.i,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.eU,24)],x.V)
u=B.ap(n,B.X(A.qv,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bYI,A.f,n,n,new B.o(t,n,B.L(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.es,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.av,D.bJj],h),A.E,n,A.e,A.i,0,A.p),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.a.f)s.push(B.ap(n,B.hf(B.aA(A.c6,D.fc_,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcip(),n,n,n,n,n,n,!1,A.a3),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a_,n,A.ab,A.f,s,n),A.ap,n,n,new B.o(n,n,n,w,v,D.a3s,A.n),n,n,n,n,E.a08,n,n,1/0),A.dT,o.ayS(m,"What to transfer"),A.ae,B.B(B.a([B.E(o.aZ5(A.qC,m,new C.eGJ(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.aZ5(D.bOc,m,new C.eGK(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.i,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d4,o.ayS(m,"Choose presentation"),A.W],h)
u=o.a.d
if(u.length===0){u=m?A.au:A.c
t=B.n(16)
s=B.L(m?A.bz:A.aN,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aC:A.al,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.N(u,new C.eGL(o,m),B.T(u).k("N<1,v>")))
A.d.v(w,v)}w.push(A.n1)
w.push(o.ayS(m,"Transfer options"))
w.push(A.ae)
w.push(B.B(B.a([B.E(o.art(A.aJ,k,!0,A.jG,m,o.r,o.gccr(),"Scan on another device","Show QR"),1),A.as,B.E(o.aNZ(A.kh,!0,A.jk,m,o.gcuF(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.i,0,n,n))
w.push(A.W)
w.push(B.B(B.a([B.E(o.bBI(A.aW,k,A.hU,m,o.r,o.gcco(),"Download .json","Backup file"),1),A.as,B.E(o.aNZ(A.ay,!0,AB.za,m,o.gcGO(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.i,0,n,n))
if(k){v=A.bl.j(m?0.12:0.08)
u=B.n(16)
t=B.L(A.bl.j(0.28),A.r,1)
s=B.X(A.lK,A.bl.j(0.9),n,n,n,18)
r=o.gaPW()
q=o.gb7F()
p=o.gb7F()===1?"":"s"
A.d.v(w,B.a([A.bx,B.p(n,B.B(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ac:A.bt,n,n,n,n,n,n,n,n,12,n,n,A.a7,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.i,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bD,n,n,n)],h))}j=B.a([j,B.bn(!0,B.x(B.a([new B.D(Ai.O5,i,n),B.E(B.cl(w,n,n,D.bD0,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,U.XA,A.f,A.dL,n,n,n,n,n,n,n,n,n,n))
return B.c6(n,l,new B.an(A.a_,n,A.ab,A.t,j,n),n,!1,!1,n,n)},
agF(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.inD(s,t.d,t.e),$async$agF)
case 2:return B.h(null,v)}})
return B.i($async$agF,v)},
ayS(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bl,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ad,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aC:A.al,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,w,w)},
aZ5(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.au:A.c
if(g)w=A.bl
else w=e?A.bz:A.aN
w=B.L(w,A.r,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bl.j(0.2),A.cy,14)],x.V):s
u=A.bl.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bl,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.ck,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.O,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aI(!1,A.a2,!0,s,B.aO(!1,r,!0,B.eK(new B.D(A.bD,B.x(B.a([t,A.W,u,A.bF,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aC:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai)},
bMl(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.au:A.c,m=B.n(16)
if(p)w=A.bl
else w=e?A.bz:A.aN
w=B.L(w,A.r,p?2:1)
v=B.p(q,D.bYU,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a9(A.a5,A.a8,A.x,B.a([A.bl,A.bl.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a1,q,q,q,B.l(q,q,e?A.c:A.O,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aC:A.al,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1)
u=p?A.e6:A.pf
if(p)r=A.bl
else r=e?A.aX:A.dm
return new B.D(A.ct,B.aI(!1,A.a2,!0,q,B.aO(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.i,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bD,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eGy(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q)},
art(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.au:A.c
if(f)w=d.j(0.45)
else w=h?A.bz:A.aN
w=B.L(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.rJ,s,s,s)],t)
if(i)u.push(B.ap(s,B.p(s,D.ar1,A.f,s,s,D.b6f,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.O,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.db(B.aI(!1,A.a2,!0,s,B.aO(!1,p,!0,B.eK(new B.D(E.a_M,B.x(B.a([new B.an(A.a_,s,A.ab,A.f,u,s),A.ae,v,A.bF,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aC:A.al,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.i,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai),r)},
aNZ(d,e,f,g,h,i,j){return this.art(d,e,!1,f,g,!1,h,i,j)},
bBI(d,e,f,g,h,i,j,k){return this.art(d,e,!1,f,g,h,i,j,k)}}
C.WF.prototype={
R(){return new C.bmv()}}
C.bmv.prototype={
Z(){this.a3()
this.afr()},
afr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$afr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fS2(null,A.d.gI(m),k,r.a.f):C.fS2(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gI(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kI(A.d.gI(n).w))C.fRO(A.d.gI(r.a.d),D.djt)
n=r.a
m=n.c
n=C.iky(n.d)
w=7
return B.b(C.fS1(p,C.ikD(r.a.d),n,m,q),$async$afr)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eGM(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eGN(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afr,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.R(d).ax.a===A.J,h=i?A.dd:A.bN,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cG(k.a.d,0,new C.eGO())
v=B.aH(j,j,j,j,B.X(A.eK,i?A.ac:A.al,j,j,j,18),j,j,j,new C.eGP(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.O,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.Aj],u),A.m,j,A.e,A.i,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.de,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.U,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a3s,A.n),j,j,j,j,E.a08,j,j,1/0)
q=B.n(24)
s=B.L(A.aJ.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.V8,A.K,j,j))
else if(k.d==null)r.push(D.ep_)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aD.j(0.35),A.cy,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fJ0,A.am,B.aA(j,B.p(j,B.B(B.a([D.c_r,A.as,B.d(m,j,j,j,j,j,j,D.fuW,j,j,j)],u),A.m,j,A.e,A.P,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c4m,A.n),j,j,j,j,A3.alN,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eGQ(k,d),j,j,j,j,j,j,!1,A.a3),A.N,D.fNt,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.L(A.bz,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.q6(j,j,!1,l,j,!0,!0,j,!1,D.btW),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.ck,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hu,A.K,j,j))
return B.c6(j,h,B.bn(!0,B.x(B.a([new B.D(Ai.O5,v,j),B.E(B.ci(B.x(B.a([t,A.aQ,B.p(j,B.x(r,A.m,j,A.e,A.i,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.c6j,A.n),j,j,j,j,A.up,j,j,1/0)],u),A.m,j,A.e,A.i,0,A.p),A.t,j,A.y,j,E.am6,j,j,A.ah),1)],u),A.m,j,A.e,A.i,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aFM.prototype={
R(){return new C.aFN(new B.au(A.at,$.aw()),B.k6(!0,null,!0,!0,null,null,!1))}}
C.aFN.prototype={
Z(){var w=this
w.a3()
w.e.aT(0,new C.eAg(w))
$.aW.x1$.push(new C.eAh(w))},
t(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.t()
this.a1()},
b0S(){var w,v=this.c
v.toString
w=C.z_(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aG(a2,A.eN,x.w).w,i=B.n(28),h=B.L(A.bl.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bl.j(0.28),A.vc,36),D.ae4],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bVQ,A.f,k,k,new B.o(d,k,B.L(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fG2,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a7,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.m,k,A.e,A.i,0,A.p),A.f,k,k,D.b6G,k,k,k,k,A.yA,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gef()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.au:A.O
o=new B.aP(14,14)
if(q)n=A.bl
else n=r?A.bl.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ac(0,A.G,A.bl.j(0.28),A.I,12)],g):k
t.push(new B.by(1,A.bb,B.cY(A.A,new B.y(p,k,D.fof,k,k,k,k,k,k,k,k,k),k,k,A.b5,new B.o(s,k,new B.bG(m,m,m,m),new B.bh(o,o,o,o),n,k,A.n),A.h5,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(Z.En)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.i,0,k,k),B.bT(0,B.db(B.aM(k,A.Y,!0,k,!0,A.t,k,B.aN(),w,k,k,k,k,k,2,D.c2f,A.y,!0,k,!0,k,!1,v,A.aj,k,k,B.a([new B.uM(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.BS(5,k),new C.bwZ()],x.aS),k,k,A.aTR,k,5,k,1,k,k,!1,"\u2022",k,new C.eAc(l),k,new C.eAd(l),k,!1,k,k,!1,k,!0,k,A.aa,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.mq,k,k,k,k),0),0,0,0)],a1)
d=C.z_(w.a.a.toUpperCase())==null?k:l.gccs()
return B.at(new B.D(new B.Q(24,24,24,24+j.f.d),B.aI(!1,A.a2,!0,k,new B.cU(Af.LF,B.p(k,B.bx(e,B.x(B.a([a0,new B.D(D.bDw,B.x(B.a([new B.an(A.a_,k,A.ab,A.t,g,k),A.W,D.fEl,A.bx,new B.a4(1/0,50,B.bI(D.fVs,k,d,B.bo(A.bl,A.bo,A.al,k,A.c,k,k,k,new B.b8(B.n(16),A.a0),k,k,k)),k),A.am,B.bM(!1,A.nP,k,k,!0,k,k,k,new C.eAe(a2),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.i,0,A.p),k)],a1),A.m,k,A.e,A.P,0,A.p),A.ap),A.f,k,k,new B.o(A.dd,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bwZ.prototype={
oQ(d,e){var w=e.a.toUpperCase()
return e.cNl(B.hm(A.bA,w.length),w)}}
C.asr.prototype={
R(){return new C.aFQ(B.zF(A.Nn,A.nV,A.uT))}}
C.aFQ.prototype={
t(){this.d.t()
this.a1()},
b0R(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iZ(w,d)},
abl(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h_T(s),$async$abl)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b0R("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abl,v)},
ccq(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.ikB(w[u])
if(t!=null){this.b0R(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.wF,s,s,s,t.gbQK(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eI(B.a([r,B.aH(s,s,s,s,B.X(q?A.uB:An.P_,s,s,s,s,s),s,s,s,new C.eGS(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.dd,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fWG,s,s,s,1,s,!0)
r=B.zE(t.d,A.bY,t.gccp())
w=B.n(28)
w=B.at(B.p(s,s,A.f,s,s,new B.o(s,s,B.L(A.bl,A.r,3),w,B.a([new B.ac(2,A.G,A.bl.j(0.35),A.I,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c6(p,A.w,new B.an(A.a_,s,A.b3,A.t,B.a([r,w,B.ap(32,B.p(s,D.fK7,A.f,s,s,new B.o(v,s,B.L(A.bl.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jj,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bxc.prototype={
B(d){var w=null,v=B.n(24),u=B.L(A.aK,A.r,1)
return B.aI(!1,A.a2,!0,w,B.p(w,B.x(B.a([B.p(w,H.aqH,A.f,w,w,D.b6p,w,56,w,w,w,w,w,56),A.aQ,D.fWm,A.am,new B.jZ(this.c,new C.fhx(),w,w,x.cI),A.aQ,new B.jZ(this.d,new C.fhy(),w,w,x.cl),A.ae,D.fWk],x.p),A.m,w,A.e,A.P,0,A.p),A.f,w,Af.LF,new B.o(A.au,w,u,v,w,w,A.n),w,w,w,K.a0e,D.bE9,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)}}
C.a8u.prototype={
R(){return new C.bme(A.bC)},
gd0(){return this.c}}
C.bme.prototype={
Z(){var w=this
w.a3()
if(w.a.d)return
w.a_U()
w.d=B.df(A.fB,new C.eow(w))},
t(){var w=this.d
if(w!=null)w.a2(0)
this.a1()},
a_U(){return this.cqX()},
cqX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_U=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eou(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bF(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ckE(p.c),$async$a_U)
case 6:r=e
q.a=r==null?A.bC:r
case 4:if(t.c==null){w=1
break}t.m(new C.eov(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a_U,v)},
bSP(d){var w,v,u=d.a,t=A.o.ao(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ao(u,6e7)%60
v=A.o.ao(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aY(A.o.u(w),2,"0")+"m "+A.a.aY(A.o.u(v),2,"0")+"s left"
return A.a.aY(A.o.u(w),2,"0")+":"+A.a.aY(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bK
w=s.e.a
v=A.o.ao(w,6e7)<30&&A.o.ao(w,36e8)<999?A.aw:A.c3
w=v.j(0.14)
u=B.n(14)
t=B.L(v.j(0.55),A.r,1)
return B.p(r,B.B(B.a([B.X(A.Ha,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bSP(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.i,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,Aa.akT,A.it,r,r,1/0)}}
C.a9n.prototype={
nr(){var w,v,u,t=this
t.xA()
w=t.cx
v=t.c
w.bt8(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qc(B.H(["/S",D.esJ,"/URI",new B.rT(B.Xf(w.as),A.vg,!0)],x.N,u),u))}}
C.a9o.prototype={
a6(){return"PdfAnnotFlags."+this.b}}
C.b4C.prototype={
bAK(d,e,f,g,h,i,j,k,l,m){var w=B.eD([D.er1],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcQM(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.k5(w,new C.co7(),B.a6(w).k("k5<cs.E,G>")).f6(0,new C.co8())},
aEq(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hk(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tS(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jr(d.a,d.b))
s.n(0,"/Border",B.tS(H.asK))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h7(t.gcQM()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qc(w,x.Y))}}
C.co9.prototype={}
C.a3C.prototype={}
C.aj1.prototype={}
C.aSR.prototype={
fX(d){var w,v,u,t,s,r,q=this,p=null
q.lx(d)
q.Mx(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bid(w)
u=x.N
t=x.Y
s=new C.co9(q.d.a,"/Link",w,p,p,p,p,p,B.U(u,t))
s.bAK(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qc(B.H(["/Type",D.esH],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9n(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.M(0,r)
v.dx.push(r)}}
C.ay3.prototype={}
C.aUn.prototype={
fX(d){var w,v,u,t,s=this
s.lx(d)
w=s.b
if(w!=null){v=B.dt()
u=s.a
v.eh(u.a,u.b,0,1)
u=d.b
u.ip()
t=s.a
t.toString
u.LD(t)
u.Tb(0)
u.pf(0,v)
w.fX(d)
u.nu(0)}}}
var z=a.updateTypes(["aB<~>()","~(lX)","P(i7)","~()","P(eP)","P(oE)","P(lX)","~(i7)","P(eP,eP)","Kr(Z)","P(o1)","P(lr)","aB<P>()","G(G,i7)","a8<m,@>(i7)","ai<zY>()","m(o1)","P(a8L)","m(lX)","m(wo)","P(Fb)","G(i7,i7)","m(eP)","v(eP)","cO(eP)","v(hJ)","~(hJ)","eP(v7,I,I,I,I,G{fx:m,key:m,rotation:I})","eP(m,I,G)","G(oE,oE)","P(zY)","P(m,ai<zY>)","a8<m,@>(oE)","o1()","Zl(Z)","eP(m,I,I,I,I,I{align:qi,anim:hJ,bullets:P,color:G?,delay:G,fx:m,key:m,style:Id,weight:nP})","a1F(Z)","eP(m,I,I,I,I{anim:hJ,delay:G,fx:m,key:m})","aB<~>(oE)","P(mM)","Zj(Z)","a1a(Z)","a19(Z)","Q5(Z)","a_w(Z)","eP(v7,I,I,I,I,G,m,m{anim:hJ,delay:G,rotation:I,stroke:G,strokeWidth:I})","eP(m,I,I,I,I,I,m,m,G)","eP(I,I,m,G{size:I})","v(rH,I,I)","lr()","oE(a8<@,@>)","~(uY)","Fb()","fj(eP)","v(ja)","a_3(Z)","~(F2)","a_o(Z)","G(eP,eP)","eP(eP)","a8<m,@>(eP)","eP(a8<@,@>)","lX(lX)","a8<m,@>(lX)","lX(a8<@,@>)","P(jW)","jW()","m(i7)","~(ai<oE>)","V(ai<i7>)","V(i7)","ai<i7>(m?)","adq(Z,G)","~(P(eP,eP))","ae4(Z)","afK(Z,G)","t(lX,P)","Ws(Z)","ae7(Z)","Wt(Z)","~(mQ)","i7(i7)","I(eP)","a0E(Z)","a0g(Z)","i7()","ai<Fy>()","aB<~>(ai<i7>)","v(bA<G,i7>)","D(jW)","D(Fb)","aB<~>(hJ,~())","v(ai<hJ>,hJ?,~(hJ),t)","P(mm)","ai<jD<mQ>>(Z)","jD<mQ>(mQ)","i7(a8<@,@>)","WE(Z)","eP(m,I,I,I,I,I,G{align:qi,style:Id,weight:nP})","WF(Z)","v(i7)","~(mf)","Ji(Z,lX,v?)","G(a9o)","aB<ai<a8<m,@>>?>()","m(m)","aB<zX>({paper:m?,photo:dL?,request:m,template!lu})","aB<a8D>({doc!zX,history:ai<+(m,m)>,instruction!m,photo:dL?,template!lu})","ae1(Z)"])
C.cMY.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:65}
C.cMZ.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:72}
C.cN_.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gald(s):16;--w.c}w.b=A.o.dW(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mB(v,t)
w.b=v-A.o.dW(q,t)
w.a=t
return q},
$S:72}
C.cN0.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bTf.prototype={
$1(d){return J.eH(A.dK.gaS(d),d.byteOffset,d.byteLength)},
$S:1681}
C.fEg.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iT(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iT(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iT(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iT(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1682}
C.c39.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:28}
C.c3a.prototype={
$2(d,e){var w,v=J.r(e,"savedAt")
v=J.k(v==null?"":v)
w=J.r(d,"savedAt")
return A.a.aO(v,J.k(w==null?"":w))},
$S:41}
C.c3c.prototype={
$1(d){var w=J.r(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fUW.prototype={
$1(d){return new C.a1F(this.a,this.b,C.ilt(),null)},
$S:z+36}
C.fg_.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fg3.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fg4.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fg5.prototype={
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
C.fg0.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fg1.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fg2.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.ffV.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.he,w,w,w)
return B.ei(B.a([B.bM(!1,E.aVX,w,w,!0,w,w,w,new C.ffT(d),w,w),B.bM(!1,D.fHy,w,w,!0,w,w,w,new C.ffU(d),w,w)],x.p),w,w,D.ZA,v,w,w,w,w,D.fWZ,w)},
$S:18}
C.ffT.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ffU.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ffW.prototype={
$0(){return this.a.r=!0},
$S:0}
C.ffX.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fg9.prototype={
$0(){var w=this.a
return w.m(new C.fg8(w,this.b))},
$S:0}
C.fg8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ffZ.prototype={
$0(){var w=this.a
return w.m(new C.ffY(w,this.b,this.c))},
$S:0}
C.ffY.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.M(0,v)},
$S:0}
C.fg6.prototype={
$0(){return this.a.a22(this.b)},
$S:0}
C.fg7.prototype={
$0(){return this.a.PD(0,this.b)},
$S:0}
C.fgc.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fgd.prototype={
$0(){var w=this.a
return w.m(new C.fgb(w,this.b))},
$S:0}
C.fgb.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.aa(0)
else{w=w.a.c
v.v(0,new B.N(w,new C.fga(),B.T(w).k("N<1,m>")))}},
$S:0}
C.fga.prototype={
$1(d){return d.a},
$S:z+67}
C.fnF.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hkM(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cB)
t=t.h(0,"updatedAt")
u=B.bk(J.k(t==null?"":t))
return new C.oE(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+50}
C.fnG.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fHj.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbr())q=n===o.gbr()&&p.b>o.gcE()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fHh.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fHi.prototype={
$2(d,e){return e.c.aO(0,d.c)},
$S:z+29}
C.fUr.prototype={
$1(d){return d.ah()},
$S:z+32}
C.fDV.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fVh.prototype={
$1(d){return new C.Zl(this.a,null)},
$S:z+34}
C.cOk.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cOm.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cOp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cOq.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cOo())},
$S:12}
C.cOo.prototype={
$0(){},
$S:0}
C.cOr.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a2D(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cF(s)
p=q.bg(s,new C.cOn(r))
if(p<0)q.c6(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aih(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:303}
C.cOn.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cOs.prototype={
$1(d){},
$S:30}
C.cOl.prototype={
$1(d){return new C.Zj(this.b,this.a.gcAU(),null)},
$S:z+40}
C.cOt.prototype={
$1(d){return D.ho5},
$S:z+43}
C.cOg.prototype={
$1(d){var w=null,v=B.n(24),u=B.L(D.Zb,A.r,1),t=x.p
return B.at(B.aI(!1,A.a2,!0,w,B.p(w,B.x(B.a([new B.D(D.bDW,B.x(B.a([B.p(w,D.bSZ,A.f,w,w,new B.o(A.aw.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fGt,A.W,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.ftR,A.K,w,w)],t),A.m,w,A.e,A.i,0,A.p),w),A.dT,new B.D(A.qo,B.B(B.a([B.E(B.dT(D.fNv,new C.cOe(d),B.dk(w,w,w,w,w,w,w,w,w,E.nl,w,w,A.cm,w,new B.b8(B.n(14),A.a0),D.b3H,w,w,w,w)),1),A.as,B.E(B.bI(D.fTH,w,new C.cOf(d),B.bo(A.bB,w,w,w,w,w,A.cm,w,new B.b8(B.n(14),A.a0),w,w,w)),1)],t),A.m,w,A.e,A.i,0,w,w),w)],t),A.m,w,A.e,A.P,0,A.p),A.f,w,A.xF,new B.o(D.afU,w,u,v,D.d7A,w,A.n),w,w,w,K.a0e,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1683}
C.cOe.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cOf.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cOh.prototype={
$0(){return J.nJ(this.a.d,new C.cOd(this.b))},
$S:0}
C.cOd.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cOc.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.L(D.Zb,A.r,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bY2,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.ash,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a1,t,t,t,D.aVC,t,t,t),A.bF,D.fTC],q),A.E,t,A.e,A.i,0,A.p),1)],q),A.m,t,A.e,A.i,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dv8[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.az0(u[1],u[2],u[3],new C.cOa(v,d),!1,t))}q.push(A.am)
q.push(D.bxR)
q.push(A.am)
q.push(new C.az0(A.eb,"Delete book","Remove it from this device",new C.cOb(d),!0,t))
return B.bn(!0,B.p(t,B.x(q,A.E,t,A.e,A.P,0,A.p),A.f,t,t,new B.o(D.afU,t,r,s,t,t,A.n),t,t,t,A.uk,E.a_S,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cOa.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cOb.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cOj.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aL7,12)],x.V)
return B.dR(B.eM(A.A,e,B.p(w,B.bx(B.n(4),new B.a4(62,95.81818181818181,B.eO(A.A,F.apa(d),A.f,A.dz),w),A.ap),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cOi.prototype={
$0(){return this.a.c6I()},
$S:0}
C.cO9.prototype={
$0(){return this.a.b_i(0,this.b)},
$S:0}
C.cO8.prototype={
$0(){return this.a.Dx(this.b)},
$S:0}
C.cO7.prototype={
$0(){return this.a.Dx(this.b)},
$S:0}
C.cOu.prototype={
$2(d,e){var w=this.a
return w.bFh(J.r(w.d,e))},
$S:42}
C.cNB.prototype={
$0(){var w=this.a
if(w.c!=null)w.B1()},
$S:0}
C.cNA.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b2p("Page "+(v.length+1),"",""))},
$S:0}
C.cND.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cNL.prototype={
$0(){},
$S:0}
C.cNM.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:7}
C.cNE.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cK.gcu().aP(this.c)},
$S:0}
C.cNC.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cNG.prototype={
$0(){return this.a.R4(this.b)},
$S:0}
C.cNH.prototype={
$0(){return this.a.R4(this.b)},
$S:0}
C.cNI.prototype={
$0(){var w=this.a
w.m(new C.cNF(this.b))
w.Eo()},
$S:0}
C.cNF.prototype={
$0(){return this.a.c=""},
$S:0}
C.cNK.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cNJ(w,d))
w.Eo()},
$S:z+51}
C.cNJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cNR.prototype={
$2(d,e){if(d)this.a.B1()},
$S:126}
C.cNN.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.B1(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.U(D.fgG)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cNO.prototype={
$0(){return this.a.aZc(this.b,-1)},
$S:0}
C.cNP.prototype={
$0(){return this.a.aZc(this.b,1)},
$S:0}
C.cNQ.prototype={
$0(){return this.a.c83(0,this.b)},
$S:0}
C.fLR.prototype={
$1(d){return C.huR()},
$S:44}
C.fLS.prototype={
$1(d){return null},
$S:30}
C.frW.prototype={
$1(d){return null},
$S:30}
C.fMQ.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:320}
C.fMP.prototype={
$2(d,e){return A.o.aO(e.length,d.length)},
$S:230}
C.fMW.prototype={
$1(d){var w=this.a
return C.hd0(d)===w||C.hzG(d)===w},
$S:z+4}
C.fqZ.prototype={
$1(d){return A.a.aY(A.o.u(d),2,"0")},
$S:73}
C.ceR.prototype={
$1(d){return d.length!==0},
$S:3}
C.fLP.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fLQ.prototype={
$1(d){return C.fOz(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fGF.prototype={
$1(d){var w=null
return B.bn(!0,new B.D(E.yz,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fO7,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dj(D.HM,D.fIb,new C.fGD(d),B.bo(A.c3,w,w,w,A.w,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.uO,D.fPr,new C.fGE(d),B.dk(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xD,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fGD.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fGE.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fGG.prototype={
$1(d){var w=null
return B.ei(B.a([B.bM(!1,D.fEb,w,w,!0,w,w,w,new C.fGB(d),w,w),B.bI(D.fW_,w,new C.fGC(d),w)],x.p),w,w,w,D.fXX,w,w,w,w,D.fE4,w)},
$S:18}
C.fGB.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fGC.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ejN.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.ejL.prototype={
$0(){return this.a.e=!0},
$S:0}
C.ejM.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ejO.prototype={
$0(){return this.a.r=!1},
$S:0}
C.ejP.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fMV.prototype={
$1(d){return A.a.aY(A.o.u(d),2,"0")},
$S:73}
C.fMR.prototype={
$2$h$w(d,e){var w=null
return new B.bN(A.a5,w,w,B.BF(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1684}
C.fMT.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fva,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:136}
C.fMU.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.ip,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dR(B.p(w,w,A.f,w,w,new B.o(w,w,B.L(A.ip,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b9,A.i,0,w,w)},
$0(){return this.$1$size(18)},
$S:1685}
C.fMS.prototype={
$2$female$size(d,e){var w=null,v=d?D.ai6:this.a,u=B.L(A.ip,A.r,1),t=e*0.32,s=B.ap(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ab,A.t,B.a([s,B.ap(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ag9,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1686}
C.fYK.prototype={
$1(d){return new C.ae1(this.a,this.b,null)},
$S:z+108}
C.e6i.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.buv:A.MO,q=B.L(D.jv.j(0.25),A.r,1),p=B.at(B.p(t,t,A.f,t,t,new B.o(A.c3.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.ar0,A.f,t,t,new B.o(t,t,B.L(A.c.j(0.5),A.r,1.2),o,B.a([new B.ac(0,A.G,D.jv.j(0.35),A.en,10)],x.V),D.c6X,A.n),t,t,t,t,A.yq,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(O.a04,B.x(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jv,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fum,t,t,t)],u),A.E,t,A.e,A.i,0,A.p),1)],u),A.m,t,A.e,A.i,0,t,t)],u),A.m,t,A.e,A.i,0,A.p),t),B.E(B.ip(!0,t,e,A.y,D.aSV,new C.e6h(w,this.c),v,D.alH,t,A.ah,!1),1)],u),A.m,t,A.e,A.i,0,A.p),A.f,t,t,new B.o(r,t,q,A.mw,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:118}
C.e6h.prototype={
$2(d,e){var w=this.a.d[e]
return new C.adq(w,new C.e6g(this.b,w),null)},
$S:z+72}
C.e6g.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fGJ.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fGK.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yz,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fRG,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dj(D.HM,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fGH(d),B.bo(D.jv,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ow,D.VI,new C.fGI(d),B.dk(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xD,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fGH.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fGI.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fGN.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fGO.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yz,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fFf,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dj(D.HM,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fGL(d),B.bo(D.jv,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ow,D.VI,new C.fGM(d),B.dk(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xD,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fGL.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fGM.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fGR.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fGS.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yz,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fLT,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dj(D.HM,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fGP(d),B.bo(D.jv,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ow,D.VI,new C.fGQ(d),B.dk(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xD,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fGP.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fGQ.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.h_c.prototype={
$1(d){return D.htf},
$S:z+74}
C.eoz.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bl8:A.MO,s=B.L(A.aA.j(0.25),A.r,1),r=B.at(B.p(v,v,A.f,v,v,new B.o(A.aA.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.c_o,A.f,v,v,new B.o(v,v,B.L(A.c.j(0.5),A.r,1.2),q,B.a([new B.ac(0,A.G,A.c3.j(0.35),A.en,10)],x.V),D.asm,A.n),v,v,v,v,A.yq,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(O.a04,B.x(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:A1.MK,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bF,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.frN,v,v,v)],w),A.E,v,A.e,A.i,0,A.p),1)],w),A.m,v,A.e,A.i,0,v,v)],w),A.m,v,A.e,A.i,0,A.p),v),B.E(B.ip(!0,v,e,A.y,D.aSV,new C.eoy(this.b),19,D.alH,v,A.ah,!1),1)],w),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.mw,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eoy.prototype={
$2(d,e){var w=D.Sk[e]
return new C.afK(w,new C.eox(this.a,w),null)},
$S:z+75}
C.eox.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fOD.prototype={
$0(){return B.hbY(C.i8H(this.a))},
$S:286}
C.fOC.prototype={
$0(){var w=C.hdj(this.a)
return"data:image/png;base64,"+A.cK.gcu().aP(w)},
$S:23}
C.fpg.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.js(d,e),new B.js(w,e+v),new B.js(d+f*14,e),new B.js(w,e-v)],x.J)
B.a2A(this.a,C.fI(4291404327),v)},
$S:705}
C.h_n.prototype={
$1(d){return new C.Ws(this.a,null)},
$S:z+77}
C.erw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.erv())},
$S:29}
C.erv.prototype={
$0(){},
$S:0}
C.erx.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eru(w,d))},
$S:1688}
C.eru.prototype={
$0(){return this.a.x=J.eT(A.dK.gaS(this.b))},
$S:0}
C.ery.prototype={
$1(d){},
$S:30}
C.er8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.er4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erf.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.erg.prototype={
$0(){var w=this.a
A.d.aa(w.ay)
w.z=this.b
w=w.ax
A.d.aa(w)
w.push(D.eDr)},
$S:0}
C.erh.prototype={
$0(){return this.a.as=!1},
$S:0}
C.era.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bP(0,A.cb)},
$S:0}
C.erb.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.erc.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.w(this.b)))},
$S:0}
C.erd.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ere.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd4(v).Q
v.toString
w.ml(v,A.dU,A.iH)}},
$S:7}
C.er9.prototype={
$0(){var w=this.a,v=w.z,u=C.fPg(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cMt(C.fPg(t))},
$S:0}
C.er6.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.er7.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ern.prototype={
$0(){return B.a5(this.a,!1).im()},
$S:0}
C.ero.prototype={
$0(){var w=this.a
return w.m(new C.erm(w))},
$S:0}
C.erm.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.erp.prototype={
$0(){var w=this.a
return w.m(new C.erl(w,this.b))},
$S:0}
C.erl.prototype={
$0(){var w=this.b.b
this.a.e.saZ(0,w)
return w},
$S:0}
C.erq.prototype={
$1(d){var w=this.a
return w.m(new C.erk(w))},
$S:9}
C.erk.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.err.prototype={
$1(d){var w=this.a
return w.m(new C.erj(w))},
$S:9}
C.erj.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ers.prototype={
$0(){var w=this.a
return w.m(new C.eri(w,this.b))},
$S:0}
C.eri.prototype={
$0(){var w=this.b
this.a.f.saZ(0,w)
return w},
$S:0}
C.ert.prototype={
$1(d){return this.a.a_G()},
$S:2}
C.er5.prototype={
$0(){return this.a.cbI(this.b)},
$S:0}
C.ciw.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cR(w.h(0,d))):null},
$S:310}
C.ciu.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.civ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fOd.prototype={
bnr(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bTe(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cIM($.rg().jl(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mR(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bnr(d,e)},
$S:1689}
C.fMv.prototype={
$1(d){return d.length!==0},
$S:3}
C.fMx.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.du(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:73}
C.fMw.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fz(t,t,t,t,B.cT(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.r0,A.bX,t,A.dA,A.bV)
v=this.a
w.o2(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:34}
C.foQ.prototype={
$1(d){var w=A.a.ft(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.foR(),B.T(w).k("Y<1>")).gK(0)},
$S:263}
C.foR.prototype={
$1(d){return d.length!==0},
$S:3}
C.foO.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.foP.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:215}
C.cix.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaBI()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.hd_(i,new B.F(!0,h,a6,k,a6,a6,q,A.cR,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h9N(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gck3(),"\n\n")
d=B.fz(a6,a6,a6,a6,B.cT(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afg(k,q,1.28),j),A.r0,A.bX,a6,A.dA,A.bV)
d.o2(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hd_(i,new B.F(!0,h,a6,k,a6,a6,q,A.cR,A.bp,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.h9N(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afg(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.bb,new B.y(o.length>a4?o[a4]:"",a6,a3,a6,A.r0,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aBH(s,j))
i.push(new B.a4(s,a6,B.x(h,A.E,a6,A.e,A.i,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.E,a6,A.e,A.i,0,a6,a6)},
$S:464}
C.ciy.prototype={
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
n=o.gaBI()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.hd_(f,new B.F(!0,e,a5,i,a5,a5,h,A.cR,A.bp,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.h9N(g.length===0?B.a([a6],n):g,l))break}a1=o.afg(i,h,1.28)
a2=new C.ciz(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.Ka,new B.a4(v,a5,a4.f,a5),A.Ka,a2.$2(l[1],u)],n),A.E,a5,A.e,A.i,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bGk,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.bb,new B.y(l[2+a3],a5,a1,a5,A.r0,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aBH(r,g))
f.push(new B.a4(r,a5,B.x(e,A.E,a5,A.e,A.i,0,A.p),a5))
A.d.v(k,f)}return B.x(B.a([new B.a4(a5,q,v,a5),A.ae,B.E(B.B(k,A.E,a5,A.e,A.i,0,a5,a5),1)],n),A.m,a5,A.e,A.i,0,A.p)},
$S:151}
C.ciz.prototype={
$2(d,e){var w=null
return new B.a4(e,w,B.d(d,w,w,w,w,w,w,this.a,A.r0,w,w),w)},
$S:1690}
C.h_q.prototype={
$1(d){return new C.Wt(this.a,this.b,null)},
$S:z+79}
C.esi.prototype={
$1(d){return d.lP()},
$S:1691}
C.esj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.esh(w,d))},
$S:1692}
C.esh.prototype={
$0(){var w=this.b
return this.a.d=w.gfI(w)},
$S:0}
C.es5.prototype={
$0(){return this.a.y=!0},
$S:0}
C.es6.prototype={
$0(){return this.a.y=!1},
$S:0}
C.esc.prototype={
$0(){return B.a5(this.a,!1).eN()},
$S:0}
C.esd.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.L(A.bE,A.r,2.5)
return B.aA(w,B.p(w,B.b4(w,w,w,new C.bdM(u,v.gayK(),w),A.fF),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esa(v),new C.esb(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a3)},
$S:36}
C.esa.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:249}
C.esb.prototype={
$1(d){var w=this.a
w.m(new C.es7(w,d,this.b,this.c))},
$S:225}
C.es7.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.E(s.x*r.d,1,6)
w=s.gayK()
r=r.a
v=t.c
u=t.d
s.r=A.k.E(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.E(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ese.prototype={
$1(d){var w=this.a
return w.m(new C.es9(w,this.b))},
$S:9}
C.es9.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esf.prototype={
$1(d){var w=this.a
return w.m(new C.es8(w,d))},
$S:6}
C.es8.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esg.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.h_G.prototype={
$1(d){return D.hw2},
$S:z+83}
C.f18.prototype={
$1(d){return this.a.Zj()},
$S:7}
C.f00.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cK.gcu().aP(v)},
$S:0}
C.f0o.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f0y.prototype={
$1(d){return d>=this.a.length},
$S:34}
C.f_K.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f_L.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f_I.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f_J.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f0h.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.f0i(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jm(B.rY(p>0.2?F.bWG(q,B.TZ(p,p,A.x)):q),A.t,u)],x.p)
w=s.bk
if(w>0.02){v=B.TZ(12,12,A.x)
p.push(B.jm(B.db(B.rY(F.bWG(r.$1(!0),v)),w*0.75),A.t,u))}r=s.b5
if(r!=null&&s.b4>0)p.push(B.ec(u,B.b1(r).j(s.b4),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b1(r).j(s.bM)
w=s.be
w.toString
p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c_(D.b1i,1.15,A.x,u,0,B.a([r,B.b1(w).j(0)],x.O),u,u),A.n),A.bh))}r=s.aH
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c_(D.b13,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bh))
r=s.aM
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.a9(A.b0,A.b6,A.x,B.a([A.w.j(r),A.L,A.L,A.w.j(s.aM)],x.O),D.d68,u),A.n),A.bh))
if(s.aC>0){r=s.k1
p.push(B.ap(u,B.c4(u,new B.o(u,u,u,u,u,new B.a9(A.b0,A.b6,A.x,B.a([A.w.j(0),A.w.j(s.aC),A.w.j(s.aC),A.w.j(0)],x.O),D.dhO,u),A.n),A.bh),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.a_
if(r>0)p.push(B.ec(u,A.w.j(r),!0))
r=s.b8
if(r>0)p.push(B.c4(u,new B.o(u,u,u,u,u,new B.c_(A.A,0.95,A.x,u,0,B.a([A.L,A.w.j(r)],x.O),D.deH,u),A.n),A.bh))
s=s.aB
if(s>0)p.push(B.b4(u,u,u,new C.bhp(s,u),A.ax))
return new B.an(A.a_,u,A.b3,A.t,p,u)},
$S:66}
C.f0i.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fU(r.b,A.A,q,q,A.ci,A.bY,!0,q,!1,q,q),o=r.a,n=o.aYP(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bj
v=o.aL
u=v-1
t=o.bG
s=o.c5?-1:1
return B.dR(B.ee(A.A,B.eM(A.A,l,B.fA(A.A,new B.Bs(new B.xy(q,q,n,A.Bb),p,q),q,B.wb(s,o.cL?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:543}
C.f0u.prototype={
$0(){return this.a.m(new C.f0t(this.b,this.c))},
$S:0}
C.f0t.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0v.prototype={
$1(d){return this.a.m(new C.f0s(this.b,d))},
$S:6}
C.f0s.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f0x.prototype={
$0(){return this.a.m(new C.f0w(this.b,this.c))},
$S:0}
C.f0w.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f_A.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.f_B.prototype={
$1(d){var w=this.a
return w.m(w.gcCh())},
$S:2}
C.f_C.prototype={
$1(d){return this.a.m(new C.f_z())},
$S:2}
C.f_z.prototype={
$0(){},
$S:0}
C.f_D.prototype={
$0(){var w=this.a
return w.m(new C.f_y(w,this.b))},
$S:0}
C.f_y.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f_F.prototype={
$2(d,e){return A.as},
$S:37}
C.f_E.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bz
q=B.L(q,A.r,t?2.5:1)
r=B.cY(w,B.at(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b5,new B.o(w,w,q,s,w,new B.a9(A.b0,A.b6,A.x,r,w,w),A.n),A.h5,w,94,w,w,w,w,w,70)
return B.aA(w,new B.a4(70,w,B.x(B.a([r,A.fG,B.d(v.b,w,1,A.a1,w,w,w,B.l(w,w,t?A.c:A.aC,w,w,w,w,w,w,w,w,10.5,w,w,A.U,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.i,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f_x(u,v),w,w,w,w,w,w,!1,A.a3)},
$S:84}
C.f_x.prototype={
$0(){var w=this.a
return w.m(new C.f_u(w,this.b))},
$S:0}
C.f_u.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f_G.prototype={
$1(d){var w=this.a
return w.m(new C.f_w(w,d))},
$S:9}
C.f_w.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f_H.prototype={
$1(d){var w=this.a
return w.m(new C.f_v(w,d))},
$S:9}
C.f_v.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f0Y.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gI(this.b)]},
$S:34}
C.f14.prototype={
$1(d){var w=this.a
return w.m(new C.f15(w,d))},
$S:32}
C.f15.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.eg(v,v.r,B.a6(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f16.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:187}
C.f0Z.prototype={
$0(){var w=this.a
return w.m(new C.f0X(w,this.b))},
$S:0}
C.f0X.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.M(0,v)},
$S:0}
C.f1_.prototype={
$0(){var w=this.a
return w.m(new C.f0W(w,this.b))},
$S:0}
C.f0W.prototype={
$0(){var w,v=this.b.length,u=J.e0(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.f10.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f0V(v,w.b,w.c,w.d))},
$S:0}
C.f0V.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.aa(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.f11.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gt4(v))},
$S:0}
C.f12.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f13.prototype={
$0(){var w=this.a
return w.m(new C.f0U(w))},
$S:0}
C.f0U.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.f0H.prototype={
$1(d){return d.a===this.a.dy},
$S:240}
C.f0I.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aAy[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.ayO(new B.np(new B.bh(n,n,n,n),A.ap,new B.l2(new B.o(j,j,j,j,j,new B.a9(A.a5,A.a8,A.x,m,j,j),A.n),A.bh,new C.b0Q(l,B.b1(k==null?v.w.x:k),A.k.E(w,12,26),j),j),j),u,q.b,o===p,new C.f0G(r,v),2,i))}return B.bX(A.bG,h,A.br,j,7,7)},
$S:169}
C.f0G.prototype={
$0(){var w=this.b
return w.m(new C.f0B(this.a,w))},
$S:0}
C.f0B.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f0J.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:163}
C.f0M.prototype={
$0(){var w=this.a
return w.m(new C.f0F(w))},
$S:0}
C.f0F.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f0N.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f0O.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f0P.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f0Q.prototype={
$0(){var w=this.a
return w.m(new C.f0E(w))},
$S:0}
C.f0E.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f0R.prototype={
$0(){var w=this.a
return w.m(new C.f0D(w))},
$S:0}
C.f0D.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f0S.prototype={
$0(){var w=this.b
return w.m(new C.f0C(this.a,w))},
$S:0}
C.f0C.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f0T.prototype={
$1(d){return this.a.fx=d},
$S:163}
C.f0K.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f0L.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f0l.prototype={
$0(){var w=this.a
return w.m(new C.f0k(w))},
$S:0}
C.f0k.prototype={
$0(){var w=this.a
w.p4=null
w.b56()},
$S:0}
C.f0m.prototype={
$0(){var w=this.a
return w.m(new C.f0j(w,this.b))},
$S:0}
C.f0j.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f0n.prototype={
$0(){var w=this.a
return w.m(w.gcsA())},
$S:0}
C.f0d.prototype={
$0(){var w=this.a
return w.m(new C.f0c(w))},
$S:0}
C.f0c.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f0e.prototype={
$0(){var w=this.a
return w.m(new C.f0b(w))},
$S:0}
C.f0b.prototype={
$0(){var w=this.a
w.aC=0.55
w.a_=Math.max(w.a_,0.12)},
$S:0}
C.f0f.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.df8[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.ayO(new B.np(new B.bh(p,p,p,p),A.ap,new B.a4(1/0,1/0,new B.Bs(new B.xy(o,o,v.aYP(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Bb),B.fU(u,A.A,140,o,A.ci,A.bY,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f0a(v,s),3,n))}return B.bX(A.bG,m,A.br,o,10,8)},
$S:169}
C.f0a.prototype={
$0(){var w=this.a
return w.m(new C.f09(w,this.b))},
$S:0}
C.f09.prototype={
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
C.f_S.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f_T.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f_U.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f_V.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f_W.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f_X.prototype={
$1(d){return this.a.a_=d},
$S:6}
C.f_Y.prototype={
$1(d){return this.a.b8=d},
$S:6}
C.f_Z.prototype={
$1(d){return this.a.aC=d},
$S:6}
C.f0_.prototype={
$1(d){return this.a.aM=d},
$S:6}
C.f_d.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f_e.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f_f.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f_g.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f_h.prototype={
$0(){var w=this.a
return w.m(new C.f_c(w))},
$S:0}
C.f_c.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f_i.prototype={
$1(d){return this.a.b5=d},
$S:163}
C.f_j.prototype={
$1(d){return this.a.b4=d},
$S:6}
C.f_M.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f_N.prototype={
$1(d){return this.a.bk=d},
$S:6}
C.f_O.prototype={
$1(d){return this.a.aB=d},
$S:6}
C.f_P.prototype={
$1(d){return this.a.be=d},
$S:163}
C.f_Q.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.f_n.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f_o.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.f_p.prototype={
$1(d){return this.a.bG=d},
$S:6}
C.f_q.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f_r.prototype={
$0(){var w=this.a
return w.m(new C.f_m(w))},
$S:0}
C.f_m.prototype={
$0(){var w=this.a
return w.c8=A.k.F(w.c8+90+180,360)-180},
$S:0}
C.f_s.prototype={
$0(){var w=this.a
return w.m(new C.f_l(w))},
$S:0}
C.f_l.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f_t.prototype={
$0(){var w=this.a
return w.m(new C.f_k(w))},
$S:0}
C.f_k.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.f0g.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iog(v,w.p4)},
$S:0}
C.f08.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.buQ:B.fU(v,A.A,w,w,A.ci,A.bY,!1,w,!1,w,w)
return C.fMD(d.length===0?"rounded":d,u,e)},
$S:125}
C.f04.prototype={
$0(){var w=this.a
return w.m(new C.f03(w))},
$S:0}
C.f03.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f05.prototype={
$0(){var w=this.b
return w.m(new C.f02(this.a,w))},
$S:0}
C.f02.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f06.prototype={
$0(){var w=this.b
return w.m(new C.f01(this.a,w))},
$S:0}
C.f01.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f07.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.E(w.ay,0,1-d)
w.ch=A.k.E(w.ch,0,0.95)},
$S:6}
C.f0r.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.I,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.er(n.clZ(),n.r))
l.push(new C.Ji(n.czc(),!1,!1,t))
o=B.bT(0,B.bx(o,new B.er(new B.an(A.a_,t,A.b3,A.t,l,t),n.f),A.ap),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.a_,t,A.ab,A.t,B.a([o,B.ap(t,B.aA(A.c6,B.c4(t,new B.o(t,t,B.L(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bh),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f0q(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a3),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:219}
C.f0q.prototype={
$1(d){var w=this.a
return w.m(new C.f0p(w,d,this.b,this.c))},
$S:19}
C.f0p.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.E(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.E(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f0A.prototype={
$0(){var w=this.a
return w.m(new C.f0z(w,this.b))},
$S:0}
C.f0z.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f_R.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).im()},
$S:0}
C.f17.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a4(Math.min(s*0.4,460),t,B.x(B.a([w.b0J(),B.E(B.at(w.b3I(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.i,0,A.p),t),B.E(B.x(B.a([B.E(w.aRP(),1),w.aO_()],v),A.m,t,A.e,A.i,0,A.p),1)],v),A.m,t,A.e,A.i,0,t,t)}u=A.k.E(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b0J(),new B.D(A.hA,B.at(s.b3I(u),t,t,t),t),B.E(s.aRP(),1),s.aO_()],x.p),A.m,t,A.e,A.i,0,A.p)},
$S:671}
C.fJU.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ew(k,!1,j,A.aF,"",4280640491,i,l,m,"",h,C.bCK(),null,"","",0,!1,"",0,D.bi,4280172719,2,d,0,0,"",D.co,D.cV,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bp,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bp,A.U)},
$S:z+98}
C.fJT.prototype={
$3(d,e,f){var w=this,v=C.bCK(),u=w.b?A.H:A.cA,t=w.c?A.cD:A.bp
return C.ew(w.d,!1,f,A.aF,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bi,4280172719,2,d,0,w.f,w.e,D.co,D.cV,0.82,0.09,w.a)},
$S:z+28}
C.ck1.prototype={
$1(d){return B.w(d)},
$S:17}
C.fRD.prototype={
$0(){return this.a},
$S:z+15}
C.fwN.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+30}
C.fwO.prototype={
$2(d,e){return J.ct(e)},
$S:z+31}
C.fRF.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fRI.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fRJ.prototype={
$0(){return A.d.gI(D.wN)},
$S:z+33}
C.fRB.prototype={
$1(d){return d.a},
$S:z+16}
C.fRE.prototype={
$1(d){return d.a},
$S:z+16}
C.fPz.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fPA.prototype={
$1(d){return d.length!==0},
$S:3}
C.fPB.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fJY.prototype={
$0(){return C.cG()},
$S:23}
C.fK0.prototype={
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
C.fK_.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.co,D.fc,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fJZ.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.co,t=v?j:0
return C.ew(A.bj,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",h,w,d,v?k:"",l,0,!1,"",0,D.bi,4280172719,2,"",t,0,"",u,D.lO,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qQ,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fJX.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fMo.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hvT.c3(0,A.a.i(s.w).toLowerCase(),new C.fMm(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fMn(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.bqx(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1695}
C.fMm.prototype={
$0(){return F.aPf(this.a.w)},
$S:189}
C.fMn.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bBE("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.ih(2,w,A.ch,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:189}
C.foK.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.foL.prototype={
$1(d){return d.a},
$S:z+18}
C.foM.prototype={
$1(d){return d.b},
$S:z+19}
C.h_S.prototype={
$1(d){return D.hwi},
$S:z+41}
C.f7z.prototype={
$0(){return this.a.x=C.i00(this.b,this.c.b)},
$S:0}
C.f7A.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.f7x.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:369}
C.f7y.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:369}
C.f7w.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bV(A.au,null,new C.f7r(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k7,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b3(s,7)
if(r.length===0){n.m(new C.f7s(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hC6(o,m.cNg(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.f7t(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.f7r.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.f7v(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bbf,A.f,p,p,D.b68,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.CZ:D.D5,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a4(64,64,C.fMD(v,i.b5K(h),u),p)))}t=B.kR(1,m,4,10,10,p,A.dS,!0)
if(!l)return B.bn(!0,new B.D(Ab.yx,t,p),!0,!1,A.af,!0,!0)
s=new C.f7u(i,d)
m=B.aG(d,A.bZ,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.I5[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cU(new B.aZ(0,1/0,0,m.a.b*0.85),B.ci(B.x(B.a([D.fKg,A.W,t,A.dT,D.f62,A.av,D.fVl,A.W,B.kR(1.15,l,3,10,10,p,A.dS,!0)],n),A.E,p,A.e,A.i,0,A.p),A.t,p,A.y,p,Ab.yx,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:26}
C.f7v.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bq:A.dr
return B.aA(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.L(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hS,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f7q(this.b,d),w,w,w,w,w,w,!1,A.a3)},
$S:1696}
C.f7q.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.f7u.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bM:A.bz
r=B.L(r,A.r,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bx(w,d.length===0?B.p(v,D.arw,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e_(new C.O4(u.G0(d),!0,!1,v),!0,v),A.ap),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aA(v,B.x(B.a([u,A.av,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,t?A.bM:A.ac,v,v,v,v,v,v,v,v,10.5,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.f7p(this.b,d),v,v,v,v,v,v,!1,A.a3)},
$S:125}
C.f7p.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.f7s.prototype={
$0(){var w=this.a
return w.w=w.w.G0("")},
$S:0}
C.f7t.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f7f.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.f7g.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.f7i.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.f7j.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.f7k.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.f7l.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f7h(w,d))},
$S:2}
C.f7h.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.f7m.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.f7N.prototype={
$0(){return this.a.f.fY()},
$S:0}
C.f7O.prototype={
$0(){var w=this.a
return w.m(new C.f7M(w))},
$S:0}
C.f7M.prototype={
$0(){return this.a.e=null},
$S:0}
C.f7P.prototype={
$0(){var w=this.a
return w.m(new C.f7L(w))},
$S:0}
C.f7L.prototype={
$0(){return this.a.x=null},
$S:0}
C.f7R.prototype={
$1(d){var w=this.a
return w.m(new C.f7K(w,d))},
$S:35}
C.f7K.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.f7S.prototype={
$1(d){var w=this.a
return w.m(new C.f7J(w,d))},
$S:35}
C.f7J.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.f7T.prototype={
$0(){var w=this.a
return w.m(new C.f7I(w))},
$S:0}
C.f7I.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.f7U.prototype={
$1(d){var w=this.a
return w.m(new C.f7H(w,d))},
$S:35}
C.f7H.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f7V.prototype={
$1(d){var w=this.a
return w.m(new C.f7G(w,d))},
$S:35}
C.f7G.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f7W.prototype={
$0(){var w=this.a
return w.m(new C.f7F(w))},
$S:0}
C.f7F.prototype={
$0(){var w=this.a
return w.w=w.w.G0("")},
$S:0}
C.f7X.prototype={
$0(){var w=this.a
return w.m(new C.f7E(w,this.b))},
$S:0}
C.f7E.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.f7Y.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a4(u,null,w.bRp(D.a5h[v]),null))
return B.bX(A.bG,t,A.br,null,8,8)},
$S:169}
C.f7Q.prototype={
$1(d){var w=this.a
return w.m(new C.f7D(w,d))},
$S:9}
C.f7D.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.f7n.prototype={
$0(){var w=this.a
return w.m(new C.f7o(w,this.b,this.c))},
$S:0}
C.f7o.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.M(0,w)},
$S:0}
C.f7C.prototype={
$0(){var w=this.a
return w.m(new C.f7B(w,this.b))},
$S:0}
C.f7B.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h_R.prototype={
$1(d){return new C.a19(this.a,this.b,null)},
$S:z+42}
C.f78.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.f79.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.f7a.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aKt?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.f7b.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.f7c.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.f77(w,d))},
$S:2}
C.f77.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.f7d.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.f7e.prototype={
$0(){var w=this.b
if(A.a.c9(w,"\u2026"))w=A.a.au(w,0,w.length-1)
this.a.d.bP(0,new B.bb(w,B.hm(A.bA,w.length),A.aO))},
$S:0}
C.fw2.prototype={
$1(d){return d.a===this.a},
$S:240}
C.enZ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gayP(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.d_G:D.dhx
t=D.yb.j(v?1:0.55)
v=p.a.c
t=B.L(t,A.r,v?1.8:1.2)
s=D.yb.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.I,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bT(0,B.b4(q,q,q,new C.bjH(n*6.283,q),A.ax),0,0,0)
o=o.x
o=B.bT(0,B.bTv(B.eM(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a9(A.a5,A.a8,A.x,B.a([A.L,D.bjb.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bx(s,new B.an(A.a_,q,A.ab,A.t,B.a([n,o,B.at(B.x(B.a([B.X(p.a.c?A.e6:A.me,D.yb,q,q,q,20),A.av,B.eO(A.A,B.o6(A.jN,D.fDz,new C.enY()),A.f,A.e3)],r),A.m,q,A.e,A.P,0,A.p),q,q,q),B.ap(q,B.p(q,D.fA0,A.f,q,q,new B.o(D.yb,q,q,B.n(6),q,q,A.n),q,q,q,q,P.amo,q,q,q),q,q,q,4,4,q)],r),q),A.ap),A.f,q,q,new B.o(q,q,t,w,v,new B.a9(A.az,A.aE,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:98}
C.enY.prototype={
$1(d){return D.c57.aA(0,d)},
$S:68}
C.fRK.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fRL.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:240}
C.fRM.prototype={
$2(d,e){return A.o.aO(e.a.length,d.a.length)},
$S:1697}
C.fRN.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:14}
C.fRG.prototype={
$1(d){return d.a},
$S:z+18}
C.fRH.prototype={
$1(d){return d.b},
$S:z+19}
C.h_4.prototype={
$1(d){return new C.a_w(this.a,this.b,null)},
$S:z+44}
C.drc.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.drd.prototype={
$1(d){return d.a===this.a.gajy()},
$S:z+10}
C.dre.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.drh.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dri.prototype={
$0(){var w=this.a
return w.m(new C.drg(w,this.b))},
$S:0}
C.drg.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.drj.prototype={
$1(d){var w=this.a
return w.m(new C.drf(w,d))},
$S:9}
C.drf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.enX.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.e_(w,this.a)
return B.d2(w,0,B.dz(e,"count",x.S),B.T(w).c).dq(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1698}
C.fl5.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ew(A.bj,!1,4279310375,A.aF,"",i,24,A.bp,A.a7,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fc,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.co,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fl7.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ew(A.K,!1,this.b.d,A.aF,"",4280640491,i,A.bp,A.cR,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bi,4280172719,2,d,l,0,"",D.mY,D.cV,g,e,f)},
$S:z+46}
C.fl6.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wR(0,"twinkle")
w=t===D.bi?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mY,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.fl4.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fL4.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fL5.prototype={
$0(){return A.d.gI(D.Ie)},
$S:z+49}
C.fL6.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fna.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fRc.prototype={
$1(d){var w=2450411,v=4281908728
C.dC(d,C.dD(4280171146,1,0,D.bi,w,0,0.52,0,0))
C.dC(d,C.dD(v,1,0,D.bi,w,0,0.04,0.48,0))
C.dC(d,C.dD(4294047225,0.38,0,D.bi,w,0,0.48,0.52,0.62))
C.dC(d,C.dD(v,0.006,0,D.fD,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRd.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dC(d,C.dD(4280172719,0.8,0,D.bi,w,0,0.36,0.58,0.1))
C.dC(d,C.dD(v,0.64,0,D.bi,w,0,0.28,0.64,0.18))
C.dC(d,C.dD(4282090230,0.44,0,D.bi,w,0,0.2,0.7,0.28))
C.dC(d,C.dD(v,0.006,0,D.fD,v,3,0.22,0.08,0.12))
C.dC(d,C.dD(u,0.004,0,D.fD,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fRe.prototype={
$1(d){var w=2450411,v=4279548070
C.dC(d,C.dD(4279080072,0.11,0,D.bi,w,0,1,0,0))
C.dC(d,C.dD(4279310375,0.11,0,D.bi,w,0,1,0,0.89))
C.dC(d,C.dD(856528008,0.72,0,D.k6,w,0,0.28,0.72,0.14))
C.dC(d,C.dD(1426953352,0.2,0,D.k6,w,0,0.2,0.78,0.22))
C.dC(d,C.dD(v,0.004,0,D.fD,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fRp.prototype={
$1(d){var w=2450411
C.dC(d,C.dD(4279203438,0.55,0,D.k6,w,0,0.5,0.55,-0.05))
C.dC(d,C.dD(4280171146,0.5,0,D.k6,w,0,0.45,0.62,0.35))
C.dC(d,C.dD(4280640491,0.4,0.3,D.k5,w,0,0.35,0.68,0.55))
C.dC(d,C.dD(571438702,0.12,0,D.bi,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fRu.prototype={
$1(d){var w=4280472558
C.dC(d,C.dD(4279310375,0.75,-0.4,D.k5,2450411,0,0.75,-0.15,0.35))
C.dC(d,C.dD(w,0.55,0,D.bi,2450411,0,0.06,0.42,0.38))
C.dC(d,C.dD(w,0.006,0,D.fD,w,3,0.35,0.08,0.08))
C.dC(d,C.dD(2282478,0.12,0,D.bi,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRv.prototype={
$1(d){var w=2450411,v=4280640491
C.dC(d,C.dD(3423541034,0.48,0,D.bi,w,0,1,0,0))
C.dC(d,C.dD(v,0.12,-0.08,D.k6,w,0,1.1,-0.05,0.38))
C.dC(d,C.dD(858088427,0.35,0,D.bi,w,0,0.42,0.55,0.05))
C.dC(d,C.dD(v,0.006,0,D.fD,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fRw.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cZz[w]
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fc,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.bi,v,4294967295,2,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dC(d,C.dD(s,0.006,0,D.fD,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fRx.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ar(A.mF,A.du,w/3).l()
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fc,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.DM,v,2450411,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dC(d,C.dD(s,0.006,0,D.fD,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fRy.prototype={
$1(d){var w=4294967295
C.dC(d,C.dD(4280640491,1,0,D.bi,2450411,0,0.42,0,0))
C.dC(d,C.dD(4280110808,1.1,1.57,D.k5,2450411,0,0.18,0.35,-0.05))
C.dC(d,C.dD(w,0.006,0,D.fD,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRz.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dC(d,C.dD(w,0.1,0,D.bi,v,0,1,0,0))
C.dC(d,C.dD(u,0.012,0,D.bi,v,0,1,0,0.1))
C.dC(d,C.dD(u,0.006,0,D.fD,u,3,0.42,0.06,0.14))
C.dC(d,C.dD(403446057,0.68,0,D.k6,v,0,0.22,0.72,0.18))
C.dC(d,C.dD(w,0.1,0,D.bi,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRA.prototype={
$1(d){var w=4278630100
C.dC(d,C.dD(4279310375,1.2,0.15,D.k6,2450411,0,0.55,-0.2,-0.1))
C.dC(d,C.dD(w,1.1,0.15,D.bi,2450411,0,0.08,0.15,-0.05))
C.dC(d,C.dD(1120295,0.18,0,D.bi,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRf.prototype={
$1(d){var w=4292617766
C.dC(d,C.dD(4282714634,0.65,-0.2,D.k5,2450411,0,0.65,-0.1,0.45))
C.dC(d,C.dD(w,0.5,-0.15,D.k5,2450411,0,0.5,0.05,0.55))
C.dC(d,C.dD(w,0.006,0,D.fD,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fRg.prototype={
$1(d){var w=2450411
C.dC(d,C.dD(4278413729,0.35,3.14,D.k5,w,0,0.45,-0.05,0.7))
C.dC(d,C.dD(4278355143,0.3,3.14,D.k5,w,0,0.4,0.25,0.75))
C.dC(d,C.dD(4279150057,0.32,3.14,D.k5,w,0,0.5,0.55,0.72))
C.dC(d,C.dD(863884284,0.22,0,D.eT,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fRh.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dC(d,C.dD(w,0.14,0,D.bi,v,0,0.14,0.02,0.02))
C.dC(d,C.dD(2282478,0.14,0,D.bi,u,3,0.14,0.84,0.02))
C.dC(d,C.dD(w,0.28,0,D.k6,v,0,0.35,-0.08,0.78))
C.dC(d,C.dD(u,0.22,0.5,D.k5,v,0,0.3,0.72,0.78))
C.dC(d,C.dD(w,0.006,0,D.fD,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fRi.prototype={
$1(d){var w=4293571336,v=1156231944
C.dC(d,C.dD(1841431,0.92,0,D.bi,w,3,0.92,0.04,0.04))
C.dC(d,C.dD(v,0.15,0,D.k5,2450411,0,0.15,0.02,0.02))
C.dC(d,C.dD(v,0.15,3.14,D.k5,2450411,0,0.15,0.83,0.83))
C.dC(d,C.dD(w,0.004,0,D.fD,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fRj.prototype={
$1(d){var w=4279080072,v=2450411
C.dC(d,C.dD(w,0.14,0,D.ln,v,0,0.14,0.68,0.18))
C.dC(d,C.dD(4279548070,0.14,0,D.ln,v,0,0.14,0.78,0.28))
C.dC(d,C.dD(4281193663,0.14,0,D.ln,v,0,0.14,0.68,0.38))
C.dC(d,C.dD(4284410580,0.14,0,D.ln,v,0,0.14,0.78,0.48))
C.dC(d,C.dD(4279203438,0.14,0,D.ln,v,0,0.14,0.68,0.58))
C.dC(d,C.dD(w,0.006,0,D.fD,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fRk.prototype={
$1(d){var w=2450411,v=4280640491
C.dC(d,C.dD(3708753706,0.42,0,D.bi,w,0,1,0,0))
C.dC(d,C.dD(v,0.06,-0.05,D.k6,w,0,1,0,0.38))
C.dC(d,C.dD(859356664,0.25,0,D.eT,w,0,0.25,0.7,0.08))
C.dC(d,C.dD(v,0.006,0,D.fD,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fRl.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ar(A.mF,A.du,w/3).l()
u=Date.now()
t=$.jb
$.jb=t+1
v=new C.eP("design_"+(""+1000*u+"_"+t),D.fc,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.DM,v,2450411,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KY
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,v)}C.dC(d,C.dD(4280172719,0.08,0,D.bi,2450411,0,1,0,0))
C.dC(d,C.dD(s,0.006,0,D.fD,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fRm.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.jb
$.jb=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fc,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a7,A.bp,A.aF,s,A.bj,null,D.fD,t,t,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
v=$.KY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dC(d,C.dD(s,0.75,0,D.bi,2450411,0,0.22,0.72,0.1))
C.dC(d,C.dD(872415231,0.16,0,D.bi,2450411,0,0.16,0.75,0.15))
C.dC(d,C.dD(s,0.006,0,D.fD,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRn.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dC(d,C.dD(4674921,0.9,0,D.bi,4287931320,2,0.9,0.05,0.05))
C.dC(d,C.dD(w,0.08,0,D.bi,v,0,0.08,0.03,0.03))
C.dC(d,C.dD(u,0.08,0,D.bi,v,0,0.08,0.89,0.03))
C.dC(d,C.dD(u,0.08,0,D.bi,v,0,0.08,0.03,0.89))
C.dC(d,C.dD(w,0.08,0,D.bi,v,0,0.08,0.89,0.89))
C.dC(d,C.dD(w,0.004,0,D.fD,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fRo.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.jb
$.jb=t+1
t=new C.eP("design_"+(""+1000*u+"_"+t),D.fc,0.55,0.14+v,0.38,0.18,"",24,A.a7,A.bp,A.aF,r,A.bj,null,D.bi,4294967295,4280640491,2,0,!1,"",0,D.co,0,"","","","","",!1,0)
u=$.KY
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c6(d.z,0,t)
u=B.ar(A.d7,A.cp,w/2).l()
t=Date.now()
s=$.jb
$.jb=s+1
u=new C.eP("design_"+(""+1000*t+"_"+s),D.fc,0.57,0.16+v,0.06,0.14,"",24,A.a7,A.bp,A.aF,r,A.bj,null,D.bi,u,q,0,0,!1,"",0,D.co,0,"","","","","",!1,0)
v=$.KY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}C.dC(d,C.dD(4280171146,1,0,D.bi,q,0,0.48,0,0))
C.dC(d,C.dD(4280172719,1.1,1.57,D.k5,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fRq.prototype={
$1(d){var w=2450411
C.dC(d,C.dD(870995980,0.55,0.45,D.k6,w,0,0.55,-0.12,-0.08))
C.dC(d,C.dD(856996006,0.45,0.45,D.k6,w,0,0.45,0.62,-0.05))
C.dC(d,C.dD(16777215,0.38,0.45,D.k6,4293548044,5,0.38,0.52,0.12))
C.dC(d,C.dD(585783308,0.3,0.45,D.k6,w,0,0.3,0.56,0.16))
C.dC(d,C.dD(4279548070,0.06,0,D.bi,w,0,0.16,0.38,0.04))
C.dC(d,C.dD(1156208652,0.28,0,D.eT,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fRr.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dC(d,C.dD(w,1,0,D.bi,v,0,0.07,0,0))
C.dC(d,C.dD(u,0.1,0,D.bi,t,1,0.46,0.48,0.14))
C.dC(d,C.dD(u,0.1,0,D.bi,t,1,0.46,0.48,0.28))
C.dC(d,C.dD(u,0.1,0,D.bi,t,1,0.46,0.48,0.42))
C.dC(d,C.dD(s,0.08,0,D.eT,v,0,0.08,0.5,0.16))
C.dC(d,C.dD(w,0.08,0,D.eT,v,0,0.08,0.5,0.3))
C.dC(d,C.dD(4279548070,0.08,0,D.eT,v,0,0.08,0.5,0.44))
C.dC(d,C.dD(16777215,0.32,0.45,D.k6,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fRs.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dC(d,C.dD(4294047225,0.08,0,D.bi,t,2,0.1,0.02,0.06))
C.dC(d,C.dD(s,0.42,0,D.bi,2450411,0,0.36,0.58,0.18))
C.dC(d,C.dD(872415231,0.12,0,D.bi,2450411,0,0.28,0.62,0.24))
C.dC(d,C.dD(16777215,0.28,0,D.eT,s,4,0.32,0,0.72))
C.dC(d,C.dD(r,0.006,0,D.fD,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.jb
$.jb=u+1
u=new C.eP("design_"+(""+1000*v+"_"+u),D.fc,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a7,A.bp,A.aF,4279310375,A.bj,null,D.eT,16777215,t,2,0,!1,"",0,D.co,0,"","","","","",!1,0)
v=$.KY
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c6(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fRt.prototype={
$1(d){var w=2450411,v=4279548070
C.dC(d,C.dD(3423541034,0.55,0,D.bi,w,0,1,0,0))
C.dC(d,C.dD(4009754623,0.56,0.45,D.k6,w,0,0.56,0.22,0.18))
C.dC(d,C.dD(3439329279,0.44,0.45,D.k6,w,0,0.44,0.28,0.24))
C.dC(d,C.dD(v,0.07,0,D.bi,w,0,0.22,0.34,0.62))
C.dC(d,C.dD(v,1,0,D.bi,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fIV.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fIW.prototype={
$0(){return A.d.gI($.bGp())},
$S:z+52}
C.fvl.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fvk.prototype={
$1(d){return C.i7C(d,this.a,this.b)},
$S:z+53}
C.fRT.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wb(1.0375,1.01875,1)
return new B.fY(v,u,new C.aUn(B.hY0(A.vH,C.i7F(w.c,w.d,v,u),t)))},
$S:457}
C.e1x.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e1w.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c4(w,new B.o(w,w,w,w,w,new B.c_(A.Lj,1.2,A.x,w,0,u.d,w,w),A.n),A.bh),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jm(new B.an(A.a_,w,A.b3,A.t,B.a([t,new B.er(B.b4(w,w,w,new C.bgt(u.a,r,q,r),A.ax),w),B.at(new B.jZ(r,new C.e1v(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:289}
C.e1v.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.et.aw(0,A.k.E(e/1.4,0,1)),p=A.k.E(e/0.9,0,1),o=A.k.E((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gI(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.I,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hW(B.fU(i,A.A,r,r,A.ci,A.bY,!0,r,!1,r,r),A.ap),A.f,r,r,new B.o(r,r,r,r,u,new B.h1(A.A,0,6.283185307179586,A.x,t,r,new B.mG(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a4(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.btk(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cW(i[1].j(0.6),A.I,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a4(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.db(B.dR(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a9(A.a5,A.a8,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a4(r,m*0.022,r,r),B.d(w.a.c.gaMy(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a7,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.m,r,A.e,A.P,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.db(B.ee(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.m,r,A.e,A.P,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f6m.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aE,A.x,this.a.c,B.a([0,A.k.E(w-0.1,0,1),A.k.E(w,0,1),A.k.E(w+0.1,0,1),1],x.x),null).aA(0,d)},
$S:68}
C.ces.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bM:A.bz
t=B.L(t,A.r,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.i_.j(0.4),A.I,14)],x.V):v
w=B.cY(v,B.bx(B.n(12),d,A.ap),v,v,A.b5,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.aA(v,new B.a4(112,v,B.x(B.a([w,A.fG,B.d(e,v,1,A.a1,v,v,v,B.l(v,v,g?A.bM:A.ac,v,v,v,v,v,v,v,v,11,v,v,A.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.i,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a3)},
$S:1699}
C.cet.prototype={
$0(){var w=this.a
return w.d.$1(w.c.G0(""))},
$S:0}
C.ceu.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e_(new C.O4(v.G0(u),!0,!1,null),!0,null),d.b,new C.cev(w,this.c,d),v.a===u)},
$S:z+54}
C.cev.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hC6(u.b,t.c.G0(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fYu.prototype={
$1(d){return new C.a_3(this.a,null)},
$S:z+55}
C.dgq.prototype={
$0(){var w=this.a
w.d=w.gvY().bdU("data:"+this.b+";base64,"+A.cK.gcu().aP(this.c));++w.r},
$S:0}
C.dgv.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dgw.prototype={
$0(){var w=this.a
return w.m(new C.dgu(w))},
$S:0}
C.dgu.prototype={
$0(){return this.a.r++},
$S:0}
C.dgx.prototype={
$1(d){var w=this.a
return w.m(new C.dgt(w,d))},
$S:2}
C.dgt.prototype={
$0(){var w=this.a
return w.d=w.gvY().aFk(this.b)},
$S:0}
C.dgy.prototype={
$0(){var w=this.a
return w.m(new C.dgs(w))},
$S:0}
C.dgs.prototype={
$0(){var w=this.a
return w.d=w.gvY().bdU("")},
$S:0}
C.dgz.prototype={
$1(d){var w=this.a
return w.m(new C.dgr(w,d))},
$S:2}
C.dgr.prototype={
$0(){var w=this.a
return w.d=w.gvY().be_(this.b)},
$S:0}
C.dgA.prototype={
$0(){var w=this.a
w=w.gvY().be_(w.gayQ().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fYt.prototype={
$1(d){var w={}
w.a=this.a
return new B.e2(new C.fYs(w),null)},
$S:20}
C.fYs.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cU(new B.aZ(0,1/0,0,B.aG(d,A.bZ,x.w).w.a.b*0.85),B.ci(B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fSl,A.av,D.fSB,A.aB,new C.b0N(v.a,new C.fYr(v,e,d),!0,w)],x.p),A.E,w,A.e,A.P,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b6H,w,w,w,w,A.NQ,w,w,w)},
$S:174}
C.fYr.prototype={
$1(d){this.b.$1(new C.fYq(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fYq.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h_Q.prototype={
$1(d){return D.hql},
$S:z+57}
C.dne.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dnf.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.dng.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fOw.prototype={
$1(d){var w=this.b
return new B.a9(A.az,A.aE,A.x,B.a([A.L,B.ar(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.k.E(w-0.12,0,1),A.k.E(w,0,1),A.k.E(w+0.12,0,1)],x.x),null).aA(0,d)},
$S:68}
C.dg7.prototype={
$3(d,e,f){var w,v=this,u=new B.aF($.S().r,A.ag,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.D(new B.aY(t+r*1.2,o))
u.D(new B.c5(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.D(new B.c5(w,q+p,w,q+p*1.2))
u.D(new B.DA(B.bY(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aK(u,v.d)
s.aK(u,v.e)
p=B.J()
p.r=B.ar(v.a.d,A.c,0.6).gp(0)
s.ad(new B.u(w,o),2.2,p)},
$S:378}
C.fOA.prototype={
$2(d,e){return A.k.aO(d.c,e.c)},
$S:z+58}
C.fGV.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fGW.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.D(E.yz,B.x(B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fAi,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dj(D.HM,B.d('Endelea na "'+A.d.gI(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fGT(d),B.bo(A.c3,w,w,w,A.c,w,A.cm,w,w,w,w,w)),A.W,B.ex(A.ow,D.VI,new C.fGU(d),B.dk(w,w,w,w,w,w,w,w,w,A.ac,w,w,A.cm,w,w,R.xD,w,w,w,w))],x.p),A.ak,w,A.e,A.P,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fGT.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fGU.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ck_.prototype={
$1(d){return d.hR()},
$S:z+59}
C.ck0.prototype={
$1(d){return d.ah()},
$S:z+60}
C.cjZ.prototype={
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
u=C.i3f(b2.h(0,"type"))
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
n=A.aCB[A.o.E(b4,0,8)]
m=D.d1I[A.o.E(w,0,1)]
l=C.i70(b2.h(0,"decoration"))
k=B.aK(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.ayY[A.o.E(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.i9V(b2.h(0,"shape"))
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
a3=C.hx3(b2.h(0,"textTransition"))
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
C.cjP.prototype={
$1(d){return d.hR()},
$S:z+62}
C.cjQ.prototype={
$1(d){return d.ah()},
$S:z+63}
C.cjM.prototype={
$1(d){return B.w(d)},
$S:17}
C.cjN.prototype={
$1(d){return B.w(d)},
$S:17}
C.cjO.prototype={
$1(d){return C.hnB(B.a2(d,x.N,x.z))},
$S:z+64}
C.ckg.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.ckh.prototype={
$0(){return A.d.gI(D.a4V)},
$S:z+66}
C.ckb.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ce(d.f))w.n(0,u,d.hR())},
$S:z+7}
C.cka.prototype={
$2(d,e){return e.f.aO(0,d.f)},
$S:z+21}
C.ck6.prototype={
$1(d){return new B.N(d,new C.ck7(),B.T(d).k("N<1,V>")).f6(0,new C.ck8())},
$S:z+69}
C.ck7.prototype={
$1(d){return d.f},
$S:z+70}
C.ck8.prototype={
$2(d,e){return d.ce(e)?d:e},
$S:708}
C.ck9.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hTP(d)},
$S:z+71}
C.ckc.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.ckd.prototype={
$2(d,e){return e.f.aO(0,d.f)},
$S:z+21}
C.cke.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fP8.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.aj(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.M(0,j)
break}}}},
$S:z+73}
C.fP4.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fP5.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fP6.prototype={
$2(d,e){var w
if(d.b===D.cV){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fP7.prototype={
$2(d,e){return d.b===D.fc&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cjV.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.iiQ(b2,b3),b5=B.a6(b4).k("b9<2>")
b5=B.cH(new B.b9(b4,b5),new C.cjU(),b5.k("M.E"),x.N)
w=B.dh(b5,B.a6(b5).k("M.E"))
b1=b1.e
v=A.qf.aw(0,A.k.E(b1,0,1))
u=new C.cjW()
b5=B.ar(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ar(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cjX(a9,b7.d)
r=new C.cjY(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.jT.aw(0,A.k.E(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kC(A.k.E(1-k,0,1),B.dR(B.ee(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.fc){a4=i.hR()
a4.ay=B.ar(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ar(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lO&&l.at==i.at?r.$1(i):new B.an(A.a_,a8,A.b3,A.t,B.a([new B.kC(A.k.E(o,0,1),r.$1(l),a8),new B.kC(A.k.E(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iQ(B.wG(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.E((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.co)a7=D.mY
p.push(s.$5(i.c,i.d,i.e,i.f,C.hzv(a7,a6,r.$1(i))))}}return B.c4(new B.an(A.a_,a8,A.ab,A.t,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a9(A.a5,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bh)},
$S:373}
C.cjU.prototype={
$1(d){return d.a},
$S:z+22}
C.cjW.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+76}
C.cjX.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ap(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1703}
C.cjY.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a8t(v,C.b2V(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dOG.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ee(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.ck3.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.ck4.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fS_.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:319}
C.fR6.prototype={
$1(d){return new C.ae7(this.a,this.b,null)},
$S:z+78}
C.eAi.prototype={
$0(){return this.a.Qu(this.b,C.imf(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eAj.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Qu(this.b,C.imh(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eAk.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Qu(this.b,C.img(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eAl.prototype={
$0(){A0.hzf()
B.a5(this.a,!1).O(null)},
$S:0}
C.cjT.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1704}
C.cjS.prototype={
$2(d,e){var w,v=this,u=null,t=B.dP(d,A.nR),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.E(p*Math.max(B.jh(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bY:A.dz
return B.fU(t,A.A,o,new C.cjR(),A.ci,w,!0,u,!1,new B.bQ("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1705}
C.cjR.prototype={
$3(d,e,f){return D.aeA},
$S:235}
C.fP3.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a9(A.az,A.aE,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.d2(r,0,B.dz(6,"count",x.S),B.T(r).c)
u=r.$ti.k("N<ak.E,cO>")
r=B.C(new B.N(r,new C.fP2(e.b,e.d),u),u.k("ak.E"))
return B.bx(s,B.c4(new B.an(A.a_,t,A.ab,A.t,r,t),new B.o(v,t,t,t,t,w,A.n),A.bh),A.ap)},
$S:1706}
C.fP2.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ap(w,C.b2V(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fy8.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cD(r.b,new C.fy6(d))
w=B.aG(d,A.bZ,x.w).w
v=B.n(22)
u=B.L(A.bz,A.r,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.h_,28)],x.V)
s=x.p
return new B.d1(e,!1,B.at(B.aI(!1,A.a2,!0,q,B.p(q,B.x(B.a([B.B(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.ka,q,q,q),A.av,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a7,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.i,0,A.p),1),B.bM(!1,A.Ax,q,q,!0,q,q,q,new C.fy7(p,d),q,B.fy(q,q,A.bl,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.C_,q,new B.b8(B.n(12),A.a0),q,q,q,q,q,q))],s),A.m,q,A.e,A.i,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.P,0,A.p),A.f,q,new B.aZ(0,w.a.a*0.94,0,1/0),new B.o(A.au,q,u,v,t,q,A.n),q,q,q,A.fZ,A.GL,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:243}
C.fy6.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pT())B.a5(w,!0).eN()},
$S:0}
C.fy7.prototype={
$0(){var w=this.a.a
if(w!=null)w.a2(0)
B.a5(this.b,!0).eN()},
$S:0}
C.feU.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dR(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dR(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dR(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.dR(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dt()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fN(r*3.14159)
return B.fA(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dt()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.km(r*3.14159)
return B.fA(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dt()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fN(r*1.2)
s.km(r*0.5)
return B.fA(A.A,B.db(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dt()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fN(-r*1.4)
return B.fA(A.a8,B.db(u.b,r),t,s,!0)
case 12:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(B.ee(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aL_(r,t))],x.p),t)
case 15:return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.jm(u.b,A.t,new C.aL_(1-r,t))],x.p),t)
case 16:v=D.baa.aw(0,r)
return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.ee(A.A,B.db(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(B.ec(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dt()
s.mV(r*6.28)
s.k0(r,r,r,1)
return B.fA(A.A,u.b,t,s,!0)
case 20:return B.eM(A.A,(r-0.5)*0.35,new B.an(A.a_,t,A.b3,A.t,B.a([u.c,B.db(u.b,r)],x.p),t),t)}},
$S:59}
C.e_g.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.e_f.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cq(0)}},
$S:12}
C.e_e.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hzv(v,w,e)},
$S:59}
C.cjL.prototype={
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
s=B.T(v).k("N<1,cO>")
q=B.C(new B.N(v,new C.cjK(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c4(new B.an(A.a_,r,A.ab,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bh)},
$S:373}
C.cjK.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.co?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ap(u,new C.a8t(m,new C.VK(d,C.b2V(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.ddl.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.ddk(w))},
$S:12}
C.ddk.prototype={
$0(){return this.a.d++},
$S:0}
C.enF.prototype={
$2(d,e){var w,v=null,u=A.o.ao(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aRY.q(0,A.d.gI(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.iiz(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dt()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eh(0,w*7,0,1)
s.fN(Math.sin(t)*0.32)
s.km(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k0(w,w,w,1)
return B.fA(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dR(B.ee(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.db(B.ee(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.f3M.prototype={
$1(d){var w
$.S()
w=B.J()
w.b=A.a9
w.c=d
w.e=A.dQ
return w},
$S:1707}
C.fME.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdE()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b4(r,r,r,new C.btd(u,t,r),A.ax))
w.push(B.nM(s.d,A.ap,new C.bh0(u,t,r)))
if(!p)w.push(B.b4(r,r,r,new C.bsa(u,q,t,r),A.ax))
return B.at(new B.a4(v.a,v.b,new B.an(A.a_,r,A.b3,A.t,w,r),r),r,r,r)},
$S:223}
C.fB8.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:320}
C.eGw.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(T.Dk(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gan(s)){u=null
w=1
break}u=r.dN(s,new C.eGu(),new C.eGv(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1708}
C.eGu.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:185}
C.eGv.prototype={
$0(){return J.fv(this.a)},
$S:1710}
C.eCU.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eCV.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eCW.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eEu.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEi.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eEj.prototype={
$1(d){return d.hR()},
$S:z+81}
C.eCh.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFC.prototype={
$0(){this.a.u_()},
$S:0}
C.eGs.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.ov()
w.KA()},
$S:0}
C.eEs.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.E(v.b,0,u.r.length-1)
w.r=v.c
w.ov()
w.KA()},
$S:0}
C.eGf.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eGg.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eGh.prototype={
$1(d){return d.a},
$S:z+22}
C.eGi.prototype={
$0(){var w=this.a.r
return new B.au(new B.bb(w,A.b4,A.aO),$.aw())},
$S:261}
C.eGj.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:710}
C.eBG.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eGt.prototype={
$0(){},
$S:0}
C.eDB.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!1
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xP()
w.KA()},
$S:0}
C.eBE.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xP()},
$S:0}
C.eBF.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xP()},
$S:0}
C.eDY.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eDZ.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xP()
w.KA()
w.z="Home"},
$S:0}
C.eE_.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eDA.prototype={
$1(d){var w=null
return B.ei(B.a([B.bM(!1,A.VH,w,w,!0,w,w,w,new C.eDz(d),w,w)],x.p),w,w,w,D.fUd,w,w,w,w,D.fAM,w)},
$S:18}
C.eDz.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eDx.prototype={
$1(d){var w=null
return B.ei(B.a([B.bM(!1,A.VH,w,w,!0,w,w,w,new C.eDw(d),w,w)],x.p),w,w,w,D.fEX,w,w,w,w,D.fCD,w)},
$S:18}
C.eDw.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eDy.prototype={
$0(){},
$S:0}
C.eCQ.prototype={
$1(d){return this.a.b26(C.bEp(d))},
$S:z+7}
C.eCR.prototype={
$1(d){return this.a.ag9(C.bEp(d))},
$S:z+7}
C.eDH.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.at(B.p(w,w,A.f,w,w,new B.o(A.aX,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fUh,A.av,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.Qf(A.wr,D.aAn,"HATI YA KUHOWA","Hati ya mahari",new C.eDC(d),w),A.W,new C.Qf(A.hq,D.dfa,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eDD(d),w),A.W,new C.Qf(A.hC,D.d_L,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eDE(d),w),A.W,new C.Qf(A.i9,D.cYP,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eDF(d),w)],v)
if(this.a.gacs())A.d.v(u,B.a([A.W,new C.Qf(A.jl,D.cJI,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eDG(d),w)],v))
return B.bn(!0,B.ci(B.x(u,A.ak,w,A.e,A.P,0,A.p),A.t,w,A.y,w,E.yz,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:26}
C.eDC.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.eDD.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.eDE.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.eDF.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.eDG.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.eDI.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!0
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xP()},
$S:0}
C.eBI.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eBJ.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.aa(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nq(r,v.f+1,q);++v.f
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
C.eDT.prototype={
$1(d){return d.b===D.lO},
$S:z+4}
C.eDU.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gI(v).go
w.b=A.d.gI(v).id
return new B.e2(new C.eDR(w,this.a,v),null)},
$S:20}
C.eDR.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eDS(p,o,a3,n),l=B.R(a2).ax.a===A.J,k=l?A.c:A.O,j=l?A.aR:A.al,i=l?A.bo:A.bN,h=l?A.O:A.c,g=B.n(28),f=B.L(l?A.bz:A.aN,A.r,1),e=x.p,d=B.B(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bF,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.i,0,A.p),1),B.aH(q,q,q,q,B.X(A.cx,j,q,q,q,q),q,q,q,new C.eDN(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.i,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.D5[w]
v.a=null
t=v.a=u.a
a1.push(new C.bjA(t,u.b,p.a===t,i,k,new C.eDO(v,m),q))}a1=B.bX(A.bG,a1,A.br,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.CZ[w]
s.a=null
t=s.a=r.a
u.push(new C.bjz(t,r.b,p.b===t,k,j,new C.eDP(s,m),q))}return B.bn(!0,B.p(q,B.ci(B.x(B.a([d,A.aQ,a0,A.W,a1,A.bx,v,A.W,B.bX(A.bG,u,A.br,q,12,12),A.bx,new B.a4(1/0,48,B.ex(D.c16,D.fWI,new C.eDQ(o,n),B.dk(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b8(B.n(16),A.a0),D.b4d,q,q,q,q)),q)],e),A.E,q,A.e,A.P,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uk,D.bCF,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.eDS.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eDL(w.a,d,e))
w.b.d8(new C.eDM(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1713}
C.eDL.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eDM.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eDN.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eDO.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eDP.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eDQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A6.Hc(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d8(new C.eDK(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDK.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eDW.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eDX.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eDV(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nq(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xP()},
$S:0}
C.eDV.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEd.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eEe.prototype={
$1(d){return d.w},
$S:z+82}
C.eEf.prototype={
$2(d,e){return d>e?d:e},
$S:80}
C.eEg.prototype={
$1(d){var w=this,v=null,u=B.R(d).ax.a===A.J,t=u?A.c:A.O,s=u?A.aR:A.al,r=u?A.bo:A.aP,q=u?A.O:A.c,p=B.n(28),o=B.L(u?A.bz:A.aN,A.r,1),n=B.aG(d,A.bZ,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.x(B.a([B.B(B.a([B.p(v,D.bVC,A.f,v,v,D.b5z,v,38,v,v,v,v,v,38),A.bd,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.i,0,A.p),1),B.aH(v,v,v,v,B.X(A.cx,s,v,v,v,v),v,v,v,new C.eEa(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.i,0,v,v),A.aB,new B.ds(1,A.cn,B.hS(v,new C.eEb(m,k,w.c,s,w.d,t,r),k.length,A.fv,v,A.ah,new C.eEc(),!0),v)],l),A.E,v,A.e,A.P,0,A.p),A.f,v,new B.aZ(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uk,A.a_Y,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.eEa.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eEc.prototype={
$2(d,e){return A.ae},
$S:37}
C.eEb.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cA
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bYT,q,q,q,new C.eE8(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bEV,n,q),B.aM(q,A.Y,!1,q,!0,A.t,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b6(4,B.n(16),A.a0),q,A.eS,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.n(16),D.b3T),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.aj,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eE9(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.aa,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.E,q,A.e,A.i,0,A.p)},
$S:712}
C.eE8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.iop(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geM()?p.a:q.a.length
n=p.geM()?p.b:q.a.length
m=A.a.p5(q.a,o,n,s)
r.bP(0,new B.bb(m,B.hm(A.bA,o+s.length),A.aO))
l.akb(k,m)
l.pF()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eE9.prototype={
$1(d){var w=this.a
w.akb(this.b.a,d)
w.pF()},
$S:2}
C.eEh.prototype={
$0(){},
$S:0}
C.eDJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eBZ.prototype={
$0(){},
$S:0}
C.eC_.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hAP(this.b,w,!0)
w=this.a
w.r=null
w.xP()},
$S:0}
C.eC0.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eC1.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bs(v,new C.eBY(t.d))
u=A.o.E(s.a,0,v.length)
s.a=u
s=t.e
A.d.nq(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.E(s.f,0,v.length-1)
s.r=null
s.xP()},
$S:0}
C.eBY.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEn.prototype={
$1(d){return B.pa(new C.eEm(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:142}
C.eEm.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.am4,B.x(B.a([D.fRI,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.i,0,A.p),w),B.E(B.ip(!0,w,e,A.y,D.fcz,new C.eEl(this.a,this.b),20,A.un,w,A.ah,!1),1)],v),A.ak,w,A.e,A.i,0,A.p)},
$S:471}
C.eEl.prototype={
$2(d,e){var w=null,v=D.Ie[e],u=C.hTK(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.L(q.j(0.45),A.r,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fP,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bm,B.p(w,D.f5Z,A.f,w,w,new B.o(A.dF.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.mN,w,w,w)],m))
return B.aI(!1,A.a2,!0,w,B.aO(!1,t,!0,B.p(w,B.x(B.a([B.B(n,A.m,w,A.e,A.i,0,w,w),A.b2,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.i,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a9(A.a5,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bg,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eEk(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eEk.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.ck2(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEo.prototype={
$0(){var w=this.a
w.e=this.b.hR()
w.f=0
w.r=null
w.db=!0
A.d.aa(w.ax)
A.d.aa(w.ay)
w.xP()},
$S:0}
C.eAD.prototype={
$0(){var w,v=this.a,u=v.gqL(),t=C.rS(4294967295,null,0,0,null,C.cG(),D.mX,"","","",D.dh),s=this.b
C.ckf(t,s,u)
w=v.gdA()
if(w!=null&&s!==D.DL){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eBX.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ah()
q.n(0,"id",C.cG())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aX(w),u=x.f;v.C();){t=v.gS(v)
if(u.b(t)){s=Date.now()
r=$.jb
$.jb=r+1
J.aJ(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c6(v.e.r,v.f+1,C.hnB(q));++v.f},
$S:0}
C.eBV.prototype={
$0(){var w=this.a
A.d.cz(w.e.r,w.f)
w.f=A.o.E(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eEw.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cz(v.e.r,u),s=this.c
A.d.c6(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eBR.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.d,new C.eBQ(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eBQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eEv.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eBH.prototype={
$0(){var w=this.a.r
return new B.au(new B.bb(w,A.b4,A.aO),$.aw())},
$S:261}
C.eCi.prototype={
$0(){return B.k6(!0,null,!0,!0,null,null,!1)},
$S:710}
C.eGd.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eGe.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.auN(w).fY()
v=u.Xo(w)
v.stK(B.hm(A.bA,v.a.a.length))},
$S:7}
C.eFD.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Yo(v)
if(u!=null&&u.b===D.cV)w.Xo(u).saZ(0,u.r)}else w.w=null},
$S:0}
C.eAE.prototype={
$0(){var w=C.cG(),v=this.a,u=C.ew(A.bj,!1,v.gqL().e.l(),A.aF,"",4280640491,24,A.bp,A.a7,"",0.22,w,null,"","",0,!1,"",0,D.bi,4280172719,2,"Tap to edit text",0,0,"",D.co,D.cV,0.7,0.15,0.2)
A.d.M(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eAB.prototype={
$0(){var w=C.cG(),v=this.a,u=C.ew(A.bj,!1,4279310375,A.aF,"",v.gqL().c.j(0.25).l(),24,A.bp,A.a7,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqL().c.l(),2,"",0,0,"",D.co,D.fc,0.25,0.3,0.3)
A.d.M(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eAr.prototype={
$0(){var w=C.ew(A.bj,!1,4279310375,A.aF,"",4280640491,24,A.bp,A.a7,"",0.55,C.cG(),this.b,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lO,0.6,0.2,0.18),v=this.a
A.d.M(v.gdA().z,w)
v.r=w.a},
$S:0}
C.eAo.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.c86],x.p)
for(w=J.aX(this.a);w.C();){v=w.gS(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gakQ().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dH(!1,r,r,r,!0,r,r,r,!0,r,r,D.bTh,r,r,r,r,new C.eAn(d,v),!1,r,r,r,r,r,new B.y(""+t+" links"+s,r,r,r,r,r,r,A.a1,r,1,r,r),r,new B.y(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.cl(q,r,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.eAn.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eAp.prototype={
$0(){var w=A.k.E(0.23131034482758622,0.12,0.5),v=C.cG(),u=this.b,t=A.X.aq(u.ah(),null),s=C.ew(A.bj,!1,4279310375,A.aF,u.b,4280640491,24,A.bp,A.a7,"",0.86,v,null,"","",0,!1,"",0,D.bi,4280172719,2,t,0,0,"",D.co,D.a7x,w,0.5-w/2,0.07)
t=this.a
A.d.M(t.gdA().z,s)
t.r=s.a},
$S:0}
C.eBT.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eBU.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bs(v.gdA().z,new C.eBS(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eBS.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eB5.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cV)s.Q=t.c.l()
else if(w===D.fc){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eB6(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eB6.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eBa.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eBb(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdA()
if(t!=null)v.$1(t)}},
$S:0}
C.eBb.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eB8.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cV){s.Q=t.c
return}w=new C.eB9(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eB9.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.eR(w,new C.eB7()),u=this.a;v.C();)w.gS(0).Q=u},
$S:z+1}
C.eB7.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eB4.prototype={
$0(){return C.ckf(this.b,this.c,this.a.gqL())},
$S:0}
C.eE7.prototype={
$0(){return A.d.c6(this.a.d,0,this.b)},
$S:0}
C.eGm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGn.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eGo.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGp.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c6(s,0,v.b)
else{w=A.d.bg(s,new C.eGl(v))
if(w>=0)t.d[w]=v.b}if(v.a.gSX()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hR()
t.f=0
t.r=null
t.db=!1
A.d.aa(t.ax)
A.d.aa(t.ay)
t.xP()
t.KA()}},
$S:0}
C.eGl.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eFT.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acw(),s=w.b,r=u.acx(A.fi,A.jH,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.L(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.N,r,A.bx,B.p(v,B.B(B.a([B.E(u.aWP(w.c,A.al),1),new B.D(A.fC,B.p(v,D.bTn,A.f,v,v,new B.o(A.fi.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aWP(s,A.fi),1)],n),A.m,v,A.e,A.i,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a9(A.az,A.aE,A.x,p,v,v),A.n),v,v,v,v,A.bD,v,v,v),A.bx,u.aWS(A.fi,d,D.bPt,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.W,u.c_Z(A.aJ,d,A.uC,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aWQ(d,"Not now"))
return new C.Kr(B.x(p,A.ak,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eFS.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Kr(B.x(B.a([v.acw(),A.N,v.acx(A.aJ,D.bP8,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cU(new B.aZ(0,1/0,0,B.aG(d,A.bZ,x.w).w.a.b*0.42),B.hS(w,new C.eFQ(v,u,d),u.length,w,w,A.ah,new C.eFR(),!0),w),A.aB,v.aWQ(d,"Cancel")],x.p),A.ak,w,A.e,A.P,0,A.p),w)},
$S:z+9}
C.eFR.prototype={
$2(d,e){return A.W},
$S:37}
C.eFQ.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.L(A.c.j(0.08),A.r,1),q=x.p
return B.aI(!1,A.a2,!0,w,B.aO(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.ar0,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.c52,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.x(B.a([B.d(v.b,w,1,A.a1,w,w,w,A.n5,w,w,w),A.cS,B.d("Updated "+this.a.Qv(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a7,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.i,0,A.p),1),B.X(A.eE,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.i,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bD,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFP(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eFP.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.eFM.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acw()
t=t.acx(A.ay,A.uM,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Kr(B.x(B.a([s,A.N,t,A.bx,B.B(B.a([B.E(B.dT(A.aaZ,new C.eFK(d),B.dk(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cm,u,new B.b8(B.n(14),A.a0),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bI(D.fDd,u,new C.eFL(d),B.bo(A.fi,u,u,u,A.c,u,A.cm,u,new B.b8(B.n(14),A.a0),u,u,u)),1)],v),A.m,u,A.e,A.i,0,u,u)],v),A.ak,u,A.e,A.P,0,A.p),u)},
$S:z+9}
C.eFK.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.eFL.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eFO.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acw(),s=w.b,r=u.acx(A.aW,A.e6,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.aw7("Names",""+w.c),1),A.ad,B.E(u.aw7("Fields",""+w.d),1),A.ad,B.E(u.aw7("Signatures",""+w.e),1)],q),A.m,v,A.e,A.i,0,v,v),o=B.bo(A.bl,v,v,v,A.c,v,A.yo,v,new B.b8(B.n(14),A.a0),v,v,v)
return new C.Kr(B.x(B.a([t,A.N,r,A.aQ,p,A.bx,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.nM,v,v,v),v,new C.eFN(d),o),A.W,u.aWR(d,"Stay here",!1)],q),A.ak,v,A.e,A.P,0,A.p),v)},
$S:z+9}
C.eFN.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eCM.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eCL.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eFE.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eGc.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0g(A.d.dN(w.d,new C.eGa(v),new C.eGb(v)).hR(),w.f,null)},
$S:z+84}
C.eGa.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGb.prototype={
$0(){return this.a},
$S:z+85}
C.eAw.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bD,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.fS,w,w,w),w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bVa,w,w,w,w,new C.eAu(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fBa,w,w,w)],x.p)
if(v>1)t.push(B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWp,w,w,w,w,new C.eAv(d),!1,w,w,w,w,w,D.fXY,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.df,w,w,w),w,w,w))
return B.bn(!0,B.x(t,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eAu.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.eAv.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.eAx.prototype={
$0(){var w=this.b,v=w.c,u=C.ew(A.bj,!1,4279310375,A.aF,v,4280640491,24,A.bp,A.a7,"",0.84,C.cG(),w.b,"","",0,!1,"",0,D.bi,4280172719,2,v,0,0,"",D.co,D.Tq,0.88,0.06,0.08)
v=this.a
A.d.M(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eAy.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.jb
$.jb=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.jb
$.jb=k+1
m.push(new C.eP(""+1000*l+"_"+k,D.Tq,0.04,0.06,0.92,0.88,v,24,A.a7,A.bp,A.aF,4279310375,A.bj,u,D.bi,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.co,0,"","","","","",!1,0))
A.d.c6(j.e.r,i+q-1,new C.lX(""+1000*p+"_"+o,r+n,"",D.qP,4294967295,null,D.dh,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eAC.prototype={
$0(){var w,v=C.cG(),u=this.a,t=u.e
t=(t==null?null:C.kI(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ew(A.bj,!1,4279310375,A.aF,t,4280640491,24,A.bp,A.a7,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lm,0.35,0.55,0.62)
A.d.M(u.gdA().z,w)
u.r=w.a},
$S:0}
C.eAt.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b4O(o)
w=C.cG()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ew(A.bj,!1,4279310375,A.aF,"marriage_sign_placed_"+A.a.em(v.db,"marriage_sign_",""),4280640491,24,A.bp,A.a7,"",r,w,o.a,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lm,s,u,t)
A.d.M(p.gdA().z,q)
A.d.bs(p.gdA().z,new C.eAs(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.iii(p)}},
$S:0}
C.eAs.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEt.prototype={
$0(){var w=this.a,v=this.b
w.b4O(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eGk.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eCP.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bs(r.z,new C.eCO())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eCO.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eBe.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eBf.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.u_()},
$S:7}
C.eAq.prototype={
$0(){var w=C.ew(A.bj,!1,4279310375,A.aF,"HD Photo",4280640491,24,A.bp,A.a7,"",0.8,C.cG(),this.b,"","",0,!1,"",0,D.bi,4280172719,2,"",0,0,"",D.co,D.lO,0.8,0.1,0.1),v=this.a
A.d.M(v.gdA().z,w)
v.r=w.a},
$S:0}
C.eCg.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eAz.prototype={
$0(){var w=this.a,v=this.b
A.d.M(w.gdA().z,v)
w.r=v.a},
$S:0}
C.eAI.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eAJ.prototype={
$0(){var w=this.b.hR(),v=C.cG(),u=A.k.E(w.c+0.04,0,0.92),t=A.k.E(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ew(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.M(t.gdA().z,f)
t.r=f.a},
$S:0}
C.eAK.prototype={
$0(){var w=this.a.gdA().z,v=this.b,u=A.d.bg(w,new C.eAH(v))
if(u>=0&&u<w.length-1){A.d.cz(w,u)
A.d.c6(w,u+1,v)}},
$S:0}
C.eAH.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eAV.prototype={
$0(){var w=this.a.gdA().z,v=this.b,u=A.d.bg(w,new C.eAG(v))
if(u>0){A.d.cz(w,u)
A.d.c6(w,u-1,v)}},
$S:0}
C.eAG.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eAY.prototype={
$0(){return this.a.as=A.bj},
$S:0}
C.eAZ.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eB_.prototype={
$0(){return this.a.as=A.dV},
$S:0}
C.eB0.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eB1.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eB2.prototype={
$1(d){return d.b===D.cV},
$S:z+4}
C.eB3.prototype={
$1(d){return d.length!==0},
$S:3}
C.eAL.prototype={
$0(){var w=this.a,v=w.gdA().z,u=C.cG()
A.d.M(v,C.Dp(w.gqL().c.j(0.18).l(),0.1,u,D.bi,0,2,1,0,0))
u=w.gdA().z
v=C.cG()
A.d.M(u,C.j5(A.bj,!1,w.gqL().d.l(),A.aF,18,A.bp,A.H,0.07,v,"Document Header",0,D.dh,0.9,0.05,0.02))},
$S:0}
C.eAM.prototype={
$0(){var w,v=this.a,u=v.gdA().z,t=C.cG()
A.d.M(u,C.Dp(v.gqL().c.j(0.12).l(),0.1,t,D.bi,0,2,1,0,0.9))
t=v.gdA().z
u=C.cG()
w=C.bF7()
A.d.M(t,C.j5(A.K,!1,v.gqL().e.l(),A.aF,12,A.bp,A.a7,0.06,u,"Footer \xb7 "+w,0,D.dh,0.9,0.05,0.92))},
$S:0}
C.eAN.prototype={
$0(){A.d.M(this.a.gdA().z,C.Dp(1727914055,0.12,C.cG(),D.bi,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eAO.prototype={
$0(){var w=4279310375
A.d.M(this.a.gdA().z,C.Dp(w,0.08,C.cG(),D.bi,w,2,0.5,0.2,0.4))},
$S:0}
C.eAP.prototype={
$0(){var w=this.a,v=w.gdA().z,u=C.cG()
A.d.M(v,C.Dp(w.gqL().c.j(0.35).l(),0.12,u,D.DM,4280640491,2,0.2,0.15,0.55))
A.d.M(w.gdA().z,C.j5(A.bj,!1,4279310375,A.aF,18,A.bp,A.a7,0.15,C.cG(),"Important note",0,D.qQ,0.5,0.38,0.52))},
$S:0}
C.eAQ.prototype={
$0(){var w=this.a
A.d.M(w.gdA().z,C.Dp(4294507260,0.78,C.cG(),D.bi,4291548641,1.5,0.84,0.08,0.1))
A.d.M(w.gdA().z,C.j5(A.bj,!1,4279179050,A.aF,16,A.bp,A.a7,0.7,C.cG(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bF7()+"\n\nSubject:\n\nBody text\u2026",0,D.dh,0.76,0.12,0.14))},
$S:0}
C.eAR.prototype={
$0(){var w=this.a
A.d.M(w.gdA().z,C.Dp(4294897802,0.28,C.cG(),D.bi,4294626325,2,0.3,0.62,0.12))
A.d.M(w.gdA().z,C.j5(A.bj,!1,4285611794,A.aF,15,A.bp,A.a7,0.24,C.cG(),"Sticky note",0,D.aKh,0.26,0.64,0.14))},
$S:0}
C.eAS.prototype={
$0(){var w=4280640491,v=this.a
A.d.M(v.gdA().z,C.Dp(4293060848,0.04,C.cG(),D.bi,4291548641,2,0.8,0.1,0.48))
A.d.M(v.gdA().z,C.Dp(w,0.04,C.cG(),D.bi,w,2,0.55,0.1,0.48))},
$S:0}
C.eAT.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdA().z,C.j5(A.bj,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cG(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.Jb,0.42,0.06,0.18))
A.d.M(v.gdA().z,C.j5(A.bj,!1,w,A.aF,18,A.bp,A.a7,0.62,C.cG(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.v5,0.42,0.52,0.18))},
$S:0}
C.eAU.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdA().z,C.Dp(858088427,0.62,C.cG(),D.bi,4280640491,2,0.42,0.05,0.18))
A.d.M(v.gdA().z,C.Dp(856004201,0.62,C.cG(),D.bi,4278556265,2,0.42,0.53,0.18))
A.d.M(v.gdA().z,C.j5(A.bj,!1,w,A.aF,20,A.bp,A.H,0.1,C.cG(),"Option A",0,D.dh,0.36,0.08,0.2))
A.d.M(v.gdA().z,C.j5(A.bj,!1,w,A.aF,20,A.bp,A.H,0.1,C.cG(),"Option B",0,D.dh,0.36,0.56,0.2))},
$S:0}
C.eAW.prototype={
$0(){var w=4279310375,v=this.a
A.d.M(v.gdA().z,C.Dp(4294967295,0.36,C.cG(),D.bi,w,2,0.24,0.38,0.28))
A.d.M(v.gdA().z,C.j5(A.K,!1,w,A.aF,14,A.bp,A.a7,0.12,C.cG(),"[ QR CODE ]",0,D.dh,0.24,0.38,0.4))},
$S:0}
C.eAX.prototype={
$0(){return C.ckf(this.b,D.Tr,this.a.gqL())},
$S:0}
C.eCf.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a9k.q(0,d),t=this.a
return t.b9Y(d,v===d,A.b1,this.c,new C.eCe(t,u,d,w),u)},
$S:z+25}
C.eCe.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oj(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bFU(r,new C.eCd(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCd.prototype={
$0(){return this.a.d8(new C.eCc(this.b,this.c))},
$S:0}
C.eCc.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eAA.prototype={
$0(){var w,v=this.a,u=v.gqL(),t=C.rS(4294967295,null,0,0,null,C.cG(),D.mX,"","","",D.dh),s=this.b
C.ckf(t,s,u)
w=v.gdA()
if(w!=null&&s!==D.DL){t.e=w.e
t.f=w.f}A.d.c6(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eBi.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ios(p,q.d,s,new C.eBh(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.u_(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eBh.prototype={
$1(d){return this.bmS(d)},
bmS(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eBg(t,d))
w=2
return B.b(t.u_(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eBg.prototype={
$0(){var w,v,u
for(w=J.aX(this.b),v=this.a;w.C();){u=w.gS(w)
A.d.c6(v.d,0,u)}},
$S:0}
C.eBj.prototype={
$0(){return this.a.bLp()},
$S:0}
C.eBk.prototype={
$0(){return this.a.aS1("Class Presentation",!0)},
$S:0}
C.eBl.prototype={
$1(d){return this.a.bMm(d.b,this.b,d.a)},
$S:z+88}
C.eBW.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aG(w,A.bZ,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eE6.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aG(d,A.eN,x.w).w.f.d),new B.e2(new C.eE5(this.a,this.b),null),null)},
$S:61}
C.eE5.prototype={
$2(d,e){return B.pa(new C.eE4(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:557}
C.eE4.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.au:A.c,s=B.L(u?A.bz:A.aN,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aX,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.W,r,new B.D(A.alu,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.O,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b2,B.bM(!1,A.Ax,v,v,!0,v,v,v,new C.eE2(w.c),v,v)],q),A.m,v,A.e,A.i,0,v,v),v),B.E(B.cl(B.a([p.aUM(u,!0,!0,new C.eE3(p,w.d))],q),e,v,D.bAm,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.i,0,A.p),A.f,v,v,new B.o(t,v,s,A.l0,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eE2.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eE3.prototype={
$0(){this.b.$1(new C.eE0())
var w=this.a
if(w.c!=null)w.m(new C.eE1())},
$S:0}
C.eE0.prototype={
$0(){},
$S:0}
C.eE1.prototype={
$0(){},
$S:0}
C.eFF.prototype={
$3(d,e,f){return A.bK},
$C:"$3",
$R:3,
$S:97}
C.eFG.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.db(B.ee(A.A,new C.aAi(this.a,null),0.94+w*0.06,null,null),w)},
$S:346}
C.eFH.prototype={
$3(d,e,f){return A.bK},
$C:"$3",
$R:3,
$S:97}
C.eFI.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.db(B.ee(A.A,new C.beO(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:346}
C.eFJ.prototype={
$0(){return A.d.c6(this.a.d,0,C.WC(this.b))},
$S:0}
C.eAF.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dw.aw(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.au.j(0.72)],t):B.a([A.c.j(0.88),A.q0.j(0.75)],t)
r=B.L(A.b_.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.cf.j(0.18),A.L],t)
q=B.L(A.b_.j(0.45+q),A.r,1)
t=B.p(p,B.X(A3.a1O,u?A.ac:A.O,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.c_(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.O,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bx(o,B.us(A.fL,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aC:A.al,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.m,p,A.e,A.i,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a9(A.az,A.aE,A.x,s,p,p),A.n),p,p,p,p,A.eu,p,p,1/0),14,!1),A.ap)},
$S:313}
C.eBK.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eBL.prototype={
$1(d){return d.length!==0},
$S:3}
C.eBM.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.k0
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a2n:A.Ch}return w},
$S:713}
C.eBP.prototype={
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
s=t?B.a([A.c.j(0.1+w*0.04),A.au.j(0.78)],s):B.a([A.c.j(0.92),A.nd.j(0.82)],s)
r=m.e
q=A.d.gI(r)
p=t?0.34:0.26
p=B.L(q.j(p+w*0.22),A.r,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kI(v.w)?A.wr:A.qC,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a9(A.a5,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.O,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Qv(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Qv(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Qv(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.Qv(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Qv(v.f)
r=k.bMk(n,A.d.gI(r),t)
return B.p(l,B.bx(j,new B.a8E(B.aI(!1,A.a2,!0,l,B.aO(!1,l,!0,B.p(l,B.dH(!1,A.NN,l,l,!0,l,l,l,!0,l,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.oo,t?A.aC:A.bL,l,l,l,l),l,l,l,new C.eBN(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a9(A.az,A.aE,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eBO(k,v),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai),l),A.ap),A.f,l,l,l,l,l,l,A.d1,l,l,l,l)},
$S:98}
C.eBO.prototype={
$0(){return this.a.ag9(this.b)},
$S:0}
C.eBN.prototype={
$0(){return this.a.B6(this.b,this.c)},
$S:0}
C.eDf.prototype={
$0(){var w=this.a
w.b8x()
w.m(new C.eDe())},
$S:0}
C.eDe.prototype={
$0(){},
$S:0}
C.eDg.prototype={
$1(d){return this.a.akb(this.b.a,d)},
$S:2}
C.eDh.prototype={
$0(){this.a.d8(new C.eDd(this.b))},
$S:0}
C.eDd.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cA:A.U},
$S:0}
C.eDi.prototype={
$0(){this.a.d8(new C.eDc(this.b))},
$S:0}
C.eDc.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eDj.prototype={
$0(){this.a.d8(new C.eDb(this.b))},
$S:0}
C.eDb.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.n2},
$S:0}
C.eDk.prototype={
$0(){this.a.d8(new C.eDa(this.b))},
$S:0}
C.eDa.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDl.prototype={
$0(){var w=this.a
w.d8(new C.eD9(w,this.b))},
$S:0}
C.eD9.prototype={
$0(){var w=this.b
return w.as=this.a.c6T(w.as)},
$S:0}
C.eDm.prototype={
$0(){return this.a.d8(new C.eD8(this.b))},
$S:0}
C.eD8.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eDn.prototype={
$0(){return this.a.d8(new C.eD7(this.b))},
$S:0}
C.eD7.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eD0.prototype={
$0(){return this.a.a2Z(this.b.a)},
$S:0}
C.eD1.prototype={
$0(){this.a.a0u()
return null},
$S:0}
C.eD2.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aG(v,A.bZ,x.w).w.a.a<900)w.ags()
else w.m(new C.eD_(w))},
$S:0}
C.eD_.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eD3.prototype={
$0(){this.a.d8(new C.eCZ(this.b))},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cA:A.U},
$S:0}
C.eD4.prototype={
$0(){return this.a.d8(new C.eCY(this.b))},
$S:0}
C.eCY.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eD5.prototype={
$0(){return this.a.d8(new C.eCX(this.b))},
$S:0}
C.eCX.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eD6.prototype={
$0(){return this.a.aBg(null)},
$S:0}
C.eC8.prototype={
$0(){this.a.DV()
return null},
$S:0}
C.eC9.prototype={
$0(){this.a.ab2()
return null},
$S:0}
C.eCb.prototype={
$1(d){return this.bmT(d)},
bmT(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.Kr(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bV(A.au,null,new C.eC3(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d8(new C.eC4(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d8(new C.eC5(r))
s=s.c.L(x.q).f
s.U(B.b3(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d8(new C.eC6(r))
s=s.c.L(x.q).f
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
return B.b(C.hC5(q,new C.F2(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d8(new C.eC7(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.ahI(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.U(B.b3(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Z,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eC3.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.epH],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bVj:r
q.push(B.dH(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,r,new C.eC2(d,t),!1,r,r,r,r,r,r,r,new B.y(""+t+" seconds",r,A.df,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.x(q,A.m,r,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eC2.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eC4.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eC5.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eC6.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eC7.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eCa.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.A8(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.A8(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.A8(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.ahI(r?t:s.db)
s=s==null?t:s.b
return B.a([D.evd,q,v,u,B.A8(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:143}
C.eGq.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bF4(w,v)}},
$S:0}
C.eGr.prototype={
$0(){this.a.DV()
return null},
$S:0}
C.eDq.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.c4X:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bN
if(s)v=A.c
else v=this.b?A.aR:A.bt
return new B.D(A.fv,B.aA(u,B.cY(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b5,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lG,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eDp(t,d),u,u,u,u,u,u,!1,A.a3),u)},
$S:131}
C.eDp.prototype={
$0(){var w=this.a
return w.m(new C.eDo(w,this.b))},
$S:0}
C.eDo.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eDr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a5s:E.aAu
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbPU():t.gbLK()
return B.hf(B.aA(u,B.p(u,D.aqq,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gI(v).j(0.45),A.I,10)],x.V),new B.a9(A.a5,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a3),u,s,u,u)},
$S:1718}
C.eDs.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.inI(v,w.a.c)},
$S:0}
C.eEP.prototype={
$0(){return this.b.vz(this.a.a)},
$S:0}
C.eEQ.prototype={
$0(){return this.a.vz(D.mX)},
$S:0}
C.eER.prototype={
$0(){return this.a.vz(D.J9)},
$S:0}
C.eF1.prototype={
$0(){return this.a.vz(D.Ja)},
$S:0}
C.eFc.prototype={
$0(){return this.a.vz(D.J8)},
$S:0}
C.eFn.prototype={
$0(){return this.a.qw("lab_report")},
$S:0}
C.eFu.prototype={
$0(){return this.a.qw("rubric")},
$S:0}
C.eFv.prototype={
$0(){return this.a.qw("minutes")},
$S:0}
C.eFw.prototype={
$0(){return this.a.qw("agenda")},
$S:0}
C.eFx.prototype={
$0(){return this.a.qw("timeline")},
$S:0}
C.eFy.prototype={
$0(){return this.a.qw(this.b.a)},
$S:0}
C.eES.prototype={
$0(){this.a.Wu()
return null},
$S:0}
C.eET.prototype={
$0(){this.a.Wo()
return null},
$S:0}
C.eEU.prototype={
$0(){return this.a.qw("table")},
$S:0}
C.eEV.prototype={
$0(){return this.a.qw("sticky")},
$S:0}
C.eEW.prototype={
$0(){return this.a.qw("divider")},
$S:0}
C.eEX.prototype={
$0(){return this.a.qw("header_bar")},
$S:0}
C.eEY.prototype={
$0(){return this.a.pl(D.bi)},
$S:0}
C.eEZ.prototype={
$0(){return this.a.pl(D.eT)},
$S:0}
C.eF_.prototype={
$0(){return this.a.pl(D.k5)},
$S:0}
C.eF0.prototype={
$0(){return this.a.pl(D.DM)},
$S:0}
C.eF2.prototype={
$0(){return this.a.pl(D.k6)},
$S:0}
C.eF3.prototype={
$0(){return this.a.pl(D.ln)},
$S:0}
C.eF4.prototype={
$0(){return this.a.pl(D.fD)},
$S:0}
C.eF5.prototype={
$0(){this.a.HJ()
return null},
$S:0}
C.eF6.prototype={
$0(){this.a.NT()
return null},
$S:0}
C.eF7.prototype={
$0(){return this.a.qw("quote")},
$S:0}
C.eF8.prototype={
$0(){return this.a.a9b()},
$S:0}
C.eF9.prototype={
$0(){this.a.a0A()
return null},
$S:0}
C.eFa.prototype={
$0(){var w=this.a
return w.m(new C.eEF(w))},
$S:0}
C.eEF.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eFb.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oj(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eEN(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEN.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eFd.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kb()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a9m.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aX
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.L(t,A.r,v?2.5:1),s,s,new B.a9(A.a5,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a9m.q(0,q))u.push(B.ap(s,B.p(s,D.Pu,A.f,s,s,D.F8,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fv,B.aA(s,B.hf(new B.an(A.a_,s,A.ab,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eEM(r,d),s,s,s,s,s,s,!1,A.a3),s)},
$S:z+89}
C.eEM.prototype={
$0(){this.a.a9t(this.b)
return null},
$S:0}
C.eFe.prototype={
$0(){this.a.a9s(this.b)
return null},
$S:0}
C.eFf.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hTL(d),p=this.a,o=B.n(8),n=p.gdA()
n=n==null?r:n.x
w=d.a
n=n===w?A.bl:A.aX
v=p.gdA()
n=B.L(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rS(4294967295,r,0,0,r,"preview_"+w,D.qP,"","","",D.dh)
C.hyT(s,w)
w=x.p
u=B.a([B.bx(o,B.p(r,B.bx(t,C.hAd(s),A.ap),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.ap)],w)
if(q)u.push(B.ap(r,B.p(r,D.ar1,A.f,r,r,D.F8,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iJ,B.aA(r,B.x(B.a([new B.an(A.a_,r,A.ab,A.t,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aC:A.al,r,r,r,r,r,r,r,r,9,r,r,A.U,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.i,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eEL(p,q,d),r,r,r,r,r,r,!1,A.a3),r)},
$S:z+90}
C.eEL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdA()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.oj(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d8(new C.eEB(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEB.prototype={
$0(){return C.hyT(this.a,this.b.a)},
$S:0}
C.eEO.prototype={
bmU(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a9k.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oj(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bmU(d,e)},
$S:z+91}
C.eFz.prototype={
$4(d,e,f,g){var w=null,v=B.T(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eFB(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.ci(B.B(v,A.m,w,A.e,A.i,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+92}
C.eFB.prototype={
$1(d){var w=this
return w.a.b9Y(d,w.b===d,w.c,w.d,new C.eFA(w.e,d),!D.a9k.q(0,d))},
$S:z+25}
C.eFA.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eFg.prototype={
$1(d){this.b.$2(d,new C.eEK(this.a,d,this.c))
return null},
$S:z+26}
C.eEK.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bFU(u,new C.eEA(v,this.c,w),w)},
$S:0}
C.eEA.prototype={
$0(){return this.a.d8(new C.eEy(this.b,this.c))},
$S:0}
C.eEy.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eFh.prototype={
$1(d){this.b.$2(d,new C.eEJ(this.a,d))
return null},
$S:z+26}
C.eEJ.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h0E(u,new C.eEz(v,w),w)},
$S:0}
C.eEz.prototype={
$0(){var w=this.a
return w.d8(new C.eEx(w,this.b))},
$S:0}
C.eEx.prototype={
$0(){return this.a.gdA().r=this.b},
$S:0}
C.eFi.prototype={
$0(){var w=this.a
return w.m(new C.eEI(w))},
$S:0}
C.eEI.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eFj.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bF4(w,v)}},
$S:0}
C.eFk.prototype={
$0(){this.a.Iv()
return null},
$S:0}
C.eFl.prototype={
$0(){return this.a.a9b()},
$S:0}
C.eFm.prototype={
$0(){var w=this.a,v=w.kb()
if(v!=null&&v.b===D.cV)w.d8(new C.eEH(v))},
$S:0}
C.eEH.prototype={
$0(){var w=this.a
w.f=A.k.E(w.f*1.25,0.08,1.8)
w.e=A.k.E(w.e*1.1,0.08,1.8)},
$S:0}
C.eFo.prototype={
$0(){this.a.DV()
return null},
$S:0}
C.eFp.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FB(v,!0)
return null},
$S:0}
C.eFq.prototype={
$0(){this.a.d8(new C.eEG(this.b))},
$S:0}
C.eEG.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.U)?A.cA:A.U},
$S:0}
C.eFr.prototype={
$0(){this.a.d8(new C.eEE(this.b))},
$S:0}
C.eEE.prototype={
$0(){var w=this.a
return w.y=w.y===A.cD?A.bp:A.cD},
$S:0}
C.eFs.prototype={
$0(){this.a.d8(new C.eED(this.b))},
$S:0}
C.eED.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aF:A.n2},
$S:0}
C.eFt.prototype={
$0(){this.a.d8(new C.eEC(this.b))},
$S:0}
C.eEC.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eBd.prototype={
$1(d){return this.bmR(d)},
bmR(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oj(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d8(new C.eBc(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:188}
C.eBc.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eFW.prototype={
$0(){var w=this.a
return w.d8(new C.eFV(w,this.b))},
$S:0}
C.eFV.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u-1,1,120)},
$S:0}
C.eFX.prototype={
$0(){var w=this.a
return w.d8(new C.eFU(w,this.b))},
$S:0}
C.eFU.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.E(u+1,1,120)},
$S:0}
C.eCl.prototype={
$0(){return this.a.d8(new C.eCk(this.b))},
$S:0}
C.eCk.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w-2,10,96)},
$S:0}
C.eCm.prototype={
$0(){return this.a.d8(new C.eCj(this.b))},
$S:0}
C.eCj.prototype={
$0(){var w=this.a
return w.w=A.k.E(w.w+2,10,96)},
$S:0}
C.eCT.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.asI,new C.eCS(),w),w.k("ak.E"))
return w},
$S:z+94}
C.eCS.prototype={
$1(d){var w=null
return B.A8(B.d(d.b,w,w,w,w,w,w,A.lR,w,w,w),48,d,x.fO)},
$S:z+95}
C.eG8.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a4(v,w?8:0,null,null)},
$S:37}
C.eG7.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kv()?q:new C.eG5(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bl
else v=r.d?A.aX:A.cq
v=B.L(v,A.r,o?2:1)
u=r.d?A.cr:A.c
t=B.bT(0,C.hAd(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aA(q,B.p(q,new B.an(A.a_,q,A.ab,A.t,B.a([t,B.ap(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nK,q,q,q),A.f,q,q,new B.o(A.aS,q,q,s,q,q,A.n),q,q,q,q,A.amp,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eG6(p,e),q,q,q,q,q,q,!1,A.a3)},
$S:84}
C.eG6.prototype={
$0(){var w=this.a
return w.m(new C.eG1(w,this.b))},
$S:0}
C.eG1.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KA()},
$S:0}
C.eG5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bV(null,null,new C.eG2(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eG3(q,s))
q.aTv()}else if(r==="del"){q=t.a
q.m(new C.eG4(q,s))
q.aSD()}else if(r==="up")t.a.b51(s,s-1)
else if(r==="down")t.a.b51(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eG2.prototype={
$1(d){var w=null,v=B.a([B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bX2,w,w,w,w,new C.eFY(d),!1,w,w,w,w,w,w,w,D.fCa,w,w,w),B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWW,w,w,w,w,new C.eFZ(d),!1,w,w,w,w,w,w,w,A.xe,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bWb,w,w,w,w,new C.eG_(d),!1,w,w,w,w,w,w,w,D.fKw,w,w,w))
if(u<this.b.r.length-1)v.push(B.dH(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYh,w,w,w,w,new C.eG0(d),!1,w,w,w,w,w,w,w,D.fBZ,w,w,w))
return B.bn(!0,B.x(v,A.m,w,A.e,A.P,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eFY.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.eFZ.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.eG_.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.eG0.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.eG3.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eG4.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eG9.prototype={
$0(){return this.a.a9b()},
$S:0}
C.eBD.prototype={
$0(){var w=this.a
w.b8x()
w.aBg(null)},
$S:0}
C.eBC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.ds,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a9(A.az,A.aE,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a9(A.az,A.aE,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bx(s,B.c4(A.kx,new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bh),A.ap)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.N(r,new C.eBB(this.a,e.b,e.d,q),B.T(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.at(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aC:A.bL,p,p,p,p,p,p,p,p,p,p,p,A.a7,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c4(new B.an(A.a_,p,A.ab,A.f,s,new B.bQ("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bh)},
$S:373}
C.eBB.prototype={
$1(d){var w=this
return w.a.bHI(d,w.b,w.c,w.d)},
$S:z+23}
C.eBq.prototype={
$0(){var w=this
if(w.b){w.a.O0(w.c)
return}if(w.d){w.a.a99(w.c)
return}if(w.e){w.a.ahK(w.c)
return}if(w.f)w.a.b95(w.c)},
$S:0}
C.eBr.prototype={
$0(){this.a.O0(this.b)
return null},
$S:0}
C.eBs.prototype={
$0(){return this.a.a2Z(this.b.a)},
$S:0}
C.eBt.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eBp(u,d,w.c,w.d))
v.I9()
v.ov()
v.pF()},
$S:19}
C.eBp.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.E(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.E(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eBu.prototype={
$1(d){return this.a.akb(this.b.a,d)},
$S:2}
C.eBw.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hd9(w))u.a.O0(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b95(v)},
$S:0}
C.eBv.prototype={
$0(){return this.a.a2Z(this.b.a)},
$S:0}
C.eBx.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eBo(w.b,d,w.c,w.d))
v.I9()
v.ov()
v.pF()},
$S:19}
C.eBo.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.E(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.E(v.f+u/w.d,0.04,1.8)
if(v.b===D.cV)v.w=A.k.E(v.w+u*0.15,10,120)},
$S:0}
C.eBy.prototype={
$1(d){var w=this.a
w.m(new C.eBn(this.b,d))
w.I9()
w.ov()
w.pF()},
$S:225}
C.eBn.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.E(w.e*v,0.04,1.8)
w.f=A.k.E(w.f*v,0.04,1.8)
if(w.b===D.cV)w.w=A.k.E(w.w*v,10,120)},
$S:0}
C.eBz.prototype={
$0(){var w=this.a
w.m(new C.eBm(this.b))
w.I9()
w.ov()
w.pF()},
$S:0}
C.eBm.prototype={
$0(){this.a.r=C.hzI()},
$S:0}
C.eBA.prototype={
$0(){return this.a.a2Z(this.b.a)},
$S:0}
C.eDu.prototype={
$0(){var w=this.a
return w.m(new C.eDt(w))},
$S:0}
C.eDt.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eDv.prototype={
$1(d){return this.a.cGD(this.b.a,d)},
$S:2}
C.eCz.prototype={
$1(d){var w
this.a.d8(d)
w=this.b
if(w!=null)w.$0()},
$S:161}
C.eCA.prototype={
$1(d){return this.a.$1(new C.eCy(this.b,d))},
$S:6}
C.eCy.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eCB.prototype={
$1(d){return this.a.$1(new C.eCx(this.b,d))},
$S:6}
C.eCx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eCC.prototype={
$1(d){return this.a.$1(new C.eCw(this.b,d))},
$S:6}
C.eCw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eCD.prototype={
$1(d){return this.a.$1(new C.eCv(this.b,d))},
$S:6}
C.eCv.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eCE.prototype={
$1(d){return this.a.$1(new C.eCu(this.b,d))},
$S:6}
C.eCu.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eCF.prototype={
$1(d){return this.b.$1(new C.eCt(this.a,this.c))},
$S:9}
C.eCt.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eCG.prototype={
$1(d){return this.b.$1(new C.eCs(this.a,this.c))},
$S:9}
C.eCs.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eCH.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bl:A.cY
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.L(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eCr(this.a,v,d),w,w,w,w,w,w,!1,A.a3)},
$S:442}
C.eCr.prototype={
$0(){return this.a.$1(new C.eCo(this.b,this.c))},
$S:0}
C.eCo.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eCI.prototype={
$1(d){return this.a.$1(new C.eCq(this.b,d))},
$S:1719}
C.eCq.prototype={
$0(){var w=this.b
return this.a.as=w.gI(w)},
$S:0}
C.eCJ.prototype={
$1(d){var w=null
return B.aA(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eCp(this.a,this.b,d),w,w,w,w,w,w,!1,A.a3)},
$S:442}
C.eCp.prototype={
$0(){return this.a.$1(new C.eCn(this.b,this.c))},
$S:0}
C.eCn.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eCK.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pT()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eN()}v.a.atL()},
$S:0}
C.eCN.prototype={
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
s=B.L(A.c.j(0.3+w*0.2),A.r,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.L(u,A.r,1.2)
r.push(B.ap(2,B.p(n,B.X(A.uM,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nw,n,n,n),n,n,n,2,n,n))
return B.aI(!1,A.a2,!0,n,B.aO(!1,m,!0,B.eK(new B.a4(48,48,new B.an(A.A,n,A.ab,A.t,r,n),n),n,new B.o(n,n,s,v,n,new B.a9(A.az,A.aE,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.L,0,n,A.L,n,n,n,A.ai)},
$S:141}
C.eAm.prototype={
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
t=B.L(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.L(A.c.j(0.4+w*0.15),A.r,1)
return B.aI(!1,A.a2,!0,p,B.aO(!1,o,!0,B.eK(B.x(B.a([B.ee(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j8,A.K,p,p)],x.p),A.m,p,A.b9,A.i,0,A.p),p,new B.o(p,p,t,v,p,new B.a9(A.az,A.aE,A.x,u,p,p),A.n),p,A.GG,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.ai)},
$S:141}
C.eEr.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.Y,!0,w,!0,A.t,w,B.aN(),u,w,w,w,w,w,2,A.arS,A.y,!0,w,!0,w,!1,w,A.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ei(B.a([B.bM(!1,A.di,w,w,!0,w,w,w,new C.eEp(d),w,w),B.bI(A.r2,w,new C.eEq(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eEp.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eEq.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d8P.prototype={
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
t=B.ar(A.aK,A.d.gI(C.kI(j.a.c.w)?D.uX:L.nB),w*0.35)
t.toString
t=B.L(t,A.r,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gI(C.kI(j.a.c.w)?D.uX:L.nB).j(0.18+w*0.12),A.I,32+w*10),D.ae4],s)
q=B.n(22)
p=x.O
o=B.ap(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.b0,0.9,A.x,k,0,B.a([A.d.gI(C.kI(j.a.c.w)?D.uX:L.nB).j(0.22+w*0.1),A.L],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gI(C.kI(j.a.c.w)?D.uX:L.nB).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.c_(A.A,0.5,A.x,k,0,B.a([m,A.d.gak(C.kI(j.a.c.w)?D.uX:L.nB).j(0.08),A.L],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kI(m)?D.uX:L.nB
s=B.a([new B.ac(0,A.G,A.d.gI(C.kI(m)?D.uX:L.nB).j(0.45+w*0.2),A.cy,18)],s)
m=x.p
l=B.a([p,B.ee(A.A,B.p(k,B.X(C.kI(j.a.c.w)?A.wr:A.qC,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a9(A.az,A.aE,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.ab,A.t,l,k),A.W,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kI(j.a.c.w)?D.uX:L.nB).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.K,k,k),A.fG,B.d(j.a.c.b,k,2,A.a1,k,k,k,D.ftP,A.K,k,k),A.av,B.d(j.gcBy(),k,k,k,k,k,k,D.fyH,A.K,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gSX()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gI(C.kI(j.a.c.w)?D.uX:L.nB).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.U,k,k,!0,k,k,k,k,k,k,k,k),A.K,k,k),A.ae],m))}s.push(new C.Kl(A.yV,"Download PDF","pdf",A.d3,j.Jr(0),!1,k))
p=j.a.c
if(!p.z||p.gSX()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Kl(A.jH,"Transfer to "+C.hzK(p==null?"":p),"transfer_hati",A.aW,j.Jr(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.Jr(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Kl(D.bOw,"Rename presentation","rename",A.cf,n,!1,k),A.am,new C.Kl(A.aob,"Duplicate","duplicate",A.b7,j.Jr(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Kl(A.eb,"Delete presentation","delete",A.aw,j.Jr(p),!0,k))
s.push(A.av)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.Jr(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.Jr(n)
s.push(B.dR(B.db(B.bM(!1,E.aVN,k,k,!0,k,k,k,new C.d8O(d),k,B.fy(k,k,k,k,k,k,k,k,k,k,k,A.bL,k,k,k,A.ax,k,D.bDB,k,k,k,k,k,A.kt,k,k)),n),new B.u(0,(1-p)*8)))
return B.ee(A.A,B.db(B.aI(!1,A.a2,!0,k,B.p(k,B.bx(q,new B.an(A.a_,k,A.ab,A.t,B.a([o,new B.D(D.bCK,B.x(s,A.m,k,A.e,A.P,0,A.p),k)],m),k),A.ap),A.f,k,A.Xh,new B.o(A.au,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.L,0,k,k,k,k,k,A.ai),i),0.88+u*0.12,k,k)},
$S:46}
C.d8O.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d9c.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d9d.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d8M.prototype={
$1(d){var w=this.a
return w.m(new C.d8I(w))},
$S:22}
C.d8I.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d8N.prototype={
$1(d){var w=this.a
return w.m(new C.d8H(w))},
$S:69}
C.d8H.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d8L.prototype={
$0(){var w=this.a
return w.m(new C.d8J(w))},
$S:0}
C.d8J.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d8K.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.eH6.prototype={
$0(){return $.bmw=!$.bmw},
$S:0}
C.eGX.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaWI())u.ayR()},
$S:0}
C.eH5.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eGY.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eGZ.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.ayR()},
$S:0}
C.eGT.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gI(w.a.c.r).r
w.d=0},
$S:0}
C.eGU.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eGV.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eGW.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eH3.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b3,A.t,w,null)},
$S:1720}
C.eH4.prototype={
$2(d,e){var w
if(e.gc4(e)===A.il)return new B.d1(e,!1,d,null)
w=this.a
return w.czs(w.e,d,e)},
$S:447}
C.eH_.prototype={
$2(d,e){var w=B.dt(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fN((1-v.gp(0))*1.5708)
return B.fA(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eH0.prototype={
$2(d,e){var w=B.dt(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.km((1-v.gp(0))*1.5708)
return B.fA(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eH1.prototype={
$2(d,e){var w=B.dt(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fN(v.gp(0)*0.8)
w.km(v.gp(0)*0.35)
return B.fA(A.A,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eH2.prototype={
$2(d,e){var w=B.dt(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fN(-v.gp(0)*1.2)
return B.fA(A.a8,B.db(e,v.gp(0)),null,w,!0)},
$S:46}
C.eH7.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gZG().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gZG().x
t===$&&B.c()
return new C.b2W(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Ji(v.c,t,!0,new B.bQ("cine"+u,x.W))},
$S:685}
C.eH9.prototype={
$1(d){var w=this.a
if(d.b.a>B.aG(this.b,A.bZ,x.w).w.a.a*0.55)w.ayR()
else w.cnI()},
$S:69}
C.eH8.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fRQ.prototype={
$4(d,e,f,g){var w=this.b
A.d.aa(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:409}
C.fRZ.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ei(B.a([B.bM(!1,A.di,w,w,!0,w,w,w,new C.fRW(d),w,w),B.bM(!1,D.fS3,w,w,!0,w,w,w,new C.fRX(d,this.b,v),w,w),B.bI(A.aW4,w,new C.fRY(d,v,this.c),w)],x.p),w,w,P.u2,new B.a4(320,w,t,w),w,w,w,w,D.fTB,w)},
$S:18}
C.fRW.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fRX.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.hdO(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fRY.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aRB(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aR1(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fRP.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cki.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.r(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:504}
C.fRV.prototype={
$1(d){return d.ah()},
$S:z+14}
C.fnE.prototype={
$1(d){return C.hdM(C.WC(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.h_U.prototype={
$3(d,e,f){return A.bK},
$C:"$3",
$R:3,
$S:97}
C.h_V.prototype={
$4(d,e,f,g){var w=A.cu.aw(0,e.gp(0))
return B.db(B.ee(A.A,D.hth,0.94+w*0.06,null,null),w)},
$S:346}
C.h_W.prototype={
$1(d){var w=this
return new C.WE(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.eGD.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eGz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eGC.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.WF(u,this.b,w.gaPW(),v,null)},
$S:z+99}
C.eGA.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eGB.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eGE.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eGF.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eGI.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eGJ.prototype={
$0(){var w=this.a
return w.m(new C.eGH(w))},
$S:0}
C.eGH.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eGK.prototype={
$0(){var w=this.a
return w.m(new C.eGG(w))},
$S:0}
C.eGG.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eGL.prototype={
$1(d){return this.a.bMl(d,this.b)},
$S:z+100}
C.eGy.prototype={
$0(){var w=this.a
return w.m(new C.eGx(w,this.b))},
$S:0}
C.eGx.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eGM.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eGN.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eGO.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eGP.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eGQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fL(new B.fE(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.U(D.ffD)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eAg.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eAf())},
$S:0}
C.eAf.prototype={
$0(){},
$S:0}
C.eAh.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fY()},
$S:7}
C.eAc.prototype={
$1(d){return this.a.m(new C.eAb())},
$S:2}
C.eAb.prototype={
$0(){},
$S:0}
C.eAd.prototype={
$1(d){return this.a.b0S()},
$S:2}
C.eAe.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.eGS.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qk(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eGR(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGR.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fM6.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ap(w,new B.er(new B.jZ(this.c,new C.fM5(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:228}
C.fM5.prototype={
$3(d,e,f){return new C.Ji(e,!1,!1,new B.bQ(e.a,x.W))},
$S:z+102}
C.fM7.prototype={
$1(d){var w=null
return B.oG(!1,B.at(new C.bxc(this.a,this.b,w),w,w,w),w,x.z)},
$S:343}
C.fMb.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmN(),$async$$0)
case 3:w=4
return B.b(B.bP(A.m8,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmN(),$async$$0)
case 5:s=$.aW.al$.x.h(0,t.a)
r=s==null?null:s.gbd()
if(!(r instanceof B.qe))throw B.W("Could not draw the slide.")
u=r.m9(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1723}
C.fMc.prototype={
bno(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hA(A.hb),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hP([J.eT(A.dK.gaS(r))],"image/png"))
t.toString
s=Ao.h4l(t)
w=4
return B.b(new B.ql(s,"load",!1,x.ev).gI(0).dc(0,A.jU),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bno(d)},
$S:1724}
C.fM8.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:157}
C.fM9.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h1(0)},
$S:157}
C.fMa.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fhx.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fqd,A.K,w,w)},
$S:1725}
C.fhy.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bx(v,B.kk(A.bo,w,A.dH,8,w,e===0?w:e,w),A.ap)},
$S:529}
C.eow.prototype={
$1(d){this.a.a_U()
return null},
$S:11}
C.eou.prototype={
$0(){return this.a.e=D.byA},
$S:0}
C.eov.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bC
return this.b.e=w},
$S:0}
C.co7.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.co8.prototype={
$2(d,e){return(d|e)>>>0},
$S:65};(function aliases(){var w=C.aNw.prototype
w.byv=w.t
w=C.aN0.prototype
w.bxZ=w.t
w=C.aMM.prototype
w.bxJ=w.t
w=C.aN_.prototype
w.bxY=w.t
w=C.aNu.prototype
w.byt=w.t
w=C.aOO.prototype
w.bzY=w.t
w=C.aLH.prototype
w.bwB=w.t
w=C.aNH.prototype
w.byG=w.t
w=C.aNI.prototype
w.byH=w.t
w=C.b4C.prototype
w.bt8=w.aEq})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ilt","aox",104)
v(C.aKC.prototype,"gc7f","ZN",0)
var r
u(r=C.az2.prototype,"gcAU","cAV",38)
v(r,"gc84","aeo",0)
v(r=C.ayZ.prototype,"gb_h","Eo",3)
v(r,"gc81","c82",3)
v(r,"gaxX","y4",0)
v(r,"gaxY","J6",0)
t(C,"ilU","hRw",105)
v(C.aFd.prototype,"gcaY","caZ",3)
s(C,"im4",0,null,["$4$paper$photo$request$template"],["fTf"],106,0)
s(C,"im3",0,null,["$5$doc$history$instruction$photo$template"],["bEn"],107,0)
v(r=C.aFu.prototype,"gcbH","Jo",0)
v(r,"gbLN","XA",0)
v(r,"gcbK","afd",0)
v(r,"gcbJ","a_G",0)
v(r,"gb0x","EG",0)
v(C.aFx.prototype,"gcbP","a_I",0)
v(r=C.aGW.prototype,"gb0K","Qr",0)
v(r,"gcsA","b56",3)
v(r,"gcCh","aCx",86)
v(r,"gbPI","ab7",0)
v(r,"gccf","AL",0)
v(r=C.aIT.prototype,"gcms","a14",0)
v(r,"gcmA","a17",0)
v(r,"gbED","a9z",0)
v(r,"gccj","afp",0)
v(C.aIS.prototype,"gcck","afq",0)
v(C.aCU.prototype,"gbDC","a9m",0)
v(C.aBh.prototype,"gccl","a_T",0)
w(C,"imh","ika",12)
w(C,"imf","ih3",12)
w(C,"img","ij8",12)
v(r=C.aFO.prototype,"gcFy","cFz",3)
v(r,"gcqQ","cqR",3)
u(r,"gEM","ag9",7)
v(r,"gbJq","asV",3)
u(r,"gEN","b26",7)
v(r,"gceC","afR",0)
v(r,"gcdt","afQ",0)
v(r,"gcgM","aga",0)
v(r,"gbLK","aaH",0)
v(r,"gchG","a0u",0)
v(r,"gchH","agr",0)
v(r,"gcid","agy",0)
v(r,"gcgZ","agd",0)
v(r,"gbPU","abb",0)
v(r,"gaTu","aTv",3)
v(r,"gaSC","aSD",3)
v(r,"gaOe","aOf",3)
v(r,"gaSB","atL",3)
u(r,"gbDT","bDU",80)
v(r,"gaC3","b8g",3)
v(r,"gcdv","cdw",3)
v(r,"gc0i","c0j",3)
v(r,"gbOd","bOe",3)
v(r=C.aFR.prototype,"gcEk","cEl",3)
v(r,"gcE_","cE0",3)
t(C,"imi","ikr",2)
v(r=C.aFP.prototype,"gccr","Jt",0)
v(r,"gcuF","RU",0)
v(r,"gcco","Js",0)
v(r,"gcGO","a3E",0)
v(r,"gcip","agF",0)
v(C.aFN.prototype,"gccs","b0S",3)
v(r=C.aFQ.prototype,"gbQK","abl",0)
u(r,"gccp","ccq",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aD,[C.ob,C.Sx,C.bJY,C.bIi,C.cF6,C.cF4,C.bSb,C.bas,C.cF5,C.bGT,C.co1,C.co_,C.co0,C.cnZ,C.au2,C.cnY,C.bTe,C.oE,C.aGp,C.jB,C.nY,C.a8D,C.zX,C.lu,C.oQ,C.mm,C.zY,C.o1,C.a8L,C.asn,C.b2X,C.enW,C.lr,C.Fb,C.eA,C.ja,C.F2,C.y_,C.eP,C.lX,C.i7,C.jW,C.a8M,C.afU,C.b2Y,C.b4C,C.a3C])
u(B.jx,[C.cMY,C.c3a,C.fHi,C.cOu,C.cNR,C.fMP,C.e6i,C.e6h,C.eoz,C.eoy,C.fOd,C.foO,C.foP,C.cix,C.ciy,C.ciz,C.esd,C.f0h,C.f_F,C.f_E,C.f0I,C.f0f,C.f08,C.f0r,C.f17,C.fwO,C.f7v,C.f7u,C.f7Y,C.enZ,C.fRM,C.e1w,C.fYs,C.fOA,C.cka,C.ck8,C.ckd,C.fP4,C.fP5,C.fP6,C.fP7,C.cjV,C.cjW,C.dOG,C.cjS,C.fP3,C.feU,C.e_e,C.cjL,C.enF,C.fME,C.eDR,C.eEf,C.eEc,C.eEb,C.eEm,C.eEl,C.eFR,C.eFQ,C.eE5,C.eE4,C.eAF,C.eBP,C.eEO,C.eG8,C.eG7,C.eBC,C.eCN,C.eAm,C.d8P,C.eH3,C.eH4,C.eH_,C.eH0,C.eH1,C.eH2,C.eH7,C.cki,C.eGD,C.eGO,C.co8])
u(B.hz,[C.cMZ,C.cN_,C.bTf,C.fEg,C.c39,C.c3c,C.fUW,C.fg3,C.ffV,C.fga,C.fnF,C.fnG,C.fHj,C.fHh,C.fUr,C.fDV,C.fVh,C.cOk,C.cOp,C.cOr,C.cOn,C.cOs,C.cOl,C.cOt,C.cOg,C.cOd,C.cOc,C.cOj,C.cNM,C.cNK,C.fLR,C.fLS,C.frW,C.fMQ,C.fMW,C.fqZ,C.ceR,C.fLP,C.fLQ,C.fGF,C.fGG,C.fMV,C.fMR,C.fMT,C.fMU,C.fMS,C.fYK,C.fGJ,C.fGK,C.fGN,C.fGO,C.fGR,C.fGS,C.h_c,C.fpg,C.h_n,C.erw,C.erx,C.ery,C.ere,C.erq,C.err,C.ert,C.ciw,C.ciu,C.civ,C.fMv,C.fMx,C.fMw,C.foQ,C.foR,C.h_q,C.esi,C.esj,C.esa,C.esb,C.ese,C.esf,C.h_G,C.f18,C.f0y,C.f0i,C.f0v,C.f_A,C.f_B,C.f_C,C.f_G,C.f_H,C.f0Y,C.f14,C.f16,C.f0H,C.f0J,C.f0N,C.f0O,C.f0P,C.f0T,C.f0K,C.f0L,C.f_S,C.f_T,C.f_U,C.f_V,C.f_W,C.f_X,C.f_Y,C.f_Z,C.f0_,C.f_d,C.f_e,C.f_f,C.f_g,C.f_i,C.f_j,C.f_M,C.f_N,C.f_O,C.f_P,C.f_Q,C.f_n,C.f_o,C.f_p,C.f_q,C.f07,C.f0q,C.fJU,C.fJT,C.ck1,C.fwN,C.fRI,C.fRB,C.fRE,C.fPz,C.fPA,C.fPB,C.fK0,C.fK_,C.fJZ,C.fJX,C.foK,C.foL,C.foM,C.h_S,C.f7x,C.f7y,C.f7r,C.f7l,C.f7R,C.f7S,C.f7U,C.f7V,C.f7Q,C.h_R,C.f7c,C.fw2,C.enY,C.fRK,C.fRL,C.fRN,C.fRG,C.fRH,C.h_4,C.drd,C.drj,C.enX,C.fl5,C.fl7,C.fl6,C.fl4,C.fL4,C.fL6,C.fna,C.fRc,C.fRd,C.fRe,C.fRp,C.fRu,C.fRv,C.fRw,C.fRx,C.fRy,C.fRz,C.fRA,C.fRf,C.fRg,C.fRh,C.fRi,C.fRj,C.fRk,C.fRl,C.fRm,C.fRn,C.fRo,C.fRq,C.fRr,C.fRs,C.fRt,C.fIV,C.fvl,C.fvk,C.fRT,C.e1x,C.e1v,C.f6m,C.ces,C.ceu,C.fYu,C.dgx,C.dgz,C.fYt,C.fYr,C.h_Q,C.fOw,C.dg7,C.fGV,C.fGW,C.ck_,C.ck0,C.cjZ,C.cjP,C.cjQ,C.cjM,C.cjN,C.cjO,C.ckg,C.ckb,C.ck6,C.ck7,C.ck9,C.ckc,C.cke,C.fP8,C.cjU,C.cjX,C.cjY,C.ck3,C.ck4,C.fS_,C.fR6,C.cjT,C.cjR,C.fP2,C.fy8,C.cjK,C.f3M,C.fB8,C.eGu,C.eCU,C.eCV,C.eEu,C.eEi,C.eEj,C.eCh,C.eGf,C.eGg,C.eGh,C.eBG,C.eDY,C.eE_,C.eDA,C.eDx,C.eCQ,C.eCR,C.eDH,C.eBI,C.eDT,C.eDU,C.eDS,C.eDW,C.eDV,C.eEd,C.eEe,C.eEg,C.eE9,C.eC0,C.eBY,C.eEn,C.eBQ,C.eGe,C.eAo,C.eBT,C.eBS,C.eB6,C.eBb,C.eB9,C.eB7,C.eGm,C.eGn,C.eGo,C.eGl,C.eFT,C.eFS,C.eFM,C.eFO,C.eFE,C.eGc,C.eGa,C.eAw,C.eAs,C.eCO,C.eBf,C.eAH,C.eAG,C.eB2,C.eB3,C.eCf,C.eBh,C.eBl,C.eE6,C.eFF,C.eFG,C.eFH,C.eFI,C.eBK,C.eBL,C.eBM,C.eDg,C.eCb,C.eC3,C.eCa,C.eDq,C.eDr,C.eFd,C.eFf,C.eFz,C.eFB,C.eFg,C.eFh,C.eBd,C.eCT,C.eCS,C.eG2,C.eBB,C.eBt,C.eBu,C.eBx,C.eBy,C.eDv,C.eCz,C.eCA,C.eCB,C.eCC,C.eCD,C.eCE,C.eCF,C.eCG,C.eCH,C.eCI,C.eCJ,C.eEr,C.d8M,C.d8N,C.eH9,C.fRQ,C.fRZ,C.fRP,C.fRV,C.fnE,C.h_U,C.h_V,C.h_W,C.eGC,C.eGL,C.eAh,C.eAc,C.eAd,C.fM6,C.fM5,C.fM7,C.fMc,C.fM8,C.fM9,C.fhx,C.fhy,C.eow,C.co7])
u(B.iI,[C.cN0,C.fg_,C.fg4,C.fg5,C.fg0,C.fg1,C.fg2,C.ffT,C.ffU,C.ffW,C.ffX,C.fg9,C.fg8,C.ffZ,C.ffY,C.fg6,C.fg7,C.fgc,C.fgd,C.fgb,C.cOm,C.cOq,C.cOo,C.cOe,C.cOf,C.cOh,C.cOa,C.cOb,C.cOi,C.cO9,C.cO8,C.cO7,C.cNB,C.cNA,C.cND,C.cNL,C.cNE,C.cNC,C.cNG,C.cNH,C.cNI,C.cNF,C.cNJ,C.cNN,C.cNO,C.cNP,C.cNQ,C.fGD,C.fGE,C.fGB,C.fGC,C.ejN,C.ejL,C.ejM,C.ejO,C.ejP,C.e6g,C.fGH,C.fGI,C.fGL,C.fGM,C.fGP,C.fGQ,C.eox,C.fOD,C.fOC,C.erv,C.eru,C.er8,C.er4,C.erf,C.erg,C.erh,C.era,C.erb,C.erc,C.erd,C.er9,C.er6,C.er7,C.ern,C.ero,C.erm,C.erp,C.erl,C.erk,C.erj,C.ers,C.eri,C.er5,C.esh,C.es5,C.es6,C.esc,C.es7,C.es9,C.es8,C.esg,C.f00,C.f0o,C.f_K,C.f_L,C.f_I,C.f_J,C.f0u,C.f0t,C.f0s,C.f0x,C.f0w,C.f_z,C.f_D,C.f_y,C.f_x,C.f_u,C.f_w,C.f_v,C.f15,C.f0Z,C.f0X,C.f1_,C.f0W,C.f10,C.f0V,C.f11,C.f12,C.f13,C.f0U,C.f0G,C.f0B,C.f0M,C.f0F,C.f0Q,C.f0E,C.f0R,C.f0D,C.f0S,C.f0C,C.f0l,C.f0k,C.f0m,C.f0j,C.f0n,C.f0d,C.f0c,C.f0e,C.f0b,C.f0a,C.f09,C.f_h,C.f_c,C.f_r,C.f_m,C.f_s,C.f_l,C.f_t,C.f_k,C.f0g,C.f04,C.f03,C.f05,C.f02,C.f06,C.f01,C.f0p,C.f0A,C.f0z,C.f_R,C.fRD,C.fRF,C.fRJ,C.fJY,C.fMo,C.fMm,C.fMn,C.f7z,C.f7A,C.f7w,C.f7q,C.f7p,C.f7s,C.f7t,C.f7f,C.f7g,C.f7i,C.f7j,C.f7k,C.f7h,C.f7m,C.f7N,C.f7O,C.f7M,C.f7P,C.f7L,C.f7K,C.f7J,C.f7T,C.f7I,C.f7H,C.f7G,C.f7W,C.f7F,C.f7X,C.f7E,C.f7D,C.f7n,C.f7o,C.f7C,C.f7B,C.f78,C.f79,C.f7a,C.f7b,C.f77,C.f7d,C.f7e,C.drc,C.dre,C.drh,C.dri,C.drg,C.drf,C.fL5,C.fIW,C.cet,C.cev,C.dgq,C.dgv,C.dgw,C.dgu,C.dgt,C.dgy,C.dgs,C.dgr,C.dgA,C.fYq,C.dne,C.dnf,C.dng,C.fGT,C.fGU,C.ckh,C.eAi,C.eAj,C.eAk,C.eAl,C.fy6,C.fy7,C.e_g,C.e_f,C.ddl,C.ddk,C.eGw,C.eGv,C.eCW,C.eFC,C.eGs,C.eEs,C.eGi,C.eGj,C.eGt,C.eDB,C.eBE,C.eBF,C.eDZ,C.eDz,C.eDw,C.eDy,C.eDC,C.eDD,C.eDE,C.eDF,C.eDG,C.eDI,C.eBJ,C.eDL,C.eDM,C.eDN,C.eDO,C.eDP,C.eDQ,C.eDK,C.eDX,C.eEa,C.eE8,C.eEh,C.eDJ,C.eBZ,C.eC_,C.eC1,C.eEk,C.eEo,C.eAD,C.eBX,C.eBV,C.eEw,C.eBR,C.eEv,C.eBH,C.eCi,C.eGd,C.eFD,C.eAE,C.eAB,C.eAr,C.eAn,C.eAp,C.eBU,C.eB5,C.eBa,C.eB8,C.eB4,C.eE7,C.eGp,C.eFP,C.eFK,C.eFL,C.eFN,C.eCM,C.eCL,C.eGb,C.eAu,C.eAv,C.eAx,C.eAy,C.eAC,C.eAt,C.eEt,C.eGk,C.eCP,C.eBe,C.eAq,C.eCg,C.eAz,C.eAI,C.eAJ,C.eAK,C.eAV,C.eAY,C.eAZ,C.eB_,C.eB0,C.eB1,C.eAL,C.eAM,C.eAN,C.eAO,C.eAP,C.eAQ,C.eAR,C.eAS,C.eAT,C.eAU,C.eAW,C.eAX,C.eCe,C.eCd,C.eCc,C.eAA,C.eBi,C.eBg,C.eBj,C.eBk,C.eBW,C.eE2,C.eE3,C.eE0,C.eE1,C.eFJ,C.eBO,C.eBN,C.eDf,C.eDe,C.eDh,C.eDd,C.eDi,C.eDc,C.eDj,C.eDb,C.eDk,C.eDa,C.eDl,C.eD9,C.eDm,C.eD8,C.eDn,C.eD7,C.eD0,C.eD1,C.eD2,C.eD_,C.eD3,C.eCZ,C.eD4,C.eCY,C.eD5,C.eCX,C.eD6,C.eC8,C.eC9,C.eC2,C.eC4,C.eC5,C.eC6,C.eC7,C.eGq,C.eGr,C.eDp,C.eDo,C.eDs,C.eEP,C.eEQ,C.eER,C.eF1,C.eFc,C.eFn,C.eFu,C.eFv,C.eFw,C.eFx,C.eFy,C.eES,C.eET,C.eEU,C.eEV,C.eEW,C.eEX,C.eEY,C.eEZ,C.eF_,C.eF0,C.eF2,C.eF3,C.eF4,C.eF5,C.eF6,C.eF7,C.eF8,C.eF9,C.eFa,C.eEF,C.eFb,C.eEN,C.eEM,C.eFe,C.eEL,C.eEB,C.eFA,C.eEK,C.eEA,C.eEy,C.eEJ,C.eEz,C.eEx,C.eFi,C.eEI,C.eFj,C.eFk,C.eFl,C.eFm,C.eEH,C.eFo,C.eFp,C.eFq,C.eEG,C.eFr,C.eEE,C.eFs,C.eED,C.eFt,C.eEC,C.eBc,C.eFW,C.eFV,C.eFX,C.eFU,C.eCl,C.eCk,C.eCm,C.eCj,C.eG6,C.eG1,C.eG5,C.eFY,C.eFZ,C.eG_,C.eG0,C.eG3,C.eG4,C.eG9,C.eBD,C.eBq,C.eBr,C.eBs,C.eBp,C.eBw,C.eBv,C.eBo,C.eBn,C.eBz,C.eBm,C.eBA,C.eDu,C.eDt,C.eCy,C.eCx,C.eCw,C.eCv,C.eCu,C.eCt,C.eCs,C.eCr,C.eCo,C.eCq,C.eCp,C.eCn,C.eCK,C.eEp,C.eEq,C.d8O,C.d9c,C.d9d,C.d8I,C.d8H,C.d8L,C.d8J,C.d8K,C.eH6,C.eGX,C.eH5,C.eGY,C.eGZ,C.eGT,C.eGU,C.eGV,C.eGW,C.eH8,C.fRW,C.fRX,C.fRY,C.eGz,C.eGA,C.eGB,C.eGE,C.eGF,C.eGI,C.eGJ,C.eGH,C.eGK,C.eGG,C.eGy,C.eGx,C.eGM,C.eGN,C.eGP,C.eGQ,C.eAg,C.eAf,C.eAb,C.eAe,C.eGS,C.eGR,C.fMb,C.fMa,C.eou,C.eov])
t(C.aT0,B.M)
u(B.lB,[C.a4y,C.ayu,C.ax8,C.xY,C.y0,C.l6,C.tG,C.BV,C.rR,C.wo,C.asV,C.Jj,C.asm,C.v7,C.mQ,C.hJ,C.a9o])
u(C.bSb,[C.cF7,C.bSc])
u(C.co1,[C.co5,C.au1])
t(C.co4,C.co_)
t(C.co3,C.cnZ)
t(C.co6,C.co3)
t(C.co2,C.co0)
t(C.cnX,C.cnY)
t(C.bc_,B.p8)
t(C.cyr,B.awB)
t(C.a9a,B.xL)
u(B.af,[C.a1F,C.Zl,C.Zj,C.art,C.Ws,C.Wt,C.a0E,C.a1a,C.a19,C.aFo,C.a_w,C.O4,C.a_3,C.a_o,C.apo,C.aKh,C.VK,C.aAX,C.a8t,C.Oy,C.aAi,C.Kl,C.a0g,C.WE,C.WF,C.aFM,C.asr,C.a8u])
u(B.ah,[C.aKC,C.az2,C.ayZ,C.aFd,C.aFu,C.aFx,C.aGW,C.aIT,C.aIS,C.aNw,C.aCU,C.aN0,C.aBh,C.bi0,C.aMM,C.aOO,C.aN_,C.bfN,C.aNu,C.aNH,C.aLH,C.bey,C.aNI,C.aFP,C.bmv,C.aFN,C.aFQ,C.bme])
u(B.ax,[C.az0,C.ae1,C.adq,C.blf,C.ae4,C.afK,C.b2y,C.buM,C.b2T,C.bnM,C.btk,C.b0N,C.b2W,C.ae7,C.aeo,C.b2U,C.Ji,C.b0Q,C.beO,C.Qf,C.Kr,C.bjA,C.bjz,C.bxc])
u(B.HN,[C.bef,C.bwa,C.aL_,C.bh0,C.btI])
u(B.mh,[C.bee,C.baK,C.btF,C.bdM,C.bhp,C.bjH,C.bgt,C.bhl,C.bh2,C.bq6,C.bbS,C.bbw,C.bx8,C.bu7,C.btg,C.bgm,C.b2R,C.bsa,C.btd])
t(C.bmb,C.aNw)
t(C.blx,C.aN0)
t(C.blh,C.aMM)
t(C.bwD,C.aOO)
t(C.blt,C.aN_)
t(C.bm9,C.aNu)
t(C.bzy,C.aNH)
t(C.aFO,C.bzy)
t(C.bez,C.aLH)
t(C.aFR,C.aNI)
t(C.bwZ,B.j1)
t(C.a9n,B.kD)
t(C.co9,C.b4C)
t(C.aj1,C.a3C)
u(B.Yj,[C.aSR,C.aUn])
t(C.ay3,C.aSR)
w(C.aNw,B.cg)
w(C.aN0,B.cg)
w(C.aMM,B.cg)
w(C.aN_,B.cg)
w(C.aNu,B.cg)
w(C.aOO,B.cg)
w(C.aLH,B.eQ)
w(C.aNH,B.cg)
v(C.bzy,B.eE)
w(C.aNI,B.cg)})()
B.j2(b.typeUniverse,JSON.parse('{"aTA":{"hR":["aTA"]},"ob":{"aTA":[],"hR":["aTA"]},"aT0":{"M":["Sx"],"M.E":"Sx"},"bc_":{"p8":[]},"a9a":{"xL":[],"oy":[]},"a1F":{"af":[],"v":[]},"aKC":{"ah":["a1F"]},"Zl":{"af":[],"v":[]},"Zj":{"af":[],"v":[]},"az2":{"ah":["Zl"]},"ayZ":{"ah":["Zj"]},"az0":{"ax":[],"v":[]},"art":{"af":[],"v":[]},"aFd":{"ah":["art"]},"ae1":{"ax":[],"v":[]},"adq":{"ax":[],"v":[]},"ae4":{"ax":[],"v":[]},"afK":{"ax":[],"v":[]},"blf":{"ax":[],"v":[]},"Ws":{"af":[],"v":[]},"aFu":{"ah":["Ws"]},"b2y":{"ax":[],"v":[]},"bef":{"aC":[]},"bee":{"aC":[]},"bwa":{"aC":[]},"baK":{"aC":[]},"btF":{"aC":[]},"Wt":{"af":[],"v":[]},"aFx":{"ah":["Wt"]},"bdM":{"aC":[]},"a0E":{"af":[],"v":[]},"aGW":{"ah":["a0E"]},"bhp":{"aC":[]},"a1a":{"af":[],"v":[]},"a19":{"af":[],"v":[]},"aFo":{"af":[],"v":[]},"a_w":{"af":[],"v":[]},"aIT":{"ah":["a1a"]},"aIS":{"ah":["a19"]},"bmb":{"ah":["aFo"]},"bjH":{"aC":[]},"aCU":{"ah":["a_w"]},"buM":{"ax":[],"v":[]},"b2T":{"ax":[],"v":[]},"bnM":{"ax":[],"v":[]},"O4":{"af":[],"v":[]},"a_3":{"af":[],"v":[]},"blx":{"ah":["O4"]},"btk":{"ax":[],"v":[]},"bgt":{"aC":[]},"b0N":{"ax":[],"v":[]},"aBh":{"ah":["a_3"]},"a_o":{"af":[],"v":[]},"bi0":{"ah":["a_o"]},"bhl":{"aC":[]},"bh2":{"aC":[]},"bq6":{"aC":[]},"bbS":{"aC":[]},"bbw":{"aC":[]},"bx8":{"aC":[]},"bu7":{"aC":[]},"btg":{"aC":[]},"bgm":{"aC":[]},"apo":{"af":[],"v":[]},"b2W":{"ax":[],"v":[]},"blh":{"ah":["apo"]},"ae7":{"ax":[],"v":[]},"aeo":{"ax":[],"v":[]},"aKh":{"af":[],"v":[]},"VK":{"af":[],"v":[]},"Ji":{"ax":[],"v":[]},"aAX":{"af":[],"v":[]},"a8t":{"af":[],"v":[]},"b2U":{"ax":[],"v":[]},"b2R":{"aC":[]},"bwD":{"ah":["aKh"]},"aL_":{"aC":[]},"blt":{"ah":["VK"]},"bfN":{"ah":["aAX"]},"bm9":{"ah":["a8t"]},"b0Q":{"ax":[],"v":[]},"bh0":{"aC":[]},"bsa":{"aC":[]},"btd":{"aC":[]},"aAi":{"af":[],"v":[]},"Kl":{"af":[],"v":[]},"a0g":{"af":[],"v":[]},"Kr":{"ax":[],"v":[]},"Oy":{"af":[],"v":[]},"aFO":{"ah":["Oy"],"eE":[]},"bez":{"ah":["aAi"]},"beO":{"ax":[],"v":[]},"bey":{"ah":["Kl"]},"Qf":{"ax":[],"v":[]},"aFR":{"ah":["a0g"]},"btI":{"aC":[]},"bjA":{"ax":[],"v":[]},"bjz":{"ax":[],"v":[]},"WE":{"af":[],"v":[]},"WF":{"af":[],"v":[]},"aFM":{"af":[],"v":[]},"asr":{"af":[],"v":[]},"aFP":{"ah":["WE"]},"bmv":{"ah":["WF"]},"aFN":{"ah":["aFM"]},"bwZ":{"j1":[]},"aFQ":{"ah":["asr"]},"bxc":{"ax":[],"v":[]},"a8u":{"af":[],"v":[]},"bme":{"ah":["a8u"]},"a9n":{"kD":["fx<eX>"],"kq":["fx<eX>"]},"aj1":{"a3C":[]},"aSR":{"je":[],"fj":[]},"ay3":{"je":[],"fj":[]},"aUn":{"je":[],"fj":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.as
return{bu:w("Mc"),U:w("vW<qi>"),bz:w("t"),M:w("dx<m>"),bo:w("jO"),g7:w("MO"),gc:w("aB<iF?>"),bq:w("aB<~>"),cc:w("N_"),fS:w("Er"),an:w("It"),bm:w("O<Sx>"),X:w("O<SA>"),f3:w("O<aTA>"),aK:w("O<no>"),V:w("O<ac>"),O:w("O<t>"),fA:w("O<lP>"),d5:w("O<aB<bA<G,+icon3d,picture(m?,m?)>>>"),bH:w("O<aB<dL>>"),fG:w("O<aB<~>>"),aF:w("O<nv>"),cd:w("O<ai<jB>>"),ez:w("O<a8<m,aD>>"),d:w("O<a8<m,@>>"),B:w("O<mM>"),h:w("O<jB>"),gE:w("O<zX>"),k:w("O<oE>"),g:w("O<lX>"),D:w("O<i7>"),u:w("O<eP>"),m:w("O<v7>"),i:w("O<hJ>"),aC:w("O<a8L>"),o:w("O<zY>"),e3:w("O<aD>"),dN:w("O<u>"),v:w("O<fW>"),cR:w("O<j_>"),J:w("O<js>"),gx:w("O<pu<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(I,I)>"),ek:w("O<+(G,m)>"),n:w("O<+(G,G)>"),r:w("O<cW>"),s:w("O<m>"),aS:w("O<j1>"),p:w("O<v>"),eR:w("O<fj>"),fT:w("O<bas>"),bx:w("O<aGp>"),gz:w("O<afU>"),x:w("O<I>"),t:w("O<G>"),dS:w("O<aC?>"),bA:w("O<u?>"),Z:w("O<G?>"),cA:w("O<cj>"),A:w("cx<ah<af>>"),gL:w("ai<oE>"),R:w("ai<i7>"),j:w("ai<@>"),bW:w("ai<G>"),e:w("bA<G,+icon3d,picture(m?,m?)>"),P:w("a8<m,@>"),f:w("a8<@,@>"),gI:w("a8<G,+icon3d,picture(m?,m?)>"),bR:w("N<hJ,v>"),eC:w("N<o1,m>"),cT:w("N<jW,D>"),dv:w("N<m,m>"),f0:w("N<m,v>"),gN:w("N<G,pY>"),gh:w("N<mQ,jD<mQ>>"),w:w("iC"),ei:w("iF"),g2:w("rH"),fB:w("F2"),b6:w("zX"),gX:w("a8D"),dt:w("lu"),ea:w("oE"),bt:w("lX"),I:w("i7"),F:w("eP"),fO:w("mQ"),ff:w("v7"),fP:w("hJ"),Q:w("wo"),dO:w("asn"),a:w("cv"),C:w("aD"),dw:w("au2"),di:w("a9o"),Y:w("eX"),fz:w("+(m,m)"),dL:w("+(G,G)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("Fy"),dB:w("dy<u>"),bJ:w("dy<m>"),_:w("e1<m>"),N:w("m"),fw:w("qi"),bO:w("au"),K:w("bq<u>"),b:w("bq<I>"),E:w("dL"),W:w("bQ<m>"),ac:w("bQ<G>"),ex:w("jZ<lX>"),cI:w("jZ<m>"),cl:w("jZ<I>"),b4:w("Y<lr>"),a8:w("Y<mm>"),fR:w("Y<+(m,m)>"),co:w("ef<u>"),l:w("v"),b2:w("c0<~>"),ev:w("ql<dZ>"),dT:w("bj<~>"),q:w("mv"),y:w("P"),gR:w("I"),z:w("@"),S:w("G"),at:w("bc?"),gw:w("ai<a8<m,@>>?"),aT:w("ai<i7>?"),c:w("ai<@>?"),aP:w("iF?"),af:w("i7?"),go:w("b2Y?"),a6:w("a8M?"),cK:w("aD?"),bZ:w("+bytes,dataUrl,fileName(dL,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dL?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b0V=new B.bN(A.az,null,null,H.arD,null)
D.b13=new B.da(0,-0.15)
D.b15=new B.da(0.62,0)
D.b18=new B.da(-0.35,-0.45)
D.b1i=new B.da(0.9,-0.85)
D.b3f=new B.bh(H.U6,H.U6,A.fE,A.fE)
D.b3v=new B.ay(A.b7,1,A.r,-1)
D.bp9=new B.t(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b3H=new B.ay(D.bp9,1,A.r,-1)
D.b3T=new B.ay(A.aD,1.5,A.r,-1)
D.b3Y=new B.ay(A.b7,1.6,A.r,-1)
D.b4d=new B.ay(A.aD,1.4,A.r,-1)
D.b5z=new B.o(null,null,null,null,null,K.HU,A.a6)
D.c68=new B.a9(A.a5,A.a8,A.x,G.a5s,null,null)
D.b5H=new B.o(null,null,null,null,null,D.c68,A.a6)
D.adV=new B.o(A.au,null,null,A.tE,null,null,A.n)
D.bi5=new B.t(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bp6=new B.t(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d4G=w([D.bi5,D.bp6],x.O)
D.ewC=new B.c_(A.A,0.5,A.x,null,0,D.d4G,null,null)
D.b6_=new B.o(null,null,null,null,null,D.ewC,A.a6)
D.YS=new B.t(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b4t=new B.bG(Q.vJ,A.a0,A.a0,A.a0)
D.b61=new B.o(D.YS,null,D.b4t,null,null,null,A.n)
D.c7U=new B.a9(A.a5,A.a8,A.x,A.RI,null,null)
D.b68=new B.o(null,null,null,null,null,D.c7U,A.a6)
D.afz=new B.t(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b6b=new B.o(D.afz,null,null,A.rd,null,null,A.n)
D.b6f=new B.o(A.jy,null,null,null,null,null,A.a6)
D.b6i=new B.o(A1.agP,null,H.adw,A.mw,null,null,A.n)
D.F8=new B.o(A.dF,null,null,null,null,null,A.a6)
D.b6p=new B.o(null,null,null,null,null,E.wI,A.a6)
D.d9Z=w([E.ahS,A.c2],x.O)
D.c7v=new B.a9(A.b0,A.b6,A.x,D.d9Z,null,null)
D.b6t=new B.o(null,null,null,A.mw,null,D.c7v,A.n)
D.dlm=w([A.bl,A.dF,A.kh],x.O)
D.a3s=new B.a9(A.az,A.aE,A.x,D.dlm,null,null)
D.b6G=new B.o(null,null,null,null,null,D.a3s,A.n)
D.b6H=new B.o(D.afz,null,null,A.l0,null,null,A.n)
D.czn=w([A.d7,A.bl],x.O)
D.c7m=new B.a9(A.az,A.aE,A.x,D.czn,null,null)
D.b6L=new B.o(null,null,null,null,null,D.c7m,A.n)
D.b6V=new B.o(null,null,null,null,null,G.uQ,A.a6)
D.b7f=new B.o(A.ahU,null,null,null,null,null,A.a6)
D.bj5=new B.t(0.5647058823529412,0,0,0,A.q)
D.ae4=new B.ac(0,A.G,D.bj5,A.Jo,28)
D.b9q=new B.aXN()
D.b9Z=new C.cyr()
D.baa=new C.bc_()
D.aeA=new B.cf(A.A,null,null,A.a3h,null)
D.bcS=new B.fl(null,null,null,null,null,E.nl,null,null,null,null)
D.baK=new B.cf(A.A,null,null,D.bcS,null)
D.bRt=new B.ae(A.e5,28,A.c,null,null,null)
D.bbf=new B.cf(A.A,null,null,D.bRt,null)
D.bcP=new B.fl(2,null,null,null,null,A.c3,null,null,null,null)
D.bbD=new B.cf(A.A,null,null,D.bcP,null)
D.bRN=new B.ae(K.Pg,40,A.bB,null,null,null)
D.bbE=new B.cf(A.A,null,null,D.bRN,null)
D.bdJ=new B.t(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bdW=new B.t(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.beo=new B.t(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bez=new B.t(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bfd=new B.t(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bfu=new B.t(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bfw=new B.t(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.M8=new B.t(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bfZ=new B.t(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bg6=new B.t(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.afU=new B.t(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bh_=new B.t(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bhT=new B.t(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ag9=new B.t(1,1,1,0.9725490196078431,A.q)
D.bie=new B.t(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bit=new B.t(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.biw=new B.t(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.biM=new B.t(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bjb=new B.t(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bkQ=new B.t(1,1,0.996078431372549,0.9725490196078431,A.q)
D.YB=new B.t(0.8509803921568627,0,0,0,A.q)
D.bl1=new B.t(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bl8=new B.t(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.ah7=new B.t(0.6,0,0,0,A.q)
D.ah9=new B.t(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bmO=new B.t(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.tZ=new B.t(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bnh=new B.t(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bnK=new B.t(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bo8=new B.t(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ai6=new B.t(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.Z1=new B.t(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Bz=new B.t(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.MJ=new B.t(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jv=new B.t(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.aiD=new B.t(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.Zb=new B.t(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.brY=new B.t(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bst=new B.t(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bsJ=new B.t(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.ZA=new B.t(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.btW=new B.t(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.yb=new B.t(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.q)
D.buv=new B.t(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.buQ=new B.hQ(A.aX,!0,null,null)
D.fwT=new B.F(!0,A.aC,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXQ=new B.y("Bio link",null,D.fwT,null,null,null,null,null,null,null,null,null)
D.bbx=new B.cf(A.A,null,null,D.fXQ,null)
D.bv4=new B.hQ(A.Bc,!0,D.bbx,null)
D.Nc=new C.a4y(0,"none")
D.ajW=new C.a4y(1,"deflate")
D.ajX=new C.a4y(2,"bzip2")
D.bw3=new B.kw(0.165,0.84,0.44,1)
D.dai=w([A.cd,A.dH,A.aD],x.O)
D.c6D=new B.a9(A.az,A.aE,A.x,D.dai,null,null)
D.b5E=new B.o(null,null,null,null,null,D.c6D,A.n)
D.c_S=new B.ae(A.f0,null,A.ac,null,null,null)
D.bcc=new B.cf(A.A,null,null,D.c_S,null)
D.bwA=new B.l2(D.b5E,A.bh,D.bcc,null)
D.bsc=new B.t(0.058823529411764705,1,1,1,A.q)
D.ddJ=w([A.bz,A.rm,A.rm,D.bsc],x.O)
D.cQP=w([0,0.32,0.7,1],x.x)
D.c7c=new B.a9(A.az,A.aE,A.x,D.ddJ,D.cQP,null)
D.b5t=new B.o(null,null,null,null,null,D.c7c,A.n)
D.bwG=new B.l2(D.b5t,A.bh,null,null)
D.bxO=new B.mD(1,1,null,null,null,A.bo,null)
D.bxR=new B.mD(1,null,null,null,null,D.Zb,null)
D.byk=new B.bc(125e4)
D.byq=new B.bc(17e4)
D.byA=new B.bc(35964e8)
D.byH=new B.bc(55e4)
D.byL=new B.bc(68e4)
D.bzb=new B.il(0,0,0,5)
D.bzr=new B.Q(0,16,16,0)
D.bzC=new B.Q(0,36,0,36)
D.bzK=new B.Q(0,54,0,0)
D.bzR=new B.Q(10,0,10,3)
D.bA2=new B.il(10,16,10,10)
D.bAe=new B.Q(10,6,4,6)
D.bAh=new B.Q(10,8,10,6)
D.akW=new B.Q(11,8,11,11)
D.bAm=new B.Q(12,0,12,24)
D.bAz=new B.Q(12,12,12,4)
D.bAC=new B.Q(12,12,8,12)
D.bAS=new B.Q(12,8,8,12)
D.bBg=new B.Q(14,14,14,0)
D.bBl=new B.Q(14,14,14,90)
D.bBH=new B.Q(16,10,16,16)
D.bBI=new B.Q(16,10,16,20)
D.alH=new B.Q(16,6,16,28)
D.bCg=new B.Q(18,0,18,10)
D.bCi=new B.Q(18,0,18,30)
D.bCk=new B.Q(18,10,18,12)
D.bCl=new B.Q(18,10,18,14)
D.bCF=new B.Q(18,16,14,18)
D.bCK=new B.Q(18,18,18,12)
D.bCQ=new B.Q(18,26,18,12)
D.bCV=new B.Q(18,34,18,34)
D.bCW=new B.Q(18,4,18,14)
D.bD0=new B.Q(18,8,18,24)
D.bDj=new B.Q(20,16,14,4)
D.bDo=new B.Q(20,18,12,4)
D.bDt=new B.Q(20,20,12,20)
D.bDw=new B.Q(20,22,20,20)
D.bDB=new B.Q(20,6,20,6)
D.bDL=new B.Q(22,18,22,18)
D.bDT=new B.Q(22,24,22,0)
D.bDW=new B.Q(22,24,22,4)
D.bE3=new B.Q(22,60,22,22)
D.bE9=new B.Q(24,24,24,22)
D.bEj=new B.Q(26,10,60,10)
D.bEr=new B.Q(28,44,28,44)
D.bEI=new B.Q(32,44,32,44)
D.bEQ=new B.Q(38,30,38,20)
D.bEV=new B.Q(4,0,0,6)
D.bF6=new B.il(4,4,4,4)
D.bFz=new B.il(6,5,6,5)
D.bFE=new B.Q(6,6,8,6)
D.bFP=new B.Q(8,14,8,14)
D.bFQ=new B.Q(8,22,8,22)
D.bFZ=new B.Q(8,6,12,6)
D.bG7=new B.Q(8,8,8,4)
D.amD=new B.Q(9,9,9,6)
D.bGj=new B.il(2.5,2.5,2.5,2.5)
D.bGk=new B.Q(10.5,0,10.5,0)
D.bGl=new B.Q(7,1.5,7,1.5)
D.d1v=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bGB=new B.xy(null,null,D.d1v,A.Bb)
D.cZj=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bGC=new B.xy(null,null,D.cZj,A.Bb)
D.aVs=new B.F(!0,A.aC,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fX7=new B.y("WORD DESIGN",null,D.aVs,null,null,null,null,null,null,null,null,null)
D.bHa=new B.by(1,A.bb,D.fX7,null)
D.fWM=new B.y("Slides database",null,Ac.tp,null,null,null,null,null,null,null,null,null)
D.fTZ=new B.y("Admin only \xb7 keep as many as you like",null,V.aUW,null,null,null,null,null,null,null,null,null)
D.duc=w([D.fWM,A.bF,D.fTZ],x.p)
D.bvv=new B.fk(A.ah,A.e,A.i,A.E,null,A.p,null,0,D.duc,null)
D.bHd=new B.by(1,A.bb,D.bvv,null)
D.fOc=new B.y("NGMY logo",null,A.fy,null,null,null,null,null,null,null,null,null)
D.bHg=new B.by(1,A.bb,D.fOc,null)
D.fuz=new B.F(!0,A.ac,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fZb=new B.y("TALK TO THE EDITOR",null,D.fuz,null,null,null,null,null,null,null,null,null)
D.bHz=new B.by(1,A.bb,D.fZb,null)
D.fHT=new B.y("Tell the AI what to change",null,Ac.tp,null,null,null,null,null,null,null,null,null)
D.bHT=new B.by(1,A.bb,D.fHT,null)
D.bJf=new B.Eh(!0,"video/mp4")
D.fsL=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFO=new B.y("Move presentations between devices",null,D.fsL,null,null,null,!1,null,null,1,null,null)
D.bJj=new B.qH(A.e3,A.a5,A.f,D.fFO,null)
D.fH2=new B.y("Edit in Slides",null,A.j8,null,null,null,null,null,null,null,null,null)
D.bJk=new B.qH(A.e3,A.A,A.f,D.fH2,null)
D.bJz=new B.ds(1,A.cn,D.bJk,null)
D.a1C=new B.a0(60988,"MaterialIcons",!1)
D.bN0=new B.a0(61352,"MaterialIcons",!1)
D.aof=new B.a0(61531,"MaterialIcons",!1)
D.bOc=new B.a0(63062,"MaterialIcons",!1)
D.bOj=new B.a0(63109,"MaterialIcons",!1)
D.bOw=new B.a0(63206,"MaterialIcons",!1)
D.aoX=new B.a0(63238,"MaterialIcons",!1)
D.bON=new B.a0(63338,"MaterialIcons",!1)
D.a2d=new B.a0(63365,"MaterialIcons",!1)
D.a2e=new B.a0(63367,"MaterialIcons",!1)
D.a2f=new B.a0(63368,"MaterialIcons",!1)
D.ap8=new B.a0(63384,"MaterialIcons",!1)
D.bP4=new B.a0(63525,"MaterialIcons",!1)
D.bP8=new B.a0(63568,"MaterialIcons",!1)
D.bPt=new B.a0(983072,"MaterialIcons",!1)
D.bPR=new B.a0(983271,"MaterialIcons",!0)
D.aqe=new B.a0(983965,"MaterialIcons",!1)
D.aqf=new B.a0(983966,"MaterialIcons",!1)
D.bQN=new B.a0(984592,"MaterialIcons",!1)
D.bR5=new B.ae(A.ux,16,A.aC,null,null,null)
D.aqq=new B.ae(A.pk,18,A.c,null,null,null)
D.bRu=new B.ae(A.Cg,18,N.lC,null,null,null)
D.bS9=new B.ae(A.jE,11,null,null,null,null)
D.bSk=new B.ae(A.a1T,null,A.ep,null,null,null)
D.bSS=new B.ae(A.rN,18,A.aC,null,null,null)
D.bSY=new B.ae(A4.Cy,14,null,null,null,null)
D.bSZ=new B.ae(A.eb,28,A.c0,null,null,null)
D.bTa=new B.ae(A.qC,20,A.c,null,null,null)
D.bTh=new B.ae(A.z4,null,null,null,null,null)
D.bTn=new B.ae(A.jD,18,A.hj,null,null,null)
D.bTs=new B.ae(A.kp,null,null,null,null,null)
D.bOe=new B.a0(63065,"MaterialIcons",!1)
D.bU4=new B.ae(D.bOe,15,A.c,null,null,null)
D.bOk=new B.a0(63113,"MaterialIcons",!1)
D.bUa=new B.ae(D.bOk,null,A.ac,null,null,null)
D.bUy=new B.ae(A.uv,22,A.bM,null,null,null)
D.bUT=new B.ae(A.rK,18,null,null,null,null)
D.bUZ=new B.ae(A.CD,12,A.c,null,null,null)
D.bQp=new B.a0(983687,"MaterialIcons",!1)
D.bVa=new B.ae(D.bQp,null,A.bl,null,null,null)
D.bVj=new B.ae(A.hB,null,A.bl,null,null,null)
D.bVC=new B.ae(A.po,22,A.c,null,null,null)
D.bVG=new B.ae(A.cx,13,A.c,null,null,null)
D.bVM=new B.ae(A.eb,26,A.aw,null,null,null)
D.bVQ=new B.ae(A.rQ,26,A.c,null,null,null)
D.Pu=new B.ae(A.jE,8,A.c,null,null,null)
D.bWa=new B.ae(A.pk,40,A.c,null,null,null)
D.bWb=new B.ae(A.bLY,null,null,null,null,null)
D.bWf=new B.ae(A.uI,20,null,null,null,null)
D.bQo=new B.a0(983683,"MaterialIcons",!1)
D.bWp=new B.ae(D.bQo,null,A.b1,null,null,null)
D.bWq=new B.ae(A.jE,16,A.bl,null,null,null)
D.bWL=new B.ae(A.pl,null,null,null,null,null)
D.ar0=new B.ae(A.wr,22,A.c,null,null,null)
D.bWR=new B.ae(A.e5,17,A.c,null,null,null)
D.ar1=new B.ae(A.jE,9,A.c,null,null,null)
D.bWW=new B.ae(A.wm,null,null,null,null,null)
D.bMe=new B.a0(57744,"MaterialIcons",!1)
D.bX2=new B.ae(D.bMe,null,null,null,null,null)
D.bX5=new B.ae(A.wm,16,null,null,null,null)
D.bQX=new B.a0(985181,"MaterialIcons",!1)
D.HM=new B.ae(D.bQX,null,null,null,null,null)
D.bXh=new B.ae(A.kp,16,A.bM,null,null,null)
D.bQh=new B.a0(983615,"MaterialIcons",!1)
D.bXj=new B.ae(D.bQh,12,A.c,null,null,null)
D.ar7=new B.ae(A.yS,16,null,null,null,null)
D.bXr=new B.ae(A.e5,21,A.c,null,null,null)
D.bXw=new B.ae(A.hB,17,A.c,null,null,null)
D.bXx=new B.ae(A.uv,null,null,null,null,null)
D.bXO=new B.ae(A.a2U,20,A.aC,null,null,null)
D.bY2=new B.ae(A.on,22,E.nl,null,null,null)
D.bYa=new B.ae(A.qB,13,A.ac,null,null,null)
D.bYc=new B.ae(A.aq1,20,A.aC,null,null,null)
D.bLW=new B.a0(57495,"MaterialIcons",!1)
D.bYh=new B.ae(D.bLW,null,null,null,null,null)
D.bYl=new B.ae(A.oo,18,A.c,null,null,null)
D.bYI=new B.ae(A.uM,28,A.c,null,null,null)
D.bYT=new B.ae(D.aoX,null,A.aD,null,null,null)
D.bYU=new B.ae(A.qC,22,A.c,null,null,null)
D.arg=new B.ae(A.a1y,16,null,null,null,null)
D.bZG=new B.ae(A.uv,32,A.c,null,null,null)
D.c_o=new B.ae(A.jl,22,A.c,null,null,null)
D.c_r=new B.ae(A.rQ,22,A.ac,null,null,null)
D.arw=new B.ae(A.ux,null,A.bU,null,null,null)
D.c0m=new B.ae(A.qu,18,null,null,null,null)
D.c1_=new B.ae(A.e5,18,A.bs,null,null,null)
D.c16=new B.ae(A.apX,null,null,null,null,null)
D.c1x=new B.e8(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aVg,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.fks=new B.F(!0,A.bL,null,null,null,null,null,A.cA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c1P=new B.e8(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fks,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.c2f=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eF,!0,null,null,null,null)
D.d5K=w([A.dF,A.aD],x.O)
D.c4m=new B.a9(A.a5,A.a8,A.x,D.d5K,null,null)
D.c4x=new B.a9(A.b0,A.b6,A.VP,A.ayB,null,null)
D.bed=new B.t(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bjd=new B.t(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bmP=new B.t(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bgR=new B.t(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cQR=w([D.bed,D.bjd,D.bmP,D.bgR],x.O)
D.c4Q=new B.a9(A.az,A.aE,A.x,D.cQR,A.Ii,null)
D.dul=w([A.cG,A.bE,A.b7],x.O)
D.c4S=new B.a9(A.b0,A.b6,A.VP,D.dul,null,null)
D.dvS=w([A.bl,A.cf],x.O)
D.c4X=new B.a9(A.a5,A.a8,A.x,D.dvS,null,null)
D.dqx=w([A.hQ,A.d0,A.ay],x.O)
D.c4Z=new B.a9(A.az,A.aE,A.x,D.dqx,null,null)
D.dc3=w([A.cQ,A.fi],x.O)
D.c52=new B.a9(A.a5,A.a8,A.x,D.dc3,null,null)
D.due=w([N.lC,A.d0],x.O)
D.ash=new B.a9(A.a5,A.a8,A.x,D.due,null,null)
D.bjW=new B.t(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dub=w([D.bjW,D.yb,A.c3],x.O)
D.c57=new B.a9(A.a5,A.a8,A.x,D.dub,null,null)
D.d7v=w([A.ba,A.cT,A.ej],x.O)
D.c58=new B.a9(A.az,A.aE,A.x,D.d7v,null,null)
D.PM=new B.a9(A.a5,A.a8,A.x,A.Iw,null,null)
D.bt6=new B.t(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cJN=w([D.bt6,A.c3,A.jx],x.O)
D.asm=new B.a9(A.az,A.aE,A.x,D.cJN,null,null)
D.dhI=w([A.tT,A.aA,D.Bz],x.O)
D.c6a=new B.a9(A.a5,A.a8,A.x,D.dhI,null,null)
D.buw=new B.t(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bhS=new B.t(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bnX=new B.t(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.d6A=w([D.buw,D.bhS,D.bnX],x.O)
D.asn=new B.a9(A.a5,A.a8,A.x,D.d6A,null,null)
D.bjY=new B.t(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.c89=w([AA.ajy,D.bjY],x.O)
D.c6j=new B.a9(A.b0,A.b6,A.x,D.c89,null,null)
D.d4u=w([A.nj,A.bB],x.O)
D.c6n=new B.a9(A.b0,A.b6,A.x,D.d4u,null,null)
D.dn3=w([A.aD,A.dH],x.O)
D.c6u=new B.a9(A.a5,A.a8,A.x,D.dn3,null,null)
D.aij=new B.t(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aAn=w([D.aij,D.jv,D.M8],x.O)
D.c6X=new B.a9(A.az,A.aE,A.x,D.aAn,null,null)
D.cJF=w([A.dv,A.dG],x.O)
D.c77=new B.a9(A.b0,A.b6,A.x,D.cJF,null,null)
D.djX=w([A.xT,A.Br],x.O)
D.c7W=new B.a9(A.a5,A.a8,A.x,D.djX,null,null)
D.fPN=new B.y("Which Bio link?",null,A.cz,null,null,null,null,null,null,null,null,null)
D.c86=new B.q2(null,D.fPN,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zr=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a7q=new C.l6(2,"elegantNavy")
D.hAq=w([A.Z_,D.jv,A.c3],x.O)
D.k4=new C.xY(0,"classic")
D.a7d=new C.jB("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a7q,4294967035,4279378237,4290283019,D.k4)
D.aJY=new C.l6(3,"elegantGold")
D.bdI=new B.t(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.beT=new B.t(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.agF=new B.t(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hzT=w([D.bdI,D.beT,D.agF],x.O)
D.a7b=new C.jB("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aJY,4294966515,4281016592,4289102906,D.k4)
D.dRb=new C.l6(22,"goldRibbon")
D.hzP=w([A.Z_,D.jv,A.ip],x.O)
D.a74=new C.jB("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dRb,4294967035,4279378237,4291404327,D.k4)
D.dRc=new C.l6(23,"goldBaroque")
D.ahn=new B.t(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hzV=w([D.ahn,A.aA,A.jx],x.O)
D.a75=new C.jB("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dRc,4294964964,4283053072,4292128567,D.k4)
D.dRe=new C.l6(4,"elegantEmerald")
D.bge=new B.t(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bhg=new B.t(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hA0=w([D.bge,D.bhg,A.ip],x.O)
D.a76=new C.jB("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dRe,4294376440,4279122734,4291404327,D.k4)
D.dRf=new C.l6(5,"elegantBurgundy")
D.blz=new B.t(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hA7=w([D.blz,A.afM,A.ip],x.O)
D.a79=new C.jB("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dRf,4294965238,4283043359,4291404327,D.k4)
D.dR8=new C.l6(19,"goldFiligree")
D.MQ=new B.t(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hzW=w([D.MQ,A.aA,A.jx],x.O)
D.a77=new C.jB("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dR8,4294966259,4279378237,4292128567,D.k4)
D.dR9=new C.l6(20,"goldLaurel")
D.bsX=new B.t(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hA8=w([A.M1,A.ip,D.bsX],x.O)
D.a78=new C.jB("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dR9,4294966776,4282000405,4291404327,D.k4)
D.dRa=new C.l6(21,"goldCrest")
D.afD=new B.t(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bt3=new B.t(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hzY=w([D.afD,A.aA,D.bt3],x.O)
D.a7c=new C.jB("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dRa,4294965484,4283053072,4292128567,D.k4)
D.dRd=new C.l6(24,"goldStar")
D.bun=new B.t(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hA1=w([D.bun,A.aA,D.jv],x.O)
D.a7a=new C.jB("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dRd,4294966518,4279378237,4292128567,D.k4)
D.HW=w([D.a7d,D.a7b,D.a74,D.a75,D.a76,D.a79,D.a77,D.a78,D.a7c,D.a7a],x.h)
D.qP=new C.mQ(0,"blank")
D.Tr=new C.mQ(1,"title")
D.mX=new C.mQ(2,"titleContent")
D.eaO=new C.mQ(3,"twoColumn")
D.DL=new C.mQ(4,"section")
D.eaP=new C.mQ(5,"comparison")
D.J8=new C.mQ(6,"flashcard")
D.J9=new C.mQ(7,"quiz")
D.Ja=new C.mQ(8,"worksheet")
D.asI=w([D.qP,D.Tr,D.mX,D.eaO,D.DL,D.eaP,D.J8,D.J9,D.Ja],B.as("O<mQ>"))
D.aBu=w([Aq.Yk,A.dG],x.O)
D.kR=w([A.c3,A.bM,A.i2,A.i_,D.Bz],x.O)
D.dN5=new C.ja("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aBu,D.kR)
D.btj=new B.t(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.blx=new B.t(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d4H=w([D.btj,D.blx],x.O)
D.dMX=new C.ja("confetti","Golden Confetti","Together we rise",D.d4H,D.kR)
D.d1B=w([A.nW,A.XX],x.O)
D.dMY=new C.ja("crown","Crown of Glory","Built for our community",D.d1B,D.kR)
D.bhF=new B.t(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bla=new B.t(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.d8W=w([D.bhF,D.bla],x.O)
D.uS=w([A.bL,A.aP,A.c,A.aN,A.al],x.O)
D.dMS=new C.ja("aurora","Aurora Gala","A brighter future, together",D.d8W,D.uS)
D.bmR=new B.t(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dk4=w([G.afc,D.bmR],x.O)
D.dN8=new C.ja("champagne","Champagne Toast","Cheers to every member",D.dk4,D.kR)
D.dN9=new C.ja("diamonds","Diamond Rain","Every member is a jewel",A_.aCd,D.uS)
D.beH=new B.t(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bkA=new B.t(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dpL=w([D.beH,D.bkA],x.O)
D.dMN=new C.ja("starburst","Golden Starburst","Thank you!",D.dpL,D.kR)
D.c8g=w([A.fe,A.y5],x.O)
D.afm=new B.t(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.Rk=w([A.p5,A.io,A.w3,A.nX,D.afm],x.O)
D.dNg=new C.ja("balloons","Luxury Balloons","Let's celebrate",D.c8g,D.Rk)
D.d0O=w([A.Y9,A.w],x.O)
D.dN4=new C.ja("galaxy","Galaxy Spiral","The sky is not the limit",D.d0O,D.uS)
D.br7=new B.t(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dgq=w([A.jR,D.br7],x.O)
D.dN_=new C.ja("redcarpet","Red Carpet","Tonight we shine",D.dgq,D.kR)
D.boF=new B.t(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bmB=new B.t(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dl1=w([D.boF,D.bmB],x.O)
D.dMP=new C.ja("coins","Gold Coin Rain","Every contribution counts",D.dl1,D.kR)
D.dsz=w([A.dv,A.hZ],x.O)
D.dMV=new C.ja("lanterns","Sky Lanterns","Lighting the way together",D.dsz,D.kR)
D.biS=new B.t(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.cZF=w([A.y7,D.biS],x.O)
D.dMR=new C.ja("hearts","Floating Hearts","Made with love",D.cZF,D.Rk)
D.bfm=new B.t(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bgl=new B.t(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.du9=w([D.bfm,D.bgl],x.O)
D.dNf=new C.ja("petals","Rose Petals","Thank you, from our hearts",D.du9,D.Rk)
D.bsa=new B.t(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dq6=w([A.l8,D.bsa],x.O)
D.dMM=new C.ja("butterflies","Golden Butterflies","New beginnings",D.dq6,D.kR)
D.bnT=new B.t(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d_J=w([D.bnT,A.w],x.O)
D.dN7=new C.ja("neon","Neon Night","Let's go!",D.d_J,D.uS)
D.bkd=new B.t(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dnf=w([A.Ms,D.bkd],x.O)
D.dNa=new C.ja("disco","Disco Ball","Party time",D.dnf,D.uS)
D.bou=new B.t(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dmK=w([A.hQ,D.bou],x.O)
D.dMQ=new C.ja("sunrise","Golden Sunrise","A new day for our community",D.dmK,D.kR)
D.dml=w([A.q2,A.dG],x.O)
D.dNb=new C.ja("pearls","Ocean Pearls","Deep roots, bright future",D.dml,D.uS)
D.bhM=new B.t(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dmz=w([D.bhM,A.dG],x.O)
D.dNe=new C.ja("snow","Winter Gala","Warm wishes to all",D.dmz,D.uS)
D.bdR=new B.t(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bf6=new B.t(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dt0=w([D.bdR,D.bf6],x.O)
D.dN3=new C.ja("laurel","Laurel Victory","We did it together",D.dt0,D.kR)
D.bdH=new B.t(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bl6=new B.t(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.cYE=w([D.bdH,D.bl6],x.O)
D.dNd=new C.ja("ribbons","Silk Ribbons","Elegance in every step",D.cYE,D.kR)
D.bmh=new B.t(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cJC=w([G.By,D.bmh],x.O)
D.dN0=new C.ja("kente","Kente Pride","Proud of our roots",D.cJC,D.kR)
D.bpj=new B.t(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bsy=new B.t(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.daG=w([D.bpj,D.bsy],x.O)
D.dMW=new C.ja("trophy","Trophy Shine","Winners together",D.daG,D.kR)
D.dmG=w([Ar.Mf,A.w],x.O)
D.dMO=new C.ja("shooting","Shooting Stars","Make a wish",D.dmG,D.uS)
D.be_=new B.t(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.aji=new B.t(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dtj=w([D.be_,D.aji],x.O)
D.dN1=new C.ja("bokeh","Golden Bokeh","Shine bright",D.dtj,D.kR)
D.beq=new B.t(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dhh=w([D.beq,A.w],x.O)
D.dMU=new C.ja("orbits","Golden Orbits","Always moving forward",D.dhh,D.kR)
D.bsb=new B.t(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.ddB=w([A.agA,D.bsb],x.O)
D.dMZ=new C.ja("flowers","Blooming Garden","Growing together",D.ddB,D.Rk)
D.beb=new B.t(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.beY=new B.t(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.ds0=w([D.beb,D.beY],x.O)
D.dMT=new C.ja("music","Music Party","Celebrate with us",D.ds0,D.uS)
D.bg_=new B.t(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bt_=new B.t(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.cZT=w([D.bg_,D.bt_],x.O)
D.dNc=new C.ja("mandala","Royal Mandala","Harmony and unity",D.cZT,D.kR)
D.ddH=w([G.By,D.aji],x.O)
D.dN6=new C.ja("sparklers","Golden Sparklers","Light up the night",D.ddH,D.kR)
D.dN2=new C.ja("city","City Lights","The whole city celebrates",D.aBu,D.kR)
D.I5=w([D.dN5,D.dMX,D.dMY,D.dMS,D.dN8,D.dN9,D.dMN,D.dNg,D.dN4,D.dN_,D.dMP,D.dMV,D.dMR,D.dNf,D.dMM,D.dN7,D.dNa,D.dMQ,D.dNb,D.dNe,D.dN3,D.dNd,D.dN0,D.dMW,D.dMO,D.dN1,D.dMU,D.dMZ,D.dMT,D.dNc,D.dN6,D.dN2],B.as("O<ja>"))
D.eCA=new B.z("","No ring")
D.eT0=new B.z("platinum","Platinum")
D.eP3=new B.z("glow","Glow")
D.eGj=new B.z("double","Double line")
D.eFc=new B.z("framed","Gallery frame")
D.eC6=new B.z("rosegold","Rose gold")
D.ePT=new B.z("jewels","Jeweled")
D.eMu=new B.z("aurora","Aurora")
D.CZ=w([D.eCA,A.Uc,D.eT0,D.eP3,M.aQI,D.eGj,A.aQG,D.eFc,D.eC6,D.ePT,D.eMu],x.L)
D.csR=w([D.a77,D.a78,D.a7c,D.a74,D.a75,D.a7a],x.h)
D.bXF=new B.ae(G.anQ,16,null,null,null,null)
D.b8L=new B.vW(A.bj,D.bXF,null,x.U)
D.bMn=new B.a0(58027,"MaterialIcons",!1)
D.bRb=new B.ae(D.bMn,16,null,null,null,null)
D.b8J=new B.vW(A.K,D.bRb,null,x.U)
D.bMo=new B.a0(58030,"MaterialIcons",!1)
D.bVh=new B.ae(D.bMo,16,null,null,null,null)
D.b8M=new B.vW(A.dV,D.bVh,null,x.U)
D.cz8=w([D.b8L,D.b8J,D.b8M],B.as("O<vW<qi>>"))
D.cGT=w([A.BF,A.hx],x.O)
D.cGU=w([A.ba,A.bf,A.ej],x.O)
D.R9=w([A.bM,A.i_,A.i2,A.aA,A.nX],x.O)
D.cJI=w([A.c3,D.jv,D.M8],x.O)
D.cKf=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ezU=new B.z(4278913286,4280030216)
D.eAb=new B.z(4279373061,4278518787)
D.eAi=new B.z(4279898630,4278847235)
D.da2=w([D.ezU,D.eAb,D.eAi],x.n)
D.d5t=w(["\u265b","\u269c","\u2726"],x.s)
D.dR6=new C.y_("Royal Onyx & Gold",D.da2,4292128567,4294370209,4294965479,3874020544,D.d5t)
D.ezH=new B.z(4278326799,4278598442)
D.ezJ=new B.z(4278395929,4278258953)
D.ezQ=new B.z(4278599728,4278327826)
D.dsq=w([D.ezH,D.ezJ,D.ezQ],x.n)
D.d_B=w(["\u269c","\u2756","\u2727"],x.s)
D.dR3=new C.y_("Imperial Emerald",D.dsq,4293050997,4294699968,4294180856,3872254170,D.d_B)
D.ezK=new B.z(4278455076,4278918747)
D.ezP=new B.z(4278587439,4278322714)
D.eA2=new B.z(4279051376,4278455076)
D.dqt=w([D.ezK,D.ezP,D.eA2],x.n)
D.di0=w(["\u2654","\u2726","\u2748"],x.s)
D.dQY=new C.y_("Sapphire Crown",D.dqt,4291417834,4294967295,4294310143,3871986666,D.di0)
D.eAg=new B.z(4279894534,4283041554)
D.eAs=new B.z(4281008906,4279042307)
D.eAA=new B.z(4284221976,4279894534)
D.dwx=w([D.eAg,D.eAs,D.eAA],x.n)
D.d0X=w(["\u265b","\u2766","\u2726"],x.s)
D.dR_=new C.y_("Ruby Throne",D.dwx,4293378685,4294963145,4294964466,3874213833,D.d0X)
D.eAa=new B.z(4279371039,4281995100)
D.eAk=new B.z(4280092723,4278714896)
D.eAx=new B.z(4283045242,4279371039)
D.dsN=w([D.eAa,D.eAk,D.eAx],x.n)
D.dqQ=w(["\u2655","\u2756","\u2727"],x.s)
D.dR4=new C.y_("Amethyst Palace",D.dsN,4293314984,4294963421,4294702591,3873229802,D.dqQ)
D.ezM=new B.z(4278519045,4280032287)
D.eA3=new B.z(4279111184,4278321666)
D.eAp=new B.z(4280492839,4278716426)
D.dpc=w([D.ezM,D.eA3,D.eAp],x.n)
D.dgc=w(["\u2726","\u25c6","\u2742"],x.s)
D.dR1=new C.y_("Obsidian & Platinum",D.dpc,4293256418,4294967295,4294638330,3872378836,D.dgc)
D.eAh=new B.z(4279896588,4282194463)
D.eAq=new B.z(4280553487,4279043334)
D.eAy=new B.z(4283048488,4279896588)
D.dfF=w([D.eAh,D.eAq,D.eAy],x.n)
D.duD=w(["\u2766","\u273f","\u2727"],x.s)
D.dQZ=new C.y_("Rose Gold Velvet",D.dfF,4293440672,4294960345,4294964979,3874214602,D.duD)
D.ezN=new B.z(4278520340,4279180595)
D.ezS=new B.z(4278718495,4278322443)
D.eAe=new B.z(4279510591,4278520340)
D.cQx=w([D.ezN,D.ezS,D.eAe],x.n)
D.dgV=w(["\u269c","\u2736","\u2756"],x.s)
D.dR2=new C.y_("Midnight Brass",D.cQx,4291405148,4293975208,4294439914,3872837564,D.dgV)
D.eAN=new B.z(4294703086,4293780428)
D.eAJ=new B.z(4294307549,4293187253)
D.eAO=new B.z(4294966517,4293977807)
D.d3i=w([D.eAN,D.eAJ,D.eAO],x.n)
D.dhl=w(["\u269c","\u265b","\u2726"],x.s)
D.dR5=new C.y_("Ivory Marble & Gold",D.d3i,4289760572,4286209048,4280951062,3863625518,D.dhl)
D.ezY=new B.z(4278978566,4280555024)
D.eAd=new B.z(4279504137,4278518530)
D.eAu=new B.z(4281211923,4278978566)
D.d0N=w([D.ezY,D.eAd,D.eAu],x.n)
D.drB=w(["\u2742","\u2726","\u265c"],x.s)
D.dR0=new C.y_("Onyx & Copper",D.d0N,4291856987,4294365880,4294964718,3873885630,D.drB)
D.cKn=w([D.dR6,D.dR3,D.dQY,D.dR_,D.dR4,D.dR1,D.dQZ,D.dR2,D.dR5,D.dR0],B.as("O<y_>"))
D.cMK=w([A.aA,D.Bz,A.i_],x.O)
D.eIz=new B.z("Original",null)
D.eIJ=new B.z("Wide 16:9",1.7777777777777777)
D.eL6=new B.z("Landscape 3:2",1.5)
D.eI_=new B.z("Photo 4:3",1.3333333333333333)
D.eWU=new B.z("Portrait 3:4",0.75)
D.ayK=w([D.eIz,D.eIJ,D.eL6,D.eI_,M.aQw,D.eWU],B.as("O<+(m,I?)>"))
D.ayL=w([A.i_,A.c_,A.b8,A.bq],x.O)
D.eLi=new B.z("","Original")
D.eNd=new B.z("circle","Circle")
D.eTP=new B.z("rounded","Rounded")
D.eUP=new B.z("triangle","Triangle")
D.ePk=new B.z("hexagon","Hexagon")
D.eNE=new B.z("diamond","Diamond")
D.eMt=new B.z("arch","Arch")
D.D5=w([D.eLi,D.eNd,D.eTP,D.eUP,D.ePk,D.eNE,D.eMt],x.L)
D.dMb=new C.lr("classic_blue","Classic Blue","Normal",A.bl,A.c,A.kJ,A.d7,A.aK)
D.dMr=new C.lr("campus_green","Campus Green","Normal",A.b1,A.nh,A.tW,A.h4,A.e9)
D.dMi=new C.lr("warm_sand","Warm Sand","Normal",A.dZ,A.i2,A.bM,A.iq,A.o3)
D.dMp=new C.lr("slate_minimal","Slate Minimal","Normal",A.bt,A.aP,A.aN,A.O,A.aK)
D.dMa=new C.lr("coral_fresh","Coral Fresh","Normal",A.cd,A.i0,A.pX,A.kj,A.tO)
D.dMq=new C.lr("lavender_calm","Lavender Calm","Normal",A.b7,A.q_,A.y1,A.oa,A.ju)
D.dMc=new C.lr("ocean_breeze","Ocean Breeze","Normal",A.fi,A.rw,A.tL,A.tQ,A.o4)
D.ais=new B.t(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dMn=new C.lr("berry_pop","Berry Pop","Normal",A.f8,D.ais,A.kF,G.Zx,A.BG)
D.dMd=new C.lr("midnight_pro","Midnight Pro","Professional",A.aD,A.O,A.dv,A.kF,A.cq)
D.dMm=new C.lr("executive_navy","Executive Navy","Professional",A.d3,A.ahD,A.d7,A.l6,A.bL)
D.dMk=new C.lr("boardroom_charcoal","Boardroom Charcoal","Professional",A.al,A.bo,A.O,A.aP,A.cq)
D.dMe=new C.lr("corporate_steel","Corporate Steel","Professional",A.o6,A.O,A.mF,A.fl,A.bL)
D.dMh=new C.lr("gold_luxe","Gold Luxe","Luxury",A.m0,A.dP,A.p4,A.m1,A.bM)
D.boz=new B.t(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dMl=new C.lr("rose_gold_elite","Rose Gold Elite","Luxury",A.hx,D.boz,A.Zi,A.io,A.nX)
D.dMo=new C.lr("platinum_night","Platinum Night","Luxury",A.cq,A.dG,A.bo,A.aP,A.aN)
D.dMs=new C.lr("emerald_prestige","Emerald Prestige","Luxury",A.aW,A.q5,A.f9,A.qd,A.jP)
D.dM9=new C.lr("royal_purple","Royal Purple","Luxury",A.ng,A.Yq,A.ju,A.kF,A.M0)
D.dMj=new C.lr("neon_pitch","Neon Pitch","Bold",A.b8,A.dG,A.O,A.b_,A.aN)
D.dMg=new C.lr("crimson_impact","Crimson Impact","Bold",A.bB,A.jR,A.ek,A.rx,A.eO)
D.dMf=new C.lr("sunset_gallery","Sunset Gallery","Bold",A.fs,A.tO,A.kj,A.pX,A.mD)
D.Ie=w([D.dMb,D.dMr,D.dMi,D.dMp,D.dMa,D.dMq,D.dMc,D.dMn,D.dMd,D.dMm,D.dMk,D.dMe,D.dMh,D.dMl,D.dMo,D.dMs,D.dM9,D.dMj,D.dMg,D.dMf],B.as("O<lr>"))
D.cYn=w([A.c3,D.jv],x.O)
D.dfX=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eMe=new B.z("Faces & people",D.dfX)
D.cMO=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eyw=new B.z("Ideas & work",D.cMO)
D.d5Z=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.ePp=new B.z("Nature",D.d5Z)
D.dg5=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eIx=new B.z("Places & things",D.dg5)
D.d9A=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eMy=new B.z("Symbols",D.d9A)
D.cYt=w([D.eMe,D.eyw,D.ePp,D.eIx,D.eMy],B.as("O<+(m,ai<m>)>"))
D.beg=new B.t(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.cYP=w([A.c3,D.agF,D.beg],x.O)
D.b85=new B.ac(0,A.G,A.LY,A.aKO,40)
D.b7M=new B.ac(0,A.G,A.o1,A.en,8)
D.cZ1=w([D.b85,D.b7M],x.V)
D.cZz=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.az8=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a4G=w([A.i_,A.ej,A.bB,A.au,A.cd],x.O)
D.d_v=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.agT=new B.t(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d_G=w([A.Z8,D.agT,A.Z8],x.O)
D.d_L=w([A.ip,D.jv,D.M8],x.O)
D.eIj=new B.z(A.bj,D.a2e)
D.eJM=new B.z(A.K,D.a2d)
D.eDm=new B.z(A.dV,D.a2f)
D.d0I=w([D.eIj,D.eJM,D.eDm],B.as("O<+(qi,a0)>"))
D.cV=new C.Jj(0,"text")
D.lO=new C.Jj(1,"image")
D.fc=new C.Jj(2,"shape")
D.Tq=new C.Jj(3,"pdf")
D.lm=new C.Jj(4,"signature")
D.a7x=new C.Jj(5,"bio")
D.d1H=w([D.cV,D.lO,D.fc,D.Tq,D.lm,D.a7x],B.as("O<Jj>"))
D.d1I=w([A.bp,A.cD],B.as("O<Id>"))
D.d2m=w(["School","Documents","Sign & present"],x.s)
D.b8a=new B.ac(0,A.G,A.aj5,A.vc,28)
D.d2L=w([D.b8a],x.V)
D.d33=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Rt=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.azA=w([A.i_,A.Ge,A.aN,A.c,A.p5,A.aA],x.O)
D.eWi=new B.z(0.1,0.08)
D.ePn=new B.z(0.3,0.05)
D.eCP=new B.z(0.55,0.1)
D.eHf=new B.z(0.8,0.06)
D.eKx=new B.z(0.92,0.16)
D.eK0=new B.z(0.2,0.2)
D.eHK=new B.z(0.7,0.22)
D.eO0=new B.z(0.05,0.4)
D.eKZ=new B.z(0.95,0.45)
D.eDC=new B.z(0.12,0.7)
D.eFY=new B.z(0.88,0.75)
D.eG5=new B.z(0.4,0.9)
D.eB4=new B.z(0.65,0.93)
D.eGT=new B.z(0.25,0.97)
D.eIg=new B.z(0.85,0.9)
D.eEw=new B.z(0.5,0.04)
D.d4C=w([D.eWi,D.ePn,D.eCP,D.eHf,D.eKx,D.eK0,D.eHK,D.eO0,D.eKZ,D.eDC,D.eFY,D.eG5,D.eB4,D.eGT,D.eIg,D.eEw],x.G)
D.d4L=w([A.c,A.hx,A.aJ,A.aW],x.O)
D.ecq=new C.jW("office_blue","Office Blue",A.bl,A.d7,A.aK,A.c,A.kJ)
D.ecB=new C.jW("campus_green","Campus Green",A.b1,A.h4,A.e9,A.nh,A.tW)
D.ecr=new C.jW("sunset","Sunset",A.fs,A.kj,A.o3,A.i0,A.pX)
D.ecs=new C.jW("midnight","Midnight",A.aD,A.kF,A.cq,A.O,A.dv)
D.ecD=new C.jW("classic","Classic",A.d0,A.dP,A.m2,A.i2,A.fU)
D.ecA=new C.jW("rose_gold","Rose Gold",A.hx,A.y8,A.y7,A.w3,A.BF)
D.ecl=new C.jW("ocean_teal","Ocean Teal",A.fi,A.tQ,A.o4,A.rw,A.tL)
D.eck=new C.jW("slate_pro","Slate Pro",A.bt,A.O,A.aK,A.aP,A.aN)
D.ecj=new C.jW("neon_night","Neon Night",A.b8,A.b_,A.aN,A.dG,A.O)
D.ecv=new C.jW("lavender","Lavender",A.b7,A.oa,A.ju,A.q_,A.y1)
D.ecx=new C.jW("coral","Coral",A.cd,A.kj,A.tO,A.i0,A.mD)
D.ecm=new C.jW("forest","Forest",A.hi,A.dY,A.cr,A.m3,A.ep)
D.ecn=new C.jW("berry","Berry",A.f8,G.Zx,A.BG,D.ais,A.kF)
D.ecu=new C.jW("sand","Sand",A.dZ,A.iq,A.o3,A.i2,A.bM)
D.ecz=new C.jW("ice","Ice",A.o6,A.FL,A.aK,A.nd,A.fl)
D.ecp=new C.jW("charcoal","Charcoal",A.al,A.aP,A.cq,A.bo,A.O)
D.eci=new C.jW("mint","Mint",A.aW,A.fM,A.h4,A.m3,A.qd)
D.ecy=new C.jW("crimson","Crimson",A.bB,A.nj,A.jR,A.Gc,A.rx)
D.bhf=new B.t(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.ect=new C.jW("gold","Gold",A.m0,A.xT,A.p4,D.bhf,A.m1)
D.ecw=new C.jW("aqua","Aqua",A.bS,A.FY,A.p1,A.q0,A.p6)
D.eco=new C.jW("plum","Plum",A.ng,A.y5,A.BG,A.FM,A.rs)
D.ecC=new C.jW("steel","Steel",A.d3,A.d7,A.bo,A.kJ,A.l6)
D.a4V=w([D.ecq,D.ecB,D.ecr,D.ecs,D.ecD,D.ecA,D.ecl,D.eck,D.ecj,D.ecv,D.ecx,D.ecm,D.ecn,D.ecu,D.ecz,D.ecp,D.eci,D.ecy,D.ect,D.ecw,D.eco,D.ecC],B.as("O<jW>"))
D.d57=w([A.c3,A.jx],x.O)
D.Ts=new C.hJ(10,"rotate3d")
D.Jc=new C.hJ(8,"flip")
D.aKg=new C.hJ(19,"spiral")
D.qQ=new C.hJ(16,"bounce")
D.aKj=new C.hJ(9,"flipVertical")
D.d58=w([D.Ts,D.Jc,D.aKg,D.qQ,D.aKj],x.i)
D.ef=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.d5w=w([0.62,1],x.x)
D.d68=w([0,0.32,0.68,1],x.x)
D.mY=new C.hJ(6,"zoom")
D.v6=new C.hJ(4,"slideUp")
D.v5=new C.hJ(2,"slideLeft")
D.d6i=w([D.mY,D.Jc,D.v6,D.Ts,D.v5],x.i)
D.d6O=w([A.c_,A.hx,A.io,A.i_,A.c],x.O)
D.b80=new B.ac(0,A.G,D.ah7,A.vc,30)
D.d7A=w([D.b80],x.V)
D.enN=new B.u(0,-2.5)
D.enD=new B.u(-2.5,0)
D.elR=new B.u(2.5,0)
D.d7D=w([A.TG,A.a7Y,A.aLq,A.a7X,D.enN,O.aLm,D.enD,D.elR],x.dN)
D.Ik=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.d88=w([23,114,69,56,80,144],x.t)
D.d8C=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.d94=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.daL=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.daQ=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bi=new C.v7(0,"rectangle")
D.eT=new C.v7(1,"circle")
D.ln=new C.v7(6,"hexagon")
D.db4=w([D.bi,D.eT,D.ln],x.m)
D.oC=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aiC=new B.t(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dbD=w([D.aiC,A.dY],x.O)
D.eD5=new B.z("","Classic")
D.eBj=new B.z("caps","Bold caps")
D.eO3=new B.z("elegant","Elegant")
D.eU8=new B.z("shadow","Shadow")
D.eHD=new B.z("neon","Neon glow")
D.eRP=new B.z("marker","Highlighter")
D.eUm=new B.z("stamp","Stamp")
D.eGv=new B.z("threed","3D")
D.eOA=new B.z("fire","Fire")
D.ePz=new B.z("ice","Ice")
D.eNc=new B.z("chalk","Chalk")
D.eNh=new B.z("comic","Comic")
D.eVE=new B.z("softglow","Soft glow")
D.eQC=new B.z("lowercase","Lowercase")
D.eNM=new B.z("double","Echo")
D.eVN=new B.z("whisper","Whisper")
D.aAy=w([D.eD5,D.eBj,D.eO3,D.eU8,D.eHD,M.aQH,D.eRP,D.eUm,M.aQJ,D.eGv,M.aQB,D.eOA,D.ePz,D.eNc,D.eNh,A.Uc,Au.aQK,D.eVE,D.eQC,D.eNM,D.eVN],x.L)
D.dcY=w([3,5,7,10,12,15],x.t)
D.dev=w([A.c_,A.bM,A.c,A.eG,A.cG],x.O)
D.dDH=new C.tG(10,"cardWorld")
D.DD=new C.BV(3,"rounded")
D.dU6=new C.lu("world","NGMY World",D.dDH,D.DD,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dDI=new C.tG(11,"cardSplit")
D.dU2=new C.lu("business","Business Wire",D.dDI,D.DD,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dDJ=new C.tG(12,"cardBreaking")
D.dUf=new C.lu("breaking","Breaking Red",D.dDJ,D.DD,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dDK=new C.tG(13,"cardFeature")
D.dU8=new C.lu("feature","Tech Feature",D.dDK,D.DD,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aIN=new C.tG(6,"circle")
D.aIH=new C.BV(4,"circle")
D.dUc=new C.lu("parchment","Royal Circle",D.aIN,D.aIH,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dU1=new C.lu("ocean","Blue Ocean",D.aIN,D.aIH,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dDN=new C.tG(7,"rail")
D.aIG=new C.BV(1,"double")
D.dU3=new C.lu("forest","Green Leaf",D.dDN,D.aIG,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aIK=new C.tG(1,"sideBySide")
D.dUh=new C.lu("herald","NGMY Herald",D.aIK,D.DD,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aIJ=new C.tG(0,"classic")
D.a6K=new C.BV(9,"shadow")
D.dUg=new C.lu("daily","The Daily",D.aIJ,D.a6K,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dDL=new C.tG(2,"splash")
D.aII=new C.BV(6,"cutCorner")
D.dU0=new C.lu("tabloid","Big Tabloid",D.dDL,D.aII,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aIO=new C.tG(9,"minimal")
D.dUb=new C.lu("modern","Modern Digest",D.aIO,D.DD,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aIL=new C.tG(3,"magazine")
D.aIF=new C.BV(0,"plain")
D.dU7=new C.lu("midnight","Midnight Edition",D.aIL,D.aIF,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dDO=new C.tG(8,"banner")
D.dU9=new C.lu("metro","Metro Wire",D.dDO,D.aII,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dDG=new C.BV(8,"arch")
D.dUa=new C.lu("sunrise","Sunrise Post",D.aIL,D.dDG,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aIM=new C.tG(5,"scrapbook")
D.dDF=new C.BV(5,"tape")
D.dU5=new C.lu("neon","Neon Beat",D.aIM,D.dDF,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dDM=new C.tG(4,"wrap")
D.dUi=new C.lu("gold","Golden Press",D.dDM,D.a6K,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dUj=new C.lu("minimal","Paper White",D.aIO,D.a6K,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dU4=new C.lu("gazette","Fresh Gazette",D.aIJ,D.aIG,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dUe=new C.lu("times","Classic Times",D.aIK,D.aIF,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.SY=new C.BV(2,"polaroid")
D.dUd=new C.lu("scrapbook","Memory Scrapbook",D.aIM,D.SY,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a5a=w([D.dU6,D.dU2,D.dUf,D.dU8,D.dUc,D.dU1,D.dU3,D.dUh,D.dUg,D.dU0,D.dUb,D.dU7,D.dU9,D.dUa,D.dU5,D.dUi,D.dUj,D.dU4,D.dUe,D.dUd],B.as("O<lu>"))
D.deH=w([0.45,1],x.x)
D.Ip=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.df7=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hv_=new C.oQ("Original",0,1,1,0,0,0)
D.hv3=new C.oQ("Black & white",0,1.1,0,0,0,0)
D.huR=new C.oQ("Noir",-0.05,1.55,0,0,0,0)
D.huV=new C.oQ("Sepia",0,1,0.25,0.9,0,0)
D.huU=new C.oQ("Vivid",0,1.15,1.6,0,0,0)
D.huN=new C.oQ("Pop",0,1.3,1.9,0,0,0)
D.huP=new C.oQ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hv0=new C.oQ("Matte",0,0.9,0.85,0,0,0.55)
D.huW=new C.oQ("Cool",0,1.05,1,-0.8,0,0)
D.hv2=new C.oQ("Warm",0.03,1.05,1.1,0.8,0,0)
D.huO=new C.oQ("Golden hour",0.04,1,1.25,1,0,0)
D.huT=new C.oQ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hv1=new C.oQ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.huS=new C.oQ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.huY=new C.oQ("Retro",0,0.9,0.7,0.4,0,0.35)
D.huX=new C.oQ("Forest",0,1,1.2,-0.1,-0.45,0)
D.huZ=new C.oQ("Rose",0,1,1.1,0.3,0.4,0)
D.huQ=new C.oQ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.df8=w([D.hv_,D.hv3,D.huR,D.huV,D.huU,D.huN,D.huP,D.hv0,D.huW,D.hv2,D.huO,D.huT,D.hv1,D.huS,D.huY,D.huX,D.huZ,D.huQ],B.as("O<oQ>"))
D.bdC=new B.t(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dfa=w([D.aiC,A.dY,D.bdC],x.O)
D.eyp=new B.z(0.12,0.3)
D.ePK=new B.z(0.26,0.75)
D.eO_=new B.z(0.8,0.22)
D.eUy=new B.z(0.9,0.7)
D.eQB=new B.z(0.5,0.15)
D.eSJ=new B.z(0.65,0.85)
D.eF2=new B.z(0.08,0.85)
D.dfo=w([D.eyp,D.ePK,D.eO_,D.eUy,D.eQB,D.eSJ,D.eF2],x.G)
D.aAK=w([A.b8,A.c_,A.bq,A.ba],x.O)
D.dgg=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dgt=w([A.c,A.fl,A.du,A.vU],x.O)
D.bhv=new B.t(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dhx=w([D.bhv,D.agT],x.O)
D.dhz=w([A.tT,A.aA],x.O)
D.dhO=w([0,0.25,0.75,1],x.x)
D.dhQ=w([A.xY,A.p5],x.O)
D.aJR=new C.l6(10,"kenteSunset")
D.hzR=w([D.ahn,A.ke,A.aA],x.O)
D.dPq=new C.jB("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aJR,4294964964,4282000405,4279983648,D.k4)
D.aJS=new C.l6(11,"indigoMudcloth")
D.beN=new B.t(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hA4=w([D.beN,A.agQ,A.ip],x.O)
D.dPy=new C.jB("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aJS,4294439140,4279903102,4279903102,D.k4)
D.aJT=new C.l6(12,"adinkraRoyal")
D.btL=new B.t(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hA5=w([D.afD,D.btL,A.aA],x.O)
D.dPA=new C.jB("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aJT,4294965484,4285218591,4287322667,D.k4)
D.aJU=new C.l6(13,"nileLotus")
D.bpF=new B.t(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.blT=new B.t(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hAa=w([D.bpF,D.blT,A.ip],x.O)
D.dPz=new C.jB("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aJU,4294244340,4279196764,4279196764,D.k4)
D.aJV=new C.l6(14,"shweshweIvory")
D.bjK=new B.t(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bil=new B.t(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bfl=new B.t(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hzS=w([D.bjK,D.bil,D.bfl],x.O)
D.dPv=new C.jB("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aJV,4294505710,4279970378,4291058750,D.k4)
D.t6=new C.l6(15,"certIvoryNavy")
D.hzQ=w([D.MQ,D.jv,A.ip],x.O)
D.aJm=new C.xY(1,"ringsNdoa")
D.dPs=new C.jB("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.t6,4294966259,4279378237,4291404327,D.aJm)
D.a7f=new C.xY(2,"coupleCards")
D.dPn=new C.jB("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.t6,4294966259,4279378237,4291404327,D.a7f)
D.DG=new C.l6(18,"certIvoryNavyBar")
D.afC=new B.t(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hA3=w([D.afC,D.jv,A.ip],x.O)
D.aJn=new C.xY(3,"kuhoweshaForm")
D.dPl=new C.jB("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.DG,4294966519,4279378237,4291404327,D.aJn)
D.ah5=new B.t(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hAn=w([D.MQ,D.ah5,A.ip],x.O)
D.a7g=new C.xY(4,"mahariPande")
D.dPo=new C.jB("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.t6,4294966259,4279904068,4291404327,D.a7g)
D.aJW=new C.l6(16,"certIvoryGreen")
D.bj2=new B.t(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hzU=w([A.M1,D.bj2,A.ip],x.O)
D.aJo=new C.xY(5,"familiaMti")
D.dPu=new C.jB("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aJW,4294966776,4280241466,4291404327,D.aJo)
D.a7h=new C.xY(6,"ndoaSafi")
D.dPm=new C.jB("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.DG,4294966519,4279378237,4291404327,D.a7h)
D.bnS=new B.t(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hzX=w([D.MQ,A.ip,D.bnS],x.O)
D.a7i=new C.xY(7,"peteWide")
D.dPr=new C.jB("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.t6,4294966259,4282001936,4291404327,D.a7i)
D.dPB=new C.xY(8,"muhuriCrest")
D.dPk=new C.jB("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.t6,4294966259,4279378237,4291404327,D.dPB)
D.hA6=w([D.afC,D.ah5,A.ip],x.O)
D.dPC=new C.xY(9,"fomuWazi")
D.dPx=new C.jB("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.DG,4294966519,4279904068,4291404327,D.dPC)
D.aJX=new C.l6(17,"certIvoryRose")
D.bjP=new B.t(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hA9=w([D.bjP,D.ai6,A.ip],x.O)
D.a7e=new C.xY(10,"upendoOrnate")
D.dPt=new C.jB("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aJX,4294965493,4286200650,4291404327,D.a7e)
D.dih=w([D.dPq,D.dPy,D.dPA,D.dPz,D.dPv,D.dPs,D.dPn,D.dPl,D.dPo,D.dPu,D.dPm,D.dPr,D.dPk,D.dPx,D.dPt],x.h)
D.eg=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.Jd=new C.wo(0,"emojis")
D.DN=new C.wo(1,"pictures")
D.Je=new C.wo(2,"icons3d")
D.a7z=new C.wo(3,"animations")
D.Tu=new C.wo(4,"videoMotion")
D.DO=new C.wo(5,"luxe")
D.a5h=w([D.Jd,D.DN,D.Je,D.a7z,D.Tu,D.DO],B.as("O<wo>"))
D.eTm=new B.z(A.e5,"Looks")
D.eH8=new B.z(A.CP,"Light")
D.eH5=new B.z(A.md,"Colour")
D.eF3=new B.z(A.wp,"Effects")
D.aoS=new B.a0(63112,"MaterialIcons",!1)
D.eBz=new B.z(D.aoS,"Crop")
D.diO=w([D.eTm,D.eH8,D.eH5,D.eF3,D.eBz],x.f2)
D.djt=w([],x.D)
D.hAk=w([],x.L)
D.eFh=new B.z("Flashcard",D.J8)
D.eJb=new B.z("Quiz",D.J9)
D.eLd=new B.z("Worksheet",D.Ja)
D.eIb=new B.z("Notes",D.mX)
D.eJK=new B.z("Section",D.DL)
D.dka=w([D.eFh,D.eJb,D.eLd,D.eIb,D.eJK],B.as("O<+(m,mQ)>"))
D.dRg=new C.l6(6,"beadedPearl")
D.bmF=new B.t(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hAo=w([H.Zh,D.bmF,A.ip],x.O)
D.aJk=new C.jB("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dRg,4294966774,4286209070,4291404327,D.k4)
D.dRh=new C.l6(7,"artDeco")
D.br1=new B.t(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bu4=new B.t(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hAm=w([D.br1,D.bu4,A.c3],x.O)
D.aJl=new C.jB("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dRh,4294440434,4280228630,4290283019,D.k4)
D.dRi=new C.l6(8,"rosetteCorners")
D.btc=new B.t(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bhA=new B.t(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bmz=new B.t(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hA_=w([D.btc,D.bhA,D.bmz],x.O)
D.aJj=new C.jB("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dRi,4294702831,4285218602,4291394365,D.k4)
D.dRj=new C.l6(9,"modernLedger")
D.hzZ=w([A.c,D.jv,D.jv],x.O)
D.aJi=new C.jB("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dRj,4294967295,4279378237,4279378237,D.k4)
D.dke=w([D.aJk,D.aJl,D.aJj,D.aJi],x.h)
D.dkn=w([A.io,A.p5],x.O)
D.co=new C.hJ(0,"none")
D.dh=new C.hJ(1,"fade")
D.Jb=new C.hJ(3,"slideRight")
D.aKi=new C.hJ(5,"slideDown")
D.eaV=new C.hJ(7,"zoomOut")
D.a7y=new C.hJ(11,"cube")
D.eaQ=new C.hJ(12,"blur")
D.aKf=new C.hJ(13,"dissolve")
D.eaR=new C.hJ(14,"wipeLeft")
D.eaS=new C.hJ(15,"wipeRight")
D.Tt=new C.hJ(17,"push")
D.eaT=new C.hJ(18,"flash")
D.aKh=new C.hJ(20,"swing")
D.eaU=new C.hJ(21,"curtain")
D.S3=w([D.co,D.dh,D.v5,D.Jb,D.v6,D.aKi,D.mY,D.eaV,D.Jc,D.aKj,D.Ts,D.a7y,D.eaQ,D.aKf,D.eaR,D.eaS,D.qQ,D.Tt,D.eaT,D.aKg,D.aKh,D.eaU],x.i)
D.S4=w([D.a7d,D.a7b,D.a74,D.a75,D.a76,D.a79,D.a77,D.a78,D.a7c,D.a7a,D.aJk,D.aJl,D.aJj,D.aJi],x.h)
D.dkQ=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dkU=w([A.tX,A.i_,A.c3],x.O)
D.eGp=new B.z(A.uA,"Design")
D.eUY=new B.z(D.ap8,"Word sizes")
D.eQk=new B.z(A.CL,"Text")
D.bPI=new B.a0(983182,"MaterialIcons",!1)
D.eQp=new B.z(D.bPI,"Photo")
D.eB7=new B.z(A.lf,"Logo")
D.eWg=new B.z(A.HJ,"News")
D.dl_=w([D.eGp,D.eUY,D.eQk,D.eQp,D.eB7,D.eWg],x.f2)
D.dl0=w(["golddust","sparkle","sheen"],x.s)
D.ech=new C.eA("upload_pdf",K.Pg,"Upload PDF")
D.ebr=new C.eA("sign_paper",A.HG,"Sign Paper")
D.bOY=new B.a0(63438,"MaterialIcons",!1)
D.ecd=new C.eA("hd_photo",D.bOY,"HD Photo")
D.ebj=new C.eA("sharpen",E.a1W,"Sharpen")
D.ebt=new C.eA("print",K.Pg,"Download PDF")
D.ebV=new C.eA("rotate",D.aoS,"Rotate")
D.ebC=new C.eA("text_box",A.CL,"Text Box")
D.ebE=new C.eA("picture",A.uE,"Picture")
D.ebA=new C.eA("title",A.wD,"Title")
D.ebw=new C.eA("subtitle",U.apJ,"Subtitle")
D.ec3=new C.eA("bullets",I.a2g,"Bullet List")
D.ebx=new C.eA("numbered",A.P3,"Numbered")
D.ec6=new C.eA("quote",A4.Cy,"Quote")
D.ebJ=new C.eA("citation",A.on,"Citation")
D.ec9=new C.eA("date_stamp",Aj.a20,"Date Stamp")
D.ebX=new C.eA("page_number",A.z9,"Page #")
D.ec0=new C.eA("header_bar",A.zb,"Header")
D.ebD=new C.eA("footer_bar",Av.a2P,"Footer")
D.ebs=new C.eA("divider",A.rO,"Divider")
D.ebo=new C.eA("highlight",A.a2j,"Highlight")
D.ec2=new C.eA("redact",A.uN,"Redact")
D.ebQ=new C.eA("callout",A.Cp,"Callout")
D.ecb=new C.eA("checkboxes",I.ao9,"Checklist")
D.ebN=new C.eA("table",A.a2M,"Table")
D.ebH=new C.eA("memo",I.a2w,"Memo")
D.ebR=new C.eA("letter",A.Hv,"Letter")
D.bOB=new B.a0(63259,"MaterialIcons",!0)
D.ebi=new C.eA("agenda",D.bOB,"Agenda")
D.ebu=new C.eA("toc",AD.apm,"Contents")
D.bOU=new B.a0(63406,"MaterialIcons",!1)
D.ebO=new C.eA("sig_line",D.bOU,"Sign Line")
D.ebb=new C.eA("initial_line",A.j1,"Initials")
D.ebe=new C.eA("approved",A.lf,"APPROVED")
D.ebT=new C.eA("draft",A.po,"DRAFT")
D.ebZ=new C.eA("confidential",A.jE,"Confidential")
D.ec1=new C.eA("sticky",A.Po,"Sticky Note")
D.eca=new C.eA("progress",A.apl,"Progress")
D.bQ7=new B.a0(983507,"MaterialIcons",!1)
D.ebp=new C.eA("stars",D.bQ7,"Star Rating")
D.eb9=new C.eA("equation",A.apa,"Equation")
D.ebk=new C.eA("timeline",A.a2N,"Timeline")
D.ebI=new C.eA("two_col",A.a2Q,"Two Columns")
D.ebm=new C.eA("compare",Az.a24,"Compare")
D.eb7=new C.eA("duplicate_el",A.fQ,"Duplicate")
D.ecf=new C.eA("delete_el",A.eb,"Delete")
D.ec5=new C.eA("bring_fwd",H.ap4,"Bring Front")
D.ebc=new C.eA("send_back",H.ap3,"Send Back")
D.ebS=new C.eA("align_left",D.a2e,"Align L")
D.ebY=new C.eA("align_center",D.a2d,"Align C")
D.ece=new C.eA("align_right",D.a2f,"Align R")
D.ebB=new C.eA("word_count",A3.a1D,"Word Count")
D.eby=new C.eA("link_text",A.hE,"Link")
D.ebW=new C.eA("phone",A.j2,"Phone")
D.ebn=new C.eA("email",A.Cu,"Email")
D.ecg=new C.eA("qr_placeholder",A.jG,"QR Placeholder")
D.ebh=new C.eA("rectangle",A5.rM,"Rectangle")
D.ebM=new C.eA("circle",A.pf,"Circle")
D.ebd=new C.eA("arrow",A.jD,"Arrow")
D.ec4=new C.eA("line",A.rO,"Line")
D.ebq=new C.eA("triangle",A.a22,"Triangle")
D.bOI=new B.a0(63318,"MaterialIcons",!1)
D.ebv=new C.eA("grayscale",D.bOI,"Grayscale")
D.ebF=new C.eA("brighten",I.aou,"Brighten")
D.ebK=new C.eA("flip_h",A.Cx,"Flip H")
D.bOP=new B.a0(63348,"MaterialIcons",!1)
D.ecc=new C.eA("flip_v",D.bOP,"Flip V")
D.ec_=new C.eA("cover_page",A.qv,"Cover Page")
D.eba=new C.eA("invoice",A.hq,"Invoice")
D.ebl=new C.eA("resume",A.mO,"Resume")
D.ebz=new C.eA("minutes",A.pi,"Minutes")
D.ebf=new C.eA("lab_report",A.Pk,"Lab Report")
D.ebg=new C.eA("rubric",A.qy,"Rubric")
D.ebL=new C.eA("flashcard_tool",W.HE,"Flashcard")
D.ec7=new C.eA("quiz_tool",A.HA,"Quiz Block")
D.ebP=new C.eA("worksheet_tool",P.Hc,"Worksheet")
D.ebU=new C.eA("outline_share",A.Pm,"Share Outline")
D.ec8=new C.eA("export_json",D.aof,"Export JSON")
D.eb8=new C.eA("new_slide",D.a1C,"New Slide")
D.ebG=new C.eA("present",A.qC,"Present")
D.dlw=w([D.ech,D.ebr,D.ecd,D.ebj,D.ebt,D.ebV,D.ebC,D.ebE,D.ebA,D.ebw,D.ec3,D.ebx,D.ec6,D.ebJ,D.ec9,D.ebX,D.ec0,D.ebD,D.ebs,D.ebo,D.ec2,D.ebQ,D.ecb,D.ebN,D.ebH,D.ebR,D.ebi,D.ebu,D.ebO,D.ebb,D.ebe,D.ebT,D.ebZ,D.ec1,D.eca,D.ebp,D.eb9,D.ebk,D.ebI,D.ebm,D.eb7,D.ecf,D.ec5,D.ebc,D.ebS,D.ebY,D.ece,D.ebB,D.eby,D.ebW,D.ebn,D.ecg,D.ebh,D.ebM,D.ebd,D.ec4,D.ebq,D.ebv,D.ebF,D.ebK,D.ecc,D.ec_,D.eba,D.ebl,D.ebz,D.ebf,D.ebg,D.ebL,D.ec7,D.ebP,D.ebU,D.ec8,D.eb8,D.ebG],B.as("O<eA>"))
D.dlG=w([A.cq,A.al],x.O)
D.eAE=new B.z(4286331629,4292552567)
D.eAr=new B.z(4280640491,4278630100)
D.eAM=new B.z(4294538006,4292943176)
D.ezO=new B.z(4278556265,4280640491)
D.dfA=w([D.eAE,D.eAr,D.eAM,D.ezO],x.n)
D.cCV=w([4294626325,4280472558,4294210230],x.t)
D.eb2=new C.o1("colorful","Colorful",A.md,D.dfA,4294967295,3875536895,D.cCV,D.mY)
D.eAf=new B.z(4279522093,4279657780)
D.eAv=new B.z(4281750292,4283268111)
D.ezR=new B.z(4278603323,4279203438)
D.eAw=new B.z(4282343954,4279599165)
D.cO1=w([D.eAf,D.eAv,D.ezR,D.eAw],x.n)
D.cCD=w([4288931381,4294829706,4287033260],x.t)
D.eaZ=new C.o1("nature","Nature",A.HH,D.cO1,4294442727,3874290891,D.cCD,D.dh)
D.eA9=new B.z(4279369771,4283178389)
D.eA6=new B.z(4279179050,4286456526)
D.eAn=new B.z(4280163147,4290648157)
D.ezG=new B.z(4278322711,4285343961)
D.d5n=w([D.eA9,D.eA6,D.eAn,D.ezG],x.n)
D.cCR=w([4294210230,4280472558,4289170426],x.t)
D.eaX=new C.o1("vibe","Vibe",A.P7,D.d5n,4294967295,3874869502,D.cCR,D.v5)
D.eAI=new B.z(4290007817,4292552567)
D.eAC=new B.z(4286328082,4294286859)
D.eAH=new B.z(4288485197,4294538006)
D.eAB=new B.z(4285343961,4293675161)
D.c8J=w([D.eAI,D.eAC,D.eAH,D.eAB],x.n)
D.cCW=w([4294829706,4294967295,4284999929],x.t)
D.eaY=new C.o1("celebration","Celebration",A.kp,D.c8J,4294967295,4009752557,D.cCW,D.qQ)
D.eA4=new B.z(4279179050,4280171146)
D.eA8=new B.z(4279310375,4280232247)
D.ezX=new B.z(4278916151,4280172719)
D.eA5=new B.z(4279179050,4281549141)
D.cYI=w([D.eA4,D.eA8,D.ezX,D.eA5],x.n)
D.cCy=w([4281908728,4294626325,4287931320],x.t)
D.eb1=new C.o1("professional","Professional",A.Cn,D.cYI,4294967295,3872118241,D.cCy,D.Tt)
D.eA0=new B.z(4278995566,4278413729)
D.ezT=new B.z(4278727492,4279137424)
D.eAo=new B.z(4280171146,4278751666)
D.eA1=new B.z(4278995566,4279590517)
D.cGL=w([D.eA0,D.ezT,D.eAo,D.eA1],x.n)
D.cCB=w([4286436348,4284410580,4294829706],x.t)
D.eb3=new C.o1("ocean","Ocean",I.a2S,D.cGL,4294967295,3873501950,D.cCB,D.v6)
D.eAD=new B.z(4286328082,4294538006)
D.eAF=new B.z(4286781507,4294677052)
D.eAz=new B.z(4283178389,4294197086)
D.eAG=new B.z(4288295954,4294688548)
D.cUV=w([D.eAD,D.eAF,D.eAz,D.eAG],x.n)
D.cCX=w([4294829706,4294967295,4294747557],x.t)
D.eb4=new C.o1("sunset","Sunset",A.Pr,D.cUV,4294967295,4009749973,D.cCX,D.dh)
D.eAQ=new B.z(4294967295,4294047225)
D.eAL=new B.z(4294507260,4294967295)
D.eAP=new B.z(4294967295,4293060848)
D.eAK=new B.z(4294507260,4294047225)
D.d8I=w([D.eAQ,D.eAL,D.eAP,D.eAK],x.n)
D.cCw=w([4280640491,4279179050,4287931320],x.t)
D.eb0=new C.o1("minimal","Minimal",A5.rM,D.d8I,4279179050,4282865001,D.cCw,D.dh)
D.eA_=new B.z(4278979081,4280886564)
D.eAj=new B.z(4280031511,4278979081)
D.eA7=new B.z(4279308561,4281148438)
D.ezZ=new B.z(4278979081,4280031511)
D.dnK=w([D.eA_,D.eAj,D.eA7,D.ezZ],x.n)
D.cCK=w([4292128567,4294829706,4289241758],x.t)
D.eb5=new C.o1("elegant","Elegant",A.me,D.dnK,4294898631,3873957348,D.cCK,D.aKf)
D.eAl=new B.z(4280159034,4282058596)
D.ezW=new B.z(4278916151,4280163147)
D.eAt=new B.z(4281208933,4278916151)
D.eAc=new B.z(4279502891,4283178389)
D.dvi=w([D.eAl,D.ezW,D.eAt,D.eAc],x.n)
D.cCT=w([4294296657,4292128567,4291081725],x.t)
D.eb_=new C.o1("royal","Royal Gold",A.jl,D.dvi,4294965222,3874084351,D.cCT,D.mY)
D.ezL=new B.z(4278464302,4280163147)
D.ezV=new B.z(4278916151,4279455306)
D.eAm=new B.z(4280163147,4283040846)
D.ezI=new B.z(4278332450,4281413249)
D.dfd=w([D.ezL,D.ezV,D.eAm,D.ezI],x.n)
D.cCx=w([4281193663,4289170426,4294210230],x.t)
D.eb6=new C.o1("aurora","Aurora Glow",A.e5,D.dfd,4293983738,3869766608,D.cCx,D.dh)
D.wN=w([D.eb2,D.eaZ,D.eaX,D.eaY,D.eb1,D.eb3,D.eb4,D.eb0,D.eb5,D.eb_,D.eb6],B.as("O<o1>"))
D.bnf=new B.t(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dmg=w([A.rm,D.bnf,A.rm],x.O)
D.dmx=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dmB=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eQc=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eG_=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eKM=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.exa=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eJn=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eHv=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eM3=new B.z("Surprise me","")
D.dna=w([D.eQc,D.eG_,D.eKM,D.exa,D.eJn,D.eHv,D.eM3],x.L)
D.bfn=new B.t(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.brB=new B.t(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.do_=w([A.c,D.bfn,D.brB],x.O)
D.dqj=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aJP=new C.l6(0,"heritageGold")
D.blD=new B.t(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.hAp=w([D.blD,Aa.ahi,A.aA],x.O)
D.dPw=new C.jB("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aJP,4294570461,4284234270,4292128567,D.k4)
D.aJQ=new C.l6(1,"heritageCrimson")
D.bdy=new B.t(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bjM=new B.t(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.brn=new B.t(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hA2=w([D.bdy,D.bjM,D.brn],x.O)
D.dPp=new C.jB("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aJQ,4294635750,4285213214,4292912216,D.k4)
D.dqo=w([D.a7d,D.a7b,D.dPw,D.dPp,D.a76,D.a79],x.h)
D.dVm=new C.rR(1,"circuit")
D.dVP=new C.mm("neural","Neural Link","Robotic",D.dVm,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dVl=new C.rR(0,"grid")
D.dVM=new C.mm("signal","Signal Grid","Robotic",D.dVl,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dVr=new C.rR(2,"hexes")
D.dVx=new C.mm("core","Core Protocol","Robotic",D.dVr,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aKc=new C.rR(11,"diagonal")
D.dVI=new C.mm("steel","Steel Tech","Robotic",D.aKc,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aKd=new C.rR(3,"rings")
D.dVw=new C.mm("vault","Vault Gold","Robotic",D.aKd,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dVp=new C.rR(13,"leaves")
D.dVz=new C.mm("forest","Forest Morning","Nature",D.dVp,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aKe=new C.rR(5,"waves")
D.dVG=new C.mm("ocean","Ocean Calm","Nature",D.aKe,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dVs=new C.rR(6,"sunset")
D.dVL=new C.mm("sunset","Sunset Glow","Nature",D.dVs,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dVt=new C.rR(7,"mountains")
D.dVy=new C.mm("mountain","Mountain Air","Nature",D.dVt,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dVu=new C.rR(8,"stars")
D.dVF=new C.mm("night","Night Sky","Nature",D.dVu,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a7w=new C.rR(4,"orbs")
D.dVD=new C.mm("aurora","Aurora","Nature",D.a7w,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dVN=new C.mm("sand","Sand Dune","Nature",D.aKe,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dVv=new C.rR(9,"rays")
D.dVC=new C.mm("golden","Golden Hour","Warm",D.dVv,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dVA=new C.mm("royal","Royal Purple","Warm",D.aKc,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dVB=new C.mm("rose","Rose Petal","Warm",D.a7w,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dVo=new C.rR(12,"blocks")
D.dVE=new C.mm("electric","Electric Blue","Bold",D.dVo,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dVO=new C.mm("mint","Fresh Mint","Bold",D.a7w,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dVq=new C.rR(14,"minimal")
D.dVK=new C.mm("white","Clean White","Clean",D.dVq,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dVn=new C.rR(10,"frame")
D.dVH=new C.mm("midnight","Midnight Gold","Clean",D.dVn,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dVJ=new C.mm("community","Community Green","Clean",D.aKd,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a5K=w([D.dVP,D.dVM,D.dVx,D.dVI,D.dVw,D.dVz,D.dVG,D.dVL,D.dVy,D.dVF,D.dVD,D.dVN,D.dVC,D.dVA,D.dVB,D.dVE,D.dVO,D.dVK,D.dVH,D.dVJ],B.as("O<mm>"))
D.dqL=w([D.Bz,A.tT,A.i_,A.c3],x.O)
D.dr2=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.dr3=w([D.aij,D.jv],x.O)
D.drd=w(["pdf","docx","txt","md"],x.s)
D.f_w=new B.b5(-3,150,34)
D.f_x=new B.b5(-3,214,62)
D.f_y=new B.b5(-3,288,62)
D.ds5=w([D.f_w,D.f_x,D.f_y],B.as("O<+(I,I,I)>"))
D.dsB=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dth=w(["Write","Design","Print & fold"],x.s)
D.k5=new C.v7(2,"triangle")
D.DM=new C.v7(3,"arrow")
D.fD=new C.v7(4,"line")
D.k6=new C.v7(5,"parallelogram")
D.dtk=w([D.bi,D.eT,D.k5,D.DM,D.fD,D.k6,D.ln],x.m)
D.eyF=new B.z(240,96)
D.eBr=new B.z(560,46)
D.dtr=w([D.eyF,D.eBr],x.G)
D.hAA=new C.y0(0,"classic")
D.dRm=new C.nY("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aJP,4294570461,4282000405,4284234270)
D.dRy=new C.nY("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aJQ,4294635750,4281999378,4285213214)
D.dRn=new C.nY("elegant_navy","Umoja Mzuri",y.s,D.a7q,4294967035,4279378237,4290283019)
D.dRA=new C.nY("elegant_gold","Umoja wa Dhahabu",y.Q,D.aJY,4294966515,4281016592,4289102906)
D.dRC=new C.nY("kente_sunset","Kente ya Jua",y.H,D.aJR,4294964964,4282000405,4279983648)
D.dRk=new C.nY("indigo_mudcloth","Nguo ya Indigo",y.n,D.aJS,4294439140,4279903102,4279903102)
D.dRp=new C.nY("adinkra_royal","Muhuri wa Adinkra",y.z,D.aJT,4294965484,4285218591,4287322667)
D.dRu=new C.nY("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aJU,4294244340,4279196764,4279196764)
D.dRw=new C.nY("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aJV,4294505710,4279970378,4291058750)
D.hAB=new C.y0(1,"ringsNdoa")
D.dRo=new C.nY("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.t6,4294966259,4279378237,4291404327)
D.hAD=new C.y0(2,"coupleCards")
D.dRz=new C.nY("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.t6,4294966259,4279378237,4291404327)
D.hAE=new C.y0(3,"kuhoweshaForm")
D.dRv=new C.nY("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.DG,4294966519,4279378237,4291404327)
D.hAF=new C.y0(4,"mahariPande")
D.dRl=new C.nY("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.t6,4294966259,4279904068,4291404327)
D.hAG=new C.y0(5,"familiaMti")
D.dRB=new C.nY("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aJW,4294966776,4280241466,4291404327)
D.hAH=new C.y0(6,"ndoaSafi")
D.dRs=new C.nY("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.DG,4294966519,4279378237,4291404327)
D.hAI=new C.y0(7,"peteWide")
D.dRr=new C.nY("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.t6,4294966259,4282001936,4291404327)
D.hAJ=new C.y0(8,"muhuriCrest")
D.dRq=new C.nY("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.t6,4294966259,4279378237,4291404327)
D.hAK=new C.y0(9,"fomuWazi")
D.dRt=new C.nY("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.DG,4294966519,4279904068,4291404327)
D.hAC=new C.y0(10,"upendoOrnate")
D.dRx=new C.nY("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aJX,4294965493,4286200650,4291404327)
D.Sk=w([D.dRm,D.dRy,D.dRn,D.dRA,D.dRC,D.dRk,D.dRp,D.dRu,D.dRw,D.dRo,D.dRz,D.dRv,D.dRl,D.dRB,D.dRs,D.dRr,D.dRq,D.dRt,D.dRx],B.as("O<nY>"))
D.DK=new C.asm(0,"landscape169")
D.oG=new C.asm(1,"portrait916")
D.dud=w([D.DK,D.oG],B.as("O<asm>"))
D.aCu=w([A.i_,A.bM,A.cG,A.io,A.c],x.O)
D.uX=w([A.c3,A.iq],x.O)
D.exF=new B.z(1000,"M")
D.eCV=new B.z(900,"CM")
D.eBl=new B.z(500,"D")
D.ezB=new B.z(400,"CD")
D.exG=new B.z(100,"C")
D.eCW=new B.z(90,"XC")
D.eBm=new B.z(50,"L")
D.ezC=new B.z(40,"XL")
D.exM=new B.z(10,"X")
D.eD7=new B.z(9,"IX")
D.eBD=new B.z(5,"V")
D.eB6=new B.z(4,"IV")
D.eyi=new B.z(1,"I")
D.duY=w([D.exF,D.eCV,D.eBl,D.ezB,D.exG,D.eCW,D.eBm,D.ezC,D.exM,D.eD7,D.eBD,D.eB6,D.eyi],x.ek)
D.f0N=new B.cw(["open",A.j1,"Open & write","Keep writing this book"])
D.f1d=new B.cw(["print",A.uI,"Print as a book","Fold and staple it"])
D.dv8=w([D.f0N,D.f1d],B.as("O<+(m,a0,m,m)>"))
D.dvR=w([D.a7y,D.mY,D.Jc,D.Tt,D.dh,D.Ts],x.i)
D.eQX=new B.z(-1,"Small")
D.exq=new B.z(0,"Normal")
D.eyf=new B.z(1,"Big")
D.eyW=new B.z(2,"Huge")
D.dwq=w([D.eQX,D.exq,D.eyf,D.eyW],x.ek)
D.dwR=w([49,65,89,38,83,89],x.t)
D.dwX=w([A.tT,A.i_,A.c3],x.O)
D.dxq=w([D.dh,D.mY,D.v5,D.a7y,D.Jc,D.Tt],x.i)
D.aHN=new B.dg([0,D.Nc,8,D.ajW,12,D.ajX],B.as("dg<G,a4y>"))
D.eh1={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.brd=new B.t(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.q)
D.cYT=w([A.bM,D.brd],x.O)
D.djV=w([A.b_,A.bl],x.O)
D.deh=w([A.c_,A.aJ,A.bs],x.O)
D.dv9=w([A.cq,A.bt],x.O)
D.d6m=w([A.b8,A.f8],x.O)
D.dh7=w([A.b7,A.fe],x.O)
D.bjp=new B.t(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dgo=w([D.bjp,A.p5],x.O)
D.dau=w([A.hf,A.y2],x.O)
D.d69=w([A.bv,A.cf],x.O)
D.dA4=new B.bu(D.eh1,[D.cYT,O.asF,D.djV,D.deh,D.dv9,D.d6m,D.dh7,D.dgo,D.dau,D.d69],B.as("bu<m,ai<t>>"))
D.egf={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a6o=new B.bu(D.egf,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.as("bu<m,m>"))
D.a6v=new B.bu(A.hW,[],B.as("bu<G,+icon3d,picture(m?,m?)>"))
D.dEq=new F.Ny(30,null)
D.dJF=new F.mM("Chapter 1","","","")
D.du_=w([D.dJF],x.B)
D.dJJ=new F.rH("My Book","","",D.du_,E.aJ8)
D.dJH=new F.uY("starry",null,null,null,null,"","","")
D.dJK=new F.rH("Dream Big","","",E.a5p,D.dJH)
D.dJI=new F.uY("story",null,null,null,null,"","","")
D.dJL=new F.rH("Little Lion","","",E.a5p,D.dJI)
D.dJG=new F.uY("vintage",null,null,null,null,"","","")
D.dJM=new F.rH("Our Story","","",E.a5p,D.dJG)
D.dML=new C.F2("","NGMY","","")
D.dU_=new C.zX("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Y,"","","")
D.eaW=new C.b2X(null,null,null,null)
D.ecE=new C.asr(null)
D.ecP=new C.asV(0,"smaller")
D.ecQ=new C.asV(1,"bigger")
D.aKt=new C.asV(2,"fit")
D.ekv=new B.u(3,6)
D.ekP=new B.u(4,8)
D.ep_=new B.D(E.akO,U.aeS,null)
D.ep3=new B.D(A.a_x,A.lZ,null)
D.bRs=new B.ae(A.k_,16,A.bU,null,null,null)
D.ep7=new B.D(A.iJ,D.bRs,null)
D.bcX=new B.fl(2.2,null,null,null,null,A.c,null,null,null,null)
D.epj=new B.D(A.GQ,D.bcX,null)
D.c0Y=new B.ae(A.cx,16,A.aC,null,null,null)
D.epn=new B.D(A.ev,D.c0Y,null)
D.fJh=new B.y("Play",null,A.nO,null,null,null,null,null,null,null,null,null)
D.dkb=w([V.ar8,A.tl,D.fJh],x.p)
D.f5S=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.dkb,null)
D.epq=new B.D(A.nu,D.f5S,null)
D.bd5=new B.fl(2.4,null,null,null,null,null,null,null,null,null)
D.fbT=new B.a4(20,20,D.bd5,null)
D.epx=new B.D(A.iJ,D.fbT,null)
D.fSF=new B.y("Seconds per slide",null,A.fS,null,null,null,null,null,null,null,null,null)
D.epH=new B.D(A.bg,D.fSF,null)
D.er1=new C.a9o(2,"print")
D.er4=new B.j_(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.esH=new B.hk("/Annot")
D.esJ=new B.hk("/URI")
D.fDl=new B.y("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.evd=new B.jD("share",48,D.fDl,null,B.as("jD<m>"))
D.c0R=new B.ae(A.e5,14,A.eG,null,null,null)
D.evm=new B.cO(null,-2,-2,null,null,null,D.c0R,null)
D.d08=w([H.ahT,A.L],x.O)
D.c7u=new B.a9(A.a5,A.a8,A.x,D.d08,null,null)
D.b5w=new B.o(null,null,null,null,null,D.c7u,A.n)
D.bwx=new B.l2(D.b5w,A.bh,null,null)
D.evy=new B.cO(0,0,null,0,8,null,D.bwx,null)
D.dpd=w([A.i2,A.mD,A.cd],x.O)
D.ewc=new B.c_(A.A,0.5,A.x,null,0,D.dpd,null,null)
D.eyO=new B.z(0.22,A.bl)
D.eDr=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eFE=new B.z(0.5,A.hx)
D.ePi=new B.z(0.78,A.aW)
D.f0C=new B.cw([A.bq,0.22,0.7,2.6])
D.f0J=new B.cw([A.b8,0.36,1.2,1.3])
D.f0P=new B.cw([A.dH,0.28,0.2,0.4])
D.f0V=new B.cw([A.cw,0.05,0.3,0.35])
D.f10=new B.cw([A.bv,0.28,0.9,0])
D.f18=new B.cw([A.aD,-0.25,-0.15,0.45])
D.f2_=new B.cw([A.c_,0.42,1,4.1])
D.f5A=new B.aam(9)
D.bSz=new B.ae(A.HJ,28,A.bs,null,null,null)
D.fTd=new B.y("NGMY News",null,A.de,null,null,null,null,null,null,null,null,null)
D.bGJ=new B.by(1,A.bb,D.fTd,null)
D.dsE=w([D.bSz,A.as,D.bGJ],x.p)
D.f5M=new B.ca(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.dsE,null)
D.bSK=new B.ae(A.on,16,A.c,null,null,null)
D.fUO=new B.y("Book",null,A.oO,null,null,null,null,null,null,null,null,null)
D.dwW=w([D.bSK,A.ec,D.fUO],x.p)
D.f5V=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.dwW,null)
D.bZr=new B.ae(A.jE,10,A.c,null,null,null)
D.fHi=new B.y("Pro",null,A.nK,null,null,null,null,null,null,null,null,null)
D.dkg=w([D.bZr,A.qY,D.fHi],x.p)
D.f5Z=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.dkg,null)
D.fSD=new B.y("Make a newspaper",null,A.Vx,null,null,null,null,null,null,null,null,null)
D.c8H=w([E.a3e,A.ad,D.fSD],x.p)
D.f6_=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.c8H,null)
D.bXV=new B.ae(A.kp,18,A.bM,null,null,null)
D.fJv=new B.y("Ending celebration",null,A.hv,null,null,null,null,null,null,null,null,null)
D.drE=w([D.bXV,A.bm,D.fJv],x.p)
D.f62=new B.ca(A.aL,A.e,A.i,A.m,null,A.p,null,0,D.drE,null)
D.bZd=new B.ae(A.j1,18,A.kj,null,null,null)
D.fmT=new B.F(!0,A.kj,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fV6=new B.y("Write",null,D.fmT,null,null,null,null,null,null,null,null,null)
D.d8w=w([D.bZd,A.ad,D.fV6],x.p)
D.f69=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.d8w,null)
D.fHg=new B.y("Download picture",null,A.nL,null,null,null,null,null,null,null,null,null)
D.bJm=new B.qH(A.e3,A.A,A.f,D.fHg,null)
D.bJx=new B.ds(1,A.cn,D.bJm,null)
D.dkF=w([K.ar_,A.ad,D.bJx],x.p)
D.f6a=new B.ca(A.aL,A.b9,A.i,A.m,null,A.p,null,0,D.dkF,null)
D.bUw=new B.ae(A.HJ,22,A.bs,null,null,null)
D.fRb=new B.y("NGMY NEWS",null,M.aae,null,null,null,null,null,null,null,null,null)
D.d_y=w([D.bUw,A.ad,D.fRb],x.p)
D.f6j=new B.ca(A.aL,A.e,A.P,A.m,null,A.p,null,0,D.d_y,null)
D.f6v=new B.pv(!1,!1,null,U.XA,null,A.c2,null,null,null)
D.a9k=new B.iL([D.co,D.dh,D.v5,D.Jb,D.v6,D.aKi],B.as("iL<hJ>"))
D.eiN={title:0,quote:1,closing:2,bio:3}
D.f7G=new B.dx(D.eiN,4,x.M)
D.egz={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.f7J=new B.dx(D.egz,5,x.M)
D.ei3={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a9m=new B.dx(D.ei3,8,x.M)
D.ehd={Design:0,Transitions:1,Insert:2}
D.f7P=new B.dx(D.ehd,3,x.M)
D.hAT=new B.iL([D.a7z],B.as("iL<wo>"))
D.ehm={float3d:0,drift:1,pulse:2}
D.f7T=new B.dx(D.ehm,3,x.M)
D.aRV=new B.iL([D.J8,D.J9,D.Ja],B.as("iL<mQ>"))
D.egx={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aRY=new B.dx(D.egx,14,x.M)
D.hAU=new B.dx(A.hW,0,B.as("dx<wo>"))
D.ehj={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Uz=new B.dx(D.ehj,4,x.M)
D.egq={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aS0=new B.dx(D.egq,30,x.M)
D.ehs={circle:0,triangle:1,hexagon:2,diamond:3}
D.f8k=new B.dx(D.ehs,4,x.M)
D.faM=new B.av(390,844)
D.fbC=new B.a4(20,20,A.LV,null)
D.aSO=new B.a4(null,2.5,null,null)
D.fbM=new B.a4(18,18,A.LV,null)
D.bZh=new B.ae(A.jl,19,A.c,null,null,null)
D.fbY=new B.a4(38,38,D.bZh,null)
D.bXt=new B.ae(A.ze,22,A.c,null,null,null)
D.fc_=new B.a4(40,40,D.bXt,null)
D.fcz=new B.hL(2,10,10,1.15,null)
D.aSV=new B.hL(2,16,14,0.62,null)
D.bEH=new B.Q(32,30,32,40)
D.beC=new B.t(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bSw=new B.ae(A.qv,56,D.beC,null,null,null)
D.aiW=new B.t(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fp1=new B.F(!0,D.aiW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO5=new B.y("Your books will live here.",null,D.fp1,null,A.K,null,null,null,null,null,null,null)
D.dbt=w([D.bSw,A.W,D.fO5],x.p)
D.bvu=new B.fk(A.ah,A.e,A.i,A.m,null,A.p,null,0,D.dbt,null)
D.epF=new B.D(D.bEH,D.bvu,null)
D.fcV=new B.mr(D.epF,null)
D.fO2=new B.y("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fdc=new B.b2(D.fO2,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fM7=new B.y("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new B.b2(D.fM7,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRf=new B.y("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new B.b2(D.fRf,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRO=new B.y("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fdB=new B.b2(D.fRO,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fKJ=new B.y("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fdO=new B.b2(D.fKJ,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fZ8=new B.y("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new B.b2(D.fZ8,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fW8=new B.y("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.feh=new B.b2(D.fW8,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fRX=new B.y("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.ff0=new B.b2(D.fRX,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fFr=new B.y("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.ffh=new B.b2(D.fFr,null,null,null,null,null,null,null,A.iS,null,null,null,null,A.qh,!1,null,null,null,A.t,null)
D.fHq=new B.y("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new B.b2(D.fHq,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fNI=new B.y("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.ffB=new B.b2(D.fNI,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fNo=new B.y("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.ffC=new B.b2(D.fNo,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fU4=new B.y("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.ffD=new B.b2(D.fU4,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fBu=new B.y("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new B.b2(D.fBu,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fIB=new B.y("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.b2(D.fIB,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fXN=new B.y("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fga=new B.b2(D.fXN,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fXj=new B.y("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fge=new B.b2(D.fXj,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fAo=new B.y("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fgg=new B.b2(D.fAo,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fT8=new B.y("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new B.b2(D.fT8,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fWT=new B.y("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new B.b2(D.fWT,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fWK=new B.y("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fgG=new B.b2(D.fWK,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fAf=new B.y("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fgM=new B.b2(D.fAf,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fEo=new B.y("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fhd=new B.b2(D.fEo,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fVW=new B.y("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fhp=new B.b2(D.fVW,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.fEa=new B.y("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fhE=new B.b2(D.fEa,null,null,null,null,null,null,null,null,null,null,null,null,A.Z,!1,null,null,null,A.t,null)
D.bmU=new B.t(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.cZ8=w([A.io,A.p5,D.bmU,D.afm,A.io],x.O)
D.fi1=new B.h1(A.A,0,6.283185307179586,A.x,D.cZ8,null,null)
D.d7E=w([A.bM,A.c3,A.i_,D.Bz,A.bM],x.O)
D.aTt=new B.h1(A.A,0,6.283185307179586,A.x,D.d7E,null,null)
D.dmv=w([A.c_,A.bq,A.b8,A.ba,A.bs,A.c_],x.O)
D.fi6=new B.h1(A.A,0,6.283185307179586,A.x,D.dmv,null,null)
D.d0n=w([A.qd,A.p6,A.y1,A.io,A.qd],x.O)
D.fi7=new B.h1(A.A,0,6.283185307179586,A.x,D.d0n,null,null)
D.dmp=w([A.aP,A.bL,A.aN,A.al,A.aP],x.O)
D.fi8=new B.h1(A.A,0,6.283185307179586,A.x,D.dmp,null,null)
D.duL=w([A.bv,A.b8,A.bq,A.c_,A.bv],x.O)
D.fia=new B.h1(A.A,0,6.283185307179586,A.x,D.duL,null,null)
D.bik=new B.t(1,0,1,0,A.q)
D.bne=new B.t(1,0,1,1,A.q)
D.bk8=new B.t(1,0,0,1,A.q)
D.bg1=new B.t(1,1,0,1,A.q)
D.dqD=w([A.Mb,A.ahx,D.bik,D.bne,D.bk8,D.bg1,A.Mb],x.O)
D.fib=new B.h1(A.A,0,6.283185307179586,A.x,D.dqD,null,null)
D.fiq=new C.ax8(2,"immersiveSticky")
D.fir=new C.ax8(3,"edgeToEdge")
D.fis=new C.ax8(4,"manual")
D.fkY=new B.F(!0,A.o0,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aU1=new B.F(!0,A.eO,null,null,null,null,12.5,A.U,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flx=new B.F(!0,E.nl,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fof=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fop=new B.F(!0,A.bU,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.foM=new B.F(!0,A.eG,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new B.F(!0,A.bL,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqo=new B.F(!0,A.jS,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqC=new B.t1(!0,A.Jy,null,null,null,null,A.dx,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fr4=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frN=new B.F(!0,A.jx,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsa=new B.F(!0,A.aC,null,null,null,null,12.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.er7=new B.j_(1,1,0.7568627450980392,0.027450980392156862)
D.fse=new B.t1(!0,D.er7,null,null,null,null,A.dx,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ahF=new B.t(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aUR=new B.F(!0,D.ahF,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsm=new B.F(!0,D.aiW,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsn=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aUT=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft0=new B.t1(!0,A.py,null,null,null,null,A.dx,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fth=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftP=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftR=new B.F(!0,D.ahF,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ky=new B.F(!0,A.aC,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fum=new B.F(!0,A.c3,null,null,null,null,11.5,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuw=new B.F(!0,A.bL,null,null,null,null,14,A.a7,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuA=new B.F(!0,A.bM,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuR=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a4X,null,null,null)
D.fuU=new B.F(!0,A.c0,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuW=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fva=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvm=new B.F(!0,A.du,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvY=new B.F(!0,A.aR,null,null,null,null,null,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new B.F(!0,A.ac,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVu=new B.F(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVw=new B.F(!0,A.bU,null,null,null,null,11.5,A.a7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bsZ=new B.t(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fyc=new B.F(!0,D.bsZ,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVC=new B.F(!0,E.nl,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyH=new B.F(!0,A.bL,null,null,null,null,11,A.a7,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyK=new B.F(!0,N.lC,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frj=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA0=new B.y("NEW",null,D.frj,null,null,null,null,null,null,null,null,null)
D.fAi=new B.y("Hati ya Kuhowesha",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fAM=new B.y("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fBa=new B.y("Scrollable PDF on this slide",null,A.df,null,null,null,null,null,null,null,null,null)
D.fBW=new B.y("Big quote mark",null,A.jq,null,null,null,null,null,null,null,null,null)
D.fBZ=new B.y("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fCa=new B.y("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fCD=new B.y("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fCF=new B.y("How many slides?",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fDd=new B.y("Transfer",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fmW=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDz=new B.y("Luxury FX",null,D.fmW,null,null,null,null,null,null,null,null,null)
D.fDU=new B.y("Font",null,A.tr,null,null,null,null,null,null,null,null,null)
D.fE4=new B.y("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.y("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.F(!0,A.bL,null,null,null,null,12,A.U,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new B.y("Example  GA847",null,D.fxJ,null,null,null,null,null,null,null,null,null)
D.fEL=new B.y("Design shapes",null,A.jq,null,null,null,null,null,null,null,null,null)
D.fEX=new B.y("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fF1=new B.y("Non-stop (loop)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fFf=new B.y("Hati ya Kuhoweya",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fFy=new B.y("Photo studio",null,A.fy,null,null,null,null,null,null,null,null,null)
D.fG1=new B.y("Add your picture",null,A.ka,null,null,null,null,null,null,null,null,null)
D.fqD=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fG2=new B.y("Enter document code",null,D.fqD,null,A.K,null,null,null,null,null,null,null)
D.fG3=new B.y("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fG8=new B.y("English",null,null,null,null,null,null,null,null,null,null,null)
D.fo3=new B.F(!0,E.nl,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGt=new B.y("Delete this book?",null,D.fo3,null,A.K,null,null,null,null,null,null,null)
D.fsQ=new B.F(!0,E.nl,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fHs=new B.y("Your library",null,D.fsQ,null,null,null,null,null,null,null,null,null)
D.fHy=new B.y("Delete",null,A.aUK,null,null,null,null,null,null,null,null,null)
D.fHB=new B.y("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ax.Kv,null,null,null,null,null,null,null,null,null)
D.fHN=new B.y("Element flies in",null,A.aUX,null,null,null,null,null,null,null,null,null)
D.VI=new B.y("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fIb=new B.y("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fIy=new B.y("Cancel",null,E.aV6,null,null,null,null,null,null,null,null,null)
D.fIA=new B.y("The lines and circles that come with the design",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fww=new B.F(!0,A.hl,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJ0=new B.y("DOCUMENT CODE",null,D.fww,null,null,null,null,null,null,null,null,null)
D.fJR=new B.y("Quotes",null,G.aaR,null,null,null,null,null,null,null,null,null)
D.fq_=new B.F(!0,N.lC,null,null,null,null,null,A.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fK_=new B.y("Add a picture",null,D.fq_,null,null,null,null,null,null,null,null,null)
D.fK7=new B.y("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.Vl,null,A.K,null,null,null,null,null,null,null)
D.fKb=new B.y("Look & feel",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fKg=new B.y("Rings",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fKm=new B.y("W",null,A.tr,null,null,null,null,null,null,null,null,null)
D.fKw=new B.y("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fKP=new B.y("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Vu,null,A.K,null,null,null,null,null,null,null)
D.fKR=new B.y("Write your book",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fLB=new B.y("Add page",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fLT=new B.y("Malipo ya Awamu ya Mahari",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fqs=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fM8=new B.y("Create with AI",null,D.fqs,null,A.K,null,null,null,null,null,null,null)
D.fMD=new B.y("Apply look",null,A.hv,null,null,null,null,null,null,null,null,null)
D.fr9=new B.F(!0,A.ep,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNq=new B.y("Type your presentation below",null,D.fr9,null,A.K,null,null,null,null,null,null,null)
D.fNt=new B.y("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aVG,null,A.K,null,null,null,null,null,null,null)
D.fNv=new B.y("Keep it",null,A.ce,null,null,null,null,null,null,null,null,null)
D.flQ=new B.F(!0,A.cp,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNC=new B.y("Done",null,D.flQ,null,null,null,null,null,null,null,null,null)
D.fNX=new B.y("Delete",null,A.nM,null,null,null,null,null,null,null,null,null)
D.fO7=new B.y("Hati ya Kiapo cha Uongozi",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fpj=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fP2=new B.y("Write your idea in any language \u2014 the AI makes the slides.",null,D.fpj,null,A.K,null,null,null,null,null,null,null)
D.fPr=new B.y("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fPx=new B.y("Layout",null,A.Vz,null,null,null,null,null,null,null,null,null)
D.fQa=new B.y("Print",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fQj=new B.y("X",null,A.tr,null,null,null,null,null,null,null,null,null)
D.fQU=new B.y("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,A2.Ew,null,null,null,null,null,null,null,null,null)
D.fRs=new B.y("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fRG=new B.y("Hati ya Kuhowa",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fRI=new B.y("Choose a class template",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fRK=new B.y("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fRR=new B.y("Download the newspaper picture",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fS3=new B.y("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fSa=new B.y("Done",null,A.aVt,null,null,null,null,null,null,null,null,null)
D.fSl=new B.y("Ending celebration",null,A.de,null,null,null,null,null,null,null,null,null)
D.fSm=new B.y("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fSB=new B.y("Plays after your last slide. Tap one to watch it and change its words or logo.",null,A2.tq,null,null,null,null,null,null,null,null,null)
D.fTB=new B.y("Export presentation",null,A.df,null,null,null,null,null,null,null,null,null)
D.fTC=new B.y("What would you like to do?",null,D.aUR,null,null,null,null,null,null,null,null,null)
D.fTH=new B.y("Delete",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fUd=new B.y("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fUh=new B.y("Hati (Documents)",null,A.fx,null,null,null,null,null,null,null,null,null)
D.fUu=new B.y("Done",null,A.ls,null,null,null,null,null,null,null,null,null)
D.fxy=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUy=new B.y("Delete presentation?",null,D.fxy,null,A.K,null,null,null,null,null,null,null)
D.fUS=new B.y("After the last slide it starts again from the first",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fV3=new B.y("\ud83c\udf33",null,A.Ev,null,A.K,null,null,null,null,null,null,null)
D.fVl=new B.y("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fVs=new B.y("Transfer document",null,A.nN,null,null,null,null,null,null,null,null,null)
D.fVD=new B.y("Add to the slides",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fW_=new B.y("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fWe=new B.y("Make a book",null,I.aUl,null,null,null,null,null,null,null,null,null)
D.fWi=new B.y("Books",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fpT=new B.F(!0,A.al,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWk=new B.y("Keep this page open until it finishes.",null,D.fpT,null,null,null,null,null,null,null,null,null)
D.fWm=new B.y("Making your video",null,A.de,null,null,null,null,null,null,null,null,null)
D.fWr=new B.y("LANGUAGE",null,X.ts,null,null,null,null,null,null,null,null,null)
D.fWy=new B.y("Use this ending",null,A.cz,null,null,null,null,null,null,null,null,null)
D.fWG=new B.y("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fWI=new B.y("Upload a different logo",null,A.ce,null,null,null,null,null,null,null,null,null)
D.fWZ=new B.y("Delete from the database?",null,A.ka,null,null,null,null,null,null,null,null,null)
D.fX_=new B.y("H",null,A.tr,null,null,null,null,null,null,null,null,null)
D.fXp=new B.y("NGMY Quotes",null,A.de,null,null,null,null,null,null,null,null,null)
D.fXT=new B.y("Cover",null,D.aVC,null,null,null,null,null,null,null,null,null)
D.fXX=new B.y("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fXY=new B.y("Each page becomes its own slide you can present",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fYk=new B.y("Y",null,A.tr,null,null,null,null,null,null,null,null,null)
D.fYw=new B.y("Crop the picture",null,A.ls,null,null,null,null,null,null,null,null,null)
D.fYD=new B.y("Edit text",null,A.Kt,null,null,null,null,null,null,null,null,null)
D.h_X=B.dW("a9a")
D.EK=new C.ayu(0,"none")
D.aZx=new C.ayu(1,"zipCrypto")
D.aZy=new C.ayu(2,"aes")
D.ho5=new F.Q5("","",null)
D.hpb=new C.bef(null)
D.hql=new C.a_o(null)
D.htf=new C.ae4(null)
D.hth=new C.aFM(null)
D.hw2=new C.a0E(null)
D.hwi=new C.a1a(null)
D.hwV=new C.bwa(null)})();(function staticFields(){$.hqO=null
$.hqP=null
$.hqQ=null
$.hqR=null
$.h8s=B.vw("_lastQuoRemDigits")
$.h8t=B.vw("_lastQuoRemUsed")
$.ayR=B.vw("_lastRemUsed")
$.h8u=B.vw("_lastRem_nsh")
$.qs=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a7Z=B.U(x.N,x.I)
$.h5S=!1
$.hvJ=B.U(B.as("l6"),x.N)
$.hvW=B.U(B.as("l6"),x.E)
$.htS=!1
$.bBS="q"
$.R8=0
$.D8=B.U(x.N,B.as("ai<zY>"))
$.hue=!1
$.ha8=!1
$.hAR=null
$.i4E=B.U(x.N,B.as("aB<m?>"))
$.KY=""
$.jb=0
$.hnD=function(){var w=x.N
return B.U(w,w)}()
$.hnC=B.U(x.N,x.R)
$.hat=!1
$.agO=B.U(x.N,x.E)
$.hbi=0
$.bmw=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iuq","Dv",()=>C.bbK(0))
w($,"iuo","a3p",()=>C.bbK(1))
w($,"iup","hED",()=>C.bbK(2))
w($,"iun","hfe",()=>$.a3p().vq(0))
w($,"iul","hEB",()=>C.bbK(1e4))
w($,"ium","hEC",()=>B.EJ(8))
w($,"iqb","hCD",()=>B.EJ(0))
w($,"iqj","hCH",()=>B.EJ(0))
w($,"iqi","hCG",()=>B.c23(0))
w($,"iyd","hGF",()=>{var v,u,t=x.N
t=B.U(t,t)
for(v=D.a6o.gdR(D.a6o),v=v.gaf(v);v.C();){u=v.gS(v)
t.n(0,u.b,u.a)}return t})
w($,"iyF","bGp",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nb(new C.fRc(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.nb(new C.fRd(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.nb(new C.fRe(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.nb(new C.fRp(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.nb(new C.fRu(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.nb(new C.fRv(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.nb(new C.fRw(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.nb(new C.fRx(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.nb(new C.fRy(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.nb(new C.fRz(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.nb(new C.fRA(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.nb(new C.fRf(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.nb(new C.fRg(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.nb(new C.fRh(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.nb(new C.fRi(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.nb(new C.fRj(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.nb(new C.fRk(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.nb(new C.fRl(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.nb(new C.fRm(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.nb(new C.fRn(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.nb(new C.fRo(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.nb(new C.fRq(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.nb(new C.fRr(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.nb(new C.fRs(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.nb(new C.fRt(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.as("O<Fb>"))})
w($,"iyg","hGH",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["KRYRrOqWYlW2nPPQG21VyFRiVP4="]=a.current})($__dart_deferred_initializers__);