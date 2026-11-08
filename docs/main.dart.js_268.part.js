((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cnb:function cnb(){},
hMQ(d){var x=null,w=new B.b4u(d,D.eq8,new A.pv(x,x,y.c6),new A.pv(x,x,y.B))
w.bzd(d)
return w},
b4u:function b4u(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cn6:function cn6(d){this.a=d},
cn7:function cn7(d){this.a=d},
cn8:function cn8(d){this.a=d},
cn5:function cn5(d){this.a=d},
cn9:function cn9(d){this.a=d},
hMR(d,e){var x=y.N
x=new B.b4v(d,e,A.U(x,y.e),A.U(x,y.z))
x.bze(d,e)
return x},
b4v:function b4v(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cnc:function cnc(d){this.a=d},
cnd:function cnd(d){this.a=d},
cne:function cne(d){this.a=d},
cnf:function cnf(d){this.a=d},
cng:function cng(d){this.a=d},
cnh:function cnh(d){this.a=d},
cni:function cni(d){this.a=d},
cnj:function cnj(d){this.a=d},
h2e(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z3.Me(x,"ngmy_doc_share_v1",new B.fmN(),1)},
hTp(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ci(d))
if(y.J.b(d))return new Uint8Array(A.ci(J.eG(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ci(A.yf(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ci(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
Rp(d,e){return B.i7X(d,e)},
i7X(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNY
x=7
return A.b(o==null?$.aNY=B.h2e():o,$async$Rp)
case 7:s=g
r=new Uint8Array(A.ci(e))
q=J.mP(s,"blobs","readwrite")
C.iZ.mm(J.mO(q,"blobs"),r,d)
x=8
return A.b(J.pE(q),$async$Rp)
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
return A.i($async$Rp,w)},
Ro(d){return B.i7W(d)},
i7W(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ro=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNY
x=7
return A.b(o==null?$.aNY=B.h2e():o,$async$Ro)
case 7:s=f
r=J.mP(s,"blobs","readonly")
x=8
return A.b(C.iZ.zC(J.mO(r,"blobs"),d),$async$Ro)
case 8:q=f
x=9
return A.b(J.pE(r),$async$Ro)
case 9:o=B.hTp(q)
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
return A.i($async$Ro,w)},
ah5(d){return B.i7V(d)},
i7V(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ah5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNY
x=7
return A.b(p==null?$.aNY=B.h2e():p,$async$ah5)
case 7:s=f
r=J.mP(s,"blobs","readwrite")
C.iZ.FZ(J.mO(r,"blobs"),d)
x=8
return A.b(J.pE(r),$async$ah5)
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
return A.i($async$ah5,w)},
fmN:function fmN(){},
hVN(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bp0(w,v))}return u},
hsv(d,e){var x,w={},v=A.aWy("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fKO(w,v,e)
C.wp.yA(v,"change",new B.fKQ(w,v,!1))
C.wp.yA(v,"cancel",new B.fKP(w))
$.eW.ms()
v.click()
A.bP(C.aiG,new B.fKN(w),y.H)},
fKO:function fKO(d,e,f){this.a=d
this.b=e
this.c=f},
fKQ:function fKQ(d,e,f){this.a=d
this.b=e
this.c=f},
fKP:function fKP(d){this.a=d},
fKN:function fKN(d){this.a=d},
Dd(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dd=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTY()?3:4
break
case 3:x=5
return A.b(B.hny(e,d,s,!0,!1,f,g,h,!1,i),$async$Dd)
case 5:x=1
break
case 4:x=6
return A.b(B.R3(d,s,f,g,h,i),$async$Dd)
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
return A.b(B.IJ(s,d),$async$Dd)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fio(s,d),$async$Dd)
case 14:x=12
return A.b(r.hny(q,p,o,n,m,l,k,j,a1,i),$async$Dd)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cg(A.e_(new B.fL2(s,i,d,f,g,h),!1,null,y.H)),$async$Dd)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cg(A.e_(new B.fL3(s,i,d,f,g,h),!1,null,y.H)),$async$Dd)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dd,w)},
R3(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$R3=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_e(e),$async$R3)
case 3:u=k
x=4
return A.b(B.apv(d,e,!1),$async$R3)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IJ(e,d),$async$R3)
case 7:if(k){v=D.aaG
x=1
break}x=8
return A.b(B.Va(e),$async$R3)
case 8:v=t?D.Vq:D.aaH
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_c(d,e)){v=D.aaG
x=1
break}x=11
return A.b(B.Va(e),$async$R3)
case 11:v=t?D.Vq:D.aaH
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fYh(d,e)){v=D.aaG
x=1
break}x=14
return A.b(B.Va(e),$async$R3)
case 14:v=D.Vq
x=1
break
case 13:v=t?D.Vq:D.aaH
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R3,w)},
fio(d,e){var x=0,w=A.j(y.y),v
var $async$fio=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_c(e,d)){v=!1
x=1
break}x=3
return A.b(B.b_e(d),$async$fio)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fio,w)},
hny(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cg(A.e_(new B.fp2(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hiC(d,e,f,g,h,i,j){return new B.Zi(e,j,d,g,h,i,f,null)},
fqZ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fqZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
x=3
return A.b(A.bU(C.K,null,new B.fr1(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fqZ)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqZ,w)},
frt(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$frt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
r=new A.as(C.at,u)
x=3
return A.b(A.bU(C.K,null,new B.frv(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$frt)
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
return A.i($async$frt,w)},
h2n(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bu(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fDk(d,e){var x=0,w=A.j(y.H),v
var $async$fDk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Va(e),$async$fDk)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eK()
case 1:return A.h(v,w)}})
return A.i($async$fDk,w)},
fL2:function fL2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fL3:function fL3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acj:function acj(d,e){this.a=d
this.b=e},
fp2:function fp2(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zi:function Zi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azH:function azH(){this.c=this.a=this.d=null},
d6U:function d6U(d,e){this.a=d
this.b=e},
d6R:function d6R(d){this.a=d},
d6T:function d6T(d){this.a=d},
d6S:function d6S(d){this.a=d},
d6W:function d6W(){},
d6V:function d6V(d){this.a=d},
acL:function acL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCj:function aCj(d,e){this.a=d
this.b=e},
aFp:function aFp(d,e,f){this.a=d
this.b=e
this.c=f},
fr1:function fr1(d,e,f){this.a=d
this.b=e
this.c=f},
fr_:function fr_(d){this.a=d},
fr0:function fr0(d,e,f){this.a=d
this.b=e
this.c=f},
frv:function frv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fru:function fru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cb1(d,e,f,g,h){return B.hHL(d,e,f,g,h)},
hHL(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cb1=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dF(d,new B.cb2(s,e,h,g,f,q),y.g),y.l),$async$cb1)
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
return A.i($async$cb1,w)},
b_9(d,e,f,g,h){return B.hHM(d,e,f,g,h)},
hHM(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_9=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auQ("GET",d)
o=A.fUF()
if(o==null)o=new A.M_(A.a([],y.W))
x=7
return A.b(o.f3(0,s).da(0,C.FR),$async$b_9)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cr(),$async$b_9)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BT(q,h,o,e,f,"Received via QR")
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
return A.i($async$b_9,w)},
b_8(d){return B.hHJ(d)},
hHJ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vr(d,null).da(0,C.o6),$async$b_8)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aN(0,A.m2(A.m0(p.e)).cA(0,p.w),null)
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
return A.i($async$b_8,w)},
cb0(d){return B.hHK(d)},
hHK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cb0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vr(d,null).da(0,C.q7),$async$cb0)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m2(A.m0(q.e)).cA(0,q.w)
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
return A.i($async$cb0,w)},
cb2:function cb2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jq:function jq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
IH(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hHR(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IH(C.a.b7(u,v.length))}return null},
hHS(d){var x=B.IH(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hHN(){var x,w=$.pC(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.au(10)
return C.d.hx(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(24)]},
a6X(d){return B.hHO(d)},
hHO(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a6X)
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
return A.i($async$a6X,w)},
a6Y(d,e){return B.hHP(d,e)},
hHP(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6Y=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a6Y)
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
return A.i($async$a6Y,w)},
BS(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BS)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IH(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6Z(r),$async$BS)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6X("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BS)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.IH(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BS)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hHN()
x=14
return A.b(B.a6Z(m),$async$BS)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a7().ae()
x=15
return A.b(B.a6Y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BS)
case 15:k=f
x=16
return A.b(B.a6Y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BS)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BS)
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
return A.i($async$BS,w)},
a6Z(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IH(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6X("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6Z)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Z,w)},
a7_(d,e,f,g){return B.hHT(d,e,f,g)},
hHT(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7_=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IH(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6Z(r),$async$a7_)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.cb8())>1048576||g.b5(d,new B.cb9())){v=B.EJ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7a("myCode",d,a0),$async$a7_)
case 4:u=a3
try{t=C.X.aN(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cq(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.EJ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b_h(u,g.gL(d),a0),$async$a7_)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pC().au(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.cba(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_a(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],i,y.z),q),$async$a7_)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7_,w)},
EJ(d,e,f,g,h){return B.hHQ(d,e,f,g,h)},
hHQ(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EJ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$EJ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.cb4())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pC().au(9999)
h=Date.now()
g=""+1000*h+"_"+C.cZ.au(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.IL(a9,q)
a0=new A.KB(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$EJ)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p3(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaA(a1.a,a4,"media",a1.d,a2).xb(m,n,new A.DZ(!0,q.c)),$async$EJ)
case 12:J.cb(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$EJ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQv(r),$async$EJ)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.cb5(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_a(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],e,d),a8),$async$EJ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQv(r),$async$EJ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EJ,w)},
b_a(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6X(t),$async$b_a)
case 3:s=g
r=y.aL.a(J.q(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cb3(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6Y(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_a,w)},
NB(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NB=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6X("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NB)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cq(s)){v=0
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
return A.b(B.b_b(k,a0),$async$NB)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b_g(h),$async$NB)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vh(g,a0),$async$NB)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("K.E")
e=A.C(new A.Z(r,new B.cb6(),q),n)
d=A.C(new A.Z(r,new B.cb7(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d1(d,0,A.dB(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6Y("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$NB)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NB,w)},
b_b(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cq(h)){v=0
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
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ibN(k,j)
C.d.v(s,i)
x=5
return A.b(B.Db(l,m,"Received via My Code",t,e,i),$async$b_b)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQv(s),$async$b_b)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_b,w)},
cb8:function cb8(){},
cb9:function cb9(){},
cba:function cba(){},
cb4:function cb4(){},
cb5:function cb5(){},
cb3:function cb3(){},
cb6:function cb6(){},
cb7:function cb7(){},
fL_(d,e){var x=0,w=A.j(y.H)
var $async$fL_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cg(A.e_(new B.fL0(e),!1,null,y.H)),$async$fL_)
case 2:return A.h(null,w)}})
return A.i($async$fL_,w)},
bDI(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bDI=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cq(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cg(A.e_(new B.fL1(g,e,f),!1,null,y.y)),$async$bDI)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDI,w)},
fL0:function fL0(d){this.a=d},
fL1:function fL1(d,e,f){this.a=d
this.b=e
this.c=f},
V7:function V7(d,e){this.c=d
this.a=e},
aDF:function aDF(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dSA:function dSA(d,e){this.a=d
this.b=e},
Vb:function Vb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDI:function aDI(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dTJ:function dTJ(d){this.a=d},
dTK:function dTK(d){this.a=d},
dTL:function dTL(d){this.a=d},
dTI:function dTI(d,e){this.a=d
this.b=e},
dTM:function dTM(d){this.a=d},
dTN:function dTN(d){this.a=d},
dTO:function dTO(d,e){this.a=d
this.b=e},
dTP:function dTP(d,e){this.a=d
this.b=e},
dTQ:function dTQ(d,e){this.a=d
this.b=e},
dTR:function dTR(d){this.a=d},
dTU:function dTU(){},
dTS:function dTS(d){this.a=d},
dTT:function dTT(d,e){this.a=d
this.b=e},
bjj:function bjj(){},
V8:function V8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDG:function aDG(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dSB:function dSB(d){this.a=d},
dSC:function dSC(d){this.a=d},
fYi(d){var x=d.hY
if(x>=0)return C.o.N(x)
return 10},
hHV(d){var x=d.kT
if(x>=0)return x
return 4.99},
hHU(d){var x=d.lv,w=y.N
w=x.je(x,new B.cbc(),w,w)
return w},
hdG(d){var x=d.kU,w=y.N
w=x.je(x,new B.cbd(),w,w)
return w},
b_e(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b_e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b_e)
case 7:s=f
r=A.w(p)
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
return A.i($async$b_e,w)},
a71(d,e){var x=0,w=A.j(y.H),v,u
var $async$a71=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a71)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a71)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a71,w)},
Va(d){var x=0,w=A.j(y.H),v,u
var $async$Va=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Va)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Va)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Va,w)},
fYh(d,e){var x,w,v
if(B.hHV(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hHU(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.V(Date.now(),0,!1))},
b_c(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hdG(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.V(Date.now(),0,!1))},
hdH(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hdG(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a7().ae())
d.kU=w},
apw(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apw)
case 7:s=f
r=A.w(p)
r=A.eA(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apw,w)},
apx(d){var x=0,w=A.j(y.H),v,u,t
var $async$apx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apw(d),$async$apx)
case 3:u=f
x=5
return A.b(A.az(),$async$apx)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$apx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apx,w)},
apv(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fYi(d)
if(u<=0){v=!1
x=1
break}if(B.fYh(d,e)){v=!1
x=1
break}x=3
return A.b(B.apw(e),$async$apv)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apv,w)},
b_d(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IJ(e,d),$async$b_d)
case 3:if(g){v=-1
x=1
break}u=B.fYi(d)
if(u<=0){v=-1
x=1
break}if(B.fYh(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apw(e),$async$b_d)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_d,w)},
cbf(d,e,f){var x=0,w=A.j(y.y),v
var $async$cbf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IJ(e,d),$async$cbf)
case 3:if(h){v=!1
x=1
break}v=B.apv(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbf,w)},
cbe(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cbe=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.cbf(d,u,i.gTY()),$async$cbe)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbe,w)},
a70(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a70=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gTY()){v=!0
x=1
break}if(B.b_c(d,u)){v=!0
x=1
break}x=5
return A.b(A.lp(u,C.SH),$async$a70)
case 5:x=k?3:4
break
case 3:B.hdH(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a70)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l0(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.SH,"Doc Share for Organizations"),$async$a70)
case 7:if(!k){v=!1
x=1
break}B.hdH(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a70)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a70,w)},
cbc:function cbc(){},
cbd:function cbd(){},
fLP(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fLP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fLP)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.ff_.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.ff_.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLP,w)},
ie7(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.ff_.bu($.ff_,new B.fLR(d))},
fLR:function fLR(d){this.a=d},
fgr(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fgr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mR(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jv,null,y.H),$async$fgr)
case 3:C.Av.fk(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.ms()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgr,w)},
afW(d,e,f){var x=0,w=A.j(y.H),v
var $async$afW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.ffx.n(0,d,new B.ac0(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$afW)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.X.ap(A.G(["parts",e,"size",f],v,y.C),null)),$async$afW)
case 2:return A.h(null,w)}})
return A.i($async$afW,w)},
afQ(d){return B.hXK(d)},
hXK(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.ffx.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afQ)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cq(s)){v=null
x=1
break}o=J.b6(s,new B.fjY(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.ac0(r)
$.ffx.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afQ,w)},
QU(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$QU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ci(e))
$.Gs.n(0,d,u)
x=3
return A.b(B.Rp(d,u),$async$QU)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QU,w)},
aOk(d){return B.hXI(d)},
hXI(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gs.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.Ro(d),$async$aOk)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.Gs.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aOk)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aM(r)
x=!J.cq(q)?9:10
break
case 9:B.QU(d,q)
x=11
return A.b(J.hz(s,d),$async$aOk)
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
return A.i($async$aOk,w)},
hTO(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ci(J.eG(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ci(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ci(A.yf(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ci(d)),y.K)
return A.f8(null,y.K)},
a1N(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bh($.bB,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fN(r,"loadend",new B.fpe(r,t),!1,s)
A.fN(r,"error",new B.fpf(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iu(0,C.MT,new B.fpg())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1N,w)},
aOE(d,e,f){return B.i_0(d,e,f)},
i_0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOE=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1N(i),$async$aOE)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Rp(o,p),$async$aOE)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cb(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afW(k,j,s),$async$aOE)
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
return A.i($async$aOE,w)},
aOD(d,e,f){return B.i__(d,e,f)},
i__(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOD=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOE(d,e,f),$async$aOD)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1N(f),$async$aOD)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gs.n(0,s,r)
$.Ra.n(0,s,r)
x=11
return A.b(B.QU(s,r),$async$aOD)
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
return A.i($async$aOD,w)},
BT(d,e,f,g,h,i){return B.hI3(d,e,f,g,h,i)},
hI3(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BT=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cZ.au(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jq(p,q,o,n,new A.V(Date.now(),0,!1).a7().ae(),a0,f,B.b_k(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.QU(s,d),$async$BT)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BT)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cJ.gct().aM(d)),$async$BT)
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
return A.b(B.AR(e),$async$BT)
case 12:j=a2
J.cb(j,m)
x=13
return A.b(B.GD(e,j),$async$BT)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BT,w)},
Vc(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vc=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AR(d),$async$Vc)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cZ.au(99999)
n=p.b
l=o.type
l.toString
k=B.hdJ(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a7().ae()
i=new B.jq(m,n,k,l,j,"From folder",null,B.b_k(),null)
$.agp.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1N(o),$async$Vc)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.Gs.n(0,h,g)
$.Ra.n(0,h,g)
B.QU(h,g)
x=9
break
case 10:x=11
return A.b(B.aOD(d,m,o),$async$Vc)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GD(d,t),$async$Vc)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vc,w)},
fYm(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fYm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hdJ(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IK(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BT(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYm,w)},
IK(d,e,f,g,h,i){return B.hI2(d,e,f,g,h,i)},
hI2(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IK=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cZ.au(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KB(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IK)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cq(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ci(J.RZ(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kA(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Rp(k,l),$async$IK)
case 11:J.cb(q,k);++p
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
return A.b(j.a4(0),$async$IK)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Rp(k,new Uint8Array(A.ci(n))),$async$IK)
case 15:J.cb(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afW(r,q,g),$async$IK)
case 16:f=new B.jq(i,a1,a0,g,new A.V(Date.now(),0,!1).a7().ae(),a2,null,B.b_k(),null)
x=17
return A.b(B.AR(d),$async$IK)
case 17:e=a6
J.cb(e,f)
x=18
return A.b(B.GD(d,e),$async$IK)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IK,w)},
Ve(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ve=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agp.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1N(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afQ(s),$async$Ve)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Ro(u[o]),$async$Ve)
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
v=A.yf(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.M)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Ra.h(0,s)
if(i==null)i=$.Gs.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rz(d,e),$async$Ve)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Ra.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.yf(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ve,w)},
hdJ(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rz(d,e){return B.hI4(d,e)},
hI4(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rz=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Ra.h(0,f)
if(e==null)e=$.Gs.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agp.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1N(s),$async$rz)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.Gs.n(0,f,r)
$.Ra.n(0,f,r)
B.QU(f,r)
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
return A.b(B.afQ(f),$async$rz)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayr(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Ro(g[l]),$async$rz)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.aoA()
if(!C.aG.gan(r)){$.Gs.n(0,f,r)
$.Ra.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aOk(f),$async$rz)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Ra.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Ve(a0,a1,0,g),$async$rz)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.ci(i))
$.Gs.n(0,f,h)
$.Ra.n(0,f,h)
B.QU(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rz,w)},
hI7(d){var x,w,v=$.agp.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hI8(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hI5(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apD(d,e,f,g,h){return B.hI6(d,e,f,g,h)},
hI6(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apD=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agp.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1N(s),$async$apD)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rz(g,e),$async$apD)
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
return A.b(n.io(d).xb(h,r,new A.DZ(!0,e.c)),$async$apD)
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
return A.i($async$apD,w)},
hdL(d,e,f,g,h){var x,w,v,u,t=$.hdK
$.hdK=t+1
x=Date.now()
w=""+1000*x+"_"+C.cZ.au(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cbq.n(0,t,new B.bvP(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayr(u)))
return t},
fYn(d){var x=0,w=A.j(y.H)
var $async$fYn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fYn,w)},
IL(d,e){var $async$IL=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agp.h(0,h)
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
return A.qe(B.Ve(d,e,p,o<q?o:q),$async$IL,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qe(A.G_(n),$async$IL,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qe(B.afQ("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IL,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qe(B.Ro(h[l]),$async$IL,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qe(A.G_(k),$async$IL,w)
case 21:case 20:case 16:h.length===r||(0,A.M)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qe(B.rz(d,e),$async$IL,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qe(A.G_(A.yf(j,p,o<i?o:i)),$async$IL,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qe(null,0,w)
case 2:return A.qe(t.at(-1),1,w)}})
var x=0,w=A.hmr($async$IL,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hoh(w)},
b_m(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b_m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cbq.h(0,d)
if(t==null||J.cq(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a4Z(),$async$b_m)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_m,w)},
Vd(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cbq.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4Z(),$async$Vd)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afW(r.c,u,r.z),$async$Vd)
case 4:t=new B.jq(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a7().ae(),r.f,r.r,B.b_k(),null)
u=r.a
x=5
return A.b(B.AR(u),$async$Vd)
case 5:s=f
J.cb(s,t)
x=6
return A.b(B.GD(u,s),$async$Vd)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vd,w)},
a77(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a77=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cbq.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ah5(u[s]),$async$a77)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a77,w)},
cbs(d,e,f){var x=0,w=A.j(y.H)
var $async$cbs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAK(d,e,f),$async$cbs)
case 2:return A.h(null,w)}})
return A.i($async$cbs,w)},
cbt(d,e,f){var x=0,w=A.j(y.H)
var $async$cbt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAL(d,e,f),$async$cbt)
case 2:return A.h(null,w)}})
return A.i($async$cbt,w)},
EK(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AR(d),$async$EK)
case 2:p=g
J.ny(p,new B.cbr(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gs.W(0,v)
$.agp.W(0,e)
x=3
return A.b(B.afQ(v),$async$EK)
case 3:u=g
$.ffx.W(0,v)
x=4
return A.b(A.az(),$async$EK)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$EK)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$EK)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ah5(s[q]),$async$EK)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ah5(v),$async$EK)
case 13:x=14
return A.b(B.GD(d,p),$async$EK)
case 14:return A.h(null,w)}})
return A.i($async$EK,w)},
b_l(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b_l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rz(d,e),$async$b_l)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fgr(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_l,w)},
AR(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AR)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fph(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AR,w)},
GD(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GD)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fto(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.X.ap(t,null)),$async$GD)
case 3:return A.h(null,w)}})
return A.i($async$GD,w)},
bAK(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AR(d),$async$bAK)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fnG(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEn(f))
x=4
return A.b(B.GD(d,u),$async$bAK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAK,w)},
bAL(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AR(d),$async$bAL)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fnH(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cK0(f))
x=4
return A.b(B.GD(d,u),$async$bAL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAL,w)},
ac0:function ac0(d){this.a=d},
fjY:function fjY(){},
fpe:function fpe(d,e){this.a=d
this.b=e},
fpf:function fpf(d){this.a=d},
fpg:function fpg(){},
cbr:function cbr(d){this.a=d},
bvP:function bvP(d,e,f,g,h,i,j,k,l){var _=this
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
fph:function fph(){},
fto:function fto(){},
fnG:function fnG(d){this.a=d},
fnH:function fnH(d){this.a=d},
a78(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a78=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b5(d,new B.cbw())?3:4
break
case 3:x=5
return A.b(B.b_n(d,e),$async$a78)
case 5:u=g
if(u!=null){t=u.c
B.ND(d,u.b,e,t)}v=u
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
return A.b(B.b_i(s),$async$a78)
case 10:case 9:if(g){v=new A.Qh(1,D.Sk,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vf(d,e),$async$a78)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vk(!0,!0,d,e),$async$a78)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.ND(d,D.zH,e,t)
v=new A.Qh(p,D.zH,t)
x=1
break}v=B.cbv(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a78,w)},
Vf(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7a(null,d,e),$async$Vf)
case 3:p=g
try{u=C.X.aN(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cq(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b_h(p,d.length,e),$async$Vf)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cbt(e,C.d.gI(d).a,r.b),$async$Vf)
case 7:case 6:q=r.a
x=8
return A.b(B.ND(d,D.Sk,e,q),$async$Vf)
case 8:v=new A.Qh(d.length,D.Sk,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vf,w)},
Vg(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mx(D.mN)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a79(d,e),$async$Vg)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cbo(s,d,e,t),$async$Vg)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b_i(t),$async$Vg)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rz(e,d),$async$Vg)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vf(A.a([d],y.r),e),$async$Vg)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vg,w)},
Vi(){var x=0,w=A.j(y.H)
var $async$Vi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fYg(),$async$Vi)
case 2:x=3
return A.b(B.aQP(),$async$Vi)
case 3:return A.h(null,w)}})
return A.i($async$Vi,w)},
a79(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a79=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b_k()
x=3
return A.b(B.cbs(e,d.a,u),$async$a79)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a79,w)},
ND(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$ND=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Sk&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b7(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a79(p,f),$async$ND)
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
return A.b(B.cbn(o,p,u,f),$async$ND)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cbo(o,p,f,t),$async$ND)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cbm(o,u,p,f),$async$ND)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ND,w)},
b_n(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b_n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cbu(e,d),$async$b_n)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vk(!1,!0,d,e),$async$b_n)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qh(u.a,D.zH,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_n,w)},
cbu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cbu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Ve(d,s,0,1),$async$cbu)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.M)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbu,w)},
cbv(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cbv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7a(null,d,e),$async$cbv)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hdI(u)
if(t.length>800){v=null
x=1
break}v=new A.Qh(d.length,D.dHN,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbv,w)},
apE(d,e,f){return B.hIb(d,e,f)},
hIb(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apE=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.ne(g,1)
x=B.fYl(g)?3:4
break
case 3:x=5
return A.b(B.cbp(g),$async$apE)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ne(g,13))
try{k=B.EL(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ne(g,13))
u=9
x=12
return A.b(B.b_g(q),$async$apE)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vh(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.fYk(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vh(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.IM(C.a.i(J.ne(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.IM(C.a.i(J.ne(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.aq(k,0,k.length-1)
else h=k
v=B.IM(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vh(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apE,w)},
IM(d,e,f){return B.hI9(d,e,f)},
hI9(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IM=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b7(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b7(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.aq(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cG(A.w(s)+"/manifest.json",0,null)
q=A.cG(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_8(r),$async$IM)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_8(A.cG(s,0,null)),$async$IM)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cq(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cb1(o,r,a1,n,a2),$async$IM)
case 11:m=a4
x=J.cq(m)?12:13
break
case 12:x=14
return A.b(B.cb0(q),$async$IM)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vh(l,a2),$async$IM)
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
return A.i($async$IM,w)},
a7a(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rz(f,r),$async$a7a)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aM(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a7().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.ap(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7a,w)},
Vh(d,e){return B.hIa(d,e)},
hIa(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vh=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aN(0,a2,null)
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
break}i=C.cF.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BT(i,a3,d,k,l,o),$async$Vh)
case 9:h=a5
if(h!=null)J.cb(n,h)
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
return A.i($async$Vh,w)},
NC:function NC(d,e){this.a=d
this.b=e},
cbw:function cbw(){},
a1m(d){var x=A.P(d).ax.a===C.I,w=x?D.ag6:D.adP,v=x?D.ahJ:C.c,u=x?C.aP:C.M,t=x?C.bL:C.al,s=x?D.af6:C.aL
return new A.aGF([w,s,v,u,t,x?C.fe:C.bP])},
htl(d,e){var x=e?C.w.j(0.72):C.aW
return A.cg(null,x,!0,null,new B.fPY(e),d,null,!0,!0,y.N)},
cbb(d,e,f,g,h,i,j,k,l){return new B.V9(e,l,d,f,k,j,g,h,i,null)},
Zk(d,e,f,g,h,i,j){return new B.bdX(g,h,j,e,i,d,f,null)},
fPY:function fPY(d){this.a=d},
Zh:function Zh(d,e){this.c=d
this.a=e},
azG:function azG(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d6Q:function d6Q(d){this.a=d},
d6O:function d6O(d){this.a=d},
d6P:function d6P(d){this.a=d},
bvs:function bvs(){},
V9:function V9(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDH:function aDH(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dTH:function dTH(d){this.a=d},
dT4:function dT4(d,e){this.a=d
this.b=e},
dT5:function dT5(d,e){this.a=d
this.b=e},
dSE:function dSE(d,e,f){this.a=d
this.b=e
this.c=f},
dSD:function dSD(d){this.a=d},
dSF:function dSF(d,e){this.a=d
this.b=e},
dSK:function dSK(d,e,f){this.a=d
this.b=e
this.c=f},
dSJ:function dSJ(d){this.a=d},
dTv:function dTv(d,e){this.a=d
this.b=e},
dTw:function dTw(d){this.a=d},
dT1:function dT1(d,e,f){this.a=d
this.b=e
this.c=f},
dSZ:function dSZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dSI:function dSI(d){this.a=d},
dT9:function dT9(d){this.a=d},
dT8:function dT8(){},
dSO:function dSO(d){this.a=d},
dTs:function dTs(d,e){this.a=d
this.b=e},
dTt:function dTt(d,e){this.a=d
this.b=e},
dTu:function dTu(d,e){this.a=d
this.b=e},
dT_:function dT_(d,e){this.a=d
this.b=e},
dT0:function dT0(d,e){this.a=d
this.b=e},
dTl:function dTl(d,e){this.a=d
this.b=e},
dTh:function dTh(d){this.a=d},
dTg:function dTg(d){this.a=d},
dTi:function dTi(){},
dTj:function dTj(){},
dTk:function dTk(d,e){this.a=d
this.b=e},
dTm:function dTm(){},
dTn:function dTn(d){this.a=d},
dTf:function dTf(d,e){this.a=d
this.b=e},
dTa:function dTa(d){this.a=d},
dTb:function dTb(d){this.a=d},
dTc:function dTc(d){this.a=d},
dTd:function dTd(d){this.a=d},
dTe:function dTe(d){this.a=d},
dSL:function dSL(){},
dSM:function dSM(d){this.a=d},
dSN:function dSN(d,e){this.a=d
this.b=e},
dSH:function dSH(d,e){this.a=d
this.b=e},
dSG:function dSG(d,e,f){this.a=d
this.b=e
this.c=f},
dT2:function dT2(d){this.a=d},
dT3:function dT3(d,e,f){this.a=d
this.b=e
this.c=f},
dSX:function dSX(d,e){this.a=d
this.b=e},
dST:function dST(d){this.a=d},
dSQ:function dSQ(d,e,f){this.a=d
this.b=e
this.c=f},
dSU:function dSU(d){this.a=d},
dSV:function dSV(d){this.a=d},
dSW:function dSW(){},
dSY:function dSY(d,e){this.a=d
this.b=e},
dSR:function dSR(d){this.a=d},
dSP:function dSP(d,e,f){this.a=d
this.b=e
this.c=f},
dSS:function dSS(){},
dT7:function dT7(d){this.a=d},
dT6:function dT6(d,e){this.a=d
this.b=e},
dTr:function dTr(d,e){this.a=d
this.b=e},
dTo:function dTo(d){this.a=d},
dTp:function dTp(d,e){this.a=d
this.b=e},
dTq:function dTq(d){this.a=d},
dTE:function dTE(d){this.a=d},
dTC:function dTC(d){this.a=d},
dTD:function dTD(d){this.a=d},
dTF:function dTF(){},
dTG:function dTG(d,e){this.a=d
this.b=e},
dTy:function dTy(d,e){this.a=d
this.b=e},
dTz:function dTz(d,e,f){this.a=d
this.b=e
this.c=f},
dTx:function dTx(d,e,f){this.a=d
this.b=e
this.c=f},
dTA:function dTA(d,e){this.a=d
this.b=e},
dTB:function dTB(d,e){this.a=d
this.b=e},
azD:function azD(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdW:function bdW(d,e,f){this.c=d
this.d=e
this.a=f},
d6M:function d6M(){},
d6N:function d6N(){},
ack:function ack(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d79:function d79(){},
d78:function d78(d){this.a=d},
Zj:function Zj(d,e,f){this.c=d
this.d=e
this.a=f},
azI:function azI(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d75:function d75(d){this.a=d},
d76:function d76(d,e,f){this.a=d
this.b=e
this.c=f},
d77:function d77(d,e){this.a=d
this.b=e},
d73:function d73(d,e){this.a=d
this.b=e},
d71:function d71(d){this.a=d},
d7_:function d7_(d){this.a=d},
d6X:function d6X(d){this.a=d},
d72:function d72(d){this.a=d},
d6Z:function d6Z(d){this.a=d},
d74:function d74(d){this.a=d},
d70:function d70(d){this.a=d},
d6Y:function d6Y(d){this.a=d},
Zg:function Zg(d,e,f){this.c=d
this.d=e
this.a=f},
azF:function azF(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d6J:function d6J(d){this.a=d},
d6I:function d6I(d,e){this.a=d
this.b=e},
d6K:function d6K(d){this.a=d},
d6H:function d6H(d,e){this.a=d
this.b=e},
d6L:function d6L(d){this.a=d},
d6G:function d6G(d,e){this.a=d
this.b=e},
d6C:function d6C(d){this.a=d},
d6D:function d6D(d){this.a=d},
d6E:function d6E(d,e){this.a=d
this.b=e},
d6F:function d6F(d){this.a=d},
PR:function PR(d,e,f){this.c=d
this.d=e
this.a=f},
azL:function azL(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d7m:function d7m(d){this.a=d},
d7n:function d7n(d){this.a=d},
d7o:function d7o(d){this.a=d},
d7p:function d7p(d){this.a=d},
d7q:function d7q(d,e){this.a=d
this.b=e},
d7r:function d7r(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7s:function d7s(d){this.a=d},
Zl:function Zl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azJ:function azJ(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d7i:function d7i(d,e){this.a=d
this.b=e},
d7j:function d7j(d,e){this.a=d
this.b=e},
d7a:function d7a(d,e,f){this.a=d
this.b=e
this.c=f},
d7b:function d7b(d){this.a=d},
d7c:function d7c(){},
d7h:function d7h(){},
d7d:function d7d(d,e){this.a=d
this.b=e},
d7e:function d7e(d,e){this.a=d
this.b=e},
d7f:function d7f(d,e){this.a=d
this.b=e},
d7g:function d7g(d,e){this.a=d
this.b=e},
aci:function aci(d,e){this.c=d
this.a=e},
d6B:function d6B(d){this.a=d},
Zf:function Zf(d){this.a=d},
azE:function azE(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Zm:function Zm(d,e){this.c=d
this.a=e},
azK:function azK(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d7l:function d7l(d){this.a=d},
d7k:function d7k(d){this.a=d},
bdX:function bdX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hIc(){var x,w=$.pC(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"VT"+C.d.hx(v)},
NE(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$NE)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NE)
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
return A.i($async$NE,w)},
a7b(d){return B.hId(d)},
hId(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7b)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7b)
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
return A.i($async$a7b,w)},
Vj(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NE(),$async$Vj)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,d,t)
x=4
return A.b(B.a7b(s),$async$Vj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vj,w)},
Vk(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c7(),$async$Vk)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.T(f).k("Z<1>")
u=A.C(new A.Z(f,new B.cby(),t),t.k("K.E"))}if(u.length===0){v=null
x=1
break}s=B.hIc()
t=A.T(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.cbz(s),t),t.k("ak.E"))
x=6
return A.b(B.NE(),$async$Vk)
case 6:q=i
J.aH(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=7
return A.b(B.a7b(q),$async$Vk)
case 7:x=8
return A.b(B.a7c(r,u,g,s),$async$Vk)
case 8:v=new A.bpt(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vk,w)},
apF(d){var x=0,w=A.j(y.y),v,u,t
var $async$apF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NE(),$async$apF)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apF,w)},
cbA(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cbA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NE(),$async$cbA)
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
return A.i($async$cbA,w)},
a7c(d,e,f,g){return B.hIe(d,e,f,g)},
hIe(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7c=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apD("media",r,new B.cbx(s,e,g),f,q),$async$a7c)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vj(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7c)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vj(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$a7c)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vj(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7c)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7c,w)},
EL(d,e,f){return B.hIf(d,e,f)},
hIf(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EL=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$EL)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apF(b3),$async$EL)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iS,null,g),$async$EL)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apF(b3),$async$EL)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NE(),$async$EL)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cq(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
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
a8=$.f_().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p3(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaA(a8.a,b0,"media",a8.d,a9).CN(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b_9(k,n,o,s,b7),$async$EL)
case 17:j=c0
if(j!=null){J.cb(p,j);++q
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
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
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
a8=A.p3(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaA(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EL)
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
a0=A.dQ(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7b(e),$async$EL)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EL,w)},
cby:function cby(){},
cbz:function cbz(d){this.a=d},
cbx:function cbx(d,e,f){this.a=d
this.b=e
this.c=f},
aQP(){var x=0,w=A.j(y.H),v,u
var $async$aQP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hTa=null
v=y.H
u=A.dU(null,v)
x=2
return A.b(u,$async$aQP)
case 2:u=A.dU(null,v)
x=3
return A.b(u,$async$aQP)
case 3:u=$.h2A
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dU(u,v),$async$aQP)
case 4:$.h2A=$.i0T=$.i0U=null
return A.h(null,w)}})
return A.i($async$aQP,w)},
ft_(d){var x=0,w=A.j(y.H),v,u
var $async$ft_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a7y){x=1
break}u=new A.bh($.bB,y.d4)
d.c=new B.ft0(new A.bY(u,y.aY))
x=3
return A.b(u.iu(0,C.hW,new B.ft1()),$async$ft_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ft_,w)},
i0R(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hHX(x):x},
h2E(d){var x=0,w=A.j(y.T),v,u,t
var $async$h2E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,13))
if(C.a.a0(u,"WR")){v=B.apH(u)
x=1
break}v=B.fYk(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2E,w)},
h2D(d){var x=0,w=A.j(y.T),v,u,t
var $async$h2D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,14))
if(C.a.a0(u,"WR")){v=B.apI(u)
x=1
break}v=B.fYk(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2D,w)},
fLz(d){var x=0,w=A.j(y.T),v
var $async$fLz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apI(d),$async$fLz)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLz,w)},
bBC(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bBC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h2D(d),$async$bBC)
case 3:q=f
if(q==null){x=1
break}t=C.X.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBC,w)},
fhf(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fhf=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vd(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BT(d.aoA(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhf,w)},
GF(d,e,f){return B.i3j(d,e,f)},
i3j(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GF=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h2E(a1),$async$GF)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aN(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b7(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hve().aEC(D.dw7,null),$async$GF)
case 4:l=d.h2A=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayr(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bh($.bB,y.b1)
l.y=new B.ftx(f,k,new B.fty(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7X(0,new B.Xm(r,"offer")),$async$GF)
case 5:d=l
x=7
return A.b(l.alg(0),$async$GF)
case 7:x=6
return A.b(d.a7P(0,a4),$async$GF)
case 6:x=8
return A.b(B.ft_(l),$async$GF)
case 8:x=9
return A.b(l.apl(),$async$GF)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i0R(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.ap(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apJ(m,h),$async$GF)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hdI(h)
case 11:v=new A.boL(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GF,w)},
ft0:function ft0(d){this.a=d},
ft1:function ft1(){},
fty:function fty(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftx:function ftx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ftw:function ftw(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i5d(d){switch(d){case"new":return D.eq9
case"checking":return D.eqa
case"connected":return D.eqc
case"completed":return D.eqb
case"failed":return D.eqe
case"disconnected":return D.eqf
case"closed":return D.aO_
case"count":return D.eqd}return D.aO_},
i5e(d){switch(d){case"new":return D.aO0
case"gathering":return D.eqg
case"complete":return D.a7y}return D.aO0},
ifB(d){switch(d){case"stable":return D.eqh
case"have-local-offer":return D.eqi
case"have-local-pranswer":return D.eqk
case"have-remote-offer":return D.eqj
case"have-remote-pranswer":return D.eql
case"closed":return D.aO6}return D.aO6},
idP(d){switch(d){case"new":return D.aO3
case"connecting":return D.aO4
case"connected":return D.aO5
case"closed":return D.a7z
case"disconnected":return D.aO2
case"failed":return D.aO1}return D.a7z},
a9x:function a9x(d,e){this.a=d
this.b=e},
OG:function OG(d,e){this.a=d
this.b=e},
Xl:function Xl(d,e){this.a=d
this.b=e},
OF:function OF(d,e){this.a=d
this.b=e},
Fe:function Fe(d,e){this.a=d
this.b=e},
cna:function cna(){},
h_5(d){var x=new B.Fd()
x.a=d
x.b=!0
return x},
Fd:function Fd(){this.b=this.a=$},
a9w:function a9w(){},
au_:function au_(){},
Xm:function Xm(d,e){this.a=d
this.b=e},
fYg(){var x=0,w=A.j(y.H)
var $async$fYg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fYg,w)},
fYj(d,e,f){var x=0,w=A.j(y.T),v
var $async$fYj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mx(D.mN))){v=null
x=1
break}v=B.fLP(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYj,w)},
hdI(d){var x,w=F.adf.a4J(C.dK.aM(d),null)
if(w.length===0){x=C.dK.aM(d)
return C.cJ.gct().aM(x)}return C.cJ.gct().aM(w)},
hHW(d){var x,w,v=C.cF.aM(d)
try{x=C.cg.cA(0,F.ade.bdp(v,!1))
return x}catch(w){x=C.cg.cA(0,v)
return x}},
fYk(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hHW(C.a.b7(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b7(t,w.length)
try{v=C.cg.cA(0,C.cF.aM(x))
return v}catch(u){return x}}return null},
hHX(d){var x,w,v,u,t,s=A.a([],y.s)
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
hHY(){var x,w=$.pC(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"DS"+C.d.hx(v)},
b_f(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_f)
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
return A.i($async$b_f,w)},
cbg(d,e){return B.hHZ(d,e)},
hHZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cbg=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$cbg)
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
return A.i($async$cbg,w)},
b_i(d){var x=0,w=A.j(y.y),v,u,t
var $async$b_i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_f(d),$async$b_i)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_i,w)},
b_h(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b_h=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hHY()
r=C.a.i(f)
t=C.dK.aM(s)
x=3
return A.b(B.cbg(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$b_h)
case 3:if(!h){v=null
x=1
break}v=new A.a0n("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_h,w)},
b_g(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b_g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_f(o),$async$b_g)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cA(0,C.cF.aM(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b_g,w)},
cbh(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cbh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bCy("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$cbh)
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
return A.i($async$cbh,w)},
b_j(d){var x=0,w=A.j(y.h),v,u,t
var $async$b_j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.II(),$async$b_j)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_j,w)},
apA(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apA)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b_j(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apA,w)},
apy(d,e){var x=0,w=A.j(y.H)
var $async$apy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apy)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apy)
case 2:return A.h(null,w)}})
return A.i($async$apy,w)},
a73(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a73=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a73)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.II(),$async$a73)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=5
return A.b(A.a72(s),$async$a73)
case 5:x=6
return A.b(B.apy(f,u),$async$a73)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a73,w)},
a74(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a74=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a74)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.II(),$async$a74)
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
if(o!==t&&s.aj(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.apy(g,q),$async$a74)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a72(u),$async$a74)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a74,w)},
a75(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a75=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a75)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.II(),$async$a75)
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
s=B.b_c(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a75)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.X.ap(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a7().ae()],p,p),null)),$async$a75)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a75,w)},
cbi(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cbi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cbi)
case 7:s=f
p=A.w(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aN(0,r,null)
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
return A.i($async$cbi,w)},
IJ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cbi(d),$async$IJ)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b_j(t),$async$IJ)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apz(d),$async$IJ)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.b_c(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apz(d),$async$IJ)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IJ,w)},
apz(d){var x=0,w=A.j(y.H)
var $async$apz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apz)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apz)
case 2:return A.h(null,w)}})
return A.i($async$apz,w)},
b_k(){var x,w=$.pC(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(32)]
return C.d.hx(v)},
a76(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fYl(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cbl(d){return B.hI0(d)},
hI0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cbl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a76(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cbl)
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
return A.i($async$cbl,w)},
apC(d,e){return B.hI1(d,e)},
hI1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a76(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apC)
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
return A.i($async$apC,w)},
cbn(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cbn=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a76(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apC(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$cbn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cbn,w)},
cbm(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cbm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a76(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apC(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$cbm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cbm,w)},
cbo(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cbo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a76(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apC(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbo,w)},
cbp(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cbp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fYl(d)){v=null
x=1
break}x=3
return A.b(B.cbl(d),$async$cbp)
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
return A.i($async$cbp,w)},
a7d(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7d=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$a7d)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7d)
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
return A.i($async$a7d,w)},
apG(d){return B.hIg(d)},
hIg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c7(),$async$apG)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$apG)
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
return A.i($async$apG,w)},
apH(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c7(),$async$apH)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7d(),$async$apH)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cA(0,C.cF.aM(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aH(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a7().ae())
J.aH(s,j,o)
x=9
return A.b(B.apG(s),$async$apH)
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
return A.i($async$apH,w)},
apJ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c7(),$async$apJ)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7d(),$async$apJ)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aM(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a7().ae())
t.n(u,p,q)
x=5
return A.b(B.apG(u),$async$apJ)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apJ,w)},
apI(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c7(),$async$apI)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7d(),$async$apI)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cA(0,C.cF.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apI,w)},
aoD(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.q4)){v=null
x=1
break}x=3
return A.b(p.m4(e),$async$aoD)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.h8),$async$aoD)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.vA(o))
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
return A.i($async$aoD,w)},
ibN(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.u(w),5,"0")
return v},
fJU(d){return B.ibP(d)},
ibP(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fJU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.io("media").L0(d,3600),$async$fJU)
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
return A.i($async$fJU,w)},
Db(d,e,f,g,h,i){var x=null
return B.ibM(d,e,f,g,h,i)},
ibM(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Db=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hdL(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fYn(r),$async$Db)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fJU(o),$async$Db)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a77(r),$async$Db)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aRj)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M_(A.a([],g))
x=15
return A.b(d.f3(0,A.auQ("GET",A.cG(n,0,null))).da(0,C.FR),$async$Db)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a77(r),$async$Db)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KB(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Db)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b_m(r,k),$async$Db)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Db)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.Vd(r)
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
return A.b(B.a77(r),$async$Db)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Db,w)},
aQv(d){return B.ibO(d)},
ibO(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.io("media").W(0,d),$async$aQv)
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
return A.i($async$aQv,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[152]
O=c[43]
F=c[249]
I=c[141]
P=c[227]
E=c[220]
G=c[93]
Q=c[191]
R=c[142]
S=c[225]
K=c[253]
L=c[258]
B=a.updateHolder(c[22],B)
D=c[256]
T=c[190]
M=c[210]
U=c[70]
V=c[243]
W=c[76]
X=c[59]
N=c[92]
Y=c[257]
B.cnb.prototype={
aEC(d,e){return this.cLx(d,e)},
cLx(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aEC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kp(A.cz(t)))
t=J.k(u)
v=B.hMR(C.cJ.gct().aM(new A.d6(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aEC,w)}}
B.b4u.prototype={
bzd(d){var x=this,w=x.w
w.onclose=A.hs(new B.cn6(x))
w.onopen=A.hs(new B.cn7(x))
w.onmessage=A.hs(new B.cn8(x))
w.onbufferedamountlow=A.hs(new B.cn9(x))},
gdc(d){return this.x},
ahA(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fd()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h_5(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$ahA)
case 8:v=t.h_5(s.anP(f,0,null))
x=1
break
case 7:case 4:v=B.h_5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahA,w)}}
B.b4v.prototype={
bze(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hs(new B.cnc(x)))
w.addEventListener("icecandidate",A.hs(new B.cnd(x)))
w.addEventListener("iceconnectionstatechange",A.hs(new B.cne(x)))
w.onicegatheringstatechange=A.hs(new B.cnf(x))
w.addEventListener("signalingstatechange",A.hs(new B.cng(x)))
if(!$.h6l())w.addEventListener("connectionstatechange",A.hs(new B.cnh(x)))
w.addEventListener("negotiationneeded",A.hs(new B.cni(x)))
w.addEventListener("track",A.hs(new B.cnj(x)))},
alg(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kp(A.cz(A.U(y.N,y.z)))),y.aQ),$async$alg)
case 3:t=f
v=new B.Xm(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alg,w)},
a7P(d,e){return this.bou(0,e)},
bou(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7P)
case 2:return A.h(null,w)}})
return A.i($async$a7P,w)},
a7X(d,e){return this.boN(0,e)},
boN(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7X)
case 2:return A.h(null,w)}})
return A.i($async$a7X,w)},
apl(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xm(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apl,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.acj.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.Zi.prototype={
U(){return new B.azH()},
gcZ(){return this.c}}
B.azH.prototype={
a_(){this.a2()
this.aek()},
aek(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aek=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_d(u.e,u.c),$async$aek)
case 2:t=e
if(v.c!=null)v.m(new B.d6U(v,t))
return A.h(null,w)}})
return A.i($async$aek,w)},
Qu(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apv(t.e,t.c,!1),$async$Qu)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.f98)
x=1
break}x=4
return A.b(B.a71(u.a.c,"individual"),$async$Qu)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6j(A.e_(new B.d6R(u),!1,null,y.H)),$async$Qu)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qu,w)},
Jn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fqZ(o),$async$Jn)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a75(o.e,r,s,q),$async$Jn)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.f69)
x=1
break}x=5
return A.b(B.a71(u.a.c,"member"),$async$Jn)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6j(A.e_(new B.d6T(u),!1,null,y.H)),$async$Jn)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jn,w)},
y7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$y7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a70(t.e,o,t.f,t.r,t.w,s),$async$y7)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a71(u.a.c,"org_owner"),$async$y7)
case 4:x=5
return A.b(B.apA(u.a.c),$async$y7)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.frt(o),$async$y7)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a73(s,t,o,q.c),$async$y7)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.f66)
x=1
break}x=10
return A.b(B.apA(u.a.c),$async$y7)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6j(A.e_(new B.d6S(u),!1,null,y.H)),$async$y7)
case 11:case 1:return A.h(v,w)}})
return A.i($async$y7,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jr:C.pX,q=B.fYi(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.fY,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fsC,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fM4,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c3E,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lN(new B.d6W(),t),C.O,w,C.dX,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ad)
if(!u.a.x)C.d.v(p,A.a([new B.acL(C.eX,C.aAC,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcf5(),t),C.ad],v))
p.push(new B.acL(C.p7,C.a3p,"Team Member","Sign in with your organization access code + password",u.gcfX(),t))
p.push(C.ad)
p.push(new B.acL(C.an4,C.a4W,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcfs(),t))
return A.c6(t,r,A.bn(!0,A.cd(A.x(p,C.aj,t,C.e,C.j,0,C.p),C.t,t,C.y,t,F.akm,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acL.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aM(!1,r,!0,A.eJ(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a4,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oC,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.yD,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ai)}}
B.aCj.prototype={}
B.aFp.prototype={}
B.jq.prototype={
mx(d){var x=this.b,w=C.a.oL(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b7(x,w+1).toLowerCase())},
gaq1(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
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
bcS(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jq(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cK0(d){return this.bcS(null,d)},
aEn(d){return this.bcS(d,null)}}
B.V7.prototype={
U(){return new B.aDF(new A.cA(null,y.A))},
gcZ(){return this.c}}
B.aDF.prototype={
a_(){this.a2()
this.ael()},
ael(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ael=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BS(u.a.c),$async$ael)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dSA(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ael,w)},
aem(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aem=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fB(s)),$async$aem)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fa2)
case 1:return A.h(v,w)}})
return A.i($async$aem,w)},
ZY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ZY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoD(s.d,4),$async$ZY)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t5(r,"ngmy_my_code_"+m+".png"),$async$ZY)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZY,w)},
ai1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ai1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aa9("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ai1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ai1,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jr:C.pX,m=o?C.c:C.M,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.mq
else if(q.e==null)x=A.at(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.J(C.aC.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a3R,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a4,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.ajW,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aC.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mW,w,C.kO,new A.ex(A.p(p,A.pW(p,p,!1,B.hHS(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ad,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kO,A.B(A.a([A.E(A.et(N.Cr,C.US,q.gc85(),p),1),C.as,A.E(A.dj(C.z2,C.a9L,q.gc86(),A.bp(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.W,new A.a7(1/0,p,A.et(M.a2a,D.fHL,q.gcuJ(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.Nl,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.Vb.prototype={
U(){return new B.aDI(new A.as(C.at,$.ax()),A.k1(!0,null,!0,!0,null,null,!1))}}
B.aDI.prototype={
a_(){var x,w
this.a2()
x=this.a.e
w=B.IH(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.S$=$.ax()
x.P$=0
this.e.q()
this.a3()},
ZZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IH(u.d.a.a)
if(t==null){u.m(new B.dTJ(u))
x=1
break}u.m(new B.dTK(u))
s=u.a
r=s.c
x=3
return A.b(B.a7_(s.d,new B.dTL(u),t,r),$async$ZZ)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dTM(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$ZZ,w)},
a2a(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2a=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cq(r.a.d)){x=1
break}r.m(new B.dTN(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rz(r.a.c,q),$async$a2a)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dTO(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahQ(p,m,l,j,k),$async$a2a)
case 8:o=e
if(r.c!=null)r.m(new B.dTP(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dTQ(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dTR(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2a,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.ag6:D.adP,h=j?D.ahJ:C.c,g=j?C.aP:C.M,f=j?C.bL:C.al,e=j?D.af6:C.aL
i=[i,e,h,g,f,j?C.fe:C.bP]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c0(C.A,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bS8,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.az,C.aE,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fr,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a3R,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uw(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bjj()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bu(k,k,k,C.Ng,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dTS(l),k,!1,k,k,!1,k,!0,k,C.ab,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.mh,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.J(i[1],C.r,1)
m=J.LD(l.a.d,4)
m=A.C(new A.N(m,new B.dTT(x,new A.aGF(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l0,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.d8,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.m(14)
s=A.J(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f4F)
else q.push(A.X(C.lD,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aM,A.dd(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.iQ,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.aj,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bAk,k,k,C.ah),1)
u=l.f?k:l.gcuK()
t=i[3]
s=i[1]
q=A.m(16)
s=A.et(M.a2a,D.fIP,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cj,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc87()
t=A.bp(C.aC,k,k,0,C.c,k,C.nm,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c6(g,h,new A.an(C.a_,k,C.aa,C.t,A.a([f,v,A.bn(!0,A.lr(new B.dTU(),A.x(A.a([e,new A.D(D.bzP,A.x(A.a([s,C.O,i,C.ad,A.bI(l.f?C.t2:D.fH6,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.Zw,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bjj.prototype={
oH(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hk(C.bw,v.length),C.aO)}}
B.V8.prototype={
U(){return new B.aDG()}}
B.aDG.prototype={
a_(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b4,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b4,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.at,v)},
q(){var x,w=this,v=w.d
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
w.a3()},
aen(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aen=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dSB(r))
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
return A.b(B.a74(p,m,n,o,C.a.i(l).length===0?null:l),$async$aen)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.f9E)
s=[1]
x=4
break}p.K(y.q).f.T(D.f8h)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dSC(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aen,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jr:C.pX,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fzE,s,s,s,1,s,!0),p=A.p(s,D.bs4,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Hj,C.n),s,s,s,s,C.ab,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.bZ9,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.bZ4,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.bZk,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
v=t.r?s:t.gc88()
u=A.bp(C.aC,s,s,s,s,C.fZ,s,s,s,s,s,s)
return A.c6(q,r,A.cd(A.x(A.a([p,C.d8,o,C.ad,x,C.ad,w,C.mW,A.bI(t.r?C.t2:C.aU8,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ab,s,s,C.ah),s,!1,!1,s,s)}}
B.ac0.prototype={}
B.bvP.prototype={
a4Z(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ci(r.aoA()))
x=3
return A.b(B.Rp(t,s),$async$a4Z)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4Z,w)},
gcZ(){return this.a}}
B.NC.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Zh.prototype={
U(){return new B.azG(new A.as(C.at,$.ax()),A.k1(!0,null,!0,!0,null,null,!1))}}
B.azG.prototype={
a_(){this.a2()
$.aW.x1$.push(new B.d6Q(this))},
q(){var x=this.d
x.S$=$.ax()
x.P$=0
this.e.q()
this.a3()},
c8e(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1m(d),u=x.a.c,t=u?C.is:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jr:v.a[0],p=A.m(24),o=A.J(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aC.j(u?0.25:0.12),C.fY,32)],n),l=A.p(w,T.apH,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aC.j(0.4),C.cv,16)],n),C.aqt,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uw(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bvs()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bu(w,w,w,C.G1,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b1m),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d6O(x),w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.mh,w,w,w,w)
f=f[1]
f=A.E(A.dS(C.nH,new B.d6P(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cj,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.cH,12)],n)
g=y.p
return A.eR(w,C.K,new A.cT(Q.L3,A.c1(new A.D(C.yg,A.x(A.a([l,C.aM,k,C.O,j,C.dX,i,C.dX,A.B(A.a([f,C.as,A.E(A.c1(A.aG(!1,C.a1,!0,w,A.aM(!1,A.m(14),!0,D.ek1,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc8d(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,L.P3,C.n),C.bg),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bg),w),w,w,w,C.No,C.d7,w,w,w)}}
B.bvs.prototype={
oH(d,e){return e.alb(e.a.toUpperCase())}}
B.V9.prototype={
U(){return new B.aDH(A.a([],y.r),A.aY(y.N))},
gcZ(){return this.c}}
B.aDH.prototype={
a_(){var x=this
x.a2()
x.tW()
x.w=A.dk(C.jw,new B.dTH(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vi()
this.a3()},
a11(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a11=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NB(u.a.c),$async$a11)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AR(u.a.c),$async$a11)
case 4:u.m(new s.dT4(u,e))
u.i7("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a11,w)},
tW(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NB(u.a.c),$async$tW)
case 3:t=e
x=4
return A.b(B.AR(u.a.c),$async$tW)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dT5(u,s))
if(t>0)u.i7("Received "+A.w(t)+" file(s) via My Code.")
u.NO(u.d)
B.BS(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tW,w)},
NO(d){return this.bDc(d)},
bDc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a79(r,u.a.c),$async$NO)
case 8:p=f
if(u.c==null){x=1
break}new B.dSE(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mx(D.mN))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vg(r,u.a.c),$async$NO)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AR(u.a.c),$async$NO)
case 12:u.m(new o.dSF(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NO,w)},
Ob(d){return this.bJs(d)},
bJs(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ob=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a79(d,u.a.c),$async$Ob)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dSK(u,d,t))
x=6
return A.b(A.fG(new A.fB(t)),$async$Ob)
case 6:u.i7("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fB(r.toUpperCase())),$async$Ob)
case 7:u.i7("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ob,w)},
i7(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
tX(d,e){return this.cFm(d,e)},
cFm(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tX=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dTv(r,e))
u=3
x=6
return A.b(d.$0(),$async$tX)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dTw(r))
$.eW.ms()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tX,w)},
gaVI(){var x=this.a
return x.f||x.r||x.w},
Ii(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ii=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaVI()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cbe(s,n,r,q,o,t),$async$Ii)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i7("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fDk(o,u.a.c),$async$Ii)
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
return A.b(B.Dd(s,o,r,q,n,t),$async$Ii)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ii,w)},
a05(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a05=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apA(u.a.c),$async$a05)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i7("No organization portal found.")
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
return A.b(A.a4(t,!1).cg(A.e_(new B.dT1(u,r,q),!1,null,y.H)),$async$a05)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a05,w)},
a1b(d){return this.coh(d)},
cog(){return this.a1b(1)},
coh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaVI()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apx(u.a.c),$async$a1b)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1b,w)},
acg(d,e,f){return this.c_g(d,e,f)},
c_g(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7(e)
x=1
break}x=3
return A.b(u.tX(new B.dSZ(u,d,null,e,f),"Uploading\u2026"),$async$acg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acg,w)},
bDk(){B.hsv(!1,new B.dSI(this))
return},
cti(){this.m(new B.dT9(this))},
ayT(){var x=0,w=A.j(y.H),v=this
var $async$ayT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bDk()
return A.h(null,w)}})
return A.i($async$ayT,w)},
acc(){var x=0,w=A.j(y.H),v=this
var $async$acc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tX(new B.dSO(v),"Importing\u2026"),$async$acc)
case 2:return A.h(null,w)}})
return A.i($async$acc,w)},
Sx(d){return this.cEJ(d)},
cEJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mx(D.mN)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cg(A.e_(new B.dTs(u,d),!1,null,y.H)),$async$Sx)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mx(D.R_)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cg(A.e_(new B.dTt(u,d),!1,null,y.H)),$async$Sx)
case 8:x=1
break
case 7:x=u.c_X(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cg(A.e_(new B.dTu(u,d),!1,null,y.H)),$async$Sx)
case 11:x=1
break
case 10:u.i7("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sx,w)},
c_X(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oL(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cMB,C.a.b7(x,w+1).toLowerCase())},
afO(d){return this.cf9(d)},
cf9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mx(D.mN)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cg(A.e_(new B.dT_(u,d),!1,null,y.H)),$async$afO)
case 5:x=1
break
case 4:u.m(new B.dT0(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afO,w)},
RT(d){return this.cwd(d)},
cwd(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pe(t,s.c,s.f),$async$RT)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tX(new B.dTl(u,d),"Preparing QR\u2026"),$async$RT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RT,w)},
ais(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ais=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dTm(),A.T(t).k("N<1,n>")).fH(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dTn(q),s),s.k("K.E"))
if(r.length===0){u.i7("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RT(r),$async$ais)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ais,w)},
aik(d){return this.cvL(d)},
cvL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aik=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1m(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dTf(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aik)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sx(d)
break
case"qr":u.RT(A.a([d],y.r))
break
case"send_my_code":u.cfM(A.a([d],y.r))
break
case"save":u.ahH(d)
break
case"delete":u.J7(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aik,w)},
XQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dSL(),A.T(t).k("N<1,n>")).fH(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dSM(q),s),s.k("K.E"))
if(r.length===0){u.i7("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pe(t,s.c,s.f),$async$XQ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tX(new B.dSN(u,r),"Preparing file\u2026"),$async$XQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XQ,w)},
agT(d){return this.cmD(d)},
cmD(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.htl(d,!1),$async$agT)
case 3:s=f
r=s==null
q=B.a76(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i7("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agT,w)},
afU(){var x=0,w=A.j(y.H),v=this,u
var $async$afU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fL_(u,v.a.c),$async$afU)
case 2:return A.h(null,w)}})
return A.i($async$afU,w)},
bDj(){B.hsv(!1,new B.dSH(this,null))
return},
Jm(d,e){return this.cfN(d,e)},
b0Q(d){return this.Jm(null,d)},
cfM(d){return this.Jm(d,null)},
cfN(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dT2(s),o),o.k("K.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xn.c9().anS(!0,C.a0i,!1),$async$Jm)
case 10:r=g
if(r==null||J.cq(r.a)){x=1
break}x=11
return A.b(s.tX(new B.dT3(l,s,r),"Preparing\u2026"),$async$Jm)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.i7("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i7("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bDI(p,l,e,s.a.c),$async$Jm)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jm,w)},
Iy(d){return this.c_3(d)},
c_3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Iy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hHR(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0Q(t),$async$Iy)
case 8:x=6
break
case 7:u.i7("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i7("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tX(new B.dSX(u,d),"Receiving video\u2026"),$async$Iy)
case 11:x=1
break
case 10:x=12
return A.b(u.tX(new B.dSY(u,d),"Receiving\u2026"),$async$Iy)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Iy,w)},
En(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$En=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.D7()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agT(t),$async$En)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Iy(s),$async$En)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cg(A.e_(new B.dT7(u),!1,null,y.N)),$async$En)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tW(),$async$En)
case 10:x=1
break
case 9:x=11
return A.b(u.Iy(C.a.i(r)),$async$En)
case 11:case 1:return A.h(v,w)}})
return A.i($async$En,w)},
ahH(d){return this.crR(d)},
crR(d){var x=0,w=A.j(y.H),v=this
var $async$ahH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tX(new B.dT6(v,d),"Saving\u2026"),$async$ahH)
case 2:return A.h(null,w)}})
return A.i($async$ahH,w)},
J7(d){return this.bLN(d)},
bLN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$J7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lb(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$J7)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cbh(t),$async$J7)
case 6:case 5:s=d.a
x=7
return A.b(B.EK(u.a.c,s),$async$J7)
case 7:u.r.W(0,s)
x=8
return A.b(u.tW(),$async$J7)
case 8:case 1:return A.h(v,w)}})
return A.i($async$J7,w)},
aiy(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1m(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dTr(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiy)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afU()
break
case"import":u.acc()
break}case 1:return A.h(v,w)}})
return A.i($async$aiy,w)},
c8b(d){var x=d.c
if(C.a.a0(x,"video/")||d.mx(D.mN))return C.qo
if(C.a.a0(x,"image/")||d.mx(D.R_))return C.uk
if(C.a.t(x,"pdf"))return E.Oz
return D.anx},
B(d){var x,w,v=this,u=null,t=B.a1m(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.Hb,u,u,u,new B.dTC(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.bSG,u,u,u,v.e?u:v.gcft(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcth()
n.push(A.aJ(u,u,u,u,A.X(v.r.a===x?D.bMW:E.anW,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a27,u,u,u,v.e?u:v.gc8c(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.ok,u,u,u,v.e?u:v.gb1W(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.bUp,u,u,u,v.e?u:new B.dTD(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lN(new B.dTE(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c0(C.A,0.5,C.x,u,0,A.a([C.aC.j(A.P(d).ax.a===C.I?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lk(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.azD(C.jA,s,!0,t,w?u:v.gcwe(),u),1)
x.push(new A.D(D.byz,A.lr(new B.dTF(),A.B(A.a([s,C.as,A.E(new B.azD(C.ul,"Export",!1,t,w?u:v.gbPy(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iR,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdW(t,v.e?u:v.gb1W(),u)
else s=A.kh(!0,u,u,new B.dTG(v,t),s,u,D.byr,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.a_,u,C.aa,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.azD.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aC,t,t,0,C.c,t,C.vS,t,new A.b7(s,C.a0),t,t,t)
return A.dj(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vS,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f0,t,t,t),u.r,v)}}
B.bdW.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lr(new B.d6M(),new A.D(E.a_n,A.x(A.a([A.lr(new B.d6N(),A.p(x,A.X(C.yF,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.az,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eq,C.hq,x,x,new A.bo(0.86,1,w),s),C.dX,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dX,A.dj(C.ok,D.fMo,this.d,A.bp(C.aC,x,x,x,C.c,x,C.Nm,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.Bu,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.ack.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mx(D.mN))p=D.dlk
else{p=C.a.a0(p,"image/")||i.mx(D.R_)
n=y.O
p=p?A.a([C.cO,C.aC],n):A.a([C.aK.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.az,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaq1()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mx(D.mN))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.av,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.X(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cd))
if(!(!o||i.mx(D.mN)))l.push(A.fW_(C.aC,!1,j,j,j,!1,j,j,new B.d78(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.od,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cd))
return A.lr(new B.d79(),new A.D(C.ea,A.aG(!1,C.a1,!0,j,A.aM(!1,r,!0,new A.D(C.ZR,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.ct,h,new A.cs("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.Zj.prototype={
U(){return new B.azI()},
gcZ(){return this.c}}
B.azI.prototype={
a_(){this.a2()
this.xW()},
q(){B.hI5(this.e)
this.a3()},
xW(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xW=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rz(o.c,o.d),$async$xW)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hI8(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hI7(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d75(s))
x=1
break}s.m(new B.d76(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d77(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xW,w)},
a29(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a29=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rz(t.c,t.d),$async$a29)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.f6G)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahQ(q,s,t.length===0?"image/jpeg":t,null,s),$async$a29)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a29,w)},
bZX(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ku(u,C.A,v,new B.d73(w,t),C.h6,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fP(t,C.A,v,new B.d74(w),C.h6,C.dz,!0,v,!1,v,v)
else return C.bJ
return A.uF(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1m(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.Cs,u,u,u,v.gb5H(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.EJ
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aM,A.dj(C.Cs,D.fv_,v.gb5H(),A.bp(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bZX()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.Zg.prototype={
U(){return new B.azF(A.aiE(),C.bD,C.bD)},
gcZ(){return this.c}}
B.azF.prototype={
a_(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fw(w,A.a6(w).k("fw<1>")).iq(new B.d6J(v))
x.gcSY().iq(new B.d6K(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a6(x).k("fw<1>"))}if(x==null)x=C.b7x
x.iq(new B.d6L(v))
v.xW()},
xW(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xW=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rz(p.c,p.d),$async$xW)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d6C(s))
x=1
break}x=8
return A.b(s.d.Cf(0,new A.a3p(r,s.a.d.c)),$async$xW)
case 8:if(s.c==null){x=1
break}s.m(new B.d6D(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d6E(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xW,w)},
a__(){var x=0,w=A.j(y.H),v=this,u
var $async$a__=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h7(0),$async$a__)
case 5:x=3
break
case 4:x=6
return A.b(u.it(0),$async$a__)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a__,w)},
aTx(d){var x=d.a
return C.a.aZ(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1m(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.EJ
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bNW,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.P3,C.n),o,88,o,o,o,o,o,88)
t=A.l5(C.aC,o,o,m,0,new B.d6F(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aTx(p.w)+" / "+p.aTx(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aC,o,o,o,o,D.f37,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yO:C.ij,o,o,o,o,o)
x=A.x(A.a([u,C.kO,t,x,C.d8,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc8f(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c6(v,w,A.at(new A.D(C.qb,x,o),o,o,o),o,!1,!1,o,o)}}
B.PR.prototype={
U(){return new B.azL()},
gcZ(){return this.c}}
B.azL.prototype={
a_(){this.a2()
this.PQ()},
PQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fYj(o.c,o.d,new B.d7m(s)),$async$PQ)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d7n(s))
x=1
break}s.e=r
q=O.i4b(r)
if(q==null){s.m(new B.d7o(s))
x=1
break}s.d=q
q.aS(0,s.gb0D())
x=8
return A.b(q.ip(0).da(0,C.rj),$async$PQ)
case 8:if(s.c==null){x=1
break}s.m(new B.d7p(s))
x=9
return A.b(q.q7(0),$async$PQ)
case 9:q.tB(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d7q(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PQ,w)},
cdK(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d7r(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D3(0,x.gb0D())
w=x.d
if(w!=null)w.q()
B.ie7(x.e)
x.a3()},
aeq(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_l(u.c,u.d),$async$aeq)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeq,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1m(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aJ(t,t,t,t,C.oj,t,t,t,u.gc89(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.EJ
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ai8(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.aa,C.t,A.a([new A.Al(s,t),A.aB(t,A.Dn(A.p(t,A.X(q?I.yO:C.ij,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b7,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d7t(u),t,t,t,t,t,t,!1,C.a5)],o),t),t)}else s=C.bJ}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.Zl.prototype={
U(){return new B.azJ(new A.cA(null,y.A))}}
B.azJ.prototype={
gcF3(){var x,w,v=this.a
if(v.e!==D.Sl)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcEH(){var x,w,v=this.a
if(v.e!==D.zH)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a2()
x=v.gcF3()
if(x!=null){v.QU(x)
v.e=A.dk(R.FU,new B.d7i(v,x))}w=v.gcEH()
if(w!=null){v.QT(w)
v.f=A.dk(C.fV,new B.d7j(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a3()},
QT(d){return this.ckP(d)},
ckP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apF(d),$async$QT)
case 3:t=f
x=4
return A.b(B.cbA(d),$async$QT)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d7a(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QT,w)},
QU(d){return this.ckQ(d)},
ckQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fLz(d),$async$QU)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bBC(t),$async$QU)
case 4:if(u.c==null){x=1
break}u.m(new B.d7b(u))
u.c.K(y.q).f.T(D.aQV)
case 1:return A.h(v,w)}})
return A.i($async$QU,w)},
gc41(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc8a(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1W(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.D7()){t=u.c
if(t!=null)t.K(y.q).f.T(D.f9O)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cg(A.e_(new B.d7c(),!1,null,y.N)),$async$a1W)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bBC(s),$async$a1W)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aQV)
case 1:return A.h(v,w)}})
return A.i($async$a1W,w)},
aa7(d){return this.bJt(d)},
bJt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aa7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fB(C.d.aH(t,", "))),$async$aa7)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aa7,w)},
aeo(d){return this.bJd(d)},
bJd(d){var x=0,w=A.j(y.H),v=this
var $async$aeo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fB(v.a.c)),$async$aeo)
case 2:if(d.e!=null)d.K(y.q).f.T(D.f79)
return A.h(null,w)}})
return A.i($async$aeo,w)},
a1Q(d){return this.crT(d)},
crT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoD(s.d,4),$async$a1Q)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t5(r,"ngmy_doc_share_qr.png"),$async$a1Q)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1Q,w)},
gaWS(){var x,w=this.a
if(w.e!==D.In)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b7(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b7(x,13))
return null},
aa4(d){return this.bJm(d)},
bJm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aa4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWS()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$aa4)
case 3:if(d.e!=null)d.K(y.q).f.T(D.f8O)
case 1:return A.h(v,w)}})
return A.i($async$aa4,w)},
aep(){var x=0,w=A.j(y.H),v=this,u
var $async$aep=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vi(),$async$aep)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aep,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1m(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aq(h,0,44)+"\u2026"
i=i.e
i=i!==D.In&&i!==D.Sl&&i!==D.zH
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.In||t===D.Sl||t===D.zH?l:A.aJ(l,l,l,l,C.lb,l,l,l,m.gaZO(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.J(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.pW(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc41(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.In){t=C.aC.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mE,l,l,l)],p))}q.push(C.aM)
q.push(A.d(m.gc8a(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hr(D.bYd,D.fEl,new B.d7d(m,d),l)],p))}if(m.a.e===D.In&&m.gaWS()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hr(D.bUJ,D.fB0,new B.d7e(m,d),l)],p))
if(m.a.e===D.zH){x=(m.w?C.dD:C.aC).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EM:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mE,l,l,l)],p))}if(m.a.e===D.Sl){x=(m.r?C.dD:C.aC).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EM:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mE,l,l,l),C.ad,A.dj(D.bQq,D.fHs,m.gcsg(),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ov(i,A.c6(v,w,new A.D(C.ab,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b8,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ab,l,l,1/0),1),C.ad,A.B(A.a([A.E(A.et(N.Cr,C.US,new B.d7f(m,d),l),1),C.as,A.E(A.dj(C.z2,C.a9L,new B.d7g(m,d),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bI(C.Ad,m.gaZO(),A.bp(C.aK,l,l,l,l,C.fZ,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d7h(),y.C)}}
B.aci.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.x(A.a([w,C.aM,A.p(x,A.pW(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.em(A.a([A.bI(C.wW,new B.d6B(d),x)],u),x,x,C.n3,v,x,x,x,x,D.fu_,x)}}
B.Zf.prototype={
U(){return new B.azE(A.zv(C.xY,C.nN,C.uA))}}
B.azE.prototype={
q(){this.d.q()
this.a3()},
axx(d){var x,w,v,u,t
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
return A.c6(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fBw,x,x,x,1,x,!0),C.w,A.zu(this.d,C.bV,this.gaxw()),x,!1,!1,x,x)}}
B.Zm.prototype={
U(){return new B.azK(A.zv(C.xY,C.nN,C.uA))},
gcZ(){return this.c}}
B.azK.prototype={
c_Z(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agg(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Ss("text/plain"),$async$agg)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.f9I)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agg,w)},
aaU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.htl(p,!0),$async$aaU)
case 3:t=e
p=t==null
s=B.a76(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.f6g)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aaU,w)},
q(){this.d.q()
this.a3()},
axx(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_Z(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.aoQ,v,v,v,w.gbP4(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a2e,v,v,v,w.gcic(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aJ(v,v,v,v,A.X(w.f?C.ug:P.Om,v,v,v,v,v),v,v,v,new B.d7l(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fIk,v,v,v,1,v,!0)
u=A.zu(w.d,C.bV,w.gaxw())
x=A.m(20)
return A.c6(t,C.w,new A.an(C.a_,v,C.aa,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.epP],s),v),v,!1,!1,v,v)}}
B.bdX.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oY
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oY:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aM(!1,w,!0,new A.D(C.a_t,A.B(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eD,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ai)}}
B.a9x.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.OG.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.Xl.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.OF.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.Fe.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cna.prototype={}
B.Fd.prototype={}
B.a9w.prototype={}
B.au_.prototype={}
B.Xm.prototype={}
var z=a.updateTypes(["aA<~>()","R(jq)","n(jq)","V9(Y)","~()","Zi(Y)","H(H,jq)","PR(Y)","~(m9)","cu(Fd)","aA<jq?>(@)","V7(Y)","Vb(Y)","D(jq)","jq(@)","a8<n,@>(jq)","Zh(Y)","V8(Y)","Zj(Y)","Zg(Y)","Zl(Y)","aci(Y)","ai<jq>()","Zm(Y)","ack(Y,H)","Zf(Y)","a8<n,aD>(jq)","cu(Xl)","cu(a9w)","aA<cu>(Fd)"])
B.cn6.prototype={
$1(d){var x=this.a
x.x=D.aNZ
x.y.M(0,D.aNZ)},
$S:72}
B.cn7.prototype={
$1(d){var x=this.a
x.x=D.aNY
x.y.M(0,D.aNY)},
$S:72}
B.cn8.prototype={
$1(d){var x=this.a
x.ahA(A.aPd(d.data)).bM(new B.cn5(x),y.b)},
$S:72}
B.cn5.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cn9.prototype={
$1(d){},
$S:72}
B.cnc.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hMQ(d.channel))},
$S:15}
B.cnd.prototype={
$1(d){},
$S:15}
B.cne.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i5d(w.iceConnectionState)
x.cx=w
if($.h6l())switch(w.a){case 0:x.cy=D.aO3
break
case 1:x.cy=D.aO4
break
case 3:x.cy=D.aO5
break
case 5:x.cy=D.aO1
break
case 6:x.cy=D.aO2
break
case 7:x.cy=D.a7z
break
default:break}},
$S:145}
B.cnf.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i5e(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:145}
B.cng.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ifB(w.signalingState)},
$S:145}
B.cnh.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.idP(w.connectionState)},
$S:145}
B.cni.prototype={
$1(d){},
$S:145}
B.cnj.prototype={
$1(d){},
$S:15}
B.fmN.prototype={
$1(d){var x=y.F.a(new A.rW([],[]).pM(d.target.result,!1)),w=C.xZ.t(x.objectStoreNames,"blobs")
if(!w)C.xV.KZ(x,"blobs")},
$S:183}
B.fKO.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wp.fk(this.b)
$.eW.ms()
this.c.$1(d)},
$S:450}
B.fKQ.prototype={
$1(d){return this.a.$1(B.hVN(this.b,this.c))},
$S:35}
B.fKP.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fKN.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fL2.prototype={
$1(d){var x=this
return B.hiC(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fL3.prototype={
$1(d){var x=this
return B.hiC(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fp2.prototype={
$1(d){var x=this
return B.cbb(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d6U.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d6R.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbb(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d6T.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbb(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d6S.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbb(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d6W.prototype={
$4(d,e,f,g){var x=null
return A.jO(A.B(A.a([A.aJ(x,x,x,x,D.bP1,x,x,x,new B.d6V(d),x,x,x,x,x,x),A.E(A.F_(D.QJ,!0,x,C.a1g,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.QJ,x,g,C.akH,0,e,f)},
$C:"$4",
$R:4,
$S:423}
B.d6V.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fr1.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eL,y.o).w,t=this.a,s=t?C.is:C.c,r=A.m(28),q=A.p(v,D.bsp,C.f,v,v,D.b30,v,v,v,v,D.akx,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bu(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bTf,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.G6,A.x(A.a([o,C.ad,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bu(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ap4,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.ao,v,v,v,v),C.bx,A.B(A.a([A.E(A.dS(C.di,new B.fr_(d),v),1),C.as,A.E(A.bI(D.fA2,new B.fr0(p,x,d),A.bp(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.N3,v,v,v,v),v)},
$S:62}
B.fr_.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fr0.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.f7q)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCj(v,x))},
$S:0}
B.frv.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eL,y.o).w,u=x.a,t=u?C.is:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bse,C.f,w,w,D.b4u,w,w,w,w,D.akx,w,w,1/0),new A.D(C.G6,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.h2n(u,"Organization name",C.Gx,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.W,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.h2n(u,"Access code",C.nq,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.W,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.h2n(u,"Member password",H.H6,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.bx,A.bI(D.fIr,new B.fru(r,q,p,d),A.bp(C.aC,w,w,w,w,C.fZ,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.N3,w,w,w,w),w)},
$S:62}
B.fru.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.f7v)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aFp(u,x,w))},
$S:0}
B.cb2.prototype={
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
p=C.a.a0(j,"http")?A.cG(j,0,null):s.b.aT(j)
u=4
x=7
return A.b(A.vr(p,null).da(0,C.Zv),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ci(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BT(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cb8.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cb9.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cba.prototype={
$1(d){return d.b},
$S:z+2}
B.cb4.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cb5.prototype={
$1(d){return d.b},
$S:z+2}
B.cb3.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cb6.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.cb7.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fL0.prototype={
$1(d){return new B.V7(this.a,null)},
$S:z+11}
B.fL1.prototype={
$1(d){return new B.Vb(this.a,this.b,this.c,null)},
$S:z+12}
B.dSA.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dTJ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dTK.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dTL.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dTI(x,d))},
$S:2}
B.dTI.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTM.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTN.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dTO.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dTP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dTQ.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dTR.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dTU.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*14)),e)},
$S:99}
B.dTS.prototype={
$1(d){var x=this.a
return x.f?null:x.ZZ()},
$S:2}
B.dTT.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mx(D.R_))s=C.uk
else s=C.a.a0(s,"video/")||d.mx(D.mN)?C.qo:D.anx
x=this.b.a
w=y.p
return new A.D(C.kE,A.B(A.a([A.p(v,A.X(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaq1(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dSB.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dSC.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cbc.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:95}
B.cbd.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:95}
B.fLR.prototype={
$2(d,e){return e===this.a},
$S:301}
B.fjY.prototype={
$1(d){return J.k(d)},
$S:17}
B.fpe.prototype={
$1(d){var x=this.b
B.hTO(C.Gk.ga6D(this.a)).bM(x.gaE_(x),y.H)},
$S:129}
B.fpf.prototype={
$1(d){return this.a.d8(0,null)},
$S:129}
B.fpg.prototype={
$0(){return null},
$S:12}
B.cbr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fph.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).a7().ae():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jq(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fto.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fnG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnH.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cbw.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.fPY.prototype={
$1(d){return new B.Zh(this.a,null)},
$S:z+16}
B.d6Q.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:9}
B.d6O.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d6P.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dTH.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a11()},
$S:11}
B.dT4.prototype={
$0(){var x=J.bEN(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dT5.prototype={
$0(){var x=J.bEN(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dSE.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dSD(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEn(this.c)}},
$S:0}
B.dSD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dSF.prototype={
$0(){var x=J.bEN(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dSK.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dSJ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEn(this.c)}},
$S:0}
B.dSJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dTv.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dTw.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dT1.prototype={
$1(d){return new B.V8(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dSZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ii(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vc(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tW(),$async$$0)
case 5:s=J.a5(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1b(s.gL(t)),$async$$0)
case 8:case 7:r.i7(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSI.prototype={
$1(d){this.a.acg(d,"No files selected.","Added")},
$S:450}
B.dT9.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dT8(),A.T(x).k("N<1,n>")))},
$S:0}
B.dT8.prototype={
$1(d){return d.a},
$S:z+2}
B.dSO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xn.c9().cUW(C.a0i,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jw(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i7("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i7("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apE(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cq(l)){o.i7("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tW(),$async$$0)
case 9:o.i7("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dTs.prototype={
$1(d){return new B.PR(this.a.a.c,this.b,null)},
$S:z+7}
B.dTt.prototype={
$1(d){return new B.Zj(this.a.a.c,this.b,null)},
$S:z+18}
B.dTu.prototype={
$1(d){return new B.Zg(this.a.a.c,this.b,null)},
$S:z+19}
B.dT_.prototype={
$1(d){return new B.PR(this.a.a.c,this.b,null)},
$S:z+7}
B.dT0.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dTl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ii(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a78(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i7("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cog(),$async$$0)
case 5:x=6
return A.b(p.tW(),$async$$0)
case 6:r=A.T(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dTh(p),r),new B.dTi(),r.k("N<ak.E,n>")).c0(0,new B.dTj())
q=A.C(r,r.$ti.k("K.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cg(A.e_(new B.dTk(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pd(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vi(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dTh.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dTg(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dTg.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dTi.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dTj.prototype={
$1(d){return d.length!==0},
$S:3}
B.dTk.prototype={
$1(d){var x=this.a
return new B.Zl(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dTm.prototype={
$1(d){return d.a},
$S:z+2}
B.dTn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dTf.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kD,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaq1(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mx(D.mN)?C.un:C.pa
p=!x||p.mx(D.mN)?"Play video":"View"
return A.c1(A.bn(!0,new A.D(C.BG,A.x(A.a([q,o,t,C.aA,B.Zk(!1,u,!1,w,p,new B.dTa(d),v),B.Zk(!1,u,!1,C.jA,"Share via QR",new B.dTb(d),"Letters/numbers QR code"),B.Zk(!1,u,!1,D.a1m,"Send to their Code",new B.dTc(d),"Enter someone else's personal code"),B.Zk(!1,u,!1,C.hL,"Download / save",new B.dTd(d),v),C.am,B.Zk(!1,u,!0,C.ec,"Delete",new B.dTe(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bK(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kT,v,v,C.n),C.bg)},
$S:689}
B.dTa.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dTb.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dTc.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dTd.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dTe.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dSL.prototype={
$1(d){return d.a},
$S:z+2}
B.dSM.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dSN.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7a(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GH(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pd(s.c,s.f),$async$$0)
case 4:u.i7(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSH.prototype={
$1(d){var x=this.a
x.tX(new B.dSG(x,d,this.b),"Preparing\u2026")},
$S:450}
B.dSG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i7("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vc(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cq(s)){t.i7("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bDI(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dT2.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dT3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fYm(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GF(new B.dST(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i7("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dSU(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dSV(s))
case 5:x=8
return A.b(r.b.iu(0,C.FR,new B.dSW()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gan(t)){s.i7("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tW(),$async$$0)
case 9:s.i7("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dST.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dSQ(x,d,e))},
$S:212}
B.dSQ.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dSU.prototype={
$1(d){return new B.aci(this.a.a,null)},
$S:z+21}
B.dSV.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dSW.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dSY.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IH(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6Z(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0Q(B.IH(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apE(new B.dSR(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cq(r)){if(B.fYl(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i7(q)
x=1
break}x=10
return A.b(s.tW(),$async$$0)
case 10:o=J.cD(r)
p=o.eX(r,new B.dSS()).gL(0)
s.i7(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dSR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dSP(x,d,e))},
$S:212}
B.dSP.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dSS.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.dT7.prototype={
$1(d){return new B.Zm(this.a.a.c,null)},
$S:z+23}
B.dT6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b_l(u.a.c,v.b),$async$$0)
case 2:t.i7(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dTr.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aC.j(0.35)
return A.c1(A.bn(!0,new A.D(C.BG,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kD,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Zk(!0,w,!1,C.nq,"My Code",new B.dTo(d),"Your personal code & QR \u2014 others send docs to you"),B.Zk(!1,w,!1,D.a1m,"Send to their Code",new B.dTp(this.a,d),"Enter someone else's 5-digit code + letter"),B.Zk(!1,w,!1,S.yW,"Import backup",new B.dTq(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bK(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kT,x,x,C.n),C.bg)},
$S:689}
B.dTo.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dTp.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bDj()},
$S:0}
B.dTq.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dTE.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IR(D.QJ,x,C.a1g,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gI(D.QJ).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:653}
B.dTC.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dTD.prototype={
$0(){this.a.aiy()
return null},
$S:0}
B.dTF.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*10)),e)},
$S:99}
B.dTG.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.ack(e,w,v,this.b,x.e,x.c8b(w),new B.dTy(x,w),new B.dTz(x,v,w),new B.dTA(x,w),new B.dTB(x,w),null)},
$S:z+24}
B.dTy.prototype={
$0(){this.a.afO(this.b)
return null},
$S:0}
B.dTz.prototype={
$0(){var x=this.a
return x.m(new B.dTx(x,this.b,this.c))},
$S:0}
B.dTx.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dTA.prototype={
$0(){this.a.Ob(this.b)
return null},
$S:0}
B.dTB.prototype={
$0(){this.a.aik(this.b)
return null},
$S:0}
B.d6M.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*18)),e)},
$S:99}
B.d6N.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:109}
B.d79.prototype={
$3(d,e,f){return A.d9(A.dO(f,new A.t(0,(1-e)*14)),e)},
$S:99}
B.d78.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d75.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d76.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d77.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d73.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fP(w,C.A,x,new B.d71(this.a),C.h6,C.dz,!0,x,!1,x,x)
$.aW.x1$.push(new B.d72(this.a))
return C.bJ},
$S:136}
B.d71.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d7_(this.a))
return C.bJ},
$S:176}
B.d7_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d6X(x))},
$S:9}
B.d6X.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d72.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d6Z(x))},
$S:9}
B.d6Z.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d74.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d70(this.a))
return C.bJ},
$S:176}
B.d70.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d6Y(x))},
$S:9}
B.d6Y.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d6J.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d6I(x,d))},
$S:1745}
B.d6I.prototype={
$0(){return this.a.f=this.b===C.uY},
$S:0}
B.d6K.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d6H(x,d))},
$S:9}
B.d6H.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d6L.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d6G(x,d))},
$S:9}
B.d6G.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d6C.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d6D.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d6E.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d6F.prototype={
$1(d){return this.a.d.Nb(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:7}
B.d7m.prototype={
$0(){var x=this.a.a
return B.rz(x.c,x.d)},
$S:1746}
B.d7n.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d7o.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d7p.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d7q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d7r.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d7t.prototype={
$0(){var x=this.a
x.m(new B.d7s(x))},
$S:0}
B.d7s.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h7(0)
else x.q7(0)},
$S:0}
B.d7i.prototype={
$1(d){return this.a.QU(this.b)},
$S:11}
B.d7j.prototype={
$1(d){return this.a.QT(this.b)},
$S:11}
B.d7a.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d7b.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d7c.prototype={
$1(d){return D.hep},
$S:z+25}
B.d7h.prototype={
$2(d,e){if(d)B.Vi()},
$S:126}
B.d7d.prototype={
$0(){return this.a.aa7(this.b)},
$S:0}
B.d7e.prototype={
$0(){return this.a.aa4(this.b)},
$S:0}
B.d7f.prototype={
$0(){return this.a.aeo(this.b)},
$S:0}
B.d7g.prototype={
$0(){return this.a.a1Q(this.b)},
$S:0}
B.d6B.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d7l.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qb(),$async$$0)
case 2:u.m(new B.d7k(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d7k.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cby.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mN)},
$S:z+1}
B.cbz.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cbx.prototype={
$2(d,e){return this.bko(d,e)},
bko(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vj(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.ft0.prototype={
$1(d){if(d===D.a7y&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.ft1.prototype={
$0(){},
$S:12}
B.fty.prototype={
blY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fhf(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hdL(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.blY(d,e)},
$S:508}
B.ftx.prototype={
$1(d){var x=this
d.b=new B.ftw(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.ftw.prototype={
$1(d){return this.blX(d)},
blX(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b_m(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aN(0,n,null)
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
return A.b(B.fhf(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
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
return A.b(B.a77(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.azH.prototype,"gcf5","Qu",0)
x(v,"gcfX","Jn",0)
x(v,"gcfs","y7",0)
x(v=B.aDF.prototype,"gc85","aem",0)
x(v,"gc86","ZY",0)
x(v,"gcuJ","ai1",0)
x(v=B.aDI.prototype,"gc87","ZZ",0)
x(v,"gcuK","a2a",0)
x(B.aDG.prototype,"gc88","aen",0)
x(B.azG.prototype,"gc8d","c8e",4)
x(v=B.aDH.prototype,"gcft","a05",0)
x(v,"gcth","cti",4)
x(v,"gb1W","ayT",0)
x(v,"gcwe","ais",0)
x(v,"gbPy","XQ",0)
x(v,"gc8c","En",0)
x(B.azI.prototype,"gb5H","a29",0)
x(B.azF.prototype,"gc8f","a__",0)
x(v=B.azL.prototype,"gb0D","cdK",4)
x(v,"gc89","aeq",0)
x(v=B.azJ.prototype,"gcsg","a1W",0)
x(v,"gaZO","aep",0)
w(B.azE.prototype,"gaxw","axx",8)
x(v=B.azK.prototype,"gcic","agg",0)
x(v,"gbP4","aaU",0)
w(v,"gaxw","axx",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cna,B.a9w,B.au_,B.aCj,B.aFp,B.jq,B.ac0,B.bvP,B.Fd,B.Xm])
w(B.cnb,B.cna)
w(B.b4u,B.a9w)
x(A.hL,[B.cn6,B.cn7,B.cn8,B.cn5,B.cn9,B.cnc,B.cnd,B.cne,B.cnf,B.cng,B.cnh,B.cni,B.cnj,B.fmN,B.fKO,B.fKQ,B.fKP,B.fL2,B.fL3,B.fp2,B.d6R,B.d6T,B.d6S,B.d6W,B.fr1,B.frv,B.cb2,B.cb9,B.cba,B.cb5,B.cb3,B.cb6,B.cb7,B.fL0,B.fL1,B.dTL,B.dTU,B.dTS,B.dTT,B.fjY,B.fpe,B.fpf,B.cbr,B.fph,B.fto,B.fnG,B.fnH,B.cbw,B.fPY,B.d6Q,B.d6O,B.dTH,B.dSD,B.dSJ,B.dT1,B.dSI,B.dT8,B.dTs,B.dTt,B.dTu,B.dT_,B.dTh,B.dTg,B.dTi,B.dTj,B.dTk,B.dTm,B.dTn,B.dTf,B.dSL,B.dSM,B.dSH,B.dT2,B.dSU,B.dSS,B.dT7,B.dTr,B.dTE,B.dTF,B.d6M,B.d6N,B.d79,B.d78,B.d73,B.d71,B.d7_,B.d72,B.d74,B.d70,B.d6J,B.d6K,B.d6L,B.d6F,B.d7i,B.d7j,B.d7c,B.cby,B.cbz,B.ft0,B.ftx,B.ftw])
w(B.b4v,B.au_)
x(A.jc,[B.fKN,B.d6U,B.d6V,B.fr_,B.fr0,B.fru,B.dSA,B.dTJ,B.dTK,B.dTI,B.dTM,B.dTN,B.dTO,B.dTP,B.dTQ,B.dTR,B.dSB,B.dSC,B.fpg,B.d6P,B.dT4,B.dT5,B.dSE,B.dSF,B.dSK,B.dTv,B.dTw,B.dSZ,B.dT9,B.dSO,B.dT0,B.dTl,B.dTa,B.dTb,B.dTc,B.dTd,B.dTe,B.dSN,B.dSG,B.dT3,B.dSX,B.dSQ,B.dSV,B.dSW,B.dSY,B.dSP,B.dT6,B.dTo,B.dTp,B.dTq,B.dTC,B.dTD,B.dTy,B.dTz,B.dTx,B.dTA,B.dTB,B.d75,B.d76,B.d77,B.d6X,B.d6Z,B.d6Y,B.d6I,B.d6H,B.d6G,B.d6C,B.d6D,B.d6E,B.d7m,B.d7n,B.d7o,B.d7p,B.d7q,B.d7r,B.d7t,B.d7s,B.d7a,B.d7b,B.d7d,B.d7e,B.d7f,B.d7g,B.d6B,B.d7l,B.d7k,B.ft1])
x(A.lZ,[B.acj,B.NC,B.a9x,B.OG,B.Xl,B.OF,B.Fe])
x(A.ag,[B.Zi,B.V7,B.Vb,B.V8,B.Zh,B.V9,B.Zj,B.Zg,B.PR,B.Zl,B.Zf,B.Zm])
x(A.ah,[B.azH,B.aDF,B.aDI,B.aDG,B.azG,B.aDH,B.azI,B.azF,B.azL,B.azJ,B.azE,B.azK])
x(A.aw,[B.acL,B.azD,B.bdW,B.ack,B.aci,B.bdX])
x(A.kd,[B.cb8,B.cb4,B.cbc,B.cbd,B.fLR,B.dST,B.dSR,B.dTG,B.d7h,B.cbx,B.fty])
x(A.iU,[B.bjj,B.bvs])})()
A.jk(b.typeUniverse,JSON.parse('{"b4u":{"a9w":[]},"b4v":{"au_":[]},"Zi":{"ag":[],"v":[]},"azH":{"ah":["Zi"]},"acL":{"aw":[],"v":[]},"V7":{"ag":[],"v":[]},"Vb":{"ag":[],"v":[]},"aDF":{"ah":["V7"]},"aDI":{"ah":["Vb"]},"bjj":{"iU":[]},"V8":{"ag":[],"v":[]},"aDG":{"ah":["V8"]},"Zh":{"ag":[],"v":[]},"V9":{"ag":[],"v":[]},"ack":{"aw":[],"v":[]},"Zj":{"ag":[],"v":[]},"Zg":{"ag":[],"v":[]},"PR":{"ag":[],"v":[]},"Zl":{"ag":[],"v":[]},"aci":{"aw":[],"v":[]},"Zf":{"ag":[],"v":[]},"Zm":{"ag":[],"v":[]},"azG":{"ah":["Zh"]},"bvs":{"iU":[]},"aDH":{"ah":["V9"]},"azD":{"aw":[],"v":[]},"bdW":{"aw":[],"v":[]},"azI":{"ah":["Zj"]},"azF":{"ah":["Zg"]},"azL":{"ah":["PR"]},"azJ":{"ah":["Zl"]},"azE":{"ah":["Zf"]},"azK":{"ah":["Zm"]},"bdX":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.av
return{J:x("uo"),k:x("M3()"),m:x("bw<n,n>"),F:x("rb"),g:x("aA<jq?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bg>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<jq>"),w:x("O<+file,name(lI,n)>"),u:x("O<cX>"),s:x("O<n>"),E:x("O<iU>"),a:x("O<dI>"),p:x("O<v>"),Z:x("O<H>"),G:x("bg"),A:x("cA<ah<ag>>"),n:x("ai<jq>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bz<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iF"),e:x("ijx"),af:x("Eq"),U:x("jq"),b:x("cu"),C:x("aD"),aK:x("wf"),ab:x("Fd"),br:x("au_"),v:x("Xm"),N:x("n"),X:x("bo<L>"),Q:x("lV"),D:x("dI"),aw:x("cs<n>"),cd:x("Z<a8<n,@>>"),c7:x("v"),ch:x("bY<ai<jq>>"),aW:x("bY<dI?>"),aY:x("bY<~>"),cx:x("acj"),b1:x("bh<ai<jq>>"),cf:x("bh<dI?>"),d4:x("bh<~>"),c4:x("aCj"),bG:x("aFp"),q:x("n6"),B:x("pv<Fd>"),c6:x("pv<a9x>"),y:x("R"),i:x("L"),z:x("@"),S:x("H"),aQ:x("bg?"),_:x("ai<jq>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jq?"),R:x("aD?"),c:x("Xm?"),d:x("+answerQr,transfer(n,aA<ai<jq>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,NC,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dI?"),cm:x("ac0?"),bk:x("aCj?"),ag:x("aFp?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b1m=new A.ay(C.aC,2,C.r,-1)
D.c1M=new A.a9(C.a4,C.a8,C.x,C.a3p,null,null)
D.b30=new A.o(null,null,null,C.mn,null,D.c1M,C.n)
D.b4u=new A.o(null,null,null,C.mn,null,E.Hj,C.n)
D.adP=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.af6=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ag6=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ahJ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fuT=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fJn=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DZ,null,null,null,null,null,null,null,null,null)
D.dcF=x([D.fuT,C.am,D.fJn],y.p)
D.bs4=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dcF,null)
D.fNN=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fze=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DZ,null,null,null,null,null,null,null,null,null)
D.dt8=x([D.fNN,C.am,D.fze],y.p)
D.bse=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dt8,null)
D.fK_=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fD6=new A.y("Enter the access code and password from your organization.",null,G.DZ,null,null,null,null,null,null,null,null,null)
D.dqS=x([D.fK_,C.am,D.fD6],y.p)
D.bsp=new A.fj(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dqS,null)
D.byr=new A.Q(16,10,16,28)
D.byz=new A.Q(16,14,16,4)
D.bzP=new A.Q(20,0,20,16)
D.bAk=new A.Q(20,8,20,16)
D.akx=new A.Q(24,22,24,20)
D.a1m=new A.a0(63394,"MaterialIcons",!1)
D.anx=new A.a0(63515,"MaterialIcons",!1)
D.bMW=new A.a0(983813,"MaterialIcons",!1)
D.bKi=new A.a0(62867,"MaterialIcons",!1)
D.bNW=new A.ae(D.bKi,44,C.c,null,null,null)
D.bP1=new A.ae(C.l4,null,C.ae,null,null,null)
D.bQq=new A.ae(C.jc,18,null,null,null,null)
D.bS8=new A.ae(D.a1m,26,C.c,null,null,null)
D.bSG=new A.ae(C.GZ,null,null,null,null,null)
D.bTf=new A.ae(C.Cn,null,null,null,null,null)
D.bUp=new A.ae(W.a1z,null,null,null,null,null)
D.bUJ=new A.ae(C.hv,16,null,null,null,null)
D.bYd=new A.ae(C.ru,16,null,null,null,null)
D.bOd=new A.ae(C.nq,null,null,null,null,null)
D.bZ4=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTN=new A.ae(C.Gx,null,null,null,null,null)
D.bZ9=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOz=new A.ae(H.H6,null,null,null,null,null)
D.bZk=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cN8=x([C.fe,C.b_,C.aC],y.O)
D.c3E=new A.a9(C.az,C.aE,C.x,D.cN8,null,null)
D.cMB=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.QJ=x([C.fe,C.aC],y.O)
D.R_=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mN=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dlk=x([C.oT,C.aC],y.O)
D.ecL={iceServers:0}
D.aIw={urls:0}
D.dwP=new A.bw(D.aIw,["stun:stun.l.google.com:19302"],y.m)
D.dwO=new A.bw(D.aIw,["stun:stun1.l.google.com:19302"],y.m)
D.d2u=x([D.dwP,D.dwO],A.av("O<a8<n,n>>"))
D.dw7=new A.bw(D.ecL,[D.d2u],A.av("bw<n,@>"))
D.In=new B.NC(0,"lanDirect")
D.Sk=new B.NC(1,"cloudStash")
D.dHN=new B.NC(2,"inlineInstant")
D.Sl=new B.NC(3,"webrtcLink")
D.zH=new B.NC(4,"videoCloud")
D.fJm=new A.y("Receive file",null,C.nG,null,null,null,null,null,null,null,null,null)
D.cCu=x([E.apc,C.ac,D.fJm],y.p)
D.eZC=new A.cc(C.aN,C.b8,C.j,C.m,null,C.p,null,0,D.cCu,null)
D.ek1=new A.D(C.cj,D.eZC,null)
D.flE=new A.F(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.HM,null,null,null)
D.fvq=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.flE,null,C.L,null,null,null,null,null,null,null)
D.ejg=new A.D(C.BL,D.fvq,null)
D.b8O=new A.ck(C.A,null,null,D.ejg,null)
D.epP=new A.cN(0,null,0,28,null,null,D.b8O,null)
D.eq8=new B.a9x(0,"RTCDataChannelConnecting")
D.aNY=new B.a9x(1,"RTCDataChannelOpen")
D.aNZ=new B.a9x(3,"RTCDataChannelClosed")
D.eq9=new B.Fe(0,"RTCIceConnectionStateNew")
D.eqa=new B.Fe(1,"RTCIceConnectionStateChecking")
D.eqb=new B.Fe(2,"RTCIceConnectionStateCompleted")
D.eqc=new B.Fe(3,"RTCIceConnectionStateConnected")
D.eqd=new B.Fe(4,"RTCIceConnectionStateCount")
D.eqe=new B.Fe(5,"RTCIceConnectionStateFailed")
D.eqf=new B.Fe(6,"RTCIceConnectionStateDisconnected")
D.aO_=new B.Fe(7,"RTCIceConnectionStateClosed")
D.aO0=new B.Xl(0,"RTCIceGatheringStateNew")
D.eqg=new B.Xl(1,"RTCIceGatheringStateGathering")
D.a7y=new B.Xl(2,"RTCIceGatheringStateComplete")
D.a7z=new B.OF(0,"RTCPeerConnectionStateClosed")
D.aO1=new B.OF(1,"RTCPeerConnectionStateFailed")
D.aO2=new B.OF(2,"RTCPeerConnectionStateDisconnected")
D.aO3=new B.OF(3,"RTCPeerConnectionStateNew")
D.aO4=new B.OF(4,"RTCPeerConnectionStateConnecting")
D.aO5=new B.OF(5,"RTCPeerConnectionStateConnected")
D.eqh=new B.OG(0,"RTCSignalingStateStable")
D.eqi=new B.OG(1,"RTCSignalingStateHaveLocalOffer")
D.eqj=new B.OG(2,"RTCSignalingStateHaveRemoteOffer")
D.eqk=new B.OG(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eql=new B.OG(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aO6=new B.OG(5,"RTCSignalingStateClosed")
D.f37=new A.au(160,48)
D.ba4=new A.fi(2,null,null,null,null,C.aC,null,null,null,null)
D.f4F=new A.a7(16,16,D.ba4,null)
D.fyz=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f66=new A.b2(D.fyz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fG5=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f69=new A.b2(D.fG5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOQ=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f6g=new A.b2(D.fOQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fy9=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f6G=new A.b2(D.fy9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKa=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aQV=new A.b2(D.fKa,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLz=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f79=new A.b2(D.fLz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQh=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f7q=new A.b2(D.fQh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOg=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f7v=new A.b2(D.fOg,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fPt=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f8h=new A.b2(D.fPt,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fwM=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f8O=new A.b2(D.fwM,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fHX=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f98=new A.b2(D.fHX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fAS=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f9E=new A.b2(D.fAS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQn=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f9I=new A.b2(D.fQn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fx1=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f9O=new A.b2(D.fx1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fvL=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fa2=new A.b2(D.fvL,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fsC=new A.y("NGMY DOC SHARE",null,C.aSi,null,null,null,null,null,null,null,null,null)
D.fu_=new A.y("Show this to sender",null,C.iG,null,null,null,null,null,null,null,null,null)
D.fv_=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fzE=new A.y("Organization settings",null,C.cA,null,null,null,null,null,null,null,null,null)
D.fA2=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fB0=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fEl=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fH6=new A.y("Send to their Doc Share",null,C.nD,null,null,null,null,null,null,null,null,null)
D.fHs=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fHL=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fIr=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fIP=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f0,null,null,null,null,null,null,null,null,null)
D.fM4=new A.y("Share files & videos\nwith a scan.",null,C.aSk,null,null,null,null,null,null,null,null,null)
D.fMo=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.hep=new B.Zf(null)
D.aaG=new B.acj(0,"docShare")
D.aaH=new B.acj(1,"gate")
D.Vq=new B.acj(2,"gateNoIndividual")})();(function staticFields(){$.aNY=null
$.ff_=function(){var x=y.N
return A.U(x,x)}()
$.Gs=A.U(y.N,y.D)
$.agp=A.U(y.N,A.av("lI"))
$.Ra=A.U(y.N,y.D)
$.ffx=A.U(y.N,A.av("ac0"))
$.cbq=A.U(y.S,A.av("bvP"))
$.hdK=1
$.i0U=null
$.i0T=null
$.hTa=null
$.h2A=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ik1","hve",()=>new B.cnb())
x($,"ihX","h6l",()=>C.a.t(A.bx(A.bx(A.bx(A.H2(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["bUHzCSYZkWlgXydsS93rN+ywX4Q="]=a.current})($__dart_deferred_initializers__);