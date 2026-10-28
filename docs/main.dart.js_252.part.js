((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cgr:function cgr(){},
hyG(d){var x=null,w=new B.b27(d,D.e6R,new A.p9(x,x,y.c6),new A.p9(x,x,y.B))
w.buX(d)
return w},
b27:function b27(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cgm:function cgm(d){this.a=d},
cgn:function cgn(d){this.a=d},
cgo:function cgo(d){this.a=d},
cgl:function cgl(d){this.a=d},
cgp:function cgp(d){this.a=d},
hyH(d,e){var x=y.N
x=new B.b28(d,e,A.V(x,y.e),A.V(x,y.z))
x.buY(d,e)
return x},
b28:function b28(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgs:function cgs(d){this.a=d},
cgt:function cgt(d){this.a=d},
cgu:function cgu(d){this.a=d},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d){this.a=d},
cgx:function cgx(d){this.a=d},
cgy:function cgy(d){this.a=d},
cgz:function cgz(d){this.a=d},
fQ9(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.y9.Ld(x,"ngmy_doc_share_v1",new B.fd_(),1)},
hFb(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cp(d))
if(y.J.b(d))return new Uint8Array(A.cp(J.eV(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cp(A.BI(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
Qd(d,e){return B.hUi(d,e)},
hUi(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qd=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aM0
x=7
return A.b(o==null?$.aM0=B.fQ9():o,$async$Qd)
case 7:s=g
r=new Uint8Array(A.cp(e))
q=J.mv(s,"blobs","readwrite")
C.iz.lZ(J.mt(q,"blobs"),r,d)
x=8
return A.b(J.pi(q),$async$Qd)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
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
return A.i($async$Qd,w)},
Qc(d){return B.hUh(d)},
hUh(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aM0
x=7
return A.b(o==null?$.aM0=B.fQ9():o,$async$Qc)
case 7:s=f
r=J.mv(s,"blobs","readonly")
x=8
return A.b(C.iz.z2(J.mt(r,"blobs"),d),$async$Qc)
case 8:q=f
x=9
return A.b(J.pi(r),$async$Qc)
case 9:o=B.hFb(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
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
return A.i($async$Qc,w)},
afz(d){return B.hUg(d)},
hUg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aM0
x=7
return A.b(p==null?$.aM0=B.fQ9():p,$async$afz)
case 7:s=f
r=J.mv(s,"blobs","readwrite")
C.iz.F9(J.mt(r,"blobs"),d)
x=8
return A.b(J.pi(r),$async$afz)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afz,w)},
fd_:function fd_(){},
hHw(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmq(w,v))}return u},
heM(d,e){var x,w={},v=A.aUg("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fyI(w,v,e)
C.vp.xU(v,"change",new B.fyK(w,v,!1))
C.vp.xU(v,"cancel",new B.fyJ(w))
$.eP.m7()
v.click()
A.bN(C.aeN,new B.fyH(w),y.H)},
fyI:function fyI(d,e,f){this.a=d
this.b=e
this.c=f},
fyK:function fyK(d,e,f){this.a=d
this.b=e
this.c=f},
fyJ:function fyJ(d){this.a=d},
fyH:function fyH(d){this.a=d},
Ct(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ct=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd9()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSK()?3:4
break
case 3:x=5
return A.b(B.h9X(e,d,s,!0,!1,f,g,h,!1,i),$async$Ct)
case 5:x=1
break
case 4:x=6
return A.b(B.PR(d,s,f,g,h,i),$async$Ct)
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
return A.b(B.HG(s,d),$async$Ct)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f8r(s,d),$async$Ct)
case 14:x=12
return A.b(r.h9X(q,p,o,n,m,l,k,j,a1,i),$async$Ct)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).ci(A.em(new B.fyX(s,i,d,f,g,h),!1,null,y.H)),$async$Ct)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).ci(A.em(new B.fyY(s,i,d,f,g,h),!1,null,y.H)),$async$Ct)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ct,w)},
PR(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PR=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXV(e),$async$PR)
case 3:u=k
x=4
return A.b(B.anz(d,e,!1),$async$PR)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HG(e,d),$async$PR)
case 7:if(k){v=D.a7H
x=1
break}x=8
return A.b(B.TP(e),$async$PR)
case 8:v=t?D.Tq:D.a7I
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXT(d,e)){v=D.a7H
x=1
break}x=11
return A.b(B.TP(e),$async$PR)
case 11:v=t?D.Tq:D.a7I
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fLn(d,e)){v=D.a7H
x=1
break}x=14
return A.b(B.TP(e),$async$PR)
case 14:v=D.Tq
x=1
break
case 13:v=t?D.Tq:D.a7I
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PR,w)},
f8r(d,e){var x=0,w=A.j(y.y),v
var $async$f8r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXT(e,d)){v=!1
x=1
break}x=3
return A.b(B.aXV(d),$async$f8r)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8r,w)},
h9X(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).ci(A.em(new B.fek(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h57(d,e,f,g,h,i,j){return new B.Y1(e,j,d,g,h,i,f,null)},
fgg(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fgg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bY(C.K,null,new B.fgj(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fgg)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgg,w)},
fgL(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fgL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bY(C.K,null,new B.fgN(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fgL)
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
return A.i($async$fgL,w)},
fQi(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bq(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fri(d,e){var x=0,w=A.j(y.H),v
var $async$fri=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TP(e),$async$fri)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eH()
case 1:return A.h(v,w)}})
return A.i($async$fri,w)},
fyX:function fyX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyY:function fyY(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aaV:function aaV(d,e){this.a=d
this.b=e},
fek:function fek(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y1:function Y1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axC:function axC(){this.c=this.a=this.d=null},
d_e:function d_e(d,e){this.a=d
this.b=e},
d_b:function d_b(d){this.a=d},
d_d:function d_d(d){this.a=d},
d_c:function d_c(d){this.a=d},
d_g:function d_g(){},
d_f:function d_f(d){this.a=d},
abn:function abn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAb:function aAb(d,e){this.a=d
this.b=e},
aDn:function aDn(d,e,f){this.a=d
this.b=e
this.c=f},
fgj:function fgj(d,e,f){this.a=d
this.b=e
this.c=f},
fgh:function fgh(d){this.a=d},
fgi:function fgi(d,e,f){this.a=d
this.b=e
this.c=f},
fgN:function fgN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgM:function fgM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4X(d,e,f,g,h){return B.htB(d,e,f,g,h)},
htB(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c4X=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iI(r.dt(d,new B.c4Y(s,e,h,g,f,q),y.g),y.l),$async$c4X)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gU(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4X,w)},
aXQ(d,e,f,g,h){return B.htC(d,e,f,g,h)},
htC(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXQ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asR("GET",d)
o=A.fHV()
if(o==null)o=new A.KZ(A.a([],y.W))
x=7
return A.b(o.eR(0,s).cM(0,C.EC),$async$aXQ)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BO(),$async$aXQ)
case 8:q=j
if(J.ac(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B5(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
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
return A.i($async$aXQ,w)},
aXP(d){return B.htz(d)},
htz(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cM(0,C.nz),$async$aXP)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.iv(A.iu(p.e)).c8(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
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
return A.i($async$aXP,w)},
c4W(d){return B.htA(d)},
htA(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c4W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cM(0,C.pm),$async$c4W)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iv(A.iu(q.e)).c8(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a9(o)
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
return A.i($async$c4W,w)},
c4Y:function c4Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jf:function jf(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HE(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
htH(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HE(C.a.b_(u,v.length))}return null},
htI(d){var x=B.HE(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
htD(){var x,w=$.pf(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fT(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a5H(d){return B.htE(d)},
htE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f0(d,null,!1,C.bG),$async$a5H)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
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
return A.i($async$a5H,w)},
a5I(d,e){return B.htF(d,e)},
htF(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5I=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hA(d,e,!1,!1,C.cF,null),$async$a5I)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
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
return A.i($async$a5I,w)},
B4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$B4)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HE(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5J(r),$async$B4)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5H("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B4)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HE(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B4)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.htD()
x=14
return A.b(B.a5J(m),$async$B4)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5I("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B4)
case 15:k=f
x=16
return A.b(B.a5I("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B4)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B4)
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
return A.i($async$B4,w)},
a5J(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HE(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5H("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5J)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5J,w)},
a5K(d,e,f,g){return B.htJ(d,e,f,g)},
htJ(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5K=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gal(d)){v=!1
x=1
break}r=B.HE(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5J(r),$async$a5K)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.c53())>1048576||g.b8(d,new B.c54())){v=B.DW(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a5V("myCode",d,a0),$async$a5K)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ck(s)||J.ac(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ac(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.DW(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aXY(u,g.gM(d),a0),$async$a5K)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pf().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c55(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aXR(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5K)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5K,w)},
DW(d,e,f,g,h){return B.htG(d,e,f,g,h)},
htG(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DW=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$DW)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cH(a6,0,new B.c5_())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pf().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gai(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gU(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aJ(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.HI(a9,q)
a0=new A.Jz(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DW)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ac(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eT().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oI(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9c(a1.a,a4,"media",a1.d,a2).wy(m,n,new A.De(!0,q.c)),$async$DW)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DW)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOt(r),$async$DW)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c50(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aXR(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DW)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOt(r),$async$DW)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DW,w)},
aXR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5H(t),$async$aXR)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c4Z(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5I(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXR,w)},
My(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$My=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5H("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$My)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ck(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gU(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aXS(k,a0),$async$My)
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
return A.b(B.aXX(h),$async$My)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.TW(g,a0),$async$My)
case 10:f=a3
if(f!=null&&J.cw(f)){m+=J.ac(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("H.E")
e=A.B(new A.a2(r,new B.c51(),q),n)
d=A.B(new A.a2(r,new B.c52(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.da(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5I("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$My)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$My,w)},
aXS(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ck(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gU(u)
if(!r.b(p)){x=3
break}o=J.a8(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aN(o.h(p,"partCount"))
j=o==null?null:C.k.O(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hY4(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cr(l,m,"Received via My Code",t,e,i),$async$aXS)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOt(s),$async$aXS)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXS,w)},
c53:function c53(){},
c54:function c54(){},
c55:function c55(){},
c5_:function c5_(){},
c50:function c50(){},
c4Z:function c4Z(){},
c51:function c51(){},
c52:function c52(){},
fyU(d,e){var x=0,w=A.j(y.H)
var $async$fyU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).ci(A.em(new B.fyV(e),!1,null,y.H)),$async$fyU)
case 2:return A.h(null,w)}})
return A.i($async$fyU,w)},
bB4(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bB4=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).ci(A.em(new B.fyW(g,e,f),!1,null,y.y)),$async$bB4)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB4,w)},
fyV:function fyV(d){this.a=d},
fyW:function fyW(d,e,f){this.a=d
this.b=e
this.c=f},
TM:function TM(d,e){this.c=d
this.a=e},
aBy:function aBy(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dLj:function dLj(d,e){this.a=d
this.b=e},
TQ:function TQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBB:function aBB(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dMs:function dMs(d){this.a=d},
dMt:function dMt(d){this.a=d},
dMu:function dMu(d){this.a=d},
dMr:function dMr(d,e){this.a=d
this.b=e},
dMv:function dMv(d){this.a=d},
dMw:function dMw(d){this.a=d},
dMx:function dMx(d,e){this.a=d
this.b=e},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMz:function dMz(d,e){this.a=d
this.b=e},
dMA:function dMA(d){this.a=d},
dMD:function dMD(){},
dMB:function dMB(d){this.a=d},
dMC:function dMC(d,e){this.a=d
this.b=e},
bgJ:function bgJ(){},
TN:function TN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBz:function aBz(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dLk:function dLk(d){this.a=d},
dLl:function dLl(d){this.a=d},
fLo(d){var x=d.hI
if(x>=0)return C.o.O(x)
return 10},
htL(d){var x=d.kq
if(x>=0)return x
return 4.99},
htK(d){var x=d.l9,w=y.N
w=x.iN(x,new B.c57(),w,w)
return w},
h0d(d){var x=d.kr,w=y.N
w=x.iN(x,new B.c58(),w,w)
return w},
aXV(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aXV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aXV)
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
return A.i($async$aXV,w)},
a5M(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a5M)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a5M)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5M,w)},
TP(d){var x=0,w=A.j(y.H),v,u
var $async$TP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$TP)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$TP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$TP,w)},
fLn(d,e){var x,w,v
if(B.htL(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.htK(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ca(new A.S(Date.now(),0,!1))},
aXT(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h0d(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ca(new A.S(Date.now(),0,!1))},
h0e(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h0d(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ca(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ac())
d.kr=w},
anA(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$anA)
case 7:s=f
r=A.t(p)
r=A.f3(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$anA,w)},
anB(d){var x=0,w=A.j(y.H),v,u,t
var $async$anB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anA(d),$async$anB)
case 3:u=f
x=5
return A.b(A.az(),$async$anB)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anB,w)},
anz(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fLo(d)
if(u<=0){v=!1
x=1
break}if(B.fLn(d,e)){v=!1
x=1
break}x=3
return A.b(B.anA(e),$async$anz)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anz,w)},
aXU(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HG(e,d),$async$aXU)
case 3:if(g){v=-1
x=1
break}u=B.fLo(d)
if(u<=0){v=-1
x=1
break}if(B.fLn(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anA(e),$async$aXU)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXU,w)},
c5a(d,e,f){var x=0,w=A.j(y.y),v
var $async$c5a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HG(e,d),$async$c5a)
case 3:if(h){v=!1
x=1
break}v=B.anz(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5a,w)},
c59(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c59=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd9()
x=3
return A.b(B.c5a(d,u,i.gSK()),$async$c59)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c59,w)},
a5L(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5L=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd9()
if(i.gSK()){v=!0
x=1
break}if(B.aXT(d,u)){v=!0
x=1
break}x=5
return A.b(A.l8(u,C.QW),$async$a5L)
case 5:x=k?3:4
break
case 3:B.h0e(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5L)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kL(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.QW,"Doc Share for Organizations"),$async$a5L)
case 7:if(!k){v=!1
x=1
break}B.h0e(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5L)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5L,w)},
c57:function c57(){},
c58:function c58(){},
fzx(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fzx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fzx)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f59.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.f59.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzx,w)},
i_g(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f59.bn($.f59,new B.fzz(d))},
fzz:function fzz(d){this.a=d},
f6x(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f6x=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mY(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jn,null,y.H),$async$f6x)
case 3:C.zs.f5(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eP.m7()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6x,w)},
aeq(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f5H.n(0,d,new B.aaC(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aeq)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aeq)
case 2:return A.h(null,w)}})
return A.i($async$aeq,w)},
aek(d){return B.hJm(d)},
hJm(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aek=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f5H.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aek)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.fac(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaC(r)
$.f5H.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aek,w)},
PH(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cp(e))
$.Fx.n(0,d,u)
x=3
return A.b(B.Qd(d,u),$async$PH)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PH,w)},
aMl(d){return B.hJk(d)},
hJk(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Fx.h(0,d)
if(n!=null&&!C.aG.gal(n)){v=n
x=1
break}x=3
return A.b(B.Qc(d),$async$aMl)
case 3:p=f
if(p!=null&&!C.aG.gal(p)){$.Fx.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aMl)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cB.aI(r)
x=!J.ck(q)?9:10
break
case 9:B.PH(d,q)
x=11
return A.b(J.hJ(s,d),$async$aMl)
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
return A.i($async$aMl,w)},
hFx(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.cp(J.eV(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.cp(A.BI(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
return A.fe(null,y.K)},
a0q(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.few(r,t),!1,s)
A.fG(r,"error",new B.fex(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i6(0,C.La,new B.fey())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0q,w)},
aMF(d,e,f){return B.hLB(d,e,f)},
hLB(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMF=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0q(i),$async$aMF)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ac(j)
x=11
return A.b(B.Qd(o,p),$async$aMF)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ac(j)===0){x=1
break}x=12
return A.b(B.aeq(k,j,s),$async$aMF)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a9(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMF,w)},
aME(d,e,f){return B.hLA(d,e,f)},
hLA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aME=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMF(d,e,f),$async$aME)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0q(f),$async$aME)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Fx.n(0,s,r)
$.PY.n(0,s,r)
x=11
return A.b(B.PH(s,r),$async$aME)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a9(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aME,w)},
B5(d,e,f,g,h,i){return B.htU(d,e,f,g,h,i)},
htU(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B5=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jf(p,q,o,n,new A.S(Date.now(),0,!1).a5().ac(),a0,f,B.aY0(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PH(s,d),$async$B5)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$B5)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcu().aI(d)),$async$B5)
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
return A.b(B.A7(e),$async$B5)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FI(e,j),$async$B5)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B5,w)},
TR(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TR=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A7(d),$async$TR)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cI.aB(99999)
n=p.b
l=o.type
l.toString
k=B.h0g(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a5().ac()
i=new B.jf(m,n,k,l,j,"From folder",null,B.aY0(),null)
$.aeT.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0q(o),$async$TR)
case 7:g=a1
x=g!=null&&!C.aG.gal(g)?8:10
break
case 8:$.Fx.n(0,h,g)
$.PY.n(0,h,g)
B.PH(h,g)
x=9
break
case 10:x=11
return A.b(B.aME(d,m,o),$async$TR)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FI(d,t),$async$TR)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TR,w)},
fLs(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fLs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h0g(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HH(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gal(s)){v=B.B5(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLs,w)},
HH(d,e,f,g,h,i){return B.htT(d,e,f,g,h,i)},
htT(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HH=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Jz(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HH)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.fZ(n,m)
o+=J.ac(m)
case 9:if(!(J.ac(n)>=1048576)){x=10
break}l=new Uint8Array(A.cp(J.QL(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kw(0,1048576,J.ac(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qd(k,l),$async$HH)
case 11:J.cf(q,k);++p
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
return A.b(j.a9(0),$async$HH)
case 12:x=s.pop()
break
case 5:x=J.ac(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qd(k,new Uint8Array(A.cp(n))),$async$HH)
case 15:J.cf(q,k)
case 14:if(J.ac(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeq(r,q,g),$async$HH)
case 16:f=new B.jf(i,a1,a0,g,new A.S(Date.now(),0,!1).a5().ac(),a2,null,B.aY0(),null)
x=17
return A.b(B.A7(d),$async$HH)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FI(d,e),$async$HH)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HH,w)},
TT(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TT=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aeT.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0q(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aek(s),$async$TT)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qc(u[o]),$async$TT)
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
v=A.BI(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.PY.h(0,s)
if(i==null)i=$.Fx.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.r9(d,e),$async$TT)
case 12:i=a0
if(i!=null&&!C.aG.gal(i))$.PY.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BI(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TT,w)},
h0g(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gam(x):""
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
r9(d,e){return B.htV(d,e)},
htV(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$r9=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.PY.h(0,f)
if(e==null)e=$.Fx.h(0,f)
if(e!=null&&!C.aG.gal(e)){v=e
x=1
break}s=$.aeT.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0q(s),$async$r9)
case 9:r=a3
if(r!=null&&!C.aG.gal(r)){$.Fx.n(0,f,r)
$.PY.n(0,f,r)
B.PH(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a9(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aek(f),$async$r9)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awq(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qc(g[l]),$async$r9)
case 16:k=a3
if(k!=null&&!C.aG.gal(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.ams()
if(!C.aG.gal(r)){$.Fx.n(0,f,r)
$.PY.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMl(f),$async$r9)
case 17:j=a3
if(j!=null&&!C.aG.gal(j)){$.PY.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.TT(a0,a1,0,g),$async$r9)
case 20:i=a3
if(i!=null&&!C.aG.gal(i)){h=new Uint8Array(A.cp(i))
$.Fx.n(0,f,h)
$.PY.n(0,f,h)
B.PH(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$r9,w)},
htY(d){var x,w,v=$.aeT.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
htZ(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
htW(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anH(d,e,f,g,h){return B.htX(d,e,f,g,h)},
htX(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anH=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aeT.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0q(s),$async$anH)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.r9(g,e),$async$anH)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ac(r)/2|0,J.ac(r))
n=$.eT().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i0(d).wy(h,r,new A.De(!0,e.c)),$async$anH)
case 12:f.$2(J.ac(r),J.ac(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
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
return A.i($async$anH,w)},
h0i(d,e,f,g,h){var x,w,v,u,t=$.h0h
$.h0h=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c5l.n(0,t,new B.bt5(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awq(u)))
return t},
fLt(d){var x=0,w=A.j(y.H)
var $async$fLt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fLt,w)},
HI(d,e){var $async$HI=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aeT.h(0,h)
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
return A.pQ(B.TT(d,e,p,o<q?o:q),$async$HI,w)
case 8:n=a1
x=n!=null&&!C.aG.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pQ(A.F6(n),$async$HI,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pQ(B.aek("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HI,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pQ(B.Qc(h[l]),$async$HI,w)
case 18:k=a1
x=k!=null&&!C.aG.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pQ(A.F6(k),$async$HI,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pQ(B.r9(d,e),$async$HI,w)
case 22:j=a1
x=j!=null&&!C.aG.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pQ(A.F6(A.BI(j,p,o<i?o:i)),$async$HI,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pQ(null,0,w)
case 2:return A.pQ(t.at(-1),1,w)}})
var x=0,w=A.h8Q($async$HI,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.haE(w)},
aY2(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aY2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c5l.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3j(),$async$aY2)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY2,w)},
TS(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5l.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3j(),$async$TS)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeq(r.c,u,r.z),$async$TS)
case 4:t=new B.jf(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aY0(),null)
u=r.a
x=5
return A.b(B.A7(u),$async$TS)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FI(u,s),$async$TS)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TS,w)},
a5S(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5l.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afz(u[s]),$async$a5S)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a5S,w)},
c5n(d,e,f){var x=0,w=A.j(y.H)
var $async$c5n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.by7(d,e,f),$async$c5n)
case 2:return A.h(null,w)}})
return A.i($async$c5n,w)},
c5o(d,e,f){var x=0,w=A.j(y.H)
var $async$c5o=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.by8(d,e,f),$async$c5o)
case 2:return A.h(null,w)}})
return A.i($async$c5o,w)},
DX(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$DX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A7(d),$async$DX)
case 2:p=g
J.nf(p,new B.c5m(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Fx.W(0,v)
$.aeT.W(0,e)
x=3
return A.b(B.aek(v),$async$DX)
case 3:u=g
$.f5H.W(0,v)
x=4
return A.b(A.az(),$async$DX)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$DX)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$DX)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afz(s[q]),$async$DX)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afz(v),$async$DX)
case 13:x=14
return A.b(B.FI(d,p),$async$DX)
case 14:return A.h(null,w)}})
return A.i($async$DX,w)},
aY1(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aY1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.r9(d,e),$async$aY1)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f6x(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY1,w)},
A7(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$A7)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fez(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A7,w)},
FI(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FI)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fiu(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FI)
case 3:return A.h(null,w)}})
return A.i($async$FI,w)},
by7(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$by7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A7(d),$async$by7)
case 3:u=h
t=J.cE(u)
s=t.be(u,new B.fdd(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aBR(f))
x=4
return A.b(B.FI(d,u),$async$by7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$by7,w)},
by8(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$by8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A7(d),$async$by8)
case 3:u=h
t=J.cE(u)
s=t.be(u,new B.fde(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cD5(f))
x=4
return A.b(B.FI(d,u),$async$by8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$by8,w)},
aaC:function aaC(d){this.a=d},
fac:function fac(){},
few:function few(d,e){this.a=d
this.b=e},
fex:function fex(d){this.a=d},
fey:function fey(){},
c5m:function c5m(d){this.a=d},
bt5:function bt5(d,e,f,g,h,i,j,k,l){var _=this
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
fez:function fez(){},
fiu:function fiu(){},
fdd:function fdd(d){this.a=d},
fde:function fde(d){this.a=d},
a5T(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5r())?3:4
break
case 3:x=5
return A.b(B.aY3(d,e),$async$a5T)
case 5:u=g
if(u!=null){t=u.c
B.MA(d,u.b,e,t)}v=u
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
return A.b(B.aXZ(s),$async$a5T)
case 10:case 9:if(g){v=new A.P4(1,D.Qz,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.TU(d,e),$async$a5T)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.TZ(!0,!0,d,e),$async$a5T)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.MA(d,D.yI,e,t)
v=new A.P4(p,D.yI,t)
x=1
break}v=B.c5q(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5T,w)},
TU(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$TU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a5V(null,d,e),$async$TU)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ck(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ac(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aXY(p,d.length,e),$async$TU)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5o(e,C.d.gL(d).a,r.b),$async$TU)
case 7:case 6:q=r.a
x=8
return A.b(B.MA(d,D.Qz,e,q),$async$TU)
case 8:v=new A.P4(d.length,D.Qz,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TU,w)},
TV(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mc(D.mk)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5U(d,e),$async$TV)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c5j(s,d,e,t),$async$TV)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aXZ(t),$async$TV)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.r9(e,d),$async$TV)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.TU(A.a([d],y.r),e),$async$TV)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TV,w)},
TX(){var x=0,w=A.j(y.H)
var $async$TX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fLm(),$async$TX)
case 2:x=3
return A.b(B.aOK(),$async$TX)
case 3:return A.h(null,w)}})
return A.i($async$TX,w)},
a5U(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aY0()
x=3
return A.b(B.c5n(e,d.a,u),$async$a5U)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5U,w)},
MA(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$MA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Qz&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a5U(p,f),$async$MA)
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
return A.b(B.c5i(o,p,u,f),$async$MA)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c5j(o,p,f,t),$async$MA)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5h(o,u,p,f),$async$MA)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$MA,w)},
aY3(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aY3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5p(e,d),$async$aY3)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.TZ(!1,!0,d,e),$async$aY3)
case 4:u=g
if(u!=null){t=u.b
v=new A.P4(u.a,D.yI,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY3,w)},
c5p(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TT(d,s,0,1),$async$c5p)
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
return A.i($async$c5p,w)},
c5q(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5V(null,d,e),$async$c5q)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h0f(u)
if(t.length>800){v=null
x=1
break}v=new A.P4(d.length,D.dqu,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5q,w)},
anI(d,e,f){return B.hu1(d,e,f)},
hu1(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anI=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mu(g,1)
x=B.fLr(g)?3:4
break
case 3:x=5
return A.b(B.c5k(g),$async$anI)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mu(g,13))
try{k=B.DY(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a9(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mu(g,13))
u=9
x=12
return A.b(B.aXX(q),$async$anI)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TW(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a9(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fLq(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TW(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HJ(C.a.i(J.mu(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HJ(C.a.i(J.mu(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HJ(h,d,a0)
x=1
break}if(J.eY(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.TW(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anI,w)},
HJ(d,e,f){return B.hu_(d,e,f)},
hu_(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HJ=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cv(A.t(s)+"/manifest.json",0,null)
q=A.cv(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aXP(r),$async$HJ)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXP(A.cv(s,0,null)),$async$HJ)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c4X(o,r,a1,n,a2),$async$HJ)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c4W(q),$async$HJ)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.TW(l,a2),$async$HJ)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ck(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a9(d)
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
return A.i($async$HJ,w)},
a5V(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a5V=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.r9(f,r),$async$a5V)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcu().aI(q)],t,s))
x=3
break
case 4:u=A.V(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a5().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5V,w)},
TW(d,e){return B.hu0(d,e)},
hu0(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TW=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
o=J.y(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gU(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ac(j)===0){x=7
break}i=C.cB.aI(j)
d=J.ac(q)!==0?q:null
x=9
return A.b(B.B5(i,a3,d,k,l,o),$async$TW)
case 9:h=a5
if(h!=null)J.cf(n,h)
x=7
break
case 8:f=J.ac(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a9(a1)
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
return A.i($async$TW,w)},
Mz:function Mz(d,e){this.a=d
this.b=e},
c5r:function c5r(){},
a00(d){var x=A.M(d).ax.a===C.H,w=x?D.acx:D.aaB,v=x?D.ae_:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.abK:C.aL
return new A.aEB([w,s,v,u,t,x?C.f6:C.bT])},
hft(d,e){var x=e?C.w.j(0.72):C.aW
return A.c9(null,x,!0,null,new B.fDB(e),d,null,!0,!0,y.N)},
c56(d,e,f,g,h,i,j,k,l){return new B.TO(e,l,d,f,k,j,g,h,i,null)},
Y3(d,e,f,g,h,i,j){return new B.bbq(g,h,j,e,i,d,f,null)},
fDB:function fDB(d){this.a=d},
Y0:function Y0(d,e){this.c=d
this.a=e},
axB:function axB(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_a:function d_a(d){this.a=d},
d_8:function d_8(d){this.a=d},
d_9:function d_9(d){this.a=d},
bsK:function bsK(){},
TO:function TO(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBA:function aBA(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dMq:function dMq(d){this.a=d},
dLO:function dLO(d,e){this.a=d
this.b=e},
dLP:function dLP(d,e){this.a=d
this.b=e},
dLn:function dLn(d,e,f){this.a=d
this.b=e
this.c=f},
dLm:function dLm(d){this.a=d},
dLo:function dLo(d,e){this.a=d
this.b=e},
dLt:function dLt(d,e,f){this.a=d
this.b=e
this.c=f},
dLs:function dLs(d){this.a=d},
dMe:function dMe(d,e){this.a=d
this.b=e},
dMf:function dMf(d){this.a=d},
dLL:function dLL(d,e,f){this.a=d
this.b=e
this.c=f},
dLI:function dLI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLr:function dLr(d){this.a=d},
dLT:function dLT(d){this.a=d},
dLS:function dLS(){},
dLx:function dLx(d){this.a=d},
dMb:function dMb(d,e){this.a=d
this.b=e},
dMc:function dMc(d,e){this.a=d
this.b=e},
dMd:function dMd(d,e){this.a=d
this.b=e},
dLJ:function dLJ(d,e){this.a=d
this.b=e},
dLK:function dLK(d,e){this.a=d
this.b=e},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM0:function dM0(d){this.a=d},
dM_:function dM_(d){this.a=d},
dM1:function dM1(){},
dM2:function dM2(){},
dM3:function dM3(d,e){this.a=d
this.b=e},
dM5:function dM5(){},
dM6:function dM6(d){this.a=d},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dLU:function dLU(d){this.a=d},
dLV:function dLV(d){this.a=d},
dLW:function dLW(d){this.a=d},
dLX:function dLX(d){this.a=d},
dLY:function dLY(d){this.a=d},
dLu:function dLu(){},
dLv:function dLv(d){this.a=d},
dLw:function dLw(d,e){this.a=d
this.b=e},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLp:function dLp(d,e,f){this.a=d
this.b=e
this.c=f},
dLM:function dLM(d){this.a=d},
dLN:function dLN(d,e,f){this.a=d
this.b=e
this.c=f},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLC:function dLC(d){this.a=d},
dLz:function dLz(d,e,f){this.a=d
this.b=e
this.c=f},
dLD:function dLD(d){this.a=d},
dLE:function dLE(d){this.a=d},
dLF:function dLF(){},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLA:function dLA(d){this.a=d},
dLy:function dLy(d,e,f){this.a=d
this.b=e
this.c=f},
dLB:function dLB(){},
dLR:function dLR(d){this.a=d},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dMa:function dMa(d,e){this.a=d
this.b=e},
dM7:function dM7(d){this.a=d},
dM8:function dM8(d,e){this.a=d
this.b=e},
dM9:function dM9(d){this.a=d},
dMn:function dMn(d){this.a=d},
dMl:function dMl(d){this.a=d},
dMm:function dMm(d){this.a=d},
dMo:function dMo(){},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMi:function dMi(d,e,f){this.a=d
this.b=e
this.c=f},
dMg:function dMg(d,e,f){this.a=d
this.b=e
this.c=f},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMk:function dMk(d,e){this.a=d
this.b=e},
axy:function axy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbp:function bbp(d,e,f){this.c=d
this.d=e
this.a=f},
d_6:function d_6(){},
d_7:function d_7(){},
aaW:function aaW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_u:function d_u(){},
d_t:function d_t(d){this.a=d},
Y2:function Y2(d,e,f){this.c=d
this.d=e
this.a=f},
axD:function axD(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_q:function d_q(d){this.a=d},
d_r:function d_r(d,e,f){this.a=d
this.b=e
this.c=f},
d_s:function d_s(d,e){this.a=d
this.b=e},
d_o:function d_o(d,e){this.a=d
this.b=e},
d_m:function d_m(d){this.a=d},
d_k:function d_k(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_n:function d_n(d){this.a=d},
d_j:function d_j(d){this.a=d},
d_p:function d_p(d){this.a=d},
d_l:function d_l(d){this.a=d},
d_i:function d_i(d){this.a=d},
Y_:function Y_(d,e,f){this.c=d
this.d=e
this.a=f},
axA:function axA(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d_3:function d_3(d){this.a=d},
d_2:function d_2(d,e){this.a=d
this.b=e},
d_4:function d_4(d){this.a=d},
d_1:function d_1(d,e){this.a=d
this.b=e},
d_5:function d_5(d){this.a=d},
d_0:function d_0(d,e){this.a=d
this.b=e},
cZX:function cZX(d){this.a=d},
cZY:function cZY(d){this.a=d},
cZZ:function cZZ(d,e){this.a=d
this.b=e},
d__:function d__(d){this.a=d},
OI:function OI(d,e,f){this.c=d
this.d=e
this.a=f},
axG:function axG(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d_H:function d_H(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_J:function d_J(d){this.a=d},
d_K:function d_K(d){this.a=d},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_M:function d_M(d){this.a=d},
d_O:function d_O(d){this.a=d},
d_N:function d_N(d){this.a=d},
Y4:function Y4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axE:function axE(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d_D:function d_D(d,e){this.a=d
this.b=e},
d_E:function d_E(d,e){this.a=d
this.b=e},
d_v:function d_v(d,e,f){this.a=d
this.b=e
this.c=f},
d_w:function d_w(d){this.a=d},
d_x:function d_x(){},
d_C:function d_C(){},
d_y:function d_y(d,e){this.a=d
this.b=e},
d_z:function d_z(d,e){this.a=d
this.b=e},
d_A:function d_A(d,e){this.a=d
this.b=e},
d_B:function d_B(d,e){this.a=d
this.b=e},
aaU:function aaU(d,e){this.c=d
this.a=e},
cZW:function cZW(d){this.a=d},
XZ:function XZ(d){this.a=d},
axz:function axz(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Y5:function Y5(d,e){this.c=d
this.a=e},
axF:function axF(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d_G:function d_G(d){this.a=d},
d_F:function d_F(d){this.a=d},
bbq:function bbq(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hu2(){var x,w=$.pf(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fT(v)},
MB(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MB=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$MB)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MB)
case 8:s=e
if(s==null){v=A.V(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.V(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$MB,w)},
a5W(d){return B.hu3(d)},
hu3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a5W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5W)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hA("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$a5W)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a9(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5W,w)},
TY(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$TY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MB(),$async$TY)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dV(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,d,t)
x=4
return A.b(B.a5W(s),$async$TY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TY,w)},
TZ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$TZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c0(),$async$TZ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c5t(),t),t.k("H.E"))}if(u.length===0){v=null
x=1
break}s=B.hu2()
t=A.T(u).k("J<1,a4<n,aC>>")
r=A.B(new A.J(u,new B.c5u(s),t),t.k("aj.E"))
x=6
return A.b(B.MB(),$async$TZ)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a5W(q),$async$TZ)
case 7:x=8
return A.b(B.a5X(r,u,g,s),$async$TZ)
case 8:v=new A.bmS(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TZ,w)},
anJ(d){var x=0,w=A.j(y.y),v,u,t
var $async$anJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MB(),$async$anJ)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anJ,w)},
c5v(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MB(),$async$c5v)
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
return A.i($async$c5v,w)},
a5X(d,e,f,g){return B.hu4(d,e,f,g)},
hu4(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5X=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ac(q)===0){x=8
break}x=10
return A.b(B.anH("media",r,new B.c5s(s,e,g),f,q),$async$a5X)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.TY(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a5X)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.TY(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a5X)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.TY(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a5X)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5X,w)},
DY(d,e,f){return B.hu5(d,e,f)},
hu5(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$DY=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$DY)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anJ(b3),$async$DY)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kB,null,g),$async$DY)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anJ(b3),$async$DY)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MB(),$async$DY)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aN(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.O(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ck(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a8(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gai(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gU(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ac(m)===0){x=11
break}u=14
a8=$.eT().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oI(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9c(a8.a,b0,"media",a8.d,a9).C8(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXQ(k,n,o,s,b7),$async$DY)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a9(b4)
$.am.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.ac(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gai(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gU(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ac(h)!==0?25:26
break
case 25:u=28
a2=$.eT().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oI(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9c(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$DY)
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
a0=A.dV(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a5W(e),$async$DY)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DY,w)},
c5t:function c5t(){},
c5u:function c5u(d){this.a=d},
c5s:function c5s(d,e,f){this.a=d
this.b=e
this.c=f},
aOK(){var x=0,w=A.j(y.H),v,u
var $async$aOK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hEY=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aOK)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aOK)
case 3:u=$.fQu
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aOK)
case 4:$.fQu=$.hNo=$.hNp=null
return A.h(null,w)}})
return A.i($async$aOK,w)},
fi6(d){var x=0,w=A.j(y.H),v,u
var $async$fi6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4E){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fi7(new A.bS(u,y.aY))
x=3
return A.b(u.i6(0,C.hF,new B.fi8()),$async$fi6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fi6,w)},
hNm(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.htN(x):x},
fQy(d){var x=0,w=A.j(y.T),v,u,t
var $async$fQy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.a0(u,"WR")){v=B.anL(u)
x=1
break}v=B.fLq(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQy,w)},
fQx(d){var x=0,w=A.j(y.T),v,u,t
var $async$fQx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.a0(u,"WR")){v=B.anM(u)
x=1
break}v=B.fLq(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQx,w)},
fzh(d){var x=0,w=A.j(y.T),v
var $async$fzh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anM(d),$async$fzh)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzh,w)},
byZ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$byZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fQx(d),$async$byZ)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ac(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byZ,w)},
f7l(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f7l=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TS(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B5(d.ams(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f7l,w)},
FK(d,e,f){return B.hPK(d,e,f)},
hPK(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FK=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fQy(a1),$async$FK)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
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
break}p=J.ac(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hhj().aC5(D.df1,null),$async$FK)
case 4:l=d.fQu=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awq(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fiD(f,k,new B.fiE(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a6a(0,new B.W8(r,"offer")),$async$FK)
case 5:d=l
x=7
return A.b(l.aji(0),$async$FK)
case 7:x=6
return A.b(d.a62(0,a4),$async$FK)
case 6:x=8
return A.b(B.fi6(l),$async$FK)
case 8:x=9
return A.b(l.anb(),$async$FK)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hNm(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anN(m,h),$async$FK)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h0f(h)
case 11:v=new A.bm9(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FK,w)},
fi7:function fi7(d){this.a=d},
fi8:function fi8(){},
fiE:function fiE(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fiD:function fiD(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fiC:function fiC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hRB(d){switch(d){case"new":return D.e6S
case"checking":return D.e6T
case"connected":return D.e6V
case"completed":return D.e6U
case"failed":return D.e6X
case"disconnected":return D.e6Y
case"closed":return D.aJG
case"count":return D.e6W}return D.aJG},
hRC(d){switch(d){case"new":return D.aJH
case"gathering":return D.e6Z
case"complete":return D.a4E}return D.aJH},
i0K(d){switch(d){case"stable":return D.e7_
case"have-local-offer":return D.e70
case"have-local-pranswer":return D.e72
case"have-remote-offer":return D.e71
case"have-remote-pranswer":return D.e73
case"closed":return D.aJN}return D.aJN},
i__(d){switch(d){case"new":return D.aJK
case"connecting":return D.aJL
case"connected":return D.aJM
case"closed":return D.a4F
case"disconnected":return D.aJJ
case"failed":return D.aJI}return D.a4F},
a8c:function a8c(d,e){this.a=d
this.b=e},
NA:function NA(d,e){this.a=d
this.b=e},
W7:function W7(d,e){this.a=d
this.b=e},
Nz:function Nz(d,e){this.a=d
this.b=e},
Eq:function Eq(d,e){this.a=d
this.b=e},
cgq:function cgq(){},
fN9(d){var x=new B.Ep()
x.a=d
x.b=!0
return x},
Ep:function Ep(){this.b=this.a=$},
a8b:function a8b(){},
as1:function as1(){},
W8:function W8(d,e){this.a=d
this.b=e},
fLm(){var x=0,w=A.j(y.H)
var $async$fLm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fLm,w)},
fLp(d,e,f){var x=0,w=A.j(y.T),v
var $async$fLp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mc(D.mk))){v=null
x=1
break}v=B.fzx(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLp,w)},
h0f(d){var x,w=F.aa6.a33(C.dH.aI(d),null)
if(w.length===0){x=C.dH.aI(d)
return C.cS.gcu().aI(x)}return C.cS.gcu().aI(w)},
htM(d){var x,w,v=C.cB.aI(d)
try{x=C.c4.c8(0,F.aa5.b9N(v,!1))
return x}catch(w){x=C.c4.c8(0,v)
return x}},
fLq(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.htM(C.a.b_(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b_(t,w.length)
try{v=C.c4.c8(0,C.cB.aI(x))
return v}catch(u){return x}}return null},
htN(d){var x,w,v,u,t,s=A.a([],y.s)
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
htO(){var x,w=$.pf(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fT(v)},
aXW(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aXW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aXW)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$aXW,w)},
c5b(d,e){return B.htP(d,e)},
htP(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5b=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hA("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c5b)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$c5b,w)},
aXZ(d){var x=0,w=A.j(y.y),v,u,t
var $async$aXZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXW(d),$async$aXZ)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXZ,w)},
aXY(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aXY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.htO()
r=C.a.i(f)
t=C.dH.aI(s)
x=3
return A.b(B.c5b(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcu().aI(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aXY)
case 3:if(!h){v=null
x=1
break}v=new A.a_4("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXY,w)},
aXX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aXX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ac(o)===0){v=null
x=1
break}x=3
return A.b(B.aXW(o),$async$aXX)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ac(u)===0){v=null
x=1
break}try{t=C.c4.c8(0,C.cB.aI(u))
if(J.iR(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aXX,w)},
c5c(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ac(q)===0){x=1
break}u=4
x=7
return A.b(X.bzW("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c5c)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c5c,w)},
aY_(d){var x=0,w=A.j(y.h),v,u,t
var $async$aY_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HF(),$async$aY_)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY_,w)},
anE(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anE)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aY_(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anE,w)},
anC(d,e){var x=0,w=A.j(y.H)
var $async$anC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anC)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anC)
case 2:return A.h(null,w)}})
return A.i($async$anC,w)},
a5O(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5O=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5O)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HF(),$async$a5O)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ag(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a5N(s),$async$a5O)
case 5:x=6
return A.b(B.anC(f,u),$async$a5O)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5O,w)},
a5P(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5P=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5P)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HF(),$async$a5P)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a1(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ag(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.anC(g,q),$async$a5P)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5N(u),$async$a5P)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5P,w)},
a5Q(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5Q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5Q)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HF(),$async$a5Q)
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
s=B.aXT(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a5Q)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a5Q)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Q,w)},
c5d(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ac(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c5d)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aG(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a1(q,y.N,y.z)
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
return A.i($async$c5d,w)},
HG(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5d(d),$async$HG)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aY_(t),$async$HG)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anD(d),$async$HG)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXT(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anD(d),$async$HG)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HG,w)},
anD(d){var x=0,w=A.j(y.H)
var $async$anD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anD)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anD)
case 2:return A.h(null,w)}})
return A.i($async$anD,w)},
aY0(){var x,w=$.pf(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fT(v)},
a5R(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fLr(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5g(d){return B.htR(d)},
htR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5R(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5g)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$c5g,w)},
anG(d,e){return B.htS(d,e)},
htS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$anG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5R(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hA("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cF,null),$async$anG)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$anG,w)},
c5i(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5R(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.anG(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5i)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5i,w)},
c5h(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5R(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.anG(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5h,w)},
c5j(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c5j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5R(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.anG(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5j,w)},
c5k(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c5k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fLr(d)){v=null
x=1
break}x=3
return A.b(B.c5g(d),$async$c5k)
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
return A.i($async$c5k,w)},
a5Y(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a5Y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5Y)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a5Y)
case 8:s=e
if(s==null){v=A.V(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.V(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5Y,w)},
anK(d){return B.hu6(d)},
hu6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$anK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$anK)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hA("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$anK)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a9(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anK,w)},
anL(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ac(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anL)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a5Y(),$async$anL)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ac(q)===0){v=null
x=1
break}u=6
p=C.c4.c8(0,C.cB.aI(q))
if(J.iR(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dV(A.a1(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.anK(s),$async$anL)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a9(i)
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
return A.i($async$anL,w)},
anN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c0(),$async$anN)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a5Y(),$async$anN)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dV(A.a1(s,r,q),r,q)
r=C.dH.aI(C.a.i(e))
q.n(0,"answer",C.cS.gcu().aI(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.anK(u),$async$anN)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anN,w)},
anM(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$anM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anM)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a5Y(),$async$anM)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ac(u)===0){v=null
x=1
break}try{r=C.c4.c8(0,C.cB.aI(u))
v=r
x=1
break}catch(n){t=A.a9(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$anM,w)},
amN(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.ql)){v=null
x=1
break}x=3
return A.b(p.m2(e),$async$amN)
case 3:r=g
u=4
x=7
return A.b(r.hl(C.fS),$async$amN)
case 7:q=g
o=q
o=o==null?null:J.fa(J.wu(o))
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
return A.i($async$amN,w)},
hY4(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fxP(d){return B.hY6(d)},
hY6(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fxP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eT().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i0("media").K3(d,3600),$async$fxP)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
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
return A.i($async$fxP,w)},
Cr(d,e,f,g,h,i){var x=null
return B.hY3(d,e,f,g,h,i)},
hY3(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cr=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h0i(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fLt(r),$async$Cr)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fxP(o),$async$Cr)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5S(r),$async$Cr)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aML)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.KZ(A.a([],g))
x=15
return A.b(d.eR(0,A.asR("GET",A.cv(n,0,null))).cM(0,C.EC),$async$Cr)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5S(r),$async$Cr)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Jz(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cr)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ac(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aY2(r,k),$async$Cr)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Cr)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.TS(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a9(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a5S(r),$async$Cr)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cr,w)},
aOt(d){return B.hY5(d)},
hY5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eT().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i0("media").W(0,d),$async$aOt)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOt,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[136]
O=c[40]
F=c[232]
I=c[128]
P=c[213]
E=c[206]
G=c[86]
Q=c[178]
R=c[129]
S=c[211]
K=c[236]
L=c[243]
B=a.updateHolder(c[21],B)
D=c[241]
T=c[177]
M=c[196]
U=c[65]
V=c[244]
W=c[71]
X=c[55]
N=c[85]
Y=c[242]
B.cgr.prototype={
aC5(d,e){return this.cEB(d,e)},
cEB(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aC5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.V(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dV(r,s,t)
t.v(0,d)
u=new q(A.kb(A.cA(t)))
t=J.k(u)
v=B.hyH(C.cS.gcu().aI(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aC5,w)}}
B.b27.prototype={
buX(d){var x=this,w=x.w
w.onclose=A.he(new B.cgm(x))
w.onopen=A.he(new B.cgn(x))
w.onmessage=A.he(new B.cgo(x))
w.onbufferedamountlow=A.he(new B.cgp(x))},
gdl(d){return this.x},
afD(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ep()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fN9(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afD)
case 8:v=t.fN9(s.am0(f,0,null))
x=1
break
case 7:case 4:v=B.fN9(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afD,w)}}
B.b28.prototype={
buY(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cgs(x)))
w.addEventListener("icecandidate",A.he(new B.cgt(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cgu(x)))
w.onicegatheringstatechange=A.he(new B.cgv(x))
w.addEventListener("signalingstatechange",A.he(new B.cgw(x)))
if(!$.fU5())w.addEventListener("connectionstatechange",A.he(new B.cgx(x)))
w.addEventListener("negotiationneeded",A.he(new B.cgy(x)))
w.addEventListener("track",A.he(new B.cgz(x)))},
aji(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aji=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kb(A.cA(A.V(y.N,y.z)))),y.aQ),$async$aji)
case 3:t=f
v=new B.W8(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aji,w)},
a62(d,e){return this.bkv(0,e)},
bkv(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a62=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a62)
case 2:return A.h(null,w)}})
return A.i($async$a62,w)},
a6a(d,e){return this.bkL(0,e)},
bkL(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6a)
case 2:return A.h(null,w)}})
return A.i($async$a6a,w)},
anb(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.W8(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anb,w)},
bB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.fe(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB,w)}}
B.aaV.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Y1.prototype={
T(){return new B.axC()},
gd9(){return this.c}}
B.axC.prototype={
a_(){this.a1()
this.acm()},
acm(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXU(u.e,u.c),$async$acm)
case 2:t=e
if(v.c!=null)v.m(new B.d_e(v,t))
return A.h(null,w)}})
return A.i($async$acm,w)},
Ph(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ph=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anz(t.e,t.c,!1),$async$Ph)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eLK)
x=1
break}x=4
return A.b(B.a5M(u.a.c,"individual"),$async$Ph)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4B(A.em(new B.d_b(u),!1,null,y.H)),$async$Ph)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ph,w)},
It(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$It=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fgg(o),$async$It)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5Q(o.e,r,s,q),$async$It)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eIP)
x=1
break}x=5
return A.b(B.a5M(u.a.c,"member"),$async$It)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4B(A.em(new B.d_d(u),!1,null,y.H)),$async$It)
case 6:case 1:return A.h(v,w)}})
return A.i($async$It,w)},
xs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5L(t.e,o,t.f,t.r,t.w,s),$async$xs)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5M(u.a.c,"org_owner"),$async$xs)
case 4:x=5
return A.b(B.anE(u.a.c),$async$xs)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fgL(o),$async$xs)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5O(s,t,o,q.c),$async$xs)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eIM)
x=1
break}x=10
return A.b(B.anE(u.a.c),$async$xs)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4B(A.em(new B.d_c(u),!1,null,y.H)),$async$xs)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xs,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.j_:C.pd,q=B.fLo(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.fK,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f36,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h3,t,t,t),C.az,D.flp,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bSi,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lv(new B.d_g(),t),C.P,w,C.e0,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abn(C.eR,C.awu,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc9i(),t),C.ac],v))
p.push(new B.abn(C.or,C.a0G,"Team Member","Sign in with your organization access code + password",u.gca9(),t))
p.push(C.ac)
p.push(new B.abn(C.aj8,C.a25,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc9F(),t))
return A.cb(t,r,A.bo(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.ags,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.abn.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oQ,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.B_,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bY,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.af)}}
B.aAb.prototype={}
B.aDn.prototype={}
B.jf.prototype={
mc(d){var x=this.b,w=C.a.of(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b_(x,w+1).toLowerCase())},
ganQ(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.V(y.N,y.z)
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
b9h(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jf(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cD5(d){return this.b9h(null,d)},
aBR(d){return this.b9h(d,null)}}
B.TM.prototype={
T(){return new B.aBy(new A.cs(null,y.A))},
gd9(){return this.c}}
B.aBy.prototype={
a_(){this.a1()
this.acn()},
acn(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B4(u.a.c),$async$acn)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dLj(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acn,w)},
aco(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aco=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fA(s)),$async$aco)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eME)
case 1:return A.h(v,w)}})
return A.i($async$aco,w)},
Yu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Yu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amN(s.d,4),$async$Yu)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rD(r,"ngmy_my_code_"+m+".png"),$async$Yu)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a9(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Yu,w)},
ag5(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8M("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ag5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ag5,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.j_:C.pd,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lY
else if(q.e==null)x=A.av(new A.C(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aI.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a15,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ag2,p,p,1/0)
v=A.m(20)
u=A.a([new A.ad(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mr,w,C.kn,new A.et(A.p(p,A.pz(p,p,!1,B.htI(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bY,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kn,A.A(A.a([A.D(A.ez(N.Bi,C.SV,q.gc2l(),p),1),C.aw,A.D(A.dq(C.y8,C.a6V,q.gc2m(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.ez(M.a_y,D.fhu,q.gcox(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.LB,p,p,C.ah)
x=r}return A.cb(l,n,x,p,!1,!1,p,p)}}
B.TQ.prototype={
T(){return new B.aBB(new A.ar(C.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.aBB.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HE(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Yv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HE(u.d.a.a)
if(t==null){u.m(new B.dMs(u))
x=1
break}u.m(new B.dMt(u))
s=u.a
r=s.c
x=3
return A.b(B.a5K(s.d,new B.dMu(u),t,r),$async$Yv)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dMv(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$Yv,w)},
a0E(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0E=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dMw(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.r9(r.a.c,q),$async$a0E)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dMx(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ac(r.a.d)>1?"NGMY Doc Share ("+J.ac(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agi(p,m,l,j,k),$async$a0E)
case 8:o=e
if(r.c!=null)r.m(new B.dMy(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dMz(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dMA(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0E,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.acx:D.aaB,h=j?D.ae_:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.abK:C.aL
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.M(d).ax.a===C.H
w=J.ac(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bGn,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fx,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a15,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u0(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgJ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.bq(k,k,k,C.Lv,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dMB(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lP,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.KE(l.a.d,4)
m=A.B(new A.J(m,new B.dMC(x,new A.aEB(i)),m.$ti.k("J<aj.E,r>")),y.c7)
if(J.ac(l.a.d)>4)m.push(new A.C(C.m8,A.d("+ "+(J.ac(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d6,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eHl)
else q.push(A.W(C.l7,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.ir,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.bqk,k,k,C.ah),1)
u=l.f?k:l.gcoy()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(M.a_y,D.fip,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.aA(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc2n()
t=A.bk(C.aE,k,k,0,C.c,k,C.mR,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.cb(g,h,new A.an(C.W,k,C.aa,C.q,A.a([f,v,A.bo(!0,A.mO(new B.dMD(),A.v(A.a([e,new A.C(D.bpP,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rk:D.fgT,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.WY,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bgJ.prototype={
ob(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fc(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bt,v.length),C.aN)}}
B.TN.prototype={
T(){return new B.aBz()}}
B.aBz.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,C.b1,C.aN),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ar(new A.bb(x,C.b1,C.aN),v)
u.f!==$&&A.aO()
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
acp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dLk(r))
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
return A.b(B.a5P(p,m,n,o,C.a.i(l).length===0?null:l),$async$acp)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eMf)
s=[1]
x=4
break}p.I(y.q).f.R(D.eKT)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dLl(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acp,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.j_:C.pd,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.f9I,s,s,s,1,s,!0),p=A.p(s,D.biy,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.G2,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bNd,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bN8,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bNo,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc2o()
u=A.bk(C.aE,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cb(q,r,A.cd(A.v(A.a([p,C.d6,o,C.ac,x,C.ac,w,C.mr,A.bJ(t.r?C.rk:C.aPm,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.aaC.prototype={}
B.bt5.prototype={
a3j(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cp(r.ams()))
x=3
return A.b(B.Qd(t,s),$async$a3j)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3j,w)},
gd9(){return this.a}}
B.Mz.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Y0.prototype={
T(){return new B.axB(new A.ar(C.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.axB.prototype={
a_(){this.a1()
$.aT.x1$.push(new B.d_a(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c2u(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a00(d),u=x.a.c,t=u?C.i4:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j_:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ad(0,C.G,C.aE.j(u?0.25:0.12),C.fK,32)],n),l=A.p(w,T.alP,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ad(0,C.G,C.aE.j(0.4),C.cy,16)],n),C.amC,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsK()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.bq(w,w,w,C.EO,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aVV),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_8(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lP,w,w,w,w)
f=f[1]
f=A.D(A.dW(C.nd,new B.d_9(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eE(w,C.K,new A.cU(Q.Jx,A.bX(new A.C(C.xh,A.v(A.a([l,C.aO,k,C.P,j,C.e0,i,C.e0,A.A(A.a([f,C.aw,A.D(A.bX(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e11,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc2t(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.af),new A.o(w,w,w,h,n,L.Nm,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LD,C.d_,w,w,w)}}
B.bsK.prototype={
ob(d,e){return e.ajd(e.a.toUpperCase())}}
B.TO.prototype={
T(){return new B.aBA(A.a([],y.r),A.aX(y.N))},
gd9(){return this.c}}
B.aBA.prototype={
a_(){var x=this
x.a1()
x.te()
x.w=A.dG(C.j3,new B.dMq(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.TX()
this.a2()},
a_w(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.My(u.a.c),$async$a_w)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A7(u.a.c),$async$a_w)
case 4:u.m(new s.dLO(u,e))
u.hR("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_w,w)},
te(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$te=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.My(u.a.c),$async$te)
case 3:t=e
x=4
return A.b(B.A7(u.a.c),$async$te)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dLP(u,s))
if(t>0)u.hR("Received "+A.t(t)+" file(s) via My Code.")
u.MM(u.d)
B.B4(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$te,w)},
MM(d){return this.byR(d)},
byR(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a5U(r,u.a.c),$async$MM)
case 8:p=f
if(u.c==null){x=1
break}new B.dLn(u,r,p).$0()
u.c.e6()
case 7:if(!(C.a.a0(r.c,"video/")||r.mc(D.mk))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.TV(r,u.a.c),$async$MM)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.A7(u.a.c),$async$MM)
case 12:u.m(new o.dLo(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MM,w)},
N8(d){return this.bEZ(d)},
bEZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$N8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5U(d,u.a.c),$async$N8)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dLt(u,d,t))
x=6
return A.b(A.fH(new A.fA(t)),$async$N8)
case 6:u.hR("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fA(r.toUpperCase())),$async$N8)
case 7:u.hR("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$N8,w)},
hR(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tf(d,e){return this.cyL(d,e)},
cyL(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dMe(r,e))
u=3
x=6
return A.b(d.$0(),$async$tf)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dMf(r))
$.eP.m7()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tf,w)},
gaSL(){var x=this.a
return x.f||x.r||x.w},
Hs(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Hs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaSL()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c59(s,n,r,q,o,t),$async$Hs)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hR("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fri(o,u.a.c),$async$Hs)
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
return A.b(B.Ct(s,o,r,q,n,t),$async$Hs)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hs,w)},
ZB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anE(u.a.c),$async$ZB)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hR("No organization portal found.")
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
return A.b(A.a5(t,!1).ci(A.em(new B.dLL(u,r,q),!1,null,y.H)),$async$ZB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZB,w)},
a_H(d){return this.cif(d)},
cie(){return this.a_H(1)},
cif(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaSL()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anB(u.a.c),$async$a_H)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_H,w)},
aap(d,e,f){return this.bV7(d,e,f)},
bV7(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aap=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hR(e)
x=1
break}x=3
return A.b(u.tf(new B.dLI(u,d,null,e,f),"Uploading\u2026"),$async$aap)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aap,w)},
bz_(){B.heM(!1,new B.dLr(this))
return},
cna(){this.m(new B.dLT(this))},
awz(){var x=0,w=A.j(y.H),v=this
var $async$awz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bz_()
return A.h(null,w)}})
return A.i($async$awz,w)},
aal(){var x=0,w=A.j(y.H),v=this
var $async$aal=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tf(new B.dLx(v),"Importing\u2026"),$async$aal)
case 2:return A.h(null,w)}})
return A.i($async$aal,w)},
Rj(d){return this.cye(d)},
cye(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mc(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ci(A.em(new B.dMb(u,d),!1,null,y.H)),$async$Rj)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mc(D.Pg)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).ci(A.em(new B.dMc(u,d),!1,null,y.H)),$async$Rj)
case 8:x=1
break
case 7:x=u.bVP(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).ci(A.em(new B.dMd(u,d),!1,null,y.H)),$async$Rj)
case 11:x=1
break
case 10:u.hR("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rj,w)},
bVP(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.of(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.czt,C.a.b_(x,w+1).toLowerCase())},
adR(d){return this.c9m(d)},
c9m(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$adR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mc(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ci(A.em(new B.dLJ(u,d),!1,null,y.H)),$async$adR)
case 5:x=1
break
case 4:u.m(new B.dLK(u,d))
case 1:return A.h(v,w)}})
return A.i($async$adR,w)},
QH(d){return this.cq_(d)},
cq_(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hR("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oU(t,s.c,s.f),$async$QH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tf(new B.dM4(u,d),"Preparing QR\u2026"),$async$QH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QH,w)},
agv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dM5(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dM6(q),s),s.k("H.E"))
if(r.length===0){u.hR("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QH(r),$async$agv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agv,w)},
ago(d){return this.cpz(d)},
cpz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ago=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a00(r)
r=u.c
r.toString
x=3
return A.b(A.bY(C.K,null,new B.dLZ(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ago)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rj(d)
break
case"qr":u.QH(A.a([d],y.r))
break
case"send_my_code":u.c9Z(A.a([d],y.r))
break
case"save":u.afK(d)
break
case"delete":u.Ie(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ago,w)},
Wt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLu(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dLv(q),s),s.k("H.E"))
if(r.length===0){u.hR("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oU(t,s.c,s.f),$async$Wt)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tf(new B.dLw(u,r),"Preparing file\u2026"),$async$Wt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wt,w)},
aeX(d){return this.cgJ(d)},
cgJ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aeX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hft(d,!1),$async$aeX)
case 3:s=f
r=s==null
q=B.a5R(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hR("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aeX,w)},
adX(){var x=0,w=A.j(y.H),v=this,u
var $async$adX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fyU(u,v.a.c),$async$adX)
case 2:return A.h(null,w)}})
return A.i($async$adX,w)},
byZ(){B.heM(!1,new B.dLq(this,null))
return},
Is(d,e){return this.ca_(d,e)},
aYB(d){return this.Is(null,d)},
c9Z(d){return this.Is(d,null)},
ca_(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Is=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dLM(s),o),o.k("H.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wM.c4().alO(!0,C.YM,!1),$async$Is)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tf(new B.dLN(l,s,r),"Preparing\u2026"),$async$Is)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a9(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hR("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hR("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bB4(p,l,e,s.a.c),$async$Is)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hR("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Is,w)},
HH(d){return this.bUV(d)},
bUV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.htH(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aYB(t),$async$HH)
case 8:x=6
break
case 7:u.hR("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hR("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tf(new B.dLG(u,d),"Receiving video\u2026"),$async$HH)
case 11:x=1
break
case 10:x=12
return A.b(u.tf(new B.dLH(u,d),"Receiving\u2026"),$async$HH)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HH,w)},
DD(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cn()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aeX(t),$async$DD)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HH(s),$async$DD)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).ci(A.em(new B.dLR(u),!1,null,y.N)),$async$DD)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.te(),$async$DD)
case 10:x=1
break
case 9:x=11
return A.b(u.HH(C.a.i(r)),$async$DD)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DD,w)},
afK(d){return this.clK(d)},
clK(d){var x=0,w=A.j(y.H),v=this
var $async$afK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tf(new B.dLQ(v,d),"Saving\u2026"),$async$afK)
case 2:return A.h(null,w)}})
return A.i($async$afK,w)},
Ie(d){return this.bHg(d)},
bHg(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ie=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kW(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ie)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5c(t),$async$Ie)
case 6:case 5:s=d.a
x=7
return A.b(B.DX(u.a.c,s),$async$Ie)
case 7:u.r.W(0,s)
x=8
return A.b(u.te(),$async$Ie)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ie,w)},
agB(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a00(r)
r=u.c
r.toString
x=3
return A.b(A.bY(C.K,null,new B.dMa(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agB)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.adX()
break
case"import":u.aal()
break}case 1:return A.h(v,w)}})
return A.i($async$agB,w)},
c2r(d){var x=d.c
if(C.a.a0(x,"video/")||d.mc(D.mk))return C.pC
if(C.a.a0(x,"image/")||d.mc(D.Pg))return C.tx
if(C.a.t(x,"pdf"))return E.MU
return D.ajB},
B(d){var x,w,v=this,u=null,t=B.a00(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.FV,u,u,u,new B.dMl(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bGT,u,u,u,v.e?u:v.gc9G(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcn9()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bBf:E.ak1,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_v,u,u,u,v.e?u:v.gc2s(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nJ,u,u,u,v.e?u:v.gaZJ(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bIz,u,u,u,v.e?u:new B.dMm(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lv(new B.dMn(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.M(d).ax.a===C.H?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.me(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axy(C.jb,s,!0,t,w?u:v.gcq0(),u),1)
x.push(new A.C(D.boC,A.mO(new B.dMo(),A.A(A.a([s,C.aw,A.D(new B.axy(C.vd,"Export",!1,t,w?u:v.gbKG(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.is,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbp(t,v.e?u:v.gaZJ(),u)
else s=A.k0(!0,u,u,new B.dMp(v,t),s,u,D.bou,u,u,!1,!1)
x.push(A.D(s,1))
return A.cb(q,r,new A.an(C.W,u,C.aa,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axy.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.uX,t,new A.b7(s,C.Y),t,t,t)
return A.dq(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uX,t,new A.b7(s,C.Y),new A.aA(v,1,C.r,-1),t,t,t,t)
return A.ez(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbp.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mO(new B.d_6(),new A.C(E.XR,A.v(A.a([A.mO(new B.d_7(),A.p(x,A.W(C.xC,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.it,x,new A.bm(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e0,A.dq(C.nJ,D.flI,this.d,A.bk(C.aE,x,x,x,C.c,x,C.XM,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.Ap,x,new A.bm(0,1,w),s),x,x,x)}}
B.aaW.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mc(D.mk))p=D.d58
else{p=C.a.a0(p,"image/")||i.mc(D.Pg)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aI.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.ganQ()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mc(D.mk))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mc(D.mk)))l.push(A.fJe(C.aE,!1,j,j,j,!1,j,j,new B.d_t(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nH,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mO(new B.d_u(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.Xk,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.r,-1)),j,j,C.af),j),C.cp,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.Y2.prototype={
T(){return new B.axD()},
gd9(){return this.c}}
B.axD.prototype={
a_(){this.a1()
this.xi()},
q(){B.htW(this.e)
this.a2()},
xi(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xi=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.r9(o.c,o.d),$async$xi)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.htZ(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.htY(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_q(s))
x=1
break}s.m(new B.d_r(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d_s(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xi,w)},
a0D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.r9(t.c,t.d),$async$a0D)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eJl)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agi(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0D)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0D,w)},
bUO(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kh(u,C.A,v,new B.d_o(w,t),C.fQ,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gal(t))x=A.fK(t,C.A,v,new B.d_p(w),C.fQ,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ua(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a00(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bj,u,u,u,v.gb2t(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Dw
else{q=v.r
if(q!=null)t=new A.C(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ez,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.Bj,D.f5l,v.gb2t(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bUO()}return A.cb(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Y_.prototype={
T(){return new B.axA(A.ah5(),C.bx,C.bx)},
gd9(){return this.c}}
B.axA.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a3(w).k("fs<1>")).i2(new B.d_3(v))
x.gcLR().i2(new B.d_4(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a3(x).k("fs<1>"))}if(x==null)x=C.b11
x.i2(new B.d_5(v))
v.xi()},
xi(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xi=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.r9(p.c,p.d),$async$xi)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cZX(s))
x=1
break}x=8
return A.b(s.d.BB(0,new A.a27(r,s.a.d.c)),$async$xi)
case 8:if(s.c==null){x=1
break}s.m(new B.cZY(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.cZZ(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xi,w)},
Yw(){var x=0,w=A.j(y.H),v=this,u
var $async$Yw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fY(0),$async$Yw)
case 5:x=3
break
case 4:x=6
return A.b(u.i5(0),$async$Yw)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Yw,w)},
aQH(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a00(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Dw
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bCf,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Nm,C.n),o,88,o,o,o,o,o,88)
t=A.kR(C.aE,o,o,m,0,new B.d__(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aQH(p.w)+" / "+p.aQH(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eFS,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xN:C.iN,o,o,o,o,o)
x=A.v(A.a([u,C.kn,t,x,C.d6,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc2v(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cb(v,w,A.av(new A.C(C.tl,x,o),o,o,o),o,!1,!1,o,o)}}
B.OI.prototype={
T(){return new B.axG()},
gd9(){return this.c}}
B.axG.prototype={
a_(){this.a1()
this.OE()},
OE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fLp(o.c,o.d,new B.d_H(s)),$async$OE)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d_I(s))
x=1
break}s.e=r
q=O.hQz(r)
if(q==null){s.m(new B.d_J(s))
x=1
break}s.d=q
q.aM(0,s.gaYp())
x=8
return A.b(q.i1(0).cM(0,C.qC),$async$OE)
case 8:if(s.c==null){x=1
break}s.m(new B.d_K(s))
x=9
return A.b(q.pr(0),$async$OE)
case 9:q.rR(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d_L(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OE,w)},
c7Y(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d_M(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cm(0,x.gaYp())
w=x.d
if(w!=null)w.q()
B.i_g(x.e)
x.a2()},
acs(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aY1(u.c,u.d),$async$acs)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acs,w)},
B(d){var x,w,v,u=this,t=null,s=B.a00(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aH(t,t,t,t,C.oy,t,t,t,u.gc2p(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ic(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Dw
else{q=u.r
if(q!=null)s=new A.C(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agA(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.aa,C.q,A.a([new A.zE(s,t),A.aE(t,A.CE(A.p(t,A.W(q?I.xN:C.iN,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bY,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d_O(u),t,t,t,t,t,t,!1,C.a9)],o),t),t)}else s=C.bH}}return A.cb(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Y4.prototype={
T(){return new B.axE(new A.cs(null,y.A))}}
B.axE.prototype={
gcyv(){var x,w,v=this.a
if(v.e!==D.QA)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcyc(){var x,w,v=this.a
if(v.e!==D.yI)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcyv()
if(x!=null){v.PH(x)
v.e=A.dG(R.EF,new B.d_D(v,x))}w=v.gcyc()
if(w!=null){v.PG(w)
v.f=A.dG(C.hf,new B.d_E(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
PG(d){return this.ceW(d)},
ceW(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anJ(d),$async$PG)
case 3:t=f
x=4
return A.b(B.c5v(d),$async$PG)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_v(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PG,w)},
PH(d){return this.ceX(d)},
ceX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fzh(d),$async$PH)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.byZ(t),$async$PH)
case 4:if(u.c==null){x=1
break}u.m(new B.d_w(u))
u.c.I(y.q).f.R(D.aMm)
case 1:return A.h(v,w)}})
return A.i($async$PH,w)},
gbZJ(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc2q(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cn()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eMp)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).ci(A.em(new B.d_x(),!1,null,y.N)),$async$a0p)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.byZ(s),$async$a0p)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aMm)
case 1:return A.h(v,w)}})
return A.i($async$a0p,w)},
a8k(d){return this.bF_(d)},
bF_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fA(C.d.aH(t,", "))),$async$a8k)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
acq(d){return this.bEK(d)},
bEK(d){var x=0,w=A.j(y.H),v=this
var $async$acq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fA(v.a.c)),$async$acq)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eJO)
return A.h(null,w)}})
return A.i($async$acq,w)},
a0k(d){return this.clM(d)},
clM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amN(s.d,4),$async$a0k)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rD(r,"ngmy_doc_share_qr.png"),$async$a0k)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a9(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0k,w)},
gaTP(){var x,w=this.a
if(w.e!==D.H5)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
a8h(d){return this.bET(d)},
bET(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaTP()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8h)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eLp)
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
acr(){var x=0,w=A.j(y.H),v=this,u
var $async$acr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.TX(),$async$acr)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acr,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a00(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.H5&&i!==D.QA&&i!==D.yI
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.H5||t===D.QA||t===D.yI?l:A.aH(l,l,l,l,C.kK,l,l,l,m.gaWB(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pz(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbZJ(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.H5){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc2q(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bMi,D.feb,new B.d_y(m,d),l)],p))}if(m.a.e===D.H5&&m.gaTP()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bIT,D.fb_,new B.d_z(m,d),l)],p))
if(m.a.e===D.yI){x=(m.w?C.dv:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Dz:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}if(m.a.e===D.QA){x=(m.r?C.dv:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Dz:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l),C.ac,A.dq(D.bEH,D.fhb,m.gcm9(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oa(i,A.cb(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.ba,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ez(N.Bi,C.SV,new B.d_A(m,d),l),1),C.aw,A.D(A.dq(C.y8,C.a6V,new B.d_B(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.zc,m.gaWB(),A.bk(C.aI,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d_C(),y.C)}}
B.aaU.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aO,A.p(x,A.pz(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ah)
return A.eh(A.a([A.bJ(C.zd,new B.cZW(d),x)],u),x,x,C.mB,v,x,x,x,x,D.f4m,x)}}
B.XZ.prototype={
T(){return new B.axz(A.yL(C.wZ,C.nk,C.tJ))}}
B.axz.prototype={
q(){this.d.q()
this.a2()},
ava(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a5(x,!1).N(t)
return}}},
B(d){var x=null
return A.cb(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fbt,x,x,x,1,x,!0),C.w,A.yK(this.d,C.bQ,this.gav9()),x,!1,!1,x,x)}}
B.Y5.prototype={
T(){return new B.axF(A.yL(C.wZ,C.nk,C.tJ))},
gd9(){return this.c}}
B.axF.prototype={
bVR(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aej(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aej=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Rc("text/plain"),$async$aej)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eMj)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aej,w)},
a95(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a95=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hft(p,!0),$async$a95)
case 3:t=e
p=t==null
s=B.a5R(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eIW)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a95,w)},
q(){this.d.q()
this.a2()},
ava(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bVR(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.akW,v,v,v,w.gbKe(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_C,v,v,v,w.gccl(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qM:P.ME,v,v,v,v,v),v,v,v,new B.d_G(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fhZ,v,v,v,1,v,!0)
u=A.yK(w.d,C.bQ,w.gav9())
x=A.m(20)
return A.cb(t,C.w,new A.an(C.W,v,C.aa,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e6z],s),v),v,!1,!1,v,v)}}
B.bbq.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oi
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oi:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.XW,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.eo,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.af)}}
B.a8c.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NA.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.W7.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.Nz.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Eq.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgq.prototype={}
B.Ep.prototype={}
B.a8b.prototype={}
B.as1.prototype={}
B.W8.prototype={}
var z=a.updateTypes(["ay<~>()","R(jf)","n(jf)","TO(Y)","~()","Y1(Y)","G(G,jf)","OI(Y)","~(lP)","cn(Ep)","ay<jf?>(@)","TM(Y)","TQ(Y)","C(jf)","jf(@)","a4<n,@>(jf)","Y0(Y)","TN(Y)","Y2(Y)","Y_(Y)","Y4(Y)","aaU(Y)","ak<jf>()","Y5(Y)","aaW(Y,G)","XZ(Y)","a4<n,aC>(jf)","cn(W7)","cn(a8b)","ay<cn>(Ep)"])
B.cgm.prototype={
$1(d){var x=this.a
x.x=D.aJF
x.y.J(0,D.aJF)},
$S:69}
B.cgn.prototype={
$1(d){var x=this.a
x.x=D.aJE
x.y.J(0,D.aJE)},
$S:69}
B.cgo.prototype={
$1(d){var x=this.a
x.afD(A.aNd(d.data)).bz(new B.cgl(x),y.b)},
$S:69}
B.cgl.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cgp.prototype={
$1(d){},
$S:69}
B.cgs.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hyG(d.channel))},
$S:15}
B.cgt.prototype={
$1(d){},
$S:15}
B.cgu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hRB(w.iceConnectionState)
x.cx=w
if($.fU5())switch(w.a){case 0:x.cy=D.aJK
break
case 1:x.cy=D.aJL
break
case 3:x.cy=D.aJM
break
case 5:x.cy=D.aJI
break
case 6:x.cy=D.aJJ
break
case 7:x.cy=D.a4F
break
default:break}},
$S:143}
B.cgv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hRC(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:143}
B.cgw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i0K(w.signalingState)},
$S:143}
B.cgx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i__(w.connectionState)},
$S:143}
B.cgy.prototype={
$1(d){},
$S:143}
B.cgz.prototype={
$1(d){},
$S:15}
B.fd_.prototype={
$1(d){var x=y.F.a(new A.ru([],[]).pd(d.target.result,!1)),w=C.x_.t(x.objectStoreNames,"blobs")
if(!w)C.wW.K1(x,"blobs")},
$S:193}
B.fyI.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vp.f5(this.b)
$.eP.m7()
this.c.$1(d)},
$S:452}
B.fyK.prototype={
$1(d){return this.a.$1(B.hHw(this.b,this.c))},
$S:34}
B.fyJ.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fyH.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fyX.prototype={
$1(d){var x=this
return B.h57(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyY.prototype={
$1(d){var x=this
return B.h57(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fek.prototype={
$1(d){var x=this
return B.c56(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_e.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_b.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c56(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_d.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c56(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_c.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c56(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_g.prototype={
$4(d,e,f,g){var x=null
return A.jA(A.A(A.a([A.aH(x,x,x,x,D.bDk,x,x,x,new B.d_f(d),x,x,x,x,x,x),A.D(A.Eb(D.P1,!0,x,C.ZH,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.P1,x,g,C.agN,0,e,f)},
$C:"$4",
$R:4,
$S:432}
B.d_f.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fgj.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eC,y.o).w,t=this.a,s=t?C.i4:C.c,r=A.m(28),q=A.p(v,D.biR,C.f,v,v,D.aXA,v,v,v,v,D.agC,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.bq(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bHr,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.ET,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.bq(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ala,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.A(A.a([A.D(A.dW(C.dd,new B.fgh(d),v),1),C.aw,A.D(A.bJ(D.fa2,new B.fgi(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Xh,v,v,v,v),v)},
$S:60}
B.fgh.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fgi.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eK2)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aAb(v,x))},
$S:0}
B.fgN.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eC,y.o).w,u=x.a,t=u?C.i4:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.biH,C.f,w,w,D.aZ0,w,w,w,w,D.agC,w,w,1/0),new A.C(C.ET,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fQi(u,"Organization name",C.Fj,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fQi(u,"Access code",C.mW,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fQi(u,"Member password",H.FQ,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bJ(D.fi2,new B.fgM(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Xh,w,w,w,w),w)},
$S:60}
B.fgM.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eK7)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDn(u,x,w))},
$S:0}
B.c4Y.prototype={
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
p=C.a.a0(j,"http")?A.cv(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.uZ(p,null).cM(0,C.WX),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cp(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B5(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a9(h)
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
B.c53.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c54.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c55.prototype={
$1(d){return d.b},
$S:z+2}
B.c5_.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c50.prototype={
$1(d){return d.b},
$S:z+2}
B.c4Z.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c51.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c52.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fyV.prototype={
$1(d){return new B.TM(this.a,null)},
$S:z+11}
B.fyW.prototype={
$1(d){return new B.TQ(this.a,this.b,this.c,null)},
$S:z+12}
B.dLj.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dMs.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dMt.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dMu.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dMr(x,d))},
$S:2}
B.dMr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMv.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMw.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dMx.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dMy.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMz.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dMA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMD.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:106}
B.dMB.prototype={
$1(d){var x=this.a
return x.f?null:x.Yv()},
$S:2}
B.dMC.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mc(D.Pg))s=C.tx
else s=C.a.a0(s,"video/")||d.mc(D.mk)?C.pC:D.ajB
x=this.b.a
w=y.p
return new A.C(C.kD,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.ganQ(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dLk.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dLl.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c57.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.c58.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.fzz.prototype={
$2(d,e){return e===this.a},
$S:305}
B.fac.prototype={
$1(d){return J.k(d)},
$S:17}
B.few.prototype={
$1(d){var x=this.b
B.hFx(C.F6.ga4T(this.a)).bz(x.gcBr(x),y.H)},
$S:124}
B.fex.prototype={
$1(d){return this.a.d3(0,null)},
$S:124}
B.fey.prototype={
$0(){return null},
$S:11}
B.c5m.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fez.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aN(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
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
return new B.jf(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fiu.prototype={
$1(d){return d.ad()},
$S:z+15}
B.fdd.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fde.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.fDB.prototype={
$1(d){return new B.Y0(this.a,null)},
$S:z+16}
B.d_a.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fD()},
$S:8}
B.d_8.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_9.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMq.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_w()},
$S:14}
B.dLO.prototype={
$0(){var x=J.bC9(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLP.prototype={
$0(){var x=J.bC9(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLn.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dLm(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBR(this.c)}},
$S:0}
B.dLm.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLo.prototype={
$0(){var x=J.bC9(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLt.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dLs(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBR(this.c)}},
$S:0}
B.dLs.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMe.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dMf.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dLL.prototype={
$1(d){return new B.TN(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dLI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Hs(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.TR(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.te(),$async$$0)
case 5:s=J.a8(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a_H(s.gM(t)),$async$$0)
case 8:case 7:r.hR(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLr.prototype={
$1(d){this.a.aap(d,"No files selected.","Added")},
$S:452}
B.dLT.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dLS(),A.T(x).k("J<1,n>")))},
$S:0}
B.dLS.prototype={
$1(d){return d.a},
$S:z+2}
B.dLx.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wM.c4().cNO(C.YM,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jk(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a9(j)
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hR("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hR("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.anI(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hR("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.te(),$async$$0)
case 9:o.hR("Imported "+J.ac(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dMb.prototype={
$1(d){return new B.OI(this.a.a.c,this.b,null)},
$S:z+7}
B.dMc.prototype={
$1(d){return new B.Y2(this.a.a.c,this.b,null)},
$S:z+18}
B.dMd.prototype={
$1(d){return new B.Y_(this.a.a.c,this.b,null)},
$S:z+19}
B.dLJ.prototype={
$1(d){return new B.OI(this.a.a.c,this.b,null)},
$S:z+7}
B.dLK.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dM4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Hs(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a5T(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hR("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cie(),$async$$0)
case 5:x=6
return A.b(p.te(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dM0(p),r),new B.dM1(),r.k("J<aj.E,n>")).bZ(0,new B.dM2())
q=A.B(r,r.$ti.k("H.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).ci(A.em(new B.dM3(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oT(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.TX(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dM0.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dM_(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dM_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dM1.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dM2.prototype={
$1(d){return d.length!==0},
$S:3}
B.dM3.prototype={
$1(d){var x=this.a
return new B.Y4(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dM5.prototype={
$1(d){return d.a},
$S:z+2}
B.dM6.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLZ.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kC,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.ganQ(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mc(D.mk)?C.tz:C.ov
p=!x||p.mc(D.mk)?"Play video":"View"
return A.bX(A.bo(!0,new A.C(C.Az,A.v(A.a([q,o,t,C.az,B.Y3(!1,u,!1,w,p,new B.dLU(d),v),B.Y3(!1,u,!1,C.jb,"Share via QR",new B.dLV(d),"Letters/numbers QR code"),B.Y3(!1,u,!1,D.ZN,"Send to their Code",new B.dLW(d),"Enter someone else's personal code"),B.Y3(!1,u,!1,C.hx,"Download / save",new B.dLX(d),v),C.ao,B.Y3(!1,u,!0,C.e4,"Delete",new B.dLY(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.r,-1),C.Y,C.Y,C.Y),C.kt,v,v,C.n),C.bd)},
$S:688}
B.dLU.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dLV.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dLW.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dLX.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dLY.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dLu.prototype={
$1(d){return d.a},
$S:z+2}
B.dLv.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5V(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FN(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oT(s.c,s.f),$async$$0)
case 4:u.hR(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLq.prototype={
$1(d){var x=this.a
x.tf(new B.dLp(x,d,this.b),"Preparing\u2026")},
$S:452}
B.dLp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hR("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.TR(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hR("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bB4(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hR("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLM.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dLN.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fLs(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FK(new B.dLC(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hR("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dLD(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dLE(s))
case 5:x=8
return A.b(r.b.i6(0,C.EC,new B.dLF()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gal(t)){s.hR("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.te(),$async$$0)
case 9:s.hR("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLC.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLz(x,d,e))},
$S:126}
B.dLz.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLD.prototype={
$1(d){return new B.aaU(this.a.a,null)},
$S:z+21}
B.dLE.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dLF.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dLH.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HE(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5J(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aYB(B.HE(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anI(new B.dLA(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fLr(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hR(q)
x=1
break}x=10
return A.b(s.te(),$async$$0)
case 10:o=J.cE(r)
p=o.eI(r,new B.dLB()).gM(0)
s.hR(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLA.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLy(x,d,e))},
$S:126}
B.dLy.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLB.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.dLR.prototype={
$1(d){return new B.Y5(this.a.a.c,null)},
$S:z+23}
B.dLQ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aY1(u.a.c,v.b),$async$$0)
case 2:t.hR(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMa.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.bX(A.bo(!0,new A.C(C.Az,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kC,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.Y3(!0,w,!1,C.mW,"My Code",new B.dM7(d),"Your personal code & QR \u2014 others send docs to you"),B.Y3(!1,w,!1,D.ZN,"Send to their Code",new B.dM8(this.a,d),"Enter someone else's 5-digit code + letter"),B.Y3(!1,w,!1,S.xY,"Import backup",new B.dM9(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.r,-1),C.Y,C.Y,C.Y),C.kt,x,x,C.n),C.bd)},
$S:688}
B.dM7.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dM8.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.byZ()},
$S:0}
B.dM9.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dMn.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HN(D.P1,x,C.ZH,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.P1).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dMl.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMm.prototype={
$0(){this.a.agB()
return null},
$S:0}
B.dMo.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*10)),e)},
$S:106}
B.dMp.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aaW(e,w,v,this.b,x.e,x.c2r(w),new B.dMh(x,w),new B.dMi(x,v,w),new B.dMj(x,w),new B.dMk(x,w),null)},
$S:z+24}
B.dMh.prototype={
$0(){this.a.adR(this.b)
return null},
$S:0}
B.dMi.prototype={
$0(){var x=this.a
return x.m(new B.dMg(x,this.b,this.c))},
$S:0}
B.dMg.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dMj.prototype={
$0(){this.a.N8(this.b)
return null},
$S:0}
B.dMk.prototype={
$0(){this.a.ago(this.b)
return null},
$S:0}
B.d_6.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*18)),e)},
$S:106}
B.d_7.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:125}
B.d_u.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:106}
B.d_t.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d_q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_r.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_o.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gal(w))return A.fK(w,C.A,x,new B.d_m(this.a),C.fQ,C.dt,!0,x,!1,x,x)
$.aT.x1$.push(new B.d_n(this.a))
return C.bH},
$S:129}
B.d_m.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_k(this.a))
return C.bH},
$S:181}
B.d_k.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_h(x))},
$S:8}
B.d_h.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_n.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_j(x))},
$S:8}
B.d_j.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_p.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_l(this.a))
return C.bH},
$S:181}
B.d_l.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_i(x))},
$S:8}
B.d_i.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_3.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_2(x,d))},
$S:1740}
B.d_2.prototype={
$0(){return this.a.f=this.b===C.u5},
$S:0}
B.d_4.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_1(x,d))},
$S:8}
B.d_1.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_5.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_0(x,d))},
$S:8}
B.d_0.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cZX.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cZY.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cZZ.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d__.prototype={
$1(d){return this.a.d.M9(0,A.dB(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d_H.prototype={
$0(){var x=this.a.a
return B.r9(x.c,x.d)},
$S:1741}
B.d_I.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d_J.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d_K.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d_L.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d_M.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d_O.prototype={
$0(){var x=this.a
x.m(new B.d_N(x))},
$S:0}
B.d_N.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fY(0)
else x.pr(0)},
$S:0}
B.d_D.prototype={
$1(d){return this.a.PH(this.b)},
$S:14}
B.d_E.prototype={
$1(d){return this.a.PG(this.b)},
$S:14}
B.d_v.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_w.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_x.prototype={
$1(d){return D.fEB},
$S:z+25}
B.d_C.prototype={
$2(d,e){if(d)B.TX()},
$S:121}
B.d_y.prototype={
$0(){return this.a.a8k(this.b)},
$S:0}
B.d_z.prototype={
$0(){return this.a.a8h(this.b)},
$S:0}
B.d_A.prototype={
$0(){return this.a.acq(this.b)},
$S:0}
B.d_B.prototype={
$0(){return this.a.a0k(this.b)},
$S:0}
B.cZW.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d_G.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pv(),$async$$0)
case 2:u.m(new B.d_F(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d_F.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5t.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.c5u.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5s.prototype={
$2(d,e){return this.bgv(d,e)},
bgv(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.TY(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fi7.prototype={
$1(d){if(d===D.a4E&&(this.a.a.a&30)===0)this.a.fK(0)},
$S:z+27}
B.fi8.prototype={
$0(){},
$S:11}
B.fiE.prototype={
bi3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f7l(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h0i(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bi3(d,e)},
$S:554}
B.fiD.prototype={
$1(d){var x=this
d.b=new B.fiC(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fiC.prototype={
$1(d){return this.bi2(d)},
bi2(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aY2(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aG(0,n,null)
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
return A.b(B.f7l(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d3(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a9(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a5S(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d3(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.axC.prototype,"gc9i","Ph",0)
x(v,"gca9","It",0)
x(v,"gc9F","xs",0)
x(v=B.aBy.prototype,"gc2l","aco",0)
x(v,"gc2m","Yu",0)
x(v,"gcox","ag5",0)
x(v=B.aBB.prototype,"gc2n","Yv",0)
x(v,"gcoy","a0E",0)
x(B.aBz.prototype,"gc2o","acp",0)
x(B.axB.prototype,"gc2t","c2u",4)
x(v=B.aBA.prototype,"gc9G","ZB",0)
x(v,"gcn9","cna",4)
x(v,"gaZJ","awz",0)
x(v,"gcq0","agv",0)
x(v,"gbKG","Wt",0)
x(v,"gc2s","DD",0)
x(B.axD.prototype,"gb2t","a0D",0)
x(B.axA.prototype,"gc2v","Yw",0)
x(v=B.axG.prototype,"gaYp","c7Y",4)
x(v,"gc2p","acs",0)
x(v=B.axE.prototype,"gcm9","a0p",0)
x(v,"gaWB","acr",0)
w(B.axz.prototype,"gav9","ava",8)
x(v=B.axF.prototype,"gccl","aej",0)
x(v,"gbKe","a95",0)
w(v,"gav9","ava",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgq,B.a8b,B.as1,B.aAb,B.aDn,B.jf,B.aaC,B.bt5,B.Ep,B.W8])
w(B.cgr,B.cgq)
w(B.b27,B.a8b)
x(A.hS,[B.cgm,B.cgn,B.cgo,B.cgl,B.cgp,B.cgs,B.cgt,B.cgu,B.cgv,B.cgw,B.cgx,B.cgy,B.cgz,B.fd_,B.fyI,B.fyK,B.fyJ,B.fyX,B.fyY,B.fek,B.d_b,B.d_d,B.d_c,B.d_g,B.fgj,B.fgN,B.c4Y,B.c54,B.c55,B.c50,B.c4Z,B.c51,B.c52,B.fyV,B.fyW,B.dMu,B.dMD,B.dMB,B.dMC,B.fac,B.few,B.fex,B.c5m,B.fez,B.fiu,B.fdd,B.fde,B.c5r,B.fDB,B.d_a,B.d_8,B.dMq,B.dLm,B.dLs,B.dLL,B.dLr,B.dLS,B.dMb,B.dMc,B.dMd,B.dLJ,B.dM0,B.dM_,B.dM1,B.dM2,B.dM3,B.dM5,B.dM6,B.dLZ,B.dLu,B.dLv,B.dLq,B.dLM,B.dLD,B.dLB,B.dLR,B.dMa,B.dMn,B.dMo,B.d_6,B.d_7,B.d_u,B.d_t,B.d_o,B.d_m,B.d_k,B.d_n,B.d_p,B.d_l,B.d_3,B.d_4,B.d_5,B.d__,B.d_D,B.d_E,B.d_x,B.c5t,B.c5u,B.fi7,B.fiD,B.fiC])
w(B.b28,B.as1)
x(A.j2,[B.fyH,B.d_e,B.d_f,B.fgh,B.fgi,B.fgM,B.dLj,B.dMs,B.dMt,B.dMr,B.dMv,B.dMw,B.dMx,B.dMy,B.dMz,B.dMA,B.dLk,B.dLl,B.fey,B.d_9,B.dLO,B.dLP,B.dLn,B.dLo,B.dLt,B.dMe,B.dMf,B.dLI,B.dLT,B.dLx,B.dLK,B.dM4,B.dLU,B.dLV,B.dLW,B.dLX,B.dLY,B.dLw,B.dLp,B.dLN,B.dLG,B.dLz,B.dLE,B.dLF,B.dLH,B.dLy,B.dLQ,B.dM7,B.dM8,B.dM9,B.dMl,B.dMm,B.dMh,B.dMi,B.dMg,B.dMj,B.dMk,B.d_q,B.d_r,B.d_s,B.d_h,B.d_j,B.d_i,B.d_2,B.d_1,B.d_0,B.cZX,B.cZY,B.cZZ,B.d_H,B.d_I,B.d_J,B.d_K,B.d_L,B.d_M,B.d_O,B.d_N,B.d_v,B.d_w,B.d_y,B.d_z,B.d_A,B.d_B,B.cZW,B.d_G,B.d_F,B.fi8])
x(A.m_,[B.aaV,B.Mz,B.a8c,B.NA,B.W7,B.Nz,B.Eq])
x(A.ag,[B.Y1,B.TM,B.TQ,B.TN,B.Y0,B.TO,B.Y2,B.Y_,B.OI,B.Y4,B.XZ,B.Y5])
x(A.ah,[B.axC,B.aBy,B.aBB,B.aBz,B.axB,B.aBA,B.axD,B.axA,B.axG,B.axE,B.axz,B.axF])
x(A.au,[B.abn,B.axy,B.bbp,B.aaW,B.aaU,B.bbq])
x(A.kc,[B.c53,B.c5_,B.c57,B.c58,B.fzz,B.dLC,B.dLA,B.dMp,B.d_C,B.c5s,B.fiE])
x(A.iN,[B.bgJ,B.bsK])})()
A.jR(b.typeUniverse,JSON.parse('{"b27":{"a8b":[]},"b28":{"as1":[]},"Y1":{"ag":[],"r":[]},"axC":{"ah":["Y1"]},"abn":{"au":[],"r":[]},"TM":{"ag":[],"r":[]},"TQ":{"ag":[],"r":[]},"aBy":{"ah":["TM"]},"aBB":{"ah":["TQ"]},"bgJ":{"iN":[]},"TN":{"ag":[],"r":[]},"aBz":{"ah":["TN"]},"Y0":{"ag":[],"r":[]},"TO":{"ag":[],"r":[]},"aaW":{"au":[],"r":[]},"Y2":{"ag":[],"r":[]},"Y_":{"ag":[],"r":[]},"OI":{"ag":[],"r":[]},"Y4":{"ag":[],"r":[]},"aaU":{"au":[],"r":[]},"XZ":{"ag":[],"r":[]},"Y5":{"ag":[],"r":[]},"axB":{"ah":["Y0"]},"bsK":{"iN":[]},"aBA":{"ah":["TO"]},"axy":{"au":[],"r":[]},"bbp":{"au":[],"r":[]},"axD":{"ah":["Y2"]},"axA":{"ah":["Y_"]},"axG":{"ah":["OI"]},"axE":{"ah":["Y4"]},"axz":{"ah":["XZ"]},"axF":{"ah":["Y5"]},"bbq":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tS"),k:x("L2()"),m:x("bp<n,n>"),F:x("qM"),g:x("ay<jf?>"),x:x("ay<~>"),V:x("O<ad>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jf>"),w:x("O<+file,name(lq,n)>"),u:x("O<cP>"),s:x("O<n>"),E:x("O<iN>"),a:x("O<dC>"),p:x("O<r>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ak<jf>"),j:x("ak<@>"),I:x("ak<G>"),M:x("bu<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iy"),e:x("i4C"),af:x("DF"),U:x("jf"),b:x("cn"),C:x("aC"),aK:x("vL"),ab:x("Ep"),br:x("as1"),v:x("W8"),N:x("n"),X:x("bm<P>"),Q:x("lB"),D:x("dC"),aw:x("cz<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bS<ak<jf>>"),aW:x("bS<dC?>"),aY:x("bS<~>"),cx:x("aaV"),b1:x("bg<ak<jf>>"),cf:x("bg<dC?>"),d4:x("bg<~>"),c4:x("aAb"),bG:x("aDn"),q:x("mQ"),B:x("p9<Ep>"),c6:x("p9<a8c>"),y:x("R"),i:x("P"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ak<jf>?"),aL:x("ak<@>?"),h:x("a4<n,@>?"),l:x("jf?"),R:x("aC?"),c:x("W8?"),d:x("+answerQr,transfer(n,ay<ak<jf>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Mz,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dC?"),cm:x("aaC?"),bk:x("aAb?"),ag:x("aDn?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aVV=new A.aA(C.aE,2,C.r,-1)
D.bQr=new A.a7(C.a3,C.a7,C.x,C.a0G,null,null)
D.aXA=new A.o(null,null,null,C.lU,null,D.bQr,C.n)
D.aZ0=new A.o(null,null,null,C.lU,null,E.G2,C.n)
D.aaB=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.abK=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.acx=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ae_=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f5e=new A.x("Your team portal",null,C.dB,null,null,null,null,null,null,null,null,null)
D.fiW=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Ir,null,null,null,null,null,null,null,null,null)
D.cYC=x([D.f5e,C.ao,D.fiW],y.p)
D.biy=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYC,null)
D.fn1=new A.x("Create your organization",null,C.ho,null,null,null,null,null,null,null,null,null)
D.f9k=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Ir,null,null,null,null,null,null,null,null,null)
D.dc6=x([D.fn1,C.ao,D.f9k],y.p)
D.biH=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dc6,null)
D.fju=new A.x("Team Member sign-in",null,C.ho,null,null,null,null,null,null,null,null,null)
D.fd_=new A.x("Enter the access code and password from your organization.",null,G.Ir,null,null,null,null,null,null,null,null,null)
D.da6=x([D.fju,C.ao,D.fd_],y.p)
D.biR=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.da6,null)
D.bou=new A.Q(16,10,16,28)
D.boC=new A.Q(16,14,16,4)
D.bpP=new A.Q(20,0,20,16)
D.bqk=new A.Q(20,8,20,16)
D.agC=new A.Q(24,22,24,20)
D.ZN=new A.a0(63394,"MaterialIcons",!1)
D.ajB=new A.a0(63515,"MaterialIcons",!1)
D.bBf=new A.a0(983813,"MaterialIcons",!1)
D.byx=new A.a0(62867,"MaterialIcons",!1)
D.bCf=new A.ae(D.byx,44,C.c,null,null,null)
D.bDk=new A.ae(C.pr,null,C.ad,null,null,null)
D.bEH=new A.ae(C.iO,18,null,null,null,null)
D.bGn=new A.ae(D.ZN,26,C.c,null,null,null)
D.bGT=new A.ae(C.Bb,null,null,null,null,null)
D.bHr=new A.ae(C.y_,null,null,null,null,null)
D.bIz=new A.ae(W.MS,null,null,null,null,null)
D.bIT=new A.ae(C.hi,16,null,null,null,null)
D.bMi=new A.ae(C.qQ,16,null,null,null,null)
D.bCx=new A.ae(C.mW,null,null,null,null,null)
D.bN8=new A.e_(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bHZ=new A.ae(C.Fj,null,null,null,null,null)
D.bNd=new A.e_(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bHZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCS=new A.ae(H.FQ,null,null,null,null,null)
D.bNo=new A.e_(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.czZ=x([C.f6,C.aZ,C.aE],y.O)
D.bSi=new A.a7(C.ax,C.aD,C.x,D.czZ,null,null)
D.czt=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.P1=x([C.f6,C.aE],y.O)
D.Pg=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mk=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d58=x([C.p7,C.aE],y.O)
D.dWs={iceServers:0}
D.aEk={urls:0}
D.dfH=new A.bp(D.aEk,["stun:stun.l.google.com:19302"],y.m)
D.dfG=new A.bp(D.aEk,["stun:stun1.l.google.com:19302"],y.m)
D.cPr=x([D.dfH,D.dfG],A.ax("O<a4<n,n>>"))
D.df1=new A.bp(D.dWs,[D.cPr],A.ax("bp<n,@>"))
D.H5=new B.Mz(0,"lanDirect")
D.Qz=new B.Mz(1,"cloudStash")
D.dqu=new B.Mz(2,"inlineInstant")
D.QA=new B.Mz(3,"webrtcLink")
D.yI=new B.Mz(4,"videoCloud")
D.fiV=new A.x("Receive file",null,C.nc,null,null,null,null,null,null,null,null,null)
D.cpC=x([E.alj,C.ab,D.fiV],y.p)
D.eBU=new A.co(C.aQ,C.ba,C.j,C.m,null,C.p,null,0,D.cpC,null)
D.e11=new A.C(C.cf,D.eBU,null)
D.eXw=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1j,null,null,null)
D.f5M=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eXw,null,C.L,null,null,null,null,null,null,null)
D.e0l=new A.C(C.AF,D.f5M,null)
D.b2e=new A.cq(C.A,null,null,D.e0l,null)
D.e6z=new A.cK(0,null,0,28,null,null,D.b2e,null)
D.e6R=new B.a8c(0,"RTCDataChannelConnecting")
D.aJE=new B.a8c(1,"RTCDataChannelOpen")
D.aJF=new B.a8c(3,"RTCDataChannelClosed")
D.e6S=new B.Eq(0,"RTCIceConnectionStateNew")
D.e6T=new B.Eq(1,"RTCIceConnectionStateChecking")
D.e6U=new B.Eq(2,"RTCIceConnectionStateCompleted")
D.e6V=new B.Eq(3,"RTCIceConnectionStateConnected")
D.e6W=new B.Eq(4,"RTCIceConnectionStateCount")
D.e6X=new B.Eq(5,"RTCIceConnectionStateFailed")
D.e6Y=new B.Eq(6,"RTCIceConnectionStateDisconnected")
D.aJG=new B.Eq(7,"RTCIceConnectionStateClosed")
D.aJH=new B.W7(0,"RTCIceGatheringStateNew")
D.e6Z=new B.W7(1,"RTCIceGatheringStateGathering")
D.a4E=new B.W7(2,"RTCIceGatheringStateComplete")
D.a4F=new B.Nz(0,"RTCPeerConnectionStateClosed")
D.aJI=new B.Nz(1,"RTCPeerConnectionStateFailed")
D.aJJ=new B.Nz(2,"RTCPeerConnectionStateDisconnected")
D.aJK=new B.Nz(3,"RTCPeerConnectionStateNew")
D.aJL=new B.Nz(4,"RTCPeerConnectionStateConnecting")
D.aJM=new B.Nz(5,"RTCPeerConnectionStateConnected")
D.e7_=new B.NA(0,"RTCSignalingStateStable")
D.e70=new B.NA(1,"RTCSignalingStateHaveLocalOffer")
D.e71=new B.NA(2,"RTCSignalingStateHaveRemoteOffer")
D.e72=new B.NA(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e73=new B.NA(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aJN=new B.NA(5,"RTCSignalingStateClosed")
D.eFS=new A.at(160,48)
D.b3n=new A.fh(2,null,null,null,null,C.aE,null,null,null,null)
D.eHl=new A.a6(16,16,D.b3n,null)
D.f8M=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eIM=new A.b1(D.f8M,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.ffV=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eIP=new A.b1(D.ffV,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fo2=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eIW=new A.b1(D.fo2,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f8p=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eJl=new A.b1(D.f8p,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fjD=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aMm=new A.b1(D.fjD,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fkY=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eJO=new A.b1(D.fkY,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpp=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eK2=new A.b1(D.fpp,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fnu=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eK7=new A.b1(D.fnu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.foF=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eKT=new A.b1(D.foF,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f76=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eLp=new A.b1(D.f76,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fhF=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eLK=new A.b1(D.fhF,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.faQ=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eMf=new A.b1(D.faQ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpv=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMj=new A.b1(D.fpv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f7m=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eMp=new A.b1(D.f7m,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f65=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eME=new A.b1(D.f65,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f36=new A.x("NGMY DOC SHARE",null,C.aND,null,null,null,null,null,null,null,null,null)
D.f4m=new A.x("Show this to sender",null,C.kp,null,null,null,null,null,null,null,null,null)
D.f5l=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new A.x("Organization settings",null,C.ct,null,null,null,null,null,null,null,null,null)
D.fa2=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fb_=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fbt=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.feb=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new A.x("Send to their Doc Share",null,C.na,null,null,null,null,null,null,null,null,null)
D.fhb=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fhu=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fhZ=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fip=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.flp=new A.x("Share files & videos\nwith a scan.",null,C.aNE,null,null,null,null,null,null,null,null,null)
D.flI=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fEB=new B.XZ(null)
D.a7H=new B.aaV(0,"docShare")
D.a7I=new B.aaV(1,"gate")
D.Tq=new B.aaV(2,"gateNoIndividual")})();(function staticFields(){$.aM0=null
$.f59=function(){var x=y.N
return A.V(x,x)}()
$.Fx=A.V(y.N,y.D)
$.aeT=A.V(y.N,A.ax("lq"))
$.PY=A.V(y.N,y.D)
$.f5H=A.V(y.N,A.ax("aaC"))
$.c5l=A.V(y.S,A.ax("bt5"))
$.h0h=1
$.hNp=null
$.hNo=null
$.hEY=null
$.fQu=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i56","hhj",()=>new B.cgr())
x($,"i31","fU5",()=>C.a.t(A.bt(A.bt(A.bt(A.G6(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["XqBVVTjAK1Jl2zkBGbxYJU3a97c="]=a.current})($__dart_deferred_initializers__);