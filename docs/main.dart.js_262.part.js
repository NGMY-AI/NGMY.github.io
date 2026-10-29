((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ciA:function ciA(){},
hHy(d){var x=null,w=new B.b3i(d,D.eet,new A.pl(x,x,y.c6),new A.pl(x,x,y.B))
w.bxh(d)
return w},
b3i:function b3i(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
civ:function civ(d){this.a=d},
ciw:function ciw(d){this.a=d},
cix:function cix(d){this.a=d},
ciu:function ciu(d){this.a=d},
ciy:function ciy(d){this.a=d},
hHz(d,e){var x=y.N
x=new B.b3j(d,e,A.T(x,y.e),A.T(x,y.z))
x.bxi(d,e)
return x},
b3j:function b3j(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ciB:function ciB(d){this.a=d},
ciC:function ciC(d){this.a=d},
ciD:function ciD(d){this.a=d},
ciE:function ciE(d){this.a=d},
ciF:function ciF(d){this.a=d},
ciG:function ciG(d){this.a=d},
ciH:function ciH(d){this.a=d},
ciI:function ciI(d){this.a=d},
fYC(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yB.LI(x,"ngmy_doc_share_v1",new B.fjR(),1)},
hO7(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zV(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QO(d,e){return B.i2o(d,e)},
i2o(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aN1
x=7
return A.b(o==null?$.aN1=B.fYC():o,$async$QO)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mI(s,"blobs","readwrite")
C.iI.mk(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.pv(q),$async$QO)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QO,w)},
QN(d){return B.i2n(d)},
i2n(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aN1
x=7
return A.b(o==null?$.aN1=B.fYC():o,$async$QN)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iI.zq(J.mG(r,"blobs"),d),$async$QN)
case 8:q=f
x=9
return A.b(J.pv(r),$async$QN)
case 9:o=B.hO7(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QN,w)},
agu(d){return B.i2m(d)},
i2m(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aN1
x=7
return A.b(p==null?$.aN1=B.fYC():p,$async$agu)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iI.FE(J.mG(r,"blobs"),d)
x=8
return A.b(J.pv(r),$async$agu)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agu,w)},
fjR:function fjR(){},
hQv(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnQ(w,v))}return u},
hnx(d,e){var x,w={},v=A.aVp("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fGM(w,v,e)
C.vV.yk(v,"change",new B.fGO(w,v,!1))
C.vV.yk(v,"cancel",new B.fGN(w))
$.eV.mr()
v.click()
A.bN(C.agq,new B.fGL(w),y.H)},
fGM:function fGM(d,e,f){this.a=d
this.b=e
this.c=f},
fGO:function fGO(d,e,f){this.a=d
this.b=e
this.c=f},
fGN:function fGN(d){this.a=d},
fGL:function fGL(d){this.a=d},
CO(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CO=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTl()?3:4
break
case 3:x=5
return A.b(B.hiF(e,d,s,!0,!1,f,g,h,!1,i),$async$CO)
case 5:x=1
break
case 4:x=6
return A.b(B.Qt(d,s,f,g,h,i),$async$CO)
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
return A.b(B.Ic(s,d),$async$CO)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.ffi(s,d),$async$CO)
case 14:x=12
return A.b(r.hiF(q,p,o,n,m,l,k,j,a1,i),$async$CO)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cl(A.e8(new B.fH0(s,i,d,f,g,h),!1,null,y.H)),$async$CO)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cl(A.e8(new B.fH1(s,i,d,f,g,h),!1,null,y.H)),$async$CO)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CO,w)},
Qt(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qt=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ2(e),$async$Qt)
case 3:u=k
x=4
return A.b(B.aoA(d,e,!1),$async$Qt)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ic(e,d),$async$Qt)
case 7:if(k){v=D.a8Y
x=1
break}x=8
return A.b(B.Us(e),$async$Qt)
case 8:v=t?D.Ur:D.a8Z
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZ0(d,e)){v=D.a8Y
x=1
break}x=11
return A.b(B.Us(e),$async$Qt)
case 11:v=t?D.Ur:D.a8Z
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fTO(d,e)){v=D.a8Y
x=1
break}x=14
return A.b(B.Us(e),$async$Qt)
case 14:v=D.Ur
x=1
break
case 13:v=t?D.Ur:D.a8Z
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qt,w)},
ffi(d,e){var x=0,w=A.j(y.y),v
var $async$ffi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZ0(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZ2(d),$async$ffi)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffi,w)},
hiF(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cl(A.e8(new B.flO(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hdN(d,e,f,g,h,i,j){return new B.YF(e,j,d,g,h,i,f,null)},
fnK(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fnK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fnN(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fnK)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnK,w)},
foe(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$foe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fog(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$foe)
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
return A.i($async$foe,w)},
fYL(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fzm(d,e){var x=0,w=A.j(y.H),v
var $async$fzm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Us(e),$async$fzm)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fzm,w)},
fH0:function fH0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fH1:function fH1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abL:function abL(d,e){this.a=d
this.b=e},
flO:function flO(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YF:function YF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayC:function ayC(){this.c=this.a=this.d=null},
d1S:function d1S(d,e){this.a=d
this.b=e},
d1P:function d1P(d){this.a=d},
d1R:function d1R(d){this.a=d},
d1Q:function d1Q(d){this.a=d},
d1U:function d1U(){},
d1T:function d1T(d){this.a=d},
acd:function acd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aB9:function aB9(d,e){this.a=d
this.b=e},
aEl:function aEl(d,e,f){this.a=d
this.b=e
this.c=f},
fnN:function fnN(d,e,f){this.a=d
this.b=e
this.c=f},
fnL:function fnL(d){this.a=d},
fnM:function fnM(d,e,f){this.a=d
this.b=e
this.c=f},
fog:function fog(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fof:function fof(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c74(d,e,f,g,h){return B.hCs(d,e,f,g,h)},
hCs(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c74=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iN(r.dt(d,new B.c75(s,e,h,g,f,q),y.g),y.l),$async$c74)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c74,w)},
aYY(d,e,f,g,h){return B.hCt(d,e,f,g,h)},
hCt(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYY=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atS("GET",d)
o=A.fQg()
if(o==null)o=new A.Lw(A.a([],y.W))
x=7
return A.b(o.eX(0,s).cO(0,C.F4),$async$aYY)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cd(),$async$aYY)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bt(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share pull url web] "+f+": "+A.t(p))
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
aYX(d){return B.hCq(d)},
hCq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vd(d,null).cO(0,C.nX),$async$aYX)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aI(0,A.iz(A.iy(p.e)).ca(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aYX,w)},
c73(d){return B.hCr(d)},
hCr(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c73=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vd(d,null).cO(0,C.pQ),$async$c73)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iz(A.iy(q.e)).ca(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.aa(o)
$.am.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c73,w)},
c75:function c75(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jn:function jn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ia(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hCy(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ia(C.a.b4(u,v.length))}return null},
hCz(d){var x=B.Ia(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hCu(){var x,w=$.ps(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.h_(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a6o(d){return B.hCv(d)},
hCv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bH),$async$a6o)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6o,w)},
a6p(d,e){return B.hCw(d,e)},
hCw(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6p=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hE(d,e,!1,!1,C.cI,null),$async$a6p)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6p,w)},
Bs(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Bs)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ia(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6q(r),$async$Bs)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6o("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bs)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ia(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bs)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hCu()
x=14
return A.b(B.a6q(m),$async$Bs)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a7().ac()
x=15
return A.b(B.a6p("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bs)
case 15:k=f
x=16
return A.b(B.a6p("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bs)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bs)
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
return A.i($async$Bs,w)},
a6q(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ia(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6o("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6q)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6q,w)},
a6r(d,e,f,g){return B.hCA(d,e,f,g)},
hCA(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6r=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ia(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6q(r),$async$a6r)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c7b())>1048576||g.b5(d,new B.c7c())){v=B.Ei(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6C("myCode",d,a0),$async$a6r)
case 4:u=a3
try{t=C.R.aI(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Ei(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZ5(u,g.gM(d),a0),$async$a6r)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ps().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c7d(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYZ(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],i,y.z),q),$async$a6r)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6r,w)},
Ei(d,e,f,g,h){return B.hCx(d,e,f,g,h)},
hCx(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ei=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ei)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cG(a6)
k=l.cI(a6,0,new B.c77())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ps().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cH.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Ie(a9,q)
a0=new A.K5(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Ei)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oU(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aa_(a1.a,a4,"media",a1.d,a2).wU(m,n,new A.DA(!0,q.c)),$async$Ei)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a6(0),$async$Ei)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPv(r),$async$Ei)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c78(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYZ(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],e,d),a8),$async$Ei)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPv(r),$async$Ei)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ei,w)},
aYZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6o(t),$async$aYZ)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c76(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6p(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYZ,w)},
N7(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$N7=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6o("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$N7)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aZ_(k,a0),$async$N7)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZ4(h),$async$N7)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Uz(g,a0),$async$N7)
case 10:f=a3
if(f!=null&&J.cz(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c79(),q),n)
d=A.C(new A.a_(r,new B.c7a(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.de(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6p("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$N7)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$N7,w)},
aZ_(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZ_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
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
break}i=B.i6a(k,j)
C.d.v(s,i)
x=5
return A.b(B.CM(l,m,"Received via My Code",t,e,i),$async$aZ_)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPv(s),$async$aZ_)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ_,w)},
c7b:function c7b(){},
c7c:function c7c(){},
c7d:function c7d(){},
c77:function c77(){},
c78:function c78(){},
c76:function c76(){},
c79:function c79(){},
c7a:function c7a(){},
fGY(d,e){var x=0,w=A.j(y.H)
var $async$fGY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cl(A.e8(new B.fGZ(e),!1,null,y.H)),$async$fGY)
case 2:return A.h(null,w)}})
return A.i($async$fGY,w)},
bCy(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCy=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cl(A.e8(new B.fH_(g,e,f),!1,null,y.y)),$async$bCy)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCy,w)},
fGZ:function fGZ(d){this.a=d},
fH_:function fH_(d,e,f){this.a=d
this.b=e
this.c=f},
Up:function Up(d,e){this.c=d
this.a=e},
aCw:function aCw(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOD:function dOD(d,e){this.a=d
this.b=e},
Ut:function Ut(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCz:function aCz(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPM:function dPM(d){this.a=d},
dPN:function dPN(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPQ:function dPQ(d){this.a=d},
dPR:function dPR(d,e){this.a=d
this.b=e},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dPX:function dPX(){},
dPV:function dPV(d){this.a=d},
dPW:function dPW(d,e){this.a=d
this.b=e},
bi2:function bi2(){},
Uq:function Uq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCx:function aCx(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOE:function dOE(d){this.a=d},
dOF:function dOF(d){this.a=d},
fTP(d){var x=d.hS
if(x>=0)return C.o.N(x)
return 10},
hCC(d){var x=d.kG
if(x>=0)return x
return 4.99},
hCB(d){var x=d.lp,w=y.N
w=x.j2(x,new B.c7f(),w,w)
return w},
h8R(d){var x=d.kH,w=y.N
w=x.j2(x,new B.c7g(),w,w)
return w},
aZ2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZ2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aZ2)
case 7:s=f
r=A.t(p)
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
return A.i($async$aZ2,w)},
a6t(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a6t)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6t)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6t,w)},
Us(d){var x=0,w=A.j(y.H),v,u
var $async$Us=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Us)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Us)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Us,w)},
fTO(d,e){var x,w,v
if(B.hCC(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hCB(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aZ0(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h8R(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h8S(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h8R(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dC(f,0,0,0,0,0).a).a7().ac())
d.kH=w},
aoB(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aoB)
case 7:s=f
r=A.t(p)
r=A.f4(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoB,w)},
aoC(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoB(d),$async$aoC)
case 3:u=f
x=5
return A.b(A.aA(),$async$aoC)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoC,w)},
aoA(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fTP(d)
if(u<=0){v=!1
x=1
break}if(B.fTO(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoB(e),$async$aoA)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoA,w)},
aZ1(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZ1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ic(e,d),$async$aZ1)
case 3:if(g){v=-1
x=1
break}u=B.fTP(d)
if(u<=0){v=-1
x=1
break}if(B.fTO(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoB(e),$async$aZ1)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ1,w)},
c7i(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ic(e,d),$async$c7i)
case 3:if(h){v=!1
x=1
break}v=B.aoA(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7i,w)},
c7h(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7h=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c7i(d,u,i.gTl()),$async$c7h)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7h,w)},
a6s(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6s=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gTl()){v=!0
x=1
break}if(B.aZ0(d,u)){v=!0
x=1
break}x=5
return A.b(A.lf(u,C.RN),$async$a6s)
case 5:x=k?3:4
break
case 3:B.h8S(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6s)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kU(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.RN,"Doc Share for Organizations"),$async$a6s)
case 7:if(!k){v=!1
x=1
break}B.h8S(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6s)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6s,w)},
c7f:function c7f(){},
c7g:function c7g(){},
fHD(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fHD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fHD)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fbY.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fbY.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHD,w)},
i8s(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fbY.bp($.fbY,new B.fHF(d))},
fHF:function fHF(d){this.a=d},
fdn(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fdn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],f))
s.toString
u=A.n7(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.ji,null,y.H),$async$fdn)
case 3:C.zX.fe(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mr()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdn,w)},
afl(d,e,f){var x=0,w=A.j(y.H),v
var $async$afl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fcv.n(0,d,new B.abs(A.bo(e,!0,v)))
x=3
return A.b(A.aA(),$async$afl)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afl)
case 2:return A.h(null,w)}})
return A.i($async$afl,w)},
aff(d){return B.hSk(d)},
hSk(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aff=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fcv.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$aff)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aI(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fh3(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abs(r)
$.fcv.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aff,w)},
Qj(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.G_.n(0,d,u)
x=3
return A.b(B.QO(d,u),$async$Qj)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qj,w)},
aNm(d){return B.hSi(d)},
hSi(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G_.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QN(d),$async$aNm)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.G_.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aNm)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aJ(r)
x=!J.cn(q)?9:10
break
case 9:B.Qj(d,q)
x=11
return A.b(J.hF(s,d),$async$aNm)
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
return A.i($async$aNm,w)},
hOu(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ce(A.zV(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
return A.f8(null,y.K)},
a17(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a17=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bW(u,y.aW)
s=y.aK
A.fJ(r,"loadend",new B.fm_(r,t),!1,s)
A.fJ(r,"error",new B.fm0(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ij(0,C.LY,new B.fm1())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a17,w)},
aNG(d,e,f){return B.hUz(d,e,f)},
hUz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNG=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a17(i),$async$aNG)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QO(o,p),$async$aNG)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afl(k,j,s),$async$aNG)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNG,w)},
aNF(d,e,f){return B.hUy(d,e,f)},
hUy(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNF=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNG(d,e,f),$async$aNF)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a17(f),$async$aNF)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G_.n(0,s,r)
$.QA.n(0,s,r)
x=11
return A.b(B.Qj(s,r),$async$aNF)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNF,w)},
Bt(d,e,f,g,h,i){return B.hCL(d,e,f,g,h,i)},
hCL(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bt=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cH.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.S(Date.now(),0,!1).a7().ac(),a0,f,B.aZ8(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qj(s,d),$async$Bt)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Bt)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcz().aJ(d)),$async$Bt)
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
return A.b(B.Aw(e),$async$Bt)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.Gb(e,j),$async$Bt)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bt,w)},
Uu(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Uu=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Aw(d),$async$Uu)
case 3:t=a1
s=e.length,r=J.cG(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cH.aB(99999)
n=p.b
l=o.type
l.toString
k=B.h8U(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a7().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZ8(),null)
$.afO.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a17(o),$async$Uu)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.G_.n(0,h,g)
$.QA.n(0,h,g)
B.Qj(h,g)
x=9
break
case 10:x=11
return A.b(B.aNF(d,m,o),$async$Uu)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gb(d,t),$async$Uu)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uu,w)},
fTT(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fTT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h8U(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Id(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.Bt(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTT,w)},
Id(d,e,f,g,h,i){return B.hCK(d,e,f,g,h,i)},
hCK(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Id=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cH.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.K5(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Id)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rl(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QO(k,l),$async$Id)
case 11:J.ci(q,k);++p
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
return A.b(j.a6(0),$async$Id)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.QO(k,new Uint8Array(A.ce(n))),$async$Id)
case 15:J.ci(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afl(r,q,g),$async$Id)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a7().ac(),a2,null,B.aZ8(),null)
x=17
return A.b(B.Aw(d),$async$Id)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.Gb(d,e),$async$Id)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Id,w)},
Uw(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Uw=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afO.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a17(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aff(s),$async$Uw)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QN(u[o]),$async$Uw)
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
v=A.zV(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QA.h(0,s)
if(i==null)i=$.G_.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rn(d,e),$async$Uw)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QA.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zV(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uw,w)},
h8U(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rn(d,e){return B.hCM(d,e)},
hCM(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rn=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QA.h(0,f)
if(e==null)e=$.G_.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.afO.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a17(s),$async$rn)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.G_.n(0,f,r)
$.QA.n(0,f,r)
B.Qj(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aff(f),$async$rn)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axp(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QN(g[l]),$async$rn)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ant()
if(!C.aH.gam(r)){$.G_.n(0,f,r)
$.QA.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNm(f),$async$rn)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QA.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Uw(a0,a1,0,g),$async$rn)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ce(i))
$.G_.n(0,f,h)
$.QA.n(0,f,h)
B.Qj(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rn,w)},
hCP(d){var x,w,v=$.afO.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hCQ(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hCN(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoI(d,e,f,g,h){return B.hCO(d,e,f,g,h)},
hCO(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoI=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afO.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a17(s),$async$aoI)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rn(g,e),$async$aoI)
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
return A.b(n.ib(d).wU(h,r,new A.DA(!0,e.c)),$async$aoI)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoI,w)},
h8W(d,e,f,g,h){var x,w,v,u,t=$.h8V
$.h8V=t+1
x=Date.now()
w=""+1000*x+"_"+C.cH.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7t.n(0,t,new B.buz(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axp(u)))
return t},
fTU(d){var x=0,w=A.j(y.H)
var $async$fTU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fTU,w)},
Ie(d,e){var $async$Ie=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afO.h(0,h)
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
return A.q3(B.Uw(d,e,p,o<q?o:q),$async$Ie,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q3(A.Fx(n),$async$Ie,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q3(B.aff("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ie,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q3(B.QN(h[l]),$async$Ie,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q3(A.Fx(k),$async$Ie,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q3(B.rn(d,e),$async$Ie,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q3(A.Fx(A.zV(j,p,o<i?o:i)),$async$Ie,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q3(null,0,w)
case 2:return A.q3(t.at(-1),1,w)}})
var x=0,w=A.hhy($async$Ie,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hjn(w)},
aZa(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7t.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a45(),$async$aZa)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZa,w)},
Uv(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Uv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7t.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a45(),$async$Uv)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afl(r.c,u,r.z),$async$Uv)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a7().ac(),r.f,r.r,B.aZ8(),null)
u=r.a
x=5
return A.b(B.Aw(u),$async$Uv)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.Gb(u,s),$async$Uv)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uv,w)},
a6z(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7t.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agu(u[s]),$async$a6z)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
c7v(d,e,f){var x=0,w=A.j(y.H)
var $async$c7v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzB(d,e,f),$async$c7v)
case 2:return A.h(null,w)}})
return A.i($async$c7v,w)},
c7w(d,e,f){var x=0,w=A.j(y.H)
var $async$c7w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzC(d,e,f),$async$c7w)
case 2:return A.h(null,w)}})
return A.i($async$c7w,w)},
Ej(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ej=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Aw(d),$async$Ej)
case 2:p=g
J.nr(p,new B.c7u(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G_.W(0,v)
$.afO.W(0,e)
x=3
return A.b(B.aff(v),$async$Ej)
case 3:u=g
$.fcv.W(0,v)
x=4
return A.b(A.aA(),$async$Ej)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ej)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ej)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agu(s[q]),$async$Ej)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agu(v),$async$Ej)
case 13:x=14
return A.b(B.Gb(d,p),$async$Ej)
case 14:return A.h(null,w)}})
return A.i($async$Ej,w)},
aZ9(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZ9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rn(d,e),$async$aZ9)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fdn(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ9,w)},
Aw(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Aw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Aw)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aI(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fm2(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Aw,w)},
Gb(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Gb)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fq2(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$Gb)
case 3:return A.h(null,w)}})
return A.i($async$Gb,w)},
bzB(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Aw(d),$async$bzB)
case 3:u=h
t=J.cG(u)
s=t.be(u,new B.fks(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aD8(f))
x=4
return A.b(B.Gb(d,u),$async$bzB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzB,w)},
bzC(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Aw(d),$async$bzC)
case 3:u=h
t=J.cG(u)
s=t.be(u,new B.fkt(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cHf(f))
x=4
return A.b(B.Gb(d,u),$async$bzC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzC,w)},
abs:function abs(d){this.a=d},
fh3:function fh3(){},
fm_:function fm_(d,e){this.a=d
this.b=e},
fm0:function fm0(d){this.a=d},
fm1:function fm1(){},
c7u:function c7u(d){this.a=d},
buz:function buz(d,e,f,g,h,i,j,k,l){var _=this
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
fm2:function fm2(){},
fq2:function fq2(){},
fks:function fks(d){this.a=d},
fkt:function fkt(d){this.a=d},
a6A(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b5(d,new B.c7z())?3:4
break
case 3:x=5
return A.b(B.aZb(d,e),$async$a6A)
case 5:u=g
if(u!=null){t=u.c
B.N9(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gI(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aZ6(s),$async$a6A)
case 10:case 9:if(g){v=new A.PI(1,D.Rq,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Ux(d,e),$async$a6A)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UC(!0,!0,d,e),$async$a6A)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.N9(d,D.z9,e,t)
v=new A.PI(p,D.z9,t)
x=1
break}v=B.c7y(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
Ux(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Ux=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6C(null,d,e),$async$Ux)
case 3:p=g
try{u=C.R.aI(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZ5(p,d.length,e),$async$Ux)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7w(e,C.d.gI(d).a,r.b),$async$Ux)
case 7:case 6:q=r.a
x=8
return A.b(B.N9(d,D.Rq,e,q),$async$Ux)
case 8:v=new A.PI(d.length,D.Rq,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ux,w)},
Uy(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Uy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mw(D.mC)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6B(d,e),$async$Uy)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7r(s,d,e,t),$async$Uy)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZ6(t),$async$Uy)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rn(e,d),$async$Uy)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Ux(A.a([d],y.r),e),$async$Uy)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uy,w)},
UA(){var x=0,w=A.j(y.H)
var $async$UA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fTN(),$async$UA)
case 2:x=3
return A.b(B.aPN(),$async$UA)
case 3:return A.h(null,w)}})
return A.i($async$UA,w)},
a6B(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZ8()
x=3
return A.b(B.c7v(e,d.a,u),$async$a6B)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
N9(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$N9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Rq&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b4(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6B(p,f),$async$N9)
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
return A.b(B.c7q(o,p,u,f),$async$N9)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7r(o,p,f,t),$async$N9)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7p(o,u,p,f),$async$N9)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N9,w)},
aZb(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7x(e,d),$async$aZb)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UC(!1,!0,d,e),$async$aZb)
case 4:u=g
if(u!=null){t=u.b
v=new A.PI(u.a,D.z9,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZb,w)},
c7x(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Uw(d,s,0,1),$async$c7x)
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
return A.i($async$c7x,w)},
c7y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6C(null,d,e),$async$c7y)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h8T(u)
if(t.length>800){v=null
x=1
break}v=new A.PI(d.length,D.dxB,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7y,w)},
aoJ(d,e,f){return B.hCT(d,e,f)},
hCT(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoJ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mH(g,1)
x=B.fTS(g)?3:4
break
case 3:x=5
return A.b(B.c7s(g),$async$aoJ)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mH(g,13))
try{k=B.Ek(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mH(g,13))
u=9
x=12
return A.b(B.aZ4(q),$async$aoJ)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Uz(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fTR(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Uz(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.If(C.a.i(J.mH(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.If(C.a.i(J.mH(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.If(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Uz(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoJ,w)},
If(d,e,f){return B.hCR(d,e,f)},
hCR(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$If=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b4(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b4(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cx(A.t(s)+"/manifest.json",0,null)
q=A.cx(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYX(r),$async$If)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYX(A.cx(s,0,null)),$async$If)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c74(o,r,a1,n,a2),$async$If)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c73(q),$async$If)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Uz(l,a2),$async$If)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cn(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.aa(d)
$.am.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$If,w)},
a6C(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6C=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rn(f,r),$async$a6C)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcz().aJ(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a7().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
Uz(d,e){return B.hCS(d,e)},
hCS(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Uz=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aI(0,a2,null)
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
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cG.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bt(i,a3,d,k,l,o),$async$Uz)
case 9:h=a5
if(h!=null)J.ci(n,h)
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
g=A.aa(a1)
$.am.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Uz,w)},
N8:function N8(d,e){this.a=d
this.b=e},
c7z:function c7z(){},
a0I(d){var x=A.P(d).ax.a===C.I,w=x?D.ae4:D.abX,v=x?D.afy:C.c,u=x?C.aQ:C.M,t=x?C.bJ:C.ak,s=x?D.ad8:C.aL
return new A.aFz([w,s,v,u,t,x?C.fc:C.bU])},
hof(d,e){var x=e?C.w.j(0.72):C.aW
return A.cb(null,x,!0,null,new B.fLL(e),d,null,!0,!0,y.N)},
c7e(d,e,f,g,h,i,j,k,l){return new B.Ur(e,l,d,f,k,j,g,h,i,null)},
YH(d,e,f,g,h,i,j){return new B.bcI(g,h,j,e,i,d,f,null)},
fLL:function fLL(d){this.a=d},
YE:function YE(d,e){this.c=d
this.a=e},
ayB:function ayB(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1O:function d1O(d){this.a=d},
d1M:function d1M(d){this.a=d},
d1N:function d1N(d){this.a=d},
bud:function bud(){},
Ur:function Ur(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCy:function aCy(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPK:function dPK(d){this.a=d},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP8:function dP8(d,e){this.a=d
this.b=e},
dOH:function dOH(d,e,f){this.a=d
this.b=e
this.c=f},
dOG:function dOG(d){this.a=d},
dOI:function dOI(d,e){this.a=d
this.b=e},
dON:function dON(d,e,f){this.a=d
this.b=e
this.c=f},
dOM:function dOM(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d){this.a=d},
dP4:function dP4(d,e,f){this.a=d
this.b=e
this.c=f},
dP1:function dP1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOL:function dOL(d){this.a=d},
dPc:function dPc(d){this.a=d},
dPb:function dPb(){},
dOR:function dOR(d){this.a=d},
dPv:function dPv(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
dP2:function dP2(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e){this.a=d
this.b=e},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dPj:function dPj(d){this.a=d},
dPl:function dPl(){},
dPm:function dPm(){},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPp:function dPp(){},
dPq:function dPq(d){this.a=d},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dPe:function dPe(d){this.a=d},
dPf:function dPf(d){this.a=d},
dPg:function dPg(d){this.a=d},
dPh:function dPh(d){this.a=d},
dOO:function dOO(){},
dOP:function dOP(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOK:function dOK(d,e){this.a=d
this.b=e},
dOJ:function dOJ(d,e,f){this.a=d
this.b=e
this.c=f},
dP5:function dP5(d){this.a=d},
dP6:function dP6(d,e,f){this.a=d
this.b=e
this.c=f},
dP_:function dP_(d,e){this.a=d
this.b=e},
dOW:function dOW(d){this.a=d},
dOT:function dOT(d,e,f){this.a=d
this.b=e
this.c=f},
dOX:function dOX(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(){},
dP0:function dP0(d,e){this.a=d
this.b=e},
dOU:function dOU(d){this.a=d},
dOS:function dOS(d,e,f){this.a=d
this.b=e
this.c=f},
dOV:function dOV(){},
dPa:function dPa(d){this.a=d},
dP9:function dP9(d,e){this.a=d
this.b=e},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPr:function dPr(d){this.a=d},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPt:function dPt(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPF:function dPF(d){this.a=d},
dPG:function dPG(d){this.a=d},
dPI:function dPI(){},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPC:function dPC(d,e,f){this.a=d
this.b=e
this.c=f},
dPA:function dPA(d,e,f){this.a=d
this.b=e
this.c=f},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e){this.a=d
this.b=e},
ayy:function ayy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcH:function bcH(d,e,f){this.c=d
this.d=e
this.a=f},
d1K:function d1K(){},
d1L:function d1L(){},
abM:function abM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d27:function d27(){},
d26:function d26(d){this.a=d},
YG:function YG(d,e,f){this.c=d
this.d=e
this.a=f},
ayD:function ayD(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d23:function d23(d){this.a=d},
d24:function d24(d,e,f){this.a=d
this.b=e
this.c=f},
d25:function d25(d,e){this.a=d
this.b=e},
d21:function d21(d,e){this.a=d
this.b=e},
d2_:function d2_(d){this.a=d},
d1Y:function d1Y(d){this.a=d},
d1V:function d1V(d){this.a=d},
d20:function d20(d){this.a=d},
d1X:function d1X(d){this.a=d},
d22:function d22(d){this.a=d},
d1Z:function d1Z(d){this.a=d},
d1W:function d1W(d){this.a=d},
YD:function YD(d,e,f){this.c=d
this.d=e
this.a=f},
ayA:function ayA(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d1H:function d1H(d){this.a=d},
d1G:function d1G(d,e){this.a=d
this.b=e},
d1I:function d1I(d){this.a=d},
d1F:function d1F(d,e){this.a=d
this.b=e},
d1J:function d1J(d){this.a=d},
d1E:function d1E(d,e){this.a=d
this.b=e},
d1A:function d1A(d){this.a=d},
d1B:function d1B(d){this.a=d},
d1C:function d1C(d,e){this.a=d
this.b=e},
d1D:function d1D(d){this.a=d},
Pl:function Pl(d,e,f){this.c=d
this.d=e
this.a=f},
ayG:function ayG(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2k:function d2k(d){this.a=d},
d2l:function d2l(d){this.a=d},
d2m:function d2m(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2o:function d2o(d,e){this.a=d
this.b=e},
d2p:function d2p(d){this.a=d},
d2r:function d2r(d){this.a=d},
d2q:function d2q(d){this.a=d},
YI:function YI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayE:function ayE(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d2g:function d2g(d,e){this.a=d
this.b=e},
d2h:function d2h(d,e){this.a=d
this.b=e},
d28:function d28(d,e,f){this.a=d
this.b=e
this.c=f},
d29:function d29(d){this.a=d},
d2a:function d2a(){},
d2f:function d2f(){},
d2b:function d2b(d,e){this.a=d
this.b=e},
d2c:function d2c(d,e){this.a=d
this.b=e},
d2d:function d2d(d,e){this.a=d
this.b=e},
d2e:function d2e(d,e){this.a=d
this.b=e},
abK:function abK(d,e){this.c=d
this.a=e},
d1z:function d1z(d){this.a=d},
YC:function YC(d){this.a=d},
ayz:function ayz(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YJ:function YJ(d,e){this.c=d
this.a=e},
ayF:function ayF(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d2j:function d2j(d){this.a=d},
d2i:function d2i(d){this.a=d},
bcI:function bcI(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hCU(){var x,w=$.ps(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.h_(v)},
Na(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Na=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Na)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bH),$async$Na)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
q=A.aa(n)
$.am.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Na,w)},
a6D(d){return B.hCV(d)},
hCV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6D)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hE("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cI,null),$async$a6D)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6D,w)},
UB(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Na(),$async$UB)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dW(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a7().ac())
r.n(s,d,t)
x=4
return A.b(B.a6D(s),$async$UB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UB,w)},
UC(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UC)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.U(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c7B(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hCU()
t=A.U(u).k("M<1,a4<m,aC>>")
r=A.C(new A.M(u,new B.c7C(s),t),t.k("ak.E"))
x=6
return A.b(B.Na(),$async$UC)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=7
return A.b(B.a6D(q),$async$UC)
case 7:x=8
return A.b(B.a6E(r,u,g,s),$async$UC)
case 8:v=new A.boh(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UC,w)},
aoK(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Na(),$async$aoK)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoK,w)},
c7D(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Na(),$async$c7D)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7D,w)},
a6E(d,e,f,g){return B.hCW(d,e,f,g)},
hCW(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6E=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoI("media",r,new B.c7A(s,e,g),f,q),$async$a6E)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UB(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6E)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UB(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$a6E)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.UB(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6E)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6E,w)},
Ek(d,e,f){return B.hCX(d,e,f)},
hCX(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ek=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ek)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoK(b3),$async$Ek)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ks,null,g),$async$Ek)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoK(b3),$async$Ek)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Na(),$async$Ek)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cn(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a5(a7)
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
b0=A.oU(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aa_(a8.a,b0,"media",a8.d,a9).Cy(m)
k=A.cx(l,0,null)
x=17
return A.b(B.aYY(k,n,o,s,b7),$async$Ek)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
$.am.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
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
a8=A.oU(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aa_(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ek)
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
a0=A.dW(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6D(e),$async$Ek)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ek,w)},
c7B:function c7B(){},
c7C:function c7C(d){this.a=d},
c7A:function c7A(d,e,f){this.a=d
this.b=e
this.c=f},
aPN(){var x=0,w=A.j(y.H),v,u
var $async$aPN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hNT=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPN)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPN)
case 3:u=$.fYX
u=u==null?null:u.bG(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPN)
case 4:$.fYX=$.hWq=$.hWr=null
return A.h(null,w)}})
return A.i($async$aPN,w)},
fpE(d){var x=0,w=A.j(y.H),v,u
var $async$fpE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5T){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fpF(new A.bW(u,y.aY))
x=3
return A.b(u.ij(0,C.hL,new B.fpG()),$async$fpE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fpE,w)},
hWo(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hCE(x):x},
fZ0(d){var x=0,w=A.j(y.T),v,u,t
var $async$fZ0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,13))
if(C.a.a0(u,"WR")){v=B.aoM(u)
x=1
break}v=B.fTR(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZ0,w)},
fZ_(d){var x=0,w=A.j(y.T),v,u,t
var $async$fZ_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,14))
if(C.a.a0(u,"WR")){v=B.aoN(u)
x=1
break}v=B.fTR(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZ_,w)},
fHn(d){var x=0,w=A.j(y.T),v
var $async$fHn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoN(d),$async$fHn)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fHn,w)},
bAs(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fZ_(d),$async$bAs)
case 3:q=f
if(q==null){x=1
break}t=C.R.aI(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAs,w)},
feb(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$feb=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Uv(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bt(d.ant(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feb,w)},
Gd(d,e,f){return B.hYP(d,e,f)},
hYP(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gd=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fZ0(a1),$async$Gd)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aI(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a5(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b4(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hq6().aDn(D.dlL,null),$async$Gd)
case 4:l=d.fYX=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axp(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fqb(f,k,new B.fqc(f,a2,k,j,a0,p),a2,j,a0,p,new A.bW(t,y.ch))
x=5
return A.b(l.a71(0,new B.WL(r,"offer")),$async$Gd)
case 5:d=l
x=7
return A.b(l.akj(0),$async$Gd)
case 7:x=6
return A.b(d.a6U(0,a4),$async$Gd)
case 6:x=8
return A.b(B.fpE(l),$async$Gd)
case 8:x=9
return A.b(l.aoc(),$async$Gd)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hWo(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoO(m,h),$async$Gd)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h8T(h)
case 11:v=new A.bnz(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gd,w)},
fpF:function fpF(d){this.a=d},
fpG:function fpG(){},
fqc:function fqc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqb:function fqb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fqa:function fqa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i_H(d){switch(d){case"new":return D.eeu
case"checking":return D.eev
case"connected":return D.eex
case"completed":return D.eew
case"failed":return D.eez
case"disconnected":return D.eeA
case"closed":return D.aLC
case"count":return D.eey}return D.aLC},
i_I(d){switch(d){case"new":return D.aLD
case"gathering":return D.eeB
case"complete":return D.a5T}return D.aLD},
i9W(d){switch(d){case"stable":return D.eeC
case"have-local-offer":return D.eeD
case"have-local-pranswer":return D.eeF
case"have-remote-offer":return D.eeE
case"have-remote-pranswer":return D.eeG
case"closed":return D.aLJ}return D.aLJ},
i8b(d){switch(d){case"new":return D.aLG
case"connecting":return D.aLH
case"connected":return D.aLI
case"closed":return D.a5U
case"disconnected":return D.aLF
case"failed":return D.aLE}return D.a5U},
a8W:function a8W(d,e){this.a=d
this.b=e},
Oa:function Oa(d,e){this.a=d
this.b=e},
WK:function WK(d,e){this.a=d
this.b=e},
O9:function O9(d,e){this.a=d
this.b=e},
EN:function EN(d,e){this.a=d
this.b=e},
ciz:function ciz(){},
fVA(d){var x=new B.EM()
x.a=d
x.b=!0
return x},
EM:function EM(){this.b=this.a=$},
a8V:function a8V(){},
at2:function at2(){},
WL:function WL(d,e){this.a=d
this.b=e},
fTN(){var x=0,w=A.j(y.H)
var $async$fTN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fTN,w)},
fTQ(d,e,f){var x=0,w=A.j(y.T),v
var $async$fTQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mw(D.mC))){v=null
x=1
break}v=B.fHD(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTQ,w)},
h8T(d){var x,w=F.abo.a3Q(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcz().aJ(x)}return C.cS.gcz().aJ(w)},
hCD(d){var x,w,v=C.cG.aJ(d)
try{x=C.c9.ca(0,F.abn.bbQ(v,!1))
return x}catch(w){x=C.c9.ca(0,v)
return x}},
fTR(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hCD(C.a.b4(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b4(t,w.length)
try{v=C.c9.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hCE(d){var x,w,v,u,t,s=A.a([],y.s)
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
hCF(){var x,w=$.ps(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.h_(v)},
aZ3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZ3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bH),$async$aZ3)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
$.am.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
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
c7j(d,e){return B.hCG(d,e)},
hCG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7j=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hE("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cI,null),$async$c7j)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
$.am.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7j,w)},
aZ6(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZ6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ3(d),$async$aZ6)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ6,w)},
aZ5(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZ5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hCF()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c7j(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcz().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$aZ5)
case 3:if(!h){v=null
x=1
break}v=new A.a_L("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ5,w)},
aZ4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZ4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZ3(o),$async$aZ4)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.ca(0,C.cG.aJ(u))
if(J.iX(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZ4,w)},
c7k(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBp("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cI),$async$c7k)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7k,w)},
aZ7(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZ7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ib(),$async$aZ7)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ7,w)},
aoF(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoF)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZ7(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoF,w)},
aoD(d,e){var x=0,w=A.j(y.H)
var $async$aoD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoD)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoD)
case 2:return A.h(null,w)}})
return A.i($async$aoD,w)},
a6v(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6v=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6v)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ib(),$async$a6v)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=5
return A.b(A.a6u(s),$async$a6v)
case 5:x=6
return A.b(B.aoD(f,u),$async$a6v)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
a6w(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6w=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6w)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ib(),$async$a6w)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
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
return A.b(B.aoD(g,q),$async$a6w)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6u(u),$async$a6w)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6w,w)},
a6x(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6x=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6x)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ib(),$async$a6x)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZ0(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a6x)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a7().ac()],p,p),null)),$async$a6x)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
c7l(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c7l)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aI(0,r,null)
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
return A.i($async$c7l,w)},
Ic(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ic=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7l(d),$async$Ic)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZ7(t),$async$Ic)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoE(d),$async$Ic)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZ0(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoE(d),$async$Ic)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ic,w)},
aoE(d){var x=0,w=A.j(y.H)
var $async$aoE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoE)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoE)
case 2:return A.h(null,w)}})
return A.i($async$aoE,w)},
aZ8(){var x,w=$.ps(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.h_(v)},
a6y(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fTS(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7o(d){return B.hCI(d)},
hCI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6y(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bH),$async$c7o)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
$.am.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7o,w)},
aoH(d,e){return B.hCJ(d,e)},
hCJ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6y(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hE("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cI,null),$async$aoH)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
$.am.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoH,w)},
c7q(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6y(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoH(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7q,w)},
c7p(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6y(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoH(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7p,w)},
c7r(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6y(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoH(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7r,w)},
c7s(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fTS(d)){v=null
x=1
break}x=3
return A.b(B.c7o(d),$async$c7s)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a5(u)
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
return A.i($async$c7s,w)},
a6F(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6F=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6F)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bH),$async$a6F)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
q=A.aa(n)
$.am.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6F,w)},
aoL(d){return B.hCY(d)},
hCY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoL)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hE("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cI,null),$async$aoL)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoL,w)},
aoM(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoM)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6F(),$async$aoM)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.ca(0,C.cG.aJ(q))
if(J.iX(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dW(A.a2(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a7().ac())
J.aF(s,j,o)
x=9
return A.b(B.aoL(s),$async$aoM)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoM,w)},
aoO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoO)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6F(),$async$aoO)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dW(A.a2(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcz().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a7().ac())
t.n(u,p,q)
x=5
return A.b(B.aoL(u),$async$aoO)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoO,w)},
aoN(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoN)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6F(),$async$aoN)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.ca(0,C.cG.aJ(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoN,w)},
anN(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pV)){v=null
x=1
break}x=3
return A.b(p.m_(e),$async$anN)
case 3:r=g
u=4
x=7
return A.b(r.ht(C.fY),$async$anN)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vl(o))
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
return A.i($async$anN,w)},
i6a(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fFT(d){return B.i6c(d)},
i6c(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fFT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ib("media").Kx(d,3600),$async$fFT)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fFT,w)},
CM(d,e,f,g,h,i){var x=null
return B.i69(d,e,f,g,h,i)},
i69(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CM=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h8W(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fTU(r),$async$CM)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fFT(o),$async$CM)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6z(r),$async$CM)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aOM)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lw(A.a([],g))
x=15
return A.b(d.eX(0,A.atS("GET",A.cx(n,0,null))).cO(0,C.F4),$async$CM)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6z(r),$async$CM)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.K5(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CM)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZa(r,k),$async$CM)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a6(0),$async$CM)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Uv(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a6z(r),$async$CM)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CM,w)},
aPv(d){return B.i6b(d)},
i6b(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ib("media").W(0,d),$async$aPv)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPv,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[146]
O=c[40]
F=c[241]
I=c[138]
P=c[221]
E=c[214]
G=c[87]
Q=c[186]
R=c[139]
S=c[219]
K=c[245]
L=c[250]
B=a.updateHolder(c[21],B)
D=c[248]
T=c[185]
M=c[204]
U=c[65]
V=c[251]
W=c[71]
X=c[55]
N=c[86]
Y=c[249]
B.ciA.prototype={
aDn(d,e){return this.cIM(d,e)},
cIM(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kj(A.cB(t)))
t=J.k(u)
v=B.hHz(C.cS.gcz().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDn,w)}}
B.b3i.prototype={
bxh(d){var x=this,w=x.w
w.onclose=A.hi(new B.civ(x))
w.onopen=A.hi(new B.ciw(x))
w.onmessage=A.hi(new B.cix(x))
w.onbufferedamountlow=A.hi(new B.ciy(x))},
gdc(d){return this.x},
agA(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EM()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fVA(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$agA)
case 8:v=t.fVA(s.an0(f,0,null))
x=1
break
case 7:case 4:v=B.fVA(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agA,w)}}
B.b3j.prototype={
bxi(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hi(new B.ciB(x)))
w.addEventListener("icecandidate",A.hi(new B.ciC(x)))
w.addEventListener("iceconnectionstatechange",A.hi(new B.ciD(x)))
w.onicegatheringstatechange=A.hi(new B.ciE(x))
w.addEventListener("signalingstatechange",A.hi(new B.ciF(x)))
if(!$.h1D())w.addEventListener("connectionstatechange",A.hi(new B.ciG(x)))
w.addEventListener("negotiationneeded",A.hi(new B.ciH(x)))
w.addEventListener("track",A.hi(new B.ciI(x)))},
akj(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.kj(A.cB(A.T(y.N,y.z)))),y.aQ),$async$akj)
case 3:t=f
v=new B.WL(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akj,w)},
a6U(d,e){return this.bmJ(0,e)},
bmJ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6U)
case 2:return A.h(null,w)}})
return A.i($async$a6U,w)},
a71(d,e){return this.bmZ(0,e)},
bmZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a71=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a71)
case 2:return A.h(null,w)}})
return A.i($async$a71,w)},
aoc(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WL(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoc,w)},
bG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bG,w)}}
B.abL.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YF.prototype={
S(){return new B.ayC()},
gdd(){return this.c}}
B.ayC.prototype={
a_(){this.a1()
this.adj()},
adj(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ1(u.e,u.c),$async$adj)
case 2:t=e
if(v.c!=null)v.m(new B.d1S(v,t))
return A.h(null,w)}})
return A.i($async$adj,w)},
PS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoA(t.e,t.c,!1),$async$PS)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(D.eW_)
x=1
break}x=4
return A.b(B.a6t(u.a.c,"individual"),$async$PS)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5q(A.e8(new B.d1P(u),!1,null,y.H)),$async$PS)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PS,w)},
IX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fnK(o),$async$IX)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6x(o.e,r,s,q),$async$IX)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.U(D.eT4)
x=1
break}x=5
return A.b(B.a6t(u.a.c,"member"),$async$IX)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5q(A.e8(new B.d1R(u),!1,null,y.H)),$async$IX)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IX,w)},
xQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6s(t.e,o,t.f,t.r,t.w,s),$async$xQ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6t(u.a.c,"org_owner"),$async$xQ)
case 4:x=5
return A.b(B.aoF(u.a.c),$async$xQ)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.foe(o),$async$xQ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6v(s,t,o,q.c),$async$xQ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.U(D.eT1)
x=1
break}x=10
return A.b(B.aoF(u.a.c),$async$xQ)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5q(A.e8(new B.d1Q(u),!1,null,y.H)),$async$xQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xQ,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.je:C.pH,q=B.fTP(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fN,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.fdJ,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h8,t,t,t),C.aB,D.fwC,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bXl,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lD(new B.d1U(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acd(C.eS,C.ayj,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gccH(),t),C.ac],v))
p.push(new B.acd(C.oP,C.a1L,"Team Member","Sign in with your organization access code + password",u.gcdy(),t))
p.push(C.ac)
p.push(new B.acd(C.akP,C.a3j,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcd3(),t))
return A.c7(t,r,A.bl(!0,A.c9(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ai6,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acd.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eF(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.pd,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bu,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bP,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aB9.prototype={}
B.aEl.prototype={}
B.jn.prototype={
mw(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b4(x,w+1).toLowerCase())},
gaoR(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ag(){var x,w=this,v=A.T(y.N,y.z)
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
bbi(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cHf(d){return this.bbi(null,d)},
aD8(d){return this.bbi(d,null)}}
B.Up.prototype={
S(){return new B.aCw(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aCw.prototype={
a_(){this.a1()
this.adk()},
adk(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bs(u.a.c),$async$adk)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOD(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adk,w)},
adl(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fK(new A.fD(s)),$async$adl)
case 3:t=u.c
if(t!=null)t.J(y.q).f.U(D.eWU)
case 1:return A.h(v,w)}})
return A.i($async$adl,w)},
Zc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anN(s.d,4),$async$Zc)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rT(r,"ngmy_my_code_"+m+".png"),$async$Zc)
case 8:q=e
o=s.c
if(o!=null)o.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zc,w)},
ah2(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9z("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ah2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ah2,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.je:C.pH,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lG
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2c,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ahH,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.c9(A.v(A.a([x,C.mK,w,C.kE,new A.ev(A.p(p,A.pM(p,p,!1,B.hCz(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bP,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kE,A.B(A.a([A.E(A.eC(N.BP,C.TV,q.gc5H(),p),1),C.av,A.E(A.dn(C.yA,C.a86,q.gc5I(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.eC(M.a0D,D.fss,q.gcsd(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.Mp,p,p,C.ag)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.Ut.prototype={
S(){return new B.aCz(new A.as(C.as,$.aw()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.aCz.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ia(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ia(u.d.a.a)
if(t==null){u.m(new B.dPM(u))
x=1
break}u.m(new B.dPN(u))
s=u.a
r=s.c
x=3
return A.b(B.a6r(s.d,new B.dPO(u),t,r),$async$Zd)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPP(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zd,w)},
a1o(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1o=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dPQ(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.rn(r.a.c,q),$async$a1o)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPR(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahf(p,m,l,j,k),$async$a1o)
case 8:o=e
if(r.c!=null)r.m(new B.dPS(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPT(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPU(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1o,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.ae4:D.abX,h=j?D.afy:C.c,g=j?C.aQ:C.M,f=j?C.bJ:C.ak,e=j?D.ad8:C.aL
i=[i,e,h,g,f,j?C.fc:C.bU]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bL5,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fB,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2c,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ue(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bi2()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.Mi,k,k,"",k,!0,new A.b4(4,A.n(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPV(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m4,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.L9(l.a.d,4)
m=A.C(new A.M(m,new B.dPW(x,new A.aFz(i)),m.$ti.k("M<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lO,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eRB)
else q.push(A.X(C.ln,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aP,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iA,k,k,k,C.eQ,k,k,k)],r))}e=A.E(A.c9(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bu4,k,k,C.ag),1)
u=l.f?k:l.gcse()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eC(M.a0D,D.ftr,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc5J()
t=A.bn(C.aE,k,k,0,C.c,k,C.nc,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c7(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bl(!0,A.mE(new B.dPX(),A.v(A.a([e,new A.D(D.btA,A.v(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rM:D.frR,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Y3,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bi2.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hc(C.bw,v.length),C.aN)}}
B.Uq.prototype={
S(){return new B.aCx()}}
B.aCx.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b5,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b5,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
q(){var x,w=this,v=w.d
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
adm(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adm=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOE(r))
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
return A.b(B.a6w(p,m,n,o,C.a.i(l).length===0?null:l),$async$adm)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.U(D.eWv)
s=[1]
x=4
break}p.J(y.q).f.U(D.eV8)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOF(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adm,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.je:C.pH,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fkw,s,s,s,1,s,!0),p=A.p(s,D.bm4,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.Gx,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bS0,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bRW,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bSb,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc5K()
u=A.bn(C.aE,s,s,s,s,C.fO,s,s,s,s,s,s)
return A.c7(q,r,A.c9(A.v(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mK,A.bG(t.r?C.rM:C.aRt,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abs.prototype={}
B.buz.prototype={
a45(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a45=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.ant()))
x=3
return A.b(B.QO(t,s),$async$a45)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a45,w)},
gdd(){return this.a}}
B.N8.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YE.prototype={
S(){return new B.ayB(new A.as(C.as,$.aw()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.ayB.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1O(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c5Q(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0I(d),u=x.a.c,t=u?C.ia:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.je:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fN,32)],n),l=A.p(w,T.anu,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cy,16)],n),C.aoh,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ue(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bud()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.N,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Ff,w,w,"",w,!0,new A.b4(4,A.n(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.aYx),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1M(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m4,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nz,new B.d1N(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.n(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eJ(w,C.K,new A.cT(Q.K9,A.c0(new A.D(C.xL,A.v(A.a([l,C.aP,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.av,A.E(A.c0(A.aG(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.e8p,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc5P(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Oa,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.Mr,C.d0,w,w,w)}}
B.bud.prototype={
oz(d,e){return e.ake(e.a.toUpperCase())}}
B.Ur.prototype={
S(){return new B.aCy(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCy.prototype={
a_(){var x=this
x.a1()
x.tF()
x.w=A.du(C.jj,new B.dPK(x))},
q(){var x=this.w
if(x!=null)x.a6(0)
B.UA()
this.a2()},
a0g(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N7(u.a.c),$async$a0g)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Aw(u.a.c),$async$a0g)
case 4:u.m(new s.dP7(u,e))
u.i1("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0g,w)},
tF(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N7(u.a.c),$async$tF)
case 3:t=e
x=4
return A.b(B.Aw(u.a.c),$async$tF)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dP8(u,s))
if(t>0)u.i1("Received "+A.t(t)+" file(s) via My Code.")
u.Nh(u.d)
B.Bs(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tF,w)},
Nh(d){return this.bBe(d)},
bBe(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6B(r,u.a.c),$async$Nh)
case 8:p=f
if(u.c==null){x=1
break}new B.dOH(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.mw(D.mC))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Uy(r,u.a.c),$async$Nh)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Aw(u.a.c),$async$Nh)
case 12:u.m(new o.dOI(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nh,w)},
NE(d){return this.bHs(d)},
bHs(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6B(d,u.a.c),$async$NE)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dON(u,d,t))
x=6
return A.b(A.fK(new A.fD(t)),$async$NE)
case 6:u.i1("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fK(new A.fD(r.toUpperCase())),$async$NE)
case 7:u.i1("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NE,w)},
i1(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tG(d,e){return this.cCJ(d,e)},
cCJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPy(r,e))
u=3
x=6
return A.b(d.$0(),$async$tG)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPz(r))
$.eV.mr()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tG,w)},
gaUl(){var x=this.a
return x.f||x.r||x.w},
HU(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUl()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7h(s,n,r,q,o,t),$async$HU)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i1("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fzm(o,u.a.c),$async$HU)
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
return A.b(B.CO(s,o,r,q,n,t),$async$HU)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HU,w)},
a_k(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoF(u.a.c),$async$a_k)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i1("No organization portal found.")
x=1
break}t=J.a5(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cl(A.e8(new B.dP4(u,r,q),!1,null,y.H)),$async$a_k)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_k,w)},
a0r(d){return this.clO(d)},
clN(){return this.a0r(1)},
clO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUl()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoC(u.a.c),$async$a0r)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0r,w)},
abi(d,e,f){return this.bY1(d,e,f)},
bY1(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i1(e)
x=1
break}x=3
return A.b(u.tG(new B.dP1(u,d,null,e,f),"Uploading\u2026"),$async$abi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abi,w)},
bBm(){B.hnx(!1,new B.dOL(this))
return},
cqO(){this.m(new B.dPc(this))},
axE(){var x=0,w=A.j(y.H),v=this
var $async$axE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bBm()
return A.h(null,w)}})
return A.i($async$axE,w)},
abe(){var x=0,w=A.j(y.H),v=this
var $async$abe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tG(new B.dOR(v),"Importing\u2026"),$async$abe)
case 2:return A.h(null,w)}})
return A.i($async$abe,w)},
RU(d){return this.cC9(d)},
cC9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mw(D.mC)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cl(A.e8(new B.dPv(u,d),!1,null,y.H)),$async$RU)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mw(D.Q6)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cl(A.e8(new B.dPw(u,d),!1,null,y.H)),$async$RU)
case 8:x=1
break
case 7:x=u.bYJ(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cl(A.e8(new B.dPx(u,d),!1,null,y.H)),$async$RU)
case 11:x=1
break
case 10:u.i1("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
bYJ(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cEQ,C.a.b4(x,w+1).toLowerCase())},
aeN(d){return this.ccL(d)},
ccL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mw(D.mC)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cl(A.e8(new B.dP2(u,d),!1,null,y.H)),$async$aeN)
case 5:x=1
break
case 4:u.m(new B.dP3(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aeN,w)},
Rg(d){return this.ctK(d)},
ctK(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i1("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p4(t,s.c,s.f),$async$Rg)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tG(new B.dPo(u,d),"Preparing QR\u2026"),$async$Rg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rg,w)},
ahs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPp(),A.U(t).k("M<1,m>")).fM(0)}t=u.d
s=A.U(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPq(q),s),s.k("J.E"))
if(r.length===0){u.i1("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rg(r),$async$ahs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahs,w)},
ahl(d){return this.ctg(d)},
ctg(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0I(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dPi(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahl)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RU(d)
break
case"qr":u.Rg(A.a([d],y.r))
break
case"send_my_code":u.cdn(A.a([d],y.r))
break
case"save":u.agH(d)
break
case"delete":u.II(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahl,w)},
X8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dOO(),A.U(t).k("M<1,m>")).fM(0)}t=u.d
s=A.U(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dOP(q),s),s.k("J.E"))
if(r.length===0){u.i1("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p4(t,s.c,s.f),$async$X8)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tG(new B.dOQ(u,r),"Preparing file\u2026"),$async$X8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
afT(d){return this.cka(d)},
cka(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hof(d,!1),$async$afT)
case 3:s=f
r=s==null
q=B.a6y(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i1("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afT,w)},
aeT(){var x=0,w=A.j(y.H),v=this,u
var $async$aeT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fGY(u,v.a.c),$async$aeT)
case 2:return A.h(null,w)}})
return A.i($async$aeT,w)},
bBl(){B.hnx(!1,new B.dOK(this,null))
return},
IW(d,e){return this.cdo(d,e)},
b_l(d){return this.IW(null,d)},
cdn(d){return this.IW(d,null)},
cdo(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dP5(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.x5.c7().amO(!0,C.ZR,!1),$async$IW)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tG(new B.dP6(l,s,r),"Preparing\u2026"),$async$IW)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.i1("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i1("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCy(p,l,e,s.a.c),$async$IW)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i1("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IW,w)},
I9(d){return this.bXP(d)},
bXP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$I9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hCy(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_l(t),$async$I9)
case 8:x=6
break
case 7:u.i1("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i1("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tG(new B.dP_(u,d),"Receiving video\u2026"),$async$I9)
case 11:x=1
break
case 10:x=12
return A.b(u.tG(new B.dP0(u,d),"Receiving\u2026"),$async$I9)
case 12:case 1:return A.h(v,w)}})
return A.i($async$I9,w)},
E6(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CI()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afT(t),$async$E6)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.I9(s),$async$E6)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cl(A.e8(new B.dPa(u),!1,null,y.N)),$async$E6)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tF(),$async$E6)
case 10:x=1
break
case 9:x=11
return A.b(u.I9(C.a.i(r)),$async$E6)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E6,w)},
agH(d){return this.cpn(d)},
cpn(d){var x=0,w=A.j(y.H),v=this
var $async$agH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tG(new B.dP9(v,d),"Saving\u2026"),$async$agH)
case 2:return A.h(null,w)}})
return A.i($async$agH,w)},
II(d){return this.bJM(d)},
bJM(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$II=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l3(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$II)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c7k(t),$async$II)
case 6:case 5:s=d.a
x=7
return A.b(B.Ej(u.a.c,s),$async$II)
case 7:u.r.W(0,s)
x=8
return A.b(u.tF(),$async$II)
case 8:case 1:return A.h(v,w)}})
return A.i($async$II,w)},
ahy(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0I(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dPu(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahy)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeT()
break
case"import":u.abe()
break}case 1:return A.h(v,w)}})
return A.i($async$ahy,w)},
c5N(d){var x=d.c
if(C.a.a0(x,"video/")||d.mw(D.mC))return C.q4
if(C.a.a0(x,"image/")||d.mw(D.Q6))return C.u_
if(C.a.t(x,"pdf"))return E.NG
return D.alh},
B(d){var x,w,v=this,u=null,t=B.a0I(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gp,u,u,u,new B.dPF(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bLC,u,u,u,v.e?u:v.gcd4(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcqN()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bFX:E.alG,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0A,u,u,u,v.e?u:v.gc5O(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o6,u,u,u,v.e?u:v.gb0t(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bNj,u,u,u,v.e?u:new B.dPG(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lD(new B.dPH(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m4(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayy(C.jq,s,!0,t,w?u:v.gctL(),u),1)
x.push(new A.D(D.bsn,A.mE(new B.dPI(),A.B(A.a([s,C.av,A.E(new B.ayy(C.vI,"Export",!1,t,w?u:v.gbNl(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iB,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcH(t,v.e?u:v.gb0t(),u)
else s=A.k8(!0,u,u,new B.dPJ(v,t),s,u,D.bsf,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayy.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vq,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vq,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.eC(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eW,t,t,t),u.r,v)}}
B.bcH.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mE(new B.d1K(),new A.D(E.YW,A.v(A.a([A.mE(new B.d1L(),A.p(x,A.X(C.y5,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ew,C.ie,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o6,D.fwV,this.d,A.bn(C.aE,x,x,x,C.c,x,C.YR,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AT,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.abM.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dC(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mw(D.mC))p=D.dbA
else{p=C.a.a0(p,"image/")||i.mw(D.Q6)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoR()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mw(D.mC))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.v(A.a([q,C.at,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fM,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cd))
if(!(!o||i.mw(D.mC)))l.push(A.fRA(C.aE,!1,j,j,j,!1,j,j,new B.d26(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o4,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cd))
return A.mE(new B.d27(),new A.D(C.e5,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Yq,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ah),j),C.ct,h,new A.cy("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YG.prototype={
S(){return new B.ayD()},
gdd(){return this.c}}
B.ayD.prototype={
a_(){this.a1()
this.xH()},
q(){B.hCN(this.e)
this.a2()},
xH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rn(o.c,o.d),$async$xH)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hCQ(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hCP(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d23(s))
x=1
break}s.m(new B.d24(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d25(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xH,w)},
a1n(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rn(t.c,t.d),$async$a1n)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(D.eTB)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahf(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1n)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1n,w)},
bXI(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ko(u,C.A,v,new B.d21(w,t),C.fW,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fM(t,C.A,v,new B.d22(w),C.fW,C.du,!0,v,!1,v,v)
else return C.bI
return A.un(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0I(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BQ,u,u,u,v.gb4j(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.E3
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aP,A.dn(C.BQ,D.fg_,v.gb4j(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bXI()}return A.c7(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YD.prototype={
S(){return new B.ayA(A.ai4(),C.bx,C.bx)},
gdd(){return this.c}}
B.ayA.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fu(w,A.a3(w).k("fu<1>")).ie(new B.d1H(v))
x.gcQ7().ie(new B.d1I(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fu(x,A.a3(x).k("fu<1>"))}if(x==null)x=C.b3G
x.ie(new B.d1J(v))
v.xH()},
xH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rn(p.c,p.d),$async$xH)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1A(s))
x=1
break}x=8
return A.b(s.d.C1(0,new A.a2N(r,s.a.d.c)),$async$xH)
case 8:if(s.c==null){x=1
break}s.m(new B.d1B(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1C(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xH,w)},
Ze(){var x=0,w=A.j(y.H),v=this,u
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h5(0),$async$Ze)
case 5:x=3
break
case 4:x=6
return A.b(u.ii(0),$async$Ze)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Ze,w)},
aSe(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0I(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.E3
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bGW,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Oa,C.n),o,88,o,o,o,o,o,88)
t=A.kZ(C.aE,o,o,m,0,new B.d1D(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSe(p.w)+" / "+p.aSe(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eQ6,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yf:C.iF,o,o,o,o,o)
x=A.v(A.a([u,C.kE,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc5R(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c7(v,w,A.av(new A.D(C.r6,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pl.prototype={
S(){return new B.ayG()},
gdd(){return this.c}}
B.ayG.prototype={
a_(){this.a1()
this.Pe()},
Pe(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pe=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fTQ(o.c,o.d,new B.d2k(s)),$async$Pe)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2l(s))
x=1
break}s.e=r
q=O.hZF(r)
if(q==null){s.m(new B.d2m(s))
x=1
break}s.d=q
q.aN(0,s.gb_9())
x=8
return A.b(q.ic(0).cO(0,C.r2),$async$Pe)
case 8:if(s.c==null){x=1
break}s.m(new B.d2n(s))
x=9
return A.b(q.pT(0),$async$Pe)
case 9:q.tf(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d2o(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pe,w)},
cbm(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d2p(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CN(0,x.gb_9())
w=x.d
if(w!=null)w.q()
B.i8s(x.e)
x.a2()},
adp(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ9(u.c,u.d),$async$adp)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adp,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0I(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aH(t,t,t,t,C.oW,t,t,t,u.gc5L(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ih(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.E3
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahy(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fH(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A_(s,t),A.aD(t,A.CZ(A.p(t,A.X(q?I.yf:C.iF,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bP,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d2r(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c7(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YI.prototype={
S(){return new B.ayE(new A.cs(null,y.A))}}
B.ayE.prototype={
gcCs(){var x,w,v=this.a
if(v.e!==D.Rr)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcC7(){var x,w,v=this.a
if(v.e!==D.z9)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcCs()
if(x!=null){v.Qg(x)
v.e=A.du(R.F7,new B.d2g(v,x))}w=v.gcC7()
if(w!=null){v.Qf(w)
v.f=A.du(C.fU,new B.d2h(v,w))}},
q(){var x=this.e
if(x!=null)x.a6(0)
x=this.f
if(x!=null)x.a6(0)
this.a2()},
Qf(d){return this.cim(d)},
cim(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoK(d),$async$Qf)
case 3:t=f
x=4
return A.b(B.c7D(d),$async$Qf)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d28(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qf,w)},
Qg(d){return this.cin(d)},
cin(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fHn(d),$async$Qg)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAs(t),$async$Qg)
case 4:if(u.c==null){x=1
break}u.m(new B.d29(u))
u.c.J(y.q).f.U(D.aOn)
case 1:return A.h(v,w)}})
return A.i($async$Qg,w)},
gc1K(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc5M(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a19(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a19=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CI()){t=u.c
if(t!=null)t.J(y.q).f.U(D.eWF)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cl(A.e8(new B.d2a(),!1,null,y.N)),$async$a19)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAs(s),$async$a19)
case 4:t=u.c
if(t!=null)t.J(y.q).f.U(D.aOn)
case 1:return A.h(v,w)}})
return A.i($async$a19,w)},
a9b(d){return this.bHt(d)},
bHt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fK(new A.fD(C.d.aH(t,", "))),$async$a9b)
case 3:if(d.e!=null){t=d.J(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9b,w)},
adn(d){return this.bHd(d)},
bHd(d){var x=0,w=A.j(y.H),v=this
var $async$adn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fK(new A.fD(v.a.c)),$async$adn)
case 2:if(d.e!=null)d.J(y.q).f.U(D.eU3)
return A.h(null,w)}})
return A.i($async$adn,w)},
a14(d){return this.cpp(d)},
cpp(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a14=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anN(s.d,4),$async$a14)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rT(r,"ngmy_doc_share_qr.png"),$async$a14)
case 8:q=f
if(d.e!=null)d.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a14,w)},
gaVs(){var x,w=this.a
if(w.e!==D.HB)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b4(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b4(x,13))
return null},
a98(d){return this.bHm(d)},
bHm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a98=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVs()
if(t==null){x=1
break}x=3
return A.b(A.fK(new A.fD(C.a.a0(t,"http")?t:"N2|"+t)),$async$a98)
case 3:if(d.e!=null)d.J(y.q).f.U(D.eVF)
case 1:return A.h(v,w)}})
return A.i($async$a98,w)},
ado(){var x=0,w=A.j(y.H),v=this,u
var $async$ado=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UA(),$async$ado)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$ado,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0I(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HB&&i!==D.Rr&&i!==D.z9
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HB||t===D.Rr||t===D.z9?l:A.aH(l,l,l,l,C.l0,l,l,l,m.gaYl(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pM(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc1K(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HB){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mq,l,l,l)],p))}q.push(C.aP)
q.push(A.d(m.gc5M(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.N,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bR4,D.fp8,new B.d2b(m,d),l)],p))}if(m.a.e===D.HB&&m.gaVs()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hh(D.bND,D.flS,new B.d2c(m,d),l)],p))
if(m.a.e===D.z9){x=(m.w?C.dy:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.E6:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mq,l,l,l)],p))}if(m.a.e===D.Rr){x=(m.r?C.dy:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.E6:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mq,l,l,l),C.ac,A.dn(D.bJp,D.fs9,m.gcpN(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ok(i,A.c7(v,w,new A.D(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.b8,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eC(N.BP,C.TV,new B.d2d(m,d),l),1),C.av,A.E(A.dn(C.yA,C.a86,new B.d2e(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zG,m.gaYl(),A.bn(C.aJ,l,l,l,l,C.fO,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d2f(),y.C)}}
B.abK.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.c9(A.v(A.a([w,C.aP,A.p(x,A.pM(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.ek(A.a([A.bG(C.zH,new B.d1z(d),x)],u),x,x,C.mT,v,x,x,x,x,D.ff0,x)}}
B.YC.prototype={
S(){return new B.ayz(A.z4(C.xr,C.nG,C.ub))}}
B.ayz.prototype={
q(){this.d.q()
this.a2()},
awg(d){var x,w,v,u,t
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
return A.c7(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fml,x,x,x,1,x,!0),C.w,A.z3(this.d,C.bT,this.gawf()),x,!1,!1,x,x)}}
B.YJ.prototype={
S(){return new B.ayF(A.z4(C.xr,C.nG,C.ub))},
gdd(){return this.c}}
B.ayF.prototype={
bYL(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aff(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aff=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RO("text/plain"),$async$aff)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.U(D.eWz)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$aff,w)},
a9X(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hof(p,!0),$async$a9X)
case 3:t=e
p=t==null
s=B.a6y(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.U(D.eTb)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9X,w)},
q(){this.d.q()
this.a2()},
awg(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bYL(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.amA,v,v,v,w.gbMU(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0H,v,v,v,w.gcfM(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.rc:P.Nr,v,v,v,v,v),v,v,v,new B.d2j(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.ft_,v,v,v,1,v,!0)
u=A.z3(w.d,C.bT,w.gawf())
x=A.n(20)
return A.c7(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eea],s),v),v,!1,!1,v,v)}}
B.bcI.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oG
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oG:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Z0,A.B(A.a([u,C.bd,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a8W.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Oa.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WK.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.O9.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EN.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.ciz.prototype={}
B.EM.prototype={}
B.a8V.prototype={}
B.at2.prototype={}
B.WL.prototype={}
var z=a.updateTypes(["az<~>()","R(jn)","m(jn)","Ur(Y)","~()","YF(Y)","H(H,jn)","Pl(Y)","~(m_)","cr(EM)","az<jn?>(@)","Up(Y)","Ut(Y)","D(jn)","jn(@)","a4<m,@>(jn)","YE(Y)","Uq(Y)","YG(Y)","YD(Y)","YI(Y)","abK(Y)","ai<jn>()","YJ(Y)","abM(Y,H)","YC(Y)","a4<m,aC>(jn)","cr(WK)","cr(a8V)","az<cr>(EM)"])
B.civ.prototype={
$1(d){var x=this.a
x.x=D.aLB
x.y.L(0,D.aLB)},
$S:68}
B.ciw.prototype={
$1(d){var x=this.a
x.x=D.aLA
x.y.L(0,D.aLA)},
$S:68}
B.cix.prototype={
$1(d){var x=this.a
x.agA(A.aOf(d.data)).bB(new B.ciu(x),y.b)},
$S:68}
B.ciu.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ciy.prototype={
$1(d){},
$S:68}
B.ciB.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hHy(d.channel))},
$S:15}
B.ciC.prototype={
$1(d){},
$S:15}
B.ciD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i_H(w.iceConnectionState)
x.cx=w
if($.h1D())switch(w.a){case 0:x.cy=D.aLG
break
case 1:x.cy=D.aLH
break
case 3:x.cy=D.aLI
break
case 5:x.cy=D.aLE
break
case 6:x.cy=D.aLF
break
case 7:x.cy=D.a5U
break
default:break}},
$S:152}
B.ciE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i_I(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.ciF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i9W(w.signalingState)},
$S:152}
B.ciG.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i8b(w.connectionState)},
$S:152}
B.ciH.prototype={
$1(d){},
$S:152}
B.ciI.prototype={
$1(d){},
$S:15}
B.fjR.prototype={
$1(d){var x=y.F.a(new A.rJ([],[]).pB(d.target.result,!1)),w=C.xs.t(x.objectStoreNames,"blobs")
if(!w)C.xo.Kv(x,"blobs")},
$S:182}
B.fGM.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vV.fe(this.b)
$.eV.mr()
this.c.$1(d)},
$S:457}
B.fGO.prototype={
$1(d){return this.a.$1(B.hQv(this.b,this.c))},
$S:34}
B.fGN.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fGL.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fH0.prototype={
$1(d){var x=this
return B.hdN(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fH1.prototype={
$1(d){var x=this
return B.hdN(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.flO.prototype={
$1(d){var x=this
return B.c7e(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1S.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1P.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7e(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1R.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7e(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1Q.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7e(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1U.prototype={
$4(d,e,f,g){var x=null
return A.jH(A.B(A.a([A.aH(x,x,x,x,D.bI0,x,x,x,new B.d1T(d),x,x,x,x,x,x),A.E(A.Ey(D.PS,!0,x,C.a_N,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PS,x,g,C.air,0,e,f)},
$C:"$4",
$R:4,
$S:410}
B.d1T.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fnN.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eE,y.o).w,t=this.a,s=t?C.ia:C.c,r=A.n(28),q=A.p(v,D.bmo,C.f,v,v,D.b_b,v,v,v,v,D.aih,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bMa,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.D(C.Fk,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amQ,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dT(C.de,new B.fnL(d),v),1),C.av,A.E(A.bG(D.fkT,new B.fnM(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.M6,v,v,v,v),v)},
$S:60}
B.fnL.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fnM.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.U(D.eUi)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aB9(v,x))},
$S:0}
B.fog.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eE,y.o).w,u=x.a,t=u?C.ia:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bme,C.f,w,w,D.b0E,w,w,w,w,D.aih,w,w,1/0),new A.D(C.Fk,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fYL(u,"Organization name",C.FM,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fYL(u,"Access code",C.nh,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fYL(u,"Member password",H.Gk,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.ft4,new B.fof(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fO,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.M6,w,w,w,w),w)},
$S:60}
B.fof.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.U(D.eUn)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEl(u,x,w))},
$S:0}
B.c75.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a5(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cx(j,0,null):s.b.aQ(j)
u=4
x=7
return A.b(A.vd(p,null).cO(0,C.Y2),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bt(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.aa(h)
$.am.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c7b.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7c.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c7d.prototype={
$1(d){return d.b},
$S:z+2}
B.c77.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c78.prototype={
$1(d){return d.b},
$S:z+2}
B.c76.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c79.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c7a.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fGZ.prototype={
$1(d){return new B.Up(this.a,null)},
$S:z+11}
B.fH_.prototype={
$1(d){return new B.Ut(this.a,this.b,this.c,null)},
$S:z+12}
B.dOD.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPM.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPN.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPO.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPL(x,d))},
$S:2}
B.dPL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPP.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPQ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPR.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPT.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPU.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPX.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dPV.prototype={
$1(d){var x=this.a
return x.f?null:x.Zd()},
$S:2}
B.dPW.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mw(D.Q6))s=C.u_
else s=C.a.a0(s,"video/")||d.mw(D.mC)?C.q4:D.alh
x=this.b.a
w=y.p
return new A.D(C.kU,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoR(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOE.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOF.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c7f.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:93}
B.c7g.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:93}
B.fHF.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fh3.prototype={
$1(d){return J.k(d)},
$S:17}
B.fm_.prototype={
$1(d){var x=this.b
B.hOu(C.Fz.ga5J(this.a)).bB(x.gcFy(x),y.H)},
$S:124}
B.fm0.prototype={
$1(d){return this.a.d5(0,null)},
$S:124}
B.fm1.prototype={
$0(){return null},
$S:11}
B.c7u.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fm2.prototype={
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
u=J.k(u==null?new A.S(Date.now(),0,!1).a7().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fq2.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fks.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fkt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7z.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mw(D.mC)},
$S:z+1}
B.fLL.prototype={
$1(d){return new B.YE(this.a,null)},
$S:z+16}
B.d1O.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:9}
B.d1M.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d1N.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dPK.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0g()},
$S:12}
B.dP7.prototype={
$0(){var x=J.bDD(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dP8.prototype={
$0(){var x=J.bDD(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOH.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dOG(this.b))
if(w>=0){x=x.d
x[w]=x[w].aD8(this.c)}},
$S:0}
B.dOG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOI.prototype={
$0(){var x=J.bDD(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dON.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dOM(this.b))
if(w>=0){x=x.d
x[w]=x[w].aD8(this.c)}},
$S:0}
B.dOM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPy.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPz.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dP4.prototype={
$1(d){return new B.Uq(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dP1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HU(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Uu(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tF(),$async$$0)
case 5:s=J.a5(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a0r(s.gM(t)),$async$$0)
case 8:case 7:r.i1(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOL.prototype={
$1(d){this.a.abi(d,"No files selected.","Added")},
$S:457}
B.dPc.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.M(x,new B.dPb(),A.U(x).k("M<1,m>")))},
$S:0}
B.dPb.prototype={
$1(d){return d.a},
$S:z+2}
B.dOR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x5.c7().cS5(C.ZR,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.js(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.aa(j)
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i1("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i1("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoJ(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i1("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tF(),$async$$0)
case 9:o.i1("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPv.prototype={
$1(d){return new B.Pl(this.a.a.c,this.b,null)},
$S:z+7}
B.dPw.prototype={
$1(d){return new B.YG(this.a.a.c,this.b,null)},
$S:z+18}
B.dPx.prototype={
$1(d){return new B.YD(this.a.a.c,this.b,null)},
$S:z+19}
B.dP2.prototype={
$1(d){return new B.Pl(this.a.a.c,this.b,null)},
$S:z+7}
B.dP3.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HU(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6A(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i1("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.clN(),$async$$0)
case 5:x=6
return A.b(p.tF(),$async$$0)
case 6:r=A.U(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dPk(p),r),new B.dPl(),r.k("M<ak.E,m>")).c_(0,new B.dPm())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cl(A.e8(new B.dPn(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p3(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UA(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPk.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dPj(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPl.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPm.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPn.prototype={
$1(d){var x=this.a
return new B.YI(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPp.prototype={
$1(d){return d.a},
$S:z+2}
B.dPq.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPi.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kT,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoR(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mw(D.mC)?C.u1:C.oT
p=!x||p.mw(D.mC)?"Play video":"View"
return A.c0(A.bl(!0,new A.D(C.B4,A.v(A.a([q,o,t,C.aB,B.YH(!1,u,!1,w,p,new B.dPd(d),v),B.YH(!1,u,!1,C.jq,"Share via QR",new B.dPe(d),"Letters/numbers QR code"),B.YH(!1,u,!1,D.a_T,"Send to their Code",new B.dPf(d),"Enter someone else's personal code"),B.YH(!1,u,!1,C.hB,"Download / save",new B.dPg(d),v),C.am,B.YH(!1,u,!0,C.e6,"Delete",new B.dPh(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kK,v,v,C.n),C.be)},
$S:689}
B.dPd.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dPe.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dPf.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPg.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dPh.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dOO.prototype={
$1(d){return d.a},
$S:z+2}
B.dOP.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOQ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6C(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gg(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p3(s.c,s.f),$async$$0)
case 4:u.i1(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOK.prototype={
$1(d){var x=this.a
x.tG(new B.dOJ(x,d,this.b),"Preparing\u2026")},
$S:457}
B.dOJ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i1("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Uu(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i1("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCy(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i1("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP5.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dP6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fTT(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gd(new B.dOW(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i1("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dOX(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOY(s))
case 5:x=8
return A.b(r.b.ij(0,C.F4,new B.dOZ()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gam(t)){s.i1("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tF(),$async$$0)
case 9:s.i1("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOW.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOT(x,d,e))},
$S:127}
B.dOT.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOX.prototype={
$1(d){return new B.abK(this.a.a,null)},
$S:z+21}
B.dOY.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOZ.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dP0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ia(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6q(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_l(B.Ia(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoJ(new B.dOU(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fTS(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i1(q)
x=1
break}x=10
return A.b(s.tF(),$async$$0)
case 10:o=J.cG(r)
p=o.eO(r,new B.dOV()).gM(0)
s.i1(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOU.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOS(x,d,e))},
$S:127}
B.dOS.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOV.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mw(D.mC)},
$S:z+1}
B.dPa.prototype={
$1(d){return new B.YJ(this.a.a.c,null)},
$S:z+23}
B.dP9.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZ9(u.a.c,v.b),$async$$0)
case 2:t.i1(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPu.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bl(!0,new A.D(C.B4,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kT,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YH(!0,w,!1,C.nh,"My Code",new B.dPr(d),"Your personal code & QR \u2014 others send docs to you"),B.YH(!1,w,!1,D.a_T,"Send to their Code",new B.dPs(this.a,d),"Enter someone else's 5-digit code + letter"),B.YH(!1,w,!1,S.yp,"Import backup",new B.dPt(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kK,x,x,C.n),C.be)},
$S:689}
B.dPr.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dPs.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bBl()},
$S:0}
B.dPt.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dPH.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Ik(D.PS,x,C.a_N,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.PS).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:652}
B.dPF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dPG.prototype={
$0(){this.a.ahy()
return null},
$S:0}
B.dPI.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dPJ.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abM(e,w,v,this.b,x.e,x.c5N(w),new B.dPB(x,w),new B.dPC(x,v,w),new B.dPD(x,w),new B.dPE(x,w),null)},
$S:z+24}
B.dPB.prototype={
$0(){this.a.aeN(this.b)
return null},
$S:0}
B.dPC.prototype={
$0(){var x=this.a
return x.m(new B.dPA(x,this.b,this.c))},
$S:0}
B.dPA.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPD.prototype={
$0(){this.a.NE(this.b)
return null},
$S:0}
B.dPE.prototype={
$0(){this.a.ahl(this.b)
return null},
$S:0}
B.d1K.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.d1L.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:128}
B.d27.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.d26.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d23.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d24.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d25.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d21.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fM(w,C.A,x,new B.d2_(this.a),C.fW,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d20(this.a))
return C.bI},
$S:135}
B.d2_.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1Y(this.a))
return C.bI},
$S:199}
B.d1Y.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1V(x))},
$S:9}
B.d1V.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d20.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1X(x))},
$S:9}
B.d1X.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d22.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1Z(this.a))
return C.bI},
$S:199}
B.d1Z.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1W(x))},
$S:9}
B.d1W.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1H.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1G(x,d))},
$S:1740}
B.d1G.prototype={
$0(){return this.a.f=this.b===C.uy},
$S:0}
B.d1I.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1F(x,d))},
$S:9}
B.d1F.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1J.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1E(x,d))},
$S:9}
B.d1E.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1A.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1B.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1C.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1D.prototype={
$1(d){return this.a.d.ME(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2k.prototype={
$0(){var x=this.a.a
return B.rn(x.c,x.d)},
$S:1741}
B.d2l.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d2m.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d2n.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2o.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d2p.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d2r.prototype={
$0(){var x=this.a
x.m(new B.d2q(x))},
$S:0}
B.d2q.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h5(0)
else x.pT(0)},
$S:0}
B.d2g.prototype={
$1(d){return this.a.Qg(this.b)},
$S:12}
B.d2h.prototype={
$1(d){return this.a.Qf(this.b)},
$S:12}
B.d28.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d29.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d2a.prototype={
$1(d){return D.fVJ},
$S:z+25}
B.d2f.prototype={
$2(d,e){if(d)B.UA()},
$S:125}
B.d2b.prototype={
$0(){return this.a.a9b(this.b)},
$S:0}
B.d2c.prototype={
$0(){return this.a.a98(this.b)},
$S:0}
B.d2d.prototype={
$0(){return this.a.adn(this.b)},
$S:0}
B.d2e.prototype={
$0(){return this.a.a14(this.b)},
$S:0}
B.d1z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d2j.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d2i(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2i.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7B.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mw(D.mC)},
$S:z+1}
B.c7C.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7A.prototype={
$2(d,e){return this.biI(d,e)},
biI(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UB(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fpF.prototype={
$1(d){if(d===D.a5T&&(this.a.a.a&30)===0)this.a.fR(0)},
$S:z+27}
B.fpG.prototype={
$0(){},
$S:11}
B.fqc.prototype={
bkg(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.feb(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h8W(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkg(d,e)},
$S:730}
B.fqb.prototype={
$1(d){var x=this
d.b=new B.fqa(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fqa.prototype={
$1(d){return this.bkf(d)},
bkf(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZa(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aI(0,n,null)
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
return A.b(B.feb(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.aa(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6z(m),$async$$1)
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
x(v=B.ayC.prototype,"gccH","PS",0)
x(v,"gcdy","IX",0)
x(v,"gcd3","xQ",0)
x(v=B.aCw.prototype,"gc5H","adl",0)
x(v,"gc5I","Zc",0)
x(v,"gcsd","ah2",0)
x(v=B.aCz.prototype,"gc5J","Zd",0)
x(v,"gcse","a1o",0)
x(B.aCx.prototype,"gc5K","adm",0)
x(B.ayB.prototype,"gc5P","c5Q",4)
x(v=B.aCy.prototype,"gcd4","a_k",0)
x(v,"gcqN","cqO",4)
x(v,"gb0t","axE",0)
x(v,"gctL","ahs",0)
x(v,"gbNl","X8",0)
x(v,"gc5O","E6",0)
x(B.ayD.prototype,"gb4j","a1n",0)
x(B.ayA.prototype,"gc5R","Ze",0)
x(v=B.ayG.prototype,"gb_9","cbm",4)
x(v,"gc5L","adp",0)
x(v=B.ayE.prototype,"gcpN","a19",0)
x(v,"gaYl","ado",0)
w(B.ayz.prototype,"gawf","awg",8)
x(v=B.ayF.prototype,"gcfM","aff",0)
x(v,"gbMU","a9X",0)
w(v,"gawf","awg",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ciz,B.a8V,B.at2,B.aB9,B.aEl,B.jn,B.abs,B.buz,B.EM,B.WL])
w(B.ciA,B.ciz)
w(B.b3i,B.a8V)
x(A.hV,[B.civ,B.ciw,B.cix,B.ciu,B.ciy,B.ciB,B.ciC,B.ciD,B.ciE,B.ciF,B.ciG,B.ciH,B.ciI,B.fjR,B.fGM,B.fGO,B.fGN,B.fH0,B.fH1,B.flO,B.d1P,B.d1R,B.d1Q,B.d1U,B.fnN,B.fog,B.c75,B.c7c,B.c7d,B.c78,B.c76,B.c79,B.c7a,B.fGZ,B.fH_,B.dPO,B.dPX,B.dPV,B.dPW,B.fh3,B.fm_,B.fm0,B.c7u,B.fm2,B.fq2,B.fks,B.fkt,B.c7z,B.fLL,B.d1O,B.d1M,B.dPK,B.dOG,B.dOM,B.dP4,B.dOL,B.dPb,B.dPv,B.dPw,B.dPx,B.dP2,B.dPk,B.dPj,B.dPl,B.dPm,B.dPn,B.dPp,B.dPq,B.dPi,B.dOO,B.dOP,B.dOK,B.dP5,B.dOX,B.dOV,B.dPa,B.dPu,B.dPH,B.dPI,B.d1K,B.d1L,B.d27,B.d26,B.d21,B.d2_,B.d1Y,B.d20,B.d22,B.d1Z,B.d1H,B.d1I,B.d1J,B.d1D,B.d2g,B.d2h,B.d2a,B.c7B,B.c7C,B.fpF,B.fqb,B.fqa])
w(B.b3j,B.at2)
x(A.j9,[B.fGL,B.d1S,B.d1T,B.fnL,B.fnM,B.fof,B.dOD,B.dPM,B.dPN,B.dPL,B.dPP,B.dPQ,B.dPR,B.dPS,B.dPT,B.dPU,B.dOE,B.dOF,B.fm1,B.d1N,B.dP7,B.dP8,B.dOH,B.dOI,B.dON,B.dPy,B.dPz,B.dP1,B.dPc,B.dOR,B.dP3,B.dPo,B.dPd,B.dPe,B.dPf,B.dPg,B.dPh,B.dOQ,B.dOJ,B.dP6,B.dP_,B.dOT,B.dOY,B.dOZ,B.dP0,B.dOS,B.dP9,B.dPr,B.dPs,B.dPt,B.dPF,B.dPG,B.dPB,B.dPC,B.dPA,B.dPD,B.dPE,B.d23,B.d24,B.d25,B.d1V,B.d1X,B.d1W,B.d1G,B.d1F,B.d1E,B.d1A,B.d1B,B.d1C,B.d2k,B.d2l,B.d2m,B.d2n,B.d2o,B.d2p,B.d2r,B.d2q,B.d28,B.d29,B.d2b,B.d2c,B.d2d,B.d2e,B.d1z,B.d2j,B.d2i,B.fpG])
x(A.mb,[B.abL,B.N8,B.a8W,B.Oa,B.WK,B.O9,B.EN])
x(A.ag,[B.YF,B.Up,B.Ut,B.Uq,B.YE,B.Ur,B.YG,B.YD,B.Pl,B.YI,B.YC,B.YJ])
x(A.ah,[B.ayC,B.aCw,B.aCz,B.aCx,B.ayB,B.aCy,B.ayD,B.ayA,B.ayG,B.ayE,B.ayz,B.ayF])
x(A.au,[B.acd,B.ayy,B.bcH,B.abM,B.abK,B.bcI])
x(A.kk,[B.c7b,B.c77,B.c7f,B.c7g,B.fHF,B.dOW,B.dOU,B.dPJ,B.d2f,B.c7A,B.fqc])
x(A.iT,[B.bi2,B.bud])})()
A.jY(b.typeUniverse,JSON.parse('{"b3i":{"a8V":[]},"b3j":{"at2":[]},"YF":{"ag":[],"r":[]},"ayC":{"ah":["YF"]},"acd":{"au":[],"r":[]},"Up":{"ag":[],"r":[]},"Ut":{"ag":[],"r":[]},"aCw":{"ah":["Up"]},"aCz":{"ah":["Ut"]},"bi2":{"iT":[]},"Uq":{"ag":[],"r":[]},"aCx":{"ah":["Uq"]},"YE":{"ag":[],"r":[]},"Ur":{"ag":[],"r":[]},"abM":{"au":[],"r":[]},"YG":{"ag":[],"r":[]},"YD":{"ag":[],"r":[]},"Pl":{"ag":[],"r":[]},"YI":{"ag":[],"r":[]},"abK":{"au":[],"r":[]},"YC":{"ag":[],"r":[]},"YJ":{"ag":[],"r":[]},"ayB":{"ah":["YE"]},"bud":{"iT":[]},"aCy":{"ah":["Ur"]},"ayy":{"au":[],"r":[]},"bcH":{"au":[],"r":[]},"ayD":{"ah":["YG"]},"ayA":{"ah":["YD"]},"ayG":{"ah":["Pl"]},"ayE":{"ah":["YI"]},"ayz":{"ah":["YC"]},"ayF":{"ah":["YJ"]},"bcI":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u6"),k:x("LA()"),m:x("bk<m,m>"),F:x("r_"),g:x("az<jn?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<m,R>>"),t:x("O<a4<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(ly,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iT>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<m,m>"),P:x("a4<m,@>"),f:x("a4<@,@>"),o:x("iC"),e:x("idQ"),af:x("E1"),U:x("jn"),b:x("cr"),C:x("aC"),aK:x("w1"),ab:x("EM"),br:x("at2"),v:x("WL"),N:x("m"),X:x("bq<K>"),Q:x("lL"),D:x("dD"),aw:x("cy<m>"),cd:x("a_<a4<m,@>>"),c7:x("r"),ch:x("bW<ai<jn>>"),aW:x("bW<dD?>"),aY:x("bW<~>"),cx:x("abL"),b1:x("bg<ai<jn>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aB9"),bG:x("aEl"),q:x("n0"),B:x("pl<EM>"),c6:x("pl<a8W>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a4<m,@>?"),l:x("jn?"),R:x("aC?"),c:x("WL?"),d:x("+answerQr,transfer(m,az<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,H)?"),L:x("+fileCount,mode,qrPayload(H,N8,m)?"),aX:x("+fileCount,qrPayload,token(H,m,m)?"),T:x("m?"),K:x("dD?"),cm:x("abs?"),bk:x("aB9?"),ag:x("aEl?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aYx=new A.ay(C.aE,2,C.q,-1)
D.bVu=new A.a8(C.a3,C.a8,C.x,C.a1L,null,null)
D.b_b=new A.o(null,null,null,C.mb,null,D.bVu,C.n)
D.b0E=new A.o(null,null,null,C.mb,null,E.Gx,C.n)
D.abX=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ad8=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.ae4=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.afy=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.ffT=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fu_=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dj,null,null,null,null,null,null,null,null,null)
D.d3D=x([D.ffT,C.am,D.fu_],y.p)
D.bm4=new A.fl(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d3D,null)
D.fyh=new A.y("Create your organization",null,C.h2,null,null,null,null,null,null,null,null,null)
D.fk7=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dj,null,null,null,null,null,null,null,null,null)
D.diQ=x([D.fyh,C.am,D.fk7],y.p)
D.bme=new A.fl(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.diQ,null)
D.fuA=new A.y("Team Member sign-in",null,C.h2,null,null,null,null,null,null,null,null,null)
D.fnV=new A.y("Enter the access code and password from your organization.",null,G.Dj,null,null,null,null,null,null,null,null,null)
D.dgN=x([D.fuA,C.am,D.fnV],y.p)
D.bmo=new A.fl(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dgN,null)
D.bsf=new A.Q(16,10,16,28)
D.bsn=new A.Q(16,14,16,4)
D.btA=new A.Q(20,0,20,16)
D.bu4=new A.Q(20,8,20,16)
D.aih=new A.Q(24,22,24,20)
D.a_T=new A.a0(63394,"MaterialIcons",!1)
D.alh=new A.a0(63515,"MaterialIcons",!1)
D.bFX=new A.a0(983813,"MaterialIcons",!1)
D.bDa=new A.a0(62867,"MaterialIcons",!1)
D.bGW=new A.ae(D.bDa,44,C.c,null,null,null)
D.bI0=new A.ae(C.pV,null,C.ad,null,null,null)
D.bJp=new A.ae(C.iZ,18,null,null,null,null)
D.bL5=new A.ae(D.a_T,26,C.c,null,null,null)
D.bLC=new A.ae(C.BG,null,null,null,null,null)
D.bMa=new A.ae(C.yr,null,null,null,null,null)
D.bNj=new A.ae(W.NE,null,null,null,null,null)
D.bND=new A.ae(C.hp,16,null,null,null,null)
D.bR4=new A.ae(C.rg,16,null,null,null,null)
D.bHd=new A.ae(C.nh,null,null,null,null,null)
D.bRW=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bHd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bMI=new A.ae(C.FM,null,null,null,null,null)
D.bS0=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bMI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bHy=new A.ae(H.Gk,null,null,null,null,null)
D.bSb=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bHy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cFo=x([C.fc,C.aZ,C.aE],y.O)
D.bXl=new A.a8(C.ax,C.aC,C.x,D.cFo,null,null)
D.cEQ=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PS=x([C.fc,C.aE],y.O)
D.Q6=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mC=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dbA=x([C.pA,C.aE],y.O)
D.e2J={iceServers:0}
D.aGf={urls:0}
D.dms=new A.bk(D.aGf,["stun:stun.l.google.com:19302"],y.m)
D.dmr=new A.bk(D.aGf,["stun:stun1.l.google.com:19302"],y.m)
D.cV8=x([D.dms,D.dmr],A.ax("O<a4<m,m>>"))
D.dlL=new A.bk(D.e2J,[D.cV8],A.ax("bk<m,@>"))
D.HB=new B.N8(0,"lanDirect")
D.Rq=new B.N8(1,"cloudStash")
D.dxB=new B.N8(2,"inlineInstant")
D.Rr=new B.N8(3,"webrtcLink")
D.z9=new B.N8(4,"videoCloud")
D.ftZ=new A.y("Receive file",null,C.ny,null,null,null,null,null,null,null,null,null)
D.cuU=x([E.amY,C.ab,D.ftZ],y.p)
D.eM0=new A.cm(C.aO,C.b8,C.j,C.m,null,C.p,null,0,D.cuU,null)
D.e8p=new A.D(C.cl,D.eM0,null)
D.f73=new A.G(!0,C.c,null,null,null,null,null,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2q,null,null,null)
D.fgq=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f73,null,C.L,null,null,null,null,null,null,null)
D.e7H=new A.D(C.B9,D.fgq,null)
D.b4U=new A.cp(C.A,null,null,D.e7H,null)
D.eea=new A.cL(0,null,0,28,null,null,D.b4U,null)
D.eet=new B.a8W(0,"RTCDataChannelConnecting")
D.aLA=new B.a8W(1,"RTCDataChannelOpen")
D.aLB=new B.a8W(3,"RTCDataChannelClosed")
D.eeu=new B.EN(0,"RTCIceConnectionStateNew")
D.eev=new B.EN(1,"RTCIceConnectionStateChecking")
D.eew=new B.EN(2,"RTCIceConnectionStateCompleted")
D.eex=new B.EN(3,"RTCIceConnectionStateConnected")
D.eey=new B.EN(4,"RTCIceConnectionStateCount")
D.eez=new B.EN(5,"RTCIceConnectionStateFailed")
D.eeA=new B.EN(6,"RTCIceConnectionStateDisconnected")
D.aLC=new B.EN(7,"RTCIceConnectionStateClosed")
D.aLD=new B.WK(0,"RTCIceGatheringStateNew")
D.eeB=new B.WK(1,"RTCIceGatheringStateGathering")
D.a5T=new B.WK(2,"RTCIceGatheringStateComplete")
D.a5U=new B.O9(0,"RTCPeerConnectionStateClosed")
D.aLE=new B.O9(1,"RTCPeerConnectionStateFailed")
D.aLF=new B.O9(2,"RTCPeerConnectionStateDisconnected")
D.aLG=new B.O9(3,"RTCPeerConnectionStateNew")
D.aLH=new B.O9(4,"RTCPeerConnectionStateConnecting")
D.aLI=new B.O9(5,"RTCPeerConnectionStateConnected")
D.eeC=new B.Oa(0,"RTCSignalingStateStable")
D.eeD=new B.Oa(1,"RTCSignalingStateHaveLocalOffer")
D.eeE=new B.Oa(2,"RTCSignalingStateHaveRemoteOffer")
D.eeF=new B.Oa(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eeG=new B.Oa(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLJ=new B.Oa(5,"RTCSignalingStateClosed")
D.eQ6=new A.ar(160,48)
D.b67=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eRB=new A.a7(16,16,D.b67,null)
D.fjx=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eT1=new A.b1(D.fjx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fqT=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eT4=new A.b1(D.fqT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzk=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eTb=new A.b1(D.fzk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fj8=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eTB=new A.b1(D.fj8,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuL=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aOn=new A.b1(D.fuL,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fw7=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new A.b1(D.fw7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fAI=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eUi=new A.b1(D.fAI,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fyL=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eUn=new A.b1(D.fyL,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzW=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eV8=new A.b1(D.fzW,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fhN=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eVF=new A.b1(D.fhN,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsD=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eW_=new A.b1(D.fsD,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.flI=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eWv=new A.b1(D.flI,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fAO=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eWz=new A.b1(D.fAO,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fi2=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eWF=new A.b1(D.fi2,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgM=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eWU=new A.b1(D.fgM,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fdJ=new A.y("NGMY DOC SHARE",null,C.aPG,null,null,null,null,null,null,null,null,null)
D.ff0=new A.y("Show this to sender",null,C.kd,null,null,null,null,null,null,null,null,null)
D.fg_=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new A.y("Organization settings",null,C.cz,null,null,null,null,null,null,null,null,null)
D.fkT=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.flS=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fml=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fp8=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.frR=new A.y("Send to their Doc Share",null,C.nw,null,null,null,null,null,null,null,null,null)
D.fs9=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fss=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.ft_=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.ft4=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.ftr=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eW,null,null,null,null,null,null,null,null,null)
D.fwC=new A.y("Share files & videos\nwith a scan.",null,C.aPH,null,null,null,null,null,null,null,null,null)
D.fwV=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fVJ=new B.YC(null)
D.a8Y=new B.abL(0,"docShare")
D.a8Z=new B.abL(1,"gate")
D.Ur=new B.abL(2,"gateNoIndividual")})();(function staticFields(){$.aN1=null
$.fbY=function(){var x=y.N
return A.T(x,x)}()
$.G_=A.T(y.N,y.D)
$.afO=A.T(y.N,A.ax("ly"))
$.QA=A.T(y.N,y.D)
$.fcv=A.T(y.N,A.ax("abs"))
$.c7t=A.T(y.S,A.ax("buz"))
$.h8V=1
$.hWr=null
$.hWq=null
$.hNT=null
$.fYX=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iek","hq6",()=>new B.ciA())
x($,"icf","h1D",()=>C.a.t(A.bu(A.bu(A.bu(A.GA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["ji0G1ALexDDpUTJWbgUYhjOWh0w="]=a.current})($__dart_deferred_initializers__);