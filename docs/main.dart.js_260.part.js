((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cil:function cil(){},
hFP(d){var x=null,w=new B.b3c(d,D.ecs,new A.pi(x,x,y.c6),new A.pi(x,x,y.B))
w.bwL(d)
return w},
b3c:function b3c(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cig:function cig(d){this.a=d},
cih:function cih(d){this.a=d},
cii:function cii(d){this.a=d},
cif:function cif(d){this.a=d},
cij:function cij(d){this.a=d},
hFQ(d,e){var x=y.N
x=new B.b3d(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwM(d,e)
return x},
b3d:function b3d(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cim:function cim(d){this.a=d},
cin:function cin(d){this.a=d},
cio:function cio(d){this.a=d},
cip:function cip(d){this.a=d},
ciq:function ciq(d){this.a=d},
cir:function cir(d){this.a=d},
cis:function cis(d){this.a=d},
cit:function cit(d){this.a=d},
fWV(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yw.LB(x,"ngmy_doc_share_v1",new B.fiz(),1)},
hMo(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QK(d,e){return B.i0B(d,e)},
i0B(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMX
x=7
return A.b(o==null?$.aMX=B.fWV():o,$async$QK)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mF(s,"blobs","readwrite")
C.iE.mh(J.mD(q,"blobs"),r,d)
x=8
return A.b(J.ps(q),$async$QK)
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
return A.i($async$QK,w)},
QJ(d){return B.i0A(d)},
i0A(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMX
x=7
return A.b(o==null?$.aMX=B.fWV():o,$async$QJ)
case 7:s=f
r=J.mF(s,"blobs","readonly")
x=8
return A.b(C.iE.zm(J.mD(r,"blobs"),d),$async$QJ)
case 8:q=f
x=9
return A.b(J.ps(r),$async$QJ)
case 9:o=B.hMo(q)
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
return A.i($async$QJ,w)},
ags(d){return B.i0z(d)},
i0z(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ags=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMX
x=7
return A.b(p==null?$.aMX=B.fWV():p,$async$ags)
case 7:s=f
r=J.mF(s,"blobs","readwrite")
C.iE.Fx(J.mD(r,"blobs"),d)
x=8
return A.b(J.ps(r),$async$ags)
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
return A.i($async$ags,w)},
fiz:function fiz(){},
hOM(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnK(w,v))}return u},
hlN(d,e){var x,w={},v=A.aVj("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fF5(w,v,e)
C.vP.yg(v,"change",new B.fF7(w,v,!1))
C.vP.yg(v,"cancel",new B.fF6(w))
$.eV.mo()
v.click()
A.bN(C.ag7,new B.fF4(w),y.H)},
fF5:function fF5(d,e,f){this.a=d
this.b=e
this.c=f},
fF7:function fF7(d,e,f){this.a=d
this.b=e
this.c=f},
fF6:function fF6(d){this.a=d},
fF4:function fF4(d){this.a=d},
CJ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CJ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTb()?3:4
break
case 3:x=5
return A.b(B.hgW(e,d,s,!0,!1,f,g,h,!1,i),$async$CJ)
case 5:x=1
break
case 4:x=6
return A.b(B.Qp(d,s,f,g,h,i),$async$CJ)
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
return A.b(B.I8(s,d),$async$CJ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fe0(s,d),$async$CJ)
case 14:x=12
return A.b(r.hgW(q,p,o,n,m,l,k,j,a1,i),$async$CJ)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c8(A.ea(new B.fFk(s,i,d,f,g,h),!1,null,y.H)),$async$CJ)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c8(A.ea(new B.fFl(s,i,d,f,g,h),!1,null,y.H)),$async$CJ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CJ,w)},
Qp(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qp=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYX(e),$async$Qp)
case 3:u=k
x=4
return A.b(B.aou(d,e,!1),$async$Qp)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.I8(e,d),$async$Qp)
case 7:if(k){v=D.a8E
x=1
break}x=8
return A.b(B.Un(e),$async$Qp)
case 8:v=t?D.U6:D.a8F
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYV(d,e)){v=D.a8E
x=1
break}x=11
return A.b(B.Un(e),$async$Qp)
case 11:v=t?D.U6:D.a8F
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fS4(d,e)){v=D.a8E
x=1
break}x=14
return A.b(B.Un(e),$async$Qp)
case 14:v=D.U6
x=1
break
case 13:v=t?D.U6:D.a8F
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qp,w)},
fe0(d,e){var x=0,w=A.j(y.y),v
var $async$fe0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYV(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYX(d),$async$fe0)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fe0,w)},
hgW(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c8(A.ea(new B.fkk(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hc3(d,e,f,g,h,i,j){return new B.YB(e,j,d,g,h,i,f,null)},
fmg(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fmg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fmj(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fmg)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmg,w)},
fmL(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fmL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fmN(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fmL)
case 3:q=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
r.U$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmL,w)},
fX3(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bs(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fxG(d,e){var x=0,w=A.j(y.H),v
var $async$fxG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Un(e),$async$fxG)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eK()
case 1:return A.h(v,w)}})
return A.i($async$fxG,w)},
fFk:function fFk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFl:function fFl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abI:function abI(d,e){this.a=d
this.b=e},
fkk:function fkk(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YB:function YB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayx:function ayx(){this.c=this.a=this.d=null},
d1A:function d1A(d,e){this.a=d
this.b=e},
d1x:function d1x(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1C:function d1C(){},
d1B:function d1B(d){this.a=d},
aca:function aca(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aB4:function aB4(d,e){this.a=d
this.b=e},
aEg:function aEg(d,e,f){this.a=d
this.b=e
this.c=f},
fmj:function fmj(d,e,f){this.a=d
this.b=e
this.c=f},
fmh:function fmh(d){this.a=d},
fmi:function fmi(d,e,f){this.a=d
this.b=e
this.c=f},
fmN:function fmN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmM:function fmM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6R(d,e,f,g,h){return B.hAJ(d,e,f,g,h)},
hAJ(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c6R=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iL(r.dt(d,new B.c6S(s,e,h,g,f,q),y.g),y.l),$async$c6R)
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
return A.i($async$c6R,w)},
aYS(d,e,f,g,h){return B.hAK(d,e,f,g,h)},
hAK(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYS=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atN("GET",d)
o=A.fOx()
if(o==null)o=new A.Lq(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.EZ),$async$aYS)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.C5(),$async$aYS)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bo(q,h,o,e,f,"Received via QR")
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
return A.i($async$aYS,w)},
aYR(d){return B.hAH(d)},
hAH(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v9(d,null).cM(0,C.nT),$async$aYR)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.ix(A.iw(p.e)).ca(0,p.w),null)
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
return A.i($async$aYR,w)},
c6Q(d){return B.hAI(d)},
hAI(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c6Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v9(d,null).cM(0,C.pL),$async$c6Q)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ix(A.iw(q.e)).ca(0,q.w)
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
return A.i($async$c6Q,w)},
c6S:function c6S(d,e,f,g,h,i){var _=this
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
I6(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hAP(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.I6(C.a.b1(u,v.length))}return null},
hAQ(d){var x=B.I6(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hAL(){var x,w=$.pp(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aC(10)
return C.d.fY(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(24)]},
a6m(d){return B.hAM(d)},
hAM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f3(d,null,!1,C.bH),$async$a6m)
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
return A.i($async$a6m,w)},
a6n(d,e){return B.hAN(d,e)},
hAN(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6n=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hD(d,e,!1,!1,C.cH,null),$async$a6n)
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
return A.i($async$a6n,w)},
Bn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Bn)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.I6(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6o(r),$async$Bn)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6m("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bn)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.I6(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bn)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hAL()
x=14
return A.b(B.a6o(m),$async$Bn)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6n("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bn)
case 15:k=f
x=16
return A.b(B.a6n("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bn)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bn)
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
return A.i($async$Bn,w)},
a6o(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.I6(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6m("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6o)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6o,w)},
a6p(d,e,f,g){return B.hAR(d,e,f,g)},
hAR(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6p=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gam(d)){v=!1
x=1
break}r=B.I6(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6o(r),$async$a6p)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c6Y())>1048576||g.b4(d,new B.c6Z())){v=B.Ec(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gJ(q.split("@"))+"\u2026")
x=4
return A.b(B.a6A("myCode",d,a0),$async$a6p)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cm(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Ec(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZ_(u,g.gM(d),a0),$async$a6p)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pp().aC(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c7_(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYT(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6p)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6p,w)},
Ec(d,e,f,g,h){return B.hAO(d,e,f,g,h)},
hAO(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ec=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ec)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cG(a6)
k=l.cI(a6,0,new B.c6U())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pp().aC(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aC(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
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
a1=B.Ia(a9,q)
a0=new A.K_(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Ec)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oS(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9X(a1.a,a4,"media",a1.d,a2).wR(m,n,new A.Du(!0,q.c)),$async$Ec)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Ec)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPq(r),$async$Ec)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c6V(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYT(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Ec)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPq(r),$async$Ec)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ec,w)},
aYT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6m(t),$async$aYT)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c6T(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6n(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYT,w)},
N1(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$N1=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6m("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$N1)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cm(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aYU(k,a0),$async$N1)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aYZ(h),$async$N1)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Uu(g,a0),$async$N1)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a1(r,new B.c6W(),q),n)
d=A.C(new A.a1(r,new B.c6X(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6n("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$N1)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$N1,w)},
aYU(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cm(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
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
break}i=B.i4n(k,j)
C.d.v(s,i)
x=5
return A.b(B.CH(l,m,"Received via My Code",t,e,i),$async$aYU)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPq(s),$async$aYU)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYU,w)},
c6Y:function c6Y(){},
c6Z:function c6Z(){},
c7_:function c7_(){},
c6U:function c6U(){},
c6V:function c6V(){},
c6T:function c6T(){},
c6W:function c6W(){},
c6X:function c6X(){},
fFh(d,e){var x=0,w=A.j(y.H)
var $async$fFh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c8(A.ea(new B.fFi(e),!1,null,y.H)),$async$fFh)
case 2:return A.h(null,w)}})
return A.i($async$fFh,w)},
bCt(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cm(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c8(A.ea(new B.fFj(g,e,f),!1,null,y.y)),$async$bCt)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCt,w)},
fFi:function fFi(d){this.a=d},
fFj:function fFj(d,e,f){this.a=d
this.b=e
this.c=f},
Uk:function Uk(d,e){this.c=d
this.a=e},
aCr:function aCr(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOk:function dOk(d,e){this.a=d
this.b=e},
Uo:function Uo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCu:function aCu(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPt:function dPt(d){this.a=d},
dPu:function dPu(d){this.a=d},
dPv:function dPv(d){this.a=d},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPw:function dPw(d){this.a=d},
dPx:function dPx(d){this.a=d},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPB:function dPB(d){this.a=d},
dPE:function dPE(){},
dPC:function dPC(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
bhX:function bhX(){},
Ul:function Ul(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCs:function aCs(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOl:function dOl(d){this.a=d},
dOm:function dOm(d){this.a=d},
fS5(d){var x=d.hP
if(x>=0)return C.o.N(x)
return 10},
hAT(d){var x=d.kF
if(x>=0)return x
return 4.99},
hAS(d){var x=d.lm,w=y.N
w=x.j0(x,new B.c71(),w,w)
return w},
h77(d){var x=d.kG,w=y.N
w=x.j0(x,new B.c72(),w,w)
return w},
aYX(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aYX)
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
return A.i($async$aYX,w)},
a6r(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a6r)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a6r)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6r,w)},
Un(d){var x=0,w=A.j(y.H),v,u
var $async$Un=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Un)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Un)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Un,w)},
fS4(d,e){var x,w,v
if(B.hAT(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hAS(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYV(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h77(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h78(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h77(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bQ(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kG=w},
aov(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aov=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aov)
case 7:s=f
r=A.t(p)
r=A.f6(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aov,w)},
aow(d){var x=0,w=A.j(y.H),v,u,t
var $async$aow=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aov(d),$async$aow)
case 3:u=f
x=5
return A.b(A.aA(),$async$aow)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$aow)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aow,w)},
aou(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aou=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fS5(d)
if(u<=0){v=!1
x=1
break}if(B.fS4(d,e)){v=!1
x=1
break}x=3
return A.b(B.aov(e),$async$aou)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aou,w)},
aYW(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.I8(e,d),$async$aYW)
case 3:if(g){v=-1
x=1
break}u=B.fS5(d)
if(u<=0){v=-1
x=1
break}if(B.fS4(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aov(e),$async$aYW)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYW,w)},
c74(d,e,f){var x=0,w=A.j(y.y),v
var $async$c74=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.I8(e,d),$async$c74)
case 3:if(h){v=!1
x=1
break}v=B.aou(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c74,w)},
c73(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c73=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c74(d,u,i.gTb()),$async$c73)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c73,w)},
a6q(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6q=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gTb()){v=!0
x=1
break}if(B.aYV(d,u)){v=!0
x=1
break}x=5
return A.b(A.ld(u,C.Ru),$async$a6q)
case 5:x=k?3:4
break
case 3:B.h78(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6q)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kS(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Ru,"Doc Share for Organizations"),$async$a6q)
case 7:if(!k){v=!1
x=1
break}B.h78(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6q)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6q,w)},
c71:function c71(){},
c72:function c72(){},
fFV(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fFV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fFV)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.faH.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hN([r],e.c))
s.toString
$.faH.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFV,w)},
i6F(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.faH.bn($.faH,new B.fFX(d))},
fFX:function fFX(d){this.a=d},
fc6(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fc6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hN([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jd,null,y.H),$async$fc6)
case 3:C.zU.fb(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mo()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fc6,w)},
afj(d,e,f){var x=0,w=A.j(y.H),v
var $async$afj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fbe.n(0,d,new B.abp(A.bn(e,!0,v)))
x=3
return A.b(A.aA(),$async$afj)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afj)
case 2:return A.h(null,w)}})
return A.i($async$afj,w)},
afd(d){return B.hQB(d)},
hQB(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fbe.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$afd)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cm(s)){v=null
x=1
break}o=J.b6(s,new B.ffM(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abp(r)
$.fbe.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
Qf(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FU.n(0,d,u)
x=3
return A.b(B.QK(d,u),$async$Qf)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qf,w)},
aNh(d){return B.hQz(d)},
hQz(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FU.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.QJ(d),$async$aNh)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FU.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aNh)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aJ(r)
x=!J.cm(q)?9:10
break
case 9:B.Qf(d,q)
x=11
return A.b(J.hE(s,d),$async$aNh)
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
return A.i($async$aNh,w)},
hML(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.ce(A.zS(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
return A.f7(null,y.K)},
a12(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a12=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fkw(r,t),!1,s)
A.fI(r,"error",new B.fkx(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ih(0,C.LH,new B.fky())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a12,w)},
aNB(d,e,f){return B.hSQ(d,e,f)},
hSQ(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNB=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a12(i),$async$aNB)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QK(o,p),$async$aNB)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afj(k,j,s),$async$aNB)
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
return A.i($async$aNB,w)},
aNA(d,e,f){return B.hSP(d,e,f)},
hSP(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNA=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNB(d,e,f),$async$aNA)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a12(f),$async$aNA)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FU.n(0,s,r)
$.Qw.n(0,s,r)
x=11
return A.b(B.Qf(s,r),$async$aNA)
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
return A.i($async$aNA,w)},
Bo(d,e,f,g,h,i){return B.hB1(d,e,f,g,h,i)},
hB1(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bo=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aC(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jl(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aZ2(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qf(s,d),$async$Bo)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Bo)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cS.gcw().aJ(d)),$async$Bo)
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
return A.b(B.As(e),$async$Bo)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.G5(e,j),$async$Bo)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bo,w)},
Up(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Up=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.As(d),$async$Up)
case 3:t=a1
s=e.length,r=J.cG(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cI.aC(99999)
n=p.b
l=o.type
l.toString
k=B.h7a(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jl(m,n,k,l,j,"From folder",null,B.aZ2(),null)
$.afM.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a12(o),$async$Up)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FU.n(0,h,g)
$.Qw.n(0,h,g)
B.Qf(h,g)
x=9
break
case 10:x=11
return A.b(B.aNA(d,m,o),$async$Up)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.G5(d,t),$async$Up)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Up,w)},
fS9(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fS9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h7a(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.I9(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.Bo(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fS9,w)},
I9(d,e,f,g,h,i){return B.hB0(d,e,f,g,h,i)},
hB0(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$I9=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aC(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.K_(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$I9)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cm(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rh(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kE(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QK(k,l),$async$I9)
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
return A.b(j.a7(0),$async$I9)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.QK(k,new Uint8Array(A.ce(n))),$async$I9)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afj(r,q,g),$async$I9)
case 16:f=new B.jl(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aZ2(),null)
x=17
return A.b(B.As(d),$async$I9)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.G5(d,e),$async$I9)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$I9,w)},
Ur(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ur=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afM.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a12(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afd(s),$async$Ur)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QJ(u[o]),$async$Ur)
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
v=A.zS(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qw.h(0,s)
if(i==null)i=$.FU.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rk(d,e),$async$Ur)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qw.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ur,w)},
h7a(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rk(d,e){return B.hB2(d,e)},
hB2(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rk=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qw.h(0,f)
if(e==null)e=$.FU.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afM.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a12(s),$async$rk)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FU.n(0,f,r)
$.Qw.n(0,f,r)
B.Qf(f,r)
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
return A.b(B.afd(f),$async$rk)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axk(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QJ(g[l]),$async$rk)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ani()
if(!C.aG.gam(r)){$.FU.n(0,f,r)
$.Qw.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNh(f),$async$rk)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qw.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Ur(a0,a1,0,g),$async$rk)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.ce(i))
$.FU.n(0,f,h)
$.Qw.n(0,f,h)
B.Qf(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rk,w)},
hB5(d){var x,w,v=$.afM.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hB6(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hN([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hB3(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoC(d,e,f,g,h){return B.hB4(d,e,f,g,h)},
hB4(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoC=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afM.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a12(s),$async$aoC)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rk(g,e),$async$aoC)
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
return A.b(n.i9(d).wR(h,r,new A.Du(!0,e.c)),$async$aoC)
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
return A.i($async$aoC,w)},
h7c(d,e,f,g,h){var x,w,v,u,t=$.h7b
$.h7b=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aC(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7f.n(0,t,new B.but(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axk(u)))
return t},
fSa(d){var x=0,w=A.j(y.H)
var $async$fSa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fSa,w)},
Ia(d,e){var $async$Ia=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afM.h(0,h)
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
return A.q0(B.Ur(d,e,p,o<q?o:q),$async$Ia,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q0(A.Fr(n),$async$Ia,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q0(B.afd("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ia,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q0(B.QJ(h[l]),$async$Ia,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q0(A.Fr(k),$async$Ia,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q0(B.rk(d,e),$async$Ia,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q0(A.Fr(A.zS(j,p,o<i?o:i)),$async$Ia,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q0(null,0,w)
case 2:return A.q0(t.at(-1),1,w)}})
var x=0,w=A.hfP($async$Ia,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hhE(w)},
aZ4(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZ4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7f.h(0,d)
if(t==null||J.cm(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3X(),$async$aZ4)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ4,w)},
Uq(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Uq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7f.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3X(),$async$Uq)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afj(r.c,u,r.z),$async$Uq)
case 4:t=new B.jl(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZ2(),null)
u=r.a
x=5
return A.b(B.As(u),$async$Uq)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.G5(u,s),$async$Uq)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uq,w)},
a6x(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7f.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ags(u[s]),$async$a6x)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
c7h(d,e,f){var x=0,w=A.j(y.H)
var $async$c7h=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzv(d,e,f),$async$c7h)
case 2:return A.h(null,w)}})
return A.i($async$c7h,w)},
c7i(d,e,f){var x=0,w=A.j(y.H)
var $async$c7i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzw(d,e,f),$async$c7i)
case 2:return A.h(null,w)}})
return A.i($async$c7i,w)},
Ed(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ed=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.As(d),$async$Ed)
case 2:p=g
J.no(p,new B.c7g(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FU.W(0,v)
$.afM.W(0,e)
x=3
return A.b(B.afd(v),$async$Ed)
case 3:u=g
$.fbe.W(0,v)
x=4
return A.b(A.aA(),$async$Ed)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ed)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ed)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ags(s[q]),$async$Ed)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ags(v),$async$Ed)
case 13:x=14
return A.b(B.G5(d,p),$async$Ed)
case 14:return A.h(null,w)}})
return A.i($async$Ed,w)},
aZ3(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZ3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rk(d,e),$async$aZ3)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fc6(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ3,w)},
As(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$As=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$As)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fkz(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$As,w)},
G5(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$G5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$G5)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fox(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$G5)
case 3:return A.h(null,w)}})
return A.i($async$G5,w)},
bzv(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.As(d),$async$bzv)
case 3:u=h
t=J.cG(u)
s=t.bd(u,new B.fiZ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCR(f))
x=4
return A.b(B.G5(d,u),$async$bzv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzv,w)},
bzw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.As(d),$async$bzw)
case 3:u=h
t=J.cG(u)
s=t.bd(u,new B.fj_(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cGg(f))
x=4
return A.b(B.G5(d,u),$async$bzw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzw,w)},
abp:function abp(d){this.a=d},
ffM:function ffM(){},
fkw:function fkw(d,e){this.a=d
this.b=e},
fkx:function fkx(d){this.a=d},
fky:function fky(){},
c7g:function c7g(d){this.a=d},
but:function but(d,e,f,g,h,i,j,k,l){var _=this
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
fkz:function fkz(){},
fox:function fox(){},
fiZ:function fiZ(d){this.a=d},
fj_:function fj_(d){this.a=d},
a6y(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c7l())?3:4
break
case 3:x=5
return A.b(B.aZ5(d,e),$async$a6y)
case 5:u=g
if(u!=null){t=u.c
B.N3(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gJ(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aZ0(s),$async$a6y)
case 10:case 9:if(g){v=new A.PD(1,D.R7,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Us(d,e),$async$a6y)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Ux(!0,!0,d,e),$async$a6y)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.N3(d,D.z4,e,t)
v=new A.PD(p,D.z4,t)
x=1
break}v=B.c7k(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6y,w)},
Us(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Us=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6A(null,d,e),$async$Us)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cm(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZ_(p,d.length,e),$async$Us)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7i(e,C.d.gJ(d).a,r.b),$async$Us)
case 7:case 6:q=r.a
x=8
return A.b(B.N3(d,D.R7,e,q),$async$Us)
case 8:v=new A.PD(d.length,D.R7,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Us,w)},
Ut(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ut=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mt(D.mA)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6z(d,e),$async$Ut)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7d(s,d,e,t),$async$Ut)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZ0(t),$async$Ut)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rk(e,d),$async$Ut)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Us(A.a([d],y.r),e),$async$Ut)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ut,w)},
Uv(){var x=0,w=A.j(y.H)
var $async$Uv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fS3(),$async$Uv)
case 2:x=3
return A.b(B.aPH(),$async$Uv)
case 3:return A.h(null,w)}})
return A.i($async$Uv,w)},
a6z(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZ2()
x=3
return A.b(B.c7h(e,d.a,u),$async$a6z)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
N3(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$N3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.R7&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b1(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6z(p,f),$async$N3)
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
return A.b(B.c7c(o,p,u,f),$async$N3)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7d(o,p,f,t),$async$N3)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7b(o,u,p,f),$async$N3)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N3,w)},
aZ5(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZ5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7j(e,d),$async$aZ5)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Ux(!1,!0,d,e),$async$aZ5)
case 4:u=g
if(u!=null){t=u.b
v=new A.PD(u.a,D.z4,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ5,w)},
c7j(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Ur(d,s,0,1),$async$c7j)
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
return A.i($async$c7j,w)},
c7k(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gJ(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6A(null,d,e),$async$c7k)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h79(u)
if(t.length>800){v=null
x=1
break}v=new A.PD(d.length,D.dvI,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7k,w)},
aoD(d,e,f){return B.hB9(d,e,f)},
hB9(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoD=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mE(g,1)
x=B.fS8(g)?3:4
break
case 3:x=5
return A.b(B.c7e(g),$async$aoD)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d_(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mE(g,13))
try{k=B.Ee(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d_(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mE(g,13))
u=9
x=12
return A.b(B.aYZ(q),$async$aoD)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Uu(p,a0)
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
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fS7(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Uu(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d_(g,"N2|")){v=B.Ib(C.a.i(J.mE(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.Ib(C.a.i(J.mE(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ib(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Uu(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoD,w)},
Ib(d,e,f){return B.hB7(d,e,f)},
hB7(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ib=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b1(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b1(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cw(A.t(s)+"/manifest.json",0,null)
q=A.cw(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYR(r),$async$Ib)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYR(A.cw(s,0,null)),$async$Ib)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cm(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c6R(o,r,a1,n,a2),$async$Ib)
case 11:m=a4
x=J.cm(m)?12:13
break
case 12:x=14
return A.b(B.c6Q(q),$async$Ib)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Uu(l,a2),$async$Ib)
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
return A.i($async$Ib,w)},
a6A(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6A=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rk(f,r),$async$a6A)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcw().aJ(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
Uu(d,e){return B.hB8(d,e)},
hB8(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Uu=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aG(0,a2,null)
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
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
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
if(J.ad(j)===0){x=7
break}i=C.cG.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bo(i,a3,d,k,l,o),$async$Uu)
case 9:h=a5
if(h!=null)J.ch(n,h)
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
return A.i($async$Uu,w)},
N2:function N2(d,e){this.a=d
this.b=e},
c7l:function c7l(){},
a0D(d){var x=A.P(d).ax.a===C.I,w=x?D.adL:D.abC,v=x?D.aff:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acQ:C.aL
return new A.aFu([w,s,v,u,t,x?C.fa:C.bV])},
hmv(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fK2(e),d,null,!0,!0,y.N)},
c70(d,e,f,g,h,i,j,k,l){return new B.Um(e,l,d,f,k,j,g,h,i,null)},
YD(d,e,f,g,h,i,j){return new B.bcC(g,h,j,e,i,d,f,null)},
fK2:function fK2(d){this.a=d},
YA:function YA(d,e){this.c=d
this.a=e},
ayw:function ayw(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1w:function d1w(d){this.a=d},
d1u:function d1u(d){this.a=d},
d1v:function d1v(d){this.a=d},
bu7:function bu7(){},
Um:function Um(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCt:function aCt(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPr:function dPr(d){this.a=d},
dOP:function dOP(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOo:function dOo(d,e,f){this.a=d
this.b=e
this.c=f},
dOn:function dOn(d){this.a=d},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOu:function dOu(d,e,f){this.a=d
this.b=e
this.c=f},
dOt:function dOt(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
dPg:function dPg(d){this.a=d},
dOM:function dOM(d,e,f){this.a=d
this.b=e
this.c=f},
dOJ:function dOJ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOs:function dOs(d){this.a=d},
dOU:function dOU(d){this.a=d},
dOT:function dOT(){},
dOy:function dOy(d){this.a=d},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPe:function dPe(d,e){this.a=d
this.b=e},
dOK:function dOK(d,e){this.a=d
this.b=e},
dOL:function dOL(d,e){this.a=d
this.b=e},
dP5:function dP5(d,e){this.a=d
this.b=e},
dP1:function dP1(d){this.a=d},
dP0:function dP0(d){this.a=d},
dP2:function dP2(){},
dP3:function dP3(){},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP6:function dP6(){},
dP7:function dP7(d){this.a=d},
dP_:function dP_(d,e){this.a=d
this.b=e},
dOV:function dOV(d){this.a=d},
dOW:function dOW(d){this.a=d},
dOX:function dOX(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dOv:function dOv(){},
dOw:function dOw(d){this.a=d},
dOx:function dOx(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOq:function dOq(d,e,f){this.a=d
this.b=e
this.c=f},
dON:function dON(d){this.a=d},
dOO:function dOO(d,e,f){this.a=d
this.b=e
this.c=f},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOD:function dOD(d){this.a=d},
dOA:function dOA(d,e,f){this.a=d
this.b=e
this.c=f},
dOE:function dOE(d){this.a=d},
dOF:function dOF(d){this.a=d},
dOG:function dOG(){},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOB:function dOB(d){this.a=d},
dOz:function dOz(d,e,f){this.a=d
this.b=e
this.c=f},
dOC:function dOC(){},
dOS:function dOS(d){this.a=d},
dOR:function dOR(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dP9:function dP9(d,e){this.a=d
this.b=e},
dPa:function dPa(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPp:function dPp(){},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPj:function dPj(d,e,f){this.a=d
this.b=e
this.c=f},
dPh:function dPh(d,e,f){this.a=d
this.b=e
this.c=f},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPl:function dPl(d,e){this.a=d
this.b=e},
ayt:function ayt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcB:function bcB(d,e,f){this.c=d
this.d=e
this.a=f},
d1s:function d1s(){},
d1t:function d1t(){},
abJ:function abJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d1Q:function d1Q(){},
d1P:function d1P(d){this.a=d},
YC:function YC(d,e,f){this.c=d
this.d=e
this.a=f},
ayy:function ayy(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d1M:function d1M(d){this.a=d},
d1N:function d1N(d,e,f){this.a=d
this.b=e
this.c=f},
d1O:function d1O(d,e){this.a=d
this.b=e},
d1K:function d1K(d,e){this.a=d
this.b=e},
d1I:function d1I(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1D:function d1D(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1L:function d1L(d){this.a=d},
d1H:function d1H(d){this.a=d},
d1E:function d1E(d){this.a=d},
Yz:function Yz(d,e,f){this.c=d
this.d=e
this.a=f},
ayv:function ayv(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d1p:function d1p(d){this.a=d},
d1o:function d1o(d,e){this.a=d
this.b=e},
d1q:function d1q(d){this.a=d},
d1n:function d1n(d,e){this.a=d
this.b=e},
d1r:function d1r(d){this.a=d},
d1m:function d1m(d,e){this.a=d
this.b=e},
d1i:function d1i(d){this.a=d},
d1j:function d1j(d){this.a=d},
d1k:function d1k(d,e){this.a=d
this.b=e},
d1l:function d1l(d){this.a=d},
Pg:function Pg(d,e,f){this.c=d
this.d=e
this.a=f},
ayB:function ayB(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d22:function d22(d){this.a=d},
d23:function d23(d){this.a=d},
d24:function d24(d){this.a=d},
d25:function d25(d){this.a=d},
d26:function d26(d,e){this.a=d
this.b=e},
d27:function d27(d){this.a=d},
d29:function d29(d){this.a=d},
d28:function d28(d){this.a=d},
YE:function YE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayz:function ayz(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d1Z:function d1Z(d,e){this.a=d
this.b=e},
d2_:function d2_(d,e){this.a=d
this.b=e},
d1R:function d1R(d,e,f){this.a=d
this.b=e
this.c=f},
d1S:function d1S(d){this.a=d},
d1T:function d1T(){},
d1Y:function d1Y(){},
d1U:function d1U(d,e){this.a=d
this.b=e},
d1V:function d1V(d,e){this.a=d
this.b=e},
d1W:function d1W(d,e){this.a=d
this.b=e},
d1X:function d1X(d,e){this.a=d
this.b=e},
abH:function abH(d,e){this.c=d
this.a=e},
d1h:function d1h(d){this.a=d},
Yy:function Yy(d){this.a=d},
ayu:function ayu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YF:function YF(d,e){this.c=d
this.a=e},
ayA:function ayA(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d21:function d21(d){this.a=d},
d20:function d20(d){this.a=d},
bcC:function bcC(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hBa(){var x,w=$.pp(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"VT"+C.d.fY(v)},
N4(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$N4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$N4)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_video_relay_v1",null,!1,C.bH),$async$N4)
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
return A.i($async$N4,w)},
a6B(d){return B.hBb(d)},
hBb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6B)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hD("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6B)
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
return A.i($async$a6B,w)},
Uw(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Uw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N4(),$async$Uw)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dW(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6B(s),$async$Uw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Uw,w)},
Ux(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Ux=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$Ux)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bn(f,!0,y.U)
else{t=A.U(f).k("a1<1>")
u=A.C(new A.a1(f,new B.c7n(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hBa()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.C(new A.K(u,new B.c7o(s),t),t.k("ak.E"))
x=6
return A.b(B.N4(),$async$Ux)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6B(q),$async$Ux)
case 7:x=8
return A.b(B.a6C(r,u,g,s),$async$Ux)
case 8:v=new A.bob(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ux,w)},
aoE(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.N4(),$async$aoE)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoE,w)},
c7p(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.N4(),$async$c7p)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7p,w)},
a6C(d,e,f,g){return B.hBc(d,e,f,g)},
hBc(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6C=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoC("media",r,new B.c7m(s,e,g),f,q),$async$a6C)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Uw(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6C)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Uw(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6C)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Uw(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6C)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6C,w)},
Ee(d,e,f){return B.hBd(d,e,f)},
hBd(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ee=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ee)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoE(b3),$async$Ee)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.km,null,g),$async$Ee)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoE(b3),$async$Ee)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.N4(),$async$Ee)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
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
a1=J.a6(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
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
b0=A.oS(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9X(a8.a,b0,"media",a8.d,a9).Cq(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYS(k,n,o,s,b7),$async$Ee)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
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
g=a1.gaf(a4),a1=y.s
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
a8=A.oS(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9X(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ee)
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
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6B(e),$async$Ee)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ee,w)},
c7n:function c7n(){},
c7o:function c7o(d){this.a=d},
c7m:function c7m(d,e,f){this.a=d
this.b=e
this.c=f},
aPH(){var x=0,w=A.j(y.H),v,u
var $async$aPH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hM9=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPH)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPH)
case 3:u=$.fXf
u=u==null?null:u.bE(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPH)
case 4:$.fXf=$.hUG=$.hUH=null
return A.h(null,w)}})
return A.i($async$aPH,w)},
fo7(d){var x=0,w=A.j(y.H),v,u
var $async$fo7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5z){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fo8(new A.bX(u,y.aY))
x=3
return A.b(u.ih(0,C.hK,new B.fo9()),$async$fo7)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fo7,w)},
hUE(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hAV(x):x},
fXj(d){var x=0,w=A.j(y.T),v,u,t
var $async$fXj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,13))
if(C.a.a0(u,"WR")){v=B.aoG(u)
x=1
break}v=B.fS7(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXj,w)},
fXi(d){var x=0,w=A.j(y.T),v,u,t
var $async$fXi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,14))
if(C.a.a0(u,"WR")){v=B.aoH(u)
x=1
break}v=B.fS7(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXi,w)},
fFF(d){var x=0,w=A.j(y.T),v
var $async$fFF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoH(d),$async$fFF)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFF,w)},
bAn(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fXi(d),$async$bAn)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAn,w)},
fcV(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fcV=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Uq(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bo(d.ani(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcV,w)},
G7(d,e,f){return B.hX2(d,e,f)},
hX2(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$G7=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fXj(a1),$async$G7)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a6(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b1(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hoo().aD5(D.dk4,null),$async$G7)
case 4:l=d.fXf=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axk(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.foG(f,k,new B.foH(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a6T(0,new B.WG(r,"offer")),$async$G7)
case 5:d=l
x=7
return A.b(l.aka(0),$async$G7)
case 7:x=6
return A.b(d.a6L(0,a4),$async$G7)
case 6:x=8
return A.b(B.fo7(l),$async$G7)
case 8:x=9
return A.b(l.ao1(),$async$G7)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hUE(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoI(m,h),$async$G7)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h79(h)
case 11:v=new A.bnt(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G7,w)},
fo8:function fo8(d){this.a=d},
fo9:function fo9(){},
foH:function foH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
foG:function foG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
foF:function foF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hYU(d){switch(d){case"new":return D.ect
case"checking":return D.ecu
case"connected":return D.ecw
case"completed":return D.ecv
case"failed":return D.ecy
case"disconnected":return D.ecz
case"closed":return D.aLe
case"count":return D.ecx}return D.aLe},
hYV(d){switch(d){case"new":return D.aLf
case"gathering":return D.ecA
case"complete":return D.a5z}return D.aLf},
i88(d){switch(d){case"stable":return D.ecB
case"have-local-offer":return D.ecC
case"have-local-pranswer":return D.ecE
case"have-remote-offer":return D.ecD
case"have-remote-pranswer":return D.ecF
case"closed":return D.aLl}return D.aLl},
i6o(d){switch(d){case"new":return D.aLi
case"connecting":return D.aLj
case"connected":return D.aLk
case"closed":return D.a5A
case"disconnected":return D.aLh
case"failed":return D.aLg}return D.a5A},
a8T:function a8T(d,e){this.a=d
this.b=e},
O6:function O6(d,e){this.a=d
this.b=e},
WF:function WF(d,e){this.a=d
this.b=e},
O5:function O5(d,e){this.a=d
this.b=e},
EH:function EH(d,e){this.a=d
this.b=e},
cik:function cik(){},
fTS(d){var x=new B.EG()
x.a=d
x.b=!0
return x},
EG:function EG(){this.b=this.a=$},
a8S:function a8S(){},
asY:function asY(){},
WG:function WG(d,e){this.a=d
this.b=e},
fS3(){var x=0,w=A.j(y.H)
var $async$fS3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fS3,w)},
fS6(d,e,f){var x=0,w=A.j(y.T),v
var $async$fS6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mt(D.mA))){v=null
x=1
break}v=B.fFV(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fS6,w)},
h79(d){var x,w=F.ab3.a3H(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcw().aJ(x)}return C.cS.gcw().aJ(w)},
hAU(d){var x,w,v=C.cG.aJ(d)
try{x=C.c6.ca(0,F.ab2.bbp(v,!1))
return x}catch(w){x=C.c6.ca(0,v)
return x}},
fS7(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hAU(C.a.b1(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b1(t,w.length)
try{v=C.c6.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hAV(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aI(s,"\n")},
hAW(){var x,w=$.pp(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"DS"+C.d.fY(v)},
aYY(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bH),$async$aYY)
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
return A.i($async$aYY,w)},
c75(d,e){return B.hAX(d,e)},
hAX(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c75=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hD("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c75)
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
return A.i($async$c75,w)},
aZ0(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZ0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYY(d),$async$aZ0)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ0,w)},
aZ_(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZ_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hAW()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c75(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcw().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZ_)
case 3:if(!h){v=null
x=1
break}v=new A.a_G("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ_,w)},
aYZ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYY(o),$async$aYZ)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c6.ca(0,C.cG.aJ(u))
if(J.iU(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aYZ,w)},
c76(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c76=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBk("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c76)
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
return A.i($async$c76,w)},
aZ1(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZ1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.I7(),$async$aZ1)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ1,w)},
aoz(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoz)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZ1(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoz,w)},
aox(d,e){var x=0,w=A.j(y.H)
var $async$aox=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aox)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aox)
case 2:return A.h(null,w)}})
return A.i($async$aox,w)},
a6t(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6t)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.I7(),$async$a6t)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6s(s),$async$a6t)
case 5:x=6
return A.b(B.aox(f,u),$async$a6t)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6t,w)},
a6u(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6u=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6u)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.I7(),$async$a6u)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
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
return A.b(B.aox(g,q),$async$a6u)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6s(u),$async$a6u)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6u,w)},
a6v(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6v=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6v)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.I7(),$async$a6v)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aYV(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a6v)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6v)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
c77(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c77=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c77)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aG(0,r,null)
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
return A.i($async$c77,w)},
I8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$I8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c77(d),$async$I8)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZ1(t),$async$I8)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoy(d),$async$I8)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYV(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoy(d),$async$I8)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I8,w)},
aoy(d){var x=0,w=A.j(y.H)
var $async$aoy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoy)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoy)
case 2:return A.h(null,w)}})
return A.i($async$aoy,w)},
aZ2(){var x,w=$.pp(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(32)]
return C.d.fY(v)},
a6w(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fS8(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7a(d){return B.hAZ(d)},
hAZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6w(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bH),$async$c7a)
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
return A.i($async$c7a,w)},
aoB(d,e){return B.hB_(d,e)},
hB_(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6w(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hD("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aoB)
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
return A.i($async$aoB,w)},
c7c(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7c=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6w(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoB(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c7c)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7c,w)},
c7b(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6w(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoB(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c7b)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7b,w)},
c7d(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6w(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoB(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7d,w)},
c7e(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fS8(d)){v=null
x=1
break}x=3
return A.b(B.c7a(d),$async$c7e)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a6(u)
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
return A.i($async$c7e,w)},
a6D(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6D)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bH),$async$a6D)
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
return A.i($async$a6D,w)},
aoF(d){return B.hBe(d)},
hBe(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoF)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hD("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoF)
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
return A.i($async$aoF,w)},
aoG(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoG)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6D(),$async$aoG)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c6.ca(0,C.cG.aJ(q))
if(J.iU(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dW(A.a2(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aF(s,j,o)
x=9
return A.b(B.aoF(s),$async$aoG)
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
return A.i($async$aoG,w)},
aoI(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoI)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6D(),$async$aoI)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dW(A.a2(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcw().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.aoF(u),$async$aoI)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoI,w)},
aoH(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoH)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6D(),$async$aoH)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c6.ca(0,C.cG.aJ(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoH,w)},
anH(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pS)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$anH)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.fY),$async$anH)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vh(o))
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
return A.i($async$anH,w)},
i4n(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fEc(d){return B.i4p(d)},
i4p(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fEc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i9("media").Kr(d,3600),$async$fEc)
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
return A.i($async$fEc,w)},
CH(d,e,f,g,h,i){var x=null
return B.i4m(d,e,f,g,h,i)},
i4m(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CH=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h7c(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fSa(r),$async$CH)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fEc(o),$async$CH)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6x(r),$async$CH)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aOl)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lq(A.a([],g))
x=15
return A.b(d.eT(0,A.atN("GET",A.cw(n,0,null))).cM(0,C.EZ),$async$CH)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6x(r),$async$CH)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.K_(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CH)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZ4(r,k),$async$CH)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CH)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Uq(r)
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
return A.b(B.a6x(r),$async$CH)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CH,w)},
aPq(d){return B.i4o(d)},
i4o(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i9("media").W(0,d),$async$aPq)
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
return A.i($async$aPq,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[144]
O=c[40]
F=c[239]
I=c[135]
P=c[219]
E=c[212]
G=c[86]
Q=c[184]
R=c[136]
S=c[217]
K=c[243]
L=c[249]
B=a.updateHolder(c[21],B)
D=c[247]
T=c[183]
M=c[202]
U=c[65]
V=c[250]
W=c[71]
X=c[55]
N=c[85]
Y=c[248]
B.cil.prototype={
aD5(d,e){return this.cHN(d,e)},
cHN(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aD5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cB(t)))
t=J.k(u)
v=B.hFQ(C.cS.gcw().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aD5,w)}}
B.b3c.prototype={
bwL(d){var x=this,w=x.w
w.onclose=A.hg(new B.cig(x))
w.onopen=A.hg(new B.cih(x))
w.onmessage=A.hg(new B.cii(x))
w.onbufferedamountlow=A.hg(new B.cij(x))},
gdc(d){return this.x},
ago(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ago=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EG()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fTS(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$ago)
case 8:v=t.fTS(s.amV(f,0,null))
x=1
break
case 7:case 4:v=B.fTS(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ago,w)}}
B.b3d.prototype={
bwM(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hg(new B.cim(x)))
w.addEventListener("icecandidate",A.hg(new B.cin(x)))
w.addEventListener("iceconnectionstatechange",A.hg(new B.cio(x)))
w.onicegatheringstatechange=A.hg(new B.cip(x))
w.addEventListener("signalingstatechange",A.hg(new B.ciq(x)))
if(!$.h_X())w.addEventListener("connectionstatechange",A.hg(new B.cir(x)))
w.addEventListener("negotiationneeded",A.hg(new B.cis(x)))
w.addEventListener("track",A.hg(new B.cit(x)))},
aka(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aka=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.ki(A.cB(A.T(y.N,y.z)))),y.aQ),$async$aka)
case 3:t=f
v=new B.WG(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aka,w)},
a6L(d,e){return this.bmd(0,e)},
bmd(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6L)
case 2:return A.h(null,w)}})
return A.i($async$a6L,w)},
a6T(d,e){return this.bmt(0,e)},
bmt(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6T)
case 2:return A.h(null,w)}})
return A.i($async$a6T,w)},
ao1(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ao1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WG(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao1,w)},
bE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bE,w)}}
B.abI.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YB.prototype={
R(){return new B.ayx()},
gdd(){return this.c}}
B.ayx.prototype={
a_(){this.a1()
this.ad6()},
ad6(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ad6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYW(u.e,u.c),$async$ad6)
case 2:t=e
if(v.c!=null)v.m(new B.d1A(v,t))
return A.h(null,w)}})
return A.i($async$ad6,w)},
PK(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aou(t.e,t.c,!1),$async$PK)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.eT5)
x=1
break}x=4
return A.b(B.a6r(u.a.c,"individual"),$async$PK)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5h(A.ea(new B.d1x(u),!1,null,y.H)),$async$PK)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
IR(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fmg(o),$async$IR)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6v(o.e,r,s,q),$async$IR)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.eQa)
x=1
break}x=5
return A.b(B.a6r(u.a.c,"member"),$async$IR)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5h(A.ea(new B.d1z(u),!1,null,y.H)),$async$IR)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IR,w)},
xN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6q(t.e,o,t.f,t.r,t.w,s),$async$xN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6r(u.a.c,"org_owner"),$async$xN)
case 4:x=5
return A.b(B.aoz(u.a.c),$async$xN)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fmL(o),$async$xN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6t(s,t,o,q.c),$async$xN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.eQ7)
x=1
break}x=10
return A.b(B.aoz(u.a.c),$async$xN)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5h(A.ea(new B.d1y(u),!1,null,y.H)),$async$xN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xN,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.ja:C.pC,q=B.fS5(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.faO,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h6,t,t,t),C.aB,D.ftC,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bW9,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lA(new B.d1C(),t),C.N,w,C.e3,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.aca(C.eR,C.axV,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcbT(),t),C.ac],v))
p.push(new B.aca(C.oK,C.a1u,"Team Member","Sign in with your organization access code + password",u.gccK(),t))
p.push(C.ac)
p.push(new B.aca(C.akv,C.a2Z,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gccf(),t))
return A.c8(t,r,A.bm(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahO,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.aca.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gJ(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eE(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ey,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.pa,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bs,C.d.gJ(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aB4.prototype={}
B.aEg.prototype={}
B.jl.prototype={
mt(d){var x=this.b,w=C.a.oA(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b1(x,w+1).toLowerCase())},
gaoF(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
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
baS(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jl(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cGg(d){return this.baS(null,d)},
aCR(d){return this.baS(d,null)}}
B.Uk.prototype={
R(){return new B.aCr(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aCr.prototype={
a_(){this.a1()
this.ad7()},
ad7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ad7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bn(u.a.c),$async$ad7)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOk(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ad7,w)},
ad8(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ad8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(s)),$async$ad8)
case 3:t=u.c
if(t!=null)t.I(y.q).f.S(D.eU_)
case 1:return A.h(v,w)}})
return A.i($async$ad8,w)},
Z3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Z3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anH(s.d,4),$async$Z3)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rQ(r,"ngmy_my_code_"+m+".png"),$async$Z3)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Z3,w)},
agR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9w("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agR,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.ja:C.pC,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lC
else if(q.e==null)x=A.av(new A.D(C.ew,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1V,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ahp,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mI,w,C.ky,new A.ev(A.p(p,A.pJ(p,p,!1,B.hAQ(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ky,A.B(A.a([A.E(A.ey(N.BL,C.TA,q.gc4V(),p),1),C.av,A.E(A.dk(C.yv,C.a7O,q.gc4W(),A.bl(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ey(M.a0m,D.fpv,q.gcrj(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.M7,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.Uo.prototype={
R(){return new B.aCu(new A.as(C.as,$.aw()),A.jO(!0,null,!0,!0,null,null,!1))}}
B.aCu.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.I6(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Z4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.I6(u.d.a.a)
if(t==null){u.m(new B.dPt(u))
x=1
break}u.m(new B.dPu(u))
s=u.a
r=s.c
x=3
return A.b(B.a6p(s.d,new B.dPv(u),t,r),$async$Z4)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPw(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Z4,w)},
a1f(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1f=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cm(r.a.d)){x=1
break}r.m(new B.dPx(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rk(r.a.c,q),$async$a1f)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPy(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahc(p,m,l,j,k),$async$a1f)
case 8:o=e
if(r.c!=null)r.m(new B.dPz(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPA(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPB(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1f,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adL:D.abC,h=j?D.aff:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acQ:C.aL
i=[i,e,h,g,f,j?C.fa:C.bV]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bK2,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ey,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fA,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1V,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ub(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhX()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.M1,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPC(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m1,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.L3(l.a.d,4)
m=A.C(new A.K(m,new B.dPD(x,new A.aFu(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.mn,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d6,p,C.N,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eOH)
else q.push(A.X(C.lj,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.dj(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iy,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bte,k,k,C.ah),1)
u=l.f?k:l.gcrk()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(M.a0m,D.fqu,u,A.dh(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc4X()
t=A.bl(C.aE,k,k,0,C.c,k,C.n9,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mB(new B.dPE(),A.v(A.a([e,new A.D(D.bsJ,A.v(A.a([s,C.N,i,C.ac,A.bG(l.f?C.rF:D.foU,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.XK,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhX.prototype={
ow(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h9(C.bw,v.length),C.aN)}}
B.Ul.prototype={
R(){return new B.aCs()}}
B.aCs.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.U$=x
v.P$=0
v=w.f
v===$&&A.c()
v.U$=x
v.P$=0
w.a2()},
ad9(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ad9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOl(r))
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
return A.b(B.a6u(p,m,n,o,C.a.i(l).length===0?null:l),$async$ad9)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.S(D.eTB)
s=[1]
x=4
break}p.I(y.q).f.S(D.eSe)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOm(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ad9,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.ja:C.pC,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fhz,s,s,s,1,s,!0),p=A.p(s,D.blf,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Go,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bQX,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bQS,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bR7,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc4Y()
u=A.bl(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d6,o,C.ac,x,C.ac,w,C.mI,A.bG(t.r?C.rF:C.aQZ,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abp.prototype={}
B.but.prototype={
a3X(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.ani()))
x=3
return A.b(B.QK(t,s),$async$a3X)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3X,w)},
gdd(){return this.a}}
B.N2.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YA.prototype={
R(){return new B.ayw(new A.as(C.as,$.aw()),A.jO(!0,null,!0,!0,null,null,!1))}}
B.ayw.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1w(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c53(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0D(d),u=x.a.c,t=u?C.i9:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ja:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.an8,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.anW,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ub(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bu7()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.F9,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aXU),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1u(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m1,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nv,new B.d1v(d),A.dh(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eI(w,C.K,new A.cS(Q.K_,A.c0(new A.D(C.xG,A.v(A.a([l,C.aQ,k,C.N,j,C.e3,i,C.e3,A.B(A.a([f,C.av,A.E(A.c0(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e6r,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc52(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NU,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.M9,C.d0,w,w,w)}}
B.bu7.prototype={
ow(d,e){return e.ak5(e.a.toUpperCase())}}
B.Um.prototype={
R(){return new B.aCt(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCt.prototype={
a_(){var x=this
x.a1()
x.tA()
x.w=A.dv(C.je,new B.dPr(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Uv()
this.a2()},
a07(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a07=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N1(u.a.c),$async$a07)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.As(u.a.c),$async$a07)
case 4:u.m(new s.dOP(u,e))
u.hY("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a07,w)},
tA(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N1(u.a.c),$async$tA)
case 3:t=e
x=4
return A.b(B.As(u.a.c),$async$tA)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dOQ(u,s))
if(t>0)u.hY("Received "+A.t(t)+" file(s) via My Code.")
u.N9(u.d)
B.Bn(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tA,w)},
N9(d){return this.bAI(d)},
bAI(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$N9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6z(r,u.a.c),$async$N9)
case 8:p=f
if(u.c==null){x=1
break}new B.dOo(u,r,p).$0()
u.c.ea()
case 7:if(!(C.a.a0(r.c,"video/")||r.mt(D.mA))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ut(r,u.a.c),$async$N9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.As(u.a.c),$async$N9)
case 12:u.m(new o.dOp(u,f))
case 1:return A.h(v,w)}})
return A.i($async$N9,w)},
Nw(d){return this.bGV(d)},
bGV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6z(d,u.a.c),$async$Nw)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOu(u,d,t))
x=6
return A.b(A.fJ(new A.fC(t)),$async$Nw)
case 6:u.hY("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fJ(new A.fC(r.toUpperCase())),$async$Nw)
case 7:u.hY("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nw,w)},
hY(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tB(d,e){return this.cBL(d,e)},
cBL(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPf(r,e))
u=3
x=6
return A.b(d.$0(),$async$tB)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPg(r))
$.eV.mo()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tB,w)},
gaU0(){var x=this.a
return x.f||x.r||x.w},
HO(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaU0()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c73(s,n,r,q,o,t),$async$HO)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hY("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fxG(o,u.a.c),$async$HO)
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
return A.b(B.CJ(s,o,r,q,n,t),$async$HO)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HO,w)},
a_b(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoz(u.a.c),$async$a_b)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hY("No organization portal found.")
x=1
break}t=J.a6(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a5(t,!1).c8(A.ea(new B.dOM(u,r,q),!1,null,y.H)),$async$a_b)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_b,w)},
a0i(d){return this.ckZ(d)},
ckY(){return this.a0i(1)},
ckZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaU0()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aow(u.a.c),$async$a0i)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0i,w)},
ab8(d,e,f){return this.bXo(d,e,f)},
bXo(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ab8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hY(e)
x=1
break}x=3
return A.b(u.tB(new B.dOJ(u,d,null,e,f),"Uploading\u2026"),$async$ab8)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ab8,w)},
bAQ(){B.hlN(!1,new B.dOs(this))
return},
cpX(){this.m(new B.dOU(this))},
axq(){var x=0,w=A.j(y.H),v=this
var $async$axq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAQ()
return A.h(null,w)}})
return A.i($async$axq,w)},
ab4(){var x=0,w=A.j(y.H),v=this
var $async$ab4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tB(new B.dOy(v),"Importing\u2026"),$async$ab4)
case 2:return A.h(null,w)}})
return A.i($async$ab4,w)},
RL(d){return this.cBb(d)},
cBb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mt(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.ea(new B.dPc(u,d),!1,null,y.H)),$async$RL)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mt(D.PP)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c8(A.ea(new B.dPd(u,d),!1,null,y.H)),$async$RL)
case 8:x=1
break
case 7:x=u.bY5(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c8(A.ea(new B.dPe(u,d),!1,null,y.H)),$async$RL)
case 11:x=1
break
case 10:u.hY("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
bY5(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oA(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cDw,C.a.b1(x,w+1).toLowerCase())},
aeB(d){return this.cbX(d)},
cbX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mt(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.ea(new B.dOK(u,d),!1,null,y.H)),$async$aeB)
case 5:x=1
break
case 4:u.m(new B.dOL(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aeB,w)},
R7(d){return this.csP(d)},
csP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hY("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p2(t,s.c,s.f),$async$R7)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tB(new B.dP5(u,d),"Preparing QR\u2026"),$async$R7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$R7,w)},
ahg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dP6(),A.U(t).k("K<1,n>")).fL(0)}t=u.d
s=A.U(t).k("a1<1>")
r=A.C(new A.a1(t,new B.dP7(q),s),s.k("J.E"))
if(r.length===0){u.hY("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.R7(r),$async$ahg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahg,w)},
ah9(d){return this.csl(d)},
csl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0D(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dP_(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ah9)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RL(d)
break
case"qr":u.R7(A.a([d],y.r))
break
case"send_my_code":u.ccz(A.a([d],y.r))
break
case"save":u.agv(d)
break
case"delete":u.IC(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ah9,w)},
X1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dOv(),A.U(t).k("K<1,n>")).fL(0)}t=u.d
s=A.U(t).k("a1<1>")
r=A.C(new A.a1(t,new B.dOw(q),s),s.k("J.E"))
if(r.length===0){u.hY("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p2(t,s.c,s.f),$async$X1)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tB(new B.dOx(u,r),"Preparing file\u2026"),$async$X1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X1,w)},
afH(d){return this.cjm(d)},
cjm(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hmv(d,!1),$async$afH)
case 3:s=f
r=s==null
q=B.a6w(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hY("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afH,w)},
aeH(){var x=0,w=A.j(y.H),v=this,u
var $async$aeH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fFh(u,v.a.c),$async$aeH)
case 2:return A.h(null,w)}})
return A.i($async$aeH,w)},
bAP(){B.hlN(!1,new B.dOr(this,null))
return},
IQ(d,e){return this.ccA(d,e)},
aZX(d){return this.IQ(null,d)},
ccz(d){return this.IQ(d,null)},
ccA(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IQ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a1<1>")
k=A.C(new A.a1(p,new B.dON(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.x1.c5().amD(!0,C.Zx,!1),$async$IQ)
case 10:r=g
if(r==null||J.cm(r.a)){x=1
break}x=11
return A.b(s.tB(new B.dOO(l,s,r),"Preparing\u2026"),$async$IQ)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hY("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hY("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCt(p,l,e,s.a.c),$async$IQ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hY("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IQ,w)},
I2(d){return this.bXb(d)},
bXb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$I2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hAP(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZX(t),$async$I2)
case 8:x=6
break
case 7:u.hY("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hY("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tB(new B.dOH(u,d),"Receiving video\u2026"),$async$I2)
case 11:x=1
break
case 10:x=12
return A.b(u.tB(new B.dOI(u,d),"Receiving\u2026"),$async$I2)
case 12:case 1:return A.h(v,w)}})
return A.i($async$I2,w)},
DZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CD()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afH(t),$async$DZ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.I2(s),$async$DZ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.ea(new B.dOS(u),!1,null,y.N)),$async$DZ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tA(),$async$DZ)
case 10:x=1
break
case 9:x=11
return A.b(u.I2(C.a.i(r)),$async$DZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DZ,w)},
agv(d){return this.cox(d)},
cox(d){var x=0,w=A.j(y.H),v=this
var $async$agv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tB(new B.dOR(v,d),"Saving\u2026"),$async$agv)
case 2:return A.h(null,w)}})
return A.i($async$agv,w)},
IC(d){return this.bJe(d)},
bJe(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l1(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IC)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c76(t),$async$IC)
case 6:case 5:s=d.a
x=7
return A.b(B.Ed(u.a.c,s),$async$IC)
case 7:u.r.W(0,s)
x=8
return A.b(u.tA(),$async$IC)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IC,w)},
ahm(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0D(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dPb(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahm)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeH()
break
case"import":u.ab4()
break}case 1:return A.h(v,w)}})
return A.i($async$ahm,w)},
c50(d){var x=d.c
if(C.a.a0(x,"video/")||d.mt(D.mA))return C.q_
if(C.a.a0(x,"image/")||d.mt(D.PP))return C.tS
if(C.a.t(x,"pdf"))return E.Nr
return D.akX},
B(d){var x,w,v=this,u=null,t=B.a0D(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gg,u,u,u,new B.dPm(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bKy,u,u,u,v.e?u:v.gccg(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcpW()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bEU:E.all,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0j,u,u,u,v.e?u:v.gc51(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o2,u,u,u,v.e?u:v.gb04(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bMf,u,u,u,v.e?u:new B.dPn(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lA(new B.dPo(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m0(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayt(C.jk,s,!0,t,w?u:v.gcsQ(),u),1)
x.push(new A.D(D.brw,A.mB(new B.dPp(),A.B(A.a([s,C.av,A.E(new B.ayt(C.vC,"Export",!1,t,w?u:v.gbMM(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iz,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcB(t,v.e?u:v.gb04(),u)
else s=A.k6(!0,u,u,new B.dPq(v,t),s,u,D.bro,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayt.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bl(C.aE,t,t,0,C.c,t,C.vk,t,new A.b7(s,C.Y),t,t,t)
return A.dk(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dh(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vk,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.ey(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bcB.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mB(new B.d1s(),new A.D(E.YC,A.v(A.a([A.mB(new B.d1t(),A.p(x,A.X(C.y0,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.id,x,x,new A.bo(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e3,A.dk(C.o2,D.ftV,this.d,A.bl(C.aE,x,x,x,C.c,x,C.Yx,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AR,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.abJ.prototype={
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
if(!o||i.mt(D.mA))p=D.da0
else{p=C.a.a0(p,"image/")||i.mt(D.PP)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoF()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mt(D.mA))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.E(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cb))
if(!(!o||i.mt(D.mA)))l.push(A.fPR(C.aE,!1,j,j,j,!1,j,j,new B.d1P(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.o0,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cb))
return A.mB(new B.d1Q(),new A.D(C.e5,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Y5,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.YC.prototype={
R(){return new B.ayy()},
gdd(){return this.c}}
B.ayy.prototype={
a_(){this.a1()
this.xE()},
q(){B.hB3(this.e)
this.a2()},
xE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rk(o.c,o.d),$async$xE)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hB6(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hB5(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d1M(s))
x=1
break}s.m(new B.d1N(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d1O(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xE,w)},
a1e(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rk(t.c,t.d),$async$a1e)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.eQH)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahc(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1e)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1e,w)},
bX4(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kn(u,C.A,v,new B.d1K(w,t),C.fW,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d1L(w),C.fW,C.du,!0,v,!1,v,v)
else return C.bI
return A.uk(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0D(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BM,u,u,u,v.gb3U(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DY
else{q=v.r
if(q!=null)t=new A.D(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.dk(C.BM,D.fd4,v.gb3U(),A.bl(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bX4()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yz.prototype={
R(){return new B.ayv(A.ai1(),C.bx,C.bx)},
gdd(){return this.c}}
B.ayv.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).ib(new B.d1p(v))
x.gcPa().ib(new B.d1q(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b30
x.ib(new B.d1r(v))
v.xE()},
xE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rk(p.c,p.d),$async$xE)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1i(s))
x=1
break}x=8
return A.b(s.d.BU(0,new A.a2K(r,s.a.d.c)),$async$xE)
case 8:if(s.c==null){x=1
break}s.m(new B.d1j(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1k(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xE,w)},
Z5(){var x=0,w=A.j(y.H),v=this,u
var $async$Z5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h3(0),$async$Z5)
case 5:x=3
break
case 4:x=6
return A.b(u.ig(0),$async$Z5)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Z5,w)},
aRU(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0D(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DY
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bFU,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NU,C.n),o,88,o,o,o,o,o,88)
t=A.kX(C.aE,o,o,m,0,new B.d1l(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRU(p.w)+" / "+p.aRU(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bl(C.aE,o,o,o,o,D.eNd,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.ya:C.iW,o,o,o,o,o)
x=A.v(A.a([u,C.ky,t,x,C.d6,A.dk(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc54(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.D(C.tF,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pg.prototype={
R(){return new B.ayB()},
gdd(){return this.c}}
B.ayB.prototype={
a_(){this.a1()
this.P6()},
P6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$P6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fS6(o.c,o.d,new B.d22(s)),$async$P6)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d23(s))
x=1
break}s.e=r
q=O.hXS(r)
if(q==null){s.m(new B.d24(s))
x=1
break}s.d=q
q.aN(0,s.gaZL())
x=8
return A.b(q.ia(0).cM(0,C.qW),$async$P6)
case 8:if(s.c==null){x=1
break}s.m(new B.d25(s))
x=9
return A.b(q.pQ(0),$async$P6)
case 9:q.tc(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d26(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P6,w)},
cay(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d27(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CF(0,x.gaZL())
w=x.d
if(w!=null)w.q()
B.i6F(x.e)
x.a2()},
adc(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ3(u.c,u.d),$async$adc)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adc,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0D(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.oR,t,t,t,u.gc4Z(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ih(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DY
else{q=u.r
if(q!=null)s=new A.D(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahv(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zX(s,t),A.aE(t,A.CU(A.p(t,A.X(q?I.ya:C.iW,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d29(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bI}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YE.prototype={
R(){return new B.ayz(new A.cs(null,y.A))}}
B.ayz.prototype={
gcBu(){var x,w,v=this.a
if(v.e!==D.R8)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcB9(){var x,w,v=this.a
if(v.e!==D.z4)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcBu()
if(x!=null){v.Q8(x)
v.e=A.dv(R.F1,new B.d1Z(v,x))}w=v.gcB9()
if(w!=null){v.Q7(w)
v.f=A.dv(C.fU,new B.d2_(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Q7(d){return this.chy(d)},
chy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Q7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoE(d),$async$Q7)
case 3:t=f
x=4
return A.b(B.c7p(d),$async$Q7)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d1R(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
Q8(d){return this.chz(d)},
chz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fFF(d),$async$Q8)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAn(t),$async$Q8)
case 4:if(u.c==null){x=1
break}u.m(new B.d1S(u))
u.c.I(y.q).f.S(D.aNX)
case 1:return A.h(v,w)}})
return A.i($async$Q8,w)},
gc15(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc5_(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a10(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a10=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CD()){t=u.c
if(t!=null)t.I(y.q).f.S(D.eTL)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c8(A.ea(new B.d1T(),!1,null,y.N)),$async$a10)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAn(s),$async$a10)
case 4:t=u.c
if(t!=null)t.I(y.q).f.S(D.aNX)
case 1:return A.h(v,w)}})
return A.i($async$a10,w)},
a92(d){return this.bGW(d)},
bGW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a92=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.d.aI(t,", "))),$async$a92)
case 3:if(d.e!=null){t=d.I(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
ada(d){return this.bGG(d)},
bGG(d){var x=0,w=A.j(y.H),v=this
var $async$ada=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fJ(new A.fC(v.a.c)),$async$ada)
case 2:if(d.e!=null)d.I(y.q).f.S(D.eR9)
return A.h(null,w)}})
return A.i($async$ada,w)},
a0W(d){return this.coz(d)},
coz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anH(s.d,4),$async$a0W)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rQ(r,"ngmy_doc_share_qr.png"),$async$a0W)
case 8:q=f
if(d.e!=null)d.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0W,w)},
gaV4(){var x,w=this.a
if(w.e!==D.Hs)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b1(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b1(x,13))
return null},
a9_(d){return this.bGP(d)},
bGP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaV4()
if(t==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9_)
case 3:if(d.e!=null)d.I(y.q).f.S(D.eSL)
case 1:return A.h(v,w)}})
return A.i($async$a9_,w)},
adb(){var x=0,w=A.j(y.H),v=this,u
var $async$adb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Uv(),$async$adb)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adb,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0D(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hs&&i!==D.R8&&i!==D.z4
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hs||t===D.R8||t===D.z4?l:A.aH(l,l,l,l,C.kV,l,l,l,m.gaXX(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pJ(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc15(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hs){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mo,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc5_(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gJ(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bQ1,D.fmb,new B.d1U(m,d),l)],p))}if(m.a.e===D.Hs&&m.gaV4()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bMz,D.fiU,new B.d1V(m,d),l)],p))
if(m.a.e===D.z4){x=(m.w?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.E0:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mo,l,l,l)],p))}if(m.a.e===D.R8){x=(m.r?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.E0:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mo,l,l,l),C.ac,A.dk(D.bIm,D.fpc,m.gcoX(),A.bl(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oh(i,A.c8(v,w,new A.D(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.ey(N.BL,C.TA,new B.d1W(m,d),l),1),C.av,A.E(A.dk(C.yv,C.a7O,new B.d1X(m,d),A.bl(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bG(C.zD,m.gaXX(),A.bl(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d1Y(),y.C)}}
B.abH.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pJ(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bG(C.zE,new B.d1h(d),x)],u),x,x,C.mR,v,x,x,x,x,D.fc5,x)}}
B.Yy.prototype={
R(){return new B.ayu(A.z2(C.xm,C.nC,C.u3))}}
B.ayu.prototype={
q(){this.d.q()
this.a2()},
aw2(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a5(x,!1).O(t)
return}}},
B(d){var x=null
return A.c8(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fjn,x,x,x,1,x,!0),C.w,A.z1(this.d,C.bS,this.gaw1()),x,!1,!1,x,x)}}
B.YF.prototype={
R(){return new B.ayA(A.z2(C.xm,C.nC,C.u3))},
gdd(){return this.c}}
B.ayA.prototype={
bY7(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
af3(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RJ("text/plain"),$async$af3)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.S(D.eTF)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$af3,w)},
a9O(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hmv(p,!0),$async$a9O)
case 3:t=e
p=t==null
s=B.a6w(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.S(D.eQh)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9O,w)},
q(){this.d.q()
this.a2()},
aw2(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bY7(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.amf,v,v,v,w.gbMk(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0q,v,v,v,w.gceY(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.r4:P.Na,v,v,v,v,v),v,v,v,new B.d21(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fq1,v,v,v,1,v,!0)
u=A.z1(w.d,C.bS,w.gaw1())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ec9],s),v),v,!1,!1,v,v)}}
B.bcC.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oB
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oB:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.YH,A.B(A.a([u,C.bf,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8T.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.O6.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WF.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.O5.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EH.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cik.prototype={}
B.EG.prototype={}
B.a8S.prototype={}
B.asY.prototype={}
B.WG.prototype={}
var z=a.updateTypes(["az<~>()","R(jl)","n(jl)","Um(Y)","~()","YB(Y)","H(H,jl)","Pg(Y)","~(lV)","cq(EG)","az<jl?>(@)","Uk(Y)","Uo(Y)","D(jl)","jl(@)","a4<n,@>(jl)","YA(Y)","Ul(Y)","YC(Y)","Yz(Y)","YE(Y)","abH(Y)","ai<jl>()","YF(Y)","abJ(Y,H)","Yy(Y)","a4<n,aC>(jl)","cq(WF)","cq(a8S)","az<cq>(EG)"])
B.cig.prototype={
$1(d){var x=this.a
x.x=D.aLd
x.y.L(0,D.aLd)},
$S:70}
B.cih.prototype={
$1(d){var x=this.a
x.x=D.aLc
x.y.L(0,D.aLc)},
$S:70}
B.cii.prototype={
$1(d){var x=this.a
x.ago(A.aO9(d.data)).bB(new B.cif(x),y.b)},
$S:70}
B.cif.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cij.prototype={
$1(d){},
$S:70}
B.cim.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hFP(d.channel))},
$S:15}
B.cin.prototype={
$1(d){},
$S:15}
B.cio.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hYU(w.iceConnectionState)
x.cx=w
if($.h_X())switch(w.a){case 0:x.cy=D.aLi
break
case 1:x.cy=D.aLj
break
case 3:x.cy=D.aLk
break
case 5:x.cy=D.aLg
break
case 6:x.cy=D.aLh
break
case 7:x.cy=D.a5A
break
default:break}},
$S:147}
B.cip.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hYV(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.ciq.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i88(w.signalingState)},
$S:147}
B.cir.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i6o(w.connectionState)},
$S:147}
B.cis.prototype={
$1(d){},
$S:147}
B.cit.prototype={
$1(d){},
$S:15}
B.fiz.prototype={
$1(d){var x=y.F.a(new A.rG([],[]).py(d.target.result,!1)),w=C.xn.t(x.objectStoreNames,"blobs")
if(!w)C.xj.Kp(x,"blobs")},
$S:180}
B.fF5.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vP.fb(this.b)
$.eV.mo()
this.c.$1(d)},
$S:441}
B.fF7.prototype={
$1(d){return this.a.$1(B.hOM(this.b,this.c))},
$S:34}
B.fF6.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fF4.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fFk.prototype={
$1(d){var x=this
return B.hc3(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fFl.prototype={
$1(d){var x=this
return B.hc3(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fkk.prototype={
$1(d){var x=this
return B.c70(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1A.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1x.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c70(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1z.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c70(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1y.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c70(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1C.prototype={
$4(d,e,f,g){var x=null
return A.jG(A.B(A.a([A.aH(x,x,x,x,D.bGY,x,x,x,new B.d1B(d),x,x,x,x,x,x),A.E(A.Es(D.PA,!0,x,C.a_t,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PA,x,g,C.ai8,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d1B.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fmj.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eE,y.o).w,t=this.a,s=t?C.i9:C.c,r=A.m(28),q=A.p(v,D.bly,C.f,v,v,D.aZA,v,v,v,v,D.ahZ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bL6,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.D(C.Fe,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dT(C.de,new B.fmh(d),v),1),C.av,A.E(A.bG(D.fhV,new B.fmi(p,x,d),A.bl(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LQ,v,v,v,v),v)},
$S:59}
B.fmh.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fmi.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.S(D.eRo)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aB4(v,x))},
$S:0}
B.fmN.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eE,y.o).w,u=x.a,t=u?C.i9:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.blo,C.f,w,w,D.b0_,w,w,w,w,D.ahZ,w,w,1/0),new A.D(C.Fe,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fX3(u,"Organization name",C.FF,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fX3(u,"Access code",C.ne,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fX3(u,"Member password",H.Gb,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fq6,new B.fmM(r,q,p,d),A.bl(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LQ,w,w,w,w),w)},
$S:59}
B.fmM.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.S(D.eRt)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEg(u,x,w))},
$S:0}
B.c6S.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a6(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cw(j,0,null):s.b.aQ(j)
u=4
x=7
return A.b(A.v9(p,null).cM(0,C.XJ),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bo(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c6Y.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6Z.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c7_.prototype={
$1(d){return d.b},
$S:z+2}
B.c6U.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6V.prototype={
$1(d){return d.b},
$S:z+2}
B.c6T.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c6W.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c6X.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fFi.prototype={
$1(d){return new B.Uk(this.a,null)},
$S:z+11}
B.fFj.prototype={
$1(d){return new B.Uo(this.a,this.b,this.c,null)},
$S:z+12}
B.dOk.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPt.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPu.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPv.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPs(x,d))},
$S:2}
B.dPs.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPw.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPx.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPy.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPz.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPA.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPB.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPE.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:104}
B.dPC.prototype={
$1(d){var x=this.a
return x.f?null:x.Z4()},
$S:2}
B.dPD.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mt(D.PP))s=C.tS
else s=C.a.a0(s,"video/")||d.mt(D.mA)?C.q_:D.akX
x=this.b.a
w=y.p
return new A.D(C.kN,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoF(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOl.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOm.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c71.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:90}
B.c72.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:90}
B.fFX.prototype={
$2(d,e){return e===this.a},
$S:286}
B.ffM.prototype={
$1(d){return J.k(d)},
$S:17}
B.fkw.prototype={
$1(d){var x=this.b
B.hML(C.Fs.ga5A(this.a)).bB(x.gcEz(x),y.H)},
$S:118}
B.fkx.prototype={
$1(d){return this.a.d5(0,null)},
$S:118}
B.fky.prototype={
$0(){return null},
$S:11}
B.c7g.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fkz.prototype={
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
u=J.k(u==null?new A.S(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jl(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fox.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fiZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fj_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7l.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mt(D.mA)},
$S:z+1}
B.fK2.prototype={
$1(d){return new B.YA(this.a,null)},
$S:z+16}
B.d1w.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fK()},
$S:8}
B.d1u.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d1v.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPr.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a07()},
$S:12}
B.dOP.prototype={
$0(){var x=J.bDx(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOQ.prototype={
$0(){var x=J.bDx(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOo.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOn(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCR(this.c)}},
$S:0}
B.dOn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOp.prototype={
$0(){var x=J.bDx(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOu.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOt(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCR(this.c)}},
$S:0}
B.dOt.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPf.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPg.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dOM.prototype={
$1(d){return new B.Ul(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOJ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HO(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Up(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tA(),$async$$0)
case 5:s=J.a6(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a0i(s.gM(t)),$async$$0)
case 8:case 7:r.hY(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOs.prototype={
$1(d){this.a.ab8(d,"No files selected.","Added")},
$S:441}
B.dOU.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dOT(),A.U(x).k("K<1,n>")))},
$S:0}
B.dOT.prototype={
$1(d){return d.a},
$S:z+2}
B.dOy.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x1.c5().cR7(C.Zx,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hY("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hY("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoD(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cm(l)){o.hY("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tA(),$async$$0)
case 9:o.hY("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPc.prototype={
$1(d){return new B.Pg(this.a.a.c,this.b,null)},
$S:z+7}
B.dPd.prototype={
$1(d){return new B.YC(this.a.a.c,this.b,null)},
$S:z+18}
B.dPe.prototype={
$1(d){return new B.Yz(this.a.a.c,this.b,null)},
$S:z+19}
B.dOK.prototype={
$1(d){return new B.Pg(this.a.a.c,this.b,null)},
$S:z+7}
B.dOL.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dP5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HO(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6y(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hY("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ckY(),$async$$0)
case 5:x=6
return A.b(p.tA(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dP1(p),r),new B.dP2(),r.k("K<ak.E,n>")).c_(0,new B.dP3())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.ea(new B.dP4(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p1(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Uv(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP1.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dP0(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dP0.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dP2.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dP3.prototype={
$1(d){return d.length!==0},
$S:3}
B.dP4.prototype={
$1(d){var x=this.a
return new B.YE(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dP6.prototype={
$1(d){return d.a},
$S:z+2}
B.dP7.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dP_.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoF(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mt(D.mA)?C.tU:C.oO
p=!x||p.mt(D.mA)?"Play video":"View"
return A.c0(A.bm(!0,new A.D(C.B2,A.v(A.a([q,o,t,C.aB,B.YD(!1,u,!1,w,p,new B.dOV(d),v),B.YD(!1,u,!1,C.jk,"Share via QR",new B.dOW(d),"Letters/numbers QR code"),B.YD(!1,u,!1,D.a_z,"Send to their Code",new B.dOX(d),"Enter someone else's personal code"),B.YD(!1,u,!1,C.hB,"Download / save",new B.dOY(d),v),C.am,B.YD(!1,u,!0,C.e6,"Delete",new B.dOZ(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kF,v,v,C.n),C.bd)},
$S:716}
B.dOV.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dOW.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dOX.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dOY.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dOZ.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dOv.prototype={
$1(d){return d.a},
$S:z+2}
B.dOw.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOx.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6A(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Ga(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p1(s.c,s.f),$async$$0)
case 4:u.hY(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOr.prototype={
$1(d){var x=this.a
x.tB(new B.dOq(x,d,this.b),"Preparing\u2026")},
$S:441}
B.dOq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hY("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Up(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cm(s)){t.hY("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCt(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hY("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dON.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dOO.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fS9(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOH.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.G7(new B.dOD(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hY("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOE(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOF(s))
case 5:x=8
return A.b(r.b.ih(0,C.EZ,new B.dOG()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gam(t)){s.hY("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tA(),$async$$0)
case 9:s.hY("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOD.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOA(x,d,e))},
$S:130}
B.dOA.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOE.prototype={
$1(d){return new B.abH(this.a.a,null)},
$S:z+21}
B.dOF.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOG.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dOI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.I6(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6o(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZX(B.I6(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoD(new B.dOB(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cm(r)){if(B.fS8(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hY(q)
x=1
break}x=10
return A.b(s.tA(),$async$$0)
case 10:o=J.cG(r)
p=o.eL(r,new B.dOC()).gM(0)
s.hY(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOB.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOz(x,d,e))},
$S:130}
B.dOz.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOC.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mt(D.mA)},
$S:z+1}
B.dOS.prototype={
$1(d){return new B.YF(this.a.a.c,null)},
$S:z+23}
B.dOR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZ3(u.a.c,v.b),$async$$0)
case 2:t.hY(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPb.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bm(!0,new A.D(C.B2,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kM,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YD(!0,w,!1,C.ne,"My Code",new B.dP8(d),"Your personal code & QR \u2014 others send docs to you"),B.YD(!1,w,!1,D.a_z,"Send to their Code",new B.dP9(this.a,d),"Enter someone else's 5-digit code + letter"),B.YD(!1,w,!1,S.yk,"Import backup",new B.dPa(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kF,x,x,C.n),C.bd)},
$S:716}
B.dP8.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dP9.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bAP()},
$S:0}
B.dPa.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dPo.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.If(D.PA,x,C.a_t,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gJ(D.PA).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:693}
B.dPm.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPn.prototype={
$0(){this.a.ahm()
return null},
$S:0}
B.dPp.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:104}
B.dPq.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abJ(e,w,v,this.b,x.e,x.c50(w),new B.dPi(x,w),new B.dPj(x,v,w),new B.dPk(x,w),new B.dPl(x,w),null)},
$S:z+24}
B.dPi.prototype={
$0(){this.a.aeB(this.b)
return null},
$S:0}
B.dPj.prototype={
$0(){var x=this.a
return x.m(new B.dPh(x,this.b,this.c))},
$S:0}
B.dPh.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dPk.prototype={
$0(){this.a.Nw(this.b)
return null},
$S:0}
B.dPl.prototype={
$0(){this.a.ah9(this.b)
return null},
$S:0}
B.d1s.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:104}
B.d1t.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:132}
B.d1Q.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:104}
B.d1P.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d1M.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d1N.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d1O.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d1K.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d1I(this.a),C.fW,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d1J(this.a))
return C.bI},
$S:129}
B.d1I.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1G(this.a))
return C.bI},
$S:198}
B.d1G.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1D(x))},
$S:8}
B.d1D.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1J.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1F(x))},
$S:8}
B.d1F.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1L.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1H(this.a))
return C.bI},
$S:198}
B.d1H.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1E(x))},
$S:8}
B.d1E.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1p.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1o(x,d))},
$S:1740}
B.d1o.prototype={
$0(){return this.a.f=this.b===C.up},
$S:0}
B.d1q.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1n(x,d))},
$S:8}
B.d1n.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1r.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1m(x,d))},
$S:8}
B.d1m.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1i.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1j.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1k.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1l.prototype={
$1(d){return this.a.d.Mw(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d22.prototype={
$0(){var x=this.a.a
return B.rk(x.c,x.d)},
$S:1741}
B.d23.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d24.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d25.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d26.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d27.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d29.prototype={
$0(){var x=this.a
x.m(new B.d28(x))},
$S:0}
B.d28.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h3(0)
else x.pQ(0)},
$S:0}
B.d1Z.prototype={
$1(d){return this.a.Q8(this.b)},
$S:12}
B.d2_.prototype={
$1(d){return this.a.Q7(this.b)},
$S:12}
B.d1R.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d1S.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d1T.prototype={
$1(d){return D.fQu},
$S:z+25}
B.d1Y.prototype={
$2(d,e){if(d)B.Uv()},
$S:121}
B.d1U.prototype={
$0(){return this.a.a92(this.b)},
$S:0}
B.d1V.prototype={
$0(){return this.a.a9_(this.b)},
$S:0}
B.d1W.prototype={
$0(){return this.a.ada(this.b)},
$S:0}
B.d1X.prototype={
$0(){return this.a.a0W(this.b)},
$S:0}
B.d1h.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d21.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pU(),$async$$0)
case 2:u.m(new B.d20(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d20.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7n.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mt(D.mA)},
$S:z+1}
B.c7o.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7m.prototype={
$2(d,e){return this.bib(d,e)},
bib(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Uw(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fo8.prototype={
$1(d){if(d===D.a5z&&(this.a.a.a&30)===0)this.a.fQ(0)},
$S:z+27}
B.fo9.prototype={
$0(){},
$S:11}
B.foH.prototype={
bjL(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fcV(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h7c(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjL(d,e)},
$S:543}
B.foG.prototype={
$1(d){var x=this
d.b=new B.foF(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.foF.prototype={
$1(d){return this.bjK(d)},
bjK(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZ4(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aG(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
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
return A.b(B.fcV(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6x(m),$async$$1)
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
x(v=B.ayx.prototype,"gcbT","PK",0)
x(v,"gccK","IR",0)
x(v,"gccf","xN",0)
x(v=B.aCr.prototype,"gc4V","ad8",0)
x(v,"gc4W","Z3",0)
x(v,"gcrj","agR",0)
x(v=B.aCu.prototype,"gc4X","Z4",0)
x(v,"gcrk","a1f",0)
x(B.aCs.prototype,"gc4Y","ad9",0)
x(B.ayw.prototype,"gc52","c53",4)
x(v=B.aCt.prototype,"gccg","a_b",0)
x(v,"gcpW","cpX",4)
x(v,"gb04","axq",0)
x(v,"gcsQ","ahg",0)
x(v,"gbMM","X1",0)
x(v,"gc51","DZ",0)
x(B.ayy.prototype,"gb3U","a1e",0)
x(B.ayv.prototype,"gc54","Z5",0)
x(v=B.ayB.prototype,"gaZL","cay",4)
x(v,"gc4Z","adc",0)
x(v=B.ayz.prototype,"gcoX","a10",0)
x(v,"gaXX","adb",0)
w(B.ayu.prototype,"gaw1","aw2",8)
x(v=B.ayA.prototype,"gceY","af3",0)
x(v,"gbMk","a9O",0)
w(v,"gaw1","aw2",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cik,B.a8S,B.asY,B.aB4,B.aEg,B.jl,B.abp,B.but,B.EG,B.WG])
w(B.cil,B.cik)
w(B.b3c,B.a8S)
x(A.hV,[B.cig,B.cih,B.cii,B.cif,B.cij,B.cim,B.cin,B.cio,B.cip,B.ciq,B.cir,B.cis,B.cit,B.fiz,B.fF5,B.fF7,B.fF6,B.fFk,B.fFl,B.fkk,B.d1x,B.d1z,B.d1y,B.d1C,B.fmj,B.fmN,B.c6S,B.c6Z,B.c7_,B.c6V,B.c6T,B.c6W,B.c6X,B.fFi,B.fFj,B.dPv,B.dPE,B.dPC,B.dPD,B.ffM,B.fkw,B.fkx,B.c7g,B.fkz,B.fox,B.fiZ,B.fj_,B.c7l,B.fK2,B.d1w,B.d1u,B.dPr,B.dOn,B.dOt,B.dOM,B.dOs,B.dOT,B.dPc,B.dPd,B.dPe,B.dOK,B.dP1,B.dP0,B.dP2,B.dP3,B.dP4,B.dP6,B.dP7,B.dP_,B.dOv,B.dOw,B.dOr,B.dON,B.dOE,B.dOC,B.dOS,B.dPb,B.dPo,B.dPp,B.d1s,B.d1t,B.d1Q,B.d1P,B.d1K,B.d1I,B.d1G,B.d1J,B.d1L,B.d1H,B.d1p,B.d1q,B.d1r,B.d1l,B.d1Z,B.d2_,B.d1T,B.c7n,B.c7o,B.fo8,B.foG,B.foF])
w(B.b3d,B.asY)
x(A.j7,[B.fF4,B.d1A,B.d1B,B.fmh,B.fmi,B.fmM,B.dOk,B.dPt,B.dPu,B.dPs,B.dPw,B.dPx,B.dPy,B.dPz,B.dPA,B.dPB,B.dOl,B.dOm,B.fky,B.d1v,B.dOP,B.dOQ,B.dOo,B.dOp,B.dOu,B.dPf,B.dPg,B.dOJ,B.dOU,B.dOy,B.dOL,B.dP5,B.dOV,B.dOW,B.dOX,B.dOY,B.dOZ,B.dOx,B.dOq,B.dOO,B.dOH,B.dOA,B.dOF,B.dOG,B.dOI,B.dOz,B.dOR,B.dP8,B.dP9,B.dPa,B.dPm,B.dPn,B.dPi,B.dPj,B.dPh,B.dPk,B.dPl,B.d1M,B.d1N,B.d1O,B.d1D,B.d1F,B.d1E,B.d1o,B.d1n,B.d1m,B.d1i,B.d1j,B.d1k,B.d22,B.d23,B.d24,B.d25,B.d26,B.d27,B.d29,B.d28,B.d1R,B.d1S,B.d1U,B.d1V,B.d1W,B.d1X,B.d1h,B.d21,B.d20,B.fo9])
x(A.m7,[B.abI,B.N2,B.a8T,B.O6,B.WF,B.O5,B.EH])
x(A.ag,[B.YB,B.Uk,B.Uo,B.Ul,B.YA,B.Um,B.YC,B.Yz,B.Pg,B.YE,B.Yy,B.YF])
x(A.ah,[B.ayx,B.aCr,B.aCu,B.aCs,B.ayw,B.aCt,B.ayy,B.ayv,B.ayB,B.ayz,B.ayu,B.ayA])
x(A.au,[B.aca,B.ayt,B.bcB,B.abJ,B.abH,B.bcC])
x(A.kj,[B.c6Y,B.c6U,B.c71,B.c72,B.fFX,B.dOD,B.dOB,B.dPq,B.d1Y,B.c7m,B.foH])
x(A.iQ,[B.bhX,B.bu7])})()
A.jW(b.typeUniverse,JSON.parse('{"b3c":{"a8S":[]},"b3d":{"asY":[]},"YB":{"ag":[],"r":[]},"ayx":{"ah":["YB"]},"aca":{"au":[],"r":[]},"Uk":{"ag":[],"r":[]},"Uo":{"ag":[],"r":[]},"aCr":{"ah":["Uk"]},"aCu":{"ah":["Uo"]},"bhX":{"iQ":[]},"Ul":{"ag":[],"r":[]},"aCs":{"ah":["Ul"]},"YA":{"ag":[],"r":[]},"Um":{"ag":[],"r":[]},"abJ":{"au":[],"r":[]},"YC":{"ag":[],"r":[]},"Yz":{"ag":[],"r":[]},"Pg":{"ag":[],"r":[]},"YE":{"ag":[],"r":[]},"abH":{"au":[],"r":[]},"Yy":{"ag":[],"r":[]},"YF":{"ag":[],"r":[]},"ayw":{"ah":["YA"]},"bu7":{"iQ":[]},"aCt":{"ah":["Um"]},"ayt":{"au":[],"r":[]},"bcB":{"au":[],"r":[]},"ayy":{"ah":["YC"]},"ayv":{"ah":["Yz"]},"ayB":{"ah":["Pg"]},"ayz":{"ah":["YE"]},"ayu":{"ah":["Yy"]},"ayA":{"ah":["YF"]},"bcC":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u2"),k:x("Lu()"),m:x("bk<n,n>"),F:x("qX"),g:x("az<jl?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jl>"),w:x("O<+file,name(lv,n)>"),u:x("O<cR>"),s:x("O<n>"),E:x("O<iQ>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jl>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iA"),e:x("ic2"),af:x("DW"),U:x("jl"),b:x("cq"),C:x("aC"),aK:x("vY"),ab:x("EG"),br:x("asY"),v:x("WG"),N:x("n"),X:x("bo<M>"),Q:x("lG"),D:x("dD"),aw:x("cx<n>"),cd:x("a1<a4<n,@>>"),c7:x("r"),ch:x("bX<ai<jl>>"),aW:x("bX<dD?>"),aY:x("bX<~>"),cx:x("abI"),b1:x("bg<ai<jl>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aB4"),bG:x("aEg"),q:x("mY"),B:x("pi<EG>"),c6:x("pi<a8T>"),y:x("R"),i:x("M"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jl>?"),aL:x("ai<@>?"),h:x("a4<n,@>?"),l:x("jl?"),R:x("aC?"),c:x("WG?"),d:x("+answerQr,transfer(n,az<ai<jl>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,N2,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("abp?"),bk:x("aB4?"),ag:x("aEg?"),dd:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aXU=new A.ay(C.aE,2,C.q,-1)
D.bUh=new A.a8(C.a3,C.a7,C.x,C.a1u,null,null)
D.aZA=new A.o(null,null,null,C.m8,null,D.bUh,C.n)
D.b0_=new A.o(null,null,null,C.m8,null,E.Go,C.n)
D.abC=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acQ=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adL=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aff=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fcY=new A.x("Your team portal",null,C.dm,null,null,null,null,null,null,null,null,null)
D.fr1=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Dd,null,null,null,null,null,null,null,null,null)
D.d2d=x([D.fcY,C.am,D.fr1],y.p)
D.blf=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d2d,null)
D.fvf=new A.x("Create your organization",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fhb=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dd,null,null,null,null,null,null,null,null,null)
D.dh9=x([D.fvf,C.am,D.fhb],y.p)
D.blo=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dh9,null)
D.frA=new A.x("Team Member sign-in",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fkY=new A.x("Enter the access code and password from your organization.",null,G.Dd,null,null,null,null,null,null,null,null,null)
D.df6=x([D.frA,C.am,D.fkY],y.p)
D.bly=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.df6,null)
D.bro=new A.Q(16,10,16,28)
D.brw=new A.Q(16,14,16,4)
D.bsJ=new A.Q(20,0,20,16)
D.bte=new A.Q(20,8,20,16)
D.ahZ=new A.Q(24,22,24,20)
D.a_z=new A.a_(63394,"MaterialIcons",!1)
D.akX=new A.a_(63515,"MaterialIcons",!1)
D.bEU=new A.a_(983813,"MaterialIcons",!1)
D.bC8=new A.a_(62867,"MaterialIcons",!1)
D.bFU=new A.ae(D.bC8,44,C.c,null,null,null)
D.bGY=new A.ae(C.pQ,null,C.ad,null,null,null)
D.bIm=new A.ae(C.iX,18,null,null,null,null)
D.bK2=new A.ae(D.a_z,26,C.c,null,null,null)
D.bKy=new A.ae(C.BE,null,null,null,null,null)
D.bL6=new A.ae(C.ym,null,null,null,null,null)
D.bMf=new A.ae(W.Np,null,null,null,null,null)
D.bMz=new A.ae(C.ho,16,null,null,null,null)
D.bQ1=new A.ae(C.r8,16,null,null,null,null)
D.bGa=new A.ae(C.ne,null,null,null,null,null)
D.bQS=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLE=new A.ae(C.FF,null,null,null,null,null)
D.bQX=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bLE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bGv=new A.ae(H.Gb,null,null,null,null,null)
D.bR7=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cE2=x([C.fa,C.aZ,C.aE],y.O)
D.bW9=new A.a8(C.ax,C.aC,C.x,D.cE2,null,null)
D.cDw=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PA=x([C.fa,C.aE],y.O)
D.PP=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mA=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.da0=x([C.pv,C.aE],y.O)
D.e0M={iceServers:0}
D.aFR={urls:0}
D.dkL=new A.bk(D.aFR,["stun:stun.l.google.com:19302"],y.m)
D.dkK=new A.bk(D.aFR,["stun:stun1.l.google.com:19302"],y.m)
D.cTO=x([D.dkL,D.dkK],A.ax("O<a4<n,n>>"))
D.dk4=new A.bk(D.e0M,[D.cTO],A.ax("bk<n,@>"))
D.Hs=new B.N2(0,"lanDirect")
D.R7=new B.N2(1,"cloudStash")
D.dvI=new B.N2(2,"inlineInstant")
D.R8=new B.N2(3,"webrtcLink")
D.z4=new B.N2(4,"videoCloud")
D.fr0=new A.x("Receive file",null,C.nu,null,null,null,null,null,null,null,null,null)
D.ctC=x([E.amD,C.ab,D.fr0],y.p)
D.eJd=new A.cn(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.ctC,null)
D.e6r=new A.D(C.cl,D.eJd,null)
D.f49=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a28,null,null,null)
D.fdv=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f49,null,C.L,null,null,null,null,null,null,null)
D.e5J=new A.D(C.B7,D.fdv,null)
D.b4e=new A.cr(C.A,null,null,D.e5J,null)
D.ec9=new A.cL(0,null,0,28,null,null,D.b4e,null)
D.ecs=new B.a8T(0,"RTCDataChannelConnecting")
D.aLc=new B.a8T(1,"RTCDataChannelOpen")
D.aLd=new B.a8T(3,"RTCDataChannelClosed")
D.ect=new B.EH(0,"RTCIceConnectionStateNew")
D.ecu=new B.EH(1,"RTCIceConnectionStateChecking")
D.ecv=new B.EH(2,"RTCIceConnectionStateCompleted")
D.ecw=new B.EH(3,"RTCIceConnectionStateConnected")
D.ecx=new B.EH(4,"RTCIceConnectionStateCount")
D.ecy=new B.EH(5,"RTCIceConnectionStateFailed")
D.ecz=new B.EH(6,"RTCIceConnectionStateDisconnected")
D.aLe=new B.EH(7,"RTCIceConnectionStateClosed")
D.aLf=new B.WF(0,"RTCIceGatheringStateNew")
D.ecA=new B.WF(1,"RTCIceGatheringStateGathering")
D.a5z=new B.WF(2,"RTCIceGatheringStateComplete")
D.a5A=new B.O5(0,"RTCPeerConnectionStateClosed")
D.aLg=new B.O5(1,"RTCPeerConnectionStateFailed")
D.aLh=new B.O5(2,"RTCPeerConnectionStateDisconnected")
D.aLi=new B.O5(3,"RTCPeerConnectionStateNew")
D.aLj=new B.O5(4,"RTCPeerConnectionStateConnecting")
D.aLk=new B.O5(5,"RTCPeerConnectionStateConnected")
D.ecB=new B.O6(0,"RTCSignalingStateStable")
D.ecC=new B.O6(1,"RTCSignalingStateHaveLocalOffer")
D.ecD=new B.O6(2,"RTCSignalingStateHaveRemoteOffer")
D.ecE=new B.O6(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ecF=new B.O6(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLl=new B.O6(5,"RTCSignalingStateClosed")
D.eNd=new A.ar(160,48)
D.b5r=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eOH=new A.a7(16,16,D.b5r,null)
D.fgB=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ7=new A.b1(D.fgB,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnV=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eQa=new A.b1(D.fnV,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fwh=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eQh=new A.b1(D.fwh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgc=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eQH=new A.b1(D.fgc,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frK=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNX=new A.b1(D.frK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ft7=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eR9=new A.b1(D.ft7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxG=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eRo=new A.b1(D.fxG,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvJ=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eRt=new A.b1(D.fvJ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fwT=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eSe=new A.b1(D.fwT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.feU=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eSL=new A.b1(D.feU,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fpG=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eT5=new A.b1(D.fpG,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fiK=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eTB=new A.b1(D.fiK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxM=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eTF=new A.b1(D.fxM,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ff9=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eTL=new A.b1(D.ff9,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fdR=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eU_=new A.b1(D.fdR,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faO=new A.x("NGMY DOC SHARE",null,C.aPe,null,null,null,null,null,null,null,null,null)
D.fc5=new A.x("Show this to sender",null,C.k7,null,null,null,null,null,null,null,null,null)
D.fd4=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new A.x("Organization settings",null,C.cx,null,null,null,null,null,null,null,null,null)
D.fhV=new A.x("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fiU=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fjn=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fmb=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.foU=new A.x("Send to their Doc Share",null,C.ns,null,null,null,null,null,null,null,null,null)
D.fpc=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fpv=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fq1=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fq6=new A.x("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fqu=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.ftC=new A.x("Share files & videos\nwith a scan.",null,C.aPf,null,null,null,null,null,null,null,null,null)
D.ftV=new A.x("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fQu=new B.Yy(null)
D.a8E=new B.abI(0,"docShare")
D.a8F=new B.abI(1,"gate")
D.U6=new B.abI(2,"gateNoIndividual")})();(function staticFields(){$.aMX=null
$.faH=function(){var x=y.N
return A.T(x,x)}()
$.FU=A.T(y.N,y.D)
$.afM=A.T(y.N,A.ax("lv"))
$.Qw=A.T(y.N,y.D)
$.fbe=A.T(y.N,A.ax("abp"))
$.c7f=A.T(y.S,A.ax("but"))
$.h7b=1
$.hUH=null
$.hUG=null
$.hM9=null
$.fXf=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"icx","hoo",()=>new B.cil())
x($,"ias","h_X",()=>C.a.t(A.bu(A.bu(A.bu(A.Gu(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["8acp1Mul4Fo4HEgTwuaAbLYYBts="]=a.current})($__dart_deferred_initializers__);