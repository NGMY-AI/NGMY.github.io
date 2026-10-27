((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cey:function cey(){},
hpM(d){var x=null,w=new B.b0R(d,D.dWI,new A.oV(x,x,y.c6),new A.oV(x,x,y.B))
w.bsD(d)
return w},
b0R:function b0R(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cet:function cet(d){this.a=d},
ceu:function ceu(d){this.a=d},
cev:function cev(d){this.a=d},
ces:function ces(d){this.a=d},
cew:function cew(d){this.a=d},
hpN(d,e){var x=y.N
x=new B.b0S(d,e,A.T(x,y.e),A.T(x,y.z))
x.bsE(d,e)
return x},
b0S:function b0S(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cez:function cez(d){this.a=d},
ceA:function ceA(d){this.a=d},
ceB:function ceB(d){this.a=d},
ceC:function ceC(d){this.a=d},
ceD:function ceD(d){this.a=d},
ceE:function ceE(d){this.a=d},
ceF:function ceF(d){this.a=d},
ceG:function ceG(d){this.a=d},
fHB(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.bb("IndexedDB not available"))
return C.xz.Ks(x,"ngmy_doc_share_v1",new B.f5Q(),1)},
hwf(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cn(d))
if(y.J.b(d))return new Uint8Array(A.cn(J.eQ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cn(A.Bd(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cy.aG(d)
return x}catch(w){return v}return v},
Pu(d,e){return B.hLb(d,e)},
hLb(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKN
x=7
return A.b(o==null?$.aKN=B.fHB():o,$async$Pu)
case 7:s=g
r=new Uint8Array(A.cn(e))
q=J.mo(s,"blobs","readwrite")
C.iz.lM(J.mm(q,"blobs"),r,d)
x=8
return A.b(J.p4(q),$async$Pu)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
$.al.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pu,w)},
Pt(d){return B.hLa(d)},
hLa(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKN
x=7
return A.b(o==null?$.aKN=B.fHB():o,$async$Pt)
case 7:s=f
r=J.mo(s,"blobs","readonly")
x=8
return A.b(C.iz.yz(J.mm(r,"blobs"),d),$async$Pt)
case 8:q=f
x=9
return A.b(J.p4(r),$async$Pt)
case 9:o=B.hwf(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
$.al.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pt,w)},
aeF(d){return B.hL9(d)},
hL9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aeF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKN
x=7
return A.b(p==null?$.aKN=B.fHB():p,$async$aeF)
case 7:s=f
r=J.mo(s,"blobs","readwrite")
C.iz.Ey(J.mm(r,"blobs"),d)
x=8
return A.b(J.p4(r),$async$aeF)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a6(n)
$.al.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeF,w)},
f5Q:function f5Q(){},
hyw(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bl3(w,v))}return u},
h5V(d,e){var x,w={},v=A.aSY("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fqG(w,v,e)
C.uY.xt(v,"change",new B.fqI(w,v,!1))
C.uY.xt(v,"cancel",new B.fqH(w))
$.eK.lV()
v.click()
A.bN(C.acj,new B.fqF(w),y.H)},
fqG:function fqG(d,e,f){this.a=d
this.b=e
this.c=f},
fqI:function fqI(d,e,f){this.a=d
this.b=e
this.c=f},
fqH:function fqH(d){this.a=d},
fqF:function fqF(d){this.a=d},
BX(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BX=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRS()?3:4
break
case 3:x=5
return A.b(B.h19(e,d,s,!0,!1,f,g,h,!1,i),$async$BX)
case 5:x=1
break
case 4:x=6
return A.b(B.P9(d,s,f,g,h,i),$async$BX)
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
return A.b(B.H4(s,d),$async$BX)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f1h(s,d),$async$BX)
case 14:x=12
return A.b(r.h19(q,p,o,n,m,l,k,j,a1,i),$async$BX)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cp(A.eE(new B.fqV(s,i,d,f,g,h),!1,null,y.H)),$async$BX)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cp(A.eE(new B.fqW(s,i,d,f,g,h),!1,null,y.H)),$async$BX)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BX,w)},
P9(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$P9=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWC(e),$async$P9)
case 3:u=k
x=4
return A.b(B.amG(d,e,!1),$async$P9)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.H4(e,d),$async$P9)
case 7:if(k){v=D.a5I
x=1
break}x=8
return A.b(B.T4(e),$async$P9)
case 8:v=t?D.S9:D.a5J
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aWA(d,e)){v=D.a5I
x=1
break}x=11
return A.b(B.T4(e),$async$P9)
case 11:v=t?D.S9:D.a5J
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fCR(d,e)){v=D.a5I
x=1
break}x=14
return A.b(B.T4(e),$async$P9)
case 14:v=D.S9
x=1
break
case 13:v=t?D.S9:D.a5J
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P9,w)},
f1h(d,e){var x=0,w=A.j(y.y),v
var $async$f1h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aWA(e,d)){v=!1
x=1
break}x=3
return A.b(B.aWC(d),$async$f1h)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f1h,w)},
h19(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cp(A.eE(new B.f78(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fXo(d,e,f,g,h,i,j){return new B.Xd(e,j,d,g,h,i,f,null)},
f94(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f94=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
x=3
return A.b(A.c1(C.K,null,new B.f97(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f94)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f94,w)},
f9z(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f9z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
r=new A.ap(C.as,u)
x=3
return A.b(A.c1(C.K,null,new B.f9B(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f9z)
case 3:q=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
r.R$=u
r.O$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9z,w)},
fHJ(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b3(4,A.m(16),C.Z),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fjf(d,e){var x=0,w=A.j(y.H),v
var $async$fjf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.T4(e),$async$fjf)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fjf,w)},
fqV:function fqV(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqW:function fqW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aa3:function aa3(d,e){this.a=d
this.b=e},
f78:function f78(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Xd:function Xd(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awA:function awA(){this.c=this.a=this.d=null},
cXR:function cXR(d,e){this.a=d
this.b=e},
cXO:function cXO(d){this.a=d},
cXQ:function cXQ(d){this.a=d},
cXP:function cXP(d){this.a=d},
cXT:function cXT(){},
cXS:function cXS(d){this.a=d},
aav:function aav(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
az4:function az4(d,e){this.a=d
this.b=e},
aCc:function aCc(d,e,f){this.a=d
this.b=e
this.c=f},
f97:function f97(d,e,f){this.a=d
this.b=e
this.c=f},
f95:function f95(d){this.a=d},
f96:function f96(d,e,f){this.a=d
this.b=e
this.c=f},
f9B:function f9B(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9A:function f9A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c3e(d,e,f,g,h){return B.hkH(d,e,f,g,h)},
hkH(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c3e=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iD(r.di(d,new B.c3f(s,e,h,g,f,q),y.g),y.l),$async$c3e)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3e,w)},
aWx(d,e,f,g,h){return B.hkI(d,e,f,g,h)},
hkI(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aWx=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arU("GET",d)
o=A.fzp()
if(o==null)o=new A.Ki(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cK(0,C.DR),$async$aWx)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bf(),$async$aWx)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.AC(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
$.al.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aWx,w)},
aWw(d){return B.hkF(d)},
hkF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aWw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uI(d,null).cK(0,C.np),$async$aWw)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aF(0,A.is(A.ir(p.e)).c6(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a6(n)
$.al.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aWw,w)},
c3d(d){return B.hkG(d)},
hkG(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c3d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uI(d,null).cK(0,C.p9),$async$c3d)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.is(A.ir(q.e)).c6(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a6(o)
$.al.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c3d,w)},
c3f:function c3f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ja:function ja(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
H2(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ae("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hkN(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.H2(C.a.aY(u,v.length))}return null},
hkO(d){var x=B.H2(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hkJ(){var x,w=$.p1(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aC(10)
return C.d.fN(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(24)]},
a4R(d){return B.hkK(d)},
hkK(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4R=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eW(d,null,!1,C.bE),$async$a4R)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a6(p)
$.al.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4R,w)},
a4S(d,e){return B.hkL(d,e)},
hkL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4S=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hv(d,e,!1,!1,C.cD,null),$async$a4S)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a6(p)
$.al.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4S,w)},
AB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$AB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ax(),$async$AB)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.H2(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4T(r),$async$AB)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4R("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$AB)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.H2(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ap("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$AB)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hkJ()
x=14
return A.b(B.a4T(m),$async$AB)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a4().ab()
x=15
return A.b(B.a4S("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AB)
case 15:k=f
x=16
return A.b(B.a4S("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AB)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ap("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$AB)
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
return A.i($async$AB,w)},
a4T(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.H2(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4R("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4T)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4T,w)},
a4U(d,e,f,g){return B.hkP(d,e,f,g)},
hkP(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4U=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gai(d)){v=!1
x=1
break}r=B.H2(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4T(r),$async$a4U)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.c3l())>1048576||g.ba(d,new B.c3m())){v=B.Do(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a54("myCode",d,a0),$async$a4U)
case 4:u=a3
try{t=C.Q.aF(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cj(s)||J.aa(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Do(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWF(u,g.gJ(d),a0),$async$a4U)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.p1().aC(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.di(d,new B.c3n(),i)
h=A.A(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aWy(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],i,y.z),q),$async$a4U)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4U,w)},
Do(d,e,f,g,h){return B.hkM(d,e,f,g,h)},
hkM(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Do=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$Do)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cG(a6,0,new B.c3h())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.p1().aC(9999)
h=Date.now()
g=""+1000*h+"_"+C.cF.aC(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gah(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aI(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.H6(a9,q)
a0=new A.IU(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Do)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eO().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.ou(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a8l(a1.a,a4,"media",a1.d,a2).w8(m,n,new A.CJ(!0,q.c)),$async$Do)
case 12:J.cc(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.aa(0),$async$Do)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aNe(r),$async$Do)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.di(a6,new B.c3i(),e)
a1=A.A(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aWy(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],e,d),a8),$async$Do)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aNe(r),$async$Do)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Do,w)},
aWy(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aWy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4R(t),$async$aWy)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b5(r,new B.c3g(),y.P)
r=A.A(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4S(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWy,w)},
LP(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$LP=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4R("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$LP)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cj(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.a_(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aWz(k,a0),$async$LP)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aWE(h),$async$LP)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Tb(g,a0),$async$LP)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.A(new A.a4(r,new B.c3j(),q),n)
d=A.A(new A.a4(r,new B.c3k(),q),n)
q=A.A(e,y.P)
C.d.v(q,A.dc(d,0,A.dH(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a4S("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$LP)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$LP,w)},
aWz(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aWz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cj(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aM(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hOY(k,j)
C.d.v(s,i)
x=5
return A.b(B.BV(l,m,"Received via My Code",t,e,i),$async$aWz)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aNe(s),$async$aWz)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWz,w)},
c3l:function c3l(){},
c3m:function c3m(){},
c3n:function c3n(){},
c3h:function c3h(){},
c3i:function c3i(){},
c3g:function c3g(){},
c3j:function c3j(){},
c3k:function c3k(){},
fqS(d,e){var x=0,w=A.j(y.H)
var $async$fqS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cp(A.eE(new B.fqT(e),!1,null,y.H)),$async$fqS)
case 2:return A.h(null,w)}})
return A.i($async$fqS,w)},
bzE(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bzE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cj(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cp(A.eE(new B.fqU(g,e,f),!1,null,y.y)),$async$bzE)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzE,w)},
fqT:function fqT(d){this.a=d},
fqU:function fqU(d,e,f){this.a=d
this.b=e
this.c=f},
T1:function T1(d,e){this.c=d
this.a=e},
aAr:function aAr(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dHE:function dHE(d,e){this.a=d
this.b=e},
T5:function T5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAu:function aAu(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dIN:function dIN(d){this.a=d},
dIO:function dIO(d){this.a=d},
dIP:function dIP(d){this.a=d},
dIM:function dIM(d,e){this.a=d
this.b=e},
dIQ:function dIQ(d){this.a=d},
dIR:function dIR(d){this.a=d},
dIS:function dIS(d,e){this.a=d
this.b=e},
dIT:function dIT(d,e){this.a=d
this.b=e},
dIU:function dIU(d,e){this.a=d
this.b=e},
dIV:function dIV(d){this.a=d},
dIY:function dIY(){},
dIW:function dIW(d){this.a=d},
dIX:function dIX(d,e){this.a=d
this.b=e},
bfo:function bfo(){},
T2:function T2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAs:function aAs(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dHF:function dHF(d){this.a=d},
dHG:function dHG(d){this.a=d},
fCS(d){var x=d.hD
if(x>=0)return C.o.N(x)
return 10},
hkR(d){var x=d.kd
if(x>=0)return x
return 4.99},
hkQ(d){var x=d.kW,w=y.N
w=x.iH(x,new B.c3p(),w,w)
return w},
fSw(d){var x=d.ke,w=y.N
w=x.iH(x,new B.c3q(),w,w)
return w},
aWC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aWC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$aWC)
case 7:s=f
r=A.t(p)
r=A.aS(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aWC,w)},
a4W(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$a4W)
case 4:x=3
return A.b(g.ap("String","ngmy_doc_share_path_"+u,e),$async$a4W)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4W,w)},
T4(d){var x=0,w=A.j(y.H),v,u
var $async$T4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$T4)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$T4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$T4,w)},
fCR(d,e){var x,w,v
if(B.hkR(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hkQ(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.c8(new A.Q(Date.now(),0,!1))},
aWA(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fSw(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.c8(new A.Q(Date.now(),0,!1))},
fSx(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a_(B.fSw(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.c8(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.n(0,t,u.bM(A.dB(f,0,0,0,0,0).a).a4().ab())
d.ke=w},
amH(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ax(),$async$amH)
case 7:s=f
r=A.t(p)
r=A.eZ(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amH,w)},
amI(d){var x=0,w=A.j(y.H),v,u,t
var $async$amI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amH(d),$async$amI)
case 3:u=f
x=5
return A.b(A.ax(),$async$amI)
case 5:x=4
return A.b(f.ap("Int","ngmy_doc_share_usage_"+t,u+1),$async$amI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amI,w)},
amG(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fCS(d)
if(u<=0){v=!1
x=1
break}if(B.fCR(d,e)){v=!1
x=1
break}x=3
return A.b(B.amH(e),$async$amG)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amG,w)},
aWB(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aWB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.H4(e,d),$async$aWB)
case 3:if(g){v=-1
x=1
break}u=B.fCS(d)
if(u<=0){v=-1
x=1
break}if(B.fCR(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amH(e),$async$aWB)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWB,w)},
c3s(d,e,f){var x=0,w=A.j(y.y),v
var $async$c3s=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.H4(e,d),$async$c3s)
case 3:if(h){v=!1
x=1
break}v=B.amG(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3s,w)},
c3r(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c3r=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c3s(d,u,i.gRS()),$async$c3r)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3r,w)},
a4V(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4V=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRS()){v=!0
x=1
break}if(B.aWA(d,u)){v=!0
x=1
break}x=5
return A.b(A.l1(u,C.PN),$async$a4V)
case 5:x=k?3:4
break
case 3:B.fSx(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4V)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kG(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.PN,"Doc Share for Organizations"),$async$a4V)
case 7:if(!k){v=!1
x=1
break}B.fSx(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4V)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4V,w)},
c3p:function c3p(){},
c3q:function c3q(){},
frr(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$frr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$frr)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eZ1.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hF([r],e.c))
s.toString
$.eZ1.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frr,w)},
hR7(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eZ1.bo($.eZ1,new B.frt(d))},
frt:function frt(d){this.a=d},
f_n(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f_n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hF([d],f))
s.toString
u=A.mP(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jk,null,y.H),$async$f_n)
case 3:C.yT.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eK.lV()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_n,w)},
ady(d,e,f){var x=0,w=A.j(y.H),v
var $async$ady=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eZy.n(0,d,new B.a9L(A.bj(e,!0,v)))
x=3
return A.b(A.ax(),$async$ady)
case 3:x=2
return A.b(h.ap("String",d+"_manifest",C.Q.am(A.E(["parts",e,"size",f],v,y.C),null)),$async$ady)
case 2:return A.h(null,w)}})
return A.i($async$ady,w)},
ads(d){return B.hAl(d)},
hAl(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ads=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eZy.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ax(),$async$ads)
case 3:u=j.aS(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aF(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cj(s)){v=null
x=1
break}o=J.b5(s,new B.f32(),y.N)
n=A.A(o,o.$ti.k("ai.E"))
r=n
o=A.aM(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.a9L(r)
$.eZy.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ads,w)},
P_(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$P_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cn(e))
$.EZ.n(0,d,u)
x=3
return A.b(B.Pu(d,u),$async$P_)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P_,w)},
aL7(d){return B.hAj(d)},
hAj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aL7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EZ.h(0,d)
if(n!=null&&!C.aG.gai(n)){v=n
x=1
break}x=3
return A.b(B.Pt(d),$async$aL7)
case 3:p=f
if(p!=null&&!C.aG.gai(p)){$.EZ.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ax(),$async$aL7)
case 4:s=f
r=A.aS(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cy.aG(r)
x=!J.cj(q)?9:10
break
case 9:B.P_(d,q)
x=11
return A.b(J.hE(s,d),$async$aL7)
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
return A.i($async$aL7,w)},
hwB(d){if(d==null)return A.fb(null,y.K)
if(y.J.b(d))return A.fb(new Uint8Array(A.cn(J.eQ(d,0,null))),y.K)
if(y.D.b(d))return A.fb(new Uint8Array(A.cn(d)),y.K)
if(y.Q.b(d))return A.fb(new Uint8Array(A.cn(A.Bd(d,0,null))),y.K)
if(y.I.b(d))return A.fb(new Uint8Array(A.cn(d)),y.K)
return A.fb(null,y.K)},
a_C(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.be($.bu,y.cf)
t=new A.bP(u,y.aW)
s=y.aK
A.fD(r,"loadend",new B.f7k(r,t),!1,s)
A.fD(r,"error",new B.f7l(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i1(0,C.Kb,new B.f7m())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_C,w)},
aLr(d,e,f){return B.hCy(d,e,f)},
hCy(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aLr=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.U(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a_C(i),$async$aLr)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Pu(o,p),$async$aLr)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ady(k,j,s),$async$aLr)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a6(h)
$.al.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aLr,w)},
aLq(d,e,f){return B.hCx(d,e,f)},
hCx(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aLq=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aLr(d,e,f),$async$aLq)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_C(f),$async$aLq)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EZ.n(0,s,r)
$.Pg.n(0,s,r)
x=11
return A.b(B.P_(s,r),$async$aLq)
case 11:q=h
if(!q)$.al.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a6(m)
$.al.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aLq,w)},
AC(d,e,f,g,h,i){return B.hl_(d,e,f,g,h,i)},
hl_(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$AC=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cF.aC(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.ja(p,q,o,n,new A.Q(Date.now(),0,!1).a4().ab(),a0,f,B.aWI(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.P_(s,d),$async$AC)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ax(),$async$AC)
case 10:r=a2
x=11
return A.b(r.ap("String",s,C.cR.gcs().aG(d)),$async$AC)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.al.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.zH(e),$async$AC)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.F9(e,j),$async$AC)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$AC,w)},
T6(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T6=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zH(d),$async$T6)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cF.aC(99999)
n=p.b
l=o.type
l.toString
k=B.fSz(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a4().ab()
i=new B.ja(m,n,k,l,j,"From folder",null,B.aWI(),null)
$.ae0.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_C(o),$async$T6)
case 7:g=a1
x=g!=null&&!C.aG.gai(g)?8:10
break
case 8:$.EZ.n(0,h,g)
$.Pg.n(0,h,g)
B.P_(h,g)
x=9
break
case 10:x=11
return A.b(B.aLq(d,m,o),$async$T6)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.F9(d,t),$async$T6)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T6,w)},
fCW(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fCW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fSz(r,C.d.gaj(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.H5(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gai(s)){v=B.AC(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCW,w)},
H5(d,e,f,g,h,i){return B.hkZ(d,e,f,g,h,i)},
hkZ(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$H5=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cF.aC(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IU(A.dH(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$H5)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cj(m)){x=6
break}J.fU(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cn(J.Q1(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kq(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pu(k,l),$async$H5)
case 11:J.cc(q,k);++p
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
return A.b(j.aa(0),$async$H5)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pu(k,new Uint8Array(A.cn(n))),$async$H5)
case 15:J.cc(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ady(r,q,g),$async$H5)
case 16:f=new B.ja(i,a1,a0,g,new A.Q(Date.now(),0,!1).a4().ab(),a2,null,B.aWI(),null)
x=17
return A.b(B.zH(d),$async$H5)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.F9(d,e),$async$H5)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H5,w)},
T8(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$T8=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ae0.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_C(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ads(s),$async$T8)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pt(u[o]),$async$T8)
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
v=A.Bd(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Pg.h(0,s)
if(i==null)i=$.EZ.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qU(d,e),$async$T8)
case 12:i=a0
if(i!=null&&!C.aG.gai(i))$.Pg.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Bd(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T8,w)},
fSz(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gaj(x):""
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
qU(d,e){return B.hl0(d,e)},
hl0(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Pg.h(0,f)
if(e==null)e=$.EZ.h(0,f)
if(e!=null&&!C.aG.gai(e)){v=e
x=1
break}s=$.ae0.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_C(s),$async$qU)
case 9:r=a3
if(r!=null&&!C.aG.gai(r)){$.EZ.n(0,f,r)
$.Pg.n(0,f,r)
B.P_(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a6(d)
$.al.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ads(f),$async$qU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.avo(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pt(g[l]),$async$qU)
case 16:k=a3
if(k!=null&&!C.aG.gai(k))n.K(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.alh()
if(!C.aG.gai(r)){$.EZ.n(0,f,r)
$.Pg.n(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aL7(f),$async$qU)
case 17:j=a3
if(j!=null&&!C.aG.gai(j)){$.Pg.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.T8(a0,a1,0,g),$async$qU)
case 20:i=a3
if(i!=null&&!C.aG.gai(i)){h=new Uint8Array(A.cn(i))
$.EZ.n(0,f,h)
$.Pg.n(0,f,h)
B.P_(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qU,w)},
hl3(d){var x,w,v=$.ae0.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hl4(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hF([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hl1(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amO(d,e,f,g,h){return B.hl2(d,e,f,g,h)},
hl2(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amO=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ae0.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_C(s),$async$amO)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qU(g,e),$async$amO)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eO().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hW(d).w8(h,r,new A.CJ(!0,e.c)),$async$amO)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a6(l)
$.al.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amO,w)},
fSB(d,e,f,g,h){var x,w,v,u,t=$.fSA
$.fSA=t+1
x=Date.now()
w=""+1000*x+"_"+C.cF.aC(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c3D.n(0,t,new B.brI(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.avo(u)))
return t},
fCX(d){var x=0,w=A.j(y.H)
var $async$fCX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fCX,w)},
H6(d,e){var $async$H6=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ae0.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.U(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.pD(B.T8(d,e,p,o<q?o:q),$async$H6,w)
case 8:n=a1
x=n!=null&&!C.aG.gai(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pD(A.Ey(n),$async$H6,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pD(B.ads("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$H6,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pD(B.Pt(h[l]),$async$H6,w)
case 18:k=a1
x=k!=null&&!C.aG.gai(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pD(A.Ey(k),$async$H6,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pD(B.qU(d,e),$async$H6,w)
case 22:j=a1
x=j!=null&&!C.aG.gai(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pD(A.Ey(A.Bd(j,p,o<i?o:i)),$async$H6,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pD(null,0,w)
case 2:return A.pD(t.at(-1),1,w)}})
var x=0,w=A.h03($async$H6,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h1R(w)},
aWK(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c3D.h(0,d)
if(t==null||J.cj(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a2i(),$async$aWK)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWK,w)},
T7(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$T7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c3D.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2i(),$async$T7)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ady(r.c,u,r.z),$async$T7)
case 4:t=new B.ja(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a4().ab(),r.f,r.r,B.aWI(),null)
u=r.a
x=5
return A.b(B.zH(u),$async$T7)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.F9(u,s),$async$T7)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T7,w)},
a51(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a51=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c3D.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aeF(u[s]),$async$a51)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a51,w)},
c3F(d,e,f){var x=0,w=A.j(y.H)
var $async$c3F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwJ(d,e,f),$async$c3F)
case 2:return A.h(null,w)}})
return A.i($async$c3F,w)},
c3G(d,e,f){var x=0,w=A.j(y.H)
var $async$c3G=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwK(d,e,f),$async$c3G)
case 2:return A.h(null,w)}})
return A.i($async$c3G,w)},
Dp(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Dp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zH(d),$async$Dp)
case 2:p=g
J.n5(p,new B.c3E(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EZ.W(0,v)
$.ae0.W(0,e)
x=3
return A.b(B.ads(v),$async$Dp)
case 3:u=g
$.eZy.W(0,v)
x=4
return A.b(A.ax(),$async$Dp)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Dp)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Dp)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aeF(s[q]),$async$Dp)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aeF(v),$async$Dp)
case 13:x=14
return A.b(B.F9(d,p),$async$Dp)
case 14:return A.h(null,w)}})
return A.i($async$Dp,w)},
aWJ(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qU(d,e),$async$aWJ)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f_n(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWJ,w)},
zH(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$zH)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aF(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b5(u,new B.f7n(),y.U)
r=A.A(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zH,w)},
F9(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$F9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$F9)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b5(e,new B.fbi(),y.P)
t=A.A(t,t.$ti.k("ai.E"))
x=3
return A.b(v.ap("String","ngmy_doc_share_index_v1_"+u,C.Q.am(t,null)),$async$F9)
case 3:return A.h(null,w)}})
return A.i($async$F9,w)},
bwJ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zH(d),$async$bwJ)
case 3:u=h
t=J.cB(u)
s=t.bi(u,new B.f61(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aAm(f))
x=4
return A.b(B.F9(d,u),$async$bwJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwJ,w)},
bwK(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zH(d),$async$bwK)
case 3:u=h
t=J.cB(u)
s=t.bi(u,new B.f62(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).czC(f))
x=4
return A.b(B.F9(d,u),$async$bwK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwK,w)},
a9L:function a9L(d){this.a=d},
f32:function f32(){},
f7k:function f7k(d,e){this.a=d
this.b=e},
f7l:function f7l(d){this.a=d},
f7m:function f7m(){},
c3E:function c3E(d){this.a=d},
brI:function brI(d,e,f,g,h,i,j,k,l){var _=this
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
f7n:function f7n(){},
fbi:function fbi(){},
f61:function f61(d){this.a=d},
f62:function f62(d){this.a=d},
a52(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a52=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.ba(d,new B.c3J())?3:4
break
case 3:x=5
return A.b(B.aWL(d,e),$async$a52)
case 5:u=g
if(u!=null){t=u.c
B.LR(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gL(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aWG(s),$async$a52)
case 10:case 9:if(g){v=new A.On(1,D.Pq,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.T9(d,e),$async$a52)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Te(!0,!0,d,e),$async$a52)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.LR(d,D.y6,e,t)
v=new A.On(p,D.y6,t)
x=1
break}v=B.c3I(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a52,w)},
T9(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$T9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a54(null,d,e),$async$T9)
case 3:p=g
try{u=C.Q.aF(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cj(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWF(p,d.length,e),$async$T9)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c3G(e,C.d.gL(d).a,r.b),$async$T9)
case 7:case 6:q=r.a
x=8
return A.b(B.LR(d,D.Pq,e,q),$async$T9)
case 8:v=new A.On(d.length,D.Pq,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T9,w)},
Ta(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ta=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.m_(D.mb)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a53(d,e),$async$Ta)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c3B(s,d,e,t),$async$Ta)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWG(t),$async$Ta)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qU(e,d),$async$Ta)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.T9(A.a([d],y.r),e),$async$Ta)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ta,w)},
Tc(){var x=0,w=A.j(y.H)
var $async$Tc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fCQ(),$async$Tc)
case 2:x=3
return A.b(B.aNv(),$async$Tc)
case 3:return A.h(null,w)}})
return A.i($async$Tc,w)},
a53(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a53=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWI()
x=3
return A.b(B.c3F(e,d.a,u),$async$a53)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a53,w)},
LR(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$LR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Pq&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a53(p,f),$async$LR)
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
return A.b(B.c3A(o,p,u,f),$async$LR)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c3B(o,p,f,t),$async$LR)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c3z(o,u,p,f),$async$LR)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$LR,w)},
aWL(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c3H(e,d),$async$aWL)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Te(!1,!0,d,e),$async$aWL)
case 4:u=g
if(u!=null){t=u.b
v=new A.On(u.a,D.y6,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWL,w)},
c3H(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c3H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.T8(d,s,0,1),$async$c3H)
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
return A.i($async$c3H,w)},
c3I(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c3I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a54(null,d,e),$async$c3I)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fSy(u)
if(t.length>800){v=null
x=1
break}v=new A.On(d.length,D.dgM,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3I,w)},
amP(d,e,f){return B.hl7(d,e,f)},
hl7(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amP=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cX(g,"\ufeff"))g=J.mn(g,1)
x=B.fCV(g)?3:4
break
case 3:x=5
return A.b(B.c3C(g),$async$amP)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cX(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mn(g,13))
try{k=B.Dq(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a6(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cX(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mn(g,13))
u=9
x=12
return A.b(B.aWE(q),$async$amP)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Tb(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a6(f)
$.al.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cX(g,"NGMYDOCSYNC0|"))try{n=B.fCU(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Tb(n,a0)
v=k
x=1
break}catch(a1){m=A.a6(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cX(g,"N2|")){v=B.H7(C.a.i(J.mn(g,3)),d,a0)
x=1
break}if(J.cX(g,"NGMYDOCSYNC2|")){v=B.H7(C.a.i(J.mn(g,13)),d,a0)
x=1
break}i=A.ae("https?://\\S+",!0,!1,!1,!1).cA(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.an(k,0,k.length-1)
else h=k
v=B.H7(h,d,a0)
x=1
break}if(J.eT(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Tb(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amP,w)},
H7(d,e,f){return B.hl5(d,e,f)},
hl5(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H7=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ae("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.an(e,0,e.length-13)
f=A.ae("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cs(A.t(s)+"/manifest.json",0,null)
q=A.cs(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aWw(r),$async$H7)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aWw(A.cs(s,0,null)),$async$H7)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cj(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c3e(o,r,a1,n,a2),$async$H7)
case 11:m=a4
x=J.cj(m)?12:13
break
case 12:x=14
return A.b(B.c3d(q),$async$H7)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Tb(l,a2),$async$H7)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cj(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a6(d)
$.al.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H7,w)},
a54(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a54=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qU(f,r),$async$a54)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cR.gcs().aG(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.Q(Date.now(),0,!1).a4().ab())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Q.am(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a54,w)},
Tb(d,e){return B.hl6(d,e)},
hl6(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Tb=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aF(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.q(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.q(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.q(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.q(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.y(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aU(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cy.aG(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.AC(i,a3,d,k,l,o),$async$Tb)
case 9:h=a5
if(h!=null)J.cc(n,h)
x=7
break
case 8:f=J.aa(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a6(a1)
$.al.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Tb,w)},
LQ:function LQ(d,e){this.a=d
this.b=e},
c3J:function c3J(){},
a_c(d){var x=A.M(d).ax.a===C.H,w=x?D.aaf:D.a8y,v=x?D.abz:C.c,u=x?C.aN:C.M,t=x?C.bH:C.aj,s=x?D.a9x:C.aJ
return new A.aDo([w,s,v,u,t,x?C.f5:C.bS])},
h6D(d,e){var x=e?C.w.j(0.72):C.aU
return A.cf(null,x,!0,null,new B.fvq(e),d,null,!0,!0,y.N)},
c3o(d,e,f,g,h,i,j,k,l){return new B.T3(e,l,d,f,k,j,g,h,i,null)},
Xf(d,e,f,g,h,i,j){return new B.ba7(g,h,j,e,i,d,f,null)},
fvq:function fvq(d){this.a=d},
Xc:function Xc(d,e){this.c=d
this.a=e},
awz:function awz(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cXN:function cXN(d){this.a=d},
cXL:function cXL(d){this.a=d},
cXM:function cXM(d){this.a=d},
brm:function brm(){},
T3:function T3(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAt:function aAt(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dIL:function dIL(d){this.a=d},
dI8:function dI8(d,e){this.a=d
this.b=e},
dI9:function dI9(d,e){this.a=d
this.b=e},
dHI:function dHI(d,e,f){this.a=d
this.b=e
this.c=f},
dHH:function dHH(d){this.a=d},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHO:function dHO(d,e,f){this.a=d
this.b=e
this.c=f},
dHN:function dHN(d){this.a=d},
dIz:function dIz(d,e){this.a=d
this.b=e},
dIA:function dIA(d){this.a=d},
dI5:function dI5(d,e,f){this.a=d
this.b=e
this.c=f},
dI2:function dI2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dHM:function dHM(d){this.a=d},
dId:function dId(d){this.a=d},
dIc:function dIc(){},
dHS:function dHS(d){this.a=d},
dIw:function dIw(d,e){this.a=d
this.b=e},
dIx:function dIx(d,e){this.a=d
this.b=e},
dIy:function dIy(d,e){this.a=d
this.b=e},
dI3:function dI3(d,e){this.a=d
this.b=e},
dI4:function dI4(d,e){this.a=d
this.b=e},
dIp:function dIp(d,e){this.a=d
this.b=e},
dIl:function dIl(d){this.a=d},
dIk:function dIk(d){this.a=d},
dIm:function dIm(){},
dIn:function dIn(){},
dIo:function dIo(d,e){this.a=d
this.b=e},
dIq:function dIq(){},
dIr:function dIr(d){this.a=d},
dIj:function dIj(d,e){this.a=d
this.b=e},
dIe:function dIe(d){this.a=d},
dIf:function dIf(d){this.a=d},
dIg:function dIg(d){this.a=d},
dIh:function dIh(d){this.a=d},
dIi:function dIi(d){this.a=d},
dHP:function dHP(){},
dHQ:function dHQ(d){this.a=d},
dHR:function dHR(d,e){this.a=d
this.b=e},
dHL:function dHL(d,e){this.a=d
this.b=e},
dHK:function dHK(d,e,f){this.a=d
this.b=e
this.c=f},
dI6:function dI6(d){this.a=d},
dI7:function dI7(d,e,f){this.a=d
this.b=e
this.c=f},
dI0:function dI0(d,e){this.a=d
this.b=e},
dHX:function dHX(d){this.a=d},
dHU:function dHU(d,e,f){this.a=d
this.b=e
this.c=f},
dHY:function dHY(d){this.a=d},
dHZ:function dHZ(d){this.a=d},
dI_:function dI_(){},
dI1:function dI1(d,e){this.a=d
this.b=e},
dHV:function dHV(d){this.a=d},
dHT:function dHT(d,e,f){this.a=d
this.b=e
this.c=f},
dHW:function dHW(){},
dIb:function dIb(d){this.a=d},
dIa:function dIa(d,e){this.a=d
this.b=e},
dIv:function dIv(d,e){this.a=d
this.b=e},
dIs:function dIs(d){this.a=d},
dIt:function dIt(d,e){this.a=d
this.b=e},
dIu:function dIu(d){this.a=d},
dII:function dII(d){this.a=d},
dIG:function dIG(d){this.a=d},
dIH:function dIH(d){this.a=d},
dIJ:function dIJ(){},
dIK:function dIK(d,e){this.a=d
this.b=e},
dIC:function dIC(d,e){this.a=d
this.b=e},
dID:function dID(d,e,f){this.a=d
this.b=e
this.c=f},
dIB:function dIB(d,e,f){this.a=d
this.b=e
this.c=f},
dIE:function dIE(d,e){this.a=d
this.b=e},
dIF:function dIF(d,e){this.a=d
this.b=e},
aww:function aww(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ba6:function ba6(d,e,f){this.c=d
this.d=e
this.a=f},
cXJ:function cXJ(){},
cXK:function cXK(){},
aa4:function aa4(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cY6:function cY6(){},
cY5:function cY5(d){this.a=d},
Xe:function Xe(d,e,f){this.c=d
this.d=e
this.a=f},
awB:function awB(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cY2:function cY2(d){this.a=d},
cY3:function cY3(d,e,f){this.a=d
this.b=e
this.c=f},
cY4:function cY4(d,e){this.a=d
this.b=e},
cY0:function cY0(d,e){this.a=d
this.b=e},
cXZ:function cXZ(d){this.a=d},
cXX:function cXX(d){this.a=d},
cXU:function cXU(d){this.a=d},
cY_:function cY_(d){this.a=d},
cXW:function cXW(d){this.a=d},
cY1:function cY1(d){this.a=d},
cXY:function cXY(d){this.a=d},
cXV:function cXV(d){this.a=d},
Xb:function Xb(d,e,f){this.c=d
this.d=e
this.a=f},
awy:function awy(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cXG:function cXG(d){this.a=d},
cXF:function cXF(d,e){this.a=d
this.b=e},
cXH:function cXH(d){this.a=d},
cXE:function cXE(d,e){this.a=d
this.b=e},
cXI:function cXI(d){this.a=d},
cXD:function cXD(d,e){this.a=d
this.b=e},
cXz:function cXz(d){this.a=d},
cXA:function cXA(d){this.a=d},
cXB:function cXB(d,e){this.a=d
this.b=e},
cXC:function cXC(d){this.a=d},
O0:function O0(d,e,f){this.c=d
this.d=e
this.a=f},
awE:function awE(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cYj:function cYj(d){this.a=d},
cYk:function cYk(d){this.a=d},
cYl:function cYl(d){this.a=d},
cYm:function cYm(d){this.a=d},
cYn:function cYn(d,e){this.a=d
this.b=e},
cYo:function cYo(d){this.a=d},
cYq:function cYq(d){this.a=d},
cYp:function cYp(d){this.a=d},
Xg:function Xg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awC:function awC(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cYf:function cYf(d,e){this.a=d
this.b=e},
cYg:function cYg(d,e){this.a=d
this.b=e},
cY7:function cY7(d,e,f){this.a=d
this.b=e
this.c=f},
cY8:function cY8(d){this.a=d},
cY9:function cY9(){},
cYe:function cYe(){},
cYa:function cYa(d,e){this.a=d
this.b=e},
cYb:function cYb(d,e){this.a=d
this.b=e},
cYc:function cYc(d,e){this.a=d
this.b=e},
cYd:function cYd(d,e){this.a=d
this.b=e},
aa2:function aa2(d,e){this.c=d
this.a=e},
cXy:function cXy(d){this.a=d},
Xa:function Xa(d){this.a=d},
awx:function awx(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Xh:function Xh(d,e){this.c=d
this.a=e},
awD:function awD(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cYi:function cYi(d){this.a=d},
cYh:function cYh(d){this.a=d},
ba7:function ba7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hl8(){var x,w=$.p1(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"VT"+C.d.fN(v)},
LS(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$LS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$LS)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eW("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$LS)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a_(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a6(n)
$.al.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$LS,w)},
a55(d){return B.hl9(d)},
hl9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a55=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a55)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hv("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cD,null),$async$a55)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a6(q)
$.al.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a55,w)},
Td(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Td=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LS(),$async$Td)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dS(A.a_(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.n(s,d,t)
x=4
return A.b(B.a55(s),$async$Td)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Td,w)},
Te(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Te=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bY(),$async$Te)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bj(f,!0,y.U)
else{t=A.U(f).k("a4<1>")
u=A.A(new A.a4(f,new B.c3L(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hl8()
t=A.U(u).k("J<1,a1<n,aB>>")
r=A.A(new A.J(u,new B.c3M(s),t),t.k("ai.E"))
x=6
return A.b(B.LS(),$async$Te)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=7
return A.b(B.a55(q),$async$Te)
case 7:x=8
return A.b(B.a56(r,u,g,s),$async$Te)
case 8:v=new A.blv(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Te,w)},
amQ(d){var x=0,w=A.j(y.y),v,u,t
var $async$amQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.LS(),$async$amQ)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amQ,w)},
c3N(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c3N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.LS(),$async$c3N)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3N,w)},
a56(d,e,f,g){return B.hla(d,e,f,g)},
hla(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a56=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amO("media",r,new B.c3K(s,e,g),f,q),$async$a56)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Td(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a56)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Td(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$a56)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a6(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Td(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a56)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a56,w)},
Dq(d,e,f){return B.hlb(d,e,f)},
hlb(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Dq=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$Dq)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amQ(b3),$async$Dq)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kw,null,g),$async$Dq)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amQ(b3),$async$Dq)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.LS(),$async$Dq)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aM(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cj(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gah(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.eO().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.ou(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a8l(a8.a,b0,"media",a8.d,a9).BA(m)
k=A.cs(l,0,null)
x=17
return A.b(B.aWx(k,n,o,s,b7),$async$Dq)
case 17:j=c0
if(j!=null){J.cc(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a6(b4)
$.al.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.aa(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gah(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.eO().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.ou(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a8l(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Dq)
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
a0=A.dS(A.a_(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a55(e),$async$Dq)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dq,w)},
c3L:function c3L(){},
c3M:function c3M(d){this.a=d},
c3K:function c3K(d,e,f){this.a=d
this.b=e
this.c=f},
aNv(){var x=0,w=A.j(y.H),v,u
var $async$aNv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hw2=null
v=y.H
u=A.dO(null,v)
x=2
return A.b(u,$async$aNv)
case 2:u=A.dO(null,v)
x=3
return A.b(u,$async$aNv)
case 3:u=$.fHV
u=u==null?null:u.bA(0)
x=4
return A.b(y.x.b(u)?u:A.dO(u,v),$async$aNv)
case 4:$.fHV=$.hEl=$.hEm=null
return A.h(null,w)}})
return A.i($async$aNv,w)},
faV(d){var x=0,w=A.j(y.H),v,u
var $async$faV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2M){x=1
break}u=new A.be($.bu,y.d4)
d.c=new B.faW(new A.bP(u,y.aY))
x=3
return A.b(u.i1(0,C.hC,new B.faX()),$async$faV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$faV,w)},
hEj(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hkT(x):x},
fHZ(d){var x=0,w=A.j(y.T),v,u,t
var $async$fHZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.a_(u,"WR")){v=B.amS(u)
x=1
break}v=B.fCU(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHZ,w)},
fHY(d){var x=0,w=A.j(y.T),v,u,t
var $async$fHY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.a_(u,"WR")){v=B.amT(u)
x=1
break}v=B.fCU(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHY,w)},
frc(d){var x=0,w=A.j(y.T),v
var $async$frc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amT(d),$async$frc)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frc,w)},
bxA(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bxA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fHY(d),$async$bxA)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aF(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bxA,w)},
f0b(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f0b=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.T7(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.AC(d.alh(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f0b,w)},
Fb(d,e,f){return B.hGG(d,e,f)},
hGG(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Fb=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fHZ(a1),$async$Fb)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aF(0,e,null)
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
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h8r().aAB(D.d5n,null),$async$Fb)
case 4:l=d.fHV=a4
f.a="file"
f.b="application/octet-stream"
k=new A.avo(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.be($.bu,y.b1)
l.y=new B.fbp(f,k,new B.fbq(f,a2,k,j,a0,p),a2,j,a0,p,new A.bP(t,y.ch))
x=5
return A.b(l.a57(0,new B.Vl(r,"offer")),$async$Fb)
case 5:d=l
x=7
return A.b(l.ai9(0),$async$Fb)
case 7:x=6
return A.b(d.a5_(0,a4),$async$Fb)
case 6:x=8
return A.b(B.faV(l),$async$Fb)
case 8:x=9
return A.b(l.am1(),$async$Fb)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hEj(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.am(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amU(m,h),$async$Fb)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fSy(h)
case 11:v=new A.bkN(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Fb,w)},
faW:function faW(d){this.a=d},
faX:function faX(){},
fbq:function fbq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fbp:function fbp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fbo:function fbo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hIu(d){switch(d){case"new":return D.dWJ
case"checking":return D.dWK
case"connected":return D.dWM
case"completed":return D.dWL
case"failed":return D.dWO
case"disconnected":return D.dWP
case"closed":return D.aGF
case"count":return D.dWN}return D.aGF},
hIv(d){switch(d){case"new":return D.aGG
case"gathering":return D.dWQ
case"complete":return D.a2M}return D.aGG},
hSB(d){switch(d){case"stable":return D.dWR
case"have-local-offer":return D.dWS
case"have-local-pranswer":return D.dWU
case"have-remote-offer":return D.dWT
case"have-remote-pranswer":return D.dWV
case"closed":return D.aGM}return D.aGM},
hQT(d){switch(d){case"new":return D.aGJ
case"connecting":return D.aGK
case"connected":return D.aGL
case"closed":return D.a2N
case"disconnected":return D.aGI
case"failed":return D.aGH}return D.a2N},
a7l:function a7l(d,e){this.a=d
this.b=e},
MT:function MT(d,e){this.a=d
this.b=e},
Vk:function Vk(d,e){this.a=d
this.b=e},
MS:function MS(d,e){this.a=d
this.b=e},
DS:function DS(d,e){this.a=d
this.b=e},
cex:function cex(){},
fEA(d){var x=new B.DR()
x.a=d
x.b=!0
return x},
DR:function DR(){this.b=this.a=$},
a7k:function a7k(){},
ar4:function ar4(){},
Vl:function Vl(d,e){this.a=d
this.b=e},
fCQ(){var x=0,w=A.j(y.H)
var $async$fCQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fCQ,w)},
fCT(d,e,f){var x=0,w=A.j(y.T),v
var $async$fCT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.m_(D.mb))){v=null
x=1
break}v=B.frr(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCT,w)},
fSy(d){var x,w=F.a84.a22(C.dF.aG(d),null)
if(w.length===0){x=C.dF.aG(d)
return C.cR.gcs().aG(x)}return C.cR.gcs().aG(w)},
hkS(d){var x,w,v=C.cy.aG(d)
try{x=C.c3.c6(0,F.a83.b7J(v,!1))
return x}catch(w){x=C.c3.c6(0,v)
return x}},
fCU(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hkS(C.a.aY(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aY(t,w.length)
try{v=C.c3.c6(0,C.cy.aG(x))
return v}catch(u){return x}}return null},
hkT(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a_(t,"a=extmap"))continue
if(C.a.a_(t,"a=ssrc"))continue
if(C.a.a_(t,"a=msid"))continue
if(C.a.a_(t,"a=rtcp"))continue
if(C.a.a_(t,"a=rtpmap"))continue
if(C.a.a_(t,"a=fmtp"))continue
if(C.a.a_(t,"a=rtcp-fb"))continue
if(C.a.a_(t,"a=mid:"))continue
if(C.a.a_(t,"a=group:"))continue
if(C.a.a_(t,"a=setup:"))continue
if(C.a.a_(t,"a=ice-options:"))continue
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aH(s,"\n")},
hkU(){var x,w=$.p1(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"DS"+C.d.fN(v)},
aWD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aWD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eW("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aWD)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a6(o)
$.al.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aWD,w)},
c3t(d,e){return B.hkV(d,e)},
hkV(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c3t=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hv("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cD,null),$async$c3t)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a6(o)
$.al.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c3t,w)},
aWG(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWD(d),$async$aWG)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWG,w)},
aWF(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hkU()
r=C.a.i(f)
t=C.dF.aG(s)
x=3
return A.b(B.c3t(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cR.gcs().aG(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$aWF)
case 3:if(!h){v=null
x=1
break}v=new A.Zg("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWF,w)},
aWE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aWE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aWD(o),$async$aWE)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c3.c6(0,C.cy.aG(u))
if(J.iN(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a6(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aWE,w)},
c3u(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c3u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.byv("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cD),$async$c3u)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a6(p)
$.al.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c3u,w)},
aWH(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.H3(),$async$aWH)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a_(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWH,w)},
amL(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amL)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWH(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amL,w)},
amJ(d,e){var x=0,w=A.j(y.H)
var $async$amJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amJ)
case 3:x=2
return A.b(g.ap("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amJ)
case 2:return A.h(null,w)}})
return A.i($async$amJ,w)},
a4Y(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4Y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4Y)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.H3(),$async$a4Y)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.ak(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=5
return A.b(A.a4X(s),$async$a4Y)
case 5:x=6
return A.b(B.amJ(f,u),$async$a4Y)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Y,w)},
a4Z(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4Z=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4Z)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.H3(),$async$a4Z)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a_(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ak(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.amJ(g,q),$async$a4Z)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a4X(u),$async$a4Z)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Z,w)},
a5_(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a5_)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.H3(),$async$a5_)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aWA(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ax(),$async$a5_)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ap("String","ngmy_doc_share_school_session_"+s,C.Q.am(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a4().ab()],p,p),null)),$async$a5_)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5_,w)},
c3v(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c3v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$c3v)
case 7:s=f
p=A.t(n)
r=A.aS(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aF(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a_(q,y.N,y.z)
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
return A.i($async$c3v,w)},
H4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$H4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c3v(d),$async$H4)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWH(t),$async$H4)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amK(d),$async$H4)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aWA(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amK(d),$async$H4)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H4,w)},
amK(d){var x=0,w=A.j(y.H)
var $async$amK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amK)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amK)
case 2:return A.h(null,w)}})
return A.i($async$amK,w)},
aWI(){var x,w=$.p1(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(32)]
return C.d.fN(v)},
a50(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fCV(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ae("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c3y(d){return B.hkX(d)},
hkX(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c3y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a50(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eW("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c3y)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a6(o)
$.al.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c3y,w)},
amN(d,e){return B.hkY(d,e)},
hkY(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a50(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hv("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cD,null),$async$amN)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a6(o)
$.al.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amN,w)},
c3A(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c3A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a50(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amN(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c3A)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c3A,w)},
c3z(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c3z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a50(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amN(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c3z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c3z,w)},
c3B(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c3B=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a50(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amN(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3B,w)},
c3C(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c3C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fCV(d)){v=null
x=1
break}x=3
return A.b(B.c3y(d),$async$c3C)
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
return A.i($async$c3C,w)},
a57(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a57=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a57)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eW("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a57)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a_(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a6(n)
$.al.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a57,w)},
amR(d){return B.hlc(d)},
hlc(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$amR)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hv("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cD,null),$async$amR)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a6(q)
$.al.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amR,w)},
amS(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cX(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amS)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a57(),$async$amS)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c3.c6(0,C.cy.aG(q))
if(J.iN(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dS(A.a_(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a4().ab())
J.aE(s,j,o)
x=9
return A.b(B.amR(s),$async$amS)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a6(i)
$.al.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amS,w)},
amU(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bY(),$async$amU)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a57(),$async$amU)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dS(A.a_(s,r,q),r,q)
r=C.dF.aG(C.a.i(e))
q.n(0,"answer",C.cR.gcs().aG(r))
q.n(0,"answerAt",new A.Q(Date.now(),0,!1).a4().ab())
t.n(u,p,q)
x=5
return A.b(B.amR(u),$async$amU)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amU,w)},
amT(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amT)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a57(),$async$amT)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c3.c6(0,C.cy.aG(u))
v=r
x=1
break}catch(n){t=A.a6(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amT,w)},
alU(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alU=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ag$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb6()
if(!(p instanceof A.q7)){v=null
x=1
break}x=3
return A.b(p.lQ(e),$async$alU)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fO),$async$alU)
case 7:q=g
o=q
o=o==null?null:J.f6(J.wa(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.q()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$alU,w)},
hOY(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fpN(d){return B.hP_(d)},
hP_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fpN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eO().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hW("media").Jk(d,3600),$async$fpN)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a6(p)
$.al.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fpN,w)},
BV(d,e,f,g,h,i){var x=null
return B.hOX(d,e,f,g,h,i)},
hOX(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BV=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fSB(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fCX(r),$async$BV)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fpN(o),$async$BV)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a51(r),$async$BV)
case 14:v=null
x=1
break
case 13:e=$.bu.h(0,C.aJH)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ki(A.a([],g))
x=15
return A.b(d.eM(0,A.arU("GET",A.cs(n,0,null))).cK(0,C.DR),$async$BV)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a51(r),$async$BV)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IU(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BV)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWK(r,k),$async$BV)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.aa(0),$async$BV)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.T7(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a6(a4)
$.al.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a51(r),$async$BV)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BV,w)},
aNe(d){return B.hOZ(d)},
hOZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aNe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eO().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hW("media").W(0,d),$async$aNe)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a6(p)
$.al.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNe,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[39]
F=c[211]
H=c[102]
P=c[192]
E=c[184]
G=c[83]
Q=c[156]
R=c[103]
S=c[190]
I=c[215]
K=c[221]
B=a.updateHolder(c[21],B)
D=c[219]
T=c[155]
L=c[174]
U=c[63]
V=c[222]
W=c[69]
X=c[54]
M=c[82]
Y=c[220]
N=c[114]
B.cey.prototype={
aAB(d,e){return this.cB7(d,e)},
cB7(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aAB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.T(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dS(r,s,t)
t.v(0,d)
u=new q(A.k6(A.cy(t)))
t=J.k(u)
v=B.hpN(C.cR.gcs().aG(new A.d0(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aAB,w)}}
B.b0R.prototype={
bsD(d){var x=this,w=x.w
w.onclose=A.ha(new B.cet(x))
w.onopen=A.ha(new B.ceu(x))
w.onmessage=A.ha(new B.cev(x))
w.onbufferedamountlow=A.ha(new B.cew(x))},
gdh(d){return this.x},
aew(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aew=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DR()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fEA(J.f6(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ec(d.arrayBuffer(),y.af),$async$aew)
case 8:v=t.fEA(s.al7(f,0,null))
x=1
break
case 7:case 4:v=B.fEA(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aew,w)}}
B.b0S.prototype={
bsE(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ha(new B.cez(x)))
w.addEventListener("icecandidate",A.ha(new B.ceA(x)))
w.addEventListener("iceconnectionstatechange",A.ha(new B.ceB(x)))
w.onicegatheringstatechange=A.ha(new B.ceC(x))
w.addEventListener("signalingstatechange",A.ha(new B.ceD(x)))
if(!$.fLp())w.addEventListener("connectionstatechange",A.ha(new B.ceE(x)))
w.addEventListener("negotiationneeded",A.ha(new B.ceF(x)))
w.addEventListener("track",A.ha(new B.ceG(x)))},
ai9(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ai9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ec(s.createAnswer(A.k6(A.cy(A.T(y.N,y.z)))),y.aQ),$async$ai9)
case 3:t=f
v=new B.Vl(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai9,w)},
a5_(d,e){return this.bid(0,e)},
bid(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ec(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a5_)
case 2:return A.h(null,w)}})
return A.i($async$a5_,w)},
a57(d,e){return this.biu(0,e)},
biu(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a57=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ec(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a57)
case 2:return A.h(null,w)}})
return A.i($async$a57,w)},
am1(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$am1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Vl(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am1,w)},
bA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.fb(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bA,w)}}
B.aa3.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.Xd.prototype={
S(){return new B.awA()},
gd6(){return this.c}}
B.awA.prototype={
Z(){this.a0()
this.abg()},
abg(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWB(u.e,u.c),$async$abg)
case 2:t=e
if(v.c!=null)v.m(new B.cXR(v,t))
return A.h(null,w)}})
return A.i($async$abg,w)},
Ot(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ot=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amG(t.e,t.c,!1),$async$Ot)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(D.ezN)
x=1
break}x=4
return A.b(B.a4W(u.a.c,"individual"),$async$Ot)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a3z(A.eE(new B.cXO(u),!1,null,y.H)),$async$Ot)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ot,w)},
HL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f94(o),$async$HL)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5_(o.e,r,s,q),$async$HL)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.P(D.ewS)
x=1
break}x=5
return A.b(B.a4W(u.a.c,"member"),$async$HL)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a3z(A.eE(new B.cXQ(u),!1,null,y.H)),$async$HL)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HL,w)},
wZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4V(t.e,o,t.f,t.r,t.w,s),$async$wZ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4W(u.a.c,"org_owner"),$async$wZ)
case 4:x=5
return A.b(B.amL(u.a.c),$async$wZ)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f9z(o),$async$wZ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4Y(s,t,o,q.c),$async$wZ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.P(D.ewP)
x=1
break}x=10
return A.b(B.amL(u.a.c),$async$wZ)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a3z(A.eE(new B.cXP(u),!1,null,y.H)),$async$wZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wZ,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.j1:C.p0,q=B.fCS(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ab(0,C.G,C.aC.j(0.35),C.fG,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.eRM,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.f8s,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bK4,C.n),t,t,t,t,C.ev,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lo(new B.cXT(),t),C.P,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aav(C.eN,C.atD,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc6f(),t),C.aa],v))
p.push(new B.aav(C.og,C.ZS,"Team Member","Sign in with your organization access code + password",u.gc74(),t))
p.push(C.aa)
p.push(new B.aav(C.agx,C.a0d,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc6B(),t))
return A.ca(t,r,A.bp(!0,A.ch(A.v(p,C.ai,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adX,t,t,C.ak),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.aav.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.a1,!0,s,A.aJ(!1,r,!0,A.es(A.B(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a5(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oC,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.Aq,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c4,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ac)}}
B.az4.prototype={}
B.aCc.prototype={}
B.ja.prototype={
m_(d){var x=this.b,w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.aY(x,w+1).toLowerCase())},
gamD(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.a9(x/1024,1)+" KB"
if(x<1073741824)return C.k.a9(x/1048576,1)+" MB"
return C.k.a9(x/1073741824,2)+" GB"},
ac(){var x,w=this,v=A.T(y.N,y.z)
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
b7f(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.ja(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
czC(d){return this.b7f(null,d)},
aAm(d){return this.b7f(d,null)}}
B.T1.prototype={
S(){return new B.aAr(new A.cp(null,y.A))},
gd6(){return this.c}}
B.aAr.prototype={
Z(){this.a0()
this.abh()},
abh(){var x=0,w=A.j(y.H),v,u=this,t
var $async$abh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AB(u.a.c),$async$abh)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dHE(u,t))
case 1:return A.h(v,w)}})
return A.i($async$abh,w)},
abi(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$abi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fE(new A.fx(s)),$async$abi)
case 3:t=u.c
if(t!=null)t.I(y.q).f.P(D.eAH)
case 1:return A.h(v,w)}})
return A.i($async$abi,w)},
Xy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alU(s.d,4),$async$Xy)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rn(r,"ngmy_my_code_"+m+".png"),$async$Xy)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a6(l)
o=s.c
if(o!=null)o.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xy,w)},
aeZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7V("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeZ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.j1:C.p0,m=o?C.c:C.M,l=A.ey(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lP
else if(q.e==null)x=A.au(new A.C(C.ev,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aC.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a_h,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a5(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.adx,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.G,C.aC.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.ch(A.v(A.a([x,C.mj,w,C.ki,new A.er(A.p(p,A.pn(p,p,!1,B.hkO(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c4,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ki,A.B(A.a([A.D(A.eu(M.AJ,C.RH,q.gc_k(),p),1),C.aw,A.D(A.dq(C.xy,C.a54,q.gc_l(),A.bk(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a3(1/0,p,A.eu(L.YK,D.f4G,q.gclg(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.KA,p,p,C.ak)
x=r}return A.ca(l,n,x,p,!1,!1,p,p)}}
B.T5.prototype={
S(){return new B.aAu(new A.ap(C.as,$.av()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aAu.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.H2(x==null?"":x)
if(w!=null)this.d.saT(0,w)},
q(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.q()
this.a2()},
Xz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.H2(u.d.a.a)
if(t==null){u.m(new B.dIN(u))
x=1
break}u.m(new B.dIO(u))
s=u.a
r=s.c
x=3
return A.b(B.a4U(s.d,new B.dIP(u),t,r),$async$Xz)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dIQ(u))
if(q){s=u.c
s.toString
A.a8(s,!1).M(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xz,w)},
a_H(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_H=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cj(r.a.d)){x=1
break}r.m(new B.dIR(r))
u=4
q=J.fk(r.a.d)
x=7
return A.b(B.qU(r.a.c,q),$async$a_H)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dIS(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.afo(p,m,l,j,k),$async$a_H)
case 8:o=e
if(r.c!=null)r.m(new B.dIT(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a6(h)
if(r.c!=null)r.m(new B.dIU(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dIV(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_H,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.aaf:D.a8y,h=j?D.abz:C.c,g=j?C.aN:C.M,f=j?C.bH:C.aj,e=j?D.a9x:C.aJ
i=[i,e,h,g,f,j?C.f5:C.bS]
x=A.M(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.ey(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.byT,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a5(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fC,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a_h,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tL(A.ae("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bfo()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.Kt,k,k,"",k,!0,new A.b3(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b3(4,A.m(18),new A.ay(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.af,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dIW(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lH,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JY(l.a.d,4)
m=A.A(new A.J(m,new B.dIX(x,new A.aDo(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.mI,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eq,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.evn)
else q.push(A.W(C.l3,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.io,k,k,k,C.eM,k,k,k)],r))}e=A.D(A.ch(A.v(e,C.ai,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bjZ,k,k,C.ak),1)
u=l.f?k:l.gclh()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eu(L.YK,D.f5B,u,A.db(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cc,k,new A.b6(q,C.Z),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc_m()
t=A.bk(C.aC,k,k,0,C.c,k,C.mH,k,new A.b6(A.m(16),C.Z),k,k,k)
return A.ca(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.bp(!0,A.mF(new B.dIY(),A.v(A.a([e,new A.C(D.bjt,A.v(A.a([s,C.P,i,C.aa,A.bL(l.f?C.r2:D.f45,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.Vg,k,new A.bl(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bfo.prototype={
nX(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f8(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ae("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ae("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.h3(C.bt,v.length),C.aM)}}
B.T2.prototype={
S(){return new B.aAs()}}
B.aAs.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ap(new A.ba(w,C.b0,C.aM),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.ap(new A.ba(x,C.b0,C.aM),v)
u.f!==$&&A.aQ()
u.f=new A.ap(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.av()
v.O$=0
v=w.e
v===$&&A.c()
v.R$=x
v.O$=0
v=w.f
v===$&&A.c()
v.R$=x
v.O$=0
w.a2()},
abj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$abj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dHF(r))
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
return A.b(B.a4Z(p,m,n,o,C.a.i(l).length===0?null:l),$async$abj)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.P(D.eAi)
s=[1]
x=4
break}p.I(y.q).f.P(D.eyW)
p=r.c
p.toString
A.a8(p,!1).M(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dHG(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$abj,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.j1:C.p0,q=A.ey(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eYd,s,s,s,1,s,!0),p=A.p(s,D.bc8,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Fh,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bFE,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bFz,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bFP,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc_n()
u=A.bk(C.aC,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.ca(q,r,A.ch(A.v(A.a([p,C.d5,o,C.aa,x,C.aa,w,C.mj,A.bL(t.r?C.r2:C.aMc,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ak),s,!1,!1,s,s)}}
B.a9L.prototype={}
B.brI.prototype={
a2i(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cn(r.alh()))
x=3
return A.b(B.Pu(t,s),$async$a2i)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2i,w)},
gd6(){return this.a}}
B.LQ.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.Xc.prototype={
S(){return new B.awz(new A.ap(C.as,$.av()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.awz.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cXN(this))},
q(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.q()
this.a2()},
c_t(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).M(x)
return null},
B(d){var x=this,w=null,v=B.a_c(d),u=x.a.c,t=u?C.hy:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.j1:v.a[0],p=A.m(24),o=A.H(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aC.j(u?0.25:0.12),C.fG,32)],n),l=A.p(w,T.aj7,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ab(0,C.G,C.aC.j(0.4),C.ct,16)],n),C.ajU,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tL(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.brm()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.E3,w,w,"",w,!0,new A.b3(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b3(4,A.m(16),D.aR6),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.af,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cXL(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lH,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.n4,new B.cXM(d),A.db(w,w,w,w,w,w,w,w,w,s,w,w,C.cc,w,new A.b6(A.m(14),C.Z),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ab(0,C.G,C.aC.j(0.35),C.cG,12)],n)
g=y.p
return A.ez(w,C.K,new A.d1(Q.IH,A.bV(new A.C(C.wJ,A.v(A.a([l,C.aO,k,C.P,j,C.dY,i,C.dY,A.B(A.a([f,C.aw,A.D(A.bV(A.aD(!1,C.a1,!0,w,A.aJ(!1,A.m(14),!0,D.dR_,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc_s(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.Mg,C.n),C.bb),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bb),w),w,w,w,C.KC,C.cZ,w,w,w)}}
B.brm.prototype={
nX(d,e){return e.ai4(e.a.toUpperCase())}}
B.T3.prototype={
S(){return new B.aAt(A.a([],y.r),A.b_(y.N))},
gd6(){return this.c}}
B.aAt.prototype={
Z(){var x=this
x.a0()
x.rS()
x.w=A.dD(C.j5,new B.dIL(x))},
q(){var x=this.w
if(x!=null)x.aa(0)
B.Tc()
this.a2()},
Zz(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LP(u.a.c),$async$Zz)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zH(u.a.c),$async$Zz)
case 4:u.m(new s.dI8(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zz,w)},
rS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LP(u.a.c),$async$rS)
case 3:t=e
x=4
return A.b(B.zH(u.a.c),$async$rS)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dI9(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LZ(u.d)
B.AB(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rS,w)},
LZ(d){return this.bwv(d)},
bwv(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a53(r,u.a.c),$async$LZ)
case 8:p=f
if(u.c==null){x=1
break}new B.dHI(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.m_(D.mb))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ta(r,u.a.c),$async$LZ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zH(u.a.c),$async$LZ)
case 12:u.m(new o.dHJ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LZ,w)},
Ml(d){return this.bCy(d)},
bCy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ml=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a53(d,u.a.c),$async$Ml)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dHO(u,d,t))
x=6
return A.b(A.fE(new A.fx(t)),$async$Ml)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fE(new A.fx(r.toUpperCase())),$async$Ml)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ml,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.P(A.b1(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
rT(d,e){return this.cvl(d,e)},
cvl(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dIz(r,e))
u=3
x=6
return A.b(d.$0(),$async$rT)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dIA(r))
$.eK.lV()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rT,w)},
gaR3(){var x=this.a
return x.f||x.r||x.w},
GO(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaR3()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c3r(s,n,r,q,o,t),$async$GO)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fjf(o,u.a.c),$async$GO)
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
return A.b(B.BX(s,o,r,q,n,t),$async$GO)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GO,w)},
YF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$YF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amL(u.a.c),$async$YF)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hM("No organization portal found.")
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
return A.b(A.a8(t,!1).cp(A.eE(new B.dI5(u,r,q),!1,null,y.H)),$async$YF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YF,w)},
ZK(d){return this.cf1(d)},
cf0(){return this.ZK(1)},
cf1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ZK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaR3()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amI(u.a.c),$async$ZK)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ZK,w)},
a9n(d,e,f){return this.bSE(d,e,f)},
bSE(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rT(new B.dI2(u,d,null,e,f),"Uploading\u2026"),$async$a9n)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
bwE(){B.h5V(!1,new B.dHM(this))
return},
cjU(){this.m(new B.dId(this))},
av9(){var x=0,w=A.j(y.H),v=this
var $async$av9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bwE()
return A.h(null,w)}})
return A.i($async$av9,w)},
a9j(){var x=0,w=A.j(y.H),v=this
var $async$a9j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rT(new B.dHS(v),"Importing\u2026"),$async$a9j)
case 2:return A.h(null,w)}})
return A.i($async$a9j,w)},
Qs(d){return this.cuP(d)},
cuP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.m_(D.mb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cp(A.eE(new B.dIw(u,d),!1,null,y.H)),$async$Qs)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.m_(D.Oa)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cp(A.eE(new B.dIx(u,d),!1,null,y.H)),$async$Qs)
case 8:x=1
break
case 7:x=u.bTl(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cp(A.eE(new B.dIy(u,d),!1,null,y.H)),$async$Qs)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qs,w)},
bTl(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cr7,C.a.aY(x,w+1).toLowerCase())},
acJ(d){return this.c6j(d)},
c6j(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.m_(D.mb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cp(A.eE(new B.dI3(u,d),!1,null,y.H)),$async$acJ)
case 5:x=1
break
case 4:u.m(new B.dI4(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acJ,w)},
PR(d){return this.cmJ(d)},
cmJ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oF(t,s.c,s.f),$async$PR)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rT(new B.dIp(u,d),"Preparing QR\u2026"),$async$PR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PR,w)},
afo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dIq(),A.U(t).k("J<1,n>")).fH(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.A(new A.a4(t,new B.dIr(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PR(r),$async$afo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afo,w)},
afh(d){return this.cmh(d)},
cmh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_c(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,null,new B.dIj(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$afh)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qs(d)
break
case"qr":u.PR(A.a([d],y.r))
break
case"send_my_code":u.c6U(A.a([d],y.r))
break
case"save":u.aeD(d)
break
case"delete":u.Hw(d)
break}case 1:return A.h(v,w)}})
return A.i($async$afh,w)},
VA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$VA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dHP(),A.U(t).k("J<1,n>")).fH(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.A(new A.a4(t,new B.dHQ(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oF(t,s.c,s.f),$async$VA)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rT(new B.dHR(u,r),"Preparing file\u2026"),$async$VA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$VA,w)},
adQ(d){return this.cdx(d)},
cdx(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h6D(d,!1),$async$adQ)
case 3:s=f
r=s==null
q=B.a50(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adQ,w)},
acP(){var x=0,w=A.j(y.H),v=this,u
var $async$acP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fqS(u,v.a.c),$async$acP)
case 2:return A.h(null,w)}})
return A.i($async$acP,w)},
bwD(){B.h5V(!1,new B.dHL(this,null))
return},
HK(d,e){return this.c6V(d,e)},
aWF(d){return this.HK(null,d)},
c6U(d){return this.HK(d,null)},
c6V(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a4<1>")
k=A.A(new A.a4(p,new B.dI6(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wt.c2().akD(!0,C.WX,!1),$async$HK)
case 10:r=g
if(r==null||J.cj(r.a)){x=1
break}x=11
return A.b(s.rT(new B.dI7(l,s,r),"Preparing\u2026"),$async$HK)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a6(j)
$.al.$1("[doc share send my code pick] "+A.t(q))
s.hM("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hM("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bzE(p,l,e,s.a.c),$async$HK)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HK,w)},
H2(d){return this.bSr(d)},
bSr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$H2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hkN(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aWF(t),$async$H2)
case 8:x=6
break
case 7:u.hM("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ae("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hM("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rT(new B.dI0(u,d),"Receiving video\u2026"),$async$H2)
case 11:x=1
break
case 10:x=12
return A.b(u.rT(new B.dI1(u,d),"Receiving\u2026"),$async$H2)
case 12:case 1:return A.h(v,w)}})
return A.i($async$H2,w)},
D2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$D2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BR()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adQ(t),$async$D2)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.H2(s),$async$D2)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cp(A.eE(new B.dIb(u),!1,null,y.N)),$async$D2)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rS(),$async$D2)
case 10:x=1
break
case 9:x=11
return A.b(u.H2(C.a.i(r)),$async$D2)
case 11:case 1:return A.h(v,w)}})
return A.i($async$D2,w)},
aeD(d){return this.ciu(d)},
ciu(d){var x=0,w=A.j(y.H),v=this
var $async$aeD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rT(new B.dIa(v,d),"Saving\u2026"),$async$aeD)
case 2:return A.h(null,w)}})
return A.i($async$aeD,w)},
Hw(d){return this.bEQ(d)},
bEQ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kQ(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hw)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c3u(t),$async$Hw)
case 6:case 5:s=d.a
x=7
return A.b(B.Dp(u.a.c,s),$async$Hw)
case 7:u.r.W(0,s)
x=8
return A.b(u.rS(),$async$Hw)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hw,w)},
afu(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_c(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,null,new B.dIv(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$afu)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acP()
break
case"import":u.a9j()
break}case 1:return A.h(v,w)}})
return A.i($async$afu,w)},
c_q(d){var x=d.c
if(C.a.a_(x,"video/")||d.m_(D.mb))return C.pp
if(C.a.a_(x,"image/")||d.m_(D.Oa))return C.tb
if(C.a.t(x,"pdf"))return E.LP
return D.agX},
B(d){var x,w,v=this,u=null,t=B.a_c(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.Fa,u,u,u,new B.dIG(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bzo,u,u,u,v.e?u:v.gc6C(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcjT()
n.push(A.aF(u,u,u,u,A.W(v.r.a===x?D.btP:E.ahl,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.YH,u,u,u,v.e?u:v.gc_r(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nB,u,u,u,v.e?u:v.gaXK(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bB3,u,u,u,v.e?u:new B.dIH(v),u,u,u,u,"More options",u))
q=A.ey(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lo(new B.dII(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aC.j(A.M(d).ax.a===C.H?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m5(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.aww(C.j8,s,!0,t,w?u:v.gcmK(),u),1)
x.push(new A.C(D.bif,A.mF(new B.dIJ(),A.B(A.a([s,C.aw,A.D(new B.aww(C.uJ,"Export",!1,t,w?u:v.gbIf(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.ip,u,new A.bl(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.ba6(t,v.e?u:v.gaXK(),u)
else s=A.jW(!0,u,u,new B.dIK(v,t),s,u,D.bi7,u,u,!1,!1)
x.push(A.D(s,1))
return A.ca(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aww.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aC,t,t,0,C.c,t,C.us,t,new A.b6(s,C.Z),t,t,t)
return A.dq(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.db(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.us,t,new A.b6(s,C.Z),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.eu(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eR,t,t,t),u.r,v)}}
B.ba6.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.mF(new B.cXJ(),new A.C(E.W9,A.v(A.a([A.mF(new B.cXK(),A.p(x,A.W(C.x3,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a5(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ep,C.iq,x,new A.bl(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dq(C.nB,D.f8K,this.d,A.bk(C.aC,x,x,x,C.c,x,C.W4,x,new A.b6(A.m(16),C.Z),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.cp,C.zM,x,new A.bl(0,1,w),s),x,x,x)}}
B.aa4.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.m_(D.mb))p=D.cWS
else{p=C.a.a_(p,"image/")||i.m_(D.Oa)
n=y.O
p=p?A.a([C.cY,C.aC],n):A.a([C.aK.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a5(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamD()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.m_(D.mb))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.D(A.v(A.a([q,C.av,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.W(C.fE,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c9))
if(!(!o||i.m_(D.mb)))l.push(A.fAI(C.aC,!1,j,j,j,!1,j,j,new B.cY5(k),j,j,new A.b6(A.m(5),C.Z),j,j,!1,u))
x=A.W(C.ny,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c9))
return A.mF(new B.cY6(),new A.C(C.e3,A.aD(!1,C.a1,!0,j,A.aJ(!1,r,!0,new A.C(C.VB,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b6(v,new A.ay(t,s,C.r,-1)),j,j,C.ac),j),C.cp,h,new A.cx("docshare_row_"+i.a,y.aw),new A.bl(0,1,y.X),y.i)}}
B.Xe.prototype={
S(){return new B.awB()},
gd6(){return this.c}}
B.awB.prototype={
Z(){this.a0()
this.wQ()},
q(){B.hl1(this.e)
this.a2()},
wQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qU(o.c,o.d),$async$wQ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gai(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hl4(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hl3(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.cY2(s))
x=1
break}s.m(new B.cY3(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a6(l)
if(s.c==null){x=1
break}s.m(new B.cY4(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wQ,w)},
a_G(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qU(t.c,t.d),$async$a_G)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(D.exo)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.afo(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_G)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_G,w)},
bSk(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kb(u,C.A,v,new B.cY0(w,t),C.fM,C.ds,!0,v,v,v,v)
else if(t!=null&&!C.aG.gai(t))x=A.fG(t,C.A,v,new B.cY1(w),C.fM,C.ds,!0,v,!1,v,v)
else return C.bF
return A.tU(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_c(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.AK,u,u,u,v.gb0s(),u,u,u,u,"Share / save",u))
r=A.ey(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.CV
else{q=v.r
if(q!=null)t=new A.C(C.ev,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ev,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.AK,D.eTW,v.gb0s(),A.bk(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bSk()}return A.ca(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.Xb.prototype={
S(){return new B.awy(A.aga(),C.bw,C.bw)},
gd6(){return this.c}}
B.awy.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fp(w,A.a2(w).k("fp<1>")).hY(new B.cXG(v))
x.gcId().hY(new B.cXH(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fp(x,A.a2(x).k("fp<1>"))}if(x==null)x=C.aWZ
x.hY(new B.cXI(v))
v.wQ()},
wQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qU(p.c,p.d),$async$wQ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cXz(s))
x=1
break}x=8
return A.b(s.d.B3(0,new A.a1j(r,s.a.d.c)),$async$wQ)
case 8:if(s.c==null){x=1
break}s.m(new B.cXA(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a6(n)
if(s.c==null){x=1
break}s.m(new B.cXB(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wQ,w)},
XA(){var x=0,w=A.j(y.H),v=this,u
var $async$XA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$XA)
case 5:x=3
break
case 4:x=6
return A.b(u.i0(0),$async$XA)
case 6:case 3:return A.h(null,w)}})
return A.i($async$XA,w)},
aP0(d){var x=d.a
return C.a.aU(C.o.u(C.o.al(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.al(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_c(d),m=C.o.al(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.ey(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.CV
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.buN,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.Mg,C.n),o,88,o,o,o,o,o,88)
t=A.lR(C.aC,o,o,m,0,new B.cXC(p),C.o.D(C.o.al(p.w.a,1000),0,m))
x=A.d(p.aP0(p.w)+" / "+p.aP0(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aC,o,o,o,o,D.etU,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.xd:C.iP,o,o,o,o,o)
x=A.v(A.a([u,C.ki,t,x,C.d5,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc_u(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.ca(v,w,A.au(new A.C(C.rZ,x,o),o,o,o),o,!1,!1,o,o)}}
B.O0.prototype={
S(){return new B.awE()},
gd6(){return this.c}}
B.awE.prototype={
Z(){this.a0()
this.NQ()},
NQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fCT(o.c,o.d,new B.cYj(s)),$async$NQ)
case 7:r=e
if(r==null||r.length===0){s.m(new B.cYk(s))
x=1
break}s.e=r
q=O.hHv(r)
if(q==null){s.m(new B.cYl(s))
x=1
break}s.d=q
q.aK(0,s.gaWt())
x=8
return A.b(q.hX(0).cK(0,C.qo),$async$NQ)
case 8:if(s.c==null){x=1
break}s.m(new B.cYm(s))
x=9
return A.b(q.p8(0),$async$NQ)
case 9:q.rt(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
if(s.c==null){x=1
break}s.m(new B.cYn(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NQ,w)},
c4W(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.cYo(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BN(0,x.gaWt())
w=x.d
if(w!=null)w.q()
B.hR7(x.e)
x.a2()},
abm(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWJ(u.c,u.d),$async$abm)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$abm,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_c(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.ey(A.a([A.aF(t,t,t,t,C.om,t,t,t,u.gc_o(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i9(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.CV
else{q=u.r
if(q!=null)s=new A.C(C.ev,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afF(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fC(x,new A.am(C.A,t,C.a9,C.q,A.a([new A.ze(s,t),A.aG(t,A.C7(A.p(t,A.W(q?H.xd:C.iP,C.c,t,t,t,48),C.f,t,t,new A.o(C.aU,t,t,v,t,t,C.n),t,t,t,t,C.c4,t,t,t),C.b9,C.a1,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cYq(u),t,t,t,t,t,t,!1,C.ad)],o),t),t)}else s=C.bF}}return A.ca(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.Xg.prototype={
S(){return new B.awC(new A.cp(null,y.A))}}
B.awC.prototype={
gcv5(){var x,w,v=this.a
if(v.e!==D.Pr)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcuN(){var x,w,v=this.a
if(v.e!==D.y6)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcv5()
if(x!=null){v.OS(x)
v.e=A.dD(R.DV,new B.cYf(v,x))}w=v.gcuN()
if(w!=null){v.OR(w)
v.f=A.dD(C.h9,new B.cYg(v,w))}},
q(){var x=this.e
if(x!=null)x.aa(0)
x=this.f
if(x!=null)x.aa(0)
this.a2()},
OR(d){return this.cbN(d)},
cbN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amQ(d),$async$OR)
case 3:t=f
x=4
return A.b(B.c3N(d),$async$OR)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.cY7(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OR,w)},
OS(d){return this.cbO(d)},
cbO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.frc(d),$async$OS)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bxA(t),$async$OS)
case 4:if(u.c==null){x=1
break}u.m(new B.cY8(u))
u.c.I(y.q).f.P(D.aJi)
case 1:return A.h(v,w)}})
return A.i($async$OS,w)},
gbXb(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc_p(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BR()){t=u.c
if(t!=null)t.I(y.q).f.P(D.eAs)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cp(A.eE(new B.cY9(),!1,null,y.N)),$async$a_s)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bxA(s),$async$a_s)
case 4:t=u.c
if(t!=null)t.I(y.q).f.P(D.aJi)
case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a7i(d){return this.bCz(d)},
bCz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fE(new A.fx(C.d.aH(t,", "))),$async$a7i)
case 3:if(d.e!=null){t=d.I(y.q).f
t.P(A.b1(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7i,w)},
abk(d){return this.bCj(d)},
bCj(d){var x=0,w=A.j(y.H),v=this
var $async$abk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fE(new A.fx(v.a.c)),$async$abk)
case 2:if(d.e!=null)d.I(y.q).f.P(D.exR)
return A.h(null,w)}})
return A.i($async$abk,w)},
a_n(d){return this.ciw(d)},
ciw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alU(s.d,4),$async$a_n)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rn(r,"ngmy_doc_share_qr.png"),$async$a_n)
case 8:q=f
if(d.e!=null)d.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a6(n)
if(d.e!=null)d.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_n,w)},
gaS7(){var x,w=this.a
if(w.e!==D.Gi)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
a7f(d){return this.bCs(d)},
bCs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaS7()
if(t==null){x=1
break}x=3
return A.b(A.fE(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$a7f)
case 3:if(d.e!=null)d.I(y.q).f.P(D.ezs)
case 1:return A.h(v,w)}})
return A.i($async$a7f,w)},
abl(){var x=0,w=A.j(y.H),v=this,u
var $async$abl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Tc(),$async$abl)
case 2:u=v.c
if(u!=null)A.a8(u,!1).M(null)
return A.h(null,w)}})
return A.i($async$abl,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_c(d),i=m.a,h=i.c
if(h.length>48)h=C.a.an(h,0,44)+"\u2026"
i=i.e
i=i!==D.Gi&&i!==D.Pr&&i!==D.y6
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.ey(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Gi||t===D.Pr||t===D.y6?l:A.aF(l,l,l,l,C.kI,l,l,l,m.gaUI(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pn(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbXb(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Gi){t=C.aC.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m_,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc_p(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.h8(D.bEI,D.f1u,new B.cYa(m,d),l)],p))}if(m.a.e===D.Gi&&m.gaS7()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.h8(D.bBo,D.eZt,new B.cYb(m,d),l)],p))
if(m.a.e===D.y6){x=(m.w?C.du:C.aC).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.a9(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.CY:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m_,l,l,l)],p))}if(m.a.e===D.Pr){x=(m.r?C.du:C.aC).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.CY:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m_,l,l,l),C.aa,A.dq(D.bxe,D.f4o,m.gciU(),A.bk(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nZ(i,A.ca(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.B(A.a([A.D(A.eu(M.AJ,C.RH,new B.cYc(m,d),l),1),C.aw,A.D(A.dq(C.xy,C.a54,new B.cYd(m,d),A.bk(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bL(C.yD,m.gaUI(),A.bk(C.aK,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cYe(),y.C)}}
B.aa2.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ch(A.v(A.a([w,C.aO,A.p(x,A.pn(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ak)
return A.en(A.a([A.bL(C.yE,new B.cXy(d),x)],u),x,x,C.mt,v,x,x,x,x,D.eSZ,x)}}
B.Xa.prototype={
S(){return new B.awx(A.yn(C.wq,C.nb,C.tl))}}
B.awx.prototype={
q(){this.d.q()
this.a2()},
atO(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a8(x,!1).M(t)
return}}},
B(d){var x=null
return A.ca(A.ey(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eZV,x,x,x,1,x,!0),C.w,A.ym(this.d,C.bQ,this.gatN()),x,!1,!1,x,x)}}
B.Xh.prototype={
S(){return new B.awD(A.yn(C.wq,C.nb,C.tl))},
gd6(){return this.c}}
B.awD.prototype={
bTn(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
adb(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$adb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qs("text/plain"),$async$adb)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.P(D.eAm)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).M(t)
case 1:return A.h(v,w)}})
return A.i($async$adb,w)},
a83(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a83=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h6D(p,!0),$async$a83)
case 3:t=e
p=t==null
s=B.a50(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.P(D.ewZ)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).M(s)
case 1:return A.h(v,w)}})
return A.i($async$a83,w)},
q(){this.d.q()
this.a2()},
atO(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bTn(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).M(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.aid,v,v,v,w.gbHO(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.YO,v,v,v,w.gc9d(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.ey(A.a([u,t,A.aF(v,v,v,v,A.W(w.f?C.t9:P.LA,v,v,v,v,v),v,v,v,new B.cYi(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.f5a,v,v,v,1,v,!0)
u=A.ym(w.d,C.bQ,w.gatN())
x=A.m(20)
return A.ca(t,C.w,new A.am(C.W,v,C.a9,C.q,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dWq],s),v),v,!1,!1,v,v)}}
B.ba7.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.o7
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.o7:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.a1,!0,r,A.aJ(!1,w,!0,new A.C(C.Wf,A.B(A.a([u,C.be,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.es,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ac)}}
B.a7l.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.MT.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.Vk.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.MS.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DS.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cex.prototype={}
B.DR.prototype={}
B.a7k.prototype={}
B.ar4.prototype={}
B.Vl.prototype={}
var z=a.updateTypes(["aw<~>()","S(ja)","n(ja)","T3(Y)","~()","Xd(Y)","I(I,ja)","O0(Y)","~(lI)","cl(DR)","aw<ja?>(@)","T1(Y)","T5(Y)","C(ja)","ja(@)","a1<n,@>(ja)","Xc(Y)","T2(Y)","Xe(Y)","Xb(Y)","Xg(Y)","aa2(Y)","ak<ja>()","Xh(Y)","aa4(Y,I)","Xa(Y)","a1<n,aB>(ja)","cl(Vk)","cl(a7k)","aw<cl>(DR)"])
B.cet.prototype={
$1(d){var x=this.a
x.x=D.aGE
x.y.K(0,D.aGE)},
$S:68}
B.ceu.prototype={
$1(d){var x=this.a
x.x=D.aGD
x.y.K(0,D.aGD)},
$S:68}
B.cev.prototype={
$1(d){var x=this.a
x.aew(A.aLZ(d.data)).bw(new B.ces(x),y.b)},
$S:68}
B.ces.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cew.prototype={
$1(d){},
$S:68}
B.cez.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hpM(d.channel))},
$S:15}
B.ceA.prototype={
$1(d){},
$S:15}
B.ceB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hIu(w.iceConnectionState)
x.cx=w
if($.fLp())switch(w.a){case 0:x.cy=D.aGJ
break
case 1:x.cy=D.aGK
break
case 3:x.cy=D.aGL
break
case 5:x.cy=D.aGH
break
case 6:x.cy=D.aGI
break
case 7:x.cy=D.a2N
break
default:break}},
$S:142}
B.ceC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hIv(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.ceD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hSB(w.signalingState)},
$S:142}
B.ceE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hQT(w.connectionState)},
$S:142}
B.ceF.prototype={
$1(d){},
$S:142}
B.ceG.prototype={
$1(d){},
$S:15}
B.f5Q.prototype={
$1(d){var x=y.F.a(new A.re([],[]).oT(d.target.result,!1)),w=C.wr.t(x.objectStoreNames,"blobs")
if(!w)C.wn.Ji(x,"blobs")},
$S:197}
B.fqG.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uY.f1(this.b)
$.eK.lV()
this.c.$1(d)},
$S:454}
B.fqI.prototype={
$1(d){return this.a.$1(B.hyw(this.b,this.c))},
$S:32}
B.fqH.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fqF.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fqV.prototype={
$1(d){var x=this
return B.fXo(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fqW.prototype={
$1(d){var x=this
return B.fXo(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f78.prototype={
$1(d){var x=this
return B.c3o(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cXR.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cXO.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3o(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cXQ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3o(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cXP.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3o(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cXT.prototype={
$4(d,e,f,g){var x=null
return A.ju(A.B(A.a([A.aF(x,x,x,x,D.bvS,x,x,x,new B.cXS(d),x,x,x,x,x,x),A.D(A.DE(D.NW,!0,x,C.XU,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.NW,x,g,C.aeg,0,e,f)},
$C:"$4",
$R:4,
$S:435}
B.cXS.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.f97.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.ez,y.o).w,t=this.a,s=t?C.hy:C.c,r=A.m(28),q=A.p(v,D.bcr,C.f,v,v,D.aSJ,v,v,v,v,D.ae7,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bzX,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.A1,A.v(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ais,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.B(A.a([A.D(A.dV(C.dd,new B.f95(d),v),1),C.aw,A.D(A.bL(D.eYx,new B.f96(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Ki,v,v,v,v),v)},
$S:57}
B.f95.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.f96.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.P(D.ey5)
return}x=w.b.a.a
A.a8(w.c,!1).M(new B.az4(v,x))},
$S:0}
B.f9B.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.ez,y.o).w,u=x.a,t=u?C.hy:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bcg,C.f,w,w,D.aU6,w,w,w,w,D.ae7,w,w,1/0),new A.C(C.A1,A.v(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fHJ(u,"Organization name",C.Ey,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fHJ(u,"Access code",C.mM,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fHJ(u,"Member password",N.F5,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bL(D.f5e,new B.f9A(r,q,p,d),A.bk(C.aC,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Ki,w,w,w,w),w)},
$S:57}
B.f9A.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.P(D.eya)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).M(new B.aCc(u,x,w))},
$S:0}
B.c3f.prototype={
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
p=C.a.a_(j,"http")?A.cs(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.uI(p,null).cK(0,C.Vf),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cn(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.AC(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a6(h)
$.al.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c3l.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c3m.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c3n.prototype={
$1(d){return d.b},
$S:z+2}
B.c3h.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c3i.prototype={
$1(d){return d.b},
$S:z+2}
B.c3g.prototype={
$1(d){return A.a_(y.f.a(d),y.N,y.z)},
$S:12}
B.c3j.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c3k.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fqT.prototype={
$1(d){return new B.T1(this.a,null)},
$S:z+11}
B.fqU.prototype={
$1(d){return new B.T5(this.a,this.b,this.c,null)},
$S:z+12}
B.dHE.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dIN.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dIO.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dIP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dIM(x,d))},
$S:2}
B.dIM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dIQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dIR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dIS.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dIT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dIU.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dIV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dIY.prototype={
$3(d,e,f){return A.d9(A.dQ(f,new A.u(0,(1-e)*14)),e)},
$S:104}
B.dIW.prototype={
$1(d){var x=this.a
return x.f?null:x.Xz()},
$S:2}
B.dIX.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.m_(D.Oa))s=C.tb
else s=C.a.a_(s,"video/")||d.m_(D.mb)?C.pp:D.agX
x=this.b.a
w=y.p
return new A.C(C.l0,A.B(A.a([A.p(v,A.W(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamD(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dHF.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dHG.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c3p.prototype={
$2(d,e){return new A.bs(J.k(d),J.k(e),y.M)},
$S:88}
B.c3q.prototype={
$2(d,e){return new A.bs(J.k(d),J.k(e),y.M)},
$S:88}
B.frt.prototype={
$2(d,e){return e===this.a},
$S:285}
B.f32.prototype={
$1(d){return J.k(d)},
$S:17}
B.f7k.prototype={
$1(d){var x=this.b
B.hwB(C.El.ga3R(this.a)).bw(x.gcy_(x),y.H)},
$S:120}
B.f7l.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f7m.prototype={
$0(){return null},
$S:11}
B.c3E.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f7n.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a_(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aM(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.Q(Date.now(),0,!1).a4().ab():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.ja(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fbi.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f61.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f62.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c3J.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.mb)},
$S:z+1}
B.fvq.prototype={
$1(d){return new B.Xc(this.a,null)},
$S:z+16}
B.cXN.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fw()},
$S:9}
B.cXL.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).M(x)
return null},
$S:2}
B.cXM.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.dIL.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zz()},
$S:14}
B.dI8.prototype={
$0(){var x=J.bAH(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dI9.prototype={
$0(){var x=J.bAH(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHI.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dHH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAm(this.c)}},
$S:0}
B.dHH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHJ.prototype={
$0(){var x=J.bAH(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHO.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dHN(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAm(this.c)}},
$S:0}
B.dHN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dIz.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dIA.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dI5.prototype={
$1(d){return new B.T2(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dI2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GO(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.T6(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rS(),$async$$0)
case 5:s=J.a7(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.ZK(s.gJ(t)),$async$$0)
case 8:case 7:r.hM(s.gai(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHM.prototype={
$1(d){this.a.a9n(d,"No files selected.","Added")},
$S:454}
B.dId.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.J(x,new B.dIc(),A.U(x).k("J<1,n>")))},
$S:0}
B.dIc.prototype={
$1(d){return d.a},
$S:z+2}
B.dHS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wt.c2().cK8(C.WX,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fk(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gai(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jf(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a6(j)
$.al.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hM("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hM("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amP(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cj(l)){o.hM("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rS(),$async$$0)
case 9:o.hM("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dIw.prototype={
$1(d){return new B.O0(this.a.a.c,this.b,null)},
$S:z+7}
B.dIx.prototype={
$1(d){return new B.Xe(this.a.a.c,this.b,null)},
$S:z+18}
B.dIy.prototype={
$1(d){return new B.Xb(this.a.a.c,this.b,null)},
$S:z+19}
B.dI3.prototype={
$1(d){return new B.O0(this.a.a.c,this.b,null)},
$S:z+7}
B.dI4.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dIp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GO(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a52(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cf0(),$async$$0)
case 5:x=6
return A.b(p.rS(),$async$$0)
case 6:r=A.U(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dIl(p),r),new B.dIm(),r.k("J<ai.E,n>")).bX(0,new B.dIn())
q=A.A(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cp(A.eE(new B.dIo(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oE(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Tc(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dIl.prototype={
$1(d){var x=this.a,w=C.d.bi(x.d,new B.dIk(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dIk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dIm.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dIn.prototype={
$1(d){return d.length!==0},
$S:3}
B.dIo.prototype={
$1(d){var x=this.a
return new B.Xg(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dIq.prototype={
$1(d){return d.a},
$S:z+2}
B.dIr.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dIj.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kx,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamD(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.m_(D.mb)?C.td:C.ok
p=!x||p.m_(D.mb)?"Play video":"View"
return A.bV(A.bp(!0,new A.C(C.zY,A.v(A.a([q,o,t,C.ay,B.Xf(!1,u,!1,w,p,new B.dIe(d),v),B.Xf(!1,u,!1,C.j8,"Share via QR",new B.dIf(d),"Letters/numbers QR code"),B.Xf(!1,u,!1,D.XZ,"Send to their Code",new B.dIg(d),"Enter someone else's personal code"),B.Xf(!1,u,!1,C.hs,"Download / save",new B.dIh(d),v),C.ar,B.Xf(!1,u,!0,C.e8,"Delete",new B.dIi(d),v)],y.p),C.ai,v,C.e,C.R,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.c3(new A.ay(r,1,C.r,-1),C.Z,C.Z,C.Z),C.ko,v,v,C.n),C.bb)},
$S:686}
B.dIe.prototype={
$0(){A.a8(this.a,!1).M("view")
return null},
$S:0}
B.dIf.prototype={
$0(){A.a8(this.a,!1).M("qr")
return null},
$S:0}
B.dIg.prototype={
$0(){A.a8(this.a,!1).M("send_my_code")
return null},
$S:0}
B.dIh.prototype={
$0(){A.a8(this.a,!1).M("save")
return null},
$S:0}
B.dIi.prototype={
$0(){A.a8(this.a,!1).M("delete")
return null},
$S:0}
B.dHP.prototype={
$1(d){return d.a},
$S:z+2}
B.dHQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dHR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a54(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Fe(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oE(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHL.prototype={
$1(d){var x=this.a
x.rT(new B.dHK(x,d,this.b),"Preparing\u2026")},
$S:454}
B.dHK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.T6(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cj(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bzE(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dI6.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dI7.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fCW(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dI0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Fb(new B.dHX(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dHY(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dHZ(s))
case 5:x=8
return A.b(r.b.i1(0,C.DR,new B.dI_()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gai(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rS(),$async$$0)
case 9:s.hM("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHX.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dHU(x,d,e))},
$S:139}
B.dHU.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHY.prototype={
$1(d){return new B.aa2(this.a.a,null)},
$S:z+21}
B.dHZ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dI_.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dI1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.H2(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4T(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aWF(B.H2(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amP(new B.dHV(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cj(r)){if(B.fCV(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rS(),$async$$0)
case 10:o=J.cB(r)
p=o.eE(r,new B.dHW()).gJ(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHV.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dHT(x,d,e))},
$S:139}
B.dHT.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHW.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.mb)},
$S:z+1}
B.dIb.prototype={
$1(d){return new B.Xh(this.a.a.c,null)},
$S:z+23}
B.dIa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWJ(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dIv.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aC.j(0.35)
return A.bV(A.bp(!0,new A.C(C.zY,A.v(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kx,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.Xf(!0,w,!1,C.mM,"My Code",new B.dIs(d),"Your personal code & QR \u2014 others send docs to you"),B.Xf(!1,w,!1,D.XZ,"Send to their Code",new B.dIt(this.a,d),"Enter someone else's 5-digit code + letter"),B.Xf(!1,w,!1,S.xn,"Import backup",new B.dIu(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.R,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.c3(new A.ay(t,1,C.r,-1),C.Z,C.Z,C.Z),C.ko,x,x,C.n),C.bb)},
$S:686}
B.dIs.prototype={
$0(){A.a8(this.a,!1).M("my_code")
return null},
$S:0}
B.dIt.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.bwD()},
$S:0}
B.dIu.prototype={
$0(){A.a8(this.a,!1).M("import")
return null},
$S:0}
B.dII.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Hb(D.NW,x,C.XU,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cL(C.d.gL(D.NW).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dIG.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.dIH.prototype={
$0(){this.a.afu()
return null},
$S:0}
B.dIJ.prototype={
$3(d,e,f){return A.d9(A.dQ(f,new A.u(0,(1-e)*10)),e)},
$S:104}
B.dIK.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aa4(e,w,v,this.b,x.e,x.c_q(w),new B.dIC(x,w),new B.dID(x,v,w),new B.dIE(x,w),new B.dIF(x,w),null)},
$S:z+24}
B.dIC.prototype={
$0(){this.a.acJ(this.b)
return null},
$S:0}
B.dID.prototype={
$0(){var x=this.a
return x.m(new B.dIB(x,this.b,this.c))},
$S:0}
B.dIB.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dIE.prototype={
$0(){this.a.Ml(this.b)
return null},
$S:0}
B.dIF.prototype={
$0(){this.a.afh(this.b)
return null},
$S:0}
B.cXJ.prototype={
$3(d,e,f){return A.d9(A.dQ(f,new A.u(0,(1-e)*18)),e)},
$S:104}
B.cXK.prototype={
$3(d,e,f){return A.e7(C.A,f,e,null,null)},
$S:129}
B.cY6.prototype={
$3(d,e,f){return A.d9(A.dQ(f,new A.u(0,(1-e)*14)),e)},
$S:104}
B.cY5.prototype={
$1(d){return this.a.y.$0()},
$S:78}
B.cY2.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cY3.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cY4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cY0.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gai(w))return A.fG(w,C.A,x,new B.cXZ(this.a),C.fM,C.ds,!0,x,!1,x,x)
$.aT.x1$.push(new B.cY_(this.a))
return C.bF},
$S:135}
B.cXZ.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXX(this.a))
return C.bF},
$S:182}
B.cXX.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cXU(x))},
$S:9}
B.cXU.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cY_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cXW(x))},
$S:9}
B.cXW.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cY1.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXY(this.a))
return C.bF},
$S:182}
B.cXY.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cXV(x))},
$S:9}
B.cXV.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXG.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cXF(x,d))},
$S:1739}
B.cXF.prototype={
$0(){return this.a.f=this.b===C.tH},
$S:0}
B.cXH.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cXE(x,d))},
$S:9}
B.cXE.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cXI.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cXD(x,d))},
$S:9}
B.cXD.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cXz.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cXA.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cXB.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cXC.prototype={
$1(d){return this.a.d.Ln(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cYj.prototype={
$0(){var x=this.a.a
return B.qU(x.c,x.d)},
$S:1740}
B.cYk.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cYl.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cYm.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cYn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cYo.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cYq.prototype={
$0(){var x=this.a
x.m(new B.cYp(x))},
$S:0}
B.cYp.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.p8(0)},
$S:0}
B.cYf.prototype={
$1(d){return this.a.OS(this.b)},
$S:14}
B.cYg.prototype={
$1(d){return this.a.OR(this.b)},
$S:14}
B.cY7.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cY8.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cY9.prototype={
$1(d){return D.fiB},
$S:z+25}
B.cYe.prototype={
$2(d,e){if(d)B.Tc()},
$S:123}
B.cYa.prototype={
$0(){return this.a.a7i(this.b)},
$S:0}
B.cYb.prototype={
$0(){return this.a.a7f(this.b)},
$S:0}
B.cYc.prototype={
$0(){return this.a.abk(this.b)},
$S:0}
B.cYd.prototype={
$0(){return this.a.a_n(this.b)},
$S:0}
B.cXy.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.cYi.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pc(),$async$$0)
case 2:u.m(new B.cYh(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cYh.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c3L.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.mb)},
$S:z+1}
B.c3M.prototype={
$1(d){var x=d.b,w=A.ae("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c3K.prototype={
$2(d,e){return this.beg(d,e)},
beg(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Td(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1741}
B.faW.prototype={
$1(d){if(d===D.a2M&&(this.a.a.a&30)===0)this.a.fD(0)},
$S:z+27}
B.faX.prototype={
$0(){},
$S:11}
B.fbq.prototype={
bfP(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f0b(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fSB(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfP(d,e)},
$S:503}
B.fbp.prototype={
$1(d){var x=this
d.b=new B.fbo(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fbo.prototype={
$1(d){return this.bfO(d)},
bfO(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWK(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aF(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.y(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.y(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.f0b(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a6(j)
$.al.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a51(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.awA.prototype,"gc6f","Ot",0)
x(v,"gc74","HL",0)
x(v,"gc6B","wZ",0)
x(v=B.aAr.prototype,"gc_k","abi",0)
x(v,"gc_l","Xy",0)
x(v,"gclg","aeZ",0)
x(v=B.aAu.prototype,"gc_m","Xz",0)
x(v,"gclh","a_H",0)
x(B.aAs.prototype,"gc_n","abj",0)
x(B.awz.prototype,"gc_s","c_t",4)
x(v=B.aAt.prototype,"gc6C","YF",0)
x(v,"gcjT","cjU",4)
x(v,"gaXK","av9",0)
x(v,"gcmK","afo",0)
x(v,"gbIf","VA",0)
x(v,"gc_r","D2",0)
x(B.awB.prototype,"gb0s","a_G",0)
x(B.awy.prototype,"gc_u","XA",0)
x(v=B.awE.prototype,"gaWt","c4W",4)
x(v,"gc_o","abm",0)
x(v=B.awC.prototype,"gciU","a_s",0)
x(v,"gaUI","abl",0)
w(B.awx.prototype,"gatN","atO",8)
x(v=B.awD.prototype,"gc9d","adb",0)
x(v,"gbHO","a83",0)
w(v,"gatN","atO",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cex,B.a7k,B.ar4,B.az4,B.aCc,B.ja,B.a9L,B.brI,B.DR,B.Vl])
w(B.cey,B.cex)
w(B.b0R,B.a7k)
x(A.i4,[B.cet,B.ceu,B.cev,B.ces,B.cew,B.cez,B.ceA,B.ceB,B.ceC,B.ceD,B.ceE,B.ceF,B.ceG,B.f5Q,B.fqG,B.fqI,B.fqH,B.fqV,B.fqW,B.f78,B.cXO,B.cXQ,B.cXP,B.cXT,B.f97,B.f9B,B.c3f,B.c3m,B.c3n,B.c3i,B.c3g,B.c3j,B.c3k,B.fqT,B.fqU,B.dIP,B.dIY,B.dIW,B.dIX,B.f32,B.f7k,B.f7l,B.c3E,B.f7n,B.fbi,B.f61,B.f62,B.c3J,B.fvq,B.cXN,B.cXL,B.dIL,B.dHH,B.dHN,B.dI5,B.dHM,B.dIc,B.dIw,B.dIx,B.dIy,B.dI3,B.dIl,B.dIk,B.dIm,B.dIn,B.dIo,B.dIq,B.dIr,B.dIj,B.dHP,B.dHQ,B.dHL,B.dI6,B.dHY,B.dHW,B.dIb,B.dIv,B.dII,B.dIJ,B.cXJ,B.cXK,B.cY6,B.cY5,B.cY0,B.cXZ,B.cXX,B.cY_,B.cY1,B.cXY,B.cXG,B.cXH,B.cXI,B.cXC,B.cYf,B.cYg,B.cY9,B.c3L,B.c3M,B.faW,B.fbp,B.fbo])
w(B.b0S,B.ar4)
x(A.jl,[B.fqF,B.cXR,B.cXS,B.f95,B.f96,B.f9A,B.dHE,B.dIN,B.dIO,B.dIM,B.dIQ,B.dIR,B.dIS,B.dIT,B.dIU,B.dIV,B.dHF,B.dHG,B.f7m,B.cXM,B.dI8,B.dI9,B.dHI,B.dHJ,B.dHO,B.dIz,B.dIA,B.dI2,B.dId,B.dHS,B.dI4,B.dIp,B.dIe,B.dIf,B.dIg,B.dIh,B.dIi,B.dHR,B.dHK,B.dI7,B.dI0,B.dHU,B.dHZ,B.dI_,B.dI1,B.dHT,B.dIa,B.dIs,B.dIt,B.dIu,B.dIG,B.dIH,B.dIC,B.dID,B.dIB,B.dIE,B.dIF,B.cY2,B.cY3,B.cY4,B.cXU,B.cXW,B.cXV,B.cXF,B.cXE,B.cXD,B.cXz,B.cXA,B.cXB,B.cYj,B.cYk,B.cYl,B.cYm,B.cYn,B.cYo,B.cYq,B.cYp,B.cY7,B.cY8,B.cYa,B.cYb,B.cYc,B.cYd,B.cXy,B.cYi,B.cYh,B.faX])
x(A.mj,[B.aa3,B.LQ,B.a7l,B.MT,B.Vk,B.MS,B.DS])
x(A.af,[B.Xd,B.T1,B.T5,B.T2,B.Xc,B.T3,B.Xe,B.Xb,B.O0,B.Xg,B.Xa,B.Xh])
x(A.ag,[B.awA,B.aAr,B.aAu,B.aAs,B.awz,B.aAt,B.awB,B.awy,B.awE,B.awC,B.awx,B.awD])
x(A.at,[B.aav,B.aww,B.ba6,B.aa4,B.aa2,B.ba7])
x(A.kz,[B.c3l,B.c3h,B.c3p,B.c3q,B.frt,B.dHX,B.dHV,B.dIK,B.cYe,B.c3K,B.fbq])
x(A.iJ,[B.bfo,B.brm])})()
A.kg(b.typeUniverse,JSON.parse('{"b0R":{"a7k":[]},"b0S":{"ar4":[]},"Xd":{"af":[],"r":[]},"awA":{"ag":["Xd"]},"aav":{"at":[],"r":[]},"T1":{"af":[],"r":[]},"T5":{"af":[],"r":[]},"aAr":{"ag":["T1"]},"aAu":{"ag":["T5"]},"bfo":{"iJ":[]},"T2":{"af":[],"r":[]},"aAs":{"ag":["T2"]},"Xc":{"af":[],"r":[]},"T3":{"af":[],"r":[]},"aa4":{"at":[],"r":[]},"Xe":{"af":[],"r":[]},"Xb":{"af":[],"r":[]},"O0":{"af":[],"r":[]},"Xg":{"af":[],"r":[]},"aa2":{"at":[],"r":[]},"Xa":{"af":[],"r":[]},"Xh":{"af":[],"r":[]},"awz":{"ag":["Xc"]},"brm":{"iJ":[]},"aAt":{"ag":["T3"]},"aww":{"at":[],"r":[]},"ba6":{"at":[],"r":[]},"awB":{"ag":["Xe"]},"awy":{"ag":["Xb"]},"awE":{"ag":["O0"]},"awC":{"ag":["Xg"]},"awx":{"ag":["Xa"]},"awD":{"ag":["Xh"]},"ba7":{"at":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tD"),k:x("Km()"),m:x("br<n,n>"),F:x("qx"),g:x("aw<ja?>"),x:x("aw<~>"),V:x("O<ab>"),O:x("O<x>"),W:x("O<bf>"),Y:x("O<a1<n,S>>"),t:x("O<a1<n,@>>"),r:x("O<ja>"),w:x("O<+file,name(lj,n)>"),u:x("O<cL>"),s:x("O<n>"),E:x("O<iJ>"),a:x("O<dz>"),p:x("O<r>"),Z:x("O<I>"),G:x("bf"),A:x("cp<ag<af>>"),n:x("ak<ja>"),j:x("ak<@>"),I:x("ak<I>"),M:x("bs<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iE"),e:x("hWq"),af:x("D7"),U:x("ja"),b:x("cl"),C:x("aB"),aK:x("vs"),ab:x("DR"),br:x("ar4"),v:x("Vl"),N:x("n"),X:x("bl<P>"),Q:x("lu"),D:x("dz"),aw:x("cx<n>"),cd:x("a4<a1<n,@>>"),c7:x("r"),ch:x("bP<ak<ja>>"),aW:x("bP<dz?>"),aY:x("bP<~>"),cx:x("aa3"),b1:x("be<ak<ja>>"),cf:x("be<dz?>"),d4:x("be<~>"),c4:x("az4"),bG:x("aCc"),q:x("mH"),B:x("oV<DR>"),c6:x("oV<a7l>"),y:x("S"),i:x("P"),z:x("@"),S:x("I"),aQ:x("bf?"),_:x("ak<ja>?"),aL:x("ak<@>?"),h:x("a1<n,@>?"),l:x("ja?"),R:x("aB?"),c:x("Vl?"),d:x("+answerQr,transfer(n,aw<ak<ja>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,LQ,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9L?"),bk:x("az4?"),ag:x("aCc?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aR6=new A.ay(C.aC,2,C.r,-1)
D.bIf=new A.a5(C.a3,C.a7,C.x,C.ZS,null,null)
D.aSJ=new A.o(null,null,null,C.mq,null,D.bIf,C.n)
D.aU6=new A.o(null,null,null,C.mq,null,E.Fh,C.n)
D.a8y=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a9x=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aaf=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.abz=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eTQ=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.f65=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.HB,null,null,null,null,null,null,null,null,null)
D.cPG=x([D.eTQ,C.ar,D.f65],y.p)
D.bc8=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.cPG,null)
D.fa0=new A.w("Create your organization",null,C.hi,null,null,null,null,null,null,null,null,null)
D.eXQ=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.HB,null,null,null,null,null,null,null,null,null)
D.d2t=x([D.fa0,C.ar,D.eXQ],y.p)
D.bcg=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d2t,null)
D.f6D=new A.w("Team Member sign-in",null,C.hi,null,null,null,null,null,null,null,null,null)
D.f0l=new A.w("Enter the access code and password from your organization.",null,G.HB,null,null,null,null,null,null,null,null,null)
D.d0D=x([D.f6D,C.ar,D.f0l],y.p)
D.bcr=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d0D,null)
D.bi7=new A.N(16,10,16,28)
D.bif=new A.N(16,14,16,4)
D.bjt=new A.N(20,0,20,16)
D.bjZ=new A.N(20,8,20,16)
D.ae7=new A.N(24,22,24,20)
D.XZ=new A.a0(63394,"MaterialIcons",!1)
D.agX=new A.a0(63515,"MaterialIcons",!1)
D.btP=new A.a0(983813,"MaterialIcons",!1)
D.br5=new A.a0(62867,"MaterialIcons",!1)
D.buN=new A.ad(D.br5,44,C.c,null,null,null)
D.bvS=new A.ad(C.t5,null,C.ag,null,null,null)
D.bxe=new A.ad(C.iQ,18,null,null,null,null)
D.byT=new A.ad(D.XZ,26,C.c,null,null,null)
D.bzo=new A.ad(C.EX,null,null,null,null,null)
D.bzX=new A.ad(C.xp,null,null,null,null,null)
D.bB3=new A.ad(W.LN,null,null,null,null,null)
D.bBo=new A.ad(C.hd,16,null,null,null,null)
D.bEI=new A.ad(C.qy,16,null,null,null,null)
D.bv4=new A.ad(C.mM,null,null,null,null,null)
D.bFz=new A.dY(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bv4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bAu=new A.ad(C.Ey,null,null,null,null,null)
D.bFE=new A.dY(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bAu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bvp=new A.ad(N.F5,null,null,null,null,null)
D.bFP=new A.dY(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bvp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.crC=x([C.f5,C.aW,C.aC],y.O)
D.bK4=new A.a5(C.ax,C.aD,C.x,D.crC,null,null)
D.cr7=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.NW=x([C.f5,C.aC],y.O)
D.Oa=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mb=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cWS=x([C.oW,C.aC],y.O)
D.dLy={iceServers:0}
D.aBr={urls:0}
D.d62=new A.br(D.aBr,["stun:stun.l.google.com:19302"],y.m)
D.d61=new A.br(D.aBr,["stun:stun1.l.google.com:19302"],y.m)
D.cGM=x([D.d62,D.d61],A.az("O<a1<n,n>>"))
D.d5n=new A.br(D.dLy,[D.cGM],A.az("br<n,@>"))
D.Gi=new B.LQ(0,"lanDirect")
D.Pq=new B.LQ(1,"cloudStash")
D.dgM=new B.LQ(2,"inlineInstant")
D.Pr=new B.LQ(3,"webrtcLink")
D.y6=new B.LQ(4,"videoCloud")
D.f64=new A.w("Receive file",null,C.n2,null,null,null,null,null,null,null,null,null)
D.chl=x([E.aiB,C.ab,D.f64],y.p)
D.epZ=new A.cD(C.b_,C.b7,C.j,C.m,null,C.p,null,0,D.chl,null)
D.dR_=new A.C(C.cc,D.epZ,null)
D.eLf=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a_u,null,null,null)
D.eUl=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eLf,null,C.L,null,null,null,null,null,null,null)
D.dQl=new A.C(C.A4,D.eUl,null)
D.aY9=new A.cv(C.A,null,null,D.dQl,null)
D.dWq=new A.cH(0,null,0,28,null,null,D.aY9,null)
D.dWI=new B.a7l(0,"RTCDataChannelConnecting")
D.aGD=new B.a7l(1,"RTCDataChannelOpen")
D.aGE=new B.a7l(3,"RTCDataChannelClosed")
D.dWJ=new B.DS(0,"RTCIceConnectionStateNew")
D.dWK=new B.DS(1,"RTCIceConnectionStateChecking")
D.dWL=new B.DS(2,"RTCIceConnectionStateCompleted")
D.dWM=new B.DS(3,"RTCIceConnectionStateConnected")
D.dWN=new B.DS(4,"RTCIceConnectionStateCount")
D.dWO=new B.DS(5,"RTCIceConnectionStateFailed")
D.dWP=new B.DS(6,"RTCIceConnectionStateDisconnected")
D.aGF=new B.DS(7,"RTCIceConnectionStateClosed")
D.aGG=new B.Vk(0,"RTCIceGatheringStateNew")
D.dWQ=new B.Vk(1,"RTCIceGatheringStateGathering")
D.a2M=new B.Vk(2,"RTCIceGatheringStateComplete")
D.a2N=new B.MS(0,"RTCPeerConnectionStateClosed")
D.aGH=new B.MS(1,"RTCPeerConnectionStateFailed")
D.aGI=new B.MS(2,"RTCPeerConnectionStateDisconnected")
D.aGJ=new B.MS(3,"RTCPeerConnectionStateNew")
D.aGK=new B.MS(4,"RTCPeerConnectionStateConnecting")
D.aGL=new B.MS(5,"RTCPeerConnectionStateConnected")
D.dWR=new B.MT(0,"RTCSignalingStateStable")
D.dWS=new B.MT(1,"RTCSignalingStateHaveLocalOffer")
D.dWT=new B.MT(2,"RTCSignalingStateHaveRemoteOffer")
D.dWU=new B.MT(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dWV=new B.MT(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aGM=new B.MT(5,"RTCSignalingStateClosed")
D.etU=new A.as(160,48)
D.aZh=new A.fe(2,null,null,null,null,C.aC,null,null,null,null)
D.evn=new A.a3(16,16,D.aZh,null)
D.eXh=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ewP=new A.b0(D.eXh,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f39=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ewS=new A.b0(D.f39,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fb1=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ewZ=new A.b0(D.fb1,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eWV=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.exo=new A.b0(D.eWV,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f6M=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aJi=new A.b0(D.f6M,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f82=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.exR=new A.b0(D.f82,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fck=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ey5=new A.b0(D.fck,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fat=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eya=new A.b0(D.fat,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fbC=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eyW=new A.b0(D.fbC,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eVD=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ezs=new A.b0(D.eVD,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f4R=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ezN=new A.b0(D.f4R,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eZj=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eAi=new A.b0(D.eZj,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fcq=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eAm=new A.b0(D.fcq,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eVT=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eAs=new A.b0(D.eVT,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eUF=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eAH=new A.b0(D.eUF,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eRM=new A.w("NGMY DOC SHARE",null,C.aKy,null,null,null,null,null,null,null,null,null)
D.eSZ=new A.w("Show this to sender",null,C.kk,null,null,null,null,null,null,null,null,null)
D.eTW=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new A.w("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eYx=new A.w("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.eZt=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eZV=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f1u=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.f45=new A.w("Send to their Doc Share",null,C.n1,null,null,null,null,null,null,null,null,null)
D.f4o=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f4G=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.f5a=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.f5e=new A.w("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.f5B=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eR,null,null,null,null,null,null,null,null,null)
D.f8s=new A.w("Share files & videos\nwith a scan.",null,C.aKz,null,null,null,null,null,null,null,null,null)
D.f8K=new A.w("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fiB=new B.Xa(null)
D.a5I=new B.aa3(0,"docShare")
D.a5J=new B.aa3(1,"gate")
D.S9=new B.aa3(2,"gateNoIndividual")})();(function staticFields(){$.aKN=null
$.eZ1=function(){var x=y.N
return A.T(x,x)}()
$.EZ=A.T(y.N,y.D)
$.ae0=A.T(y.N,A.az("lj"))
$.Pg=A.T(y.N,y.D)
$.eZy=A.T(y.N,A.az("a9L"))
$.c3D=A.T(y.S,A.az("brI"))
$.fSA=1
$.hEm=null
$.hEl=null
$.hw2=null
$.fHV=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hWV","h8r",()=>new B.cey())
x($,"hUQ","fLp",()=>C.a.t(A.bq(A.bq(A.bq(A.Fx(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["shR8xa3y20NHkxvzkWKJt/WxlyI="]=a.current})($__dart_deferred_initializers__);