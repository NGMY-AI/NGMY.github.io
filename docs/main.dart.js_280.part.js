((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cri:function cri(){},
hXa(d){var x=null,w=new B.b5J(d,D.ex9,new A.pJ(x,x,y.c6),new A.pJ(x,x,y.B))
w.bBF(d)
return w},
b5J:function b5J(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
crd:function crd(d){this.a=d},
cre:function cre(d){this.a=d},
crf:function crf(d){this.a=d},
crc:function crc(d){this.a=d},
crg:function crg(d){this.a=d},
hXb(d,e){var x=y.N
x=new B.b5K(d,e,A.U(x,y.e),A.U(x,y.z))
x.bBG(d,e)
return x},
b5K:function b5K(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
crj:function crj(d){this.a=d},
crk:function crk(d){this.a=d},
crl:function crl(d){this.a=d},
crm:function crm(d){this.a=d},
crn:function crn(d){this.a=d},
cro:function cro(d){this.a=d},
crp:function crp(d){this.a=d},
crq:function crq(d){this.a=d},
hbz(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zu.Mv(x,"ngmy_doc_share_v1",new B.fuY(),1)},
i2P(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wH(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
RZ(d,e){return B.iit(d,e)},
iit(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aP5
x=7
return A.b(o==null?$.aP5=B.hbz():o,$async$RZ)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.mY(s,"blobs","readwrite")
C.j6.mx(J.mX(q,"blobs"),r,d)
x=8
return A.b(J.pS(q),$async$RZ)
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
return A.i($async$RZ,w)},
RY(d){return B.iis(d)},
iis(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aP5
x=7
return A.b(o==null?$.aP5=B.hbz():o,$async$RY)
case 7:s=f
r=J.mY(s,"blobs","readonly")
x=8
return A.b(C.j6.A2(J.mX(r,"blobs"),d),$async$RY)
case 8:q=f
x=9
return A.b(J.pS(r),$async$RY)
case 9:o=B.i2P(q)
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
return A.i($async$RY,w)},
ahJ(d){return B.iir(d)},
iir(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aP5
x=7
return A.b(p==null?$.aP5=B.hbz():p,$async$ahJ)
case 7:s=f
r=J.mY(s,"blobs","readwrite")
C.j6.Gg(J.mX(r,"blobs"),d)
x=8
return A.b(J.pS(r),$async$ahJ)
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
return A.i($async$ahJ,w)},
fuY:function fuY(){},
i5h(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqu(w,v))}return u},
hCn(d,e){var x,w={},v=A.aXN("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fTY(w,v,e)
C.wM.z3(v,"change",new B.fU_(w,v,!1))
C.wM.z3(v,"cancel",new B.fTZ(w))
$.eV.mC()
v.click()
A.bQ(C.akA,new B.fTX(w),y.H)},
fTY:function fTY(d,e,f){this.a=d
this.b=e
this.c=f},
fU_:function fU_(d,e,f){this.a=d
this.b=e
this.c=f},
fTZ:function fTZ(d){this.a=d},
fTX:function fTX(d){this.a=d},
Dz(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUq()?3:4
break
case 3:x=5
return A.b(B.hxe(e,d,s,!0,!1,f,g,h,!1,i),$async$Dz)
case 5:x=1
break
case 4:x=6
return A.b(B.RC(d,s,f,g,h,i),$async$Dz)
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
return A.b(B.Jb(s,d),$async$Dz)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fqs(s,d),$async$Dz)
case 14:x=12
return A.b(r.hxe(q,p,o,n,m,l,k,j,a1,i),$async$Dz)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fUc(s,i,d,f,g,h),!1,null,y.H)),$async$Dz)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fUd(s,i,d,f,g,h),!1,null,y.H)),$async$Dz)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dz,w)},
RC(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RC=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0t(e),$async$RC)
case 3:u=k
x=4
return A.b(B.aqc(d,e,!1),$async$RC)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jb(e,d),$async$RC)
case 7:if(k){v=D.acd
x=1
break}x=8
return A.b(B.VR(e),$async$RC)
case 8:v=t?D.Wp:D.ace
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0r(d,e)){v=D.acd
x=1
break}x=11
return A.b(B.VR(e),$async$RC)
case 11:v=t?D.Wp:D.ace
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h6w(d,e)){v=D.acd
x=1
break}x=14
return A.b(B.VR(e),$async$RC)
case 14:v=D.Wp
x=1
break
case 13:v=t?D.Wp:D.ace
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
fqs(d,e){var x=0,w=A.j(y.y),v
var $async$fqs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0r(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0t(d),$async$fqs)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqs,w)},
hxe(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fxx(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hsd(d,e,f,g,h,i,j){return new B.a_2(e,j,d,g,h,i,f,null)},
fzq(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fzq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fzt(A.R(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fzq)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzq,w)},
fzV(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fzV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
r=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fzX(A.R(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fzV)
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
return A.i($async$fzV,w)},
hbK(d,e,f,g){var x=null,w=A.Y(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fMu(d,e){var x=0,w=A.j(y.H),v
var $async$fMu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.VR(e),$async$fMu)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eO()
case 1:return A.h(v,w)}})
return A.i($async$fMu,w)},
fUc:function fUc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fUd:function fUd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acZ:function acZ(d,e){this.a=d
this.b=e},
fxx:function fxx(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_2:function a_2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAC:function aAC(){this.c=this.a=this.d=null},
dbD:function dbD(d,e){this.a=d
this.b=e},
dbA:function dbA(d){this.a=d},
dbC:function dbC(d){this.a=d},
dbB:function dbB(d){this.a=d},
dbF:function dbF(){},
dbE:function dbE(d){this.a=d},
adr:function adr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDf:function aDf(d,e){this.a=d
this.b=e},
aGn:function aGn(d,e,f){this.a=d
this.b=e
this.c=f},
fzt:function fzt(d,e,f){this.a=d
this.b=e
this.c=f},
fzr:function fzr(d){this.a=d},
fzs:function fzs(d,e,f){this.a=d
this.b=e
this.c=f},
fzX:function fzX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzW:function fzW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd6(d,e,f,g,h){return B.hS2(d,e,f,g,h)},
hS2(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cd6=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dK(d,new B.cd7(s,e,h,g,f,q),y.g),y.l),$async$cd6)
case 3:r=p.aX(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cd6,w)},
b0o(d,e,f,g,h){return B.hS3(d,e,f,g,h)},
hS3(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0o=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avL("GET",d)
o=A.h2V()
if(o==null)o=new A.Ms(A.a([],y.W))
x=7
return A.b(o.f8(0,s).df(0,C.Gx),$async$b0o)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CM(),$async$b0o)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cc(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0o,w)},
b0n(d){return B.hS0(d)},
hS0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.oj),$async$b0n)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aS(0,A.m7(A.m5(p.e)).cF(0,p.w),null)
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
return A.i($async$b0n,w)},
cd5(d){return B.hS1(d)},
hS1(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cd5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.qr),$async$cd5)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m5(q.e)).cF(0,q.w)
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
return A.i($async$cd5,w)},
cd7:function cd7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jy:function jy(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
J9(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hS8(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.J9(C.a.b2(t,u.length))}return null},
hS9(d){var x=B.J9(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hS4(){var x,w=$.oo(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7A(d){return B.hS5(d)},
hS5(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bK),$async$a7A)
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
return A.i($async$a7A,w)},
a7B(d,e){return B.hS6(d,e)},
hS6(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7B=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cK,null),$async$a7B)
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
return A.i($async$a7B,w)},
Cb(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cb)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.J9(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7C(r),$async$Cb)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7A("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cb)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.J9(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cb)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hS4()
x=14
return A.b(B.a7C(m),$async$Cb)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().af()
x=15
return A.b(B.a7B("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cb)
case 15:k=f
x=16
return A.b(B.a7B("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cb)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cb)
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
return A.i($async$Cb,w)},
a7C(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.J9(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7A("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7C)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7C,w)},
a7D(d,e,f,g){return B.hSa(d,e,f,g)},
hSa(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7D=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gav(d)){v=!1
x=1
break}r=B.J9(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7C(r),$async$a7D)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.cdd())>1048576||g.aW(d,new B.cde())){v=B.F8(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7O("myCode",d,a0),$async$a7D)
case 4:u=a3
try{t=C.Y.aS(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cq(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.F8(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0w(u,g.gJ(d),a0),$async$a7D)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oo().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dK(d,new B.cdf(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0p(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"status","pending"],i,y.z),q),$async$a7D)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7D,w)},
F8(d,e,f,g,h){return B.hS7(d,e,f,g,h)},
hS7(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$F8=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$F8)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cH(a6,0,new B.cd9())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oo().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cM.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
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
a1=B.Jd(a9,q)
a0=new A.L1(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$F8)
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
return A.b(new A.abd(a1.a,a4,"media",a1.d,a2).xE(m,n,new A.Eo(!0,q.c)),$async$F8)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$F8)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRF(r),$async$F8)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dK(a6,new B.cda(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0p(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"status","pending"],e,d),a8),$async$F8)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRF(r),$async$F8)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$F8,w)},
b0p(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7A(t),$async$b0p)
case 3:s=g
r=y.aL.a(J.t(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cd8(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7B(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0p,w)},
O3(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$O3=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7A("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$O3)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cq(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aX(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b0q(k,a0),$async$O3)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().af())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b0v(h),$async$O3)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.VY(g,a0),$async$O3)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().af())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.X(r,new B.cdb(),q),n)
d=A.C(new A.X(r,new B.cdc(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dA(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7B("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$O3)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$O3,w)},
b0q(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cq(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aX(h),r=y.f,q=0
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
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.imj(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dx(l,m,"Received via My Code",t,e,i),$async$b0q)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRF(s),$async$b0q)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0q,w)},
cdd:function cdd(){},
cde:function cde(){},
cdf:function cdf(){},
cd9:function cd9(){},
cda:function cda(){},
cd8:function cd8(){},
cdb:function cdb(){},
cdc:function cdc(){},
fU9(d,e){var x=0,w=A.j(y.H)
var $async$fU9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fUa(e),!1,null,y.H)),$async$fU9)
case 2:return A.h(null,w)}})
return A.i($async$fU9,w)},
bFt(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cq(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fUb(g,e,f),!1,null,y.y)),$async$bFt)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFt,w)},
fUa:function fUa(d){this.a=d},
fUb:function fUb(d,e,f){this.a=d
this.b=e
this.c=f},
VO:function VO(d,e){this.c=d
this.a=e},
aEB:function aEB(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dXQ:function dXQ(d,e){this.a=d
this.b=e},
VS:function VS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEE:function aEE(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dYZ:function dYZ(d){this.a=d},
dZ_:function dZ_(d){this.a=d},
dZ0:function dZ0(d){this.a=d},
dYY:function dYY(d,e){this.a=d
this.b=e},
dZ1:function dZ1(d){this.a=d},
dZ2:function dZ2(d){this.a=d},
dZ3:function dZ3(d,e){this.a=d
this.b=e},
dZ4:function dZ4(d,e){this.a=d
this.b=e},
dZ5:function dZ5(d,e){this.a=d
this.b=e},
dZ6:function dZ6(d){this.a=d},
dZ9:function dZ9(){},
dZ7:function dZ7(d){this.a=d},
dZ8:function dZ8(d,e){this.a=d
this.b=e},
bkD:function bkD(){},
VP:function VP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEC:function aEC(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dXR:function dXR(d){this.a=d},
dXS:function dXS(d){this.a=d},
h6x(d){var x=d.i3
if(x>=0)return C.o.M(x)
return 10},
hSc(d){var x=d.l3
if(x>=0)return x
return 4.99},
hSb(d){var x=d.m4,w=y.N
w=x.jp(x,new B.cdh(),w,w)
return w},
hnm(d){var x=d.l4,w=y.N
w=x.jp(x,new B.cdi(),w,w)
return w},
b0t(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0t)
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
return A.i($async$b0t,w)},
a7F(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7F)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7F)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7F,w)},
VR(d){var x=0,w=A.j(y.H),v,u
var $async$VR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$VR)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$VR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$VR,w)},
h6w(d,e){var x,w,v
if(B.hSc(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hSb(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0r(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hnm(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hnn(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hnm(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dv(f,0,0,0,0,0).a).ab().af())
d.l4=w},
aqd(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqd)
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
return A.i($async$aqd,w)},
aqe(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqd(d),$async$aqe)
case 3:u=f
x=5
return A.b(A.az(),$async$aqe)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqe)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqe,w)},
aqc(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h6x(d)
if(u<=0){v=!1
x=1
break}if(B.h6w(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqd(e),$async$aqc)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqc,w)},
b0s(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jb(e,d),$async$b0s)
case 3:if(g){v=-1
x=1
break}u=B.h6x(d)
if(u<=0){v=-1
x=1
break}if(B.h6w(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqd(e),$async$b0s)
case 4:v=t.F(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0s,w)},
cdk(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jb(e,d),$async$cdk)
case 3:if(h){v=!1
x=1
break}v=B.aqc(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdk,w)},
cdj(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdj=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdk(d,u,i.gUq()),$async$cdj)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdj,w)},
a7E(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7E=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUq()){v=!0
x=1
break}if(B.b0r(d,u)){v=!0
x=1
break}x=5
return A.b(A.lw(u,C.TJ),$async$a7E)
case 5:x=k?3:4
break
case 3:B.hnn(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7E)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.la(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TJ,"Doc Share for Organizations"),$async$a7E)
case 7:if(!k){v=!1
x=1
break}B.hnn(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7E)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7E,w)},
cdh:function cdh(){},
cdi:function cdi(){},
fV2(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fV2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fV2)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fmW.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fmW.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fV2,w)},
ioE(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fmW.bt($.fmW,new B.fV4(d))},
fV4:function fV4(d){this.a=d},
fou(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fou=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bQ(C.jl,null,y.H),$async$fou)
case 3:C.B3.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fou,w)},
agz(d,e,f){var x=0,w=A.j(y.H),v
var $async$agz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fny.n(0,d,new B.acG(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$agz)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.H(["parts",e,"size",f],v,y.C),null)),$async$agz)
case 2:return A.h(null,w)}})
return A.i($async$agz,w)},
agt(d){return B.i7f(d)},
i7f(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$agt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fny.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$agt)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aS(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cq(s)){v=null
x=1
break}o=J.b7(s,new B.fs1(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.acG(r)
$.fny.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$agt,w)},
Rs(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.GU.n(0,d,u)
x=3
return A.b(B.RZ(d,u),$async$Rs)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rs,w)},
aPs(d){return B.i7d(d)},
i7d(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GU.h(0,d)
if(n!=null&&!C.aH.gav(n)){v=n
x=1
break}x=3
return A.b(B.RY(d),$async$aPs)
case 3:p=f
if(p!=null&&!C.aH.gav(p)){$.GU.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPs)
case 4:s=f
r=A.aT(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aM(r)
x=!J.cq(q)?9:10
break
case 9:B.Rs(d,q)
x=11
return A.b(J.hq(s,d),$async$aPs)
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
return A.i($async$aPs,w)},
i3h(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wH(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2y(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bD,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.fxJ(r,t),!1,s)
A.fy(r,"error",new B.fxK(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iD(0,C.NI,new B.fxL())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
aPM(d,e,f){return B.i9B(d,e,f)},
i9B(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPM=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2y(i),$async$aPM)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RZ(o,p),$async$aPM)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agz(k,j,s),$async$aPM)
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
return A.i($async$aPM,w)},
aPL(d,e,f){return B.i9A(d,e,f)},
i9A(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPL=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPM(d,e,f),$async$aPL)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2y(f),$async$aPL)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GU.n(0,s,r)
$.RJ.n(0,s,r)
x=11
return A.b(B.Rs(s,r),$async$aPL)
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
return A.i($async$aPL,w)},
Cc(d,e,f,g,h,i){return B.hSl(d,e,f,g,h,i)},
hSl(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cc=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cM.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jy(p,q,o,n,new A.V(Date.now(),0,!1).ab().af(),a0,f,B.b0z(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rs(s,d),$async$Cc)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cc)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cO.gcu().aM(d)),$async$Cc)
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
return A.b(B.B8(e),$async$Cc)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.H4(e,j),$async$Cc)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cc,w)},
VT(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VT=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.B8(d),$async$VT)
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
k=B.hnp(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().af()
i=new B.jy(m,n,k,l,j,"From folder",null,B.b0z(),null)
$.ah2.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2y(o),$async$VT)
case 7:g=a1
x=g!=null&&!C.aH.gav(g)?8:10
break
case 8:$.GU.n(0,h,g)
$.RJ.n(0,h,g)
B.Rs(h,g)
x=9
break
case 10:x=11
return A.b(B.aPL(d,m,o),$async$VT)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.H4(d,t),$async$VT)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VT,w)},
h6B(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h6B=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hnp(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jc(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gav(s)){v=B.Cc(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6B,w)},
Jc(d,e,f,g,h,i){return B.hSk(d,e,f,g,h,i)},
hSk(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jc=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cM.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.L1(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jc)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cq(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.Sv(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RZ(k,l),$async$Jc)
case 11:J.c8(q,k);++p
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
return A.b(j.a1(0),$async$Jc)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.RZ(k,new Uint8Array(A.cb(n))),$async$Jc)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agz(r,q,g),$async$Jc)
case 16:f=new B.jy(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().af(),a2,null,B.b0z(),null)
x=17
return A.b(B.B8(d),$async$Jc)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.H4(d,e),$async$Jc)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jc,w)},
VV(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$VV=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ah2.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2y(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.agt(s),$async$VV)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.RY(u[o]),$async$VV)
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
v=A.wH(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.RJ.h(0,s)
if(i==null)i=$.GU.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rO(d,e),$async$VV)
case 12:i=a0
if(i!=null&&!C.aH.gav(i))$.RJ.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wH(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VV,w)},
hnp(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rO(d,e){return B.hSm(d,e)},
hSm(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RJ.h(0,f)
if(e==null)e=$.GU.h(0,f)
if(e!=null&&!C.aH.gav(e)){v=e
x=1
break}s=$.ah2.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2y(s),$async$rO)
case 9:r=a3
if(r!=null&&!C.aH.gav(r)){$.GU.n(0,f,r)
$.RJ.n(0,f,r)
B.Rs(f,r)
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
return A.b(B.agt(f),$async$rO)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azp(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.RY(g[l]),$async$rO)
case 16:k=a3
if(k!=null&&!C.aH.gav(k))n.I(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apE()
if(!C.aH.gav(r)){$.GU.n(0,f,r)
$.RJ.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPs(f),$async$rO)
case 17:j=a3
if(j!=null&&!C.aH.gav(j)){$.RJ.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.VV(a0,a1,0,g),$async$rO)
case 20:i=a3
if(i!=null&&!C.aH.gav(i)){h=new Uint8Array(A.cb(i))
$.GU.n(0,f,h)
$.RJ.n(0,f,h)
B.Rs(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rO,w)},
hSp(d){var x,w,v=$.ah2.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hSq(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hSn(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqk(d,e,f,g,h){return B.hSo(d,e,f,g,h)},
hSo(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqk=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ah2.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2y(s),$async$aqk)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rO(g,e),$async$aqk)
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
return A.b(n.iy(d).xE(h,r,new A.Eo(!0,e.c)),$async$aqk)
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
return A.i($async$aqk,w)},
hnr(d,e,f,g,h){var x,w,v,u,t=$.hnq
$.hnq=t+1
x=Date.now()
w=""+1000*x+"_"+C.cM.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdv.n(0,t,new B.bxr(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azp(u)))
return t},
h6C(d){var x=0,w=A.j(y.H)
var $async$h6C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6C,w)},
Jd(d,e){var $async$Jd=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ah2.h(0,h)
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
return A.qo(B.VV(d,e,p,o<q?o:q),$async$Jd,w)
case 8:n=a1
x=n!=null&&!C.aH.gav(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qo(A.Gr(n),$async$Jd,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qo(B.agt("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jd,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qo(B.RY(h[l]),$async$Jd,w)
case 18:k=a1
x=k!=null&&!C.aH.gav(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qo(A.Gr(k),$async$Jd,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qo(B.rO(d,e),$async$Jd,w)
case 22:j=a1
x=j!=null&&!C.aH.gav(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qo(A.Gr(A.wH(j,p,o<i?o:i)),$async$Jd,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qo(null,0,w)
case 2:return A.qo(t.at(-1),1,w)}})
var x=0,w=A.hw8($async$Jd,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hxV(w)},
b0B(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdv.h(0,d)
if(t==null||J.cq(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5v(),$async$b0B)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0B,w)},
VU(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$VU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdv.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5v(),$async$VU)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agz(r.c,u,r.z),$async$VU)
case 4:t=new B.jy(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().af(),r.f,r.r,B.b0z(),null)
u=r.a
x=5
return A.b(B.B8(u),$async$VU)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.H4(u,s),$async$VU)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VU,w)},
a7L(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdv.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahJ(u[s]),$async$a7L)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a7L,w)},
cdx(d,e,f){var x=0,w=A.j(y.H)
var $async$cdx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCs(d,e,f),$async$cdx)
case 2:return A.h(null,w)}})
return A.i($async$cdx,w)},
cdy(d,e,f){var x=0,w=A.j(y.H)
var $async$cdy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCt(d,e,f),$async$cdy)
case 2:return A.h(null,w)}})
return A.i($async$cdy,w)},
F9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$F9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.B8(d),$async$F9)
case 2:p=g
J.nL(p,new B.cdw(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GU.W(0,v)
$.ah2.W(0,e)
x=3
return A.b(B.agt(v),$async$F9)
case 3:u=g
$.fny.W(0,v)
x=4
return A.b(A.az(),$async$F9)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$F9)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$F9)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahJ(s[q]),$async$F9)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahJ(v),$async$F9)
case 13:x=14
return A.b(B.H4(d,p),$async$F9)
case 14:return A.h(null,w)}})
return A.i($async$F9,w)},
b0A(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rO(d,e),$async$b0A)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fou(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0A,w)},
B8(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$B8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$B8)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Y.aS(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fxM(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$B8,w)},
H4(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$H4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$H4)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fBS(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$H4)
case 3:return A.h(null,w)}})
return A.i($async$H4,w)},
bCs(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(d),$async$bCs)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fvX(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFG(f))
x=4
return A.b(B.H4(d,u),$async$bCs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCs,w)},
bCt(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(d),$async$bCt)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fvY(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cNO(f))
x=4
return A.b(B.H4(d,u),$async$bCt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCt,w)},
acG:function acG(d){this.a=d},
fs1:function fs1(){},
fxJ:function fxJ(d,e){this.a=d
this.b=e},
fxK:function fxK(d){this.a=d},
fxL:function fxL(){},
cdw:function cdw(d){this.a=d},
bxr:function bxr(d,e,f,g,h,i,j,k,l){var _=this
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
fxM:function fxM(){},
fBS:function fBS(){},
fvX:function fvX(d){this.a=d},
fvY:function fvY(d){this.a=d},
a7M(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aW(d,new B.cdB())?3:4
break
case 3:x=5
return A.b(B.b0C(d,e),$async$a7M)
case 5:u=g
if(u!=null){t=u.c
B.O5(d,u.b,e,t)}v=u
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
return A.b(B.b0x(s),$async$a7M)
case 10:case 9:if(g){v=new A.QO(1,D.Tm,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.VW(d,e),$async$a7M)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W0(!0,!0,d,e),$async$a7M)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.O5(d,D.A9,e,t)
v=new A.QO(p,D.A9,t)
x=1
break}v=B.cdA(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7M,w)},
VW(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$VW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7O(null,d,e),$async$VW)
case 3:p=g
try{u=C.Y.aS(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cq(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b0w(p,d.length,e),$async$VW)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdy(e,C.d.gH(d).a,r.b),$async$VW)
case 7:case 6:q=r.a
x=8
return A.b(B.O5(d,D.Tm,e,q),$async$VW)
case 8:v=new A.QO(d.length,D.Tm,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VW,w)},
VX(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$VX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.n_)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7N(d,e),$async$VX)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdt(s,d,e,t),$async$VX)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0x(t),$async$VX)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rO(e,d),$async$VX)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.VW(A.a([d],y.r),e),$async$VX)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VX,w)},
VZ(){var x=0,w=A.j(y.H)
var $async$VZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h6v(),$async$VZ)
case 2:x=3
return A.b(B.aS1(),$async$VZ)
case 3:return A.h(null,w)}})
return A.i($async$VZ,w)},
a7N(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0z()
x=3
return A.b(B.cdx(e,d.a,u),$async$a7N)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7N,w)},
O5(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$O5=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tm&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7N(p,f),$async$O5)
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
return A.b(B.cds(o,p,u,f),$async$O5)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdt(o,p,f,t),$async$O5)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdr(o,u,p,f),$async$O5)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
b0C(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdz(e,d),$async$b0C)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W0(!1,!0,d,e),$async$b0C)
case 4:u=g
if(u!=null){t=u.b
v=new A.QO(u.a,D.A9,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0C,w)},
cdz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cdz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.VV(d,s,0,1),$async$cdz)
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
return A.i($async$cdz,w)},
cdA(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7O(null,d,e),$async$cdA)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hno(u)
if(t.length>800){v=null
x=1
break}v=new A.QO(d.length,D.dND,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdA,w)},
aql(d,e,f){return B.hSt(d,e,f)},
hSt(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aql=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nl(g,1)
x=B.h6A(g)?3:4
break
case 3:x=5
return A.b(B.cdu(g),$async$aql)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nl(g,13))
try{k=B.Fa(d,a0,s)
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
return A.b(B.b0v(q),$async$aql)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VY(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h6z(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VY(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Je(C.a.i(J.nl(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Je(C.a.i(J.nl(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Je(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.VY(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aql,w)},
Je(d,e,f){return B.hSr(d,e,f)},
hSr(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Je=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0n(r),$async$Je)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0n(A.cF(s,0,null)),$async$Je)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cq(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cd6(o,r,a1,n,a2),$async$Je)
case 11:m=a4
x=J.cq(m)?12:13
break
case 12:x=14
return A.b(B.cd5(q),$async$Je)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.VY(l,a2),$async$Je)
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
return A.i($async$Je,w)},
a7O(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aX(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rO(f,r),$async$a7O)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cO.gcu().aM(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().af())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.Y.az(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7O,w)},
VY(d,e){return B.hSs(d,e)},
hSs(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$VY=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Y.aS(0,a2,null)
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
e=J.aX(r)
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
return A.b(B.Cc(i,a3,d,k,l,o),$async$VY)
case 9:h=a5
if(h!=null)J.c8(n,h)
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
return A.i($async$VY,w)},
O4:function O4(d,e){this.a=d
this.b=e},
cdB:function cdB(){},
a27(d){var x=A.R(d).ax.a===C.J,w=x?D.ahO:D.afl,v=x?D.ajz:C.c,u=x?C.aQ:C.Q,t=x?C.bM:C.am,s=x?D.agM:C.aO
return new A.aHC([w,s,v,u,t,x?C.fn:C.bQ])},
hDe(d,e){var x=e?C.w.j(0.72):C.aT
return A.cf(null,x,!0,null,new B.fZb(e),d,null,!0,!0,y.N)},
cdg(d,e,f,g,h,i,j,k,l){return new B.VQ(e,l,d,f,k,j,g,h,i,null)},
a_4(d,e,f,g,h,i,j){return new B.bfb(g,h,j,e,i,d,f,null)},
fZb:function fZb(d){this.a=d},
a_1:function a_1(d,e){this.c=d
this.a=e},
aAB:function aAB(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbz:function dbz(d){this.a=d},
dbx:function dbx(d){this.a=d},
dby:function dby(d){this.a=d},
bx3:function bx3(){},
VQ:function VQ(d,e,f,g,h,i,j,k,l,m){var _=this
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
aED:function aED(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dYX:function dYX(d){this.a=d},
dYk:function dYk(d,e){this.a=d
this.b=e},
dYl:function dYl(d,e){this.a=d
this.b=e},
dXU:function dXU(d,e,f){this.a=d
this.b=e
this.c=f},
dXT:function dXT(d){this.a=d},
dXV:function dXV(d,e){this.a=d
this.b=e},
dY_:function dY_(d,e,f){this.a=d
this.b=e
this.c=f},
dXZ:function dXZ(d){this.a=d},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYM:function dYM(d){this.a=d},
dYh:function dYh(d,e,f){this.a=d
this.b=e
this.c=f},
dYe:function dYe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dXY:function dXY(d){this.a=d},
dYp:function dYp(d){this.a=d},
dYo:function dYo(){},
dY3:function dY3(d){this.a=d},
dYI:function dYI(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d,e){this.a=d
this.b=e},
dYK:function dYK(d,e){this.a=d
this.b=e},
dYf:function dYf(d,e){this.a=d
this.b=e},
dYg:function dYg(d,e){this.a=d
this.b=e},
dYB:function dYB(d,e){this.a=d
this.b=e},
dYx:function dYx(d){this.a=d},
dYw:function dYw(d){this.a=d},
dYy:function dYy(){},
dYz:function dYz(){},
dYA:function dYA(d,e){this.a=d
this.b=e},
dYC:function dYC(){},
dYD:function dYD(d){this.a=d},
dYv:function dYv(d,e){this.a=d
this.b=e},
dYq:function dYq(d){this.a=d},
dYr:function dYr(d){this.a=d},
dYs:function dYs(d){this.a=d},
dYt:function dYt(d){this.a=d},
dYu:function dYu(d){this.a=d},
dY0:function dY0(){},
dY1:function dY1(d){this.a=d},
dY2:function dY2(d,e){this.a=d
this.b=e},
dXX:function dXX(d,e){this.a=d
this.b=e},
dXW:function dXW(d,e,f){this.a=d
this.b=e
this.c=f},
dYi:function dYi(d){this.a=d},
dYj:function dYj(d,e,f){this.a=d
this.b=e
this.c=f},
dYc:function dYc(d,e){this.a=d
this.b=e},
dY8:function dY8(d){this.a=d},
dY5:function dY5(d,e,f){this.a=d
this.b=e
this.c=f},
dY9:function dY9(d){this.a=d},
dYa:function dYa(d){this.a=d},
dYb:function dYb(){},
dYd:function dYd(d,e){this.a=d
this.b=e},
dY6:function dY6(d){this.a=d},
dY4:function dY4(d,e,f){this.a=d
this.b=e
this.c=f},
dY7:function dY7(){},
dYn:function dYn(d){this.a=d},
dYm:function dYm(d,e){this.a=d
this.b=e},
dYH:function dYH(d,e){this.a=d
this.b=e},
dYE:function dYE(d){this.a=d},
dYF:function dYF(d,e){this.a=d
this.b=e},
dYG:function dYG(d){this.a=d},
dYU:function dYU(d){this.a=d},
dYS:function dYS(d){this.a=d},
dYT:function dYT(d){this.a=d},
dYV:function dYV(){},
dYW:function dYW(d,e){this.a=d
this.b=e},
dYO:function dYO(d,e){this.a=d
this.b=e},
dYP:function dYP(d,e,f){this.a=d
this.b=e
this.c=f},
dYN:function dYN(d,e,f){this.a=d
this.b=e
this.c=f},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
dYR:function dYR(d,e){this.a=d
this.b=e},
aAy:function aAy(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfa:function bfa(d,e,f){this.c=d
this.d=e
this.a=f},
dbv:function dbv(){},
dbw:function dbw(){},
ad_:function ad_(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dbT:function dbT(){},
dbS:function dbS(d){this.a=d},
a_3:function a_3(d,e,f){this.c=d
this.d=e
this.a=f},
aAD:function aAD(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dbP:function dbP(d){this.a=d},
dbQ:function dbQ(d,e,f){this.a=d
this.b=e
this.c=f},
dbR:function dbR(d,e){this.a=d
this.b=e},
dbN:function dbN(d,e){this.a=d
this.b=e},
dbL:function dbL(d){this.a=d},
dbJ:function dbJ(d){this.a=d},
dbG:function dbG(d){this.a=d},
dbM:function dbM(d){this.a=d},
dbI:function dbI(d){this.a=d},
dbO:function dbO(d){this.a=d},
dbK:function dbK(d){this.a=d},
dbH:function dbH(d){this.a=d},
a_0:function a_0(d,e,f){this.c=d
this.d=e
this.a=f},
aAA:function aAA(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dbs:function dbs(d){this.a=d},
dbr:function dbr(d,e){this.a=d
this.b=e},
dbt:function dbt(d){this.a=d},
dbq:function dbq(d,e){this.a=d
this.b=e},
dbu:function dbu(d){this.a=d},
dbp:function dbp(d,e){this.a=d
this.b=e},
dbl:function dbl(d){this.a=d},
dbm:function dbm(d){this.a=d},
dbn:function dbn(d,e){this.a=d
this.b=e},
dbo:function dbo(d){this.a=d},
Qn:function Qn(d,e,f){this.c=d
this.d=e
this.a=f},
aAG:function aAG(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dc5:function dc5(d){this.a=d},
dc6:function dc6(d){this.a=d},
dc7:function dc7(d){this.a=d},
dc8:function dc8(d){this.a=d},
dc9:function dc9(d,e){this.a=d
this.b=e},
dca:function dca(d){this.a=d},
dcc:function dcc(d){this.a=d},
dcb:function dcb(d){this.a=d},
a_5:function a_5(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAE:function aAE(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dc1:function dc1(d,e){this.a=d
this.b=e},
dc2:function dc2(d,e){this.a=d
this.b=e},
dbU:function dbU(d,e,f){this.a=d
this.b=e
this.c=f},
dbV:function dbV(d){this.a=d},
dbW:function dbW(){},
dc0:function dc0(){},
dbX:function dbX(d,e){this.a=d
this.b=e},
dbY:function dbY(d,e){this.a=d
this.b=e},
dbZ:function dbZ(d,e){this.a=d
this.b=e},
dc_:function dc_(d,e){this.a=d
this.b=e},
acY:function acY(d,e){this.c=d
this.a=e},
dbk:function dbk(d){this.a=d},
a__:function a__(d){this.a=d},
aAz:function aAz(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_6:function a_6(d,e){this.c=d
this.a=e},
aAF:function aAF(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dc4:function dc4(d){this.a=d},
dc3:function dc3(d){this.a=d},
bfb:function bfb(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hSu(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.he(v)},
O6(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$O6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$O6)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$O6)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$O6,w)},
a7P(d){return B.hSv(d)},
hSv(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7P)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z),!1,!1,C.cK,null),$async$a7P)
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
return A.i($async$a7P,w)},
W_(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$W_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O6(),$async$W_)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dL(A.a3(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().af())
r.n(s,d,t)
x=4
return A.b(B.a7P(s),$async$W_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W_,w)},
W0(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c6(),$async$W0)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.C(new A.X(f,new B.cdD(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hSu()
t=A.T(u).k("N<1,a8<m,aF>>")
r=A.C(new A.N(u,new B.cdE(s),t),t.k("ak.E"))
x=6
return A.b(B.O6(),$async$W0)
case 6:q=i
J.aJ(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.C))
x=7
return A.b(B.a7P(q),$async$W0)
case 7:x=8
return A.b(B.a7Q(r,u,g,s),$async$W0)
case 8:v=new A.bqZ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W0,w)},
aqm(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.O6(),$async$aqm)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqm,w)},
cdF(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.O6(),$async$cdF)
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
return A.i($async$cdF,w)},
a7Q(d,e,f,g){return B.hSw(d,e,f,g)},
hSw(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7Q=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqk("media",r,new B.cdC(s,e,g),f,q),$async$a7Q)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.W_(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7Q)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.W_(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$a7Q)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.W_(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7Q)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7Q,w)},
Fa(d,e,f){return B.hSx(d,e,f)},
hSx(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fa=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$Fa)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqm(b3),$async$Fa)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iJ,null,g),$async$Fa)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqm(b3),$async$Fa)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.O6(),$async$Fa)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cq(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
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
l=new A.abd(a8.a,b0,"media",a8.d,a9).D7(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0o(k,n,o,s,b7),$async$Fa)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
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
g=a1.gag(a4),a1=y.s
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
return A.b(new A.abd(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fa)
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
a0=A.dL(A.a3(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().af())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7P(e),$async$Fa)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fa,w)},
cdD:function cdD(){},
cdE:function cdE(d){this.a=d},
cdC:function cdC(d,e,f){this.a=d
this.b=e
this.c=f},
aS1(){var x=0,w=A.j(y.H),v,u
var $async$aS1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i2z=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aS1)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aS1)
case 3:u=$.hbX
u=u==null?null:u.bG(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aS1)
case 4:$.hbX=$.ibq=$.ibr=null
return A.h(null,w)}})
return A.i($async$aS1,w)},
fBt(d){var x=0,w=A.j(y.H),v,u
var $async$fBt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8S){x=1
break}u=new A.bk($.bD,y.d4)
d.c=new B.fBu(new A.c2(u,y.aY))
x=3
return A.b(u.iD(0,C.i8,new B.fBv()),$async$fBt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fBt,w)},
ibo(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hSe(x):x},
hc0(d){var x=0,w=A.j(y.T),v,u,t
var $async$hc0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqo(u)
x=1
break}v=B.h6z(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hc0,w)},
hc_(d){var x=0,w=A.j(y.T),v,u,t
var $async$hc_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqp(u)
x=1
break}v=B.h6z(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hc_,w)},
fUM(d){var x=0,w=A.j(y.T),v
var $async$fUM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqp(d),$async$fUM)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUM,w)},
bDl(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hc_(d),$async$bDl)
case 3:q=f
if(q==null){x=1
break}t=C.Y.aS(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDl,w)},
fpi(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fpi=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.VU(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cc(d.apE(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpi,w)},
H6(d,e,f){return B.idI(d,e,f)},
idI(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H6=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hc0(a1),$async$H6)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Y.aS(0,e,null)
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
return A.b($.hFd().aFW(D.dBR,null),$async$H6)
case 4:l=d.hbX=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azp(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bD,y.b1)
l.y=new B.fC4(f,k,new B.fC5(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8w(0,new B.Y7(r,"offer")),$async$H6)
case 5:d=l
x=7
return A.b(l.am7(0),$async$H6)
case 7:x=6
return A.b(d.a8o(0,a4),$async$H6)
case 6:x=8
return A.b(B.fBt(l),$async$H6)
case 8:x=9
return A.b(l.aqq(),$async$H6)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ibo(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqq(m,h),$async$H6)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hno(h)
case 11:v=new A.bqe(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H6,w)},
fBu:function fBu(d){this.a=d},
fBv:function fBv(){},
fC5:function fC5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fC4:function fC4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fC3:function fC3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ifL(d){switch(d){case"new":return D.exa
case"checking":return D.exb
case"connected":return D.exd
case"completed":return D.exc
case"failed":return D.exf
case"disconnected":return D.exg
case"closed":return D.aQp
case"count":return D.exe}return D.aQp},
ifM(d){switch(d){case"new":return D.aQq
case"gathering":return D.exh
case"complete":return D.a8S}return D.aQq},
iq7(d){switch(d){case"stable":return D.exi
case"have-local-offer":return D.exj
case"have-local-pranswer":return D.exl
case"have-remote-offer":return D.exk
case"have-remote-pranswer":return D.exm
case"closed":return D.aQw}return D.aQw},
iol(d){switch(d){case"new":return D.aQt
case"connecting":return D.aQu
case"connected":return D.aQv
case"closed":return D.a8T
case"disconnected":return D.aQs
case"failed":return D.aQr}return D.a8T},
aa9:function aa9(d,e){this.a=d
this.b=e},
P8:function P8(d,e){this.a=d
this.b=e},
Y6:function Y6(d,e){this.a=d
this.b=e},
P7:function P7(d,e){this.a=d
this.b=e},
FE:function FE(d,e){this.a=d
this.b=e},
crh:function crh(){},
h8k(d){var x=new B.FD()
x.a=d
x.b=!0
return x},
FD:function FD(){this.b=this.a=$},
aa8:function aa8(){},
auW:function auW(){},
Y7:function Y7(d,e){this.a=d
this.b=e},
h6v(){var x=0,w=A.j(y.H)
var $async$h6v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6v,w)},
h6y(d,e,f){var x=0,w=A.j(y.T),v
var $async$h6y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.n_))){v=null
x=1
break}v=B.fV2(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6y,w)},
hno(d){var x,w=F.aeL.a5e(C.dQ.aM(d),null)
if(w.length===0){x=C.dQ.aM(d)
return C.cO.gcu().aM(x)}return C.cO.gcu().aM(w)},
hSd(d){var x,w,v=C.cG.aM(d)
try{x=C.c9.cF(0,F.aeK.bfr(v,!1))
return x}catch(w){x=C.c9.cF(0,v)
return x}},
h6z(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hSd(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cF(0,C.cG.aM(x))
return v}catch(u){return x}}return null},
hSe(d){var x,w,v,u,t,s=A.a([],y.s)
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
hSf(){var x,w=$.oo(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0u(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b0u)
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
return A.i($async$b0u,w)},
cdl(d,e){return B.hSg(d,e)},
hSg(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cdl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cK,null),$async$cdl)
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
return A.i($async$cdl,w)},
b0x(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0u(d),$async$b0x)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0x,w)},
b0w(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hSf()
r=C.a.i(f)
t=C.dQ.aM(s)
x=3
return A.b(B.cdl(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cO.gcu().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$b0w)
case 3:if(!h){v=null
x=1
break}v=new A.a17("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0w,w)},
b0v(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0u(o),$async$b0v)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cF(0,C.cG.aM(u))
if(J.j5(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0v,w)},
cdm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEj("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cK),$async$cdm)
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
return A.i($async$cdm,w)},
b0y(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ja(),$async$b0y)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0y,w)},
aqh(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqh)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0y(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqh,w)},
aqf(d,e){var x=0,w=A.j(y.H)
var $async$aqf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqf)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqf)
case 2:return A.h(null,w)}})
return A.i($async$aqf,w)},
a7H(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7H=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7H)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ja(),$async$a7H)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.C))
x=5
return A.b(A.a7G(s),$async$a7H)
case 5:x=6
return A.b(B.aqf(f,u),$async$a7H)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7H,w)},
a7I(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7I=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7I)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ja(),$async$a7I)
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
return A.b(B.aqf(g,q),$async$a7I)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7G(u),$async$a7I)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7I,w)},
a7J(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7J=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7J)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ja(),$async$a7J)
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
s=B.b0r(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7J)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().af()],p,p),null)),$async$a7J)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
cdn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdn)
case 7:s=f
p=A.w(n)
r=A.aT(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Y.aS(0,r,null)
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
return A.i($async$cdn,w)},
Jb(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdn(d),$async$Jb)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0y(t),$async$Jb)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqg(d),$async$Jb)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0r(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqg(d),$async$Jb)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jb,w)},
aqg(d){var x=0,w=A.j(y.H)
var $async$aqg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqg)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqg)
case 2:return A.h(null,w)}})
return A.i($async$aqg,w)},
b0z(){var x,w=$.oo(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7K(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h6A(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdq(d){return B.hSi(d)},
hSi(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7K(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cdq)
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
return A.i($async$cdq,w)},
aqj(d,e){return B.hSj(d,e)},
hSj(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7K(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cK,null),$async$aqj)
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
return A.i($async$aqj,w)},
cds(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cds=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7K(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqj(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$cds)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cds,w)},
cdr(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7K(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqj(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$cdr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdr,w)},
cdt(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7K(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqj(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdt,w)},
cdu(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h6A(d)){v=null
x=1
break}x=3
return A.b(B.cdq(d),$async$cdu)
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
return A.i($async$cdu,w)},
a7R(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7R=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7R)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7R)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7R,w)},
aqn(d){return B.hSy(d)},
hSy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$aqn)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z),!1,!1,C.cK,null),$async$aqn)
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
return A.i($async$aqn,w)},
aqo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$aqo)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7R(),$async$aqo)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cF(0,C.cG.aM(q))
if(J.j5(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a3(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().af())
J.aJ(s,j,o)
x=9
return A.b(B.aqn(s),$async$aqo)
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
return A.i($async$aqo,w)},
aqq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c6(),$async$aqq)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7R(),$async$aqq)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a3(s,r,q),r,q)
r=C.dQ.aM(C.a.i(e))
q.n(0,"answer",C.cO.gcu().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().af())
t.n(u,p,q)
x=5
return A.b(B.aqn(u),$async$aqq)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqq,w)},
aqp(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c6(),$async$aqp)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7R(),$async$aqp)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cF(0,C.cG.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqp,w)},
apk(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ao$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qf)){v=null
x=1
break}x=3
return A.b(p.md(e),$async$apk)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.he),$async$apk)
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
return A.i($async$apk,w)},
imj(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fT3(d){return B.iml(d)},
iml(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fT3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iy("media").Lj(d,3600),$async$fT3)
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
return A.i($async$fT3,w)},
Dx(d,e,f,g,h,i){var x=null
return B.imi(d,e,f,g,h,i)},
imi(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dx=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hnr(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h6C(r),$async$Dx)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fT3(o),$async$Dx)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7L(r),$async$Dx)
case 14:v=null
x=1
break
case 13:e=$.bD.h(0,C.aTV)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ms(A.a([],g))
x=15
return A.b(d.f8(0,A.avL("GET",A.cF(n,0,null))).df(0,C.Gx),$async$Dx)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7L(r),$async$Dx)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L1(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dx)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0B(r,k),$async$Dx)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$Dx)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.VU(r)
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
return A.b(B.a7L(r),$async$Dx)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dx,w)},
aRF(d){return B.imk(d)},
imk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iy("media").W(0,d),$async$aRF)
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
return A.i($async$aRF,w)}},D,T,M,U,V,W,X,N,Y
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
B.cri.prototype={
aFW(d,e){return this.cPj(d,e)},
cPj(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aFW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.U(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.v(0,d)
u=new q(A.ke(A.cv(t)))
t=J.k(u)
v=B.hXb(C.cO.gcu().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aFW,w)}}
B.b5J.prototype={
bBF(d){var x=this,w=x.w
w.onclose=A.hp(new B.crd(x))
w.onopen=A.hp(new B.cre(x))
w.onmessage=A.hp(new B.crf(x))
w.onbufferedamountlow=A.hp(new B.crg(x))},
gdd(d){return this.x},
aik(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aik=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FD()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h8k(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aik)
case 8:v=t.h8k(s.aou(f,0,null))
x=1
break
case 7:case 4:v=B.h8k(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aik,w)}}
B.b5K.prototype={
bBG(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.crj(x)))
w.addEventListener("icecandidate",A.hp(new B.crk(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.crl(x)))
w.onicegatheringstatechange=A.hp(new B.crm(x))
w.addEventListener("signalingstatechange",A.hp(new B.crn(x)))
if(!$.hfT())w.addEventListener("connectionstatechange",A.hp(new B.cro(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crp(x)))
w.addEventListener("track",A.hp(new B.crq(x)))},
am7(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$am7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ke(A.cv(A.U(y.N,y.z)))),y.aQ),$async$am7)
case 3:t=f
v=new B.Y7(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am7,w)},
a8o(d,e){return this.bqE(0,e)},
bqE(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8o)
case 2:return A.h(null,w)}})
return A.i($async$a8o,w)},
a8w(d,e){return this.bqZ(0,e)},
bqZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8w)
case 2:return A.h(null,w)}})
return A.i($async$a8w,w)},
aqq(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Y7(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqq,w)},
bG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bG,w)}}
B.acZ.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_2.prototype={
S(){return new B.aAC()},
gd1(){return this.c}}
B.aAC.prototype={
Y(){this.a3()
this.aeW()},
aeW(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0s(u.e,u.c),$async$aeW)
case 2:t=e
if(v.c!=null)v.m(new B.dbD(v,t))
return A.h(null,w)}})
return A.i($async$aeW,w)},
QR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqc(t.e,t.c,!1),$async$QR)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fi8)
x=1
break}x=4
return A.b(B.a7F(u.a.c,"individual"),$async$QR)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6N(A.eb(new B.dbA(u),!1,null,y.H)),$async$QR)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QR,w)},
JD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fzq(o),$async$JD)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7J(o.e,r,s,q),$async$JD)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff9)
x=1
break}x=5
return A.b(B.a7F(u.a.c,"member"),$async$JD)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6N(A.eb(new B.dbC(u),!1,null,y.H)),$async$JD)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JD,w)},
yA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7E(t.e,o,t.f,t.r,t.w,s),$async$yA)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7F(u.a.c,"org_owner"),$async$yA)
case 4:x=5
return A.b(B.aqh(u.a.c),$async$yA)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fzV(o),$async$yA)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7H(s,t,o,q.c),$async$yA)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff6)
x=1
break}x=10
return A.b(B.aqh(u.a.c),$async$yA)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6N(A.eb(new B.dbB(u),!1,null,y.H)),$async$yA)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yA,w)},
B(d){var x,w,v,u=this,t=null,s=A.R(d).ax.a===C.J,r=s?C.jz:C.qf,q=B.h6x(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h2,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fBV,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h9,t,t,t),C.aC,D.fVK,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c8n,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lV(new B.dbF(),t),C.R,w,C.dV,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.Q,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adr(C.f3,C.aD2,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcis(),t),C.af],v))
p.push(new B.adr(C.pm,C.a4w,"Team Member","Sign in with your organization access code + password",u.gcjj(),t))
p.push(C.af)
p.push(new B.adr(C.ap9,C.a69,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gciP(),t))
return A.c5(t,r,A.bm(!0,A.cg(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.amf,t,t,C.ai),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adr.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aO(!1,r,!0,A.eH(A.A(A.a([A.p(s,A.Y(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a6,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nS,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.Y(C.z4,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDf.prototype={}
B.aGn.prototype={}
B.jy.prototype={
mI(d){var x=this.b,w=C.a.oZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gar6(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ad(x/1024,1)+" KB"
if(x<1073741824)return C.k.ad(x/1048576,1)+" MB"
return C.k.ad(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.U(y.N,y.z)
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
beW(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jy(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cNO(d){return this.beW(null,d)},
aFG(d){return this.beW(d,null)}}
B.VO.prototype={
S(){return new B.aEB(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEB.prototype={
Y(){this.a3()
this.aeX()},
aeX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cb(u.a.c),$async$aeX)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dXQ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeX,w)},
aeY(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fA(s)),$async$aeY)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fj2)
case 1:return A.h(v,w)}})
return A.i($async$aeY,w)},
a_p(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_p=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apk(s.d,4),$async$a_p)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tj(r,"ngmy_my_code_"+m+".png"),$async$a_p)
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
return A.i($async$a_p,w)},
aiN(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaN("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.J,n=o?C.jz:C.qf,m=o?C.c:C.Q,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.x(A.a([t,C.R,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4Z,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a6,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.alO,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.n6,w,C.l1,new A.em(A.p(p,A.q7(p,p,!1,B.hS9(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l1,A.A(A.a([A.E(A.es(N.D2,C.VO,q.gcaV(),p),1),C.at,A.E(A.dh(C.zt,C.abc,q.gcaW(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3g,D.fRm,q.gcy7(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.O8,p,p,C.ai)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.VS.prototype={
S(){return new B.aEE(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aEE.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.J9(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
a_q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.J9(u.d.a.a)
if(t==null){u.m(new B.dYZ(u))
x=1
break}u.m(new B.dZ_(u))
s=u.a
r=s.c
x=3
return A.b(B.a7D(s.d,new B.dZ0(u),t,r),$async$a_q)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dZ1(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_q,w)},
a2E(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2E=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cq(r.a.d)){x=1
break}r.m(new B.dZ2(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rO(r.a.c,q),$async$a2E)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dZ3(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ait(p,m,l,j,k),$async$a2E)
case 8:o=e
if(r.c!=null)r.m(new B.dZ4(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dZ5(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dZ6(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2E,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.J,i=j?D.ahO:D.afl,h=j?D.ajz:C.c,g=j?C.aQ:C.Q,f=j?C.bM:C.am,e=j?D.agM:C.aO
i=[i,e,h,g,f,j?C.fn:C.bQ]
x=A.R(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
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
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4Z,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uM(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkD()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.O3,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dZ7(l),k,!1,k,k,!1,k,!0,k,C.ab,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.ms,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.L(i[1],C.r,1)
m=J.M5(l.a.d,4)
m=A.C(new A.N(m,new B.dZ8(x,new A.aHC(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.le,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.R,e,C.R,q,C.d6,p,C.R,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eD,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fdC)
else q.push(A.Y(C.lN,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cV(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b6,new A.o(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bEg,k,k,C.ai),1)
u=l.f?k:l.gcy8()
t=i[3]
s=i[1]
q=A.n(16)
s=A.es(M.a3g,D.fSr,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcaX()
t=A.bn(C.aE,k,k,0,C.c,k,C.ny,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.lz(new B.dZ9(),A.x(A.a([e,new A.D(D.bDL,A.x(A.a([s,C.R,i,C.af,A.bH(l.f?C.ts:D.fQH,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cw,C.a_x,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkD.prototype={
oV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bz,v.length),C.aP)}}
B.VP.prototype={
S(){return new B.aEC()}}
B.aEC.prototype={
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
aeZ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeZ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dXR(r))
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
return A.b(B.a7I(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeZ)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fiE)
s=[1]
x=4
break}p.L(y.q).f.U(D.fhh)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dXS(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeZ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.J?C.jz:C.qf,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fJ7,s,s,s,1,s,!0),p=A.p(s,D.bvT,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.I_,C.n),s,s,s,s,C.ab,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c2R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c2M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c31,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcaY()
u=A.bn(C.aE,s,s,s,s,C.h3,s,s,s,s,s,s)
return A.c5(q,r,A.cg(A.x(A.a([p,C.d6,o,C.af,x,C.af,w,C.n6,A.bH(t.r?C.ts:C.aWJ,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ab,s,s,C.ai),s,!1,!1,s,s)}}
B.acG.prototype={}
B.bxr.prototype={
a5v(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apE()))
x=3
return A.b(B.RZ(t,s),$async$a5v)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5v,w)},
gd1(){return this.a}}
B.O4.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_1.prototype={
S(){return new B.aAB(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aAB.prototype={
Y(){this.a3()
$.aV.x1$.push(new B.dbz(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
cb3(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a27(d),u=x.a.c,t=u?C.iA:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jz:v.a[0],p=A.n(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h2,32)],n),l=A.p(w,T.arO,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asB,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uM(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bx3()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.GK,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b4L),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbx(x),w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.ms,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nU,new B.dby(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.n(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cL,12)],n)
g=y.p
return A.eR(w,C.L,new A.cR(Q.LI,A.c3(new A.D(C.yH,A.x(A.a([l,C.aR,k,C.R,j,C.dV,i,C.dV,A.A(A.a([f,C.at,A.E(A.c3(A.aI(!1,C.a3,!0,w,A.aO(!1,A.n(14),!0,D.eqy,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcb2(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,L.Q2,C.n),C.bi),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.O,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bi),w),w,w,w,C.Ob,C.da,w,w,w)}}
B.bx3.prototype={
oV(d,e){return e.am1(e.a.toUpperCase())}}
B.VQ.prototype={
S(){return new B.aED(A.a([],y.r),A.aS(y.N))},
gd1(){return this.c}}
B.aED.prototype={
Y(){var x=this
x.a3()
x.ui()
x.w=A.de(C.jC,new B.dYX(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.VZ()
this.a2()},
a1w(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O3(u.a.c),$async$a1w)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.B8(u.a.c),$async$a1w)
case 4:u.m(new s.dYk(u,e))
u.ii("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1w,w)},
ui(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ui=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O3(u.a.c),$async$ui)
case 3:t=e
x=4
return A.b(B.B8(u.a.c),$async$ui)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dYl(u,s))
if(t>0)u.ii("Received "+A.w(t)+" file(s) via My Code.")
u.O5(u.d)
B.Cb(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ui,w)},
O5(d){return this.bFI(d)},
bFI(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7N(r,u.a.c),$async$O5)
case 8:p=f
if(u.c==null){x=1
break}new B.dXU(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.n_))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.VX(r,u.a.c),$async$O5)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.B8(u.a.c),$async$O5)
case 12:u.m(new o.dXV(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
Ou(d){return this.bM_(d)},
bM_(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7N(d,u.a.c),$async$Ou)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dY_(u,d,t))
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
uj(d,e){return this.cJ2(d,e)},
cJ2(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dYL(r,e))
u=3
x=6
return A.b(d.$0(),$async$uj)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dYM(r))
$.eV.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uj,w)},
gaXl(){var x=this.a
return x.f||x.r||x.w},
Iy(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXl()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdj(s,n,r,q,o,t),$async$Iy)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ii("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fMu(o,u.a.c),$async$Iy)
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
return A.b(B.Dz(s,o,r,q,n,t),$async$Iy)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Iy,w)},
a0A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqh(u.a.c),$async$a0A)
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
return A.b(A.a6(t,!1).cd(A.eb(new B.dYh(u,r,q),!1,null,y.H)),$async$a0A)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0A,w)},
a1G(d){return this.crG(d)},
crF(){return this.a1G(1)},
crG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXl()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqe(u.a.c),$async$a1G)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1G,w)},
acP(d,e,f){return this.c1X(d,e,f)},
c1X(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ii(e)
x=1
break}x=3
return A.b(u.uj(new B.dYe(u,d,null,e,f),"Uploading\u2026"),$async$acP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acP,w)},
bFR(){B.hCn(!1,new B.dXY(this))
return},
cwJ(){this.m(new B.dYp(this))},
aAb(){var x=0,w=A.j(y.H),v=this
var $async$aAb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bFR()
return A.h(null,w)}})
return A.i($async$aAb,w)},
acL(){var x=0,w=A.j(y.H),v=this
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uj(new B.dY3(v),"Importing\u2026"),$async$acL)
case 2:return A.h(null,w)}})
return A.i($async$acL,w)},
SX(d){return this.cIm(d)},
cIm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.n_)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYI(u,d),!1,null,y.H)),$async$SX)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S1)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dYJ(u,d),!1,null,y.H)),$async$SX)
case 8:x=1
break
case 7:x=u.c2F(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dYK(u,d),!1,null,y.H)),$async$SX)
case 11:x=1
break
case 10:u.ii("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SX,w)},
c2F(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRu,C.a.b2(x,w+1).toLowerCase())},
agv(d){return this.ciw(d)},
ciw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.n_)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYf(u,d),!1,null,y.H)),$async$agv)
case 5:x=1
break
case 4:u.m(new B.dYg(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agv,w)},
Sh(d){return this.czC(d)},
czC(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ii("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Sh)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uj(new B.dYB(u,d),"Preparing QR\u2026"),$async$Sh)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sh,w)},
ajc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYC(),A.T(t).k("N<1,m>")).fL(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.C(new A.X(t,new B.dYD(q),s),s.k("M.E"))
if(r.length===0){u.ii("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sh(r),$async$ajc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajc,w)},
aj5(d){return this.cz9(d)},
cz9(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a27(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYv(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aj5)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SX(d)
break
case"qr":u.Sh(A.a([d],y.r))
break
case"send_my_code":u.cj8(A.a([d],y.r))
break
case"save":u.ait(d)
break
case"delete":u.Jn(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aj5,w)},
Yi(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dY0(),A.T(t).k("N<1,m>")).fL(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.C(new A.X(t,new B.dY1(q),s),s.k("M.E"))
if(r.length===0){u.ii("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pr(t,s.c,s.f),$async$Yi)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uj(new B.dY2(u,r),"Preparing file\u2026"),$async$Yi)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yi,w)},
ahA(d){return this.cq0(d)},
cq0(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hDe(d,!1),$async$ahA)
case 3:s=f
r=s==null
q=B.a7K(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ii("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahA,w)},
agB(){var x=0,w=A.j(y.H),v=this,u
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fU9(u,v.a.c),$async$agB)
case 2:return A.h(null,w)}})
return A.i($async$agB,w)},
bFQ(){B.hCn(!1,new B.dXX(this,null))
return},
JC(d,e){return this.cj9(d,e)},
b2N(d){return this.JC(null,d)},
cj8(d){return this.JC(d,null)},
cj9(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.C(new A.X(p,new B.dYi(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xH.co().aoK(!0,C.a1k,!1),$async$JC)
case 10:r=g
if(r==null||J.cq(r.a)){x=1
break}x=11
return A.b(s.uj(new B.dYj(l,s,r),"Preparing\u2026"),$async$JC)
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
return A.b(B.bFt(p,l,e,s.a.c),$async$JC)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ii("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JC,w)},
IO(d){return this.c1K(d)},
c1K(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hS8(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2N(t),$async$IO)
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
return A.b(u.uj(new B.dYc(u,d),"Receiving video\u2026"),$async$IO)
case 11:x=1
break
case 10:x=12
return A.b(u.uj(new B.dYd(u,d),"Receiving\u2026"),$async$IO)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IO,w)},
EG(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dt()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahA(t),$async$EG)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IO(s),$async$EG)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYn(u),!1,null,y.N)),$async$EG)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ui(),$async$EG)
case 10:x=1
break
case 9:x=11
return A.b(u.IO(C.a.i(r)),$async$EG)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EG,w)},
ait(d){return this.cvh(d)},
cvh(d){var x=0,w=A.j(y.H),v=this
var $async$ait=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uj(new B.dYm(v,d),"Saving\u2026"),$async$ait)
case 2:return A.h(null,w)}})
return A.i($async$ait,w)},
Jn(d){return this.bOk(d)},
bOk(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jn)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdm(t),$async$Jn)
case 6:case 5:s=d.a
x=7
return A.b(B.F9(u.a.c,s),$async$Jn)
case 7:u.r.W(0,s)
x=8
return A.b(u.ui(),$async$Jn)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jn,w)},
aji(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aji=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a27(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYH(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aji)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agB()
break
case"import":u.acL()
break}case 1:return A.h(v,w)}})
return A.i($async$aji,w)},
cb0(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.n_))return C.qL
if(C.a.a0(x,"image/")||d.mI(D.S1))return C.uK
if(C.a.q(x,"pdf"))return E.Pw
return D.apB},
B(d){var x,w,v=this,u=null,t=B.a27(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.HT,u,u,u,new B.dYS(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bXh,u,u,u,v.e?u:v.gciQ(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcwI()
n.push(A.aH(u,u,u,u,A.Y(v.r.a===x?D.bRv:E.aq_,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a3d,u,u,u,v.e?u:v.gcb1(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oC,u,u,u,v.e?u:v.gb3S(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bZ2,u,u,u,v.e?u:new B.dYT(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lV(new B.dYU(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dx(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.R(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dx(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.R(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kl(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAy(C.jI,s,!0,t,w?u:v.gczD(),u),1)
x.push(new A.D(D.bCv,A.lz(new B.dYV(),A.A(A.a([s,C.at,A.E(new B.aAy(C.uL,"Export",!1,t,w?u:v.gbSc(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cw,C.j0,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfa(t,v.e?u:v.gb3S(),u)
else s=A.km(!0,u,u,new B.dYW(v,t),s,u,D.bCn,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAy.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.we,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.Y(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.we,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.Y(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f8,t,t,t),u.r,v)}}
B.bfa.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dbv(),new A.D(E.a0q,A.x(A.a([A.lz(new B.dbw(),A.p(x,A.Y(C.z5,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.ew,C.hD,x,x,new A.bp(0.86,1,w),s),C.dV,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dV,A.dh(C.oC,D.fW3,this.d,A.bn(C.aE,x,x,x,C.c,x,C.O9,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.O,0,C.p),x),C.cw,C.C1,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.ad_.prototype={
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
if(!o||i.mI(D.n_))p=D.dr1
else{p=C.a.a0(p,"image/")||i.mI(D.S1)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.Y(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gar6()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.n_))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.aw,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.Y(C.fU,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.mI(D.n_)))l.push(A.h4f(C.aE,!1,j,j,j,!1,j,j,new B.dbS(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.Y(C.ou,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.lz(new B.dbT(),new A.D(C.ei,A.aI(!1,C.a3,!0,j,A.aO(!1,r,!0,new A.D(C.a_T,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bP("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.a_3.prototype={
S(){return new B.aAD()},
gd1(){return this.c}}
B.aAD.prototype={
Y(){this.a3()
this.yp()},
t(){B.hSn(this.e)
this.a2()},
yp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rO(o.c,o.d),$async$yp)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gav(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hSq(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hSp(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dbP(s))
x=1
break}s.m(new B.dbQ(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dbR(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yp,w)},
a2D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rO(t.c,t.d),$async$a2D)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ffG)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ait(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2D)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2D,w)},
c1D(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kA(u,C.A,v,new B.dbN(w,t),C.hc,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aH.gav(t))x=A.fR(t,C.A,v,new B.dbO(w),C.hc,C.dC,!0,v,!1,v,v)
else return C.bL
return A.uS(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a27(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.D3,u,u,u,v.gb7C(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fp
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D3,D.fEm,v.gb7C(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c1D()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_0.prototype={
S(){return new B.aAA(A.ajk(),C.bD,C.bD)},
gd1(){return this.c}}
B.aAA.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fx(w,A.a4(w).k("fx<1>")).iz(new B.dbs(v))
x.gcWW().iz(new B.dbt(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a4(x).k("fx<1>"))}if(x==null)x=C.baW
x.iz(new B.dbu(v))
v.yp()},
yp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rO(p.c,p.d),$async$yp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dbl(s))
x=1
break}x=8
return A.b(s.d.vn(0,new A.a4b(r,s.a.d.c)),$async$yp)
case 8:if(s.c==null){x=1
break}s.m(new B.dbm(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.dbn(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yp,w)},
a_r(){var x=0,w=A.j(y.H),v=this,u
var $async$a_r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_r)
case 5:x=3
break
case 4:x=6
return A.b(u.iC(0),$async$a_r)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_r,w)},
aV9(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a27(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fp
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bSv,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Q2,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.dbo(p),C.o.F(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aV9(p.w)+" / "+p.aV9(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.fc3,o,o,o,o,o,o)
r=p.f
q=A.Y(r?I.uN:C.hs,o,o,o,o,o)
x=A.x(A.a([u,C.l1,t,x,C.d6,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcb4(),s)],y.p),C.m,o,C.e,C.O,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.qw,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qn.prototype={
S(){return new B.aAG()},
gd1(){return this.c}}
B.aAG.prototype={
Y(){this.a3()
this.Qa()},
Qa(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qa=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h6y(o.c,o.d,new B.dc5(s)),$async$Qa)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dc6(s))
x=1
break}s.e=r
q=O.ieC(r)
if(q==null){s.m(new B.dc7(s))
x=1
break}s.d=q
q.aV(0,s.gb2A())
x=8
return A.b(q.iU(0).df(0,C.rK),$async$Qa)
case 8:if(s.c==null){x=1
break}s.m(new B.dc8(s))
x=9
return A.b(q.qn(0),$async$Qa)
case 9:q.tV(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dc9(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qa,w)},
ch5(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dca(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Do(0,x.gb2A())
w=x.d
if(w!=null)w.t()
B.ioE(x.e)
x.a2()},
af1(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0A(u.c,u.d),$async$af1)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af1,w)},
B(d){var x,w,v,u=this,t=null,s=B.a27(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.oB,t,t,t,u.gcaZ(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fp
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiP(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fF(x,new A.an(C.A,t,C.ac,C.t,A.a([new A.AD(s,t),A.aA(t,A.Bs(A.p(t,A.Y(q?I.uN:C.hs,C.c,t,t,t,48),C.f,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b6,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dcc(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_5.prototype={
S(){return new B.aAE(new A.cw(null,y.A))}}
B.aAE.prototype={
gcIK(){var x,w,v=this.a
if(v.e!==D.Tn)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIk(){var x,w,v=this.a
if(v.e!==D.A9)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcIK()
if(x!=null){v.Rh(x)
v.e=A.de(R.GA,new B.dc1(v,x))}w=v.gcIk()
if(w!=null){v.Rg(w)
v.f=A.de(C.fG,new B.dc2(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rg(d){return this.cod(d)},
cod(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqm(d),$async$Rg)
case 3:t=f
x=4
return A.b(B.cdF(d),$async$Rg)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dbU(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rg,w)},
Rh(d){return this.coe(d)},
coe(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fUM(d),$async$Rh)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDl(t),$async$Rh)
case 4:if(u.c==null){x=1
break}u.m(new B.dbV(u))
u.c.L(y.q).f.U(D.aTw)
case 1:return A.h(v,w)}})
return A.i($async$Rh,w)},
gc6S(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcb_(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dt()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fiO)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dbW(),!1,null,y.N)),$async$a2p)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDl(s),$async$a2p)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTw)
case 1:return A.h(v,w)}})
return A.i($async$a2p,w)},
aaD(d){return this.bM0(d)},
bM0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fA(C.d.aO(t,", "))),$async$aaD)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaD,w)},
af_(d){return this.bLK(d)},
bLK(d){var x=0,w=A.j(y.H),v=this
var $async$af_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fA(v.a.c)),$async$af_)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fg9)
return A.h(null,w)}})
return A.i($async$af_,w)},
a2j(d){return this.cvj(d)},
cvj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apk(s.d,4),$async$a2j)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tj(r,"ngmy_doc_share_qr.png"),$async$a2j)
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
return A.i($async$a2j,w)},
gaYC(){var x,w=this.a
if(w.e!==D.J_)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaA(d){return this.bLU(d)},
bLU(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYC()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaA)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fhO)
case 1:return A.h(v,w)}})
return A.i($async$aaA,w)},
af0(){var x=0,w=A.j(y.H),v=this,u
var $async$af0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.VZ(),$async$af0)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$af0,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a27(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.J_&&i!==D.Tn&&i!==D.A9
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J_||t===D.Tn||t===D.A9?l:A.aH(l,l,l,l,C.lm,l,l,l,m.gb0F(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.R,A.q7(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc6S(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J_){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.R,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mO,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcb_(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c1T,D.fNU,new B.dbX(m,d),l)],p))}if(m.a.e===D.J_&&m.gaYC()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.bZn,D.fKv,new B.dbY(m,d),l)],p))
if(m.a.e===D.A9){x=(m.w?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ad(C.k.F(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.R,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mO,l,l,l)],p))}if(m.a.e===D.Tn){x=(m.r?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.R,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mO,l,l,l),C.af,A.dh(D.bUY,D.fR2,m.gcvG(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oH(i,A.c5(v,w,new A.D(C.ab,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.bb,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ab,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D2,C.VO,new B.dbZ(m,d),l),1),C.at,A.E(A.dh(C.zt,C.abc,new B.dc_(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.R,new A.a5(1/0,l,A.bH(C.AN,l,m.gb0F(),A.bn(C.aN,l,l,l,l,C.h3,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dc0(),y.C)}}
B.acY.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cg(A.x(A.a([w,C.aR,A.p(x,A.q7(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ai)
return A.eg(A.a([A.bH(C.xh,x,new B.dbk(d),x)],u),x,x,C.ng,v,x,x,x,x,D.fDl,x)}}
B.a__.prototype={
S(){return new B.aAz(A.zM(C.yo,C.o_,C.v_))}}
B.aAz.prototype={
t(){this.d.t()
this.a2()},
ayK(d){var x,w,v,u,t
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
return A.c5(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fL1,x,x,x,1,x,!0),C.w,A.zL(this.d,C.bZ,this.gayJ()),x,!1,!1,x,x)}}
B.a_6.prototype={
S(){return new B.aAF(A.zM(C.yo,C.o_,C.v_))},
gd1(){return this.c}}
B.aAF.prototype={
c2H(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
agY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.My("text/plain"),$async$agY)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fiI)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agY,w)},
abr(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hDe(p,!0),$async$abr)
case 3:t=e
p=t==null
s=B.a7K(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.ffg)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abr,w)},
t(){this.d.t()
this.a2()},
ayK(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c2H(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.aqU,v,v,v,w.gbRH(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a3k,v,v,v,w.gclz(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.Y(w.f?C.uH:P.Pe,v,v,v,v,v),v,v,v,new B.dc4(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fRX,v,v,v,1,v,!0)
u=A.zL(w.d,C.bZ,w.gayJ())
x=A.n(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ewQ],s),v),v,!1,!1,v,v)}}
B.bfb.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pc
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.Y(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pc:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aI(!1,C.a3,!0,r,A.aO(!1,w,!0,new A.D(C.a0x,A.A(A.a([u,C.be,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.Y(C.eG,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aa9.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.P8.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Y6.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.P7.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FE.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.crh.prototype={}
B.FD.prototype={}
B.aa8.prototype={}
B.auW.prototype={}
B.Y7.prototype={}
var z=a.updateTypes(["aB<~>()","P(jy)","m(jy)","VQ(Z)","~()","a_2(Z)","F(F,jy)","Qn(Z)","~(me)","ct(FD)","aB<jy?>(@)","VO(Z)","VS(Z)","D(jy)","jy(@)","a8<m,@>(jy)","a_1(Z)","VP(Z)","a_3(Z)","a_0(Z)","a_5(Z)","acY(Z)","ai<jy>()","a_6(Z)","ad_(Z,F)","a__(Z)","a8<m,aF>(jy)","ct(Y6)","ct(aa8)","aB<ct>(FD)"])
B.crd.prototype={
$1(d){var x=this.a
x.x=D.aQo
x.y.I(0,D.aQo)},
$S:75}
B.cre.prototype={
$1(d){var x=this.a
x.x=D.aQn
x.y.I(0,D.aQn)},
$S:75}
B.crf.prototype={
$1(d){var x=this.a
x.aik(A.ahe(d.data)).bJ(new B.crc(x),y.b)},
$S:75}
B.crc.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.crg.prototype={
$1(d){},
$S:75}
B.crj.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hXa(d.channel))},
$S:16}
B.crk.prototype={
$1(d){},
$S:16}
B.crl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ifL(w.iceConnectionState)
x.cx=w
if($.hfT())switch(w.a){case 0:x.cy=D.aQt
break
case 1:x.cy=D.aQu
break
case 3:x.cy=D.aQv
break
case 5:x.cy=D.aQr
break
case 6:x.cy=D.aQs
break
case 7:x.cy=D.a8T
break
default:break}},
$S:109}
B.crm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ifM(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.crn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iq7(w.signalingState)},
$S:109}
B.cro.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iol(w.connectionState)},
$S:109}
B.crp.prototype={
$1(d){},
$S:109}
B.crq.prototype={
$1(d){},
$S:16}
B.fuY.prototype={
$1(d){var x=y.F.a(new A.r3([],[]).oI(d.target.result,!1)),w=C.yp.q(x.objectStoreNames,"blobs")
if(!w)C.yl.Lh(x,"blobs")},
$S:180}
B.fTY.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wM.fq(this.b)
$.eV.mC()
this.c.$1(d)},
$S:391}
B.fU_.prototype={
$1(d){return this.a.$1(B.i5h(this.b,this.c))},
$S:30}
B.fTZ.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fTX.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fUc.prototype={
$1(d){var x=this
return B.hsd(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fUd.prototype={
$1(d){var x=this
return B.hsd(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fxx.prototype={
$1(d){var x=this
return B.cdg(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbD.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbA.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdg(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbC.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdg(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbB.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cdg(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbF.prototype={
$4(d,e,f,g){var x=null
return A.jX(A.A(A.a([A.aH(x,x,x,x,D.bTA,x,x,x,new B.dbE(d),x,x,x,x,x,x),A.E(A.Fp(D.RL,!0,x,C.a2m,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RL,x,g,C.amA,0,e,f)},
$C:"$4",
$R:4,
$S:410}
B.dbE.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzt.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eP,y.o).w,t=this.a,s=t?C.iA:C.c,r=A.n(28),q=A.p(v,D.bwd,C.f,v,v,D.b6o,v,v,v,v,D.amq,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bXS,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.GP,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ar9,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dT(C.dl,new B.fzr(d),v),1),C.at,A.E(A.bH(D.fJw,v,new B.fzs(p,x,d),A.bn(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GD,v,v,v,v),v)},
$S:61}
B.fzr.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fzs.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fgq)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDf(v,x))},
$S:0}
B.fzX.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eP,y.o).w,u=x.a,t=u?C.iA:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bw2,C.f,w,w,D.b7S,w,w,w,w,D.amq,w,w,1/0),new A.D(C.GP,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.hbK(u,"Organization name",C.Hh,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.hbK(u,"Access code",C.nD,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.hbK(u,"Member password",H.HO,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.by,A.bH(D.fS3,w,new B.fzW(r,q,p,d),A.bn(C.aE,w,w,w,w,C.h3,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GD,w,w,w,w),w)},
$S:61}
B.fzW.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fgv)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGn(u,x,w))},
$S:0}
B.cd7.prototype={
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
return A.b(B.Cc(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cdd.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cde.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cdf.prototype={
$1(d){return d.b},
$S:z+2}
B.cd9.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cda.prototype={
$1(d){return d.b},
$S:z+2}
B.cd8.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cdb.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdc.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fUa.prototype={
$1(d){return new B.VO(this.a,null)},
$S:z+11}
B.fUb.prototype={
$1(d){return new B.VS(this.a,this.b,this.c,null)},
$S:z+12}
B.dXQ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dYZ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dZ_.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dZ0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dYY(x,d))},
$S:2}
B.dYY.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZ1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZ2.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dZ3.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dZ4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dZ5.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dZ6.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dZ9.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*14)),e)},
$S:101}
B.dZ7.prototype={
$1(d){var x=this.a
return x.f?null:x.a_q()},
$S:2}
B.dZ8.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S1))s=C.uK
else s=C.a.a0(s,"video/")||d.mI(D.n_)?C.qL:D.apB
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.p(v,A.Y(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gar6(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dXR.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dXS.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cdh.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.cdi.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fV4.prototype={
$2(d,e){return e===this.a},
$S:341}
B.fs1.prototype={
$1(d){return J.k(d)},
$S:17}
B.fxJ.prototype={
$1(d){var x=this.b
B.i3h(C.H4.ga77(this.a)).bJ(x.gBX(x),y.H)},
$S:130}
B.fxK.prototype={
$1(d){return this.a.da(0,null)},
$S:130}
B.fxL.prototype={
$0(){return null},
$S:12}
B.cdw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxM.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a3(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().af():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jy(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fBS.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fvX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fvY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdB.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n_)},
$S:z+1}
B.fZb.prototype={
$1(d){return new B.a_1(this.a,null)},
$S:z+16}
B.dbz.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dbx.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dby.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dYX.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1w()},
$S:11}
B.dYk.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dYl.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dXU.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dXT(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFG(this.c)}},
$S:0}
B.dXT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dXV.prototype={
$0(){var x=J.bGv(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dY_.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dXZ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFG(this.c)}},
$S:0}
B.dXZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYL.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dYM.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dYh.prototype={
$1(d){return new B.VP(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dYe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Iy(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.VT(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ui(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1G(s.gJ(t)),$async$$0)
case 8:case 7:r.ii(s.gav(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXY.prototype={
$1(d){this.a.acP(d,"No files selected.","Added")},
$S:391}
B.dYp.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.N(x,new B.dYo(),A.T(x).k("N<1,m>")))},
$S:0}
B.dYo.prototype={
$1(d){return d.a},
$S:z+2}
B.dY3.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xH.co().cYU(C.a1k,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gav(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jF(o,0,null)}u=2
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
return A.b(B.aql(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cq(l)){o.ii("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ui(),$async$$0)
case 9:o.ii("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dYI.prototype={
$1(d){return new B.Qn(this.a.a.c,this.b,null)},
$S:z+7}
B.dYJ.prototype={
$1(d){return new B.a_3(this.a.a.c,this.b,null)},
$S:z+18}
B.dYK.prototype={
$1(d){return new B.a_0(this.a.a.c,this.b,null)},
$S:z+19}
B.dYf.prototype={
$1(d){return new B.Qn(this.a.a.c,this.b,null)},
$S:z+7}
B.dYg.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.dYB.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Iy(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7M(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ii("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.crF(),$async$$0)
case 5:x=6
return A.b(p.ui(),$async$$0)
case 6:r=A.T(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dYx(p),r),new B.dYy(),r.k("N<ak.E,m>")).bZ(0,new B.dYz())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYA(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pq(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.VZ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYx.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYw(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYw.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYy.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYz.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYA.prototype={
$1(d){var x=this.a
return new B.a_5(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dYC.prototype={
$1(d){return d.a},
$S:z+2}
B.dYD.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYv.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gar6(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.n_)?C.rX:C.pr
p=!x||p.mI(D.n_)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([q,o,t,C.aC,B.a_4(!1,u,!1,w,p,new B.dYq(d),v),B.a_4(!1,u,!1,C.jI,"Share via QR",new B.dYr(d),"Letters/numbers QR code"),B.a_4(!1,u,!1,D.a2r,"Send to their Code",new B.dYs(d),"Enter someone else's personal code"),B.a_4(!1,u,!1,C.hV,"Download / save",new B.dYt(d),v),C.an,B.a_4(!1,u,!0,C.ef,"Delete",new B.dYu(d),v)],y.p),C.al,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,v,v,C.n),C.bi)},
$S:610}
B.dYq.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dYr.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dYs.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYt.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYu.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dY0.prototype={
$1(d){return d.a},
$S:z+2}
B.dY1.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dY2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7O(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.H8(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pq(s.c,s.f),$async$$0)
case 4:u.ii(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXX.prototype={
$1(d){var x=this.a
x.uj(new B.dXW(x,d,this.b),"Preparing\u2026")},
$S:391}
B.dXW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ii("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.VT(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cq(s)){t.ii("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFt(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ii("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYi.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dYj.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aX(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h6B(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.H6(new B.dY8(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ii("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dY9(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dYa(s))
case 5:x=8
return A.b(r.b.iD(0,C.Gx,new B.dYb()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gav(t)){s.ii("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ui(),$async$$0)
case 9:s.ii("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY8.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dY5(x,d,e))},
$S:210}
B.dY5.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dY9.prototype={
$1(d){return new B.acY(this.a.a,null)},
$S:z+21}
B.dYa.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dYb.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dYd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.J9(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7C(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2N(B.J9(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aql(new B.dY6(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cq(r)){if(B.h6A(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ii(q)
x=1
break}x=10
return A.b(s.ui(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dY7()).gJ(0)
s.ii(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY6.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dY4(x,d,e))},
$S:210}
B.dY4.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dY7.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n_)},
$S:z+1}
B.dYn.prototype={
$1(d){return new B.a_6(this.a.a.c,null)},
$S:z+23}
B.dYm.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0A(u.a.c,v.b),$async$$0)
case 2:t.ii(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYH.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_4(!0,w,!1,C.nD,"My Code",new B.dYE(d),"Your personal code & QR \u2014 others send docs to you"),B.a_4(!1,w,!1,D.a2r,"Send to their Code",new B.dYF(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_4(!1,w,!1,S.zk,"Import backup",new B.dYG(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,x,x,C.n),C.bi)},
$S:610}
B.dYE.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dYF.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bFQ()},
$S:0}
B.dYG.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dYU.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jj(D.RL,x,C.a2m,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cT(C.d.gH(D.RL).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:757}
B.dYS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dYT.prototype={
$0(){this.a.aji()
return null},
$S:0}
B.dYV.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*10)),e)},
$S:101}
B.dYW.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ad_(e,w,v,this.b,x.e,x.cb0(w),new B.dYO(x,w),new B.dYP(x,v,w),new B.dYQ(x,w),new B.dYR(x,w),null)},
$S:z+24}
B.dYO.prototype={
$0(){this.a.agv(this.b)
return null},
$S:0}
B.dYP.prototype={
$0(){var x=this.a
return x.m(new B.dYN(x,this.b,this.c))},
$S:0}
B.dYN.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.dYQ.prototype={
$0(){this.a.Ou(this.b)
return null},
$S:0}
B.dYR.prototype={
$0(){this.a.aj5(this.b)
return null},
$S:0}
B.dbv.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*18)),e)},
$S:101}
B.dbw.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:114}
B.dbT.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*14)),e)},
$S:101}
B.dbS.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.dbP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dbQ.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dbR.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dbN.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gav(w))return A.fR(w,C.A,x,new B.dbL(this.a),C.hc,C.dC,!0,x,!1,x,x)
$.aV.x1$.push(new B.dbM(this.a))
return C.bL},
$S:139}
B.dbL.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dbJ(this.a))
return C.bL},
$S:194}
B.dbJ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbG(x))},
$S:7}
B.dbG.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbM.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbI(x))},
$S:7}
B.dbI.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbO.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dbK(this.a))
return C.bL},
$S:194}
B.dbK.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbH(x))},
$S:7}
B.dbH.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbs.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbr(x,d))},
$S:1762}
B.dbr.prototype={
$0(){return this.a.f=this.b===C.vo},
$S:0}
B.dbt.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbq(x,d))},
$S:7}
B.dbq.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbu.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dbp(x,d))},
$S:7}
B.dbp.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dbl.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dbm.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dbn.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dbo.prototype={
$1(d){return this.a.d.Nr(0,A.dv(0,0,0,C.k.V(d),0,0))},
$S:6}
B.dc5.prototype={
$0(){var x=this.a.a
return B.rO(x.c,x.d)},
$S:1763}
B.dc6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dc7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dc8.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dc9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dca.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dcc.prototype={
$0(){var x=this.a
x.m(new B.dcb(x))},
$S:0}
B.dcb.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qn(0)},
$S:0}
B.dc1.prototype={
$1(d){return this.a.Rh(this.b)},
$S:11}
B.dc2.prototype={
$1(d){return this.a.Rg(this.b)},
$S:11}
B.dbU.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dbV.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dbW.prototype={
$1(d){return D.hrM},
$S:z+25}
B.dc0.prototype={
$2(d,e){if(d)B.VZ()},
$S:131}
B.dbX.prototype={
$0(){return this.a.aaD(this.b)},
$S:0}
B.dbY.prototype={
$0(){return this.a.aaA(this.b)},
$S:0}
B.dbZ.prototype={
$0(){return this.a.af_(this.b)},
$S:0}
B.dc_.prototype={
$0(){return this.a.a2j(this.b)},
$S:0}
B.dbk.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dc4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qr(),$async$$0)
case 2:u.m(new B.dc3(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dc3.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdD.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.n_)},
$S:z+1}
B.cdE.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdC.prototype={
$2(d,e){return this.bmt(d,e)},
bmt(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.W_(u.c,A.H(["uploadProgress",C.k.F(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fBu.prototype={
$1(d){if(d===D.a8S&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fBv.prototype={
$0(){},
$S:12}
B.fC5.prototype={
bo2(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fpi(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hnr(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bo2(d,e)},
$S:753}
B.fC4.prototype={
$1(d){var x=this
d.b=new B.fC3(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fC3.prototype={
$1(d){return this.bo1(d)},
bo1(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0B(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Y.aS(0,n,null)
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
return A.b(B.fpi(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a7L(m),$async$$1)
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
x(v=B.aAC.prototype,"gcis","QR",0)
x(v,"gcjj","JD",0)
x(v,"gciP","yA",0)
x(v=B.aEB.prototype,"gcaV","aeY",0)
x(v,"gcaW","a_p",0)
x(v,"gcy7","aiN",0)
x(v=B.aEE.prototype,"gcaX","a_q",0)
x(v,"gcy8","a2E",0)
x(B.aEC.prototype,"gcaY","aeZ",0)
x(B.aAB.prototype,"gcb2","cb3",4)
x(v=B.aED.prototype,"gciQ","a0A",0)
x(v,"gcwI","cwJ",4)
x(v,"gb3S","aAb",0)
x(v,"gczD","ajc",0)
x(v,"gbSc","Yi",0)
x(v,"gcb1","EG",0)
x(B.aAD.prototype,"gb7C","a2D",0)
x(B.aAA.prototype,"gcb4","a_r",0)
x(v=B.aAG.prototype,"gb2A","ch5",4)
x(v,"gcaZ","af1",0)
x(v=B.aAE.prototype,"gcvG","a2p",0)
x(v,"gb0F","af0",0)
w(B.aAz.prototype,"gayJ","ayK",8)
x(v=B.aAF.prototype,"gclz","agY",0)
x(v,"gbRH","abr",0)
w(v,"gayJ","ayK",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.crh,B.aa8,B.auW,B.aDf,B.aGn,B.jy,B.acG,B.bxr,B.FD,B.Y7])
w(B.cri,B.crh)
w(B.b5J,B.aa8)
x(A.hu,[B.crd,B.cre,B.crf,B.crc,B.crg,B.crj,B.crk,B.crl,B.crm,B.crn,B.cro,B.crp,B.crq,B.fuY,B.fTY,B.fU_,B.fTZ,B.fUc,B.fUd,B.fxx,B.dbA,B.dbC,B.dbB,B.dbF,B.fzt,B.fzX,B.cd7,B.cde,B.cdf,B.cda,B.cd8,B.cdb,B.cdc,B.fUa,B.fUb,B.dZ0,B.dZ9,B.dZ7,B.dZ8,B.fs1,B.fxJ,B.fxK,B.cdw,B.fxM,B.fBS,B.fvX,B.fvY,B.cdB,B.fZb,B.dbz,B.dbx,B.dYX,B.dXT,B.dXZ,B.dYh,B.dXY,B.dYo,B.dYI,B.dYJ,B.dYK,B.dYf,B.dYx,B.dYw,B.dYy,B.dYz,B.dYA,B.dYC,B.dYD,B.dYv,B.dY0,B.dY1,B.dXX,B.dYi,B.dY9,B.dY7,B.dYn,B.dYH,B.dYU,B.dYV,B.dbv,B.dbw,B.dbT,B.dbS,B.dbN,B.dbL,B.dbJ,B.dbM,B.dbO,B.dbK,B.dbs,B.dbt,B.dbu,B.dbo,B.dc1,B.dc2,B.dbW,B.cdD,B.cdE,B.fBu,B.fC4,B.fC3])
w(B.b5K,B.auW)
x(A.iG,[B.fTX,B.dbD,B.dbE,B.fzr,B.fzs,B.fzW,B.dXQ,B.dYZ,B.dZ_,B.dYY,B.dZ1,B.dZ2,B.dZ3,B.dZ4,B.dZ5,B.dZ6,B.dXR,B.dXS,B.fxL,B.dby,B.dYk,B.dYl,B.dXU,B.dXV,B.dY_,B.dYL,B.dYM,B.dYe,B.dYp,B.dY3,B.dYg,B.dYB,B.dYq,B.dYr,B.dYs,B.dYt,B.dYu,B.dY2,B.dXW,B.dYj,B.dYc,B.dY5,B.dYa,B.dYb,B.dYd,B.dY4,B.dYm,B.dYE,B.dYF,B.dYG,B.dYS,B.dYT,B.dYO,B.dYP,B.dYN,B.dYQ,B.dYR,B.dbP,B.dbQ,B.dbR,B.dbG,B.dbI,B.dbH,B.dbr,B.dbq,B.dbp,B.dbl,B.dbm,B.dbn,B.dc5,B.dc6,B.dc7,B.dc8,B.dc9,B.dca,B.dcc,B.dcb,B.dbU,B.dbV,B.dbX,B.dbY,B.dbZ,B.dc_,B.dbk,B.dc4,B.dc3,B.fBv])
x(A.lB,[B.acZ,B.O4,B.aa9,B.P8,B.Y6,B.P7,B.FE])
x(A.af,[B.a_2,B.VO,B.VS,B.VP,B.a_1,B.VQ,B.a_3,B.a_0,B.Qn,B.a_5,B.a__,B.a_6])
x(A.ah,[B.aAC,B.aEB,B.aEE,B.aEC,B.aAB,B.aED,B.aAD,B.aAA,B.aAG,B.aAE,B.aAz,B.aAF])
x(A.ax,[B.adr,B.aAy,B.bfa,B.ad_,B.acY,B.bfb])
x(A.jt,[B.cdd,B.cd9,B.cdh,B.cdi,B.fV4,B.dY8,B.dY6,B.dYW,B.dc0,B.cdC,B.fC5])
x(A.j_,[B.bkD,B.bx3])})()
A.j0(b.typeUniverse,JSON.parse('{"b5J":{"aa8":[]},"b5K":{"auW":[]},"a_2":{"af":[],"v":[]},"aAC":{"ah":["a_2"]},"adr":{"ax":[],"v":[]},"VO":{"af":[],"v":[]},"VS":{"af":[],"v":[]},"aEB":{"ah":["VO"]},"aEE":{"ah":["VS"]},"bkD":{"j_":[]},"VP":{"af":[],"v":[]},"aEC":{"ah":["VP"]},"a_1":{"af":[],"v":[]},"VQ":{"af":[],"v":[]},"ad_":{"ax":[],"v":[]},"a_3":{"af":[],"v":[]},"a_0":{"af":[],"v":[]},"Qn":{"af":[],"v":[]},"a_5":{"af":[],"v":[]},"acY":{"ax":[],"v":[]},"a__":{"af":[],"v":[]},"a_6":{"af":[],"v":[]},"aAB":{"ah":["a_1"]},"bx3":{"j_":[]},"aED":{"ah":["VQ"]},"aAy":{"ax":[],"v":[]},"bfa":{"ax":[],"v":[]},"aAD":{"ah":["a_3"]},"aAA":{"ah":["a_0"]},"aAG":{"ah":["Qn"]},"aAE":{"ah":["a_5"]},"aAz":{"ah":["a__"]},"aAF":{"ah":["a_6"]},"bfb":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uD"),k:x("Mw()"),m:x("bv<m,m>"),F:x("ro"),g:x("aB<jy?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<m,P>>"),t:x("O<a8<m,@>>"),r:x("O<jy>"),w:x("O<+file,name(lP,m)>"),u:x("O<cT>"),s:x("O<m>"),E:x("O<j_>"),a:x("O<dJ>"),p:x("O<v>"),Z:x("O<F>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jy>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iA"),e:x("iua"),af:x("EQ"),U:x("jy"),b:x("ct"),C:x("aF"),aK:x("wv"),ab:x("FD"),br:x("auW"),v:x("Y7"),N:x("m"),X:x("bp<I>"),Q:x("m_"),D:x("dJ"),aw:x("bP<m>"),cd:x("X<a8<m,@>>"),c7:x("v"),ch:x("c2<ai<jy>>"),aW:x("c2<dJ?>"),aY:x("c2<~>"),cx:x("acZ"),b1:x("bk<ai<jy>>"),cf:x("bk<dJ?>"),d4:x("bk<~>"),c4:x("aDf"),bG:x("aGn"),q:x("mu"),B:x("pJ<FD>"),c6:x("pJ<aa9>"),y:x("P"),i:x("I"),z:x("@"),S:x("F"),aQ:x("bh?"),_:x("ai<jy>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jy?"),R:x("aF?"),c:x("Y7?"),d:x("+answerQr,transfer(m,aB<ai<jy>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,O4,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dJ?"),cm:x("acG?"),bk:x("aDf?"),ag:x("aGn?"),dd:x("I?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b4L=new A.ay(C.aE,2,C.r,-1)
D.c6u=new A.a9(C.a6,C.a9,C.x,C.a4w,null,null)
D.b6o=new A.o(null,null,null,C.my,null,D.c6u,C.n)
D.b7S=new A.o(null,null,null,C.my,null,E.I_,C.n)
D.afl=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agM=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahO=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajz=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fEf=new A.B("Your team portal",null,C.dg,null,null,null,null,null,null,null,null,null)
D.fSZ=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.Ky,null,null,null,null,null,null,null,null,null)
D.di5=x([D.fEf,C.an,D.fSZ],y.p)
D.bvT=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.di5,null)
D.fXr=new A.B("Create your organization",null,C.fC,null,null,null,null,null,null,null,null,null)
D.fIH=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Ky,null,null,null,null,null,null,null,null,null)
D.dyS=x([D.fXr,C.an,D.fIH],y.p)
D.bw2=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dyS,null)
D.fTB=new A.B("Team Member sign-in",null,C.fC,null,null,null,null,null,null,null,null,null)
D.fMC=new A.B("Enter the access code and password from your organization.",null,G.Ky,null,null,null,null,null,null,null,null,null)
D.dwE=x([D.fTB,C.an,D.fMC],y.p)
D.bwd=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dwE,null)
D.bCn=new A.Q(16,10,16,28)
D.bCv=new A.Q(16,14,16,4)
D.bDL=new A.Q(20,0,20,16)
D.bEg=new A.Q(20,8,20,16)
D.amq=new A.Q(24,22,24,20)
D.a2r=new A.a0(63394,"MaterialIcons",!1)
D.apB=new A.a0(63515,"MaterialIcons",!1)
D.bRv=new A.a0(983813,"MaterialIcons",!1)
D.bOL=new A.a0(62867,"MaterialIcons",!1)
D.bSv=new A.ae(D.bOL,44,C.c,null,null,null)
D.bTA=new A.ae(C.k4,null,C.ad,null,null,null)
D.bUY=new A.ae(C.jn,18,null,null,null,null)
D.bWI=new A.ae(D.a2r,26,C.c,null,null,null)
D.bXh=new A.ae(C.CS,null,null,null,null,null)
D.bXS=new A.ae(C.D_,null,null,null,null,null)
D.bZ2=new A.ae(W.a2C,null,null,null,null,null)
D.bZn=new A.ae(C.hI,16,null,null,null,null)
D.c1T=new A.ae(C.rW,16,null,null,null,null)
D.bSM=new A.ae(C.nD,null,null,null,null,null)
D.c2M=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYp=new A.ae(C.Hh,null,null,null,null,null)
D.c2R=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bT7=new A.ae(H.HO,null,null,null,null,null)
D.c31=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bT7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cS2=x([C.fn,C.b2,C.aE],y.O)
D.c8n=new A.a9(C.aA,C.aF,C.x,D.cS2,null,null)
D.cRu=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RL=x([C.fn,C.aE],y.O)
D.S1=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n_=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dr1=x([C.oe,C.aE],y.O)
D.ej2={iceServers:0}
D.aKU={urls:0}
D.dCA=new A.bv(D.aKU,["stun:stun.l.google.com:19302"],y.m)
D.dCz=new A.bv(D.aKU,["stun:stun1.l.google.com:19302"],y.m)
D.d7J=x([D.dCA,D.dCz],A.as("O<a8<m,m>>"))
D.dBR=new A.bv(D.ej2,[D.d7J],A.as("bv<m,@>"))
D.J_=new B.O4(0,"lanDirect")
D.Tm=new B.O4(1,"cloudStash")
D.dND=new B.O4(2,"inlineInstant")
D.Tn=new B.O4(3,"webrtcLink")
D.A9=new B.O4(4,"videoCloud")
D.fSY=new A.B("Receive file",null,C.na,null,null,null,null,null,null,null,null,null)
D.cHi=x([E.ari,C.ae,D.fSY],y.p)
D.f6Y=new A.c7(C.aM,C.bb,C.i,C.m,null,C.p,null,0,D.cHi,null)
D.eqy=new A.D(C.cn,D.f6Y,null)
D.fuO=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Ir,null,null,null)
D.fEO=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fuO,null,C.K,null,null,null,null,null,null,null)
D.epJ=new A.D(C.Ch,D.fEO,null)
D.bcg=new A.cc(C.A,null,null,D.epJ,null)
D.ewQ=new A.cL(0,null,0,28,null,null,D.bcg,null)
D.ex9=new B.aa9(0,"RTCDataChannelConnecting")
D.aQn=new B.aa9(1,"RTCDataChannelOpen")
D.aQo=new B.aa9(3,"RTCDataChannelClosed")
D.exa=new B.FE(0,"RTCIceConnectionStateNew")
D.exb=new B.FE(1,"RTCIceConnectionStateChecking")
D.exc=new B.FE(2,"RTCIceConnectionStateCompleted")
D.exd=new B.FE(3,"RTCIceConnectionStateConnected")
D.exe=new B.FE(4,"RTCIceConnectionStateCount")
D.exf=new B.FE(5,"RTCIceConnectionStateFailed")
D.exg=new B.FE(6,"RTCIceConnectionStateDisconnected")
D.aQp=new B.FE(7,"RTCIceConnectionStateClosed")
D.aQq=new B.Y6(0,"RTCIceGatheringStateNew")
D.exh=new B.Y6(1,"RTCIceGatheringStateGathering")
D.a8S=new B.Y6(2,"RTCIceGatheringStateComplete")
D.a8T=new B.P7(0,"RTCPeerConnectionStateClosed")
D.aQr=new B.P7(1,"RTCPeerConnectionStateFailed")
D.aQs=new B.P7(2,"RTCPeerConnectionStateDisconnected")
D.aQt=new B.P7(3,"RTCPeerConnectionStateNew")
D.aQu=new B.P7(4,"RTCPeerConnectionStateConnecting")
D.aQv=new B.P7(5,"RTCPeerConnectionStateConnected")
D.exi=new B.P8(0,"RTCSignalingStateStable")
D.exj=new B.P8(1,"RTCSignalingStateHaveLocalOffer")
D.exk=new B.P8(2,"RTCSignalingStateHaveRemoteOffer")
D.exl=new B.P8(3,"RTCSignalingStateHaveLocalPrAnswer")
D.exm=new B.P8(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQw=new B.P8(5,"RTCSignalingStateClosed")
D.fc3=new A.av(160,48)
D.bdx=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.fdC=new A.a5(16,16,D.bdx,null)
D.fI1=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ff6=new A.b1(D.fI1,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fPE=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ff9=new A.b1(D.fPE,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fYv=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffg=new A.b1(D.fYv,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHC=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ffG=new A.b1(D.fHC,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTM=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTw=new A.b1(D.fTM,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fVe=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fg9=new A.b1(D.fVe,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZY=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new A.b1(D.fZY,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fXV=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new A.b1(D.fXV,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZ8=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fhh=new A.b1(D.fZ8,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGc=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhO=new A.b1(D.fGc,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRy=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fi8=new A.b1(D.fRy,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fKl=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fiE=new A.b1(D.fKl,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.h_3=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiI=new A.b1(D.h_3,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGs=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new A.b1(D.fGs,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fF9=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fj2=new A.b1(D.fF9,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fBV=new A.B("NGMY DOC SHARE",null,C.aUV,null,null,null,null,null,null,null,null,null)
D.fDl=new A.B("Show this to sender",null,C.ix,null,null,null,null,null,null,null,null,null)
D.fEm=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fJ7=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fJw=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fKv=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fL1=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNU=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fQH=new A.B("Send to their Doc Share",null,C.nR,null,null,null,null,null,null,null,null,null)
D.fR2=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRm=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fRX=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fS3=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fSr=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f8,null,null,null,null,null,null,null,null,null)
D.fVK=new A.B("Share files & videos\nwith a scan.",null,C.aUY,null,null,null,null,null,null,null,null,null)
D.fW3=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hrM=new B.a__(null)
D.acd=new B.acZ(0,"docShare")
D.ace=new B.acZ(1,"gate")
D.Wp=new B.acZ(2,"gateNoIndividual")})();(function staticFields(){$.aP5=null
$.fmW=function(){var x=y.N
return A.U(x,x)}()
$.GU=A.U(y.N,y.D)
$.ah2=A.U(y.N,A.as("lP"))
$.RJ=A.U(y.N,y.D)
$.fny=A.U(y.N,A.as("acG"))
$.cdv=A.U(y.S,A.as("bxr"))
$.hnq=1
$.ibr=null
$.ibq=null
$.i2z=null
$.hbX=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iuF","hFd",()=>new B.cri())
x($,"isz","hfT",()=>C.a.q(A.bz(A.bz(A.bz(A.Ht(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["pdpSTleIsoduT8cYwNxoCSse1yw="]=a.current})($__dart_deferred_initializers__);