((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={ceq:function ceq(){},
hpm(d){var x=null,w=new B.b0M(d,D.dWz,new A.oU(x,x,y.c6),new A.oU(x,x,y.B))
w.bsy(d)
return w},
b0M:function b0M(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cel:function cel(d){this.a=d},
cem:function cem(d){this.a=d},
cen:function cen(d){this.a=d},
cek:function cek(d){this.a=d},
ceo:function ceo(d){this.a=d},
hpn(d,e){var x=y.N
x=new B.b0N(d,e,A.T(x,y.e),A.T(x,y.z))
x.bsz(d,e)
return x},
b0N:function b0N(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cer:function cer(d){this.a=d},
ces:function ces(d){this.a=d},
cet:function cet(d){this.a=d},
ceu:function ceu(d){this.a=d},
cev:function cev(d){this.a=d},
cew:function cew(d){this.a=d},
cex:function cex(d){this.a=d},
cey:function cey(d){this.a=d},
fHd(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xz.Kr(x,"ngmy_doc_share_v1",new B.f5s(),1)},
hvQ(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cm(d))
if(y.J.b(d))return new Uint8Array(A.cm(J.eQ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cm(A.Bd(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cy.aG(d)
return x}catch(w){return v}return v},
Ps(d,e){return B.hKM(d,e)},
hKM(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ps=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKK
x=7
return A.b(o==null?$.aKK=B.fHd():o,$async$Ps)
case 7:s=g
r=new Uint8Array(A.cm(e))
q=J.mn(s,"blobs","readwrite")
C.iz.lM(J.ml(q,"blobs"),r,d)
x=8
return A.b(J.p2(q),$async$Ps)
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
return A.i($async$Ps,w)},
Pr(d){return B.hKL(d)},
hKL(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKK
x=7
return A.b(o==null?$.aKK=B.fHd():o,$async$Pr)
case 7:s=f
r=J.mn(s,"blobs","readonly")
x=8
return A.b(C.iz.yy(J.ml(r,"blobs"),d),$async$Pr)
case 8:q=f
x=9
return A.b(J.p2(r),$async$Pr)
case 9:o=B.hvQ(q)
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
return A.i($async$Pr,w)},
aeC(d){return B.hKK(d)},
hKK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aeC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKK
x=7
return A.b(p==null?$.aKK=B.fHd():p,$async$aeC)
case 7:s=f
r=J.mn(s,"blobs","readwrite")
C.iz.Ew(J.ml(r,"blobs"),d)
x=8
return A.b(J.p2(r),$async$aeC)
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
return A.i($async$aeC,w)},
f5s:function f5s(){},
hy6(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bl_(w,v))}return u},
h5w(d,e){var x,w={},v=A.aSU("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fqi(w,v,e)
C.uY.xs(v,"change",new B.fqk(w,v,!1))
C.uY.xs(v,"cancel",new B.fqj(w))
$.eK.lV()
v.click()
A.bN(C.acj,new B.fqh(w),y.H)},
fqi:function fqi(d,e,f){this.a=d
this.b=e
this.c=f},
fqk:function fqk(d,e,f){this.a=d
this.b=e
this.c=f},
fqj:function fqj(d){this.a=d},
fqh:function fqh(d){this.a=d},
BX(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BX=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRS()?3:4
break
case 3:x=5
return A.b(B.h0L(e,d,s,!0,!1,f,g,h,!1,i),$async$BX)
case 5:x=1
break
case 4:x=6
return A.b(B.P7(d,s,f,g,h,i),$async$BX)
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
return A.b(B.H3(s,d),$async$BX)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f0U(s,d),$async$BX)
case 14:x=12
return A.b(r.h0L(q,p,o,n,m,l,k,j,a1,i),$async$BX)
case 12:x=8
break
case 10:x=15
return A.b(A.a9(e,!1).cp(A.eF(new B.fqx(s,i,d,f,g,h),!1,null,y.H)),$async$BX)
case 15:x=8
break
case 11:x=16
return A.b(A.a9(e,!1).cp(A.eF(new B.fqy(s,i,d,f,g,h),!1,null,y.H)),$async$BX)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BX,w)},
P7(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$P7=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWy(e),$async$P7)
case 3:u=k
x=4
return A.b(B.amE(d,e,!1),$async$P7)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.H3(e,d),$async$P7)
case 7:if(k){v=D.a5I
x=1
break}x=8
return A.b(B.T2(e),$async$P7)
case 8:v=t?D.S9:D.a5J
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aWw(d,e)){v=D.a5I
x=1
break}x=11
return A.b(B.T2(e),$async$P7)
case 11:v=t?D.S9:D.a5J
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fCt(d,e)){v=D.a5I
x=1
break}x=14
return A.b(B.T2(e),$async$P7)
case 14:v=D.S9
x=1
break
case 13:v=t?D.S9:D.a5J
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P7,w)},
f0U(d,e){var x=0,w=A.j(y.y),v
var $async$f0U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aWw(e,d)){v=!1
x=1
break}x=3
return A.b(B.aWy(d),$async$f0U)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f0U,w)},
h0L(d,e,f,g,h,i,j,k,l,m){return A.a9(d,!1).cp(A.eF(new B.f6L(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fX_(d,e,f,g,h,i,j){return new B.Xb(e,j,d,g,h,i,f,null)},
f8H(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f8H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.c1(C.K,null,new B.f8K(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f8H)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8H,w)},
f9b(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f9b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.c1(C.K,null,new B.f9d(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f9b)
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
return A.i($async$f9b,w)},
fHl(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b3(4,A.m(16),C.Z),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fiS(d,e){var x=0,w=A.j(y.H),v
var $async$fiS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.T2(e),$async$fiS)
case 3:if(d.e==null){x=1
break}A.a9(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fiS,w)},
fqx:function fqx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqy:function fqy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aa0:function aa0(d,e){this.a=d
this.b=e},
f6L:function f6L(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Xb:function Xb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awy:function awy(){this.c=this.a=this.d=null},
cXJ:function cXJ(d,e){this.a=d
this.b=e},
cXG:function cXG(d){this.a=d},
cXI:function cXI(d){this.a=d},
cXH:function cXH(d){this.a=d},
cXL:function cXL(){},
cXK:function cXK(d){this.a=d},
aas:function aas(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
az1:function az1(d,e){this.a=d
this.b=e},
aC9:function aC9(d,e,f){this.a=d
this.b=e
this.c=f},
f8K:function f8K(d,e,f){this.a=d
this.b=e
this.c=f},
f8I:function f8I(d){this.a=d},
f8J:function f8J(d,e,f){this.a=d
this.b=e
this.c=f},
f9d:function f9d(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9c:function f9c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c37(d,e,f,g,h){return B.hkj(d,e,f,g,h)},
hkj(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c37=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iD(r.di(d,new B.c38(s,e,h,g,f,q),y.g),y.l),$async$c37)
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
return A.i($async$c37,w)},
aWt(d,e,f,g,h){return B.hkk(d,e,f,g,h)},
hkk(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aWt=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arS("GET",d)
o=A.fz1()
if(o==null)o=new A.Kh(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cK(0,C.DR),$async$aWt)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bf(),$async$aWt)
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
return A.i($async$aWt,w)},
aWs(d){return B.hkh(d)},
hkh(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aWs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uH(d,null).cK(0,C.np),$async$aWs)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aF(0,A.is(A.ir(p.e)).c6(0,p.w),null)
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
return A.i($async$aWs,w)},
c36(d){return B.hki(d)},
hki(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c36=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uH(d,null).cK(0,C.p7),$async$c36)
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
return A.i($async$c36,w)},
c38:function c38(d,e,f,g,h,i){var _=this
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
H1(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ae("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hkp(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.H1(C.a.aY(u,v.length))}return null},
hkq(d){var x=B.H1(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hkl(){var x,w=$.p_(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.aC(10)
return C.d.fN(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(24)]},
a4P(d){return B.hkm(d)},
hkm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eW(d,null,!1,C.bE),$async$a4P)
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
return A.i($async$a4P,w)},
a4Q(d,e){return B.hkn(d,e)},
hkn(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4Q=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hv(d,e,!1,!1,C.cD,null),$async$a4Q)
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
return A.i($async$a4Q,w)},
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
r=B.H1(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4R(r),$async$AB)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4P("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$AB)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.H1(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$AB)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hkl()
x=14
return A.b(B.a4R(m),$async$AB)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a5().ab()
x=15
return A.b(B.a4Q("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AB)
case 15:k=f
x=16
return A.b(B.a4Q("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AB)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$AB)
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
a4R(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.H1(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4P("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4R)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4R,w)},
a4S(d,e,f,g){return B.hkr(d,e,f,g)},
hkr(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4S=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gai(d)){v=!1
x=1
break}r=B.H1(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4R(r),$async$a4S)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.c3e())>1048576||g.ba(d,new B.c3f())){v=B.Dn(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a52("myCode",d,a0),$async$a4S)
case 4:u=a3
try{t=C.R.aF(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cj(s)||J.aa(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Dn(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWB(u,g.gJ(d),a0),$async$a4S)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.p_().aC(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.di(d,new B.c3g(),i)
h=A.A(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aWu(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a5().ab(),"status","pending"],i,y.z),q),$async$a4S)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4S,w)},
Dn(d,e,f,g,h){return B.hko(d,e,f,g,h)},
hko(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dn=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$Dn)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cG(a6,0,new B.c3a())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.p_().aC(9999)
h=Date.now()
g=""+1000*h+"_"+C.cE.aC(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gah(a6),e=y.N,d=y.z
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
a1=B.H5(a9,q)
a0=new A.IT(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Dn)
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
a4=A.ot(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a8i(a1.a,a4,"media",a1.d,a2).w7(m,n,new A.CI(!0,q.c)),$async$Dn)
case 12:J.cb(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$Dn)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aNb(r),$async$Dn)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.di(a6,new B.c3b(),e)
a1=A.A(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aWu(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a5().ab(),"status","pending"],e,d),a8),$async$Dn)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aNb(r),$async$Dn)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dn,w)},
aWu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aWu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4P(t),$async$aWu)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b5(r,new B.c39(),y.P)
r=A.A(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4Q(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWu,w)},
LO(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$LO=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4P("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$LO)
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
return A.b(B.aWv(k,a0),$async$LO)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.Q(Date.now(),0,!1).a5().ab())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aWA(h),$async$LO)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.T9(g,a0),$async$LO)
case 10:f=a3
if(f!=null&&J.cu(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.Q(Date.now(),0,!1).a5().ab())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.A(new A.a3(r,new B.c3c(),q),n)
d=A.A(new A.a3(r,new B.c3d(),q),n)
q=A.A(e,y.P)
C.d.v(q,A.dc(d,0,A.dH(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a4Q("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$LO)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$LO,w)},
aWv(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aWv=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}o=J.a8(p)
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
break}i=B.hOx(k,j)
C.d.v(s,i)
x=5
return A.b(B.BV(l,m,"Received via My Code",t,e,i),$async$aWv)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aNb(s),$async$aWv)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWv,w)},
c3e:function c3e(){},
c3f:function c3f(){},
c3g:function c3g(){},
c3a:function c3a(){},
c3b:function c3b(){},
c39:function c39(){},
c3c:function c3c(){},
c3d:function c3d(){},
fqu(d,e){var x=0,w=A.j(y.H)
var $async$fqu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a9(d,!1).cp(A.eF(new B.fqv(e),!1,null,y.H)),$async$fqu)
case 2:return A.h(null,w)}})
return A.i($async$fqu,w)},
bzx(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bzx=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cj(e)){v=!1
x=1
break}x=3
return A.b(A.a9(d,!1).cp(A.eF(new B.fqw(g,e,f),!1,null,y.y)),$async$bzx)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzx,w)},
fqv:function fqv(d){this.a=d},
fqw:function fqw(d,e,f){this.a=d
this.b=e
this.c=f},
T_:function T_(d,e){this.c=d
this.a=e},
aAo:function aAo(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dHw:function dHw(d,e){this.a=d
this.b=e},
T3:function T3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAr:function aAr(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dIF:function dIF(d){this.a=d},
dIG:function dIG(d){this.a=d},
dIH:function dIH(d){this.a=d},
dIE:function dIE(d,e){this.a=d
this.b=e},
dII:function dII(d){this.a=d},
dIJ:function dIJ(d){this.a=d},
dIK:function dIK(d,e){this.a=d
this.b=e},
dIL:function dIL(d,e){this.a=d
this.b=e},
dIM:function dIM(d,e){this.a=d
this.b=e},
dIN:function dIN(d){this.a=d},
dIQ:function dIQ(){},
dIO:function dIO(d){this.a=d},
dIP:function dIP(d,e){this.a=d
this.b=e},
bfk:function bfk(){},
T0:function T0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAp:function aAp(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dHx:function dHx(d){this.a=d},
dHy:function dHy(d){this.a=d},
fCu(d){var x=d.hD
if(x>=0)return C.o.N(x)
return 10},
hkt(d){var x=d.kd
if(x>=0)return x
return 4.99},
hks(d){var x=d.kW,w=y.N
w=x.iH(x,new B.c3i(),w,w)
return w},
fS8(d){var x=d.ke,w=y.N
w=x.iH(x,new B.c3j(),w,w)
return w},
aWy(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aWy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$aWy)
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
return A.i($async$aWy,w)},
a4U(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$a4U)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a4U)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4U,w)},
T2(d){var x=0,w=A.j(y.H),v,u
var $async$T2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$T2)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$T2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$T2,w)},
fCt(d,e){var x,w,v
if(B.hkt(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hks(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.c8(new A.Q(Date.now(),0,!1))},
aWw(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fS8(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.c8(new A.Q(Date.now(),0,!1))},
fS9(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a_(B.fS8(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.c8(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.m(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ab())
d.ke=w},
amF(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ax(),$async$amF)
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
return A.i($async$amF,w)},
amG(d){var x=0,w=A.j(y.H),v,u,t
var $async$amG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amF(d),$async$amG)
case 3:u=f
x=5
return A.b(A.ax(),$async$amG)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$amG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amG,w)},
amE(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fCu(d)
if(u<=0){v=!1
x=1
break}if(B.fCt(d,e)){v=!1
x=1
break}x=3
return A.b(B.amF(e),$async$amE)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amE,w)},
aWx(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aWx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.H3(e,d),$async$aWx)
case 3:if(g){v=-1
x=1
break}u=B.fCu(d)
if(u<=0){v=-1
x=1
break}if(B.fCt(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amF(e),$async$aWx)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWx,w)},
c3l(d,e,f){var x=0,w=A.j(y.y),v
var $async$c3l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.H3(e,d),$async$c3l)
case 3:if(h){v=!1
x=1
break}v=B.amE(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3l,w)},
c3k(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c3k=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c3l(d,u,i.gRS()),$async$c3k)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3k,w)},
a4T(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4T=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRS()){v=!0
x=1
break}if(B.aWw(d,u)){v=!0
x=1
break}x=5
return A.b(A.l1(u,C.PL),$async$a4T)
case 5:x=k?3:4
break
case 3:B.fS9(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4T)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kG(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.PL,"Doc Share for Organizations"),$async$a4T)
case 7:if(!k){v=!1
x=1
break}B.fS9(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4T)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4T,w)},
c3i:function c3i(){},
c3j:function c3j(){},
fr3(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fr3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fr3)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eYE.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hF([r],e.c))
s.toString
$.eYE.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fr3,w)},
hQH(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eYE.bm($.eYE,new B.fr5(d))},
fr5:function fr5(d){this.a=d},
f__(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f__=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hF([d],f))
s.toString
u=A.mO(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jj,null,y.H),$async$f__)
case 3:C.yT.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eK.lV()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f__,w)},
adv(d,e,f){var x=0,w=A.j(y.H),v
var $async$adv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eZa.m(0,d,new B.a9I(A.bj(e,!0,v)))
x=3
return A.b(A.ax(),$async$adv)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.R.am(A.E(["parts",e,"size",f],v,y.C),null)),$async$adv)
case 2:return A.h(null,w)}})
return A.i($async$adv,w)},
adp(d){return B.hzW(d)},
hzW(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$adp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eZa.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ax(),$async$adp)
case 3:u=j.aS(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aF(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cj(s)){v=null
x=1
break}o=J.b5(s,new B.f2F(),y.N)
n=A.A(o,o.$ti.k("ai.E"))
r=n
o=A.aM(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.a9I(r)
$.eZa.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$adp,w)},
OY(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cm(e))
$.EY.m(0,d,u)
x=3
return A.b(B.Ps(d,u),$async$OY)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OY,w)},
aL4(d){return B.hzU(d)},
hzU(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aL4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EY.h(0,d)
if(n!=null&&!C.aG.gai(n)){v=n
x=1
break}x=3
return A.b(B.Pr(d),$async$aL4)
case 3:p=f
if(p!=null&&!C.aG.gai(p)){$.EY.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ax(),$async$aL4)
case 4:s=f
r=A.aS(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cy.aG(r)
x=!J.cj(q)?9:10
break
case 9:B.OY(d,q)
x=11
return A.b(J.hE(s,d),$async$aL4)
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
return A.i($async$aL4,w)},
hwb(d){if(d==null)return A.fb(null,y.K)
if(y.J.b(d))return A.fb(new Uint8Array(A.cm(J.eQ(d,0,null))),y.K)
if(y.D.b(d))return A.fb(new Uint8Array(A.cm(d)),y.K)
if(y.Q.b(d))return A.fb(new Uint8Array(A.cm(A.Bd(d,0,null))),y.K)
if(y.I.b(d))return A.fb(new Uint8Array(A.cm(d)),y.K)
return A.fb(null,y.K)},
a_B(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.be($.bu,y.cf)
t=new A.bP(u,y.aW)
s=y.aK
A.fD(r,"loadend",new B.f6X(r,t),!1,s)
A.fD(r,"error",new B.f6Y(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i1(0,C.K8,new B.f6Z())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_B,w)},
aLo(d,e,f){return B.hC8(d,e,f)},
hC8(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aLo=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_B(i),$async$aLo)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Ps(o,p),$async$aLo)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cb(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.adv(k,j,s),$async$aLo)
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
return A.i($async$aLo,w)},
aLn(d,e,f){return B.hC7(d,e,f)},
hC7(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aLn=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aLo(d,e,f),$async$aLn)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_B(f),$async$aLn)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EY.m(0,s,r)
$.Pe.m(0,s,r)
x=11
return A.b(B.OY(s,r),$async$aLn)
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
return A.i($async$aLn,w)},
AC(d,e,f,g,h,i){return B.hkC(d,e,f,g,h,i)},
hkC(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$AC=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cE.aC(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.ja(p,q,o,n,new A.Q(Date.now(),0,!1).a5().ab(),a0,f,B.aWE(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OY(s,d),$async$AC)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ax(),$async$AC)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cR.gcs().aG(d)),$async$AC)
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
J.cb(j,m)
x=13
return A.b(B.F8(e,j),$async$AC)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$AC,w)},
T4(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T4=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zH(d),$async$T4)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cE.aC(99999)
n=p.b
l=o.type
l.toString
k=B.fSb(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a5().ab()
i=new B.ja(m,n,k,l,j,"From folder",null,B.aWE(),null)
$.adY.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_B(o),$async$T4)
case 7:g=a1
x=g!=null&&!C.aG.gai(g)?8:10
break
case 8:$.EY.m(0,h,g)
$.Pe.m(0,h,g)
B.OY(h,g)
x=9
break
case 10:x=11
return A.b(B.aLn(d,m,o),$async$T4)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.F8(d,t),$async$T4)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T4,w)},
fCy(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fCy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fSb(r,C.d.gaj(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.H4(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gai(s)){v=B.AC(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCy,w)},
H4(d,e,f,g,h,i){return B.hkB(d,e,f,g,h,i)},
hkB(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$H4=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cE.aC(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IT(A.dH(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$H4)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cj(m)){x=6
break}J.fU(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cm(J.Q_(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kq(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Ps(k,l),$async$H4)
case 11:J.cb(q,k);++p
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
return A.b(j.a9(0),$async$H4)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Ps(k,new Uint8Array(A.cm(n))),$async$H4)
case 15:J.cb(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adv(r,q,g),$async$H4)
case 16:f=new B.ja(i,a1,a0,g,new A.Q(Date.now(),0,!1).a5().ab(),a2,null,B.aWE(),null)
x=17
return A.b(B.zH(d),$async$H4)
case 17:e=a6
J.cb(e,f)
x=18
return A.b(B.F8(d,e),$async$H4)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H4,w)},
T6(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$T6=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adY.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_B(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.adp(s),$async$T6)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pr(u[o]),$async$T6)
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
case 5:i=$.Pe.h(0,s)
if(i==null)i=$.EY.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qR(d,e),$async$T6)
case 12:i=a0
if(i!=null&&!C.aG.gai(i))$.Pe.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Bd(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T6,w)},
fSb(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qR(d,e){return B.hkD(d,e)},
hkD(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qR=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Pe.h(0,f)
if(e==null)e=$.EY.h(0,f)
if(e!=null&&!C.aG.gai(e)){v=e
x=1
break}s=$.adY.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_B(s),$async$qR)
case 9:r=a3
if(r!=null&&!C.aG.gai(r)){$.EY.m(0,f,r)
$.Pe.m(0,f,r)
B.OY(f,r)
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
return A.b(B.adp(f),$async$qR)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.avm(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pr(g[l]),$async$qR)
case 16:k=a3
if(k!=null&&!C.aG.gai(k))n.K(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.ald()
if(!C.aG.gai(r)){$.EY.m(0,f,r)
$.Pe.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aL4(f),$async$qR)
case 17:j=a3
if(j!=null&&!C.aG.gai(j)){$.Pe.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.T6(a0,a1,0,g),$async$qR)
case 20:i=a3
if(i!=null&&!C.aG.gai(i)){h=new Uint8Array(A.cm(i))
$.EY.m(0,f,h)
$.Pe.m(0,f,h)
B.OY(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qR,w)},
hkG(d){var x,w,v=$.adY.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hkH(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hF([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hkE(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amM(d,e,f,g,h){return B.hkF(d,e,f,g,h)},
hkF(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amM=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adY.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_B(s),$async$amM)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qR(g,e),$async$amM)
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
return A.b(n.hW(d).w7(h,r,new A.CI(!0,e.c)),$async$amM)
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
return A.i($async$amM,w)},
fSd(d,e,f,g,h){var x,w,v,u,t=$.fSc
$.fSc=t+1
x=Date.now()
w=""+1000*x+"_"+C.cE.aC(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c3w.m(0,t,new B.brD(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.avm(u)))
return t},
fCz(d){var x=0,w=A.j(y.H)
var $async$fCz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fCz,w)},
H5(d,e){var $async$H5=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adY.h(0,h)
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
return A.pC(B.T6(d,e,p,o<q?o:q),$async$H5,w)
case 8:n=a1
x=n!=null&&!C.aG.gai(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pC(A.Ex(n),$async$H5,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pC(B.adp("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$H5,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pC(B.Pr(h[l]),$async$H5,w)
case 18:k=a1
x=k!=null&&!C.aG.gai(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pC(A.Ex(k),$async$H5,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pC(B.qR(d,e),$async$H5,w)
case 22:j=a1
x=j!=null&&!C.aG.gai(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pC(A.Ex(A.Bd(j,p,o<i?o:i)),$async$H5,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pC(null,0,w)
case 2:return A.pC(t.at(-1),1,w)}})
var x=0,w=A.h_F($async$H5,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h1s(w)},
aWG(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c3w.h(0,d)
if(t==null||J.cj(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a2g(),$async$aWG)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWG,w)},
T5(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$T5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c3w.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2g(),$async$T5)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adv(r.c,u,r.z),$async$T5)
case 4:t=new B.ja(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a5().ab(),r.f,r.r,B.aWE(),null)
u=r.a
x=5
return A.b(B.zH(u),$async$T5)
case 5:s=f
J.cb(s,t)
x=6
return A.b(B.F8(u,s),$async$T5)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T5,w)},
a5_(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c3w.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aeC(u[s]),$async$a5_)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a5_,w)},
c3y(d,e,f){var x=0,w=A.j(y.H)
var $async$c3y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwE(d,e,f),$async$c3y)
case 2:return A.h(null,w)}})
return A.i($async$c3y,w)},
c3z(d,e,f){var x=0,w=A.j(y.H)
var $async$c3z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwF(d,e,f),$async$c3z)
case 2:return A.h(null,w)}})
return A.i($async$c3z,w)},
Do(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Do=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zH(d),$async$Do)
case 2:p=g
J.n4(p,new B.c3x(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EY.W(0,v)
$.adY.W(0,e)
x=3
return A.b(B.adp(v),$async$Do)
case 3:u=g
$.eZa.W(0,v)
x=4
return A.b(A.ax(),$async$Do)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Do)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Do)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aeC(s[q]),$async$Do)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aeC(v),$async$Do)
case 13:x=14
return A.b(B.F8(d,p),$async$Do)
case 14:return A.h(null,w)}})
return A.i($async$Do,w)},
aWF(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qR(d,e),$async$aWF)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f__(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWF,w)},
zH(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$zH)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aF(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b5(u,new B.f7_(),y.U)
r=A.A(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zH,w)},
F8(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$F8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$F8)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b5(e,new B.faV(),y.P)
t=A.A(t,t.$ti.k("ai.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.R.am(t,null)),$async$F8)
case 3:return A.h(null,w)}})
return A.i($async$F8,w)},
bwE(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zH(d),$async$bwE)
case 3:u=h
t=J.cB(u)
s=t.bi(u,new B.f5E(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).aAh(f))
x=4
return A.b(B.F8(d,u),$async$bwE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwE,w)},
bwF(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zH(d),$async$bwF)
case 3:u=h
t=J.cB(u)
s=t.bi(u,new B.f5F(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).czx(f))
x=4
return A.b(B.F8(d,u),$async$bwF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwF,w)},
a9I:function a9I(d){this.a=d},
f2F:function f2F(){},
f6X:function f6X(d,e){this.a=d
this.b=e},
f6Y:function f6Y(d){this.a=d},
f6Z:function f6Z(){},
c3x:function c3x(d){this.a=d},
brD:function brD(d,e,f,g,h,i,j,k,l){var _=this
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
f7_:function f7_(){},
faV:function faV(){},
f5E:function f5E(d){this.a=d},
f5F:function f5F(d){this.a=d},
a50(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a50=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.ba(d,new B.c3C())?3:4
break
case 3:x=5
return A.b(B.aWH(d,e),$async$a50)
case 5:u=g
if(u!=null){t=u.c
B.LQ(d,u.b,e,t)}v=u
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
return A.b(B.aWC(s),$async$a50)
case 10:case 9:if(g){v=new A.Ol(1,D.Po,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.T7(d,e),$async$a50)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Tc(!0,!0,d,e),$async$a50)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.LQ(d,D.y6,e,t)
v=new A.Ol(p,D.y6,t)
x=1
break}v=B.c3B(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a50,w)},
T7(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$T7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a52(null,d,e),$async$T7)
case 3:p=g
try{u=C.R.aF(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cj(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWB(p,d.length,e),$async$T7)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c3z(e,C.d.gL(d).a,r.b),$async$T7)
case 7:case 6:q=r.a
x=8
return A.b(B.LQ(d,D.Po,e,q),$async$T7)
case 8:v=new A.Ol(d.length,D.Po,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T7,w)},
T8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$T8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.m_(D.mb)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a51(d,e),$async$T8)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c3u(s,d,e,t),$async$T8)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWC(t),$async$T8)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qR(e,d),$async$T8)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.T7(A.a([d],y.r),e),$async$T8)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T8,w)},
Ta(){var x=0,w=A.j(y.H)
var $async$Ta=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fCs(),$async$Ta)
case 2:x=3
return A.b(B.aNs(),$async$Ta)
case 3:return A.h(null,w)}})
return A.i($async$Ta,w)},
a51(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a51=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWE()
x=3
return A.b(B.c3y(e,d.a,u),$async$a51)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a51,w)},
LQ(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$LQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Po&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a51(p,f),$async$LQ)
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
return A.b(B.c3t(o,p,u,f),$async$LQ)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c3u(o,p,f,t),$async$LQ)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c3s(o,u,p,f),$async$LQ)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$LQ,w)},
aWH(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c3A(e,d),$async$aWH)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Tc(!1,!0,d,e),$async$aWH)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ol(u.a,D.y6,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWH,w)},
c3A(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c3A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.T6(d,s,0,1),$async$c3A)
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
return A.i($async$c3A,w)},
c3B(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c3B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a52(null,d,e),$async$c3B)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fSa(u)
if(t.length>800){v=null
x=1
break}v=new A.Ol(d.length,D.dgE,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3B,w)},
amN(d,e,f){return B.hkK(d,e,f)},
hkK(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cX(g,"\ufeff"))g=J.mm(g,1)
x=B.fCx(g)?3:4
break
case 3:x=5
return A.b(B.c3v(g),$async$amN)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cX(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mm(g,13))
try{k=B.Dp(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a6(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cX(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mm(g,13))
u=9
x=12
return A.b(B.aWA(q),$async$amN)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T9(p,a0)
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
case 11:case 7:if(J.cX(g,"NGMYDOCSYNC0|"))try{n=B.fCw(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T9(n,a0)
v=k
x=1
break}catch(a1){m=A.a6(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cX(g,"N2|")){v=B.H6(C.a.i(J.mm(g,3)),d,a0)
x=1
break}if(J.cX(g,"NGMYDOCSYNC2|")){v=B.H6(C.a.i(J.mm(g,13)),d,a0)
x=1
break}i=A.ae("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.an(k,0,k.length-1)
else h=k
v=B.H6(h,d,a0)
x=1
break}if(J.eT(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.T9(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amN,w)},
H6(d,e,f){return B.hkI(d,e,f)},
hkI(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H6=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ae("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.an(e,0,e.length-13)
f=A.ae("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cs(A.t(s)+"/manifest.json",0,null)
q=A.cs(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aWs(r),$async$H6)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aWs(A.cs(s,0,null)),$async$H6)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cj(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c37(o,r,a1,n,a2),$async$H6)
case 11:m=a4
x=J.cj(m)?12:13
break
case 12:x=14
return A.b(B.c36(q),$async$H6)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.T9(l,a2),$async$H6)
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
return A.i($async$H6,w)},
a52(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a52=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qR(f,r),$async$a52)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cR.gcs().aG(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.Q(Date.now(),0,!1).a5().ab())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.R.am(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a52,w)},
T9(d,e){return B.hkJ(d,e)},
hkJ(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$T9=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aF(0,a2,null)
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
return A.b(B.AC(i,a3,d,k,l,o),$async$T9)
case 9:h=a5
if(h!=null)J.cb(n,h)
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
return A.i($async$T9,w)},
LP:function LP(d,e){this.a=d
this.b=e},
c3C:function c3C(){},
a_b(d){var x=A.M(d).ax.a===C.H,w=x?D.aaf:D.a8y,v=x?D.abz:C.c,u=x?C.aN:C.M,t=x?C.bH:C.aj,s=x?D.a9x:C.aJ
return new A.aDl([w,s,v,u,t,x?C.f4:C.bS])},
h6e(d,e){var x=e?C.w.j(0.72):C.aU
return A.ch(null,x,!0,null,new B.fv2(e),d,null,!0,!0,y.N)},
c3h(d,e,f,g,h,i,j,k,l){return new B.T1(e,l,d,f,k,j,g,h,i,null)},
Xd(d,e,f,g,h,i,j){return new B.ba2(g,h,j,e,i,d,f,null)},
fv2:function fv2(d){this.a=d},
Xa:function Xa(d,e){this.c=d
this.a=e},
awx:function awx(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cXF:function cXF(d){this.a=d},
cXD:function cXD(d){this.a=d},
cXE:function cXE(d){this.a=d},
brh:function brh(){},
T1:function T1(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAq:function aAq(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dID:function dID(d){this.a=d},
dI0:function dI0(d,e){this.a=d
this.b=e},
dI1:function dI1(d,e){this.a=d
this.b=e},
dHA:function dHA(d,e,f){this.a=d
this.b=e
this.c=f},
dHz:function dHz(d){this.a=d},
dHB:function dHB(d,e){this.a=d
this.b=e},
dHG:function dHG(d,e,f){this.a=d
this.b=e
this.c=f},
dHF:function dHF(d){this.a=d},
dIr:function dIr(d,e){this.a=d
this.b=e},
dIs:function dIs(d){this.a=d},
dHY:function dHY(d,e,f){this.a=d
this.b=e
this.c=f},
dHV:function dHV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dHE:function dHE(d){this.a=d},
dI5:function dI5(d){this.a=d},
dI4:function dI4(){},
dHK:function dHK(d){this.a=d},
dIo:function dIo(d,e){this.a=d
this.b=e},
dIp:function dIp(d,e){this.a=d
this.b=e},
dIq:function dIq(d,e){this.a=d
this.b=e},
dHW:function dHW(d,e){this.a=d
this.b=e},
dHX:function dHX(d,e){this.a=d
this.b=e},
dIh:function dIh(d,e){this.a=d
this.b=e},
dId:function dId(d){this.a=d},
dIc:function dIc(d){this.a=d},
dIe:function dIe(){},
dIf:function dIf(){},
dIg:function dIg(d,e){this.a=d
this.b=e},
dIi:function dIi(){},
dIj:function dIj(d){this.a=d},
dIb:function dIb(d,e){this.a=d
this.b=e},
dI6:function dI6(d){this.a=d},
dI7:function dI7(d){this.a=d},
dI8:function dI8(d){this.a=d},
dI9:function dI9(d){this.a=d},
dIa:function dIa(d){this.a=d},
dHH:function dHH(){},
dHI:function dHI(d){this.a=d},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHD:function dHD(d,e){this.a=d
this.b=e},
dHC:function dHC(d,e,f){this.a=d
this.b=e
this.c=f},
dHZ:function dHZ(d){this.a=d},
dI_:function dI_(d,e,f){this.a=d
this.b=e
this.c=f},
dHT:function dHT(d,e){this.a=d
this.b=e},
dHP:function dHP(d){this.a=d},
dHM:function dHM(d,e,f){this.a=d
this.b=e
this.c=f},
dHQ:function dHQ(d){this.a=d},
dHR:function dHR(d){this.a=d},
dHS:function dHS(){},
dHU:function dHU(d,e){this.a=d
this.b=e},
dHN:function dHN(d){this.a=d},
dHL:function dHL(d,e,f){this.a=d
this.b=e
this.c=f},
dHO:function dHO(){},
dI3:function dI3(d){this.a=d},
dI2:function dI2(d,e){this.a=d
this.b=e},
dIn:function dIn(d,e){this.a=d
this.b=e},
dIk:function dIk(d){this.a=d},
dIl:function dIl(d,e){this.a=d
this.b=e},
dIm:function dIm(d){this.a=d},
dIA:function dIA(d){this.a=d},
dIy:function dIy(d){this.a=d},
dIz:function dIz(d){this.a=d},
dIB:function dIB(){},
dIC:function dIC(d,e){this.a=d
this.b=e},
dIu:function dIu(d,e){this.a=d
this.b=e},
dIv:function dIv(d,e,f){this.a=d
this.b=e
this.c=f},
dIt:function dIt(d,e,f){this.a=d
this.b=e
this.c=f},
dIw:function dIw(d,e){this.a=d
this.b=e},
dIx:function dIx(d,e){this.a=d
this.b=e},
awu:function awu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ba1:function ba1(d,e,f){this.c=d
this.d=e
this.a=f},
cXB:function cXB(){},
cXC:function cXC(){},
aa1:function aa1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cXZ:function cXZ(){},
cXY:function cXY(d){this.a=d},
Xc:function Xc(d,e,f){this.c=d
this.d=e
this.a=f},
awz:function awz(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cXV:function cXV(d){this.a=d},
cXW:function cXW(d,e,f){this.a=d
this.b=e
this.c=f},
cXX:function cXX(d,e){this.a=d
this.b=e},
cXT:function cXT(d,e){this.a=d
this.b=e},
cXR:function cXR(d){this.a=d},
cXP:function cXP(d){this.a=d},
cXM:function cXM(d){this.a=d},
cXS:function cXS(d){this.a=d},
cXO:function cXO(d){this.a=d},
cXU:function cXU(d){this.a=d},
cXQ:function cXQ(d){this.a=d},
cXN:function cXN(d){this.a=d},
X9:function X9(d,e,f){this.c=d
this.d=e
this.a=f},
aww:function aww(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cXy:function cXy(d){this.a=d},
cXx:function cXx(d,e){this.a=d
this.b=e},
cXz:function cXz(d){this.a=d},
cXw:function cXw(d,e){this.a=d
this.b=e},
cXA:function cXA(d){this.a=d},
cXv:function cXv(d,e){this.a=d
this.b=e},
cXr:function cXr(d){this.a=d},
cXs:function cXs(d){this.a=d},
cXt:function cXt(d,e){this.a=d
this.b=e},
cXu:function cXu(d){this.a=d},
NZ:function NZ(d,e,f){this.c=d
this.d=e
this.a=f},
awC:function awC(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cYb:function cYb(d){this.a=d},
cYc:function cYc(d){this.a=d},
cYd:function cYd(d){this.a=d},
cYe:function cYe(d){this.a=d},
cYf:function cYf(d,e){this.a=d
this.b=e},
cYg:function cYg(d){this.a=d},
cYi:function cYi(d){this.a=d},
cYh:function cYh(d){this.a=d},
Xe:function Xe(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awA:function awA(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cY7:function cY7(d,e){this.a=d
this.b=e},
cY8:function cY8(d,e){this.a=d
this.b=e},
cY_:function cY_(d,e,f){this.a=d
this.b=e
this.c=f},
cY0:function cY0(d){this.a=d},
cY1:function cY1(){},
cY6:function cY6(){},
cY2:function cY2(d,e){this.a=d
this.b=e},
cY3:function cY3(d,e){this.a=d
this.b=e},
cY4:function cY4(d,e){this.a=d
this.b=e},
cY5:function cY5(d,e){this.a=d
this.b=e},
aa_:function aa_(d,e){this.c=d
this.a=e},
cXq:function cXq(d){this.a=d},
X8:function X8(d){this.a=d},
awv:function awv(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Xf:function Xf(d,e){this.c=d
this.a=e},
awB:function awB(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cYa:function cYa(d){this.a=d},
cY9:function cY9(d){this.a=d},
ba2:function ba2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hkL(){var x,w=$.p_(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"VT"+C.d.fN(v)},
LR(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$LR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$LR)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eW("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$LR)
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
return A.i($async$LR,w)},
a53(d){return B.hkM(d)},
hkM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a53=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a53)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hv("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z),!1,!1,C.cD,null),$async$a53)
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
return A.i($async$a53,w)},
Tb(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Tb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LR(),$async$Tb)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dS(A.a_(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a5().ab())
r.m(s,d,t)
x=4
return A.b(B.a53(s),$async$Tb)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Tb,w)},
Tc(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Tc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bY(),$async$Tc)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bj(f,!0,y.U)
else{t=A.U(f).k("a3<1>")
u=A.A(new A.a3(f,new B.c3E(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hkL()
t=A.U(u).k("J<1,a1<n,aB>>")
r=A.A(new A.J(u,new B.c3F(s),t),t.k("ai.E"))
x=6
return A.b(B.LR(),$async$Tc)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.C))
x=7
return A.b(B.a53(q),$async$Tc)
case 7:x=8
return A.b(B.a54(r,u,g,s),$async$Tc)
case 8:v=new A.blr(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Tc,w)},
amO(d){var x=0,w=A.j(y.y),v,u,t
var $async$amO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.LR(),$async$amO)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amO,w)},
c3G(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c3G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.LR(),$async$c3G)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a8(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3G,w)},
a54(d,e,f,g){return B.hkN(d,e,f,g)},
hkN(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a54=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amM("media",r,new B.c3D(s,e,g),f,q),$async$a54)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Tb(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a54)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Tb(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$a54)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a6(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Tb(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a54)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a54,w)},
Dp(d,e,f){return B.hkO(d,e,f)},
hkO(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Dp=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$Dp)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amO(b3),$async$Dp)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kw,null,g),$async$Dp)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amO(b3),$async$Dp)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.LR(),$async$Dp)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
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
a1=J.a8(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gah(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
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
b0=A.ot(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a8i(a8.a,b0,"media",a8.d,a9).BA(m)
k=A.cs(l,0,null)
x=17
return A.b(B.aWt(k,n,o,s,b7),$async$Dp)
case 17:j=c0
if(j!=null){J.cb(p,j);++q
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
a8=A.ot(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a8i(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Dp)
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
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ab())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a53(e),$async$Dp)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dp,w)},
c3E:function c3E(){},
c3F:function c3F(d){this.a=d},
c3D:function c3D(d,e,f){this.a=d
this.b=e
this.c=f},
aNs(){var x=0,w=A.j(y.H),v,u
var $async$aNs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hvD=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aNs)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aNs)
case 3:u=$.fHx
u=u==null?null:u.bA(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aNs)
case 4:$.fHx=$.hDW=$.hDX=null
return A.h(null,w)}})
return A.i($async$aNs,w)},
fax(d){var x=0,w=A.j(y.H),v,u
var $async$fax=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2M){x=1
break}u=new A.be($.bu,y.d4)
d.c=new B.fay(new A.bP(u,y.aY))
x=3
return A.b(u.i1(0,C.hC,new B.faz()),$async$fax)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fax,w)},
hDU(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hkv(x):x},
fHB(d){var x=0,w=A.j(y.T),v,u,t
var $async$fHB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.a_(u,"WR")){v=B.amQ(u)
x=1
break}v=B.fCw(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHB,w)},
fHA(d){var x=0,w=A.j(y.T),v,u,t
var $async$fHA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.a_(u,"WR")){v=B.amR(u)
x=1
break}v=B.fCw(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHA,w)},
fqP(d){var x=0,w=A.j(y.T),v
var $async$fqP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amR(d),$async$fqP)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqP,w)},
bxv(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bxv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fHA(d),$async$bxv)
case 3:q=f
if(q==null){x=1
break}t=C.R.aF(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bxv,w)},
f_O(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f_O=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.T5(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.AC(d.ald(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_O,w)},
Fa(d,e,f){return B.hGg(d,e,f)},
hGg(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Fa=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fHB(a1),$async$Fa)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aF(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a8(u)
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
return A.b($.h82().aAw(D.d5f,null),$async$Fa)
case 4:l=d.fHx=a4
f.a="file"
f.b="application/octet-stream"
k=new A.avm(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.be($.bu,y.b1)
l.y=new B.fb1(f,k,new B.fb2(f,a2,k,j,a0,p),a2,j,a0,p,new A.bP(t,y.ch))
x=5
return A.b(l.a55(0,new B.Vj(r,"offer")),$async$Fa)
case 5:d=l
x=7
return A.b(l.ai5(0),$async$Fa)
case 7:x=6
return A.b(d.a4Y(0,a4),$async$Fa)
case 6:x=8
return A.b(B.fax(l),$async$Fa)
case 8:x=9
return A.b(l.alY(),$async$Fa)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hDU(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.am(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amS(m,h),$async$Fa)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fSa(h)
case 11:v=new A.bkJ(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Fa,w)},
fay:function fay(d){this.a=d},
faz:function faz(){},
fb2:function fb2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fb1:function fb1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fb0:function fb0(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hI4(d){switch(d){case"new":return D.dWA
case"checking":return D.dWB
case"connected":return D.dWD
case"completed":return D.dWC
case"failed":return D.dWF
case"disconnected":return D.dWG
case"closed":return D.aGF
case"count":return D.dWE}return D.aGF},
hI5(d){switch(d){case"new":return D.aGG
case"gathering":return D.dWH
case"complete":return D.a2M}return D.aGG},
hSa(d){switch(d){case"stable":return D.dWI
case"have-local-offer":return D.dWJ
case"have-local-pranswer":return D.dWL
case"have-remote-offer":return D.dWK
case"have-remote-pranswer":return D.dWM
case"closed":return D.aGM}return D.aGM},
hQs(d){switch(d){case"new":return D.aGJ
case"connecting":return D.aGK
case"connected":return D.aGL
case"closed":return D.a2N
case"disconnected":return D.aGI
case"failed":return D.aGH}return D.a2N},
a7i:function a7i(d,e){this.a=d
this.b=e},
MR:function MR(d,e){this.a=d
this.b=e},
Vi:function Vi(d,e){this.a=d
this.b=e},
MQ:function MQ(d,e){this.a=d
this.b=e},
DR:function DR(d,e){this.a=d
this.b=e},
cep:function cep(){},
fEc(d){var x=new B.DQ()
x.a=d
x.b=!0
return x},
DQ:function DQ(){this.b=this.a=$},
a7h:function a7h(){},
ar2:function ar2(){},
Vj:function Vj(d,e){this.a=d
this.b=e},
fCs(){var x=0,w=A.j(y.H)
var $async$fCs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fCs,w)},
fCv(d,e,f){var x=0,w=A.j(y.T),v
var $async$fCv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.m_(D.mb))){v=null
x=1
break}v=B.fr3(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCv,w)},
fSa(d){var x,w=F.a84.a20(C.dF.aG(d),null)
if(w.length===0){x=C.dF.aG(d)
return C.cR.gcs().aG(x)}return C.cR.gcs().aG(w)},
hku(d){var x,w,v=C.cy.aG(d)
try{x=C.c3.c6(0,F.a83.b7E(v,!1))
return x}catch(w){x=C.c3.c6(0,v)
return x}},
fCw(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hku(C.a.aY(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aY(t,w.length)
try{v=C.c3.c6(0,C.cy.aG(x))
return v}catch(u){return x}}return null},
hkv(d){var x,w,v,u,t,s=A.a([],y.s)
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
hkw(){var x,w=$.p_(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"DS"+C.d.fN(v)},
aWz(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aWz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eW("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aWz)
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
return A.i($async$aWz,w)},
c3m(d,e){return B.hkx(d,e)},
hkx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c3m=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hv("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cD,null),$async$c3m)
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
return A.i($async$c3m,w)},
aWC(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWz(d),$async$aWC)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWC,w)},
aWB(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hkw()
r=C.a.i(f)
t=C.dF.aG(s)
x=3
return A.b(B.c3m(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cR.gcs().aG(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$aWB)
case 3:if(!h){v=null
x=1
break}v=new A.Zf("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWB,w)},
aWA(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aWA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aWz(o),$async$aWA)
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
return A.i($async$aWA,w)},
c3n(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c3n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.byq("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cD),$async$c3n)
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
return A.i($async$c3n,w)},
aWD(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.H2(),$async$aWD)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a_(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWD,w)},
amJ(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amJ)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWD(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amJ,w)},
amH(d,e){var x=0,w=A.j(y.H)
var $async$amH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amH)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amH)
case 2:return A.h(null,w)}})
return A.i($async$amH,w)},
a4W(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4W=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4W)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.H2(),$async$a4W)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.ak(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.C))
x=5
return A.b(A.a4V(s),$async$a4W)
case 5:x=6
return A.b(B.amH(f,u),$async$a4W)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4W,w)},
a4X(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4X=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4X)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.H2(),$async$a4X)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a_(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.m(0,"schoolName",q)
p.m(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.m(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ak(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.amH(g,q),$async$a4X)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4V(u),$async$a4X)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4X,w)},
a4Y(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4Y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4Y)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.H2(),$async$a4Y)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aWw(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ax(),$async$a4Y)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.R.am(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a5().ab()],p,p),null)),$async$a4Y)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Y,w)},
c3o(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c3o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$c3o)
case 7:s=f
p=A.t(n)
r=A.aS(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aF(0,r,null)
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
return A.i($async$c3o,w)},
H3(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$H3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c3o(d),$async$H3)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWD(t),$async$H3)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amI(d),$async$H3)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aWw(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amI(d),$async$H3)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H3,w)},
amI(d){var x=0,w=A.j(y.H)
var $async$amI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amI)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amI)
case 2:return A.h(null,w)}})
return A.i($async$amI,w)},
aWE(){var x,w=$.p_(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(32)]
return C.d.fN(v)},
a4Z(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fCx(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ae("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c3r(d){return B.hkz(d)},
hkz(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c3r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4Z(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eW("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c3r)
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
return A.i($async$c3r,w)},
amL(d,e){return B.hkA(d,e)},
hkA(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4Z(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hv("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cD,null),$async$amL)
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
return A.i($async$amL,w)},
c3t(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c3t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4Z(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amL(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$c3t)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c3t,w)},
c3s(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c3s=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4Z(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amL(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$c3s)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c3s,w)},
c3u(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c3u=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4Z(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amL(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3u,w)},
c3v(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c3v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fCx(d)){v=null
x=1
break}x=3
return A.b(B.c3r(d),$async$c3v)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a8(u)
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
return A.i($async$c3v,w)},
a55(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a55=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a55)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eW("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a55)
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
return A.i($async$a55,w)},
amP(d){return B.hkP(d)},
hkP(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$amP)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hv("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z),!1,!1,C.cD,null),$async$amP)
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
return A.i($async$amP,w)},
amQ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cX(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amQ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a55(),$async$amQ)
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
J.aE(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a5().ab())
J.aE(s,j,o)
x=9
return A.b(B.amP(s),$async$amQ)
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
return A.i($async$amQ,w)},
amS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bY(),$async$amS)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a55(),$async$amS)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dS(A.a_(s,r,q),r,q)
r=C.dF.aG(C.a.i(e))
q.m(0,"answer",C.cR.gcs().aG(r))
q.m(0,"answerAt",new A.Q(Date.now(),0,!1).a5().ab())
t.m(u,p,q)
x=5
return A.b(B.amP(u),$async$amS)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amS,w)},
amR(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amR)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a55(),$async$amR)
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
return A.i($async$amR,w)},
alS(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ag$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb6()
if(!(p instanceof A.q5)){v=null
x=1
break}x=3
return A.b(p.lQ(e),$async$alS)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fO),$async$alS)
case 7:q=g
o=q
o=o==null?null:J.f6(J.w9(o))
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
return A.i($async$alS,w)},
hOx(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fpp(d){return B.hOz(d)},
hOz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fpp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eO().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hW("media").Jj(d,3600),$async$fpp)
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
return A.i($async$fpp,w)},
BV(d,e,f,g,h,i){var x=null
return B.hOw(d,e,f,g,h,i)},
hOw(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BV=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fSd(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fCz(r),$async$BV)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fpp(o),$async$BV)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5_(r),$async$BV)
case 14:v=null
x=1
break
case 13:e=$.bu.h(0,C.aJH)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Kh(A.a([],g))
x=15
return A.b(d.eM(0,A.arS("GET",A.cs(n,0,null))).cK(0,C.DR),$async$BV)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5_(r),$async$BV)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IT(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BV)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWG(r,k),$async$BV)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BV)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.T5(r)
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
return A.b(B.a5_(r),$async$BV)
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
aNb(d){return B.hOy(d)},
hOy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aNb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eO().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hW("media").W(0,d),$async$aNb)
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
return A.i($async$aNb,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[39]
F=c[213]
H=c[104]
P=c[194]
E=c[186]
G=c[84]
Q=c[158]
R=c[105]
S=c[192]
I=c[217]
K=c[223]
B=a.updateHolder(c[21],B)
D=c[221]
T=c[157]
L=c[176]
U=c[63]
V=c[224]
W=c[69]
X=c[54]
M=c[83]
Y=c[222]
N=c[116]
B.ceq.prototype={
aAw(d,e){return this.cB2(d,e)},
cB2(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aAw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.T(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dS(r,s,t)
t.v(0,d)
u=new q(A.k6(A.cx(t)))
t=J.k(u)
v=B.hpn(C.cR.gcs().aG(new A.d0(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aAw,w)}}
B.b0M.prototype={
bsy(d){var x=this,w=x.w
w.onclose=A.h9(new B.cel(x))
w.onopen=A.h9(new B.cem(x))
w.onmessage=A.h9(new B.cen(x))
w.onbufferedamountlow=A.h9(new B.ceo(x))},
gdh(d){return this.x},
aes(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aes=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fEc(J.f6(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ec(d.arrayBuffer(),y.af),$async$aes)
case 8:v=t.fEc(s.al5(f,0,null))
x=1
break
case 7:case 4:v=B.fEc(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aes,w)}}
B.b0N.prototype={
bsz(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h9(new B.cer(x)))
w.addEventListener("icecandidate",A.h9(new B.ces(x)))
w.addEventListener("iceconnectionstatechange",A.h9(new B.cet(x)))
w.onicegatheringstatechange=A.h9(new B.ceu(x))
w.addEventListener("signalingstatechange",A.h9(new B.cev(x)))
if(!$.fL1())w.addEventListener("connectionstatechange",A.h9(new B.cew(x)))
w.addEventListener("negotiationneeded",A.h9(new B.cex(x)))
w.addEventListener("track",A.h9(new B.cey(x)))},
ai5(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ai5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ec(s.createAnswer(A.k6(A.cx(A.T(y.N,y.z)))),y.aQ),$async$ai5)
case 3:t=f
v=new B.Vj(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai5,w)},
a4Y(d,e){return this.bi8(0,e)},
bi8(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ec(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4Y)
case 2:return A.h(null,w)}})
return A.i($async$a4Y,w)},
a55(d,e){return this.bip(0,e)},
bip(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a55=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ec(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a55)
case 2:return A.h(null,w)}})
return A.i($async$a55,w)},
alY(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Vj(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alY,w)},
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
B.aa0.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.Xb.prototype={
S(){return new B.awy()},
gd6(){return this.c}}
B.awy.prototype={
Z(){this.a0()
this.abc()},
abc(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWx(u.e,u.c),$async$abc)
case 2:t=e
if(v.c!=null)v.n(new B.cXJ(v,t))
return A.h(null,w)}})
return A.i($async$abc,w)},
Ot(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ot=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amE(t.e,t.c,!1),$async$Ot)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(D.ezE)
x=1
break}x=4
return A.b(B.a4U(u.a.c,"individual"),$async$Ot)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a9(t,!1).a3x(A.eF(new B.cXG(u),!1,null,y.H)),$async$Ot)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ot,w)},
HK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f8H(o),$async$HK)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4Y(o.e,r,s,q),$async$HK)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.P(D.ewJ)
x=1
break}x=5
return A.b(B.a4U(u.a.c,"member"),$async$HK)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a9(o,!1).a3x(A.eF(new B.cXI(u),!1,null,y.H)),$async$HK)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HK,w)},
wY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4T(t.e,o,t.f,t.r,t.w,s),$async$wY)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4U(u.a.c,"org_owner"),$async$wY)
case 4:x=5
return A.b(B.amJ(u.a.c),$async$wY)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f9b(o),$async$wY)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4W(s,t,o,q.c),$async$wY)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.P(D.ewG)
x=1
break}x=10
return A.b(B.amJ(u.a.c),$async$wY)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a9(o,!1).a3x(A.eF(new B.cXH(u),!1,null,y.H)),$async$wY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wY,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.j0:C.oZ,q=B.fCu(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.fG,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.eRC,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.f8d,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bJY,C.n),t,t,t,t,C.ev,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.ln(new B.cXL(),t),C.P,w,C.dX,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ab)
if(!u.a.x)C.d.v(p,A.a([new B.aas(C.eN,C.atD,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc6a(),t),C.ab],v))
p.push(new B.aas(C.og,C.ZS,"Team Member","Sign in with your organization access code + password",u.gc7_(),t))
p.push(C.ab)
p.push(new B.aas(C.agx,C.a0d,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc6w(),t))
return A.ce(t,r,A.bp(!0,A.ci(A.v(p,C.ah,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adX,t,t,C.ak),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aas.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.a1,!0,s,A.aI(!1,r,!0,A.et(A.B(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a5(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oB,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.Aq,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c4,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ac)}}
B.az1.prototype={}
B.aC9.prototype={}
B.ja.prototype={
m_(d){var x=this.b,w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.aY(x,w+1).toLowerCase())},
gamz(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ac(){var x,w=this,v=A.T(y.N,y.z)
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
b7a(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.ja(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
czx(d){return this.b7a(null,d)},
aAh(d){return this.b7a(d,null)}}
B.T_.prototype={
S(){return new B.aAo(new A.co(null,y.A))},
gd6(){return this.c}}
B.aAo.prototype={
Z(){this.a0()
this.abd()},
abd(){var x=0,w=A.j(y.H),v,u=this,t
var $async$abd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AB(u.a.c),$async$abd)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dHw(u,t))
case 1:return A.h(v,w)}})
return A.i($async$abd,w)},
abe(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$abe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fE(new A.fx(s)),$async$abe)
case 3:t=u.c
if(t!=null)t.I(y.q).f.P(D.eAy)
case 1:return A.h(v,w)}})
return A.i($async$abe,w)},
Xx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alS(s.d,4),$async$Xx)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rl(r,"ngmy_my_code_"+m+".png"),$async$Xx)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a6(l)
o=s.c
if(o!=null)o.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xx,w)},
aeV(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7S("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeV,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.j0:C.oZ,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lP
else if(q.e==null)x=A.au(new A.C(C.ev,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aL.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a_h,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a5(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.adx,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.G,C.aB.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.ci(A.v(A.a([x,C.mj,w,C.ki,new A.eq(A.p(p,A.pm(p,p,!1,B.hkq(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c4,p,p,p),q.d),C.ab,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ki,A.B(A.a([A.D(A.eB(M.AI,C.RG,q.gc_e(),p),1),C.aw,A.D(A.dq(C.xy,C.a54,q.gc_f(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a4(1/0,p,A.eB(L.YK,D.f4q,q.gclb(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.Ky,p,p,C.ak)
x=r}return A.ce(l,n,x,p,!1,!1,p,p)}}
B.T3.prototype={
S(){return new B.aAr(new A.ar(C.as,$.av()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aAr.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.H1(x==null?"":x)
if(w!=null)this.d.saT(0,w)},
q(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.q()
this.a2()},
Xy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.H1(u.d.a.a)
if(t==null){u.n(new B.dIF(u))
x=1
break}u.n(new B.dIG(u))
s=u.a
r=s.c
x=3
return A.b(B.a4S(s.d,new B.dIH(u),t,r),$async$Xy)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dII(u))
if(q){s=u.c
s.toString
A.a9(s,!1).M(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xy,w)},
a_F(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_F=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cj(r.a.d)){x=1
break}r.n(new B.dIJ(r))
u=4
q=J.fj(r.a.d)
x=7
return A.b(B.qR(r.a.c,q),$async$a_F)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dIK(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.afl(p,m,l,j,k),$async$a_F)
case 8:o=e
if(r.c!=null)r.n(new B.dIL(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a6(h)
if(r.c!=null)r.n(new B.dIM(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dIN(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_F,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.aaf:D.a8y,h=j?D.abz:C.c,g=j?C.aN:C.M,f=j?C.bH:C.aj,e=j?D.a9x:C.aJ
i=[i,e,h,g,f,j?C.f4:C.bS]
x=A.M(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.byR,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a5(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fC,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a_h,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tK(A.ae("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bfk()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.Kr,k,k,"",k,!0,new A.b3(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b3(4,A.m(18),new A.ay(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dIO(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lH,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JX(l.a.d,4)
m=A.A(new A.J(m,new B.dIP(x,new A.aDl(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.mH,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eq,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eve)
else q.push(A.W(C.l3,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.ip,k,k,k,C.eM,k,k,k)],r))}e=A.D(A.ci(A.v(e,C.ah,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bjX,k,k,C.ak),1)
u=l.f?k:l.gclc()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eB(L.YK,D.f5l,u,A.db(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cc,k,new A.b6(q,C.Z),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc_g()
t=A.bk(C.aB,k,k,0,C.c,k,C.mG,k,new A.b6(A.m(16),C.Z),k,k,k)
return A.ce(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.bp(!0,A.mE(new B.dIQ(),A.v(A.a([e,new A.C(D.bjr,A.v(A.a([s,C.P,i,C.ab,A.bL(l.f?C.r1:D.f3Q,u,t)],r),C.ah,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.Vg,k,new A.bl(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bfk.prototype={
nX(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f8(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ae("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ae("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.h3(C.bt,v.length),C.aM)}}
B.T0.prototype={
S(){return new B.aAp()}}
B.aAp.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ar(new A.bc(w,C.b2,C.aM),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.ar(new A.bc(x,C.b2,C.aM),v)
u.f!==$&&A.aQ()
u.f=new A.ar(C.as,v)},
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
abf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$abf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dHx(r))
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
return A.b(B.a4X(p,m,n,o,C.a.i(l).length===0?null:l),$async$abf)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.P(D.eA9)
s=[1]
x=4
break}p.I(y.q).f.P(D.eyN)
p=r.c
p.toString
A.a9(p,!1).M(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dHy(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$abf,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.j0:C.oZ,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eY0,s,s,s,1,s,!0),p=A.p(s,D.bc6,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Fh,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bFz,C.z,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bFv,C.z,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bFJ,C.z,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc_h()
u=A.bk(C.aB,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.ce(q,r,A.ci(A.v(A.a([p,C.d5,o,C.ab,x,C.ab,w,C.mj,A.bL(t.r?C.r1:C.aMb,v,u)],y.p),C.ah,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ak),s,!1,!1,s,s)}}
B.a9I.prototype={}
B.brD.prototype={
a2g(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cm(r.ald()))
x=3
return A.b(B.Ps(t,s),$async$a2g)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2g,w)},
gd6(){return this.a}}
B.LP.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.Xa.prototype={
S(){return new B.awx(new A.ar(C.as,$.av()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.awx.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cXF(this))},
q(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.q()
this.a2()},
c_n(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a9(w,!1).M(x)
return null},
B(d){var x=this,w=null,v=B.a_b(d),u=x.a.c,t=u?C.hy:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.j0:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aB.j(u?0.25:0.12),C.fG,32)],n),l=A.p(w,T.aj7,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ab(0,C.G,C.aB.j(0.4),C.ct,16)],n),C.ajU,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tK(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.brh()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.E2,w,w,"",w,!0,new A.b3(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b3(4,A.m(16),D.aR5),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cXD(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lH,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.n4,new B.cXE(d),A.db(w,w,w,w,w,w,w,w,w,s,w,w,C.cc,w,new A.b6(A.m(14),C.Z),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.cF,12)],n)
g=y.p
return A.ey(w,C.K,new A.d1(Q.IE,A.bV(new A.C(C.wJ,A.v(A.a([l,C.aO,k,C.P,j,C.dX,i,C.dX,A.B(A.a([f,C.aw,A.D(A.bV(A.aD(!1,C.a1,!0,w,A.aI(!1,A.m(14),!0,D.dQS,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc_m(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.Me,C.n),C.bb),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bb),w),w,w,w,C.KA,C.cZ,w,w,w)}}
B.brh.prototype={
nX(d,e){return e.ai0(e.a.toUpperCase())}}
B.T1.prototype={
S(){return new B.aAq(A.a([],y.r),A.b_(y.N))},
gd6(){return this.c}}
B.aAq.prototype={
Z(){var x=this
x.a0()
x.rS()
x.w=A.dD(C.j4,new B.dID(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.Ta()
this.a2()},
Zx(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LO(u.a.c),$async$Zx)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zH(u.a.c),$async$Zx)
case 4:u.n(new s.dI0(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zx,w)},
rS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LO(u.a.c),$async$rS)
case 3:t=e
x=4
return A.b(B.zH(u.a.c),$async$rS)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dI1(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LY(u.d)
B.AB(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rS,w)},
LY(d){return this.bwq(d)},
bwq(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a51(r,u.a.c),$async$LY)
case 8:p=f
if(u.c==null){x=1
break}new B.dHA(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.m_(D.mb))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.T8(r,u.a.c),$async$LY)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zH(u.a.c),$async$LY)
case 12:u.n(new o.dHB(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LY,w)},
Mk(d){return this.bCt(d)},
bCt(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a51(d,u.a.c),$async$Mk)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dHG(u,d,t))
x=6
return A.b(A.fE(new A.fx(t)),$async$Mk)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fE(new A.fx(r.toUpperCase())),$async$Mk)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mk,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.P(A.b1(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rT(d,e){return this.cvg(d,e)},
cvg(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dIr(r,e))
u=3
x=6
return A.b(d.$0(),$async$rT)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dIs(r))
$.eK.lV()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rT,w)},
gaQY(){var x=this.a
return x.f||x.r||x.w},
GM(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQY()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c3k(s,n,r,q,o,t),$async$GM)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fiS(o,u.a.c),$async$GM)
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
return A.b(B.BX(s,o,r,q,n,t),$async$GM)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GM,w)},
YD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$YD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amJ(u.a.c),$async$YD)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hM("No organization portal found.")
x=1
break}t=J.a8(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a9(t,!1).cp(A.eF(new B.dHY(u,r,q),!1,null,y.H)),$async$YD)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YD,w)},
ZI(d){return this.ceX(d)},
ceW(){return this.ZI(1)},
ceX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ZI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQY()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amG(u.a.c),$async$ZI)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ZI,w)},
a9j(d,e,f){return this.bSy(d,e,f)},
bSy(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rT(new B.dHV(u,d,null,e,f),"Uploading\u2026"),$async$a9j)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9j,w)},
bwz(){B.h5w(!1,new B.dHE(this))
return},
cjP(){this.n(new B.dI5(this))},
av4(){var x=0,w=A.j(y.H),v=this
var $async$av4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bwz()
return A.h(null,w)}})
return A.i($async$av4,w)},
a9f(){var x=0,w=A.j(y.H),v=this
var $async$a9f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rT(new B.dHK(v),"Importing\u2026"),$async$a9f)
case 2:return A.h(null,w)}})
return A.i($async$a9f,w)},
Qs(d){return this.cuK(d)},
cuK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.m_(D.mb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a9(t,!1).cp(A.eF(new B.dIo(u,d),!1,null,y.H)),$async$Qs)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.m_(D.O8)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a9(t,!1).cp(A.eF(new B.dIp(u,d),!1,null,y.H)),$async$Qs)
case 8:x=1
break
case 7:x=u.bTf(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a9(t,!1).cp(A.eF(new B.dIq(u,d),!1,null,y.H)),$async$Qs)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qs,w)},
bTf(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cr0,C.a.aY(x,w+1).toLowerCase())},
acF(d){return this.c6e(d)},
c6e(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.m_(D.mb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a9(t,!1).cp(A.eF(new B.dHW(u,d),!1,null,y.H)),$async$acF)
case 5:x=1
break
case 4:u.n(new B.dHX(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acF,w)},
PR(d){return this.cmE(d)},
cmE(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oE(t,s.c,s.f),$async$PR)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rT(new B.dIh(u,d),"Preparing QR\u2026"),$async$PR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PR,w)},
afk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$afk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dIi(),A.U(t).k("J<1,n>")).fH(0)}t=u.d
s=A.U(t).k("a3<1>")
r=A.A(new A.a3(t,new B.dIj(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PR(r),$async$afk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afk,w)},
afd(d){return this.cmc(d)},
cmc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_b(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,null,new B.dIb(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$afd)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qs(d)
break
case"qr":u.PR(A.a([d],y.r))
break
case"send_my_code":u.c6P(A.a([d],y.r))
break
case"save":u.aez(d)
break
case"delete":u.Hu(d)
break}case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
Vz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dHH(),A.U(t).k("J<1,n>")).fH(0)}t=u.d
s=A.U(t).k("a3<1>")
r=A.A(new A.a3(t,new B.dHI(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oE(t,s.c,s.f),$async$Vz)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rT(new B.dHJ(u,r),"Preparing file\u2026"),$async$Vz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vz,w)},
adM(d){return this.cds(d)},
cds(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h6e(d,!1),$async$adM)
case 3:s=f
r=s==null
q=B.a4Z(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adM,w)},
acL(){var x=0,w=A.j(y.H),v=this,u
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fqu(u,v.a.c),$async$acL)
case 2:return A.h(null,w)}})
return A.i($async$acL,w)},
bwy(){B.h5w(!1,new B.dHD(this,null))
return},
HJ(d,e){return this.c6Q(d,e)},
aWA(d){return this.HJ(null,d)},
c6P(d){return this.HJ(d,null)},
c6Q(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a3<1>")
k=A.A(new A.a3(p,new B.dHZ(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.ws.c2().akz(!0,C.WX,!1),$async$HJ)
case 10:r=g
if(r==null||J.cj(r.a)){x=1
break}x=11
return A.b(s.rT(new B.dI_(l,s,r),"Preparing\u2026"),$async$HJ)
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
return A.b(B.bzx(p,l,e,s.a.c),$async$HJ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HJ,w)},
H0(d){return this.bSl(d)},
bSl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$H0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hkp(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aWA(t),$async$H0)
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
return A.b(u.rT(new B.dHT(u,d),"Receiving video\u2026"),$async$H0)
case 11:x=1
break
case 10:x=12
return A.b(u.rT(new B.dHU(u,d),"Receiving\u2026"),$async$H0)
case 12:case 1:return A.h(v,w)}})
return A.i($async$H0,w)},
D2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$D2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BR()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adM(t),$async$D2)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.H0(s),$async$D2)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a9(t,!1).cp(A.eF(new B.dI3(u),!1,null,y.N)),$async$D2)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rS(),$async$D2)
case 10:x=1
break
case 9:x=11
return A.b(u.H0(C.a.i(r)),$async$D2)
case 11:case 1:return A.h(v,w)}})
return A.i($async$D2,w)},
aez(d){return this.cip(d)},
cip(d){var x=0,w=A.j(y.H),v=this
var $async$aez=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rT(new B.dI2(v,d),"Saving\u2026"),$async$aez)
case 2:return A.h(null,w)}})
return A.i($async$aez,w)},
Hu(d){return this.bEL(d)},
bEL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kQ(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hu)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c3n(t),$async$Hu)
case 6:case 5:s=d.a
x=7
return A.b(B.Do(u.a.c,s),$async$Hu)
case 7:u.r.W(0,s)
x=8
return A.b(u.rS(),$async$Hu)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hu,w)},
afq(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_b(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,null,new B.dIn(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$afq)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acL()
break
case"import":u.a9f()
break}case 1:return A.h(v,w)}})
return A.i($async$afq,w)},
c_k(d){var x=d.c
if(C.a.a_(x,"video/")||d.m_(D.mb))return C.pn
if(C.a.a_(x,"image/")||d.m_(D.O8))return C.t9
if(C.a.t(x,"pdf"))return E.LN
return D.agX},
B(d){var x,w,v=this,u=null,t=B.a_b(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.Fa,u,u,u,new B.dIy(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bzm,u,u,u,v.e?u:v.gc6x(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcjO()
n.push(A.aF(u,u,u,u,A.W(v.r.a===x?D.btN:E.ahl,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.YH,u,u,u,v.e?u:v.gc_l(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nB,u,u,u,v.e?u:v.gaXF(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bB1,u,u,u,v.e?u:new B.dIz(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.ln(new B.dIA(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aB.j(A.M(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m4(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.awu(C.j8,s,!0,t,w?u:v.gcmF(),u),1)
x.push(new A.C(D.bid,A.mE(new B.dIB(),A.B(A.a([s,C.aw,A.D(new B.awu(C.uJ,"Export",!1,t,w?u:v.gbI9(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.iq,u,new A.bl(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.ba1(t,v.e?u:v.gaXF(),u)
else s=A.jW(!0,u,u,new B.dIC(v,t),s,u,D.bi5,u,u,!1,!1)
x.push(A.D(s,1))
return A.ce(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.awu.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.ur,t,new A.b6(s,C.Z),t,t,t)
return A.dq(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.db(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ur,t,new A.b6(s,C.Z),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.eB(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eR,t,t,t),u.r,v)}}
B.ba1.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.mE(new B.cXB(),new A.C(E.W9,A.v(A.a([A.mE(new B.cXC(),A.p(x,A.W(C.x3,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a5(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ep,C.ir,x,new A.bl(0.86,1,w),s),C.dX,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dX,A.dq(C.nB,D.f8v,this.d,A.bk(C.aB,x,x,x,C.c,x,C.W4,x,new A.b6(A.m(16),C.Z),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.zM,x,new A.bl(0,1,w),s),x,x,x)}}
B.aa1.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
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
if(!o||i.m_(D.mb))p=D.cWK
else{p=C.a.a_(p,"image/")||i.m_(D.O8)
n=y.O
p=p?A.a([C.cY,C.aB],n):A.a([C.aL.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a5(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamz()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.m_(D.mb))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.D(A.v(A.a([q,C.av,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.W(C.fE,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c9))
if(!(!o||i.m_(D.mb)))l.push(A.fAk(C.aB,!1,j,j,j,!1,j,j,new B.cXY(k),j,j,new A.b6(A.m(5),C.Z),j,j,!1,u))
x=A.W(C.ny,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c9))
return A.mE(new B.cXZ(),new A.C(C.e3,A.aD(!1,C.a1,!0,j,A.aI(!1,r,!0,new A.C(C.VB,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b6(v,new A.ay(t,s,C.r,-1)),j,j,C.ac),j),C.cp,h,new A.cw("docshare_row_"+i.a,y.aw),new A.bl(0,1,y.X),y.i)}}
B.Xc.prototype={
S(){return new B.awz()},
gd6(){return this.c}}
B.awz.prototype={
Z(){this.a0()
this.wP()},
q(){B.hkE(this.e)
this.a2()},
wP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qR(o.c,o.d),$async$wP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gai(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hkH(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hkG(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cXV(s))
x=1
break}s.n(new B.cXW(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a6(l)
if(s.c==null){x=1
break}s.n(new B.cXX(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wP,w)},
a_E(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qR(t.c,t.d),$async$a_E)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(D.exf)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.afl(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_E)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_E,w)},
bSe(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kb(u,C.A,v,new B.cXT(w,t),C.fM,C.ds,!0,v,v,v,v)
else if(t!=null&&!C.aG.gai(t))x=A.fG(t,C.A,v,new B.cXU(w),C.fM,C.ds,!0,v,!1,v,v)
else return C.bF
return A.tT(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_b(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.AJ,u,u,u,v.gb0n(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.CV
else{q=v.r
if(q!=null)t=new A.C(C.ev,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ev,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.AJ,D.eTL,v.gb0n(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bSe()}return A.ce(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.X9.prototype={
S(){return new B.aww(A.ag7(),C.bw,C.bw)},
gd6(){return this.c}}
B.aww.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fp(w,A.a2(w).k("fp<1>")).hY(new B.cXy(v))
x.gcI8().hY(new B.cXz(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fp(x,A.a2(x).k("fp<1>"))}if(x==null)x=C.aWY
x.hY(new B.cXA(v))
v.wP()},
wP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qR(p.c,p.d),$async$wP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cXr(s))
x=1
break}x=8
return A.b(s.d.B3(0,new A.a1i(r,s.a.d.c)),$async$wP)
case 8:if(s.c==null){x=1
break}s.n(new B.cXs(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a6(n)
if(s.c==null){x=1
break}s.n(new B.cXt(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wP,w)},
Xz(){var x=0,w=A.j(y.H),v=this,u
var $async$Xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$Xz)
case 5:x=3
break
case 4:x=6
return A.b(u.i0(0),$async$Xz)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xz,w)},
aOV(d){var x=d.a
return C.a.aU(C.o.u(C.o.al(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.al(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_b(d),m=C.o.al(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.CV
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.buL,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.Me,C.n),o,88,o,o,o,o,o,88)
t=A.lQ(C.aB,o,o,m,0,new B.cXu(p),C.o.E(C.o.al(p.w.a,1000),0,m))
x=A.d(p.aOV(p.w)+" / "+p.aOV(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.etL,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.xd:C.iO,o,o,o,o,o)
x=A.v(A.a([u,C.ki,t,x,C.d5,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc_o(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.ce(v,w,A.au(new A.C(C.uw,x,o),o,o,o),o,!1,!1,o,o)}}
B.NZ.prototype={
S(){return new B.awC()},
gd6(){return this.c}}
B.awC.prototype={
Z(){this.a0()
this.NP()},
NP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fCv(o.c,o.d,new B.cYb(s)),$async$NP)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cYc(s))
x=1
break}s.e=r
q=O.hH5(r)
if(q==null){s.n(new B.cYd(s))
x=1
break}s.d=q
q.aK(0,s.gaWo())
x=8
return A.b(q.hX(0).cK(0,C.qn),$async$NP)
case 8:if(s.c==null){x=1
break}s.n(new B.cYe(s))
x=9
return A.b(q.p7(0),$async$NP)
case 9:q.rt(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
if(s.c==null){x=1
break}s.n(new B.cYf(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NP,w)},
c4R(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cYg(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BN(0,x.gaWo())
w=x.d
if(w!=null)w.q()
B.hQH(x.e)
x.a2()},
abi(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWF(u.c,u.d),$async$abi)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$abi,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_b(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aF(t,t,t,t,C.om,t,t,t,u.gc_i(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i9(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.CV
else{q=u.r
if(q!=null)s=new A.C(C.ev,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afC(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fC(x,new A.am(C.A,t,C.a9,C.q,A.a([new A.ze(s,t),A.aG(t,A.C6(A.p(t,A.W(q?H.xd:C.iO,C.c,t,t,t,48),C.f,t,t,new A.o(C.aU,t,t,v,t,t,C.n),t,t,t,t,C.c4,t,t,t),C.b9,C.a1,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cYi(u),t,t,t,t,t,t,!1,C.ad)],o),t),t)}else s=C.bF}}return A.ce(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.Xe.prototype={
S(){return new B.awA(new A.co(null,y.A))}}
B.awA.prototype={
gcv0(){var x,w,v=this.a
if(v.e!==D.Pp)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcuI(){var x,w,v=this.a
if(v.e!==D.y6)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcv0()
if(x!=null){v.OS(x)
v.e=A.dD(R.DV,new B.cY7(v,x))}w=v.gcuI()
if(w!=null){v.OR(w)
v.f=A.dD(C.h9,new B.cY8(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OR(d){return this.cbI(d)},
cbI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amO(d),$async$OR)
case 3:t=f
x=4
return A.b(B.c3G(d),$async$OR)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cY_(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OR,w)},
OS(d){return this.cbJ(d)},
cbJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fqP(d),$async$OS)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bxv(t),$async$OS)
case 4:if(u.c==null){x=1
break}u.n(new B.cY0(u))
u.c.I(y.q).f.P(D.aJi)
case 1:return A.h(v,w)}})
return A.i($async$OS,w)},
gbX5(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc_j(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_q(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BR()){t=u.c
if(t!=null)t.I(y.q).f.P(D.eAj)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a9(t,!1).cp(A.eF(new B.cY1(),!1,null,y.N)),$async$a_q)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bxv(s),$async$a_q)
case 4:t=u.c
if(t!=null)t.I(y.q).f.P(D.aJi)
case 1:return A.h(v,w)}})
return A.i($async$a_q,w)},
a7f(d){return this.bCu(d)},
bCu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fE(new A.fx(C.d.aH(t,", "))),$async$a7f)
case 3:if(d.e!=null){t=d.I(y.q).f
t.P(A.b1(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7f,w)},
abg(d){return this.bCe(d)},
bCe(d){var x=0,w=A.j(y.H),v=this
var $async$abg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fE(new A.fx(v.a.c)),$async$abg)
case 2:if(d.e!=null)d.I(y.q).f.P(D.exI)
return A.h(null,w)}})
return A.i($async$abg,w)},
a_l(d){return this.cir(d)},
cir(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alS(s.d,4),$async$a_l)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rl(r,"ngmy_doc_share_qr.png"),$async$a_l)
case 8:q=f
if(d.e!=null)d.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a6(n)
if(d.e!=null)d.I(y.q).f.P(A.b1(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_l,w)},
gaS1(){var x,w=this.a
if(w.e!==D.Gi)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
a7c(d){return this.bCn(d)},
bCn(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaS1()
if(t==null){x=1
break}x=3
return A.b(A.fE(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$a7c)
case 3:if(d.e!=null)d.I(y.q).f.P(D.ezj)
case 1:return A.h(v,w)}})
return A.i($async$a7c,w)},
abh(){var x=0,w=A.j(y.H),v=this,u
var $async$abh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ta(),$async$abh)
case 2:u=v.c
if(u!=null)A.a9(u,!1).M(null)
return A.h(null,w)}})
return A.i($async$abh,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_b(d),i=m.a,h=i.c
if(h.length>48)h=C.a.an(h,0,44)+"\u2026"
i=i.e
i=i!==D.Gi&&i!==D.Pp&&i!==D.y6
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Gi||t===D.Pp||t===D.y6?l:A.aF(l,l,l,l,C.kI,l,l,l,m.gaUC(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pm(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gbX5(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Gi){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m_,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc_j(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hi(D.bEE,D.f1f,new B.cY2(m,d),l)],p))}if(m.a.e===D.Gi&&m.gaS1()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hi(D.bBm,D.eZh,new B.cY3(m,d),l)],p))
if(m.a.e===D.y6){x=(m.w?C.du:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.CY:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m_,l,l,l)],p))}if(m.a.e===D.Pp){x=(m.r?C.du:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.CY:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m_,l,l,l),C.ab,A.dq(D.bxc,D.f48,m.gciP(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nY(i,A.ce(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ab,A.B(A.a([A.D(A.eB(M.AI,C.RG,new B.cY4(m,d),l),1),C.aw,A.D(A.dq(C.xy,C.a54,new B.cY5(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a4(1/0,l,A.bL(C.yD,m.gaUC(),A.bk(C.aL,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cY6(),y.C)}}
B.aa_.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ci(A.v(A.a([w,C.aO,A.p(x,A.pm(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.z,x,x,x,x,C.ak)
return A.er(A.a([A.bL(C.yE,new B.cXq(d),x)],u),x,x,C.ms,v,x,x,x,x,D.eSO,x)}}
B.X8.prototype={
S(){return new B.awv(A.yn(C.wq,C.nb,C.tj))}}
B.awv.prototype={
q(){this.d.q()
this.a2()},
atJ(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a9(x,!1).M(t)
return}}},
B(d){var x=null
return A.ce(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eZI,x,x,x,1,x,!0),C.w,A.ym(this.d,C.bQ,this.gatI()),x,!1,!1,x,x)}}
B.Xf.prototype={
S(){return new B.awB(A.yn(C.wq,C.nb,C.tj))},
gd6(){return this.c}}
B.awB.prototype={
bTh(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
ad7(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ad7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qq("text/plain"),$async$ad7)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.P(D.eAd)
x=1
break}s=u.c
if(s!=null)A.a9(s,!1).M(t)
case 1:return A.h(v,w)}})
return A.i($async$ad7,w)},
a8_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a8_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h6e(p,!0),$async$a8_)
case 3:t=e
p=t==null
s=B.a4Z(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.P(D.ewQ)
x=1
break}p=u.c
if(p!=null)A.a9(p,!1).M(s)
case 1:return A.h(v,w)}})
return A.i($async$a8_,w)},
q(){this.d.q()
this.a2()},
atJ(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bTh(t))continue
s.e=!0
x=s.c
x.toString
A.a9(x,!1).M(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.aid,v,v,v,w.gbHI(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.YO,v,v,v,w.gc98(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aF(v,v,v,v,A.W(w.f?C.t7:P.Ly,v,v,v,v,v),v,v,v,new B.cYa(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.f4V,v,v,v,1,v,!0)
u=A.ym(w.d,C.bQ,w.gatI())
x=A.m(20)
return A.ce(t,C.w,new A.am(C.W,v,C.a9,C.q,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.H(C.aL,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dWh],s),v),v,!1,!1,v,v)}}
B.ba2.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.o7
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.o7:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.a1,!0,r,A.aI(!1,w,!0,new A.C(C.Wf,A.B(A.a([u,C.be,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.es,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ac)}}
B.a7i.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.MR.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.Vi.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.MQ.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DR.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cep.prototype={}
B.DQ.prototype={}
B.a7h.prototype={}
B.ar2.prototype={}
B.Vj.prototype={}
var z=a.updateTypes(["aw<~>()","S(ja)","n(ja)","T1(Y)","~()","Xb(Y)","I(I,ja)","NZ(Y)","~(lH)","cp(DQ)","aw<ja?>(@)","T_(Y)","T3(Y)","C(ja)","ja(@)","a1<n,@>(ja)","Xa(Y)","T0(Y)","Xc(Y)","X9(Y)","Xe(Y)","aa_(Y)","ak<ja>()","Xf(Y)","aa1(Y,I)","X8(Y)","a1<n,aB>(ja)","cp(Vi)","cp(a7h)","aw<cp>(DQ)"])
B.cel.prototype={
$1(d){var x=this.a
x.x=D.aGE
x.y.K(0,D.aGE)},
$S:69}
B.cem.prototype={
$1(d){var x=this.a
x.x=D.aGD
x.y.K(0,D.aGD)},
$S:69}
B.cen.prototype={
$1(d){var x=this.a
x.aes(A.aLW(d.data)).bz(new B.cek(x),y.b)},
$S:69}
B.cek.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ceo.prototype={
$1(d){},
$S:69}
B.cer.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hpm(d.channel))},
$S:15}
B.ces.prototype={
$1(d){},
$S:15}
B.cet.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hI4(w.iceConnectionState)
x.cx=w
if($.fL1())switch(w.a){case 0:x.cy=D.aGJ
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
$S:141}
B.ceu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hI5(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:141}
B.cev.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hSa(w.signalingState)},
$S:141}
B.cew.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hQs(w.connectionState)},
$S:141}
B.cex.prototype={
$1(d){},
$S:141}
B.cey.prototype={
$1(d){},
$S:15}
B.f5s.prototype={
$1(d){var x=y.F.a(new A.rb([],[]).oS(d.target.result,!1)),w=C.wr.t(x.objectStoreNames,"blobs")
if(!w)C.wn.Jh(x,"blobs")},
$S:198}
B.fqi.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uY.f1(this.b)
$.eK.lV()
this.c.$1(d)},
$S:440}
B.fqk.prototype={
$1(d){return this.a.$1(B.hy6(this.b,this.c))},
$S:31}
B.fqj.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fqh.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fqx.prototype={
$1(d){var x=this
return B.fX_(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fqy.prototype={
$1(d){var x=this
return B.fX_(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f6L.prototype={
$1(d){var x=this
return B.c3h(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cXJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cXG.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3h(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cXI.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3h(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cXH.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3h(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cXL.prototype={
$4(d,e,f,g){var x=null
return A.ju(A.B(A.a([A.aF(x,x,x,x,D.bvQ,x,x,x,new B.cXK(d),x,x,x,x,x,x),A.D(A.DD(D.NU,!0,x,C.XU,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.NU,x,g,C.aeg,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.cXK.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.f8K.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.ez,y.o).w,t=this.a,s=t?C.hy:C.c,r=A.m(28),q=A.p(v,D.bcp,C.f,v,v,D.aSI,v,v,v,v,D.ae7,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bzV,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.A1,A.v(A.a([o,C.ab,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ais,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.B(A.a([A.D(A.dV(C.dg,new B.f8I(d),v),1),C.aw,A.D(A.bL(D.eYk,new B.f8J(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Kg,v,v,v,v),v)},
$S:60}
B.f8I.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.f8J.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.P(D.exX)
return}x=w.b.a.a
A.a9(w.c,!1).M(new B.az1(v,x))},
$S:0}
B.f9d.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.ez,y.o).w,u=x.a,t=u?C.hy:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bce,C.f,w,w,D.aU5,w,w,w,w,D.ae7,w,w,1/0),new A.C(C.A1,A.v(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fHl(u,"Organization name",C.Ex,w),C.z,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fHl(u,"Access code",C.mL,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fHl(u,"Member password",N.F5,w),C.z,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bL(D.f4Z,new B.f9c(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Kg,w,w,w,w),w)},
$S:60}
B.f9c.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.P(D.ey1)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a9(v.d,!1).M(new B.aC9(u,x,w))},
$S:0}
B.c38.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a8(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cs(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.uH(p,null).cK(0,C.Vf),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cm(o.w))
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
B.c3e.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c3f.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c3g.prototype={
$1(d){return d.b},
$S:z+2}
B.c3a.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c3b.prototype={
$1(d){return d.b},
$S:z+2}
B.c39.prototype={
$1(d){return A.a_(y.f.a(d),y.N,y.z)},
$S:12}
B.c3c.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c3d.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fqv.prototype={
$1(d){return new B.T_(this.a,null)},
$S:z+11}
B.fqw.prototype={
$1(d){return new B.T3(this.a,this.b,this.c,null)},
$S:z+12}
B.dHw.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dIF.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dIG.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dIH.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dIE(x,d))},
$S:2}
B.dIE.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dII.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dIJ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dIK.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dIL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dIM.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dIN.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dIQ.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.dIO.prototype={
$1(d){var x=this.a
return x.f?null:x.Xy()},
$S:2}
B.dIP.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.m_(D.O8))s=C.t9
else s=C.a.a_(s,"video/")||d.m_(D.mb)?C.pn:D.agX
x=this.b.a
w=y.p
return new A.C(C.l0,A.B(A.a([A.p(v,A.W(s,C.aB,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamz(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dHx.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dHy.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c3i.prototype={
$2(d,e){return new A.bs(J.k(d),J.k(e),y.M)},
$S:89}
B.c3j.prototype={
$2(d,e){return new A.bs(J.k(d),J.k(e),y.M)},
$S:89}
B.fr5.prototype={
$2(d,e){return e===this.a},
$S:278}
B.f2F.prototype={
$1(d){return J.k(d)},
$S:17}
B.f6X.prototype={
$1(d){var x=this.b
B.hwb(C.Ek.ga3P(this.a)).bz(x.gcxV(x),y.H)},
$S:117}
B.f6Y.prototype={
$1(d){return this.a.d0(0,null)},
$S:117}
B.f6Z.prototype={
$0(){return null},
$S:11}
B.c3x.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f7_.prototype={
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
u=J.k(u==null?new A.Q(Date.now(),0,!1).a5().ab():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.ja(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.faV.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f5E.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f5F.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c3C.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.mb)},
$S:z+1}
B.fv2.prototype={
$1(d){return new B.Xa(this.a,null)},
$S:z+16}
B.cXF.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fw()},
$S:8}
B.cXD.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a9(w,!1).M(x)
return null},
$S:2}
B.cXE.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.dID.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zx()},
$S:13}
B.dI0.prototype={
$0(){var x=J.bAA(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dI1.prototype={
$0(){var x=J.bAA(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHA.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dHz(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAh(this.c)}},
$S:0}
B.dHz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHB.prototype={
$0(){var x=J.bAA(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHG.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dHF(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAh(this.c)}},
$S:0}
B.dHF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dIr.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dIs.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dHY.prototype={
$1(d){return new B.T0(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dHV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GM(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.T4(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rS(),$async$$0)
case 5:s=J.a8(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.ZI(s.gJ(t)),$async$$0)
case 8:case 7:r.hM(s.gai(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHE.prototype={
$1(d){this.a.a9j(d,"No files selected.","Added")},
$S:440}
B.dI5.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.J(x,new B.dI4(),A.U(x).k("J<1,n>")))},
$S:0}
B.dI4.prototype={
$1(d){return d.a},
$S:z+2}
B.dHK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.ws.c2().cK3(C.WX,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fj(o.a)
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
return A.b(B.amN(null,m,o.a.c),$async$$0)
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
B.dIo.prototype={
$1(d){return new B.NZ(this.a.a.c,this.b,null)},
$S:z+7}
B.dIp.prototype={
$1(d){return new B.Xc(this.a.a.c,this.b,null)},
$S:z+18}
B.dIq.prototype={
$1(d){return new B.X9(this.a.a.c,this.b,null)},
$S:z+19}
B.dHW.prototype={
$1(d){return new B.NZ(this.a.a.c,this.b,null)},
$S:z+7}
B.dHX.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dIh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GM(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a50(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ceW(),$async$$0)
case 5:x=6
return A.b(p.rS(),$async$$0)
case 6:r=A.U(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dId(p),r),new B.dIe(),r.k("J<ai.E,n>")).bX(0,new B.dIf())
q=A.A(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a9(t,!1).cp(A.eF(new B.dIg(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oD(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ta(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dId.prototype={
$1(d){var x=this.a,w=C.d.bi(x.d,new B.dIc(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dIc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dIe.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dIf.prototype={
$1(d){return d.length!==0},
$S:3}
B.dIg.prototype={
$1(d){var x=this.a
return new B.Xe(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dIi.prototype={
$1(d){return d.a},
$S:z+2}
B.dIj.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dIb.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kx,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamz(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.m_(D.mb)?C.tb:C.ok
p=!x||p.m_(D.mb)?"Play video":"View"
return A.bV(A.bp(!0,new A.C(C.zY,A.v(A.a([q,o,t,C.ay,B.Xd(!1,u,!1,w,p,new B.dI6(d),v),B.Xd(!1,u,!1,C.j8,"Share via QR",new B.dI7(d),"Letters/numbers QR code"),B.Xd(!1,u,!1,D.XZ,"Send to their Code",new B.dI8(d),"Enter someone else's personal code"),B.Xd(!1,u,!1,C.hs,"Download / save",new B.dI9(d),v),C.ar,B.Xd(!1,u,!0,C.e8,"Delete",new B.dIa(d),v)],y.p),C.ah,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c3(new A.ay(r,1,C.r,-1),C.Z,C.Z,C.Z),C.ko,v,v,C.n),C.bb)},
$S:708}
B.dI6.prototype={
$0(){A.a9(this.a,!1).M("view")
return null},
$S:0}
B.dI7.prototype={
$0(){A.a9(this.a,!1).M("qr")
return null},
$S:0}
B.dI8.prototype={
$0(){A.a9(this.a,!1).M("send_my_code")
return null},
$S:0}
B.dI9.prototype={
$0(){A.a9(this.a,!1).M("save")
return null},
$S:0}
B.dIa.prototype={
$0(){A.a9(this.a,!1).M("delete")
return null},
$S:0}
B.dHH.prototype={
$1(d){return d.a},
$S:z+2}
B.dHI.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dHJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a52(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Fd(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oD(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHD.prototype={
$1(d){var x=this.a
x.rT(new B.dHC(x,d,this.b),"Preparing\u2026")},
$S:440}
B.dHC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.T4(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cj(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bzx(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHZ.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dI_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fCy(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Fa(new B.dHP(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ch(null,null,!1,null,new B.dHQ(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dHR(s))
case 5:x=8
return A.b(r.b.i1(0,C.DR,new B.dHS()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gai(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rS(),$async$$0)
case 9:s.hM("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dHM(x,d,e))},
$S:128}
B.dHM.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHQ.prototype={
$1(d){return new B.aa_(this.a.a,null)},
$S:z+21}
B.dHR.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dHS.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dHU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.H1(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4R(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aWA(B.H1(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amN(new B.dHN(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cj(r)){if(B.fCx(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rS(),$async$$0)
case 10:o=J.cB(r)
p=o.eE(r,new B.dHO()).gJ(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHN.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dHL(x,d,e))},
$S:128}
B.dHL.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHO.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.mb)},
$S:z+1}
B.dI3.prototype={
$1(d){return new B.Xf(this.a.a.c,null)},
$S:z+23}
B.dI2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWF(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dIn.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bV(A.bp(!0,new A.C(C.zY,A.v(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kx,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.Xd(!0,w,!1,C.mL,"My Code",new B.dIk(d),"Your personal code & QR \u2014 others send docs to you"),B.Xd(!1,w,!1,D.XZ,"Send to their Code",new B.dIl(this.a,d),"Enter someone else's 5-digit code + letter"),B.Xd(!1,w,!1,S.xn,"Import backup",new B.dIm(d),".ngmydoc file from another device")],y.p),C.ah,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c3(new A.ay(t,1,C.r,-1),C.Z,C.Z,C.Z),C.ko,x,x,C.n),C.bb)},
$S:708}
B.dIk.prototype={
$0(){A.a9(this.a,!1).M("my_code")
return null},
$S:0}
B.dIl.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.bwy()},
$S:0}
B.dIm.prototype={
$0(){A.a9(this.a,!1).M("import")
return null},
$S:0}
B.dIA.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Ha(D.NU,x,C.XU,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cL(C.d.gL(D.NU).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:688}
B.dIy.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.dIz.prototype={
$0(){this.a.afq()
return null},
$S:0}
B.dIB.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*10)),e)},
$S:107}
B.dIC.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aa1(e,w,v,this.b,x.e,x.c_k(w),new B.dIu(x,w),new B.dIv(x,v,w),new B.dIw(x,w),new B.dIx(x,w),null)},
$S:z+24}
B.dIu.prototype={
$0(){this.a.acF(this.b)
return null},
$S:0}
B.dIv.prototype={
$0(){var x=this.a
return x.n(new B.dIt(x,this.b,this.c))},
$S:0}
B.dIt.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dIw.prototype={
$0(){this.a.Mk(this.b)
return null},
$S:0}
B.dIx.prototype={
$0(){this.a.afd(this.b)
return null},
$S:0}
B.cXB.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*18)),e)},
$S:107}
B.cXC.prototype={
$3(d,e,f){return A.e7(C.A,f,e,null,null)},
$S:137}
B.cXZ.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.cXY.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cXV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cXW.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cXX.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cXT.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gai(w))return A.fG(w,C.A,x,new B.cXR(this.a),C.fM,C.ds,!0,x,!1,x,x)
$.aT.x1$.push(new B.cXS(this.a))
return C.bF},
$S:129}
B.cXR.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXP(this.a))
return C.bF},
$S:181}
B.cXP.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXM(x))},
$S:8}
B.cXM.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXS.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXO(x))},
$S:8}
B.cXO.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXU.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXQ(this.a))
return C.bF},
$S:181}
B.cXQ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXN(x))},
$S:8}
B.cXN.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXy.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cXx(x,d))},
$S:1738}
B.cXx.prototype={
$0(){return this.a.f=this.b===C.tG},
$S:0}
B.cXz.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cXw(x,d))},
$S:8}
B.cXw.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cXA.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cXv(x,d))},
$S:8}
B.cXv.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cXr.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cXs.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cXt.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cXu.prototype={
$1(d){return this.a.d.Lm(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cYb.prototype={
$0(){var x=this.a.a
return B.qR(x.c,x.d)},
$S:1739}
B.cYc.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cYd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cYe.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cYf.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cYg.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cYi.prototype={
$0(){var x=this.a
x.n(new B.cYh(x))},
$S:0}
B.cYh.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.p7(0)},
$S:0}
B.cY7.prototype={
$1(d){return this.a.OS(this.b)},
$S:13}
B.cY8.prototype={
$1(d){return this.a.OR(this.b)},
$S:13}
B.cY_.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cY0.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cY1.prototype={
$1(d){return D.fil},
$S:z+25}
B.cY6.prototype={
$2(d,e){if(d)B.Ta()},
$S:123}
B.cY2.prototype={
$0(){return this.a.a7f(this.b)},
$S:0}
B.cY3.prototype={
$0(){return this.a.a7c(this.b)},
$S:0}
B.cY4.prototype={
$0(){return this.a.abg(this.b)},
$S:0}
B.cY5.prototype={
$0(){return this.a.a_l(this.b)},
$S:0}
B.cXq.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.cYa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pb(),$async$$0)
case 2:u.n(new B.cY9(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cY9.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c3E.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.mb)},
$S:z+1}
B.c3F.prototype={
$1(d){var x=d.b,w=A.ae("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c3D.prototype={
$2(d,e){return this.beb(d,e)},
beb(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Tb(u.c,A.E(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1740}
B.fay.prototype={
$1(d){if(d===D.a2M&&(this.a.a.a&30)===0)this.a.fD(0)},
$S:z+27}
B.faz.prototype={
$0(){},
$S:11}
B.fb2.prototype={
bfK(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f_O(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fSd(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfK(d,e)},
$S:539}
B.fb1.prototype={
$1(d){var x=this
d.b=new B.fb0(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fb0.prototype={
$1(d){return this.bfJ(d)},
bfJ(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWG(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aF(0,n,null)
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
return A.b(B.f_O(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a5_(m),$async$$1)
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
x(v=B.awy.prototype,"gc6a","Ot",0)
x(v,"gc7_","HK",0)
x(v,"gc6w","wY",0)
x(v=B.aAo.prototype,"gc_e","abe",0)
x(v,"gc_f","Xx",0)
x(v,"gclb","aeV",0)
x(v=B.aAr.prototype,"gc_g","Xy",0)
x(v,"gclc","a_F",0)
x(B.aAp.prototype,"gc_h","abf",0)
x(B.awx.prototype,"gc_m","c_n",4)
x(v=B.aAq.prototype,"gc6x","YD",0)
x(v,"gcjO","cjP",4)
x(v,"gaXF","av4",0)
x(v,"gcmF","afk",0)
x(v,"gbI9","Vz",0)
x(v,"gc_l","D2",0)
x(B.awz.prototype,"gb0n","a_E",0)
x(B.aww.prototype,"gc_o","Xz",0)
x(v=B.awC.prototype,"gaWo","c4R",4)
x(v,"gc_i","abi",0)
x(v=B.awA.prototype,"gciP","a_q",0)
x(v,"gaUC","abh",0)
w(B.awv.prototype,"gatI","atJ",8)
x(v=B.awB.prototype,"gc98","ad7",0)
x(v,"gbHI","a8_",0)
w(v,"gatI","atJ",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cep,B.a7h,B.ar2,B.az1,B.aC9,B.ja,B.a9I,B.brD,B.DQ,B.Vj])
w(B.ceq,B.cep)
w(B.b0M,B.a7h)
x(A.i4,[B.cel,B.cem,B.cen,B.cek,B.ceo,B.cer,B.ces,B.cet,B.ceu,B.cev,B.cew,B.cex,B.cey,B.f5s,B.fqi,B.fqk,B.fqj,B.fqx,B.fqy,B.f6L,B.cXG,B.cXI,B.cXH,B.cXL,B.f8K,B.f9d,B.c38,B.c3f,B.c3g,B.c3b,B.c39,B.c3c,B.c3d,B.fqv,B.fqw,B.dIH,B.dIQ,B.dIO,B.dIP,B.f2F,B.f6X,B.f6Y,B.c3x,B.f7_,B.faV,B.f5E,B.f5F,B.c3C,B.fv2,B.cXF,B.cXD,B.dID,B.dHz,B.dHF,B.dHY,B.dHE,B.dI4,B.dIo,B.dIp,B.dIq,B.dHW,B.dId,B.dIc,B.dIe,B.dIf,B.dIg,B.dIi,B.dIj,B.dIb,B.dHH,B.dHI,B.dHD,B.dHZ,B.dHQ,B.dHO,B.dI3,B.dIn,B.dIA,B.dIB,B.cXB,B.cXC,B.cXZ,B.cXY,B.cXT,B.cXR,B.cXP,B.cXS,B.cXU,B.cXQ,B.cXy,B.cXz,B.cXA,B.cXu,B.cY7,B.cY8,B.cY1,B.c3E,B.c3F,B.fay,B.fb1,B.fb0])
w(B.b0N,B.ar2)
x(A.jl,[B.fqh,B.cXJ,B.cXK,B.f8I,B.f8J,B.f9c,B.dHw,B.dIF,B.dIG,B.dIE,B.dII,B.dIJ,B.dIK,B.dIL,B.dIM,B.dIN,B.dHx,B.dHy,B.f6Z,B.cXE,B.dI0,B.dI1,B.dHA,B.dHB,B.dHG,B.dIr,B.dIs,B.dHV,B.dI5,B.dHK,B.dHX,B.dIh,B.dI6,B.dI7,B.dI8,B.dI9,B.dIa,B.dHJ,B.dHC,B.dI_,B.dHT,B.dHM,B.dHR,B.dHS,B.dHU,B.dHL,B.dI2,B.dIk,B.dIl,B.dIm,B.dIy,B.dIz,B.dIu,B.dIv,B.dIt,B.dIw,B.dIx,B.cXV,B.cXW,B.cXX,B.cXM,B.cXO,B.cXN,B.cXx,B.cXw,B.cXv,B.cXr,B.cXs,B.cXt,B.cYb,B.cYc,B.cYd,B.cYe,B.cYf,B.cYg,B.cYi,B.cYh,B.cY_,B.cY0,B.cY2,B.cY3,B.cY4,B.cY5,B.cXq,B.cYa,B.cY9,B.faz])
x(A.mi,[B.aa0,B.LP,B.a7i,B.MR,B.Vi,B.MQ,B.DR])
x(A.af,[B.Xb,B.T_,B.T3,B.T0,B.Xa,B.T1,B.Xc,B.X9,B.NZ,B.Xe,B.X8,B.Xf])
x(A.ag,[B.awy,B.aAo,B.aAr,B.aAp,B.awx,B.aAq,B.awz,B.aww,B.awC,B.awA,B.awv,B.awB])
x(A.at,[B.aas,B.awu,B.ba1,B.aa1,B.aa_,B.ba2])
x(A.kz,[B.c3e,B.c3a,B.c3i,B.c3j,B.fr5,B.dHP,B.dHN,B.dIC,B.cY6,B.c3D,B.fb2])
x(A.iJ,[B.bfk,B.brh])})()
A.kg(b.typeUniverse,JSON.parse('{"b0M":{"a7h":[]},"b0N":{"ar2":[]},"Xb":{"af":[],"r":[]},"awy":{"ag":["Xb"]},"aas":{"at":[],"r":[]},"T_":{"af":[],"r":[]},"T3":{"af":[],"r":[]},"aAo":{"ag":["T_"]},"aAr":{"ag":["T3"]},"bfk":{"iJ":[]},"T0":{"af":[],"r":[]},"aAp":{"ag":["T0"]},"Xa":{"af":[],"r":[]},"T1":{"af":[],"r":[]},"aa1":{"at":[],"r":[]},"Xc":{"af":[],"r":[]},"X9":{"af":[],"r":[]},"NZ":{"af":[],"r":[]},"Xe":{"af":[],"r":[]},"aa_":{"at":[],"r":[]},"X8":{"af":[],"r":[]},"Xf":{"af":[],"r":[]},"awx":{"ag":["Xa"]},"brh":{"iJ":[]},"aAq":{"ag":["T1"]},"awu":{"at":[],"r":[]},"ba1":{"at":[],"r":[]},"awz":{"ag":["Xc"]},"aww":{"ag":["X9"]},"awC":{"ag":["NZ"]},"awA":{"ag":["Xe"]},"awv":{"ag":["X8"]},"awB":{"ag":["Xf"]},"ba2":{"at":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tC"),k:x("Kl()"),m:x("br<n,n>"),F:x("qu"),g:x("aw<ja?>"),x:x("aw<~>"),V:x("O<ab>"),O:x("O<w>"),W:x("O<bf>"),Y:x("O<a1<n,S>>"),t:x("O<a1<n,@>>"),r:x("O<ja>"),w:x("O<+file,name(li,n)>"),u:x("O<cL>"),s:x("O<n>"),E:x("O<iJ>"),a:x("O<dz>"),p:x("O<r>"),Z:x("O<I>"),G:x("bf"),A:x("co<ag<af>>"),n:x("ak<ja>"),j:x("ak<@>"),I:x("ak<I>"),M:x("bs<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iE"),e:x("hW_"),af:x("D6"),U:x("ja"),b:x("cp"),C:x("aB"),aK:x("vr"),ab:x("DQ"),br:x("ar2"),v:x("Vj"),N:x("n"),X:x("bl<P>"),Q:x("lt"),D:x("dz"),aw:x("cw<n>"),cd:x("a3<a1<n,@>>"),c7:x("r"),ch:x("bP<ak<ja>>"),aW:x("bP<dz?>"),aY:x("bP<~>"),cx:x("aa0"),b1:x("be<ak<ja>>"),cf:x("be<dz?>"),d4:x("be<~>"),c4:x("az1"),bG:x("aC9"),q:x("mG"),B:x("oU<DQ>"),c6:x("oU<a7i>"),y:x("S"),i:x("P"),z:x("@"),S:x("I"),aQ:x("bf?"),_:x("ak<ja>?"),aL:x("ak<@>?"),h:x("a1<n,@>?"),l:x("ja?"),R:x("aB?"),c:x("Vj?"),d:x("+answerQr,transfer(n,aw<ak<ja>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,LP,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9I?"),bk:x("az1?"),ag:x("aC9?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aR5=new A.ay(C.aB,2,C.r,-1)
D.bI8=new A.a5(C.a3,C.a7,C.x,C.ZS,null,null)
D.aSI=new A.o(null,null,null,C.mp,null,D.bI8,C.n)
D.aU5=new A.o(null,null,null,C.mp,null,E.Fh,C.n)
D.a8y=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a9x=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aaf=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.abz=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eTF=new A.x("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.f5Q=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.HB,null,null,null,null,null,null,null,null,null)
D.cPy=x([D.eTF,C.ar,D.f5Q],y.p)
D.bc6=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.cPy,null)
D.f9M=new A.x("Create your organization",null,C.hi,null,null,null,null,null,null,null,null,null)
D.eXD=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.HB,null,null,null,null,null,null,null,null,null)
D.d2l=x([D.f9M,C.ar,D.eXD],y.p)
D.bce=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d2l,null)
D.f6n=new A.x("Team Member sign-in",null,C.hi,null,null,null,null,null,null,null,null,null)
D.f08=new A.x("Enter the access code and password from your organization.",null,G.HB,null,null,null,null,null,null,null,null,null)
D.d0v=x([D.f6n,C.ar,D.f08],y.p)
D.bcp=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d0v,null)
D.bi5=new A.N(16,10,16,28)
D.bid=new A.N(16,14,16,4)
D.bjr=new A.N(20,0,20,16)
D.bjX=new A.N(20,8,20,16)
D.ae7=new A.N(24,22,24,20)
D.XZ=new A.a0(63394,"MaterialIcons",!1)
D.agX=new A.a0(63515,"MaterialIcons",!1)
D.btN=new A.a0(983813,"MaterialIcons",!1)
D.br3=new A.a0(62867,"MaterialIcons",!1)
D.buL=new A.ad(D.br3,44,C.c,null,null,null)
D.bvQ=new A.ad(C.t3,null,C.af,null,null,null)
D.bxc=new A.ad(C.iP,18,null,null,null,null)
D.byR=new A.ad(D.XZ,26,C.c,null,null,null)
D.bzm=new A.ad(C.EW,null,null,null,null,null)
D.bzV=new A.ad(C.xp,null,null,null,null,null)
D.bB1=new A.ad(W.LL,null,null,null,null,null)
D.bBm=new A.ad(C.hd,16,null,null,null,null)
D.bEE=new A.ad(C.qx,16,null,null,null,null)
D.bv2=new A.ad(C.mL,null,null,null,null,null)
D.bFv=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bv2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bAs=new A.ad(C.Ex,null,null,null,null,null)
D.bFz=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bAs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bvn=new A.ad(N.F5,null,null,null,null,null)
D.bFJ=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bvn,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.crv=x([C.f4,C.aW,C.aB],y.O)
D.bJY=new A.a5(C.ax,C.aC,C.x,D.crv,null,null)
D.cr0=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.NU=x([C.f4,C.aB],y.O)
D.O8=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mb=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cWK=x([C.oU,C.aB],y.O)
D.dLq={iceServers:0}
D.aBr={urls:0}
D.d5V=new A.br(D.aBr,["stun:stun.l.google.com:19302"],y.m)
D.d5U=new A.br(D.aBr,["stun:stun1.l.google.com:19302"],y.m)
D.cGG=x([D.d5V,D.d5U],A.az("O<a1<n,n>>"))
D.d5f=new A.br(D.dLq,[D.cGG],A.az("br<n,@>"))
D.Gi=new B.LP(0,"lanDirect")
D.Po=new B.LP(1,"cloudStash")
D.dgE=new B.LP(2,"inlineInstant")
D.Pp=new B.LP(3,"webrtcLink")
D.y6=new B.LP(4,"videoCloud")
D.f5P=new A.x("Receive file",null,C.n1,null,null,null,null,null,null,null,null,null)
D.che=x([E.aiB,C.aa,D.f5P],y.p)
D.epQ=new A.cD(C.b_,C.b7,C.j,C.m,null,C.p,null,0,D.che,null)
D.dQS=new A.C(C.cc,D.epQ,null)
D.eL5=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a_u,null,null,null)
D.eUa=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eL5,null,C.L,null,null,null,null,null,null,null)
D.dQd=new A.C(C.A4,D.eUa,null)
D.aY7=new A.cy(C.A,null,null,D.dQd,null)
D.dWh=new A.cH(0,null,0,28,null,null,D.aY7,null)
D.dWz=new B.a7i(0,"RTCDataChannelConnecting")
D.aGD=new B.a7i(1,"RTCDataChannelOpen")
D.aGE=new B.a7i(3,"RTCDataChannelClosed")
D.dWA=new B.DR(0,"RTCIceConnectionStateNew")
D.dWB=new B.DR(1,"RTCIceConnectionStateChecking")
D.dWC=new B.DR(2,"RTCIceConnectionStateCompleted")
D.dWD=new B.DR(3,"RTCIceConnectionStateConnected")
D.dWE=new B.DR(4,"RTCIceConnectionStateCount")
D.dWF=new B.DR(5,"RTCIceConnectionStateFailed")
D.dWG=new B.DR(6,"RTCIceConnectionStateDisconnected")
D.aGF=new B.DR(7,"RTCIceConnectionStateClosed")
D.aGG=new B.Vi(0,"RTCIceGatheringStateNew")
D.dWH=new B.Vi(1,"RTCIceGatheringStateGathering")
D.a2M=new B.Vi(2,"RTCIceGatheringStateComplete")
D.a2N=new B.MQ(0,"RTCPeerConnectionStateClosed")
D.aGH=new B.MQ(1,"RTCPeerConnectionStateFailed")
D.aGI=new B.MQ(2,"RTCPeerConnectionStateDisconnected")
D.aGJ=new B.MQ(3,"RTCPeerConnectionStateNew")
D.aGK=new B.MQ(4,"RTCPeerConnectionStateConnecting")
D.aGL=new B.MQ(5,"RTCPeerConnectionStateConnected")
D.dWI=new B.MR(0,"RTCSignalingStateStable")
D.dWJ=new B.MR(1,"RTCSignalingStateHaveLocalOffer")
D.dWK=new B.MR(2,"RTCSignalingStateHaveRemoteOffer")
D.dWL=new B.MR(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dWM=new B.MR(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aGM=new B.MR(5,"RTCSignalingStateClosed")
D.etL=new A.as(160,48)
D.aZf=new A.fe(2,null,null,null,null,C.aB,null,null,null,null)
D.eve=new A.a4(16,16,D.aZf,null)
D.eX4=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ewG=new A.b0(D.eX4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f2U=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ewJ=new A.b0(D.f2U,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.faM=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ewQ=new A.b0(D.faM,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWI=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.exf=new A.b0(D.eWI,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f6w=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aJi=new A.b0(D.f6w,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f7N=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.exI=new A.b0(D.f7N,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.fc4=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.exX=new A.b0(D.fc4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.fad=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ey1=new A.b0(D.fad,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.fbm=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eyN=new A.b0(D.fbm,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVq=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ezj=new A.b0(D.eVq,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f4B=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ezE=new A.b0(D.f4B,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eZ7=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eA9=new A.b0(D.eZ7,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.fca=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eAd=new A.b0(D.fca,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVG=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eAj=new A.b0(D.eVG,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eUu=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eAy=new A.b0(D.eUu,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRC=new A.x("NGMY DOC SHARE",null,C.aKy,null,null,null,null,null,null,null,null,null)
D.eSO=new A.x("Show this to sender",null,C.kk,null,null,null,null,null,null,null,null,null)
D.eTL=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eY0=new A.x("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eYk=new A.x("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.eZh=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eZI=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f1f=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.f3Q=new A.x("Send to their Doc Share",null,C.n0,null,null,null,null,null,null,null,null,null)
D.f48=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f4q=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.f4V=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.f4Z=new A.x("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.f5l=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eR,null,null,null,null,null,null,null,null,null)
D.f8d=new A.x("Share files & videos\nwith a scan.",null,C.aKz,null,null,null,null,null,null,null,null,null)
D.f8v=new A.x("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fil=new B.X8(null)
D.a5I=new B.aa0(0,"docShare")
D.a5J=new B.aa0(1,"gate")
D.S9=new B.aa0(2,"gateNoIndividual")})();(function staticFields(){$.aKK=null
$.eYE=function(){var x=y.N
return A.T(x,x)}()
$.EY=A.T(y.N,y.D)
$.adY=A.T(y.N,A.az("li"))
$.Pe=A.T(y.N,y.D)
$.eZa=A.T(y.N,A.az("a9I"))
$.c3w=A.T(y.S,A.az("brD"))
$.fSc=1
$.hDX=null
$.hDW=null
$.hvD=null
$.fHx=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hWu","h82",()=>new B.ceq())
x($,"hUp","fL1",()=>C.a.t(A.bq(A.bq(A.bq(A.Fw(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["7VsVfKXkyTh7//yItwFEg3cRcJU="]=a.current})($__dart_deferred_initializers__);