((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ciJ:function ciJ(){},
hIm(d){var x=null,w=new B.b3n(d,D.efn,new A.pm(x,x,y.c6),new A.pm(x,x,y.B))
w.bxB(d)
return w},
b3n:function b3n(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ciE:function ciE(d){this.a=d},
ciF:function ciF(d){this.a=d},
ciG:function ciG(d){this.a=d},
ciD:function ciD(d){this.a=d},
ciH:function ciH(d){this.a=d},
hIn(d,e){var x=y.N
x=new B.b3o(d,e,A.T(x,y.e),A.T(x,y.z))
x.bxC(d,e)
return x},
b3o:function b3o(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ciK:function ciK(d){this.a=d},
ciL:function ciL(d){this.a=d},
ciM:function ciM(d){this.a=d},
ciN:function ciN(d){this.a=d},
ciO:function ciO(d){this.a=d},
ciP:function ciP(d){this.a=d},
ciQ:function ciQ(d){this.a=d},
ciR:function ciR(d){this.a=d},
fZm(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yC.LN(x,"ngmy_doc_share_v1",new B.fkk(),1)},
hOW(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zY(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aJ(d)
return x}catch(w){return v}return v},
QS(d,e){return B.i37(d,e)},
i37(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aN5
x=7
return A.b(o==null?$.aN5=B.fZm():o,$async$QS)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mH(s,"blobs","readwrite")
C.iL.ml(J.mF(q,"blobs"),r,d)
x=8
return A.b(J.pw(q),$async$QS)
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
return A.i($async$QS,w)},
QR(d){return B.i36(d)},
i36(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aN5
x=7
return A.b(o==null?$.aN5=B.fZm():o,$async$QR)
case 7:s=f
r=J.mH(s,"blobs","readonly")
x=8
return A.b(C.iL.zs(J.mF(r,"blobs"),d),$async$QR)
case 8:q=f
x=9
return A.b(J.pw(r),$async$QR)
case 9:o=B.hOW(q)
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
return A.i($async$QR,w)},
agy(d){return B.i35(d)},
i35(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aN5
x=7
return A.b(p==null?$.aN5=B.fZm():p,$async$agy)
case 7:s=f
r=J.mH(s,"blobs","readwrite")
C.iL.FI(J.mF(r,"blobs"),d)
x=8
return A.b(J.pw(r),$async$agy)
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
return A.i($async$agy,w)},
fkk:function fkk(){},
hRe(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnU(w,v))}return u},
hoj(d,e){var x,w={},v=A.aVu("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fHu(w,v,e)
C.vW.ym(v,"change",new B.fHw(w,v,!1))
C.vW.ym(v,"cancel",new B.fHv(w))
$.eV.ms()
v.click()
A.bN(C.agz,new B.fHt(w),y.H)},
fHu:function fHu(d,e,f){this.a=d
this.b=e
this.c=f},
fHw:function fHw(d,e,f){this.a=d
this.b=e
this.c=f},
fHv:function fHv(d){this.a=d},
fHt:function fHt(d){this.a=d},
CS(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CS=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTp()?3:4
break
case 3:x=5
return A.b(B.hjq(e,d,s,!0,!1,f,g,h,!1,i),$async$CS)
case 5:x=1
break
case 4:x=6
return A.b(B.Qw(d,s,f,g,h,i),$async$CS)
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
return A.b(B.Ig(s,d),$async$CS)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.ffM(s,d),$async$CS)
case 14:x=12
return A.b(r.hjq(q,p,o,n,m,l,k,j,a1,i),$async$CS)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ck(A.e8(new B.fHJ(s,i,d,f,g,h),!1,null,y.H)),$async$CS)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ck(A.e8(new B.fHK(s,i,d,f,g,h),!1,null,y.H)),$async$CS)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CS,w)},
Qw(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qw=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ7(e),$async$Qw)
case 3:u=k
x=4
return A.b(B.aoE(d,e,!1),$async$Qw)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ig(e,d),$async$Qw)
case 7:if(k){v=D.a94
x=1
break}x=8
return A.b(B.Ux(e),$async$Qw)
case 8:v=t?D.Us:D.a95
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZ5(d,e)){v=D.a94
x=1
break}x=11
return A.b(B.Ux(e),$async$Qw)
case 11:v=t?D.Us:D.a95
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fUx(d,e)){v=D.a94
x=1
break}x=14
return A.b(B.Ux(e),$async$Qw)
case 14:v=D.Us
x=1
break
case 13:v=t?D.Us:D.a95
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qw,w)},
ffM(d,e){var x=0,w=A.j(y.y),v
var $async$ffM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZ5(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZ7(d),$async$ffM)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffM,w)},
hjq(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ck(A.e8(new B.fmv(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hez(d,e,f,g,h,i,j){return new B.YL(e,j,d,g,h,i,f,null)},
fos(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fos=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fov(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fos)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fos,w)},
foX(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$foX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.foZ(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$foX)
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
return A.i($async$foX,w)},
fZv(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fA4(d,e){var x=0,w=A.j(y.H),v
var $async$fA4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ux(e),$async$fA4)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fA4,w)},
fHJ:function fHJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fHK:function fHK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abQ:function abQ(d,e){this.a=d
this.b=e},
fmv:function fmv(d,e,f,g,h,i,j,k,l){var _=this
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
ayG:function ayG(){this.c=this.a=this.d=null},
d20:function d20(d,e){this.a=d
this.b=e},
d1Y:function d1Y(d){this.a=d},
d2_:function d2_(d){this.a=d},
d1Z:function d1Z(d){this.a=d},
d22:function d22(){},
d21:function d21(d){this.a=d},
aci:function aci(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBd:function aBd(d,e){this.a=d
this.b=e},
aEp:function aEp(d,e,f){this.a=d
this.b=e
this.c=f},
fov:function fov(d,e,f){this.a=d
this.b=e
this.c=f},
fot:function fot(d){this.a=d},
fou:function fou(d,e,f){this.a=d
this.b=e
this.c=f},
foZ:function foZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foY:function foY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7d(d,e,f,g,h){return B.hDg(d,e,f,g,h)},
hDg(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7d=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iM(r.du(d,new B.c7e(s,e,h,g,f,q),y.g),y.l),$async$c7d)
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
return A.i($async$c7d,w)},
aZ2(d,e,f,g,h){return B.hDh(d,e,f,g,h)},
hDh(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZ2=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atW("GET",d)
o=A.fQZ()
if(o==null)o=new A.Lz(A.a([],y.W))
x=7
return A.b(o.eZ(0,s).d6(0,C.Fd),$async$aZ2)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cg(),$async$aZ2)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bw(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZ2,w)},
aZ1(d){return B.hDe(d)},
hDe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZ1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vd(d,null).d6(0,C.nX),$async$aZ1)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aI(0,A.lQ(A.lN(p.e)).cz(0,p.w),null)
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
return A.i($async$aZ1,w)},
c7c(d){return B.hDf(d)},
hDf(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vd(d,null).d6(0,C.pS),$async$c7c)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lQ(A.lN(q.e)).cz(0,q.w)
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
return A.i($async$c7c,w)},
c7e:function c7e(d,e,f,g,h,i){var _=this
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
Ie(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hDm(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ie(C.a.b3(u,v.length))}return null},
hDn(d){var x=B.Ie(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hDi(){var x,w=$.pt(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.h_(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a6t(d){return B.hDj(d)},
hDj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bI),$async$a6t)
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
return A.i($async$a6t,w)},
a6u(d,e){return B.hDk(d,e)},
hDk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6u=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hG(d,e,!1,!1,C.cH,null),$async$a6u)
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
return A.i($async$a6u,w)},
Bv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Bv)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ie(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6v(r),$async$Bv)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bv)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ie(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bv)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hDi()
x=14
return A.b(B.a6v(m),$async$Bv)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a7().ac()
x=15
return A.b(B.a6u("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bv)
case 15:k=f
x=16
return A.b(B.a6u("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bv)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bv)
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
return A.i($async$Bv,w)},
a6v(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ie(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6v)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
a6w(d,e,f,g){return B.hDo(d,e,f,g)},
hDo(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6w=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ie(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6v(r),$async$a6w)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cK(d,0,new B.c7k())>1048576||g.b4(d,new B.c7l())){v=B.Em(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6H("myCode",d,a0),$async$a6w)
case 4:u=a3
try{t=C.S.aI(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Em(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZa(u,g.gM(d),a0),$async$a6w)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pt().aA(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.du(d,new B.c7m(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZ3(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],i,y.z),q),$async$a6w)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6w,w)},
Em(d,e,f,g,h){return B.hDl(d,e,f,g,h)},
hDl(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Em=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Em)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cK(a6,0,new B.c7g())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pt().aA(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.aA(99999)
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
a1=B.Ii(a9,q)
a0=new A.K9(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Em)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oV(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aa4(a1.a,a4,"media",a1.d,a2).wX(m,n,new A.DE(!0,q.c)),$async$Em)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a6(0),$async$Em)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPz(r),$async$Em)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.du(a6,new B.c7h(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZ3(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a7().ac(),"status","pending"],e,d),a8),$async$Em)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPz(r),$async$Em)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Em,w)},
aZ3(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZ3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6t(t),$async$aZ3)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7f(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6u(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ3,w)},
Na(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Na=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6t("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Na)
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
return A.b(B.aZ4(k,a0),$async$Na)
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
return A.b(B.aZ9(h),$async$Na)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UE(g,a0),$async$Na)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c7i(),q),n)
d=A.C(new A.a_(r,new B.c7j(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.db(d,0,A.dG(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6u("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Na)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Na,w)},
aZ4(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZ4=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.i6U(k,j)
C.d.v(s,i)
x=5
return A.b(B.CQ(l,m,"Received via My Code",t,e,i),$async$aZ4)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPz(s),$async$aZ4)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ4,w)},
c7k:function c7k(){},
c7l:function c7l(){},
c7m:function c7m(){},
c7g:function c7g(){},
c7h:function c7h(){},
c7f:function c7f(){},
c7i:function c7i(){},
c7j:function c7j(){},
fHG(d,e){var x=0,w=A.j(y.H)
var $async$fHG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ck(A.e8(new B.fHH(e),!1,null,y.H)),$async$fHG)
case 2:return A.h(null,w)}})
return A.i($async$fHG,w)},
bCB(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ck(A.e8(new B.fHI(g,e,f),!1,null,y.y)),$async$bCB)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCB,w)},
fHH:function fHH(d){this.a=d},
fHI:function fHI(d,e,f){this.a=d
this.b=e
this.c=f},
Uu:function Uu(d,e){this.c=d
this.a=e},
aCA:function aCA(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOM:function dOM(d,e){this.a=d
this.b=e},
Uy:function Uy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCD:function aCD(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPV:function dPV(d){this.a=d},
dPW:function dPW(d){this.a=d},
dPX:function dPX(d){this.a=d},
dPU:function dPU(d,e){this.a=d
this.b=e},
dPY:function dPY(d){this.a=d},
dPZ:function dPZ(d){this.a=d},
dQ_:function dQ_(d,e){this.a=d
this.b=e},
dQ0:function dQ0(d,e){this.a=d
this.b=e},
dQ1:function dQ1(d,e){this.a=d
this.b=e},
dQ2:function dQ2(d){this.a=d},
dQ5:function dQ5(){},
dQ3:function dQ3(d){this.a=d},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
bi6:function bi6(){},
Uv:function Uv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCB:function aCB(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dON:function dON(d){this.a=d},
dOO:function dOO(d){this.a=d},
fUy(d){var x=d.hT
if(x>=0)return C.o.N(x)
return 10},
hDq(d){var x=d.kI
if(x>=0)return x
return 4.99},
hDp(d){var x=d.lp,w=y.N
w=x.j3(x,new B.c7o(),w,w)
return w},
h9D(d){var x=d.kJ,w=y.N
w=x.j3(x,new B.c7p(),w,w)
return w},
aZ7(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZ7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aZ7)
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
return A.i($async$aZ7,w)},
a6y(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6y)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6y,w)},
Ux(d){var x=0,w=A.j(y.H),v,u
var $async$Ux=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Ux)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Ux)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Ux,w)},
fUx(d,e){var x,w,v
if(B.hDq(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hDp(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cb(new A.S(Date.now(),0,!1))},
aZ5(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h9D(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cb(new A.S(Date.now(),0,!1))},
h9E(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h9D(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cb(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dC(f,0,0,0,0,0).a).a7().ac())
d.kJ=w},
aoF(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aoF)
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
return A.i($async$aoF,w)},
aoG(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoF(d),$async$aoG)
case 3:u=f
x=5
return A.b(A.az(),$async$aoG)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoG,w)},
aoE(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fUy(d)
if(u<=0){v=!1
x=1
break}if(B.fUx(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoF(e),$async$aoE)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoE,w)},
aZ6(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZ6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ig(e,d),$async$aZ6)
case 3:if(g){v=-1
x=1
break}u=B.fUy(d)
if(u<=0){v=-1
x=1
break}if(B.fUx(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoF(e),$async$aZ6)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ6,w)},
c7r(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7r=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ig(e,d),$async$c7r)
case 3:if(h){v=!1
x=1
break}v=B.aoE(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7r,w)},
c7q(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7q=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c7r(d,u,i.gTp()),$async$c7q)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7q,w)},
a6x(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6x=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTp()){v=!0
x=1
break}if(B.aZ5(d,u)){v=!0
x=1
break}x=5
return A.b(A.le(u,C.RQ),$async$a6x)
case 5:x=k?3:4
break
case 3:B.h9E(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6x)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kT(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.RQ,"Doc Share for Organizations"),$async$a6x)
case 7:if(!k){v=!1
x=1
break}B.h9E(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6x)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
c7o:function c7o(){},
c7p:function c7p(){},
fIl(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fIl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fIl)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fcv.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hP([r],e.c))
s.toString
$.fcv.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fIl,w)},
i9c(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fcv.bq($.fcv,new B.fIn(d))},
fIn:function fIn(d){this.a=d},
fdR(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fdR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],f))
s.toString
u=A.n7(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jk,null,y.H),$async$fdR)
case 3:C.A0.fe(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.ms()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdR,w)},
afq(d,e,f){var x=0,w=A.j(y.H),v
var $async$afq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fcZ.n(0,d,new B.abx(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afq)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afq)
case 2:return A.h(null,w)}})
return A.i($async$afq,w)},
afk(d){return B.hT3(d)},
hT3(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fcZ.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afk)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aI(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fhx(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abx(r)
$.fcZ.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afk,w)},
Qm(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.G3.n(0,d,u)
x=3
return A.b(B.QS(d,u),$async$Qm)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qm,w)},
aNq(d){return B.hT1(d)},
hT1(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.G3.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QR(d),$async$aNq)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.G3.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aNq)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aJ(r)
x=!J.cn(q)?9:10
break
case 9:B.Qm(d,q)
x=11
return A.b(J.hv(s,d),$async$aNq)
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
return A.i($async$aNq,w)},
hPi(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ce(A.zY(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
return A.f8(null,y.K)},
a1d(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fmH(r,t),!1,s)
A.fL(r,"error",new B.fmI(t),!1,s)
r.readAsArrayBuffer(d)
v=u.il(0,C.M_,new B.fmJ())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1d,w)},
aNK(d,e,f){return B.hVi(d,e,f)},
hVi(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNK=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1d(i),$async$aNK)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QS(o,p),$async$aNK)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afq(k,j,s),$async$aNK)
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
return A.i($async$aNK,w)},
aNJ(d,e,f){return B.hVh(d,e,f)},
hVh(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNJ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNK(d,e,f),$async$aNJ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1d(f),$async$aNJ)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.G3.n(0,s,r)
$.QD.n(0,s,r)
x=11
return A.b(B.Qm(s,r),$async$aNJ)
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
return A.i($async$aNJ,w)},
Bw(d,e,f,g,h,i){return B.hDz(d,e,f,g,h,i)},
hDz(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bw=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.aA(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jl(p,q,o,n,new A.S(Date.now(),0,!1).a7().ac(),a0,f,B.aZd(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qm(s,d),$async$Bw)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Bw)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cT.gcA().aJ(d)),$async$Bw)
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
return A.b(B.Ay(e),$async$Bw)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.Gf(e,j),$async$Bw)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bw,w)},
Uz(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Uz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ay(d),$async$Uz)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.aA(99999)
n=p.b
l=o.type
l.toString
k=B.h9G(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a7().ac()
i=new B.jl(m,n,k,l,j,"From folder",null,B.aZd(),null)
$.afT.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1d(o),$async$Uz)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.G3.n(0,h,g)
$.QD.n(0,h,g)
B.Qm(h,g)
x=9
break
case 10:x=11
return A.b(B.aNJ(d,m,o),$async$Uz)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gf(d,t),$async$Uz)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uz,w)},
fUC(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fUC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h9G(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ih(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.Bw(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUC,w)},
Ih(d,e,f,g,h,i){return B.hDy(d,e,f,g,h,i)},
hDy(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ih=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.aA(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.K9(A.dG(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ih)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h3(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rq(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kE(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QS(k,l),$async$Ih)
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
return A.b(j.a6(0),$async$Ih)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.QS(k,new Uint8Array(A.ce(n))),$async$Ih)
case 15:J.ci(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afq(r,q,g),$async$Ih)
case 16:f=new B.jl(i,a1,a0,g,new A.S(Date.now(),0,!1).a7().ac(),a2,null,B.aZd(),null)
x=17
return A.b(B.Ay(d),$async$Ih)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.Gf(d,e),$async$Ih)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ih,w)},
UB(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UB=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afT.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1d(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afk(s),$async$UB)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QR(u[o]),$async$UB)
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
v=A.zY(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QD.h(0,s)
if(i==null)i=$.G3.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ro(d,e),$async$UB)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QD.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zY(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UB,w)},
h9G(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ro(d,e){return B.hDA(d,e)},
hDA(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ro=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QD.h(0,f)
if(e==null)e=$.G3.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.afT.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1d(s),$async$ro)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.G3.n(0,f,r)
$.QD.n(0,f,r)
B.Qm(f,r)
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
return A.b(B.afk(f),$async$ro)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axt(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QR(g[l]),$async$ro)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.anB()
if(!C.aH.gam(r)){$.G3.n(0,f,r)
$.QD.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNq(f),$async$ro)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QD.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UB(a0,a1,0,g),$async$ro)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ce(i))
$.G3.n(0,f,h)
$.QD.n(0,f,h)
B.Qm(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ro,w)},
hDD(d){var x,w,v=$.afT.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hDE(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hP([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hDB(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoM(d,e,f,g,h){return B.hDC(d,e,f,g,h)},
hDC(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoM=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afT.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1d(s),$async$aoM)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ro(g,e),$async$aoM)
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
return A.b(n.ie(d).wX(h,r,new A.DE(!0,e.c)),$async$aoM)
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
return A.i($async$aoM,w)},
h9I(d,e,f,g,h){var x,w,v,u,t=$.h9H
$.h9H=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7C.n(0,t,new B.buD(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axt(u)))
return t},
fUD(d){var x=0,w=A.j(y.H)
var $async$fUD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fUD,w)},
Ii(d,e){var $async$Ii=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afT.h(0,h)
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
return A.q5(B.UB(d,e,p,o<q?o:q),$async$Ii,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q5(A.FB(n),$async$Ii,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q5(B.afk("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ii,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q5(B.QR(h[l]),$async$Ii,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q5(A.FB(k),$async$Ii,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q5(B.ro(d,e),$async$Ii,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q5(A.FB(A.zY(j,p,o<i?o:i)),$async$Ii,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q5(null,0,w)
case 2:return A.q5(t.at(-1),1,w)}})
var x=0,w=A.hij($async$Ii,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hk8(w)},
aZf(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7C.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4d(),$async$aZf)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZf,w)},
UA(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7C.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4d(),$async$UA)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afq(r.c,u,r.z),$async$UA)
case 4:t=new B.jl(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a7().ac(),r.f,r.r,B.aZd(),null)
u=r.a
x=5
return A.b(B.Ay(u),$async$UA)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.Gf(u,s),$async$UA)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UA,w)},
a6E(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7C.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agy(u[s]),$async$a6E)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6E,w)},
c7E(d,e,f){var x=0,w=A.j(y.H)
var $async$c7E=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzE(d,e,f),$async$c7E)
case 2:return A.h(null,w)}})
return A.i($async$c7E,w)},
c7F(d,e,f){var x=0,w=A.j(y.H)
var $async$c7F=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzF(d,e,f),$async$c7F)
case 2:return A.h(null,w)}})
return A.i($async$c7F,w)},
En(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$En=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ay(d),$async$En)
case 2:p=g
J.nr(p,new B.c7D(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.G3.W(0,v)
$.afT.W(0,e)
x=3
return A.b(B.afk(v),$async$En)
case 3:u=g
$.fcZ.W(0,v)
x=4
return A.b(A.az(),$async$En)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$En)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$En)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agy(s[q]),$async$En)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agy(v),$async$En)
case 13:x=14
return A.b(B.Gf(d,p),$async$En)
case 14:return A.h(null,w)}})
return A.i($async$En,w)},
aZe(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ro(d,e),$async$aZe)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fdR(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZe,w)},
Ay(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ay=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Ay)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aI(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fmK(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ay,w)},
Gf(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Gf)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fqK(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gf)
case 3:return A.h(null,w)}})
return A.i($async$Gf,w)},
bzE(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ay(d),$async$bzE)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fl9(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDi(f))
x=4
return A.b(B.Gf(d,u),$async$bzE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzE,w)},
bzF(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ay(d),$async$bzF)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fla(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cHD(f))
x=4
return A.b(B.Gf(d,u),$async$bzF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzF,w)},
abx:function abx(d){this.a=d},
fhx:function fhx(){},
fmH:function fmH(d,e){this.a=d
this.b=e},
fmI:function fmI(d){this.a=d},
fmJ:function fmJ(){},
c7D:function c7D(d){this.a=d},
buD:function buD(d,e,f,g,h,i,j,k,l){var _=this
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
fmK:function fmK(){},
fqK:function fqK(){},
fl9:function fl9(d){this.a=d},
fla:function fla(d){this.a=d},
a6F(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c7I())?3:4
break
case 3:x=5
return A.b(B.aZg(d,e),$async$a6F)
case 5:u=g
if(u!=null){t=u.c
B.Nc(d,u.b,e,t)}v=u
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
return A.b(B.aZb(s),$async$a6F)
case 10:case 9:if(g){v=new A.PL(1,D.Rt,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UC(d,e),$async$a6F)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UH(!0,!0,d,e),$async$a6F)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nc(d,D.za,e,t)
v=new A.PL(p,D.za,t)
x=1
break}v=B.c7H(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6F,w)},
UC(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6H(null,d,e),$async$UC)
case 3:p=g
try{u=C.S.aI(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZa(p,d.length,e),$async$UC)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7F(e,C.d.gI(d).a,r.b),$async$UC)
case 7:case 6:q=r.a
x=8
return A.b(B.Nc(d,D.Rt,e,q),$async$UC)
case 8:v=new A.PL(d.length,D.Rt,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UC,w)},
UD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mx(D.mE)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6G(d,e),$async$UD)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7A(s,d,e,t),$async$UD)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZb(t),$async$UD)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ro(e,d),$async$UD)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UC(A.a([d],y.r),e),$async$UD)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UD,w)},
UF(){var x=0,w=A.j(y.H)
var $async$UF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fUw(),$async$UF)
case 2:x=3
return A.b(B.aPQ(),$async$UF)
case 3:return A.h(null,w)}})
return A.i($async$UF,w)},
a6G(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZd()
x=3
return A.b(B.c7E(e,d.a,u),$async$a6G)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
Nc(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Rt&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b3(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6G(p,f),$async$Nc)
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
return A.b(B.c7z(o,p,u,f),$async$Nc)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7A(o,p,f,t),$async$Nc)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7y(o,u,p,f),$async$Nc)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nc,w)},
aZg(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7G(e,d),$async$aZg)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UH(!1,!0,d,e),$async$aZg)
case 4:u=g
if(u!=null){t=u.b
v=new A.PL(u.a,D.za,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZg,w)},
c7G(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UB(d,s,0,1),$async$c7G)
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
return A.i($async$c7G,w)},
c7H(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6H(null,d,e),$async$c7H)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h9F(u)
if(t.length>800){v=null
x=1
break}v=new A.PL(d.length,D.dyq,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7H,w)},
aoN(d,e,f){return B.hDH(d,e,f)},
hDH(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mG(g,1)
x=B.fUB(g)?3:4
break
case 3:x=5
return A.b(B.c7B(g),$async$aoN)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mG(g,13))
try{k=B.Eo(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mG(g,13))
u=9
x=12
return A.b(B.aZ9(q),$async$aoN)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UE(p,a0)
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
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fUA(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UE(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.Ij(C.a.i(J.mG(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.Ij(C.a.i(J.mG(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.ca(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ij(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UE(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoN,w)},
Ij(d,e,f){return B.hDF(d,e,f)},
hDF(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ij=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b3(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b3(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.ca(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.t(s)+"/manifest.json",0,null)
q=A.cE(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZ1(r),$async$Ij)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZ1(A.cE(s,0,null)),$async$Ij)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7d(o,r,a1,n,a2),$async$Ij)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c7c(q),$async$Ij)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UE(l,a2),$async$Ij)
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
return A.i($async$Ij,w)},
a6H(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.ro(f,r),$async$a6H)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cT.gcA().aJ(q)],t,s))
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
return A.i($async$a6H,w)},
UE(d,e){return B.hDG(d,e)},
hDG(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UE=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aI(0,a2,null)
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
break}i=C.cI.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bw(i,a3,d,k,l,o),$async$UE)
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
return A.i($async$UE,w)},
Nb:function Nb(d,e){this.a=d
this.b=e},
c7I:function c7I(){},
a0N(d){var x=A.P(d).ax.a===C.I,w=x?D.aec:D.ac3,v=x?D.afG:C.c,u=x?C.aQ:C.M,t=x?C.bJ:C.ak,s=x?D.adf:C.aL
return new A.aFD([w,s,v,u,t,x?C.fd:C.bV])},
hp1(d,e){var x=e?C.w.j(0.72):C.aW
return A.cb(null,x,!0,null,new B.fMt(e),d,null,!0,!0,y.N)},
c7n(d,e,f,g,h,i,j,k,l){return new B.Uw(e,l,d,f,k,j,g,h,i,null)},
YN(d,e,f,g,h,i,j){return new B.bcM(g,h,j,e,i,d,f,null)},
fMt:function fMt(d){this.a=d},
YK:function YK(d,e){this.c=d
this.a=e},
ayF:function ayF(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1X:function d1X(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1W:function d1W(d){this.a=d},
buh:function buh(){},
Uw:function Uw(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCC:function aCC(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPT:function dPT(d){this.a=d},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPh:function dPh(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d,e,f){this.a=d
this.b=e
this.c=f},
dOP:function dOP(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dOW:function dOW(d,e,f){this.a=d
this.b=e
this.c=f},
dOV:function dOV(d){this.a=d},
dPH:function dPH(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPd:function dPd(d,e,f){this.a=d
this.b=e
this.c=f},
dPa:function dPa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOU:function dOU(d){this.a=d},
dPl:function dPl(d){this.a=d},
dPk:function dPk(){},
dP_:function dP_(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
dPt:function dPt(d){this.a=d},
dPs:function dPs(d){this.a=d},
dPu:function dPu(){},
dPv:function dPv(){},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPy:function dPy(){},
dPz:function dPz(d){this.a=d},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
dPq:function dPq(d){this.a=d},
dOX:function dOX(){},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dOT:function dOT(d,e){this.a=d
this.b=e},
dOS:function dOS(d,e,f){this.a=d
this.b=e
this.c=f},
dPe:function dPe(d){this.a=d},
dPf:function dPf(d,e,f){this.a=d
this.b=e
this.c=f},
dP8:function dP8(d,e){this.a=d
this.b=e},
dP4:function dP4(d){this.a=d},
dP1:function dP1(d,e,f){this.a=d
this.b=e
this.c=f},
dP5:function dP5(d){this.a=d},
dP6:function dP6(d){this.a=d},
dP7:function dP7(){},
dP9:function dP9(d,e){this.a=d
this.b=e},
dP2:function dP2(d){this.a=d},
dP0:function dP0(d,e,f){this.a=d
this.b=e
this.c=f},
dP3:function dP3(){},
dPj:function dPj(d){this.a=d},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPC:function dPC(d){this.a=d},
dPQ:function dPQ(d){this.a=d},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d){this.a=d},
dPR:function dPR(){},
dPS:function dPS(d,e){this.a=d
this.b=e},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPL:function dPL(d,e,f){this.a=d
this.b=e
this.c=f},
dPJ:function dPJ(d,e,f){this.a=d
this.b=e
this.c=f},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPN:function dPN(d,e){this.a=d
this.b=e},
ayC:function ayC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcL:function bcL(d,e,f){this.c=d
this.d=e
this.a=f},
d1T:function d1T(){},
d1U:function d1U(){},
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
d2g:function d2g(){},
d2f:function d2f(d){this.a=d},
YM:function YM(d,e,f){this.c=d
this.d=e
this.a=f},
ayH:function ayH(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2c:function d2c(d){this.a=d},
d2d:function d2d(d,e,f){this.a=d
this.b=e
this.c=f},
d2e:function d2e(d,e){this.a=d
this.b=e},
d2a:function d2a(d,e){this.a=d
this.b=e},
d28:function d28(d){this.a=d},
d26:function d26(d){this.a=d},
d23:function d23(d){this.a=d},
d29:function d29(d){this.a=d},
d25:function d25(d){this.a=d},
d2b:function d2b(d){this.a=d},
d27:function d27(d){this.a=d},
d24:function d24(d){this.a=d},
YJ:function YJ(d,e,f){this.c=d
this.d=e
this.a=f},
ayE:function ayE(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d1Q:function d1Q(d){this.a=d},
d1P:function d1P(d,e){this.a=d
this.b=e},
d1R:function d1R(d){this.a=d},
d1O:function d1O(d,e){this.a=d
this.b=e},
d1S:function d1S(d){this.a=d},
d1N:function d1N(d,e){this.a=d
this.b=e},
d1J:function d1J(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1L:function d1L(d,e){this.a=d
this.b=e},
d1M:function d1M(d){this.a=d},
Pn:function Pn(d,e,f){this.c=d
this.d=e
this.a=f},
ayK:function ayK(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2t:function d2t(d){this.a=d},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d){this.a=d},
d2x:function d2x(d,e){this.a=d
this.b=e},
d2y:function d2y(d){this.a=d},
d2A:function d2A(d){this.a=d},
d2z:function d2z(d){this.a=d},
YO:function YO(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayI:function ayI(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d2p:function d2p(d,e){this.a=d
this.b=e},
d2q:function d2q(d,e){this.a=d
this.b=e},
d2h:function d2h(d,e,f){this.a=d
this.b=e
this.c=f},
d2i:function d2i(d){this.a=d},
d2j:function d2j(){},
d2o:function d2o(){},
d2k:function d2k(d,e){this.a=d
this.b=e},
d2l:function d2l(d,e){this.a=d
this.b=e},
d2m:function d2m(d,e){this.a=d
this.b=e},
d2n:function d2n(d,e){this.a=d
this.b=e},
abP:function abP(d,e){this.c=d
this.a=e},
d1I:function d1I(d){this.a=d},
YI:function YI(d){this.a=d},
ayD:function ayD(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YP:function YP(d,e){this.c=d
this.a=e},
ayJ:function ayJ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d2s:function d2s(d){this.a=d},
d2r:function d2r(d){this.a=d},
bcM:function bcM(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hDI(){var x,w=$.pt(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"VT"+C.d.h_(v)},
Nd(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nd=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Nd)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bI),$async$Nd)
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
return A.i($async$Nd,w)},
a6I(d){return B.hDJ(d)},
hDJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6I)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hG("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6I)
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
return A.i($async$a6I,w)},
UG(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nd(),$async$UG)
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
return A.b(B.a6I(s),$async$UG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UG,w)},
UH(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UH)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.U(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c7K(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hDI()
t=A.U(u).k("M<1,a5<n,aD>>")
r=A.C(new A.M(u,new B.c7L(s),t),t.k("ak.E"))
x=6
return A.b(B.Nd(),$async$UH)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=7
return A.b(B.a6I(q),$async$UH)
case 7:x=8
return A.b(B.a6J(r,u,g,s),$async$UH)
case 8:v=new A.bol(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UH,w)},
aoO(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nd(),$async$aoO)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoO,w)},
c7M(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nd(),$async$c7M)
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
return A.i($async$c7M,w)},
a6J(d,e,f,g){return B.hDK(d,e,f,g)},
hDK(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6J=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoM("media",r,new B.c7J(s,e,g),f,q),$async$a6J)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UG(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6J)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UG(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$a6J)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.UG(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6J)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6J,w)},
Eo(d,e,f){return B.hDL(d,e,f)},
hDL(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Eo=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Eo)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoO(b3),$async$Eo)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ku,null,g),$async$Eo)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoO(b3),$async$Eo)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nd(),$async$Eo)
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
a8=$.eY().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oV(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aa4(a8.a,b0,"media",a8.d,a9).CB(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZ2(k,n,o,s,b7),$async$Eo)
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
a8=A.oV(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aa4(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Eo)
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
return A.b(B.a6I(e),$async$Eo)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Eo,w)},
c7K:function c7K(){},
c7L:function c7L(d){this.a=d},
c7J:function c7J(d,e,f){this.a=d
this.b=e
this.c=f},
aPQ(){var x=0,w=A.j(y.H),v,u
var $async$aPQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hOH=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aPQ)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aPQ)
case 3:u=$.fZH
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aPQ)
case 4:$.fZH=$.hX9=$.hXa=null
return A.h(null,w)}})
return A.i($async$aPQ,w)},
fql(d){var x=0,w=A.j(y.H),v,u
var $async$fql=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5Z){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fqm(new A.bX(u,y.aY))
x=3
return A.b(u.il(0,C.hM,new B.fqn()),$async$fql)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fql,w)},
hX7(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hDs(x):x},
fZL(d){var x=0,w=A.j(y.T),v,u,t
var $async$fZL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,13))
if(C.a.a0(u,"WR")){v=B.aoQ(u)
x=1
break}v=B.fUA(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZL,w)},
fZK(d){var x=0,w=A.j(y.T),v,u,t
var $async$fZK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,14))
if(C.a.a0(u,"WR")){v=B.aoR(u)
x=1
break}v=B.fUA(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZK,w)},
fI5(d){var x=0,w=A.j(y.T),v
var $async$fI5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoR(d),$async$fI5)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fI5,w)},
bAv(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fZK(d),$async$bAv)
case 3:q=f
if(q==null){x=1
break}t=C.S.aI(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAv,w)},
feF(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$feF=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UA(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bw(d.anB(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feF,w)},
Gh(d,e,f){return B.hZy(d,e,f)},
hZy(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gh=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fZL(a1),$async$Gh)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aI(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b3(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hqU().aDx(D.dmu,null),$async$Gh)
case 4:l=d.fZH=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axt(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fqT(f,k,new B.fqU(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7a(0,new B.WQ(r,"offer")),$async$Gh)
case 5:d=l
x=7
return A.b(l.akr(0),$async$Gh)
case 7:x=6
return A.b(d.a72(0,a4),$async$Gh)
case 6:x=8
return A.b(B.fql(l),$async$Gh)
case 8:x=9
return A.b(l.aok(),$async$Gh)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hX7(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoS(m,h),$async$Gh)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h9F(h)
case 11:v=new A.bnD(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gh,w)},
fqm:function fqm(d){this.a=d},
fqn:function fqn(){},
fqU:function fqU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqT:function fqT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fqS:function fqS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i0q(d){switch(d){case"new":return D.efo
case"checking":return D.efp
case"connected":return D.efr
case"completed":return D.efq
case"failed":return D.eft
case"disconnected":return D.efu
case"closed":return D.aLL
case"count":return D.efs}return D.aLL},
i0r(d){switch(d){case"new":return D.aLM
case"gathering":return D.efv
case"complete":return D.a5Z}return D.aLM},
iaG(d){switch(d){case"stable":return D.efw
case"have-local-offer":return D.efx
case"have-local-pranswer":return D.efz
case"have-remote-offer":return D.efy
case"have-remote-pranswer":return D.efA
case"closed":return D.aLS}return D.aLS},
i8V(d){switch(d){case"new":return D.aLP
case"connecting":return D.aLQ
case"connected":return D.aLR
case"closed":return D.a6_
case"disconnected":return D.aLO
case"failed":return D.aLN}return D.a6_},
a90:function a90(d,e){this.a=d
this.b=e},
Od:function Od(d,e){this.a=d
this.b=e},
WP:function WP(d,e){this.a=d
this.b=e},
Oc:function Oc(d,e){this.a=d
this.b=e},
ER:function ER(d,e){this.a=d
this.b=e},
ciI:function ciI(){},
fWj(d){var x=new B.EQ()
x.a=d
x.b=!0
return x},
EQ:function EQ(){this.b=this.a=$},
a9_:function a9_(){},
at6:function at6(){},
WQ:function WQ(d,e){this.a=d
this.b=e},
fUw(){var x=0,w=A.j(y.H)
var $async$fUw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fUw,w)},
fUz(d,e,f){var x=0,w=A.j(y.T),v
var $async$fUz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mx(D.mE))){v=null
x=1
break}v=B.fIl(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUz,w)},
h9F(d){var x,w=F.abv.a3Y(C.dK.aJ(d),null)
if(w.length===0){x=C.dK.aJ(d)
return C.cT.gcA().aJ(x)}return C.cT.gcA().aJ(w)},
hDr(d){var x,w,v=C.cI.aJ(d)
try{x=C.cf.cz(0,F.abu.bc6(v,!1))
return x}catch(w){x=C.cf.cz(0,v)
return x}},
fUA(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hDr(C.a.b3(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b3(t,w.length)
try{v=C.cf.cz(0,C.cI.aJ(x))
return v}catch(u){return x}}return null},
hDs(d){var x,w,v,u,t,s=A.a([],y.s)
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
hDt(){var x,w=$.pt(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.h_(v)},
aZ8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZ8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bI),$async$aZ8)
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
return A.i($async$aZ8,w)},
c7s(d,e){return B.hDu(d,e)},
hDu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7s=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hG("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c7s)
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
return A.i($async$c7s,w)},
aZb(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ8(d),$async$aZb)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZb,w)},
aZa(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hDt()
r=C.a.i(f)
t=C.dK.aJ(s)
x=3
return A.b(B.c7s(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cT.gcA().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$aZa)
case 3:if(!h){v=null
x=1
break}v=new A.a_Q("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZa,w)},
aZ9(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZ9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZ8(o),$async$aZ9)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cz(0,C.cI.aJ(u))
if(J.iV(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZ9,w)},
c7t(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBs("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c7t)
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
return A.i($async$c7t,w)},
aZc(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.If(),$async$aZc)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZc,w)},
aoJ(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoJ)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZc(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoJ,w)},
aoH(d,e){var x=0,w=A.j(y.H)
var $async$aoH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoH)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoH)
case 2:return A.h(null,w)}})
return A.i($async$aoH,w)},
a6A(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6A)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.If(),$async$a6A)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=5
return A.b(A.a6z(s),$async$a6A)
case 5:x=6
return A.b(B.aoH(f,u),$async$a6A)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
a6B(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6B=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6B)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.If(),$async$a6B)
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
return A.b(B.aoH(g,q),$async$a6B)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6z(u),$async$a6B)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6B,w)},
a6C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6C)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.If(),$async$a6C)
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
s=B.aZ5(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6C)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a7().ac()],p,p),null)),$async$a6C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
c7u(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c7u)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aI(0,r,null)
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
return A.i($async$c7u,w)},
Ig(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ig=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7u(d),$async$Ig)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZc(t),$async$Ig)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoI(d),$async$Ig)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZ5(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoI(d),$async$Ig)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ig,w)},
aoI(d){var x=0,w=A.j(y.H)
var $async$aoI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aoI)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoI)
case 2:return A.h(null,w)}})
return A.i($async$aoI,w)},
aZd(){var x,w=$.pt(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.h_(v)},
a6D(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fUB(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7x(d){return B.hDw(d)},
hDw(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6D(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bI),$async$c7x)
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
return A.i($async$c7x,w)},
aoL(d,e){return B.hDx(d,e)},
hDx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6D(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hG("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aoL)
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
return A.i($async$aoL,w)},
c7z(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6D(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoL(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7z,w)},
c7y(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6D(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoL(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c7y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7y,w)},
c7A(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6D(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoL(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7A,w)},
c7B(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fUB(d)){v=null
x=1
break}x=3
return A.b(B.c7x(d),$async$c7B)
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
return A.i($async$c7B,w)},
a6K(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6K)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bI),$async$a6K)
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
return A.i($async$a6K,w)},
aoP(d){return B.hDM(d)},
hDM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoP)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hG("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoP)
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
return A.i($async$aoP,w)},
aoQ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoQ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6K(),$async$aoQ)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cz(0,C.cI.aJ(q))
if(J.iV(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a7().ac())
J.aG(s,j,o)
x=9
return A.b(B.aoP(s),$async$aoQ)
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
return A.i($async$aoQ,w)},
aoS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoS)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6K(),$async$aoS)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dK.aJ(C.a.i(e))
q.n(0,"answer",C.cT.gcA().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a7().ac())
t.n(u,p,q)
x=5
return A.b(B.aoP(u),$async$aoS)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoS,w)},
aoR(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoR)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6K(),$async$aoR)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cz(0,C.cI.aJ(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoR,w)},
anR(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.pW)){v=null
x=1
break}x=3
return A.b(p.m_(e),$async$anR)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.fZ),$async$anR)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vm(o))
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
return A.i($async$anR,w)},
i6U(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fGB(d){return B.i6W(d)},
i6W(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fGB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ie("media").KC(d,3600),$async$fGB)
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
return A.i($async$fGB,w)},
CQ(d,e,f,g,h,i){var x=null
return B.i6T(d,e,f,g,h,i)},
i6T(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CQ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h9I(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fUD(r),$async$CQ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fGB(o),$async$CQ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6E(r),$async$CQ)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aOW)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lz(A.a([],g))
x=15
return A.b(d.eZ(0,A.atW("GET",A.cE(n,0,null))).d6(0,C.Fd),$async$CQ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6E(r),$async$CQ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.K9(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CQ)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZf(r,k),$async$CQ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a6(0),$async$CQ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.UA(r)
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
return A.b(B.a6E(r),$async$CQ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CQ,w)},
aPz(d){return B.i6V(d)},
i6V(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ie("media").W(0,d),$async$aPz)
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
return A.i($async$aPz,w)}},D,T,M,U,V,W,X,N,Y
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
B.ciJ.prototype={
aDx(d,e){return this.cJ9(d,e)},
cJ9(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cz(t)))
t=J.k(u)
v=B.hIn(C.cT.gcA().aJ(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDx,w)}}
B.b3n.prototype={
bxB(d){var x=this,w=x.w
w.onclose=A.hk(new B.ciE(x))
w.onopen=A.hk(new B.ciF(x))
w.onmessage=A.hk(new B.ciG(x))
w.onbufferedamountlow=A.hk(new B.ciH(x))},
gdc(d){return this.x},
agJ(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fWj(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$agJ)
case 8:v=t.fWj(s.an4(f,0,null))
x=1
break
case 7:case 4:v=B.fWj(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agJ,w)}}
B.b3o.prototype={
bxC(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hk(new B.ciK(x)))
w.addEventListener("icecandidate",A.hk(new B.ciL(x)))
w.addEventListener("iceconnectionstatechange",A.hk(new B.ciM(x)))
w.onicegatheringstatechange=A.hk(new B.ciN(x))
w.addEventListener("signalingstatechange",A.hk(new B.ciO(x)))
if(!$.h2p())w.addEventListener("connectionstatechange",A.hk(new B.ciP(x)))
w.addEventListener("negotiationneeded",A.hk(new B.ciQ(x)))
w.addEventListener("track",A.hk(new B.ciR(x)))},
akr(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.ki(A.cz(A.T(y.N,y.z)))),y.aQ),$async$akr)
case 3:t=f
v=new B.WQ(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akr,w)},
a72(d,e){return this.bn1(0,e)},
bn1(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a72=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a72)
case 2:return A.h(null,w)}})
return A.i($async$a72,w)},
a7a(d,e){return this.bnh(0,e)},
bnh(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7a)
case 2:return A.h(null,w)}})
return A.i($async$a7a,w)},
aok(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aok=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WQ(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aok,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.abQ.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YL.prototype={
T(){return new B.ayG()},
gde(){return this.c}}
B.ayG.prototype={
a_(){this.a1()
this.ads()},
ads(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ads=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ6(u.e,u.c),$async$ads)
case 2:t=e
if(v.c!=null)v.m(new B.d20(v,t))
return A.h(null,w)}})
return A.i($async$ads,w)},
PX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoE(t.e,t.c,!1),$async$PX)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(D.eX0)
x=1
break}x=4
return A.b(B.a6y(u.a.c,"individual"),$async$PX)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5y(A.e8(new B.d1Y(u),!1,null,y.H)),$async$PX)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PX,w)},
J0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fos(o),$async$J0)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6C(o.e,r,s,q),$async$J0)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.U(D.eU5)
x=1
break}x=5
return A.b(B.a6y(u.a.c,"member"),$async$J0)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5y(A.e8(new B.d2_(u),!1,null,y.H)),$async$J0)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J0,w)},
xS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6x(t.e,o,t.f,t.r,t.w,s),$async$xS)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6y(u.a.c,"org_owner"),$async$xS)
case 4:x=5
return A.b(B.aoJ(u.a.c),$async$xS)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.foX(o),$async$xS)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6A(s,t,o,q.c),$async$xS)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.U(D.eU2)
x=1
break}x=10
return A.b(B.aoJ(u.a.c),$async$xS)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5y(A.e8(new B.d1Z(u),!1,null,y.H)),$async$xS)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xS,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jf:C.pI,q=B.fUy(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fO,24)],y.V)
v=y.p
w=A.p(t,A.w(A.a([A.p(t,D.feL,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h8,t,t,t),C.aB,D.fxL,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bXR,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lB(new B.d22(),t),C.N,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.aci(C.eT,C.ayt,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcd1(),t),C.ac],v))
p.push(new B.aci(C.oQ,C.a1P,"Team Member","Sign in with your organization access code + password",u.gcdT(),t))
p.push(C.ac)
p.push(new B.aci(C.akY,C.a3o,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcdo(),t))
return A.c7(t,r,A.bm(!0,A.c9(A.w(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aif,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.aci.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eF(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.d(t.e,s,s,s,s,s,s,C.pe,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bx,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBd.prototype={}
B.aEp.prototype={}
B.jl.prototype={
mx(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b3(x,w+1).toLowerCase())},
gaoY(){var x=this.d
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
bbz(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jl(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cHD(d){return this.bbz(null,d)},
aDi(d){return this.bbz(d,null)}}
B.Uu.prototype={
T(){return new B.aCA(new A.cs(null,y.A))},
gde(){return this.c}}
B.aCA.prototype={
a_(){this.a1()
this.adt()},
adt(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bv(u.a.c),$async$adt)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOM(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adt,w)},
adu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fE(s)),$async$adu)
case 3:t=u.c
if(t!=null)t.J(y.q).f.U(D.eXV)
case 1:return A.h(v,w)}})
return A.i($async$adu,w)},
Zi(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zi=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anR(s.d,4),$async$Zi)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rU(r,"ngmy_my_code_"+m+".png"),$async$Zi)
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
return A.i($async$Zi,w)},
ahb(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9E("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jf:C.pI,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2g,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ahQ,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.c9(A.w(A.a([x,C.mN,w,C.kF,new A.ew(A.p(p,A.pN(p,p,!1,B.hDn(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kF,A.B(A.a([A.E(A.eC(N.BR,C.TW,q.gc62(),p),1),C.au,A.E(A.dn(C.yB,C.a8c,q.gc63(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eC(M.a0H,D.ftz,q.gcsC(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.Ms,p,p,C.ag)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.Uy.prototype={
T(){return new B.aCD(new A.as(C.as,$.aw()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aCD.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ie(x==null?"":x)
if(w!=null)this.d.saW(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zj(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ie(u.d.a.a)
if(t==null){u.m(new B.dPV(u))
x=1
break}u.m(new B.dPW(u))
s=u.a
r=s.c
x=3
return A.b(B.a6w(s.d,new B.dPX(u),t,r),$async$Zj)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPY(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zj,w)},
a1u(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1u=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dPZ(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.ro(r.a.c,q),$async$a1u)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQ_(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahi(p,m,l,j,k),$async$a1u)
case 8:o=e
if(r.c!=null)r.m(new B.dQ0(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dQ1(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQ2(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1u,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aec:D.ac3,h=j?D.afG:C.c,g=j?C.aQ:C.M,f=j?C.bJ:C.ak,e=j?D.adf:C.aL
i=[i,e,h,g,f,j?C.fd:C.bV]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bLz,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fC,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2g,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uf(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bi6()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.Ml,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQ3(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m5,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.Lc(l.a.d,4)
m=A.C(new A.M(m,new B.dQ4(x,new A.aFD(i)),m.$ti.k("M<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lP,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d7,p,C.N,A.p(k,A.w(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eSC)
else q.push(A.X(C.lo,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iE,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.c9(A.w(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.buw,k,k,C.ag),1)
u=l.f?k:l.gcsD()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eC(M.a0H,D.fuz,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc64()
t=A.bn(C.aE,k,k,0,C.c,k,C.ne,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c7(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mD(new B.dQ5(),A.w(A.a([e,new A.D(D.bu1,A.w(A.a([s,C.N,i,C.ac,A.bG(l.f?C.rO:D.fsY,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Y7,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bi6.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.he(C.bw,v.length),C.aN)}}
B.Uv.prototype={
T(){return new B.aCB()}}
B.aCB.prototype={
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
adv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dON(r))
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
return A.b(B.a6B(p,m,n,o,C.a.i(l).length===0?null:l),$async$adv)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.U(D.eXw)
s=[1]
x=4
break}p.J(y.q).f.U(D.eW9)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOO(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adv,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jf:C.pI,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.flA,s,s,s,1,s,!0),p=A.p(s,D.bmq,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.GH,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bSu,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bSp,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bSF,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc65()
u=A.bn(C.aE,s,s,s,s,C.fP,s,s,s,s,s,s)
return A.c7(q,r,A.c9(A.w(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mN,A.bG(t.r?C.rO:C.aRF,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abx.prototype={}
B.buD.prototype={
a4d(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anB()))
x=3
return A.b(B.QS(t,s),$async$a4d)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4d,w)},
gde(){return this.a}}
B.Nb.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YK.prototype={
T(){return new B.ayF(new A.as(C.as,$.aw()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.ayF.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1X(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6b(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0N(d),u=x.a.c,t=u?C.ic:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jf:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fO,32)],n),l=A.p(w,T.anD,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cz,16)],n),C.aoq,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uf(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buh()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fp,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aYN),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1V(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m5,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nB,new B.d1W(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eK(w,C.K,new A.cT(Q.Ke,A.c0(new A.D(C.xM,A.w(A.a([l,C.aR,k,C.N,j,C.dY,i,C.dY,A.B(A.a([f,C.au,A.E(A.c0(A.aF(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e9j,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6a(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Od,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.Mu,C.d0,w,w,w)}}
B.buh.prototype={
oz(d,e){return e.akm(e.a.toUpperCase())}}
B.Uw.prototype={
T(){return new B.aCC(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aCC.prototype={
a_(){var x=this
x.a1()
x.tI()
x.w=A.dt(C.jl,new B.dPT(x))},
q(){var x=this.w
if(x!=null)x.a6(0)
B.UF()
this.a2()},
a0m(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0m=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Na(u.a.c),$async$a0m)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ay(u.a.c),$async$a0m)
case 4:u.m(new s.dPg(u,e))
u.i3("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0m,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Na(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.Ay(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dPh(u,s))
if(t>0)u.i3("Received "+A.t(t)+" file(s) via My Code.")
u.Nm(u.d)
B.Bv(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
Nm(d){return this.bBy(d)},
bBy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6G(r,u.a.c),$async$Nm)
case 8:p=f
if(u.c==null){x=1
break}new B.dOQ(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.mx(D.mE))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UD(r,u.a.c),$async$Nm)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ay(u.a.c),$async$Nm)
case 12:u.m(new o.dOR(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nm,w)},
NJ(d){return this.bHN(d)},
bHN(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6G(d,u.a.c),$async$NJ)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOW(u,d,t))
x=6
return A.b(A.fM(new A.fE(t)),$async$NJ)
case 6:u.i3("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fE(r.toUpperCase())),$async$NJ)
case 7:u.i3("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NJ,w)},
i3(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cD7(d,e)},
cD7(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPH(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPI(r))
$.eV.ms()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUy(){var x=this.a
return x.f||x.r||x.w},
HY(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUy()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7q(s,n,r,q,o,t),$async$HY)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i3("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fA4(o,u.a.c),$async$HY)
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
return A.b(B.CS(s,o,r,q,n,t),$async$HY)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HY,w)},
a_q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoJ(u.a.c),$async$a_q)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i3("No organization portal found.")
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
return A.b(A.a6(t,!1).ck(A.e8(new B.dPd(u,r,q),!1,null,y.H)),$async$a_q)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_q,w)},
a0x(d){return this.cma(d)},
cm9(){return this.a0x(1)},
cma(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUy()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoG(u.a.c),$async$a0x)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0x,w)},
abs(d,e,f){return this.bYo(d,e,f)},
bYo(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i3(e)
x=1
break}x=3
return A.b(u.tJ(new B.dPa(u,d,null,e,f),"Uploading\u2026"),$async$abs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abs,w)},
bBG(){B.hoj(!1,new B.dOU(this))
return},
crb(){this.m(new B.dPl(this))},
axO(){var x=0,w=A.j(y.H),v=this
var $async$axO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bBG()
return A.h(null,w)}})
return A.i($async$axO,w)},
abo(){var x=0,w=A.j(y.H),v=this
var $async$abo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dP_(v),"Importing\u2026"),$async$abo)
case 2:return A.h(null,w)}})
return A.i($async$abo,w)},
RZ(d){return this.cCy(d)},
cCy(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mx(D.mE)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ck(A.e8(new B.dPE(u,d),!1,null,y.H)),$async$RZ)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mx(D.Q9)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ck(A.e8(new B.dPF(u,d),!1,null,y.H)),$async$RZ)
case 8:x=1
break
case 7:x=u.bZ5(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ck(A.e8(new B.dPG(u,d),!1,null,y.H)),$async$RZ)
case 11:x=1
break
case 10:u.i3("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RZ,w)},
bZ5(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cFn,C.a.b3(x,w+1).toLowerCase())},
aeW(d){return this.cd5(d)},
cd5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mx(D.mE)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ck(A.e8(new B.dPb(u,d),!1,null,y.H)),$async$aeW)
case 5:x=1
break
case 4:u.m(new B.dPc(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aeW,w)},
Rl(d){return this.cu7(d)},
cu7(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i3("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p5(t,s.c,s.f),$async$Rl)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPx(u,d),"Preparing QR\u2026"),$async$Rl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
ahB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPy(),A.U(t).k("M<1,n>")).fM(0)}t=u.d
s=A.U(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPz(q),s),s.k("J.E"))
if(r.length===0){u.i3("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rl(r),$async$ahB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahB,w)},
ahu(d){return this.ctF(d)},
ctF(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0N(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPr(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahu)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RZ(d)
break
case"qr":u.Rl(A.a([d],y.r))
break
case"send_my_code":u.cdI(A.a([d],y.r))
break
case"save":u.agQ(d)
break
case"delete":u.IM(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahu,w)},
Xc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dOX(),A.U(t).k("M<1,n>")).fM(0)}t=u.d
s=A.U(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dOY(q),s),s.k("J.E"))
if(r.length===0){u.i3("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p5(t,s.c,s.f),$async$Xc)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dOZ(u,r),"Preparing file\u2026"),$async$Xc)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xc,w)},
ag1(d){return this.ckw(d)},
ckw(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ag1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hp1(d,!1),$async$ag1)
case 3:s=f
r=s==null
q=B.a6D(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i3("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag1,w)},
af1(){var x=0,w=A.j(y.H),v=this,u
var $async$af1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fHG(u,v.a.c),$async$af1)
case 2:return A.h(null,w)}})
return A.i($async$af1,w)},
bBF(){B.hoj(!1,new B.dOT(this,null))
return},
J_(d,e){return this.cdJ(d,e)},
b_A(d){return this.J_(null,d)},
cdI(d){return this.J_(d,null)},
cdJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dPe(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.x5.c6().amW(!0,C.ZV,!1),$async$J_)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dPf(l,s,r),"Preparing\u2026"),$async$J_)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.i3("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i3("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCB(p,l,e,s.a.c),$async$J_)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i3("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J_,w)},
Id(d){return this.bYb(d)},
bYb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Id=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hDm(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_A(t),$async$Id)
case 8:x=6
break
case 7:u.i3("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i3("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tJ(new B.dP8(u,d),"Receiving video\u2026"),$async$Id)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dP9(u,d),"Receiving\u2026"),$async$Id)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Id,w)},
E9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CM()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ag1(t),$async$E9)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Id(s),$async$E9)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ck(A.e8(new B.dPj(u),!1,null,y.N)),$async$E9)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$E9)
case 10:x=1
break
case 9:x=11
return A.b(u.Id(C.a.i(r)),$async$E9)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E9,w)},
agQ(d){return this.cpL(d)},
cpL(d){var x=0,w=A.j(y.H),v=this
var $async$agQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPi(v,d),"Saving\u2026"),$async$agQ)
case 2:return A.h(null,w)}})
return A.i($async$agQ,w)},
IM(d){return this.bK6(d)},
bK6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l2(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IM)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c7t(t),$async$IM)
case 6:case 5:s=d.a
x=7
return A.b(B.En(u.a.c,s),$async$IM)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IM)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IM,w)},
ahH(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0N(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dPD(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahH)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.af1()
break
case"import":u.abo()
break}case 1:return A.h(v,w)}})
return A.i($async$ahH,w)},
c68(d){var x=d.c
if(C.a.a0(x,"video/")||d.mx(D.mE))return C.q6
if(C.a.a0(x,"image/")||d.mx(D.Q9))return C.u_
if(C.a.t(x,"pdf"))return E.NJ
return D.alq},
B(d){var x,w,v=this,u=null,t=B.a0N(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gz,u,u,u,new B.dPO(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bM5,u,u,u,v.e?u:v.gcdp(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcra()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bGq:E.alP,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0E,u,u,u,v.e?u:v.gc69(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o6,u,u,u,v.e?u:v.gb0I(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bNN,u,u,u,v.e?u:new B.dPP(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lB(new B.dPQ(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m3(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayC(C.js,s,!0,t,w?u:v.gcu8(),u),1)
x.push(new A.D(D.bsP,A.mD(new B.dPR(),A.B(A.a([s,C.au,A.E(new B.ayC(C.vI,"Export",!1,t,w?u:v.gbNH(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iF,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcL(t,v.e?u:v.gb0I(),u)
else s=A.k8(!0,u,u,new B.dPS(v,t),s,u,D.bsH,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.w(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayC.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vq,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vq,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.eC(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bcL.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mD(new B.d1T(),new A.D(E.Z_,A.w(A.a([A.mD(new B.d1U(),A.p(x,A.X(C.y6,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ew,C.ih,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o6,D.fy3,this.d,A.bn(C.aE,x,x,x,C.c,x,C.YV,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.ct,C.AW,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.abR.prototype={
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
if(!o||i.mx(D.mE))p=D.dcg
else{p=C.a.a0(p,"image/")||i.mx(D.Q9)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoY()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mx(D.mE))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.at,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mx(D.mE)))l.push(A.fSi(C.aE,!1,j,j,j,!1,j,j,new B.d2f(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.o4,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mD(new B.d2g(),new A.D(C.e5,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Yu,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ah),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YM.prototype={
T(){return new B.ayH()},
gde(){return this.c}}
B.ayH.prototype={
a_(){this.a1()
this.xJ()},
q(){B.hDB(this.e)
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
n=B.hDE(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hDD(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2c(s))
x=1
break}s.m(new B.d2d(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d2e(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xJ,w)},
a1t(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ro(t.c,t.d),$async$a1t)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(D.eUC)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahi(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1t)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1t,w)},
bY4(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kn(u,C.A,v,new B.d2a(w,t),C.fX,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fO(t,C.A,v,new B.d2b(w),C.fX,C.du,!0,v,!1,v,v)
else return C.bH
return A.uo(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0N(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BS,u,u,u,v.gb4y(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ea
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.ca(w,".heic")||C.a.ca(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.w(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.BS,D.fh1,v.gb4y(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.bY4()}return A.c7(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YJ.prototype={
T(){return new B.ayE(A.ai7(),C.bx,C.bx)},
gde(){return this.c}}
B.ayE.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fv(w,A.a3(w).k("fv<1>")).ih(new B.d1Q(v))
x.gcQw().ih(new B.d1R(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fv(x,A.a3(x).k("fv<1>"))}if(x==null)x=C.b3W
x.ih(new B.d1S(v))
v.xJ()},
xJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ro(p.c,p.d),$async$xJ)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1J(s))
x=1
break}x=8
return A.b(s.d.C4(0,new A.a2T(r,s.a.d.c)),$async$xJ)
case 8:if(s.c==null){x=1
break}s.m(new B.d1K(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1L(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xJ,w)},
Zk(){var x=0,w=A.j(y.H),v=this,u
var $async$Zk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h5(0),$async$Zk)
case 5:x=3
break
case 4:x=6
return A.b(u.ik(0),$async$Zk)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zk,w)},
aSr(d){var x=d.a
return C.a.aU(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0N(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ea
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bHp,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Od,C.n),o,88,o,o,o,o,o,88)
t=A.kY(C.aE,o,o,m,0,new B.d1M(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSr(p.w)+" / "+p.aSr(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eR7,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yg:C.iI,o,o,o,o,o)
x=A.w(A.a([u,C.kF,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6c(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c7(v,w,A.av(new A.D(C.r8,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pn.prototype={
T(){return new B.ayK()},
gde(){return this.c}}
B.ayK.prototype={
a_(){this.a1()
this.Pj()},
Pj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fUz(o.c,o.d,new B.d2t(s)),$async$Pj)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2u(s))
x=1
break}s.e=r
q=O.i_o(r)
if(q==null){s.m(new B.d2v(s))
x=1
break}s.d=q
q.aP(0,s.gb_o())
x=8
return A.b(q.ig(0).d6(0,C.r4),$async$Pj)
case 8:if(s.c==null){x=1
break}s.m(new B.d2w(s))
x=9
return A.b(q.pT(0),$async$Pj)
case 9:q.th(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d2x(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pj,w)},
cbH(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d2y(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CQ(0,x.gb_o())
w=x.d
if(w!=null)w.q()
B.i9c(x.e)
x.a2()},
ady(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ady=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZe(u.c,u.d),$async$ady)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ady,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0N(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aH(t,t,t,t,C.oX,t,t,t,u.gc66(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ik(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ea
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahB(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fI(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A2(s,t),A.aC(t,A.D2(A.p(t,A.X(q?I.yg:C.iI,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d2A(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bH}}return A.c7(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YO.prototype={
T(){return new B.ayI(new A.cs(null,y.A))}}
B.ayI.prototype={
gcCR(){var x,w,v=this.a
if(v.e!==D.Ru)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcCw(){var x,w,v=this.a
if(v.e!==D.za)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcCR()
if(x!=null){v.Ql(x)
v.e=A.dt(R.Fh,new B.d2p(v,x))}w=v.gcCw()
if(w!=null){v.Qk(w)
v.f=A.dt(C.fV,new B.d2q(v,w))}},
q(){var x=this.e
if(x!=null)x.a6(0)
x=this.f
if(x!=null)x.a6(0)
this.a2()},
Qk(d){return this.ciI(d)},
ciI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoO(d),$async$Qk)
case 3:t=f
x=4
return A.b(B.c7M(d),$async$Qk)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d2h(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qk,w)},
Ql(d){return this.ciJ(d)},
ciJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ql=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fI5(d),$async$Ql)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAv(t),$async$Ql)
case 4:if(u.c==null){x=1
break}u.m(new B.d2i(u))
u.c.J(y.q).f.U(D.aOx)
case 1:return A.h(v,w)}})
return A.i($async$Ql,w)},
gc25(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc67(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1f(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CM()){t=u.c
if(t!=null)t.J(y.q).f.U(D.eXG)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ck(A.e8(new B.d2j(),!1,null,y.N)),$async$a1f)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAv(s),$async$a1f)
case 4:t=u.c
if(t!=null)t.J(y.q).f.U(D.aOx)
case 1:return A.h(v,w)}})
return A.i($async$a1f,w)},
a9l(d){return this.bHO(d)},
bHO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fE(C.d.aH(t,", "))),$async$a9l)
case 3:if(d.e!=null){t=d.J(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9l,w)},
adw(d){return this.bHy(d)},
bHy(d){var x=0,w=A.j(y.H),v=this
var $async$adw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fE(v.a.c)),$async$adw)
case 2:if(d.e!=null)d.J(y.q).f.U(D.eV4)
return A.h(null,w)}})
return A.i($async$adw,w)},
a1a(d){return this.cpN(d)},
cpN(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anR(s.d,4),$async$a1a)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rU(r,"ngmy_doc_share_qr.png"),$async$a1a)
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
return A.i($async$a1a,w)},
gaVF(){var x,w=this.a
if(w.e!==D.HJ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b3(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b3(x,13))
return null},
a9i(d){return this.bHH(d)},
bHH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaVF()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9i)
case 3:if(d.e!=null)d.J(y.q).f.U(D.eWG)
case 1:return A.h(v,w)}})
return A.i($async$a9i,w)},
adx(){var x=0,w=A.j(y.H),v=this,u
var $async$adx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UF(),$async$adx)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adx,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0N(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HJ&&i!==D.Ru&&i!==D.za
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HJ||t===D.Ru||t===D.za?l:A.aH(l,l,l,l,C.l2,l,l,l,m.gaYz(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pN(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc25(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HJ){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc67(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hj(D.bRy,D.fqd,new B.d2k(m,d),l)],p))}if(m.a.e===D.HJ&&m.gaVF()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hj(D.bO6,D.fmX,new B.d2l(m,d),l)],p))
if(m.a.e===D.za){x=(m.w?C.dz:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ed:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.Ru){x=(m.r?C.dz:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ed:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bJT,D.ftg,m.gcqa(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ok(i,A.c7(v,w,new A.D(C.a9,A.w(A.a([A.E(A.p(l,A.w(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eC(N.BR,C.TW,new B.d2m(m,d),l),1),C.au,A.E(A.dn(C.yB,C.a8c,new B.d2n(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bG(C.zK,m.gaYz(),A.bn(C.aJ,l,l,l,l,C.fP,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d2o(),y.C)}}
B.abP.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.c9(A.w(A.a([w,C.aR,A.p(x,A.pN(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.ek(A.a([A.bG(C.zL,new B.d1I(d),x)],u),x,x,C.mW,v,x,x,x,x,D.fg2,x)}}
B.YI.prototype={
T(){return new B.ayD(A.z8(C.xt,C.nI,C.ub))}}
B.ayD.prototype={
q(){this.d.q()
this.a2()},
awq(d){var x,w,v,u,t
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
return A.c7(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fnq,x,x,x,1,x,!0),C.w,A.z7(this.d,C.bU,this.gawp()),x,!1,!1,x,x)}}
B.YP.prototype={
T(){return new B.ayJ(A.z8(C.xt,C.nI,C.ub))},
gde(){return this.c}}
B.ayJ.prototype={
bZ7(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afo(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RT("text/plain"),$async$afo)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.U(D.eXA)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afo,w)},
aa6(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aa6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hp1(p,!0),$async$aa6)
case 3:t=e
p=t==null
s=B.a6D(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.U(D.eUc)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aa6,w)},
q(){this.d.q()
this.a2()},
awq(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZ7(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.amJ,v,v,v,w.gbNf(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0L,v,v,v,w.gcg7(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.re:P.Nu,v,v,v,v,v),v,v,v,new B.d2s(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fu7,v,v,v,1,v,!0)
u=A.z7(w.d,C.bU,w.gawp())
x=A.m(20)
return A.c7(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ef4],s),v),v,!1,!1,v,v)}}
B.bcM.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oH
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oH:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Z4,A.B(A.a([u,C.bd,A.E(A.w(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a90.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Od.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WP.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Oc.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.ER.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.ciI.prototype={}
B.EQ.prototype={}
B.a9_.prototype={}
B.at6.prototype={}
B.WQ.prototype={}
var z=a.updateTypes(["aA<~>()","R(jl)","n(jl)","Uw(Y)","~()","YL(Y)","G(G,jl)","Pn(Y)","~(lZ)","cr(EQ)","aA<jl?>(@)","Uu(Y)","Uy(Y)","D(jl)","jl(@)","a5<n,@>(jl)","YK(Y)","Uv(Y)","YM(Y)","YJ(Y)","YO(Y)","abP(Y)","ai<jl>()","YP(Y)","abR(Y,G)","YI(Y)","a5<n,aD>(jl)","cr(WP)","cr(a9_)","aA<cr>(EQ)"])
B.ciE.prototype={
$1(d){var x=this.a
x.x=D.aLK
x.y.L(0,D.aLK)},
$S:68}
B.ciF.prototype={
$1(d){var x=this.a
x.x=D.aLJ
x.y.L(0,D.aLJ)},
$S:68}
B.ciG.prototype={
$1(d){var x=this.a
x.agJ(A.aOj(d.data)).bA(new B.ciD(x),y.b)},
$S:68}
B.ciD.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ciH.prototype={
$1(d){},
$S:68}
B.ciK.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hIm(d.channel))},
$S:15}
B.ciL.prototype={
$1(d){},
$S:15}
B.ciM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i0q(w.iceConnectionState)
x.cx=w
if($.h2p())switch(w.a){case 0:x.cy=D.aLP
break
case 1:x.cy=D.aLQ
break
case 3:x.cy=D.aLR
break
case 5:x.cy=D.aLN
break
case 6:x.cy=D.aLO
break
case 7:x.cy=D.a6_
break
default:break}},
$S:156}
B.ciN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i0r(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:156}
B.ciO.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iaG(w.signalingState)},
$S:156}
B.ciP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i8V(w.connectionState)},
$S:156}
B.ciQ.prototype={
$1(d){},
$S:156}
B.ciR.prototype={
$1(d){},
$S:15}
B.fkk.prototype={
$1(d){var x=y.F.a(new A.rK([],[]).pB(d.target.result,!1)),w=C.xu.t(x.objectStoreNames,"blobs")
if(!w)C.xq.KA(x,"blobs")},
$S:189}
B.fHu.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vW.fe(this.b)
$.eV.ms()
this.c.$1(d)},
$S:352}
B.fHw.prototype={
$1(d){return this.a.$1(B.hRe(this.b,this.c))},
$S:34}
B.fHv.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fHt.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fHJ.prototype={
$1(d){var x=this
return B.hez(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fHK.prototype={
$1(d){var x=this
return B.hez(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fmv.prototype={
$1(d){var x=this
return B.c7n(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d20.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1Y.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7n(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2_.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7n(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1Z.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c7n(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d22.prototype={
$4(d,e,f,g){var x=null
return A.jF(A.B(A.a([A.aH(x,x,x,x,D.bIu,x,x,x,new B.d21(d),x,x,x,x,x,x),A.E(A.EC(D.PU,!0,x,C.a_R,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PU,x,g,C.aiA,0,e,f)},
$C:"$4",
$R:4,
$S:382}
B.d21.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fov.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.ic:C.c,r=A.m(28),q=A.p(v,D.bmK,C.f,v,v,D.b_r,v,v,v,v,D.aiq,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bME,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.D(C.Fu,A.w(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amZ,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dU(C.de,new B.fot(d),v),1),C.au,A.E(A.bG(D.flY,new B.fou(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.M9,v,v,v,v),v)},
$S:59}
B.fot.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fou.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.U(D.eVj)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBd(v,x))},
$S:0}
B.foZ.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.ic:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bmA,C.f,w,w,D.b0U,w,w,w,w,D.aiq,w,w,1/0),new A.D(C.Fu,A.w(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fZv(u,"Organization name",C.FW,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fZv(u,"Access code",C.nj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fZv(u,"Member password",H.Gu,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fuc,new B.foY(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fP,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.M9,w,w,w,w),w)},
$S:59}
B.foY.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.U(D.eVo)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEp(u,x,w))},
$S:0}
B.c7e.prototype={
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
p=C.a.a0(j,"http")?A.cE(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.vd(p,null).d6(0,C.Y6),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bw(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c7k.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7l.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c7m.prototype={
$1(d){return d.b},
$S:z+2}
B.c7g.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7h.prototype={
$1(d){return d.b},
$S:z+2}
B.c7f.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c7i.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c7j.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fHH.prototype={
$1(d){return new B.Uu(this.a,null)},
$S:z+11}
B.fHI.prototype={
$1(d){return new B.Uy(this.a,this.b,this.c,null)},
$S:z+12}
B.dOM.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPV.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPW.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPX.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPU(x,d))},
$S:2}
B.dPU.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPY.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPZ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQ_.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQ0.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQ1.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dQ2.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQ5.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dQ3.prototype={
$1(d){var x=this.a
return x.f?null:x.Zj()},
$S:2}
B.dQ4.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mx(D.Q9))s=C.u_
else s=C.a.a0(s,"video/")||d.mx(D.mE)?C.q6:D.alq
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.w(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoY(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dON.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOO.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c7o.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:97}
B.c7p.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:97}
B.fIn.prototype={
$2(d,e){return e===this.a},
$S:290}
B.fhx.prototype={
$1(d){return J.k(d)},
$S:17}
B.fmH.prototype={
$1(d){var x=this.b
B.hPi(C.FJ.ga5R(this.a)).bA(x.gcFW(x),y.H)},
$S:122}
B.fmI.prototype={
$1(d){return this.a.d4(0,null)},
$S:122}
B.fmJ.prototype={
$0(){return null},
$S:11}
B.c7D.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fmK.prototype={
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
B.fqK.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fl9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fla.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7I.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mE)},
$S:z+1}
B.fMt.prototype={
$1(d){return new B.YK(this.a,null)},
$S:z+16}
B.d1X.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fL()},
$S:9}
B.d1V.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d1W.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dPT.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0m()},
$S:12}
B.dPg.prototype={
$0(){var x=J.bDF(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPh.prototype={
$0(){var x=J.bDF(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOQ.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dOP(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDi(this.c)}},
$S:0}
B.dOP.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOR.prototype={
$0(){var x=J.bDF(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOW.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dOV(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDi(this.c)}},
$S:0}
B.dOV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPH.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPI.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dPd.prototype={
$1(d){return new B.Uv(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dPa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HY(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Uz(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0x(s.gM(t)),$async$$0)
case 8:case 7:r.i3(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOU.prototype={
$1(d){this.a.abs(d,"No files selected.","Added")},
$S:352}
B.dPl.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dPk(),A.U(x).k("M<1,n>")))},
$S:0}
B.dPk.prototype={
$1(d){return d.a},
$S:z+2}
B.dP_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x5.c6().cSt(C.ZV,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
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
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i3("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i3("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoN(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i3("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i3("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPE.prototype={
$1(d){return new B.Pn(this.a.a.c,this.b,null)},
$S:z+7}
B.dPF.prototype={
$1(d){return new B.YM(this.a.a.c,this.b,null)},
$S:z+18}
B.dPG.prototype={
$1(d){return new B.YJ(this.a.a.c,this.b,null)},
$S:z+19}
B.dPb.prototype={
$1(d){return new B.Pn(this.a.a.c,this.b,null)},
$S:z+7}
B.dPc.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPx.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HY(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6F(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i3("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cm9(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.U(t).k("M<1,n>")
r=new A.M(new A.M(t,new B.dPt(p),r),new B.dPu(),r.k("M<ak.E,n>")).c0(0,new B.dPv())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ck(A.e8(new B.dPw(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p4(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UF(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPt.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dPs(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPs.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPu.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPv.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPw.prototype={
$1(d){var x=this.a
return new B.YO(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPy.prototype={
$1(d){return d.a},
$S:z+2}
B.dPz.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPr.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoY(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mx(D.mE)?C.u1:C.oU
p=!x||p.mx(D.mE)?"Play video":"View"
return A.c0(A.bm(!0,new A.D(C.B7,A.w(A.a([q,o,t,C.aB,B.YN(!1,u,!1,w,p,new B.dPm(d),v),B.YN(!1,u,!1,C.js,"Share via QR",new B.dPn(d),"Letters/numbers QR code"),B.YN(!1,u,!1,D.a_X,"Send to their Code",new B.dPo(d),"Enter someone else's personal code"),B.YN(!1,u,!1,C.hA,"Download / save",new B.dPp(d),v),C.am,B.YN(!1,u,!0,C.e6,"Delete",new B.dPq(d),v)],y.p),C.aj,v,C.e,C.P,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,v,v,C.n),C.be)},
$S:720}
B.dPm.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dPn.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dPo.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPp.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dPq.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dOX.prototype={
$1(d){return d.a},
$S:z+2}
B.dOY.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOZ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6H(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gk(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p4(s.c,s.f),$async$$0)
case 4:u.i3(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOT.prototype={
$1(d){var x=this.a
x.tJ(new B.dOS(x,d,this.b),"Preparing\u2026")},
$S:352}
B.dOS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i3("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Uz(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i3("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCB(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i3("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPe.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dPf.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fUC(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gh(new B.dP4(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i3("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dP5(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dP6(s))
case 5:x=8
return A.b(r.b.il(0,C.Fd,new B.dP7()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i3("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i3("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP4.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dP1(x,d,e))},
$S:137}
B.dP1.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dP5.prototype={
$1(d){return new B.abP(this.a.a,null)},
$S:z+21}
B.dP6.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dP7.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dP9.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ie(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6v(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_A(B.Ie(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoN(new B.dP2(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fUB(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i3(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cF(r)
p=o.eO(r,new B.dP3()).gM(0)
s.i3(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP2.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dP0(x,d,e))},
$S:137}
B.dP0.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dP3.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mE)},
$S:z+1}
B.dPj.prototype={
$1(d){return new B.YP(this.a.a.c,null)},
$S:z+23}
B.dPi.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZe(u.a.c,v.b),$async$$0)
case 2:t.i3(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPD.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bm(!0,new A.D(C.B7,A.w(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YN(!0,w,!1,C.nj,"My Code",new B.dPA(d),"Your personal code & QR \u2014 others send docs to you"),B.YN(!1,w,!1,D.a_X,"Send to their Code",new B.dPB(this.a,d),"Enter someone else's 5-digit code + letter"),B.YN(!1,w,!1,S.yq,"Import backup",new B.dPC(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.P,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,x,x,C.n),C.be)},
$S:720}
B.dPA.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dPB.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bBF()},
$S:0}
B.dPC.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dPQ.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Io(D.PU,x,C.a_R,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.PU).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:597}
B.dPO.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dPP.prototype={
$0(){this.a.ahH()
return null},
$S:0}
B.dPR.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dPS.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abR(e,w,v,this.b,x.e,x.c68(w),new B.dPK(x,w),new B.dPL(x,v,w),new B.dPM(x,w),new B.dPN(x,w),null)},
$S:z+24}
B.dPK.prototype={
$0(){this.a.aeW(this.b)
return null},
$S:0}
B.dPL.prototype={
$0(){var x=this.a
return x.m(new B.dPJ(x,this.b,this.c))},
$S:0}
B.dPJ.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPM.prototype={
$0(){this.a.NJ(this.b)
return null},
$S:0}
B.dPN.prototype={
$0(){this.a.ahu(this.b)
return null},
$S:0}
B.d1T.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.d1U.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:142}
B.d2g.prototype={
$3(d,e,f){return A.de(A.dV(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.d2f.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d2c.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2d.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2e.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d2a.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fO(w,C.A,x,new B.d28(this.a),C.fX,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d29(this.a))
return C.bH},
$S:128}
B.d28.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d26(this.a))
return C.bH},
$S:178}
B.d26.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d23(x))},
$S:9}
B.d23.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d29.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d25(x))},
$S:9}
B.d25.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2b.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d27(this.a))
return C.bH},
$S:178}
B.d27.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d24(x))},
$S:9}
B.d24.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1Q.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1P(x,d))},
$S:1739}
B.d1P.prototype={
$0(){return this.a.f=this.b===C.uy},
$S:0}
B.d1R.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1O(x,d))},
$S:9}
B.d1O.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1S.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1N(x,d))},
$S:9}
B.d1N.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1J.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1K.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1L.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1M.prototype={
$1(d){return this.a.d.MJ(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2t.prototype={
$0(){var x=this.a.a
return B.ro(x.c,x.d)},
$S:1740}
B.d2u.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d2v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d2w.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2x.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d2y.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d2A.prototype={
$0(){var x=this.a
x.m(new B.d2z(x))},
$S:0}
B.d2z.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h5(0)
else x.pT(0)},
$S:0}
B.d2p.prototype={
$1(d){return this.a.Ql(this.b)},
$S:12}
B.d2q.prototype={
$1(d){return this.a.Qk(this.b)},
$S:12}
B.d2h.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d2i.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d2j.prototype={
$1(d){return D.fXU},
$S:z+25}
B.d2o.prototype={
$2(d,e){if(d)B.UF()},
$S:126}
B.d2k.prototype={
$0(){return this.a.a9l(this.b)},
$S:0}
B.d2l.prototype={
$0(){return this.a.a9i(this.b)},
$S:0}
B.d2m.prototype={
$0(){return this.a.adw(this.b)},
$S:0}
B.d2n.prototype={
$0(){return this.a.a1a(this.b)},
$S:0}
B.d1I.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d2s.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d2r(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2r.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7K.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mE)},
$S:z+1}
B.c7L.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7J.prototype={
$2(d,e){return this.bj1(d,e)},
bj1(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UG(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1741}
B.fqm.prototype={
$1(d){if(d===D.a5Z&&(this.a.a.a&30)===0)this.a.fR(0)},
$S:z+27}
B.fqn.prototype={
$0(){},
$S:11}
B.fqU.prototype={
bkA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.feF(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h9I(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bkA(d,e)},
$S:722}
B.fqT.prototype={
$1(d){var x=this
d.b=new B.fqS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fqS.prototype={
$1(d){return this.bkz(d)},
bkz(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZf(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aI(0,n,null)
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
return A.b(B.feF(l,n.b,m,n.c,s.d),$async$$1)
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
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6E(m),$async$$1)
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
x(v=B.ayG.prototype,"gcd1","PX",0)
x(v,"gcdT","J0",0)
x(v,"gcdo","xS",0)
x(v=B.aCA.prototype,"gc62","adu",0)
x(v,"gc63","Zi",0)
x(v,"gcsC","ahb",0)
x(v=B.aCD.prototype,"gc64","Zj",0)
x(v,"gcsD","a1u",0)
x(B.aCB.prototype,"gc65","adv",0)
x(B.ayF.prototype,"gc6a","c6b",4)
x(v=B.aCC.prototype,"gcdp","a_q",0)
x(v,"gcra","crb",4)
x(v,"gb0I","axO",0)
x(v,"gcu8","ahB",0)
x(v,"gbNH","Xc",0)
x(v,"gc69","E9",0)
x(B.ayH.prototype,"gb4y","a1t",0)
x(B.ayE.prototype,"gc6c","Zk",0)
x(v=B.ayK.prototype,"gb_o","cbH",4)
x(v,"gc66","ady",0)
x(v=B.ayI.prototype,"gcqa","a1f",0)
x(v,"gaYz","adx",0)
w(B.ayD.prototype,"gawp","awq",8)
x(v=B.ayJ.prototype,"gcg7","afo",0)
x(v,"gbNf","aa6",0)
w(v,"gawp","awq",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.ciI,B.a9_,B.at6,B.aBd,B.aEp,B.jl,B.abx,B.buD,B.EQ,B.WQ])
w(B.ciJ,B.ciI)
w(B.b3n,B.a9_)
x(A.hW,[B.ciE,B.ciF,B.ciG,B.ciD,B.ciH,B.ciK,B.ciL,B.ciM,B.ciN,B.ciO,B.ciP,B.ciQ,B.ciR,B.fkk,B.fHu,B.fHw,B.fHv,B.fHJ,B.fHK,B.fmv,B.d1Y,B.d2_,B.d1Z,B.d22,B.fov,B.foZ,B.c7e,B.c7l,B.c7m,B.c7h,B.c7f,B.c7i,B.c7j,B.fHH,B.fHI,B.dPX,B.dQ5,B.dQ3,B.dQ4,B.fhx,B.fmH,B.fmI,B.c7D,B.fmK,B.fqK,B.fl9,B.fla,B.c7I,B.fMt,B.d1X,B.d1V,B.dPT,B.dOP,B.dOV,B.dPd,B.dOU,B.dPk,B.dPE,B.dPF,B.dPG,B.dPb,B.dPt,B.dPs,B.dPu,B.dPv,B.dPw,B.dPy,B.dPz,B.dPr,B.dOX,B.dOY,B.dOT,B.dPe,B.dP5,B.dP3,B.dPj,B.dPD,B.dPQ,B.dPR,B.d1T,B.d1U,B.d2g,B.d2f,B.d2a,B.d28,B.d26,B.d29,B.d2b,B.d27,B.d1Q,B.d1R,B.d1S,B.d1M,B.d2p,B.d2q,B.d2j,B.c7K,B.c7L,B.fqm,B.fqT,B.fqS])
w(B.b3o,B.at6)
x(A.j8,[B.fHt,B.d20,B.d21,B.fot,B.fou,B.foY,B.dOM,B.dPV,B.dPW,B.dPU,B.dPY,B.dPZ,B.dQ_,B.dQ0,B.dQ1,B.dQ2,B.dON,B.dOO,B.fmJ,B.d1W,B.dPg,B.dPh,B.dOQ,B.dOR,B.dOW,B.dPH,B.dPI,B.dPa,B.dPl,B.dP_,B.dPc,B.dPx,B.dPm,B.dPn,B.dPo,B.dPp,B.dPq,B.dOZ,B.dOS,B.dPf,B.dP8,B.dP1,B.dP6,B.dP7,B.dP9,B.dP0,B.dPi,B.dPA,B.dPB,B.dPC,B.dPO,B.dPP,B.dPK,B.dPL,B.dPJ,B.dPM,B.dPN,B.d2c,B.d2d,B.d2e,B.d23,B.d25,B.d24,B.d1P,B.d1O,B.d1N,B.d1J,B.d1K,B.d1L,B.d2t,B.d2u,B.d2v,B.d2w,B.d2x,B.d2y,B.d2A,B.d2z,B.d2h,B.d2i,B.d2k,B.d2l,B.d2m,B.d2n,B.d1I,B.d2s,B.d2r,B.fqn])
x(A.ma,[B.abQ,B.Nb,B.a90,B.Od,B.WP,B.Oc,B.ER])
x(A.ag,[B.YL,B.Uu,B.Uy,B.Uv,B.YK,B.Uw,B.YM,B.YJ,B.Pn,B.YO,B.YI,B.YP])
x(A.ah,[B.ayG,B.aCA,B.aCD,B.aCB,B.ayF,B.aCC,B.ayH,B.ayE,B.ayK,B.ayI,B.ayD,B.ayJ])
x(A.au,[B.aci,B.ayC,B.bcL,B.abR,B.abP,B.bcM])
x(A.kj,[B.c7k,B.c7g,B.c7o,B.c7p,B.fIn,B.dP4,B.dP2,B.dPS,B.d2o,B.c7J,B.fqU])
x(A.iR,[B.bi6,B.buh])})()
A.jY(b.typeUniverse,JSON.parse('{"b3n":{"a9_":[]},"b3o":{"at6":[]},"YL":{"ag":[],"r":[]},"ayG":{"ah":["YL"]},"aci":{"au":[],"r":[]},"Uu":{"ag":[],"r":[]},"Uy":{"ag":[],"r":[]},"aCA":{"ah":["Uu"]},"aCD":{"ah":["Uy"]},"bi6":{"iR":[]},"Uv":{"ag":[],"r":[]},"aCB":{"ah":["Uv"]},"YK":{"ag":[],"r":[]},"Uw":{"ag":[],"r":[]},"abR":{"au":[],"r":[]},"YM":{"ag":[],"r":[]},"YJ":{"ag":[],"r":[]},"Pn":{"ag":[],"r":[]},"YO":{"ag":[],"r":[]},"abP":{"au":[],"r":[]},"YI":{"ag":[],"r":[]},"YP":{"ag":[],"r":[]},"ayF":{"ah":["YK"]},"buh":{"iR":[]},"aCC":{"ah":["Uw"]},"ayC":{"au":[],"r":[]},"bcL":{"au":[],"r":[]},"ayH":{"ah":["YM"]},"ayE":{"ah":["YJ"]},"ayK":{"ah":["Pn"]},"ayI":{"ah":["YO"]},"ayD":{"ah":["YI"]},"ayJ":{"ah":["YP"]},"bcM":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u7"),k:x("LD()"),m:x("bl<n,n>"),F:x("r0"),g:x("aA<jl?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<v>"),W:x("O<bh>"),Y:x("O<a5<n,R>>"),t:x("O<a5<n,@>>"),r:x("O<jl>"),w:x("O<+file,name(lw,n)>"),u:x("O<cR>"),s:x("O<n>"),E:x("O<iR>"),a:x("O<dJ>"),p:x("O<r>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jl>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<n,n>"),P:x("a5<n,@>"),f:x("a5<@,@>"),o:x("iB"),e:x("ieA"),af:x("E5"),U:x("jl"),b:x("cr"),C:x("aD"),aK:x("w2"),ab:x("EQ"),br:x("at6"),v:x("WQ"),N:x("n"),X:x("bq<L>"),Q:x("lI"),D:x("dJ"),aw:x("cx<n>"),cd:x("a_<a5<n,@>>"),c7:x("r"),ch:x("bX<ai<jl>>"),aW:x("bX<dJ?>"),aY:x("bX<~>"),cx:x("abQ"),b1:x("bg<ai<jl>>"),cf:x("bg<dJ?>"),d4:x("bg<~>"),c4:x("aBd"),bG:x("aEp"),q:x("n0"),B:x("pm<EQ>"),c6:x("pm<a90>"),y:x("R"),i:x("L"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jl>?"),aL:x("ai<@>?"),h:x("a5<n,@>?"),l:x("jl?"),R:x("aD?"),c:x("WQ?"),d:x("+answerQr,transfer(n,aA<ai<jl>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Nb,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dJ?"),cm:x("abx?"),bk:x("aBd?"),ag:x("aEp?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aYN=new A.ay(C.aE,2,C.q,-1)
D.bW_=new A.a8(C.a3,C.a8,C.x,C.a1P,null,null)
D.b_r=new A.o(null,null,null,C.mc,null,D.bW_,C.n)
D.b0U=new A.o(null,null,null,C.mc,null,E.GH,C.n)
D.ac3=new A.v(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adf=new A.v(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aec=new A.v(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.afG=new A.v(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fgV=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fv7=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Do,null,null,null,null,null,null,null,null,null)
D.d4e=x([D.fgV,C.am,D.fv7],y.p)
D.bmq=new A.fl(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d4e,null)
D.fzr=new A.y("Create your organization",null,C.fG,null,null,null,null,null,null,null,null,null)
D.flb=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Do,null,null,null,null,null,null,null,null,null)
D.djz=x([D.fzr,C.am,D.flb],y.p)
D.bmA=new A.fl(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.djz,null)
D.fvI=new A.y("Team Member sign-in",null,C.fG,null,null,null,null,null,null,null,null,null)
D.fp0=new A.y("Enter the access code and password from your organization.",null,G.Do,null,null,null,null,null,null,null,null,null)
D.dht=x([D.fvI,C.am,D.fp0],y.p)
D.bmK=new A.fl(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dht,null)
D.bsH=new A.Q(16,10,16,28)
D.bsP=new A.Q(16,14,16,4)
D.bu1=new A.Q(20,0,20,16)
D.buw=new A.Q(20,8,20,16)
D.aiq=new A.Q(24,22,24,20)
D.a_X=new A.a0(63394,"MaterialIcons",!1)
D.alq=new A.a0(63515,"MaterialIcons",!1)
D.bGq=new A.a0(983813,"MaterialIcons",!1)
D.bDE=new A.a0(62867,"MaterialIcons",!1)
D.bHp=new A.ae(D.bDE,44,C.c,null,null,null)
D.bIu=new A.ae(C.pX,null,C.ad,null,null,null)
D.bJT=new A.ae(C.j0,18,null,null,null,null)
D.bLz=new A.ae(D.a_X,26,C.c,null,null,null)
D.bM5=new A.ae(C.BJ,null,null,null,null,null)
D.bME=new A.ae(C.ys,null,null,null,null,null)
D.bNN=new A.ae(W.NH,null,null,null,null,null)
D.bO6=new A.ae(C.hp,16,null,null,null,null)
D.bRy=new A.ae(C.ri,16,null,null,null,null)
D.bHH=new A.ae(C.nj,null,null,null,null,null)
D.bSp=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bHH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bNb=new A.ae(C.FW,null,null,null,null,null)
D.bSu=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bNb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bI1=new A.ae(H.Gu,null,null,null,null,null)
D.bSF=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bI1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cFW=x([C.fd,C.aZ,C.aE],y.O)
D.bXR=new A.a8(C.ax,C.aC,C.x,D.cFW,null,null)
D.cFn=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PU=x([C.fd,C.aE],y.O)
D.Q9=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mE=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dcg=x([C.pB,C.aE],y.O)
D.e3A={iceServers:0}
D.aGo={urls:0}
D.dnb=new A.bl(D.aGo,["stun:stun.l.google.com:19302"],y.m)
D.dna=new A.bl(D.aGo,["stun:stun1.l.google.com:19302"],y.m)
D.cVI=x([D.dnb,D.dna],A.ax("O<a5<n,n>>"))
D.dmu=new A.bl(D.e3A,[D.cVI],A.ax("bl<n,@>"))
D.HJ=new B.Nb(0,"lanDirect")
D.Rt=new B.Nb(1,"cloudStash")
D.dyq=new B.Nb(2,"inlineInstant")
D.Ru=new B.Nb(3,"webrtcLink")
D.za=new B.Nb(4,"videoCloud")
D.fv6=new A.y("Receive file",null,C.nA,null,null,null,null,null,null,null,null,null)
D.cvq=x([E.an6,C.ab,D.fv6],y.p)
D.eMY=new A.cl(C.aO,C.b9,C.j,C.m,null,C.p,null,0,D.cvq,null)
D.e9j=new A.D(C.cl,D.eMY,null)
D.f84=new A.H(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2u,null,null,null)
D.fhs=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f84,null,C.L,null,null,null,null,null,null,null)
D.e8B=new A.D(C.Bc,D.fhs,null)
D.b59=new A.cp(C.A,null,null,D.e8B,null)
D.ef4=new A.cL(0,null,0,28,null,null,D.b59,null)
D.efn=new B.a90(0,"RTCDataChannelConnecting")
D.aLJ=new B.a90(1,"RTCDataChannelOpen")
D.aLK=new B.a90(3,"RTCDataChannelClosed")
D.efo=new B.ER(0,"RTCIceConnectionStateNew")
D.efp=new B.ER(1,"RTCIceConnectionStateChecking")
D.efq=new B.ER(2,"RTCIceConnectionStateCompleted")
D.efr=new B.ER(3,"RTCIceConnectionStateConnected")
D.efs=new B.ER(4,"RTCIceConnectionStateCount")
D.eft=new B.ER(5,"RTCIceConnectionStateFailed")
D.efu=new B.ER(6,"RTCIceConnectionStateDisconnected")
D.aLL=new B.ER(7,"RTCIceConnectionStateClosed")
D.aLM=new B.WP(0,"RTCIceGatheringStateNew")
D.efv=new B.WP(1,"RTCIceGatheringStateGathering")
D.a5Z=new B.WP(2,"RTCIceGatheringStateComplete")
D.a6_=new B.Oc(0,"RTCPeerConnectionStateClosed")
D.aLN=new B.Oc(1,"RTCPeerConnectionStateFailed")
D.aLO=new B.Oc(2,"RTCPeerConnectionStateDisconnected")
D.aLP=new B.Oc(3,"RTCPeerConnectionStateNew")
D.aLQ=new B.Oc(4,"RTCPeerConnectionStateConnecting")
D.aLR=new B.Oc(5,"RTCPeerConnectionStateConnected")
D.efw=new B.Od(0,"RTCSignalingStateStable")
D.efx=new B.Od(1,"RTCSignalingStateHaveLocalOffer")
D.efy=new B.Od(2,"RTCSignalingStateHaveRemoteOffer")
D.efz=new B.Od(3,"RTCSignalingStateHaveLocalPrAnswer")
D.efA=new B.Od(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLS=new B.Od(5,"RTCSignalingStateClosed")
D.eR7=new A.ar(160,48)
D.b6n=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eSC=new A.a7(16,16,D.b6n,null)
D.fkB=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new A.b1(D.fkB,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frY=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eU5=new A.b1(D.frY,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fAv=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eUc=new A.b1(D.fAv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkb=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eUC=new A.b1(D.fkb,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvT=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aOx=new A.b1(D.fvT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxg=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eV4=new A.b1(D.fxg,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fBU=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eVj=new A.b1(D.fBU,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzV=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eVo=new A.b1(D.fzV,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fB7=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eW9=new A.b1(D.fB7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fiQ=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eWG=new A.b1(D.fiQ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftL=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eX0=new A.b1(D.ftL,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmN=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXw=new A.b1(D.fmN,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fC_=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eXA=new A.b1(D.fC_,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fj5=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eXG=new A.b1(D.fj5,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fhO=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eXV=new A.b1(D.fhO,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.feL=new A.y("NGMY DOC SHARE",null,C.aPR,null,null,null,null,null,null,null,null,null)
D.fg2=new A.y("Show this to sender",null,C.kf,null,null,null,null,null,null,null,null,null)
D.fh1=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.flA=new A.y("Organization settings",null,C.cA,null,null,null,null,null,null,null,null,null)
D.flY=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fmX=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fnq=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fsY=new A.y("Send to their Doc Share",null,C.ny,null,null,null,null,null,null,null,null,null)
D.ftg=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ftz=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fu7=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fuc=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fuz=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fxL=new A.y("Share files & videos\nwith a scan.",null,C.aPS,null,null,null,null,null,null,null,null,null)
D.fy3=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fXU=new B.YI(null)
D.a94=new B.abQ(0,"docShare")
D.a95=new B.abQ(1,"gate")
D.Us=new B.abQ(2,"gateNoIndividual")})();(function staticFields(){$.aN5=null
$.fcv=function(){var x=y.N
return A.T(x,x)}()
$.G3=A.T(y.N,y.D)
$.afT=A.T(y.N,A.ax("lw"))
$.QD=A.T(y.N,y.D)
$.fcZ=A.T(y.N,A.ax("abx"))
$.c7C=A.T(y.S,A.ax("buD"))
$.h9H=1
$.hXa=null
$.hX9=null
$.hOH=null
$.fZH=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"if4","hqU",()=>new B.ciJ())
x($,"id_","h2p",()=>C.a.t(A.bu(A.bu(A.bu(A.GE(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["hQjo6t6LQVCI9N0NWWxRzmb1Ojk="]=a.current})($__dart_deferred_initializers__);