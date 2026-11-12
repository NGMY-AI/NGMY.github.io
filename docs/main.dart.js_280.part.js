((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crm:function crm(){},
hXq(d){var x=null,w=new B.b5N(d,D.exa,new A.pJ(x,x,y.c6),new A.pJ(x,x,y.B))
w.bBP(d)
return w},
b5N:function b5N(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crh:function crh(d){this.a=d},
cri:function cri(d){this.a=d},
crj:function crj(d){this.a=d},
crg:function crg(d){this.a=d},
crk:function crk(d){this.a=d},
hXr(d,e){var x=y.N
x=new B.b5O(d,e,A.T(x,y.e),A.T(x,y.z))
x.bBQ(d,e)
return x},
b5O:function b5O(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crn:function crn(d){this.a=d},
cro:function cro(d){this.a=d},
crp:function crp(d){this.a=d},
crq:function crq(d){this.a=d},
crr:function crr(d){this.a=d},
crs:function crs(d){this.a=d},
crt:function crt(d){this.a=d},
cru:function cru(d){this.a=d},
hbK(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zv.Mv(x,"ngmy_doc_share_v1",new B.fv7(),1)},
i36(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wI(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
S2(d,e){return B.iiM(d,e)},
iiM(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPb
x=7
return A.b(o==null?$.aPb=B.hbK():o,$async$S2)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.mY(s,"blobs","readwrite")
C.j6.mx(J.mX(q,"blobs"),r,d)
x=8
return A.b(J.pS(q),$async$S2)
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
return A.i($async$S2,w)},
S1(d){return B.iiL(d)},
iiL(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPb
x=7
return A.b(o==null?$.aPb=B.hbK():o,$async$S1)
case 7:s=f
r=J.mY(s,"blobs","readonly")
x=8
return A.b(C.j6.A3(J.mX(r,"blobs"),d),$async$S1)
case 8:q=f
x=9
return A.b(J.pS(r),$async$S1)
case 9:o=B.i36(q)
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
return A.i($async$S1,w)},
ahO(d){return B.iiK(d)},
iiK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPb
x=7
return A.b(p==null?$.aPb=B.hbK():p,$async$ahO)
case 7:s=f
r=J.mY(s,"blobs","readwrite")
C.j6.Gh(J.mX(r,"blobs"),d)
x=8
return A.b(J.pS(r),$async$ahO)
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
return A.i($async$ahO,w)},
fv7:function fv7(){},
i5z(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqy(w,v))}return u},
hCA(d,e){var x,w={},v=A.aXR("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fU8(w,v,e)
C.wN.z4(v,"change",new B.fUa(w,v,!1))
C.wN.z4(v,"cancel",new B.fU9(w))
$.eV.mC()
v.click()
A.bQ(C.akA,new B.fU7(w),y.H)},
fU8:function fU8(d,e,f){this.a=d
this.b=e
this.c=f},
fUa:function fUa(d,e,f){this.a=d
this.b=e
this.c=f},
fU9:function fU9(d){this.a=d},
fU7:function fU7(d){this.a=d},
DA(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DA=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUs()?3:4
break
case 3:x=5
return A.b(B.hxr(e,d,s,!0,!1,f,g,h,!1,i),$async$DA)
case 5:x=1
break
case 4:x=6
return A.b(B.RG(d,s,f,g,h,i),$async$DA)
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
return A.b(B.Jd(s,d),$async$DA)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fqC(s,d),$async$DA)
case 14:x=12
return A.b(r.hxr(q,p,o,n,m,l,k,j,a1,i),$async$DA)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fUn(s,i,d,f,g,h),!1,null,y.H)),$async$DA)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fUo(s,i,d,f,g,h),!1,null,y.H)),$async$DA)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DA,w)},
RG(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RG=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0x(e),$async$RG)
case 3:u=k
x=4
return A.b(B.aqi(d,e,!1),$async$RG)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jd(e,d),$async$RG)
case 7:if(k){v=D.acd
x=1
break}x=8
return A.b(B.VV(e),$async$RG)
case 8:v=t?D.Wp:D.ace
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0v(d,e)){v=D.acd
x=1
break}x=11
return A.b(B.VV(e),$async$RG)
case 11:v=t?D.Wp:D.ace
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h6H(d,e)){v=D.acd
x=1
break}x=14
return A.b(B.VV(e),$async$RG)
case 14:v=D.Wp
x=1
break
case 13:v=t?D.Wp:D.ace
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RG,w)},
fqC(d,e){var x=0,w=A.j(y.y),v
var $async$fqC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0v(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0x(d),$async$fqC)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqC,w)},
hxr(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fxH(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hsq(d,e,f,g,h,i,j){return new B.a_6(e,j,d,g,h,i,f,null)},
fzA(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fzA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fzD(A.R(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fzA)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzA,w)},
fA4(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fA4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
r=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fA6(A.R(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fA4)
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
return A.i($async$fA4,w)},
hbV(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fMF(d,e){var x=0,w=A.j(y.H),v
var $async$fMF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.VV(e),$async$fMF)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fMF,w)},
fUn:function fUn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUo:function fUo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ad2:function ad2(d,e){this.a=d
this.b=e},
fxH:function fxH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_6:function a_6(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAI:function aAI(){this.c=this.a=this.d=null},
dbK:function dbK(d,e){this.a=d
this.b=e},
dbH:function dbH(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbM:function dbM(){},
dbL:function dbL(d){this.a=d},
adv:function adv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDl:function aDl(d,e){this.a=d
this.b=e},
aGt:function aGt(d,e,f){this.a=d
this.b=e
this.c=f},
fzD:function fzD(d,e,f){this.a=d
this.b=e
this.c=f},
fzB:function fzB(d){this.a=d},
fzC:function fzC(d,e,f){this.a=d
this.b=e
this.c=f},
fA6:function fA6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fA5:function fA5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cda(d,e,f,g,h){return B.hSi(d,e,f,g,h)},
hSi(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cda=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iK(r.dL(d,new B.cdb(s,e,h,g,f,q),y.g),y.l),$async$cda)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cda,w)},
b0s(d,e,f,g,h){return B.hSj(d,e,f,g,h)},
hSj(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0s=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avR("GET",d)
o=A.h35()
if(o==null)o=new A.Mu(A.a([],y.W))
x=7
return A.b(o.f8(0,s).df(0,C.Gy),$async$b0s)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CO(),$async$b0s)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cd(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0s,w)},
b0r(d){return B.hSg(d)},
hSg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.ok),$async$b0r)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.m7(A.m5(p.e)).cG(0,p.w),null)
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
return A.i($async$b0r,w)},
cd9(d){return B.hSh(d)},
hSh(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cd9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.qt),$async$cd9)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m5(q.e)).cG(0,q.w)
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
return A.i($async$cd9,w)},
cdb:function cdb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jz:function jz(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jb(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hSo(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Jb(C.a.b2(t,u.length))}return null},
hSp(d){var x=B.Jb(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hSk(){var x,w=$.oo(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7E(d){return B.hSl(d)},
hSl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bK),$async$a7E)
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
return A.i($async$a7E,w)},
a7F(d,e){return B.hSm(d,e)},
hSm(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7F=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cK,null),$async$a7F)
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
return A.i($async$a7F,w)},
Cc(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cc)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jb(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7G(r),$async$Cc)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7E("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cc)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jb(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aA("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cc)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hSk()
x=14
return A.b(B.a7G(m),$async$Cc)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().ag()
x=15
return A.b(B.a7F("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cc)
case 15:k=f
x=16
return A.b(B.a7F("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cc)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aA("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cc)
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
return A.i($async$Cc,w)},
a7G(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jb(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7E("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7G)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7G,w)},
a7H(d,e,f,g){return B.hSq(d,e,f,g)},
hSq(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7H=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gav(d)){v=!1
x=1
break}r=B.Jb(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7G(r),$async$a7H)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.cdh())>1048576||g.aW(d,new B.cdi())){v=B.F9(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7S("myCode",d,a0),$async$a7H)
case 4:u=a3
try{t=C.Y.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cr(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.F9(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0A(u,g.gI(d),a0),$async$a7H)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oo().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dL(d,new B.cdj(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0t(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a7H)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7H,w)},
F9(d,e,f,g,h){return B.hSn(d,e,f,g,h)},
hSn(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$F9=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$F9)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cI(a6,0,new B.cdd())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oo().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cM.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jf(a9,q)
a0=new A.L3(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$F9)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pg(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abh(a1.a,a4,"media",a1.d,a2).xG(m,n,new A.Ep(!0,q.c)),$async$F9)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$F9)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRK(r),$async$F9)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dL(a6,new B.cde(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0t(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$F9)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRK(r),$async$F9)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$F9,w)},
b0t(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7E(t),$async$b0t)
case 3:s=g
r=y.aL.a(J.t(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cdc(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7F(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0t,w)},
O7(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$O7=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7E("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$O7)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cr(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a3(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b0u(k,a0),$async$O7)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0z(h),$async$O7)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W1(g,a0),$async$O7)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdf(),q),n)
d=A.C(new A.Y(r,new B.cdg(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7F("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$O7)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$O7,w)},
b0u(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cr(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.j.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.imC(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dy(l,m,"Received via My Code",t,e,i),$async$b0u)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRK(s),$async$b0u)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0u,w)},
cdh:function cdh(){},
cdi:function cdi(){},
cdj:function cdj(){},
cdd:function cdd(){},
cde:function cde(){},
cdc:function cdc(){},
cdf:function cdf(){},
cdg:function cdg(){},
fUk(d,e){var x=0,w=A.j(y.H)
var $async$fUk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fUl(e),!1,null,y.H)),$async$fUk)
case 2:return A.h(null,w)}})
return A.i($async$fUk,w)},
bFw(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFw=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fUm(g,e,f),!1,null,y.y)),$async$bFw)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFw,w)},
fUl:function fUl(d){this.a=d},
fUm:function fUm(d,e,f){this.a=d
this.b=e
this.c=f},
VS:function VS(d,e){this.c=d
this.a=e},
aEH:function aEH(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dXZ:function dXZ(d,e){this.a=d
this.b=e},
VW:function VW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEK:function aEK(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZ7:function dZ7(d){this.a=d},
dZ8:function dZ8(d){this.a=d},
dZ9:function dZ9(d){this.a=d},
dZ6:function dZ6(d,e){this.a=d
this.b=e},
dZa:function dZa(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d,e){this.a=d
this.b=e},
dZd:function dZd(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZf:function dZf(d){this.a=d},
dZi:function dZi(){},
dZg:function dZg(d){this.a=d},
dZh:function dZh(d,e){this.a=d
this.b=e},
bkH:function bkH(){},
VT:function VT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEI:function aEI(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dY_:function dY_(d){this.a=d},
dY0:function dY0(d){this.a=d},
h6I(d){var x=d.i4
if(x>=0)return C.o.M(x)
return 10},
hSs(d){var x=d.l3
if(x>=0)return x
return 4.99},
hSr(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdl(),w,w)
return w},
hnx(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdm(),w,w)
return w},
b0x(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0x)
case 7:s=f
r=A.w(p)
r=A.aT(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b0x,w)},
a7J(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7J)
case 4:x=3
return A.b(g.aA("String","ngmy_doc_share_path_"+u,e),$async$a7J)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
VV(d){var x=0,w=A.j(y.H),v,u
var $async$VV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$VV)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$VV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$VV,w)},
h6H(d,e){var x,w,v
if(B.hSs(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hSr(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0v(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hnx(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hny(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hnx(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).ab().ag())
d.l4=w},
aqj(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqj)
case 7:s=f
r=A.w(p)
r=A.eo(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqj,w)},
aqk(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqj(d),$async$aqk)
case 3:u=f
x=5
return A.b(A.az(),$async$aqk)
case 5:x=4
return A.b(f.aA("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqk,w)},
aqi(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h6I(d)
if(u<=0){v=!1
x=1
break}if(B.h6H(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqj(e),$async$aqi)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqi,w)},
b0w(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jd(e,d),$async$b0w)
case 3:if(g){v=-1
x=1
break}u=B.h6I(d)
if(u<=0){v=-1
x=1
break}if(B.h6H(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqj(e),$async$b0w)
case 4:v=t.F(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0w,w)},
cdo(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jd(e,d),$async$cdo)
case 3:if(h){v=!1
x=1
break}v=B.aqi(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdo,w)},
cdn(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdn=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdo(d,u,i.gUs()),$async$cdn)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdn,w)},
a7I(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7I=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUs()){v=!0
x=1
break}if(B.b0v(d,u)){v=!0
x=1
break}x=5
return A.b(A.lw(u,C.TJ),$async$a7I)
case 5:x=k?3:4
break
case 3:B.hny(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7I)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.la(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TJ,"Doc Share for Organizations"),$async$a7I)
case 7:if(!k){v=!1
x=1
break}B.hny(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7I)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7I,w)},
cdl:function cdl(){},
cdm:function cdm(){},
fVd(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fVd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fVd)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fn5.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fn5.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fVd,w)},
ioX(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fn5.bt($.fn5,new B.fVf(d))},
fVf:function fVf(d){this.a=d},
foE(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$foE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.n_(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jl,null,y.H),$async$foE)
case 3:C.B3.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foE,w)},
agD(d,e,f){var x=0,w=A.j(y.H),v
var $async$agD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fnI.n(0,d,new B.acK(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$agD)
case 3:x=2
return A.b(h.aA("String",d+"_manifest",C.Y.az(A.H(["parts",e,"size",f],v,y.C),null)),$async$agD)
case 2:return A.h(null,w)}})
return A.i($async$agD,w)},
agx(d){return B.i7x(d)},
i7x(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fnI.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agx)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b7(s,new B.fsb(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.acK(r)
$.fnI.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agx,w)},
Rw(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.GV.n(0,d,u)
x=3
return A.b(B.S2(d,u),$async$Rw)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rw,w)},
aPy(d){return B.i7v(d)},
i7v(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GV.h(0,d)
if(n!=null&&!C.aH.gav(n)){v=n
x=1
break}x=3
return A.b(B.S1(d),$async$aPy)
case 3:p=f
if(p!=null&&!C.aH.gav(p)){$.GV.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPy)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aM(r)
x=!J.cr(q)?9:10
break
case 9:B.Rw(d,q)
x=11
return A.b(J.hk(s,d),$async$aPy)
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
return A.i($async$aPy,w)},
i3z(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wI(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2C(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bD,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.fxT(r,t),!1,s)
A.fy(r,"error",new B.fxU(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iE(0,C.NJ,new B.fxV())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2C,w)},
aPS(d,e,f){return B.i9T(d,e,f)},
i9T(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPS=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2C(i),$async$aPS)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S2(o,p),$async$aPS)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agD(k,j,s),$async$aPS)
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
return A.i($async$aPS,w)},
aPR(d,e,f){return B.i9S(d,e,f)},
i9S(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPR=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPS(d,e,f),$async$aPR)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2C(f),$async$aPR)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GV.n(0,s,r)
$.RN.n(0,s,r)
x=11
return A.b(B.Rw(s,r),$async$aPR)
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
return A.i($async$aPR,w)},
Cd(d,e,f,g,h,i){return B.hSB(d,e,f,g,h,i)},
hSB(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cd=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cM.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jz(p,q,o,n,new A.V(Date.now(),0,!1).ab().ag(),a0,f,B.b0D(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rw(s,d),$async$Cd)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cd)
case 10:r=a2
x=11
return A.b(r.aA("String",s,C.cO.gcu().aM(d)),$async$Cd)
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
return A.b(B.B9(e),$async$Cd)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.H5(e,j),$async$Cd)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cd,w)},
VX(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VX=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.B9(d),$async$VX)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cM.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hnA(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().ag()
i=new B.jz(m,n,k,l,j,"From folder",null,B.b0D(),null)
$.ah6.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2C(o),$async$VX)
case 7:g=a1
x=g!=null&&!C.aH.gav(g)?8:10
break
case 8:$.GV.n(0,h,g)
$.RN.n(0,h,g)
B.Rw(h,g)
x=9
break
case 10:x=11
return A.b(B.aPR(d,m,o),$async$VX)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.H5(d,t),$async$VX)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VX,w)},
h6M(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h6M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hnA(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Je(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gav(s)){v=B.Cd(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6M,w)},
Je(d,e,f,g,h,i){return B.hSA(d,e,f,g,h,i)},
hSA(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Je=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cM.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L3(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Je)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.h7(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.Sz(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S2(k,l),$async$Je)
case 11:J.c6(q,k);++p
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
return A.b(j.a1(0),$async$Je)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S2(k,new Uint8Array(A.cb(n))),$async$Je)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agD(r,q,g),$async$Je)
case 16:f=new B.jz(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().ag(),a2,null,B.b0D(),null)
x=17
return A.b(B.B9(d),$async$Je)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.H5(d,e),$async$Je)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Je,w)},
VZ(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$VZ=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ah6.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2C(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agx(s),$async$VZ)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S1(u[o]),$async$VZ)
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
v=A.wI(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RN.h(0,s)
if(i==null)i=$.GV.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rN(d,e),$async$VZ)
case 12:i=a0
if(i!=null&&!C.aH.gav(i))$.RN.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wI(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VZ,w)},
hnA(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rN(d,e){return B.hSC(d,e)},
hSC(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RN.h(0,f)
if(e==null)e=$.GV.h(0,f)
if(e!=null&&!C.aH.gav(e)){v=e
x=1
break}s=$.ah6.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2C(s),$async$rN)
case 9:r=a3
if(r!=null&&!C.aH.gav(r)){$.GV.n(0,f,r)
$.RN.n(0,f,r)
B.Rw(f,r)
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
return A.b(B.agx(f),$async$rN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azv(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S1(g[l]),$async$rN)
case 16:k=a3
if(k!=null&&!C.aH.gav(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apI()
if(!C.aH.gav(r)){$.GV.n(0,f,r)
$.RN.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPy(f),$async$rN)
case 17:j=a3
if(j!=null&&!C.aH.gav(j)){$.RN.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.VZ(a0,a1,0,g),$async$rN)
case 20:i=a3
if(i!=null&&!C.aH.gav(i)){h=new Uint8Array(A.cb(i))
$.GV.n(0,f,h)
$.RN.n(0,f,h)
B.Rw(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rN,w)},
hSF(d){var x,w,v=$.ah6.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hSG(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hSD(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqq(d,e,f,g,h){return B.hSE(d,e,f,g,h)},
hSE(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqq=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ah6.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2C(s),$async$aqq)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rN(g,e),$async$aqq)
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
return A.b(n.iz(d).xG(h,r,new A.Ep(!0,e.c)),$async$aqq)
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
return A.i($async$aqq,w)},
hnC(d,e,f,g,h){var x,w,v,u,t=$.hnB
$.hnB=t+1
x=Date.now()
w=""+1000*x+"_"+C.cM.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdz.n(0,t,new B.bxv(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azv(u)))
return t},
h6N(d){var x=0,w=A.j(y.H)
var $async$h6N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6N,w)},
Jf(d,e){var $async$Jf=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ah6.h(0,h)
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
return A.qo(B.VZ(d,e,p,o<q?o:q),$async$Jf,w)
case 8:n=a1
x=n!=null&&!C.aH.gav(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qo(A.Gs(n),$async$Jf,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qo(B.agx("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jf,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qo(B.S1(h[l]),$async$Jf,w)
case 18:k=a1
x=k!=null&&!C.aH.gav(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qo(A.Gs(k),$async$Jf,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qo(B.rN(d,e),$async$Jf,w)
case 22:j=a1
x=j!=null&&!C.aH.gav(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qo(A.Gs(A.wI(j,p,o<i?o:i)),$async$Jf,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qo(null,0,w)
case 2:return A.qo(t.at(-1),1,w)}})
var x=0,w=A.hwl($async$Jf,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hy7(w)},
b0F(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdz.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5x(),$async$b0F)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0F,w)},
VY(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$VY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdz.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5x(),$async$VY)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agD(r.c,u,r.z),$async$VY)
case 4:t=new B.jz(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b0D(),null)
u=r.a
x=5
return A.b(B.B9(u),$async$VY)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.H5(u,s),$async$VY)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VY,w)},
a7P(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdz.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahO(u[s]),$async$a7P)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a7P,w)},
cdB(d,e,f){var x=0,w=A.j(y.H)
var $async$cdB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCw(d,e,f),$async$cdB)
case 2:return A.h(null,w)}})
return A.i($async$cdB,w)},
cdC(d,e,f){var x=0,w=A.j(y.H)
var $async$cdC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCx(d,e,f),$async$cdC)
case 2:return A.h(null,w)}})
return A.i($async$cdC,w)},
Fa(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.B9(d),$async$Fa)
case 2:p=g
J.nM(p,new B.cdA(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GV.W(0,v)
$.ah6.W(0,e)
x=3
return A.b(B.agx(v),$async$Fa)
case 3:u=g
$.fnI.W(0,v)
x=4
return A.b(A.az(),$async$Fa)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fa)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fa)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahO(s[q]),$async$Fa)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahO(v),$async$Fa)
case 13:x=14
return A.b(B.H5(d,p),$async$Fa)
case 14:return A.h(null,w)}})
return A.i($async$Fa,w)},
b0E(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rN(d,e),$async$b0E)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.foE(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0E,w)},
B9(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$B9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$B9)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fxW(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$B9,w)},
H5(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$H5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$H5)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fC1(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aA("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$H5)
case 3:return A.h(null,w)}})
return A.i($async$H5,w)},
bCw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B9(d),$async$bCw)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fw6(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFK(f))
x=4
return A.b(B.H5(d,u),$async$bCw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCw,w)},
bCx(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B9(d),$async$bCx)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fw7(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cNW(f))
x=4
return A.b(B.H5(d,u),$async$bCx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCx,w)},
acK:function acK(d){this.a=d},
fsb:function fsb(){},
fxT:function fxT(d,e){this.a=d
this.b=e},
fxU:function fxU(d){this.a=d},
fxV:function fxV(){},
cdA:function cdA(d){this.a=d},
bxv:function bxv(d,e,f,g,h,i,j,k,l){var _=this
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
fxW:function fxW(){},
fC1:function fC1(){},
fw6:function fw6(d){this.a=d},
fw7:function fw7(d){this.a=d},
a7Q(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aW(d,new B.cdF())?3:4
break
case 3:x=5
return A.b(B.b0G(d,e),$async$a7Q)
case 5:u=g
if(u!=null){t=u.c
B.O9(d,u.b,e,t)}v=u
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
return A.b(B.b0B(s),$async$a7Q)
case 10:case 9:if(g){v=new A.QS(1,D.Tm,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W_(d,e),$async$a7Q)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W4(!0,!0,d,e),$async$a7Q)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.O9(d,D.Aa,e,t)
v=new A.QS(p,D.Aa,t)
x=1
break}v=B.cdE(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Q,w)},
W_(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7S(null,d,e),$async$W_)
case 3:p=g
try{u=C.Y.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cr(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0A(p,d.length,e),$async$W_)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdC(e,C.d.gH(d).a,r.b),$async$W_)
case 7:case 6:q=r.a
x=8
return A.b(B.O9(d,D.Tm,e,q),$async$W_)
case 8:v=new A.QS(d.length,D.Tm,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W_,w)},
W0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n1)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7R(d,e),$async$W0)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdx(s,d,e,t),$async$W0)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0B(t),$async$W0)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rN(e,d),$async$W0)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W_(A.a([d],y.r),e),$async$W0)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
W2(){var x=0,w=A.j(y.H)
var $async$W2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h6G(),$async$W2)
case 2:x=3
return A.b(B.aS6(),$async$W2)
case 3:return A.h(null,w)}})
return A.i($async$W2,w)},
a7R(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0D()
x=3
return A.b(B.cdB(e,d.a,u),$async$a7R)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7R,w)},
O9(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$O9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tm&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7R(p,f),$async$O9)
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
return A.b(B.cdw(o,p,u,f),$async$O9)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdx(o,p,f,t),$async$O9)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdv(o,u,p,f),$async$O9)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$O9,w)},
b0G(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdD(e,d),$async$b0G)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W4(!1,!0,d,e),$async$b0G)
case 4:u=g
if(u!=null){t=u.b
v=new A.QS(u.a,D.Aa,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0G,w)},
cdD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.VZ(d,s,0,1),$async$cdD)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.J)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdD,w)},
cdE(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7S(null,d,e),$async$cdE)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hnz(u)
if(t.length>800){v=null
x=1
break}v=new A.QS(d.length,D.dNE,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdE,w)},
aqr(d,e,f){return B.hSJ(d,e,f)},
hSJ(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqr=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nl(g,1)
x=B.h6L(g)?3:4
break
case 3:x=5
return A.b(B.cdy(g),$async$aqr)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nl(g,13))
try{k=B.Fb(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nl(g,13))
u=9
x=12
return A.b(B.b0z(q),$async$aqr)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W1(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h6K(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W1(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Jg(C.a.i(J.nl(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Jg(C.a.i(J.nl(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Jg(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W1(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqr,w)},
Jg(d,e,f){return B.hSH(d,e,f)},
hSH(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jg=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0r(r),$async$Jg)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0r(A.cF(s,0,null)),$async$Jg)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cda(o,r,a1,n,a2),$async$Jg)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cd9(q),$async$Jg)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W1(l,a2),$async$Jg)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cr(m)?null:m
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
return A.i($async$Jg,w)},
a7S(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rN(f,r),$async$a7S)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cO.gcu().aM(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
W1(d,e){return B.hSI(d,e)},
hSI(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W1=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Y.aQ(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.t(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.t(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.t(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.t(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aU(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cG.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cd(i,a3,d,k,l,o),$async$W1)
case 9:h=a5
if(h!=null)J.c6(n,h)
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
return A.i($async$W1,w)},
O8:function O8(d,e){this.a=d
this.b=e},
cdF:function cdF(){},
a2b(d){var x=A.R(d).ax.a===C.J,w=x?D.ahO:D.afl,v=x?D.ajz:C.c,u=x?C.aQ:C.Q,t=x?C.bM:C.am,s=x?D.agM:C.aO
return new A.aHI([w,s,v,u,t,x?C.fn:C.bQ])},
hDr(d,e){var x=e?C.w.j(0.72):C.aT
return A.cf(null,x,!0,null,new B.fZm(e),d,null,!0,!0,y.N)},
cdk(d,e,f,g,h,i,j,k,l){return new B.VU(e,l,d,f,k,j,g,h,i,null)},
a_8(d,e,f,g,h,i,j){return new B.bff(g,h,j,e,i,d,f,null)},
fZm:function fZm(d){this.a=d},
a_5:function a_5(d,e){this.c=d
this.a=e},
aAH:function aAH(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbG:function dbG(d){this.a=d},
dbE:function dbE(d){this.a=d},
dbF:function dbF(d){this.a=d},
bx7:function bx7(){},
VU:function VU(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEJ:function aEJ(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZ5:function dZ5(d){this.a=d},
dYt:function dYt(d,e){this.a=d
this.b=e},
dYu:function dYu(d,e){this.a=d
this.b=e},
dY2:function dY2(d,e,f){this.a=d
this.b=e
this.c=f},
dY1:function dY1(d){this.a=d},
dY3:function dY3(d,e){this.a=d
this.b=e},
dY8:function dY8(d,e,f){this.a=d
this.b=e
this.c=f},
dY7:function dY7(d){this.a=d},
dYU:function dYU(d,e){this.a=d
this.b=e},
dYV:function dYV(d){this.a=d},
dYq:function dYq(d,e,f){this.a=d
this.b=e
this.c=f},
dYn:function dYn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dY6:function dY6(d){this.a=d},
dYy:function dYy(d){this.a=d},
dYx:function dYx(){},
dYc:function dYc(d){this.a=d},
dYR:function dYR(d,e){this.a=d
this.b=e},
dYS:function dYS(d,e){this.a=d
this.b=e},
dYT:function dYT(d,e){this.a=d
this.b=e},
dYo:function dYo(d,e){this.a=d
this.b=e},
dYp:function dYp(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYG:function dYG(d){this.a=d},
dYF:function dYF(d){this.a=d},
dYH:function dYH(){},
dYI:function dYI(){},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYL:function dYL(){},
dYM:function dYM(d){this.a=d},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYz:function dYz(d){this.a=d},
dYA:function dYA(d){this.a=d},
dYB:function dYB(d){this.a=d},
dYC:function dYC(d){this.a=d},
dYD:function dYD(d){this.a=d},
dY9:function dY9(){},
dYa:function dYa(d){this.a=d},
dYb:function dYb(d,e){this.a=d
this.b=e},
dY5:function dY5(d,e){this.a=d
this.b=e},
dY4:function dY4(d,e,f){this.a=d
this.b=e
this.c=f},
dYr:function dYr(d){this.a=d},
dYs:function dYs(d,e,f){this.a=d
this.b=e
this.c=f},
dYl:function dYl(d,e){this.a=d
this.b=e},
dYh:function dYh(d){this.a=d},
dYe:function dYe(d,e,f){this.a=d
this.b=e
this.c=f},
dYi:function dYi(d){this.a=d},
dYj:function dYj(d){this.a=d},
dYk:function dYk(){},
dYm:function dYm(d,e){this.a=d
this.b=e},
dYf:function dYf(d){this.a=d},
dYd:function dYd(d,e,f){this.a=d
this.b=e
this.c=f},
dYg:function dYg(){},
dYw:function dYw(d){this.a=d},
dYv:function dYv(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
dYN:function dYN(d){this.a=d},
dYO:function dYO(d,e){this.a=d
this.b=e},
dYP:function dYP(d){this.a=d},
dZ2:function dZ2(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dZ1:function dZ1(d){this.a=d},
dZ3:function dZ3(){},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYY:function dYY(d,e,f){this.a=d
this.b=e
this.c=f},
dYW:function dYW(d,e,f){this.a=d
this.b=e
this.c=f},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
aAE:function aAE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfe:function bfe(d,e,f){this.c=d
this.d=e
this.a=f},
dbC:function dbC(){},
dbD:function dbD(){},
ad3:function ad3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dc_:function dc_(){},
dbZ:function dbZ(d){this.a=d},
a_7:function a_7(d,e,f){this.c=d
this.d=e
this.a=f},
aAJ:function aAJ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dbW:function dbW(d){this.a=d},
dbX:function dbX(d,e,f){this.a=d
this.b=e
this.c=f},
dbY:function dbY(d,e){this.a=d
this.b=e},
dbU:function dbU(d,e){this.a=d
this.b=e},
dbS:function dbS(d){this.a=d},
dbQ:function dbQ(d){this.a=d},
dbN:function dbN(d){this.a=d},
dbT:function dbT(d){this.a=d},
dbP:function dbP(d){this.a=d},
dbV:function dbV(d){this.a=d},
dbR:function dbR(d){this.a=d},
dbO:function dbO(d){this.a=d},
a_4:function a_4(d,e,f){this.c=d
this.d=e
this.a=f},
aAG:function aAG(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbz:function dbz(d){this.a=d},
dby:function dby(d,e){this.a=d
this.b=e},
dbA:function dbA(d){this.a=d},
dbx:function dbx(d,e){this.a=d
this.b=e},
dbB:function dbB(d){this.a=d},
dbw:function dbw(d,e){this.a=d
this.b=e},
dbs:function dbs(d){this.a=d},
dbt:function dbt(d){this.a=d},
dbu:function dbu(d,e){this.a=d
this.b=e},
dbv:function dbv(d){this.a=d},
Qr:function Qr(d,e,f){this.c=d
this.d=e
this.a=f},
aAM:function aAM(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcc:function dcc(d){this.a=d},
dcd:function dcd(d){this.a=d},
dce:function dce(d){this.a=d},
dcf:function dcf(d){this.a=d},
dcg:function dcg(d,e){this.a=d
this.b=e},
dch:function dch(d){this.a=d},
dcj:function dcj(d){this.a=d},
dci:function dci(d){this.a=d},
a_9:function a_9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAK:function aAK(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dc8:function dc8(d,e){this.a=d
this.b=e},
dc9:function dc9(d,e){this.a=d
this.b=e},
dc0:function dc0(d,e,f){this.a=d
this.b=e
this.c=f},
dc1:function dc1(d){this.a=d},
dc2:function dc2(){},
dc7:function dc7(){},
dc3:function dc3(d,e){this.a=d
this.b=e},
dc4:function dc4(d,e){this.a=d
this.b=e},
dc5:function dc5(d,e){this.a=d
this.b=e},
dc6:function dc6(d,e){this.a=d
this.b=e},
ad1:function ad1(d,e){this.c=d
this.a=e},
dbr:function dbr(d){this.a=d},
a_3:function a_3(d){this.a=d},
aAF:function aAF(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_a:function a_a(d,e){this.c=d
this.a=e},
aAL:function aAL(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcb:function dcb(d){this.a=d},
dca:function dca(d){this.a=d},
bff:function bff(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hSK(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
Oa(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oa=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Oa)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$Oa)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Oa,w)},
a7T(d){return B.hSL(d)},
hSL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7T)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cK,null),$async$a7T)
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
return A.i($async$a7T,w)},
W3(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oa(),$async$W3)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dM(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a7T(s),$async$W3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W3,w)},
W4(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W4=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$W4)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cdH(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hSK()
t=A.U(u).k("N<1,a8<m,aE>>")
r=A.C(new A.N(u,new B.cdI(s),t),t.k("ak.E"))
x=6
return A.b(B.Oa(),$async$W4)
case 6:q=i
J.aK(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a7T(q),$async$W4)
case 7:x=8
return A.b(B.a7U(r,u,g,s),$async$W4)
case 8:v=new A.br2(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
aqs(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oa(),$async$aqs)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqs,w)},
cdJ(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oa(),$async$cdJ)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdJ,w)},
a7U(d,e,f,g){return B.hSM(d,e,f,g)},
hSM(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7U=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqq("media",r,new B.cdG(s,e,g),f,q),$async$a7U)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W3(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7U)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W3(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a7U)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W3(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7U)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7U,w)},
Fb(d,e,f){return B.hSN(d,e,f)},
hSN(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fb=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fb)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqs(b3),$async$Fb)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iJ,null,g),$async$Fb)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqs(b3),$async$Fb)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oa(),$async$Fb)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.j.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cr(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
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
b0=A.pg(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abh(a8.a,b0,"media",a8.d,a9).D9(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0s(k,n,o,s,b7),$async$Fb)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
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
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
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
a8=A.pg(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abh(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fb)
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
a0=A.dM(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7T(e),$async$Fb)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fb,w)},
cdH:function cdH(){},
cdI:function cdI(d){this.a=d},
cdG:function cdG(d,e,f){this.a=d
this.b=e
this.c=f},
aS6(){var x=0,w=A.j(y.H),v,u
var $async$aS6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i2R=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aS6)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aS6)
case 3:u=$.hc7
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aS6)
case 4:$.hc7=$.ibI=$.ibJ=null
return A.h(null,w)}})
return A.i($async$aS6,w)},
fBD(d){var x=0,w=A.j(y.H),v,u
var $async$fBD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8R){x=1
break}u=new A.bk($.bD,y.d4)
d.c=new B.fBE(new A.c2(u,y.aY))
x=3
return A.b(u.iE(0,C.i8,new B.fBF()),$async$fBD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fBD,w)},
ibG(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hSu(x):x},
hcb(d){var x=0,w=A.j(y.T),v,u,t
var $async$hcb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqu(u)
x=1
break}v=B.h6K(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hcb,w)},
hca(d){var x=0,w=A.j(y.T),v,u,t
var $async$hca=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqv(u)
x=1
break}v=B.h6K(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hca,w)},
fUX(d){var x=0,w=A.j(y.T),v
var $async$fUX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqv(d),$async$fUX)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUX,w)},
bDp(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hca(d),$async$bDp)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDp,w)},
fps(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fps=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.VY(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cd(d.apI(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fps,w)},
H7(d,e,f){return B.ie_(d,e,f)},
ie_(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H7=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hcb(a1),$async$H7)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aQ(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a7(u)
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
return A.b($.hFq().aG0(D.dBS,null),$async$H7)
case 4:l=d.hc7=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azv(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bD,y.b1)
l.y=new B.fCe(f,k,new B.fCf(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8z(0,new B.Yb(r,"offer")),$async$H7)
case 5:d=l
x=7
return A.b(l.amc(0),$async$H7)
case 7:x=6
return A.b(d.a8r(0,a4),$async$H7)
case 6:x=8
return A.b(B.fBD(l),$async$H7)
case 8:x=9
return A.b(l.aqu(),$async$H7)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ibG(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqw(m,h),$async$H7)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hnz(h)
case 11:v=new A.bqi(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H7,w)},
fBE:function fBE(d){this.a=d},
fBF:function fBF(){},
fCf:function fCf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCe:function fCe(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fCd:function fCd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ig3(d){switch(d){case"new":return D.exb
case"checking":return D.exc
case"connected":return D.exe
case"completed":return D.exd
case"failed":return D.exg
case"disconnected":return D.exh
case"closed":return D.aQr
case"count":return D.exf}return D.aQr},
ig4(d){switch(d){case"new":return D.aQs
case"gathering":return D.exi
case"complete":return D.a8R}return D.aQs},
iqq(d){switch(d){case"stable":return D.exj
case"have-local-offer":return D.exk
case"have-local-pranswer":return D.exm
case"have-remote-offer":return D.exl
case"have-remote-pranswer":return D.exn
case"closed":return D.aQy}return D.aQy},
ioE(d){switch(d){case"new":return D.aQv
case"connecting":return D.aQw
case"connected":return D.aQx
case"closed":return D.a8S
case"disconnected":return D.aQu
case"failed":return D.aQt}return D.a8S},
aad:function aad(d,e){this.a=d
this.b=e},
Pc:function Pc(d,e){this.a=d
this.b=e},
Ya:function Ya(d,e){this.a=d
this.b=e},
Pb:function Pb(d,e){this.a=d
this.b=e},
FF:function FF(d,e){this.a=d
this.b=e},
crl:function crl(){},
h8v(d){var x=new B.FE()
x.a=d
x.b=!0
return x},
FE:function FE(){this.b=this.a=$},
aac:function aac(){},
av1:function av1(){},
Yb:function Yb(d,e){this.a=d
this.b=e},
h6G(){var x=0,w=A.j(y.H)
var $async$h6G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6G,w)},
h6J(d,e,f){var x=0,w=A.j(y.T),v
var $async$h6J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n1))){v=null
x=1
break}v=B.fVd(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6J,w)},
hnz(d){var x,w=F.aeL.a5g(C.dQ.aM(d),null)
if(w.length===0){x=C.dQ.aM(d)
return C.cO.gcu().aM(x)}return C.cO.gcu().aM(w)},
hSt(d){var x,w,v=C.cG.aM(d)
try{x=C.c9.cG(0,F.aeK.bfB(v,!1))
return x}catch(w){x=C.c9.cG(0,v)
return x}},
h6K(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hSt(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cG(0,C.cG.aM(x))
return v}catch(u){return x}}return null},
hSu(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hSv(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0y(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b0y)
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
return A.i($async$b0y,w)},
cdp(d,e){return B.hSw(d,e)},
hSw(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cK,null),$async$cdp)
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
return A.i($async$cdp,w)},
b0B(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0y(d),$async$b0B)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0B,w)},
b0A(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0A=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hSv()
r=C.a.i(f)
t=C.dQ.aM(s)
x=3
return A.b(B.cdp(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cO.gcu().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b0A)
case 3:if(!h){v=null
x=1
break}v=new A.a1b("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0A,w)},
b0z(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0y(o),$async$b0z)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cG(0,C.cG.aM(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0z,w)},
cdq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEm("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cK),$async$cdq)
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
return A.i($async$cdq,w)},
b0C(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jc(),$async$b0C)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0C,w)},
aqn(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqn)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0C(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqn,w)},
aql(d,e){var x=0,w=A.j(y.H)
var $async$aql=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aql)
case 3:x=2
return A.b(g.aA("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aql)
case 2:return A.h(null,w)}})
return A.i($async$aql,w)},
a7L(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7L=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7L)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jc(),$async$a7L)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=5
return A.b(A.a7K(s),$async$a7L)
case 5:x=6
return A.b(B.aql(f,u),$async$a7L)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7L,w)},
a7M(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7M=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7M)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jc(),$async$a7M)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a3(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.an(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aql(g,q),$async$a7M)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7K(u),$async$a7M)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7M,w)},
a7N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7N)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jc(),$async$a7N)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b0v(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7N)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aA("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a7N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
cdr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdr)
case 7:s=f
p=A.w(n)
r=A.aT(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aQ(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a3(q,y.N,y.z)
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
return A.i($async$cdr,w)},
Jd(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdr(d),$async$Jd)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0C(t),$async$Jd)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqm(d),$async$Jd)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0v(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqm(d),$async$Jd)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jd,w)},
aqm(d){var x=0,w=A.j(y.H)
var $async$aqm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqm)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqm)
case 2:return A.h(null,w)}})
return A.i($async$aqm,w)},
b0D(){var x,w=$.oo(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7O(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h6L(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdu(d){return B.hSy(d)},
hSy(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7O(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cdu)
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
return A.i($async$cdu,w)},
aqp(d,e){return B.hSz(d,e)},
hSz(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7O(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cK,null),$async$aqp)
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
return A.i($async$aqp,w)},
cdw(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdw=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7O(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqp(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cdw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdw,w)},
cdv(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7O(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqp(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cdv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdv,w)},
cdx(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdx=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7O(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqp(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdx,w)},
cdy(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h6L(d)){v=null
x=1
break}x=3
return A.b(B.cdu(d),$async$cdy)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a7(u)
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
return A.i($async$cdy,w)},
a7V(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7V=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7V)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7V)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a3(r,y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7V,w)},
aqt(d){return B.hSO(d)},
hSO(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$aqt)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cK,null),$async$aqt)
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
return A.i($async$aqt,w)},
aqu(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqu)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7V(),$async$aqu)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cG(0,C.cG.aM(q))
if(J.j7(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dM(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqt(s),$async$aqu)
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
return A.i($async$aqu,w)},
aqw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aqw)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7V(),$async$aqw)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dM(A.a3(s,r,q),r,q)
r=C.dQ.aM(C.a.i(e))
q.n(0,"answer",C.cO.gcu().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().ag())
t.n(u,p,q)
x=5
return A.b(B.aqt(u),$async$aqw)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqw,w)},
aqv(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aqv)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7V(),$async$aqv)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cG(0,C.cG.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqv,w)},
apq(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ao$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qf)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apq)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.he),$async$apq)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.vQ(o))
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
return A.i($async$apq,w)},
imC(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fTe(d){return B.imE(d)},
imE(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fTe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iz("media").Lj(d,3600),$async$fTe)
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
return A.i($async$fTe,w)},
Dy(d,e,f,g,h,i){var x=null
return B.imB(d,e,f,g,h,i)},
imB(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dy=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hnC(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h6N(r),$async$Dy)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fTe(o),$async$Dy)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7P(r),$async$Dy)
case 14:v=null
x=1
break
case 13:e=$.bD.h(0,C.aTY)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Mu(A.a([],g))
x=15
return A.b(d.f8(0,A.avR("GET",A.cF(n,0,null))).df(0,C.Gy),$async$Dy)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7P(r),$async$Dy)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L3(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dy)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0F(r,k),$async$Dy)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$Dy)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.VY(r)
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
return A.b(B.a7P(r),$async$Dy)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dy,w)},
aRK(d){return B.imD(d)},
imD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iz("media").W(0,d),$async$aRK)
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
return A.i($async$aRK,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[155]
O=c[46]
F=c[261]
I=c[147]
P=c[231]
E=c[223]
G=c[93]
Q=c[193]
R=c[148]
S=c[229]
K=c[266]
L=c[275]
B=a.updateHolder(c[22],B)
D=c[273]
T=c[192]
M=c[213]
U=c[72]
V=c[255]
W=c[78]
X=c[61]
N=c[92]
Y=c[274]
B.crm.prototype={
aG0(d,e){return this.cPr(d,e)},
cPr(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aG0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.T(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dM(r,s,t)
t.v(0,d)
u=new q(A.ke(A.cv(t)))
t=J.k(u)
v=B.hXr(C.cO.gcu().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aG0,w)}}
B.b5N.prototype={
bBP(d){var x=this,w=x.w
w.onclose=A.hq(new B.crh(x))
w.onopen=A.hq(new B.cri(x))
w.onmessage=A.hq(new B.crj(x))
w.onbufferedamountlow=A.hq(new B.crk(x))},
gdd(d){return this.x},
aiq(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FE()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h8v(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiq)
case 8:v=t.h8v(s.aoA(f,0,null))
x=1
break
case 7:case 4:v=B.h8v(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiq,w)}}
B.b5O.prototype={
bBQ(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hq(new B.crn(x)))
w.addEventListener("icecandidate",A.hq(new B.cro(x)))
w.addEventListener("iceconnectionstatechange",A.hq(new B.crp(x)))
w.onicegatheringstatechange=A.hq(new B.crq(x))
w.addEventListener("signalingstatechange",A.hq(new B.crr(x)))
if(!$.hg3())w.addEventListener("connectionstatechange",A.hq(new B.crs(x)))
w.addEventListener("negotiationneeded",A.hq(new B.crt(x)))
w.addEventListener("track",A.hq(new B.cru(x)))},
amc(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ke(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amc)
case 3:t=f
v=new B.Yb(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amc,w)},
a8r(d,e){return this.bqO(0,e)},
bqO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8r)
case 2:return A.h(null,w)}})
return A.i($async$a8r,w)},
a8z(d,e){return this.br8(0,e)},
br8(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8z)
case 2:return A.h(null,w)}})
return A.i($async$a8z,w)},
aqu(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yb(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqu,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.ad2.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_6.prototype={
S(){return new B.aAI()},
gd1(){return this.c}}
B.aAI.prototype={
Y(){this.a3()
this.aeZ()},
aeZ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0w(u.e,u.c),$async$aeZ)
case 2:t=e
if(v.c!=null)v.m(new B.dbK(v,t))
return A.h(null,w)}})
return A.i($async$aeZ,w)},
QS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqi(t.e,t.c,!1),$async$QS)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fi7)
x=1
break}x=4
return A.b(B.a7J(u.a.c,"individual"),$async$QS)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6Q(A.eb(new B.dbH(u),!1,null,y.H)),$async$QS)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QS,w)},
JE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fzA(o),$async$JE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7N(o.e,r,s,q),$async$JE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff8)
x=1
break}x=5
return A.b(B.a7J(u.a.c,"member"),$async$JE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6Q(A.eb(new B.dbJ(u),!1,null,y.H)),$async$JE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JE,w)},
yB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7I(t.e,o,t.f,t.r,t.w,s),$async$yB)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7J(u.a.c,"org_owner"),$async$yB)
case 4:x=5
return A.b(B.aqn(u.a.c),$async$yB)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fA4(o),$async$yB)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7L(s,t,o,q.c),$async$yB)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff5)
x=1
break}x=10
return A.b(B.aqn(u.a.c),$async$yB)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6Q(A.eb(new B.dbI(u),!1,null,y.H)),$async$yB)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yB,w)},
B(d){var x,w,v,u=this,t=null,s=A.R(d).ax.a===C.J,r=s?C.jz:C.qh,q=B.h6I(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h2,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fBW,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h9,t,t,t),C.aC,D.fVL,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c8n,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lV(new B.dbM(),t),C.R,w,C.dV,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.Q,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adv(C.f3,C.aD4,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gciA(),t),C.af],v))
p.push(new B.adv(C.po,C.a4v,"Team Member","Sign in with your organization access code + password",u.gcjr(),t))
p.push(C.af)
p.push(new B.adv(C.apa,C.a68,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gciX(),t))
return A.c5(t,r,A.bm(!0,A.ch(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amf,t,t,C.ai),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adv.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aJ(!1,C.a3,!0,s,A.aO(!1,r,!0,A.eI(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a6,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nT,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.z5,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDl.prototype={}
B.aGt.prototype={}
B.jz.prototype={
mI(d){var x=this.b,w=C.a.p0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gara(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.j.ad(x/1024,1)+" KB"
if(x<1073741824)return C.j.ad(x/1048576,1)+" MB"
return C.j.ad(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.T(y.N,y.z)
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
bf5(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jz(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cNW(d){return this.bf5(null,d)},
aFK(d){return this.bf5(d,null)}}
B.VS.prototype={
S(){return new B.aEH(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEH.prototype={
Y(){this.a3()
this.af_()},
af_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cc(u.a.c),$async$af_)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dXZ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af_,w)},
af0(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$af0)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fj1)
case 1:return A.h(v,w)}})
return A.i($async$af0,w)},
a_r(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_r=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apq(s.d,4),$async$a_r)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tk(r,"ngmy_my_code_"+m+".png"),$async$a_r)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_r,w)},
aiS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaR("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiS,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.J,n=o?C.jz:C.qh,m=o?C.c:C.Q,l=A.eG(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m0
else if(q.e==null)x=A.at(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.R,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4Y,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a6,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.alO,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.ch(A.x(A.a([x,C.n8,w,C.l1,new A.em(A.p(p,A.q7(p,p,!1,B.hSp(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l1,A.A(A.a([A.E(A.es(N.D2,C.VO,q.gcb3(),p),1),C.at,A.E(A.dh(C.zu,C.abb,q.gcb4(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3f,D.fRn,q.gcyf(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.O9,p,p,C.ai)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.VW.prototype={
S(){return new B.aEK(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aEK.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jb(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
a_s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jb(u.d.a.a)
if(t==null){u.m(new B.dZ7(u))
x=1
break}u.m(new B.dZ8(u))
s=u.a
r=s.c
x=3
return A.b(B.a7H(s.d,new B.dZ9(u),t,r),$async$a_s)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZa(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_s,w)},
a2H(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2H=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZb(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rN(r.a.c,q),$async$a2H)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZc(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiy(p,m,l,j,k),$async$a2H)
case 8:o=e
if(r.c!=null)r.m(new B.dZd(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZe(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZf(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2H,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.J,i=j?D.ahO:D.afl,h=j?D.ajz:C.c,g=j?C.aQ:C.Q,f=j?C.bM:C.am,e=j?D.agM:C.aO
i=[i,e,h,g,f,j?C.fn:C.bQ]
x=A.R(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eG(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dx(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dx(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bWI,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ev,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fr,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4Y,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uM(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkH()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.O4,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZg(l),k,!1,k,k,!1,k,!0,k,C.ab,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mu,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.L(i[1],C.r,1)
m=J.M7(l.a.d,4)
m=A.C(new A.N(m,new B.dZh(x,new A.aHI(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.le,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.R,e,C.R,q,C.d6,p,C.R,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eD,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fdD)
else q.push(A.X(C.lN,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cV(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b6,new A.o(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.ch(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bEg,k,k,C.ai),1)
u=l.f?k:l.gcyg()
t=i[3]
s=i[1]
q=A.n(16)
s=A.es(M.a3f,D.fSs,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcb5()
t=A.bn(C.aE,k,k,0,C.c,k,C.nz,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.lz(new B.dZi(),A.x(A.a([e,new A.D(D.bDL,A.x(A.a([s,C.R,i,C.af,A.bH(l.f?C.tt:D.fQI,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cx,C.a_x,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkH.prototype={
oX(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bz,v.length),C.aP)}}
B.VT.prototype={
S(){return new B.aEI()}}
B.aEI.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b5,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b5,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.au,v)},
t(){var x,w=this,v=w.d
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
af1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dY_(r))
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
return A.b(B.a7M(p,m,n,o,C.a.i(l).length===0?null:l),$async$af1)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fiD)
s=[1]
x=4
break}p.L(y.q).f.U(D.fhg)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dY0(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af1,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.J?C.jz:C.qh,q=A.eG(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fJ8,s,s,s,1,s,!0),p=A.p(s,D.bvS,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.I1,C.n),s,s,s,s,C.ab,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c2R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c2M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c31,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcb6()
u=A.bn(C.aE,s,s,s,s,C.h3,s,s,s,s,s,s)
return A.c5(q,r,A.ch(A.x(A.a([p,C.d6,o,C.af,x,C.af,w,C.n8,A.bH(t.r?C.tt:C.aWL,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ab,s,s,C.ai),s,!1,!1,s,s)}}
B.acK.prototype={}
B.bxv.prototype={
a5x(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apI()))
x=3
return A.b(B.S2(t,s),$async$a5x)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5x,w)},
gd1(){return this.a}}
B.O8.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_5.prototype={
S(){return new B.aAH(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aAH.prototype={
Y(){this.a3()
$.aW.x1$.push(new B.dbG(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
cbc(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2b(d),u=x.a.c,t=u?C.iA:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jz:v.a[0],p=A.n(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h2,32)],n),l=A.p(w,T.arP,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asC,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uM(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bx7()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.GL,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b4J),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbE(x),w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mu,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nV,new B.dbF(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.n(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cL,12)],n)
g=y.p
return A.eR(w,C.L,new A.cR(Q.LK,A.c3(new A.D(C.yJ,A.x(A.a([l,C.aR,k,C.R,j,C.dV,i,C.dV,A.A(A.a([f,C.at,A.E(A.c3(A.aJ(!1,C.a3,!0,w,A.aO(!1,A.n(14),!0,D.eqz,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbb(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,L.Q2,C.n),C.bi),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.O,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bi),w),w,w,w,C.Oc,C.da,w,w,w)}}
B.bx7.prototype={
oX(d,e){return e.am6(e.a.toUpperCase())}}
B.VU.prototype={
S(){return new B.aEJ(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEJ.prototype={
Y(){var x=this
x.a3()
x.uj()
x.w=A.de(C.jC,new B.dZ5(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.W2()
this.a2()},
a1z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O7(u.a.c),$async$a1z)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.B9(u.a.c),$async$a1z)
case 4:u.m(new s.dYt(u,e))
u.ii("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1z,w)},
uj(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O7(u.a.c),$async$uj)
case 3:t=e
x=4
return A.b(B.B9(u.a.c),$async$uj)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dYu(u,s))
if(t>0)u.ii("Received "+A.w(t)+" file(s) via My Code.")
u.O5(u.d)
B.Cc(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uj,w)},
O5(d){return this.bFS(d)},
bFS(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7R(r,u.a.c),$async$O5)
case 8:p=f
if(u.c==null){x=1
break}new B.dY2(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n1))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W0(r,u.a.c),$async$O5)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.B9(u.a.c),$async$O5)
case 12:u.m(new o.dY3(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
Ou(d){return this.bM9(d)},
bM9(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7R(d,u.a.c),$async$Ou)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dY8(u,d,t))
x=6
return A.b(A.fG(new A.fA(t)),$async$Ou)
case 6:u.ii("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fA(r.toUpperCase())),$async$Ou)
case 7:u.ii("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ou,w)},
ii(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
uk(d,e){return this.cJa(d,e)},
cJa(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dYU(r,e))
u=3
x=6
return A.b(d.$0(),$async$uk)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dYV(r))
$.eV.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uk,w)},
gaXr(){var x=this.a
return x.f||x.r||x.w},
Iz(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Iz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXr()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdn(s,n,r,q,o,t),$async$Iz)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ii("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fMF(o,u.a.c),$async$Iz)
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
return A.b(B.DA(s,o,r,q,n,t),$async$Iz)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iz,w)},
a0D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqn(u.a.c),$async$a0D)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ii("No organization portal found.")
x=1
break}t=J.a7(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cd(A.eb(new B.dYq(u,r,q),!1,null,y.H)),$async$a0D)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0D,w)},
a1J(d){return this.crO(d)},
crN(){return this.a1J(1)},
crO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXr()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqk(u.a.c),$async$a1J)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1J,w)},
acS(d,e,f){return this.c26(d,e,f)},
c26(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ii(e)
x=1
break}x=3
return A.b(u.uk(new B.dYn(u,d,null,e,f),"Uploading\u2026"),$async$acS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acS,w)},
bG0(){B.hCA(!1,new B.dY6(this))
return},
cwR(){this.m(new B.dYy(this))},
aAf(){var x=0,w=A.j(y.H),v=this
var $async$aAf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bG0()
return A.h(null,w)}})
return A.i($async$aAf,w)},
acO(){var x=0,w=A.j(y.H),v=this
var $async$acO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uk(new B.dYc(v),"Importing\u2026"),$async$acO)
case 2:return A.h(null,w)}})
return A.i($async$acO,w)},
SY(d){return this.cIu(d)},
cIu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n1)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYR(u,d),!1,null,y.H)),$async$SY)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S1)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dYS(u,d),!1,null,y.H)),$async$SY)
case 8:x=1
break
case 7:x=u.c2P(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dYT(u,d),!1,null,y.H)),$async$SY)
case 11:x=1
break
case 10:u.ii("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
c2P(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p0(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRv,C.a.b2(x,w+1).toLowerCase())},
agA(d){return this.ciE(d)},
ciE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n1)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYo(u,d),!1,null,y.H)),$async$agA)
case 5:x=1
break
case 4:u.m(new B.dYp(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agA,w)},
Si(d){return this.czK(d)},
czK(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Si=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ii("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Si)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uk(new B.dYK(u,d),"Preparing QR\u2026"),$async$Si)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Si,w)},
ajh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYL(),A.U(t).k("N<1,m>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYM(q),s),s.k("M.E"))
if(r.length===0){u.ii("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Si(r),$async$ajh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
aja(d){return this.czh(d)},
czh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aja=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2b(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYE(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aja)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SY(d)
break
case"qr":u.Si(A.a([d],y.r))
break
case"send_my_code":u.cjg(A.a([d],y.r))
break
case"save":u.aiy(d)
break
case"delete":u.Jo(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aja,w)},
Yk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dY9(),A.U(t).k("N<1,m>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYa(q),s),s.k("M.E"))
if(r.length===0){u.ii("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Yk)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uk(new B.dYb(u,r),"Preparing file\u2026"),$async$Yk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yk,w)},
ahF(d){return this.cq8(d)},
cq8(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hDr(d,!1),$async$ahF)
case 3:s=f
r=s==null
q=B.a7O(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ii("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahF,w)},
agG(){var x=0,w=A.j(y.H),v=this,u
var $async$agG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fUk(u,v.a.c),$async$agG)
case 2:return A.h(null,w)}})
return A.i($async$agG,w)},
bG_(){B.hCA(!1,new B.dY5(this,null))
return},
JD(d,e){return this.cjh(d,e)},
b2W(d){return this.JD(null,d)},
cjg(d){return this.JD(d,null)},
cjh(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dYr(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xH.co().aoP(!0,C.a1j,!1),$async$JD)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.uk(new B.dYs(l,s,r),"Preparing\u2026"),$async$JD)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ii("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ii("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFw(p,l,e,s.a.c),$async$JD)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ii("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JD,w)},
IP(d){return this.c1U(d)},
c1U(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hSo(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2W(t),$async$IP)
case 8:x=6
break
case 7:u.ii("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ii("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uk(new B.dYl(u,d),"Receiving video\u2026"),$async$IP)
case 11:x=1
break
case 10:x=12
return A.b(u.uk(new B.dYm(u,d),"Receiving\u2026"),$async$IP)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
EI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Du()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahF(t),$async$EI)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IP(s),$async$EI)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYw(u),!1,null,y.N)),$async$EI)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uj(),$async$EI)
case 10:x=1
break
case 9:x=11
return A.b(u.IP(C.a.i(r)),$async$EI)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EI,w)},
aiy(d){return this.cvp(d)},
cvp(d){var x=0,w=A.j(y.H),v=this
var $async$aiy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uk(new B.dYv(v,d),"Saving\u2026"),$async$aiy)
case 2:return A.h(null,w)}})
return A.i($async$aiy,w)},
Jo(d){return this.bOu(d)},
bOu(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jo)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdq(t),$async$Jo)
case 6:case 5:s=d.a
x=7
return A.b(B.Fa(u.a.c,s),$async$Jo)
case 7:u.r.W(0,s)
x=8
return A.b(u.uj(),$async$Jo)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jo,w)},
ajn(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2b(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYQ(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajn)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agG()
break
case"import":u.acO()
break}case 1:return A.h(v,w)}})
return A.i($async$ajn,w)},
cb9(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n1))return C.qN
if(C.a.a0(x,"image/")||d.mI(D.S1))return C.uL
if(C.a.q(x,"pdf"))return E.Pw
return D.apC},
B(d){var x,w,v=this,u=null,t=B.a2b(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HV,u,u,u,new B.dZ0(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bXh,u,u,u,v.e?u:v.gciY(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcwQ()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bRv:E.aq0,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3c,u,u,u,v.e?u:v.gcba(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oD,u,u,u,v.e?u:v.gb40(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZ2,u,u,u,v.e?u:new B.dZ1(v),u,u,u,u,"More options",u))
q=A.eG(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lV(new B.dZ2(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dx(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.R(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dx(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.R(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kl(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAE(C.jI,s,!0,t,w?u:v.gczL(),u),1)
x.push(new A.D(D.bCv,A.lz(new B.dZ3(),A.A(A.a([s,C.at,A.E(new B.aAE(C.uM,"Export",!1,t,w?u:v.gbSm(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cx,C.j0,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfe(t,v.e?u:v.gb40(),u)
else s=A.km(!0,u,u,new B.dZ4(v,t),s,u,D.bCn,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAE.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.we,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.we,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f8,t,t,t),u.r,v)}}
B.bfe.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dbC(),new A.D(E.a0q,A.x(A.a([A.lz(new B.dbD(),A.p(x,A.X(C.z6,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.ew,C.hD,x,x,new A.bp(0.86,1,w),s),C.dV,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dV,A.dh(C.oD,D.fW4,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Oa,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.O,0,C.p),x),C.cx,C.C1,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.ad3.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.F(k.c*45,0,360),0,0)
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
if(!o||i.mI(D.n1))p=D.dr2
else{p=C.a.a0(p,"image/")||i.mI(D.S1)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gara()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n1))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.aw,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fU,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.mI(D.n1)))l.push(A.h4q(C.aE,!1,j,j,j,!1,j,j,new B.dbZ(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.X(C.ov,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.lz(new B.dc_(),new A.D(C.ei,A.aJ(!1,C.a3,!0,j,A.aO(!1,r,!0,new A.D(C.a_T,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cx,h,new A.bP("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.a_7.prototype={
S(){return new B.aAJ()},
gd1(){return this.c}}
B.aAJ.prototype={
Y(){this.a3()
this.yr()},
t(){B.hSD(this.e)
this.a2()},
yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rN(o.c,o.d),$async$yr)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gav(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hSG(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hSF(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dbW(s))
x=1
break}s.m(new B.dbX(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dbY(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yr,w)},
a2G(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rN(t.c,t.d),$async$a2G)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ffF)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiy(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2G)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2G,w)},
c1N(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kA(u,C.A,v,new B.dbU(w,t),C.hc,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aH.gav(t))x=A.fR(t,C.A,v,new B.dbV(w),C.hc,C.dC,!0,v,!1,v,v)
else return C.bL
return A.uS(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2b(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D3,u,u,u,v.gb7M(),u,u,u,u,"Share / save",u))
r=A.eG(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fp
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D3,D.fEn,v.gb7M(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c1N()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_4.prototype={
S(){return new B.aAG(A.ajp(),C.bD,C.bD)},
gd1(){return this.c}}
B.aAG.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fx(w,A.a4(w).k("fx<1>")).iA(new B.dbz(v))
x.gcX3().iA(new B.dbA(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a4(x).k("fx<1>"))}if(x==null)x=C.baU
x.iA(new B.dbB(v))
v.yr()},
yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rN(p.c,p.d),$async$yr)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbs(s))
x=1
break}x=8
return A.b(s.d.vo(0,new A.a4g(r,s.a.d.c)),$async$yr)
case 8:if(s.c==null){x=1
break}s.m(new B.dbt(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbu(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yr,w)},
a_t(){var x=0,w=A.j(y.H),v=this,u
var $async$a_t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_t)
case 5:x=3
break
case 4:x=6
return A.b(u.iD(0),$async$a_t)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_t,w)},
aVf(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2b(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eG(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fp
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bSv,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Q2,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.dbv(p),C.o.F(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVf(p.w)+" / "+p.aVf(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.fc4,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uO:C.hs,o,o,o,o,o)
x=A.x(A.a([u,C.l1,t,x,C.d6,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbd(),s)],y.p),C.m,o,C.e,C.O,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.qy,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qr.prototype={
S(){return new B.aAM()},
gd1(){return this.c}}
B.aAM.prototype={
Y(){this.a3()
this.Qb()},
Qb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h6J(o.c,o.d,new B.dcc(s)),$async$Qb)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcd(s))
x=1
break}s.e=r
q=O.ieU(r)
if(q==null){s.m(new B.dce(s))
x=1
break}s.d=q
q.aV(0,s.gb2J())
x=8
return A.b(q.iV(0).df(0,C.rL),$async$Qb)
case 8:if(s.c==null){x=1
break}s.m(new B.dcf(s))
x=9
return A.b(q.qo(0),$async$Qb)
case 9:q.tW(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcg(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qb,w)},
chd(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dch(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dq(0,x.gb2J())
w=x.d
if(w!=null)w.t()
B.ioX(x.e)
x.a2()},
af4(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0E(u.c,u.d),$async$af4)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af4,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2b(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eG(A.a([A.aG(t,t,t,t,C.oC,t,t,t,u.gcb7(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fp
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiU(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fF(x,new A.an(C.A,t,C.ac,C.t,A.a([new A.AF(s,t),A.aA(t,A.Bt(A.p(t,A.X(q?I.uO:C.hs,C.c,t,t,t,48),C.f,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b6,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcj(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_9.prototype={
S(){return new B.aAK(new A.cw(null,y.A))}}
B.aAK.prototype={
gcIS(){var x,w,v=this.a
if(v.e!==D.Tn)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIs(){var x,w,v=this.a
if(v.e!==D.Aa)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcIS()
if(x!=null){v.Ri(x)
v.e=A.de(R.GB,new B.dc8(v,x))}w=v.gcIs()
if(w!=null){v.Rh(w)
v.f=A.de(C.fF,new B.dc9(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rh(d){return this.col(d)},
col(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqs(d),$async$Rh)
case 3:t=f
x=4
return A.b(B.cdJ(d),$async$Rh)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dc0(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rh,w)},
Ri(d){return this.com(d)},
com(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ri=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fUX(d),$async$Ri)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDp(t),$async$Ri)
case 4:if(u.c==null){x=1
break}u.m(new B.dc1(u))
u.c.L(y.q).f.U(D.aTz)
case 1:return A.h(v,w)}})
return A.i($async$Ri,w)},
gc71(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcb8(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2s(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Du()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fiN)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dc2(),!1,null,y.N)),$async$a2s)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDp(s),$async$a2s)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTz)
case 1:return A.h(v,w)}})
return A.i($async$a2s,w)},
aaG(d){return this.bMa(d)},
bMa(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aO(t,", "))),$async$aaG)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaG,w)},
af2(d){return this.bLU(d)},
bLU(d){var x=0,w=A.j(y.H),v=this
var $async$af2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$af2)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fg8)
return A.h(null,w)}})
return A.i($async$af2,w)},
a2m(d){return this.cvr(d)},
cvr(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apq(s.d,4),$async$a2m)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tk(r,"ngmy_doc_share_qr.png"),$async$a2m)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2m,w)},
gaYI(){var x,w=this.a
if(w.e!==D.J1)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaD(d){return this.bM3(d)},
bM3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYI()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaD)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fhN)
case 1:return A.h(v,w)}})
return A.i($async$aaD,w)},
af3(){var x=0,w=A.j(y.H),v=this,u
var $async$af3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.W2(),$async$af3)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$af3,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2b(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.J1&&i!==D.Tn&&i!==D.Aa
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eG(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J1||t===D.Tn||t===D.Aa?l:A.aG(l,l,l,l,C.lm,l,l,l,m.gb0L(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.R,A.q7(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc71(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J1){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.R,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mR,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcb8(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hp(D.c1T,D.fNV,new B.dc3(m,d),l)],p))}if(m.a.e===D.J1&&m.gaYI()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hp(D.bZn,D.fKw,new B.dc4(m,d),l)],p))
if(m.a.e===D.Aa){x=(m.w?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.F(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.R,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mR,l,l,l)],p))}if(m.a.e===D.Tn){x=(m.r?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.R,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mR,l,l,l),C.af,A.dh(D.bUY,D.fR3,m.gcvO(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oH(i,A.c5(v,w,new A.D(C.ab,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ab,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D2,C.VO,new B.dc5(m,d),l),1),C.at,A.E(A.dh(C.zu,C.abb,new B.dc6(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.R,new A.a5(1/0,l,A.bH(C.AN,l,m.gb0L(),A.bn(C.aN,l,l,l,l,C.h3,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dc7(),y.C)}}
B.ad1.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.ch(A.x(A.a([w,C.aR,A.p(x,A.q7(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ai)
return A.eg(A.a([A.bH(C.xj,x,new B.dbr(d),x)],u),x,x,C.ni,v,x,x,x,x,D.fDm,x)}}
B.a_3.prototype={
S(){return new B.aAF(A.zO(C.yq,C.o0,C.v0))}}
B.aAF.prototype={
t(){this.d.t()
this.a2()},
ayO(d){var x,w,v,u,t
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
return A.c5(A.eG(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fL2,x,x,x,1,x,!0),C.w,A.zN(this.d,C.bZ,this.gayN()),x,!1,!1,x,x)}}
B.a_a.prototype={
S(){return new B.aAL(A.zO(C.yq,C.o0,C.v0))},
gd1(){return this.c}}
B.aAL.prototype={
c2R(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah2(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MA("text/plain"),$async$ah2)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fiH)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah2,w)},
abu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hDr(p,!0),$async$abu)
case 3:t=e
p=t==null
s=B.a7O(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fff)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abu,w)},
t(){this.d.t()
this.a2()},
ayO(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c2R(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.aqV,v,v,v,w.gbRR(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3j,v,v,v,w.gclH(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eG(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uI:P.Pe,v,v,v,v,v),v,v,v,new B.dcb(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fRY,v,v,v,1,v,!0)
u=A.zN(w.d,C.bZ,w.gayN())
x=A.n(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ewR],s),v),v,!1,!1,v,v)}}
B.bff.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pe
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pe:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aJ(!1,C.a3,!0,r,A.aO(!1,w,!0,new A.D(C.a0w,A.A(A.a([u,C.be,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eH,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aad.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pc.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Ya.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pb.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FF.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crl.prototype={}
B.FE.prototype={}
B.aac.prototype={}
B.av1.prototype={}
B.Yb.prototype={}
var z=a.updateTypes(["aB<~>()","P(jz)","m(jz)","VU(Z)","~()","a_6(Z)","F(F,jz)","Qr(Z)","~(me)","ct(FE)","aB<jz?>(@)","VS(Z)","VW(Z)","D(jz)","jz(@)","a8<m,@>(jz)","a_5(Z)","VT(Z)","a_7(Z)","a_4(Z)","a_9(Z)","ad1(Z)","ai<jz>()","a_a(Z)","ad3(Z,F)","a_3(Z)","a8<m,aE>(jz)","ct(Ya)","ct(aac)","aB<ct>(FE)"])
B.crh.prototype={
$1(d){var x=this.a
x.x=D.aQq
x.y.J(0,D.aQq)},
$S:75}
B.cri.prototype={
$1(d){var x=this.a
x.x=D.aQp
x.y.J(0,D.aQp)},
$S:75}
B.crj.prototype={
$1(d){var x=this.a
x.aiq(A.ahj(d.data)).bF(new B.crg(x),y.b)},
$S:75}
B.crg.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crk.prototype={
$1(d){},
$S:75}
B.crn.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hXq(d.channel))},
$S:16}
B.cro.prototype={
$1(d){},
$S:16}
B.crp.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ig3(w.iceConnectionState)
x.cx=w
if($.hg3())switch(w.a){case 0:x.cy=D.aQv
break
case 1:x.cy=D.aQw
break
case 3:x.cy=D.aQx
break
case 5:x.cy=D.aQt
break
case 6:x.cy=D.aQu
break
case 7:x.cy=D.a8S
break
default:break}},
$S:104}
B.crq.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ig4(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:104}
B.crr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iqq(w.signalingState)},
$S:104}
B.crs.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ioE(w.connectionState)},
$S:104}
B.crt.prototype={
$1(d){},
$S:104}
B.cru.prototype={
$1(d){},
$S:16}
B.fv7.prototype={
$1(d){var x=y.F.a(new A.r2([],[]).oK(d.target.result,!1)),w=C.yr.q(x.objectStoreNames,"blobs")
if(!w)C.yn.Lh(x,"blobs")},
$S:201}
B.fU8.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wN.fq(this.b)
$.eV.mC()
this.c.$1(d)},
$S:370}
B.fUa.prototype={
$1(d){return this.a.$1(B.i5z(this.b,this.c))},
$S:32}
B.fU9.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fU7.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fUn.prototype={
$1(d){var x=this
return B.hsq(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fUo.prototype={
$1(d){var x=this
return B.hsq(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fxH.prototype={
$1(d){var x=this
return B.cdk(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbK.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbH.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdk(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbJ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdk(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbI.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdk(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbM.prototype={
$4(d,e,f,g){var x=null
return A.jX(A.A(A.a([A.aG(x,x,x,x,D.bTA,x,x,x,new B.dbL(d),x,x,x,x,x,x),A.E(A.Fq(D.RL,!0,x,C.a2l,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RL,x,g,C.amA,0,e,f)},
$C:"$4",
$R:4,
$S:391}
B.dbL.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzD.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eP,y.o).w,t=this.a,s=t?C.iA:C.c,r=A.n(28),q=A.p(v,D.bwc,C.f,v,v,D.b6m,v,v,v,v,D.amq,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bXS,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.GQ,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ara,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dU(C.dl,new B.fzB(d),v),1),C.at,A.E(A.bH(D.fJx,v,new B.fzC(p,x,d),A.bn(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GE,v,v,v,v),v)},
$S:61}
B.fzB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzC.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fgp)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDl(v,x))},
$S:0}
B.fA6.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eP,y.o).w,u=x.a,t=u?C.iA:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bw1,C.f,w,w,D.b7Q,w,w,w,w,D.amq,w,w,1/0),new A.D(C.GQ,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.hbV(u,"Organization name",C.Hj,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.hbV(u,"Access code",C.nE,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.hbV(u,"Member password",H.HQ,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.by,A.bH(D.fS4,w,new B.fA5(r,q,p,d),A.bn(C.aE,w,w,w,w,C.h3,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GE,w,w,w,w),w)},
$S:61}
B.fA5.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fgu)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGt(u,x,w))},
$S:0}
B.cdb.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a7(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cF(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vH(p,null).df(0,C.a_w),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cd(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdh.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdi.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdj.prototype={
$1(d){return d.b},
$S:z+2}
B.cdd.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cde.prototype={
$1(d){return d.b},
$S:z+2}
B.cdc.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdf.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdg.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fUl.prototype={
$1(d){return new B.VS(this.a,null)},
$S:z+11}
B.fUm.prototype={
$1(d){return new B.VW(this.a,this.b,this.c,null)},
$S:z+12}
B.dXZ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZ7.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZ8.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZ9.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZ6(x,d))},
$S:2}
B.dZ6.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZa.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZb.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZc.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZd.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZe.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZf.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZi.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.q(0,(1-e)*14)),e)},
$S:100}
B.dZg.prototype={
$1(d){var x=this.a
return x.f?null:x.a_s()},
$S:2}
B.dZh.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S1))s=C.uL
else s=C.a.a0(s,"video/")||d.mI(D.n1)?C.qN:D.apC
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gara(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dY_.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dY0.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdl.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:92}
B.cdm.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:92}
B.fVf.prototype={
$2(d,e){return e===this.a},
$S:282}
B.fsb.prototype={
$1(d){return J.k(d)},
$S:17}
B.fxT.prototype={
$1(d){var x=this.b
B.i3z(C.H6.ga7a(this.a)).bF(x.gBZ(x),y.H)},
$S:125}
B.fxU.prototype={
$1(d){return this.a.da(0,null)},
$S:125}
B.fxV.prototype={
$0(){return null},
$S:12}
B.cdA.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxW.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.j.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jz(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fC1.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fw6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fw7.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdF.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n1)},
$S:z+1}
B.fZm.prototype={
$1(d){return new B.a_5(this.a,null)},
$S:z+16}
B.dbG.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dbE.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZ5.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1z()},
$S:11}
B.dYt.prototype={
$0(){var x=J.bGy(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYu.prototype={
$0(){var x=J.bGy(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dY2.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dY1(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFK(this.c)}},
$S:0}
B.dY1.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dY3.prototype={
$0(){var x=J.bGy(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dY8.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dY7(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFK(this.c)}},
$S:0}
B.dY7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYU.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dYV.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dYq.prototype={
$1(d){return new B.VT(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Iz(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.VX(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uj(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1J(s.gI(t)),$async$$0)
case 8:case 7:r.ii(s.gav(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY6.prototype={
$1(d){this.a.acS(d,"No files selected.","Added")},
$S:370}
B.dYy.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.N(x,new B.dYx(),A.U(x).k("N<1,m>")))},
$S:0}
B.dYx.prototype={
$1(d){return d.a},
$S:z+2}
B.dYc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xH.co().cZ1(C.a1j,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gav(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jG(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ii("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ii("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqr(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ii("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uj(),$async$$0)
case 9:o.ii("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dYR.prototype={
$1(d){return new B.Qr(this.a.a.c,this.b,null)},
$S:z+7}
B.dYS.prototype={
$1(d){return new B.a_7(this.a.a.c,this.b,null)},
$S:z+18}
B.dYT.prototype={
$1(d){return new B.a_4(this.a.a.c,this.b,null)},
$S:z+19}
B.dYo.prototype={
$1(d){return new B.Qr(this.a.a.c,this.b,null)},
$S:z+7}
B.dYp.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Iz(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7Q(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ii("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.crN(),$async$$0)
case 5:x=6
return A.b(p.uj(),$async$$0)
case 6:r=A.U(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dYG(p),r),new B.dYH(),r.k("N<ak.E,m>")).bZ(0,new B.dYI())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYJ(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pq(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.W2(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYG.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYF(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYH.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYI.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYJ.prototype={
$1(d){var x=this.a
return new B.a_9(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dYL.prototype={
$1(d){return d.a},
$S:z+2}
B.dYM.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYE.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gara(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n1)?C.rY:C.pt
p=!x||p.mI(D.n1)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([q,o,t,C.aC,B.a_8(!1,u,!1,w,p,new B.dYz(d),v),B.a_8(!1,u,!1,C.jI,"Share via QR",new B.dYA(d),"Letters/numbers QR code"),B.a_8(!1,u,!1,D.a2q,"Send to their Code",new B.dYB(d),"Enter someone else's personal code"),B.a_8(!1,u,!1,C.hV,"Download / save",new B.dYC(d),v),C.an,B.a_8(!1,u,!0,C.ef,"Delete",new B.dYD(d),v)],y.p),C.al,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,v,v,C.n),C.bi)},
$S:713}
B.dYz.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dYA.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dYB.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYC.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYD.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dY9.prototype={
$1(d){return d.a},
$S:z+2}
B.dYa.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7S(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.H9(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pq(s.c,s.f),$async$$0)
case 4:u.ii(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY5.prototype={
$1(d){var x=this.a
x.uk(new B.dY4(x,d,this.b),"Preparing\u2026")},
$S:370}
B.dY4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ii("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.VX(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ii("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFw(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ii("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYr.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dYs.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h6M(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.H7(new B.dYh(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ii("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dYi(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYj(s))
case 5:x=8
return A.b(r.b.iE(0,C.Gy,new B.dYk()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gav(t)){s.ii("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uj(),$async$$0)
case 9:s.ii("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYh.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYe(x,d,e))},
$S:233}
B.dYe.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYi.prototype={
$1(d){return new B.ad1(this.a.a,null)},
$S:z+21}
B.dYj.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYk.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYm.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jb(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7G(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2W(B.Jb(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqr(new B.dYf(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h6L(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ii(q)
x=1
break}x=10
return A.b(s.uj(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYg()).gI(0)
s.ii(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYf.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYd(x,d,e))},
$S:233}
B.dYd.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYg.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n1)},
$S:z+1}
B.dYw.prototype={
$1(d){return new B.a_a(this.a.a.c,null)},
$S:z+23}
B.dYv.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0E(u.a.c,v.b),$async$$0)
case 2:t.ii(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYQ.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_8(!0,w,!1,C.nE,"My Code",new B.dYN(d),"Your personal code & QR \u2014 others send docs to you"),B.a_8(!1,w,!1,D.a2q,"Send to their Code",new B.dYO(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_8(!1,w,!1,S.zl,"Import backup",new B.dYP(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,x,x,C.n),C.bi)},
$S:713}
B.dYN.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dYO.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bG_()},
$S:0}
B.dYP.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZ2.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jl(D.RL,x,C.a2l,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cT(C.d.gH(D.RL).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:683}
B.dZ0.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZ1.prototype={
$0(){this.a.ajn()
return null},
$S:0}
B.dZ3.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.q(0,(1-e)*10)),e)},
$S:100}
B.dZ4.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ad3(e,w,v,this.b,x.e,x.cb9(w),new B.dYX(x,w),new B.dYY(x,v,w),new B.dYZ(x,w),new B.dZ_(x,w),null)},
$S:z+24}
B.dYX.prototype={
$0(){this.a.agA(this.b)
return null},
$S:0}
B.dYY.prototype={
$0(){var x=this.a
return x.m(new B.dYW(x,this.b,this.c))},
$S:0}
B.dYW.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYZ.prototype={
$0(){this.a.Ou(this.b)
return null},
$S:0}
B.dZ_.prototype={
$0(){this.a.aja(this.b)
return null},
$S:0}
B.dbC.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.q(0,(1-e)*18)),e)},
$S:100}
B.dbD.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:110}
B.dc_.prototype={
$3(d,e,f){return A.da(A.dP(f,new A.q(0,(1-e)*14)),e)},
$S:100}
B.dbZ.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dbW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dbX.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dbY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dbU.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gav(w))return A.fR(w,C.A,x,new B.dbS(this.a),C.hc,C.dC,!0,x,!1,x,x)
$.aW.x1$.push(new B.dbT(this.a))
return C.bL},
$S:134}
B.dbS.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dbQ(this.a))
return C.bL},
$S:197}
B.dbQ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbN(x))},
$S:7}
B.dbN.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbT.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbP(x))},
$S:7}
B.dbP.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbV.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dbR(this.a))
return C.bL},
$S:197}
B.dbR.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbO(x))},
$S:7}
B.dbO.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbz.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dby(x,d))},
$S:1762}
B.dby.prototype={
$0(){return this.a.f=this.b===C.vo},
$S:0}
B.dbA.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbx(x,d))},
$S:7}
B.dbx.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbB.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbw(x,d))},
$S:7}
B.dbw.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbs.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbt.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbu.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbv.prototype={
$1(d){return this.a.d.Nr(0,A.dv(0,0,0,C.j.V(d),0,0))},
$S:6}
B.dcc.prototype={
$0(){var x=this.a.a
return B.rN(x.c,x.d)},
$S:1763}
B.dcd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dce.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcf.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dch.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcj.prototype={
$0(){var x=this.a
x.m(new B.dci(x))},
$S:0}
B.dci.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qo(0)},
$S:0}
B.dc8.prototype={
$1(d){return this.a.Ri(this.b)},
$S:11}
B.dc9.prototype={
$1(d){return this.a.Rh(this.b)},
$S:11}
B.dc0.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dc1.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dc2.prototype={
$1(d){return D.hrz},
$S:z+25}
B.dc7.prototype={
$2(d,e){if(d)B.W2()},
$S:130}
B.dc3.prototype={
$0(){return this.a.aaG(this.b)},
$S:0}
B.dc4.prototype={
$0(){return this.a.aaD(this.b)},
$S:0}
B.dc5.prototype={
$0(){return this.a.af2(this.b)},
$S:0}
B.dc6.prototype={
$0(){return this.a.a2m(this.b)},
$S:0}
B.dbr.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qs(),$async$$0)
case 2:u.m(new B.dca(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dca.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdH.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n1)},
$S:z+1}
B.cdI.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdG.prototype={
$2(d,e){return this.bmD(d,e)},
bmD(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W3(u.c,A.H(["uploadProgress",C.j.F(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fBE.prototype={
$1(d){if(d===D.a8R&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fBF.prototype={
$0(){},
$S:12}
B.fCf.prototype={
boc(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fps(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hnC(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boc(d,e)},
$S:580}
B.fCe.prototype={
$1(d){var x=this
d.b=new B.fCd(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fCd.prototype={
$1(d){return this.bob(d)},
bob(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0F(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Y.aQ(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.t(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.t(r,"name")
n=J.k(n==null?"file":n)
m=J.t(r,"mime")
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
return A.b(B.fps(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.da(0,s.e)
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
return A.b(B.a7P(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.da(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAI.prototype,"gciA","QS",0)
x(v,"gcjr","JE",0)
x(v,"gciX","yB",0)
x(v=B.aEH.prototype,"gcb3","af0",0)
x(v,"gcb4","a_r",0)
x(v,"gcyf","aiS",0)
x(v=B.aEK.prototype,"gcb5","a_s",0)
x(v,"gcyg","a2H",0)
x(B.aEI.prototype,"gcb6","af1",0)
x(B.aAH.prototype,"gcbb","cbc",4)
x(v=B.aEJ.prototype,"gciY","a0D",0)
x(v,"gcwQ","cwR",4)
x(v,"gb40","aAf",0)
x(v,"gczL","ajh",0)
x(v,"gbSm","Yk",0)
x(v,"gcba","EI",0)
x(B.aAJ.prototype,"gb7M","a2G",0)
x(B.aAG.prototype,"gcbd","a_t",0)
x(v=B.aAM.prototype,"gb2J","chd",4)
x(v,"gcb7","af4",0)
x(v=B.aAK.prototype,"gcvO","a2s",0)
x(v,"gb0L","af3",0)
w(B.aAF.prototype,"gayN","ayO",8)
x(v=B.aAL.prototype,"gclH","ah2",0)
x(v,"gbRR","abu",0)
w(v,"gayN","ayO",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crl,B.aac,B.av1,B.aDl,B.aGt,B.jz,B.acK,B.bxv,B.FE,B.Yb])
w(B.crm,B.crl)
w(B.b5N,B.aac)
x(A.hu,[B.crh,B.cri,B.crj,B.crg,B.crk,B.crn,B.cro,B.crp,B.crq,B.crr,B.crs,B.crt,B.cru,B.fv7,B.fU8,B.fUa,B.fU9,B.fUn,B.fUo,B.fxH,B.dbH,B.dbJ,B.dbI,B.dbM,B.fzD,B.fA6,B.cdb,B.cdi,B.cdj,B.cde,B.cdc,B.cdf,B.cdg,B.fUl,B.fUm,B.dZ9,B.dZi,B.dZg,B.dZh,B.fsb,B.fxT,B.fxU,B.cdA,B.fxW,B.fC1,B.fw6,B.fw7,B.cdF,B.fZm,B.dbG,B.dbE,B.dZ5,B.dY1,B.dY7,B.dYq,B.dY6,B.dYx,B.dYR,B.dYS,B.dYT,B.dYo,B.dYG,B.dYF,B.dYH,B.dYI,B.dYJ,B.dYL,B.dYM,B.dYE,B.dY9,B.dYa,B.dY5,B.dYr,B.dYi,B.dYg,B.dYw,B.dYQ,B.dZ2,B.dZ3,B.dbC,B.dbD,B.dc_,B.dbZ,B.dbU,B.dbS,B.dbQ,B.dbT,B.dbV,B.dbR,B.dbz,B.dbA,B.dbB,B.dbv,B.dc8,B.dc9,B.dc2,B.cdH,B.cdI,B.fBE,B.fCe,B.fCd])
w(B.b5O,B.av1)
x(A.iH,[B.fU7,B.dbK,B.dbL,B.fzB,B.fzC,B.fA5,B.dXZ,B.dZ7,B.dZ8,B.dZ6,B.dZa,B.dZb,B.dZc,B.dZd,B.dZe,B.dZf,B.dY_,B.dY0,B.fxV,B.dbF,B.dYt,B.dYu,B.dY2,B.dY3,B.dY8,B.dYU,B.dYV,B.dYn,B.dYy,B.dYc,B.dYp,B.dYK,B.dYz,B.dYA,B.dYB,B.dYC,B.dYD,B.dYb,B.dY4,B.dYs,B.dYl,B.dYe,B.dYj,B.dYk,B.dYm,B.dYd,B.dYv,B.dYN,B.dYO,B.dYP,B.dZ0,B.dZ1,B.dYX,B.dYY,B.dYW,B.dYZ,B.dZ_,B.dbW,B.dbX,B.dbY,B.dbN,B.dbP,B.dbO,B.dby,B.dbx,B.dbw,B.dbs,B.dbt,B.dbu,B.dcc,B.dcd,B.dce,B.dcf,B.dcg,B.dch,B.dcj,B.dci,B.dc0,B.dc1,B.dc3,B.dc4,B.dc5,B.dc6,B.dbr,B.dcb,B.dca,B.fBF])
x(A.lB,[B.ad2,B.O8,B.aad,B.Pc,B.Ya,B.Pb,B.FF])
x(A.af,[B.a_6,B.VS,B.VW,B.VT,B.a_5,B.VU,B.a_7,B.a_4,B.Qr,B.a_9,B.a_3,B.a_a])
x(A.ah,[B.aAI,B.aEH,B.aEK,B.aEI,B.aAH,B.aEJ,B.aAJ,B.aAG,B.aAM,B.aAK,B.aAF,B.aAL])
x(A.ax,[B.adv,B.aAE,B.bfe,B.ad3,B.ad1,B.bff])
x(A.ju,[B.cdh,B.cdd,B.cdl,B.cdm,B.fVf,B.dYh,B.dYf,B.dZ4,B.dc7,B.cdG,B.fCf])
x(A.j1,[B.bkH,B.bx7])})()
A.j2(b.typeUniverse,JSON.parse('{"b5N":{"aac":[]},"b5O":{"av1":[]},"a_6":{"af":[],"v":[]},"aAI":{"ah":["a_6"]},"adv":{"ax":[],"v":[]},"VS":{"af":[],"v":[]},"VW":{"af":[],"v":[]},"aEH":{"ah":["VS"]},"aEK":{"ah":["VW"]},"bkH":{"j1":[]},"VT":{"af":[],"v":[]},"aEI":{"ah":["VT"]},"a_5":{"af":[],"v":[]},"VU":{"af":[],"v":[]},"ad3":{"ax":[],"v":[]},"a_7":{"af":[],"v":[]},"a_4":{"af":[],"v":[]},"Qr":{"af":[],"v":[]},"a_9":{"af":[],"v":[]},"ad1":{"ax":[],"v":[]},"a_3":{"af":[],"v":[]},"a_a":{"af":[],"v":[]},"aAH":{"ah":["a_5"]},"bx7":{"j1":[]},"aEJ":{"ah":["VU"]},"aAE":{"ax":[],"v":[]},"bfe":{"ax":[],"v":[]},"aAJ":{"ah":["a_7"]},"aAG":{"ah":["a_4"]},"aAM":{"ah":["Qr"]},"aAK":{"ah":["a_9"]},"aAF":{"ah":["a_3"]},"aAL":{"ah":["a_a"]},"bff":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uD"),k:x("My()"),m:x("bv<m,m>"),F:x("rn"),g:x("aB<jz?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<m,P>>"),t:x("O<a8<m,@>>"),r:x("O<jz>"),w:x("O<+file,name(lP,m)>"),u:x("O<cT>"),s:x("O<m>"),E:x("O<j1>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<F>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jz>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iB"),e:x("iut"),af:x("ER"),U:x("jz"),b:x("ct"),C:x("aE"),aK:x("ww"),ab:x("FE"),br:x("av1"),v:x("Yb"),N:x("m"),X:x("bp<I>"),Q:x("m_"),D:x("dK"),aw:x("bP<m>"),cd:x("Y<a8<m,@>>"),c7:x("v"),ch:x("c2<ai<jz>>"),aW:x("c2<dK?>"),aY:x("c2<~>"),cx:x("ad2"),b1:x("bk<ai<jz>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDl"),bG:x("aGt"),q:x("mu"),B:x("pJ<FE>"),c6:x("pJ<aad>"),y:x("P"),i:x("I"),z:x("@"),S:x("F"),aQ:x("bh?"),_:x("ai<jz>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jz?"),R:x("aE?"),c:x("Yb?"),d:x("+answerQr,transfer(m,aB<ai<jz>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,O8,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dK?"),cm:x("acK?"),bk:x("aDl?"),ag:x("aGt?"),dd:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b4J=new A.ay(C.aE,2,C.r,-1)
D.c6u=new A.a9(C.a6,C.a9,C.x,C.a4v,null,null)
D.b6m=new A.o(null,null,null,C.mA,null,D.c6u,C.n)
D.b7Q=new A.o(null,null,null,C.mA,null,E.I1,C.n)
D.afl=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agM=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahO=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajz=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fEg=new A.B("Your team portal",null,C.dg,null,null,null,null,null,null,null,null,null)
D.fT_=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.KA,null,null,null,null,null,null,null,null,null)
D.di5=x([D.fEg,C.an,D.fT_],y.p)
D.bvS=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.di5,null)
D.fXs=new A.B("Create your organization",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fII=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.KA,null,null,null,null,null,null,null,null,null)
D.dyT=x([D.fXs,C.an,D.fII],y.p)
D.bw1=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dyT,null)
D.fTC=new A.B("Team Member sign-in",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fMD=new A.B("Enter the access code and password from your organization.",null,G.KA,null,null,null,null,null,null,null,null,null)
D.dwF=x([D.fTC,C.an,D.fMD],y.p)
D.bwc=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dwF,null)
D.bCn=new A.Q(16,10,16,28)
D.bCv=new A.Q(16,14,16,4)
D.bDL=new A.Q(20,0,20,16)
D.bEg=new A.Q(20,8,20,16)
D.amq=new A.Q(24,22,24,20)
D.a2q=new A.a0(63394,"MaterialIcons",!1)
D.apC=new A.a0(63515,"MaterialIcons",!1)
D.bRv=new A.a0(983813,"MaterialIcons",!1)
D.bOL=new A.a0(62867,"MaterialIcons",!1)
D.bSv=new A.ae(D.bOL,44,C.c,null,null,null)
D.bTA=new A.ae(C.k4,null,C.ad,null,null,null)
D.bUY=new A.ae(C.jn,18,null,null,null,null)
D.bWI=new A.ae(D.a2q,26,C.c,null,null,null)
D.bXh=new A.ae(C.CS,null,null,null,null,null)
D.bXS=new A.ae(C.D_,null,null,null,null,null)
D.bZ2=new A.ae(W.a2B,null,null,null,null,null)
D.bZn=new A.ae(C.hI,16,null,null,null,null)
D.c1T=new A.ae(C.rX,16,null,null,null,null)
D.bSM=new A.ae(C.nE,null,null,null,null,null)
D.c2M=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYp=new A.ae(C.Hj,null,null,null,null,null)
D.c2R=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bT7=new A.ae(H.HQ,null,null,null,null,null)
D.c31=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bT7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cS3=x([C.fn,C.b2,C.aE],y.O)
D.c8n=new A.a9(C.aA,C.aF,C.x,D.cS3,null,null)
D.cRv=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RL=x([C.fn,C.aE],y.O)
D.S1=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n1=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dr2=x([C.of,C.aE],y.O)
D.ej3={iceServers:0}
D.aKW={urls:0}
D.dCB=new A.bv(D.aKW,["stun:stun.l.google.com:19302"],y.m)
D.dCA=new A.bv(D.aKW,["stun:stun1.l.google.com:19302"],y.m)
D.d7K=x([D.dCB,D.dCA],A.as("O<a8<m,m>>"))
D.dBS=new A.bv(D.ej3,[D.d7K],A.as("bv<m,@>"))
D.J1=new B.O8(0,"lanDirect")
D.Tm=new B.O8(1,"cloudStash")
D.dNE=new B.O8(2,"inlineInstant")
D.Tn=new B.O8(3,"webrtcLink")
D.Aa=new B.O8(4,"videoCloud")
D.fSZ=new A.B("Receive file",null,C.nc,null,null,null,null,null,null,null,null,null)
D.cHj=x([E.arj,C.ae,D.fSZ],y.p)
D.f6Z=new A.c7(C.aL,C.ba,C.i,C.m,null,C.p,null,0,D.cHj,null)
D.eqz=new A.D(C.cn,D.f6Z,null)
D.fuP=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.It,null,null,null)
D.fEP=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fuP,null,C.K,null,null,null,null,null,null,null)
D.epK=new A.D(C.Ch,D.fEP,null)
D.bce=new A.cc(C.A,null,null,D.epK,null)
D.ewR=new A.cL(0,null,0,28,null,null,D.bce,null)
D.exa=new B.aad(0,"RTCDataChannelConnecting")
D.aQp=new B.aad(1,"RTCDataChannelOpen")
D.aQq=new B.aad(3,"RTCDataChannelClosed")
D.exb=new B.FF(0,"RTCIceConnectionStateNew")
D.exc=new B.FF(1,"RTCIceConnectionStateChecking")
D.exd=new B.FF(2,"RTCIceConnectionStateCompleted")
D.exe=new B.FF(3,"RTCIceConnectionStateConnected")
D.exf=new B.FF(4,"RTCIceConnectionStateCount")
D.exg=new B.FF(5,"RTCIceConnectionStateFailed")
D.exh=new B.FF(6,"RTCIceConnectionStateDisconnected")
D.aQr=new B.FF(7,"RTCIceConnectionStateClosed")
D.aQs=new B.Ya(0,"RTCIceGatheringStateNew")
D.exi=new B.Ya(1,"RTCIceGatheringStateGathering")
D.a8R=new B.Ya(2,"RTCIceGatheringStateComplete")
D.a8S=new B.Pb(0,"RTCPeerConnectionStateClosed")
D.aQt=new B.Pb(1,"RTCPeerConnectionStateFailed")
D.aQu=new B.Pb(2,"RTCPeerConnectionStateDisconnected")
D.aQv=new B.Pb(3,"RTCPeerConnectionStateNew")
D.aQw=new B.Pb(4,"RTCPeerConnectionStateConnecting")
D.aQx=new B.Pb(5,"RTCPeerConnectionStateConnected")
D.exj=new B.Pc(0,"RTCSignalingStateStable")
D.exk=new B.Pc(1,"RTCSignalingStateHaveLocalOffer")
D.exl=new B.Pc(2,"RTCSignalingStateHaveRemoteOffer")
D.exm=new B.Pc(3,"RTCSignalingStateHaveLocalPrAnswer")
D.exn=new B.Pc(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQy=new B.Pc(5,"RTCSignalingStateClosed")
D.fc4=new A.av(160,48)
D.bdv=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.fdD=new A.a5(16,16,D.bdv,null)
D.fI2=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ff5=new A.b1(D.fI2,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fPF=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.b1(D.fPF,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fYw=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fff=new A.b1(D.fYw,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHD=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ffF=new A.b1(D.fHD,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTN=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTz=new A.b1(D.fTN,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVf=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new A.b1(D.fVf,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZZ=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new A.b1(D.fZZ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fXW=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgu=new A.b1(D.fXW,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZ9=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fhg=new A.b1(D.fZ9,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGd=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhN=new A.b1(D.fGd,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRz=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fi7=new A.b1(D.fRz,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fKm=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fiD=new A.b1(D.fKm,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_4=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiH=new A.b1(D.h_4,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGt=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiN=new A.b1(D.fGt,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fFa=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new A.b1(D.fFa,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fBW=new A.B("NGMY DOC SHARE",null,C.aUX,null,null,null,null,null,null,null,null,null)
D.fDm=new A.B("Show this to sender",null,C.ix,null,null,null,null,null,null,null,null,null)
D.fEn=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fJ8=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fJx=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fKw=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fL2=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNV=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fQI=new A.B("Send to their Doc Share",null,C.nS,null,null,null,null,null,null,null,null,null)
D.fR3=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRn=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fRY=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fS4=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fSs=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f8,null,null,null,null,null,null,null,null,null)
D.fVL=new A.B("Share files & videos\nwith a scan.",null,C.aV_,null,null,null,null,null,null,null,null,null)
D.fW4=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hrz=new B.a_3(null)
D.acd=new B.ad2(0,"docShare")
D.ace=new B.ad2(1,"gate")
D.Wp=new B.ad2(2,"gateNoIndividual")})();(function staticFields(){$.aPb=null
$.fn5=function(){var x=y.N
return A.T(x,x)}()
$.GV=A.T(y.N,y.D)
$.ah6=A.T(y.N,A.as("lP"))
$.RN=A.T(y.N,y.D)
$.fnI=A.T(y.N,A.as("acK"))
$.cdz=A.T(y.S,A.as("bxv"))
$.hnB=1
$.ibJ=null
$.ibI=null
$.i2R=null
$.hc7=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iuY","hFq",()=>new B.crm())
x($,"isS","hg3",()=>C.a.q(A.bz(A.bz(A.bz(A.Hu(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["dfN862WsfuVpXDneQbYqLYlEYlY="]=a.current})($__dart_deferred_initializers__);