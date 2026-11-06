((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cjr:function cjr(){},
hHq(d){var x=null,w=new B.b3m(d,D.ehY,new A.pn(x,x,y.c6),new A.pn(x,x,y.B))
w.bxC(d)
return w},
b3m:function b3m(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cjm:function cjm(d){this.a=d},
cjn:function cjn(d){this.a=d},
cjo:function cjo(d){this.a=d},
cjl:function cjl(d){this.a=d},
cjp:function cjp(d){this.a=d},
hHr(d,e){var x=y.N
x=new B.b3n(d,e,A.U(x,y.e),A.U(x,y.z))
x.bxD(d,e)
return x},
b3n:function b3n(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cjs:function cjs(d){this.a=d},
cjt:function cjt(d){this.a=d},
cju:function cju(d){this.a=d},
cjv:function cjv(d){this.a=d},
cjw:function cjw(d){this.a=d},
cjx:function cjx(d){this.a=d},
cjy:function cjy(d){this.a=d},
cjz:function cjz(d){this.a=d},
fY9(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yI.LW(x,"ngmy_doc_share_v1",new B.fij(),1)},
hO_(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.A7(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cF.aK(d)
return x}catch(w){return v}return v},
R_(d,e){return B.i2f(d,e)},
i2f(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fY9():o,$async$R_)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mG(s,"blobs","readwrite")
C.iP.mi(J.mF(q,"blobs"),r,d)
x=8
return A.b(J.px(q),$async$R_)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.u(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R_,w)},
QZ(d){return B.i2e(d)},
i2e(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fY9():o,$async$QZ)
case 7:s=f
r=J.mG(s,"blobs","readonly")
x=8
return A.b(C.iP.zt(J.mF(r,"blobs"),d),$async$QZ)
case 8:q=f
x=9
return A.b(J.px(r),$async$QZ)
case 9:o=B.hO_(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QZ,w)},
agB(d){return B.i2d(d)},
i2d(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMZ
x=7
return A.b(p==null?$.aMZ=B.fY9():p,$async$agB)
case 7:s=f
r=J.mG(s,"blobs","readwrite")
C.iP.FK(J.mF(r,"blobs"),d)
x=8
return A.b(J.px(r),$async$agB)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.u(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agB,w)},
fij:function fij(){},
hQj(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnD(w,v))}return u},
hne(d,e){var x,w={},v=A.aVq("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fG7(w,v,e)
C.w3.yp(v,"change",new B.fG9(w,v,!1))
C.w3.yp(v,"cancel",new B.fG8(w))
$.eQ.mp()
v.click()
A.bM(C.ah1,new B.fG6(w),y.H)},
fG7:function fG7(d,e,f){this.a=d
this.b=e
this.c=f},
fG9:function fG9(d,e,f){this.a=d
this.b=e
this.c=f},
fG8:function fG8(d){this.a=d},
fG6:function fG6(d){this.a=d},
CY(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CY=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTB()?3:4
break
case 3:x=5
return A.b(B.hil(e,d,s,!0,!1,f,g,h,!1,i),$async$CY)
case 5:x=1
break
case 4:x=6
return A.b(B.QF(d,s,f,g,h,i),$async$CY)
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
return A.b(B.Io(s,d),$async$CY)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fdW(s,d),$async$CY)
case 14:x=12
return A.b(r.hil(q,p,o,n,m,l,k,j,a1,i),$async$CY)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cm(A.e9(new B.fGm(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cm(A.e9(new B.fGn(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CY,w)},
QF(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QF=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ6(e),$async$QF)
case 3:u=k
x=4
return A.b(B.aoN(d,e,!1),$async$QF)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Io(e,d),$async$QF)
case 7:if(k){v=D.a9y
x=1
break}x=8
return A.b(B.UH(e),$async$QF)
case 8:v=t?D.UD:D.a9z
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZ4(d,e)){v=D.a9y
x=1
break}x=11
return A.b(B.UH(e),$async$QF)
case 11:v=t?D.UD:D.a9z
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fTh(d,e)){v=D.a9y
x=1
break}x=14
return A.b(B.UH(e),$async$QF)
case 14:v=D.UD
x=1
break
case 13:v=t?D.UD:D.a9z
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QF,w)},
fdW(d,e){var x=0,w=A.j(y.y),v
var $async$fdW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZ4(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZ6(d),$async$fdW)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdW,w)},
hil(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cm(A.e9(new B.fkx(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hds(d,e,f,g,h,i,j){return new B.YN(e,j,d,g,h,i,f,null)},
fmt(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fmt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fmw(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fmt)
case 3:r=f
t.R$=u
t.P$=0
s.R$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmt,w)},
fmY(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fmY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fn_(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fmY)
case 3:q=f
t.R$=u
t.P$=0
s.R$=u
s.P$=0
r.R$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmY,w)},
fYi(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.br(x,new A.b3(4,A.n(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fyI(d,e){var x=0,w=A.j(y.H),v
var $async$fyI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UH(e),$async$fyI)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eE()
case 1:return A.h(v,w)}})
return A.i($async$fyI,w)},
fGm:function fGm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGn:function fGn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abT:function abT(d,e){this.a=d
this.b=e},
fkx:function fkx(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YN:function YN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayP:function ayP(){this.c=this.a=this.d=null},
d2N:function d2N(d,e){this.a=d
this.b=e},
d2K:function d2K(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2P:function d2P(){},
d2O:function d2O(d){this.a=d},
ack:function ack(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBm:function aBm(d,e){this.a=d
this.b=e},
aEs:function aEs(d,e,f){this.a=d
this.b=e
this.c=f},
fmw:function fmw(d,e,f){this.a=d
this.b=e
this.c=f},
fmu:function fmu(d){this.a=d},
fmv:function fmv(d,e,f){this.a=d
this.b=e
this.c=f},
fn_:function fn_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmZ:function fmZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7W(d,e,f,g,h){return B.hCm(d,e,f,g,h)},
hCm(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7W=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a3(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iN(r.dB(d,new B.c7X(s,e,h,g,f,q),y.g),y.l),$async$c7W)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7W,w)},
aZ1(d,e,f,g,h){return B.hCn(d,e,f,g,h)},
hCn(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZ1=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.au4("GET",d)
o=A.fPF()
if(o==null)o=new A.LJ(A.a([],y.W))
x=7
return A.b(o.f0(0,s).d7(0,C.Fm),$async$aZ1)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aZ1)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BF(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZ1,w)},
aZ0(d){return B.hCk(d)},
hCk(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZ0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vh(d,null).d7(0,C.nV),$async$aZ0)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aL(0,A.lR(A.lP(p.e)).cz(0,p.w),null)
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
$.am.$1("[doc share lan manifest web] "+A.u(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZ0,w)},
c7V(d){return B.hCl(d)},
hCl(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vh(d,null).d7(0,C.pU),$async$c7V)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lR(A.lP(q.e)).cz(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.am.$1("[doc share lan text web] "+A.u(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7V,w)},
c7X:function c7X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jl:function jl(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Im(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hCs(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Im(C.a.b3(u,v.length))}return null},
hCt(d){var x=B.Im(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hCo(){var x,w=$.pu(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.hk(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a6v(d){return B.hCp(d)},
hCp(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bJ),$async$a6v)
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
$.am.$1("[doc share my code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6v,w)},
a6w(d,e){return B.hCq(d,e)},
hCq(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6w=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hH(d,e,!1,!1,C.cG,null),$async$a6w)
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
$.am.$1("[doc share my code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6w,w)},
BE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BE)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Im(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6x(r),$async$BE)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6v("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BE)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Im(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BE)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hCo()
x=14
return A.b(B.a6x(m),$async$BE)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a6w("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BE)
case 15:k=f
x=16
return A.b(B.a6w("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BE)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BE)
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
return A.i($async$BE,w)},
a6x(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Im(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6v("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6x)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
a6y(d,e,f,g){return B.hCu(d,e,f,g)},
hCu(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6y=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a3(d)
if(g.gal(d)){v=!1
x=1
break}r=B.Im(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6x(r),$async$a6y)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cM(d,0,new B.c82())>1048576||g.b4(d,new B.c83())){v=B.Er(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a6J("myCode",d,a0),$async$a6y)
case 4:u=a3
try{t=C.S.aL(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cm(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Er(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZ9(u,g.gM(d),a0),$async$a6y)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pu().az(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dB(d,new B.c84(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZ2(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a6y)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6y,w)},
Er(d,e,f,g,h){return B.hCr(d,e,f,g,h)},
hCr(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Er=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Er)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cM(a6,0,new B.c7Z())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pu().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cS.az(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Iq(a9,q)
a0=new A.Kg(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Er)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aX(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oW(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aa8(a1.a,a4,"media",a1.d,a2).wZ(m,n,new A.DI(!0,q.c)),$async$Er)
case 12:J.cd(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Er)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPu(r),$async$Er)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dB(a6,new B.c8_(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZ2(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$Er)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPu(r),$async$Er)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Er,w)},
aZ2(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZ2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6v(t),$async$aZ2)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7Y(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6w(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ2,w)},
Nj(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nj=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6v("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nj)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cm(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aZ3(k,a0),$async$Nj)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZ8(h),$async$Nj)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UO(g,a0),$async$Nj)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c80(),q),n)
d=A.C(new A.a_(r,new B.c81(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.dc(d,0,A.dG(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6w("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nj)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nj,w)},
aZ3(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZ3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cm(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a3(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.i61(k,j)
C.d.v(s,i)
x=5
return A.b(B.CW(l,m,"Received via My Code",t,e,i),$async$aZ3)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPu(s),$async$aZ3)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ3,w)},
c82:function c82(){},
c83:function c83(){},
c84:function c84(){},
c7Z:function c7Z(){},
c8_:function c8_(){},
c7Y:function c7Y(){},
c80:function c80(){},
c81:function c81(){},
fGj(d,e){var x=0,w=A.j(y.H)
var $async$fGj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cm(A.e9(new B.fGk(e),!1,null,y.H)),$async$fGj)
case 2:return A.h(null,w)}})
return A.i($async$fGj,w)},
bCe(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cm(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cm(A.e9(new B.fGl(g,e,f),!1,null,y.y)),$async$bCe)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCe,w)},
fGk:function fGk(d){this.a=d},
fGl:function fGl(d,e,f){this.a=d
this.b=e
this.c=f},
UE:function UE(d,e){this.c=d
this.a=e},
aCI:function aCI(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOL:function dOL(d,e){this.a=d
this.b=e},
UI:function UI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCL:function aCL(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPU:function dPU(d){this.a=d},
dPV:function dPV(d){this.a=d},
dPW:function dPW(d){this.a=d},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPX:function dPX(d){this.a=d},
dPY:function dPY(d){this.a=d},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d){this.a=d},
dQ4:function dQ4(){},
dQ2:function dQ2(d){this.a=d},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
bhZ:function bhZ(){},
UF:function UF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCJ:function aCJ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOM:function dOM(d){this.a=d},
dON:function dON(d){this.a=d},
fTi(d){var x=d.hW
if(x>=0)return C.o.N(x)
return 10},
hCw(d){var x=d.kM
if(x>=0)return x
return 4.99},
hCv(d){var x=d.lp,w=y.N
w=x.j9(x,new B.c86(),w,w)
return w},
h8v(d){var x=d.kN,w=y.N
w=x.j9(x,new B.c87(),w,w)
return w},
aZ6(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZ6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZ6)
case 7:s=f
r=A.u(p)
r=A.aU(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aZ6,w)},
a6A(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6A)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6A)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
UH(d){var x=0,w=A.j(y.H),v,u
var $async$UH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UH)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UH)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UH,w)},
fTh(d,e){var x,w,v
if(B.hCw(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hCv(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.S(Date.now(),0,!1))},
aZ4(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h8v(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.S(Date.now(),0,!1))},
h8w(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h8v(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bS(A.dD(f,0,0,0,0,0).a).a5().ac())
d.kN=w},
aoO(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aoO)
case 7:s=f
r=A.u(p)
r=A.eK(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoO,w)},
aoP(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoO(d),$async$aoP)
case 3:u=f
x=5
return A.b(A.ay(),$async$aoP)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoP,w)},
aoN(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fTi(d)
if(u<=0){v=!1
x=1
break}if(B.fTh(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoO(e),$async$aoN)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoN,w)},
aZ5(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZ5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Io(e,d),$async$aZ5)
case 3:if(g){v=-1
x=1
break}u=B.fTi(d)
if(u<=0){v=-1
x=1
break}if(B.fTh(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoO(e),$async$aZ5)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ5,w)},
c89(d,e,f){var x=0,w=A.j(y.y),v
var $async$c89=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Io(e,d),$async$c89)
case 3:if(h){v=!1
x=1
break}v=B.aoN(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c89,w)},
c88(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c88=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c89(d,u,i.gTB()),$async$c88)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c88,w)},
a6z(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6z=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTB()){v=!0
x=1
break}if(B.aZ4(d,u)){v=!0
x=1
break}x=5
return A.b(A.lj(u,C.S3),$async$a6z)
case 5:x=k?3:4
break
case 3:B.h8w(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6z)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kV(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S3,"Doc Share for Organizations"),$async$a6z)
case 7:if(!k){v=!1
x=1
break}B.h8w(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6z)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
c86:function c86(){},
c87:function c87(){},
fH1(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fH1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fH1)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fay.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hQ([r],e.c))
s.toString
$.fay.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fH1,w)},
i8k(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fay.bs($.fay,new B.fH3(d))},
fH3:function fH3(d){this.a=d},
fc_(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fc_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hQ([d],f))
s.toString
u=A.n7(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jl,null,y.H),$async$fc_)
case 3:C.A8.ff(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eQ.mp()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fc_,w)},
afr(d,e,f){var x=0,w=A.j(y.H),v
var $async$afr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fb5.n(0,d,new B.abA(A.bn(e,!0,v)))
x=3
return A.b(A.ay(),$async$afr)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afr)
case 2:return A.h(null,w)}})
return A.i($async$afr,w)},
afl(d){return B.hSa(d)},
hSa(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fb5.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afl)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aL(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cm(s)){v=null
x=1
break}o=J.b6(s,new B.ffv(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abA(r)
$.fb5.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afl,w)},
Qv(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.G9.n(0,d,u)
x=3
return A.b(B.R_(d,u),$async$Qv)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qv,w)},
aNl(d){return B.hS8(d)},
hS8(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G9.h(0,d)
if(n!=null&&!C.aH.gal(n)){v=n
x=1
break}x=3
return A.b(B.QZ(d),$async$aNl)
case 3:p=f
if(p!=null&&!C.aH.gal(p)){$.G9.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNl)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aK(r)
x=!J.cm(q)?9:10
break
case 9:B.Qv(d,q)
x=11
return A.b(J.hx(s,d),$async$aNl)
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
return A.i($async$aNl,w)},
hOm(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ce(A.A7(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
return A.f8(null,y.K)},
a1e(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bW(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fkJ(r,t),!1,s)
A.fL(r,"error",new B.fkK(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iq(0,C.Me,new B.fkL())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1e,w)},
aNF(d,e,f){return B.hUr(d,e,f)},
hUr(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNF=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1e(i),$async$aNF)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.R_(o,p),$async$aNF)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.cd(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afr(k,j,s),$async$aNF)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.u(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNF,w)},
aNE(d,e,f){return B.hUq(d,e,f)},
hUq(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNE=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNF(d,e,f),$async$aNE)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1e(f),$async$aNE)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G9.n(0,s,r)
$.QM.n(0,s,r)
x=11
return A.b(B.Qv(s,r),$async$aNE)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.u(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNE,w)},
BF(d,e,f,g,h,i){return B.hCF(d,e,f,g,h,i)},
hCF(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BF=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cS.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jl(p,q,o,n,new A.S(Date.now(),0,!1).a5().ac(),a0,f,B.aZc(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qv(s,d),$async$BF)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BF)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cJ.gct().aK(d)),$async$BF)
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
return A.b(B.AI(e),$async$BF)
case 12:j=a2
J.cd(j,m)
x=13
return A.b(B.Gk(e,j),$async$BF)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BF,w)},
UJ(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UJ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AI(d),$async$UJ)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cS.az(99999)
n=p.b
l=o.type
l.toString
k=B.h8y(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a5().ac()
i=new B.jl(m,n,k,l,j,"From folder",null,B.aZc(),null)
$.afV.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1e(o),$async$UJ)
case 7:g=a1
x=g!=null&&!C.aH.gal(g)?8:10
break
case 8:$.G9.n(0,h,g)
$.QM.n(0,h,g)
B.Qv(h,g)
x=9
break
case 10:x=11
return A.b(B.aNE(d,m,o),$async$UJ)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gk(d,t),$async$UJ)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UJ,w)},
fTm(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fTm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h8y(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ip(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gal(s)){v=B.BF(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTm,w)},
Ip(d,e,f,g,h,i){return B.hCE(d,e,f,g,h,i)},
hCE(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ip=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cS.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kg(A.dG(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ip)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cm(m)){x=6
break}J.h4(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Ry(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.R_(k,l),$async$Ip)
case 11:J.cd(q,k);++p
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
return A.b(j.a7(0),$async$Ip)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.R_(k,new Uint8Array(A.ce(n))),$async$Ip)
case 15:J.cd(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afr(r,q,g),$async$Ip)
case 16:f=new B.jl(i,a1,a0,g,new A.S(Date.now(),0,!1).a5().ac(),a2,null,B.aZc(),null)
x=17
return A.b(B.AI(d),$async$Ip)
case 17:e=a6
J.cd(e,f)
x=18
return A.b(B.Gk(d,e),$async$Ip)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ip,w)},
UL(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UL=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afV.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1e(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afl(s),$async$UL)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QZ(u[o]),$async$UL)
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
v=A.A7(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QM.h(0,s)
if(i==null)i=$.G9.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rr(d,e),$async$UL)
case 12:i=a0
if(i!=null&&!C.aH.gal(i))$.QM.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A7(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
h8y(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gak(x):""
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
rr(d,e){return B.hCG(d,e)},
hCG(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rr=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QM.h(0,f)
if(e==null)e=$.G9.h(0,f)
if(e!=null&&!C.aH.gal(e)){v=e
x=1
break}s=$.afV.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1e(s),$async$rr)
case 9:r=a3
if(r!=null&&!C.aH.gal(r)){$.G9.n(0,f,r)
$.QM.n(0,f,r)
B.Qv(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.u(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afl(f),$async$rr)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axC(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QZ(g[l]),$async$rr)
case 16:k=a3
if(k!=null&&!C.aH.gal(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.anN()
if(!C.aH.gal(r)){$.G9.n(0,f,r)
$.QM.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNl(f),$async$rr)
case 17:j=a3
if(j!=null&&!C.aH.gal(j)){$.QM.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UL(a0,a1,0,g),$async$rr)
case 20:i=a3
if(i!=null&&!C.aH.gal(i)){h=new Uint8Array(A.ce(i))
$.G9.n(0,f,h)
$.QM.n(0,f,h)
B.Qv(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rr,w)},
hCJ(d){var x,w,v=$.afV.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hCK(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hQ([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hCH(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoV(d,e,f,g,h){return B.hCI(d,e,f,g,h)},
hCI(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoV=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afV.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1e(s),$async$aoV)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rr(g,e),$async$aoV)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eY().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ij(d).wZ(h,r,new A.DI(!0,e.c)),$async$aoV)
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
$.am.$1("[doc share upload web] "+e.b+": "+A.u(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoV,w)},
h8A(d,e,f,g,h){var x,w,v,u,t=$.h8z
$.h8z=t+1
x=Date.now()
w=""+1000*x+"_"+C.cS.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c8k.n(0,t,new B.buo(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axC(u)))
return t},
fTn(d){var x=0,w=A.j(y.H)
var $async$fTn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fTn,w)},
Iq(d,e){var $async$Iq=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afV.h(0,h)
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
return A.q6(B.UL(d,e,p,o<q?o:q),$async$Iq,w)
case 8:n=a1
x=n!=null&&!C.aH.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q6(A.FI(n),$async$Iq,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q6(B.afl("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Iq,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q6(B.QZ(h[l]),$async$Iq,w)
case 18:k=a1
x=k!=null&&!C.aH.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q6(A.FI(k),$async$Iq,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q6(B.rr(d,e),$async$Iq,w)
case 22:j=a1
x=j!=null&&!C.aH.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q6(A.FI(A.A7(j,p,o<i?o:i)),$async$Iq,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q6(null,0,w)
case 2:return A.q6(t.at(-1),1,w)}})
var x=0,w=A.hhe($async$Iq,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hj2(w)},
aZe(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c8k.h(0,d)
if(t==null||J.cm(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4p(),$async$aZe)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZe,w)},
UK(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8k.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4p(),$async$UK)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afr(r.c,u,r.z),$async$UK)
case 4:t=new B.jl(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aZc(),null)
u=r.a
x=5
return A.b(B.AI(u),$async$UK)
case 5:s=f
J.cd(s,t)
x=6
return A.b(B.Gk(u,s),$async$UK)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UK,w)},
a6G(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8k.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agB(u[s]),$async$a6G)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
c8m(d,e,f){var x=0,w=A.j(y.H)
var $async$c8m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzi(d,e,f),$async$c8m)
case 2:return A.h(null,w)}})
return A.i($async$c8m,w)},
c8n(d,e,f){var x=0,w=A.j(y.H)
var $async$c8n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzj(d,e,f),$async$c8n)
case 2:return A.h(null,w)}})
return A.i($async$c8n,w)},
Es(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Es=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AI(d),$async$Es)
case 2:p=g
J.nr(p,new B.c8l(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G9.W(0,v)
$.afV.W(0,e)
x=3
return A.b(B.afl(v),$async$Es)
case 3:u=g
$.fb5.W(0,v)
x=4
return A.b(A.ay(),$async$Es)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Es)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Es)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agB(s[q]),$async$Es)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agB(v),$async$Es)
case 13:x=14
return A.b(B.Gk(d,p),$async$Es)
case 14:return A.h(null,w)}})
return A.i($async$Es,w)},
aZd(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rr(d,e),$async$aZd)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fc_(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZd,w)},
AI(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AI)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aL(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fkM(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AI,w)},
Gk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.foQ(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gk)
case 3:return A.h(null,w)}})
return A.i($async$Gk,w)},
bzi(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AI(d),$async$bzi)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.fjb(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDq(f))
x=4
return A.b(B.Gk(d,u),$async$bzi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzi,w)},
bzj(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AI(d),$async$bzj)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.fjc(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cHK(f))
x=4
return A.b(B.Gk(d,u),$async$bzj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzj,w)},
abA:function abA(d){this.a=d},
ffv:function ffv(){},
fkJ:function fkJ(d,e){this.a=d
this.b=e},
fkK:function fkK(d){this.a=d},
fkL:function fkL(){},
c8l:function c8l(d){this.a=d},
buo:function buo(d,e,f,g,h,i,j,k,l){var _=this
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
fkM:function fkM(){},
foQ:function foQ(){},
fjb:function fjb(d){this.a=d},
fjc:function fjc(d){this.a=d},
a6H(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c8q())?3:4
break
case 3:x=5
return A.b(B.aZf(d,e),$async$a6H)
case 5:u=g
if(u!=null){t=u.c
B.Nl(d,u.b,e,t)}v=u
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
return A.b(B.aZa(s),$async$a6H)
case 10:case 9:if(g){v=new A.PU(1,D.RH,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UM(d,e),$async$a6H)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UR(!0,!0,d,e),$async$a6H)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nl(d,D.zk,e,t)
v=new A.PU(p,D.zk,t)
x=1
break}v=B.c8p(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6H,w)},
UM(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6J(null,d,e),$async$UM)
case 3:p=g
try{u=C.S.aL(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cm(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZ9(p,d.length,e),$async$UM)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c8n(e,C.d.gH(d).a,r.b),$async$UM)
case 7:case 6:q=r.a
x=8
return A.b(B.Nl(d,D.RH,e,q),$async$UM)
case 8:v=new A.PU(d.length,D.RH,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UM,w)},
UN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mu(D.mB)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6I(d,e),$async$UN)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c8i(s,d,e,t),$async$UN)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZa(t),$async$UN)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rr(e,d),$async$UN)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UM(A.a([d],y.r),e),$async$UN)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UN,w)},
UP(){var x=0,w=A.j(y.H)
var $async$UP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fTg(),$async$UP)
case 2:x=3
return A.b(B.aPL(),$async$UP)
case 3:return A.h(null,w)}})
return A.i($async$UP,w)},
a6I(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZc()
x=3
return A.b(B.c8m(e,d.a,u),$async$a6I)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
Nl(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RH&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b3(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6I(p,f),$async$Nl)
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
return A.b(B.c8h(o,p,u,f),$async$Nl)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c8i(o,p,f,t),$async$Nl)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c8g(o,u,p,f),$async$Nl)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nl,w)},
aZf(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8o(e,d),$async$aZf)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UR(!1,!0,d,e),$async$aZf)
case 4:u=g
if(u!=null){t=u.b
v=new A.PU(u.a,D.zk,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZf,w)},
c8o(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UL(d,s,0,1),$async$c8o)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.L)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8o,w)},
c8p(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c8p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6J(null,d,e),$async$c8p)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h8x(u)
if(t.length>800){v=null
x=1
break}v=new A.PU(d.length,D.dB2,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8p,w)},
aoW(d,e,f){return B.hCN(d,e,f)},
hCN(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoW=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d1(g,"\ufeff"))g=J.n6(g,1)
x=B.fTl(g)?3:4
break
case 3:x=5
return A.b(B.c8j(g),$async$aoW)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d1(g,"NGMYDOCSYNC4|")){s=C.a.i(J.n6(g,13))
try{k=B.Et(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d1(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.n6(g,13))
u=9
x=12
return A.b(B.aZ8(q),$async$aoW)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UO(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.u(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d1(g,"NGMYDOCSYNC0|"))try{n=B.fTk(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UO(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d1(g,"N2|")){v=B.Ir(C.a.i(J.n6(g,3)),d,a0)
x=1
break}if(J.d1(g,"NGMYDOCSYNC2|")){v=B.Ir(C.a.i(J.n6(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ir(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UO(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoW,w)},
Ir(d,e,f){return B.hCL(d,e,f)},
hCL(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ir=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b3(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b3(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cD(A.u(s)+"/manifest.json",0,null)
q=A.cD(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZ0(r),$async$Ir)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZ0(A.cD(s,0,null)),$async$Ir)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cm(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7W(o,r,a1,n,a2),$async$Ir)
case 11:m=a4
x=J.cm(m)?12:13
break
case 12:x=14
return A.b(B.c7V(q),$async$Ir)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UO(l,a2),$async$Ir)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cm(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ab(d)
$.am.$1("[doc share lan import] "+A.u(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ir,w)},
a6J(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rr(f,r),$async$a6J)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aK(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a5().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6J,w)},
UO(d,e){return B.hCM(d,e)},
hCM(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UO=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aL(0,a2,null)
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
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BF(i,a3,d,k,l,o),$async$UO)
case 9:h=a5
if(h!=null)J.cd(n,h)
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
$.am.$1("[doc share bundle] "+A.u(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$UO,w)},
Nk:function Nk(d,e){this.a=d
this.b=e},
c8q:function c8q(){},
a0O(d){var x=A.P(d).ax.a===C.I,w=x?D.aeH:D.acz,v=x?D.ag8:C.c,u=x?C.aO:C.M,t=x?C.bK:C.ak,s=x?D.adN:C.aL
return new A.aFG([w,s,v,u,t,x?C.fb:C.bR])},
ho1(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fL9(e),d,null,!0,!0,y.N)},
c85(d,e,f,g,h,i,j,k,l){return new B.UG(e,l,d,f,k,j,g,h,i,null)},
YP(d,e,f,g,h,i,j){return new B.bcK(g,h,j,e,i,d,f,null)},
fL9:function fL9(d){this.a=d},
YM:function YM(d,e){this.c=d
this.a=e},
ayO:function ayO(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2J:function d2J(d){this.a=d},
d2H:function d2H(d){this.a=d},
d2I:function d2I(d){this.a=d},
bu2:function bu2(){},
UG:function UG(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCK:function aCK(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPS:function dPS(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPg:function dPg(d,e){this.a=d
this.b=e},
dOP:function dOP(d,e,f){this.a=d
this.b=e
this.c=f},
dOO:function dOO(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e,f){this.a=d
this.b=e
this.c=f},
dOU:function dOU(d){this.a=d},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPH:function dPH(d){this.a=d},
dPc:function dPc(d,e,f){this.a=d
this.b=e
this.c=f},
dP9:function dP9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOT:function dOT(d){this.a=d},
dPk:function dPk(d){this.a=d},
dPj:function dPj(){},
dOZ:function dOZ(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPa:function dPa(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPs:function dPs(d){this.a=d},
dPr:function dPr(d){this.a=d},
dPt:function dPt(){},
dPu:function dPu(){},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPx:function dPx(){},
dPy:function dPy(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
dOW:function dOW(){},
dOX:function dOX(d){this.a=d},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOS:function dOS(d,e){this.a=d
this.b=e},
dOR:function dOR(d,e,f){this.a=d
this.b=e
this.c=f},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d,e,f){this.a=d
this.b=e
this.c=f},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP3:function dP3(d){this.a=d},
dP0:function dP0(d,e,f){this.a=d
this.b=e
this.c=f},
dP4:function dP4(d){this.a=d},
dP5:function dP5(d){this.a=d},
dP6:function dP6(){},
dP8:function dP8(d,e){this.a=d
this.b=e},
dP1:function dP1(d){this.a=d},
dP_:function dP_(d,e,f){this.a=d
this.b=e
this.c=f},
dP2:function dP2(){},
dPi:function dPi(d){this.a=d},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPB:function dPB(d){this.a=d},
dPP:function dPP(d){this.a=d},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPQ:function dPQ(){},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPK:function dPK(d,e,f){this.a=d
this.b=e
this.c=f},
dPI:function dPI(d,e,f){this.a=d
this.b=e
this.c=f},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPM:function dPM(d,e){this.a=d
this.b=e},
ayL:function ayL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcJ:function bcJ(d,e,f){this.c=d
this.d=e
this.a=f},
d2F:function d2F(){},
d2G:function d2G(){},
abU:function abU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d32:function d32(){},
d31:function d31(d){this.a=d},
YO:function YO(d,e,f){this.c=d
this.d=e
this.a=f},
ayQ:function ayQ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2Z:function d2Z(d){this.a=d},
d3_:function d3_(d,e,f){this.a=d
this.b=e
this.c=f},
d30:function d30(d,e){this.a=d
this.b=e},
d2X:function d2X(d,e){this.a=d
this.b=e},
d2V:function d2V(d){this.a=d},
d2T:function d2T(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d2W:function d2W(d){this.a=d},
d2S:function d2S(d){this.a=d},
d2Y:function d2Y(d){this.a=d},
d2U:function d2U(d){this.a=d},
d2R:function d2R(d){this.a=d},
YL:function YL(d,e,f){this.c=d
this.d=e
this.a=f},
ayN:function ayN(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2C:function d2C(d){this.a=d},
d2B:function d2B(d,e){this.a=d
this.b=e},
d2D:function d2D(d){this.a=d},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2E:function d2E(d){this.a=d},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
d2y:function d2y(d){this.a=d},
Pw:function Pw(d,e,f){this.c=d
this.d=e
this.a=f},
ayT:function ayT(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d){this.a=d},
d3h:function d3h(d){this.a=d},
d3i:function d3i(d){this.a=d},
d3j:function d3j(d,e){this.a=d
this.b=e},
d3k:function d3k(d){this.a=d},
d3m:function d3m(d){this.a=d},
d3l:function d3l(d){this.a=d},
YQ:function YQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayR:function ayR(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d3b:function d3b(d,e){this.a=d
this.b=e},
d3c:function d3c(d,e){this.a=d
this.b=e},
d33:function d33(d,e,f){this.a=d
this.b=e
this.c=f},
d34:function d34(d){this.a=d},
d35:function d35(){},
d3a:function d3a(){},
d36:function d36(d,e){this.a=d
this.b=e},
d37:function d37(d,e){this.a=d
this.b=e},
d38:function d38(d,e){this.a=d
this.b=e},
d39:function d39(d,e){this.a=d
this.b=e},
abS:function abS(d,e){this.c=d
this.a=e},
d2u:function d2u(d){this.a=d},
YK:function YK(d){this.a=d},
ayM:function ayM(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YR:function YR(d,e){this.c=d
this.a=e},
ayS:function ayS(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d3e:function d3e(d){this.a=d},
d3d:function d3d(d){this.a=d},
bcK:function bcK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hCO(){var x,w=$.pu(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.hk(v)},
Nm(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nm=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Nm)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Nm)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share video cloud] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nm,w)},
a6K(d){return B.hCP(d)},
hCP(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6K)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hH("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6K)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6K,w)},
UQ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nm(),$async$UQ)
case 3:s=g
r=J.a3(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,d,t)
x=4
return A.b(B.a6K(s),$async$UQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UQ,w)},
UR(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UR)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bn(f,!0,y.U)
else{t=A.T(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c8s(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hCO()
t=A.T(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c8t(s),t),t.k("ak.E"))
x=6
return A.b(B.Nm(),$async$UR)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a6K(q),$async$UR)
case 7:x=8
return A.b(B.a6L(r,u,g,s),$async$UR)
case 8:v=new A.bo4(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UR,w)},
aoX(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nm(),$async$aoX)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoX,w)},
c8u(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c8u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nm(),$async$c8u)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a3(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8u,w)},
a6L(d,e,f,g){return B.hCQ(d,e,f,g)},
hCQ(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6L=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoV("media",r,new B.c8r(s,e,g),f,q),$async$a6L)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UQ(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6L)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UQ(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a6L)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UQ(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6L)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6L,w)},
Et(d,e,f){return B.hCR(d,e,f)},
hCR(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Et=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Et)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoX(b3),$async$Et)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.kw,null,g),$async$Et)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoX(b3),$async$Et)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nm(),$async$Et)
case 10:e=c0
g=J.a3(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a3(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cm(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a3(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a3(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.eY().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oW(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aa8(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cD(l,0,null)
x=17
return A.b(B.aZ1(k,n,o,s,b7),$async$Et)
case 17:j=c0
if(j!=null){J.cd(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.u(o)+": "+A.u(i))
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
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eY().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oW(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aa8(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Et)
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
a0=A.dO(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6K(e),$async$Et)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Et,w)},
c8s:function c8s(){},
c8t:function c8t(d){this.a=d},
c8r:function c8r(d,e,f){this.a=d
this.b=e
this.c=f},
aPL(){var x=0,w=A.j(y.H),v,u
var $async$aPL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hNL=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aPL)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aPL)
case 3:u=$.fYv
u=u==null?null:u.bD(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aPL)
case 4:$.fYv=$.hWi=$.hWj=null
return A.h(null,w)}})
return A.i($async$aPL,w)},
foq(d){var x=0,w=A.j(y.H),v,u
var $async$foq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6k){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fos(new A.bW(u,y.aY))
x=3
return A.b(u.iq(0,C.hL,new B.fot()),$async$foq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$foq,w)},
hWg(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hCy(x):x},
fYz(d){var x=0,w=A.j(y.T),v,u,t
var $async$fYz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,13))
if(C.a.a0(u,"WR")){v=B.aoZ(u)
x=1
break}v=B.fTk(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYz,w)},
fYy(d){var x=0,w=A.j(y.T),v,u,t
var $async$fYy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,14))
if(C.a.a0(u,"WR")){v=B.ap_(u)
x=1
break}v=B.fTk(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYy,w)},
fGM(d){var x=0,w=A.j(y.T),v
var $async$fGM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap_(d),$async$fGM)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGM,w)},
bA9(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bA9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fYy(d),$async$bA9)
case 3:q=f
if(q==null){x=1
break}t=C.S.aL(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a3(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bA9,w)},
fcO(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fcO=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UK(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BF(d.anN(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcO,w)},
Gm(d,e,f){return B.hYF(d,e,f)},
hYF(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fYz(a1),$async$Gm)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aL(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a3(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b3(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hpU().aDF(D.dpo,null),$async$Gm)
case 4:l=d.fYv=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axC(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.foY(f,k,new B.foZ(f,a2,k,j,a0,p),a2,j,a0,p,new A.bW(t,y.ch))
x=5
return A.b(l.a7n(0,new B.WS(r,"offer")),$async$Gm)
case 5:d=l
x=7
return A.b(l.akC(0),$async$Gm)
case 7:x=6
return A.b(d.a7f(0,a4),$async$Gm)
case 6:x=8
return A.b(B.foq(l),$async$Gm)
case 8:x=9
return A.b(l.aox(),$async$Gm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hWg(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ap0(m,h),$async$Gm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h8x(h)
case 11:v=new A.bnn(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gm,w)},
fos:function fos(d){this.a=d},
fot:function fot(){},
foZ:function foZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foY:function foY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
foX:function foX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i_z(d){switch(d){case"new":return D.ehZ
case"checking":return D.ei_
case"connected":return D.ei1
case"completed":return D.ei0
case"failed":return D.ei3
case"disconnected":return D.ei4
case"closed":return D.aM4
case"count":return D.ei2}return D.aM4},
i_A(d){switch(d){case"new":return D.aM5
case"gathering":return D.ei5
case"complete":return D.a6k}return D.aM5},
i9O(d){switch(d){case"stable":return D.ei6
case"have-local-offer":return D.ei7
case"have-local-pranswer":return D.ei9
case"have-remote-offer":return D.ei8
case"have-remote-pranswer":return D.eia
case"closed":return D.aMb}return D.aMb},
i81(d){switch(d){case"new":return D.aM8
case"connecting":return D.aM9
case"connected":return D.aMa
case"closed":return D.a6l
case"disconnected":return D.aM7
case"failed":return D.aM6}return D.a6l},
a94:function a94(d,e){this.a=d
this.b=e},
Om:function Om(d,e){this.a=d
this.b=e},
WR:function WR(d,e){this.a=d
this.b=e},
Ol:function Ol(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.a=d
this.b=e},
cjq:function cjq(){},
fV4(d){var x=new B.EX()
x.a=d
x.b=!0
return x},
EX:function EX(){this.b=this.a=$},
a93:function a93(){},
atf:function atf(){},
WS:function WS(d,e){this.a=d
this.b=e},
fTg(){var x=0,w=A.j(y.H)
var $async$fTg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fTg,w)},
fTj(d,e,f){var x=0,w=A.j(y.T),v
var $async$fTj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mu(D.mB))){v=null
x=1
break}v=B.fH1(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTj,w)},
h8x(d){var x,w=F.ac0.a49(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cJ.gct().aK(x)}return C.cJ.gct().aK(w)},
hCx(d){var x,w,v=C.cF.aK(d)
try{x=C.cf.cz(0,F.ac_.bce(v,!1))
return x}catch(w){x=C.cf.cz(0,v)
return x}},
fTk(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hCx(C.a.b3(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b3(t,w.length)
try{v=C.cf.cz(0,C.cF.aK(x))
return v}catch(u){return x}}return null},
hCy(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aH(s,"\n")},
hCz(){var x,w=$.pu(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.hk(v)},
aZ7(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZ7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZ7)
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
$.am.$1("[doc share qr stash] load "+A.u(p)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZ7,w)},
c8a(d,e){return B.hCA(d,e)},
hCA(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c8a=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hH("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c8a)
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
$.am.$1("[doc share qr stash] save "+A.u(p)+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c8a,w)},
aZa(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ7(d),$async$aZa)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZa,w)},
aZ9(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZ9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hCz()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c8a(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aK(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aZ9)
case 3:if(!h){v=null
x=1
break}v=new A.a_R("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ9,w)},
aZ8(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZ8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZ7(o),$async$aZ8)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cz(0,C.cF.aK(u))
if(J.iY(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZ8,w)},
c8b(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c8b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bB5("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c8b)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.u(q)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c8b,w)},
aZb(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.In(),$async$aZb)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZb,w)},
aoS(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$aoS)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZb(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoS,w)},
aoQ(d,e){var x=0,w=A.j(y.H)
var $async$aoQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$aoQ)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoQ)
case 2:return A.h(null,w)}})
return A.i($async$aoQ,w)},
a6C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6C)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.In(),$async$a6C)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a6B(s),$async$a6C)
case 5:x=6
return A.b(B.aoQ(f,u),$async$a6C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
a6D(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6D=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6D)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.In(),$async$a6D)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a3(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ai(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aoQ(g,q),$async$a6D)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6B(u),$async$a6D)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6D,w)},
a6E(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6E=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6E)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.In(),$async$a6E)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a3(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZ4(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6E)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a6E)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6E,w)},
c8c(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c8c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c8c)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aL(0,r,null)
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
return A.i($async$c8c,w)},
Io(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Io=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8c(d),$async$Io)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZb(t),$async$Io)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoR(d),$async$Io)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZ4(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoR(d),$async$Io)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Io,w)},
aoR(d){var x=0,w=A.j(y.H)
var $async$aoR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$aoR)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoR)
case 2:return A.h(null,w)}})
return A.i($async$aoR,w)},
aZc(){var x,w=$.pu(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.hk(v)},
a6F(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fTl(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c8f(d){return B.hCC(d)},
hCC(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c8f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6F(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c8f)
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
$.am.$1("[doc share short code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c8f,w)},
aoU(d,e){return B.hCD(d,e)},
hCD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoU=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6F(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hH("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$aoU)
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
$.am.$1("[doc share short code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoU,w)},
c8h(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6F(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoU(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c8h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8h,w)},
c8g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6F(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoU(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c8g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8g,w)},
c8i(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c8i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6F(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoU(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8i,w)},
c8j(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c8j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fTl(d)){v=null
x=1
break}x=3
return A.b(B.c8f(d),$async$c8j)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a3(u)
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
return A.i($async$c8j,w)},
a6M(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6M=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6M)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6M)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share webrtc stash] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6M,w)},
aoY(d){return B.hCS(d)},
hCS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoY)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hH("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cG,null),$async$aoY)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoY,w)},
aoZ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d1(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoZ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6M(),$async$aoZ)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cz(0,C.cF.aK(q))
if(J.iY(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.aoY(s),$async$aoZ)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.u(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoZ,w)},
ap0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ap0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$ap0)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6M(),$async$ap0)
case 4:u=g
t=J.a3(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dK.aK(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aK(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.aoY(u),$async$ap0)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap0,w)},
ap_(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ap_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ap_)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6M(),$async$ap_)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cz(0,C.cF.aK(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ap_,w)},
anV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.aj$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.pY)){v=null
x=1
break}x=3
return A.b(p.m_(e),$async$anV)
case 3:r=g
u=4
x=7
return A.b(r.hu(C.h0),$async$anV)
case 7:q=g
o=q
o=o==null?null:J.eU(J.vq(o))
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
return A.i($async$anV,w)},
i61(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aX(C.o.u(w),5,"0")
return v},
fFe(d){return B.i63(d)},
i63(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fFe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").KL(d,3600),$async$fFe)
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
$.am.$1("[supabase signed url] "+d+": "+A.u(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fFe,w)},
CW(d,e,f,g,h,i){var x=null
return B.i60(d,e,f,g,h,i)},
i60(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CW=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h8A(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fTn(r),$async$CW)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fFe(o),$async$CW)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6G(r),$async$CW)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPj)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LJ(A.a([],g))
x=15
return A.b(d.f0(0,A.au4("GET",A.cD(n,0,null))).d7(0,C.Fm),$async$CW)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6G(r),$async$CW)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kg(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CW)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZe(r,k),$async$CW)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CW)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.UK(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.u(j))
x=27
return A.b(B.a6G(r),$async$CW)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CW,w)},
aPu(d){return B.i62(d)},
i62(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").W(0,d),$async$aPu)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPu,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[145]
O=c[40]
F=c[239]
I=c[136]
P=c[219]
E=c[212]
G=c[87]
Q=c[183]
R=c[137]
S=c[217]
K=c[243]
L=c[248]
B=a.updateHolder(c[21],B)
D=c[246]
T=c[182]
M=c[202]
U=c[65]
V=c[249]
W=c[71]
X=c[55]
N=c[86]
Y=c[247]
B.cjr.prototype={
aDF(d,e){return this.cJf(d,e)},
cJf(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cz(t)))
t=J.k(u)
v=B.hHr(C.cJ.gct().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDF,w)}}
B.b3m.prototype={
bxC(d){var x=this,w=x.w
w.onclose=A.hn(new B.cjm(x))
w.onopen=A.hn(new B.cjn(x))
w.onmessage=A.hn(new B.cjo(x))
w.onbufferedamountlow=A.hn(new B.cjp(x))},
gdc(d){return this.x},
agV(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EX()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fV4(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$agV)
case 8:v=t.fV4(s.an6(f,0,null))
x=1
break
case 7:case 4:v=B.fV4(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agV,w)}}
B.b3n.prototype={
bxD(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hn(new B.cjs(x)))
w.addEventListener("icecandidate",A.hn(new B.cjt(x)))
w.addEventListener("iceconnectionstatechange",A.hn(new B.cju(x)))
w.onicegatheringstatechange=A.hn(new B.cjv(x))
w.addEventListener("signalingstatechange",A.hn(new B.cjw(x)))
if(!$.h1f())w.addEventListener("connectionstatechange",A.hn(new B.cjx(x)))
w.addEventListener("negotiationneeded",A.hn(new B.cjy(x)))
w.addEventListener("track",A.hn(new B.cjz(x)))},
akC(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.ki(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akC)
case 3:t=f
v=new B.WS(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akC,w)},
a7f(d,e){return this.bn9(0,e)},
bn9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7f)
case 2:return A.h(null,w)}})
return A.i($async$a7f,w)},
a7n(d,e){return this.bnp(0,e)},
bnp(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7n)
case 2:return A.h(null,w)}})
return A.i($async$a7n,w)},
aox(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aox=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WS(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aox,w)},
bD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bD,w)}}
B.abT.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.YN.prototype={
U(){return new B.ayP()},
gde(){return this.c}}
B.ayP.prototype={
a_(){this.a1()
this.adG()},
adG(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ5(u.e,u.c),$async$adG)
case 2:t=e
if(v.c!=null)v.m(new B.d2N(v,t))
return A.h(null,w)}})
return A.i($async$adG,w)},
Q8(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoN(t.e,t.c,!1),$async$Q8)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.f_i)
x=1
break}x=4
return A.b(B.a6A(u.a.c,"individual"),$async$Q8)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a5K(A.e9(new B.d2K(u),!1,null,y.H)),$async$Q8)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Q8,w)},
J7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fmt(o),$async$J7)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6E(o.e,r,s,q),$async$J7)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.eXl)
x=1
break}x=5
return A.b(B.a6A(u.a.c,"member"),$async$J7)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a5K(A.e9(new B.d2M(u),!1,null,y.H)),$async$J7)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J7,w)},
xV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6z(t.e,o,t.f,t.r,t.w,s),$async$xV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6A(u.a.c,"org_owner"),$async$xV)
case 4:x=5
return A.b(B.aoS(u.a.c),$async$xV)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fmY(o),$async$xV)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6C(s,t,o,q.c),$async$xV)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.eXi)
x=1
break}x=10
return A.b(B.aoS(u.a.c),$async$xV)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a5K(A.e9(new B.d2L(u),!1,null,y.H)),$async$xV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xV,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jh:C.pJ,q=B.fTi(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fN,24)],y.V)
v=y.p
w=A.p(t,A.w(A.a([A.p(t,D.fia,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBf,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZI,C.n),t,t,t,t,C.eD,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lD(new B.d2P(),t),C.N,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.ack(C.eT,C.ayP,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcd0(),t),C.ac],v))
p.push(new B.ack(C.oU,C.a2g,"Team Member","Sign in with your organization access code + password",u.gcdS(),t))
p.push(C.ac)
p.push(new B.ack(C.alq,C.a3M,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcdn(),t))
return A.c6(t,r,A.bl(!0,A.cc(A.w(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiF,t,t,C.ah),!0,!1,C.ae,!0,!0),t,!1,!1,t,t)}}
B.ack.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gH(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eB(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eo,A.E(A.w(A.a([A.d(t.e,s,s,s,s,s,s,C.on,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BG,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bP,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aBm.prototype={}
B.aEs.prototype={}
B.jl.prototype={
mu(d){var x=this.b,w=C.a.oF(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b3(x,w+1).toLowerCase())},
gapb(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ag(){var x,w=this,v=A.U(y.N,y.z)
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
bbF(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jl(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cHK(d){return this.bbF(null,d)},
aDq(d){return this.bbF(d,null)}}
B.UE.prototype={
U(){return new B.aCI(new A.cv(null,y.A))},
gde(){return this.c}}
B.aCI.prototype={
a_(){this.a1()
this.adH()},
adH(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BE(u.a.c),$async$adH)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOL(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adH,w)},
adI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fD(s)),$async$adI)
case 3:t=u.c
if(t!=null)t.I(y.q).f.S(D.f0c)
case 1:return A.h(v,w)}})
return A.i($async$adI,w)},
Zu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anV(s.d,4),$async$Zu)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rZ(r,"ngmy_my_code_"+m+".png"),$async$Zu)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zu,w)},
ahn(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9I("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahn,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jh:C.pJ,m=o?C.c:C.M,l=A.ez(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mg
else if(q.e==null)x=A.au(new A.D(C.eD,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2I,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aif,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.mI,w,C.kG,new A.eH(A.p(p,A.pP(p,p,!1,B.hCt(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bP,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kG,A.B(A.a([A.E(A.er(N.C6,C.U5,q.gc6c(),p),1),C.at,A.E(A.dn(C.yH,C.a8C,q.gc6d(),A.bm(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.er(M.a17,D.fx0,q.gcsB(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MG,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.UI.prototype={
U(){return new B.aCL(new A.ar(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.aCL.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Im(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
q(){var x=this.d
x.R$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Im(u.d.a.a)
if(t==null){u.m(new B.dPU(u))
x=1
break}u.m(new B.dPV(u))
s=u.a
r=s.c
x=3
return A.b(B.a6y(s.d,new B.dPW(u),t,r),$async$Zv)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPX(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zv,w)},
a1E(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1E=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cm(r.a.d)){x=1
break}r.m(new B.dPY(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rr(r.a.c,q),$async$a1E)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPZ(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahl(p,m,l,j,k),$async$a1E)
case 8:o=e
if(r.c!=null)r.m(new B.dQ_(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dQ0(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQ1(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1E,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeH:D.acz,h=j?D.ag8:C.c,g=j?C.aO:C.M,f=j?C.bK:C.ak,e=j?D.adN:C.aL
i=[i,e,h,g,f,j?C.fb:C.bR]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.ez(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNj,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eo,A.E(A.w(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fC,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2I,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.um(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhZ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.MA,k,k,"",k,!0,new A.b3(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b3(4,A.n(18),new A.az(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQ2(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m7,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lm(l.a.d,4)
m=A.C(new A.M(m,new B.dQ3(x,new A.aFG(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lS,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bw,s,C.N,e,C.N,q,C.d7,p,C.N,A.p(k,A.w(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eu,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eVR)
else q.push(A.X(C.lr,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.de(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.iJ,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bvW,k,k,C.ah),1)
u=l.f?k:l.gcsC()
t=i[3]
s=i[1]
q=A.n(16)
s=A.er(M.a17,D.fy1,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.W),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6e()
t=A.bm(C.aE,k,k,0,C.c,k,C.na,k,new A.b7(A.n(16),C.W),k,k,k)
return A.c6(g,h,new A.an(C.V,k,C.aa,C.r,A.a([f,v,A.bl(!0,A.mC(new B.dQ4(),A.w(A.a([e,new A.D(D.bvr,A.w(A.a([s,C.N,i,C.ac,A.bG(l.f?C.rM:D.fwp,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Yt,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ae,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhZ.prototype={
oB(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bv,v.length),C.aM)}}
B.UF.prototype={
U(){return new B.aCJ()}}
B.aCJ.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.ba(w,C.b3,C.aM),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.ar(new A.ba(x,C.b3,C.aM),v)
u.f!==$&&A.aP()
u.f=new A.ar(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.R$=x
v.P$=0
v=w.f
v===$&&A.c()
v.R$=x
v.P$=0
w.a2()},
adJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOM(r))
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
return A.b(B.a6D(p,m,n,o,C.a.i(l).length===0?null:l),$async$adJ)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.S(D.f_O)
s=[1]
x=4
break}p.I(y.q).f.S(D.eZr)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dON(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adJ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jh:C.pJ,q=A.ez(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fp1,s,s,s,1,s,!0),p=A.p(s,D.bnP,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GP,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bUh,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bUc,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUs,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
v=t.r?s:t.gc6f()
u=A.bm(C.aE,s,s,s,s,C.fO,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mI,A.bG(t.r?C.rM:C.aS_,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abA.prototype={}
B.buo.prototype={
a4p(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anN()))
x=3
return A.b(B.R_(t,s),$async$a4p)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4p,w)},
gde(){return this.a}}
B.Nk.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.YM.prototype={
U(){return new B.ayO(new A.ar(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.ayO.prototype={
a_(){this.a1()
$.aV.x1$.push(new B.d2J(this))},
q(){var x=this.d
x.R$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6l(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0O(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jh:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fN,32)],n),l=A.p(w,T.ao1,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cz,16)],n),C.aoP,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.um(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bu2()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.Fx,w,w,"",w,!0,new A.b3(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b3(4,A.n(16),D.aZR),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2H(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m7,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nw,new B.d2I(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.n(14),C.W),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cH,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Kv,A.c0(new A.D(C.xY,A.w(A.a([l,C.aQ,k,C.N,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c0(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ebU,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6k(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.On,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.MI,C.d3,w,w,w)}}
B.bu2.prototype={
oB(d,e){return e.akx(e.a.toUpperCase())}}
B.UG.prototype={
U(){return new B.aCK(A.a([],y.r),A.aY(y.N))},
gde(){return this.c}}
B.aCK.prototype={
a_(){var x=this
x.a1()
x.tI()
x.w=A.dv(C.jm,new B.dPS(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UP()
this.a2()},
a0x(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nj(u.a.c),$async$a0x)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AI(u.a.c),$async$a0x)
case 4:u.m(new s.dPf(u,e))
u.i4("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0x,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nj(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AI(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dPg(u,s))
if(t>0)u.i4("Received "+A.u(t)+" file(s) via My Code.")
u.Nx(u.d)
B.BE(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
Nx(d){return this.bBB(d)},
bBB(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6I(r,u.a.c),$async$Nx)
case 8:p=f
if(u.c==null){x=1
break}new B.dOP(u,r,p).$0()
u.c.ej()
case 7:if(!(C.a.a0(r.c,"video/")||r.mu(D.mB))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UN(r,u.a.c),$async$Nx)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AI(u.a.c),$async$Nx)
case 12:u.m(new o.dOQ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nx,w)},
NU(d){return this.bHR(d)},
bHR(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6I(d,u.a.c),$async$NU)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOV(u,d,t))
x=6
return A.b(A.fM(new A.fD(t)),$async$NU)
case 6:u.i4("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fD(r.toUpperCase())),$async$NU)
case 7:u.i4("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NU,w)},
i4(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDe(d,e)},
cDe(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPG(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPH(r))
$.eQ.mp()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUH(){var x=this.a
return x.f||x.r||x.w},
I2(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUH()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c88(s,n,r,q,o,t),$async$I2)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i4("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fyI(o,u.a.c),$async$I2)
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
return A.b(B.CY(s,o,r,q,n,t),$async$I2)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I2,w)},
a_B(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoS(u.a.c),$async$a_B)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i4("No organization portal found.")
x=1
break}t=J.a3(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a4(t,!1).cm(A.e9(new B.dPc(u,r,q),!1,null,y.H)),$async$a_B)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_B,w)},
a0H(d){return this.cm9(d)},
cm8(){return this.a0H(1)},
cm9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUH()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoP(u.a.c),$async$a0H)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0H,w)},
abI(d,e,f){return this.bYx(d,e,f)},
bYx(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4(e)
x=1
break}x=3
return A.b(u.tJ(new B.dP9(u,d,null,e,f),"Uploading\u2026"),$async$abI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abI,w)},
bBJ(){B.hne(!1,new B.dOT(this))
return},
cra(){this.m(new B.dPk(this))},
ay_(){var x=0,w=A.j(y.H),v=this
var $async$ay_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bBJ()
return A.h(null,w)}})
return A.i($async$ay_,w)},
abE(){var x=0,w=A.j(y.H),v=this
var $async$abE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dOZ(v),"Importing\u2026"),$async$abE)
case 2:return A.h(null,w)}})
return A.i($async$abE,w)},
Sa(d){return this.cCD(d)},
cCD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mu(D.mB)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cm(A.e9(new B.dPD(u,d),!1,null,y.H)),$async$Sa)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mu(D.Qk)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cm(A.e9(new B.dPE(u,d),!1,null,y.H)),$async$Sa)
case 8:x=1
break
case 7:x=u.bZe(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cm(A.e9(new B.dPF(u,d),!1,null,y.H)),$async$Sa)
case 11:x=1
break
case 10:u.i4("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sa,w)},
bZe(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oF(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHs,C.a.b3(x,w+1).toLowerCase())},
af7(d){return this.cd4(d)},
cd4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mu(D.mB)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cm(A.e9(new B.dPa(u,d),!1,null,y.H)),$async$af7)
case 5:x=1
break
case 4:u.m(new B.dPb(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
Rw(d){return this.cu6(d)},
cu6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p6(t,s.c,s.f),$async$Rw)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPw(u,d),"Preparing QR\u2026"),$async$Rw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rw,w)},
ahN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPx(),A.T(t).k("M<1,m>")).fM(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPy(q),s),s.k("J.E"))
if(r.length===0){u.i4("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rw(r),$async$ahN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahN,w)},
ahG(d){return this.ctE(d)},
ctE(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0O(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dPq(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahG)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sa(d)
break
case"qr":u.Rw(A.a([d],y.r))
break
case"send_my_code":u.cdH(A.a([d],y.r))
break
case"save":u.ah1(d)
break
case"delete":u.IT(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahG,w)},
Xp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dOW(),A.T(t).k("M<1,m>")).fM(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dOX(q),s),s.k("J.E"))
if(r.length===0){u.i4("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p6(t,s.c,s.f),$async$Xp)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dOY(u,r),"Preparing file\u2026"),$async$Xp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xp,w)},
agd(d){return this.ckw(d)},
ckw(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ho1(d,!1),$async$agd)
case 3:s=f
r=s==null
q=B.a6F(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i4("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agd,w)},
afd(){var x=0,w=A.j(y.H),v=this,u
var $async$afd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fGj(u,v.a.c),$async$afd)
case 2:return A.h(null,w)}})
return A.i($async$afd,w)},
bBI(){B.hne(!1,new B.dOS(this,null))
return},
J6(d,e){return this.cdI(d,e)},
b_H(d){return this.J6(null,d)},
cdH(d){return this.J6(d,null)},
cdI(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J6=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dPd(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xe.c7().an6(!0,C.a_j,!1),$async$J6)
case 10:r=g
if(r==null||J.cm(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dPe(l,s,r),"Preparing\u2026"),$async$J6)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
s.i4("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i4("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCe(p,l,e,s.a.c),$async$J6)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J6,w)},
Ii(d){return this.bYk(d)},
bYk(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hCs(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_H(t),$async$Ii)
case 8:x=6
break
case 7:u.i4("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i4("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tJ(new B.dP7(u,d),"Receiving video\u2026"),$async$Ii)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dP8(u,d),"Receiving\u2026"),$async$Ii)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ii,w)},
Ea(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ea=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CS()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agd(t),$async$Ea)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ii(s),$async$Ea)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cm(A.e9(new B.dPi(u),!1,null,y.N)),$async$Ea)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$Ea)
case 10:x=1
break
case 9:x=11
return A.b(u.Ii(C.a.i(r)),$async$Ea)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ea,w)},
ah1(d){return this.cpK(d)},
cpK(d){var x=0,w=A.j(y.H),v=this
var $async$ah1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPh(v,d),"Saving\u2026"),$async$ah1)
case 2:return A.h(null,w)}})
return A.i($async$ah1,w)},
IT(d){return this.bKa(d)},
bKa(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l7(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IT)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c8b(t),$async$IT)
case 6:case 5:s=d.a
x=7
return A.b(B.Es(u.a.c,s),$async$IT)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IT)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IT,w)},
ahT(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0O(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dPC(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahT)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afd()
break
case"import":u.abE()
break}case 1:return A.h(v,w)}})
return A.i($async$ahT,w)},
c6i(d){var x=d.c
if(C.a.a0(x,"video/")||d.mu(D.mB))return C.q9
if(C.a.a0(x,"image/")||d.mu(D.Qk))return C.u3
if(C.a.t(x,"pdf"))return E.NU
return D.alS},
B(d){var x,w,v=this,u=null,t=B.a0O(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.GH,u,u,u,new B.dPN(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bNQ,u,u,u,v.e?u:v.gcdo(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcr9()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bI9:E.amg,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a14,u,u,u,v.e?u:v.gc6j(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.o4,u,u,u,v.e?u:v.gb0O(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.bPy,u,u,u,v.e?u:new B.dPO(v),u,u,u,u,"More options",u))
q=A.ez(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lD(new B.dPP(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m3(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayL(C.js,s,!0,t,w?u:v.gcu7(),u),1)
x.push(new A.D(D.bud,A.mC(new B.dPQ(),A.B(A.a([s,C.at,A.E(new B.ayL(C.vQ,"Export",!1,t,w?u:v.gbNS(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iK,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcJ(t,v.e?u:v.gb0O(),u)
else s=A.k9(!0,u,u,new B.dPR(v,t),s,u,D.bu5,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.V,u,C.aa,C.r,A.a([p,n,A.w(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayL.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bm(C.aE,t,t,0,C.c,t,C.vz,t,new A.b7(s,C.W),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cj,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vz,t,new A.b7(s,C.W),new A.az(v,1,C.q,-1),t,t,t,t)
return A.er(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bcJ.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.au(A.mC(new B.d2F(),new A.D(E.Zn,A.w(A.a([A.mC(new B.d2G(),A.p(x,A.X(C.yi,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.et,C.ik,x,x,new A.bp(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o4,D.fBy,this.d,A.bm(C.aE,x,x,x,C.c,x,C.Zi,x,new A.b7(A.n(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.B4,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.abU.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dD(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mu(D.mB))p=D.deX
else{p=C.a.a0(p,"image/")||i.mu(D.Qk)
n=y.O
p=p?A.a([C.cN,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapb()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mu(D.mB))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fM,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mu(D.mB)))l.push(A.fR_(C.aE,!1,j,j,j,!1,j,j,new B.d31(k),j,j,new A.b7(A.n(5),C.W),j,j,!1,u))
x=A.X(C.o0,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mC(new B.d32(),new A.D(C.e8,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YQ,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.YO.prototype={
U(){return new B.ayQ()},
gde(){return this.c}}
B.ayQ.prototype={
a_(){this.a1()
this.xL()},
q(){B.hCH(this.e)
this.a2()},
xL(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xL=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rr(o.c,o.d),$async$xL)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hCK(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hCJ(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2Z(s))
x=1
break}s.m(new B.d3_(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d30(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xL,w)},
a1D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rr(t.c,t.d),$async$a1D)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.eXS)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahl(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1D)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1D,w)},
bYd(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ko(u,C.A,v,new B.d2X(w,t),C.fZ,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aH.gal(t))x=A.fO(t,C.A,v,new B.d2Y(w),C.fZ,C.du,!0,v,!1,v,v)
else return C.bI
return A.uv(C.ae,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0O(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.C7,u,u,u,v.gb4B(),u,u,u,u,"Share / save",u))
r=A.ez(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ej
else{q=v.r
if(q!=null)t=new A.D(C.eD,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eD,A.w(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.dn(C.C7,D.fkr,v.gb4B(),A.bm(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bYd()}return A.c6(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.YL.prototype={
U(){return new B.ayN(A.ai9(),C.bB,C.bB)},
gde(){return this.c}}
B.ayN.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fv(w,A.a6(w).k("fv<1>")).il(new B.d2C(v))
x.gcQB().il(new B.d2D(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fv(x,A.a6(x).k("fv<1>"))}if(x==null)x=C.b5_
x.il(new B.d2E(v))
v.xL()},
xL(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xL=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rr(p.c,p.d),$async$xL)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2v(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a2U(r,s.a.d.c)),$async$xL)
case 8:if(s.c==null){x=1
break}s.m(new B.d2w(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d2x(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xL,w)},
Zw(){var x=0,w=A.j(y.H),v=this,u
var $async$Zw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h5(0),$async$Zw)
case 5:x=3
break
case 4:x=6
return A.b(u.ip(0),$async$Zw)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zw,w)},
aSy(d){var x=d.a
return C.a.aX(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aX(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0O(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.ez(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ej
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJ8,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.On,C.n),o,88,o,o,o,o,o,88)
t=A.l_(C.aE,o,o,m,0,new B.d2y(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aSy(p.w)+" / "+p.aSy(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bm(C.aE,o,o,o,o,D.eUk,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yr:C.j2,o,o,o,o,o)
x=A.w(A.a([u,C.kG,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6m(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c6(v,w,A.au(new A.D(C.r7,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pw.prototype={
U(){return new B.ayT()},
gde(){return this.c}}
B.ayT.prototype={
a_(){this.a1()
this.Pv()},
Pv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fTj(o.c,o.d,new B.d3f(s)),$async$Pv)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d3g(s))
x=1
break}s.e=r
q=O.hZw(r)
if(q==null){s.m(new B.d3h(s))
x=1
break}s.d=q
q.aQ(0,s.gb_v())
x=8
return A.b(q.ik(0).d7(0,C.r3),$async$Pv)
case 8:if(s.c==null){x=1
break}s.m(new B.d3i(s))
x=9
return A.b(q.pX(0),$async$Pv)
case 9:q.tl(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d3j(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pv,w)},
cbG(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d3k(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_v())
w=x.d
if(w!=null)w.q()
B.i8k(x.e)
x.a2()},
adM(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZd(u.c,u.d),$async$adM)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adM,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0O(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.ez(A.a([A.aI(t,t,t,t,C.p0,t,t,t,u.gc6g(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ik(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ej
else{q=u.r
if(q!=null)s=new A.D(C.eD,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahE(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.Ac(s,t),A.aB(t,A.D7(A.p(t,A.X(q?I.yr:C.j2,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bP,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d3m(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.YQ.prototype={
U(){return new B.ayR(new A.cv(null,y.A))}}
B.ayR.prototype={
gcCX(){var x,w,v=this.a
if(v.e!==D.RI)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcCB(){var x,w,v=this.a
if(v.e!==D.zk)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcCX()
if(x!=null){v.Qx(x)
v.e=A.dv(R.Fp,new B.d3b(v,x))}w=v.gcCB()
if(w!=null){v.Qw(w)
v.f=A.dv(C.fW,new B.d3c(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qw(d){return this.ciJ(d)},
ciJ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoX(d),$async$Qw)
case 3:t=f
x=4
return A.b(B.c8u(d),$async$Qw)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d33(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qw,w)},
Qx(d){return this.ciK(d)},
ciK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fGM(d),$async$Qx)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bA9(t),$async$Qx)
case 4:if(u.c==null){x=1
break}u.m(new B.d34(u))
u.c.I(y.q).f.S(D.aOV)
case 1:return A.h(v,w)}})
return A.i($async$Qx,w)},
gc2g(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6h(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CS()){t=u.c
if(t!=null)t.I(y.q).f.S(D.f_Y)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cm(A.e9(new B.d35(),!1,null,y.N)),$async$a1p)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bA9(s),$async$a1p)
case 4:t=u.c
if(t!=null)t.I(y.q).f.S(D.aOV)
case 1:return A.h(v,w)}})
return A.i($async$a1p,w)},
a9y(d){return this.bHS(d)},
bHS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fD(C.d.aH(t,", "))),$async$a9y)
case 3:if(d.e!=null){t=d.I(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9y,w)},
adK(d){return this.bHC(d)},
bHC(d){var x=0,w=A.j(y.H),v=this
var $async$adK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fD(v.a.c)),$async$adK)
case 2:if(d.e!=null)d.I(y.q).f.S(D.eYl)
return A.h(null,w)}})
return A.i($async$adK,w)},
a1k(d){return this.cpM(d)},
cpM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anV(s.d,4),$async$a1k)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rZ(r,"ngmy_doc_share_qr.png"),$async$a1k)
case 8:q=f
if(d.e!=null)d.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1k,w)},
gaVP(){var x,w=this.a
if(w.e!==D.HT)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b3(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b3(x,13))
return null},
a9v(d){return this.bHL(d)},
bHL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVP()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fD(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9v)
case 3:if(d.e!=null)d.I(y.q).f.S(D.eZY)
case 1:return A.h(v,w)}})
return A.i($async$a9v,w)},
adL(){var x=0,w=A.j(y.H),v=this,u
var $async$adL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UP(),$async$adL)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adL,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0O(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HT&&i!==D.RI&&i!==D.zk
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.ez(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HT||t===D.RI||t===D.zk?l:A.aI(l,l,l,l,C.l3,l,l,l,m.gaYJ(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pP(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bw,A.d(""+q.d+" file(s) \xb7 "+m.gc2g(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HT){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc6h(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hm(D.bTl,D.ftE,new B.d36(m,d),l)],p))}if(m.a.e===D.HT&&m.gaVP()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hm(D.bPS,D.fqo,new B.d37(m,d),l)],p))
if(m.a.e===D.zk){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Em:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.RI){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Em:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bLC,D.fwI,m.gcq9(),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.op(i,A.c6(v,w,new A.D(C.a9,A.w(A.a([A.E(A.p(l,A.w(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.er(N.C6,C.U5,new B.d38(m,d),l),1),C.at,A.E(A.dn(C.yH,C.a8C,new B.d39(m,d),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bG(C.zS,m.gaYJ(),A.bm(C.aK,l,l,l,l,C.fO,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d3a(),y.C)}}
B.abS.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cc(A.w(A.a([w,C.aQ,A.p(x,A.pP(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bG(C.wC,new B.d2u(d),x)],u),x,x,C.mQ,v,x,x,x,x,D.fjs,x)}}
B.YK.prototype={
U(){return new B.ayM(A.zk(C.xF,C.nC,C.uh))}}
B.ayM.prototype={
q(){this.d.q()
this.a2()},
awE(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a4(x,!1).O(t)
return}}},
B(d){var x=null
return A.c6(A.ez(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fqS,x,x,x,1,x,!0),C.w,A.zj(this.d,C.bU,this.gawD()),x,!1,!1,x,x)}}
B.YR.prototype={
U(){return new B.ayS(A.zk(C.xF,C.nC,C.uh))},
gde(){return this.c}}
B.ayS.prototype={
bZg(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afA(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.S0("text/plain"),$async$afA)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.S(D.f_S)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afA,w)},
aal(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aal=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.ho1(p,!0),$async$aal)
case 3:t=e
p=t==null
s=B.a6F(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.S(D.eXs)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aal,w)},
q(){this.d.q()
this.a2()},
awE(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZg(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.an9,v,v,v,w.gbNo(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a1b,v,v,v,w.gcg6(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.ez(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.u_:P.NH,v,v,v,v,v),v,v,v,new B.d3e(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fxz,v,v,v,1,v,!0)
u=A.zj(w.d,C.bU,w.gawD())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.V,v,C.aa,C.r,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ehF],s),v),v,!1,!1,v,v)}}
B.bcK.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oL
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oL:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Zt,A.B(A.a([u,C.bc,A.E(A.w(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.eA,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a94.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Om.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.WR.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Ol.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.EY.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cjq.prototype={}
B.EX.prototype={}
B.a93.prototype={}
B.atf.prototype={}
B.WS.prototype={}
var z=a.updateTypes(["aA<~>()","R(jl)","m(jl)","UG(Y)","~()","YN(Y)","H(H,jl)","Pw(Y)","~(lY)","cp(EX)","aA<jl?>(@)","UE(Y)","UI(Y)","D(jl)","jl(@)","a5<m,@>(jl)","YM(Y)","UF(Y)","YO(Y)","YL(Y)","YQ(Y)","abS(Y)","ai<jl>()","YR(Y)","abU(Y,H)","YK(Y)","a5<m,aD>(jl)","cp(WR)","cp(a93)","aA<cp>(EX)"])
B.cjm.prototype={
$1(d){var x=this.a
x.x=D.aM3
x.y.L(0,D.aM3)},
$S:69}
B.cjn.prototype={
$1(d){var x=this.a
x.x=D.aM2
x.y.L(0,D.aM2)},
$S:69}
B.cjo.prototype={
$1(d){var x=this.a
x.agV(A.aOd(d.data)).bH(new B.cjl(x),y.b)},
$S:69}
B.cjl.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cjp.prototype={
$1(d){},
$S:69}
B.cjs.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hHq(d.channel))},
$S:15}
B.cjt.prototype={
$1(d){},
$S:15}
B.cju.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i_z(w.iceConnectionState)
x.cx=w
if($.h1f())switch(w.a){case 0:x.cy=D.aM8
break
case 1:x.cy=D.aM9
break
case 3:x.cy=D.aMa
break
case 5:x.cy=D.aM6
break
case 6:x.cy=D.aM7
break
case 7:x.cy=D.a6l
break
default:break}},
$S:147}
B.cjv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i_A(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.cjw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i9O(w.signalingState)},
$S:147}
B.cjx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i81(w.connectionState)},
$S:147}
B.cjy.prototype={
$1(d){},
$S:147}
B.cjz.prototype={
$1(d){},
$S:15}
B.fij.prototype={
$1(d){var x=y.F.a(new A.rP([],[]).pF(d.target.result,!1)),w=C.xG.t(x.objectStoreNames,"blobs")
if(!w)C.xC.KJ(x,"blobs")},
$S:199}
B.fG7.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w3.ff(this.b)
$.eQ.mp()
this.c.$1(d)},
$S:445}
B.fG9.prototype={
$1(d){return this.a.$1(B.hQj(this.b,this.c))},
$S:35}
B.fG8.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fG6.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fGm.prototype={
$1(d){var x=this
return B.hds(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fGn.prototype={
$1(d){var x=this
return B.hds(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fkx.prototype={
$1(d){var x=this
return B.c85(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2N.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2K.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c85(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2M.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c85(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2L.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c85(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2P.prototype={
$4(d,e,f,g){var x=null
return A.jF(A.B(A.a([A.aI(x,x,x,x,D.bKd,x,x,x,new B.d2O(d),x,x,x,x,x,x),A.E(A.EI(D.Q2,!0,x,C.a0e,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Q2,x,g,C.aj_,0,e,f)},
$C:"$4",
$R:4,
$S:415}
B.d2O.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fmw.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eI,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.bo8,C.f,v,v,D.b0v,v,v,v,v,D.aiQ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b3(4,A.n(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOo,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.D(C.FC,A.w(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b3(4,A.n(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ano,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v),C.bw,A.B(A.a([A.E(A.dT(C.dh,new B.fmu(d),v),1),C.at,A.E(A.bG(D.fpp,new B.fmv(p,x,d),A.bm(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mo,v,v,v,v),v)},
$S:60}
B.fmu.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fmv.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.S(D.eYA)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aBm(v,x))},
$S:0}
B.fn_.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eI,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bnZ,C.f,w,w,D.b1Y,w,w,w,w,D.aiQ,w,w,1/0),new A.D(C.FC,A.w(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fYi(u,"Organization name",C.G3,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fYi(u,"Access code",C.ng,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fYi(u,"Member password",H.GC,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.bw,A.bG(D.fxF,new B.fmZ(r,q,p,d),A.bm(C.aE,w,w,w,w,C.fO,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mo,w,w,w,w),w)},
$S:60}
B.fmZ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.S(D.eYF)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aEs(u,x,w))},
$S:0}
B.c7X.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a3(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cD(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.vh(p,null).d7(0,C.Ys),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BF(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.am.$1("[doc share lan web] "+A.u(r)+": "+A.u(m))
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
B.c82.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c83.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c84.prototype={
$1(d){return d.b},
$S:z+2}
B.c7Z.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c8_.prototype={
$1(d){return d.b},
$S:z+2}
B.c7Y.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c80.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c81.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fGk.prototype={
$1(d){return new B.UE(this.a,null)},
$S:z+11}
B.fGl.prototype={
$1(d){return new B.UI(this.a,this.b,this.c,null)},
$S:z+12}
B.dOL.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPU.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPV.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPW.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPT(x,d))},
$S:2}
B.dPT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPY.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPZ.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQ_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQ0.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dQ1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQ4.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*14)),e)},
$S:108}
B.dQ2.prototype={
$1(d){var x=this.a
return x.f?null:x.Zv()},
$S:2}
B.dQ3.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mu(D.Qk))s=C.u3
else s=C.a.a0(s,"video/")||d.mu(D.mB)?C.q9:D.alS
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.w(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapb(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOM.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dON.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c86.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:93}
B.c87.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:93}
B.fH3.prototype={
$2(d,e){return e===this.a},
$S:339}
B.ffv.prototype={
$1(d){return J.k(d)},
$S:17}
B.fkJ.prototype={
$1(d){var x=this.b
B.hOm(C.FR.ga63(this.a)).bH(x.gcG2(x),y.H)},
$S:125}
B.fkK.prototype={
$1(d){return this.a.d5(0,null)},
$S:125}
B.fkL.prototype={
$0(){return null},
$S:11}
B.c8l.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fkM.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.S(Date.now(),0,!1).a5().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jl(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.foQ.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fjb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fjc.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c8q.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mB)},
$S:z+1}
B.fL9.prototype={
$1(d){return new B.YM(this.a,null)},
$S:z+16}
B.d2J.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:9}
B.d2H.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d2I.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dPS.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0x()},
$S:12}
B.dPf.prototype={
$0(){var x=J.bDj(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPg.prototype={
$0(){var x=J.bDj(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOP.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dOO(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDq(this.c)}},
$S:0}
B.dOO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOQ.prototype={
$0(){var x=J.bDj(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOV.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dOU(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDq(this.c)}},
$S:0}
B.dOU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPG.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPH.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dPc.prototype={
$1(d){return new B.UF(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dP9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I2(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UJ(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a3(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0H(s.gM(t)),$async$$0)
case 8:case 7:r.i4(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOT.prototype={
$1(d){this.a.abI(d,"No files selected.","Added")},
$S:445}
B.dPk.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dPj(),A.T(x).k("M<1,m>")))},
$S:0}
B.dPj.prototype={
$1(d){return d.a},
$S:z+2}
B.dOZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xe.c7().cSy(C.a_j,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gal(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jq(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.am.$1("[doc share import] "+A.u(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i4("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i4("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoW(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cm(l)){o.i4("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i4("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPD.prototype={
$1(d){return new B.Pw(this.a.a.c,this.b,null)},
$S:z+7}
B.dPE.prototype={
$1(d){return new B.YO(this.a.a.c,this.b,null)},
$S:z+18}
B.dPF.prototype={
$1(d){return new B.YL(this.a.a.c,this.b,null)},
$S:z+19}
B.dPa.prototype={
$1(d){return new B.Pw(this.a.a.c,this.b,null)},
$S:z+7}
B.dPb.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPw.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I2(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6H(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i4("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cm8(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.T(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dPs(p),r),new B.dPt(),r.k("M<ak.E,m>")).c0(0,new B.dPu())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cm(A.e9(new B.dPv(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p5(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UP(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPs.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dPr(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPt.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPu.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPv.prototype={
$1(d){var x=this.a
return new B.YQ(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPx.prototype={
$1(d){return d.a},
$S:z+2}
B.dPy.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPq.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapb(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mu(D.mB)?C.u5:C.oY
p=!x||p.mu(D.mB)?"Play video":"View"
return A.c0(A.bl(!0,new A.D(C.Bg,A.w(A.a([q,o,t,C.aB,B.YP(!1,u,!1,w,p,new B.dPl(d),v),B.YP(!1,u,!1,C.js,"Share via QR",new B.dPm(d),"Letters/numbers QR code"),B.YP(!1,u,!1,D.a0k,"Send to their Code",new B.dPn(d),"Enter someone else's personal code"),B.YP(!1,u,!1,C.hB,"Download / save",new B.dPo(d),v),C.an,B.YP(!1,u,!0,C.ef,"Delete",new B.dPp(d),v)],y.p),C.ai,v,C.e,C.Q,0,C.p),v),!0,!1,C.ae,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.W,C.W,C.W),C.kM,v,v,C.n),C.be)},
$S:714}
B.dPl.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dPm.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dPn.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPo.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dPp.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dOW.prototype={
$1(d){return d.a},
$S:z+2}
B.dOX.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6J(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gp(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p5(s.c,s.f),$async$$0)
case 4:u.i4(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOS.prototype={
$1(d){var x=this.a
x.tJ(new B.dOR(x,d,this.b),"Preparing\u2026")},
$S:445}
B.dOR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i4("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UJ(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cm(s)){t.i4("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCe(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPd.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dPe.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fTm(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP7.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gm(new B.dP3(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i4("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dP4(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dP5(s))
case 5:x=8
return A.b(r.b.iq(0,C.Fm,new B.dP6()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a3(t)
if(q.gal(t)){s.i4("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i4("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP3.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dP0(x,d,e))},
$S:219}
B.dP0.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dP4.prototype={
$1(d){return new B.abS(this.a.a,null)},
$S:z+21}
B.dP5.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dP6.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dP8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Im(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6x(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_H(B.Im(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoW(new B.dP1(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cm(r)){if(B.fTl(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i4(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cE(r)
p=o.eP(r,new B.dP2()).gM(0)
s.i4(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP1.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dP_(x,d,e))},
$S:219}
B.dP_.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dP2.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mB)},
$S:z+1}
B.dPi.prototype={
$1(d){return new B.YR(this.a.a.c,null)},
$S:z+23}
B.dPh.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZd(u.a.c,v.b),$async$$0)
case 2:t.i4(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPC.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bl(!0,new A.D(C.Bg,A.w(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YP(!0,w,!1,C.ng,"My Code",new B.dPz(d),"Your personal code & QR \u2014 others send docs to you"),B.YP(!1,w,!1,D.a0k,"Send to their Code",new B.dPA(this.a,d),"Enter someone else's 5-digit code + letter"),B.YP(!1,w,!1,S.yz,"Import backup",new B.dPB(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.Q,0,C.p),x),!0,!1,C.ae,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.W,C.W,C.W),C.kM,x,x,C.n),C.be)},
$S:714}
B.dPz.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dPA.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bBI()},
$S:0}
B.dPB.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dPP.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Iw(D.Q2,x,C.a0e,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cS(C.d.gH(D.Q2).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:692}
B.dPN.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dPO.prototype={
$0(){this.a.ahT()
return null},
$S:0}
B.dPQ.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*10)),e)},
$S:108}
B.dPR.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abU(e,w,v,this.b,x.e,x.c6i(w),new B.dPJ(x,w),new B.dPK(x,v,w),new B.dPL(x,w),new B.dPM(x,w),null)},
$S:z+24}
B.dPJ.prototype={
$0(){this.a.af7(this.b)
return null},
$S:0}
B.dPK.prototype={
$0(){var x=this.a
return x.m(new B.dPI(x,this.b,this.c))},
$S:0}
B.dPI.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPL.prototype={
$0(){this.a.NU(this.b)
return null},
$S:0}
B.dPM.prototype={
$0(){this.a.ahG(this.b)
return null},
$S:0}
B.d2F.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*18)),e)},
$S:108}
B.d2G.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:132}
B.d32.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*14)),e)},
$S:108}
B.d31.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d2Z.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d3_.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d30.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2X.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gal(w))return A.fO(w,C.A,x,new B.d2V(this.a),C.fZ,C.du,!0,x,!1,x,x)
$.aV.x1$.push(new B.d2W(this.a))
return C.bI},
$S:138}
B.d2V.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d2T(this.a))
return C.bI},
$S:198}
B.d2T.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2Q(x))},
$S:9}
B.d2Q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2W.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2S(x))},
$S:9}
B.d2S.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2Y.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d2U(this.a))
return C.bI},
$S:198}
B.d2U.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2R(x))},
$S:9}
B.d2R.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2C.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2B(x,d))},
$S:1743}
B.d2B.prototype={
$0(){return this.a.f=this.b===C.uE},
$S:0}
B.d2D.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2A(x,d))},
$S:9}
B.d2A.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2E.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2z(x,d))},
$S:9}
B.d2z.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2v.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d2w.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d2x.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d2y.prototype={
$1(d){return this.a.d.MU(0,A.dD(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d3f.prototype={
$0(){var x=this.a.a
return B.rr(x.c,x.d)},
$S:1744}
B.d3g.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d3h.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d3i.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d3j.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d3k.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d3m.prototype={
$0(){var x=this.a
x.m(new B.d3l(x))},
$S:0}
B.d3l.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h5(0)
else x.pX(0)},
$S:0}
B.d3b.prototype={
$1(d){return this.a.Qx(this.b)},
$S:12}
B.d3c.prototype={
$1(d){return this.a.Qw(this.b)},
$S:12}
B.d33.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d34.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d35.prototype={
$1(d){return D.h3o},
$S:z+25}
B.d3a.prototype={
$2(d,e){if(d)B.UP()},
$S:120}
B.d36.prototype={
$0(){return this.a.a9y(this.b)},
$S:0}
B.d37.prototype={
$0(){return this.a.a9v(this.b)},
$S:0}
B.d38.prototype={
$0(){return this.a.adK(this.b)},
$S:0}
B.d39.prototype={
$0(){return this.a.a1k(this.b)},
$S:0}
B.d2u.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d3e.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q0(),$async$$0)
case 2:u.m(new B.d3d(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d3d.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c8s.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mB)},
$S:z+1}
B.c8t.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c8r.prototype={
$2(d,e){return this.bj8(d,e)},
bj8(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UQ(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fos.prototype={
$1(d){if(d===D.a6k&&(this.a.a.a&30)===0)this.a.fT(0)},
$S:z+27}
B.fot.prototype={
$0(){},
$S:11}
B.foZ.prototype={
bkH(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fcO(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h8A(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkH(d,e)},
$S:544}
B.foY.prototype={
$1(d){var x=this
d.b=new B.foX(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.foX.prototype={
$1(d){return this.bkG(d)},
bkG(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZe(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aL(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.A(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.fcO(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.u(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6G(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ayP.prototype,"gcd0","Q8",0)
x(v,"gcdS","J7",0)
x(v,"gcdn","xV",0)
x(v=B.aCI.prototype,"gc6c","adI",0)
x(v,"gc6d","Zu",0)
x(v,"gcsB","ahn",0)
x(v=B.aCL.prototype,"gc6e","Zv",0)
x(v,"gcsC","a1E",0)
x(B.aCJ.prototype,"gc6f","adJ",0)
x(B.ayO.prototype,"gc6k","c6l",4)
x(v=B.aCK.prototype,"gcdo","a_B",0)
x(v,"gcr9","cra",4)
x(v,"gb0O","ay_",0)
x(v,"gcu7","ahN",0)
x(v,"gbNS","Xp",0)
x(v,"gc6j","Ea",0)
x(B.ayQ.prototype,"gb4B","a1D",0)
x(B.ayN.prototype,"gc6m","Zw",0)
x(v=B.ayT.prototype,"gb_v","cbG",4)
x(v,"gc6g","adM",0)
x(v=B.ayR.prototype,"gcq9","a1p",0)
x(v,"gaYJ","adL",0)
w(B.ayM.prototype,"gawD","awE",8)
x(v=B.ayS.prototype,"gcg6","afA",0)
x(v,"gbNo","aal",0)
w(v,"gawD","awE",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cjq,B.a93,B.atf,B.aBm,B.aEs,B.jl,B.abA,B.buo,B.EX,B.WS])
w(B.cjr,B.cjq)
w(B.b3m,B.a93)
x(A.hZ,[B.cjm,B.cjn,B.cjo,B.cjl,B.cjp,B.cjs,B.cjt,B.cju,B.cjv,B.cjw,B.cjx,B.cjy,B.cjz,B.fij,B.fG7,B.fG9,B.fG8,B.fGm,B.fGn,B.fkx,B.d2K,B.d2M,B.d2L,B.d2P,B.fmw,B.fn_,B.c7X,B.c83,B.c84,B.c8_,B.c7Y,B.c80,B.c81,B.fGk,B.fGl,B.dPW,B.dQ4,B.dQ2,B.dQ3,B.ffv,B.fkJ,B.fkK,B.c8l,B.fkM,B.foQ,B.fjb,B.fjc,B.c8q,B.fL9,B.d2J,B.d2H,B.dPS,B.dOO,B.dOU,B.dPc,B.dOT,B.dPj,B.dPD,B.dPE,B.dPF,B.dPa,B.dPs,B.dPr,B.dPt,B.dPu,B.dPv,B.dPx,B.dPy,B.dPq,B.dOW,B.dOX,B.dOS,B.dPd,B.dP4,B.dP2,B.dPi,B.dPC,B.dPP,B.dPQ,B.d2F,B.d2G,B.d32,B.d31,B.d2X,B.d2V,B.d2T,B.d2W,B.d2Y,B.d2U,B.d2C,B.d2D,B.d2E,B.d2y,B.d3b,B.d3c,B.d35,B.c8s,B.c8t,B.fos,B.foY,B.foX])
w(B.b3n,B.atf)
x(A.j9,[B.fG6,B.d2N,B.d2O,B.fmu,B.fmv,B.fmZ,B.dOL,B.dPU,B.dPV,B.dPT,B.dPX,B.dPY,B.dPZ,B.dQ_,B.dQ0,B.dQ1,B.dOM,B.dON,B.fkL,B.d2I,B.dPf,B.dPg,B.dOP,B.dOQ,B.dOV,B.dPG,B.dPH,B.dP9,B.dPk,B.dOZ,B.dPb,B.dPw,B.dPl,B.dPm,B.dPn,B.dPo,B.dPp,B.dOY,B.dOR,B.dPe,B.dP7,B.dP0,B.dP5,B.dP6,B.dP8,B.dP_,B.dPh,B.dPz,B.dPA,B.dPB,B.dPN,B.dPO,B.dPJ,B.dPK,B.dPI,B.dPL,B.dPM,B.d2Z,B.d3_,B.d30,B.d2Q,B.d2S,B.d2R,B.d2B,B.d2A,B.d2z,B.d2v,B.d2w,B.d2x,B.d3f,B.d3g,B.d3h,B.d3i,B.d3j,B.d3k,B.d3m,B.d3l,B.d33,B.d34,B.d36,B.d37,B.d38,B.d39,B.d2u,B.d3e,B.d3d,B.fot])
x(A.ma,[B.abT,B.Nk,B.a94,B.Om,B.WR,B.Ol,B.EY])
x(A.ag,[B.YN,B.UE,B.UI,B.UF,B.YM,B.UG,B.YO,B.YL,B.Pw,B.YQ,B.YK,B.YR])
x(A.ah,[B.ayP,B.aCI,B.aCL,B.aCJ,B.ayO,B.aCK,B.ayQ,B.ayN,B.ayT,B.ayR,B.ayM,B.ayS])
x(A.at,[B.ack,B.ayL,B.bcJ,B.abU,B.abS,B.bcK])
x(A.kj,[B.c82,B.c7Z,B.c86,B.c87,B.fH3,B.dP3,B.dP1,B.dPR,B.d3a,B.c8r,B.foZ])
x(A.iT,[B.bhZ,B.bu2])})()
A.k_(b.typeUniverse,JSON.parse('{"b3m":{"a93":[]},"b3n":{"atf":[]},"YN":{"ag":[],"t":[]},"ayP":{"ah":["YN"]},"ack":{"at":[],"t":[]},"UE":{"ag":[],"t":[]},"UI":{"ag":[],"t":[]},"aCI":{"ah":["UE"]},"aCL":{"ah":["UI"]},"bhZ":{"iT":[]},"UF":{"ag":[],"t":[]},"aCJ":{"ah":["UF"]},"YM":{"ag":[],"t":[]},"UG":{"ag":[],"t":[]},"abU":{"at":[],"t":[]},"YO":{"ag":[],"t":[]},"YL":{"ag":[],"t":[]},"Pw":{"ag":[],"t":[]},"YQ":{"ag":[],"t":[]},"abS":{"at":[],"t":[]},"YK":{"ag":[],"t":[]},"YR":{"ag":[],"t":[]},"ayO":{"ah":["YM"]},"bu2":{"iT":[]},"aCK":{"ah":["UG"]},"ayL":{"at":[],"t":[]},"bcJ":{"at":[],"t":[]},"ayQ":{"ah":["YO"]},"ayN":{"ah":["YL"]},"ayT":{"ah":["Pw"]},"ayR":{"ah":["YQ"]},"ayM":{"ah":["YK"]},"ayS":{"ah":["YR"]},"bcK":{"at":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ue"),k:x("LN()"),m:x("bt<m,m>"),F:x("r2"),g:x("aA<jl?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<v>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jl>"),w:x("O<+file,name(ly,m)>"),u:x("O<cS>"),s:x("O<m>"),E:x("O<iT>"),a:x("O<dI>"),p:x("O<t>"),Z:x("O<H>"),G:x("bh"),A:x("cv<ah<ag>>"),n:x("ai<jl>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iC"),e:x("idK"),af:x("E8"),U:x("jl"),b:x("cp"),C:x("aD"),aK:x("w7"),ab:x("EX"),br:x("atf"),v:x("WS"),N:x("m"),X:x("bp<K>"),Q:x("lK"),D:x("dI"),aw:x("cx<m>"),cd:x("a_<a5<m,@>>"),c7:x("t"),ch:x("bW<ai<jl>>"),aW:x("bW<dI?>"),aY:x("bW<~>"),cx:x("abT"),b1:x("bg<ai<jl>>"),cf:x("bg<dI?>"),d4:x("bg<~>"),c4:x("aBm"),bG:x("aEs"),q:x("mY"),B:x("pn<EX>"),c6:x("pn<a94>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jl>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jl?"),R:x("aD?"),c:x("WS?"),d:x("+answerQr,transfer(m,aA<ai<jl>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,H)?"),L:x("+fileCount,mode,qrPayload(H,Nk,m)?"),aX:x("+fileCount,qrPayload,token(H,m,m)?"),T:x("m?"),K:x("dI?"),cm:x("abA?"),bk:x("aBm?"),ag:x("aEs?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZR=new A.az(C.aE,2,C.q,-1)
D.bXR=new A.a8(C.a3,C.a8,C.x,C.a2g,null,null)
D.b0v=new A.o(null,null,null,C.md,null,D.bXR,C.n)
D.b1Y=new A.o(null,null,null,C.md,null,E.GP,C.n)
D.acz=new A.v(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adN=new A.v(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeH=new A.v(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ag8=new A.v(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fkk=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fyA=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.d6z=x([D.fkk,C.an,D.fyA],y.p)
D.bnP=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d6z,null)
D.fCW=new A.y("Create your organization",null,C.fs,null,null,null,null,null,null,null,null,null)
D.foD=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.dmq=x([D.fCW,C.an,D.foD],y.p)
D.bnZ=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dmq,null)
D.fzb=new A.y("Team Member sign-in",null,C.fs,null,null,null,null,null,null,null,null,null)
D.fsr=new A.y("Enter the access code and password from your organization.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.dkg=x([D.fzb,C.an,D.fsr],y.p)
D.bo8=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dkg,null)
D.bu5=new A.Q(16,10,16,28)
D.bud=new A.Q(16,14,16,4)
D.bvr=new A.Q(20,0,20,16)
D.bvW=new A.Q(20,8,20,16)
D.aiQ=new A.Q(24,22,24,20)
D.a0k=new A.a1(63394,"MaterialIcons",!1)
D.alS=new A.a1(63515,"MaterialIcons",!1)
D.bI9=new A.a1(983813,"MaterialIcons",!1)
D.bFw=new A.a1(62867,"MaterialIcons",!1)
D.bJ8=new A.ae(D.bFw,44,C.c,null,null,null)
D.bKd=new A.ae(C.q_,null,C.ad,null,null,null)
D.bLC=new A.ae(C.j3,18,null,null,null,null)
D.bNj=new A.ae(D.a0k,26,C.c,null,null,null)
D.bNQ=new A.ae(C.Gu,null,null,null,null,null)
D.bOo=new A.ae(C.yA,null,null,null,null,null)
D.bPy=new A.ae(W.a0x,null,null,null,null,null)
D.bPS=new A.ae(C.hl,16,null,null,null,null)
D.bTl=new A.ae(C.rf,16,null,null,null,null)
D.bJq=new A.ae(C.ng,null,null,null,null,null)
D.bUc=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOW=new A.ae(C.G3,null,null,null,null,null)
D.bUh=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJL=new A.ae(H.GC,null,null,null,null,null)
D.bUs=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cHZ=x([C.fb,C.aZ,C.aE],y.O)
D.bZI=new A.a8(C.ay,C.aC,C.x,D.cHZ,null,null)
D.cHs=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Q2=x([C.fb,C.aE],y.O)
D.Qk=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mB=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.deX=x([C.oF,C.aE],y.O)
D.e6_={iceServers:0}
D.aGI={urls:0}
D.dq5=new A.bt(D.aGI,["stun:stun.l.google.com:19302"],y.m)
D.dq4=new A.bt(D.aGI,["stun:stun1.l.google.com:19302"],y.m)
D.cXO=x([D.dq5,D.dq4],A.ax("O<a5<m,m>>"))
D.dpo=new A.bt(D.e6_,[D.cXO],A.ax("bt<m,@>"))
D.HT=new B.Nk(0,"lanDirect")
D.RH=new B.Nk(1,"cloudStash")
D.dB2=new B.Nk(2,"inlineInstant")
D.RI=new B.Nk(3,"webrtcLink")
D.zk=new B.Nk(4,"videoCloud")
D.fyz=new A.y("Receive file",null,C.mK,null,null,null,null,null,null,null,null,null)
D.cxq=x([E.anw,C.ab,D.fyz],y.p)
D.ePP=new A.ck(C.aN,C.b7,C.j,C.m,null,C.p,null,0,D.cxq,null)
D.ebU=new A.D(C.ck,D.ePP,null)
D.fbr=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2W,null,null,null)
D.fkS=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fbr,null,C.L,null,null,null,null,null,null,null)
D.eba=new A.D(C.Bl,D.fkS,null)
D.b6d=new A.co(C.A,null,null,D.eba,null)
D.ehF=new A.cL(0,null,0,28,null,null,D.b6d,null)
D.ehY=new B.a94(0,"RTCDataChannelConnecting")
D.aM2=new B.a94(1,"RTCDataChannelOpen")
D.aM3=new B.a94(3,"RTCDataChannelClosed")
D.ehZ=new B.EY(0,"RTCIceConnectionStateNew")
D.ei_=new B.EY(1,"RTCIceConnectionStateChecking")
D.ei0=new B.EY(2,"RTCIceConnectionStateCompleted")
D.ei1=new B.EY(3,"RTCIceConnectionStateConnected")
D.ei2=new B.EY(4,"RTCIceConnectionStateCount")
D.ei3=new B.EY(5,"RTCIceConnectionStateFailed")
D.ei4=new B.EY(6,"RTCIceConnectionStateDisconnected")
D.aM4=new B.EY(7,"RTCIceConnectionStateClosed")
D.aM5=new B.WR(0,"RTCIceGatheringStateNew")
D.ei5=new B.WR(1,"RTCIceGatheringStateGathering")
D.a6k=new B.WR(2,"RTCIceGatheringStateComplete")
D.a6l=new B.Ol(0,"RTCPeerConnectionStateClosed")
D.aM6=new B.Ol(1,"RTCPeerConnectionStateFailed")
D.aM7=new B.Ol(2,"RTCPeerConnectionStateDisconnected")
D.aM8=new B.Ol(3,"RTCPeerConnectionStateNew")
D.aM9=new B.Ol(4,"RTCPeerConnectionStateConnecting")
D.aMa=new B.Ol(5,"RTCPeerConnectionStateConnected")
D.ei6=new B.Om(0,"RTCSignalingStateStable")
D.ei7=new B.Om(1,"RTCSignalingStateHaveLocalOffer")
D.ei8=new B.Om(2,"RTCSignalingStateHaveRemoteOffer")
D.ei9=new B.Om(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eia=new B.Om(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMb=new B.Om(5,"RTCSignalingStateClosed")
D.eUk=new A.as(160,48)
D.b7r=new A.fi(2,null,null,null,null,C.aE,null,null,null,null)
D.eVR=new A.a7(16,16,D.b7r,null)
D.fo0=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXi=new A.b1(D.fo0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fvo=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eXl=new A.b1(D.fvo,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fDZ=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eXs=new A.b1(D.fDZ,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fnB=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new A.b1(D.fnB,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fzm=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aOV=new A.b1(D.fzm,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fAL=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYl=new A.b1(D.fAL,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFn=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new A.b1(D.fFn,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fDp=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eYF=new A.b1(D.fDp,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEB=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eZr=new A.b1(D.fEB,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fme=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eZY=new A.b1(D.fme,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fxc=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_i=new A.b1(D.fxc,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fqe=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f_O=new A.b1(D.fqe,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFt=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f_S=new A.b1(D.fFt,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmu=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f_Y=new A.b1(D.fmu,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fld=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0c=new A.b1(D.fld,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fia=new A.y("NGMY DOC SHARE",null,C.aQf,null,null,null,null,null,null,null,null,null)
D.fjs=new A.y("Show this to sender",null,C.kh,null,null,null,null,null,null,null,null,null)
D.fkr=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fp1=new A.y("Organization settings",null,C.cA,null,null,null,null,null,null,null,null,null)
D.fpp=new A.y("Sign in",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fqo=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fqS=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ftE=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fwp=new A.y("Send to their Doc Share",null,C.nv,null,null,null,null,null,null,null,null,null)
D.fwI=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fx0=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxF=new A.y("Create portal",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fy1=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBf=new A.y("Share files & videos\nwith a scan.",null,C.aQg,null,null,null,null,null,null,null,null,null)
D.fBy=new A.y("Add files",null,C.cj,null,null,null,null,null,null,null,null,null)
D.h3o=new B.YK(null)
D.a9y=new B.abT(0,"docShare")
D.a9z=new B.abT(1,"gate")
D.UD=new B.abT(2,"gateNoIndividual")})();(function staticFields(){$.aMZ=null
$.fay=function(){var x=y.N
return A.U(x,x)}()
$.G9=A.U(y.N,y.D)
$.afV=A.U(y.N,A.ax("ly"))
$.QM=A.U(y.N,y.D)
$.fb5=A.U(y.N,A.ax("abA"))
$.c8k=A.U(y.S,A.ax("buo"))
$.h8z=1
$.hWj=null
$.hWi=null
$.hNL=null
$.fYv=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iee","hpU",()=>new B.cjr())
x($,"ic9","h1f",()=>C.a.t(A.bu(A.bu(A.bu(A.GK(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["DEP4f+oEjNGPONBk5ni24Rxq7wQ="]=a.current})($__dart_deferred_initializers__);