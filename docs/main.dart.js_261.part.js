((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ckt:function ckt(){},
hMj(d){var x=null,w=new B.b3Z(d,D.ejL,new A.ps(x,x,y.c6),new A.ps(x,x,y.B))
w.byo(d)
return w},
b3Z:function b3Z(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cko:function cko(d){this.a=d},
ckp:function ckp(d){this.a=d},
ckq:function ckq(d){this.a=d},
ckn:function ckn(d){this.a=d},
ckr:function ckr(d){this.a=d},
hMk(d,e){var x=y.N
x=new B.b4_(d,e,A.U(x,y.e),A.U(x,y.z))
x.byp(d,e)
return x},
b4_:function b4_(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cku:function cku(d){this.a=d},
ckv:function ckv(d){this.a=d},
ckw:function ckw(d){this.a=d},
ckx:function ckx(d){this.a=d},
cky:function cky(d){this.a=d},
ckz:function ckz(d){this.a=d},
ckA:function ckA(d){this.a=d},
ckB:function ckB(d){this.a=d},
h20(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yP.M_(x,"ngmy_doc_share_v1",new B.fn6(),1)},
hST(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cg(d))
if(y.J.b(d))return new Uint8Array(A.cg(J.f1(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cg(A.Ac(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cg(d))
if(typeof d=="string")try{x=C.cG.aK(d)
return x}catch(w){return v}return v},
R4(d,e){return B.i7a(d,e)},
i7a(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNz
x=7
return A.b(o==null?$.aNz=B.h20():o,$async$R4)
case 7:s=g
r=new Uint8Array(A.cg(e))
q=J.mK(s,"blobs","readwrite")
C.iR.mm(J.mI(q,"blobs"),r,d)
x=8
return A.b(J.pB(q),$async$R4)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R4,w)},
R3(d){return B.i79(d)},
i79(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$R3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNz
x=7
return A.b(o==null?$.aNz=B.h20():o,$async$R3)
case 7:s=f
r=J.mK(s,"blobs","readonly")
x=8
return A.b(C.iR.zx(J.mI(r,"blobs"),d),$async$R3)
case 8:q=f
x=9
return A.b(J.pB(r),$async$R3)
case 9:o=B.hST(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R3,w)},
agW(d){return B.i78(d)},
i78(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNz
x=7
return A.b(p==null?$.aNz=B.h20():p,$async$agW)
case 7:s=f
r=J.mK(s,"blobs","readwrite")
C.iR.FN(J.mI(r,"blobs"),d)
x=8
return A.b(J.pB(r),$async$agW)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agW,w)},
fn6:function fn6(){},
hVc(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bow(w,v))}return u},
hs7(d,e){var x,w={},v=A.aW2("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fKZ(w,v,e)
C.w7.yt(v,"change",new B.fL0(w,v,!1))
C.w7.yt(v,"cancel",new B.fL_(w))
$.eU.mt()
v.click()
A.bM(C.ahn,new B.fKY(w),y.H)},
fKZ:function fKZ(d,e,f){this.a=d
this.b=e
this.c=f},
fL0:function fL0(d,e,f){this.a=d
this.b=e
this.c=f},
fL_:function fL_(d){this.a=d},
fKY:function fKY(d){this.a=d},
D4(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$D4=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gde()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTF()?3:4
break
case 3:x=5
return A.b(B.hnd(e,d,s,!0,!1,f,g,h,!1,i),$async$D4)
case 5:x=1
break
case 4:x=6
return A.b(B.QK(d,s,f,g,h,i),$async$D4)
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
return A.b(B.Iv(s,d),$async$D4)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fix(s,d),$async$D4)
case 14:x=12
return A.b(r.hnd(q,p,o,n,m,l,k,j,a1,i),$async$D4)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).cm(A.ea(new B.fLd(s,i,d,f,g,h),!1,null,y.H)),$async$D4)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).cm(A.ea(new B.fLe(s,i,d,f,g,h),!1,null,y.H)),$async$D4)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$D4,w)},
QK(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QK=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZK(e),$async$QK)
case 3:u=k
x=4
return A.b(B.ap7(d,e,!1),$async$QK)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Iv(e,d),$async$QK)
case 7:if(k){v=D.a9Q
x=1
break}x=8
return A.b(B.UP(e),$async$QK)
case 8:v=t?D.UQ:D.a9R
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZI(d,e)){v=D.a9Q
x=1
break}x=11
return A.b(B.UP(e),$async$QK)
case 11:v=t?D.UQ:D.a9R
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fY9(d,e)){v=D.a9Q
x=1
break}x=14
return A.b(B.UP(e),$async$QK)
case 14:v=D.UQ
x=1
break
case 13:v=t?D.UQ:D.a9R
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QK,w)},
fix(d,e){var x=0,w=A.j(y.y),v
var $async$fix=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZI(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZK(d),$async$fix)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fix,w)},
hnd(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).cm(A.ea(new B.fpm(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hil(d,e,f,g,h,i,j){return new B.Z3(e,j,d,g,h,i,f,null)},
fri(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fri=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.as,u)
s=new A.at(C.as,u)
x=3
return A.b(A.bT(C.K,null,new B.frl(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fri)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fri,w)},
frN(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$frN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.as,u)
s=new A.at(C.as,u)
r=new A.at(C.as,u)
x=3
return A.b(A.bT(C.K,null,new B.frP(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$frN)
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
return A.i($async$frN,w)},
h29(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fDz(d,e){var x=0,w=A.j(y.H),v
var $async$fDz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UP(e),$async$fDz)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fDz,w)},
fLd:function fLd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLe:function fLe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acb:function acb(d,e){this.a=d
this.b=e},
fpm:function fpm(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Z3:function Z3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az9:function az9(){this.c=this.a=this.d=null},
d3R:function d3R(d,e){this.a=d
this.b=e},
d3O:function d3O(d){this.a=d},
d3Q:function d3Q(d){this.a=d},
d3P:function d3P(d){this.a=d},
d3T:function d3T(){},
d3S:function d3S(d){this.a=d},
acE:function acE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBH:function aBH(d,e){this.a=d
this.b=e},
aET:function aET(d,e,f){this.a=d
this.b=e
this.c=f},
frl:function frl(d,e,f){this.a=d
this.b=e
this.c=f},
frj:function frj(d){this.a=d},
frk:function frk(d,e,f){this.a=d
this.b=e
this.c=f},
frP:function frP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
frO:function frO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c8Z(d,e,f,g,h){return B.hHf(d,e,f,g,h)},
hHf(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c8Z=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dA(d,new B.c9_(s,e,h,g,f,q),y.g),y.l),$async$c8Z)
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
return A.i($async$c8Z,w)},
aZF(d,e,f,g,h){return B.hHg(d,e,f,g,h)},
hHg(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZF=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auo("GET",d)
o=A.fUw()
if(o==null)o=new A.LO(A.a([],y.W))
x=7
return A.b(o.f0(0,s).d8(0,C.Fv),$async$aZF)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cj(),$async$aZF)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BK(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZF,w)},
aZE(d){return B.hHd(d)},
hHd(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vl(d,null).d8(0,C.o4),$async$aZE)
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
$.am.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZE,w)},
c8Y(d){return B.hHe(d)},
hHe(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c8Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vl(d,null).d8(0,C.pZ),$async$c8Y)
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
$.am.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c8Y,w)},
c9_:function c9_(d,e,f,g,h,i){var _=this
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
It(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hHl(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.It(C.a.b6(u,v.length))}return null},
hHm(d){var x=B.It(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hHh(){var x,w=$.pz(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.h3(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a6N(d){return B.hHi(d)},
hHi(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a6N)
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
$.am.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6N,w)},
a6O(d,e){return B.hHj(d,e)},
hHj(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6O=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cI,null),$async$a6O)
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
$.am.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6O,w)},
BJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BJ)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.It(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6P(r),$async$BJ)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6N("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BJ)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.It(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BJ)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hHh()
x=14
return A.b(B.a6P(m),$async$BJ)
case 14:if(f!=null){x=12
break}l=new A.T(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6O("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BJ)
case 15:k=f
x=16
return A.b(B.a6O("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BJ)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BJ)
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
return A.i($async$BJ,w)},
a6P(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.It(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6N("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6P)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
a6Q(d,e,f,g){return B.hHn(d,e,f,g)},
hHn(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6Q=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gan(d)){v=!1
x=1
break}r=B.It(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6P(r),$async$a6Q)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c95())>1048576||g.b4(d,new B.c96())){v=B.Ey(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a70("myCode",d,a0),$async$a6Q)
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
v=B.Ey(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZN(u,g.gM(d),a0),$async$a6Q)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pz().aw(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dA(d,new B.c97(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZG(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6Q)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
Ey(d,e,f,g,h){return B.hHk(d,e,f,g,h)},
hHk(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ey=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Ey)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c91())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pz().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cH.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
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
a1=B.Ix(a9,q)
a0=new A.Km(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Ey)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p0(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaq(a1.a,a4,"media",a1.d,a2).x4(m,n,new A.DP(!0,q.c)),$async$Ey)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Ey)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQ5(r),$async$Ey)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dA(a6,new B.c92(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZG(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.T(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Ey)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQ5(r),$async$Ey)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ey,w)},
aZG(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6N(t),$async$aZG)
case 3:s=g
r=y.aL.a(J.q(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c90(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6O(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZG,w)},
No(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$No=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6N("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$No)
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
return A.b(B.aZH(k,a0),$async$No)
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
return A.b(B.aZM(h),$async$No)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UW(g,a0),$async$No)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.T(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c93(),q),n)
d=A.C(new A.a_(r,new B.c94(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d9(d,0,A.dG(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a6O("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$No)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$No,w)},
aZH(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZH=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.iaX(k,j)
C.d.v(s,i)
x=5
return A.b(B.D2(l,m,"Received via My Code",t,e,i),$async$aZH)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQ5(s),$async$aZH)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZH,w)},
c95:function c95(){},
c96:function c96(){},
c97:function c97(){},
c91:function c91(){},
c92:function c92(){},
c90:function c90(){},
c93:function c93(){},
c94:function c94(){},
fLa(d,e){var x=0,w=A.j(y.H)
var $async$fLa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).cm(A.ea(new B.fLb(e),!1,null,y.H)),$async$fLa)
case 2:return A.h(null,w)}})
return A.i($async$fLa,w)},
bDg(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bDg=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).cm(A.ea(new B.fLc(g,e,f),!1,null,y.y)),$async$bDg)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDg,w)},
fLb:function fLb(d){this.a=d},
fLc:function fLc(d,e,f){this.a=d
this.b=e
this.c=f},
UM:function UM(d,e){this.c=d
this.a=e},
aD3:function aD3(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dQE:function dQE(d,e){this.a=d
this.b=e},
UQ:function UQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD6:function aD6(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dRN:function dRN(d){this.a=d},
dRO:function dRO(d){this.a=d},
dRP:function dRP(d){this.a=d},
dRM:function dRM(d,e){this.a=d
this.b=e},
dRQ:function dRQ(d){this.a=d},
dRR:function dRR(d){this.a=d},
dRS:function dRS(d,e){this.a=d
this.b=e},
dRT:function dRT(d,e){this.a=d
this.b=e},
dRU:function dRU(d,e){this.a=d
this.b=e},
dRV:function dRV(d){this.a=d},
dRY:function dRY(){},
dRW:function dRW(d){this.a=d},
dRX:function dRX(d,e){this.a=d
this.b=e},
biJ:function biJ(){},
UN:function UN(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aD4:function aD4(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dQF:function dQF(d){this.a=d},
dQG:function dQG(d){this.a=d},
fYa(d){var x=d.i_
if(x>=0)return C.o.N(x)
return 10},
hHp(d){var x=d.kO
if(x>=0)return x
return 4.99},
hHo(d){var x=d.lu,w=y.N
w=x.jb(x,new B.c99(),w,w)
return w},
hdo(d){var x=d.kP,w=y.N
w=x.jb(x,new B.c9a(),w,w)
return w},
aZK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZK)
case 7:s=f
r=A.v(p)
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
return A.i($async$aZK,w)},
a6S(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6S)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6S)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
UP(d){var x=0,w=A.j(y.H),v,u
var $async$UP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UP)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UP,w)},
fY9(d,e){var x,w,v
if(B.hHp(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hHo(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cd(new A.T(Date.now(),0,!1))},
aZI(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hdo(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cd(new A.T(Date.now(),0,!1))},
hdp(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hdo(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cd(new A.T(Date.now(),0,!1))?v:new A.T(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a6().ac())
d.kP=w},
ap8(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ap8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$ap8)
case 7:s=f
r=A.v(p)
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
return A.i($async$ap8,w)},
ap9(d){var x=0,w=A.j(y.H),v,u,t
var $async$ap9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ap8(d),$async$ap9)
case 3:u=f
x=5
return A.b(A.ay(),$async$ap9)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$ap9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ap9,w)},
ap7(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ap7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fYa(d)
if(u<=0){v=!1
x=1
break}if(B.fY9(d,e)){v=!1
x=1
break}x=3
return A.b(B.ap8(e),$async$ap7)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap7,w)},
aZJ(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Iv(e,d),$async$aZJ)
case 3:if(g){v=-1
x=1
break}u=B.fYa(d)
if(u<=0){v=-1
x=1
break}if(B.fY9(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ap8(e),$async$aZJ)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZJ,w)},
c9c(d,e,f){var x=0,w=A.j(y.y),v
var $async$c9c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Iv(e,d),$async$c9c)
case 3:if(h){v=!1
x=1
break}v=B.ap7(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9c,w)},
c9b(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c9b=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
x=3
return A.b(B.c9c(d,u,i.gTF()),$async$c9b)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9b,w)},
a6R(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6R=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gde()
if(i.gTF()){v=!0
x=1
break}if(B.aZI(d,u)){v=!0
x=1
break}x=5
return A.b(A.lk(u,C.Sf),$async$a6R)
case 5:x=k?3:4
break
case 3:B.hdp(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6R)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kY(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Sf,"Doc Share for Organizations"),$async$a6R)
case 7:if(!k){v=!1
x=1
break}B.hdp(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6R)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
c99:function c99(){},
c9a:function c9a(){},
fLT(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fLT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fLT)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.ff9.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.ff9.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLT,w)},
idf(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.ff9.br($.ff9,new B.fLV(d))},
fLV:function fLV(d){this.a=d},
fgB(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fgB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.nb(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jo,null,y.H),$async$fgB)
case 3:C.Ag.fg(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgB,w)},
afN(d,e,f){var x=0,w=A.j(y.H),v
var $async$afN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.ffH.n(0,d,new B.abT(A.bp(e,!0,v)))
x=3
return A.b(A.ay(),$async$afN)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.S.ao(A.G(["parts",e,"size",f],v,y.C),null)),$async$afN)
case 2:return A.h(null,w)}})
return A.i($async$afN,w)},
afH(d){return B.hX3(d)},
hX3(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.ffH.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afH)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aL(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fki(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abT(r)
$.ffH.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afH,w)},
QA(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$QA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cg(e))
$.Gg.n(0,d,u)
x=3
return A.b(B.R4(d,u),$async$QA)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QA,w)},
aNW(d){return B.hX1(d)},
hX1(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gg.h(0,d)
if(n!=null&&!C.aH.gan(n)){v=n
x=1
break}x=3
return A.b(B.R3(d),$async$aNW)
case 3:p=f
if(p!=null&&!C.aH.gan(p)){$.Gg.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNW)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aK(r)
x=!J.cn(q)?9:10
break
case 9:B.QA(d,q)
x=11
return A.b(J.hy(s,d),$async$aNW)
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
return A.i($async$aNW,w)},
hTf(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cg(J.f1(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cg(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cg(A.Ac(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cg(d)),y.K)
return A.f9(null,y.K)},
a1w(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fO(r,"loadend",new B.fpy(r,t),!1,s)
A.fO(r,"error",new B.fpz(t),!1,s)
r.readAsArrayBuffer(d)
v=u.it(0,C.Ml,new B.fpA())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1w,w)},
aOf(d,e,f){return B.hZk(d,e,f)},
hZk(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOf=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1w(i),$async$aOf)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.R4(o,p),$async$aOf)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afN(k,j,s),$async$aOf)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOf,w)},
aOe(d,e,f){return B.hZj(d,e,f)},
hZj(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOe=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOf(d,e,f),$async$aOe)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1w(f),$async$aOe)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gg.n(0,s,r)
$.QR.n(0,s,r)
x=11
return A.b(B.QA(s,r),$async$aOe)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOe,w)},
BK(d,e,f,g,h,i){return B.hHy(d,e,f,g,h,i)},
hHy(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BK=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cH.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.T(Date.now(),0,!1).a6().ac(),a0,f,B.aZQ(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.QA(s,d),$async$BK)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BK)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cL.gcu().aK(d)),$async$BK)
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
return A.b(B.AN(e),$async$BK)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.Gr(e,j),$async$BK)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BK,w)},
UR(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UR=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AN(d),$async$UR)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cH.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hdr(n,null,l)
l=o.size
l.toString
j=new A.T(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZQ(),null)
$.agg.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1w(o),$async$UR)
case 7:g=a1
x=g!=null&&!C.aH.gan(g)?8:10
break
case 8:$.Gg.n(0,h,g)
$.QR.n(0,h,g)
B.QA(h,g)
x=9
break
case 10:x=11
return A.b(B.aOe(d,m,o),$async$UR)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gr(d,t),$async$UR)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UR,w)},
fYe(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fYe=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hdr(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Iw(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gan(s)){v=B.BK(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYe,w)},
Iw(d,e,f,g,h,i){return B.hHx(d,e,f,g,h,i)},
hHx(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Iw=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cH.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Km(A.dG(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Iw)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cg(J.RD(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kK(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.R4(k,l),$async$Iw)
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
return A.b(j.a7(0),$async$Iw)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.R4(k,new Uint8Array(A.cg(n))),$async$Iw)
case 15:J.cf(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afN(r,q,g),$async$Iw)
case 16:f=new B.jn(i,a1,a0,g,new A.T(Date.now(),0,!1).a6().ac(),a2,null,B.aZQ(),null)
x=17
return A.b(B.AN(d),$async$Iw)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.Gr(d,e),$async$Iw)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iw,w)},
UT(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UT=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agg.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1w(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afH(s),$async$UT)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.R3(u[o]),$async$UT)
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
v=A.Ac(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QR.h(0,s)
if(i==null)i=$.Gg.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rt(d,e),$async$UT)
case 12:i=a0
if(i!=null&&!C.aH.gan(i))$.QR.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Ac(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UT,w)},
hdr(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rt(d,e){return B.hHz(d,e)},
hHz(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rt=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QR.h(0,f)
if(e==null)e=$.Gg.h(0,f)
if(e!=null&&!C.aH.gan(e)){v=e
x=1
break}s=$.agg.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1w(s),$async$rt)
case 9:r=a3
if(r!=null&&!C.aH.gan(r)){$.Gg.n(0,f,r)
$.QR.n(0,f,r)
B.QA(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afH(f),$async$rt)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axX(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.R3(g[l]),$async$rt)
case 16:k=a3
if(k!=null&&!C.aH.gan(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ao1()
if(!C.aH.gan(r)){$.Gg.n(0,f,r)
$.QR.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNW(f),$async$rt)
case 17:j=a3
if(j!=null&&!C.aH.gan(j)){$.QR.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UT(a0,a1,0,g),$async$rt)
case 20:i=a3
if(i!=null&&!C.aH.gan(i)){h=new Uint8Array(A.cg(i))
$.Gg.n(0,f,h)
$.QR.n(0,f,h)
B.QA(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rt,w)},
hHC(d){var x,w,v=$.agg.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hHD(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hHA(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apf(d,e,f,g,h){return B.hHB(d,e,f,g,h)},
hHB(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apf=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agg.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1w(s),$async$apf)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rt(g,e),$async$apf)
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
return A.b(n.im(d).x4(h,r,new A.DP(!0,e.c)),$async$apf)
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
$.am.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apf,w)},
hdt(d,e,f,g,h){var x,w,v,u,t=$.hds
$.hds=t+1
x=Date.now()
w=""+1000*x+"_"+C.cH.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c9n.n(0,t,new B.bvi(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axX(u)))
return t},
fYf(d){var x=0,w=A.j(y.H)
var $async$fYf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fYf,w)},
Ix(d,e){var $async$Ix=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agg.h(0,h)
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
return A.q9(B.UT(d,e,p,o<q?o:q),$async$Ix,w)
case 8:n=a1
x=n!=null&&!C.aH.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q9(A.FO(n),$async$Ix,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q9(B.afH("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ix,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q9(B.R3(h[l]),$async$Ix,w)
case 18:k=a1
x=k!=null&&!C.aH.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q9(A.FO(k),$async$Ix,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q9(B.rt(d,e),$async$Ix,w)
case 22:j=a1
x=j!=null&&!C.aH.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q9(A.FO(A.Ac(j,p,o<i?o:i)),$async$Ix,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hm6($async$Ix,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hnV(w)},
aZS(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c9n.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4w(),$async$aZS)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZS,w)},
US(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$US=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9n.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4w(),$async$US)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afN(r.c,u,r.z),$async$US)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.T(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZQ(),null)
u=r.a
x=5
return A.b(B.AN(u),$async$US)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.Gr(u,s),$async$US)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$US,w)},
a6Y(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c9n.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agW(u[s]),$async$a6Y)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6Y,w)},
c9p(d,e,f){var x=0,w=A.j(y.H)
var $async$c9p=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAk(d,e,f),$async$c9p)
case 2:return A.h(null,w)}})
return A.i($async$c9p,w)},
c9q(d,e,f){var x=0,w=A.j(y.H)
var $async$c9q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bAl(d,e,f),$async$c9q)
case 2:return A.h(null,w)}})
return A.i($async$c9q,w)},
Ez(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ez=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AN(d),$async$Ez)
case 2:p=g
J.nv(p,new B.c9o(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gg.W(0,v)
$.agg.W(0,e)
x=3
return A.b(B.afH(v),$async$Ez)
case 3:u=g
$.ffH.W(0,v)
x=4
return A.b(A.ay(),$async$Ez)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ez)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ez)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agW(s[q]),$async$Ez)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agW(v),$async$Ez)
case 13:x=14
return A.b(B.Gr(d,p),$async$Ez)
case 14:return A.h(null,w)}})
return A.i($async$Ez,w)},
aZR(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rt(d,e),$async$aZR)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fgB(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZR,w)},
AN(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AN)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aL(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fpB(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AN,w)},
Gr(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gr)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.ftF(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gr)
case 3:return A.h(null,w)}})
return A.i($async$Gr,w)},
bAk(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AN(d),$async$bAk)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fo_(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDP(f))
x=4
return A.b(B.Gr(d,u),$async$bAk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAk,w)},
bAl(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bAl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AN(d),$async$bAl)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fo0(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cJ3(f))
x=4
return A.b(B.Gr(d,u),$async$bAl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bAl,w)},
abT:function abT(d){this.a=d},
fki:function fki(){},
fpy:function fpy(d,e){this.a=d
this.b=e},
fpz:function fpz(d){this.a=d},
fpA:function fpA(){},
c9o:function c9o(d){this.a=d},
bvi:function bvi(d,e,f,g,h,i,j,k,l){var _=this
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
fpB:function fpB(){},
ftF:function ftF(){},
fo_:function fo_(d){this.a=d},
fo0:function fo0(d){this.a=d},
a6Z(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c9t())?3:4
break
case 3:x=5
return A.b(B.aZT(d,e),$async$a6Z)
case 5:u=g
if(u!=null){t=u.c
B.Nq(d,u.b,e,t)}v=u
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
return A.b(B.aZO(s),$async$a6Z)
case 10:case 9:if(g){v=new A.PZ(1,D.RT,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UU(d,e),$async$a6Z)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UZ(!0,!0,d,e),$async$a6Z)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Nq(d,D.zr,e,t)
v=new A.PZ(p,D.zr,t)
x=1
break}v=B.c9s(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Z,w)},
UU(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a70(null,d,e),$async$UU)
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
return A.b(B.aZN(p,d.length,e),$async$UU)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c9q(e,C.d.gI(d).a,r.b),$async$UU)
case 7:case 6:q=r.a
x=8
return A.b(B.Nq(d,D.RT,e,q),$async$UU)
case 8:v=new A.PZ(d.length,D.RT,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UU,w)},
UV(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mI)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7_(d,e),$async$UV)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c9l(s,d,e,t),$async$UV)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZO(t),$async$UV)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rt(e,d),$async$UV)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UU(A.a([d],y.r),e),$async$UV)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UV,w)},
UX(){var x=0,w=A.j(y.H)
var $async$UX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fY8(),$async$UX)
case 2:x=3
return A.b(B.aQm(),$async$UX)
case 3:return A.h(null,w)}})
return A.i($async$UX,w)},
a7_(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZQ()
x=3
return A.b(B.c9p(e,d.a,u),$async$a7_)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7_,w)},
Nq(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Nq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RT&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b6(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7_(p,f),$async$Nq)
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
return A.b(B.c9k(o,p,u,f),$async$Nq)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c9l(o,p,f,t),$async$Nq)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c9j(o,u,p,f),$async$Nq)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Nq,w)},
aZT(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c9r(e,d),$async$aZT)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UZ(!1,!0,d,e),$async$aZT)
case 4:u=g
if(u!=null){t=u.b
v=new A.PZ(u.a,D.zr,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZT,w)},
c9r(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c9r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UT(d,s,0,1),$async$c9r)
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
return A.i($async$c9r,w)},
c9s(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c9s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a70(null,d,e),$async$c9s)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hdq(u)
if(t.length>800){v=null
x=1
break}v=new A.PZ(d.length,D.dCv,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9s,w)},
apg(d,e,f){return B.hHG(d,e,f)},
hHG(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apg=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d1(g,"\ufeff"))g=J.mJ(g,1)
x=B.fYd(g)?3:4
break
case 3:x=5
return A.b(B.c9m(g),$async$apg)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d1(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mJ(g,13))
try{k=B.EA(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d1(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mJ(g,13))
u=9
x=12
return A.b(B.aZM(q),$async$apg)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UW(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d1(g,"NGMYDOCSYNC0|"))try{n=B.fYc(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UW(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d1(g,"N2|")){v=B.Iy(C.a.i(J.mJ(g,3)),d,a0)
x=1
break}if(J.d1(g,"NGMYDOCSYNC2|")){v=B.Iy(C.a.i(J.mJ(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cc(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Iy(h,d,a0)
x=1
break}if(J.f4(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UW(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apg,w)},
Iy(d,e,f){return B.hHE(d,e,f)},
hHE(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Iy=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
r=A.cE(A.v(s)+"/manifest.json",0,null)
q=A.cE(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZE(r),$async$Iy)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZE(A.cE(s,0,null)),$async$Iy)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c8Z(o,r,a1,n,a2),$async$Iy)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c8Y(q),$async$Iy)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UW(l,a2),$async$Iy)
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
$.am.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iy,w)},
a70(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a70=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rt(f,r),$async$a70)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cL.gcu().aK(q)],t,s))
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
return A.i($async$a70,w)},
UW(d,e){return B.hHF(d,e)},
hHF(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UW=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.BK(i,a3,d,k,l,o),$async$UW)
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
$.am.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$UW,w)},
Np:function Np(d,e){this.a=d
this.b=e},
c9t:function c9t(){},
a15(d){var x=A.P(d).ax.a===C.I,w=x?D.af2:D.acR,v=x?D.agu:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.ae5:C.aL
return new A.aG6([w,s,v,u,t,x?C.fd:C.bT])},
hsV(d,e){var x=e?C.w.j(0.72):C.aW
return A.cb(null,x,!0,null,new B.fQ0(e),d,null,!0,!0,y.N)},
c98(d,e,f,g,h,i,j,k,l){return new B.UO(e,l,d,f,k,j,g,h,i,null)},
Z5(d,e,f,g,h,i,j){return new B.bdo(g,h,j,e,i,d,f,null)},
fQ0:function fQ0(d){this.a=d},
Z2:function Z2(d,e){this.c=d
this.a=e},
az8:function az8(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d3N:function d3N(d){this.a=d},
d3L:function d3L(d){this.a=d},
d3M:function d3M(d){this.a=d},
buX:function buX(){},
UO:function UO(d,e,f,g,h,i,j,k,l,m){var _=this
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
aD5:function aD5(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dRL:function dRL(d){this.a=d},
dR8:function dR8(d,e){this.a=d
this.b=e},
dR9:function dR9(d,e){this.a=d
this.b=e},
dQI:function dQI(d,e,f){this.a=d
this.b=e
this.c=f},
dQH:function dQH(d){this.a=d},
dQJ:function dQJ(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e,f){this.a=d
this.b=e
this.c=f},
dQN:function dQN(d){this.a=d},
dRz:function dRz(d,e){this.a=d
this.b=e},
dRA:function dRA(d){this.a=d},
dR5:function dR5(d,e,f){this.a=d
this.b=e
this.c=f},
dR2:function dR2(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dQM:function dQM(d){this.a=d},
dRd:function dRd(d){this.a=d},
dRc:function dRc(){},
dQS:function dQS(d){this.a=d},
dRw:function dRw(d,e){this.a=d
this.b=e},
dRx:function dRx(d,e){this.a=d
this.b=e},
dRy:function dRy(d,e){this.a=d
this.b=e},
dR3:function dR3(d,e){this.a=d
this.b=e},
dR4:function dR4(d,e){this.a=d
this.b=e},
dRp:function dRp(d,e){this.a=d
this.b=e},
dRl:function dRl(d){this.a=d},
dRk:function dRk(d){this.a=d},
dRm:function dRm(){},
dRn:function dRn(){},
dRo:function dRo(d,e){this.a=d
this.b=e},
dRq:function dRq(){},
dRr:function dRr(d){this.a=d},
dRj:function dRj(d,e){this.a=d
this.b=e},
dRe:function dRe(d){this.a=d},
dRf:function dRf(d){this.a=d},
dRg:function dRg(d){this.a=d},
dRh:function dRh(d){this.a=d},
dRi:function dRi(d){this.a=d},
dQP:function dQP(){},
dQQ:function dQQ(d){this.a=d},
dQR:function dQR(d,e){this.a=d
this.b=e},
dQL:function dQL(d,e){this.a=d
this.b=e},
dQK:function dQK(d,e,f){this.a=d
this.b=e
this.c=f},
dR6:function dR6(d){this.a=d},
dR7:function dR7(d,e,f){this.a=d
this.b=e
this.c=f},
dR0:function dR0(d,e){this.a=d
this.b=e},
dQX:function dQX(d){this.a=d},
dQU:function dQU(d,e,f){this.a=d
this.b=e
this.c=f},
dQY:function dQY(d){this.a=d},
dQZ:function dQZ(d){this.a=d},
dR_:function dR_(){},
dR1:function dR1(d,e){this.a=d
this.b=e},
dQV:function dQV(d){this.a=d},
dQT:function dQT(d,e,f){this.a=d
this.b=e
this.c=f},
dQW:function dQW(){},
dRb:function dRb(d){this.a=d},
dRa:function dRa(d,e){this.a=d
this.b=e},
dRv:function dRv(d,e){this.a=d
this.b=e},
dRs:function dRs(d){this.a=d},
dRt:function dRt(d,e){this.a=d
this.b=e},
dRu:function dRu(d){this.a=d},
dRI:function dRI(d){this.a=d},
dRG:function dRG(d){this.a=d},
dRH:function dRH(d){this.a=d},
dRJ:function dRJ(){},
dRK:function dRK(d,e){this.a=d
this.b=e},
dRC:function dRC(d,e){this.a=d
this.b=e},
dRD:function dRD(d,e,f){this.a=d
this.b=e
this.c=f},
dRB:function dRB(d,e,f){this.a=d
this.b=e
this.c=f},
dRE:function dRE(d,e){this.a=d
this.b=e},
dRF:function dRF(d,e){this.a=d
this.b=e},
az5:function az5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bdn:function bdn(d,e,f){this.c=d
this.d=e
this.a=f},
d3J:function d3J(){},
d3K:function d3K(){},
acc:function acc(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d46:function d46(){},
d45:function d45(d){this.a=d},
Z4:function Z4(d,e,f){this.c=d
this.d=e
this.a=f},
aza:function aza(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d42:function d42(d){this.a=d},
d43:function d43(d,e,f){this.a=d
this.b=e
this.c=f},
d44:function d44(d,e){this.a=d
this.b=e},
d40:function d40(d,e){this.a=d
this.b=e},
d3Z:function d3Z(d){this.a=d},
d3X:function d3X(d){this.a=d},
d3U:function d3U(d){this.a=d},
d4_:function d4_(d){this.a=d},
d3W:function d3W(d){this.a=d},
d41:function d41(d){this.a=d},
d3Y:function d3Y(d){this.a=d},
d3V:function d3V(d){this.a=d},
Z1:function Z1(d,e,f){this.c=d
this.d=e
this.a=f},
az7:function az7(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d3G:function d3G(d){this.a=d},
d3F:function d3F(d,e){this.a=d
this.b=e},
d3H:function d3H(d){this.a=d},
d3E:function d3E(d,e){this.a=d
this.b=e},
d3I:function d3I(d){this.a=d},
d3D:function d3D(d,e){this.a=d
this.b=e},
d3z:function d3z(d){this.a=d},
d3A:function d3A(d){this.a=d},
d3B:function d3B(d,e){this.a=d
this.b=e},
d3C:function d3C(d){this.a=d},
PB:function PB(d,e,f){this.c=d
this.d=e
this.a=f},
azd:function azd(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d4j:function d4j(d){this.a=d},
d4k:function d4k(d){this.a=d},
d4l:function d4l(d){this.a=d},
d4m:function d4m(d){this.a=d},
d4n:function d4n(d,e){this.a=d
this.b=e},
d4o:function d4o(d){this.a=d},
d4q:function d4q(d){this.a=d},
d4p:function d4p(d){this.a=d},
Z6:function Z6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azb:function azb(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d4f:function d4f(d,e){this.a=d
this.b=e},
d4g:function d4g(d,e){this.a=d
this.b=e},
d47:function d47(d,e,f){this.a=d
this.b=e
this.c=f},
d48:function d48(d){this.a=d},
d49:function d49(){},
d4e:function d4e(){},
d4a:function d4a(d,e){this.a=d
this.b=e},
d4b:function d4b(d,e){this.a=d
this.b=e},
d4c:function d4c(d,e){this.a=d
this.b=e},
d4d:function d4d(d,e){this.a=d
this.b=e},
aca:function aca(d,e){this.c=d
this.a=e},
d3y:function d3y(d){this.a=d},
Z0:function Z0(d){this.a=d},
az6:function az6(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z7:function Z7(d,e){this.c=d
this.a=e},
azc:function azc(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d4i:function d4i(d){this.a=d},
d4h:function d4h(d){this.a=d},
bdo:function bdo(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hHH(){var x,w=$.pz(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.h3(v)},
Nr(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Nr)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Nr)
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
$.am.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nr,w)},
a71(d){return B.hHI(d)},
hHI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a71=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a71)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cI,null),$async$a71)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a71,w)},
UY(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nr(),$async$UY)
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
return A.b(B.a71(s),$async$UY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UY,w)},
UZ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UZ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.S(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c9v(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hHH()
t=A.S(u).k("M<1,a6<m,aD>>")
r=A.C(new A.M(u,new B.c9w(s),t),t.k("ak.E"))
x=6
return A.b(B.Nr(),$async$UZ)
case 6:q=i
J.aG(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a71(q),$async$UZ)
case 7:x=8
return A.b(B.a72(r,u,g,s),$async$UZ)
case 8:v=new A.boY(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UZ,w)},
aph(d){var x=0,w=A.j(y.y),v,u,t
var $async$aph=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nr(),$async$aph)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aph,w)},
c9x(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c9x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nr(),$async$c9x)
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
return A.i($async$c9x,w)},
a72(d,e,f,g){return B.hHJ(d,e,f,g)},
hHJ(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a72=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apf("media",r,new B.c9u(s,e,g),f,q),$async$a72)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UY(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a72)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UY(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a72)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.UY(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a72)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a72,w)},
EA(d,e,f){return B.hHK(d,e,f)},
hHK(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EA=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$EA)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aph(b3),$async$EA)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.kz,null,g),$async$EA)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aph(b3),$async$EA)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nr(),$async$EA)
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
a2=a1.gaf(a4),a5=y.N,a6=b6==null
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
l=new A.aaq(a8.a,b0,"media",a8.d,a9).CE(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZF(k,n,o,s,b7),$async$EA)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p0(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaq(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EA)
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
return A.b(B.a71(e),$async$EA)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EA,w)},
c9v:function c9v(){},
c9w:function c9w(d){this.a=d},
c9u:function c9u(d,e,f){this.a=d
this.b=e
this.c=f},
aQm(){var x=0,w=A.j(y.H),v,u
var $async$aQm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hSE=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQm)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQm)
case 3:u=$.h2m
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQm)
case 4:$.h2m=$.i0b=$.i0c=null
return A.h(null,w)}})
return A.i($async$aQm,w)},
ftg(d){var x=0,w=A.j(y.H),v,u
var $async$ftg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6y){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.fth(new A.bY(u,y.aY))
x=3
return A.b(u.it(0,C.hS,new B.fti()),$async$ftg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ftg,w)},
i09(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hHr(x):x},
h2q(d){var x=0,w=A.j(y.T),v,u,t
var $async$h2q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b6(t,13))
if(C.a.a0(u,"WR")){v=B.apj(u)
x=1
break}v=B.fYc(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2q,w)},
h2p(d){var x=0,w=A.j(y.T),v,u,t
var $async$h2p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b6(t,14))
if(C.a.a0(u,"WR")){v=B.apk(u)
x=1
break}v=B.fYc(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2p,w)},
fLD(d){var x=0,w=A.j(y.T),v
var $async$fLD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apk(d),$async$fLD)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLD,w)},
bBb(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bBb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h2p(d),$async$bBb)
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
return A.i($async$bBb,w)},
fhp(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fhp=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.US(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BK(d.ao1(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhp,w)},
Gt(d,e,f){return B.i2z(d,e,f)},
i2z(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gt=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h2q(a1),$async$Gt)
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
return A.b($.huO().aE3(D.dqr,null),$async$Gt)
case 4:l=d.h2m=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axX(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.ftO(f,k,new B.ftP(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a7u(0,new B.X8(r,"offer")),$async$Gt)
case 5:d=l
x=7
return A.b(l.akQ(0),$async$Gt)
case 7:x=6
return A.b(d.a7m(0,a4),$async$Gt)
case 6:x=8
return A.b(B.ftg(l),$async$Gt)
case 8:x=9
return A.b(l.aoM(),$async$Gt)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i09(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apl(m,h),$async$Gt)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hdq(h)
case 11:v=new A.bof(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gt,w)},
fth:function fth(d){this.a=d},
fti:function fti(){},
ftP:function ftP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftO:function ftO(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ftN:function ftN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i4t(d){switch(d){case"new":return D.ejM
case"checking":return D.ejN
case"connected":return D.ejP
case"completed":return D.ejO
case"failed":return D.ejR
case"disconnected":return D.ejS
case"closed":return D.aMA
case"count":return D.ejQ}return D.aMA},
i4u(d){switch(d){case"new":return D.aMB
case"gathering":return D.ejT
case"complete":return D.a6y}return D.aMB},
ieJ(d){switch(d){case"stable":return D.ejU
case"have-local-offer":return D.ejV
case"have-local-pranswer":return D.ejX
case"have-remote-offer":return D.ejW
case"have-remote-pranswer":return D.ejY
case"closed":return D.aMH}return D.aMH},
icX(d){switch(d){case"new":return D.aME
case"connecting":return D.aMF
case"connected":return D.aMG
case"closed":return D.a6z
case"disconnected":return D.aMD
case"failed":return D.aMC}return D.a6z},
a9m:function a9m(d,e){this.a=d
this.b=e},
Or:function Or(d,e){this.a=d
this.b=e},
X7:function X7(d,e){this.a=d
this.b=e},
Oq:function Oq(d,e){this.a=d
this.b=e},
F3:function F3(d,e){this.a=d
this.b=e},
cks:function cks(){},
fZX(d){var x=new B.F2()
x.a=d
x.b=!0
return x},
F2:function F2(){this.b=this.a=$},
a9l:function a9l(){},
atz:function atz(){},
X8:function X8(d,e){this.a=d
this.b=e},
fY8(){var x=0,w=A.j(y.H)
var $async$fY8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fY8,w)},
fYb(d,e,f){var x=0,w=A.j(y.T),v
var $async$fYb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mI))){v=null
x=1
break}v=B.fLT(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYb,w)},
hdq(d){var x,w=F.aci.a4g(C.dK.aK(d),null)
if(w.length===0){x=C.dK.aK(d)
return C.cL.gcu().aK(x)}return C.cL.gcu().aK(w)},
hHq(d){var x,w,v=C.cG.aK(d)
try{x=C.ch.cB(0,F.ach.bcS(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
fYc(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hHq(C.a.b6(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b6(t,w.length)
try{v=C.ch.cB(0,C.cG.aK(x))
return v}catch(u){return x}}return null},
hHr(d){var x,w,v,u,t,s=A.a([],y.s)
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
hHs(){var x,w=$.pz(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.h3(v)},
aZL(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZL)
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
$.am.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZL,w)},
c9d(d,e){return B.hHt(d,e)},
hHt(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c9d=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cI,null),$async$c9d)
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
$.am.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c9d,w)},
aZO(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZL(d),$async$aZO)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZO,w)},
aZN(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hHs()
r=C.a.i(f)
t=C.dK.aK(s)
x=3
return A.b(B.c9d(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gcu().aK(t),"usesRemaining",999999,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZN)
case 3:if(!h){v=null
x=1
break}v=new A.a08("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZN,w)},
aZM(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZL(o),$async$aZM)
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
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZM,w)},
c9e(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c9e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bC7("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cI),$async$c9e)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c9e,w)},
aZP(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Iu(),$async$aZP)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZP,w)},
apc(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$apc)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZP(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apc,w)},
apa(d,e){var x=0,w=A.j(y.H)
var $async$apa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$apa)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apa)
case 2:return A.h(null,w)}})
return A.i($async$apa,w)},
a6U(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6U)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Iu(),$async$a6U)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6T(s),$async$a6U)
case 5:x=6
return A.b(B.apa(f,u),$async$a6U)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6U,w)},
a6V(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6V=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6V)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Iu(),$async$a6V)
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
return A.b(B.apa(g,q),$async$a6V)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6T(u),$async$a6V)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6V,w)},
a6W(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6W=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6W)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Iu(),$async$a6W)
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
s=B.aZI(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6W)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.T(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6W)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
c9f(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c9f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c9f)
case 7:s=f
p=A.v(n)
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
return A.i($async$c9f,w)},
Iv(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Iv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c9f(d),$async$Iv)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZP(t),$async$Iv)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apb(d),$async$Iv)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZI(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apb(d),$async$Iv)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iv,w)},
apb(d){var x=0,w=A.j(y.H)
var $async$apb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$apb)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apb)
case 2:return A.h(null,w)}})
return A.i($async$apb,w)},
aZQ(){var x,w=$.pz(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.h3(v)},
a6X(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fYd(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c9i(d){return B.hHv(d)},
hHv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c9i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6X(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c9i)
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
$.am.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c9i,w)},
ape(d,e){return B.hHw(d,e)},
hHw(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ape=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6X(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cI,null),$async$ape)
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
$.am.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ape,w)},
c9k(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c9k=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6X(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ape(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c9k)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c9k,w)},
c9j(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c9j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6X(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ape(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c9j)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c9j,w)},
c9l(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c9l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6X(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ape(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c9l,w)},
c9m(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c9m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fYd(d)){v=null
x=1
break}x=3
return A.b(B.c9i(d),$async$c9m)
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
return A.i($async$c9m,w)},
a73(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a73=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a73)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a73)
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
$.am.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a73,w)},
api(d){return B.hHL(d)},
hHL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$api=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$api)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.T(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cI,null),$async$api)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$api,w)},
apj(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d1(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$apj)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a73(),$async$apj)
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
return A.b(B.api(s),$async$apj)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apj,w)},
apl(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$apl)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a73(),$async$apl)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aK(C.a.i(e))
q.n(0,"answer",C.cL.gcu().aK(r))
q.n(0,"answerAt",new A.T(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.api(u),$async$apl)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apl,w)},
apk(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$apk)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a73(),$async$apk)
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
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apk,w)},
aof(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aof=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.m3(e),$async$aof)
case 3:r=g
u=4
x=7
return A.b(r.hx(C.h2),$async$aof)
case 7:q=g
o=q
o=o==null?null:J.eX(J.vu(o))
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
return A.i($async$aof,w)},
iaX(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.o.u(w),5,"0")
return v},
fK5(d){return B.iaZ(d)},
iaZ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fK5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").KP(d,3600),$async$fK5)
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
$.am.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fK5,w)},
D2(d,e,f,g,h,i){var x=null
return B.iaW(d,e,f,g,h,i)},
iaW(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D2=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hdt(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fYf(r),$async$D2)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fK5(o),$async$D2)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6Y(r),$async$D2)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPP)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LO(A.a([],g))
x=15
return A.b(d.f0(0,A.auo("GET",A.cE(n,0,null))).d8(0,C.Fv),$async$D2)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6Y(r),$async$D2)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Km(d)
u=19
case 22:x=24
return A.b(d.C(),$async$D2)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZS(r,k),$async$D2)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$D2)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.US(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a6Y(r),$async$D2)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D2,w)},
aQ5(d){return B.iaY(d)},
iaY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQ5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.im("media").W(0,d),$async$aQ5)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQ5,w)}},D,T,M,U,V,W,X,N,Y
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
B.ckt.prototype={
aE3(d,e){return this.cKz(d,e)},
cKz(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aE3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kn(A.cA(t)))
t=J.k(u)
v=B.hMk(C.cL.gcu().aK(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aE3,w)}}
B.b3Z.prototype={
byo(d){var x=this,w=x.w
w.onclose=A.ho(new B.cko(x))
w.onopen=A.ho(new B.ckp(x))
w.onmessage=A.ho(new B.ckq(x))
w.onbufferedamountlow=A.ho(new B.ckr(x))},
gdc(d){return this.x},
ah7(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ah7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.F2()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fZX(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ah7)
case 8:v=t.fZX(s.anr(f,0,null))
x=1
break
case 7:case 4:v=B.fZX(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah7,w)}}
B.b4_.prototype={
byp(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cku(x)))
w.addEventListener("icecandidate",A.ho(new B.ckv(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.ckw(x)))
w.onicegatheringstatechange=A.ho(new B.ckx(x))
w.addEventListener("signalingstatechange",A.ho(new B.cky(x)))
if(!$.h68())w.addEventListener("connectionstatechange",A.ho(new B.ckz(x)))
w.addEventListener("negotiationneeded",A.ho(new B.ckA(x)))
w.addEventListener("track",A.ho(new B.ckB(x)))},
akQ(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.kn(A.cA(A.U(y.N,y.z)))),y.aQ),$async$akQ)
case 3:t=f
v=new B.X8(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akQ,w)},
a7m(d,e){return this.bnM(0,e)},
bnM(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7m)
case 2:return A.h(null,w)}})
return A.i($async$a7m,w)},
a7u(d,e){return this.bo1(0,e)},
bo1(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7u)
case 2:return A.h(null,w)}})
return A.i($async$a7u,w)},
aoM(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aoM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X8(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoM,w)},
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
B.acb.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.Z3.prototype={
S(){return new B.az9()},
gde(){return this.c}}
B.az9.prototype={
Z(){this.a1()
this.adR()},
adR(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZJ(u.e,u.c),$async$adR)
case 2:t=e
if(v.c!=null)v.m(new B.d3R(v,t))
return A.h(null,w)}})
return A.i($async$adR,w)},
Qc(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ap7(t.e,t.c,!1),$async$Qc)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f1I)
x=1
break}x=4
return A.b(B.a6S(u.a.c,"individual"),$async$Qc)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5R(A.ea(new B.d3O(u),!1,null,y.H)),$async$Qc)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qc,w)},
Jb(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fri(o),$async$Jb)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6W(o.e,r,s,q),$async$Jb)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eZL)
x=1
break}x=5
return A.b(B.a6S(u.a.c,"member"),$async$Jb)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5R(A.ea(new B.d3Q(u),!1,null,y.H)),$async$Jb)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jb,w)},
xZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6R(t.e,o,t.f,t.r,t.w,s),$async$xZ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6S(u.a.c,"org_owner"),$async$xZ)
case 4:x=5
return A.b(B.apc(u.a.c),$async$xZ)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.frN(o),$async$xZ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6U(s,t,o,q.c),$async$xZ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.eZI)
x=1
break}x=10
return A.b(B.apc(u.a.c),$async$xZ)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5R(A.ea(new B.d3P(u),!1,null,y.H)),$async$xZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xZ,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jj:C.pO,q=B.fYa(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.v(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.fQ,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fkD,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.ha,t,t,t),C.aB,D.fDI,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c_w,C.n),t,t,t,t,C.eA,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lF(new B.d3T(),t),C.P,w,C.dZ,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acE(C.eT,C.azi,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gce9(),t),C.ac],v))
p.push(new B.acE(C.oY,C.a2p,"Team Member","Sign in with your organization access code + password",u.gcf0(),t))
p.push(C.ac)
p.push(new B.acE(C.alM,C.a3Y,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcew(),t))
return A.c6(t,r,A.bm(!0,A.cd(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aj1,t,t,C.ag),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acE.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eq,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.ov,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BO,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bP,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ah)}}
B.aBH.prototype={}
B.aET.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oH(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b6(x,w+1).toLowerCase())},
gapq(){var x=this.d
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
bci(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cJ3(d){return this.bci(null,d)},
aDP(d){return this.bci(d,null)}}
B.UM.prototype={
S(){return new B.aD3(new A.cs(null,y.A))},
gde(){return this.c}}
B.aD3.prototype={
Z(){this.a1()
this.adS()},
adS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BJ(u.a.c),$async$adS)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dQE(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adS,w)},
adT(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fP(new A.fF(s)),$async$adT)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.f2C)
case 1:return A.h(v,w)}})
return A.i($async$adT,w)},
Zz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aof(s.d,4),$async$Zz)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_my_code_"+m+".png"),$async$Zz)
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
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zz,w)},
ahA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aa_("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahA,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jj:C.pO,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lO
else if(q.e==null)x=A.av(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aF.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2R,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aiC,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mP,w,C.kJ,new A.ex(A.p(p,A.pT(p,p,!1,B.hHm(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bP,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kJ,A.B(A.a([A.E(A.es(N.Cb,C.Ui,q.gc7a(),p),1),C.at,A.E(A.dn(C.yO,C.a8U,q.gc7b(),A.bo(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.es(M.a1g,D.fzt,q.gctR(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MO,p,p,C.ag)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.UQ.prototype={
S(){return new B.aD6(new A.at(C.as,$.aw()),A.jW(!0,null,!0,!0,null,null,!1))}}
B.aD6.prototype={
Z(){var x,w
this.a1()
x=this.a.e
w=B.It(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
ZA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.It(u.d.a.a)
if(t==null){u.m(new B.dRN(u))
x=1
break}u.m(new B.dRO(u))
s=u.a
r=s.c
x=3
return A.b(B.a6Q(s.d,new B.dRP(u),t,r),$async$ZA)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dRQ(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$ZA,w)},
a1L(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1L=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dRR(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rt(r.a.c,q),$async$a1L)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dRS(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahG(p,m,l,j,k),$async$a1L)
case 8:o=e
if(r.c!=null)r.m(new B.dRT(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dRU(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dRV(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1L,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.af2:D.acR,h=j?D.agu:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.ae5:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bO4,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eq,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2R,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.up(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biJ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MI,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aF,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dRW(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.ma,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lr(l.a.d,4)
m=A.C(new A.M(m,new B.dRX(x,new A.aG6(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lV,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.P,e,C.P,q,C.d8,p,C.P,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.el,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aF.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eYh)
else q.push(A.X(C.lu,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bd,new A.o(u,k,s,t,k,k,C.n),C.iK,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bwz,k,k,C.ag),1)
u=l.f?k:l.gctS()
t=i[3]
s=i[1]
q=A.n(16)
s=A.es(M.a1g,D.fAu,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.a0),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc7c()
t=A.bo(C.aF,k,k,0,C.c,k,C.ni,k,new A.b7(A.n(16),C.a0),k,k,k)
return A.c6(g,h,new A.an(C.Z,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mG(new B.dRY(),A.x(A.a([e,new A.D(D.bw4,A.x(A.a([s,C.P,i,C.ac,A.bG(l.f?C.rU:D.fyS,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.YF,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biJ.prototype={
oD(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hi(C.bw,v.length),C.aN)}}
B.UN.prototype={
S(){return new B.aD4()}}
B.aD4.prototype={
Z(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.at(new A.bb(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.at(new A.bb(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.at(C.as,v)},
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
adU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dQF(r))
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
return A.b(B.a6V(p,m,n,o,C.a.i(l).length===0?null:l),$async$adU)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.f2d)
s=[1]
x=4
break}p.K(y.q).f.U(D.f0R)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dQG(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adU,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jj:C.pO,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fru,s,s,s,1,s,!0),p=A.p(s,D.bop,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GW,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bV2,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bUY,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bVd,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc7d()
u=A.bo(C.aF,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.c6(q,r,A.cd(A.x(A.a([p,C.d8,o,C.ac,x,C.ac,w,C.mP,A.bG(t.r?C.rU:C.aSv,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ag),s,!1,!1,s,s)}}
B.abT.prototype={}
B.bvi.prototype={
a4w(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cg(r.ao1()))
x=3
return A.b(B.R4(t,s),$async$a4w)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
gde(){return this.a}}
B.Np.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Z2.prototype={
S(){return new B.az8(new A.at(C.as,$.aw()),A.jW(!0,null,!0,!0,null,null,!1))}}
B.az8.prototype={
Z(){this.a1()
$.aW.x1$.push(new B.d3N(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c7j(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a15(d),u=x.a.c,t=u?C.ij:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jj:v.a[0],p=A.n(24),o=A.I(C.aF.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.aoo,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cC,16)],n),C.apb,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.up(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buX()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.FG,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.b_q),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d3L(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.ma,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nG,new B.d3M(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.a0),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.KC,A.c0(new A.D(C.y_,A.x(A.a([l,C.aR,k,C.P,j,C.dZ,i,C.dZ,A.B(A.a([f,C.at,A.E(A.c0(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.edH,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc7i(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ah),new A.o(w,w,w,h,n,L.Oz,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.MQ,C.d1,w,w,w)}}
B.buX.prototype={
oD(d,e){return e.akL(e.a.toUpperCase())}}
B.UO.prototype={
S(){return new B.aD5(A.a([],y.r),A.aX(y.N))},
gde(){return this.c}}
B.aD5.prototype={
Z(){var x=this
x.a1()
x.tK()
x.w=A.dv(C.jp,new B.dRL(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UX()
this.a2()},
a0D(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.No(u.a.c),$async$a0D)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AN(u.a.c),$async$a0D)
case 4:u.m(new s.dR8(u,e))
u.i8("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0D,w)},
tK(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.No(u.a.c),$async$tK)
case 3:t=e
x=4
return A.b(B.AN(u.a.c),$async$tK)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dR9(u,s))
if(t>0)u.i8("Received "+A.v(t)+" file(s) via My Code.")
u.NB(u.d)
B.BJ(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tK,w)},
NB(d){return this.bCn(d)},
bCn(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7_(r,u.a.c),$async$NB)
case 8:p=f
if(u.c==null){x=1
break}new B.dQI(u,r,p).$0()
u.c.ei()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mI))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UV(r,u.a.c),$async$NB)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AN(u.a.c),$async$NB)
case 12:u.m(new o.dQJ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NB,w)},
NY(d){return this.bIH(d)},
bIH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7_(d,u.a.c),$async$NY)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dQO(u,d,t))
x=6
return A.b(A.fP(new A.fF(t)),$async$NY)
case 6:u.i8("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fP(new A.fF(r.toUpperCase())),$async$NY)
case 7:u.i8("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NY,w)},
i8(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tL(d,e){return this.cEy(d,e)},
cEy(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dRz(r,e))
u=3
x=6
return A.b(d.$0(),$async$tL)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dRA(r))
$.eU.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tL,w)},
gaV8(){var x=this.a
return x.f||x.r||x.w},
I5(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I5=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.b(B.c9b(s,n,r,q,o,t),$async$I5)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i8("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fDz(o,u.a.c),$async$I5)
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
return A.b(B.D4(s,o,r,q,n,t),$async$I5)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I5,w)},
a_H(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apc(u.a.c),$async$a_H)
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
return A.b(A.a5(t,!1).cm(A.ea(new B.dR5(u,r,q),!1,null,y.H)),$async$a_H)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_H,w)},
a0O(d){return this.cnl(d)},
cnk(){return this.a0O(1)},
cnl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaV8()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ap9(u.a.c),$async$a0O)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0O,w)},
abR(d,e,f){return this.bZq(d,e,f)},
bZq(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8(e)
x=1
break}x=3
return A.b(u.tL(new B.dR2(u,d,null,e,f),"Uploading\u2026"),$async$abR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abR,w)},
bCv(){B.hs7(!1,new B.dQM(this))
return},
cso(){this.m(new B.dRd(this))},
ayk(){var x=0,w=A.j(y.H),v=this
var $async$ayk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bCv()
return A.h(null,w)}})
return A.i($async$ayk,w)},
abN(){var x=0,w=A.j(y.H),v=this
var $async$abN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tL(new B.dQS(v),"Importing\u2026"),$async$abN)
case 2:return A.h(null,w)}})
return A.i($async$abN,w)},
Se(d){return this.cDX(d)},
cDX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Se=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mI)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cm(A.ea(new B.dRw(u,d),!1,null,y.H)),$async$Se)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qw)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).cm(A.ea(new B.dRx(u,d),!1,null,y.H)),$async$Se)
case 8:x=1
break
case 7:x=u.c_7(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).cm(A.ea(new B.dRy(u,d),!1,null,y.H)),$async$Se)
case 11:x=1
break
case 10:u.i8("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Se,w)},
c_7(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oH(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cIf,C.a.b6(x,w+1).toLowerCase())},
afk(d){return this.ced(d)},
ced(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mI)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).cm(A.ea(new B.dR3(u,d),!1,null,y.H)),$async$afk)
case 5:x=1
break
case 4:u.m(new B.dR4(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afk,w)},
RA(d){return this.cvl(d)},
cvl(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i8("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pb(t,s.c,s.f),$async$RA)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tL(new B.dRp(u,d),"Preparing QR\u2026"),$async$RA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RA,w)},
ai_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ai_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dRq(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dRr(q),s),s.k("J.E"))
if(r.length===0){u.i8("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RA(r),$async$ai_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ai_,w)},
ahT(d){return this.cuT(d)},
cuT(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a15(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.K,null,new B.dRj(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahT)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Se(d)
break
case"qr":u.RA(A.a([d],y.r))
break
case"send_my_code":u.ceQ(A.a([d],y.r))
break
case"save":u.ahe(d)
break
case"delete":u.IX(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahT,w)},
Xt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQP(),A.S(t).k("M<1,m>")).fP(0)}t=u.d
s=A.S(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQQ(q),s),s.k("J.E"))
if(r.length===0){u.i8("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pb(t,s.c,s.f),$async$Xt)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tL(new B.dQR(u,r),"Preparing file\u2026"),$async$Xt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xt,w)},
agq(d){return this.clG(d)},
clG(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hsV(d,!1),$async$agq)
case 3:s=f
r=s==null
q=B.a6X(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i8("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agq,w)},
afq(){var x=0,w=A.j(y.H),v=this,u
var $async$afq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fLa(u,v.a.c),$async$afq)
case 2:return A.h(null,w)}})
return A.i($async$afq,w)},
bCu(){B.hs7(!1,new B.dQL(this,null))
return},
Ja(d,e){return this.ceR(d,e)},
b0g(d){return this.Ja(null,d)},
ceQ(d){return this.Ja(d,null)},
ceR(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Ja=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dR6(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xi.c7().anl(!0,C.a_v,!1),$async$Ja)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tL(new B.dR7(l,s,r),"Preparing\u2026"),$async$Ja)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.v(q))
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
return A.b(B.bDg(p,l,e,s.a.c),$async$Ja)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ja,w)},
Im(d){return this.bZd(d)},
bZd(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Im=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hHl(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0g(t),$async$Im)
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
return A.b(u.tL(new B.dR0(u,d),"Receiving video\u2026"),$async$Im)
case 11:x=1
break
case 10:x=12
return A.b(u.tL(new B.dR1(u,d),"Receiving\u2026"),$async$Im)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Im,w)},
Ed(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ed=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CZ()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agq(t),$async$Ed)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Im(s),$async$Ed)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).cm(A.ea(new B.dRb(u),!1,null,y.N)),$async$Ed)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tK(),$async$Ed)
case 10:x=1
break
case 9:x=11
return A.b(u.Im(C.a.i(r)),$async$Ed)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ed,w)},
ahe(d){return this.cqX(d)},
cqX(d){var x=0,w=A.j(y.H),v=this
var $async$ahe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tL(new B.dRa(v,d),"Saving\u2026"),$async$ahe)
case 2:return A.h(null,w)}})
return A.i($async$ahe,w)},
IX(d){return this.bL0(d)},
bL0(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l8(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IX)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c9e(t),$async$IX)
case 6:case 5:s=d.a
x=7
return A.b(B.Ez(u.a.c,s),$async$IX)
case 7:u.r.W(0,s)
x=8
return A.b(u.tK(),$async$IX)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IX,w)},
ai5(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a15(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.K,null,new B.dRv(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ai5)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afq()
break
case"import":u.abN()
break}case 1:return A.h(v,w)}})
return A.i($async$ai5,w)},
c7g(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mI))return C.qe
if(C.a.a0(x,"image/")||d.my(D.Qw))return C.u9
if(C.a.t(x,"pdf"))return E.O4
return D.ame},
B(d){var x,w,v=this,u=null,t=B.a15(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GO,u,u,u,new B.dRG(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bOB,u,u,u,v.e?u:v.gcex(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcsn()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bIV:E.amD,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a1d,u,u,u,v.e?u:v.gc7h(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oc,u,u,u,v.e?u:v.gb1o(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bQj,u,u,u,v.e?u:new B.dRH(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lF(new B.dRI(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.P(d).ax.a===C.I?0.12:0.08),C.aF.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m6(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.az5(C.jv,s,!0,t,w?u:v.gcvm(),u),1)
x.push(new A.D(D.buR,A.mG(new B.dRJ(),A.B(A.a([s,C.at,A.E(new B.az5(C.vV,"Export",!1,t,w?u:v.gbOJ(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iL,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bdn(t,v.e?u:v.gb1o(),u)
else s=A.ke(!0,u,u,new B.dRK(v,t),s,u,D.buJ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.Z,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.az5.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aF,t,t,0,C.c,t,C.vE,t,new A.b7(s,C.a0),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vE,t,new A.b7(s,C.a0),new A.az(v,1,C.q,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bdn.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mG(new B.d3J(),new A.D(E.Zz,A.x(A.a([A.mG(new B.d3K(),A.p(x,A.X(C.yk,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.az,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ip,x,x,new A.bq(0.86,1,w),s),C.dZ,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dZ,A.dn(C.oc,D.fE0,this.d,A.bo(C.aF,x,x,x,C.c,x,C.Zu,x,new A.b7(A.n(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.Bc,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.acc.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.my(D.mI))p=D.dfS
else{p=C.a.a0(p,"image/")||i.my(D.Qw)
n=y.O
p=p?A.a([C.cQ,C.aF],n):A.a([C.aK.j(0.85),C.aF.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gapq()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mI))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mI)))l.push(A.fVS(C.aF,!1,j,j,j,!1,j,j,new B.d45(k),j,j,new A.b7(A.n(5),C.a0),j,j,!1,u))
x=A.X(C.oa,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mG(new B.d46(),new A.D(C.e8,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Z1,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ah),j),C.cu,h,new A.cy("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.Z4.prototype={
S(){return new B.aza()},
gde(){return this.c}}
B.aza.prototype={
Z(){this.a1()
this.xP()},
q(){B.hHA(this.e)
this.a2()},
xP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rt(o.c,o.d),$async$xP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hHD(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hHC(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d42(s))
x=1
break}s.m(new B.d43(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d44(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xP,w)},
a1K(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rt(t.c,t.d),$async$a1K)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f_h)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahG(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1K)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1K,w)},
bZ6(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ks(u,C.A,v,new B.d40(w,t),C.h0,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aH.gan(t))x=A.fR(t,C.A,v,new B.d41(w),C.h0,C.dw,!0,v,!1,v,v)
else return C.bI
return A.uy(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a15(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Cc,u,u,u,v.gb5e(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Eq
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cc(w,".heic")||C.a.cc(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.Cc,D.fmU,v.gb5e(),A.bo(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bZ6()}return A.c6(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Z1.prototype={
S(){return new B.az7(A.aiu(),C.bx,C.bx)},
gde(){return this.c}}
B.az7.prototype={
Z(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fx(w,A.a3(w).k("fx<1>")).ip(new B.d3G(v))
x.gcRW().ip(new B.d3H(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a3(x).k("fx<1>"))}if(x==null)x=C.b5z
x.ip(new B.d3I(v))
v.xP()},
xP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rt(p.c,p.d),$async$xP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d3z(s))
x=1
break}x=8
return A.b(s.d.C7(0,new A.a3b(r,s.a.d.c)),$async$xP)
case 8:if(s.c==null){x=1
break}s.m(new B.d3A(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d3B(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xP,w)},
ZB(){var x=0,w=A.j(y.H),v=this,u
var $async$ZB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$ZB)
case 5:x=3
break
case 4:x=6
return A.b(u.is(0),$async$ZB)
case 6:case 3:return A.h(null,w)}})
return A.i($async$ZB,w)},
aT_(d){var x=d.a
return C.a.aY(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aY(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a15(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Eq
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJU,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Oz,C.n),o,88,o,o,o,o,o,88)
t=A.l2(C.aF,o,o,m,0,new B.d3C(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aT_(p.w)+" / "+p.aT_(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aF,o,o,o,o,D.eWK,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yu:C.iO,o,o,o,o,o)
x=A.x(A.a([u,C.kJ,t,x,C.d8,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc7k(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c6(v,w,A.av(new A.D(C.rc,x,o),o,o,o),o,!1,!1,o,o)}}
B.PB.prototype={
S(){return new B.azd()},
gde(){return this.c}}
B.azd.prototype={
Z(){this.a1()
this.Pz()},
Pz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fYb(o.c,o.d,new B.d4j(s)),$async$Pz)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d4k(s))
x=1
break}s.e=r
q=O.i3q(r)
if(q==null){s.m(new B.d4l(s))
x=1
break}s.d=q
q.aR(0,s.gb04())
x=8
return A.b(q.io(0).d8(0,C.r8),$async$Pz)
case 8:if(s.c==null){x=1
break}s.m(new B.d4m(s))
x=9
return A.b(q.pX(0),$async$Pz)
case 9:q.tm(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d4n(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pz,w)},
ccP(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d4o(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CT(0,x.gb04())
w=x.d
if(w!=null)w.q()
B.idf(x.e)
x.a2()},
adX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZR(u.c,u.d),$async$adX)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adX,w)},
B(d){var x,w,v,u=this,t=null,s=B.a15(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p4,t,t,t,u.gc7e(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Eq
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahZ(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fM(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.Ah(s,t),A.aB(t,A.De(A.p(t,A.X(q?I.yu:C.iO,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bP,t,t,t),C.bd,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d4q(u),t,t,t,t,t,t,!1,C.a5)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Z6.prototype={
S(){return new B.azb(new A.cs(null,y.A))}}
B.azb.prototype={
gcEg(){var x,w,v=this.a
if(v.e!==D.RU)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b6(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDV(){var x,w,v=this.a
if(v.e!==D.zr)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b6(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a1()
x=v.gcEg()
if(x!=null){v.QB(x)
v.e=A.dv(R.Fy,new B.d4f(v,x))}w=v.gcDV()
if(w!=null){v.QA(w)
v.f=A.dv(C.fZ,new B.d4g(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
QA(d){return this.cjS(d)},
cjS(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aph(d),$async$QA)
case 3:t=f
x=4
return A.b(B.c9x(d),$async$QA)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d47(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QA,w)},
QB(d){return this.cjT(d)},
cjT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fLD(d),$async$QB)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bBb(t),$async$QB)
case 4:if(u.c==null){x=1
break}u.m(new B.d48(u))
u.c.K(y.q).f.U(D.aPq)
case 1:return A.h(v,w)}})
return A.i($async$QB,w)},
gc39(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc7f(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1w(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CZ()){t=u.c
if(t!=null)t.K(y.q).f.U(D.f2n)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).cm(A.ea(new B.d49(),!1,null,y.N)),$async$a1w)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bBb(s),$async$a1w)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aPq)
case 1:return A.h(v,w)}})
return A.i($async$a1w,w)},
a9G(d){return this.bII(d)},
bII(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fP(new A.fF(C.d.aG(t,", "))),$async$a9G)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9G,w)},
adV(d){return this.bIs(d)},
bIs(d){var x=0,w=A.j(y.H),v=this
var $async$adV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fP(new A.fF(v.a.c)),$async$adV)
case 2:if(d.e!=null)d.K(y.q).f.U(D.f_L)
return A.h(null,w)}})
return A.i($async$adV,w)},
a1r(d){return this.cqZ(d)},
cqZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aof(s.d,4),$async$a1r)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t0(r,"ngmy_doc_share_qr.png"),$async$a1r)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1r,w)},
gaWg(){var x,w=this.a
if(w.e!==D.HZ)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b6(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b6(x,13))
return null},
a9D(d){return this.bIB(d)},
bIB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaWg()
if(t==null){x=1
break}x=3
return A.b(A.fP(new A.fF(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9D)
case 3:if(d.e!=null)d.K(y.q).f.U(D.f1n)
case 1:return A.h(v,w)}})
return A.i($async$a9D,w)},
adW(){var x=0,w=A.j(y.H),v=this,u
var $async$adW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UX(),$async$adW)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adW,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a15(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HZ&&i!==D.RU&&i!==D.zr
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HZ||t===D.RU||t===D.zr?l:A.aH(l,l,l,l,C.l7,l,l,l,m.gaZe(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aF.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.P,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc39(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HZ){t=C.aF.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mv,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc7f(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bU6,D.fw6,new B.d4a(m,d),l)],p))}if(m.a.e===D.HZ&&m.gaWg()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bQD,D.fsR,new B.d4b(m,d),l)],p))
if(m.a.e===D.zr){x=(m.w?C.dB:C.aF).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Et:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mv,l,l,l)],p))}if(m.a.e===D.RU){x=(m.r?C.dB:C.aF).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Et:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mv,l,l,l),C.ac,A.dn(D.bMn,D.fza,m.gcrm(),A.bo(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.os(i,A.c6(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.es(N.Cb,C.Ui,new B.d4c(m,d),l),1),C.at,A.E(A.dn(C.yO,C.a8U,new B.d4d(m,d),A.bo(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a7(1/0,l,A.bG(C.A_,m.gaZe(),A.bo(C.aK,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d4e(),y.C)}}
B.aca.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cd(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ag)
return A.em(A.a([A.bG(C.wG,new B.d3y(d),x)],u),x,x,C.mY,v,x,x,x,x,D.flV,x)}}
B.Z0.prototype={
S(){return new B.az6(A.zo(C.xH,C.nN,C.un))}}
B.az6.prototype={
q(){this.d.q()
this.a2()},
awX(d){var x,w,v,u,t
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
return A.c6(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.ftk,x,x,x,1,x,!0),C.w,A.zn(this.d,C.bX,this.gawW()),x,!1,!1,x,x)}}
B.Z7.prototype={
S(){return new B.azc(A.zo(C.xH,C.nN,C.un))},
gde(){return this.c}}
B.azc.prototype={
c_9(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.S5("text/plain"),$async$afN)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.f2h)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afN,w)},
aat(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aat=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hsV(p,!0),$async$aat)
case 3:t=e
p=t==null
s=B.a6X(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.eZS)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aat,w)},
q(){this.d.q()
this.a2()},
awX(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c_9(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.anw,v,v,v,w.gbOf(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1k,v,v,v,w.gchf(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.ri:P.NQ,v,v,v,v,v),v,v,v,new B.d4i(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fA1,v,v,v,1,v,!0)
u=A.zn(w.d,C.bX,w.gawW())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.Z,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ejs],s),v),v,!1,!1,v,v)}}
B.bdo.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oQ
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oQ:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.ZF,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.eB,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ah)}}
B.a9m.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Or.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.X7.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Oq.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.F3.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cks.prototype={}
B.F2.prototype={}
B.a9l.prototype={}
B.atz.prototype={}
B.X8.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jn)","m(jn)","UO(Y)","~()","Z3(Y)","F(F,jn)","PB(Y)","~(m0)","cr(F2)","aA<jn?>(@)","UM(Y)","UQ(Y)","D(jn)","jn(@)","a6<m,@>(jn)","Z2(Y)","UN(Y)","Z4(Y)","Z1(Y)","Z6(Y)","aca(Y)","ai<jn>()","Z7(Y)","acc(Y,F)","Z0(Y)","a6<m,aD>(jn)","cr(X7)","cr(a9l)","aA<cr>(F2)"])
B.cko.prototype={
$1(d){var x=this.a
x.x=D.aMz
x.y.L(0,D.aMz)},
$S:70}
B.ckp.prototype={
$1(d){var x=this.a
x.x=D.aMy
x.y.L(0,D.aMy)},
$S:70}
B.ckq.prototype={
$1(d){var x=this.a
x.ah7(A.aOO(d.data)).bC(new B.ckn(x),y.b)},
$S:70}
B.ckn.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ckr.prototype={
$1(d){},
$S:70}
B.cku.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hMj(d.channel))},
$S:15}
B.ckv.prototype={
$1(d){},
$S:15}
B.ckw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i4t(w.iceConnectionState)
x.cx=w
if($.h68())switch(w.a){case 0:x.cy=D.aME
break
case 1:x.cy=D.aMF
break
case 3:x.cy=D.aMG
break
case 5:x.cy=D.aMC
break
case 6:x.cy=D.aMD
break
case 7:x.cy=D.a6z
break
default:break}},
$S:156}
B.ckx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i4u(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:156}
B.cky.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ieJ(w.signalingState)},
$S:156}
B.ckz.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.icX(w.connectionState)},
$S:156}
B.ckA.prototype={
$1(d){},
$S:156}
B.ckB.prototype={
$1(d){},
$S:15}
B.fn6.prototype={
$1(d){var x=y.F.a(new A.rR([],[]).pG(d.target.result,!1)),w=C.xI.t(x.objectStoreNames,"blobs")
if(!w)C.xE.KN(x,"blobs")},
$S:195}
B.fKZ.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w7.fg(this.b)
$.eU.mt()
this.c.$1(d)},
$S:456}
B.fL0.prototype={
$1(d){return this.a.$1(B.hVc(this.b,this.c))},
$S:35}
B.fL_.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fKY.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fLd.prototype={
$1(d){var x=this
return B.hil(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fLe.prototype={
$1(d){var x=this
return B.hil(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fpm.prototype={
$1(d){var x=this
return B.c98(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d3R.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d3O.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c98(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d3Q.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c98(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d3P.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c98(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d3T.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bKZ,x,x,x,new B.d3S(d),x,x,x,x,x,x),A.E(A.EP(D.Qf,!0,x,C.a0q,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qf,x,g,C.ajm,0,e,f)},
$C:"$4",
$R:4,
$S:433}
B.d3S.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.frl.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eI,y.o).w,t=this.a,s=t?C.ij:C.c,r=A.n(28),q=A.p(v,D.boJ,C.f,v,v,D.b14,v,v,v,v,D.ajc,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bP9,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FL,A.x(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anL,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dW(C.dh,new B.frj(d),v),1),C.at,A.E(A.bG(D.frS,new B.frk(p,x,d),A.bo(C.b0,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mw,v,v,v,v),v)},
$S:62}
B.frj.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.frk.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.f0_)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aBH(v,x))},
$S:0}
B.frP.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eI,y.o).w,u=x.a,t=u?C.ij:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.boz,C.f,w,w,D.b2x,w,w,w,w,D.ajc,w,w,1/0),new A.D(C.FL,A.x(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h29(u,"Organization name",C.Gc,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h29(u,"Access code",C.nn,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h29(u,"Member password",H.GJ,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fA7,new B.frO(r,q,p,d),A.bo(C.aF,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mw,w,w,w,w),w)},
$S:62}
B.frO.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.f04)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aET(u,x,w))},
$S:0}
B.c9_.prototype={
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
return A.b(A.vl(p,null).d8(0,C.YE),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cg(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BK(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.am.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.c95.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c96.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c97.prototype={
$1(d){return d.b},
$S:z+2}
B.c91.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c92.prototype={
$1(d){return d.b},
$S:z+2}
B.c90.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c93.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c94.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fLb.prototype={
$1(d){return new B.UM(this.a,null)},
$S:z+11}
B.fLc.prototype={
$1(d){return new B.UQ(this.a,this.b,this.c,null)},
$S:z+12}
B.dQE.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dRN.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dRO.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dRP.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dRM(x,d))},
$S:2}
B.dRM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRR.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dRS.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dRT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dRU.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.dRV.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dRY.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.u(0,(1-e)*14)),e)},
$S:106}
B.dRW.prototype={
$1(d){var x=this.a
return x.f?null:x.ZA()},
$S:2}
B.dRX.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qw))s=C.u9
else s=C.a.a0(s,"video/")||d.my(D.mI)?C.qe:D.ame
x=this.b.a
w=y.p
return new A.D(C.kZ,A.B(A.a([A.p(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gapq(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dQF.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dQG.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c99.prototype={
$2(d,e){return new A.bx(J.k(d),J.k(e),y.M)},
$S:92}
B.c9a.prototype={
$2(d,e){return new A.bx(J.k(d),J.k(e),y.M)},
$S:92}
B.fLV.prototype={
$2(d,e){return e===this.a},
$S:281}
B.fki.prototype={
$1(d){return J.k(d)},
$S:17}
B.fpy.prototype={
$1(d){var x=this.b
B.hTf(C.G_.ga6a(this.a)).bC(x.gcHm(x),y.H)},
$S:120}
B.fpz.prototype={
$1(d){return this.a.d5(0,null)},
$S:120}
B.fpA.prototype={
$0(){return null},
$S:11}
B.c9o.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fpB.prototype={
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
B.ftF.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fo_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fo0.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c9t.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mI)},
$S:z+1}
B.fQ0.prototype={
$1(d){return new B.Z2(this.a,null)},
$S:z+16}
B.d3N.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d3L.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d3M.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dRL.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0D()},
$S:12}
B.dR8.prototype={
$0(){var x=J.bEl(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dR9.prototype={
$0(){var x=J.bEl(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQI.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDP(this.c)}},
$S:0}
B.dQH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQJ.prototype={
$0(){var x=J.bEl(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQO.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dQN(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDP(this.c)}},
$S:0}
B.dQN.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRz.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dRA.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dR5.prototype={
$1(d){return new B.UN(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dR2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I5(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UR(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tK(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0O(s.gM(t)),$async$$0)
case 8:case 7:r.i8(s.gan(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQM.prototype={
$1(d){this.a.abR(d,"No files selected.","Added")},
$S:456}
B.dRd.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dRc(),A.S(x).k("M<1,m>")))},
$S:0}
B.dRc.prototype={
$1(d){return d.a},
$S:z+2}
B.dQS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xi.c7().cTT(C.a_v,!0),$async$$0)
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
$.am.$1("[doc share import] "+A.v(p))
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
return A.b(B.apg(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i8("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tK(),$async$$0)
case 9:o.i8("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dRw.prototype={
$1(d){return new B.PB(this.a.a.c,this.b,null)},
$S:z+7}
B.dRx.prototype={
$1(d){return new B.Z4(this.a.a.c,this.b,null)},
$S:z+18}
B.dRy.prototype={
$1(d){return new B.Z1(this.a.a.c,this.b,null)},
$S:z+19}
B.dR3.prototype={
$1(d){return new B.PB(this.a.a.c,this.b,null)},
$S:z+7}
B.dR4.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dRp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I5(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6Z(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i8("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cnk(),$async$$0)
case 5:x=6
return A.b(p.tK(),$async$$0)
case 6:r=A.S(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dRl(p),r),new B.dRm(),r.k("M<ak.E,m>")).c0(0,new B.dRn())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).cm(A.ea(new B.dRo(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pa(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UX(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRl.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dRk(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dRk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dRm.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dRn.prototype={
$1(d){return d.length!==0},
$S:3}
B.dRo.prototype={
$1(d){var x=this.a
return new B.Z6(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dRq.prototype={
$1(d){return d.a},
$S:z+2}
B.dRr.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dRj.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kY,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gapq(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mI)?C.ub:C.p1
p=!x||p.my(D.mI)?"Play video":"View"
return A.c0(A.bm(!0,new A.D(C.Bo,A.x(A.a([q,o,t,C.aB,B.Z5(!1,u,!1,w,p,new B.dRe(d),v),B.Z5(!1,u,!1,C.jv,"Share via QR",new B.dRf(d),"Letters/numbers QR code"),B.Z5(!1,u,!1,D.a0w,"Send to their Code",new B.dRg(d),"Enter someone else's personal code"),B.Z5(!1,u,!1,C.hF,"Download / save",new B.dRh(d),v),C.am,B.Z5(!1,u,!0,C.ea,"Delete",new B.dRi(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.a0,C.a0,C.a0),C.kP,v,v,C.n),C.bf)},
$S:689}
B.dRe.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dRf.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dRg.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dRh.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dRi.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dQP.prototype={
$1(d){return d.a},
$S:z+2}
B.dQQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dQR.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a70(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gw(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pa(s.c,s.f),$async$$0)
case 4:u.i8(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQL.prototype={
$1(d){var x=this.a
x.tL(new B.dQK(x,d,this.b),"Preparing\u2026")},
$S:456}
B.dQK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i8("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UR(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i8("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bDg(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i8("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dR6.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dR7.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fYe(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dR0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gt(new B.dQX(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i8("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dQY(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dQZ(s))
case 5:x=8
return A.b(r.b.it(0,C.Fv,new B.dR_()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gan(t)){s.i8("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tK(),$async$$0)
case 9:s.i8("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQX.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQU(x,d,e))},
$S:139}
B.dQU.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQY.prototype={
$1(d){return new B.aca(this.a.a,null)},
$S:z+21}
B.dQZ.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dR_.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dR1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.It(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6P(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0g(B.It(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apg(new B.dQV(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fYd(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i8(q)
x=1
break}x=10
return A.b(s.tK(),$async$$0)
case 10:o=J.cF(r)
p=o.eQ(r,new B.dQW()).gM(0)
s.i8(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQV.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dQT(x,d,e))},
$S:139}
B.dQT.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dQW.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mI)},
$S:z+1}
B.dRb.prototype={
$1(d){return new B.Z7(this.a.a.c,null)},
$S:z+23}
B.dRa.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZR(u.a.c,v.b),$async$$0)
case 2:t.i8(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dRv.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aF.j(0.35)
return A.c0(A.bm(!0,new A.D(C.Bo,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kY,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.Z5(!0,w,!1,C.nn,"My Code",new B.dRs(d),"Your personal code & QR \u2014 others send docs to you"),B.Z5(!1,w,!1,D.a0w,"Send to their Code",new B.dRt(this.a,d),"Enter someone else's 5-digit code + letter"),B.Z5(!1,w,!1,S.yE,"Import backup",new B.dRu(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.a0,C.a0,C.a0),C.kP,x,x,C.n),C.bf)},
$S:689}
B.dRs.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dRt.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bCu()},
$S:0}
B.dRu.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dRI.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.ID(D.Qf,x,C.a0q,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cS(C.d.gI(D.Qf).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:652}
B.dRG.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dRH.prototype={
$0(){this.a.ai5()
return null},
$S:0}
B.dRJ.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.u(0,(1-e)*10)),e)},
$S:106}
B.dRK.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acc(e,w,v,this.b,x.e,x.c7g(w),new B.dRC(x,w),new B.dRD(x,v,w),new B.dRE(x,w),new B.dRF(x,w),null)},
$S:z+24}
B.dRC.prototype={
$0(){this.a.afk(this.b)
return null},
$S:0}
B.dRD.prototype={
$0(){var x=this.a
return x.m(new B.dRB(x,this.b,this.c))},
$S:0}
B.dRB.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dRE.prototype={
$0(){this.a.NY(this.b)
return null},
$S:0}
B.dRF.prototype={
$0(){this.a.ahT(this.b)
return null},
$S:0}
B.d3J.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.u(0,(1-e)*18)),e)},
$S:106}
B.d3K.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:131}
B.d46.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.u(0,(1-e)*14)),e)},
$S:106}
B.d45.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d42.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d43.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d44.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.d40.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gan(w))return A.fR(w,C.A,x,new B.d3Z(this.a),C.h0,C.dw,!0,x,!1,x,x)
$.aW.x1$.push(new B.d4_(this.a))
return C.bI},
$S:144}
B.d3Z.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d3X(this.a))
return C.bI},
$S:186}
B.d3X.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3U(x))},
$S:8}
B.d3U.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d4_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3W(x))},
$S:8}
B.d3W.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d41.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d3Y(this.a))
return C.bI},
$S:186}
B.d3Y.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d3V(x))},
$S:8}
B.d3V.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d3G.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3F(x,d))},
$S:1743}
B.d3F.prototype={
$0(){return this.a.f=this.b===C.uI},
$S:0}
B.d3H.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3E(x,d))},
$S:8}
B.d3E.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d3I.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d3D(x,d))},
$S:8}
B.d3D.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d3z.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d3A.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d3B.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.d3C.prototype={
$1(d){return this.a.d.MY(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d4j.prototype={
$0(){var x=this.a.a
return B.rt(x.c,x.d)},
$S:1744}
B.d4k.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d4l.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d4m.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d4n.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.d4o.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d4q.prototype={
$0(){var x=this.a
x.m(new B.d4p(x))},
$S:0}
B.d4p.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pX(0)},
$S:0}
B.d4f.prototype={
$1(d){return this.a.QB(this.b)},
$S:12}
B.d4g.prototype={
$1(d){return this.a.QA(this.b)},
$S:12}
B.d47.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d48.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d49.prototype={
$1(d){return D.h5Q},
$S:z+25}
B.d4e.prototype={
$2(d,e){if(d)B.UX()},
$S:122}
B.d4a.prototype={
$0(){return this.a.a9G(this.b)},
$S:0}
B.d4b.prototype={
$0(){return this.a.a9D(this.b)},
$S:0}
B.d4c.prototype={
$0(){return this.a.adV(this.b)},
$S:0}
B.d4d.prototype={
$0(){return this.a.a1r(this.b)},
$S:0}
B.d3y.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d4i.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.q0(),$async$$0)
case 2:u.m(new B.d4h(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d4h.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c9v.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mI)},
$S:z+1}
B.c9w.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c9u.prototype={
$2(d,e){return this.bjL(d,e)},
bjL(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UY(u.c,A.G(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.fth.prototype={
$1(d){if(d===D.a6y&&(this.a.a.a&30)===0)this.a.fV(0)},
$S:z+27}
B.fti.prototype={
$0(){},
$S:11}
B.ftP.prototype={
blj(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fhp(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hdt(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.blj(d,e)},
$S:722}
B.ftO.prototype={
$1(d){var x=this
d.b=new B.ftN(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.ftN.prototype={
$1(d){return this.bli(d)},
bli(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZS(n,m),$async$$1)
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
return A.b(B.fhp(l,n.b,m,n.c,s.d),$async$$1)
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
$.am.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6Y(m),$async$$1)
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
x(v=B.az9.prototype,"gce9","Qc",0)
x(v,"gcf0","Jb",0)
x(v,"gcew","xZ",0)
x(v=B.aD3.prototype,"gc7a","adT",0)
x(v,"gc7b","Zz",0)
x(v,"gctR","ahA",0)
x(v=B.aD6.prototype,"gc7c","ZA",0)
x(v,"gctS","a1L",0)
x(B.aD4.prototype,"gc7d","adU",0)
x(B.az8.prototype,"gc7i","c7j",4)
x(v=B.aD5.prototype,"gcex","a_H",0)
x(v,"gcsn","cso",4)
x(v,"gb1o","ayk",0)
x(v,"gcvm","ai_",0)
x(v,"gbOJ","Xt",0)
x(v,"gc7h","Ed",0)
x(B.aza.prototype,"gb5e","a1K",0)
x(B.az7.prototype,"gc7k","ZB",0)
x(v=B.azd.prototype,"gb04","ccP",4)
x(v,"gc7e","adX",0)
x(v=B.azb.prototype,"gcrm","a1w",0)
x(v,"gaZe","adW",0)
w(B.az6.prototype,"gawW","awX",8)
x(v=B.azc.prototype,"gchf","afN",0)
x(v,"gbOf","aat",0)
w(v,"gawW","awX",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cks,B.a9l,B.atz,B.aBH,B.aET,B.jn,B.abT,B.bvi,B.F2,B.X8])
w(B.ckt,B.cks)
w(B.b3Z,B.a9l)
x(A.i0,[B.cko,B.ckp,B.ckq,B.ckn,B.ckr,B.cku,B.ckv,B.ckw,B.ckx,B.cky,B.ckz,B.ckA,B.ckB,B.fn6,B.fKZ,B.fL0,B.fL_,B.fLd,B.fLe,B.fpm,B.d3O,B.d3Q,B.d3P,B.d3T,B.frl,B.frP,B.c9_,B.c96,B.c97,B.c92,B.c90,B.c93,B.c94,B.fLb,B.fLc,B.dRP,B.dRY,B.dRW,B.dRX,B.fki,B.fpy,B.fpz,B.c9o,B.fpB,B.ftF,B.fo_,B.fo0,B.c9t,B.fQ0,B.d3N,B.d3L,B.dRL,B.dQH,B.dQN,B.dR5,B.dQM,B.dRc,B.dRw,B.dRx,B.dRy,B.dR3,B.dRl,B.dRk,B.dRm,B.dRn,B.dRo,B.dRq,B.dRr,B.dRj,B.dQP,B.dQQ,B.dQL,B.dR6,B.dQY,B.dQW,B.dRb,B.dRv,B.dRI,B.dRJ,B.d3J,B.d3K,B.d46,B.d45,B.d40,B.d3Z,B.d3X,B.d4_,B.d41,B.d3Y,B.d3G,B.d3H,B.d3I,B.d3C,B.d4f,B.d4g,B.d49,B.c9v,B.c9w,B.fth,B.ftO,B.ftN])
w(B.b4_,B.atz)
x(A.ja,[B.fKY,B.d3R,B.d3S,B.frj,B.frk,B.frO,B.dQE,B.dRN,B.dRO,B.dRM,B.dRQ,B.dRR,B.dRS,B.dRT,B.dRU,B.dRV,B.dQF,B.dQG,B.fpA,B.d3M,B.dR8,B.dR9,B.dQI,B.dQJ,B.dQO,B.dRz,B.dRA,B.dR2,B.dRd,B.dQS,B.dR4,B.dRp,B.dRe,B.dRf,B.dRg,B.dRh,B.dRi,B.dQR,B.dQK,B.dR7,B.dR0,B.dQU,B.dQZ,B.dR_,B.dR1,B.dQT,B.dRa,B.dRs,B.dRt,B.dRu,B.dRG,B.dRH,B.dRC,B.dRD,B.dRB,B.dRE,B.dRF,B.d42,B.d43,B.d44,B.d3U,B.d3W,B.d3V,B.d3F,B.d3E,B.d3D,B.d3z,B.d3A,B.d3B,B.d4j,B.d4k,B.d4l,B.d4m,B.d4n,B.d4o,B.d4q,B.d4p,B.d47,B.d48,B.d4a,B.d4b,B.d4c,B.d4d,B.d3y,B.d4i,B.d4h,B.fti])
x(A.md,[B.acb,B.Np,B.a9m,B.Or,B.X7,B.Oq,B.F3])
x(A.ag,[B.Z3,B.UM,B.UQ,B.UN,B.Z2,B.UO,B.Z4,B.Z1,B.PB,B.Z6,B.Z0,B.Z7])
x(A.ah,[B.az9,B.aD3,B.aD6,B.aD4,B.az8,B.aD5,B.aza,B.az7,B.azd,B.azb,B.az6,B.azc])
x(A.au,[B.acE,B.az5,B.bdn,B.acc,B.aca,B.bdo])
x(A.ko,[B.c95,B.c91,B.c99,B.c9a,B.fLV,B.dQX,B.dQV,B.dRK,B.d4e,B.c9u,B.ftP])
x(A.iU,[B.biJ,B.buX])})()
A.k4(b.typeUniverse,JSON.parse('{"b3Z":{"a9l":[]},"b4_":{"atz":[]},"Z3":{"ag":[],"t":[]},"az9":{"ah":["Z3"]},"acE":{"au":[],"t":[]},"UM":{"ag":[],"t":[]},"UQ":{"ag":[],"t":[]},"aD3":{"ah":["UM"]},"aD6":{"ah":["UQ"]},"biJ":{"iU":[]},"UN":{"ag":[],"t":[]},"aD4":{"ah":["UN"]},"Z2":{"ag":[],"t":[]},"UO":{"ag":[],"t":[]},"acc":{"au":[],"t":[]},"Z4":{"ag":[],"t":[]},"Z1":{"ag":[],"t":[]},"PB":{"ag":[],"t":[]},"Z6":{"ag":[],"t":[]},"aca":{"au":[],"t":[]},"Z0":{"ag":[],"t":[]},"Z7":{"ag":[],"t":[]},"az8":{"ah":["Z2"]},"buX":{"iU":[]},"aD5":{"ah":["UO"]},"az5":{"au":[],"t":[]},"bdn":{"au":[],"t":[]},"aza":{"ah":["Z4"]},"az7":{"ah":["Z1"]},"azd":{"ah":["PB"]},"azb":{"ah":["Z6"]},"az6":{"ah":["Z0"]},"azc":{"ah":["Z7"]},"bdo":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("uh"),k:x("LS()"),m:x("bl<m,m>"),F:x("r4"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bi>"),Y:x("O<a6<m,Q>>"),t:x("O<a6<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(lA,m)>"),u:x("O<cS>"),s:x("O<m>"),E:x("O<iU>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<F>"),G:x("bi"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bx<m,m>"),P:x("a6<m,@>"),f:x("a6<@,@>"),o:x("iE"),e:x("iiF"),af:x("Ef"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("wc"),ab:x("F2"),br:x("atz"),v:x("X8"),N:x("m"),X:x("bq<K>"),Q:x("lM"),D:x("dL"),aw:x("cy<m>"),cd:x("a_<a6<m,@>>"),c7:x("t"),ch:x("bY<ai<jn>>"),aW:x("bY<dL?>"),aY:x("bY<~>"),cx:x("acb"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBH"),bG:x("aET"),q:x("n2"),B:x("ps<F2>"),c6:x("ps<a9m>"),y:x("Q"),i:x("K"),z:x("@"),S:x("F"),aQ:x("bi?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a6<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("X8?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,Np,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abT?"),bk:x("aBH?"),ag:x("aET?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b_q=new A.az(C.aF,2,C.q,-1)
D.bYD=new A.a9(C.a3,C.a8,C.x,C.a2p,null,null)
D.b14=new A.o(null,null,null,C.mg,null,D.bYD,C.n)
D.b2x=new A.o(null,null,null,C.mg,null,E.GW,C.n)
D.acR=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ae5=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.af2=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.agu=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fmN=new A.y("Your team portal",null,C.de,null,null,null,null,null,null,null,null,null)
D.fB2=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DG,null,null,null,null,null,null,null,null,null)
D.d7t=x([D.fmN,C.am,D.fB2],y.p)
D.bop=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.d7t,null)
D.fFo=new A.y("Create your organization",null,C.fu,null,null,null,null,null,null,null,null,null)
D.fr5=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DG,null,null,null,null,null,null,null,null,null)
D.dno=x([D.fFo,C.am,D.fr5],y.p)
D.boz=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dno,null)
D.fBE=new A.y("Team Member sign-in",null,C.fu,null,null,null,null,null,null,null,null,null)
D.fuU=new A.y("Enter the access code and password from your organization.",null,G.DG,null,null,null,null,null,null,null,null,null)
D.dld=x([D.fBE,C.am,D.fuU],y.p)
D.boJ=new A.fn(C.ag,C.e,C.j,C.F,null,C.p,null,0,D.dld,null)
D.buJ=new A.R(16,10,16,28)
D.buR=new A.R(16,14,16,4)
D.bw4=new A.R(20,0,20,16)
D.bwz=new A.R(20,8,20,16)
D.ajc=new A.R(24,22,24,20)
D.a0w=new A.a0(63394,"MaterialIcons",!1)
D.ame=new A.a0(63515,"MaterialIcons",!1)
D.bIV=new A.a0(983813,"MaterialIcons",!1)
D.bG9=new A.a0(62867,"MaterialIcons",!1)
D.bJU=new A.ae(D.bG9,44,C.c,null,null,null)
D.bKZ=new A.ae(C.q4,null,C.ad,null,null,null)
D.bMn=new A.ae(C.j5,18,null,null,null,null)
D.bO4=new A.ae(D.a0w,26,C.c,null,null,null)
D.bOB=new A.ae(C.C2,null,null,null,null,null)
D.bP9=new A.ae(C.yF,null,null,null,null,null)
D.bQj=new A.ae(W.O2,null,null,null,null,null)
D.bQD=new A.ae(C.hq,16,null,null,null,null)
D.bU6=new A.ae(C.rm,16,null,null,null,null)
D.bKb=new A.ae(C.nn,null,null,null,null,null)
D.bUY=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bKb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPH=new A.ae(C.Gc,null,null,null,null,null)
D.bV2=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bKw=new A.ae(H.GJ,null,null,null,null,null)
D.bVd=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bKw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cIN=x([C.fd,C.b0,C.aF],y.O)
D.c_w=new A.a9(C.az,C.aC,C.x,D.cIN,null,null)
D.cIf=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qf=x([C.fd,C.aF],y.O)
D.Qw=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mI=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dfS=x([C.oK,C.aF],y.O)
D.e7L={iceServers:0}
D.aHd={urls:0}
D.dr9=new A.bl(D.aHd,["stun:stun.l.google.com:19302"],y.m)
D.dr8=new A.bl(D.aHd,["stun:stun1.l.google.com:19302"],y.m)
D.cYG=x([D.dr9,D.dr8],A.ax("O<a6<m,m>>"))
D.dqr=new A.bl(D.e7L,[D.cYG],A.ax("bl<m,@>"))
D.HZ=new B.Np(0,"lanDirect")
D.RT=new B.Np(1,"cloudStash")
D.dCv=new B.Np(2,"inlineInstant")
D.RU=new B.Np(3,"webrtcLink")
D.zr=new B.Np(4,"videoCloud")
D.fB1=new A.y("Receive file",null,C.mR,null,null,null,null,null,null,null,null,null)
D.cyd=x([E.anT,C.ab,D.fB1],y.p)
D.eSe=new A.ci(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cyd,null)
D.edH=new A.D(C.cm,D.eSe,null)
D.fdT=new A.H(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a34,null,null,null)
D.fnk=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fdT,null,C.L,null,null,null,null,null,null,null)
D.ecY=new A.D(C.Bt,D.fnk,null)
D.b6N=new A.cp(C.A,null,null,D.ecY,null)
D.ejs=new A.cL(0,null,0,28,null,null,D.b6N,null)
D.ejL=new B.a9m(0,"RTCDataChannelConnecting")
D.aMy=new B.a9m(1,"RTCDataChannelOpen")
D.aMz=new B.a9m(3,"RTCDataChannelClosed")
D.ejM=new B.F3(0,"RTCIceConnectionStateNew")
D.ejN=new B.F3(1,"RTCIceConnectionStateChecking")
D.ejO=new B.F3(2,"RTCIceConnectionStateCompleted")
D.ejP=new B.F3(3,"RTCIceConnectionStateConnected")
D.ejQ=new B.F3(4,"RTCIceConnectionStateCount")
D.ejR=new B.F3(5,"RTCIceConnectionStateFailed")
D.ejS=new B.F3(6,"RTCIceConnectionStateDisconnected")
D.aMA=new B.F3(7,"RTCIceConnectionStateClosed")
D.aMB=new B.X7(0,"RTCIceGatheringStateNew")
D.ejT=new B.X7(1,"RTCIceGatheringStateGathering")
D.a6y=new B.X7(2,"RTCIceGatheringStateComplete")
D.a6z=new B.Oq(0,"RTCPeerConnectionStateClosed")
D.aMC=new B.Oq(1,"RTCPeerConnectionStateFailed")
D.aMD=new B.Oq(2,"RTCPeerConnectionStateDisconnected")
D.aME=new B.Oq(3,"RTCPeerConnectionStateNew")
D.aMF=new B.Oq(4,"RTCPeerConnectionStateConnecting")
D.aMG=new B.Oq(5,"RTCPeerConnectionStateConnected")
D.ejU=new B.Or(0,"RTCSignalingStateStable")
D.ejV=new B.Or(1,"RTCSignalingStateHaveLocalOffer")
D.ejW=new B.Or(2,"RTCSignalingStateHaveRemoteOffer")
D.ejX=new B.Or(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ejY=new B.Or(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMH=new B.Or(5,"RTCSignalingStateClosed")
D.eWK=new A.as(160,48)
D.b80=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.eYh=new A.a7(16,16,D.b80,null)
D.fqu=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eZI=new A.b1(D.fqu,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fxR=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eZL=new A.b1(D.fxR,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fGs=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eZS=new A.b1(D.fGs,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fq4=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f_h=new A.b1(D.fq4,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fBP=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPq=new A.b1(D.fBP,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fDd=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_L=new A.b1(D.fDd,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fHR=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f0_=new A.b1(D.fHR,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFS=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f04=new A.b1(D.fFS,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fH4=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f0R=new A.b1(D.fH4,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.foI=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f1n=new A.b1(D.foI,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fzF=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f1I=new A.b1(D.fzF,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fsH=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f2d=new A.b1(D.fsH,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fHX=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f2h=new A.b1(D.fHX,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.foY=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f2n=new A.b1(D.foY,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fnG=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f2C=new A.b1(D.fnG,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fkD=new A.y("NGMY DOC SHARE",null,C.aQK,null,null,null,null,null,null,null,null,null)
D.flV=new A.y("Show this to sender",null,C.kk,null,null,null,null,null,null,null,null,null)
D.fmU=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fru=new A.y("Organization settings",null,C.cD,null,null,null,null,null,null,null,null,null)
D.frS=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fsR=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.ftk=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fw6=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fyS=new A.y("Send to their Doc Share",null,C.nE,null,null,null,null,null,null,null,null,null)
D.fza=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fzt=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fA1=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fA7=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fAu=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fDI=new A.y("Share files & videos\nwith a scan.",null,C.aQL,null,null,null,null,null,null,null,null,null)
D.fE0=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h5Q=new B.Z0(null)
D.a9Q=new B.acb(0,"docShare")
D.a9R=new B.acb(1,"gate")
D.UQ=new B.acb(2,"gateNoIndividual")})();(function staticFields(){$.aNz=null
$.ff9=function(){var x=y.N
return A.U(x,x)}()
$.Gg=A.U(y.N,y.D)
$.agg=A.U(y.N,A.ax("lA"))
$.QR=A.U(y.N,y.D)
$.ffH=A.U(y.N,A.ax("abT"))
$.c9n=A.U(y.S,A.ax("bvi"))
$.hds=1
$.i0c=null
$.i0b=null
$.hSE=null
$.h2m=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ij9","huO",()=>new B.ckt())
x($,"ih4","h68",()=>C.a.t(A.bw(A.bw(A.bw(A.GR(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["pUPu5CCU7Pb0qDTCzZWCvZIO8EM="]=a.current})($__dart_deferred_initializers__);