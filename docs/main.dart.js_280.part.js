((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crj:function crj(){},
hXb(d){var x=null,w=new B.b5J(d,D.exb,new A.pJ(x,x,y.c6),new A.pJ(x,x,y.B))
w.bBG(d)
return w},
b5J:function b5J(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cre:function cre(d){this.a=d},
crf:function crf(d){this.a=d},
crg:function crg(d){this.a=d},
crd:function crd(d){this.a=d},
crh:function crh(d){this.a=d},
hXc(d,e){var x=y.N
x=new B.b5K(d,e,A.U(x,y.e),A.U(x,y.z))
x.bBH(d,e)
return x},
b5K:function b5K(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crk:function crk(d){this.a=d},
crl:function crl(d){this.a=d},
crm:function crm(d){this.a=d},
crn:function crn(d){this.a=d},
cro:function cro(d){this.a=d},
crp:function crp(d){this.a=d},
crq:function crq(d){this.a=d},
crr:function crr(d){this.a=d},
hbA(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zv.Mv(x,"ngmy_doc_share_v1",new B.fuZ(),1)},
i2Q(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wH(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
RZ(d,e){return B.iiu(d,e)},
iiu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aP5
x=7
return A.b(o==null?$.aP5=B.hbA():o,$async$RZ)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.mY(s,"blobs","readwrite")
C.j6.mx(J.mX(q,"blobs"),r,d)
x=8
return A.b(J.pS(q),$async$RZ)
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
return A.i($async$RZ,w)},
RY(d){return B.iit(d)},
iit(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aP5
x=7
return A.b(o==null?$.aP5=B.hbA():o,$async$RY)
case 7:s=f
r=J.mY(s,"blobs","readonly")
x=8
return A.b(C.j6.A2(J.mX(r,"blobs"),d),$async$RY)
case 8:q=f
x=9
return A.b(J.pS(r),$async$RY)
case 9:o=B.i2Q(q)
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
return A.i($async$RY,w)},
ahJ(d){return B.iis(d)},
iis(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aP5
x=7
return A.b(p==null?$.aP5=B.hbA():p,$async$ahJ)
case 7:s=f
r=J.mY(s,"blobs","readwrite")
C.j6.Gg(J.mX(r,"blobs"),d)
x=8
return A.b(J.pS(r),$async$ahJ)
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
return A.i($async$ahJ,w)},
fuZ:function fuZ(){},
i5i(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqu(w,v))}return u},
hCo(d,e){var x,w={},v=A.aXN("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fTZ(w,v,e)
C.wN.z3(v,"change",new B.fU0(w,v,!1))
C.wN.z3(v,"cancel",new B.fU_(w))
$.eV.mC()
v.click()
A.bQ(C.akz,new B.fTY(w),y.H)},
fTZ:function fTZ(d,e,f){this.a=d
this.b=e
this.c=f},
fU0:function fU0(d,e,f){this.a=d
this.b=e
this.c=f},
fU_:function fU_(d){this.a=d},
fTY:function fTY(d){this.a=d},
Dz(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUr()?3:4
break
case 3:x=5
return A.b(B.hxf(e,d,s,!0,!1,f,g,h,!1,i),$async$Dz)
case 5:x=1
break
case 4:x=6
return A.b(B.RC(d,s,f,g,h,i),$async$Dz)
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
return A.b(B.Jb(s,d),$async$Dz)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fqt(s,d),$async$Dz)
case 14:x=12
return A.b(r.hxf(q,p,o,n,m,l,k,j,a1,i),$async$Dz)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fUd(s,i,d,f,g,h),!1,null,y.H)),$async$Dz)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fUe(s,i,d,f,g,h),!1,null,y.H)),$async$Dz)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dz,w)},
RC(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RC=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0t(e),$async$RC)
case 3:u=k
x=4
return A.b(B.aqc(d,e,!1),$async$RC)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jb(e,d),$async$RC)
case 7:if(k){v=D.acc
x=1
break}x=8
return A.b(B.VR(e),$async$RC)
case 8:v=t?D.Wp:D.acd
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0r(d,e)){v=D.acc
x=1
break}x=11
return A.b(B.VR(e),$async$RC)
case 11:v=t?D.Wp:D.acd
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h6x(d,e)){v=D.acc
x=1
break}x=14
return A.b(B.VR(e),$async$RC)
case 14:v=D.Wp
x=1
break
case 13:v=t?D.Wp:D.acd
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
fqt(d,e){var x=0,w=A.j(y.y),v
var $async$fqt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0r(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0t(d),$async$fqt)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqt,w)},
hxf(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fxy(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hse(d,e,f,g,h,i,j){return new B.a_2(e,j,d,g,h,i,f,null)},
fzr(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fzr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fzu(A.R(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fzr)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzr,w)},
fzW(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fzW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
r=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fzY(A.R(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fzW)
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
return A.i($async$fzW,w)},
hbL(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fMv(d,e){var x=0,w=A.j(y.H),v
var $async$fMv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.VR(e),$async$fMv)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fMv,w)},
fUd:function fUd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUe:function fUe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acZ:function acZ(d,e){this.a=d
this.b=e},
fxy:function fxy(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_2:function a_2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAC:function aAC(){this.c=this.a=this.d=null},
dbE:function dbE(d,e){this.a=d
this.b=e},
dbB:function dbB(d){this.a=d},
dbD:function dbD(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbG:function dbG(){},
dbF:function dbF(d){this.a=d},
adr:function adr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDf:function aDf(d,e){this.a=d
this.b=e},
aGn:function aGn(d,e,f){this.a=d
this.b=e
this.c=f},
fzu:function fzu(d,e,f){this.a=d
this.b=e
this.c=f},
fzs:function fzs(d){this.a=d},
fzt:function fzt(d,e,f){this.a=d
this.b=e
this.c=f},
fzY:function fzY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzX:function fzX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd7(d,e,f,g,h){return B.hS3(d,e,f,g,h)},
hS3(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cd7=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dK(d,new B.cd8(s,e,h,g,f,q),y.g),y.l),$async$cd7)
case 3:r=p.aX(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd7,w)},
b0o(d,e,f,g,h){return B.hS4(d,e,f,g,h)},
hS4(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0o=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avL("GET",d)
o=A.h2W()
if(o==null)o=new A.Ms(A.a([],y.W))
x=7
return A.b(o.f8(0,s).df(0,C.Gx),$async$b0o)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CM(),$async$b0o)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cc(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0o,w)},
b0n(d){return B.hS1(d)},
hS1(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.oj),$async$b0n)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aS(0,A.m7(A.m5(p.e)).cF(0,p.w),null)
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
return A.i($async$b0n,w)},
cd6(d){return B.hS2(d)},
hS2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cd6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.qr),$async$cd6)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m5(q.e)).cF(0,q.w)
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
return A.i($async$cd6,w)},
cd8:function cd8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jy:function jy(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
J9(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hS9(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.J9(C.a.b2(t,u.length))}return null},
hSa(d){var x=B.J9(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hS5(){var x,w=$.oo(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7A(d){return B.hS6(d)},
hS6(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bK),$async$a7A)
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
return A.i($async$a7A,w)},
a7B(d,e){return B.hS7(d,e)},
hS7(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7B=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cK,null),$async$a7B)
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
return A.i($async$a7B,w)},
Cb(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cb)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.J9(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7C(r),$async$Cb)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7A("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cb)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.J9(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cb)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hS5()
x=14
return A.b(B.a7C(m),$async$Cb)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().af()
x=15
return A.b(B.a7B("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cb)
case 15:k=f
x=16
return A.b(B.a7B("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cb)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cb)
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
return A.i($async$Cb,w)},
a7C(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.J9(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7A("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7C)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7C,w)},
a7D(d,e,f,g){return B.hSb(d,e,f,g)},
hSb(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7D=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gav(d)){v=!1
x=1
break}r=B.J9(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7C(r),$async$a7D)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.cde())>1048576||g.aW(d,new B.cdf())){v=B.F8(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7O("myCode",d,a0),$async$a7D)
case 4:u=a3
try{t=C.Y.aS(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cq(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.F8(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0w(u,g.gJ(d),a0),$async$a7D)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oo().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dK(d,new B.cdg(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0p(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"status","pending"],i,y.z),q),$async$a7D)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7D,w)},
F8(d,e,f,g,h){return B.hS8(d,e,f,g,h)},
hS8(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$F8=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$F8)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cH(a6,0,new B.cda())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oo().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cM.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
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
a1=B.Jd(a9,q)
a0=new A.L1(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$F8)
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
return A.b(new A.abd(a1.a,a4,"media",a1.d,a2).xE(m,n,new A.Eo(!0,q.c)),$async$F8)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$F8)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRF(r),$async$F8)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dK(a6,new B.cdb(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0p(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"status","pending"],e,d),a8),$async$F8)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRF(r),$async$F8)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$F8,w)},
b0p(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7A(t),$async$b0p)
case 3:s=g
r=y.aL.a(J.t(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cd9(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7B(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0p,w)},
O3(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$O3=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7A("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$O3)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cq(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aX(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b0q(k,a0),$async$O3)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().af())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0v(h),$async$O3)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.VY(g,a0),$async$O3)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().af())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdc(),q),n)
d=A.C(new A.Y(r,new B.cdd(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7B("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$O3)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$O3,w)},
b0q(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cq(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aX(h),r=y.f,q=0
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
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.imk(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dx(l,m,"Received via My Code",t,e,i),$async$b0q)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRF(s),$async$b0q)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0q,w)},
cde:function cde(){},
cdf:function cdf(){},
cdg:function cdg(){},
cda:function cda(){},
cdb:function cdb(){},
cd9:function cd9(){},
cdc:function cdc(){},
cdd:function cdd(){},
fUa(d,e){var x=0,w=A.j(y.H)
var $async$fUa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fUb(e),!1,null,y.H)),$async$fUa)
case 2:return A.h(null,w)}})
return A.i($async$fUa,w)},
bFt(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cq(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fUc(g,e,f),!1,null,y.y)),$async$bFt)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFt,w)},
fUb:function fUb(d){this.a=d},
fUc:function fUc(d,e,f){this.a=d
this.b=e
this.c=f},
VO:function VO(d,e){this.c=d
this.a=e},
aEB:function aEB(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dXR:function dXR(d,e){this.a=d
this.b=e},
VS:function VS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEE:function aEE(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZ2:function dZ2(d){this.a=d},
dZ3:function dZ3(d){this.a=d},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZ7:function dZ7(d){this.a=d},
dZa:function dZa(){},
dZ8:function dZ8(d){this.a=d},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
bkD:function bkD(){},
VP:function VP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEC:function aEC(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dXS:function dXS(d){this.a=d},
dXT:function dXT(d){this.a=d},
h6y(d){var x=d.i4
if(x>=0)return C.o.M(x)
return 10},
hSd(d){var x=d.l3
if(x>=0)return x
return 4.99},
hSc(d){var x=d.m4,w=y.N
w=x.jp(x,new B.cdi(),w,w)
return w},
hnn(d){var x=d.l4,w=y.N
w=x.jp(x,new B.cdj(),w,w)
return w},
b0t(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0t)
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
return A.i($async$b0t,w)},
a7F(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7F)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7F)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7F,w)},
VR(d){var x=0,w=A.j(y.H),v,u
var $async$VR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$VR)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$VR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$VR,w)},
h6x(d,e){var x,w,v
if(B.hSd(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hSc(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0r(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hnn(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hno(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hnn(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).ab().af())
d.l4=w},
aqd(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqd)
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
return A.i($async$aqd,w)},
aqe(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqd(d),$async$aqe)
case 3:u=f
x=5
return A.b(A.az(),$async$aqe)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqe)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqe,w)},
aqc(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h6y(d)
if(u<=0){v=!1
x=1
break}if(B.h6x(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqd(e),$async$aqc)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqc,w)},
b0s(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jb(e,d),$async$b0s)
case 3:if(g){v=-1
x=1
break}u=B.h6y(d)
if(u<=0){v=-1
x=1
break}if(B.h6x(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqd(e),$async$b0s)
case 4:v=t.F(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0s,w)},
cdl(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jb(e,d),$async$cdl)
case 3:if(h){v=!1
x=1
break}v=B.aqc(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdl,w)},
cdk(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdk=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdl(d,u,i.gUr()),$async$cdk)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdk,w)},
a7E(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7E=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUr()){v=!0
x=1
break}if(B.b0r(d,u)){v=!0
x=1
break}x=5
return A.b(A.lw(u,C.TJ),$async$a7E)
case 5:x=k?3:4
break
case 3:B.hno(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7E)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.la(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TJ,"Doc Share for Organizations"),$async$a7E)
case 7:if(!k){v=!1
x=1
break}B.hno(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7E)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7E,w)},
cdi:function cdi(){},
cdj:function cdj(){},
fV3(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fV3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fV3)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fmX.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fmX.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fV3,w)},
ioF(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fmX.bt($.fmX,new B.fV5(d))},
fV5:function fV5(d){this.a=d},
fov(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fov=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bQ(C.jl,null,y.H),$async$fov)
case 3:C.B3.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fov,w)},
agz(d,e,f){var x=0,w=A.j(y.H),v
var $async$agz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fnz.n(0,d,new B.acG(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$agz)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.H(["parts",e,"size",f],v,y.C),null)),$async$agz)
case 2:return A.h(null,w)}})
return A.i($async$agz,w)},
agt(d){return B.i7g(d)},
i7g(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fnz.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agt)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aS(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cq(s)){v=null
x=1
break}o=J.b7(s,new B.fs2(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.acG(r)
$.fnz.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agt,w)},
Rs(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.GU.n(0,d,u)
x=3
return A.b(B.RZ(d,u),$async$Rs)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rs,w)},
aPs(d){return B.i7e(d)},
i7e(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GU.h(0,d)
if(n!=null&&!C.aH.gav(n)){v=n
x=1
break}x=3
return A.b(B.RY(d),$async$aPs)
case 3:p=f
if(p!=null&&!C.aH.gav(p)){$.GU.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPs)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aM(r)
x=!J.cq(q)?9:10
break
case 9:B.Rs(d,q)
x=11
return A.b(J.hq(s,d),$async$aPs)
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
return A.i($async$aPs,w)},
i3i(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wH(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2y(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bD,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.fxK(r,t),!1,s)
A.fy(r,"error",new B.fxL(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iD(0,C.NJ,new B.fxM())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
aPM(d,e,f){return B.i9C(d,e,f)},
i9C(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPM=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2y(i),$async$aPM)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RZ(o,p),$async$aPM)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agz(k,j,s),$async$aPM)
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
return A.i($async$aPM,w)},
aPL(d,e,f){return B.i9B(d,e,f)},
i9B(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPL=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPM(d,e,f),$async$aPL)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2y(f),$async$aPL)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GU.n(0,s,r)
$.RJ.n(0,s,r)
x=11
return A.b(B.Rs(s,r),$async$aPL)
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
return A.i($async$aPL,w)},
Cc(d,e,f,g,h,i){return B.hSm(d,e,f,g,h,i)},
hSm(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cc=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cM.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jy(p,q,o,n,new A.V(Date.now(),0,!1).ab().af(),a0,f,B.b0z(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rs(s,d),$async$Cc)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cc)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cO.gcu().aM(d)),$async$Cc)
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
return A.b(B.B8(e),$async$Cc)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.H4(e,j),$async$Cc)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cc,w)},
VT(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VT=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.B8(d),$async$VT)
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
k=B.hnq(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().af()
i=new B.jy(m,n,k,l,j,"From folder",null,B.b0z(),null)
$.ah2.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2y(o),$async$VT)
case 7:g=a1
x=g!=null&&!C.aH.gav(g)?8:10
break
case 8:$.GU.n(0,h,g)
$.RJ.n(0,h,g)
B.Rs(h,g)
x=9
break
case 10:x=11
return A.b(B.aPL(d,m,o),$async$VT)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.H4(d,t),$async$VT)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VT,w)},
h6C(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h6C=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hnq(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jc(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gav(s)){v=B.Cc(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6C,w)},
Jc(d,e,f,g,h,i){return B.hSl(d,e,f,g,h,i)},
hSl(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jc=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cM.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L1(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jc)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cq(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.Sv(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RZ(k,l),$async$Jc)
case 11:J.c8(q,k);++p
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
return A.b(j.a1(0),$async$Jc)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.RZ(k,new Uint8Array(A.cb(n))),$async$Jc)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agz(r,q,g),$async$Jc)
case 16:f=new B.jy(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().af(),a2,null,B.b0z(),null)
x=17
return A.b(B.B8(d),$async$Jc)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.H4(d,e),$async$Jc)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jc,w)},
VV(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$VV=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ah2.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2y(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agt(s),$async$VV)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.RY(u[o]),$async$VV)
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
v=A.wH(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RJ.h(0,s)
if(i==null)i=$.GU.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rO(d,e),$async$VV)
case 12:i=a0
if(i!=null&&!C.aH.gav(i))$.RJ.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wH(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VV,w)},
hnq(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rO(d,e){return B.hSn(d,e)},
hSn(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RJ.h(0,f)
if(e==null)e=$.GU.h(0,f)
if(e!=null&&!C.aH.gav(e)){v=e
x=1
break}s=$.ah2.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2y(s),$async$rO)
case 9:r=a3
if(r!=null&&!C.aH.gav(r)){$.GU.n(0,f,r)
$.RJ.n(0,f,r)
B.Rs(f,r)
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
return A.b(B.agt(f),$async$rO)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azp(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.RY(g[l]),$async$rO)
case 16:k=a3
if(k!=null&&!C.aH.gav(k))n.I(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apE()
if(!C.aH.gav(r)){$.GU.n(0,f,r)
$.RJ.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPs(f),$async$rO)
case 17:j=a3
if(j!=null&&!C.aH.gav(j)){$.RJ.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.VV(a0,a1,0,g),$async$rO)
case 20:i=a3
if(i!=null&&!C.aH.gav(i)){h=new Uint8Array(A.cb(i))
$.GU.n(0,f,h)
$.RJ.n(0,f,h)
B.Rs(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rO,w)},
hSq(d){var x,w,v=$.ah2.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hSr(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hSo(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqk(d,e,f,g,h){return B.hSp(d,e,f,g,h)},
hSp(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqk=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ah2.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2y(s),$async$aqk)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rO(g,e),$async$aqk)
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
return A.b(n.iy(d).xE(h,r,new A.Eo(!0,e.c)),$async$aqk)
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
return A.i($async$aqk,w)},
hns(d,e,f,g,h){var x,w,v,u,t=$.hnr
$.hnr=t+1
x=Date.now()
w=""+1000*x+"_"+C.cM.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdw.n(0,t,new B.bxr(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azp(u)))
return t},
h6D(d){var x=0,w=A.j(y.H)
var $async$h6D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6D,w)},
Jd(d,e){var $async$Jd=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ah2.h(0,h)
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
return A.qo(B.VV(d,e,p,o<q?o:q),$async$Jd,w)
case 8:n=a1
x=n!=null&&!C.aH.gav(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qo(A.Gr(n),$async$Jd,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qo(B.agt("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jd,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qo(B.RY(h[l]),$async$Jd,w)
case 18:k=a1
x=k!=null&&!C.aH.gav(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qo(A.Gr(k),$async$Jd,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qo(B.rO(d,e),$async$Jd,w)
case 22:j=a1
x=j!=null&&!C.aH.gav(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qo(A.Gr(A.wH(j,p,o<i?o:i)),$async$Jd,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qo(null,0,w)
case 2:return A.qo(t.at(-1),1,w)}})
var x=0,w=A.hw9($async$Jd,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hxW(w)},
b0B(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdw.h(0,d)
if(t==null||J.cq(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5v(),$async$b0B)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0B,w)},
VU(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$VU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdw.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5v(),$async$VU)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agz(r.c,u,r.z),$async$VU)
case 4:t=new B.jy(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().af(),r.f,r.r,B.b0z(),null)
u=r.a
x=5
return A.b(B.B8(u),$async$VU)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.H4(u,s),$async$VU)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VU,w)},
a7L(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdw.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahJ(u[s]),$async$a7L)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a7L,w)},
cdy(d,e,f){var x=0,w=A.j(y.H)
var $async$cdy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCs(d,e,f),$async$cdy)
case 2:return A.h(null,w)}})
return A.i($async$cdy,w)},
cdz(d,e,f){var x=0,w=A.j(y.H)
var $async$cdz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCt(d,e,f),$async$cdz)
case 2:return A.h(null,w)}})
return A.i($async$cdz,w)},
F9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$F9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.B8(d),$async$F9)
case 2:p=g
J.nL(p,new B.cdx(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GU.W(0,v)
$.ah2.W(0,e)
x=3
return A.b(B.agt(v),$async$F9)
case 3:u=g
$.fnz.W(0,v)
x=4
return A.b(A.az(),$async$F9)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$F9)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$F9)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahJ(s[q]),$async$F9)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahJ(v),$async$F9)
case 13:x=14
return A.b(B.H4(d,p),$async$F9)
case 14:return A.h(null,w)}})
return A.i($async$F9,w)},
b0A(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rO(d,e),$async$b0A)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fov(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0A,w)},
B8(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$B8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$B8)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aS(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fxN(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$B8,w)},
H4(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$H4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$H4)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fBT(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$H4)
case 3:return A.h(null,w)}})
return A.i($async$H4,w)},
bCs(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(d),$async$bCs)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fvY(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFG(f))
x=4
return A.b(B.H4(d,u),$async$bCs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCs,w)},
bCt(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(d),$async$bCt)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fvZ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cNP(f))
x=4
return A.b(B.H4(d,u),$async$bCt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCt,w)},
acG:function acG(d){this.a=d},
fs2:function fs2(){},
fxK:function fxK(d,e){this.a=d
this.b=e},
fxL:function fxL(d){this.a=d},
fxM:function fxM(){},
cdx:function cdx(d){this.a=d},
bxr:function bxr(d,e,f,g,h,i,j,k,l){var _=this
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
fxN:function fxN(){},
fBT:function fBT(){},
fvY:function fvY(d){this.a=d},
fvZ:function fvZ(d){this.a=d},
a7M(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aW(d,new B.cdC())?3:4
break
case 3:x=5
return A.b(B.b0C(d,e),$async$a7M)
case 5:u=g
if(u!=null){t=u.c
B.O5(d,u.b,e,t)}v=u
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
return A.b(B.b0x(s),$async$a7M)
case 10:case 9:if(g){v=new A.QO(1,D.Tm,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.VW(d,e),$async$a7M)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W0(!0,!0,d,e),$async$a7M)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.O5(d,D.Aa,e,t)
v=new A.QO(p,D.Aa,t)
x=1
break}v=B.cdB(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7M,w)},
VW(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$VW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7O(null,d,e),$async$VW)
case 3:p=g
try{u=C.Y.aS(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cq(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0w(p,d.length,e),$async$VW)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdz(e,C.d.gH(d).a,r.b),$async$VW)
case 7:case 6:q=r.a
x=8
return A.b(B.O5(d,D.Tm,e,q),$async$VW)
case 8:v=new A.QO(d.length,D.Tm,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VW,w)},
VX(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$VX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n_)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7N(d,e),$async$VX)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdu(s,d,e,t),$async$VX)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0x(t),$async$VX)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rO(e,d),$async$VX)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.VW(A.a([d],y.r),e),$async$VX)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VX,w)},
VZ(){var x=0,w=A.j(y.H)
var $async$VZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h6w(),$async$VZ)
case 2:x=3
return A.b(B.aS1(),$async$VZ)
case 3:return A.h(null,w)}})
return A.i($async$VZ,w)},
a7N(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0z()
x=3
return A.b(B.cdy(e,d.a,u),$async$a7N)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
O5(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$O5=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tm&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7N(p,f),$async$O5)
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
return A.b(B.cdt(o,p,u,f),$async$O5)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdu(o,p,f,t),$async$O5)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cds(o,u,p,f),$async$O5)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
b0C(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdA(e,d),$async$b0C)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W0(!1,!0,d,e),$async$b0C)
case 4:u=g
if(u!=null){t=u.b
v=new A.QO(u.a,D.Aa,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0C,w)},
cdA(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.VV(d,s,0,1),$async$cdA)
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
return A.i($async$cdA,w)},
cdB(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7O(null,d,e),$async$cdB)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hnp(u)
if(t.length>800){v=null
x=1
break}v=new A.QO(d.length,D.dNF,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdB,w)},
aql(d,e,f){return B.hSu(d,e,f)},
hSu(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aql=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nl(g,1)
x=B.h6B(g)?3:4
break
case 3:x=5
return A.b(B.cdv(g),$async$aql)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nl(g,13))
try{k=B.Fa(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nl(g,13))
u=9
x=12
return A.b(B.b0v(q),$async$aql)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VY(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h6A(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VY(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Je(C.a.i(J.nl(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Je(C.a.i(J.nl(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Je(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.VY(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aql,w)},
Je(d,e,f){return B.hSs(d,e,f)},
hSs(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Je=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0n(r),$async$Je)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0n(A.cF(s,0,null)),$async$Je)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cq(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cd7(o,r,a1,n,a2),$async$Je)
case 11:m=a4
x=J.cq(m)?12:13
break
case 12:x=14
return A.b(B.cd6(q),$async$Je)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.VY(l,a2),$async$Je)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cq(m)?null:m
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
return A.i($async$Je,w)},
a7O(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aX(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rO(f,r),$async$a7O)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cO.gcu().aM(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().af())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7O,w)},
VY(d,e){return B.hSt(d,e)},
hSt(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$VY=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Y.aS(0,a2,null)
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
e=J.aX(r)
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
return A.b(B.Cc(i,a3,d,k,l,o),$async$VY)
case 9:h=a5
if(h!=null)J.c8(n,h)
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
return A.i($async$VY,w)},
O4:function O4(d,e){this.a=d
this.b=e},
cdC:function cdC(){},
a27(d){var x=A.R(d).ax.a===C.J,w=x?D.ahN:D.afk,v=x?D.ajy:C.c,u=x?C.aQ:C.R,t=x?C.bM:C.am,s=x?D.agL:C.aO
return new A.aHC([w,s,v,u,t,x?C.fn:C.bQ])},
hDf(d,e){var x=e?C.w.j(0.72):C.aT
return A.cf(null,x,!0,null,new B.fZc(e),d,null,!0,!0,y.N)},
cdh(d,e,f,g,h,i,j,k,l){return new B.VQ(e,l,d,f,k,j,g,h,i,null)},
a_4(d,e,f,g,h,i,j){return new B.bfb(g,h,j,e,i,d,f,null)},
fZc:function fZc(d){this.a=d},
a_1:function a_1(d,e){this.c=d
this.a=e},
aAB:function aAB(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbA:function dbA(d){this.a=d},
dby:function dby(d){this.a=d},
dbz:function dbz(d){this.a=d},
bx3:function bx3(){},
VQ:function VQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
aED:function aED(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dYY:function dYY(d){this.a=d},
dYl:function dYl(d,e){this.a=d
this.b=e},
dYm:function dYm(d,e){this.a=d
this.b=e},
dXV:function dXV(d,e,f){this.a=d
this.b=e
this.c=f},
dXU:function dXU(d){this.a=d},
dXW:function dXW(d,e){this.a=d
this.b=e},
dY0:function dY0(d,e,f){this.a=d
this.b=e
this.c=f},
dY_:function dY_(d){this.a=d},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYN:function dYN(d){this.a=d},
dYi:function dYi(d,e,f){this.a=d
this.b=e
this.c=f},
dYf:function dYf(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dXZ:function dXZ(d){this.a=d},
dYq:function dYq(d){this.a=d},
dYp:function dYp(){},
dY4:function dY4(d){this.a=d},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYg:function dYg(d,e){this.a=d
this.b=e},
dYh:function dYh(d,e){this.a=d
this.b=e},
dYC:function dYC(d,e){this.a=d
this.b=e},
dYy:function dYy(d){this.a=d},
dYx:function dYx(d){this.a=d},
dYz:function dYz(){},
dYA:function dYA(){},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYD:function dYD(){},
dYE:function dYE(d){this.a=d},
dYw:function dYw(d,e){this.a=d
this.b=e},
dYr:function dYr(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYt:function dYt(d){this.a=d},
dYu:function dYu(d){this.a=d},
dYv:function dYv(d){this.a=d},
dY1:function dY1(){},
dY2:function dY2(d){this.a=d},
dY3:function dY3(d,e){this.a=d
this.b=e},
dXY:function dXY(d,e){this.a=d
this.b=e},
dXX:function dXX(d,e,f){this.a=d
this.b=e
this.c=f},
dYj:function dYj(d){this.a=d},
dYk:function dYk(d,e,f){this.a=d
this.b=e
this.c=f},
dYd:function dYd(d,e){this.a=d
this.b=e},
dY9:function dY9(d){this.a=d},
dY6:function dY6(d,e,f){this.a=d
this.b=e
this.c=f},
dYa:function dYa(d){this.a=d},
dYb:function dYb(d){this.a=d},
dYc:function dYc(){},
dYe:function dYe(d,e){this.a=d
this.b=e},
dY7:function dY7(d){this.a=d},
dY5:function dY5(d,e,f){this.a=d
this.b=e
this.c=f},
dY8:function dY8(){},
dYo:function dYo(d){this.a=d},
dYn:function dYn(d,e){this.a=d
this.b=e},
dYI:function dYI(d,e){this.a=d
this.b=e},
dYF:function dYF(d){this.a=d},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYH:function dYH(d){this.a=d},
dYV:function dYV(d){this.a=d},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYW:function dYW(){},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYP:function dYP(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d,e,f){this.a=d
this.b=e
this.c=f},
dYO:function dYO(d,e,f){this.a=d
this.b=e
this.c=f},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYS:function dYS(d,e){this.a=d
this.b=e},
aAy:function aAy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfa:function bfa(d,e,f){this.c=d
this.d=e
this.a=f},
dbw:function dbw(){},
dbx:function dbx(){},
ad_:function ad_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dbU:function dbU(){},
dbT:function dbT(d){this.a=d},
a_3:function a_3(d,e,f){this.c=d
this.d=e
this.a=f},
aAD:function aAD(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dbQ:function dbQ(d){this.a=d},
dbR:function dbR(d,e,f){this.a=d
this.b=e
this.c=f},
dbS:function dbS(d,e){this.a=d
this.b=e},
dbO:function dbO(d,e){this.a=d
this.b=e},
dbM:function dbM(d){this.a=d},
dbK:function dbK(d){this.a=d},
dbH:function dbH(d){this.a=d},
dbN:function dbN(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
dbP:function dbP(d){this.a=d},
dbL:function dbL(d){this.a=d},
dbI:function dbI(d){this.a=d},
a_0:function a_0(d,e,f){this.c=d
this.d=e
this.a=f},
aAA:function aAA(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbt:function dbt(d){this.a=d},
dbs:function dbs(d,e){this.a=d
this.b=e},
dbu:function dbu(d){this.a=d},
dbr:function dbr(d,e){this.a=d
this.b=e},
dbv:function dbv(d){this.a=d},
dbq:function dbq(d,e){this.a=d
this.b=e},
dbm:function dbm(d){this.a=d},
dbn:function dbn(d){this.a=d},
dbo:function dbo(d,e){this.a=d
this.b=e},
dbp:function dbp(d){this.a=d},
Qn:function Qn(d,e,f){this.c=d
this.d=e
this.a=f},
aAG:function aAG(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dc6:function dc6(d){this.a=d},
dc7:function dc7(d){this.a=d},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d){this.a=d},
dca:function dca(d,e){this.a=d
this.b=e},
dcb:function dcb(d){this.a=d},
dcd:function dcd(d){this.a=d},
dcc:function dcc(d){this.a=d},
a_5:function a_5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAE:function aAE(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dc2:function dc2(d,e){this.a=d
this.b=e},
dc3:function dc3(d,e){this.a=d
this.b=e},
dbV:function dbV(d,e,f){this.a=d
this.b=e
this.c=f},
dbW:function dbW(d){this.a=d},
dbX:function dbX(){},
dc1:function dc1(){},
dbY:function dbY(d,e){this.a=d
this.b=e},
dbZ:function dbZ(d,e){this.a=d
this.b=e},
dc_:function dc_(d,e){this.a=d
this.b=e},
dc0:function dc0(d,e){this.a=d
this.b=e},
acY:function acY(d,e){this.c=d
this.a=e},
dbl:function dbl(d){this.a=d},
a__:function a__(d){this.a=d},
aAz:function aAz(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_6:function a_6(d,e){this.c=d
this.a=e},
aAF:function aAF(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dc5:function dc5(d){this.a=d},
dc4:function dc4(d){this.a=d},
bfb:function bfb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hSv(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
O6(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$O6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$O6)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$O6)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$O6,w)},
a7P(d){return B.hSw(d)},
hSw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7P)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z),!1,!1,C.cK,null),$async$a7P)
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
return A.i($async$a7P,w)},
W_(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O6(),$async$W_)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dL(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().af())
r.n(s,d,t)
x=4
return A.b(B.a7P(s),$async$W_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W_,w)},
W0(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c7(),$async$W0)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cdE(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hSv()
t=A.T(u).k("N<1,a8<m,aF>>")
r=A.C(new A.N(u,new B.cdF(s),t),t.k("ak.E"))
x=6
return A.b(B.O6(),$async$W0)
case 6:q=i
J.aJ(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.C))
x=7
return A.b(B.a7P(q),$async$W0)
case 7:x=8
return A.b(B.a7Q(r,u,g,s),$async$W0)
case 8:v=new A.bqZ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
aqm(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.O6(),$async$aqm)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqm,w)},
cdG(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.O6(),$async$cdG)
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
return A.i($async$cdG,w)},
a7Q(d,e,f,g){return B.hSx(d,e,f,g)},
hSx(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7Q=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqk("media",r,new B.cdD(s,e,g),f,q),$async$a7Q)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W_(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7Q)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W_(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$a7Q)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W_(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7Q)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7Q,w)},
Fa(d,e,f){return B.hSy(d,e,f)},
hSy(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fa=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$Fa)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqm(b3),$async$Fa)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iJ,null,g),$async$Fa)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqm(b3),$async$Fa)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.O6(),$async$Fa)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cq(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
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
l=new A.abd(a8.a,b0,"media",a8.d,a9).D7(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0o(k,n,o,s,b7),$async$Fa)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
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
g=a1.gag(a4),a1=y.s
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
return A.b(new A.abd(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fa)
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
a0=A.dL(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().af())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7P(e),$async$Fa)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fa,w)},
cdE:function cdE(){},
cdF:function cdF(d){this.a=d},
cdD:function cdD(d,e,f){this.a=d
this.b=e
this.c=f},
aS1(){var x=0,w=A.j(y.H),v,u
var $async$aS1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i2A=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aS1)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aS1)
case 3:u=$.hbY
u=u==null?null:u.bG(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aS1)
case 4:$.hbY=$.ibr=$.ibs=null
return A.h(null,w)}})
return A.i($async$aS1,w)},
fBu(d){var x=0,w=A.j(y.H),v,u
var $async$fBu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8R){x=1
break}u=new A.bk($.bD,y.d4)
d.c=new B.fBv(new A.c2(u,y.aY))
x=3
return A.b(u.iD(0,C.i8,new B.fBw()),$async$fBu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fBu,w)},
ibp(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hSf(x):x},
hc1(d){var x=0,w=A.j(y.T),v,u,t
var $async$hc1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqo(u)
x=1
break}v=B.h6A(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hc1,w)},
hc0(d){var x=0,w=A.j(y.T),v,u,t
var $async$hc0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqp(u)
x=1
break}v=B.h6A(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hc0,w)},
fUN(d){var x=0,w=A.j(y.T),v
var $async$fUN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqp(d),$async$fUN)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUN,w)},
bDl(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hc0(d),$async$bDl)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aS(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDl,w)},
fpj(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fpj=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.VU(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cc(d.apE(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpj,w)},
H6(d,e,f){return B.idJ(d,e,f)},
idJ(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H6=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hc1(a1),$async$H6)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aS(0,e,null)
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
return A.b($.hFe().aFW(D.dBT,null),$async$H6)
case 4:l=d.hbY=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azp(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bD,y.b1)
l.y=new B.fC5(f,k,new B.fC6(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8w(0,new B.Y7(r,"offer")),$async$H6)
case 5:d=l
x=7
return A.b(l.am7(0),$async$H6)
case 7:x=6
return A.b(d.a8o(0,a4),$async$H6)
case 6:x=8
return A.b(B.fBu(l),$async$H6)
case 8:x=9
return A.b(l.aqq(),$async$H6)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ibp(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqq(m,h),$async$H6)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hnp(h)
case 11:v=new A.bqe(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H6,w)},
fBv:function fBv(d){this.a=d},
fBw:function fBw(){},
fC6:function fC6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fC5:function fC5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fC4:function fC4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ifM(d){switch(d){case"new":return D.exc
case"checking":return D.exd
case"connected":return D.exf
case"completed":return D.exe
case"failed":return D.exh
case"disconnected":return D.exi
case"closed":return D.aQp
case"count":return D.exg}return D.aQp},
ifN(d){switch(d){case"new":return D.aQq
case"gathering":return D.exj
case"complete":return D.a8R}return D.aQq},
iq8(d){switch(d){case"stable":return D.exk
case"have-local-offer":return D.exl
case"have-local-pranswer":return D.exn
case"have-remote-offer":return D.exm
case"have-remote-pranswer":return D.exo
case"closed":return D.aQw}return D.aQw},
iom(d){switch(d){case"new":return D.aQt
case"connecting":return D.aQu
case"connected":return D.aQv
case"closed":return D.a8S
case"disconnected":return D.aQs
case"failed":return D.aQr}return D.a8S},
aa9:function aa9(d,e){this.a=d
this.b=e},
P8:function P8(d,e){this.a=d
this.b=e},
Y6:function Y6(d,e){this.a=d
this.b=e},
P7:function P7(d,e){this.a=d
this.b=e},
FE:function FE(d,e){this.a=d
this.b=e},
cri:function cri(){},
h8l(d){var x=new B.FD()
x.a=d
x.b=!0
return x},
FD:function FD(){this.b=this.a=$},
aa8:function aa8(){},
auW:function auW(){},
Y7:function Y7(d,e){this.a=d
this.b=e},
h6w(){var x=0,w=A.j(y.H)
var $async$h6w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6w,w)},
h6z(d,e,f){var x=0,w=A.j(y.T),v
var $async$h6z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n_))){v=null
x=1
break}v=B.fV3(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6z,w)},
hnp(d){var x,w=F.aeK.a5e(C.dQ.aM(d),null)
if(w.length===0){x=C.dQ.aM(d)
return C.cO.gcu().aM(x)}return C.cO.gcu().aM(w)},
hSe(d){var x,w,v=C.cG.aM(d)
try{x=C.c9.cF(0,F.aeJ.bfs(v,!1))
return x}catch(w){x=C.c9.cF(0,v)
return x}},
h6A(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hSe(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cF(0,C.cG.aM(x))
return v}catch(u){return x}}return null},
hSf(d){var x,w,v,u,t,s=A.a([],y.s)
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
hSg(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0u(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b0u)
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
return A.i($async$b0u,w)},
cdm(d,e){return B.hSh(d,e)},
hSh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cK,null),$async$cdm)
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
return A.i($async$cdm,w)},
b0x(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0u(d),$async$b0x)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0x,w)},
b0w(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hSg()
r=C.a.i(f)
t=C.dQ.aM(s)
x=3
return A.b(B.cdm(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cO.gcu().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$b0w)
case 3:if(!h){v=null
x=1
break}v=new A.a17("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0w,w)},
b0v(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0u(o),$async$b0v)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cF(0,C.cG.aM(u))
if(J.j5(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0v,w)},
cdn(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEj("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cK),$async$cdn)
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
return A.i($async$cdn,w)},
b0y(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ja(),$async$b0y)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0y,w)},
aqh(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqh)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0y(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqh,w)},
aqf(d,e){var x=0,w=A.j(y.H)
var $async$aqf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqf)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqf)
case 2:return A.h(null,w)}})
return A.i($async$aqf,w)},
a7H(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7H=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7H)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ja(),$async$a7H)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.C))
x=5
return A.b(A.a7G(s),$async$a7H)
case 5:x=6
return A.b(B.aqf(f,u),$async$a7H)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7H,w)},
a7I(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7I=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7I)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ja(),$async$a7I)
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
if(o!==t&&s.an(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqf(g,q),$async$a7I)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7G(u),$async$a7I)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7I,w)},
a7J(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7J=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7J)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ja(),$async$a7J)
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
s=B.b0r(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7J)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().af()],p,p),null)),$async$a7J)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
cdo(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdo)
case 7:s=f
p=A.w(n)
r=A.aT(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aS(0,r,null)
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
return A.i($async$cdo,w)},
Jb(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdo(d),$async$Jb)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0y(t),$async$Jb)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqg(d),$async$Jb)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0r(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqg(d),$async$Jb)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jb,w)},
aqg(d){var x=0,w=A.j(y.H)
var $async$aqg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqg)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqg)
case 2:return A.h(null,w)}})
return A.i($async$aqg,w)},
b0z(){var x,w=$.oo(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7K(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h6B(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdr(d){return B.hSj(d)},
hSj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7K(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cdr)
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
return A.i($async$cdr,w)},
aqj(d,e){return B.hSk(d,e)},
hSk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7K(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cK,null),$async$aqj)
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
return A.i($async$aqj,w)},
cdt(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7K(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqj(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$cdt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdt,w)},
cds(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cds=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7K(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqj(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$cds)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cds,w)},
cdu(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7K(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqj(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdu,w)},
cdv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h6B(d)){v=null
x=1
break}x=3
return A.b(B.cdr(d),$async$cdv)
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
return A.i($async$cdv,w)},
a7R(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7R=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7R)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7R)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7R,w)},
aqn(d){return B.hSz(d)},
hSz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$aqn)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z),!1,!1,C.cK,null),$async$aqn)
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
return A.i($async$aqn,w)},
aqo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$aqo)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7R(),$async$aqo)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cF(0,C.cG.aM(q))
if(J.j5(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a3(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().af())
J.aJ(s,j,o)
x=9
return A.b(B.aqn(s),$async$aqo)
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
return A.i($async$aqo,w)},
aqq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c7(),$async$aqq)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7R(),$async$aqq)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a3(s,r,q),r,q)
r=C.dQ.aM(C.a.i(e))
q.n(0,"answer",C.cO.gcu().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().af())
t.n(u,p,q)
x=5
return A.b(B.aqn(u),$async$aqq)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqq,w)},
aqp(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c7(),$async$aqp)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7R(),$async$aqp)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cF(0,C.cG.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqp,w)},
apk(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ao$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qf)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apk)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.he),$async$apk)
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
return A.i($async$apk,w)},
imk(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fT4(d){return B.imm(d)},
imm(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fT4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iy("media").Lj(d,3600),$async$fT4)
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
return A.i($async$fT4,w)},
Dx(d,e,f,g,h,i){var x=null
return B.imj(d,e,f,g,h,i)},
imj(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dx=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hns(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h6D(r),$async$Dx)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fT4(o),$async$Dx)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7L(r),$async$Dx)
case 14:v=null
x=1
break
case 13:e=$.bD.h(0,C.aTW)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ms(A.a([],g))
x=15
return A.b(d.f8(0,A.avL("GET",A.cF(n,0,null))).df(0,C.Gx),$async$Dx)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7L(r),$async$Dx)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L1(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dx)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0B(r,k),$async$Dx)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$Dx)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.VU(r)
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
return A.b(B.a7L(r),$async$Dx)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dx,w)},
aRF(d){return B.iml(d)},
iml(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iy("media").W(0,d),$async$aRF)
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
return A.i($async$aRF,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[155]
O=c[46]
F=c[261]
I=c[147]
P=c[231]
E=c[223]
G=c[93]
Q=c[193]
R=c[148]
S=c[229]
K=c[266]
L=c[275]
B=a.updateHolder(c[22],B)
D=c[273]
T=c[192]
M=c[213]
U=c[72]
V=c[255]
W=c[78]
X=c[61]
N=c[92]
Y=c[274]
B.crj.prototype={
aFW(d,e){return this.cPk(d,e)},
cPk(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aFW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.U(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.v(0,d)
u=new q(A.ke(A.cv(t)))
t=J.k(u)
v=B.hXc(C.cO.gcu().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aFW,w)}}
B.b5J.prototype={
bBG(d){var x=this,w=x.w
w.onclose=A.hp(new B.cre(x))
w.onopen=A.hp(new B.crf(x))
w.onmessage=A.hp(new B.crg(x))
w.onbufferedamountlow=A.hp(new B.crh(x))},
gdd(d){return this.x},
aik(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aik=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FD()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h8l(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aik)
case 8:v=t.h8l(s.aou(f,0,null))
x=1
break
case 7:case 4:v=B.h8l(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aik,w)}}
B.b5K.prototype={
bBH(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crk(x)))
w.addEventListener("icecandidate",A.hp(new B.crl(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crm(x)))
w.onicegatheringstatechange=A.hp(new B.crn(x))
w.addEventListener("signalingstatechange",A.hp(new B.cro(x)))
if(!$.hfU())w.addEventListener("connectionstatechange",A.hp(new B.crp(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crq(x)))
w.addEventListener("track",A.hp(new B.crr(x)))},
am7(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$am7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ke(A.cv(A.U(y.N,y.z)))),y.aQ),$async$am7)
case 3:t=f
v=new B.Y7(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am7,w)},
a8o(d,e){return this.bqF(0,e)},
bqF(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8o)
case 2:return A.h(null,w)}})
return A.i($async$a8o,w)},
a8w(d,e){return this.br_(0,e)},
br_(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8w)
case 2:return A.h(null,w)}})
return A.i($async$a8w,w)},
aqq(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Y7(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqq,w)},
bG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bG,w)}}
B.acZ.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_2.prototype={
S(){return new B.aAC()},
gd1(){return this.c}}
B.aAC.prototype={
Y(){this.a3()
this.aeW()},
aeW(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0s(u.e,u.c),$async$aeW)
case 2:t=e
if(v.c!=null)v.m(new B.dbE(v,t))
return A.h(null,w)}})
return A.i($async$aeW,w)},
QR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqc(t.e,t.c,!1),$async$QR)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fi8)
x=1
break}x=4
return A.b(B.a7F(u.a.c,"individual"),$async$QR)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6N(A.eb(new B.dbB(u),!1,null,y.H)),$async$QR)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QR,w)},
JD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fzr(o),$async$JD)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7J(o.e,r,s,q),$async$JD)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff9)
x=1
break}x=5
return A.b(B.a7F(u.a.c,"member"),$async$JD)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6N(A.eb(new B.dbD(u),!1,null,y.H)),$async$JD)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JD,w)},
yA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7E(t.e,o,t.f,t.r,t.w,s),$async$yA)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7F(u.a.c,"org_owner"),$async$yA)
case 4:x=5
return A.b(B.aqh(u.a.c),$async$yA)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fzW(o),$async$yA)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7H(s,t,o,q.c),$async$yA)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff6)
x=1
break}x=10
return A.b(B.aqh(u.a.c),$async$yA)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6N(A.eb(new B.dbC(u),!1,null,y.H)),$async$yA)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yA,w)},
B(d){var x,w,v,u=this,t=null,s=A.R(d).ax.a===C.J,r=s?C.jz:C.qf,q=B.h6y(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h2,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fBV,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h9,t,t,t),C.aC,D.fVK,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c8p,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lV(new B.dbG(),t),C.P,w,C.dV,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.R,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adr(C.f3,C.aD2,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcit(),t),C.af],v))
p.push(new B.adr(C.pm,C.a4v,"Team Member","Sign in with your organization access code + password",u.gcjk(),t))
p.push(C.af)
p.push(new B.adr(C.ap9,C.a68,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gciQ(),t))
return A.c5(t,r,A.bm(!0,A.cg(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.ame,t,t,C.ai),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adr.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aO(!1,r,!0,A.eI(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a6,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nS,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.z5,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDf.prototype={}
B.aGn.prototype={}
B.jy.prototype={
mI(d){var x=this.b,w=C.a.oZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gar6(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ad(x/1024,1)+" KB"
if(x<1073741824)return C.k.ad(x/1048576,1)+" MB"
return C.k.ad(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.U(y.N,y.z)
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
beX(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jy(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cNP(d){return this.beX(null,d)},
aFG(d){return this.beX(d,null)}}
B.VO.prototype={
S(){return new B.aEB(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEB.prototype={
Y(){this.a3()
this.aeX()},
aeX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cb(u.a.c),$async$aeX)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dXR(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeX,w)},
aeY(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$aeY)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fj2)
case 1:return A.h(v,w)}})
return A.i($async$aeY,w)},
a_q(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apk(s.d,4),$async$a_q)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tj(r,"ngmy_my_code_"+m+".png"),$async$a_q)
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
return A.i($async$a_q,w)},
aiN(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaN("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.J,n=o?C.jz:C.qf,m=o?C.c:C.R,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m0
else if(q.e==null)x=A.at(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4Y,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a6,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.alN,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.n6,w,C.l1,new A.em(A.p(p,A.q7(p,p,!1,B.hSa(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l1,A.A(A.a([A.E(A.es(N.D2,C.VO,q.gcaW(),p),1),C.at,A.E(A.dh(C.zu,C.abb,q.gcaX(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3f,D.fRm,q.gcy8(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.O9,p,p,C.ai)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.VS.prototype={
S(){return new B.aEE(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aEE.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.J9(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
a_r(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.J9(u.d.a.a)
if(t==null){u.m(new B.dZ_(u))
x=1
break}u.m(new B.dZ0(u))
s=u.a
r=s.c
x=3
return A.b(B.a7D(s.d,new B.dZ1(u),t,r),$async$a_r)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZ2(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_r,w)},
a2F(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2F=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cq(r.a.d)){x=1
break}r.m(new B.dZ3(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rO(r.a.c,q),$async$a2F)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZ4(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ait(p,m,l,j,k),$async$a2F)
case 8:o=e
if(r.c!=null)r.m(new B.dZ5(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZ6(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZ7(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2F,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.J,i=j?D.ahN:D.afk,h=j?D.ajy:C.c,g=j?C.aQ:C.R,f=j?C.bM:C.am,e=j?D.agL:C.aO
i=[i,e,h,g,f,j?C.fn:C.bQ]
x=A.R(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dx(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dx(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bWK,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ev,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fr,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4Y,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uM(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkD()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.O4,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZ8(l),k,!1,k,k,!1,k,!0,k,C.ab,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mt,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.L(i[1],C.r,1)
m=J.M5(l.a.d,4)
m=A.C(new A.N(m,new B.dZ9(x,new A.aHC(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.le,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.P,e,C.P,q,C.d6,p,C.P,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eD,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fdE)
else q.push(A.X(C.lN,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cV(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b6,new A.o(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bEi,k,k,C.ai),1)
u=l.f?k:l.gcy9()
t=i[3]
s=i[1]
q=A.n(16)
s=A.es(M.a3f,D.fSr,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcaY()
t=A.bn(C.aE,k,k,0,C.c,k,C.ny,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.lz(new B.dZa(),A.x(A.a([e,new A.D(D.bDN,A.x(A.a([s,C.P,i,C.af,A.bH(l.f?C.ts:D.fQH,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cw,C.a_x,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkD.prototype={
oV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bz,v.length),C.aP)}}
B.VP.prototype={
S(){return new B.aEC()}}
B.aEC.prototype={
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
u.f=new A.au(C.au,v)},
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
aeZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dXS(r))
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
return A.b(B.a7I(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeZ)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fiE)
s=[1]
x=4
break}p.L(y.q).f.U(D.fhh)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dXT(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeZ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.J?C.jz:C.qf,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fJ7,s,s,s,1,s,!0),p=A.p(s,D.bvU,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.I0,C.n),s,s,s,s,C.ab,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c2T,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c2O,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c33,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcaZ()
u=A.bn(C.aE,s,s,s,s,C.h3,s,s,s,s,s,s)
return A.c5(q,r,A.cg(A.x(A.a([p,C.d6,o,C.af,x,C.af,w,C.n6,A.bH(t.r?C.ts:C.aWK,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ab,s,s,C.ai),s,!1,!1,s,s)}}
B.acG.prototype={}
B.bxr.prototype={
a5v(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apE()))
x=3
return A.b(B.RZ(t,s),$async$a5v)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5v,w)},
gd1(){return this.a}}
B.O4.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_1.prototype={
S(){return new B.aAB(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aAB.prototype={
Y(){this.a3()
$.aV.x1$.push(new B.dbA(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
cb4(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a27(d),u=x.a.c,t=u?C.iA:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jz:v.a[0],p=A.n(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h2,32)],n),l=A.p(w,T.arO,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asB,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uM(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bx3()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.GK,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b4M),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dby(x),w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mt,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nU,new B.dbz(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.n(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cL,12)],n)
g=y.p
return A.eR(w,C.L,new A.cR(Q.LJ,A.c3(new A.D(C.yJ,A.x(A.a([l,C.aR,k,C.P,j,C.dV,i,C.dV,A.A(A.a([f,C.at,A.E(A.c3(A.aI(!1,C.a3,!0,w,A.aO(!1,A.n(14),!0,D.eqA,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcb3(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,L.Q2,C.n),C.bi),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.O,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bi),w),w,w,w,C.Oc,C.da,w,w,w)}}
B.bx3.prototype={
oV(d,e){return e.am1(e.a.toUpperCase())}}
B.VQ.prototype={
S(){return new B.aED(A.a([],y.r),A.aS(y.N))},
gd1(){return this.c}}
B.aED.prototype={
Y(){var x=this
x.a3()
x.ui()
x.w=A.de(C.jC,new B.dYY(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.VZ()
this.a2()},
a1x(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O3(u.a.c),$async$a1x)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.B8(u.a.c),$async$a1x)
case 4:u.m(new s.dYl(u,e))
u.ii("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1x,w)},
ui(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ui=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O3(u.a.c),$async$ui)
case 3:t=e
x=4
return A.b(B.B8(u.a.c),$async$ui)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dYm(u,s))
if(t>0)u.ii("Received "+A.w(t)+" file(s) via My Code.")
u.O5(u.d)
B.Cb(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ui,w)},
O5(d){return this.bFJ(d)},
bFJ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7N(r,u.a.c),$async$O5)
case 8:p=f
if(u.c==null){x=1
break}new B.dXV(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n_))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.VX(r,u.a.c),$async$O5)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.B8(u.a.c),$async$O5)
case 12:u.m(new o.dXW(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
Ou(d){return this.bM0(d)},
bM0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7N(d,u.a.c),$async$Ou)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dY0(u,d,t))
x=6
return A.b(A.fG(new A.fA(t)),$async$Ou)
case 6:u.ii("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fA(r.toUpperCase())),$async$Ou)
case 7:u.ii("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ou,w)},
ii(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
uj(d,e){return this.cJ3(d,e)},
cJ3(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dYM(r,e))
u=3
x=6
return A.b(d.$0(),$async$uj)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dYN(r))
$.eV.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uj,w)},
gaXl(){var x=this.a
return x.f||x.r||x.w},
Iy(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXl()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdk(s,n,r,q,o,t),$async$Iy)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ii("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fMv(o,u.a.c),$async$Iy)
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
return A.b(B.Dz(s,o,r,q,n,t),$async$Iy)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iy,w)},
a0B(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqh(u.a.c),$async$a0B)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ii("No organization portal found.")
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
return A.b(A.a6(t,!1).cd(A.eb(new B.dYi(u,r,q),!1,null,y.H)),$async$a0B)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0B,w)},
a1H(d){return this.crH(d)},
crG(){return this.a1H(1)},
crH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXl()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqe(u.a.c),$async$a1H)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1H,w)},
acP(d,e,f){return this.c1Y(d,e,f)},
c1Y(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ii(e)
x=1
break}x=3
return A.b(u.uj(new B.dYf(u,d,null,e,f),"Uploading\u2026"),$async$acP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acP,w)},
bFS(){B.hCo(!1,new B.dXZ(this))
return},
cwK(){this.m(new B.dYq(this))},
aAb(){var x=0,w=A.j(y.H),v=this
var $async$aAb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bFS()
return A.h(null,w)}})
return A.i($async$aAb,w)},
acL(){var x=0,w=A.j(y.H),v=this
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uj(new B.dY4(v),"Importing\u2026"),$async$acL)
case 2:return A.h(null,w)}})
return A.i($async$acL,w)},
SX(d){return this.cIn(d)},
cIn(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n_)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYJ(u,d),!1,null,y.H)),$async$SX)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S1)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dYK(u,d),!1,null,y.H)),$async$SX)
case 8:x=1
break
case 7:x=u.c2G(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dYL(u,d),!1,null,y.H)),$async$SX)
case 11:x=1
break
case 10:u.ii("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SX,w)},
c2G(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRw,C.a.b2(x,w+1).toLowerCase())},
agv(d){return this.cix(d)},
cix(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n_)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYg(u,d),!1,null,y.H)),$async$agv)
case 5:x=1
break
case 4:u.m(new B.dYh(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agv,w)},
Sh(d){return this.czD(d)},
czD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ii("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Sh)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uj(new B.dYC(u,d),"Preparing QR\u2026"),$async$Sh)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sh,w)},
ajc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYD(),A.T(t).k("N<1,m>")).fL(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYE(q),s),s.k("M.E"))
if(r.length===0){u.ii("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sh(r),$async$ajc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajc,w)},
aj5(d){return this.cza(d)},
cza(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a27(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYw(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aj5)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SX(d)
break
case"qr":u.Sh(A.a([d],y.r))
break
case"send_my_code":u.cj9(A.a([d],y.r))
break
case"save":u.ait(d)
break
case"delete":u.Jn(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aj5,w)},
Yj(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dY1(),A.T(t).k("N<1,m>")).fL(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dY2(q),s),s.k("M.E"))
if(r.length===0){u.ii("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Yj)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uj(new B.dY3(u,r),"Preparing file\u2026"),$async$Yj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yj,w)},
ahA(d){return this.cq1(d)},
cq1(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hDf(d,!1),$async$ahA)
case 3:s=f
r=s==null
q=B.a7K(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ii("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahA,w)},
agB(){var x=0,w=A.j(y.H),v=this,u
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fUa(u,v.a.c),$async$agB)
case 2:return A.h(null,w)}})
return A.i($async$agB,w)},
bFR(){B.hCo(!1,new B.dXY(this,null))
return},
JC(d,e){return this.cja(d,e)},
b2N(d){return this.JC(null,d)},
cj9(d){return this.JC(d,null)},
cja(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dYj(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xH.co().aoK(!0,C.a1j,!1),$async$JC)
case 10:r=g
if(r==null||J.cq(r.a)){x=1
break}x=11
return A.b(s.uj(new B.dYk(l,s,r),"Preparing\u2026"),$async$JC)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ii("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ii("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFt(p,l,e,s.a.c),$async$JC)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ii("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JC,w)},
IO(d){return this.c1L(d)},
c1L(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hS9(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2N(t),$async$IO)
case 8:x=6
break
case 7:u.ii("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ii("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uj(new B.dYd(u,d),"Receiving video\u2026"),$async$IO)
case 11:x=1
break
case 10:x=12
return A.b(u.uj(new B.dYe(u,d),"Receiving\u2026"),$async$IO)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IO,w)},
EG(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dt()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahA(t),$async$EG)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IO(s),$async$EG)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYo(u),!1,null,y.N)),$async$EG)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ui(),$async$EG)
case 10:x=1
break
case 9:x=11
return A.b(u.IO(C.a.i(r)),$async$EG)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EG,w)},
ait(d){return this.cvi(d)},
cvi(d){var x=0,w=A.j(y.H),v=this
var $async$ait=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uj(new B.dYn(v,d),"Saving\u2026"),$async$ait)
case 2:return A.h(null,w)}})
return A.i($async$ait,w)},
Jn(d){return this.bOl(d)},
bOl(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jn)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdn(t),$async$Jn)
case 6:case 5:s=d.a
x=7
return A.b(B.F9(u.a.c,s),$async$Jn)
case 7:u.r.W(0,s)
x=8
return A.b(u.ui(),$async$Jn)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jn,w)},
aji(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aji=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a27(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYI(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aji)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agB()
break
case"import":u.acL()
break}case 1:return A.h(v,w)}})
return A.i($async$aji,w)},
cb1(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n_))return C.qL
if(C.a.a0(x,"image/")||d.mI(D.S1))return C.uK
if(C.a.q(x,"pdf"))return E.Pw
return D.apB},
B(d){var x,w,v=this,u=null,t=B.a27(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HU,u,u,u,new B.dYT(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bXj,u,u,u,v.e?u:v.gciR(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcwJ()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bRx:E.aq_,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3c,u,u,u,v.e?u:v.gcb2(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oC,u,u,u,v.e?u:v.gb3S(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZ4,u,u,u,v.e?u:new B.dYU(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lV(new B.dYV(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dx(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.R(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dx(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.R(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kl(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAy(C.jI,s,!0,t,w?u:v.gczE(),u),1)
x.push(new A.D(D.bCx,A.lz(new B.dYW(),A.A(A.a([s,C.at,A.E(new B.aAy(C.uL,"Export",!1,t,w?u:v.gbSd(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cw,C.j0,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfa(t,v.e?u:v.gb3S(),u)
else s=A.km(!0,u,u,new B.dYX(v,t),s,u,D.bCp,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAy.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.we,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.we,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f8,t,t,t),u.r,v)}}
B.bfa.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dbw(),new A.D(E.a0q,A.x(A.a([A.lz(new B.dbx(),A.p(x,A.X(C.z6,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.ew,C.hD,x,x,new A.bp(0.86,1,w),s),C.dV,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dV,A.dh(C.oC,D.fW3,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Oa,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.O,0,C.p),x),C.cw,C.C1,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.ad_.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.F(k.c*45,0,360),0,0)
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
if(!o||i.mI(D.n_))p=D.dr2
else{p=C.a.a0(p,"image/")||i.mI(D.S1)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gar6()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n_))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.aw,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fU,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.mI(D.n_)))l.push(A.h4g(C.aE,!1,j,j,j,!1,j,j,new B.dbT(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.X(C.ou,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.lz(new B.dbU(),new A.D(C.ei,A.aI(!1,C.a3,!0,j,A.aO(!1,r,!0,new A.D(C.a_T,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bP("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.a_3.prototype={
S(){return new B.aAD()},
gd1(){return this.c}}
B.aAD.prototype={
Y(){this.a3()
this.yp()},
t(){B.hSo(this.e)
this.a2()},
yp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rO(o.c,o.d),$async$yp)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gav(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hSr(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hSq(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dbQ(s))
x=1
break}s.m(new B.dbR(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dbS(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yp,w)},
a2E(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rO(t.c,t.d),$async$a2E)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ffG)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ait(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2E)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2E,w)},
c1E(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kA(u,C.A,v,new B.dbO(w,t),C.hc,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aH.gav(t))x=A.fR(t,C.A,v,new B.dbP(w),C.hc,C.dC,!0,v,!1,v,v)
else return C.bL
return A.uS(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a27(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D3,u,u,u,v.gb7D(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fp
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D3,D.fEm,v.gb7D(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c1E()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_0.prototype={
S(){return new B.aAA(A.ajk(),C.bD,C.bD)},
gd1(){return this.c}}
B.aAA.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fx(w,A.a4(w).k("fx<1>")).iz(new B.dbt(v))
x.gcWX().iz(new B.dbu(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a4(x).k("fx<1>"))}if(x==null)x=C.baX
x.iz(new B.dbv(v))
v.yp()},
yp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rO(p.c,p.d),$async$yp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbm(s))
x=1
break}x=8
return A.b(s.d.vn(0,new A.a4b(r,s.a.d.c)),$async$yp)
case 8:if(s.c==null){x=1
break}s.m(new B.dbn(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbo(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yp,w)},
a_s(){var x=0,w=A.j(y.H),v=this,u
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_s)
case 5:x=3
break
case 4:x=6
return A.b(u.iC(0),$async$a_s)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_s,w)},
aV9(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a27(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fp
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bSx,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Q2,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.dbp(p),C.o.F(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aV9(p.w)+" / "+p.aV9(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.fc5,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uN:C.hs,o,o,o,o,o)
x=A.x(A.a([u,C.l1,t,x,C.d6,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcb5(),s)],y.p),C.m,o,C.e,C.O,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.qw,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qn.prototype={
S(){return new B.aAG()},
gd1(){return this.c}}
B.aAG.prototype={
Y(){this.a3()
this.Qa()},
Qa(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qa=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h6z(o.c,o.d,new B.dc6(s)),$async$Qa)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dc7(s))
x=1
break}s.e=r
q=O.ieD(r)
if(q==null){s.m(new B.dc8(s))
x=1
break}s.d=q
q.aV(0,s.gb2A())
x=8
return A.b(q.iU(0).df(0,C.rK),$async$Qa)
case 8:if(s.c==null){x=1
break}s.m(new B.dc9(s))
x=9
return A.b(q.qn(0),$async$Qa)
case 9:q.tV(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dca(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qa,w)},
ch6(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcb(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Do(0,x.gb2A())
w=x.d
if(w!=null)w.t()
B.ioF(x.e)
x.a2()},
af1(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0A(u.c,u.d),$async$af1)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af1,w)},
B(d){var x,w,v,u=this,t=null,s=B.a27(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aG(t,t,t,t,C.oB,t,t,t,u.gcb_(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fp
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiP(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fF(x,new A.an(C.A,t,C.ac,C.t,A.a([new A.AD(s,t),A.aA(t,A.Bs(A.p(t,A.X(q?I.uN:C.hs,C.c,t,t,t,48),C.f,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b6,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcd(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_5.prototype={
S(){return new B.aAE(new A.cw(null,y.A))}}
B.aAE.prototype={
gcIL(){var x,w,v=this.a
if(v.e!==D.Tn)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIl(){var x,w,v=this.a
if(v.e!==D.Aa)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcIL()
if(x!=null){v.Rh(x)
v.e=A.de(R.GA,new B.dc2(v,x))}w=v.gcIl()
if(w!=null){v.Rg(w)
v.f=A.de(C.fF,new B.dc3(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rg(d){return this.coe(d)},
coe(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqm(d),$async$Rg)
case 3:t=f
x=4
return A.b(B.cdG(d),$async$Rg)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dbV(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rg,w)},
Rh(d){return this.cof(d)},
cof(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fUN(d),$async$Rh)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDl(t),$async$Rh)
case 4:if(u.c==null){x=1
break}u.m(new B.dbW(u))
u.c.L(y.q).f.U(D.aTx)
case 1:return A.h(v,w)}})
return A.i($async$Rh,w)},
gc6T(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcb0(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2q(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dt()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fiO)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dbX(),!1,null,y.N)),$async$a2q)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDl(s),$async$a2q)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTx)
case 1:return A.h(v,w)}})
return A.i($async$a2q,w)},
aaD(d){return this.bM1(d)},
bM1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aO(t,", "))),$async$aaD)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaD,w)},
af_(d){return this.bLL(d)},
bLL(d){var x=0,w=A.j(y.H),v=this
var $async$af_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$af_)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fg9)
return A.h(null,w)}})
return A.i($async$af_,w)},
a2k(d){return this.cvk(d)},
cvk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apk(s.d,4),$async$a2k)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tj(r,"ngmy_doc_share_qr.png"),$async$a2k)
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
return A.i($async$a2k,w)},
gaYC(){var x,w=this.a
if(w.e!==D.J0)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaA(d){return this.bLV(d)},
bLV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYC()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaA)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fhO)
case 1:return A.h(v,w)}})
return A.i($async$aaA,w)},
af0(){var x=0,w=A.j(y.H),v=this,u
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.VZ(),$async$af0)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$af0,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a27(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.J0&&i!==D.Tn&&i!==D.Aa
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J0||t===D.Tn||t===D.Aa?l:A.aG(l,l,l,l,C.lm,l,l,l,m.gb0F(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.q7(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc6T(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J0){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mP,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcb0(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c1V,D.fNU,new B.dbY(m,d),l)],p))}if(m.a.e===D.J0&&m.gaYC()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.bZp,D.fKv,new B.dbZ(m,d),l)],p))
if(m.a.e===D.Aa){x=(m.w?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ad(C.k.F(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mP,l,l,l)],p))}if(m.a.e===D.Tn){x=(m.r?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mP,l,l,l),C.af,A.dh(D.bV_,D.fR2,m.gcvH(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oH(i,A.c5(v,w,new A.D(C.ab,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ab,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D2,C.VO,new B.dc_(m,d),l),1),C.at,A.E(A.dh(C.zu,C.abb,new B.dc0(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bH(C.AN,l,m.gb0F(),A.bn(C.aN,l,l,l,l,C.h3,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dc1(),y.C)}}
B.acY.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cg(A.x(A.a([w,C.aR,A.p(x,A.q7(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ai)
return A.eg(A.a([A.bH(C.xj,x,new B.dbl(d),x)],u),x,x,C.ng,v,x,x,x,x,D.fDl,x)}}
B.a__.prototype={
S(){return new B.aAz(A.zM(C.yq,C.o_,C.v_))}}
B.aAz.prototype={
t(){this.d.t()
this.a2()},
ayK(d){var x,w,v,u,t
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
return A.c5(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fL1,x,x,x,1,x,!0),C.w,A.zL(this.d,C.bZ,this.gayJ()),x,!1,!1,x,x)}}
B.a_6.prototype={
S(){return new B.aAF(A.zM(C.yq,C.o_,C.v_))},
gd1(){return this.c}}
B.aAF.prototype={
c2I(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
agY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.My("text/plain"),$async$agY)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fiI)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agY,w)},
abr(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hDf(p,!0),$async$abr)
case 3:t=e
p=t==null
s=B.a7K(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.ffg)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abr,w)},
t(){this.d.t()
this.a2()},
ayK(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c2I(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.aqU,v,v,v,w.gbRI(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3j,v,v,v,w.gclA(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uH:P.Pe,v,v,v,v,v),v,v,v,new B.dc5(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fRX,v,v,v,1,v,!0)
u=A.zL(w.d,C.bZ,w.gayJ())
x=A.n(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ewS],s),v),v,!1,!1,v,v)}}
B.bfb.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pc
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pc:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a3,!0,r,A.aO(!1,w,!0,new A.D(C.a0w,A.A(A.a([u,C.be,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eG,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aa9.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.P8.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Y6.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.P7.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FE.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cri.prototype={}
B.FD.prototype={}
B.aa8.prototype={}
B.auW.prototype={}
B.Y7.prototype={}
var z=a.updateTypes(["aB<~>()","P(jy)","m(jy)","VQ(Z)","~()","a_2(Z)","F(F,jy)","Qn(Z)","~(me)","ct(FD)","aB<jy?>(@)","VO(Z)","VS(Z)","D(jy)","jy(@)","a8<m,@>(jy)","a_1(Z)","VP(Z)","a_3(Z)","a_0(Z)","a_5(Z)","acY(Z)","ai<jy>()","a_6(Z)","ad_(Z,F)","a__(Z)","a8<m,aF>(jy)","ct(Y6)","ct(aa8)","aB<ct>(FD)"])
B.cre.prototype={
$1(d){var x=this.a
x.x=D.aQo
x.y.I(0,D.aQo)},
$S:75}
B.crf.prototype={
$1(d){var x=this.a
x.x=D.aQn
x.y.I(0,D.aQn)},
$S:75}
B.crg.prototype={
$1(d){var x=this.a
x.aik(A.ahe(d.data)).bJ(new B.crd(x),y.b)},
$S:75}
B.crd.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crh.prototype={
$1(d){},
$S:75}
B.crk.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hXb(d.channel))},
$S:16}
B.crl.prototype={
$1(d){},
$S:16}
B.crm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ifM(w.iceConnectionState)
x.cx=w
if($.hfU())switch(w.a){case 0:x.cy=D.aQt
break
case 1:x.cy=D.aQu
break
case 3:x.cy=D.aQv
break
case 5:x.cy=D.aQr
break
case 6:x.cy=D.aQs
break
case 7:x.cy=D.a8S
break
default:break}},
$S:109}
B.crn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ifN(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.cro.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iq8(w.signalingState)},
$S:109}
B.crp.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iom(w.connectionState)},
$S:109}
B.crq.prototype={
$1(d){},
$S:109}
B.crr.prototype={
$1(d){},
$S:16}
B.fuZ.prototype={
$1(d){var x=y.F.a(new A.r3([],[]).oI(d.target.result,!1)),w=C.yr.q(x.objectStoreNames,"blobs")
if(!w)C.yn.Lh(x,"blobs")},
$S:180}
B.fTZ.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wN.fq(this.b)
$.eV.mC()
this.c.$1(d)},
$S:391}
B.fU0.prototype={
$1(d){return this.a.$1(B.i5i(this.b,this.c))},
$S:30}
B.fU_.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fTY.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fUd.prototype={
$1(d){var x=this
return B.hse(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fUe.prototype={
$1(d){var x=this
return B.hse(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fxy.prototype={
$1(d){var x=this
return B.cdh(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbE.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbB.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdh(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbD.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdh(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbC.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdh(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbG.prototype={
$4(d,e,f,g){var x=null
return A.jX(A.A(A.a([A.aG(x,x,x,x,D.bTC,x,x,x,new B.dbF(d),x,x,x,x,x,x),A.E(A.Fp(D.RL,!0,x,C.a2l,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RL,x,g,C.amz,0,e,f)},
$C:"$4",
$R:4,
$S:410}
B.dbF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzu.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eP,y.o).w,t=this.a,s=t?C.iA:C.c,r=A.n(28),q=A.p(v,D.bwe,C.f,v,v,D.b6p,v,v,v,v,D.amp,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bXU,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.GP,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ar9,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dT(C.dl,new B.fzs(d),v),1),C.at,A.E(A.bH(D.fJw,v,new B.fzt(p,x,d),A.bn(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GD,v,v,v,v),v)},
$S:61}
B.fzs.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzt.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fgq)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDf(v,x))},
$S:0}
B.fzY.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eP,y.o).w,u=x.a,t=u?C.iA:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bw3,C.f,w,w,D.b7T,w,w,w,w,D.amp,w,w,1/0),new A.D(C.GP,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.hbL(u,"Organization name",C.Hi,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.hbL(u,"Access code",C.nD,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.hbL(u,"Member password",H.HP,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.by,A.bH(D.fS3,w,new B.fzX(r,q,p,d),A.bn(C.aE,w,w,w,w,C.h3,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GD,w,w,w,w),w)},
$S:61}
B.fzX.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fgv)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGn(u,x,w))},
$S:0}
B.cd8.prototype={
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
return A.b(B.Cc(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cde.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdf.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdg.prototype={
$1(d){return d.b},
$S:z+2}
B.cda.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdb.prototype={
$1(d){return d.b},
$S:z+2}
B.cd9.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdc.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdd.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fUb.prototype={
$1(d){return new B.VO(this.a,null)},
$S:z+11}
B.fUc.prototype={
$1(d){return new B.VS(this.a,this.b,this.c,null)},
$S:z+12}
B.dXR.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZ_.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZ0.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZ1.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dYZ(x,d))},
$S:2}
B.dYZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZ2.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZ3.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZ4.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZ5.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZ6.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZ7.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZa.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*14)),e)},
$S:101}
B.dZ8.prototype={
$1(d){var x=this.a
return x.f?null:x.a_r()},
$S:2}
B.dZ9.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S1))s=C.uK
else s=C.a.a0(s,"video/")||d.mI(D.n_)?C.qL:D.apB
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gar6(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dXS.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dXT.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdi.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.cdj.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fV5.prototype={
$2(d,e){return e===this.a},
$S:341}
B.fs2.prototype={
$1(d){return J.k(d)},
$S:17}
B.fxK.prototype={
$1(d){var x=this.b
B.i3i(C.H5.ga77(this.a)).bJ(x.gBX(x),y.H)},
$S:130}
B.fxL.prototype={
$1(d){return this.a.da(0,null)},
$S:130}
B.fxM.prototype={
$0(){return null},
$S:12}
B.cdx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxN.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().af():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jy(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fBT.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fvY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fvZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdC.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n_)},
$S:z+1}
B.fZc.prototype={
$1(d){return new B.a_1(this.a,null)},
$S:z+16}
B.dbA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dby.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dYY.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1x()},
$S:11}
B.dYl.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYm.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dXV.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dXU(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFG(this.c)}},
$S:0}
B.dXU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dXW.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dY0.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dY_(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFG(this.c)}},
$S:0}
B.dY_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYM.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dYN.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dYi.prototype={
$1(d){return new B.VP(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYf.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Iy(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.VT(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ui(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1H(s.gJ(t)),$async$$0)
case 8:case 7:r.ii(s.gav(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXZ.prototype={
$1(d){this.a.acP(d,"No files selected.","Added")},
$S:391}
B.dYq.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.N(x,new B.dYp(),A.T(x).k("N<1,m>")))},
$S:0}
B.dYp.prototype={
$1(d){return d.a},
$S:z+2}
B.dY4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xH.co().cYV(C.a1j,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gav(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jF(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ii("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ii("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aql(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cq(l)){o.ii("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ui(),$async$$0)
case 9:o.ii("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dYJ.prototype={
$1(d){return new B.Qn(this.a.a.c,this.b,null)},
$S:z+7}
B.dYK.prototype={
$1(d){return new B.a_3(this.a.a.c,this.b,null)},
$S:z+18}
B.dYL.prototype={
$1(d){return new B.a_0(this.a.a.c,this.b,null)},
$S:z+19}
B.dYg.prototype={
$1(d){return new B.Qn(this.a.a.c,this.b,null)},
$S:z+7}
B.dYh.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.dYC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Iy(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7M(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ii("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.crG(),$async$$0)
case 5:x=6
return A.b(p.ui(),$async$$0)
case 6:r=A.T(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dYy(p),r),new B.dYz(),r.k("N<ak.E,m>")).bZ(0,new B.dYA())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYB(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pq(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.VZ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYy.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYx(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYz.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYA.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYB.prototype={
$1(d){var x=this.a
return new B.a_5(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dYD.prototype={
$1(d){return d.a},
$S:z+2}
B.dYE.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYw.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gar6(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n_)?C.rX:C.pr
p=!x||p.mI(D.n_)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([q,o,t,C.aC,B.a_4(!1,u,!1,w,p,new B.dYr(d),v),B.a_4(!1,u,!1,C.jI,"Share via QR",new B.dYs(d),"Letters/numbers QR code"),B.a_4(!1,u,!1,D.a2q,"Send to their Code",new B.dYt(d),"Enter someone else's personal code"),B.a_4(!1,u,!1,C.hV,"Download / save",new B.dYu(d),v),C.an,B.a_4(!1,u,!0,C.ef,"Delete",new B.dYv(d),v)],y.p),C.al,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,v,v,C.n),C.bi)},
$S:610}
B.dYr.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dYs.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dYt.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYu.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYv.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dY1.prototype={
$1(d){return d.a},
$S:z+2}
B.dY2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dY3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7O(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.H8(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pq(s.c,s.f),$async$$0)
case 4:u.ii(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXY.prototype={
$1(d){var x=this.a
x.uj(new B.dXX(x,d,this.b),"Preparing\u2026")},
$S:391}
B.dXX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ii("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.VT(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cq(s)){t.ii("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFt(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ii("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYj.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dYk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aX(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h6C(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.H6(new B.dY9(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ii("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dYa(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYb(s))
case 5:x=8
return A.b(r.b.iD(0,C.Gx,new B.dYc()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gav(t)){s.ii("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ui(),$async$$0)
case 9:s.ii("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY9.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dY6(x,d,e))},
$S:210}
B.dY6.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYa.prototype={
$1(d){return new B.acY(this.a.a,null)},
$S:z+21}
B.dYb.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYc.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.J9(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7C(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2N(B.J9(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aql(new B.dY7(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cq(r)){if(B.h6B(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ii(q)
x=1
break}x=10
return A.b(s.ui(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dY8()).gJ(0)
s.ii(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY7.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dY5(x,d,e))},
$S:210}
B.dY5.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dY8.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n_)},
$S:z+1}
B.dYo.prototype={
$1(d){return new B.a_6(this.a.a.c,null)},
$S:z+23}
B.dYn.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0A(u.a.c,v.b),$async$$0)
case 2:t.ii(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYI.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_4(!0,w,!1,C.nD,"My Code",new B.dYF(d),"Your personal code & QR \u2014 others send docs to you"),B.a_4(!1,w,!1,D.a2q,"Send to their Code",new B.dYG(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_4(!1,w,!1,S.zl,"Import backup",new B.dYH(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,x,x,C.n),C.bi)},
$S:610}
B.dYF.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dYG.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bFR()},
$S:0}
B.dYH.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dYV.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jj(D.RL,x,C.a2l,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cT(C.d.gH(D.RL).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:757}
B.dYT.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dYU.prototype={
$0(){this.a.aji()
return null},
$S:0}
B.dYW.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*10)),e)},
$S:101}
B.dYX.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ad_(e,w,v,this.b,x.e,x.cb1(w),new B.dYP(x,w),new B.dYQ(x,v,w),new B.dYR(x,w),new B.dYS(x,w),null)},
$S:z+24}
B.dYP.prototype={
$0(){this.a.agv(this.b)
return null},
$S:0}
B.dYQ.prototype={
$0(){var x=this.a
return x.m(new B.dYO(x,this.b,this.c))},
$S:0}
B.dYO.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.dYR.prototype={
$0(){this.a.Ou(this.b)
return null},
$S:0}
B.dYS.prototype={
$0(){this.a.aj5(this.b)
return null},
$S:0}
B.dbw.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*18)),e)},
$S:101}
B.dbx.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:114}
B.dbU.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*14)),e)},
$S:101}
B.dbT.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dbQ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dbR.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dbS.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dbO.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gav(w))return A.fR(w,C.A,x,new B.dbM(this.a),C.hc,C.dC,!0,x,!1,x,x)
$.aV.x1$.push(new B.dbN(this.a))
return C.bL},
$S:139}
B.dbM.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dbK(this.a))
return C.bL},
$S:194}
B.dbK.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbH(x))},
$S:7}
B.dbH.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbN.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbJ(x))},
$S:7}
B.dbJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbP.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dbL(this.a))
return C.bL},
$S:194}
B.dbL.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbI(x))},
$S:7}
B.dbI.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbt.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbs(x,d))},
$S:1762}
B.dbs.prototype={
$0(){return this.a.f=this.b===C.vo},
$S:0}
B.dbu.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbr(x,d))},
$S:7}
B.dbr.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbv.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbq(x,d))},
$S:7}
B.dbq.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbm.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbn.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbo.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbp.prototype={
$1(d){return this.a.d.Nr(0,A.dv(0,0,0,C.k.V(d),0,0))},
$S:6}
B.dc6.prototype={
$0(){var x=this.a.a
return B.rO(x.c,x.d)},
$S:1763}
B.dc7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dc8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dc9.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dca.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcb.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcd.prototype={
$0(){var x=this.a
x.m(new B.dcc(x))},
$S:0}
B.dcc.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qn(0)},
$S:0}
B.dc2.prototype={
$1(d){return this.a.Rh(this.b)},
$S:11}
B.dc3.prototype={
$1(d){return this.a.Rg(this.b)},
$S:11}
B.dbV.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dbW.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dbX.prototype={
$1(d){return D.hrM},
$S:z+25}
B.dc1.prototype={
$2(d,e){if(d)B.VZ()},
$S:131}
B.dbY.prototype={
$0(){return this.a.aaD(this.b)},
$S:0}
B.dbZ.prototype={
$0(){return this.a.aaA(this.b)},
$S:0}
B.dc_.prototype={
$0(){return this.a.af_(this.b)},
$S:0}
B.dc0.prototype={
$0(){return this.a.a2k(this.b)},
$S:0}
B.dbl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dc5.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qr(),$async$$0)
case 2:u.m(new B.dc4(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dc4.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdE.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n_)},
$S:z+1}
B.cdF.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdD.prototype={
$2(d,e){return this.bmu(d,e)},
bmu(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W_(u.c,A.H(["uploadProgress",C.k.F(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fBv.prototype={
$1(d){if(d===D.a8R&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fBw.prototype={
$0(){},
$S:12}
B.fC6.prototype={
bo3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fpj(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hns(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bo3(d,e)},
$S:753}
B.fC5.prototype={
$1(d){var x=this
d.b=new B.fC4(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fC4.prototype={
$1(d){return this.bo2(d)},
bo2(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0B(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Y.aS(0,n,null)
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
return A.b(B.fpj(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
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
return A.b(B.a7L(m),$async$$1)
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
x(v=B.aAC.prototype,"gcit","QR",0)
x(v,"gcjk","JD",0)
x(v,"gciQ","yA",0)
x(v=B.aEB.prototype,"gcaW","aeY",0)
x(v,"gcaX","a_q",0)
x(v,"gcy8","aiN",0)
x(v=B.aEE.prototype,"gcaY","a_r",0)
x(v,"gcy9","a2F",0)
x(B.aEC.prototype,"gcaZ","aeZ",0)
x(B.aAB.prototype,"gcb3","cb4",4)
x(v=B.aED.prototype,"gciR","a0B",0)
x(v,"gcwJ","cwK",4)
x(v,"gb3S","aAb",0)
x(v,"gczE","ajc",0)
x(v,"gbSd","Yj",0)
x(v,"gcb2","EG",0)
x(B.aAD.prototype,"gb7D","a2E",0)
x(B.aAA.prototype,"gcb5","a_s",0)
x(v=B.aAG.prototype,"gb2A","ch6",4)
x(v,"gcb_","af1",0)
x(v=B.aAE.prototype,"gcvH","a2q",0)
x(v,"gb0F","af0",0)
w(B.aAz.prototype,"gayJ","ayK",8)
x(v=B.aAF.prototype,"gclA","agY",0)
x(v,"gbRI","abr",0)
w(v,"gayJ","ayK",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.cri,B.aa8,B.auW,B.aDf,B.aGn,B.jy,B.acG,B.bxr,B.FD,B.Y7])
w(B.crj,B.cri)
w(B.b5J,B.aa8)
x(A.hu,[B.cre,B.crf,B.crg,B.crd,B.crh,B.crk,B.crl,B.crm,B.crn,B.cro,B.crp,B.crq,B.crr,B.fuZ,B.fTZ,B.fU0,B.fU_,B.fUd,B.fUe,B.fxy,B.dbB,B.dbD,B.dbC,B.dbG,B.fzu,B.fzY,B.cd8,B.cdf,B.cdg,B.cdb,B.cd9,B.cdc,B.cdd,B.fUb,B.fUc,B.dZ1,B.dZa,B.dZ8,B.dZ9,B.fs2,B.fxK,B.fxL,B.cdx,B.fxN,B.fBT,B.fvY,B.fvZ,B.cdC,B.fZc,B.dbA,B.dby,B.dYY,B.dXU,B.dY_,B.dYi,B.dXZ,B.dYp,B.dYJ,B.dYK,B.dYL,B.dYg,B.dYy,B.dYx,B.dYz,B.dYA,B.dYB,B.dYD,B.dYE,B.dYw,B.dY1,B.dY2,B.dXY,B.dYj,B.dYa,B.dY8,B.dYo,B.dYI,B.dYV,B.dYW,B.dbw,B.dbx,B.dbU,B.dbT,B.dbO,B.dbM,B.dbK,B.dbN,B.dbP,B.dbL,B.dbt,B.dbu,B.dbv,B.dbp,B.dc2,B.dc3,B.dbX,B.cdE,B.cdF,B.fBv,B.fC5,B.fC4])
w(B.b5K,B.auW)
x(A.iG,[B.fTY,B.dbE,B.dbF,B.fzs,B.fzt,B.fzX,B.dXR,B.dZ_,B.dZ0,B.dYZ,B.dZ2,B.dZ3,B.dZ4,B.dZ5,B.dZ6,B.dZ7,B.dXS,B.dXT,B.fxM,B.dbz,B.dYl,B.dYm,B.dXV,B.dXW,B.dY0,B.dYM,B.dYN,B.dYf,B.dYq,B.dY4,B.dYh,B.dYC,B.dYr,B.dYs,B.dYt,B.dYu,B.dYv,B.dY3,B.dXX,B.dYk,B.dYd,B.dY6,B.dYb,B.dYc,B.dYe,B.dY5,B.dYn,B.dYF,B.dYG,B.dYH,B.dYT,B.dYU,B.dYP,B.dYQ,B.dYO,B.dYR,B.dYS,B.dbQ,B.dbR,B.dbS,B.dbH,B.dbJ,B.dbI,B.dbs,B.dbr,B.dbq,B.dbm,B.dbn,B.dbo,B.dc6,B.dc7,B.dc8,B.dc9,B.dca,B.dcb,B.dcd,B.dcc,B.dbV,B.dbW,B.dbY,B.dbZ,B.dc_,B.dc0,B.dbl,B.dc5,B.dc4,B.fBw])
x(A.lB,[B.acZ,B.O4,B.aa9,B.P8,B.Y6,B.P7,B.FE])
x(A.af,[B.a_2,B.VO,B.VS,B.VP,B.a_1,B.VQ,B.a_3,B.a_0,B.Qn,B.a_5,B.a__,B.a_6])
x(A.ah,[B.aAC,B.aEB,B.aEE,B.aEC,B.aAB,B.aED,B.aAD,B.aAA,B.aAG,B.aAE,B.aAz,B.aAF])
x(A.ax,[B.adr,B.aAy,B.bfa,B.ad_,B.acY,B.bfb])
x(A.jt,[B.cde,B.cda,B.cdi,B.cdj,B.fV5,B.dY9,B.dY7,B.dYX,B.dc1,B.cdD,B.fC6])
x(A.j_,[B.bkD,B.bx3])})()
A.j0(b.typeUniverse,JSON.parse('{"b5J":{"aa8":[]},"b5K":{"auW":[]},"a_2":{"af":[],"v":[]},"aAC":{"ah":["a_2"]},"adr":{"ax":[],"v":[]},"VO":{"af":[],"v":[]},"VS":{"af":[],"v":[]},"aEB":{"ah":["VO"]},"aEE":{"ah":["VS"]},"bkD":{"j_":[]},"VP":{"af":[],"v":[]},"aEC":{"ah":["VP"]},"a_1":{"af":[],"v":[]},"VQ":{"af":[],"v":[]},"ad_":{"ax":[],"v":[]},"a_3":{"af":[],"v":[]},"a_0":{"af":[],"v":[]},"Qn":{"af":[],"v":[]},"a_5":{"af":[],"v":[]},"acY":{"ax":[],"v":[]},"a__":{"af":[],"v":[]},"a_6":{"af":[],"v":[]},"aAB":{"ah":["a_1"]},"bx3":{"j_":[]},"aED":{"ah":["VQ"]},"aAy":{"ax":[],"v":[]},"bfa":{"ax":[],"v":[]},"aAD":{"ah":["a_3"]},"aAA":{"ah":["a_0"]},"aAG":{"ah":["Qn"]},"aAE":{"ah":["a_5"]},"aAz":{"ah":["a__"]},"aAF":{"ah":["a_6"]},"bfb":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uD"),k:x("Mw()"),m:x("bv<m,m>"),F:x("ro"),g:x("aB<jy?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<m,P>>"),t:x("O<a8<m,@>>"),r:x("O<jy>"),w:x("O<+file,name(lP,m)>"),u:x("O<cT>"),s:x("O<m>"),E:x("O<j_>"),a:x("O<dJ>"),p:x("O<v>"),Z:x("O<F>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jy>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iA"),e:x("iub"),af:x("EQ"),U:x("jy"),b:x("ct"),C:x("aF"),aK:x("wv"),ab:x("FD"),br:x("auW"),v:x("Y7"),N:x("m"),X:x("bp<I>"),Q:x("m_"),D:x("dJ"),aw:x("bP<m>"),cd:x("Y<a8<m,@>>"),c7:x("v"),ch:x("c2<ai<jy>>"),aW:x("c2<dJ?>"),aY:x("c2<~>"),cx:x("acZ"),b1:x("bk<ai<jy>>"),cf:x("bk<dJ?>"),d4:x("bk<~>"),c4:x("aDf"),bG:x("aGn"),q:x("mu"),B:x("pJ<FD>"),c6:x("pJ<aa9>"),y:x("P"),i:x("I"),z:x("@"),S:x("F"),aQ:x("bh?"),_:x("ai<jy>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jy?"),R:x("aF?"),c:x("Y7?"),d:x("+answerQr,transfer(m,aB<ai<jy>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,O4,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dJ?"),cm:x("acG?"),bk:x("aDf?"),ag:x("aGn?"),dd:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b4M=new A.ay(C.aE,2,C.r,-1)
D.c6w=new A.a9(C.a6,C.a9,C.x,C.a4v,null,null)
D.b6p=new A.o(null,null,null,C.mz,null,D.c6w,C.n)
D.b7T=new A.o(null,null,null,C.mz,null,E.I0,C.n)
D.afk=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agL=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahN=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajy=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fEf=new A.B("Your team portal",null,C.dg,null,null,null,null,null,null,null,null,null)
D.fSZ=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.di6=x([D.fEf,C.an,D.fSZ],y.p)
D.bvU=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.di6,null)
D.fXr=new A.B("Create your organization",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fIH=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dyU=x([D.fXr,C.an,D.fIH],y.p)
D.bw3=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dyU,null)
D.fTB=new A.B("Team Member sign-in",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fMC=new A.B("Enter the access code and password from your organization.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dwG=x([D.fTB,C.an,D.fMC],y.p)
D.bwe=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dwG,null)
D.bCp=new A.Q(16,10,16,28)
D.bCx=new A.Q(16,14,16,4)
D.bDN=new A.Q(20,0,20,16)
D.bEi=new A.Q(20,8,20,16)
D.amp=new A.Q(24,22,24,20)
D.a2q=new A.a0(63394,"MaterialIcons",!1)
D.apB=new A.a0(63515,"MaterialIcons",!1)
D.bRx=new A.a0(983813,"MaterialIcons",!1)
D.bON=new A.a0(62867,"MaterialIcons",!1)
D.bSx=new A.ae(D.bON,44,C.c,null,null,null)
D.bTC=new A.ae(C.k4,null,C.ad,null,null,null)
D.bV_=new A.ae(C.jn,18,null,null,null,null)
D.bWK=new A.ae(D.a2q,26,C.c,null,null,null)
D.bXj=new A.ae(C.CS,null,null,null,null,null)
D.bXU=new A.ae(C.D_,null,null,null,null,null)
D.bZ4=new A.ae(W.a2B,null,null,null,null,null)
D.bZp=new A.ae(C.hI,16,null,null,null,null)
D.c1V=new A.ae(C.rW,16,null,null,null,null)
D.bSO=new A.ae(C.nD,null,null,null,null,null)
D.c2O=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYr=new A.ae(C.Hi,null,null,null,null,null)
D.c2T=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bT9=new A.ae(H.HP,null,null,null,null,null)
D.c33=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bT9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cS4=x([C.fn,C.b2,C.aE],y.O)
D.c8p=new A.a9(C.aA,C.aF,C.x,D.cS4,null,null)
D.cRw=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RL=x([C.fn,C.aE],y.O)
D.S1=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n_=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dr2=x([C.oe,C.aE],y.O)
D.ej4={iceServers:0}
D.aKU={urls:0}
D.dCC=new A.bv(D.aKU,["stun:stun.l.google.com:19302"],y.m)
D.dCB=new A.bv(D.aKU,["stun:stun1.l.google.com:19302"],y.m)
D.d7L=x([D.dCC,D.dCB],A.as("O<a8<m,m>>"))
D.dBT=new A.bv(D.ej4,[D.d7L],A.as("bv<m,@>"))
D.J0=new B.O4(0,"lanDirect")
D.Tm=new B.O4(1,"cloudStash")
D.dNF=new B.O4(2,"inlineInstant")
D.Tn=new B.O4(3,"webrtcLink")
D.Aa=new B.O4(4,"videoCloud")
D.fSY=new A.B("Receive file",null,C.na,null,null,null,null,null,null,null,null,null)
D.cHk=x([E.ari,C.ae,D.fSY],y.p)
D.f7_=new A.c6(C.aL,C.ba,C.i,C.m,null,C.p,null,0,D.cHk,null)
D.eqA=new A.D(C.cn,D.f7_,null)
D.fuO=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Is,null,null,null)
D.fEO=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fuO,null,C.K,null,null,null,null,null,null,null)
D.epL=new A.D(C.Ch,D.fEO,null)
D.bch=new A.cc(C.A,null,null,D.epL,null)
D.ewS=new A.cL(0,null,0,28,null,null,D.bch,null)
D.exb=new B.aa9(0,"RTCDataChannelConnecting")
D.aQn=new B.aa9(1,"RTCDataChannelOpen")
D.aQo=new B.aa9(3,"RTCDataChannelClosed")
D.exc=new B.FE(0,"RTCIceConnectionStateNew")
D.exd=new B.FE(1,"RTCIceConnectionStateChecking")
D.exe=new B.FE(2,"RTCIceConnectionStateCompleted")
D.exf=new B.FE(3,"RTCIceConnectionStateConnected")
D.exg=new B.FE(4,"RTCIceConnectionStateCount")
D.exh=new B.FE(5,"RTCIceConnectionStateFailed")
D.exi=new B.FE(6,"RTCIceConnectionStateDisconnected")
D.aQp=new B.FE(7,"RTCIceConnectionStateClosed")
D.aQq=new B.Y6(0,"RTCIceGatheringStateNew")
D.exj=new B.Y6(1,"RTCIceGatheringStateGathering")
D.a8R=new B.Y6(2,"RTCIceGatheringStateComplete")
D.a8S=new B.P7(0,"RTCPeerConnectionStateClosed")
D.aQr=new B.P7(1,"RTCPeerConnectionStateFailed")
D.aQs=new B.P7(2,"RTCPeerConnectionStateDisconnected")
D.aQt=new B.P7(3,"RTCPeerConnectionStateNew")
D.aQu=new B.P7(4,"RTCPeerConnectionStateConnecting")
D.aQv=new B.P7(5,"RTCPeerConnectionStateConnected")
D.exk=new B.P8(0,"RTCSignalingStateStable")
D.exl=new B.P8(1,"RTCSignalingStateHaveLocalOffer")
D.exm=new B.P8(2,"RTCSignalingStateHaveRemoteOffer")
D.exn=new B.P8(3,"RTCSignalingStateHaveLocalPrAnswer")
D.exo=new B.P8(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQw=new B.P8(5,"RTCSignalingStateClosed")
D.fc5=new A.av(160,48)
D.bdy=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.fdE=new A.a5(16,16,D.bdy,null)
D.fI1=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ff6=new A.b1(D.fI1,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fPE=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ff9=new A.b1(D.fPE,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fYv=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new A.b1(D.fYv,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHC=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ffG=new A.b1(D.fHC,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTM=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTx=new A.b1(D.fTM,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVe=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new A.b1(D.fVe,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZY=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new A.b1(D.fZY,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fXV=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new A.b1(D.fXV,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZ8=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new A.b1(D.fZ8,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGc=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhO=new A.b1(D.fGc,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRy=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new A.b1(D.fRy,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fKl=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new A.b1(D.fKl,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_3=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiI=new A.b1(D.h_3,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGs=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new A.b1(D.fGs,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fF9=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new A.b1(D.fF9,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fBV=new A.B("NGMY DOC SHARE",null,C.aUW,null,null,null,null,null,null,null,null,null)
D.fDl=new A.B("Show this to sender",null,C.ix,null,null,null,null,null,null,null,null,null)
D.fEm=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fJ7=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fJw=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fKv=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNU=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fQH=new A.B("Send to their Doc Share",null,C.nR,null,null,null,null,null,null,null,null,null)
D.fR2=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRm=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fRX=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fS3=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fSr=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f8,null,null,null,null,null,null,null,null,null)
D.fVK=new A.B("Share files & videos\nwith a scan.",null,C.aUZ,null,null,null,null,null,null,null,null,null)
D.fW3=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hrM=new B.a__(null)
D.acc=new B.acZ(0,"docShare")
D.acd=new B.acZ(1,"gate")
D.Wp=new B.acZ(2,"gateNoIndividual")})();(function staticFields(){$.aP5=null
$.fmX=function(){var x=y.N
return A.U(x,x)}()
$.GU=A.U(y.N,y.D)
$.ah2=A.U(y.N,A.as("lP"))
$.RJ=A.U(y.N,y.D)
$.fnz=A.U(y.N,A.as("acG"))
$.cdw=A.U(y.S,A.as("bxr"))
$.hnr=1
$.ibs=null
$.ibr=null
$.i2A=null
$.hbY=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iuG","hFe",()=>new B.crj())
x($,"isA","hfU",()=>C.a.q(A.bz(A.bz(A.bz(A.Ht(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["YbYjfmAbgLxNp47sqxoHzKhP8oU="]=a.current})($__dart_deferred_initializers__);