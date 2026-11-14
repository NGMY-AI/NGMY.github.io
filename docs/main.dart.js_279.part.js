((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crJ:function crJ(){},
hZd(d){var x=null,w=new B.b64(d,D.eyH,new A.pO(x,x,y.c6),new A.pO(x,x,y.B))
w.bCa(d)
return w},
b64:function b64(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crE:function crE(d){this.a=d},
crF:function crF(d){this.a=d},
crG:function crG(d){this.a=d},
crD:function crD(d){this.a=d},
crH:function crH(d){this.a=d},
hZe(d,e){var x=y.N
x=new B.b65(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCb(d,e)
return x},
b65:function b65(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crK:function crK(d){this.a=d},
crL:function crL(d){this.a=d},
crM:function crM(d){this.a=d},
crN:function crN(d){this.a=d},
crO:function crO(d){this.a=d},
crP:function crP(d){this.a=d},
crQ:function crQ(d){this.a=d},
crR:function crR(d){this.a=d},
hdl(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zB.MA(x,"ngmy_doc_share_v1",new B.fwc(),1)},
i4Z(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wQ(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
S8(d,e){return B.il2(d,e)},
il2(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPv
x=7
return A.b(o==null?$.aPv=B.hdl():o,$async$S8)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.n2(s,"blobs","readwrite")
C.j6.mx(J.n1(q,"blobs"),r,d)
x=8
return A.b(J.pY(q),$async$S8)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.an.$1("[doc share idb put] "+A.w(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$S8,w)},
S7(d){return B.il1(d)},
il1(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPv
x=7
return A.b(o==null?$.aPv=B.hdl():o,$async$S7)
case 7:s=f
r=J.n2(s,"blobs","readonly")
x=8
return A.b(C.j6.A5(J.n1(r,"blobs"),d),$async$S7)
case 8:q=f
x=9
return A.b(J.pY(r),$async$S7)
case 9:o=B.i4Z(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.an.$1("[doc share idb get] "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$S7,w)},
ai0(d){return B.il0(d)},
il0(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ai0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPv
x=7
return A.b(p==null?$.aPv=B.hdl():p,$async$ai0)
case 7:s=f
r=J.n2(s,"blobs","readwrite")
C.j6.Gl(J.n1(r,"blobs"),d)
x=8
return A.b(J.pY(r),$async$ai0)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.an.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ai0,w)},
fwc:function fwc(){},
i7E(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqT(w,v))}return u},
hEl(d,e){var x,w={},v=A.aY8("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fVw(w,v,e)
C.wR.z7(v,"change",new B.fVy(w,v,!1))
C.wR.z7(v,"cancel",new B.fVx(w))
$.eX.mC()
v.click()
A.bP(C.akP,new B.fVv(w),y.H)},
fVw:function fVw(d,e,f){this.a=d
this.b=e
this.c=f},
fVy:function fVy(d,e,f){this.a=d
this.b=e
this.c=f},
fVx:function fVx(d){this.a=d},
fVv:function fVv(d){this.a=d},
DG(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUw()?3:4
break
case 3:x=5
return A.b(B.hz9(e,d,s,!0,!1,f,g,h,!1,i),$async$DG)
case 5:x=1
break
case 4:x=6
return A.b(B.RM(d,s,f,g,h,i),$async$DG)
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
return A.b(B.Jj(s,d),$async$DG)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.frH(s,d),$async$DG)
case 14:x=12
return A.b(r.hz9(q,p,o,n,m,l,k,j,a1,i),$async$DG)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.ec(new B.fVL(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.ec(new B.fVM(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DG,w)},
RM(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RM=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0P(e),$async$RM)
case 3:u=k
x=4
return A.b(B.aqy(d,e,!1),$async$RM)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jj(e,d),$async$RM)
case 7:if(k){v=D.acv
x=1
break}x=8
return A.b(B.W2(e),$async$RM)
case 8:v=t?D.Ww:D.acw
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0N(d,e)){v=D.acv
x=1
break}x=11
return A.b(B.W2(e),$async$RM)
case 11:v=t?D.Ww:D.acw
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h8h(d,e)){v=D.acv
x=1
break}x=14
return A.b(B.W2(e),$async$RM)
case 14:v=D.Ww
x=1
break
case 13:v=t?D.Ww:D.acw
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RM,w)},
frH(d,e){var x=0,w=A.j(y.y),v
var $async$frH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0N(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0P(d),$async$frH)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frH,w)},
hz9(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.ec(new B.fyQ(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hu8(d,e,f,g,h,i,j){return new B.a_f(e,j,d,g,h,i,f,null)},
fAJ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fAJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fAM(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fAJ)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAJ,w)},
fBd(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fBd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fBf(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fBd)
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
return A.i($async$fBd,w)},
hdw(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fO_(d,e){var x=0,w=A.j(y.H),v
var $async$fO_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.W2(e),$async$fO_)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fO_,w)},
fVL:function fVL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVM:function fVM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ade:function ade(d,e){this.a=d
this.b=e},
fyQ:function fyQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_f:function a_f(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAY:function aAY(){this.c=this.a=this.d=null},
dc6:function dc6(d,e){this.a=d
this.b=e},
dc3:function dc3(d){this.a=d},
dc5:function dc5(d){this.a=d},
dc4:function dc4(d){this.a=d},
dc8:function dc8(){},
dc7:function dc7(d){this.a=d},
adH:function adH(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDB:function aDB(d,e){this.a=d
this.b=e},
aGJ:function aGJ(d,e,f){this.a=d
this.b=e
this.c=f},
fAM:function fAM(d,e,f){this.a=d
this.b=e
this.c=f},
fAK:function fAK(d){this.a=d},
fAL:function fAL(d,e,f){this.a=d
this.b=e
this.c=f},
fBf:function fBf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBe:function fBe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdx(d,e,f,g,h){return B.hU5(d,e,f,g,h)},
hU5(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdx=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.cdy(s,e,h,g,f,q),y.g),y.l),$async$cdx)
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
return A.i($async$cdx,w)},
b0K(d,e,f,g,h){return B.hU6(d,e,f,g,h)},
hU6(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0K=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw6("GET",d)
o=A.h4F()
if(o==null)o=new A.MA(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dh(0,C.GC),$async$b0K)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CS(),$async$b0K)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cj(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.an.$1("[doc share pull url web] "+f+": "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0K,w)},
b0J(d){return B.hU3(d)},
hU3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vQ(d,null).dh(0,C.om),$async$b0J)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.mb(A.m9(p.e)).cI(0,p.w),null)
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
$.an.$1("[doc share lan manifest web] "+A.w(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0J,w)},
cdw(d){return B.hU4(d)},
hU4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vQ(d,null).dh(0,C.qx),$async$cdw)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mb(A.m9(q.e)).cI(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.an.$1("[doc share lan text web] "+A.w(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdw,w)},
cdy:function cdy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jC:function jC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jh(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hUb(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Jh(C.a.b2(t,u.length))}return null},
hUc(d){var x=B.Jh(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hU7(){var x,w=$.os(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7Q(d){return B.hU8(d)},
hU8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a7Q)
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
$.an.$1("[doc share my code] load "+d+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7Q,w)},
a7R(d,e){return B.hU9(d,e)},
hU9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7R=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cM,null),$async$a7R)
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
$.an.$1("[doc share my code] save "+d+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7R,w)},
Ci(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ci=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ci)
case 3:u=f
t=C.a.i(i)
s=A.aS(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jh(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7S(r),$async$Ci)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7Q("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ci)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jh(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ci)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hU7()
x=14
return A.b(B.a7S(m),$async$Ci)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7R("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ci)
case 15:k=f
x=16
return A.b(B.a7R("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ci)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ci)
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
return A.i($async$Ci,w)},
a7S(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jh(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7Q("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7S)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
a7T(d,e,f,g){return B.hUd(d,e,f,g)},
hUd(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7T=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jh(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7S(r),$async$a7T)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.cdE())>1048576||g.aV(d,new B.cdF())){v=B.Fg(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a83("myCode",d,a0),$async$a7T)
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
v=B.Fg(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0S(u,g.gI(d),a0),$async$a7T)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.os().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dM(d,new B.cdG(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0L(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a7T)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
Fg(d,e,f,g,h){return B.hUa(d,e,f,g,h)},
hUa(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fg=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fg)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cG(a6,0,new B.cdA())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.os().aw(9999)
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
a1=B.Jl(a9,q)
a0=new A.L9(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fg)
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
a4=A.pl(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abt(a1.a,a4,"media",a1.d,a2).xI(m,n,new A.Ev(!0,q.c)),$async$Fg)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fg)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aS3(r),$async$Fg)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dM(a6,new B.cdB(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0L(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fg)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aS3(r),$async$Fg)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fg,w)},
b0L(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7Q(t),$async$b0L)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cdz(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7R(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0L,w)},
Oc(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oc=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7Q("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oc)
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
return A.b(B.b0M(k,a0),$async$Oc)
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
return A.b(B.b0R(h),$async$Oc)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W9(g,a0),$async$Oc)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdC(),q),n)
d=A.C(new A.Y(r,new B.cdD(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7R("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oc)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oc,w)},
b0M(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0M=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.j.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ioV(k,j)
C.d.v(s,i)
x=5
return A.b(B.DE(l,m,"Received via My Code",t,e,i),$async$b0M)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aS3(s),$async$b0M)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0M,w)},
cdE:function cdE(){},
cdF:function cdF(){},
cdG:function cdG(){},
cdA:function cdA(){},
cdB:function cdB(){},
cdz:function cdz(){},
cdC:function cdC(){},
cdD:function cdD(){},
fVI(d,e){var x=0,w=A.j(y.H)
var $async$fVI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.ec(new B.fVJ(e),!1,null,y.H)),$async$fVI)
case 2:return A.h(null,w)}})
return A.i($async$fVI,w)},
bFR(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.ec(new B.fVK(g,e,f),!1,null,y.y)),$async$bFR)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFR,w)},
fVJ:function fVJ(d){this.a=d},
fVK:function fVK(d,e,f){this.a=d
this.b=e
this.c=f},
W_:function W_(d,e){this.c=d
this.a=e},
aEX:function aEX(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYE:function dYE(d,e){this.a=d
this.b=e},
W3:function W3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aF_:function aF_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZN:function dZN(d){this.a=d},
dZO:function dZO(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZM:function dZM(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZS:function dZS(d,e){this.a=d
this.b=e},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZU:function dZU(d,e){this.a=d
this.b=e},
dZV:function dZV(d){this.a=d},
dZY:function dZY(){},
dZW:function dZW(d){this.a=d},
dZX:function dZX(d,e){this.a=d
this.b=e},
bkZ:function bkZ(){},
W0:function W0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEY:function aEY(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dYF:function dYF(d){this.a=d},
dYG:function dYG(d){this.a=d},
h8i(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hUf(d){var x=d.l3
if(x>=0)return x
return 4.99},
hUe(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdI(),w,w)
return w},
hpc(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdJ(),w,w)
return w},
b0P(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0P)
case 7:s=f
r=A.w(p)
r=A.aS(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b0P,w)},
a7V(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7V)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7V)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7V,w)},
W2(d){var x=0,w=A.j(y.H),v,u
var $async$W2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$W2)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$W2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$W2,w)},
h8h(d,e){var x,w,v
if(B.hUf(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hUe(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0N(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hpc(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hpd(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hpc(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqz(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqz)
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
return A.i($async$aqz,w)},
aqA(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqz(d),$async$aqA)
case 3:u=f
x=5
return A.b(A.az(),$async$aqA)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqA,w)},
aqy(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h8i(d)
if(u<=0){v=!1
x=1
break}if(B.h8h(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqz(e),$async$aqy)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqy,w)},
b0O(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jj(e,d),$async$b0O)
case 3:if(g){v=-1
x=1
break}u=B.h8i(d)
if(u<=0){v=-1
x=1
break}if(B.h8h(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqz(e),$async$b0O)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0O,w)},
cdL(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jj(e,d),$async$cdL)
case 3:if(h){v=!1
x=1
break}v=B.aqy(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdL,w)},
cdK(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdK=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdL(d,u,i.gUw()),$async$cdK)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdK,w)},
a7U(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7U=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUw()){v=!0
x=1
break}if(B.b0N(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.TP),$async$a7U)
case 5:x=k?3:4
break
case 3:B.hpd(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7U)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lc(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TP,"Doc Share for Organizations"),$async$a7U)
case 7:if(!k){v=!1
x=1
break}B.hpd(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7U)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
cdI:function cdI(){},
cdJ:function cdJ(){},
fWB(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fWB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fWB)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fo4.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.fo4.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWB,w)},
irN(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fo4.bt($.fo4,new B.fWD(d))},
fWD:function fWD(d){this.a=d},
fpG(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fpG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jm,null,y.H),$async$fpG)
case 3:C.Bb.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpG,w)},
agQ(d,e,f){var x=0,w=A.j(y.H),v
var $async$agQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.foK.n(0,d,new B.acW(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agQ)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.I(["parts",e,"size",f],v,y.C),null)),$async$agQ)
case 2:return A.h(null,w)}})
return A.i($async$agQ,w)},
agK(d){return B.i9E(d)},
i9E(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.foK.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agK)
case 3:u=j.aS(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b8(s,new B.ftg(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.acW(r)
$.foK.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agK,w)},
RC(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H1.n(0,d,u)
x=3
return A.b(B.S8(d,u),$async$RC)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
aPS(d){return B.i9C(d)},
i9C(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H1.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.S7(d),$async$aPS)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H1.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPS)
case 4:s=f
r=A.aS(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aN(r)
x=!J.cr(q)?9:10
break
case 9:B.RC(d,q)
x=11
return A.b(J.hk(s,d),$async$aPS)
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
return A.i($async$aPS,w)},
i5r(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wQ(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a2L(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fz1(r,t),!1,s)
A.fB(r,"error",new B.fz2(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.NQ,new B.fz3())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2L,w)},
aQb(d,e,f){return B.ic0(d,e,f)},
ic0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQb=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2L(i),$async$aQb)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S8(o,p),$async$aQb)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agQ(k,j,s),$async$aQb)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.an.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQb,w)},
aQa(d,e,f){return B.ic_(d,e,f)},
ic_(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQa=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQb(d,e,f),$async$aQa)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2L(f),$async$aQa)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H1.n(0,s,r)
$.RT.n(0,s,r)
x=11
return A.b(B.RC(s,r),$async$aQa)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.an.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQa,w)},
Cj(d,e,f,g,h,i){return B.hUo(d,e,f,g,h,i)},
hUo(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cj=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jC(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0V(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RC(s,d),$async$Cj)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cj)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cP.gcu().aN(d)),$async$Cj)
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
return A.b(B.Bh(e),$async$Cj)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.Hb(e,j),$async$Cj)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cj,w)},
W4(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W4=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bh(d),$async$W4)
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
k=B.hpf(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jC(m,n,k,l,j,"From folder",null,B.b0V(),null)
$.ahj.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2L(o),$async$W4)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H1.n(0,h,g)
$.RT.n(0,h,g)
B.RC(h,g)
x=9
break
case 10:x=11
return A.b(B.aQa(d,m,o),$async$W4)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hb(d,t),$async$W4)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
h8m(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h8m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hpf(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jk(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cj(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8m,w)},
Jk(d,e,f,g,h,i){return B.hUn(d,e,f,g,h,i)},
hUn(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jk=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L9(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jk)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.fW(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SG(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S8(k,l),$async$Jk)
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
return A.b(j.a1(0),$async$Jk)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S8(k,new Uint8Array(A.cc(n))),$async$Jk)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agQ(r,q,g),$async$Jk)
case 16:f=new B.jC(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0V(),null)
x=17
return A.b(B.Bh(d),$async$Jk)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.Hb(d,e),$async$Jk)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jk,w)},
W6(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$W6=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahj.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2L(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agK(s),$async$W6)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S7(u[o]),$async$W6)
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
v=A.wQ(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RT.h(0,s)
if(i==null)i=$.H1.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rS(d,e),$async$W6)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.RT.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wQ(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W6,w)},
hpf(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gan(x):""
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
rS(d,e){return B.hUp(d,e)},
hUp(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rS=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RT.h(0,f)
if(e==null)e=$.H1.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahj.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2L(s),$async$rS)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H1.n(0,f,r)
$.RT.n(0,f,r)
B.RC(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.agK(f),$async$rS)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azL(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S7(g[l]),$async$rS)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apS()
if(!C.aI.gau(r)){$.H1.n(0,f,r)
$.RT.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPS(f),$async$rS)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.RT.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.W6(a0,a1,0,g),$async$rS)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H1.n(0,f,h)
$.RT.n(0,f,h)
B.RC(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rS,w)},
hUs(d){var x,w,v=$.ahj.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hUt(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hUq(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqG(d,e,f,g,h){return B.hUr(d,e,f,g,h)},
hUr(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqG=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahj.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2L(s),$async$aqG)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rS(g,e),$async$aqG)
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
return A.b(n.iB(d).xI(h,r,new A.Ev(!0,e.c)),$async$aqG)
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
$.an.$1("[doc share upload web] "+e.b+": "+A.w(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqG,w)},
hph(d,e,f,g,h){var x,w,v,u,t=$.hpg
$.hpg=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdW.n(0,t,new B.bxQ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azL(u)))
return t},
h8n(d){var x=0,w=A.j(y.H)
var $async$h8n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8n,w)},
Jl(d,e){var $async$Jl=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahj.h(0,h)
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
return A.qu(B.W6(d,e,p,o<q?o:q),$async$Jl,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qu(A.Gz(n),$async$Jl,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qu(B.agK("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jl,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qu(B.S7(h[l]),$async$Jl,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qu(A.Gz(k),$async$Jl,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qu(B.rS(d,e),$async$Jl,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qu(A.Gz(A.wQ(j,p,o<i?o:i)),$async$Jl,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qu(null,0,w)
case 2:return A.qu(t.at(-1),1,w)}})
var x=0,w=A.hy3($async$Jl,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hzQ(w)},
b0X(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdW.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5D(),$async$b0X)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0X,w)},
W5(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$W5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdW.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5D(),$async$W5)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agQ(r.c,u,r.z),$async$W5)
case 4:t=new B.jC(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0V(),null)
u=r.a
x=5
return A.b(B.Bh(u),$async$W5)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.Hb(u,s),$async$W5)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W5,w)},
a80(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a80=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdW.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ai0(u[s]),$async$a80)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a80,w)},
cdY(d,e,f){var x=0,w=A.j(y.H)
var $async$cdY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCR(d,e,f),$async$cdY)
case 2:return A.h(null,w)}})
return A.i($async$cdY,w)},
cdZ(d,e,f){var x=0,w=A.j(y.H)
var $async$cdZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCS(d,e,f),$async$cdZ)
case 2:return A.h(null,w)}})
return A.i($async$cdZ,w)},
Fh(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bh(d),$async$Fh)
case 2:p=g
J.nR(p,new B.cdX(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H1.W(0,v)
$.ahj.W(0,e)
x=3
return A.b(B.agK(v),$async$Fh)
case 3:u=g
$.foK.W(0,v)
x=4
return A.b(A.az(),$async$Fh)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fh)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fh)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ai0(s[q]),$async$Fh)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ai0(v),$async$Fh)
case 13:x=14
return A.b(B.Hb(d,p),$async$Fh)
case 14:return A.h(null,w)}})
return A.i($async$Fh,w)},
b0W(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rS(d,e),$async$b0W)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fpG(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0W,w)},
Bh(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bh)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aS(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fz4(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bh,w)},
Hb(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hb)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fDf(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$Hb)
case 3:return A.h(null,w)}})
return A.i($async$Hb,w)},
bCR(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bh(d),$async$bCR)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxf(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFZ(f))
x=4
return A.b(B.Hb(d,u),$async$bCR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCR,w)},
bCS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bh(d),$async$bCS)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxg(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOq(f))
x=4
return A.b(B.Hb(d,u),$async$bCS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCS,w)},
acW:function acW(d){this.a=d},
ftg:function ftg(){},
fz1:function fz1(d,e){this.a=d
this.b=e},
fz2:function fz2(d){this.a=d},
fz3:function fz3(){},
cdX:function cdX(d){this.a=d},
bxQ:function bxQ(d,e,f,g,h,i,j,k,l){var _=this
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
fz4:function fz4(){},
fDf:function fDf(){},
fxf:function fxf(d){this.a=d},
fxg:function fxg(d){this.a=d},
a81(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a81=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.ce1())?3:4
break
case 3:x=5
return A.b(B.b0Y(d,e),$async$a81)
case 5:u=g
if(u!=null){t=u.c
B.Oe(d,u.b,e,t)}v=u
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
return A.b(B.b0T(s),$async$a81)
case 10:case 9:if(g){v=new A.QY(1,D.Ts,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W7(d,e),$async$a81)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wc(!0,!0,d,e),$async$a81)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oe(d,D.Af,e,t)
v=new A.QY(p,D.Af,t)
x=1
break}v=B.ce0(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a81,w)},
W7(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a83(null,d,e),$async$W7)
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
return A.b(B.b0S(p,d.length,e),$async$W7)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdZ(e,C.d.gH(d).a,r.b),$async$W7)
case 7:case 6:q=r.a
x=8
return A.b(B.Oe(d,D.Ts,e,q),$async$W7)
case 8:v=new A.QY(d.length,D.Ts,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W7,w)},
W8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n6)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a82(d,e),$async$W8)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdU(s,d,e,t),$async$W8)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0T(t),$async$W8)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rS(e,d),$async$W8)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W7(A.a([d],y.r),e),$async$W8)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W8,w)},
Wa(){var x=0,w=A.j(y.H)
var $async$Wa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h8g(),$async$Wa)
case 2:x=3
return A.b(B.aSq(),$async$Wa)
case 3:return A.h(null,w)}})
return A.i($async$Wa,w)},
a82(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a82=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0V()
x=3
return A.b(B.cdY(e,d.a,u),$async$a82)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a82,w)},
Oe(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ts&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a82(p,f),$async$Oe)
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
return A.b(B.cdT(o,p,u,f),$async$Oe)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdU(o,p,f,t),$async$Oe)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdS(o,u,p,f),$async$Oe)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oe,w)},
b0Y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ce_(e,d),$async$b0Y)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wc(!1,!0,d,e),$async$b0Y)
case 4:u=g
if(u!=null){t=u.b
v=new A.QY(u.a,D.Af,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Y,w)},
ce_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ce_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.W6(d,s,0,1),$async$ce_)
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
return A.i($async$ce_,w)},
ce0(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ce0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a83(null,d,e),$async$ce0)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hpe(u)
if(t.length>800){v=null
x=1
break}v=new A.QY(d.length,D.dP6,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce0,w)},
aqH(d,e,f){return B.hUw(d,e,f)},
hUw(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqH=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h8l(g)?3:4
break
case 3:x=5
return A.b(B.cdV(g),$async$aqH)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fi(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.an.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b0R(q),$async$aqH)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W9(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.an.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h8k(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W9(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.an.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jm(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jm(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aC(k,0,k.length-1)
else h=k
v=B.Jm(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W9(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqH,w)},
Jm(d,e,f){return B.hUu(d,e,f)},
hUu(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jm=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0J(r),$async$Jm)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0J(A.cD(s,0,null)),$async$Jm)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdx(o,r,a1,n,a2),$async$Jm)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdw(q),$async$Jm)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W9(l,a2),$async$Jm)
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
$.an.$1("[doc share lan import] "+A.w(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jm,w)},
a83(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a83=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rS(f,r),$async$a83)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcu().aN(q)],t,s))
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
return A.i($async$a83,w)},
W9(d,e){return B.hUv(d,e)},
hUv(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W9=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cI.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cj(i,a3,d,k,l,o),$async$W9)
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
$.an.$1("[doc share bundle] "+A.w(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$W9,w)},
Od:function Od(d,e){this.a=d
this.b=e},
ce1:function ce1(){},
a2k(d){var x=A.S(d).ax.a===C.J,w=x?D.ai3:D.afC,v=x?D.ajR:C.c,u=x?C.aP:C.T,t=x?C.bK:C.an,s=x?D.ah1:C.aO
return new A.aHY([w,s,v,u,t,x?C.fo:C.bR])},
hFc(d,e){var x=e?C.w.j(0.72):C.aV
return A.cf(null,x,!0,null,new B.h_T(e),d,null,!0,!0,y.N)},
cdH(d,e,f,g,h,i,j,k,l){return new B.W1(e,l,d,f,k,j,g,h,i,null)},
a_h(d,e,f,g,h,i,j){return new B.bfx(g,h,j,e,i,d,f,null)},
h_T:function h_T(d){this.a=d},
a_e:function a_e(d,e){this.c=d
this.a=e},
aAX:function aAX(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dc2:function dc2(d){this.a=d},
dc0:function dc0(d){this.a=d},
dc1:function dc1(d){this.a=d},
bxs:function bxs(){},
W1:function W1(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEZ:function aEZ(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZL:function dZL(d){this.a=d},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d,e){this.a=d
this.b=e},
dYI:function dYI(d,e,f){this.a=d
this.b=e
this.c=f},
dYH:function dYH(d){this.a=d},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e,f){this.a=d
this.b=e
this.c=f},
dYN:function dYN(d){this.a=d},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZA:function dZA(d){this.a=d},
dZ5:function dZ5(d,e,f){this.a=d
this.b=e
this.c=f},
dZ2:function dZ2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYM:function dYM(d){this.a=d},
dZd:function dZd(d){this.a=d},
dZc:function dZc(){},
dYS:function dYS(d){this.a=d},
dZw:function dZw(d,e){this.a=d
this.b=e},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZp:function dZp(d,e){this.a=d
this.b=e},
dZl:function dZl(d){this.a=d},
dZk:function dZk(d){this.a=d},
dZm:function dZm(){},
dZn:function dZn(){},
dZo:function dZo(d,e){this.a=d
this.b=e},
dZq:function dZq(){},
dZr:function dZr(d){this.a=d},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZe:function dZe(d){this.a=d},
dZf:function dZf(d){this.a=d},
dZg:function dZg(d){this.a=d},
dZh:function dZh(d){this.a=d},
dZi:function dZi(d){this.a=d},
dYP:function dYP(){},
dYQ:function dYQ(d){this.a=d},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e,f){this.a=d
this.b=e
this.c=f},
dZ6:function dZ6(d){this.a=d},
dZ7:function dZ7(d,e,f){this.a=d
this.b=e
this.c=f},
dZ0:function dZ0(d,e){this.a=d
this.b=e},
dYX:function dYX(d){this.a=d},
dYU:function dYU(d,e,f){this.a=d
this.b=e
this.c=f},
dYY:function dYY(d){this.a=d},
dYZ:function dYZ(d){this.a=d},
dZ_:function dZ_(){},
dZ1:function dZ1(d,e){this.a=d
this.b=e},
dYV:function dYV(d){this.a=d},
dYT:function dYT(d,e,f){this.a=d
this.b=e
this.c=f},
dYW:function dYW(){},
dZb:function dZb(d){this.a=d},
dZa:function dZa(d,e){this.a=d
this.b=e},
dZv:function dZv(d,e){this.a=d
this.b=e},
dZs:function dZs(d){this.a=d},
dZt:function dZt(d,e){this.a=d
this.b=e},
dZu:function dZu(d){this.a=d},
dZI:function dZI(d){this.a=d},
dZG:function dZG(d){this.a=d},
dZH:function dZH(d){this.a=d},
dZJ:function dZJ(){},
dZK:function dZK(d,e){this.a=d
this.b=e},
dZC:function dZC(d,e){this.a=d
this.b=e},
dZD:function dZD(d,e,f){this.a=d
this.b=e
this.c=f},
dZB:function dZB(d,e,f){this.a=d
this.b=e
this.c=f},
dZE:function dZE(d,e){this.a=d
this.b=e},
dZF:function dZF(d,e){this.a=d
this.b=e},
aAU:function aAU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfw:function bfw(d,e,f){this.c=d
this.d=e
this.a=f},
dbZ:function dbZ(){},
dc_:function dc_(){},
adf:function adf(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcm:function dcm(){},
dcl:function dcl(d){this.a=d},
a_g:function a_g(d,e,f){this.c=d
this.d=e
this.a=f},
aAZ:function aAZ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dci:function dci(d){this.a=d},
dcj:function dcj(d,e,f){this.a=d
this.b=e
this.c=f},
dck:function dck(d,e){this.a=d
this.b=e},
dcg:function dcg(d,e){this.a=d
this.b=e},
dce:function dce(d){this.a=d},
dcc:function dcc(d){this.a=d},
dc9:function dc9(d){this.a=d},
dcf:function dcf(d){this.a=d},
dcb:function dcb(d){this.a=d},
dch:function dch(d){this.a=d},
dcd:function dcd(d){this.a=d},
dca:function dca(d){this.a=d},
a_d:function a_d(d,e,f){this.c=d
this.d=e
this.a=f},
aAW:function aAW(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbW:function dbW(d){this.a=d},
dbV:function dbV(d,e){this.a=d
this.b=e},
dbX:function dbX(d){this.a=d},
dbU:function dbU(d,e){this.a=d
this.b=e},
dbY:function dbY(d){this.a=d},
dbT:function dbT(d,e){this.a=d
this.b=e},
dbP:function dbP(d){this.a=d},
dbQ:function dbQ(d){this.a=d},
dbR:function dbR(d,e){this.a=d
this.b=e},
dbS:function dbS(d){this.a=d},
Qw:function Qw(d,e,f){this.c=d
this.d=e
this.a=f},
aB1:function aB1(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcz:function dcz(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcB:function dcB(d){this.a=d},
dcC:function dcC(d){this.a=d},
dcD:function dcD(d,e){this.a=d
this.b=e},
dcE:function dcE(d){this.a=d},
dcG:function dcG(d){this.a=d},
dcF:function dcF(d){this.a=d},
a_i:function a_i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB_:function aB_(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcv:function dcv(d,e){this.a=d
this.b=e},
dcw:function dcw(d,e){this.a=d
this.b=e},
dcn:function dcn(d,e,f){this.a=d
this.b=e
this.c=f},
dco:function dco(d){this.a=d},
dcp:function dcp(){},
dcu:function dcu(){},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcr:function dcr(d,e){this.a=d
this.b=e},
dcs:function dcs(d,e){this.a=d
this.b=e},
dct:function dct(d,e){this.a=d
this.b=e},
add:function add(d,e){this.c=d
this.a=e},
dbO:function dbO(d){this.a=d},
a_c:function a_c(d){this.a=d},
aAV:function aAV(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_j:function a_j(d,e){this.c=d
this.a=e},
aB0:function aB0(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcy:function dcy(d){this.a=d},
dcx:function dcx(d){this.a=d},
bfx:function bfx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hUx(){var x,w=$.os(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
Of(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Of=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Of)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Of)
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
$.an.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Of,w)},
a84(d){return B.hUy(d)},
hUy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a84=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a84)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$a84)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.an.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a84,w)},
Wb(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Of(),$async$Wb)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a84(s),$async$Wb)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wb,w)},
Wc(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wc)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ce3(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hUx()
t=A.U(u).k("N<1,a8<n,aE>>")
r=A.C(new A.N(u,new B.ce4(s),t),t.k("ak.E"))
x=6
return A.b(B.Of(),$async$Wc)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a84(q),$async$Wc)
case 7:x=8
return A.b(B.a85(r,u,g,s),$async$Wc)
case 8:v=new A.brn(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wc,w)},
aqI(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Of(),$async$aqI)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqI,w)},
ce5(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ce5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Of(),$async$ce5)
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
return A.i($async$ce5,w)},
a85(d,e,f,g){return B.hUz(d,e,f,g)},
hUz(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a85=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqG("media",r,new B.ce2(s,e,g),f,q),$async$a85)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wb(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a85)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wb(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a85)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.an.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wb(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a85)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a85,w)},
Fi(d,e,f){return B.hUA(d,e,f)},
hUA(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fi=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fi)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqI(b3),$async$Fi)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iL,null,g),$async$Fi)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqI(b3),$async$Fi)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Of(),$async$Fi)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
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
b0=A.pl(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abt(a8.a,b0,"media",a8.d,a9).Dd(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b0K(k,n,o,s,b7),$async$Fi)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.an.$1("[doc share video cloud] download "+A.w(o)+": "+A.w(i))
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
a8=A.pl(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abt(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fi)
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
a0=A.dO(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a84(e),$async$Fi)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fi,w)},
ce3:function ce3(){},
ce4:function ce4(d){this.a=d},
ce2:function ce2(d,e,f){this.a=d
this.b=e
this.c=f},
aSq(){var x=0,w=A.j(y.H),v,u
var $async$aSq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i4E=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aSq)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aSq)
case 3:u=$.hdJ
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aSq)
case 4:$.hdJ=$.idO=$.idP=null
return A.h(null,w)}})
return A.i($async$aSq,w)},
fCR(d){var x=0,w=A.j(y.H),v,u
var $async$fCR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9a){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fCS(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ic,new B.fCT()),$async$fCR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fCR,w)},
idM(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hUh(x):x},
hdN(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqK(u)
x=1
break}v=B.h8k(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdN,w)},
hdM(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqL(u)
x=1
break}v=B.h8k(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdM,w)},
fWk(d){var x=0,w=A.j(y.T),v
var $async$fWk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqL(d),$async$fWk)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWk,w)},
bDK(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hdM(d),$async$bDK)
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
return A.i($async$bDK,w)},
fqx(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fqx=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.W5(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cj(d.apS(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqx,w)},
Hd(d,e,f){return B.ige(d,e,f)},
ige(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hd=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hdN(a1),$async$Hd)
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
return A.b($.hHc().aGf(D.dD2,null),$async$Hd)
case 4:l=d.hdJ=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azL(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fDs(f,k,new B.fDt(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8G(0,new B.Yj(r,"offer")),$async$Hd)
case 5:d=l
x=7
return A.b(l.ami(0),$async$Hd)
case 7:x=6
return A.b(d.a8y(0,a4),$async$Hd)
case 6:x=8
return A.b(B.fCR(l),$async$Hd)
case 8:x=9
return A.b(l.aqE(),$async$Hd)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.idM(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqM(m,h),$async$Hd)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hpe(h)
case 11:v=new A.bqD(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hd,w)},
fCS:function fCS(d){this.a=d},
fCT:function fCT(){},
fDt:function fDt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDs:function fDs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDr:function fDr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iij(d){switch(d){case"new":return D.eyI
case"checking":return D.eyJ
case"connected":return D.eyL
case"completed":return D.eyK
case"failed":return D.eyN
case"disconnected":return D.eyO
case"closed":return D.aQO
case"count":return D.eyM}return D.aQO},
iik(d){switch(d){case"new":return D.aQP
case"gathering":return D.eyP
case"complete":return D.a9a}return D.aQP},
itl(d){switch(d){case"stable":return D.eyQ
case"have-local-offer":return D.eyR
case"have-local-pranswer":return D.eyT
case"have-remote-offer":return D.eyS
case"have-remote-pranswer":return D.eyU
case"closed":return D.aQV}return D.aQV},
iru(d){switch(d){case"new":return D.aQS
case"connecting":return D.aQT
case"connected":return D.aQU
case"closed":return D.a9b
case"disconnected":return D.aQR
case"failed":return D.aQQ}return D.a9b},
aap:function aap(d,e){this.a=d
this.b=e},
Ph:function Ph(d,e){this.a=d
this.b=e},
Yi:function Yi(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
crI:function crI(){},
ha5(d){var x=new B.FL()
x.a=d
x.b=!0
return x},
FL:function FL(){this.b=this.a=$},
aao:function aao(){},
avh:function avh(){},
Yj:function Yj(d,e){this.a=d
this.b=e},
h8g(){var x=0,w=A.j(y.H)
var $async$h8g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8g,w)},
h8j(d,e,f){var x=0,w=A.j(y.T),v
var $async$h8j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n6))){v=null
x=1
break}v=B.fWB(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8j,w)},
hpe(d){var x,w=F.af0.a5m(C.dS.aN(d),null)
if(w.length===0){x=C.dS.aN(d)
return C.cP.gcu().aN(x)}return C.cP.gcu().aN(w)},
hUg(d){var x,w,v=C.cI.aN(d)
try{x=C.ca.cI(0,F.af_.bfV(v,!1))
return x}catch(w){x=C.ca.cI(0,v)
return x}},
h8k(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hUg(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cI(0,C.cI.aN(x))
return v}catch(u){return x}}return null},
hUh(d){var x,w,v,u,t,s=A.a([],y.s)
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
hUi(){var x,w=$.os(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0Q(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b0Q)
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
$.an.$1("[doc share qr stash] load "+A.w(p)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b0Q,w)},
cdM(d,e){return B.hUj(d,e)},
hUj(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cM,null),$async$cdM)
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
$.an.$1("[doc share qr stash] save "+A.w(p)+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdM,w)},
b0T(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0Q(d),$async$b0T)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0T,w)},
b0S(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hUi()
r=C.a.i(f)
t=C.dS.aN(s)
x=3
return A.b(B.cdM(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0S)
case 3:if(!h){v=null
x=1
break}v=new A.a1k("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0S,w)},
b0R(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0Q(o),$async$b0R)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cI(0,C.cI.aN(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.an.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0R,w)},
cdN(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEH("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cM),$async$cdN)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.an.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdN,w)},
b0U(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ji(),$async$b0U)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0U,w)},
aqD(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqD)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aS(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0U(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqD,w)},
aqB(d,e){var x=0,w=A.j(y.H)
var $async$aqB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqB)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqB)
case 2:return A.h(null,w)}})
return A.i($async$aqB,w)},
a7X(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7X=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7X)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7X)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a7W(s),$async$a7X)
case 5:x=6
return A.b(B.aqB(f,u),$async$a7X)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
a7Y(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7Y=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7Y)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7Y)
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
if(o!==t&&s.al(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqB(g,q),$async$a7Y)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7W(u),$async$a7Y)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Y,w)},
a7Z(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7Z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7Z)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ji(),$async$a7Z)
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
s=B.b0N(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7Z)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a7Z)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Z,w)},
cdO(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdO)
case 7:s=f
p=A.w(n)
r=A.aS(J.t(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cdO,w)},
Jj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdO(d),$async$Jj)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0U(t),$async$Jj)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqC(d),$async$Jj)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0N(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqC(d),$async$Jj)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
aqC(d){var x=0,w=A.j(y.H)
var $async$aqC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqC)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqC)
case 2:return A.h(null,w)}})
return A.i($async$aqC,w)},
b0V(){var x,w=$.os(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a8_(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h8l(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdR(d){return B.hUl(d)},
hUl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8_(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cdR)
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
$.an.$1("[doc share short code] load "+d+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cdR,w)},
aqF(d,e){return B.hUm(d,e)},
hUm(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8_(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cM,null),$async$aqF)
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
$.an.$1("[doc share short code] save "+d+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqF,w)},
cdT(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8_(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqF(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdT,w)},
cdS(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8_(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqF(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdS,w)},
cdU(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdU=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8_(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqF(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdU,w)},
cdV(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h8l(d)){v=null
x=1
break}x=3
return A.b(B.cdR(d),$async$cdV)
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
return A.i($async$cdV,w)},
a86(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a86=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a86)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a86)
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
$.an.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a86,w)},
aqJ(d){return B.hUB(d)},
hUB(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqJ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$aqJ)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.an.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqJ,w)},
aqK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqK)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a86(),$async$aqK)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cI(0,C.cI.aN(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqJ(s),$async$aqK)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.an.$1("[doc share webrtc stash] offer decode: "+A.w(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqK,w)},
aqM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aqM)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a86(),$async$aqM)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a3(s,r,q),r,q)
r=C.dS.aN(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqJ(u),$async$aqM)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqM,w)},
aqL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqL)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a86(),$async$aqL)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cI(0,C.cI.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqL,w)},
apE(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.ql)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apE)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hh),$async$apE)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vZ(o))
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
return A.i($async$apE,w)},
ioV(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fUC(d){return B.ioX(d)},
ioX(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fUC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Lp(d,3600),$async$fUC)
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
$.an.$1("[supabase signed url] "+d+": "+A.w(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fUC,w)},
DE(d,e,f,g,h,i){var x=null
return B.ioU(d,e,f,g,h,i)},
ioU(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hph(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h8n(r),$async$DE)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fUC(o),$async$DE)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a80(r),$async$DE)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aUp)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MA(A.a([],g))
x=15
return A.b(d.f8(0,A.aw6("GET",A.cD(n,0,null))).dh(0,C.GC),$async$DE)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a80(r),$async$DE)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L9(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DE)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0X(r,k),$async$DE)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DE)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.W5(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a80(r),$async$DE)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DE,w)},
aS3(d){return B.ioW(d)},
ioW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aS3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aS3)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.an.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aS3,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[159]
O=c[47]
F=c[264]
I=c[150]
P=c[234]
E=c[227]
G=c[94]
Q=c[197]
R=c[151]
S=c[232]
K=c[269]
L=c[277]
B=a.updateHolder(c[22],B)
D=c[275]
T=c[196]
M=c[217]
U=c[73]
V=c[258]
W=c[79]
X=c[62]
N=c[93]
Y=c[276]
B.crJ.prototype={
aGf(d,e){return this.cPV(d,e)},
cPV(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cv(t)))
t=J.k(u)
v=B.hZe(C.cP.gcu().aN(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGf,w)}}
B.b64.prototype={
bCa(d){var x=this,w=x.w
w.onclose=A.hp(new B.crE(x))
w.onopen=A.hp(new B.crF(x))
w.onmessage=A.hp(new B.crG(x))
w.onbufferedamountlow=A.hp(new B.crH(x))},
gd6(d){return this.x},
aiw(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FL()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.ha5(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiw)
case 8:v=t.ha5(s.aoO(f,0,null))
x=1
break
case 7:case 4:v=B.ha5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiw,w)}}
B.b65.prototype={
bCb(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crK(x)))
w.addEventListener("icecandidate",A.hp(new B.crL(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crM(x)))
w.onicegatheringstatechange=A.hp(new B.crN(x))
w.addEventListener("signalingstatechange",A.hp(new B.crO(x)))
if(!$.hhJ())w.addEventListener("connectionstatechange",A.hp(new B.crP(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crQ(x)))
w.addEventListener("track",A.hp(new B.crR(x)))},
ami(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ami=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ki(A.cv(A.T(y.N,y.z)))),y.aQ),$async$ami)
case 3:t=f
v=new B.Yj(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ami,w)},
a8y(d,e){return this.br6(0,e)},
br6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8y)
case 2:return A.h(null,w)}})
return A.i($async$a8y,w)},
a8G(d,e){return this.brr(0,e)},
brr(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8G)
case 2:return A.h(null,w)}})
return A.i($async$a8G,w)},
aqE(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yj(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqE,w)},
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
B.ade.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_f.prototype={
S(){return new B.aAY()},
gd1(){return this.c}}
B.aAY.prototype={
Y(){this.a4()
this.af5()},
af5(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0O(u.e,u.c),$async$af5)
case 2:t=e
if(v.c!=null)v.m(new B.dc6(v,t))
return A.h(null,w)}})
return A.i($async$af5,w)},
QW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqy(t.e,t.c,!1),$async$QW)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fjF)
x=1
break}x=4
return A.b(B.a7V(u.a.c,"individual"),$async$QW)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6W(A.ec(new B.dc3(u),!1,null,y.H)),$async$QW)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QW,w)},
JK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fAJ(o),$async$JK)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7Z(o.e,r,s,q),$async$JK)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fgG)
x=1
break}x=5
return A.b(B.a7V(u.a.c,"member"),$async$JK)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6W(A.ec(new B.dc5(u),!1,null,y.H)),$async$JK)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JK,w)},
yE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7U(t.e,o,t.f,t.r,t.w,s),$async$yE)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7V(u.a.c,"org_owner"),$async$yE)
case 4:x=5
return A.b(B.aqD(u.a.c),$async$yE)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fBd(o),$async$yE)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7X(s,t,o,q.c),$async$yE)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fgD)
x=1
break}x=10
return A.b(B.aqD(u.a.c),$async$yE)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6W(A.ec(new B.dc4(u),!1,null,y.H)),$async$yE)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yE,w)},
B(d){var x,w,v,u=this,t=null,s=A.S(d).ax.a===C.J,r=s?C.jB:C.qk,q=B.h8i(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.h5,24)],y.V)
v=y.p
w=A.q(t,A.x(A.a([A.q(t,D.fDB,C.f,t,t,new A.p(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.hc,t,t,t),C.aB,D.fXz,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.p(t,t,t,p,w,D.c99,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lZ(new B.dc8(),t),C.U,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.T,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aT:C.an,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adH(C.f5,C.aDm,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcj4(),t),C.af],v))
p.push(new B.adH(C.ps,C.a4Q,"Team Member","Sign in with your organization access code + password",u.gcjW(),t))
p.push(C.af)
p.push(new B.adH(C.apq,C.a6s,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcjr(),t))
return A.c4(t,r,A.bm(!0,A.cd(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amv,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adH.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a9(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nf,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zb,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDB.prototype={}
B.aGJ.prototype={}
B.jC.prototype={
mI(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garl(){var x=this.d
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
bfo(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jC(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOq(d){return this.bfo(null,d)},
aFZ(d){return this.bfo(d,null)}}
B.W_.prototype={
S(){return new B.aEX(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEX.prototype={
Y(){this.a4()
this.af6()},
af6(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ci(u.a.c),$async$af6)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYE(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af6,w)},
af7(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fw(s)),$async$af7)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fkz)
case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
a_x(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apE(s.d,4),$async$a_x)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tp(r,"ngmy_my_code_"+m+".png"),$async$a_x)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_x,w)},
aiY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ab2("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiY,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jB:C.qk,m=o?C.c:C.T,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m2
else if(q.e==null)x=A.as(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.L(C.aF.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.U,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a5h,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a9(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.am3,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.nc,w,C.l2,new A.em(A.q(p,A.qd(p,p,!1,B.hUc(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.D8,C.VU,q.gcbx(),p),1),C.au,A.E(A.dh(C.zA,C.abu,q.gcby(),A.bp(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3B,D.fT7,q.gcyK(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.Og,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.W3.prototype={
S(){return new B.aF_(new A.au(C.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aF_.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jh(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a3()},
a_y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jh(u.d.a.a)
if(t==null){u.m(new B.dZN(u))
x=1
break}u.m(new B.dZO(u))
s=u.a
r=s.c
x=3
return A.b(B.a7T(s.d,new B.dZP(u),t,r),$async$a_y)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZQ(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_y,w)},
a2N(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZR(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rS(r.a.c,q),$async$a2N)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZS(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiK(p,m,l,j,k),$async$a2N)
case 8:o=e
if(r.c!=null)r.m(new B.dZT(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZU(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZV(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2N,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ai3:D.afC,h=j?D.ajR:C.c,g=j?C.aP:C.T,f=j?C.bK:C.an,e=j?D.ah1:C.aO
i=[i,e,h,g,f,j?C.fo:C.bR]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bXu,C.f,k,k,new A.p(k,k,k,A.m(16),k,new A.a9(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fs,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a5h,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uV(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkZ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Ob,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZW(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.L(i[1],C.r,1)
m=J.Md(l.a.d,4)
m=A.C(new A.N(m,new B.dZX(x,new A.aHY(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lg,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.U,e,C.U,q,C.d8,p,C.U,A.q(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.m(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.ffa)
else q.push(A.X(C.lO,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.n),C.iK,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bF4,k,k,C.ah),1)
u=l.f?k:l.gcyL()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a3B,D.fUe,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbz()
t=A.bp(C.aF,k,k,0,C.c,k,C.nD,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c4(g,h,new A.am(C.a0,k,C.ab,C.t,A.a([f,v,A.bm(!0,A.lC(new B.dZY(),A.x(A.a([e,new A.D(D.bEz,A.x(A.a([s,C.U,i,C.af,A.bJ(l.f?C.tB:D.fSr,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cw,C.a_P,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkZ.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bB,v.length),C.aR)}}
B.W0.prototype={
S(){return new B.aEY()}}
B.aEY.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aR),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aR),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.aw,v)},
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
w.a3()},
af8(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af8=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dYF(r))
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
return A.b(B.a7Y(p,m,n,o,C.a.i(l).length===0?null:l),$async$af8)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fka)
s=[1]
x=4
break}p.L(y.q).f.U(D.fiO)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dYG(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af8,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jB:C.qk,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fKN,s,s,s,1,s,!0),p=A.q(s,D.bwE,C.f,s,s,new A.p(s,s,s,A.m(22),s,E.I5,C.n),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3H,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3C,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c3S,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbA()
u=A.bp(C.aF,s,s,s,s,C.h6,s,s,s,s,s,s)
return A.c4(q,r,A.cd(A.x(A.a([p,C.d8,o,C.af,x,C.af,w,C.nc,A.bJ(t.r?C.tB:C.aXg,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.acW.prototype={}
B.bxQ.prototype={
a5D(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.apS()))
x=3
return A.b(B.S8(t,s),$async$a5D)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5D,w)},
gd1(){return this.a}}
B.Od.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_e.prototype={
S(){return new B.aAX(new A.au(C.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aAX.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dc2(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a3()},
cbG(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2k(d),u=x.a.c,t=u?C.iE:v.a[2],s=u?C.c:v.a[3],r=u?C.aT:v.a[4],q=u?C.jB:v.a[0],p=A.m(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.h5,32)],n),l=A.q(w,T.as5,C.f,w,w,new A.p(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cA,16)],n),C.asU,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uV(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxs()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GQ,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b5j),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dc0(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nZ,new B.dc1(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.m(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cL,12)],n)
g=y.p
return A.eP(w,C.L,new A.cP(Q.LS,A.c2(new A.D(C.yQ,A.x(A.a([l,C.aQ,k,C.U,j,C.dY,i,C.dY,A.A(A.a([f,C.au,A.E(A.c2(A.aI(!1,C.a3,!0,w,A.aP(!1,A.m(14),!0,D.es4,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbF(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Q8,C.n),C.bj),2)],g),C.l,w,C.e,C.i,0,w,w)],g),C.l,w,C.e,C.Q,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bj),w),w,w,w,C.Oj,C.d7,w,w,w)}}
B.bxs.prototype={
oY(d,e){return e.amc(e.a.toUpperCase())}}
B.W1.prototype={
S(){return new B.aEZ(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEZ.prototype={
Y(){var x=this
x.a4()
x.um()
x.w=A.df(C.jE,new B.dZL(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wa()
this.a3()},
a1F(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$a1F)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bh(u.a.c),$async$a1F)
case 4:u.m(new s.dZ8(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1F,w)},
um(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$um=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$um)
case 3:t=e
x=4
return A.b(B.Bh(u.a.c),$async$um)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZ9(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O9(u.d)
B.Ci(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$um,w)},
O9(d){return this.bGd(d)},
bGd(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a82(r,u.a.c),$async$O9)
case 8:p=f
if(u.c==null){x=1
break}new B.dYI(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n6))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W8(r,u.a.c),$async$O9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bh(u.a.c),$async$O9)
case 12:u.m(new o.dYJ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O9,w)},
Oy(d){return this.bMx(d)},
bMx(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a82(d,u.a.c),$async$Oy)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dYO(u,d,t))
x=6
return A.b(A.fF(new A.fw(t)),$async$Oy)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fw(r.toUpperCase())),$async$Oy)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b4(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
un(d,e){return this.cJF(d,e)},
cJF(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$un=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZz(r,e))
u=3
x=6
return A.b(d.$0(),$async$un)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZA(r))
$.eX.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$un,w)},
gaXK(){var x=this.a
return x.f||x.r||x.w},
ID(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$ID=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXK()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdK(s,n,r,q,o,t),$async$ID)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fO_(o,u.a.c),$async$ID)
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
return A.b(B.DG(s,o,r,q,n,t),$async$ID)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ID,w)},
a0J(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqD(u.a.c),$async$a0J)
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
return A.b(A.a6(t,!1).cd(A.ec(new B.dZ5(u,r,q),!1,null,y.H)),$async$a0J)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0J,w)},
a1P(d){return this.csi(d)},
csh(){return this.a1P(1)},
csi(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXK()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqA(u.a.c),$async$a1P)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1P,w)},
acZ(d,e,f){return this.c2x(d,e,f)},
c2x(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.un(new B.dZ2(u,d,null,e,f),"Uploading\u2026"),$async$acZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acZ,w)},
bGm(){B.hEl(!1,new B.dYM(this))
return},
cxl(){this.m(new B.dZd(this))},
aAu(){var x=0,w=A.j(y.H),v=this
var $async$aAu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGm()
return A.h(null,w)}})
return A.i($async$aAu,w)},
acV(){var x=0,w=A.j(y.H),v=this
var $async$acV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.un(new B.dYS(v),"Importing\u2026"),$async$acV)
case 2:return A.h(null,w)}})
return A.i($async$acV,w)},
T1(d){return this.cIZ(d)},
cIZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.ec(new B.dZw(u,d),!1,null,y.H)),$async$T1)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S8)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.ec(new B.dZx(u,d),!1,null,y.H)),$async$T1)
case 8:x=1
break
case 7:x=u.c3f(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.ec(new B.dZy(u,d),!1,null,y.H)),$async$T1)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T1,w)},
c3f(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cSl,C.a.b2(x,w+1).toLowerCase())},
agG(d){return this.cj8(d)},
cj8(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.ec(new B.dZ3(u,d),!1,null,y.H)),$async$agG)
case 5:x=1
break
case 4:u.m(new B.dZ4(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agG,w)},
Sm(d){return this.cAe(d)},
cAe(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pw(t,s.c,s.f),$async$Sm)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.un(new B.dZp(u,d),"Preparing QR\u2026"),$async$Sm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sm,w)},
ajn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZq(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZr(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sm(r),$async$ajn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajn,w)},
ajg(d){return this.czM(d)},
czM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2k(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZj(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajg)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T1(d)
break
case"qr":u.Sm(A.a([d],y.r))
break
case"send_my_code":u.cjL(A.a([d],y.r))
break
case"save":u.aiE(d)
break
case"delete":u.Ju(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajg,w)},
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYP(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYQ(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pw(t,s.c,s.f),$async$Yo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.un(new B.dYR(u,r),"Preparing file\u2026"),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
ahL(d){return this.cqD(d)},
cqD(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hFc(d,!1),$async$ahL)
case 3:s=f
r=s==null
q=B.a8_(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahL,w)},
agM(){var x=0,w=A.j(y.H),v=this,u
var $async$agM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fVI(u,v.a.c),$async$agM)
case 2:return A.h(null,w)}})
return A.i($async$agM,w)},
bGl(){B.hEl(!1,new B.dYL(this,null))
return},
JJ(d,e){return this.cjM(d,e)},
b3d(d){return this.JJ(null,d)},
cjL(d){return this.JJ(d,null)},
cjM(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZ6(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xO.cq().aoY(!0,C.a1D,!1),$async$JJ)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.un(new B.dZ7(l,s,r),"Preparing\u2026"),$async$JJ)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.an.$1("[doc share send my code pick] "+A.w(q))
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
return A.b(B.bFR(p,l,e,s.a.c),$async$JJ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JJ,w)},
IT(d){return this.c2k(d)},
c2k(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hUb(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3d(t),$async$IT)
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
return A.b(u.un(new B.dZ0(u,d),"Receiving video\u2026"),$async$IT)
case 11:x=1
break
case 10:x=12
return A.b(u.un(new B.dZ1(u,d),"Receiving\u2026"),$async$IT)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IT,w)},
EM(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DA()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahL(t),$async$EM)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IT(s),$async$EM)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.ec(new B.dZb(u),!1,null,y.N)),$async$EM)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.um(),$async$EM)
case 10:x=1
break
case 9:x=11
return A.b(u.IT(C.a.i(r)),$async$EM)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EM,w)},
aiE(d){return this.cvU(d)},
cvU(d){var x=0,w=A.j(y.H),v=this
var $async$aiE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.un(new B.dZa(v,d),"Saving\u2026"),$async$aiE)
case 2:return A.h(null,w)}})
return A.i($async$aiE,w)},
Ju(d){return this.bOS(d)},
bOS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ju=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ju)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdN(t),$async$Ju)
case 6:case 5:s=d.a
x=7
return A.b(B.Fh(u.a.c,s),$async$Ju)
case 7:u.r.W(0,s)
x=8
return A.b(u.um(),$async$Ju)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ju,w)},
ajt(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2k(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZv(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajt)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agM()
break
case"import":u.acV()
break}case 1:return A.h(v,w)}})
return A.i($async$ajt,w)},
cbD(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n6))return C.qR
if(C.a.a0(x,"image/")||d.mI(D.S8))return C.uN
if(C.a.q(x,"pdf"))return E.PD
return D.apS},
B(d){var x,w,v=this,u=null,t=B.a2k(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HZ,u,u,u,new B.dZG(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bY5,u,u,u,v.e?u:v.gcjs(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxk()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bSh:E.aqh,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3y,u,u,u,v.e?u:v.gcbE(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oG,u,u,u,v.e?u:v.gb4i(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZR,u,u,u,v.e?u:new B.dZH(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.dZI(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.S(d).ax.a===C.J?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kp(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAU(C.jK,s,!0,t,w?u:v.gcAf(),u),1)
x.push(new A.D(D.bDj,A.lC(new B.dZJ(),A.A(A.a([s,C.au,A.E(new B.aAU(C.uO,"Export",!1,t,w?u:v.gbSL(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cw,C.iv,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfw(t,v.e?u:v.gb4i(),u)
else s=A.kq(!0,u,u,new B.dZK(v,t),s,u,D.bDb,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.am(C.a0,u,C.ab,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAU.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aF,t,t,0,C.c,t,C.wi,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wi,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bfw.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lC(new B.dbZ(),new A.D(E.a0J,A.x(A.a([A.lC(new B.dc_(),A.q(x,A.X(C.zc,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a9(C.aA,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e_,C.hG,x,x,new A.br(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dY,A.dh(C.oG,D.fXT,this.d,A.bp(C.aF,x,x,x,C.c,x,C.Oh,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.Q,0,C.p),x),C.cw,C.C7,x,x,new A.br(0,1,w),s),x,x,x)}}
B.adf.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aF.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mI(D.n6))p=D.ds7
else{p=C.a.a0(p,"image/")||i.mI(D.S8)
n=y.O
p=p?A.a([C.cG,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a9(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garl()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n6))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.ax,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fK,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cf))
if(!(!o||i.mI(D.n6)))l.push(A.h6_(C.aF,!1,j,j,j,!1,j,j,new B.dcl(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.X(C.oy,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cf))
return A.lC(new B.dcm(),new A.D(C.el,A.aI(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0a,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bI("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_g.prototype={
S(){return new B.aAZ()},
gd1(){return this.c}}
B.aAZ.prototype={
Y(){this.a4()
this.yu()},
t(){B.hUq(this.e)
this.a3()},
yu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rS(o.c,o.d),$async$yu)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hUt(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hUs(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dci(s))
x=1
break}s.m(new B.dcj(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dck(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yu,w)},
a2M(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rS(t.c,t.d),$async$a2M)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fhc)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiK(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2M)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2M,w)},
c2d(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dcg(w,t),C.hf,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dch(w),C.hf,C.dB,!0,v,!1,v,v)
else return C.bL
return A.v0(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2k(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D9,u,u,u,v.gb84(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fu
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dh(C.D9,D.fG0,v.gb84(),A.bp(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.c2d()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_d.prototype={
S(){return new B.aAW(A.ajD(),C.bE,C.bE)},
gd1(){return this.c}}
B.aAW.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dbW(v))
x.gcXx().iC(new B.dbX(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bbu
x.iC(new B.dbY(v))
v.yu()},
yu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rS(p.c,p.d),$async$yu)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbP(s))
x=1
break}x=8
return A.b(s.d.vq(0,new A.a4s(r,s.a.d.c)),$async$yu)
case 8:if(s.c==null){x=1
break}s.m(new B.dbQ(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbR(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yu,w)},
a_z(){var x=0,w=A.j(y.H),v=this,u
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_z)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_z)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_z,w)},
aVy(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2k(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fu
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bTh,C.f,o,o,new A.p(o,o,o,A.m(24),o,L.Q8,C.n),o,88,o,o,o,o,o,88)
t=A.kW(C.aF,o,o,m,0,new B.dbS(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVy(p.w)+" / "+p.aVy(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aF,o,o,o,o,D.fdC,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uQ:C.hx,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.d8,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbH(),s)],y.p),C.l,o,C.e,C.Q,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qD,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qw.prototype={
S(){return new B.aB1()},
gd1(){return this.c}}
B.aB1.prototype={
Y(){this.a4()
this.Qe()},
Qe(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h8j(o.c,o.d,new B.dcz(s)),$async$Qe)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcA(s))
x=1
break}s.e=r
q=O.ih9(r)
if(q==null){s.m(new B.dcB(s))
x=1
break}s.d=q
q.aW(0,s.gb30())
x=8
return A.b(q.iX(0).dh(0,C.rT),$async$Qe)
case 8:if(s.c==null){x=1
break}s.m(new B.dcC(s))
x=9
return A.b(q.qp(0),$async$Qe)
case 9:q.tY(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcD(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qe,w)},
chH(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcE(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dv(0,x.gb30())
w=x.d
if(w!=null)w.t()
B.irN(x.e)
x.a3()},
afb(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0W(u.c,u.d),$async$afb)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2k(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aG(t,t,t,t,C.oF,t,t,t,u.gcbB(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fu
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aj6(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fH(x,new A.am(C.A,t,C.ab,C.t,A.a([new A.AN(s,t),A.aA(t,A.zl(A.q(t,A.X(q?I.uQ:C.hx,C.c,t,t,t,48),C.f,t,t,new A.p(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcG(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_i.prototype={
S(){return new B.aB_(new A.cw(null,y.A))}}
B.aB_.prototype={
gcJm(){var x,w,v=this.a
if(v.e!==D.Tt)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIX(){var x,w,v=this.a
if(v.e!==D.Af)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJm()
if(x!=null){v.Rm(x)
v.e=A.df(R.GF,new B.dcv(v,x))}w=v.gcIX()
if(w!=null){v.Rl(w)
v.f=A.df(C.fI,new B.dcw(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rl(d){return this.coQ(d)},
coQ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqI(d),$async$Rl)
case 3:t=f
x=4
return A.b(B.ce5(d),$async$Rl)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcn(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
Rm(d){return this.coR(d)},
coR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fWk(d),$async$Rm)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDK(t),$async$Rm)
case 4:if(u.c==null){x=1
break}u.m(new B.dco(u))
u.c.L(y.q).f.U(D.aU0)
case 1:return A.h(v,w)}})
return A.i($async$Rm,w)},
gc7s(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbC(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DA()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fkk)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.ec(new B.dcp(),!1,null,y.N)),$async$a2y)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDK(s),$async$a2y)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aU0)
case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
aaN(d){return this.bMy(d)},
bMy(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fw(C.d.aO(t,", "))),$async$aaN)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b4(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaN,w)},
af9(d){return this.bMg(d)},
bMg(d){var x=0,w=A.j(y.H),v=this
var $async$af9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fw(v.a.c)),$async$af9)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fhG)
return A.h(null,w)}})
return A.i($async$af9,w)},
a2s(d){return this.cvW(d)},
cvW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apE(s.d,4),$async$a2s)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tp(r,"ngmy_doc_share_qr.png"),$async$a2s)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.U(A.b4(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2s,w)},
gaZ0(){var x,w=this.a
if(w.e!==D.J8)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaK(d){return this.bMr(d)},
bMr(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ0()
if(t==null){x=1
break}x=3
return A.b(A.fF(new A.fw(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaK)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fjk)
case 1:return A.h(v,w)}})
return A.i($async$aaK,w)},
afa(){var x=0,w=A.j(y.H),v=this,u
var $async$afa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wa(),$async$afa)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afa,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2k(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aC(h,0,44)+"\u2026"
i=i.e
i=i!==D.J8&&i!==D.Tt&&i!==D.Af
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J8||t===D.Tt||t===D.Af?l:A.aG(l,l,l,l,C.lo,l,l,l,m.gb12(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.U,A.qd(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7s(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J8){t=C.aF.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.U,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gcbC(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2K,D.fPC,new B.dcq(m,d),l)],p))}if(m.a.e===D.J8&&m.gaZ0()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c_c,D.fMb,new B.dcr(m,d),l)],p))
if(m.a.e===D.Af){x=(m.w?C.dI:C.aF).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.U,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Tt){x=(m.r?C.dI:C.aF).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.U,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.af,A.dh(D.bVK,D.fSN,m.gcwi(),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oM(i,A.c4(v,w,new A.D(C.ad,A.x(A.a([A.E(A.q(l,A.x(q,C.l,l,C.bb,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D8,C.VU,new B.dcs(m,d),l),1),C.au,A.E(A.dh(C.zA,C.abu,new B.dct(m,d),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.U,new A.a5(1/0,l,A.bJ(C.AT,l,m.gb12(),A.bp(C.aN,l,l,l,l,C.h6,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dcu(),y.C)}}
B.add.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cd(A.x(A.a([w,C.aQ,A.q(x,A.qd(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.AU,x,new B.dbO(d),x)],u),x,x,C.nn,v,x,x,x,x,D.fF0,x)}}
B.a_c.prototype={
S(){return new B.aAV(A.zW(C.yv,C.o4,C.v2))}}
B.aAV.prototype={
t(){this.d.t()
this.a3()},
az1(d){var x,w,v,u,t
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
return A.c4(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fMJ,x,x,x,1,x,!0),C.w,A.zV(this.d,C.c_,this.gaz0()),x,!1,!1,x,x)}}
B.a_j.prototype={
S(){return new B.aB0(A.zW(C.yv,C.o4,C.v2))},
gd1(){return this.c}}
B.aB0.prototype={
c3h(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah8(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MG("text/plain"),$async$ah8)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fke)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah8,w)},
abB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hFc(p,!0),$async$abB)
case 3:t=e
p=t==null
s=B.a8_(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fgN)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abB,w)},
t(){this.d.t()
this.a3()},
az1(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3h(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.arb,v,v,v,w.gbSe(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3F,v,v,v,w.gcmb(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uK:P.Pm,v,v,v,v,v),v,v,v,new B.dcy(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fTK,v,v,v,1,v,!0)
u=A.zV(w.d,C.c_,w.gaz0())
x=A.m(20)
return A.c4(t,C.w,new A.am(C.a0,v,C.ab,C.t,A.a([u,A.as(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eyn],s),v),v,!1,!1,v,v)}}
B.bfx.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ph
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.m(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.ph:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0Q,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aap.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Ph.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yi.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pg.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FM.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crI.prototype={}
B.FL.prototype={}
B.aao.prototype={}
B.avh.prototype={}
B.Yj.prototype={}
var z=a.updateTypes(["aB<~>()","P(jC)","n(jC)","W1(Z)","~()","a_f(Z)","H(H,jC)","Qw(Z)","~(mi)","ct(FL)","aB<jC?>(@)","W_(Z)","W3(Z)","D(jC)","jC(@)","a8<n,@>(jC)","a_e(Z)","W0(Z)","a_g(Z)","a_d(Z)","a_i(Z)","add(Z)","ai<jC>()","a_j(Z)","adf(Z,H)","a_c(Z)","a8<n,aE>(jC)","ct(Yi)","ct(aao)","aB<ct>(FL)"])
B.crE.prototype={
$1(d){var x=this.a
x.x=D.aQN
x.y.J(0,D.aQN)},
$S:74}
B.crF.prototype={
$1(d){var x=this.a
x.x=D.aQM
x.y.J(0,D.aQM)},
$S:74}
B.crG.prototype={
$1(d){var x=this.a
x.aiw(A.ahw(d.data)).bG(new B.crD(x),y.b)},
$S:74}
B.crD.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crH.prototype={
$1(d){},
$S:74}
B.crK.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hZd(d.channel))},
$S:16}
B.crL.prototype={
$1(d){},
$S:16}
B.crM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iij(w.iceConnectionState)
x.cx=w
if($.hhJ())switch(w.a){case 0:x.cy=D.aQS
break
case 1:x.cy=D.aQT
break
case 3:x.cy=D.aQU
break
case 5:x.cy=D.aQQ
break
case 6:x.cy=D.aQR
break
case 7:x.cy=D.a9b
break
default:break}},
$S:108}
B.crN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iik(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.crO.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.itl(w.signalingState)},
$S:108}
B.crP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iru(w.connectionState)},
$S:108}
B.crQ.prototype={
$1(d){},
$S:108}
B.crR.prototype={
$1(d){},
$S:16}
B.fwc.prototype={
$1(d){var x=y.F.a(new A.r7([],[]).oL(d.target.result,!1)),w=C.yw.q(x.objectStoreNames,"blobs")
if(!w)C.ys.Ln(x,"blobs")},
$S:179}
B.fVw.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wR.fq(this.b)
$.eX.mC()
this.c.$1(d)},
$S:467}
B.fVy.prototype={
$1(d){return this.a.$1(B.i7E(this.b,this.c))},
$S:28}
B.fVx.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:28}
B.fVv.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fVL.prototype={
$1(d){var x=this
return B.hu8(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fVM.prototype={
$1(d){var x=this
return B.hu8(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyQ.prototype={
$1(d){var x=this
return B.cdH(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dc6.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dc3.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdH(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dc5.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdH(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dc4.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdH(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dc8.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aG(x,x,x,x,D.bUl,x,x,x,new B.dc7(d),x,x,x,x,x,x),A.E(A.Fx(D.RS,!0,x,C.a2G,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.RS,x,g,C.amQ,0,e,f)},
$C:"$4",
$R:4,
$S:449}
B.dc7.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAM.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eQ,y.o).w,t=this.a,s=t?C.iE:C.c,r=A.m(28),q=A.q(v,D.bwY,C.f,v,v,D.b6Y,v,v,v,v,D.amG,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYG,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GV,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arr,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dn,new B.fAK(d),v),1),C.au,A.E(A.bJ(D.fLb,v,new B.fAL(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.Q,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GI,v,v,v,v),v)},
$S:60}
B.fAK.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAL.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fhX)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDB(v,x))},
$S:0}
B.fBf.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eQ,y.o).w,u=x.a,t=u?C.iE:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwN,C.f,w,w,D.b8r,w,w,w,w,D.amG,w,w,1/0),new A.D(C.GV,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hdw(u,"Organization name",C.Hn,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hdw(u,"Access code",C.nI,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hdw(u,"Member password",H.HU,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fTR,w,new B.fBe(r,q,p,d),A.bp(C.aF,w,w,w,w,C.h6,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.Q,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GI,w,w,w,w),w)},
$S:60}
B.fBe.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fi1)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGJ(u,x,w))},
$S:0}
B.cdy.prototype={
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
p=C.a.a0(j,"http")?A.cD(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vQ(p,null).dh(0,C.a_O),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cj(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.an.$1("[doc share lan web] "+A.w(r)+": "+A.w(m))
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
B.cdE.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdF.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdG.prototype={
$1(d){return d.b},
$S:z+2}
B.cdA.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdB.prototype={
$1(d){return d.b},
$S:z+2}
B.cdz.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdC.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdD.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fVJ.prototype={
$1(d){return new B.W_(this.a,null)},
$S:z+11}
B.fVK.prototype={
$1(d){return new B.W3(this.a,this.b,this.c,null)},
$S:z+12}
B.dYE.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZN.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZO.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZM(x,d))},
$S:2}
B.dZM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZS.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZU.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZY.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dZW.prototype={
$1(d){var x=this.a
return x.f?null:x.a_y()},
$S:2}
B.dZX.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S8))s=C.uN
else s=C.a.a0(s,"video/")||d.mI(D.n6)?C.qR:D.apS
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.q(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garl(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dYF.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dYG.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdI.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.cdJ.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.fWD.prototype={
$2(d,e){return e===this.a},
$S:299}
B.ftg.prototype={
$1(d){return J.k(d)},
$S:17}
B.fz1.prototype={
$1(d){var x=this.b
B.i5r(C.Ha.ga7g(this.a)).bG(x.gC1(x),y.H)},
$S:130}
B.fz2.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fz3.prototype={
$0(){return null},
$S:12}
B.cdX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fz4.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
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
return new B.jC(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fDf.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ce1.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.h_T.prototype={
$1(d){return new B.a_e(this.a,null)},
$S:z+16}
B.dc2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dc0.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dc1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZL.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1F()},
$S:11}
B.dZ8.prototype={
$0(){var x=J.bGU(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ9.prototype={
$0(){var x=J.bGU(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYI.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFZ(this.c)}},
$S:0}
B.dYH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYJ.prototype={
$0(){var x=J.bGU(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYO.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYN(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFZ(this.c)}},
$S:0}
B.dYN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZz.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZA.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZ5.prototype={
$1(d){return new B.W0(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZ2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.ID(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.W4(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.um(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1P(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYM.prototype={
$1(d){this.a.acZ(d,"No files selected.","Added")},
$S:467}
B.dZd.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZc(),A.U(x).k("N<1,n>")))},
$S:0}
B.dZc.prototype={
$1(d){return d.a},
$S:z+2}
B.dYS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xO.cq().cZv(C.a1D,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jJ(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.an.$1("[doc share import] "+A.w(p))
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
return A.b(B.aqH(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.um(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZw.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZx.prototype={
$1(d){return new B.a_g(this.a.a.c,this.b,null)},
$S:z+18}
B.dZy.prototype={
$1(d){return new B.a_d(this.a.a.c,this.b,null)},
$S:z+19}
B.dZ3.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZ4.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.ID(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a81(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csh(),$async$$0)
case 5:x=6
return A.b(p.um(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dZl(p),r),new B.dZm(),r.k("N<ak.E,n>")).bY(0,new B.dZn())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.ec(new B.dZo(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pv(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wa(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZl.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZk(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZm.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZn.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZo.prototype={
$1(d){var x=this.a
return new B.a_i(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZq.prototype={
$1(d){return d.a},
$S:z+2}
B.dZr.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZj.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.as(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garl(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n6)?C.t5:C.py
p=!x||p.mI(D.n6)?"Play video":"View"
return A.c2(A.bm(!0,new A.D(C.Ch,A.x(A.a([q,o,t,C.aB,B.a_h(!1,u,!1,w,p,new B.dZe(d),v),B.a_h(!1,u,!1,C.jK,"Share via QR",new B.dZf(d),"Letters/numbers QR code"),B.a_h(!1,u,!1,D.a2L,"Send to their Code",new B.dZg(d),"Enter someone else's personal code"),B.a_h(!1,u,!1,C.i_,"Download / save",new B.dZh(d),v),C.am,B.a_h(!1,u,!0,C.eh,"Delete",new B.dZi(d),v)],y.p),C.al,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bj)},
$S:554}
B.dZe.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dZf.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dZg.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZh.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dZi.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dYP.prototype={
$1(d){return d.a},
$S:z+2}
B.dYQ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a83(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hf(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pv(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYL.prototype={
$1(d){var x=this.a
x.un(new B.dYK(x,d,this.b),"Preparing\u2026")},
$S:467}
B.dYK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.W4(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFR(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ6.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZ7.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h8m(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hd(new B.dYX(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dYY(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYZ(s))
case 5:x=8
return A.b(r.b.iI(0,C.GC,new B.dZ_()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.um(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYX.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYU(x,d,e))},
$S:225}
B.dYU.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYY.prototype={
$1(d){return new B.add(this.a.a,null)},
$S:z+21}
B.dYZ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZ_.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZ1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jh(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7S(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3d(B.Jh(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqH(new B.dYV(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h8l(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.um(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYW()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYV.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYT(x,d,e))},
$S:225}
B.dYT.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYW.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.dZb.prototype={
$1(d){return new B.a_j(this.a.a.c,null)},
$S:z+23}
B.dZa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0W(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZv.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aF.j(0.35)
return A.c2(A.bm(!0,new A.D(C.Ch,A.x(A.a([A.as(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_h(!0,w,!1,C.nI,"My Code",new B.dZs(d),"Your personal code & QR \u2014 others send docs to you"),B.a_h(!1,w,!1,D.a2L,"Send to their Code",new B.dZt(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_h(!1,w,!1,S.zr,"Import backup",new B.dZu(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bj)},
$S:554}
B.dZs.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dZt.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGl()},
$S:0}
B.dZu.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZI.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jr(D.RS,x,C.a2G,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RS).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:583}
B.dZG.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZH.prototype={
$0(){this.a.ajt()
return null},
$S:0}
B.dZJ.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*10)),e)},
$S:101}
B.dZK.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adf(e,w,v,this.b,x.e,x.cbD(w),new B.dZC(x,w),new B.dZD(x,v,w),new B.dZE(x,w),new B.dZF(x,w),null)},
$S:z+24}
B.dZC.prototype={
$0(){this.a.agG(this.b)
return null},
$S:0}
B.dZD.prototype={
$0(){var x=this.a
return x.m(new B.dZB(x,this.b,this.c))},
$S:0}
B.dZB.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZE.prototype={
$0(){this.a.Oy(this.b)
return null},
$S:0}
B.dZF.prototype={
$0(){this.a.ajg(this.b)
return null},
$S:0}
B.dbZ.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*18)),e)},
$S:101}
B.dc_.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:111}
B.dcm.prototype={
$3(d,e,f){return A.d3(A.dN(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dcl.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dci.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcj.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dck.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcg.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dce(this.a),C.hf,C.dB,!0,x,!1,x,x)
$.aW.x1$.push(new B.dcf(this.a))
return C.bL},
$S:133}
B.dce.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcc(this.a))
return C.bL},
$S:193}
B.dcc.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc9(x))},
$S:7}
B.dc9.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcf.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcb(x))},
$S:7}
B.dcb.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dch.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcd(this.a))
return C.bL},
$S:193}
B.dcd.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dca(x))},
$S:7}
B.dca.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbW.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbV(x,d))},
$S:1762}
B.dbV.prototype={
$0(){return this.a.f=this.b===C.vq},
$S:0}
B.dbX.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbU(x,d))},
$S:7}
B.dbU.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbY.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbT(x,d))},
$S:7}
B.dbT.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbP.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbQ.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbR.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbS.prototype={
$1(d){return this.a.d.Nv(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.dcz.prototype={
$0(){var x=this.a.a
return B.rS(x.c,x.d)},
$S:1763}
B.dcA.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcB.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcC.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcE.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcG.prototype={
$0(){var x=this.a
x.m(new B.dcF(x))},
$S:0}
B.dcF.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qp(0)},
$S:0}
B.dcv.prototype={
$1(d){return this.a.Rm(this.b)},
$S:11}
B.dcw.prototype={
$1(d){return this.a.Rl(this.b)},
$S:11}
B.dcn.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dco.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcp.prototype={
$1(d){return D.htI},
$S:z+25}
B.dcu.prototype={
$2(d,e){if(d)B.Wa()},
$S:128}
B.dcq.prototype={
$0(){return this.a.aaN(this.b)},
$S:0}
B.dcr.prototype={
$0(){return this.a.aaK(this.b)},
$S:0}
B.dcs.prototype={
$0(){return this.a.af9(this.b)},
$S:0}
B.dct.prototype={
$0(){return this.a.a2s(this.b)},
$S:0}
B.dbO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcy.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qt(),$async$$0)
case 2:u.m(new B.dcx(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcx.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ce3.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.ce4.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ce2.prototype={
$2(d,e){return this.bmW(d,e)},
bmW(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wb(u.c,A.I(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fCS.prototype={
$1(d){if(d===D.a9a&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fCT.prototype={
$0(){},
$S:12}
B.fDt.prototype={
bov(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fqx(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hph(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bov(d,e)},
$S:765}
B.fDs.prototype={
$1(d){var x=this
d.b=new B.fDr(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fDr.prototype={
$1(d){return this.bou(d)},
bou(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0X(n,m),$async$$1)
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
return A.b(B.fqx(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.an.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a80(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAY.prototype,"gcj4","QW",0)
x(v,"gcjW","JK",0)
x(v,"gcjr","yE",0)
x(v=B.aEX.prototype,"gcbx","af7",0)
x(v,"gcby","a_x",0)
x(v,"gcyK","aiY",0)
x(v=B.aF_.prototype,"gcbz","a_y",0)
x(v,"gcyL","a2N",0)
x(B.aEY.prototype,"gcbA","af8",0)
x(B.aAX.prototype,"gcbF","cbG",4)
x(v=B.aEZ.prototype,"gcjs","a0J",0)
x(v,"gcxk","cxl",4)
x(v,"gb4i","aAu",0)
x(v,"gcAf","ajn",0)
x(v,"gbSL","Yo",0)
x(v,"gcbE","EM",0)
x(B.aAZ.prototype,"gb84","a2M",0)
x(B.aAW.prototype,"gcbH","a_z",0)
x(v=B.aB1.prototype,"gb30","chH",4)
x(v,"gcbB","afb",0)
x(v=B.aB_.prototype,"gcwi","a2y",0)
x(v,"gb12","afa",0)
w(B.aAV.prototype,"gaz0","az1",8)
x(v=B.aB0.prototype,"gcmb","ah8",0)
x(v,"gbSe","abB",0)
w(v,"gaz0","az1",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crI,B.aao,B.avh,B.aDB,B.aGJ,B.jC,B.acW,B.bxQ,B.FL,B.Yj])
w(B.crJ,B.crI)
w(B.b64,B.aao)
x(A.ht,[B.crE,B.crF,B.crG,B.crD,B.crH,B.crK,B.crL,B.crM,B.crN,B.crO,B.crP,B.crQ,B.crR,B.fwc,B.fVw,B.fVy,B.fVx,B.fVL,B.fVM,B.fyQ,B.dc3,B.dc5,B.dc4,B.dc8,B.fAM,B.fBf,B.cdy,B.cdF,B.cdG,B.cdB,B.cdz,B.cdC,B.cdD,B.fVJ,B.fVK,B.dZP,B.dZY,B.dZW,B.dZX,B.ftg,B.fz1,B.fz2,B.cdX,B.fz4,B.fDf,B.fxf,B.fxg,B.ce1,B.h_T,B.dc2,B.dc0,B.dZL,B.dYH,B.dYN,B.dZ5,B.dYM,B.dZc,B.dZw,B.dZx,B.dZy,B.dZ3,B.dZl,B.dZk,B.dZm,B.dZn,B.dZo,B.dZq,B.dZr,B.dZj,B.dYP,B.dYQ,B.dYL,B.dZ6,B.dYY,B.dYW,B.dZb,B.dZv,B.dZI,B.dZJ,B.dbZ,B.dc_,B.dcm,B.dcl,B.dcg,B.dce,B.dcc,B.dcf,B.dch,B.dcd,B.dbW,B.dbX,B.dbY,B.dbS,B.dcv,B.dcw,B.dcp,B.ce3,B.ce4,B.fCS,B.fDs,B.fDr])
w(B.b65,B.avh)
x(A.iJ,[B.fVv,B.dc6,B.dc7,B.fAK,B.fAL,B.fBe,B.dYE,B.dZN,B.dZO,B.dZM,B.dZQ,B.dZR,B.dZS,B.dZT,B.dZU,B.dZV,B.dYF,B.dYG,B.fz3,B.dc1,B.dZ8,B.dZ9,B.dYI,B.dYJ,B.dYO,B.dZz,B.dZA,B.dZ2,B.dZd,B.dYS,B.dZ4,B.dZp,B.dZe,B.dZf,B.dZg,B.dZh,B.dZi,B.dYR,B.dYK,B.dZ7,B.dZ0,B.dYU,B.dYZ,B.dZ_,B.dZ1,B.dYT,B.dZa,B.dZs,B.dZt,B.dZu,B.dZG,B.dZH,B.dZC,B.dZD,B.dZB,B.dZE,B.dZF,B.dci,B.dcj,B.dck,B.dc9,B.dcb,B.dca,B.dbV,B.dbU,B.dbT,B.dbP,B.dbQ,B.dbR,B.dcz,B.dcA,B.dcB,B.dcC,B.dcD,B.dcE,B.dcG,B.dcF,B.dcn,B.dco,B.dcq,B.dcr,B.dcs,B.dct,B.dbO,B.dcy,B.dcx,B.fCT])
x(A.lE,[B.ade,B.Od,B.aap,B.Ph,B.Yi,B.Pg,B.FM])
x(A.af,[B.a_f,B.W_,B.W3,B.W0,B.a_e,B.W1,B.a_g,B.a_d,B.Qw,B.a_i,B.a_c,B.a_j])
x(A.ah,[B.aAY,B.aEX,B.aF_,B.aEY,B.aAX,B.aEZ,B.aAZ,B.aAW,B.aB1,B.aB_,B.aAV,B.aB0])
x(A.ax,[B.adH,B.aAU,B.bfw,B.adf,B.add,B.bfx])
x(A.jw,[B.cdE,B.cdA,B.cdI,B.cdJ,B.fWD,B.dYX,B.dYV,B.dZK,B.dcu,B.ce2,B.fDt])
x(A.j4,[B.bkZ,B.bxs])})()
A.iT(b.typeUniverse,JSON.parse('{"b64":{"aao":[]},"b65":{"avh":[]},"a_f":{"af":[],"v":[]},"aAY":{"ah":["a_f"]},"adH":{"ax":[],"v":[]},"W_":{"af":[],"v":[]},"W3":{"af":[],"v":[]},"aEX":{"ah":["W_"]},"aF_":{"ah":["W3"]},"bkZ":{"j4":[]},"W0":{"af":[],"v":[]},"aEY":{"ah":["W0"]},"a_e":{"af":[],"v":[]},"W1":{"af":[],"v":[]},"adf":{"ax":[],"v":[]},"a_g":{"af":[],"v":[]},"a_d":{"af":[],"v":[]},"Qw":{"af":[],"v":[]},"a_i":{"af":[],"v":[]},"add":{"ax":[],"v":[]},"a_c":{"af":[],"v":[]},"a_j":{"af":[],"v":[]},"aAX":{"ah":["a_e"]},"bxs":{"j4":[]},"aEZ":{"ah":["W1"]},"aAU":{"ax":[],"v":[]},"bfw":{"ax":[],"v":[]},"aAZ":{"ah":["a_g"]},"aAW":{"ah":["a_d"]},"aB1":{"ah":["Qw"]},"aB_":{"ah":["a_i"]},"aAV":{"ah":["a_c"]},"aB0":{"ah":["a_j"]},"bfx":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uL"),k:x("ME()"),m:x("bu<n,n>"),F:x("rs"),g:x("aB<jC?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,P>>"),t:x("O<a8<n,@>>"),r:x("O<jC>"),w:x("O<+file,name(lT,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j4>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jC>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iC"),e:x("ixp"),af:x("EY"),U:x("jC"),b:x("ct"),C:x("aE"),aK:x("wE"),ab:x("FL"),br:x("avh"),v:x("Yj"),N:x("n"),X:x("br<G>"),Q:x("m3"),D:x("dK"),aw:x("bI<n>"),cd:x("Y<a8<n,@>>"),c7:x("v"),ch:x("c3<ai<jC>>"),aW:x("c3<dK?>"),aY:x("c3<~>"),cx:x("ade"),b1:x("bk<ai<jC>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDB"),bG:x("aGJ"),q:x("mz"),B:x("pO<FL>"),c6:x("pO<aap>"),y:x("P"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jC>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jC?"),R:x("aE?"),c:x("Yj?"),d:x("+answerQr,transfer(n,aB<ai<jC>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Od,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acW?"),bk:x("aDB?"),ag:x("aGJ?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5j=new A.ay(C.aF,2,C.r,-1)
D.c7i=new A.a9(C.a7,C.aa,C.x,C.a4Q,null,null)
D.b6Y=new A.p(null,null,null,C.mF,null,D.c7i,C.n)
D.b8r=new A.p(null,null,null,C.mF,null,E.I5,C.n)
D.afC=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ah1=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ai3=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajR=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fFU=new A.B("Your team portal",null,C.di,null,null,null,null,null,null,null,null,null)
D.fUN=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dja=x([D.fFU,C.am,D.fUN],y.p)
D.bwE=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dja,null)
D.fZg=new A.B("Create your organization",null,C.fC,null,null,null,null,null,null,null,null,null)
D.fKm=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dA1=x([D.fZg,C.am,D.fKm],y.p)
D.bwN=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dA1,null)
D.fVq=new A.B("Team Member sign-in",null,C.fC,null,null,null,null,null,null,null,null,null)
D.fOl=new A.B("Enter the access code and password from your organization.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dxN=x([D.fVq,C.am,D.fOl],y.p)
D.bwY=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dxN,null)
D.bDb=new A.R(16,10,16,28)
D.bDj=new A.R(16,14,16,4)
D.bEz=new A.R(20,0,20,16)
D.bF4=new A.R(20,8,20,16)
D.amG=new A.R(24,22,24,20)
D.a2L=new A.a0(63394,"MaterialIcons",!1)
D.apS=new A.a0(63515,"MaterialIcons",!1)
D.bSh=new A.a0(983813,"MaterialIcons",!1)
D.bPy=new A.a0(62867,"MaterialIcons",!1)
D.bTh=new A.ae(D.bPy,44,C.c,null,null,null)
D.bUl=new A.ae(C.k6,null,C.ac,null,null,null)
D.bVK=new A.ae(C.jp,18,null,null,null,null)
D.bXu=new A.ae(D.a2L,26,C.c,null,null,null)
D.bY5=new A.ae(C.CY,null,null,null,null,null)
D.bYG=new A.ae(C.D5,null,null,null,null,null)
D.bZR=new A.ae(W.a2W,null,null,null,null,null)
D.c_c=new A.ae(C.hM,16,null,null,null,null)
D.c2K=new A.ae(C.t4,16,null,null,null,null)
D.bTy=new A.ae(C.nI,null,null,null,null,null)
D.c3C=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZd=new A.ae(C.Hn,null,null,null,null,null)
D.c3H=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTT=new A.ae(H.HU,null,null,null,null,null)
D.c3S=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cSU=x([C.fo,C.b2,C.aF],y.O)
D.c99=new A.a9(C.aA,C.aE,C.x,D.cSU,null,null)
D.cSl=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RS=x([C.fo,C.aF],y.O)
D.S8=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n6=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.ds7=x([C.oh,C.aF],y.O)
D.ekB={iceServers:0}
D.aLi={urls:0}
D.dDM=new A.bu(D.aLi,["stun:stun.l.google.com:19302"],y.m)
D.dDL=new A.bu(D.aLi,["stun:stun1.l.google.com:19302"],y.m)
D.d8G=x([D.dDM,D.dDL],A.at("O<a8<n,n>>"))
D.dD2=new A.bu(D.ekB,[D.d8G],A.at("bu<n,@>"))
D.J8=new B.Od(0,"lanDirect")
D.Ts=new B.Od(1,"cloudStash")
D.dP6=new B.Od(2,"inlineInstant")
D.Tt=new B.Od(3,"webrtcLink")
D.Af=new B.Od(4,"videoCloud")
D.fUM=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cI9=x([E.arA,C.ae,D.fUM],y.p)
D.f8x=new A.c7(C.aL,C.bb,C.i,C.l,null,C.p,null,0,D.cI9,null)
D.es4=new A.D(C.cp,D.f8x,null)
D.fwq=new A.F(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Iy,null,null,null)
D.fGs=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fwq,null,C.K,null,null,null,null,null,null,null)
D.ere=new A.D(C.Cm,D.fGs,null)
D.bcP=new A.cg(C.A,null,null,D.ere,null)
D.eyn=new A.cK(0,null,0,28,null,null,D.bcP,null)
D.eyH=new B.aap(0,"RTCDataChannelConnecting")
D.aQM=new B.aap(1,"RTCDataChannelOpen")
D.aQN=new B.aap(3,"RTCDataChannelClosed")
D.eyI=new B.FM(0,"RTCIceConnectionStateNew")
D.eyJ=new B.FM(1,"RTCIceConnectionStateChecking")
D.eyK=new B.FM(2,"RTCIceConnectionStateCompleted")
D.eyL=new B.FM(3,"RTCIceConnectionStateConnected")
D.eyM=new B.FM(4,"RTCIceConnectionStateCount")
D.eyN=new B.FM(5,"RTCIceConnectionStateFailed")
D.eyO=new B.FM(6,"RTCIceConnectionStateDisconnected")
D.aQO=new B.FM(7,"RTCIceConnectionStateClosed")
D.aQP=new B.Yi(0,"RTCIceGatheringStateNew")
D.eyP=new B.Yi(1,"RTCIceGatheringStateGathering")
D.a9a=new B.Yi(2,"RTCIceGatheringStateComplete")
D.a9b=new B.Pg(0,"RTCPeerConnectionStateClosed")
D.aQQ=new B.Pg(1,"RTCPeerConnectionStateFailed")
D.aQR=new B.Pg(2,"RTCPeerConnectionStateDisconnected")
D.aQS=new B.Pg(3,"RTCPeerConnectionStateNew")
D.aQT=new B.Pg(4,"RTCPeerConnectionStateConnecting")
D.aQU=new B.Pg(5,"RTCPeerConnectionStateConnected")
D.eyQ=new B.Ph(0,"RTCSignalingStateStable")
D.eyR=new B.Ph(1,"RTCSignalingStateHaveLocalOffer")
D.eyS=new B.Ph(2,"RTCSignalingStateHaveRemoteOffer")
D.eyT=new B.Ph(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eyU=new B.Ph(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQV=new B.Ph(5,"RTCSignalingStateClosed")
D.fdC=new A.av(160,48)
D.be4=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.ffa=new A.a5(16,16,D.be4,null)
D.fJG=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgD=new A.b1(D.fJG,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRo=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fgG=new A.b1(D.fRo,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_k=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgN=new A.b1(D.h_k,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fJg=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fhc=new A.b1(D.fJg,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVB=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aU0=new A.b1(D.fVB,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fX3=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new A.b1(D.fX3,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0N=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new A.b1(D.h0N,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZK=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.b1(D.fZK,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_Y=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new A.b1(D.h_Y,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHR=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjk=new A.b1(D.fHR,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTl=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjF=new A.b1(D.fTl,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fM1=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fka=new A.b1(D.fM1,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0T=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fke=new A.b1(D.h0T,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fI6=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkk=new A.b1(D.fI6,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGO=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fkz=new A.b1(D.fGO,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fDB=new A.B("NGMY DOC SHARE",null,C.aVp,null,null,null,null,null,null,null,null,null)
D.fF0=new A.B("Show this to sender",null,C.iB,null,null,null,null,null,null,null,null,null)
D.fG0=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fKN=new A.B("Organization settings",null,C.cC,null,null,null,null,null,null,null,null,null)
D.fLb=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fMb=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fMJ=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fPC=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fSr=new A.B("Send to their Doc Share",null,C.nX,null,null,null,null,null,null,null,null,null)
D.fSN=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fT7=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fTK=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTR=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fUe=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.fXz=new A.B("Share files & videos\nwith a scan.",null,C.aVs,null,null,null,null,null,null,null,null,null)
D.fXT=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.htI=new B.a_c(null)
D.acv=new B.ade(0,"docShare")
D.acw=new B.ade(1,"gate")
D.Ww=new B.ade(2,"gateNoIndividual")})();(function staticFields(){$.aPv=null
$.fo4=function(){var x=y.N
return A.T(x,x)}()
$.H1=A.T(y.N,y.D)
$.ahj=A.T(y.N,A.at("lT"))
$.RT=A.T(y.N,y.D)
$.foK=A.T(y.N,A.at("acW"))
$.cdW=A.T(y.S,A.at("bxQ"))
$.hpg=1
$.idP=null
$.idO=null
$.i4E=null
$.hdJ=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ixU","hHc",()=>new B.crJ())
x($,"ivO","hhJ",()=>C.a.q(A.bA(A.bA(A.bA(A.HA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["AEgBJCH+ilzhM62cBDqOdf1CDkA="]=a.current})($__dart_deferred_initializers__);