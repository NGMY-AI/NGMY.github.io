((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crq:function crq(){},
hXx(d){var x=null,w=new B.b5Q(d,D.ex5,new A.pJ(x,x,y.c6),new A.pJ(x,x,y.B))
w.bBQ(d)
return w},
b5Q:function b5Q(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crl:function crl(d){this.a=d},
crm:function crm(d){this.a=d},
crn:function crn(d){this.a=d},
crk:function crk(d){this.a=d},
cro:function cro(d){this.a=d},
hXy(d,e){var x=y.N
x=new B.b5R(d,e,A.T(x,y.e),A.T(x,y.z))
x.bBR(d,e)
return x},
b5R:function b5R(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crr:function crr(d){this.a=d},
crs:function crs(d){this.a=d},
crt:function crt(d){this.a=d},
cru:function cru(d){this.a=d},
crv:function crv(d){this.a=d},
crw:function crw(d){this.a=d},
crx:function crx(d){this.a=d},
cry:function cry(d){this.a=d},
hbR(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zu.Mv(x,"ngmy_doc_share_v1",new B.fvd(),1)},
i3e(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eE(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wI(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
S2(d,e){return B.iiS(d,e)},
iiS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPe
x=7
return A.b(o==null?$.aPe=B.hbR():o,$async$S2)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.mY(s,"blobs","readwrite")
C.j6.mx(J.mX(q,"blobs"),r,d)
x=8
return A.b(J.pS(q),$async$S2)
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
return A.i($async$S2,w)},
S1(d){return B.iiR(d)},
iiR(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPe
x=7
return A.b(o==null?$.aPe=B.hbR():o,$async$S1)
case 7:s=f
r=J.mY(s,"blobs","readonly")
x=8
return A.b(C.j6.A3(J.mX(r,"blobs"),d),$async$S1)
case 8:q=f
x=9
return A.b(J.pS(r),$async$S1)
case 9:o=B.i3e(q)
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
return A.i($async$S1,w)},
ahR(d){return B.iiQ(d)},
iiQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPe
x=7
return A.b(p==null?$.aPe=B.hbR():p,$async$ahR)
case 7:s=f
r=J.mY(s,"blobs","readwrite")
C.j6.Gi(J.mX(r,"blobs"),d)
x=8
return A.b(J.pS(r),$async$ahR)
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
return A.i($async$ahR,w)},
fvd:function fvd(){},
i5K(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqB(w,v))}return u},
hCH(d,e){var x,w={},v=A.aXU("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fUf(w,v,e)
C.wN.z4(v,"change",new B.fUh(w,v,!1))
C.wN.z4(v,"cancel",new B.fUg(w))
$.eV.mC()
v.click()
A.bQ(C.akA,new B.fUe(w),y.H)},
fUf:function fUf(d,e,f){this.a=d
this.b=e
this.c=f},
fUh:function fUh(d,e,f){this.a=d
this.b=e
this.c=f},
fUg:function fUg(d){this.a=d},
fUe:function fUe(d){this.a=d},
DA(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DA=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUs()?3:4
break
case 3:x=5
return A.b(B.hxy(e,d,s,!0,!1,f,g,h,!1,i),$async$DA)
case 5:x=1
break
case 4:x=6
return A.b(B.RF(d,s,f,g,h,i),$async$DA)
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
return A.b(B.Jc(s,d),$async$DA)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fqI(s,d),$async$DA)
case 14:x=12
return A.b(r.hxy(q,p,o,n,m,l,k,j,a1,i),$async$DA)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fUu(s,i,d,f,g,h),!1,null,y.H)),$async$DA)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fUv(s,i,d,f,g,h),!1,null,y.H)),$async$DA)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DA,w)},
RF(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RF=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0A(e),$async$RF)
case 3:u=k
x=4
return A.b(B.aqm(d,e,!1),$async$RF)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jc(e,d),$async$RF)
case 7:if(k){v=D.acf
x=1
break}x=8
return A.b(B.VV(e),$async$RF)
case 8:v=t?D.Wl:D.acg
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0y(d,e)){v=D.acf
x=1
break}x=11
return A.b(B.VV(e),$async$RF)
case 11:v=t?D.Wl:D.acg
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h6O(d,e)){v=D.acf
x=1
break}x=14
return A.b(B.VV(e),$async$RF)
case 14:v=D.Wl
x=1
break
case 13:v=t?D.Wl:D.acg
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RF,w)},
fqI(d,e){var x=0,w=A.j(y.y),v
var $async$fqI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0y(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0A(d),$async$fqI)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqI,w)},
hxy(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fxN(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hsx(d,e,f,g,h,i,j){return new B.a_7(e,j,d,g,h,i,f,null)},
fzG(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fzG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.av,u)
s=new A.au(C.av,u)
x=3
return A.b(A.bT(C.L,null,new B.fzJ(A.R(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fzG)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzG,w)},
fAa(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fAa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.av,u)
s=new A.au(C.av,u)
r=new A.au(C.av,u)
x=3
return A.b(A.bT(C.L,null,new B.fAc(A.R(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fAa)
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
return A.i($async$fAa,w)},
hc1(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fMM(d,e){var x=0,w=A.j(y.H),v
var $async$fMM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.VV(e),$async$fMM)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fMM,w)},
fUu:function fUu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUv:function fUv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ad4:function ad4(d,e){this.a=d
this.b=e},
fxN:function fxN(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_7:function a_7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAL:function aAL(){this.c=this.a=this.d=null},
dbO:function dbO(d,e){this.a=d
this.b=e},
dbL:function dbL(d){this.a=d},
dbN:function dbN(d){this.a=d},
dbM:function dbM(d){this.a=d},
dbQ:function dbQ(){},
dbP:function dbP(d){this.a=d},
adx:function adx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDo:function aDo(d,e){this.a=d
this.b=e},
aGw:function aGw(d,e,f){this.a=d
this.b=e
this.c=f},
fzJ:function fzJ(d,e,f){this.a=d
this.b=e
this.c=f},
fzH:function fzH(d){this.a=d},
fzI:function fzI(d,e,f){this.a=d
this.b=e
this.c=f},
fAc:function fAc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAb:function fAb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cde(d,e,f,g,h){return B.hSp(d,e,f,g,h)},
hSp(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cde=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iK(r.dL(d,new B.cdf(s,e,h,g,f,q),y.g),y.l),$async$cde)
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
return A.i($async$cde,w)},
b0v(d,e,f,g,h){return B.hSq(d,e,f,g,h)},
hSq(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0v=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avV("GET",d)
o=A.h3c()
if(o==null)o=new A.Mt(A.a([],y.W))
x=7
return A.b(o.f8(0,s).df(0,C.Gx),$async$b0v)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CO(),$async$b0v)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cd(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0v,w)},
b0u(d){return B.hSn(d)},
hSn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.ok),$async$b0u)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.m7(A.m5(p.e)).cG(0,p.w),null)
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
return A.i($async$b0u,w)},
cdd(d){return B.hSo(d)},
hSo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.qs),$async$cdd)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m5(q.e)).cG(0,q.w)
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
return A.i($async$cdd,w)},
cdf:function cdf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jz:function jz(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ja(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hSv(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Ja(C.a.b2(t,u.length))}return null},
hSw(d){var x=B.Ja(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hSr(){var x,w=$.oo(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7G(d){return B.hSs(d)},
hSs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bK),$async$a7G)
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
return A.i($async$a7G,w)},
a7H(d,e){return B.hSt(d,e)},
hSt(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7H=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cK,null),$async$a7H)
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
return A.i($async$a7H,w)},
Cc(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cc)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ja(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7I(r),$async$Cc)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7G("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cc)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Ja(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aA("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cc)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hSr()
x=14
return A.b(B.a7I(m),$async$Cc)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().ag()
x=15
return A.b(B.a7H("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cc)
case 15:k=f
x=16
return A.b(B.a7H("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cc)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aA("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cc)
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
return A.i($async$Cc,w)},
a7I(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ja(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7G("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7I)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7I,w)},
a7J(d,e,f,g){return B.hSx(d,e,f,g)},
hSx(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7J=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Ja(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7I(r),$async$a7J)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.cdl())>1048576||g.aW(d,new B.cdm())){v=B.Fa(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7U("myCode",d,a0),$async$a7J)
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
v=B.Fa(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0D(u,g.gI(d),a0),$async$a7J)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oo().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dL(d,new B.cdn(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0w(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a7J)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
Fa(d,e,f,g,h){return B.hSu(d,e,f,g,h)},
hSu(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fa=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$Fa)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cI(a6,0,new B.cdh())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oo().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cM.aw(99999)
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
a1=B.Je(a9,q)
a0=new A.L2(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fa)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pg(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abj(a1.a,a4,"media",a1.d,a2).xG(m,n,new A.Ep(!0,q.c)),$async$Fa)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fa)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRN(r),$async$Fa)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dL(a6,new B.cdi(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0w(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$Fa)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRN(r),$async$Fa)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fa,w)},
b0w(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7G(t),$async$b0w)
case 3:s=g
r=y.aL.a(J.t(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cdg(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7H(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0w,w)},
O6(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$O6=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7G("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$O6)
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
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0x(k,a0),$async$O6)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0C(h),$async$O6)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W1(g,a0),$async$O6)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdj(),q),n)
d=A.C(new A.Y(r,new B.cdk(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7H("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$O6)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$O6,w)},
b0x(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0x=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.imI(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dy(l,m,"Received via My Code",t,e,i),$async$b0x)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRN(s),$async$b0x)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0x,w)},
cdl:function cdl(){},
cdm:function cdm(){},
cdn:function cdn(){},
cdh:function cdh(){},
cdi:function cdi(){},
cdg:function cdg(){},
cdj:function cdj(){},
cdk:function cdk(){},
fUr(d,e){var x=0,w=A.j(y.H)
var $async$fUr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fUs(e),!1,null,y.H)),$async$fUr)
case 2:return A.h(null,w)}})
return A.i($async$fUr,w)},
bFz(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fUt(g,e,f),!1,null,y.y)),$async$bFz)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFz,w)},
fUs:function fUs(d){this.a=d},
fUt:function fUt(d,e,f){this.a=d
this.b=e
this.c=f},
VS:function VS(d,e){this.c=d
this.a=e},
aEK:function aEK(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dY2:function dY2(d,e){this.a=d
this.b=e},
VW:function VW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEN:function aEN(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d){this.a=d},
dZd:function dZd(d){this.a=d},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZe:function dZe(d){this.a=d},
dZf:function dZf(d){this.a=d},
dZg:function dZg(d,e){this.a=d
this.b=e},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZi:function dZi(d,e){this.a=d
this.b=e},
dZj:function dZj(d){this.a=d},
dZm:function dZm(){},
dZk:function dZk(d){this.a=d},
dZl:function dZl(d,e){this.a=d
this.b=e},
bkK:function bkK(){},
VT:function VT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEL:function aEL(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dY3:function dY3(d){this.a=d},
dY4:function dY4(d){this.a=d},
h6P(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hSz(d){var x=d.l3
if(x>=0)return x
return 4.99},
hSy(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdp(),w,w)
return w},
hnE(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdq(),w,w)
return w},
b0A(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0A)
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
return A.i($async$b0A,w)},
a7L(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7L)
case 4:x=3
return A.b(g.aA("String","ngmy_doc_share_path_"+u,e),$async$a7L)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7L,w)},
VV(d){var x=0,w=A.j(y.H),v,u
var $async$VV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$VV)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$VV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$VV,w)},
h6O(d,e){var x,w,v
if(B.hSz(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hSy(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0y(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hnE(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hnF(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hnE(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).ab().ag())
d.l4=w},
aqn(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqn)
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
return A.i($async$aqn,w)},
aqo(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqn(d),$async$aqo)
case 3:u=f
x=5
return A.b(A.az(),$async$aqo)
case 5:x=4
return A.b(f.aA("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqo,w)},
aqm(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h6P(d)
if(u<=0){v=!1
x=1
break}if(B.h6O(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqn(e),$async$aqm)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqm,w)},
b0z(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jc(e,d),$async$b0z)
case 3:if(g){v=-1
x=1
break}u=B.h6P(d)
if(u<=0){v=-1
x=1
break}if(B.h6O(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqn(e),$async$b0z)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0z,w)},
cds(d,e,f){var x=0,w=A.j(y.y),v
var $async$cds=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jc(e,d),$async$cds)
case 3:if(h){v=!1
x=1
break}v=B.aqm(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cds,w)},
cdr(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdr=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cds(d,u,i.gUs()),$async$cdr)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdr,w)},
a7K(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7K=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUs()){v=!0
x=1
break}if(B.b0y(d,u)){v=!0
x=1
break}x=5
return A.b(A.lw(u,C.TF),$async$a7K)
case 5:x=k?3:4
break
case 3:B.hnF(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7K)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.la(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TF,"Doc Share for Organizations"),$async$a7K)
case 7:if(!k){v=!1
x=1
break}B.hnF(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7K)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7K,w)},
cdp:function cdp(){},
cdq:function cdq(){},
fVk(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fVk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fVk)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fnb.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fnb.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVk,w)},
ip3(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fnb.bt($.fnb,new B.fVm(d))},
fVm:function fVm(d){this.a=d},
foK(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$foK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.n_(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jl,null,y.H),$async$foK)
case 3:C.B4.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foK,w)},
agG(d,e,f){var x=0,w=A.j(y.H),v
var $async$agG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fnO.n(0,d,new B.acM(A.bp(e,!0,v)))
x=3
return A.b(A.az(),$async$agG)
case 3:x=2
return A.b(h.aA("String",d+"_manifest",C.Y.az(A.H(["parts",e,"size",f],v,y.C),null)),$async$agG)
case 2:return A.h(null,w)}})
return A.i($async$agG,w)},
agA(d){return B.i7H(d)},
i7H(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fnO.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agA)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b7(s,new B.fsh(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.acM(r)
$.fnO.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agA,w)},
Rv(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.GW.n(0,d,u)
x=3
return A.b(B.S2(d,u),$async$Rv)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rv,w)},
aPB(d){return B.i7F(d)},
i7F(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GW.h(0,d)
if(n!=null&&!C.aH.gau(n)){v=n
x=1
break}x=3
return A.b(B.S1(d),$async$aPB)
case 3:p=f
if(p!=null&&!C.aH.gau(p)){$.GW.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPB)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aM(r)
x=!J.cr(q)?9:10
break
case 9:B.Rv(d,q)
x=11
return A.b(J.hk(s,d),$async$aPB)
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
return A.i($async$aPB,w)},
i3H(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eE(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wI(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2D(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bE,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.fxZ(r,t),!1,s)
A.fy(r,"error",new B.fy_(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iE(0,C.NF,new B.fy0())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2D,w)},
aPV(d,e,f){return B.ia1(d,e,f)},
ia1(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPV=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2D(i),$async$aPV)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S2(o,p),$async$aPV)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agG(k,j,s),$async$aPV)
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
return A.i($async$aPV,w)},
aPU(d,e,f){return B.ia0(d,e,f)},
ia0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPU=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPV(d,e,f),$async$aPU)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2D(f),$async$aPU)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GW.n(0,s,r)
$.RM.n(0,s,r)
x=11
return A.b(B.Rv(s,r),$async$aPU)
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
return A.i($async$aPU,w)},
Cd(d,e,f,g,h,i){return B.hSI(d,e,f,g,h,i)},
hSI(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cd=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cM.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jz(p,q,o,n,new A.V(Date.now(),0,!1).ab().ag(),a0,f,B.b0G(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rv(s,d),$async$Cd)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cd)
case 10:r=a2
x=11
return A.b(r.aA("String",s,C.cP.gcu().aM(d)),$async$Cd)
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
return A.b(B.B9(e),$async$Cd)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.H5(e,j),$async$Cd)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cd,w)},
VX(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VX=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.B9(d),$async$VX)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cM.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hnH(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().ag()
i=new B.jz(m,n,k,l,j,"From folder",null,B.b0G(),null)
$.ah9.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2D(o),$async$VX)
case 7:g=a1
x=g!=null&&!C.aH.gau(g)?8:10
break
case 8:$.GW.n(0,h,g)
$.RM.n(0,h,g)
B.Rv(h,g)
x=9
break
case 10:x=11
return A.b(B.aPU(d,m,o),$async$VX)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.H5(d,t),$async$VX)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VX,w)},
h6T(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h6T=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hnH(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jd(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gau(s)){v=B.Cd(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6T,w)},
Jd(d,e,f,g,h,i){return B.hSH(d,e,f,g,h,i)},
hSH(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jd=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cM.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L2(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jd)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.h7(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.Sz(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S2(k,l),$async$Jd)
case 11:J.c5(q,k);++p
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
return A.b(j.a1(0),$async$Jd)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S2(k,new Uint8Array(A.cb(n))),$async$Jd)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agG(r,q,g),$async$Jd)
case 16:f=new B.jz(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().ag(),a2,null,B.b0G(),null)
x=17
return A.b(B.B9(d),$async$Jd)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.H5(d,e),$async$Jd)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jd,w)},
VZ(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$VZ=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ah9.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2D(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agA(s),$async$VZ)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S1(u[o]),$async$VZ)
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
v=A.wI(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RM.h(0,s)
if(i==null)i=$.GW.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rN(d,e),$async$VZ)
case 12:i=a0
if(i!=null&&!C.aH.gau(i))$.RM.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wI(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VZ,w)},
hnH(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gal(x):""
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
rN(d,e){return B.hSJ(d,e)},
hSJ(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RM.h(0,f)
if(e==null)e=$.GW.h(0,f)
if(e!=null&&!C.aH.gau(e)){v=e
x=1
break}s=$.ah9.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2D(s),$async$rN)
case 9:r=a3
if(r!=null&&!C.aH.gau(r)){$.GW.n(0,f,r)
$.RM.n(0,f,r)
B.Rv(f,r)
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
return A.b(B.agA(f),$async$rN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azy(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S1(g[l]),$async$rN)
case 16:k=a3
if(k!=null&&!C.aH.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.apI()
if(!C.aH.gau(r)){$.GW.n(0,f,r)
$.RM.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPB(f),$async$rN)
case 17:j=a3
if(j!=null&&!C.aH.gau(j)){$.RM.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.VZ(a0,a1,0,g),$async$rN)
case 20:i=a3
if(i!=null&&!C.aH.gau(i)){h=new Uint8Array(A.cb(i))
$.GW.n(0,f,h)
$.RM.n(0,f,h)
B.Rv(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rN,w)},
hSM(d){var x,w,v=$.ah9.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hSN(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hSK(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqu(d,e,f,g,h){return B.hSL(d,e,f,g,h)},
hSL(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqu=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ah9.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2D(s),$async$aqu)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rN(g,e),$async$aqu)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f_().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.iz(d).xG(h,r,new A.Ep(!0,e.c)),$async$aqu)
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
return A.i($async$aqu,w)},
hnJ(d,e,f,g,h){var x,w,v,u,t=$.hnI
$.hnI=t+1
x=Date.now()
w=""+1000*x+"_"+C.cM.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdD.n(0,t,new B.bxy(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azy(u)))
return t},
h6U(d){var x=0,w=A.j(y.H)
var $async$h6U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6U,w)},
Je(d,e){var $async$Je=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ah9.h(0,h)
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
return A.qo(B.VZ(d,e,p,o<q?o:q),$async$Je,w)
case 8:n=a1
x=n!=null&&!C.aH.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qo(A.Gt(n),$async$Je,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qo(B.agA("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Je,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qo(B.S1(h[l]),$async$Je,w)
case 18:k=a1
x=k!=null&&!C.aH.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qo(A.Gt(k),$async$Je,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qo(B.rN(d,e),$async$Je,w)
case 22:j=a1
x=j!=null&&!C.aH.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qo(A.Gt(A.wI(j,p,o<i?o:i)),$async$Je,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qo(null,0,w)
case 2:return A.qo(t.at(-1),1,w)}})
var x=0,w=A.hws($async$Je,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hye(w)},
b0I(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdD.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5x(),$async$b0I)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0I,w)},
VY(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$VY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdD.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5x(),$async$VY)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agG(r.c,u,r.z),$async$VY)
case 4:t=new B.jz(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b0G(),null)
u=r.a
x=5
return A.b(B.B9(u),$async$VY)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.H5(u,s),$async$VY)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VY,w)},
a7R(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdD.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahR(u[s]),$async$a7R)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a7R,w)},
cdF(d,e,f){var x=0,w=A.j(y.H)
var $async$cdF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCz(d,e,f),$async$cdF)
case 2:return A.h(null,w)}})
return A.i($async$cdF,w)},
cdG(d,e,f){var x=0,w=A.j(y.H)
var $async$cdG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCA(d,e,f),$async$cdG)
case 2:return A.h(null,w)}})
return A.i($async$cdG,w)},
Fb(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.B9(d),$async$Fb)
case 2:p=g
J.nM(p,new B.cdE(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GW.W(0,v)
$.ah9.W(0,e)
x=3
return A.b(B.agA(v),$async$Fb)
case 3:u=g
$.fnO.W(0,v)
x=4
return A.b(A.az(),$async$Fb)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fb)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fb)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahR(s[q]),$async$Fb)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahR(v),$async$Fb)
case 13:x=14
return A.b(B.H5(d,p),$async$Fb)
case 14:return A.h(null,w)}})
return A.i($async$Fb,w)},
b0H(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rN(d,e),$async$b0H)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.foK(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0H,w)},
B9(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$B9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$B9)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fy1(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$B9,w)},
H5(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$H5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$H5)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fC8(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aA("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$H5)
case 3:return A.h(null,w)}})
return A.i($async$H5,w)},
bCz(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B9(d),$async$bCz)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fwc(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFK(f))
x=4
return A.b(B.H5(d,u),$async$bCz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCz,w)},
bCA(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B9(d),$async$bCA)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fwd(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cNX(f))
x=4
return A.b(B.H5(d,u),$async$bCA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCA,w)},
acM:function acM(d){this.a=d},
fsh:function fsh(){},
fxZ:function fxZ(d,e){this.a=d
this.b=e},
fy_:function fy_(d){this.a=d},
fy0:function fy0(){},
cdE:function cdE(d){this.a=d},
bxy:function bxy(d,e,f,g,h,i,j,k,l){var _=this
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
fy1:function fy1(){},
fC8:function fC8(){},
fwc:function fwc(d){this.a=d},
fwd:function fwd(d){this.a=d},
a7S(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aW(d,new B.cdJ())?3:4
break
case 3:x=5
return A.b(B.b0J(d,e),$async$a7S)
case 5:u=g
if(u!=null){t=u.c
B.O8(d,u.b,e,t)}v=u
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
return A.b(B.b0E(s),$async$a7S)
case 10:case 9:if(g){v=new A.QR(1,D.Ti,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W_(d,e),$async$a7S)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W4(!0,!0,d,e),$async$a7S)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.O8(d,D.A9,e,t)
v=new A.QR(p,D.A9,t)
x=1
break}v=B.cdI(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
W_(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7U(null,d,e),$async$W_)
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
return A.b(B.b0D(p,d.length,e),$async$W_)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdG(e,C.d.gH(d).a,r.b),$async$W_)
case 7:case 6:q=r.a
x=8
return A.b(B.O8(d,D.Ti,e,q),$async$W_)
case 8:v=new A.QR(d.length,D.Ti,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W_,w)},
W0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n2)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7T(d,e),$async$W0)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdB(s,d,e,t),$async$W0)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0E(t),$async$W0)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rN(e,d),$async$W0)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W_(A.a([d],y.r),e),$async$W0)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
W2(){var x=0,w=A.j(y.H)
var $async$W2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h6N(),$async$W2)
case 2:x=3
return A.b(B.aS9(),$async$W2)
case 3:return A.h(null,w)}})
return A.i($async$W2,w)},
a7T(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0G()
x=3
return A.b(B.cdF(e,d.a,u),$async$a7T)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
O8(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$O8=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ti&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7T(p,f),$async$O8)
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
return A.b(B.cdA(o,p,u,f),$async$O8)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdB(o,p,f,t),$async$O8)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdz(o,u,p,f),$async$O8)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$O8,w)},
b0J(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdH(e,d),$async$b0J)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W4(!1,!0,d,e),$async$b0J)
case 4:u=g
if(u!=null){t=u.b
v=new A.QR(u.a,D.A9,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0J,w)},
cdH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.VZ(d,s,0,1),$async$cdH)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.K)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdH,w)},
cdI(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7U(null,d,e),$async$cdI)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hnG(u)
if(t.length>800){v=null
x=1
break}v=new A.QR(d.length,D.dNC,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdI,w)},
aqv(d,e,f){return B.hSQ(d,e,f)},
hSQ(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqv=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.nl(g,1)
x=B.h6S(g)?3:4
break
case 3:x=5
return A.b(B.cdC(g),$async$aqv)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nl(g,13))
try{k=B.Fc(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nl(g,13))
u=9
x=12
return A.b(B.b0C(q),$async$aqv)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W1(p,a0)
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
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h6R(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W1(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.Jf(C.a.i(J.nl(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.Jf(C.a.i(J.nl(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Jf(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W1(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqv,w)},
Jf(d,e,f){return B.hSO(d,e,f)},
hSO(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jf=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0u(r),$async$Jf)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0u(A.cF(s,0,null)),$async$Jf)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cde(o,r,a1,n,a2),$async$Jf)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdd(q),$async$Jf)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W1(l,a2),$async$Jf)
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
return A.i($async$Jf,w)},
a7U(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rN(f,r),$async$a7U)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcu().aM(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
W1(d,e){return B.hSP(d,e)},
hSP(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W1=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cG.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cd(i,a3,d,k,l,o),$async$W1)
case 9:h=a5
if(h!=null)J.c5(n,h)
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
return A.i($async$W1,w)},
O7:function O7(d,e){this.a=d
this.b=e},
cdJ:function cdJ(){},
a2c(d){var x=A.R(d).ax.a===C.J,w=x?D.ahO:D.afn,v=x?D.ajz:C.c,u=x?C.aQ:C.O,t=x?C.bM:C.an,s=x?D.agO:C.aO
return new A.aHL([w,s,v,u,t,x?C.fn:C.bQ])},
hDy(d,e){var x=e?C.w.j(0.72):C.aT
return A.cf(null,x,!0,null,new B.fZt(e),d,null,!0,!0,y.N)},
cdo(d,e,f,g,h,i,j,k,l){return new B.VU(e,l,d,f,k,j,g,h,i,null)},
a_9(d,e,f,g,h,i,j){return new B.bfi(g,h,j,e,i,d,f,null)},
fZt:function fZt(d){this.a=d},
a_6:function a_6(d,e){this.c=d
this.a=e},
aAK:function aAK(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbK:function dbK(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
bxa:function bxa(){},
VU:function VU(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEM:function aEM(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZ9:function dZ9(d){this.a=d},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d,e){this.a=d
this.b=e},
dY6:function dY6(d,e,f){this.a=d
this.b=e
this.c=f},
dY5:function dY5(d){this.a=d},
dY7:function dY7(d,e){this.a=d
this.b=e},
dYc:function dYc(d,e,f){this.a=d
this.b=e
this.c=f},
dYb:function dYb(d){this.a=d},
dYY:function dYY(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d){this.a=d},
dYu:function dYu(d,e,f){this.a=d
this.b=e
this.c=f},
dYr:function dYr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYa:function dYa(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYB:function dYB(){},
dYg:function dYg(d){this.a=d},
dYV:function dYV(d,e){this.a=d
this.b=e},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYs:function dYs(d,e){this.a=d
this.b=e},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e){this.a=d
this.b=e},
dYK:function dYK(d){this.a=d},
dYJ:function dYJ(d){this.a=d},
dYL:function dYL(){},
dYM:function dYM(){},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYP:function dYP(){},
dYQ:function dYQ(d){this.a=d},
dYI:function dYI(d,e){this.a=d
this.b=e},
dYD:function dYD(d){this.a=d},
dYE:function dYE(d){this.a=d},
dYF:function dYF(d){this.a=d},
dYG:function dYG(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYd:function dYd(){},
dYe:function dYe(d){this.a=d},
dYf:function dYf(d,e){this.a=d
this.b=e},
dY9:function dY9(d,e){this.a=d
this.b=e},
dY8:function dY8(d,e,f){this.a=d
this.b=e
this.c=f},
dYv:function dYv(d){this.a=d},
dYw:function dYw(d,e,f){this.a=d
this.b=e
this.c=f},
dYp:function dYp(d,e){this.a=d
this.b=e},
dYl:function dYl(d){this.a=d},
dYi:function dYi(d,e,f){this.a=d
this.b=e
this.c=f},
dYm:function dYm(d){this.a=d},
dYn:function dYn(d){this.a=d},
dYo:function dYo(){},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYj:function dYj(d){this.a=d},
dYh:function dYh(d,e,f){this.a=d
this.b=e
this.c=f},
dYk:function dYk(){},
dYA:function dYA(d){this.a=d},
dYz:function dYz(d,e){this.a=d
this.b=e},
dYU:function dYU(d,e){this.a=d
this.b=e},
dYR:function dYR(d){this.a=d},
dYS:function dYS(d,e){this.a=d
this.b=e},
dYT:function dYT(d){this.a=d},
dZ6:function dZ6(d){this.a=d},
dZ4:function dZ4(d){this.a=d},
dZ5:function dZ5(d){this.a=d},
dZ7:function dZ7(){},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d,e,f){this.a=d
this.b=e
this.c=f},
dZ_:function dZ_(d,e,f){this.a=d
this.b=e
this.c=f},
dZ2:function dZ2(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
aAH:function aAH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfh:function bfh(d,e,f){this.c=d
this.d=e
this.a=f},
dbG:function dbG(){},
dbH:function dbH(){},
ad5:function ad5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dc3:function dc3(){},
dc2:function dc2(d){this.a=d},
a_8:function a_8(d,e,f){this.c=d
this.d=e
this.a=f},
aAM:function aAM(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dc_:function dc_(d){this.a=d},
dc0:function dc0(d,e,f){this.a=d
this.b=e
this.c=f},
dc1:function dc1(d,e){this.a=d
this.b=e},
dbY:function dbY(d,e){this.a=d
this.b=e},
dbW:function dbW(d){this.a=d},
dbU:function dbU(d){this.a=d},
dbR:function dbR(d){this.a=d},
dbX:function dbX(d){this.a=d},
dbT:function dbT(d){this.a=d},
dbZ:function dbZ(d){this.a=d},
dbV:function dbV(d){this.a=d},
dbS:function dbS(d){this.a=d},
a_5:function a_5(d,e,f){this.c=d
this.d=e
this.a=f},
aAJ:function aAJ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbD:function dbD(d){this.a=d},
dbC:function dbC(d,e){this.a=d
this.b=e},
dbE:function dbE(d){this.a=d},
dbB:function dbB(d,e){this.a=d
this.b=e},
dbF:function dbF(d){this.a=d},
dbA:function dbA(d,e){this.a=d
this.b=e},
dbw:function dbw(d){this.a=d},
dbx:function dbx(d){this.a=d},
dby:function dby(d,e){this.a=d
this.b=e},
dbz:function dbz(d){this.a=d},
Qq:function Qq(d,e,f){this.c=d
this.d=e
this.a=f},
aAP:function aAP(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcg:function dcg(d){this.a=d},
dch:function dch(d){this.a=d},
dci:function dci(d){this.a=d},
dcj:function dcj(d){this.a=d},
dck:function dck(d,e){this.a=d
this.b=e},
dcl:function dcl(d){this.a=d},
dcn:function dcn(d){this.a=d},
dcm:function dcm(d){this.a=d},
a_a:function a_a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAN:function aAN(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcc:function dcc(d,e){this.a=d
this.b=e},
dcd:function dcd(d,e){this.a=d
this.b=e},
dc4:function dc4(d,e,f){this.a=d
this.b=e
this.c=f},
dc5:function dc5(d){this.a=d},
dc6:function dc6(){},
dcb:function dcb(){},
dc7:function dc7(d,e){this.a=d
this.b=e},
dc8:function dc8(d,e){this.a=d
this.b=e},
dc9:function dc9(d,e){this.a=d
this.b=e},
dca:function dca(d,e){this.a=d
this.b=e},
ad3:function ad3(d,e){this.c=d
this.a=e},
dbv:function dbv(d){this.a=d},
a_4:function a_4(d){this.a=d},
aAI:function aAI(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_b:function a_b(d,e){this.c=d
this.a=e},
aAO:function aAO(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcf:function dcf(d){this.a=d},
dce:function dce(d){this.a=d},
bfi:function bfi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hSR(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
O9(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$O9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$O9)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$O9)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
return A.i($async$O9,w)},
a7V(d){return B.hSS(d)},
hSS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7V)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cK,null),$async$a7V)
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
return A.i($async$a7V,w)},
W3(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O9(),$async$W3)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dM(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a7V(s),$async$W3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W3,w)},
W4(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W4=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c7(),$async$W4)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cdL(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hSR()
t=A.U(u).k("N<1,a8<m,aE>>")
r=A.C(new A.N(u,new B.cdM(s),t),t.k("ak.E"))
x=6
return A.b(B.O9(),$async$W4)
case 6:q=i
J.aK(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a7V(q),$async$W4)
case 7:x=8
return A.b(B.a7W(r,u,g,s),$async$W4)
case 8:v=new A.br5(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
aqw(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.O9(),$async$aqw)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqw,w)},
cdN(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.O9(),$async$cdN)
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
return A.i($async$cdN,w)},
a7W(d,e,f,g){return B.hST(d,e,f,g)},
hST(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7W=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqu("media",r,new B.cdK(s,e,g),f,q),$async$a7W)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W3(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7W)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W3(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a7W)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W3(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7W)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7W,w)},
Fc(d,e,f){return B.hSU(d,e,f)},
hSU(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fc=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$Fc)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqw(b3),$async$Fc)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iJ,null,g),$async$Fc)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqw(b3),$async$Fc)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.O9(),$async$Fc)
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
a8=$.f_().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pg(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abj(a8.a,b0,"media",a8.d,a9).D9(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0v(k,n,o,s,b7),$async$Fc)
case 17:j=c0
if(j!=null){J.c5(p,j);++q
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
a2=$.f_().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pg(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abj(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fc)
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
a0=A.dM(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7V(e),$async$Fc)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fc,w)},
cdL:function cdL(){},
cdM:function cdM(d){this.a=d},
cdK:function cdK(d,e,f){this.a=d
this.b=e
this.c=f},
aS9(){var x=0,w=A.j(y.H),v,u
var $async$aS9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i2Y=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aS9)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aS9)
case 3:u=$.hce
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aS9)
case 4:$.hce=$.ibP=$.ibQ=null
return A.h(null,w)}})
return A.i($async$aS9,w)},
fBK(d){var x=0,w=A.j(y.H),v,u
var $async$fBK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8T){x=1
break}u=new A.bk($.bE,y.d4)
d.c=new B.fBL(new A.c2(u,y.aY))
x=3
return A.b(u.iE(0,C.i8,new B.fBM()),$async$fBK)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fBK,w)},
ibN(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hSB(x):x},
hci(d){var x=0,w=A.j(y.T),v,u,t
var $async$hci=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqy(u)
x=1
break}v=B.h6R(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hci,w)},
hch(d){var x=0,w=A.j(y.T),v,u,t
var $async$hch=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqz(u)
x=1
break}v=B.h6R(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hch,w)},
fV3(d){var x=0,w=A.j(y.T),v
var $async$fV3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqz(d),$async$fV3)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fV3,w)},
bDs(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hch(d),$async$bDs)
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
return A.i($async$bDs,w)},
fpy(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fpy=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.VY(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cd(d.apI(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpy,w)},
H7(d,e,f){return B.ie5(d,e,f)},
ie5(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H7=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hci(a1),$async$H7)
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
return A.b($.hFx().aG0(D.dBP,null),$async$H7)
case 4:l=d.hce=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azy(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bE,y.b1)
l.y=new B.fCl(f,k,new B.fCm(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8z(0,new B.Yb(r,"offer")),$async$H7)
case 5:d=l
x=7
return A.b(l.amc(0),$async$H7)
case 7:x=6
return A.b(d.a8r(0,a4),$async$H7)
case 6:x=8
return A.b(B.fBK(l),$async$H7)
case 8:x=9
return A.b(l.aqu(),$async$H7)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ibN(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqA(m,h),$async$H7)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hnG(h)
case 11:v=new A.bql(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H7,w)},
fBL:function fBL(d){this.a=d},
fBM:function fBM(){},
fCm:function fCm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCl:function fCl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fCk:function fCk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ig9(d){switch(d){case"new":return D.ex6
case"checking":return D.ex7
case"connected":return D.ex9
case"completed":return D.ex8
case"failed":return D.exb
case"disconnected":return D.exc
case"closed":return D.aQr
case"count":return D.exa}return D.aQr},
iga(d){switch(d){case"new":return D.aQs
case"gathering":return D.exd
case"complete":return D.a8T}return D.aQs},
iqx(d){switch(d){case"stable":return D.exe
case"have-local-offer":return D.exf
case"have-local-pranswer":return D.exh
case"have-remote-offer":return D.exg
case"have-remote-pranswer":return D.exi
case"closed":return D.aQy}return D.aQy},
ioL(d){switch(d){case"new":return D.aQv
case"connecting":return D.aQw
case"connected":return D.aQx
case"closed":return D.a8U
case"disconnected":return D.aQu
case"failed":return D.aQt}return D.a8U},
aaf:function aaf(d,e){this.a=d
this.b=e},
Pb:function Pb(d,e){this.a=d
this.b=e},
Ya:function Ya(d,e){this.a=d
this.b=e},
Pa:function Pa(d,e){this.a=d
this.b=e},
FG:function FG(d,e){this.a=d
this.b=e},
crp:function crp(){},
h8C(d){var x=new B.FF()
x.a=d
x.b=!0
return x},
FF:function FF(){this.b=this.a=$},
aae:function aae(){},
av5:function av5(){},
Yb:function Yb(d,e){this.a=d
this.b=e},
h6N(){var x=0,w=A.j(y.H)
var $async$h6N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6N,w)},
h6Q(d,e,f){var x=0,w=A.j(y.T),v
var $async$h6Q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n2))){v=null
x=1
break}v=B.fVk(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6Q,w)},
hnG(d){var x,w=F.aeN.a5g(C.dR.aM(d),null)
if(w.length===0){x=C.dR.aM(d)
return C.cP.gcu().aM(x)}return C.cP.gcu().aM(w)},
hSA(d){var x,w,v=C.cG.aM(d)
try{x=C.c9.cG(0,F.aeM.bfC(v,!1))
return x}catch(w){x=C.c9.cG(0,v)
return x}},
h6R(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hSA(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cG(0,C.cG.aM(x))
return v}catch(u){return x}}return null},
hSB(d){var x,w,v,u,t,s=A.a([],y.s)
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
hSC(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0B(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b0B)
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
return A.i($async$b0B,w)},
cdt(d,e){return B.hSD(d,e)},
hSD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdt=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cK,null),$async$cdt)
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
return A.i($async$cdt,w)},
b0E(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0B(d),$async$b0E)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0E,w)},
b0D(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0D=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hSC()
r=C.a.i(f)
t=C.dR.aM(s)
x=3
return A.b(B.cdt(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b0D)
case 3:if(!h){v=null
x=1
break}v=new A.a1c("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0D,w)},
b0C(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0B(o),$async$b0C)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cG(0,C.cG.aM(u))
if(J.j6(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0C,w)},
cdu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEp("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cK),$async$cdu)
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
return A.i($async$cdu,w)},
b0F(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jb(),$async$b0F)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0F,w)},
aqr(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqr)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0F(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqr,w)},
aqp(d,e){var x=0,w=A.j(y.H)
var $async$aqp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqp)
case 3:x=2
return A.b(g.aA("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqp)
case 2:return A.h(null,w)}})
return A.i($async$aqp,w)},
a7N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7N)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jb(),$async$a7N)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ao(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=5
return A.b(A.a7M(s),$async$a7N)
case 5:x=6
return A.b(B.aqp(f,u),$async$a7N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
a7O(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7O=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7O)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jb(),$async$a7O)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
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
return A.b(B.aqp(g,q),$async$a7O)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7M(u),$async$a7O)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7O,w)},
a7P(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7P=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7P)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jb(),$async$a7P)
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
s=B.b0y(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7P)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aA("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a7P)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7P,w)},
cdv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdv)
case 7:s=f
p=A.w(n)
r=A.aT(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aQ(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a2(q,y.N,y.z)
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
return A.i($async$cdv,w)},
Jc(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdv(d),$async$Jc)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0F(t),$async$Jc)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqq(d),$async$Jc)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0y(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqq(d),$async$Jc)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jc,w)},
aqq(d){var x=0,w=A.j(y.H)
var $async$aqq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqq)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqq)
case 2:return A.h(null,w)}})
return A.i($async$aqq,w)},
b0G(){var x,w=$.oo(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7Q(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h6S(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdy(d){return B.hSF(d)},
hSF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7Q(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cdy)
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
return A.i($async$cdy,w)},
aqt(d,e){return B.hSG(d,e)},
hSG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqt=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7Q(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cK,null),$async$aqt)
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
return A.i($async$aqt,w)},
cdA(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Q(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqt(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cdA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdA,w)},
cdz(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Q(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqt(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cdz)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdz,w)},
cdB(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Q(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqt(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdB,w)},
cdC(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h6S(d)){v=null
x=1
break}x=3
return A.b(B.cdy(d),$async$cdC)
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
return A.i($async$cdC,w)},
a7X(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7X=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7X)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7X)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
return A.i($async$a7X,w)},
aqx(d){return B.hSV(d)},
hSV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$aqx)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cK,null),$async$aqx)
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
return A.i($async$aqx,w)},
aqy(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$aqy)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7X(),$async$aqy)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cG(0,C.cG.aM(q))
if(J.j6(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dM(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqx(s),$async$aqy)
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
return A.i($async$aqy,w)},
aqA(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c7(),$async$aqA)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7X(),$async$aqA)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dM(A.a2(s,r,q),r,q)
r=C.dR.aM(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().ag())
t.n(u,p,q)
x=5
return A.b(B.aqx(u),$async$aqA)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqA,w)},
aqz(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c7(),$async$aqz)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7X(),$async$aqz)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cG(0,C.cG.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqz,w)},
apu(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qf)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apu)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hd),$async$apu)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.vQ(o))
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
return A.i($async$apu,w)},
imI(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fTl(d){return B.imK(d)},
imK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fTl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iz("media").Lj(d,3600),$async$fTl)
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
return A.i($async$fTl,w)},
Dy(d,e,f,g,h,i){var x=null
return B.imH(d,e,f,g,h,i)},
imH(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dy=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hnJ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h6U(r),$async$Dy)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fTl(o),$async$Dy)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7R(r),$async$Dy)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aTY)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Mt(A.a([],g))
x=15
return A.b(d.f8(0,A.avV("GET",A.cF(n,0,null))).df(0,C.Gx),$async$Dy)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7R(r),$async$Dy)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L2(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dy)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0I(r,k),$async$Dy)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$Dy)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.VY(r)
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
return A.b(B.a7R(r),$async$Dy)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dy,w)},
aRN(d){return B.imJ(d)},
imJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iz("media").W(0,d),$async$aRN)
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
return A.i($async$aRN,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[156]
O=c[46]
F=c[262]
I=c[147]
P=c[232]
E=c[224]
G=c[93]
Q=c[194]
R=c[148]
S=c[230]
K=c[267]
L=c[275]
B=a.updateHolder(c[22],B)
D=c[273]
T=c[193]
M=c[214]
U=c[72]
V=c[256]
W=c[78]
X=c[61]
N=c[92]
Y=c[274]
B.crq.prototype={
aG0(d,e){return this.cPr(d,e)},
cPr(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aG0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.T(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dM(r,s,t)
t.v(0,d)
u=new q(A.ke(A.cv(t)))
t=J.k(u)
v=B.hXy(C.cP.gcu().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aG0,w)}}
B.b5Q.prototype={
bBQ(d){var x=this,w=x.w
w.onclose=A.hp(new B.crl(x))
w.onopen=A.hp(new B.crm(x))
w.onmessage=A.hp(new B.crn(x))
w.onbufferedamountlow=A.hp(new B.cro(x))},
gdd(d){return this.x},
aiq(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FF()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h8C(J.eQ(d))
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
case 8:v=t.h8C(s.aoE(f,0,null))
x=1
break
case 7:case 4:v=B.h8C(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiq,w)}}
B.b5R.prototype={
bBR(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crr(x)))
w.addEventListener("icecandidate",A.hp(new B.crs(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crt(x)))
w.onicegatheringstatechange=A.hp(new B.cru(x))
w.addEventListener("signalingstatechange",A.hp(new B.crv(x)))
if(!$.hga())w.addEventListener("connectionstatechange",A.hp(new B.crw(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crx(x)))
w.addEventListener("track",A.hp(new B.cry(x)))},
amc(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ke(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amc)
case 3:t=f
v=new B.Yb(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amc,w)},
a8r(d,e){return this.bqP(0,e)},
bqP(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
a8z(d,e){return this.br9(0,e)},
br9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
v=new B.Yb(s,t?null:r.type)
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
B.ad4.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_7.prototype={
S(){return new B.aAL()},
gd1(){return this.c}}
B.aAL.prototype={
Y(){this.a3()
this.aeZ()},
aeZ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0z(u.e,u.c),$async$aeZ)
case 2:t=e
if(v.c!=null)v.m(new B.dbO(v,t))
return A.h(null,w)}})
return A.i($async$aeZ,w)},
QS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqm(t.e,t.c,!1),$async$QS)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fi1)
x=1
break}x=4
return A.b(B.a7L(u.a.c,"individual"),$async$QS)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6Q(A.eb(new B.dbL(u),!1,null,y.H)),$async$QS)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QS,w)},
JE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fzG(o),$async$JE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7P(o.e,r,s,q),$async$JE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff2)
x=1
break}x=5
return A.b(B.a7L(u.a.c,"member"),$async$JE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6Q(A.eb(new B.dbN(u),!1,null,y.H)),$async$JE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JE,w)},
yB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7K(t.e,o,t.f,t.r,t.w,s),$async$yB)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7L(u.a.c,"org_owner"),$async$yB)
case 4:x=5
return A.b(B.aqr(u.a.c),$async$yB)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fAa(o),$async$yB)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7N(s,t,o,q.c),$async$yB)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff_)
x=1
break}x=10
return A.b(B.aqr(u.a.c),$async$yB)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6Q(A.eb(new B.dbM(u),!1,null,y.H)),$async$yB)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yB,w)},
B(d){var x,w,v,u=this,t=null,s=A.R(d).ax.a===C.J,r=s?C.jz:C.qf,q=B.h6P(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h1,24)],y.V)
v=y.p
w=A.q(t,A.x(A.a([A.q(t,D.fBP,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h8,t,t,t),C.aC,D.fVC,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c8r,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lV(new B.dbQ(),t),C.Q,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.O,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adx(C.f4,C.aD4,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gciB(),t),C.af],v))
p.push(new B.adx(C.po,C.a4x,"Team Member","Sign in with your organization access code + password",u.gcjs(),t))
p.push(C.af)
p.push(new B.adx(C.ap9,C.a6a,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gciY(),t))
return A.c4(t,r,A.bm(!0,A.ch(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amf,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adx.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aJ(!1,C.a3,!0,s,A.aO(!1,r,!0,A.eI(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a6,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nT,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.z4,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDo.prototype={}
B.aGw.prototype={}
B.jz.prototype={
mI(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gara(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.j.ad(x/1024,1)+" KB"
if(x<1073741824)return C.j.ad(x/1048576,1)+" MB"
return C.j.ad(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.T(y.N,y.z)
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
bf5(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jz(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cNX(d){return this.bf5(null,d)},
aFK(d){return this.bf5(d,null)}}
B.VS.prototype={
S(){return new B.aEK(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEK.prototype={
Y(){this.a3()
this.af_()},
af_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cc(u.a.c),$async$af_)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dY2(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af_,w)},
af0(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$af0)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fiW)
case 1:return A.h(v,w)}})
return A.i($async$af0,w)},
a_r(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_r=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apu(s.d,4),$async$a_r)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tk(r,"ngmy_my_code_"+m+".png"),$async$a_r)
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
return A.b(A.aaT("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiS,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.J,n=o?C.jz:C.qf,m=o?C.c:C.O,l=A.eG(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m0
else if(q.e==null)x=A.at(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.Q,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a5_,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a6,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.alO,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.ch(A.x(A.a([x,C.n9,w,C.l3,new A.em(A.q(p,A.q7(p,p,!1,B.hSw(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l3,A.A(A.a([A.E(A.es(N.D2,C.VK,q.gcb4(),p),1),C.at,A.E(A.dh(C.zt,C.abd,q.gcb5(),A.bo(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3i,D.fRc,q.gcyg(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.O5,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.VW.prototype={
S(){return new B.aEN(new A.au(C.av,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aEN.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Ja(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ja(u.d.a.a)
if(t==null){u.m(new B.dZb(u))
x=1
break}u.m(new B.dZc(u))
s=u.a
r=s.c
x=3
return A.b(B.a7J(s.d,new B.dZd(u),t,r),$async$a_s)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZe(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a2H(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2H=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZf(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rN(r.a.c,q),$async$a2H)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZg(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiC(p,m,l,j,k),$async$a2H)
case 8:o=e
if(r.c!=null)r.m(new B.dZh(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZi(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZj(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2H,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.J,i=j?D.ahO:D.afn,h=j?D.ajz:C.c,g=j?C.aQ:C.O,f=j?C.bM:C.an,e=j?D.agO:C.aO
i=[i,e,h,g,f,j?C.fn:C.bQ]
x=A.R(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eG(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dx(!0,A.q(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dx(!0,A.q(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bWQ,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ev,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fq,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a5_,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uM(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkK()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.O0,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZk(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mw,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.L(i[1],C.r,1)
m=J.M6(l.a.d,4)
m=A.C(new A.N(m,new B.dZl(x,new A.aHL(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lf,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.Q,e,C.Q,q,C.d6,p,C.Q,A.q(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eD,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fdx)
else q.push(A.X(C.lN,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cT(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b4,new A.o(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eU,k,k,k)],r))}e=A.E(A.ch(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bEs,k,k,C.ah),1)
u=l.f?k:l.gcyh()
t=i[3]
s=i[1]
q=A.n(16)
s=A.es(M.a3i,D.fSi,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcb6()
t=A.bo(C.aE,k,k,0,C.c,k,C.nz,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lz(new B.dZm(),A.x(A.a([e,new A.D(D.bDX,A.x(A.a([s,C.Q,i,C.af,A.bI(l.f?C.tu:D.fQx,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cx,C.a_x,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkK.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bA,v.length),C.aP)}}
B.VT.prototype={
S(){return new B.aEL()}}
B.aEL.prototype={
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
break}r.m(new B.dY3(r))
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
return A.b(B.a7O(p,m,n,o,C.a.i(l).length===0?null:l),$async$af1)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fix)
s=[1]
x=4
break}p.L(y.q).f.U(D.fha)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dY4(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af1,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.J?C.jz:C.qf,q=A.eG(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fJ_,s,s,s,1,s,!0),p=A.q(s,D.bw2,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.I_,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c2Y,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c2T,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c38,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcb7()
u=A.bo(C.aE,s,s,s,s,C.h2,s,s,s,s,s,s)
return A.c4(q,r,A.ch(A.x(A.a([p,C.d6,o,C.af,x,C.af,w,C.n9,A.bI(t.r?C.tu:C.aWN,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.acM.prototype={}
B.bxy.prototype={
a5x(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apI()))
x=3
return A.b(B.S2(t,s),$async$a5x)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5x,w)},
gd1(){return this.a}}
B.O7.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_6.prototype={
S(){return new B.aAK(new A.au(C.av,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aAK.prototype={
Y(){this.a3()
$.aW.x1$.push(new B.dbK(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
cbd(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2c(d),u=x.a.c,t=u?C.iA:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jz:v.a[0],p=A.n(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h1,32)],n),l=A.q(w,T.arP,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asC,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uM(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxa()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.R,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.GK,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b4L),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbI(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mw,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nV,new B.dbJ(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.n(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cL,12)],n)
g=y.p
return A.eR(w,C.L,new A.cR(Q.LI,A.c3(new A.D(C.yJ,A.x(A.a([l,C.aR,k,C.Q,j,C.dW,i,C.dW,A.A(A.a([f,C.at,A.E(A.c3(A.aJ(!1,C.a3,!0,w,A.aO(!1,A.n(14),!0,D.equ,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbc(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,L.PY,C.n),C.bi),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bi),w),w,w,w,C.O8,C.da,w,w,w)}}
B.bxa.prototype={
oY(d,e){return e.am6(e.a.toUpperCase())}}
B.VU.prototype={
S(){return new B.aEM(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEM.prototype={
Y(){var x=this
x.a3()
x.uj()
x.w=A.de(C.jB,new B.dZ9(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.W2()
this.a2()},
a1z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O6(u.a.c),$async$a1z)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.B9(u.a.c),$async$a1z)
case 4:u.m(new s.dYx(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1z,w)},
uj(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O6(u.a.c),$async$uj)
case 3:t=e
x=4
return A.b(B.B9(u.a.c),$async$uj)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dYy(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O5(u.d)
B.Cc(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uj,w)},
O5(d){return this.bFT(d)},
bFT(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7T(r,u.a.c),$async$O5)
case 8:p=f
if(u.c==null){x=1
break}new B.dY6(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n2))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W0(r,u.a.c),$async$O5)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.B9(u.a.c),$async$O5)
case 12:u.m(new o.dY7(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
Ou(d){return this.bMa(d)},
bMa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7T(d,u.a.c),$async$Ou)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dYc(u,d,t))
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
uk(d,e){return this.cJb(d,e)},
cJb(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dYY(r,e))
u=3
x=6
return A.b(d.$0(),$async$uk)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dYZ(r))
$.eV.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uk,w)},
gaXr(){var x=this.a
return x.f||x.r||x.w},
Iz(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Iz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXr()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdr(s,n,r,q,o,t),$async$Iz)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fMM(o,u.a.c),$async$Iz)
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
return A.b(B.DA(s,o,r,q,n,t),$async$Iz)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iz,w)},
a0D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqr(u.a.c),$async$a0D)
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
return A.b(A.a6(t,!1).cd(A.eb(new B.dYu(u,r,q),!1,null,y.H)),$async$a0D)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0D,w)},
a1J(d){return this.crP(d)},
crO(){return this.a1J(1)},
crP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXr()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqo(u.a.c),$async$a1J)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1J,w)},
acS(d,e,f){return this.c27(d,e,f)},
c27(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.uk(new B.dYr(u,d,null,e,f),"Uploading\u2026"),$async$acS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acS,w)},
bG1(){B.hCH(!1,new B.dYa(this))
return},
cwS(){this.m(new B.dYC(this))},
aAf(){var x=0,w=A.j(y.H),v=this
var $async$aAf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bG1()
return A.h(null,w)}})
return A.i($async$aAf,w)},
acO(){var x=0,w=A.j(y.H),v=this
var $async$acO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uk(new B.dYg(v),"Importing\u2026"),$async$acO)
case 2:return A.h(null,w)}})
return A.i($async$acO,w)},
SY(d){return this.cIv(d)},
cIv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYV(u,d),!1,null,y.H)),$async$SY)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.RY)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dYW(u,d),!1,null,y.H)),$async$SY)
case 8:x=1
break
case 7:x=u.c2Q(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dYX(u,d),!1,null,y.H)),$async$SY)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
c2Q(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRv,C.a.b2(x,w+1).toLowerCase())},
agA(d){return this.ciF(d)},
ciF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYs(u,d),!1,null,y.H)),$async$agA)
case 5:x=1
break
case 4:u.m(new B.dYt(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agA,w)},
Si(d){return this.czL(d)},
czL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Si=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Si)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uk(new B.dYO(u,d),"Preparing QR\u2026"),$async$Si)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Si,w)},
ajh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYP(),A.U(t).k("N<1,m>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYQ(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Si(r),$async$ajh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
aja(d){return this.czi(d)},
czi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aja=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2c(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYI(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aja)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SY(d)
break
case"qr":u.Si(A.a([d],y.r))
break
case"send_my_code":u.cjh(A.a([d],y.r))
break
case"save":u.aiy(d)
break
case"delete":u.Jo(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aja,w)},
Yk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYd(),A.U(t).k("N<1,m>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYe(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Yk)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uk(new B.dYf(u,r),"Preparing file\u2026"),$async$Yk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yk,w)},
ahF(d){return this.cq9(d)},
cq9(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hDy(d,!1),$async$ahF)
case 3:s=f
r=s==null
q=B.a7Q(r?"":s)
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
return A.b(B.fUr(u,v.a.c),$async$agG)
case 2:return A.h(null,w)}})
return A.i($async$agG,w)},
bG0(){B.hCH(!1,new B.dY9(this,null))
return},
JD(d,e){return this.cji(d,e)},
b2W(d){return this.JD(null,d)},
cjh(d){return this.JD(d,null)},
cji(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dYv(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xH.cp().aoP(!0,C.a1j,!1),$async$JD)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.uk(new B.dYw(l,s,r),"Preparing\u2026"),$async$JD)
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
return A.b(B.bFz(p,l,e,s.a.c),$async$JD)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JD,w)},
IP(d){return this.c1V(d)},
c1V(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hSv(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2W(t),$async$IP)
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
return A.b(u.uk(new B.dYp(u,d),"Receiving video\u2026"),$async$IP)
case 11:x=1
break
case 10:x=12
return A.b(u.uk(new B.dYq(u,d),"Receiving\u2026"),$async$IP)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
EJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Du()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahF(t),$async$EJ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IP(s),$async$EJ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYA(u),!1,null,y.N)),$async$EJ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uj(),$async$EJ)
case 10:x=1
break
case 9:x=11
return A.b(u.IP(C.a.i(r)),$async$EJ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EJ,w)},
aiy(d){return this.cvq(d)},
cvq(d){var x=0,w=A.j(y.H),v=this
var $async$aiy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uk(new B.dYz(v,d),"Saving\u2026"),$async$aiy)
case 2:return A.h(null,w)}})
return A.i($async$aiy,w)},
Jo(d){return this.bOv(d)},
bOv(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jo)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdu(t),$async$Jo)
case 6:case 5:s=d.a
x=7
return A.b(B.Fb(u.a.c,s),$async$Jo)
case 7:u.r.W(0,s)
x=8
return A.b(u.uj(),$async$Jo)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jo,w)},
ajn(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2c(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYU(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajn)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agG()
break
case"import":u.acO()
break}case 1:return A.h(v,w)}})
return A.i($async$ajn,w)},
cba(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n2))return C.qN
if(C.a.a0(x,"image/")||d.mI(D.RY))return C.uK
if(C.a.q(x,"pdf"))return E.Ps
return D.apB},
B(d){var x,w,v=this,u=null,t=B.a2c(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HT,u,u,u,new B.dZ4(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bXp,u,u,u,v.e?u:v.gciZ(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcwR()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bRE:E.aq0,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3f,u,u,u,v.e?u:v.gcbb(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oD,u,u,u,v.e?u:v.gb40(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZa,u,u,u,v.e?u:new B.dZ5(v),u,u,u,u,"More options",u))
q=A.eG(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lV(new B.dZ6(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dx(!0,A.q(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.R(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dx(!0,A.q(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.R(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kl(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAH(C.jG,s,!0,t,w?u:v.gczM(),u),1)
x.push(new A.D(D.bCG,A.lz(new B.dZ7(),A.A(A.a([s,C.at,A.E(new B.aAH(C.uL,"Export",!1,t,w?u:v.gbSn(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cx,C.j0,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfh(t,v.e?u:v.gb40(),u)
else s=A.km(!0,u,u,new B.dZ8(v,t),s,u,D.bCy,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAH.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aE,t,t,0,C.c,t,C.we,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.we,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f9,t,t,t),u.r,v)}}
B.bfh.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dbG(),new A.D(E.a0q,A.x(A.a([A.lz(new B.dbH(),A.q(x,A.X(C.z5,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.ep,C.hE,x,x,new A.bq(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dW,A.dh(C.oD,D.fVW,this.d,A.bo(C.aE,x,x,x,C.c,x,C.O6,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.cx,C.C2,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ad5.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mI(D.n2))p=D.dr1
else{p=C.a.a0(p,"image/")||i.mI(D.RY)
n=y.O
p=p?A.a([C.cO,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gara()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n2))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.aw,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fU,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.mI(D.n2)))l.push(A.h4x(C.aE,!1,j,j,j,!1,j,j,new B.dc2(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.X(C.ov,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.lz(new B.dc3(),new A.D(C.ei,A.aJ(!1,C.a3,!0,j,A.aO(!1,r,!0,new A.D(C.a_T,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cx,h,new A.bP("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_8.prototype={
S(){return new B.aAM()},
gd1(){return this.c}}
B.aAM.prototype={
Y(){this.a3()
this.yr()},
t(){B.hSK(this.e)
this.a2()},
yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rN(o.c,o.d),$async$yr)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hSN(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hSM(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dc_(s))
x=1
break}s.m(new B.dc0(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dc1(s,q))
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
return A.b(B.rN(t.c,t.d),$async$a2G)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ffz)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiC(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2G)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2G,w)},
c1O(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kA(u,C.A,v,new B.dbY(w,t),C.hb,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aH.gau(t))x=A.fR(t,C.A,v,new B.dbZ(w),C.hb,C.dz,!0,v,!1,v,v)
else return C.bL
return A.uS(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2c(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D3,u,u,u,v.gb7M(),u,u,u,u,"Share / save",u))
r=A.eG(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fp
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D3,D.fEe,v.gb7M(),A.bo(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c1O()}return A.c4(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_5.prototype={
S(){return new B.aAJ(A.ajt(),C.bC,C.bC)},
gd1(){return this.c}}
B.aAJ.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fx(w,A.a4(w).k("fx<1>")).iA(new B.dbD(v))
x.gcX3().iA(new B.dbE(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a4(x).k("fx<1>"))}if(x==null)x=C.baW
x.iA(new B.dbF(v))
v.yr()},
yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rN(p.c,p.d),$async$yr)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbw(s))
x=1
break}x=8
return A.b(s.d.vo(0,new A.a4i(r,s.a.d.c)),$async$yr)
case 8:if(s.c==null){x=1
break}s.m(new B.dbx(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dby(s,q))
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
aVf(d){var x=d.a
return C.a.b_(C.o.u(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2c(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eG(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fp
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bSE,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.PY,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.dbz(p),C.o.E(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aVf(p.w)+" / "+p.aVf(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aE,o,o,o,o,D.fbZ,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uN:C.hs,o,o,o,o,o)
x=A.x(A.a([u,C.l3,t,x,C.d6,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbe(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.at(new A.D(C.qy,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qq.prototype={
S(){return new B.aAP()},
gd1(){return this.c}}
B.aAP.prototype={
Y(){this.a3()
this.Qb()},
Qb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h6Q(o.c,o.d,new B.dcg(s)),$async$Qb)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dch(s))
x=1
break}s.e=r
q=O.if_(r)
if(q==null){s.m(new B.dci(s))
x=1
break}s.d=q
q.aV(0,s.gb2J())
x=8
return A.b(q.iV(0).df(0,C.rM),$async$Qb)
case 8:if(s.c==null){x=1
break}s.m(new B.dcj(s))
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
break}s.m(new B.dck(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qb,w)},
che(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcl(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dr(0,x.gb2J())
w=x.d
if(w!=null)w.t()
B.ip3(x.e)
x.a2()},
af4(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0H(u.c,u.d),$async$af4)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af4,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2c(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eG(A.a([A.aG(t,t,t,t,C.oC,t,t,t,u.gcb8(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fp
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiY(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fF(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AF(s,t),A.aA(t,A.Bt(A.q(t,A.X(q?I.uN:C.hs,C.c,t,t,t,48),C.f,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b4,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcn(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c4(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_a.prototype={
S(){return new B.aAN(new A.cw(null,y.A))}}
B.aAN.prototype={
gcIT(){var x,w,v=this.a
if(v.e!==D.Tj)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIt(){var x,w,v=this.a
if(v.e!==D.A9)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcIT()
if(x!=null){v.Ri(x)
v.e=A.de(R.GA,new B.dcc(v,x))}w=v.gcIt()
if(w!=null){v.Rh(w)
v.f=A.de(C.fF,new B.dcd(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rh(d){return this.com(d)},
com(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqw(d),$async$Rh)
case 3:t=f
x=4
return A.b(B.cdN(d),$async$Rh)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dc4(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rh,w)},
Ri(d){return this.con(d)},
con(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ri=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fV3(d),$async$Ri)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDs(t),$async$Ri)
case 4:if(u.c==null){x=1
break}u.m(new B.dc5(u))
u.c.L(y.q).f.U(D.aTz)
case 1:return A.h(v,w)}})
return A.i($async$Ri,w)},
gc72(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcb9(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2s(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Du()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fiH)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dc6(),!1,null,y.N)),$async$a2s)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDs(s),$async$a2s)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTz)
case 1:return A.h(v,w)}})
return A.i($async$a2s,w)},
aaG(d){return this.bMb(d)},
bMb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aO(t,", "))),$async$aaG)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaG,w)},
af2(d){return this.bLV(d)},
bLV(d){var x=0,w=A.j(y.H),v=this
var $async$af2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$af2)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fg2)
return A.h(null,w)}})
return A.i($async$af2,w)},
a2m(d){return this.cvs(d)},
cvs(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apu(s.d,4),$async$a2m)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tk(r,"ngmy_doc_share_qr.png"),$async$a2m)
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
gaYI(){var x,w=this.a
if(w.e!==D.J_)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaD(d){return this.bM4(d)},
bM4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYI()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaD)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fhH)
case 1:return A.h(v,w)}})
return A.i($async$aaD,w)},
af3(){var x=0,w=A.j(y.H),v=this,u
var $async$af3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.W2(),$async$af3)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$af3,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2c(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.J_&&i!==D.Tj&&i!==D.A9
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eG(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J_||t===D.Tj||t===D.A9?l:A.aG(l,l,l,l,C.ln,l,l,l,m.gb0L(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.Q,A.q7(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc72(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J_){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.Q,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcb9(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.R,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2_,D.fNL,new B.dc7(m,d),l)],p))}if(m.a.e===D.J_&&m.gaYI()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.bZv,D.fKm,new B.dc8(m,d),l)],p))
if(m.a.e===D.A9){x=(m.w?C.dH:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.Q,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Tj){x=(m.r?C.dH:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.Q,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.af,A.dh(D.bV5,D.fQT,m.gcvP(),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oH(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.q(l,A.x(q,C.m,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D2,C.VK,new B.dc9(m,d),l),1),C.at,A.E(A.dh(C.zt,C.abd,new B.dca(m,d),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.Q,new A.a5(1/0,l,A.bI(C.AM,l,m.gb0L(),A.bo(C.aN,l,l,l,l,C.h2,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dcb(),y.C)}}
B.ad3.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.ch(A.x(A.a([w,C.aR,A.q(x,A.q7(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bI(C.AN,x,new B.dbv(d),x)],u),x,x,C.ni,v,x,x,x,x,D.fDe,x)}}
B.a_4.prototype={
S(){return new B.aAI(A.zO(C.yo,C.o0,C.v_))}}
B.aAI.prototype={
t(){this.d.t()
this.a2()},
ayO(d){var x,w,v,u,t
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
return A.c4(A.eG(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fKT,x,x,x,1,x,!0),C.w,A.zN(this.d,C.bZ,this.gayN()),x,!1,!1,x,x)}}
B.a_b.prototype={
S(){return new B.aAO(A.zO(C.yo,C.o0,C.v_))},
gd1(){return this.c}}
B.aAO.prototype={
c2S(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mz("text/plain"),$async$ah2)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fiB)
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
return A.b(B.hDy(p,!0),$async$abu)
case 3:t=e
p=t==null
s=B.a7Q(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.ff9)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abu,w)},
t(){this.d.t()
this.a2()},
ayO(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c2S(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.aqV,v,v,v,w.gbRS(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3m,v,v,v,w.gclI(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eG(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uH:P.Pa,v,v,v,v,v),v,v,v,new B.dcf(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fRO,v,v,v,1,v,!0)
u=A.zN(w.d,C.bZ,w.gayN())
x=A.n(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ewM],s),v),v,!1,!1,v,v)}}
B.bfi.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pe
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pe:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aJ(!1,C.a3,!0,r,A.aO(!1,w,!0,new A.D(C.a0w,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaf.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pb.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Ya.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pa.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FG.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crp.prototype={}
B.FF.prototype={}
B.aae.prototype={}
B.av5.prototype={}
B.Yb.prototype={}
var z=a.updateTypes(["aB<~>()","P(jz)","m(jz)","VU(Z)","~()","a_7(Z)","F(F,jz)","Qq(Z)","~(me)","ct(FF)","aB<jz?>(@)","VS(Z)","VW(Z)","D(jz)","jz(@)","a8<m,@>(jz)","a_6(Z)","VT(Z)","a_8(Z)","a_5(Z)","a_a(Z)","ad3(Z)","ai<jz>()","a_b(Z)","ad5(Z,F)","a_4(Z)","a8<m,aE>(jz)","ct(Ya)","ct(aae)","aB<ct>(FF)"])
B.crl.prototype={
$1(d){var x=this.a
x.x=D.aQq
x.y.J(0,D.aQq)},
$S:75}
B.crm.prototype={
$1(d){var x=this.a
x.x=D.aQp
x.y.J(0,D.aQp)},
$S:75}
B.crn.prototype={
$1(d){var x=this.a
x.aiq(A.ahm(d.data)).bG(new B.crk(x),y.b)},
$S:75}
B.crk.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cro.prototype={
$1(d){},
$S:75}
B.crr.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hXx(d.channel))},
$S:16}
B.crs.prototype={
$1(d){},
$S:16}
B.crt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ig9(w.iceConnectionState)
x.cx=w
if($.hga())switch(w.a){case 0:x.cy=D.aQv
break
case 1:x.cy=D.aQw
break
case 3:x.cy=D.aQx
break
case 5:x.cy=D.aQt
break
case 6:x.cy=D.aQu
break
case 7:x.cy=D.a8U
break
default:break}},
$S:107}
B.cru.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iga(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.crv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iqx(w.signalingState)},
$S:107}
B.crw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ioL(w.connectionState)},
$S:107}
B.crx.prototype={
$1(d){},
$S:107}
B.cry.prototype={
$1(d){},
$S:16}
B.fvd.prototype={
$1(d){var x=y.F.a(new A.r2([],[]).oL(d.target.result,!1)),w=C.yp.q(x.objectStoreNames,"blobs")
if(!w)C.yl.Lh(x,"blobs")},
$S:201}
B.fUf.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wN.fq(this.b)
$.eV.mC()
this.c.$1(d)},
$S:351}
B.fUh.prototype={
$1(d){return this.a.$1(B.i5K(this.b,this.c))},
$S:28}
B.fUg.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:28}
B.fUe.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fUu.prototype={
$1(d){var x=this
return B.hsx(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fUv.prototype={
$1(d){var x=this
return B.hsx(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fxN.prototype={
$1(d){var x=this
return B.cdo(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbO.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbL.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdo(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbN.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdo(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbM.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdo(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbQ.prototype={
$4(d,e,f,g){var x=null
return A.jX(A.A(A.a([A.aG(x,x,x,x,D.bTI,x,x,x,new B.dbP(d),x,x,x,x,x,x),A.E(A.Fr(D.RH,!0,x,C.a2n,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RH,x,g,C.amA,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.dbP.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzJ.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eP,y.o).w,t=this.a,s=t?C.iA:C.c,r=A.n(28),q=A.q(v,D.bwm,C.f,v,v,D.b6o,v,v,v,v,D.amq,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bY_,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GP,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ara,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dU(C.dl,new B.fzH(d),v),1),C.at,A.E(A.bI(D.fJn,v,new B.fzI(p,x,d),A.bo(C.b1,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GD,v,v,v,v),v)},
$S:61}
B.fzH.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzI.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fgj)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDo(v,x))},
$S:0}
B.fAc.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eP,y.o).w,u=x.a,t=u?C.iA:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwb,C.f,w,w,D.b7S,w,w,w,w,D.amq,w,w,1/0),new A.D(C.GP,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.hc1(u,"Organization name",C.Hh,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.hc1(u,"Access code",C.nE,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.hc1(u,"Member password",H.HO,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.by,A.bI(D.fRV,w,new B.fAb(r,q,p,d),A.bo(C.aE,w,w,w,w,C.h2,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GD,w,w,w,w),w)},
$S:61}
B.fAb.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fgo)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGw(u,x,w))},
$S:0}
B.cdf.prototype={
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
return A.b(A.vH(p,null).df(0,C.a_w),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cd(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdl.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdm.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdn.prototype={
$1(d){return d.b},
$S:z+2}
B.cdh.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdi.prototype={
$1(d){return d.b},
$S:z+2}
B.cdg.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cdj.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdk.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fUs.prototype={
$1(d){return new B.VS(this.a,null)},
$S:z+11}
B.fUt.prototype={
$1(d){return new B.VW(this.a,this.b,this.c,null)},
$S:z+12}
B.dY2.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZb.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZc.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZd.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZa(x,d))},
$S:2}
B.dZa.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZe.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZf.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZg.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZh.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZi.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZj.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZm.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.p(0,(1-e)*14)),e)},
$S:100}
B.dZk.prototype={
$1(d){var x=this.a
return x.f?null:x.a_s()},
$S:2}
B.dZl.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.RY))s=C.uK
else s=C.a.a0(s,"video/")||d.mI(D.n2)?C.qN:D.apB
x=this.b.a
w=y.p
return new A.D(C.kV,A.A(A.a([A.q(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.R,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gara(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dY3.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dY4.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdp.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:92}
B.cdq.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:92}
B.fVm.prototype={
$2(d,e){return e===this.a},
$S:307}
B.fsh.prototype={
$1(d){return J.k(d)},
$S:17}
B.fxZ.prototype={
$1(d){var x=this.b
B.i3H(C.H4.ga7a(this.a)).bG(x.gBZ(x),y.H)},
$S:126}
B.fy_.prototype={
$1(d){return this.a.da(0,null)},
$S:126}
B.fy0.prototype={
$0(){return null},
$S:12}
B.cdE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fy1.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.j.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jz(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fC8.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fwc.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fwd.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdJ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n2)},
$S:z+1}
B.fZt.prototype={
$1(d){return new B.a_6(this.a,null)},
$S:z+16}
B.dbK.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dbI.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbJ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZ9.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1z()},
$S:11}
B.dYx.prototype={
$0(){var x=J.bGB(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYy.prototype={
$0(){var x=J.bGB(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dY6.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dY5(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFK(this.c)}},
$S:0}
B.dY5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dY7.prototype={
$0(){var x=J.bGB(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYc.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYb(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFK(this.c)}},
$S:0}
B.dYb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYY.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dYZ.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dYu.prototype={
$1(d){return new B.VT(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Iz(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.VX(r.a.c,u.b,u.c),$async$$0)
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
B.dYa.prototype={
$1(d){this.a.acS(d,"No files selected.","Added")},
$S:351}
B.dYC.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dYB(),A.U(x).k("N<1,m>")))},
$S:0}
B.dYB.prototype={
$1(d){return d.a},
$S:z+2}
B.dYg.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xH.cp().cZ1(C.a1j,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jG(o,0,null)}u=2
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
return A.b(B.aqv(null,m,o.a.c),$async$$0)
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
B.dYV.prototype={
$1(d){return new B.Qq(this.a.a.c,this.b,null)},
$S:z+7}
B.dYW.prototype={
$1(d){return new B.a_8(this.a.a.c,this.b,null)},
$S:z+18}
B.dYX.prototype={
$1(d){return new B.a_5(this.a.a.c,this.b,null)},
$S:z+19}
B.dYs.prototype={
$1(d){return new B.Qq(this.a.a.c,this.b,null)},
$S:z+7}
B.dYt.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Iz(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7S(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.crO(),$async$$0)
case 5:x=6
return A.b(p.uj(),$async$$0)
case 6:r=A.U(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dYK(p),r),new B.dYL(),r.k("N<ak.E,m>")).bZ(0,new B.dYM())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYN(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pq(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.W2(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYK.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYJ(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYL.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYM.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYN.prototype={
$1(d){var x=this.a
return new B.a_a(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dYP.prototype={
$1(d){return d.a},
$S:z+2}
B.dYQ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYI.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gara(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n2)?C.rZ:C.pt
p=!x||p.mI(D.n2)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([q,o,t,C.aC,B.a_9(!1,u,!1,w,p,new B.dYD(d),v),B.a_9(!1,u,!1,C.jG,"Share via QR",new B.dYE(d),"Letters/numbers QR code"),B.a_9(!1,u,!1,D.a2s,"Send to their Code",new B.dYF(d),"Enter someone else's personal code"),B.a_9(!1,u,!1,C.hW,"Download / save",new B.dYG(d),v),C.am,B.a_9(!1,u,!0,C.ef,"Delete",new B.dYH(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bi)},
$S:699}
B.dYD.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dYE.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dYF.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYG.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYH.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dYd.prototype={
$1(d){return d.a},
$S:z+2}
B.dYe.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYf.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7U(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.H9(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pq(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY9.prototype={
$1(d){var x=this.a
x.uk(new B.dY8(x,d,this.b),"Preparing\u2026")},
$S:351}
B.dY8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.VX(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFz(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYv.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dYw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h6T(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.H7(new B.dYl(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dYm(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYn(s))
case 5:x=8
return A.b(r.b.iE(0,C.Gx,new B.dYo()),$async$$0)
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
B.dYl.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYi(x,d,e))},
$S:207}
B.dYi.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYm.prototype={
$1(d){return new B.ad3(this.a.a,null)},
$S:z+21}
B.dYn.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYo.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ja(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7I(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2W(B.Ja(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqv(new B.dYj(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h6S(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.uj(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYk()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYj.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYh(x,d,e))},
$S:207}
B.dYh.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYk.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n2)},
$S:z+1}
B.dYA.prototype={
$1(d){return new B.a_b(this.a.a.c,null)},
$S:z+23}
B.dYz.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0H(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYU.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([A.at(A.q(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_9(!0,w,!1,C.nE,"My Code",new B.dYR(d),"Your personal code & QR \u2014 others send docs to you"),B.a_9(!1,w,!1,D.a2s,"Send to their Code",new B.dYS(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_9(!1,w,!1,S.zk,"Import backup",new B.dYT(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bH(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bi)},
$S:699}
B.dYR.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dYS.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bG0()},
$S:0}
B.dYT.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZ6.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jk(D.RH,x,C.a2n,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RH).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:663}
B.dZ4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZ5.prototype={
$0(){this.a.ajn()
return null},
$S:0}
B.dZ7.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.p(0,(1-e)*10)),e)},
$S:100}
B.dZ8.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ad5(e,w,v,this.b,x.e,x.cba(w),new B.dZ0(x,w),new B.dZ1(x,v,w),new B.dZ2(x,w),new B.dZ3(x,w),null)},
$S:z+24}
B.dZ0.prototype={
$0(){this.a.agA(this.b)
return null},
$S:0}
B.dZ1.prototype={
$0(){var x=this.a
return x.m(new B.dZ_(x,this.b,this.c))},
$S:0}
B.dZ_.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZ2.prototype={
$0(){this.a.Ou(this.b)
return null},
$S:0}
B.dZ3.prototype={
$0(){this.a.aja(this.b)
return null},
$S:0}
B.dbG.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.p(0,(1-e)*18)),e)},
$S:100}
B.dbH.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:112}
B.dc3.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.p(0,(1-e)*14)),e)},
$S:100}
B.dc2.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dc_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dc0.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dc1.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dbY.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gau(w))return A.fR(w,C.A,x,new B.dbW(this.a),C.hb,C.dz,!0,x,!1,x,x)
$.aW.x1$.push(new B.dbX(this.a))
return C.bL},
$S:141}
B.dbW.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dbU(this.a))
return C.bL},
$S:195}
B.dbU.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbR(x))},
$S:7}
B.dbR.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbX.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbT(x))},
$S:7}
B.dbT.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbZ.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dbV(this.a))
return C.bL},
$S:195}
B.dbV.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbS(x))},
$S:7}
B.dbS.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbD.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbC(x,d))},
$S:1762}
B.dbC.prototype={
$0(){return this.a.f=this.b===C.vn},
$S:0}
B.dbE.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbB(x,d))},
$S:7}
B.dbB.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbF.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbA(x,d))},
$S:7}
B.dbA.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbw.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbx.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dby.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbz.prototype={
$1(d){return this.a.d.Nr(0,A.dv(0,0,0,C.j.V(d),0,0))},
$S:6}
B.dcg.prototype={
$0(){var x=this.a.a
return B.rN(x.c,x.d)},
$S:1763}
B.dch.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dci.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcj.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dck.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcl.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcn.prototype={
$0(){var x=this.a
x.m(new B.dcm(x))},
$S:0}
B.dcm.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qo(0)},
$S:0}
B.dcc.prototype={
$1(d){return this.a.Ri(this.b)},
$S:11}
B.dcd.prototype={
$1(d){return this.a.Rh(this.b)},
$S:11}
B.dc4.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dc5.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dc6.prototype={
$1(d){return D.hrp},
$S:z+25}
B.dcb.prototype={
$2(d,e){if(d)B.W2()},
$S:124}
B.dc7.prototype={
$0(){return this.a.aaG(this.b)},
$S:0}
B.dc8.prototype={
$0(){return this.a.aaD(this.b)},
$S:0}
B.dc9.prototype={
$0(){return this.a.af2(this.b)},
$S:0}
B.dca.prototype={
$0(){return this.a.a2m(this.b)},
$S:0}
B.dbv.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcf.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qs(),$async$$0)
case 2:u.m(new B.dce(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dce.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdL.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n2)},
$S:z+1}
B.cdM.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdK.prototype={
$2(d,e){return this.bmE(d,e)},
bmE(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W3(u.c,A.H(["uploadProgress",C.j.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fBL.prototype={
$1(d){if(d===D.a8T&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fBM.prototype={
$0(){},
$S:12}
B.fCm.prototype={
bod(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fpy(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hnJ(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bod(d,e)},
$S:536}
B.fCl.prototype={
$1(d){var x=this
d.b=new B.fCk(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fCk.prototype={
$1(d){return this.boc(d)},
boc(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0I(n,m),$async$$1)
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
return A.b(B.fpy(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a7R(m),$async$$1)
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
x(v=B.aAL.prototype,"gciB","QS",0)
x(v,"gcjs","JE",0)
x(v,"gciY","yB",0)
x(v=B.aEK.prototype,"gcb4","af0",0)
x(v,"gcb5","a_r",0)
x(v,"gcyg","aiS",0)
x(v=B.aEN.prototype,"gcb6","a_s",0)
x(v,"gcyh","a2H",0)
x(B.aEL.prototype,"gcb7","af1",0)
x(B.aAK.prototype,"gcbc","cbd",4)
x(v=B.aEM.prototype,"gciZ","a0D",0)
x(v,"gcwR","cwS",4)
x(v,"gb40","aAf",0)
x(v,"gczM","ajh",0)
x(v,"gbSn","Yk",0)
x(v,"gcbb","EJ",0)
x(B.aAM.prototype,"gb7M","a2G",0)
x(B.aAJ.prototype,"gcbe","a_t",0)
x(v=B.aAP.prototype,"gb2J","che",4)
x(v,"gcb8","af4",0)
x(v=B.aAN.prototype,"gcvP","a2s",0)
x(v,"gb0L","af3",0)
w(B.aAI.prototype,"gayN","ayO",8)
x(v=B.aAO.prototype,"gclI","ah2",0)
x(v,"gbRS","abu",0)
w(v,"gayN","ayO",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crp,B.aae,B.av5,B.aDo,B.aGw,B.jz,B.acM,B.bxy,B.FF,B.Yb])
w(B.crq,B.crp)
w(B.b5Q,B.aae)
x(A.ht,[B.crl,B.crm,B.crn,B.crk,B.cro,B.crr,B.crs,B.crt,B.cru,B.crv,B.crw,B.crx,B.cry,B.fvd,B.fUf,B.fUh,B.fUg,B.fUu,B.fUv,B.fxN,B.dbL,B.dbN,B.dbM,B.dbQ,B.fzJ,B.fAc,B.cdf,B.cdm,B.cdn,B.cdi,B.cdg,B.cdj,B.cdk,B.fUs,B.fUt,B.dZd,B.dZm,B.dZk,B.dZl,B.fsh,B.fxZ,B.fy_,B.cdE,B.fy1,B.fC8,B.fwc,B.fwd,B.cdJ,B.fZt,B.dbK,B.dbI,B.dZ9,B.dY5,B.dYb,B.dYu,B.dYa,B.dYB,B.dYV,B.dYW,B.dYX,B.dYs,B.dYK,B.dYJ,B.dYL,B.dYM,B.dYN,B.dYP,B.dYQ,B.dYI,B.dYd,B.dYe,B.dY9,B.dYv,B.dYm,B.dYk,B.dYA,B.dYU,B.dZ6,B.dZ7,B.dbG,B.dbH,B.dc3,B.dc2,B.dbY,B.dbW,B.dbU,B.dbX,B.dbZ,B.dbV,B.dbD,B.dbE,B.dbF,B.dbz,B.dcc,B.dcd,B.dc6,B.cdL,B.cdM,B.fBL,B.fCl,B.fCk])
w(B.b5R,B.av5)
x(A.iH,[B.fUe,B.dbO,B.dbP,B.fzH,B.fzI,B.fAb,B.dY2,B.dZb,B.dZc,B.dZa,B.dZe,B.dZf,B.dZg,B.dZh,B.dZi,B.dZj,B.dY3,B.dY4,B.fy0,B.dbJ,B.dYx,B.dYy,B.dY6,B.dY7,B.dYc,B.dYY,B.dYZ,B.dYr,B.dYC,B.dYg,B.dYt,B.dYO,B.dYD,B.dYE,B.dYF,B.dYG,B.dYH,B.dYf,B.dY8,B.dYw,B.dYp,B.dYi,B.dYn,B.dYo,B.dYq,B.dYh,B.dYz,B.dYR,B.dYS,B.dYT,B.dZ4,B.dZ5,B.dZ0,B.dZ1,B.dZ_,B.dZ2,B.dZ3,B.dc_,B.dc0,B.dc1,B.dbR,B.dbT,B.dbS,B.dbC,B.dbB,B.dbA,B.dbw,B.dbx,B.dby,B.dcg,B.dch,B.dci,B.dcj,B.dck,B.dcl,B.dcn,B.dcm,B.dc4,B.dc5,B.dc7,B.dc8,B.dc9,B.dca,B.dbv,B.dcf,B.dce,B.fBM])
x(A.lB,[B.ad4,B.O7,B.aaf,B.Pb,B.Ya,B.Pa,B.FG])
x(A.af,[B.a_7,B.VS,B.VW,B.VT,B.a_6,B.VU,B.a_8,B.a_5,B.Qq,B.a_a,B.a_4,B.a_b])
x(A.ah,[B.aAL,B.aEK,B.aEN,B.aEL,B.aAK,B.aEM,B.aAM,B.aAJ,B.aAP,B.aAN,B.aAI,B.aAO])
x(A.ax,[B.adx,B.aAH,B.bfh,B.ad5,B.ad3,B.bfi])
x(A.ju,[B.cdl,B.cdh,B.cdp,B.cdq,B.fVm,B.dYl,B.dYj,B.dZ8,B.dcb,B.cdK,B.fCm])
x(A.j0,[B.bkK,B.bxa])})()
A.j1(b.typeUniverse,JSON.parse('{"b5Q":{"aae":[]},"b5R":{"av5":[]},"a_7":{"af":[],"v":[]},"aAL":{"ah":["a_7"]},"adx":{"ax":[],"v":[]},"VS":{"af":[],"v":[]},"VW":{"af":[],"v":[]},"aEK":{"ah":["VS"]},"aEN":{"ah":["VW"]},"bkK":{"j0":[]},"VT":{"af":[],"v":[]},"aEL":{"ah":["VT"]},"a_6":{"af":[],"v":[]},"VU":{"af":[],"v":[]},"ad5":{"ax":[],"v":[]},"a_8":{"af":[],"v":[]},"a_5":{"af":[],"v":[]},"Qq":{"af":[],"v":[]},"a_a":{"af":[],"v":[]},"ad3":{"ax":[],"v":[]},"a_4":{"af":[],"v":[]},"a_b":{"af":[],"v":[]},"aAK":{"ah":["a_6"]},"bxa":{"j0":[]},"aEM":{"ah":["VU"]},"aAH":{"ax":[],"v":[]},"bfh":{"ax":[],"v":[]},"aAM":{"ah":["a_8"]},"aAJ":{"ah":["a_5"]},"aAP":{"ah":["Qq"]},"aAN":{"ah":["a_a"]},"aAI":{"ah":["a_4"]},"aAO":{"ah":["a_b"]},"bfi":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uD"),k:x("Mx()"),m:x("bu<m,m>"),F:x("rn"),g:x("aB<jz?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<m,P>>"),t:x("O<a8<m,@>>"),r:x("O<jz>"),w:x("O<+file,name(lP,m)>"),u:x("O<cU>"),s:x("O<m>"),E:x("O<j0>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<F>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jz>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iB"),e:x("iuA"),af:x("ES"),U:x("jz"),b:x("ct"),C:x("aE"),aK:x("ww"),ab:x("FF"),br:x("av5"),v:x("Yb"),N:x("m"),X:x("bq<I>"),Q:x("m_"),D:x("dK"),aw:x("bP<m>"),cd:x("Y<a8<m,@>>"),c7:x("v"),ch:x("c2<ai<jz>>"),aW:x("c2<dK?>"),aY:x("c2<~>"),cx:x("ad4"),b1:x("bk<ai<jz>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDo"),bG:x("aGw"),q:x("mu"),B:x("pJ<FF>"),c6:x("pJ<aaf>"),y:x("P"),i:x("I"),z:x("@"),S:x("F"),aQ:x("bh?"),_:x("ai<jz>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jz?"),R:x("aE?"),c:x("Yb?"),d:x("+answerQr,transfer(m,aB<ai<jz>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,O7,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dK?"),cm:x("acM?"),bk:x("aDo?"),ag:x("aGw?"),dd:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b4L=new A.ay(C.aE,2,C.r,-1)
D.c6B=new A.a9(C.a6,C.a9,C.x,C.a4x,null,null)
D.b6o=new A.o(null,null,null,C.mD,null,D.c6B,C.n)
D.b7S=new A.o(null,null,null,C.mD,null,E.I_,C.n)
D.afn=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agO=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahO=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajz=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fE7=new A.B("Your team portal",null,C.df,null,null,null,null,null,null,null,null,null)
D.fSR=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.Ky,null,null,null,null,null,null,null,null,null)
D.di4=x([D.fE7,C.am,D.fSR],y.p)
D.bw2=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.di4,null)
D.fXj=new A.B("Create your organization",null,C.fA,null,null,null,null,null,null,null,null,null)
D.fIz=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Ky,null,null,null,null,null,null,null,null,null)
D.dyP=x([D.fXj,C.am,D.fIz],y.p)
D.bwb=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dyP,null)
D.fTt=new A.B("Team Member sign-in",null,C.fA,null,null,null,null,null,null,null,null,null)
D.fMu=new A.B("Enter the access code and password from your organization.",null,G.Ky,null,null,null,null,null,null,null,null,null)
D.dwB=x([D.fTt,C.am,D.fMu],y.p)
D.bwm=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dwB,null)
D.bCy=new A.Q(16,10,16,28)
D.bCG=new A.Q(16,14,16,4)
D.bDX=new A.Q(20,0,20,16)
D.bEs=new A.Q(20,8,20,16)
D.amq=new A.Q(24,22,24,20)
D.a2s=new A.a0(63394,"MaterialIcons",!1)
D.apB=new A.a0(63515,"MaterialIcons",!1)
D.bRE=new A.a0(983813,"MaterialIcons",!1)
D.bOV=new A.a0(62867,"MaterialIcons",!1)
D.bSE=new A.ae(D.bOV,44,C.c,null,null,null)
D.bTI=new A.ae(C.k4,null,C.ab,null,null,null)
D.bV5=new A.ae(C.jo,18,null,null,null,null)
D.bWQ=new A.ae(D.a2s,26,C.c,null,null,null)
D.bXp=new A.ae(C.CS,null,null,null,null,null)
D.bY_=new A.ae(C.D_,null,null,null,null,null)
D.bZa=new A.ae(W.a2D,null,null,null,null,null)
D.bZv=new A.ae(C.hK,16,null,null,null,null)
D.c2_=new A.ae(C.rY,16,null,null,null,null)
D.bSV=new A.ae(C.nE,null,null,null,null,null)
D.c2T=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYx=new A.ae(C.Hh,null,null,null,null,null)
D.c2Y=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTf=new A.ae(H.HO,null,null,null,null,null)
D.c38=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTf,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cS3=x([C.fn,C.b1,C.aE],y.O)
D.c8r=new A.a9(C.aA,C.aF,C.x,D.cS3,null,null)
D.cRv=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RH=x([C.fn,C.aE],y.O)
D.RY=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n2=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dr1=x([C.of,C.aE],y.O)
D.ej1={iceServers:0}
D.aKW={urls:0}
D.dCy=new A.bu(D.aKW,["stun:stun.l.google.com:19302"],y.m)
D.dCx=new A.bu(D.aKW,["stun:stun1.l.google.com:19302"],y.m)
D.d7K=x([D.dCy,D.dCx],A.as("O<a8<m,m>>"))
D.dBP=new A.bu(D.ej1,[D.d7K],A.as("bu<m,@>"))
D.J_=new B.O7(0,"lanDirect")
D.Ti=new B.O7(1,"cloudStash")
D.dNC=new B.O7(2,"inlineInstant")
D.Tj=new B.O7(3,"webrtcLink")
D.A9=new B.O7(4,"videoCloud")
D.fSQ=new A.B("Receive file",null,C.nc,null,null,null,null,null,null,null,null,null)
D.cHk=x([E.arj,C.ae,D.fSQ],y.p)
D.f6T=new A.c6(C.aL,C.ba,C.i,C.m,null,C.p,null,0,D.cHk,null)
D.equ=new A.D(C.cn,D.f6T,null)
D.fuJ=new A.G(!0,C.c,null,null,null,null,null,C.R,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Ir,null,null,null)
D.fEG=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fuJ,null,C.K,null,null,null,null,null,null,null)
D.epF=new A.D(C.Ch,D.fEG,null)
D.bcg=new A.ce(C.A,null,null,D.epF,null)
D.ewM=new A.cL(0,null,0,28,null,null,D.bcg,null)
D.ex5=new B.aaf(0,"RTCDataChannelConnecting")
D.aQp=new B.aaf(1,"RTCDataChannelOpen")
D.aQq=new B.aaf(3,"RTCDataChannelClosed")
D.ex6=new B.FG(0,"RTCIceConnectionStateNew")
D.ex7=new B.FG(1,"RTCIceConnectionStateChecking")
D.ex8=new B.FG(2,"RTCIceConnectionStateCompleted")
D.ex9=new B.FG(3,"RTCIceConnectionStateConnected")
D.exa=new B.FG(4,"RTCIceConnectionStateCount")
D.exb=new B.FG(5,"RTCIceConnectionStateFailed")
D.exc=new B.FG(6,"RTCIceConnectionStateDisconnected")
D.aQr=new B.FG(7,"RTCIceConnectionStateClosed")
D.aQs=new B.Ya(0,"RTCIceGatheringStateNew")
D.exd=new B.Ya(1,"RTCIceGatheringStateGathering")
D.a8T=new B.Ya(2,"RTCIceGatheringStateComplete")
D.a8U=new B.Pa(0,"RTCPeerConnectionStateClosed")
D.aQt=new B.Pa(1,"RTCPeerConnectionStateFailed")
D.aQu=new B.Pa(2,"RTCPeerConnectionStateDisconnected")
D.aQv=new B.Pa(3,"RTCPeerConnectionStateNew")
D.aQw=new B.Pa(4,"RTCPeerConnectionStateConnecting")
D.aQx=new B.Pa(5,"RTCPeerConnectionStateConnected")
D.exe=new B.Pb(0,"RTCSignalingStateStable")
D.exf=new B.Pb(1,"RTCSignalingStateHaveLocalOffer")
D.exg=new B.Pb(2,"RTCSignalingStateHaveRemoteOffer")
D.exh=new B.Pb(3,"RTCSignalingStateHaveLocalPrAnswer")
D.exi=new B.Pb(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQy=new B.Pb(5,"RTCSignalingStateClosed")
D.fbZ=new A.av(160,48)
D.bdw=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.fdx=new A.a5(16,16,D.bdw,null)
D.fHU=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ff_=new A.b1(D.fHU,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fPv=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ff2=new A.b1(D.fPv,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fYn=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ff9=new A.b1(D.fYn,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHu=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ffz=new A.b1(D.fHu,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTE=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTz=new A.b1(D.fTE,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fV6=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fg2=new A.b1(D.fV6,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZQ=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgj=new A.b1(D.fZQ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fXN=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgo=new A.b1(D.fXN,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZ0=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fha=new A.b1(D.fZ0,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fG4=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhH=new A.b1(D.fG4,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRp=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.b1(D.fRp,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fKc=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fix=new A.b1(D.fKc,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZW=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiB=new A.b1(D.fZW,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGk=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiH=new A.b1(D.fGk,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fF1=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fiW=new A.b1(D.fF1,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fBP=new A.B("NGMY DOC SHARE",null,C.aUX,null,null,null,null,null,null,null,null,null)
D.fDe=new A.B("Show this to sender",null,C.ix,null,null,null,null,null,null,null,null,null)
D.fEe=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fJ_=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fJn=new A.B("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fKm=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fKT=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNL=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fQx=new A.B("Send to their Doc Share",null,C.nS,null,null,null,null,null,null,null,null,null)
D.fQT=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRc=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fRO=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRV=new A.B("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.fSi=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f9,null,null,null,null,null,null,null,null,null)
D.fVC=new A.B("Share files & videos\nwith a scan.",null,C.aV_,null,null,null,null,null,null,null,null,null)
D.fVW=new A.B("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hrp=new B.a_4(null)
D.acf=new B.ad4(0,"docShare")
D.acg=new B.ad4(1,"gate")
D.Wl=new B.ad4(2,"gateNoIndividual")})();(function staticFields(){$.aPe=null
$.fnb=function(){var x=y.N
return A.T(x,x)}()
$.GW=A.T(y.N,y.D)
$.ah9=A.T(y.N,A.as("lP"))
$.RM=A.T(y.N,y.D)
$.fnO=A.T(y.N,A.as("acM"))
$.cdD=A.T(y.S,A.as("bxy"))
$.hnI=1
$.ibQ=null
$.ibP=null
$.i2Y=null
$.hce=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iv4","hFx",()=>new B.crq())
x($,"isZ","hga",()=>C.a.q(A.bz(A.bz(A.bz(A.Hu(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["ywKvl7/bdoH8U7Ms9DwwbbtETZo="]=a.current})($__dart_deferred_initializers__);