((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cr6:function cr6(){},
hWL(d){var x=null,w=new B.b5H(d,D.ex5,new A.pI(x,x,y.c6),new A.pI(x,x,y.B))
w.bBD(d)
return w},
b5H:function b5H(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cr1:function cr1(d){this.a=d},
cr2:function cr2(d){this.a=d},
cr3:function cr3(d){this.a=d},
cr0:function cr0(d){this.a=d},
cr4:function cr4(d){this.a=d},
hWM(d,e){var x=y.N
x=new B.b5I(d,e,A.U(x,y.e),A.U(x,y.z))
x.bBE(d,e)
return x},
b5I:function b5I(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cr7:function cr7(d){this.a=d},
cr8:function cr8(d){this.a=d},
cr9:function cr9(d){this.a=d},
cra:function cra(d){this.a=d},
crb:function crb(d){this.a=d},
crc:function crc(d){this.a=d},
crd:function crd(d){this.a=d},
cre:function cre(d){this.a=d},
hbc(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zu.Mt(x,"ngmy_doc_share_v1",new B.fuF(),1)},
i2p(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.eC(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.wI(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cG.aM(d)
return x}catch(w){return v}return v},
RY(d,e){return B.ii3(d,e)},
ii3(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aP4
x=7
return A.b(o==null?$.aP4=B.hbc():o,$async$RY)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.mY(s,"blobs","readwrite")
C.j6.mw(J.mX(q,"blobs"),r,d)
x=8
return A.b(J.pS(q),$async$RY)
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
return A.i($async$RY,w)},
RX(d){return B.ii2(d)},
ii2(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$RX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aP4
x=7
return A.b(o==null?$.aP4=B.hbc():o,$async$RX)
case 7:s=f
r=J.mY(s,"blobs","readonly")
x=8
return A.b(C.j6.zY(J.mX(r,"blobs"),d),$async$RX)
case 8:q=f
x=9
return A.b(J.pS(r),$async$RX)
case 9:o=B.i2p(q)
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
return A.i($async$RX,w)},
ahJ(d){return B.ii1(d)},
ii1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aP4
x=7
return A.b(p==null?$.aP4=B.hbc():p,$async$ahJ)
case 7:s=f
r=J.mY(s,"blobs","readwrite")
C.j6.Gd(J.mX(r,"blobs"),d)
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
fuF:function fuF(){},
i4S(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bqr(w,v))}return u},
hBX(d,e){var x,w={},v=A.aXL("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fTC(w,v,e)
C.wM.z_(v,"change",new B.fTE(w,v,!1))
C.wM.z_(v,"cancel",new B.fTD(w))
$.eV.mC()
v.click()
A.bP(C.akv,new B.fTB(w),y.H)},
fTC:function fTC(d,e,f){this.a=d
this.b=e
this.c=f},
fTE:function fTE(d,e,f){this.a=d
this.b=e
this.c=f},
fTD:function fTD(d){this.a=d},
fTB:function fTB(d){this.a=d},
Dy(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Dy=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUn()?3:4
break
case 3:x=5
return A.b(B.hwQ(e,d,s,!0,!1,f,g,h,!1,i),$async$Dy)
case 5:x=1
break
case 4:x=6
return A.b(B.RC(d,s,f,g,h,i),$async$Dy)
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
return A.b(B.Jb(s,d),$async$Dy)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fq9(s,d),$async$Dy)
case 14:x=12
return A.b(r.hwQ(q,p,o,n,m,l,k,j,a1,i),$async$Dy)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cd(A.eb(new B.fTR(s,i,d,f,g,h),!1,null,y.H)),$async$Dy)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cd(A.eb(new B.fTS(s,i,d,f,g,h),!1,null,y.H)),$async$Dy)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Dy,w)},
RC(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RC=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0r(e),$async$RC)
case 3:u=k
x=4
return A.b(B.aqb(d,e,!1),$async$RC)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jb(e,d),$async$RC)
case 7:if(k){v=D.acd
x=1
break}x=8
return A.b(B.VQ(e),$async$RC)
case 8:v=t?D.Wn:D.ace
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b0p(d,e)){v=D.acd
x=1
break}x=11
return A.b(B.VQ(e),$async$RC)
case 11:v=t?D.Wn:D.ace
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h69(d,e)){v=D.acd
x=1
break}x=14
return A.b(B.VQ(e),$async$RC)
case 14:v=D.Wn
x=1
break
case 13:v=t?D.Wn:D.ace
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RC,w)},
fq9(d,e){var x=0,w=A.j(y.y),v
var $async$fq9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b0p(e,d)){v=!1
x=1
break}x=3
return A.b(B.b0r(d),$async$fq9)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fq9,w)},
hwQ(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cd(A.eb(new B.fxe(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hrP(d,e,f,g,h,i,j){return new B.a_1(e,j,d,g,h,i,f,null)},
fz7(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fz7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fza(A.R(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fz7)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fz7,w)},
fzC(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fzC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.au(C.au,u)
s=new A.au(C.au,u)
r=new A.au(C.au,u)
x=3
return A.b(A.bT(C.L,null,new B.fzE(A.R(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fzC)
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
return A.i($async$fzC,w)},
hbn(d,e,f,g){var x=null,w=A.Y(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fM8(d,e){var x=0,w=A.j(y.H),v
var $async$fM8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.VQ(e),$async$fM8)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eN()
case 1:return A.h(v,w)}})
return A.i($async$fM8,w)},
fTR:function fTR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fTS:function fTS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acY:function acY(d,e){this.a=d
this.b=e},
fxe:function fxe(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_1:function a_1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAB:function aAB(){this.c=this.a=this.d=null},
dbk:function dbk(d,e){this.a=d
this.b=e},
dbh:function dbh(d){this.a=d},
dbj:function dbj(d){this.a=d},
dbi:function dbi(d){this.a=d},
dbm:function dbm(){},
dbl:function dbl(d){this.a=d},
adq:function adq(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDe:function aDe(d,e){this.a=d
this.b=e},
aGm:function aGm(d,e,f){this.a=d
this.b=e
this.c=f},
fza:function fza(d,e,f){this.a=d
this.b=e
this.c=f},
fz8:function fz8(d){this.a=d},
fz9:function fz9(d,e,f){this.a=d
this.b=e
this.c=f},
fzE:function fzE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fzD:function fzD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd_(d,e,f,g,h){return B.hRD(d,e,f,g,h)},
hRD(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cd_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dK(d,new B.cd0(s,e,h,g,f,q),y.g),y.l),$async$cd_)
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
return A.i($async$cd_,w)},
b0m(d,e,f,g,h){return B.hRE(d,e,f,g,h)},
hRE(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0m=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avK("GET",d)
o=A.h2y()
if(o==null)o=new A.Ms(A.a([],y.W))
x=7
return A.b(o.f8(0,s).df(0,C.Gx),$async$b0m)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CJ(),$async$b0m)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cb(q,h,o,e,f,"Received via QR")
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
return A.i($async$b0m,w)},
b0l(d){return B.hRB(d)},
hRB(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.oj),$async$b0l)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Y.aS(0,A.m7(A.m5(p.e)).cE(0,p.w),null)
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
return A.i($async$b0l,w)},
ccZ(d){return B.hRC(d)},
hRC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ccZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vH(d,null).df(0,C.qr),$async$ccZ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m7(A.m5(q.e)).cE(0,q.w)
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
return A.i($async$ccZ,w)},
cd0:function cd0(d,e,f,g,h,i){var _=this
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
J9(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hRJ(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a0(t,u))return B.J9(C.a.b2(t,u.length))}return null},
hRK(d){var x=B.J9(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hRF(){var x,w=$.on(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a7z(d){return B.hRG(d)},
hRG(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bK),$async$a7z)
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
return A.i($async$a7z,w)},
a7A(d,e){return B.hRH(d,e)},
hRH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7A=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cK,null),$async$a7A)
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
return A.i($async$a7A,w)},
Ca(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ca=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ca)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.J9(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7B(r),$async$Ca)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ca)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.J9(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ca)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hRF()
x=14
return A.b(B.a7B(m),$async$Ca)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().af()
x=15
return A.b(B.a7A("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ca)
case 15:k=f
x=16
return A.b(B.a7A("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ca)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ca)
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
return A.i($async$Ca,w)},
a7B(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.J9(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7B)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7B,w)},
a7C(d,e,f,g){return B.hRL(d,e,f,g)},
hRL(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7C=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gav(d)){v=!1
x=1
break}r=B.J9(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7B(r),$async$a7C)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.cd6())>1048576||g.aX(d,new B.cd7())){v=B.F8(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a7N("myCode",d,a0),$async$a7C)
case 4:u=a3
try{t=C.Y.aS(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cq(s)||J.ad(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.F8(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b0u(u,g.gI(d),a0),$async$a7C)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.on().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dK(d,new B.cd8(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0n(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"status","pending"],i,y.z),q),$async$a7C)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7C,w)},
F8(d,e,f,g,h){return B.hRI(d,e,f,g,h)},
hRI(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$F8=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$F8)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cG(a6,0,new B.cd2())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.on().aw(9999)
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
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
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
a4=A.pf(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abc(a1.a,a4,"media",a1.d,a2).xB(m,n,new A.Eo(!0,q.c)),$async$F8)
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
return A.b(B.aRD(r),$async$F8)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dK(a6,new B.cd3(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0n(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().af(),"status","pending"],e,d),a8),$async$F8)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRD(r),$async$F8)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$F8,w)},
b0n(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7z(t),$async$b0n)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.cd1(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7A(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0n,w)},
O3(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$O3=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7z("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$O3)
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
return A.b(B.b0o(k,a0),$async$O3)
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
return A.b(B.b0t(h),$async$O3)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.VX(g,a0),$async$O3)
case 10:f=a3
if(f!=null&&J.cI(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().af())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.X(r,new B.cd4(),q),n)
d=A.C(new A.X(r,new B.cd5(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cW(d,0,A.dz(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7A("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$O3)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$O3,w)},
b0o(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b0o=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.ilU(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dw(l,m,"Received via My Code",t,e,i),$async$b0o)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRD(s),$async$b0o)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0o,w)},
cd6:function cd6(){},
cd7:function cd7(){},
cd8:function cd8(){},
cd2:function cd2(){},
cd3:function cd3(){},
cd1:function cd1(){},
cd4:function cd4(){},
cd5:function cd5(){},
fTO(d,e){var x=0,w=A.j(y.H)
var $async$fTO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cd(A.eb(new B.fTP(e),!1,null,y.H)),$async$fTO)
case 2:return A.h(null,w)}})
return A.i($async$fTO,w)},
bFq(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bFq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cq(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cd(A.eb(new B.fTQ(g,e,f),!1,null,y.y)),$async$bFq)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFq,w)},
fTP:function fTP(d){this.a=d},
fTQ:function fTQ(d,e,f){this.a=d
this.b=e
this.c=f},
VN:function VN(d,e){this.c=d
this.a=e},
aEA:function aEA(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dXx:function dXx(d,e){this.a=d
this.b=e},
VR:function VR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aED:function aED(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dYG:function dYG(d){this.a=d},
dYH:function dYH(d){this.a=d},
dYI:function dYI(d){this.a=d},
dYF:function dYF(d,e){this.a=d
this.b=e},
dYJ:function dYJ(d){this.a=d},
dYK:function dYK(d){this.a=d},
dYL:function dYL(d,e){this.a=d
this.b=e},
dYM:function dYM(d,e){this.a=d
this.b=e},
dYN:function dYN(d,e){this.a=d
this.b=e},
dYO:function dYO(d){this.a=d},
dYR:function dYR(){},
dYP:function dYP(d){this.a=d},
dYQ:function dYQ(d,e){this.a=d
this.b=e},
bkA:function bkA(){},
VO:function VO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEB:function aEB(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dXy:function dXy(d){this.a=d},
dXz:function dXz(d){this.a=d},
h6a(d){var x=d.i2
if(x>=0)return C.o.M(x)
return 10},
hRN(d){var x=d.l2
if(x>=0)return x
return 4.99},
hRM(d){var x=d.m3,w=y.N
w=x.jp(x,new B.cda(),w,w)
return w},
hmY(d){var x=d.l3,w=y.N
w=x.jp(x,new B.cdb(),w,w)
return w},
b0r(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b0r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b0r)
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
return A.i($async$b0r,w)},
a7E(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7E)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a7E)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7E,w)},
VQ(d){var x=0,w=A.j(y.H),v,u
var $async$VQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$VQ)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$VQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$VQ,w)},
h69(d,e){var x,w,v
if(B.hRN(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hRM(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cf(new A.V(Date.now(),0,!1))},
b0p(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hmY(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cf(new A.V(Date.now(),0,!1))},
hmZ(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a3(B.hmY(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cf(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dw(f,0,0,0,0,0).a).ab().af())
d.l3=w},
aqc(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$aqc)
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
return A.i($async$aqc,w)},
aqd(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqc(d),$async$aqd)
case 3:u=f
x=5
return A.b(A.az(),$async$aqd)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqd,w)},
aqb(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h6a(d)
if(u<=0){v=!1
x=1
break}if(B.h69(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqc(e),$async$aqb)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqb,w)},
b0q(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b0q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jb(e,d),$async$b0q)
case 3:if(g){v=-1
x=1
break}u=B.h6a(d)
if(u<=0){v=-1
x=1
break}if(B.h69(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqc(e),$async$b0q)
case 4:v=t.F(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0q,w)},
cdd(d,e,f){var x=0,w=A.j(y.y),v
var $async$cdd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jb(e,d),$async$cdd)
case 3:if(h){v=!1
x=1
break}v=B.aqb(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdd,w)},
cdc(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cdc=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cdd(d,u,i.gUn()),$async$cdc)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdc,w)},
a7D(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7D=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUn()){v=!0
x=1
break}if(B.b0p(d,u)){v=!0
x=1
break}x=5
return A.b(A.lv(u,C.TH),$async$a7D)
case 5:x=k?3:4
break
case 3:B.hmZ(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7D)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.la(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TH,"Doc Share for Organizations"),$async$a7D)
case 7:if(!k){v=!1
x=1
break}B.hmZ(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7D)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7D,w)},
cda:function cda(){},
cdb:function cdb(){},
fUH(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fUH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fUH)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fmD.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fmD.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUH,w)},
ioe(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fmD.bt($.fmD,new B.fUJ(d))},
fUJ:function fUJ(d){this.a=d},
foa(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$foa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
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
return A.b(A.bP(C.jl,null,y.H),$async$foa)
case 3:C.B3.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mC()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foa,w)},
agy(d,e,f){var x=0,w=A.j(y.H),v
var $async$agy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fnf.n(0,d,new B.acF(A.bo(e,!0,v)))
x=3
return A.b(A.az(),$async$agy)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.Y.az(A.I(["parts",e,"size",f],v,y.C),null)),$async$agy)
case 2:return A.h(null,w)}})
return A.i($async$agy,w)},
ags(d){return B.i6Q(d)},
i6Q(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ags=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fnf.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ags)
case 3:u=j.aT(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Y.aS(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cq(s)){v=null
x=1
break}o=J.b7(s,new B.frJ(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.acF(r)
$.fnf.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ags,w)},
Rs(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Rs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.GU.n(0,d,u)
x=3
return A.b(B.RY(d,u),$async$Rs)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rs,w)},
aPr(d){return B.i6O(d)},
i6O(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GU.h(0,d)
if(n!=null&&!C.aH.gav(n)){v=n
x=1
break}x=3
return A.b(B.RX(d),$async$aPr)
case 3:p=f
if(p!=null&&!C.aH.gav(p)){$.GU.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aPr)
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
return A.b(J.hq(s,d),$async$aPr)
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
return A.i($async$aPr,w)},
i2S(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cb(J.eC(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cb(A.wI(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cb(d)),y.K)
return A.f3(null,y.K)},
a2x(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bD,y.cf)
t=new A.c2(u,y.aW)
s=y.aK
A.fy(r,"loadend",new B.fxq(r,t),!1,s)
A.fy(r,"error",new B.fxr(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iC(0,C.NI,new B.fxs())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2x,w)},
aPL(d,e,f){return B.i9b(d,e,f)},
i9b(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPL=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2x(i),$async$aPL)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.RY(o,p),$async$aPL)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.agy(k,j,s),$async$aPL)
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
return A.i($async$aPL,w)},
aPK(d,e,f){return B.i9a(d,e,f)},
i9a(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPK=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPL(d,e,f),$async$aPK)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2x(f),$async$aPK)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GU.n(0,s,r)
$.RJ.n(0,s,r)
x=11
return A.b(B.Rs(s,r),$async$aPK)
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
return A.i($async$aPK,w)},
Cb(d,e,f,g,h,i){return B.hRW(d,e,f,g,h,i)},
hRW(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cb=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cM.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jy(p,q,o,n,new A.V(Date.now(),0,!1).ab().af(),a0,f,B.b0x(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Rs(s,d),$async$Cb)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cb)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cO.gcu().aM(d)),$async$Cb)
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
return A.b(B.B8(e),$async$Cb)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.H4(e,j),$async$Cb)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cb,w)},
VS(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$VS=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.B8(d),$async$VS)
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
k=B.hn0(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().af()
i=new B.jy(m,n,k,l,j,"From folder",null,B.b0x(),null)
$.ah1.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2x(o),$async$VS)
case 7:g=a1
x=g!=null&&!C.aH.gav(g)?8:10
break
case 8:$.GU.n(0,h,g)
$.RJ.n(0,h,g)
B.Rs(h,g)
x=9
break
case 10:x=11
return A.b(B.aPK(d,m,o),$async$VS)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.H4(d,t),$async$VS)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VS,w)},
h6e(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h6e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hn0(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jc(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gav(s)){v=B.Cb(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6e,w)},
Jc(d,e,f,g,h,i){return B.hRV(d,e,f,g,h,i)},
hRV(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
j=new A.L1(A.dz(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jc)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cq(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.Su(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.RY(k,l),$async$Jc)
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
return A.b(B.RY(k,new Uint8Array(A.cb(n))),$async$Jc)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.agy(r,q,g),$async$Jc)
case 16:f=new B.jy(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().af(),a2,null,B.b0x(),null)
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
VU(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$VU=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ah1.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2x(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ags(s),$async$VU)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.RX(u[o]),$async$VU)
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
case 5:i=$.RJ.h(0,s)
if(i==null)i=$.GU.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rO(d,e),$async$VU)
case 12:i=a0
if(i!=null&&!C.aH.gav(i))$.RJ.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wI(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VU,w)},
hn0(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rO(d,e){return B.hRX(d,e)},
hRX(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.RJ.h(0,f)
if(e==null)e=$.GU.h(0,f)
if(e!=null&&!C.aH.gav(e)){v=e
x=1
break}s=$.ah1.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2x(s),$async$rO)
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
return A.b(B.ags(f),$async$rO)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azo(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.RX(g[l]),$async$rO)
case 16:k=a3
if(k!=null&&!C.aH.gav(k))n.J(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apC()
if(!C.aH.gav(r)){$.GU.n(0,f,r)
$.RJ.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aPr(f),$async$rO)
case 17:j=a3
if(j!=null&&!C.aH.gav(j)){$.RJ.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.VU(a0,a1,0,g),$async$rO)
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
hS_(d){var x,w,v=$.ah1.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hS0(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hRY(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqj(d,e,f,g,h){return B.hRZ(d,e,f,g,h)},
hRZ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqj=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ah1.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2x(s),$async$aqj)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rO(g,e),$async$aqj)
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
return A.b(n.ix(d).xB(h,r,new A.Eo(!0,e.c)),$async$aqj)
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
return A.i($async$aqj,w)},
hn2(d,e,f,g,h){var x,w,v,u,t=$.hn1
$.hn1=t+1
x=Date.now()
w=""+1000*x+"_"+C.cM.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cdo.n(0,t,new B.bxo(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azo(u)))
return t},
h6f(d){var x=0,w=A.j(y.H)
var $async$h6f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h6f,w)},
Jd(d,e){var $async$Jd=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ah1.h(0,h)
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
return A.qo(B.VU(d,e,p,o<q?o:q),$async$Jd,w)
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
return A.qo(B.ags("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jd,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qo(B.RX(h[l]),$async$Jd,w)
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
return A.qo(A.Gr(A.wI(j,p,o<i?o:i)),$async$Jd,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qo(null,0,w)
case 2:return A.qo(t.at(-1),1,w)}})
var x=0,w=A.hvK($async$Jd,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hxw(w)},
b0z(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b0z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cdo.h(0,d)
if(t==null||J.cq(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a5t(),$async$b0z)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0z,w)},
VT(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$VT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdo.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5t(),$async$VT)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.agy(r.c,u,r.z),$async$VT)
case 4:t=new B.jy(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().af(),r.f,r.r,B.b0x(),null)
u=r.a
x=5
return A.b(B.B8(u),$async$VT)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.H4(u,s),$async$VT)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VT,w)},
a7K(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cdo.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahJ(u[s]),$async$a7K)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a7K,w)},
cdq(d,e,f){var x=0,w=A.j(y.H)
var $async$cdq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCp(d,e,f),$async$cdq)
case 2:return A.h(null,w)}})
return A.i($async$cdq,w)},
cdr(d,e,f){var x=0,w=A.j(y.H)
var $async$cdr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bCq(d,e,f),$async$cdr)
case 2:return A.h(null,w)}})
return A.i($async$cdr,w)},
F9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$F9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.B8(d),$async$F9)
case 2:p=g
J.nK(p,new B.cdp(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GU.W(0,v)
$.ah1.W(0,e)
x=3
return A.b(B.ags(v),$async$F9)
case 3:u=g
$.fnf.W(0,v)
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
b0y(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b0y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rO(d,e),$async$b0y)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.foa(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0y,w)},
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
break}r=J.b7(u,new B.fxt(),y.U)
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
t=J.b7(e,new B.fBz(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.Y.az(t,null)),$async$H4)
case 3:return A.h(null,w)}})
return A.i($async$H4,w)},
bCp(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(d),$async$bCp)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fvE(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aFD(f))
x=4
return A.b(B.H4(d,u),$async$bCp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCp,w)},
bCq(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bCq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(d),$async$bCq)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fvF(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cNG(f))
x=4
return A.b(B.H4(d,u),$async$bCq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bCq,w)},
acF:function acF(d){this.a=d},
frJ:function frJ(){},
fxq:function fxq(d,e){this.a=d
this.b=e},
fxr:function fxr(d){this.a=d},
fxs:function fxs(){},
cdp:function cdp(d){this.a=d},
bxo:function bxo(d,e,f,g,h,i,j,k,l){var _=this
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
fxt:function fxt(){},
fBz:function fBz(){},
fvE:function fvE(d){this.a=d},
fvF:function fvF(d){this.a=d},
a7L(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aX(d,new B.cdu())?3:4
break
case 3:x=5
return A.b(B.b0A(d,e),$async$a7L)
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
return A.b(B.b0v(s),$async$a7L)
case 10:case 9:if(g){v=new A.QO(1,D.Tk,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.VV(d,e),$async$a7L)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.W_(!0,!0,d,e),$async$a7L)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.O5(d,D.A9,e,t)
v=new A.QO(p,D.A9,t)
x=1
break}v=B.cdt(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7L,w)},
VV(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$VV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7N(null,d,e),$async$VV)
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
return A.b(B.b0u(p,d.length,e),$async$VV)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cdr(e,C.d.gH(d).a,r.b),$async$VV)
case 7:case 6:q=r.a
x=8
return A.b(B.O5(d,D.Tk,e,q),$async$VV)
case 8:v=new A.QO(d.length,D.Tk,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VV,w)},
VW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$VW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mI(D.mZ)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7M(d,e),$async$VW)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cdm(s,d,e,t),$async$VW)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b0v(t),$async$VW)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rO(e,d),$async$VW)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.VV(A.a([d],y.r),e),$async$VW)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$VW,w)},
VY(){var x=0,w=A.j(y.H)
var $async$VY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h68(),$async$VY)
case 2:x=3
return A.b(B.aS_(),$async$VY)
case 3:return A.h(null,w)}})
return A.i($async$VY,w)},
a7M(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b0x()
x=3
return A.b(B.cdq(e,d.a,u),$async$a7M)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7M,w)},
O5(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$O5=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Tk&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7M(p,f),$async$O5)
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
return A.b(B.cdl(o,p,u,f),$async$O5)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cdm(o,p,f,t),$async$O5)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cdk(o,u,p,f),$async$O5)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$O5,w)},
b0A(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b0A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cds(e,d),$async$b0A)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.W_(!1,!0,d,e),$async$b0A)
case 4:u=g
if(u!=null){t=u.b
v=new A.QO(u.a,D.A9,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0A,w)},
cds(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cds=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.VU(d,s,0,1),$async$cds)
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
return A.i($async$cds,w)},
cdt(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cdt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7N(null,d,e),$async$cdt)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hn_(u)
if(t.length>800){v=null
x=1
break}v=new A.QO(d.length,D.dNz,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdt,w)},
aqk(d,e,f){return B.hS3(d,e,f)},
hS3(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqk=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.nl(g,1)
x=B.h6d(g)?3:4
break
case 3:x=5
return A.b(B.cdn(g),$async$aqk)
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
return A.b(B.b0t(q),$async$aqk)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VX(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h6c(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.VX(n,a0)
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
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Je(h,d,a0)
x=1
break}if(J.f1(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.VX(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqk,w)},
Je(d,e,f){return B.hS1(d,e,f)},
hS1(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Je=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cF(A.w(s)+"/manifest.json",0,null)
q=A.cF(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0l(r),$async$Je)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0l(A.cF(s,0,null)),$async$Je)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cq(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cd_(o,r,a1,n,a2),$async$Je)
case 11:m=a4
x=J.cq(m)?12:13
break
case 12:x=14
return A.b(B.ccZ(q),$async$Je)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.VX(l,a2),$async$Je)
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
a7N(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aX(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rO(f,r),$async$a7N)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cO.gcu().aM(q)],t,s))
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
return A.i($async$a7N,w)},
VX(d,e){return B.hS2(d,e)},
hS2(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$VX=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.Cb(i,a3,d,k,l,o),$async$VX)
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
return A.i($async$VX,w)},
O4:function O4(d,e){this.a=d
this.b=e},
cdu:function cdu(){},
a26(d){var x=A.R(d).ax.a===C.J,w=x?D.ahL:D.afl,v=x?D.ajv:C.c,u=x?C.aQ:C.R,t=x?C.bM:C.am,s=x?D.agK:C.aO
return new A.aHB([w,s,v,u,t,x?C.fn:C.bQ])},
hCO(d,e){var x=e?C.w.j(0.72):C.aT
return A.cf(null,x,!0,null,new B.fYQ(e),d,null,!0,!0,y.N)},
cd9(d,e,f,g,h,i,j,k,l){return new B.VP(e,l,d,f,k,j,g,h,i,null)},
a_3(d,e,f,g,h,i,j){return new B.bf8(g,h,j,e,i,d,f,null)},
fYQ:function fYQ(d){this.a=d},
a_0:function a_0(d,e){this.c=d
this.a=e},
aAA:function aAA(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dbg:function dbg(d){this.a=d},
dbe:function dbe(d){this.a=d},
dbf:function dbf(d){this.a=d},
bx0:function bx0(){},
VP:function VP(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEC:function aEC(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dYE:function dYE(d){this.a=d},
dY1:function dY1(d,e){this.a=d
this.b=e},
dY2:function dY2(d,e){this.a=d
this.b=e},
dXB:function dXB(d,e,f){this.a=d
this.b=e
this.c=f},
dXA:function dXA(d){this.a=d},
dXC:function dXC(d,e){this.a=d
this.b=e},
dXH:function dXH(d,e,f){this.a=d
this.b=e
this.c=f},
dXG:function dXG(d){this.a=d},
dYs:function dYs(d,e){this.a=d
this.b=e},
dYt:function dYt(d){this.a=d},
dXZ:function dXZ(d,e,f){this.a=d
this.b=e
this.c=f},
dXW:function dXW(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dXF:function dXF(d){this.a=d},
dY6:function dY6(d){this.a=d},
dY5:function dY5(){},
dXL:function dXL(d){this.a=d},
dYp:function dYp(d,e){this.a=d
this.b=e},
dYq:function dYq(d,e){this.a=d
this.b=e},
dYr:function dYr(d,e){this.a=d
this.b=e},
dXX:function dXX(d,e){this.a=d
this.b=e},
dXY:function dXY(d,e){this.a=d
this.b=e},
dYi:function dYi(d,e){this.a=d
this.b=e},
dYe:function dYe(d){this.a=d},
dYd:function dYd(d){this.a=d},
dYf:function dYf(){},
dYg:function dYg(){},
dYh:function dYh(d,e){this.a=d
this.b=e},
dYj:function dYj(){},
dYk:function dYk(d){this.a=d},
dYc:function dYc(d,e){this.a=d
this.b=e},
dY7:function dY7(d){this.a=d},
dY8:function dY8(d){this.a=d},
dY9:function dY9(d){this.a=d},
dYa:function dYa(d){this.a=d},
dYb:function dYb(d){this.a=d},
dXI:function dXI(){},
dXJ:function dXJ(d){this.a=d},
dXK:function dXK(d,e){this.a=d
this.b=e},
dXE:function dXE(d,e){this.a=d
this.b=e},
dXD:function dXD(d,e,f){this.a=d
this.b=e
this.c=f},
dY_:function dY_(d){this.a=d},
dY0:function dY0(d,e,f){this.a=d
this.b=e
this.c=f},
dXU:function dXU(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d){this.a=d},
dXN:function dXN(d,e,f){this.a=d
this.b=e
this.c=f},
dXR:function dXR(d){this.a=d},
dXS:function dXS(d){this.a=d},
dXT:function dXT(){},
dXV:function dXV(d,e){this.a=d
this.b=e},
dXO:function dXO(d){this.a=d},
dXM:function dXM(d,e,f){this.a=d
this.b=e
this.c=f},
dXP:function dXP(){},
dY4:function dY4(d){this.a=d},
dY3:function dY3(d,e){this.a=d
this.b=e},
dYo:function dYo(d,e){this.a=d
this.b=e},
dYl:function dYl(d){this.a=d},
dYm:function dYm(d,e){this.a=d
this.b=e},
dYn:function dYn(d){this.a=d},
dYB:function dYB(d){this.a=d},
dYz:function dYz(d){this.a=d},
dYA:function dYA(d){this.a=d},
dYC:function dYC(){},
dYD:function dYD(d,e){this.a=d
this.b=e},
dYv:function dYv(d,e){this.a=d
this.b=e},
dYw:function dYw(d,e,f){this.a=d
this.b=e
this.c=f},
dYu:function dYu(d,e,f){this.a=d
this.b=e
this.c=f},
dYx:function dYx(d,e){this.a=d
this.b=e},
dYy:function dYy(d,e){this.a=d
this.b=e},
aAx:function aAx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bf7:function bf7(d,e,f){this.c=d
this.d=e
this.a=f},
dbc:function dbc(){},
dbd:function dbd(){},
acZ:function acZ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dbA:function dbA(){},
dbz:function dbz(d){this.a=d},
a_2:function a_2(d,e,f){this.c=d
this.d=e
this.a=f},
aAC:function aAC(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dbw:function dbw(d){this.a=d},
dbx:function dbx(d,e,f){this.a=d
this.b=e
this.c=f},
dby:function dby(d,e){this.a=d
this.b=e},
dbu:function dbu(d,e){this.a=d
this.b=e},
dbs:function dbs(d){this.a=d},
dbq:function dbq(d){this.a=d},
dbn:function dbn(d){this.a=d},
dbt:function dbt(d){this.a=d},
dbp:function dbp(d){this.a=d},
dbv:function dbv(d){this.a=d},
dbr:function dbr(d){this.a=d},
dbo:function dbo(d){this.a=d},
a__:function a__(d,e,f){this.c=d
this.d=e
this.a=f},
aAz:function aAz(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
db9:function db9(d){this.a=d},
db8:function db8(d,e){this.a=d
this.b=e},
dba:function dba(d){this.a=d},
db7:function db7(d,e){this.a=d
this.b=e},
dbb:function dbb(d){this.a=d},
db6:function db6(d,e){this.a=d
this.b=e},
db2:function db2(d){this.a=d},
db3:function db3(d){this.a=d},
db4:function db4(d,e){this.a=d
this.b=e},
db5:function db5(d){this.a=d},
Qn:function Qn(d,e,f){this.c=d
this.d=e
this.a=f},
aAF:function aAF(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dbN:function dbN(d){this.a=d},
dbO:function dbO(d){this.a=d},
dbP:function dbP(d){this.a=d},
dbQ:function dbQ(d){this.a=d},
dbR:function dbR(d,e){this.a=d
this.b=e},
dbS:function dbS(d){this.a=d},
dbU:function dbU(d){this.a=d},
dbT:function dbT(d){this.a=d},
a_4:function a_4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAD:function aAD(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dbJ:function dbJ(d,e){this.a=d
this.b=e},
dbK:function dbK(d,e){this.a=d
this.b=e},
dbB:function dbB(d,e,f){this.a=d
this.b=e
this.c=f},
dbC:function dbC(d){this.a=d},
dbD:function dbD(){},
dbI:function dbI(){},
dbE:function dbE(d,e){this.a=d
this.b=e},
dbF:function dbF(d,e){this.a=d
this.b=e},
dbG:function dbG(d,e){this.a=d
this.b=e},
dbH:function dbH(d,e){this.a=d
this.b=e},
acX:function acX(d,e){this.c=d
this.a=e},
db1:function db1(d){this.a=d},
ZZ:function ZZ(d){this.a=d},
aAy:function aAy(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_5:function a_5(d,e){this.c=d
this.a=e},
aAE:function aAE(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dbM:function dbM(d){this.a=d},
dbL:function dbL(d){this.a=d},
bf8:function bf8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hS4(){var x,w=$.on(),v=J.e2(10,y.N)
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
a7O(d){return B.hS5(d)},
hS5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7O)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z),!1,!1,C.cK,null),$async$a7O)
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
return A.i($async$a7O,w)},
VZ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$VZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O6(),$async$VZ)
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
return A.b(B.a7O(s),$async$VZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$VZ,w)},
W_(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$W_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c6(),$async$W_)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.C(new A.X(f,new B.cdw(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hS4()
t=A.T(u).k("N<1,a8<m,aF>>")
r=A.C(new A.N(u,new B.cdx(s),t),t.k("ak.E"))
x=6
return A.b(B.O6(),$async$W_)
case 6:q=i
J.aJ(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.C))
x=7
return A.b(B.a7O(q),$async$W_)
case 7:x=8
return A.b(B.a7P(r,u,g,s),$async$W_)
case 8:v=new A.bqW(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$W_,w)},
aql(d){var x=0,w=A.j(y.y),v,u,t
var $async$aql=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.O6(),$async$aql)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aql,w)},
cdy(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cdy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.O6(),$async$cdy)
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
return A.i($async$cdy,w)},
a7P(d,e,f,g){return B.hS6(d,e,f,g)},
hS6(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7P=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqj("media",r,new B.cdv(s,e,g),f,q),$async$a7P)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.VZ(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7P)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.VZ(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$a7P)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.VZ(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7P)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7P,w)},
Fa(d,e,f){return B.hS7(d,e,f)},
hS7(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.aql(b3),$async$Fa)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iJ,null,g),$async$Fa)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aql(b3),$async$Fa)
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
r=a1.gI(a4)
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
b0=A.pf(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abc(a8.a,b0,"media",a8.d,a9).D4(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b0m(k,n,o,s,b7),$async$Fa)
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
a8=A.pf(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abc(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fa)
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
return A.b(B.a7O(e),$async$Fa)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fa,w)},
cdw:function cdw(){},
cdx:function cdx(d){this.a=d},
cdv:function cdv(d,e,f){this.a=d
this.b=e
this.c=f},
aS_(){var x=0,w=A.j(y.H),v,u
var $async$aS_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i29=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aS_)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aS_)
case 3:u=$.hbA
u=u==null?null:u.bG(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aS_)
case 4:$.hbA=$.ib0=$.ib1=null
return A.h(null,w)}})
return A.i($async$aS_,w)},
fBa(d){var x=0,w=A.j(y.H),v,u
var $async$fBa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a8S){x=1
break}u=new A.bk($.bD,y.d4)
d.c=new B.fBb(new A.c2(u,y.aY))
x=3
return A.b(u.iC(0,C.i8,new B.fBc()),$async$fBa)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fBa,w)},
iaZ(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hRP(x):x},
hbE(d){var x=0,w=A.j(y.T),v,u,t
var $async$hbE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aqn(u)
x=1
break}v=B.h6c(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbE,w)},
hbD(d){var x=0,w=A.j(y.T),v,u,t
var $async$hbD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aqo(u)
x=1
break}v=B.h6c(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbD,w)},
fUq(d){var x=0,w=A.j(y.T),v
var $async$fUq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqo(d),$async$fUq)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUq,w)},
bDi(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hbD(d),$async$bDi)
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
return A.i($async$bDi,w)},
fp_(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fp_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.VT(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.Cb(d.apC(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fp_,w)},
H6(d,e,f){return B.idi(d,e,f)},
idi(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$H6=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hbE(a1),$async$H6)
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
return A.b($.hEO().aFT(D.dBN,null),$async$H6)
case 4:l=d.hbA=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azo(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bD,y.b1)
l.y=new B.fBM(f,k,new B.fBN(f,a2,k,j,a0,p),a2,j,a0,p,new A.c2(t,y.ch))
x=5
return A.b(l.a8u(0,new B.Y6(r,"offer")),$async$H6)
case 5:d=l
x=7
return A.b(l.am6(0),$async$H6)
case 7:x=6
return A.b(d.a8m(0,a4),$async$H6)
case 6:x=8
return A.b(B.fBa(l),$async$H6)
case 8:x=9
return A.b(l.aqo(),$async$H6)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iaZ(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Y.az(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqp(m,h),$async$H6)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hn_(h)
case 11:v=new A.bqb(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H6,w)},
fBb:function fBb(d){this.a=d},
fBc:function fBc(){},
fBN:function fBN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBM:function fBM(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fBL:function fBL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ifl(d){switch(d){case"new":return D.ex6
case"checking":return D.ex7
case"connected":return D.ex9
case"completed":return D.ex8
case"failed":return D.exb
case"disconnected":return D.exc
case"closed":return D.aQj
case"count":return D.exa}return D.aQj},
ifm(d){switch(d){case"new":return D.aQk
case"gathering":return D.exd
case"complete":return D.a8S}return D.aQk},
ipI(d){switch(d){case"stable":return D.exe
case"have-local-offer":return D.exf
case"have-local-pranswer":return D.exh
case"have-remote-offer":return D.exg
case"have-remote-pranswer":return D.exi
case"closed":return D.aQq}return D.aQq},
inW(d){switch(d){case"new":return D.aQn
case"connecting":return D.aQo
case"connected":return D.aQp
case"closed":return D.a8T
case"disconnected":return D.aQm
case"failed":return D.aQl}return D.a8T},
aa8:function aa8(d,e){this.a=d
this.b=e},
P8:function P8(d,e){this.a=d
this.b=e},
Y5:function Y5(d,e){this.a=d
this.b=e},
P7:function P7(d,e){this.a=d
this.b=e},
FE:function FE(d,e){this.a=d
this.b=e},
cr5:function cr5(){},
h7Y(d){var x=new B.FD()
x.a=d
x.b=!0
return x},
FD:function FD(){this.b=this.a=$},
aa7:function aa7(){},
auV:function auV(){},
Y6:function Y6(d,e){this.a=d
this.b=e},
h68(){var x=0,w=A.j(y.H)
var $async$h68=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h68,w)},
h6b(d,e,f){var x=0,w=A.j(y.T),v
var $async$h6b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mI(D.mZ))){v=null
x=1
break}v=B.fUH(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h6b,w)},
hn_(d){var x,w=F.aeL.a5c(C.dQ.aM(d),null)
if(w.length===0){x=C.dQ.aM(d)
return C.cO.gcu().aM(x)}return C.cO.gcu().aM(w)},
hRO(d){var x,w,v=C.cG.aM(d)
try{x=C.c9.cE(0,F.aeK.bfo(v,!1))
return x}catch(w){x=C.c9.cE(0,v)
return x}},
h6c(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hRO(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c9.cE(0,C.cG.aM(x))
return v}catch(u){return x}}return null},
hRP(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hRQ(){var x,w=$.on(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.he(v)},
b0s(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b0s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b0s)
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
return A.i($async$b0s,w)},
cde(d,e){return B.hRR(d,e)},
hRR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cde=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cK,null),$async$cde)
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
return A.i($async$cde,w)},
b0v(d){var x=0,w=A.j(y.y),v,u,t
var $async$b0v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b0s(d),$async$b0v)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0v,w)},
b0u(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b0u=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hRQ()
r=C.a.i(f)
t=C.dQ.aM(s)
x=3
return A.b(B.cde(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cO.gcu().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$b0u)
case 3:if(!h){v=null
x=1
break}v=new A.a16("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0u,w)},
b0t(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b0t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b0s(o),$async$b0t)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c9.cE(0,C.cG.aM(u))
if(J.j5(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b0t,w)},
cdf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cdf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEg("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cK),$async$cdf)
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
return A.i($async$cdf,w)},
b0w(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ja(),$async$b0w)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a3(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0w,w)},
aqg(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqg)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0w(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqg,w)},
aqe(d,e){var x=0,w=A.j(y.H)
var $async$aqe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqe)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqe)
case 2:return A.h(null,w)}})
return A.i($async$aqe,w)},
a7G(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7G=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7G)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ja(),$async$a7G)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.C))
x=5
return A.b(A.a7F(s),$async$a7G)
case 5:x=6
return A.b(B.aqe(f,u),$async$a7G)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7G,w)},
a7H(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7H=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7H)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ja(),$async$a7H)
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
return A.b(B.aqe(g,q),$async$a7H)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7F(u),$async$a7H)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7H,w)},
a7I(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7I=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7I)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ja(),$async$a7I)
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
s=B.b0p(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7I)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.Y.az(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().af()],p,p),null)),$async$a7I)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7I,w)},
cdg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cdg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cdg)
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
return A.i($async$cdg,w)},
Jb(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cdg(d),$async$Jb)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0w(t),$async$Jb)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqf(d),$async$Jb)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b0p(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqf(d),$async$Jb)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jb,w)},
aqf(d){var x=0,w=A.j(y.H)
var $async$aqf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aqf)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqf)
case 2:return A.h(null,w)}})
return A.i($async$aqf,w)},
b0x(){var x,w=$.on(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.he(v)},
a7J(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h6d(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cdj(d){return B.hRT(d)},
hRT(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cdj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7J(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cdj)
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
return A.i($async$cdj,w)},
aqi(d,e){return B.hRU(d,e)},
hRU(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqi=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7J(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cK,null),$async$aqi)
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
return A.i($async$aqi,w)},
cdl(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7J(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqi(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$cdl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdl,w)},
cdk(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cdk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7J(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqi(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z)),$async$cdk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cdk,w)},
cdm(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cdm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7J(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqi(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdm,w)},
cdn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cdn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h6d(d)){v=null
x=1
break}x=3
return A.b(B.cdj(d),$async$cdn)
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
return A.i($async$cdn,w)},
a7Q(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7Q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$a7Q)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7Q)
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
return A.i($async$a7Q,w)},
aqm(d){return B.hS8(d)},
hS8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c6(),$async$aqm)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().af()],y.N,y.z),!1,!1,C.cK,null),$async$aqm)
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
return A.i($async$aqm,w)},
aqn(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c6(),$async$aqn)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7Q(),$async$aqn)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c9.cE(0,C.cG.aM(q))
if(J.j5(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a3(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().af())
J.aJ(s,j,o)
x=9
return A.b(B.aqm(s),$async$aqn)
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
return A.i($async$aqn,w)},
aqp(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c6(),$async$aqp)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7Q(),$async$aqp)
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
return A.b(B.aqm(u),$async$aqp)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqp,w)},
aqo(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c6(),$async$aqo)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7Q(),$async$aqo)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c9.cE(0,C.cG.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqo,w)},
apj(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ao$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qf)){v=null
x=1
break}x=3
return A.b(p.mc(e),$async$apj)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.he),$async$apj)
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
return A.i($async$apj,w)},
ilU(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fSI(d){return B.ilW(d)},
ilW(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fSI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ix("media").Lh(d,3600),$async$fSI)
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
return A.i($async$fSI,w)},
Dw(d,e,f,g,h,i){var x=null
return B.ilT(d,e,f,g,h,i)},
ilT(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dw=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hn2(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h6f(r),$async$Dw)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fSI(o),$async$Dw)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7K(r),$async$Dw)
case 14:v=null
x=1
break
case 13:e=$.bD.h(0,C.aTQ)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ms(A.a([],g))
x=15
return A.b(d.f8(0,A.avK("GET",A.cF(n,0,null))).df(0,C.Gx),$async$Dw)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7K(r),$async$Dw)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.L1(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dw)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b0z(r,k),$async$Dw)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$Dw)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.VT(r)
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
return A.b(B.a7K(r),$async$Dw)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dw,w)},
aRD(d){return B.ilV(d)},
ilV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ix("media").W(0,d),$async$aRD)
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
return A.i($async$aRD,w)}},D,T,M,U,V,W,X,N,Y
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
B.cr6.prototype={
aFT(d,e){return this.cPb(d,e)},
cPb(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aFT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.U(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.v(0,d)
u=new q(A.ke(A.cv(t)))
t=J.k(u)
v=B.hWM(C.cO.gcu().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aFT,w)}}
B.b5H.prototype={
bBD(d){var x=this,w=x.w
w.onclose=A.hp(new B.cr1(x))
w.onopen=A.hp(new B.cr2(x))
w.onmessage=A.hp(new B.cr3(x))
w.onbufferedamountlow=A.hp(new B.cr4(x))},
gdd(d){return this.x},
aii(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FD()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h7Y(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aii)
case 8:v=t.h7Y(s.aot(f,0,null))
x=1
break
case 7:case 4:v=B.h7Y(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aii,w)}}
B.b5I.prototype={
bBE(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hp(new B.cr7(x)))
w.addEventListener("icecandidate",A.hp(new B.cr8(x)))
w.addEventListener("iceconnectionstatechange",A.hp(new B.cr9(x)))
w.onicegatheringstatechange=A.hp(new B.cra(x))
w.addEventListener("signalingstatechange",A.hp(new B.crb(x)))
if(!$.hfv())w.addEventListener("connectionstatechange",A.hp(new B.crc(x)))
w.addEventListener("negotiationneeded",A.hp(new B.crd(x)))
w.addEventListener("track",A.hp(new B.cre(x)))},
am6(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$am6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ke(A.cv(A.U(y.N,y.z)))),y.aQ),$async$am6)
case 3:t=f
v=new B.Y6(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am6,w)},
a8m(d,e){return this.bqC(0,e)},
bqC(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8m)
case 2:return A.h(null,w)}})
return A.i($async$a8m,w)},
a8u(d,e){return this.bqX(0,e)},
bqX(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8u)
case 2:return A.h(null,w)}})
return A.i($async$a8u,w)},
aqo(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Y6(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqo,w)},
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
B.acY.prototype={
a6(){return"_DocShareEntry."+this.b}}
B.a_1.prototype={
S(){return new B.aAB()},
gd1(){return this.c}}
B.aAB.prototype={
Z(){this.a3()
this.aeU()},
aeU(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0q(u.e,u.c),$async$aeU)
case 2:t=e
if(v.c!=null)v.m(new B.dbk(v,t))
return A.h(null,w)}})
return A.i($async$aeU,w)},
QO(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqb(t.e,t.c,!1),$async$QO)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fi2)
x=1
break}x=4
return A.b(B.a7E(u.a.c,"individual"),$async$QO)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a6L(A.eb(new B.dbh(u),!1,null,y.H)),$async$QO)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QO,w)},
JC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fz7(o),$async$JC)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7I(o.e,r,s,q),$async$JC)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff3)
x=1
break}x=5
return A.b(B.a7E(u.a.c,"member"),$async$JC)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a6L(A.eb(new B.dbj(u),!1,null,y.H)),$async$JC)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JC,w)},
yw(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7D(t.e,o,t.f,t.r,t.w,s),$async$yw)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7E(u.a.c,"org_owner"),$async$yw)
case 4:x=5
return A.b(B.aqg(u.a.c),$async$yw)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fzC(o),$async$yw)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7G(s,t,o,q.c),$async$yw)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ff0)
x=1
break}x=10
return A.b(B.aqg(u.a.c),$async$yw)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a6L(A.eb(new B.dbi(u),!1,null,y.H)),$async$yw)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yw,w)},
B(d){var x,w,v,u=this,t=null,s=A.R(d).ax.a===C.J,r=s?C.jz:C.qf,q=B.h6a(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.h2,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fBP,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h9,t,t,t),C.aC,D.fVE,C.X,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c8i,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lV(new B.dbm(),t),C.P,w,C.dV,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.R,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.am,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.af)
if(!u.a.x)C.d.v(p,A.a([new B.adq(C.f3,C.aCX,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcil(),t),C.af],v))
p.push(new B.adq(C.pm,C.a4w,"Team Member","Sign in with your organization access code + password",u.gcjc(),t))
p.push(C.af)
p.push(new B.adq(C.ap4,C.a69,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gciI(),t))
return A.c5(t,r,A.bm(!0,A.cg(A.x(p,C.al,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.ama,t,t,C.ai),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.adq.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aI(!1,C.a3,!0,s,A.aO(!1,r,!0,A.eG(A.A(A.a([A.p(s,A.Y(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a6,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ev,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nS,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.Y(C.z4,C.d.gH(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDe.prototype={}
B.aGm.prototype={}
B.jy.prototype={
mI(d){var x=this.b,w=C.a.oY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
gar4(){var x=this.d
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
beT(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jy(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cNG(d){return this.beT(null,d)},
aFD(d){return this.beT(d,null)}}
B.VN.prototype={
S(){return new B.aEA(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aEA.prototype={
Z(){this.a3()
this.aeV()},
aeV(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ca(u.a.c),$async$aeV)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dXx(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeV,w)},
aeW(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fz(s)),$async$aeW)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fiX)
case 1:return A.h(v,w)}})
return A.i($async$aeW,w)},
a_m(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_m=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apj(s.d,4),$async$a_m)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tj(r,"ngmy_my_code_"+m+".png"),$async$a_m)
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
return A.i($async$a_m,w)},
aiL(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aaM("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aiL)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiL,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.J,n=o?C.jz:C.qf,m=o?C.c:C.R,l=A.eE(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4Z,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a6,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.alJ,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.du,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.n5,w,C.l1,new A.em(A.p(p,A.q7(p,p,!1,B.hRK(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l1,A.A(A.a([A.E(A.es(N.D2,C.VM,q.gcaS(),p),1),C.at,A.E(A.dh(C.zt,C.abc,q.gcaT(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.X,new A.a5(1/0,p,A.es(M.a3f,D.fRg,q.gcy0(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.O8,p,p,C.ai)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.VR.prototype={
S(){return new B.aED(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aED.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.J9(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
a_n(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.J9(u.d.a.a)
if(t==null){u.m(new B.dYG(u))
x=1
break}u.m(new B.dYH(u))
s=u.a
r=s.c
x=3
return A.b(B.a7C(s.d,new B.dYI(u),t,r),$async$a_n)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dYJ(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_n,w)},
a2C(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2C=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cq(r.a.d)){x=1
break}r.m(new B.dYK(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rO(r.a.c,q),$async$a2C)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dYL(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ait(p,m,l,j,k),$async$a2C)
case 8:o=e
if(r.c!=null)r.m(new B.dYM(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dYN(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dYO(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2C,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.J,i=j?D.ahL:D.afl,h=j?D.ajv:C.c,g=j?C.aQ:C.R,f=j?C.bM:C.am,e=j?D.agK:C.aO
i=[i,e,h,g,f,j?C.fn:C.bQ]
x=A.R(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eE(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.dB(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a7),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.dB(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c_(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a7),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bWD,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ev,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fr,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4Z,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uM(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bkA()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.O3,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dYP(l),k,!1,k,k,!1,k,!0,k,C.ab,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.ms,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.L(i[1],C.r,1)
m=J.M5(l.a.d,4)
m=A.C(new A.N(m,new B.dYQ(x,new A.aHB(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.le,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.P,e,C.P,q,C.d6,p,C.P,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eD,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fdy)
else q.push(A.Y(C.lN,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.cV(k,A.A(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b6,new A.o(u,k,s,t,k,k,C.n),C.iH,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bEc,k,k,C.ai),1)
u=l.f?k:l.gcy1()
t=i[3]
s=i[1]
q=A.n(16)
s=A.es(M.a3f,D.fSl,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cn,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcaU()
t=A.bn(C.aE,k,k,0,C.c,k,C.nx,k,new A.b9(A.n(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.ly(new B.dYR(),A.x(A.a([e,new A.D(D.bDH,A.x(A.a([s,C.P,i,C.af,A.bH(l.f?C.ts:D.fQB,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cw,C.a_x,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bkA.prototype={
oU(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hg(C.bz,v.length),C.aP)}}
B.VO.prototype={
S(){return new B.aEB()}}
B.aEB.prototype={
Z(){var x,w,v,u=this
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
aeX(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dXy(r))
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
return A.b(B.a7H(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeX)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fiy)
s=[1]
x=4
break}p.L(y.q).f.U(D.fhb)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dXz(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeX,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.J?C.jz:C.qf,q=A.eE(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fJ1,s,s,s,1,s,!0),p=A.p(s,D.bvO,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.I0,C.n),s,s,s,s,C.ab,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c2M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c2H,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c2X,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ab,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcaV()
u=A.bn(C.aE,s,s,s,s,C.h3,s,s,s,s,s,s)
return A.c5(q,r,A.cg(A.x(A.a([p,C.d6,o,C.af,x,C.af,w,C.n5,A.bH(t.r?C.ts:C.aWE,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ab,s,s,C.ai),s,!1,!1,s,s)}}
B.acF.prototype={}
B.bxo.prototype={
a5t(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.apC()))
x=3
return A.b(B.RY(t,s),$async$a5t)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5t,w)},
gd1(){return this.a}}
B.O4.prototype={
a6(){return"NgmyDocShareQrMode."+this.b}}
B.a_0.prototype={
S(){return new B.aAA(new A.au(C.au,$.aw()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aAA.prototype={
Z(){this.a3()
$.aV.x1$.push(new B.dbg(this))},
t(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.t()
this.a2()},
cb0(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a26(d),u=x.a.c,t=u?C.iA:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jz:v.a[0],p=A.n(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.h2,32)],n),l=A.p(w,T.arJ,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cA,16)],n),C.asw,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uM(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bx0()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.V,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.GK,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.b4F),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dbe(x),w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.ms,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nU,new B.dbf(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cn,w,new A.b9(A.n(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cL,12)],n)
g=y.p
return A.eR(w,C.L,new A.cR(Q.LJ,A.c3(new A.D(C.yH,A.x(A.a([l,C.aR,k,C.P,j,C.dV,i,C.dV,A.A(A.a([f,C.at,A.E(A.c3(A.aI(!1,C.a3,!0,w,A.aO(!1,A.n(14),!0,D.equ,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcb_(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),new A.o(w,w,w,h,n,L.Q1,C.n),C.bi),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.O,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bi),w),w,w,w,C.Ob,C.da,w,w,w)}}
B.bx0.prototype={
oU(d,e){return e.am0(e.a.toUpperCase())}}
B.VP.prototype={
S(){return new B.aEC(A.a([],y.r),A.aS(y.N))},
gd1(){return this.c}}
B.aEC.prototype={
Z(){var x=this
x.a3()
x.uh()
x.w=A.de(C.jC,new B.dYE(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.VY()
this.a2()},
a1u(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O3(u.a.c),$async$a1u)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.B8(u.a.c),$async$a1u)
case 4:u.m(new s.dY1(u,e))
u.ig("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1u,w)},
uh(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.O3(u.a.c),$async$uh)
case 3:t=e
x=4
return A.b(B.B8(u.a.c),$async$uh)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dY2(u,s))
if(t>0)u.ig("Received "+A.w(t)+" file(s) via My Code.")
u.O3(u.d)
B.Ca(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uh,w)},
O3(d){return this.bFG(d)},
bFG(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$O3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7M(r,u.a.c),$async$O3)
case 8:p=f
if(u.c==null){x=1
break}new B.dXB(u,r,p).$0()
u.c.en()
case 7:if(!(C.a.a0(r.c,"video/")||r.mI(D.mZ))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.VW(r,u.a.c),$async$O3)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.B8(u.a.c),$async$O3)
case 12:u.m(new o.dXC(u,f))
case 1:return A.h(v,w)}})
return A.i($async$O3,w)},
Or(d){return this.bLX(d)},
bLX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7M(d,u.a.c),$async$Or)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dXH(u,d,t))
x=6
return A.b(A.fG(new A.fz(t)),$async$Or)
case 6:u.ig("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fz(r.toUpperCase())),$async$Or)
case 7:u.ig("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Or,w)},
ig(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.a_,x,x,x,x,x,x,x,x,x,x))},
ui(d,e){return this.cIV(d,e)},
cIV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ui=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dYs(r,e))
u=3
x=6
return A.b(d.$0(),$async$ui)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dYt(r))
$.eV.mC()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ui,w)},
gaXg(){var x=this.a
return x.f||x.r||x.w},
Ix(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ix=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXg()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cdc(s,n,r,q,o,t),$async$Ix)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ig("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fM8(o,u.a.c),$async$Ix)
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
return A.b(B.Dy(s,o,r,q,n,t),$async$Ix)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ix,w)},
a0y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqg(u.a.c),$async$a0y)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ig("No organization portal found.")
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
return A.b(A.a6(t,!1).cd(A.eb(new B.dXZ(u,r,q),!1,null,y.H)),$async$a0y)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0y,w)},
a1E(d){return this.crz(d)},
cry(){return this.a1E(1)},
crz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXg()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqd(u.a.c),$async$a1E)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1E,w)},
acN(d,e,f){return this.c1U(d,e,f)},
c1U(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ig(e)
x=1
break}x=3
return A.b(u.ui(new B.dXW(u,d,null,e,f),"Uploading\u2026"),$async$acN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acN,w)},
bFP(){B.hBX(!1,new B.dXF(this))
return},
cwC(){this.m(new B.dY6(this))},
aA7(){var x=0,w=A.j(y.H),v=this
var $async$aA7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bFP()
return A.h(null,w)}})
return A.i($async$aA7,w)},
acJ(){var x=0,w=A.j(y.H),v=this
var $async$acJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ui(new B.dXL(v),"Importing\u2026"),$async$acJ)
case 2:return A.h(null,w)}})
return A.i($async$acJ,w)},
SU(d){return this.cIe(d)},
cIe(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mI(D.mZ)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dYp(u,d),!1,null,y.H)),$async$SU)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mI(D.S_)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cd(A.eb(new B.dYq(u,d),!1,null,y.H)),$async$SU)
case 8:x=1
break
case 7:x=u.c2C(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cd(A.eb(new B.dYr(u,d),!1,null,y.H)),$async$SU)
case 11:x=1
break
case 10:u.ig("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SU,w)},
c2C(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cRr,C.a.b2(x,w+1).toLowerCase())},
agt(d){return this.cip(d)},
cip(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mI(D.mZ)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cd(A.eb(new B.dXX(u,d),!1,null,y.H)),$async$agt)
case 5:x=1
break
case 4:u.m(new B.dXY(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agt,w)},
Se(d){return this.czv(d)},
czv(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Se=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ig("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pq(t,s.c,s.f),$async$Se)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ui(new B.dYi(u,d),"Preparing QR\u2026"),$async$Se)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Se,w)},
aja(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aja=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dYj(),A.T(t).k("N<1,m>")).fL(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.C(new A.X(t,new B.dYk(q),s),s.k("M.E"))
if(r.length===0){u.ig("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Se(r),$async$aja)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aja,w)},
aj3(d){return this.cz2(d)},
cz2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aj3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a26(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYc(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aj3)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SU(d)
break
case"qr":u.Se(A.a([d],y.r))
break
case"send_my_code":u.cj1(A.a([d],y.r))
break
case"save":u.air(d)
break
case"delete":u.Jm(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aj3,w)},
Yf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dXI(),A.T(t).k("N<1,m>")).fL(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.C(new A.X(t,new B.dXJ(q),s),s.k("M.E"))
if(r.length===0){u.ig("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pq(t,s.c,s.f),$async$Yf)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ui(new B.dXK(u,r),"Preparing file\u2026"),$async$Yf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yf,w)},
ahy(d){return this.cpU(d)},
cpU(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hCO(d,!1),$async$ahy)
case 3:s=f
r=s==null
q=B.a7J(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ig("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahy,w)},
agz(){var x=0,w=A.j(y.H),v=this,u
var $async$agz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fTO(u,v.a.c),$async$agz)
case 2:return A.h(null,w)}})
return A.i($async$agz,w)},
bFO(){B.hBX(!1,new B.dXE(this,null))
return},
JB(d,e){return this.cj2(d,e)},
b2L(d){return this.JB(null,d)},
cj1(d){return this.JB(d,null)},
cj2(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.C(new A.X(p,new B.dY_(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xH.co().aoJ(!0,C.a1j,!1),$async$JB)
case 10:r=g
if(r==null||J.cq(r.a)){x=1
break}x=11
return A.b(s.ui(new B.dY0(l,s,r),"Preparing\u2026"),$async$JB)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ig("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ig("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bFq(p,l,e,s.a.c),$async$JB)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ig("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JB,w)},
IN(d){return this.c1H(d)},
c1H(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hRJ(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b2L(t),$async$IN)
case 8:x=6
break
case 7:u.ig("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ig("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ui(new B.dXU(u,d),"Receiving video\u2026"),$async$IN)
case 11:x=1
break
case 10:x=12
return A.b(u.ui(new B.dXV(u,d),"Receiving\u2026"),$async$IN)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IN,w)},
ED(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ED=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Ds()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahy(t),$async$ED)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IN(s),$async$ED)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dY4(u),!1,null,y.N)),$async$ED)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uh(),$async$ED)
case 10:x=1
break
case 9:x=11
return A.b(u.IN(C.a.i(r)),$async$ED)
case 11:case 1:return A.h(v,w)}})
return A.i($async$ED,w)},
air(d){return this.cva(d)},
cva(d){var x=0,w=A.j(y.H),v=this
var $async$air=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ui(new B.dY3(v,d),"Saving\u2026"),$async$air)
case 2:return A.h(null,w)}})
return A.i($async$air,w)},
Jm(d){return this.bOh(d)},
bOh(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ll(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jm)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cdf(t),$async$Jm)
case 6:case 5:s=d.a
x=7
return A.b(B.F9(u.a.c,s),$async$Jm)
case 7:u.r.W(0,s)
x=8
return A.b(u.uh(),$async$Jm)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jm,w)},
ajg(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a26(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.dYo(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajg)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agz()
break
case"import":u.acJ()
break}case 1:return A.h(v,w)}})
return A.i($async$ajg,w)},
caY(d){var x=d.c
if(C.a.a0(x,"video/")||d.mI(D.mZ))return C.qL
if(C.a.a0(x,"image/")||d.mI(D.S_))return C.uJ
if(C.a.q(x,"pdf"))return E.Pv
return D.apw},
B(d){var x,w,v=this,u=null,t=B.a26(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.HU,u,u,u,new B.dYz(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bXc,u,u,u,v.e?u:v.gciJ(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcwB()
n.push(A.aH(u,u,u,u,A.Y(v.r.a===x?D.bRq:E.apV,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a3c,u,u,u,v.e?u:v.gcaZ(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oC,u,u,u,v.e?u:v.gb3Q(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bYY,u,u,u,v.e?u:new B.dYA(v),u,u,u,u,"More options",u))
q=A.eE(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lV(new B.dYB(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.dB(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([p.j(A.R(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a7),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.dB(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c_(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.R(d).ax.a===C.J?0.12:0.08),C.aE.j(0)],n),u,u),C.a7),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kl(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aAx(C.jI,s,!0,t,w?u:v.gczw(),u),1)
x.push(new A.D(D.bCr,A.ly(new B.dYC(),A.A(A.a([s,C.at,A.E(new B.aAx(C.uK,"Export",!1,t,w?u:v.gbS9(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cw,C.j0,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bf7(t,v.e?u:v.gb3Q(),u)
else s=A.km(!0,u,u,new B.dYD(v,t),s,u,D.bCj,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aAx.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.we,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.Y(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.we,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.Y(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f8,t,t,t),u.r,v)}}
B.bf7.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ly(new B.dbc(),new A.D(E.a0q,A.x(A.a([A.ly(new B.dbd(),A.p(x,A.Y(C.z5,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.aA,C.aF,C.x,u,x,x),C.a7),x,88,x,x,x,x,x,88),C.ew,C.hD,x,x,new A.bp(0.86,1,w),s),C.dV,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.X,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dV,A.dh(C.oC,D.fVY,this.d,A.bn(C.aE,x,x,x,C.c,x,C.O9,x,new A.b9(A.n(16),C.a1),x,x,x))],y.p),C.m,x,C.e,C.O,0,C.p),x),C.cw,C.C1,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.acZ.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.F(k.c*45,0,360),0,0)
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
if(!o||i.mI(D.mZ))p=D.dqY
else{p=C.a.a0(p,"image/")||i.mI(D.S_)
n=y.O
p=p?A.a([C.cS,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.Y(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gar4()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mI(D.mZ))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.Y(C.fU,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.mI(D.mZ)))l.push(A.h3T(C.aE,!1,j,j,j,!1,j,j,new B.dbz(k),j,j,new A.b9(A.n(5),C.a1),j,j,!1,u))
x=A.Y(C.ou,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.ly(new B.dbA(),new A.D(C.ei,A.aI(!1,C.a3,!0,j,A.aO(!1,r,!0,new A.D(C.a_T,A.A(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bQ("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.a_2.prototype={
S(){return new B.aAC()},
gd1(){return this.c}}
B.aAC.prototype={
Z(){this.a3()
this.ym()},
t(){B.hRY(this.e)
this.a2()},
ym(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ym=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rO(o.c,o.d),$async$ym)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gav(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hS0(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hS_(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dbw(s))
x=1
break}s.m(new B.dbx(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dby(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ym,w)},
a2B(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rO(t.c,t.d),$async$a2B)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ffA)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ait(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2B)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2B,w)},
c1A(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kA(u,C.A,v,new B.dbu(w,t),C.hc,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aH.gav(t))x=A.fR(t,C.A,v,new B.dbv(w),C.hc,C.dC,!0,v,!1,v,v)
else return C.bL
return A.uS(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a26(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.D3,u,u,u,v.gb7A(),u,u,u,u,"Share / save",u))
r=A.eE(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fp
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aR,A.dh(C.D3,D.fEg,v.gb7A(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c1A()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a__.prototype={
S(){return new B.aAz(A.ajk(),C.bD,C.bD)},
gd1(){return this.c}}
B.aAz.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fx(w,A.a4(w).k("fx<1>")).iy(new B.db9(v))
x.gcWO().iy(new B.dba(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fx(x,A.a4(x).k("fx<1>"))}if(x==null)x=C.baQ
x.iy(new B.dbb(v))
v.ym()},
ym(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ym=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rO(p.c,p.d),$async$ym)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.db2(s))
x=1
break}x=8
return A.b(s.d.vm(0,new A.a4a(r,s.a.d.c)),$async$ym)
case 8:if(s.c==null){x=1
break}s.m(new B.db3(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.db4(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ym,w)},
a_o(){var x=0,w=A.j(y.H),v=this,u
var $async$a_o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_o)
case 5:x=3
break
case 4:x=6
return A.b(u.iB(0),$async$a_o)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_o,w)},
aV4(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a26(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eE(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fp
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bSq,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Q1,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.db5(p),C.o.F(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aV4(p.w)+" / "+p.aV4(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.fc_,o,o,o,o,o,o)
r=p.f
q=A.Y(r?I.uM:C.hs,o,o,o,o,o)
x=A.x(A.a([u,C.l1,t,x,C.d6,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcb1(),s)],y.p),C.m,o,C.e,C.O,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.qw,x,o),o,o,o),o,!1,!1,o,o)}}
B.Qn.prototype={
S(){return new B.aAF()},
gd1(){return this.c}}
B.aAF.prototype={
Z(){this.a3()
this.Q7()},
Q7(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Q7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h6b(o.c,o.d,new B.dbN(s)),$async$Q7)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dbO(s))
x=1
break}s.e=r
q=O.iec(r)
if(q==null){s.m(new B.dbP(s))
x=1
break}s.d=q
q.aV(0,s.gb2y())
x=8
return A.b(q.iT(0).df(0,C.rK),$async$Q7)
case 8:if(s.c==null){x=1
break}s.m(new B.dbQ(s))
x=9
return A.b(q.qm(0),$async$Q7)
case 9:q.tU(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.dbR(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Q7,w)},
cgZ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dbS(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dl(0,x.gb2y())
w=x.d
if(w!=null)w.t()
B.ioe(x.e)
x.a2()},
af_(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b0y(u.c,u.d),$async$af_)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$af_,w)},
B(d){var x,w,v,u=this,t=null,s=B.a26(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eE(A.a([A.aH(t,t,t,t,C.oB,t,t,t,u.gcaW(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fp
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aiP(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fF(x,new A.an(C.A,t,C.ac,C.t,A.a([new A.AD(s,t),A.aA(t,A.DK(A.p(t,A.Y(q?I.uM:C.hs,C.c,t,t,t,48),C.f,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.b6,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dbU(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a_4.prototype={
S(){return new B.aAD(new A.cw(null,y.A))}}
B.aAD.prototype={
gcIC(){var x,w,v=this.a
if(v.e!==D.Tl)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcIc(){var x,w,v=this.a
if(v.e!==D.A9)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcIC()
if(x!=null){v.Re(x)
v.e=A.de(R.GA,new B.dbJ(v,x))}w=v.gcIc()
if(w!=null){v.Rd(w)
v.f=A.de(C.fF,new B.dbK(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rd(d){return this.co6(d)},
co6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aql(d),$async$Rd)
case 3:t=f
x=4
return A.b(B.cdy(d),$async$Rd)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dbB(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rd,w)},
Re(d){return this.co7(d)},
co7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Re=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fUq(d),$async$Re)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDi(t),$async$Re)
case 4:if(u.c==null){x=1
break}u.m(new B.dbC(u))
u.c.L(y.q).f.U(D.aTr)
case 1:return A.h(v,w)}})
return A.i($async$Re,w)},
gc6P(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcaX(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2n(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Ds()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fiI)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cd(A.eb(new B.dbD(),!1,null,y.N)),$async$a2n)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDi(s),$async$a2n)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aTr)
case 1:return A.h(v,w)}})
return A.i($async$a2n,w)},
aaB(d){return this.bLY(d)},
bLY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fz(C.d.aN(t,", "))),$async$aaB)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.a_,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaB,w)},
aeY(d){return this.bLH(d)},
bLH(d){var x=0,w=A.j(y.H),v=this
var $async$aeY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fz(v.a.c)),$async$aeY)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fg3)
return A.h(null,w)}})
return A.i($async$aeY,w)},
a2h(d){return this.cvc(d)},
cvc(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apj(s.d,4),$async$a2h)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tj(r,"ngmy_doc_share_qr.png"),$async$a2h)
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
return A.i($async$a2h,w)},
gaYx(){var x,w=this.a
if(w.e!==D.J0)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aay(d){return this.bLR(d)},
bLR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aay=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaYx()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fz(C.a.a0(t,"http")?t:"N2|"+t)),$async$aay)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fhI)
case 1:return A.h(v,w)}})
return A.i($async$aay,w)},
aeZ(){var x=0,w=A.j(y.H),v=this,u
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.VY(),$async$aeZ)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aeZ,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a26(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.J0&&i!==D.Tl&&i!==D.A9
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eE(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.J0||t===D.Tl||t===D.A9?l:A.aH(l,l,l,l,C.lm,l,l,l,m.gb0B(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.q7(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc6P(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.J0){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mO,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gcaX(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.v(q,A.a([C.X,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.V,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.c1O,D.fNO,new B.dbE(m,d),l)],p))}if(m.a.e===D.J0&&m.gaYx()!=null)C.d.v(q,A.a([C.X,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ho(D.bZi,D.fKp,new B.dbF(m,d),l)],p))
if(m.a.e===D.A9){x=(m.w?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ad(C.k.F(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mO,l,l,l)],p))}if(m.a.e===D.Tl){x=(m.r?C.dG:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fs:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mO,l,l,l),C.af,A.dh(D.bUT,D.fQX,m.gcvz(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oG(i,A.c5(v,w,new A.D(C.ab,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.bb,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ab,l,l,1/0),1),C.af,A.A(A.a([A.E(A.es(N.D2,C.VM,new B.dbG(m,d),l),1),C.at,A.E(A.dh(C.zt,C.abc,new B.dbH(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bH(C.AN,l,m.gb0B(),A.bn(C.aN,l,l,l,l,C.h3,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dbI(),y.C)}}
B.acX.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cg(A.x(A.a([w,C.aR,A.p(x,A.q7(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ai)
return A.eg(A.a([A.bH(C.xh,x,new B.db1(d),x)],u),x,x,C.nf,v,x,x,x,x,D.fDf,x)}}
B.ZZ.prototype={
S(){return new B.aAy(A.zM(C.yo,C.o_,C.uZ))}}
B.aAy.prototype={
t(){this.d.t()
this.a2()},
ayH(d){var x,w,v,u,t
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
return A.c5(A.eE(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fKW,x,x,x,1,x,!0),C.w,A.zL(this.d,C.bZ,this.gayG()),x,!1,!1,x,x)}}
B.a_5.prototype={
S(){return new B.aAE(A.zM(C.yo,C.o_,C.uZ))},
gd1(){return this.c}}
B.aAE.prototype={
c2E(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
agW(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.My("text/plain"),$async$agW)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fiC)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agW,w)},
abp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hCO(p,!0),$async$abp)
case 3:t=e
p=t==null
s=B.a7J(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.ffa)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abp,w)},
t(){this.d.t()
this.a2()},
ayH(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c2E(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.aqP,v,v,v,w.gbRE(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a3j,v,v,v,w.gcls(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eE(A.a([u,t,A.aH(v,v,v,v,A.Y(w.f?C.uG:P.Pd,v,v,v,v,v),v,v,v,new B.dbM(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fRR,v,v,v,1,v,!0)
u=A.zL(w.d,C.bZ,w.gayG())
x=A.n(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ewM],s),v),v,!1,!1,v,v)}}
B.bf8.prototype={
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
return A.aI(!1,C.a3,!0,r,A.aO(!1,w,!0,new A.D(C.a0w,A.A(A.a([u,C.be,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.Y(C.eG,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aa8.prototype={
a6(){return"RTCDataChannelState."+this.b}}
B.P8.prototype={
a6(){return"RTCSignalingState."+this.b}}
B.Y5.prototype={
a6(){return"RTCIceGatheringState."+this.b}}
B.P7.prototype={
a6(){return"RTCPeerConnectionState."+this.b}}
B.FE.prototype={
a6(){return"RTCIceConnectionState."+this.b}}
B.cr5.prototype={}
B.FD.prototype={}
B.aa7.prototype={}
B.auV.prototype={}
B.Y6.prototype={}
var z=a.updateTypes(["aB<~>()","P(jy)","m(jy)","VP(Z)","~()","a_1(Z)","F(F,jy)","Qn(Z)","~(me)","ct(FD)","aB<jy?>(@)","VN(Z)","VR(Z)","D(jy)","jy(@)","a8<m,@>(jy)","a_0(Z)","VO(Z)","a_2(Z)","a__(Z)","a_4(Z)","acX(Z)","ai<jy>()","a_5(Z)","acZ(Z,F)","ZZ(Z)","a8<m,aF>(jy)","ct(Y5)","ct(aa7)","aB<ct>(FD)"])
B.cr1.prototype={
$1(d){var x=this.a
x.x=D.aQi
x.y.J(0,D.aQi)},
$S:75}
B.cr2.prototype={
$1(d){var x=this.a
x.x=D.aQh
x.y.J(0,D.aQh)},
$S:75}
B.cr3.prototype={
$1(d){var x=this.a
x.aii(A.ahe(d.data)).bJ(new B.cr0(x),y.b)},
$S:75}
B.cr0.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cr4.prototype={
$1(d){},
$S:75}
B.cr7.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hWL(d.channel))},
$S:16}
B.cr8.prototype={
$1(d){},
$S:16}
B.cr9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ifl(w.iceConnectionState)
x.cx=w
if($.hfv())switch(w.a){case 0:x.cy=D.aQn
break
case 1:x.cy=D.aQo
break
case 3:x.cy=D.aQp
break
case 5:x.cy=D.aQl
break
case 6:x.cy=D.aQm
break
case 7:x.cy=D.a8T
break
default:break}},
$S:106}
B.cra.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ifm(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:106}
B.crb.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ipI(w.signalingState)},
$S:106}
B.crc.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.inW(w.connectionState)},
$S:106}
B.crd.prototype={
$1(d){},
$S:106}
B.cre.prototype={
$1(d){},
$S:16}
B.fuF.prototype={
$1(d){var x=y.F.a(new A.r3([],[]).oH(d.target.result,!1)),w=C.yp.q(x.objectStoreNames,"blobs")
if(!w)C.yl.Lf(x,"blobs")},
$S:184}
B.fTC.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wM.fq(this.b)
$.eV.mC()
this.c.$1(d)},
$S:391}
B.fTE.prototype={
$1(d){return this.a.$1(B.i4S(this.b,this.c))},
$S:32}
B.fTD.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fTB.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fTR.prototype={
$1(d){var x=this
return B.hrP(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fTS.prototype={
$1(d){var x=this
return B.hrP(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fxe.prototype={
$1(d){var x=this
return B.cd9(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dbk.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dbh.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cd9(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dbj.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cd9(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dbi.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cd9(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dbm.prototype={
$4(d,e,f,g){var x=null
return A.jX(A.A(A.a([A.aH(x,x,x,x,D.bTv,x,x,x,new B.dbl(d),x,x,x,x,x,x),A.E(A.Fp(D.RJ,!0,x,C.a2l,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.RJ,x,g,C.amv,0,e,f)},
$C:"$4",
$R:4,
$S:410}
B.dbl.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fza.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eP,y.o).w,t=this.a,s=t?C.iA:C.c,r=A.n(28),q=A.p(v,D.bw8,C.f,v,v,D.b6i,v,v,v,v,D.aml,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bXN,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.GP,A.x(A.a([o,C.af,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ar4,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ab,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dT(C.dk,new B.fz8(d),v),1),C.at,A.E(A.bH(D.fJq,v,new B.fz9(p,x,d),A.bn(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GD,v,v,v,v),v)},
$S:60}
B.fz8.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fz9.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fgk)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDe(v,x))},
$S:0}
B.fzE.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eP,y.o).w,u=x.a,t=u?C.iA:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bvY,C.f,w,w,D.b7M,w,w,w,w,D.aml,w,w,1/0),new A.D(C.GP,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.hbn(u,"Organization name",C.Hi,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.hbn(u,"Access code",C.nC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.X,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.hbn(u,"Member password",H.HP,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ab,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.by,A.bH(D.fRY,w,new B.fzD(r,q,p,d),A.bn(C.aE,w,w,w,w,C.h3,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GD,w,w,w,w),w)},
$S:60}
B.fzD.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fgp)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGm(u,x,w))},
$S:0}
B.cd0.prototype={
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
p=C.a.a0(j,"http")?A.cF(j,0,null):s.b.aW(j)
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
return A.b(B.Cb(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cd6.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cd7.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cd8.prototype={
$1(d){return d.b},
$S:z+2}
B.cd2.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cd3.prototype={
$1(d){return d.b},
$S:z+2}
B.cd1.prototype={
$1(d){return A.a3(y.f.a(d),y.N,y.z)},
$S:13}
B.cd4.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cd5.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fTP.prototype={
$1(d){return new B.VN(this.a,null)},
$S:z+11}
B.fTQ.prototype={
$1(d){return new B.VR(this.a,this.b,this.c,null)},
$S:z+12}
B.dXx.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dYG.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dYH.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dYI.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dYF(x,d))},
$S:2}
B.dYF.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dYJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYK.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dYL.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dYM.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dYN.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dYO.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dYR.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*14)),e)},
$S:100}
B.dYP.prototype={
$1(d){var x=this.a
return x.f?null:x.a_n()},
$S:2}
B.dYQ.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mI(D.S_))s=C.uJ
else s=C.a.a0(s,"video/")||d.mI(D.mZ)?C.qL:D.apw
x=this.b.a
w=y.p
return new A.D(C.kT,A.A(A.a([A.p(v,A.Y(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.V,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gar4(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dXy.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dXz.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cda.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.cdb.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fUJ.prototype={
$2(d,e){return e===this.a},
$S:326}
B.frJ.prototype={
$1(d){return J.k(d)},
$S:17}
B.fxq.prototype={
$1(d){var x=this.b
B.i2S(C.H5.ga75(this.a)).bJ(x.gBU(x),y.H)},
$S:130}
B.fxr.prototype={
$1(d){return this.a.da(0,null)},
$S:130}
B.fxs.prototype={
$0(){return null},
$S:12}
B.cdp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxt.prototype={
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
B.fBz.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fvE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fvF.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cdu.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.mZ)},
$S:z+1}
B.fYQ.prototype={
$1(d){return new B.a_0(this.a,null)},
$S:z+16}
B.dbg.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fV()},
$S:7}
B.dbe.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dbf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dYE.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1u()},
$S:11}
B.dY1.prototype={
$0(){var x=J.bGs(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dY2.prototype={
$0(){var x=J.bGs(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dXB.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dXA(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFD(this.c)}},
$S:0}
B.dXA.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dXC.prototype={
$0(){var x=J.bGs(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dXH.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dXG(this.b))
if(w>=0){x=x.d
x[w]=x[w].aFD(this.c)}},
$S:0}
B.dXG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYs.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dYt.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dXZ.prototype={
$1(d){return new B.VO(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dXW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ix(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.VS(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uh(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1E(s.gI(t)),$async$$0)
case 8:case 7:r.ig(s.gav(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXF.prototype={
$1(d){this.a.acN(d,"No files selected.","Added")},
$S:391}
B.dY6.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.N(x,new B.dY5(),A.T(x).k("N<1,m>")))},
$S:0}
B.dY5.prototype={
$1(d){return d.a},
$S:z+2}
B.dXL.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xH.co().cYM(C.a1j,!0),$async$$0)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ig("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ig("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqk(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cq(l)){o.ig("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uh(),$async$$0)
case 9:o.ig("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dYp.prototype={
$1(d){return new B.Qn(this.a.a.c,this.b,null)},
$S:z+7}
B.dYq.prototype={
$1(d){return new B.a_2(this.a.a.c,this.b,null)},
$S:z+18}
B.dYr.prototype={
$1(d){return new B.a__(this.a.a.c,this.b,null)},
$S:z+19}
B.dXX.prototype={
$1(d){return new B.Qn(this.a.a.c,this.b,null)},
$S:z+7}
B.dXY.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYi.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ix(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7L(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ig("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cry(),$async$$0)
case 5:x=6
return A.b(p.uh(),$async$$0)
case 6:r=A.T(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dYe(p),r),new B.dYf(),r.k("N<ak.E,m>")).bZ(0,new B.dYg())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cd(A.eb(new B.dYh(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pp(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.VY(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYe.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dYd(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dYd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dYf.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dYg.prototype={
$1(d){return d.length!==0},
$S:3}
B.dYh.prototype={
$1(d){var x=this.a
return new B.a_4(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dYj.prototype={
$1(d){return d.a},
$S:z+2}
B.dYk.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dYc.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kS,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gar4(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mI(D.mZ)?C.rX:C.pr
p=!x||p.mI(D.mZ)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([q,o,t,C.aC,B.a_3(!1,u,!1,w,p,new B.dY7(d),v),B.a_3(!1,u,!1,C.jI,"Share via QR",new B.dY8(d),"Letters/numbers QR code"),B.a_3(!1,u,!1,D.a2q,"Send to their Code",new B.dY9(d),"Enter someone else's personal code"),B.a_3(!1,u,!1,C.hV,"Download / save",new B.dYa(d),v),C.an,B.a_3(!1,u,!0,C.ee,"Delete",new B.dYb(d),v)],y.p),C.al,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,v,v,C.n),C.bi)},
$S:610}
B.dY7.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dY8.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dY9.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dYa.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dYb.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dXI.prototype={
$1(d){return d.a},
$S:z+2}
B.dXJ.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dXK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7N(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.H8(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pp(s.c,s.f),$async$$0)
case 4:u.ig(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXE.prototype={
$1(d){var x=this.a
x.ui(new B.dXD(x,d,this.b),"Preparing\u2026")},
$S:391}
B.dXD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ig("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.VS(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cq(s)){t.ig("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bFq(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ig("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dY_.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dY0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aX(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h6e(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.H6(new B.dXQ(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ig("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.dXR(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dXS(s))
case 5:x=8
return A.b(r.b.iC(0,C.Gx,new B.dXT()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gav(t)){s.ig("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uh(),$async$$0)
case 9:s.ig("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXQ.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dXN(x,d,e))},
$S:211}
B.dXN.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dXR.prototype={
$1(d){return new B.acX(this.a.a,null)},
$S:z+21}
B.dXS.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dXT.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dXV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.J9(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7B(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b2L(B.J9(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqk(new B.dXO(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cq(r)){if(B.h6d(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ig(q)
x=1
break}x=10
return A.b(s.uh(),$async$$0)
case 10:o=J.cC(r)
p=o.eO(r,new B.dXP()).gI(0)
s.ig(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dXO.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dXM(x,d,e))},
$S:211}
B.dXM.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dXP.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.mZ)},
$S:z+1}
B.dY4.prototype={
$1(d){return new B.a_5(this.a.a.c,null)},
$S:z+23}
B.dY3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b0y(u.a.c,v.b),$async$$0)
case 2:t.ig(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dYo.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c3(A.bm(!0,new A.D(C.Cc,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kS,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_3(!0,w,!1,C.nC,"My Code",new B.dYl(d),"Your personal code & QR \u2014 others send docs to you"),B.a_3(!1,w,!1,D.a2q,"Send to their Code",new B.dYm(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_3(!1,w,!1,S.zk,"Import backup",new B.dYn(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bG(new A.ay(t,1,C.r,-1),C.a1,C.a1,C.a1),C.l5,x,x,C.n),C.bi)},
$S:610}
B.dYl.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dYm.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bFO()},
$S:0}
B.dYn.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dYB.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jj(D.RJ,x,C.a2l,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cT(C.d.gH(D.RJ).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:757}
B.dYz.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dYA.prototype={
$0(){this.a.ajg()
return null},
$S:0}
B.dYC.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*10)),e)},
$S:100}
B.dYD.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.acZ(e,w,v,this.b,x.e,x.caY(w),new B.dYv(x,w),new B.dYw(x,v,w),new B.dYx(x,w),new B.dYy(x,w),null)},
$S:z+24}
B.dYv.prototype={
$0(){this.a.agt(this.b)
return null},
$S:0}
B.dYw.prototype={
$0(){var x=this.a
return x.m(new B.dYu(x,this.b,this.c))},
$S:0}
B.dYu.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dYx.prototype={
$0(){this.a.Or(this.b)
return null},
$S:0}
B.dYy.prototype={
$0(){this.a.aj3(this.b)
return null},
$S:0}
B.dbc.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*18)),e)},
$S:100}
B.dbd.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:113}
B.dbA.prototype={
$3(d,e,f){return A.da(A.dO(f,new A.q(0,(1-e)*14)),e)},
$S:100}
B.dbz.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dbw.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dbx.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dby.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dbu.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gav(w))return A.fR(w,C.A,x,new B.dbs(this.a),C.hc,C.dC,!0,x,!1,x,x)
$.aV.x1$.push(new B.dbt(this.a))
return C.bL},
$S:144}
B.dbs.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dbq(this.a))
return C.bL},
$S:197}
B.dbq.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbn(x))},
$S:7}
B.dbn.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbt.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbp(x))},
$S:7}
B.dbp.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dbv.prototype={
$3(d,e,f){$.aV.x1$.push(new B.dbr(this.a))
return C.bL},
$S:197}
B.dbr.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dbo(x))},
$S:7}
B.dbo.prototype={
$0(){return this.a.w=!0},
$S:0}
B.db9.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.db8(x,d))},
$S:1762}
B.db8.prototype={
$0(){return this.a.f=this.b===C.vn},
$S:0}
B.dba.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.db7(x,d))},
$S:7}
B.db7.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dbb.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.db6(x,d))},
$S:7}
B.db6.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.db2.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.db3.prototype={
$0(){return this.a.e=!1},
$S:0}
B.db4.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.db5.prototype={
$1(d){return this.a.d.Np(0,A.dw(0,0,0,C.k.V(d),0,0))},
$S:6}
B.dbN.prototype={
$0(){var x=this.a.a
return B.rO(x.c,x.d)},
$S:1763}
B.dbO.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dbP.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dbQ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dbR.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dbS.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dbU.prototype={
$0(){var x=this.a
x.m(new B.dbT(x))},
$S:0}
B.dbT.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qm(0)},
$S:0}
B.dbJ.prototype={
$1(d){return this.a.Re(this.b)},
$S:11}
B.dbK.prototype={
$1(d){return this.a.Rd(this.b)},
$S:11}
B.dbB.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dbC.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dbD.prototype={
$1(d){return D.hrG},
$S:z+25}
B.dbI.prototype={
$2(d,e){if(d)B.VY()},
$S:127}
B.dbE.prototype={
$0(){return this.a.aaB(this.b)},
$S:0}
B.dbF.prototype={
$0(){return this.a.aay(this.b)},
$S:0}
B.dbG.prototype={
$0(){return this.a.aeY(this.b)},
$S:0}
B.dbH.prototype={
$0(){return this.a.a2h(this.b)},
$S:0}
B.db1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dbM.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qq(),$async$$0)
case 2:u.m(new B.dbL(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dbL.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cdw.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mI(D.mZ)},
$S:z+1}
B.cdx.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cdv.prototype={
$2(d,e){return this.bmr(d,e)},
bmr(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.VZ(u.c,A.I(["uploadProgress",C.k.F(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1764}
B.fBb.prototype={
$1(d){if(d===D.a8S&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fBc.prototype={
$0(){},
$S:12}
B.fBN.prototype={
bo0(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fp_(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hn2(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bo0(d,e)},
$S:753}
B.fBM.prototype={
$1(d){var x=this
d.b=new B.fBL(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fBL.prototype={
$1(d){return this.bo_(d)},
bo_(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b0z(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
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
return A.b(B.fp_(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a7K(m),$async$$1)
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
x(v=B.aAB.prototype,"gcil","QO",0)
x(v,"gcjc","JC",0)
x(v,"gciI","yw",0)
x(v=B.aEA.prototype,"gcaS","aeW",0)
x(v,"gcaT","a_m",0)
x(v,"gcy0","aiL",0)
x(v=B.aED.prototype,"gcaU","a_n",0)
x(v,"gcy1","a2C",0)
x(B.aEB.prototype,"gcaV","aeX",0)
x(B.aAA.prototype,"gcb_","cb0",4)
x(v=B.aEC.prototype,"gciJ","a0y",0)
x(v,"gcwB","cwC",4)
x(v,"gb3Q","aA7",0)
x(v,"gczw","aja",0)
x(v,"gbS9","Yf",0)
x(v,"gcaZ","ED",0)
x(B.aAC.prototype,"gb7A","a2B",0)
x(B.aAz.prototype,"gcb1","a_o",0)
x(v=B.aAF.prototype,"gb2y","cgZ",4)
x(v,"gcaW","af_",0)
x(v=B.aAD.prototype,"gcvz","a2n",0)
x(v,"gb0B","aeZ",0)
w(B.aAy.prototype,"gayG","ayH",8)
x(v=B.aAE.prototype,"gcls","agW",0)
x(v,"gbRE","abp",0)
w(v,"gayG","ayH",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.cr5,B.aa7,B.auV,B.aDe,B.aGm,B.jy,B.acF,B.bxo,B.FD,B.Y6])
w(B.cr6,B.cr5)
w(B.b5H,B.aa7)
x(A.hu,[B.cr1,B.cr2,B.cr3,B.cr0,B.cr4,B.cr7,B.cr8,B.cr9,B.cra,B.crb,B.crc,B.crd,B.cre,B.fuF,B.fTC,B.fTE,B.fTD,B.fTR,B.fTS,B.fxe,B.dbh,B.dbj,B.dbi,B.dbm,B.fza,B.fzE,B.cd0,B.cd7,B.cd8,B.cd3,B.cd1,B.cd4,B.cd5,B.fTP,B.fTQ,B.dYI,B.dYR,B.dYP,B.dYQ,B.frJ,B.fxq,B.fxr,B.cdp,B.fxt,B.fBz,B.fvE,B.fvF,B.cdu,B.fYQ,B.dbg,B.dbe,B.dYE,B.dXA,B.dXG,B.dXZ,B.dXF,B.dY5,B.dYp,B.dYq,B.dYr,B.dXX,B.dYe,B.dYd,B.dYf,B.dYg,B.dYh,B.dYj,B.dYk,B.dYc,B.dXI,B.dXJ,B.dXE,B.dY_,B.dXR,B.dXP,B.dY4,B.dYo,B.dYB,B.dYC,B.dbc,B.dbd,B.dbA,B.dbz,B.dbu,B.dbs,B.dbq,B.dbt,B.dbv,B.dbr,B.db9,B.dba,B.dbb,B.db5,B.dbJ,B.dbK,B.dbD,B.cdw,B.cdx,B.fBb,B.fBM,B.fBL])
w(B.b5I,B.auV)
x(A.iG,[B.fTB,B.dbk,B.dbl,B.fz8,B.fz9,B.fzD,B.dXx,B.dYG,B.dYH,B.dYF,B.dYJ,B.dYK,B.dYL,B.dYM,B.dYN,B.dYO,B.dXy,B.dXz,B.fxs,B.dbf,B.dY1,B.dY2,B.dXB,B.dXC,B.dXH,B.dYs,B.dYt,B.dXW,B.dY6,B.dXL,B.dXY,B.dYi,B.dY7,B.dY8,B.dY9,B.dYa,B.dYb,B.dXK,B.dXD,B.dY0,B.dXU,B.dXN,B.dXS,B.dXT,B.dXV,B.dXM,B.dY3,B.dYl,B.dYm,B.dYn,B.dYz,B.dYA,B.dYv,B.dYw,B.dYu,B.dYx,B.dYy,B.dbw,B.dbx,B.dby,B.dbn,B.dbp,B.dbo,B.db8,B.db7,B.db6,B.db2,B.db3,B.db4,B.dbN,B.dbO,B.dbP,B.dbQ,B.dbR,B.dbS,B.dbU,B.dbT,B.dbB,B.dbC,B.dbE,B.dbF,B.dbG,B.dbH,B.db1,B.dbM,B.dbL,B.fBc])
x(A.lB,[B.acY,B.O4,B.aa8,B.P8,B.Y5,B.P7,B.FE])
x(A.ag,[B.a_1,B.VN,B.VR,B.VO,B.a_0,B.VP,B.a_2,B.a__,B.Qn,B.a_4,B.ZZ,B.a_5])
x(A.ah,[B.aAB,B.aEA,B.aED,B.aEB,B.aAA,B.aEC,B.aAC,B.aAz,B.aAF,B.aAD,B.aAy,B.aAE])
x(A.ax,[B.adq,B.aAx,B.bf7,B.acZ,B.acX,B.bf8])
x(A.jt,[B.cd6,B.cd2,B.cda,B.cdb,B.fUJ,B.dXQ,B.dXO,B.dYD,B.dbI,B.cdv,B.fBN])
x(A.j_,[B.bkA,B.bx0])})()
A.j0(b.typeUniverse,JSON.parse('{"b5H":{"aa7":[]},"b5I":{"auV":[]},"a_1":{"ag":[],"v":[]},"aAB":{"ah":["a_1"]},"adq":{"ax":[],"v":[]},"VN":{"ag":[],"v":[]},"VR":{"ag":[],"v":[]},"aEA":{"ah":["VN"]},"aED":{"ah":["VR"]},"bkA":{"j_":[]},"VO":{"ag":[],"v":[]},"aEB":{"ah":["VO"]},"a_0":{"ag":[],"v":[]},"VP":{"ag":[],"v":[]},"acZ":{"ax":[],"v":[]},"a_2":{"ag":[],"v":[]},"a__":{"ag":[],"v":[]},"Qn":{"ag":[],"v":[]},"a_4":{"ag":[],"v":[]},"acX":{"ax":[],"v":[]},"ZZ":{"ag":[],"v":[]},"a_5":{"ag":[],"v":[]},"aAA":{"ah":["a_0"]},"bx0":{"j_":[]},"aEC":{"ah":["VP"]},"aAx":{"ax":[],"v":[]},"bf7":{"ax":[],"v":[]},"aAC":{"ah":["a_2"]},"aAz":{"ah":["a__"]},"aAF":{"ah":["Qn"]},"aAD":{"ah":["a_4"]},"aAy":{"ah":["ZZ"]},"aAE":{"ah":["a_5"]},"bf8":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("uD"),k:x("Mw()"),m:x("bv<m,m>"),F:x("ro"),g:x("aB<jy?>"),x:x("aB<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<m,P>>"),t:x("O<a8<m,@>>"),r:x("O<jy>"),w:x("O<+file,name(lP,m)>"),u:x("O<cT>"),s:x("O<m>"),E:x("O<j_>"),a:x("O<dJ>"),p:x("O<v>"),Z:x("O<F>"),G:x("bh"),A:x("cw<ah<ag>>"),n:x("ai<jy>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iA"),e:x("itK"),af:x("EQ"),U:x("jy"),b:x("ct"),C:x("aF"),aK:x("ww"),ab:x("FD"),br:x("auV"),v:x("Y6"),N:x("m"),X:x("bp<H>"),Q:x("m_"),D:x("dJ"),aw:x("bQ<m>"),cd:x("X<a8<m,@>>"),c7:x("v"),ch:x("c2<ai<jy>>"),aW:x("c2<dJ?>"),aY:x("c2<~>"),cx:x("acY"),b1:x("bk<ai<jy>>"),cf:x("bk<dJ?>"),d4:x("bk<~>"),c4:x("aDe"),bG:x("aGm"),q:x("mu"),B:x("pI<FD>"),c6:x("pI<aa8>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bh?"),_:x("ai<jy>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jy?"),R:x("aF?"),c:x("Y6?"),d:x("+answerQr,transfer(m,aB<ai<jy>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,F)?"),L:x("+fileCount,mode,qrPayload(F,O4,m)?"),aX:x("+fileCount,qrPayload,token(F,m,m)?"),T:x("m?"),K:x("dJ?"),cm:x("acF?"),bk:x("aDe?"),ag:x("aGm?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b4F=new A.ay(C.aE,2,C.r,-1)
D.c6p=new A.a9(C.a6,C.a9,C.x,C.a4w,null,null)
D.b6i=new A.o(null,null,null,C.my,null,D.c6p,C.n)
D.b7M=new A.o(null,null,null,C.my,null,E.I0,C.n)
D.afl=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.agK=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ahL=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ajv=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fE9=new A.B("Your team portal",null,C.dg,null,null,null,null,null,null,null,null,null)
D.fST=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.di1=x([D.fE9,C.an,D.fST],y.p)
D.bvO=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.di1,null)
D.fXl=new A.B("Create your organization",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fIB=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dyO=x([D.fXl,C.an,D.fIB],y.p)
D.bvY=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dyO,null)
D.fTv=new A.B("Team Member sign-in",null,C.fB,null,null,null,null,null,null,null,null,null)
D.fMw=new A.B("Enter the access code and password from your organization.",null,G.Kz,null,null,null,null,null,null,null,null,null)
D.dwA=x([D.fTv,C.an,D.fMw],y.p)
D.bw8=new A.fj(C.ai,C.e,C.i,C.E,null,C.p,null,0,D.dwA,null)
D.bCj=new A.Q(16,10,16,28)
D.bCr=new A.Q(16,14,16,4)
D.bDH=new A.Q(20,0,20,16)
D.bEc=new A.Q(20,8,20,16)
D.aml=new A.Q(24,22,24,20)
D.a2q=new A.a0(63394,"MaterialIcons",!1)
D.apw=new A.a0(63515,"MaterialIcons",!1)
D.bRq=new A.a0(983813,"MaterialIcons",!1)
D.bOG=new A.a0(62867,"MaterialIcons",!1)
D.bSq=new A.ae(D.bOG,44,C.c,null,null,null)
D.bTv=new A.ae(C.k4,null,C.ad,null,null,null)
D.bUT=new A.ae(C.jn,18,null,null,null,null)
D.bWD=new A.ae(D.a2q,26,C.c,null,null,null)
D.bXc=new A.ae(C.CS,null,null,null,null,null)
D.bXN=new A.ae(C.D_,null,null,null,null,null)
D.bYY=new A.ae(W.a2B,null,null,null,null,null)
D.bZi=new A.ae(C.hI,16,null,null,null,null)
D.c1O=new A.ae(C.rW,16,null,null,null,null)
D.bSH=new A.ae(C.nC,null,null,null,null,null)
D.c2H=new A.e5(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bSH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYk=new A.ae(C.Hi,null,null,null,null,null)
D.c2M=new A.e5(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bT2=new A.ae(H.HP,null,null,null,null,null)
D.c2X=new A.e5(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bT2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cS_=x([C.fn,C.b2,C.aE],y.O)
D.c8i=new A.a9(C.aA,C.aF,C.x,D.cS_,null,null)
D.cRr=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RJ=x([C.fn,C.aE],y.O)
D.S_=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mZ=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dqY=x([C.oe,C.aE],y.O)
D.eiZ={iceServers:0}
D.aKO={urls:0}
D.dCw=new A.bv(D.aKO,["stun:stun.l.google.com:19302"],y.m)
D.dCv=new A.bv(D.aKO,["stun:stun1.l.google.com:19302"],y.m)
D.d7G=x([D.dCw,D.dCv],A.as("O<a8<m,m>>"))
D.dBN=new A.bv(D.eiZ,[D.d7G],A.as("bv<m,@>"))
D.J0=new B.O4(0,"lanDirect")
D.Tk=new B.O4(1,"cloudStash")
D.dNz=new B.O4(2,"inlineInstant")
D.Tl=new B.O4(3,"webrtcLink")
D.A9=new B.O4(4,"videoCloud")
D.fSS=new A.B("Receive file",null,C.n9,null,null,null,null,null,null,null,null,null)
D.cHf=x([E.ard,C.ae,D.fSS],y.p)
D.f6U=new A.c7(C.aM,C.bb,C.i,C.m,null,C.p,null,0,D.cHf,null)
D.equ=new A.D(C.cn,D.f6U,null)
D.fuI=new A.G(!0,C.c,null,null,null,null,null,C.V,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.Is,null,null,null)
D.fEI=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fuI,null,C.K,null,null,null,null,null,null,null)
D.epF=new A.D(C.Ch,D.fEI,null)
D.bca=new A.cc(C.A,null,null,D.epF,null)
D.ewM=new A.cL(0,null,0,28,null,null,D.bca,null)
D.ex5=new B.aa8(0,"RTCDataChannelConnecting")
D.aQh=new B.aa8(1,"RTCDataChannelOpen")
D.aQi=new B.aa8(3,"RTCDataChannelClosed")
D.ex6=new B.FE(0,"RTCIceConnectionStateNew")
D.ex7=new B.FE(1,"RTCIceConnectionStateChecking")
D.ex8=new B.FE(2,"RTCIceConnectionStateCompleted")
D.ex9=new B.FE(3,"RTCIceConnectionStateConnected")
D.exa=new B.FE(4,"RTCIceConnectionStateCount")
D.exb=new B.FE(5,"RTCIceConnectionStateFailed")
D.exc=new B.FE(6,"RTCIceConnectionStateDisconnected")
D.aQj=new B.FE(7,"RTCIceConnectionStateClosed")
D.aQk=new B.Y5(0,"RTCIceGatheringStateNew")
D.exd=new B.Y5(1,"RTCIceGatheringStateGathering")
D.a8S=new B.Y5(2,"RTCIceGatheringStateComplete")
D.a8T=new B.P7(0,"RTCPeerConnectionStateClosed")
D.aQl=new B.P7(1,"RTCPeerConnectionStateFailed")
D.aQm=new B.P7(2,"RTCPeerConnectionStateDisconnected")
D.aQn=new B.P7(3,"RTCPeerConnectionStateNew")
D.aQo=new B.P7(4,"RTCPeerConnectionStateConnecting")
D.aQp=new B.P7(5,"RTCPeerConnectionStateConnected")
D.exe=new B.P8(0,"RTCSignalingStateStable")
D.exf=new B.P8(1,"RTCSignalingStateHaveLocalOffer")
D.exg=new B.P8(2,"RTCSignalingStateHaveRemoteOffer")
D.exh=new B.P8(3,"RTCSignalingStateHaveLocalPrAnswer")
D.exi=new B.P8(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aQq=new B.P8(5,"RTCSignalingStateClosed")
D.fc_=new A.av(160,48)
D.bdr=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.fdy=new A.a5(16,16,D.bdr,null)
D.fHW=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ff0=new A.b1(D.fHW,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fPy=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ff3=new A.b1(D.fPy,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fYp=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ffa=new A.b1(D.fYp,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fHw=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ffA=new A.b1(D.fHw,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fTG=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aTr=new A.b1(D.fTG,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fV8=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new A.b1(D.fV8,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZS=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgk=new A.b1(D.fZS,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fXP=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fgp=new A.b1(D.fXP,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZ2=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fhb=new A.b1(D.fZ2,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fG6=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fhI=new A.b1(D.fG6,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fRs=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fi2=new A.b1(D.fRs,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fKf=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fiy=new A.b1(D.fKf,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fZY=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fiC=new A.b1(D.fZY,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fGm=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fiI=new A.b1(D.fGm,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fF3=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fiX=new A.b1(D.fF3,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.t,null)
D.fBP=new A.B("NGMY DOC SHARE",null,C.aUQ,null,null,null,null,null,null,null,null,null)
D.fDf=new A.B("Show this to sender",null,C.ix,null,null,null,null,null,null,null,null,null)
D.fEg=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fJ1=new A.B("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fJq=new A.B("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fKp=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fKW=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fNO=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fQB=new A.B("Send to their Doc Share",null,C.nR,null,null,null,null,null,null,null,null,null)
D.fQX=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRg=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fRY=new A.B("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.fSl=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f8,null,null,null,null,null,null,null,null,null)
D.fVE=new A.B("Share files & videos\nwith a scan.",null,C.aUT,null,null,null,null,null,null,null,null,null)
D.fVY=new A.B("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hrG=new B.ZZ(null)
D.acd=new B.acY(0,"docShare")
D.ace=new B.acY(1,"gate")
D.Wn=new B.acY(2,"gateNoIndividual")})();(function staticFields(){$.aP4=null
$.fmD=function(){var x=y.N
return A.U(x,x)}()
$.GU=A.U(y.N,y.D)
$.ah1=A.U(y.N,A.as("lP"))
$.RJ=A.U(y.N,y.D)
$.fnf=A.U(y.N,A.as("acF"))
$.cdo=A.U(y.S,A.as("bxo"))
$.hn1=1
$.ib1=null
$.ib0=null
$.i29=null
$.hbA=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iue","hEO",()=>new B.cr6())
x($,"is8","hfv",()=>C.a.q(A.bz(A.bz(A.bz(A.Ht(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["+maCimBS5akTcG2wnRMj6cX+hjw="]=a.current})($__dart_deferred_initializers__);