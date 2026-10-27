((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cdM:function cdM(){},
hnY(d){var x=null,w=new B.b0w(d,D.dTV,new A.oS(x,x,y.c6),new A.oS(x,x,y.B))
w.bsd(d)
return w},
b0w:function b0w(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cdH:function cdH(d){this.a=d},
cdI:function cdI(d){this.a=d},
cdJ:function cdJ(d){this.a=d},
cdG:function cdG(d){this.a=d},
cdK:function cdK(d){this.a=d},
hnZ(d,e){var x=y.N
x=new B.b0x(d,e,A.S(x,y.e),A.S(x,y.z))
x.bse(d,e)
return x},
b0x:function b0x(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cdN:function cdN(d){this.a=d},
cdO:function cdO(d){this.a=d},
cdP:function cdP(d){this.a=d},
cdQ:function cdQ(d){this.a=d},
cdR:function cdR(d){this.a=d},
cdS:function cdS(d){this.a=d},
cdT:function cdT(d){this.a=d},
cdU:function cdU(d){this.a=d},
fFT(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xr.Kn(x,"ngmy_doc_share_v1",new B.f49(),1)},
hur(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.B3(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
Pk(d,e){return B.hJ3(d,e)},
hJ3(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKw
x=7
return A.b(o==null?$.aKw=B.fFT():o,$async$Pk)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mi(s,"blobs","readwrite")
C.iu.lM(J.mg(q,"blobs"),r,d)
x=8
return A.b(J.p_(q),$async$Pk)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
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
return A.i($async$Pk,w)},
Pj(d){return B.hJ2(d)},
hJ2(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKw
x=7
return A.b(o==null?$.aKw=B.fFT():o,$async$Pj)
case 7:s=f
r=J.mi(s,"blobs","readonly")
x=8
return A.b(C.iu.yx(J.mg(r,"blobs"),d),$async$Pj)
case 8:q=f
x=9
return A.b(J.p_(r),$async$Pj)
case 9:o=B.hur(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
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
return A.i($async$Pj,w)},
aes(d){return B.hJ1(d)},
hJ1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aes=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKw
x=7
return A.b(p==null?$.aKw=B.fFT():p,$async$aes)
case 7:s=f
r=J.mi(s,"blobs","readwrite")
C.iu.Et(J.mg(r,"blobs"),d)
x=8
return A.b(J.p_(r),$async$aes)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aes,w)},
f49:function f49(){},
hwE(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkF(w,v))}return u},
h47(d,e){var x,w={},v=A.aSE("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.foY(w,v,e)
C.uP.xq(v,"change",new B.fp_(w,v,!1))
C.uP.xq(v,"cancel",new B.foZ(w))
$.eI.lV()
v.click()
A.bM(C.abT,new B.foX(w),y.H)},
foY:function foY(d,e,f){this.a=d
this.b=e
this.c=f},
fp_:function fp_(d,e,f){this.a=d
this.b=e
this.c=f},
foZ:function foZ(d){this.a=d},
foX:function foX(d){this.a=d},
BN(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BN=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRM()?3:4
break
case 3:x=5
return A.b(B.h_m(e,d,s,!0,!1,f,g,h,!1,i),$async$BN)
case 5:x=1
break
case 4:x=6
return A.b(B.OZ(d,s,f,g,h,i),$async$BN)
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
return A.b(B.GT(s,d),$async$BN)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f_H(s,d),$async$BN)
case 14:x=12
return A.b(r.h_m(q,p,o,n,m,l,k,j,a1,i),$async$BN)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cr(A.eH(new B.fpc(s,i,d,f,g,h),!1,null,y.H)),$async$BN)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cr(A.eH(new B.fpd(s,i,d,f,g,h),!1,null,y.H)),$async$BN)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BN,w)},
OZ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OZ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWi(e),$async$OZ)
case 3:u=k
x=4
return A.b(B.amt(d,e,!1),$async$OZ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GT(e,d),$async$OZ)
case 7:if(k){v=D.a5i
x=1
break}x=8
return A.b(B.ST(e),$async$OZ)
case 8:v=t?D.RJ:D.a5j
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aWg(d,e)){v=D.a5i
x=1
break}x=11
return A.b(B.ST(e),$async$OZ)
case 11:v=t?D.RJ:D.a5j
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fB8(d,e)){v=D.a5i
x=1
break}x=14
return A.b(B.ST(e),$async$OZ)
case 14:v=D.RJ
x=1
break
case 13:v=t?D.RJ:D.a5j
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OZ,w)},
f_H(d,e){var x=0,w=A.j(y.y),v
var $async$f_H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aWg(e,d)){v=!1
x=1
break}x=3
return A.b(B.aWi(d),$async$f_H)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_H,w)},
h_m(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cr(A.eH(new B.f5s(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fVB(d,e,f,g,h,i,j){return new B.X0(e,j,d,g,h,i,f,null)},
f7o(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f7o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.au()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
x=3
return A.b(A.c1(C.K,null,new B.f7r(A.L(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f7o)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f7o,w)},
f7T(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f7T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.au()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
r=new A.ap(C.as,u)
x=3
return A.b(A.c1(C.K,null,new B.f7V(A.L(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f7T)
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
return A.i($async$f7T,w)},
fG0(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bm(x,new A.b2(4,A.m(16),C.V),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fhx(d,e){var x=0,w=A.j(y.H),v
var $async$fhx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ST(e),$async$fhx)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fhx,w)},
fpc:function fpc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fpd:function fpd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9S:function a9S(d,e){this.a=d
this.b=e},
f5s:function f5s(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
X0:function X0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awm:function awm(){this.c=this.a=this.d=null},
cX3:function cX3(d,e){this.a=d
this.b=e},
cX0:function cX0(d){this.a=d},
cX2:function cX2(d){this.a=d},
cX1:function cX1(d){this.a=d},
cX5:function cX5(){},
cX4:function cX4(d){this.a=d},
aaj:function aaj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayQ:function ayQ(d,e){this.a=d
this.b=e},
aBY:function aBY(d,e,f){this.a=d
this.b=e
this.c=f},
f7r:function f7r(d,e,f){this.a=d
this.b=e
this.c=f},
f7p:function f7p(d){this.a=d},
f7q:function f7q(d,e,f){this.a=d
this.b=e
this.c=f},
f7V:function f7V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7U:function f7U(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2t(d,e,f,g,h){return B.hiV(d,e,f,g,h)},
hiV(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c2t=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.di(d,new B.c2u(s,e,h,g,f,q),y.g),y.l),$async$c2t)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2t,w)},
aWd(d,e,f,g,h){return B.hiW(d,e,f,g,h)},
hiW(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aWd=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arH("GET",d)
o=A.fxF()
if(o==null)o=new A.K7(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cJ(0,C.Dx),$async$aWd)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bd(),$async$aWd)
case 8:q=j
if(J.a9(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.As(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
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
return A.i($async$aWd,w)},
aWc(d){return B.hiT(d)},
hiT(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aWc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uz(d,null).cJ(0,C.ni),$async$aWc)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aD(0,A.ip(A.io(p.e)).c6(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
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
return A.i($async$aWc,w)},
c2s(d){return B.hiU(d)},
hiU(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c2s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uz(d,null).cJ(0,C.oY),$async$c2s)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ip(A.io(q.e)).c6(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a5(o)
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
return A.i($async$c2s,w)},
c2u:function c2u(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j9:function j9(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
GR(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ae("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hj0(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GR(C.a.aW(u,v.length))}return null},
hj1(d){var x=B.GR(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hiX(){var x,w=$.oY(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fM(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a4F(d){return B.hiY(d)},
hiY(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eT(d,null,!1,C.bD),$async$a4F)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
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
return A.i($async$a4F,w)},
a4G(d,e){return B.hiZ(d,e)},
hiZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4G=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hs(d,e,!1,!1,C.cz,null),$async$a4G)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
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
return A.i($async$a4G,w)},
Ar(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ar=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ax(),$async$Ar)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GR(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4H(r),$async$Ar)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4F("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ar)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GR(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ap("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ar)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hiX()
x=14
return A.b(B.a4H(m),$async$Ar)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a4().ab()
x=15
return A.b(B.a4G("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ar)
case 15:k=f
x=16
return A.b(B.a4G("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ar)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ap("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ar)
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
return A.i($async$Ar,w)},
a4H(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GR(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4F("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4H)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
a4I(d,e,f,g){return B.hj2(d,e,f,g)},
hj2(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4I=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GR(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4H(r),$async$a4I)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c2A())>1048576||g.bg(d,new B.c2B())){v=B.Dc(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
x=4
return A.b(B.a4T("myCode",d,a0),$async$a4I)
case 4:u=a3
try{t=C.Q.aD(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ci(s)||J.a9(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.a9(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Dc(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWl(u,g.gI(d),a0),$async$a4I)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oY().aB(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.di(d,new B.c2C(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aWe(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],i,y.z),q),$async$a4I)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4I,w)},
Dc(d,e,f,g,h){return B.hj_(d,e,f,g,h)},
hj_(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dc=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$Dc)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cA(a6)
k=l.cI(a6,0,new B.c2w())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oY().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cB.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aJ(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GV(a9,q)
a0=new A.II(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Dc)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.a9(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.or(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a89(a1.a,a4,"media",a1.d,a2).w5(m,n,new A.Cy(!0,q.c)),$async$Dc)
case 12:J.cg(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$Dc)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMW(r),$async$Dc)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.di(a6,new B.c2x(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aWe(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],e,d),a8),$async$Dc)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMW(r),$async$Dc)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dc,w)},
aWe(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aWe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4F(t),$async$aWe)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c2v(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4G(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWe,w)},
LE(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$LE=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4F("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$LE)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.Z(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aWf(k,a0),$async$LE)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aWk(h),$async$LE)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.T_(g,a0),$async$LE)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.a9(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.z(new A.a4(r,new B.c2y(),q),n)
d=A.z(new A.a4(r,new B.c2z(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.de(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a4G("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$LE)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$LE,w)},
aWf(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aWf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aQ(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hMP(k,j)
C.d.v(s,i)
x=5
return A.b(B.BL(l,m,"Received via My Code",t,e,i),$async$aWf)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMW(s),$async$aWf)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWf,w)},
c2A:function c2A(){},
c2B:function c2B(){},
c2C:function c2C(){},
c2w:function c2w(){},
c2x:function c2x(){},
c2v:function c2v(){},
c2y:function c2y(){},
c2z:function c2z(){},
fp9(d,e){var x=0,w=A.j(y.H)
var $async$fp9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cr(A.eH(new B.fpa(e),!1,null,y.H)),$async$fp9)
case 2:return A.h(null,w)}})
return A.i($async$fp9,w)},
bza(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bza=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cr(A.eH(new B.fpb(g,e,f),!1,null,y.y)),$async$bza)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bza,w)},
fpa:function fpa(d){this.a=d},
fpb:function fpb(d,e,f){this.a=d
this.b=e
this.c=f},
SQ:function SQ(d,e){this.c=d
this.a=e},
aAc:function aAc(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dGD:function dGD(d,e){this.a=d
this.b=e},
SU:function SU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAf:function aAf(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dHM:function dHM(d){this.a=d},
dHN:function dHN(d){this.a=d},
dHO:function dHO(d){this.a=d},
dHL:function dHL(d,e){this.a=d
this.b=e},
dHP:function dHP(d){this.a=d},
dHQ:function dHQ(d){this.a=d},
dHR:function dHR(d,e){this.a=d
this.b=e},
dHS:function dHS(d,e){this.a=d
this.b=e},
dHT:function dHT(d,e){this.a=d
this.b=e},
dHU:function dHU(d){this.a=d},
dHX:function dHX(){},
dHV:function dHV(d){this.a=d},
dHW:function dHW(d,e){this.a=d
this.b=e},
bf1:function bf1(){},
SR:function SR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAd:function aAd(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dGE:function dGE(d){this.a=d},
dGF:function dGF(d){this.a=d},
fB9(d){var x=d.hC
if(x>=0)return C.o.N(x)
return 10},
hj4(d){var x=d.kb
if(x>=0)return x
return 4.99},
hj3(d){var x=d.kW,w=y.N
w=x.iE(x,new B.c2E(),w,w)
return w},
fQK(d){var x=d.kc,w=y.N
w=x.iE(x,new B.c2F(),w,w)
return w},
aWi(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aWi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$aWi)
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
return A.i($async$aWi,w)},
a4K(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$a4K)
case 4:x=3
return A.b(g.ap("String","ngmy_doc_share_path_"+u,e),$async$a4K)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4K,w)},
ST(d){var x=0,w=A.j(y.H),v,u
var $async$ST=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$ST)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$ST)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ST,w)},
fB8(d,e){var x,w,v
if(B.hj4(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hj3(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.c8(new A.Q(Date.now(),0,!1))},
aWg(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fQK(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.c8(new A.Q(Date.now(),0,!1))},
fQL(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fQK(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.c8(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.m(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a4().ab())
d.kc=w},
amu(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ax(),$async$amu)
case 7:s=f
r=A.t(p)
r=A.eW(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amu,w)},
amv(d){var x=0,w=A.j(y.H),v,u,t
var $async$amv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amu(d),$async$amv)
case 3:u=f
x=5
return A.b(A.ax(),$async$amv)
case 5:x=4
return A.b(f.ap("Int","ngmy_doc_share_usage_"+t,u+1),$async$amv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amv,w)},
amt(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fB9(d)
if(u<=0){v=!1
x=1
break}if(B.fB8(d,e)){v=!1
x=1
break}x=3
return A.b(B.amu(e),$async$amt)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amt,w)},
aWh(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aWh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GT(e,d),$async$aWh)
case 3:if(g){v=-1
x=1
break}u=B.fB9(d)
if(u<=0){v=-1
x=1
break}if(B.fB8(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amu(e),$async$aWh)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWh,w)},
c2H(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GT(e,d),$async$c2H)
case 3:if(h){v=!1
x=1
break}v=B.amt(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2H,w)},
c2G(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c2G=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c2H(d,u,i.gRM()),$async$c2G)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2G,w)},
a4J(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4J=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRM()){v=!0
x=1
break}if(B.aWg(d,u)){v=!0
x=1
break}x=5
return A.b(A.l0(u,C.Pk),$async$a4J)
case 5:x=k?3:4
break
case 3:B.fQL(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4J)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kG(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pk,"Doc Share for Organizations"),$async$a4J)
case 7:if(!k){v=!1
x=1
break}B.fQL(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4J)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4J,w)},
c2E:function c2E(){},
c2F:function c2F(){},
fpJ(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fpJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fpJ)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eXt.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hD([r],e.c))
s.toString
$.eXt.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpJ,w)},
hOY(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eXt.bm($.eXt,new B.fpL(d))},
fpL:function fpL(d){this.a=d},
eYO(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eYO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hD([d],f))
s.toString
u=A.mL(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jf,null,y.H),$async$eYO)
case 3:C.yF.f0(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lV()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYO,w)},
adl(d,e,f){var x=0,w=A.j(y.H),v
var $async$adl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eY_.m(0,d,new B.a9z(A.bj(e,!0,v)))
x=3
return A.b(A.ax(),$async$adl)
case 3:x=2
return A.b(h.ap("String",d+"_manifest",C.Q.al(A.E(["parts",e,"size",f],v,y.C),null)),$async$adl)
case 2:return A.h(null,w)}})
return A.i($async$adl,w)},
adf(d){return B.hyl(d)},
hyl(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$adf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eY_.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ax(),$async$adf)
case 3:u=j.aS(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aD(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b4(s,new B.f1m(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.a9z(r)
$.eY_.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$adf,w)},
OP(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EM.m(0,d,u)
x=3
return A.b(B.Pk(d,u),$async$OP)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
aKQ(d){return B.hyj(d)},
hyj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EM.h(0,d)
if(n!=null&&!C.aE.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pj(d),$async$aKQ)
case 3:p=f
if(p!=null&&!C.aE.gah(p)){$.EM.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ax(),$async$aKQ)
case 4:s=f
r=A.aS(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aF(r)
x=!J.ci(q)?9:10
break
case 9:B.OP(d,q)
x=11
return A.b(J.hC(s,d),$async$aKQ)
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
return A.i($async$aKQ,w)},
huM(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.cl(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.cl(A.B3(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
return A.f7(null,y.K)},
a_q(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.be($.bt,y.cf)
t=new A.bO(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.f5E(r,t),!1,s)
A.fB(r,"error",new B.f5F(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.JK,new B.f5G())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_q,w)},
aL9(d,e,f){return B.hAy(d,e,f)},
hAy(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aL9=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_q(i),$async$aL9)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.a9(j)
x=11
return A.b(B.Pk(o,p),$async$aL9)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cg(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.a9(j)===0){x=1
break}x=12
return A.b(B.adl(k,j,s),$async$aL9)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a5(h)
$.al.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aL9,w)},
aL8(d,e,f){return B.hAx(d,e,f)},
hAx(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aL8=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aL9(d,e,f),$async$aL8)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_q(f),$async$aL8)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EM.m(0,s,r)
$.P5.m(0,s,r)
x=11
return A.b(B.OP(s,r),$async$aL8)
case 11:q=h
if(!q)$.al.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a5(m)
$.al.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aL8,w)},
As(d,e,f,g,h,i){return B.hjd(d,e,f,g,h,i)},
hjd(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$As=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cB.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j9(p,q,o,n,new A.Q(Date.now(),0,!1).a4().ab(),a0,f,B.aWo(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OP(s,d),$async$As)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ax(),$async$As)
case 10:r=a2
x=11
return A.b(r.ap("String",s,C.cO.gcs().aF(d)),$async$As)
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
return A.b(B.zy(e),$async$As)
case 12:j=a2
J.cg(j,m)
x=13
return A.b(B.EW(e,j),$async$As)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$As,w)},
SV(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SV=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zy(d),$async$SV)
case 3:t=a1
s=e.length,r=J.cA(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cB.aB(99999)
n=p.b
l=o.type
l.toString
k=B.fQN(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a4().ab()
i=new B.j9(m,n,k,l,j,"From folder",null,B.aWo(),null)
$.adO.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_q(o),$async$SV)
case 7:g=a1
x=g!=null&&!C.aE.gah(g)?8:10
break
case 8:$.EM.m(0,h,g)
$.P5.m(0,h,g)
B.OP(h,g)
x=9
break
case 10:x=11
return A.b(B.aL8(d,m,o),$async$SV)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EW(d,t),$async$SV)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SV,w)},
fBd(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fBd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fQN(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GU(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aE.gah(s)){v=B.As(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBd,w)},
GU(d,e,f,g,h,i){return B.hjc(d,e,f,g,h,i)},
hjc(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GU=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cB.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.II(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GU)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ci(m)){x=6
break}J.fT(n,m)
o+=J.a9(m)
case 9:if(!(J.a9(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PS(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kp(0,1048576,J.a9(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pk(k,l),$async$GU)
case 11:J.cg(q,k);++p
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
return A.b(j.a9(0),$async$GU)
case 12:x=s.pop()
break
case 5:x=J.a9(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pk(k,new Uint8Array(A.cl(n))),$async$GU)
case 15:J.cg(q,k)
case 14:if(J.a9(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adl(r,q,g),$async$GU)
case 16:f=new B.j9(i,a1,a0,g,new A.Q(Date.now(),0,!1).a4().ab(),a2,null,B.aWo(),null)
x=17
return A.b(B.zy(d),$async$GU)
case 17:e=a6
J.cg(e,f)
x=18
return A.b(B.EW(d,e),$async$GU)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GU,w)},
SX(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SX=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adO.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_q(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.adf(s),$async$SX)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pj(u[o]),$async$SX)
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
v=A.B3(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.P5.h(0,s)
if(i==null)i=$.EM.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qN(d,e),$async$SX)
case 12:i=a0
if(i!=null&&!C.aE.gah(i))$.P5.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.B3(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SX,w)},
fQN(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gai(x):""
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
qN(d,e){return B.hje(d,e)},
hje(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.P5.h(0,f)
if(e==null)e=$.EM.h(0,f)
if(e!=null&&!C.aE.gah(e)){v=e
x=1
break}s=$.adO.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_q(s),$async$qN)
case 9:r=a3
if(r!=null&&!C.aE.gah(r)){$.EM.m(0,f,r)
$.P5.m(0,f,r)
B.OP(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a5(d)
$.al.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.adf(f),$async$qN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ava(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pj(g[l]),$async$qN)
case 16:k=a3
if(k!=null&&!C.aE.gah(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.al_()
if(!C.aE.gah(r)){$.EM.m(0,f,r)
$.P5.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKQ(f),$async$qN)
case 17:j=a3
if(j!=null&&!C.aE.gah(j)){$.P5.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SX(a0,a1,0,g),$async$qN)
case 20:i=a3
if(i!=null&&!C.aE.gah(i)){h=new Uint8Array(A.cl(i))
$.EM.m(0,f,h)
$.P5.m(0,f,h)
B.OP(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qN,w)},
hjh(d){var x,w,v=$.adO.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hji(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hD([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hjf(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amB(d,e,f,g,h){return B.hjg(d,e,f,g,h)},
hjg(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amB=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adO.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_q(s),$async$amB)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qN(g,e),$async$amB)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.a9(r)/2|0,J.a9(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w5(h,r,new A.Cy(!0,e.c)),$async$amB)
case 12:f.$2(J.a9(r),J.a9(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
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
return A.i($async$amB,w)},
fQP(d,e,f,g,h){var x,w,v,u,t=$.fQO
$.fQO=t+1
x=Date.now()
w=""+1000*x+"_"+C.cB.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2S.m(0,t,new B.brh(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ava(u)))
return t},
fBe(d){var x=0,w=A.j(y.H)
var $async$fBe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fBe,w)},
GV(d,e){var $async$GV=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adO.h(0,h)
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
return A.pA(B.SX(d,e,p,o<q?o:q),$async$GV,w)
case 8:n=a1
x=n!=null&&!C.aE.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pA(A.El(n),$async$GV,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pA(B.adf("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GV,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pA(B.Pj(h[l]),$async$GV,w)
case 18:k=a1
x=k!=null&&!C.aE.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pA(A.El(k),$async$GV,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pA(B.qN(d,e),$async$GV,w)
case 22:j=a1
x=j!=null&&!C.aE.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pA(A.El(A.B3(j,p,o<i?o:i)),$async$GV,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pA(null,0,w)
case 2:return A.pA(t.at(-1),1,w)}})
var x=0,w=A.fZg($async$GV,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h03(w)},
aWq(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2S.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a29(),$async$aWq)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWq,w)},
SW(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2S.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a29(),$async$SW)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adl(r.c,u,r.z),$async$SW)
case 4:t=new B.j9(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a4().ab(),r.f,r.r,B.aWo(),null)
u=r.a
x=5
return A.b(B.zy(u),$async$SW)
case 5:s=f
J.cg(s,t)
x=6
return A.b(B.EW(u,s),$async$SW)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SW,w)},
a4Q(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2S.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aes(u[s]),$async$a4Q)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a4Q,w)},
c2U(d,e,f){var x=0,w=A.j(y.H)
var $async$c2U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwh(d,e,f),$async$c2U)
case 2:return A.h(null,w)}})
return A.i($async$c2U,w)},
c2V(d,e,f){var x=0,w=A.j(y.H)
var $async$c2V=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwi(d,e,f),$async$c2V)
case 2:return A.h(null,w)}})
return A.i($async$c2V,w)},
Dd(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Dd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zy(d),$async$Dd)
case 2:p=g
J.n1(p,new B.c2T(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EM.W(0,v)
$.adO.W(0,e)
x=3
return A.b(B.adf(v),$async$Dd)
case 3:u=g
$.eY_.W(0,v)
x=4
return A.b(A.ax(),$async$Dd)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Dd)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Dd)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aes(s[q]),$async$Dd)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aes(v),$async$Dd)
case 13:x=14
return A.b(B.EW(d,p),$async$Dd)
case 14:return A.h(null,w)}})
return A.i($async$Dd,w)},
aWp(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qN(d,e),$async$aWp)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eYO(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWp,w)},
zy(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$zy)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aD(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f5H(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zy,w)},
EW(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$EW)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f9B(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.ap("String","ngmy_doc_share_index_v1_"+u,C.Q.al(t,null)),$async$EW)
case 3:return A.h(null,w)}})
return A.i($async$EW,w)},
bwh(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zy(d),$async$bwh)
case 3:u=h
t=J.cA(u)
s=t.bi(u,new B.f4l(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).aA1(f))
x=4
return A.b(B.EW(d,u),$async$bwh)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwh,w)},
bwi(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zy(d),$async$bwi)
case 3:u=h
t=J.cA(u)
s=t.bi(u,new B.f4m(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyZ(f))
x=4
return A.b(B.EW(d,u),$async$bwi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwi,w)},
a9z:function a9z(d){this.a=d},
f1m:function f1m(){},
f5E:function f5E(d,e){this.a=d
this.b=e},
f5F:function f5F(d){this.a=d},
f5G:function f5G(){},
c2T:function c2T(d){this.a=d},
brh:function brh(d,e,f,g,h,i,j,k,l){var _=this
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
f5H:function f5H(){},
f9B:function f9B(){},
f4l:function f4l(d){this.a=d},
f4m:function f4m(d){this.a=d},
a4R(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bg(d,new B.c2Y())?3:4
break
case 3:x=5
return A.b(B.aWr(d,e),$async$a4R)
case 5:u=g
if(u!=null){t=u.c
B.LG(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gK(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aWm(s),$async$a4R)
case 10:case 9:if(g){v=new A.Oc(1,D.OY,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SY(d,e),$async$a4R)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.T2(!0,!0,d,e),$async$a4R)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.LG(d,D.xX,e,t)
v=new A.Oc(p,D.xX,t)
x=1
break}v=B.c2X(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4R,w)},
SY(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4T(null,d,e),$async$SY)
case 3:p=g
try{u=C.Q.aD(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.a9(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWl(p,d.length,e),$async$SY)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2V(e,C.d.gK(d).a,r.b),$async$SY)
case 7:case 6:q=r.a
x=8
return A.b(B.LG(d,D.OY,e,q),$async$SY)
case 8:v=new A.Oc(d.length,D.OY,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
SZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.m_(D.m7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4S(d,e),$async$SZ)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c2Q(s,d,e,t),$async$SZ)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWm(t),$async$SZ)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qN(e,d),$async$SZ)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SY(A.a([d],y.r),e),$async$SZ)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SZ,w)},
T0(){var x=0,w=A.j(y.H)
var $async$T0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fB7(),$async$T0)
case 2:x=3
return A.b(B.aNc(),$async$T0)
case 3:return A.h(null,w)}})
return A.i($async$T0,w)},
a4S(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWo()
x=3
return A.b(B.c2U(e,d.a,u),$async$a4S)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4S,w)},
LG(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$LG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OY&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aW(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4S(p,f),$async$LG)
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
return A.b(B.c2P(o,p,u,f),$async$LG)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2Q(o,p,f,t),$async$LG)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2O(o,u,p,f),$async$LG)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$LG,w)},
aWr(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2W(e,d),$async$aWr)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.T2(!1,!0,d,e),$async$aWr)
case 4:u=g
if(u!=null){t=u.b
v=new A.Oc(u.a,D.xX,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWr,w)},
c2W(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SX(d,s,0,1),$async$c2W)
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
return A.i($async$c2W,w)},
c2X(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4T(null,d,e),$async$c2X)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fQM(u)
if(t.length>800){v=null
x=1
break}v=new A.Oc(d.length,D.deP,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2X,w)},
amC(d,e,f){return B.hjl(d,e,f)},
hjl(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amC=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cU(g,"\ufeff"))g=J.mh(g,1)
x=B.fBc(g)?3:4
break
case 3:x=5
return A.b(B.c2R(g),$async$amC)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cU(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mh(g,13))
try{k=B.De(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a5(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cU(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mh(g,13))
u=9
x=12
return A.b(B.aWk(q),$async$amC)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T_(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a5(f)
$.al.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cU(g,"NGMYDOCSYNC0|"))try{n=B.fBb(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T_(n,a0)
v=k
x=1
break}catch(a1){m=A.a5(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cU(g,"N2|")){v=B.GW(C.a.i(J.mh(g,3)),d,a0)
x=1
break}if(J.cU(g,"NGMYDOCSYNC2|")){v=B.GW(C.a.i(J.mh(g,13)),d,a0)
x=1
break}i=A.ae("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.an(k,0,k.length-1)
else h=k
v=B.GW(h,d,a0)
x=1
break}if(J.eQ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.T_(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amC,w)},
GW(d,e,f){return B.hjj(d,e,f)},
hjj(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GW=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ae("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aW(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aW(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.an(e,0,e.length-13)
f=A.ae("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cr(A.t(s)+"/manifest.json",0,null)
q=A.cr(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aWc(r),$async$GW)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aWc(A.cr(s,0,null)),$async$GW)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c2t(o,r,a1,n,a2),$async$GW)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.c2s(q),$async$GW)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.T_(l,a2),$async$GW)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ci(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a5(d)
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
return A.i($async$GW,w)},
a4T(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4T=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qN(f,r),$async$a4T)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cO.gcs().aF(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.Q(Date.now(),0,!1).a4().ab())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.al(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4T,w)},
T_(d,e){return B.hjk(d,e)},
hjk(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$T_=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aD(0,a2,null)
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
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.a9(j)===0){x=7
break}i=C.cw.aF(j)
d=J.a9(q)!==0?q:null
x=9
return A.b(B.As(i,a3,d,k,l,o),$async$T_)
case 9:h=a5
if(h!=null)J.cg(n,h)
x=7
break
case 8:f=J.a9(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a5(a1)
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
return A.i($async$T_,w)},
LF:function LF(d,e){this.a=d
this.b=e},
c2Y:function c2Y(){},
a_0(d){var x=A.L(d).ax.a===C.H,w=x?D.a9O:D.a88,v=x?D.abb:C.c,u=x?C.aN:C.M,t=x?C.bK:C.ai,s=x?D.a96:C.aJ
return new A.aD9([w,s,v,u,t,x?C.f1:C.bT])},
h4Q(d,e){var x=e?C.x.j(0.72):C.aV
return A.cf(null,x,!0,null,new B.ftG(e),d,null,!0,!0,y.N)},
c2D(d,e,f,g,h,i,j,k,l){return new B.SS(e,l,d,f,k,j,g,h,i,null)},
X2(d,e,f,g,h,i,j){return new B.b9K(g,h,j,e,i,d,f,null)},
ftG:function ftG(d){this.a=d},
X_:function X_(d,e){this.c=d
this.a=e},
awl:function awl(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cX_:function cX_(d){this.a=d},
cWY:function cWY(d){this.a=d},
cWZ:function cWZ(d){this.a=d},
bqX:function bqX(){},
SS:function SS(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAe:function aAe(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dHK:function dHK(d){this.a=d},
dH7:function dH7(d,e){this.a=d
this.b=e},
dH8:function dH8(d,e){this.a=d
this.b=e},
dGH:function dGH(d,e,f){this.a=d
this.b=e
this.c=f},
dGG:function dGG(d){this.a=d},
dGI:function dGI(d,e){this.a=d
this.b=e},
dGN:function dGN(d,e,f){this.a=d
this.b=e
this.c=f},
dGM:function dGM(d){this.a=d},
dHy:function dHy(d,e){this.a=d
this.b=e},
dHz:function dHz(d){this.a=d},
dH4:function dH4(d,e,f){this.a=d
this.b=e
this.c=f},
dH1:function dH1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dGL:function dGL(d){this.a=d},
dHc:function dHc(d){this.a=d},
dHb:function dHb(){},
dGR:function dGR(d){this.a=d},
dHv:function dHv(d,e){this.a=d
this.b=e},
dHw:function dHw(d,e){this.a=d
this.b=e},
dHx:function dHx(d,e){this.a=d
this.b=e},
dH2:function dH2(d,e){this.a=d
this.b=e},
dH3:function dH3(d,e){this.a=d
this.b=e},
dHo:function dHo(d,e){this.a=d
this.b=e},
dHk:function dHk(d){this.a=d},
dHj:function dHj(d){this.a=d},
dHl:function dHl(){},
dHm:function dHm(){},
dHn:function dHn(d,e){this.a=d
this.b=e},
dHp:function dHp(){},
dHq:function dHq(d){this.a=d},
dHi:function dHi(d,e){this.a=d
this.b=e},
dHd:function dHd(d){this.a=d},
dHe:function dHe(d){this.a=d},
dHf:function dHf(d){this.a=d},
dHg:function dHg(d){this.a=d},
dHh:function dHh(d){this.a=d},
dGO:function dGO(){},
dGP:function dGP(d){this.a=d},
dGQ:function dGQ(d,e){this.a=d
this.b=e},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGJ:function dGJ(d,e,f){this.a=d
this.b=e
this.c=f},
dH5:function dH5(d){this.a=d},
dH6:function dH6(d,e,f){this.a=d
this.b=e
this.c=f},
dH_:function dH_(d,e){this.a=d
this.b=e},
dGW:function dGW(d){this.a=d},
dGT:function dGT(d,e,f){this.a=d
this.b=e
this.c=f},
dGX:function dGX(d){this.a=d},
dGY:function dGY(d){this.a=d},
dGZ:function dGZ(){},
dH0:function dH0(d,e){this.a=d
this.b=e},
dGU:function dGU(d){this.a=d},
dGS:function dGS(d,e,f){this.a=d
this.b=e
this.c=f},
dGV:function dGV(){},
dHa:function dHa(d){this.a=d},
dH9:function dH9(d,e){this.a=d
this.b=e},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHr:function dHr(d){this.a=d},
dHs:function dHs(d,e){this.a=d
this.b=e},
dHt:function dHt(d){this.a=d},
dHH:function dHH(d){this.a=d},
dHF:function dHF(d){this.a=d},
dHG:function dHG(d){this.a=d},
dHI:function dHI(){},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHB:function dHB(d,e){this.a=d
this.b=e},
dHC:function dHC(d,e,f){this.a=d
this.b=e
this.c=f},
dHA:function dHA(d,e,f){this.a=d
this.b=e
this.c=f},
dHD:function dHD(d,e){this.a=d
this.b=e},
dHE:function dHE(d,e){this.a=d
this.b=e},
awi:function awi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9J:function b9J(d,e,f){this.c=d
this.d=e
this.a=f},
cWW:function cWW(){},
cWX:function cWX(){},
a9T:function a9T(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cXj:function cXj(){},
cXi:function cXi(d){this.a=d},
X1:function X1(d,e,f){this.c=d
this.d=e
this.a=f},
awn:function awn(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cXf:function cXf(d){this.a=d},
cXg:function cXg(d,e,f){this.a=d
this.b=e
this.c=f},
cXh:function cXh(d,e){this.a=d
this.b=e},
cXd:function cXd(d,e){this.a=d
this.b=e},
cXb:function cXb(d){this.a=d},
cX9:function cX9(d){this.a=d},
cX6:function cX6(d){this.a=d},
cXc:function cXc(d){this.a=d},
cX8:function cX8(d){this.a=d},
cXe:function cXe(d){this.a=d},
cXa:function cXa(d){this.a=d},
cX7:function cX7(d){this.a=d},
WZ:function WZ(d,e,f){this.c=d
this.d=e
this.a=f},
awk:function awk(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cWT:function cWT(d){this.a=d},
cWS:function cWS(d,e){this.a=d
this.b=e},
cWU:function cWU(d){this.a=d},
cWR:function cWR(d,e){this.a=d
this.b=e},
cWV:function cWV(d){this.a=d},
cWQ:function cWQ(d,e){this.a=d
this.b=e},
cWM:function cWM(d){this.a=d},
cWN:function cWN(d){this.a=d},
cWO:function cWO(d,e){this.a=d
this.b=e},
cWP:function cWP(d){this.a=d},
NQ:function NQ(d,e,f){this.c=d
this.d=e
this.a=f},
awq:function awq(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cXw:function cXw(d){this.a=d},
cXx:function cXx(d){this.a=d},
cXy:function cXy(d){this.a=d},
cXz:function cXz(d){this.a=d},
cXA:function cXA(d,e){this.a=d
this.b=e},
cXB:function cXB(d){this.a=d},
cXD:function cXD(d){this.a=d},
cXC:function cXC(d){this.a=d},
X3:function X3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awo:function awo(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cXs:function cXs(d,e){this.a=d
this.b=e},
cXt:function cXt(d,e){this.a=d
this.b=e},
cXk:function cXk(d,e,f){this.a=d
this.b=e
this.c=f},
cXl:function cXl(d){this.a=d},
cXm:function cXm(){},
cXr:function cXr(){},
cXn:function cXn(d,e){this.a=d
this.b=e},
cXo:function cXo(d,e){this.a=d
this.b=e},
cXp:function cXp(d,e){this.a=d
this.b=e},
cXq:function cXq(d,e){this.a=d
this.b=e},
a9R:function a9R(d,e){this.c=d
this.a=e},
cWL:function cWL(d){this.a=d},
WY:function WY(d){this.a=d},
awj:function awj(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
X4:function X4(d,e){this.c=d
this.a=e},
awp:function awp(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cXv:function cXv(d){this.a=d},
cXu:function cXu(d){this.a=d},
b9K:function b9K(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hjm(){var x,w=$.oY(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fM(v)},
LH(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$LH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$LH)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$LH)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$LH,w)},
a4U(d){return B.hjn(d)},
hjn(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4U)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cz,null),$async$a4U)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.al.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4U,w)},
T1(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$T1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LH(),$async$T1)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dS(A.Z(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.m(s,d,t)
x=4
return A.b(B.a4U(s),$async$T1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
T2(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$T2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bX(),$async$T2)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bj(f,!0,y.U)
else{t=A.U(f).k("a4<1>")
u=A.z(new A.a4(f,new B.c3_(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hjm()
t=A.U(u).k("J<1,a1<n,aB>>")
r=A.z(new A.J(u,new B.c30(s),t),t.k("ai.E"))
x=6
return A.b(B.LH(),$async$T2)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=7
return A.b(B.a4U(q),$async$T2)
case 7:x=8
return A.b(B.a4V(r,u,g,s),$async$T2)
case 8:v=new A.bl6(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T2,w)},
amD(d){var x=0,w=A.j(y.y),v,u,t
var $async$amD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.LH(),$async$amD)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amD,w)},
c31(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c31=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.LH(),$async$c31)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c31,w)},
a4V(d,e,f,g){return B.hjo(d,e,f,g)},
hjo(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4V=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.a9(q)===0){x=8
break}x=10
return A.b(B.amB("media",r,new B.c2Z(s,e,g),f,q),$async$a4V)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.T1(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4V)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.T1(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$a4V)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.T1(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4V)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4V,w)},
De(d,e,f){return B.hjp(d,e,f)},
hjp(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$De=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bX(),$async$De)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amD(b3),$async$De)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.kW,null,g),$async$De)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amD(b3),$async$De)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.LH(),$async$De)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ci(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.a9(m)===0){x=11
break}u=14
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.or(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a89(a8.a,b0,"media",a8.d,a9).Bx(m)
k=A.cr(l,0,null)
x=17
return A.b(B.aWd(k,n,o,s,b7),$async$De)
case 17:j=c0
if(j!=null){J.cg(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a5(b4)
$.al.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.a9(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gag(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.a9(h)!==0?25:26
break
case 25:u=28
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.or(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a89(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$De)
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
a0=A.dS(A.Z(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4U(e),$async$De)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$De,w)},
c3_:function c3_(){},
c30:function c30(d){this.a=d},
c2Z:function c2Z(d,e,f){this.a=d
this.b=e
this.c=f},
aNc(){var x=0,w=A.j(y.H),v,u
var $async$aNc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hue=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aNc)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aNc)
case 3:u=$.fGc
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aNc)
case 4:$.fGc=$.hCj=$.hCk=null
return A.h(null,w)}})
return A.i($async$aNc,w)},
f9d(d){var x=0,w=A.j(y.H),v,u
var $async$f9d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2q){x=1
break}u=new A.be($.bt,y.d4)
d.c=new B.f9e(new A.bO(u,y.aY))
x=3
return A.b(u.i0(0,C.hw,new B.f9f()),$async$f9d)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f9d,w)},
hCh(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hj6(x):x},
fGg(d){var x=0,w=A.j(y.T),v,u,t
var $async$fGg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aW(t,13))
if(C.a.a_(u,"WR")){v=B.amF(u)
x=1
break}v=B.fBb(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGg,w)},
fGf(d){var x=0,w=A.j(y.T),v,u,t
var $async$fGf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aW(t,14))
if(C.a.a_(u,"WR")){v=B.amG(u)
x=1
break}v=B.fBb(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGf,w)},
fpu(d){var x=0,w=A.j(y.T),v
var $async$fpu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amG(d),$async$fpu)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpu,w)},
bx8(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bx8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fGf(d),$async$bx8)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aD(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.a9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx8,w)},
eZC(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eZC=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SW(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.As(d.al_(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZC,w)},
EY(d,e,f){return B.hEA(d,e,f)},
hEA(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EY=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fGg(a1),$async$EY)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aD(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a6(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.a9(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aW(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h6E().aAg(D.d3A,null),$async$EY)
case 4:l=d.fGc=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ava(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.be($.bt,y.b1)
l.y=new B.f9I(f,k,new B.f9J(f,a2,k,j,a0,p),a2,j,a0,p,new A.bO(t,y.ch))
x=5
return A.b(l.a4Z(0,new B.V9(r,"offer")),$async$EY)
case 5:d=l
x=7
return A.b(l.ahT(0),$async$EY)
case 7:x=6
return A.b(d.a4R(0,a4),$async$EY)
case 6:x=8
return A.b(B.f9d(l),$async$EY)
case 8:x=9
return A.b(l.alK(),$async$EY)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hCh(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.al(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amH(m,h),$async$EY)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fQM(h)
case 11:v=new A.bkp(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EY,w)},
f9e:function f9e(d){this.a=d},
f9f:function f9f(){},
f9J:function f9J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f9I:function f9I(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f9H:function f9H(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hGm(d){switch(d){case"new":return D.dTW
case"checking":return D.dTX
case"connected":return D.dTZ
case"completed":return D.dTY
case"failed":return D.dU0
case"disconnected":return D.dU1
case"closed":return D.aG_
case"count":return D.dU_}return D.aG_},
hGn(d){switch(d){case"new":return D.aG0
case"gathering":return D.dU2
case"complete":return D.a2q}return D.aG0},
hQq(d){switch(d){case"stable":return D.dU3
case"have-local-offer":return D.dU4
case"have-local-pranswer":return D.dU6
case"have-remote-offer":return D.dU5
case"have-remote-pranswer":return D.dU7
case"closed":return D.aG6}return D.aG6},
hOK(d){switch(d){case"new":return D.aG3
case"connecting":return D.aG4
case"connected":return D.aG5
case"closed":return D.a2r
case"disconnected":return D.aG2
case"failed":return D.aG1}return D.a2r},
a78:function a78(d,e){this.a=d
this.b=e},
MH:function MH(d,e){this.a=d
this.b=e},
V8:function V8(d,e){this.a=d
this.b=e},
MG:function MG(d,e){this.a=d
this.b=e},
DG:function DG(d,e){this.a=d
this.b=e},
cdL:function cdL(){},
fCS(d){var x=new B.DF()
x.a=d
x.b=!0
return x},
DF:function DF(){this.b=this.a=$},
a77:function a77(){},
aqS:function aqS(){},
V9:function V9(d,e){this.a=d
this.b=e},
fB7(){var x=0,w=A.j(y.H)
var $async$fB7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fB7,w)},
fBa(d,e,f){var x=0,w=A.j(y.T),v
var $async$fBa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.m_(D.m7))){v=null
x=1
break}v=B.fpJ(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBa,w)},
fQM(d){var x,w=F.a7G.a1U(C.dC.aF(d),null)
if(w.length===0){x=C.dC.aF(d)
return C.cO.gcs().aF(x)}return C.cO.gcs().aF(w)},
hj5(d){var x,w,v=C.cw.aF(d)
try{x=C.c0.c6(0,F.a7F.b7m(v,!1))
return x}catch(w){x=C.c0.c6(0,v)
return x}},
fBb(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hj5(C.a.aW(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aW(t,w.length)
try{v=C.c0.c6(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hj6(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hj7(){var x,w=$.oY(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fM(v)},
aWj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aWj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aWj)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$aWj,w)},
c2I(d,e){return B.hj8(d,e)},
hj8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c2I=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cz,null),$async$c2I)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$c2I,w)},
aWm(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWj(d),$async$aWm)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWm,w)},
aWl(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hj7()
r=C.a.i(f)
t=C.dC.aF(s)
x=3
return A.b(B.c2I(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cO.gcs().aF(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$aWl)
case 3:if(!h){v=null
x=1
break}v=new A.Z4("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWl,w)},
aWk(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aWk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.a9(o)===0){v=null
x=1
break}x=3
return A.b(B.aWj(o),$async$aWk)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.a9(u)===0){v=null
x=1
break}try{t=C.c0.c6(0,C.cw.aF(u))
if(J.iL(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a5(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aWk,w)},
c2J(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c2J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.a9(q)===0){x=1
break}u=4
x=7
return A.b(X.by3("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cz),$async$c2J)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2J,w)},
aWn(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GS(),$async$aWn)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWn,w)},
amy(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amy)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWn(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amy,w)},
amw(d,e){var x=0,w=A.j(y.H)
var $async$amw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amw)
case 3:x=2
return A.b(g.ap("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amw)
case 2:return A.h(null,w)}})
return A.i($async$amw,w)},
a4M(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4M=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4M)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GS(),$async$a4M)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=5
return A.b(A.a4L(s),$async$a4M)
case 5:x=6
return A.b(B.amw(f,u),$async$a4M)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4M,w)},
a4N(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4N=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4N)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GS(),$async$a4N)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Z(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.m(0,"schoolName",q)
p.m(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.m(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.amw(g,q),$async$a4N)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4L(u),$async$a4N)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4N,w)},
a4O(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4O=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4O)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GS(),$async$a4O)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aWg(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ax(),$async$a4O)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ap("String","ngmy_doc_share_school_session_"+s,C.Q.al(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a4().ab()],p,p),null)),$async$a4O)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4O,w)},
c2K(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c2K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.a9(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$c2K)
case 7:s=f
p=A.t(n)
r=A.aS(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aD(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Z(q,y.N,y.z)
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
return A.i($async$c2K,w)},
GT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2K(d),$async$GT)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWn(t),$async$GT)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amx(d),$async$GT)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aWg(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amx(d),$async$GT)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GT,w)},
amx(d){var x=0,w=A.j(y.H)
var $async$amx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amx)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amx)
case 2:return A.h(null,w)}})
return A.i($async$amx,w)},
aWo(){var x,w=$.oY(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fM(v)},
a4P(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fBc(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ae("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c2N(d){return B.hja(d)},
hja(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c2N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4P(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c2N)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$c2N,w)},
amA(d,e){return B.hjb(d,e)},
hjb(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amA=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4P(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cz,null),$async$amA)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
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
return A.i($async$amA,w)},
c2P(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2P=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4P(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amA(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c2P)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2P,w)},
c2O(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2O=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4P(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amA(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c2O)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2O,w)},
c2Q(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2Q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4P(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amA(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2Q,w)},
c2R(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fBc(d)){v=null
x=1
break}x=3
return A.b(B.c2N(d),$async$c2R)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a6(u)
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
return A.i($async$c2R,w)},
a4W(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4W=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4W)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bD),$async$a4W)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4W,w)},
amE(d){return B.hjq(d)},
hjq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$amE)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cz,null),$async$amE)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.al.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amE,w)},
amF(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.a9(j)===0||!J.cU(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bX(),$async$amF)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4W(),$async$amF)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.a9(q)===0){v=null
x=1
break}u=6
p=C.c0.c6(0,C.cw.aF(q))
if(J.iL(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dS(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a4().ab())
J.aE(s,j,o)
x=9
return A.b(B.amE(s),$async$amF)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a5(i)
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
return A.i($async$amF,w)},
amH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bX(),$async$amH)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4W(),$async$amH)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dS(A.Z(s,r,q),r,q)
r=C.dC.aF(C.a.i(e))
q.m(0,"answer",C.cO.gcs().aF(r))
q.m(0,"answerAt",new A.Q(Date.now(),0,!1).a4().ab())
t.m(u,p,q)
x=5
return A.b(B.amE(u),$async$amH)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amH,w)},
amG(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bX(),$async$amG)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4W(),$async$amG)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.a9(u)===0){v=null
x=1
break}try{r=C.c0.c6(0,C.cw.aF(u))
v=r
x=1
break}catch(n){t=A.a5(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amG,w)},
alH(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.af$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb5()
if(!(p instanceof A.q1)){v=null
x=1
break}x=3
return A.b(p.lQ(e),$async$alH)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fM),$async$alH)
case 7:q=g
o=q
o=o==null?null:J.f2(J.w2(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.p()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$alH,w)},
hMP(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fo3(d){return B.hMR(d)},
hMR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fo3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Jg(d,3600),$async$fo3)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
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
return A.i($async$fo3,w)},
BL(d,e,f,g,h,i){var x=null
return B.hMO(d,e,f,g,h,i)},
hMO(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BL=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fQP(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fBe(r),$async$BL)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fo3(o),$async$BL)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4Q(r),$async$BL)
case 14:v=null
x=1
break
case 13:e=$.bt.h(0,C.aIU)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.K7(A.a([],g))
x=15
return A.b(d.eM(0,A.arH("GET",A.cr(n,0,null))).cJ(0,C.Dx),$async$BL)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4Q(r),$async$BL)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.II(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BL)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.a9(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWq(r,k),$async$BL)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BL)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.SW(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a5(a4)
$.al.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4Q(r),$async$BL)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BL,w)},
aMW(d){return B.hMQ(d)},
hMQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMW)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMW,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[210]
H=c[101]
P=c[191]
E=c[183]
G=c[83]
Q=c[155]
R=c[102]
S=c[189]
I=c[215]
K=c[221]
B=a.updateHolder(c[21],B)
D=c[219]
T=c[154]
L=c[173]
U=c[62]
V=c[222]
W=c[68]
X=c[53]
M=c[82]
Y=c[220]
N=c[112]
B.cdM.prototype={
aAg(d,e){return this.cAu(d,e)},
cAu(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aAg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.S(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dS(r,s,t)
t.v(0,d)
u=new q(A.k5(A.cv(t)))
t=J.k(u)
v=B.hnZ(C.cO.gcs().aF(new A.cY(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aAg,w)}}
B.b0w.prototype={
bsd(d){var x=this,w=x.w
w.onclose=A.h7(new B.cdH(x))
w.onopen=A.h7(new B.cdI(x))
w.onmessage=A.h7(new B.cdJ(x))
w.onbufferedamountlow=A.h7(new B.cdK(x))},
gdh(d){return this.x},
aeg(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aeg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DF()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fCS(J.f2(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$aeg)
case 8:v=t.fCS(s.akV(f,0,null))
x=1
break
case 7:case 4:v=B.fCS(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aeg,w)}}
B.b0x.prototype={
bse(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.cdN(x)))
w.addEventListener("icecandidate",A.h7(new B.cdO(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.cdP(x)))
w.onicegatheringstatechange=A.h7(new B.cdQ(x))
w.addEventListener("signalingstatechange",A.h7(new B.cdR(x)))
if(!$.fJF())w.addEventListener("connectionstatechange",A.h7(new B.cdS(x)))
w.addEventListener("negotiationneeded",A.h7(new B.cdT(x)))
w.addEventListener("track",A.h7(new B.cdU(x)))},
ahT(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k5(A.cv(A.S(y.N,y.z)))),y.aQ),$async$ahT)
case 3:t=f
v=new B.V9(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahT,w)},
a4R(d,e){return this.bhQ(0,e)},
bhQ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4R)
case 2:return A.h(null,w)}})
return A.i($async$a4R,w)},
a4Z(d,e){return this.bi5(0,e)},
bi5(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4Z)
case 2:return A.h(null,w)}})
return A.i($async$a4Z,w)},
alK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.V9(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alK,w)},
bx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx,w)}}
B.a9S.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.X0.prototype={
S(){return new B.awm()},
gd6(){return this.c}}
B.awm.prototype={
Z(){this.a0()
this.ab5()},
ab5(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWh(u.e,u.c),$async$ab5)
case 2:t=e
if(v.c!=null)v.n(new B.cX3(v,t))
return A.h(null,w)}})
return A.i($async$ab5,w)},
On(){var x=0,w=A.j(y.H),v,u=this,t
var $async$On=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amt(t.e,t.c,!1),$async$On)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.G(y.q).f.P(D.ewb)
x=1
break}x=4
return A.b(B.a4K(u.a.c,"individual"),$async$On)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a3q(A.eH(new B.cX0(u),!1,null,y.H)),$async$On)
case 5:case 1:return A.h(v,w)}})
return A.i($async$On,w)},
HH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f7o(o),$async$HH)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4O(o.e,r,s,q),$async$HH)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.G(y.q).f.P(D.etg)
x=1
break}x=5
return A.b(B.a4K(u.a.c,"member"),$async$HH)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a3q(A.eH(new B.cX2(u),!1,null,y.H)),$async$HH)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HH,w)},
wX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4J(t.e,o,t.f,t.r,t.w,s),$async$wX)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4K(u.a.c,"org_owner"),$async$wX)
case 4:x=5
return A.b(B.amy(u.a.c),$async$wX)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f7T(o),$async$wX)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4M(s,t,o,q.c),$async$wX)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.G(y.q).f.P(D.etd)
x=1
break}x=10
return A.b(B.amy(u.a.c),$async$wX)
case 10:o=u.c
if(o==null){x=1
break}o.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a3q(A.eH(new B.cX1(u),!1,null,y.H)),$async$wX)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wX,w)},
B(d){var x,w,v,u=this,t=null,s=A.L(d).ax.a===C.H,r=s?C.iX:C.oR,q=B.fB9(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.fE,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eO3,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.fV,t,t,t),C.ay,D.f4A,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bIC,C.n),t,t,t,t,C.en,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lm(new B.cX5(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ab)
if(!u.a.x)C.d.v(p,A.a([new B.aaj(C.eI,C.at6,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5D(),t),C.ab],v))
p.push(new B.aaj(C.oa,C.Zx,"Team Member","Sign in with your organization access code + password",u.gc6s(),t))
p.push(C.ab)
p.push(new B.aaj(C.ag7,C.a_T,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5Z(),t))
return A.cd(t,r,A.bq(!0,A.ch(A.u(p,C.af,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adx,t,t,C.aj),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.aaj.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gK(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.Y,!0,s,A.aI(!1,r,!0,A.eq(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ep,A.D(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.ov,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.L(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A9,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c2,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayQ.prototype={}
B.aBY.prototype={}
B.j9.prototype={
m_(d){var x=this.b,w=C.a.o_(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.aW(x,w+1).toLowerCase())},
gaml(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ac(){var x,w=this,v=A.S(y.N,y.z)
v.m(0,"id",w.a)
v.m(0,"name",w.b)
v.m(0,"mime",w.c)
v.m(0,"sizeBytes",w.d)
v.m(0,"createdAt",w.e)
x=w.f
if(x!=null&&C.a.i(x).length!==0)v.m(0,"note",x)
x=w.r
if(x!=null&&C.a.i(x).length!==0)v.m(0,"fromSender",x)
x=w.w
if(x!=null&&C.a.i(x).length!==0)v.m(0,"shortCode",x)
x=w.x
if(x!=null&&C.a.i(x).length!==0)v.m(0,"stashToken",x)
return v},
b6T(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j9(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyZ(d){return this.b6T(null,d)},
aA1(d){return this.b6T(d,null)}}
B.SQ.prototype={
S(){return new B.aAc(new A.cn(null,y.A))},
gd6(){return this.c}}
B.aAc.prototype={
Z(){this.a0()
this.ab6()},
ab6(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ar(u.a.c),$async$ab6)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dGD(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ab6,w)},
ab7(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ab7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fC(new A.fw(s)),$async$ab7)
case 3:t=u.c
if(t!=null)t.G(y.q).f.P(D.ex5)
case 1:return A.h(v,w)}})
return A.i($async$ab7,w)},
Xs(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xs=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alH(s.d,4),$async$Xs)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rg(r,"ngmy_my_code_"+m+".png"),$async$Xs)
case 8:q=e
o=s.c
if(o!=null)o.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
o=s.c
if(o!=null)o.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xs,w)},
aeJ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7J("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeJ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===C.H,n=o?C.iX:C.oR,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lM
else if(q.e==null)x=A.at(new A.C(C.en,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZW,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.ad7,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.G,C.aB.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.ch(A.u(A.a([x,C.me,w,C.ke,new A.en(A.p(p,A.pk(p,p,!1,B.hj1(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c2,p,p,p),q.d),C.ab,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ke,A.B(A.a([A.D(A.ez(M.Ao,C.Rf,q.gbZO(),p),1),C.aw,A.D(A.dn(C.xq,C.a4F,q.gbZP(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ez(L.Yp,D.f0O,q.gckA(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.K9,p,p,C.aj)
x=r}return A.cd(l,n,x,p,!1,!1,p,p)}}
B.SU.prototype={
S(){return new B.aAf(new A.ap(C.as,$.au()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aAf.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GR(x==null?"":x)
if(w!=null)this.d.saS(0,w)},
p(){var x=this.d
x.R$=$.au()
x.O$=0
this.e.p()
this.a2()},
Xt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GR(u.d.a.a)
if(t==null){u.n(new B.dHM(u))
x=1
break}u.n(new B.dHN(u))
s=u.a
r=s.c
x=3
return A.b(B.a4I(s.d,new B.dHO(u),t,r),$async$Xt)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dHP(u))
if(q){s=u.c
s.toString
A.a8(s,!1).M(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xt,w)},
a_y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.n(new B.dHQ(r))
u=4
q=J.fh(r.a.d)
x=7
return A.b(B.qN(r.a.c,q),$async$a_y)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dHR(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.a9(r.a.d)>1?"NGMY Doc Share ("+J.a9(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.afb(p,m,l,j,k),$async$a_y)
case 8:o=e
if(r.c!=null)r.n(new B.dHS(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a5(h)
if(r.c!=null)r.n(new B.dHT(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dHU(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_y,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===C.H,i=j?D.a9O:D.a88,h=j?D.abb:C.c,g=j?C.aN:C.M,f=j?C.bK:C.ai,e=j?D.a96:C.aJ
i=[i,e,h,g,f,j?C.f1:C.bT]
x=A.L(d).ax.a===C.H
w=J.a9(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e1(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e1(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.w,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bxv,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aC,C.w,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ep,A.D(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fA,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZW,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tE(A.ae("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bf1()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bm(k,k,k,C.K2,k,k,"",k,!0,new A.b2(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b2(4,A.m(18),new A.ay(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ag,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dHV(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lF,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JM(l.a.d,4)
m=A.z(new A.J(m,new B.dHW(x,new A.aD9(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.a9(l.a.d)>4)m.push(new A.C(C.nn,A.d("+ "+(J.a9(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bt,s,C.P,e,C.P,q,C.d3,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.erO)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.di(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b8,new A.o(u,k,s,t,k,k,C.n),C.ij,k,k,k,C.eH,k,k,k)],r))}e=A.D(A.ch(A.u(e,C.af,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.biI,k,k,C.aj),1)
u=l.f?k:l.gckB()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(L.Yp,D.f1J,u,A.db(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cc,k,new A.b5(q,C.V),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZQ()
t=A.bk(C.aB,k,k,0,C.c,k,C.mz,k,new A.b5(A.m(16),C.V),k,k,k)
return A.cd(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.bq(!0,A.mA(new B.dHX(),A.u(A.a([e,new A.C(D.bic,A.u(A.a([s,C.P,i,C.ab,A.bK(l.f?C.qQ:D.f0d,u,t)],r),C.af,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UT,k,new A.bl(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bf1.prototype={
nW(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ae("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ae("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.h1(C.br,v.length),C.aM)}}
B.SR.prototype={
S(){return new B.aAd()}}
B.aAd.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.au()
u.d!==$&&A.aO()
u.d=new A.ap(new A.bc(w,C.b0,C.aM),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ap(new A.bc(x,C.b0,C.aM),v)
u.f!==$&&A.aO()
u.f=new A.ap(C.as,v)},
p(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.au()
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
ab8(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ab8=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dGE(r))
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
return A.b(B.a4N(p,m,n,o,C.a.i(l).length===0?null:l),$async$ab8)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.G(y.q).f.P(D.ewH)
s=[1]
x=4
break}p.G(y.q).f.P(D.evk)
p=r.c
p.toString
A.a8(p,!1).M(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dGF(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ab8,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax.a===C.H?C.iX:C.oR,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eUq,s,s,s,1,s,!0),p=A.p(s,D.bbc,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.F0,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bEc,C.z,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bE8,C.z,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bEm,C.z,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
v=t.r?s:t.gbZR()
u=A.bk(C.aB,s,s,s,s,C.fP,s,s,s,s,s,s)
return A.cd(q,r,A.ch(A.u(A.a([p,C.d3,o,C.ab,x,C.ab,w,C.me,A.bK(t.r?C.qQ:C.aLq,v,u)],y.p),C.af,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.aj),s,!1,!1,s,s)}}
B.a9z.prototype={}
B.brh.prototype={
a29(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a29=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.al_()))
x=3
return A.b(B.Pk(t,s),$async$a29)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a29,w)},
gd6(){return this.a}}
B.LF.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.X_.prototype={
S(){return new B.awl(new A.ap(C.as,$.au()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.awl.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cX_(this))},
p(){var x=this.d
x.R$=$.au()
x.O$=0
this.e.p()
this.a2()},
bZX(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).M(x)
return null},
B(d){var x=this,w=null,v=B.a_0(d),u=x.a.c,t=u?C.hr:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iX:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.G,C.aB.j(u?0.25:0.12),C.fE,32)],n),l=A.p(w,T.aiK,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.G,C.aB.j(0.4),C.cs,16)],n),C.ajw,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tE(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqX()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bm(w,w,w,C.DK,w,w,"",w,!0,new A.b2(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b2(4,A.m(16),D.aQi),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ag,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWY(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lF,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.mY,new B.cWZ(d),A.db(w,w,w,w,w,w,w,w,w,s,w,w,C.cc,w,new A.b5(A.m(14),C.V),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.cA,12)],n)
g=y.p
return A.ew(w,C.K,new A.d1(Q.Il,A.bT(new A.C(C.wC,A.u(A.a([l,C.aO,k,C.P,j,C.dW,i,C.dW,A.B(A.a([f,C.aw,A.D(A.bT(A.aD(!1,C.Y,!0,w,A.aI(!1,A.m(14),!0,D.dOH,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZW(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LO,C.n),C.ba),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.ba),w),w,w,w,C.Kb,C.cZ,w,w,w)}}
B.bqX.prototype={
nW(d,e){return e.ahO(e.a.toUpperCase())}}
B.SS.prototype={
S(){return new B.aAe(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aAe.prototype={
Z(){var x=this
x.a0()
x.rR()
x.w=A.dD(C.j1,new B.dHK(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.T0()
this.a2()},
Zr(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LE(u.a.c),$async$Zr)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zy(u.a.c),$async$Zr)
case 4:u.n(new s.dH7(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zr,w)},
rR(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LE(u.a.c),$async$rR)
case 3:t=e
x=4
return A.b(B.zy(u.a.c),$async$rR)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dH8(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LT(u.d)
B.Ar(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rR,w)},
LT(d){return this.bw3(d)},
bw3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4S(r,u.a.c),$async$LT)
case 8:p=f
if(u.c==null){x=1
break}new B.dGH(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.m_(D.m7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SZ(r,u.a.c),$async$LT)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zy(u.a.c),$async$LT)
case 12:u.n(new o.dGI(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LT,w)},
Mf(d){return this.bC4(d)},
bC4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4S(d,u.a.c),$async$Mf)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dGN(u,d,t))
x=6
return A.b(A.fC(new A.fw(t)),$async$Mf)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fC(new A.fw(r.toUpperCase())),$async$Mf)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mf,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.G(y.q).f.P(A.b0(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rS(d,e){return this.cuI(d,e)},
cuI(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dHy(r,e))
u=3
x=6
return A.b(d.$0(),$async$rS)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dHz(r))
$.eI.lV()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rS,w)},
gaQJ(){var x=this.a
return x.f||x.r||x.w},
GJ(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQJ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c2G(s,n,r,q,o,t),$async$GJ)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fhx(o,u.a.c),$async$GJ)
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
return A.b(B.BN(s,o,r,q,n,t),$async$GJ)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GJ,w)},
Yx(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amy(u.a.c),$async$Yx)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hM("No organization portal found.")
x=1
break}t=J.a6(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a8(t,!1).cr(A.eH(new B.dH4(u,r,q),!1,null,y.H)),$async$Yx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yx,w)},
ZC(d){return this.ceo(d)},
cen(){return this.ZC(1)},
ceo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ZC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQJ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amv(u.a.c),$async$ZC)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ZC,w)},
a9c(d,e,f){return this.bS8(d,e,f)},
bS8(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rS(new B.dH1(u,d,null,e,f),"Uploading\u2026"),$async$a9c)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9c,w)},
bwc(){B.h47(!1,new B.dGL(this))
return},
cjd(){this.n(new B.dHc(this))},
auM(){var x=0,w=A.j(y.H),v=this
var $async$auM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bwc()
return A.h(null,w)}})
return A.i($async$auM,w)},
a98(){var x=0,w=A.j(y.H),v=this
var $async$a98=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rS(new B.dGR(v),"Importing\u2026"),$async$a98)
case 2:return A.h(null,w)}})
return A.i($async$a98,w)},
Qm(d){return this.cub(d)},
cub(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.m_(D.m7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cr(A.eH(new B.dHv(u,d),!1,null,y.H)),$async$Qm)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.m_(D.NI)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cr(A.eH(new B.dHw(u,d),!1,null,y.H)),$async$Qm)
case 8:x=1
break
case 7:x=u.bSQ(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cr(A.eH(new B.dHx(u,d),!1,null,y.H)),$async$Qm)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qm,w)},
bSQ(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.o_(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cpB,C.a.aW(x,w+1).toLowerCase())},
act(d){return this.c5H(d)},
c5H(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$act=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.m_(D.m7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cr(A.eH(new B.dH2(u,d),!1,null,y.H)),$async$act)
case 5:x=1
break
case 4:u.n(new B.dH3(u,d))
case 1:return A.h(v,w)}})
return A.i($async$act,w)},
PL(d){return this.cm0(d)},
cm0(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oC(t,s.c,s.f),$async$PL)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rS(new B.dHo(u,d),"Preparing QR\u2026"),$async$PL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PL,w)},
af7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dHp(),A.U(t).k("J<1,n>")).fG(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dHq(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PL(r),$async$af7)
case 3:case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
af0(d){return this.clA(d)},
clA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_0(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,null,new B.dHi(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$af0)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qm(d)
break
case"qr":u.PL(A.a([d],y.r))
break
case"send_my_code":u.c6h(A.a([d],y.r))
break
case"save":u.aen(d)
break
case"delete":u.Hr(d)
break}case 1:return A.h(v,w)}})
return A.i($async$af0,w)},
Vu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dGO(),A.U(t).k("J<1,n>")).fG(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dGP(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oC(t,s.c,s.f),$async$Vu)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rS(new B.dGQ(u,r),"Preparing file\u2026"),$async$Vu)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vu,w)},
adA(d){return this.ccU(d)},
ccU(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h4Q(d,!1),$async$adA)
case 3:s=f
r=s==null
q=B.a4P(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adA,w)},
acz(){var x=0,w=A.j(y.H),v=this,u
var $async$acz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fp9(u,v.a.c),$async$acz)
case 2:return A.h(null,w)}})
return A.i($async$acz,w)},
bwb(){B.h47(!1,new B.dGK(this,null))
return},
HG(d,e){return this.c6i(d,e)},
aWg(d){return this.HG(null,d)},
c6h(d){return this.HG(d,null)},
c6i(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a4<1>")
k=A.z(new A.a4(p,new B.dH5(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wl.c2().akl(!0,C.Wz,!1),$async$HG)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.rS(new B.dH6(l,s,r),"Preparing\u2026"),$async$HG)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a5(j)
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
return A.b(B.bza(p,l,e,s.a.c),$async$HG)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HG,w)},
GY(d){return this.bRW(d)},
bRW(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hj0(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aWg(t),$async$GY)
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
return A.b(u.rS(new B.dH_(u,d),"Receiving video\u2026"),$async$GY)
case 11:x=1
break
case 10:x=12
return A.b(u.rS(new B.dH0(u,d),"Receiving\u2026"),$async$GY)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GY,w)},
D_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$D_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BH()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adA(t),$async$D_)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GY(s),$async$D_)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cr(A.eH(new B.dHa(u),!1,null,y.N)),$async$D_)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rR(),$async$D_)
case 10:x=1
break
case 9:x=11
return A.b(u.GY(C.a.i(r)),$async$D_)
case 11:case 1:return A.h(v,w)}})
return A.i($async$D_,w)},
aen(d){return this.chP(d)},
chP(d){var x=0,w=A.j(y.H),v=this
var $async$aen=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rS(new B.dH9(v,d),"Saving\u2026"),$async$aen)
case 2:return A.h(null,w)}})
return A.i($async$aen,w)},
Hr(d){return this.bEm(d)},
bEm(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kP(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hr)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c2J(t),$async$Hr)
case 6:case 5:s=d.a
x=7
return A.b(B.Dd(u.a.c,s),$async$Hr)
case 7:u.r.W(0,s)
x=8
return A.b(u.rR(),$async$Hr)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hr,w)},
afd(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_0(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,null,new B.dHu(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$afd)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acz()
break
case"import":u.a98()
break}case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
bZU(d){var x=d.c
if(C.a.a_(x,"video/")||d.m_(D.m7))return C.pc
if(C.a.a_(x,"image/")||d.m_(D.NI))return C.rW
if(C.a.t(x,"pdf"))return E.Ln
return D.agx},
B(d){var x,w,v=this,u=null,t=B.a_0(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EU,u,u,u,new B.dHF(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.by0,u,u,u,v.e?u:v.gc6_(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcjc()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.bss:E.agW,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Ym,u,u,u,v.e?u:v.gbZV(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nv,u,u,u,v.e?u:v.gaXl(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bzG,u,u,u,v.e?u:new B.dHG(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lm(new B.dHH(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e1(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.w,u,0,A.a([p.j(A.L(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e1(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.w,u,0,A.a([C.aB.j(A.L(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mq(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.awi(C.j5,s,!0,t,w?u:v.gcm1(),u),1)
x.push(new A.C(D.bgZ,A.mA(new B.dHI(),A.B(A.a([s,C.aw,A.D(new B.awi(C.uA,"Export",!1,t,w?u:v.gbHL(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ik,u,new A.bl(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9J(t,v.e?u:v.gaXl(),u)
else s=A.jV(!0,u,u,new B.dHJ(v,t),s,u,D.bgR,u,u,!1,!1)
x.push(A.D(s,1))
return A.cd(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.awi.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.ui,t,new A.b5(s,C.V),t,t,t)
return A.dn(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.db(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ui,t,new A.b5(s,C.V),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ez(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eM,t,t,t),u.r,v)}}
B.b9J.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.mA(new B.cWW(),new A.C(E.VM,A.u(A.a([A.mA(new B.cWX(),A.p(x,A.V(C.wW,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aC,C.w,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ex,C.il,x,new A.bl(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dn(C.nv,D.f4S,this.d,A.bk(C.aB,x,x,x,C.c,x,C.VH,x,new A.b5(A.m(16),C.V),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zw,x,new A.bl(0,1,w),s),x,x,x)}}
B.a9T.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.m_(D.m7))p=D.cV9
else{p=C.a.a_(p,"image/")||i.m_(D.NI)
n=y.O
p=p?A.a([C.cY,C.aB],n):A.a([C.aK.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aC,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaml()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.m_(D.m7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.D(A.u(A.a([q,C.av,A.d(C.d.aG(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fC,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c8))
if(!(!o||i.m_(D.m7)))l.push(A.fyZ(C.aB,!1,j,j,j,!1,j,j,new B.cXi(k),j,j,new A.b5(A.m(5),C.V),j,j,!1,u))
x=A.V(C.ns,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c8))
return A.mA(new B.cXj(),new A.C(C.e_,A.aD(!1,C.Y,!0,j,A.aI(!1,r,!0,new A.C(C.Vd,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ay(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cx("docshare_row_"+i.a,y.aw),new A.bl(0,1,y.X),y.i)}}
B.X1.prototype={
S(){return new B.awn()},
gd6(){return this.c}}
B.awn.prototype={
Z(){this.a0()
this.wO()},
p(){B.hjf(this.e)
this.a2()},
wO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qN(o.c,o.d),$async$wO)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aE.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hji(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hjh(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cXf(s))
x=1
break}s.n(new B.cXg(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a5(l)
if(s.c==null){x=1
break}s.n(new B.cXh(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wO,w)},
a_x(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qN(t.c,t.d),$async$a_x)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.G(y.q).f.P(D.etN)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.afb(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_x)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_x,w)},
bRP(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ka(u,C.A,v,new B.cXd(w,t),C.fK,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aE.gah(t))x=A.fD(t,C.A,v,new B.cXe(w),C.fK,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tN(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_0(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ap,u,u,u,v.gb03(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.CE
else{q=v.r
if(q!=null)t=new A.C(C.en,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.en,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dn(C.Ap,D.eQb,v.gb03(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRP()}return A.cd(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.WZ.prototype={
S(){return new B.awk(A.afX(),C.bv,C.bv)},
gd6(){return this.c}}
B.awk.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fo(w,A.a2(w).k("fo<1>")).hX(new B.cWT(v))
x.gcHA().hX(new B.cWU(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fo(x,A.a2(x).k("fo<1>"))}if(x==null)x=C.aW7
x.hX(new B.cWV(v))
v.wO()},
wO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qN(p.c,p.d),$async$wO)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cWM(s))
x=1
break}x=8
return A.b(s.d.B1(0,new A.a17(r,s.a.d.c)),$async$wO)
case 8:if(s.c==null){x=1
break}s.n(new B.cWN(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
if(s.c==null){x=1
break}s.n(new B.cWO(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wO,w)},
Xu(){var x=0,w=A.j(y.H),v=this,u
var $async$Xu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$Xu)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xu)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xu,w)},
aOG(d){var x=d.a
return C.a.aT(C.o.u(C.o.aj(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.aj(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_0(d),m=C.o.aj(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.CE
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.btq,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LO,C.n),o,88,o,o,o,o,o,88)
t=A.mb(C.aB,o,o,m,0,new B.cWP(p),C.o.D(C.o.aj(p.w.a,1000),0,m))
x=A.d(p.aOG(p.w)+" / "+p.aOG(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.eqm,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.x5:C.iK,o,o,o,o,o)
x=A.u(A.a([u,C.ke,t,x,C.d3,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZY(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cd(v,w,A.at(new A.C(C.um,x,o),o,o,o),o,!1,!1,o,o)}}
B.NQ.prototype={
S(){return new B.awq()},
gd6(){return this.c}}
B.awq.prototype={
Z(){this.a0()
this.NK()},
NK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fBa(o.c,o.d,new B.cXw(s)),$async$NK)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cXx(s))
x=1
break}s.e=r
q=O.hFo(r)
if(q==null){s.n(new B.cXy(s))
x=1
break}s.d=q
q.aJ(0,s.gaW5())
x=8
return A.b(q.hW(0).cJ(0,C.qc),$async$NK)
case 8:if(s.c==null){x=1
break}s.n(new B.cXz(s))
x=9
return A.b(q.p7(0),$async$NK)
case 9:q.rs(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
if(s.c==null){x=1
break}s.n(new B.cXA(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NK,w)},
c4l(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cXB(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BK(0,x.gaW5())
w=x.d
if(w!=null)w.p()
B.hOY(x.e)
x.a2()},
abb(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWp(u.c,u.d),$async$abb)
case 2:t=e
u=v.c
if(u!=null)u.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$abb,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_0(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.og,t,t,t,u.gbZS(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i7(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.CE
else{q=u.r
if(q!=null)s=new A.C(C.en,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afr(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fJ(x,new A.am(C.A,t,C.a9,C.q,A.a([new A.z5(s,t),A.aH(t,A.BY(A.p(t,A.V(q?H.x5:C.iK,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c2,t,t,t),C.b8,C.Y,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cXD(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cd(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.X3.prototype={
S(){return new B.awo(new A.cn(null,y.A))}}
B.awo.prototype={
gcus(){var x,w,v=this.a
if(v.e!==D.OZ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aW(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcu9(){var x,w,v=this.a
if(v.e!==D.xX)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aW(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcus()
if(x!=null){v.OM(x)
v.e=A.dD(R.DB,new B.cXs(v,x))}w=v.gcu9()
if(w!=null){v.OL(w)
v.f=A.dD(C.h3,new B.cXt(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OL(d){return this.cba(d)},
cba(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amD(d),$async$OL)
case 3:t=f
x=4
return A.b(B.c31(d),$async$OL)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cXk(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OL,w)},
OM(d){return this.cbb(d)},
cbb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fpu(d),$async$OM)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bx8(t),$async$OM)
case 4:if(u.c==null){x=1
break}u.n(new B.cXl(u))
u.c.G(y.q).f.P(D.aIv)
case 1:return A.h(v,w)}})
return A.i($async$OM,w)},
gbWG(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZT(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_j(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BH()){t=u.c
if(t!=null)t.G(y.q).f.P(D.ewR)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cr(A.eH(new B.cXm(),!1,null,y.N)),$async$a_j)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bx8(s),$async$a_j)
case 4:t=u.c
if(t!=null)t.G(y.q).f.P(D.aIv)
case 1:return A.h(v,w)}})
return A.i($async$a_j,w)},
a78(d){return this.bC5(d)},
bC5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a78=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fC(new A.fw(C.d.aG(t,", "))),$async$a78)
case 3:if(d.e!=null){t=d.G(y.q).f
t.P(A.b0(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a78,w)},
ab9(d){return this.bBQ(d)},
bBQ(d){var x=0,w=A.j(y.H),v=this
var $async$ab9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fC(new A.fw(v.a.c)),$async$ab9)
case 2:if(d.e!=null)d.G(y.q).f.P(D.euf)
return A.h(null,w)}})
return A.i($async$ab9,w)},
a_e(d){return this.chR(d)},
chR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alH(s.d,4),$async$a_e)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rg(r,"ngmy_doc_share_qr.png"),$async$a_e)
case 8:q=f
if(d.e!=null)d.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a5(n)
if(d.e!=null)d.G(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_e,w)},
gaRM(){var x,w=this.a
if(w.e!==D.G1)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aW(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aW(x,13))
return null},
a75(d){return this.bBZ(d)},
bBZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a75=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRM()
if(t==null){x=1
break}x=3
return A.b(A.fC(new A.fw(C.a.a_(t,"http")?t:"N2|"+t)),$async$a75)
case 3:if(d.e!=null)d.G(y.q).f.P(D.evR)
case 1:return A.h(v,w)}})
return A.i($async$a75,w)},
aba(){var x=0,w=A.j(y.H),v=this,u
var $async$aba=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.T0(),$async$aba)
case 2:u=v.c
if(u!=null)A.a8(u,!1).M(null)
return A.h(null,w)}})
return A.i($async$aba,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_0(d),i=m.a,h=i.c
if(h.length>48)h=C.a.an(h,0,44)+"\u2026"
i=i.e
i=i!==D.G1&&i!==D.OZ&&i!==D.xX
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.G1||t===D.OZ||t===D.xX?l:A.aF(l,l,l,l,C.kE,l,l,l,m.gaUm(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pk(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bt,A.d(""+q.d+" file(s) \xb7 "+m.gbWG(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.G1){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lX,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gbZT(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bDh,D.eYE,new B.cXn(m,d),l)],p))}if(m.a.e===D.G1&&m.gaRM()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bA0,D.eVH,new B.cXo(m,d),l)],p))
if(m.a.e===D.xX){x=(m.w?C.dr:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.CH:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lX,l,l,l)],p))}if(m.a.e===D.OZ){x=(m.r?C.dr:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.CH:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lX,l,l,l),C.ab,A.dn(D.bvR,D.f0w,m.gcie(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nX(i,A.cd(v,w,new A.C(C.a8,A.u(A.a([A.D(A.p(l,A.u(q,C.m,l,C.b6,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ab,A.B(A.a([A.D(A.ez(M.Ao,C.Rf,new B.cXp(m,d),l),1),C.aw,A.D(A.dn(C.xq,C.a4F,new B.cXq(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bK(C.yq,m.gaUm(),A.bk(C.aK,l,l,l,l,C.fP,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cXr(),y.C)}}
B.a9R.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ch(A.u(A.a([w,C.aO,A.p(x,A.pk(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.aj)
return A.eo(A.a([A.bK(C.C0,new B.cWL(d),x)],u),x,x,C.mn,v,x,x,x,x,D.ePf,x)}}
B.WY.prototype={
S(){return new B.awj(A.ye(C.wj,C.n4,C.t5))}}
B.awj.prototype={
p(){this.d.p()
this.a2()},
att(d){var x,w,v,u,t
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
return A.cd(A.eA(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eW6,x,x,x,1,x,!0),C.x,A.yd(this.d,C.bO,this.gats()),x,!1,!1,x,x)}}
B.X4.prototype={
S(){return new B.awp(A.ye(C.wj,C.n4,C.t5))},
gd6(){return this.c}}
B.awp.prototype={
bSS(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
acW(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qi("text/plain"),$async$acW)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.G(y.q).f.P(D.ewL)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).M(t)
case 1:return A.h(v,w)}})
return A.i($async$acW,w)},
a7T(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h4Q(p,!0),$async$a7T)
case 3:t=e
p=t==null
s=B.a4P(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.G(y.q).f.P(D.etn)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).M(s)
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
p(){this.d.p()
this.a2()},
att(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSS(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).M(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahQ,v,v,v,w.gbHj(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yt,v,v,v,w.gc8B(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rU:P.L8,v,v,v,v,v),v,v,v,new B.cXv(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.f1i,v,v,v,1,v,!0)
u=A.yd(w.d,C.bO,w.gats())
x=A.m(20)
return A.cd(t,C.x,new A.am(C.W,v,C.a9,C.q,A.a([u,A.at(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dTD],s),v),v,!1,!1,v,v)}}
B.b9K.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.o0
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.o0:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.Y,!0,r,A.aI(!1,w,!0,new A.C(C.VS,A.B(A.a([u,C.bc,A.D(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a78.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.MH.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.V8.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.MG.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DG.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cdL.prototype={}
B.DF.prototype={}
B.a77.prototype={}
B.aqS.prototype={}
B.V9.prototype={}
var z=a.updateTypes(["aw<~>()","T(j9)","n(j9)","SS(X)","~()","X0(X)","I(I,j9)","NQ(X)","~(lG)","co(DF)","aw<j9?>(@)","SQ(X)","SU(X)","C(j9)","j9(@)","a1<n,@>(j9)","X_(X)","SR(X)","X1(X)","WZ(X)","X3(X)","a9R(X)","ak<j9>()","X4(X)","a9T(X,I)","WY(X)","a1<n,aB>(j9)","co(V8)","co(a77)","aw<co>(DF)"])
B.cdH.prototype={
$1(d){var x=this.a
x.x=D.aFZ
x.y.J(0,D.aFZ)},
$S:68}
B.cdI.prototype={
$1(d){var x=this.a
x.x=D.aFY
x.y.J(0,D.aFY)},
$S:68}
B.cdJ.prototype={
$1(d){var x=this.a
x.aeg(A.aLG(d.data)).bw(new B.cdG(x),y.b)},
$S:68}
B.cdG.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cdK.prototype={
$1(d){},
$S:68}
B.cdN.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hnY(d.channel))},
$S:15}
B.cdO.prototype={
$1(d){},
$S:15}
B.cdP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hGm(w.iceConnectionState)
x.cx=w
if($.fJF())switch(w.a){case 0:x.cy=D.aG3
break
case 1:x.cy=D.aG4
break
case 3:x.cy=D.aG5
break
case 5:x.cy=D.aG1
break
case 6:x.cy=D.aG2
break
case 7:x.cy=D.a2r
break
default:break}},
$S:142}
B.cdQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hGn(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cdR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hQq(w.signalingState)},
$S:142}
B.cdS.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hOK(w.connectionState)},
$S:142}
B.cdT.prototype={
$1(d){},
$S:142}
B.cdU.prototype={
$1(d){},
$S:15}
B.f49.prototype={
$1(d){var x=y.F.a(new A.r7([],[]).oS(d.target.result,!1)),w=C.wk.t(x.objectStoreNames,"blobs")
if(!w)C.wg.Je(x,"blobs")},
$S:198}
B.foY.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uP.f0(this.b)
$.eI.lV()
this.c.$1(d)},
$S:451}
B.fp_.prototype={
$1(d){return this.a.$1(B.hwE(this.b,this.c))},
$S:32}
B.foZ.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.foX.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fpc.prototype={
$1(d){var x=this
return B.fVB(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fpd.prototype={
$1(d){var x=this
return B.fVB(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f5s.prototype={
$1(d){var x=this
return B.c2D(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cX3.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cX0.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2D(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cX2.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2D(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cX1.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2D(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cX5.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.B(A.a([A.aF(x,x,x,x,D.buu,x,x,x,new B.cX4(d),x,x,x,x,x,x),A.D(A.Ds(D.Nv,!0,x,C.Xx,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nv,x,g,C.adR,0,e,f)},
$C:"$4",
$R:4,
$S:432}
B.cX4.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.f7r.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eq,y.o).w,t=this.a,s=t?C.hr:C.c,r=A.m(28),q=A.p(v,D.bbv,C.h,v,v,D.aRV,v,v,v,v,D.adI,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bm(v,new A.b2(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.byz,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.C(new A.M(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.C(C.zM,A.u(A.a([o,C.ab,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bm(v,new A.b2(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ai4,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v),C.bt,A.B(A.a([A.D(A.dV(C.df,new B.f7p(d),v),1),C.aw,A.D(A.bK(D.eUK,new B.f7q(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JS,v,v,v,v),v)},
$S:57}
B.f7p.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.f7q.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.G(y.q).f.P(D.euu)
return}x=w.b.a.a
A.a8(w.c,!1).M(new B.ayQ(v,x))},
$S:0}
B.f7V.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eq,y.o).w,u=x.a,t=u?C.hr:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.M(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.bbk,C.h,w,w,D.aTg,w,w,w,w,D.adI,w,w,1/0),new A.C(C.zM,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fG0(u,"Organization name",C.Ed,w),C.z,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fG0(u,"Access code",C.mD,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fG0(u,"Member password",N.EP,w),C.z,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.bt,A.bK(D.f1m,new B.f7U(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fP,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JS,w,w,w,w),w)},
$S:57}
B.f7U.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.G(y.q).f.P(D.euz)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).M(new B.aBY(u,x,w))},
$S:0}
B.c2u.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a6(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cr(j,0,null):s.b.aP(j)
u=4
x=7
return A.b(A.uz(p,null).cJ(0,C.US),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.As(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a5(h)
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
B.c2A.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2B.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c2C.prototype={
$1(d){return d.b},
$S:z+2}
B.c2w.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2x.prototype={
$1(d){return d.b},
$S:z+2}
B.c2v.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c2y.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c2z.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fpa.prototype={
$1(d){return new B.SQ(this.a,null)},
$S:z+11}
B.fpb.prototype={
$1(d){return new B.SU(this.a,this.b,this.c,null)},
$S:z+12}
B.dGD.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dHM.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dHN.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dHO.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dHL(x,d))},
$S:2}
B.dHL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHP.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHQ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dHR.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dHS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHT.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dHU.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHX.prototype={
$3(d,e,f){return A.d7(A.dP(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.dHV.prototype={
$1(d){var x=this.a
return x.f?null:x.Xt()},
$S:2}
B.dHW.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.m_(D.NI))s=C.rW
else s=C.a.a_(s,"video/")||d.m_(D.m7)?C.pc:D.agx
x=this.b.a
w=y.p
return new A.C(C.ln,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.u(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaml(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dGE.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dGF.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c2E.prototype={
$2(d,e){return new A.br(J.k(d),J.k(e),y.M)},
$S:95}
B.c2F.prototype={
$2(d,e){return new A.br(J.k(d),J.k(e),y.M)},
$S:95}
B.fpL.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f1m.prototype={
$1(d){return J.k(d)},
$S:17}
B.f5E.prototype={
$1(d){var x=this.b
B.huM(C.E0.ga3I(this.a)).bw(x.gcxm(x),y.H)},
$S:120}
B.f5F.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f5G.prototype={
$0(){return null},
$S:11}
B.c2T.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f5H.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Z(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
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
return new B.j9(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f9B.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f4l.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f4m.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2Y.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m7)},
$S:z+1}
B.ftG.prototype={
$1(d){return new B.X_(this.a,null)},
$S:z+16}
B.cX_.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fu()},
$S:8}
B.cWY.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).M(x)
return null},
$S:2}
B.cWZ.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.dHK.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zr()},
$S:14}
B.dH7.prototype={
$0(){var x=J.bAc(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dH8.prototype={
$0(){var x=J.bAc(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGH.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dGG(this.b))
if(w>=0){x=x.d
x[w]=x[w].aA1(this.c)}},
$S:0}
B.dGG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGI.prototype={
$0(){var x=J.bAc(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGN.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dGM(this.b))
if(w>=0){x=x.d
x[w]=x[w].aA1(this.c)}},
$S:0}
B.dGM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHy.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dHz.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dH4.prototype={
$1(d){return new B.SR(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dH1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GJ(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SV(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rR(),$async$$0)
case 5:s=J.a6(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.ZC(s.gI(t)),$async$$0)
case 8:case 7:r.hM(s.gah(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGL.prototype={
$1(d){this.a.a9c(d,"No files selected.","Added")},
$S:451}
B.dHc.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.J(x,new B.dHb(),A.U(x).k("J<1,n>")))},
$S:0}
B.dHb.prototype={
$1(d){return d.a},
$S:z+2}
B.dGR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wl.c2().cJu(C.Wz,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fh(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aE.gah(o)}else o=!1
if(o){o=q.c
o.toString
k=A.je(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a5(j)
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
return A.b(B.amC(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.hM("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rR(),$async$$0)
case 9:o.hM("Imported "+J.a9(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dHv.prototype={
$1(d){return new B.NQ(this.a.a.c,this.b,null)},
$S:z+7}
B.dHw.prototype={
$1(d){return new B.X1(this.a.a.c,this.b,null)},
$S:z+18}
B.dHx.prototype={
$1(d){return new B.WZ(this.a.a.c,this.b,null)},
$S:z+19}
B.dH2.prototype={
$1(d){return new B.NQ(this.a.a.c,this.b,null)},
$S:z+7}
B.dH3.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dHo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GJ(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4R(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cen(),$async$$0)
case 5:x=6
return A.b(p.rR(),$async$$0)
case 6:r=A.U(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dHk(p),r),new B.dHl(),r.k("J<ai.E,n>")).bZ(0,new B.dHm())
q=A.z(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cr(A.eH(new B.dHn(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oB(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.T0(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHk.prototype={
$1(d){var x=this.a,w=C.d.bi(x.d,new B.dHj(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dHj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHl.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dHm.prototype={
$1(d){return d.length!==0},
$S:3}
B.dHn.prototype={
$1(d){var x=this.a
return new B.X3(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dHp.prototype={
$1(d){return d.a},
$S:z+2}
B.dHq.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dHi.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.at(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.ku,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaml(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.m_(D.m7)?C.rY:C.oe
p=!x||p.m_(D.m7)?"Play video":"View"
return A.bT(A.bq(!0,new A.C(C.zI,A.u(A.a([q,o,t,C.ay,B.X2(!1,u,!1,w,p,new B.dHd(d),v),B.X2(!1,u,!1,C.j5,"Share via QR",new B.dHe(d),"Letters/numbers QR code"),B.X2(!1,u,!1,D.XC,"Send to their Code",new B.dHf(d),"Enter someone else's personal code"),B.X2(!1,u,!1,C.hm,"Download / save",new B.dHg(d),v),C.ar,B.X2(!1,u,!0,C.e4,"Delete",new B.dHh(d),v)],y.p),C.af,v,C.e,C.R,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.c2(new A.ay(r,1,C.r,-1),C.V,C.V,C.V),C.kk,v,v,C.n),C.ba)},
$S:684}
B.dHd.prototype={
$0(){A.a8(this.a,!1).M("view")
return null},
$S:0}
B.dHe.prototype={
$0(){A.a8(this.a,!1).M("qr")
return null},
$S:0}
B.dHf.prototype={
$0(){A.a8(this.a,!1).M("send_my_code")
return null},
$S:0}
B.dHg.prototype={
$0(){A.a8(this.a,!1).M("save")
return null},
$S:0}
B.dHh.prototype={
$0(){A.a8(this.a,!1).M("delete")
return null},
$S:0}
B.dGO.prototype={
$1(d){return d.a},
$S:z+2}
B.dGP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dGQ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4T(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.F0(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oB(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGK.prototype={
$1(d){var x=this.a
x.rS(new B.dGJ(x,d,this.b),"Preparing\u2026")},
$S:451}
B.dGJ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SV(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bza(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH5.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dH6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fBd(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EY(new B.dGW(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dGX(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dGY(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dx,new B.dGZ()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rR(),$async$$0)
case 9:s.hM("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGW.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGT(x,d,e))},
$S:132}
B.dGT.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGX.prototype={
$1(d){return new B.a9R(this.a.a,null)},
$S:z+21}
B.dGY.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dGZ.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dH0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GR(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4H(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aWg(B.GR(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amC(new B.dGU(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.fBc(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rR(),$async$$0)
case 10:o=J.cA(r)
p=o.eE(r,new B.dGV()).gI(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGU.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGS(x,d,e))},
$S:132}
B.dGS.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGV.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m7)},
$S:z+1}
B.dHa.prototype={
$1(d){return new B.X4(this.a.a.c,null)},
$S:z+23}
B.dH9.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWp(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHu.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bT(A.bq(!0,new A.C(C.zI,A.u(A.a([A.at(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.ku,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.X2(!0,w,!1,C.mD,"My Code",new B.dHr(d),"Your personal code & QR \u2014 others send docs to you"),B.X2(!1,w,!1,D.XC,"Send to their Code",new B.dHs(this.a,d),"Enter someone else's 5-digit code + letter"),B.X2(!1,w,!1,S.xf,"Import backup",new B.dHt(d),".ngmydoc file from another device")],y.p),C.af,x,C.e,C.R,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.c2(new A.ay(t,1,C.r,-1),C.V,C.V,C.V),C.kk,x,x,C.n),C.ba)},
$S:684}
B.dHr.prototype={
$0(){A.a8(this.a,!1).M("my_code")
return null},
$S:0}
B.dHs.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.bwb()},
$S:0}
B.dHt.prototype={
$0(){A.a8(this.a,!1).M("import")
return null},
$S:0}
B.dHH.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.H_(D.Nv,x,C.Xx,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cJ(C.d.gK(D.Nv).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dHF.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.dHG.prototype={
$0(){this.a.afd()
return null},
$S:0}
B.dHI.prototype={
$3(d,e,f){return A.d7(A.dP(f,new A.v(0,(1-e)*10)),e)},
$S:107}
B.dHJ.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.a9T(e,w,v,this.b,x.e,x.bZU(w),new B.dHB(x,w),new B.dHC(x,v,w),new B.dHD(x,w),new B.dHE(x,w),null)},
$S:z+24}
B.dHB.prototype={
$0(){this.a.act(this.b)
return null},
$S:0}
B.dHC.prototype={
$0(){var x=this.a
return x.n(new B.dHA(x,this.b,this.c))},
$S:0}
B.dHA.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dHD.prototype={
$0(){this.a.Mf(this.b)
return null},
$S:0}
B.dHE.prototype={
$0(){this.a.af0(this.b)
return null},
$S:0}
B.cWW.prototype={
$3(d,e,f){return A.d7(A.dP(f,new A.v(0,(1-e)*18)),e)},
$S:107}
B.cWX.prototype={
$3(d,e,f){return A.e5(C.A,f,e,null,null)},
$S:134}
B.cXj.prototype={
$3(d,e,f){return A.d7(A.dP(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.cXi.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cXf.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cXg.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cXh.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cXd.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aE.gah(w))return A.fD(w,C.A,x,new B.cXb(this.a),C.fK,C.dp,!0,x,!1,x,x)
$.aT.x1$.push(new B.cXc(this.a))
return C.bF},
$S:140}
B.cXb.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cX9(this.a))
return C.bF},
$S:186}
B.cX9.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cX6(x))},
$S:8}
B.cX6.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXc.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cX8(x))},
$S:8}
B.cX8.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXe.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXa(this.a))
return C.bF},
$S:186}
B.cXa.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cX7(x))},
$S:8}
B.cX7.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWT.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWS(x,d))},
$S:1737}
B.cWS.prototype={
$0(){return this.a.f=this.b===C.tu},
$S:0}
B.cWU.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWR(x,d))},
$S:8}
B.cWR.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cWV.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWQ(x,d))},
$S:8}
B.cWQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cWM.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cWN.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cWO.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cWP.prototype={
$1(d){return this.a.d.Lh(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cXw.prototype={
$0(){var x=this.a.a
return B.qN(x.c,x.d)},
$S:1738}
B.cXx.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cXy.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cXz.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cXA.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cXB.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cXD.prototype={
$0(){var x=this.a
x.n(new B.cXC(x))},
$S:0}
B.cXC.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.p7(0)},
$S:0}
B.cXs.prototype={
$1(d){return this.a.OM(this.b)},
$S:14}
B.cXt.prototype={
$1(d){return this.a.OL(this.b)},
$S:14}
B.cXk.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cXl.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cXm.prototype={
$1(d){return D.fet},
$S:z+25}
B.cXr.prototype={
$2(d,e){if(d)B.T0()},
$S:118}
B.cXn.prototype={
$0(){return this.a.a78(this.b)},
$S:0}
B.cXo.prototype={
$0(){return this.a.a75(this.b)},
$S:0}
B.cXp.prototype={
$0(){return this.a.ab9(this.b)},
$S:0}
B.cXq.prototype={
$0(){return this.a.a_e(this.b)},
$S:0}
B.cWL.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.cXv.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pb(),$async$$0)
case 2:u.n(new B.cXu(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cXu.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c3_.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m7)},
$S:z+1}
B.c30.prototype={
$1(d){var x=d.b,w=A.ae("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2Z.prototype={
$2(d,e){return this.bdT(d,e)},
bdT(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.T1(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1739}
B.f9e.prototype={
$1(d){if(d===D.a2q&&(this.a.a.a&30)===0)this.a.fC(0)},
$S:z+27}
B.f9f.prototype={
$0(){},
$S:11}
B.f9J.prototype={
bfr(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eZC(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fQP(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfr(d,e)},
$S:521}
B.f9I.prototype={
$1(d){var x=this
d.b=new B.f9H(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f9H.prototype={
$1(d){return this.bfq(d)},
bfq(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWq(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aD(0,n,null)
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
return A.b(B.eZC(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.a5(j)
$.al.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4Q(m),$async$$1)
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
x(v=B.awm.prototype,"gc5D","On",0)
x(v,"gc6s","HH",0)
x(v,"gc5Z","wX",0)
x(v=B.aAc.prototype,"gbZO","ab7",0)
x(v,"gbZP","Xs",0)
x(v,"gckA","aeJ",0)
x(v=B.aAf.prototype,"gbZQ","Xt",0)
x(v,"gckB","a_y",0)
x(B.aAd.prototype,"gbZR","ab8",0)
x(B.awl.prototype,"gbZW","bZX",4)
x(v=B.aAe.prototype,"gc6_","Yx",0)
x(v,"gcjc","cjd",4)
x(v,"gaXl","auM",0)
x(v,"gcm1","af7",0)
x(v,"gbHL","Vu",0)
x(v,"gbZV","D_",0)
x(B.awn.prototype,"gb03","a_x",0)
x(B.awk.prototype,"gbZY","Xu",0)
x(v=B.awq.prototype,"gaW5","c4l",4)
x(v,"gbZS","abb",0)
x(v=B.awo.prototype,"gcie","a_j",0)
x(v,"gaUm","aba",0)
w(B.awj.prototype,"gats","att",8)
x(v=B.awp.prototype,"gc8B","acW",0)
x(v,"gbHj","a7T",0)
w(v,"gats","att",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cdL,B.a77,B.aqS,B.ayQ,B.aBY,B.j9,B.a9z,B.brh,B.DF,B.V9])
w(B.cdM,B.cdL)
w(B.b0w,B.a77)
x(A.i3,[B.cdH,B.cdI,B.cdJ,B.cdG,B.cdK,B.cdN,B.cdO,B.cdP,B.cdQ,B.cdR,B.cdS,B.cdT,B.cdU,B.f49,B.foY,B.fp_,B.foZ,B.fpc,B.fpd,B.f5s,B.cX0,B.cX2,B.cX1,B.cX5,B.f7r,B.f7V,B.c2u,B.c2B,B.c2C,B.c2x,B.c2v,B.c2y,B.c2z,B.fpa,B.fpb,B.dHO,B.dHX,B.dHV,B.dHW,B.f1m,B.f5E,B.f5F,B.c2T,B.f5H,B.f9B,B.f4l,B.f4m,B.c2Y,B.ftG,B.cX_,B.cWY,B.dHK,B.dGG,B.dGM,B.dH4,B.dGL,B.dHb,B.dHv,B.dHw,B.dHx,B.dH2,B.dHk,B.dHj,B.dHl,B.dHm,B.dHn,B.dHp,B.dHq,B.dHi,B.dGO,B.dGP,B.dGK,B.dH5,B.dGX,B.dGV,B.dHa,B.dHu,B.dHH,B.dHI,B.cWW,B.cWX,B.cXj,B.cXi,B.cXd,B.cXb,B.cX9,B.cXc,B.cXe,B.cXa,B.cWT,B.cWU,B.cWV,B.cWP,B.cXs,B.cXt,B.cXm,B.c3_,B.c30,B.f9e,B.f9I,B.f9H])
w(B.b0x,B.aqS)
x(A.jk,[B.foX,B.cX3,B.cX4,B.f7p,B.f7q,B.f7U,B.dGD,B.dHM,B.dHN,B.dHL,B.dHP,B.dHQ,B.dHR,B.dHS,B.dHT,B.dHU,B.dGE,B.dGF,B.f5G,B.cWZ,B.dH7,B.dH8,B.dGH,B.dGI,B.dGN,B.dHy,B.dHz,B.dH1,B.dHc,B.dGR,B.dH3,B.dHo,B.dHd,B.dHe,B.dHf,B.dHg,B.dHh,B.dGQ,B.dGJ,B.dH6,B.dH_,B.dGT,B.dGY,B.dGZ,B.dH0,B.dGS,B.dH9,B.dHr,B.dHs,B.dHt,B.dHF,B.dHG,B.dHB,B.dHC,B.dHA,B.dHD,B.dHE,B.cXf,B.cXg,B.cXh,B.cX6,B.cX8,B.cX7,B.cWS,B.cWR,B.cWQ,B.cWM,B.cWN,B.cWO,B.cXw,B.cXx,B.cXy,B.cXz,B.cXA,B.cXB,B.cXD,B.cXC,B.cXk,B.cXl,B.cXn,B.cXo,B.cXp,B.cXq,B.cWL,B.cXv,B.cXu,B.f9f])
x(A.md,[B.a9S,B.LF,B.a78,B.MH,B.V8,B.MG,B.DG])
x(A.af,[B.X0,B.SQ,B.SU,B.SR,B.X_,B.SS,B.X1,B.WZ,B.NQ,B.X3,B.WY,B.X4])
x(A.ag,[B.awm,B.aAc,B.aAf,B.aAd,B.awl,B.aAe,B.awn,B.awk,B.awq,B.awo,B.awj,B.awp])
x(A.as,[B.aaj,B.awi,B.b9J,B.a9T,B.a9R,B.b9K])
x(A.kz,[B.c2A,B.c2w,B.c2E,B.c2F,B.fpL,B.dGW,B.dGU,B.dHJ,B.cXr,B.c2Z,B.f9J])
x(A.iH,[B.bf1,B.bqX])})()
A.kf(b.typeUniverse,JSON.parse('{"b0w":{"a77":[]},"b0x":{"aqS":[]},"X0":{"af":[],"r":[]},"awm":{"ag":["X0"]},"aaj":{"as":[],"r":[]},"SQ":{"af":[],"r":[]},"SU":{"af":[],"r":[]},"aAc":{"ag":["SQ"]},"aAf":{"ag":["SU"]},"bf1":{"iH":[]},"SR":{"af":[],"r":[]},"aAd":{"ag":["SR"]},"X_":{"af":[],"r":[]},"SS":{"af":[],"r":[]},"a9T":{"as":[],"r":[]},"X1":{"af":[],"r":[]},"WZ":{"af":[],"r":[]},"NQ":{"af":[],"r":[]},"X3":{"af":[],"r":[]},"a9R":{"as":[],"r":[]},"WY":{"af":[],"r":[]},"X4":{"af":[],"r":[]},"awl":{"ag":["X_"]},"bqX":{"iH":[]},"aAe":{"ag":["SS"]},"awi":{"as":[],"r":[]},"b9J":{"as":[],"r":[]},"awn":{"ag":["X1"]},"awk":{"ag":["WZ"]},"awq":{"ag":["NQ"]},"awo":{"ag":["X3"]},"awj":{"ag":["WY"]},"awp":{"ag":["X4"]},"b9K":{"as":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tw"),k:x("Kb()"),m:x("bs<n,n>"),F:x("qq"),g:x("aw<j9?>"),x:x("aw<~>"),V:x("O<aa>"),O:x("O<w>"),W:x("O<bf>"),Y:x("O<a1<n,T>>"),t:x("O<a1<n,@>>"),r:x("O<j9>"),w:x("O<+file,name(lh,n)>"),u:x("O<cJ>"),s:x("O<n>"),E:x("O<iH>"),a:x("O<dz>"),p:x("O<r>"),Z:x("O<I>"),G:x("bf"),A:x("cn<ag<af>>"),n:x("ak<j9>"),j:x("ak<@>"),I:x("ak<I>"),M:x("br<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iC"),e:x("hUe"),af:x("CW"),U:x("j9"),b:x("co"),C:x("aB"),aK:x("vl"),ab:x("DF"),br:x("aqS"),v:x("V9"),N:x("n"),X:x("bl<P>"),Q:x("ls"),D:x("dz"),aw:x("cx<n>"),cd:x("a4<a1<n,@>>"),c7:x("r"),ch:x("bO<ak<j9>>"),aW:x("bO<dz?>"),aY:x("bO<~>"),cx:x("a9S"),b1:x("be<ak<j9>>"),cf:x("be<dz?>"),d4:x("be<~>"),c4:x("ayQ"),bG:x("aBY"),q:x("mC"),B:x("oS<DF>"),c6:x("oS<a78>"),y:x("T"),i:x("P"),z:x("@"),S:x("I"),aQ:x("bf?"),_:x("ak<j9>?"),aL:x("ak<@>?"),h:x("a1<n,@>?"),l:x("j9?"),R:x("aB?"),c:x("V9?"),d:x("+answerQr,transfer(n,aw<ak<j9>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,LF,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9z?"),bk:x("ayQ?"),ag:x("aBY?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aQi=new A.ay(C.aB,2,C.r,-1)
D.bGL=new A.a7(C.a3,C.a7,C.w,C.Zx,null,null)
D.aRV=new A.o(null,null,null,C.mk,null,D.bGL,C.n)
D.aTg=new A.o(null,null,null,C.mk,null,E.F0,C.n)
D.a88=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a96=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9O=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.abb=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eQ5=new A.x("Your team portal",null,C.dQ,null,null,null,null,null,null,null,null,null)
D.f2d=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Hk,null,null,null,null,null,null,null,null,null)
D.cO_=x([D.eQ5,C.ar,D.f2d],y.p)
D.bbc=new A.fk(C.aj,C.e,C.j,C.F,null,C.p,null,0,D.cO_,null)
D.f68=new A.x("Create your organization",null,C.hc,null,null,null,null,null,null,null,null,null)
D.eU3=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Hk,null,null,null,null,null,null,null,null,null)
D.d0G=x([D.f68,C.ar,D.eU3],y.p)
D.bbk=new A.fk(C.aj,C.e,C.j,C.F,null,C.p,null,0,D.d0G,null)
D.f2L=new A.x("Team Member sign-in",null,C.hc,null,null,null,null,null,null,null,null,null)
D.eXx=new A.x("Enter the access code and password from your organization.",null,G.Hk,null,null,null,null,null,null,null,null,null)
D.cZQ=x([D.f2L,C.ar,D.eXx],y.p)
D.bbv=new A.fk(C.aj,C.e,C.j,C.F,null,C.p,null,0,D.cZQ,null)
D.bgR=new A.M(16,10,16,28)
D.bgZ=new A.M(16,14,16,4)
D.bic=new A.M(20,0,20,16)
D.biI=new A.M(20,8,20,16)
D.adI=new A.M(24,22,24,20)
D.XC=new A.a0(63394,"MaterialIcons",!1)
D.agx=new A.a0(63515,"MaterialIcons",!1)
D.bss=new A.a0(983813,"MaterialIcons",!1)
D.bpL=new A.a0(62867,"MaterialIcons",!1)
D.btq=new A.ad(D.bpL,44,C.c,null,null,null)
D.buu=new A.ad(C.rQ,null,C.al,null,null,null)
D.bvR=new A.ad(C.iL,18,null,null,null,null)
D.bxv=new A.ad(D.XC,26,C.c,null,null,null)
D.by0=new A.ad(C.EF,null,null,null,null,null)
D.byz=new A.ad(C.xh,null,null,null,null,null)
D.bzG=new A.ad(W.Lm,null,null,null,null,null)
D.bA0=new A.ad(C.h7,16,null,null,null,null)
D.bDh=new A.ad(C.qn,16,null,null,null,null)
D.btI=new A.ad(C.mD,null,null,null,null,null)
D.bE8=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.btI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bz6=new A.ad(C.Ed,null,null,null,null,null)
D.bEc=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bz6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bu1=new A.ad(N.EP,null,null,null,null,null)
D.bEm=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bu1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cq5=x([C.f1,C.aW,C.aB],y.O)
D.bIC=new A.a7(C.ax,C.aC,C.w,D.cq5,null,null)
D.cpB=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nv=x([C.f1,C.aB],y.O)
D.NI=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cV9=x([C.q3,C.aB],y.O)
D.dJw={iceServers:0}
D.aAT={urls:0}
D.d4f=new A.bs(D.aAT,["stun:stun.l.google.com:19302"],y.m)
D.d4e=new A.bs(D.aAT,["stun:stun1.l.google.com:19302"],y.m)
D.cFd=x([D.d4f,D.d4e],A.az("O<a1<n,n>>"))
D.d3A=new A.bs(D.dJw,[D.cFd],A.az("bs<n,@>"))
D.G1=new B.LF(0,"lanDirect")
D.OY=new B.LF(1,"cloudStash")
D.deP=new B.LF(2,"inlineInstant")
D.OZ=new B.LF(3,"webrtcLink")
D.xX=new B.LF(4,"videoCloud")
D.f2c=new A.x("Receive file",null,C.mV,null,null,null,null,null,null,null,null,null)
D.cfP=x([E.aid,C.aa,D.f2c],y.p)
D.emN=new A.cC(C.aZ,C.b6,C.j,C.m,null,C.p,null,0,D.cfP,null)
D.dOH=new A.C(C.cc,D.emN,null)
D.eHB=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a_9,null,null,null)
D.eQB=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eHB,null,C.L,null,null,null,null,null,null,null)
D.dO2=new A.C(C.zP,D.eQB,null)
D.aXg=new A.cw(C.A,null,null,D.dO2,null)
D.dTD=new A.cF(0,null,0,28,null,null,D.aXg,null)
D.dTV=new B.a78(0,"RTCDataChannelConnecting")
D.aFY=new B.a78(1,"RTCDataChannelOpen")
D.aFZ=new B.a78(3,"RTCDataChannelClosed")
D.dTW=new B.DG(0,"RTCIceConnectionStateNew")
D.dTX=new B.DG(1,"RTCIceConnectionStateChecking")
D.dTY=new B.DG(2,"RTCIceConnectionStateCompleted")
D.dTZ=new B.DG(3,"RTCIceConnectionStateConnected")
D.dU_=new B.DG(4,"RTCIceConnectionStateCount")
D.dU0=new B.DG(5,"RTCIceConnectionStateFailed")
D.dU1=new B.DG(6,"RTCIceConnectionStateDisconnected")
D.aG_=new B.DG(7,"RTCIceConnectionStateClosed")
D.aG0=new B.V8(0,"RTCIceGatheringStateNew")
D.dU2=new B.V8(1,"RTCIceGatheringStateGathering")
D.a2q=new B.V8(2,"RTCIceGatheringStateComplete")
D.a2r=new B.MG(0,"RTCPeerConnectionStateClosed")
D.aG1=new B.MG(1,"RTCPeerConnectionStateFailed")
D.aG2=new B.MG(2,"RTCPeerConnectionStateDisconnected")
D.aG3=new B.MG(3,"RTCPeerConnectionStateNew")
D.aG4=new B.MG(4,"RTCPeerConnectionStateConnecting")
D.aG5=new B.MG(5,"RTCPeerConnectionStateConnected")
D.dU3=new B.MH(0,"RTCSignalingStateStable")
D.dU4=new B.MH(1,"RTCSignalingStateHaveLocalOffer")
D.dU5=new B.MH(2,"RTCSignalingStateHaveRemoteOffer")
D.dU6=new B.MH(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dU7=new B.MH(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aG6=new B.MH(5,"RTCSignalingStateClosed")
D.eqm=new A.ar(160,48)
D.aYp=new A.fb(2,null,null,null,null,C.aB,null,null,null,null)
D.erO=new A.a3(16,16,D.aYp,null)
D.eTv=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.etd=new A.b_(D.eTv,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f_i=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.etg=new A.b_(D.f_i,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f78=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.etn=new A.b_(D.f78,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eT8=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.etN=new A.b_(D.eT8,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f2U=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aIv=new A.b_(D.f2U,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f49=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.euf=new A.b_(D.f49,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f8q=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.euu=new A.b_(D.f8q,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f6A=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.euz=new A.b_(D.f6A,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f7I=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.evk=new A.b_(D.f7I,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRR=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.evR=new A.b_(D.eRR,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f0Z=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ewb=new A.b_(D.f0Z,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVx=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ewH=new A.b_(D.eVx,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f8w=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ewL=new A.b_(D.f8w,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eS6=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ewR=new A.b_(D.eS6,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQV=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ex5=new A.b_(D.eQV,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eO3=new A.x("NGMY DOC SHARE",null,C.aJK,null,null,null,null,null,null,null,null,null)
D.ePf=new A.x("Show this to sender",null,C.kg,null,null,null,null,null,null,null,null,null)
D.eQb=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eUq=new A.x("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eUK=new A.x("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.eVH=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eW6=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eYE=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.f0d=new A.x("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.f0w=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f0O=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.f1i=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new A.x("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.f1J=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eM,null,null,null,null,null,null,null,null,null)
D.f4A=new A.x("Share files & videos\nwith a scan.",null,C.aJL,null,null,null,null,null,null,null,null,null)
D.f4S=new A.x("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fet=new B.WY(null)
D.a5i=new B.a9S(0,"docShare")
D.a5j=new B.a9S(1,"gate")
D.RJ=new B.a9S(2,"gateNoIndividual")})();(function staticFields(){$.aKw=null
$.eXt=function(){var x=y.N
return A.S(x,x)}()
$.EM=A.S(y.N,y.D)
$.adO=A.S(y.N,A.az("lh"))
$.P5=A.S(y.N,y.D)
$.eY_=A.S(y.N,A.az("a9z"))
$.c2S=A.S(y.S,A.az("brh"))
$.fQO=1
$.hCk=null
$.hCj=null
$.hue=null
$.fGc=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hUJ","h6E",()=>new B.cdM())
x($,"hSE","fJF",()=>C.a.t(A.bp(A.bp(A.bp(A.Fj(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["ECP0d2GnNMkct+XK+VxXw8Yb4Wo="]=a.current})($__dart_deferred_initializers__);