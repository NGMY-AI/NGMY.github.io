((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,P,K,Q,R,F,L,G,S,T,E,H,U,V,W,X,Y,M,N,B={cuH:function cuH(){},
i9J(d){var x=null,w=new B.b7I(d,D.eK3,new A.q4(x,x,y.c6),new A.q4(x,x,y.B))
w.bDT(d)
return w},
b7I:function b7I(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cuC:function cuC(d){this.a=d},
cuD:function cuD(d){this.a=d},
cuE:function cuE(d){this.a=d},
cuB:function cuB(d){this.a=d},
cuF:function cuF(d){this.a=d},
i9K(d,e){var x=y.N
x=new B.b7J(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDU(d,e)
return x},
b7J:function b7J(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cuI:function cuI(d){this.a=d},
cuJ:function cuJ(d){this.a=d},
cuK:function cuK(d){this.a=d},
cuL:function cuL(d){this.a=d},
cuM:function cuM(d){this.a=d},
cuN:function cuN(d){this.a=d},
cuO:function cuO(d){this.a=d},
cuP:function cuP(d){this.a=d},
hnd(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xz.He(x,"ngmy_doc_share_v1",new B.fEo(),1)},
igz(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.ez(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.vW(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cJ.aK(d)
return x}catch(w){return v}return v},
SJ(d,e){return B.iwn(d,e)},
iwn(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQU
x=7
return A.b(o==null?$.aQU=B.hnd():o,$async$SJ)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.my(s,"blobs","readwrite")
C.iS.mj(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.oM(q),$async$SJ)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SJ,w)},
SI(d){return B.iwm(d)},
iwm(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQU
x=7
return A.b(o==null?$.aQU=B.hnd():o,$async$SI)
case 7:s=f
r=J.my(s,"blobs","readonly")
x=8
return A.b(C.iS.xV(J.mx(r,"blobs"),d),$async$SI)
case 8:q=f
x=9
return A.b(J.oM(r),$async$SI)
case 9:o=B.igz(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SI,w)},
aiV(d){return B.iwl(d)},
iwl(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQU
x=7
return A.b(p==null?$.aQU=B.hnd():p,$async$aiV)
case 7:s=f
r=J.my(s,"blobs","readwrite")
C.iS.GK(J.mx(r,"blobs"),d)
x=8
return A.b(J.oM(r),$async$aiV)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aiV,w)},
fEo:function fEo(){},
ij5(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsJ(w,v))}return u},
hPf(d,e){var x,w={},v=A.aZG("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h4_(w,v,e)
C.xB.zo(v,"change",new B.h41(w,v,!1))
C.xB.zo(v,"cancel",new B.h40(w))
$.eW.mJ()
v.click()
A.bL(C.amQ,new B.h3Z(w),y.H)},
h4_:function h4_(d,e,f){this.a=d
this.b=e
this.c=f},
h41:function h41(d,e,f){this.a=d
this.b=e
this.c=f},
h40:function h40(d){this.a=d},
h3Z:function h3Z(d){this.a=d},
E0(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV5()?3:4
break
case 3:x=5
return A.b(B.hJN(e,d,s,!0,!1,f,g,h,!1,i),$async$E0)
case 5:x=1
break
case 4:x=6
return A.b(B.Sk(d,s,f,g,h,i),$async$E0)
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
return A.b(B.JA(s,d),$async$E0)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fzG(s,d),$async$E0)
case 14:x=12
return A.b(r.hJN(q,p,o,n,m,l,k,j,a1,i),$async$E0)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cc(A.eb(new B.h4e(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cc(A.eb(new B.h4f(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E0,w)},
Sk(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sk=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2q(e),$async$Sk)
case 3:u=k
x=4
return A.b(B.arH(d,e,!1),$async$Sk)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JA(e,d),$async$Sk)
case 7:if(k){v=D.aej
x=1
break}x=8
return A.b(B.WG(e),$async$Sk)
case 8:v=t?D.XR:D.aek
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2o(d,e)){v=D.aej
x=1
break}x=11
return A.b(B.WG(e),$async$Sk)
case 11:v=t?D.XR:D.aek
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hhZ(d,e)){v=D.aej
x=1
break}x=14
return A.b(B.WG(e),$async$Sk)
case 14:v=D.XR
x=1
break
case 13:v=t?D.XR:D.aek
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sk,w)},
fzG(d,e){var x=0,w=A.j(y.y),v
var $async$fzG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2o(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2q(d),$async$fzG)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzG,w)},
hJN(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cc(A.eb(new B.fH4(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hEm(d,e,f,g,h,i,j){return new B.a_Z(e,j,d,g,h,i,f,null)},
fJ0(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fJ0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fJ3(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fJ0)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJ0,w)},
fJv(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fJv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fJx(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fJv)
case 3:q=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
r.V$=u
r.W$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJv,w)},
hnq(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fWF(d,e){var x=0,w=A.j(y.H),v
var $async$fWF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WG(e),$async$fWF)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).e3()
case 1:return A.h(v,w)}})
return A.i($async$fWF,w)},
h4e:function h4e(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h4f:function h4f(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ae9:function ae9(d,e){this.a=d
this.b=e},
fH4:function fH4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_Z:function a_Z(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCa:function aCa(){this.c=this.a=this.d=null},
dfB:function dfB(d,e){this.a=d
this.b=e},
dfy:function dfy(d){this.a=d},
dfA:function dfA(d){this.a=d},
dfz:function dfz(d){this.a=d},
dfD:function dfD(){},
dfC:function dfC(d){this.a=d},
aeD:function aeD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEQ:function aEQ(d,e){this.a=d
this.b=e},
aI2:function aI2(d,e,f){this.a=d
this.b=e
this.c=f},
fJ3:function fJ3(d,e,f){this.a=d
this.b=e
this.c=f},
fJ1:function fJ1(d){this.a=d},
fJ2:function fJ2(d,e,f){this.a=d
this.b=e
this.c=f},
fJx:function fJx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJw:function fJw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg9(d,e,f,g,h){return B.i4t(d,e,f,g,h)},
i4t(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cg9=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dP(d,new B.cga(s,e,h,g,f,q),y.g),y.l),$async$cg9)
case 3:r=p.aQ(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg9,w)},
b2l(d,e,f,g,h){return B.i4u(d,e,f,g,h)},
i4u(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2l=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axf("GET",d)
o=A.heo()
if(o==null)o=new A.MZ(A.a([],y.W))
x=7
return A.b(o.fc(0,s).de(0,C.Hv),$async$b2l)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dj(),$async$b2l)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CA(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2l,w)},
b2k(d){return B.i4r(d)},
i4r(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.oQ),$async$b2k)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.mt(A.mq(p.e)).cG(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2k,w)},
cg8(d){return B.i4s(d)},
i4s(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cg8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.r4),$async$cg8)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mt(A.mq(q.e)).cG(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
$.an.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cg8,w)},
cga:function cga(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jS:function jS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jy(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i4z(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jy(C.a.aY(t,u.length))}return null},
i4A(d){var x=B.Jy(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i4v(){var x,w=$.oI(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8I(d){return B.i4w(d)},
i4w(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fa(d,null,!1,C.bN),$async$a8I)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8I,w)},
a8J(d,e){return B.i4x(d,e)},
i4x(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8J=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cX,null),$async$a8J)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8J,w)},
Cz(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cz)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jy(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8K(r),$async$Cz)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8I("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cz)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jy(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cz)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i4v()
x=14
return A.b(B.a8K(m),$async$Cz)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8J("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 15:k=f
x=16
return A.b(B.a8J("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cz)
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
return A.i($async$Cz,w)},
a8K(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jy(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8I("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8K)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8K,w)},
a8L(d,e,f,g){return B.i4B(d,e,f,g)},
i4B(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8L=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jy(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8K(r),$async$a8L)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cE(d,0,new B.cgg())>1048576||g.aR(d,new B.cgh())){v=B.FD(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a8W("myCode",d,a0),$async$a8L)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cx(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FD(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2t(u,g.gJ(d),a0),$async$a8L)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oI().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cgi(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2m(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8L)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
FD(d,e,f,g,h){return B.i4y(d,e,f,g,h)},
i4y(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FD=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$FD)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cI(a6)
k=l.cE(a6,0,new B.cgc())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oI().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cV.av(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JC(a9,q)
a0=new A.Lt(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FD)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f5().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nM(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acm(a1.a,a4,"media",a1.d,a2).xS(m,n,new A.ET(!0,q.c)),$async$FD)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FD)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTC(r),$async$FD)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cgd(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2m(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FD)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTC(r),$async$FD)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FD,w)},
b2m(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8I(t),$async$b2m)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cgb(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8J(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2m,w)},
OE(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OE=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8I("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OE)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cx(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aQ(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a0(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b2n(k,a0),$async$OE)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b2s(h),$async$OE)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WN(g,a0),$async$OE)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cge(),q),n)
d=A.B(new A.X(r,new B.cgf(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cU(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8J("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OE)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OE,w)},
b2n(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cx(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aQ(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a2(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iAv(k,j)
C.d.u(s,i)
x=5
return A.b(B.DZ(l,m,"Received via My Code",t,e,i),$async$b2n)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTC(s),$async$b2n)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2n,w)},
cgg:function cgg(){},
cgh:function cgh(){},
cgi:function cgi(){},
cgc:function cgc(){},
cgd:function cgd(){},
cgb:function cgb(){},
cge:function cge(){},
cgf:function cgf(){},
h4b(d,e){var x=0,w=A.j(y.H)
var $async$h4b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cc(A.eb(new B.h4c(e),!1,null,y.H)),$async$h4b)
case 2:return A.h(null,w)}})
return A.i($async$h4b,w)},
bI7(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bI7=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cx(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cc(A.eb(new B.h4d(g,e,f),!1,null,y.y)),$async$bI7)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI7,w)},
h4c:function h4c(d){this.a=d},
h4d:function h4d(d,e,f){this.a=d
this.b=e
this.c=f},
WD:function WD(d,e){this.c=d
this.a=e},
aGc:function aGc(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e1V:function e1V(d,e){this.a=d
this.b=e},
WH:function WH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGf:function aGf(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e33:function e33(d){this.a=d},
e34:function e34(d){this.a=d},
e35:function e35(d){this.a=d},
e32:function e32(d,e){this.a=d
this.b=e},
e36:function e36(d){this.a=d},
e37:function e37(d){this.a=d},
e38:function e38(d,e){this.a=d
this.b=e},
e39:function e39(d,e){this.a=d
this.b=e},
e3a:function e3a(d,e){this.a=d
this.b=e},
e3b:function e3b(d){this.a=d},
e3e:function e3e(){},
e3c:function e3c(d){this.a=d},
e3d:function e3d(d,e){this.a=d
this.b=e},
bmO:function bmO(){},
WE:function WE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGd:function aGd(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d){this.a=d},
hi_(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i4D(d){var x=d.l2
if(x>=0)return x
return 4.99},
i4C(d){var x=d.lK,w=y.N
w=x.iW(x,new B.cgk(),w,w)
return w},
hzi(d){var x=d.kE,w=y.N
w=x.iW(x,new B.cgl(),w,w)
return w},
b2q(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2q)
case 7:s=f
r=A.v(p)
r=A.aV(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b2q,w)},
a8N(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8N)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a8N)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8N,w)},
WG(d){var x=0,w=A.j(y.H),v,u
var $async$WG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WG)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WG,w)},
hhZ(d,e){var x,w,v
if(B.i4D(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i4C(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.ca(new A.W(Date.now(),0,!1))},
b2o(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hzi(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.ca(new A.W(Date.now(),0,!1))},
hzj(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hzi(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.ca(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.du(f,0,0,0,0,0).a).aa().ag())
d.kE=w},
arI(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$arI)
case 7:s=f
r=A.v(p)
r=A.eu(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$arI,w)},
arJ(d){var x=0,w=A.j(y.H),v,u,t
var $async$arJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arI(d),$async$arJ)
case 3:u=f
x=5
return A.b(A.aB(),$async$arJ)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$arJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arJ,w)},
arH(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hi_(d)
if(u<=0){v=!1
x=1
break}if(B.hhZ(d,e)){v=!1
x=1
break}x=3
return A.b(B.arI(e),$async$arH)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arH,w)},
b2p(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JA(e,d),$async$b2p)
case 3:if(g){v=-1
x=1
break}u=B.hi_(d)
if(u<=0){v=-1
x=1
break}if(B.hhZ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arI(e),$async$b2p)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2p,w)},
cgn(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JA(e,d),$async$cgn)
case 3:if(h){v=!1
x=1
break}v=B.arH(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgn,w)},
cgm(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgm=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgn(d,u,i.gV5()),$async$cgm)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgm,w)},
a8M(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8M=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV5()){v=!0
x=1
break}if(B.b2o(d,u)){v=!0
x=1
break}x=5
return A.b(A.lT(u,C.V9),$async$a8M)
case 5:x=k?3:4
break
case 3:B.hzj(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8M)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lt(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V9,"Doc Share for Organizations"),$async$a8M)
case 7:if(!k){v=!1
x=1
break}B.hzj(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8M)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8M,w)},
cgk:function cgk(){},
cgl:function cgl(){},
h5b(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h5b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h5b)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fvU.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fvU.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h5b,w)},
iCJ(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fvU.br($.fvU,new B.h5d(d))},
h5d:function h5d(d){this.a=d},
fxz(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fxz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.ng(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bL(C.jA,null,y.H),$async$fxz)
case 3:C.BV.fv(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxz,w)},
ahQ(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fwA.n(0,d,new B.adR(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahQ)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahQ)
case 2:return A.h(null,w)}})
return A.i($async$ahQ,w)},
ahK(d){return B.il_(d)},
il_(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fwA.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahK)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cx(s)){v=null
x=1
break}o=J.b8(s,new B.fBm(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adR(r)
$.fwA.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahK,w)},
Sa(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.Hn.n(0,d,u)
x=3
return A.b(B.SJ(d,u),$async$Sa)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sa,w)},
aRe(d){return B.ikY(d)},
ikY(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hn.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SI(d),$async$aRe)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hn.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRe)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cJ.aK(r)
x=!J.cx(q)?9:10
break
case 9:B.Sa(d,q)
x=11
return A.b(J.fQ(s,d),$async$aRe)
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
return A.i($async$aRe,w)},
ih0(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cc(J.ez(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cc(A.vW(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cc(d)),y.K)
return A.f8(null,y.K)},
a3u(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fHg(r,t),!1,s)
A.fH(r,"error",new B.fHh(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.OX,new B.fHi())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3u,w)},
aRz(d,e,f){return B.inm(d,e,f)},
inm(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRz=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a3u(i),$async$aRz)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SJ(o,p),$async$aRz)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahQ(k,j,s),$async$aRz)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRz,w)},
aRy(d,e,f){return B.inl(d,e,f)},
inl(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRy=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRz(d,e,f),$async$aRy)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3u(f),$async$aRy)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hn.n(0,s,r)
$.Su.n(0,s,r)
x=11
return A.b(B.Sa(s,r),$async$aRy)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRy,w)},
CA(d,e,f,g,h,i){return B.i4M(d,e,f,g,h,i)},
i4M(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CA=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jS(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b2w(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sa(s,d),$async$CA)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CA)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$CA)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.an.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.Bu(e),$async$CA)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hx(e,j),$async$CA)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CA,w)},
WI(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bu(d),$async$WI)
case 3:t=a1
s=e.length,r=J.cI(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cV.av(99999)
n=p.b
l=o.type
l.toString
k=B.hzl(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jS(m,n,k,l,j,"From folder",null,B.b2w(),null)
$.aie.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3u(o),$async$WI)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hn.n(0,h,g)
$.Su.n(0,h,g)
B.Sa(h,g)
x=9
break
case 10:x=11
return A.b(B.aRy(d,m,o),$async$WI)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hx(d,t),$async$WI)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WI,w)},
hi3(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hi3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hzl(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JB(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CA(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hi3,w)},
JB(d,e,f,g,h,i){return B.i4L(d,e,f,g,h,i)},
i4L(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JB=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lt(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JB)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cx(m)){x=6
break}J.hb(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.Tj(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kv(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SJ(k,l),$async$JB)
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
return A.b(j.a1(0),$async$JB)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SJ(k,new Uint8Array(A.cc(n))),$async$JB)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahQ(r,q,g),$async$JB)
case 16:f=new B.jS(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b2w(),null)
x=17
return A.b(B.Bu(d),$async$JB)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hx(d,e),$async$JB)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JB,w)},
WK(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WK=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aie.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3u(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahK(s),$async$WK)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SI(u[o]),$async$WK)
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
v=A.vW(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Su.h(0,s)
if(i==null)i=$.Hn.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t6(d,e),$async$WK)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.Su.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vW(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
hzl(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t6(d,e){return B.i4N(d,e)},
i4N(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t6=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Su.h(0,f)
if(e==null)e=$.Hn.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aie.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3u(s),$async$t6)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hn.n(0,f,r)
$.Su.n(0,f,r)
B.Sa(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahK(f),$async$t6)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adN(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SI(g[l]),$async$t6)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8f()
if(!C.aI.gar(r)){$.Hn.n(0,f,r)
$.Su.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRe(f),$async$t6)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.Su.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WK(a0,a1,0,g),$async$t6)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cc(i))
$.Hn.n(0,f,h)
$.Su.n(0,f,h)
B.Sa(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t6,w)},
i4Q(d){var x,w,v=$.aie.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i4R(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i4O(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arP(d,e,f,g,h){return B.i4P(d,e,f,g,h)},
i4P(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arP=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aie.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3u(s),$async$arP)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t6(g,e),$async$arP)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f5().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iE(d).xS(h,r,new A.ET(!0,e.c)),$async$arP)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.an.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arP,w)},
hzn(d,e,f,g,h){var x,w,v,u,t=$.hzm
$.hzm=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cgy.n(0,t,new B.bzO(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adN(u)))
return t},
hi4(d){var x=0,w=A.j(y.H)
var $async$hi4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hi4,w)},
JC(d,e){var $async$JC=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aie.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qK(B.WK(d,e,p,o<q?o:q),$async$JC,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qK(A.GU(n),$async$JC,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qK(B.ahK("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JC,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qK(B.SI(h[l]),$async$JC,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qK(A.GU(k),$async$JC,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qK(B.t6(d,e),$async$JC,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qK(A.GU(A.vW(j,p,o<i?o:i)),$async$JC,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qK(null,0,w)
case 2:return A.qK(t.at(-1),1,w)}})
var x=0,w=A.hIv($async$JC,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hKx(w)},
b2y(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cgy.h(0,d)
if(t==null||J.cx(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6x(),$async$b2y)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2y,w)},
WJ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgy.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6x(),$async$WJ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahQ(r.c,u,r.z),$async$WJ)
case 4:t=new B.jS(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b2w(),null)
u=r.a
x=5
return A.b(B.Bu(u),$async$WJ)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hx(u,s),$async$WJ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WJ,w)},
a8T(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgy.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiV(u[s]),$async$a8T)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a8T,w)},
cgA(d,e,f){var x=0,w=A.j(y.H)
var $async$cgA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEV(d,e,f),$async$cgA)
case 2:return A.h(null,w)}})
return A.i($async$cgA,w)},
cgB(d,e,f){var x=0,w=A.j(y.H)
var $async$cgB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEW(d,e,f),$async$cgB)
case 2:return A.h(null,w)}})
return A.i($async$cgB,w)},
FE(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bu(d),$async$FE)
case 2:p=g
J.ne(p,new B.cgz(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hn.X(0,v)
$.aie.X(0,e)
x=3
return A.b(B.ahK(v),$async$FE)
case 3:u=g
$.fwA.X(0,v)
x=4
return A.b(A.aB(),$async$FE)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FE)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FE)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiV(s[q]),$async$FE)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiV(v),$async$FE)
case 13:x=14
return A.b(B.Hx(d,p),$async$FE)
case 14:return A.h(null,w)}})
return A.i($async$FE,w)},
b2x(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t6(d,e),$async$b2x)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fxz(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2x,w)},
Bu(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bu)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fHj(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bu,w)},
Hx(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hx)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fLC(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$Hx)
case 3:return A.h(null,w)}})
return A.i($async$Hx,w)},
bEV(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEV)
case 3:u=h
t=J.cI(u)
s=t.bl(u,new B.fFs(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHe(f))
x=4
return A.b(B.Hx(d,u),$async$bEV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEV,w)},
bEW(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEW)
case 3:u=h
t=J.cI(u)
s=t.bl(u,new B.fFt(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRE(f))
x=4
return A.b(B.Hx(d,u),$async$bEW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEW,w)},
adR:function adR(d){this.a=d},
fBm:function fBm(){},
fHg:function fHg(d,e){this.a=d
this.b=e},
fHh:function fHh(d){this.a=d},
fHi:function fHi(){},
cgz:function cgz(d){this.a=d},
bzO:function bzO(d,e,f,g,h,i,j,k,l){var _=this
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
fHj:function fHj(){},
fLC:function fLC(){},
fFs:function fFs(d){this.a=d},
fFt:function fFt(d){this.a=d},
a8U(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgE())?3:4
break
case 3:x=5
return A.b(B.b2z(d,e),$async$a8U)
case 5:u=g
if(u!=null){t=u.c
B.OG(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gG(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b2u(s),$async$a8U)
case 10:case 9:if(g){v=new A.Rw(1,D.UN,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WL(d,e),$async$a8U)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WQ(!0,!0,d,e),$async$a8U)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OG(d,D.AX,e,t)
v=new A.Rw(p,D.AX,t)
x=1
break}v=B.cgD(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8U,w)},
WL(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8W(null,d,e),$async$WL)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cx(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2t(p,d.length,e),$async$WL)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cgB(e,C.d.gG(d).a,r.b),$async$WL)
case 7:case 6:q=r.a
x=8
return A.b(B.OG(d,D.UN,e,q),$async$WL)
case 8:v=new A.Rw(d.length,D.UN,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WL,w)},
WM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mQ(D.nm)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8V(d,e),$async$WM)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cgw(s,d,e,t),$async$WM)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2u(t),$async$WM)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t6(e,d),$async$WM)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WL(A.a([d],y.r),e),$async$WM)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WM,w)},
WO(){var x=0,w=A.j(y.H)
var $async$WO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hhY(),$async$WO)
case 2:x=3
return A.b(B.aTY(),$async$WO)
case 3:return A.h(null,w)}})
return A.i($async$WO,w)},
a8V(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2w()
x=3
return A.b(B.cgA(e,d.a,u),$async$a8V)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8V,w)},
OG(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UN&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8V(p,f),$async$OG)
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
return A.b(B.cgv(o,p,u,f),$async$OG)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cgw(o,p,f,t),$async$OG)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgu(o,u,p,f),$async$OG)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OG,w)},
b2z(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgC(e,d),$async$b2z)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WQ(!1,!0,d,e),$async$b2z)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rw(u.a,D.AX,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2z,w)},
cgC(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cgC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WK(d,s,0,1),$async$cgC)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.I)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgC,w)},
cgD(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cgD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8W(null,d,e),$async$cgD)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hzk(u)
if(t.length>800){v=null
x=1
break}v=new A.Rw(d.length,D.e_2,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgD,w)},
arQ(d,e,f){return B.i4U(d,e,f)},
i4U(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arQ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d9(g,"\ufeff"))g=J.nf(g,1)
x=B.hi2(g)?3:4
break
case 3:x=5
return A.b(B.cgx(g),$async$arQ)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d9(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nf(g,13))
try{k=B.FF(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d9(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nf(g,13))
u=9
x=12
return A.b(B.b2s(q),$async$arQ)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WN(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d9(g,"NGMYDOCSYNC0|"))try{n=B.hi1(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WN(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d9(g,"N2|")){v=B.JD(C.a.i(J.nf(g,3)),d,a0)
x=1
break}if(J.d9(g,"NGMYDOCSYNC2|")){v=B.JD(C.a.i(J.nf(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JD(h,d,a0)
x=1
break}if(J.eD(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WN(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arQ,w)},
JD(d,e,f){return B.i4S(d,e,f)},
i4S(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JD=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aw(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2k(r),$async$JD)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2k(A.cH(s,0,null)),$async$JD)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cx(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cg9(o,r,a1,n,a2),$async$JD)
case 11:m=a4
x=J.cx(m)?12:13
break
case 12:x=14
return A.b(B.cg8(q),$async$JD)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WN(l,a2),$async$JD)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cx(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ac(d)
$.an.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JD,w)},
a8W(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8W=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t6(f,r),$async$a8W)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8W,w)},
WN(d,e){return B.i4T(d,e)},
i4T(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WN=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.V.aP(0,a2,null)
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
e=J.aQ(r)
case 7:if(!e.C()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cJ.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.CA(i,a3,d,k,l,o),$async$WN)
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
g=A.ac(a1)
$.an.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$WN,w)},
OF:function OF(d,e){this.a=d
this.b=e},
cgE:function cgE(){},
a33(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak2:D.ahw,v=x?D.alQ:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.aj0:C.bn
return new A.aJi([w,s,v,u,t,x?C.fz:C.bT])},
hQi(d,e){var x=e?C.v.j(0.72):C.b7
return A.ce(null,x,!0,null,new B.h9t(e),d,null,!0,!0,y.N)},
cgj(d,e,f,g,h,i,j,k,l){return new B.WF(e,l,d,f,k,j,g,h,i,null)},
a00(d,e,f,g,h,i,j){return new B.bhi(g,h,j,e,i,d,f,null)},
h9t:function h9t(d){this.a=d},
a_Y:function a_Y(d,e){this.c=d
this.a=e},
aC9:function aC9(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfx:function dfx(d){this.a=d},
dfv:function dfv(d){this.a=d},
dfw:function dfw(d){this.a=d},
bzq:function bzq(){},
WF:function WF(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGe:function aGe(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e31:function e31(d){this.a=d},
e2p:function e2p(d,e){this.a=d
this.b=e},
e2q:function e2q(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e,f){this.a=d
this.b=e
this.c=f},
e1Y:function e1Y(d){this.a=d},
e2_:function e2_(d,e){this.a=d
this.b=e},
e24:function e24(d,e,f){this.a=d
this.b=e
this.c=f},
e23:function e23(d){this.a=d},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2R:function e2R(d){this.a=d},
e2m:function e2m(d,e,f){this.a=d
this.b=e
this.c=f},
e2j:function e2j(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e22:function e22(d){this.a=d},
e2u:function e2u(d){this.a=d},
e2t:function e2t(){},
e28:function e28(d){this.a=d},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2O:function e2O(d,e){this.a=d
this.b=e},
e2P:function e2P(d,e){this.a=d
this.b=e},
e2k:function e2k(d,e){this.a=d
this.b=e},
e2l:function e2l(d,e){this.a=d
this.b=e},
e2G:function e2G(d,e){this.a=d
this.b=e},
e2C:function e2C(d){this.a=d},
e2B:function e2B(d){this.a=d},
e2D:function e2D(){},
e2E:function e2E(){},
e2F:function e2F(d,e){this.a=d
this.b=e},
e2H:function e2H(){},
e2I:function e2I(d){this.a=d},
e2A:function e2A(d,e){this.a=d
this.b=e},
e2v:function e2v(d){this.a=d},
e2w:function e2w(d){this.a=d},
e2x:function e2x(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2z:function e2z(d){this.a=d},
e25:function e25(){},
e26:function e26(d){this.a=d},
e27:function e27(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e20:function e20(d,e,f){this.a=d
this.b=e
this.c=f},
e2n:function e2n(d){this.a=d},
e2o:function e2o(d,e,f){this.a=d
this.b=e
this.c=f},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2d:function e2d(d){this.a=d},
e2a:function e2a(d,e,f){this.a=d
this.b=e
this.c=f},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2g:function e2g(){},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2b:function e2b(d){this.a=d},
e29:function e29(d,e,f){this.a=d
this.b=e
this.c=f},
e2c:function e2c(){},
e2s:function e2s(d){this.a=d},
e2r:function e2r(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2J:function e2J(d){this.a=d},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2L:function e2L(d){this.a=d},
e2Z:function e2Z(d){this.a=d},
e2X:function e2X(d){this.a=d},
e2Y:function e2Y(d){this.a=d},
e3_:function e3_(){},
e30:function e30(d,e){this.a=d
this.b=e},
e2T:function e2T(d,e){this.a=d
this.b=e},
e2U:function e2U(d,e,f){this.a=d
this.b=e
this.c=f},
e2S:function e2S(d,e,f){this.a=d
this.b=e
this.c=f},
e2V:function e2V(d,e){this.a=d
this.b=e},
e2W:function e2W(d,e){this.a=d
this.b=e},
aC6:function aC6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhh:function bhh(d,e,f){this.c=d
this.d=e
this.a=f},
dft:function dft(){},
dfu:function dfu(){},
aea:function aea(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfR:function dfR(){},
dfQ:function dfQ(d){this.a=d},
a0_:function a0_(d,e,f){this.c=d
this.d=e
this.a=f},
aCb:function aCb(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfN:function dfN(d){this.a=d},
dfO:function dfO(d,e,f){this.a=d
this.b=e
this.c=f},
dfP:function dfP(d,e){this.a=d
this.b=e},
dfL:function dfL(d,e){this.a=d
this.b=e},
dfJ:function dfJ(d){this.a=d},
dfH:function dfH(d){this.a=d},
dfE:function dfE(d){this.a=d},
dfK:function dfK(d){this.a=d},
dfG:function dfG(d){this.a=d},
dfM:function dfM(d){this.a=d},
dfI:function dfI(d){this.a=d},
dfF:function dfF(d){this.a=d},
a_X:function a_X(d,e,f){this.c=d
this.d=e
this.a=f},
aC8:function aC8(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dfq:function dfq(d){this.a=d},
dfp:function dfp(d,e){this.a=d
this.b=e},
dfr:function dfr(d){this.a=d},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfs:function dfs(d){this.a=d},
dfn:function dfn(d,e){this.a=d
this.b=e},
dfj:function dfj(d){this.a=d},
dfk:function dfk(d){this.a=d},
dfl:function dfl(d,e){this.a=d
this.b=e},
dfm:function dfm(d){this.a=d},
R2:function R2(d,e,f){this.c=d
this.d=e
this.a=f},
aCe:function aCe(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dg3:function dg3(d){this.a=d},
dg4:function dg4(d){this.a=d},
dg5:function dg5(d){this.a=d},
dg6:function dg6(d){this.a=d},
dg7:function dg7(d,e){this.a=d
this.b=e},
dg8:function dg8(d){this.a=d},
dga:function dga(d){this.a=d},
dg9:function dg9(d){this.a=d},
a01:function a01(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCc:function aCc(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dg_:function dg_(d,e){this.a=d
this.b=e},
dg0:function dg0(d,e){this.a=d
this.b=e},
dfS:function dfS(d,e,f){this.a=d
this.b=e
this.c=f},
dfT:function dfT(d){this.a=d},
dfU:function dfU(){},
dfZ:function dfZ(){},
dfV:function dfV(d,e){this.a=d
this.b=e},
dfW:function dfW(d,e){this.a=d
this.b=e},
dfX:function dfX(d,e){this.a=d
this.b=e},
dfY:function dfY(d,e){this.a=d
this.b=e},
ae8:function ae8(d,e){this.c=d
this.a=e},
dfi:function dfi(d){this.a=d},
a_W:function a_W(d){this.a=d},
aC7:function aC7(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a02:function a02(d,e){this.c=d
this.a=e},
aCd:function aCd(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dg2:function dg2(d){this.a=d},
dg1:function dg1(d){this.a=d},
bhi:function bhi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i4V(){var x,w=$.oI(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OH(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$OH)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fa("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OH)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OH,w)},
a8X(d){return B.i4W(d)},
i4W(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8X)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$a8X)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8X,w)},
WP(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OH(),$async$WP)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8X(s),$async$WP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WP,w)},
WQ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cd(),$async$WQ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgG(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i4V()
t=A.U(u).k("O<1,a9<m,aE>>")
r=A.B(new A.O(u,new B.cgH(s),t),t.k("aj.E"))
x=6
return A.b(B.OH(),$async$WQ)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8X(q),$async$WQ)
case 7:x=8
return A.b(B.a8Y(r,u,g,s),$async$WQ)
case 8:v=new A.bte(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WQ,w)},
arR(d){var x=0,w=A.j(y.y),v,u,t
var $async$arR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OH(),$async$arR)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arR,w)},
cgI(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OH(),$async$cgI)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a2(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgI,w)},
a8Y(d,e,f,g){return B.i4X(d,e,f,g)},
i4X(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8Y=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arP("media",r,new B.cgF(s,e,g),f,q),$async$a8Y)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WP(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8Y)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WP(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8Y)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WP(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8Y)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8Y,w)},
FF(d,e,f){return B.i4Y(d,e,f)},
i4Y(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FF=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cd(),$async$FF)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arR(b3),$async$FF)
case 7:if(c0){x=6
break}x=8
return A.b(A.bL(C.j2,null,g),$async$FF)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arR(b3),$async$FF)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OH(),$async$FF)
case 10:e=c0
g=J.a2(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a2(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cx(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a2(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a2(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f5().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nM(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acm(a8.a,b0,"media",a8.d,a9).DE(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b2l(k,n,o,s,b7),$async$FF)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
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
case 18:g.X(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f5().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nM(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acm(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FF)
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
a0=A.dE(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8X(e),$async$FF)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FF,w)},
cgG:function cgG(){},
cgH:function cgH(d){this.a=d},
cgF:function cgF(d,e,f){this.a=d
this.b=e
this.c=f},
aTY(){var x=0,w=A.j(y.H),v,u
var $async$aTY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.igj=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aTY)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aTY)
case 3:u=$.hnC
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aTY)
case 4:$.hnC=$.ipd=$.ipe=null
return A.h(null,w)}})
return A.i($async$aTY,w)},
fLd(d){var x=0,w=A.j(y.H),v,u
var $async$fLd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaS){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fLe(new A.c7(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fLf()),$async$fLd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fLd,w)},
ipb(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i4F(x):x},
hnH(d){var x=0,w=A.j(y.T),v,u,t
var $async$hnH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.Y(u,"WR")){v=B.arT(u)
x=1
break}v=B.hi1(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnH,w)},
hnG(d){var x=0,w=A.j(y.T),v,u,t
var $async$hnG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.Y(u,"WR")){v=B.arU(u)
x=1
break}v=B.hi1(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnG,w)},
h4V(d){var x=0,w=A.j(y.T),v
var $async$h4V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arU(d),$async$h4V)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h4V,w)},
bFT(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hnG(d),$async$bFT)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a2(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFT,w)},
fyn(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fyn=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WJ(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.CA(d.a8f(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyn,w)},
Hz(d,e,f){return B.iry(d,e,f)},
iry(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hz=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hnH(a1),$async$Hz)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a2(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hSj().aHv(D.dMa,null),$async$Hz)
case 4:l=d.hnC=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adN(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fLP(f,k,new B.fLQ(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a9B(0,new B.Z2(r,"offer")),$async$Hz)
case 5:d=l
x=7
return A.b(l.ani(0),$async$Hz)
case 7:x=6
return A.b(d.a9t(0,a4),$async$Hz)
case 6:x=8
return A.b(B.fLd(l),$async$Hz)
case 8:x=9
return A.b(l.arG(),$async$Hz)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ipb(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arV(m,h),$async$Hz)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hzk(h)
case 11:v=new A.bst(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hz,w)},
fLe:function fLe(d){this.a=d},
fLf:function fLf(){},
fLQ:function fLQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLP:function fLP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fLO:function fLO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
itD(d){switch(d){case"new":return D.eK4
case"checking":return D.eK5
case"connected":return D.eK7
case"completed":return D.eK6
case"failed":return D.eK9
case"disconnected":return D.eKa
case"closed":return D.aTa
case"count":return D.eK8}return D.aTa},
itE(d){switch(d){case"new":return D.aTb
case"gathering":return D.eKb
case"complete":return D.aaS}return D.aTb},
iEh(d){switch(d){case"stable":return D.eKc
case"have-local-offer":return D.eKd
case"have-local-pranswer":return D.eKf
case"have-remote-offer":return D.eKe
case"have-remote-pranswer":return D.eKg
case"closed":return D.aTh}return D.aTh},
iCq(d){switch(d){case"new":return D.aTe
case"connecting":return D.aTf
case"connected":return D.aTg
case"closed":return D.aaT
case"disconnected":return D.aTd
case"failed":return D.aTc}return D.aaT},
abj:function abj(d,e){this.a=d
this.b=e},
PM:function PM(d,e){this.a=d
this.b=e},
Z1:function Z1(d,e){this.a=d
this.b=e},
PL:function PL(d,e){this.a=d
this.b=e},
G9:function G9(d,e){this.a=d
this.b=e},
cuG:function cuG(){},
hjP(d){var x=new B.G8()
x.a=d
x.b=!0
return x},
G8:function G8(){this.b=this.a=$},
abi:function abi(){},
awq:function awq(){},
Z2:function Z2(d,e){this.a=d
this.b=e},
hhY(){var x=0,w=A.j(y.H)
var $async$hhY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hhY,w)},
hi0(d,e,f){var x=0,w=A.j(y.T),v
var $async$hi0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mQ(D.nm))){v=null
x=1
break}v=B.h5b(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hi0,w)},
hzk(d){var x,w=F.agX.a6g(C.e2.aK(d),null)
if(w.length===0){x=C.e2.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i4E(d){var x,w,v=C.cJ.aK(d)
try{x=C.cg.cG(0,F.agW.bhy(v,!1))
return x}catch(w){x=C.cg.cG(0,v)
return x}},
hi1(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i4E(C.a.aY(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aY(t,w.length)
try{v=C.cg.cG(0,C.cJ.aK(x))
return v}catch(u){return x}}return null},
i4F(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Y(t,"a=extmap"))continue
if(C.a.Y(t,"a=ssrc"))continue
if(C.a.Y(t,"a=msid"))continue
if(C.a.Y(t,"a=rtcp"))continue
if(C.a.Y(t,"a=rtpmap"))continue
if(C.a.Y(t,"a=fmtp"))continue
if(C.a.Y(t,"a=rtcp-fb"))continue
if(C.a.Y(t,"a=mid:"))continue
if(C.a.Y(t,"a=group:"))continue
if(C.a.Y(t,"a=setup:"))continue
if(C.a.Y(t,"a=ice-options:"))continue
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aL(s,"\n")},
i4G(){var x,w=$.oI(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2r(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fa("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2r)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2r,w)},
cgo(d,e){return B.i4H(d,e)},
i4H(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgo=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cX,null),$async$cgo)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgo,w)},
b2u(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2r(d),$async$b2u)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2u,w)},
b2t(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i4G()
r=C.a.i(f)
t=C.e2.aK(s)
x=3
return A.b(B.cgo(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2t)
case 3:if(!h){v=null
x=1
break}v=new A.a23("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2t,w)},
b2s(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2r(o),$async$b2s)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cG(0,C.cJ.aK(u))
if(J.je(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2s,w)},
cgp(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(P.bGS("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cX),$async$cgp)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgp,w)},
b2v(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jz(),$async$b2v)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2v,w)},
arM(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arM)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2v(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arM,w)},
arK(d,e){var x=0,w=A.j(y.H)
var $async$arK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arK)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arK)
case 2:return A.h(null,w)}})
return A.i($async$arK,w)},
a8P(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8P=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8P)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jz(),$async$a8P)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dx(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8O(s),$async$a8P)
case 5:x=6
return A.b(B.arK(f,u),$async$a8P)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
a8Q(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8Q=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8Q)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jz(),$async$a8Q)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a2(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a0(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.X(u,t)
s.n(u,o,p)
x=8
return A.b(B.arK(g,q),$async$a8Q)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8O(u),$async$a8Q)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8Q,w)},
a8R(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8R=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8R)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jz(),$async$a8R)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a2(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b2o(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8R)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8R)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8R,w)},
cgq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgq)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a0(q,y.N,y.z)
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
return A.i($async$cgq,w)},
JA(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgq(d),$async$JA)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2v(t),$async$JA)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arL(d),$async$JA)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2o(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arL(d),$async$JA)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JA,w)},
arL(d){var x=0,w=A.j(y.H)
var $async$arL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arL)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arL)
case 2:return A.h(null,w)}})
return A.i($async$arL,w)},
b2w(){var x,w=$.oI(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8S(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hi2(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgt(d){return B.i4J(d)},
i4J(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8S(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fa("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgt)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgt,w)},
arO(d,e){return B.i4K(d,e)},
i4K(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8S(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cX,null),$async$arO)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arO,w)},
cgv(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8S(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arO(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgv,w)},
cgu(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8S(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arO(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cgu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgu,w)},
cgw(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cgw=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8S(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arO(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgw,w)},
cgx(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cgx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hi2(d)){v=null
x=1
break}x=3
return A.b(B.cgt(d),$async$cgx)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a2(u)
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
return A.i($async$cgx,w)},
a8Z(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8Z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$a8Z)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fa("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8Z)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8Z,w)},
arS(d){return B.i4Z(d)},
i4Z(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cd(),$async$arS)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cX,null),$async$arS)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arS,w)},
arT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d9(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cd(),$async$arT)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8Z(),$async$arT)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cG(0,C.cJ.aK(q))
if(J.je(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.arS(s),$async$arT)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ac(i)
$.an.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arT,w)},
arV(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.cd(),$async$arV)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8Z(),$async$arV)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e2.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arS(u),$async$arV)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arV,w)},
arU(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.cd(),$async$arU)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8Z(),$async$arU)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cG(0,C.cJ.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arU,w)},
aqM(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.oq)){v=null
x=1
break}x=3
return A.b(p.lv(e),$async$aqM)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.ho),$async$aqM)
case 7:q=g
o=q
o=o==null?null:J.eU(J.uV(o))
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
return A.i($async$aqM,w)},
iAv(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h33(d){return B.iAx(d)},
iAx(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h33=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").M_(d,3600),$async$h33)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$h33,w)},
DZ(d,e,f,g,h,i){var x=null
return B.iAu(d,e,f,g,h,i)},
iAu(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DZ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hzn(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hi4(r),$async$DZ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h33(o),$async$DZ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8T(r),$async$DZ)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWT)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MZ(A.a([],g))
x=15
return A.b(d.fc(0,A.axf("GET",A.cH(n,0,null))).de(0,C.Hv),$async$DZ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8T(r),$async$DZ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lt(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DZ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2y(r,k),$async$DZ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DZ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WJ(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a8T(r),$async$DZ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DZ,w)},
aTC(d){return B.iAw(d)},
iAw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTC)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTC,w)}},D,Z,I,O,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
P=c[78]
K=c[118]
Q=c[373]
R=c[61]
F=c[365]
L=c[217]
G=c[83]
S=c[330]
T=c[331]
E=c[321]
H=c[120]
U=c[277]
V=c[137]
W=c[86]
X=c[218]
Y=c[328]
M=c[310]
N=c[374]
B=a.updateHolder(c[26],B)
D=c[372]
Z=c[276]
I=c[139]
O=c[304]
A_=c[93]
A0=c[357]
A1=c[101]
B.cuH.prototype={
aHv(d,e){return this.cT8(d,e)},
cT8(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kz(A.cz(t)))
t=J.k(u)
v=B.i9K(C.cS.gcp().aK(new A.di(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHv,w)}}
B.b7I.prototype={
bDT(d){var x=this,w=x.w
w.onclose=A.hD(new B.cuC(x))
w.onopen=A.hD(new B.cuD(x))
w.onmessage=A.hD(new B.cuE(x))
w.onbufferedamountlow=A.hD(new B.cuF(x))},
gd4(d){return this.x},
ajx(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G8()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hjP(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.en(d.arrayBuffer(),y.af),$async$ajx)
case 8:v=t.hjP(s.apV(f,0,null))
x=1
break
case 7:case 4:v=B.hjP(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajx,w)}}
B.b7J.prototype={
bDU(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hD(new B.cuI(x)))
w.addEventListener("icecandidate",A.hD(new B.cuJ(x)))
w.addEventListener("iceconnectionstatechange",A.hD(new B.cuK(x)))
w.onicegatheringstatechange=A.hD(new B.cuL(x))
w.addEventListener("signalingstatechange",A.hD(new B.cuM(x)))
if(!$.hrQ())w.addEventListener("connectionstatechange",A.hD(new B.cuN(x)))
w.addEventListener("negotiationneeded",A.hD(new B.cuO(x)))
w.addEventListener("track",A.hD(new B.cuP(x)))},
ani(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ani=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.en(s.createAnswer(A.kz(A.cz(A.S(y.N,y.z)))),y.aQ),$async$ani)
case 3:t=f
v=new B.Z2(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ani,w)},
a9t(d,e){return this.bsP(0,e)},
bsP(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.en(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9t)
case 2:return A.h(null,w)}})
return A.i($async$a9t,w)},
a9B(d,e){return this.bt9(0,e)},
bt9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.en(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9B)
case 2:return A.h(null,w)}})
return A.i($async$a9B,w)},
arG(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Z2(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arG,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.ae9.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a_Z.prototype={
R(){return new B.aCa()},
gd6(){return this.c}}
B.aCa.prototype={
a_(){this.a3()
this.ag2()},
ag2(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2p(u.e,u.c),$async$ag2)
case 2:t=e
if(v.c!=null)v.l(new B.dfB(v,t))
return A.h(null,w)}})
return A.i($async$ag2,w)},
RB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arH(t.e,t.c,!1),$async$RB)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fzf)
x=1
break}x=4
return A.b(B.a8N(u.a.c,"individual"),$async$RB)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a7P(A.eb(new B.dfy(u),!1,null,y.H)),$async$RB)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
Kg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fJ0(o),$async$Kg)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8R(o.e,r,s,q),$async$Kg)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fwe)
x=1
break}x=5
return A.b(B.a8N(u.a.c,"member"),$async$Kg)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a7P(A.eb(new B.dfA(u),!1,null,y.H)),$async$Kg)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kg,w)},
yU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8M(t.e,o,t.f,t.r,t.w,s),$async$yU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8N(u.a.c,"org_owner"),$async$yU)
case 4:x=5
return A.b(B.arM(u.a.c),$async$yU)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fJv(o),$async$yU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8P(s,t,o,q.c),$async$yU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fwa)
x=1
break}x=10
return A.b(B.arM(u.a.c),$async$yU)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a7P(A.eb(new B.dfz(u),!1,null,y.H)),$async$yU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yU,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nQ:I.qQ,p=B.hi_(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.n(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fTH,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hm,s,s,s),C.aB,D.hcW,C.R,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.ce2,C.m),s,s,s,s,C.eJ,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lP(new B.dfD(),s),C.M,v,C.ec,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeD(C.f3,C.aFD,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclF(),s),C.af],u))
w.push(new B.aeD(C.q_,C.a6j,"Team Member","Sign in with your organization access code + password",t.gcmz(),s))
w.push(C.af)
w.push(new B.aeD(C.arx,C.a7X,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcm3(),s))
return A.c5(s,q,A.bo(!0,A.cb(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeD.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eJ(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.mb,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(V.zT,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEQ.prototype={}
B.aI2.prototype={}
B.jS.prototype={
mQ(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasm(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a5(x/1024,1)+" KB"
if(x<1073741824)return C.i.a5(x/1048576,1)+" MB"
return C.i.a5(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.S(y.N,y.z)
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
bh1(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRE(d){return this.bh1(null,d)},
aHe(d){return this.bh1(d,null)}}
B.WD.prototype={
R(){return new B.aGc(new A.cA(null,y.A))},
gd6(){return this.c}}
B.aGc.prototype={
a_(){this.a3()
this.ag3()},
ag3(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cz(u.a.c),$async$ag3)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e1V(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ag3,w)},
ag4(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ag4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fC(s)),$async$ag4)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fAa)
case 1:return A.h(v,w)}})
return A.i($async$ag4,w)},
a0i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqM(s.d,4),$async$a0i)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0i)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0i,w)},
ajZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abW("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajZ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nQ:I.qQ,m=o?C.c:C.a_,l=A.eV(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lr
else if(q.e==null)x=A.at(new A.D(C.eJ,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.D,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.M,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,M.Av,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,Q.ao3,p,p,1/0)
v=A.n(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.ns,w,C.lk,new A.e6(A.p(p,A.qs(p,p,!1,B.i4A(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lk,A.A(A.a([A.E(A.eq(K.DX,p,C.Xd,q.gcdR(),p),1),C.ar,A.E(A.db(C.Aj,p,C.adh,q.gcdS(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.R,new A.a5(1/0,p,A.eq(O.a56,p,D.h8q,q.gcBL(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,A_.aoF,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.WH.prototype={
R(){return new B.aGf(new A.au(C.ax,$.az()),A.kp(!0,null,!0,!0,null,null,!1))}}
B.aGf.prototype={
a_(){var x,w
this.a3()
x=this.a.e
w=B.Jy(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
a0j(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jy(u.d.a.a)
if(t==null){u.l(new B.e33(u))
x=1
break}u.l(new B.e34(u))
s=u.a
r=s.c
x=3
return A.b(B.a8L(s.d,new B.e35(u),t,r),$async$a0j)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e36(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0j,w)},
a3G(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3G=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cx(r.a.d)){x=1
break}r.l(new B.e37(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.t6(r.a.c,q),$async$a3G)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e38(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajI(p,m,l,j,k),$async$a3G)
case 8:o=e
if(r.c!=null)r.l(new B.e39(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e3a(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e3b(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3G,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak2:D.ahw,h=j?D.alQ:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.aj0:C.bn
i=[i,e,h,g,f,j?C.fz:C.bT]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eV(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dv(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dv(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0V,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f9,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,M.Av,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v9(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmO()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Ph,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e3c(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mK,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.D,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.E7(l.a.d,4)
m=A.B(new A.O(m,new B.e3d(x,new A.aJi(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.kL,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.M,e,C.M,q,C.di,p,C.M,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fuH)
else q.push(A.V(C.kN,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cV(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j1,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJd,k,k,C.ah),1)
u=l.f?k:l.gcBM()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eq(O.a56,k,D.h9x,u,A.dk(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdT()
t=A.bp(C.az,k,k,0,C.c,k,C.nY,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.am(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.lz(new B.e3e(),A.x(A.a([e,new A.D(D.bIH,A.x(A.a([s,C.M,i,C.af,A.bI(l.f?C.up:D.h7M,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cp,C.a1n,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmO.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fl(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hw(C.bD,v.length),C.aP)}}
B.WE.prototype={
R(){return new B.aGd()}}
B.aGd.prototype={
a_(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(new A.bd(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aS()
u.e=new A.au(new A.bd(x,C.b6,C.aP),v)
u.f!==$&&A.aS()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.az()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a2()},
ag5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ag5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e1W(r))
u=3
p=r.a
o=p.c
p=p.d
n=r.d
n===$&&A.d()
n=n.a.a
m=r.e
m===$&&A.d()
m=m.a.a
m=C.a.i(m)!==C.a.i(p)?m:null
l=r.f
l===$&&A.d()
l=l.a.a
x=6
return A.b(B.a8Q(p,m,n,o,C.a.i(l).length===0?null:l),$async$ag5)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fzM)
s=[1]
x=4
break}p.L(y.q).f.T(D.fyn)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e1X(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ag5,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nQ:I.qQ,q=A.eV(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h05,s,s,s,1,s,!0),p=A.p(s,D.bAF,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.IY,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8m,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8h,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8x,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdU()
u=A.bp(C.az,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c5(q,r,A.cb(A.x(A.a([p,C.di,o,C.af,x,C.af,w,C.ns,A.bI(t.r?C.up:C.aZL,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adR.prototype={}
B.bzO.prototype={
a6x(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.a8f()))
x=3
return A.b(B.SJ(t,s),$async$a6x)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
gd6(){return this.a}}
B.OF.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a_Y.prototype={
R(){return new B.aC9(new A.au(C.ax,$.az()),A.kp(!0,null,!0,!0,null,null,!1))}}
B.aC9.prototype={
a_(){this.a3()
$.aU.U$.push(new B.dfx(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
ce_(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a33(d),u=x.a.c,t=u?C.iW:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nQ:v.a[0],p=A.n(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.h1,32)],n),l=A.p(w,Z.auh,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cz,16)],n),C.av7,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.D,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v9(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzq()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.N,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.D8,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b8g),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dfv(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mK,w,w,w,w)
f=f[1]
h=y.p
return A.eH(w,C.L,new A.cS(U.MU,new A.bQ(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x8,A.x(A.a([l,C.aO,k,C.M,j,C.ec,i,C.ec,A.A(A.a([A.E(A.dY(C.oq,new B.dfw(d),A.dk(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bQ(new A.o(w,w,w,A.n(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cP,12)],n),N.Rl,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eDs,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdZ(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.O,0,C.p),w),w),w),w,w,w,C.Pp,w,C.dd,w,w,w)}}
B.bzq.prototype={
pe(d,e){return e.anc(e.a.toUpperCase())}}
B.WF.prototype={
R(){return new B.aGe(A.a([],y.r),A.aR(y.N))},
gd6(){return this.c}}
B.aGe.prototype={
a_(){var x=this
x.a3()
x.uu()
x.w=A.d1(C.jV,new B.e31(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WO()
this.a2()},
a2w(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OE(u.a.c),$async$a2w)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bu(u.a.c),$async$a2w)
case 4:u.l(new s.e2p(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2w,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OE(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bu(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e2q(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OI(u.d)
B.Cz(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
OI(d){return this.bI0(d)},
bI0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8V(r,u.a.c),$async$OI)
case 8:p=f
if(u.c==null){x=1
break}new B.e1Z(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mQ(D.nm))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WM(r,u.a.c),$async$OI)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bu(u.a.c),$async$OI)
case 12:u.l(new o.e2_(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
P7(d){return this.bOr(d)},
bOr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8V(d,u.a.c),$async$P7)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e24(u,d,t))
x=6
return A.b(A.fM(new A.fC(t)),$async$P7)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fC(r.toUpperCase())),$async$P7)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P7,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cMV(d,e)},
cMV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e2Q(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e2R(r))
$.eW.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaZ0(){var x=this.a
return x.f||x.r||x.w},
J2(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZ0()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgm(s,n,r,q,o,t),$async$J2)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fWF(o,u.a.c),$async$J2)
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
return A.b(B.E0(s,o,r,q,n,t),$async$J2)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J2,w)},
a1y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arM(u.a.c),$async$a1y)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iq("No organization portal found.")
x=1
break}t=J.a2(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).cc(A.eb(new B.e2m(u,r,q),!1,null,y.H)),$async$a1y)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1y,w)},
a2G(d){return this.cv8(d)},
cv7(){return this.a2G(1)},
cv8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZ0()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arJ(u.a.c),$async$a2G)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2G,w)},
adV(d,e,f){return this.c4v(d,e,f)},
c4v(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uv(new B.e2j(u,d,null,e,f),"Uploading\u2026"),$async$adV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adV,w)},
bI9(){B.hPf(!1,new B.e22(this))
return},
cAi(){this.l(new B.e2u(this))},
aBF(){var x=0,w=A.j(y.H),v=this
var $async$aBF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bI9()
return A.h(null,w)}})
return A.i($async$aBF,w)},
adR(){var x=0,w=A.j(y.H),v=this
var $async$adR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e28(v),"Importing\u2026"),$async$adR)
case 2:return A.h(null,w)}})
return A.i($async$adR,w)},
TE(d){return this.cMd(d)},
cMd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mQ(D.nm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cc(A.eb(new B.e2N(u,d),!1,null,y.H)),$async$TE)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mQ(D.Tp)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cc(A.eb(new B.e2O(u,d),!1,null,y.H)),$async$TE)
case 8:x=1
break
case 7:x=u.c5d(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cc(A.eb(new B.e2P(u,d),!1,null,y.H)),$async$TE)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TE,w)},
c5d(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXX,C.a.aY(x,w+1).toLowerCase())},
ahH(d){return this.clJ(d)},
clJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mQ(D.nm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cc(A.eb(new B.e2k(u,d),!1,null,y.H)),$async$ahH)
case 5:x=1
break
case 4:u.l(new B.e2l(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahH,w)},
T_(d){return this.cDf(d)},
cDf(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$T_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pQ(t,s.c,s.f),$async$T_)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e2G(u,d),"Preparing QR\u2026"),$async$T_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$T_,w)},
ako(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ako=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2H(),A.U(t).k("O<1,m>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2I(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.T_(r),$async$ako)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ako,w)},
akh(d){return this.cCN(d)},
cCN(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a33(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2A(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akh)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TE(d)
break
case"qr":u.T_(A.a([d],y.r))
break
case"send_my_code":u.cmn(A.a([d],y.r))
break
case"save":u.ajF(d)
break
case"delete":u.JY(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akh,w)},
Z0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e25(),A.U(t).k("O<1,m>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e26(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pQ(t,s.c,s.f),$async$Z0)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e27(u,r),"Preparing file\u2026"),$async$Z0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Z0,w)},
aiN(d){return this.ctr(d)},
ctr(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hQi(d,!1),$async$aiN)
case 3:s=f
r=s==null
q=B.a8S(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
ahN(){var x=0,w=A.j(y.H),v=this,u
var $async$ahN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h4b(u,v.a.c),$async$ahN)
case 2:return A.h(null,w)}})
return A.i($async$ahN,w)},
bI8(){B.hPf(!1,new B.e21(this,null))
return},
Kf(d,e){return this.cmo(d,e)},
b4I(d){return this.Kf(null,d)},
cmn(d){return this.Kf(d,null)},
cmo(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e2n(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y1.cq().aq_(!0,C.a3a,!1),$async$Kf)
case 10:r=g
if(r==null||J.cx(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e2o(l,s,r),"Preparing\u2026"),$async$Kf)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iq("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iq("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bI7(p,l,e,s.a.c),$async$Kf)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kf,w)},
Jj(d){return this.c4i(d)},
c4i(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i4z(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4I(t),$async$Jj)
case 8:x=6
break
case 7:u.iq("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iq("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uv(new B.e2h(u,d),"Receiving video\u2026"),$async$Jj)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e2i(u,d),"Receiving\u2026"),$async$Jj)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
F7(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DV()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiN(t),$async$F7)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jj(s),$async$F7)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cc(A.eb(new B.e2s(u),!1,null,y.N)),$async$F7)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$F7)
case 10:x=1
break
case 9:x=11
return A.b(u.Jj(C.a.i(r)),$async$F7)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F7,w)},
ajF(d){return this.cyN(d)},
cyN(d){var x=0,w=A.j(y.H),v=this
var $async$ajF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e2r(v,d),"Saving\u2026"),$async$ajF)
case 2:return A.h(null,w)}})
return A.i($async$ajF,w)},
JY(d){return this.bQP(d)},
bQP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lC(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JY)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgp(t),$async$JY)
case 6:case 5:s=d.a
x=7
return A.b(B.FE(u.a.c,s),$async$JY)
case 7:u.r.X(0,s)
x=8
return A.b(u.uu(),$async$JY)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JY,w)},
aku(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aku=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a33(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2M(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aku)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahN()
break
case"import":u.adR()
break}case 1:return A.h(v,w)}})
return A.i($async$aku,w)},
cdX(d){var x=d.c
if(C.a.Y(x,"video/")||d.mQ(D.nm))return C.rp
if(C.a.Y(x,"image/")||d.mQ(D.Tp))return C.vv
if(C.a.q(x,"pdf"))return T.ID
return D.arW},
B(d){var x,w,v=this,u=null,t=B.a33(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IQ,u,u,u,new B.e2X(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1w,u,u,u,v.e?u:v.gcm4(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcAh()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bWA:E.ask,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a53,u,u,u,v.e?u:v.gcdY(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p4,u,u,u,v.e?u:v.gb5P(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3k,u,u,u,v.e?u:new B.e2Y(v),u,u,u,u,"More options",u))
q=A.eV(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lP(new B.e2Z(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dv(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dv(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jE(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aC6(C.jG,s,!0,t,w?u:v.gcDg(),u),1)
x.push(new A.D(D.bHq,A.lz(new B.e3_(),A.A(A.a([s,C.ar,A.E(new B.aC6(C.tM,"Export",!1,t,w?u:v.gbUH(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cp,C.iO,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhh(t,v.e?u:v.gb5P(),u)
else s=A.kH(!0,u,u,new B.e30(v,t),s,u,D.bHh,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.am(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aC6.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tA,t,new A.b9(s,C.a1),t,t,t)
return A.db(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dk(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tA,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eq(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fi,t,t,t),u.r,v)}}
B.bhh.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dft(),new A.D(E.a2h,A.x(A.a([A.lz(new B.dfu(),A.p(x,A.V(C.zX,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ej,C.hx,x,x,new A.bq(0.86,1,w),s),C.ec,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.R,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ec,A.db(C.p4,x,D.hdf,this.d,A.bp(C.az,x,x,x,C.c,x,C.Pn,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.O,0,C.p),x),C.cp,C.CX,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aea.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.du(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mQ(D.nm))p=D.dAp
else{p=C.a.Y(p,"image/")||i.mQ(D.Tp)
n=y.O
p=p?A.a([C.cZ,C.az],n):A.a([C.aN.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aD,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.D,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasm()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.nm))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h_,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.co))
if(!(!o||i.mQ(D.nm)))l.push(A.hfL(C.az,!1,j,j,j,!1,j,j,new B.dfQ(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p_,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.co))
return A.lz(new B.dfR(),new A.D(C.dU,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1K,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cp,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0_.prototype={
R(){return new B.aCb()},
gd6(){return this.c}}
B.aCb.prototype={
a_(){this.a3()
this.yI()},
t(){B.i4O(this.e)
this.a2()},
yI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t6(o.c,o.d),$async$yI)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i4R(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i4Q(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfN(s))
x=1
break}s.l(new B.dfO(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfP(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yI,w)},
a3F(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t6(t.c,t.d),$async$a3F)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fwL)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajI(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3F)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3F,w)},
c4b(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kX(u,C.z,v,new B.dfL(w,t),C.he,C.dI,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h5(t,C.z,v,new B.dfM(w),C.he,C.dI,!0,v,!1,v,v)
else return C.bK
return A.vg(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a33(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.D,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DZ,u,u,u,v.gb9E(),u,u,u,u,"Share / save",u))
r=A.eV(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gn
else{q=v.r
if(q!=null)t=new A.D(C.eJ,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eJ,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.db(C.DZ,u,D.fWb,v.gb9E(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c4b()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_X.prototype={
R(){return new B.aC8(A.akF(),C.bH,C.bH)},
gd6(){return this.c}}
B.aC8.prototype={
a_(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fG(w,A.a3(w).k("fG<1>")).iF(new B.dfq(v))
x.gd_S().iF(new B.dfr(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fG(x,A.a3(x).k("fG<1>"))}if(x==null)x=C.beE
x.iF(new B.dfs(v))
v.yI()},
yI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t6(p.c,p.d),$async$yI)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dfj(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a5h(r,s.a.d.c)),$async$yI)
case 8:if(s.c==null){x=1
break}s.l(new B.dfk(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dfl(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yI,w)},
a0k(){var x=0,w=A.j(y.H),v=this,u
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0k)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0k)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0k,w)},
aWR(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a33(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eV(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.D,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gn
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXy,C.f,o,o,new A.o(o,o,o,A.n(24),o,N.Rl,C.m),o,88,o,o,o,o,o,88)
t=A.ld(C.az,o,o,m,0,new B.dfm(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aWR(p.w)+" / "+p.aWR(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.ft9,o,o,o,o,o,o)
r=p.f
q=A.V(r?L.vy:C.fN,o,o,o,o,o)
x=A.x(A.a([u,C.lk,t,x,C.di,A.db(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gce0(),s)],y.p),C.l,o,C.e,C.O,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.ra,x,o),o,o,o),o,!1,!1,o,o)}}
B.R2.prototype={
R(){return new B.aCe()},
gd6(){return this.c}}
B.aCe.prototype={
a_(){this.a3()
this.QR()},
QR(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hi0(o.c,o.d,new B.dg3(s)),$async$QR)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dg4(s))
x=1
break}s.e=r
q=R.ist(r)
if(q==null){s.l(new B.dg5(s))
x=1
break}s.d=q
q.aU(0,s.gb4w())
x=8
return A.b(q.iV(0).de(0,C.nX),$async$QR)
case 8:if(s.c==null){x=1
break}s.l(new B.dg6(s))
x=9
return A.b(q.qv(0),$async$QR)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dg7(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QR,w)},
ckh(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dg8(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DT(0,x.gb4w())
w=x.d
if(w!=null)w.t()
B.iCJ(x.e)
x.a2()},
ag8(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2x(u.c,u.d),$async$ag8)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ag8,w)},
B(d){var x,w,v,u=this,t=null,s=B.a33(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.D,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eV(A.a([A.aI(t,t,t,t,C.oc,t,t,t,u.gcdV(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iz(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gn
else{q=u.r
if(q!=null)s=new A.D(C.eJ,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ak5(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fL(x,new A.am(C.z,t,C.ad,C.t,A.a([new A.B_(s,t),A.aA(t,A.xL(A.p(t,A.V(q?L.vy:C.fN,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bS,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dga(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a01.prototype={
R(){return new B.aCc(new A.cA(null,y.A))}}
B.aCc.prototype={
gcMB(){var x,w,v=this.a
if(v.e!==D.UO)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcMb(){var x,w,v=this.a
if(v.e!==D.AX)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a3()
x=v.gcMB()
if(x!=null){v.S1(x)
v.e=A.d1(X.CZ,new B.dg_(v,x))}w=v.gcMb()
if(w!=null){v.S0(w)
v.f=A.d1(C.fp,new B.dg0(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
S0(d){return this.crB(d)},
crB(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arR(d),$async$S0)
case 3:t=f
x=4
return A.b(B.cgI(d),$async$S0)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfS(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
S1(d){return this.crC(d)},
crC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h4V(d),$async$S1)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFT(t),$async$S1)
case 4:if(u.c==null){x=1
break}u.l(new B.dfT(u))
u.c.L(y.q).f.T(D.aWs)
case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
gc9I(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdW(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DV()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fzW)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cc(A.eb(new B.dfU(),!1,null,y.N)),$async$a3p)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFT(s),$async$a3p)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aWs)
case 1:return A.h(v,w)}})
return A.i($async$a3p,w)},
abJ(d){return this.bOs(d)},
bOs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fC(C.d.aL(t,", "))),$async$abJ)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abJ,w)},
ag6(d){return this.bOa(d)},
bOa(d){var x=0,w=A.j(y.H),v=this
var $async$ag6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fC(v.a.c)),$async$ag6)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fxe)
return A.h(null,w)}})
return A.i($async$ag6,w)},
a3j(d){return this.cyP(d)},
cyP(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqM(s.d,4),$async$a3j)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3j)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3j,w)},
gb_g(){var x,w=this.a
if(w.e!==D.K2)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abG(d){return this.bOl(d)},
bOl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_g()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fC(C.a.Y(t,"http")?t:"N2|"+t)),$async$abG)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fyV)
case 1:return A.h(v,w)}})
return A.i($async$abG,w)},
ag7(){var x=0,w=A.j(y.H),v=this,u
var $async$ag7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WO(),$async$ag7)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ag7,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a33(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K2&&i!==D.UO&&i!==D.AX
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eV(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K2||t===D.UO||t===D.AX?l:A.aI(l,l,l,l,C.lB,l,l,l,m.gb2o(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.M,A.qs(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.c(""+q.d+" file(s) \xb7 "+m.gc9I(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K2){t=C.az.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.M,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lY,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdW(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.R,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.N,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c7p,D.h4W,new B.dfV(m,d),l)],p))}if(m.a.e===D.K2&&m.gb_g()!=null)C.d.u(q,A.a([C.R,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c3G,D.h1v,new B.dfW(m,d),l)],p))
if(m.a.e===D.AX){x=(m.w?C.dR:C.az).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.M,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gr:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lY,l,l,l)],p))}if(m.a.e===D.UO){x=(m.r?C.dR:C.az).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.M,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gr:C.az,l,l,l,l,l,l,l,l,12,l,l,C.D,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lY,l,l,l),C.af,A.db(D.c_2,l,D.h85,m.gczb(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.p9(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.ba,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eq(K.DX,l,C.Xd,new B.dfX(m,d),l),1),C.ar,A.E(A.db(C.Aj,l,C.adh,new B.dfY(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.M,new A.a5(1/0,l,A.bI(W.BB,l,m.gb2o(),A.bp(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfZ(),y.C)}}
B.ae8.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.p(x,A.qs(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ei(A.a([A.bI(C.BC,x,new B.dfi(d),x)],u),x,x,C.nG,v,x,x,x,x,D.fV8,x)}}
B.a_W.prototype={
R(){return new B.aC7(A.A8(C.zc,C.ox,C.vK))}}
B.aC7.prototype={
t(){this.d.t()
this.a2()},
aA7(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eV(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h22,x,x,x,1,x,!0),C.v,A.A7(this.d,C.c_,this.gaA6()),x,!1,!1,x,x)}}
B.a02.prototype={
R(){return new B.aCd(A.A8(C.zc,C.ox,C.vK))},
gd6(){return this.c}}
B.aCd.prototype={
c5f(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ai9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N4("text/plain"),$async$ai9)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fzQ)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ai9,w)},
acx(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hQi(p,!0),$async$acx)
case 3:t=e
p=t==null
s=B.a8S(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fwl)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acx,w)},
t(){this.d.t()
this.a2()},
aA7(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5f(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atm,v,v,v,w.gbUa(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5a,v,v,v,w.gcoU(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eV(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.rj:S.Qx,v,v,v,v,v),v,v,v,new B.dg2(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h91,v,v,v,1,v,!0)
u=A.A7(w.d,C.c_,w.gaA6())
x=A.n(20)
return A.c5(t,C.v,new A.am(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJK],s),v),v,!1,!1,v,v)}}
B.bhi.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pL
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pL:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.D,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2n,A.A(A.a([u,C.bc,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abj.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PM.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Z1.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PL.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.G9.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cuG.prototype={}
B.G8.prototype={}
B.abi.prototype={}
B.awq.prototype={}
B.Z2.prototype={}
var z=a.updateTypes(["ay<~>()","P(jS)","m(jS)","WF(Z)","~()","a_Z(Z)","F(F,jS)","R2(Z)","~(lH)","cn(G8)","ay<jS?>(@)","WD(Z)","WH(Z)","D(jS)","jS(@)","a9<m,@>(jS)","a_Y(Z)","WE(Z)","a0_(Z)","a_X(Z)","a01(Z)","ae8(Z)","ai<jS>()","a02(Z)","aea(Z,F)","a_W(Z)","a9<m,aE>(jS)","cn(Z1)","cn(abi)","ay<cn>(G8)"])
B.cuC.prototype={
$1(d){var x=this.a
x.x=D.aT9
x.y.I(0,D.aT9)},
$S:75}
B.cuD.prototype={
$1(d){var x=this.a
x.x=D.aT8
x.y.I(0,D.aT8)},
$S:75}
B.cuE.prototype={
$1(d){var x=this.a
x.ajx(A.aiq(d.data)).bE(new B.cuB(x),y.b)},
$S:75}
B.cuB.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cuF.prototype={
$1(d){},
$S:75}
B.cuI.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i9J(d.channel))},
$S:17}
B.cuJ.prototype={
$1(d){},
$S:17}
B.cuK.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.itD(w.iceConnectionState)
x.cx=w
if($.hrQ())switch(w.a){case 0:x.cy=D.aTe
break
case 1:x.cy=D.aTf
break
case 3:x.cy=D.aTg
break
case 5:x.cy=D.aTc
break
case 6:x.cy=D.aTd
break
case 7:x.cy=D.aaT
break
default:break}},
$S:109}
B.cuL.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.itE(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.cuM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iEh(w.signalingState)},
$S:109}
B.cuN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iCq(w.connectionState)},
$S:109}
B.cuO.prototype={
$1(d){},
$S:109}
B.cuP.prototype={
$1(d){},
$S:17}
B.fEo.prototype={
$1(d){var x=y.F.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wY.q(x.objectStoreNames,"blobs")
if(!w)C.wV.GE(x,"blobs")},
$S:171}
B.h4_.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xB.fv(this.b)
$.eW.mJ()
this.c.$1(d)},
$S:447}
B.h41.prototype={
$1(d){return this.a.$1(B.ij5(this.b,this.c))},
$S:33}
B.h40.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h3Z.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h4e.prototype={
$1(d){var x=this
return B.hEm(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h4f.prototype={
$1(d){var x=this
return B.hEm(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fH4.prototype={
$1(d){var x=this
return B.cgj(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dfB.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dfy.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgj(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dfA.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgj(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dfz.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgj(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dfD.prototype={
$4(d,e,f,g){var x=null
return A.kd(A.A(A.a([A.aI(x,x,x,x,D.bYE,x,x,x,new B.dfC(d),x,x,x,x,x,x),A.E(A.FV(D.T7,!0,x,!1,C.a4e,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T7,x,g,C.aoZ,0,e,f)},
$C:"$4",
$R:4,
$S:409}
B.dfC.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fJ3.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f0,y.m).w,t=this.a,s=t?C.iW:C.c,r=A.n(28),q=A.p(v,D.bAZ,C.f,v,v,D.b9V,v,v,v,v,D.aoL,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c27,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Da,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atC,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dY(C.dw,new B.fJ1(d),v),1),C.ar,A.E(A.bI(D.h0t,v,new B.fJ2(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HC,v,v,v,v),v)},
$S:63}
B.fJ1.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fJ2.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fxv)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aEQ(v,x))},
$S:0}
B.fJx.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f0,y.m).w,u=x.a,t=u?C.iW:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAP,C.f,w,w,D.bbp,w,w,w,w,D.aoL,w,w,1/0),new A.D(C.Da,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hnq(u,"Organization name",C.Ic,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hnq(u,"Access code",C.mu,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hnq(u,"Member password",C.DW,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.by,A.bI(D.h98,w,new B.fJw(r,q,p,d),A.bp(C.az,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HC,w,w,w,w),w)},
$S:63}
B.fJw.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fxA)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aI2(u,x,w))},
$S:0}
B.cga.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a2(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.w6(p,null).de(0,C.a1m),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CA(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ac(h)
$.an.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.cgg.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgh.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgi.prototype={
$1(d){return d.b},
$S:z+2}
B.cgc.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgd.prototype={
$1(d){return d.b},
$S:z+2}
B.cgb.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cge.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgf.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h4c.prototype={
$1(d){return new B.WD(this.a,null)},
$S:z+11}
B.h4d.prototype={
$1(d){return new B.WH(this.a,this.b,this.c,null)},
$S:z+12}
B.e1V.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e33.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e34.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e35.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e32(x,d))},
$S:2}
B.e32.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e36.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e37.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e38.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e39.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e3a.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e3b.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e3e.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*14)),e)},
$S:97}
B.e3c.prototype={
$1(d){var x=this.a
return x.f?null:x.a0j()},
$S:2}
B.e3d.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mQ(D.Tp))s=C.vv
else s=C.a.Y(s,"video/")||d.mQ(D.nm)?C.rp:D.arW
x=this.b.a
w=y.p
return new A.D(C.jX,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasm(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e1W.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e1X.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgk.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.cgl.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.h5d.prototype={
$2(d,e){return e===this.a},
$S:263}
B.fBm.prototype={
$1(d){return J.k(d)},
$S:15}
B.fHg.prototype={
$1(d){var x=this.b
B.ih0(C.I0.ga89(this.a)).bE(x.gCs(x),y.H)},
$S:131}
B.fHh.prototype={
$1(d){return this.a.dg(0,null)},
$S:131}
B.fHi.prototype={
$0(){return null},
$S:12}
B.cgz.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHj.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.W(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jS(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fLC.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fFs.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fFt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgE.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.h9t.prototype={
$1(d){return new B.a_Y(this.a,null)},
$S:z+16}
B.dfx.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.h_()},
$S:7}
B.dfv.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dfw.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e31.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2w()},
$S:10}
B.e2p.prototype={
$0(){var x=J.bJd(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2q.prototype={
$0(){var x=J.bJd(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1Z.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1Y(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHe(this.c)}},
$S:0}
B.e1Y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2_.prototype={
$0(){var x=J.bJd(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e24.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e23(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHe(this.c)}},
$S:0}
B.e23.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2Q.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e2R.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e2m.prototype={
$1(d){return new B.WE(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e2j.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J2(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WI(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2G(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e22.prototype={
$1(d){this.a.adV(d,"No files selected.","Added")},
$S:447}
B.e2u.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e2t(),A.U(x).k("O<1,m>")))},
$S:0}
B.e2t.prototype={
$1(d){return d.a},
$S:z+2}
B.e28.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y1.cq().d1R(C.a3a,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jX(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ac(j)
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.iq("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iq("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arQ(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cx(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e2N.prototype={
$1(d){return new B.R2(this.a.a.c,this.b,null)},
$S:z+7}
B.e2O.prototype={
$1(d){return new B.a0_(this.a.a.c,this.b,null)},
$S:z+18}
B.e2P.prototype={
$1(d){return new B.a_X(this.a.a.c,this.b,null)},
$S:z+19}
B.e2k.prototype={
$1(d){return new B.R2(this.a.a.c,this.b,null)},
$S:z+7}
B.e2l.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2G.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J2(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8U(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cv7(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("O<1,m>")
r=new A.O(new A.O(t,new B.e2C(p),r),new B.e2D(),r.k("O<aj.E,m>")).c0(0,new B.e2E())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cc(A.eb(new B.e2F(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pP(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WO(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2C.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e2B(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e2B.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2D.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e2E.prototype={
$1(d){return d.length!==0},
$S:3}
B.e2F.prototype={
$1(d){var x=this.a
return new B.a01(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e2H.prototype={
$1(d){return d.a},
$S:z+2}
B.e2I.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2A.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasm(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mQ(D.nm)?C.tQ:C.oa
p=!x||p.mQ(D.nm)?"Play video":"View"
return new A.bQ(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lo,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D6,A.x(A.a([q,o,t,C.aB,B.a00(!1,u,!1,w,p,new B.e2v(d),v),B.a00(!1,u,!1,C.jG,"Share via QR",new B.e2w(d),"Letters/numbers QR code"),B.a00(!1,u,!1,D.a4j,"Send to their Code",new B.e2x(d),"Enter someone else's personal code"),B.a00(!1,u,!1,C.hO,"Download / save",new B.e2y(d),v),C.aj,B.a00(!1,u,!0,C.eq,"Delete",new B.e2z(d),v)],y.p),C.am,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:726}
B.e2v.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e2w.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e2x.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e2y.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e2z.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e25.prototype={
$1(d){return d.a},
$S:z+2}
B.e26.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e27.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8W(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HB(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pP(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e21.prototype={
$1(d){var x=this.a
x.uv(new B.e20(x,d,this.b),"Preparing\u2026")},
$S:447}
B.e20.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WI(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cx(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bI7(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2n.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e2o.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hi3(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2h.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hz(new B.e2d(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e2e(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e2f(s))
case 5:x=8
return A.b(r.b.ic(0,C.Hv,new B.e2g()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a2(t)
if(q.gar(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uu(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2d.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e2a(x,d,e))},
$S:208}
B.e2a.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2e.prototype={
$1(d){return new B.ae8(this.a.a,null)},
$S:z+21}
B.e2f.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e2g.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e2i.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jy(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8K(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4I(B.Jy(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arQ(new B.e2b(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cx(r)){if(B.hi2(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cI(r)
p=o.eT(r,new B.e2c()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2b.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e29(x,d,e))},
$S:208}
B.e29.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2c.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.e2s.prototype={
$1(d){return new B.a02(this.a.a.c,null)},
$S:z+23}
B.e2r.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2x(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2M.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bQ(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lo,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D6,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kJ,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a00(!0,w,!1,C.mu,"My Code",new B.e2J(d),"Your personal code & QR \u2014 others send docs to you"),B.a00(!1,w,!1,D.a4j,"Send to their Code",new B.e2K(this.a,d),"Enter someone else's 5-digit code + letter"),B.a00(!1,w,!1,Y.Ab,"Import backup",new B.e2L(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:726}
B.e2J.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e2K.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bI8()},
$S:0}
B.e2L.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e2Z.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JI(D.T7,x,C.a4e,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d0(C.d.gG(D.T7).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:696}
B.e2X.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e2Y.prototype={
$0(){this.a.aku()
return null},
$S:0}
B.e3_.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*10)),e)},
$S:97}
B.e30.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aea(e,w,v,this.b,x.e,x.cdX(w),new B.e2T(x,w),new B.e2U(x,v,w),new B.e2V(x,w),new B.e2W(x,w),null)},
$S:z+24}
B.e2T.prototype={
$0(){this.a.ahH(this.b)
return null},
$S:0}
B.e2U.prototype={
$0(){var x=this.a
return x.l(new B.e2S(x,this.b,this.c))},
$S:0}
B.e2S.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2V.prototype={
$0(){this.a.P7(this.b)
return null},
$S:0}
B.e2W.prototype={
$0(){this.a.akh(this.b)
return null},
$S:0}
B.dft.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*18)),e)},
$S:97}
B.dfu.prototype={
$3(d,e,f){return A.e9(C.z,f,e,null,null)},
$S:116}
B.dfR.prototype={
$3(d,e,f){return A.d5(A.dT(f,new A.r(0,(1-e)*14)),e)},
$S:97}
B.dfQ.prototype={
$1(d){return this.a.y.$0()},
$S:90}
B.dfN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfO.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfL.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h5(w,C.z,x,new B.dfJ(this.a),C.he,C.dI,!0,x,!1,x,x)
$.aU.U$.push(new B.dfK(this.a))
return C.bK},
$S:148}
B.dfJ.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfH(this.a))
return C.bK},
$S:190}
B.dfH.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfE(x))},
$S:7}
B.dfE.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfK.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfG(x))},
$S:7}
B.dfG.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfM.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfI(this.a))
return C.bK},
$S:190}
B.dfI.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfF(x))},
$S:7}
B.dfF.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfq.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfp(x,d))},
$S:1745}
B.dfp.prototype={
$0(){return this.a.f=this.b===C.w5},
$S:0}
B.dfr.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfo(x,d))},
$S:7}
B.dfo.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dfs.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfn(x,d))},
$S:7}
B.dfn.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dfj.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dfk.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dfl.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dfm.prototype={
$1(d){return this.a.d.O2(0,A.du(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dg3.prototype={
$0(){var x=this.a.a
return B.t6(x.c,x.d)},
$S:1746}
B.dg4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dg5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dg6.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dg7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dg8.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dga.prototype={
$0(){var x=this.a
x.l(new B.dg9(x))},
$S:0}
B.dg9.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qv(0)},
$S:0}
B.dg_.prototype={
$1(d){return this.a.S1(this.b)},
$S:10}
B.dg0.prototype={
$1(d){return this.a.S0(this.b)},
$S:10}
B.dfS.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfT.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfU.prototype={
$1(d){return D.hL0},
$S:z+25}
B.dfZ.prototype={
$2(d,e){if(d)B.WO()},
$S:132}
B.dfV.prototype={
$0(){return this.a.abJ(this.b)},
$S:0}
B.dfW.prototype={
$0(){return this.a.abG(this.b)},
$S:0}
B.dfX.prototype={
$0(){return this.a.ag6(this.b)},
$S:0}
B.dfY.prototype={
$0(){return this.a.a3j(this.b)},
$S:0}
B.dfi.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dg2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qy(),$async$$0)
case 2:u.l(new B.dg1(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dg1.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgG.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nm)},
$S:z+1}
B.cgH.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgF.prototype={
$2(d,e){return this.boA(d,e)},
boA(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WP(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.fLe.prototype={
$1(d){if(d===D.aaS&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fLf.prototype={
$0(){},
$S:12}
B.fLQ.prototype={
bqb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fyn(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hzn(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqb(d,e)},
$S:551}
B.fLP.prototype={
$1(d){var x=this
d.b=new B.fLO(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fLO.prototype={
$1(d){return this.bqa(d)},
bqa(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=d.b
n===$&&A.d()
x=n?7:8
break
case 7:n=s.a.c
m=d.a
x=n!=null?9:11
break
case 9:m===$&&A.d()
x=12
return A.b(B.b2y(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.V.aP(0,n,null)
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
return A.b(B.fyn(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a6(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ac(j)
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8T(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aCa.prototype,"gclF","RB",0)
x(v,"gcmz","Kg",0)
x(v,"gcm3","yU",0)
x(v=B.aGc.prototype,"gcdR","ag4",0)
x(v,"gcdS","a0i",0)
x(v,"gcBL","ajZ",0)
x(v=B.aGf.prototype,"gcdT","a0j",0)
x(v,"gcBM","a3G",0)
x(B.aGd.prototype,"gcdU","ag5",0)
x(B.aC9.prototype,"gcdZ","ce_",4)
x(v=B.aGe.prototype,"gcm4","a1y",0)
x(v,"gcAh","cAi",4)
x(v,"gb5P","aBF",0)
x(v,"gcDg","ako",0)
x(v,"gbUH","Z0",0)
x(v,"gcdY","F7",0)
x(B.aCb.prototype,"gb9E","a3F",0)
x(B.aC8.prototype,"gce0","a0k",0)
x(v=B.aCe.prototype,"gb4w","ckh",4)
x(v,"gcdV","ag8",0)
x(v=B.aCc.prototype,"gczb","a3p",0)
x(v,"gb2o","ag7",0)
w(B.aC7.prototype,"gaA6","aA7",8)
x(v=B.aCd.prototype,"gcoU","ai9",0)
x(v,"gbUa","acx",0)
w(v,"gaA6","aA7",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cuG,B.abi,B.awq,B.aEQ,B.aI2,B.jS,B.adR,B.bzO,B.G8,B.Z2])
w(B.cuH,B.cuG)
w(B.b7I,B.abi)
x(A.fR,[B.cuC,B.cuD,B.cuE,B.cuB,B.cuF,B.cuI,B.cuJ,B.cuK,B.cuL,B.cuM,B.cuN,B.cuO,B.cuP,B.fEo,B.h4_,B.h41,B.h40,B.h4e,B.h4f,B.fH4,B.dfy,B.dfA,B.dfz,B.dfD,B.fJ3,B.fJx,B.cga,B.cgh,B.cgi,B.cgd,B.cgb,B.cge,B.cgf,B.h4c,B.h4d,B.e35,B.e3e,B.e3c,B.e3d,B.fBm,B.fHg,B.fHh,B.cgz,B.fHj,B.fLC,B.fFs,B.fFt,B.cgE,B.h9t,B.dfx,B.dfv,B.e31,B.e1Y,B.e23,B.e2m,B.e22,B.e2t,B.e2N,B.e2O,B.e2P,B.e2k,B.e2C,B.e2B,B.e2D,B.e2E,B.e2F,B.e2H,B.e2I,B.e2A,B.e25,B.e26,B.e21,B.e2n,B.e2e,B.e2c,B.e2s,B.e2M,B.e2Z,B.e3_,B.dft,B.dfu,B.dfR,B.dfQ,B.dfL,B.dfJ,B.dfH,B.dfK,B.dfM,B.dfI,B.dfq,B.dfr,B.dfs,B.dfm,B.dg_,B.dg0,B.dfU,B.cgG,B.cgH,B.fLe,B.fLP,B.fLO])
w(B.b7J,B.awq)
x(A.hS,[B.h3Z,B.dfB,B.dfC,B.fJ1,B.fJ2,B.fJw,B.e1V,B.e33,B.e34,B.e32,B.e36,B.e37,B.e38,B.e39,B.e3a,B.e3b,B.e1W,B.e1X,B.fHi,B.dfw,B.e2p,B.e2q,B.e1Z,B.e2_,B.e24,B.e2Q,B.e2R,B.e2j,B.e2u,B.e28,B.e2l,B.e2G,B.e2v,B.e2w,B.e2x,B.e2y,B.e2z,B.e27,B.e20,B.e2o,B.e2h,B.e2a,B.e2f,B.e2g,B.e2i,B.e29,B.e2r,B.e2J,B.e2K,B.e2L,B.e2X,B.e2Y,B.e2T,B.e2U,B.e2S,B.e2V,B.e2W,B.dfN,B.dfO,B.dfP,B.dfE,B.dfG,B.dfF,B.dfp,B.dfo,B.dfn,B.dfj,B.dfk,B.dfl,B.dg3,B.dg4,B.dg5,B.dg6,B.dg7,B.dg8,B.dga,B.dg9,B.dfS,B.dfT,B.dfV,B.dfW,B.dfX,B.dfY,B.dfi,B.dg2,B.dg1,B.fLf])
x(A.kQ,[B.ae9,B.OF,B.abj,B.PM,B.Z1,B.PL,B.G9])
x(A.af,[B.a_Z,B.WD,B.WH,B.WE,B.a_Y,B.WF,B.a0_,B.a_X,B.R2,B.a01,B.a_W,B.a02])
x(A.ah,[B.aCa,B.aGc,B.aGf,B.aGd,B.aC9,B.aGe,B.aCb,B.aC8,B.aCe,B.aCc,B.aC7,B.aCd])
x(A.aw,[B.aeD,B.aC6,B.bhh,B.aea,B.ae8,B.bhi])
x(A.ie,[B.cgg,B.cgc,B.cgk,B.cgl,B.h5d,B.e2d,B.e2b,B.e30,B.dfZ,B.cgF,B.fLQ])
x(A.jl,[B.bmO,B.bzq])})()
A.i0(b.typeUniverse,JSON.parse('{"b7I":{"abi":[]},"b7J":{"awq":[]},"a_Z":{"af":[],"w":[]},"aCa":{"ah":["a_Z"]},"aeD":{"aw":[],"w":[]},"WD":{"af":[],"w":[]},"WH":{"af":[],"w":[]},"aGc":{"ah":["WD"]},"aGf":{"ah":["WH"]},"bmO":{"jl":[]},"WE":{"af":[],"w":[]},"aGd":{"ah":["WE"]},"a_Y":{"af":[],"w":[]},"WF":{"af":[],"w":[]},"aea":{"aw":[],"w":[]},"a0_":{"af":[],"w":[]},"a_X":{"af":[],"w":[]},"R2":{"af":[],"w":[]},"a01":{"af":[],"w":[]},"ae8":{"aw":[],"w":[]},"a_W":{"af":[],"w":[]},"a02":{"af":[],"w":[]},"aC9":{"ah":["a_Y"]},"bzq":{"jl":[]},"aGe":{"ah":["WF"]},"aC6":{"aw":[],"w":[]},"bhh":{"aw":[],"w":[]},"aCb":{"ah":["a0_"]},"aC8":{"ah":["a_X"]},"aCe":{"ah":["R2"]},"aCc":{"ah":["a01"]},"aC7":{"ah":["a_W"]},"aCd":{"ah":["a02"]},"bhi":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mA"),k:x("N2()"),o:x("bl<m,m>"),F:x("qV"),g:x("ay<jS?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<m,P>>"),t:x("N<a9<m,@>>"),r:x("N<jS>"),w:x("N<+file,name(m9,m)>"),u:x("N<d0>"),s:x("N<m>"),E:x("N<jl>"),a:x("N<dC>"),p:x("N<w>"),Z:x("N<F>"),G:x("bm"),A:x("cA<ah<af>>"),n:x("ai<jS>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bv<m,m>"),P:x("a9<m,@>"),f:x("a9<@,@>"),m:x("hW"),e:x("iIm"),af:x("Fl"),U:x("jS"),b:x("cn"),C:x("aE"),aK:x("wT"),ab:x("G8"),br:x("awq"),v:x("Z2"),N:x("m"),X:x("bq<H>"),Q:x("lX"),D:x("dC"),aw:x("bg<m>"),cd:x("X<a9<m,@>>"),c7:x("w"),ch:x("c7<ai<jS>>"),aW:x("c7<dC?>"),aY:x("c7<~>"),cx:x("ae9"),b1:x("bn<ai<jS>>"),cf:x("bn<dC?>"),d4:x("bn<~>"),c4:x("aEQ"),bG:x("aI2"),q:x("ky"),B:x("q4<G8>"),c6:x("q4<abj>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ai<jS>?"),aL:x("ai<@>?"),h:x("a9<m,@>?"),l:x("jS?"),R:x("aE?"),c:x("Z2?"),d:x("+answerQr,transfer(m,ay<ai<jS>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,OF,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dC?"),cm:x("adR?"),bk:x("aEQ?"),ag:x("aI2?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8g=new A.ax(C.az,2,C.r,-1)
D.cc5=new A.a8(C.a5,C.a9,C.x,C.a6j,null,null)
D.b9V=new A.o(null,null,null,C.mT,null,D.cc5,C.m)
D.bbp=new A.o(null,null,null,C.mT,null,E.IY,C.m)
D.ahw=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fW3=new A.C("Your team portal",null,C.dv,null,null,null,null,null,null,null,null,null)
D.ha6=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dqU=x([D.fW3,C.aj,D.ha6],y.p)
D.bAF=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqU,null)
D.heF=new A.C("Create your organization",null,C.fP,null,null,null,null,null,null,null,null,null)
D.h_F=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dJ9=x([D.heF,C.aj,D.h_F],y.p)
D.bAP=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ9,null)
D.haL=new A.C("Team Member sign-in",null,C.fP,null,null,null,null,null,null,null,null,null)
D.h3F=new A.C("Enter the access code and password from your organization.",null,H.FB,null,null,null,null,null,null,null,null,null)
D.dGH=x([D.haL,C.aj,D.h3F],y.p)
D.bAZ=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGH,null)
D.bHh=new A.R(16,10,16,28)
D.bHq=new A.R(16,14,16,4)
D.bIH=new A.R(20,0,20,16)
D.bJd=new A.R(20,8,20,16)
D.aoL=new A.R(24,22,24,20)
D.a4j=new A.a_(63394,"MaterialIcons",!1)
D.arW=new A.a_(63515,"MaterialIcons",!1)
D.bWA=new A.a_(983813,"MaterialIcons",!1)
D.bTI=new A.a_(62867,"MaterialIcons",!1)
D.bXy=new A.ae(D.bTI,44,C.c,null,null,null)
D.bYE=new A.ae(C.kk,null,C.ab,null,null,null)
D.c_2=new A.ae(C.jH,18,null,null,null,null)
D.c0V=new A.ae(D.a4j,26,C.c,null,null,null)
D.c1w=new A.ae(C.DM,null,null,null,null,null)
D.c27=new A.ae(C.DT,null,null,null,null,null)
D.c3k=new A.ae(A1.a4u,null,null,null,null,null)
D.c3G=new A.ae(C.i2,16,null,null,null,null)
D.c7p=new A.ae(C.tP,16,null,null,null,null)
D.bXQ=new A.ae(C.mu,null,null,null,null,null)
D.c8h=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2F=new A.ae(C.Ic,null,null,null,null,null)
D.c8m=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2F,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYb=new A.ae(C.DW,null,null,null,null,null)
D.c8x=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYA=x([C.fz,C.b5,C.az],y.O)
D.ce2=new A.a8(C.ay,C.aD,C.x,D.cYA,null,null)
D.cXX=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T7=x([C.fz,C.az],y.O)
D.Tp=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nm=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAp=x([C.n2,C.az],y.O)
D.ew_={iceServers:0}
D.aNE={urls:0}
D.dN4=new A.bl(D.aNE,["stun:stun.l.google.com:19302"],y.o)
D.dN3=new A.bl(D.aNE,["stun:stun1.l.google.com:19302"],y.o)
D.dfv=x([D.dN4,D.dN3],A.as("N<a9<m,m>>"))
D.dMa=new A.bl(D.ew_,[D.dfv],A.as("bl<m,@>"))
D.K2=new B.OF(0,"lanDirect")
D.UN=new B.OF(1,"cloudStash")
D.e_2=new B.OF(2,"inlineInstant")
D.UO=new B.OF(3,"webrtcLink")
D.AX=new B.OF(4,"videoCloud")
D.ha5=new A.C("Receive file",null,C.nx,null,null,null,null,null,null,null,null,null)
D.cNv=x([E.atL,C.aa,D.ha5],y.p)
D.fo_=new A.c1(C.aK,C.ba,C.h,C.l,null,C.p,null,0,D.cNv,null)
D.eDs=new A.D(C.cq,D.fo_,null)
D.fMh=new A.G(!0,C.c,null,null,null,null,null,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A0.Js,null,null,null)
D.fWG=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fMh,null,C.K,null,null,null,null,null,null,null)
D.eCC=new A.D(C.zw,D.fWG,null)
D.bg_=new A.cm(C.z,null,null,D.eCC,null)
D.eJK=new A.cP(0,null,0,28,null,null,D.bg_,null)
D.eK3=new B.abj(0,"RTCDataChannelConnecting")
D.aT8=new B.abj(1,"RTCDataChannelOpen")
D.aT9=new B.abj(3,"RTCDataChannelClosed")
D.eK4=new B.G9(0,"RTCIceConnectionStateNew")
D.eK5=new B.G9(1,"RTCIceConnectionStateChecking")
D.eK6=new B.G9(2,"RTCIceConnectionStateCompleted")
D.eK7=new B.G9(3,"RTCIceConnectionStateConnected")
D.eK8=new B.G9(4,"RTCIceConnectionStateCount")
D.eK9=new B.G9(5,"RTCIceConnectionStateFailed")
D.eKa=new B.G9(6,"RTCIceConnectionStateDisconnected")
D.aTa=new B.G9(7,"RTCIceConnectionStateClosed")
D.aTb=new B.Z1(0,"RTCIceGatheringStateNew")
D.eKb=new B.Z1(1,"RTCIceGatheringStateGathering")
D.aaS=new B.Z1(2,"RTCIceGatheringStateComplete")
D.aaT=new B.PL(0,"RTCPeerConnectionStateClosed")
D.aTc=new B.PL(1,"RTCPeerConnectionStateFailed")
D.aTd=new B.PL(2,"RTCPeerConnectionStateDisconnected")
D.aTe=new B.PL(3,"RTCPeerConnectionStateNew")
D.aTf=new B.PL(4,"RTCPeerConnectionStateConnecting")
D.aTg=new B.PL(5,"RTCPeerConnectionStateConnected")
D.eKc=new B.PM(0,"RTCSignalingStateStable")
D.eKd=new B.PM(1,"RTCSignalingStateHaveLocalOffer")
D.eKe=new B.PM(2,"RTCSignalingStateHaveRemoteOffer")
D.eKf=new B.PM(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKg=new B.PM(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTh=new B.PM(5,"RTCSignalingStateClosed")
D.ft9=new A.av(160,48)
D.bhf=new A.fr(2,null,null,null,null,C.az,null,null,null,null)
D.fuH=new A.a5(16,16,D.bhf,null)
D.h__=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fwa=new A.b2(D.h__,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6J=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fwe=new A.b2(D.h6J,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfJ=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwl=new A.b2(D.hfJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZz=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwL=new A.b2(D.fZz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haX=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWs=new A.b2(D.haX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hcq=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fxe=new A.b2(D.hcq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hhd=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxv=new A.b2(D.hhd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hf8=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxA=new A.b2(D.hf8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgo=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fyn=new A.b2(D.hgo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fY9=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new A.b2(D.fY9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8E=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fzf=new A.b2(D.h8E,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1k=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new A.b2(D.h1k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hhi=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzQ=new A.b2(D.hhi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYp=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzW=new A.b2(D.fYp,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fX2=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fAa=new A.b2(D.fX2,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTH=new A.C("NGMY DOC SHARE",null,C.aXS,null,null,null,null,null,null,null,null,null)
D.fV8=new A.C("Show this to sender",null,C.iU,null,null,null,null,null,null,null,null,null)
D.fWb=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h05=new A.C("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h0t=new A.C("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h1v=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h22=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4W=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7M=new A.C("Send to their Doc Share",null,C.mM,null,null,null,null,null,null,null,null,null)
D.h85=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8q=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h91=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h98=new A.C("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h9x=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fi,null,null,null,null,null,null,null,null,null)
D.hcW=new A.C("Share files & videos\nwith a scan.",null,C.aXV,null,null,null,null,null,null,null,null,null)
D.hdf=new A.C("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hL0=new B.a_W(null)
D.aej=new B.ae9(0,"docShare")
D.aek=new B.ae9(1,"gate")
D.XR=new B.ae9(2,"gateNoIndividual")})();(function staticFields(){$.aQU=null
$.fvU=function(){var x=y.N
return A.S(x,x)}()
$.Hn=A.S(y.N,y.D)
$.aie=A.S(y.N,A.as("m9"))
$.Su=A.S(y.N,y.D)
$.fwA=A.S(y.N,A.as("adR"))
$.cgy=A.S(y.S,A.as("bzO"))
$.hzm=1
$.ipe=null
$.ipd=null
$.igj=null
$.hnC=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iIR","hSj",()=>new B.cuH())
x($,"iGL","hrQ",()=>C.a.q(A.bx(A.bx(A.bx(A.HT(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["soBK/pJ5pCy5G6QNGab4nH+/ZEM="]=a.current})($__dart_deferred_initializers__);