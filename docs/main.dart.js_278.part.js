((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crv:function crv(){},
hXW(d){var x=null,w=new B.b5V(d,D.exo,new A.pM(x,x,y.c6),new A.pM(x,x,y.B))
w.bBS(d)
return w},
b5V:function b5V(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crq:function crq(d){this.a=d},
crr:function crr(d){this.a=d},
crs:function crs(d){this.a=d},
crp:function crp(d){this.a=d},
crt:function crt(d){this.a=d},
hXX(d,e){var x=y.N
x=new B.b5W(d,e,A.T(x,y.e),A.T(x,y.z))
x.bBT(d,e)
return x},
b5W:function b5W(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crw:function crw(d){this.a=d},
crx:function crx(d){this.a=d},
cry:function cry(d){this.a=d},
crz:function crz(d){this.a=d},
crA:function crA(d){this.a=d},
crB:function crB(d){this.a=d},
crC:function crC(d){this.a=d},
crD:function crD(d){this.a=d},
hcb(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zv.Mw(x,"ngmy_doc_share_v1",new B.fvt(),1)},
i3H(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eE(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wM(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cI.aM(d)
return x}catch(w){return v}return v},
S6(d,e){return B.ijG(d,e)},
ijG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S6=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPi
x=7
return A.b(o==null?$.aPi=B.hcb():o,$async$S6)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.n0(s,"blobs","readwrite")
C.j6.mx(J.n_(q,"blobs"),r,d)
x=8
return A.b(J.pV(q),$async$S6)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.w(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$S6,w)},
S5(d){return B.ijF(d)},
ijF(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPi
x=7
return A.b(o==null?$.aPi=B.hcb():o,$async$S5)
case 7:s=f
r=J.n0(s,"blobs","readonly")
x=8
return A.b(C.j6.A3(J.n_(r,"blobs"),d),$async$S5)
case 8:q=f
x=9
return A.b(J.pV(r),$async$S5)
case 9:o=B.i3H(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$S5,w)},
ahU(d){return B.ijE(d)},
ijE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPi
x=7
return A.b(p==null?$.aPi=B.hcb():p,$async$ahU)
case 7:s=f
r=J.n0(s,"blobs","readwrite")
C.j6.Gi(J.n_(r,"blobs"),d)
x=8
return A.b(J.pV(r),$async$ahU)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ahU,w)},
fvt:function fvt(){},
i6l(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqG(w,v))}return u},
hD5(d,e){var x,w={},v=A.aXZ("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fUz(w,v,e)
C.wO.z4(v,"change",new B.fUB(w,v,!1))
C.wO.z4(v,"cancel",new B.fUA(w))
$.eW.mC()
v.click()
A.bQ(C.akB,new B.fUy(w),y.H)},
fUz:function fUz(d,e,f){this.a=d
this.b=e
this.c=f},
fUB:function fUB(d,e,f){this.a=d
this.b=e
this.c=f},
fUA:function fUA(d){this.a=d},
fUy:function fUy(d){this.a=d},
DF(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DF=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUs()?3:4
break
case 3:x=5
return A.b(B.hxW(e,d,s,!0,!1,f,g,h,!1,i),$async$DF)
case 5:x=1
break
case 4:x=6
return A.b(B.RK(d,s,f,g,h,i),$async$DF)
case 6:u=a1
if(e.e==null){x=1
break}case 7:switch(u.a){case 0:x=9
break
case 1:x=10
break
case 2:x=11
break
default:x=8
break}break
case 9:r=B
q=e
p=d
o=s
n=!1
x=13
return A.b(B.Jh(s,d),$async$DF)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fqY(s,d),$async$DF)
case 14:x=12
return A.b(r.hxW(q,p,o,n,m,l,k,j,a1,i),$async$DF)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fUO(s,i,d,f,g,h),!1,null,y.H)),$async$DF)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fUP(s,i,d,f,g,h),!1,null,y.H)),$async$DF)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DF,w)},
RK(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RK=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0F(e),$async$RK)
case 3:u=k
x=4
return A.b(B.aqp(d,e,!1),$async$RK)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jh(e,d),$async$RK)
case 7:if(k){v=D.ach
x=1
break}x=8
return A.b(B.VZ(e),$async$RK)
case 8:v=t?D.Wo:D.aci
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0D(d,e)){v=D.ach
x=1
break}x=11
return A.b(B.VZ(e),$async$RK)
case 11:v=t?D.Wo:D.aci
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h77(d,e)){v=D.ach
x=1
break}x=14
return A.b(B.VZ(e),$async$RK)
case 14:v=D.Wo
x=1
break
case 13:v=t?D.Wo:D.aci
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RK,w)},
fqY(d,e){var x=0,w=A.j(y.y),v
var $async$fqY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0D(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0F(d),$async$fqY)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqY,w)},
hxW(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fy2(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hsV(d,e,f,g,h,i,j){return new B.a_b(e,j,d,g,h,i,f,null)},
fzW(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fzW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.av,u)
s=new A.au(C.av,u)
x=3
return A.b(A.bT(C.L,null,new B.fzZ(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fzW)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzW,w)},
fAq(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fAq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.av,u)
s=new A.au(C.av,u)
r=new A.au(C.av,u)
x=3
return A.b(A.bT(C.L,null,new B.fAs(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fAq)
case 3:q=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
r.T$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAq,w)},
hcm(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bt(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fN5(d,e){var x=0,w=A.j(y.H),v
var $async$fN5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.VZ(e),$async$fN5)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fN5,w)},
fUO:function fUO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUP:function fUP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ad8:function ad8(d,e){this.a=d
this.b=e},
fy2:function fy2(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_b:function a_b(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAO:function aAO(){this.c=this.a=this.d=null},
dbT:function dbT(d,e){this.a=d
this.b=e},
dbQ:function dbQ(d){this.a=d},
dbS:function dbS(d){this.a=d},
dbR:function dbR(d){this.a=d},
dbV:function dbV(){},
dbU:function dbU(d){this.a=d},
adB:function adB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDr:function aDr(d,e){this.a=d
this.b=e},
aGz:function aGz(d,e,f){this.a=d
this.b=e
this.c=f},
fzZ:function fzZ(d,e,f){this.a=d
this.b=e
this.c=f},
fzX:function fzX(d){this.a=d},
fzY:function fzY(d,e,f){this.a=d
this.b=e
this.c=f},
fAs:function fAs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAr:function fAr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdj(d,e,f,g,h){return B.hSO(d,e,f,g,h)},
hSO(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdj=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iL(r.dL(d,new B.cdk(s,e,h,g,f,q),y.g),y.l),$async$cdj)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdj,w)},
b0A(d,e,f,g,h){return B.hSP(d,e,f,g,h)},
hSP(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0A=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avY("GET",d)
o=A.h3w()
if(o==null)o=new A.My(A.a([],y.W))
x=7
return A.b(o.f8(0,s).df(0,C.Gy),$async$b0A)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CO(),$async$b0A)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ci(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0A,w)},
b0z(d){return B.hSM(d)},
hSM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vL(d,null).df(0,C.ok),$async$b0z)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.ma(A.m8(p.e)).cH(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share lan manifest web] "+A.w(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0z,w)},
cdi(d){return B.hSN(d)},
hSN(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vL(d,null).df(0,C.qr),$async$cdi)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ma(A.m8(q.e)).cH(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.am.$1("[doc share lan text web] "+A.w(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdi,w)},
cdk:function cdk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jB:function jB(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jf(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hSU(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Jf(C.a.b2(t,u.length))}return null},
hSV(d){var x=B.Jf(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hSQ(){var x,w=$.or(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7K(d){return B.hSR(d)},
hSR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bL),$async$a7K)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share my code] load "+d+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7K,w)},
a7L(d,e){return B.hSS(d,e)},
hSS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7L=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cL,null),$async$a7L)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share my code] save "+d+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7L,w)},
Ch(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ch=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ch)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jf(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7M(r),$async$Ch)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7K("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ch)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jf(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ch)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hSQ()
x=14
return A.b(B.a7M(m),$async$Ch)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7L("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ch)
case 15:k=f
x=16
return A.b(B.a7L("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ch)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ch)
case 19:v=m
x=1
break
case 18:case 12:++n
x=11
break
case 13:v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ch,w)},
a7M(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jf(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7K("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7M)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7M,w)},
a7N(d,e,f,g){return B.hSW(d,e,f,g)},
hSW(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7N=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jf(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7M(r),$async$a7N)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.cdq())>1048576||g.aW(d,new B.cdr())){v=B.Ff(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7Y("myCode",d,a0),$async$a7N)
case 4:u=a3
try{t=C.Y.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cr(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Ff(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0I(u,g.gI(d),a0),$async$a7N)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.or().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dL(d,new B.cds(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0B(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a7N)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
Ff(d,e,f,g,h){return B.hST(d,e,f,g,h)},
hST(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ff=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Ff)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cJ(a6,0,new B.cdm())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.or().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cN.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jj(a9,q)
a0=new A.L7(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Ff)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pj(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abn(a1.a,a4,"media",a1.d,a2).xG(m,n,new A.Eu(!0,q.c)),$async$Ff)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Ff)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRT(r),$async$Ff)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dL(a6,new B.cdn(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0B(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Ff)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRT(r),$async$Ff)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ff,w)},
b0B(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7K(t),$async$b0B)
case 3:s=g
r=y.aL.a(J.t(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cdl(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7L(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0B,w)},
Ob(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ob=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7K("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ob)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cr(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a3(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0C(k,a0),$async$Ob)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0H(h),$async$Ob)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W5(g,a0),$async$Ob)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdo(),q),n)
d=A.C(new A.Y(r,new B.cdp(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7L("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$Ob)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ob,w)},
b0C(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cr(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.j.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.inw(k,j)
C.d.v(s,i)
x=5
return A.b(B.DD(l,m,"Received via My Code",t,e,i),$async$b0C)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRT(s),$async$b0C)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0C,w)},
cdq:function cdq(){},
cdr:function cdr(){},
cds:function cds(){},
cdm:function cdm(){},
cdn:function cdn(){},
cdl:function cdl(){},
cdo:function cdo(){},
cdp:function cdp(){},
fUL(d,e){var x=0,w=A.j(y.H)
var $async$fUL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fUM(e),!1,null,y.H)),$async$fUL)
case 2:return A.h(null,w)}})
return A.i($async$fUL,w)},
bFE(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fUN(g,e,f),!1,null,y.y)),$async$bFE)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFE,w)},
fUM:function fUM(d){this.a=d},
fUN:function fUN(d,e,f){this.a=d
this.b=e
this.c=f},
VW:function VW(d,e){this.c=d
this.a=e},
aEN:function aEN(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dY7:function dY7(d,e){this.a=d
this.b=e},
W_:function W_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEQ:function aEQ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZg:function dZg(d){this.a=d},
dZh:function dZh(d){this.a=d},
dZi:function dZi(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZj:function dZj(d){this.a=d},
dZk:function dZk(d){this.a=d},
dZl:function dZl(d,e){this.a=d
this.b=e},
dZm:function dZm(d,e){this.a=d
this.b=e},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZo:function dZo(d){this.a=d},
dZr:function dZr(){},
dZp:function dZp(d){this.a=d},
dZq:function dZq(d,e){this.a=d
this.b=e},
bkP:function bkP(){},
VX:function VX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEO:function aEO(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dY8:function dY8(d){this.a=d},
dY9:function dY9(d){this.a=d},
h78(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hSY(d){var x=d.l3
if(x>=0)return x
return 4.99},
hSX(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdu(),w,w)
return w},
ho1(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdv(),w,w)
return w},
b0F(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0F)
case 7:s=f
r=A.w(p)
r=A.aT(J.t(s.a,"ngmy_doc_share_path_"+r))
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0F,w)},
a7P(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7P)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7P)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7P,w)},
VZ(d){var x=0,w=A.j(y.H),v,u
var $async$VZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$VZ)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$VZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$VZ,w)},
h77(d,e){var x,w,v
if(B.hSY(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hSX(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0D(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.ho1(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
ho2(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.ho1(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqq(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqq)
case 7:s=f
r=A.w(p)
r=A.eo(J.t(s.a,"ngmy_doc_share_usage_"+r))
if(r==null)r=0
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
x=6
break
case 3:x=2
break
case 6:v=0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqq,w)},
aqr(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqq(d),$async$aqr)
case 3:u=f
x=5
return A.b(A.az(),$async$aqr)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqr,w)},
aqp(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h78(d)
if(u<=0){v=!1
x=1
break}if(B.h77(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqq(e),$async$aqp)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqp,w)},
b0E(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jh(e,d),$async$b0E)
case 3:if(g){v=-1
x=1
break}u=B.h78(d)
if(u<=0){v=-1
x=1
break}if(B.h77(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqq(e),$async$b0E)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0E,w)},
cdx(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jh(e,d),$async$cdx)
case 3:if(h){v=!1
x=1
break}v=B.aqp(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdx,w)},
cdw(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdw=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdx(d,u,i.gUs()),$async$cdw)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdw,w)},
a7O(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7O=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUs()){v=!0
x=1
break}if(B.b0D(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.TH),$async$a7O)
case 5:x=k?3:4
break
case 3:B.ho2(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7O)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lc(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TH,"Doc Share for Organizations"),$async$a7O)
case 7:if(!k){v=!1
x=1
break}B.ho2(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7O)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7O,w)},
cdu:function cdu(){},
cdv:function cdv(){},
fVE(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fVE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fVE)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fnl.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fnl.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVE,w)},
iqn(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fnl.bt($.fnl,new B.fVG(d))},
fVG:function fVG(d){this.a=d},
foX(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$foX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.n2(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jl,null,y.H),$async$foX)
case 3:C.B5.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foX,w)},
agJ(d,e,f){var x=0,w=A.j(y.H),v
var $async$agJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fo_.n(0,d,new B.acQ(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agJ)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.H(["parts",e,"size",f],v,y.C),null)),$async$agJ)
case 2:return A.h(null,w)}})
return A.i($async$agJ,w)},
agD(d){return B.i8l(d)},
i8l(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fo_.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agD)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b7(s,new B.fsx(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.acQ(r)
$.fo_.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agD,w)},
RA(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.H0.n(0,d,u)
x=3
return A.b(B.S6(d,u),$async$RA)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RA,w)},
aPG(d){return B.i8j(d)},
i8j(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H0.h(0,d)
if(n!=null&&!C.aH.gau(n)){v=n
x=1
break}x=3
return A.b(B.S5(d),$async$aPG)
case 3:p=f
if(p!=null&&!C.aH.gau(p)){$.H0.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPG)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aM(r)
x=!J.cr(q)?9:10
break
case 9:B.RA(d,q)
x=11
return A.b(J.hk(s,d),$async$aPG)
case 11:case 10:v=q
x=1
break
u=2
x=8
break
case 6:u=5
m=t.pop()
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPG,w)},
i49(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eE(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wM(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2H(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bE,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.fye(r,t),!1,s)
A.fy(r,"error",new B.fyf(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iE(0,C.NH,new B.fyg())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2H,w)},
aQ_(d,e,f){return B.iaH(d,e,f)},
iaH(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQ_=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.V(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a2H(i),$async$aQ_)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S6(o,p),$async$aQ_)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agJ(k,j,s),$async$aQ_)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQ_,w)},
aPZ(d,e,f){return B.iaG(d,e,f)},
iaG(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPZ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQ_(d,e,f),$async$aPZ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2H(f),$async$aPZ)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H0.n(0,s,r)
$.RR.n(0,s,r)
x=11
return A.b(B.RA(s,r),$async$aPZ)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPZ,w)},
Ci(d,e,f,g,h,i){return B.hT6(d,e,f,g,h,i)},
hT6(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ci=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jB(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0L(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RA(s,d),$async$Ci)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Ci)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cP.gcu().aM(d)),$async$Ci)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.am.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.Bd(e),$async$Ci)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Ha(e,j),$async$Ci)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ci,w)},
W0(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bd(d),$async$W0)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cN.aw(99999)
n=p.b
l=o.type
l.toString
k=B.ho4(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jB(m,n,k,l,j,"From folder",null,B.b0L(),null)
$.ahc.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2H(o),$async$W0)
case 7:g=a1
x=g!=null&&!C.aH.gau(g)?8:10
break
case 8:$.H0.n(0,h,g)
$.RR.n(0,h,g)
B.RA(h,g)
x=9
break
case 10:x=11
return A.b(B.aPZ(d,m,o),$async$W0)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Ha(d,t),$async$W0)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
h7c(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h7c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.ho4(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ji(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gau(s)){v=B.Ci(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7c,w)},
Ji(d,e,f,g,h,i){return B.hT5(d,e,f,g,h,i)},
hT5(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ji=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L7(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ji)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.h7(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.SD(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S6(k,l),$async$Ji)
case 11:J.c6(q,k);++p
x=9
break
case 10:x=6
break
case 7:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
x=12
return A.b(j.a1(0),$async$Ji)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S6(k,new Uint8Array(A.cb(n))),$async$Ji)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agJ(r,q,g),$async$Ji)
case 16:f=new B.jB(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0L(),null)
x=17
return A.b(B.Bd(d),$async$Ji)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Ha(d,e),$async$Ji)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ji,w)},
W2(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$W2=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahc.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2H(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agD(s),$async$W2)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S5(u[o]),$async$W2)
case 9:n=a0
if(n==null||n.length===0){x=7
break}m=n.length
l=p+m
if(l<=f){p=l
x=7
break}k=f>p?f-p:0
if(k>=m){p=l
x=7
break}j=g-p
v=A.wM(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RR.h(0,s)
if(i==null)i=$.H0.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rQ(d,e),$async$W2)
case 12:i=a0
if(i!=null&&!C.aH.gau(i))$.RR.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wM(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W2,w)},
ho4(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gam(x):""
else w=e
switch(w.toLowerCase()){case"jpg":case"jpeg":case"jfif":return"image/jpeg"
case"png":return"image/png"
case"gif":return"image/gif"
case"webp":return"image/webp"
case"bmp":return"image/bmp"
case"tif":case"tiff":return"image/tiff"
case"mp4":case"m4v":return"video/mp4"
case"mov":return"video/quicktime"
case"webm":return"video/webm"
case"mkv":return"video/x-matroska"
case"avi":return"video/x-msvideo"
case"pdf":return"application/pdf"
case"txt":return"text/plain"
case"csv":return"text/csv"
case"json":return"application/json"
case"doc":return"application/msword"
case"docx":return"application/vnd.openxmlformats-officedocument.wordprocessingml.document"
case"xls":return"application/vnd.ms-excel"
case"xlsx":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
case"ppt":return"application/vnd.ms-powerpoint"
case"pptx":return"application/vnd.openxmlformats-officedocument.presentationml.presentation"
case"zip":return"application/zip"
case"rar":return"application/vnd.rar"
case"7z":return"application/x-7z-compressed"
case"mp3":return"audio/mpeg"
case"wav":return"audio/wav"
case"aac":return"audio/aac"
case"heic":case"heif":return"image/heic"
default:return v}},
rQ(d,e){return B.hT7(d,e)},
hT7(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rQ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RR.h(0,f)
if(e==null)e=$.H0.h(0,f)
if(e!=null&&!C.aH.gau(e)){v=e
x=1
break}s=$.ahc.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2H(s),$async$rQ)
case 9:r=a3
if(r!=null&&!C.aH.gau(r)){$.H0.n(0,f,r)
$.RR.n(0,f,r)
B.RA(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.agD(f),$async$rQ)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azB(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S5(g[l]),$async$rQ)
case 16:k=a3
if(k!=null&&!C.aH.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apI()
if(!C.aH.gau(r)){$.H0.n(0,f,r)
$.RR.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPG(f),$async$rQ)
case 17:j=a3
if(j!=null&&!C.aH.gau(j)){$.RR.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.W2(a0,a1,0,g),$async$rQ)
case 20:i=a3
if(i!=null&&!C.aH.gau(i)){h=new Uint8Array(A.cb(i))
$.H0.n(0,f,h)
$.RR.n(0,f,h)
B.RA(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rQ,w)},
hTa(d){var x,w,v=$.ahc.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hTb(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hT8(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqx(d,e,f,g,h){return B.hT9(d,e,f,g,h)},
hT9(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqx=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahc.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2H(s),$async$aqx)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rQ(g,e),$async$aqx)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f0().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.iz(d).xG(h,r,new A.Eu(!0,e.c)),$async$aqx)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share upload web] "+e.b+": "+A.w(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqx,w)},
ho6(d,e,f,g,h){var x,w,v,u,t=$.ho5
$.ho5=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdI.n(0,t,new B.bxD(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azB(u)))
return t},
h7d(d){var x=0,w=A.j(y.H)
var $async$h7d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h7d,w)},
Jj(d,e){var $async$Jj=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahc.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.V(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qr(B.W2(d,e,p,o<q?o:q),$async$Jj,w)
case 8:n=a1
x=n!=null&&!C.aH.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qr(A.Gy(n),$async$Jj,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qr(B.agD("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jj,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qr(B.S5(h[l]),$async$Jj,w)
case 18:k=a1
x=k!=null&&!C.aH.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qr(A.Gy(k),$async$Jj,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qr(B.rQ(d,e),$async$Jj,w)
case 22:j=a1
x=j!=null&&!C.aH.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qr(A.Gy(A.wM(j,p,o<i?o:i)),$async$Jj,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qr(null,0,w)
case 2:return A.qr(t.at(-1),1,w)}})
var x=0,w=A.hwQ($async$Jj,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hyC(w)},
b0N(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdI.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5x(),$async$b0N)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0N,w)},
W1(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$W1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdI.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5x(),$async$W1)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agJ(r.c,u,r.z),$async$W1)
case 4:t=new B.jB(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0L(),null)
u=r.a
x=5
return A.b(B.Bd(u),$async$W1)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Ha(u,s),$async$W1)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W1,w)},
a7V(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdI.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahU(u[s]),$async$a7V)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a7V,w)},
cdK(d,e,f){var x=0,w=A.j(y.H)
var $async$cdK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCE(d,e,f),$async$cdK)
case 2:return A.h(null,w)}})
return A.i($async$cdK,w)},
cdL(d,e,f){var x=0,w=A.j(y.H)
var $async$cdL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCF(d,e,f),$async$cdL)
case 2:return A.h(null,w)}})
return A.i($async$cdL,w)},
Fg(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bd(d),$async$Fg)
case 2:p=g
J.nQ(p,new B.cdJ(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H0.W(0,v)
$.ahc.W(0,e)
x=3
return A.b(B.agD(v),$async$Fg)
case 3:u=g
$.fo_.W(0,v)
x=4
return A.b(A.az(),$async$Fg)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fg)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fg)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahU(s[q]),$async$Fg)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahU(v),$async$Fg)
case 13:x=14
return A.b(B.Ha(d,p),$async$Fg)
case 14:return A.h(null,w)}})
return A.i($async$Fg,w)},
b0M(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rQ(d,e),$async$b0M)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.foX(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0M,w)},
Bd(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bd)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fyh(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bd,w)},
Ha(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Ha=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Ha)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fCs(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$Ha)
case 3:return A.h(null,w)}})
return A.i($async$Ha,w)},
bCE(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bd(d),$async$bCE)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fws(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFL(f))
x=4
return A.b(B.Ha(d,u),$async$bCE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCE,w)},
bCF(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bd(d),$async$bCF)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fwt(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cNZ(f))
x=4
return A.b(B.Ha(d,u),$async$bCF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCF,w)},
acQ:function acQ(d){this.a=d},
fsx:function fsx(){},
fye:function fye(d,e){this.a=d
this.b=e},
fyf:function fyf(d){this.a=d},
fyg:function fyg(){},
cdJ:function cdJ(d){this.a=d},
bxD:function bxD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.z=_.y=0},
fyh:function fyh(){},
fCs:function fCs(){},
fws:function fws(d){this.a=d},
fwt:function fwt(d){this.a=d},
a7W(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aW(d,new B.cdO())?3:4
break
case 3:x=5
return A.b(B.b0O(d,e),$async$a7W)
case 5:u=g
if(u!=null){t=u.c
B.Od(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gH(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b0J(s),$async$a7W)
case 10:case 9:if(g){v=new A.QW(1,D.Tk,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W3(d,e),$async$a7W)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W8(!0,!0,d,e),$async$a7W)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Od(d,D.Aa,e,t)
v=new A.QW(p,D.Aa,t)
x=1
break}v=B.cdN(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7W,w)},
W3(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7Y(null,d,e),$async$W3)
case 3:p=g
try{u=C.Y.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cr(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0I(p,d.length,e),$async$W3)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdL(e,C.d.gH(d).a,r.b),$async$W3)
case 7:case 6:q=r.a
x=8
return A.b(B.Od(d,D.Tk,e,q),$async$W3)
case 8:v=new A.QW(d.length,D.Tk,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W3,w)},
W4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n3)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7X(d,e),$async$W4)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdG(s,d,e,t),$async$W4)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0J(t),$async$W4)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rQ(e,d),$async$W4)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W3(A.a([d],y.r),e),$async$W4)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
W6(){var x=0,w=A.j(y.H)
var $async$W6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h76(),$async$W6)
case 2:x=3
return A.b(B.aSf(),$async$W6)
case 3:return A.h(null,w)}})
return A.i($async$W6,w)},
a7X(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0L()
x=3
return A.b(B.cdK(e,d.a,u),$async$a7X)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
Od(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Od=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tk&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7X(p,f),$async$Od)
case 6:o=i
case 7:switch(s){case 0:x=9
break
case 1:x=10
break
case 2:x=11
break
case 3:x=12
break
case 4:x=13
break
default:x=8
break}break
case 9:x=14
return A.b(B.cdF(o,p,u,f),$async$Od)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdG(o,p,f,t),$async$Od)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdE(o,u,p,f),$async$Od)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Od,w)},
b0O(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdM(e,d),$async$b0O)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W8(!1,!0,d,e),$async$b0O)
case 4:u=g
if(u!=null){t=u.b
v=new A.QW(u.a,D.Aa,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0O,w)},
cdM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.W2(d,s,0,1),$async$cdM)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.J)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdM,w)},
cdN(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7Y(null,d,e),$async$cdN)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.ho3(u)
if(t.length>800){v=null
x=1
break}v=new A.QW(d.length,D.dNV,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdN,w)},
aqy(d,e,f){return B.hTe(d,e,f)},
hTe(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqy=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.np(g,1)
x=B.h7b(g)?3:4
break
case 3:x=5
return A.b(B.cdH(g),$async$aqy)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.np(g,13))
try{k=B.Fh(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.np(g,13))
u=9
x=12
return A.b(B.b0H(q),$async$aqy)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W5(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h7a(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W5(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.Jk(C.a.i(J.np(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.Jk(C.a.i(J.np(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aC(k,0,k.length-1)
else h=k
v=B.Jk(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W5(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqy,w)},
Jk(d,e,f){return B.hTc(d,e,f)},
hTc(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jk=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aC(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0z(r),$async$Jk)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0z(A.cF(s,0,null)),$async$Jk)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdj(o,r,a1,n,a2),$async$Jk)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdi(q),$async$Jk)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W5(l,a2),$async$Jk)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cr(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ab(d)
$.am.$1("[doc share lan import] "+A.w(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jk,w)},
a7Y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7Y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rQ(f,r),$async$a7Y)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcu().aM(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Y,w)},
W5(d,e){return B.hTd(d,e)},
hTd(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W5=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Y.aQ(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.t(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.t(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.t(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.t(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aU(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cI.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Ci(i,a3,d,k,l,o),$async$W5)
case 9:h=a5
if(h!=null)J.c6(n,h)
x=7
break
case 8:f=J.ad(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.ab(a1)
$.am.$1("[doc share bundle] "+A.w(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$W5,w)},
Oc:function Oc(d,e){this.a=d
this.b=e},
cdO:function cdO(){},
a2g(d){var x=A.S(d).ax.a===C.J,w=x?D.ahP:D.afo,v=x?D.ajB:C.c,u=x?C.aQ:C.R,t=x?C.bK:C.am,s=x?D.agP:C.aO
return new A.aHO([w,s,v,u,t,x?C.fn:C.bQ])},
hDX(d,e){var x=e?C.w.j(0.72):C.aV
return A.cf(null,x,!0,null,new B.fZN(e),d,null,!0,!0,y.N)},
cdt(d,e,f,g,h,i,j,k,l){return new B.VY(e,l,d,f,k,j,g,h,i,null)},
a_d(d,e,f,g,h,i,j){return new B.bfn(g,h,j,e,i,d,f,null)},
fZN:function fZN(d){this.a=d},
a_a:function a_a(d,e){this.c=d
this.a=e},
aAN:function aAN(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbP:function dbP(d){this.a=d},
dbN:function dbN(d){this.a=d},
dbO:function dbO(d){this.a=d},
bxf:function bxf(){},
VY:function VY(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEP:function aEP(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZe:function dZe(d){this.a=d},
dYC:function dYC(d,e){this.a=d
this.b=e},
dYD:function dYD(d,e){this.a=d
this.b=e},
dYb:function dYb(d,e,f){this.a=d
this.b=e
this.c=f},
dYa:function dYa(d){this.a=d},
dYc:function dYc(d,e){this.a=d
this.b=e},
dYh:function dYh(d,e,f){this.a=d
this.b=e
this.c=f},
dYg:function dYg(d){this.a=d},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d){this.a=d},
dYz:function dYz(d,e,f){this.a=d
this.b=e
this.c=f},
dYw:function dYw(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYf:function dYf(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYG:function dYG(){},
dYl:function dYl(d){this.a=d},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d,e){this.a=d
this.b=e},
dYT:function dYT(d,e){this.a=d
this.b=e},
dYP:function dYP(d){this.a=d},
dYO:function dYO(d){this.a=d},
dYQ:function dYQ(){},
dYR:function dYR(){},
dYS:function dYS(d,e){this.a=d
this.b=e},
dYU:function dYU(){},
dYV:function dYV(d){this.a=d},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYI:function dYI(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYK:function dYK(d){this.a=d},
dYL:function dYL(d){this.a=d},
dYM:function dYM(d){this.a=d},
dYi:function dYi(){},
dYj:function dYj(d){this.a=d},
dYk:function dYk(d,e){this.a=d
this.b=e},
dYe:function dYe(d,e){this.a=d
this.b=e},
dYd:function dYd(d,e,f){this.a=d
this.b=e
this.c=f},
dYA:function dYA(d){this.a=d},
dYB:function dYB(d,e,f){this.a=d
this.b=e
this.c=f},
dYu:function dYu(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dYn:function dYn(d,e,f){this.a=d
this.b=e
this.c=f},
dYr:function dYr(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYt:function dYt(){},
dYv:function dYv(d,e){this.a=d
this.b=e},
dYo:function dYo(d){this.a=d},
dYm:function dYm(d,e,f){this.a=d
this.b=e
this.c=f},
dYp:function dYp(){},
dYF:function dYF(d){this.a=d},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dYW:function dYW(d){this.a=d},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYY:function dYY(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZc:function dZc(){},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d,e,f){this.a=d
this.b=e
this.c=f},
dZ4:function dZ4(d,e,f){this.a=d
this.b=e
this.c=f},
dZ7:function dZ7(d,e){this.a=d
this.b=e},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
aAK:function aAK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfm:function bfm(d,e,f){this.c=d
this.d=e
this.a=f},
dbL:function dbL(){},
dbM:function dbM(){},
ad9:function ad9(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=k
_.z=l
_.Q=m
_.a=n},
dc8:function dc8(){},
dc7:function dc7(d){this.a=d},
a_c:function a_c(d,e,f){this.c=d
this.d=e
this.a=f},
aAP:function aAP(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dc4:function dc4(d){this.a=d},
dc5:function dc5(d,e,f){this.a=d
this.b=e
this.c=f},
dc6:function dc6(d,e){this.a=d
this.b=e},
dc2:function dc2(d,e){this.a=d
this.b=e},
dc0:function dc0(d){this.a=d},
dbZ:function dbZ(d){this.a=d},
dbW:function dbW(d){this.a=d},
dc1:function dc1(d){this.a=d},
dbY:function dbY(d){this.a=d},
dc3:function dc3(d){this.a=d},
dc_:function dc_(d){this.a=d},
dbX:function dbX(d){this.a=d},
a_9:function a_9(d,e,f){this.c=d
this.d=e
this.a=f},
aAM:function aAM(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbI:function dbI(d){this.a=d},
dbH:function dbH(d,e){this.a=d
this.b=e},
dbJ:function dbJ(d){this.a=d},
dbG:function dbG(d,e){this.a=d
this.b=e},
dbK:function dbK(d){this.a=d},
dbF:function dbF(d,e){this.a=d
this.b=e},
dbB:function dbB(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbD:function dbD(d,e){this.a=d
this.b=e},
dbE:function dbE(d){this.a=d},
Qv:function Qv(d,e,f){this.c=d
this.d=e
this.a=f},
aAS:function aAS(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcl:function dcl(d){this.a=d},
dcm:function dcm(d){this.a=d},
dcn:function dcn(d){this.a=d},
dco:function dco(d){this.a=d},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcq:function dcq(d){this.a=d},
dcs:function dcs(d){this.a=d},
dcr:function dcr(d){this.a=d},
a_e:function a_e(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAQ:function aAQ(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dch:function dch(d,e){this.a=d
this.b=e},
dci:function dci(d,e){this.a=d
this.b=e},
dc9:function dc9(d,e,f){this.a=d
this.b=e
this.c=f},
dca:function dca(d){this.a=d},
dcb:function dcb(){},
dcg:function dcg(){},
dcc:function dcc(d,e){this.a=d
this.b=e},
dcd:function dcd(d,e){this.a=d
this.b=e},
dce:function dce(d,e){this.a=d
this.b=e},
dcf:function dcf(d,e){this.a=d
this.b=e},
ad7:function ad7(d,e){this.c=d
this.a=e},
dbA:function dbA(d){this.a=d},
a_8:function a_8(d){this.a=d},
aAL:function aAL(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_f:function a_f(d,e){this.c=d
this.a=e},
aAR:function aAR(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dck:function dck(d){this.a=d},
dcj:function dcj(d){this.a=d},
bfn:function bfn(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hTf(){var x,w=$.or(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
Oe(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Oe)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bL),$async$Oe)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Oe,w)},
a7Z(d){return B.hTg(d)},
hTg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7Z)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cL,null),$async$a7Z)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7Z,w)},
W7(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oe(),$async$W7)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dM(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a7Z(s),$async$W7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W7,w)},
W8(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W8=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$W8)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cdQ(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hTf()
t=A.U(u).k("N<1,a8<n,aE>>")
r=A.C(new A.N(u,new B.cdR(s),t),t.k("ak.E"))
x=6
return A.b(B.Oe(),$async$W8)
case 6:q=i
J.aK(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a7Z(q),$async$W8)
case 7:x=8
return A.b(B.a8_(r,u,g,s),$async$W8)
case 8:v=new A.bra(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W8,w)},
aqz(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oe(),$async$aqz)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqz,w)},
cdS(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oe(),$async$cdS)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdS,w)},
a8_(d,e,f,g){return B.hTh(d,e,f,g)},
hTh(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8_=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqx("media",r,new B.cdP(s,e,g),f,q),$async$a8_)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W7(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8_)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W7(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8_)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W7(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8_)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8_,w)},
Fh(d,e,f){return B.hTi(d,e,f)},
hTi(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fh=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fh)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqz(b3),$async$Fh)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iJ,null,g),$async$Fh)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqz(b3),$async$Fh)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oe(),$async$Fh)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.j.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cr(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pj(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abn(a8.a,b0,"media",a8.d,a9).D9(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0A(k,n,o,s,b7),$async$Fh)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.w(o)+": "+A.w(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.ad(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pj(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abn(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fh)
case 31:u=2
x=30
break
case 28:u=27
b5=t.pop()
x=30
break
case 27:x=2
break
case 30:case 26:case 24:x=21
break
case 22:x=19
break
case 20:a0=y.z
a0=A.dM(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7Z(e),$async$Fh)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fh,w)},
cdQ:function cdQ(){},
cdR:function cdR(d){this.a=d},
cdP:function cdP(d,e,f){this.a=d
this.b=e
this.c=f},
aSf(){var x=0,w=A.j(y.H),v,u
var $async$aSf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i3m=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aSf)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aSf)
case 3:u=$.hcz
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aSf)
case 4:$.hcz=$.icu=$.icv=null
return A.h(null,w)}})
return A.i($async$aSf,w)},
fC3(d){var x=0,w=A.j(y.H),v,u
var $async$fC3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8W){x=1
break}u=new A.bk($.bE,y.d4)
d.c=new B.fC4(new A.c2(u,y.aY))
x=3
return A.b(u.iE(0,C.ia,new B.fC5()),$async$fC3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fC3,w)},
ics(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hT_(x):x},
hcD(d){var x=0,w=A.j(y.T),v,u,t
var $async$hcD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqB(u)
x=1
break}v=B.h7a(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hcD,w)},
hcC(d){var x=0,w=A.j(y.T),v,u,t
var $async$hcC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqC(u)
x=1
break}v=B.h7a(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hcC,w)},
fVn(d){var x=0,w=A.j(y.T),v
var $async$fVn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqC(d),$async$fVn)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVn,w)},
bDx(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hcC(d),$async$bDx)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDx,w)},
fpO(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fpO=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.W1(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Ci(d.apI(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpO,w)},
Hc(d,e,f){return B.ieU(d,e,f)},
ieU(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hc=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hcD(a1),$async$Hc)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aQ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a7(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hFW().aG1(D.dC7,null),$async$Hc)
case 4:l=d.hcz=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azB(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bE,y.b1)
l.y=new B.fCF(f,k,new B.fCG(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8z(0,new B.Yf(r,"offer")),$async$Hc)
case 5:d=l
x=7
return A.b(l.amc(0),$async$Hc)
case 7:x=6
return A.b(d.a8r(0,a4),$async$Hc)
case 6:x=8
return A.b(B.fC3(l),$async$Hc)
case 8:x=9
return A.b(l.aqu(),$async$Hc)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ics(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqD(m,h),$async$Hc)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.ho3(h)
case 11:v=new A.bqq(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hc,w)},
fC4:function fC4(d){this.a=d},
fC5:function fC5(){},
fCG:function fCG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCF:function fCF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fCE:function fCE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
igY(d){switch(d){case"new":return D.exp
case"checking":return D.exq
case"connected":return D.exs
case"completed":return D.exr
case"failed":return D.exu
case"disconnected":return D.exv
case"closed":return D.aQs
case"count":return D.ext}return D.aQs},
igZ(d){switch(d){case"new":return D.aQt
case"gathering":return D.exw
case"complete":return D.a8W}return D.aQt},
irR(d){switch(d){case"stable":return D.exx
case"have-local-offer":return D.exy
case"have-local-pranswer":return D.exA
case"have-remote-offer":return D.exz
case"have-remote-pranswer":return D.exB
case"closed":return D.aQz}return D.aQz},
iq4(d){switch(d){case"new":return D.aQw
case"connecting":return D.aQx
case"connected":return D.aQy
case"closed":return D.a8X
case"disconnected":return D.aQv
case"failed":return D.aQu}return D.a8X},
aaj:function aaj(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e){this.a=d
this.b=e},
Ye:function Ye(d,e){this.a=d
this.b=e},
Pf:function Pf(d,e){this.a=d
this.b=e},
FL:function FL(d,e){this.a=d
this.b=e},
cru:function cru(){},
h8W(d){var x=new B.FK()
x.a=d
x.b=!0
return x},
FK:function FK(){this.b=this.a=$},
aai:function aai(){},
av8:function av8(){},
Yf:function Yf(d,e){this.a=d
this.b=e},
h76(){var x=0,w=A.j(y.H)
var $async$h76=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h76,w)},
h79(d,e,f){var x=0,w=A.j(y.T),v
var $async$h79=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n3))){v=null
x=1
break}v=B.fVE(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h79,w)},
ho3(d){var x,w=F.aeO.a5g(C.dS.aM(d),null)
if(w.length===0){x=C.dS.aM(d)
return C.cP.gcu().aM(x)}return C.cP.gcu().aM(w)},
hSZ(d){var x,w,v=C.cI.aM(d)
try{x=C.c9.cH(0,F.aeN.bfE(v,!1))
return x}catch(w){x=C.c9.cH(0,v)
return x}},
h7a(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hSZ(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cH(0,C.cI.aM(x))
return v}catch(u){return x}}return null},
hT_(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a0(t,"a=extmap"))continue
if(C.a.a0(t,"a=ssrc"))continue
if(C.a.a0(t,"a=msid"))continue
if(C.a.a0(t,"a=rtcp"))continue
if(C.a.a0(t,"a=rtpmap"))continue
if(C.a.a0(t,"a=fmtp"))continue
if(C.a.a0(t,"a=rtcp-fb"))continue
if(C.a.a0(t,"a=mid:"))continue
if(C.a.a0(t,"a=group:"))continue
if(C.a.a0(t,"a=setup:"))continue
if(C.a.a0(t,"a=ice-options:"))continue
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hT0(){var x,w=$.or(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0G(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bL),$async$b0G)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share qr stash] load "+A.w(p)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0G,w)},
cdy(d,e){return B.hT1(d,e)},
hT1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdy=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cL,null),$async$cdy)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share qr stash] save "+A.w(p)+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdy,w)},
b0J(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0G(d),$async$b0J)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0J,w)},
b0I(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0I=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hT0()
r=C.a.i(f)
t=C.dS.aM(s)
x=3
return A.b(B.cdy(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0I)
case 3:if(!h){v=null
x=1
break}v=new A.a1g("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0I,w)},
b0H(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0G(o),$async$b0H)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cH(0,C.cI.aM(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0H,w)},
cdz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEu("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cL),$async$cdz)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdz,w)},
b0K(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jg(),$async$b0K)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0K,w)},
aqu(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqu)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0K(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqu,w)},
aqs(d,e){var x=0,w=A.j(y.H)
var $async$aqs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqs)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqs)
case 2:return A.h(null,w)}})
return A.i($async$aqs,w)},
a7R(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7R=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7R)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jg(),$async$a7R)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ao(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a7Q(s),$async$a7R)
case 5:x=6
return A.b(B.aqs(f,u),$async$a7R)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7R,w)},
a7S(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7S=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7S)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jg(),$async$a7S)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a3(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ao(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqs(g,q),$async$a7S)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7Q(u),$async$a7S)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
a7T(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7T=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7T)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jg(),$async$a7T)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b0D(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7T)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a7T)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
cdA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdA)
case 7:s=f
p=A.w(n)
r=A.aT(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aQ(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a3(q,y.N,y.z)
v=p
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdA,w)},
Jh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdA(d),$async$Jh)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0K(t),$async$Jh)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqt(d),$async$Jh)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0D(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqt(d),$async$Jh)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jh,w)},
aqt(d){var x=0,w=A.j(y.H)
var $async$aqt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqt)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqt)
case 2:return A.h(null,w)}})
return A.i($async$aqt,w)},
b0L(){var x,w=$.or(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7U(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h7b(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdD(d){return B.hT3(d)},
hT3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7U(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bL),$async$cdD)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share short code] load "+d+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdD,w)},
aqw(d,e){return B.hT4(d,e)},
hT4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7U(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cL,null),$async$aqw)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share short code] save "+d+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqw,w)},
cdF(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdF=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7U(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqw(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdF)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdF,w)},
cdE(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7U(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqw(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdE,w)},
cdG(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7U(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqw(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdG,w)},
cdH(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h7b(d)){v=null
x=1
break}x=3
return A.b(B.cdD(d),$async$cdH)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a7(u)
s=t.h(u,"lanPayload")
r=C.a.i(J.k(s==null?"":s))
if(r.length!==0){v=r
x=1
break}s=t.h(u,"inlinePayload")
q=C.a.i(J.k(s==null?"":s))
if(q.length!==0){v=q
x=1
break}t=t.h(u,"stashToken")
p=C.a.i(J.k(t==null?"":t))
if(p.length===0){v=null
x=1
break}v="NGMYDOCSYNC1|"+p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdH,w)},
a80(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a80=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a80)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bL),$async$a80)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a80,w)},
aqA(d){return B.hTj(d)},
hTj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aqA)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cL,null),$async$aqA)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqA,w)},
aqB(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqB)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a80(),$async$aqB)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cH(0,C.cI.aM(q))
if(J.j7(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dM(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqA(s),$async$aqB)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.w(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqB,w)},
aqD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aqD)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a80(),$async$aqD)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dM(A.a3(s,r,q),r,q)
r=C.dS.aM(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqA(u),$async$aqD)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqD,w)},
aqC(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqC)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a80(),$async$aqC)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cH(0,C.cI.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqC,w)},
apx(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qi)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apx)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.he),$async$apx)
case 7:q=g
o=q
o=o==null?null:J.eR(J.vU(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.t()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apx,w)},
inw(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fTF(d){return B.iny(d)},
iny(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fTF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iz("media").Lk(d,3600),$async$fTF)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase signed url] "+d+": "+A.w(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fTF,w)},
DD(d,e,f,g,h,i){var x=null
return B.inv(d,e,f,g,h,i)},
inv(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DD=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.ho6(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h7d(r),$async$DD)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fTF(o),$async$DD)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7V(r),$async$DD)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aTZ)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.My(A.a([],g))
x=15
return A.b(d.f8(0,A.avY("GET",A.cF(n,0,null))).df(0,C.Gy),$async$DD)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7V(r),$async$DD)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L7(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DD)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0N(r,k),$async$DD)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DD)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.W1(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a7V(r),$async$DD)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DD,w)},
aRT(d){return B.inx(d)},
inx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iz("media").W(0,d),$async$aRT)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRT,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[157]
O=c[47]
F=c[263]
I=c[148]
P=c[233]
E=c[225]
G=c[94]
Q=c[195]
R=c[149]
S=c[231]
K=c[268]
L=c[276]
B=a.updateHolder(c[22],B)
D=c[274]
T=c[194]
M=c[215]
U=c[73]
V=c[257]
W=c[79]
X=c[62]
N=c[93]
Y=c[275]
B.crv.prototype={
aG1(d,e){return this.cPt(d,e)},
cPt(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aG1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.T(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dM(r,s,t)
t.v(0,d)
u=new q(A.kg(A.cv(t)))
t=J.k(u)
v=B.hXX(C.cP.gcu().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aG1,w)}}
B.b5V.prototype={
bBS(d){var x=this,w=x.w
w.onclose=A.hp(new B.crq(x))
w.onopen=A.hp(new B.crr(x))
w.onmessage=A.hp(new B.crs(x))
w.onbufferedamountlow=A.hp(new B.crt(x))},
gdd(d){return this.x},
aiq(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FK()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h8W(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiq)
case 8:v=t.h8W(s.aoH(f,0,null))
x=1
break
case 7:case 4:v=B.h8W(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiq,w)}}
B.b5W.prototype={
bBT(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crw(x)))
w.addEventListener("icecandidate",A.hp(new B.crx(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.cry(x)))
w.onicegatheringstatechange=A.hp(new B.crz(x))
w.addEventListener("signalingstatechange",A.hp(new B.crA(x)))
if(!$.hgy())w.addEventListener("connectionstatechange",A.hp(new B.crB(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crC(x)))
w.addEventListener("track",A.hp(new B.crD(x)))},
amc(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kg(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amc)
case 3:t=f
v=new B.Yf(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amc,w)},
a8r(d,e){return this.bqR(0,e)},
bqR(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8r)
case 2:return A.h(null,w)}})
return A.i($async$a8r,w)},
a8z(d,e){return this.brb(0,e)},
brb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8z)
case 2:return A.h(null,w)}})
return A.i($async$a8z,w)},
aqu(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yf(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqu,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.ad8.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_b.prototype={
S(){return new B.aAO()},
gd1(){return this.c}}
B.aAO.prototype={
Y(){this.a3()
this.aeZ()},
aeZ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0E(u.e,u.c),$async$aeZ)
case 2:t=e
if(v.c!=null)v.m(new B.dbT(v,t))
return A.h(null,w)}})
return A.i($async$aeZ,w)},
QS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqp(t.e,t.c,!1),$async$QS)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fim)
x=1
break}x=4
return A.b(B.a7P(u.a.c,"individual"),$async$QS)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6Q(A.eb(new B.dbQ(u),!1,null,y.H)),$async$QS)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QS,w)},
JF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fzW(o),$async$JF)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7T(o.e,r,s,q),$async$JF)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ffn)
x=1
break}x=5
return A.b(B.a7P(u.a.c,"member"),$async$JF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6Q(A.eb(new B.dbS(u),!1,null,y.H)),$async$JF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JF,w)},
yB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7O(t.e,o,t.f,t.r,t.w,s),$async$yB)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7P(u.a.c,"org_owner"),$async$yB)
case 4:x=5
return A.b(B.aqu(u.a.c),$async$yB)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fAq(o),$async$yB)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7R(s,t,o,q.c),$async$yB)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ffk)
x=1
break}x=10
return A.b(B.aqu(u.a.c),$async$yB)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6Q(A.eb(new B.dbR(u),!1,null,y.H)),$async$yB)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yB,w)},
B(d){var x,w,v,u=this,t=null,s=A.S(d).ax.a===C.J,r=s?C.jz:C.qe,q=B.h78(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h2,24)],y.V)
v=y.p
w=A.q(t,A.x(A.a([A.q(t,D.fC9,C.f,t,t,new A.p(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h9,t,t,t),C.aC,D.fVX,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.p(t,t,t,p,w,D.c8r,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lY(new B.dbV(),t),C.U,w,C.dX,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.R,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adB(C.f4,C.aD5,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gciD(),t),C.af],v))
p.push(new B.adB(C.pn,C.a4A,"Team Member","Sign in with your organization access code + password",u.gcju(),t))
p.push(C.af)
p.push(new B.adB(C.apa,C.a6d,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcj_(),t))
return A.c4(t,r,A.bn(!0,A.ch(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amg,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adB.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aJ(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a9(C.a6,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nV,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.z5,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDr.prototype={}
B.aGz.prototype={}
B.jB.prototype={
mI(d){var x=this.b,w=C.a.p0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gara(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.j.ad(x/1024,1)+" KB"
if(x<1073741824)return C.j.ad(x/1048576,1)+" MB"
return C.j.ad(x/1073741824,2)+" GB"},
aj(){var x,w=this,v=A.T(y.N,y.z)
v.n(0,"id",w.a)
v.n(0,"name",w.b)
v.n(0,"mime",w.c)
v.n(0,"sizeBytes",w.d)
v.n(0,"createdAt",w.e)
x=w.f
if(x!=null&&C.a.i(x).length!==0)v.n(0,"note",x)
x=w.r
if(x!=null&&C.a.i(x).length!==0)v.n(0,"fromSender",x)
x=w.w
if(x!=null&&C.a.i(x).length!==0)v.n(0,"shortCode",x)
x=w.x
if(x!=null&&C.a.i(x).length!==0)v.n(0,"stashToken",x)
return v},
bf7(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jB(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cNZ(d){return this.bf7(null,d)},
aFL(d){return this.bf7(d,null)}}
B.VW.prototype={
S(){return new B.aEN(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEN.prototype={
Y(){this.a3()
this.af_()},
af_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ch(u.a.c),$async$af_)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dY7(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af_,w)},
af0(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$af0)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fjg)
case 1:return A.h(v,w)}})
return A.i($async$af0,w)},
a_r(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_r=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apx(s.d,4),$async$a_r)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tn(r,"ngmy_my_code_"+m+".png"),$async$a_r)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_r,w)},
aiS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaX("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiS,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jz:C.qe,m=o?C.c:C.R,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m0
else if(q.e==null)x=A.at(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.U,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a52,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a9(C.a6,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.alP,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.ch(A.x(A.a([x,C.n9,w,C.l2,new A.em(A.q(p,A.qa(p,p,!1,B.hSV(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.D2,C.VM,q.gcb6(),p),1),C.au,A.E(A.dh(C.zu,C.abg,q.gcb7(),A.bp(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3l,D.fRx,q.gcyi(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.O7,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.W_.prototype={
S(){return new B.aEQ(new A.au(C.av,$.aw()),A.k8(!0,null,!0,!0,null,null,!1))}}
B.aEQ.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jf(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jf(u.d.a.a)
if(t==null){u.m(new B.dZg(u))
x=1
break}u.m(new B.dZh(u))
s=u.a
r=s.c
x=3
return A.b(B.a7N(s.d,new B.dZi(u),t,r),$async$a_s)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZj(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a2H(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2H=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZk(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rQ(r.a.c,q),$async$a2H)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZl(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiE(p,m,l,j,k),$async$a2H)
case 8:o=e
if(r.c!=null)r.m(new B.dZm(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZn(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZo(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2H,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ahP:D.afo,h=j?D.ajB:C.c,g=j?C.aQ:C.R,f=j?C.bK:C.am,e=j?D.agP:C.aO
i=[i,e,h,g,f,j?C.fn:C.bQ]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dx(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dx(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bWS,C.f,k,k,new A.p(k,k,k,A.m(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fr,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a52,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uQ(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkP()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.O2,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZp(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mw,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.L(i[1],C.r,1)
m=J.Mb(l.a.d,4)
m=A.C(new A.N(m,new B.dZq(x,new A.aHO(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lf,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.U,e,C.U,q,C.d7,p,C.U,A.q(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.eD,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fdS)
else q.push(A.X(C.lN,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cT(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b4,new A.p(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eW,k,k,k)],r))}e=A.E(A.ch(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bEu,k,k,C.ah),1)
u=l.f?k:l.gcyj()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a3l,D.fSD,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcb8()
t=A.bp(C.aE,k,k,0,C.c,k,C.nB,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bn(!0,A.lB(new B.dZr(),A.x(A.a([e,new A.D(D.bDZ,A.x(A.a([s,C.U,i,C.af,A.bI(l.f?C.tu:D.fQS,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cw,C.a_A,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkP.prototype={
oX(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bB,v.length),C.aP)}}
B.VX.prototype={
S(){return new B.aEO()}}
B.aEO.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b5,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b5,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.av,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.T$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a2()},
af1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dY8(r))
u=3
p=r.a
o=p.c
p=p.d
n=r.d
n===$&&A.c()
n=n.a.a
m=r.e
m===$&&A.c()
m=m.a.a
m=C.a.i(m)!==C.a.i(p)?m:null
l=r.f
l===$&&A.c()
l=l.a.a
x=6
return A.b(B.a7S(p,m,n,o,C.a.i(l).length===0?null:l),$async$af1)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fiS)
s=[1]
x=4
break}p.L(y.q).f.U(D.fhv)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dY9(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af1,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jz:C.qe,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fJk,s,s,s,1,s,!0),p=A.q(s,D.bw4,C.f,s,s,new A.p(s,s,s,A.m(22),s,E.I0,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c3_,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c2V,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c3a,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcb9()
u=A.bp(C.aE,s,s,s,s,C.h3,s,s,s,s,s,s)
return A.c4(q,r,A.ch(A.x(A.a([p,C.d7,o,C.af,x,C.af,w,C.n9,A.bI(t.r?C.tu:C.aWO,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.acQ.prototype={}
B.bxD.prototype={
a5x(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apI()))
x=3
return A.b(B.S6(t,s),$async$a5x)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5x,w)},
gd1(){return this.a}}
B.Oc.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_a.prototype={
S(){return new B.aAN(new A.au(C.av,$.aw()),A.k8(!0,null,!0,!0,null,null,!1))}}
B.aAN.prototype={
Y(){this.a3()
$.aW.x1$.push(new B.dbP(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
cbf(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2g(d),u=x.a.c,t=u?C.iA:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jz:v.a[0],p=A.m(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h2,32)],n),l=A.q(w,T.arQ,C.f,w,w,new A.p(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asD,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uQ(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxf()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GL,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b4N),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbN(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mw,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nX,new B.dbO(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.b9(A.m(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cM,12)],n)
g=y.p
return A.eS(w,C.L,new A.cR(Q.LJ,A.c3(new A.D(C.yK,A.x(A.a([l,C.aR,k,C.U,j,C.dX,i,C.dX,A.A(A.a([f,C.au,A.E(A.c3(A.aJ(!1,C.a3,!0,w,A.aP(!1,A.m(14),!0,D.eqN,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbe(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Q_,C.n),C.bi),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.S,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bi),w),w,w,w,C.Oa,C.da,w,w,w)}}
B.bxf.prototype={
oX(d,e){return e.am6(e.a.toUpperCase())}}
B.VY.prototype={
S(){return new B.aEP(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEP.prototype={
Y(){var x=this
x.a3()
x.uj()
x.w=A.de(C.jC,new B.dZe(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.W6()
this.a2()},
a1z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ob(u.a.c),$async$a1z)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bd(u.a.c),$async$a1z)
case 4:u.m(new s.dYC(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1z,w)},
uj(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ob(u.a.c),$async$uj)
case 3:t=e
x=4
return A.b(B.Bd(u.a.c),$async$uj)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dYD(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O5(u.d)
B.Ch(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uj,w)},
O5(d){return this.bFV(d)},
bFV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7X(r,u.a.c),$async$O5)
case 8:p=f
if(u.c==null){x=1
break}new B.dYb(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n3))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W4(r,u.a.c),$async$O5)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bd(u.a.c),$async$O5)
case 12:u.m(new o.dYc(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
Ou(d){return this.bMc(d)},
bMc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7X(d,u.a.c),$async$Ou)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dYh(u,d,t))
x=6
return A.b(A.fG(new A.fA(t)),$async$Ou)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fA(r.toUpperCase())),$async$Ou)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ou,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
uk(d,e){return this.cJd(d,e)},
cJd(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZ2(r,e))
u=3
x=6
return A.b(d.$0(),$async$uk)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZ3(r))
$.eW.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uk,w)},
gaXt(){var x=this.a
return x.f||x.r||x.w},
IA(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXt()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdw(s,n,r,q,o,t),$async$IA)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fN5(o,u.a.c),$async$IA)
case 6:o=u.c
if(o==null){v=!1
x=1
break}n=u.a
t=n.d
s=n.e
r=n.x
q=n.y
n=n.z
x=7
return A.b(B.DF(s,o,r,q,n,t),$async$IA)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IA,w)},
a0D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqu(u.a.c),$async$a0D)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ij("No organization portal found.")
x=1
break}t=J.a7(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cd(A.eb(new B.dYz(u,r,q),!1,null,y.H)),$async$a0D)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0D,w)},
a1J(d){return this.crR(d)},
crQ(){return this.a1J(1)},
crR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXt()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqr(u.a.c),$async$a1J)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1J,w)},
acS(d,e,f){return this.c29(d,e,f)},
c29(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.uk(new B.dYw(u,d,null,e,f),"Uploading\u2026"),$async$acS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acS,w)},
bG3(){B.hD5(!1,new B.dYf(this))
return},
cwU(){this.m(new B.dYH(this))},
aAg(){var x=0,w=A.j(y.H),v=this
var $async$aAg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bG3()
return A.h(null,w)}})
return A.i($async$aAg,w)},
acO(){var x=0,w=A.j(y.H),v=this
var $async$acO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uk(new B.dYl(v),"Importing\u2026"),$async$acO)
case 2:return A.h(null,w)}})
return A.i($async$acO,w)},
SY(d){return this.cIx(d)},
cIx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n3)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dZ_(u,d),!1,null,y.H)),$async$SY)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S_)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dZ0(u,d),!1,null,y.H)),$async$SY)
case 8:x=1
break
case 7:x=u.c2S(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dZ1(u,d),!1,null,y.H)),$async$SY)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
c2S(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRz,C.a.b2(x,w+1).toLowerCase())},
agA(d){return this.ciH(d)},
ciH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n3)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYx(u,d),!1,null,y.H)),$async$agA)
case 5:x=1
break
case 4:u.m(new B.dYy(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agA,w)},
Si(d){return this.czN(d)},
czN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Si=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pu(t,s.c,s.f),$async$Si)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uk(new B.dYT(u,d),"Preparing QR\u2026"),$async$Si)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Si,w)},
ajh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYU(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYV(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Si(r),$async$ajh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
aja(d){return this.czk(d)},
czk(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aja=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2g(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYN(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aja)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SY(d)
break
case"qr":u.Si(A.a([d],y.r))
break
case"send_my_code":u.cjj(A.a([d],y.r))
break
case"save":u.aiy(d)
break
case"delete":u.Jp(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aja,w)},
Yk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYi(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYj(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pu(t,s.c,s.f),$async$Yk)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uk(new B.dYk(u,r),"Preparing file\u2026"),$async$Yk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yk,w)},
ahF(d){return this.cqb(d)},
cqb(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hDX(d,!1),$async$ahF)
case 3:s=f
r=s==null
q=B.a7U(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahF,w)},
agG(){var x=0,w=A.j(y.H),v=this,u
var $async$agG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fUL(u,v.a.c),$async$agG)
case 2:return A.h(null,w)}})
return A.i($async$agG,w)},
bG2(){B.hD5(!1,new B.dYe(this,null))
return},
JE(d,e){return this.cjk(d,e)},
b2Y(d){return this.JE(null,d)},
cjj(d){return this.JE(d,null)},
cjk(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dYA(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xK.cq().aoP(!0,C.a1m,!1),$async$JE)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.uk(new B.dYB(l,s,r),"Preparing\u2026"),$async$JE)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ij("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ij("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFE(p,l,e,s.a.c),$async$JE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JE,w)},
IQ(d){return this.c1X(d)},
c1X(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hSU(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2Y(t),$async$IQ)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uk(new B.dYu(u,d),"Receiving video\u2026"),$async$IQ)
case 11:x=1
break
case 10:x=12
return A.b(u.uk(new B.dYv(u,d),"Receiving\u2026"),$async$IQ)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IQ,w)},
EJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dz()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahF(t),$async$EJ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IQ(s),$async$EJ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYF(u),!1,null,y.N)),$async$EJ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uj(),$async$EJ)
case 10:x=1
break
case 9:x=11
return A.b(u.IQ(C.a.i(r)),$async$EJ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EJ,w)},
aiy(d){return this.cvs(d)},
cvs(d){var x=0,w=A.j(y.H),v=this
var $async$aiy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uk(new B.dYE(v,d),"Saving\u2026"),$async$aiy)
case 2:return A.h(null,w)}})
return A.i($async$aiy,w)},
Jp(d){return this.bOx(d)},
bOx(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jp)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdz(t),$async$Jp)
case 6:case 5:s=d.a
x=7
return A.b(B.Fg(u.a.c,s),$async$Jp)
case 7:u.r.W(0,s)
x=8
return A.b(u.uj(),$async$Jp)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jp,w)},
ajn(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2g(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYZ(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajn)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agG()
break
case"import":u.acO()
break}case 1:return A.h(v,w)}})
return A.i($async$ajn,w)},
cbc(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n3))return C.qM
if(C.a.a0(x,"image/")||d.mI(D.S_))return C.uK
if(C.a.q(x,"pdf"))return E.Pu
return D.apC},
B(d){var x,w,v=this,u=null,t=B.a2g(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HU,u,u,u,new B.dZ9(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bXr,u,u,u,v.e?u:v.gcj0(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcwT()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bRG:E.aq1,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3i,u,u,u,v.e?u:v.gcbd(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oD,u,u,u,v.e?u:v.gb42(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZc,u,u,u,v.e?u:new B.dZa(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lY(new B.dZb(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dx(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dx(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.S(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kn(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAK(C.jH,s,!0,t,w?u:v.gczO(),u),1)
x.push(new A.D(D.bCI,A.lB(new B.dZc(),A.A(A.a([s,C.au,A.E(new B.aAK(C.uL,"Export",!1,t,w?u:v.gbSp(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cw,C.j0,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfm(t,v.e?u:v.gb42(),u)
else s=A.ko(!0,u,u,new B.dZd(v,t),s,u,D.bCA,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAK.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aE,t,t,0,C.c,t,C.wf,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wf,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f9,t,t,t),u.r,v)}}
B.bfm.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lB(new B.dbL(),new A.D(E.a0t,A.x(A.a([A.lB(new B.dbM(),A.q(x,A.X(C.z6,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.e4,C.hD,x,x,new A.br(0.86,1,w),s),C.dX,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dX,A.dh(C.oD,D.fWg,this.d,A.bp(C.aE,x,x,x,C.c,x,C.O8,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.S,0,C.p),x),C.cw,C.C2,x,x,new A.br(0,1,w),s),x,x,x)}}
B.ad9.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mI(D.n3))p=D.drh
else{p=C.a.a0(p,"image/")||i.mI(D.S_)
n=y.O
p=p?A.a([C.cG,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gara()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n3))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.ax,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fU,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.mI(D.n3)))l.push(A.h4R(C.aE,!1,j,j,j,!1,j,j,new B.dc7(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.X(C.ov,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.lB(new B.dc8(),new A.D(C.ej,A.aJ(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a_W,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bP("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_c.prototype={
S(){return new B.aAP()},
gd1(){return this.c}}
B.aAP.prototype={
Y(){this.a3()
this.yr()},
t(){B.hT8(this.e)
this.a2()},
yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rQ(o.c,o.d),$async$yr)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hTb(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hTa(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dc4(s))
x=1
break}s.m(new B.dc5(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dc6(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yr,w)},
a2G(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rQ(t.c,t.d),$async$a2G)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ffU)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiE(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2G)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2G,w)},
c1Q(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dc2(w,t),C.hc,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aH.gau(t))x=A.fR(t,C.A,v,new B.dc3(w),C.hc,C.dB,!0,v,!1,v,v)
else return C.bM
return A.uW(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2g(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D3,u,u,u,v.gb7O(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fp
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D3,D.fEz,v.gb7O(),A.bp(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.S,0,C.p),u)
t=p}else t=v.c1Q()}return A.c4(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_9.prototype={
S(){return new B.aAM(A.ajw(),C.bD,C.bD)},
gd1(){return this.c}}
B.aAM.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fx(w,A.a4(w).k("fx<1>")).iA(new B.dbI(v))
x.gcX5().iA(new B.dbJ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a4(x).k("fx<1>"))}if(x==null)x=C.baX
x.iA(new B.dbK(v))
v.yr()},
yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rQ(p.c,p.d),$async$yr)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbB(s))
x=1
break}x=8
return A.b(s.d.vo(0,new A.a4m(r,s.a.d.c)),$async$yr)
case 8:if(s.c==null){x=1
break}s.m(new B.dbC(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbD(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yr,w)},
a_t(){var x=0,w=A.j(y.H),v=this,u
var $async$a_t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_t)
case 5:x=3
break
case 4:x=6
return A.b(u.iD(0),$async$a_t)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_t,w)},
aVh(d){var x=d.a
return C.a.b_(C.o.u(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2g(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fp
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bSG,C.f,o,o,new A.p(o,o,o,A.m(24),o,L.Q_,C.n),o,88,o,o,o,o,o,88)
t=A.kV(C.aE,o,o,m,0,new B.dbE(p),C.o.E(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aVh(p.w)+" / "+p.aVh(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aE,o,o,o,o,D.fcj,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uN:C.ht,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.d7,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbg(),s)],y.p),C.m,o,C.e,C.S,0,C.p)}}return A.c4(v,w,A.at(new A.D(C.qx,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qv.prototype={
S(){return new B.aAS()},
gd1(){return this.c}}
B.aAS.prototype={
Y(){this.a3()
this.Qb()},
Qb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h79(o.c,o.d,new B.dcl(s)),$async$Qb)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcm(s))
x=1
break}s.e=r
q=O.ifO(r)
if(q==null){s.m(new B.dcn(s))
x=1
break}s.d=q
q.aV(0,s.gb2L())
x=8
return A.b(q.iV(0).df(0,C.rM),$async$Qb)
case 8:if(s.c==null){x=1
break}s.m(new B.dco(s))
x=9
return A.b(q.qo(0),$async$Qb)
case 9:q.tW(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcp(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qb,w)},
chg(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcq(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dr(0,x.gb2L())
w=x.d
if(w!=null)w.t()
B.iqn(x.e)
x.a2()},
af4(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0M(u.c,u.d),$async$af4)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af4,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2g(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aG(t,t,t,t,C.oC,t,t,t,u.gcba(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fp
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aj0(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AJ(s,t),A.aA(t,A.By(A.q(t,A.X(q?I.uN:C.ht,C.c,t,t,t,48),C.f,t,t,new A.p(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b4,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcs(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_e.prototype={
S(){return new B.aAQ(new A.cw(null,y.A))}}
B.aAQ.prototype={
gcIV(){var x,w,v=this.a
if(v.e!==D.Tl)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIv(){var x,w,v=this.a
if(v.e!==D.Aa)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcIV()
if(x!=null){v.Ri(x)
v.e=A.de(R.GB,new B.dch(v,x))}w=v.gcIv()
if(w!=null){v.Rh(w)
v.f=A.de(C.fF,new B.dci(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rh(d){return this.coo(d)},
coo(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqz(d),$async$Rh)
case 3:t=f
x=4
return A.b(B.cdS(d),$async$Rh)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dc9(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rh,w)},
Ri(d){return this.cop(d)},
cop(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ri=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fVn(d),$async$Ri)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDx(t),$async$Ri)
case 4:if(u.c==null){x=1
break}u.m(new B.dca(u))
u.c.L(y.q).f.U(D.aTA)
case 1:return A.h(v,w)}})
return A.i($async$Ri,w)},
gc74(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbb(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2s(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dz()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fj1)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dcb(),!1,null,y.N)),$async$a2s)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDx(s),$async$a2s)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTA)
case 1:return A.h(v,w)}})
return A.i($async$a2s,w)},
aaG(d){return this.bMd(d)},
bMd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aO(t,", "))),$async$aaG)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaG,w)},
af2(d){return this.bLX(d)},
bLX(d){var x=0,w=A.j(y.H),v=this
var $async$af2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$af2)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fgn)
return A.h(null,w)}})
return A.i($async$af2,w)},
a2m(d){return this.cvu(d)},
cvu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apx(s.d,4),$async$a2m)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tn(r,"ngmy_doc_share_qr.png"),$async$a2m)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2m,w)},
gaYK(){var x,w=this.a
if(w.e!==D.J0)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaD(d){return this.bM6(d)},
bM6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYK()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaD)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fi1)
case 1:return A.h(v,w)}})
return A.i($async$aaD,w)},
af3(){var x=0,w=A.j(y.H),v=this,u
var $async$af3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.W6(),$async$af3)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$af3,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2g(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aC(h,0,44)+"\u2026"
i=i.e
i=i!==D.J0&&i!==D.Tl&&i!==D.Aa
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J0||t===D.Tl||t===D.Aa?l:A.aG(l,l,l,l,C.ln,l,l,l,m.gb0N(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.U,A.qa(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc74(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J0){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.U,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mb,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcbb(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c21,D.fO5,new B.dcc(m,d),l)],p))}if(m.a.e===D.J0&&m.gaYK()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.bZx,D.fKH,new B.dcd(m,d),l)],p))
if(m.a.e===D.Aa){x=(m.w?C.dI:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.U,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mb,l,l,l)],p))}if(m.a.e===D.Tl){x=(m.r?C.dI:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.U,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mb,l,l,l),C.af,A.dh(D.bV7,D.fRd,m.gcvR(),A.bp(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oK(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.q(l,A.x(q,C.m,l,C.ba,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D2,C.VM,new B.dce(m,d),l),1),C.au,A.E(A.dh(C.zu,C.abg,new B.dcf(m,d),A.bp(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.U,new A.a5(1/0,l,A.bI(C.AN,l,m.gb0N(),A.bp(C.aN,l,l,l,l,C.h3,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dcg(),y.C)}}
B.ad7.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.ch(A.x(A.a([w,C.aR,A.q(x,A.qa(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.S,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bI(C.AO,x,new B.dbA(d),x)],u),x,x,C.nj,v,x,x,x,x,D.fDz,x)}}
B.a_8.prototype={
S(){return new B.aAL(A.zS(C.yp,C.o2,C.v_))}}
B.aAL.prototype={
t(){this.d.t()
this.a2()},
ayP(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fLd,x,x,x,1,x,!0),C.w,A.zR(this.d,C.c_,this.gayO()),x,!1,!1,x,x)}}
B.a_f.prototype={
S(){return new B.aAR(A.zS(C.yp,C.o2,C.v_))},
gd1(){return this.c}}
B.aAR.prototype={
c2U(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ME("text/plain"),$async$ah2)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fiW)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah2,w)},
abu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hDX(p,!0),$async$abu)
case 3:t=e
p=t==null
s=B.a7U(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.ffu)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abu,w)},
t(){this.d.t()
this.a2()},
ayP(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c2U(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.aqW,v,v,v,w.gbRU(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3p,v,v,v,w.gclK(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uH:P.Pc,v,v,v,v,v),v,v,v,new B.dck(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fS8,v,v,v,1,v,!0)
u=A.zR(w.d,C.c_,w.gayO())
x=A.m(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ex4],s),v),v,!1,!1,v,v)}}
B.bfn.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pd
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pd:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aJ(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0z,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaj.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pg.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Ye.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pf.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FL.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cru.prototype={}
B.FK.prototype={}
B.aai.prototype={}
B.av8.prototype={}
B.Yf.prototype={}
var z=a.updateTypes(["aB<~>()","P(jB)","n(jB)","VY(Z)","~()","a_b(Z)","F(F,jB)","Qv(Z)","~(mi)","ct(FK)","aB<jB?>(@)","VW(Z)","W_(Z)","D(jB)","jB(@)","a8<n,@>(jB)","a_a(Z)","VX(Z)","a_c(Z)","a_9(Z)","a_e(Z)","ad7(Z)","ai<jB>()","a_f(Z)","ad9(Z,F)","a_8(Z)","a8<n,aE>(jB)","ct(Ye)","ct(aai)","aB<ct>(FK)"])
B.crq.prototype={
$1(d){var x=this.a
x.x=D.aQr
x.y.J(0,D.aQr)},
$S:75}
B.crr.prototype={
$1(d){var x=this.a
x.x=D.aQq
x.y.J(0,D.aQq)},
$S:75}
B.crs.prototype={
$1(d){var x=this.a
x.aiq(A.ahp(d.data)).bG(new B.crp(x),y.b)},
$S:75}
B.crp.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crt.prototype={
$1(d){},
$S:75}
B.crw.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hXW(d.channel))},
$S:16}
B.crx.prototype={
$1(d){},
$S:16}
B.cry.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.igY(w.iceConnectionState)
x.cx=w
if($.hgy())switch(w.a){case 0:x.cy=D.aQw
break
case 1:x.cy=D.aQx
break
case 3:x.cy=D.aQy
break
case 5:x.cy=D.aQu
break
case 6:x.cy=D.aQv
break
case 7:x.cy=D.a8X
break
default:break}},
$S:107}
B.crz.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.igZ(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.crA.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.irR(w.signalingState)},
$S:107}
B.crB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iq4(w.connectionState)},
$S:107}
B.crC.prototype={
$1(d){},
$S:107}
B.crD.prototype={
$1(d){},
$S:16}
B.fvt.prototype={
$1(d){var x=y.F.a(new A.r5([],[]).oK(d.target.result,!1)),w=C.yq.q(x.objectStoreNames,"blobs")
if(!w)C.ym.Li(x,"blobs")},
$S:180}
B.fUz.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wO.fq(this.b)
$.eW.mC()
this.c.$1(d)},
$S:382}
B.fUB.prototype={
$1(d){return this.a.$1(B.i6l(this.b,this.c))},
$S:28}
B.fUA.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:28}
B.fUy.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fUO.prototype={
$1(d){var x=this
return B.hsV(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fUP.prototype={
$1(d){var x=this
return B.hsV(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fy2.prototype={
$1(d){var x=this
return B.cdt(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbT.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbQ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdt(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdt(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdt(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbV.prototype={
$4(d,e,f,g){var x=null
return A.jZ(A.A(A.a([A.aG(x,x,x,x,D.bTK,x,x,x,new B.dbU(d),x,x,x,x,x,x),A.E(A.Fw(D.RJ,!0,x,C.a2q,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RJ,x,g,C.amB,0,e,f)},
$C:"$4",
$R:4,
$S:372}
B.dbU.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzZ.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eP,y.o).w,t=this.a,s=t?C.iA:C.c,r=A.m(28),q=A.q(v,D.bwo,C.f,v,v,D.b6q,v,v,v,v,D.amr,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bY1,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GQ,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arb,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dl,new B.fzX(d),v),1),C.au,A.E(A.bI(D.fJI,v,new B.fzY(p,x,d),A.bp(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.S,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GE,v,v,v,v),v)},
$S:61}
B.fzX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzY.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fgE)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDr(v,x))},
$S:0}
B.fAs.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eP,y.o).w,u=x.a,t=u?C.iA:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwd,C.f,w,w,D.b7U,w,w,w,w,D.amr,w,w,1/0),new A.D(C.GQ,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.hcm(u,"Organization name",C.Hi,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.hcm(u,"Access code",C.nG,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.hcm(u,"Member password",H.HP,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bI(D.fSf,w,new B.fAr(r,q,p,d),A.bp(C.aE,w,w,w,w,C.h3,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.S,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GE,w,w,w,w),w)},
$S:61}
B.fAr.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fgJ)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGz(u,x,w))},
$S:0}
B.cdk.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a7(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cF(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vL(p,null).df(0,C.a_z),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ci(l,s.c,k,q,r,"Received via QR"),$async$$1)
case 8:n=f
if(n!=null){l=++s.a.a
k=s.e
if(k!=null)k.$2(l,s.f)}v=n
x=1
break
u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share lan web] "+A.w(r)+": "+A.w(m))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+10}
B.cdq.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdr.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cds.prototype={
$1(d){return d.b},
$S:z+2}
B.cdm.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdn.prototype={
$1(d){return d.b},
$S:z+2}
B.cdl.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdo.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdp.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fUM.prototype={
$1(d){return new B.VW(this.a,null)},
$S:z+11}
B.fUN.prototype={
$1(d){return new B.W_(this.a,this.b,this.c,null)},
$S:z+12}
B.dY7.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZg.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZh.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZi.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZf(x,d))},
$S:2}
B.dZf.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZj.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZk.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZl.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZm.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZn.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZr.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.dZp.prototype={
$1(d){var x=this.a
return x.f?null:x.a_s()},
$S:2}
B.dZq.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S_))s=C.uK
else s=C.a.a0(s,"video/")||d.mI(D.n3)?C.qM:D.apC
x=this.b.a
w=y.p
return new A.D(C.kU,A.A(A.a([A.q(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gara(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dY8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dY9.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdu.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:92}
B.cdv.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:92}
B.fVG.prototype={
$2(d,e){return e===this.a},
$S:293}
B.fsx.prototype={
$1(d){return J.k(d)},
$S:17}
B.fye.prototype={
$1(d){var x=this.b
B.i49(C.H5.ga7a(this.a)).bG(x.gBZ(x),y.H)},
$S:125}
B.fyf.prototype={
$1(d){return this.a.da(0,null)},
$S:125}
B.fyg.prototype={
$0(){return null},
$S:12}
B.cdJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyh.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.j.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jB(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fCs.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fws.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fwt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdO.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n3)},
$S:z+1}
B.fZN.prototype={
$1(d){return new B.a_a(this.a,null)},
$S:z+16}
B.dbP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dbN.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZe.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1z()},
$S:11}
B.dYC.prototype={
$0(){var x=J.bGG(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYD.prototype={
$0(){var x=J.bGG(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYb.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYa(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFL(this.c)}},
$S:0}
B.dYa.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYc.prototype={
$0(){var x=J.bGG(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYh.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYg(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFL(this.c)}},
$S:0}
B.dYg.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZ2.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZ3.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dYz.prototype={
$1(d){return new B.VX(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYw.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IA(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.W0(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uj(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1J(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYf.prototype={
$1(d){this.a.acS(d,"No files selected.","Added")},
$S:382}
B.dYH.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dYG(),A.U(x).k("N<1,n>")))},
$S:0}
B.dYG.prototype={
$1(d){return d.a},
$S:z+2}
B.dYl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xK.cq().cZ3(C.a1m,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jI(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqy(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uj(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ_.prototype={
$1(d){return new B.Qv(this.a.a.c,this.b,null)},
$S:z+7}
B.dZ0.prototype={
$1(d){return new B.a_c(this.a.a.c,this.b,null)},
$S:z+18}
B.dZ1.prototype={
$1(d){return new B.a_9(this.a.a.c,this.b,null)},
$S:z+19}
B.dYx.prototype={
$1(d){return new B.Qv(this.a.a.c,this.b,null)},
$S:z+7}
B.dYy.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IA(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7W(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.crQ(),$async$$0)
case 5:x=6
return A.b(p.uj(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dYP(p),r),new B.dYQ(),r.k("N<ak.E,n>")).bY(0,new B.dYR())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYS(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pt(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.W6(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYP.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYO(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYQ.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYR.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYS.prototype={
$1(d){var x=this.a
return new B.a_e(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dYU.prototype={
$1(d){return d.a},
$S:z+2}
B.dYV.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYN.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kT,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gara(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n3)?C.rZ:C.ps
p=!x||p.mI(D.n3)?"Play video":"View"
return A.c3(A.bn(!0,new A.D(C.Cc,A.x(A.a([q,o,t,C.aC,B.a_d(!1,u,!1,w,p,new B.dYI(d),v),B.a_d(!1,u,!1,C.jH,"Share via QR",new B.dYJ(d),"Letters/numbers QR code"),B.a_d(!1,u,!1,D.a2v,"Send to their Code",new B.dYK(d),"Enter someone else's personal code"),B.a_d(!1,u,!1,C.hW,"Download / save",new B.dYL(d),v),C.an,B.a_d(!1,u,!0,C.eg,"Delete",new B.dYM(d),v)],y.p),C.al,v,C.e,C.S,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l6,v,v,C.n),C.bi)},
$S:699}
B.dYI.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dYJ.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dYK.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYL.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYM.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dYi.prototype={
$1(d){return d.a},
$S:z+2}
B.dYj.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7Y(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.He(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pt(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYe.prototype={
$1(d){var x=this.a
x.uk(new B.dYd(x,d,this.b),"Preparing\u2026")},
$S:382}
B.dYd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.W0(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFE(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYA.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dYB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h7c(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hc(new B.dYq(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dYr(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYs(s))
case 5:x=8
return A.b(r.b.iE(0,C.Gy,new B.dYt()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uj(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYq.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYn(x,d,e))},
$S:233}
B.dYn.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYr.prototype={
$1(d){return new B.ad7(this.a.a,null)},
$S:z+21}
B.dYs.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYt.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYv.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jf(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7M(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2Y(B.Jf(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqy(new B.dYo(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h7b(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.uj(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYp()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYo.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYm(x,d,e))},
$S:233}
B.dYm.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYp.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n3)},
$S:z+1}
B.dYF.prototype={
$1(d){return new B.a_f(this.a.a.c,null)},
$S:z+23}
B.dYE.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0M(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYZ.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bn(!0,new A.D(C.Cc,A.x(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kT,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_d(!0,w,!1,C.nG,"My Code",new B.dYW(d),"Your personal code & QR \u2014 others send docs to you"),B.a_d(!1,w,!1,D.a2v,"Send to their Code",new B.dYX(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_d(!1,w,!1,S.zl,"Import backup",new B.dYY(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.S,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bH(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l6,x,x,C.n),C.bi)},
$S:699}
B.dYW.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dYX.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bG2()},
$S:0}
B.dYY.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZb.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jp(D.RJ,x,C.a2q,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RJ).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:662}
B.dZ9.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZa.prototype={
$0(){this.a.ajn()
return null},
$S:0}
B.dZc.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*10)),e)},
$S:100}
B.dZd.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ad9(e,w,v,this.b,x.e,x.cbc(w),new B.dZ5(x,w),new B.dZ6(x,v,w),new B.dZ7(x,w),new B.dZ8(x,w),null)},
$S:z+24}
B.dZ5.prototype={
$0(){this.a.agA(this.b)
return null},
$S:0}
B.dZ6.prototype={
$0(){var x=this.a
return x.m(new B.dZ4(x,this.b,this.c))},
$S:0}
B.dZ4.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZ7.prototype={
$0(){this.a.Ou(this.b)
return null},
$S:0}
B.dZ8.prototype={
$0(){this.a.aja(this.b)
return null},
$S:0}
B.dbL.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*18)),e)},
$S:100}
B.dbM.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:114}
B.dc8.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.o(0,(1-e)*14)),e)},
$S:100}
B.dc7.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dc4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dc5.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dc6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dc2.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gau(w))return A.fR(w,C.A,x,new B.dc0(this.a),C.hc,C.dB,!0,x,!1,x,x)
$.aW.x1$.push(new B.dc1(this.a))
return C.bM},
$S:144}
B.dc0.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dbZ(this.a))
return C.bM},
$S:200}
B.dbZ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbW(x))},
$S:7}
B.dbW.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dc1.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbY(x))},
$S:7}
B.dbY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dc3.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dc_(this.a))
return C.bM},
$S:200}
B.dc_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbX(x))},
$S:7}
B.dbX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbI.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbH(x,d))},
$S:1762}
B.dbH.prototype={
$0(){return this.a.f=this.b===C.vn},
$S:0}
B.dbJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbG(x,d))},
$S:7}
B.dbG.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbF(x,d))},
$S:7}
B.dbF.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbB.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbC.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbD.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbE.prototype={
$1(d){return this.a.d.Nr(0,A.dv(0,0,0,C.j.V(d),0,0))},
$S:6}
B.dcl.prototype={
$0(){var x=this.a.a
return B.rQ(x.c,x.d)},
$S:1763}
B.dcm.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dco.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcp.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcq.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcs.prototype={
$0(){var x=this.a
x.m(new B.dcr(x))},
$S:0}
B.dcr.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qo(0)},
$S:0}
B.dch.prototype={
$1(d){return this.a.Ri(this.b)},
$S:11}
B.dci.prototype={
$1(d){return this.a.Rh(this.b)},
$S:11}
B.dc9.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dca.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcb.prototype={
$1(d){return D.hrK},
$S:z+25}
B.dcg.prototype={
$2(d,e){if(d)B.W6()},
$S:128}
B.dcc.prototype={
$0(){return this.a.aaG(this.b)},
$S:0}
B.dcd.prototype={
$0(){return this.a.aaD(this.b)},
$S:0}
B.dce.prototype={
$0(){return this.a.af2(this.b)},
$S:0}
B.dcf.prototype={
$0(){return this.a.a2m(this.b)},
$S:0}
B.dbA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dck.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qs(),$async$$0)
case 2:u.m(new B.dcj(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcj.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdQ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n3)},
$S:z+1}
B.cdR.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdP.prototype={
$2(d,e){return this.bmG(d,e)},
bmG(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W7(u.c,A.H(["uploadProgress",C.j.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fC4.prototype={
$1(d){if(d===D.a8W&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fC5.prototype={
$0(){},
$S:12}
B.fCG.prototype={
bof(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fpO(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.ho6(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bof(d,e)},
$S:537}
B.fCF.prototype={
$1(d){var x=this
d.b=new B.fCE(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fCE.prototype={
$1(d){return this.boe(d)},
boe(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=d.b
n===$&&A.c()
x=n?7:8
break
case 7:n=s.a.c
m=d.a
x=n!=null?9:11
break
case 9:m===$&&A.c()
x=12
return A.b(B.b0N(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Y.aQ(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.t(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.t(r,"name")
n=J.k(n==null?"file":n)
m=J.t(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.z(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.fpO(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.da(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a7V(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.da(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAO.prototype,"gciD","QS",0)
x(v,"gcju","JF",0)
x(v,"gcj_","yB",0)
x(v=B.aEN.prototype,"gcb6","af0",0)
x(v,"gcb7","a_r",0)
x(v,"gcyi","aiS",0)
x(v=B.aEQ.prototype,"gcb8","a_s",0)
x(v,"gcyj","a2H",0)
x(B.aEO.prototype,"gcb9","af1",0)
x(B.aAN.prototype,"gcbe","cbf",4)
x(v=B.aEP.prototype,"gcj0","a0D",0)
x(v,"gcwT","cwU",4)
x(v,"gb42","aAg",0)
x(v,"gczO","ajh",0)
x(v,"gbSp","Yk",0)
x(v,"gcbd","EJ",0)
x(B.aAP.prototype,"gb7O","a2G",0)
x(B.aAM.prototype,"gcbg","a_t",0)
x(v=B.aAS.prototype,"gb2L","chg",4)
x(v,"gcba","af4",0)
x(v=B.aAQ.prototype,"gcvR","a2s",0)
x(v,"gb0N","af3",0)
w(B.aAL.prototype,"gayO","ayP",8)
x(v=B.aAR.prototype,"gclK","ah2",0)
x(v,"gbRU","abu",0)
w(v,"gayO","ayP",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cru,B.aai,B.av8,B.aDr,B.aGz,B.jB,B.acQ,B.bxD,B.FK,B.Yf])
w(B.crv,B.cru)
w(B.b5V,B.aai)
x(A.ht,[B.crq,B.crr,B.crs,B.crp,B.crt,B.crw,B.crx,B.cry,B.crz,B.crA,B.crB,B.crC,B.crD,B.fvt,B.fUz,B.fUB,B.fUA,B.fUO,B.fUP,B.fy2,B.dbQ,B.dbS,B.dbR,B.dbV,B.fzZ,B.fAs,B.cdk,B.cdr,B.cds,B.cdn,B.cdl,B.cdo,B.cdp,B.fUM,B.fUN,B.dZi,B.dZr,B.dZp,B.dZq,B.fsx,B.fye,B.fyf,B.cdJ,B.fyh,B.fCs,B.fws,B.fwt,B.cdO,B.fZN,B.dbP,B.dbN,B.dZe,B.dYa,B.dYg,B.dYz,B.dYf,B.dYG,B.dZ_,B.dZ0,B.dZ1,B.dYx,B.dYP,B.dYO,B.dYQ,B.dYR,B.dYS,B.dYU,B.dYV,B.dYN,B.dYi,B.dYj,B.dYe,B.dYA,B.dYr,B.dYp,B.dYF,B.dYZ,B.dZb,B.dZc,B.dbL,B.dbM,B.dc8,B.dc7,B.dc2,B.dc0,B.dbZ,B.dc1,B.dc3,B.dc_,B.dbI,B.dbJ,B.dbK,B.dbE,B.dch,B.dci,B.dcb,B.cdQ,B.cdR,B.fC4,B.fCF,B.fCE])
w(B.b5W,B.av8)
x(A.iI,[B.fUy,B.dbT,B.dbU,B.fzX,B.fzY,B.fAr,B.dY7,B.dZg,B.dZh,B.dZf,B.dZj,B.dZk,B.dZl,B.dZm,B.dZn,B.dZo,B.dY8,B.dY9,B.fyg,B.dbO,B.dYC,B.dYD,B.dYb,B.dYc,B.dYh,B.dZ2,B.dZ3,B.dYw,B.dYH,B.dYl,B.dYy,B.dYT,B.dYI,B.dYJ,B.dYK,B.dYL,B.dYM,B.dYk,B.dYd,B.dYB,B.dYu,B.dYn,B.dYs,B.dYt,B.dYv,B.dYm,B.dYE,B.dYW,B.dYX,B.dYY,B.dZ9,B.dZa,B.dZ5,B.dZ6,B.dZ4,B.dZ7,B.dZ8,B.dc4,B.dc5,B.dc6,B.dbW,B.dbY,B.dbX,B.dbH,B.dbG,B.dbF,B.dbB,B.dbC,B.dbD,B.dcl,B.dcm,B.dcn,B.dco,B.dcp,B.dcq,B.dcs,B.dcr,B.dc9,B.dca,B.dcc,B.dcd,B.dce,B.dcf,B.dbA,B.dck,B.dcj,B.fC5])
x(A.lD,[B.ad8,B.Oc,B.aaj,B.Pg,B.Ye,B.Pf,B.FL])
x(A.af,[B.a_b,B.VW,B.W_,B.VX,B.a_a,B.VY,B.a_c,B.a_9,B.Qv,B.a_e,B.a_8,B.a_f])
x(A.ah,[B.aAO,B.aEN,B.aEQ,B.aEO,B.aAN,B.aEP,B.aAP,B.aAM,B.aAS,B.aAQ,B.aAL,B.aAR])
x(A.ax,[B.adB,B.aAK,B.bfm,B.ad9,B.ad7,B.bfn])
x(A.jw,[B.cdq,B.cdm,B.cdu,B.cdv,B.fVG,B.dYq,B.dYo,B.dZd,B.dcg,B.cdP,B.fCG])
x(A.j2,[B.bkP,B.bxf])})()
A.iT(b.typeUniverse,JSON.parse('{"b5V":{"aai":[]},"b5W":{"av8":[]},"a_b":{"af":[],"v":[]},"aAO":{"ah":["a_b"]},"adB":{"ax":[],"v":[]},"VW":{"af":[],"v":[]},"W_":{"af":[],"v":[]},"aEN":{"ah":["VW"]},"aEQ":{"ah":["W_"]},"bkP":{"j2":[]},"VX":{"af":[],"v":[]},"aEO":{"ah":["VX"]},"a_a":{"af":[],"v":[]},"VY":{"af":[],"v":[]},"ad9":{"ax":[],"v":[]},"a_c":{"af":[],"v":[]},"a_9":{"af":[],"v":[]},"Qv":{"af":[],"v":[]},"a_e":{"af":[],"v":[]},"ad7":{"ax":[],"v":[]},"a_8":{"af":[],"v":[]},"a_f":{"af":[],"v":[]},"aAN":{"ah":["a_a"]},"bxf":{"j2":[]},"aEP":{"ah":["VY"]},"aAK":{"ax":[],"v":[]},"bfm":{"ax":[],"v":[]},"aAP":{"ah":["a_c"]},"aAM":{"ah":["a_9"]},"aAS":{"ah":["Qv"]},"aAQ":{"ah":["a_e"]},"aAL":{"ah":["a_8"]},"aAR":{"ah":["a_f"]},"bfn":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uG"),k:x("MC()"),m:x("bw<n,n>"),F:x("rq"),g:x("aB<jB?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,P>>"),t:x("O<a8<n,@>>"),r:x("O<jB>"),w:x("O<+file,name(lS,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j2>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<F>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jB>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bB<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iB"),e:x("ivV"),af:x("EX"),U:x("jB"),b:x("ct"),C:x("aE"),aK:x("wA"),ab:x("FK"),br:x("av8"),v:x("Yf"),N:x("n"),X:x("br<I>"),Q:x("m2"),D:x("dK"),aw:x("bP<n>"),cd:x("Y<a8<n,@>>"),c7:x("v"),ch:x("c2<ai<jB>>"),aW:x("c2<dK?>"),aY:x("c2<~>"),cx:x("ad8"),b1:x("bk<ai<jB>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDr"),bG:x("aGz"),q:x("my"),B:x("pM<FK>"),c6:x("pM<aaj>"),y:x("P"),i:x("I"),z:x("@"),S:x("F"),aQ:x("bh?"),_:x("ai<jB>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jB?"),R:x("aE?"),c:x("Yf?"),d:x("+answerQr,transfer(n,aB<ai<jB>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,F)?"),L:x("+fileCount,mode,qrPayload(F,Oc,n)?"),aX:x("+fileCount,qrPayload,token(F,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acQ?"),bk:x("aDr?"),ag:x("aGz?"),dd:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b4N=new A.ay(C.aE,2,C.r,-1)
D.c6B=new A.a9(C.a6,C.aa,C.x,C.a4A,null,null)
D.b6q=new A.p(null,null,null,C.mD,null,D.c6B,C.n)
D.b7U=new A.p(null,null,null,C.mD,null,E.I0,C.n)
D.afo=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agP=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahP=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajB=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fEs=new A.B("Your team portal",null,C.dh,null,null,null,null,null,null,null,null,null)
D.fTb=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dik=x([D.fEs,C.an,D.fTb],y.p)
D.bw4=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dik,null)
D.fXE=new A.B("Create your organization",null,C.fA,null,null,null,null,null,null,null,null,null)
D.fIU=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dz7=x([D.fXE,C.an,D.fIU],y.p)
D.bwd=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dz7,null)
D.fTO=new A.B("Team Member sign-in",null,C.fA,null,null,null,null,null,null,null,null,null)
D.fMP=new A.B("Enter the access code and password from your organization.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dwT=x([D.fTO,C.an,D.fMP],y.p)
D.bwo=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dwT,null)
D.bCA=new A.R(16,10,16,28)
D.bCI=new A.R(16,14,16,4)
D.bDZ=new A.R(20,0,20,16)
D.bEu=new A.R(20,8,20,16)
D.amr=new A.R(24,22,24,20)
D.a2v=new A.a0(63394,"MaterialIcons",!1)
D.apC=new A.a0(63515,"MaterialIcons",!1)
D.bRG=new A.a0(983813,"MaterialIcons",!1)
D.bOX=new A.a0(62867,"MaterialIcons",!1)
D.bSG=new A.ae(D.bOX,44,C.c,null,null,null)
D.bTK=new A.ae(C.k3,null,C.ab,null,null,null)
D.bV7=new A.ae(C.jo,18,null,null,null,null)
D.bWS=new A.ae(D.a2v,26,C.c,null,null,null)
D.bXr=new A.ae(C.CS,null,null,null,null,null)
D.bY1=new A.ae(C.D_,null,null,null,null,null)
D.bZc=new A.ae(W.a2G,null,null,null,null,null)
D.bZx=new A.ae(C.hJ,16,null,null,null,null)
D.c21=new A.ae(C.rY,16,null,null,null,null)
D.bSX=new A.ae(C.nG,null,null,null,null,null)
D.c2V=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYz=new A.ae(C.Hi,null,null,null,null,null)
D.c3_=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTh=new A.ae(H.HP,null,null,null,null,null)
D.c3a=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTh,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cS8=x([C.fn,C.b1,C.aE],y.O)
D.c8r=new A.a9(C.aA,C.aF,C.x,D.cS8,null,null)
D.cRz=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RJ=x([C.fn,C.aE],y.O)
D.S_=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n3=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.drh=x([C.of,C.aE],y.O)
D.ejk={iceServers:0}
D.aKX={urls:0}
D.dCR=new A.bw(D.aKX,["stun:stun.l.google.com:19302"],y.m)
D.dCQ=new A.bw(D.aKX,["stun:stun1.l.google.com:19302"],y.m)
D.d7S=x([D.dCR,D.dCQ],A.as("O<a8<n,n>>"))
D.dC7=new A.bw(D.ejk,[D.d7S],A.as("bw<n,@>"))
D.J0=new B.Oc(0,"lanDirect")
D.Tk=new B.Oc(1,"cloudStash")
D.dNV=new B.Oc(2,"inlineInstant")
D.Tl=new B.Oc(3,"webrtcLink")
D.Aa=new B.Oc(4,"videoCloud")
D.fTa=new A.B("Receive file",null,C.nc,null,null,null,null,null,null,null,null,null)
D.cHn=x([E.ark,C.ae,D.fTa],y.p)
D.f7d=new A.c7(C.aL,C.ba,C.i,C.m,null,C.p,null,0,D.cHn,null)
D.eqN=new A.D(C.co,D.f7d,null)
D.fv3=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Is,null,null,null)
D.fF0=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fv3,null,C.K,null,null,null,null,null,null,null)
D.epY=new A.D(C.Ch,D.fF0,null)
D.bch=new A.ce(C.A,null,null,D.epY,null)
D.ex4=new A.cL(0,null,0,28,null,null,D.bch,null)
D.exo=new B.aaj(0,"RTCDataChannelConnecting")
D.aQq=new B.aaj(1,"RTCDataChannelOpen")
D.aQr=new B.aaj(3,"RTCDataChannelClosed")
D.exp=new B.FL(0,"RTCIceConnectionStateNew")
D.exq=new B.FL(1,"RTCIceConnectionStateChecking")
D.exr=new B.FL(2,"RTCIceConnectionStateCompleted")
D.exs=new B.FL(3,"RTCIceConnectionStateConnected")
D.ext=new B.FL(4,"RTCIceConnectionStateCount")
D.exu=new B.FL(5,"RTCIceConnectionStateFailed")
D.exv=new B.FL(6,"RTCIceConnectionStateDisconnected")
D.aQs=new B.FL(7,"RTCIceConnectionStateClosed")
D.aQt=new B.Ye(0,"RTCIceGatheringStateNew")
D.exw=new B.Ye(1,"RTCIceGatheringStateGathering")
D.a8W=new B.Ye(2,"RTCIceGatheringStateComplete")
D.a8X=new B.Pf(0,"RTCPeerConnectionStateClosed")
D.aQu=new B.Pf(1,"RTCPeerConnectionStateFailed")
D.aQv=new B.Pf(2,"RTCPeerConnectionStateDisconnected")
D.aQw=new B.Pf(3,"RTCPeerConnectionStateNew")
D.aQx=new B.Pf(4,"RTCPeerConnectionStateConnecting")
D.aQy=new B.Pf(5,"RTCPeerConnectionStateConnected")
D.exx=new B.Pg(0,"RTCSignalingStateStable")
D.exy=new B.Pg(1,"RTCSignalingStateHaveLocalOffer")
D.exz=new B.Pg(2,"RTCSignalingStateHaveRemoteOffer")
D.exA=new B.Pg(3,"RTCSignalingStateHaveLocalPrAnswer")
D.exB=new B.Pg(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQz=new B.Pg(5,"RTCSignalingStateClosed")
D.fcj=new A.av(160,48)
D.bdx=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.fdS=new A.a5(16,16,D.bdx,null)
D.fIe=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ffk=new A.b1(D.fIe,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fPQ=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ffn=new A.b1(D.fPQ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fYI=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffu=new A.b1(D.fYI,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHP=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ffU=new A.b1(D.fHP,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTZ=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTA=new A.b1(D.fTZ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVr=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fgn=new A.b1(D.fVr,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_a=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgE=new A.b1(D.h_a,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fY7=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgJ=new A.b1(D.fY7,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZl=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fhv=new A.b1(D.fZl,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGp=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.b1(D.fGp,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRK=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fim=new A.b1(D.fRK,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fKx=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fiS=new A.b1(D.fKx,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_g=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiW=new A.b1(D.h_g,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGF=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new A.b1(D.fGF,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fFm=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjg=new A.b1(D.fFm,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fC9=new A.B("NGMY DOC SHARE",null,C.aUY,null,null,null,null,null,null,null,null,null)
D.fDz=new A.B("Show this to sender",null,C.ix,null,null,null,null,null,null,null,null,null)
D.fEz=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fJk=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fJI=new A.B("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fKH=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fLd=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fO5=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fQS=new A.B("Send to their Doc Share",null,C.nU,null,null,null,null,null,null,null,null,null)
D.fRd=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRx=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fS8=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fSf=new A.B("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fSD=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f9,null,null,null,null,null,null,null,null,null)
D.fVX=new A.B("Share files & videos\nwith a scan.",null,C.aV0,null,null,null,null,null,null,null,null,null)
D.fWg=new A.B("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hrK=new B.a_8(null)
D.ach=new B.ad8(0,"docShare")
D.aci=new B.ad8(1,"gate")
D.Wo=new B.ad8(2,"gateNoIndividual")})();(function staticFields(){$.aPi=null
$.fnl=function(){var x=y.N
return A.T(x,x)}()
$.H0=A.T(y.N,y.D)
$.ahc=A.T(y.N,A.as("lS"))
$.RR=A.T(y.N,y.D)
$.fo_=A.T(y.N,A.as("acQ"))
$.cdI=A.T(y.S,A.as("bxD"))
$.ho5=1
$.icv=null
$.icu=null
$.i3m=null
$.hcz=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iwp","hFW",()=>new B.crv())
x($,"iuj","hgy",()=>C.a.q(A.bA(A.bA(A.bA(A.Hz(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["rK0uGyG+P1HEADh4O4WAQI/2KPg="]=a.current})($__dart_deferred_initializers__);