((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={ce0:function ce0(){},
hoI(d){var x=null,w=new B.b0D(d,D.dVF,new A.oT(x,x,y.c6),new A.oT(x,x,y.B))
w.bsn(d)
return w},
b0D:function b0D(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cdW:function cdW(d){this.a=d},
cdX:function cdX(d){this.a=d},
cdY:function cdY(d){this.a=d},
cdV:function cdV(d){this.a=d},
cdZ:function cdZ(d){this.a=d},
hoJ(d,e){var x=y.N
x=new B.b0E(d,e,A.T(x,y.e),A.T(x,y.z))
x.bso(d,e)
return x},
b0E:function b0E(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ce1:function ce1(d){this.a=d},
ce2:function ce2(d){this.a=d},
ce3:function ce3(d){this.a=d},
ce4:function ce4(d){this.a=d},
ce5:function ce5(d){this.a=d},
ce6:function ce6(d){this.a=d},
ce7:function ce7(d){this.a=d},
ce8:function ce8(d){this.a=d},
fGz(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.R(A.ba("IndexedDB not available"))
return C.xt.Ko(x,"ngmy_doc_share_v1",new B.f4O(),1)},
hvc(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cm(d))
if(y.J.b(d))return new Uint8Array(A.cm(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cm(A.B9(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cw.aG(d)
return x}catch(w){return v}return v},
Po(d,e){return B.hJY(d,e)},
hJY(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Po=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKD
x=7
return A.b(o==null?$.aKD=B.fGz():o,$async$Po)
case 7:s=g
r=new Uint8Array(A.cm(e))
q=J.mk(s,"blobs","readwrite")
C.iz.lM(J.mi(q,"blobs"),r,d)
x=8
return A.b(J.p0(q),$async$Po)
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
return A.i($async$Po,w)},
Pn(d){return B.hJX(d)},
hJX(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKD
x=7
return A.b(o==null?$.aKD=B.fGz():o,$async$Pn)
case 7:s=f
r=J.mk(s,"blobs","readonly")
x=8
return A.b(C.iz.yz(J.mi(r,"blobs"),d),$async$Pn)
case 8:q=f
x=9
return A.b(J.p0(r),$async$Pn)
case 9:o=B.hvc(q)
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
return A.i($async$Pn,w)},
aex(d){return B.hJW(d)},
hJW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aex=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKD
x=7
return A.b(p==null?$.aKD=B.fGz():p,$async$aex)
case 7:s=f
r=J.mk(s,"blobs","readwrite")
C.iz.Eu(J.mi(r,"blobs"),d)
x=8
return A.b(J.p0(r),$async$aex)
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
return A.i($async$aex,w)},
f4O:function f4O(){},
hxq(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkN(w,v))}return u},
h4R(d,e){var x,w={},v=A.aSL("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fpD(w,v,e)
C.uS.xs(v,"change",new B.fpF(w,v,!1))
C.uS.xs(v,"cancel",new B.fpE(w))
$.eI.lV()
v.click()
A.bN(C.ac0,new B.fpC(w),y.H)},
fpD:function fpD(d,e,f){this.a=d
this.b=e
this.c=f},
fpF:function fpF(d,e,f){this.a=d
this.b=e
this.c=f},
fpE:function fpE(d){this.a=d},
fpC:function fpC(d){this.a=d},
BV(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BV=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRO()?3:4
break
case 3:x=5
return A.b(B.h05(e,d,s,!0,!1,f,g,h,!1,i),$async$BV)
case 5:x=1
break
case 4:x=6
return A.b(B.P2(d,s,f,g,h,i),$async$BV)
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
return A.b(B.H_(s,d),$async$BV)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f0f(s,d),$async$BV)
case 14:x=12
return A.b(r.h05(q,p,o,n,m,l,k,j,a1,i),$async$BV)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cp(A.eD(new B.fpS(s,i,d,f,g,h),!1,null,y.H)),$async$BV)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cp(A.eD(new B.fpT(s,i,d,f,g,h),!1,null,y.H)),$async$BV)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BV,w)},
P2(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$P2=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWp(e),$async$P2)
case 3:u=k
x=4
return A.b(B.amy(d,e,!1),$async$P2)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.H_(e,d),$async$P2)
case 7:if(k){v=D.a5s
x=1
break}x=8
return A.b(B.SY(e),$async$P2)
case 8:v=t?D.RO:D.a5t
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aWn(d,e)){v=D.a5s
x=1
break}x=11
return A.b(B.SY(e),$async$P2)
case 11:v=t?D.RO:D.a5t
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fBP(d,e)){v=D.a5s
x=1
break}x=14
return A.b(B.SY(e),$async$P2)
case 14:v=D.RO
x=1
break
case 13:v=t?D.RO:D.a5t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P2,w)},
f0f(d,e){var x=0,w=A.j(y.y),v
var $async$f0f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aWn(e,d)){v=!1
x=1
break}x=3
return A.b(B.aWp(d),$async$f0f)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f0f,w)},
h05(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cp(A.eD(new B.f67(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fWj(d,e,f,g,h,i,j){return new B.X6(e,j,d,g,h,i,f,null)},
f83(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f83=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
x=3
return A.b(A.c2(C.K,null,new B.f86(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f83)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f83,w)},
f8y(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f8y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
r=new A.ap(C.as,u)
x=3
return A.b(A.c2(C.K,null,new B.f8A(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f8y)
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
return A.i($async$f8y,w)},
fGH(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b3(4,A.m(16),C.X),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fic(d,e){var x=0,w=A.j(y.H),v
var $async$fic=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SY(e),$async$fic)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fic,w)},
fpS:function fpS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fpT:function fpT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9X:function a9X(d,e){this.a=d
this.b=e},
f67:function f67(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
X6:function X6(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awr:function awr(){this.c=this.a=this.d=null},
cXi:function cXi(d,e){this.a=d
this.b=e},
cXf:function cXf(d){this.a=d},
cXh:function cXh(d){this.a=d},
cXg:function cXg(d){this.a=d},
cXk:function cXk(){},
cXj:function cXj(d){this.a=d},
aao:function aao(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayV:function ayV(d,e){this.a=d
this.b=e},
aC2:function aC2(d,e,f){this.a=d
this.b=e
this.c=f},
f86:function f86(d,e,f){this.a=d
this.b=e
this.c=f},
f84:function f84(d){this.a=d},
f85:function f85(d,e,f){this.a=d
this.b=e
this.c=f},
f8A:function f8A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8z:function f8z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c2I(d,e,f,g,h){return B.hjF(d,e,f,g,h)},
hjF(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c2I=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iD(r.di(d,new B.c2J(s,e,h,g,f,q),y.g),y.l),$async$c2I)
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
return A.i($async$c2I,w)},
aWk(d,e,f,g,h){return B.hjG(d,e,f,g,h)},
hjG(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aWk=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arM("GET",d)
o=A.fym()
if(o==null)o=new A.Kc(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cJ(0,C.DF),$async$aWk)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Be(),$async$aWk)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Az(q,h,o,e,f,"Received via QR")
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
return A.i($async$aWk,w)},
aWj(d){return B.hjD(d)},
hjD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aWj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uC(d,null).cJ(0,C.nm),$async$aWj)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aE(0,A.ir(A.iq(p.e)).c6(0,p.w),null)
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
return A.i($async$aWj,w)},
c2H(d){return B.hjE(d)},
hjE(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c2H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uC(d,null).cJ(0,C.p1),$async$c2H)
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
return A.i($async$c2H,w)},
c2J:function c2J(d,e,f,g,h,i){var _=this
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
GY(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ae("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hjL(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GY(C.a.aX(u,v.length))}return null},
hjM(d){var x=B.GY(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hjH(){var x,w=$.oZ(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fN(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a4K(d){return B.hjI(d)},
hjI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bE),$async$a4K)
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
return A.i($async$a4K,w)},
a4L(d,e){return B.hjJ(d,e)},
hjJ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4L=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ht(d,e,!1,!1,C.cz,null),$async$a4L)
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
return A.i($async$a4L,w)},
Ay(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ay=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ax(),$async$Ay)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GY(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4M(r),$async$Ay)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4K("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ay)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GY(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ay)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hjH()
x=14
return A.b(B.a4M(m),$async$Ay)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a4().ab()
x=15
return A.b(B.a4L("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ay)
case 15:k=f
x=16
return A.b(B.a4L("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ay)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ay)
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
return A.i($async$Ay,w)},
a4M(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GY(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4K("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4M)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4M,w)},
a4N(d,e,f,g){return B.hjN(d,e,f,g)},
hjN(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4N=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gai(d)){v=!1
x=1
break}r=B.GY(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4M(r),$async$a4N)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.c2P())>1048576||g.ba(d,new B.c2Q())){v=B.Dj(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a4Y("myCode",d,a0),$async$a4N)
case 4:u=a3
try{t=C.R.aE(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cj(s)||J.aa(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Dj(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWs(u,g.gJ(d),a0),$async$a4N)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oZ().aB(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.di(d,new B.c2R(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aWl(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],i,y.z),q),$async$a4N)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4N,w)},
Dj(d,e,f,g,h){return B.hjK(d,e,f,g,h)},
hjK(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dj=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$Dj)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cA(a6)
k=l.cG(a6,0,new B.c2L())
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
a1=B.H1(a9,q)
a0=new A.IO(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Dj)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.os(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a8e(a1.a,a4,"media",a1.d,a2).w6(m,n,new A.CF(!0,q.c)),$async$Dj)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$Dj)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aN2(r),$async$Dj)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.di(a6,new B.c2M(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aWl(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],e,d),a8),$async$Dj)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aN2(r),$async$Dj)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dj,w)},
aWl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aWl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4K(t),$async$aWl)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c2K(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4L(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWl,w)},
LJ(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$LJ=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4K("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$LJ)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cj(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aWm(k,a0),$async$LJ)
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
return A.b(B.aWr(h),$async$LJ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.T4(g,a0),$async$LJ)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.z(new A.a4(r,new B.c2N(),q),n)
d=A.z(new A.a4(r,new B.c2O(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.df(d,0,A.dK(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a4L("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$LJ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$LJ,w)},
aWm(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aWm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cj(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
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
o=A.aR(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hNJ(k,j)
C.d.v(s,i)
x=5
return A.b(B.BT(l,m,"Received via My Code",t,e,i),$async$aWm)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aN2(s),$async$aWm)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWm,w)},
c2P:function c2P(){},
c2Q:function c2Q(){},
c2R:function c2R(){},
c2L:function c2L(){},
c2M:function c2M(){},
c2K:function c2K(){},
c2N:function c2N(){},
c2O:function c2O(){},
fpP(d,e){var x=0,w=A.j(y.H)
var $async$fpP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cp(A.eD(new B.fpQ(e),!1,null,y.H)),$async$fpP)
case 2:return A.h(null,w)}})
return A.i($async$fpP,w)},
bzj(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bzj=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cj(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cp(A.eD(new B.fpR(g,e,f),!1,null,y.y)),$async$bzj)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzj,w)},
fpQ:function fpQ(d){this.a=d},
fpR:function fpR(d,e,f){this.a=d
this.b=e
this.c=f},
SV:function SV(d,e){this.c=d
this.a=e},
aAh:function aAh(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dGS:function dGS(d,e){this.a=d
this.b=e},
SZ:function SZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAk:function aAk(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dI0:function dI0(d){this.a=d},
dI1:function dI1(d){this.a=d},
dI2:function dI2(d){this.a=d},
dI_:function dI_(d,e){this.a=d
this.b=e},
dI3:function dI3(d){this.a=d},
dI4:function dI4(d){this.a=d},
dI5:function dI5(d,e){this.a=d
this.b=e},
dI6:function dI6(d,e){this.a=d
this.b=e},
dI7:function dI7(d,e){this.a=d
this.b=e},
dI8:function dI8(d){this.a=d},
dIb:function dIb(){},
dI9:function dI9(d){this.a=d},
dIa:function dIa(d,e){this.a=d
this.b=e},
bf8:function bf8(){},
SW:function SW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAi:function aAi(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dGT:function dGT(d){this.a=d},
dGU:function dGU(d){this.a=d},
fBQ(d){var x=d.hC
if(x>=0)return C.o.N(x)
return 10},
hjP(d){var x=d.kd
if(x>=0)return x
return 4.99},
hjO(d){var x=d.kW,w=y.N
w=x.iF(x,new B.c2T(),w,w)
return w},
fRs(d){var x=d.ke,w=y.N
w=x.iF(x,new B.c2U(),w,w)
return w},
aWp(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aWp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$aWp)
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
return A.i($async$aWp,w)},
a4P(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$a4P)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a4P)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4P,w)},
SY(d){var x=0,w=A.j(y.H),v,u
var $async$SY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ax(),$async$SY)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
fBP(d,e){var x,w,v
if(B.hjP(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hjO(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.c8(new A.Q(Date.now(),0,!1))},
aWn(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fRs(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.c8(new A.Q(Date.now(),0,!1))},
fRt(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a_(B.fRs(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.c8(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.m(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a4().ab())
d.ke=w},
amz(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ax(),$async$amz)
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
return A.i($async$amz,w)},
amA(d){var x=0,w=A.j(y.H),v,u,t
var $async$amA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amz(d),$async$amA)
case 3:u=f
x=5
return A.b(A.ax(),$async$amA)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$amA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amA,w)},
amy(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fBQ(d)
if(u<=0){v=!1
x=1
break}if(B.fBP(d,e)){v=!1
x=1
break}x=3
return A.b(B.amz(e),$async$amy)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amy,w)},
aWo(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aWo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.H_(e,d),$async$aWo)
case 3:if(g){v=-1
x=1
break}u=B.fBQ(d)
if(u<=0){v=-1
x=1
break}if(B.fBP(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amz(e),$async$aWo)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWo,w)},
c2W(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2W=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.H_(e,d),$async$c2W)
case 3:if(h){v=!1
x=1
break}v=B.amy(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2W,w)},
c2V(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c2V=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c2W(d,u,i.gRO()),$async$c2V)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2V,w)},
a4O(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4O=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRO()){v=!0
x=1
break}if(B.aWn(d,u)){v=!0
x=1
break}x=5
return A.b(A.l0(u,C.Pq),$async$a4O)
case 5:x=k?3:4
break
case 3:B.fRt(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4O)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kG(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pq,"Doc Share for Organizations"),$async$a4O)
case 7:if(!k){v=!1
x=1
break}B.fRt(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4O)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4O,w)},
c2T:function c2T(){},
c2U:function c2U(){},
fqo(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fqo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fqo)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eY0.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hE([r],e.c))
s.toString
$.eY0.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqo,w)},
hPS(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eY0.bm($.eY0,new B.fqq(d))},
fqq:function fqq(d){this.a=d},
eZm(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eZm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hE([d],f))
s.toString
u=A.mN(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.ji,null,y.H),$async$eZm)
case 3:C.yG.f0(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lV()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZm,w)},
adq(d,e,f){var x=0,w=A.j(y.H),v
var $async$adq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eYx.m(0,d,new B.a9E(A.bj(e,!0,v)))
x=3
return A.b(A.ax(),$async$adq)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.R.al(A.E(["parts",e,"size",f],v,y.C),null)),$async$adq)
case 2:return A.h(null,w)}})
return A.i($async$adq,w)},
adk(d){return B.hz9(d)},
hz9(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$adk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eYx.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ax(),$async$adk)
case 3:u=j.aS(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aE(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cj(s)){v=null
x=1
break}o=J.b4(s,new B.f20(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aR(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.a9E(r)
$.eYx.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$adk,w)},
OT(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cm(e))
$.ET.m(0,d,u)
x=3
return A.b(B.Po(d,u),$async$OT)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OT,w)},
aKX(d){return B.hz7(d)},
hz7(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.ET.h(0,d)
if(n!=null&&!C.aG.gai(n)){v=n
x=1
break}x=3
return A.b(B.Pn(d),$async$aKX)
case 3:p=f
if(p!=null&&!C.aG.gai(p)){$.ET.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ax(),$async$aKX)
case 4:s=f
r=A.aS(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aG(r)
x=!J.cj(q)?9:10
break
case 9:B.OT(d,q)
x=11
return A.b(J.hD(s,d),$async$aKX)
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
return A.i($async$aKX,w)},
hvx(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cm(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cm(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cm(A.B9(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cm(d)),y.K)
return A.f9(null,y.K)},
a_w(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.be($.bt,y.cf)
t=new A.bP(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.f6j(r,t),!1,s)
A.fC(r,"error",new B.f6k(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.JP,new B.f6l())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_w,w)},
aLg(d,e,f){return B.hBn(d,e,f)},
hBn(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aLg=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_w(i),$async$aLg)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Po(o,p),$async$aLg)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.adq(k,j,s),$async$aLg)
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
return A.i($async$aLg,w)},
aLf(d,e,f){return B.hBm(d,e,f)},
hBm(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aLf=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aLg(d,e,f),$async$aLf)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_w(f),$async$aLf)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.ET.m(0,s,r)
$.P9.m(0,s,r)
x=11
return A.b(B.OT(s,r),$async$aLf)
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
return A.i($async$aLf,w)},
Az(d,e,f,g,h,i){return B.hjY(d,e,f,g,h,i)},
hjY(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Az=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cB.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.ja(p,q,o,n,new A.Q(Date.now(),0,!1).a4().ab(),a0,f,B.aWv(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OT(s,d),$async$Az)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ax(),$async$Az)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cP.gcs().aG(d)),$async$Az)
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
return A.b(B.zE(e),$async$Az)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.F3(e,j),$async$Az)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Az,w)},
T_(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$T_=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zE(d),$async$T_)
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
k=B.fRv(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a4().ab()
i=new B.ja(m,n,k,l,j,"From folder",null,B.aWv(),null)
$.adT.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_w(o),$async$T_)
case 7:g=a1
x=g!=null&&!C.aG.gai(g)?8:10
break
case 8:$.ET.m(0,h,g)
$.P9.m(0,h,g)
B.OT(h,g)
x=9
break
case 10:x=11
return A.b(B.aLf(d,m,o),$async$T_)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.F3(d,t),$async$T_)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T_,w)},
fBU(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fBU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fRv(r,C.d.gaj(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.H0(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gai(s)){v=B.Az(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBU,w)},
H0(d,e,f,g,h,i){return B.hjX(d,e,f,g,h,i)},
hjX(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$H0=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cB.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IO(A.dK(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$H0)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cj(m)){x=6
break}J.fU(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cm(J.PW(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kp(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Po(k,l),$async$H0)
case 11:J.ch(q,k);++p
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
return A.b(j.a9(0),$async$H0)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Po(k,new Uint8Array(A.cm(n))),$async$H0)
case 15:J.ch(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adq(r,q,g),$async$H0)
case 16:f=new B.ja(i,a1,a0,g,new A.Q(Date.now(),0,!1).a4().ab(),a2,null,B.aWv(),null)
x=17
return A.b(B.zE(d),$async$H0)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.F3(d,e),$async$H0)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$H0,w)},
T1(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$T1=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adT.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_w(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.adk(s),$async$T1)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pn(u[o]),$async$T1)
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
v=A.B9(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.P9.h(0,s)
if(i==null)i=$.ET.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qO(d,e),$async$T1)
case 12:i=a0
if(i!=null&&!C.aG.gai(i))$.P9.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.B9(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
fRv(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qO(d,e){return B.hjZ(d,e)},
hjZ(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.P9.h(0,f)
if(e==null)e=$.ET.h(0,f)
if(e!=null&&!C.aG.gai(e)){v=e
x=1
break}s=$.adT.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_w(s),$async$qO)
case 9:r=a3
if(r!=null&&!C.aG.gai(r)){$.ET.m(0,f,r)
$.P9.m(0,f,r)
B.OT(f,r)
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
return A.b(B.adk(f),$async$qO)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.avf(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pn(g[l]),$async$qO)
case 16:k=a3
if(k!=null&&!C.aG.gai(k))n.K(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.al3()
if(!C.aG.gai(r)){$.ET.m(0,f,r)
$.P9.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKX(f),$async$qO)
case 17:j=a3
if(j!=null&&!C.aG.gai(j)){$.P9.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.T1(a0,a1,0,g),$async$qO)
case 20:i=a3
if(i!=null&&!C.aG.gai(i)){h=new Uint8Array(A.cm(i))
$.ET.m(0,f,h)
$.P9.m(0,f,h)
B.OT(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qO,w)},
hk1(d){var x,w,v=$.adT.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hk2(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hE([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hk_(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amG(d,e,f,g,h){return B.hk0(d,e,f,g,h)},
hk0(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amG=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adT.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_w(s),$async$amG)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qO(g,e),$async$amG)
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
return A.b(n.hV(d).w6(h,r,new A.CF(!0,e.c)),$async$amG)
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
return A.i($async$amG,w)},
fRx(d,e,f,g,h){var x,w,v,u,t=$.fRw
$.fRw=t+1
x=Date.now()
w=""+1000*x+"_"+C.cB.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c36.m(0,t,new B.brp(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.avf(u)))
return t},
fBV(d){var x=0,w=A.j(y.H)
var $async$fBV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fBV,w)},
H1(d,e){var $async$H1=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adT.h(0,h)
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
return A.pB(B.T1(d,e,p,o<q?o:q),$async$H1,w)
case 8:n=a1
x=n!=null&&!C.aG.gai(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pB(A.Es(n),$async$H1,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pB(B.adk("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$H1,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pB(B.Pn(h[l]),$async$H1,w)
case 18:k=a1
x=k!=null&&!C.aG.gai(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pB(A.Es(k),$async$H1,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pB(B.qO(d,e),$async$H1,w)
case 22:j=a1
x=j!=null&&!C.aG.gai(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pB(A.Es(A.B9(j,p,o<i?o:i)),$async$H1,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pB(null,0,w)
case 2:return A.pB(t.at(-1),1,w)}})
var x=0,w=A.fZZ($async$H1,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h0N(w)},
aWx(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c36.h(0,d)
if(t==null||J.cj(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a2b(),$async$aWx)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWx,w)},
T0(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$T0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c36.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2b(),$async$T0)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adq(r.c,u,r.z),$async$T0)
case 4:t=new B.ja(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a4().ab(),r.f,r.r,B.aWv(),null)
u=r.a
x=5
return A.b(B.zE(u),$async$T0)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.F3(u,s),$async$T0)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T0,w)},
a4V(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c36.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aex(u[s]),$async$a4V)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a4V,w)},
c38(d,e,f){var x=0,w=A.j(y.H)
var $async$c38=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwp(d,e,f),$async$c38)
case 2:return A.h(null,w)}})
return A.i($async$c38,w)},
c39(d,e,f){var x=0,w=A.j(y.H)
var $async$c39=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bwq(d,e,f),$async$c39)
case 2:return A.h(null,w)}})
return A.i($async$c39,w)},
Dk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Dk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zE(d),$async$Dk)
case 2:p=g
J.n2(p,new B.c37(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.ET.W(0,v)
$.adT.W(0,e)
x=3
return A.b(B.adk(v),$async$Dk)
case 3:u=g
$.eYx.W(0,v)
x=4
return A.b(A.ax(),$async$Dk)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Dk)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Dk)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aex(s[q]),$async$Dk)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aex(v),$async$Dk)
case 13:x=14
return A.b(B.F3(d,p),$async$Dk)
case 14:return A.h(null,w)}})
return A.i($async$Dk,w)},
aWw(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qO(d,e),$async$aWw)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eZm(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWw,w)},
zE(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$zE)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aE(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f6m(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zE,w)},
F3(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$F3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ax(),$async$F3)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.fag(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.R.al(t,null)),$async$F3)
case 3:return A.h(null,w)}})
return A.i($async$F3,w)},
bwp(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zE(d),$async$bwp)
case 3:u=h
t=J.cA(u)
s=t.bi(u,new B.f5_(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).aA8(f))
x=4
return A.b(B.F3(d,u),$async$bwp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwp,w)},
bwq(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bwq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zE(d),$async$bwq)
case 3:u=h
t=J.cA(u)
s=t.bi(u,new B.f50(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).czf(f))
x=4
return A.b(B.F3(d,u),$async$bwq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bwq,w)},
a9E:function a9E(d){this.a=d},
f20:function f20(){},
f6j:function f6j(d,e){this.a=d
this.b=e},
f6k:function f6k(d){this.a=d},
f6l:function f6l(){},
c37:function c37(d){this.a=d},
brp:function brp(d,e,f,g,h,i,j,k,l){var _=this
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
f6m:function f6m(){},
fag:function fag(){},
f5_:function f5_(d){this.a=d},
f50:function f50(d){this.a=d},
a4W(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.ba(d,new B.c3c())?3:4
break
case 3:x=5
return A.b(B.aWy(d,e),$async$a4W)
case 5:u=g
if(u!=null){t=u.c
B.LL(d,u.b,e,t)}v=u
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
return A.b(B.aWt(s),$async$a4W)
case 10:case 9:if(g){v=new A.Og(1,D.P3,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.T2(d,e),$async$a4W)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.T7(!0,!0,d,e),$async$a4W)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.LL(d,D.y_,e,t)
v=new A.Og(p,D.y_,t)
x=1
break}v=B.c3b(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4W,w)},
T2(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$T2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4Y(null,d,e),$async$T2)
case 3:p=g
try{u=C.R.aE(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cj(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWs(p,d.length,e),$async$T2)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c39(e,C.d.gL(d).a,r.b),$async$T2)
case 7:case 6:q=r.a
x=8
return A.b(B.LL(d,D.P3,e,q),$async$T2)
case 8:v=new A.Og(d.length,D.P3,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T2,w)},
T3(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$T3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.m_(D.m8)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4X(d,e),$async$T3)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c34(s,d,e,t),$async$T3)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWt(t),$async$T3)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qO(e,d),$async$T3)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.T2(A.a([d],y.r),e),$async$T3)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T3,w)},
T5(){var x=0,w=A.j(y.H)
var $async$T5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fBO(),$async$T5)
case 2:x=3
return A.b(B.aNj(),$async$T5)
case 3:return A.h(null,w)}})
return A.i($async$T5,w)},
a4X(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWv()
x=3
return A.b(B.c38(e,d.a,u),$async$a4X)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4X,w)},
LL(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$LL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.P3&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aX(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4X(p,f),$async$LL)
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
return A.b(B.c33(o,p,u,f),$async$LL)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c34(o,p,f,t),$async$LL)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c32(o,u,p,f),$async$LL)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$LL,w)},
aWy(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c3a(e,d),$async$aWy)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.T7(!1,!0,d,e),$async$aWy)
case 4:u=g
if(u!=null){t=u.b
v=new A.Og(u.a,D.y_,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWy,w)},
c3a(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c3a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.T1(d,s,0,1),$async$c3a)
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
return A.i($async$c3a,w)},
c3b(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c3b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4Y(null,d,e),$async$c3b)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fRu(u)
if(t.length>800){v=null
x=1
break}v=new A.Og(d.length,D.dga,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c3b,w)},
amH(d,e,f){return B.hk5(d,e,f)},
hk5(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amH=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cV(g,"\ufeff"))g=J.mj(g,1)
x=B.fBT(g)?3:4
break
case 3:x=5
return A.b(B.c35(g),$async$amH)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cV(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mj(g,13))
try{k=B.Dl(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a6(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cV(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mj(g,13))
u=9
x=12
return A.b(B.aWr(q),$async$amH)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T4(p,a0)
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
case 11:case 7:if(J.cV(g,"NGMYDOCSYNC0|"))try{n=B.fBS(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.T4(n,a0)
v=k
x=1
break}catch(a1){m=A.a6(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cV(g,"N2|")){v=B.H2(C.a.i(J.mj(g,3)),d,a0)
x=1
break}if(J.cV(g,"NGMYDOCSYNC2|")){v=B.H2(C.a.i(J.mj(g,13)),d,a0)
x=1
break}i=A.ae("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.am(k,0,k.length-1)
else h=k
v=B.H2(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.T4(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amH,w)},
H2(d,e,f){return B.hk3(d,e,f)},
hk3(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H2=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ae("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aX(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aX(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.am(e,0,e.length-13)
f=A.ae("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cr(A.t(s)+"/manifest.json",0,null)
q=A.cr(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aWj(r),$async$H2)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aWj(A.cr(s,0,null)),$async$H2)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cj(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c2I(o,r,a1,n,a2),$async$H2)
case 11:m=a4
x=J.cj(m)?12:13
break
case 12:x=14
return A.b(B.c2H(q),$async$H2)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.T4(l,a2),$async$H2)
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
return A.i($async$H2,w)},
a4Y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4Y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qO(f,r),$async$a4Y)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcs().aG(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.Q(Date.now(),0,!1).a4().ab())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.R.al(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4Y,w)},
T4(d,e){return B.hk4(d,e)},
hk4(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$T4=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aE(0,a2,null)
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
if(J.aa(j)===0){x=7
break}i=C.cw.aG(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.Az(i,a3,d,k,l,o),$async$T4)
case 9:h=a5
if(h!=null)J.ch(n,h)
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
return A.i($async$T4,w)},
LK:function LK(d,e){this.a=d
this.b=e},
c3c:function c3c(){},
a_6(d){var x=A.M(d).ax.a===C.H,w=x?D.a9Y:D.a8i,v=x?D.abj:C.c,u=x?C.aN:C.M,t=x?C.bI:C.ai,s=x?D.a9g:C.aJ
return new A.aDe([w,s,v,u,t,x?C.f3:C.bV])},
h5A(d,e){var x=e?C.x.j(0.72):C.aT
return A.cg(null,x,!0,null,new B.ful(e),d,null,!0,!0,y.N)},
c2S(d,e,f,g,h,i,j,k,l){return new B.SX(e,l,d,f,k,j,g,h,i,null)},
X8(d,e,f,g,h,i,j){return new B.b9R(g,h,j,e,i,d,f,null)},
ful:function ful(d){this.a=d},
X5:function X5(d,e){this.c=d
this.a=e},
awq:function awq(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cXe:function cXe(d){this.a=d},
cXc:function cXc(d){this.a=d},
cXd:function cXd(d){this.a=d},
br4:function br4(){},
SX:function SX(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAj:function aAj(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dHZ:function dHZ(d){this.a=d},
dHm:function dHm(d,e){this.a=d
this.b=e},
dHn:function dHn(d,e){this.a=d
this.b=e},
dGW:function dGW(d,e,f){this.a=d
this.b=e
this.c=f},
dGV:function dGV(d){this.a=d},
dGX:function dGX(d,e){this.a=d
this.b=e},
dH1:function dH1(d,e,f){this.a=d
this.b=e
this.c=f},
dH0:function dH0(d){this.a=d},
dHN:function dHN(d,e){this.a=d
this.b=e},
dHO:function dHO(d){this.a=d},
dHj:function dHj(d,e,f){this.a=d
this.b=e
this.c=f},
dHg:function dHg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dH_:function dH_(d){this.a=d},
dHr:function dHr(d){this.a=d},
dHq:function dHq(){},
dH5:function dH5(d){this.a=d},
dHK:function dHK(d,e){this.a=d
this.b=e},
dHL:function dHL(d,e){this.a=d
this.b=e},
dHM:function dHM(d,e){this.a=d
this.b=e},
dHh:function dHh(d,e){this.a=d
this.b=e},
dHi:function dHi(d,e){this.a=d
this.b=e},
dHD:function dHD(d,e){this.a=d
this.b=e},
dHz:function dHz(d){this.a=d},
dHy:function dHy(d){this.a=d},
dHA:function dHA(){},
dHB:function dHB(){},
dHC:function dHC(d,e){this.a=d
this.b=e},
dHE:function dHE(){},
dHF:function dHF(d){this.a=d},
dHx:function dHx(d,e){this.a=d
this.b=e},
dHs:function dHs(d){this.a=d},
dHt:function dHt(d){this.a=d},
dHu:function dHu(d){this.a=d},
dHv:function dHv(d){this.a=d},
dHw:function dHw(d){this.a=d},
dH2:function dH2(){},
dH3:function dH3(d){this.a=d},
dH4:function dH4(d,e){this.a=d
this.b=e},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dGY:function dGY(d,e,f){this.a=d
this.b=e
this.c=f},
dHk:function dHk(d){this.a=d},
dHl:function dHl(d,e,f){this.a=d
this.b=e
this.c=f},
dHe:function dHe(d,e){this.a=d
this.b=e},
dHa:function dHa(d){this.a=d},
dH7:function dH7(d,e,f){this.a=d
this.b=e
this.c=f},
dHb:function dHb(d){this.a=d},
dHc:function dHc(d){this.a=d},
dHd:function dHd(){},
dHf:function dHf(d,e){this.a=d
this.b=e},
dH8:function dH8(d){this.a=d},
dH6:function dH6(d,e,f){this.a=d
this.b=e
this.c=f},
dH9:function dH9(){},
dHp:function dHp(d){this.a=d},
dHo:function dHo(d,e){this.a=d
this.b=e},
dHJ:function dHJ(d,e){this.a=d
this.b=e},
dHG:function dHG(d){this.a=d},
dHH:function dHH(d,e){this.a=d
this.b=e},
dHI:function dHI(d){this.a=d},
dHW:function dHW(d){this.a=d},
dHU:function dHU(d){this.a=d},
dHV:function dHV(d){this.a=d},
dHX:function dHX(){},
dHY:function dHY(d,e){this.a=d
this.b=e},
dHQ:function dHQ(d,e){this.a=d
this.b=e},
dHR:function dHR(d,e,f){this.a=d
this.b=e
this.c=f},
dHP:function dHP(d,e,f){this.a=d
this.b=e
this.c=f},
dHS:function dHS(d,e){this.a=d
this.b=e},
dHT:function dHT(d,e){this.a=d
this.b=e},
awn:function awn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9Q:function b9Q(d,e,f){this.c=d
this.d=e
this.a=f},
cXa:function cXa(){},
cXb:function cXb(){},
a9Y:function a9Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cXy:function cXy(){},
cXx:function cXx(d){this.a=d},
X7:function X7(d,e,f){this.c=d
this.d=e
this.a=f},
aws:function aws(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cXu:function cXu(d){this.a=d},
cXv:function cXv(d,e,f){this.a=d
this.b=e
this.c=f},
cXw:function cXw(d,e){this.a=d
this.b=e},
cXs:function cXs(d,e){this.a=d
this.b=e},
cXq:function cXq(d){this.a=d},
cXo:function cXo(d){this.a=d},
cXl:function cXl(d){this.a=d},
cXr:function cXr(d){this.a=d},
cXn:function cXn(d){this.a=d},
cXt:function cXt(d){this.a=d},
cXp:function cXp(d){this.a=d},
cXm:function cXm(d){this.a=d},
X4:function X4(d,e,f){this.c=d
this.d=e
this.a=f},
awp:function awp(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cX7:function cX7(d){this.a=d},
cX6:function cX6(d,e){this.a=d
this.b=e},
cX8:function cX8(d){this.a=d},
cX5:function cX5(d,e){this.a=d
this.b=e},
cX9:function cX9(d){this.a=d},
cX4:function cX4(d,e){this.a=d
this.b=e},
cX0:function cX0(d){this.a=d},
cX1:function cX1(d){this.a=d},
cX2:function cX2(d,e){this.a=d
this.b=e},
cX3:function cX3(d){this.a=d},
NU:function NU(d,e,f){this.c=d
this.d=e
this.a=f},
awv:function awv(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cXL:function cXL(d){this.a=d},
cXM:function cXM(d){this.a=d},
cXN:function cXN(d){this.a=d},
cXO:function cXO(d){this.a=d},
cXP:function cXP(d,e){this.a=d
this.b=e},
cXQ:function cXQ(d){this.a=d},
cXS:function cXS(d){this.a=d},
cXR:function cXR(d){this.a=d},
X9:function X9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awt:function awt(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cXH:function cXH(d,e){this.a=d
this.b=e},
cXI:function cXI(d,e){this.a=d
this.b=e},
cXz:function cXz(d,e,f){this.a=d
this.b=e
this.c=f},
cXA:function cXA(d){this.a=d},
cXB:function cXB(){},
cXG:function cXG(){},
cXC:function cXC(d,e){this.a=d
this.b=e},
cXD:function cXD(d,e){this.a=d
this.b=e},
cXE:function cXE(d,e){this.a=d
this.b=e},
cXF:function cXF(d,e){this.a=d
this.b=e},
a9W:function a9W(d,e){this.c=d
this.a=e},
cX_:function cX_(d){this.a=d},
X3:function X3(d){this.a=d},
awo:function awo(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Xa:function Xa(d,e){this.c=d
this.a=e},
awu:function awu(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cXK:function cXK(d){this.a=d},
cXJ:function cXJ(d){this.a=d},
b9R:function b9R(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hk6(){var x,w=$.oZ(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fN(v)},
LM(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$LM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$LM)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$LM)
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
return A.i($async$LM,w)},
a4Z(d){return B.hk7(d)},
hk7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4Z)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.ht("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cz,null),$async$a4Z)
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
return A.i($async$a4Z,w)},
T6(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$T6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LM(),$async$T6)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dS(A.a_(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.m(s,d,t)
x=4
return A.b(B.a4Z(s),$async$T6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$T6,w)},
T7(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$T7=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bY(),$async$T7)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bj(f,!0,y.U)
else{t=A.U(f).k("a4<1>")
u=A.z(new A.a4(f,new B.c3e(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hk6()
t=A.U(u).k("J<1,a1<n,aB>>")
r=A.z(new A.J(u,new B.c3f(s),t),t.k("ai.E"))
x=6
return A.b(B.LM(),$async$T7)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=7
return A.b(B.a4Z(q),$async$T7)
case 7:x=8
return A.b(B.a5_(r,u,g,s),$async$T7)
case 8:v=new A.ble(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$T7,w)},
amI(d){var x=0,w=A.j(y.y),v,u,t
var $async$amI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.LM(),$async$amI)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amI,w)},
c3g(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c3g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.LM(),$async$c3g)
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
return A.i($async$c3g,w)},
a5_(d,e,f,g){return B.hk8(d,e,f,g)},
hk8(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5_=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amG("media",r,new B.c3d(s,e,g),f,q),$async$a5_)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.T6(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a5_)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.T6(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$a5_)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a6(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.T6(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a5_)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5_,w)},
Dl(d,e,f){return B.hk9(d,e,f)},
hk9(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Dl=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$Dl)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amI(b3),$async$Dl)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kX,null,g),$async$Dl)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amI(b3),$async$Dl)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.LM(),$async$Dl)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aR(a1.h(d,"usesRemaining"))
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
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.os(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a8e(a8.a,b0,"media",a8.d,a9).Bz(m)
k=A.cr(l,0,null)
x=17
return A.b(B.aWk(k,n,o,s,b7),$async$Dl)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
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
return A.b(new A.a8e(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Dl)
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
a0.m(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4Z(e),$async$Dl)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dl,w)},
c3e:function c3e(){},
c3f:function c3f(d){this.a=d},
c3d:function c3d(d,e,f){this.a=d
this.b=e
this.c=f},
aNj(){var x=0,w=A.j(y.H),v,u
var $async$aNj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.huZ=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aNj)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aNj)
case 3:u=$.fGT
u=u==null?null:u.bz(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aNj)
case 4:$.fGT=$.hDb=$.hDc=null
return A.h(null,w)}})
return A.i($async$aNj,w)},
f9T(d){var x=0,w=A.j(y.H),v,u
var $async$f9T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2x){x=1
break}u=new A.be($.bt,y.d4)
d.c=new B.f9U(new A.bP(u,y.aY))
x=3
return A.b(u.i0(0,C.hB,new B.f9V()),$async$f9T)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f9T,w)},
hD9(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hjR(x):x},
fGX(d){var x=0,w=A.j(y.T),v,u,t
var $async$fGX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aX(t,13))
if(C.a.a_(u,"WR")){v=B.amK(u)
x=1
break}v=B.fBS(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGX,w)},
fGW(d){var x=0,w=A.j(y.T),v,u,t
var $async$fGW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aX(t,14))
if(C.a.a_(u,"WR")){v=B.amL(u)
x=1
break}v=B.fBS(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGW,w)},
fq9(d){var x=0,w=A.j(y.T),v
var $async$fq9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amL(d),$async$fq9)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fq9,w)},
bxh(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bxh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fGW(d),$async$bxh)
case 3:q=f
if(q==null){x=1
break}t=C.R.aE(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bxh,w)},
f_a(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f_a=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.T0(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Az(d.al3(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_a,w)},
F5(d,e,f){return B.hFu(d,e,f)},
hFu(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$F5=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fGX(a1),$async$F5)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aE(0,e,null)
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
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aX(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h7o().aAn(D.d4O,null),$async$F5)
case 4:l=d.fGT=a4
f.a="file"
f.b="application/octet-stream"
k=new A.avf(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.be($.bt,y.b1)
l.y=new B.fan(f,k,new B.fao(f,a2,k,j,a0,p),a2,j,a0,p,new A.bP(t,y.ch))
x=5
return A.b(l.a51(0,new B.Vf(r,"offer")),$async$F5)
case 5:d=l
x=7
return A.b(l.ahX(0),$async$F5)
case 7:x=6
return A.b(d.a4U(0,a4),$async$F5)
case 6:x=8
return A.b(B.f9T(l),$async$F5)
case 8:x=9
return A.b(l.alO(),$async$F5)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hD9(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.al(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amM(m,h),$async$F5)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fRu(h)
case 11:v=new A.bkx(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$F5,w)},
f9U:function f9U(d){this.a=d},
f9V:function f9V(){},
fao:function fao(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fan:function fan(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fam:function fam(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hHg(d){switch(d){case"new":return D.dVG
case"checking":return D.dVH
case"connected":return D.dVJ
case"completed":return D.dVI
case"failed":return D.dVL
case"disconnected":return D.dVM
case"closed":return D.aGg
case"count":return D.dVK}return D.aGg},
hHh(d){switch(d){case"new":return D.aGh
case"gathering":return D.dVN
case"complete":return D.a2x}return D.aGh},
hRl(d){switch(d){case"stable":return D.dVO
case"have-local-offer":return D.dVP
case"have-local-pranswer":return D.dVR
case"have-remote-offer":return D.dVQ
case"have-remote-pranswer":return D.dVS
case"closed":return D.aGn}return D.aGn},
hPE(d){switch(d){case"new":return D.aGk
case"connecting":return D.aGl
case"connected":return D.aGm
case"closed":return D.a2y
case"disconnected":return D.aGj
case"failed":return D.aGi}return D.a2y},
a7d:function a7d(d,e){this.a=d
this.b=e},
MM:function MM(d,e){this.a=d
this.b=e},
Ve:function Ve(d,e){this.a=d
this.b=e},
ML:function ML(d,e){this.a=d
this.b=e},
DM:function DM(d,e){this.a=d
this.b=e},
ce_:function ce_(){},
fDy(d){var x=new B.DL()
x.a=d
x.b=!0
return x},
DL:function DL(){this.b=this.a=$},
a7c:function a7c(){},
aqX:function aqX(){},
Vf:function Vf(d,e){this.a=d
this.b=e},
fBO(){var x=0,w=A.j(y.H)
var $async$fBO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fBO,w)},
fBR(d,e,f){var x=0,w=A.j(y.T),v
var $async$fBR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.m_(D.m8))){v=null
x=1
break}v=B.fqo(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBR,w)},
fRu(d){var x,w=F.a7Q.a1W(C.dG.aG(d),null)
if(w.length===0){x=C.dG.aG(d)
return C.cP.gcs().aG(x)}return C.cP.gcs().aG(w)},
hjQ(d){var x,w,v=C.cw.aG(d)
try{x=C.c1.c6(0,F.a7P.b7u(v,!1))
return x}catch(w){x=C.c1.c6(0,v)
return x}},
fBS(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hjQ(C.a.aX(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aX(t,w.length)
try{v=C.c1.c6(0,C.cw.aG(x))
return v}catch(u){return x}}return null},
hjR(d){var x,w,v,u,t,s=A.a([],y.s)
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
hjS(){var x,w=$.oZ(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fN(v)},
aWq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aWq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aWq)
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
return A.i($async$aWq,w)},
c2X(d,e){return B.hjT(d,e)},
hjT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c2X=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.ht("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cz,null),$async$c2X)
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
return A.i($async$c2X,w)},
aWt(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aWq(d),$async$aWt)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWt,w)},
aWs(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hjS()
r=C.a.i(f)
t=C.dG.aG(s)
x=3
return A.b(B.c2X(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcs().aG(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$aWs)
case 3:if(!h){v=null
x=1
break}v=new A.Za("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWs,w)},
aWr(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aWr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aWq(o),$async$aWr)
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
return A.i($async$aWr,w)},
c2Y(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c2Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.byc("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cz),$async$c2Y)
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
return A.i($async$c2Y,w)},
aWu(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GZ(),$async$aWu)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a_(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWu,w)},
amD(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amD)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWu(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amD,w)},
amB(d,e){var x=0,w=A.j(y.H)
var $async$amB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amB)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amB)
case 2:return A.h(null,w)}})
return A.i($async$amB,w)},
a4R(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4R=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4R)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GZ(),$async$a4R)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dg(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=5
return A.b(A.a4Q(s),$async$a4R)
case 5:x=6
return A.b(B.amB(f,u),$async$a4R)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4R,w)},
a4S(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4S=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4S)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GZ(),$async$a4S)
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
return A.b(B.amB(g,q),$async$a4S)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4Q(u),$async$a4S)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4S,w)},
a4T(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4T=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4T)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GZ(),$async$a4T)
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
s=B.aWn(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ax(),$async$a4T)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.R.al(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a4().ab()],p,p),null)),$async$a4T)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4T,w)},
c2Z(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c2Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ax(),$async$c2Z)
case 7:s=f
p=A.t(n)
r=A.aS(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aE(0,r,null)
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
return A.i($async$c2Z,w)},
H_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$H_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2Z(d),$async$H_)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWu(t),$async$H_)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amC(d),$async$H_)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aWn(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amC(d),$async$H_)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H_,w)},
amC(d){var x=0,w=A.j(y.H)
var $async$amC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ax(),$async$amC)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amC)
case 2:return A.h(null,w)}})
return A.i($async$amC,w)},
aWv(){var x,w=$.oZ(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fN(v)},
a4U(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fBT(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ae("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c31(d){return B.hjV(d)},
hjV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c31=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4U(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c31)
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
return A.i($async$c31,w)},
amF(d,e){return B.hjW(d,e)},
hjW(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4U(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.ht("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cz,null),$async$amF)
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
return A.i($async$amF,w)},
c33(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c33=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4U(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amF(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c33)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c33,w)},
c32(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c32=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4U(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amF(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c32)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c32,w)},
c34(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c34=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4U(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amF(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c34,w)},
c35(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c35=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fBT(d)){v=null
x=1
break}x=3
return A.b(B.c31(d),$async$c35)
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
return A.i($async$c35,w)},
a50(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a50=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a50)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a50)
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
return A.i($async$a50,w)},
amJ(d){return B.hka(d)},
hka(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$amJ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.ht("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cz,null),$async$amJ)
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
return A.i($async$amJ,w)},
amK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cV(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amK)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a50(),$async$amK)
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
J.aE(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a4().ab())
J.aE(s,j,o)
x=9
return A.b(B.amJ(s),$async$amK)
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
return A.i($async$amK,w)},
amM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bY(),$async$amM)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a50(),$async$amM)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dS(A.a_(s,r,q),r,q)
r=C.dG.aG(C.a.i(e))
q.m(0,"answer",C.cP.gcs().aG(r))
q.m(0,"answerAt",new A.Q(Date.now(),0,!1).a4().ab())
t.m(u,p,q)
x=5
return A.b(B.amJ(u),$async$amM)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amM,w)},
amL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amL)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a50(),$async$amL)
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
return A.i($async$amL,w)},
alM(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ag$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb6()
if(!(p instanceof A.q2)){v=null
x=1
break}x=3
return A.b(p.lQ(e),$async$alM)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fN),$async$alM)
case 7:q=g
o=q
o=o==null?null:J.f3(J.w4(o))
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
return A.i($async$alM,w)},
hNJ(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
foK(d){return B.hNL(d)},
hNL(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$foK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Jh(d,3600),$async$foK)
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
return A.i($async$foK,w)},
BT(d,e,f,g,h,i){var x=null
return B.hNI(d,e,f,g,h,i)},
hNI(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BT=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fRx(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fBV(r),$async$BT)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.foK(o),$async$BT)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4V(r),$async$BT)
case 14:v=null
x=1
break
case 13:e=$.bt.h(0,C.aJh)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Kc(A.a([],g))
x=15
return A.b(d.eM(0,A.arM("GET",A.cr(n,0,null))).cJ(0,C.DF),$async$BT)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4V(r),$async$BT)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IO(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BT)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWx(r,k),$async$BT)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BT)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.T0(r)
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
return A.b(B.a4V(r),$async$BT)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BT,w)},
aN2(d){return B.hNK(d)},
hNK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aN2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aN2)
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
return A.i($async$aN2,w)}},D,T,L,U,V,W,X,M,Y,N
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
B.ce0.prototype={
aAn(d,e){return this.cAL(d,e)},
cAL(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aAn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.T(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dS(r,s,t)
t.v(0,d)
u=new q(A.k5(A.cv(t)))
t=J.k(u)
v=B.hoJ(C.cP.gcs().aG(new A.d_(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aAn,w)}}
B.b0D.prototype={
bsn(d){var x=this,w=x.w
w.onclose=A.h8(new B.cdW(x))
w.onopen=A.h8(new B.cdX(x))
w.onmessage=A.h8(new B.cdY(x))
w.onbufferedamountlow=A.h8(new B.cdZ(x))},
gdh(d){return this.x},
ael(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ael=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DL()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fDy(J.f3(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ael)
case 8:v=t.fDy(s.al_(f,0,null))
x=1
break
case 7:case 4:v=B.fDy(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ael,w)}}
B.b0E.prototype={
bso(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h8(new B.ce1(x)))
w.addEventListener("icecandidate",A.h8(new B.ce2(x)))
w.addEventListener("iceconnectionstatechange",A.h8(new B.ce3(x)))
w.onicegatheringstatechange=A.h8(new B.ce4(x))
w.addEventListener("signalingstatechange",A.h8(new B.ce5(x)))
if(!$.fKm())w.addEventListener("connectionstatechange",A.h8(new B.ce6(x)))
w.addEventListener("negotiationneeded",A.h8(new B.ce7(x)))
w.addEventListener("track",A.h8(new B.ce8(x)))},
ahX(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k5(A.cv(A.T(y.N,y.z)))),y.aQ),$async$ahX)
case 3:t=f
v=new B.Vf(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahX,w)},
a4U(d,e){return this.bhZ(0,e)},
bhZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4U)
case 2:return A.h(null,w)}})
return A.i($async$a4U,w)},
a51(d,e){return this.bie(0,e)},
bie(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a51=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a51)
case 2:return A.h(null,w)}})
return A.i($async$a51,w)},
alO(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Vf(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alO,w)},
bz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bz,w)}}
B.a9X.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.X6.prototype={
S(){return new B.awr()},
gd6(){return this.c}}
B.awr.prototype={
Z(){this.a0()
this.ab7()},
ab7(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWo(u.e,u.c),$async$ab7)
case 2:t=e
if(v.c!=null)v.n(new B.cXi(v,t))
return A.h(null,w)}})
return A.i($async$ab7,w)},
Oq(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Oq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amy(t.e,t.c,!1),$async$Oq)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.H(y.q).f.P(D.ey9)
x=1
break}x=4
return A.b(B.a4P(u.a.c,"individual"),$async$Oq)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a3t(A.eD(new B.cXf(u),!1,null,y.H)),$async$Oq)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oq,w)},
HI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f83(o),$async$HI)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4T(o.e,r,s,q),$async$HI)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.H(y.q).f.P(D.eve)
x=1
break}x=5
return A.b(B.a4P(u.a.c,"member"),$async$HI)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a3t(A.eD(new B.cXh(u),!1,null,y.H)),$async$HI)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HI,w)},
wY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4O(t.e,o,t.f,t.r,t.w,s),$async$wY)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4P(u.a.c,"org_owner"),$async$wY)
case 4:x=5
return A.b(B.amD(u.a.c),$async$wY)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f8y(o),$async$wY)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4R(s,t,o,q.c),$async$wY)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.H(y.q).f.P(D.evb)
x=1
break}x=10
return A.b(B.amD(u.a.c),$async$wY)
case 10:o=u.c
if(o==null){x=1
break}o.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a3t(A.eD(new B.cXg(u),!1,null,y.H)),$async$wY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wY,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.iZ:C.oU,q=B.fBQ(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.fF,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.eQ4,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.fW,t,t,t),C.ay,D.f6E,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bJk,C.n),t,t,t,t,C.ep,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lo(new B.cXk(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aP:C.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ab)
if(!u.a.x)C.d.v(p,A.a([new B.aao(C.eN,C.ati,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5U(),t),C.ab],v))
p.push(new B.aao(C.ob,C.ZC,"Team Member","Sign in with your organization access code + password",u.gc6K(),t))
p.push(C.ab)
p.push(new B.aao(C.agd,C.a_Y,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc6f(),t))
return A.cd(t,r,A.bq(!0,A.ci(A.v(p,C.ag,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adE,t,t,C.ak),!0,!1,C.aj,!0,!0),t,!1,!1,t,t)}}
B.aao.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.a1,!0,s,A.aI(!1,r,!0,A.eq(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a3(C.a3,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.ow,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.Ac,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c3,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayV.prototype={}
B.aC2.prototype={}
B.ja.prototype={
m_(d){var x=this.b,w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.aX(x,w+1).toLowerCase())},
gamp(){var x=this.d
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
b70(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.ja(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
czf(d){return this.b70(null,d)},
aA8(d){return this.b70(d,null)}}
B.SV.prototype={
S(){return new B.aAh(new A.co(null,y.A))},
gd6(){return this.c}}
B.aAh.prototype={
Z(){this.a0()
this.ab8()},
ab8(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ay(u.a.c),$async$ab8)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dGS(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ab8,w)},
ab9(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ab9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fE(new A.fx(s)),$async$ab9)
case 3:t=u.c
if(t!=null)t.H(y.q).f.P(D.ez3)
case 1:return A.h(v,w)}})
return A.i($async$ab9,w)},
Xt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alM(s.d,4),$async$Xt)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rh(r,"ngmy_my_code_"+m+".png"),$async$Xt)
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
return A.i($async$Xt,w)},
aeO(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7O("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeO,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.iZ:C.oU,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lM
else if(q.e==null)x=A.au(new A.C(C.ep,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a_0,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a3(C.a3,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.ade,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.G,C.aB.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.ci(A.v(A.a([x,C.mf,w,C.kg,new A.en(A.p(p,A.pl(p,p,!1,B.hjM(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c3,p,p,p),q.d),C.ab,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kg,A.B(A.a([A.D(A.ez(M.At,C.Rk,q.gc_0(),p),1),C.ax,A.D(A.dq(C.xs,C.a4P,q.gc_1(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a5(1/0,p,A.ez(L.Yu,D.f2R,q.gckT(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.Kf,p,p,C.ak)
x=r}return A.cd(l,n,x,p,!1,!1,p,p)}}
B.SZ.prototype={
S(){return new B.aAk(new A.ap(C.as,$.av()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aAk.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GY(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
p(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.p()
this.a2()},
Xu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GY(u.d.a.a)
if(t==null){u.n(new B.dI0(u))
x=1
break}u.n(new B.dI1(u))
s=u.a
r=s.c
x=3
return A.b(B.a4N(s.d,new B.dI2(u),t,r),$async$Xu)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dI3(u))
if(q){s=u.c
s.toString
A.a8(s,!1).M(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xu,w)},
a_A(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_A=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cj(r.a.d)){x=1
break}r.n(new B.dI4(r))
u=4
q=J.fj(r.a.d)
x=7
return A.b(B.qO(r.a.c,q),$async$a_A)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dI5(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.afg(p,m,l,j,k),$async$a_A)
case 8:o=e
if(r.c!=null)r.n(new B.dI6(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a6(h)
if(r.c!=null)r.n(new B.dI7(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dI8(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_A,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.a9Y:D.a8i,h=j?D.abj:C.c,g=j?C.aN:C.M,f=j?C.bI:C.ai,e=j?D.a9g:C.aJ
i=[i,e,h,g,f,j?C.f3:C.bV]
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
t=A.p(k,A.B(A.a([A.p(k,D.by5,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a3(C.aw,C.aC,C.w,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fB,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a_0,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tG(A.ae("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bf8()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.K8,k,k,"",k,!0,new A.b3(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b3(4,A.m(18),new A.ay(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ah,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dI9(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lF,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JR(l.a.d,4)
m=A.z(new A.J(m,new B.dIa(x,new A.aDe(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.mB,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d3,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ek,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.etM)
else q.push(A.V(C.l_,i[5],k,k,k,16))
q.push(C.ax)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dj(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.io,k,k,k,C.eM,k,k,k)],r))}e=A.D(A.ci(A.v(e,C.ag,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bjf,k,k,C.ak),1)
u=l.f?k:l.gckU()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(L.Yu,D.f3M,u,A.db(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cc,k,new A.b6(q,C.X),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc_2()
t=A.bk(C.aB,k,k,0,C.c,k,C.mA,k,new A.b6(A.m(16),C.X),k,k,k)
return A.cd(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.bq(!0,A.mC(new B.dIb(),A.v(A.a([e,new A.C(D.biK,A.v(A.a([s,C.P,i,C.ab,A.bL(l.f?C.qU:D.f2g,u,t)],r),C.ag,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UY,k,new A.bl(0,1,y.X),y.i),!0,!1,C.aj,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bf8.prototype={
nX(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f5(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ae("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ae("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bc(v,A.h2(C.bs,v.length),C.aM)}}
B.SW.prototype={
S(){return new B.aAi()}}
B.aAi.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.av()
u.d!==$&&A.aO()
u.d=new A.ap(new A.bc(w,C.b2,C.aM),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ap(new A.bc(x,C.b2,C.aM),v)
u.f!==$&&A.aO()
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
aba(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aba=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dGT(r))
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
return A.b(B.a4S(p,m,n,o,C.a.i(l).length===0?null:l),$async$aba)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.H(y.q).f.P(D.eyF)
s=[1]
x=4
break}p.H(y.q).f.P(D.exi)
p=r.c
p.toString
A.a8(p,!1).M(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dGU(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aba,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.iZ:C.oU,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eWs,s,s,s,1,s,!0),p=A.p(s,D.bbC,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.F6,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bEO,C.z,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bEK,C.z,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bEY,C.z,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc_3()
u=A.bk(C.aB,s,s,s,s,C.fQ,s,s,s,s,s,s)
return A.cd(q,r,A.ci(A.v(A.a([p,C.d3,o,C.ab,x,C.ab,w,C.mf,A.bL(t.r?C.qU:C.aLO,v,u)],y.p),C.ag,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ak),s,!1,!1,s,s)}}
B.a9E.prototype={}
B.brp.prototype={
a2b(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cm(r.al3()))
x=3
return A.b(B.Po(t,s),$async$a2b)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2b,w)},
gd6(){return this.a}}
B.LK.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.X5.prototype={
S(){return new B.awq(new A.ap(C.as,$.av()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.awq.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cXe(this))},
p(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.p()
this.a2()},
c_9(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).M(x)
return null},
B(d){var x=this,w=null,v=B.a_6(d),u=x.a.c,t=u?C.hx:v.a[2],s=u?C.c:v.a[3],r=u?C.aP:v.a[4],q=u?C.iZ:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aB.j(u?0.25:0.12),C.fF,32)],n),l=A.p(w,T.aiO,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ab(0,C.G,C.aB.j(0.4),C.cs,16)],n),C.ajA,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tG(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.br4()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.DS,w,w,"",w,!0,new A.b3(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b3(4,A.m(16),D.aQG),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ah,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cXc(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lF,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.n_,new B.cXd(d),A.db(w,w,w,w,w,w,w,w,w,s,w,w,C.cc,w,new A.b6(A.m(14),C.X),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.cA,12)],n)
g=y.p
return A.ew(w,C.K,new A.d2(Q.Iq,A.bT(new A.C(C.wE,A.v(A.a([l,C.aO,k,C.P,j,C.dW,i,C.dW,A.B(A.a([f,C.ax,A.D(A.bT(A.aD(!1,C.a1,!0,w,A.aI(!1,A.m(14),!0,D.dQh,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc_8(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LU,C.n),C.bb),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bb),w),w,w,w,C.Kh,C.cZ,w,w,w)}}
B.br4.prototype={
nX(d,e){return e.ahS(e.a.toUpperCase())}}
B.SX.prototype={
S(){return new B.aAj(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aAj.prototype={
Z(){var x=this
x.a0()
x.rR()
x.w=A.dD(C.j2,new B.dHZ(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.T5()
this.a2()},
Zt(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LJ(u.a.c),$async$Zt)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zE(u.a.c),$async$Zt)
case 4:u.n(new s.dHm(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zt,w)},
rR(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.LJ(u.a.c),$async$rR)
case 3:t=e
x=4
return A.b(B.zE(u.a.c),$async$rR)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dHn(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LV(u.d)
B.Ay(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rR,w)},
LV(d){return this.bwf(d)},
bwf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4X(r,u.a.c),$async$LV)
case 8:p=f
if(u.c==null){x=1
break}new B.dGW(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.m_(D.m8))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.T3(r,u.a.c),$async$LV)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zE(u.a.c),$async$LV)
case 12:u.n(new o.dGX(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LV,w)},
Mh(d){return this.bCg(d)},
bCg(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4X(d,u.a.c),$async$Mh)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dH1(u,d,t))
x=6
return A.b(A.fE(new A.fx(t)),$async$Mh)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fE(new A.fx(r.toUpperCase())),$async$Mh)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mh,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.H(y.q).f.P(A.b0(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rS(d,e){return this.cuZ(d,e)},
cuZ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dHN(r,e))
u=3
x=6
return A.b(d.$0(),$async$rS)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dHO(r))
$.eI.lV()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rS,w)},
gaQQ(){var x=this.a
return x.f||x.r||x.w},
GK(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQQ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c2V(s,n,r,q,o,t),$async$GK)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fic(o,u.a.c),$async$GK)
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
return A.b(B.BV(s,o,r,q,n,t),$async$GK)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GK,w)},
Yy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amD(u.a.c),$async$Yy)
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
return A.b(A.a8(t,!1).cp(A.eD(new B.dHj(u,r,q),!1,null,y.H)),$async$Yy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yy,w)},
ZE(d){return this.ceG(d)},
ceF(){return this.ZE(1)},
ceG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ZE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQQ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amA(u.a.c),$async$ZE)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ZE,w)},
a9e(d,e,f){return this.bSl(d,e,f)},
bSl(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rS(new B.dHg(u,d,null,e,f),"Uploading\u2026"),$async$a9e)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9e,w)},
bwo(){B.h4R(!1,new B.dH_(this))
return},
cjw(){this.n(new B.dHr(this))},
auU(){var x=0,w=A.j(y.H),v=this
var $async$auU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bwo()
return A.h(null,w)}})
return A.i($async$auU,w)},
a9a(){var x=0,w=A.j(y.H),v=this
var $async$a9a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rS(new B.dH5(v),"Importing\u2026"),$async$a9a)
case 2:return A.h(null,w)}})
return A.i($async$a9a,w)},
Qo(d){return this.cus(d)},
cus(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.m_(D.m8)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cp(A.eD(new B.dHK(u,d),!1,null,y.H)),$async$Qo)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.m_(D.NO)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cp(A.eD(new B.dHL(u,d),!1,null,y.H)),$async$Qo)
case 8:x=1
break
case 7:x=u.bT2(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cp(A.eD(new B.dHM(u,d),!1,null,y.H)),$async$Qo)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qo,w)},
bT2(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.o0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cqr,C.a.aX(x,w+1).toLowerCase())},
acy(d){return this.c5Y(d)},
c5Y(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.m_(D.m8)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cp(A.eD(new B.dHh(u,d),!1,null,y.H)),$async$acy)
case 5:x=1
break
case 4:u.n(new B.dHi(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acy,w)},
PO(d){return this.cmj(d)},
cmj(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oD(t,s.c,s.f),$async$PO)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rS(new B.dHD(u,d),"Preparing QR\u2026"),$async$PO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PO,w)},
afc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dHE(),A.U(t).k("J<1,n>")).fG(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dHF(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PO(r),$async$afc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afc,w)},
af5(d){return this.clT(d)},
clT(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_6(r)
r=u.c
r.toString
x=3
return A.b(A.c2(C.K,null,new B.dHx(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$af5)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qo(d)
break
case"qr":u.PO(A.a([d],y.r))
break
case"send_my_code":u.c6z(A.a([d],y.r))
break
case"save":u.aes(d)
break
case"delete":u.Hs(d)
break}case 1:return A.h(v,w)}})
return A.i($async$af5,w)},
Vv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dH2(),A.U(t).k("J<1,n>")).fG(0)}t=u.d
s=A.U(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dH3(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oD(t,s.c,s.f),$async$Vv)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rS(new B.dH4(u,r),"Preparing file\u2026"),$async$Vv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vv,w)},
adF(d){return this.cdb(d)},
cdb(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h5A(d,!1),$async$adF)
case 3:s=f
r=s==null
q=B.a4U(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adF,w)},
acE(){var x=0,w=A.j(y.H),v=this,u
var $async$acE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fpP(u,v.a.c),$async$acE)
case 2:return A.h(null,w)}})
return A.i($async$acE,w)},
bwn(){B.h4R(!1,new B.dGZ(this,null))
return},
HH(d,e){return this.c6A(d,e)},
aWs(d){return this.HH(null,d)},
c6z(d){return this.HH(d,null)},
c6A(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a4<1>")
k=A.z(new A.a4(p,new B.dHk(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wn.c2().akp(!0,C.WF,!1),$async$HH)
case 10:r=g
if(r==null||J.cj(r.a)){x=1
break}x=11
return A.b(s.rS(new B.dHl(l,s,r),"Preparing\u2026"),$async$HH)
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
return A.b(B.bzj(p,l,e,s.a.c),$async$HH)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HH,w)},
GZ(d){return this.bS8(d)},
bS8(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hjL(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aWs(t),$async$GZ)
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
return A.b(u.rS(new B.dHe(u,d),"Receiving video\u2026"),$async$GZ)
case 11:x=1
break
case 10:x=12
return A.b(u.rS(new B.dHf(u,d),"Receiving\u2026"),$async$GZ)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GZ,w)},
D1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$D1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BP()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adF(t),$async$D1)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GZ(s),$async$D1)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cp(A.eD(new B.dHp(u),!1,null,y.N)),$async$D1)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rR(),$async$D1)
case 10:x=1
break
case 9:x=11
return A.b(u.GZ(C.a.i(r)),$async$D1)
case 11:case 1:return A.h(v,w)}})
return A.i($async$D1,w)},
aes(d){return this.ci7(d)},
ci7(d){var x=0,w=A.j(y.H),v=this
var $async$aes=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rS(new B.dHo(v,d),"Saving\u2026"),$async$aes)
case 2:return A.h(null,w)}})
return A.i($async$aes,w)},
Hs(d){return this.bEy(d)},
bEy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kP(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hs)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c2Y(t),$async$Hs)
case 6:case 5:s=d.a
x=7
return A.b(B.Dk(u.a.c,s),$async$Hs)
case 7:u.r.W(0,s)
x=8
return A.b(u.rR(),$async$Hs)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hs,w)},
afi(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_6(r)
r=u.c
r.toString
x=3
return A.b(A.c2(C.K,null,new B.dHJ(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$afi)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acE()
break
case"import":u.a9a()
break}case 1:return A.h(v,w)}})
return A.i($async$afi,w)},
c_6(d){var x=d.c
if(C.a.a_(x,"video/")||d.m_(D.m8))return C.pg
if(C.a.a_(x,"image/")||d.m_(D.NO))return C.t0
if(C.a.t(x,"pdf"))return E.Lt
return D.agD},
B(d){var x,w,v=this,u=null,t=B.a_6(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.F_,u,u,u,new B.dHU(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.byB,u,u,u,v.e?u:v.gc6g(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcjv()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.bt2:E.ah1,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Yr,u,u,u,v.e?u:v.gc_7(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nz,u,u,u,v.e?u:v.gaXx(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bAg,u,u,u,v.e?u:new B.dHV(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lo(new B.dHW(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e1(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.w,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e1(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.w,u,0,A.a([C.aB.j(A.M(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mt(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.awn(C.j6,s,!0,t,w?u:v.gcmk(),u),1)
x.push(new A.C(D.bhw,A.mC(new B.dHX(),A.B(A.a([s,C.ax,A.D(new B.awn(C.uD,"Export",!1,t,w?u:v.gbHX(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ip,u,new A.bl(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9Q(t,v.e?u:v.gaXx(),u)
else s=A.jV(!0,u,u,new B.dHY(v,t),s,u,D.bhn,u,u,!1,!1)
x.push(A.D(s,1))
return A.cd(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.awn.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.um,t,new A.b6(s,C.X),t,t,t)
return A.dq(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.db(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.um,t,new A.b6(s,C.X),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ez(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eR,t,t,t),u.r,v)}}
B.b9Q.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.mC(new B.cXa(),new A.C(E.VR,A.v(A.a([A.mC(new B.cXb(),A.p(x,A.V(C.wY,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a3(C.aw,C.aC,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eE,C.iq,x,new A.bl(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dq(C.nz,D.f6W,this.d,A.bk(C.aB,x,x,x,C.c,x,C.VM,x,new A.b6(A.m(16),C.X),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.co,C.zy,x,new A.bl(0,1,w),s),x,x,x)}}
B.a9Y.prototype={
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
if(!o||i.m_(D.m8))p=D.cWi
else{p=C.a.a_(p,"image/")||i.m_(D.NO)
n=y.O
p=p?A.a([C.cY,C.aB],n):A.a([C.aK.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a3(C.aw,C.aC,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamp()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.m_(D.m8))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.D(A.v(A.a([q,C.av,A.d(C.d.aF(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fD,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c8))
if(!(!o||i.m_(D.m8)))l.push(A.fzG(C.aB,!1,j,j,j,!1,j,j,new B.cXx(k),j,j,new A.b6(A.m(5),C.X),j,j,!1,u))
x=A.V(C.nw,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c8))
return A.mC(new B.cXy(),new A.C(C.e0,A.aD(!1,C.a1,!0,j,A.aI(!1,r,!0,new A.C(C.Vj,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b6(v,new A.ay(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cx("docshare_row_"+i.a,y.aw),new A.bl(0,1,y.X),y.i)}}
B.X7.prototype={
S(){return new B.aws()},
gd6(){return this.c}}
B.aws.prototype={
Z(){this.a0()
this.wP()},
p(){B.hk_(this.e)
this.a2()},
wP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qO(o.c,o.d),$async$wP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gai(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hk2(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hk1(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cXu(s))
x=1
break}s.n(new B.cXv(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a6(l)
if(s.c==null){x=1
break}s.n(new B.cXw(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wP,w)},
a_z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qO(t.c,t.d),$async$a_z)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.H(y.q).f.P(D.evL)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.afg(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_z)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_z,w)},
bS1(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ka(u,C.A,v,new B.cXs(w,t),C.fL,C.dq,!0,v,v,v,v)
else if(t!=null&&!C.aG.gai(t))x=A.fF(t,C.A,v,new B.cXt(w),C.fL,C.dq,!0,v,!1,v,v)
else return C.bF
return A.tP(C.aj,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_6(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Au,u,u,u,v.gb0f(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.CL
else{q=v.r
if(q!=null)t=new A.C(C.ep,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ep,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.Au,D.eSd,v.gb0f(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bS1()}return A.cd(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.X4.prototype={
S(){return new B.awp(A.ag1(),C.bw,C.bw)},
gd6(){return this.c}}
B.awp.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fq(w,A.a2(w).k("fq<1>")).hX(new B.cX7(v))
x.gcHR().hX(new B.cX8(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fq(x,A.a2(x).k("fq<1>"))}if(x==null)x=C.aWw
x.hX(new B.cX9(v))
v.wP()},
wP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qO(p.c,p.d),$async$wP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cX0(s))
x=1
break}x=8
return A.b(s.d.B2(0,new A.a1d(r,s.a.d.c)),$async$wP)
case 8:if(s.c==null){x=1
break}s.n(new B.cX1(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a6(n)
if(s.c==null){x=1
break}s.n(new B.cX2(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wP,w)},
Xv(){var x=0,w=A.j(y.H),v=this,u
var $async$Xv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$Xv)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xv)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xv,w)},
aON(d){var x=d.a
return C.a.aT(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_6(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.CL
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bu0,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LU,C.n),o,88,o,o,o,o,o,88)
t=A.md(C.aB,o,o,m,0,new B.cX3(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aON(p.w)+" / "+p.aON(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.esi,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.x7:C.iM,o,o,o,o,o)
x=A.v(A.a([u,C.kg,t,x,C.d3,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc_a(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cd(v,w,A.au(new A.C(C.uq,x,o),o,o,o),o,!1,!1,o,o)}}
B.NU.prototype={
S(){return new B.awv()},
gd6(){return this.c}}
B.awv.prototype={
Z(){this.a0()
this.NM()},
NM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fBR(o.c,o.d,new B.cXL(s)),$async$NM)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cXM(s))
x=1
break}s.e=r
q=O.hGi(r)
if(q==null){s.n(new B.cXN(s))
x=1
break}s.d=q
q.aJ(0,s.gaWg())
x=8
return A.b(q.hW(0).cJ(0,C.qg),$async$NM)
case 8:if(s.c==null){x=1
break}s.n(new B.cXO(s))
x=9
return A.b(q.p7(0),$async$NM)
case 9:q.rs(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a6(m)
if(s.c==null){x=1
break}s.n(new B.cXP(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NM,w)},
c4B(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cXQ(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BM(0,x.gaWg())
w=x.d
if(w!=null)w.p()
B.hPS(x.e)
x.a2()},
abd(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWw(u.c,u.d),$async$abd)
case 2:t=e
u=v.c
if(u!=null)u.H(y.q).f.P(A.b0(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$abd,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_6(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.oh,t,t,t,u.gc_4(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i7(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.CL
else{q=u.r
if(q!=null)s=new A.C(C.ep,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afw(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fD(x,new A.am(C.A,t,C.a9,C.q,A.a([new A.zb(s,t),A.aH(t,A.C4(A.p(t,A.V(q?H.x7:C.iM,C.c,t,t,t,48),C.h,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.c3,t,t,t),C.b9,C.a1,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cXS(u),t,t,t,t,t,t,!1,C.ad)],o),t),t)}else s=C.bF}}return A.cd(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.X9.prototype={
S(){return new B.awt(new A.co(null,y.A))}}
B.awt.prototype={
gcuJ(){var x,w,v=this.a
if(v.e!==D.P4)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aX(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcuq(){var x,w,v=this.a
if(v.e!==D.y_)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aX(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcuJ()
if(x!=null){v.OP(x)
v.e=A.dD(R.DJ,new B.cXH(v,x))}w=v.gcuq()
if(w!=null){v.OO(w)
v.f=A.dD(C.h7,new B.cXI(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OO(d){return this.cbs(d)},
cbs(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amI(d),$async$OO)
case 3:t=f
x=4
return A.b(B.c3g(d),$async$OO)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cXz(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OO,w)},
OP(d){return this.cbt(d)},
cbt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fq9(d),$async$OP)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bxh(t),$async$OP)
case 4:if(u.c==null){x=1
break}u.n(new B.cXA(u))
u.c.H(y.q).f.P(D.aIT)
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
gbWT(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc_5(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_l(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BP()){t=u.c
if(t!=null)t.H(y.q).f.P(D.eyP)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cp(A.eD(new B.cXB(),!1,null,y.N)),$async$a_l)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bxh(s),$async$a_l)
case 4:t=u.c
if(t!=null)t.H(y.q).f.P(D.aIT)
case 1:return A.h(v,w)}})
return A.i($async$a_l,w)},
a7a(d){return this.bCh(d)},
bCh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7a=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fE(new A.fx(C.d.aF(t,", "))),$async$a7a)
case 3:if(d.e!=null){t=d.H(y.q).f
t.P(A.b0(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7a,w)},
abb(d){return this.bC1(d)},
bC1(d){var x=0,w=A.j(y.H),v=this
var $async$abb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fE(new A.fx(v.a.c)),$async$abb)
case 2:if(d.e!=null)d.H(y.q).f.P(D.ewd)
return A.h(null,w)}})
return A.i($async$abb,w)},
a_g(d){return this.ci9(d)},
ci9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alM(s.d,4),$async$a_g)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rh(r,"ngmy_doc_share_qr.png"),$async$a_g)
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
return A.i($async$a_g,w)},
gaRU(){var x,w=this.a
if(w.e!==D.G7)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aX(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aX(x,13))
return null},
a77(d){return this.bCa(d)},
bCa(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a77=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRU()
if(t==null){x=1
break}x=3
return A.b(A.fE(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$a77)
case 3:if(d.e!=null)d.H(y.q).f.P(D.exP)
case 1:return A.h(v,w)}})
return A.i($async$a77,w)},
abc(){var x=0,w=A.j(y.H),v=this,u
var $async$abc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.T5(),$async$abc)
case 2:u=v.c
if(u!=null)A.a8(u,!1).M(null)
return A.h(null,w)}})
return A.i($async$abc,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_6(d),i=m.a,h=i.c
if(h.length>48)h=C.a.am(h,0,44)+"\u2026"
i=i.e
i=i!==D.G7&&i!==D.P4&&i!==D.y_
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.G7||t===D.P4||t===D.y_?l:A.aF(l,l,l,l,C.kG,l,l,l,m.gaUu(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pl(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbWT(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.G7){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lX,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc_5(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aF(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bDT,D.f_H,new B.cXC(m,d),l)],p))}if(m.a.e===D.G7&&m.gaRU()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bAB,D.eXJ,new B.cXD(m,d),l)],p))
if(m.a.e===D.y_){x=(m.w?C.dt:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.CO:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lX,l,l,l)],p))}if(m.a.e===D.P4){x=(m.r?C.dt:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.CO:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lX,l,l,l),C.ab,A.dq(D.bwr,D.f2z,m.gcix(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nX(i,A.cd(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b6,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ab,A.B(A.a([A.D(A.ez(M.At,C.Rk,new B.cXE(m,d),l),1),C.ax,A.D(A.dq(C.xs,C.a4P,new B.cXF(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a5(1/0,l,A.bL(C.yr,m.gaUu(),A.bk(C.aK,l,l,l,l,C.fQ,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cXG(),y.C)}}
B.a9W.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ci(A.v(A.a([w,C.aO,A.p(x,A.pl(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.z,x,x,x,x,C.ak)
return A.eo(A.a([A.bL(C.C7,new B.cX_(d),x)],u),x,x,C.mo,v,x,x,x,x,D.eRg,x)}}
B.X3.prototype={
S(){return new B.awo(A.yi(C.wl,C.n7,C.tb))}}
B.awo.prototype={
p(){this.d.p()
this.a2()},
aty(d){var x,w,v,u,t
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
return A.cd(A.eA(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eY8,x,x,x,1,x,!0),C.x,A.yh(this.d,C.bP,this.gatx()),x,!1,!1,x,x)}}
B.Xa.prototype={
S(){return new B.awu(A.yi(C.wl,C.n7,C.tb))},
gd6(){return this.c}}
B.awu.prototype={
bT4(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
ad0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ad0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qm("text/plain"),$async$ad0)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.H(y.q).f.P(D.eyJ)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).M(t)
case 1:return A.h(v,w)}})
return A.i($async$ad0,w)},
a7V(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7V=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h5A(p,!0),$async$a7V)
case 3:t=e
p=t==null
s=B.a4U(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.H(y.q).f.P(D.evl)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).M(s)
case 1:return A.h(v,w)}})
return A.i($async$a7V,w)},
p(){this.d.p()
this.a2()},
aty(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bT4(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).M(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahU,v,v,v,w.gbHv(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yy,v,v,v,w.gc8T(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rZ:P.Le,v,v,v,v,v),v,v,v,new B.cXK(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.f3l,v,v,v,1,v,!0)
u=A.yh(w.d,C.bP,w.gatx())
x=A.m(20)
return A.cd(t,C.x,new A.am(C.W,v,C.a9,C.q,A.a([u,A.au(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dVn],s),v),v,!1,!1,v,v)}}
B.b9R.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.o2
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.o2:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.a1,!0,r,A.aI(!1,w,!0,new A.C(C.VX,A.B(A.a([u,C.bd,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.em,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a7d.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.MM.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.Ve.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.ML.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DM.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.ce_.prototype={}
B.DL.prototype={}
B.a7c.prototype={}
B.aqX.prototype={}
B.Vf.prototype={}
var z=a.updateTypes(["aw<~>()","S(ja)","n(ja)","SX(X)","~()","X6(X)","I(I,ja)","NU(X)","~(lI)","cp(DL)","aw<ja?>(@)","SV(X)","SZ(X)","C(ja)","ja(@)","a1<n,@>(ja)","X5(X)","SW(X)","X7(X)","X4(X)","X9(X)","a9W(X)","ak<ja>()","Xa(X)","a9Y(X,I)","X3(X)","a1<n,aB>(ja)","cp(Ve)","cp(a7c)","aw<cp>(DL)"])
B.cdW.prototype={
$1(d){var x=this.a
x.x=D.aGf
x.y.K(0,D.aGf)},
$S:68}
B.cdX.prototype={
$1(d){var x=this.a
x.x=D.aGe
x.y.K(0,D.aGe)},
$S:68}
B.cdY.prototype={
$1(d){var x=this.a
x.ael(A.aLN(d.data)).bx(new B.cdV(x),y.b)},
$S:68}
B.cdV.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cdZ.prototype={
$1(d){},
$S:68}
B.ce1.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hoI(d.channel))},
$S:15}
B.ce2.prototype={
$1(d){},
$S:15}
B.ce3.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hHg(w.iceConnectionState)
x.cx=w
if($.fKm())switch(w.a){case 0:x.cy=D.aGk
break
case 1:x.cy=D.aGl
break
case 3:x.cy=D.aGm
break
case 5:x.cy=D.aGi
break
case 6:x.cy=D.aGj
break
case 7:x.cy=D.a2y
break
default:break}},
$S:147}
B.ce4.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hHh(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.ce5.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hRl(w.signalingState)},
$S:147}
B.ce6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hPE(w.connectionState)},
$S:147}
B.ce7.prototype={
$1(d){},
$S:147}
B.ce8.prototype={
$1(d){},
$S:15}
B.f4O.prototype={
$1(d){var x=y.F.a(new A.r8([],[]).oS(d.target.result,!1)),w=C.wm.t(x.objectStoreNames,"blobs")
if(!w)C.wi.Jf(x,"blobs")},
$S:181}
B.fpD.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uS.f0(this.b)
$.eI.lV()
this.c.$1(d)},
$S:456}
B.fpF.prototype={
$1(d){return this.a.$1(B.hxq(this.b,this.c))},
$S:31}
B.fpE.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fpC.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fpS.prototype={
$1(d){var x=this
return B.fWj(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fpT.prototype={
$1(d){var x=this
return B.fWj(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f67.prototype={
$1(d){var x=this
return B.c2S(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cXi.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cXf.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2S(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cXh.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2S(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cXg.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2S(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cXk.prototype={
$4(d,e,f,g){var x=null
return A.ju(A.B(A.a([A.aF(x,x,x,x,D.bv4,x,x,x,new B.cXj(d),x,x,x,x,x,x),A.D(A.Dz(D.Nz,!0,x,C.XD,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nz,x,g,C.adY,0,e,f)},
$C:"$4",
$R:4,
$S:439}
B.cXj.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.f86.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.es,y.o).w,t=this.a,s=t?C.hx:C.c,r=A.m(28),q=A.p(v,D.bbV,C.h,v,v,D.aSi,v,v,v,v,D.adP,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.X),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bz9,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ah,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.zO,A.v(A.a([o,C.ab,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b3(4,A.m(16),C.X),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ai8,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ah,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.B(A.a([A.D(A.dV(C.df,new B.f84(d),v),1),C.ax,A.D(A.bL(D.eWM,new B.f85(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JX,v,v,v,v),v)},
$S:59}
B.f84.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.f85.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.H(y.q).f.P(D.ews)
return}x=w.b.a.a
A.a8(w.c,!1).M(new B.ayV(v,x))},
$S:0}
B.f8A.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.es,y.o).w,u=x.a,t=u?C.hx:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bbK,C.h,w,w,D.aTF,w,w,w,w,D.adP,w,w,1/0),new A.C(C.zO,A.v(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fGH(u,"Organization name",C.El,w),C.z,!0,w,!0,w,!1,w,C.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fGH(u,"Access code",C.mF,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fGH(u,"Member password",N.EV,w),C.z,!0,w,!0,w,!1,w,C.ah,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bL(D.f3p,new B.f8z(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fQ,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JX,w,w,w,w),w)},
$S:59}
B.f8z.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.H(y.q).f.P(D.ewx)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).M(new B.aC2(u,x,w))},
$S:0}
B.c2J.prototype={
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
p=C.a.a_(j,"http")?A.cr(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.uC(p,null).cJ(0,C.UX),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cm(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Az(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c2P.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2Q.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c2R.prototype={
$1(d){return d.b},
$S:z+2}
B.c2L.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2M.prototype={
$1(d){return d.b},
$S:z+2}
B.c2K.prototype={
$1(d){return A.a_(y.f.a(d),y.N,y.z)},
$S:12}
B.c2N.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c2O.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fpQ.prototype={
$1(d){return new B.SV(this.a,null)},
$S:z+11}
B.fpR.prototype={
$1(d){return new B.SZ(this.a,this.b,this.c,null)},
$S:z+12}
B.dGS.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dI0.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dI1.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dI2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dI_(x,d))},
$S:2}
B.dI_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dI3.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dI4.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dI5.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dI6.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dI7.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dI8.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dIb.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dI9.prototype={
$1(d){var x=this.a
return x.f?null:x.Xu()},
$S:2}
B.dIa.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.m_(D.NO))s=C.t0
else s=C.a.a_(s,"video/")||d.m_(D.m8)?C.pg:D.agD
x=this.b.a
w=y.p
return new A.C(C.kY,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.ax,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamp(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dGT.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dGU.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c2T.prototype={
$2(d,e){return new A.br(J.k(d),J.k(e),y.M)},
$S:89}
B.c2U.prototype={
$2(d,e){return new A.br(J.k(d),J.k(e),y.M)},
$S:89}
B.fqq.prototype={
$2(d,e){return e===this.a},
$S:295}
B.f20.prototype={
$1(d){return J.k(d)},
$S:17}
B.f6j.prototype={
$1(d){var x=this.b
B.hvx(C.E8.ga3L(this.a)).bx(x.gcxD(x),y.H)},
$S:120}
B.f6k.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f6l.prototype={
$0(){return null},
$S:11}
B.c37.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f6m.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a_(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aR(p.h(0,"sizeBytes"))
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
B.fag.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f5_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f50.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c3c.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m8)},
$S:z+1}
B.ful.prototype={
$1(d){return new B.X5(this.a,null)},
$S:z+16}
B.cXe.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fu()},
$S:8}
B.cXc.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).M(x)
return null},
$S:2}
B.cXd.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.dHZ.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zt()},
$S:13}
B.dHm.prototype={
$0(){var x=J.bAl(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dHn.prototype={
$0(){var x=J.bAl(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGW.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dGV(this.b))
if(w>=0){x=x.d
x[w]=x[w].aA8(this.c)}},
$S:0}
B.dGV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGX.prototype={
$0(){var x=J.bAl(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dH1.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dH0(this.b))
if(w>=0){x=x.d
x[w]=x[w].aA8(this.c)}},
$S:0}
B.dH0.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHN.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dHO.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dHj.prototype={
$1(d){return new B.SW(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dHg.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GK(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.T_(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rR(),$async$$0)
case 5:s=J.a7(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.ZE(s.gJ(t)),$async$$0)
case 8:case 7:r.hM(s.gai(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH_.prototype={
$1(d){this.a.a9e(d,"No files selected.","Added")},
$S:456}
B.dHr.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.J(x,new B.dHq(),A.U(x).k("J<1,n>")))},
$S:0}
B.dHq.prototype={
$1(d){return d.a},
$S:z+2}
B.dH5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wn.c2().cJL(C.WF,!0),$async$$0)
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
return A.b(B.amH(null,m,o.a.c),$async$$0)
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
B.dHK.prototype={
$1(d){return new B.NU(this.a.a.c,this.b,null)},
$S:z+7}
B.dHL.prototype={
$1(d){return new B.X7(this.a.a.c,this.b,null)},
$S:z+18}
B.dHM.prototype={
$1(d){return new B.X4(this.a.a.c,this.b,null)},
$S:z+19}
B.dHh.prototype={
$1(d){return new B.NU(this.a.a.c,this.b,null)},
$S:z+7}
B.dHi.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dHD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GK(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4W(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ceF(),$async$$0)
case 5:x=6
return A.b(p.rR(),$async$$0)
case 6:r=A.U(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dHz(p),r),new B.dHA(),r.k("J<ai.E,n>")).bZ(0,new B.dHB())
q=A.z(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cp(A.eD(new B.dHC(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.T5(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHz.prototype={
$1(d){var x=this.a,w=C.d.bi(x.d,new B.dHy(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dHy.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dHA.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dHB.prototype={
$1(d){return d.length!==0},
$S:3}
B.dHC.prototype={
$1(d){var x=this.a
return new B.X9(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dHE.prototype={
$1(d){return d.a},
$S:z+2}
B.dHF.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dHx.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.au(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kw,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamp(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.m_(D.m8)?C.t2:C.of
p=!x||p.m_(D.m8)?"Play video":"View"
return A.bT(A.bq(!0,new A.C(C.zK,A.v(A.a([q,o,t,C.ay,B.X8(!1,u,!1,w,p,new B.dHs(d),v),B.X8(!1,u,!1,C.j6,"Share via QR",new B.dHt(d),"Letters/numbers QR code"),B.X8(!1,u,!1,D.XI,"Send to their Code",new B.dHu(d),"Enter someone else's personal code"),B.X8(!1,u,!1,C.hq,"Download / save",new B.dHv(d),v),C.ar,B.X8(!1,u,!0,C.e6,"Delete",new B.dHw(d),v)],y.p),C.ag,v,C.e,C.Q,0,C.p),v),!0,!1,C.aj,!0,!0),new A.o(s,v,new A.c1(new A.ay(r,1,C.r,-1),C.X,C.X,C.X),C.km,v,v,C.n),C.bb)},
$S:740}
B.dHs.prototype={
$0(){A.a8(this.a,!1).M("view")
return null},
$S:0}
B.dHt.prototype={
$0(){A.a8(this.a,!1).M("qr")
return null},
$S:0}
B.dHu.prototype={
$0(){A.a8(this.a,!1).M("send_my_code")
return null},
$S:0}
B.dHv.prototype={
$0(){A.a8(this.a,!1).M("save")
return null},
$S:0}
B.dHw.prototype={
$0(){A.a8(this.a,!1).M("delete")
return null},
$S:0}
B.dH2.prototype={
$1(d){return d.a},
$S:z+2}
B.dH3.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dH4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4Y(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.F8(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oC(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGZ.prototype={
$1(d){var x=this.a
x.rS(new B.dGY(x,d,this.b),"Preparing\u2026")},
$S:456}
B.dGY.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.T_(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cj(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bzj(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHk.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dHl.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fBU(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.F5(new B.dHa(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dHb(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dHc(s))
case 5:x=8
return A.b(r.b.i0(0,C.DF,new B.dHd()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gai(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rR(),$async$$0)
case 9:s.hM("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHa.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dH7(x,d,e))},
$S:138}
B.dH7.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dHb.prototype={
$1(d){return new B.a9W(this.a.a,null)},
$S:z+21}
B.dHc.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dHd.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dHf.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GY(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4M(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aWs(B.GY(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amH(new B.dH8(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cj(r)){if(B.fBT(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rR(),$async$$0)
case 10:o=J.cA(r)
p=o.eE(r,new B.dH9()).gJ(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH8.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dH6(x,d,e))},
$S:138}
B.dH6.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dH9.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m8)},
$S:z+1}
B.dHp.prototype={
$1(d){return new B.Xa(this.a.a.c,null)},
$S:z+23}
B.dHo.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWw(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dHJ.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bT(A.bq(!0,new A.C(C.zK,A.v(A.a([A.au(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kw,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.X8(!0,w,!1,C.mF,"My Code",new B.dHG(d),"Your personal code & QR \u2014 others send docs to you"),B.X8(!1,w,!1,D.XI,"Send to their Code",new B.dHH(this.a,d),"Enter someone else's 5-digit code + letter"),B.X8(!1,w,!1,S.xh,"Import backup",new B.dHI(d),".ngmydoc file from another device")],y.p),C.ag,x,C.e,C.Q,0,C.p),x),!0,!1,C.aj,!0,!0),new A.o(u,x,new A.c1(new A.ay(t,1,C.r,-1),C.X,C.X,C.X),C.km,x,x,C.n),C.bb)},
$S:740}
B.dHG.prototype={
$0(){A.a8(this.a,!1).M("my_code")
return null},
$S:0}
B.dHH.prototype={
$0(){A.a8(this.b,!1).M(null)
this.a.bwn()},
$S:0}
B.dHI.prototype={
$0(){A.a8(this.a,!1).M("import")
return null},
$S:0}
B.dHW.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.H6(D.Nz,x,C.XD,g,e,32),C.ax,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cK(C.d.gL(D.Nz).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:555}
B.dHU.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.dHV.prototype={
$0(){this.a.afi()
return null},
$S:0}
B.dHX.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dHY.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.a9Y(e,w,v,this.b,x.e,x.c_6(w),new B.dHQ(x,w),new B.dHR(x,v,w),new B.dHS(x,w),new B.dHT(x,w),null)},
$S:z+24}
B.dHQ.prototype={
$0(){this.a.acy(this.b)
return null},
$S:0}
B.dHR.prototype={
$0(){var x=this.a
return x.n(new B.dHP(x,this.b,this.c))},
$S:0}
B.dHP.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dHS.prototype={
$0(){this.a.Mh(this.b)
return null},
$S:0}
B.dHT.prototype={
$0(){this.a.af5(this.b)
return null},
$S:0}
B.cXa.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.cXb.prototype={
$3(d,e,f){return A.e5(C.A,f,e,null,null)},
$S:136}
B.cXy.prototype={
$3(d,e,f){return A.d8(A.dP(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.cXx.prototype={
$1(d){return this.a.y.$0()},
$S:78}
B.cXu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cXv.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cXw.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cXs.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gai(w))return A.fF(w,C.A,x,new B.cXq(this.a),C.fL,C.dq,!0,x,!1,x,x)
$.aT.x1$.push(new B.cXr(this.a))
return C.bF},
$S:140}
B.cXq.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXo(this.a))
return C.bF},
$S:187}
B.cXo.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXl(x))},
$S:8}
B.cXl.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXr.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXn(x))},
$S:8}
B.cXn.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cXt.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cXp(this.a))
return C.bF},
$S:187}
B.cXp.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cXm(x))},
$S:8}
B.cXm.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cX7.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cX6(x,d))},
$S:1737}
B.cX6.prototype={
$0(){return this.a.f=this.b===C.tz},
$S:0}
B.cX8.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cX5(x,d))},
$S:8}
B.cX5.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cX9.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cX4(x,d))},
$S:8}
B.cX4.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cX0.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cX1.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cX2.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cX3.prototype={
$1(d){return this.a.d.Lj(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cXL.prototype={
$0(){var x=this.a.a
return B.qO(x.c,x.d)},
$S:1738}
B.cXM.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cXN.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cXO.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cXP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cXQ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cXS.prototype={
$0(){var x=this.a
x.n(new B.cXR(x))},
$S:0}
B.cXR.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.p7(0)},
$S:0}
B.cXH.prototype={
$1(d){return this.a.OP(this.b)},
$S:13}
B.cXI.prototype={
$1(d){return this.a.OO(this.b)},
$S:13}
B.cXz.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cXA.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cXB.prototype={
$1(d){return D.fgH},
$S:z+25}
B.cXG.prototype={
$2(d,e){if(d)B.T5()},
$S:114}
B.cXC.prototype={
$0(){return this.a.a7a(this.b)},
$S:0}
B.cXD.prototype={
$0(){return this.a.a77(this.b)},
$S:0}
B.cXE.prototype={
$0(){return this.a.abb(this.b)},
$S:0}
B.cXF.prototype={
$0(){return this.a.a_g(this.b)},
$S:0}
B.cX_.prototype={
$0(){A.a8(this.a,!1).M(null)
return null},
$S:0}
B.cXK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pb(),$async$$0)
case 2:u.n(new B.cXJ(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cXJ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c3e.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m_(D.m8)},
$S:z+1}
B.c3f.prototype={
$1(d){var x=d.b,w=A.ae("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c3d.prototype={
$2(d,e){return this.be1(d,e)},
be1(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.T6(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1739}
B.f9U.prototype={
$1(d){if(d===D.a2x&&(this.a.a.a&30)===0)this.a.fC(0)},
$S:z+27}
B.f9V.prototype={
$0(){},
$S:11}
B.fao.prototype={
bfA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f_a(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fRx(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfA(d,e)},
$S:735}
B.fan.prototype={
$1(d){var x=this
d.b=new B.fam(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fam.prototype={
$1(d){return this.bfz(d)},
bfz(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWx(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aE(0,n,null)
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
return A.b(B.f_a(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a4V(m),$async$$1)
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
x(v=B.awr.prototype,"gc5U","Oq",0)
x(v,"gc6K","HI",0)
x(v,"gc6f","wY",0)
x(v=B.aAh.prototype,"gc_0","ab9",0)
x(v,"gc_1","Xt",0)
x(v,"gckT","aeO",0)
x(v=B.aAk.prototype,"gc_2","Xu",0)
x(v,"gckU","a_A",0)
x(B.aAi.prototype,"gc_3","aba",0)
x(B.awq.prototype,"gc_8","c_9",4)
x(v=B.aAj.prototype,"gc6g","Yy",0)
x(v,"gcjv","cjw",4)
x(v,"gaXx","auU",0)
x(v,"gcmk","afc",0)
x(v,"gbHX","Vv",0)
x(v,"gc_7","D1",0)
x(B.aws.prototype,"gb0f","a_z",0)
x(B.awp.prototype,"gc_a","Xv",0)
x(v=B.awv.prototype,"gaWg","c4B",4)
x(v,"gc_4","abd",0)
x(v=B.awt.prototype,"gcix","a_l",0)
x(v,"gaUu","abc",0)
w(B.awo.prototype,"gatx","aty",8)
x(v=B.awu.prototype,"gc8T","ad0",0)
x(v,"gbHv","a7V",0)
w(v,"gatx","aty",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.ce_,B.a7c,B.aqX,B.ayV,B.aC2,B.ja,B.a9E,B.brp,B.DL,B.Vf])
w(B.ce0,B.ce_)
w(B.b0D,B.a7c)
x(A.i3,[B.cdW,B.cdX,B.cdY,B.cdV,B.cdZ,B.ce1,B.ce2,B.ce3,B.ce4,B.ce5,B.ce6,B.ce7,B.ce8,B.f4O,B.fpD,B.fpF,B.fpE,B.fpS,B.fpT,B.f67,B.cXf,B.cXh,B.cXg,B.cXk,B.f86,B.f8A,B.c2J,B.c2Q,B.c2R,B.c2M,B.c2K,B.c2N,B.c2O,B.fpQ,B.fpR,B.dI2,B.dIb,B.dI9,B.dIa,B.f20,B.f6j,B.f6k,B.c37,B.f6m,B.fag,B.f5_,B.f50,B.c3c,B.ful,B.cXe,B.cXc,B.dHZ,B.dGV,B.dH0,B.dHj,B.dH_,B.dHq,B.dHK,B.dHL,B.dHM,B.dHh,B.dHz,B.dHy,B.dHA,B.dHB,B.dHC,B.dHE,B.dHF,B.dHx,B.dH2,B.dH3,B.dGZ,B.dHk,B.dHb,B.dH9,B.dHp,B.dHJ,B.dHW,B.dHX,B.cXa,B.cXb,B.cXy,B.cXx,B.cXs,B.cXq,B.cXo,B.cXr,B.cXt,B.cXp,B.cX7,B.cX8,B.cX9,B.cX3,B.cXH,B.cXI,B.cXB,B.c3e,B.c3f,B.f9U,B.fan,B.fam])
w(B.b0E,B.aqX)
x(A.jl,[B.fpC,B.cXi,B.cXj,B.f84,B.f85,B.f8z,B.dGS,B.dI0,B.dI1,B.dI_,B.dI3,B.dI4,B.dI5,B.dI6,B.dI7,B.dI8,B.dGT,B.dGU,B.f6l,B.cXd,B.dHm,B.dHn,B.dGW,B.dGX,B.dH1,B.dHN,B.dHO,B.dHg,B.dHr,B.dH5,B.dHi,B.dHD,B.dHs,B.dHt,B.dHu,B.dHv,B.dHw,B.dH4,B.dGY,B.dHl,B.dHe,B.dH7,B.dHc,B.dHd,B.dHf,B.dH6,B.dHo,B.dHG,B.dHH,B.dHI,B.dHU,B.dHV,B.dHQ,B.dHR,B.dHP,B.dHS,B.dHT,B.cXu,B.cXv,B.cXw,B.cXl,B.cXn,B.cXm,B.cX6,B.cX5,B.cX4,B.cX0,B.cX1,B.cX2,B.cXL,B.cXM,B.cXN,B.cXO,B.cXP,B.cXQ,B.cXS,B.cXR,B.cXz,B.cXA,B.cXC,B.cXD,B.cXE,B.cXF,B.cX_,B.cXK,B.cXJ,B.f9V])
x(A.mf,[B.a9X,B.LK,B.a7d,B.MM,B.Ve,B.ML,B.DM])
x(A.af,[B.X6,B.SV,B.SZ,B.SW,B.X5,B.SX,B.X7,B.X4,B.NU,B.X9,B.X3,B.Xa])
x(A.ag,[B.awr,B.aAh,B.aAk,B.aAi,B.awq,B.aAj,B.aws,B.awp,B.awv,B.awt,B.awo,B.awu])
x(A.at,[B.aao,B.awn,B.b9Q,B.a9Y,B.a9W,B.b9R])
x(A.kz,[B.c2P,B.c2L,B.c2T,B.c2U,B.fqq,B.dHa,B.dH8,B.dHY,B.cXG,B.c3d,B.fao])
x(A.iJ,[B.bf8,B.br4])})()
A.kf(b.typeUniverse,JSON.parse('{"b0D":{"a7c":[]},"b0E":{"aqX":[]},"X6":{"af":[],"r":[]},"awr":{"ag":["X6"]},"aao":{"at":[],"r":[]},"SV":{"af":[],"r":[]},"SZ":{"af":[],"r":[]},"aAh":{"ag":["SV"]},"aAk":{"ag":["SZ"]},"bf8":{"iJ":[]},"SW":{"af":[],"r":[]},"aAi":{"ag":["SW"]},"X5":{"af":[],"r":[]},"SX":{"af":[],"r":[]},"a9Y":{"at":[],"r":[]},"X7":{"af":[],"r":[]},"X4":{"af":[],"r":[]},"NU":{"af":[],"r":[]},"X9":{"af":[],"r":[]},"a9W":{"at":[],"r":[]},"X3":{"af":[],"r":[]},"Xa":{"af":[],"r":[]},"awq":{"ag":["X5"]},"br4":{"iJ":[]},"aAj":{"ag":["SX"]},"awn":{"at":[],"r":[]},"b9Q":{"at":[],"r":[]},"aws":{"ag":["X7"]},"awp":{"ag":["X4"]},"awv":{"ag":["NU"]},"awt":{"ag":["X9"]},"awo":{"ag":["X3"]},"awu":{"ag":["Xa"]},"b9R":{"at":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("ty"),k:x("Kg()"),m:x("bs<n,n>"),F:x("qr"),g:x("aw<ja?>"),x:x("aw<~>"),V:x("P<ab>"),O:x("P<x>"),W:x("P<bf>"),Y:x("P<a1<n,S>>"),t:x("P<a1<n,@>>"),r:x("P<ja>"),w:x("P<+file,name(li,n)>"),u:x("P<cK>"),s:x("P<n>"),E:x("P<iJ>"),a:x("P<dz>"),p:x("P<r>"),Z:x("P<I>"),G:x("bf"),A:x("co<ag<af>>"),n:x("ak<ja>"),j:x("ak<@>"),I:x("ak<I>"),M:x("br<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iE"),e:x("hV9"),af:x("D2"),U:x("ja"),b:x("cp"),C:x("aB"),aK:x("vn"),ab:x("DL"),br:x("aqX"),v:x("Vf"),N:x("n"),X:x("bl<O>"),Q:x("lu"),D:x("dz"),aw:x("cx<n>"),cd:x("a4<a1<n,@>>"),c7:x("r"),ch:x("bP<ak<ja>>"),aW:x("bP<dz?>"),aY:x("bP<~>"),cx:x("a9X"),b1:x("be<ak<ja>>"),cf:x("be<dz?>"),d4:x("be<~>"),c4:x("ayV"),bG:x("aC2"),q:x("mE"),B:x("oT<DL>"),c6:x("oT<a7d>"),y:x("S"),i:x("O"),z:x("@"),S:x("I"),aQ:x("bf?"),_:x("ak<ja>?"),aL:x("ak<@>?"),h:x("a1<n,@>?"),l:x("ja?"),R:x("aB?"),c:x("Vf?"),d:x("+answerQr,transfer(n,aw<ak<ja>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,LK,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9E?"),bk:x("ayV?"),ag:x("aC2?"),dd:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aQG=new A.ay(C.aB,2,C.r,-1)
D.bHo=new A.a3(C.a3,C.a7,C.w,C.ZC,null,null)
D.aSi=new A.o(null,null,null,C.ml,null,D.bHo,C.n)
D.aTF=new A.o(null,null,null,C.ml,null,E.F6,C.n)
D.a8i=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a9g=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9Y=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.abj=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eS7=new A.w("Your team portal",null,C.dQ,null,null,null,null,null,null,null,null,null)
D.f4g=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.Hp,null,null,null,null,null,null,null,null,null)
D.cP6=x([D.eS7,C.ar,D.f4g],y.p)
D.bbC=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.cP6,null)
D.f8c=new A.w("Create your organization",null,C.hg,null,null,null,null,null,null,null,null,null)
D.eW5=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Hp,null,null,null,null,null,null,null,null,null)
D.d1U=x([D.f8c,C.ar,D.eW5],y.p)
D.bbK=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d1U,null)
D.f4O=new A.w("Team Member sign-in",null,C.hg,null,null,null,null,null,null,null,null,null)
D.eZA=new A.w("Enter the access code and password from your organization.",null,G.Hp,null,null,null,null,null,null,null,null,null)
D.d01=x([D.f4O,C.ar,D.eZA],y.p)
D.bbV=new A.fm(C.ak,C.e,C.j,C.F,null,C.p,null,0,D.d01,null)
D.bhn=new A.N(16,10,16,28)
D.bhw=new A.N(16,14,16,4)
D.biK=new A.N(20,0,20,16)
D.bjf=new A.N(20,8,20,16)
D.adP=new A.N(24,22,24,20)
D.XI=new A.a0(63394,"MaterialIcons",!1)
D.agD=new A.a0(63515,"MaterialIcons",!1)
D.bt2=new A.a0(983813,"MaterialIcons",!1)
D.bqj=new A.a0(62867,"MaterialIcons",!1)
D.bu0=new A.ad(D.bqj,44,C.c,null,null,null)
D.bv4=new A.ad(C.rV,null,C.af,null,null,null)
D.bwr=new A.ad(C.iN,18,null,null,null,null)
D.by5=new A.ad(D.XI,26,C.c,null,null,null)
D.byB=new A.ad(C.EL,null,null,null,null,null)
D.bz9=new A.ad(C.xj,null,null,null,null,null)
D.bAg=new A.ad(W.Lr,null,null,null,null,null)
D.bAB=new A.ad(C.hb,16,null,null,null,null)
D.bDT=new A.ad(C.qr,16,null,null,null,null)
D.bui=new A.ad(C.mF,null,null,null,null,null)
D.bEK=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bui,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bzH=new A.ad(C.El,null,null,null,null,null)
D.bEO=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bzH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.buC=new A.ad(N.EV,null,null,null,null,null)
D.bEY=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.buC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cqW=x([C.f3,C.aW,C.aB],y.O)
D.bJk=new A.a3(C.aw,C.aC,C.w,D.cqW,null,null)
D.cqr=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nz=x([C.f3,C.aB],y.O)
D.NO=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m8=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cWi=x([C.oQ,C.aB],y.O)
D.dKW={iceServers:0}
D.aB6={urls:0}
D.d5t=new A.bs(D.aB6,["stun:stun.l.google.com:19302"],y.m)
D.d5s=new A.bs(D.aB6,["stun:stun1.l.google.com:19302"],y.m)
D.cGa=x([D.d5t,D.d5s],A.az("P<a1<n,n>>"))
D.d4O=new A.bs(D.dKW,[D.cGa],A.az("bs<n,@>"))
D.G7=new B.LK(0,"lanDirect")
D.P3=new B.LK(1,"cloudStash")
D.dga=new B.LK(2,"inlineInstant")
D.P4=new B.LK(3,"webrtcLink")
D.y_=new B.LK(4,"videoCloud")
D.f4f=new A.w("Receive file",null,C.mX,null,null,null,null,null,null,null,null,null)
D.cgE=x([E.aih,C.aa,D.f4f],y.p)
D.eoI=new A.cC(C.b0,C.b6,C.j,C.m,null,C.p,null,0,D.cgE,null)
D.dQh=new A.C(C.cc,D.eoI,null)
D.eJz=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a_d,null,null,null)
D.eSD=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eJz,null,C.L,null,null,null,null,null,null,null)
D.dPD=new A.C(C.zR,D.eSD,null)
D.aXF=new A.cw(C.A,null,null,D.dPD,null)
D.dVn=new A.cG(0,null,0,28,null,null,D.aXF,null)
D.dVF=new B.a7d(0,"RTCDataChannelConnecting")
D.aGe=new B.a7d(1,"RTCDataChannelOpen")
D.aGf=new B.a7d(3,"RTCDataChannelClosed")
D.dVG=new B.DM(0,"RTCIceConnectionStateNew")
D.dVH=new B.DM(1,"RTCIceConnectionStateChecking")
D.dVI=new B.DM(2,"RTCIceConnectionStateCompleted")
D.dVJ=new B.DM(3,"RTCIceConnectionStateConnected")
D.dVK=new B.DM(4,"RTCIceConnectionStateCount")
D.dVL=new B.DM(5,"RTCIceConnectionStateFailed")
D.dVM=new B.DM(6,"RTCIceConnectionStateDisconnected")
D.aGg=new B.DM(7,"RTCIceConnectionStateClosed")
D.aGh=new B.Ve(0,"RTCIceGatheringStateNew")
D.dVN=new B.Ve(1,"RTCIceGatheringStateGathering")
D.a2x=new B.Ve(2,"RTCIceGatheringStateComplete")
D.a2y=new B.ML(0,"RTCPeerConnectionStateClosed")
D.aGi=new B.ML(1,"RTCPeerConnectionStateFailed")
D.aGj=new B.ML(2,"RTCPeerConnectionStateDisconnected")
D.aGk=new B.ML(3,"RTCPeerConnectionStateNew")
D.aGl=new B.ML(4,"RTCPeerConnectionStateConnecting")
D.aGm=new B.ML(5,"RTCPeerConnectionStateConnected")
D.dVO=new B.MM(0,"RTCSignalingStateStable")
D.dVP=new B.MM(1,"RTCSignalingStateHaveLocalOffer")
D.dVQ=new B.MM(2,"RTCSignalingStateHaveRemoteOffer")
D.dVR=new B.MM(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dVS=new B.MM(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aGn=new B.MM(5,"RTCSignalingStateClosed")
D.esi=new A.ar(160,48)
D.aYO=new A.fd(2,null,null,null,null,C.aB,null,null,null,null)
D.etM=new A.a5(16,16,D.aYO,null)
D.eVx=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.evb=new A.b_(D.eVx,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f1l=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eve=new A.b_(D.f1l,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f9c=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.evl=new A.b_(D.f9c,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVa=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.evL=new A.b_(D.eVa,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f4X=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aIT=new A.b_(D.f4X,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f6d=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ewd=new A.b_(D.f6d,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.faw=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ews=new A.b_(D.faw,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f8E=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ewx=new A.b_(D.f8E,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f9N=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.exi=new A.b_(D.f9N,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eTT=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.exP=new A.b_(D.eTT,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f31=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ey9=new A.b_(D.f31,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXz=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eyF=new A.b_(D.eXz,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.faC=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eyJ=new A.b_(D.faC,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eU8=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eyP=new A.b_(D.eU8,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eSX=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ez3=new A.b_(D.eSX,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQ4=new A.w("NGMY DOC SHARE",null,C.aK8,null,null,null,null,null,null,null,null,null)
D.eRg=new A.w("Show this to sender",null,C.ki,null,null,null,null,null,null,null,null,null)
D.eSd=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eWs=new A.w("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eWM=new A.w("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eY8=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f_H=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new A.w("Send to their Doc Share",null,C.mW,null,null,null,null,null,null,null,null,null)
D.f2z=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f2R=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.f3l=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.f3p=new A.w("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.f3M=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eR,null,null,null,null,null,null,null,null,null)
D.f6E=new A.w("Share files & videos\nwith a scan.",null,C.aK9,null,null,null,null,null,null,null,null,null)
D.f6W=new A.w("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fgH=new B.X3(null)
D.a5s=new B.a9X(0,"docShare")
D.a5t=new B.a9X(1,"gate")
D.RO=new B.a9X(2,"gateNoIndividual")})();(function staticFields(){$.aKD=null
$.eY0=function(){var x=y.N
return A.T(x,x)}()
$.ET=A.T(y.N,y.D)
$.adT=A.T(y.N,A.az("li"))
$.P9=A.T(y.N,y.D)
$.eYx=A.T(y.N,A.az("a9E"))
$.c36=A.T(y.S,A.az("brp"))
$.fRw=1
$.hDc=null
$.hDb=null
$.huZ=null
$.fGT=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hVE","h7o",()=>new B.ce0())
x($,"hTz","fKm",()=>C.a.t(A.bp(A.bp(A.bp(A.Fr(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["pZ8gir3LuqS/glA/t3PL9s7XQVY="]=a.current})($__dart_deferred_initializers__);