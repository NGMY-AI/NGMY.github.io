((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cl3:function cl3(){},
hJW(d){var x=null,w=new B.b3S(d,D.ekt,new A.pq(x,x,y.c6),new A.pq(x,x,y.B))
w.byg(d)
return w},
b3S:function b3S(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ckZ:function ckZ(d){this.a=d},
cl_:function cl_(d){this.a=d},
cl0:function cl0(d){this.a=d},
ckY:function ckY(d){this.a=d},
cl1:function cl1(d){this.a=d},
hJX(d,e){var x=y.N
x=new B.b3T(d,e,A.U(x,y.e),A.U(x,y.z))
x.byh(d,e)
return x},
b3T:function b3T(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cl4:function cl4(d){this.a=d},
cl5:function cl5(d){this.a=d},
cl6:function cl6(d){this.a=d},
cl7:function cl7(d){this.a=d},
cl8:function cl8(d){this.a=d},
cl9:function cl9(d){this.a=d},
cla:function cla(d){this.a=d},
clb:function clb(d){this.a=d},
h_q(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yW.M1(x,"ngmy_doc_share_v1",new B.fke(),1)},
hQw(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.A8(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cF.aL(d)
return x}catch(w){return v}return v},
R9(d,e){return B.i4R(d,e)},
i4R(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNr
x=7
return A.b(o==null?$.aNr=B.h_q():o,$async$R9)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mM(s,"blobs","readwrite")
C.iU.mj(J.mL(q,"blobs"),r,d)
x=8
return A.b(J.pA(q),$async$R9)
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
return A.i($async$R9,w)},
R8(d){return B.i4Q(d)},
i4Q(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNr
x=7
return A.b(o==null?$.aNr=B.h_q():o,$async$R8)
case 7:s=f
r=J.mM(s,"blobs","readonly")
x=8
return A.b(C.iU.zA(J.mL(r,"blobs"),d),$async$R8)
case 8:q=f
x=9
return A.b(J.pA(r),$async$R8)
case 9:o=B.hQw(q)
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
return A.i($async$R8,w)},
agO(d){return B.i4P(d)},
i4P(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNr
x=7
return A.b(p==null?$.aNr=B.h_q():p,$async$agO)
case 7:s=f
r=J.mM(s,"blobs","readwrite")
C.iU.FS(J.mL(r,"blobs"),d)
x=8
return A.b(J.pA(r),$async$agO)
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
return A.i($async$agO,w)},
fke:function fke(){},
hSQ(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bob(w,v))}return u},
hpF(d,e){var x,w={},v=A.aVU("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fIa(w,v,e)
C.wj.yv(v,"change",new B.fIc(w,v,!1))
C.wj.yv(v,"cancel",new B.fIb(w))
$.eR.mp()
v.click()
A.bN(C.ahp,new B.fI9(w),y.H)},
fIa:function fIa(d,e,f){this.a=d
this.b=e
this.c=f},
fIc:function fIc(d,e,f){this.a=d
this.b=e
this.c=f},
fIb:function fIb(d){this.a=d},
fI9:function fI9(d){this.a=d},
D_(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$D_=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd7()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTJ()?3:4
break
case 3:x=5
return A.b(B.hkK(e,d,s,!0,!1,f,g,h,!1,i),$async$D_)
case 5:x=1
break
case 4:x=6
return A.b(B.QP(d,s,f,g,h,i),$async$D_)
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
return A.b(B.Iu(s,d),$async$D_)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.ffQ(s,d),$async$D_)
case 14:x=12
return A.b(r.hkK(q,p,o,n,m,l,k,j,a1,i),$async$D_)
case 12:x=8
break
case 10:x=15
return A.b(A.a3(e,!1).cg(A.e_(new B.fIp(s,i,d,f,g,h),!1,null,y.H)),$async$D_)
case 15:x=8
break
case 11:x=16
return A.b(A.a3(e,!1).cg(A.e_(new B.fIq(s,i,d,f,g,h),!1,null,y.H)),$async$D_)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$D_,w)},
QP(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QP=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZC(e),$async$QP)
case 3:u=k
x=4
return A.b(B.apb(d,e,!1),$async$QP)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Iu(e,d),$async$QP)
case 7:if(k){v=D.a9P
x=1
break}x=8
return A.b(B.US(e),$async$QP)
case 8:v=t?D.UW:D.a9Q
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZA(d,e)){v=D.a9P
x=1
break}x=11
return A.b(B.US(e),$async$QP)
case 11:v=t?D.UW:D.a9Q
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fVx(d,e)){v=D.a9P
x=1
break}x=14
return A.b(B.US(e),$async$QP)
case 14:v=D.UW
x=1
break
case 13:v=t?D.UW:D.a9Q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QP,w)},
ffQ(d,e){var x=0,w=A.j(y.y),v
var $async$ffQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZA(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZC(d),$async$ffQ)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffQ,w)},
hkK(d,e,f,g,h,i,j,k,l,m){return A.a3(d,!1).cg(A.e_(new B.fmr(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hfQ(d,e,f,g,h,i,j){return new B.YZ(e,j,d,g,h,i,f,null)},
fon(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fon=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.aq(C.at,u)
s=new A.aq(C.at,u)
x=3
return A.b(A.bR(C.K,null,new B.foq(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fon)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fon,w)},
foT(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$foT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.aq(C.at,u)
s=new A.aq(C.at,u)
r=new A.aq(C.at,u)
x=3
return A.b(A.bR(C.K,null,new B.foV(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$foT)
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
return A.i($async$foT,w)},
h_z(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.X),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fAL(d,e){var x=0,w=A.j(y.H),v
var $async$fAL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.US(e),$async$fAL)
case 3:if(d.e==null){x=1
break}A.a3(d,!1).eG()
case 1:return A.h(v,w)}})
return A.i($async$fAL,w)},
fIp:function fIp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIq:function fIq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac4:function ac4(d,e){this.a=d
this.b=e},
fmr:function fmr(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YZ:function YZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azf:function azf(){this.c=this.a=this.d=null},
d4o:function d4o(d,e){this.a=d
this.b=e},
d4l:function d4l(d){this.a=d},
d4n:function d4n(d){this.a=d},
d4m:function d4m(d){this.a=d},
d4q:function d4q(){},
d4p:function d4p(d){this.a=d},
acw:function acw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBO:function aBO(d,e){this.a=d
this.b=e},
aEU:function aEU(d,e,f){this.a=d
this.b=e
this.c=f},
foq:function foq(d,e,f){this.a=d
this.b=e
this.c=f},
foo:function foo(d){this.a=d},
fop:function fop(d,e,f){this.a=d
this.b=e
this.c=f},
foV:function foV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foU:function foU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c9y(d,e,f,g,h){return B.hES(d,e,f,g,h)},
hES(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c9y=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gK(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iO(r.dE(d,new B.c9z(s,e,h,g,f,q),y.g),y.l),$async$c9y)
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
return A.i($async$c9y,w)},
aZx(d,e,f,g,h){return B.hET(d,e,f,g,h)},
hET(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZx=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auu("GET",d)
o=A.fRU()
if(o==null)o=new A.LM(A.a([],y.W))
x=7
return A.b(o.f3(0,s).d9(0,C.Fy),$async$aZx)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cn(),$async$aZx)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BG(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZx,w)},
aZw(d){return B.hEQ(d)},
hEQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vj(d,null).d9(0,C.o0),$async$aZw)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aM(0,A.lY(A.lW(p.e)).cz(0,p.w),null)
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
return A.i($async$aZw,w)},
c9x(d){return B.hER(d)},
hER(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c9x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vj(d,null).d9(0,C.pZ),$async$c9x)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lY(A.lW(q.e)).cz(0,q.w)
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
return A.i($async$c9x,w)},
c9z:function c9z(d,e,f,g,h,i){var _=this
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
Is(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aM(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hEY(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Is(C.a.b2(u,v.length))}return null},
hEZ(d){var x=B.Is(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hEU(){var x,w=$.px(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.ar(10)
return C.d.hs(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ar(24)]},
a6J(d){return B.hEV(d)},
hEV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bJ),$async$a6J)
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
return A.i($async$a6J,w)},
a6K(d,e){return B.hEW(d,e)},
hEW(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6K=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a6K)
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
return A.i($async$a6K,w)},
BF(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BF)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Is(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6L(r),$async$BF)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6J("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BF)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.Is(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BF)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hEU()
x=14
return A.b(B.a6L(m),$async$BF)
case 14:if(f!=null){x=12
break}l=new A.T(Date.now(),0,!1).a7().ac()
x=15
return A.b(B.a6K("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BF)
case 15:k=f
x=16
return A.b(B.a6K("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BF)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BF)
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
return A.i($async$BF,w)},
a6L(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Is(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6J("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6L)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
a6M(d,e,f,g){return B.hF_(d,e,f,g)},
hF_(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6M=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gal(d)){v=!1
x=1
break}r=B.Is(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6L(r),$async$a6M)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cM(d,0,new B.c9F())>1048576||g.b3(d,new B.c9G())){v=B.Et(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a6X("myCode",d,a0),$async$a6M)
case 4:u=a3
try{t=C.S.aM(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gK(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Et(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZF(u,g.gK(d),a0),$async$a6M)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.px().ar(9999)
k=n.b
j=g.gK(d)
i=y.N
h=g.dE(d,new B.c9H(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZy(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.T(Date.now(),0,!1).a7().ac(),"status","pending"],i,y.z),q),$async$a6M)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gK(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6M,w)},
Et(d,e,f,g,h){return B.hEX(d,e,f,g,h)},
hEX(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Et=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$Et)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cM(a6,0,new B.c9B())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.px().ar(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.ar(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aM(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Iw(a9,q)
a0=new A.Kl(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Et)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oZ(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aal(a1.a,a4,"media",a1.d,a2).x6(m,n,new A.DK(!0,q.c)),$async$Et)
case 12:J.ca(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$Et)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPY(r),$async$Et)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gK(a6)
a1=l.dE(a6,new B.c9C(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZy(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.T(Date.now(),0,!1).a7().ac(),"status","pending"],e,d),a8),$async$Et)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPY(r),$async$Et)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gK(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Et,w)},
aZy(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6J(t),$async$aZy)
case 3:s=g
r=y.aL.a(J.r(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c9A(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6K(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZy,w)},
Np(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Np=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6J("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Np)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
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
return A.b(B.aZz(k,a0),$async$Np)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZE(h),$async$Np)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UZ(g,a0),$async$Np)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a7().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.Z(r,new B.c9D(),q),n)
d=A.C(new A.Z(r,new B.c9E(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d0(d,0,A.dB(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6K("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$Np)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Np,w)},
aZz(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a4(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.k.O(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.i8D(k,j)
C.d.v(s,i)
x=5
return A.b(B.CY(l,m,"Received via My Code",t,e,i),$async$aZz)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPY(s),$async$aZz)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZz,w)},
c9F:function c9F(){},
c9G:function c9G(){},
c9H:function c9H(){},
c9B:function c9B(){},
c9C:function c9C(){},
c9A:function c9A(){},
c9D:function c9D(){},
c9E:function c9E(){},
fIm(d,e){var x=0,w=A.j(y.H)
var $async$fIm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a3(d,!1).cg(A.e_(new B.fIn(e),!1,null,y.H)),$async$fIm)
case 2:return A.h(null,w)}})
return A.i($async$fIm,w)},
bCN(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCN=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a3(d,!1).cg(A.e_(new B.fIo(g,e,f),!1,null,y.y)),$async$bCN)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCN,w)},
fIn:function fIn(d){this.a=d},
fIo:function fIo(d,e,f){this.a=d
this.b=e
this.c=f},
UP:function UP(d,e){this.c=d
this.a=e},
aD9:function aD9(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
UT:function UT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDc:function aDc(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dRd:function dRd(d){this.a=d},
dRe:function dRe(d){this.a=d},
dRf:function dRf(d){this.a=d},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dRh:function dRh(d){this.a=d},
dRi:function dRi(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRl:function dRl(d){this.a=d},
dRo:function dRo(){},
dRm:function dRm(d){this.a=d},
dRn:function dRn(d,e){this.a=d
this.b=e},
biv:function biv(){},
UQ:function UQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDa:function aDa(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dQ5:function dQ5(d){this.a=d},
dQ6:function dQ6(d){this.a=d},
fVy(d){var x=d.hY
if(x>=0)return C.o.O(x)
return 10},
hF1(d){var x=d.kO
if(x>=0)return x
return 4.99},
hF0(d){var x=d.lq,w=y.N
w=x.ja(x,new B.c9J(),w,w)
return w},
haT(d){var x=d.kP,w=y.N
w=x.ja(x,new B.c9K(),w,w)
return w},
aZC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aZC)
case 7:s=f
r=A.u(p)
r=A.aU(J.r(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aZC,w)},
a6O(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a6O)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6O)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6O,w)},
US(d){var x=0,w=A.j(y.H),v,u
var $async$US=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$US)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$US)
case 3:case 1:return A.h(v,w)}})
return A.i($async$US,w)},
fVx(d,e){var x,w,v
if(B.hF1(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hF0(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.T(Date.now(),0,!1))},
aZA(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.haT(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.T(Date.now(),0,!1))},
haU(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.haT(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.T(Date.now(),0,!1))?v:new A.T(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a7().ac())
d.kP=w},
apc(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apc)
case 7:s=f
r=A.u(p)
r=A.ev(J.r(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apc,w)},
apd(d){var x=0,w=A.j(y.H),v,u,t
var $async$apd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apc(d),$async$apd)
case 3:u=f
x=5
return A.b(A.az(),$async$apd)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$apd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apd,w)},
apb(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fVy(d)
if(u<=0){v=!1
x=1
break}if(B.fVx(d,e)){v=!1
x=1
break}x=3
return A.b(B.apc(e),$async$apb)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apb,w)},
aZB(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Iu(e,d),$async$aZB)
case 3:if(g){v=-1
x=1
break}u=B.fVy(d)
if(u<=0){v=-1
x=1
break}if(B.fVx(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apc(e),$async$aZB)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZB,w)},
c9M(d,e,f){var x=0,w=A.j(y.y),v
var $async$c9M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Iu(e,d),$async$c9M)
case 3:if(h){v=!1
x=1
break}v=B.apb(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9M,w)},
c9L(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c9L=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
x=3
return A.b(B.c9M(d,u,i.gTJ()),$async$c9L)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9L,w)},
a6N(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6N=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
if(i.gTJ()){v=!0
x=1
break}if(B.aZA(d,u)){v=!0
x=1
break}x=5
return A.b(A.ln(u,C.Sj),$async$a6N)
case 5:x=k?3:4
break
case 3:B.haU(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6N)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kX(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Sj,"Doc Share for Organizations"),$async$a6N)
case 7:if(!k){v=!1
x=1
break}B.haU(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6N)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
c9J:function c9J(){},
c9K:function c9K(){},
fJ6(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fJ6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fJ6)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fcs.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hR([r],e.c))
s.toString
$.fcs.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJ6,w)},
iaW(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fcs.bs($.fcs,new B.fJ8(d))},
fJ8:function fJ8(d){this.a=d},
fdU(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fdU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aM(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hR([d],f))
s.toString
u=A.nb(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.js,null,y.H),$async$fdU)
case 3:C.Ak.fj(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eR.mp()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdU,w)},
afE(d,e,f){var x=0,w=A.j(y.H),v
var $async$afE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fd_.n(0,d,new B.abM(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$afE)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.G(["parts",e,"size",f],v,y.C),null)),$async$afE)
case 2:return A.h(null,w)}})
return A.i($async$afE,w)},
afy(d){return B.hUH(d)},
hUH(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fd_.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afy)
case 3:u=j.aU(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aM(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fhp(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.r(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.abM(r)
$.fd_.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afy,w)},
QF(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$QF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.Gf.n(0,d,u)
x=3
return A.b(B.R9(d,u),$async$QF)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QF,w)},
aNO(d){return B.hUF(d)},
hUF(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gf.h(0,d)
if(n!=null&&!C.aH.gal(n)){v=n
x=1
break}x=3
return A.b(B.R8(d),$async$aNO)
case 3:p=f
if(p!=null&&!C.aH.gal(p)){$.Gf.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aNO)
case 4:s=f
r=A.aU(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aL(r)
x=!J.cn(q)?9:10
break
case 9:B.QF(d,q)
x=11
return A.b(J.hy(s,d),$async$aNO)
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
return A.i($async$aNO,w)},
hQT(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cf(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cf(A.A8(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cf(d)),y.K)
return A.f8(null,y.K)},
a1t(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bA,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fL(r,"loadend",new B.fmD(r,t),!1,s)
A.fL(r,"error",new B.fmE(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ir(0,C.Ms,new B.fmF())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1t,w)},
aO7(d,e,f){return B.hWX(d,e,f)},
hWX(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aO7=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1t(i),$async$aO7)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.R9(o,p),$async$aO7)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ca(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afE(k,j,s),$async$aO7)
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
return A.i($async$aO7,w)},
aO6(d,e,f){return B.hWW(d,e,f)},
hWW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aO6=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aO7(d,e,f),$async$aO6)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1t(f),$async$aO6)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gf.n(0,s,r)
$.QW.n(0,s,r)
x=11
return A.b(B.QF(s,r),$async$aO6)
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
return A.i($async$aO6,w)},
BG(d,e,f,g,h,i){return B.hFa(d,e,f,g,h,i)},
hFa(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BG=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.ar(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jm(p,q,o,n,new A.T(Date.now(),0,!1).a7().ac(),a0,f,B.aZI(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.QF(s,d),$async$BG)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BG)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cJ.gct().aL(d)),$async$BG)
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
return A.b(B.AJ(e),$async$BG)
case 12:j=a2
J.ca(j,m)
x=13
return A.b(B.Gq(e,j),$async$BG)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BG,w)},
UU(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UU=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AJ(d),$async$UU)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.ar(99999)
n=p.b
l=o.type
l.toString
k=B.haW(n,null,l)
l=o.size
l.toString
j=new A.T(Date.now(),0,!1).a7().ac()
i=new B.jm(m,n,k,l,j,"From folder",null,B.aZI(),null)
$.ag7.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1t(o),$async$UU)
case 7:g=a1
x=g!=null&&!C.aH.gal(g)?8:10
break
case 8:$.Gf.n(0,h,g)
$.QW.n(0,h,g)
B.QF(h,g)
x=9
break
case 10:x=11
return A.b(B.aO6(d,m,o),$async$UU)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gq(d,t),$async$UU)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UU,w)},
fVC(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fVC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.haW(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Iv(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gal(s)){v=B.BG(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVC,w)},
Iv(d,e,f,g,h,i){return B.hF9(d,e,f,g,h,i)},
hF9(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Iv=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.ar(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kl(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Iv)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cn(m)){x=6
break}J.h4(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.RI(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.R9(k,l),$async$Iv)
case 11:J.ca(q,k);++p
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
return A.b(j.a4(0),$async$Iv)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.R9(k,new Uint8Array(A.cf(n))),$async$Iv)
case 15:J.ca(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afE(r,q,g),$async$Iv)
case 16:f=new B.jm(i,a1,a0,g,new A.T(Date.now(),0,!1).a7().ac(),a2,null,B.aZI(),null)
x=17
return A.b(B.AJ(d),$async$Iv)
case 17:e=a6
J.ca(e,f)
x=18
return A.b(B.Gq(d,e),$async$Iv)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iv,w)},
UW(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UW=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ag7.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1t(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afy(s),$async$UW)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.R8(u[o]),$async$UW)
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
v=A.A8(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QW.h(0,s)
if(i==null)i=$.Gf.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ru(d,e),$async$UW)
case 12:i=a0
if(i!=null&&!C.aH.gal(i))$.QW.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A8(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UW,w)},
haW(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ru(d,e){return B.hFb(d,e)},
hFb(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ru=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QW.h(0,f)
if(e==null)e=$.Gf.h(0,f)
if(e!=null&&!C.aH.gal(e)){v=e
x=1
break}s=$.ag7.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1t(s),$async$ru)
case 9:r=a3
if(r!=null&&!C.aH.gal(r)){$.Gf.n(0,f,r)
$.QW.n(0,f,r)
B.QF(f,r)
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
return A.b(B.afy(f),$async$ru)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ay2(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.R8(g[l]),$async$ru)
case 16:k=a3
if(k!=null&&!C.aH.gal(k))n.M(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ao6()
if(!C.aH.gal(r)){$.Gf.n(0,f,r)
$.QW.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNO(f),$async$ru)
case 17:j=a3
if(j!=null&&!C.aH.gal(j)){$.QW.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UW(a0,a1,0,g),$async$ru)
case 20:i=a3
if(i!=null&&!C.aH.gal(i)){h=new Uint8Array(A.cf(i))
$.Gf.n(0,f,h)
$.QW.n(0,f,h)
B.QF(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ru,w)},
hFe(d){var x,w,v=$.ag7.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hFf(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hR([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hFc(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apj(d,e,f,g,h){return B.hFd(d,e,f,g,h)},
hFd(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apj=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ag7.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1t(s),$async$apj)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ru(g,e),$async$apj)
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
return A.b(n.ik(d).x6(h,r,new A.DK(!0,e.c)),$async$apj)
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
return A.i($async$apj,w)},
haY(d,e,f,g,h){var x,w,v,u,t=$.haX
$.haX=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.ar(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c9X.n(0,t,new B.buX(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ay2(u)))
return t},
fVD(d){var x=0,w=A.j(y.H)
var $async$fVD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVD,w)},
Iw(d,e){var $async$Iw=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ag7.h(0,h)
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
return A.qb(B.UW(d,e,p,o<q?o:q),$async$Iw,w)
case 8:n=a1
x=n!=null&&!C.aH.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qb(A.FM(n),$async$Iw,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qb(B.afy("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Iw,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qb(B.R8(h[l]),$async$Iw,w)
case 18:k=a1
x=k!=null&&!C.aH.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qb(A.FM(k),$async$Iw,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qb(B.ru(d,e),$async$Iw,w)
case 22:j=a1
x=j!=null&&!C.aH.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qb(A.FM(A.A8(j,p,o<i?o:i)),$async$Iw,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qb(null,0,w)
case 2:return A.qb(t.at(-1),1,w)}})
var x=0,w=A.hjD($async$Iw,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hls(w)},
aZK(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c9X.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gK(u)>=1048576)){x=4
break}x=5
return A.b(t.a4D(),$async$aZK)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZK,w)},
UV(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9X.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4D(),$async$UV)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afE(r.c,u,r.z),$async$UV)
case 4:t=new B.jm(r.b,r.d,r.e,r.z,new A.T(Date.now(),0,!1).a7().ac(),r.f,r.r,B.aZI(),null)
u=r.a
x=5
return A.b(B.AJ(u),$async$UV)
case 5:s=f
J.ca(s,t)
x=6
return A.b(B.Gq(u,s),$async$UV)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UV,w)},
a6U(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9X.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agO(u[s]),$async$a6U)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6U,w)},
c9Z(d,e,f){var x=0,w=A.j(y.H)
var $async$c9Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzS(d,e,f),$async$c9Z)
case 2:return A.h(null,w)}})
return A.i($async$c9Z,w)},
ca_(d,e,f){var x=0,w=A.j(y.H)
var $async$ca_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzT(d,e,f),$async$ca_)
case 2:return A.h(null,w)}})
return A.i($async$ca_,w)},
Eu(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Eu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AJ(d),$async$Eu)
case 2:p=g
J.nu(p,new B.c9Y(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gf.W(0,v)
$.ag7.W(0,e)
x=3
return A.b(B.afy(v),$async$Eu)
case 3:u=g
$.fd_.W(0,v)
x=4
return A.b(A.az(),$async$Eu)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Eu)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Eu)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agO(s[q]),$async$Eu)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agO(v),$async$Eu)
case 13:x=14
return A.b(B.Gq(d,p),$async$Eu)
case 14:return A.h(null,w)}})
return A.i($async$Eu,w)},
aZJ(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ru(d,e),$async$aZJ)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fdU(t,A.aM(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZJ,w)},
AJ(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AJ)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aM(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fmG(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AJ,w)},
Gq(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Gq)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fqO(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gq)
case 3:return A.h(null,w)}})
return A.i($async$Gq,w)},
bzS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AJ(d),$async$bzS)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.fl5(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDQ(f))
x=4
return A.b(B.Gq(d,u),$async$bzS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzS,w)},
bzT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AJ(d),$async$bzT)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.fl6(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIL(f))
x=4
return A.b(B.Gq(d,u),$async$bzT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzT,w)},
abM:function abM(d){this.a=d},
fhp:function fhp(){},
fmD:function fmD(d,e){this.a=d
this.b=e},
fmE:function fmE(d){this.a=d},
fmF:function fmF(){},
c9Y:function c9Y(d){this.a=d},
buX:function buX(d,e,f,g,h,i,j,k,l){var _=this
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
fmG:function fmG(){},
fqO:function fqO(){},
fl5:function fl5(d){this.a=d},
fl6:function fl6(d){this.a=d},
a6V(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.ca2())?3:4
break
case 3:x=5
return A.b(B.aZL(d,e),$async$a6V)
case 5:u=g
if(u!=null){t=u.c
B.Nr(d,u.b,e,t)}v=u
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
return A.b(B.aZG(s),$async$a6V)
case 10:case 9:if(g){v=new A.Q1(1,D.RX,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UX(d,e),$async$a6V)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.V1(!0,!0,d,e),$async$a6V)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nr(d,D.zx,e,t)
v=new A.Q1(p,D.zx,t)
x=1
break}v=B.ca1(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6V,w)},
UX(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6X(null,d,e),$async$UX)
case 3:p=g
try{u=C.S.aM(0,p,null)
t=y.f.b(u)?J.r(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZF(p,d.length,e),$async$UX)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ca_(e,C.d.gH(d).a,r.b),$async$UX)
case 7:case 6:q=r.a
x=8
return A.b(B.Nr(d,D.RX,e,q),$async$UX)
case 8:v=new A.Q1(d.length,D.RX,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UX,w)},
UY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mu(D.mF)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6W(d,e),$async$UY)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c9V(s,d,e,t),$async$UY)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZG(t),$async$UY)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ru(e,d),$async$UY)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UX(A.a([d],y.r),e),$async$UY)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UY,w)},
V_(){var x=0,w=A.j(y.H)
var $async$V_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fVw(),$async$V_)
case 2:x=3
return A.b(B.aQe(),$async$V_)
case 3:return A.h(null,w)}})
return A.i($async$V_,w)},
a6W(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZI()
x=3
return A.b(B.c9Z(e,d.a,u),$async$a6W)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
Nr(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RX&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6W(p,f),$async$Nr)
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
return A.b(B.c9U(o,p,u,f),$async$Nr)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c9V(o,p,f,t),$async$Nr)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c9T(o,u,p,f),$async$Nr)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nr,w)},
aZL(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ca0(e,d),$async$aZL)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.V1(!1,!0,d,e),$async$aZL)
case 4:u=g
if(u!=null){t=u.b
v=new A.Q1(u.a,D.zx,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZL,w)},
ca0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ca0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UW(d,s,0,1),$async$ca0)
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
return A.i($async$ca0,w)},
ca1(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ca1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6X(null,d,e),$async$ca1)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.haV(u)
if(t.length>800){v=null
x=1
break}v=new A.Q1(d.length,D.dDu,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ca1,w)},
apk(d,e,f){return B.hFi(d,e,f)},
hFi(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apk=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.na(g,1)
x=B.fVB(g)?3:4
break
case 3:x=5
return A.b(B.c9W(g),$async$apk)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.na(g,13))
try{k=B.Ev(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.na(g,13))
u=9
x=12
return A.b(B.aZE(q),$async$apk)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UZ(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.fVA(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UZ(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Ix(C.a.i(J.na(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Ix(C.a.i(J.na(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ix(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UZ(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apk,w)},
Ix(d,e,f){return B.hFg(d,e,f)},
hFg(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ix=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aM(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aM(g,f,"")}else j=e
s=j
r=A.cF(A.u(s)+"/manifest.json",0,null)
q=A.cF(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZw(r),$async$Ix)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZw(A.cF(s,0,null)),$async$Ix)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c9y(o,r,a1,n,a2),$async$Ix)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c9x(q),$async$Ix)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UZ(l,a2),$async$Ix)
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
return A.i($async$Ix,w)},
a6X(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6X=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.ru(f,r),$async$a6X)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aL(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.T(Date.now(),0,!1).a7().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6X,w)},
UZ(d,e){return B.hFh(d,e)},
hFh(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UZ=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aM(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.r(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.r(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.r(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.r(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BG(i,a3,d,k,l,o),$async$UZ)
case 9:h=a5
if(h!=null)J.ca(n,h)
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
return A.i($async$UZ,w)},
Nq:function Nq(d,e){this.a=d
this.b=e},
ca2:function ca2(){},
a12(d){var x=A.P(d).ax.a===C.I,w=x?D.af1:D.acS,v=x?D.agv:C.c,u=x?C.aP:C.M,t=x?C.bK:C.ak,s=x?D.ae6:C.aL
return new A.aG8([w,s,v,u,t,x?C.fd:C.bN])},
hqs(d,e){var x=e?C.w.j(0.72):C.aW
return A.cd(null,x,!0,null,new B.fNe(e),d,null,!0,!0,y.N)},
c9I(d,e,f,g,h,i,j,k,l){return new B.UR(e,l,d,f,k,j,g,h,i,null)},
Z0(d,e,f,g,h,i,j){return new B.bde(g,h,j,e,i,d,f,null)},
fNe:function fNe(d){this.a=d},
YY:function YY(d,e){this.c=d
this.a=e},
aze:function aze(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d4k:function d4k(d){this.a=d},
d4i:function d4i(d){this.a=d},
d4j:function d4j(d){this.a=d},
buB:function buB(){},
UR:function UR(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDb:function aDb(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dRb:function dRb(d){this.a=d},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQA:function dQA(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d,e,f){this.a=d
this.b=e
this.c=f},
dQ7:function dQ7(d){this.a=d},
dQ9:function dQ9(d,e){this.a=d
this.b=e},
dQe:function dQe(d,e,f){this.a=d
this.b=e
this.c=f},
dQd:function dQd(d){this.a=d},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR0:function dR0(d){this.a=d},
dQw:function dQw(d,e,f){this.a=d
this.b=e
this.c=f},
dQt:function dQt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQc:function dQc(d){this.a=d},
dQE:function dQE(d){this.a=d},
dQD:function dQD(){},
dQi:function dQi(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dQu:function dQu(d,e){this.a=d
this.b=e},
dQv:function dQv(d,e){this.a=d
this.b=e},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQM:function dQM(d){this.a=d},
dQL:function dQL(d){this.a=d},
dQN:function dQN(){},
dQO:function dQO(){},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQR:function dQR(){},
dQS:function dQS(d){this.a=d},
dQK:function dQK(d,e){this.a=d
this.b=e},
dQF:function dQF(d){this.a=d},
dQG:function dQG(d){this.a=d},
dQH:function dQH(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQf:function dQf(){},
dQg:function dQg(d){this.a=d},
dQh:function dQh(d,e){this.a=d
this.b=e},
dQb:function dQb(d,e){this.a=d
this.b=e},
dQa:function dQa(d,e,f){this.a=d
this.b=e
this.c=f},
dQx:function dQx(d){this.a=d},
dQy:function dQy(d,e,f){this.a=d
this.b=e
this.c=f},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQn:function dQn(d){this.a=d},
dQk:function dQk(d,e,f){this.a=d
this.b=e
this.c=f},
dQo:function dQo(d){this.a=d},
dQp:function dQp(d){this.a=d},
dQq:function dQq(){},
dQs:function dQs(d,e){this.a=d
this.b=e},
dQl:function dQl(d){this.a=d},
dQj:function dQj(d,e,f){this.a=d
this.b=e
this.c=f},
dQm:function dQm(){},
dQC:function dQC(d){this.a=d},
dQB:function dQB(d,e){this.a=d
this.b=e},
dQW:function dQW(d,e){this.a=d
this.b=e},
dQT:function dQT(d){this.a=d},
dQU:function dQU(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dR8:function dR8(d){this.a=d},
dR6:function dR6(d){this.a=d},
dR7:function dR7(d){this.a=d},
dR9:function dR9(){},
dRa:function dRa(d,e){this.a=d
this.b=e},
dR2:function dR2(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e,f){this.a=d
this.b=e
this.c=f},
dR1:function dR1(d,e,f){this.a=d
this.b=e
this.c=f},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
azb:function azb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdd:function bdd(d,e,f){this.c=d
this.d=e
this.a=f},
d4g:function d4g(){},
d4h:function d4h(){},
ac5:function ac5(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d4E:function d4E(){},
d4D:function d4D(d){this.a=d},
Z_:function Z_(d,e,f){this.c=d
this.d=e
this.a=f},
azg:function azg(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d4A:function d4A(d){this.a=d},
d4B:function d4B(d,e,f){this.a=d
this.b=e
this.c=f},
d4C:function d4C(d,e){this.a=d
this.b=e},
d4y:function d4y(d,e){this.a=d
this.b=e},
d4w:function d4w(d){this.a=d},
d4u:function d4u(d){this.a=d},
d4r:function d4r(d){this.a=d},
d4x:function d4x(d){this.a=d},
d4t:function d4t(d){this.a=d},
d4z:function d4z(d){this.a=d},
d4v:function d4v(d){this.a=d},
d4s:function d4s(d){this.a=d},
YX:function YX(d,e,f){this.c=d
this.d=e
this.a=f},
azd:function azd(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d4d:function d4d(d){this.a=d},
d4c:function d4c(d,e){this.a=d
this.b=e},
d4e:function d4e(d){this.a=d},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4f:function d4f(d){this.a=d},
d4a:function d4a(d,e){this.a=d
this.b=e},
d46:function d46(d){this.a=d},
d47:function d47(d){this.a=d},
d48:function d48(d,e){this.a=d
this.b=e},
d49:function d49(d){this.a=d},
PD:function PD(d,e,f){this.c=d
this.d=e
this.a=f},
azj:function azj(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d4R:function d4R(d){this.a=d},
d4S:function d4S(d){this.a=d},
d4T:function d4T(d){this.a=d},
d4U:function d4U(d){this.a=d},
d4V:function d4V(d,e){this.a=d
this.b=e},
d4W:function d4W(d){this.a=d},
d4Y:function d4Y(d){this.a=d},
d4X:function d4X(d){this.a=d},
Z1:function Z1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azh:function azh(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d4N:function d4N(d,e){this.a=d
this.b=e},
d4O:function d4O(d,e){this.a=d
this.b=e},
d4F:function d4F(d,e,f){this.a=d
this.b=e
this.c=f},
d4G:function d4G(d){this.a=d},
d4H:function d4H(){},
d4M:function d4M(){},
d4I:function d4I(d,e){this.a=d
this.b=e},
d4J:function d4J(d,e){this.a=d
this.b=e},
d4K:function d4K(d,e){this.a=d
this.b=e},
d4L:function d4L(d,e){this.a=d
this.b=e},
ac3:function ac3(d,e){this.c=d
this.a=e},
d45:function d45(d){this.a=d},
YW:function YW(d){this.a=d},
azc:function azc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z2:function Z2(d,e){this.c=d
this.a=e},
azi:function azi(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d4Q:function d4Q(d){this.a=d},
d4P:function d4P(d){this.a=d},
bde:function bde(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hFj(){var x,w=$.px(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ar(32)]
return"VT"+C.d.hs(v)},
Ns(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ns=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$Ns)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Ns)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"relays")
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
return A.i($async$Ns,w)},
a6Y(d){return B.hFk(d)},
hFk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$a6Y)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6Y)
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
return A.i($async$a6Y,w)},
V0(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$V0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ns(),$async$V0)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dO(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.T(Date.now(),0,!1).a7().ac())
r.n(s,d,t)
x=4
return A.b(B.a6Y(s),$async$V0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$V0,w)},
V1(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$V1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c5(),$async$V1)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.S(f).k("Z<1>")
u=A.C(new A.Z(f,new B.ca4(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hFj()
t=A.S(u).k("M<1,a6<n,aD>>")
r=A.C(new A.M(u,new B.ca5(s),t),t.k("ak.E"))
x=6
return A.b(B.Ns(),$async$V1)
case 6:q=i
J.aG(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=7
return A.b(B.a6Y(q),$async$V1)
case 7:x=8
return A.b(B.a6Z(r,u,g,s),$async$V1)
case 8:v=new A.boD(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$V1,w)},
apl(d){var x=0,w=A.j(y.y),v,u,t
var $async$apl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ns(),$async$apl)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apl,w)},
ca6(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ca6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ns(),$async$ca6)
case 3:s=r.r(f,C.a.i(d))
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
return A.i($async$ca6,w)},
a6Z(d,e,f,g){return B.hFl(d,e,f,g)},
hFl(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6Z=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apj("media",r,new B.ca3(s,e,g),f,q),$async$a6Z)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.V0(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6Z)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.V0(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$a6Z)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.V0(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6Z)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6Z,w)},
Ev(d,e,f){return B.hFm(d,e,f)},
hFm(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ev=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c5(),$async$Ev)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apl(b3),$async$Ev)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kB,null,g),$async$Ev)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apl(b3),$async$Ev)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ns(),$async$Ev)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.O(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cn(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gK(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
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
b0=A.oZ(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aal(a8.a,b0,"media",a8.d,a9).CJ(m)
k=A.cF(l,0,null)
x=17
return A.b(B.aZx(k,n,o,s,b7),$async$Ev)
case 17:j=c0
if(j!=null){J.ca(p,j);++q
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
case 23:a2=J.r(a7,"storagePath")
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
a8=A.oZ(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aal(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ev)
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
a0.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a7().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6Y(e),$async$Ev)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ev,w)},
ca4:function ca4(){},
ca5:function ca5(d){this.a=d},
ca3:function ca3(d,e,f){this.a=d
this.b=e
this.c=f},
aQe(){var x=0,w=A.j(y.H),v,u
var $async$aQe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hQg=null
v=y.H
u=A.dS(null,v)
x=2
return A.b(u,$async$aQe)
case 2:u=A.dS(null,v)
x=3
return A.b(u,$async$aQe)
case 3:u=$.h_M
u=u==null?null:u.bD(0)
x=4
return A.b(y.x.b(u)?u:A.dS(u,v),$async$aQe)
case 4:$.h_M=$.hYO=$.hYP=null
return A.h(null,w)}})
return A.i($async$aQe,w)},
fqp(d){var x=0,w=A.j(y.H),v,u
var $async$fqp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6E){x=1
break}u=new A.bg($.bA,y.d4)
d.c=new B.fqq(new A.bX(u,y.aY))
x=3
return A.b(u.ir(0,C.hP,new B.fqr()),$async$fqp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fqp,w)},
hYM(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hF3(x):x},
h_Q(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.apn(u)
x=1
break}v=B.fVA(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_Q,w)},
h_P(d){var x=0,w=A.j(y.T),v,u,t
var $async$h_P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.apo(u)
x=1
break}v=B.fVA(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_P,w)},
fIR(d){var x=0,w=A.j(y.T),v
var $async$fIR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apo(d),$async$fIR)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fIR,w)},
bAJ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h_P(d),$async$bAJ)
case 3:q=f
if(q==null){x=1
break}t=C.S.aM(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAJ,w)},
feI(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$feI=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UV(g)
x=1
break}if(d.gK(d)<=0){v=null
x=1
break}v=B.BG(d.ao6(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feI,w)},
Gs(d,e,f){return B.i0d(d,e,f)},
i0d(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gs=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h_Q(a1),$async$Gs)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aM(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hsk().aE4(D.drQ,null),$async$Gs)
case 4:l=d.h_M=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ay2(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bA,y.b1)
l.y=new B.fqY(f,k,new B.fqZ(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7C(0,new B.X3(r,"offer")),$async$Gs)
case 5:d=l
x=7
return A.b(l.akR(0),$async$Gs)
case 7:x=6
return A.b(d.a7u(0,a4),$async$Gs)
case 6:x=8
return A.b(B.fqp(l),$async$Gs)
case 8:x=9
return A.b(l.aoS(),$async$Gs)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hYM(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.app(m,h),$async$Gs)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.haV(h)
case 11:v=new A.bnW(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gs,w)},
fqq:function fqq(d){this.a=d},
fqr:function fqr(){},
fqZ:function fqZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fqY:function fqY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fqX:function fqX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i29(d){switch(d){case"new":return D.eku
case"checking":return D.ekv
case"connected":return D.ekx
case"completed":return D.ekw
case"failed":return D.ekz
case"disconnected":return D.ekA
case"closed":return D.aMz
case"count":return D.eky}return D.aMz},
i2a(d){switch(d){case"new":return D.aMA
case"gathering":return D.ekB
case"complete":return D.a6E}return D.aMA},
icp(d){switch(d){case"stable":return D.ekC
case"have-local-offer":return D.ekD
case"have-local-pranswer":return D.ekF
case"have-remote-offer":return D.ekE
case"have-remote-pranswer":return D.ekG
case"closed":return D.aMG}return D.aMG},
iaD(d){switch(d){case"new":return D.aMD
case"connecting":return D.aME
case"connected":return D.aMF
case"closed":return D.a6F
case"disconnected":return D.aMC
case"failed":return D.aMB}return D.a6F},
a9i:function a9i(d,e){this.a=d
this.b=e},
Os:function Os(d,e){this.a=d
this.b=e},
X2:function X2(d,e){this.a=d
this.b=e},
Or:function Or(d,e){this.a=d
this.b=e},
F_:function F_(d,e){this.a=d
this.b=e},
cl2:function cl2(){},
fXl(d){var x=new B.EZ()
x.a=d
x.b=!0
return x},
EZ:function EZ(){this.b=this.a=$},
a9h:function a9h(){},
atE:function atE(){},
X3:function X3(d,e){this.a=d
this.b=e},
fVw(){var x=0,w=A.j(y.H)
var $async$fVw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fVw,w)},
fVz(d,e,f){var x=0,w=A.j(y.T),v
var $async$fVz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mu(D.mF))){v=null
x=1
break}v=B.fJ6(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVz,w)},
haV(d){var x,w=F.acj.a4n(C.dK.aL(d),null)
if(w.length===0){x=C.dK.aL(d)
return C.cJ.gct().aL(x)}return C.cJ.gct().aL(w)},
hF2(d){var x,w,v=C.cF.aL(d)
try{x=C.cf.cz(0,F.aci.bcI(v,!1))
return x}catch(w){x=C.cf.cz(0,v)
return x}},
fVA(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hF2(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.cf.cz(0,C.cF.aL(x))
return v}catch(u){return x}}return null},
hF3(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hF4(){var x,w=$.px(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ar(32)]
return"DS"+C.d.hs(v)},
aZD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZD)
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
return A.i($async$aZD,w)},
c9N(d,e){return B.hF5(d,e)},
hF5(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c9N=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c9N)
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
return A.i($async$c9N,w)},
aZG(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZD(d),$async$aZG)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZG,w)},
aZF(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hF4()
r=C.a.i(f)
t=C.dK.aL(s)
x=3
return A.b(B.c9N(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aL(t),"usesRemaining",999999,"createdAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$aZF)
case 3:if(!h){v=null
x=1
break}v=new A.a03("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZF,w)},
aZE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZD(o),$async$aZE)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cz(0,C.cF.aL(u))
if(J.iY(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZE,w)},
c9O(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c9O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBE("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c9O)
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
return A.i($async$c9O,w)},
aZH(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.It(),$async$aZH)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZH,w)},
apg(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apg)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZH(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apg,w)},
ape(d,e){var x=0,w=A.j(y.H)
var $async$ape=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ape)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ape)
case 2:return A.h(null,w)}})
return A.i($async$ape,w)},
a6Q(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6Q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$a6Q)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.It(),$async$a6Q)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.C))
x=5
return A.b(A.a6P(s),$async$a6Q)
case 5:x=6
return A.b(B.ape(f,u),$async$a6Q)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
a6R(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6R=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$a6R)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.It(),$async$a6R)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.r(r,"ownerEmail")
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
return A.b(B.ape(g,q),$async$a6R)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6P(u),$async$a6R)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
a6S(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6S=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$a6S)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.It(),$async$a6S)
case 4:u=o.r(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZA(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6S)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.T(Date.now(),0,!1).a7().ac()],p,p),null)),$async$a6S)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
c9P(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c9P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c9P)
case 7:s=f
p=A.u(n)
r=A.aU(J.r(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aM(0,r,null)
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
return A.i($async$c9P,w)},
Iu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Iu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c9P(d),$async$Iu)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZH(t),$async$Iu)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apf(d),$async$Iu)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.aZA(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apf(d),$async$Iu)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iu,w)},
apf(d){var x=0,w=A.j(y.H)
var $async$apf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apf)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apf)
case 2:return A.h(null,w)}})
return A.i($async$apf,w)},
aZI(){var x,w=$.px(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ar(32)]
return C.d.hs(v)},
a6T(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aM(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fVB(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c9S(d){return B.hF7(d)},
hF7(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c9S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6T(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c9S)
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
return A.i($async$c9S,w)},
api(d,e){return B.hF8(d,e)},
hF8(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$api=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6T(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$api)
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
return A.i($async$api,w)},
c9U(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c9U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6T(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.api(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c9U)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c9U,w)},
c9T(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c9T=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6T(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.api(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z)),$async$c9T)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c9T,w)},
c9V(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c9V=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6T(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.api(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9V,w)},
c9W(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c9W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fVB(d)){v=null
x=1
break}x=3
return A.b(B.c9S(d),$async$c9W)
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
return A.i($async$c9W,w)},
a7_(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$a7_)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a7_)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"signals")
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
return A.i($async$a7_,w)},
apm(d){return B.hFn(d)},
hFn(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c5(),$async$apm)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.T(Date.now(),0,!1).a7().ac()],y.N,y.z),!1,!1,C.cG,null),$async$apm)
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
return A.i($async$apm,w)},
apn(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c5(),$async$apn)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7_(),$async$apn)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cz(0,C.cF.aL(q))
if(J.iY(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dO(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.T(Date.now(),0,!1).a7().ac())
J.aG(s,j,o)
x=9
return A.b(B.apm(s),$async$apn)
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
return A.i($async$apn,w)},
app(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$app=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c5(),$async$app)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7_(),$async$app)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dO(A.a2(s,r,q),r,q)
r=C.dK.aL(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aL(r))
q.n(0,"answerAt",new A.T(Date.now(),0,!1).a7().ac())
t.n(u,p,q)
x=5
return A.b(B.apm(u),$async$app)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$app,w)},
apo(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c5(),$async$apo)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7_(),$async$apo)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cz(0,C.cF.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apo,w)},
aoj(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.aj$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q2)){v=null
x=1
break}x=3
return A.b(p.m0(e),$async$aoj)
case 3:r=g
u=4
x=7
return A.b(r.hu(C.h4),$async$aoj)
case 7:q=g
o=q
o=o==null?null:J.eV(J.vr(o))
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
return A.i($async$aoj,w)},
i8D(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.o.u(w),5,"0")
return v},
fHh(d){return B.i8F(d)},
i8F(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fHh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").KT(d,3600),$async$fHh)
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
return A.i($async$fHh,w)},
CY(d,e,f,g,h,i){var x=null
return B.i8C(d,e,f,g,h,i)},
i8C(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CY=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.haY(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fVD(r),$async$CY)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fHh(o),$async$CY)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6U(r),$async$CY)
case 14:v=null
x=1
break
case 13:e=$.bA.h(0,C.aPP)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LM(A.a([],g))
x=15
return A.b(d.f3(0,A.auu("GET",A.cF(n,0,null))).d9(0,C.Fy),$async$CY)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6U(r),$async$CY)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kl(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CY)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZK(r,k),$async$CY)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$CY)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.UV(r)
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
return A.b(B.a6U(r),$async$CY)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CY,w)},
aPY(d){return B.i8E(d)},
i8E(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").W(0,d),$async$aPY)
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
return A.i($async$aPY,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[148]
O=c[42]
F=c[243]
I=c[138]
P=c[222]
E=c[215]
G=c[90]
Q=c[186]
R=c[139]
S=c[220]
K=c[247]
L=c[252]
B=a.updateHolder(c[21],B)
D=c[250]
T=c[185]
M=c[205]
U=c[67]
V=c[253]
W=c[73]
X=c[57]
N=c[89]
Y=c[251]
B.cl3.prototype={
aE4(d,e){return this.cKh(d,e)},
cKh(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aE4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dO(r,s,t)
t.v(0,d)
u=new q(A.kk(A.cz(t)))
t=J.k(u)
v=B.hJX(C.cJ.gct().aL(new A.dc(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aE4,w)}}
B.b3S.prototype={
byg(d){var x=this,w=x.w
w.onclose=A.hq(new B.ckZ(x))
w.onopen=A.hq(new B.cl_(x))
w.onmessage=A.hq(new B.cl0(x))
w.onbufferedamountlow=A.hq(new B.cl1(x))},
gda(d){return this.x},
ah8(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ah8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EZ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fXl(J.eV(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$ah8)
case 8:v=t.fXl(s.anv(f,0,null))
x=1
break
case 7:case 4:v=B.fXl(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah8,w)}}
B.b3T.prototype={
byh(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hq(new B.cl4(x)))
w.addEventListener("icecandidate",A.hq(new B.cl5(x)))
w.addEventListener("iceconnectionstatechange",A.hq(new B.cl6(x)))
w.onicegatheringstatechange=A.hq(new B.cl7(x))
w.addEventListener("signalingstatechange",A.hq(new B.cl8(x)))
if(!$.h3A())w.addEventListener("connectionstatechange",A.hq(new B.cl9(x)))
w.addEventListener("negotiationneeded",A.hq(new B.cla(x)))
w.addEventListener("track",A.hq(new B.clb(x)))},
akR(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.kk(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akR)
case 3:t=f
v=new B.X3(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akR,w)},
a7u(d,e){return this.bnK(0,e)},
bnK(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7u)
case 2:return A.h(null,w)}})
return A.i($async$a7u,w)},
a7C(d,e){return this.bo_(0,e)},
bo_(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7C)
case 2:return A.h(null,w)}})
return A.i($async$a7C,w)},
aoS(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X3(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoS,w)},
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
B.ac4.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.YZ.prototype={
U(){return new B.azf()},
gd7(){return this.c}}
B.azf.prototype={
a_(){this.a1()
this.adV()},
adV(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZB(u.e,u.c),$async$adV)
case 2:t=e
if(v.c!=null)v.m(new B.d4o(v,t))
return A.h(null,w)}})
return A.i($async$adV,w)},
Qf(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apb(t.e,t.c,!1),$async$Qf)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.f2g)
x=1
break}x=4
return A.b(B.a6O(u.a.c,"individual"),$async$Qf)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a3(t,!1).a5Y(A.e_(new B.d4l(u),!1,null,y.H)),$async$Qf)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qf,w)},
Jf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fon(o),$async$Jf)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6S(o.e,r,s,q),$async$Jf)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.f_h)
x=1
break}x=5
return A.b(B.a6O(u.a.c,"member"),$async$Jf)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a3(o,!1).a5Y(A.e_(new B.d4n(u),!1,null,y.H)),$async$Jf)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jf,w)},
y0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$y0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6N(t.e,o,t.f,t.r,t.w,s),$async$y0)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6O(u.a.c,"org_owner"),$async$y0)
case 4:x=5
return A.b(B.apg(u.a.c),$async$y0)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.foT(o),$async$y0)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6Q(s,t,o,q.c),$async$y0)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.f_e)
x=1
break}x=10
return A.b(B.apg(u.a.c),$async$y0)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a3(o,!1).a5Y(A.e_(new B.d4m(u),!1,null,y.H)),$async$y0)
case 11:case 1:return A.h(v,w)}})
return A.i($async$y0,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jo:C.pO,q=B.fVy(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fT,24)],y.V)
v=y.p
w=A.p(t,A.w(A.a([A.p(t,D.flw,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.aA,D.fEU,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c0y,C.n),t,t,t,t,C.eB,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lI(new B.d4q(),t),C.N,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.al,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acw(C.eU,C.azj,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcdU(),t),C.ac],v))
p.push(new B.acw(C.p_,C.a2B,"Team Member","Sign in with your organization access code + password",u.gceL(),t))
p.push(C.ac)
p.push(new B.acw(C.alN,C.a46,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gceg(),t))
return A.c4(t,r,A.bm(!0,A.cc(A.w(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aj3,t,t,C.af),!0,!1,C.ae,!0,!0),t,!1,!1,t,t)}}
B.acw.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gH(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a2,!0,s,A.aK(!1,r,!0,A.eF(A.B(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.d(t.e,s,s,s,s,s,s,C.ou,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.W(C.yv,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBO.prototype={}
B.aEU.prototype={}
B.jm.prototype={
mu(d){var x=this.b,w=C.a.oG(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gapx(){var x=this.d
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
bca(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jm(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIL(d){return this.bca(null,d)},
aDQ(d){return this.bca(d,null)}}
B.UP.prototype={
U(){return new B.aD9(new A.cw(null,y.A))},
gd7(){return this.c}}
B.aD9.prototype={
a_(){this.a1()
this.adW()},
adW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BF(u.a.c),$async$adW)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dQ4(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adW,w)},
adX(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fE(s)),$async$adX)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.f3a)
case 1:return A.h(v,w)}})
return A.i($async$adX,w)},
ZD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ZD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoj(s.d,4),$async$ZD)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t3(r,"ngmy_my_code_"+m+".png"),$async$ZD)
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
return A.i($async$ZD,w)},
ahB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9V("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahB,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jo:C.pO,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mk
else if(q.e==null)x=A.at(new A.D(C.eB,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aD.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a32,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.al,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aiD,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.mN,w,C.kN,new A.eJ(A.p(p,A.pU(p,p,!1,B.hEZ(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kN,A.B(A.a([A.E(A.er(N.Ci,C.Uo,q.gc7_(),p),1),C.as,A.E(A.dp(C.yV,C.a8T,q.gc70(),A.bn(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.er(M.a1q,D.fAA,q.gcty(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MW,p,p,C.af)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.UT.prototype={
U(){return new B.aDc(new A.aq(C.at,$.ax()),A.jU(!0,null,!0,!0,null,null,!1))}}
B.aDc.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Is(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
t(){var x=this.d
x.S$=$.ax()
x.P$=0
this.e.t()
this.a2()},
ZE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Is(u.d.a.a)
if(t==null){u.m(new B.dRd(u))
x=1
break}u.m(new B.dRe(u))
s=u.a
r=s.c
x=3
return A.b(B.a6M(s.d,new B.dRf(u),t,r),$async$ZE)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dRg(u))
if(q){s=u.c
s.toString
A.a3(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$ZE,w)},
a1P(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1P=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dRh(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.ru(r.a.c,q),$async$a1P)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dRi(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahy(p,m,l,j,k),$async$a1P)
case 8:o=e
if(r.c!=null)r.m(new B.dRj(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dRk(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dRl(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1P,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.af1:D.acS,h=j?D.agv:C.c,g=j?C.aP:C.M,f=j?C.bK:C.ak,e=j?D.ae6:C.aL
i=[i,e,h,g,f,j?C.fd:C.bN]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a4),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a4),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bP3,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fa,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a32,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uo(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biv()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.MR,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aD,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dRm(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.ma,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.Lp(l.a.d,4)
m=A.C(new A.M(m,new B.dRn(x,new A.aG8(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.kZ,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.N,e,C.N,q,C.d5,p,C.N,A.p(k,A.w(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ew,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aD.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eYN)
else q.push(A.W(C.lv,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.db(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b8,new A.o(u,k,s,t,k,k,C.n),C.iM,k,k,k,C.eO,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bxi,k,k,C.af),1)
u=l.f?k:l.gctz()
t=i[3]
s=i[1]
q=A.m(16)
s=A.er(M.a1q,D.fBE,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cj,k,new A.b7(q,C.X),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc71()
t=A.bn(C.aD,k,k,0,C.c,k,C.ne,k,new A.b7(A.m(16),C.X),k,k,k)
return A.c4(g,h,new A.an(C.V,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mf(new B.dRo(),A.w(A.a([e,new A.D(D.bwN,A.w(A.a([s,C.N,i,C.ac,A.bH(l.f?C.rS:D.fzY,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.YO,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ae,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biv.prototype={
oC(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bw,v.length),C.aN)}}
B.UQ.prototype={
U(){return new B.aDa()}}
B.aDa.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.aq(new A.ba(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.aq(new A.ba(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.aq(C.at,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.S$=$.ax()
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
adY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dQ5(r))
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
return A.b(B.a6R(p,m,n,o,C.a.i(l).length===0?null:l),$async$adY)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.f2M)
s=[1]
x=4
break}p.I(y.q).f.R(D.f1p)
p=r.c
p.toString
A.a3(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dQ6(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adY,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jo:C.pO,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fsx,s,s,s,1,s,!0),p=A.p(s,D.bp1,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.H_,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bW2,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bVY,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bWd,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.an,s,s,s,s)
v=t.r?s:t.gc72()
u=A.bn(C.aD,s,s,s,s,C.fU,s,s,s,s,s,s)
return A.c4(q,r,A.cc(A.w(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mN,A.bH(t.r?C.rS:C.aSy,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.af),s,!1,!1,s,s)}}
B.abM.prototype={}
B.buX.prototype={
a4D(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gK(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.ao6()))
x=3
return A.b(B.R9(t,s),$async$a4D)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
gd7(){return this.a}}
B.Nq.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.YY.prototype={
U(){return new B.aze(new A.aq(C.at,$.ax()),A.jU(!0,null,!0,!0,null,null,!1))}}
B.aze.prototype={
a_(){this.a1()
$.aV.x1$.push(new B.d4k(this))},
t(){var x=this.d
x.S$=$.ax()
x.P$=0
this.e.t()
this.a2()},
c78(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a3(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a12(d),u=x.a.c,t=u?C.ih:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.jo:v.a[0],p=A.m(24),o=A.I(C.aD.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fT,32)],n),l=A.p(w,T.aop,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.apc,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uo(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buB()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.FJ,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.b_J),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d4i(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.ma,w,w,w,w)
f=f[1]
f=A.E(A.dQ(C.nA,new B.d4j(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cj,w,new A.b7(A.m(14),C.X),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eM(w,C.K,new A.cT(Q.KI,A.c0(new A.D(C.yb,A.w(A.a([l,C.aO,k,C.N,j,C.dW,i,C.dW,A.B(A.a([f,C.as,A.E(A.c0(A.aF(!1,C.a2,!0,w,A.aK(!1,A.m(14),!0,D.eeo,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc77(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.OF,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.P,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MZ,C.d4,w,w,w)}}
B.buB.prototype={
oC(d,e){return e.akM(e.a.toUpperCase())}}
B.UR.prototype={
U(){return new B.aDb(A.a([],y.r),A.aY(y.N))},
gd7(){return this.c}}
B.aDb.prototype={
a_(){var x=this
x.a1()
x.tL()
x.w=A.dq(C.ju,new B.dRb(x))},
t(){var x=this.w
if(x!=null)x.a4(0)
B.V_()
this.a2()},
a0H(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Np(u.a.c),$async$a0H)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AJ(u.a.c),$async$a0H)
case 4:u.m(new s.dQz(u,e))
u.i6("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0H,w)},
tL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Np(u.a.c),$async$tL)
case 3:t=e
x=4
return A.b(B.AJ(u.a.c),$async$tL)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dQA(u,s))
if(t>0)u.i6("Received "+A.u(t)+" file(s) via My Code.")
u.NA(u.d)
B.BF(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tL,w)},
NA(d){return this.bCf(d)},
bCf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6W(r,u.a.c),$async$NA)
case 8:p=f
if(u.c==null){x=1
break}new B.dQ8(u,r,p).$0()
u.c.ek()
case 7:if(!(C.a.a0(r.c,"video/")||r.mu(D.mF))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UY(r,u.a.c),$async$NA)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AJ(u.a.c),$async$NA)
case 12:u.m(new o.dQ9(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NA,w)},
NY(d){return this.bIu(d)},
bIu(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6W(d,u.a.c),$async$NY)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dQe(u,d,t))
x=6
return A.b(A.fM(new A.fE(t)),$async$NY)
case 6:u.i6("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fE(r.toUpperCase())),$async$NY)
case 7:u.i6("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NY,w)},
i6(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tM(d,e){return this.cE9(d,e)},
cE9(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dR_(r,e))
u=3
x=6
return A.b(d.$0(),$async$tM)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dR0(r))
$.eR.mp()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tM,w)},
gaV8(){var x=this.a
return x.f||x.r||x.w},
Ia(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ia=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaV8()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c9L(s,n,r,q,o,t),$async$Ia)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i6("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fAL(o,u.a.c),$async$Ia)
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
return A.b(B.D_(s,o,r,q,n,t),$async$Ia)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ia,w)},
a_L(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apg(u.a.c),$async$a_L)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i6("No organization portal found.")
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
return A.b(A.a3(t,!1).cg(A.e_(new B.dQw(u,r,q),!1,null,y.H)),$async$a_L)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_L,w)},
a0R(d){return this.cn5(d)},
cn4(){return this.a0R(1)},
cn5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaV8()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apd(u.a.c),$async$a0R)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0R,w)},
abV(d,e,f){return this.bZe(d,e,f)},
bZe(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i6(e)
x=1
break}x=3
return A.b(u.tM(new B.dQt(u,d,null,e,f),"Uploading\u2026"),$async$abV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abV,w)},
bCn(){B.hpF(!1,new B.dQc(this))
return},
cs6(){this.m(new B.dQE(this))},
ayo(){var x=0,w=A.j(y.H),v=this
var $async$ayo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCn()
return A.h(null,w)}})
return A.i($async$ayo,w)},
abR(){var x=0,w=A.j(y.H),v=this
var $async$abR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dQi(v),"Importing\u2026"),$async$abR)
case 2:return A.h(null,w)}})
return A.i($async$abR,w)},
Sh(d){return this.cDx(d)},
cDx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mu(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a3(t,!1).cg(A.e_(new B.dQX(u,d),!1,null,y.H)),$async$Sh)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mu(D.QB)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a3(t,!1).cg(A.e_(new B.dQY(u,d),!1,null,y.H)),$async$Sh)
case 8:x=1
break
case 7:x=u.bZW(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a3(t,!1).cg(A.e_(new B.dQZ(u,d),!1,null,y.H)),$async$Sh)
case 11:x=1
break
case 10:u.i6("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sh,w)},
bZW(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oG(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cJr,C.a.b2(x,w+1).toLowerCase())},
afm(d){return this.cdY(d)},
cdY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mu(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a3(t,!1).cg(A.e_(new B.dQu(u,d),!1,null,y.H)),$async$afm)
case 5:x=1
break
case 4:u.m(new B.dQv(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afm,w)},
RC(d){return this.cv2(d)},
cv2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i6("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p9(t,s.c,s.f),$async$RC)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dQQ(u,d),"Preparing QR\u2026"),$async$RC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
ai0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ai0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQR(),A.S(t).k("M<1,n>")).fE(0)}t=u.d
s=A.S(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dQS(q),s),s.k("J.E"))
if(r.length===0){u.i6("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RC(r),$async$ai0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ai0,w)},
ahU(d){return this.cuA(d)},
cuA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a12(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dQK(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahU)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sh(d)
break
case"qr":u.RC(A.a([d],y.r))
break
case"send_my_code":u.ceA(A.a([d],y.r))
break
case"save":u.ahf(d)
break
case"delete":u.J0(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahU,w)},
Xy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQf(),A.S(t).k("M<1,n>")).fE(0)}t=u.d
s=A.S(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dQg(q),s),s.k("J.E"))
if(r.length===0){u.i6("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p9(t,s.c,s.f),$async$Xy)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dQh(u,r),"Preparing file\u2026"),$async$Xy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xy,w)},
agr(d){return this.clq(d)},
clq(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hqs(d,!1),$async$agr)
case 3:s=f
r=s==null
q=B.a6T(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i6("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agr,w)},
afs(){var x=0,w=A.j(y.H),v=this,u
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fIm(u,v.a.c),$async$afs)
case 2:return A.h(null,w)}})
return A.i($async$afs,w)},
bCm(){B.hpF(!1,new B.dQb(this,null))
return},
Je(d,e){return this.ceB(d,e)},
b09(d){return this.Je(null,d)},
ceA(d){return this.Je(d,null)},
ceB(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Je=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dQx(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xf.c8().ano(!0,C.a_A,!1),$async$Je)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tM(new B.dQy(l,s,r),"Preparing\u2026"),$async$Je)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
s.i6("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i6("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCN(p,l,e,s.a.c),$async$Je)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i6("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Je,w)},
Iq(d){return this.bZ1(d)},
bZ1(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Iq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hEY(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b09(t),$async$Iq)
case 8:x=6
break
case 7:u.i6("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i6("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tM(new B.dQr(u,d),"Receiving video\u2026"),$async$Iq)
case 11:x=1
break
case 10:x=12
return A.b(u.tM(new B.dQs(u,d),"Receiving\u2026"),$async$Iq)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Iq,w)},
Ei(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ei=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CU()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agr(t),$async$Ei)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Iq(s),$async$Ei)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a3(t,!1).cg(A.e_(new B.dQC(u),!1,null,y.N)),$async$Ei)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tL(),$async$Ei)
case 10:x=1
break
case 9:x=11
return A.b(u.Iq(C.a.i(r)),$async$Ei)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ei,w)},
ahf(d){return this.cqG(d)},
cqG(d){var x=0,w=A.j(y.H),v=this
var $async$ahf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dQB(v,d),"Saving\u2026"),$async$ahf)
case 2:return A.h(null,w)}})
return A.i($async$ahf,w)},
J0(d){return this.bKP(d)},
bKP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$J0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l9(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$J0)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c9O(t),$async$J0)
case 6:case 5:s=d.a
x=7
return A.b(B.Eu(u.a.c,s),$async$J0)
case 7:u.r.W(0,s)
x=8
return A.b(u.tL(),$async$J0)
case 8:case 1:return A.h(v,w)}})
return A.i($async$J0,w)},
ai6(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a12(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dQW(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ai6)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afs()
break
case"import":u.abR()
break}case 1:return A.h(v,w)}})
return A.i($async$ai6,w)},
c75(d){var x=d.c
if(C.a.a0(x,"video/")||d.mu(D.mF))return C.qd
if(C.a.a0(x,"image/")||d.mu(D.QB))return C.ud
if(C.a.q(x,"pdf"))return E.Oa
return D.amf},
B(d){var x,w,v=this,u=null,t=B.a12(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.GS,u,u,u,new B.dR6(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bPB,u,u,u,v.e?u:v.gceh(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcs5()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bJS:E.amE,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a1n,u,u,u,v.e?u:v.gc76(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oc,u,u,u,v.e?u:v.gb1g(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.bRk,u,u,u,v.e?u:new B.dR7(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lI(new B.dR8(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a4),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a4),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.li(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.azb(C.jy,s,!0,t,w?u:v.gcv3(),u),1)
x.push(new A.D(D.bvw,A.mf(new B.dR9(),A.B(A.a([s,C.as,A.E(new B.azb(C.w5,"Export",!1,t,w?u:v.gbOz(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iN,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdd(t,v.e?u:v.gb1g(),u)
else s=A.kb(!0,u,u,new B.dRa(v,t),s,u,D.bvo,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.V,u,C.aa,C.r,A.a([p,n,A.w(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.azb.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aD,t,t,0,C.c,t,C.vM,t,new A.b7(s,C.X),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vM,t,new A.b7(s,C.X),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.er(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eY,t,t,t),u.r,v)}}
B.bdd.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.at(A.mf(new B.d4g(),new A.D(E.ZF,A.w(A.a([A.mf(new B.d4h(),A.p(x,A.W(C.yx,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a4),x,88,x,x,x,x,x,88),C.ev,C.io,x,x,new A.bp(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dp(C.oc,D.fFd,this.d,A.bn(C.aD,x,x,x,C.c,x,C.MX,x,new A.b7(A.m(16),C.X),x,x,x))],y.p),C.m,x,C.e,C.P,0,C.p),x),C.ct,C.Bi,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.ac5.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mu(D.mF))p=D.dhg
else{p=C.a.a0(p,"image/")||i.mu(D.QB)
n=y.O
p=p?A.a([C.cM,C.aD],n):A.a([C.aK.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapx()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mu(D.mF))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fS,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mu(D.mF)))l.push(A.fTe(C.aD,!1,j,j,j,!1,j,j,new B.d4D(k),j,j,new A.b7(A.m(5),C.X),j,j,!1,u))
x=A.W(C.o6,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mf(new B.d4E(),new A.D(C.e9,A.aF(!1,C.a2,!0,j,A.aK(!1,r,!0,new A.D(C.Z8,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ah),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.Z_.prototype={
U(){return new B.azg()},
gd7(){return this.c}}
B.azg.prototype={
a_(){this.a1()
this.xR()},
t(){B.hFc(this.e)
this.a2()},
xR(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.ru(o.c,o.d),$async$xR)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hFf(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hFe(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d4A(s))
x=1
break}s.m(new B.d4B(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d4C(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xR,w)},
a1O(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ru(t.c,t.d),$async$a1O)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.f_O)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahy(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1O)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1O,w)},
bYV(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kp(u,C.A,v,new B.d4y(w,t),C.h2,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aH.gal(t))x=A.fO(t,C.A,v,new B.d4z(w),C.h2,C.dw,!0,v,!1,v,v)
else return C.bI
return A.ux(C.ae,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a12(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Cj,u,u,u,v.gb52(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ev
else{q=v.r
if(q!=null)t=new A.D(C.eB,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eB,A.w(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dp(C.Cj,D.fnS,v.gb52(),A.bn(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.P,0,C.p),u)
t=p}else t=v.bYV()}return A.c4(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.YX.prototype={
U(){return new B.azd(A.aim(),C.bE,C.bE)},
gd7(){return this.c}}
B.azd.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fv(w,A.a5(w).k("fv<1>")).im(new B.d4d(v))
x.gcRE().im(new B.d4e(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fv(x,A.a5(x).k("fv<1>"))}if(x==null)x=C.b5V
x.im(new B.d4f(v))
v.xR()},
xR(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ru(p.c,p.d),$async$xR)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d46(s))
x=1
break}x=8
return A.b(s.d.Cb(0,new A.a36(r,s.a.d.c)),$async$xR)
case 8:if(s.c==null){x=1
break}s.m(new B.d47(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d48(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xR,w)},
ZF(){var x=0,w=A.j(y.H),v=this,u
var $async$ZF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h5(0),$async$ZF)
case 5:x=3
break
case 4:x=6
return A.b(u.iq(0),$async$ZF)
case 6:case 3:return A.h(null,w)}})
return A.i($async$ZF,w)},
aT_(d){var x=d.a
return C.a.aY(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aY(C.o.u(C.o.an(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a12(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ev
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bKS,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.OF,C.n),o,88,o,o,o,o,o,88)
t=A.l2(C.aD,o,o,m,0,new B.d49(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aT_(p.w)+" / "+p.aT_(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aD,o,o,o,o,D.eXg,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.yG:C.is,o,o,o,o,o)
x=A.w(A.a([u,C.kN,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc79(),s)],y.p),C.m,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.at(new A.D(C.rc,x,o),o,o,o),o,!1,!1,o,o)}}
B.PD.prototype={
U(){return new B.azj()},
gd7(){return this.c}}
B.azj.prototype={
a_(){this.a1()
this.PC()},
PC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fVz(o.c,o.d,new B.d4R(s)),$async$PC)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d4S(s))
x=1
break}s.e=r
q=O.i16(r)
if(q==null){s.m(new B.d4T(s))
x=1
break}s.d=q
q.aQ(0,s.gb_X())
x=8
return A.b(q.il(0).d9(0,C.r8),$async$PC)
case 8:if(s.c==null){x=1
break}s.m(new B.d4U(s))
x=9
return A.b(q.pZ(0),$async$PC)
case 9:q.tp(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d4V(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PC,w)},
ccy(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d4W(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CZ(0,x.gb_X())
w=x.d
if(w!=null)w.t()
B.iaW(x.e)
x.a2()},
ae0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ae0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZJ(u.c,u.d),$async$ae0)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ae0,w)},
B(d){var x,w,v,u=this,t=null,s=B.a12(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aI(t,t,t,t,C.p5,t,t,t,u.gc73(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ev
else{q=u.r
if(q!=null)s=new A.D(C.eB,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahR(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.Ad(s,t),A.aB(t,A.D9(A.p(t,A.W(q?I.yG:C.is,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b8,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d4Y(u),t,t,t,t,t,t,!1,C.a5)],o),t),t)}else s=C.bI}}return A.c4(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.Z1.prototype={
U(){return new B.azh(new A.cw(null,y.A))}}
B.azh.prototype={
gcDR(){var x,w,v=this.a
if(v.e!==D.RY)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDv(){var x,w,v=this.a
if(v.e!==D.zx)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcDR()
if(x!=null){v.QE(x)
v.e=A.dq(R.FB,new B.d4N(v,x))}w=v.gcDv()
if(w!=null){v.QD(w)
v.f=A.dq(C.fO,new B.d4O(v,w))}},
t(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a2()},
QD(d){return this.cjD(d)},
cjD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apl(d),$async$QD)
case 3:t=f
x=4
return A.b(B.ca6(d),$async$QD)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d4F(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QD,w)},
QE(d){return this.cjE(d)},
cjE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fIR(d),$async$QE)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAJ(t),$async$QE)
case 4:if(u.c==null){x=1
break}u.m(new B.d4G(u))
u.c.I(y.q).f.R(D.aPq)
case 1:return A.h(v,w)}})
return A.i($async$QE,w)},
gc30(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc74(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1A(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CU()){t=u.c
if(t!=null)t.I(y.q).f.R(D.f2W)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a3(t,!1).cg(A.e_(new B.d4H(),!1,null,y.N)),$async$a1A)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAJ(s),$async$a1A)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aPq)
case 1:return A.h(v,w)}})
return A.i($async$a1A,w)},
a9M(d){return this.bIv(d)},
bIv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fE(C.d.aG(t,", "))),$async$a9M)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9M,w)},
adZ(d){return this.bIf(d)},
bIf(d){var x=0,w=A.j(y.H),v=this
var $async$adZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fE(v.a.c)),$async$adZ)
case 2:if(d.e!=null)d.I(y.q).f.R(D.f0h)
return A.h(null,w)}})
return A.i($async$adZ,w)},
a1v(d){return this.cqI(d)},
cqI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoj(s.d,4),$async$a1v)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t3(r,"ngmy_doc_share_qr.png"),$async$a1v)
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
return A.i($async$a1v,w)},
gaWg(){var x,w=this.a
if(w.e!==D.I3)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
a9J(d){return this.bIo(d)},
bIo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWg()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9J)
case 3:if(d.e!=null)d.I(y.q).f.R(D.f1W)
case 1:return A.h(v,w)}})
return A.i($async$a9J,w)},
ae_(){var x=0,w=A.j(y.H),v=this,u
var $async$ae_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.V_(),$async$ae_)
case 2:u=v.c
if(u!=null)A.a3(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ae_,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a12(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.I3&&i!==D.RY&&i!==D.zx
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.I3||t===D.RY||t===D.zx?l:A.aI(l,l,l,l,C.l9,l,l,l,m.gaZa(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aD.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pU(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gc30(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.I3){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc74(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.ho(D.bV6,D.fxc,new B.d4I(m,d),l)],p))}if(m.a.e===D.I3&&m.gaWg()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.ho(D.bRE,D.ftT,new B.d4J(m,d),l)],p))
if(m.a.e===D.zx){x=(m.w?C.dA:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ey:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l)],p))}if(m.a.e===D.RY){x=(m.r?C.dA:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ey:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mw,l,l,l),C.ac,A.dp(D.bNl,D.fAg,m.gcr5(),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.os(i,A.c4(v,w,new A.D(C.a9,A.w(A.a([A.E(A.p(l,A.w(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.er(N.Ci,C.Uo,new B.d4K(m,d),l),1),C.as,A.E(A.dp(C.yV,C.a8T,new B.d4L(m,d),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bH(C.A4,m.gaZa(),A.bn(C.aK,l,l,l,l,C.fU,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d4M(),y.C)}}
B.ac3.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cc(A.w(A.a([w,C.aO,A.p(x,A.pU(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.P,0,C.p),C.r,x,C.y,x,x,x,x,C.af)
return A.ek(A.a([A.bH(C.wQ,new B.d45(d),x)],u),x,x,C.mU,v,x,x,x,x,D.fmS,x)}}
B.YW.prototype={
U(){return new B.azc(A.zm(C.xR,C.nG,C.ur))}}
B.azc.prototype={
t(){this.d.t()
this.a2()},
ax2(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a3(x,!1).N(t)
return}}},
B(d){var x=null
return A.c4(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fun,x,x,x,1,x,!0),C.w,A.zl(this.d,C.bU,this.gax1()),x,!1,!1,x,x)}}
B.Z2.prototype={
U(){return new B.azi(A.zm(C.xR,C.nG,C.ur))},
gd7(){return this.c}}
B.azi.prototype={
bZY(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
afP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Sb("text/plain"),$async$afP)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.f2Q)
x=1
break}s=u.c
if(s!=null)A.a3(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$afP,w)},
aay(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aay=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hqs(p,!0),$async$aay)
case 3:t=e
p=t==null
s=B.a6T(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.f_o)
x=1
break}p=u.c
if(p!=null)A.a3(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$aay,w)},
t(){this.d.t()
this.a2()},
ax2(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZY(t))continue
s.e=!0
x=s.c
x.toString
A.a3(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.any,v,v,v,w.gbO5(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a1u,v,v,v,w.gch0(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.u9:P.NY,v,v,v,v,v),v,v,v,new B.d4Q(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fB9,v,v,v,1,v,!0)
u=A.zl(w.d,C.bU,w.gax1())
x=A.m(20)
return A.c4(t,C.w,new A.an(C.V,v,C.aa,C.r,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eka],s),v),v,!1,!1,v,v)}}
B.bde.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oR
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oR:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a2,!0,r,A.aK(!1,w,!0,new A.D(C.ZL,A.B(A.a([u,C.bc,A.E(A.w(t,C.E,r,C.e,C.j,0,C.p),1),A.W(C.eC,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a9i.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Os.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.X2.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Or.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.F_.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cl2.prototype={}
B.EZ.prototype={}
B.a9h.prototype={}
B.atE.prototype={}
B.X3.prototype={}
var z=a.updateTypes(["aA<~>()","R(jm)","n(jm)","UR(Y)","~()","YZ(Y)","H(H,jm)","PD(Y)","~(m4)","cq(EZ)","aA<jm?>(@)","UP(Y)","UT(Y)","D(jm)","jm(@)","a6<n,@>(jm)","YY(Y)","UQ(Y)","Z_(Y)","YX(Y)","Z1(Y)","ac3(Y)","ai<jm>()","Z2(Y)","ac5(Y,H)","YW(Y)","a6<n,aD>(jm)","cq(X2)","cq(a9h)","aA<cq>(EZ)"])
B.ckZ.prototype={
$1(d){var x=this.a
x.x=D.aMy
x.y.M(0,D.aMy)},
$S:70}
B.cl_.prototype={
$1(d){var x=this.a
x.x=D.aMx
x.y.M(0,D.aMx)},
$S:70}
B.cl0.prototype={
$1(d){var x=this.a
x.ah8(A.aOG(d.data)).bK(new B.ckY(x),y.b)},
$S:70}
B.ckY.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cl1.prototype={
$1(d){},
$S:70}
B.cl4.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hJW(d.channel))},
$S:15}
B.cl5.prototype={
$1(d){},
$S:15}
B.cl6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i29(w.iceConnectionState)
x.cx=w
if($.h3A())switch(w.a){case 0:x.cy=D.aMD
break
case 1:x.cy=D.aME
break
case 3:x.cy=D.aMF
break
case 5:x.cy=D.aMB
break
case 6:x.cy=D.aMC
break
case 7:x.cy=D.a6F
break
default:break}},
$S:154}
B.cl7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2a(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:154}
B.cl8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.icp(w.signalingState)},
$S:154}
B.cl9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iaD(w.connectionState)},
$S:154}
B.cla.prototype={
$1(d){},
$S:154}
B.clb.prototype={
$1(d){},
$S:15}
B.fke.prototype={
$1(d){var x=y.F.a(new A.rT([],[]).pG(d.target.result,!1)),w=C.xS.q(x.objectStoreNames,"blobs")
if(!w)C.xO.KR(x,"blobs")},
$S:194}
B.fIa.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wj.fj(this.b)
$.eR.mp()
this.c.$1(d)},
$S:462}
B.fIc.prototype={
$1(d){return this.a.$1(B.hSQ(this.b,this.c))},
$S:35}
B.fIb.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fI9.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fIp.prototype={
$1(d){var x=this
return B.hfQ(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fIq.prototype={
$1(d){var x=this
return B.hfQ(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fmr.prototype={
$1(d){var x=this
return B.c9I(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d4o.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d4l.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c9I(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d4n.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c9I(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d4m.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c9I(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d4q.prototype={
$4(d,e,f,g){var x=null
return A.jG(A.B(A.a([A.aI(x,x,x,x,D.bLX,x,x,x,new B.d4p(d),x,x,x,x,x,x),A.E(A.EK(D.Qk,!0,x,C.a0x,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qk,x,g,C.ajo,0,e,f)},
$C:"$4",
$R:4,
$S:445}
B.d4p.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.foq.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eK,y.o).w,t=this.a,s=t?C.ih:C.c,r=A.m(28),q=A.p(v,D.bpm,C.f,v,v,D.b1o,v,v,v,v,D.aje,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.X),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bQa,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.D(C.FO,A.w(A.a([o,C.ac,A.aL(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.X),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anN,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.an,v,v,v,v),C.bv,A.B(A.a([A.E(A.dQ(C.dh,new B.foo(d),v),1),C.as,A.E(A.bH(D.fsW,new B.fop(p,x,d),A.bn(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.MD,v,v,v,v),v)},
$S:58}
B.foo.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.fop.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.f0y)
return}x=w.b.a.a
A.a3(w.c,!1).N(new B.aBO(v,x))},
$S:0}
B.foV.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eK,y.o).w,u=x.a,t=u?C.ih:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bpb,C.f,w,w,D.b2S,w,w,w,w,D.aje,w,w,1/0),new A.D(C.FO,A.w(A.a([A.aL(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h_z(u,"Organization name",C.Ge,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.an,w,w,w,w),C.R,A.aL(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h_z(u,"Access code",C.nk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.an,w,w,w,w),C.R,A.aL(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h_z(u,"Member password",H.GN,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.an,w,w,w,w),C.bv,A.bH(D.fBg,new B.foU(r,q,p,d),A.bn(C.aD,w,w,w,w,C.fU,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.MD,w,w,w,w),w)},
$S:58}
B.foU.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.f0D)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a3(v.d,!1).N(new B.aEU(u,x,w))},
$S:0}
B.c9z.prototype={
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
p=C.a.a0(j,"http")?A.cF(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.vj(p,null).d9(0,C.YN),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BG(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c9F.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c9G.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c9H.prototype={
$1(d){return d.b},
$S:z+2}
B.c9B.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c9C.prototype={
$1(d){return d.b},
$S:z+2}
B.c9A.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c9D.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c9E.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fIn.prototype={
$1(d){return new B.UP(this.a,null)},
$S:z+11}
B.fIo.prototype={
$1(d){return new B.UT(this.a,this.b,this.c,null)},
$S:z+12}
B.dQ4.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dRd.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dRe.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dRf.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dRc(x,d))},
$S:2}
B.dRc.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRg.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRh.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dRi.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dRj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRk.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dRl.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRo.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.x(0,(1-e)*14)),e)},
$S:107}
B.dRm.prototype={
$1(d){var x=this.a
return x.f?null:x.ZE()},
$S:2}
B.dRn.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mu(D.QB))s=C.ud
else s=C.a.a0(s,"video/")||d.mu(D.mF)?C.qd:D.amf
x=this.b.a
w=y.p
return new A.D(C.l_,A.B(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.w(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapx(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dQ5.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dQ6.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c9J.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:95}
B.c9K.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:95}
B.fJ8.prototype={
$2(d,e){return e===this.a},
$S:311}
B.fhp.prototype={
$1(d){return J.k(d)},
$S:17}
B.fmD.prototype={
$1(d){var x=this.b
B.hQT(C.G1.ga6h(this.a)).bK(x.gaDs(x),y.H)},
$S:128}
B.fmE.prototype={
$1(d){return this.a.d5(0,null)},
$S:128}
B.fmF.prototype={
$0(){return null},
$S:11}
B.c9Y.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fmG.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.T(Date.now(),0,!1).a7().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jm(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fqO.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fl5.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fl6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ca2.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mF)},
$S:z+1}
B.fNe.prototype={
$1(d){return new B.YY(this.a,null)},
$S:z+16}
B.d4k.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fN()},
$S:9}
B.d4i.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a3(w,!1).N(x)
return null},
$S:2}
B.d4j.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.dRb.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0H()},
$S:12}
B.dQz.prototype={
$0(){var x=J.bDS(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQA.prototype={
$0(){var x=J.bDS(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQ8.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dQ7(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDQ(this.c)}},
$S:0}
B.dQ7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQ9.prototype={
$0(){var x=J.bDS(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQe.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dQd(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDQ(this.c)}},
$S:0}
B.dQd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dR_.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dR0.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dQw.prototype={
$1(d){return new B.UQ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dQt.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ia(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UU(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tL(),$async$$0)
case 5:s=J.a4(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a0R(s.gK(t)),$async$$0)
case 8:case 7:r.i6(s.gal(t)?u.d:u.e+" "+s.gK(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQc.prototype={
$1(d){this.a.abV(d,"No files selected.","Added")},
$S:462}
B.dQE.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dQD(),A.S(x).k("M<1,n>")))},
$S:0}
B.dQD.prototype={
$1(d){return d.a},
$S:z+2}
B.dQi.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xf.c8().cTC(C.a_A,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i6("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i6("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apk(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i6("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tL(),$async$$0)
case 9:o.i6("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dQX.prototype={
$1(d){return new B.PD(this.a.a.c,this.b,null)},
$S:z+7}
B.dQY.prototype={
$1(d){return new B.Z_(this.a.a.c,this.b,null)},
$S:z+18}
B.dQZ.prototype={
$1(d){return new B.YX(this.a.a.c,this.b,null)},
$S:z+19}
B.dQu.prototype={
$1(d){return new B.PD(this.a.a.c,this.b,null)},
$S:z+7}
B.dQv.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dQQ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ia(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6V(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i6("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cn4(),$async$$0)
case 5:x=6
return A.b(p.tL(),$async$$0)
case 6:r=A.S(t).k("M<1,n>")
r=new A.M(new A.M(t,new B.dQM(p),r),new B.dQN(),r.k("M<ak.E,n>")).c0(0,new B.dQO())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a3(t,!1).cg(A.e_(new B.dQP(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p8(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.V_(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQM.prototype={
$1(d){var x=this.a,w=C.d.bf(x.d,new B.dQL(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dQL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQN.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dQO.prototype={
$1(d){return d.length!==0},
$S:3}
B.dQP.prototype={
$1(d){var x=this.a
return new B.Z1(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dQR.prototype={
$1(d){return d.a},
$S:z+2}
B.dQS.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dQK.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kC,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapx(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mu(D.mF)?C.uf:C.p2
p=!x||p.mu(D.mF)?"Play video":"View"
return A.c0(A.bm(!0,new A.D(C.Bt,A.w(A.a([q,o,t,C.aA,B.Z0(!1,u,!1,w,p,new B.dQF(d),v),B.Z0(!1,u,!1,C.jy,"Share via QR",new B.dQG(d),"Letters/numbers QR code"),B.Z0(!1,u,!1,D.a0D,"Send to their Code",new B.dQH(d),"Enter someone else's personal code"),B.Z0(!1,u,!1,C.hE,"Download / save",new B.dQI(d),v),C.al,B.Z0(!1,u,!0,C.eb,"Delete",new B.dQJ(d),v)],y.p),C.ai,v,C.e,C.P,0,C.p),v),!0,!1,C.ae,!0,!0),new A.o(s,v,new A.bJ(new A.ay(r,1,C.q,-1),C.X,C.X,C.X),C.kS,v,v,C.n),C.bf)},
$S:545}
B.dQF.prototype={
$0(){A.a3(this.a,!1).N("view")
return null},
$S:0}
B.dQG.prototype={
$0(){A.a3(this.a,!1).N("qr")
return null},
$S:0}
B.dQH.prototype={
$0(){A.a3(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dQI.prototype={
$0(){A.a3(this.a,!1).N("save")
return null},
$S:0}
B.dQJ.prototype={
$0(){A.a3(this.a,!1).N("delete")
return null},
$S:0}
B.dQf.prototype={
$1(d){return d.a},
$S:z+2}
B.dQg.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dQh.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6X(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gv(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p8(s.c,s.f),$async$$0)
case 4:u.i6(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQb.prototype={
$1(d){var x=this.a
x.tM(new B.dQa(x,d,this.b),"Preparing\u2026")},
$S:462}
B.dQa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i6("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UU(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i6("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCN(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i6("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQx.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dQy.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fVC(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gs(new B.dQn(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i6("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cd(null,null,!1,null,new B.dQo(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dQp(s))
case 5:x=8
return A.b(r.b.ir(0,C.Fy,new B.dQq()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gal(t)){s.i6("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tL(),$async$$0)
case 9:s.i6("Received "+q.gK(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQn.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQk(x,d,e))},
$S:207}
B.dQk.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQo.prototype={
$1(d){return new B.ac3(this.a.a,null)},
$S:z+21}
B.dQp.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dQq.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dQs.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Is(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6L(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b09(B.Is(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apk(new B.dQl(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fVB(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i6(q)
x=1
break}x=10
return A.b(s.tL(),$async$$0)
case 10:o=J.cB(r)
p=o.eR(r,new B.dQm()).gK(0)
s.i6(p>0?"Received "+p+" video(s).":"Restored "+o.gK(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQl.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQj(x,d,e))},
$S:207}
B.dQj.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQm.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mF)},
$S:z+1}
B.dQC.prototype={
$1(d){return new B.Z2(this.a.a.c,null)},
$S:z+23}
B.dQB.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZJ(u.a.c,v.b),$async$$0)
case 2:t.i6(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQW.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c0(A.bm(!0,new A.D(C.Bt,A.w(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kC,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Z0(!0,w,!1,C.nk,"My Code",new B.dQT(d),"Your personal code & QR \u2014 others send docs to you"),B.Z0(!1,w,!1,D.a0D,"Send to their Code",new B.dQU(this.a,d),"Enter someone else's 5-digit code + letter"),B.Z0(!1,w,!1,S.yO,"Import backup",new B.dQV(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.P,0,C.p),x),!0,!1,C.ae,!0,!0),new A.o(u,x,new A.bJ(new A.ay(t,1,C.q,-1),C.X,C.X,C.X),C.kS,x,x,C.n),C.bf)},
$S:545}
B.dQT.prototype={
$0(){A.a3(this.a,!1).N("my_code")
return null},
$S:0}
B.dQU.prototype={
$0(){A.a3(this.b,!1).N(null)
this.a.bCm()},
$S:0}
B.dQV.prototype={
$0(){A.a3(this.a,!1).N("import")
return null},
$S:0}
B.dR8.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IC(D.Qk,x,C.a0x,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cS(C.d.gH(D.Qk).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:573}
B.dR6.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.dR7.prototype={
$0(){this.a.ai6()
return null},
$S:0}
B.dR9.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.x(0,(1-e)*10)),e)},
$S:107}
B.dRa.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ac5(e,w,v,this.b,x.e,x.c75(w),new B.dR2(x,w),new B.dR3(x,v,w),new B.dR4(x,w),new B.dR5(x,w),null)},
$S:z+24}
B.dR2.prototype={
$0(){this.a.afm(this.b)
return null},
$S:0}
B.dR3.prototype={
$0(){var x=this.a
return x.m(new B.dR1(x,this.b,this.c))},
$S:0}
B.dR1.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dR4.prototype={
$0(){this.a.NY(this.b)
return null},
$S:0}
B.dR5.prototype={
$0(){this.a.ahU(this.b)
return null},
$S:0}
B.d4g.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.x(0,(1-e)*18)),e)},
$S:107}
B.d4h.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:129}
B.d4E.prototype={
$3(d,e,f){return A.dd(A.dU(f,new A.x(0,(1-e)*14)),e)},
$S:107}
B.d4D.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.d4A.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d4B.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d4C.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d4y.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gal(w))return A.fO(w,C.A,x,new B.d4w(this.a),C.h2,C.dw,!0,x,!1,x,x)
$.aV.x1$.push(new B.d4x(this.a))
return C.bI},
$S:130}
B.d4w.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d4u(this.a))
return C.bI},
$S:184}
B.d4u.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d4r(x))},
$S:9}
B.d4r.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4x.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d4t(x))},
$S:9}
B.d4t.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4z.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d4v(this.a))
return C.bI},
$S:184}
B.d4v.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d4s(x))},
$S:9}
B.d4s.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4d.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d4c(x,d))},
$S:1743}
B.d4c.prototype={
$0(){return this.a.f=this.b===C.uP},
$S:0}
B.d4e.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d4b(x,d))},
$S:9}
B.d4b.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d4f.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d4a(x,d))},
$S:9}
B.d4a.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d46.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d47.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d48.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d49.prototype={
$1(d){return this.a.d.MY(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:7}
B.d4R.prototype={
$0(){var x=this.a.a
return B.ru(x.c,x.d)},
$S:1744}
B.d4S.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d4T.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d4U.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d4V.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d4W.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d4Y.prototype={
$0(){var x=this.a
x.m(new B.d4X(x))},
$S:0}
B.d4X.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h5(0)
else x.pZ(0)},
$S:0}
B.d4N.prototype={
$1(d){return this.a.QE(this.b)},
$S:12}
B.d4O.prototype={
$1(d){return this.a.QD(this.b)},
$S:12}
B.d4F.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d4G.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d4H.prototype={
$1(d){return D.h7n},
$S:z+25}
B.d4M.prototype={
$2(d,e){if(d)B.V_()},
$S:123}
B.d4I.prototype={
$0(){return this.a.a9M(this.b)},
$S:0}
B.d4J.prototype={
$0(){return this.a.a9J(this.b)},
$S:0}
B.d4K.prototype={
$0(){return this.a.adZ(this.b)},
$S:0}
B.d4L.prototype={
$0(){return this.a.a1v(this.b)},
$S:0}
B.d45.prototype={
$0(){A.a3(this.a,!1).N(null)
return null},
$S:0}
B.d4Q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q2(),$async$$0)
case 2:u.m(new B.d4P(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d4P.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ca4.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mF)},
$S:z+1}
B.ca5.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aM(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ca3.prototype={
$2(d,e){return this.bjG(d,e)},
bjG(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.V0(u.c,A.G(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fqq.prototype={
$1(d){if(d===D.a6E&&(this.a.a.a&30)===0)this.a.fT(0)},
$S:z+27}
B.fqr.prototype={
$0(){},
$S:11}
B.fqZ.prototype={
blf(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.feI(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.haY(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.blf(d,e)},
$S:750}
B.fqY.prototype={
$1(d){var x=this
d.b=new B.fqX(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fqX.prototype={
$1(d){return this.ble(d)},
ble(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZK(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aM(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.r(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.r(r,"name")
n=J.k(n==null?"file":n)
m=J.r(r,"mime")
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
return A.b(B.feI(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6U(m),$async$$1)
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
x(v=B.azf.prototype,"gcdU","Qf",0)
x(v,"gceL","Jf",0)
x(v,"gceg","y0",0)
x(v=B.aD9.prototype,"gc7_","adX",0)
x(v,"gc70","ZD",0)
x(v,"gcty","ahB",0)
x(v=B.aDc.prototype,"gc71","ZE",0)
x(v,"gctz","a1P",0)
x(B.aDa.prototype,"gc72","adY",0)
x(B.aze.prototype,"gc77","c78",4)
x(v=B.aDb.prototype,"gceh","a_L",0)
x(v,"gcs5","cs6",4)
x(v,"gb1g","ayo",0)
x(v,"gcv3","ai0",0)
x(v,"gbOz","Xy",0)
x(v,"gc76","Ei",0)
x(B.azg.prototype,"gb52","a1O",0)
x(B.azd.prototype,"gc79","ZF",0)
x(v=B.azj.prototype,"gb_X","ccy",4)
x(v,"gc73","ae0",0)
x(v=B.azh.prototype,"gcr5","a1A",0)
x(v,"gaZa","ae_",0)
w(B.azc.prototype,"gax1","ax2",8)
x(v=B.azi.prototype,"gch0","afP",0)
x(v,"gbO5","aay",0)
w(v,"gax1","ax2",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cl2,B.a9h,B.atE,B.aBO,B.aEU,B.jm,B.abM,B.buX,B.EZ,B.X3])
w(B.cl3,B.cl2)
w(B.b3S,B.a9h)
x(A.hS,[B.ckZ,B.cl_,B.cl0,B.ckY,B.cl1,B.cl4,B.cl5,B.cl6,B.cl7,B.cl8,B.cl9,B.cla,B.clb,B.fke,B.fIa,B.fIc,B.fIb,B.fIp,B.fIq,B.fmr,B.d4l,B.d4n,B.d4m,B.d4q,B.foq,B.foV,B.c9z,B.c9G,B.c9H,B.c9C,B.c9A,B.c9D,B.c9E,B.fIn,B.fIo,B.dRf,B.dRo,B.dRm,B.dRn,B.fhp,B.fmD,B.fmE,B.c9Y,B.fmG,B.fqO,B.fl5,B.fl6,B.ca2,B.fNe,B.d4k,B.d4i,B.dRb,B.dQ7,B.dQd,B.dQw,B.dQc,B.dQD,B.dQX,B.dQY,B.dQZ,B.dQu,B.dQM,B.dQL,B.dQN,B.dQO,B.dQP,B.dQR,B.dQS,B.dQK,B.dQf,B.dQg,B.dQb,B.dQx,B.dQo,B.dQm,B.dQC,B.dQW,B.dR8,B.dR9,B.d4g,B.d4h,B.d4E,B.d4D,B.d4y,B.d4w,B.d4u,B.d4x,B.d4z,B.d4v,B.d4d,B.d4e,B.d4f,B.d49,B.d4N,B.d4O,B.d4H,B.ca4,B.ca5,B.fqq,B.fqY,B.fqX])
w(B.b3T,B.atE)
x(A.j0,[B.fI9,B.d4o,B.d4p,B.foo,B.fop,B.foU,B.dQ4,B.dRd,B.dRe,B.dRc,B.dRg,B.dRh,B.dRi,B.dRj,B.dRk,B.dRl,B.dQ5,B.dQ6,B.fmF,B.d4j,B.dQz,B.dQA,B.dQ8,B.dQ9,B.dQe,B.dR_,B.dR0,B.dQt,B.dQE,B.dQi,B.dQv,B.dQQ,B.dQF,B.dQG,B.dQH,B.dQI,B.dQJ,B.dQh,B.dQa,B.dQy,B.dQr,B.dQk,B.dQp,B.dQq,B.dQs,B.dQj,B.dQB,B.dQT,B.dQU,B.dQV,B.dR6,B.dR7,B.dR2,B.dR3,B.dR1,B.dR4,B.dR5,B.d4A,B.d4B,B.d4C,B.d4r,B.d4t,B.d4s,B.d4c,B.d4b,B.d4a,B.d46,B.d47,B.d48,B.d4R,B.d4S,B.d4T,B.d4U,B.d4V,B.d4W,B.d4Y,B.d4X,B.d4F,B.d4G,B.d4I,B.d4J,B.d4K,B.d4L,B.d45,B.d4Q,B.d4P,B.fqr])
x(A.lU,[B.ac4,B.Nq,B.a9i,B.Os,B.X2,B.Or,B.F_])
x(A.ag,[B.YZ,B.UP,B.UT,B.UQ,B.YY,B.UR,B.Z_,B.YX,B.PD,B.Z1,B.YW,B.Z2])
x(A.ah,[B.azf,B.aD9,B.aDc,B.aDa,B.aze,B.aDb,B.azg,B.azd,B.azj,B.azh,B.azc,B.azi])
x(A.au,[B.acw,B.azb,B.bdd,B.ac5,B.ac3,B.bde])
x(A.k6,[B.c9F,B.c9B,B.c9J,B.c9K,B.fJ8,B.dQn,B.dQl,B.dRa,B.d4M,B.ca3,B.fqZ])
x(A.iT,[B.biv,B.buB])})()
A.jJ(b.typeUniverse,JSON.parse('{"b3S":{"a9h":[]},"b3T":{"atE":[]},"YZ":{"ag":[],"t":[]},"azf":{"ah":["YZ"]},"acw":{"au":[],"t":[]},"UP":{"ag":[],"t":[]},"UT":{"ag":[],"t":[]},"aD9":{"ah":["UP"]},"aDc":{"ah":["UT"]},"biv":{"iT":[]},"UQ":{"ag":[],"t":[]},"aDa":{"ah":["UQ"]},"YY":{"ag":[],"t":[]},"UR":{"ag":[],"t":[]},"ac5":{"au":[],"t":[]},"Z_":{"ag":[],"t":[]},"YX":{"ag":[],"t":[]},"PD":{"ag":[],"t":[]},"Z1":{"ag":[],"t":[]},"ac3":{"au":[],"t":[]},"YW":{"ag":[],"t":[]},"Z2":{"ag":[],"t":[]},"aze":{"ah":["YY"]},"buB":{"iT":[]},"aDb":{"ah":["UR"]},"azb":{"au":[],"t":[]},"bdd":{"au":[],"t":[]},"azg":{"ah":["Z_"]},"azd":{"ah":["YX"]},"azj":{"ah":["PD"]},"azh":{"ah":["Z1"]},"azc":{"ah":["YW"]},"azi":{"ah":["Z2"]},"bde":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.av
return{J:x("ug"),k:x("LQ()"),m:x("bt<n,n>"),F:x("r6"),g:x("aA<jm?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<v>"),W:x("O<bh>"),Y:x("O<a6<n,R>>"),t:x("O<a6<n,@>>"),r:x("O<jm>"),w:x("O<+file,name(lD,n)>"),u:x("O<cS>"),s:x("O<n>"),E:x("O<iT>"),a:x("O<dI>"),p:x("O<t>"),Z:x("O<H>"),G:x("bh"),A:x("cw<ah<ag>>"),n:x("ai<jm>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bw<n,n>"),P:x("a6<n,@>"),f:x("a6<@,@>"),o:x("iD"),e:x("igl"),af:x("Ea"),U:x("jm"),b:x("cq"),C:x("aD"),aK:x("w9"),ab:x("EZ"),br:x("atE"),v:x("X3"),N:x("n"),X:x("bp<K>"),Q:x("lQ"),D:x("dI"),aw:x("cx<n>"),cd:x("Z<a6<n,@>>"),c7:x("t"),ch:x("bX<ai<jm>>"),aW:x("bX<dI?>"),aY:x("bX<~>"),cx:x("ac4"),b1:x("bg<ai<jm>>"),cf:x("bg<dI?>"),d4:x("bg<~>"),c4:x("aBO"),bG:x("aEU"),q:x("n1"),B:x("pq<EZ>"),c6:x("pq<a9i>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jm>?"),aL:x("ai<@>?"),h:x("a6<n,@>?"),l:x("jm?"),R:x("aD?"),c:x("X3?"),d:x("+answerQr,transfer(n,aA<ai<jm>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Nq,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dI?"),cm:x("abM?"),bk:x("aBO?"),ag:x("aEU?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b_J=new A.ay(C.aD,2,C.q,-1)
D.bZG=new A.a8(C.a3,C.a8,C.x,C.a2B,null,null)
D.b1o=new A.o(null,null,null,C.mh,null,D.bZG,C.n)
D.b2S=new A.o(null,null,null,C.mh,null,E.H_,C.n)
D.acS=new A.v(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ae6=new A.v(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.af1=new A.v(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.agv=new A.v(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fnL=new A.y("Your team portal",null,C.df,null,null,null,null,null,null,null,null,null)
D.fCc=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DM,null,null,null,null,null,null,null,null,null)
D.d8P=x([D.fnL,C.al,D.fCc],y.p)
D.bp1=new A.fk(C.af,C.e,C.j,C.E,null,C.p,null,0,D.d8P,null)
D.fGC=new A.y("Create your organization",null,C.fx,null,null,null,null,null,null,null,null,null)
D.fs7=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DM,null,null,null,null,null,null,null,null,null)
D.doR=x([D.fGC,C.al,D.fs7],y.p)
D.bpb=new A.fk(C.af,C.e,C.j,C.E,null,C.p,null,0,D.doR,null)
D.fCP=new A.y("Team Member sign-in",null,C.fx,null,null,null,null,null,null,null,null,null)
D.fvZ=new A.y("Enter the access code and password from your organization.",null,G.DM,null,null,null,null,null,null,null,null,null)
D.dmG=x([D.fCP,C.al,D.fvZ],y.p)
D.bpm=new A.fk(C.af,C.e,C.j,C.E,null,C.p,null,0,D.dmG,null)
D.bvo=new A.Q(16,10,16,28)
D.bvw=new A.Q(16,14,16,4)
D.bwN=new A.Q(20,0,20,16)
D.bxi=new A.Q(20,8,20,16)
D.aje=new A.Q(24,22,24,20)
D.a0D=new A.a1(63394,"MaterialIcons",!1)
D.amf=new A.a1(63515,"MaterialIcons",!1)
D.bJS=new A.a1(983813,"MaterialIcons",!1)
D.bHf=new A.a1(62867,"MaterialIcons",!1)
D.bKS=new A.ae(D.bHf,44,C.c,null,null,null)
D.bLX=new A.ae(C.mz,null,C.ad,null,null,null)
D.bNl=new A.ae(C.ja,18,null,null,null,null)
D.bP3=new A.ae(D.a0D,26,C.c,null,null,null)
D.bPB=new A.ae(C.GF,null,null,null,null,null)
D.bQa=new A.ae(C.Ce,null,null,null,null,null)
D.bRk=new A.ae(W.a0Q,null,null,null,null,null)
D.bRE=new A.ae(C.hp,16,null,null,null,null)
D.bV6=new A.ae(C.rl,16,null,null,null,null)
D.bL9=new A.ae(C.nk,null,null,null,null,null)
D.bVY=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bL9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bQI=new A.ae(C.Ge,null,null,null,null,null)
D.bW2=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bQI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLv=new A.ae(H.GN,null,null,null,null,null)
D.bWd=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bLv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cJZ=x([C.fd,C.b_,C.aD],y.O)
D.c0y=new A.a8(C.ax,C.aC,C.x,D.cJZ,null,null)
D.cJr=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qk=x([C.fd,C.aD],y.O)
D.QB=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mF=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dhg=x([C.oM,C.aD],y.O)
D.e8s={iceServers:0}
D.aHc={urls:0}
D.dsx=new A.bt(D.aHc,["stun:stun.l.google.com:19302"],y.m)
D.dsw=new A.bt(D.aHc,["stun:stun1.l.google.com:19302"],y.m)
D.d__=x([D.dsx,D.dsw],A.av("O<a6<n,n>>"))
D.drQ=new A.bt(D.e8s,[D.d__],A.av("bt<n,@>"))
D.I3=new B.Nq(0,"lanDirect")
D.RX=new B.Nq(1,"cloudStash")
D.dDu=new B.Nq(2,"inlineInstant")
D.RY=new B.Nq(3,"webrtcLink")
D.zx=new B.Nq(4,"videoCloud")
D.fCb=new A.y("Receive file",null,C.nz,null,null,null,null,null,null,null,null,null)
D.czm=x([E.anV,C.ab,D.fCb],y.p)
D.eSL=new A.c9(C.aM,C.b7,C.j,C.m,null,C.p,null,0,D.czm,null)
D.eeo=new A.D(C.cj,D.eSL,null)
D.feG=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a3g,null,null,null)
D.foi=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.feG,null,C.L,null,null,null,null,null,null,null)
D.edE=new A.D(C.Bx,D.foi,null)
D.b7c=new A.cm(C.A,null,null,D.edE,null)
D.eka=new A.cM(0,null,0,28,null,null,D.b7c,null)
D.ekt=new B.a9i(0,"RTCDataChannelConnecting")
D.aMx=new B.a9i(1,"RTCDataChannelOpen")
D.aMy=new B.a9i(3,"RTCDataChannelClosed")
D.eku=new B.F_(0,"RTCIceConnectionStateNew")
D.ekv=new B.F_(1,"RTCIceConnectionStateChecking")
D.ekw=new B.F_(2,"RTCIceConnectionStateCompleted")
D.ekx=new B.F_(3,"RTCIceConnectionStateConnected")
D.eky=new B.F_(4,"RTCIceConnectionStateCount")
D.ekz=new B.F_(5,"RTCIceConnectionStateFailed")
D.ekA=new B.F_(6,"RTCIceConnectionStateDisconnected")
D.aMz=new B.F_(7,"RTCIceConnectionStateClosed")
D.aMA=new B.X2(0,"RTCIceGatheringStateNew")
D.ekB=new B.X2(1,"RTCIceGatheringStateGathering")
D.a6E=new B.X2(2,"RTCIceGatheringStateComplete")
D.a6F=new B.Or(0,"RTCPeerConnectionStateClosed")
D.aMB=new B.Or(1,"RTCPeerConnectionStateFailed")
D.aMC=new B.Or(2,"RTCPeerConnectionStateDisconnected")
D.aMD=new B.Or(3,"RTCPeerConnectionStateNew")
D.aME=new B.Or(4,"RTCPeerConnectionStateConnecting")
D.aMF=new B.Or(5,"RTCPeerConnectionStateConnected")
D.ekC=new B.Os(0,"RTCSignalingStateStable")
D.ekD=new B.Os(1,"RTCSignalingStateHaveLocalOffer")
D.ekE=new B.Os(2,"RTCSignalingStateHaveRemoteOffer")
D.ekF=new B.Os(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ekG=new B.Os(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMG=new B.Os(5,"RTCSignalingStateClosed")
D.eXg=new A.as(160,48)
D.b8r=new A.fj(2,null,null,null,null,C.aD,null,null,null,null)
D.eYN=new A.a7(16,16,D.b8r,null)
D.frt=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f_e=new A.b1(D.frt,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fyX=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new A.b1(D.fyX,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fHF=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f_o=new A.b1(D.fHF,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fr3=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f_O=new A.b1(D.fr3,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fD_=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new A.b1(D.fD_,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEo=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0h=new A.b1(D.fEo,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fJ4=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f0y=new A.b1(D.fJ4,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fH5=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f0D=new A.b1(D.fH5,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fIh=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f1p=new A.b1(D.fIh,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fpG=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f1W=new A.b1(D.fpG,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fAM=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f2g=new A.b1(D.fAM,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.ftK=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f2M=new A.b1(D.ftK,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fJa=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new A.b1(D.fJa,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fpW=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f2W=new A.b1(D.fpW,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.foE=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f3a=new A.b1(D.foE,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.flw=new A.y("NGMY DOC SHARE",null,C.aQN,null,null,null,null,null,null,null,null,null)
D.fmS=new A.y("Show this to sender",null,C.iY,null,null,null,null,null,null,null,null,null)
D.fnS=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fsx=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fsW=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.ftT=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fun=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxc=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fzY=new A.y("Send to their Doc Share",null,C.nx,null,null,null,null,null,null,null,null,null)
D.fAg=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fAA=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fB9=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fBg=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fBE=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eY,null,null,null,null,null,null,null,null,null)
D.fEU=new A.y("Share files & videos\nwith a scan.",null,C.aQO,null,null,null,null,null,null,null,null,null)
D.fFd=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h7n=new B.YW(null)
D.a9P=new B.ac4(0,"docShare")
D.a9Q=new B.ac4(1,"gate")
D.UW=new B.ac4(2,"gateNoIndividual")})();(function staticFields(){$.aNr=null
$.fcs=function(){var x=y.N
return A.U(x,x)}()
$.Gf=A.U(y.N,y.D)
$.ag7=A.U(y.N,A.av("lD"))
$.QW=A.U(y.N,y.D)
$.fd_=A.U(y.N,A.av("abM"))
$.c9X=A.U(y.S,A.av("buX"))
$.haX=1
$.hYP=null
$.hYO=null
$.hQg=null
$.h_M=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"igQ","hsk",()=>new B.cl3())
x($,"ieL","h3A",()=>C.a.q(A.bu(A.bu(A.bu(A.GQ(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["xp1DJMTB5cUwzaDlwfVEcjhu+78="]=a.current})($__dart_deferred_initializers__);