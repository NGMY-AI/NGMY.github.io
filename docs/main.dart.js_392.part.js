((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cvG:function cvG(){},
idA(d){var x=null,w=new B.b8q(d,D.ePb,new A.q8(x,x,y.c6),new A.q8(x,x,y.B))
w.bF3(d)
return w},
b8q:function b8q(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cvB:function cvB(d){this.a=d},
cvC:function cvC(d){this.a=d},
cvD:function cvD(d){this.a=d},
cvA:function cvA(d){this.a=d},
cvE:function cvE(d){this.a=d},
idB(d,e){var x=y.N
x=new B.b8r(d,e,A.S(x,y.e),A.S(x,y.z))
x.bF4(d,e)
return x},
b8r:function b8r(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvH:function cvH(d){this.a=d},
cvI:function cvI(d){this.a=d},
cvJ:function cvJ(d){this.a=d},
cvK:function cvK(d){this.a=d},
cvL:function cvL(d){this.a=d},
cvM:function cvM(d){this.a=d},
cvN:function cvN(d){this.a=d},
cvO:function cvO(d){this.a=d},
hqH(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bd("IndexedDB not available"))
return C.xG.HA(x,"ngmy_doc_share_v1",new B.fGU(),1)},
iks(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eA(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w4(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cL.aK(d)
return x}catch(w){return v}return v},
T1(d,e){return B.iAH(d,e)},
iAH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRA
x=7
return A.b(o==null?$.aRA=B.hqH():o,$async$T1)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mF(s,"blobs","readwrite")
C.iV.mr(J.mD(q,"blobs"),r,d)
x=8
return A.b(J.oX(q),$async$T1)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$T1,w)},
T0(d){return B.iAG(d)},
iAG(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRA
x=7
return A.b(o==null?$.aRA=B.hqH():o,$async$T0)
case 7:s=f
r=J.mF(s,"blobs","readonly")
x=8
return A.b(C.iV.ye(J.mD(r,"blobs"),d),$async$T0)
case 8:q=f
x=9
return A.b(J.oX(r),$async$T0)
case 9:o=B.iks(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$T0,w)},
ajn(d){return B.iAF(d)},
iAF(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRA
x=7
return A.b(p==null?$.aRA=B.hqH():p,$async$ajn)
case 7:s=f
r=J.mF(s,"blobs","readwrite")
C.iV.H5(J.mD(r,"blobs"),d)
x=8
return A.b(J.oX(r),$async$ajn)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ajn,w)},
fGU:function fGU(){},
in5(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btx(w,v))}return u},
hSZ(d,e){var x,w={},v=A.b_m("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h7h(w,v,e)
C.xI.xc(v,"change",new B.h7j(w,v,!1))
C.xI.xc(v,"cancel",new B.h7i(w))
$.eY.mT()
v.click()
A.bM(C.ank,new B.h7g(w),y.H)},
h7h:function h7h(d,e,f){this.a=d
this.b=e
this.c=f},
h7j:function h7j(d,e,f){this.a=d
this.b=e
this.c=f},
h7i:function h7i(d){this.a=d},
h7g:function h7g(d){this.a=d},
E8(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E8=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd7()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVw()?3:4
break
case 3:x=5
return A.b(B.hNp(e,d,s,!0,!1,f,g,h,!1,i),$async$E8)
case 5:x=1
break
case 4:x=6
return A.b(B.SD(d,s,f,g,h,i),$async$E8)
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
return A.b(B.JM(s,d),$async$E8)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fCa(s,d),$async$E8)
case 14:x=12
return A.b(r.hNp(q,p,o,n,m,l,k,j,a1,i),$async$E8)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).c9(A.e4(new B.h7w(s,i,d,f,g,h),!1,null,y.H)),$async$E8)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).c9(A.e4(new B.h7x(s,i,d,f,g,h),!1,null,y.H)),$async$E8)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E8,w)},
SD(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SD=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b37(e),$async$SD)
case 3:u=k
x=4
return A.b(B.ase(d,e,!1),$async$SD)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JM(e,d),$async$SD)
case 7:if(k){v=D.aeH
x=1
break}x=8
return A.b(B.WY(e),$async$SD)
case 8:v=t?D.Yc:D.aeI
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b35(d,e)){v=D.aeH
x=1
break}x=11
return A.b(B.WY(e),$async$SD)
case 11:v=t?D.Yc:D.aeI
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hll(d,e)){v=D.aeH
x=1
break}x=14
return A.b(B.WY(e),$async$SD)
case 14:v=D.Yc
x=1
break
case 13:v=t?D.Yc:D.aeI
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SD,w)},
fCa(d,e){var x=0,w=A.j(y.y),v
var $async$fCa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b35(e,d)){v=!1
x=1
break}x=3
return A.b(B.b37(d),$async$fCa)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCa,w)},
hNp(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).c9(A.e4(new B.fJA(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hHR(d,e,f,g,h,i,j){return new B.a0k(e,j,d,g,h,i,f,null)},
fLA(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fLA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLD(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fLA)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLA,w)},
fM4(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fM4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fM6(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fM4)
case 3:q=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
r.V$=u
r.W$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fM4,w)},
hqU(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fZM(d,e){var x=0,w=A.j(y.H),v
var $async$fZM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WY(e),$async$fZM)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e6()
case 1:return A.h(v,w)}})
return A.i($async$fZM,w)},
h7w:function h7w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h7x:function h7x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aez:function aez(d,e){this.a=d
this.b=e},
fJA:function fJA(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0k:function a0k(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCI:function aCI(){this.c=this.a=this.d=null},
dh_:function dh_(d,e){this.a=d
this.b=e},
dgX:function dgX(d){this.a=d},
dgZ:function dgZ(d){this.a=d},
dgY:function dgY(d){this.a=d},
dh1:function dh1(){},
dh0:function dh0(d){this.a=d},
af2:function af2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFo:function aFo(d,e){this.a=d
this.b=e},
aIF:function aIF(d,e,f){this.a=d
this.b=e
this.c=f},
fLD:function fLD(d,e,f){this.a=d
this.b=e
this.c=f},
fLB:function fLB(d){this.a=d},
fLC:function fLC(d,e,f){this.a=d
this.b=e
this.c=f},
fM6:function fM6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fM5:function fM5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ch1(d,e,f,g,h){return B.i8g(d,e,f,g,h)},
i8g(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ch1=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dS(d,new B.ch2(s,e,h,g,f,q),y.g),y.l),$async$ch1)
case 3:r=p.aO(j)
case 4:if(!r.B()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch1,w)},
b32(d,e,f,g,h){return B.i8h(d,e,f,g,h)},
i8h(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b32=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axN("GET",d)
o=A.bJv()
if(o==null)o=new A.In(A.a([],y.W))
x=7
return A.b(o.fe(0,s).d8(0,C.HG),$async$b32)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DD(),$async$b32)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CF(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b32,w)},
b31(d){return B.i8e(d)},
i8e(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b31=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wg(d,null).d8(0,C.oW),$async$b31)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.m6(A.m3(p.e)).cH(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b31,w)},
ch0(d){return B.i8f(d)},
i8f(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ch0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wg(d,null).d8(0,C.re),$async$ch0)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m6(A.m3(q.e)).cH(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ad(o)
$.an.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ch0,w)},
ch2:function ch2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jV:function jV(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JK(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aH(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i8m(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JK(C.a.aV(t,u.length))}return null},
i8n(d){var x=B.JK(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i8i(){var x,w=$.og(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.ho(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a94(d){return B.i8j(d)},
i8j(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a94=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bM),$async$a94)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a94,w)},
a95(d,e){return B.i8k(d,e)},
i8k(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a95=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cZ,null),$async$a95)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a95,w)},
CE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CE)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JK(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a96(r),$async$CE)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a94("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CE)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JK(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CE)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i8i()
x=14
return A.b(B.a96(m),$async$CE)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a95("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CE)
case 15:k=f
x=16
return A.b(B.a95("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CE)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CE)
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
return A.i($async$CE,w)},
a96(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a96=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JK(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a94("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a96)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a96,w)},
a97(d,e,f,g){return B.i8o(d,e,f,g)},
i8o(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a97=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JK(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a96(r),$async$a97)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.ch8())>1048576||g.aR(d,new B.ch9())){v=B.FM(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9i("myCode",d,a0),$async$a97)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cj(s)||J.aa(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FM(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3a(u,g.gI(d),a0),$async$a97)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.og().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.cha(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b33(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a97)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a97,w)},
FM(d,e,f,g,h){return B.i8l(d,e,f,g,h)},
i8l(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FM=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FM)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cF(a6,0,new B.ch4())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.og().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.B()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aH(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JO(a9,q)
a0=new A.LD(a1)
u=6
case 9:x=11
return A.b(a0.B(),$async$FM)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.aa(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f6().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nV(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acL(a1.a,a4,"media",a1.d,a2).yb(m,n,new A.F1(!0,q.c)),$async$FM)
case 12:J.bZ(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FM)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUj(r),$async$FM)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.ch5(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b33(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FM)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUj(r),$async$FM)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FM,w)},
b33(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b33=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a94(t),$async$b33)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.ch3(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a95(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b33,w)},
OT(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OT=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a94("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OT)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cj(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aO(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.B()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a0(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b34(k,a0),$async$OT)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b39(h),$async$OT)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.X4(g,a0),$async$OT)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.ch6(),q),n)
d=A.B(new A.X(r,new B.ch7(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cJ(d,0,A.dx(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a95("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OT)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OT,w)},
b34(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b34=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cj(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aO(h),r=y.f,q=0
case 3:if(!u.B()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a1(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iEY(k,j)
C.d.u(s,i)
x=5
return A.b(B.E6(l,m,"Received via My Code",t,e,i),$async$b34)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUj(s),$async$b34)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b34,w)},
ch8:function ch8(){},
ch9:function ch9(){},
cha:function cha(){},
ch4:function ch4(){},
ch5:function ch5(){},
ch3:function ch3(){},
ch6:function ch6(){},
ch7:function ch7(){},
h7t(d,e){var x=0,w=A.j(y.H)
var $async$h7t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).c9(A.e4(new B.h7u(e),!1,null,y.H)),$async$h7t)
case 2:return A.h(null,w)}})
return A.i($async$h7t,w)},
bIZ(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cj(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).c9(A.e4(new B.h7v(g,e,f),!1,null,y.y)),$async$bIZ)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIZ,w)},
h7u:function h7u(d){this.a=d},
h7v:function h7v(d,e,f){this.a=d
this.b=e
this.c=f},
WV:function WV(d,e){this.c=d
this.a=e},
aGN:function aGN(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e3G:function e3G(d,e){this.a=d
this.b=e},
WZ:function WZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGQ:function aGQ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e4P:function e4P(d){this.a=d},
e4Q:function e4Q(d){this.a=d},
e4R:function e4R(d){this.a=d},
e4O:function e4O(d,e){this.a=d
this.b=e},
e4S:function e4S(d){this.a=d},
e4T:function e4T(d){this.a=d},
e4U:function e4U(d,e){this.a=d
this.b=e},
e4V:function e4V(d,e){this.a=d
this.b=e},
e4W:function e4W(d,e){this.a=d
this.b=e},
e4X:function e4X(d){this.a=d},
e5_:function e5_(){},
e4Y:function e4Y(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
bnA:function bnA(){},
WW:function WW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGO:function aGO(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
hlm(d){var x=d.ic
if(x>=0)return C.n.M(x)
return 10},
i8q(d){var x=d.l8
if(x>=0)return x
return 4.99},
i8p(d){var x=d.lR,w=y.N
w=x.j2(x,new B.chc(),w,w)
return w},
hCO(d){var x=d.kK,w=y.N
w=x.j2(x,new B.chd(),w,w)
return w},
b37(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b37=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b37)
case 7:s=f
r=A.v(p)
r=A.aV(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b37,w)},
a99(d,e){var x=0,w=A.j(y.H),v,u
var $async$a99=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a99)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a99)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a99,w)},
WY(d){var x=0,w=A.j(y.H),v,u
var $async$WY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WY)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WY,w)},
hll(d,e){var x,w,v
if(B.i8q(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i8p(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b35(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hCO(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hCP(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hCO(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kK=w},
asf(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$asf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$asf)
case 7:s=f
r=A.v(p)
r=A.ev(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$asf,w)},
asg(d){var x=0,w=A.j(y.H),v,u,t
var $async$asg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.asf(d),$async$asg)
case 3:u=f
x=5
return A.b(A.aB(),$async$asg)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$asg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$asg,w)},
ase(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ase=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hlm(d)
if(u<=0){v=!1
x=1
break}if(B.hll(d,e)){v=!1
x=1
break}x=3
return A.b(B.asf(e),$async$ase)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ase,w)},
b36(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b36=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JM(e,d),$async$b36)
case 3:if(g){v=-1
x=1
break}u=B.hlm(d)
if(u<=0){v=-1
x=1
break}if(B.hll(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.asf(e),$async$b36)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b36,w)},
chf(d,e,f){var x=0,w=A.j(y.y),v
var $async$chf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JM(e,d),$async$chf)
case 3:if(h){v=!1
x=1
break}v=B.ase(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chf,w)},
che(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$che=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
x=3
return A.b(B.chf(d,u,i.gVw()),$async$che)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$che,w)},
a98(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a98=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
if(i.gVw()){v=!0
x=1
break}if(B.b35(d,u)){v=!0
x=1
break}x=5
return A.b(A.lY(u,C.Vu),$async$a98)
case 5:x=k?3:4
break
case 3:B.hCP(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a98)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.ly(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Vu,"Doc Share for Organizations"),$async$a98)
case 7:if(!k){v=!1
x=1
break}B.hCP(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a98)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a98,w)},
chc:function chc(){},
chd:function chd(){},
h8t(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h8t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h8t)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fym.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fym.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8t,w)},
iHf(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fym.br($.fym,new B.h8v(d))},
h8v:function h8v(d){this.a=d},
fA1(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fA1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aH(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.nm(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fA1)
case 3:C.C1.fo(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mT()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fA1,w)},
aij(d,e,f){var x=0,w=A.j(y.H),v
var $async$aij=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fz2.n(0,d,new B.aeg(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aij)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aij)
case 2:return A.h(null,w)}})
return A.i($async$aij,w)},
aid(d){return B.ip4(d)},
ip4(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aid=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fz2.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aid)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cj(s)){v=null
x=1
break}o=J.b8(s,new B.fDR(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.aeg(r)
$.fz2.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aid,w)},
St(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$St=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hy.n(0,d,u)
x=3
return A.b(B.T1(d,u),$async$St)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$St,w)},
aRV(d){return B.ip2(d)},
ip2(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hy.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T0(d),$async$aRV)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hy.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRV)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cL.aK(r)
x=!J.cj(q)?9:10
break
case 9:B.St(d,q)
x=11
return A.b(J.fO(s,d),$async$aRV)
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
return A.i($async$aRV,w)},
ikV(d){if(d==null)return A.fb(null,y.K)
if(y.J.b(d))return A.fb(new Uint8Array(A.cd(J.eA(d,0,null))),y.K)
if(y.D.b(d))return A.fb(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fb(new Uint8Array(A.cd(A.w4(d,0,null))),y.K)
if(y.I.b(d))return A.fb(new Uint8Array(A.cd(d)),y.K)
return A.fb(null,y.K)},
a3T(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cb(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fJP(r,t),!1,s)
A.fI(r,"error",new B.fJQ(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ij(0,C.Pb,new B.fJR())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3T,w)},
aSf(d,e,f){return B.irs(d,e,f)},
irs(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSf=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.n.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a3T(i),$async$aSf)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.aa(j)
x=11
return A.b(B.T1(o,p),$async$aSf)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bZ(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.aij(k,j,s),$async$aSf)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ad(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSf,w)},
aSe(d,e,f){return B.irr(d,e,f)},
irr(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSe=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSf(d,e,f),$async$aSe)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3T(f),$async$aSe)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hy.n(0,s,r)
$.SN.n(0,s,r)
x=11
return A.b(B.St(s,r),$async$aSe)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSe,w)},
CF(d,e,f,g,h,i){return B.i8z(d,e,f,g,h,i)},
i8z(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CF=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jV(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3d(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.St(s,d),$async$CF)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CF)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcq().aK(d)),$async$CF)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.an.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.By(e),$async$CF)
case 12:j=a2
J.bZ(j,m)
x=13
return A.b(B.HI(e,j),$async$CF)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CF,w)},
X_(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X_=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.By(d),$async$X_)
case 3:t=a1
s=e.length,r=J.cK(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hCR(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jV(m,n,k,l,j,"From folder",null,B.b3d(),null)
$.aiI.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3T(o),$async$X_)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hy.n(0,h,g)
$.SN.n(0,h,g)
B.St(h,g)
x=9
break
case 10:x=11
return A.b(B.aSe(d,m,o),$async$X_)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HI(d,t),$async$X_)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X_,w)},
hlq(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hlq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hCR(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JN(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CF(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hlq,w)},
JN(d,e,f,g,h,i){return B.i8y(d,e,f,g,h,i)},
i8y(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JN=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LD(A.dx(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.B(),$async$JN)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cj(m)){x=6
break}J.fV(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TC(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kA(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T1(k,l),$async$JN)
case 11:J.bZ(q,k);++p
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
return A.b(j.a2(0),$async$JN)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T1(k,new Uint8Array(A.cd(n))),$async$JN)
case 15:J.bZ(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aij(r,q,g),$async$JN)
case 16:f=new B.jV(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3d(),null)
x=17
return A.b(B.By(d),$async$JN)
case 17:e=a6
J.bZ(e,f)
x=18
return A.b(B.HI(d,e),$async$JN)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JN,w)},
X1(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X1=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiI.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3T(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aid(s),$async$X1)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T0(u[o]),$async$X1)
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
v=A.w4(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SN.h(0,s)
if(i==null)i=$.Hy.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.te(d,e),$async$X1)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SN.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w4(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X1,w)},
hCR(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
te(d,e){return B.i8A(d,e)},
i8A(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$te=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SN.h(0,f)
if(e==null)e=$.Hy.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiI.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3T(s),$async$te)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hy.n(0,f,r)
$.SN.n(0,f,r)
B.St(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ad(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aid(f),$async$te)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aec(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T0(g[l]),$async$te)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8U()
if(!C.aI.gar(r)){$.Hy.n(0,f,r)
$.SN.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRV(f),$async$te)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SN.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X1(a0,a1,0,g),$async$te)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hy.n(0,f,h)
$.SN.n(0,f,h)
B.St(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$te,w)},
i8D(d){var x,w,v=$.aiI.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i8E(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i8B(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asm(d,e,f,g,h){return B.i8C(d,e,f,g,h)},
i8C(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asm=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiI.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3T(s),$async$asm)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.te(g,e),$async$asm)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.f6().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iL(d).yb(h,r,new A.F1(!0,e.c)),$async$asm)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asm,w)},
hCT(d,e,f,g,h){var x,w,v,u,t=$.hCS
$.hCS=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.chq.n(0,t,new B.bAD(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aec(u)))
return t},
hlr(d){var x=0,w=A.j(y.H)
var $async$hlr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hlr,w)},
JO(d,e){var $async$JO=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiI.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.n.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qQ(B.X1(d,e,p,o<q?o:q),$async$JO,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qQ(A.H3(n),$async$JO,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qQ(B.aid("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JO,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qQ(B.T0(h[l]),$async$JO,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qQ(A.H3(k),$async$JO,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qQ(B.te(d,e),$async$JO,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qQ(A.H3(A.w4(j,p,o<i?o:i)),$async$JO,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qQ(null,0,w)
case 2:return A.qQ(t.at(-1),1,w)}})
var x=0,w=A.hM3($async$JO,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hOb(w)},
b3f(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.chq.h(0,d)
if(t==null||J.cj(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7b(),$async$b3f)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3f,w)},
X0(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chq.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7b(),$async$X0)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aij(r.c,u,r.z),$async$X0)
case 4:t=new B.jV(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3d(),null)
u=r.a
x=5
return A.b(B.By(u),$async$X0)
case 5:s=f
J.bZ(s,t)
x=6
return A.b(B.HI(u,s),$async$X0)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X0,w)},
a9f(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chq.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajn(u[s]),$async$a9f)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9f,w)},
chs(d,e,f){var x=0,w=A.j(y.H)
var $async$chs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFM(d,e,f),$async$chs)
case 2:return A.h(null,w)}})
return A.i($async$chs,w)},
cht(d,e,f){var x=0,w=A.j(y.H)
var $async$cht=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFN(d,e,f),$async$cht)
case 2:return A.h(null,w)}})
return A.i($async$cht,w)},
FN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.By(d),$async$FN)
case 2:p=g
J.mE(p,new B.chr(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hy.X(0,v)
$.aiI.X(0,e)
x=3
return A.b(B.aid(v),$async$FN)
case 3:u=g
$.fz2.X(0,v)
x=4
return A.b(A.aB(),$async$FN)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FN)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FN)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajn(s[q]),$async$FN)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajn(v),$async$FN)
case 13:x=14
return A.b(B.HI(d,p),$async$FN)
case 14:return A.h(null,w)}})
return A.i($async$FN,w)},
b3e(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.te(d,e),$async$b3e)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fA1(t,A.aH(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3e,w)},
By(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$By=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$By)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fJS(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$By,w)},
HI(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HI)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fOc(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$HI)
case 3:return A.h(null,w)}})
return A.i($async$HI,w)},
bFM(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.By(d),$async$bFM)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fHY(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aI6(f))
x=4
return A.b(B.HI(d,u),$async$bFM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFM,w)},
bFN(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.By(d),$async$bFN)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fHZ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cTk(f))
x=4
return A.b(B.HI(d,u),$async$bFN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFN,w)},
aeg:function aeg(d){this.a=d},
fDR:function fDR(){},
fJP:function fJP(d,e){this.a=d
this.b=e},
fJQ:function fJQ(d){this.a=d},
fJR:function fJR(){},
chr:function chr(d){this.a=d},
bAD:function bAD(d,e,f,g,h,i,j,k,l){var _=this
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
fJS:function fJS(){},
fOc:function fOc(){},
fHY:function fHY(d){this.a=d},
fHZ:function fHZ(d){this.a=d},
a9g(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.chw())?3:4
break
case 3:x=5
return A.b(B.b3g(d,e),$async$a9g)
case 5:u=g
if(u!=null){t=u.c
B.OV(d,u.b,e,t)}v=u
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
return A.b(B.b3b(s),$async$a9g)
case 10:case 9:if(g){v=new A.RO(1,D.V7,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X2(d,e),$async$a9g)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.X7(!0,!0,d,e),$async$a9g)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OV(d,D.B4,e,t)
v=new A.RO(p,D.B4,t)
x=1
break}v=B.chv(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9g,w)},
X2(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9i(null,d,e),$async$X2)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cj(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3a(p,d.length,e),$async$X2)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cht(e,C.d.gH(d).a,r.b),$async$X2)
case 7:case 6:q=r.a
x=8
return A.b(B.OV(d,D.V7,e,q),$async$X2)
case 8:v=new A.RO(d.length,D.V7,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
X3(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$X3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n_(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9h(d,e),$async$X3)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cho(s,d,e,t),$async$X3)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3b(t),$async$X3)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.te(e,d),$async$X3)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X2(A.a([d],y.r),e),$async$X3)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
X5(){var x=0,w=A.j(y.H)
var $async$X5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hlk(),$async$X5)
case 2:x=3
return A.b(B.aUF(),$async$X5)
case 3:return A.h(null,w)}})
return A.i($async$X5,w)},
a9h(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3d()
x=3
return A.b(B.chs(e,d.a,u),$async$a9h)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
OV(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.V7&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9h(p,f),$async$OV)
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
return A.b(B.chn(o,p,u,f),$async$OV)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cho(o,p,f,t),$async$OV)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.chm(o,u,p,f),$async$OV)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OV,w)},
b3g(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chu(e,d),$async$b3g)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.X7(!1,!0,d,e),$async$b3g)
case 4:u=g
if(u!=null){t=u.b
v=new A.RO(u.a,D.B4,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3g,w)},
chu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$chu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X1(d,s,0,1),$async$chu)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.I)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chu,w)},
chv(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$chv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9i(null,d,e),$async$chv)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hCQ(u)
if(t.length>800){v=null
x=1
break}v=new A.RO(d.length,D.e4_,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chv,w)},
asn(d,e,f){return B.i8H(d,e,f)},
i8H(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asn=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dc(g,"\ufeff"))g=J.nl(g,1)
x=B.hlp(g)?3:4
break
case 3:x=5
return A.b(B.chp(g),$async$asn)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dc(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nl(g,13))
try{k=B.FO(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dc(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nl(g,13))
u=9
x=12
return A.b(B.b39(q),$async$asn)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X4(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ad(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.dc(g,"NGMYDOCSYNC0|"))try{n=B.hlo(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X4(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dc(g,"N2|")){v=B.JP(C.a.i(J.nl(g,3)),d,a0)
x=1
break}if(J.dc(g,"NGMYDOCSYNC2|")){v=B.JP(C.a.i(J.nl(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cK(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JP(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.X4(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asn,w)},
JP(d,e,f){return B.i8F(d,e,f)},
i8F(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JP=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aH(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aH(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b31(r),$async$JP)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b31(A.cH(s,0,null)),$async$JP)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cj(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ch1(o,r,a1,n,a2),$async$JP)
case 11:m=a4
x=J.cj(m)?12:13
break
case 12:x=14
return A.b(B.ch0(q),$async$JP)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.X4(l,a2),$async$JP)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cj(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ad(d)
$.an.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JP,w)},
a9i(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aO(e),t=y.N,s=y.z
case 3:if(!u.B()){x=4
break}r=u.gP(u)
x=5
return A.b(B.te(f,r),$async$a9i)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcq().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9i,w)},
X4(d,e){return B.i8G(d,e)},
i8G(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X4=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.V.aP(0,a2,null)
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
e=J.aO(r)
case 7:if(!e.B()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cL.aK(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.CF(i,a3,d,k,l,o),$async$X4)
case 9:h=a5
if(h!=null)J.bZ(n,h)
x=7
break
case 8:f=J.aa(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.ad(a1)
$.an.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$X4,w)},
OU:function OU(d,e){this.a=d
this.b=e},
chw:function chw(){},
a3s(d){var x=A.Q(d).ax.a===C.I,w=x?D.aku:D.ahW,v=x?D.amk:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajr:C.bn
return new A.aJW([w,s,v,u,t,x?C.fz:C.bU])},
hU2(d,e){var x=e?C.v.j(0.72):C.ba
return A.cf(null,x,!0,null,new B.hcO(e),d,null,!0,!0,y.N)},
chb(d,e,f,g,h,i,j,k,l){return new B.WX(e,l,d,f,k,j,g,h,i,null)},
a0m(d,e,f,g,h,i,j){return new B.bi5(g,h,j,e,i,d,f,null)},
hcO:function hcO(d){this.a=d},
a0j:function a0j(d,e){this.c=d
this.a=e},
aCH:function aCH(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgW:function dgW(d){this.a=d},
dgU:function dgU(d){this.a=d},
dgV:function dgV(d){this.a=d},
bAf:function bAf(){},
WX:function WX(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGP:function aGP(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e4N:function e4N(d){this.a=d},
e4a:function e4a(d,e){this.a=d
this.b=e},
e4b:function e4b(d,e){this.a=d
this.b=e},
e3K:function e3K(d,e,f){this.a=d
this.b=e
this.c=f},
e3J:function e3J(d){this.a=d},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3Q:function e3Q(d,e,f){this.a=d
this.b=e
this.c=f},
e3P:function e3P(d){this.a=d},
e4B:function e4B(d,e){this.a=d
this.b=e},
e4C:function e4C(d){this.a=d},
e47:function e47(d,e,f){this.a=d
this.b=e
this.c=f},
e44:function e44(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3O:function e3O(d){this.a=d},
e4f:function e4f(d){this.a=d},
e4e:function e4e(){},
e3U:function e3U(d){this.a=d},
e4y:function e4y(d,e){this.a=d
this.b=e},
e4z:function e4z(d,e){this.a=d
this.b=e},
e4A:function e4A(d,e){this.a=d
this.b=e},
e45:function e45(d,e){this.a=d
this.b=e},
e46:function e46(d,e){this.a=d
this.b=e},
e4r:function e4r(d,e){this.a=d
this.b=e},
e4n:function e4n(d){this.a=d},
e4m:function e4m(d){this.a=d},
e4o:function e4o(){},
e4p:function e4p(){},
e4q:function e4q(d,e){this.a=d
this.b=e},
e4s:function e4s(){},
e4t:function e4t(d){this.a=d},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4g:function e4g(d){this.a=d},
e4h:function e4h(d){this.a=d},
e4i:function e4i(d){this.a=d},
e4j:function e4j(d){this.a=d},
e4k:function e4k(d){this.a=d},
e3R:function e3R(){},
e3S:function e3S(d){this.a=d},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3N:function e3N(d,e){this.a=d
this.b=e},
e3M:function e3M(d,e,f){this.a=d
this.b=e
this.c=f},
e48:function e48(d){this.a=d},
e49:function e49(d,e,f){this.a=d
this.b=e
this.c=f},
e42:function e42(d,e){this.a=d
this.b=e},
e3Z:function e3Z(d){this.a=d},
e3W:function e3W(d,e,f){this.a=d
this.b=e
this.c=f},
e4_:function e4_(d){this.a=d},
e40:function e40(d){this.a=d},
e41:function e41(){},
e43:function e43(d,e){this.a=d
this.b=e},
e3X:function e3X(d){this.a=d},
e3V:function e3V(d,e,f){this.a=d
this.b=e
this.c=f},
e3Y:function e3Y(){},
e4d:function e4d(d){this.a=d},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4x:function e4x(d,e){this.a=d
this.b=e},
e4u:function e4u(d){this.a=d},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4w:function e4w(d){this.a=d},
e4K:function e4K(d){this.a=d},
e4I:function e4I(d){this.a=d},
e4J:function e4J(d){this.a=d},
e4L:function e4L(){},
e4M:function e4M(d,e){this.a=d
this.b=e},
e4E:function e4E(d,e){this.a=d
this.b=e},
e4F:function e4F(d,e,f){this.a=d
this.b=e
this.c=f},
e4D:function e4D(d,e,f){this.a=d
this.b=e
this.c=f},
e4G:function e4G(d,e){this.a=d
this.b=e},
e4H:function e4H(d,e){this.a=d
this.b=e},
aCE:function aCE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bi4:function bi4(d,e,f){this.c=d
this.d=e
this.a=f},
dgS:function dgS(){},
dgT:function dgT(){},
aeA:function aeA(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dhf:function dhf(){},
dhe:function dhe(d){this.a=d},
a0l:function a0l(d,e,f){this.c=d
this.d=e
this.a=f},
aCJ:function aCJ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dhb:function dhb(d){this.a=d},
dhc:function dhc(d,e,f){this.a=d
this.b=e
this.c=f},
dhd:function dhd(d,e){this.a=d
this.b=e},
dh9:function dh9(d,e){this.a=d
this.b=e},
dh7:function dh7(d){this.a=d},
dh5:function dh5(d){this.a=d},
dh2:function dh2(d){this.a=d},
dh8:function dh8(d){this.a=d},
dh4:function dh4(d){this.a=d},
dha:function dha(d){this.a=d},
dh6:function dh6(d){this.a=d},
dh3:function dh3(d){this.a=d},
a0i:function a0i(d,e,f){this.c=d
this.d=e
this.a=f},
aCG:function aCG(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dgP:function dgP(d){this.a=d},
dgO:function dgO(d,e){this.a=d
this.b=e},
dgQ:function dgQ(d){this.a=d},
dgN:function dgN(d,e){this.a=d
this.b=e},
dgR:function dgR(d){this.a=d},
dgM:function dgM(d,e){this.a=d
this.b=e},
dgI:function dgI(d){this.a=d},
dgJ:function dgJ(d){this.a=d},
dgK:function dgK(d,e){this.a=d
this.b=e},
dgL:function dgL(d){this.a=d},
Rm:function Rm(d,e,f){this.c=d
this.d=e
this.a=f},
aCM:function aCM(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dhs:function dhs(d){this.a=d},
dht:function dht(d){this.a=d},
dhu:function dhu(d){this.a=d},
dhv:function dhv(d){this.a=d},
dhw:function dhw(d,e){this.a=d
this.b=e},
dhx:function dhx(d){this.a=d},
dhz:function dhz(d){this.a=d},
dhy:function dhy(d){this.a=d},
a0n:function a0n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCK:function aCK(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dho:function dho(d,e){this.a=d
this.b=e},
dhp:function dhp(d,e){this.a=d
this.b=e},
dhg:function dhg(d,e,f){this.a=d
this.b=e
this.c=f},
dhh:function dhh(d){this.a=d},
dhi:function dhi(){},
dhn:function dhn(){},
dhj:function dhj(d,e){this.a=d
this.b=e},
dhk:function dhk(d,e){this.a=d
this.b=e},
dhl:function dhl(d,e){this.a=d
this.b=e},
dhm:function dhm(d,e){this.a=d
this.b=e},
aey:function aey(d,e){this.c=d
this.a=e},
dgH:function dgH(d){this.a=d},
a0h:function a0h(d){this.a=d},
aCF:function aCF(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0o:function a0o(d,e){this.c=d
this.a=e},
aCL:function aCL(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dhr:function dhr(d){this.a=d},
dhq:function dhq(d){this.a=d},
bi5:function bi5(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i8I(){var x,w=$.og(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.ho(v)},
OW(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OW=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OW)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bM),$async$OW)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OW,w)},
a9j(d){return B.i8J(d)},
i8J(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9j)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$a9j)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9j,w)},
X6(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$X6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OW(),$async$X6)
case 3:s=g
r=J.a1(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9j(s),$async$X6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X6,w)},
X7(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$X7=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$X7)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.chy(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i8I()
t=A.U(u).k("O<1,a9<o,aF>>")
r=A.B(new A.O(u,new B.chz(s),t),t.k("aj.E"))
x=6
return A.b(B.OW(),$async$X7)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9j(q),$async$X7)
case 7:x=8
return A.b(B.a9k(r,u,g,s),$async$X7)
case 8:v=new A.bu3(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X7,w)},
aso(d){var x=0,w=A.j(y.y),v,u,t
var $async$aso=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OW(),$async$aso)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aso,w)},
chA(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OW(),$async$chA)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a1(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chA,w)},
a9k(d,e,f,g){return B.i8K(d,e,f,g)},
i8K(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9k=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.asm("media",r,new B.chx(s,e,g),f,q),$async$a9k)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.X6(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9k)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.X6(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9k)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.X6(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9k)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9k,w)},
FO(d,e,f){return B.i8L(d,e,f)},
i8L(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FO=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FO)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aso(b3),$async$FO)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FO)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aso(b3),$async$FO)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OW(),$async$FO)
case 10:e=c0
g=J.a1(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a1(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cj(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a1(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.B()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a1(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.f6().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nV(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acL(a8.a,b0,"media",a8.d,a9).DY(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b32(k,n,o,s,b7),$async$FO)
case 17:j=c0
if(j!=null){J.bZ(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ad(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.aa(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.X(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.B()){x=22
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.f6().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nV(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acL(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FO)
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
a0=A.dE(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9j(e),$async$FO)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FO,w)},
chy:function chy(){},
chz:function chz(d){this.a=d},
chx:function chx(d,e,f){this.a=d
this.b=e
this.c=f},
aUF(){var x=0,w=A.j(y.H),v,u
var $async$aUF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ikc=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aUF)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aUF)
case 3:u=$.hr6
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aUF)
case 4:$.hr6=$.itr=$.its=null
return A.h(null,w)}})
return A.i($async$aUF,w)},
fNO(d){var x=0,w=A.j(y.H),v,u
var $async$fNO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abi){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fNP(new A.cb(u,y.aY))
x=3
return A.b(u.ij(0,C.hc,new B.fNQ()),$async$fNO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fNO,w)},
ito(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i8s(x):x},
hrb(d){var x=0,w=A.j(y.T),v,u,t
var $async$hrb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asq(u)
x=1
break}v=B.hlo(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hrb,w)},
hra(d){var x=0,w=A.j(y.T),v,u,t
var $async$hra=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asr(u)
x=1
break}v=B.hlo(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hra,w)},
h8c(d){var x=0,w=A.j(y.T),v
var $async$h8c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asr(d),$async$h8c)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8c,w)},
bGK(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hra(d),$async$bGK)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGK,w)},
fAS(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fAS=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X0(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CF(d.a8U(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAS,w)},
HJ(d,e,f){return B.ivP(d,e,f)},
ivP(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HJ=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hrb(a1),$async$HJ)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a1(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hW3().aIo(D.dNP,null),$async$HJ)
case 4:l=d.hr6=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aec(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fOp(f,k,new B.fOq(f,a2,k,j,a0,p),a2,j,a0,p,new A.cb(t,y.ch))
x=5
return A.b(l.aag(0,new B.Zk(r,"offer")),$async$HJ)
case 5:d=l
x=7
return A.b(l.ao4(0),$async$HJ)
case 7:x=6
return A.b(d.aa8(0,a4),$async$HJ)
case 6:x=8
return A.b(B.fNO(l),$async$HJ)
case 8:x=9
return A.b(l.ast(),$async$HJ)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ito(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ass(m,h),$async$HJ)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hCQ(h)
case 11:v=new A.bth(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HJ,w)},
fNP:function fNP(d){this.a=d},
fNQ:function fNQ(){},
fOq:function fOq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fOp:function fOp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fOo:function fOo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ixU(d){switch(d){case"new":return D.ePc
case"checking":return D.ePd
case"connected":return D.ePf
case"completed":return D.ePe
case"failed":return D.ePh
case"disconnected":return D.ePi
case"closed":return D.aTQ
case"count":return D.ePg}return D.aTQ},
ixV(d){switch(d){case"new":return D.aTR
case"gathering":return D.ePj
case"complete":return D.abi}return D.aTR},
iIR(d){switch(d){case"stable":return D.ePk
case"have-local-offer":return D.ePl
case"have-local-pranswer":return D.ePn
case"have-remote-offer":return D.ePm
case"have-remote-pranswer":return D.ePo
case"closed":return D.aTX}return D.aTX},
iGX(d){switch(d){case"new":return D.aTU
case"connecting":return D.aTV
case"connected":return D.aTW
case"closed":return D.abj
case"disconnected":return D.aTT
case"failed":return D.aTS}return D.abj},
abI:function abI(d,e){this.a=d
this.b=e},
Q5:function Q5(d,e){this.a=d
this.b=e},
Zj:function Zj(d,e){this.a=d
this.b=e},
Q4:function Q4(d,e){this.a=d
this.b=e},
Gi:function Gi(d,e){this.a=d
this.b=e},
cvF:function cvF(){},
hnh(d){var x=new B.Gh()
x.a=d
x.b=!0
return x},
Gh:function Gh(){this.b=this.a=$},
abH:function abH(){},
awZ:function awZ(){},
Zk:function Zk(d,e){this.a=d
this.b=e},
hlk(){var x=0,w=A.j(y.H)
var $async$hlk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hlk,w)},
hln(d,e,f){var x=0,w=A.j(y.T),v
var $async$hln=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n_(D.ns))){v=null
x=1
break}v=B.h8t(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hln,w)},
hCQ(d){var x,w=F.ahm.a6V(C.e3.aK(d),null)
if(w.length===0){x=C.e3.aK(d)
return C.cS.gcq().aK(x)}return C.cS.gcq().aK(w)},
i8r(d){var x,w,v=C.cL.aK(d)
try{x=C.cg.cH(0,F.ahl.biB(v,!1))
return x}catch(w){x=C.cg.cH(0,v)
return x}},
hlo(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i8r(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cg.cH(0,C.cL.aK(x))
return v}catch(u){return x}}return null},
i8s(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Y(t,"a=extmap"))continue
if(C.a.Y(t,"a=ssrc"))continue
if(C.a.Y(t,"a=msid"))continue
if(C.a.Y(t,"a=rtcp"))continue
if(C.a.Y(t,"a=rtpmap"))continue
if(C.a.Y(t,"a=fmtp"))continue
if(C.a.Y(t,"a=rtcp-fb"))continue
if(C.a.Y(t,"a=mid:"))continue
if(C.a.Y(t,"a=group:"))continue
if(C.a.Y(t,"a=setup:"))continue
if(C.a.Y(t,"a=ice-options:"))continue
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aL(s,"\n")},
i8t(){var x,w=$.og(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.ho(v)},
b38(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b38=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bM),$async$b38)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b38,w)},
chg(d,e){return B.i8u(d,e)},
i8u(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$chg=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cZ,null),$async$chg)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$chg,w)},
b3b(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b38(d),$async$b3b)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3b,w)},
b3a(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i8t()
r=C.a.i(f)
t=C.e3.aK(s)
x=3
return A.b(B.chg(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcq().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3a)
case 3:if(!h){v=null
x=1
break}v=new A.a2r("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3a,w)},
b39(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b39=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.b38(o),$async$b39)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.cg.cH(0,C.cL.aK(u))
if(J.j9(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b39,w)},
chh(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$chh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(O.bHJ("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cZ),$async$chh)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$chh,w)},
b3c(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JL(),$async$b3c)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3c,w)},
asj(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$asj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asj)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3c(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asj,w)},
ash(d,e){var x=0,w=A.j(y.H)
var $async$ash=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$ash)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ash)
case 2:return A.h(null,w)}})
return A.i($async$ash,w)},
a9b(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9b)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JL(),$async$a9b)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dy(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9a(s),$async$a9b)
case 5:x=6
return A.b(B.ash(f,u),$async$a9b)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9b,w)},
a9c(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9c=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9c)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JL(),$async$a9c)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a1(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a0(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.X(u,t)
s.n(u,o,p)
x=8
return A.b(B.ash(g,q),$async$a9c)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9a(u),$async$a9c)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9c,w)},
a9d(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9d)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JL(),$async$a9d)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a1(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b35(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9d)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9d)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9d,w)},
chi(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$chi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$chi)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a0(q,y.N,y.z)
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
return A.i($async$chi,w)},
JM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chi(d),$async$JM)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3c(t),$async$JM)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asi(d),$async$JM)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b35(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asi(d),$async$JM)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JM,w)},
asi(d){var x=0,w=A.j(y.H)
var $async$asi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asi)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asi)
case 2:return A.h(null,w)}})
return A.i($async$asi,w)},
b3d(){var x,w=$.og(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.ho(v)},
a9e(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aH(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hlp(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
chl(d){return B.i8w(d)},
i8w(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$chl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9e(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bM),$async$chl)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$chl,w)},
asl(d,e){return B.i8x(d,e)},
i8x(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9e(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cZ,null),$async$asl)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asl,w)},
chn(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chn=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9e(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asl(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chn,w)},
chm(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9e(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asl(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chm,w)},
cho(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cho=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9e(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asl(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cho,w)},
chp(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$chp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hlp(d)){v=null
x=1
break}x=3
return A.b(B.chl(d),$async$chp)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a1(u)
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
return A.i($async$chp,w)},
a9l(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9l=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9l)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bM),$async$a9l)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9l,w)},
asp(d){return B.i8M(d)},
i8M(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asp)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$asp)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asp,w)},
asq(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.dc(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asq)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9l(),$async$asq)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.cg.cH(0,C.cL.aK(q))
if(J.j9(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asp(s),$async$asq)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ad(i)
$.an.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asq,w)},
ass(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ass=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$ass)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9l(),$async$ass)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e3.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcq().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asp(u),$async$ass)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ass,w)},
asr(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asr)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9l(),$async$asr)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.cg.cH(0,C.cL.aK(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asr,w)},
ari(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ari=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oD)){v=null
x=1
break}x=3
return A.b(p.lC(e),$async$ari)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hq),$async$ari)
case 7:q=g
o=q
o=o==null?null:J.eX(J.v1(o))
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
return A.i($async$ari,w)},
iEY(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h6l(d){return B.iF_(d)},
iF_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h6l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iL("media").Mn(d,3600),$async$h6l)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$h6l,w)},
E6(d,e,f,g,h,i){var x=null
return B.iEX(d,e,f,g,h,i)},
iEX(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E6=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hCT(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hlr(r),$async$E6)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h6l(o),$async$E6)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9f(r),$async$E6)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aXA)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.In(A.a([],g))
x=15
return A.b(d.fe(0,A.axN("GET",A.cH(n,0,null))).d8(0,C.HG),$async$E6)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9f(r),$async$E6)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LD(d)
u=19
case 22:x=24
return A.b(d.B(),$async$E6)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3f(r,k),$async$E6)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$E6)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X0(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ad(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a9f(r),$async$E6)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E6,w)},
aUj(d){return B.iEZ(d)},
iEZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iL("media").X(0,d),$async$aUj)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aUj,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[67]
I=c[99]
P=c[311]
Q=c[53]
F=c[304]
K=c[183]
G=c[69]
R=c[269]
S=c[270]
E=c[261]
H=c[101]
T=c[235]
U=c[72]
V=c[184]
W=c[267]
L=c[249]
X=c[296]
M=c[312]
B=a.updateHolder(c[27],B)
D=c[310]
Y=c[234]
N=c[243]
Z=c[78]
A_=c[86]
B.cvG.prototype={
aIo(d,e){return this.cUP(d,e)},
cUP(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aIo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kD(A.cz(t)))
t=J.k(u)
v=B.idB(C.cS.gcq().aK(new A.d0(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aIo,w)}}
B.b8q.prototype={
bF3(d){var x=this,w=x.w
w.onclose=A.hG(new B.cvB(x))
w.onopen=A.hG(new B.cvC(x))
w.onmessage=A.hG(new B.cvD(x))
w.onbufferedamountlow=A.hG(new B.cvE(x))},
gd5(d){return this.x},
akk(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$akk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gh()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hnh(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ej(d.arrayBuffer(),y.af),$async$akk)
case 8:v=t.hnh(s.aqr(f,0,null))
x=1
break
case 7:case 4:v=B.hnh(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akk,w)}}
B.b8r.prototype={
bF4(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvH(x)))
w.addEventListener("icecandidate",A.hG(new B.cvI(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvJ(x)))
w.onicegatheringstatechange=A.hG(new B.cvK(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvL(x)))
if(!$.hvm())w.addEventListener("connectionstatechange",A.hG(new B.cvM(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cvN(x)))
w.addEventListener("track",A.hG(new B.cvO(x)))},
ao4(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ao4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ej(s.createAnswer(A.kD(A.cz(A.S(y.N,y.z)))),y.aQ),$async$ao4)
case 3:t=f
v=new B.Zk(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao4,w)},
aa8(d,e){return this.btY(0,e)},
btY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aa8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aa8)
case 2:return A.h(null,w)}})
return A.i($async$aa8,w)},
aag(d,e){return this.bui(0,e)},
bui(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aag=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ej(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aag)
case 2:return A.h(null,w)}})
return A.i($async$aag,w)},
ast(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ast=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zk(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ast,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fb(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aez.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0k.prototype={
R(){return new B.aCI()},
gd7(){return this.c}}
B.aCI.prototype={
Z(){this.a4()
this.agQ()},
agQ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b36(u.e,u.c),$async$agQ)
case 2:t=e
if(v.c!=null)v.l(new B.dh_(v,t))
return A.h(null,w)}})
return A.i($async$agQ,w)},
S1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ase(t.e,t.c,!1),$async$S1)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fEx)
x=1
break}x=4
return A.b(B.a99(u.a.c,"individual"),$async$S1)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a8u(A.e4(new B.dgX(u),!1,null,y.H)),$async$S1)
case 5:case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
KE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$KE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fLA(o),$async$KE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9d(o.e,r,s,q),$async$KE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fBw)
x=1
break}x=5
return A.b(B.a99(u.a.c,"member"),$async$KE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a8u(A.e4(new B.dgZ(u),!1,null,y.H)),$async$KE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$KE,w)},
zb(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a98(t.e,o,t.f,t.r,t.w,s),$async$zb)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a99(u.a.c,"org_owner"),$async$zb)
case 4:x=5
return A.b(B.asj(u.a.c),$async$zb)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fM4(o),$async$zb)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9b(s,t,o,q.c),$async$zb)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fBs)
x=1
break}x=10
return A.b(B.asj(u.a.c),$async$zb)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a8u(A.e4(new B.dgY(u),!1,null,y.H)),$async$zb)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zb,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nW:C.nh,p=B.hlm(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aG(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ac(0,C.H,C.az.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.fYZ,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.aB,D.hif,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cf1,C.m),s,s,s,s,C.ew,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lU(new B.dh1(),s),C.N,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.af2(C.f9,C.aGg,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcna(),s),C.af],u))
w.push(new B.af2(C.q6,C.a6H,"Team Member","Sign in with your organization access code + password",t.gco5(),s))
w.push(C.af)
w.push(new B.af2(C.as5,C.a8m,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcnA(),s))
return A.c6(s,q,A.bn(!0,A.cc(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.af2.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eM(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lR,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.zZ,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFo.prototype={}
B.aIF.prototype={}
B.jV.prototype={
n_(d){var x=this.b,w=C.a.pr(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gat8(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.a1(x/1024,1)+" KB"
if(x<1073741824)return C.h.a1(x/1048576,1)+" MB"
return C.h.a1(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.S(y.N,y.z)
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
bi3(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cTk(d){return this.bi3(null,d)},
aI6(d){return this.bi3(d,null)}}
B.WV.prototype={
R(){return new B.aGN(new A.cB(null,y.A))},
gd7(){return this.c}}
B.aGN.prototype={
Z(){this.a4()
this.agR()},
agR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CE(u.a.c),$async$agR)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e3G(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agR,w)},
agS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$agS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fP(new A.fD(s)),$async$agS)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fFs)
case 1:return A.h(v,w)}})
return A.i($async$agS,w)},
a0M(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0M=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ari(s.d,4),$async$a0M)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rG(r,"ngmy_my_code_"+m+".png"),$async$a0M)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ad(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0M,w)},
akL(){var x=0,w=A.j(y.H),v,u=this,t
var $async$akL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ack("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$akL)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akL,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nW:C.nh,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l2
else if(q.e==null)x=A.at(new A.C(C.ew,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AD,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aoB,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.H,C.az.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.ny,w,C.lp,new A.e9(A.q(p,A.qw(p,p,!1,B.i8n(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lp,A.A(A.a([A.E(A.en(I.E6,p,C.Xz,q.gcf8(),p),1),C.ar,A.E(A.df(C.Ar,p,C.adF,q.gcf9(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a5(1/0,p,A.en(N.a5u,p,D.hdJ,q.gcDn(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apc,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.WZ.prototype={
R(){return new B.aGQ(new A.au(C.ay,$.ay()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.aGQ.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JK(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a0N(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JK(u.d.a.a)
if(t==null){u.l(new B.e4P(u))
x=1
break}u.l(new B.e4Q(u))
s=u.a
r=s.c
x=3
return A.b(B.a97(s.d,new B.e4R(u),t,r),$async$a0N)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e4S(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0N,w)},
a4j(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4j=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cj(r.a.d)){x=1
break}r.l(new B.e4T(r))
u=4
q=J.eK(r.a.d)
x=7
return A.b(B.te(r.a.c,q),$async$a4j)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e4U(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aka(p,m,l,j,k),$async$a4j)
case 8:o=e
if(r.c!=null)r.l(new B.e4V(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e4W(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e4X(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4j,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.aku:D.ahW,h=j?D.amk:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajr:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eQ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c1W,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AD,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vh(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnA()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aP(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pw,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e4Y(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.Eg(l.a.d,4)
m=A.B(new A.O(m,new B.e4Z(x,new A.aJW(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.kO,A.c("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fzX)
else q.push(A.V(C.kQ,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cY(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b_,new A.p(u,k,s,t,k,k,C.m),C.j4,k,k,k,k,C.f_,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bJZ,k,k,C.ah),1)
u=l.f?k:l.gcDo()
t=i[3]
s=i[1]
q=A.n(16)
s=A.en(N.a5u,k,D.heQ,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcfa()
t=A.bp(C.az,k,k,0,C.c,k,C.o3,k,new A.ba(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ac,C.t,A.a([f,v,A.bn(!0,A.l3(new B.e5_(),A.w(A.a([e,new A.C(D.bJs,A.w(A.a([s,C.N,i,C.af,A.bH(l.f?C.uw:D.hd3,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1J,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnA.prototype={
pn(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fl(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hl(C.bB,v.length),C.aP)}}
B.WW.prototype={
R(){return new B.aGO()}}
B.aGO.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bb(w,C.b9,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bb(x,C.b9,C.aP),v)
u.f!==$&&A.aT()
u.f=new A.au(C.ay,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.ay()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a3()},
agT(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agT=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e3H(r))
u=3
p=r.a
o=p.c
p=p.d
n=r.d
n===$&&A.d()
n=n.a.a
m=r.e
m===$&&A.d()
m=m.a.a
m=C.a.i(m)!==C.a.i(p)?m:null
l=r.f
l===$&&A.d()
l=l.a.a
x=6
return A.b(B.a9c(p,m,n,o,C.a.i(l).length===0?null:l),$async$agT)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fF3)
s=[1]
x=4
break}p.L(y.q).f.T(D.fDF)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e3I(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agT,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nW:C.nh,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h5n,s,s,s,1,s,!0),p=A.q(s,D.bBv,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.J4,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aP(),o,s,s,s,s,s,2,D.c9l,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aP(),x,s,s,s,s,s,2,D.c9g,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aP(),w,s,s,s,s,s,2,D.c9w,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcfb()
u=A.bp(C.az,s,s,s,s,C.ht,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.uw:C.b_v,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.aeg.prototype={}
B.bAD.prototype={
a7b(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8U()))
x=3
return A.b(B.T1(t,s),$async$a7b)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7b,w)},
gd7(){return this.a}}
B.OU.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0j.prototype={
R(){return new B.aCH(new A.au(C.ay,$.ay()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.aCH.prototype={
Z(){this.a4()
$.aS.U$.push(new B.dgW(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cfh(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3s(d),u=x.a.c,t=u?C.iZ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nW:v.a[0],p=A.n(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.H,C.az.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.auS,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ac(0,C.H,C.az.j(0.4),C.cy,16)],n),C.avJ,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vh(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAf()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aP(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.Dh,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b94),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dgU(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.eB(w,C.L,new A.cQ(T.N6,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xg,A.w(A.a([l,C.aN,k,C.N,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dV(C.ox,new B.dgV(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.ba(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ac(0,C.H,C.az.j(0.35),C.cN,12)],n),M.RG,C.m),C.bm,A.aE(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eIx,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcfg(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PE,w,C.db,w,w,w)}}
B.bAf.prototype={
pn(d,e){return e.anZ(e.a.toUpperCase())}}
B.WX.prototype={
R(){return new B.aGP(A.a([],y.r),A.aR(y.N))},
gd7(){return this.c}}
B.aGP.prototype={
Z(){var x=this
x.a4()
x.uJ()
x.w=A.d5(C.jX,new B.e4N(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.X5()
this.a3()},
a37(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a37=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OT(u.a.c),$async$a37)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.By(u.a.c),$async$a37)
case 4:u.l(new s.e4a(u,e))
u.iw("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a37,w)},
uJ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OT(u.a.c),$async$uJ)
case 3:t=e
x=4
return A.b(B.By(u.a.c),$async$uJ)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e4b(u,s))
if(t>0)u.iw("Received "+A.v(t)+" file(s) via My Code.")
u.P4(u.d)
B.CE(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uJ,w)},
P4(d){return this.bJb(d)},
bJb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$P4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9h(r,u.a.c),$async$P4)
case 8:p=f
if(u.c==null){x=1
break}new B.e3K(u,r,p).$0()
u.c.ey()
case 7:if(!(C.a.Y(r.c,"video/")||r.n_(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.X3(r,u.a.c),$async$P4)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.By(u.a.c),$async$P4)
case 12:u.l(new o.e3L(u,f))
case 1:return A.h(v,w)}})
return A.i($async$P4,w)},
Pu(d){return this.bPD(d)},
bPD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9h(d,u.a.c),$async$Pu)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e3Q(u,d,t))
x=6
return A.b(A.fP(new A.fD(t)),$async$Pu)
case 6:u.iw("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fP(new A.fD(r.toUpperCase())),$async$Pu)
case 7:u.iw("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Pu,w)},
iw(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uK(d,e){return this.cOA(d,e)},
cOA(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e4B(r,e))
u=3
x=6
return A.b(d.$0(),$async$uK)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e4C(r))
$.eY.mT()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uK,w)},
gaZX(){var x=this.a
return x.f||x.r||x.w},
Jp(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Jp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZX()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.che(s,n,r,q,o,t),$async$Jp)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iw("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fZM(o,u.a.c),$async$Jp)
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
return A.b(B.E8(s,o,r,q,n,t),$async$Jp)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jp,w)},
a27(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a27=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asj(u.a.c),$async$a27)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iw("No organization portal found.")
x=1
break}t=J.a1(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a8(t,!1).c9(A.e4(new B.e47(u,r,q),!1,null,y.H)),$async$a27)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a27,w)},
a3i(d){return this.cwK(d)},
cwJ(){return this.a3i(1)},
cwK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZX()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.asg(u.a.c),$async$a3i)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
aeE(d,e,f){return this.c5J(d,e,f)},
c5J(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aeE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iw(e)
x=1
break}x=3
return A.b(u.uK(new B.e44(u,d,null,e,f),"Uploading\u2026"),$async$aeE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeE,w)},
bJk(){B.hSZ(!1,new B.e3O(this))
return},
cBV(){this.l(new B.e4f(this))},
aCw(){var x=0,w=A.j(y.H),v=this
var $async$aCw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bJk()
return A.h(null,w)}})
return A.i($async$aCw,w)},
aeA(){var x=0,w=A.j(y.H),v=this
var $async$aeA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uK(new B.e3U(v),"Importing\u2026"),$async$aeA)
case 2:return A.h(null,w)}})
return A.i($async$aeA,w)},
U3(d){return this.cNS(d)},
cNS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$U3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n_(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).c9(A.e4(new B.e4y(u,d),!1,null,y.H)),$async$U3)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n_(D.TK)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).c9(A.e4(new B.e4z(u,d),!1,null,y.H)),$async$U3)
case 8:x=1
break
case 7:x=u.c6r(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).c9(A.e4(new B.e4A(u,d),!1,null,y.H)),$async$U3)
case 11:x=1
break
case 10:u.iw("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$U3,w)},
c6r(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pr(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cZ0,C.a.aV(x,w+1).toLowerCase())},
aiv(d){return this.cne(d)},
cne(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n_(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).c9(A.e4(new B.e45(u,d),!1,null,y.H)),$async$aiv)
case 5:x=1
break
case 4:u.l(new B.e46(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiv,w)},
Tp(d){return this.cES(d)},
cES(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Tp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iw("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pW(t,s.c,s.f),$async$Tp)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uK(new B.e4r(u,d),"Preparing QR\u2026"),$async$Tp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Tp,w)},
ala(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ala=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e4s(),A.U(t).k("O<1,o>")).fG(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e4t(q),s),s.k("M.E"))
if(r.length===0){u.iw("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Tp(r),$async$ala)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ala,w)},
al3(d){return this.cEp(d)},
cEp(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$al3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3s(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e4l(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$al3)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.U3(d)
break
case"qr":u.Tp(A.a([d],y.r))
break
case"send_my_code":u.cnV(A.a([d],y.r))
break
case"save":u.aks(d)
break
case"delete":u.Kk(d)
break}case 1:return A.h(v,w)}})
return A.i($async$al3,w)},
Zu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3R(),A.U(t).k("O<1,o>")).fG(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3S(q),s),s.k("M.E"))
if(r.length===0){u.iw("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pW(t,s.c,s.f),$async$Zu)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uK(new B.e3T(u,r),"Preparing file\u2026"),$async$Zu)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zu,w)},
ajA(d){return this.cv0(d)},
cv0(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hU2(d,!1),$async$ajA)
case 3:s=f
r=s==null
q=B.a9e(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iw("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajA,w)},
aiB(){var x=0,w=A.j(y.H),v=this,u
var $async$aiB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h7t(u,v.a.c),$async$aiB)
case 2:return A.h(null,w)}})
return A.i($async$aiB,w)},
bJj(){B.hSZ(!1,new B.e3N(this,null))
return},
KD(d,e){return this.cnW(d,e)},
b5J(d){return this.KD(null,d)},
cnV(d){return this.KD(d,null)},
cnW(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$KD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e48(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y6.cr().aqM(!0,C.a3B,!1),$async$KD)
case 10:r=g
if(r==null||J.cj(r.a)){x=1
break}x=11
return A.b(s.uK(new B.e49(l,s,r),"Preparing\u2026"),$async$KD)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iw("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iw("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bIZ(p,l,e,s.a.c),$async$KD)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iw("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$KD,w)},
JG(d){return this.c5w(d)},
c5w(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$JG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i8m(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5J(t),$async$JG)
case 8:x=6
break
case 7:u.iw("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iw("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uK(new B.e42(u,d),"Receiving video\u2026"),$async$JG)
case 11:x=1
break
case 10:x=12
return A.b(u.uK(new B.e43(u,d),"Receiving\u2026"),$async$JG)
case 12:case 1:return A.h(v,w)}})
return A.i($async$JG,w)},
Fs(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Fs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E2()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajA(t),$async$Fs)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.JG(s),$async$Fs)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).c9(A.e4(new B.e4d(u),!1,null,y.N)),$async$Fs)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uJ(),$async$Fs)
case 10:x=1
break
case 9:x=11
return A.b(u.JG(C.a.i(r)),$async$Fs)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Fs,w)},
aks(d){return this.cAo(d)},
cAo(d){var x=0,w=A.j(y.H),v=this
var $async$aks=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uK(new B.e4c(v,d),"Saving\u2026"),$async$aks)
case 2:return A.h(null,w)}})
return A.i($async$aks,w)},
Kk(d){return this.bS1(d)},
bS1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Kk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lG(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Kk)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.chh(t),$async$Kk)
case 6:case 5:s=d.a
x=7
return A.b(B.FN(u.a.c,s),$async$Kk)
case 7:u.r.X(0,s)
x=8
return A.b(u.uJ(),$async$Kk)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Kk,w)},
alg(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3s(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e4x(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alg)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aiB()
break
case"import":u.aeA()
break}case 1:return A.h(v,w)}})
return A.i($async$alg,w)},
cfe(d){var x=d.c
if(C.a.Y(x,"video/")||d.n_(D.ns))return C.rA
if(C.a.Y(x,"image/")||d.n_(D.TK))return C.vC
if(C.a.q(x,"pdf"))return S.IK
return D.asu},
C(d){var x,w,v=this,u=null,t=B.a3s(d),s=t.a,r=s[0],q=s[3],p=A.aJ(u,u,u,u,C.IX,u,u,u,new B.e4I(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aJ(u,u,u,u,D.c2x,u,u,u,v.e?u:v.gcnB(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcBU()
n.push(A.aJ(u,u,u,u,A.V(v.r.a===x?D.bXy:E.asT,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aJ(u,u,u,u,C.a5q,u,u,u,v.e?u:v.gcff(),u,u,u,u,"Scan QR",u))
n.push(A.aJ(u,u,u,u,C.p8,u,u,u,v.e?u:v.gb6Q(),u,u,u,u,"Upload files",u))
n.push(A.aJ(u,u,u,u,D.c4l,u,u,u,v.e?u:new B.e4J(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lU(new B.e4K(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jI(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCE(C.jI,s,!0,t,w?u:v.gcET(),u),1)
x.push(new A.C(C.aoz,A.l3(new B.e4L(),A.A(A.a([s,C.ar,A.E(new B.aCE(C.tT,"Export",!1,t,w?u:v.gbVU(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iP,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bi4(t,v.e?u:v.gb6Q(),u)
else s=A.kt(!0,u,u,new B.e4M(v,t),s,u,D.bI4,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCE.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tI,t,new A.ba(s,C.a1),t,t,t)
return A.df(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cf,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tI,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.en(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bi4.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l3(new B.dgS(),new A.C(E.a2I,A.w(A.a([A.l3(new B.dgT(),A.q(x,A.V(C.A2,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eg,C.hy,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.df(C.p8,x,D.hiz,this.d,A.bp(C.az,x,x,x,C.c,x,C.PC,x,new A.ba(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D3,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeA.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.n_(D.ns))p=D.dC1
else{p=C.a.Y(p,"image/")||i.n_(D.TK)
n=y.O
p=p?A.a([C.cY,C.az],n):A.a([C.aO.j(0.85),C.az.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gat8()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n_(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.w(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aJ(j,j,j,j,A.V(C.h2,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n_(D.ns)))l.push(A.hj9(C.az,!1,j,j,j,!1,j,j,new B.dhe(k),j,j,new A.ba(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p4,x[4],j,j,j,j)
l.push(A.aJ(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l3(new B.dhf(),new A.C(C.dW,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a28,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0l.prototype={
R(){return new B.aCJ()},
gd7(){return this.c}}
B.aCJ.prototype={
Z(){this.a4()
this.z_()},
t(){B.i8B(this.e)
this.a3()},
z_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$z_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.te(o.c,o.d),$async$z_)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i8E(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i8D(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dhb(s))
x=1
break}s.l(new B.dhc(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.dhd(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z_,w)},
a4i(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.te(t.c,t.d),$async$a4i)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fC2)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aka(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4i)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4i,w)},
c5p(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ks(u,C.z,v,new B.dh9(w,t),C.hf,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h8(t,C.z,v,new B.dha(w),C.hf,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u4(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3s(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aJ(u,u,u,u,C.E8,u,u,u,v.gbaG(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gy
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.df(C.E8,u,D.h0t,v.gbaG(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c5p()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0i.prototype={
R(){return new B.aCG(A.al9(),C.bH,C.bH)},
gd7(){return this.c}}
B.aCG.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iN(new B.dgP(v))
x.gd1y().iN(new B.dgQ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bfq
x.iN(new B.dgR(v))
v.z_()},
z_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$z_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.te(p.c,p.d),$async$z_)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dgI(s))
x=1
break}x=8
return A.b(s.d.vM(0,new A.a5F(r,s.a.d.c)),$async$z_)
case 8:if(s.c==null){x=1
break}s.l(new B.dgJ(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dgK(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z_,w)},
a0O(){var x=0,w=A.j(y.H),v=this,u
var $async$a0O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hq(0),$async$a0O)
case 5:x=3
break
case 4:x=6
return A.b(u.iQ(0),$async$a0O)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0O,w)},
aXN(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3s(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gy
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bYz,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RG,C.m),o,88,o,o,o,o,o,88)
t=A.li(C.az,o,o,m,0,new B.dgL(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aXN(p.w)+" / "+p.aXN(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fyp,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vF:C.fQ,o,o,o,o,o)
x=A.w(A.a([u,C.lp,t,x,C.df,A.df(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcfi(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.pY,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rm.prototype={
R(){return new B.aCM()},
gd7(){return this.c}}
B.aCM.prototype={
Z(){this.a4()
this.Rg()},
Rg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Rg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hln(o.c,o.d,new B.dhs(s)),$async$Rg)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dht(s))
x=1
break}s.e=r
q=Q.iwK(r)
if(q==null){s.l(new B.dhu(s))
x=1
break}s.d=q
q.aU(0,s.gb5w())
x=8
return A.b(q.j1(0).d8(0,C.o2),$async$Rg)
case 8:if(s.c==null){x=1
break}s.l(new B.dhv(s))
x=9
return A.b(q.qF(0),$async$Rg)
case 9:q.um(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.dhw(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Rg,w)},
clJ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dhx(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ec(0,x.gb5w())
w=x.d
if(w!=null)w.t()
B.iHf(x.e)
x.a3()},
agW(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3e(u.c,u.d),$async$agW)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agW,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3s(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aJ(t,t,t,t,C.oi,t,t,t,u.gcfc(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iB(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gy
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aky(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.am(C.z,t,C.ac,C.t,A.a([new A.B3(s,t),A.aA(t,A.xQ(A.q(t,A.V(q?K.vF:C.fQ,C.c,t,t,t,48),C.f,t,t,new A.p(C.ba,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dhz(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0n.prototype={
R(){return new B.aCK(new A.cB(null,y.A))}}
B.aCK.prototype={
gcOf(){var x,w,v=this.a
if(v.e!==D.V8)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcNQ(){var x,w,v=this.a
if(v.e!==D.B4)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcOf()
if(x!=null){v.Sr(x)
v.e=A.d5(V.D5,new B.dho(v,x))}w=v.gcNQ()
if(w!=null){v.Sq(w)
v.f=A.d5(C.fr,new B.dhp(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
Sq(d){return this.cta(d)},
cta(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aso(d),$async$Sq)
case 3:t=f
x=4
return A.b(B.chA(d),$async$Sq)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dhg(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sq,w)},
Sr(d){return this.ctb(d)},
ctb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h8c(d),$async$Sr)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGK(t),$async$Sr)
case 4:if(u.c==null){x=1
break}u.l(new B.dhh(u))
u.c.L(y.q).f.T(D.aX9)
case 1:return A.h(v,w)}})
return A.i($async$Sr,w)},
gcaZ(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcfd(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a41(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a41=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E2()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fFd)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).c9(A.e4(new B.dhi(),!1,null,y.N)),$async$a41)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGK(s),$async$a41)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aX9)
case 1:return A.h(v,w)}})
return A.i($async$a41,w)},
acq(d){return this.bPE(d)},
bPE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fP(new A.fD(C.d.aL(t,", "))),$async$acq)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acq,w)},
agU(d){return this.bPm(d)},
bPm(d){var x=0,w=A.j(y.H),v=this
var $async$agU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fP(new A.fD(v.a.c)),$async$agU)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fCw)
return A.h(null,w)}})
return A.i($async$agU,w)},
a3W(d){return this.cAq(d)},
cAq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ari(s.d,4),$async$a3W)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rG(r,"ngmy_doc_share_qr.png"),$async$a3W)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ad(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3W,w)},
gb0c(){var x,w=this.a
if(w.e!==D.Kc)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acn(d){return this.bPx(d)},
bPx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0c()
if(t==null){x=1
break}x=3
return A.b(A.fP(new A.fD(C.a.Y(t,"http")?t:"N2|"+t)),$async$acn)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fEc)
case 1:return A.h(v,w)}})
return A.i($async$acn,w)},
agV(){var x=0,w=A.j(y.H),v=this,u
var $async$agV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.X5(),$async$agV)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agV,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3s(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kc&&i!==D.V8&&i!==D.B4
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kc||t===D.V8||t===D.B4?l:A.aJ(l,l,l,l,C.lI,l,l,l,m.gb3l(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qw(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcaZ(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kc){t=C.az.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcfd(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c8o,D.had,new B.dhj(m,d),l)],p))}if(m.a.e===D.Kc&&m.gb0c()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c4H,D.h6N,new B.dhk(m,d),l)],p))
if(m.a.e===D.B4){x=(m.w?C.dT:C.az).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GC:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.V8){x=(m.r?C.dT:C.az).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GC:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.af,A.df(D.c03,l,D.hdn,m.gcAO(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pf(i,A.c6(v,w,new A.C(C.ae,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bb,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(I.E6,l,C.Xz,new B.dhl(m,d),l),1),C.ar,A.E(A.df(C.Ar,l,C.adF,new B.dhm(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a5(1/0,l,A.bH(U.BI,l,m.gb3l(),A.bp(C.aO,l,l,l,l,C.ht,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dhn(),y.C)}}
B.aey.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.q(x,A.qw(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.BJ,x,new B.dgH(d),x)],u),x,x,C.nM,v,x,x,x,x,D.h_q,x)}}
B.a0h.prototype={
R(){return new B.aCF(A.Ae(C.zk,C.oE,C.vR))}}
B.aCF.prototype={
t(){this.d.t()
this.a3()},
aAV(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a8(x,!1).N(t)
return}}},
C(d){var x=null
return A.c6(A.eQ(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h7k,x,x,x,1,x,!0),C.v,A.Ad(this.d,C.c0,this.gaAU()),x,!1,!1,x,x)}}
B.a0o.prototype={
R(){return new B.aCL(A.Ae(C.zk,C.oE,C.vR))},
gd7(){return this.c}}
B.aCL.prototype={
c6t(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aiY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Ng("text/plain"),$async$aiY)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fF7)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aiY,w)},
adf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hU2(p,!0),$async$adf)
case 3:t=e
p=t==null
s=B.a9e(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fBD)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adf,w)},
t(){this.d.t()
this.a3()},
aAV(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c6t(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aJ(v,v,v,v,F.atV,v,v,v,w.gbVn(),v,v,v,v,"Enter QR share code",v),t=A.aJ(v,v,v,v,F.a5y,v,v,v,w.gcqq(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aJ(v,v,v,v,A.V(w.f?C.ru:R.QO,v,v,v,v,v),v,v,v,new B.dhr(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hek,v,v,v,1,v,!0)
u=A.Ad(w.d,C.c0,w.gaAU())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ac,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eOS],s),v),v,!1,!1,v,v)}}
B.bi5.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pQ
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pQ:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2O,A.A(A.a([u,C.bc,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eL,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abI.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Q5.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zj.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Q4.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gi.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cvF.prototype={}
B.Gh.prototype={}
B.abH.prototype={}
B.awZ.prototype={}
B.Zk.prototype={}
var z=a.updateTypes(["az<~>()","P(jV)","o(jV)","WX(Z)","~()","a0k(Z)","F(F,jV)","Rm(Z)","~(lL)","cr(Gh)","az<jV?>(@)","WV(Z)","WZ(Z)","C(jV)","jV(@)","a9<o,@>(jV)","a0j(Z)","WW(Z)","a0l(Z)","a0i(Z)","a0n(Z)","aey(Z)","ah<jV>()","a0o(Z)","aeA(Z,F)","a0h(Z)","a9<o,aF>(jV)","cr(Zj)","cr(abH)","az<cr>(Gh)"])
B.cvB.prototype={
$1(d){var x=this.a
x.x=D.aTP
x.y.K(0,D.aTP)},
$S:74}
B.cvC.prototype={
$1(d){var x=this.a
x.x=D.aTO
x.y.K(0,D.aTO)},
$S:74}
B.cvD.prototype={
$1(d){var x=this.a
x.akk(A.a4b(d.data)).bD(new B.cvA(x),y.b)},
$S:74}
B.cvA.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvE.prototype={
$1(d){},
$S:74}
B.cvH.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.idA(d.channel))},
$S:18}
B.cvI.prototype={
$1(d){},
$S:18}
B.cvJ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ixU(w.iceConnectionState)
x.cx=w
if($.hvm())switch(w.a){case 0:x.cy=D.aTU
break
case 1:x.cy=D.aTV
break
case 3:x.cy=D.aTW
break
case 5:x.cy=D.aTS
break
case 6:x.cy=D.aTT
break
case 7:x.cy=D.abj
break
default:break}},
$S:107}
B.cvK.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ixV(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.cvL.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iIR(w.signalingState)},
$S:107}
B.cvM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iGX(w.connectionState)},
$S:107}
B.cvN.prototype={
$1(d){},
$S:107}
B.cvO.prototype={
$1(d){},
$S:18}
B.fGU.prototype={
$1(d){var x=y.F.a(new A.qN([],[]).og(d.target.result,!1)),w=C.x5.q(x.objectStoreNames,"blobs")
if(!w)C.x2.H_(x,"blobs")},
$S:180}
B.h7h.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xI.fo(this.b)
$.eY.mT()
this.c.$1(d)},
$S:394}
B.h7j.prototype={
$1(d){return this.a.$1(B.in5(this.b,this.c))},
$S:33}
B.h7i.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h7g.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h7w.prototype={
$1(d){var x=this
return B.hHR(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h7x.prototype={
$1(d){var x=this
return B.hHR(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJA.prototype={
$1(d){var x=this
return B.chb(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dh_.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dgX.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chb(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dgZ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chb(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dgY.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chb(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dh1.prototype={
$4(d,e,f,g){var x=null
return A.kh(A.A(A.a([A.aJ(x,x,x,x,D.bZF,x,x,x,new B.dh0(d),x,x,x,x,x,x),A.E(A.G3(D.Ts,!0,x,!1,C.a4E,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.Ts,x,g,C.apx,0,e,f)},
$C:"$4",
$R:4,
$S:440}
B.dh0.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fLD.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.f4,y.m).w,t=this.a,s=t?C.iZ:C.c,r=A.n(28),q=A.q(v,D.bBP,C.f,v,v,D.baH,v,v,v,v,D.api,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aP(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c38,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Dk,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aP(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aua,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fLB(d),v),1),C.ar,A.E(A.bH(D.h5L,v,new B.fLC(p,x,d),A.bp(C.b6,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HL,v,v,v,v),v)},
$S:63}
B.fLB.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fLC.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fCN)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aFo(v,x))},
$S:0}
B.fM6.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.f4,y.m).w,u=x.a,t=u?C.iZ:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bBF,C.f,w,w,D.bcb,w,w,w,w,D.api,w,w,1/0),new A.C(C.Dk,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aP(),r,w,w,w,w,w,2,B.hqU(u,"Organization name",C.Ik,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aP(),q,w,w,w,w,w,2,B.hqU(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.M,!1,w,!0,C.t,w,A.aP(),p,w,w,w,w,w,2,B.hqU(u,"Member password",C.E5,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bH(D.her,w,new B.fM5(r,q,p,d),A.bp(C.az,w,w,w,w,C.ht,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HL,w,w,w,w),w)},
$S:63}
B.fM5.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fCS)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aIF(u,x,w))},
$S:0}
B.ch2.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a1(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aZ(j)
u=4
x=7
return A.b(A.wg(p,null).d8(0,C.a1I),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CF(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ad(h)
$.an.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.ch8.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ch9.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cha.prototype={
$1(d){return d.b},
$S:z+2}
B.ch4.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ch5.prototype={
$1(d){return d.b},
$S:z+2}
B.ch3.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.ch6.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ch7.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h7u.prototype={
$1(d){return new B.WV(this.a,null)},
$S:z+11}
B.h7v.prototype={
$1(d){return new B.WZ(this.a,this.b,this.c,null)},
$S:z+12}
B.e3G.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e4P.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e4Q.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e4R.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e4O(x,d))},
$S:2}
B.e4O.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4S.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4T.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e4U.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e4V.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4W.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e4X.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5_.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.e4Y.prototype={
$1(d){var x=this.a
return x.f?null:x.a0N()},
$S:2}
B.e4Z.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n_(D.TK))s=C.vC
else s=C.a.Y(s,"video/")||d.n_(D.ns)?C.rA:D.asu
x=this.b.a
w=y.p
return new A.C(C.jY,A.A(A.a([A.q(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gat8(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e3H.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e3I.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chc.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:100}
B.chd.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:100}
B.h8v.prototype={
$2(d,e){return e===this.a},
$S:269}
B.fDR.prototype={
$1(d){return J.k(d)},
$S:15}
B.fJP.prototype={
$1(d){var x=this.b
B.ikV(C.I8.ga8O(this.a)).bD(x.gCK(x),y.H)},
$S:127}
B.fJQ.prototype={
$1(d){return this.a.di(0,null)},
$S:127}
B.fJR.prototype={
$0(){return null},
$S:12}
B.chr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJS.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.h.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.W(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jV(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fOc.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fHY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.chw.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.hcO.prototype={
$1(d){return new B.a0j(this.a,null)},
$S:z+16}
B.dgW.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fR()},
$S:7}
B.dgU.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dgV.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4N.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a37()},
$S:10}
B.e4a.prototype={
$0(){var x=J.bK4(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4b.prototype={
$0(){var x=J.bK4(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3K.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e3J(this.b))
if(w>=0){x=x.d
x[w]=x[w].aI6(this.c)}},
$S:0}
B.e3J.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3L.prototype={
$0(){var x=J.bK4(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3Q.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e3P(this.b))
if(w>=0){x=x.d
x[w]=x[w].aI6(this.c)}},
$S:0}
B.e3P.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4B.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e4C.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e47.prototype={
$1(d){return new B.WW(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e44.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Jp(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X_(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uJ(),$async$$0)
case 5:s=J.a1(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3i(s.gI(t)),$async$$0)
case 8:case 7:r.iw(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3O.prototype={
$1(d){this.a.aeE(d,"No files selected.","Added")},
$S:394}
B.e4f.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e4e(),A.U(x).k("O<1,o>")))},
$S:0}
B.e4e.prototype={
$1(d){return d.a},
$S:z+2}
B.e3U.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y6.cr().d3z(C.a3B,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.eK(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k0(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ad(j)
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.iw("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iw("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asn(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cj(l)){o.iw("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uJ(),$async$$0)
case 9:o.iw("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e4y.prototype={
$1(d){return new B.Rm(this.a.a.c,this.b,null)},
$S:z+7}
B.e4z.prototype={
$1(d){return new B.a0l(this.a.a.c,this.b,null)},
$S:z+18}
B.e4A.prototype={
$1(d){return new B.a0i(this.a.a.c,this.b,null)},
$S:z+19}
B.e45.prototype={
$1(d){return new B.Rm(this.a.a.c,this.b,null)},
$S:z+7}
B.e46.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e4r.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Jp(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9g(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iw("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwJ(),$async$$0)
case 5:x=6
return A.b(p.uJ(),$async$$0)
case 6:r=A.U(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e4n(p),r),new B.e4o(),r.k("O<aj.E,o>")).c1(0,new B.e4p())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).c9(A.e4(new B.e4q(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pV(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.X5(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4n.prototype={
$1(d){var x=this.a,w=C.d.bn(x.d,new B.e4m(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e4m.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4o.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e4p.prototype={
$1(d){return d.length!==0},
$S:3}
B.e4q.prototype={
$1(d){var x=this.a
return new B.a0n(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e4s.prototype={
$1(d){return d.a},
$S:z+2}
B.e4t.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4l.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gat8(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n_(D.ns)?C.tX:C.og
p=!x||p.n_(D.ns)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bn(!0,new A.C(C.Df,A.w(A.a([q,o,t,C.aB,B.a0m(!1,u,!1,w,p,new B.e4g(d),v),B.a0m(!1,u,!1,C.jI,"Share via QR",new B.e4h(d),"Letters/numbers QR code"),B.a0m(!1,u,!1,D.a4J,"Send to their Code",new B.e4i(d),"Enter someone else's personal code"),B.a0m(!1,u,!1,C.hP,"Download / save",new B.e4j(d),v),C.aj,B.a0m(!1,u,!0,C.eq,"Delete",new B.e4k(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:720}
B.e4g.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e4h.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e4i.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e4j.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e4k.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e3R.prototype={
$1(d){return d.a},
$S:z+2}
B.e3S.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3T.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9i(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HL(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pV(s.c,s.f),$async$$0)
case 4:u.iw(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3N.prototype={
$1(d){var x=this.a
x.uK(new B.e3M(x,d,this.b),"Preparing\u2026")},
$S:394}
B.e3M.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iw("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X_(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cj(s)){t.iw("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIZ(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iw("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e48.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e49.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aO(v.c.a),r=v.b,q=v.a
case 2:if(!s.B()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hlq(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e42.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HJ(new B.e3Z(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iw("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e4_(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e40(s))
case 5:x=8
return A.b(r.b.ij(0,C.HG,new B.e41()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iw("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uJ(),$async$$0)
case 9:s.iw("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3Z.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3W(x,d,e))},
$S:183}
B.e3W.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e4_.prototype={
$1(d){return new B.aey(this.a.a,null)},
$S:z+21}
B.e40.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e41.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e43.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JK(o)!=null?3:4
break
case 3:x=5
return A.b(B.a96(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5J(B.JK(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asn(new B.e3X(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cj(r)){if(B.hlp(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iw(q)
x=1
break}x=10
return A.b(s.uJ(),$async$$0)
case 10:o=J.cK(r)
p=o.eW(r,new B.e3Y()).gI(0)
s.iw(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3X.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3V(x,d,e))},
$S:183}
B.e3V.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3Y.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.e4d.prototype={
$1(d){return new B.a0o(this.a.a.c,null)},
$S:z+23}
B.e4c.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3e(u.a.c,v.b),$async$$0)
case 2:t.iw(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4x.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bn(!0,new A.C(C.Df,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0m(!0,w,!1,C.mC,"My Code",new B.e4u(d),"Your personal code & QR \u2014 others send docs to you"),B.a0m(!1,w,!1,D.a4J,"Send to their Code",new B.e4v(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0m(!1,w,!1,W.Aj,"Import backup",new B.e4w(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:720}
B.e4u.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e4v.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bJj()},
$S:0}
B.e4w.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e4K.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JU(D.Ts,x,C.a4E,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.Ts).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:683}
B.e4I.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4J.prototype={
$0(){this.a.alg()
return null},
$S:0}
B.e4L.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:95}
B.e4M.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeA(e,w,v,this.b,x.e,x.cfe(w),new B.e4E(x,w),new B.e4F(x,v,w),new B.e4G(x,w),new B.e4H(x,w),null)},
$S:z+24}
B.e4E.prototype={
$0(){this.a.aiv(this.b)
return null},
$S:0}
B.e4F.prototype={
$0(){var x=this.a
return x.l(new B.e4D(x,this.b,this.c))},
$S:0}
B.e4D.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e4G.prototype={
$0(){this.a.Pu(this.b)
return null},
$S:0}
B.e4H.prototype={
$0(){this.a.al3(this.b)
return null},
$S:0}
B.dgS.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:95}
B.dgT.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.dhf.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.dhe.prototype={
$1(d){return this.a.y.$0()},
$S:89}
B.dhb.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dhc.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dhd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dh9.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h8(w,C.z,x,new B.dh7(this.a),C.hf,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dh8(this.a))
return C.bK},
$S:142}
B.dh7.prototype={
$3(d,e,f){$.aS.U$.push(new B.dh5(this.a))
return C.bK},
$S:190}
B.dh5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dh2(x))},
$S:7}
B.dh2.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dh8.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dh4(x))},
$S:7}
B.dh4.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dha.prototype={
$3(d,e,f){$.aS.U$.push(new B.dh6(this.a))
return C.bK},
$S:190}
B.dh6.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dh3(x))},
$S:7}
B.dh3.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgP.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgO(x,d))},
$S:1827}
B.dgO.prototype={
$0(){return this.a.f=this.b===C.we},
$S:0}
B.dgQ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgN(x,d))},
$S:7}
B.dgN.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dgR.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgM(x,d))},
$S:7}
B.dgM.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dgI.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dgJ.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dgK.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dgL.prototype={
$1(d){return this.a.d.Oo(0,A.dw(0,0,0,C.h.S(d),0,0))},
$S:6}
B.dhs.prototype={
$0(){var x=this.a.a
return B.te(x.c,x.d)},
$S:1828}
B.dht.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dhu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dhv.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dhw.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dhx.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dhz.prototype={
$0(){var x=this.a
x.l(new B.dhy(x))},
$S:0}
B.dhy.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hq(0)
else x.qF(0)},
$S:0}
B.dho.prototype={
$1(d){return this.a.Sr(this.b)},
$S:10}
B.dhp.prototype={
$1(d){return this.a.Sq(this.b)},
$S:10}
B.dhg.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dhh.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dhi.prototype={
$1(d){return D.hQm},
$S:z+25}
B.dhn.prototype={
$2(d,e){if(d)B.X5()},
$S:137}
B.dhj.prototype={
$0(){return this.a.acq(this.b)},
$S:0}
B.dhk.prototype={
$0(){return this.a.acn(this.b)},
$S:0}
B.dhl.prototype={
$0(){return this.a.agU(this.b)},
$S:0}
B.dhm.prototype={
$0(){return this.a.a3W(this.b)},
$S:0}
B.dgH.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dhr.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qJ(),$async$$0)
case 2:u.l(new B.dhq(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dhq.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chy.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n_(D.ns)},
$S:z+1}
B.chz.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aH(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.chx.prototype={
$2(d,e){return this.bpH(d,e)},
bpH(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.X6(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1829}
B.fNP.prototype={
$1(d){if(d===D.abi&&(this.a.a.a&30)===0)this.a.h6(0)},
$S:z+27}
B.fNQ.prototype={
$0(){},
$S:12}
B.fOq.prototype={
brl(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fAS(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hCT(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.brl(d,e)},
$S:746}
B.fOp.prototype={
$1(d){var x=this
d.b=new B.fOo(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fOo.prototype={
$1(d){return this.brk(d)},
brk(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=d.b
n===$&&A.d()
x=n?7:8
break
case 7:n=s.a.c
m=d.a
x=n!=null?9:11
break
case 9:m===$&&A.d()
x=12
return A.b(B.b3f(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.V.aP(0,n,null)
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
return A.b(B.fAS(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ad(j)
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a9f(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aCI.prototype,"gcna","S1",0)
x(v,"gco5","KE",0)
x(v,"gcnA","zb",0)
x(v=B.aGN.prototype,"gcf8","agS",0)
x(v,"gcf9","a0M",0)
x(v,"gcDn","akL",0)
x(v=B.aGQ.prototype,"gcfa","a0N",0)
x(v,"gcDo","a4j",0)
x(B.aGO.prototype,"gcfb","agT",0)
x(B.aCH.prototype,"gcfg","cfh",4)
x(v=B.aGP.prototype,"gcnB","a27",0)
x(v,"gcBU","cBV",4)
x(v,"gb6Q","aCw",0)
x(v,"gcET","ala",0)
x(v,"gbVU","Zu",0)
x(v,"gcff","Fs",0)
x(B.aCJ.prototype,"gbaG","a4i",0)
x(B.aCG.prototype,"gcfi","a0O",0)
x(v=B.aCM.prototype,"gb5w","clJ",4)
x(v,"gcfc","agW",0)
x(v=B.aCK.prototype,"gcAO","a41",0)
x(v,"gb3l","agV",0)
w(B.aCF.prototype,"gaAU","aAV",8)
x(v=B.aCL.prototype,"gcqq","aiY",0)
x(v,"gbVn","adf",0)
w(v,"gaAU","aAV",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.cvF,B.abH,B.awZ,B.aFo,B.aIF,B.jV,B.aeg,B.bAD,B.Gh,B.Zk])
w(B.cvG,B.cvF)
w(B.b8q,B.abH)
x(A.hq,[B.cvB,B.cvC,B.cvD,B.cvA,B.cvE,B.cvH,B.cvI,B.cvJ,B.cvK,B.cvL,B.cvM,B.cvN,B.cvO,B.fGU,B.h7h,B.h7j,B.h7i,B.h7w,B.h7x,B.fJA,B.dgX,B.dgZ,B.dgY,B.dh1,B.fLD,B.fM6,B.ch2,B.ch9,B.cha,B.ch5,B.ch3,B.ch6,B.ch7,B.h7u,B.h7v,B.e4R,B.e5_,B.e4Y,B.e4Z,B.fDR,B.fJP,B.fJQ,B.chr,B.fJS,B.fOc,B.fHY,B.fHZ,B.chw,B.hcO,B.dgW,B.dgU,B.e4N,B.e3J,B.e3P,B.e47,B.e3O,B.e4e,B.e4y,B.e4z,B.e4A,B.e45,B.e4n,B.e4m,B.e4o,B.e4p,B.e4q,B.e4s,B.e4t,B.e4l,B.e3R,B.e3S,B.e3N,B.e48,B.e4_,B.e3Y,B.e4d,B.e4x,B.e4K,B.e4L,B.dgS,B.dgT,B.dhf,B.dhe,B.dh9,B.dh7,B.dh5,B.dh8,B.dha,B.dh6,B.dgP,B.dgQ,B.dgR,B.dgL,B.dho,B.dhp,B.dhi,B.chy,B.chz,B.fNP,B.fOp,B.fOo])
w(B.b8r,B.awZ)
x(A.iY,[B.h7g,B.dh_,B.dh0,B.fLB,B.fLC,B.fM5,B.e3G,B.e4P,B.e4Q,B.e4O,B.e4S,B.e4T,B.e4U,B.e4V,B.e4W,B.e4X,B.e3H,B.e3I,B.fJR,B.dgV,B.e4a,B.e4b,B.e3K,B.e3L,B.e3Q,B.e4B,B.e4C,B.e44,B.e4f,B.e3U,B.e46,B.e4r,B.e4g,B.e4h,B.e4i,B.e4j,B.e4k,B.e3T,B.e3M,B.e49,B.e42,B.e3W,B.e40,B.e41,B.e43,B.e3V,B.e4c,B.e4u,B.e4v,B.e4w,B.e4I,B.e4J,B.e4E,B.e4F,B.e4D,B.e4G,B.e4H,B.dhb,B.dhc,B.dhd,B.dh2,B.dh4,B.dh3,B.dgO,B.dgN,B.dgM,B.dgI,B.dgJ,B.dgK,B.dhs,B.dht,B.dhu,B.dhv,B.dhw,B.dhx,B.dhz,B.dhy,B.dhg,B.dhh,B.dhj,B.dhk,B.dhl,B.dhm,B.dgH,B.dhr,B.dhq,B.fNQ])
x(A.lm,[B.aez,B.OU,B.abI,B.Q5,B.Zj,B.Q4,B.Gi])
x(A.af,[B.a0k,B.WV,B.WZ,B.WW,B.a0j,B.WX,B.a0l,B.a0i,B.Rm,B.a0n,B.a0h,B.a0o])
x(A.ai,[B.aCI,B.aGN,B.aGQ,B.aGO,B.aCH,B.aGP,B.aCJ,B.aCG,B.aCM,B.aCK,B.aCF,B.aCL])
x(A.aw,[B.af2,B.aCE,B.bi4,B.aeA,B.aey,B.bi5])
x(A.iZ,[B.ch8,B.ch4,B.chc,B.chd,B.h8v,B.e3Z,B.e3X,B.e4M,B.dhn,B.chx,B.fOq])
x(A.jp,[B.bnA,B.bAf])})()
A.jg(b.typeUniverse,JSON.parse('{"b8q":{"abH":[]},"b8r":{"awZ":[]},"a0k":{"af":[],"x":[]},"aCI":{"ai":["a0k"]},"af2":{"aw":[],"x":[]},"WV":{"af":[],"x":[]},"WZ":{"af":[],"x":[]},"aGN":{"ai":["WV"]},"aGQ":{"ai":["WZ"]},"bnA":{"jp":[]},"WW":{"af":[],"x":[]},"aGO":{"ai":["WW"]},"a0j":{"af":[],"x":[]},"WX":{"af":[],"x":[]},"aeA":{"aw":[],"x":[]},"a0l":{"af":[],"x":[]},"a0i":{"af":[],"x":[]},"Rm":{"af":[],"x":[]},"a0n":{"af":[],"x":[]},"aey":{"aw":[],"x":[]},"a0h":{"af":[],"x":[]},"a0o":{"af":[],"x":[]},"aCH":{"ai":["a0j"]},"bAf":{"jp":[]},"aGP":{"ai":["WX"]},"aCE":{"aw":[],"x":[]},"bi4":{"aw":[],"x":[]},"aCJ":{"ai":["a0l"]},"aCG":{"ai":["a0i"]},"aCM":{"ai":["Rm"]},"aCK":{"ai":["a0n"]},"aCF":{"ai":["a0h"]},"aCL":{"ai":["a0o"]},"bi5":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n_"),k:x("Ne()"),o:x("bm<o,o>"),F:x("rQ"),g:x("az<jV?>"),x:x("az<~>"),V:x("N<ac>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jV>"),w:x("N<+file,name(mh,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jp>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bl"),A:x("cB<ai<af>>"),n:x("ah<jV>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("io"),e:x("iMW"),af:x("Fu"),U:x("jV"),b:x("cr"),C:x("aF"),aK:x("x_"),ab:x("Gh"),br:x("awZ"),v:x("Zk"),N:x("o"),X:x("bq<H>"),Q:x("mu"),D:x("dG"),aw:x("bf<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cb<ah<jV>>"),aW:x("cb<dG?>"),aY:x("cb<~>"),cx:x("aez"),b1:x("bo<ah<jV>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFo"),bG:x("aIF"),q:x("l4"),B:x("q8<Gh>"),c6:x("q8<abI>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bl?"),_:x("ah<jV>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jV?"),R:x("aF?"),c:x("Zk?"),d:x("+answerQr,transfer(o,az<ah<jV>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,OU,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aeg?"),bk:x("aFo?"),ag:x("aIF?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b94=new A.ax(C.az,2,C.r,-1)
D.cd4=new A.a6(C.a5,C.a9,C.w,C.a6H,null,null)
D.baH=new A.p(null,null,null,C.n0,null,D.cd4,C.m)
D.bcb=new A.p(null,null,null,C.n0,null,E.J4,C.m)
D.ahW=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajr=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aku=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amk=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h0l=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hfp=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FM,null,null,null,null,null,null,null,null,null)
D.dsk=x([D.h0l,C.aj,D.hfp],y.p)
D.bBv=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dsk,null)
D.hjZ=new A.D("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h4X=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FM,null,null,null,null,null,null,null,null,null)
D.dKO=x([D.hjZ,C.aj,D.h4X],y.p)
D.bBF=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dKO,null)
D.hg3=new A.D("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h8X=new A.D("Enter the access code and password from your organization.",null,H.FM,null,null,null,null,null,null,null,null,null)
D.dIj=x([D.hg3,C.aj,D.h8X],y.p)
D.bBP=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dIj,null)
D.bI4=new A.R(16,10,16,28)
D.bJs=new A.R(20,0,20,16)
D.bJZ=new A.R(20,8,20,16)
D.api=new A.R(24,22,24,20)
D.a4J=new A.a_(63394,"MaterialIcons",!1)
D.asu=new A.a_(63515,"MaterialIcons",!1)
D.bXy=new A.a_(983813,"MaterialIcons",!1)
D.bUE=new A.a_(62867,"MaterialIcons",!1)
D.bYz=new A.ae(D.bUE,44,C.c,null,null,null)
D.bZF=new A.ae(C.km,null,C.ab,null,null,null)
D.c03=new A.ae(C.jJ,18,null,null,null,null)
D.c1W=new A.ae(D.a4J,26,C.c,null,null,null)
D.c2x=new A.ae(C.DX,null,null,null,null,null)
D.c38=new A.ae(C.E2,null,null,null,null,null)
D.c4l=new A.ae(A_.a4T,null,null,null,null,null)
D.c4H=new A.ae(C.i4,16,null,null,null,null)
D.c8o=new A.ae(C.tW,16,null,null,null,null)
D.bYR=new A.ae(C.mC,null,null,null,null,null)
D.c9g=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3G=new A.ae(C.Ik,null,null,null,null,null)
D.c9l=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c3G,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZc=new A.ae(C.E5,null,null,null,null,null)
D.c9w=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cZF=x([C.fz,C.b6,C.az],y.O)
D.cf1=new A.a6(C.aw,C.aD,C.w,D.cZF,null,null)
D.cZ0=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Ts=x([C.fz,C.az],y.O)
D.TK=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dC1=x([C.nb,C.az],y.O)
D.eAY={iceServers:0}
D.aOh={urls:0}
D.dOK=new A.bm(D.aOh,["stun:stun.l.google.com:19302"],y.o)
D.dOJ=new A.bm(D.aOh,["stun:stun1.l.google.com:19302"],y.o)
D.dgN=x([D.dOK,D.dOJ],A.as("N<a9<o,o>>"))
D.dNP=new A.bm(D.eAY,[D.dgN],A.as("bm<o,@>"))
D.Kc=new B.OU(0,"lanDirect")
D.V7=new B.OU(1,"cloudStash")
D.e4_=new B.OU(2,"inlineInstant")
D.V8=new B.OU(3,"webrtcLink")
D.B4=new B.OU(4,"videoCloud")
D.hfo=new A.D("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cOx=x([E.auj,C.aa,D.hfo],y.p)
D.ftg=new A.c1(C.aK,C.bb,C.i,C.l,null,C.p,null,0,D.cOx,null)
D.eIx=new A.C(C.cq,D.ftg,null)
D.fRA=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.Jz,null,null,null)
D.h0Y=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fRA,null,C.K,null,null,null,null,null,null,null)
D.eHH=new A.C(C.zC,D.h0Y,null)
D.bgM=new A.cq(C.z,null,null,D.eHH,null)
D.eOS=new A.cS(0,null,0,28,null,null,D.bgM,null)
D.ePb=new B.abI(0,"RTCDataChannelConnecting")
D.aTO=new B.abI(1,"RTCDataChannelOpen")
D.aTP=new B.abI(3,"RTCDataChannelClosed")
D.ePc=new B.Gi(0,"RTCIceConnectionStateNew")
D.ePd=new B.Gi(1,"RTCIceConnectionStateChecking")
D.ePe=new B.Gi(2,"RTCIceConnectionStateCompleted")
D.ePf=new B.Gi(3,"RTCIceConnectionStateConnected")
D.ePg=new B.Gi(4,"RTCIceConnectionStateCount")
D.ePh=new B.Gi(5,"RTCIceConnectionStateFailed")
D.ePi=new B.Gi(6,"RTCIceConnectionStateDisconnected")
D.aTQ=new B.Gi(7,"RTCIceConnectionStateClosed")
D.aTR=new B.Zj(0,"RTCIceGatheringStateNew")
D.ePj=new B.Zj(1,"RTCIceGatheringStateGathering")
D.abi=new B.Zj(2,"RTCIceGatheringStateComplete")
D.abj=new B.Q4(0,"RTCPeerConnectionStateClosed")
D.aTS=new B.Q4(1,"RTCPeerConnectionStateFailed")
D.aTT=new B.Q4(2,"RTCPeerConnectionStateDisconnected")
D.aTU=new B.Q4(3,"RTCPeerConnectionStateNew")
D.aTV=new B.Q4(4,"RTCPeerConnectionStateConnecting")
D.aTW=new B.Q4(5,"RTCPeerConnectionStateConnected")
D.ePk=new B.Q5(0,"RTCSignalingStateStable")
D.ePl=new B.Q5(1,"RTCSignalingStateHaveLocalOffer")
D.ePm=new B.Q5(2,"RTCSignalingStateHaveRemoteOffer")
D.ePn=new B.Q5(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ePo=new B.Q5(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTX=new B.Q5(5,"RTCSignalingStateClosed")
D.fyp=new A.av(160,48)
D.bi1=new A.fs(2,null,null,null,null,C.az,null,null,null,null)
D.fzX=new A.a5(16,16,D.bi1,null)
D.h4h=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fBs=new A.b3(D.h4h,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hc0=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new A.b3(D.hc0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hl2=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fBD=new A.b3(D.hl2,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h3R=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fC2=new A.b3(D.h3R,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgf=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aX9=new A.b3(D.hgf,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hhK=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fCw=new A.b3(D.hhK,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hmx=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fCN=new A.b3(D.hmx,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hks=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fCS=new A.b3(D.hks,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlI=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fDF=new A.b3(D.hlI,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2r=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fEc=new A.b3(D.h2r,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hdX=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fEx=new A.b3(D.hdX,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h6C=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fF3=new A.b3(D.h6C,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hmC=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fF7=new A.b3(D.hmC,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2H=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fFd=new A.b3(D.h2H,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1k=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fFs=new A.b3(D.h1k,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fYZ=new A.D("NGMY DOC SHARE",null,C.aYA,null,null,null,null,null,null,null,null,null)
D.h_q=new A.D("Show this to sender",null,C.iX,null,null,null,null,null,null,null,null,null)
D.h0t=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h5n=new A.D("Organization settings",null,C.cK,null,null,null,null,null,null,null,null,null)
D.h5L=new A.D("Sign in",null,C.cf,null,null,null,null,null,null,null,null,null)
D.h6N=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h7k=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.had=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hd3=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hdn=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdJ=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hek=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.her=new A.D("Create portal",null,C.cf,null,null,null,null,null,null,null,null,null)
D.heQ=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hif=new A.D("Share files & videos\nwith a scan.",null,C.aYD,null,null,null,null,null,null,null,null,null)
D.hiz=new A.D("Add files",null,C.cf,null,null,null,null,null,null,null,null,null)
D.hQm=new B.a0h(null)
D.aeH=new B.aez(0,"docShare")
D.aeI=new B.aez(1,"gate")
D.Yc=new B.aez(2,"gateNoIndividual")})();(function staticFields(){$.aRA=null
$.fym=function(){var x=y.N
return A.S(x,x)}()
$.Hy=A.S(y.N,y.D)
$.aiI=A.S(y.N,A.as("mh"))
$.SN=A.S(y.N,y.D)
$.fz2=A.S(y.N,A.as("aeg"))
$.chq=A.S(y.S,A.as("bAD"))
$.hCS=1
$.its=null
$.itr=null
$.ikc=null
$.hr6=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iNr","hW3",()=>new B.cvG())
x($,"iLk","hvm",()=>C.a.q(A.by(A.by(A.by(A.I2(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["t39sach/R/YlJDMY3/Njdhm3geQ="]=a.current})($__dart_deferred_initializers__);