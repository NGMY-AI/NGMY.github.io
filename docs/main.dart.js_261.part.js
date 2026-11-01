((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ckh:function ckh(){},
hLD(d){var x=null,w=new B.b3V(d,D.eiZ,new A.ps(x,x,y.c6),new A.ps(x,x,y.B))
w.byh(d)
return w},
b3V:function b3V(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ckc:function ckc(d){this.a=d},
ckd:function ckd(d){this.a=d},
cke:function cke(d){this.a=d},
ckb:function ckb(d){this.a=d},
ckf:function ckf(d){this.a=d},
hLE(d,e){var x=y.N
x=new B.b3W(d,e,A.U(x,y.e),A.U(x,y.z))
x.byi(d,e)
return x},
b3W:function b3W(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cki:function cki(d){this.a=d},
ckj:function ckj(d){this.a=d},
ckk:function ckk(d){this.a=d},
ckl:function ckl(d){this.a=d},
ckm:function ckm(d){this.a=d},
ckn:function ckn(d){this.a=d},
cko:function cko(d){this.a=d},
ckp:function ckp(d){this.a=d},
h1r(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yM.LX(x,"ngmy_doc_share_v1",new B.fmO(),1)},
hSc(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cg(d))
if(y.J.b(d))return new Uint8Array(A.cg(J.f1(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cg(A.A6(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cg(d))
if(typeof d=="string")try{x=C.cG.aK(d)
return x}catch(w){return v}return v},
R2(d,e){return B.i6u(d,e)},
i6u(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNw
x=7
return A.b(o==null?$.aNw=B.h1r():o,$async$R2)
case 7:s=g
r=new Uint8Array(A.cg(e))
q=J.mK(s,"blobs","readwrite")
C.iP.mm(J.mI(q,"blobs"),r,d)
x=8
return A.b(J.pB(q),$async$R2)
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
return A.i($async$R2,w)},
R1(d){return B.i6t(d)},
i6t(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNw
x=7
return A.b(o==null?$.aNw=B.h1r():o,$async$R1)
case 7:s=f
r=J.mK(s,"blobs","readonly")
x=8
return A.b(C.iP.zv(J.mI(r,"blobs"),d),$async$R1)
case 8:q=f
x=9
return A.b(J.pB(r),$async$R1)
case 9:o=B.hSc(q)
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
return A.i($async$R1,w)},
agT(d){return B.i6s(d)},
i6s(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNw
x=7
return A.b(p==null?$.aNw=B.h1r():p,$async$agT)
case 7:s=f
r=J.mK(s,"blobs","readwrite")
C.iP.FK(J.mI(r,"blobs"),d)
x=8
return A.b(J.pB(r),$async$agT)
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
return A.i($async$agT,w)},
fmO:function fmO(){},
hUx(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bos(w,v))}return u},
hrv(d,e){var x,w={},v=A.aVZ("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fKr(w,v,e)
C.w7.ys(v,"change",new B.fKt(w,v,!1))
C.w7.ys(v,"cancel",new B.fKs(w))
$.eU.mt()
v.click()
A.bM(C.ahk,new B.fKq(w),y.H)},
fKr:function fKr(d,e,f){this.a=d
this.b=e
this.c=f},
fKt:function fKt(d,e,f){this.a=d
this.b=e
this.c=f},
fKs:function fKs(d){this.a=d},
fKq:function fKq(d){this.a=d},
D1(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$D1=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTA()?3:4
break
case 3:x=5
return A.b(B.hmC(e,d,s,!0,!1,f,g,h,!1,i),$async$D1)
case 5:x=1
break
case 4:x=6
return A.b(B.QI(d,s,f,g,h,i),$async$D1)
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
return A.b(B.It(s,d),$async$D1)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fie(s,d),$async$D1)
case 14:x=12
return A.b(r.hmC(q,p,o,n,m,l,k,j,a1,i),$async$D1)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).cm(A.ea(new B.fKG(s,i,d,f,g,h),!1,null,y.H)),$async$D1)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).cm(A.ea(new B.fKH(s,i,d,f,g,h),!1,null,y.H)),$async$D1)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$D1,w)},
QI(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QI=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZG(e),$async$QI)
case 3:u=k
x=4
return A.b(B.ap4(d,e,!1),$async$QI)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.It(e,d),$async$QI)
case 7:if(k){v=D.a9N
x=1
break}x=8
return A.b(B.UN(e),$async$QI)
case 8:v=t?D.UP:D.a9O
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZE(d,e)){v=D.a9N
x=1
break}x=11
return A.b(B.UN(e),$async$QI)
case 11:v=t?D.UP:D.a9O
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fXA(d,e)){v=D.a9N
x=1
break}x=14
return A.b(B.UN(e),$async$QI)
case 14:v=D.UP
x=1
break
case 13:v=t?D.UP:D.a9O
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QI,w)},
fie(d,e){var x=0,w=A.j(y.y),v
var $async$fie=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZE(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZG(d),$async$fie)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fie,w)},
hmC(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).cm(A.ea(new B.fp2(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hhK(d,e,f,g,h,i,j){return new B.Z1(e,j,d,g,h,i,f,null)},
fqZ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fqZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fr1(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fqZ)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqZ,w)},
frt(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$frt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.frv(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$frt)
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
return A.i($async$frt,w)},
h1A(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fD1(d,e){var x=0,w=A.j(y.H),v
var $async$fD1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UN(e),$async$fD1)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fD1,w)},
fKG:function fKG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKH:function fKH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac9:function ac9(d,e){this.a=d
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
Z1:function Z1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az6:function az6(){this.c=this.a=this.d=null},
d3F:function d3F(d,e){this.a=d
this.b=e},
d3C:function d3C(d){this.a=d},
d3E:function d3E(d){this.a=d},
d3D:function d3D(d){this.a=d},
d3H:function d3H(){},
d3G:function d3G(d){this.a=d},
acC:function acC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBE:function aBE(d,e){this.a=d
this.b=e},
aEQ:function aEQ(d,e,f){this.a=d
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
c8N(d,e,f,g,h){return B.hGz(d,e,f,g,h)},
hGz(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c8N=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dz(d,new B.c8O(s,e,h,g,f,q),y.g),y.l),$async$c8N)
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
return A.i($async$c8N,w)},
aZB(d,e,f,g,h){return B.hGA(d,e,f,g,h)},
hGA(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZB=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aul("GET",d)
o=A.fTX()
if(o==null)o=new A.LM(A.a([],y.W))
x=7
return A.b(o.f_(0,s).d8(0,C.Fr),$async$aZB)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ch(),$async$aZB)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BH(q,h,o,e,f,"Received via QR")
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
return A.i($async$aZB,w)},
aZA(d){return B.hGx(d)},
hGx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d8(0,C.o3),$async$aZA)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aL(0,A.lU(A.lS(p.e)).cB(0,p.w),null)
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
return A.i($async$aZA,w)},
c8M(d){return B.hGy(d)},
hGy(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c8M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d8(0,C.pX),$async$c8M)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lU(A.lS(q.e)).cB(0,q.w)
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
return A.i($async$c8M,w)},
c8O:function c8O(d,e,f,g,h,i){var _=this
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
Ir(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hGF(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ir(C.a.b6(u,v.length))}return null},
hGG(d){var x=B.Ir(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hGB(){var x,w=$.pz(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.h3(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a6L(d){return B.hGC(d)},
hGC(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a6L)
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
return A.i($async$a6L,w)},
a6M(d,e){return B.hGD(d,e)},
hGD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6M=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cI,null),$async$a6M)
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
return A.i($async$a6M,w)},
BG(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BG)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ir(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6N(r),$async$BG)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6L("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BG)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ir(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BG)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hGB()
x=14
return A.b(B.a6N(m),$async$BG)
case 14:if(f!=null){x=12
break}l=new A.T(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6M("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BG)
case 15:k=f
x=16
return A.b(B.a6M("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BG)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BG)
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
return A.i($async$BG,w)},
a6N(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ir(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6L("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6N)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
a6O(d,e,f,g){return B.hGH(d,e,f,g)},
hGH(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6O=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gan(d)){v=!1
x=1
break}r=B.Ir(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6N(r),$async$a6O)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c8U())>1048576||g.b4(d,new B.c8V())){v=B.Ev(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6Z("myCode",d,a0),$async$a6O)
case 4:u=a3
try{t=C.S.aL(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Ev(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZJ(u,g.gM(d),a0),$async$a6O)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pz().av(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c8W(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZC(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6O)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6O,w)},
Ev(d,e,f,g,h){return B.hGE(d,e,f,g,h)},
hGE(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ev=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ev)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c8Q())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pz().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cH.av(99999)
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
a1=B.Iv(a9,q)
a0=new A.Kk(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Ev)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aX(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p0(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aao(a1.a,a4,"media",a1.d,a2).x3(m,n,new A.DM(!0,q.c)),$async$Ev)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Ev)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQ2(r),$async$Ev)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c8R(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZC(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Ev)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQ2(r),$async$Ev)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ev,w)},
aZC(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6L(t),$async$aZC)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c8P(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6M(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZC,w)},
Nm(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Nm=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6L("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Nm)
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
return A.b(B.aZD(k,a0),$async$Nm)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aZI(h),$async$Nm)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UU(g,a0),$async$Nm)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c8S(),q),n)
d=A.C(new A.a_(r,new B.c8T(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d9(d,0,A.dG(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6M("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nm)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nm,w)},
aZD(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZD=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iag(k,j)
C.d.v(s,i)
x=5
return A.b(B.D_(l,m,"Received via My Code",t,e,i),$async$aZD)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQ2(s),$async$aZD)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZD,w)},
c8U:function c8U(){},
c8V:function c8V(){},
c8W:function c8W(){},
c8Q:function c8Q(){},
c8R:function c8R(){},
c8P:function c8P(){},
c8S:function c8S(){},
c8T:function c8T(){},
fKD(d,e){var x=0,w=A.j(y.H)
var $async$fKD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).cm(A.ea(new B.fKE(e),!1,null,y.H)),$async$fKD)
case 2:return A.h(null,w)}})
return A.i($async$fKD,w)},
bDb(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bDb=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).cm(A.ea(new B.fKF(g,e,f),!1,null,y.y)),$async$bDb)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDb,w)},
fKE:function fKE(d){this.a=d},
fKF:function fKF(d,e,f){this.a=d
this.b=e
this.c=f},
UK:function UK(d,e){this.c=d
this.a=e},
aD0:function aD0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dQs:function dQs(d,e){this.a=d
this.b=e},
UO:function UO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD3:function aD3(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dRB:function dRB(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRE:function dRE(d){this.a=d},
dRF:function dRF(d){this.a=d},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRH:function dRH(d,e){this.a=d
this.b=e},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRJ:function dRJ(d){this.a=d},
dRM:function dRM(){},
dRK:function dRK(d){this.a=d},
dRL:function dRL(d,e){this.a=d
this.b=e},
biF:function biF(){},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD1:function aD1(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dQt:function dQt(d){this.a=d},
dQu:function dQu(d){this.a=d},
fXB(d){var x=d.i_
if(x>=0)return C.o.N(x)
return 10},
hGJ(d){var x=d.kO
if(x>=0)return x
return 4.99},
hGI(d){var x=d.lu,w=y.N
w=x.jb(x,new B.c8Y(),w,w)
return w},
hcN(d){var x=d.kP,w=y.N
w=x.jb(x,new B.c8Z(),w,w)
return w},
aZG(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZG)
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
return A.i($async$aZG,w)},
a6Q(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6Q)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6Q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
UN(d){var x=0,w=A.j(y.H),v,u
var $async$UN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UN)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UN,w)},
fXA(d,e){var x,w,v
if(B.hGJ(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hGI(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.T(Date.now(),0,!1))},
aZE(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hcN(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.T(Date.now(),0,!1))},
hcO(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hcN(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.T(Date.now(),0,!1))?v:new A.T(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a6().ac())
d.kP=w},
ap5(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ap5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$ap5)
case 7:s=f
r=A.u(p)
r=A.eP(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ap5,w)},
ap6(d){var x=0,w=A.j(y.H),v,u,t
var $async$ap6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ap5(d),$async$ap6)
case 3:u=f
x=5
return A.b(A.ay(),$async$ap6)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$ap6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ap6,w)},
ap4(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ap4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fXB(d)
if(u<=0){v=!1
x=1
break}if(B.fXA(d,e)){v=!1
x=1
break}x=3
return A.b(B.ap5(e),$async$ap4)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap4,w)},
aZF(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.It(e,d),$async$aZF)
case 3:if(g){v=-1
x=1
break}u=B.fXB(d)
if(u<=0){v=-1
x=1
break}if(B.fXA(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ap5(e),$async$aZF)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZF,w)},
c90(d,e,f){var x=0,w=A.j(y.y),v
var $async$c90=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.It(e,d),$async$c90)
case 3:if(h){v=!1
x=1
break}v=B.ap4(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c90,w)},
c9_(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c9_=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c90(d,u,i.gTA()),$async$c9_)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9_,w)},
a6P(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6P=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTA()){v=!0
x=1
break}if(B.aZE(d,u)){v=!0
x=1
break}x=5
return A.b(A.lj(u,C.Se),$async$a6P)
case 5:x=k?3:4
break
case 3:B.hcO(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6P)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kX(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Se,"Doc Share for Organizations"),$async$a6P)
case 7:if(!k){v=!1
x=1
break}B.hcO(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6P)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
c8Y:function c8Y(){},
c8Z:function c8Z(){},
fLj(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fLj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fLj)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.feX.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.feX.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLj,w)},
icA(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.feX.br($.feX,new B.fLl(d))},
fLl:function fLl(d){this.a=d},
fgj(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fgj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jo,null,y.H),$async$fgj)
case 3:C.Ad.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgj,w)},
afL(d,e,f){var x=0,w=A.j(y.H),v
var $async$afL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.ffq.n(0,d,new B.abR(A.bp(e,!0,v)))
x=3
return A.b(A.ay(),$async$afL)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afL)
case 2:return A.h(null,w)}})
return A.i($async$afL,w)},
afF(d){return B.hWo(d)},
hWo(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.ffq.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afF)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aL(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fk_(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abR(r)
$.ffq.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afF,w)},
Qy(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cg(e))
$.Gd.n(0,d,u)
x=3
return A.b(B.R2(d,u),$async$Qy)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qy,w)},
aNS(d){return B.hWm(d)},
hWm(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gd.h(0,d)
if(n!=null&&!C.aH.gan(n)){v=n
x=1
break}x=3
return A.b(B.R1(d),$async$aNS)
case 3:p=f
if(p!=null&&!C.aH.gan(p)){$.Gd.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNS)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aK(r)
x=!J.cn(q)?9:10
break
case 9:B.Qy(d,q)
x=11
return A.b(J.hy(s,d),$async$aNS)
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
return A.i($async$aNS,w)},
hSz(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cg(J.f1(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cg(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cg(A.A6(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cg(d)),y.K)
return A.f9(null,y.K)},
a1u(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fN(r,"loadend",new B.fpe(r,t),!1,s)
A.fN(r,"error",new B.fpf(t),!1,s)
r.readAsArrayBuffer(d)
v=u.it(0,C.Mj,new B.fpg())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1u,w)},
aOb(d,e,f){return B.hYD(d,e,f)},
hYD(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOb=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1u(i),$async$aOb)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.R2(o,p),$async$aOb)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afL(k,j,s),$async$aOb)
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
return A.i($async$aOb,w)},
aOa(d,e,f){return B.hYC(d,e,f)},
hYC(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOa=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOb(d,e,f),$async$aOa)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1u(f),$async$aOa)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gd.n(0,s,r)
$.QP.n(0,s,r)
x=11
return A.b(B.Qy(s,r),$async$aOa)
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
return A.i($async$aOa,w)},
BH(d,e,f,g,h,i){return B.hGS(d,e,f,g,h,i)},
hGS(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BH=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cH.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.T(Date.now(),0,!1).a6().ac(),a0,f,B.aZM(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qy(s,d),$async$BH)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BH)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cL.gct().aK(d)),$async$BH)
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
return A.b(B.AH(e),$async$BH)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.Gp(e,j),$async$BH)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BH,w)},
UP(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UP=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AH(d),$async$UP)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cH.av(99999)
n=p.b
l=o.type
l.toString
k=B.hcQ(n,null,l)
l=o.size
l.toString
j=new A.T(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZM(),null)
$.agd.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1u(o),$async$UP)
case 7:g=a1
x=g!=null&&!C.aH.gan(g)?8:10
break
case 8:$.Gd.n(0,h,g)
$.QP.n(0,h,g)
B.Qy(h,g)
x=9
break
case 10:x=11
return A.b(B.aOa(d,m,o),$async$UP)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gp(d,t),$async$UP)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UP,w)},
fXF(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fXF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hcQ(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Iu(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gan(s)){v=B.BH(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXF,w)},
Iu(d,e,f,g,h,i){return B.hGR(d,e,f,g,h,i)},
hGR(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Iu=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cH.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kk(A.dG(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Iu)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cg(J.RB(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kJ(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.R2(k,l),$async$Iu)
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
return A.b(j.a7(0),$async$Iu)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.R2(k,new Uint8Array(A.cg(n))),$async$Iu)
case 15:J.cf(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afL(r,q,g),$async$Iu)
case 16:f=new B.jn(i,a1,a0,g,new A.T(Date.now(),0,!1).a6().ac(),a2,null,B.aZM(),null)
x=17
return A.b(B.AH(d),$async$Iu)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.Gp(d,e),$async$Iu)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iu,w)},
UR(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UR=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agd.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1u(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afF(s),$async$UR)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.R1(u[o]),$async$UR)
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
case 5:i=$.QP.h(0,s)
if(i==null)i=$.Gd.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rs(d,e),$async$UR)
case 12:i=a0
if(i!=null&&!C.aH.gan(i))$.QP.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A6(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UR,w)},
hcQ(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rs(d,e){return B.hGT(d,e)},
hGT(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rs=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QP.h(0,f)
if(e==null)e=$.Gd.h(0,f)
if(e!=null&&!C.aH.gan(e)){v=e
x=1
break}s=$.agd.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1u(s),$async$rs)
case 9:r=a3
if(r!=null&&!C.aH.gan(r)){$.Gd.n(0,f,r)
$.QP.n(0,f,r)
B.Qy(f,r)
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
return A.b(B.afF(f),$async$rs)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axU(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.R1(g[l]),$async$rs)
case 16:k=a3
if(k!=null&&!C.aH.gan(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.anY()
if(!C.aH.gan(r)){$.Gd.n(0,f,r)
$.QP.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNS(f),$async$rs)
case 17:j=a3
if(j!=null&&!C.aH.gan(j)){$.QP.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UR(a0,a1,0,g),$async$rs)
case 20:i=a3
if(i!=null&&!C.aH.gan(i)){h=new Uint8Array(A.cg(i))
$.Gd.n(0,f,h)
$.QP.n(0,f,h)
B.Qy(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rs,w)},
hGW(d){var x,w,v=$.agd.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hGX(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hGU(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apc(d,e,f,g,h){return B.hGV(d,e,f,g,h)},
hGV(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apc=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agd.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1u(s),$async$apc)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rs(g,e),$async$apc)
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
return A.b(n.im(d).x3(h,r,new A.DM(!0,e.c)),$async$apc)
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
return A.i($async$apc,w)},
hcS(d,e,f,g,h){var x,w,v,u,t=$.hcR
$.hcR=t+1
x=Date.now()
w=""+1000*x+"_"+C.cH.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c9b.n(0,t,new B.bve(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axU(u)))
return t},
fXG(d){var x=0,w=A.j(y.H)
var $async$fXG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fXG,w)},
Iv(d,e){var $async$Iv=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agd.h(0,h)
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
return A.q9(B.UR(d,e,p,o<q?o:q),$async$Iv,w)
case 8:n=a1
x=n!=null&&!C.aH.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q9(A.FL(n),$async$Iv,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q9(B.afF("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Iv,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q9(B.R1(h[l]),$async$Iv,w)
case 18:k=a1
x=k!=null&&!C.aH.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q9(A.FL(k),$async$Iv,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q9(B.rs(d,e),$async$Iv,w)
case 22:j=a1
x=j!=null&&!C.aH.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q9(A.FL(A.A6(j,p,o<i?o:i)),$async$Iv,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hlv($async$Iv,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hnj(w)},
aZO(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c9b.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4s(),$async$aZO)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZO,w)},
UQ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9b.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4s(),$async$UQ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afL(r.c,u,r.z),$async$UQ)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.T(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZM(),null)
u=r.a
x=5
return A.b(B.AH(u),$async$UQ)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.Gp(u,s),$async$UQ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UQ,w)},
a6W(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9b.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agT(u[s]),$async$a6W)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
c9d(d,e,f){var x=0,w=A.j(y.H)
var $async$c9d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAf(d,e,f),$async$c9d)
case 2:return A.h(null,w)}})
return A.i($async$c9d,w)},
c9e(d,e,f){var x=0,w=A.j(y.H)
var $async$c9e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAg(d,e,f),$async$c9e)
case 2:return A.h(null,w)}})
return A.i($async$c9e,w)},
Ew(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ew=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AH(d),$async$Ew)
case 2:p=g
J.nv(p,new B.c9c(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gd.W(0,v)
$.agd.W(0,e)
x=3
return A.b(B.afF(v),$async$Ew)
case 3:u=g
$.ffq.W(0,v)
x=4
return A.b(A.ay(),$async$Ew)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ew)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ew)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agT(s[q]),$async$Ew)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agT(v),$async$Ew)
case 13:x=14
return A.b(B.Gp(d,p),$async$Ew)
case 14:return A.h(null,w)}})
return A.i($async$Ew,w)},
aZN(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rs(d,e),$async$aZN)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fgj(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZN,w)},
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
break}r=J.b6(u,new B.fph(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AH,w)},
Gp(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gp)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.ftg(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gp)
case 3:return A.h(null,w)}})
return A.i($async$Gp,w)},
bAf(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AH(d),$async$bAf)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fnG(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDJ(f))
x=4
return A.b(B.Gp(d,u),$async$bAf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAf,w)},
bAg(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AH(d),$async$bAg)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fnH(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIX(f))
x=4
return A.b(B.Gp(d,u),$async$bAg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAg,w)},
abR:function abR(d){this.a=d},
fk_:function fk_(){},
fpe:function fpe(d,e){this.a=d
this.b=e},
fpf:function fpf(d){this.a=d},
fpg:function fpg(){},
c9c:function c9c(d){this.a=d},
bve:function bve(d,e,f,g,h,i,j,k,l){var _=this
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
ftg:function ftg(){},
fnG:function fnG(d){this.a=d},
fnH:function fnH(d){this.a=d},
a6X(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c9h())?3:4
break
case 3:x=5
return A.b(B.aZP(d,e),$async$a6X)
case 5:u=g
if(u!=null){t=u.c
B.No(d,u.b,e,t)}v=u
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
return A.b(B.aZK(s),$async$a6X)
case 10:case 9:if(g){v=new A.PX(1,D.RS,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.US(d,e),$async$a6X)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UX(!0,!0,d,e),$async$a6X)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.No(d,D.zo,e,t)
v=new A.PX(p,D.zo,t)
x=1
break}v=B.c9g(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6X,w)},
US(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$US=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6Z(null,d,e),$async$US)
case 3:p=g
try{u=C.S.aL(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZJ(p,d.length,e),$async$US)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c9e(e,C.d.gI(d).a,r.b),$async$US)
case 7:case 6:q=r.a
x=8
return A.b(B.No(d,D.RS,e,q),$async$US)
case 8:v=new A.PX(d.length,D.RS,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$US,w)},
UT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mH)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6Y(d,e),$async$UT)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c99(s,d,e,t),$async$UT)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZK(t),$async$UT)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rs(e,d),$async$UT)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.US(A.a([d],y.r),e),$async$UT)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UT,w)},
UV(){var x=0,w=A.j(y.H)
var $async$UV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fXz(),$async$UV)
case 2:x=3
return A.b(B.aQj(),$async$UV)
case 3:return A.h(null,w)}})
return A.i($async$UV,w)},
a6Y(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZM()
x=3
return A.b(B.c9d(e,d.a,u),$async$a6Y)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Y,w)},
No(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$No=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RS&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b6(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6Y(p,f),$async$No)
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
return A.b(B.c98(o,p,u,f),$async$No)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c99(o,p,f,t),$async$No)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c97(o,u,p,f),$async$No)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$No,w)},
aZP(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c9f(e,d),$async$aZP)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UX(!1,!0,d,e),$async$aZP)
case 4:u=g
if(u!=null){t=u.b
v=new A.PX(u.a,D.zo,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZP,w)},
c9f(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c9f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UR(d,s,0,1),$async$c9f)
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
return A.i($async$c9f,w)},
c9g(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c9g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6Z(null,d,e),$async$c9g)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hcP(u)
if(t.length>800){v=null
x=1
break}v=new A.PX(d.length,D.dBK,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9g,w)},
apd(d,e,f){return B.hH_(d,e,f)},
hH_(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apd=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d1(g,"\ufeff"))g=J.mJ(g,1)
x=B.fXE(g)?3:4
break
case 3:x=5
return A.b(B.c9a(g),$async$apd)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d1(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mJ(g,13))
try{k=B.Ex(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d1(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mJ(g,13))
u=9
x=12
return A.b(B.aZI(q),$async$apd)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UU(p,a0)
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
case 11:case 7:if(J.d1(g,"NGMYDOCSYNC0|"))try{n=B.fXD(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UU(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d1(g,"N2|")){v=B.Iw(C.a.i(J.mJ(g,3)),d,a0)
x=1
break}if(J.d1(g,"NGMYDOCSYNC2|")){v=B.Iw(C.a.i(J.mJ(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Iw(h,d,a0)
x=1
break}if(J.f4(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UU(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apd,w)},
Iw(d,e,f){return B.hGY(d,e,f)},
hGY(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Iw=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b6(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b6(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cc(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.u(s)+"/manifest.json",0,null)
q=A.cE(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZA(r),$async$Iw)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZA(A.cE(s,0,null)),$async$Iw)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c8N(o,r,a1,n,a2),$async$Iw)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c8M(q),$async$Iw)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UU(l,a2),$async$Iw)
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
return A.i($async$Iw,w)},
a6Z(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rs(f,r),$async$a6Z)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cL.gct().aK(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.T(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Z,w)},
UU(d,e){return B.hGZ(d,e)},
hGZ(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UU=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cG.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BH(i,a3,d,k,l,o),$async$UU)
case 9:h=a5
if(h!=null)J.cf(n,h)
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
return A.i($async$UU,w)},
Nn:function Nn(d,e){this.a=d
this.b=e},
c9h:function c9h(){},
a13(d){var x=A.P(d).ax.a===C.I,w=x?D.af0:D.acN,v=x?D.ags:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.ae3:C.aL
return new A.aG3([w,s,v,u,t,x?C.fd:C.bS])},
hse(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fPr(e),d,null,!0,!0,y.N)},
c8X(d,e,f,g,h,i,j,k,l){return new B.UM(e,l,d,f,k,j,g,h,i,null)},
Z3(d,e,f,g,h,i,j){return new B.bdk(g,h,j,e,i,d,f,null)},
fPr:function fPr(d){this.a=d},
Z0:function Z0(d,e){this.c=d
this.a=e},
az5:function az5(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d3B:function d3B(d){this.a=d},
d3z:function d3z(d){this.a=d},
d3A:function d3A(d){this.a=d},
buT:function buT(){},
UM:function UM(d,e,f,g,h,i,j,k,l,m){var _=this
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
aD2:function aD2(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dRz:function dRz(d){this.a=d},
dQX:function dQX(d,e){this.a=d
this.b=e},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e,f){this.a=d
this.b=e
this.c=f},
dQv:function dQv(d){this.a=d},
dQx:function dQx(d,e){this.a=d
this.b=e},
dQC:function dQC(d,e,f){this.a=d
this.b=e
this.c=f},
dQB:function dQB(d){this.a=d},
dRn:function dRn(d,e){this.a=d
this.b=e},
dRo:function dRo(d){this.a=d},
dQU:function dQU(d,e,f){this.a=d
this.b=e
this.c=f},
dQR:function dQR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQA:function dQA(d){this.a=d},
dR1:function dR1(d){this.a=d},
dR0:function dR0(){},
dQG:function dQG(d){this.a=d},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRm:function dRm(d,e){this.a=d
this.b=e},
dQS:function dQS(d,e){this.a=d
this.b=e},
dQT:function dQT(d,e){this.a=d
this.b=e},
dRd:function dRd(d,e){this.a=d
this.b=e},
dR9:function dR9(d){this.a=d},
dR8:function dR8(d){this.a=d},
dRa:function dRa(){},
dRb:function dRb(){},
dRc:function dRc(d,e){this.a=d
this.b=e},
dRe:function dRe(){},
dRf:function dRf(d){this.a=d},
dR7:function dR7(d,e){this.a=d
this.b=e},
dR2:function dR2(d){this.a=d},
dR3:function dR3(d){this.a=d},
dR4:function dR4(d){this.a=d},
dR5:function dR5(d){this.a=d},
dR6:function dR6(d){this.a=d},
dQD:function dQD(){},
dQE:function dQE(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e){this.a=d
this.b=e},
dQy:function dQy(d,e,f){this.a=d
this.b=e
this.c=f},
dQV:function dQV(d){this.a=d},
dQW:function dQW(d,e,f){this.a=d
this.b=e
this.c=f},
dQP:function dQP(d,e){this.a=d
this.b=e},
dQL:function dQL(d){this.a=d},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQM:function dQM(d){this.a=d},
dQN:function dQN(d){this.a=d},
dQO:function dQO(){},
dQQ:function dQQ(d,e){this.a=d
this.b=e},
dQJ:function dQJ(d){this.a=d},
dQH:function dQH(d,e,f){this.a=d
this.b=e
this.c=f},
dQK:function dQK(){},
dR_:function dR_(d){this.a=d},
dQZ:function dQZ(d,e){this.a=d
this.b=e},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRg:function dRg(d){this.a=d},
dRh:function dRh(d,e){this.a=d
this.b=e},
dRi:function dRi(d){this.a=d},
dRw:function dRw(d){this.a=d},
dRu:function dRu(d){this.a=d},
dRv:function dRv(d){this.a=d},
dRx:function dRx(){},
dRy:function dRy(d,e){this.a=d
this.b=e},
dRq:function dRq(d,e){this.a=d
this.b=e},
dRr:function dRr(d,e,f){this.a=d
this.b=e
this.c=f},
dRp:function dRp(d,e,f){this.a=d
this.b=e
this.c=f},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRt:function dRt(d,e){this.a=d
this.b=e},
az2:function az2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdj:function bdj(d,e,f){this.c=d
this.d=e
this.a=f},
d3x:function d3x(){},
d3y:function d3y(){},
aca:function aca(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d3V:function d3V(){},
d3U:function d3U(d){this.a=d},
Z2:function Z2(d,e,f){this.c=d
this.d=e
this.a=f},
az7:function az7(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d3R:function d3R(d){this.a=d},
d3S:function d3S(d,e,f){this.a=d
this.b=e
this.c=f},
d3T:function d3T(d,e){this.a=d
this.b=e},
d3P:function d3P(d,e){this.a=d
this.b=e},
d3N:function d3N(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3I:function d3I(d){this.a=d},
d3O:function d3O(d){this.a=d},
d3K:function d3K(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3J:function d3J(d){this.a=d},
Z_:function Z_(d,e,f){this.c=d
this.d=e
this.a=f},
az4:function az4(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d3u:function d3u(d){this.a=d},
d3t:function d3t(d,e){this.a=d
this.b=e},
d3v:function d3v(d){this.a=d},
d3s:function d3s(d,e){this.a=d
this.b=e},
d3w:function d3w(d){this.a=d},
d3r:function d3r(d,e){this.a=d
this.b=e},
d3n:function d3n(d){this.a=d},
d3o:function d3o(d){this.a=d},
d3p:function d3p(d,e){this.a=d
this.b=e},
d3q:function d3q(d){this.a=d},
Pz:function Pz(d,e,f){this.c=d
this.d=e
this.a=f},
aza:function aza(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d47:function d47(d){this.a=d},
d48:function d48(d){this.a=d},
d49:function d49(d){this.a=d},
d4a:function d4a(d){this.a=d},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4c:function d4c(d){this.a=d},
d4e:function d4e(d){this.a=d},
d4d:function d4d(d){this.a=d},
Z4:function Z4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az8:function az8(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d43:function d43(d,e){this.a=d
this.b=e},
d44:function d44(d,e){this.a=d
this.b=e},
d3W:function d3W(d,e,f){this.a=d
this.b=e
this.c=f},
d3X:function d3X(d){this.a=d},
d3Y:function d3Y(){},
d42:function d42(){},
d3Z:function d3Z(d,e){this.a=d
this.b=e},
d4_:function d4_(d,e){this.a=d
this.b=e},
d40:function d40(d,e){this.a=d
this.b=e},
d41:function d41(d,e){this.a=d
this.b=e},
ac8:function ac8(d,e){this.c=d
this.a=e},
d3m:function d3m(d){this.a=d},
YZ:function YZ(d){this.a=d},
az3:function az3(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z5:function Z5(d,e){this.c=d
this.a=e},
az9:function az9(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d46:function d46(d){this.a=d},
d45:function d45(d){this.a=d},
bdk:function bdk(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hH0(){var x,w=$.pz(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.h3(v)},
Np(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Np=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Np)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Np)
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
return A.i($async$Np,w)},
a7_(d){return B.hH1(d)},
hH1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a7_)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cI,null),$async$a7_)
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
return A.i($async$a7_,w)},
UW(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Np(),$async$UW)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.T(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a7_(s),$async$UW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UW,w)},
UX(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UX=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UX)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.S(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c9j(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hH0()
t=A.S(u).k("M<1,a6<m,aD>>")
r=A.C(new A.M(u,new B.c9k(s),t),t.k("ak.E"))
x=6
return A.b(B.Np(),$async$UX)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a7_(q),$async$UX)
case 7:x=8
return A.b(B.a70(r,u,g,s),$async$UX)
case 8:v=new A.boU(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UX,w)},
ape(d){var x=0,w=A.j(y.y),v,u,t
var $async$ape=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Np(),$async$ape)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ape,w)},
c9l(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c9l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Np(),$async$c9l)
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
return A.i($async$c9l,w)},
a70(d,e,f,g){return B.hH2(d,e,f,g)},
hH2(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a70=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apc("media",r,new B.c9i(s,e,g),f,q),$async$a70)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UW(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a70)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UW(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a70)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.UW(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a70)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a70,w)},
Ex(d,e,f){return B.hH3(d,e,f)},
hH3(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ex=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ex)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ape(b3),$async$Ex)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.kx,null,g),$async$Ex)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ape(b3),$async$Ex)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Np(),$async$Ex)
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p0(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aao(a8.a,b0,"media",a8.d,a9).CC(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZB(k,n,o,s,b7),$async$Ex)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
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
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
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
a8=A.p0(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aao(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ex)
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
a0.n(0,"lastUsedAt",new A.T(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7_(e),$async$Ex)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ex,w)},
c9j:function c9j(){},
c9k:function c9k(d){this.a=d},
c9i:function c9i(d,e,f){this.a=d
this.b=e
this.c=f},
aQj(){var x=0,w=A.j(y.H),v,u
var $async$aQj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hRY=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQj)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQj)
case 3:u=$.h1N
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQj)
case 4:$.h1N=$.i_u=$.i_v=null
return A.h(null,w)}})
return A.i($async$aQj,w)},
fsS(d){var x=0,w=A.j(y.H),v,u
var $async$fsS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6v){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fsT(new A.bY(u,y.aY))
x=3
return A.b(u.it(0,C.hR,new B.fsU()),$async$fsS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fsS,w)},
i_s(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hGL(x):x},
h1R(d){var x=0,w=A.j(y.T),v,u,t
var $async$h1R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b6(t,13))
if(C.a.a0(u,"WR")){v=B.apg(u)
x=1
break}v=B.fXD(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1R,w)},
h1Q(d){var x=0,w=A.j(y.T),v,u,t
var $async$h1Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b6(t,14))
if(C.a.a0(u,"WR")){v=B.aph(u)
x=1
break}v=B.fXD(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1Q,w)},
fL3(d){var x=0,w=A.j(y.T),v
var $async$fL3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aph(d),$async$fL3)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fL3,w)},
bB6(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bB6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h1Q(d),$async$bB6)
case 3:q=f
if(q==null){x=1
break}t=C.S.aL(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB6,w)},
fh7(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fh7=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UQ(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BH(d.anY(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fh7,w)},
Gr(d,e,f){return B.i1S(d,e,f)},
i1S(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gr=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h1R(a1),$async$Gr)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aL(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b6(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hu7().aDY(D.dpG,null),$async$Gr)
case 4:l=d.h1N=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axU(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.ftp(f,k,new B.ftq(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7q(0,new B.X6(r,"offer")),$async$Gr)
case 5:d=l
x=7
return A.b(l.akM(0),$async$Gr)
case 7:x=6
return A.b(d.a7i(0,a4),$async$Gr)
case 6:x=8
return A.b(B.fsS(l),$async$Gr)
case 8:x=9
return A.b(l.aoI(),$async$Gr)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i_s(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.api(m,h),$async$Gr)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hcP(h)
case 11:v=new A.bob(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gr,w)},
fsT:function fsT(d){this.a=d},
fsU:function fsU(){},
ftq:function ftq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftp:function ftp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fto:function fto(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i3N(d){switch(d){case"new":return D.ej_
case"checking":return D.ej0
case"connected":return D.ej2
case"completed":return D.ej1
case"failed":return D.ej4
case"disconnected":return D.ej5
case"closed":return D.aMx
case"count":return D.ej3}return D.aMx},
i3O(d){switch(d){case"new":return D.aMy
case"gathering":return D.ej6
case"complete":return D.a6v}return D.aMy},
ie3(d){switch(d){case"stable":return D.ej7
case"have-local-offer":return D.ej8
case"have-local-pranswer":return D.eja
case"have-remote-offer":return D.ej9
case"have-remote-pranswer":return D.ejb
case"closed":return D.aME}return D.aME},
ich(d){switch(d){case"new":return D.aMB
case"connecting":return D.aMC
case"connected":return D.aMD
case"closed":return D.a6w
case"disconnected":return D.aMA
case"failed":return D.aMz}return D.a6w},
a9k:function a9k(d,e){this.a=d
this.b=e},
Op:function Op(d,e){this.a=d
this.b=e},
X5:function X5(d,e){this.a=d
this.b=e},
Oo:function Oo(d,e){this.a=d
this.b=e},
F0:function F0(d,e){this.a=d
this.b=e},
ckg:function ckg(){},
fZn(d){var x=new B.F_()
x.a=d
x.b=!0
return x},
F_:function F_(){this.b=this.a=$},
a9j:function a9j(){},
atw:function atw(){},
X6:function X6(d,e){this.a=d
this.b=e},
fXz(){var x=0,w=A.j(y.H)
var $async$fXz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fXz,w)},
fXC(d,e,f){var x=0,w=A.j(y.T),v
var $async$fXC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mH))){v=null
x=1
break}v=B.fLj(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXC,w)},
hcP(d){var x,w=F.ace.a4c(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cL.gct().aK(x)}return C.cL.gct().aK(w)},
hGK(d){var x,w,v=C.cG.aK(d)
try{x=C.ch.cB(0,F.acd.bcM(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
fXD(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hGK(C.a.b6(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b6(t,w.length)
try{v=C.ch.cB(0,C.cG.aK(x))
return v}catch(u){return x}}return null},
hGL(d){var x,w,v,u,t,s=A.a([],y.s)
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
hGM(){var x,w=$.pz(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.h3(v)},
aZH(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZH)
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
return A.i($async$aZH,w)},
c91(d,e){return B.hGN(d,e)},
hGN(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c91=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cI,null),$async$c91)
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
return A.i($async$c91,w)},
aZK(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZH(d),$async$aZK)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZK,w)},
aZJ(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hGM()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c91(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gct().aK(t),"usesRemaining",999999,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZJ)
case 3:if(!h){v=null
x=1
break}v=new A.a06("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZJ,w)},
aZI(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZH(o),$async$aZI)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ch.cB(0,C.cG.aK(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZI,w)},
c92(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c92=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bC2("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cI),$async$c92)
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
return A.i($async$c92,w)},
aZL(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Is(),$async$aZL)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZL,w)},
ap9(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ap9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap9)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZL(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap9,w)},
ap7(d,e){var x=0,w=A.j(y.H)
var $async$ap7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap7)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ap7)
case 2:return A.h(null,w)}})
return A.i($async$ap7,w)},
a6S(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6S=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6S)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Is(),$async$a6S)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6R(s),$async$a6S)
case 5:x=6
return A.b(B.ap7(f,u),$async$a6S)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
a6T(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6T=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6T)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Is(),$async$a6T)
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
return A.b(B.ap7(g,q),$async$a6T)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6R(u),$async$a6T)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6T,w)},
a6U(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6U)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Is(),$async$a6U)
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
s=B.aZE(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6U)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.T(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6U)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6U,w)},
c93(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c93=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c93)
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
return A.i($async$c93,w)},
It(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$It=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c93(d),$async$It)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZL(t),$async$It)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ap8(d),$async$It)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZE(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ap8(d),$async$It)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$It,w)},
ap8(d){var x=0,w=A.j(y.H)
var $async$ap8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap8)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ap8)
case 2:return A.h(null,w)}})
return A.i($async$ap8,w)},
aZM(){var x,w=$.pz(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.h3(v)},
a6V(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fXE(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c96(d){return B.hGP(d)},
hGP(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c96=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6V(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c96)
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
return A.i($async$c96,w)},
apb(d,e){return B.hGQ(d,e)},
hGQ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6V(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cI,null),$async$apb)
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
return A.i($async$apb,w)},
c98(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c98=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apb(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c98)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c98,w)},
c97(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c97=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apb(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c97)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c97,w)},
c99(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c99=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apb(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c99,w)},
c9a(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c9a=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fXE(d)){v=null
x=1
break}x=3
return A.b(B.c96(d),$async$c9a)
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
return A.i($async$c9a,w)},
a71(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a71=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a71)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a71)
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
return A.i($async$a71,w)},
apf(d){return B.hH4(d)},
hH4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$apf)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cI,null),$async$apf)
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
return A.i($async$apf,w)},
apg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d1(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$apg)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a71(),$async$apg)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ch.cB(0,C.cG.aK(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.T(Date.now(),0,!1).a6().ac())
J.aG(s,j,o)
x=9
return A.b(B.apf(s),$async$apg)
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
return A.i($async$apg,w)},
api(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$api=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$api)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a71(),$async$api)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aK(C.a.i(e))
q.n(0,"answer",C.cL.gct().aK(r))
q.n(0,"answerAt",new A.T(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.apf(u),$async$api)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$api,w)},
aph(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aph=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aph)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a71(),$async$aph)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ch.cB(0,C.cG.aK(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aph,w)},
aoc(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.m3(e),$async$aoc)
case 3:r=g
u=4
x=7
return A.b(r.hw(C.h2),$async$aoc)
case 7:q=g
o=q
o=o==null?null:J.eX(J.vq(o))
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
return A.i($async$aoc,w)},
iag(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aX(C.o.u(w),5,"0")
return v},
fJy(d){return B.iai(d)},
iai(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fJy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").KM(d,3600),$async$fJy)
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
return A.i($async$fJy,w)},
D_(d,e,f,g,h,i){var x=null
return B.iaf(d,e,f,g,h,i)},
iaf(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D_=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hcS(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fXG(r),$async$D_)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fJy(o),$async$D_)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6W(r),$async$D_)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPM)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LM(A.a([],g))
x=15
return A.b(d.f_(0,A.aul("GET",A.cE(n,0,null))).d8(0,C.Fr),$async$D_)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6W(r),$async$D_)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kk(d)
u=19
case 22:x=24
return A.b(d.C(),$async$D_)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZO(r,k),$async$D_)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$D_)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.UQ(r)
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
return A.b(B.a6W(r),$async$D_)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D_,w)},
aQ2(d){return B.iah(d)},
iah(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQ2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").W(0,d),$async$aQ2)
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
return A.i($async$aQ2,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[146]
O=c[40]
F=c[239]
I=c[138]
P=c[219]
E=c[212]
G=c[87]
Q=c[184]
R=c[139]
S=c[217]
K=c[243]
L=c[248]
B=a.updateHolder(c[21],B)
D=c[246]
T=c[183]
M=c[202]
U=c[65]
V=c[122]
W=c[71]
X=c[55]
N=c[86]
Y=c[247]
B.ckh.prototype={
aDY(d,e){return this.cKs(d,e)},
cKs(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.km(A.cz(t)))
t=J.k(u)
v=B.hLE(C.cL.gct().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDY,w)}}
B.b3V.prototype={
byh(d){var x=this,w=x.w
w.onclose=A.ho(new B.ckc(x))
w.onopen=A.ho(new B.ckd(x))
w.onmessage=A.ho(new B.cke(x))
w.onbufferedamountlow=A.ho(new B.ckf(x))},
gdc(d){return this.x},
ah2(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ah2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.F_()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fZn(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ah2)
case 8:v=t.fZn(s.ano(f,0,null))
x=1
break
case 7:case 4:v=B.fZn(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah2,w)}}
B.b3W.prototype={
byi(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cki(x)))
w.addEventListener("icecandidate",A.ho(new B.ckj(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.ckk(x)))
w.onicegatheringstatechange=A.ho(new B.ckl(x))
w.addEventListener("signalingstatechange",A.ho(new B.ckm(x)))
if(!$.h5y())w.addEventListener("connectionstatechange",A.ho(new B.ckn(x)))
w.addEventListener("negotiationneeded",A.ho(new B.cko(x)))
w.addEventListener("track",A.ho(new B.ckp(x)))},
akM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.km(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akM)
case 3:t=f
v=new B.X6(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akM,w)},
a7i(d,e){return this.bnF(0,e)},
bnF(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7i)
case 2:return A.h(null,w)}})
return A.i($async$a7i,w)},
a7q(d,e){return this.bnV(0,e)},
bnV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7q)
case 2:return A.h(null,w)}})
return A.i($async$a7q,w)},
aoI(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X6(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoI,w)},
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
B.ac9.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.Z1.prototype={
S(){return new B.az6()},
gde(){return this.c}}
B.az6.prototype={
Z(){this.a1()
this.adM()},
adM(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZF(u.e,u.c),$async$adM)
case 2:t=e
if(v.c!=null)v.m(new B.d3F(v,t))
return A.h(null,w)}})
return A.i($async$adM,w)},
Q7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ap4(t.e,t.c,!1),$async$Q7)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f0s)
x=1
break}x=4
return A.b(B.a6Q(u.a.c,"individual"),$async$Q7)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5N(A.ea(new B.d3C(u),!1,null,y.H)),$async$Q7)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
J8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fqZ(o),$async$J8)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6U(o.e,r,s,q),$async$J8)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eYv)
x=1
break}x=5
return A.b(B.a6Q(u.a.c,"member"),$async$J8)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5N(A.ea(new B.d3E(u),!1,null,y.H)),$async$J8)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J8,w)},
xY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6P(t.e,o,t.f,t.r,t.w,s),$async$xY)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6Q(u.a.c,"org_owner"),$async$xY)
case 4:x=5
return A.b(B.ap9(u.a.c),$async$xY)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.frt(o),$async$xY)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6S(s,t,o,q.c),$async$xY)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eYs)
x=1
break}x=10
return A.b(B.ap9(u.a.c),$async$xY)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5N(A.ea(new B.d3D(u),!1,null,y.H)),$async$xY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xY,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jj:C.pM,q=B.fXB(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fS,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fjn,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h8,t,t,t),C.aB,D.fCt,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZZ,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lG(new B.d3H(),t),C.O,w,C.dZ,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acC(C.eT,C.azf,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gce2(),t),C.ac],v))
p.push(new B.acC(C.oX,C.a2n,"Team Member","Sign in with your organization access code + password",u.gceU(),t))
p.push(C.ac)
p.push(new B.acC(C.alJ,C.a3V,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcep(),t))
return A.c6(t,r,A.bm(!0,A.cc(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiZ,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acC.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ep,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ou,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BM,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bP,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBE.prototype={}
B.aEQ.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oG(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b6(x,w+1).toLowerCase())},
gapm(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ah(){var x,w=this,v=A.U(y.N,y.z)
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
bce(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIX(d){return this.bce(null,d)},
aDJ(d){return this.bce(d,null)}}
B.UK.prototype={
S(){return new B.aD0(new A.cs(null,y.A))},
gde(){return this.c}}
B.aD0.prototype={
Z(){this.a1()
this.adN()},
adN(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BG(u.a.c),$async$adN)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dQs(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adN,w)},
adO(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fO(new A.fF(s)),$async$adO)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.f1m)
case 1:return A.h(v,w)}})
return A.i($async$adO,w)},
Zv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoc(s.d,4),$async$Zv)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_my_code_"+m+".png"),$async$Zv)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zv,w)},
ahv(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9Y("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahv,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jj:C.pM,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lL
else if(q.e==null)x=A.av(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2P,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aiz,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cc(A.x(A.a([x,C.mO,w,C.kH,new A.ey(A.p(p,A.pT(p,p,!1,B.hGG(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bP,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kH,A.B(A.a([A.E(A.et(N.C9,C.Uh,q.gc73(),p),1),C.at,A.E(A.dn(C.yL,C.a8R,q.gc74(),A.bo(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.et(M.a1e,D.fye,q.gctK(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MM,p,p,C.ag)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.UO.prototype={
S(){return new B.aD3(new A.ar(C.as,$.aw()),A.jU(!0,null,!0,!0,null,null,!1))}}
B.aD3.prototype={
Z(){var x,w
this.a1()
x=this.a.e
w=B.Ir(x==null?"":x)
if(w!=null)this.d.saW(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zw(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ir(u.d.a.a)
if(t==null){u.m(new B.dRB(u))
x=1
break}u.m(new B.dRC(u))
s=u.a
r=s.c
x=3
return A.b(B.a6O(s.d,new B.dRD(u),t,r),$async$Zw)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dRE(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zw,w)},
a1H(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1H=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dRF(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rs(r.a.c,q),$async$a1H)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dRG(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahD(p,m,l,j,k),$async$a1H)
case 8:o=e
if(r.c!=null)r.m(new B.dRH(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dRI(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dRJ(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1H,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.af0:D.acN,h=j?D.ags:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.ae3:C.aL
i=[i,e,h,g,f,j?C.fd:C.bS]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNz,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ep,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fE,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2P,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.um(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biF()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MG,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dRK(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m8,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lp(l.a.d,4)
m=A.C(new A.M(m,new B.dRL(x,new A.aG3(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lS,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ek,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eX1)
else q.push(A.X(C.lt,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bd,new A.o(u,k,s,t,k,k,C.n),C.iI,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cc(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bw3,k,k,C.ag),1)
u=l.f?k:l.gctL()
t=i[3]
s=i[1]
q=A.n(16)
s=A.et(M.a1e,D.fzf,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc75()
t=A.bo(C.aE,k,k,0,C.c,k,C.ni,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c6(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mG(new B.dRM(),A.x(A.a([e,new A.D(D.bvz,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rU:D.fxD,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.YD,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biF.prototype={
oC(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hi(C.bw,v.length),C.aN)}}
B.UL.prototype={
S(){return new B.aD1()}}
B.aD1.prototype={
Z(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.ar(new A.bb(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.ar(C.as,v)},
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
adP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dQt(r))
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
return A.b(B.a6T(p,m,n,o,C.a.i(l).length===0?null:l),$async$adP)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.f0Y)
s=[1]
x=4
break}p.K(y.q).f.U(D.f_B)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dQu(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adP,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jj:C.pM,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fqe,s,s,s,1,s,!0),p=A.p(s,D.bnU,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GS,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bUx,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bUs,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUI,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc76()
u=A.bo(C.aE,s,s,s,s,C.fT,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rU:C.aSs,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abR.prototype={}
B.bve.prototype={
a4s(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cg(r.anY()))
x=3
return A.b(B.R2(t,s),$async$a4s)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4s,w)},
gde(){return this.a}}
B.Nn.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Z0.prototype={
S(){return new B.az5(new A.ar(C.as,$.aw()),A.jU(!0,null,!0,!0,null,null,!1))}}
B.az5.prototype={
Z(){this.a1()
$.aW.x1$.push(new B.d3B(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c7c(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a13(d),u=x.a.c,t=u?C.ih:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jj:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fS,32)],n),l=A.p(w,T.aol,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cC,16)],n),C.ap8,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.um(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buT()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.FC,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.b_4),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d3z(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m8,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nG,new B.d3A(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cS(Q.Kz,A.c0(new A.D(C.xX,A.x(A.a([l,C.aR,k,C.O,j,C.dZ,i,C.dZ,A.B(A.a([f,C.at,A.E(A.c0(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ecV,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc7b(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Ox,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MO,C.d1,w,w,w)}}
B.buT.prototype={
oC(d,e){return e.akH(e.a.toUpperCase())}}
B.UM.prototype={
S(){return new B.aD2(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aD2.prototype={
Z(){var x=this
x.a1()
x.tL()
x.w=A.dv(C.jp,new B.dRz(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UV()
this.a2()},
a0z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nm(u.a.c),$async$a0z)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AH(u.a.c),$async$a0z)
case 4:u.m(new s.dQX(u,e))
u.i8("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0z,w)},
tL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nm(u.a.c),$async$tL)
case 3:t=e
x=4
return A.b(B.AH(u.a.c),$async$tL)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dQY(u,s))
if(t>0)u.i8("Received "+A.u(t)+" file(s) via My Code.")
u.Nw(u.d)
B.BG(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tL,w)},
Nw(d){return this.bCg(d)},
bCg(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6Y(r,u.a.c),$async$Nw)
case 8:p=f
if(u.c==null){x=1
break}new B.dQw(u,r,p).$0()
u.c.eg()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mH))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UT(r,u.a.c),$async$Nw)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AH(u.a.c),$async$Nw)
case 12:u.m(new o.dQx(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nw,w)},
NT(d){return this.bIA(d)},
bIA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6Y(d,u.a.c),$async$NT)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dQC(u,d,t))
x=6
return A.b(A.fO(new A.fF(t)),$async$NT)
case 6:u.i8("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fO(new A.fF(r.toUpperCase())),$async$NT)
case 7:u.i8("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NT,w)},
i8(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tM(d,e){return this.cEr(d,e)},
cEr(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dRn(r,e))
u=3
x=6
return A.b(d.$0(),$async$tM)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dRo(r))
$.eU.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tM,w)},
gaV3(){var x=this.a
return x.f||x.r||x.w},
I2(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaV3()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c9_(s,n,r,q,o,t),$async$I2)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i8("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fD1(o,u.a.c),$async$I2)
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
return A.b(B.D1(s,o,r,q,n,t),$async$I2)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I2,w)},
a_D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap9(u.a.c),$async$a_D)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i8("No organization portal found.")
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
return A.b(A.a5(t,!1).cm(A.ea(new B.dQU(u,r,q),!1,null,y.H)),$async$a_D)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_D,w)},
a0K(d){return this.cne(d)},
cnd(){return this.a0K(1)},
cne(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaV3()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ap6(u.a.c),$async$a0K)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0K,w)},
abM(d,e,f){return this.bZj(d,e,f)},
bZj(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8(e)
x=1
break}x=3
return A.b(u.tM(new B.dQR(u,d,null,e,f),"Uploading\u2026"),$async$abM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abM,w)},
bCo(){B.hrv(!1,new B.dQA(this))
return},
csh(){this.m(new B.dR1(this))},
ayf(){var x=0,w=A.j(y.H),v=this
var $async$ayf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCo()
return A.h(null,w)}})
return A.i($async$ayf,w)},
abI(){var x=0,w=A.j(y.H),v=this
var $async$abI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dQG(v),"Importing\u2026"),$async$abI)
case 2:return A.h(null,w)}})
return A.i($async$abI,w)},
S9(d){return this.cDQ(d)},
cDQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mH)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cm(A.ea(new B.dRk(u,d),!1,null,y.H)),$async$S9)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qv)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).cm(A.ea(new B.dRl(u,d),!1,null,y.H)),$async$S9)
case 8:x=1
break
case 7:x=u.c_0(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).cm(A.ea(new B.dRm(u,d),!1,null,y.H)),$async$S9)
case 11:x=1
break
case 10:u.i8("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
c_0(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oG(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHD,C.a.b6(x,w+1).toLowerCase())},
aff(d){return this.ce6(d)},
ce6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aff=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mH)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cm(A.ea(new B.dQS(u,d),!1,null,y.H)),$async$aff)
case 5:x=1
break
case 4:u.m(new B.dQT(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aff,w)},
Rv(d){return this.cve(d)},
cve(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pb(t,s.c,s.f),$async$Rv)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dRd(u,d),"Preparing QR\u2026"),$async$Rv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Rv,w)},
ahV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dRe(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dRf(q),s),s.k("J.E"))
if(r.length===0){u.i8("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Rv(r),$async$ahV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahV,w)},
ahO(d){return this.cuM(d)},
cuM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a13(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dR7(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahO)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S9(d)
break
case"qr":u.Rv(A.a([d],y.r))
break
case"send_my_code":u.ceJ(A.a([d],y.r))
break
case"save":u.ah9(d)
break
case"delete":u.IU(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahO,w)},
Xp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQD(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQE(q),s),s.k("J.E"))
if(r.length===0){u.i8("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pb(t,s.c,s.f),$async$Xp)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dQF(u,r),"Preparing file\u2026"),$async$Xp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xp,w)},
agl(d){return this.clz(d)},
clz(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hse(d,!1),$async$agl)
case 3:s=f
r=s==null
q=B.a6V(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i8("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agl,w)},
afl(){var x=0,w=A.j(y.H),v=this,u
var $async$afl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fKD(u,v.a.c),$async$afl)
case 2:return A.h(null,w)}})
return A.i($async$afl,w)},
bCn(){B.hrv(!1,new B.dQz(this,null))
return},
J7(d,e){return this.ceK(d,e)},
b0c(d){return this.J7(null,d)},
ceJ(d){return this.J7(d,null)},
ceK(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dQV(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xd.c7().anh(!0,C.a_t,!1),$async$J7)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tM(new B.dQW(l,s,r),"Preparing\u2026"),$async$J7)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
s.i8("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i8("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bDb(p,l,e,s.a.c),$async$J7)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J7,w)},
Ij(d){return this.bZ6(d)},
bZ6(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ij=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hGF(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0c(t),$async$Ij)
case 8:x=6
break
case 7:u.i8("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i8("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tM(new B.dQP(u,d),"Receiving video\u2026"),$async$Ij)
case 11:x=1
break
case 10:x=12
return A.b(u.tM(new B.dQQ(u,d),"Receiving\u2026"),$async$Ij)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ij,w)},
Ea(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ea=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CW()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agl(t),$async$Ea)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ij(s),$async$Ea)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).cm(A.ea(new B.dR_(u),!1,null,y.N)),$async$Ea)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tL(),$async$Ea)
case 10:x=1
break
case 9:x=11
return A.b(u.Ij(C.a.i(r)),$async$Ea)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ea,w)},
ah9(d){return this.cqQ(d)},
cqQ(d){var x=0,w=A.j(y.H),v=this
var $async$ah9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dQZ(v,d),"Saving\u2026"),$async$ah9)
case 2:return A.h(null,w)}})
return A.i($async$ah9,w)},
IU(d){return this.bKU(d)},
bKU(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l7(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IU)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c92(t),$async$IU)
case 6:case 5:s=d.a
x=7
return A.b(B.Ew(u.a.c,s),$async$IU)
case 7:u.r.W(0,s)
x=8
return A.b(u.tL(),$async$IU)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IU,w)},
ai0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a13(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dRj(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ai0)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afl()
break
case"import":u.abI()
break}case 1:return A.h(v,w)}})
return A.i($async$ai0,w)},
c79(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mH))return C.qc
if(C.a.a0(x,"image/")||d.my(D.Qv))return C.u8
if(C.a.t(x,"pdf"))return E.O2
return D.amb},
B(d){var x,w,v=this,u=null,t=B.a13(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GK,u,u,u,new B.dRu(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bO5,u,u,u,v.e?u:v.gceq(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcsg()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bIp:E.amA,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a1b,u,u,u,v.e?u:v.gc7a(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.ob,u,u,u,v.e?u:v.gb1k(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPO,u,u,u,v.e?u:new B.dRv(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lG(new B.dRw(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lB(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.az2(C.jv,s,!0,t,w?u:v.gcvf(),u),1)
x.push(new A.D(D.bul,A.mG(new B.dRx(),A.B(A.a([s,C.at,A.E(new B.az2(C.vV,"Export",!1,t,w?u:v.gbOC(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iJ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdj(t,v.e?u:v.gb1k(),u)
else s=A.kd(!0,u,u,new B.dRy(v,t),s,u,D.bud,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.az2.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aE,t,t,0,C.c,t,C.vD,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vD,t,new A.b7(s,C.Y),new A.az(v,1,C.q,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bdj.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mG(new B.d3x(),new A.D(E.Zx,A.x(A.a([A.mG(new B.d3y(),A.p(x,A.X(C.yh,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.az,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ey,C.im,x,x,new A.bq(0.86,1,w),s),C.dZ,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dZ,A.dn(C.ob,D.fCM,this.d,A.bo(C.aE,x,x,x,C.c,x,C.Zs,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.Ba,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aca.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.my(D.mH))p=D.df8
else{p=C.a.a0(p,"image/")||i.my(D.Qv)
n=y.O
p=p?A.a([C.cT,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapm()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mH))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fR,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mH)))l.push(A.fVi(C.aE,!1,j,j,j,!1,j,j,new B.d3U(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o9,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mG(new B.d3V(),new A.D(C.e7,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Z_,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ah),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.Z2.prototype={
S(){return new B.az7()},
gde(){return this.c}}
B.az7.prototype={
Z(){this.a1()
this.xO()},
q(){B.hGU(this.e)
this.a2()},
xO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rs(o.c,o.d),$async$xO)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hGX(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hGW(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d3R(s))
x=1
break}s.m(new B.d3S(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d3T(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xO,w)},
a1G(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rs(t.c,t.d),$async$a1G)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.eZ1)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahD(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1G)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1G,w)},
bZ_(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.A,v,new B.d3P(w,t),C.h0,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gan(t))x=A.fQ(t,C.A,v,new B.d3Q(w),C.h0,C.dv,!0,v,!1,v,v)
else return C.bI
return A.uv(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a13(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Ca,u,u,u,v.gb5a(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.En
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.Ca,D.flE,v.gb5a(),A.bo(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bZ_()}return A.c6(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Z_.prototype={
S(){return new B.az4(A.air(),C.bx,C.bx)},
gde(){return this.c}}
B.az4.prototype={
Z(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fx(w,A.a3(w).k("fx<1>")).ip(new B.d3u(v))
x.gcRP().ip(new B.d3v(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a3(x).k("fx<1>"))}if(x==null)x=C.b5d
x.ip(new B.d3w(v))
v.xO()},
xO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rs(p.c,p.d),$async$xO)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d3n(s))
x=1
break}x=8
return A.b(s.d.C5(0,new A.a39(r,s.a.d.c)),$async$xO)
case 8:if(s.c==null){x=1
break}s.m(new B.d3o(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d3p(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xO,w)},
Zx(){var x=0,w=A.j(y.H),v=this,u
var $async$Zx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$Zx)
case 5:x=3
break
case 4:x=6
return A.b(u.is(0),$async$Zx)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zx,w)},
aSV(d){var x=d.a
return C.a.aX(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aX(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a13(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.En
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJo,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Ox,C.n),o,88,o,o,o,o,o,88)
t=A.l1(C.aE,o,o,m,0,new B.d3q(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aSV(p.w)+" / "+p.aSV(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aE,o,o,o,o,D.eVu,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yr:C.iM,o,o,o,o,o)
x=A.x(A.a([u,C.kH,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc7d(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c6(v,w,A.av(new A.D(C.rc,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pz.prototype={
S(){return new B.aza()},
gde(){return this.c}}
B.aza.prototype={
Z(){this.a1()
this.Pu()},
Pu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fXC(o.c,o.d,new B.d47(s)),$async$Pu)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d48(s))
x=1
break}s.e=r
q=O.i2K(r)
if(q==null){s.m(new B.d49(s))
x=1
break}s.d=q
q.aQ(0,s.gb00())
x=8
return A.b(q.io(0).d8(0,C.r8),$async$Pu)
case 8:if(s.c==null){x=1
break}s.m(new B.d4a(s))
x=9
return A.b(q.pW(0),$async$Pu)
case 9:q.tn(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d4b(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pu,w)},
ccI(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d4c(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CR(0,x.gb00())
w=x.d
if(w!=null)w.q()
B.icA(x.e)
x.a2()},
adS(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZN(u.c,u.d),$async$adS)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adS,w)},
B(d){var x,w,v,u=this,t=null,s=B.a13(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p3,t,t,t,u.gc77(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.En
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahW(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fL(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.Ab(s,t),A.aC(t,A.Db(A.p(t,A.X(q?I.yr:C.iM,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bP,t,t,t),C.bd,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d4e(u),t,t,t,t,t,t,!1,C.a6)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Z4.prototype={
S(){return new B.az8(new A.cs(null,y.A))}}
B.az8.prototype={
gcE9(){var x,w,v=this.a
if(v.e!==D.RT)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b6(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDO(){var x,w,v=this.a
if(v.e!==D.zo)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b6(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a1()
x=v.gcE9()
if(x!=null){v.Qw(x)
v.e=A.dv(R.Fu,new B.d43(v,x))}w=v.gcDO()
if(w!=null){v.Qv(w)
v.f=A.dv(C.fZ,new B.d44(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qv(d){return this.cjL(d)},
cjL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ape(d),$async$Qv)
case 3:t=f
x=4
return A.b(B.c9l(d),$async$Qv)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d3W(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qv,w)},
Qw(d){return this.cjM(d)},
cjM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fL3(d),$async$Qw)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bB6(t),$async$Qw)
case 4:if(u.c==null){x=1
break}u.m(new B.d3X(u))
u.c.K(y.q).f.U(D.aPn)
case 1:return A.h(v,w)}})
return A.i($async$Qw,w)},
gc32(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc78(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1s(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CW()){t=u.c
if(t!=null)t.K(y.q).f.U(D.f17)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).cm(A.ea(new B.d3Y(),!1,null,y.N)),$async$a1s)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bB6(s),$async$a1s)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aPn)
case 1:return A.h(v,w)}})
return A.i($async$a1s,w)},
a9B(d){return this.bIB(d)},
bIB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fO(new A.fF(C.d.aG(t,", "))),$async$a9B)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9B,w)},
adQ(d){return this.bIl(d)},
bIl(d){var x=0,w=A.j(y.H),v=this
var $async$adQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fO(new A.fF(v.a.c)),$async$adQ)
case 2:if(d.e!=null)d.K(y.q).f.U(D.eZv)
return A.h(null,w)}})
return A.i($async$adQ,w)},
a1n(d){return this.cqS(d)},
cqS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoc(s.d,4),$async$a1n)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_doc_share_qr.png"),$async$a1n)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1n,w)},
gaWb(){var x,w=this.a
if(w.e!==D.HV)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b6(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b6(x,13))
return null},
a9y(d){return this.bIu(d)},
bIu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWb()
if(t==null){x=1
break}x=3
return A.b(A.fO(new A.fF(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9y)
case 3:if(d.e!=null)d.K(y.q).f.U(D.f07)
case 1:return A.h(v,w)}})
return A.i($async$a9y,w)},
adR(){var x=0,w=A.j(y.H),v=this,u
var $async$adR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UV(),$async$adR)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adR,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a13(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HV&&i!==D.RT&&i!==D.zo
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HV||t===D.RT||t===D.zo?l:A.aH(l,l,l,l,C.l4,l,l,l,m.gaZa(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc32(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HV){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc78(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bTB,D.fuS,new B.d3Z(m,d),l)],p))}if(m.a.e===D.HV&&m.gaWb()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bQ7,D.frC,new B.d4_(m,d),l)],p))
if(m.a.e===D.zo){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Eq:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}if(m.a.e===D.RT){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Eq:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l),C.ac,A.dn(D.bLS,D.fxW,m.gcrf(),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.os(i,A.c6(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.et(N.C9,C.Uh,new B.d40(m,d),l),1),C.at,A.E(A.dn(C.yL,C.a8R,new B.d41(m,d),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zX,m.gaZa(),A.bo(C.aK,l,l,l,l,C.fT,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d42(),y.C)}}
B.ac8.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cc(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.em(A.a([A.bG(C.wF,new B.d3m(d),x)],u),x,x,C.mY,v,x,x,x,x,D.fkF,x)}}
B.YZ.prototype={
S(){return new B.az3(A.zi(C.xE,C.nN,C.um))}}
B.az3.prototype={
q(){this.d.q()
this.a2()},
awS(d){var x,w,v,u,t
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
return A.c6(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fs5,x,x,x,1,x,!0),C.w,A.zh(this.d,C.bW,this.gawR()),x,!1,!1,x,x)}}
B.Z5.prototype={
S(){return new B.az9(A.zi(C.xE,C.nN,C.um))},
gde(){return this.c}}
B.az9.prototype={
c_2(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.S3("text/plain"),$async$afI)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.f11)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afI,w)},
aao(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aao=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hse(p,!0),$async$aao)
case 3:t=e
p=t==null
s=B.a6V(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.eYC)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aao,w)},
q(){this.d.q()
this.a2()},
awS(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_2(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.ant,v,v,v,w.gbO8(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1i,v,v,v,w.gch8(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.ri:P.NO,v,v,v,v,v),v,v,v,new B.d46(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fyN,v,v,v,1,v,!0)
u=A.zh(w.d,C.bW,w.gawR())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eiG],s),v),v,!1,!1,v,v)}}
B.bdk.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oP
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oP:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.ZD,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.eA,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a9k.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Op.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.X5.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Oo.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.F0.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.ckg.prototype={}
B.F_.prototype={}
B.a9j.prototype={}
B.atw.prototype={}
B.X6.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jn)","m(jn)","UM(Y)","~()","Z1(Y)","G(G,jn)","Pz(Y)","~(m1)","cr(F_)","aA<jn?>(@)","UK(Y)","UO(Y)","D(jn)","jn(@)","a6<m,@>(jn)","Z0(Y)","UL(Y)","Z2(Y)","Z_(Y)","Z4(Y)","ac8(Y)","ai<jn>()","Z5(Y)","aca(Y,G)","YZ(Y)","a6<m,aD>(jn)","cr(X5)","cr(a9j)","aA<cr>(F_)"])
B.ckc.prototype={
$1(d){var x=this.a
x.x=D.aMw
x.y.L(0,D.aMw)},
$S:69}
B.ckd.prototype={
$1(d){var x=this.a
x.x=D.aMv
x.y.L(0,D.aMv)},
$S:69}
B.cke.prototype={
$1(d){var x=this.a
x.ah2(A.aOL(d.data)).bB(new B.ckb(x),y.b)},
$S:69}
B.ckb.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ckf.prototype={
$1(d){},
$S:69}
B.cki.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hLD(d.channel))},
$S:15}
B.ckj.prototype={
$1(d){},
$S:15}
B.ckk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i3N(w.iceConnectionState)
x.cx=w
if($.h5y())switch(w.a){case 0:x.cy=D.aMB
break
case 1:x.cy=D.aMC
break
case 3:x.cy=D.aMD
break
case 5:x.cy=D.aMz
break
case 6:x.cy=D.aMA
break
case 7:x.cy=D.a6w
break
default:break}},
$S:146}
B.ckl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i3O(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:146}
B.ckm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ie3(w.signalingState)},
$S:146}
B.ckn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ich(w.connectionState)},
$S:146}
B.cko.prototype={
$1(d){},
$S:146}
B.ckp.prototype={
$1(d){},
$S:15}
B.fmO.prototype={
$1(d){var x=y.F.a(new A.rQ([],[]).pF(d.target.result,!1)),w=C.xF.t(x.objectStoreNames,"blobs")
if(!w)C.xB.KK(x,"blobs")},
$S:190}
B.fKr.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w7.fg(this.b)
$.eU.mt()
this.c.$1(d)},
$S:453}
B.fKt.prototype={
$1(d){return this.a.$1(B.hUx(this.b,this.c))},
$S:35}
B.fKs.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fKq.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fKG.prototype={
$1(d){var x=this
return B.hhK(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fKH.prototype={
$1(d){var x=this
return B.hhK(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fp2.prototype={
$1(d){var x=this
return B.c8X(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d3F.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d3C.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c8X(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d3E.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c8X(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d3D.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c8X(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d3H.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bKt,x,x,x,new B.d3G(d),x,x,x,x,x,x),A.E(A.EM(D.Qc,!0,x,C.a0o,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qc,x,g,C.ajj,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d3G.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fr1.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eH,y.o).w,t=this.a,s=t?C.ih:C.c,r=A.n(28),q=A.p(v,D.bod,C.f,v,v,D.b0J,v,v,v,v,D.aj9,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOE,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FH,A.x(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anI,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dW(C.dh,new B.fr_(d),v),1),C.at,A.E(A.bG(D.fqC,new B.fr0(p,x,d),A.bo(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mu,v,v,v,v),v)},
$S:59}
B.fr_.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fr0.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.eZK)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aBE(v,x))},
$S:0}
B.frv.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eH,y.o).w,u=x.a,t=u?C.ih:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bo3,C.f,w,w,D.b2b,w,w,w,w,D.aj9,w,w,1/0),new A.D(C.FH,A.x(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h1A(u,"Organization name",C.G8,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h1A(u,"Access code",C.nn,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h1A(u,"Member password",H.GF,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fyT,new B.fru(r,q,p,d),A.bo(C.aE,w,w,w,w,C.fT,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mu,w,w,w,w),w)},
$S:59}
B.fru.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.eZP)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEQ(u,x,w))},
$S:0}
B.c8O.prototype={
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
return A.b(A.vi(p,null).d8(0,C.YC),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cg(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BH(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c8U.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c8V.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c8W.prototype={
$1(d){return d.b},
$S:z+2}
B.c8Q.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c8R.prototype={
$1(d){return d.b},
$S:z+2}
B.c8P.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c8S.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c8T.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fKE.prototype={
$1(d){return new B.UK(this.a,null)},
$S:z+11}
B.fKF.prototype={
$1(d){return new B.UO(this.a,this.b,this.c,null)},
$S:z+12}
B.dQs.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dRB.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dRC.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dRD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dRA(x,d))},
$S:2}
B.dRA.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRE.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRF.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dRG.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dRH.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRI.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dRJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRM.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:101}
B.dRK.prototype={
$1(d){var x=this.a
return x.f?null:x.Zw()},
$S:2}
B.dRL.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qv))s=C.u8
else s=C.a.a0(s,"video/")||d.my(D.mH)?C.qc:D.amb
x=this.b.a
w=y.p
return new A.D(C.kW,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapm(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dQt.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dQu.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c8Y.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:92}
B.c8Z.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:92}
B.fLl.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fk_.prototype={
$1(d){return J.k(d)},
$S:17}
B.fpe.prototype={
$1(d){var x=this.b
B.hSz(C.FW.ga66(this.a)).bB(x.gcHf(x),y.H)},
$S:126}
B.fpf.prototype={
$1(d){return this.a.d5(0,null)},
$S:126}
B.fpg.prototype={
$0(){return null},
$S:11}
B.c9c.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fph.prototype={
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
u=J.k(u==null?new A.T(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.ftg.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fnG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnH.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c9h.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mH)},
$S:z+1}
B.fPr.prototype={
$1(d){return new B.Z0(this.a,null)},
$S:z+16}
B.d3B.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d3z.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d3A.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dRz.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0z()},
$S:12}
B.dQX.prototype={
$0(){var x=J.bEg(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQY.prototype={
$0(){var x=J.bEg(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQw.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQv(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDJ(this.c)}},
$S:0}
B.dQv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQx.prototype={
$0(){var x=J.bEg(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQC.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQB(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDJ(this.c)}},
$S:0}
B.dQB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRn.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dRo.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dQU.prototype={
$1(d){return new B.UL(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dQR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I2(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UP(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tL(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0K(s.gM(t)),$async$$0)
case 8:case 7:r.i8(s.gan(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQA.prototype={
$1(d){this.a.abM(d,"No files selected.","Added")},
$S:453}
B.dR1.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dR0(),A.S(x).k("M<1,m>")))},
$S:0}
B.dR0.prototype={
$1(d){return d.a},
$S:z+2}
B.dQG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xd.c7().cTM(C.a_t,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.js(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i8("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i8("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apd(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i8("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tL(),$async$$0)
case 9:o.i8("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dRk.prototype={
$1(d){return new B.Pz(this.a.a.c,this.b,null)},
$S:z+7}
B.dRl.prototype={
$1(d){return new B.Z2(this.a.a.c,this.b,null)},
$S:z+18}
B.dRm.prototype={
$1(d){return new B.Z_(this.a.a.c,this.b,null)},
$S:z+19}
B.dQS.prototype={
$1(d){return new B.Pz(this.a.a.c,this.b,null)},
$S:z+7}
B.dQT.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dRd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I2(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6X(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i8("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cnd(),$async$$0)
case 5:x=6
return A.b(p.tL(),$async$$0)
case 6:r=A.S(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dR9(p),r),new B.dRa(),r.k("M<ak.E,m>")).c0(0,new B.dRb())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).cm(A.ea(new B.dRc(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pa(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UV(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dR9.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dR8(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dR8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRa.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dRb.prototype={
$1(d){return d.length!==0},
$S:3}
B.dRc.prototype={
$1(d){var x=this.a
return new B.Z4(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dRe.prototype={
$1(d){return d.a},
$S:z+2}
B.dRf.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dR7.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kV,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapm(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mH)?C.ua:C.p0
p=!x||p.my(D.mH)?"Play video":"View"
return A.c0(A.bm(!0,new A.D(C.Bm,A.x(A.a([q,o,t,C.aB,B.Z3(!1,u,!1,w,p,new B.dR2(d),v),B.Z3(!1,u,!1,C.jv,"Share via QR",new B.dR3(d),"Letters/numbers QR code"),B.Z3(!1,u,!1,D.a0u,"Send to their Code",new B.dR4(d),"Enter someone else's personal code"),B.Z3(!1,u,!1,C.hF,"Download / save",new B.dR5(d),v),C.am,B.Z3(!1,u,!0,C.e9,"Delete",new B.dR6(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kN,v,v,C.n),C.bf)},
$S:688}
B.dR2.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dR3.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dR4.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dR5.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dR6.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dQD.prototype={
$1(d){return d.a},
$S:z+2}
B.dQE.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dQF.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6Z(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gu(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pa(s.c,s.f),$async$$0)
case 4:u.i8(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQz.prototype={
$1(d){var x=this.a
x.tM(new B.dQy(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dQy.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i8("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UP(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i8("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bDb(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQV.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dQW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fXF(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQP.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gr(new B.dQL(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i8("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dQM(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dQN(s))
case 5:x=8
return A.b(r.b.it(0,C.Fr,new B.dQO()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gan(t)){s.i8("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tL(),$async$$0)
case 9:s.i8("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQL.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQI(x,d,e))},
$S:140}
B.dQI.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQM.prototype={
$1(d){return new B.ac8(this.a.a,null)},
$S:z+21}
B.dQN.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dQO.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dQQ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ir(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6N(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0c(B.Ir(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apd(new B.dQJ(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fXE(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i8(q)
x=1
break}x=10
return A.b(s.tL(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dQK()).gM(0)
s.i8(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQJ.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQH(x,d,e))},
$S:140}
B.dQH.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQK.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mH)},
$S:z+1}
B.dR_.prototype={
$1(d){return new B.Z5(this.a.a.c,null)},
$S:z+23}
B.dQZ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZN(u.a.c,v.b),$async$$0)
case 2:t.i8(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRj.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bm(!0,new A.D(C.Bm,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kV,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.Z3(!0,w,!1,C.nn,"My Code",new B.dRg(d),"Your personal code & QR \u2014 others send docs to you"),B.Z3(!1,w,!1,D.a0u,"Send to their Code",new B.dRh(this.a,d),"Enter someone else's 5-digit code + letter"),B.Z3(!1,w,!1,S.yB,"Import backup",new B.dRi(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kN,x,x,C.n),C.bf)},
$S:688}
B.dRg.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dRh.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bCn()},
$S:0}
B.dRi.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dRw.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IB(D.Qc,x,C.a0o,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Qc).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dRu.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dRv.prototype={
$0(){this.a.ai0()
return null},
$S:0}
B.dRx.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*10)),e)},
$S:101}
B.dRy.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aca(e,w,v,this.b,x.e,x.c79(w),new B.dRq(x,w),new B.dRr(x,v,w),new B.dRs(x,w),new B.dRt(x,w),null)},
$S:z+24}
B.dRq.prototype={
$0(){this.a.aff(this.b)
return null},
$S:0}
B.dRr.prototype={
$0(){var x=this.a
return x.m(new B.dRp(x,this.b,this.c))},
$S:0}
B.dRp.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dRs.prototype={
$0(){this.a.NT(this.b)
return null},
$S:0}
B.dRt.prototype={
$0(){this.a.ahO(this.b)
return null},
$S:0}
B.d3x.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*18)),e)},
$S:101}
B.d3y.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:134}
B.d3V.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:101}
B.d3U.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d3R.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d3S.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d3T.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d3P.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gan(w))return A.fQ(w,C.A,x,new B.d3N(this.a),C.h0,C.dv,!0,x,!1,x,x)
$.aW.x1$.push(new B.d3O(this.a))
return C.bI},
$S:135}
B.d3N.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d3L(this.a))
return C.bI},
$S:199}
B.d3L.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3I(x))},
$S:8}
B.d3I.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3O.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3K(x))},
$S:8}
B.d3K.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3Q.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d3M(this.a))
return C.bI},
$S:199}
B.d3M.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3J(x))},
$S:8}
B.d3J.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3u.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3t(x,d))},
$S:1743}
B.d3t.prototype={
$0(){return this.a.f=this.b===C.uH},
$S:0}
B.d3v.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3s(x,d))},
$S:8}
B.d3s.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d3w.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3r(x,d))},
$S:8}
B.d3r.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d3n.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d3o.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d3p.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d3q.prototype={
$1(d){return this.a.d.MT(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d47.prototype={
$0(){var x=this.a.a
return B.rs(x.c,x.d)},
$S:1744}
B.d48.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d49.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d4a.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d4b.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d4c.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d4e.prototype={
$0(){var x=this.a
x.m(new B.d4d(x))},
$S:0}
B.d4d.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pW(0)},
$S:0}
B.d43.prototype={
$1(d){return this.a.Qw(this.b)},
$S:12}
B.d44.prototype={
$1(d){return this.a.Qv(this.b)},
$S:12}
B.d3W.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d3X.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d3Y.prototype={
$1(d){return D.h41},
$S:z+25}
B.d42.prototype={
$2(d,e){if(d)B.UV()},
$S:122}
B.d3Z.prototype={
$0(){return this.a.a9B(this.b)},
$S:0}
B.d4_.prototype={
$0(){return this.a.a9y(this.b)},
$S:0}
B.d40.prototype={
$0(){return this.a.adQ(this.b)},
$S:0}
B.d41.prototype={
$0(){return this.a.a1n(this.b)},
$S:0}
B.d3m.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d46.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q_(),$async$$0)
case 2:u.m(new B.d45(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d45.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c9j.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mH)},
$S:z+1}
B.c9k.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c9i.prototype={
$2(d,e){return this.bjE(d,e)},
bjE(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UW(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fsT.prototype={
$1(d){if(d===D.a6v&&(this.a.a.a&30)===0)this.a.fV(0)},
$S:z+27}
B.fsU.prototype={
$0(){},
$S:11}
B.ftq.prototype={
blc(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fh7(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hcS(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.blc(d,e)},
$S:736}
B.ftp.prototype={
$1(d){var x=this
d.b=new B.fto(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fto.prototype={
$1(d){return this.blb(d)},
blb(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZO(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
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
return A.b(B.fh7(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6W(m),$async$$1)
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
x(v=B.az6.prototype,"gce2","Q7",0)
x(v,"gceU","J8",0)
x(v,"gcep","xY",0)
x(v=B.aD0.prototype,"gc73","adO",0)
x(v,"gc74","Zv",0)
x(v,"gctK","ahv",0)
x(v=B.aD3.prototype,"gc75","Zw",0)
x(v,"gctL","a1H",0)
x(B.aD1.prototype,"gc76","adP",0)
x(B.az5.prototype,"gc7b","c7c",4)
x(v=B.aD2.prototype,"gceq","a_D",0)
x(v,"gcsg","csh",4)
x(v,"gb1k","ayf",0)
x(v,"gcvf","ahV",0)
x(v,"gbOC","Xp",0)
x(v,"gc7a","Ea",0)
x(B.az7.prototype,"gb5a","a1G",0)
x(B.az4.prototype,"gc7d","Zx",0)
x(v=B.aza.prototype,"gb00","ccI",4)
x(v,"gc77","adS",0)
x(v=B.az8.prototype,"gcrf","a1s",0)
x(v,"gaZa","adR",0)
w(B.az3.prototype,"gawR","awS",8)
x(v=B.az9.prototype,"gch8","afI",0)
x(v,"gbO8","aao",0)
w(v,"gawR","awS",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.ckg,B.a9j,B.atw,B.aBE,B.aEQ,B.jn,B.abR,B.bve,B.F_,B.X6])
w(B.ckh,B.ckg)
w(B.b3V,B.a9j)
x(A.i0,[B.ckc,B.ckd,B.cke,B.ckb,B.ckf,B.cki,B.ckj,B.ckk,B.ckl,B.ckm,B.ckn,B.cko,B.ckp,B.fmO,B.fKr,B.fKt,B.fKs,B.fKG,B.fKH,B.fp2,B.d3C,B.d3E,B.d3D,B.d3H,B.fr1,B.frv,B.c8O,B.c8V,B.c8W,B.c8R,B.c8P,B.c8S,B.c8T,B.fKE,B.fKF,B.dRD,B.dRM,B.dRK,B.dRL,B.fk_,B.fpe,B.fpf,B.c9c,B.fph,B.ftg,B.fnG,B.fnH,B.c9h,B.fPr,B.d3B,B.d3z,B.dRz,B.dQv,B.dQB,B.dQU,B.dQA,B.dR0,B.dRk,B.dRl,B.dRm,B.dQS,B.dR9,B.dR8,B.dRa,B.dRb,B.dRc,B.dRe,B.dRf,B.dR7,B.dQD,B.dQE,B.dQz,B.dQV,B.dQM,B.dQK,B.dR_,B.dRj,B.dRw,B.dRx,B.d3x,B.d3y,B.d3V,B.d3U,B.d3P,B.d3N,B.d3L,B.d3O,B.d3Q,B.d3M,B.d3u,B.d3v,B.d3w,B.d3q,B.d43,B.d44,B.d3Y,B.c9j,B.c9k,B.fsT,B.ftp,B.fto])
w(B.b3W,B.atw)
x(A.ja,[B.fKq,B.d3F,B.d3G,B.fr_,B.fr0,B.fru,B.dQs,B.dRB,B.dRC,B.dRA,B.dRE,B.dRF,B.dRG,B.dRH,B.dRI,B.dRJ,B.dQt,B.dQu,B.fpg,B.d3A,B.dQX,B.dQY,B.dQw,B.dQx,B.dQC,B.dRn,B.dRo,B.dQR,B.dR1,B.dQG,B.dQT,B.dRd,B.dR2,B.dR3,B.dR4,B.dR5,B.dR6,B.dQF,B.dQy,B.dQW,B.dQP,B.dQI,B.dQN,B.dQO,B.dQQ,B.dQH,B.dQZ,B.dRg,B.dRh,B.dRi,B.dRu,B.dRv,B.dRq,B.dRr,B.dRp,B.dRs,B.dRt,B.d3R,B.d3S,B.d3T,B.d3I,B.d3K,B.d3J,B.d3t,B.d3s,B.d3r,B.d3n,B.d3o,B.d3p,B.d47,B.d48,B.d49,B.d4a,B.d4b,B.d4c,B.d4e,B.d4d,B.d3W,B.d3X,B.d3Z,B.d4_,B.d40,B.d41,B.d3m,B.d46,B.d45,B.fsU])
x(A.md,[B.ac9,B.Nn,B.a9k,B.Op,B.X5,B.Oo,B.F0])
x(A.ag,[B.Z1,B.UK,B.UO,B.UL,B.Z0,B.UM,B.Z2,B.Z_,B.Pz,B.Z4,B.YZ,B.Z5])
x(A.ah,[B.az6,B.aD0,B.aD3,B.aD1,B.az5,B.aD2,B.az7,B.az4,B.aza,B.az8,B.az3,B.az9])
x(A.au,[B.acC,B.az2,B.bdj,B.aca,B.ac8,B.bdk])
x(A.kn,[B.c8U,B.c8Q,B.c8Y,B.c8Z,B.fLl,B.dQL,B.dQJ,B.dRy,B.d42,B.c9i,B.ftq])
x(A.iU,[B.biF,B.buT])})()
A.k2(b.typeUniverse,JSON.parse('{"b3V":{"a9j":[]},"b3W":{"atw":[]},"Z1":{"ag":[],"t":[]},"az6":{"ah":["Z1"]},"acC":{"au":[],"t":[]},"UK":{"ag":[],"t":[]},"UO":{"ag":[],"t":[]},"aD0":{"ah":["UK"]},"aD3":{"ah":["UO"]},"biF":{"iU":[]},"UL":{"ag":[],"t":[]},"aD1":{"ah":["UL"]},"Z0":{"ag":[],"t":[]},"UM":{"ag":[],"t":[]},"aca":{"au":[],"t":[]},"Z2":{"ag":[],"t":[]},"Z_":{"ag":[],"t":[]},"Pz":{"ag":[],"t":[]},"Z4":{"ag":[],"t":[]},"ac8":{"au":[],"t":[]},"YZ":{"ag":[],"t":[]},"Z5":{"ag":[],"t":[]},"az5":{"ah":["Z0"]},"buT":{"iU":[]},"aD2":{"ah":["UM"]},"az2":{"au":[],"t":[]},"bdj":{"au":[],"t":[]},"az7":{"ah":["Z2"]},"az4":{"ah":["Z_"]},"aza":{"ah":["Pz"]},"az8":{"ah":["Z4"]},"az3":{"ah":["YZ"]},"az9":{"ah":["Z5"]},"bdk":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ue"),k:x("LQ()"),m:x("bk<m,m>"),F:x("r3"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a6<m,Q>>"),t:x("O<a6<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(lA,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iU>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bw<m,m>"),P:x("a6<m,@>"),f:x("a6<@,@>"),o:x("iE"),e:x("ii_"),af:x("Ec"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("w8"),ab:x("F_"),br:x("atw"),v:x("X6"),N:x("m"),X:x("bq<K>"),Q:x("lN"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a6<m,@>>"),c7:x("t"),ch:x("bY<ai<jn>>"),aW:x("bY<dL?>"),aY:x("bY<~>"),cx:x("ac9"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBE"),bG:x("aEQ"),q:x("n2"),B:x("ps<F_>"),c6:x("ps<a9k>"),y:x("Q"),i:x("K"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a6<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("X6?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Nn,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abR?"),bk:x("aBE?"),ag:x("aEQ?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b_4=new A.az(C.aE,2,C.q,-1)
D.bY7=new A.a9(C.a3,C.a8,C.x,C.a2n,null,null)
D.b0J=new A.o(null,null,null,C.mf,null,D.bY7,C.n)
D.b2b=new A.o(null,null,null,C.mf,null,E.GS,C.n)
D.acN=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ae3=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.af0=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ags=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.flx=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fzO=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DD,null,null,null,null,null,null,null,null,null)
D.d6N=x([D.flx,C.am,D.fzO],y.p)
D.bnU=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d6N,null)
D.fE9=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fpQ=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DD,null,null,null,null,null,null,null,null,null)
D.dmD=x([D.fE9,C.am,D.fpQ],y.p)
D.bo3=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dmD,null)
D.fAp=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.ftF=new A.y("Enter the access code and password from your organization.",null,G.DD,null,null,null,null,null,null,null,null,null)
D.dks=x([D.fAp,C.am,D.ftF],y.p)
D.bod=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dks,null)
D.bud=new A.R(16,10,16,28)
D.bul=new A.R(16,14,16,4)
D.bvz=new A.R(20,0,20,16)
D.bw3=new A.R(20,8,20,16)
D.aj9=new A.R(24,22,24,20)
D.a0u=new A.a0(63394,"MaterialIcons",!1)
D.amb=new A.a0(63515,"MaterialIcons",!1)
D.bIp=new A.a0(983813,"MaterialIcons",!1)
D.bFE=new A.a0(62867,"MaterialIcons",!1)
D.bJo=new A.ae(D.bFE,44,C.c,null,null,null)
D.bKt=new A.ae(C.q2,null,C.ad,null,null,null)
D.bLS=new A.ae(C.j5,18,null,null,null,null)
D.bNz=new A.ae(D.a0u,26,C.c,null,null,null)
D.bO5=new A.ae(C.C0,null,null,null,null,null)
D.bOE=new A.ae(C.yC,null,null,null,null,null)
D.bPO=new A.ae(W.O0,null,null,null,null,null)
D.bQ7=new A.ae(C.hs,16,null,null,null,null)
D.bTB=new A.ae(C.rm,16,null,null,null,null)
D.bJG=new A.ae(C.nn,null,null,null,null,null)
D.bUs=new A.e4(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPb=new A.ae(C.G8,null,null,null,null,null)
D.bUx=new A.e4(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bK0=new A.ae(H.GF,null,null,null,null,null)
D.bUI=new A.e4(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bK0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cI9=x([C.fd,C.b_,C.aE],y.O)
D.bZZ=new A.a9(C.az,C.aC,C.x,D.cI9,null,null)
D.cHD=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qc=x([C.fd,C.aE],y.O)
D.Qv=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mH=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.df8=x([C.oK,C.aE],y.O)
D.e7_={iceServers:0}
D.aHa={urls:0}
D.dqo=new A.bk(D.aHa,["stun:stun.l.google.com:19302"],y.m)
D.dqn=new A.bk(D.aHa,["stun:stun1.l.google.com:19302"],y.m)
D.cY1=x([D.dqo,D.dqn],A.ax("O<a6<m,m>>"))
D.dpG=new A.bk(D.e7_,[D.cY1],A.ax("bk<m,@>"))
D.HV=new B.Nn(0,"lanDirect")
D.RS=new B.Nn(1,"cloudStash")
D.dBK=new B.Nn(2,"inlineInstant")
D.RT=new B.Nn(3,"webrtcLink")
D.zo=new B.Nn(4,"videoCloud")
D.fzN=new A.y("Receive file",null,C.mQ,null,null,null,null,null,null,null,null,null)
D.cxD=x([E.anQ,C.ab,D.fzN],y.p)
D.eQZ=new A.ci(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cxD,null)
D.ecV=new A.D(C.cm,D.eQZ,null)
D.fcD=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Qn,null,null,null)
D.fm4=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fcD,null,C.L,null,null,null,null,null,null,null)
D.ecc=new A.D(C.Br,D.fm4,null)
D.b6r=new A.cp(C.A,null,null,D.ecc,null)
D.eiG=new A.cL(0,null,0,28,null,null,D.b6r,null)
D.eiZ=new B.a9k(0,"RTCDataChannelConnecting")
D.aMv=new B.a9k(1,"RTCDataChannelOpen")
D.aMw=new B.a9k(3,"RTCDataChannelClosed")
D.ej_=new B.F0(0,"RTCIceConnectionStateNew")
D.ej0=new B.F0(1,"RTCIceConnectionStateChecking")
D.ej1=new B.F0(2,"RTCIceConnectionStateCompleted")
D.ej2=new B.F0(3,"RTCIceConnectionStateConnected")
D.ej3=new B.F0(4,"RTCIceConnectionStateCount")
D.ej4=new B.F0(5,"RTCIceConnectionStateFailed")
D.ej5=new B.F0(6,"RTCIceConnectionStateDisconnected")
D.aMx=new B.F0(7,"RTCIceConnectionStateClosed")
D.aMy=new B.X5(0,"RTCIceGatheringStateNew")
D.ej6=new B.X5(1,"RTCIceGatheringStateGathering")
D.a6v=new B.X5(2,"RTCIceGatheringStateComplete")
D.a6w=new B.Oo(0,"RTCPeerConnectionStateClosed")
D.aMz=new B.Oo(1,"RTCPeerConnectionStateFailed")
D.aMA=new B.Oo(2,"RTCPeerConnectionStateDisconnected")
D.aMB=new B.Oo(3,"RTCPeerConnectionStateNew")
D.aMC=new B.Oo(4,"RTCPeerConnectionStateConnecting")
D.aMD=new B.Oo(5,"RTCPeerConnectionStateConnected")
D.ej7=new B.Op(0,"RTCSignalingStateStable")
D.ej8=new B.Op(1,"RTCSignalingStateHaveLocalOffer")
D.ej9=new B.Op(2,"RTCSignalingStateHaveRemoteOffer")
D.eja=new B.Op(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ejb=new B.Op(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aME=new B.Op(5,"RTCSignalingStateClosed")
D.eVu=new A.as(160,48)
D.b7F=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eX1=new A.a7(16,16,D.b7F,null)
D.fpe=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eYs=new A.b1(D.fpe,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fwC=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eYv=new A.b1(D.fwC,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFd=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eYC=new A.b1(D.fFd,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.foP=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ1=new A.b1(D.foP,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fAA=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPn=new A.b1(D.fAA,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fBZ=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eZv=new A.b1(D.fBZ,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fGC=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZK=new A.b1(D.fGC,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fED=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZP=new A.b1(D.fED,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFQ=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f_B=new A.b1(D.fFQ,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fnr=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f07=new A.b1(D.fnr,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fyq=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f0s=new A.b1(D.fyq,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.frr=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new A.b1(D.frr,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fGI=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f11=new A.b1(D.fGI,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fnH=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f17=new A.b1(D.fnH,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmq=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new A.b1(D.fmq,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fjn=new A.y("NGMY DOC SHARE",null,C.aQH,null,null,null,null,null,null,null,null,null)
D.fkF=new A.y("Show this to sender",null,C.ki,null,null,null,null,null,null,null,null,null)
D.flE=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fqe=new A.y("Organization settings",null,C.cD,null,null,null,null,null,null,null,null,null)
D.fqC=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.frC=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fs5=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fuS=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fxD=new A.y("Send to their Doc Share",null,C.nE,null,null,null,null,null,null,null,null,null)
D.fxW=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fye=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fyN=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fyT=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fzf=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fCt=new A.y("Share files & videos\nwith a scan.",null,C.aQI,null,null,null,null,null,null,null,null,null)
D.fCM=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h41=new B.YZ(null)
D.a9N=new B.ac9(0,"docShare")
D.a9O=new B.ac9(1,"gate")
D.UP=new B.ac9(2,"gateNoIndividual")})();(function staticFields(){$.aNw=null
$.feX=function(){var x=y.N
return A.U(x,x)}()
$.Gd=A.U(y.N,y.D)
$.agd=A.U(y.N,A.ax("lA"))
$.QP=A.U(y.N,y.D)
$.ffq=A.U(y.N,A.ax("abR"))
$.c9b=A.U(y.S,A.ax("bve"))
$.hcR=1
$.i_v=null
$.i_u=null
$.hRY=null
$.h1N=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iiu","hu7",()=>new B.ckh())
x($,"igp","h5y",()=>C.a.t(A.bu(A.bu(A.bu(A.GP(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["2mgJXvtwOE3+HJUkT5FWuEtR3sw="]=a.current})($__dart_deferred_initializers__);