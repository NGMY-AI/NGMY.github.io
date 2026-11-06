((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cjo:function cjo(){},
hH8(d){var x=null,w=new B.b3j(d,D.eik,new A.pp(x,x,y.c6),new A.pp(x,x,y.B))
w.bxy(d)
return w},
b3j:function b3j(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cjj:function cjj(d){this.a=d},
cjk:function cjk(d){this.a=d},
cjl:function cjl(d){this.a=d},
cji:function cji(d){this.a=d},
cjm:function cjm(d){this.a=d},
hH9(d,e){var x=y.N
x=new B.b3k(d,e,A.U(x,y.e),A.U(x,y.z))
x.bxz(d,e)
return x},
b3k:function b3k(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cjp:function cjp(d){this.a=d},
cjq:function cjq(d){this.a=d},
cjr:function cjr(d){this.a=d},
cjs:function cjs(d){this.a=d},
cjt:function cjt(d){this.a=d},
cju:function cju(d){this.a=d},
cjv:function cjv(d){this.a=d},
cjw:function cjw(d){this.a=d},
fXR(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yG.LX(x,"ngmy_doc_share_v1",new B.fhY(),1)},
hNI(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eY(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.A6(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cF.aK(d)
return x}catch(w){return v}return v},
R_(d,e){return B.i20(d,e)},
i20(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMW
x=7
return A.b(o==null?$.aMW=B.fXR():o,$async$R_)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mI(s,"blobs","readwrite")
C.iP.mi(J.mH(q,"blobs"),r,d)
x=8
return A.b(J.pz(q),$async$R_)
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
QZ(d){return B.i2_(d)},
i2_(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMW
x=7
return A.b(o==null?$.aMW=B.fXR():o,$async$QZ)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iP.zt(J.mH(r,"blobs"),d),$async$QZ)
case 8:q=f
x=9
return A.b(J.pz(r),$async$QZ)
case 9:o=B.hNI(q)
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
agy(d){return B.i1Z(d)},
i1Z(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMW
x=7
return A.b(p==null?$.aMW=B.fXR():p,$async$agy)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iP.FK(J.mH(r,"blobs"),d)
x=8
return A.b(J.pz(r),$async$agy)
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
return A.i($async$agy,w)},
fhY:function fhY(){},
hQ1(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnz(w,v))}return u},
hmX(d,e){var x,w={},v=A.aVn("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fFP(w,v,e)
C.w3.yp(v,"change",new B.fFR(w,v,!1))
C.w3.yp(v,"cancel",new B.fFQ(w))
$.eQ.mp()
v.click()
A.bM(C.ah_,new B.fFO(w),y.H)},
fFP:function fFP(d,e,f){this.a=d
this.b=e
this.c=f},
fFR:function fFR(d,e,f){this.a=d
this.b=e
this.c=f},
fFQ:function fFQ(d){this.a=d},
fFO:function fFO(d){this.a=d},
CY(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CY=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTA()?3:4
break
case 3:x=5
return A.b(B.hi3(e,d,s,!0,!1,f,g,h,!1,i),$async$CY)
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
return A.b(B.fdA(s,d),$async$CY)
case 14:x=12
return A.b(r.hi3(q,p,o,n,m,l,k,j,a1,i),$async$CY)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cm(A.e9(new B.fG3(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cm(A.e9(new B.fG4(s,i,d,f,g,h),!1,null,y.H)),$async$CY)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CY,w)},
QF(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QF=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ3(e),$async$QF)
case 3:u=k
x=4
return A.b(B.aoK(d,e,!1),$async$QF)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Io(e,d),$async$QF)
case 7:if(k){v=D.a9w
x=1
break}x=8
return A.b(B.UG(e),$async$QF)
case 8:v=t?D.UB:D.a9x
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZ1(d,e)){v=D.a9w
x=1
break}x=11
return A.b(B.UG(e),$async$QF)
case 11:v=t?D.UB:D.a9x
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fSZ(d,e)){v=D.a9w
x=1
break}x=14
return A.b(B.UG(e),$async$QF)
case 14:v=D.UB
x=1
break
case 13:v=t?D.UB:D.a9x
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QF,w)},
fdA(d,e){var x=0,w=A.j(y.y),v
var $async$fdA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZ1(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZ3(d),$async$fdA)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdA,w)},
hi3(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cm(A.e9(new B.fka(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hd9(d,e,f,g,h,i,j){return new B.YL(e,j,d,g,h,i,f,null)},
fm6(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fm6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fm9(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fm6)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fm6,w)},
fmB(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fmB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fmD(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fmB)
case 3:q=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
r.S$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmB,w)},
fY_(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bs(x,new A.b4(4,A.n(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fyp(d,e){var x=0,w=A.j(y.H),v
var $async$fyp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UG(e),$async$fyp)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eE()
case 1:return A.h(v,w)}})
return A.i($async$fyp,w)},
fG3:function fG3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fG4:function fG4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abQ:function abQ(d,e){this.a=d
this.b=e},
fka:function fka(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YL:function YL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayM:function ayM(){this.c=this.a=this.d=null},
d2K:function d2K(d,e){this.a=d
this.b=e},
d2H:function d2H(d){this.a=d},
d2J:function d2J(d){this.a=d},
d2I:function d2I(d){this.a=d},
d2M:function d2M(){},
d2L:function d2L(d){this.a=d},
ach:function ach(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBj:function aBj(d,e){this.a=d
this.b=e},
aEp:function aEp(d,e,f){this.a=d
this.b=e
this.c=f},
fm9:function fm9(d,e,f){this.a=d
this.b=e
this.c=f},
fm7:function fm7(d){this.a=d},
fm8:function fm8(d,e,f){this.a=d
this.b=e
this.c=f},
fmD:function fmD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmC:function fmC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7T(d,e,f,g,h){return B.hC4(d,e,f,g,h)},
hC4(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7T=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a3(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iO(r.dB(d,new B.c7U(s,e,h,g,f,q),y.g),y.l),$async$c7T)
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
return A.i($async$c7T,w)},
aYZ(d,e,f,g,h){return B.hC5(d,e,f,g,h)},
hC5(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYZ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.au0("GET",d)
o=A.fPm()
if(o==null)o=new A.LI(A.a([],y.W))
x=7
return A.b(o.f0(0,s).d7(0,C.Fm),$async$aYZ)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aYZ)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BE(q,h,o,e,f,"Received via QR")
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
return A.i($async$aYZ,w)},
aYY(d){return B.hC2(d)},
hC2(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vh(d,null).d7(0,C.nV),$async$aYY)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aL(0,A.lU(A.lS(p.e)).cz(0,p.w),null)
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
return A.i($async$aYY,w)},
c7S(d){return B.hC3(d)},
hC3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vh(d,null).d7(0,C.pU),$async$c7S)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lU(A.lS(q.e)).cz(0,q.w)
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
return A.i($async$c7S,w)},
c7U:function c7U(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jm:function jm(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Im(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hCa(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Im(C.a.b3(u,v.length))}return null},
hCb(d){var x=B.Im(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hC6(){var x,w=$.pw(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.hs(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a6s(d){return B.hC7(d)},
hC7(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bJ),$async$a6s)
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
return A.i($async$a6s,w)},
a6t(d,e){return B.hC8(d,e)},
hC8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6t=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a6t)
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
return A.i($async$a6t,w)},
BD(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BD)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Im(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6u(r),$async$BD)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6s("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BD)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Im(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BD)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hC6()
x=14
return A.b(B.a6u(m),$async$BD)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a6t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 15:k=f
x=16
return A.b(B.a6t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BD)
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
return A.i($async$BD,w)},
a6u(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Im(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6s("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6u)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6u,w)},
a6v(d,e,f,g){return B.hCc(d,e,f,g)},
hCc(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6v=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a3(d)
if(g.gal(d)){v=!1
x=1
break}r=B.Im(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6u(r),$async$a6v)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cM(d,0,new B.c8_())>1048576||g.b4(d,new B.c80())){v=B.Er(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a6G("myCode",d,a0),$async$a6v)
case 4:u=a3
try{t=C.S.aL(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cm(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Er(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZ6(u,g.gL(d),a0),$async$a6v)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pw().az(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dB(d,new B.c81(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZ_(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a6v)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
Er(d,e,f,g,h){return B.hC9(d,e,f,g,h)},
hC9(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Er=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$Er)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cM(a6,0,new B.c7W())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pw().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.az(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
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
a1=$.eX().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oY(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aa5(a1.a,a4,"media",a1.d,a2).wZ(m,n,new A.DI(!0,q.c)),$async$Er)
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
return A.b(B.aPr(r),$async$Er)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dB(a6,new B.c7X(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZ_(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$Er)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPr(r),$async$Er)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Er,w)},
aZ_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZ_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6s(t),$async$aZ_)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7V(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6t(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ_,w)},
Ni(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ni=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6s("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ni)
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
return A.b(B.aZ0(k,a0),$async$Ni)
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
return A.b(B.aZ5(h),$async$Ni)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UN(g,a0),$async$Ni)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c7Y(),q),n)
d=A.C(new A.a_(r,new B.c7Z(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.dc(d,0,A.dG(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6t("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Ni)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ni,w)},
aZ0(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZ0=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.i5N(k,j)
C.d.v(s,i)
x=5
return A.b(B.CW(l,m,"Received via My Code",t,e,i),$async$aZ0)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPr(s),$async$aZ0)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ0,w)},
c8_:function c8_(){},
c80:function c80(){},
c81:function c81(){},
c7W:function c7W(){},
c7X:function c7X(){},
c7V:function c7V(){},
c7Y:function c7Y(){},
c7Z:function c7Z(){},
fG0(d,e){var x=0,w=A.j(y.H)
var $async$fG0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cm(A.e9(new B.fG1(e),!1,null,y.H)),$async$fG0)
case 2:return A.h(null,w)}})
return A.i($async$fG0,w)},
bCa(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCa=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cm(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cm(A.e9(new B.fG2(g,e,f),!1,null,y.y)),$async$bCa)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCa,w)},
fG1:function fG1(d){this.a=d},
fG2:function fG2(d,e,f){this.a=d
this.b=e
this.c=f},
UD:function UD(d,e){this.c=d
this.a=e},
aCF:function aCF(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOp:function dOp(d,e){this.a=d
this.b=e},
UH:function UH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCI:function aCI(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPy:function dPy(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPB:function dPB(d){this.a=d},
dPC:function dPC(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPG:function dPG(d){this.a=d},
dPJ:function dPJ(){},
dPH:function dPH(d){this.a=d},
dPI:function dPI(d,e){this.a=d
this.b=e},
bhW:function bhW(){},
UE:function UE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCG:function aCG(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOq:function dOq(d){this.a=d},
dOr:function dOr(d){this.a=d},
fT_(d){var x=d.hW
if(x>=0)return C.o.N(x)
return 10},
hCe(d){var x=d.kM
if(x>=0)return x
return 4.99},
hCd(d){var x=d.lp,w=y.N
w=x.j9(x,new B.c83(),w,w)
return w},
h8c(d){var x=d.kN,w=y.N
w=x.j9(x,new B.c84(),w,w)
return w},
aZ3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZ3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZ3)
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
return A.i($async$aZ3,w)},
a6x(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6x)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6x)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
UG(d){var x=0,w=A.j(y.H),v,u
var $async$UG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UG)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UG,w)},
fSZ(d,e){var x,w,v
if(B.hCe(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hCd(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.S(Date.now(),0,!1))},
aZ1(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h8c(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.S(Date.now(),0,!1))},
h8d(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h8c(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bS(A.dD(f,0,0,0,0,0).a).a5().ac())
d.kN=w},
aoL(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aoL)
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
return A.i($async$aoL,w)},
aoM(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoL(d),$async$aoM)
case 3:u=f
x=5
return A.b(A.ay(),$async$aoM)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoM,w)},
aoK(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fT_(d)
if(u<=0){v=!1
x=1
break}if(B.fSZ(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoL(e),$async$aoK)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoK,w)},
aZ2(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZ2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Io(e,d),$async$aZ2)
case 3:if(g){v=-1
x=1
break}u=B.fT_(d)
if(u<=0){v=-1
x=1
break}if(B.fSZ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoL(e),$async$aZ2)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ2,w)},
c86(d,e,f){var x=0,w=A.j(y.y),v
var $async$c86=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Io(e,d),$async$c86)
case 3:if(h){v=!1
x=1
break}v=B.aoK(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c86,w)},
c85(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c85=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c86(d,u,i.gTA()),$async$c85)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c85,w)},
a6w(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6w=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTA()){v=!0
x=1
break}if(B.aZ1(d,u)){v=!0
x=1
break}x=5
return A.b(A.li(u,C.S0),$async$a6w)
case 5:x=k?3:4
break
case 3:B.h8d(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6w)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kV(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S0,"Doc Share for Organizations"),$async$a6w)
case 7:if(!k){v=!1
x=1
break}B.h8d(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6w)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6w,w)},
c83:function c83(){},
c84:function c84(){},
fGJ(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fGJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fGJ)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fac.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fac.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGJ,w)},
i85(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fac.bs($.fac,new B.fGL(d))},
fGL:function fGL(d){this.a=d},
fbE(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fbE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jl,null,y.H),$async$fbE)
case 3:C.A6.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eQ.mp()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbE,w)},
afo(d,e,f){var x=0,w=A.j(y.H),v
var $async$afo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.faK.n(0,d,new B.abx(A.bn(e,!0,v)))
x=3
return A.b(A.ay(),$async$afo)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afo)
case 2:return A.h(null,w)}})
return A.i($async$afo,w)},
afi(d){return B.hRT(d)},
hRT(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.faK.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afi)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aL(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cm(s)){v=null
x=1
break}o=J.b6(s,new B.ff9(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abx(r)
$.faK.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afi,w)},
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
aNi(d){return B.hRR(d)},
hRR(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G9.h(0,d)
if(n!=null&&!C.aH.gal(n)){v=n
x=1
break}x=3
return A.b(B.QZ(d),$async$aNi)
case 3:p=f
if(p!=null&&!C.aH.gal(p)){$.G9.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNi)
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
return A.b(J.hy(s,d),$async$aNi)
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
return A.i($async$aNi,w)},
hO4(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ce(J.eY(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ce(A.A6(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
return A.f8(null,y.K)},
a1c(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bV(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fkm(r,t),!1,s)
A.fL(r,"error",new B.fkn(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iq(0,C.Md,new B.fko())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1c,w)},
aNC(d,e,f){return B.hU8(d,e,f)},
hU8(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNC=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1c(i),$async$aNC)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.R_(o,p),$async$aNC)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.cd(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afo(k,j,s),$async$aNC)
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
return A.i($async$aNC,w)},
aNB(d,e,f){return B.hU7(d,e,f)},
hU7(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNB=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNC(d,e,f),$async$aNB)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1c(f),$async$aNB)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G9.n(0,s,r)
$.QM.n(0,s,r)
x=11
return A.b(B.Qv(s,r),$async$aNB)
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
return A.i($async$aNB,w)},
BE(d,e,f,g,h,i){return B.hCn(d,e,f,g,h,i)},
hCn(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BE=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jm(p,q,o,n,new A.S(Date.now(),0,!1).a5().ac(),a0,f,B.aZ9(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qv(s,d),$async$BE)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BE)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cJ.gct().aK(d)),$async$BE)
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
return A.b(B.AH(e),$async$BE)
case 12:j=a2
J.cd(j,m)
x=13
return A.b(B.Gk(e,j),$async$BE)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BE,w)},
UI(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AH(d),$async$UI)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.az(99999)
n=p.b
l=o.type
l.toString
k=B.h8f(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a5().ac()
i=new B.jm(m,n,k,l,j,"From folder",null,B.aZ9(),null)
$.afS.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1c(o),$async$UI)
case 7:g=a1
x=g!=null&&!C.aH.gal(g)?8:10
break
case 8:$.G9.n(0,h,g)
$.QM.n(0,h,g)
B.Qv(h,g)
x=9
break
case 10:x=11
return A.b(B.aNB(d,m,o),$async$UI)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gk(d,t),$async$UI)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UI,w)},
fT3(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fT3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h8f(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ip(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gal(s)){v=B.BE(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fT3,w)},
Ip(d,e,f,g,h,i){return B.hCm(d,e,f,g,h,i)},
hCm(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ip=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.az(99999)
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
return A.b(B.afo(r,q,g),$async$Ip)
case 16:f=new B.jm(i,a1,a0,g,new A.S(Date.now(),0,!1).a5().ac(),a2,null,B.aZ9(),null)
x=17
return A.b(B.AH(d),$async$Ip)
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
UK(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UK=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afS.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1c(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afi(s),$async$UK)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QZ(u[o]),$async$UK)
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
v=A.A6(n,k,j>m?m:j)
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
return A.b(B.rt(d,e),$async$UK)
case 12:i=a0
if(i!=null&&!C.aH.gal(i))$.QM.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A6(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UK,w)},
h8f(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rt(d,e){return B.hCo(d,e)},
hCo(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rt=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QM.h(0,f)
if(e==null)e=$.G9.h(0,f)
if(e!=null&&!C.aH.gal(e)){v=e
x=1
break}s=$.afS.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1c(s),$async$rt)
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
return A.b(B.afi(f),$async$rt)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axz(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QZ(g[l]),$async$rt)
case 16:k=a3
if(k!=null&&!C.aH.gal(k))n.M(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.anM()
if(!C.aH.gal(r)){$.G9.n(0,f,r)
$.QM.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNi(f),$async$rt)
case 17:j=a3
if(j!=null&&!C.aH.gal(j)){$.QM.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UK(a0,a1,0,g),$async$rt)
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
return A.i($async$rt,w)},
hCr(d){var x,w,v=$.afS.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hCs(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hCp(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoS(d,e,f,g,h){return B.hCq(d,e,f,g,h)},
hCq(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoS=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afS.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1c(s),$async$aoS)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rt(g,e),$async$aoS)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eX().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ij(d).wZ(h,r,new A.DI(!0,e.c)),$async$aoS)
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
return A.i($async$aoS,w)},
h8h(d,e,f,g,h){var x,w,v,u,t=$.h8g
$.h8g=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c8h.n(0,t,new B.buk(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axz(u)))
return t},
fT4(d){var x=0,w=A.j(y.H)
var $async$fT4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fT4,w)},
Iq(d,e){var $async$Iq=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afS.h(0,h)
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
return A.q8(B.UK(d,e,p,o<q?o:q),$async$Iq,w)
case 8:n=a1
x=n!=null&&!C.aH.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q8(A.FI(n),$async$Iq,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q8(B.afi("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Iq,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q8(B.QZ(h[l]),$async$Iq,w)
case 18:k=a1
x=k!=null&&!C.aH.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q8(A.FI(k),$async$Iq,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q8(B.rt(d,e),$async$Iq,w)
case 22:j=a1
x=j!=null&&!C.aH.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q8(A.FI(A.A6(j,p,o<i?o:i)),$async$Iq,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q8(null,0,w)
case 2:return A.q8(t.at(-1),1,w)}})
var x=0,w=A.hgX($async$Iq,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hiL(w)},
aZb(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c8h.h(0,d)
if(t==null||J.cm(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a4q(),$async$aZb)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZb,w)},
UJ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8h.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4q(),$async$UJ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afo(r.c,u,r.z),$async$UJ)
case 4:t=new B.jm(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aZ9(),null)
u=r.a
x=5
return A.b(B.AH(u),$async$UJ)
case 5:s=f
J.cd(s,t)
x=6
return A.b(B.Gk(u,s),$async$UJ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UJ,w)},
a6D(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8h.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agy(u[s]),$async$a6D)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6D,w)},
c8j(d,e,f){var x=0,w=A.j(y.H)
var $async$c8j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bze(d,e,f),$async$c8j)
case 2:return A.h(null,w)}})
return A.i($async$c8j,w)},
c8k(d,e,f){var x=0,w=A.j(y.H)
var $async$c8k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzf(d,e,f),$async$c8k)
case 2:return A.h(null,w)}})
return A.i($async$c8k,w)},
Es(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Es=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AH(d),$async$Es)
case 2:p=g
J.nt(p,new B.c8i(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G9.W(0,v)
$.afS.W(0,e)
x=3
return A.b(B.afi(v),$async$Es)
case 3:u=g
$.faK.W(0,v)
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
return A.b(B.agy(s[q]),$async$Es)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agy(v),$async$Es)
case 13:x=14
return A.b(B.Gk(d,p),$async$Es)
case 14:return A.h(null,w)}})
return A.i($async$Es,w)},
aZa(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rt(d,e),$async$aZa)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fbE(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZa,w)},
AH(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AH)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aL(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fkp(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AH,w)},
Gk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fox(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gk)
case 3:return A.h(null,w)}})
return A.i($async$Gk,w)},
bze(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bze=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AH(d),$async$bze)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.fiP(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDp(f))
x=4
return A.b(B.Gk(d,u),$async$bze)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bze,w)},
bzf(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AH(d),$async$bzf)
case 3:u=h
t=J.cE(u)
s=t.bg(u,new B.fiQ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cHG(f))
x=4
return A.b(B.Gk(d,u),$async$bzf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzf,w)},
abx:function abx(d){this.a=d},
ff9:function ff9(){},
fkm:function fkm(d,e){this.a=d
this.b=e},
fkn:function fkn(d){this.a=d},
fko:function fko(){},
c8i:function c8i(d){this.a=d},
buk:function buk(d,e,f,g,h,i,j,k,l){var _=this
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
fkp:function fkp(){},
fox:function fox(){},
fiP:function fiP(d){this.a=d},
fiQ:function fiQ(d){this.a=d},
a6E(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c8n())?3:4
break
case 3:x=5
return A.b(B.aZc(d,e),$async$a6E)
case 5:u=g
if(u!=null){t=u.c
B.Nk(d,u.b,e,t)}v=u
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
return A.b(B.aZ7(s),$async$a6E)
case 10:case 9:if(g){v=new A.PT(1,D.RE,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UL(d,e),$async$a6E)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UQ(!0,!0,d,e),$async$a6E)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nk(d,D.zi,e,t)
v=new A.PT(p,D.zi,t)
x=1
break}v=B.c8m(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6E,w)},
UL(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6G(null,d,e),$async$UL)
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
return A.b(B.aZ6(p,d.length,e),$async$UL)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c8k(e,C.d.gH(d).a,r.b),$async$UL)
case 7:case 6:q=r.a
x=8
return A.b(B.Nk(d,D.RE,e,q),$async$UL)
case 8:v=new A.PT(d.length,D.RE,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
UM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mu(D.mA)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6F(d,e),$async$UM)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c8f(s,d,e,t),$async$UM)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZ7(t),$async$UM)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rt(e,d),$async$UM)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UL(A.a([d],y.r),e),$async$UM)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UM,w)},
UO(){var x=0,w=A.j(y.H)
var $async$UO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fSY(),$async$UO)
case 2:x=3
return A.b(B.aPI(),$async$UO)
case 3:return A.h(null,w)}})
return A.i($async$UO,w)},
a6F(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZ9()
x=3
return A.b(B.c8j(e,d.a,u),$async$a6F)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6F,w)},
Nk(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RE&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b3(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6F(p,f),$async$Nk)
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
return A.b(B.c8e(o,p,u,f),$async$Nk)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c8f(o,p,f,t),$async$Nk)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c8d(o,u,p,f),$async$Nk)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nk,w)},
aZc(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8l(e,d),$async$aZc)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UQ(!1,!0,d,e),$async$aZc)
case 4:u=g
if(u!=null){t=u.b
v=new A.PT(u.a,D.zi,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZc,w)},
c8l(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c8l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UK(d,s,0,1),$async$c8l)
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
return A.i($async$c8l,w)},
c8m(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c8m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6G(null,d,e),$async$c8m)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h8e(u)
if(t.length>800){v=null
x=1
break}v=new A.PT(d.length,D.dBn,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8m,w)},
aoT(d,e,f){return B.hCv(d,e,f)},
hCv(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoT=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d1(g,"\ufeff"))g=J.n8(g,1)
x=B.fT2(g)?3:4
break
case 3:x=5
return A.b(B.c8g(g),$async$aoT)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d1(g,"NGMYDOCSYNC4|")){s=C.a.i(J.n8(g,13))
try{k=B.Et(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d1(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.n8(g,13))
u=9
x=12
return A.b(B.aZ5(q),$async$aoT)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UN(p,a0)
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
case 11:case 7:if(J.d1(g,"NGMYDOCSYNC0|"))try{n=B.fT1(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UN(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d1(g,"N2|")){v=B.Ir(C.a.i(J.n8(g,3)),d,a0)
x=1
break}if(J.d1(g,"NGMYDOCSYNC2|")){v=B.Ir(C.a.i(J.n8(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ir(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UN(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoT,w)},
Ir(d,e,f){return B.hCt(d,e,f)},
hCt(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ir=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b3(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b3(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.u(s)+"/manifest.json",0,null)
q=A.cD(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYY(r),$async$Ir)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYY(A.cD(s,0,null)),$async$Ir)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cm(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7T(o,r,a1,n,a2),$async$Ir)
case 11:m=a4
x=J.cm(m)?12:13
break
case 12:x=14
return A.b(B.c7S(q),$async$Ir)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UN(l,a2),$async$Ir)
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
a6G(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6G=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rt(f,r),$async$a6G)
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
return A.i($async$a6G,w)},
UN(d,e){return B.hCu(d,e)},
hCu(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UN=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.BE(i,a3,d,k,l,o),$async$UN)
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
return A.i($async$UN,w)},
Nj:function Nj(d,e){this.a=d
this.b=e},
c8n:function c8n(){},
a0M(d){var x=A.P(d).ax.a===C.I,w=x?D.aeF:D.acx,v=x?D.ag6:C.c,u=x?C.aO:C.M,t=x?C.bK:C.ak,s=x?D.adL:C.aL
return new A.aFD([w,s,v,u,t,x?C.fb:C.bR])},
hnK(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fKR(e),d,null,!0,!0,y.N)},
c82(d,e,f,g,h,i,j,k,l){return new B.UF(e,l,d,f,k,j,g,h,i,null)},
YN(d,e,f,g,h,i,j){return new B.bcH(g,h,j,e,i,d,f,null)},
fKR:function fKR(d){this.a=d},
YK:function YK(d,e){this.c=d
this.a=e},
ayL:function ayL(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2G:function d2G(d){this.a=d},
d2E:function d2E(d){this.a=d},
d2F:function d2F(d){this.a=d},
btZ:function btZ(){},
UF:function UF(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCH:function aCH(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPw:function dPw(d){this.a=d},
dOU:function dOU(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e){this.a=d
this.b=e},
dOt:function dOt(d,e,f){this.a=d
this.b=e
this.c=f},
dOs:function dOs(d){this.a=d},
dOu:function dOu(d,e){this.a=d
this.b=e},
dOz:function dOz(d,e,f){this.a=d
this.b=e
this.c=f},
dOy:function dOy(d){this.a=d},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPl:function dPl(d){this.a=d},
dOR:function dOR(d,e,f){this.a=d
this.b=e
this.c=f},
dOO:function dOO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOx:function dOx(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOY:function dOY(){},
dOD:function dOD(d){this.a=d},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPj:function dPj(d,e){this.a=d
this.b=e},
dOP:function dOP(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dPa:function dPa(d,e){this.a=d
this.b=e},
dP6:function dP6(d){this.a=d},
dP5:function dP5(d){this.a=d},
dP7:function dP7(){},
dP8:function dP8(){},
dP9:function dP9(d,e){this.a=d
this.b=e},
dPb:function dPb(){},
dPc:function dPc(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP_:function dP_(d){this.a=d},
dP0:function dP0(d){this.a=d},
dP1:function dP1(d){this.a=d},
dP2:function dP2(d){this.a=d},
dP3:function dP3(d){this.a=d},
dOA:function dOA(){},
dOB:function dOB(d){this.a=d},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOw:function dOw(d,e){this.a=d
this.b=e},
dOv:function dOv(d,e,f){this.a=d
this.b=e
this.c=f},
dOS:function dOS(d){this.a=d},
dOT:function dOT(d,e,f){this.a=d
this.b=e
this.c=f},
dOM:function dOM(d,e){this.a=d
this.b=e},
dOI:function dOI(d){this.a=d},
dOF:function dOF(d,e,f){this.a=d
this.b=e
this.c=f},
dOJ:function dOJ(d){this.a=d},
dOK:function dOK(d){this.a=d},
dOL:function dOL(){},
dON:function dON(d,e){this.a=d
this.b=e},
dOG:function dOG(d){this.a=d},
dOE:function dOE(d,e,f){this.a=d
this.b=e
this.c=f},
dOH:function dOH(){},
dOX:function dOX(d){this.a=d},
dOW:function dOW(d,e){this.a=d
this.b=e},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dPt:function dPt(d){this.a=d},
dPr:function dPr(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPu:function dPu(){},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e,f){this.a=d
this.b=e
this.c=f},
dPm:function dPm(d,e,f){this.a=d
this.b=e
this.c=f},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPq:function dPq(d,e){this.a=d
this.b=e},
ayI:function ayI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcG:function bcG(d,e,f){this.c=d
this.d=e
this.a=f},
d2C:function d2C(){},
d2D:function d2D(){},
abR:function abR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3_:function d3_(){},
d2Z:function d2Z(d){this.a=d},
YM:function YM(d,e,f){this.c=d
this.d=e
this.a=f},
ayN:function ayN(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2W:function d2W(d){this.a=d},
d2X:function d2X(d,e,f){this.a=d
this.b=e
this.c=f},
d2Y:function d2Y(d,e){this.a=d
this.b=e},
d2U:function d2U(d,e){this.a=d
this.b=e},
d2S:function d2S(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2T:function d2T(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2V:function d2V(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2O:function d2O(d){this.a=d},
YJ:function YJ(d,e,f){this.c=d
this.d=e
this.a=f},
ayK:function ayK(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2z:function d2z(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2A:function d2A(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
d2B:function d2B(d){this.a=d},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2s:function d2s(d){this.a=d},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d,e){this.a=d
this.b=e},
d2v:function d2v(d){this.a=d},
Pv:function Pv(d,e,f){this.c=d
this.d=e
this.a=f},
ayQ:function ayQ(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d3c:function d3c(d){this.a=d},
d3d:function d3d(d){this.a=d},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d,e){this.a=d
this.b=e},
d3h:function d3h(d){this.a=d},
d3j:function d3j(d){this.a=d},
d3i:function d3i(d){this.a=d},
YO:function YO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayO:function ayO(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d38:function d38(d,e){this.a=d
this.b=e},
d39:function d39(d,e){this.a=d
this.b=e},
d30:function d30(d,e,f){this.a=d
this.b=e
this.c=f},
d31:function d31(d){this.a=d},
d32:function d32(){},
d37:function d37(){},
d33:function d33(d,e){this.a=d
this.b=e},
d34:function d34(d,e){this.a=d
this.b=e},
d35:function d35(d,e){this.a=d
this.b=e},
d36:function d36(d,e){this.a=d
this.b=e},
abP:function abP(d,e){this.c=d
this.a=e},
d2r:function d2r(d){this.a=d},
YI:function YI(d){this.a=d},
ayJ:function ayJ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YP:function YP(d,e){this.c=d
this.a=e},
ayP:function ayP(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d3b:function d3b(d){this.a=d},
d3a:function d3a(d){this.a=d},
bcH:function bcH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hCw(){var x,w=$.pw(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.hs(v)},
Nl(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$Nl)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Nl)
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
return A.i($async$Nl,w)},
a6H(d){return B.hCx(d)},
hCx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6H)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6H)
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
return A.i($async$a6H,w)},
UP(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nl(),$async$UP)
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
return A.b(B.a6H(s),$async$UP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UP,w)},
UQ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c2(),$async$UQ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bn(f,!0,y.U)
else{t=A.T(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c8p(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hCw()
t=A.T(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c8q(s),t),t.k("ak.E"))
x=6
return A.b(B.Nl(),$async$UQ)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a6H(q),$async$UQ)
case 7:x=8
return A.b(B.a6I(r,u,g,s),$async$UQ)
case 8:v=new A.bo0(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UQ,w)},
aoU(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nl(),$async$aoU)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoU,w)},
c8r(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c8r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nl(),$async$c8r)
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
return A.i($async$c8r,w)},
a6I(d,e,f,g){return B.hCy(d,e,f,g)},
hCy(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6I=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoS("media",r,new B.c8o(s,e,g),f,q),$async$a6I)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UP(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6I)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UP(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a6I)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UP(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6I)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6I,w)},
Et(d,e,f){return B.hCz(d,e,f)},
hCz(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Et=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c2(),$async$Et)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoU(b3),$async$Et)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.kw,null,g),$async$Et)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoU(b3),$async$Et)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nl(),$async$Et)
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
r=a1.gL(a4)
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
a8=$.eX().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oY(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aa5(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cD(l,0,null)
x=17
return A.b(B.aYZ(k,n,o,s,b7),$async$Et)
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
a2=$.eX().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oY(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aa5(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Et)
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
return A.b(B.a6H(e),$async$Et)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Et,w)},
c8p:function c8p(){},
c8q:function c8q(d){this.a=d},
c8o:function c8o(d,e,f){this.a=d
this.b=e
this.c=f},
aPI(){var x=0,w=A.j(y.H),v,u
var $async$aPI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hNt=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aPI)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aPI)
case 3:u=$.fYc
u=u==null?null:u.bD(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aPI)
case 4:$.fYc=$.hW_=$.hW0=null
return A.h(null,w)}})
return A.i($async$aPI,w)},
fo7(d){var x=0,w=A.j(y.H),v,u
var $async$fo7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6k){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fo8(new A.bV(u,y.aY))
x=3
return A.b(u.iq(0,C.hL,new B.fo9()),$async$fo7)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fo7,w)},
hVY(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hCg(x):x},
fYg(d){var x=0,w=A.j(y.T),v,u,t
var $async$fYg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,13))
if(C.a.a0(u,"WR")){v=B.aoW(u)
x=1
break}v=B.fT1(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYg,w)},
fYf(d){var x=0,w=A.j(y.T),v,u,t
var $async$fYf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,14))
if(C.a.a0(u,"WR")){v=B.aoX(u)
x=1
break}v=B.fT1(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYf,w)},
fGt(d){var x=0,w=A.j(y.T),v
var $async$fGt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoX(d),$async$fGt)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGt,w)},
bA5(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bA5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fYf(d),$async$bA5)
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
return A.i($async$bA5,w)},
fcs(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fcs=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UJ(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BE(d.anM(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcs,w)},
Gm(d,e,f){return B.hYp(d,e,f)},
hYp(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fYg(a1),$async$Gm)
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
return A.b($.hpC().aDE(D.dpJ,null),$async$Gm)
case 4:l=d.fYc=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axz(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.foF(f,k,new B.foG(f,a2,k,j,a0,p),a2,j,a0,p,new A.bV(t,y.ch))
x=5
return A.b(l.a7o(0,new B.WR(r,"offer")),$async$Gm)
case 5:d=l
x=7
return A.b(l.akB(0),$async$Gm)
case 7:x=6
return A.b(d.a7g(0,a4),$async$Gm)
case 6:x=8
return A.b(B.fo7(l),$async$Gm)
case 8:x=9
return A.b(l.aox(),$async$Gm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hVY(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoY(m,h),$async$Gm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h8e(h)
case 11:v=new A.bnj(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gm,w)},
fo8:function fo8(d){this.a=d},
fo9:function fo9(){},
foG:function foG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foF:function foF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
foE:function foE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i_k(d){switch(d){case"new":return D.eil
case"checking":return D.eim
case"connected":return D.eio
case"completed":return D.ein
case"failed":return D.eiq
case"disconnected":return D.eir
case"closed":return D.aM2
case"count":return D.eip}return D.aM2},
i_l(d){switch(d){case"new":return D.aM3
case"gathering":return D.eis
case"complete":return D.a6k}return D.aM3},
i9z(d){switch(d){case"stable":return D.eit
case"have-local-offer":return D.eiu
case"have-local-pranswer":return D.eiw
case"have-remote-offer":return D.eiv
case"have-remote-pranswer":return D.eix
case"closed":return D.aM9}return D.aM9},
i7N(d){switch(d){case"new":return D.aM6
case"connecting":return D.aM7
case"connected":return D.aM8
case"closed":return D.a6l
case"disconnected":return D.aM5
case"failed":return D.aM4}return D.a6l},
a91:function a91(d,e){this.a=d
this.b=e},
Ol:function Ol(d,e){this.a=d
this.b=e},
WQ:function WQ(d,e){this.a=d
this.b=e},
Ok:function Ok(d,e){this.a=d
this.b=e},
EY:function EY(d,e){this.a=d
this.b=e},
cjn:function cjn(){},
fUN(d){var x=new B.EX()
x.a=d
x.b=!0
return x},
EX:function EX(){this.b=this.a=$},
a90:function a90(){},
atb:function atb(){},
WR:function WR(d,e){this.a=d
this.b=e},
fSY(){var x=0,w=A.j(y.H)
var $async$fSY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fSY,w)},
fT0(d,e,f){var x=0,w=A.j(y.T),v
var $async$fT0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mu(D.mA))){v=null
x=1
break}v=B.fGJ(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fT0,w)},
h8e(d){var x,w=F.abZ.a4a(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cJ.gct().aK(x)}return C.cJ.gct().aK(w)},
hCf(d){var x,w,v=C.cF.aK(d)
try{x=C.cf.cz(0,F.abY.bc9(v,!1))
return x}catch(w){x=C.cf.cz(0,v)
return x}},
fT1(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hCf(C.a.b3(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b3(t,w.length)
try{v=C.cf.cz(0,C.cF.aK(x))
return v}catch(u){return x}}return null},
hCg(d){var x,w,v,u,t,s=A.a([],y.s)
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
hCh(){var x,w=$.pw(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.hs(v)},
aZ4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZ4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZ4)
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
return A.i($async$aZ4,w)},
c87(d,e){return B.hCi(d,e)},
hCi(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c87=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c87)
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
return A.i($async$c87,w)},
aZ7(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZ7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ4(d),$async$aZ7)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ7,w)},
aZ6(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZ6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hCh()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c87(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aK(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aZ6)
case 3:if(!h){v=null
x=1
break}v=new A.a_P("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ6,w)},
aZ5(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZ5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZ4(o),$async$aZ5)
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
return A.i($async$aZ5,w)},
c88(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c88=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bB1("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c88)
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
return A.i($async$c88,w)},
aZ8(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZ8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.In(),$async$aZ8)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ8,w)},
aoP(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$aoP)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZ8(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoP,w)},
aoN(d,e){var x=0,w=A.j(y.H)
var $async$aoN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$aoN)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoN)
case 2:return A.h(null,w)}})
return A.i($async$aoN,w)},
a6z(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6z)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.In(),$async$a6z)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a6y(s),$async$a6z)
case 5:x=6
return A.b(B.aoN(f,u),$async$a6z)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
a6A(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6A=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6A)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.In(),$async$a6A)
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
return A.b(B.aoN(g,q),$async$a6A)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6y(u),$async$a6A)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
a6B(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6B=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6B)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.In(),$async$a6B)
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
s=B.aZ1(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6B)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a6B)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
c89(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c89=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c89)
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
return A.i($async$c89,w)},
Io(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Io=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c89(d),$async$Io)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZ8(t),$async$Io)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoO(d),$async$Io)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZ1(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoO(d),$async$Io)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Io,w)},
aoO(d){var x=0,w=A.j(y.H)
var $async$aoO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$aoO)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoO)
case 2:return A.h(null,w)}})
return A.i($async$aoO,w)},
aZ9(){var x,w=$.pw(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.hs(v)},
a6C(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fT2(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c8c(d){return B.hCk(d)},
hCk(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c8c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6C(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c8c)
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
return A.i($async$c8c,w)},
aoR(d,e){return B.hCl(d,e)},
hCl(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6C(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$aoR)
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
return A.i($async$aoR,w)},
c8e(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8e=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6C(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoR(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c8e)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8e,w)},
c8d(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6C(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoR(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c8d)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8d,w)},
c8f(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c8f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6C(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoR(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8f,w)},
c8g(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c8g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fT2(d)){v=null
x=1
break}x=3
return A.b(B.c8c(d),$async$c8g)
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
return A.i($async$c8g,w)},
a6J(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6J=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6J)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6J)
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
return A.i($async$a6J,w)},
aoV(d){return B.hCA(d)},
hCA(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$aoV)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cG,null),$async$aoV)
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
return A.i($async$aoV,w)},
aoW(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d1(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c2(),$async$aoW)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6J(),$async$aoW)
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
return A.b(B.aoV(s),$async$aoW)
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
return A.i($async$aoW,w)},
aoY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c2(),$async$aoY)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6J(),$async$aoY)
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
return A.b(B.aoV(u),$async$aoY)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoY,w)},
aoX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c2(),$async$aoX)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6J(),$async$aoX)
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
return A.i($async$aoX,w)},
anS(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.aj$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q_)){v=null
x=1
break}x=3
return A.b(p.m_(e),$async$anS)
case 3:r=g
u=4
x=7
return A.b(r.hu(C.h0),$async$anS)
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
return A.i($async$anS,w)},
i5N(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aX(C.o.u(w),5,"0")
return v},
fEW(d){return B.i5P(d)},
i5P(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fEW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eX().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").KM(d,3600),$async$fEW)
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
return A.i($async$fEW,w)},
CW(d,e,f,g,h,i){var x=null
return B.i5M(d,e,f,g,h,i)},
i5M(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CW=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h8h(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fT4(r),$async$CW)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fEW(o),$async$CW)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6D(r),$async$CW)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPi)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LI(A.a([],g))
x=15
return A.b(d.f0(0,A.au0("GET",A.cD(n,0,null))).d7(0,C.Fm),$async$CW)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6D(r),$async$CW)
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
return A.b(B.aZb(r,k),$async$CW)
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
case 10:i=B.UJ(r)
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
return A.b(B.a6D(r),$async$CW)
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
aPr(d){return B.i5O(d)},
i5O(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eX().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ij("media").W(0,d),$async$aPr)
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
return A.i($async$aPr,w)}},D,T,M,U,V,W,X,N,Y
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
B.cjo.prototype={
aDE(d,e){return this.cJb(d,e)},
cJb(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cz(t)))
t=J.k(u)
v=B.hH9(C.cJ.gct().aK(new A.da(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDE,w)}}
B.b3j.prototype={
bxy(d){var x=this,w=x.w
w.onclose=A.ho(new B.cjj(x))
w.onopen=A.ho(new B.cjk(x))
w.onmessage=A.ho(new B.cjl(x))
w.onbufferedamountlow=A.ho(new B.cjm(x))},
gdc(d){return this.x},
agU(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EX()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fUN(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$agU)
case 8:v=t.fUN(s.an3(f,0,null))
x=1
break
case 7:case 4:v=B.fUN(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agU,w)}}
B.b3k.prototype={
bxz(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cjp(x)))
w.addEventListener("icecandidate",A.ho(new B.cjq(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.cjr(x)))
w.onicegatheringstatechange=A.ho(new B.cjs(x))
w.addEventListener("signalingstatechange",A.ho(new B.cjt(x)))
if(!$.h0X())w.addEventListener("connectionstatechange",A.ho(new B.cju(x)))
w.addEventListener("negotiationneeded",A.ho(new B.cjv(x)))
w.addEventListener("track",A.ho(new B.cjw(x)))},
akB(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.ki(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akB)
case 3:t=f
v=new B.WR(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akB,w)},
a7g(d,e){return this.bn5(0,e)},
bn5(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7g)
case 2:return A.h(null,w)}})
return A.i($async$a7g,w)},
a7o(d,e){return this.bnl(0,e)},
bnl(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7o)
case 2:return A.h(null,w)}})
return A.i($async$a7o,w)},
aox(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aox=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WR(s,t?null:r.type)
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
B.abQ.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.YL.prototype={
U(){return new B.ayM()},
gde(){return this.c}}
B.ayM.prototype={
a_(){this.a1()
this.adF()},
adF(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ2(u.e,u.c),$async$adF)
case 2:t=e
if(v.c!=null)v.m(new B.d2K(v,t))
return A.h(null,w)}})
return A.i($async$adF,w)},
Q7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoK(t.e,t.c,!1),$async$Q7)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.f_P)
x=1
break}x=4
return A.b(B.a6x(u.a.c,"individual"),$async$Q7)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a5L(A.e9(new B.d2H(u),!1,null,y.H)),$async$Q7)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
J8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fm6(o),$async$J8)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6B(o.e,r,s,q),$async$J8)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eXS)
x=1
break}x=5
return A.b(B.a6x(u.a.c,"member"),$async$J8)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a5L(A.e9(new B.d2J(u),!1,null,y.H)),$async$J8)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J8,w)},
xV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6w(t.e,o,t.f,t.r,t.w,s),$async$xV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6x(u.a.c,"org_owner"),$async$xV)
case 4:x=5
return A.b(B.aoP(u.a.c),$async$xV)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fmB(o),$async$xV)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6z(s,t,o,q.c),$async$xV)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eXP)
x=1
break}x=10
return A.b(B.aoP(u.a.c),$async$xV)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a5L(A.e9(new B.d2I(u),!1,null,y.H)),$async$xV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xV,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jh:C.pJ,q=B.fT_(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.fN,24)],y.V)
v=y.p
w=A.p(t,A.w(A.a([A.p(t,D.fiC,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBE,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZU,C.n),t,t,t,t,C.eD,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lF(new B.d2M(),t),C.N,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.ach(C.eT,C.ayN,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gccX(),t),C.ac],v))
p.push(new B.ach(C.oT,C.a2h,"Team Member","Sign in with your organization access code + password",u.gcdO(),t))
p.push(C.ac)
p.push(new B.ach(C.alo,C.a3N,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcdj(),t))
return A.c6(t,r,A.bl(!0,A.cc(A.w(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiD,t,t,C.ah),!0,!1,C.ae,!0,!0),t,!1,!1,t,t)}}
B.ach.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gH(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.eB(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eo,A.E(A.w(A.a([A.d(t.e,s,s,s,s,s,s,C.on,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BE,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aBj.prototype={}
B.aEp.prototype={}
B.jm.prototype={
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
bbC(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jm(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cHG(d){return this.bbC(null,d)},
aDp(d){return this.bbC(d,null)}}
B.UD.prototype={
U(){return new B.aCF(new A.cu(null,y.A))},
gde(){return this.c}}
B.aCF.prototype={
a_(){this.a1()
this.adG()},
adG(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BD(u.a.c),$async$adG)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOp(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adG,w)},
adH(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fD(s)),$async$adH)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.f0J)
case 1:return A.h(v,w)}})
return A.i($async$adH,w)},
Zt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anS(s.d,4),$async$Zt)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_my_code_"+m+".png"),$async$Zt)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zt,w)},
ahm(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9F("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahm,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jh:C.pJ,m=o?C.c:C.M,l=A.ez(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mf
else if(q.e==null)x=A.au(new A.D(C.eD,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aF.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2J,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aid,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.mI,w,C.kG,new A.eH(A.p(p,A.pR(p,p,!1,B.hCb(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kG,A.B(A.a([A.E(A.er(N.C5,C.U3,q.gc68(),p),1),C.at,A.E(A.dn(C.yF,C.a8A,q.gc69(),A.bm(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.er(M.a16,D.fxo,q.gcsx(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.ME,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.UH.prototype={
U(){return new B.aCI(new A.ar(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.aCI.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Im(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Im(u.d.a.a)
if(t==null){u.m(new B.dPy(u))
x=1
break}u.m(new B.dPz(u))
s=u.a
r=s.c
x=3
return A.b(B.a6v(s.d,new B.dPA(u),t,r),$async$Zu)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPB(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zu,w)},
a1D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cm(r.a.d)){x=1
break}r.m(new B.dPC(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rt(r.a.c,q),$async$a1D)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPD(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahi(p,m,l,j,k),$async$a1D)
case 8:o=e
if(r.c!=null)r.m(new B.dPE(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dPF(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPG(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1D,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeF:D.acx,h=j?D.ag6:C.c,g=j?C.aO:C.M,f=j?C.bK:C.ak,e=j?D.adL:C.aL
i=[i,e,h,g,f,j?C.fb:C.bR]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.ez(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNw,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eo,A.E(A.w(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fC,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2J,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.um(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhW()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.Mz,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aF,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPH(l),k,!1,k,k,!1,k,!0,k,C.aa,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m6,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Ll(l.a.d,4)
m=A.C(new A.M(m,new B.dPI(x,new A.aFD(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lS,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bw,s,C.N,e,C.N,q,C.d7,p,C.N,A.p(k,A.w(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eu,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aF.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eWn)
else q.push(A.X(C.lq,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aP,A.de(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.iI,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bw7,k,k,C.ah),1)
u=l.f?k:l.gcsy()
t=i[3]
s=i[1]
q=A.n(16)
s=A.er(M.a16,D.fyp,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.W),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6a()
t=A.bm(C.aF,k,k,0,C.c,k,C.n9,k,new A.b7(A.n(16),C.W),k,k,k)
return A.c6(g,h,new A.an(C.V,k,C.a9,C.r,A.a([f,v,A.bl(!0,A.mE(new B.dPJ(),A.w(A.a([e,new A.D(D.bvD,A.w(A.a([s,C.N,i,C.ac,A.bG(l.f?C.rL:D.fwN,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Yr,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ae,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhW.prototype={
oB(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hg(C.bv,v.length),C.aM)}}
B.UE.prototype={
U(){return new B.aCG()}}
B.aCG.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,C.b3,C.aM),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.ar(new A.bb(x,C.b3,C.aM),v)
u.f!==$&&A.aP()
u.f=new A.ar(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.S$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.S$=x
v.P$=0
v=w.f
v===$&&A.c()
v.S$=x
v.P$=0
w.a2()},
adI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOq(r))
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
return A.b(B.a6A(p,m,n,o,C.a.i(l).length===0?null:l),$async$adI)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.f0k)
s=[1]
x=4
break}p.I(y.q).f.R(D.eZY)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOr(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adI,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jh:C.pJ,q=A.ez(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fpr,s,s,s,1,s,!0),p=A.p(s,D.bnZ,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GP,C.n),s,s,s,s,C.aa,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bUt,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bUo,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUE,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6b()
u=A.bm(C.aF,s,s,s,s,C.fO,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mI,A.bG(t.r?C.rL:C.aS_,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.aa,s,s,C.ah),s,!1,!1,s,s)}}
B.abx.prototype={}
B.buk.prototype={
a4q(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anM()))
x=3
return A.b(B.R_(t,s),$async$a4q)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4q,w)},
gde(){return this.a}}
B.Nj.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.YK.prototype={
U(){return new B.ayL(new A.ar(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.ayL.prototype={
a_(){this.a1()
$.aV.x1$.push(new B.d2G(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6h(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0M(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.jh:v.a[0],p=A.n(24),o=A.I(C.aF.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.fN,32)],n),l=A.p(w,T.ao_,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cz,16)],n),C.aoN,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.um(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.btZ()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fx,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.b_0),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2E(x),w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m6,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nw,new B.d2F(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.n(14),C.W),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cH,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Ku,A.c0(new A.D(C.xX,A.w(A.a([l,C.aP,k,C.N,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c0(A.aF(!1,C.a1,!0,w,A.aK(!1,A.n(14),!0,D.ecg,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6g(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.Ol,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.MG,C.d3,w,w,w)}}
B.btZ.prototype={
oB(d,e){return e.akw(e.a.toUpperCase())}}
B.UF.prototype={
U(){return new B.aCH(A.a([],y.r),A.aY(y.N))},
gde(){return this.c}}
B.aCH.prototype={
a_(){var x=this
x.a1()
x.tI()
x.w=A.dv(C.jm,new B.dPw(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UO()
this.a2()},
a0w(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ni(u.a.c),$async$a0w)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AH(u.a.c),$async$a0w)
case 4:u.m(new s.dOU(u,e))
u.i4("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0w,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ni(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AH(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dOV(u,s))
if(t>0)u.i4("Received "+A.u(t)+" file(s) via My Code.")
u.Nw(u.d)
B.BD(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
Nw(d){return this.bBx(d)},
bBx(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6F(r,u.a.c),$async$Nw)
case 8:p=f
if(u.c==null){x=1
break}new B.dOt(u,r,p).$0()
u.c.ej()
case 7:if(!(C.a.a0(r.c,"video/")||r.mu(D.mA))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UM(r,u.a.c),$async$Nw)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AH(u.a.c),$async$Nw)
case 12:u.m(new o.dOu(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nw,w)},
NT(d){return this.bHN(d)},
bHN(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6F(d,u.a.c),$async$NT)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOz(u,d,t))
x=6
return A.b(A.fM(new A.fD(t)),$async$NT)
case 6:u.i4("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fD(r.toUpperCase())),$async$NT)
case 7:u.i4("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NT,w)},
i4(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDa(d,e)},
cDa(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPk(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPl(r))
$.eQ.mp()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUF(){var x=this.a
return x.f||x.r||x.w},
I3(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUF()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c85(s,n,r,q,o,t),$async$I3)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i4("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fyp(o,u.a.c),$async$I3)
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
return A.b(B.CY(s,o,r,q,n,t),$async$I3)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I3,w)},
a_A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoP(u.a.c),$async$a_A)
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
return A.b(A.a4(t,!1).cm(A.e9(new B.dOR(u,r,q),!1,null,y.H)),$async$a_A)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_A,w)},
a0G(d){return this.cm5(d)},
cm4(){return this.a0G(1)},
cm5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUF()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoM(u.a.c),$async$a0G)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0G,w)},
abH(d,e,f){return this.bYt(d,e,f)},
bYt(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4(e)
x=1
break}x=3
return A.b(u.tJ(new B.dOO(u,d,null,e,f),"Uploading\u2026"),$async$abH)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abH,w)},
bBF(){B.hmX(!1,new B.dOx(this))
return},
cr6(){this.m(new B.dOZ(this))},
axZ(){var x=0,w=A.j(y.H),v=this
var $async$axZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bBF()
return A.h(null,w)}})
return A.i($async$axZ,w)},
abD(){var x=0,w=A.j(y.H),v=this
var $async$abD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dOD(v),"Importing\u2026"),$async$abD)
case 2:return A.h(null,w)}})
return A.i($async$abD,w)},
S9(d){return this.cCz(d)},
cCz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mu(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cm(A.e9(new B.dPh(u,d),!1,null,y.H)),$async$S9)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mu(D.Qh)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cm(A.e9(new B.dPi(u,d),!1,null,y.H)),$async$S9)
case 8:x=1
break
case 7:x=u.bZa(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cm(A.e9(new B.dPj(u,d),!1,null,y.H)),$async$S9)
case 11:x=1
break
case 10:u.i4("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
bZa(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oF(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHI,C.a.b3(x,w+1).toLowerCase())},
af6(d){return this.cd0(d)},
cd0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mu(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cm(A.e9(new B.dOP(u,d),!1,null,y.H)),$async$af6)
case 5:x=1
break
case 4:u.m(new B.dOQ(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af6,w)},
Rv(d){return this.cu2(d)},
cu2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p8(t,s.c,s.f),$async$Rv)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPa(u,d),"Preparing QR\u2026"),$async$Rv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rv,w)},
ahM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPb(),A.T(t).k("M<1,m>")).fM(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPc(q),s),s.k("J.E"))
if(r.length===0){u.i4("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rv(r),$async$ahM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
ahF(d){return this.ctA(d)},
ctA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0M(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dP4(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahF)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S9(d)
break
case"qr":u.Rv(A.a([d],y.r))
break
case"send_my_code":u.cdD(A.a([d],y.r))
break
case"save":u.ah0(d)
break
case"delete":u.IU(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahF,w)},
Xo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dOA(),A.T(t).k("M<1,m>")).fM(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dOB(q),s),s.k("J.E"))
if(r.length===0){u.i4("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p8(t,s.c,s.f),$async$Xo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dOC(u,r),"Preparing file\u2026"),$async$Xo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xo,w)},
agc(d){return this.cks(d)},
cks(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hnK(d,!1),$async$agc)
case 3:s=f
r=s==null
q=B.a6C(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i4("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agc,w)},
afc(){var x=0,w=A.j(y.H),v=this,u
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fG0(u,v.a.c),$async$afc)
case 2:return A.h(null,w)}})
return A.i($async$afc,w)},
bBE(){B.hmX(!1,new B.dOw(this,null))
return},
J7(d,e){return this.cdE(d,e)},
b_E(d){return this.J7(null,d)},
cdD(d){return this.J7(d,null)},
cdE(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dOS(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xe.c8().an5(!0,C.a_i,!1),$async$J7)
case 10:r=g
if(r==null||J.cm(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dOT(l,s,r),"Preparing\u2026"),$async$J7)
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
return A.b(B.bCa(p,l,e,s.a.c),$async$J7)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J7,w)},
Ij(d){return this.bYg(d)},
bYg(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ij=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hCa(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_E(t),$async$Ij)
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
return A.b(u.tJ(new B.dOM(u,d),"Receiving video\u2026"),$async$Ij)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dON(u,d),"Receiving\u2026"),$async$Ij)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ij,w)},
Ea(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ea=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CS()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agc(t),$async$Ea)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ij(s),$async$Ea)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cm(A.e9(new B.dOX(u),!1,null,y.N)),$async$Ea)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$Ea)
case 10:x=1
break
case 9:x=11
return A.b(u.Ij(C.a.i(r)),$async$Ea)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ea,w)},
ah0(d){return this.cpG(d)},
cpG(d){var x=0,w=A.j(y.H),v=this
var $async$ah0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dOW(v,d),"Saving\u2026"),$async$ah0)
case 2:return A.h(null,w)}})
return A.i($async$ah0,w)},
IU(d){return this.bK6(d)},
bK6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l6(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IU)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c88(t),$async$IU)
case 6:case 5:s=d.a
x=7
return A.b(B.Es(u.a.c,s),$async$IU)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IU)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IU,w)},
ahS(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0M(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dPg(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahS)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afc()
break
case"import":u.abD()
break}case 1:return A.h(v,w)}})
return A.i($async$ahS,w)},
c6e(d){var x=d.c
if(C.a.a0(x,"video/")||d.mu(D.mA))return C.q8
if(C.a.a0(x,"image/")||d.mu(D.Qh))return C.u1
if(C.a.t(x,"pdf"))return E.NS
return D.alQ},
B(d){var x,w,v=this,u=null,t=B.a0M(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.GH,u,u,u,new B.dPr(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bO2,u,u,u,v.e?u:v.gcdk(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcr5()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bIl:E.ame,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a13,u,u,u,v.e?u:v.gc6f(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.o5,u,u,u,v.e?u:v.gb0L(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.bPL,u,u,u,v.e?u:new B.dPs(v),u,u,u,u,"More options",u))
q=A.ez(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lF(new B.dPt(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.P(d).ax.a===C.I?0.12:0.08),C.aF.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m5(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayI(C.jr,s,!0,t,w?u:v.gcu3(),u),1)
x.push(new A.D(D.bup,A.mE(new B.dPu(),A.B(A.a([s,C.at,A.E(new B.ayI(C.vQ,"Export",!1,t,w?u:v.gbNO(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iJ,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcG(t,v.e?u:v.gb0L(),u)
else s=A.k9(!0,u,u,new B.dPv(v,t),s,u,D.buh,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.V,u,C.a9,C.r,A.a([p,n,A.w(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayI.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bm(C.aF,t,t,0,C.c,t,C.vx,t,new A.b7(s,C.W),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cj,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vx,t,new A.b7(s,C.W),new A.az(v,1,C.q,-1),t,t,t,t)
return A.er(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bcG.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.au(A.mE(new B.d2C(),new A.D(E.Zm,A.w(A.a([A.mE(new B.d2D(),A.p(x,A.X(C.yh,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.et,C.ik,x,x,new A.bp(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o5,D.fBX,this.d,A.bm(C.aF,x,x,x,C.c,x,C.Zh,x,new A.b7(A.n(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.B3,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.abR.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dD(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aF.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mu(D.mA))p=D.dff
else{p=C.a.a0(p,"image/")||i.mu(D.Qh)
n=y.O
p=p?A.a([C.cN,C.aF],n):A.a([C.aK.j(0.85),C.aF.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapb()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mu(D.mA))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.av,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fM,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mu(D.mA)))l.push(A.fQH(C.aF,!1,j,j,j,!1,j,j,new B.d2Z(k),j,j,new A.b7(A.n(5),C.W),j,j,!1,u))
x=A.X(C.o0,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mE(new B.d3_(),new A.D(C.e8,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.D(C.YO,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cw("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.YM.prototype={
U(){return new B.ayN()},
gde(){return this.c}}
B.ayN.prototype={
a_(){this.a1()
this.xL()},
q(){B.hCp(this.e)
this.a2()},
xL(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xL=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rt(o.c,o.d),$async$xL)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hCs(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hCr(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2W(s))
x=1
break}s.m(new B.d2X(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d2Y(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xL,w)},
a1C(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rt(t.c,t.d),$async$a1C)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eYo)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahi(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1C)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1C,w)},
bY9(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ko(u,C.A,v,new B.d2U(w,t),C.fZ,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gal(t))x=A.fO(t,C.A,v,new B.d2V(w),C.fZ,C.dv,!0,v,!1,v,v)
else return C.bI
return A.uv(C.ae,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0M(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.C6,u,u,u,v.gb4y(),u,u,u,u,"Share / save",u))
r=A.ez(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ej
else{q=v.r
if(q!=null)t=new A.D(C.eD,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eD,A.w(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aP,A.dn(C.C6,D.fkS,v.gb4y(),A.bm(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bY9()}return A.c6(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.YJ.prototype={
U(){return new B.ayK(A.ai6(),C.bB,C.bB)},
gde(){return this.c}}
B.ayK.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fv(w,A.a6(w).k("fv<1>")).il(new B.d2z(v))
x.gcQx().il(new B.d2A(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fv(x,A.a6(x).k("fv<1>"))}if(x==null)x=C.b59
x.il(new B.d2B(v))
v.xL()},
xL(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xL=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rt(p.c,p.d),$async$xL)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2s(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a2R(r,s.a.d.c)),$async$xL)
case 8:if(s.c==null){x=1
break}s.m(new B.d2t(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d2u(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xL,w)},
Zv(){var x=0,w=A.j(y.H),v=this,u
var $async$Zv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h5(0),$async$Zv)
case 5:x=3
break
case 4:x=6
return A.b(u.ip(0),$async$Zv)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zv,w)},
aSx(d){var x=d.a
return C.a.aX(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aX(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0M(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.ez(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ej
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJk,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Ol,C.n),o,88,o,o,o,o,o,88)
t=A.l_(C.aF,o,o,m,0,new B.d2v(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aSx(p.w)+" / "+p.aSx(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bm(C.aF,o,o,o,o,D.eUR,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yq:C.j2,o,o,o,o,o)
x=A.w(A.a([u,C.kG,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6i(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c6(v,w,A.au(new A.D(C.r5,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pv.prototype={
U(){return new B.ayQ()},
gde(){return this.c}}
B.ayQ.prototype={
a_(){this.a1()
this.Pu()},
Pu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fT0(o.c,o.d,new B.d3c(s)),$async$Pu)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d3d(s))
x=1
break}s.e=r
q=O.hZh(r)
if(q==null){s.m(new B.d3e(s))
x=1
break}s.d=q
q.aQ(0,s.gb_s())
x=8
return A.b(q.ik(0).d7(0,C.r1),$async$Pu)
case 8:if(s.c==null){x=1
break}s.m(new B.d3f(s))
x=9
return A.b(q.pX(0),$async$Pu)
case 9:q.tl(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d3g(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pu,w)},
cbC(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d3h(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_s())
w=x.d
if(w!=null)w.q()
B.i85(x.e)
x.a2()},
adL(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZa(u.c,u.d),$async$adL)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adL,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0M(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.ez(A.a([A.aI(t,t,t,t,C.p_,t,t,t,u.gc6c(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ej
else{q=u.r
if(q!=null)s=new A.D(C.eD,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahB(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.a9,C.r,A.a([new A.Ab(s,t),A.aB(t,A.D7(A.p(t,A.X(q?I.yq:C.j2,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d3j(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.YO.prototype={
U(){return new B.ayO(new A.cu(null,y.A))}}
B.ayO.prototype={
gcCT(){var x,w,v=this.a
if(v.e!==D.RF)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcCx(){var x,w,v=this.a
if(v.e!==D.zi)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcCT()
if(x!=null){v.Qw(x)
v.e=A.dv(R.Fp,new B.d38(v,x))}w=v.gcCx()
if(w!=null){v.Qv(w)
v.f=A.dv(C.fW,new B.d39(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qv(d){return this.ciF(d)},
ciF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoU(d),$async$Qv)
case 3:t=f
x=4
return A.b(B.c8r(d),$async$Qv)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d30(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qv,w)},
Qw(d){return this.ciG(d)},
ciG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fGt(d),$async$Qw)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bA5(t),$async$Qw)
case 4:if(u.c==null){x=1
break}u.m(new B.d31(u))
u.c.I(y.q).f.R(D.aOU)
case 1:return A.h(v,w)}})
return A.i($async$Qw,w)},
gc2c(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6d(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CS()){t=u.c
if(t!=null)t.I(y.q).f.R(D.f0u)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cm(A.e9(new B.d32(),!1,null,y.N)),$async$a1o)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bA5(s),$async$a1o)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aOU)
case 1:return A.h(v,w)}})
return A.i($async$a1o,w)},
a9y(d){return this.bHO(d)},
bHO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fD(C.d.aH(t,", "))),$async$a9y)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9y,w)},
adJ(d){return this.bHy(d)},
bHy(d){var x=0,w=A.j(y.H),v=this
var $async$adJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fD(v.a.c)),$async$adJ)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eYS)
return A.h(null,w)}})
return A.i($async$adJ,w)},
a1j(d){return this.cpI(d)},
cpI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anS(s.d,4),$async$a1j)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_doc_share_qr.png"),$async$a1j)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1j,w)},
gaVN(){var x,w=this.a
if(w.e!==D.HS)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b3(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b3(x,13))
return null},
a9v(d){return this.bHH(d)},
bHH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVN()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fD(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9v)
case 3:if(d.e!=null)d.I(y.q).f.R(D.f_u)
case 1:return A.h(v,w)}})
return A.i($async$a9v,w)},
adK(){var x=0,w=A.j(y.H),v=this,u
var $async$adK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UO(),$async$adK)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adK,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0M(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HS&&i!==D.RF&&i!==D.zi
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.ez(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HS||t===D.RF||t===D.zi?l:A.aI(l,l,l,l,C.l2,l,l,l,m.gaYG(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aF.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pR(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bw,A.d(""+q.d+" file(s) \xb7 "+m.gc2c(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HS){t=C.aF.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mr,l,l,l)],p))}q.push(C.aP)
q.push(A.d(m.gc6d(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bTx,D.fu2,new B.d33(m,d),l)],p))}if(m.a.e===D.HS&&m.gaVN()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bQ4,D.fqN,new B.d34(m,d),l)],p))
if(m.a.e===D.zi){x=(m.w?C.dz:C.aF).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Em:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mr,l,l,l)],p))}if(m.a.e===D.RF){x=(m.r?C.dz:C.aF).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Em:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mr,l,l,l),C.ac,A.dn(D.bLO,D.fx5,m.gcq5(),A.bm(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oq(i,A.c6(v,w,new A.D(C.aa,A.w(A.a([A.E(A.p(l,A.w(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.aa,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.er(N.C5,C.U3,new B.d35(m,d),l),1),C.at,A.E(A.dn(C.yF,C.a8A,new B.d36(m,d),A.bm(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bG(C.zQ,m.gaYG(),A.bm(C.aK,l,l,l,l,C.fO,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d37(),y.C)}}
B.abP.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cc(A.w(A.a([w,C.aP,A.p(x,A.pR(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bG(C.wC,new B.d2r(d),x)],u),x,x,C.mP,v,x,x,x,x,D.fjT,x)}}
B.YI.prototype={
U(){return new B.ayJ(A.zk(C.xE,C.nC,C.uf))}}
B.ayJ.prototype={
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
return A.c6(A.ez(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.frg,x,x,x,1,x,!0),C.w,A.zj(this.d,C.bU,this.gawD()),x,!1,!1,x,x)}}
B.YP.prototype={
U(){return new B.ayP(A.zk(C.xE,C.nC,C.uf))},
gde(){return this.c}}
B.ayP.prototype={
bZc(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afz(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.S0("text/plain"),$async$afz)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.f0o)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afz,w)},
aak(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aak=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hnK(p,!0),$async$aak)
case 3:t=e
p=t==null
s=B.a6C(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eXZ)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aak,w)},
q(){this.d.q()
this.a2()},
awE(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZc(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.an7,v,v,v,w.gbNk(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a1a,v,v,v,w.gcg2(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.ez(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.tY:P.NF,v,v,v,v,v),v,v,v,new B.d3b(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fxX,v,v,v,1,v,!0)
u=A.zj(w.d,C.bU,w.gawD())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.V,v,C.a9,C.r,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ei1],s),v),v,!1,!1,v,v)}}
B.bcH.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oK
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oK:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.D(C.Zs,A.B(A.a([u,C.bd,A.E(A.w(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.eA,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a91.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Ol.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.WQ.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Ok.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.EY.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cjn.prototype={}
B.EX.prototype={}
B.a90.prototype={}
B.atb.prototype={}
B.WR.prototype={}
var z=a.updateTypes(["aA<~>()","R(jm)","m(jm)","UF(Y)","~()","YL(Y)","H(H,jm)","Pv(Y)","~(m0)","cp(EX)","aA<jm?>(@)","UD(Y)","UH(Y)","D(jm)","jm(@)","a5<m,@>(jm)","YK(Y)","UE(Y)","YM(Y)","YJ(Y)","YO(Y)","abP(Y)","ai<jm>()","YP(Y)","abR(Y,H)","YI(Y)","a5<m,aD>(jm)","cp(WQ)","cp(a90)","aA<cp>(EX)"])
B.cjj.prototype={
$1(d){var x=this.a
x.x=D.aM1
x.y.M(0,D.aM1)},
$S:69}
B.cjk.prototype={
$1(d){var x=this.a
x.x=D.aM0
x.y.M(0,D.aM0)},
$S:69}
B.cjl.prototype={
$1(d){var x=this.a
x.agU(A.aOa(d.data)).bJ(new B.cji(x),y.b)},
$S:69}
B.cji.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cjm.prototype={
$1(d){},
$S:69}
B.cjp.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hH8(d.channel))},
$S:15}
B.cjq.prototype={
$1(d){},
$S:15}
B.cjr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i_k(w.iceConnectionState)
x.cx=w
if($.h0X())switch(w.a){case 0:x.cy=D.aM6
break
case 1:x.cy=D.aM7
break
case 3:x.cy=D.aM8
break
case 5:x.cy=D.aM4
break
case 6:x.cy=D.aM5
break
case 7:x.cy=D.a6l
break
default:break}},
$S:146}
B.cjs.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i_l(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:146}
B.cjt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i9z(w.signalingState)},
$S:146}
B.cju.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i7N(w.connectionState)},
$S:146}
B.cjv.prototype={
$1(d){},
$S:146}
B.cjw.prototype={
$1(d){},
$S:15}
B.fhY.prototype={
$1(d){var x=y.F.a(new A.rR([],[]).pF(d.target.result,!1)),w=C.xF.t(x.objectStoreNames,"blobs")
if(!w)C.xB.KK(x,"blobs")},
$S:198}
B.fFP.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w3.fg(this.b)
$.eQ.mp()
this.c.$1(d)},
$S:355}
B.fFR.prototype={
$1(d){return this.a.$1(B.hQ1(this.b,this.c))},
$S:35}
B.fFQ.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fFO.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fG3.prototype={
$1(d){var x=this
return B.hd9(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fG4.prototype={
$1(d){var x=this
return B.hd9(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fka.prototype={
$1(d){var x=this
return B.c82(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2K.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2H.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c82(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2J.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c82(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2I.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c82(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2M.prototype={
$4(d,e,f,g){var x=null
return A.jG(A.B(A.a([A.aI(x,x,x,x,D.bKp,x,x,x,new B.d2L(d),x,x,x,x,x,x),A.E(A.EI(D.Q0,!0,x,C.a0d,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Q0,x,g,C.aiY,0,e,f)},
$C:"$4",
$R:4,
$S:362}
B.d2L.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fm9.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eI,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.boi,C.f,v,v,D.b0F,v,v,v,v,D.aiO,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOB,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.D(C.FC,A.w(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anm,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.bw,A.B(A.a([A.E(A.dT(C.dh,new B.fm7(d),v),1),C.at,A.E(A.bG(D.fpP,new B.fm8(p,x,d),A.bm(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mn,v,v,v,v),v)},
$S:60}
B.fm7.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fm8.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eZ6)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aBj(v,x))},
$S:0}
B.fmD.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eI,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bo8,C.f,w,w,D.b27,w,w,w,w,D.aiO,w,w,1/0),new A.D(C.FC,A.w(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fY_(u,"Organization name",C.G3,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fY_(u,"Access code",C.nf,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fY_(u,"Member password",H.GC,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.bw,A.bG(D.fy2,new B.fmC(r,q,p,d),A.bm(C.aF,w,w,w,w,C.fO,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mn,w,w,w,w),w)},
$S:60}
B.fmC.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eZb)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aEp(u,x,w))},
$S:0}
B.c7U.prototype={
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
return A.b(A.vh(p,null).d7(0,C.Yq),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BE(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c8_.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c80.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c81.prototype={
$1(d){return d.b},
$S:z+2}
B.c7W.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7X.prototype={
$1(d){return d.b},
$S:z+2}
B.c7V.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c7Y.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c7Z.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fG1.prototype={
$1(d){return new B.UD(this.a,null)},
$S:z+11}
B.fG2.prototype={
$1(d){return new B.UH(this.a,this.b,this.c,null)},
$S:z+12}
B.dOp.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPy.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPz.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPA.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPx(x,d))},
$S:2}
B.dPx.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPB.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPC.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPD.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPE.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPF.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dPG.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPJ.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*14)),e)},
$S:101}
B.dPH.prototype={
$1(d){var x=this.a
return x.f?null:x.Zu()},
$S:2}
B.dPI.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mu(D.Qh))s=C.u1
else s=C.a.a0(s,"video/")||d.mu(D.mA)?C.q8:D.alQ
x=this.b.a
w=y.p
return new A.D(C.kU,A.B(A.a([A.p(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.w(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapb(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOq.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOr.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c83.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:91}
B.c84.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:91}
B.fGL.prototype={
$2(d,e){return e===this.a},
$S:283}
B.ff9.prototype={
$1(d){return J.k(d)},
$S:17}
B.fkm.prototype={
$1(d){var x=this.b
B.hO4(C.FR.ga64(this.a)).bJ(x.gcFZ(x),y.H)},
$S:126}
B.fkn.prototype={
$1(d){return this.a.d5(0,null)},
$S:126}
B.fko.prototype={
$0(){return null},
$S:11}
B.c8i.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fkp.prototype={
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
return new B.jm(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fox.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fiP.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fiQ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c8n.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.fKR.prototype={
$1(d){return new B.YK(this.a,null)},
$S:z+16}
B.d2G.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:9}
B.d2E.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d2F.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dPw.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0w()},
$S:12}
B.dOU.prototype={
$0(){var x=J.bDf(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOV.prototype={
$0(){var x=J.bDf(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOt.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dOs(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDp(this.c)}},
$S:0}
B.dOs.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOu.prototype={
$0(){var x=J.bDf(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOz.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dOy(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDp(this.c)}},
$S:0}
B.dOy.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPk.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPl.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dOR.prototype={
$1(d){return new B.UE(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I3(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UI(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a3(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0G(s.gL(t)),$async$$0)
case 8:case 7:r.i4(s.gal(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOx.prototype={
$1(d){this.a.abH(d,"No files selected.","Added")},
$S:355}
B.dOZ.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dOY(),A.T(x).k("M<1,m>")))},
$S:0}
B.dOY.prototype={
$1(d){return d.a},
$S:z+2}
B.dOD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xe.c8().cSu(C.a_i,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gal(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jr(o,0,null)}u=2
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
return A.b(B.aoT(null,m,o.a.c),$async$$0)
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
B.dPh.prototype={
$1(d){return new B.Pv(this.a.a.c,this.b,null)},
$S:z+7}
B.dPi.prototype={
$1(d){return new B.YM(this.a.a.c,this.b,null)},
$S:z+18}
B.dPj.prototype={
$1(d){return new B.YJ(this.a.a.c,this.b,null)},
$S:z+19}
B.dOP.prototype={
$1(d){return new B.Pv(this.a.a.c,this.b,null)},
$S:z+7}
B.dOQ.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dPa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I3(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6E(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i4("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cm4(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.T(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dP6(p),r),new B.dP7(),r.k("M<ak.E,m>")).c0(0,new B.dP8())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cm(A.e9(new B.dP9(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p7(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UO(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP6.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dP5(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dP5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dP7.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dP8.prototype={
$1(d){return d.length!==0},
$S:3}
B.dP9.prototype={
$1(d){var x=this.a
return new B.YO(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPb.prototype={
$1(d){return d.a},
$S:z+2}
B.dPc.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dP4.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kT,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapb(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mu(D.mA)?C.u3:C.oX
p=!x||p.mu(D.mA)?"Play video":"View"
return A.c0(A.bl(!0,new A.D(C.Bf,A.w(A.a([q,o,t,C.aB,B.YN(!1,u,!1,w,p,new B.dP_(d),v),B.YN(!1,u,!1,C.jr,"Share via QR",new B.dP0(d),"Letters/numbers QR code"),B.YN(!1,u,!1,D.a0j,"Send to their Code",new B.dP1(d),"Enter someone else's personal code"),B.YN(!1,u,!1,C.hB,"Download / save",new B.dP2(d),v),C.am,B.YN(!1,u,!0,C.ef,"Delete",new B.dP3(d),v)],y.p),C.ai,v,C.e,C.Q,0,C.p),v),!0,!1,C.ae,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.W,C.W,C.W),C.kL,v,v,C.n),C.be)},
$S:689}
B.dP_.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dP0.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dP1.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dP2.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dP3.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dOA.prototype={
$1(d){return d.a},
$S:z+2}
B.dOB.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOC.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6G(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gp(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p7(s.c,s.f),$async$$0)
case 4:u.i4(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOw.prototype={
$1(d){var x=this.a
x.tJ(new B.dOv(x,d,this.b),"Preparing\u2026")},
$S:355}
B.dOv.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i4("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UI(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cm(s)){t.i4("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCa(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOS.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dOT.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fT3(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gm(new B.dOI(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i4("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOJ(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOK(s))
case 5:x=8
return A.b(r.b.iq(0,C.Fm,new B.dOL()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a3(t)
if(q.gal(t)){s.i4("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i4("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOI.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOF(x,d,e))},
$S:230}
B.dOF.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOJ.prototype={
$1(d){return new B.abP(this.a.a,null)},
$S:z+21}
B.dOK.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOL.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dON.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Im(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6u(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_E(B.Im(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoT(new B.dOG(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cm(r)){if(B.fT2(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i4(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cE(r)
p=o.eP(r,new B.dOH()).gL(0)
s.i4(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOG.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOE(x,d,e))},
$S:230}
B.dOE.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOH.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.dOX.prototype={
$1(d){return new B.YP(this.a.a.c,null)},
$S:z+23}
B.dOW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZa(u.a.c,v.b),$async$$0)
case 2:t.i4(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPg.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aF.j(0.35)
return A.c0(A.bl(!0,new A.D(C.Bf,A.w(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kT,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YN(!0,w,!1,C.nf,"My Code",new B.dPd(d),"Your personal code & QR \u2014 others send docs to you"),B.YN(!1,w,!1,D.a0j,"Send to their Code",new B.dPe(this.a,d),"Enter someone else's 5-digit code + letter"),B.YN(!1,w,!1,S.yy,"Import backup",new B.dPf(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.Q,0,C.p),x),!0,!1,C.ae,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.W,C.W,C.W),C.kL,x,x,C.n),C.be)},
$S:689}
B.dPd.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dPe.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bBE()},
$S:0}
B.dPf.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dPt.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Iw(D.Q0,x,C.a0d,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cS(C.d.gH(D.Q0).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:652}
B.dPr.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dPs.prototype={
$0(){this.a.ahS()
return null},
$S:0}
B.dPu.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*10)),e)},
$S:101}
B.dPv.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abR(e,w,v,this.b,x.e,x.c6e(w),new B.dPn(x,w),new B.dPo(x,v,w),new B.dPp(x,w),new B.dPq(x,w),null)},
$S:z+24}
B.dPn.prototype={
$0(){this.a.af6(this.b)
return null},
$S:0}
B.dPo.prototype={
$0(){var x=this.a
return x.m(new B.dPm(x,this.b,this.c))},
$S:0}
B.dPm.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dPp.prototype={
$0(){this.a.NT(this.b)
return null},
$S:0}
B.dPq.prototype={
$0(){this.a.ahF(this.b)
return null},
$S:0}
B.d2C.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*18)),e)},
$S:101}
B.d2D.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:137}
B.d3_.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.x(0,(1-e)*14)),e)},
$S:101}
B.d2Z.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d2W.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2X.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2Y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2U.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gal(w))return A.fO(w,C.A,x,new B.d2S(this.a),C.fZ,C.dv,!0,x,!1,x,x)
$.aV.x1$.push(new B.d2T(this.a))
return C.bI},
$S:139}
B.d2S.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d2Q(this.a))
return C.bI},
$S:186}
B.d2Q.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2N(x))},
$S:9}
B.d2N.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2T.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2P(x))},
$S:9}
B.d2P.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2V.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d2R(this.a))
return C.bI},
$S:186}
B.d2R.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2O(x))},
$S:9}
B.d2O.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2z.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2y(x,d))},
$S:1743}
B.d2y.prototype={
$0(){return this.a.f=this.b===C.uC},
$S:0}
B.d2A.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2x(x,d))},
$S:9}
B.d2x.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2B.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2w(x,d))},
$S:9}
B.d2w.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2s.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d2t.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d2u.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d2v.prototype={
$1(d){return this.a.d.MT(0,A.dD(0,0,0,C.k.V(d),0,0))},
$S:7}
B.d3c.prototype={
$0(){var x=this.a.a
return B.rt(x.c,x.d)},
$S:1744}
B.d3d.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d3e.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d3f.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d3g.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d3h.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d3j.prototype={
$0(){var x=this.a
x.m(new B.d3i(x))},
$S:0}
B.d3i.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h5(0)
else x.pX(0)},
$S:0}
B.d38.prototype={
$1(d){return this.a.Qw(this.b)},
$S:12}
B.d39.prototype={
$1(d){return this.a.Qv(this.b)},
$S:12}
B.d30.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d31.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d32.prototype={
$1(d){return D.h3Q},
$S:z+25}
B.d37.prototype={
$2(d,e){if(d)B.UO()},
$S:120}
B.d33.prototype={
$0(){return this.a.a9y(this.b)},
$S:0}
B.d34.prototype={
$0(){return this.a.a9v(this.b)},
$S:0}
B.d35.prototype={
$0(){return this.a.adJ(this.b)},
$S:0}
B.d36.prototype={
$0(){return this.a.a1j(this.b)},
$S:0}
B.d2r.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d3b.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q0(),$async$$0)
case 2:u.m(new B.d3a(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d3a.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c8p.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.c8q.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c8o.prototype={
$2(d,e){return this.bj4(d,e)},
bj4(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UP(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fo8.prototype={
$1(d){if(d===D.a6k&&(this.a.a.a&30)===0)this.a.fT(0)},
$S:z+27}
B.fo9.prototype={
$0(){},
$S:11}
B.foG.prototype={
bkD(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fcs(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h8h(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkD(d,e)},
$S:626}
B.foF.prototype={
$1(d){var x=this
d.b=new B.foE(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.foE.prototype={
$1(d){return this.bkC(d)},
bkC(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZb(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
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
return A.b(B.fcs(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6D(m),$async$$1)
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
x(v=B.ayM.prototype,"gccX","Q7",0)
x(v,"gcdO","J8",0)
x(v,"gcdj","xV",0)
x(v=B.aCF.prototype,"gc68","adH",0)
x(v,"gc69","Zt",0)
x(v,"gcsx","ahm",0)
x(v=B.aCI.prototype,"gc6a","Zu",0)
x(v,"gcsy","a1D",0)
x(B.aCG.prototype,"gc6b","adI",0)
x(B.ayL.prototype,"gc6g","c6h",4)
x(v=B.aCH.prototype,"gcdk","a_A",0)
x(v,"gcr5","cr6",4)
x(v,"gb0L","axZ",0)
x(v,"gcu3","ahM",0)
x(v,"gbNO","Xo",0)
x(v,"gc6f","Ea",0)
x(B.ayN.prototype,"gb4y","a1C",0)
x(B.ayK.prototype,"gc6i","Zv",0)
x(v=B.ayQ.prototype,"gb_s","cbC",4)
x(v,"gc6c","adL",0)
x(v=B.ayO.prototype,"gcq5","a1o",0)
x(v,"gaYG","adK",0)
w(B.ayJ.prototype,"gawD","awE",8)
x(v=B.ayP.prototype,"gcg2","afz",0)
x(v,"gbNk","aak",0)
w(v,"gawD","awE",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cjn,B.a90,B.atb,B.aBj,B.aEp,B.jm,B.abx,B.buk,B.EX,B.WR])
w(B.cjo,B.cjn)
w(B.b3j,B.a90)
x(A.i_,[B.cjj,B.cjk,B.cjl,B.cji,B.cjm,B.cjp,B.cjq,B.cjr,B.cjs,B.cjt,B.cju,B.cjv,B.cjw,B.fhY,B.fFP,B.fFR,B.fFQ,B.fG3,B.fG4,B.fka,B.d2H,B.d2J,B.d2I,B.d2M,B.fm9,B.fmD,B.c7U,B.c80,B.c81,B.c7X,B.c7V,B.c7Y,B.c7Z,B.fG1,B.fG2,B.dPA,B.dPJ,B.dPH,B.dPI,B.ff9,B.fkm,B.fkn,B.c8i,B.fkp,B.fox,B.fiP,B.fiQ,B.c8n,B.fKR,B.d2G,B.d2E,B.dPw,B.dOs,B.dOy,B.dOR,B.dOx,B.dOY,B.dPh,B.dPi,B.dPj,B.dOP,B.dP6,B.dP5,B.dP7,B.dP8,B.dP9,B.dPb,B.dPc,B.dP4,B.dOA,B.dOB,B.dOw,B.dOS,B.dOJ,B.dOH,B.dOX,B.dPg,B.dPt,B.dPu,B.d2C,B.d2D,B.d3_,B.d2Z,B.d2U,B.d2S,B.d2Q,B.d2T,B.d2V,B.d2R,B.d2z,B.d2A,B.d2B,B.d2v,B.d38,B.d39,B.d32,B.c8p,B.c8q,B.fo8,B.foF,B.foE])
w(B.b3k,B.atb)
x(A.ja,[B.fFO,B.d2K,B.d2L,B.fm7,B.fm8,B.fmC,B.dOp,B.dPy,B.dPz,B.dPx,B.dPB,B.dPC,B.dPD,B.dPE,B.dPF,B.dPG,B.dOq,B.dOr,B.fko,B.d2F,B.dOU,B.dOV,B.dOt,B.dOu,B.dOz,B.dPk,B.dPl,B.dOO,B.dOZ,B.dOD,B.dOQ,B.dPa,B.dP_,B.dP0,B.dP1,B.dP2,B.dP3,B.dOC,B.dOv,B.dOT,B.dOM,B.dOF,B.dOK,B.dOL,B.dON,B.dOE,B.dOW,B.dPd,B.dPe,B.dPf,B.dPr,B.dPs,B.dPn,B.dPo,B.dPm,B.dPp,B.dPq,B.d2W,B.d2X,B.d2Y,B.d2N,B.d2P,B.d2O,B.d2y,B.d2x,B.d2w,B.d2s,B.d2t,B.d2u,B.d3c,B.d3d,B.d3e,B.d3f,B.d3g,B.d3h,B.d3j,B.d3i,B.d30,B.d31,B.d33,B.d34,B.d35,B.d36,B.d2r,B.d3b,B.d3a,B.fo9])
x(A.mc,[B.abQ,B.Nj,B.a91,B.Ol,B.WQ,B.Ok,B.EY])
x(A.ag,[B.YL,B.UD,B.UH,B.UE,B.YK,B.UF,B.YM,B.YJ,B.Pv,B.YO,B.YI,B.YP])
x(A.ah,[B.ayM,B.aCF,B.aCI,B.aCG,B.ayL,B.aCH,B.ayN,B.ayK,B.ayQ,B.ayO,B.ayJ,B.ayP])
x(A.at,[B.ach,B.ayI,B.bcG,B.abR,B.abP,B.bcH])
x(A.kj,[B.c8_,B.c7W,B.c83,B.c84,B.fGL,B.dOI,B.dOG,B.dPv,B.d37,B.c8o,B.foG])
x(A.iT,[B.bhW,B.btZ])})()
A.k_(b.typeUniverse,JSON.parse('{"b3j":{"a90":[]},"b3k":{"atb":[]},"YL":{"ag":[],"t":[]},"ayM":{"ah":["YL"]},"ach":{"at":[],"t":[]},"UD":{"ag":[],"t":[]},"UH":{"ag":[],"t":[]},"aCF":{"ah":["UD"]},"aCI":{"ah":["UH"]},"bhW":{"iT":[]},"UE":{"ag":[],"t":[]},"aCG":{"ah":["UE"]},"YK":{"ag":[],"t":[]},"UF":{"ag":[],"t":[]},"abR":{"at":[],"t":[]},"YM":{"ag":[],"t":[]},"YJ":{"ag":[],"t":[]},"Pv":{"ag":[],"t":[]},"YO":{"ag":[],"t":[]},"abP":{"at":[],"t":[]},"YI":{"ag":[],"t":[]},"YP":{"ag":[],"t":[]},"ayL":{"ah":["YK"]},"btZ":{"iT":[]},"aCH":{"ah":["UF"]},"ayI":{"at":[],"t":[]},"bcG":{"at":[],"t":[]},"ayN":{"ah":["YM"]},"ayK":{"ah":["YJ"]},"ayQ":{"ah":["Pv"]},"ayO":{"ah":["YO"]},"ayJ":{"ah":["YI"]},"ayP":{"ah":["YP"]},"bcH":{"at":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ue"),k:x("LM()"),m:x("bt<m,m>"),F:x("r4"),g:x("aA<jm?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<v>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jm>"),w:x("O<+file,name(lz,m)>"),u:x("O<cS>"),s:x("O<m>"),E:x("O<iT>"),a:x("O<dI>"),p:x("O<t>"),Z:x("O<H>"),G:x("bh"),A:x("cu<ah<ag>>"),n:x("ai<jm>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iD"),e:x("idu"),af:x("E8"),U:x("jm"),b:x("cp"),C:x("aD"),aK:x("w7"),ab:x("EX"),br:x("atb"),v:x("WR"),N:x("m"),X:x("bp<K>"),Q:x("lN"),D:x("dI"),aw:x("cw<m>"),cd:x("a_<a5<m,@>>"),c7:x("t"),ch:x("bV<ai<jm>>"),aW:x("bV<dI?>"),aY:x("bV<~>"),cx:x("abQ"),b1:x("bg<ai<jm>>"),cf:x("bg<dI?>"),d4:x("bg<~>"),c4:x("aBj"),bG:x("aEp"),q:x("n_"),B:x("pp<EX>"),c6:x("pp<a91>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jm>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jm?"),R:x("aD?"),c:x("WR?"),d:x("+answerQr,transfer(m,aA<ai<jm>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,H)?"),L:x("+fileCount,mode,qrPayload(H,Nj,m)?"),aX:x("+fileCount,qrPayload,token(H,m,m)?"),T:x("m?"),K:x("dI?"),cm:x("abx?"),bk:x("aBj?"),ag:x("aEp?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b_0=new A.az(C.aF,2,C.q,-1)
D.bY2=new A.a8(C.a3,C.a8,C.x,C.a2h,null,null)
D.b0F=new A.o(null,null,null,C.mc,null,D.bY2,C.n)
D.b27=new A.o(null,null,null,C.mc,null,E.GP,C.n)
D.acx=new A.v(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adL=new A.v(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeF=new A.v(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ag6=new A.v(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fkL=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fyY=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.d6T=x([D.fkL,C.am,D.fyY],y.p)
D.bnZ=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d6T,null)
D.fDj=new A.y("Create your organization",null,C.fs,null,null,null,null,null,null,null,null,null)
D.fp2=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.dmK=x([D.fDj,C.am,D.fp2],y.p)
D.bo8=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dmK,null)
D.fzA=new A.y("Team Member sign-in",null,C.fs,null,null,null,null,null,null,null,null,null)
D.fsQ=new A.y("Enter the access code and password from your organization.",null,G.Dy,null,null,null,null,null,null,null,null,null)
D.dkz=x([D.fzA,C.am,D.fsQ],y.p)
D.boi=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dkz,null)
D.buh=new A.Q(16,10,16,28)
D.bup=new A.Q(16,14,16,4)
D.bvD=new A.Q(20,0,20,16)
D.bw7=new A.Q(20,8,20,16)
D.aiO=new A.Q(24,22,24,20)
D.a0j=new A.a1(63394,"MaterialIcons",!1)
D.alQ=new A.a1(63515,"MaterialIcons",!1)
D.bIl=new A.a1(983813,"MaterialIcons",!1)
D.bFI=new A.a1(62867,"MaterialIcons",!1)
D.bJk=new A.ae(D.bFI,44,C.c,null,null,null)
D.bKp=new A.ae(C.q_,null,C.ad,null,null,null)
D.bLO=new A.ae(C.j3,18,null,null,null,null)
D.bNw=new A.ae(D.a0j,26,C.c,null,null,null)
D.bO2=new A.ae(C.Gu,null,null,null,null,null)
D.bOB=new A.ae(C.C1,null,null,null,null,null)
D.bPL=new A.ae(W.a0w,null,null,null,null,null)
D.bQ4=new A.ae(C.hl,16,null,null,null,null)
D.bTx=new A.ae(C.re,16,null,null,null,null)
D.bJC=new A.ae(C.nf,null,null,null,null,null)
D.bUo=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bP8=new A.ae(C.G3,null,null,null,null,null)
D.bUt=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bP8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJX=new A.ae(H.GC,null,null,null,null,null)
D.bUE=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cIe=x([C.fb,C.aZ,C.aF],y.O)
D.bZU=new A.a8(C.ay,C.aC,C.x,D.cIe,null,null)
D.cHI=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Q0=x([C.fb,C.aF],y.O)
D.Qh=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mA=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dff=x([C.oE,C.aF],y.O)
D.e6l={iceServers:0}
D.aGG={urls:0}
D.dqq=new A.bt(D.aGG,["stun:stun.l.google.com:19302"],y.m)
D.dqp=new A.bt(D.aGG,["stun:stun1.l.google.com:19302"],y.m)
D.cY7=x([D.dqq,D.dqp],A.ax("O<a5<m,m>>"))
D.dpJ=new A.bt(D.e6l,[D.cY7],A.ax("bt<m,@>"))
D.HS=new B.Nj(0,"lanDirect")
D.RE=new B.Nj(1,"cloudStash")
D.dBn=new B.Nj(2,"inlineInstant")
D.RF=new B.Nj(3,"webrtcLink")
D.zi=new B.Nj(4,"videoCloud")
D.fyX=new A.y("Receive file",null,C.nv,null,null,null,null,null,null,null,null,null)
D.cxF=x([E.anu,C.ab,D.fyX],y.p)
D.eQl=new A.ck(C.aN,C.b7,C.j,C.m,null,C.p,null,0,D.cxF,null)
D.ecg=new A.D(C.ck,D.eQl,null)
D.fbU=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2X,null,null,null)
D.fli=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fbU,null,C.L,null,null,null,null,null,null,null)
D.ebx=new A.D(C.Bk,D.fli,null)
D.b6n=new A.co(C.A,null,null,D.ebx,null)
D.ei1=new A.cL(0,null,0,28,null,null,D.b6n,null)
D.eik=new B.a91(0,"RTCDataChannelConnecting")
D.aM0=new B.a91(1,"RTCDataChannelOpen")
D.aM1=new B.a91(3,"RTCDataChannelClosed")
D.eil=new B.EY(0,"RTCIceConnectionStateNew")
D.eim=new B.EY(1,"RTCIceConnectionStateChecking")
D.ein=new B.EY(2,"RTCIceConnectionStateCompleted")
D.eio=new B.EY(3,"RTCIceConnectionStateConnected")
D.eip=new B.EY(4,"RTCIceConnectionStateCount")
D.eiq=new B.EY(5,"RTCIceConnectionStateFailed")
D.eir=new B.EY(6,"RTCIceConnectionStateDisconnected")
D.aM2=new B.EY(7,"RTCIceConnectionStateClosed")
D.aM3=new B.WQ(0,"RTCIceGatheringStateNew")
D.eis=new B.WQ(1,"RTCIceGatheringStateGathering")
D.a6k=new B.WQ(2,"RTCIceGatheringStateComplete")
D.a6l=new B.Ok(0,"RTCPeerConnectionStateClosed")
D.aM4=new B.Ok(1,"RTCPeerConnectionStateFailed")
D.aM5=new B.Ok(2,"RTCPeerConnectionStateDisconnected")
D.aM6=new B.Ok(3,"RTCPeerConnectionStateNew")
D.aM7=new B.Ok(4,"RTCPeerConnectionStateConnecting")
D.aM8=new B.Ok(5,"RTCPeerConnectionStateConnected")
D.eit=new B.Ol(0,"RTCSignalingStateStable")
D.eiu=new B.Ol(1,"RTCSignalingStateHaveLocalOffer")
D.eiv=new B.Ol(2,"RTCSignalingStateHaveRemoteOffer")
D.eiw=new B.Ol(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eix=new B.Ol(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aM9=new B.Ol(5,"RTCSignalingStateClosed")
D.eUR=new A.as(160,48)
D.b7B=new A.fi(2,null,null,null,null,C.aF,null,null,null,null)
D.eWn=new A.a7(16,16,D.b7B,null)
D.foq=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXP=new A.b1(D.foq,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fvN=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eXS=new A.b1(D.fvN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEm=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eXZ=new A.b1(D.fEm,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fo0=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eYo=new A.b1(D.fo0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fzL=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aOU=new A.b1(D.fzL,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fB9=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYS=new A.b1(D.fB9,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFL=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ6=new A.b1(D.fFL,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fDN=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZb=new A.b1(D.fDN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEZ=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eZY=new A.b1(D.fEZ,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmE=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_u=new A.b1(D.fmE,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fxA=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_P=new A.b1(D.fxA,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fqE=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f0k=new A.b1(D.fqE,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFR=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0o=new A.b1(D.fFR,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmU=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0u=new A.b1(D.fmU,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.flD=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0J=new A.b1(D.flD,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fiC=new A.y("NGMY DOC SHARE",null,C.aQf,null,null,null,null,null,null,null,null,null)
D.fjT=new A.y("Show this to sender",null,C.kh,null,null,null,null,null,null,null,null,null)
D.fkS=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new A.y("Organization settings",null,C.cA,null,null,null,null,null,null,null,null,null)
D.fpP=new A.y("Sign in",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fqN=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.frg=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new A.y("Send to their Doc Share",null,C.nt,null,null,null,null,null,null,null,null,null)
D.fx5=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fxX=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fy2=new A.y("Create portal",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fyp=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBE=new A.y("Share files & videos\nwith a scan.",null,C.aQg,null,null,null,null,null,null,null,null,null)
D.fBX=new A.y("Add files",null,C.cj,null,null,null,null,null,null,null,null,null)
D.h3Q=new B.YI(null)
D.a9w=new B.abQ(0,"docShare")
D.a9x=new B.abQ(1,"gate")
D.UB=new B.abQ(2,"gateNoIndividual")})();(function staticFields(){$.aMW=null
$.fac=function(){var x=y.N
return A.U(x,x)}()
$.G9=A.U(y.N,y.D)
$.afS=A.U(y.N,A.ax("lz"))
$.QM=A.U(y.N,y.D)
$.faK=A.U(y.N,A.ax("abx"))
$.c8h=A.U(y.S,A.ax("buk"))
$.h8g=1
$.hW0=null
$.hW_=null
$.hNt=null
$.fYc=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"idZ","hpC",()=>new B.cjo())
x($,"ibU","h0X",()=>C.a.t(A.bu(A.bu(A.bu(A.GK(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["EjDDwil/kY8YLMYjiwr8ncOWqKU="]=a.current})($__dart_deferred_initializers__);