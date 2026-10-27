((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={ce8:function ce8(){},
hp0(d){var x=null,w=new B.b0H(d,D.dVR,new A.oT(x,x,y.c6),new A.oT(x,x,y.B))
w.bsw(d)
return w},
b0H:function b0H(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ce3:function ce3(d){this.a=d},
ce4:function ce4(d){this.a=d},
ce5:function ce5(d){this.a=d},
ce2:function ce2(d){this.a=d},
ce6:function ce6(d){this.a=d},
hp1(d,e){var x=y.N
x=new B.b0I(d,e,A.T(x,y.e),A.T(x,y.z))
x.bsx(d,e)
return x},
b0I:function b0I(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ce9:function ce9(d){this.a=d},
cea:function cea(d){this.a=d},
ceb:function ceb(d){this.a=d},
cec:function cec(d){this.a=d},
ced:function ced(d){this.a=d},
cee:function cee(d){this.a=d},
cef:function cef(d){this.a=d},
ceg:function ceg(d){this.a=d},
fGS(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xu.Ks(x,"ngmy_doc_share_v1",new B.f54(),1)},
hvv(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cm(d))
if(y.J.b(d))return new Uint8Array(A.cm(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cm(A.Ba(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cw.aG(d)
return x}catch(w){return v}return v},
Pq(d,e){return B.hKn(d,e)},
hKn(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKH
x=7
return A.b(o==null?$.aKH=B.fGS():o,$async$Pq)
case 7:s=g
r=new Uint8Array(A.cm(e))
q=J.mn(s,"blobs","readwrite")
C.iy.lM(J.ml(q,"blobs"),r,d)
x=8
return A.b(J.p0(q),$async$Pq)
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
return A.i($async$Pq,w)},
Pp(d){return B.hKm(d)},
hKm(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKH
x=7
return A.b(o==null?$.aKH=B.fGS():o,$async$Pp)
case 7:s=f
r=J.mn(s,"blobs","readonly")
x=8
return A.b(C.iy.yz(J.ml(r,"blobs"),d),$async$Pp)
case 8:q=f
x=9
return A.b(J.p0(r),$async$Pp)
case 9:o=B.hvv(q)
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
return A.i($async$Pp,w)},
aey(d){return B.hKl(d)},
hKl(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aey=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKH
x=7
return A.b(p==null?$.aKH=B.fGS():p,$async$aey)
case 7:s=f
r=J.mn(s,"blobs","readwrite")
C.iy.Ew(J.ml(r,"blobs"),d)
x=8
return A.b(J.p0(r),$async$aey)
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
return A.i($async$aey,w)},
f54:function f54(){},
hxM(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkV(w,v))}return u},
h59(d,e){var x,w={},v=A.aSP("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fpW(w,v,e)
C.uQ.xs(v,"change",new B.fpY(w,v,!1))
C.uQ.xs(v,"cancel",new B.fpX(w))
$.eI.lV()
v.click()
A.bN(C.ac_,new B.fpV(w),y.H)},
fpW:function fpW(d,e,f){this.a=d
this.b=e
this.c=f},
fpY:function fpY(d,e,f){this.a=d
this.b=e
this.c=f},
fpX:function fpX(d){this.a=d},
fpV:function fpV(d){this.a=d},
BX(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BX=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRR()?3:4
break
case 3:x=5
return A.b(B.h0o(e,d,s,!0,!1,f,g,h,!1,i),$async$BX)
case 5:x=1
break
case 4:x=6
return A.b(B.P5(d,s,f,g,h,i),$async$BX)
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
return A.b(B.H1(s,d),$async$BX)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f0w(s,d),$async$BX)
case 14:x=12
return A.b(r.h0o(q,p,o,n,m,l,k,j,a1,i),$async$BX)
case 12:x=8
break
case 10:x=15
return A.b(A.a9(e,!1).cp(A.eD(new B.fqa(s,i,d,f,g,h),!1,null,y.H)),$async$BX)
case 15:x=8
break
case 11:x=16
return A.b(A.a9(e,!1).cp(A.eD(new B.fqb(s,i,d,f,g,h),!1,null,y.H)),$async$BX)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BX,w)},
P5(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$P5=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWt(e),$async$P5)
case 3:u=k
x=4
return A.b(B.amA(d,e,!1),$async$P5)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.H1(e,d),$async$P5)
case 7:if(k){v=D.a5t
x=1
break}x=8
return A.b(B.SZ(e),$async$P5)
case 8:v=t?D.RT:D.a5u
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aWr(d,e)){v=D.a5t
x=1
break}x=11
return A.b(B.SZ(e),$async$P5)
case 11:v=t?D.RT:D.a5u
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fC7(d,e)){v=D.a5t
x=1
break}x=14
return A.b(B.SZ(e),$async$P5)
case 14:v=D.RT
x=1
break
case 13:v=t?D.RT:D.a5u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P5,w)},
f0w(d,e){var x=0,w=A.j(y.y),v
var $async$f0w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aWr(e,d)){v=!1
x=1
break}x=3
return A.b(B.aWt(d),$async$f0w)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f0w,w)},
h0o(d,e,f,g,h,i,j,k,l,m){return A.a9(d,!1).cp(A.eD(new B.f6o(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fWC(d,e,f,g,h,i,j){return new B.X8(e,j,d,g,h,i,f,null)},
f8k(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f8k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
x=3
return A.b(A.c2(C.K,null,new B.f8n(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f8k)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8k,w)},
f8P(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f8P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
r=new A.ap(C.as,u)
x=3
return A.b(A.c2(C.K,null,new B.f8R(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f8P)
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
return A.i($async$f8P,w)},
fH_(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b3(4,A.m(16),C.X),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fiv(d,e){var x=0,w=A.j(y.H),v
var $async$fiv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SZ(e),$async$fiv)
case 3:if(d.e==null){x=1
break}A.a9(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fiv,w)},
fqa:function fqa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqb:function fqb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9Y:function a9Y(d,e){this.a=d
this.b=e},
f6o:function f6o(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
X8:function X8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awu:function awu(){this.c=this.a=this.d=null},
cXr:function cXr(d,e){this.a=d
this.b=e},
cXo:function cXo(d){this.a=d},
cXq:function cXq(d){this.a=d},
cXp:function cXp(d){this.a=d},
cXt:function cXt(){},
cXs:function cXs(d){this.a=d},
aap:function aap(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayY:function ayY(d,e){this.a=d
this.b=e},
aC5:function aC5(d,e,f){this.a=d
this.b=e
this.c=f},
f8n:function f8n(d,e,f){this.a=d
this.b=e
this.c=f},
f8l:function f8l(d){this.a=d},
f8m:function f8m(d,e,f){this.a=d
this.b=e
this.c=f},
f8R:function f8R(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8Q:function f8Q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2Q(d,e,f,g,h){return B.hjY(d,e,f,g,h)},
hjY(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c2Q=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iD(r.di(d,new B.c2R(s,e,h,g,f,q),y.g),y.l),$async$c2Q)
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
return A.i($async$c2Q,w)},
aWo(d,e,f,g,h){return B.hjZ(d,e,f,g,h)},
hjZ(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aWo=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arO("GET",d)
o=A.fyF()
if(o==null)o=new A.Ke(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cJ(0,C.DH),$async$aWo)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bf(),$async$aWo)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.AA(q,h,o,e,f,"Received via QR")
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
return A.i($async$aWo,w)},
aWn(d){return B.hjW(d)},
hjW(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aWn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uG(d,null).cJ(0,C.nm),$async$aWn)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aD(0,A.ir(A.iq(p.e)).c6(0,p.w),null)
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
return A.i($async$aWn,w)},
c2P(d){return B.hjX(d)},
hjX(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c2P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uG(d,null).cJ(0,C.p1),$async$c2P)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ir(A.iq(q.e)).c6(0,q.w)
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
return A.i($async$c2P,w)},
c2R:function c2R(d,e,f,g,h,i){var _=this
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
H_(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ae("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hk3(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.H_(C.a.aY(u,v.length))}return null},
hk4(d){var x=B.H_(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hk_(){var x,w=$.oZ(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fN(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a4M(d){return B.hk0(d)},
hk0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eV(d,null,!1,C.bE),$async$a4M)
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
return A.i($async$a4M,w)},
a4N(d,e){return B.hk1(d,e)},
hk1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4N=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ht(d,e,!1,!1,C.cA,null),$async$a4N)
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
return A.i($async$a4N,w)},
Az(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Az=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ax(),$async$Az)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.H_(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4O(r),$async$Az)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4M("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Az)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.H_(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Az)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hk_()
x=14
return A.b(B.a4O(m),$async$Az)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a5().ab()
x=15
return A.b(B.a4N("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Az)
case 15:k=f
x=16
return A.b(B.a4N("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Az)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Az)
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
return A.i($async$Az,w)},
a4O(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.H_(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4M("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4O)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4O,w)},
a4P(d,e,f,g){return B.hk5(d,e,f,g)},
hk5(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4P=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gai(d)){v=!1
x=1
break}r=B.H_(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4O(r),$async$a4P)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.c2X())>1048576||g.ba(d,new B.c2Y())){v=B.Dl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a5_("myCode",d,a0),$async$a4P)
case 4:u=a3
try{t=C.Q.aD(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cj(s)||J.aa(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Dl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWw(u,g.gJ(d),a0),$async$a4P)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oZ().aB(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.di(d,new B.c2Z(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aWp(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a5().ab(),"status","pending"],i,y.z),q),$async$a4P)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4P,w)},
Dl(d,e,f,g,h){return B.hk2(d,e,f,g,h)},
hk2(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$Dl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cA(a6)
k=l.cG(a6,0,new B.c2T())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oZ().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cB.aB(99999)
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
a1=B.H3(a9,q)
a0=new A.IQ(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Dl)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aS(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.os(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a8f(a1.a,a4,"media",a1.d,a2).w6(m,n,new A.CH(!0,q.c)),$async$Dl)
case 12:J.cb(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.aa(0),$async$Dl)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aN6(r),$async$Dl)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.di(a6,new B.c2U(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aWp(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a5().ab(),"status","pending"],e,d),a8),$async$Dl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aN6(r),$async$Dl)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dl,w)},
aWp(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aWp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4M(t),$async$aWp)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b5(r,new B.c2S(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4N(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWp,w)},
LM(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$LM=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4M("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$LM)
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
return A.b(B.aWq(k,a0),$async$LM)
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
return A.b(B.aWv(h),$async$LM)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.T5(g,a0),$async$LM)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.Q(Date.now(),0,!1).a5().ab())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.z(new A.a4(r,new B.c2V(),q),n)
d=A.z(new A.a4(r,new B.c2W(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.df(d,0,A.dK(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a4N("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$LM)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$LM,w)},
aWq(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aWq=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aN(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hO8(k,j)
C.d.v(s,i)
x=5
return A.b(B.BV(l,m,"Received via My Code",t,e,i),$async$aWq)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aN6(s),$async$aWq)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWq,w)},
c2X:function c2X(){},
c2Y:function c2Y(){},
c2Z:function c2Z(){},
c2T:function c2T(){},
c2U:function c2U(){},
c2S:function c2S(){},
c2V:function c2V(){},
c2W:function c2W(){},
fq7(d,e){var x=0,w=A.j(y.H)
var $async$fq7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a9(d,!1).cp(A.eD(new B.fq8(e),!1,null,y.H)),$async$fq7)
case 2:return A.h(null,w)}})
return A.i($async$fq7,w)},
bzr(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bzr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cj(e)){v=!1
x=1
break}x=3
return A.b(A.a9(d,!1).cp(A.eD(new B.fq9(g,e,f),!1,null,y.y)),$async$bzr)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzr,w)},
fq8:function fq8(d){this.a=d},
fq9:function fq9(d,e,f){this.a=d
this.b=e
this.c=f},
SW:function SW(d,e){this.c=d
this.a=e},
aAk:function aAk(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dH0:function dH0(d,e){this.a=d
this.b=e},
T_:function T_(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAn:function aAn(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dI9:function dI9(d){this.a=d},
dIa:function dIa(d){this.a=d},
dIb:function dIb(d){this.a=d},
dI8:function dI8(d,e){this.a=d
this.b=e},
dIc:function dIc(d){this.a=d},
dId:function dId(d){this.a=d},
dIe:function dIe(d,e){this.a=d
this.b=e},
dIf:function dIf(d,e){this.a=d
this.b=e},
dIg:function dIg(d,e){this.a=d
this.b=e},
dIh:function dIh(d){this.a=d},
dIk:function dIk(){},
dIi:function dIi(d){this.a=d},
dIj:function dIj(d,e){this.a=d
this.b=e},
bff:function bff(){},
SX:function SX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAl:function aAl(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dH1:function dH1(d){this.a=d},
dH2:function dH2(d){this.a=d},
fC8(d){var x=d.hD
if(x>=0)return C.o.N(x)
return 10},
hk7(d){var x=d.kd
if(x>=0)return x
return 4.99},
hk6(d){var x=d.kW,w=y.N
w=x.iH(x,new B.c30(),w,w)
return w},
fRL(d){var x=d.ke,w=y.N
w=x.iH(x,new B.c31(),w,w)
return w},
aWt(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aWt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$aWt)
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
return A.i($async$aWt,w)},
a4R(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$a4R)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a4R)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4R,w)},
SZ(d){var x=0,w=A.j(y.H),v,u
var $async$SZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$SZ)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SZ,w)},
fC7(d,e){var x,w,v
if(B.hk7(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hk6(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.c8(new A.Q(Date.now(),0,!1))},
aWr(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fRL(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.c8(new A.Q(Date.now(),0,!1))},
fRM(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a_(B.fRL(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.c8(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.m(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ab())
d.ke=w},
amB(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ax(),$async$amB)
case 7:s=f
r=A.t(p)
r=A.eY(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amB,w)},
amC(d){var x=0,w=A.j(y.H),v,u,t
var $async$amC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amB(d),$async$amC)
case 3:u=f
x=5
return A.b(A.ax(),$async$amC)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$amC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amC,w)},
amA(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fC8(d)
if(u<=0){v=!1
x=1
break}if(B.fC7(d,e)){v=!1
x=1
break}x=3
return A.b(B.amB(e),$async$amA)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amA,w)},
aWs(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aWs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.H1(e,d),$async$aWs)
case 3:if(g){v=-1
x=1
break}u=B.fC8(d)
if(u<=0){v=-1
x=1
break}if(B.fC7(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amB(e),$async$aWs)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWs,w)},
c33(d,e,f){var x=0,w=A.j(y.y),v
var $async$c33=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.H1(e,d),$async$c33)
case 3:if(h){v=!1
x=1
break}v=B.amA(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c33,w)},
c32(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c32=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c33(d,u,i.gRR()),$async$c32)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c32,w)},
a4Q(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4Q=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRR()){v=!0
x=1
break}if(B.aWr(d,u)){v=!0
x=1
break}x=5
return A.b(A.l2(u,C.Pt),$async$a4Q)
case 5:x=k?3:4
break
case 3:B.fRM(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4Q)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kH(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pt,"Doc Share for Organizations"),$async$a4Q)
case 7:if(!k){v=!1
x=1
break}B.fRM(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4Q)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Q,w)},
c30:function c30(){},
c31:function c31(){},
fqH(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fqH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fqH)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eYh.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hE([r],e.c))
s.toString
$.eYh.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqH,w)},
hQi(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eYh.bm($.eYh,new B.fqJ(d))},
fqJ:function fqJ(d){this.a=d},
eZD(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eZD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hE([d],f))
s.toString
u=A.mO(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.ji,null,y.H),$async$eZD)
case 3:C.yI.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lV()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZD,w)},
adr(d,e,f){var x=0,w=A.j(y.H),v
var $async$adr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eYO.m(0,d,new B.a9F(A.bj(e,!0,v)))
x=3
return A.b(A.ax(),$async$adr)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.Q.al(A.E(["parts",e,"size",f],v,y.C),null)),$async$adr)
case 2:return A.h(null,w)}})
return A.i($async$adr,w)},
adl(d){return B.hzv(d)},
hzv(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$adl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eYO.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ax(),$async$adl)
case 3:u=j.aS(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aD(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cj(s)){v=null
x=1
break}o=J.b5(s,new B.f2h(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.a9F(r)
$.eYO.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$adl,w)},
OW(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cm(e))
$.EV.m(0,d,u)
x=3
return A.b(B.Pq(d,u),$async$OW)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OW,w)},
aL0(d){return B.hzt(d)},
hzt(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aL0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EV.h(0,d)
if(n!=null&&!C.aG.gai(n)){v=n
x=1
break}x=3
return A.b(B.Pp(d),$async$aL0)
case 3:p=f
if(p!=null&&!C.aG.gai(p)){$.EV.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ax(),$async$aL0)
case 4:s=f
r=A.aS(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aG(r)
x=!J.cj(q)?9:10
break
case 9:B.OW(d,q)
x=11
return A.b(J.hD(s,d),$async$aL0)
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
return A.i($async$aL0,w)},
hvQ(d){if(d==null)return A.fa(null,y.K)
if(y.J.b(d))return A.fa(new Uint8Array(A.cm(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.fa(new Uint8Array(A.cm(d)),y.K)
if(y.Q.b(d))return A.fa(new Uint8Array(A.cm(A.Ba(d,0,null))),y.K)
if(y.I.b(d))return A.fa(new Uint8Array(A.cm(d)),y.K)
return A.fa(null,y.K)},
a_y(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.be($.bt,y.cf)
t=new A.bP(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.f6A(r,t),!1,s)
A.fC(r,"error",new B.f6B(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.JR,new B.f6C())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_y,w)},
aLk(d,e,f){return B.hBK(d,e,f)},
hBK(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aLk=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_y(i),$async$aLk)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Pq(o,p),$async$aLk)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cb(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.adr(k,j,s),$async$aLk)
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
return A.i($async$aLk,w)},
aLj(d,e,f){return B.hBJ(d,e,f)},
hBJ(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aLj=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aLk(d,e,f),$async$aLj)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_y(f),$async$aLj)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EV.m(0,s,r)
$.Pc.m(0,s,r)
x=11
return A.b(B.OW(s,r),$async$aLj)
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
return A.i($async$aLj,w)},
AA(d,e,f,g,h,i){return B.hkg(d,e,f,g,h,i)},
hkg(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$AA=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cB.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.ja(p,q,o,n,new A.Q(Date.now(),0,!1).a5().ab(),a0,f,B.aWz(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OW(s,d),$async$AA)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ax(),$async$AA)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cR.gcs().aG(d)),$async$AA)
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
return A.b(B.zG(e),$async$AA)
case 12:j=a2
J.cb(j,m)
x=13
return A.b(B.F5(e,j),$async$AA)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$AA,w)},
T0(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zG(d),$async$T0)
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
k=B.fRO(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a5().ab()
i=new B.ja(m,n,k,l,j,"From folder",null,B.aWz(),null)
$.adU.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_y(o),$async$T0)
case 7:g=a1
x=g!=null&&!C.aG.gai(g)?8:10
break
case 8:$.EV.m(0,h,g)
$.Pc.m(0,h,g)
B.OW(h,g)
x=9
break
case 10:x=11
return A.b(B.aLj(d,m,o),$async$T0)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.F5(d,t),$async$T0)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T0,w)},
fCc(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fCc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fRO(r,C.d.gaj(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.H2(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gai(s)){v=B.AA(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCc,w)},
H2(d,e,f,g,h,i){return B.hkf(d,e,f,g,h,i)},
hkf(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$H2=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cB.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IQ(A.dK(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$H2)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cj(m)){x=6
break}J.fU(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cm(J.PY(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kr(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pq(k,l),$async$H2)
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
return A.b(j.aa(0),$async$H2)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pq(k,new Uint8Array(A.cm(n))),$async$H2)
case 15:J.cb(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adr(r,q,g),$async$H2)
case 16:f=new B.ja(i,a1,a0,g,new A.Q(Date.now(),0,!1).a5().ab(),a2,null,B.aWz(),null)
x=17
return A.b(B.zG(d),$async$H2)
case 17:e=a6
J.cb(e,f)
x=18
return A.b(B.F5(d,e),$async$H2)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H2,w)},
T2(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$T2=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adU.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_y(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.adl(s),$async$T2)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pp(u[o]),$async$T2)
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
v=A.Ba(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Pc.h(0,s)
if(i==null)i=$.EV.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qP(d,e),$async$T2)
case 12:i=a0
if(i!=null&&!C.aG.gai(i))$.Pc.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Ba(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T2,w)},
fRO(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qP(d,e){return B.hkh(d,e)},
hkh(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qP=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Pc.h(0,f)
if(e==null)e=$.EV.h(0,f)
if(e!=null&&!C.aG.gai(e)){v=e
x=1
break}s=$.adU.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_y(s),$async$qP)
case 9:r=a3
if(r!=null&&!C.aG.gai(r)){$.EV.m(0,f,r)
$.Pc.m(0,f,r)
B.OW(f,r)
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
return A.b(B.adl(f),$async$qP)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.avi(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pp(g[l]),$async$qP)
case 16:k=a3
if(k!=null&&!C.aG.gai(k))n.K(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.ala()
if(!C.aG.gai(r)){$.EV.m(0,f,r)
$.Pc.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aL0(f),$async$qP)
case 17:j=a3
if(j!=null&&!C.aG.gai(j)){$.Pc.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.T2(a0,a1,0,g),$async$qP)
case 20:i=a3
if(i!=null&&!C.aG.gai(i)){h=new Uint8Array(A.cm(i))
$.EV.m(0,f,h)
$.Pc.m(0,f,h)
B.OW(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qP,w)},
hkk(d){var x,w,v=$.adU.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hkl(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hE([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hki(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amI(d,e,f,g,h){return B.hkj(d,e,f,g,h)},
hkj(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amI=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adU.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_y(s),$async$amI)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qP(g,e),$async$amI)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w6(h,r,new A.CH(!0,e.c)),$async$amI)
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
return A.i($async$amI,w)},
fRQ(d,e,f,g,h){var x,w,v,u,t=$.fRP
$.fRP=t+1
x=Date.now()
w=""+1000*x+"_"+C.cB.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c3e.m(0,t,new B.brx(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.avi(u)))
return t},
fCd(d){var x=0,w=A.j(y.H)
var $async$fCd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fCd,w)},
H3(d,e){var $async$H3=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adU.h(0,h)
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
return A.pB(B.T2(d,e,p,o<q?o:q),$async$H3,w)
case 8:n=a1
x=n!=null&&!C.aG.gai(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pB(A.Eu(n),$async$H3,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pB(B.adl("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$H3,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pB(B.Pp(h[l]),$async$H3,w)
case 18:k=a1
x=k!=null&&!C.aG.gai(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pB(A.Eu(k),$async$H3,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pB(B.qP(d,e),$async$H3,w)
case 22:j=a1
x=j!=null&&!C.aG.gai(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pB(A.Eu(A.Ba(j,p,o<i?o:i)),$async$H3,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pB(null,0,w)
case 2:return A.pB(t.at(-1),1,w)}})
var x=0,w=A.h_h($async$H3,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h15(w)},
aWB(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c3e.h(0,d)
if(t==null||J.cj(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a2e(),$async$aWB)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWB,w)},
T1(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c3e.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2e(),$async$T1)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adr(r.c,u,r.z),$async$T1)
case 4:t=new B.ja(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a5().ab(),r.f,r.r,B.aWz(),null)
u=r.a
x=5
return A.b(B.zG(u),$async$T1)
case 5:s=f
J.cb(s,t)
x=6
return A.b(B.F5(u,s),$async$T1)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
a4X(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c3e.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aey(u[s]),$async$a4X)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a4X,w)},
c3g(d,e,f){var x=0,w=A.j(y.H)
var $async$c3g=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwy(d,e,f),$async$c3g)
case 2:return A.h(null,w)}})
return A.i($async$c3g,w)},
c3h(d,e,f){var x=0,w=A.j(y.H)
var $async$c3h=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwz(d,e,f),$async$c3h)
case 2:return A.h(null,w)}})
return A.i($async$c3h,w)},
Dm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Dm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zG(d),$async$Dm)
case 2:p=g
J.n3(p,new B.c3f(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EV.W(0,v)
$.adU.W(0,e)
x=3
return A.b(B.adl(v),$async$Dm)
case 3:u=g
$.eYO.W(0,v)
x=4
return A.b(A.ax(),$async$Dm)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Dm)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Dm)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aey(s[q]),$async$Dm)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aey(v),$async$Dm)
case 13:x=14
return A.b(B.F5(d,p),$async$Dm)
case 14:return A.h(null,w)}})
return A.i($async$Dm,w)},
aWA(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qP(d,e),$async$aWA)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eZD(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWA,w)},
zG(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$zG)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aD(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b5(u,new B.f6D(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zG,w)},
F5(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$F5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$F5)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b5(e,new B.fay(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.Q.al(t,null)),$async$F5)
case 3:return A.h(null,w)}})
return A.i($async$F5,w)},
bwy(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zG(d),$async$bwy)
case 3:u=h
t=J.cA(u)
s=t.bi(u,new B.f5g(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).aAf(f))
x=4
return A.b(B.F5(d,u),$async$bwy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwy,w)},
bwz(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zG(d),$async$bwz)
case 3:u=h
t=J.cA(u)
s=t.bi(u,new B.f5h(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).czq(f))
x=4
return A.b(B.F5(d,u),$async$bwz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwz,w)},
a9F:function a9F(d){this.a=d},
f2h:function f2h(){},
f6A:function f6A(d,e){this.a=d
this.b=e},
f6B:function f6B(d){this.a=d},
f6C:function f6C(){},
c3f:function c3f(d){this.a=d},
brx:function brx(d,e,f,g,h,i,j,k,l){var _=this
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
f6D:function f6D(){},
fay:function fay(){},
f5g:function f5g(d){this.a=d},
f5h:function f5h(d){this.a=d},
a4Y(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.ba(d,new B.c3k())?3:4
break
case 3:x=5
return A.b(B.aWC(d,e),$async$a4Y)
case 5:u=g
if(u!=null){t=u.c
B.LO(d,u.b,e,t)}v=u
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
return A.b(B.aWx(s),$async$a4Y)
case 10:case 9:if(g){v=new A.Oj(1,D.P6,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.T3(d,e),$async$a4Y)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.T8(!0,!0,d,e),$async$a4Y)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.LO(d,D.y0,e,t)
v=new A.Oj(p,D.y0,t)
x=1
break}v=B.c3j(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Y,w)},
T3(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$T3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a5_(null,d,e),$async$T3)
case 3:p=g
try{u=C.Q.aD(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cj(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWw(p,d.length,e),$async$T3)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c3h(e,C.d.gL(d).a,r.b),$async$T3)
case 7:case 6:q=r.a
x=8
return A.b(B.LO(d,D.P6,e,q),$async$T3)
case 8:v=new A.Oj(d.length,D.P6,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T3,w)},
T4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$T4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.m_(D.m9)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4Z(d,e),$async$T4)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c3c(s,d,e,t),$async$T4)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWx(t),$async$T4)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qP(e,d),$async$T4)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.T3(A.a([d],y.r),e),$async$T4)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T4,w)},
T6(){var x=0,w=A.j(y.H)
var $async$T6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fC6(),$async$T6)
case 2:x=3
return A.b(B.aNn(),$async$T6)
case 3:return A.h(null,w)}})
return A.i($async$T6,w)},
a4Z(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWz()
x=3
return A.b(B.c3g(e,d.a,u),$async$a4Z)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Z,w)},
LO(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$LO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.P6&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4Z(p,f),$async$LO)
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
return A.b(B.c3b(o,p,u,f),$async$LO)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c3c(o,p,f,t),$async$LO)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c3a(o,u,p,f),$async$LO)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$LO,w)},
aWC(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c3i(e,d),$async$aWC)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.T8(!1,!0,d,e),$async$aWC)
case 4:u=g
if(u!=null){t=u.b
v=new A.Oj(u.a,D.y0,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWC,w)},
c3i(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c3i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.T2(d,s,0,1),$async$c3i)
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
return A.i($async$c3i,w)},
c3j(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c3j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5_(null,d,e),$async$c3j)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fRN(u)
if(t.length>800){v=null
x=1
break}v=new A.Oj(d.length,D.dgk,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3j,w)},
amJ(d,e,f){return B.hko(d,e,f)},
hko(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amJ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cW(g,"\ufeff"))g=J.mm(g,1)
x=B.fCb(g)?3:4
break
case 3:x=5
return A.b(B.c3d(g),$async$amJ)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cW(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mm(g,13))
try{k=B.Dn(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a6(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cW(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mm(g,13))
u=9
x=12
return A.b(B.aWv(q),$async$amJ)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T5(p,a0)
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
case 11:case 7:if(J.cW(g,"NGMYDOCSYNC0|"))try{n=B.fCa(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T5(n,a0)
v=k
x=1
break}catch(a1){m=A.a6(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cW(g,"N2|")){v=B.H4(C.a.i(J.mm(g,3)),d,a0)
x=1
break}if(J.cW(g,"NGMYDOCSYNC2|")){v=B.H4(C.a.i(J.mm(g,13)),d,a0)
x=1
break}i=A.ae("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.am(k,0,k.length-1)
else h=k
v=B.H4(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.T5(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amJ,w)},
H4(d,e,f){return B.hkm(d,e,f)},
hkm(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H4=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ae("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.am(e,0,e.length-13)
f=A.ae("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cr(A.t(s)+"/manifest.json",0,null)
q=A.cr(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aWn(r),$async$H4)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aWn(A.cr(s,0,null)),$async$H4)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cj(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c2Q(o,r,a1,n,a2),$async$H4)
case 11:m=a4
x=J.cj(m)?12:13
break
case 12:x=14
return A.b(B.c2P(q),$async$H4)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.T5(l,a2),$async$H4)
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
return A.i($async$H4,w)},
a5_(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a5_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qP(f,r),$async$a5_)
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
v=C.Q.al(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5_,w)},
T5(d,e){return B.hkn(d,e)},
hkn(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$T5=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cw.aG(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.AA(i,a3,d,k,l,o),$async$T5)
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
return A.i($async$T5,w)},
LN:function LN(d,e){this.a=d
this.b=e},
c3k:function c3k(){},
a_8(d){var x=A.M(d).ax.a===C.H,w=x?D.a9Y:D.a8i,v=x?D.abi:C.c,u=x?C.aN:C.M,t=x?C.bI:C.aj,s=x?D.a9g:C.aJ
return new A.aDh([w,s,v,u,t,x?C.f4:C.bV])},
h5T(d,e){var x=e?C.x.j(0.72):C.aT
return A.ch(null,x,!0,null,new B.fuE(e),d,null,!0,!0,y.N)},
c3_(d,e,f,g,h,i,j,k,l){return new B.SY(e,l,d,f,k,j,g,h,i,null)},
Xa(d,e,f,g,h,i,j){return new B.b9Y(g,h,j,e,i,d,f,null)},
fuE:function fuE(d){this.a=d},
X7:function X7(d,e){this.c=d
this.a=e},
awt:function awt(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cXn:function cXn(d){this.a=d},
cXl:function cXl(d){this.a=d},
cXm:function cXm(d){this.a=d},
brc:function brc(){},
SY:function SY(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAm:function aAm(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dI7:function dI7(d){this.a=d},
dHv:function dHv(d,e){this.a=d
this.b=e},
dHw:function dHw(d,e){this.a=d
this.b=e},
dH4:function dH4(d,e,f){this.a=d
this.b=e
this.c=f},
dH3:function dH3(d){this.a=d},
dH5:function dH5(d,e){this.a=d
this.b=e},
dHa:function dHa(d,e,f){this.a=d
this.b=e
this.c=f},
dH9:function dH9(d){this.a=d},
dHW:function dHW(d,e){this.a=d
this.b=e},
dHX:function dHX(d){this.a=d},
dHs:function dHs(d,e,f){this.a=d
this.b=e
this.c=f},
dHp:function dHp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dH8:function dH8(d){this.a=d},
dHA:function dHA(d){this.a=d},
dHz:function dHz(){},
dHe:function dHe(d){this.a=d},
dHT:function dHT(d,e){this.a=d
this.b=e},
dHU:function dHU(d,e){this.a=d
this.b=e},
dHV:function dHV(d,e){this.a=d
this.b=e},
dHq:function dHq(d,e){this.a=d
this.b=e},
dHr:function dHr(d,e){this.a=d
this.b=e},
dHM:function dHM(d,e){this.a=d
this.b=e},
dHI:function dHI(d){this.a=d},
dHH:function dHH(d){this.a=d},
dHJ:function dHJ(){},
dHK:function dHK(){},
dHL:function dHL(d,e){this.a=d
this.b=e},
dHN:function dHN(){},
dHO:function dHO(d){this.a=d},
dHG:function dHG(d,e){this.a=d
this.b=e},
dHB:function dHB(d){this.a=d},
dHC:function dHC(d){this.a=d},
dHD:function dHD(d){this.a=d},
dHE:function dHE(d){this.a=d},
dHF:function dHF(d){this.a=d},
dHb:function dHb(){},
dHc:function dHc(d){this.a=d},
dHd:function dHd(d,e){this.a=d
this.b=e},
dH7:function dH7(d,e){this.a=d
this.b=e},
dH6:function dH6(d,e,f){this.a=d
this.b=e
this.c=f},
dHt:function dHt(d){this.a=d},
dHu:function dHu(d,e,f){this.a=d
this.b=e
this.c=f},
dHn:function dHn(d,e){this.a=d
this.b=e},
dHj:function dHj(d){this.a=d},
dHg:function dHg(d,e,f){this.a=d
this.b=e
this.c=f},
dHk:function dHk(d){this.a=d},
dHl:function dHl(d){this.a=d},
dHm:function dHm(){},
dHo:function dHo(d,e){this.a=d
this.b=e},
dHh:function dHh(d){this.a=d},
dHf:function dHf(d,e,f){this.a=d
this.b=e
this.c=f},
dHi:function dHi(){},
dHy:function dHy(d){this.a=d},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHS:function dHS(d,e){this.a=d
this.b=e},
dHP:function dHP(d){this.a=d},
dHQ:function dHQ(d,e){this.a=d
this.b=e},
dHR:function dHR(d){this.a=d},
dI4:function dI4(d){this.a=d},
dI2:function dI2(d){this.a=d},
dI3:function dI3(d){this.a=d},
dI5:function dI5(){},
dI6:function dI6(d,e){this.a=d
this.b=e},
dHZ:function dHZ(d,e){this.a=d
this.b=e},
dI_:function dI_(d,e,f){this.a=d
this.b=e
this.c=f},
dHY:function dHY(d,e,f){this.a=d
this.b=e
this.c=f},
dI0:function dI0(d,e){this.a=d
this.b=e},
dI1:function dI1(d,e){this.a=d
this.b=e},
awq:function awq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9X:function b9X(d,e,f){this.c=d
this.d=e
this.a=f},
cXj:function cXj(){},
cXk:function cXk(){},
a9Z:function a9Z(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cXH:function cXH(){},
cXG:function cXG(d){this.a=d},
X9:function X9(d,e,f){this.c=d
this.d=e
this.a=f},
awv:function awv(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cXD:function cXD(d){this.a=d},
cXE:function cXE(d,e,f){this.a=d
this.b=e
this.c=f},
cXF:function cXF(d,e){this.a=d
this.b=e},
cXB:function cXB(d,e){this.a=d
this.b=e},
cXz:function cXz(d){this.a=d},
cXx:function cXx(d){this.a=d},
cXu:function cXu(d){this.a=d},
cXA:function cXA(d){this.a=d},
cXw:function cXw(d){this.a=d},
cXC:function cXC(d){this.a=d},
cXy:function cXy(d){this.a=d},
cXv:function cXv(d){this.a=d},
X6:function X6(d,e,f){this.c=d
this.d=e
this.a=f},
aws:function aws(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cXg:function cXg(d){this.a=d},
cXf:function cXf(d,e){this.a=d
this.b=e},
cXh:function cXh(d){this.a=d},
cXe:function cXe(d,e){this.a=d
this.b=e},
cXi:function cXi(d){this.a=d},
cXd:function cXd(d,e){this.a=d
this.b=e},
cX9:function cX9(d){this.a=d},
cXa:function cXa(d){this.a=d},
cXb:function cXb(d,e){this.a=d
this.b=e},
cXc:function cXc(d){this.a=d},
NX:function NX(d,e,f){this.c=d
this.d=e
this.a=f},
awy:function awy(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cXU:function cXU(d){this.a=d},
cXV:function cXV(d){this.a=d},
cXW:function cXW(d){this.a=d},
cXX:function cXX(d){this.a=d},
cXY:function cXY(d,e){this.a=d
this.b=e},
cXZ:function cXZ(d){this.a=d},
cY0:function cY0(d){this.a=d},
cY_:function cY_(d){this.a=d},
Xb:function Xb(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aww:function aww(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cXQ:function cXQ(d,e){this.a=d
this.b=e},
cXR:function cXR(d,e){this.a=d
this.b=e},
cXI:function cXI(d,e,f){this.a=d
this.b=e
this.c=f},
cXJ:function cXJ(d){this.a=d},
cXK:function cXK(){},
cXP:function cXP(){},
cXL:function cXL(d,e){this.a=d
this.b=e},
cXM:function cXM(d,e){this.a=d
this.b=e},
cXN:function cXN(d,e){this.a=d
this.b=e},
cXO:function cXO(d,e){this.a=d
this.b=e},
a9X:function a9X(d,e){this.c=d
this.a=e},
cX8:function cX8(d){this.a=d},
X5:function X5(d){this.a=d},
awr:function awr(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Xc:function Xc(d,e){this.c=d
this.a=e},
awx:function awx(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cXT:function cXT(d){this.a=d},
cXS:function cXS(d){this.a=d},
b9Y:function b9Y(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hkp(){var x,w=$.oZ(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fN(v)},
LP(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$LP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$LP)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eV("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$LP)
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
return A.i($async$LP,w)},
a50(d){return B.hkq(d)},
hkq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a50=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a50)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.ht("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z),!1,!1,C.cA,null),$async$a50)
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
return A.i($async$a50,w)},
T7(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$T7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LP(),$async$T7)
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
return A.b(B.a50(s),$async$T7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$T7,w)},
T8(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$T8=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bX(),$async$T8)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bj(f,!0,y.U)
else{t=A.U(f).k("a4<1>")
u=A.z(new A.a4(f,new B.c3m(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hkp()
t=A.U(u).k("J<1,a1<n,aB>>")
r=A.z(new A.J(u,new B.c3n(s),t),t.k("ai.E"))
x=6
return A.b(B.LP(),$async$T8)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.C))
x=7
return A.b(B.a50(q),$async$T8)
case 7:x=8
return A.b(B.a51(r,u,g,s),$async$T8)
case 8:v=new A.blm(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T8,w)},
amK(d){var x=0,w=A.j(y.y),v,u,t
var $async$amK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.LP(),$async$amK)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amK,w)},
c3o(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c3o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.LP(),$async$c3o)
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
return A.i($async$c3o,w)},
a51(d,e,f,g){return B.hkr(d,e,f,g)},
hkr(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a51=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amI("media",r,new B.c3l(s,e,g),f,q),$async$a51)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.T7(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a51)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.T7(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$a51)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a6(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.T7(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a51)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a51,w)},
Dn(d,e,f){return B.hks(d,e,f)},
hks(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Dn=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bX(),$async$Dn)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amK(b3),$async$Dn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kX,null,g),$async$Dn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amK(b3),$async$Dn)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.LP(),$async$Dn)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aN(a1.h(d,"usesRemaining"))
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
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.os(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a8f(a8.a,b0,"media",a8.d,a9).BA(m)
k=A.cr(l,0,null)
x=17
return A.b(B.aWo(k,n,o,s,b7),$async$Dn)
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
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.os(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a8f(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Dn)
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
return A.b(B.a50(e),$async$Dn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dn,w)},
c3m:function c3m(){},
c3n:function c3n(d){this.a=d},
c3l:function c3l(d,e,f){this.a=d
this.b=e
this.c=f},
aNn(){var x=0,w=A.j(y.H),v,u
var $async$aNn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hvh=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aNn)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aNn)
case 3:u=$.fHb
u=u==null?null:u.bz(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aNn)
case 4:$.fHb=$.hDy=$.hDz=null
return A.h(null,w)}})
return A.i($async$aNn,w)},
faa(d){var x=0,w=A.j(y.H),v,u
var $async$faa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2z){x=1
break}u=new A.be($.bt,y.d4)
d.c=new B.fab(new A.bP(u,y.aY))
x=3
return A.b(u.i0(0,C.hB,new B.fac()),$async$faa)
case 3:case 1:return A.h(v,w)}})
return A.i($async$faa,w)},
hDw(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hk9(x):x},
fHf(d){var x=0,w=A.j(y.T),v,u,t
var $async$fHf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.a_(u,"WR")){v=B.amM(u)
x=1
break}v=B.fCa(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHf,w)},
fHe(d){var x=0,w=A.j(y.T),v,u,t
var $async$fHe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.a_(u,"WR")){v=B.amN(u)
x=1
break}v=B.fCa(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHe,w)},
fqs(d){var x=0,w=A.j(y.T),v
var $async$fqs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amN(d),$async$fqs)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqs,w)},
bxp(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bxp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fHe(d),$async$bxp)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aD(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bxp,w)},
f_r(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f_r=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.T1(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.AA(d.ala(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_r,w)},
F7(d,e,f){return B.hFT(d,e,f)},
hFT(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$F7=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fHf(a1),$async$F7)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aD(0,e,null)
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
return A.b($.h7H().aAu(D.d4S,null),$async$F7)
case 4:l=d.fHb=a4
f.a="file"
f.b="application/octet-stream"
k=new A.avi(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.be($.bt,y.b1)
l.y=new B.faF(f,k,new B.faG(f,a2,k,j,a0,p),a2,j,a0,p,new A.bP(t,y.ch))
x=5
return A.b(l.a53(0,new B.Vg(r,"offer")),$async$F7)
case 5:d=l
x=7
return A.b(l.ai2(0),$async$F7)
case 7:x=6
return A.b(d.a4W(0,a4),$async$F7)
case 6:x=8
return A.b(B.faa(l),$async$F7)
case 8:x=9
return A.b(l.alV(),$async$F7)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hDw(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.al(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amO(m,h),$async$F7)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fRN(h)
case 11:v=new A.bkE(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$F7,w)},
fab:function fab(d){this.a=d},
fac:function fac(){},
faG:function faG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
faF:function faF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
faE:function faE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hHG(d){switch(d){case"new":return D.dVS
case"checking":return D.dVT
case"connected":return D.dVV
case"completed":return D.dVU
case"failed":return D.dVX
case"disconnected":return D.dVY
case"closed":return D.aGh
case"count":return D.dVW}return D.aGh},
hHH(d){switch(d){case"new":return D.aGi
case"gathering":return D.dVZ
case"complete":return D.a2z}return D.aGi},
hRM(d){switch(d){case"stable":return D.dW_
case"have-local-offer":return D.dW0
case"have-local-pranswer":return D.dW2
case"have-remote-offer":return D.dW1
case"have-remote-pranswer":return D.dW3
case"closed":return D.aGo}return D.aGo},
hQ3(d){switch(d){case"new":return D.aGl
case"connecting":return D.aGm
case"connected":return D.aGn
case"closed":return D.a2A
case"disconnected":return D.aGk
case"failed":return D.aGj}return D.a2A},
a7f:function a7f(d,e){this.a=d
this.b=e},
MP:function MP(d,e){this.a=d
this.b=e},
Vf:function Vf(d,e){this.a=d
this.b=e},
MO:function MO(d,e){this.a=d
this.b=e},
DO:function DO(d,e){this.a=d
this.b=e},
ce7:function ce7(){},
fDR(d){var x=new B.DN()
x.a=d
x.b=!0
return x},
DN:function DN(){this.b=this.a=$},
a7e:function a7e(){},
aqZ:function aqZ(){},
Vg:function Vg(d,e){this.a=d
this.b=e},
fC6(){var x=0,w=A.j(y.H)
var $async$fC6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fC6,w)},
fC9(d,e,f){var x=0,w=A.j(y.T),v
var $async$fC9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.m_(D.m9))){v=null
x=1
break}v=B.fqH(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fC9,w)},
fRN(d){var x,w=F.a7Q.a1Z(C.dG.aG(d),null)
if(w.length===0){x=C.dG.aG(d)
return C.cR.gcs().aG(x)}return C.cR.gcs().aG(w)},
hk8(d){var x,w,v=C.cw.aG(d)
try{x=C.c1.c6(0,F.a7P.b7C(v,!1))
return x}catch(w){x=C.c1.c6(0,v)
return x}},
fCa(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hk8(C.a.aY(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aY(t,w.length)
try{v=C.c1.c6(0,C.cw.aG(x))
return v}catch(u){return x}}return null},
hk9(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aF(s,"\n")},
hka(){var x,w=$.oZ(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fN(v)},
aWu(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aWu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eV("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aWu)
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
return A.i($async$aWu,w)},
c34(d,e){return B.hkb(d,e)},
hkb(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c34=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.ht("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cA,null),$async$c34)
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
return A.i($async$c34,w)},
aWx(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWu(d),$async$aWx)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWx,w)},
aWw(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hka()
r=C.a.i(f)
t=C.dG.aG(s)
x=3
return A.b(B.c34(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cR.gcs().aG(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$aWw)
case 3:if(!h){v=null
x=1
break}v=new A.Zc("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWw,w)},
aWv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aWv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aWu(o),$async$aWv)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c1.c6(0,C.cw.aG(u))
if(J.iN(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a6(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aWv,w)},
c35(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c35=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.byk("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cA),$async$c35)
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
return A.i($async$c35,w)},
aWy(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.H0(),$async$aWy)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a_(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWy,w)},
amF(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amF)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWy(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amF,w)},
amD(d,e){var x=0,w=A.j(y.H)
var $async$amD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amD)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amD)
case 2:return A.h(null,w)}})
return A.i($async$amD,w)},
a4T(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4T=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4T)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.H0(),$async$a4T)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dg(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.C))
x=5
return A.b(A.a4S(s),$async$a4T)
case 5:x=6
return A.b(B.amD(f,u),$async$a4T)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4T,w)},
a4U(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4U=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4U)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.H0(),$async$a4U)
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
if(o!==t&&s.an(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.amD(g,q),$async$a4U)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4S(u),$async$a4U)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4U,w)},
a4V(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4V=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a4V)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.H0(),$async$a4V)
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
s=B.aWr(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ax(),$async$a4V)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.Q.al(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a5().ab()],p,p),null)),$async$a4V)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4V,w)},
c36(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c36=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$c36)
case 7:s=f
p=A.t(n)
r=A.aS(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aD(0,r,null)
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
return A.i($async$c36,w)},
H1(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$H1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c36(d),$async$H1)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWy(t),$async$H1)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amE(d),$async$H1)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aWr(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amE(d),$async$H1)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H1,w)},
amE(d){var x=0,w=A.j(y.H)
var $async$amE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amE)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amE)
case 2:return A.h(null,w)}})
return A.i($async$amE,w)},
aWz(){var x,w=$.oZ(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fN(v)},
a4W(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fCb(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ae("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c39(d){return B.hkd(d)},
hkd(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c39=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4W(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eV("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c39)
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
return A.i($async$c39,w)},
amH(d,e){return B.hke(d,e)},
hke(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4W(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.ht("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cA,null),$async$amH)
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
return A.i($async$amH,w)},
c3b(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c3b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4W(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amH(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$c3b)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c3b,w)},
c3a(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c3a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4W(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amH(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z)),$async$c3a)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c3a,w)},
c3c(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c3c=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4W(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amH(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3c,w)},
c3d(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c3d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fCb(d)){v=null
x=1
break}x=3
return A.b(B.c39(d),$async$c3d)
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
return A.i($async$c3d,w)},
a52(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a52=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$a52)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eV("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a52)
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
return A.i($async$a52,w)},
amL(d){return B.hkt(d)},
hkt(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bX(),$async$amL)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.ht("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ab()],y.N,y.z),!1,!1,C.cA,null),$async$amL)
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
return A.i($async$amL,w)},
amM(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cW(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bX(),$async$amM)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a52(),$async$amM)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c1.c6(0,C.cw.aG(q))
if(J.iN(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dS(A.a_(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a5().ab())
J.aE(s,j,o)
x=9
return A.b(B.amL(s),$async$amM)
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
return A.i($async$amM,w)},
amO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bX(),$async$amO)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a52(),$async$amO)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dS(A.a_(s,r,q),r,q)
r=C.dG.aG(C.a.i(e))
q.m(0,"answer",C.cR.gcs().aG(r))
q.m(0,"answerAt",new A.Q(Date.now(),0,!1).a5().ab())
t.m(u,p,q)
x=5
return A.b(B.amL(u),$async$amO)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amO,w)},
amN(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bX(),$async$amN)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a52(),$async$amN)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c1.c6(0,C.cw.aG(u))
v=r
x=1
break}catch(n){t=A.a6(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amN,w)},
alO(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ag$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb6()
if(!(p instanceof A.q2)){v=null
x=1
break}x=3
return A.b(p.lQ(e),$async$alO)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fO),$async$alO)
case 7:q=g
o=q
o=o==null?null:J.f5(J.w7(o))
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
return A.i($async$alO,w)},
hO8(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aS(C.o.u(w),5,"0")
return v},
fp2(d){return B.hOa(d)},
hOa(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fp2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Jk(d,3600),$async$fp2)
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
return A.i($async$fp2,w)},
BV(d,e,f,g,h,i){var x=null
return B.hO7(d,e,f,g,h,i)},
hO7(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BV=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fRQ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fCd(r),$async$BV)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fp2(o),$async$BV)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4X(r),$async$BV)
case 14:v=null
x=1
break
case 13:e=$.bt.h(0,C.aJi)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ke(A.a([],g))
x=15
return A.b(d.eM(0,A.arO("GET",A.cr(n,0,null))).cJ(0,C.DH),$async$BV)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4X(r),$async$BV)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IQ(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BV)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWB(r,k),$async$BV)
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
case 10:i=B.T1(r)
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
return A.b(B.a4X(r),$async$BV)
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
aN6(d){return B.hO9(d)},
hO9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aN6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aN6)
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
return A.i($async$aN6,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[39]
F=c[212]
H=c[101]
P=c[193]
E=c[185]
G=c[84]
Q=c[157]
R=c[102]
S=c[191]
I=c[217]
K=c[223]
B=a.updateHolder(c[21],B)
D=c[221]
T=c[156]
L=c[175]
U=c[63]
V=c[224]
W=c[69]
X=c[54]
M=c[83]
Y=c[222]
N=c[114]
B.ce8.prototype={
aAu(d,e){return this.cAW(d,e)},
cAW(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aAu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.T(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dS(r,s,t)
t.v(0,d)
u=new q(A.k7(A.cv(t)))
t=J.k(u)
v=B.hp1(C.cR.gcs().aG(new A.d0(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aAu,w)}}
B.b0H.prototype={
bsw(d){var x=this,w=x.w
w.onclose=A.h8(new B.ce3(x))
w.onopen=A.h8(new B.ce4(x))
w.onmessage=A.h8(new B.ce5(x))
w.onbufferedamountlow=A.h8(new B.ce6(x))},
gdh(d){return this.x},
aep(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aep=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DN()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fDR(J.f5(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eb(d.arrayBuffer(),y.af),$async$aep)
case 8:v=t.fDR(s.al1(f,0,null))
x=1
break
case 7:case 4:v=B.fDR(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aep,w)}}
B.b0I.prototype={
bsx(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h8(new B.ce9(x)))
w.addEventListener("icecandidate",A.h8(new B.cea(x)))
w.addEventListener("iceconnectionstatechange",A.h8(new B.ceb(x)))
w.onicegatheringstatechange=A.h8(new B.cec(x))
w.addEventListener("signalingstatechange",A.h8(new B.ced(x)))
if(!$.fKF())w.addEventListener("connectionstatechange",A.h8(new B.cee(x)))
w.addEventListener("negotiationneeded",A.h8(new B.cef(x)))
w.addEventListener("track",A.h8(new B.ceg(x)))},
ai2(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ai2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eb(s.createAnswer(A.k7(A.cv(A.T(y.N,y.z)))),y.aQ),$async$ai2)
case 3:t=f
v=new B.Vg(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai2,w)},
a4W(d,e){return this.bi6(0,e)},
bi6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eb(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4W)
case 2:return A.h(null,w)}})
return A.i($async$a4W,w)},
a53(d,e){return this.bin(0,e)},
bin(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a53=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eb(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a53)
case 2:return A.h(null,w)}})
return A.i($async$a53,w)},
alV(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Vg(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alV,w)},
bz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.fa(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bz,w)}}
B.a9Y.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.X8.prototype={
S(){return new B.awu()},
gd6(){return this.c}}
B.awu.prototype={
Z(){this.a0()
this.ab9()},
ab9(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWs(u.e,u.c),$async$ab9)
case 2:t=e
if(v.c!=null)v.n(new B.cXr(v,t))
return A.h(null,w)}})
return A.i($async$ab9,w)},
Ot(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ot=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amA(t.e,t.c,!1),$async$Ot)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.H(y.q).f.P(D.eyn)
x=1
break}x=4
return A.b(B.a4R(u.a.c,"individual"),$async$Ot)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a9(t,!1).a3v(A.eD(new B.cXo(u),!1,null,y.H)),$async$Ot)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ot,w)},
HL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f8k(o),$async$HL)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4V(o.e,r,s,q),$async$HL)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.H(y.q).f.P(D.evs)
x=1
break}x=5
return A.b(B.a4R(u.a.c,"member"),$async$HL)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a9(o,!1).a3v(A.eD(new B.cXq(u),!1,null,y.H)),$async$HL)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HL,w)},
wY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4Q(t.e,o,t.f,t.r,t.w,s),$async$wY)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4R(u.a.c,"org_owner"),$async$wY)
case 4:x=5
return A.b(B.amF(u.a.c),$async$wY)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f8P(o),$async$wY)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4T(s,t,o,q.c),$async$wY)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.H(y.q).f.P(D.evp)
x=1
break}x=10
return A.b(B.amF(u.a.c),$async$wY)
case 10:o=u.c
if(o==null){x=1
break}o.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a9(o,!1).a3v(A.eD(new B.cXp(u),!1,null,y.H)),$async$wY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wY,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.iZ:C.oU,q=B.fC8(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.fF,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.eQl,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.fX,t,t,t),C.ay,D.f6V,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bJj,C.n),t,t,t,t,C.eq,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lo(new B.cXt(),t),C.P,w,C.dX,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ab)
if(!u.a.x)C.d.v(p,A.a([new B.aap(C.eO,C.atj,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc64(),t),C.ab],v))
p.push(new B.aap(C.oc,C.ZE,"Team Member","Sign in with your organization access code + password",u.gc6V(),t))
p.push(C.ab)
p.push(new B.aap(C.agc,C.a0_,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc6q(),t))
return A.ce(t,r,A.bq(!0,A.ci(A.v(p,C.ag,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adD,t,t,C.ak),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.aap.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.a1,!0,s,A.aI(!1,r,!0,A.es(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a3(C.a4,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.ow,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.Ae,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c4,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ad)}}
B.ayY.prototype={}
B.aC5.prototype={}
B.ja.prototype={
m_(d){var x=this.b,w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.aY(x,w+1).toLowerCase())},
gamw(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.a9(x/1024,1)+" KB"
if(x<1073741824)return C.k.a9(x/1048576,1)+" MB"
return C.k.a9(x/1073741824,2)+" GB"},
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
b78(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.ja(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
czq(d){return this.b78(null,d)},
aAf(d){return this.b78(d,null)}}
B.SW.prototype={
S(){return new B.aAk(new A.co(null,y.A))},
gd6(){return this.c}}
B.aAk.prototype={
Z(){this.a0()
this.aba()},
aba(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aba=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Az(u.a.c),$async$aba)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dH0(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aba,w)},
abb(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$abb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fE(new A.fx(s)),$async$abb)
case 3:t=u.c
if(t!=null)t.H(y.q).f.P(D.ezh)
case 1:return A.h(v,w)}})
return A.i($async$abb,w)},
Xw(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alO(s.d,4),$async$Xw)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ri(r,"ngmy_my_code_"+m+".png"),$async$Xw)
case 8:q=e
o=s.c
if(o!=null)o.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a6(l)
o=s.c
if(o!=null)o.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xw,w)},
aeS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7P("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeS,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.iZ:C.oU,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lL
else if(q.e==null)x=A.au(new A.C(C.eq,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aL.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a_3,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a3(C.a4,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.add,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.G,C.aB.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.ci(A.v(A.a([x,C.mh,w,C.ki,new A.ep(A.p(p,A.pl(p,p,!1,B.hk4(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c4,p,p,p),q.d),C.ab,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ki,A.B(A.a([A.D(A.ez(M.Av,C.Rp,q.gc_a(),p),1),C.aw,A.D(A.dq(C.xt,C.a4Q,q.gc_b(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a5(1/0,p,A.ez(L.Yw,D.f37,q.gcl3(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.Kh,p,p,C.ak)
x=r}return A.ce(l,n,x,p,!1,!1,p,p)}}
B.T_.prototype={
S(){return new B.aAn(new A.ap(C.as,$.av()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aAn.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.H_(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
p(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.p()
this.a2()},
Xx(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.H_(u.d.a.a)
if(t==null){u.n(new B.dI9(u))
x=1
break}u.n(new B.dIa(u))
s=u.a
r=s.c
x=3
return A.b(B.a4P(s.d,new B.dIb(u),t,r),$async$Xx)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dIc(u))
if(q){s=u.c
s.toString
A.a9(s,!1).M(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xx,w)},
a_D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cj(r.a.d)){x=1
break}r.n(new B.dId(r))
u=4
q=J.fj(r.a.d)
x=7
return A.b(B.qP(r.a.c,q),$async$a_D)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dIe(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.afh(p,m,l,j,k),$async$a_D)
case 8:o=e
if(r.c!=null)r.n(new B.dIf(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a6(h)
if(r.c!=null)r.n(new B.dIg(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dIh(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_D,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.a9Y:D.a8i,h=j?D.abi:C.c,g=j?C.aN:C.M,f=j?C.bI:C.aj,e=j?D.a9g:C.aJ
i=[i,e,h,g,f,j?C.f4:C.bV]
x=A.M(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e1(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e1(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.w,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.by6,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a3(C.ax,C.aC,C.w,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fB,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a_3,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tK(A.ae("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bff()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.Ka,k,k,"",k,!0,new A.b3(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b3(4,A.m(18),new A.ay(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dIi(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lE,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JT(l.a.d,4)
m=A.z(new A.J(m,new B.dIj(x,new A.aDh(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.mC,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a3,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d3,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.em,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.etY)
else q.push(A.V(C.l1,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dj(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.ba,new A.o(u,k,s,t,k,k,C.n),C.io,k,k,k,C.eN,k,k,k)],r))}e=A.D(A.ci(A.v(e,C.ag,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bjg,k,k,C.ak),1)
u=l.f?k:l.gcl4()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(L.Yw,D.f42,u,A.db(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cc,k,new A.b6(q,C.X),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc_c()
t=A.bk(C.aB,k,k,0,C.c,k,C.mB,k,new A.b6(A.m(16),C.X),k,k,k)
return A.ce(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.bq(!0,A.mE(new B.dIk(),A.v(A.a([e,new A.C(D.biL,A.v(A.a([s,C.P,i,C.ab,A.bL(l.f?C.qW:D.f2x,u,t)],r),C.ag,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.V0,k,new A.bl(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bff.prototype={
nX(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f7(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ae("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ae("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.h2(C.bs,v.length),C.aM)}}
B.SX.prototype={
S(){return new B.aAl()}}
B.aAl.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.av()
u.d!==$&&A.aQ()
u.d=new A.ap(new A.bc(w,C.b2,C.aM),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.ap(new A.bc(x,C.b2,C.aM),v)
u.f!==$&&A.aQ()
u.f=new A.ap(C.as,v)},
p(){var x,w=this,v=w.d
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
abc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$abc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dH1(r))
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
return A.b(B.a4U(p,m,n,o,C.a.i(l).length===0?null:l),$async$abc)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.H(y.q).f.P(D.eyT)
s=[1]
x=4
break}p.H(y.q).f.P(D.exw)
p=r.c
p.toString
A.a9(p,!1).M(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dH2(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$abc,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.iZ:C.oU,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eWJ,s,s,s,1,s,!0),p=A.p(s,D.bbD,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.F7,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bEO,C.z,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bEK,C.z,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bEY,C.z,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc_d()
u=A.bk(C.aB,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.ce(q,r,A.ci(A.v(A.a([p,C.d3,o,C.ab,x,C.ab,w,C.mh,A.bL(t.r?C.qW:C.aLN,v,u)],y.p),C.ag,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ak),s,!1,!1,s,s)}}
B.a9F.prototype={}
B.brx.prototype={
a2e(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cm(r.ala()))
x=3
return A.b(B.Pq(t,s),$async$a2e)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2e,w)},
gd6(){return this.a}}
B.LN.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.X7.prototype={
S(){return new B.awt(new A.ap(C.as,$.av()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.awt.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cXn(this))},
p(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.p()
this.a2()},
c_j(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a9(w,!1).M(x)
return null},
B(d){var x=this,w=null,v=B.a_8(d),u=x.a.c,t=u?C.hx:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iZ:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aB.j(u?0.25:0.12),C.fF,32)],n),l=A.p(w,T.aiN,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ab(0,C.G,C.aB.j(0.4),C.cs,16)],n),C.ajz,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tK(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.brc()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.DT,w,w,"",w,!0,new A.b3(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b3(4,A.m(16),D.aQG),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cXl(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lE,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.n_,new B.cXm(d),A.db(w,w,w,w,w,w,w,w,w,s,w,w,C.cc,w,new A.b6(A.m(14),C.X),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.cF,12)],n)
g=y.p
return A.ew(w,C.K,new A.d1(Q.Iq,A.bU(new A.C(C.wE,A.v(A.a([l,C.aO,k,C.P,j,C.dX,i,C.dX,A.B(A.a([f,C.aw,A.D(A.bU(A.aD(!1,C.a1,!0,w,A.aI(!1,A.m(14),!0,D.dQt,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc_i(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ad),new A.o(w,w,w,h,n,K.LW,C.n),C.bb),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bb),w),w,w,w,C.Kj,C.cZ,w,w,w)}}
B.brc.prototype={
nX(d,e){return e.ahY(e.a.toUpperCase())}}
B.SY.prototype={
S(){return new B.aAm(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aAm.prototype={
Z(){var x=this
x.a0()
x.rR()
x.w=A.dD(C.j2,new B.dI7(x))},
p(){var x=this.w
if(x!=null)x.aa(0)
B.T6()
this.a2()},
Zw(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LM(u.a.c),$async$Zw)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zG(u.a.c),$async$Zw)
case 4:u.n(new s.dHv(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zw,w)},
rR(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LM(u.a.c),$async$rR)
case 3:t=e
x=4
return A.b(B.zG(u.a.c),$async$rR)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dHw(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LY(u.d)
B.Az(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rR,w)},
LY(d){return this.bwo(d)},
bwo(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4Z(r,u.a.c),$async$LY)
case 8:p=f
if(u.c==null){x=1
break}new B.dH4(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.m_(D.m9))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.T4(r,u.a.c),$async$LY)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zG(u.a.c),$async$LY)
case 12:u.n(new o.dH5(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LY,w)},
Mk(d){return this.bCq(d)},
bCq(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4Z(d,u.a.c),$async$Mk)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dHa(u,d,t))
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
w.H(y.q).f.P(A.b0(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rS(d,e){return this.cv9(d,e)},
cv9(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dHW(r,e))
u=3
x=6
return A.b(d.$0(),$async$rS)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dHX(r))
$.eI.lV()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rS,w)},
gaQW(){var x=this.a
return x.f||x.r||x.w},
GN(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQW()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c32(s,n,r,q,o,t),$async$GN)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fiv(o,u.a.c),$async$GN)
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
return A.b(B.BX(s,o,r,q,n,t),$async$GN)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GN,w)},
YB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$YB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amF(u.a.c),$async$YB)
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
return A.b(A.a9(t,!1).cp(A.eD(new B.dHs(u,r,q),!1,null,y.H)),$async$YB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YB,w)},
ZH(d){return this.ceR(d)},
ceQ(){return this.ZH(1)},
ceR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ZH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQW()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amC(u.a.c),$async$ZH)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ZH,w)},
a9g(d,e,f){return this.bSv(d,e,f)},
bSv(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9g=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rS(new B.dHp(u,d,null,e,f),"Uploading\u2026"),$async$a9g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9g,w)},
bwx(){B.h59(!1,new B.dH8(this))
return},
cjH(){this.n(new B.dHA(this))},
av1(){var x=0,w=A.j(y.H),v=this
var $async$av1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bwx()
return A.h(null,w)}})
return A.i($async$av1,w)},
a9c(){var x=0,w=A.j(y.H),v=this
var $async$a9c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rS(new B.dHe(v),"Importing\u2026"),$async$a9c)
case 2:return A.h(null,w)}})
return A.i($async$a9c,w)},
Qr(d){return this.cuD(d)},
cuD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.m_(D.m9)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a9(t,!1).cp(A.eD(new B.dHT(u,d),!1,null,y.H)),$async$Qr)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.m_(D.NR)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a9(t,!1).cp(A.eD(new B.dHU(u,d),!1,null,y.H)),$async$Qr)
case 8:x=1
break
case 7:x=u.bTc(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a9(t,!1).cp(A.eD(new B.dHV(u,d),!1,null,y.H)),$async$Qr)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qr,w)},
bTc(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cqp,C.a.aY(x,w+1).toLowerCase())},
acC(d){return this.c68(d)},
c68(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.m_(D.m9)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a9(t,!1).cp(A.eD(new B.dHq(u,d),!1,null,y.H)),$async$acC)
case 5:x=1
break
case 4:u.n(new B.dHr(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acC,w)},
PR(d){return this.cmw(d)},
cmw(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oD(t,s.c,s.f),$async$PR)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rS(new B.dHM(u,d),"Preparing QR\u2026"),$async$PR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PR,w)},
afh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$afh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dHN(),A.U(t).k("J<1,n>")).fH(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dHO(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PR(r),$async$afh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afh,w)},
afa(d){return this.cm4(d)},
cm4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_8(r)
r=u.c
r.toString
x=3
return A.b(A.c2(C.K,null,new B.dHG(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$afa)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qr(d)
break
case"qr":u.PR(A.a([d],y.r))
break
case"send_my_code":u.c6K(A.a([d],y.r))
break
case"save":u.aew(d)
break
case"delete":u.Hv(d)
break}case 1:return A.h(v,w)}})
return A.i($async$afa,w)},
Vy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dHb(),A.U(t).k("J<1,n>")).fH(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dHc(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oD(t,s.c,s.f),$async$Vy)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rS(new B.dHd(u,r),"Preparing file\u2026"),$async$Vy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vy,w)},
adJ(d){return this.cdm(d)},
cdm(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h5T(d,!1),$async$adJ)
case 3:s=f
r=s==null
q=B.a4W(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adJ,w)},
acI(){var x=0,w=A.j(y.H),v=this,u
var $async$acI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fq7(u,v.a.c),$async$acI)
case 2:return A.h(null,w)}})
return A.i($async$acI,w)},
bww(){B.h59(!1,new B.dH7(this,null))
return},
HK(d,e){return this.c6L(d,e)},
aWz(d){return this.HK(null,d)},
c6K(d){return this.HK(d,null)},
c6L(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a4<1>")
k=A.z(new A.a4(p,new B.dHt(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wp.c2().akw(!0,C.WH,!1),$async$HK)
case 10:r=g
if(r==null||J.cj(r.a)){x=1
break}x=11
return A.b(s.rS(new B.dHu(l,s,r),"Preparing\u2026"),$async$HK)
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
return A.b(B.bzr(p,l,e,s.a.c),$async$HK)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HK,w)},
H1(d){return this.bSi(d)},
bSi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$H1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hk3(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aWz(t),$async$H1)
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
return A.b(u.rS(new B.dHn(u,d),"Receiving video\u2026"),$async$H1)
case 11:x=1
break
case 10:x=12
return A.b(u.rS(new B.dHo(u,d),"Receiving\u2026"),$async$H1)
case 12:case 1:return A.h(v,w)}})
return A.i($async$H1,w)},
D2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$D2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BR()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adJ(t),$async$D2)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.H1(s),$async$D2)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a9(t,!1).cp(A.eD(new B.dHy(u),!1,null,y.N)),$async$D2)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rR(),$async$D2)
case 10:x=1
break
case 9:x=11
return A.b(u.H1(C.a.i(r)),$async$D2)
case 11:case 1:return A.h(v,w)}})
return A.i($async$D2,w)},
aew(d){return this.cii(d)},
cii(d){var x=0,w=A.j(y.H),v=this
var $async$aew=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rS(new B.dHx(v,d),"Saving\u2026"),$async$aew)
case 2:return A.h(null,w)}})
return A.i($async$aew,w)},
Hv(d){return this.bEI(d)},
bEI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kR(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hv)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c35(t),$async$Hv)
case 6:case 5:s=d.a
x=7
return A.b(B.Dm(u.a.c,s),$async$Hv)
case 7:u.r.W(0,s)
x=8
return A.b(u.rR(),$async$Hv)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hv,w)},
afn(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_8(r)
r=u.c
r.toString
x=3
return A.b(A.c2(C.K,null,new B.dHS(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$afn)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acI()
break
case"import":u.a9c()
break}case 1:return A.h(v,w)}})
return A.i($async$afn,w)},
c_g(d){var x=d.c
if(C.a.a_(x,"video/")||d.m_(D.m9))return C.ph
if(C.a.a_(x,"image/")||d.m_(D.NR))return C.t2
if(C.a.t(x,"pdf"))return E.Lv
return D.agC},
B(d){var x,w,v=this,u=null,t=B.a_8(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.F0,u,u,u,new B.dI2(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.byC,u,u,u,v.e?u:v.gc6r(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcjG()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.bt3:E.ah0,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Yt,u,u,u,v.e?u:v.gc_h(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nz,u,u,u,v.e?u:v.gaXE(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bAh,u,u,u,v.e?u:new B.dI3(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lo(new B.dI4(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e1(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.w,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e1(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.w,u,0,A.a([C.aB.j(A.M(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m4(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.awq(C.j6,s,!0,t,w?u:v.gcmx(),u),1)
x.push(new A.C(D.bhx,A.mE(new B.dI5(),A.B(A.a([s,C.aw,A.D(new B.awq(C.uB,"Export",!1,t,w?u:v.gbI6(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ip,u,new A.bl(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9X(t,v.e?u:v.gaXE(),u)
else s=A.jX(!0,u,u,new B.dI6(v,t),s,u,D.bhp,u,u,!1,!1)
x.push(A.D(s,1))
return A.ce(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.awq.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.uk,t,new A.b6(s,C.X),t,t,t)
return A.dq(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.db(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uk,t,new A.b6(s,C.X),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ez(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eS,t,t,t),u.r,v)}}
B.b9X.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.mE(new B.cXj(),new A.C(E.VT,A.v(A.a([A.mE(new B.cXk(),A.p(x,A.V(C.wZ,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a3(C.ax,C.aC,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eE,C.iq,x,new A.bl(0.86,1,w),s),C.dX,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dX,A.dq(C.nz,D.f7c,this.d,A.bk(C.aB,x,x,x,C.c,x,C.VO,x,new A.b6(A.m(16),C.X),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zz,x,new A.bl(0,1,w),s),x,x,x)}}
B.a9Z.prototype={
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
if(!o||i.m_(D.m9))p=D.cWi
else{p=C.a.a_(p,"image/")||i.m_(D.NR)
n=y.O
p=p?A.a([C.cY,C.aB],n):A.a([C.aL.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a3(C.ax,C.aC,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamw()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.m_(D.m9))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.D(A.v(A.a([q,C.av,A.d(C.d.aF(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fD,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c8))
if(!(!o||i.m_(D.m9)))l.push(A.fzZ(C.aB,!1,j,j,j,!1,j,j,new B.cXG(k),j,j,new A.b6(A.m(5),C.X),j,j,!1,u))
x=A.V(C.nw,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c8))
return A.mE(new B.cXH(),new A.C(C.e0,A.aD(!1,C.a1,!0,j,A.aI(!1,r,!0,new A.C(C.Vl,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b6(v,new A.ay(t,s,C.r,-1)),j,j,C.ad),j),C.co,h,new A.cx("docshare_row_"+i.a,y.aw),new A.bl(0,1,y.X),y.i)}}
B.X9.prototype={
S(){return new B.awv()},
gd6(){return this.c}}
B.awv.prototype={
Z(){this.a0()
this.wP()},
p(){B.hki(this.e)
this.a2()},
wP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qP(o.c,o.d),$async$wP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gai(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hkl(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hkk(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cXD(s))
x=1
break}s.n(new B.cXE(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a6(l)
if(s.c==null){x=1
break}s.n(new B.cXF(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wP,w)},
a_C(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qP(t.c,t.d),$async$a_C)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.H(y.q).f.P(D.evZ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.afh(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_C)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_C,w)},
bSb(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kc(u,C.A,v,new B.cXB(w,t),C.fM,C.dq,!0,v,v,v,v)
else if(t!=null&&!C.aG.gai(t))x=A.fF(t,C.A,v,new B.cXC(w),C.fM,C.dq,!0,v,!1,v,v)
else return C.bF
return A.tT(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_8(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Aw,u,u,u,v.gb0m(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.CM
else{q=v.r
if(q!=null)t=new A.C(C.eq,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.eq,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.Aw,D.eSu,v.gb0m(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bSb()}return A.ce(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.X6.prototype={
S(){return new B.aws(A.ag3(),C.bw,C.bw)},
gd6(){return this.c}}
B.aws.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fp(w,A.a2(w).k("fp<1>")).hX(new B.cXg(v))
x.gcI1().hX(new B.cXh(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fp(x,A.a2(x).k("fp<1>"))}if(x==null)x=C.aWw
x.hX(new B.cXi(v))
v.wP()},
wP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qP(p.c,p.d),$async$wP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cX9(s))
x=1
break}x=8
return A.b(s.d.B3(0,new A.a1f(r,s.a.d.c)),$async$wP)
case 8:if(s.c==null){x=1
break}s.n(new B.cXa(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a6(n)
if(s.c==null){x=1
break}s.n(new B.cXb(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wP,w)},
Xy(){var x=0,w=A.j(y.H),v=this,u
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$Xy)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xy)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xy,w)},
aOT(d){var x=d.a
return C.a.aS(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aS(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_8(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.CM
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bu1,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LW,C.n),o,88,o,o,o,o,o,88)
t=A.mg(C.aB,o,o,m,0,new B.cXc(p),C.o.E(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOT(p.w)+" / "+p.aOT(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a3,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.esu,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.x8:C.iM,o,o,o,o,o)
x=A.v(A.a([u,C.ki,t,x,C.d3,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc_k(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.ce(v,w,A.au(new A.C(C.uo,x,o),o,o,o),o,!1,!1,o,o)}}
B.NX.prototype={
S(){return new B.awy()},
gd6(){return this.c}}
B.awy.prototype={
Z(){this.a0()
this.NP()},
NP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fC9(o.c,o.d,new B.cXU(s)),$async$NP)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cXV(s))
x=1
break}s.e=r
q=O.hGH(r)
if(q==null){s.n(new B.cXW(s))
x=1
break}s.d=q
q.aK(0,s.gaWn())
x=8
return A.b(q.hW(0).cJ(0,C.qh),$async$NP)
case 8:if(s.c==null){x=1
break}s.n(new B.cXX(s))
x=9
return A.b(q.p7(0),$async$NP)
case 9:q.rs(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
if(s.c==null){x=1
break}s.n(new B.cXY(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NP,w)},
c4M(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cXZ(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BN(0,x.gaWn())
w=x.d
if(w!=null)w.p()
B.hQi(x.e)
x.a2()},
abf(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWA(u.c,u.d),$async$abf)
case 2:t=e
u=v.c
if(u!=null)u.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$abf,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_8(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.oi,t,t,t,u.gc_e(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i8(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.CM
else{q=u.r
if(q!=null)s=new A.C(C.eq,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afy(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fD(x,new A.am(C.A,t,C.a9,C.q,A.a([new A.zd(s,t),A.aH(t,A.C6(A.p(t,A.V(q?H.x8:C.iM,C.c,t,t,t,48),C.h,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.c4,t,t,t),C.ba,C.a1,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cY0(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.ce(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.Xb.prototype={
S(){return new B.aww(new A.co(null,y.A))}}
B.aww.prototype={
gcuU(){var x,w,v=this.a
if(v.e!==D.P7)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcuB(){var x,w,v=this.a
if(v.e!==D.y0)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcuU()
if(x!=null){v.OS(x)
v.e=A.dD(R.DL,new B.cXQ(v,x))}w=v.gcuB()
if(w!=null){v.OR(w)
v.f=A.dD(C.h7,new B.cXR(v,w))}},
p(){var x=this.e
if(x!=null)x.aa(0)
x=this.f
if(x!=null)x.aa(0)
this.a2()},
OR(d){return this.cbD(d)},
cbD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amK(d),$async$OR)
case 3:t=f
x=4
return A.b(B.c3o(d),$async$OR)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cXI(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OR,w)},
OS(d){return this.cbE(d)},
cbE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fqs(d),$async$OS)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bxp(t),$async$OS)
case 4:if(u.c==null){x=1
break}u.n(new B.cXJ(u))
u.c.H(y.q).f.P(D.aIU)
case 1:return A.h(v,w)}})
return A.i($async$OS,w)},
gbX2(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc_f(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BR()){t=u.c
if(t!=null)t.H(y.q).f.P(D.ez2)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a9(t,!1).cp(A.eD(new B.cXK(),!1,null,y.N)),$async$a_o)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bxp(s),$async$a_o)
case 4:t=u.c
if(t!=null)t.H(y.q).f.P(D.aIU)
case 1:return A.h(v,w)}})
return A.i($async$a_o,w)},
a7c(d){return this.bCr(d)},
bCr(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fE(new A.fx(C.d.aF(t,", "))),$async$a7c)
case 3:if(d.e!=null){t=d.H(y.q).f
t.P(A.b0(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7c,w)},
abd(d){return this.bCb(d)},
bCb(d){var x=0,w=A.j(y.H),v=this
var $async$abd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fE(new A.fx(v.a.c)),$async$abd)
case 2:if(d.e!=null)d.H(y.q).f.P(D.ewr)
return A.h(null,w)}})
return A.i($async$abd,w)},
a_j(d){return this.cik(d)},
cik(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alO(s.d,4),$async$a_j)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ri(r,"ngmy_doc_share_qr.png"),$async$a_j)
case 8:q=f
if(d.e!=null)d.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a6(n)
if(d.e!=null)d.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_j,w)},
gaS_(){var x,w=this.a
if(w.e!==D.G7)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
a79(d){return this.bCk(d)},
bCk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a79=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaS_()
if(t==null){x=1
break}x=3
return A.b(A.fE(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$a79)
case 3:if(d.e!=null)d.H(y.q).f.P(D.ey2)
case 1:return A.h(v,w)}})
return A.i($async$a79,w)},
abe(){var x=0,w=A.j(y.H),v=this,u
var $async$abe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.T6(),$async$abe)
case 2:u=v.c
if(u!=null)A.a9(u,!1).M(null)
return A.h(null,w)}})
return A.i($async$abe,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_8(d),i=m.a,h=i.c
if(h.length>48)h=C.a.am(h,0,44)+"\u2026"
i=i.e
i=i!==D.G7&&i!==D.P7&&i!==D.y0
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.G7||t===D.P7||t===D.y0?l:A.aF(l,l,l,l,C.kG,l,l,l,m.gaUA(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pl(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbX2(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.G7){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lY,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc_f(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aF(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bDT,D.f_X,new B.cXL(m,d),l)],p))}if(m.a.e===D.G7&&m.gaS_()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a3,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bAC,D.eY_,new B.cXM(m,d),l)],p))
if(m.a.e===D.y0){x=(m.w?C.ds:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.a9(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.CP:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lY,l,l,l)],p))}if(m.a.e===D.P7){x=(m.r?C.ds:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.CP:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lY,l,l,l),C.ab,A.dq(D.bws,D.f2Q,m.gciI(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nX(i,A.ce(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b7,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ab,A.B(A.a([A.D(A.ez(M.Av,C.Rp,new B.cXN(m,d),l),1),C.aw,A.D(A.dq(C.xt,C.a4Q,new B.cXO(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a5(1/0,l,A.bL(C.yt,m.gaUA(),A.bk(C.aL,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cXP(),y.C)}}
B.a9X.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ci(A.v(A.a([w,C.aO,A.p(x,A.pl(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ak)
return A.eq(A.a([A.bL(C.C8,new B.cX8(d),x)],u),x,x,C.mq,v,x,x,x,x,D.eRx,x)}}
B.X5.prototype={
S(){return new B.awr(A.yk(C.wl,C.n7,C.td))}}
B.awr.prototype={
p(){this.d.p()
this.a2()},
atG(d){var x,w,v,u,t
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
return A.ce(A.eA(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eYp,x,x,x,1,x,!0),C.x,A.yj(this.d,C.bQ,this.gatF()),x,!1,!1,x,x)}}
B.Xc.prototype={
S(){return new B.awx(A.yk(C.wl,C.n7,C.td))},
gd6(){return this.c}}
B.awx.prototype={
bTe(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
ad4(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ad4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qo("text/plain"),$async$ad4)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.H(y.q).f.P(D.eyX)
x=1
break}s=u.c
if(s!=null)A.a9(s,!1).M(t)
case 1:return A.h(v,w)}})
return A.i($async$ad4,w)},
a7X(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h5T(p,!0),$async$a7X)
case 3:t=e
p=t==null
s=B.a4W(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.H(y.q).f.P(D.evz)
x=1
break}p=u.c
if(p!=null)A.a9(p,!1).M(s)
case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
p(){this.d.p()
this.a2()},
atG(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bTe(t))continue
s.e=!0
x=s.c
x.toString
A.a9(x,!1).M(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahT,v,v,v,w.gbHF(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.YA,v,v,v,w.gc93(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.t0:P.Lg,v,v,v,v,v),v,v,v,new B.cXT(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.f3C,v,v,v,1,v,!0)
u=A.yj(w.d,C.bQ,w.gatF())
x=A.m(20)
return A.ce(t,C.x,new A.am(C.W,v,C.a9,C.q,A.a([u,A.au(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aL,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dVz],s),v),v,!1,!1,v,v)}}
B.b9Y.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.o3
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.o3:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.a1,!0,r,A.aI(!1,w,!0,new A.C(C.VZ,A.B(A.a([u,C.bd,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.eo,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ad)}}
B.a7f.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.MP.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.Vf.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.MO.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DO.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.ce7.prototype={}
B.DN.prototype={}
B.a7e.prototype={}
B.aqZ.prototype={}
B.Vg.prototype={}
var z=a.updateTypes(["aw<~>()","S(ja)","n(ja)","SY(Y)","~()","X8(Y)","I(I,ja)","NX(Y)","~(lI)","cp(DN)","aw<ja?>(@)","SW(Y)","T_(Y)","C(ja)","ja(@)","a1<n,@>(ja)","X7(Y)","SX(Y)","X9(Y)","X6(Y)","Xb(Y)","a9X(Y)","ak<ja>()","Xc(Y)","a9Z(Y,I)","X5(Y)","a1<n,aB>(ja)","cp(Vf)","cp(a7e)","aw<cp>(DN)"])
B.ce3.prototype={
$1(d){var x=this.a
x.x=D.aGg
x.y.K(0,D.aGg)},
$S:69}
B.ce4.prototype={
$1(d){var x=this.a
x.x=D.aGf
x.y.K(0,D.aGf)},
$S:69}
B.ce5.prototype={
$1(d){var x=this.a
x.aep(A.aLR(d.data)).by(new B.ce2(x),y.b)},
$S:69}
B.ce2.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ce6.prototype={
$1(d){},
$S:69}
B.ce9.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hp0(d.channel))},
$S:15}
B.cea.prototype={
$1(d){},
$S:15}
B.ceb.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hHG(w.iceConnectionState)
x.cx=w
if($.fKF())switch(w.a){case 0:x.cy=D.aGl
break
case 1:x.cy=D.aGm
break
case 3:x.cy=D.aGn
break
case 5:x.cy=D.aGj
break
case 6:x.cy=D.aGk
break
case 7:x.cy=D.a2A
break
default:break}},
$S:142}
B.cec.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hHH(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.ced.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hRM(w.signalingState)},
$S:142}
B.cee.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hQ3(w.connectionState)},
$S:142}
B.cef.prototype={
$1(d){},
$S:142}
B.ceg.prototype={
$1(d){},
$S:15}
B.f54.prototype={
$1(d){var x=y.F.a(new A.r9([],[]).oS(d.target.result,!1)),w=C.wm.t(x.objectStoreNames,"blobs")
if(!w)C.wi.Ji(x,"blobs")},
$S:198}
B.fpW.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uQ.f1(this.b)
$.eI.lV()
this.c.$1(d)},
$S:451}
B.fpY.prototype={
$1(d){return this.a.$1(B.hxM(this.b,this.c))},
$S:32}
B.fpX.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fpV.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fqa.prototype={
$1(d){var x=this
return B.fWC(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fqb.prototype={
$1(d){var x=this
return B.fWC(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f6o.prototype={
$1(d){var x=this
return B.c3_(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cXr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cXo.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3_(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cXq.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3_(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cXp.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c3_(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cXt.prototype={
$4(d,e,f,g){var x=null
return A.jv(A.B(A.a([A.aF(x,x,x,x,D.bv5,x,x,x,new B.cXs(d),x,x,x,x,x,x),A.D(A.DB(D.NB,!0,x,C.XF,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.NB,x,g,C.adX,0,e,f)},
$C:"$4",
$R:4,
$S:432}
B.cXs.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.f8n.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.et,y.o).w,t=this.a,s=t?C.hx:C.c,r=A.m(28),q=A.p(v,D.bbW,C.h,v,v,D.aSj,v,v,v,v,D.adO,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.X),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bza,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.zQ,A.v(A.a([o,C.ab,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.X),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ai7,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.B(A.a([A.D(A.dV(C.df,new B.f8l(d),v),1),C.aw,A.D(A.bL(D.eX2,new B.f8m(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JZ,v,v,v,v),v)},
$S:58}
B.f8l.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.f8m.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.H(y.q).f.P(D.ewG)
return}x=w.b.a.a
A.a9(w.c,!1).M(new B.ayY(v,x))},
$S:0}
B.f8R.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.et,y.o).w,u=x.a,t=u?C.hx:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bbL,C.h,w,w,D.aTG,w,w,w,w,D.adO,w,w,1/0),new A.C(C.zQ,A.v(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fH_(u,"Organization name",C.Em,w),C.z,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fH_(u,"Access code",C.mG,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fH_(u,"Member password",N.EW,w),C.z,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bL(D.f3G,new B.f8Q(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JZ,w,w,w,w),w)},
$S:58}
B.f8Q.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.H(y.q).f.P(D.ewL)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a9(v.d,!1).M(new B.aC5(u,x,w))},
$S:0}
B.c2R.prototype={
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
p=C.a.a_(j,"http")?A.cr(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.uG(p,null).cJ(0,C.V_),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cm(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.AA(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c2X.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2Y.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c2Z.prototype={
$1(d){return d.b},
$S:z+2}
B.c2T.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2U.prototype={
$1(d){return d.b},
$S:z+2}
B.c2S.prototype={
$1(d){return A.a_(y.f.a(d),y.N,y.z)},
$S:12}
B.c2V.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c2W.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fq8.prototype={
$1(d){return new B.SW(this.a,null)},
$S:z+11}
B.fq9.prototype={
$1(d){return new B.T_(this.a,this.b,this.c,null)},
$S:z+12}
B.dH0.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dI9.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dIa.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dIb.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dI8(x,d))},
$S:2}
B.dI8.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dIc.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dId.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dIe.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dIf.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dIg.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dIh.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dIk.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.dIi.prototype={
$1(d){var x=this.a
return x.f?null:x.Xx()},
$S:2}
B.dIj.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.m_(D.NR))s=C.t2
else s=C.a.a_(s,"video/")||d.m_(D.m9)?C.ph:D.agC
x=this.b.a
w=y.p
return new A.C(C.kY,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamw(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dH1.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dH2.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c30.prototype={
$2(d,e){return new A.br(J.k(d),J.k(e),y.M)},
$S:95}
B.c31.prototype={
$2(d,e){return new A.br(J.k(d),J.k(e),y.M)},
$S:95}
B.fqJ.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f2h.prototype={
$1(d){return J.k(d)},
$S:17}
B.f6A.prototype={
$1(d){var x=this.b
B.hvQ(C.E9.ga3N(this.a)).by(x.gcxO(x),y.H)},
$S:120}
B.f6B.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f6C.prototype={
$0(){return null},
$S:11}
B.c3f.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f6D.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a_(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aN(p.h(0,"sizeBytes"))
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
B.fay.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f5g.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f5h.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c3k.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m9)},
$S:z+1}
B.fuE.prototype={
$1(d){return new B.X7(this.a,null)},
$S:z+16}
B.cXn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fw()},
$S:8}
B.cXl.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a9(w,!1).M(x)
return null},
$S:2}
B.cXm.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.dI7.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zw()},
$S:14}
B.dHv.prototype={
$0(){var x=J.bAt(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHw.prototype={
$0(){var x=J.bAt(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dH4.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dH3(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAf(this.c)}},
$S:0}
B.dH3.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dH5.prototype={
$0(){var x=J.bAt(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHa.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dH9(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAf(this.c)}},
$S:0}
B.dH9.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHW.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dHX.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dHs.prototype={
$1(d){return new B.SX(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dHp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GN(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.T0(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rR(),$async$$0)
case 5:s=J.a8(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.ZH(s.gJ(t)),$async$$0)
case 8:case 7:r.hM(s.gai(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH8.prototype={
$1(d){this.a.a9g(d,"No files selected.","Added")},
$S:451}
B.dHA.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.J(x,new B.dHz(),A.U(x).k("J<1,n>")))},
$S:0}
B.dHz.prototype={
$1(d){return d.a},
$S:z+2}
B.dHe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wp.c2().cJX(C.WH,!0),$async$$0)
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
return A.b(B.amJ(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cj(l)){o.hM("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rR(),$async$$0)
case 9:o.hM("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dHT.prototype={
$1(d){return new B.NX(this.a.a.c,this.b,null)},
$S:z+7}
B.dHU.prototype={
$1(d){return new B.X9(this.a.a.c,this.b,null)},
$S:z+18}
B.dHV.prototype={
$1(d){return new B.X6(this.a.a.c,this.b,null)},
$S:z+19}
B.dHq.prototype={
$1(d){return new B.NX(this.a.a.c,this.b,null)},
$S:z+7}
B.dHr.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dHM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GN(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4Y(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ceQ(),$async$$0)
case 5:x=6
return A.b(p.rR(),$async$$0)
case 6:r=A.U(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dHI(p),r),new B.dHJ(),r.k("J<ai.E,n>")).bZ(0,new B.dHK())
q=A.z(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a9(t,!1).cp(A.eD(new B.dHL(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.T6(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHI.prototype={
$1(d){var x=this.a,w=C.d.bi(x.d,new B.dHH(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dHH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHJ.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dHK.prototype={
$1(d){return d.length!==0},
$S:3}
B.dHL.prototype={
$1(d){var x=this.a
return new B.Xb(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dHN.prototype={
$1(d){return d.a},
$S:z+2}
B.dHO.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dHG.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.au(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kw,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamw(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.m_(D.m9)?C.t4:C.og
p=!x||p.m_(D.m9)?"Play video":"View"
return A.bU(A.bq(!0,new A.C(C.zL,A.v(A.a([q,o,t,C.ay,B.Xa(!1,u,!1,w,p,new B.dHB(d),v),B.Xa(!1,u,!1,C.j6,"Share via QR",new B.dHC(d),"Letters/numbers QR code"),B.Xa(!1,u,!1,D.XK,"Send to their Code",new B.dHD(d),"Enter someone else's personal code"),B.Xa(!1,u,!1,C.hr,"Download / save",new B.dHE(d),v),C.ar,B.Xa(!1,u,!0,C.e7,"Delete",new B.dHF(d),v)],y.p),C.ag,v,C.e,C.R,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.c1(new A.ay(r,1,C.r,-1),C.X,C.X,C.X),C.ko,v,v,C.n),C.bb)},
$S:685}
B.dHB.prototype={
$0(){A.a9(this.a,!1).M("view")
return null},
$S:0}
B.dHC.prototype={
$0(){A.a9(this.a,!1).M("qr")
return null},
$S:0}
B.dHD.prototype={
$0(){A.a9(this.a,!1).M("send_my_code")
return null},
$S:0}
B.dHE.prototype={
$0(){A.a9(this.a,!1).M("save")
return null},
$S:0}
B.dHF.prototype={
$0(){A.a9(this.a,!1).M("delete")
return null},
$S:0}
B.dHb.prototype={
$1(d){return d.a},
$S:z+2}
B.dHc.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dHd.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5_(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Fa(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oC(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH7.prototype={
$1(d){var x=this.a
x.rS(new B.dH6(x,d,this.b),"Preparing\u2026")},
$S:451}
B.dH6.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.T0(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cj(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bzr(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHt.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dHu.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fCc(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.F7(new B.dHj(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ch(null,null,!1,null,new B.dHk(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dHl(s))
case 5:x=8
return A.b(r.b.i0(0,C.DH,new B.dHm()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gai(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rR(),$async$$0)
case 9:s.hM("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHj.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dHg(x,d,e))},
$S:131}
B.dHg.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHk.prototype={
$1(d){return new B.a9X(this.a.a,null)},
$S:z+21}
B.dHl.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dHm.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dHo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.H_(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4O(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aWz(B.H_(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amJ(new B.dHh(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cj(r)){if(B.fCb(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rR(),$async$$0)
case 10:o=J.cA(r)
p=o.eE(r,new B.dHi()).gJ(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHh.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dHf(x,d,e))},
$S:131}
B.dHf.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHi.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m9)},
$S:z+1}
B.dHy.prototype={
$1(d){return new B.Xc(this.a.a.c,null)},
$S:z+23}
B.dHx.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWA(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHS.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bU(A.bq(!0,new A.C(C.zL,A.v(A.a([A.au(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kw,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.Xa(!0,w,!1,C.mG,"My Code",new B.dHP(d),"Your personal code & QR \u2014 others send docs to you"),B.Xa(!1,w,!1,D.XK,"Send to their Code",new B.dHQ(this.a,d),"Enter someone else's 5-digit code + letter"),B.Xa(!1,w,!1,S.xi,"Import backup",new B.dHR(d),".ngmydoc file from another device")],y.p),C.ag,x,C.e,C.R,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.c1(new A.ay(t,1,C.r,-1),C.X,C.X,C.X),C.ko,x,x,C.n),C.bb)},
$S:685}
B.dHP.prototype={
$0(){A.a9(this.a,!1).M("my_code")
return null},
$S:0}
B.dHQ.prototype={
$0(){A.a9(this.b,!1).M(null)
this.a.bww()},
$S:0}
B.dHR.prototype={
$0(){A.a9(this.a,!1).M("import")
return null},
$S:0}
B.dI4.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.H8(D.NB,x,C.XF,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cL(C.d.gL(D.NB).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dI2.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.dI3.prototype={
$0(){this.a.afn()
return null},
$S:0}
B.dI5.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*10)),e)},
$S:107}
B.dI6.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.a9Z(e,w,v,this.b,x.e,x.c_g(w),new B.dHZ(x,w),new B.dI_(x,v,w),new B.dI0(x,w),new B.dI1(x,w),null)},
$S:z+24}
B.dHZ.prototype={
$0(){this.a.acC(this.b)
return null},
$S:0}
B.dI_.prototype={
$0(){var x=this.a
return x.n(new B.dHY(x,this.b,this.c))},
$S:0}
B.dHY.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dI0.prototype={
$0(){this.a.Mk(this.b)
return null},
$S:0}
B.dI1.prototype={
$0(){this.a.afa(this.b)
return null},
$S:0}
B.cXj.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*18)),e)},
$S:107}
B.cXk.prototype={
$3(d,e,f){return A.e5(C.A,f,e,null,null)},
$S:134}
B.cXH.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.cXG.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cXD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cXE.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cXF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cXB.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gai(w))return A.fF(w,C.A,x,new B.cXz(this.a),C.fM,C.dq,!0,x,!1,x,x)
$.aT.x1$.push(new B.cXA(this.a))
return C.bF},
$S:140}
B.cXz.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXx(this.a))
return C.bF},
$S:186}
B.cXx.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXu(x))},
$S:8}
B.cXu.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXw(x))},
$S:8}
B.cXw.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXC.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXy(this.a))
return C.bF},
$S:186}
B.cXy.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXv(x))},
$S:8}
B.cXv.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXg.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cXf(x,d))},
$S:1737}
B.cXf.prototype={
$0(){return this.a.f=this.b===C.tA},
$S:0}
B.cXh.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cXe(x,d))},
$S:8}
B.cXe.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cXi.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cXd(x,d))},
$S:8}
B.cXd.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cX9.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cXa.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cXb.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cXc.prototype={
$1(d){return this.a.d.Lm(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cXU.prototype={
$0(){var x=this.a.a
return B.qP(x.c,x.d)},
$S:1738}
B.cXV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cXW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cXX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cXY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cXZ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cY0.prototype={
$0(){var x=this.a
x.n(new B.cY_(x))},
$S:0}
B.cY_.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.p7(0)},
$S:0}
B.cXQ.prototype={
$1(d){return this.a.OS(this.b)},
$S:14}
B.cXR.prototype={
$1(d){return this.a.OR(this.b)},
$S:14}
B.cXI.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cXJ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cXK.prototype={
$1(d){return D.fgY},
$S:z+25}
B.cXP.prototype={
$2(d,e){if(d)B.T6()},
$S:118}
B.cXL.prototype={
$0(){return this.a.a7c(this.b)},
$S:0}
B.cXM.prototype={
$0(){return this.a.a79(this.b)},
$S:0}
B.cXN.prototype={
$0(){return this.a.abd(this.b)},
$S:0}
B.cXO.prototype={
$0(){return this.a.a_j(this.b)},
$S:0}
B.cX8.prototype={
$0(){A.a9(this.a,!1).M(null)
return null},
$S:0}
B.cXT.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pb(),$async$$0)
case 2:u.n(new B.cXS(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cXS.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c3m.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m9)},
$S:z+1}
B.c3n.prototype={
$1(d){var x=d.b,w=A.ae("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c3l.prototype={
$2(d,e){return this.be9(d,e)},
be9(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.T7(u.c,A.E(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1739}
B.fab.prototype={
$1(d){if(d===D.a2z&&(this.a.a.a&30)===0)this.a.fD(0)},
$S:z+27}
B.fac.prototype={
$0(){},
$S:11}
B.faG.prototype={
bfI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f_r(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fRQ(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfI(d,e)},
$S:521}
B.faF.prototype={
$1(d){var x=this
d.b=new B.faE(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.faE.prototype={
$1(d){return this.bfH(d)},
bfH(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWB(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.K(0,m)
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
return A.b(B.f_r(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a4X(m),$async$$1)
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
x(v=B.awu.prototype,"gc64","Ot",0)
x(v,"gc6V","HL",0)
x(v,"gc6q","wY",0)
x(v=B.aAk.prototype,"gc_a","abb",0)
x(v,"gc_b","Xw",0)
x(v,"gcl3","aeS",0)
x(v=B.aAn.prototype,"gc_c","Xx",0)
x(v,"gcl4","a_D",0)
x(B.aAl.prototype,"gc_d","abc",0)
x(B.awt.prototype,"gc_i","c_j",4)
x(v=B.aAm.prototype,"gc6r","YB",0)
x(v,"gcjG","cjH",4)
x(v,"gaXE","av1",0)
x(v,"gcmx","afh",0)
x(v,"gbI6","Vy",0)
x(v,"gc_h","D2",0)
x(B.awv.prototype,"gb0m","a_C",0)
x(B.aws.prototype,"gc_k","Xy",0)
x(v=B.awy.prototype,"gaWn","c4M",4)
x(v,"gc_e","abf",0)
x(v=B.aww.prototype,"gciI","a_o",0)
x(v,"gaUA","abe",0)
w(B.awr.prototype,"gatF","atG",8)
x(v=B.awx.prototype,"gc93","ad4",0)
x(v,"gbHF","a7X",0)
w(v,"gatF","atG",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.ce7,B.a7e,B.aqZ,B.ayY,B.aC5,B.ja,B.a9F,B.brx,B.DN,B.Vg])
w(B.ce8,B.ce7)
w(B.b0H,B.a7e)
x(A.i3,[B.ce3,B.ce4,B.ce5,B.ce2,B.ce6,B.ce9,B.cea,B.ceb,B.cec,B.ced,B.cee,B.cef,B.ceg,B.f54,B.fpW,B.fpY,B.fpX,B.fqa,B.fqb,B.f6o,B.cXo,B.cXq,B.cXp,B.cXt,B.f8n,B.f8R,B.c2R,B.c2Y,B.c2Z,B.c2U,B.c2S,B.c2V,B.c2W,B.fq8,B.fq9,B.dIb,B.dIk,B.dIi,B.dIj,B.f2h,B.f6A,B.f6B,B.c3f,B.f6D,B.fay,B.f5g,B.f5h,B.c3k,B.fuE,B.cXn,B.cXl,B.dI7,B.dH3,B.dH9,B.dHs,B.dH8,B.dHz,B.dHT,B.dHU,B.dHV,B.dHq,B.dHI,B.dHH,B.dHJ,B.dHK,B.dHL,B.dHN,B.dHO,B.dHG,B.dHb,B.dHc,B.dH7,B.dHt,B.dHk,B.dHi,B.dHy,B.dHS,B.dI4,B.dI5,B.cXj,B.cXk,B.cXH,B.cXG,B.cXB,B.cXz,B.cXx,B.cXA,B.cXC,B.cXy,B.cXg,B.cXh,B.cXi,B.cXc,B.cXQ,B.cXR,B.cXK,B.c3m,B.c3n,B.fab,B.faF,B.faE])
w(B.b0I,B.aqZ)
x(A.jm,[B.fpV,B.cXr,B.cXs,B.f8l,B.f8m,B.f8Q,B.dH0,B.dI9,B.dIa,B.dI8,B.dIc,B.dId,B.dIe,B.dIf,B.dIg,B.dIh,B.dH1,B.dH2,B.f6C,B.cXm,B.dHv,B.dHw,B.dH4,B.dH5,B.dHa,B.dHW,B.dHX,B.dHp,B.dHA,B.dHe,B.dHr,B.dHM,B.dHB,B.dHC,B.dHD,B.dHE,B.dHF,B.dHd,B.dH6,B.dHu,B.dHn,B.dHg,B.dHl,B.dHm,B.dHo,B.dHf,B.dHx,B.dHP,B.dHQ,B.dHR,B.dI2,B.dI3,B.dHZ,B.dI_,B.dHY,B.dI0,B.dI1,B.cXD,B.cXE,B.cXF,B.cXu,B.cXw,B.cXv,B.cXf,B.cXe,B.cXd,B.cX9,B.cXa,B.cXb,B.cXU,B.cXV,B.cXW,B.cXX,B.cXY,B.cXZ,B.cY0,B.cY_,B.cXI,B.cXJ,B.cXL,B.cXM,B.cXN,B.cXO,B.cX8,B.cXT,B.cXS,B.fac])
x(A.mi,[B.a9Y,B.LN,B.a7f,B.MP,B.Vf,B.MO,B.DO])
x(A.af,[B.X8,B.SW,B.T_,B.SX,B.X7,B.SY,B.X9,B.X6,B.NX,B.Xb,B.X5,B.Xc])
x(A.ag,[B.awu,B.aAk,B.aAn,B.aAl,B.awt,B.aAm,B.awv,B.aws,B.awy,B.aww,B.awr,B.awx])
x(A.at,[B.aap,B.awq,B.b9X,B.a9Z,B.a9X,B.b9Y])
x(A.kA,[B.c2X,B.c2T,B.c30,B.c31,B.fqJ,B.dHj,B.dHh,B.dI6,B.cXP,B.c3l,B.faG])
x(A.iJ,[B.bff,B.brc])})()
A.kh(b.typeUniverse,JSON.parse('{"b0H":{"a7e":[]},"b0I":{"aqZ":[]},"X8":{"af":[],"r":[]},"awu":{"ag":["X8"]},"aap":{"at":[],"r":[]},"SW":{"af":[],"r":[]},"T_":{"af":[],"r":[]},"aAk":{"ag":["SW"]},"aAn":{"ag":["T_"]},"bff":{"iJ":[]},"SX":{"af":[],"r":[]},"aAl":{"ag":["SX"]},"X7":{"af":[],"r":[]},"SY":{"af":[],"r":[]},"a9Z":{"at":[],"r":[]},"X9":{"af":[],"r":[]},"X6":{"af":[],"r":[]},"NX":{"af":[],"r":[]},"Xb":{"af":[],"r":[]},"a9X":{"at":[],"r":[]},"X5":{"af":[],"r":[]},"Xc":{"af":[],"r":[]},"awt":{"ag":["X7"]},"brc":{"iJ":[]},"aAm":{"ag":["SY"]},"awq":{"at":[],"r":[]},"b9X":{"at":[],"r":[]},"awv":{"ag":["X9"]},"aws":{"ag":["X6"]},"awy":{"ag":["NX"]},"aww":{"ag":["Xb"]},"awr":{"ag":["X5"]},"awx":{"ag":["Xc"]},"b9Y":{"at":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tB"),k:x("Ki()"),m:x("bs<n,n>"),F:x("qr"),g:x("aw<ja?>"),x:x("aw<~>"),V:x("P<ab>"),O:x("P<x>"),W:x("P<bf>"),Y:x("P<a1<n,S>>"),t:x("P<a1<n,@>>"),r:x("P<ja>"),w:x("P<+file,name(lj,n)>"),u:x("P<cL>"),s:x("P<n>"),E:x("P<iJ>"),a:x("P<dz>"),p:x("P<r>"),Z:x("P<I>"),G:x("bf"),A:x("co<ag<af>>"),n:x("ak<ja>"),j:x("ak<@>"),I:x("ak<I>"),M:x("br<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iE"),e:x("hVB"),af:x("D4"),U:x("ja"),b:x("cp"),C:x("aB"),aK:x("vq"),ab:x("DN"),br:x("aqZ"),v:x("Vg"),N:x("n"),X:x("bl<O>"),Q:x("lu"),D:x("dz"),aw:x("cx<n>"),cd:x("a4<a1<n,@>>"),c7:x("r"),ch:x("bP<ak<ja>>"),aW:x("bP<dz?>"),aY:x("bP<~>"),cx:x("a9Y"),b1:x("be<ak<ja>>"),cf:x("be<dz?>"),d4:x("be<~>"),c4:x("ayY"),bG:x("aC5"),q:x("mG"),B:x("oT<DN>"),c6:x("oT<a7f>"),y:x("S"),i:x("O"),z:x("@"),S:x("I"),aQ:x("bf?"),_:x("ak<ja>?"),aL:x("ak<@>?"),h:x("a1<n,@>?"),l:x("ja?"),R:x("aB?"),c:x("Vg?"),d:x("+answerQr,transfer(n,aw<ak<ja>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,LN,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9F?"),bk:x("ayY?"),ag:x("aC5?"),dd:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aQG=new A.ay(C.aB,2,C.r,-1)
D.bHp=new A.a3(C.a4,C.a7,C.w,C.ZE,null,null)
D.aSj=new A.o(null,null,null,C.mn,null,D.bHp,C.n)
D.aTG=new A.o(null,null,null,C.mn,null,E.F7,C.n)
D.a8i=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a9g=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9Y=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.abi=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eSo=new A.w("Your team portal",null,C.dO,null,null,null,null,null,null,null,null,null)
D.f4x=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.Ho,null,null,null,null,null,null,null,null,null)
D.cP6=x([D.eSo,C.ar,D.f4x],y.p)
D.bbD=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.cP6,null)
D.f8t=new A.w("Create your organization",null,C.hh,null,null,null,null,null,null,null,null,null)
D.eWm=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Ho,null,null,null,null,null,null,null,null,null)
D.d1Y=x([D.f8t,C.ar,D.eWm],y.p)
D.bbL=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d1Y,null)
D.f54=new A.w("Team Member sign-in",null,C.hh,null,null,null,null,null,null,null,null,null)
D.eZQ=new A.w("Enter the access code and password from your organization.",null,G.Ho,null,null,null,null,null,null,null,null,null)
D.d05=x([D.f54,C.ar,D.eZQ],y.p)
D.bbW=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d05,null)
D.bhp=new A.N(16,10,16,28)
D.bhx=new A.N(16,14,16,4)
D.biL=new A.N(20,0,20,16)
D.bjg=new A.N(20,8,20,16)
D.adO=new A.N(24,22,24,20)
D.XK=new A.a0(63394,"MaterialIcons",!1)
D.agC=new A.a0(63515,"MaterialIcons",!1)
D.bt3=new A.a0(983813,"MaterialIcons",!1)
D.bqk=new A.a0(62867,"MaterialIcons",!1)
D.bu1=new A.ad(D.bqk,44,C.c,null,null,null)
D.bv5=new A.ad(C.rX,null,C.af,null,null,null)
D.bws=new A.ad(C.iN,18,null,null,null,null)
D.by6=new A.ad(D.XK,26,C.c,null,null,null)
D.byC=new A.ad(C.EM,null,null,null,null,null)
D.bza=new A.ad(C.xk,null,null,null,null,null)
D.bAh=new A.ad(W.Lt,null,null,null,null,null)
D.bAC=new A.ad(C.hb,16,null,null,null,null)
D.bDT=new A.ad(C.qr,16,null,null,null,null)
D.buj=new A.ad(C.mG,null,null,null,null,null)
D.bEK=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.buj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bzI=new A.ad(C.Em,null,null,null,null,null)
D.bEO=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bzI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.buD=new A.ad(N.EW,null,null,null,null,null)
D.bEY=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.buD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cqV=x([C.f4,C.aW,C.aB],y.O)
D.bJj=new A.a3(C.ax,C.aC,C.w,D.cqV,null,null)
D.cqp=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.NB=x([C.f4,C.aB],y.O)
D.NR=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m9=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cWi=x([C.oQ,C.aB],y.O)
D.dL5={iceServers:0}
D.aB7={urls:0}
D.d5x=new A.bs(D.aB7,["stun:stun.l.google.com:19302"],y.m)
D.d5w=new A.bs(D.aB7,["stun:stun1.l.google.com:19302"],y.m)
D.cG9=x([D.d5x,D.d5w],A.az("P<a1<n,n>>"))
D.d4S=new A.bs(D.dL5,[D.cG9],A.az("bs<n,@>"))
D.G7=new B.LN(0,"lanDirect")
D.P6=new B.LN(1,"cloudStash")
D.dgk=new B.LN(2,"inlineInstant")
D.P7=new B.LN(3,"webrtcLink")
D.y0=new B.LN(4,"videoCloud")
D.f4w=new A.w("Receive file",null,C.mX,null,null,null,null,null,null,null,null,null)
D.cgC=x([E.aig,C.aa,D.f4w],y.p)
D.eoV=new A.cC(C.b0,C.b7,C.j,C.m,null,C.p,null,0,D.cgC,null)
D.dQt=new A.C(C.cc,D.eoV,null)
D.eJP=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a_f,null,null,null)
D.eSU=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eJP,null,C.L,null,null,null,null,null,null,null)
D.dPP=new A.C(C.zT,D.eSU,null)
D.aXG=new A.cw(C.A,null,null,D.dPP,null)
D.dVz=new A.cG(0,null,0,28,null,null,D.aXG,null)
D.dVR=new B.a7f(0,"RTCDataChannelConnecting")
D.aGf=new B.a7f(1,"RTCDataChannelOpen")
D.aGg=new B.a7f(3,"RTCDataChannelClosed")
D.dVS=new B.DO(0,"RTCIceConnectionStateNew")
D.dVT=new B.DO(1,"RTCIceConnectionStateChecking")
D.dVU=new B.DO(2,"RTCIceConnectionStateCompleted")
D.dVV=new B.DO(3,"RTCIceConnectionStateConnected")
D.dVW=new B.DO(4,"RTCIceConnectionStateCount")
D.dVX=new B.DO(5,"RTCIceConnectionStateFailed")
D.dVY=new B.DO(6,"RTCIceConnectionStateDisconnected")
D.aGh=new B.DO(7,"RTCIceConnectionStateClosed")
D.aGi=new B.Vf(0,"RTCIceGatheringStateNew")
D.dVZ=new B.Vf(1,"RTCIceGatheringStateGathering")
D.a2z=new B.Vf(2,"RTCIceGatheringStateComplete")
D.a2A=new B.MO(0,"RTCPeerConnectionStateClosed")
D.aGj=new B.MO(1,"RTCPeerConnectionStateFailed")
D.aGk=new B.MO(2,"RTCPeerConnectionStateDisconnected")
D.aGl=new B.MO(3,"RTCPeerConnectionStateNew")
D.aGm=new B.MO(4,"RTCPeerConnectionStateConnecting")
D.aGn=new B.MO(5,"RTCPeerConnectionStateConnected")
D.dW_=new B.MP(0,"RTCSignalingStateStable")
D.dW0=new B.MP(1,"RTCSignalingStateHaveLocalOffer")
D.dW1=new B.MP(2,"RTCSignalingStateHaveRemoteOffer")
D.dW2=new B.MP(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dW3=new B.MP(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aGo=new B.MP(5,"RTCSignalingStateClosed")
D.esu=new A.as(160,48)
D.aYO=new A.fd(2,null,null,null,null,C.aB,null,null,null,null)
D.etY=new A.a5(16,16,D.aYO,null)
D.eVO=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.evp=new A.b_(D.eVO,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f1B=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.evs=new A.b_(D.f1B,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f9t=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.evz=new A.b_(D.f9t,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVr=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.evZ=new A.b_(D.eVr,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f5d=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aIU=new A.b_(D.f5d,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f6u=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ewr=new A.b_(D.f6u,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.faM=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ewG=new A.b_(D.faM,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f8V=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ewL=new A.b_(D.f8V,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.fa3=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.exw=new A.b_(D.fa3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eU9=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ey2=new A.b_(D.eU9,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3i=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eyn=new A.b_(D.f3i,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXQ=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eyT=new A.b_(D.eXQ,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.faS=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eyX=new A.b_(D.faS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eUp=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ez2=new A.b_(D.eUp,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eTd=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ezh=new A.b_(D.eTd,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQl=new A.w("NGMY DOC SHARE",null,C.aK8,null,null,null,null,null,null,null,null,null)
D.eRx=new A.w("Show this to sender",null,C.kk,null,null,null,null,null,null,null,null,null)
D.eSu=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eWJ=new A.w("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eX2=new A.w("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.eY_=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eYp=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f_X=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.f2x=new A.w("Send to their Doc Share",null,C.mW,null,null,null,null,null,null,null,null,null)
D.f2Q=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f37=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.f3C=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.f3G=new A.w("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.f42=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eS,null,null,null,null,null,null,null,null,null)
D.f6V=new A.w("Share files & videos\nwith a scan.",null,C.aK9,null,null,null,null,null,null,null,null,null)
D.f7c=new A.w("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fgY=new B.X5(null)
D.a5t=new B.a9Y(0,"docShare")
D.a5u=new B.a9Y(1,"gate")
D.RT=new B.a9Y(2,"gateNoIndividual")})();(function staticFields(){$.aKH=null
$.eYh=function(){var x=y.N
return A.T(x,x)}()
$.EV=A.T(y.N,y.D)
$.adU=A.T(y.N,A.az("lj"))
$.Pc=A.T(y.N,y.D)
$.eYO=A.T(y.N,A.az("a9F"))
$.c3e=A.T(y.S,A.az("brx"))
$.fRP=1
$.hDz=null
$.hDy=null
$.hvh=null
$.fHb=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hW5","h7H",()=>new B.ce8())
x($,"hU0","fKF",()=>C.a.t(A.bp(A.bp(A.bp(A.Ft(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["kZA8ElcU8cQpaiOE3j8dCy5DYRs="]=a.current})($__dart_deferred_initializers__);