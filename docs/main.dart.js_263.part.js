((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ciW:function ciW(){},
hJ6(d){var x=null,w=new B.b3t(d,D.egw,new A.pm(x,x,y.c6),new A.pm(x,x,y.B))
w.bxT(d)
return w},
b3t:function b3t(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ciR:function ciR(d){this.a=d},
ciS:function ciS(d){this.a=d},
ciT:function ciT(d){this.a=d},
ciQ:function ciQ(d){this.a=d},
ciU:function ciU(d){this.a=d},
hJ7(d,e){var x=y.N
x=new B.b3u(d,e,A.T(x,y.e),A.T(x,y.z))
x.bxU(d,e)
return x},
b3u:function b3u(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ciX:function ciX(d){this.a=d},
ciY:function ciY(d){this.a=d},
ciZ:function ciZ(d){this.a=d},
cj_:function cj_(d){this.a=d},
cj0:function cj0(d){this.a=d},
cj1:function cj1(d){this.a=d},
cj2:function cj2(d){this.a=d},
cj3:function cj3(d){this.a=d},
h_0(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yE.LP(x,"ngmy_doc_share_v1",new B.fkW(),1)},
hPG(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.f_(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.A0(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aK(d)
return x}catch(w){return v}return v},
QT(d,e){return B.i3R(d,e)},
i3R(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aN9
x=7
return A.b(o==null?$.aN9=B.h_0():o,$async$QT)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mH(s,"blobs","readwrite")
C.iM.mm(J.mF(q,"blobs"),r,d)
x=8
return A.b(J.px(q),$async$QT)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$QT,w)},
QS(d){return B.i3Q(d)},
i3Q(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aN9
x=7
return A.b(o==null?$.aN9=B.h_0():o,$async$QS)
case 7:s=f
r=J.mH(s,"blobs","readonly")
x=8
return A.b(C.iM.zs(J.mF(r,"blobs"),d),$async$QS)
case 8:q=f
x=9
return A.b(J.px(r),$async$QS)
case 9:o=B.hPG(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$QS,w)},
agC(d){return B.i3P(d)},
i3P(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aN9
x=7
return A.b(p==null?$.aN9=B.h_0():p,$async$agC)
case 7:s=f
r=J.mH(s,"blobs","readwrite")
C.iM.FI(J.mF(r,"blobs"),d)
x=8
return A.b(J.px(r),$async$agC)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.u(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agC,w)},
fkW:function fkW(){},
hRZ(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bo_(w,v))}return u},
hp1(d,e){var x,w={},v=A.aVy("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fI8(w,v,e)
C.vY.ym(v,"change",new B.fIa(w,v,!1))
C.vY.ym(v,"cancel",new B.fI9(w))
$.eW.mt()
v.click()
A.bN(C.agE,new B.fI7(w),y.H)},
fI8:function fI8(d,e,f){this.a=d
this.b=e
this.c=f},
fIa:function fIa(d,e,f){this.a=d
this.b=e
this.c=f},
fI9:function fI9(d){this.a=d},
fI7:function fI7(d){this.a=d},
CV(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CV=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTr()?3:4
break
case 3:x=5
return A.b(B.hk7(e,d,s,!0,!1,f,g,h,!1,i),$async$CV)
case 5:x=1
break
case 4:x=6
return A.b(B.Qx(d,s,f,g,h,i),$async$CV)
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
return A.b(B.Ii(s,d),$async$CV)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fgn(s,d),$async$CV)
case 14:x=12
return A.b(r.hk7(q,p,o,n,m,l,k,j,a1,i),$async$CV)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cl(A.e8(new B.fIn(s,i,d,f,g,h),!1,null,y.H)),$async$CV)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cl(A.e8(new B.fIo(s,i,d,f,g,h),!1,null,y.H)),$async$CV)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CV,w)},
Qx(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qx=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZd(e),$async$Qx)
case 3:u=k
x=4
return A.b(B.aoI(d,e,!1),$async$Qx)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ii(e,d),$async$Qx)
case 7:if(k){v=D.a98
x=1
break}x=8
return A.b(B.Uz(e),$async$Qx)
case 8:v=t?D.Uw:D.a99
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZb(d,e)){v=D.a98
x=1
break}x=11
return A.b(B.Uz(e),$async$Qx)
case 11:v=t?D.Uw:D.a99
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fVb(d,e)){v=D.a98
x=1
break}x=14
return A.b(B.Uz(e),$async$Qx)
case 14:v=D.Uw
x=1
break
case 13:v=t?D.Uw:D.a99
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qx,w)},
fgn(d,e){var x=0,w=A.j(y.y),v
var $async$fgn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZb(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZd(d),$async$fgn)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgn,w)},
hk7(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cl(A.e8(new B.fn6(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hfg(d,e,f,g,h,i,j){return new B.YN(e,j,d,g,h,i,f,null)},
fp3(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fp3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fp6(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fp3)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fp3,w)},
fpy(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fpy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpA(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fpy)
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
return A.i($async$fpy,w)},
h_9(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fAJ(d,e){var x=0,w=A.j(y.H),v
var $async$fAJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Uz(e),$async$fAJ)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fAJ,w)},
fIn:function fIn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIo:function fIo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abU:function abU(d,e){this.a=d
this.b=e},
fn6:function fn6(d,e,f,g,h,i,j,k,l){var _=this
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
ayK:function ayK(){this.c=this.a=this.d=null},
d2h:function d2h(d,e){this.a=d
this.b=e},
d2e:function d2e(d){this.a=d},
d2g:function d2g(d){this.a=d},
d2f:function d2f(d){this.a=d},
d2j:function d2j(){},
d2i:function d2i(d){this.a=d},
acm:function acm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBh:function aBh(d,e){this.a=d
this.b=e},
aEt:function aEt(d,e,f){this.a=d
this.b=e
this.c=f},
fp6:function fp6(d,e,f){this.a=d
this.b=e
this.c=f},
fp4:function fp4(d){this.a=d},
fp5:function fp5(d,e,f){this.a=d
this.b=e
this.c=f},
fpA:function fpA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fpz:function fpz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7q(d,e,f,g,h){return B.hE0(d,e,f,g,h)},
hE0(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7q=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iN(r.dz(d,new B.c7r(s,e,h,g,f,q),y.g),y.l),$async$c7q)
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
return A.i($async$c7q,w)},
aZ8(d,e,f,g,h){return B.hE1(d,e,f,g,h)},
hE1(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZ8=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.au_("GET",d)
o=A.fRD()
if(o==null)o=new A.LA(A.a([],y.W))
x=7
return A.b(o.eZ(0,s).d7(0,C.Fe),$async$aZ8)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aZ8)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bz(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$aZ8,w)},
aZ7(d){return B.hDZ(d)},
hDZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZ7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vd(d,null).d7(0,C.nY),$async$aZ7)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aJ(0,A.lQ(A.lN(p.e)).cA(0,p.w),null)
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
return A.i($async$aZ7,w)},
c7p(d){return B.hE_(d)},
hE_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7p=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vd(d,null).d7(0,C.pT),$async$c7p)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lQ(A.lN(q.e)).cA(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.aa(o)
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
return A.i($async$c7p,w)},
c7r:function c7r(d,e,f,g,h,i){var _=this
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
Ig(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hE6(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ig(C.a.b5(u,v.length))}return null},
hE7(d){var x=B.Ig(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hE2(){var x,w=$.pu(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.h1(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a6x(d){return B.hE3(d)},
hE3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bJ),$async$a6x)
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
return A.i($async$a6x,w)},
a6y(d,e){return B.hE4(d,e)},
hE4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6y=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hH(d,e,!1,!1,C.cH,null),$async$a6y)
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
return A.i($async$a6y,w)},
By(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$By=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$By)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ig(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6z(r),$async$By)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6x("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$By)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ig(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$By)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hE2()
x=14
return A.b(B.a6z(m),$async$By)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a7().ac()
x=15
return A.b(B.a6y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$By)
case 15:k=f
x=16
return A.b(B.a6y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$By)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$By)
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
return A.i($async$By,w)},
a6z(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ig(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6x("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6z)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
a6A(d,e,f,g){return B.hE8(d,e,f,g)},
hE8(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6A=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ig(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6z(r),$async$a6A)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c7x())>1048576||g.b6(d,new B.c7y())){v=B.En(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6L("myCode",d,a0),$async$a6A)
case 4:u=a3
try{t=C.S.aJ(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.En(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZg(u,g.gM(d),a0),$async$a6A)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pu().aw(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c7z(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZ9(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],i,y.z),q),$async$a6A)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
En(d,e,f,g,h){return B.hE5(d,e,f,g,h)},
hE5(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$En=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$En)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c7t())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pu().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.aw(99999)
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
a1=B.Ik(a9,q)
a0=new A.Ka(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$En)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aV(J.k(o),5,"0")
a1=$.eZ().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oW(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aa8(a1.a,a4,"media",a1.d,a2).wX(m,n,new A.DG(!0,q.c)),$async$En)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a6(0),$async$En)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPD(r),$async$En)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c7u(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZ9(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],e,d),a8),$async$En)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPD(r),$async$En)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$En,w)},
aZ9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZ9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6x(t),$async$aZ9)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7s(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6y(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ9,w)},
Nb(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nb=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6x("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nb)
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
return A.b(B.aZa(k,a0),$async$Nb)
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
return A.b(B.aZf(h),$async$Nb)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UG(g,a0),$async$Nb)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c7v(),q),n)
d=A.C(new A.a_(r,new B.c7w(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.db(d,0,A.dG(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6y("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nb)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nb,w)},
aZa(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZa=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}o=J.a4(p)
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
break}i=B.i7D(k,j)
C.d.v(s,i)
x=5
return A.b(B.CT(l,m,"Received via My Code",t,e,i),$async$aZa)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPD(s),$async$aZa)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZa,w)},
c7x:function c7x(){},
c7y:function c7y(){},
c7z:function c7z(){},
c7t:function c7t(){},
c7u:function c7u(){},
c7s:function c7s(){},
c7v:function c7v(){},
c7w:function c7w(){},
fIk(d,e){var x=0,w=A.j(y.H)
var $async$fIk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cl(A.e8(new B.fIl(e),!1,null,y.H)),$async$fIk)
case 2:return A.h(null,w)}})
return A.i($async$fIk,w)},
bCH(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cl(A.e8(new B.fIm(g,e,f),!1,null,y.y)),$async$bCH)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCH,w)},
fIl:function fIl(d){this.a=d},
fIm:function fIm(d,e,f){this.a=d
this.b=e
this.c=f},
Uw:function Uw(d,e){this.c=d
this.a=e},
aCE:function aCE(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dP3:function dP3(d,e){this.a=d
this.b=e},
UA:function UA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCH:function aCH(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dQc:function dQc(d){this.a=d},
dQd:function dQd(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQk:function dQk(d){this.a=d},
dQn:function dQn(){},
dQl:function dQl(d){this.a=d},
dQm:function dQm(d,e){this.a=d
this.b=e},
bic:function bic(){},
Ux:function Ux(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCF:function aCF(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dP4:function dP4(d){this.a=d},
dP5:function dP5(d){this.a=d},
fVc(d){var x=d.hV
if(x>=0)return C.o.N(x)
return 10},
hEa(d){var x=d.kL
if(x>=0)return x
return 4.99},
hE9(d){var x=d.lr,w=y.N
w=x.j7(x,new B.c7B(),w,w)
return w},
hak(d){var x=d.kM,w=y.N
w=x.j7(x,new B.c7C(),w,w)
return w},
aZd(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aZd)
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
return A.i($async$aZd,w)},
a6C(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6C)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6C)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
Uz(d){var x=0,w=A.j(y.H),v,u
var $async$Uz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Uz)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Uz)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Uz,w)},
fVb(d,e){var x,w,v
if(B.hEa(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hE9(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cb(new A.S(Date.now(),0,!1))},
aZb(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hak(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cb(new A.S(Date.now(),0,!1))},
hal(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hak(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cb(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dC(f,0,0,0,0,0).a).a7().ac())
d.kM=w},
aoJ(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aoJ)
case 7:s=f
r=A.u(p)
r=A.f5(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoJ,w)},
aoK(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoJ(d),$async$aoK)
case 3:u=f
x=5
return A.b(A.az(),$async$aoK)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoK,w)},
aoI(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fVc(d)
if(u<=0){v=!1
x=1
break}if(B.fVb(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoJ(e),$async$aoI)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoI,w)},
aZc(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ii(e,d),$async$aZc)
case 3:if(g){v=-1
x=1
break}u=B.fVc(d)
if(u<=0){v=-1
x=1
break}if(B.fVb(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoJ(e),$async$aZc)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZc,w)},
c7E(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7E=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ii(e,d),$async$c7E)
case 3:if(h){v=!1
x=1
break}v=B.aoI(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7E,w)},
c7D(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7D=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c7E(d,u,i.gTr()),$async$c7D)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7D,w)},
a6B(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6B=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTr()){v=!0
x=1
break}if(B.aZb(d,u)){v=!0
x=1
break}x=5
return A.b(A.le(u,C.RT),$async$a6B)
case 5:x=k?3:4
break
case 3:B.hal(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6B)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kT(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.RT,"Doc Share for Organizations"),$async$a6B)
case 7:if(!k){v=!1
x=1
break}B.hal(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6B)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
c7B:function c7B(){},
c7C:function c7C(){},
fJ_(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fJ_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fJ_)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fd6.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hQ([r],e.c))
s.toString
$.fd6.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJ_,w)},
i9X(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fd6.bq($.fd6,new B.fJ1(d))},
fJ1:function fJ1(d){this.a=d},
fes(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fes=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hQ([d],f))
s.toString
u=A.n8(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jk,null,y.H),$async$fes)
case 3:C.A4.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fes,w)},
afu(d,e,f){var x=0,w=A.j(y.H),v
var $async$afu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fdA.n(0,d,new B.abB(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afu)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afu)
case 2:return A.h(null,w)}})
return A.i($async$afu,w)},
afo(d){return B.hTO(d)},
hTO(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fdA.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afo)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aJ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fi8(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abB(r)
$.fdA.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afo,w)},
Qn(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.G5.n(0,d,u)
x=3
return A.b(B.QT(d,u),$async$Qn)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qn,w)},
aNu(d){return B.hTM(d)},
hTM(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G5.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QS(d),$async$aNu)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.G5.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aNu)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aK(r)
x=!J.cn(q)?9:10
break
case 9:B.Qn(d,q)
x=11
return A.b(J.hw(s,d),$async$aNu)
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
return A.i($async$aNu,w)},
hQ2(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.ce(J.f_(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.ce(A.A0(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.ce(d)),y.K)
return A.f9(null,y.K)},
a1f(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fni(r,t),!1,s)
A.fL(r,"error",new B.fnj(t),!1,s)
r.readAsArrayBuffer(d)
v=u.io(0,C.M0,new B.fnk())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1f,w)},
aNO(d,e,f){return B.hW2(d,e,f)},
hW2(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNO=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1f(i),$async$aNO)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QT(o,p),$async$aNO)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afu(k,j,s),$async$aNO)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.u(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNO,w)},
aNN(d,e,f){return B.hW1(d,e,f)},
hW1(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNN=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNO(d,e,f),$async$aNN)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1f(f),$async$aNN)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G5.n(0,s,r)
$.QE.n(0,s,r)
x=11
return A.b(B.Qn(s,r),$async$aNN)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.u(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNN,w)},
Bz(d,e,f,g,h,i){return B.hEj(d,e,f,g,h,i)},
hEj(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bz=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jl(p,q,o,n,new A.S(Date.now(),0,!1).a7().ac(),a0,f,B.aZj(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qn(s,d),$async$Bz)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Bz)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cV.gcB().aK(d)),$async$Bz)
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
return A.b(B.AB(e),$async$Bz)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.Gh(e,j),$async$Bz)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bz,w)},
UB(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UB=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AB(d),$async$UB)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.aw(99999)
n=p.b
l=o.type
l.toString
k=B.han(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a7().ac()
i=new B.jl(m,n,k,l,j,"From folder",null,B.aZj(),null)
$.afX.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1f(o),$async$UB)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.G5.n(0,h,g)
$.QE.n(0,h,g)
B.Qn(h,g)
x=9
break
case 10:x=11
return A.b(B.aNN(d,m,o),$async$UB)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gh(d,t),$async$UB)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UB,w)},
fVg(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fVg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.han(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ij(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.Bz(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVg,w)},
Ij(d,e,f,g,h,i){return B.hEi(d,e,f,g,h,i)},
hEi(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ij=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ka(A.dG(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ij)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h4(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rr(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kF(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.QT(k,l),$async$Ij)
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
return A.b(j.a6(0),$async$Ij)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.QT(k,new Uint8Array(A.ce(n))),$async$Ij)
case 15:J.ci(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afu(r,q,g),$async$Ij)
case 16:f=new B.jl(i,a1,a0,g,new A.S(Date.now(),0,!1).a7().ac(),a2,null,B.aZj(),null)
x=17
return A.b(B.AB(d),$async$Ij)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.Gh(d,e),$async$Ij)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ij,w)},
UD(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UD=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afX.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1f(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afo(s),$async$UD)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QS(u[o]),$async$UD)
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
v=A.A0(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QE.h(0,s)
if(i==null)i=$.G5.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ro(d,e),$async$UD)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QE.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A0(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UD,w)},
han(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ro(d,e){return B.hEk(d,e)},
hEk(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ro=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QE.h(0,f)
if(e==null)e=$.G5.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.afX.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1f(s),$async$ro)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.G5.n(0,f,r)
$.QE.n(0,f,r)
B.Qn(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.u(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afo(f),$async$ro)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axx(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QS(g[l]),$async$ro)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.anK()
if(!C.aH.gam(r)){$.G5.n(0,f,r)
$.QE.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNu(f),$async$ro)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QE.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UD(a0,a1,0,g),$async$ro)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ce(i))
$.G5.n(0,f,h)
$.QE.n(0,f,h)
B.Qn(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ro,w)},
hEn(d){var x,w,v=$.afX.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hEo(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hQ([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hEl(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoQ(d,e,f,g,h){return B.hEm(d,e,f,g,h)},
hEm(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoQ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afX.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1f(s),$async$aoQ)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ro(g,e),$async$aoQ)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eZ().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ih(d).wX(h,r,new A.DG(!0,e.c)),$async$aoQ)
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
return A.i($async$aoQ,w)},
hap(d,e,f,g,h){var x,w,v,u,t=$.hao
$.hao=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7P.n(0,t,new B.buJ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axx(u)))
return t},
fVh(d){var x=0,w=A.j(y.H)
var $async$fVh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVh,w)},
Ik(d,e){var $async$Ik=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afX.h(0,h)
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
return A.q6(B.UD(d,e,p,o<q?o:q),$async$Ik,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q6(A.FC(n),$async$Ik,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q6(B.afo("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ik,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q6(B.QS(h[l]),$async$Ik,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q6(A.FC(k),$async$Ik,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q6(B.ro(d,e),$async$Ik,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q6(A.FC(A.A0(j,p,o<i?o:i)),$async$Ik,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q6(null,0,w)
case 2:return A.q6(t.at(-1),1,w)}})
var x=0,w=A.hj0($async$Ik,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hkQ(w)},
aZl(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7P.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4g(),$async$aZl)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZl,w)},
UC(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7P.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4g(),$async$UC)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afu(r.c,u,r.z),$async$UC)
case 4:t=new B.jl(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a7().ac(),r.f,r.r,B.aZj(),null)
u=r.a
x=5
return A.b(B.AB(u),$async$UC)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.Gh(u,s),$async$UC)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UC,w)},
a6I(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7P.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agC(u[s]),$async$a6I)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
c7R(d,e,f){var x=0,w=A.j(y.H)
var $async$c7R=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzK(d,e,f),$async$c7R)
case 2:return A.h(null,w)}})
return A.i($async$c7R,w)},
c7S(d,e,f){var x=0,w=A.j(y.H)
var $async$c7S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzL(d,e,f),$async$c7S)
case 2:return A.h(null,w)}})
return A.i($async$c7S,w)},
Eo(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Eo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AB(d),$async$Eo)
case 2:p=g
J.ns(p,new B.c7Q(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G5.W(0,v)
$.afX.W(0,e)
x=3
return A.b(B.afo(v),$async$Eo)
case 3:u=g
$.fdA.W(0,v)
x=4
return A.b(A.az(),$async$Eo)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Eo)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Eo)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agC(s[q]),$async$Eo)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agC(v),$async$Eo)
case 13:x=14
return A.b(B.Gh(d,p),$async$Eo)
case 14:return A.h(null,w)}})
return A.i($async$Eo,w)},
aZk(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ro(d,e),$async$aZk)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fes(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZk,w)},
AB(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AB)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aJ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fnl(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AB,w)},
Gh(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Gh)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.frl(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gh)
case 3:return A.h(null,w)}})
return A.i($async$Gh,w)},
bzK(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AB(d),$async$bzK)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.flL(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDs(f))
x=4
return A.b(B.Gh(d,u),$async$bzK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzK,w)},
bzL(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AB(d),$async$bzL)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.flM(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cI6(f))
x=4
return A.b(B.Gh(d,u),$async$bzL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzL,w)},
abB:function abB(d){this.a=d},
fi8:function fi8(){},
fni:function fni(d,e){this.a=d
this.b=e},
fnj:function fnj(d){this.a=d},
fnk:function fnk(){},
c7Q:function c7Q(d){this.a=d},
buJ:function buJ(d,e,f,g,h,i,j,k,l){var _=this
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
fnl:function fnl(){},
frl:function frl(){},
flL:function flL(d){this.a=d},
flM:function flM(d){this.a=d},
a6J(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b6(d,new B.c7V())?3:4
break
case 3:x=5
return A.b(B.aZm(d,e),$async$a6J)
case 5:u=g
if(u!=null){t=u.c
B.Nd(d,u.b,e,t)}v=u
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
return A.b(B.aZh(s),$async$a6J)
case 10:case 9:if(g){v=new A.PM(1,D.Rw,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UE(d,e),$async$a6J)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UJ(!0,!0,d,e),$async$a6J)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nd(d,D.zd,e,t)
v=new A.PM(p,D.zd,t)
x=1
break}v=B.c7U(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6J,w)},
UE(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6L(null,d,e),$async$UE)
case 3:p=g
try{u=C.S.aJ(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZg(p,d.length,e),$async$UE)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7S(e,C.d.gI(d).a,r.b),$async$UE)
case 7:case 6:q=r.a
x=8
return A.b(B.Nd(d,D.Rw,e,q),$async$UE)
case 8:v=new A.PM(d.length,D.Rw,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UE,w)},
UF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mF)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6K(d,e),$async$UF)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7N(s,d,e,t),$async$UF)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZh(t),$async$UF)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ro(e,d),$async$UF)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UE(A.a([d],y.r),e),$async$UF)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UF,w)},
UH(){var x=0,w=A.j(y.H)
var $async$UH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fVa(),$async$UH)
case 2:x=3
return A.b(B.aPU(),$async$UH)
case 3:return A.h(null,w)}})
return A.i($async$UH,w)},
a6K(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZj()
x=3
return A.b(B.c7R(e,d.a,u),$async$a6K)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6K,w)},
Nd(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nd=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Rw&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6K(p,f),$async$Nd)
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
return A.b(B.c7M(o,p,u,f),$async$Nd)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7N(o,p,f,t),$async$Nd)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7L(o,u,p,f),$async$Nd)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nd,w)},
aZm(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7T(e,d),$async$aZm)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UJ(!1,!0,d,e),$async$aZm)
case 4:u=g
if(u!=null){t=u.b
v=new A.PM(u.a,D.zd,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZm,w)},
c7T(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UD(d,s,0,1),$async$c7T)
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
return A.i($async$c7T,w)},
c7U(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6L(null,d,e),$async$c7U)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.ham(u)
if(t.length>800){v=null
x=1
break}v=new A.PM(d.length,D.dzz,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7U,w)},
aoR(d,e,f){return B.hEr(d,e,f)},
hEr(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoR=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mG(g,1)
x=B.fVf(g)?3:4
break
case 3:x=5
return A.b(B.c7O(g),$async$aoR)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mG(g,13))
try{k=B.Ep(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mG(g,13))
u=9
x=12
return A.b(B.aZf(q),$async$aoR)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UG(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.u(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fVe(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UG(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.Il(C.a.i(J.mG(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.Il(C.a.i(J.mG(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.ca(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Il(h,d,a0)
x=1
break}if(J.f2(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UG(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoR,w)},
Il(d,e,f){return B.hEp(d,e,f)},
hEp(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Il=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.ca(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.u(s)+"/manifest.json",0,null)
q=A.cE(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZ7(r),$async$Il)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZ7(A.cE(s,0,null)),$async$Il)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7q(o,r,a1,n,a2),$async$Il)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c7p(q),$async$Il)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UG(l,a2),$async$Il)
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
return A.i($async$Il,w)},
a6L(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6L=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.ro(f,r),$async$a6L)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cV.gcB().aK(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a7().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
UG(d,e){return B.hEq(d,e)},
hEq(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UG=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aJ(0,a2,null)
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
break}i=C.cI.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bz(i,a3,d,k,l,o),$async$UG)
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
return A.i($async$UG,w)},
Nc:function Nc(d,e){this.a=d
this.b=e},
c7V:function c7V(){},
a0P(d){var x=A.P(d).ax.a===C.I,w=x?D.aei:D.ac7,v=x?D.afM:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.adl:C.aL
return new A.aFH([w,s,v,u,t,x?C.fd:C.bT])},
hpL(d,e){var x=e?C.w.j(0.72):C.aW
return A.cb(null,x,!0,null,new B.fN7(e),d,null,!0,!0,y.N)},
c7A(d,e,f,g,h,i,j,k,l){return new B.Uy(e,l,d,f,k,j,g,h,i,null)},
YP(d,e,f,g,h,i,j){return new B.bcS(g,h,j,e,i,d,f,null)},
fN7:function fN7(d){this.a=d},
YM:function YM(d,e){this.c=d
this.a=e},
ayJ:function ayJ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2d:function d2d(d){this.a=d},
d2b:function d2b(d){this.a=d},
d2c:function d2c(d){this.a=d},
bun:function bun(){},
Uy:function Uy(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCG:function aCG(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dQa:function dQa(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d,e){this.a=d
this.b=e},
dP7:function dP7(d,e,f){this.a=d
this.b=e
this.c=f},
dP6:function dP6(d){this.a=d},
dP8:function dP8(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e,f){this.a=d
this.b=e
this.c=f},
dPc:function dPc(d){this.a=d},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQ_:function dQ_(d){this.a=d},
dPv:function dPv(d,e,f){this.a=d
this.b=e
this.c=f},
dPs:function dPs(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPb:function dPb(d){this.a=d},
dPD:function dPD(d){this.a=d},
dPC:function dPC(){},
dPh:function dPh(d){this.a=d},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPX:function dPX(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPP:function dPP(d,e){this.a=d
this.b=e},
dPL:function dPL(d){this.a=d},
dPK:function dPK(d){this.a=d},
dPM:function dPM(){},
dPN:function dPN(){},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPQ:function dPQ(){},
dPR:function dPR(d){this.a=d},
dPJ:function dPJ(d,e){this.a=d
this.b=e},
dPE:function dPE(d){this.a=d},
dPF:function dPF(d){this.a=d},
dPG:function dPG(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPe:function dPe(){},
dPf:function dPf(d){this.a=d},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPa:function dPa(d,e){this.a=d
this.b=e},
dP9:function dP9(d,e,f){this.a=d
this.b=e
this.c=f},
dPw:function dPw(d){this.a=d},
dPx:function dPx(d,e,f){this.a=d
this.b=e
this.c=f},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPj:function dPj(d,e,f){this.a=d
this.b=e
this.c=f},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(){},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dPi:function dPi(d,e,f){this.a=d
this.b=e
this.c=f},
dPl:function dPl(){},
dPB:function dPB(d){this.a=d},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d,e){this.a=d
this.b=e},
dPU:function dPU(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ5:function dQ5(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
dQ8:function dQ8(){},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d,e,f){this.a=d
this.b=e
this.c=f},
dQ0:function dQ0(d,e,f){this.a=d
this.b=e
this.c=f},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
ayG:function ayG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcR:function bcR(d,e,f){this.c=d
this.d=e
this.a=f},
d29:function d29(){},
d2a:function d2a(){},
abV:function abV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d2x:function d2x(){},
d2w:function d2w(d){this.a=d},
YO:function YO(d,e,f){this.c=d
this.d=e
this.a=f},
ayL:function ayL(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d,e,f){this.a=d
this.b=e
this.c=f},
d2v:function d2v(d,e){this.a=d
this.b=e},
d2r:function d2r(d,e){this.a=d
this.b=e},
d2p:function d2p(d){this.a=d},
d2n:function d2n(d){this.a=d},
d2k:function d2k(d){this.a=d},
d2q:function d2q(d){this.a=d},
d2m:function d2m(d){this.a=d},
d2s:function d2s(d){this.a=d},
d2o:function d2o(d){this.a=d},
d2l:function d2l(d){this.a=d},
YL:function YL(d,e,f){this.c=d
this.d=e
this.a=f},
ayI:function ayI(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d26:function d26(d){this.a=d},
d25:function d25(d,e){this.a=d
this.b=e},
d27:function d27(d){this.a=d},
d24:function d24(d,e){this.a=d
this.b=e},
d28:function d28(d){this.a=d},
d23:function d23(d,e){this.a=d
this.b=e},
d2_:function d2_(d){this.a=d},
d20:function d20(d){this.a=d},
d21:function d21(d,e){this.a=d
this.b=e},
d22:function d22(d){this.a=d},
Po:function Po(d,e,f){this.c=d
this.d=e
this.a=f},
ayO:function ayO(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2K:function d2K(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2M:function d2M(d){this.a=d},
d2N:function d2N(d){this.a=d},
d2O:function d2O(d,e){this.a=d
this.b=e},
d2P:function d2P(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
YQ:function YQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayM:function ayM(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d2G:function d2G(d,e){this.a=d
this.b=e},
d2H:function d2H(d,e){this.a=d
this.b=e},
d2y:function d2y(d,e,f){this.a=d
this.b=e
this.c=f},
d2z:function d2z(d){this.a=d},
d2A:function d2A(){},
d2F:function d2F(){},
d2B:function d2B(d,e){this.a=d
this.b=e},
d2C:function d2C(d,e){this.a=d
this.b=e},
d2D:function d2D(d,e){this.a=d
this.b=e},
d2E:function d2E(d,e){this.a=d
this.b=e},
abT:function abT(d,e){this.c=d
this.a=e},
d1Z:function d1Z(d){this.a=d},
YK:function YK(d){this.a=d},
ayH:function ayH(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YR:function YR(d,e){this.c=d
this.a=e},
ayN:function ayN(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d2J:function d2J(d){this.a=d},
d2I:function d2I(d){this.a=d},
bcS:function bcS(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hEs(){var x,w=$.pu(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.h1(v)},
Ne(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ne=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ne)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Ne)
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
$.am.$1("[doc share video cloud] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ne,w)},
a6M(d){return B.hEt(d)},
hEt(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6M)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hH("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6M)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6M,w)},
UI(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ne(),$async$UI)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a7().ac())
r.n(s,d,t)
x=4
return A.b(B.a6M(s),$async$UI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UI,w)},
UJ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UJ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UJ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.U(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c7X(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hEs()
t=A.U(u).k("M<1,a5<n,aD>>")
r=A.C(new A.M(u,new B.c7Y(s),t),t.k("ak.E"))
x=6
return A.b(B.Ne(),$async$UJ)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=7
return A.b(B.a6M(q),$async$UJ)
case 7:x=8
return A.b(B.a6N(r,u,g,s),$async$UJ)
case 8:v=new A.bor(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UJ,w)},
aoS(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ne(),$async$aoS)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoS,w)},
c7Z(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ne(),$async$c7Z)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a4(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7Z,w)},
a6N(d,e,f,g){return B.hEu(d,e,f,g)},
hEu(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6N=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoQ("media",r,new B.c7W(s,e,g),f,q),$async$a6N)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UI(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6N)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UI(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$a6N)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UI(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6N)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6N,w)},
Ep(d,e,f){return B.hEv(d,e,f)},
hEv(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ep=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ep)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoS(b3),$async$Ep)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ku,null,g),$async$Ep)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoS(b3),$async$Ep)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ne(),$async$Ep)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
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
a1=J.a4(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a4(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.eZ().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oW(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aa8(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZ8(k,n,o,s,b7),$async$Ep)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
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
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eZ().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oW(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aa8(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ep)
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
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a7().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6M(e),$async$Ep)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ep,w)},
c7X:function c7X(){},
c7Y:function c7Y(d){this.a=d},
c7W:function c7W(d,e,f){this.a=d
this.b=e
this.c=f},
aPU(){var x=0,w=A.j(y.H),v,u
var $async$aPU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hPr=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aPU)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aPU)
case 3:u=$.h_l
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aPU)
case 4:$.h_l=$.hXU=$.hXV=null
return A.h(null,w)}})
return A.i($async$aPU,w)},
fqX(d){var x=0,w=A.j(y.H),v,u
var $async$fqX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a62){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fqY(new A.bX(u,y.aY))
x=3
return A.b(u.io(0,C.hO,new B.fqZ()),$async$fqX)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fqX,w)},
hXS(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hEc(x):x},
h_p(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.aoU(u)
x=1
break}v=B.fVe(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_p,w)},
h_o(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.aoV(u)
x=1
break}v=B.fVe(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_o,w)},
fIK(d){var x=0,w=A.j(y.T),v
var $async$fIK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoV(d),$async$fIK)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fIK,w)},
bAB(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h_o(d),$async$bAB)
case 3:q=f
if(q==null){x=1
break}t=C.S.aJ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAB,w)},
ffg(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ffg=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UC(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bz(d.anK(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffg,w)},
Gj(d,e,f){return B.i_h(d,e,f)},
i_h(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gj=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h_p(a1),$async$Gj)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aJ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a4(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b5(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hrE().aDH(D.dny,null),$async$Gj)
case 4:l=d.h_l=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axx(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fru(f,k,new B.frv(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7f(0,new B.WS(r,"offer")),$async$Gj)
case 5:d=l
x=7
return A.b(l.aky(0),$async$Gj)
case 7:x=6
return A.b(d.a77(0,a4),$async$Gj)
case 6:x=8
return A.b(B.fqX(l),$async$Gj)
case 8:x=9
return A.b(l.aot(),$async$Gj)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hXS(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoW(m,h),$async$Gj)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.ham(h)
case 11:v=new A.bnJ(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gj,w)},
fqY:function fqY(d){this.a=d},
fqZ:function fqZ(){},
frv:function frv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fru:function fru(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
frt:function frt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i19(d){switch(d){case"new":return D.egx
case"checking":return D.egy
case"connected":return D.egA
case"completed":return D.egz
case"failed":return D.egC
case"disconnected":return D.egD
case"closed":return D.aLR
case"count":return D.egB}return D.aLR},
i1a(d){switch(d){case"new":return D.aLS
case"gathering":return D.egE
case"complete":return D.a62}return D.aLS},
ibq(d){switch(d){case"stable":return D.egF
case"have-local-offer":return D.egG
case"have-local-pranswer":return D.egI
case"have-remote-offer":return D.egH
case"have-remote-pranswer":return D.egJ
case"closed":return D.aLY}return D.aLY},
i9E(d){switch(d){case"new":return D.aLV
case"connecting":return D.aLW
case"connected":return D.aLX
case"closed":return D.a63
case"disconnected":return D.aLU
case"failed":return D.aLT}return D.a63},
a94:function a94(d,e){this.a=d
this.b=e},
Oe:function Oe(d,e){this.a=d
this.b=e},
WR:function WR(d,e){this.a=d
this.b=e},
Od:function Od(d,e){this.a=d
this.b=e},
ES:function ES(d,e){this.a=d
this.b=e},
ciV:function ciV(){},
fWY(d){var x=new B.ER()
x.a=d
x.b=!0
return x},
ER:function ER(){this.b=this.a=$},
a93:function a93(){},
ata:function ata(){},
WS:function WS(d,e){this.a=d
this.b=e},
fVa(){var x=0,w=A.j(y.H)
var $async$fVa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVa,w)},
fVd(d,e,f){var x=0,w=A.j(y.T),v
var $async$fVd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mF))){v=null
x=1
break}v=B.fJ_(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVd,w)},
ham(d){var x,w=F.abz.a40(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cV.gcB().aK(x)}return C.cV.gcB().aK(w)},
hEb(d){var x,w,v=C.cI.aK(d)
try{x=C.cg.cA(0,F.aby.bcr(v,!1))
return x}catch(w){x=C.cg.cA(0,v)
return x}},
fVe(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hEb(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.cg.cA(0,C.cI.aK(x))
return v}catch(u){return x}}return null},
hEc(d){var x,w,v,u,t,s=A.a([],y.s)
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
hEd(){var x,w=$.pu(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.h1(v)},
aZe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZe)
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
return A.i($async$aZe,w)},
c7F(d,e){return B.hEe(d,e)},
hEe(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7F=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hH("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c7F)
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
return A.i($async$c7F,w)},
aZh(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZe(d),$async$aZh)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZh,w)},
aZg(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hEd()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c7F(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cV.gcB().aK(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$aZg)
case 3:if(!h){v=null
x=1
break}v=new A.a_S("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZg,w)},
aZf(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZe(o),$async$aZf)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cA(0,C.cI.aK(u))
if(J.iW(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZf,w)},
c7G(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBy("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c7G)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.u(q)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7G,w)},
aZi(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ih(),$async$aZi)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZi,w)},
aoN(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoN)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZi(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoN,w)},
aoL(d,e){var x=0,w=A.j(y.H)
var $async$aoL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoL)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoL)
case 2:return A.h(null,w)}})
return A.i($async$aoL,w)},
a6E(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6E=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6E)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ih(),$async$a6E)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=5
return A.b(A.a6D(s),$async$a6E)
case 5:x=6
return A.b(B.aoL(f,u),$async$a6E)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6E,w)},
a6F(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6F=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6F)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ih(),$async$a6F)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
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
return A.b(B.aoL(g,q),$async$a6F)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6D(u),$async$a6F)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6F,w)},
a6G(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6G=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6G)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ih(),$async$a6G)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZb(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6G)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a7().ac()],p,p),null)),$async$a6G)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
c7H(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c7H)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aJ(0,r,null)
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
return A.i($async$c7H,w)},
Ii(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ii=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7H(d),$async$Ii)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZi(t),$async$Ii)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoM(d),$async$Ii)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZb(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoM(d),$async$Ii)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ii,w)},
aoM(d){var x=0,w=A.j(y.H)
var $async$aoM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoM)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoM)
case 2:return A.h(null,w)}})
return A.i($async$aoM,w)},
aZj(){var x,w=$.pu(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.h1(v)},
a6H(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fVf(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7K(d){return B.hEg(d)},
hEg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6H(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c7K)
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
return A.i($async$c7K,w)},
aoP(d,e){return B.hEh(d,e)},
hEh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6H(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hH("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aoP)
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
return A.i($async$aoP,w)},
c7M(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7M=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6H(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoP(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7M)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7M,w)},
c7L(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7L=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6H(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoP(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7L)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7L,w)},
c7N(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6H(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoP(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7N,w)},
c7O(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fVf(d)){v=null
x=1
break}x=3
return A.b(B.c7K(d),$async$c7O)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a4(u)
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
return A.i($async$c7O,w)},
a6O(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6O=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6O)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6O)
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
$.am.$1("[doc share webrtc stash] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6O,w)},
aoT(d){return B.hEw(d)},
hEw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoT)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hH("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoT)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoT,w)},
aoU(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoU)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6O(),$async$aoU)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cA(0,C.cI.aK(q))
if(J.iW(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a7().ac())
J.aG(s,j,o)
x=9
return A.b(B.aoT(s),$async$aoU)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
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
return A.i($async$aoU,w)},
aoW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoW)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6O(),$async$aoW)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dK.aK(C.a.i(e))
q.n(0,"answer",C.cV.gcB().aK(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a7().ac())
t.n(u,p,q)
x=5
return A.b(B.aoT(u),$async$aoW)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoW,w)},
aoV(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoV)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6O(),$async$aoV)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cA(0,C.cI.aK(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoV,w)},
anV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.pY)){v=null
x=1
break}x=3
return A.b(p.m1(e),$async$anV)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.h_),$async$anV)
case 7:q=g
o=q
o=o==null?null:J.eU(J.vm(o))
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
i7D(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aV(C.o.u(w),5,"0")
return v},
fHf(d){return B.i7F(d)},
i7F(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fHf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eZ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ih("media").KE(d,3600),$async$fHf)
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
return A.i($async$fHf,w)},
CT(d,e,f,g,h,i){var x=null
return B.i7C(d,e,f,g,h,i)},
i7C(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CT=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hap(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fVh(r),$async$CT)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fHf(o),$async$CT)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6I(r),$async$CT)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aP6)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LA(A.a([],g))
x=15
return A.b(d.eZ(0,A.au_("GET",A.cE(n,0,null))).d7(0,C.Fe),$async$CT)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6I(r),$async$CT)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ka(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CT)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZl(r,k),$async$CT)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a6(0),$async$CT)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.UC(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.u(j))
x=27
return A.b(B.a6I(r),$async$CT)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CT,w)},
aPD(d){return B.i7E(d)},
i7E(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eZ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ih("media").W(0,d),$async$aPD)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPD,w)}},D,T,M,U,V,W,X,N,Y
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
B.ciW.prototype={
aDH(d,e){return this.cJD(d,e)},
cJD(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cz(t)))
t=J.k(u)
v=B.hJ7(C.cV.gcB().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDH,w)}}
B.b3t.prototype={
bxT(d){var x=this,w=x.w
w.onclose=A.hl(new B.ciR(x))
w.onopen=A.hl(new B.ciS(x))
w.onmessage=A.hl(new B.ciT(x))
w.onbufferedamountlow=A.hl(new B.ciU(x))},
gdc(d){return this.x},
agR(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.ER()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fWY(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$agR)
case 8:v=t.fWY(s.an8(f,0,null))
x=1
break
case 7:case 4:v=B.fWY(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agR,w)}}
B.b3u.prototype={
bxU(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hl(new B.ciX(x)))
w.addEventListener("icecandidate",A.hl(new B.ciY(x)))
w.addEventListener("iceconnectionstatechange",A.hl(new B.ciZ(x)))
w.onicegatheringstatechange=A.hl(new B.cj_(x))
w.addEventListener("signalingstatechange",A.hl(new B.cj0(x)))
if(!$.h34())w.addEventListener("connectionstatechange",A.hl(new B.cj1(x)))
w.addEventListener("negotiationneeded",A.hl(new B.cj2(x)))
w.addEventListener("track",A.hl(new B.cj3(x)))},
aky(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aky=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ej(s.createAnswer(A.ki(A.cz(A.T(y.N,y.z)))),y.aQ),$async$aky)
case 3:t=f
v=new B.WS(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aky,w)},
a77(d,e){return this.bnj(0,e)},
bnj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a77=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a77)
case 2:return A.h(null,w)}})
return A.i($async$a77,w)},
a7f(d,e){return this.bnz(0,e)},
bnz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7f)
case 2:return A.h(null,w)}})
return A.i($async$a7f,w)},
aot(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aot=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$aot,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.abU.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YN.prototype={
T(){return new B.ayK()},
gde(){return this.c}}
B.ayK.prototype={
a_(){this.a1()
this.adA()},
adA(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZc(u.e,u.c),$async$adA)
case 2:t=e
if(v.c!=null)v.m(new B.d2h(v,t))
return A.h(null,w)}})
return A.i($async$adA,w)},
PZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoI(t.e,t.c,!1),$async$PZ)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(D.eYA)
x=1
break}x=4
return A.b(B.a6C(u.a.c,"individual"),$async$PZ)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5B(A.e8(new B.d2e(u),!1,null,y.H)),$async$PZ)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PZ,w)},
J1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fp3(o),$async$J1)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6G(o.e,r,s,q),$async$J1)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.U(D.eVF)
x=1
break}x=5
return A.b(B.a6C(u.a.c,"member"),$async$J1)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5B(A.e8(new B.d2g(u),!1,null,y.H)),$async$J1)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J1,w)},
xS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6B(t.e,o,t.f,t.r,t.w,s),$async$xS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6C(u.a.c,"org_owner"),$async$xS)
case 4:x=5
return A.b(B.aoN(u.a.c),$async$xS)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fpy(o),$async$xS)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6E(s,t,o,q.c),$async$xS)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.U(D.eVC)
x=1
break}x=10
return A.b(B.aoN(u.a.c),$async$xS)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5B(A.e8(new B.d2f(u),!1,null,y.H)),$async$xS)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xS,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jg:C.pJ,q=B.fVc(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fO,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fgm,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h8,t,t,t),C.aB,D.fzn,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bYC,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lB(new B.d2j(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acm(C.eT,C.ayz,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcdq(),t),C.ac],v))
p.push(new B.acm(C.oR,C.a1U,"Team Member","Sign in with your organization access code + password",u.gceh(),t))
p.push(C.ac)
p.push(new B.acm(C.al2,C.a3s,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcdN(),t))
return A.c7(t,r,A.bm(!0,A.c8(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ail,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acm.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.pf,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BB,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBh.prototype={}
B.aEt.prototype={}
B.jl.prototype={
my(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gap6(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ah(){var x,w=this,v=A.T(y.N,y.z)
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
bbV(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jl(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cI6(d){return this.bbV(null,d)},
aDs(d){return this.bbV(d,null)}}
B.Uw.prototype={
T(){return new B.aCE(new A.cs(null,y.A))},
gde(){return this.c}}
B.aCE.prototype={
a_(){this.a1()
this.adB()},
adB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.By(u.a.c),$async$adB)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dP3(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adB,w)},
adC(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fE(s)),$async$adC)
case 3:t=u.c
if(t!=null)t.J(y.q).f.U(D.eZu)
case 1:return A.h(v,w)}})
return A.i($async$adC,w)},
Zk(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zk=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anV(s.d,4),$async$Zk)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rV(r,"ngmy_my_code_"+m+".png"),$async$Zk)
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
if(o!=null)o.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zk,w)},
ahj(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9I("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahj)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahj,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jg:C.pJ,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2l,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ahW,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.c8(A.x(A.a([x,C.mO,w,C.kF,new A.ex(A.p(p,A.pP(p,p,!1,B.hE7(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kF,A.B(A.a([A.E(A.eD(N.BW,C.TZ,q.gc6r(),p),1),C.at,A.E(A.dn(C.yD,C.a8g,q.gc6s(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eD(M.a0M,D.fvb,q.gct1(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.Mt,p,p,C.ag)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.UA.prototype={
T(){return new B.aCH(new A.as(C.as,$.aw()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aCH.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ig(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ig(u.d.a.a)
if(t==null){u.m(new B.dQc(u))
x=1
break}u.m(new B.dQd(u))
s=u.a
r=s.c
x=3
return A.b(B.a6A(s.d,new B.dQe(u),t,r),$async$Zl)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dQf(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zl,w)},
a1w(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dQg(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.ro(r.a.c,q),$async$a1w)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQh(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahm(p,m,l,j,k),$async$a1w)
case 8:o=e
if(r.c!=null)r.m(new B.dQi(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dQj(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQk(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1w,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aei:D.ac7,h=j?D.afM:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.adl:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bMf,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2l,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ug(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bic()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.Mm,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQl(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m5,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.Ld(l.a.d,4)
m=A.C(new A.M(m,new B.dQm(x,new A.aFH(i)),m.$ti.k("M<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lP,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eUb)
else q.push(A.X(C.lo,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iE,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.c8(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bv9,k,k,C.ag),1)
u=l.f?k:l.gct2()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eD(M.a0M,D.fwb,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6t()
t=A.bn(C.aE,k,k,0,C.c,k,C.nf,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c7(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mD(new B.dQn(),A.x(A.a([e,new A.D(D.buF,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rP:D.fuA,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Yb,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bic.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hf(C.bw,v.length),C.aO)}}
B.Ux.prototype={
T(){return new B.aCF()}}
B.aCF.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b5,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b5,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
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
adD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dP4(r))
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
return A.b(B.a6F(p,m,n,o,C.a.i(l).length===0?null:l),$async$adD)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.U(D.eZ5)
s=[1]
x=4
break}p.J(y.q).f.U(D.eXJ)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dP5(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adD,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jg:C.pJ,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fnc,s,s,s,1,s,!0),p=A.p(s,D.bn3,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.GH,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bTb,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bT6,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bTm,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6u()
u=A.bn(C.aE,s,s,s,s,C.fP,s,s,s,s,s,s)
return A.c7(q,r,A.c8(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rP:C.aRR,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abB.prototype={}
B.buJ.prototype={
a4g(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anK()))
x=3
return A.b(B.QT(t,s),$async$a4g)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4g,w)},
gde(){return this.a}}
B.Nc.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YM.prototype={
T(){return new B.ayJ(new A.as(C.as,$.aw()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.ayJ.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d2d(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6A(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0P(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jg:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fO,32)],n),l=A.p(w,T.anI,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.aov,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ug(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bun()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fq,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aZh),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2b(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m5,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nC,new B.d2c(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Ke,A.c_(new A.D(C.xO,A.x(A.a([l,C.aR,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c_(A.aF(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.eas,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6z(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Oe,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.Mv,C.d1,w,w,w)}}
B.bun.prototype={
oz(d,e){return e.akt(e.a.toUpperCase())}}
B.Uy.prototype={
T(){return new B.aCG(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aCG.prototype={
a_(){var x=this
x.a1()
x.tI()
x.w=A.dt(C.jl,new B.dQa(x))},
q(){var x=this.w
if(x!=null)x.a6(0)
B.UH()
this.a2()},
a0o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nb(u.a.c),$async$a0o)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AB(u.a.c),$async$a0o)
case 4:u.m(new s.dPy(u,e))
u.i4("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0o,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nb(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AB(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dPz(u,s))
if(t>0)u.i4("Received "+A.u(t)+" file(s) via My Code.")
u.No(u.d)
B.By(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
No(d){return this.bBR(d)},
bBR(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$No=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6K(r,u.a.c),$async$No)
case 8:p=f
if(u.c==null){x=1
break}new B.dP7(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mF))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UF(r,u.a.c),$async$No)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AB(u.a.c),$async$No)
case 12:u.m(new o.dP8(u,f))
case 1:return A.h(v,w)}})
return A.i($async$No,w)},
NL(d){return this.bI8(d)},
bI8(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6K(d,u.a.c),$async$NL)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dPd(u,d,t))
x=6
return A.b(A.fM(new A.fE(t)),$async$NL)
case 6:u.i4("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fE(r.toUpperCase())),$async$NL)
case 7:u.i4("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NL,w)},
i4(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDB(d,e)},
cDB(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPZ(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dQ_(r))
$.eW.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUO(){var x=this.a
return x.f||x.r||x.w},
HY(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUO()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7D(s,n,r,q,o,t),$async$HY)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i4("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fAJ(o,u.a.c),$async$HY)
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
return A.b(B.CV(s,o,r,q,n,t),$async$HY)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HY,w)},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoN(u.a.c),$async$a_s)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i4("No organization portal found.")
x=1
break}t=J.a4(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cl(A.e8(new B.dPv(u,r,q),!1,null,y.H)),$async$a_s)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a0z(d){return this.cmA(d)},
cmz(){return this.a0z(1)},
cmA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUO()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoK(u.a.c),$async$a0z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0z,w)},
abA(d,e,f){return this.bYL(d,e,f)},
bYL(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4(e)
x=1
break}x=3
return A.b(u.tJ(new B.dPs(u,d,null,e,f),"Uploading\u2026"),$async$abA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abA,w)},
bBZ(){B.hp1(!1,new B.dPb(this))
return},
crB(){this.m(new B.dPD(this))},
axW(){var x=0,w=A.j(y.H),v=this
var $async$axW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bBZ()
return A.h(null,w)}})
return A.i($async$axW,w)},
abw(){var x=0,w=A.j(y.H),v=this
var $async$abw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPh(v),"Importing\u2026"),$async$abw)
case 2:return A.h(null,w)}})
return A.i($async$abw,w)},
S0(d){return this.cD1(d)},
cD1(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cl(A.e8(new B.dPW(u,d),!1,null,y.H)),$async$S0)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qa)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cl(A.e8(new B.dPX(u,d),!1,null,y.H)),$async$S0)
case 8:x=1
break
case 7:x=u.bZs(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cl(A.e8(new B.dPY(u,d),!1,null,y.H)),$async$S0)
case 11:x=1
break
case 10:u.i4("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
bZs(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cGc,C.a.b5(x,w+1).toLowerCase())},
af3(d){return this.cdu(d)},
cdu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cl(A.e8(new B.dPt(u,d),!1,null,y.H)),$async$af3)
case 5:x=1
break
case 4:u.m(new B.dPu(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af3,w)},
Rn(d){return this.cuy(d)},
cuy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i4("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p6(t,s.c,s.f),$async$Rn)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPP(u,d),"Preparing QR\u2026"),$async$Rn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
ahJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPQ(),A.U(t).k("M<1,n>")).fO(0)}t=u.d
s=A.U(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPR(q),s),s.k("J.E"))
if(r.length===0){u.i4("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rn(r),$async$ahJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahJ,w)},
ahC(d){return this.cu5(d)},
cu5(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0P(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPJ(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahC)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S0(d)
break
case"qr":u.Rn(A.a([d],y.r))
break
case"send_my_code":u.ce6(A.a([d],y.r))
break
case"save":u.agY(d)
break
case"delete":u.IN(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahC,w)},
Xf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPe(),A.U(t).k("M<1,n>")).fO(0)}t=u.d
s=A.U(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPf(q),s),s.k("J.E"))
if(r.length===0){u.i4("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p6(t,s.c,s.f),$async$Xf)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPg(u,r),"Preparing file\u2026"),$async$Xf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xf,w)},
ag9(d){return this.ckV(d)},
ckV(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ag9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hpL(d,!1),$async$ag9)
case 3:s=f
r=s==null
q=B.a6H(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i4("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag9,w)},
af9(){var x=0,w=A.j(y.H),v=this,u
var $async$af9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fIk(u,v.a.c),$async$af9)
case 2:return A.h(null,w)}})
return A.i($async$af9,w)},
bBY(){B.hp1(!1,new B.dPa(this,null))
return},
J0(d,e){return this.ce7(d,e)},
b_V(d){return this.J0(null,d)},
ce6(d){return this.J0(d,null)},
ce7(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dPw(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.x5.c6().an2(!0,C.a__,!1),$async$J0)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dPx(l,s,r),"Preparing\u2026"),$async$J0)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
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
return A.b(B.bCH(p,l,e,s.a.c),$async$J0)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J0,w)},
Ie(d){return this.bYy(d)},
bYy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ie=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hE6(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_V(t),$async$Ie)
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
return A.b(u.tJ(new B.dPq(u,d),"Receiving video\u2026"),$async$Ie)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dPr(u,d),"Receiving\u2026"),$async$Ie)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ie,w)},
E9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CP()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ag9(t),$async$E9)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ie(s),$async$E9)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cl(A.e8(new B.dPB(u),!1,null,y.N)),$async$E9)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$E9)
case 10:x=1
break
case 9:x=11
return A.b(u.Ie(C.a.i(r)),$async$E9)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E9,w)},
agY(d){return this.cq9(d)},
cq9(d){var x=0,w=A.j(y.H),v=this
var $async$agY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPA(v,d),"Saving\u2026"),$async$agY)
case 2:return A.h(null,w)}})
return A.i($async$agY,w)},
IN(d){return this.bKs(d)},
bKs(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l2(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IN)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c7G(t),$async$IN)
case 6:case 5:s=d.a
x=7
return A.b(B.Eo(u.a.c,s),$async$IN)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IN)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IN,w)},
ahP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0P(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPV(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahP)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.af9()
break
case"import":u.abw()
break}case 1:return A.h(v,w)}})
return A.i($async$ahP,w)},
c6x(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mF))return C.q8
if(C.a.a0(x,"image/")||d.my(D.Qa))return C.u0
if(C.a.t(x,"pdf"))return E.NK
return D.alv},
B(d){var x,w,v=this,u=null,t=B.a0P(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gz,u,u,u,new B.dQ5(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bMM,u,u,u,v.e?u:v.gcdO(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcrA()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bH6:E.alU,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0J,u,u,u,v.e?u:v.gc6y(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o6,u,u,u,v.e?u:v.gb12(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bOt,u,u,u,v.e?u:new B.dQ6(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lB(new B.dQ7(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m3(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayG(C.js,s,!0,t,w?u:v.gcuz(),u),1)
x.push(new A.D(D.btr,A.mD(new B.dQ8(),A.B(A.a([s,C.at,A.E(new B.ayG(C.vL,"Export",!1,t,w?u:v.gbO3(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iF,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcR(t,v.e?u:v.gb12(),u)
else s=A.k8(!0,u,u,new B.dQ9(v,t),s,u,D.btj,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayG.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vt,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vt,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.eD(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bcR.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mD(new B.d29(),new A.D(E.Z3,A.x(A.a([A.mD(new B.d2a(),A.p(x,A.X(C.y8,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ew,C.ii,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o6,D.fzG,this.d,A.bn(C.aE,x,x,x,C.c,x,C.YZ,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.B_,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.abV.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dC(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.my(D.mF))p=D.ddi
else{p=C.a.a0(p,"image/")||i.my(D.Qa)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gap6()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mF))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mF)))l.push(A.fSX(C.aE,!1,j,j,j,!1,j,j,new B.d2w(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.o4,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mD(new B.d2x(),new A.D(C.e5,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Yy,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ah),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YO.prototype={
T(){return new B.ayL()},
gde(){return this.c}}
B.ayL.prototype={
a_(){this.a1()
this.xJ()},
q(){B.hEl(this.e)
this.a2()},
xJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.ro(o.c,o.d),$async$xJ)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hEo(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hEn(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2t(s))
x=1
break}s.m(new B.d2u(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d2v(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xJ,w)},
a1v(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ro(t.c,t.d),$async$a1v)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(D.eWb)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahm(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1v)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1v,w)},
bYr(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kn(u,C.A,v,new B.d2r(w,t),C.fY,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fO(t,C.A,v,new B.d2s(w),C.fY,C.dv,!0,v,!1,v,v)
else return C.bH
return A.up(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0P(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BX,u,u,u,v.gb4T(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Eb
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.ca(w,".heic")||C.a.ca(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.BX,D.fiD,v.gb4T(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bYr()}return A.c7(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YL.prototype={
T(){return new B.ayI(A.aib(),C.bx,C.bx)},
gde(){return this.c}}
B.ayI.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fw(w,A.a3(w).k("fw<1>")).ij(new B.d26(v))
x.gcR_().ij(new B.d27(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a3(x).k("fw<1>"))}if(x==null)x=C.b4q
x.ij(new B.d28(v))
v.xJ()},
xJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ro(p.c,p.d),$async$xJ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2_(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a2V(r,s.a.d.c)),$async$xJ)
case 8:if(s.c==null){x=1
break}s.m(new B.d20(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d21(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xJ,w)},
Zm(){var x=0,w=A.j(y.H),v=this,u
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h8(0),$async$Zm)
case 5:x=3
break
case 4:x=6
return A.b(u.im(0),$async$Zm)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zm,w)},
aSF(d){var x=d.a
return C.a.aV(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aV(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0P(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Eb
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bI5,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Oe,C.n),o,88,o,o,o,o,o,88)
t=A.kY(C.aE,o,o,m,0,new B.d22(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSF(p.w)+" / "+p.aSF(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eSH,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yi:C.iJ,o,o,o,o,o)
x=A.x(A.a([u,C.kF,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6B(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c7(v,w,A.av(new A.D(C.r8,x,o),o,o,o),o,!1,!1,o,o)}}
B.Po.prototype={
T(){return new B.ayO()},
gde(){return this.c}}
B.ayO.prototype={
a_(){this.a1()
this.Pl()},
Pl(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fVd(o.c,o.d,new B.d2K(s)),$async$Pl)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2L(s))
x=1
break}s.e=r
q=O.i07(r)
if(q==null){s.m(new B.d2M(s))
x=1
break}s.d=q
q.aQ(0,s.gb_J())
x=8
return A.b(q.ii(0).d7(0,C.r5),$async$Pl)
case 8:if(s.c==null){x=1
break}s.m(new B.d2N(s))
x=9
return A.b(q.pT(0),$async$Pl)
case 9:q.ti(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d2O(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pl,w)},
cc5(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d2P(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_J())
w=x.d
if(w!=null)w.q()
B.i9X(x.e)
x.a2()},
adG(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZk(u.c,u.d),$async$adG)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adG,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0P(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.oY,t,t,t,u.gc6v(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Eb
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahF(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fI(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A5(s,t),A.aC(t,A.D4(A.p(t,A.X(q?I.yi:C.iJ,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d2R(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bH}}return A.c7(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YQ.prototype={
T(){return new B.ayM(new A.cs(null,y.A))}}
B.ayM.prototype={
gcDk(){var x,w,v=this.a
if(v.e!==D.Rx)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcD_(){var x,w,v=this.a
if(v.e!==D.zd)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcDk()
if(x!=null){v.Qn(x)
v.e=A.dt(R.Fi,new B.d2G(v,x))}w=v.gcD_()
if(w!=null){v.Qm(w)
v.f=A.dt(C.fW,new B.d2H(v,w))}},
q(){var x=this.e
if(x!=null)x.a6(0)
x=this.f
if(x!=null)x.a6(0)
this.a2()},
Qm(d){return this.cj6(d)},
cj6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoS(d),$async$Qm)
case 3:t=f
x=4
return A.b(B.c7Z(d),$async$Qm)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d2y(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qm,w)},
Qn(d){return this.cj7(d)},
cj7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fIK(d),$async$Qn)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAB(t),$async$Qn)
case 4:if(u.c==null){x=1
break}u.m(new B.d2z(u))
u.c.J(y.q).f.U(D.aOI)
case 1:return A.h(v,w)}})
return A.i($async$Qn,w)},
gc2t(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6w(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1h(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CP()){t=u.c
if(t!=null)t.J(y.q).f.U(D.eZf)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cl(A.e8(new B.d2A(),!1,null,y.N)),$async$a1h)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAB(s),$async$a1h)
case 4:t=u.c
if(t!=null)t.J(y.q).f.U(D.aOI)
case 1:return A.h(v,w)}})
return A.i($async$a1h,w)},
a9r(d){return this.bI9(d)},
bI9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fE(C.d.aH(t,", "))),$async$a9r)
case 3:if(d.e!=null){t=d.J(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9r,w)},
adE(d){return this.bHU(d)},
bHU(d){var x=0,w=A.j(y.H),v=this
var $async$adE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fE(v.a.c)),$async$adE)
case 2:if(d.e!=null)d.J(y.q).f.U(D.eWE)
return A.h(null,w)}})
return A.i($async$adE,w)},
a1c(d){return this.cqb(d)},
cqb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anV(s.d,4),$async$a1c)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rV(r,"ngmy_doc_share_qr.png"),$async$a1c)
case 8:q=f
if(d.e!=null)d.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1c,w)},
gaVV(){var x,w=this.a
if(w.e!==D.HJ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
a9o(d){return this.bI2(d)},
bI2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVV()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9o)
case 3:if(d.e!=null)d.J(y.q).f.U(D.eYf)
case 1:return A.h(v,w)}})
return A.i($async$a9o,w)},
adF(){var x=0,w=A.j(y.H),v=this,u
var $async$adF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UH(),$async$adF)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adF,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0P(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HJ&&i!==D.Rx&&i!==D.zd
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HJ||t===D.Rx||t===D.zd?l:A.aH(l,l,l,l,C.l2,l,l,l,m.gaYU(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pP(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc2t(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HJ){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc6w(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hk(D.bSf,D.frQ,new B.d2B(m,d),l)],p))}if(m.a.e===D.HJ&&m.gaVV()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hk(D.bON,D.foA,new B.d2C(m,d),l)],p))
if(m.a.e===D.zd){x=(m.w?C.dz:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ee:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.Rx){x=(m.r?C.dz:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ee:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bKz,D.fuT,m.gcqz(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ol(i,A.c7(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eD(N.BW,C.TZ,new B.d2D(m,d),l),1),C.at,A.E(A.dn(C.yD,C.a8g,new B.d2E(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zO,m.gaYU(),A.bn(C.aK,l,l,l,l,C.fP,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d2F(),y.C)}}
B.abT.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.c8(A.x(A.a([w,C.aR,A.p(x,A.pP(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.el(A.a([A.bG(C.zP,new B.d1Z(d),x)],u),x,x,C.mX,v,x,x,x,x,D.fhE,x)}}
B.YK.prototype={
T(){return new B.ayH(A.za(C.xv,C.nJ,C.uc))}}
B.ayH.prototype={
q(){this.d.q()
this.a2()},
awy(d){var x,w,v,u,t
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
return A.c7(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fp3,x,x,x,1,x,!0),C.w,A.z9(this.d,C.bV,this.gawx()),x,!1,!1,x,x)}}
B.YR.prototype={
T(){return new B.ayN(A.za(C.xv,C.nJ,C.uc))},
gde(){return this.c}}
B.ayN.prototype={
bZu(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afw(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RU("text/plain"),$async$afw)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.U(D.eZ9)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afw,w)},
aac(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aac=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hpL(p,!0),$async$aac)
case 3:t=e
p=t==null
s=B.a6H(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.U(D.eVM)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aac,w)},
q(){this.d.q()
this.a2()},
awy(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZu(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.amO,v,v,v,w.gbNC(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0Q,v,v,v,w.gcgw(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.re:P.Nv,v,v,v,v,v),v,v,v,new B.d2J(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fvK,v,v,v,1,v,!0)
u=A.z9(w.d,C.bV,w.gawx())
x=A.m(20)
return A.c7(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.egd],s),v),v,!1,!1,v,v)}}
B.bcS.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oI
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oI:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Z9,A.B(A.a([u,C.bd,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a94.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Oe.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WR.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Od.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.ES.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.ciV.prototype={}
B.ER.prototype={}
B.a93.prototype={}
B.ata.prototype={}
B.WS.prototype={}
var z=a.updateTypes(["aA<~>()","R(jl)","n(jl)","Uy(Y)","~()","YN(Y)","G(G,jl)","Po(Y)","~(lZ)","cr(ER)","aA<jl?>(@)","Uw(Y)","UA(Y)","D(jl)","jl(@)","a5<n,@>(jl)","YM(Y)","Ux(Y)","YO(Y)","YL(Y)","YQ(Y)","abT(Y)","ai<jl>()","YR(Y)","abV(Y,G)","YK(Y)","a5<n,aD>(jl)","cr(WR)","cr(a93)","aA<cr>(ER)"])
B.ciR.prototype={
$1(d){var x=this.a
x.x=D.aLQ
x.y.L(0,D.aLQ)},
$S:68}
B.ciS.prototype={
$1(d){var x=this.a
x.x=D.aLP
x.y.L(0,D.aLP)},
$S:68}
B.ciT.prototype={
$1(d){var x=this.a
x.agR(A.aOn(d.data)).bA(new B.ciQ(x),y.b)},
$S:68}
B.ciQ.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ciU.prototype={
$1(d){},
$S:68}
B.ciX.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hJ6(d.channel))},
$S:15}
B.ciY.prototype={
$1(d){},
$S:15}
B.ciZ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i19(w.iceConnectionState)
x.cx=w
if($.h34())switch(w.a){case 0:x.cy=D.aLV
break
case 1:x.cy=D.aLW
break
case 3:x.cy=D.aLX
break
case 5:x.cy=D.aLT
break
case 6:x.cy=D.aLU
break
case 7:x.cy=D.a63
break
default:break}},
$S:156}
B.cj_.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i1a(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:156}
B.cj0.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ibq(w.signalingState)},
$S:156}
B.cj1.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i9E(w.connectionState)},
$S:156}
B.cj2.prototype={
$1(d){},
$S:156}
B.cj3.prototype={
$1(d){},
$S:15}
B.fkW.prototype={
$1(d){var x=y.F.a(new A.rL([],[]).pB(d.target.result,!1)),w=C.xw.t(x.objectStoreNames,"blobs")
if(!w)C.xs.KC(x,"blobs")},
$S:198}
B.fI8.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vY.fg(this.b)
$.eW.mt()
this.c.$1(d)},
$S:453}
B.fIa.prototype={
$1(d){return this.a.$1(B.hRZ(this.b,this.c))},
$S:34}
B.fI9.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fI7.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fIn.prototype={
$1(d){var x=this
return B.hfg(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fIo.prototype={
$1(d){var x=this
return B.hfg(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fn6.prototype={
$1(d){var x=this
return B.c7A(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2h.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2e.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7A(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2g.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7A(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2f.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7A(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2j.prototype={
$4(d,e,f,g){var x=null
return A.jF(A.B(A.a([A.aH(x,x,x,x,D.bJa,x,x,x,new B.d2i(d),x,x,x,x,x,x),A.E(A.ED(D.PV,!0,x,C.a_W,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PV,x,g,C.aiG,0,e,f)},
$C:"$4",
$R:4,
$S:436}
B.d2i.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fp6.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.id:C.c,r=A.m(28),q=A.p(v,D.bnn,C.f,v,v,D.b_W,v,v,v,v,D.aiw,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bNk,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Fv,A.x(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.an3,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dU(C.df,new B.fp4(d),v),1),C.at,A.E(A.bG(D.fnA,new B.fp5(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Ma,v,v,v,v),v)},
$S:60}
B.fp4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fp5.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.U(D.eWT)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBh(v,x))},
$S:0}
B.fpA.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.id:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bnd,C.f,w,w,D.b1o,w,w,w,w,D.aiw,w,w,1/0),new A.D(C.Fv,A.x(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h_9(u,"Organization name",C.FX,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h_9(u,"Access code",C.nk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h_9(u,"Member password",H.Gu,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fvP,new B.fpz(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fP,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Ma,w,w,w,w),w)},
$S:60}
B.fpz.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.U(D.eWY)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEt(u,x,w))},
$S:0}
B.c7r.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a4(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cE(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.vd(p,null).d7(0,C.Ya),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bz(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c7x.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7y.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c7z.prototype={
$1(d){return d.b},
$S:z+2}
B.c7t.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7u.prototype={
$1(d){return d.b},
$S:z+2}
B.c7s.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c7v.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c7w.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fIl.prototype={
$1(d){return new B.Uw(this.a,null)},
$S:z+11}
B.fIm.prototype={
$1(d){return new B.UA(this.a,this.b,this.c,null)},
$S:z+12}
B.dP3.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dQc.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dQd.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dQe.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dQb(x,d))},
$S:2}
B.dQb.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQf.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQg.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQh.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQi.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQj.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dQk.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQn.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.dQl.prototype={
$1(d){var x=this.a
return x.f?null:x.Zl()},
$S:2}
B.dQm.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qa))s=C.u0
else s=C.a.a0(s,"video/")||d.my(D.mF)?C.q8:D.alv
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gap6(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dP4.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dP5.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c7B.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c7C.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fJ1.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fi8.prototype={
$1(d){return J.k(d)},
$S:17}
B.fni.prototype={
$1(d){var x=this.b
B.hQ2(C.FK.ga5U(this.a)).bA(x.gcGp(x),y.H)},
$S:125}
B.fnj.prototype={
$1(d){return this.a.d4(0,null)},
$S:125}
B.fnk.prototype={
$0(){return null},
$S:11}
B.c7Q.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnl.prototype={
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
return new B.jl(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.frl.prototype={
$1(d){return d.ah()},
$S:z+15}
B.flL.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.flM.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7V.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.fN7.prototype={
$1(d){return new B.YM(this.a,null)},
$S:z+16}
B.d2d.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fN()},
$S:9}
B.d2b.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d2c.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQa.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0o()},
$S:12}
B.dPy.prototype={
$0(){var x=J.bDL(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPz.prototype={
$0(){var x=J.bDL(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dP7.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dP6(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDs(this.c)}},
$S:0}
B.dP6.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dP8.prototype={
$0(){var x=J.bDL(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPd.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPc(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDs(this.c)}},
$S:0}
B.dPc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPZ.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dQ_.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dPv.prototype={
$1(d){return new B.Ux(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dPs.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HY(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UB(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a4(t)
x=s.gck(t)?6:7
break
case 6:x=8
return A.b(r.a0z(s.gM(t)),$async$$0)
case 8:case 7:r.i4(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPb.prototype={
$1(d){this.a.abA(d,"No files selected.","Added")},
$S:453}
B.dPD.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dPC(),A.U(x).k("M<1,n>")))},
$S:0}
B.dPC.prototype={
$1(d){return d.a},
$S:z+2}
B.dPh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x5.c6().cSX(C.a__,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jq(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.aa(j)
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
return A.b(B.aoR(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i4("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i4("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPW.prototype={
$1(d){return new B.Po(this.a.a.c,this.b,null)},
$S:z+7}
B.dPX.prototype={
$1(d){return new B.YO(this.a.a.c,this.b,null)},
$S:z+18}
B.dPY.prototype={
$1(d){return new B.YL(this.a.a.c,this.b,null)},
$S:z+19}
B.dPt.prototype={
$1(d){return new B.Po(this.a.a.c,this.b,null)},
$S:z+7}
B.dPu.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPP.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HY(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6J(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i4("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cmz(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.U(t).k("M<1,n>")
r=new A.M(new A.M(t,new B.dPL(p),r),new B.dPM(),r.k("M<ak.E,n>")).c0(0,new B.dPN())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cl(A.e8(new B.dPO(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p5(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UH(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPL.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dPK(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPK.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPM.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPN.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPO.prototype={
$1(d){var x=this.a
return new B.YQ(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPQ.prototype={
$1(d){return d.a},
$S:z+2}
B.dPR.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPJ.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gap6(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mF)?C.u2:C.oV
p=!x||p.my(D.mF)?"Play video":"View"
return A.c_(A.bm(!0,new A.D(C.Bb,A.x(A.a([q,o,t,C.aB,B.YP(!1,u,!1,w,p,new B.dPE(d),v),B.YP(!1,u,!1,C.js,"Share via QR",new B.dPF(d),"Letters/numbers QR code"),B.YP(!1,u,!1,D.a01,"Send to their Code",new B.dPG(d),"Enter someone else's personal code"),B.YP(!1,u,!1,C.hC,"Download / save",new B.dPH(d),v),C.am,B.YP(!1,u,!0,C.e6,"Delete",new B.dPI(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,v,v,C.n),C.bf)},
$S:687}
B.dPE.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dPF.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dPG.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPH.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dPI.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dPe.prototype={
$1(d){return d.a},
$S:z+2}
B.dPf.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPg.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6L(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gm(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p5(s.c,s.f),$async$$0)
case 4:u.i4(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPa.prototype={
$1(d){var x=this.a
x.tJ(new B.dP9(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dP9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i4("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UB(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i4("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCH(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i4("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPw.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dPx.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fVg(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gj(new B.dPm(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i4("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dPn(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dPo(s))
case 5:x=8
return A.b(r.b.io(0,C.Fe,new B.dPp()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i4("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i4("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPm.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPj(x,d,e))},
$S:142}
B.dPj.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPn.prototype={
$1(d){return new B.abT(this.a.a,null)},
$S:z+21}
B.dPo.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dPp.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dPr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ig(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6z(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_V(B.Ig(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoR(new B.dPk(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fVf(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i4(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dPl()).gM(0)
s.i4(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPk.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPi(x,d,e))},
$S:142}
B.dPi.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPl.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.dPB.prototype={
$1(d){return new B.YR(this.a.a.c,null)},
$S:z+23}
B.dPA.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZk(u.a.c,v.b),$async$$0)
case 2:t.i4(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPV.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.D(C.Bb,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YP(!0,w,!1,C.nk,"My Code",new B.dPS(d),"Your personal code & QR \u2014 others send docs to you"),B.YP(!1,w,!1,D.a01,"Send to their Code",new B.dPT(this.a,d),"Enter someone else's 5-digit code + letter"),B.YP(!1,w,!1,S.ys,"Import backup",new B.dPU(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,x,x,C.n),C.bf)},
$S:687}
B.dPS.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dPT.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bBY()},
$S:0}
B.dPU.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dQ7.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Iq(D.PV,x,C.a_W,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.PV).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dQ5.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQ6.prototype={
$0(){this.a.ahP()
return null},
$S:0}
B.dQ8.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.v(0,(1-e)*10)),e)},
$S:100}
B.dQ9.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abV(e,w,v,this.b,x.e,x.c6x(w),new B.dQ1(x,w),new B.dQ2(x,v,w),new B.dQ3(x,w),new B.dQ4(x,w),null)},
$S:z+24}
B.dQ1.prototype={
$0(){this.a.af3(this.b)
return null},
$S:0}
B.dQ2.prototype={
$0(){var x=this.a
return x.m(new B.dQ0(x,this.b,this.c))},
$S:0}
B.dQ0.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQ3.prototype={
$0(){this.a.NL(this.b)
return null},
$S:0}
B.dQ4.prototype={
$0(){this.a.ahC(this.b)
return null},
$S:0}
B.d29.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.v(0,(1-e)*18)),e)},
$S:100}
B.d2a.prototype={
$3(d,e,f){return A.ee(C.A,f,e,null,null)},
$S:137}
B.d2x.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.d2w.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d2t.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2u.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2r.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fO(w,C.A,x,new B.d2p(this.a),C.fY,C.dv,!0,x,!1,x,x)
$.aW.x1$.push(new B.d2q(this.a))
return C.bH},
$S:138}
B.d2p.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2n(this.a))
return C.bH},
$S:189}
B.d2n.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2k(x))},
$S:9}
B.d2k.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2q.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2m(x))},
$S:9}
B.d2m.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2s.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2o(this.a))
return C.bH},
$S:189}
B.d2o.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2l(x))},
$S:9}
B.d2l.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d26.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d25(x,d))},
$S:1739}
B.d25.prototype={
$0(){return this.a.f=this.b===C.uz},
$S:0}
B.d27.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d24(x,d))},
$S:9}
B.d24.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d28.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d23(x,d))},
$S:9}
B.d23.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2_.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d20.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d21.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d22.prototype={
$1(d){return this.a.d.ML(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2K.prototype={
$0(){var x=this.a.a
return B.ro(x.c,x.d)},
$S:1740}
B.d2L.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d2M.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d2N.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2O.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d2P.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d2R.prototype={
$0(){var x=this.a
x.m(new B.d2Q(x))},
$S:0}
B.d2Q.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h8(0)
else x.pT(0)},
$S:0}
B.d2G.prototype={
$1(d){return this.a.Qn(this.b)},
$S:12}
B.d2H.prototype={
$1(d){return this.a.Qm(this.b)},
$S:12}
B.d2y.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d2z.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d2A.prototype={
$1(d){return D.h_C},
$S:z+25}
B.d2F.prototype={
$2(d,e){if(d)B.UH()},
$S:119}
B.d2B.prototype={
$0(){return this.a.a9r(this.b)},
$S:0}
B.d2C.prototype={
$0(){return this.a.a9o(this.b)},
$S:0}
B.d2D.prototype={
$0(){return this.a.adE(this.b)},
$S:0}
B.d2E.prototype={
$0(){return this.a.a1c(this.b)},
$S:0}
B.d1Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d2J.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d2I(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2I.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7X.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.c7Y.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7W.prototype={
$2(d,e){return this.bjj(d,e)},
bjj(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UI(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1741}
B.fqY.prototype={
$1(d){if(d===D.a62&&(this.a.a.a&30)===0)this.a.fT(0)},
$S:z+27}
B.fqZ.prototype={
$0(){},
$S:11}
B.frv.prototype={
bkS(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ffg(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hap(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkS(d,e)},
$S:679}
B.fru.prototype={
$1(d){var x=this
d.b=new B.frt(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.frt.prototype={
$1(d){return this.bkR(d)},
bkR(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZl(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aJ(0,n,null)
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
return A.b(B.ffg(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.aa(j)
$.am.$1("[doc share webrtc recv] "+A.u(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6I(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ayK.prototype,"gcdq","PZ",0)
x(v,"gceh","J1",0)
x(v,"gcdN","xS",0)
x(v=B.aCE.prototype,"gc6r","adC",0)
x(v,"gc6s","Zk",0)
x(v,"gct1","ahj",0)
x(v=B.aCH.prototype,"gc6t","Zl",0)
x(v,"gct2","a1w",0)
x(B.aCF.prototype,"gc6u","adD",0)
x(B.ayJ.prototype,"gc6z","c6A",4)
x(v=B.aCG.prototype,"gcdO","a_s",0)
x(v,"gcrA","crB",4)
x(v,"gb12","axW",0)
x(v,"gcuz","ahJ",0)
x(v,"gbO3","Xf",0)
x(v,"gc6y","E9",0)
x(B.ayL.prototype,"gb4T","a1v",0)
x(B.ayI.prototype,"gc6B","Zm",0)
x(v=B.ayO.prototype,"gb_J","cc5",4)
x(v,"gc6v","adG",0)
x(v=B.ayM.prototype,"gcqz","a1h",0)
x(v,"gaYU","adF",0)
w(B.ayH.prototype,"gawx","awy",8)
x(v=B.ayN.prototype,"gcgw","afw",0)
x(v,"gbNC","aac",0)
w(v,"gawx","awy",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.ciV,B.a93,B.ata,B.aBh,B.aEt,B.jl,B.abB,B.buJ,B.ER,B.WS])
w(B.ciW,B.ciV)
w(B.b3t,B.a93)
x(A.hX,[B.ciR,B.ciS,B.ciT,B.ciQ,B.ciU,B.ciX,B.ciY,B.ciZ,B.cj_,B.cj0,B.cj1,B.cj2,B.cj3,B.fkW,B.fI8,B.fIa,B.fI9,B.fIn,B.fIo,B.fn6,B.d2e,B.d2g,B.d2f,B.d2j,B.fp6,B.fpA,B.c7r,B.c7y,B.c7z,B.c7u,B.c7s,B.c7v,B.c7w,B.fIl,B.fIm,B.dQe,B.dQn,B.dQl,B.dQm,B.fi8,B.fni,B.fnj,B.c7Q,B.fnl,B.frl,B.flL,B.flM,B.c7V,B.fN7,B.d2d,B.d2b,B.dQa,B.dP6,B.dPc,B.dPv,B.dPb,B.dPC,B.dPW,B.dPX,B.dPY,B.dPt,B.dPL,B.dPK,B.dPM,B.dPN,B.dPO,B.dPQ,B.dPR,B.dPJ,B.dPe,B.dPf,B.dPa,B.dPw,B.dPn,B.dPl,B.dPB,B.dPV,B.dQ7,B.dQ8,B.d29,B.d2a,B.d2x,B.d2w,B.d2r,B.d2p,B.d2n,B.d2q,B.d2s,B.d2o,B.d26,B.d27,B.d28,B.d22,B.d2G,B.d2H,B.d2A,B.c7X,B.c7Y,B.fqY,B.fru,B.frt])
w(B.b3u,B.ata)
x(A.j8,[B.fI7,B.d2h,B.d2i,B.fp4,B.fp5,B.fpz,B.dP3,B.dQc,B.dQd,B.dQb,B.dQf,B.dQg,B.dQh,B.dQi,B.dQj,B.dQk,B.dP4,B.dP5,B.fnk,B.d2c,B.dPy,B.dPz,B.dP7,B.dP8,B.dPd,B.dPZ,B.dQ_,B.dPs,B.dPD,B.dPh,B.dPu,B.dPP,B.dPE,B.dPF,B.dPG,B.dPH,B.dPI,B.dPg,B.dP9,B.dPx,B.dPq,B.dPj,B.dPo,B.dPp,B.dPr,B.dPi,B.dPA,B.dPS,B.dPT,B.dPU,B.dQ5,B.dQ6,B.dQ1,B.dQ2,B.dQ0,B.dQ3,B.dQ4,B.d2t,B.d2u,B.d2v,B.d2k,B.d2m,B.d2l,B.d25,B.d24,B.d23,B.d2_,B.d20,B.d21,B.d2K,B.d2L,B.d2M,B.d2N,B.d2O,B.d2P,B.d2R,B.d2Q,B.d2y,B.d2z,B.d2B,B.d2C,B.d2D,B.d2E,B.d1Z,B.d2J,B.d2I,B.fqZ])
x(A.ma,[B.abU,B.Nc,B.a94,B.Oe,B.WR,B.Od,B.ES])
x(A.ag,[B.YN,B.Uw,B.UA,B.Ux,B.YM,B.Uy,B.YO,B.YL,B.Po,B.YQ,B.YK,B.YR])
x(A.ah,[B.ayK,B.aCE,B.aCH,B.aCF,B.ayJ,B.aCG,B.ayL,B.ayI,B.ayO,B.ayM,B.ayH,B.ayN])
x(A.au,[B.acm,B.ayG,B.bcR,B.abV,B.abT,B.bcS])
x(A.kj,[B.c7x,B.c7t,B.c7B,B.c7C,B.fJ1,B.dPm,B.dPk,B.dQ9,B.d2F,B.c7W,B.frv])
x(A.iS,[B.bic,B.bun])})()
A.jY(b.typeUniverse,JSON.parse('{"b3t":{"a93":[]},"b3u":{"ata":[]},"YN":{"ag":[],"r":[]},"ayK":{"ah":["YN"]},"acm":{"au":[],"r":[]},"Uw":{"ag":[],"r":[]},"UA":{"ag":[],"r":[]},"aCE":{"ah":["Uw"]},"aCH":{"ah":["UA"]},"bic":{"iS":[]},"Ux":{"ag":[],"r":[]},"aCF":{"ah":["Ux"]},"YM":{"ag":[],"r":[]},"Uy":{"ag":[],"r":[]},"abV":{"au":[],"r":[]},"YO":{"ag":[],"r":[]},"YL":{"ag":[],"r":[]},"Po":{"ag":[],"r":[]},"YQ":{"ag":[],"r":[]},"abT":{"au":[],"r":[]},"YK":{"ag":[],"r":[]},"YR":{"ag":[],"r":[]},"ayJ":{"ah":["YM"]},"bun":{"iS":[]},"aCG":{"ah":["Uy"]},"ayG":{"au":[],"r":[]},"bcR":{"au":[],"r":[]},"ayL":{"ah":["YO"]},"ayI":{"ah":["YL"]},"ayO":{"ah":["Po"]},"ayM":{"ah":["YQ"]},"ayH":{"ah":["YK"]},"ayN":{"ah":["YR"]},"bcS":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u8"),k:x("LE()"),m:x("bl<n,n>"),F:x("r0"),g:x("aA<jl?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a5<n,R>>"),t:x("O<a5<n,@>>"),r:x("O<jl>"),w:x("O<+file,name(lw,n)>"),u:x("O<cR>"),s:x("O<n>"),E:x("O<iS>"),a:x("O<dJ>"),p:x("O<r>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jl>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<n,n>"),P:x("a5<n,@>"),f:x("a5<@,@>"),o:x("iC"),e:x("ifl"),af:x("E6"),U:x("jl"),b:x("cr"),C:x("aD"),aK:x("w2"),ab:x("ER"),br:x("ata"),v:x("WS"),N:x("n"),X:x("bq<L>"),Q:x("lI"),D:x("dJ"),aw:x("cx<n>"),cd:x("a_<a5<n,@>>"),c7:x("r"),ch:x("bX<ai<jl>>"),aW:x("bX<dJ?>"),aY:x("bX<~>"),cx:x("abU"),b1:x("bg<ai<jl>>"),cf:x("bg<dJ?>"),d4:x("bg<~>"),c4:x("aBh"),bG:x("aEt"),q:x("n1"),B:x("pm<ER>"),c6:x("pm<a94>"),y:x("R"),i:x("L"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jl>?"),aL:x("ai<@>?"),h:x("a5<n,@>?"),l:x("jl?"),R:x("aD?"),c:x("WS?"),d:x("+answerQr,transfer(n,aA<ai<jl>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Nc,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dJ?"),cm:x("abB?"),bk:x("aBh?"),ag:x("aEt?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZh=new A.ay(C.aE,2,C.q,-1)
D.bWL=new A.a8(C.a3,C.a8,C.x,C.a1U,null,null)
D.b_W=new A.o(null,null,null,C.mc,null,D.bWL,C.n)
D.b1o=new A.o(null,null,null,C.mc,null,E.GH,C.n)
D.ac7=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adl=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aei=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.afM=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fiw=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fwK=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Dr,null,null,null,null,null,null,null,null,null)
D.d5a=x([D.fiw,C.am,D.fwK],y.p)
D.bn3=new A.fm(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d5a,null)
D.fB3=new A.y("Create your organization",null,C.fo,null,null,null,null,null,null,null,null,null)
D.fmO=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dr,null,null,null,null,null,null,null,null,null)
D.dkD=x([D.fB3,C.am,D.fmO],y.p)
D.bnd=new A.fm(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dkD,null)
D.fxk=new A.y("Team Member sign-in",null,C.fo,null,null,null,null,null,null,null,null,null)
D.fqD=new A.y("Enter the access code and password from your organization.",null,G.Dr,null,null,null,null,null,null,null,null,null)
D.diw=x([D.fxk,C.am,D.fqD],y.p)
D.bnn=new A.fm(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.diw,null)
D.btj=new A.Q(16,10,16,28)
D.btr=new A.Q(16,14,16,4)
D.buF=new A.Q(20,0,20,16)
D.bv9=new A.Q(20,8,20,16)
D.aiw=new A.Q(24,22,24,20)
D.a01=new A.a0(63394,"MaterialIcons",!1)
D.alv=new A.a0(63515,"MaterialIcons",!1)
D.bH6=new A.a0(983813,"MaterialIcons",!1)
D.bEk=new A.a0(62867,"MaterialIcons",!1)
D.bI5=new A.ae(D.bEk,44,C.c,null,null,null)
D.bJa=new A.ae(C.pZ,null,C.ad,null,null,null)
D.bKz=new A.ae(C.j1,18,null,null,null,null)
D.bMf=new A.ae(D.a01,26,C.c,null,null,null)
D.bMM=new A.ae(C.BN,null,null,null,null,null)
D.bNk=new A.ae(C.yu,null,null,null,null,null)
D.bOt=new A.ae(W.NI,null,null,null,null,null)
D.bON=new A.ae(C.hp,16,null,null,null,null)
D.bSf=new A.ae(C.ri,16,null,null,null,null)
D.bIn=new A.ae(C.nk,null,null,null,null,null)
D.bT6=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bIn,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNS=new A.ae(C.FX,null,null,null,null,null)
D.bTb=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bNS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bII=new A.ae(H.Gu,null,null,null,null,null)
D.bTm=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bII,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cGK=x([C.fd,C.aZ,C.aE],y.O)
D.bYC=new A.a8(C.ay,C.aC,C.x,D.cGK,null,null)
D.cGc=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PV=x([C.fd,C.aE],y.O)
D.Qa=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mF=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.ddi=x([C.pC,C.aE],y.O)
D.e4K={iceServers:0}
D.aGu={urls:0}
D.dof=new A.bl(D.aGu,["stun:stun.l.google.com:19302"],y.m)
D.doe=new A.bl(D.aGu,["stun:stun1.l.google.com:19302"],y.m)
D.cWA=x([D.dof,D.doe],A.ax("O<a5<n,n>>"))
D.dny=new A.bl(D.e4K,[D.cWA],A.ax("bl<n,@>"))
D.HJ=new B.Nc(0,"lanDirect")
D.Rw=new B.Nc(1,"cloudStash")
D.dzz=new B.Nc(2,"inlineInstant")
D.Rx=new B.Nc(3,"webrtcLink")
D.zd=new B.Nc(4,"videoCloud")
D.fwJ=new A.y("Receive file",null,C.nB,null,null,null,null,null,null,null,null,null)
D.cwe=x([E.anb,C.ab,D.fwJ],y.p)
D.eOq=new A.cl(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cwe,null)
D.eas=new A.D(C.cl,D.eOq,null)
D.f9F=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2z,null,null,null)
D.fj3=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f9F,null,C.L,null,null,null,null,null,null,null)
D.e9K=new A.D(C.Bg,D.fj3,null)
D.b5E=new A.cp(C.A,null,null,D.e9K,null)
D.egd=new A.cL(0,null,0,28,null,null,D.b5E,null)
D.egw=new B.a94(0,"RTCDataChannelConnecting")
D.aLP=new B.a94(1,"RTCDataChannelOpen")
D.aLQ=new B.a94(3,"RTCDataChannelClosed")
D.egx=new B.ES(0,"RTCIceConnectionStateNew")
D.egy=new B.ES(1,"RTCIceConnectionStateChecking")
D.egz=new B.ES(2,"RTCIceConnectionStateCompleted")
D.egA=new B.ES(3,"RTCIceConnectionStateConnected")
D.egB=new B.ES(4,"RTCIceConnectionStateCount")
D.egC=new B.ES(5,"RTCIceConnectionStateFailed")
D.egD=new B.ES(6,"RTCIceConnectionStateDisconnected")
D.aLR=new B.ES(7,"RTCIceConnectionStateClosed")
D.aLS=new B.WR(0,"RTCIceGatheringStateNew")
D.egE=new B.WR(1,"RTCIceGatheringStateGathering")
D.a62=new B.WR(2,"RTCIceGatheringStateComplete")
D.a63=new B.Od(0,"RTCPeerConnectionStateClosed")
D.aLT=new B.Od(1,"RTCPeerConnectionStateFailed")
D.aLU=new B.Od(2,"RTCPeerConnectionStateDisconnected")
D.aLV=new B.Od(3,"RTCPeerConnectionStateNew")
D.aLW=new B.Od(4,"RTCPeerConnectionStateConnecting")
D.aLX=new B.Od(5,"RTCPeerConnectionStateConnected")
D.egF=new B.Oe(0,"RTCSignalingStateStable")
D.egG=new B.Oe(1,"RTCSignalingStateHaveLocalOffer")
D.egH=new B.Oe(2,"RTCSignalingStateHaveRemoteOffer")
D.egI=new B.Oe(3,"RTCSignalingStateHaveLocalPrAnswer")
D.egJ=new B.Oe(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLY=new B.Oe(5,"RTCSignalingStateClosed")
D.eSH=new A.ar(160,48)
D.b6S=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eUb=new A.a7(16,16,D.b6S,null)
D.fmc=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eVC=new A.b1(D.fmc,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftA=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eVF=new A.b1(D.ftA,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fC7=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eVM=new A.b1(D.fC7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.flN=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eWb=new A.b1(D.flN,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxv=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aOI=new A.b1(D.fxv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fyT=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eWE=new A.b1(D.fyT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fDw=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eWT=new A.b1(D.fDw,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fBx=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eWY=new A.b1(D.fBx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fCK=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eXJ=new A.b1(D.fCK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkr=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYf=new A.b1(D.fkr,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvn=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eYA=new A.b1(D.fvn,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fop=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ5=new A.b1(D.fop,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fDC=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ9=new A.b1(D.fDC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkH=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eZf=new A.b1(D.fkH,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fjp=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eZu=new A.b1(D.fjp,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgm=new A.y("NGMY DOC SHARE",null,C.aQ2,null,null,null,null,null,null,null,null,null)
D.fhE=new A.y("Show this to sender",null,C.kf,null,null,null,null,null,null,null,null,null)
D.fiD=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fnc=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fnA=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.foA=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fp3=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.frQ=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fuA=new A.y("Send to their Doc Share",null,C.nz,null,null,null,null,null,null,null,null,null)
D.fuT=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fvb=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fvK=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fvP=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fwb=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fzn=new A.y("Share files & videos\nwith a scan.",null,C.aQ3,null,null,null,null,null,null,null,null,null)
D.fzG=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h_C=new B.YK(null)
D.a98=new B.abU(0,"docShare")
D.a99=new B.abU(1,"gate")
D.Uw=new B.abU(2,"gateNoIndividual")})();(function staticFields(){$.aN9=null
$.fd6=function(){var x=y.N
return A.T(x,x)}()
$.G5=A.T(y.N,y.D)
$.afX=A.T(y.N,A.ax("lw"))
$.QE=A.T(y.N,y.D)
$.fdA=A.T(y.N,A.ax("abB"))
$.c7P=A.T(y.S,A.ax("buJ"))
$.hao=1
$.hXV=null
$.hXU=null
$.hPr=null
$.h_l=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ifQ","hrE",()=>new B.ciW())
x($,"idL","h34",()=>C.a.t(A.bu(A.bu(A.bu(A.GG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["RElic6Mkv2JkrWmzkBDvwmZWv3s="]=a.current})($__dart_deferred_initializers__);