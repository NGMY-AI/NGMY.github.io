((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ckp:function ckp(){},
hLP(d){var x=null,w=new B.b3W(d,D.ej8,new A.ps(x,x,y.c6),new A.ps(x,x,y.B))
w.byk(d)
return w},
b3W:function b3W(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ckk:function ckk(d){this.a=d},
ckl:function ckl(d){this.a=d},
ckm:function ckm(d){this.a=d},
ckj:function ckj(d){this.a=d},
ckn:function ckn(d){this.a=d},
hLQ(d,e){var x=y.N
x=new B.b3X(d,e,A.U(x,y.e),A.U(x,y.z))
x.byl(d,e)
return x},
b3X:function b3X(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ckq:function ckq(d){this.a=d},
ckr:function ckr(d){this.a=d},
cks:function cks(d){this.a=d},
ckt:function ckt(d){this.a=d},
cku:function cku(d){this.a=d},
ckv:function ckv(d){this.a=d},
ckw:function ckw(d){this.a=d},
ckx:function ckx(d){this.a=d},
h1A(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yM.LZ(x,"ngmy_doc_share_v1",new B.fmW(),1)},
hSo(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cg(d))
if(y.J.b(d))return new Uint8Array(A.cg(J.f1(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cg(A.A7(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cg(d))
if(typeof d=="string")try{x=C.cG.aK(d)
return x}catch(w){return v}return v},
R2(d,e){return B.i6E(d,e)},
i6E(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNw
x=7
return A.b(o==null?$.aNw=B.h1A():o,$async$R2)
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
R1(d){return B.i6D(d)},
i6D(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNw
x=7
return A.b(o==null?$.aNw=B.h1A():o,$async$R1)
case 7:s=f
r=J.mK(s,"blobs","readonly")
x=8
return A.b(C.iP.zw(J.mI(r,"blobs"),d),$async$R1)
case 8:q=f
x=9
return A.b(J.pB(r),$async$R1)
case 9:o=B.hSo(q)
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
agT(d){return B.i6C(d)},
i6C(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNw
x=7
return A.b(p==null?$.aNw=B.h1A():p,$async$agT)
case 7:s=f
r=J.mK(s,"blobs","readwrite")
C.iP.FM(J.mI(r,"blobs"),d)
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
fmW:function fmW(){},
hUI(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bot(w,v))}return u},
hrG(d,e){var x,w={},v=A.aW_("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fKA(w,v,e)
C.w7.ys(v,"change",new B.fKC(w,v,!1))
C.w7.ys(v,"cancel",new B.fKB(w))
$.eU.mt()
v.click()
A.bM(C.ahk,new B.fKz(w),y.H)},
fKA:function fKA(d,e,f){this.a=d
this.b=e
this.c=f},
fKC:function fKC(d,e,f){this.a=d
this.b=e
this.c=f},
fKB:function fKB(d){this.a=d},
fKz:function fKz(d){this.a=d},
D1(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$D1=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTE()?3:4
break
case 3:x=5
return A.b(B.hmN(e,d,s,!0,!1,f,g,h,!1,i),$async$D1)
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
return A.b(B.fim(s,d),$async$D1)
case 14:x=12
return A.b(r.hmN(q,p,o,n,m,l,k,j,a1,i),$async$D1)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).cm(A.ea(new B.fKP(s,i,d,f,g,h),!1,null,y.H)),$async$D1)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).cm(A.ea(new B.fKQ(s,i,d,f,g,h),!1,null,y.H)),$async$D1)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$D1,w)},
QI(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QI=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZH(e),$async$QI)
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
case 8:v=t?D.UO:D.a9O
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZF(d,e)){v=D.a9N
x=1
break}x=11
return A.b(B.UN(e),$async$QI)
case 11:v=t?D.UO:D.a9O
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fXJ(d,e)){v=D.a9N
x=1
break}x=14
return A.b(B.UN(e),$async$QI)
case 14:v=D.UO
x=1
break
case 13:v=t?D.UO:D.a9O
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QI,w)},
fim(d,e){var x=0,w=A.j(y.y),v
var $async$fim=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZF(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZH(d),$async$fim)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fim,w)},
hmN(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).cm(A.ea(new B.fpa(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hhU(d,e,f,g,h,i,j){return new B.Z1(e,j,d,g,h,i,f,null)},
fr6(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fr6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fr9(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fr6)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fr6,w)},
frB(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$frB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.frD(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$frB)
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
return A.i($async$frB,w)},
h1J(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fDa(d,e){var x=0,w=A.j(y.H),v
var $async$fDa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UN(e),$async$fDa)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fDa,w)},
fKP:function fKP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fKQ:function fKQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac9:function ac9(d,e){this.a=d
this.b=e},
fpa:function fpa(d,e,f,g,h,i,j,k,l){var _=this
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
d3N:function d3N(d,e){this.a=d
this.b=e},
d3K:function d3K(d){this.a=d},
d3M:function d3M(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3P:function d3P(){},
d3O:function d3O(d){this.a=d},
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
fr9:function fr9(d,e,f){this.a=d
this.b=e
this.c=f},
fr7:function fr7(d){this.a=d},
fr8:function fr8(d,e,f){this.a=d
this.b=e
this.c=f},
frD:function frD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frC:function frC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8V(d,e,f,g,h){return B.hGL(d,e,f,g,h)},
hGL(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c8V=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dz(d,new B.c8W(s,e,h,g,f,q),y.g),y.l),$async$c8V)
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
return A.i($async$c8V,w)},
aZC(d,e,f,g,h){return B.hGM(d,e,f,g,h)},
hGM(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZC=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aul("GET",d)
o=A.fU5()
if(o==null)o=new A.LM(A.a([],y.W))
x=7
return A.b(o.f_(0,s).d8(0,C.Fs),$async$aZC)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cj(),$async$aZC)
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
return A.i($async$aZC,w)},
aZB(d){return B.hGJ(d)},
hGJ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vk(d,null).d8(0,C.o4),$async$aZB)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aL(0,A.lT(A.lR(p.e)).cB(0,p.w),null)
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
return A.i($async$aZB,w)},
c8U(d){return B.hGK(d)},
hGK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c8U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vk(d,null).d8(0,C.pX),$async$c8U)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lT(A.lR(q.e)).cB(0,q.w)
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
return A.i($async$c8U,w)},
c8W:function c8W(d,e,f,g,h,i){var _=this
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
hGR(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ir(C.a.b6(u,v.length))}return null},
hGS(d){var x=B.Ir(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hGN(){var x,w=$.pz(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.h3(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a6L(d){return B.hGO(d)},
hGO(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
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
a6M(d,e){return B.hGP(d,e)},
hGP(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
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
break}m=B.hGN()
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
a6O(d,e,f,g){return B.hGT(d,e,f,g)},
hGT(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
break}if(g.cJ(d,0,new B.c91())>1048576||g.b4(d,new B.c92())){v=B.Ev(r,d,e,q,a0)
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
return A.b(B.aZK(u,g.gM(d),a0),$async$a6O)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pz().av(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c93(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZD(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6O)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6O,w)},
Ev(d,e,f,g,h){return B.hGQ(d,e,f,g,h)},
hGQ(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ev=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ev)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c8Y())
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
a1=l.dz(a6,new B.c8Z(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZD(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Ev)
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
aZD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6L(t),$async$aZD)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c8X(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6M(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZD,w)},
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
return A.b(B.aZE(k,a0),$async$Nm)
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
return A.b(B.aZJ(h),$async$Nm)
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
e=A.C(new A.a_(r,new B.c9_(),q),n)
d=A.C(new A.a_(r,new B.c90(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d9(d,0,A.dG(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6M("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Nm)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Nm,w)},
aZE(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZE=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iaq(k,j)
C.d.v(s,i)
x=5
return A.b(B.D_(l,m,"Received via My Code",t,e,i),$async$aZE)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQ2(s),$async$aZE)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZE,w)},
c91:function c91(){},
c92:function c92(){},
c93:function c93(){},
c8Y:function c8Y(){},
c8Z:function c8Z(){},
c8X:function c8X(){},
c9_:function c9_(){},
c90:function c90(){},
fKM(d,e){var x=0,w=A.j(y.H)
var $async$fKM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).cm(A.ea(new B.fKN(e),!1,null,y.H)),$async$fKM)
case 2:return A.h(null,w)}})
return A.i($async$fKM,w)},
bDc(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bDc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).cm(A.ea(new B.fKO(g,e,f),!1,null,y.y)),$async$bDc)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDc,w)},
fKN:function fKN(d){this.a=d},
fKO:function fKO(d,e,f){this.a=d
this.b=e
this.c=f},
UK:function UK(d,e){this.c=d
this.a=e},
aD0:function aD0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dQA:function dQA(d,e){this.a=d
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
dRJ:function dRJ(d){this.a=d},
dRK:function dRK(d){this.a=d},
dRL:function dRL(d){this.a=d},
dRI:function dRI(d,e){this.a=d
this.b=e},
dRM:function dRM(d){this.a=d},
dRN:function dRN(d){this.a=d},
dRO:function dRO(d,e){this.a=d
this.b=e},
dRP:function dRP(d,e){this.a=d
this.b=e},
dRQ:function dRQ(d,e){this.a=d
this.b=e},
dRR:function dRR(d){this.a=d},
dRU:function dRU(){},
dRS:function dRS(d){this.a=d},
dRT:function dRT(d,e){this.a=d
this.b=e},
biG:function biG(){},
UL:function UL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD1:function aD1(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dQB:function dQB(d){this.a=d},
dQC:function dQC(d){this.a=d},
fXK(d){var x=d.i_
if(x>=0)return C.o.N(x)
return 10},
hGV(d){var x=d.kO
if(x>=0)return x
return 4.99},
hGU(d){var x=d.lu,w=y.N
w=x.jb(x,new B.c95(),w,w)
return w},
hcX(d){var x=d.kP,w=y.N
w=x.jb(x,new B.c96(),w,w)
return w},
aZH(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZH)
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
return A.i($async$aZH,w)},
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
fXJ(d,e){var x,w,v
if(B.hGV(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hGU(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.T(Date.now(),0,!1))},
aZF(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hcX(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.T(Date.now(),0,!1))},
hcY(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hcX(d),x,x)
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
break}u=B.fXK(d)
if(u<=0){v=!1
x=1
break}if(B.fXJ(d,e)){v=!1
x=1
break}x=3
return A.b(B.ap5(e),$async$ap4)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap4,w)},
aZG(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.It(e,d),$async$aZG)
case 3:if(g){v=-1
x=1
break}u=B.fXK(d)
if(u<=0){v=-1
x=1
break}if(B.fXJ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ap5(e),$async$aZG)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZG,w)},
c98(d,e,f){var x=0,w=A.j(y.y),v
var $async$c98=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.It(e,d),$async$c98)
case 3:if(h){v=!1
x=1
break}v=B.ap4(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c98,w)},
c97(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c97=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c98(d,u,i.gTE()),$async$c97)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c97,w)},
a6P(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6P=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTE()){v=!0
x=1
break}if(B.aZF(d,u)){v=!0
x=1
break}x=5
return A.b(A.lj(u,C.Sd),$async$a6P)
case 5:x=k?3:4
break
case 3:B.hcY(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6P)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kX(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Sd,"Doc Share for Organizations"),$async$a6P)
case 7:if(!k){v=!1
x=1
break}B.hcY(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6P)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
c95:function c95(){},
c96:function c96(){},
fLs(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fLs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fLs)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.ff4.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.ff4.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLs,w)},
icK(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.ff4.br($.ff4,new B.fLu(d))},
fLu:function fLu(d){this.a=d},
fgr(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fgr=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bM(C.jo,null,y.H),$async$fgr)
case 3:C.Ad.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgr,w)},
afL(d,e,f){var x=0,w=A.j(y.H),v
var $async$afL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.ffy.n(0,d,new B.abR(A.bp(e,!0,v)))
x=3
return A.b(A.ay(),$async$afL)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afL)
case 2:return A.h(null,w)}})
return A.i($async$afL,w)},
afF(d){return B.hWz(d)},
hWz(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.ffy.h(0,d)
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
break}o=J.b6(s,new B.fk7(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abR(r)
$.ffy.n(0,d,p)
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
aNS(d){return B.hWx(d)},
hWx(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
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
hSL(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cg(J.f1(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cg(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cg(A.A7(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cg(d)),y.K)
return A.f9(null,y.K)},
a1u(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fN(r,"loadend",new B.fpm(r,t),!1,s)
A.fN(r,"error",new B.fpn(t),!1,s)
r.readAsArrayBuffer(d)
v=u.it(0,C.Mj,new B.fpo())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1u,w)},
aOb(d,e,f){return B.hYO(d,e,f)},
hYO(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
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
aOa(d,e,f){return B.hYN(d,e,f)},
hYN(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
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
BH(d,e,f,g,h,i){return B.hH3(d,e,f,g,h,i)},
hH3(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
m=new B.jn(p,q,o,n,new A.T(Date.now(),0,!1).a6().ac(),a0,f,B.aZN(),null)
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
return A.b(B.AI(e),$async$BH)
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
return A.b(B.AI(d),$async$UP)
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
k=B.hd_(n,null,l)
l=o.size
l.toString
j=new A.T(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZN(),null)
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
fXO(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fXO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hd_(r,C.d.gal(r.split(".")),null)
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
return A.i($async$fXO,w)},
Iu(d,e,f,g,h,i){return B.hH2(d,e,f,g,h,i)},
hH2(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
case 16:f=new B.jn(i,a1,a0,g,new A.T(Date.now(),0,!1).a6().ac(),a2,null,B.aZN(),null)
x=17
return A.b(B.AI(d),$async$Iu)
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
v=A.A7(n,k,j>m?m:j)
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
v=A.A7(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UR,w)},
hd_(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rs(d,e){return B.hH4(d,e)},
hH4(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
case 15:r=n.ao_()
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
hH7(d){var x,w,v=$.agd.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hH8(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hH5(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apc(d,e,f,g,h){return B.hH6(d,e,f,g,h)},
hH6(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
hd1(d,e,f,g,h){var x,w,v,u,t=$.hd0
$.hd0=t+1
x=Date.now()
w=""+1000*x+"_"+C.cH.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c9j.n(0,t,new B.bvf(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axU(u)))
return t},
fXP(d){var x=0,w=A.j(y.H)
var $async$fXP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fXP,w)},
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
return A.q9(A.FL(A.A7(j,p,o<i?o:i)),$async$Iv,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hlG($async$Iv,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hnu(w)},
aZP(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c9j.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4v(),$async$aZP)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZP,w)},
UQ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9j.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4v(),$async$UQ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afL(r.c,u,r.z),$async$UQ)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.T(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZN(),null)
u=r.a
x=5
return A.b(B.AI(u),$async$UQ)
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
for(;;)switch(x){case 0:r=$.c9j.W(0,d)
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
c9l(d,e,f){var x=0,w=A.j(y.H)
var $async$c9l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAg(d,e,f),$async$c9l)
case 2:return A.h(null,w)}})
return A.i($async$c9l,w)},
c9m(d,e,f){var x=0,w=A.j(y.H)
var $async$c9m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAh(d,e,f),$async$c9m)
case 2:return A.h(null,w)}})
return A.i($async$c9m,w)},
Ew(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ew=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AI(d),$async$Ew)
case 2:p=g
J.nv(p,new B.c9k(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gd.W(0,v)
$.agd.W(0,e)
x=3
return A.b(B.afF(v),$async$Ew)
case 3:u=g
$.ffy.W(0,v)
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
aZO(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rs(d,e),$async$aZO)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fgr(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZO,w)},
AI(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AI)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aL(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fpp(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AI,w)},
Gp(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gp)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fto(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gp)
case 3:return A.h(null,w)}})
return A.i($async$Gp,w)},
bAg(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AI(d),$async$bAg)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fnO(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDN(f))
x=4
return A.b(B.Gp(d,u),$async$bAg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAg,w)},
bAh(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AI(d),$async$bAh)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fnP(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cJ_(f))
x=4
return A.b(B.Gp(d,u),$async$bAh)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAh,w)},
abR:function abR(d){this.a=d},
fk7:function fk7(){},
fpm:function fpm(d,e){this.a=d
this.b=e},
fpn:function fpn(d){this.a=d},
fpo:function fpo(){},
c9k:function c9k(d){this.a=d},
bvf:function bvf(d,e,f,g,h,i,j,k,l){var _=this
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
fpp:function fpp(){},
fto:function fto(){},
fnO:function fnO(d){this.a=d},
fnP:function fnP(d){this.a=d},
a6X(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c9p())?3:4
break
case 3:x=5
return A.b(B.aZQ(d,e),$async$a6X)
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
return A.b(B.aZL(s),$async$a6X)
case 10:case 9:if(g){v=new A.PX(1,D.RR,"NGMYDOCSYNC1|"+s)
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
break}v=B.c9o(d,e)
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
return A.b(B.aZK(p,d.length,e),$async$US)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c9m(e,C.d.gI(d).a,r.b),$async$US)
case 7:case 6:q=r.a
x=8
return A.b(B.No(d,D.RR,e,q),$async$US)
case 8:v=new A.PX(d.length,D.RR,q)
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
return A.b(B.c9h(s,d,e,t),$async$UT)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZL(t),$async$UT)
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
return A.b(B.fXI(),$async$UV)
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
break}u=B.aZN()
x=3
return A.b(B.c9l(e,d.a,u),$async$a6Y)
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
t=e===D.RR&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b6(u,13)):null
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
return A.b(B.c9g(o,p,u,f),$async$No)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c9h(o,p,f,t),$async$No)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c9f(o,u,p,f),$async$No)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$No,w)},
aZQ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c9n(e,d),$async$aZQ)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UX(!1,!0,d,e),$async$aZQ)
case 4:u=g
if(u!=null){t=u.b
v=new A.PX(u.a,D.zo,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZQ,w)},
c9n(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c9n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UR(d,s,0,1),$async$c9n)
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
return A.i($async$c9n,w)},
c9o(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c9o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6Z(null,d,e),$async$c9o)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hcZ(u)
if(t.length>800){v=null
x=1
break}v=new A.PX(d.length,D.dBT,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9o,w)},
apd(d,e,f){return B.hHb(d,e,f)},
hHb(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apd=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d1(g,"\ufeff"))g=J.mJ(g,1)
x=B.fXN(g)?3:4
break
case 3:x=5
return A.b(B.c9i(g),$async$apd)
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
return A.b(B.aZJ(q),$async$apd)
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
case 11:case 7:if(J.d1(g,"NGMYDOCSYNC0|"))try{n=B.fXM(g,"NGMYDOCSYNC0")
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
Iw(d,e,f){return B.hH9(d,e,f)},
hH9(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
return A.b(B.aZB(r),$async$Iw)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZB(A.cE(s,0,null)),$async$Iw)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c8V(o,r,a1,n,a2),$async$Iw)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c8U(q),$async$Iw)
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
UU(d,e){return B.hHa(d,e)},
hHa(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
c9p:function c9p(){},
a13(d){var x=A.P(d).ax.a===C.I,w=x?D.af0:D.acN,v=x?D.ags:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.ae3:C.aL
return new A.aG3([w,s,v,u,t,x?C.fd:C.bS])},
hsp(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fPA(e),d,null,!0,!0,y.N)},
c94(d,e,f,g,h,i,j,k,l){return new B.UM(e,l,d,f,k,j,g,h,i,null)},
Z3(d,e,f,g,h,i,j){return new B.bdl(g,h,j,e,i,d,f,null)},
fPA:function fPA(d){this.a=d},
Z0:function Z0(d,e){this.c=d
this.a=e},
az5:function az5(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d3J:function d3J(d){this.a=d},
d3H:function d3H(d){this.a=d},
d3I:function d3I(d){this.a=d},
buU:function buU(){},
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
dRH:function dRH(d){this.a=d},
dR4:function dR4(d,e){this.a=d
this.b=e},
dR5:function dR5(d,e){this.a=d
this.b=e},
dQE:function dQE(d,e,f){this.a=d
this.b=e
this.c=f},
dQD:function dQD(d){this.a=d},
dQF:function dQF(d,e){this.a=d
this.b=e},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dQJ:function dQJ(d){this.a=d},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRw:function dRw(d){this.a=d},
dR1:function dR1(d,e,f){this.a=d
this.b=e
this.c=f},
dQZ:function dQZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQI:function dQI(d){this.a=d},
dR9:function dR9(d){this.a=d},
dR8:function dR8(){},
dQO:function dQO(d){this.a=d},
dRs:function dRs(d,e){this.a=d
this.b=e},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRu:function dRu(d,e){this.a=d
this.b=e},
dR_:function dR_(d,e){this.a=d
this.b=e},
dR0:function dR0(d,e){this.a=d
this.b=e},
dRl:function dRl(d,e){this.a=d
this.b=e},
dRh:function dRh(d){this.a=d},
dRg:function dRg(d){this.a=d},
dRi:function dRi(){},
dRj:function dRj(){},
dRk:function dRk(d,e){this.a=d
this.b=e},
dRm:function dRm(){},
dRn:function dRn(d){this.a=d},
dRf:function dRf(d,e){this.a=d
this.b=e},
dRa:function dRa(d){this.a=d},
dRb:function dRb(d){this.a=d},
dRc:function dRc(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRe:function dRe(d){this.a=d},
dQL:function dQL(){},
dQM:function dQM(d){this.a=d},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQH:function dQH(d,e){this.a=d
this.b=e},
dQG:function dQG(d,e,f){this.a=d
this.b=e
this.c=f},
dR2:function dR2(d){this.a=d},
dR3:function dR3(d,e,f){this.a=d
this.b=e
this.c=f},
dQX:function dQX(d,e){this.a=d
this.b=e},
dQT:function dQT(d){this.a=d},
dQQ:function dQQ(d,e,f){this.a=d
this.b=e
this.c=f},
dQU:function dQU(d){this.a=d},
dQV:function dQV(d){this.a=d},
dQW:function dQW(){},
dQY:function dQY(d,e){this.a=d
this.b=e},
dQR:function dQR(d){this.a=d},
dQP:function dQP(d,e,f){this.a=d
this.b=e
this.c=f},
dQS:function dQS(){},
dR7:function dR7(d){this.a=d},
dR6:function dR6(d,e){this.a=d
this.b=e},
dRr:function dRr(d,e){this.a=d
this.b=e},
dRo:function dRo(d){this.a=d},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRq:function dRq(d){this.a=d},
dRE:function dRE(d){this.a=d},
dRC:function dRC(d){this.a=d},
dRD:function dRD(d){this.a=d},
dRF:function dRF(){},
dRG:function dRG(d,e){this.a=d
this.b=e},
dRy:function dRy(d,e){this.a=d
this.b=e},
dRz:function dRz(d,e,f){this.a=d
this.b=e
this.c=f},
dRx:function dRx(d,e,f){this.a=d
this.b=e
this.c=f},
dRA:function dRA(d,e){this.a=d
this.b=e},
dRB:function dRB(d,e){this.a=d
this.b=e},
az2:function az2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdk:function bdk(d,e,f){this.c=d
this.d=e
this.a=f},
d3F:function d3F(){},
d3G:function d3G(){},
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
d42:function d42(){},
d41:function d41(d){this.a=d},
Z2:function Z2(d,e,f){this.c=d
this.d=e
this.a=f},
az7:function az7(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d3Z:function d3Z(d){this.a=d},
d4_:function d4_(d,e,f){this.a=d
this.b=e
this.c=f},
d40:function d40(d,e){this.a=d
this.b=e},
d3X:function d3X(d,e){this.a=d
this.b=e},
d3V:function d3V(d){this.a=d},
d3T:function d3T(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3W:function d3W(d){this.a=d},
d3S:function d3S(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d3U:function d3U(d){this.a=d},
d3R:function d3R(d){this.a=d},
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
d3C:function d3C(d){this.a=d},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3D:function d3D(d){this.a=d},
d3A:function d3A(d,e){this.a=d
this.b=e},
d3E:function d3E(d){this.a=d},
d3z:function d3z(d,e){this.a=d
this.b=e},
d3v:function d3v(d){this.a=d},
d3w:function d3w(d){this.a=d},
d3x:function d3x(d,e){this.a=d
this.b=e},
d3y:function d3y(d){this.a=d},
Pz:function Pz(d,e,f){this.c=d
this.d=e
this.a=f},
aza:function aza(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d4f:function d4f(d){this.a=d},
d4g:function d4g(d){this.a=d},
d4h:function d4h(d){this.a=d},
d4i:function d4i(d){this.a=d},
d4j:function d4j(d,e){this.a=d
this.b=e},
d4k:function d4k(d){this.a=d},
d4m:function d4m(d){this.a=d},
d4l:function d4l(d){this.a=d},
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
d4b:function d4b(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e){this.a=d
this.b=e},
d43:function d43(d,e,f){this.a=d
this.b=e
this.c=f},
d44:function d44(d){this.a=d},
d45:function d45(){},
d4a:function d4a(){},
d46:function d46(d,e){this.a=d
this.b=e},
d47:function d47(d,e){this.a=d
this.b=e},
d48:function d48(d,e){this.a=d
this.b=e},
d49:function d49(d,e){this.a=d
this.b=e},
ac8:function ac8(d,e){this.c=d
this.a=e},
d3u:function d3u(d){this.a=d},
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
d4e:function d4e(d){this.a=d},
d4d:function d4d(d){this.a=d},
bdl:function bdl(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hHc(){var x,w=$.pz(),v=J.e2(10,y.N)
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
a7_(d){return B.hHd(d)},
hHd(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
u=A.C(new A.a_(f,new B.c9r(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hHc()
t=A.S(u).k("M<1,a6<m,aD>>")
r=A.C(new A.M(u,new B.c9s(s),t),t.k("ak.E"))
x=6
return A.b(B.Np(),$async$UX)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a7_(q),$async$UX)
case 7:x=8
return A.b(B.a70(r,u,g,s),$async$UX)
case 8:v=new A.boV(u.length,"NGMYDOCSYNC4|"+s,s)
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
c9t(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c9t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Np(),$async$c9t)
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
return A.i($async$c9t,w)},
a70(d,e,f,g){return B.hHe(d,e,f,g)},
hHe(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a70=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apc("media",r,new B.c9q(s,e,g),f,q),$async$a70)
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
Ex(d,e,f){return B.hHf(d,e,f)},
hHf(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
l=new A.aao(a8.a,b0,"media",a8.d,a9).CE(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZC(k,n,o,s,b7),$async$Ex)
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
c9r:function c9r(){},
c9s:function c9s(d){this.a=d},
c9q:function c9q(d,e,f){this.a=d
this.b=e
this.c=f},
aQj(){var x=0,w=A.j(y.H),v,u
var $async$aQj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hS9=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQj)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQj)
case 3:u=$.h1W
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQj)
case 4:$.h1W=$.i_F=$.i_G=null
return A.h(null,w)}})
return A.i($async$aQj,w)},
ft_(d){var x=0,w=A.j(y.H),v,u
var $async$ft_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6v){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.ft0(new A.bY(u,y.aY))
x=3
return A.b(u.it(0,C.hR,new B.ft1()),$async$ft_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ft_,w)},
i_D(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hGX(x):x},
h2_(d){var x=0,w=A.j(y.T),v,u,t
var $async$h2_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b6(t,13))
if(C.a.a0(u,"WR")){v=B.apg(u)
x=1
break}v=B.fXM(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2_,w)},
h1Z(d){var x=0,w=A.j(y.T),v,u,t
var $async$h1Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b6(t,14))
if(C.a.a0(u,"WR")){v=B.aph(u)
x=1
break}v=B.fXM(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1Z,w)},
fLc(d){var x=0,w=A.j(y.T),v
var $async$fLc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aph(d),$async$fLc)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLc,w)},
bB7(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bB7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h1Z(d),$async$bB7)
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
return A.i($async$bB7,w)},
fhf(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fhf=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UQ(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BH(d.ao_(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhf,w)},
Gr(d,e,f){return B.i22(d,e,f)},
i22(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gr=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h2_(a1),$async$Gr)
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
return A.b($.hui().aE1(D.dpP,null),$async$Gr)
case 4:l=d.h1W=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axU(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.ftx(f,k,new B.fty(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7t(0,new B.X6(r,"offer")),$async$Gr)
case 5:d=l
x=7
return A.b(l.akO(0),$async$Gr)
case 7:x=6
return A.b(d.a7l(0,a4),$async$Gr)
case 6:x=8
return A.b(B.ft_(l),$async$Gr)
case 8:x=9
return A.b(l.aoK(),$async$Gr)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i_D(f,s)
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
case 12:g="NGMYDOCSYNC3A|z|"+B.hcZ(h)
case 11:v=new A.boc(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gr,w)},
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
i3X(d){switch(d){case"new":return D.ej9
case"checking":return D.eja
case"connected":return D.ejc
case"completed":return D.ejb
case"failed":return D.eje
case"disconnected":return D.ejf
case"closed":return D.aMx
case"count":return D.ejd}return D.aMx},
i3Y(d){switch(d){case"new":return D.aMy
case"gathering":return D.ejg
case"complete":return D.a6v}return D.aMy},
ied(d){switch(d){case"stable":return D.ejh
case"have-local-offer":return D.eji
case"have-local-pranswer":return D.ejk
case"have-remote-offer":return D.ejj
case"have-remote-pranswer":return D.ejl
case"closed":return D.aME}return D.aME},
icr(d){switch(d){case"new":return D.aMB
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
cko:function cko(){},
fZw(d){var x=new B.F_()
x.a=d
x.b=!0
return x},
F_:function F_(){this.b=this.a=$},
a9j:function a9j(){},
atw:function atw(){},
X6:function X6(d,e){this.a=d
this.b=e},
fXI(){var x=0,w=A.j(y.H)
var $async$fXI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fXI,w)},
fXL(d,e,f){var x=0,w=A.j(y.T),v
var $async$fXL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mH))){v=null
x=1
break}v=B.fLs(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXL,w)},
hcZ(d){var x,w=F.ace.a4f(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cL.gct().aK(x)}return C.cL.gct().aK(w)},
hGW(d){var x,w,v=C.cG.aK(d)
try{x=C.ch.cB(0,F.acd.bcO(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
fXM(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hGW(C.a.b6(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b6(t,w.length)
try{v=C.ch.cB(0,C.cG.aK(x))
return v}catch(u){return x}}return null},
hGX(d){var x,w,v,u,t,s=A.a([],y.s)
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
hGY(){var x,w=$.pz(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.h3(v)},
aZI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZI)
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
return A.i($async$aZI,w)},
c99(d,e){return B.hGZ(d,e)},
hGZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c99=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cI,null),$async$c99)
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
return A.i($async$c99,w)},
aZL(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZI(d),$async$aZL)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZL,w)},
aZK(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hGY()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c99(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gct().aK(t),"usesRemaining",999999,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZK)
case 3:if(!h){v=null
x=1
break}v=new A.a06("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZK,w)},
aZJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZI(o),$async$aZJ)
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
return A.i($async$aZJ,w)},
c9a(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c9a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bC3("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cI),$async$c9a)
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
return A.i($async$c9a,w)},
aZM(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Is(),$async$aZM)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZM,w)},
ap9(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ap9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap9)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZM(s)
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
s=B.aZF(d,J.k(s==null?"":s))
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
c9b(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c9b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c9b)
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
return A.i($async$c9b,w)},
It(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$It=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c9b(d),$async$It)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZM(t),$async$It)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ap8(d),$async$It)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZF(e,J.k(u==null?"":u))
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
aZN(){var x,w=$.pz(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.h3(v)},
a6V(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fXN(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c9e(d){return B.hH0(d)},
hH0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c9e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6V(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c9e)
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
return A.i($async$c9e,w)},
apb(d,e){return B.hH1(d,e)},
hH1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
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
c9g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c9g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apb(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c9g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c9g,w)},
c9f(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c9f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apb(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c9f)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c9f,w)},
c9h(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c9h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6V(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apb(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9h,w)},
c9i(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c9i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fXN(d)){v=null
x=1
break}x=3
return A.b(B.c9e(d),$async$c9i)
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
return A.i($async$c9i,w)},
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
apf(d){return B.hHg(d)},
hHg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
return A.b(r.hw(C.h1),$async$aoc)
case 7:q=g
o=q
o=o==null?null:J.eX(J.vs(o))
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
iaq(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aX(C.o.u(w),5,"0")
return v},
fJH(d){return B.ias(d)},
ias(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fJH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").KO(d,3600),$async$fJH)
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
return A.i($async$fJH,w)},
D_(d,e,f,g,h,i){var x=null
return B.iap(d,e,f,g,h,i)},
iap(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D_=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hd1(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fXP(r),$async$D_)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fJH(o),$async$D_)
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
return A.b(d.f_(0,A.aul("GET",A.cE(n,0,null))).d8(0,C.Fs),$async$D_)
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
return A.b(B.aZP(r,k),$async$D_)
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
aQ2(d){return B.iar(d)},
iar(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
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
H=c[145]
O=c[40]
F=c[238]
I=c[137]
P=c[218]
E=c[211]
G=c[87]
Q=c[183]
R=c[138]
S=c[216]
K=c[242]
L=c[247]
B=a.updateHolder(c[21],B)
D=c[245]
T=c[182]
M=c[201]
U=c[65]
V=c[248]
W=c[71]
X=c[55]
N=c[86]
Y=c[246]
B.ckp.prototype={
aE1(d,e){return this.cKv(d,e)},
cKv(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aE1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.km(A.cA(t)))
t=J.k(u)
v=B.hLQ(C.cL.gct().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aE1,w)}}
B.b3W.prototype={
byk(d){var x=this,w=x.w
w.onclose=A.ho(new B.ckk(x))
w.onopen=A.ho(new B.ckl(x))
w.onmessage=A.ho(new B.ckm(x))
w.onbufferedamountlow=A.ho(new B.ckn(x))},
gdc(d){return this.x},
ah5(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ah5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.F_()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fZw(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ah5)
case 8:v=t.fZw(s.ano(f,0,null))
x=1
break
case 7:case 4:v=B.fZw(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah5,w)}}
B.b3X.prototype={
byl(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.ckq(x)))
w.addEventListener("icecandidate",A.ho(new B.ckr(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.cks(x)))
w.onicegatheringstatechange=A.ho(new B.ckt(x))
w.addEventListener("signalingstatechange",A.ho(new B.cku(x)))
if(!$.h5I())w.addEventListener("connectionstatechange",A.ho(new B.ckv(x)))
w.addEventListener("negotiationneeded",A.ho(new B.ckw(x)))
w.addEventListener("track",A.ho(new B.ckx(x)))},
akO(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.km(A.cA(A.U(y.N,y.z)))),y.aQ),$async$akO)
case 3:t=f
v=new B.X6(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akO,w)},
a7l(d,e){return this.bnI(0,e)},
bnI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7l)
case 2:return A.h(null,w)}})
return A.i($async$a7l,w)},
a7t(d,e){return this.bnY(0,e)},
bnY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7t)
case 2:return A.h(null,w)}})
return A.i($async$a7t,w)},
aoK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoK=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.i($async$aoK,w)},
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
this.adP()},
adP(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZG(u.e,u.c),$async$adP)
case 2:t=e
if(v.c!=null)v.m(new B.d3N(v,t))
return A.h(null,w)}})
return A.i($async$adP,w)},
Qa(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ap4(t.e,t.c,!1),$async$Qa)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f0E)
x=1
break}x=4
return A.b(B.a6Q(u.a.c,"individual"),$async$Qa)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5Q(A.ea(new B.d3K(u),!1,null,y.H)),$async$Qa)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qa,w)},
Ja(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ja=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fr6(o),$async$Ja)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6U(o.e,r,s,q),$async$Ja)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eYH)
x=1
break}x=5
return A.b(B.a6Q(u.a.c,"member"),$async$Ja)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5Q(A.ea(new B.d3M(u),!1,null,y.H)),$async$Ja)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Ja,w)},
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
return A.b(B.frB(o),$async$xY)
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
break}if(!p){o.K(y.q).f.U(D.eYE)
x=1
break}x=10
return A.b(B.ap9(u.a.c),$async$xY)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5Q(A.ea(new B.d3L(u),!1,null,y.H)),$async$xY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xY,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jj:C.pM,q=B.fXK(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fR,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fjz,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h8,t,t,t),C.aB,D.fCE,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c_6,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lF(new B.d3P(),t),C.O,w,C.dZ,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acC(C.eT,C.azf,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gce5(),t),C.ac],v))
p.push(new B.acC(C.oX,C.a2m,"Team Member","Sign in with your organization access code + password",u.gceX(),t))
p.push(C.ac)
p.push(new B.acC(C.alJ,C.a3W,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gces(),t))
return A.c6(t,r,A.bm(!0,A.cc(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiZ,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acC.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ep,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ov,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BM,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bP,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBE.prototype={}
B.aEQ.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oG(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b6(x,w+1).toLowerCase())},
gapo(){var x=this.d
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
bcg(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cJ_(d){return this.bcg(null,d)},
aDN(d){return this.bcg(d,null)}}
B.UK.prototype={
S(){return new B.aD0(new A.cs(null,y.A))},
gde(){return this.c}}
B.aD0.prototype={
Z(){this.a1()
this.adQ()},
adQ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BG(u.a.c),$async$adQ)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dQA(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adQ,w)},
adR(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fO(new A.fF(s)),$async$adR)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.f1y)
case 1:return A.h(v,w)}})
return A.i($async$adR,w)},
Zy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoc(s.d,4),$async$Zy)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_my_code_"+m+".png"),$async$Zy)
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
return A.i($async$Zy,w)},
ahy(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9Y("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahy,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jj:C.pM,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lN
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
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.cc(A.x(A.a([x,C.mO,w,C.kH,new A.ey(A.p(p,A.pT(p,p,!1,B.hGS(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bP,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kH,A.B(A.a([A.E(A.et(N.C9,C.Ug,q.gc76(),p),1),C.at,A.E(A.dn(C.yL,C.a8R,q.gc77(),A.bo(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.et(M.a1d,D.fyp,q.gctN(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MM,p,p,C.ag)
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
Zz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ir(u.d.a.a)
if(t==null){u.m(new B.dRJ(u))
x=1
break}u.m(new B.dRK(u))
s=u.a
r=s.c
x=3
return A.b(B.a6O(s.d,new B.dRL(u),t,r),$async$Zz)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dRM(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zz,w)},
a1K(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dRN(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rs(r.a.c,q),$async$a1K)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dRO(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahD(p,m,l,j,k),$async$a1K)
case 8:o=e
if(r.c!=null)r.m(new B.dRP(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dRQ(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dRR(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1K,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.af0:D.acN,h=j?D.ags:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.ae3:C.aL
i=[i,e,h,g,f,j?C.fd:C.bS]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bV(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bV(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNH,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ep,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2P,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uo(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biG()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MG,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dRS(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m9,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lp(l.a.d,4)
m=A.C(new A.M(m,new B.dRT(x,new A.aG3(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lU,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d8,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ek,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eXd)
else q.push(A.X(C.lt,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bd,new A.o(u,k,s,t,k,k,C.n),C.iI,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cc(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bwb,k,k,C.ag),1)
u=l.f?k:l.gctO()
t=i[3]
s=i[1]
q=A.n(16)
s=A.et(M.a1d,D.fzq,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc78()
t=A.bo(C.aE,k,k,0,C.c,k,C.ni,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c6(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mG(new B.dRU(),A.x(A.a([e,new A.D(D.bvH,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rU:D.fxO,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.YC,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biG.prototype={
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
adS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dQB(r))
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
return A.b(B.a6T(p,m,n,o,C.a.i(l).length===0?null:l),$async$adS)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.f19)
s=[1]
x=4
break}p.K(y.q).f.U(D.f_N)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dQC(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adS,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jj:C.pM,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fqq,s,s,s,1,s,!0),p=A.p(s,D.bo1,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GT,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bUF,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bUA,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUQ,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc79()
u=A.bo(C.aE,s,s,s,s,C.fS,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.x(A.a([p,C.d8,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rU:C.aSs,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abR.prototype={}
B.bvf.prototype={
a4v(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cg(r.ao_()))
x=3
return A.b(B.R2(t,s),$async$a4v)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4v,w)},
gde(){return this.a}}
B.Nn.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Z0.prototype={
S(){return new B.az5(new A.ar(C.as,$.aw()),A.jU(!0,null,!0,!0,null,null,!1))}}
B.az5.prototype={
Z(){this.a1()
$.aW.x1$.push(new B.d3J(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c7f(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a13(d),u=x.a.c,t=u?C.ih:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jj:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fR,32)],n),l=A.p(w,T.aol,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cC,16)],n),C.ap8,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uo(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buU()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.FD,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.b_9),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d3H(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m9,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nG,new B.d3I(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cS(Q.Kz,A.c0(new A.D(C.xX,A.x(A.a([l,C.aR,k,C.O,j,C.dZ,i,C.dZ,A.B(A.a([f,C.at,A.E(A.c0(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ed4,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc7e(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Ox,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MO,C.d1,w,w,w)}}
B.buU.prototype={
oC(d,e){return e.akJ(e.a.toUpperCase())}}
B.UM.prototype={
S(){return new B.aD2(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aD2.prototype={
Z(){var x=this
x.a1()
x.tL()
x.w=A.dv(C.jp,new B.dRH(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UV()
this.a2()},
a0C(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nm(u.a.c),$async$a0C)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AI(u.a.c),$async$a0C)
case 4:u.m(new s.dR4(u,e))
u.i8("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0C,w)},
tL(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nm(u.a.c),$async$tL)
case 3:t=e
x=4
return A.b(B.AI(u.a.c),$async$tL)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dR5(u,s))
if(t>0)u.i8("Received "+A.u(t)+" file(s) via My Code.")
u.Nz(u.d)
B.BG(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tL,w)},
Nz(d){return this.bCj(d)},
bCj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6Y(r,u.a.c),$async$Nz)
case 8:p=f
if(u.c==null){x=1
break}new B.dQE(u,r,p).$0()
u.c.eg()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mH))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UT(r,u.a.c),$async$Nz)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AI(u.a.c),$async$Nz)
case 12:u.m(new o.dQF(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nz,w)},
NW(d){return this.bID(d)},
bID(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6Y(d,u.a.c),$async$NW)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dQK(u,d,t))
x=6
return A.b(A.fO(new A.fF(t)),$async$NW)
case 6:u.i8("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fO(new A.fF(r.toUpperCase())),$async$NW)
case 7:u.i8("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NW,w)},
i8(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tM(d,e){return this.cEu(d,e)},
cEu(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dRv(r,e))
u=3
x=6
return A.b(d.$0(),$async$tM)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dRw(r))
$.eU.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tM,w)},
gaV6(){var x=this.a
return x.f||x.r||x.w},
I4(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaV6()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c97(s,n,r,q,o,t),$async$I4)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i8("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fDa(o,u.a.c),$async$I4)
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
return A.b(B.D1(s,o,r,q,n,t),$async$I4)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I4,w)},
a_G(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap9(u.a.c),$async$a_G)
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
return A.b(A.a5(t,!1).cm(A.ea(new B.dR1(u,r,q),!1,null,y.H)),$async$a_G)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_G,w)},
a0N(d){return this.cnh(d)},
cng(){return this.a0N(1)},
cnh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaV6()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ap6(u.a.c),$async$a0N)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0N,w)},
abP(d,e,f){return this.bZm(d,e,f)},
bZm(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8(e)
x=1
break}x=3
return A.b(u.tM(new B.dQZ(u,d,null,e,f),"Uploading\u2026"),$async$abP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abP,w)},
bCr(){B.hrG(!1,new B.dQI(this))
return},
csk(){this.m(new B.dR9(this))},
ayi(){var x=0,w=A.j(y.H),v=this
var $async$ayi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCr()
return A.h(null,w)}})
return A.i($async$ayi,w)},
abL(){var x=0,w=A.j(y.H),v=this
var $async$abL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dQO(v),"Importing\u2026"),$async$abL)
case 2:return A.h(null,w)}})
return A.i($async$abL,w)},
Sc(d){return this.cDT(d)},
cDT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mH)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cm(A.ea(new B.dRs(u,d),!1,null,y.H)),$async$Sc)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qu)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).cm(A.ea(new B.dRt(u,d),!1,null,y.H)),$async$Sc)
case 8:x=1
break
case 7:x=u.c_3(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).cm(A.ea(new B.dRu(u,d),!1,null,y.H)),$async$Sc)
case 11:x=1
break
case 10:u.i8("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sc,w)},
c_3(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oG(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHM,C.a.b6(x,w+1).toLowerCase())},
afi(d){return this.ce9(d)},
ce9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mH)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cm(A.ea(new B.dR_(u,d),!1,null,y.H)),$async$afi)
case 5:x=1
break
case 4:u.m(new B.dR0(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afi,w)},
Ry(d){return this.cvh(d)},
cvh(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ry=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pb(t,s.c,s.f),$async$Ry)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dRl(u,d),"Preparing QR\u2026"),$async$Ry)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ry,w)},
ahY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dRm(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dRn(q),s),s.k("J.E"))
if(r.length===0){u.i8("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ry(r),$async$ahY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahY,w)},
ahR(d){return this.cuP(d)},
cuP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a13(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dRf(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahR)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sc(d)
break
case"qr":u.Ry(A.a([d],y.r))
break
case"send_my_code":u.ceM(A.a([d],y.r))
break
case"save":u.ahc(d)
break
case"delete":u.IW(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahR,w)},
Xs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQL(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQM(q),s),s.k("J.E"))
if(r.length===0){u.i8("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pb(t,s.c,s.f),$async$Xs)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tM(new B.dQN(u,r),"Preparing file\u2026"),$async$Xs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xs,w)},
ago(d){return this.clC(d)},
clC(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ago=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hsp(d,!1),$async$ago)
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
return A.i($async$ago,w)},
afo(){var x=0,w=A.j(y.H),v=this,u
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fKM(u,v.a.c),$async$afo)
case 2:return A.h(null,w)}})
return A.i($async$afo,w)},
bCq(){B.hrG(!1,new B.dQH(this,null))
return},
J9(d,e){return this.ceN(d,e)},
b0e(d){return this.J9(null,d)},
ceM(d){return this.J9(d,null)},
ceN(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dR2(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xf.c7().anj(!0,C.a_s,!1),$async$J9)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tM(new B.dR3(l,s,r),"Preparing\u2026"),$async$J9)
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
return A.b(B.bDc(p,l,e,s.a.c),$async$J9)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J9,w)},
Il(d){return this.bZ9(d)},
bZ9(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Il=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hGR(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0e(t),$async$Il)
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
return A.b(u.tM(new B.dQX(u,d),"Receiving video\u2026"),$async$Il)
case 11:x=1
break
case 10:x=12
return A.b(u.tM(new B.dQY(u,d),"Receiving\u2026"),$async$Il)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Il,w)},
Ec(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ec=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CW()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ago(t),$async$Ec)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Il(s),$async$Ec)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).cm(A.ea(new B.dR7(u),!1,null,y.N)),$async$Ec)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tL(),$async$Ec)
case 10:x=1
break
case 9:x=11
return A.b(u.Il(C.a.i(r)),$async$Ec)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ec,w)},
ahc(d){return this.cqT(d)},
cqT(d){var x=0,w=A.j(y.H),v=this
var $async$ahc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tM(new B.dR6(v,d),"Saving\u2026"),$async$ahc)
case 2:return A.h(null,w)}})
return A.i($async$ahc,w)},
IW(d){return this.bKX(d)},
bKX(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l7(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IW)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c9a(t),$async$IW)
case 6:case 5:s=d.a
x=7
return A.b(B.Ew(u.a.c,s),$async$IW)
case 7:u.r.W(0,s)
x=8
return A.b(u.tL(),$async$IW)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IW,w)},
ai3(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a13(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dRr(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ai3)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afo()
break
case"import":u.abL()
break}case 1:return A.h(v,w)}})
return A.i($async$ai3,w)},
c7c(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mH))return C.qc
if(C.a.a0(x,"image/")||d.my(D.Qu))return C.u9
if(C.a.t(x,"pdf"))return E.O2
return D.amb},
B(d){var x,w,v=this,u=null,t=B.a13(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GL,u,u,u,new B.dRC(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bOd,u,u,u,v.e?u:v.gcet(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcsj()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bIx:E.amA,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a1a,u,u,u,v.e?u:v.gc7d(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oc,u,u,u,v.e?u:v.gb1m(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPW,u,u,u,v.e?u:new B.dRD(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lF(new B.dRE(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bV(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bV(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m6(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.az2(C.jv,s,!0,t,w?u:v.gcvi(),u),1)
x.push(new A.D(D.but,A.mG(new B.dRF(),A.B(A.a([s,C.at,A.E(new B.az2(C.vV,"Export",!1,t,w?u:v.gbOF(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iJ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdk(t,v.e?u:v.gb1m(),u)
else s=A.kd(!0,u,u,new B.dRG(v,t),s,u,D.bul,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.az2.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aE,t,t,0,C.c,t,C.vE,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vE,t,new A.b7(s,C.Y),new A.az(v,1,C.q,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bdk.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mG(new B.d3F(),new A.D(E.Zw,A.x(A.a([A.mG(new B.d3G(),A.p(x,A.X(C.yh,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.az,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ey,C.im,x,x,new A.bq(0.86,1,w),s),C.dZ,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dZ,A.dn(C.oc,D.fCX,this.d,A.bo(C.aE,x,x,x,C.c,x,C.Zr,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.Ba,x,x,new A.bq(0,1,w),s),x,x,x)}}
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
if(!o||i.my(D.mH))p=D.dfg
else{p=C.a.a0(p,"image/")||i.my(D.Qu)
n=y.O
p=p?A.a([C.cT,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapo()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mH))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fQ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mH)))l.push(A.fVr(C.aE,!1,j,j,j,!1,j,j,new B.d41(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.oa,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mG(new B.d42(),new A.D(C.e7,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YZ,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ah),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.Z2.prototype={
S(){return new B.az7()},
gde(){return this.c}}
B.az7.prototype={
Z(){this.a1()
this.xO()},
q(){B.hH5(this.e)
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
n=B.hH8(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hH7(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d3Z(s))
x=1
break}s.m(new B.d4_(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d40(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xO,w)},
a1J(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rs(t.c,t.d),$async$a1J)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.eZd)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahD(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1J)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1J,w)},
bZ2(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.A,v,new B.d3X(w,t),C.h_,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aH.gan(t))x=A.fQ(t,C.A,v,new B.d3Y(w),C.h_,C.dw,!0,v,!1,v,v)
else return C.bI
return A.ux(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a13(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Ca,u,u,u,v.gb5c(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Eo
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.Ca,D.flQ,v.gb5c(),A.bo(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bZ2()}return A.c6(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Z_.prototype={
S(){return new B.az4(A.air(),C.bx,C.bx)},
gde(){return this.c}}
B.az4.prototype={
Z(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fx(w,A.a3(w).k("fx<1>")).ip(new B.d3C(v))
x.gcRS().ip(new B.d3D(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a3(x).k("fx<1>"))}if(x==null)x=C.b5i
x.ip(new B.d3E(v))
v.xO()},
xO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rs(p.c,p.d),$async$xO)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d3v(s))
x=1
break}x=8
return A.b(s.d.C6(0,new A.a39(r,s.a.d.c)),$async$xO)
case 8:if(s.c==null){x=1
break}s.m(new B.d3w(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d3x(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xO,w)},
ZA(){var x=0,w=A.j(y.H),v=this,u
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$ZA)
case 5:x=3
break
case 4:x=6
return A.b(u.is(0),$async$ZA)
case 6:case 3:return A.h(null,w)}})
return A.i($async$ZA,w)},
aSY(d){var x=d.a
return C.a.aX(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aX(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a13(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Eo
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJw,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Ox,C.n),o,88,o,o,o,o,o,88)
t=A.l1(C.aE,o,o,m,0,new B.d3y(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aSY(p.w)+" / "+p.aSY(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aE,o,o,o,o,D.eVG,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yr:C.iM,o,o,o,o,o)
x=A.x(A.a([u,C.kH,t,x,C.d8,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc7g(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c6(v,w,A.av(new A.D(C.rc,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pz.prototype={
S(){return new B.aza()},
gde(){return this.c}}
B.aza.prototype={
Z(){this.a1()
this.Px()},
Px(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Px=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fXL(o.c,o.d,new B.d4f(s)),$async$Px)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d4g(s))
x=1
break}s.e=r
q=O.i2U(r)
if(q==null){s.m(new B.d4h(s))
x=1
break}s.d=q
q.aQ(0,s.gb02())
x=8
return A.b(q.io(0).d8(0,C.r8),$async$Px)
case 8:if(s.c==null){x=1
break}s.m(new B.d4i(s))
x=9
return A.b(q.pW(0),$async$Px)
case 9:q.tn(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d4j(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Px,w)},
ccL(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d4k(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CT(0,x.gb02())
w=x.d
if(w!=null)w.q()
B.icK(x.e)
x.a2()},
adV(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZO(u.c,u.d),$async$adV)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adV,w)},
B(d){var x,w,v,u=this,t=null,s=B.a13(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p3,t,t,t,u.gc7a(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Eo
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahW(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fL(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.Ac(s,t),A.aB(t,A.Db(A.p(t,A.X(q?I.yr:C.iM,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bP,t,t,t),C.bd,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d4m(u),t,t,t,t,t,t,!1,C.a5)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Z4.prototype={
S(){return new B.az8(new A.cs(null,y.A))}}
B.az8.prototype={
gcEc(){var x,w,v=this.a
if(v.e!==D.RS)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b6(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDR(){var x,w,v=this.a
if(v.e!==D.zo)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b6(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a1()
x=v.gcEc()
if(x!=null){v.Qz(x)
v.e=A.dv(R.Fv,new B.d4b(v,x))}w=v.gcDR()
if(w!=null){v.Qy(w)
v.f=A.dv(C.fY,new B.d4c(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qy(d){return this.cjO(d)},
cjO(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ape(d),$async$Qy)
case 3:t=f
x=4
return A.b(B.c9t(d),$async$Qy)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d43(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qy,w)},
Qz(d){return this.cjP(d)},
cjP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fLc(d),$async$Qz)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bB7(t),$async$Qz)
case 4:if(u.c==null){x=1
break}u.m(new B.d44(u))
u.c.K(y.q).f.U(D.aPn)
case 1:return A.h(v,w)}})
return A.i($async$Qz,w)},
gc35(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc7b(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1v(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CW()){t=u.c
if(t!=null)t.K(y.q).f.U(D.f1j)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).cm(A.ea(new B.d45(),!1,null,y.N)),$async$a1v)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bB7(s),$async$a1v)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aPn)
case 1:return A.h(v,w)}})
return A.i($async$a1v,w)},
a9E(d){return this.bIE(d)},
bIE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fO(new A.fF(C.d.aG(t,", "))),$async$a9E)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9E,w)},
adT(d){return this.bIo(d)},
bIo(d){var x=0,w=A.j(y.H),v=this
var $async$adT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fO(new A.fF(v.a.c)),$async$adT)
case 2:if(d.e!=null)d.K(y.q).f.U(D.eZH)
return A.h(null,w)}})
return A.i($async$adT,w)},
a1q(d){return this.cqV(d)},
cqV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoc(s.d,4),$async$a1q)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_doc_share_qr.png"),$async$a1q)
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
return A.i($async$a1q,w)},
gaWe(){var x,w=this.a
if(w.e!==D.HW)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b6(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b6(x,13))
return null},
a9B(d){return this.bIx(d)},
bIx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWe()
if(t==null){x=1
break}x=3
return A.b(A.fO(new A.fF(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9B)
case 3:if(d.e!=null)d.K(y.q).f.U(D.f0j)
case 1:return A.h(v,w)}})
return A.i($async$a9B,w)},
adU(){var x=0,w=A.j(y.H),v=this,u
var $async$adU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UV(),$async$adU)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adU,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a13(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HW&&i!==D.RS&&i!==D.zo
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HW||t===D.RS||t===D.zo?l:A.aH(l,l,l,l,C.l4,l,l,l,m.gaZc(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc35(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HW){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc7b(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bTJ,D.fv2,new B.d46(m,d),l)],p))}if(m.a.e===D.HW&&m.gaWe()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bQf,D.frN,new B.d47(m,d),l)],p))
if(m.a.e===D.zo){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Er:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}if(m.a.e===D.RS){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Er:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l),C.ac,A.dn(D.bM_,D.fy6,m.gcri(),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.os(i,A.c6(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.et(N.C9,C.Ug,new B.d48(m,d),l),1),C.at,A.E(A.dn(C.yL,C.a8R,new B.d49(m,d),A.bo(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zX,m.gaZc(),A.bo(C.aK,l,l,l,l,C.fS,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d4a(),y.C)}}
B.ac8.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cc(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.em(A.a([A.bG(C.wF,new B.d3u(d),x)],u),x,x,C.mY,v,x,x,x,x,D.fkR,x)}}
B.YZ.prototype={
S(){return new B.az3(A.zj(C.xE,C.nN,C.un))}}
B.az3.prototype={
q(){this.d.q()
this.a2()},
awV(d){var x,w,v,u,t
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
return A.c6(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fsg,x,x,x,1,x,!0),C.w,A.zi(this.d,C.bX,this.gawU()),x,!1,!1,x,x)}}
B.Z5.prototype={
S(){return new B.az9(A.zj(C.xE,C.nN,C.un))},
gde(){return this.c}}
B.az9.prototype={
c_5(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.S3("text/plain"),$async$afL)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.f1d)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afL,w)},
aar(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aar=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hsp(p,!0),$async$aar)
case 3:t=e
p=t==null
s=B.a6V(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.eYO)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aar,w)},
q(){this.d.q()
this.a2()},
awV(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_5(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.ant,v,v,v,w.gbOb(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1h,v,v,v,w.gchb(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.ri:P.NO,v,v,v,v,v),v,v,v,new B.d4e(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fyY,v,v,v,1,v,!0)
u=A.zi(w.d,C.bX,w.gawU())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eiQ],s),v),v,!1,!1,v,v)}}
B.bdl.prototype={
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
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.ZC,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.eA,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
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
B.cko.prototype={}
B.F_.prototype={}
B.a9j.prototype={}
B.atw.prototype={}
B.X6.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jn)","m(jn)","UM(Y)","~()","Z1(Y)","G(G,jn)","Pz(Y)","~(m0)","cr(F_)","aA<jn?>(@)","UK(Y)","UO(Y)","D(jn)","jn(@)","a6<m,@>(jn)","Z0(Y)","UL(Y)","Z2(Y)","Z_(Y)","Z4(Y)","ac8(Y)","ai<jn>()","Z5(Y)","aca(Y,G)","YZ(Y)","a6<m,aD>(jn)","cr(X5)","cr(a9j)","aA<cr>(F_)"])
B.ckk.prototype={
$1(d){var x=this.a
x.x=D.aMw
x.y.L(0,D.aMw)},
$S:69}
B.ckl.prototype={
$1(d){var x=this.a
x.x=D.aMv
x.y.L(0,D.aMv)},
$S:69}
B.ckm.prototype={
$1(d){var x=this.a
x.ah5(A.aOL(d.data)).bB(new B.ckj(x),y.b)},
$S:69}
B.ckj.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ckn.prototype={
$1(d){},
$S:69}
B.ckq.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hLP(d.channel))},
$S:15}
B.ckr.prototype={
$1(d){},
$S:15}
B.cks.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i3X(w.iceConnectionState)
x.cx=w
if($.h5I())switch(w.a){case 0:x.cy=D.aMB
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
B.ckt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i3Y(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:146}
B.cku.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ied(w.signalingState)},
$S:146}
B.ckv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.icr(w.connectionState)},
$S:146}
B.ckw.prototype={
$1(d){},
$S:146}
B.ckx.prototype={
$1(d){},
$S:15}
B.fmW.prototype={
$1(d){var x=y.F.a(new A.rQ([],[]).pF(d.target.result,!1)),w=C.xF.t(x.objectStoreNames,"blobs")
if(!w)C.xB.KM(x,"blobs")},
$S:190}
B.fKA.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w7.fg(this.b)
$.eU.mt()
this.c.$1(d)},
$S:453}
B.fKC.prototype={
$1(d){return this.a.$1(B.hUI(this.b,this.c))},
$S:35}
B.fKB.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fKz.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fKP.prototype={
$1(d){var x=this
return B.hhU(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fKQ.prototype={
$1(d){var x=this
return B.hhU(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fpa.prototype={
$1(d){var x=this
return B.c94(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d3N.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d3K.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c94(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d3M.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c94(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d3L.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c94(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d3P.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bKB,x,x,x,new B.d3O(d),x,x,x,x,x,x),A.E(A.EM(D.Qd,!0,x,C.a0n,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qd,x,g,C.ajj,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d3O.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fr9.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eI,y.o).w,t=this.a,s=t?C.ih:C.c,r=A.n(28),q=A.p(v,D.bol,C.f,v,v,D.b0O,v,v,v,v,D.aj9,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOM,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FI,A.x(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anI,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dW(C.dh,new B.fr7(d),v),1),C.at,A.E(A.bG(D.fqO,new B.fr8(p,x,d),A.bo(C.b0,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mu,v,v,v,v),v)},
$S:59}
B.fr7.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fr8.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.eZW)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aBE(v,x))},
$S:0}
B.frD.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eI,y.o).w,u=x.a,t=u?C.ih:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bob,C.f,w,w,D.b2g,w,w,w,w,D.aj9,w,w,1/0),new A.D(C.FI,A.x(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h1J(u,"Organization name",C.G9,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h1J(u,"Access code",C.nn,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h1J(u,"Member password",H.GG,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fz3,new B.frC(r,q,p,d),A.bo(C.aE,w,w,w,w,C.fS,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mu,w,w,w,w),w)},
$S:59}
B.frC.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.f_0)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEQ(u,x,w))},
$S:0}
B.c8W.prototype={
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
return A.b(A.vk(p,null).d8(0,C.YB),$async$$1)
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
B.c91.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c92.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c93.prototype={
$1(d){return d.b},
$S:z+2}
B.c8Y.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c8Z.prototype={
$1(d){return d.b},
$S:z+2}
B.c8X.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c9_.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c90.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fKN.prototype={
$1(d){return new B.UK(this.a,null)},
$S:z+11}
B.fKO.prototype={
$1(d){return new B.UO(this.a,this.b,this.c,null)},
$S:z+12}
B.dQA.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dRJ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dRK.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dRL.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dRI(x,d))},
$S:2}
B.dRI.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRM.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRN.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dRO.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dRP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRQ.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dRR.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRU.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:101}
B.dRS.prototype={
$1(d){var x=this.a
return x.f?null:x.Zz()},
$S:2}
B.dRT.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qu))s=C.u9
else s=C.a.a0(s,"video/")||d.my(D.mH)?C.qc:D.amb
x=this.b.a
w=y.p
return new A.D(C.kW,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapo(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dQB.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dQC.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c95.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c96.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fLu.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fk7.prototype={
$1(d){return J.k(d)},
$S:17}
B.fpm.prototype={
$1(d){var x=this.b
B.hSL(C.FX.ga69(this.a)).bB(x.gcHi(x),y.H)},
$S:126}
B.fpn.prototype={
$1(d){return this.a.d5(0,null)},
$S:126}
B.fpo.prototype={
$0(){return null},
$S:11}
B.c9k.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fpp.prototype={
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
B.fto.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fnO.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fnP.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c9p.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mH)},
$S:z+1}
B.fPA.prototype={
$1(d){return new B.Z0(this.a,null)},
$S:z+16}
B.d3J.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d3H.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d3I.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dRH.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0C()},
$S:12}
B.dR4.prototype={
$0(){var x=J.bEh(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dR5.prototype={
$0(){var x=J.bEh(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQE.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQD(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDN(this.c)}},
$S:0}
B.dQD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQF.prototype={
$0(){var x=J.bEh(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQK.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQJ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDN(this.c)}},
$S:0}
B.dQJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRv.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dRw.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dR1.prototype={
$1(d){return new B.UL(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dQZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I4(),$async$$0)
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
return A.b(r.a0N(s.gM(t)),$async$$0)
case 8:case 7:r.i8(s.gan(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQI.prototype={
$1(d){this.a.abP(d,"No files selected.","Added")},
$S:453}
B.dR9.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dR8(),A.S(x).k("M<1,m>")))},
$S:0}
B.dR8.prototype={
$1(d){return d.a},
$S:z+2}
B.dQO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xf.c7().cTP(C.a_s,!0),$async$$0)
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
B.dRs.prototype={
$1(d){return new B.Pz(this.a.a.c,this.b,null)},
$S:z+7}
B.dRt.prototype={
$1(d){return new B.Z2(this.a.a.c,this.b,null)},
$S:z+18}
B.dRu.prototype={
$1(d){return new B.Z_(this.a.a.c,this.b,null)},
$S:z+19}
B.dR_.prototype={
$1(d){return new B.Pz(this.a.a.c,this.b,null)},
$S:z+7}
B.dR0.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dRl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I4(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6X(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i8("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cng(),$async$$0)
case 5:x=6
return A.b(p.tL(),$async$$0)
case 6:r=A.S(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dRh(p),r),new B.dRi(),r.k("M<ak.E,m>")).c0(0,new B.dRj())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).cm(A.ea(new B.dRk(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pa(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UV(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRh.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dRg(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dRg.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRi.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dRj.prototype={
$1(d){return d.length!==0},
$S:3}
B.dRk.prototype={
$1(d){var x=this.a
return new B.Z4(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dRm.prototype={
$1(d){return d.a},
$S:z+2}
B.dRn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dRf.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kV,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapo(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mH)?C.ub:C.p0
p=!x||p.my(D.mH)?"Play video":"View"
return A.c0(A.bm(!0,new A.D(C.Bm,A.x(A.a([q,o,t,C.aB,B.Z3(!1,u,!1,w,p,new B.dRa(d),v),B.Z3(!1,u,!1,C.jv,"Share via QR",new B.dRb(d),"Letters/numbers QR code"),B.Z3(!1,u,!1,D.a0t,"Send to their Code",new B.dRc(d),"Enter someone else's personal code"),B.Z3(!1,u,!1,C.hF,"Download / save",new B.dRd(d),v),C.am,B.Z3(!1,u,!0,C.e9,"Delete",new B.dRe(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kN,v,v,C.n),C.bf)},
$S:688}
B.dRa.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dRb.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dRc.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dRd.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dRe.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dQL.prototype={
$1(d){return d.a},
$S:z+2}
B.dQM.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dQN.prototype={
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
B.dQH.prototype={
$1(d){var x=this.a
x.tM(new B.dQG(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dQG.prototype={
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
return A.b(B.bDc(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dR2.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dR3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fXO(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gr(new B.dQT(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i8("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dQU(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dQV(s))
case 5:x=8
return A.b(r.b.it(0,C.Fs,new B.dQW()),$async$$0)
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
B.dQT.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQQ(x,d,e))},
$S:140}
B.dQQ.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQU.prototype={
$1(d){return new B.ac8(this.a.a,null)},
$S:z+21}
B.dQV.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dQW.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dQY.prototype={
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
return A.b(u.a.b0e(B.Ir(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apd(new B.dQR(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fXN(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i8(q)
x=1
break}x=10
return A.b(s.tL(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dQS()).gM(0)
s.i8(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQP(x,d,e))},
$S:140}
B.dQP.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQS.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mH)},
$S:z+1}
B.dR7.prototype={
$1(d){return new B.Z5(this.a.a.c,null)},
$S:z+23}
B.dR6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZO(u.a.c,v.b),$async$$0)
case 2:t.i8(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRr.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bm(!0,new A.D(C.Bm,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kV,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.Z3(!0,w,!1,C.nn,"My Code",new B.dRo(d),"Your personal code & QR \u2014 others send docs to you"),B.Z3(!1,w,!1,D.a0t,"Send to their Code",new B.dRp(this.a,d),"Enter someone else's 5-digit code + letter"),B.Z3(!1,w,!1,S.yB,"Import backup",new B.dRq(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kN,x,x,C.n),C.bf)},
$S:688}
B.dRo.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dRp.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bCq()},
$S:0}
B.dRq.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dRE.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IB(D.Qd,x,C.a0n,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Qd).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dRC.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dRD.prototype={
$0(){this.a.ai3()
return null},
$S:0}
B.dRF.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*10)),e)},
$S:101}
B.dRG.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aca(e,w,v,this.b,x.e,x.c7c(w),new B.dRy(x,w),new B.dRz(x,v,w),new B.dRA(x,w),new B.dRB(x,w),null)},
$S:z+24}
B.dRy.prototype={
$0(){this.a.afi(this.b)
return null},
$S:0}
B.dRz.prototype={
$0(){var x=this.a
return x.m(new B.dRx(x,this.b,this.c))},
$S:0}
B.dRx.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dRA.prototype={
$0(){this.a.NW(this.b)
return null},
$S:0}
B.dRB.prototype={
$0(){this.a.ahR(this.b)
return null},
$S:0}
B.d3F.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*18)),e)},
$S:101}
B.d3G.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:134}
B.d42.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:101}
B.d41.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d3Z.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d4_.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d40.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d3X.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gan(w))return A.fQ(w,C.A,x,new B.d3V(this.a),C.h_,C.dw,!0,x,!1,x,x)
$.aW.x1$.push(new B.d3W(this.a))
return C.bI},
$S:135}
B.d3V.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d3T(this.a))
return C.bI},
$S:199}
B.d3T.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3Q(x))},
$S:8}
B.d3Q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3W.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3S(x))},
$S:8}
B.d3S.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3Y.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d3U(this.a))
return C.bI},
$S:199}
B.d3U.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3R(x))},
$S:8}
B.d3R.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3C.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3B(x,d))},
$S:1743}
B.d3B.prototype={
$0(){return this.a.f=this.b===C.uI},
$S:0}
B.d3D.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3A(x,d))},
$S:8}
B.d3A.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d3E.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3z(x,d))},
$S:8}
B.d3z.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d3v.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d3w.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d3x.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d3y.prototype={
$1(d){return this.a.d.MW(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d4f.prototype={
$0(){var x=this.a.a
return B.rs(x.c,x.d)},
$S:1744}
B.d4g.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d4h.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d4i.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d4j.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d4k.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d4m.prototype={
$0(){var x=this.a
x.m(new B.d4l(x))},
$S:0}
B.d4l.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pW(0)},
$S:0}
B.d4b.prototype={
$1(d){return this.a.Qz(this.b)},
$S:12}
B.d4c.prototype={
$1(d){return this.a.Qy(this.b)},
$S:12}
B.d43.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d44.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d45.prototype={
$1(d){return D.h4j},
$S:z+25}
B.d4a.prototype={
$2(d,e){if(d)B.UV()},
$S:122}
B.d46.prototype={
$0(){return this.a.a9E(this.b)},
$S:0}
B.d47.prototype={
$0(){return this.a.a9B(this.b)},
$S:0}
B.d48.prototype={
$0(){return this.a.adT(this.b)},
$S:0}
B.d49.prototype={
$0(){return this.a.a1q(this.b)},
$S:0}
B.d3u.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d4e.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q_(),$async$$0)
case 2:u.m(new B.d4d(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d4d.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c9r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mH)},
$S:z+1}
B.c9s.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c9q.prototype={
$2(d,e){return this.bjH(d,e)},
bjH(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
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
B.ft0.prototype={
$1(d){if(d===D.a6v&&(this.a.a.a&30)===0)this.a.fV(0)},
$S:z+27}
B.ft1.prototype={
$0(){},
$S:11}
B.fty.prototype={
blf(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
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
r.c=B.hd1(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.blf(d,e)},
$S:736}
B.ftx.prototype={
$1(d){var x=this
d.b=new B.ftw(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.ftw.prototype={
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
return A.b(B.aZP(n,m),$async$$1)
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
return A.b(B.fhf(l,n.b,m,n.c,s.d),$async$$1)
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
x(v=B.az6.prototype,"gce5","Qa",0)
x(v,"gceX","Ja",0)
x(v,"gces","xY",0)
x(v=B.aD0.prototype,"gc76","adR",0)
x(v,"gc77","Zy",0)
x(v,"gctN","ahy",0)
x(v=B.aD3.prototype,"gc78","Zz",0)
x(v,"gctO","a1K",0)
x(B.aD1.prototype,"gc79","adS",0)
x(B.az5.prototype,"gc7e","c7f",4)
x(v=B.aD2.prototype,"gcet","a_G",0)
x(v,"gcsj","csk",4)
x(v,"gb1m","ayi",0)
x(v,"gcvi","ahY",0)
x(v,"gbOF","Xs",0)
x(v,"gc7d","Ec",0)
x(B.az7.prototype,"gb5c","a1J",0)
x(B.az4.prototype,"gc7g","ZA",0)
x(v=B.aza.prototype,"gb02","ccL",4)
x(v,"gc7a","adV",0)
x(v=B.az8.prototype,"gcri","a1v",0)
x(v,"gaZc","adU",0)
w(B.az3.prototype,"gawU","awV",8)
x(v=B.az9.prototype,"gchb","afL",0)
x(v,"gbOb","aar",0)
w(v,"gawU","awV",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cko,B.a9j,B.atw,B.aBE,B.aEQ,B.jn,B.abR,B.bvf,B.F_,B.X6])
w(B.ckp,B.cko)
w(B.b3W,B.a9j)
x(A.i0,[B.ckk,B.ckl,B.ckm,B.ckj,B.ckn,B.ckq,B.ckr,B.cks,B.ckt,B.cku,B.ckv,B.ckw,B.ckx,B.fmW,B.fKA,B.fKC,B.fKB,B.fKP,B.fKQ,B.fpa,B.d3K,B.d3M,B.d3L,B.d3P,B.fr9,B.frD,B.c8W,B.c92,B.c93,B.c8Z,B.c8X,B.c9_,B.c90,B.fKN,B.fKO,B.dRL,B.dRU,B.dRS,B.dRT,B.fk7,B.fpm,B.fpn,B.c9k,B.fpp,B.fto,B.fnO,B.fnP,B.c9p,B.fPA,B.d3J,B.d3H,B.dRH,B.dQD,B.dQJ,B.dR1,B.dQI,B.dR8,B.dRs,B.dRt,B.dRu,B.dR_,B.dRh,B.dRg,B.dRi,B.dRj,B.dRk,B.dRm,B.dRn,B.dRf,B.dQL,B.dQM,B.dQH,B.dR2,B.dQU,B.dQS,B.dR7,B.dRr,B.dRE,B.dRF,B.d3F,B.d3G,B.d42,B.d41,B.d3X,B.d3V,B.d3T,B.d3W,B.d3Y,B.d3U,B.d3C,B.d3D,B.d3E,B.d3y,B.d4b,B.d4c,B.d45,B.c9r,B.c9s,B.ft0,B.ftx,B.ftw])
w(B.b3X,B.atw)
x(A.ja,[B.fKz,B.d3N,B.d3O,B.fr7,B.fr8,B.frC,B.dQA,B.dRJ,B.dRK,B.dRI,B.dRM,B.dRN,B.dRO,B.dRP,B.dRQ,B.dRR,B.dQB,B.dQC,B.fpo,B.d3I,B.dR4,B.dR5,B.dQE,B.dQF,B.dQK,B.dRv,B.dRw,B.dQZ,B.dR9,B.dQO,B.dR0,B.dRl,B.dRa,B.dRb,B.dRc,B.dRd,B.dRe,B.dQN,B.dQG,B.dR3,B.dQX,B.dQQ,B.dQV,B.dQW,B.dQY,B.dQP,B.dR6,B.dRo,B.dRp,B.dRq,B.dRC,B.dRD,B.dRy,B.dRz,B.dRx,B.dRA,B.dRB,B.d3Z,B.d4_,B.d40,B.d3Q,B.d3S,B.d3R,B.d3B,B.d3A,B.d3z,B.d3v,B.d3w,B.d3x,B.d4f,B.d4g,B.d4h,B.d4i,B.d4j,B.d4k,B.d4m,B.d4l,B.d43,B.d44,B.d46,B.d47,B.d48,B.d49,B.d3u,B.d4e,B.d4d,B.ft1])
x(A.md,[B.ac9,B.Nn,B.a9k,B.Op,B.X5,B.Oo,B.F0])
x(A.ag,[B.Z1,B.UK,B.UO,B.UL,B.Z0,B.UM,B.Z2,B.Z_,B.Pz,B.Z4,B.YZ,B.Z5])
x(A.ah,[B.az6,B.aD0,B.aD3,B.aD1,B.az5,B.aD2,B.az7,B.az4,B.aza,B.az8,B.az3,B.az9])
x(A.au,[B.acC,B.az2,B.bdk,B.aca,B.ac8,B.bdl])
x(A.kn,[B.c91,B.c8Y,B.c95,B.c96,B.fLu,B.dQT,B.dQR,B.dRG,B.d4a,B.c9q,B.fty])
x(A.iU,[B.biG,B.buU])})()
A.k2(b.typeUniverse,JSON.parse('{"b3W":{"a9j":[]},"b3X":{"atw":[]},"Z1":{"ag":[],"t":[]},"az6":{"ah":["Z1"]},"acC":{"au":[],"t":[]},"UK":{"ag":[],"t":[]},"UO":{"ag":[],"t":[]},"aD0":{"ah":["UK"]},"aD3":{"ah":["UO"]},"biG":{"iU":[]},"UL":{"ag":[],"t":[]},"aD1":{"ah":["UL"]},"Z0":{"ag":[],"t":[]},"UM":{"ag":[],"t":[]},"aca":{"au":[],"t":[]},"Z2":{"ag":[],"t":[]},"Z_":{"ag":[],"t":[]},"Pz":{"ag":[],"t":[]},"Z4":{"ag":[],"t":[]},"ac8":{"au":[],"t":[]},"YZ":{"ag":[],"t":[]},"Z5":{"ag":[],"t":[]},"az5":{"ah":["Z0"]},"buU":{"iU":[]},"aD2":{"ah":["UM"]},"az2":{"au":[],"t":[]},"bdk":{"au":[],"t":[]},"az7":{"ah":["Z2"]},"az4":{"ah":["Z_"]},"aza":{"ah":["Pz"]},"az8":{"ah":["Z4"]},"az3":{"ah":["YZ"]},"az9":{"ah":["Z5"]},"bdl":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ug"),k:x("LQ()"),m:x("bk<m,m>"),F:x("r3"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a6<m,Q>>"),t:x("O<a6<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(lA,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iU>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<m,m>"),P:x("a6<m,@>"),f:x("a6<@,@>"),o:x("iE"),e:x("ii9"),af:x("Ec"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("wa"),ab:x("F_"),br:x("atw"),v:x("X6"),N:x("m"),X:x("bq<K>"),Q:x("lM"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a6<m,@>>"),c7:x("t"),ch:x("bY<ai<jn>>"),aW:x("bY<dL?>"),aY:x("bY<~>"),cx:x("ac9"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBE"),bG:x("aEQ"),q:x("n2"),B:x("ps<F_>"),c6:x("ps<a9k>"),y:x("Q"),i:x("K"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a6<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("X6?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Nn,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abR?"),bk:x("aBE?"),ag:x("aEQ?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b_9=new A.az(C.aE,2,C.q,-1)
D.bYf=new A.a9(C.a3,C.a8,C.x,C.a2m,null,null)
D.b0O=new A.o(null,null,null,C.mf,null,D.bYf,C.n)
D.b2g=new A.o(null,null,null,C.mf,null,E.GT,C.n)
D.acN=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ae3=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.af0=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ags=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.flJ=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fzZ=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DE,null,null,null,null,null,null,null,null,null)
D.d6X=x([D.flJ,C.am,D.fzZ],y.p)
D.bo1=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d6X,null)
D.fEk=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fq1=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DE,null,null,null,null,null,null,null,null,null)
D.dmM=x([D.fEk,C.am,D.fq1],y.p)
D.bob=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dmM,null)
D.fAA=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.ftQ=new A.y("Enter the access code and password from your organization.",null,G.DE,null,null,null,null,null,null,null,null,null)
D.dkB=x([D.fAA,C.am,D.ftQ],y.p)
D.bol=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dkB,null)
D.bul=new A.R(16,10,16,28)
D.but=new A.R(16,14,16,4)
D.bvH=new A.R(20,0,20,16)
D.bwb=new A.R(20,8,20,16)
D.aj9=new A.R(24,22,24,20)
D.a0t=new A.a0(63394,"MaterialIcons",!1)
D.amb=new A.a0(63515,"MaterialIcons",!1)
D.bIx=new A.a0(983813,"MaterialIcons",!1)
D.bFM=new A.a0(62867,"MaterialIcons",!1)
D.bJw=new A.ae(D.bFM,44,C.c,null,null,null)
D.bKB=new A.ae(C.q2,null,C.ad,null,null,null)
D.bM_=new A.ae(C.j5,18,null,null,null,null)
D.bNH=new A.ae(D.a0t,26,C.c,null,null,null)
D.bOd=new A.ae(C.C0,null,null,null,null,null)
D.bOM=new A.ae(C.yC,null,null,null,null,null)
D.bPW=new A.ae(W.O0,null,null,null,null,null)
D.bQf=new A.ae(C.hs,16,null,null,null,null)
D.bTJ=new A.ae(C.rm,16,null,null,null,null)
D.bJO=new A.ae(C.nn,null,null,null,null,null)
D.bUA=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPj=new A.ae(C.G9,null,null,null,null,null)
D.bUF=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bK8=new A.ae(H.GG,null,null,null,null,null)
D.bUQ=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bK8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cIi=x([C.fd,C.b0,C.aE],y.O)
D.c_6=new A.a9(C.az,C.aC,C.x,D.cIi,null,null)
D.cHM=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qd=x([C.fd,C.aE],y.O)
D.Qu=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mH=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dfg=x([C.oK,C.aE],y.O)
D.e78={iceServers:0}
D.aHa={urls:0}
D.dqx=new A.bk(D.aHa,["stun:stun.l.google.com:19302"],y.m)
D.dqw=new A.bk(D.aHa,["stun:stun1.l.google.com:19302"],y.m)
D.cYb=x([D.dqx,D.dqw],A.ax("O<a6<m,m>>"))
D.dpP=new A.bk(D.e78,[D.cYb],A.ax("bk<m,@>"))
D.HW=new B.Nn(0,"lanDirect")
D.RR=new B.Nn(1,"cloudStash")
D.dBT=new B.Nn(2,"inlineInstant")
D.RS=new B.Nn(3,"webrtcLink")
D.zo=new B.Nn(4,"videoCloud")
D.fzY=new A.y("Receive file",null,C.mQ,null,null,null,null,null,null,null,null,null)
D.cxM=x([E.anQ,C.ab,D.fzY],y.p)
D.eRa=new A.ci(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cxM,null)
D.ed4=new A.D(C.cm,D.eRa,null)
D.fcP=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a32,null,null,null)
D.fmg=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fcP,null,C.L,null,null,null,null,null,null,null)
D.ecl=new A.D(C.Br,D.fmg,null)
D.b6w=new A.cp(C.A,null,null,D.ecl,null)
D.eiQ=new A.cL(0,null,0,28,null,null,D.b6w,null)
D.ej8=new B.a9k(0,"RTCDataChannelConnecting")
D.aMv=new B.a9k(1,"RTCDataChannelOpen")
D.aMw=new B.a9k(3,"RTCDataChannelClosed")
D.ej9=new B.F0(0,"RTCIceConnectionStateNew")
D.eja=new B.F0(1,"RTCIceConnectionStateChecking")
D.ejb=new B.F0(2,"RTCIceConnectionStateCompleted")
D.ejc=new B.F0(3,"RTCIceConnectionStateConnected")
D.ejd=new B.F0(4,"RTCIceConnectionStateCount")
D.eje=new B.F0(5,"RTCIceConnectionStateFailed")
D.ejf=new B.F0(6,"RTCIceConnectionStateDisconnected")
D.aMx=new B.F0(7,"RTCIceConnectionStateClosed")
D.aMy=new B.X5(0,"RTCIceGatheringStateNew")
D.ejg=new B.X5(1,"RTCIceGatheringStateGathering")
D.a6v=new B.X5(2,"RTCIceGatheringStateComplete")
D.a6w=new B.Oo(0,"RTCPeerConnectionStateClosed")
D.aMz=new B.Oo(1,"RTCPeerConnectionStateFailed")
D.aMA=new B.Oo(2,"RTCPeerConnectionStateDisconnected")
D.aMB=new B.Oo(3,"RTCPeerConnectionStateNew")
D.aMC=new B.Oo(4,"RTCPeerConnectionStateConnecting")
D.aMD=new B.Oo(5,"RTCPeerConnectionStateConnected")
D.ejh=new B.Op(0,"RTCSignalingStateStable")
D.eji=new B.Op(1,"RTCSignalingStateHaveLocalOffer")
D.ejj=new B.Op(2,"RTCSignalingStateHaveRemoteOffer")
D.ejk=new B.Op(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ejl=new B.Op(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aME=new B.Op(5,"RTCSignalingStateClosed")
D.eVG=new A.as(160,48)
D.b7K=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eXd=new A.a7(16,16,D.b7K,null)
D.fpq=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eYE=new A.b1(D.fpq,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fwN=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eYH=new A.b1(D.fwN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFo=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eYO=new A.b1(D.fFo,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fp0=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eZd=new A.b1(D.fp0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fAL=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPn=new A.b1(D.fAL,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fC9=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eZH=new A.b1(D.fC9,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fGN=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZW=new A.b1(D.fGN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEO=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f_0=new A.b1(D.fEO,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fG0=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f_N=new A.b1(D.fG0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fnD=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new A.b1(D.fnD,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fyB=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f0E=new A.b1(D.fyB,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.frD=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f19=new A.b1(D.frD,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fGT=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f1d=new A.b1(D.fGT,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fnT=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f1j=new A.b1(D.fnT,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmC=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f1y=new A.b1(D.fmC,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fjz=new A.y("NGMY DOC SHARE",null,C.aQH,null,null,null,null,null,null,null,null,null)
D.fkR=new A.y("Show this to sender",null,C.ki,null,null,null,null,null,null,null,null,null)
D.flQ=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fqq=new A.y("Organization settings",null,C.cD,null,null,null,null,null,null,null,null,null)
D.fqO=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.frN=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fsg=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fv2=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new A.y("Send to their Doc Share",null,C.nE,null,null,null,null,null,null,null,null,null)
D.fy6=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fyp=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fyY=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fz3=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fzq=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fCE=new A.y("Share files & videos\nwith a scan.",null,C.aQI,null,null,null,null,null,null,null,null,null)
D.fCX=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h4j=new B.YZ(null)
D.a9N=new B.ac9(0,"docShare")
D.a9O=new B.ac9(1,"gate")
D.UO=new B.ac9(2,"gateNoIndividual")})();(function staticFields(){$.aNw=null
$.ff4=function(){var x=y.N
return A.U(x,x)}()
$.Gd=A.U(y.N,y.D)
$.agd=A.U(y.N,A.ax("lA"))
$.QP=A.U(y.N,y.D)
$.ffy=A.U(y.N,A.ax("abR"))
$.c9j=A.U(y.S,A.ax("bvf"))
$.hd0=1
$.i_G=null
$.i_F=null
$.hS9=null
$.h1W=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iiE","hui",()=>new B.ckp())
x($,"igz","h5I",()=>C.a.t(A.bu(A.bu(A.bu(A.GP(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["dslXcs5O538PSGpOLqEFhw8GiXY="]=a.current})($__dart_deferred_initializers__);