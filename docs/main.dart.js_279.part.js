((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={crG:function crG(){},
hZ3(d){var x=null,w=new B.b60(d,D.eyB,new A.pN(x,x,y.c6),new A.pN(x,x,y.B))
w.bC8(d)
return w},
b60:function b60(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crB:function crB(d){this.a=d},
crC:function crC(d){this.a=d},
crD:function crD(d){this.a=d},
crA:function crA(d){this.a=d},
crE:function crE(d){this.a=d},
hZ4(d,e){var x=y.N
x=new B.b61(d,e,A.T(x,y.e),A.T(x,y.z))
x.bC9(d,e)
return x},
b61:function b61(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crH:function crH(d){this.a=d},
crI:function crI(d){this.a=d},
crJ:function crJ(d){this.a=d},
crK:function crK(d){this.a=d},
crL:function crL(d){this.a=d},
crM:function crM(d){this.a=d},
crN:function crN(d){this.a=d},
crO:function crO(d){this.a=d},
hdc(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zA.My(x,"ngmy_doc_share_v1",new B.fw7(),1)},
i4P(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wQ(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
S7(d,e){return B.ikT(d,e)},
ikT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPr
x=7
return A.b(o==null?$.aPr=B.hdc():o,$async$S7)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.n2(s,"blobs","readwrite")
C.j6.mx(J.n1(q,"blobs"),r,d)
x=8
return A.b(J.pX(q),$async$S7)
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
return A.i($async$S7,w)},
S6(d){return B.ikS(d)},
ikS(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$S6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPr
x=7
return A.b(o==null?$.aPr=B.hdc():o,$async$S6)
case 7:s=f
r=J.n2(s,"blobs","readonly")
x=8
return A.b(C.j6.A3(J.n1(r,"blobs"),d),$async$S6)
case 8:q=f
x=9
return A.b(J.pX(r),$async$S6)
case 9:o=B.i4P(q)
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
return A.i($async$S6,w)},
ahZ(d){return B.ikR(d)},
ikR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPr
x=7
return A.b(p==null?$.aPr=B.hdc():p,$async$ahZ)
case 7:s=f
r=J.n2(s,"blobs","readwrite")
C.j6.Gk(J.n1(r,"blobs"),d)
x=8
return A.b(J.pX(r),$async$ahZ)
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
return A.i($async$ahZ,w)},
fw7:function fw7(){},
i7u(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqP(w,v))}return u},
hEb(d,e){var x,w={},v=A.aY4("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fVq(w,v,e)
C.wR.z5(v,"change",new B.fVs(w,v,!1))
C.wR.z5(v,"cancel",new B.fVr(w))
$.eX.mC()
v.click()
A.bP(C.akN,new B.fVp(w),y.H)},
fVq:function fVq(d,e,f){this.a=d
this.b=e
this.c=f},
fVs:function fVs(d,e,f){this.a=d
this.b=e
this.c=f},
fVr:function fVr(d){this.a=d},
fVp:function fVp(d){this.a=d},
DG(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUv()?3:4
break
case 3:x=5
return A.b(B.hz0(e,d,s,!0,!1,f,g,h,!1,i),$async$DG)
case 5:x=1
break
case 4:x=6
return A.b(B.RL(d,s,f,g,h,i),$async$DG)
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
return A.b(B.Jj(s,d),$async$DG)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.frC(s,d),$async$DG)
case 14:x=12
return A.b(r.hz0(q,p,o,n,m,l,k,j,a1,i),$async$DG)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.ec(new B.fVF(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.ec(new B.fVG(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DG,w)},
RL(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RL=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0L(e),$async$RL)
case 3:u=k
x=4
return A.b(B.aqx(d,e,!1),$async$RL)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jj(e,d),$async$RL)
case 7:if(k){v=D.acv
x=1
break}x=8
return A.b(B.W0(e),$async$RL)
case 8:v=t?D.Wv:D.acw
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0J(d,e)){v=D.acv
x=1
break}x=11
return A.b(B.W0(e),$async$RL)
case 11:v=t?D.Wv:D.acw
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h88(d,e)){v=D.acv
x=1
break}x=14
return A.b(B.W0(e),$async$RL)
case 14:v=D.Wv
x=1
break
case 13:v=t?D.Wv:D.acw
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
frC(d,e){var x=0,w=A.j(y.y),v
var $async$frC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0J(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0L(d),$async$frC)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frC,w)},
hz0(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.ec(new B.fyL(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hu_(d,e,f,g,h,i,j){return new B.a_d(e,j,d,g,h,i,f,null)},
fAE(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fAE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fAH(A.S(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fAE)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAE,w)},
fB8(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fB8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fBa(A.S(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fB8)
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
return A.i($async$fB8,w)},
hdn(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fNV(d,e){var x=0,w=A.j(y.H),v
var $async$fNV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.W0(e),$async$fNV)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eE()
case 1:return A.h(v,w)}})
return A.i($async$fNV,w)},
fVF:function fVF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fVG:function fVG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adc:function adc(d,e){this.a=d
this.b=e},
fyL:function fyL(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_d:function a_d(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAW:function aAW(){this.c=this.a=this.d=null},
dc3:function dc3(d,e){this.a=d
this.b=e},
dc0:function dc0(d){this.a=d},
dc2:function dc2(d){this.a=d},
dc1:function dc1(d){this.a=d},
dc5:function dc5(){},
dc4:function dc4(d){this.a=d},
adF:function adF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDz:function aDz(d,e){this.a=d
this.b=e},
aGH:function aGH(d,e,f){this.a=d
this.b=e
this.c=f},
fAH:function fAH(d,e,f){this.a=d
this.b=e
this.c=f},
fAF:function fAF(d){this.a=d},
fAG:function fAG(d,e,f){this.a=d
this.b=e
this.c=f},
fBa:function fBa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fB9:function fB9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdu(d,e,f,g,h){return B.hTW(d,e,f,g,h)},
hTW(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdu=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.cdv(s,e,h,g,f,q),y.g),y.l),$async$cdu)
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
return A.i($async$cdu,w)},
b0G(d,e,f,g,h){return B.hTX(d,e,f,g,h)},
hTX(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0G=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aw5("GET",d)
o=A.h4w()
if(o==null)o=new A.MA(A.a([],y.W))
x=7
return A.b(o.f8(0,s).dh(0,C.GC),$async$b0G)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CQ(),$async$b0G)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cj(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0G,w)},
b0F(d){return B.hTU(d)},
hTU(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vP(d,null).dh(0,C.om),$async$b0F)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aQ(0,A.mb(A.m9(p.e)).cH(0,p.w),null)
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
return A.i($async$b0F,w)},
cdt(d){return B.hTV(d)},
hTV(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vP(d,null).dh(0,C.qx),$async$cdt)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mb(A.m9(q.e)).cH(0,q.w)
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
return A.i($async$cdt,w)},
cdv:function cdv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jC:function jC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jh(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hU1(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.Jh(C.a.b2(t,u.length))}return null},
hU2(d){var x=B.Jh(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hTY(){var x,w=$.os(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7O(d){return B.hTZ(d)},
hTZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a7O)
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
return A.i($async$a7O,w)},
a7P(d,e){return B.hU_(d,e)},
hU_(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7P=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cM,null),$async$a7P)
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
return A.i($async$a7P,w)},
Ci(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ci=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ci)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jh(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7Q(r),$async$Ci)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7O("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ci)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jh(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ci)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hTY()
x=14
return A.b(B.a7Q(m),$async$Ci)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a7P("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ci)
case 15:k=f
x=16
return A.b(B.a7P("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ci)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ci)
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
return A.i($async$Ci,w)},
a7Q(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jh(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7O("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7Q)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7Q,w)},
a7R(d,e,f,g){return B.hU3(d,e,f,g)},
hU3(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7R=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jh(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7Q(r),$async$a7R)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.cdB())>1048576||g.aV(d,new B.cdC())){v=B.Fg(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a81("myCode",d,a0),$async$a7R)
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
v=B.Fg(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0O(u,g.gI(d),a0),$async$a7R)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.os().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dM(d,new B.cdD(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0H(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a7R)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7R,w)},
Fg(d,e,f,g,h){return B.hU0(d,e,f,g,h)},
hU0(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fg=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fg)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cJ(a6,0,new B.cdx())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.os().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cN.aw(99999)
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
a1=B.Jl(a9,q)
a0=new A.L9(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fg)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pk(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abr(a1.a,a4,"media",a1.d,a2).xH(m,n,new A.Ev(!0,q.c)),$async$Fg)
case 12:J.c7(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fg)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aS_(r),$async$Fg)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dM(a6,new B.cdy(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0H(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fg)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aS_(r),$async$Fg)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fg,w)},
b0H(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7O(t),$async$b0H)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cdw(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7P(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0H,w)},
Oc(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oc=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7O("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oc)
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
return A.b(B.b0I(k,a0),$async$Oc)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0N(h),$async$Oc)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.W7(g,a0),$async$Oc)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdz(),q),n)
d=A.C(new A.Y(r,new B.cdA(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a7P("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oc)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oc,w)},
b0I(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0I=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.j.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ioL(k,j)
C.d.v(s,i)
x=5
return A.b(B.DE(l,m,"Received via My Code",t,e,i),$async$b0I)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aS_(s),$async$b0I)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0I,w)},
cdB:function cdB(){},
cdC:function cdC(){},
cdD:function cdD(){},
cdx:function cdx(){},
cdy:function cdy(){},
cdw:function cdw(){},
cdz:function cdz(){},
cdA:function cdA(){},
fVC(d,e){var x=0,w=A.j(y.H)
var $async$fVC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.ec(new B.fVD(e),!1,null,y.H)),$async$fVC)
case 2:return A.h(null,w)}})
return A.i($async$fVC,w)},
bFO(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cr(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.ec(new B.fVE(g,e,f),!1,null,y.y)),$async$bFO)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFO,w)},
fVD:function fVD(d){this.a=d},
fVE:function fVE(d,e,f){this.a=d
this.b=e
this.c=f},
VY:function VY(d,e){this.c=d
this.a=e},
aEV:function aEV(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dYz:function dYz(d,e){this.a=d
this.b=e},
W1:function W1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEY:function aEY(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dZI:function dZI(d){this.a=d},
dZJ:function dZJ(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZH:function dZH(d,e){this.a=d
this.b=e},
dZL:function dZL(d){this.a=d},
dZM:function dZM(d){this.a=d},
dZN:function dZN(d,e){this.a=d
this.b=e},
dZO:function dZO(d,e){this.a=d
this.b=e},
dZP:function dZP(d,e){this.a=d
this.b=e},
dZQ:function dZQ(d){this.a=d},
dZT:function dZT(){},
dZR:function dZR(d){this.a=d},
dZS:function dZS(d,e){this.a=d
this.b=e},
bkW:function bkW(){},
VZ:function VZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEW:function aEW(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dYA:function dYA(d){this.a=d},
dYB:function dYB(d){this.a=d},
h89(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hU5(d){var x=d.l3
if(x>=0)return x
return 4.99},
hU4(d){var x=d.m4,w=y.N
w=x.jq(x,new B.cdF(),w,w)
return w},
hp3(d){var x=d.l4,w=y.N
w=x.jq(x,new B.cdG(),w,w)
return w},
b0L(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0L=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0L)
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
return A.i($async$b0L,w)},
a7T(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7T)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7T)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7T,w)},
W0(d){var x=0,w=A.j(y.H),v,u
var $async$W0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$W0)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$W0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
h88(d,e){var x,w,v
if(B.hU5(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hU4(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0J(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hp3(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hp4(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hp3(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).aa().ag())
d.l4=w},
aqy(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqy)
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
return A.i($async$aqy,w)},
aqz(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqy(d),$async$aqz)
case 3:u=f
x=5
return A.b(A.az(),$async$aqz)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqz,w)},
aqx(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h89(d)
if(u<=0){v=!1
x=1
break}if(B.h88(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqy(e),$async$aqx)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqx,w)},
b0K(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jj(e,d),$async$b0K)
case 3:if(g){v=-1
x=1
break}u=B.h89(d)
if(u<=0){v=-1
x=1
break}if(B.h88(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqy(e),$async$b0K)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0K,w)},
cdI(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jj(e,d),$async$cdI)
case 3:if(h){v=!1
x=1
break}v=B.aqx(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdI,w)},
cdH(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdH=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdI(d,u,i.gUv()),$async$cdH)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdH,w)},
a7S(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7S=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUv()){v=!0
x=1
break}if(B.b0J(d,u)){v=!0
x=1
break}x=5
return A.b(A.lz(u,C.TP),$async$a7S)
case 5:x=k?3:4
break
case 3:B.hp4(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7S)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lc(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TP,"Doc Share for Organizations"),$async$a7S)
case 7:if(!k){v=!1
x=1
break}B.hp4(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7S)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7S,w)},
cdF:function cdF(){},
cdG:function cdG(){},
fWv(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fWv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fWv)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fo_.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fo_.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWv,w)},
irD(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fo_.bt($.fo_,new B.fWx(d))},
fWx:function fWx(d){this.a=d},
fpB(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fpB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jm,null,y.H),$async$fpB)
case 3:C.Ba.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpB,w)},
agO(d,e,f){var x=0,w=A.j(y.H),v
var $async$agO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.foF.n(0,d,new B.acU(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$agO)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.I(["parts",e,"size",f],v,y.C),null)),$async$agO)
case 2:return A.h(null,w)}})
return A.i($async$agO,w)},
agI(d){return B.i9u(d)},
i9u(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.foF.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agI)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cr(s)){v=null
x=1
break}o=J.b7(s,new B.ftb(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.acU(r)
$.foF.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agI,w)},
RB(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.H1.n(0,d,u)
x=3
return A.b(B.S7(d,u),$async$RB)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
aPO(d){return B.i9s(d)},
i9s(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H1.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.S6(d),$async$aPO)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H1.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPO)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aN(r)
x=!J.cr(q)?9:10
break
case 9:B.RB(d,q)
x=11
return A.b(J.hk(s,d),$async$aPO)
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
return A.i($async$aPO,w)},
i5h(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wQ(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2K(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fyX(r,t),!1,s)
A.fB(r,"error",new B.fyY(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iH(0,C.NP,new B.fyZ())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2K,w)},
aQ7(d,e,f){return B.ibR(d,e,f)},
ibR(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQ7=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2K(i),$async$aQ7)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.S7(o,p),$async$aQ7)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c7(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agO(k,j,s),$async$aQ7)
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
return A.i($async$aQ7,w)},
aQ6(d,e,f){return B.ibQ(d,e,f)},
ibQ(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ6=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQ7(d,e,f),$async$aQ6)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2K(f),$async$aQ6)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H1.n(0,s,r)
$.RS.n(0,s,r)
x=11
return A.b(B.RB(s,r),$async$aQ6)
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
return A.i($async$aQ6,w)},
Cj(d,e,f,g,h,i){return B.hUe(d,e,f,g,h,i)},
hUe(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cj=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cN.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jC(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b0R(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RB(s,d),$async$Cj)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cj)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cP.gcu().aN(d)),$async$Cj)
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
return A.b(B.Bh(e),$async$Cj)
case 12:j=a2
J.c7(j,m)
x=13
return A.b(B.Hb(e,j),$async$Cj)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cj,w)},
W2(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$W2=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bh(d),$async$W2)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cN.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hp6(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jC(m,n,k,l,j,"From folder",null,B.b0R(),null)
$.ahh.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2K(o),$async$W2)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H1.n(0,h,g)
$.RS.n(0,h,g)
B.RB(h,g)
x=9
break
case 10:x=11
return A.b(B.aQ6(d,m,o),$async$W2)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hb(d,t),$async$W2)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W2,w)},
h8d(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h8d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hp6(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jk(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cj(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8d,w)},
Jk(d,e,f,g,h,i){return B.hUd(d,e,f,g,h,i)},
hUd(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jk=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cN.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L9(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jk)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cr(m)){x=6
break}J.fW(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.SF(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.S7(k,l),$async$Jk)
case 11:J.c7(q,k);++p
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
return A.b(j.a1(0),$async$Jk)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.S7(k,new Uint8Array(A.cb(n))),$async$Jk)
case 15:J.c7(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agO(r,q,g),$async$Jk)
case 16:f=new B.jC(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b0R(),null)
x=17
return A.b(B.Bh(d),$async$Jk)
case 17:e=a6
J.c7(e,f)
x=18
return A.b(B.Hb(d,e),$async$Jk)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jk,w)},
W4(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$W4=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahh.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2K(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agI(s),$async$W4)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.S6(u[o]),$async$W4)
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
v=A.wQ(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RS.h(0,s)
if(i==null)i=$.H1.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rS(d,e),$async$W4)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.RS.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wQ(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W4,w)},
hp6(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gan(x):""
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
rS(d,e){return B.hUf(d,e)},
hUf(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rS=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RS.h(0,f)
if(e==null)e=$.H1.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahh.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2K(s),$async$rS)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H1.n(0,f,r)
$.RS.n(0,f,r)
B.RB(f,r)
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
return A.b(B.agI(f),$async$rS)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azJ(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.S6(g[l]),$async$rS)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apT()
if(!C.aI.gau(r)){$.H1.n(0,f,r)
$.RS.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPO(f),$async$rS)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.RS.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.W4(a0,a1,0,g),$async$rS)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cb(i))
$.H1.n(0,f,h)
$.RS.n(0,f,h)
B.RB(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rS,w)},
hUi(d){var x,w,v=$.ahh.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hUj(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hUg(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqF(d,e,f,g,h){return B.hUh(d,e,f,g,h)},
hUh(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqF=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahh.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2K(s),$async$aqF)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rS(g,e),$async$aqF)
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
return A.b(n.iB(d).xH(h,r,new A.Ev(!0,e.c)),$async$aqF)
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
return A.i($async$aqF,w)},
hp8(d,e,f,g,h){var x,w,v,u,t=$.hp7
$.hp7=t+1
x=Date.now()
w=""+1000*x+"_"+C.cN.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdT.n(0,t,new B.bxN(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azJ(u)))
return t},
h8e(d){var x=0,w=A.j(y.H)
var $async$h8e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8e,w)},
Jl(d,e){var $async$Jl=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahh.h(0,h)
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
return A.qt(B.W4(d,e,p,o<q?o:q),$async$Jl,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qt(A.Gz(n),$async$Jl,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qt(B.agI("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jl,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qt(B.S6(h[l]),$async$Jl,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qt(A.Gz(k),$async$Jl,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qt(B.rS(d,e),$async$Jl,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qt(A.Gz(A.wQ(j,p,o<i?o:i)),$async$Jl,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qt(null,0,w)
case 2:return A.qt(t.at(-1),1,w)}})
var x=0,w=A.hxV($async$Jl,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hzH(w)},
b0T(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdT.h(0,d)
if(t==null||J.cr(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5E(),$async$b0T)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0T,w)},
W3(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$W3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdT.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5E(),$async$W3)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agO(r.c,u,r.z),$async$W3)
case 4:t=new B.jC(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b0R(),null)
u=r.a
x=5
return A.b(B.Bh(u),$async$W3)
case 5:s=f
J.c7(s,t)
x=6
return A.b(B.Hb(u,s),$async$W3)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W3,w)},
a7Z(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdT.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahZ(u[s]),$async$a7Z)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a7Z,w)},
cdV(d,e,f){var x=0,w=A.j(y.H)
var $async$cdV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCO(d,e,f),$async$cdV)
case 2:return A.h(null,w)}})
return A.i($async$cdV,w)},
cdW(d,e,f){var x=0,w=A.j(y.H)
var $async$cdW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCP(d,e,f),$async$cdW)
case 2:return A.h(null,w)}})
return A.i($async$cdW,w)},
Fh(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bh(d),$async$Fh)
case 2:p=g
J.nR(p,new B.cdU(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H1.W(0,v)
$.ahh.W(0,e)
x=3
return A.b(B.agI(v),$async$Fh)
case 3:u=g
$.foF.W(0,v)
x=4
return A.b(A.az(),$async$Fh)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fh)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fh)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahZ(s[q]),$async$Fh)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahZ(v),$async$Fh)
case 13:x=14
return A.b(B.Hb(d,p),$async$Fh)
case 14:return A.h(null,w)}})
return A.i($async$Fh,w)},
b0S(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rS(d,e),$async$b0S)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fpB(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0S,w)},
Bh(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bh)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fz_(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bh,w)},
Hb(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hb)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fDa(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$Hb)
case 3:return A.h(null,w)}})
return A.i($async$Hb,w)},
bCO(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bh(d),$async$bCO)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxa(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFZ(f))
x=4
return A.b(B.Hb(d,u),$async$bCO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCO,w)},
bCP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bh(d),$async$bCP)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxb(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOn(f))
x=4
return A.b(B.Hb(d,u),$async$bCP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCP,w)},
acU:function acU(d){this.a=d},
ftb:function ftb(){},
fyX:function fyX(d,e){this.a=d
this.b=e},
fyY:function fyY(d){this.a=d},
fyZ:function fyZ(){},
cdU:function cdU(d){this.a=d},
bxN:function bxN(d,e,f,g,h,i,j,k,l){var _=this
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
fz_:function fz_(){},
fDa:function fDa(){},
fxa:function fxa(d){this.a=d},
fxb:function fxb(d){this.a=d},
a8_(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.cdZ())?3:4
break
case 3:x=5
return A.b(B.b0U(d,e),$async$a8_)
case 5:u=g
if(u!=null){t=u.c
B.Oe(d,u.b,e,t)}v=u
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
return A.b(B.b0P(s),$async$a8_)
case 10:case 9:if(g){v=new A.QX(1,D.Ts,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.W5(d,e),$async$a8_)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wa(!0,!0,d,e),$async$a8_)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oe(d,D.Ae,e,t)
v=new A.QX(p,D.Ae,t)
x=1
break}v=B.cdY(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8_,w)},
W5(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$W5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a81(null,d,e),$async$W5)
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
return A.b(B.b0O(p,d.length,e),$async$W5)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdW(e,C.d.gH(d).a,r.b),$async$W5)
case 7:case 6:q=r.a
x=8
return A.b(B.Oe(d,D.Ts,e,q),$async$W5)
case 8:v=new A.QX(d.length,D.Ts,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W5,w)},
W6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$W6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n6)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a80(d,e),$async$W6)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdR(s,d,e,t),$async$W6)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0P(t),$async$W6)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rS(e,d),$async$W6)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.W5(A.a([d],y.r),e),$async$W6)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W6,w)},
W8(){var x=0,w=A.j(y.H)
var $async$W8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h87(),$async$W8)
case 2:x=3
return A.b(B.aSm(),$async$W8)
case 3:return A.h(null,w)}})
return A.i($async$W8,w)},
a80(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a80=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0R()
x=3
return A.b(B.cdV(e,d.a,u),$async$a80)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a80,w)},
Oe(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oe=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ts&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a80(p,f),$async$Oe)
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
return A.b(B.cdQ(o,p,u,f),$async$Oe)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdR(o,p,f,t),$async$Oe)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdP(o,u,p,f),$async$Oe)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oe,w)},
b0U(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdX(e,d),$async$b0U)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wa(!1,!0,d,e),$async$b0U)
case 4:u=g
if(u!=null){t=u.b
v=new A.QX(u.a,D.Ae,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0U,w)},
cdX(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.W4(d,s,0,1),$async$cdX)
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
return A.i($async$cdX,w)},
cdY(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a81(null,d,e),$async$cdY)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hp5(u)
if(t.length>800){v=null
x=1
break}v=new A.QX(d.length,D.dP1,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdY,w)},
aqG(d,e,f){return B.hUm(d,e,f)},
hUm(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqG=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d4(g,"\ufeff"))g=J.nq(g,1)
x=B.h8c(g)?3:4
break
case 3:x=5
return A.b(B.cdS(g),$async$aqG)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d4(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fi(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d4(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b0N(q),$async$aqG)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W7(p,a0)
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
case 11:case 7:if(J.d4(g,"NGMYDOCSYNC0|"))try{n=B.h8b(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.W7(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d4(g,"N2|")){v=B.Jm(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d4(g,"NGMYDOCSYNC2|")){v=B.Jm(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aC(k,0,k.length-1)
else h=k
v=B.Jm(h,d,a0)
x=1
break}if(J.eG(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.W7(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqG,w)},
Jm(d,e,f){return B.hUk(d,e,f)},
hUk(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jm=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aC(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0F(r),$async$Jm)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0F(A.cD(s,0,null)),$async$Jm)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cr(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdu(o,r,a1,n,a2),$async$Jm)
case 11:m=a4
x=J.cr(m)?12:13
break
case 12:x=14
return A.b(B.cdt(q),$async$Jm)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.W7(l,a2),$async$Jm)
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
return A.i($async$Jm,w)},
a81(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a81=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rS(f,r),$async$a81)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cP.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a81,w)},
W7(d,e){return B.hUl(d,e)},
hUl(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$W7=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cI.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cj(i,a3,d,k,l,o),$async$W7)
case 9:h=a5
if(h!=null)J.c7(n,h)
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
return A.i($async$W7,w)},
Od:function Od(d,e){this.a=d
this.b=e},
cdZ:function cdZ(){},
a2j(d){var x=A.S(d).ax.a===C.J,w=x?D.ai1:D.afB,v=x?D.ajP:C.c,u=x?C.aP:C.T,t=x?C.bK:C.am,s=x?D.ah0:C.aO
return new A.aHW([w,s,v,u,t,x?C.fo:C.bR])},
hF2(d,e){var x=e?C.w.j(0.72):C.aV
return A.cf(null,x,!0,null,new B.h_K(e),d,null,!0,!0,y.N)},
cdE(d,e,f,g,h,i,j,k,l){return new B.W_(e,l,d,f,k,j,g,h,i,null)},
a_f(d,e,f,g,h,i,j){return new B.bfu(g,h,j,e,i,d,f,null)},
h_K:function h_K(d){this.a=d},
a_c:function a_c(d,e){this.c=d
this.a=e},
aAV:function aAV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dc_:function dc_(d){this.a=d},
dbY:function dbY(d){this.a=d},
dbZ:function dbZ(d){this.a=d},
bxp:function bxp(){},
W_:function W_(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEX:function aEX(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dZG:function dZG(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dYD:function dYD(d,e,f){this.a=d
this.b=e
this.c=f},
dYC:function dYC(d){this.a=d},
dYE:function dYE(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d,e,f){this.a=d
this.b=e
this.c=f},
dYI:function dYI(d){this.a=d},
dZu:function dZu(d,e){this.a=d
this.b=e},
dZv:function dZv(d){this.a=d},
dZ0:function dZ0(d,e,f){this.a=d
this.b=e
this.c=f},
dYY:function dYY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dYH:function dYH(d){this.a=d},
dZ8:function dZ8(d){this.a=d},
dZ7:function dZ7(){},
dYN:function dYN(d){this.a=d},
dZr:function dZr(d,e){this.a=d
this.b=e},
dZs:function dZs(d,e){this.a=d
this.b=e},
dZt:function dZt(d,e){this.a=d
this.b=e},
dYZ:function dYZ(d,e){this.a=d
this.b=e},
dZ_:function dZ_(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e){this.a=d
this.b=e},
dZg:function dZg(d){this.a=d},
dZf:function dZf(d){this.a=d},
dZh:function dZh(){},
dZi:function dZi(){},
dZj:function dZj(d,e){this.a=d
this.b=e},
dZl:function dZl(){},
dZm:function dZm(d){this.a=d},
dZe:function dZe(d,e){this.a=d
this.b=e},
dZ9:function dZ9(d){this.a=d},
dZa:function dZa(d){this.a=d},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d){this.a=d},
dZd:function dZd(d){this.a=d},
dYK:function dYK(){},
dYL:function dYL(d){this.a=d},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYG:function dYG(d,e){this.a=d
this.b=e},
dYF:function dYF(d,e,f){this.a=d
this.b=e
this.c=f},
dZ1:function dZ1(d){this.a=d},
dZ2:function dZ2(d,e,f){this.a=d
this.b=e
this.c=f},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYS:function dYS(d){this.a=d},
dYP:function dYP(d,e,f){this.a=d
this.b=e
this.c=f},
dYT:function dYT(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYV:function dYV(){},
dYX:function dYX(d,e){this.a=d
this.b=e},
dYQ:function dYQ(d){this.a=d},
dYO:function dYO(d,e,f){this.a=d
this.b=e
this.c=f},
dYR:function dYR(){},
dZ6:function dZ6(d){this.a=d},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZq:function dZq(d,e){this.a=d
this.b=e},
dZn:function dZn(d){this.a=d},
dZo:function dZo(d,e){this.a=d
this.b=e},
dZp:function dZp(d){this.a=d},
dZD:function dZD(d){this.a=d},
dZB:function dZB(d){this.a=d},
dZC:function dZC(d){this.a=d},
dZE:function dZE(){},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZy:function dZy(d,e,f){this.a=d
this.b=e
this.c=f},
dZw:function dZw(d,e,f){this.a=d
this.b=e
this.c=f},
dZz:function dZz(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e){this.a=d
this.b=e},
aAS:function aAS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bft:function bft(d,e,f){this.c=d
this.d=e
this.a=f},
dbW:function dbW(){},
dbX:function dbX(){},
add:function add(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcj:function dcj(){},
dci:function dci(d){this.a=d},
a_e:function a_e(d,e,f){this.c=d
this.d=e
this.a=f},
aAX:function aAX(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dcf:function dcf(d){this.a=d},
dcg:function dcg(d,e,f){this.a=d
this.b=e
this.c=f},
dch:function dch(d,e){this.a=d
this.b=e},
dcd:function dcd(d,e){this.a=d
this.b=e},
dcb:function dcb(d){this.a=d},
dc9:function dc9(d){this.a=d},
dc6:function dc6(d){this.a=d},
dcc:function dcc(d){this.a=d},
dc8:function dc8(d){this.a=d},
dce:function dce(d){this.a=d},
dca:function dca(d){this.a=d},
dc7:function dc7(d){this.a=d},
a_b:function a_b(d,e,f){this.c=d
this.d=e
this.a=f},
aAU:function aAU(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbT:function dbT(d){this.a=d},
dbS:function dbS(d,e){this.a=d
this.b=e},
dbU:function dbU(d){this.a=d},
dbR:function dbR(d,e){this.a=d
this.b=e},
dbV:function dbV(d){this.a=d},
dbQ:function dbQ(d,e){this.a=d
this.b=e},
dbM:function dbM(d){this.a=d},
dbN:function dbN(d){this.a=d},
dbO:function dbO(d,e){this.a=d
this.b=e},
dbP:function dbP(d){this.a=d},
Qw:function Qw(d,e,f){this.c=d
this.d=e
this.a=f},
aB_:function aB_(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dcw:function dcw(d){this.a=d},
dcx:function dcx(d){this.a=d},
dcy:function dcy(d){this.a=d},
dcz:function dcz(d){this.a=d},
dcA:function dcA(d,e){this.a=d
this.b=e},
dcB:function dcB(d){this.a=d},
dcD:function dcD(d){this.a=d},
dcC:function dcC(d){this.a=d},
a_g:function a_g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAY:function aAY(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dcs:function dcs(d,e){this.a=d
this.b=e},
dct:function dct(d,e){this.a=d
this.b=e},
dck:function dck(d,e,f){this.a=d
this.b=e
this.c=f},
dcl:function dcl(d){this.a=d},
dcm:function dcm(){},
dcr:function dcr(){},
dcn:function dcn(d,e){this.a=d
this.b=e},
dco:function dco(d,e){this.a=d
this.b=e},
dcp:function dcp(d,e){this.a=d
this.b=e},
dcq:function dcq(d,e){this.a=d
this.b=e},
adb:function adb(d,e){this.c=d
this.a=e},
dbL:function dbL(d){this.a=d},
a_a:function a_a(d){this.a=d},
aAT:function aAT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_h:function a_h(d,e){this.c=d
this.a=e},
aAZ:function aAZ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dcv:function dcv(d){this.a=d},
dcu:function dcu(d){this.a=d},
bfu:function bfu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hUn(){var x,w=$.os(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
Of(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Of=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Of)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Of)
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
return A.i($async$Of,w)},
a82(d){return B.hUo(d)},
hUo(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a82=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a82)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$a82)
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
return A.i($async$a82,w)},
W9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Of(),$async$W9)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dN(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a82(s),$async$W9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W9,w)},
Wa(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wa=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wa)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ce0(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hUn()
t=A.U(u).k("N<1,a8<n,aE>>")
r=A.C(new A.N(u,new B.ce1(s),t),t.k("ak.E"))
x=6
return A.b(B.Of(),$async$Wa)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a82(q),$async$Wa)
case 7:x=8
return A.b(B.a83(r,u,g,s),$async$Wa)
case 8:v=new A.brj(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wa,w)},
aqH(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Of(),$async$aqH)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqH,w)},
ce2(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ce2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Of(),$async$ce2)
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
return A.i($async$ce2,w)},
a83(d,e,f,g){return B.hUp(d,e,f,g)},
hUp(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a83=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqF("media",r,new B.ce_(s,e,g),f,q),$async$a83)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W9(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a83)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W9(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a83)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W9(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a83)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a83,w)},
Fi(d,e,f){return B.hUq(d,e,f)},
hUq(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fi=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fi)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqH(b3),$async$Fi)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iL,null,g),$async$Fi)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqH(b3),$async$Fi)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Of(),$async$Fi)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pk(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abr(a8.a,b0,"media",a8.d,a9).Db(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b0G(k,n,o,s,b7),$async$Fi)
case 17:j=c0
if(j!=null){J.c7(p,j);++q
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.pk(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abr(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fi)
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
a0=A.dN(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a82(e),$async$Fi)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fi,w)},
ce0:function ce0(){},
ce1:function ce1(d){this.a=d},
ce_:function ce_(d,e,f){this.a=d
this.b=e
this.c=f},
aSm(){var x=0,w=A.j(y.H),v,u
var $async$aSm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i4u=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aSm)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aSm)
case 3:u=$.hdA
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aSm)
case 4:$.hdA=$.idE=$.idF=null
return A.h(null,w)}})
return A.i($async$aSm,w)},
fCM(d){var x=0,w=A.j(y.H),v,u
var $async$fCM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a99){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fCN(new A.c3(u,y.aY))
x=3
return A.b(u.iH(0,C.ic,new B.fCO()),$async$fCM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fCM,w)},
idC(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hU7(x):x},
hdE(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqJ(u)
x=1
break}v=B.h8b(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdE,w)},
hdD(d){var x=0,w=A.j(y.T),v,u,t
var $async$hdD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqK(u)
x=1
break}v=B.h8b(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hdD,w)},
fWe(d){var x=0,w=A.j(y.T),v
var $async$fWe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqK(d),$async$fWe)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWe,w)},
bDH(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hdD(d),$async$bDH)
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
return A.i($async$bDH,w)},
fqs(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fqs=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.W3(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cj(d.apT(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqs,w)},
Hd(d,e,f){return B.ig4(d,e,f)},
ig4(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hd=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hdE(a1),$async$Hd)
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
return A.b($.hH2().aGf(D.dCY,null),$async$Hd)
case 4:l=d.hdA=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azJ(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fDn(f,k,new B.fDo(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8H(0,new B.Yh(r,"offer")),$async$Hd)
case 5:d=l
x=7
return A.b(l.amj(0),$async$Hd)
case 7:x=6
return A.b(d.a8z(0,a4),$async$Hd)
case 6:x=8
return A.b(B.fCM(l),$async$Hd)
case 8:x=9
return A.b(l.aqF(),$async$Hd)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.idC(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqL(m,h),$async$Hd)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hp5(h)
case 11:v=new A.bqz(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hd,w)},
fCN:function fCN(d){this.a=d},
fCO:function fCO(){},
fDo:function fDo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fDn:function fDn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fDm:function fDm(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ii9(d){switch(d){case"new":return D.eyC
case"checking":return D.eyD
case"connected":return D.eyF
case"completed":return D.eyE
case"failed":return D.eyH
case"disconnected":return D.eyI
case"closed":return D.aQJ
case"count":return D.eyG}return D.aQJ},
iia(d){switch(d){case"new":return D.aQK
case"gathering":return D.eyJ
case"complete":return D.a99}return D.aQK},
ita(d){switch(d){case"stable":return D.eyK
case"have-local-offer":return D.eyL
case"have-local-pranswer":return D.eyN
case"have-remote-offer":return D.eyM
case"have-remote-pranswer":return D.eyO
case"closed":return D.aQQ}return D.aQQ},
irk(d){switch(d){case"new":return D.aQN
case"connecting":return D.aQO
case"connected":return D.aQP
case"closed":return D.a9a
case"disconnected":return D.aQM
case"failed":return D.aQL}return D.a9a},
aan:function aan(d,e){this.a=d
this.b=e},
Ph:function Ph(d,e){this.a=d
this.b=e},
Yg:function Yg(d,e){this.a=d
this.b=e},
Pg:function Pg(d,e){this.a=d
this.b=e},
FM:function FM(d,e){this.a=d
this.b=e},
crF:function crF(){},
h9X(d){var x=new B.FL()
x.a=d
x.b=!0
return x},
FL:function FL(){this.b=this.a=$},
aam:function aam(){},
avg:function avg(){},
Yh:function Yh(d,e){this.a=d
this.b=e},
h87(){var x=0,w=A.j(y.H)
var $async$h87=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h87,w)},
h8a(d,e,f){var x=0,w=A.j(y.T),v
var $async$h8a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n6))){v=null
x=1
break}v=B.fWv(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h8a,w)},
hp5(d){var x,w=F.af_.a5n(C.dS.aN(d),null)
if(w.length===0){x=C.dS.aN(d)
return C.cP.gcu().aN(x)}return C.cP.gcu().aN(w)},
hU6(d){var x,w,v=C.cI.aN(d)
try{x=C.ca.cH(0,F.aeZ.bfU(v,!1))
return x}catch(w){x=C.ca.cH(0,v)
return x}},
h8b(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hU6(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cH(0,C.cI.aN(x))
return v}catch(u){return x}}return null},
hU7(d){var x,w,v,u,t,s=A.a([],y.s)
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
hU8(){var x,w=$.os(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0M(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b0M)
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
return A.i($async$b0M,w)},
cdJ(d,e){return B.hU9(d,e)},
hU9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cM,null),$async$cdJ)
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
return A.i($async$cdJ,w)},
b0P(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0M(d),$async$b0P)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0P,w)},
b0O(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hU8()
r=C.a.i(f)
t=C.dS.aN(s)
x=3
return A.b(B.cdJ(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cP.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b0O)
case 3:if(!h){v=null
x=1
break}v=new A.a1j("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0O,w)},
b0N(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0M(o),$async$b0N)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cH(0,C.cI.aN(u))
if(J.j7(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0N,w)},
cdK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEE("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cM),$async$cdK)
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
return A.i($async$cdK,w)},
b0Q(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ji(),$async$b0Q)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Q,w)},
aqC(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqC)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0Q(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqC,w)},
aqA(d,e){var x=0,w=A.j(y.H)
var $async$aqA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqA)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqA)
case 2:return A.h(null,w)}})
return A.i($async$aqA,w)},
a7V(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7V=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7V)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7V)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a7U(s),$async$a7V)
case 5:x=6
return A.b(B.aqA(f,u),$async$a7V)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7V,w)},
a7W(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7W=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7W)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ji(),$async$a7W)
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
if(o!==t&&s.al(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqA(g,q),$async$a7W)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7U(u),$async$a7W)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7W,w)},
a7X(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7X=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a7X)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ji(),$async$a7X)
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
s=B.b0J(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7X)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a7X)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
cdL(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdL)
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
return A.i($async$cdL,w)},
Jj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdL(d),$async$Jj)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0Q(t),$async$Jj)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqB(d),$async$Jj)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0J(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqB(d),$async$Jj)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jj,w)},
aqB(d){var x=0,w=A.j(y.H)
var $async$aqB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqB)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqB)
case 2:return A.h(null,w)}})
return A.i($async$aqB,w)},
b0R(){var x,w=$.os(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7Y(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h8c(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdO(d){return B.hUb(d)},
hUb(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7Y(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cdO)
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
return A.i($async$cdO,w)},
aqE(d,e){return B.hUc(d,e)},
hUc(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7Y(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cM,null),$async$aqE)
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
return A.i($async$aqE,w)},
cdQ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Y(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqE(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdQ,w)},
cdP(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdP=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Y(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqE(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cdP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdP,w)},
cdR(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7Y(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqE(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdR,w)},
cdS(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h8c(d)){v=null
x=1
break}x=3
return A.b(B.cdO(d),$async$cdS)
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
return A.i($async$cdS,w)},
a84(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a84=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a84)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a84)
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
return A.i($async$a84,w)},
aqI(d){return B.hUr(d)},
hUr(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqI)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cM,null),$async$aqI)
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
return A.i($async$aqI,w)},
aqJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d4(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqJ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a84(),$async$aqJ)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cH(0,C.cI.aN(q))
if(J.j7(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dN(A.a3(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqI(s),$async$aqJ)
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
return A.i($async$aqJ,w)},
aqL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aqL)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a84(),$async$aqL)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dN(A.a3(s,r,q),r,q)
r=C.dS.aN(C.a.i(e))
q.n(0,"answer",C.cP.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqI(u),$async$aqL)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqL,w)},
aqK(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqK)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a84(),$async$aqK)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cH(0,C.cI.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqK,w)},
apE(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qk)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apE)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hh),$async$apE)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vY(o))
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
return A.i($async$apE,w)},
ioL(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.u(w),5,"0")
return v},
fUw(d){return B.ioN(d)},
ioN(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fUw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Ln(d,3600),$async$fUw)
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
return A.i($async$fUw,w)},
DE(d,e,f,g,h,i){var x=null
return B.ioK(d,e,f,g,h,i)},
ioK(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hp8(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h8e(r),$async$DE)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fUw(o),$async$DE)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7Z(r),$async$DE)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aUj)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MA(A.a([],g))
x=15
return A.b(d.f8(0,A.aw5("GET",A.cD(n,0,null))).dh(0,C.GC),$async$DE)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7Z(r),$async$DE)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L9(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DE)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0T(r,k),$async$DE)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DE)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.W3(r)
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
return A.b(B.a7Z(r),$async$DE)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DE,w)},
aS_(d){return B.ioM(d)},
ioM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aS_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aS_)
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
return A.i($async$aS_,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[159]
O=c[47]
F=c[264]
I=c[150]
P=c[234]
E=c[227]
G=c[94]
Q=c[197]
R=c[151]
S=c[232]
K=c[269]
L=c[277]
B=a.updateHolder(c[22],B)
D=c[275]
T=c[196]
M=c[217]
U=c[73]
V=c[258]
W=c[79]
X=c[62]
N=c[93]
Y=c[276]
B.crG.prototype={
aGf(d,e){return this.cPS(d,e)},
cPS(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dN(r,s,t)
t.v(0,d)
u=new q(A.kh(A.cv(t)))
t=J.k(u)
v=B.hZ4(C.cP.gcu().aN(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGf,w)}}
B.b60.prototype={
bC8(d){var x=this,w=x.w
w.onclose=A.hp(new B.crB(x))
w.onopen=A.hp(new B.crC(x))
w.onmessage=A.hp(new B.crD(x))
w.onbufferedamountlow=A.hp(new B.crE(x))},
gda(d){return this.x},
aix(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aix=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FL()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h9X(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aix)
case 8:v=t.h9X(s.aoO(f,0,null))
x=1
break
case 7:case 4:v=B.h9X(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aix,w)}}
B.b61.prototype={
bC9(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crH(x)))
w.addEventListener("icecandidate",A.hp(new B.crI(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crJ(x)))
w.onicegatheringstatechange=A.hp(new B.crK(x))
w.addEventListener("signalingstatechange",A.hp(new B.crL(x)))
if(!$.hhA())w.addEventListener("connectionstatechange",A.hp(new B.crM(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crN(x)))
w.addEventListener("track",A.hp(new B.crO(x)))},
amj(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kh(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amj)
case 3:t=f
v=new B.Yh(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amj,w)},
a8z(d,e){return this.br5(0,e)},
br5(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8z)
case 2:return A.h(null,w)}})
return A.i($async$a8z,w)},
a8H(d,e){return this.brq(0,e)},
brq(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8H)
case 2:return A.h(null,w)}})
return A.i($async$a8H,w)},
aqF(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yh(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqF,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adc.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_d.prototype={
S(){return new B.aAW()},
gd1(){return this.c}}
B.aAW.prototype={
Y(){this.a4()
this.af6()},
af6(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0K(u.e,u.c),$async$af6)
case 2:t=e
if(v.c!=null)v.m(new B.dc3(v,t))
return A.h(null,w)}})
return A.i($async$af6,w)},
QV(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqx(t.e,t.c,!1),$async$QV)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fjA)
x=1
break}x=4
return A.b(B.a7T(u.a.c,"individual"),$async$QV)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6X(A.ec(new B.dc0(u),!1,null,y.H)),$async$QV)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QV,w)},
JI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fAE(o),$async$JI)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7X(o.e,r,s,q),$async$JI)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fgB)
x=1
break}x=5
return A.b(B.a7T(u.a.c,"member"),$async$JI)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6X(A.ec(new B.dc2(u),!1,null,y.H)),$async$JI)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JI,w)},
yC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7S(t.e,o,t.f,t.r,t.w,s),$async$yC)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7T(u.a.c,"org_owner"),$async$yC)
case 4:x=5
return A.b(B.aqC(u.a.c),$async$yC)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fB8(o),$async$yC)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7V(s,t,o,q.c),$async$yC)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fgy)
x=1
break}x=10
return A.b(B.aqC(u.a.c),$async$yC)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6X(A.ec(new B.dc1(u),!1,null,y.H)),$async$yC)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yC,w)},
B(d){var x,w,v,u=this,t=null,s=A.S(d).ax.a===C.J,r=s?C.jA:C.qk,q=B.h89(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.h5,24)],y.V)
v=y.p
w=A.q(t,A.x(A.a([A.q(t,D.fDt,C.f,t,t,new A.p(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.hc,t,t,t),C.aB,D.fXp,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.p(t,t,t,p,w,D.c94,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lZ(new B.dc5(),t),C.U,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.T,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aT:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adF(C.f5,C.aDh,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcj1(),t),C.af],v))
p.push(new B.adF(C.ps,C.a4P,"Team Member","Sign in with your organization access code + password",u.gcjT(),t))
p.push(C.af)
p.push(new B.adF(C.apl,C.a6r,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcjo(),t))
return A.c4(t,r,A.bn(!0,A.cc(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amr,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adF.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a9(C.a6,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ex,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nf,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.S(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.za,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDz.prototype={}
B.aGH.prototype={}
B.jC.prototype={
mI(d){var x=this.b,w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garm(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.j.ad(x/1024,1)+" KB"
if(x<1073741824)return C.j.ad(x/1048576,1)+" MB"
return C.j.ad(x/1073741824,2)+" GB"},
aj(){var x,w=this,v=A.T(y.N,y.z)
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
bfn(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jC(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOn(d){return this.bfn(null,d)},
aFZ(d){return this.bfn(d,null)}}
B.VY.prototype={
S(){return new B.aEV(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEV.prototype={
Y(){this.a4()
this.af7()},
af7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ci(u.a.c),$async$af7)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dYz(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af7,w)},
af8(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fw(s)),$async$af8)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fku)
case 1:return A.h(v,w)}})
return A.i($async$af8,w)},
a_y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apE(s.d,4),$async$a_y)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tp(r,"ngmy_my_code_"+m+".png"),$async$a_y)
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
return A.i($async$a_y,w)},
aiZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.ab0("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiZ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.S(d).ax.a===C.J,n=o?C.jA:C.qk,m=o?C.c:C.T,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m2
else if(q.e==null)x=A.at(new A.D(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aF.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.L(C.aF.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.U,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a5g,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a9(C.a6,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.am0,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aF.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.x(A.a([x,C.nc,w,C.l2,new A.em(A.q(p,A.qc(p,p,!1,B.hU2(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l2,A.A(A.a([A.E(A.es(N.D8,C.VT,q.gcbu(),p),1),C.au,A.E(A.dh(C.zz,C.abu,q.gcbv(),A.bp(C.aF,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3A,D.fSZ,q.gcyH(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.Of,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.W1.prototype={
S(){return new B.aEY(new A.au(C.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aEY.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jh(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a3()},
a_z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jh(u.d.a.a)
if(t==null){u.m(new B.dZI(u))
x=1
break}u.m(new B.dZJ(u))
s=u.a
r=s.c
x=3
return A.b(B.a7R(s.d,new B.dZK(u),t,r),$async$a_z)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZL(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_z,w)},
a2O(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2O=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cr(r.a.d)){x=1
break}r.m(new B.dZM(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rS(r.a.c,q),$async$a2O)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZN(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiJ(p,m,l,j,k),$async$a2O)
case 8:o=e
if(r.c!=null)r.m(new B.dZO(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZP(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZQ(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2O,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.S(d).ax.a===C.J,i=j?D.ai1:D.afB,h=j?D.ajP:C.c,g=j?C.aP:C.T,f=j?C.bK:C.am,e=j?D.ah0:C.aO
i=[i,e,h,g,f,j?C.fo:C.bR]
x=A.S(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dw(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dw(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aF.j(x?0.12:0.08),C.aF.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bXr,C.f,k,k,new A.p(k,k,k,A.m(16),k,new A.a9(C.aA,C.aE,C.x,A.a([i[5].j(0.85),C.aF],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ex,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.fs,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a5g,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uU(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkW()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Oa,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ay(C.aF,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZR(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.L(i[1],C.r,1)
m=J.Md(l.a.d,4)
m=A.C(new A.N(m,new B.dZS(x,new A.aHW(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lg,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.U,e,C.U,q,C.d8,p,C.U,A.q(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aF.j(x?0.16:0.1)
t=A.m(14)
s=A.L(C.aF.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.ff5)
else q.push(A.X(C.lO,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.n),C.iJ,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.cc(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bF0,k,k,C.ah),1)
u=l.f?k:l.gcyI()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a3A,D.fU5,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbw()
t=A.bp(C.aF,k,k,0,C.c,k,C.nD,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bn(!0,A.lC(new B.dZT(),A.x(A.a([e,new A.D(D.bEv,A.x(A.a([s,C.U,i,C.af,A.bI(l.f?C.tB:D.fSi,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cw,C.a_O,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkW.prototype={
oY(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bB,v.length),C.aR)}}
B.VZ.prototype={
S(){return new B.aEW()}}
B.aEW.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aR),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aR),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.aw,v)},
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
w.a3()},
af9(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$af9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dYA(r))
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
return A.b(B.a7W(p,m,n,o,C.a.i(l).length===0?null:l),$async$af9)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fk5)
s=[1]
x=4
break}p.L(y.q).f.U(D.fiJ)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dYB(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af9,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.S(d).ax.a===C.J?C.jA:C.qk,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fKF,s,s,s,1,s,!0),p=A.q(s,D.bwz,C.f,s,s,new A.p(s,s,s,A.m(22),s,E.I5,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c3C,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c3x,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c3N,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbx()
u=A.bp(C.aF,s,s,s,s,C.h6,s,s,s,s,s,s)
return A.c4(q,r,A.cc(A.x(A.a([p,C.d8,o,C.af,x,C.af,w,C.nc,A.bI(t.r?C.tB:C.aX9,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.acU.prototype={}
B.bxN.prototype={
a5E(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apT()))
x=3
return A.b(B.S7(t,s),$async$a5E)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5E,w)},
gd1(){return this.a}}
B.Od.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_c.prototype={
S(){return new B.aAV(new A.au(C.aw,$.aw()),A.k9(!0,null,!0,!0,null,null,!1))}}
B.aAV.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dc_(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a3()},
cbD(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2j(d),u=x.a.c,t=u?C.iD:v.a[2],s=u?C.c:v.a[3],r=u?C.aT:v.a[4],q=u?C.jA:v.a[0],p=A.m(24),o=A.L(C.aF.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aF.j(u?0.25:0.12),C.h5,32)],n),l=A.q(w,T.as0,C.f,w,w,new A.p(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aF.j(0.4),C.cA,16)],n),C.asP,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uU(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxp()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.GQ,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b5c),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbY(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
f=A.E(A.dU(C.nZ,new B.dbZ(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.m(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aF.j(0.35),C.cL,12)],n)
g=y.p
return A.eP(w,C.L,new A.cQ(Q.LR,A.c2(new A.D(C.yP,A.x(A.a([l,C.aQ,k,C.U,j,C.dY,i,C.dY,A.A(A.a([f,C.au,A.E(A.c2(A.aI(!1,C.a3,!0,w,A.aP(!1,A.m(14),!0,D.es_,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbC(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.p(w,w,w,h,n,L.Q7,C.n),C.bj),2)],g),C.l,w,C.e,C.i,0,w,w)],g),C.l,w,C.e,C.Q,0,C.p),w),new A.p(t,w,o,p,m,w,C.n),C.bj),w),w,w,w,C.Oi,C.d7,w,w,w)}}
B.bxp.prototype={
oY(d,e){return e.amd(e.a.toUpperCase())}}
B.W_.prototype={
S(){return new B.aEX(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aEX.prototype={
Y(){var x=this
x.a4()
x.ul()
x.w=A.df(C.jD,new B.dZG(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.W8()
this.a3()},
a1G(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$a1G)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bh(u.a.c),$async$a1G)
case 4:u.m(new s.dZ3(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1G,w)},
ul(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ul=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oc(u.a.c),$async$ul)
case 3:t=e
x=4
return A.b(B.Bh(u.a.c),$async$ul)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZ4(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.O7(u.d)
B.Ci(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ul,w)},
O7(d){return this.bGb(d)},
bGb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a80(r,u.a.c),$async$O7)
case 8:p=f
if(u.c==null){x=1
break}new B.dYD(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n6))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.W6(r,u.a.c),$async$O7)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bh(u.a.c),$async$O7)
case 12:u.m(new o.dYE(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O7,w)},
Ow(d){return this.bMu(d)},
bMu(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ow=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a80(d,u.a.c),$async$Ow)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dYJ(u,d,t))
x=6
return A.b(A.fF(new A.fw(t)),$async$Ow)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fw(r.toUpperCase())),$async$Ow)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ow,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
um(d,e){return this.cJC(d,e)},
cJC(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$um=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dZu(r,e))
u=3
x=6
return A.b(d.$0(),$async$um)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dZv(r))
$.eX.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$um,w)},
gaXJ(){var x=this.a
return x.f||x.r||x.w},
IC(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXJ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdH(s,n,r,q,o,t),$async$IC)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fNV(o,u.a.c),$async$IC)
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
return A.b(B.DG(s,o,r,q,n,t),$async$IC)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IC,w)},
a0K(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqC(u.a.c),$async$a0K)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ij("No organization portal found.")
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
return A.b(A.a6(t,!1).cd(A.ec(new B.dZ0(u,r,q),!1,null,y.H)),$async$a0K)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0K,w)},
a1Q(d){return this.csf(d)},
cse(){return this.a1Q(1)},
csf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXJ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqz(u.a.c),$async$a1Q)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1Q,w)},
ad_(d,e,f){return this.c2u(d,e,f)},
c2u(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.um(new B.dYY(u,d,null,e,f),"Uploading\u2026"),$async$ad_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad_,w)},
bGk(){B.hEb(!1,new B.dYH(this))
return},
cxi(){this.m(new B.dZ8(this))},
aAu(){var x=0,w=A.j(y.H),v=this
var $async$aAu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGk()
return A.h(null,w)}})
return A.i($async$aAu,w)},
acW(){var x=0,w=A.j(y.H),v=this
var $async$acW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.um(new B.dYN(v),"Importing\u2026"),$async$acW)
case 2:return A.h(null,w)}})
return A.i($async$acW,w)},
T0(d){return this.cIW(d)},
cIW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.ec(new B.dZr(u,d),!1,null,y.H)),$async$T0)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S8)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.ec(new B.dZs(u,d),!1,null,y.H)),$async$T0)
case 8:x=1
break
case 7:x=u.c3c(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.ec(new B.dZt(u,d),!1,null,y.H)),$async$T0)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T0,w)},
c3c(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.p5(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cSg,C.a.b2(x,w+1).toLowerCase())},
agH(d){return this.cj5(d)},
cj5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.ec(new B.dYZ(u,d),!1,null,y.H)),$async$agH)
case 5:x=1
break
case 4:u.m(new B.dZ_(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agH,w)},
Sl(d){return this.cAb(d)},
cAb(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pv(t,s.c,s.f),$async$Sl)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.um(new B.dZk(u,d),"Preparing QR\u2026"),$async$Sl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sl,w)},
ajo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZl(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZm(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sl(r),$async$ajo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajo,w)},
ajh(d){return this.czJ(d)},
czJ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2j(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZe(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajh)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T0(d)
break
case"qr":u.Sl(A.a([d],y.r))
break
case"send_my_code":u.cjI(A.a([d],y.r))
break
case"save":u.aiF(d)
break
case"delete":u.Js(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
Yo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYK(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dYL(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pv(t,s.c,s.f),$async$Yo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.um(new B.dYM(u,r),"Preparing file\u2026"),$async$Yo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yo,w)},
ahM(d){return this.cqA(d)},
cqA(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hF2(d,!1),$async$ahM)
case 3:s=f
r=s==null
q=B.a7Y(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
agN(){var x=0,w=A.j(y.H),v=this,u
var $async$agN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fVC(u,v.a.c),$async$agN)
case 2:return A.h(null,w)}})
return A.i($async$agN,w)},
bGj(){B.hEb(!1,new B.dYG(this,null))
return},
JH(d,e){return this.cjJ(d,e)},
b3c(d){return this.JH(null,d)},
cjI(d){return this.JH(d,null)},
cjJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZ1(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xO.cq().aoZ(!0,C.a1C,!1),$async$JH)
case 10:r=g
if(r==null||J.cr(r.a)){x=1
break}x=11
return A.b(s.um(new B.dZ2(l,s,r),"Preparing\u2026"),$async$JH)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ij("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ij("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFO(p,l,e,s.a.c),$async$JH)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JH,w)},
IS(d){return this.c2h(d)},
c2h(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hU1(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3c(t),$async$IS)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.um(new B.dYW(u,d),"Receiving video\u2026"),$async$IS)
case 11:x=1
break
case 10:x=12
return A.b(u.um(new B.dYX(u,d),"Receiving\u2026"),$async$IS)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IS,w)},
EL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DA()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahM(t),$async$EL)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IS(s),$async$EL)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.ec(new B.dZ6(u),!1,null,y.N)),$async$EL)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ul(),$async$EL)
case 10:x=1
break
case 9:x=11
return A.b(u.IS(C.a.i(r)),$async$EL)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EL,w)},
aiF(d){return this.cvR(d)},
cvR(d){var x=0,w=A.j(y.H),v=this
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.um(new B.dZ5(v,d),"Saving\u2026"),$async$aiF)
case 2:return A.h(null,w)}})
return A.i($async$aiF,w)},
Js(d){return this.bOP(d)},
bOP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Js=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lo(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Js)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdK(t),$async$Js)
case 6:case 5:s=d.a
x=7
return A.b(B.Fh(u.a.c,s),$async$Js)
case 7:u.r.W(0,s)
x=8
return A.b(u.ul(),$async$Js)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Js,w)},
aju(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aju=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2j(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dZq(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aju)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agN()
break
case"import":u.acW()
break}case 1:return A.h(v,w)}})
return A.i($async$aju,w)},
cbA(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n6))return C.qQ
if(C.a.a0(x,"image/")||d.mI(D.S8))return C.uN
if(C.a.q(x,"pdf"))return E.PC
return D.apN},
B(d){var x,w,v=this,u=null,t=B.a2j(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.HZ,u,u,u,new B.dZB(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bY1,u,u,u,v.e?u:v.gcjp(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxh()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bSe:E.aqc,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a3x,u,u,u,v.e?u:v.gcbB(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.oG,u,u,u,v.e?u:v.gb4h(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bZN,u,u,u,v.e?u:new B.dZC(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.dZD(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dw(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.S(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dw(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aF.j(A.S(d).ax.a===C.J?0.12:0.08),C.aF.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ko(s[1].j(0.5),u,C.aF,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAS(C.jJ,s,!0,t,w?u:v.gcAc(),u),1)
x.push(new A.D(D.bDe,A.lC(new B.dZE(),A.A(A.a([s,C.au,A.E(new B.aAS(C.uO,"Export",!1,t,w?u:v.gbSI(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cw,C.iK,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bft(t,v.e?u:v.gb4h(),u)
else s=A.kp(!0,u,u,new B.dZF(v,t),s,u,D.bD5,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAS.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aF,t,t,0,C.c,t,C.wi,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.wi,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bft.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aF.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lC(new B.dbW(),new A.D(E.a0I,A.x(A.a([A.lC(new B.dbX(),A.q(x,A.X(C.zb,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a9(C.aA,C.aE,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.e3,C.hG,x,x,new A.br(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dY,A.dh(C.oG,D.fXJ,this.d,A.bp(C.aF,x,x,x,C.c,x,C.Og,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.Q,0,C.p),x),C.cw,C.C7,x,x,new A.br(0,1,w),s),x,x,x)}}
B.add.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dv(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aF.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mI(D.n6))p=D.ds3
else{p=C.a.a0(p,"image/")||i.mI(D.S8)
n=y.O
p=p?A.a([C.cG,C.aF],n):A.a([C.aN.j(0.85),C.aF.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a9(C.aA,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garm()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n6))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.ax,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cf))
if(!(!o||i.mI(D.n6)))l.push(A.h5R(C.aF,!1,j,j,j,!1,j,j,new B.dci(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.X(C.oy,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cf))
return A.lC(new B.dcj(),new A.D(C.el,A.aI(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a09,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bJ("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_e.prototype={
S(){return new B.aAX()},
gd1(){return this.c}}
B.aAX.prototype={
Y(){this.a4()
this.ys()},
t(){B.hUg(this.e)
this.a3()},
ys(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ys=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rS(o.c,o.d),$async$ys)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hUj(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hUi(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dcf(s))
x=1
break}s.m(new B.dcg(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dch(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ys,w)},
a2N(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rS(t.c,t.d),$async$a2N)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fh7)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiJ(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2N)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2N,w)},
c2a(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kD(u,C.A,v,new B.dcd(w,t),C.hf,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dce(w),C.hf,C.dB,!0,v,!1,v,v)
else return C.bM
return A.v_(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2j(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.D9,u,u,u,v.gb83(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fu
else{q=v.r
if(q!=null)t=new A.D(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ez,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dh(C.D9,D.fFT,v.gb83(),A.bp(C.aF,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.c2a()}return A.c4(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_b.prototype={
S(){return new B.aAU(A.ajD(),C.bE,C.bE)},
gd1(){return this.c}}
B.aAU.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dbT(v))
x.gcXu().iC(new B.dbU(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bbo
x.iC(new B.dbV(v))
v.ys()},
ys(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ys=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rS(p.c,p.d),$async$ys)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbM(s))
x=1
break}x=8
return A.b(s.d.vp(0,new A.a4q(r,s.a.d.c)),$async$ys)
case 8:if(s.c==null){x=1
break}s.m(new B.dbN(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbO(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ys,w)},
a_A(){var x=0,w=A.j(y.H),v=this,u
var $async$a_A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_A)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_A)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_A,w)},
aVx(d){var x=d.a
return C.a.b0(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2j(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fu
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bTe,C.f,o,o,new A.p(o,o,o,A.m(24),o,L.Q7,C.n),o,88,o,o,o,o,o,88)
t=A.kV(C.aF,o,o,m,0,new B.dbP(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVx(p.w)+" / "+p.aVx(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aF,o,o,o,o,D.fdx,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uQ:C.hx,o,o,o,o,o)
x=A.x(A.a([u,C.l2,t,x,C.d8,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbE(),s)],y.p),C.l,o,C.e,C.Q,0,C.p)}}return A.c4(v,w,A.at(new A.D(C.qC,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qw.prototype={
S(){return new B.aB_()},
gd1(){return this.c}}
B.aB_.prototype={
Y(){this.a4()
this.Qd()},
Qd(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qd=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h8a(o.c,o.d,new B.dcw(s)),$async$Qd)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dcx(s))
x=1
break}s.e=r
q=O.ih_(r)
if(q==null){s.m(new B.dcy(s))
x=1
break}s.d=q
q.aW(0,s.gb3_())
x=8
return A.b(q.iW(0).dh(0,C.rS),$async$Qd)
case 8:if(s.c==null){x=1
break}s.m(new B.dcz(s))
x=9
return A.b(q.qp(0),$async$Qd)
case 9:q.tY(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dcA(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qd,w)},
chE(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dcB(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dt(0,x.gb3_())
w=x.d
if(w!=null)w.t()
B.irD(x.e)
x.a3()},
afc(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0S(u.c,u.d),$async$afc)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afc,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2j(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aG(t,t,t,t,C.oF,t,t,t,u.gcby(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fu
else{q=u.r
if(q!=null)s=new A.D(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aj5(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fH(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AN(s,t),A.aA(t,A.zl(A.q(t,A.X(q?I.uQ:C.hx,C.c,t,t,t,48),C.f,t,t,new A.p(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcD(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_g.prototype={
S(){return new B.aAY(new A.cw(null,y.A))}}
B.aAY.prototype={
gcJj(){var x,w,v=this.a
if(v.e!==D.Tt)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIU(){var x,w,v=this.a
if(v.e!==D.Ae)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJj()
if(x!=null){v.Rl(x)
v.e=A.df(R.GF,new B.dcs(v,x))}w=v.gcIU()
if(w!=null){v.Rk(w)
v.f=A.df(C.fH,new B.dct(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rk(d){return this.coN(d)},
coN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqH(d),$async$Rk)
case 3:t=f
x=4
return A.b(B.ce2(d),$async$Rk)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dck(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rk,w)},
Rl(d){return this.coO(d)},
coO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fWe(d),$async$Rl)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDH(t),$async$Rl)
case 4:if(u.c==null){x=1
break}u.m(new B.dcl(u))
u.c.L(y.q).f.U(D.aTV)
case 1:return A.h(v,w)}})
return A.i($async$Rl,w)},
gc7p(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbz(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2z(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DA()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fkf)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.ec(new B.dcm(),!1,null,y.N)),$async$a2z)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDH(s),$async$a2z)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTV)
case 1:return A.h(v,w)}})
return A.i($async$a2z,w)},
aaO(d){return this.bMv(d)},
bMv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fw(C.d.aO(t,", "))),$async$aaO)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaO,w)},
afa(d){return this.bMd(d)},
bMd(d){var x=0,w=A.j(y.H),v=this
var $async$afa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fw(v.a.c)),$async$afa)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fhB)
return A.h(null,w)}})
return A.i($async$afa,w)},
a2t(d){return this.cvT(d)},
cvT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apE(s.d,4),$async$a2t)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tp(r,"ngmy_doc_share_qr.png"),$async$a2t)
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
return A.i($async$a2t,w)},
gaZ_(){var x,w=this.a
if(w.e!==D.J7)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaL(d){return this.bMo(d)},
bMo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ_()
if(t==null){x=1
break}x=3
return A.b(A.fF(new A.fw(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaL)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fjf)
case 1:return A.h(v,w)}})
return A.i($async$aaL,w)},
afb(){var x=0,w=A.j(y.H),v=this,u
var $async$afb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.W8(),$async$afb)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2j(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aC(h,0,44)+"\u2026"
i=i.e
i=i!==D.J7&&i!==D.Tt&&i!==D.Ae
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J7||t===D.Tt||t===D.Ae?l:A.aG(l,l,l,l,C.lo,l,l,l,m.gb11(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.L(C.aF.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.U,A.qc(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7p(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J7){t=C.aF.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.U,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gcbz(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c2F,D.fPt,new B.dcn(m,d),l)],p))}if(m.a.e===D.J7&&m.gaZ_()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c_8,D.fM2,new B.dco(m,d),l)],p))
if(m.a.e===D.Ae){x=(m.w?C.dI:C.aF).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.U,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Tt){x=(m.r?C.dI:C.aF).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.U,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fx:C.aF,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.af,A.dh(D.bVH,D.fSE,m.gcwf(),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oM(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.q(l,A.x(q,C.l,l,C.bb,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D8,C.VT,new B.dcp(m,d),l),1),C.au,A.E(A.dh(C.zz,C.abu,new B.dcq(m,d),A.bp(C.aF,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.U,new A.a5(1/0,l,A.bI(C.AS,l,m.gb11(),A.bp(C.aN,l,l,l,l,C.h6,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dcr(),y.C)}}
B.adb.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.x(A.a([w,C.aQ,A.q(x,A.qc(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bI(C.AT,x,new B.dbL(d),x)],u),x,x,C.nn,v,x,x,x,x,D.fET,x)}}
B.a_a.prototype={
S(){return new B.aAT(A.zW(C.yu,C.o4,C.v2))}}
B.aAT.prototype={
t(){this.d.t()
this.a3()},
az1(d){var x,w,v,u,t
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
return A.c4(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fMA,x,x,x,1,x,!0),C.w,A.zV(this.d,C.c_,this.gaz0()),x,!1,!1,x,x)}}
B.a_h.prototype={
S(){return new B.aAZ(A.zW(C.yu,C.o4,C.v2))},
gd1(){return this.c}}
B.aAZ.prototype={
c3e(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ah9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MG("text/plain"),$async$ah9)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fk9)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ah9,w)},
abC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hF2(p,!0),$async$abC)
case 3:t=e
p=t==null
s=B.a7Y(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fgI)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abC,w)},
t(){this.d.t()
this.a3()},
az1(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3e(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.ar6,v,v,v,w.gbSb(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a3E,v,v,v,w.gcm8(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.uK:P.Pl,v,v,v,v,v),v,v,v,new B.dcv(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fTB,v,v,v,1,v,!0)
u=A.zV(w.d,C.c_,w.gaz0())
x=A.m(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eyh],s),v),v,!1,!1,v,v)}}
B.bfu.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ph
else x=s.w?C.aF:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aF.j(0.12):s.f.a[0]
u=A.m(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.ph:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0P,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aan.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Ph.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yg.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pg.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FM.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crF.prototype={}
B.FL.prototype={}
B.aam.prototype={}
B.avg.prototype={}
B.Yh.prototype={}
var z=a.updateTypes(["aB<~>()","P(jC)","n(jC)","W_(Z)","~()","a_d(Z)","H(H,jC)","Qw(Z)","~(mi)","ct(FL)","aB<jC?>(@)","VY(Z)","W1(Z)","D(jC)","jC(@)","a8<n,@>(jC)","a_c(Z)","VZ(Z)","a_e(Z)","a_b(Z)","a_g(Z)","adb(Z)","ai<jC>()","a_h(Z)","add(Z,H)","a_a(Z)","a8<n,aE>(jC)","ct(Yg)","ct(aam)","aB<ct>(FL)"])
B.crB.prototype={
$1(d){var x=this.a
x.x=D.aQI
x.y.J(0,D.aQI)},
$S:74}
B.crC.prototype={
$1(d){var x=this.a
x.x=D.aQH
x.y.J(0,D.aQH)},
$S:74}
B.crD.prototype={
$1(d){var x=this.a
x.aix(A.ahu(d.data)).bG(new B.crA(x),y.b)},
$S:74}
B.crA.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crE.prototype={
$1(d){},
$S:74}
B.crH.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hZ3(d.channel))},
$S:16}
B.crI.prototype={
$1(d){},
$S:16}
B.crJ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ii9(w.iceConnectionState)
x.cx=w
if($.hhA())switch(w.a){case 0:x.cy=D.aQN
break
case 1:x.cy=D.aQO
break
case 3:x.cy=D.aQP
break
case 5:x.cy=D.aQL
break
case 6:x.cy=D.aQM
break
case 7:x.cy=D.a9a
break
default:break}},
$S:108}
B.crK.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iia(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.crL.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ita(w.signalingState)},
$S:108}
B.crM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.irk(w.connectionState)},
$S:108}
B.crN.prototype={
$1(d){},
$S:108}
B.crO.prototype={
$1(d){},
$S:16}
B.fw7.prototype={
$1(d){var x=y.F.a(new A.r7([],[]).oL(d.target.result,!1)),w=C.yv.q(x.objectStoreNames,"blobs")
if(!w)C.yr.Ll(x,"blobs")},
$S:179}
B.fVq.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wR.fq(this.b)
$.eX.mC()
this.c.$1(d)},
$S:467}
B.fVs.prototype={
$1(d){return this.a.$1(B.i7u(this.b,this.c))},
$S:28}
B.fVr.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:28}
B.fVp.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fVF.prototype={
$1(d){var x=this
return B.hu_(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fVG.prototype={
$1(d){var x=this
return B.hu_(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyL.prototype={
$1(d){var x=this
return B.cdE(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dc3.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dc0.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdE(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dc2.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdE(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dc1.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdE(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dc5.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aG(x,x,x,x,D.bUi,x,x,x,new B.dc4(d),x,x,x,x,x,x),A.E(A.Fx(D.RS,!0,x,C.a2F,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.RS,x,g,C.amL,0,e,f)},
$C:"$4",
$R:4,
$S:449}
B.dc4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAH.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eQ,y.o).w,t=this.a,s=t?C.iD:C.c,r=A.m(28),q=A.q(v,D.bwT,C.f,v,v,D.b6R,v,v,v,v,D.amC,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bYC,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GV,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bt(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arm,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dn,new B.fAF(d),v),1),C.au,A.E(A.bI(D.fL3,v,new B.fAG(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.Q,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GI,v,v,v,v),v)},
$S:60}
B.fAF.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fAG.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fhS)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDz(v,x))},
$S:0}
B.fBa.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eQ,y.o).w,u=x.a,t=u?C.iD:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bwI,C.f,w,w,D.b8l,w,w,w,w,D.amC,w,w,1/0),new A.D(C.GV,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hdn(u,"Organization name",C.Hn,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hdn(u,"Access code",C.nI,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hdn(u,"Member password",H.HU,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bI(D.fTI,w,new B.fB9(r,q,p,d),A.bp(C.aF,w,w,w,w,C.h6,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.Q,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GI,w,w,w,w),w)},
$S:60}
B.fB9.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fhX)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGH(u,x,w))},
$S:0}
B.cdv.prototype={
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
p=C.a.a0(j,"http")?A.cD(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vP(p,null).dh(0,C.a_N),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cj(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdB.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdC.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdD.prototype={
$1(d){return d.b},
$S:z+2}
B.cdx.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdy.prototype={
$1(d){return d.b},
$S:z+2}
B.cdw.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdz.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdA.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fVD.prototype={
$1(d){return new B.VY(this.a,null)},
$S:z+11}
B.fVE.prototype={
$1(d){return new B.W1(this.a,this.b,this.c,null)},
$S:z+12}
B.dYz.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dZI.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZJ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZK.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dZH(x,d))},
$S:2}
B.dZH.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZL.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZM.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZN.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZO.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZP.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZT.prototype={
$3(d,e,f){return A.d6(A.dM(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dZR.prototype={
$1(d){var x=this.a
return x.f?null:x.a_z()},
$S:2}
B.dZS.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aF.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S8))s=C.uN
else s=C.a.a0(s,"video/")||d.mI(D.n6)?C.qQ:D.apN
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.q(v,A.X(s,C.aF,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garm(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dYA.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dYB.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdF.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.cdG.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:96}
B.fWx.prototype={
$2(d,e){return e===this.a},
$S:300}
B.ftb.prototype={
$1(d){return J.k(d)},
$S:17}
B.fyX.prototype={
$1(d){var x=this.b
B.i5h(C.Ha.ga7h(this.a)).bG(x.gC_(x),y.H)},
$S:130}
B.fyY.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fyZ.prototype={
$0(){return null},
$S:12}
B.cdU.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fz_.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.j.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jC(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fDa.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxa.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdZ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.h_K.prototype={
$1(d){return new B.a_c(this.a,null)},
$S:z+16}
B.dc_.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dbY.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZG.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1G()},
$S:11}
B.dZ3.prototype={
$0(){var x=J.bGR(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZ4.prototype={
$0(){var x=J.bGR(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYD.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYC(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFZ(this.c)}},
$S:0}
B.dYC.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYE.prototype={
$0(){var x=J.bGR(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYJ.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dYI(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFZ(this.c)}},
$S:0}
B.dYI.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZu.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dZv.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZ0.prototype={
$1(d){return new B.VZ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYY.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IC(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.W2(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ul(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1Q(s.gI(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYH.prototype={
$1(d){this.a.ad_(d,"No files selected.","Added")},
$S:467}
B.dZ8.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZ7(),A.U(x).k("N<1,n>")))},
$S:0}
B.dZ7.prototype={
$1(d){return d.a},
$S:z+2}
B.dYN.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xO.cq().cZs(C.a1C,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jJ(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqG(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cr(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ul(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dZr.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZs.prototype={
$1(d){return new B.a_e(this.a.a.c,this.b,null)},
$S:z+18}
B.dZt.prototype={
$1(d){return new B.a_b(this.a.a.c,this.b,null)},
$S:z+19}
B.dYZ.prototype={
$1(d){return new B.Qw(this.a.a.c,this.b,null)},
$S:z+7}
B.dZ_.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZk.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IC(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8_(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cse(),$async$$0)
case 5:x=6
return A.b(p.ul(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dZg(p),r),new B.dZh(),r.k("N<ak.E,n>")).bY(0,new B.dZi())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.ec(new B.dZj(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pu(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.W8(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZg.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZf(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZf.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZh.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZi.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZj.prototype={
$1(d){var x=this.a
return new B.a_g(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZl.prototype={
$1(d){return d.a},
$S:z+2}
B.dZm.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZe.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aF.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garm(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n6)?C.t5:C.py
p=!x||p.mI(D.n6)?"Play video":"View"
return A.c2(A.bn(!0,new A.D(C.Ch,A.x(A.a([q,o,t,C.aB,B.a_f(!1,u,!1,w,p,new B.dZ9(d),v),B.a_f(!1,u,!1,C.jJ,"Share via QR",new B.dZa(d),"Letters/numbers QR code"),B.a_f(!1,u,!1,D.a2K,"Send to their Code",new B.dZb(d),"Enter someone else's personal code"),B.a_f(!1,u,!1,C.i_,"Download / save",new B.dZc(d),v),C.an,B.a_f(!1,u,!0,C.eh,"Delete",new B.dZd(d),v)],y.p),C.al,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.p(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,v,v,C.n),C.bj)},
$S:554}
B.dZ9.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dZa.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dZb.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZc.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dZd.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dYK.prototype={
$1(d){return d.a},
$S:z+2}
B.dYL.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYM.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a81(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hf(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pu(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYG.prototype={
$1(d){var x=this.a
x.um(new B.dYF(x,d,this.b),"Preparing\u2026")},
$S:467}
B.dYF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.W2(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cr(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFO(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZ1.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZ2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h8d(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hd(new B.dYS(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dYT(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYU(s))
case 5:x=8
return A.b(r.b.iH(0,C.GC,new B.dYV()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ul(),$async$$0)
case 9:s.ij("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYS.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYP(x,d,e))},
$S:242}
B.dYP.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYT.prototype={
$1(d){return new B.adb(this.a.a,null)},
$S:z+21}
B.dYU.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYV.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jh(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7Q(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3c(B.Jh(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqG(new B.dYQ(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cr(r)){if(B.h8c(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.ul(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dYR()).gI(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYQ.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dYO(x,d,e))},
$S:242}
B.dYO.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dYR.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.dZ6.prototype={
$1(d){return new B.a_h(this.a.a.c,null)},
$S:z+23}
B.dZ5.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0S(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZq.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aF.j(0.35)
return A.c2(A.bn(!0,new A.D(C.Ch,A.x(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_f(!0,w,!1,C.nI,"My Code",new B.dZn(d),"Your personal code & QR \u2014 others send docs to you"),B.a_f(!1,w,!1,D.a2K,"Send to their Code",new B.dZo(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_f(!1,w,!1,S.zq,"Import backup",new B.dZp(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.p(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l7,x,x,C.n),C.bj)},
$S:554}
B.dZn.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dZo.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGj()},
$S:0}
B.dZp.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dZD.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jr(D.RS,x,C.a2F,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RS).j(0.4+e*0.2),C.H,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:583}
B.dZB.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dZC.prototype={
$0(){this.a.aju()
return null},
$S:0}
B.dZE.prototype={
$3(d,e,f){return A.d6(A.dM(f,new A.o(0,(1-e)*10)),e)},
$S:101}
B.dZF.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.add(e,w,v,this.b,x.e,x.cbA(w),new B.dZx(x,w),new B.dZy(x,v,w),new B.dZz(x,w),new B.dZA(x,w),null)},
$S:z+24}
B.dZx.prototype={
$0(){this.a.agH(this.b)
return null},
$S:0}
B.dZy.prototype={
$0(){var x=this.a
return x.m(new B.dZw(x,this.b,this.c))},
$S:0}
B.dZw.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dZz.prototype={
$0(){this.a.Ow(this.b)
return null},
$S:0}
B.dZA.prototype={
$0(){this.a.ajh(this.b)
return null},
$S:0}
B.dbW.prototype={
$3(d,e,f){return A.d6(A.dM(f,new A.o(0,(1-e)*18)),e)},
$S:101}
B.dbX.prototype={
$3(d,e,f){return A.e6(C.A,f,e,null,null)},
$S:111}
B.dcj.prototype={
$3(d,e,f){return A.d6(A.dM(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dci.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dcf.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcg.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dch.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcd.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dcb(this.a),C.hf,C.dB,!0,x,!1,x,x)
$.aW.x1$.push(new B.dcc(this.a))
return C.bM},
$S:133}
B.dcb.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dc9(this.a))
return C.bM},
$S:193}
B.dc9.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc6(x))},
$S:7}
B.dc6.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcc.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc8(x))},
$S:7}
B.dc8.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dce.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dca(this.a))
return C.bM},
$S:193}
B.dca.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dc7(x))},
$S:7}
B.dc7.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbT.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbS(x,d))},
$S:1762}
B.dbS.prototype={
$0(){return this.a.f=this.b===C.vq},
$S:0}
B.dbU.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbR(x,d))},
$S:7}
B.dbR.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbV.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbQ(x,d))},
$S:7}
B.dbQ.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbM.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbN.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbO.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbP.prototype={
$1(d){return this.a.d.Nt(0,A.dv(0,0,0,C.j.V(d),0,0))},
$S:6}
B.dcw.prototype={
$0(){var x=this.a.a
return B.rS(x.c,x.d)},
$S:1763}
B.dcx.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dcy.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dcz.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dcA.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dcB.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcD.prototype={
$0(){var x=this.a
x.m(new B.dcC(x))},
$S:0}
B.dcC.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qp(0)},
$S:0}
B.dcs.prototype={
$1(d){return this.a.Rl(this.b)},
$S:11}
B.dct.prototype={
$1(d){return this.a.Rk(this.b)},
$S:11}
B.dck.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dcl.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcm.prototype={
$1(d){return D.htu},
$S:z+25}
B.dcr.prototype={
$2(d,e){if(d)B.W8()},
$S:128}
B.dcn.prototype={
$0(){return this.a.aaO(this.b)},
$S:0}
B.dco.prototype={
$0(){return this.a.aaL(this.b)},
$S:0}
B.dcp.prototype={
$0(){return this.a.afa(this.b)},
$S:0}
B.dcq.prototype={
$0(){return this.a.a2t(this.b)},
$S:0}
B.dbL.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dcv.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qt(),$async$$0)
case 2:u.m(new B.dcu(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dcu.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ce0.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n6)},
$S:z+1}
B.ce1.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ce_.prototype={
$2(d,e){return this.bmV(d,e)},
bmV(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W9(u.c,A.I(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fCN.prototype={
$1(d){if(d===D.a99&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fCO.prototype={
$0(){},
$S:12}
B.fDo.prototype={
bou(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fqs(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hp8(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bou(d,e)},
$S:765}
B.fDn.prototype={
$1(d){var x=this
d.b=new B.fDm(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fDm.prototype={
$1(d){return this.bot(d)},
bot(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0T(n,m),$async$$1)
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
return A.b(B.fqs(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
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
return A.b(B.a7Z(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAW.prototype,"gcj1","QV",0)
x(v,"gcjT","JI",0)
x(v,"gcjo","yC",0)
x(v=B.aEV.prototype,"gcbu","af8",0)
x(v,"gcbv","a_y",0)
x(v,"gcyH","aiZ",0)
x(v=B.aEY.prototype,"gcbw","a_z",0)
x(v,"gcyI","a2O",0)
x(B.aEW.prototype,"gcbx","af9",0)
x(B.aAV.prototype,"gcbC","cbD",4)
x(v=B.aEX.prototype,"gcjp","a0K",0)
x(v,"gcxh","cxi",4)
x(v,"gb4h","aAu",0)
x(v,"gcAc","ajo",0)
x(v,"gbSI","Yo",0)
x(v,"gcbB","EL",0)
x(B.aAX.prototype,"gb83","a2N",0)
x(B.aAU.prototype,"gcbE","a_A",0)
x(v=B.aB_.prototype,"gb3_","chE",4)
x(v,"gcby","afc",0)
x(v=B.aAY.prototype,"gcwf","a2z",0)
x(v,"gb11","afb",0)
w(B.aAT.prototype,"gaz0","az1",8)
x(v=B.aAZ.prototype,"gcm8","ah9",0)
x(v,"gbSb","abC",0)
w(v,"gaz0","az1",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.crF,B.aam,B.avg,B.aDz,B.aGH,B.jC,B.acU,B.bxN,B.FL,B.Yh])
w(B.crG,B.crF)
w(B.b60,B.aam)
x(A.ht,[B.crB,B.crC,B.crD,B.crA,B.crE,B.crH,B.crI,B.crJ,B.crK,B.crL,B.crM,B.crN,B.crO,B.fw7,B.fVq,B.fVs,B.fVr,B.fVF,B.fVG,B.fyL,B.dc0,B.dc2,B.dc1,B.dc5,B.fAH,B.fBa,B.cdv,B.cdC,B.cdD,B.cdy,B.cdw,B.cdz,B.cdA,B.fVD,B.fVE,B.dZK,B.dZT,B.dZR,B.dZS,B.ftb,B.fyX,B.fyY,B.cdU,B.fz_,B.fDa,B.fxa,B.fxb,B.cdZ,B.h_K,B.dc_,B.dbY,B.dZG,B.dYC,B.dYI,B.dZ0,B.dYH,B.dZ7,B.dZr,B.dZs,B.dZt,B.dYZ,B.dZg,B.dZf,B.dZh,B.dZi,B.dZj,B.dZl,B.dZm,B.dZe,B.dYK,B.dYL,B.dYG,B.dZ1,B.dYT,B.dYR,B.dZ6,B.dZq,B.dZD,B.dZE,B.dbW,B.dbX,B.dcj,B.dci,B.dcd,B.dcb,B.dc9,B.dcc,B.dce,B.dca,B.dbT,B.dbU,B.dbV,B.dbP,B.dcs,B.dct,B.dcm,B.ce0,B.ce1,B.fCN,B.fDn,B.fDm])
w(B.b61,B.avg)
x(A.iJ,[B.fVp,B.dc3,B.dc4,B.fAF,B.fAG,B.fB9,B.dYz,B.dZI,B.dZJ,B.dZH,B.dZL,B.dZM,B.dZN,B.dZO,B.dZP,B.dZQ,B.dYA,B.dYB,B.fyZ,B.dbZ,B.dZ3,B.dZ4,B.dYD,B.dYE,B.dYJ,B.dZu,B.dZv,B.dYY,B.dZ8,B.dYN,B.dZ_,B.dZk,B.dZ9,B.dZa,B.dZb,B.dZc,B.dZd,B.dYM,B.dYF,B.dZ2,B.dYW,B.dYP,B.dYU,B.dYV,B.dYX,B.dYO,B.dZ5,B.dZn,B.dZo,B.dZp,B.dZB,B.dZC,B.dZx,B.dZy,B.dZw,B.dZz,B.dZA,B.dcf,B.dcg,B.dch,B.dc6,B.dc8,B.dc7,B.dbS,B.dbR,B.dbQ,B.dbM,B.dbN,B.dbO,B.dcw,B.dcx,B.dcy,B.dcz,B.dcA,B.dcB,B.dcD,B.dcC,B.dck,B.dcl,B.dcn,B.dco,B.dcp,B.dcq,B.dbL,B.dcv,B.dcu,B.fCO])
x(A.lE,[B.adc,B.Od,B.aan,B.Ph,B.Yg,B.Pg,B.FM])
x(A.af,[B.a_d,B.VY,B.W1,B.VZ,B.a_c,B.W_,B.a_e,B.a_b,B.Qw,B.a_g,B.a_a,B.a_h])
x(A.ah,[B.aAW,B.aEV,B.aEY,B.aEW,B.aAV,B.aEX,B.aAX,B.aAU,B.aB_,B.aAY,B.aAT,B.aAZ])
x(A.ax,[B.adF,B.aAS,B.bft,B.add,B.adb,B.bfu])
x(A.jw,[B.cdB,B.cdx,B.cdF,B.cdG,B.fWx,B.dYS,B.dYQ,B.dZF,B.dcr,B.ce_,B.fDo])
x(A.j3,[B.bkW,B.bxp])})()
A.iT(b.typeUniverse,JSON.parse('{"b60":{"aam":[]},"b61":{"avg":[]},"a_d":{"af":[],"v":[]},"aAW":{"ah":["a_d"]},"adF":{"ax":[],"v":[]},"VY":{"af":[],"v":[]},"W1":{"af":[],"v":[]},"aEV":{"ah":["VY"]},"aEY":{"ah":["W1"]},"bkW":{"j3":[]},"VZ":{"af":[],"v":[]},"aEW":{"ah":["VZ"]},"a_c":{"af":[],"v":[]},"W_":{"af":[],"v":[]},"add":{"ax":[],"v":[]},"a_e":{"af":[],"v":[]},"a_b":{"af":[],"v":[]},"Qw":{"af":[],"v":[]},"a_g":{"af":[],"v":[]},"adb":{"ax":[],"v":[]},"a_a":{"af":[],"v":[]},"a_h":{"af":[],"v":[]},"aAV":{"ah":["a_c"]},"bxp":{"j3":[]},"aEX":{"ah":["W_"]},"aAS":{"ax":[],"v":[]},"bft":{"ax":[],"v":[]},"aAX":{"ah":["a_e"]},"aAU":{"ah":["a_b"]},"aB_":{"ah":["Qw"]},"aAY":{"ah":["a_g"]},"aAT":{"ah":["a_a"]},"aAZ":{"ah":["a_h"]},"bfu":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uK"),k:x("ME()"),m:x("bu<n,n>"),F:x("rs"),g:x("aB<jC?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<n,P>>"),t:x("O<a8<n,@>>"),r:x("O<jC>"),w:x("O<+file,name(lT,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j3>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jC>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iC"),e:x("ixe"),af:x("EY"),U:x("jC"),b:x("ct"),C:x("aE"),aK:x("wE"),ab:x("FL"),br:x("avg"),v:x("Yh"),N:x("n"),X:x("br<F>"),Q:x("m3"),D:x("dK"),aw:x("bJ<n>"),cd:x("Y<a8<n,@>>"),c7:x("v"),ch:x("c3<ai<jC>>"),aW:x("c3<dK?>"),aY:x("c3<~>"),cx:x("adc"),b1:x("bk<ai<jC>>"),cf:x("bk<dK?>"),d4:x("bk<~>"),c4:x("aDz"),bG:x("aGH"),q:x("mz"),B:x("pN<FL>"),c6:x("pN<aan>"),y:x("P"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jC>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jC?"),R:x("aE?"),c:x("Yh?"),d:x("+answerQr,transfer(n,aB<ai<jC>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Od,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("acU?"),bk:x("aDz?"),ag:x("aGH?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5c=new A.ay(C.aF,2,C.r,-1)
D.c7d=new A.a9(C.a6,C.aa,C.x,C.a4P,null,null)
D.b6R=new A.p(null,null,null,C.mF,null,D.c7d,C.n)
D.b8l=new A.p(null,null,null,C.mF,null,E.I5,C.n)
D.afB=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ah0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ai1=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajP=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fFM=new A.B("Your team portal",null,C.di,null,null,null,null,null,null,null,null,null)
D.fUE=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dj6=x([D.fFM,C.an,D.fUE],y.p)
D.bwz=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dj6,null)
D.fZ6=new A.B("Create your organization",null,C.fC,null,null,null,null,null,null,null,null,null)
D.fKe=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dzX=x([D.fZ6,C.an,D.fKe],y.p)
D.bwI=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dzX,null)
D.fVg=new A.B("Team Member sign-in",null,C.fC,null,null,null,null,null,null,null,null,null)
D.fOc=new A.B("Enter the access code and password from your organization.",null,G.EI,null,null,null,null,null,null,null,null,null)
D.dxI=x([D.fVg,C.an,D.fOc],y.p)
D.bwT=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dxI,null)
D.bD5=new A.R(16,10,16,28)
D.bDe=new A.R(16,14,16,4)
D.bEv=new A.R(20,0,20,16)
D.bF0=new A.R(20,8,20,16)
D.amC=new A.R(24,22,24,20)
D.a2K=new A.a0(63394,"MaterialIcons",!1)
D.apN=new A.a0(63515,"MaterialIcons",!1)
D.bSe=new A.a0(983813,"MaterialIcons",!1)
D.bPv=new A.a0(62867,"MaterialIcons",!1)
D.bTe=new A.ae(D.bPv,44,C.c,null,null,null)
D.bUi=new A.ae(C.k6,null,C.ab,null,null,null)
D.bVH=new A.ae(C.jp,18,null,null,null,null)
D.bXr=new A.ae(D.a2K,26,C.c,null,null,null)
D.bY1=new A.ae(C.CY,null,null,null,null,null)
D.bYC=new A.ae(C.D5,null,null,null,null,null)
D.bZN=new A.ae(W.a2V,null,null,null,null,null)
D.c_8=new A.ae(C.hM,16,null,null,null,null)
D.c2F=new A.ae(C.t4,16,null,null,null,null)
D.bTv=new A.ae(C.nI,null,null,null,null,null)
D.c3x=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZ9=new A.ae(C.Hn,null,null,null,null,null)
D.c3C=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZ9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bTQ=new A.ae(H.HU,null,null,null,null,null)
D.c3N=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bTQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cSP=x([C.fo,C.b2,C.aF],y.O)
D.c94=new A.a9(C.aA,C.aE,C.x,D.cSP,null,null)
D.cSg=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RS=x([C.fo,C.aF],y.O)
D.S8=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n6=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.ds3=x([C.oh,C.aF],y.O)
D.ekw={iceServers:0}
D.aLd={urls:0}
D.dDH=new A.bu(D.aLd,["stun:stun.l.google.com:19302"],y.m)
D.dDG=new A.bu(D.aLd,["stun:stun1.l.google.com:19302"],y.m)
D.d8B=x([D.dDH,D.dDG],A.as("O<a8<n,n>>"))
D.dCY=new A.bu(D.ekw,[D.d8B],A.as("bu<n,@>"))
D.J7=new B.Od(0,"lanDirect")
D.Ts=new B.Od(1,"cloudStash")
D.dP1=new B.Od(2,"inlineInstant")
D.Tt=new B.Od(3,"webrtcLink")
D.Ae=new B.Od(4,"videoCloud")
D.fUD=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cI4=x([E.arv,C.ae,D.fUD],y.p)
D.f8s=new A.c6(C.aL,C.bb,C.i,C.l,null,C.p,null,0,D.cI4,null)
D.es_=new A.D(C.cp,D.f8s,null)
D.fwj=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Ix,null,null,null)
D.fGk=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fwj,null,C.K,null,null,null,null,null,null,null)
D.er9=new A.D(C.Cm,D.fGk,null)
D.bcJ=new A.cg(C.A,null,null,D.er9,null)
D.eyh=new A.cL(0,null,0,28,null,null,D.bcJ,null)
D.eyB=new B.aan(0,"RTCDataChannelConnecting")
D.aQH=new B.aan(1,"RTCDataChannelOpen")
D.aQI=new B.aan(3,"RTCDataChannelClosed")
D.eyC=new B.FM(0,"RTCIceConnectionStateNew")
D.eyD=new B.FM(1,"RTCIceConnectionStateChecking")
D.eyE=new B.FM(2,"RTCIceConnectionStateCompleted")
D.eyF=new B.FM(3,"RTCIceConnectionStateConnected")
D.eyG=new B.FM(4,"RTCIceConnectionStateCount")
D.eyH=new B.FM(5,"RTCIceConnectionStateFailed")
D.eyI=new B.FM(6,"RTCIceConnectionStateDisconnected")
D.aQJ=new B.FM(7,"RTCIceConnectionStateClosed")
D.aQK=new B.Yg(0,"RTCIceGatheringStateNew")
D.eyJ=new B.Yg(1,"RTCIceGatheringStateGathering")
D.a99=new B.Yg(2,"RTCIceGatheringStateComplete")
D.a9a=new B.Pg(0,"RTCPeerConnectionStateClosed")
D.aQL=new B.Pg(1,"RTCPeerConnectionStateFailed")
D.aQM=new B.Pg(2,"RTCPeerConnectionStateDisconnected")
D.aQN=new B.Pg(3,"RTCPeerConnectionStateNew")
D.aQO=new B.Pg(4,"RTCPeerConnectionStateConnecting")
D.aQP=new B.Pg(5,"RTCPeerConnectionStateConnected")
D.eyK=new B.Ph(0,"RTCSignalingStateStable")
D.eyL=new B.Ph(1,"RTCSignalingStateHaveLocalOffer")
D.eyM=new B.Ph(2,"RTCSignalingStateHaveRemoteOffer")
D.eyN=new B.Ph(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eyO=new B.Ph(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQQ=new B.Ph(5,"RTCSignalingStateClosed")
D.fdx=new A.av(160,48)
D.bdZ=new A.fk(2,null,null,null,null,C.aF,null,null,null,null)
D.ff5=new A.a5(16,16,D.bdZ,null)
D.fJy=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fgy=new A.b1(D.fJy,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRf=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fgB=new A.b1(D.fRf,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_a=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fgI=new A.b1(D.h_a,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fJ8=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new A.b1(D.fJ8,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVr=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTV=new A.b1(D.fVr,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fWU=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhB=new A.b1(D.fWU,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0D=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhS=new A.b1(D.h0D,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZA=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new A.b1(D.fZA,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_O=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fiJ=new A.b1(D.h_O,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHJ=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fjf=new A.b1(D.fHJ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTc=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fjA=new A.b1(D.fTc,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fLT=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fk5=new A.b1(D.fLT,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h0J=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fk9=new A.b1(D.h0J,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHZ=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new A.b1(D.fHZ,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGG=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fku=new A.b1(D.fGG,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fDt=new A.B("NGMY DOC SHARE",null,C.aVi,null,null,null,null,null,null,null,null,null)
D.fET=new A.B("Show this to sender",null,C.iA,null,null,null,null,null,null,null,null,null)
D.fFT=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fKF=new A.B("Organization settings",null,C.cC,null,null,null,null,null,null,null,null,null)
D.fL3=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fM2=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fMA=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fPt=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fSi=new A.B("Send to their Doc Share",null,C.nX,null,null,null,null,null,null,null,null,null)
D.fSE=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fSZ=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fTB=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTI=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fU5=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.fXp=new A.B("Share files & videos\nwith a scan.",null,C.aVl,null,null,null,null,null,null,null,null,null)
D.fXJ=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.htu=new B.a_a(null)
D.acv=new B.adc(0,"docShare")
D.acw=new B.adc(1,"gate")
D.Wv=new B.adc(2,"gateNoIndividual")})();(function staticFields(){$.aPr=null
$.fo_=function(){var x=y.N
return A.T(x,x)}()
$.H1=A.T(y.N,y.D)
$.ahh=A.T(y.N,A.as("lT"))
$.RS=A.T(y.N,y.D)
$.foF=A.T(y.N,A.as("acU"))
$.cdT=A.T(y.S,A.as("bxN"))
$.hp7=1
$.idF=null
$.idE=null
$.i4u=null
$.hdA=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ixJ","hH2",()=>new B.crG())
x($,"ivD","hhA",()=>C.a.q(A.bA(A.bA(A.bA(A.HA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["j5BISzem1cR+s9FRSAWglIadQ/4="]=a.current})($__dart_deferred_initializers__);