((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={cu_:function cu_(){},
i5A(d){var x=null,w=new B.b7h(d,D.eHo,new A.pV(x,x,y.c6),new A.pV(x,x,y.B))
w.bDx(d)
return w},
b7h:function b7h(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctV:function ctV(d){this.a=d},
ctW:function ctW(d){this.a=d},
ctX:function ctX(d){this.a=d},
ctU:function ctU(d){this.a=d},
ctY:function ctY(d){this.a=d},
i5B(d,e){var x=y.N
x=new B.b7i(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDy(d,e)
return x},
b7i:function b7i(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cu0:function cu0(d){this.a=d},
cu1:function cu1(d){this.a=d},
cu2:function cu2(d){this.a=d},
cu3:function cu3(d){this.a=d},
cu4:function cu4(d){this.a=d},
cu5:function cu5(d){this.a=d},
cu6:function cu6(d){this.a=d},
cu7:function cu7(d){this.a=d},
hjE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bb("IndexedDB not available"))
return C.xr.H5(x,"ngmy_doc_share_v1",new B.fBo(),1)},
ich(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.c9(d))
if(y.J.b(d))return new Uint8Array(A.c9(J.ev(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.c9(A.vM(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.c9(d))
if(typeof d=="string")try{x=C.cE.aK(d)
return x}catch(w){return v}return v},
Sx(d,e){return B.irV(d,e)},
irV(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQC
x=7
return A.b(o==null?$.aQC=B.hjE():o,$async$Sx)
case 7:s=g
r=new Uint8Array(A.c9(e))
q=J.mj(s,"blobs","readwrite")
C.iN.mj(J.mi(q,"blobs"),r,d)
x=8
return A.b(J.oC(q),$async$Sx)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$Sx,w)},
Sw(d){return B.irU(d)},
irU(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQC
x=7
return A.b(o==null?$.aQC=B.hjE():o,$async$Sw)
case 7:s=f
r=J.mj(s,"blobs","readonly")
x=8
return A.b(C.iN.xT(J.mi(r,"blobs"),d),$async$Sw)
case 8:q=f
x=9
return A.b(J.oC(r),$async$Sw)
case 9:o=B.ich(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$Sw,w)},
aiF(d){return B.irT(d)},
irT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQC
x=7
return A.b(p==null?$.aQC=B.hjE():p,$async$aiF)
case 7:s=f
r=J.mj(s,"blobs","readwrite")
C.iN.GB(J.mi(r,"blobs"),d)
x=8
return A.b(J.oC(r),$async$aiF)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aiF,w)},
fBo:function fBo(){},
ieN(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsc(w,v))}return u},
hLs(d,e){var x,w={},v=A.aZh("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h0u(w,v,e)
C.xt.zj(v,"change",new B.h0w(w,v,!1))
C.xt.zj(v,"cancel",new B.h0v(w))
$.eX.mK()
v.click()
A.bN(C.amL,new B.h0t(w),y.H)},
h0u:function h0u(d,e,f){this.a=d
this.b=e
this.c=f},
h0w:function h0w(d,e,f){this.a=d
this.b=e
this.c=f},
h0v:function h0v(d){this.a=d},
h0t:function h0t(d){this.a=d},
DX(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DX=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd2()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUZ()?3:4
break
case 3:x=5
return A.b(B.hG2(e,d,s,!0,!1,f,g,h,!1,i),$async$DX)
case 5:x=1
break
case 4:x=6
return A.b(B.S9(d,s,f,g,h,i),$async$DX)
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
return A.b(B.Jx(s,d),$async$DX)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fwI(s,d),$async$DX)
case 14:x=12
return A.b(r.hG2(q,p,o,n,m,l,k,j,a1,i),$async$DX)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cb(A.e9(new B.h0J(s,i,d,f,g,h),!1,null,y.H)),$async$DX)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cb(A.e9(new B.h0K(s,i,d,f,g,h),!1,null,y.H)),$async$DX)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DX,w)},
S9(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S9=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b20(e),$async$S9)
case 3:u=k
x=4
return A.b(B.arr(d,e,!1),$async$S9)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jx(e,d),$async$S9)
case 7:if(k){v=D.aed
x=1
break}x=8
return A.b(B.Wv(e),$async$S9)
case 8:v=t?D.XG:D.aee
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1Z(d,e)){v=D.aed
x=1
break}x=11
return A.b(B.Wv(e),$async$S9)
case 11:v=t?D.XG:D.aee
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hes(d,e)){v=D.aed
x=1
break}x=14
return A.b(B.Wv(e),$async$S9)
case 14:v=D.XG
x=1
break
case 13:v=t?D.XG:D.aee
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
fwI(d,e){var x=0,w=A.j(y.y),v
var $async$fwI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1Z(e,d)){v=!1
x=1
break}x=3
return A.b(B.b20(d),$async$fwI)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwI,w)},
hG2(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cb(A.e9(new B.fE4(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hAL(d,e,f,g,h,i,j){return new B.a_N(e,j,d,g,h,i,f,null)},
fG0(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fG0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fG3(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fG0)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fG0,w)},
fGv(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fGv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
r=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fGx(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fGv)
case 3:q=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
r.V$=u
r.R$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGv,w)},
hjQ(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fTr(d,e){var x=0,w=A.j(y.H),v
var $async$fTr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wv(e),$async$fTr)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e7()
case 1:return A.h(v,w)}})
return A.i($async$fTr,w)},
h0J:function h0J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h0K:function h0K(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adV:function adV(d,e){this.a=d
this.b=e},
fE4:function fE4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_N:function a_N(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBS:function aBS(){this.c=this.a=this.d=null},
deU:function deU(d,e){this.a=d
this.b=e},
deR:function deR(d){this.a=d},
deT:function deT(d){this.a=d},
deS:function deS(d){this.a=d},
deW:function deW(){},
deV:function deV(d){this.a=d},
aeo:function aeo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEw:function aEw(d,e){this.a=d
this.b=e},
aHK:function aHK(d,e,f){this.a=d
this.b=e
this.c=f},
fG3:function fG3(d,e,f){this.a=d
this.b=e
this.c=f},
fG1:function fG1(d){this.a=d},
fG2:function fG2(d,e,f){this.a=d
this.b=e
this.c=f},
fGx:function fGx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fGw:function fGw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfx(d,e,f,g,h){return B.i0o(d,e,f,g,h)},
i0o(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cfx=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ie(r.dP(d,new B.cfy(s,e,h,g,f,q),y.g),y.l),$async$cfx)
case 3:r=p.aT(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfx,w)},
b1W(d,e,f,g,h){return B.i0p(d,e,f,g,h)},
i0p(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1W=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awZ("GET",d)
o=A.haT()
if(o==null)o=new A.MU(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dc(0,C.Ho),$async$b1W)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Da(),$async$b1W)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ct(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$b1W,w)},
b1V(d){return B.i0m(d)},
i0m(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vY(d,null).dc(0,C.oJ),$async$b1V)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aP(0,A.md(A.m9(p.e)).cE(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
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
return A.i($async$b1V,w)},
cfw(d){return B.i0n(d)},
i0n(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cfw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vY(d,null).dc(0,C.qR),$async$cfw)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.md(A.m9(q.e)).cE(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
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
return A.i($async$cfw,w)},
cfy:function cfy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jH:function jH(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jv(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i0u(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.X(t,u))return B.Jv(C.a.aY(t,u.length))}return null},
i0v(d){var x=B.Jv(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i0q(){var x,w=$.oz(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hh(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8t(d){return B.i0r(d)},
i0r(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8t)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
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
return A.i($async$a8t,w)},
a8u(d,e){return B.i0s(d,e)},
i0s(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8u=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hT(d,e,!1,!1,C.cS,null),$async$a8u)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
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
return A.i($async$a8u,w)},
Cs(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cs)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jv(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8v(r),$async$Cs)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cs)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jv(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aF("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cs)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i0q()
x=14
return A.b(B.a8v(m),$async$Cs)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8u("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cs)
case 15:k=f
x=16
return A.b(B.a8u("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cs)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aF("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cs)
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
return A.i($async$Cs,w)},
a8v(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jv(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8v)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8v,w)},
a8w(d,e,f,g){return B.i0w(d,e,f,g)},
i0w(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8w=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jv(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8v(r),$async$a8w)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cC(d,0,new B.cfE())>1048576||g.aS(d,new B.cfF())){v=B.Fy(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8H("myCode",d,a0),$async$a8w)
case 4:u=a3
try{t=C.X.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cu(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fy(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b23(u,g.gJ(d),a0),$async$a8w)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oz().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cfG(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1X(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8w)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8w,w)},
Fy(d,e,f,g,h){return B.i0t(d,e,f,g,h)},
i0t(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fy=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$Fy)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cG(a6)
k=l.cC(a6,0,new B.cfA())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.T(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oz().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cU.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jz(a9,q)
a0=new A.Lo(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fy)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nC(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.ac6(a1.a,a4,"media",a1.d,a2).xQ(m,n,new A.EN(!0,q.c)),$async$Fy)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fy)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTh(r),$async$Fy)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cfB(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1X(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fy)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTh(r),$async$Fy)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fy,w)},
b1X(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8t(t),$async$b1X)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.ba(r,new B.cfz(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8u(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1X,w)},
Ov(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ov=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8t("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ov)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cu(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b1Y(k,a0),$async$Ov)
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
return A.b(B.b22(h),$async$Ov)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WC(g,a0),$async$Ov)
case 10:f=a3
if(f!=null&&J.cK(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.Y(r,new B.cfC(),q),n)
d=A.B(new A.Y(r,new B.cfD(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cU(d,0,A.dy(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a8u("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Ov)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ov,w)},
b1Y(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cu(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aT(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iw2(k,j)
C.d.u(s,i)
x=5
return A.b(B.DV(l,m,"Received via My Code",t,e,i),$async$b1Y)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTh(s),$async$b1Y)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1Y,w)},
cfE:function cfE(){},
cfF:function cfF(){},
cfG:function cfG(){},
cfA:function cfA(){},
cfB:function cfB(){},
cfz:function cfz(){},
cfC:function cfC(){},
cfD:function cfD(){},
h0G(d,e){var x=0,w=A.j(y.H)
var $async$h0G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cb(A.e9(new B.h0H(e),!1,null,y.H)),$async$h0G)
case 2:return A.h(null,w)}})
return A.i($async$h0G,w)},
bHv(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bHv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cu(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cb(A.e9(new B.h0I(g,e,f),!1,null,y.y)),$async$bHv)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHv,w)},
h0H:function h0H(d){this.a=d},
h0I:function h0I(d,e,f){this.a=d
this.b=e
this.c=f},
Ws:function Ws(d,e){this.c=d
this.a=e},
aFT:function aFT(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e0N:function e0N(d,e){this.a=d
this.b=e},
Ww:function Ww(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFW:function aFW(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e1W:function e1W(d){this.a=d},
e1X:function e1X(d){this.a=d},
e1Y:function e1Y(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d){this.a=d},
e2_:function e2_(d){this.a=d},
e20:function e20(d,e){this.a=d
this.b=e},
e21:function e21(d,e){this.a=d
this.b=e},
e22:function e22(d,e){this.a=d
this.b=e},
e23:function e23(d){this.a=d},
e26:function e26(){},
e24:function e24(d){this.a=d},
e25:function e25(d,e){this.a=d
this.b=e},
bmj:function bmj(){},
Wt:function Wt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFU:function aFU(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e0O:function e0O(d){this.a=d},
e0P:function e0P(d){this.a=d},
het(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i0y(d){var x=d.l3
if(x>=0)return x
return 4.99},
i0x(d){var x=d.lM,w=y.N
w=x.jp(x,new B.cfI(),w,w)
return w},
hvJ(d){var x=d.kH,w=y.N
w=x.jp(x,new B.cfJ(),w,w)
return w},
b20(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b20=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b20)
case 7:s=f
r=A.v(p)
r=A.aW(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b20,w)},
a8y(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8y)
case 4:x=3
return A.b(g.aF("String","ngmy_doc_share_path_"+u,e),$async$a8y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8y,w)},
Wv(d){var x=0,w=A.j(y.H),v,u
var $async$Wv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wv)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wv,w)},
hes(d,e){var x,w,v
if(B.i0y(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i0x(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.cc(new A.V(Date.now(),0,!1))},
b1Z(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hvJ(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.cc(new A.V(Date.now(),0,!1))},
hvK(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hvJ(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.cc(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bQ(A.du(f,0,0,0,0,0).a).aa().ag())
d.kH=w},
ars(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ars=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$ars)
case 7:s=f
r=A.v(p)
r=A.eq(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ars,w)},
art(d){var x=0,w=A.j(y.H),v,u,t
var $async$art=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ars(d),$async$art)
case 3:u=f
x=5
return A.b(A.az(),$async$art)
case 5:x=4
return A.b(f.aF("Int","ngmy_doc_share_usage_"+t,u+1),$async$art)
case 4:case 1:return A.h(v,w)}})
return A.i($async$art,w)},
arr(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.het(d)
if(u<=0){v=!1
x=1
break}if(B.hes(d,e)){v=!1
x=1
break}x=3
return A.b(B.ars(e),$async$arr)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arr,w)},
b2_(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jx(e,d),$async$b2_)
case 3:if(g){v=-1
x=1
break}u=B.het(d)
if(u<=0){v=-1
x=1
break}if(B.hes(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ars(e),$async$b2_)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2_,w)},
cfL(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jx(e,d),$async$cfL)
case 3:if(h){v=!1
x=1
break}v=B.arr(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfL,w)},
cfK(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cfK=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd2()
x=3
return A.b(B.cfL(d,u,i.gUZ()),$async$cfK)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfK,w)},
a8x(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8x=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd2()
if(i.gUZ()){v=!0
x=1
break}if(B.b1Z(d,u)){v=!0
x=1
break}x=5
return A.b(A.lC(u,C.UW),$async$a8x)
case 5:x=k?3:4
break
case 3:B.hvK(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8x)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.li(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.UW,"Doc Share for Organizations"),$async$a8x)
case 7:if(!k){v=!1
x=1
break}B.hvK(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8x)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8x,w)},
cfI:function cfI(){},
cfJ:function cfJ(){},
h1G(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h1G=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h1G)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fsY.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hV([r],e.c))
s.toString
$.fsY.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1G,w)},
iye(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fsY.bq($.fsY,new B.h1I(d))},
h1I:function h1I(d){this.a=d},
fuC(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fuC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hV([d],f))
s.toString
u=A.n3(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jx,null,y.H),$async$fuC)
case 3:C.BP.ft(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuC,w)},
ahA(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.ftE.n(0,d,new B.adC(A.bs(e,!0,v)))
x=3
return A.b(A.az(),$async$ahA)
case 3:x=2
return A.b(h.aF("String",d+"_manifest",C.X.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahA)
case 2:return A.h(null,w)}})
return A.i($async$ahA,w)},
ahu(d){return B.igH(d)},
igH(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.ftE.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ahu)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cu(s)){v=null
x=1
break}o=J.ba(s,new B.fyo(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adC(r)
$.ftE.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahu,w)},
S_(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$S_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.c9(e))
$.Hi.n(0,d,u)
x=3
return A.b(B.Sx(d,u),$async$S_)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S_,w)},
aQX(d){return B.igF(d)},
igF(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hi.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sw(d),$async$aQX)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.Hi.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQX)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cE.aK(r)
x=!J.cu(q)?9:10
break
case 9:B.S_(d,q)
x=11
return A.b(J.fO(s,d),$async$aQX)
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
return A.i($async$aQX,w)},
icJ(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.c9(J.ev(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.c9(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.c9(A.vM(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.c9(d)),y.K)
return A.f3(null,y.K)},
a3k(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.c8(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fEg(r,t),!1,s)
A.fC(r,"error",new B.fEh(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.OK,new B.fEi())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3k,w)},
aRh(d,e,f){return B.ij3(d,e,f)},
ij3(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRh=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.T(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a3k(i),$async$aRh)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sx(o,p),$async$aRh)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahA(k,j,s),$async$aRh)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.am.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRh,w)},
aRg(d,e,f){return B.ij2(d,e,f)},
ij2(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRg=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRh(d,e,f),$async$aRg)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3k(f),$async$aRg)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hi.n(0,s,r)
$.Si.n(0,s,r)
x=11
return A.b(B.S_(s,r),$async$aRg)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aRg,w)},
Ct(d,e,f,g,h,i){return B.i0H(d,e,f,g,h,i)},
i0H(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ct=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cU.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jH(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b26(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.S_(s,d),$async$Ct)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Ct)
case 10:r=a2
x=11
return A.b(r.aF("String",s,C.cM.gco().aK(d)),$async$Ct)
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
return A.b(B.Bm(e),$async$Ct)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hs(e,j),$async$Ct)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ct,w)},
Wx(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wx=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bm(d),$async$Wx)
case 3:t=a1
s=e.length,r=J.cG(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cU.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hvM(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jH(m,n,k,l,j,"From folder",null,B.b26(),null)
$.ahZ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3k(o),$async$Wx)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.Hi.n(0,h,g)
$.Si.n(0,h,g)
B.S_(h,g)
x=9
break
case 10:x=11
return A.b(B.aRg(d,m,o),$async$Wx)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hs(d,t),$async$Wx)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wx,w)},
hex(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hex=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hvM(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jy(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ct(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hex,w)},
Jy(d,e,f,g,h,i){return B.i0G(d,e,f,g,h,i)},
i0G(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jy=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cU.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lo(A.dy(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jy)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cu(m)){x=6
break}J.h2(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.c9(J.T6(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kQ(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.Sx(k,l),$async$Jy)
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
return A.b(j.a1(0),$async$Jy)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.Sx(k,new Uint8Array(A.c9(n))),$async$Jy)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahA(r,q,g),$async$Jy)
case 16:f=new B.jH(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b26(),null)
x=17
return A.b(B.Bm(d),$async$Jy)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hs(d,e),$async$Jy)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jy,w)},
Wz(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wz=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahZ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3k(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahu(s),$async$Wz)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sw(u[o]),$async$Wz)
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
v=A.vM(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Si.h(0,s)
if(i==null)i=$.Hi.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rZ(d,e),$async$Wz)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.Si.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vM(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wz,w)},
hvM(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rZ(d,e){return B.i0I(d,e)},
i0I(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rZ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Si.h(0,f)
if(e==null)e=$.Hi.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahZ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3k(s),$async$rZ)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.Hi.n(0,f,r)
$.Si.n(0,f,r)
B.S_(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahu(f),$async$rZ)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adx(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sw(g[l]),$async$rZ)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a83()
if(!C.aI.gau(r)){$.Hi.n(0,f,r)
$.Si.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQX(f),$async$rZ)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.Si.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wz(a0,a1,0,g),$async$rZ)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.c9(i))
$.Hi.n(0,f,h)
$.Si.n(0,f,h)
B.S_(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rZ,w)},
i0L(d){var x,w,v=$.ahZ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i0M(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hV([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i0J(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arz(d,e,f,g,h){return B.i0K(d,e,f,g,h)},
i0K(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arz=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahZ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3k(s),$async$arz)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rZ(g,e),$async$arz)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f0().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iF(d).xQ(h,r,new A.EN(!0,e.c)),$async$arz)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
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
return A.i($async$arz,w)},
hvO(d,e,f,g,h){var x,w,v,u,t=$.hvN
$.hvN=t+1
x=Date.now()
w=""+1000*x+"_"+C.cU.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfW.n(0,t,new B.bzg(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adx(u)))
return t},
hey(d){var x=0,w=A.j(y.H)
var $async$hey=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hey,w)},
Jz(d,e){var $async$Jz=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahZ.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.T(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qD(B.Wz(d,e,p,o<q?o:q),$async$Jz,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qD(A.GQ(n),$async$Jz,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qD(B.ahu("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jz,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qD(B.Sw(h[l]),$async$Jz,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qD(A.GQ(k),$async$Jz,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qD(B.rZ(d,e),$async$Jz,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qD(A.GQ(A.vM(j,p,o<i?o:i)),$async$Jz,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qD(null,0,w)
case 2:return A.qD(t.at(-1),1,w)}})
var x=0,w=A.hEO($async$Jz,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hGO(w)},
b28(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b28=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfW.h(0,d)
if(t==null||J.cu(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6l(),$async$b28)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b28,w)},
Wy(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfW.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6l(),$async$Wy)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahA(r.c,u,r.z),$async$Wy)
case 4:t=new B.jH(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b26(),null)
u=r.a
x=5
return A.b(B.Bm(u),$async$Wy)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hs(u,s),$async$Wy)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wy,w)},
a8E(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfW.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiF(u[s]),$async$a8E)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8E,w)},
cfY(d,e,f){var x=0,w=A.j(y.H)
var $async$cfY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEj(d,e,f),$async$cfY)
case 2:return A.h(null,w)}})
return A.i($async$cfY,w)},
cfZ(d,e,f){var x=0,w=A.j(y.H)
var $async$cfZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEk(d,e,f),$async$cfZ)
case 2:return A.h(null,w)}})
return A.i($async$cfZ,w)},
Fz(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bm(d),$async$Fz)
case 2:p=g
J.n1(p,new B.cfX(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hi.W(0,v)
$.ahZ.W(0,e)
x=3
return A.b(B.ahu(v),$async$Fz)
case 3:u=g
$.ftE.W(0,v)
x=4
return A.b(A.az(),$async$Fz)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fz)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fz)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiF(s[q]),$async$Fz)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiF(v),$async$Fz)
case 13:x=14
return A.b(B.Hs(d,p),$async$Fz)
case 14:return A.h(null,w)}})
return A.i($async$Fz,w)},
b27(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b27=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rZ(d,e),$async$b27)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fuC(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b27,w)},
Bm(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bm)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.ba(u,new B.fEj(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bm,w)},
Hs(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hs)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.ba(e,new B.fIy(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aF("String","ngmy_doc_share_index_v1_"+u,C.X.av(t,null)),$async$Hs)
case 3:return A.h(null,w)}})
return A.i($async$Hs,w)},
bEj(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bm(d),$async$bEj)
case 3:u=h
t=J.cG(u)
s=t.bk(u,new B.fCs(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGW(f))
x=4
return A.b(B.Hs(d,u),$async$bEj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEj,w)},
bEk(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bm(d),$async$bEk)
case 3:u=h
t=J.cG(u)
s=t.bk(u,new B.fCt(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cQW(f))
x=4
return A.b(B.Hs(d,u),$async$bEk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEk,w)},
adC:function adC(d){this.a=d},
fyo:function fyo(){},
fEg:function fEg(d,e){this.a=d
this.b=e},
fEh:function fEh(d){this.a=d},
fEi:function fEi(){},
cfX:function cfX(d){this.a=d},
bzg:function bzg(d,e,f,g,h,i,j,k,l){var _=this
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
fEj:function fEj(){},
fIy:function fIy(){},
fCs:function fCs(d){this.a=d},
fCt:function fCt(d){this.a=d},
a8F(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aS(d,new B.cg1())?3:4
break
case 3:x=5
return A.b(B.b29(d,e),$async$a8F)
case 5:u=g
if(u!=null){t=u.c
B.Ox(d,u.b,e,t)}v=u
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
return A.b(B.b24(s),$async$a8F)
case 10:case 9:if(g){v=new A.Rl(1,D.Uz,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WA(d,e),$async$a8F)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WF(!0,!0,d,e),$async$a8F)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ox(d,D.AR,e,t)
v=new A.Rl(p,D.AR,t)
x=1
break}v=B.cg0(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
WA(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8H(null,d,e),$async$WA)
case 3:p=g
try{u=C.X.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cu(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b23(p,d.length,e),$async$WA)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfZ(e,C.d.gH(d).a,r.b),$async$WA)
case 7:case 6:q=r.a
x=8
return A.b(B.Ox(d,D.Uz,e,q),$async$WA)
case 8:v=new A.Rl(d.length,D.Uz,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WA,w)},
WB(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.X(d.c,"video/")||d.mR(D.nh)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8G(d,e),$async$WB)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfU(s,d,e,t),$async$WB)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b24(t),$async$WB)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rZ(e,d),$async$WB)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WA(A.a([d],y.r),e),$async$WB)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WB,w)},
WD(){var x=0,w=A.j(y.H)
var $async$WD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.her(),$async$WD)
case 2:x=3
return A.b(B.aTD(),$async$WD)
case 3:return A.h(null,w)}})
return A.i($async$WD,w)},
a8G(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b26()
x=3
return A.b(B.cfY(e,d.a,u),$async$a8G)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8G,w)},
Ox(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ox=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Uz&&C.a.X(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8G(p,f),$async$Ox)
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
return A.b(B.cfT(o,p,u,f),$async$Ox)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfU(o,p,f,t),$async$Ox)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfS(o,u,p,f),$async$Ox)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ox,w)},
b29(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b29=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cg_(e,d),$async$b29)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WF(!1,!0,d,e),$async$b29)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rl(u.a,D.AR,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b29,w)},
cg_(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cg_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wz(d,s,0,1),$async$cg_)
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
return A.i($async$cg_,w)},
cg0(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cg0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8H(null,d,e),$async$cg0)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hvL(u)
if(t.length>800){v=null
x=1
break}v=new A.Rl(d.length,D.dXp,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg0,w)},
arA(d,e,f){return B.i0P(d,e,f)},
i0P(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arA=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.n2(g,1)
x=B.hew(g)?3:4
break
case 3:x=5
return A.b(B.cfV(g),$async$arA)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.n2(g,13))
try{k=B.FA(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.n2(g,13))
u=9
x=12
return A.b(B.b22(q),$async$arA)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WC(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.am.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.hev(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WC(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.JA(C.a.i(J.n2(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.JA(C.a.i(J.n2(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.az(k,0,k.length-1)
else h=k
v=B.JA(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WC(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arA,w)},
JA(d,e,f){return B.i0N(d,e,f)},
i0N(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JA=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.X(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.X(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.X(e,"http://")&&!C.a.X(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.az(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cE(A.v(s)+"/manifest.json",0,null)
q=A.cE(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1V(r),$async$JA)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1V(A.cE(s,0,null)),$async$JA)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cu(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cfx(o,r,a1,n,a2),$async$JA)
case 11:m=a4
x=J.cu(m)?12:13
break
case 12:x=14
return A.b(B.cfw(q),$async$JA)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WC(l,a2),$async$JA)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cu(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ac(d)
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
return A.i($async$JA,w)},
a8H(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rZ(f,r),$async$a8H)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gco().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8H,w)},
WC(d,e){return B.i0O(d,e)},
i0O(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WC=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aP(0,a2,null)
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
e=J.aT(r)
case 7:if(!e.C()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cE.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Ct(i,a3,d,k,l,o),$async$WC)
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
g=A.ac(a1)
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
return A.i($async$WC,w)},
Ow:function Ow(d,e){this.a=d
this.b=e},
cg1:function cg1(){},
a2U(d){var x=A.O(d).ax.a===C.I,w=x?D.ajX:D.ahq,v=x?D.alK:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aiV:C.bn
return new A.aJ1([w,s,v,u,t,x?C.fx:C.bQ])},
hMt(d,e){var x=e?C.v.j(0.72):C.b6
return A.cg(null,x,!0,null,new B.h5Y(e),d,null,!0,!0,y.N)},
cfH(d,e,f,g,h,i,j,k,l){return new B.Wu(e,l,d,f,k,j,g,h,i,null)},
a_P(d,e,f,g,h,i,j){return new B.bgP(g,h,j,e,i,d,f,null)},
h5Y:function h5Y(d){this.a=d},
a_M:function a_M(d,e){this.c=d
this.a=e},
aBR:function aBR(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
deQ:function deQ(d){this.a=d},
deO:function deO(d){this.a=d},
deP:function deP(d){this.a=d},
byT:function byT(){},
Wu:function Wu(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFV:function aFV(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e1U:function e1U(d){this.a=d},
e1h:function e1h(d,e){this.a=d
this.b=e},
e1i:function e1i(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e,f){this.a=d
this.b=e
this.c=f},
e0Q:function e0Q(d){this.a=d},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e,f){this.a=d
this.b=e
this.c=f},
e0W:function e0W(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1J:function e1J(d){this.a=d},
e1e:function e1e(d,e,f){this.a=d
this.b=e
this.c=f},
e1b:function e1b(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e0V:function e0V(d){this.a=d},
e1m:function e1m(d){this.a=d},
e1l:function e1l(){},
e10:function e10(d){this.a=d},
e1F:function e1F(d,e){this.a=d
this.b=e},
e1G:function e1G(d,e){this.a=d
this.b=e},
e1H:function e1H(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e){this.a=d
this.b=e},
e1y:function e1y(d,e){this.a=d
this.b=e},
e1u:function e1u(d){this.a=d},
e1t:function e1t(d){this.a=d},
e1v:function e1v(){},
e1w:function e1w(){},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1z:function e1z(){},
e1A:function e1A(d){this.a=d},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1n:function e1n(d){this.a=d},
e1o:function e1o(d){this.a=d},
e1p:function e1p(d){this.a=d},
e1q:function e1q(d){this.a=d},
e1r:function e1r(d){this.a=d},
e0Y:function e0Y(){},
e0Z:function e0Z(d){this.a=d},
e1_:function e1_(d,e){this.a=d
this.b=e},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0T:function e0T(d,e,f){this.a=d
this.b=e
this.c=f},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d,e,f){this.a=d
this.b=e
this.c=f},
e19:function e19(d,e){this.a=d
this.b=e},
e15:function e15(d){this.a=d},
e12:function e12(d,e,f){this.a=d
this.b=e
this.c=f},
e16:function e16(d){this.a=d},
e17:function e17(d){this.a=d},
e18:function e18(){},
e1a:function e1a(d,e){this.a=d
this.b=e},
e13:function e13(d){this.a=d},
e11:function e11(d,e,f){this.a=d
this.b=e
this.c=f},
e14:function e14(){},
e1k:function e1k(d){this.a=d},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1E:function e1E(d,e){this.a=d
this.b=e},
e1B:function e1B(d){this.a=d},
e1C:function e1C(d,e){this.a=d
this.b=e},
e1D:function e1D(d){this.a=d},
e1R:function e1R(d){this.a=d},
e1P:function e1P(d){this.a=d},
e1Q:function e1Q(d){this.a=d},
e1S:function e1S(){},
e1T:function e1T(d,e){this.a=d
this.b=e},
e1L:function e1L(d,e){this.a=d
this.b=e},
e1M:function e1M(d,e,f){this.a=d
this.b=e
this.c=f},
e1K:function e1K(d,e,f){this.a=d
this.b=e
this.c=f},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1O:function e1O(d,e){this.a=d
this.b=e},
aBO:function aBO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgO:function bgO(d,e,f){this.c=d
this.d=e
this.a=f},
deM:function deM(){},
deN:function deN(){},
adW:function adW(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
df9:function df9(){},
df8:function df8(d){this.a=d},
a_O:function a_O(d,e,f){this.c=d
this.d=e
this.a=f},
aBT:function aBT(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
df5:function df5(d){this.a=d},
df6:function df6(d,e,f){this.a=d
this.b=e
this.c=f},
df7:function df7(d,e){this.a=d
this.b=e},
df3:function df3(d,e){this.a=d
this.b=e},
df1:function df1(d){this.a=d},
df_:function df_(d){this.a=d},
deX:function deX(d){this.a=d},
df2:function df2(d){this.a=d},
deZ:function deZ(d){this.a=d},
df4:function df4(d){this.a=d},
df0:function df0(d){this.a=d},
deY:function deY(d){this.a=d},
a_L:function a_L(d,e,f){this.c=d
this.d=e
this.a=f},
aBQ:function aBQ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
deJ:function deJ(d){this.a=d},
deI:function deI(d,e){this.a=d
this.b=e},
deK:function deK(d){this.a=d},
deH:function deH(d,e){this.a=d
this.b=e},
deL:function deL(d){this.a=d},
deG:function deG(d,e){this.a=d
this.b=e},
deC:function deC(d){this.a=d},
deD:function deD(d){this.a=d},
deE:function deE(d,e){this.a=d
this.b=e},
deF:function deF(d){this.a=d},
QV:function QV(d,e,f){this.c=d
this.d=e
this.a=f},
aBW:function aBW(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dfm:function dfm(d){this.a=d},
dfn:function dfn(d){this.a=d},
dfo:function dfo(d){this.a=d},
dfp:function dfp(d){this.a=d},
dfq:function dfq(d,e){this.a=d
this.b=e},
dfr:function dfr(d){this.a=d},
dft:function dft(d){this.a=d},
dfs:function dfs(d){this.a=d},
a_Q:function a_Q(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBU:function aBU(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dfi:function dfi(d,e){this.a=d
this.b=e},
dfj:function dfj(d,e){this.a=d
this.b=e},
dfa:function dfa(d,e,f){this.a=d
this.b=e
this.c=f},
dfb:function dfb(d){this.a=d},
dfc:function dfc(){},
dfh:function dfh(){},
dfd:function dfd(d,e){this.a=d
this.b=e},
dfe:function dfe(d,e){this.a=d
this.b=e},
dff:function dff(d,e){this.a=d
this.b=e},
dfg:function dfg(d,e){this.a=d
this.b=e},
adU:function adU(d,e){this.c=d
this.a=e},
deB:function deB(d){this.a=d},
a_K:function a_K(d){this.a=d},
aBP:function aBP(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_R:function a_R(d,e){this.c=d
this.a=e},
aBV:function aBV(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dfl:function dfl(d){this.a=d},
dfk:function dfk(d){this.a=d},
bgP:function bgP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i0Q(){var x,w=$.oz(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hh(v)},
Oy(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$Oy)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Oy)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Oy,w)},
a8I(d){return B.i0R(d)},
i0R(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8I)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hT("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cS,null),$async$a8I)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8I,w)},
WE(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oy(),$async$WE)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dH(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8I(s),$async$WE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WE,w)},
WF(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WF=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ca(),$async$WF)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bs(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.B(new A.Y(f,new B.cg3(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i0Q()
t=A.T(u).k("N<1,aa<q,aK>>")
r=A.B(new A.N(u,new B.cg4(s),t),t.k("ak.E"))
x=6
return A.b(B.Oy(),$async$WF)
case 6:q=i
J.aJ(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8I(q),$async$WF)
case 7:x=8
return A.b(B.a8J(r,u,g,s),$async$WF)
case 8:v=new A.bsI(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WF,w)},
arB(d){var x=0,w=A.j(y.y),v,u,t
var $async$arB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Oy(),$async$arB)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arB,w)},
cg5(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cg5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oy(),$async$cg5)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg5,w)},
a8J(d,e,f,g){return B.i0S(d,e,f,g)},
i0S(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8J=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arz("media",r,new B.cg2(s,e,g),f,q),$async$a8J)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WE(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8J)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WE(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8J)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WE(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8J)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8J,w)},
FA(d,e,f){return B.i0T(d,e,f)},
i0T(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FA=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.X(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ca(),$async$FA)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arB(b3),$async$FA)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.iY,null,g),$async$FA)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arB(b3),$async$FA)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oy(),$async$FA)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cu(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f0().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nC(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.ac6(a8.a,b0,"media",a8.d,a9).Dv(m)
k=A.cE(l,0,null)
x=17
return A.b(B.b1W(k,n,o,s,b7),$async$FA)
case 17:j=c0
if(j!=null){J.c6(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
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
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f0().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nC(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.ac6(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$FA)
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
a0=A.dH(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8I(e),$async$FA)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FA,w)},
cg3:function cg3(){},
cg4:function cg4(d){this.a=d},
cg2:function cg2(d,e,f){this.a=d
this.b=e
this.c=f},
aTD(){var x=0,w=A.j(y.H),v,u
var $async$aTD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ic1=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTD)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTD)
case 3:u=$.hk1
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTD)
case 4:$.hk1=$.ikR=$.ikS=null
return A.h(null,w)}})
return A.i($async$aTD,w)},
fI9(d){var x=0,w=A.j(y.H),v,u
var $async$fI9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaP){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fIa(new A.c8(u,y.aY))
x=3
return A.b(u.ix(0,C.i_,new B.fIb()),$async$fI9)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fI9,w)},
ikP(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i0A(x):x},
hk5(d){var x=0,w=A.j(y.T),v,u,t
var $async$hk5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.X(u,"WR")){v=B.arD(u)
x=1
break}v=B.hev(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hk5,w)},
hk4(d){var x=0,w=A.j(y.T),v,u,t
var $async$hk4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.X(u,"WR")){v=B.arE(u)
x=1
break}v=B.hev(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hk4,w)},
h1p(d){var x=0,w=A.j(y.T),v
var $async$h1p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arE(d),$async$h1p)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h1p,w)},
bFh(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hk4(d),$async$bFh)
case 3:q=f
if(q==null){x=1
break}t=C.X.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFh,w)},
fvp(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fvp=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wy(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Ct(d.a83(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fvp,w)},
Hu(d,e,f){return B.in9(d,e,f)},
in9(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hu=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hk5(a1),$async$Hu)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a6(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.X(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.X(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hOt().aHc(D.dJx,null),$async$Hu)
case 4:l=d.hk1=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adx(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fIL(f,k,new B.fIM(f,a2,k,j,a0,p),a2,j,a0,p,new A.c8(t,y.ch))
x=5
return A.b(l.a9p(0,new B.YR(r,"offer")),$async$Hu)
case 5:d=l
x=7
return A.b(l.an7(0),$async$Hu)
case 7:x=6
return A.b(d.a9h(0,a4),$async$Hu)
case 6:x=8
return A.b(B.fI9(l),$async$Hu)
case 8:x=9
return A.b(l.arv(),$async$Hu)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ikP(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arF(m,h),$async$Hu)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hvL(h)
case 11:v=new A.brX(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hu,w)},
fIa:function fIa(d){this.a=d},
fIb:function fIb(){},
fIM:function fIM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fIL:function fIL(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fIK:function fIK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ipe(d){switch(d){case"new":return D.eHp
case"checking":return D.eHq
case"connected":return D.eHs
case"completed":return D.eHr
case"failed":return D.eHu
case"disconnected":return D.eHv
case"closed":return D.aT_
case"count":return D.eHt}return D.aT_},
ipf(d){switch(d){case"new":return D.aT0
case"gathering":return D.eHw
case"complete":return D.aaP}return D.aT0},
izN(d){switch(d){case"stable":return D.eHx
case"have-local-offer":return D.eHy
case"have-local-pranswer":return D.eHA
case"have-remote-offer":return D.eHz
case"have-remote-pranswer":return D.eHB
case"closed":return D.aT6}return D.aT6},
ixW(d){switch(d){case"new":return D.aT3
case"connecting":return D.aT4
case"connected":return D.aT5
case"closed":return D.aaQ
case"disconnected":return D.aT2
case"failed":return D.aT1}return D.aaQ},
ab3:function ab3(d,e){this.a=d
this.b=e},
PD:function PD(d,e){this.a=d
this.b=e},
YQ:function YQ(d,e){this.a=d
this.b=e},
PC:function PC(d,e){this.a=d
this.b=e},
G4:function G4(d,e){this.a=d
this.b=e},
ctZ:function ctZ(){},
hgh(d){var x=new B.G3()
x.a=d
x.b=!0
return x},
G3:function G3(){this.b=this.a=$},
ab2:function ab2(){},
awb:function awb(){},
YR:function YR(d,e){this.a=d
this.b=e},
her(){var x=0,w=A.j(y.H)
var $async$her=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$her,w)},
heu(d,e,f){var x=0,w=A.j(y.T),v
var $async$heu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.X(e.c,"video/")||e.mR(D.nh))){v=null
x=1
break}v=B.h1G(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$heu,w)},
hvL(d){var x,w=C.agR.a64(C.dX.aK(d),null)
if(w.length===0){x=C.dX.aK(d)
return C.cM.gco().aK(x)}return C.cM.gco().aK(w)},
i0z(d){var x,w,v=C.cE.aK(d)
try{x=C.cc.cE(0,C.agQ.bhe(v,!1))
return x}catch(w){x=C.cc.cE(0,v)
return x}},
hev(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.X(t,s))return B.i0z(C.a.aY(t,s.length))
w=e+"|"
if(C.a.X(t,w)){x=C.a.aY(t,w.length)
try{v=C.cc.cE(0,C.cE.aK(x))
return v}catch(u){return x}}return null},
i0A(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.X(t,"a=extmap"))continue
if(C.a.X(t,"a=ssrc"))continue
if(C.a.X(t,"a=msid"))continue
if(C.a.X(t,"a=rtcp"))continue
if(C.a.X(t,"a=rtpmap"))continue
if(C.a.X(t,"a=fmtp"))continue
if(C.a.X(t,"a=rtcp-fb"))continue
if(C.a.X(t,"a=mid:"))continue
if(C.a.X(t,"a=group:"))continue
if(C.a.X(t,"a=setup:"))continue
if(C.a.X(t,"a=ice-options:"))continue
if(C.a.X(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aM(s,"\n")},
i0B(){var x,w=$.oz(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hh(v)},
b21(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b21=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b21)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$b21,w)},
cfM(d,e){return B.i0C(d,e)},
i0C(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hT("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cS,null),$async$cfM)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$cfM,w)},
b24(d){var x=0,w=A.j(y.y),v,u,t
var $async$b24=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b21(d),$async$b24)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b24,w)},
b23(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b23=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i0B()
r=C.a.i(f)
t=C.dX.aK(s)
x=3
return A.b(B.cfM(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b23)
case 3:if(!h){v=null
x=1
break}v=new A.a1T("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b23,w)},
b22(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b22=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b21(o),$async$b22)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cc.cE(0,C.cE.aK(u))
if(J.j2(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b22,w)},
cfN(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cfN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bGg("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cS),$async$cfN)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cfN,w)},
b25(d){var x=0,w=A.j(y.h),v,u,t
var $async$b25=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jw(),$async$b25)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b25,w)},
arw(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arw)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b25(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arw,w)},
aru(d,e){var x=0,w=A.j(y.H)
var $async$aru=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$aru)
case 3:x=2
return A.b(g.aF("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aru)
case 2:return A.h(null,w)}})
return A.i($async$aru,w)},
a8A(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8A)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jw(),$async$a8A)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.ds(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8z(s),$async$a8A)
case 5:x=6
return A.b(B.aru(f,u),$async$a8A)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8A,w)},
a8B(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8B=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8B)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jw(),$async$a8B)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a1(r,y.N,y.z)
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
return A.b(B.aru(g,q),$async$a8B)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8z(u),$async$a8B)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8B,w)},
a8C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8C)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jw(),$async$a8C)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1Z(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8C)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aF("String","ngmy_doc_share_school_session_"+s,C.X.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8C,w)},
cfO(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfO)
case 7:s=f
p=A.v(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aP(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a1(q,y.N,y.z)
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
return A.i($async$cfO,w)},
Jx(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfO(d),$async$Jx)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b25(t),$async$Jx)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arv(d),$async$Jx)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1Z(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arv(d),$async$Jx)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jx,w)},
arv(d){var x=0,w=A.j(y.H)
var $async$arv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arv)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arv)
case 2:return A.h(null,w)}})
return A.i($async$arv,w)},
b26(){var x,w=$.oz(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hh(v)},
a8D(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hew(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfR(d){return B.i0E(d)},
i0E(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8D(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfR)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$cfR,w)},
ary(d,e){return B.i0F(d,e)},
i0F(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ary=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8D(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hT("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cS,null),$async$ary)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$ary,w)},
cfT(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8D(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ary(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfT,w)},
cfS(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8D(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ary(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfS,w)},
cfU(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfU=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8D(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ary(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfU,w)},
cfV(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hew(d)){v=null
x=1
break}x=3
return A.b(B.cfR(d),$async$cfV)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a6(u)
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
return A.i($async$cfV,w)},
a8K(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$a8K)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8K)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8K,w)},
arC(d){return B.i0U(d)},
i0U(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ca(),$async$arC)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hT("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cS,null),$async$arC)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arC,w)},
arD(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ca(),$async$arD)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8K(),$async$arD)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cc.cE(0,C.cE.aK(q))
if(J.j2(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dH(A.a1(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aJ(s,j,o)
x=9
return A.b(B.arC(s),$async$arD)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ac(i)
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
return A.i($async$arD,w)},
arF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ca(),$async$arF)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8K(),$async$arF)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dH(A.a1(s,r,q),r,q)
r=C.dX.aK(C.a.i(e))
q.n(0,"answer",C.cM.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arC(u),$async$arF)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arF,w)},
arE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ca(),$async$arE)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8K(),$async$arE)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cc.cE(0,C.cE.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arE,w)},
aqu(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qr)){v=null
x=1
break}x=3
return A.b(p.lx(e),$async$aqu)
case 3:r=g
u=4
x=7
return A.b(r.hk(C.hm),$async$aqu)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.uO(o))
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
return A.i($async$aqu,w)},
iw2(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
h_z(d){return B.iw4(d)},
iw4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h_z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iF("media").LO(d,3600),$async$h_z)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
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
return A.i($async$h_z,w)},
DV(d,e,f,g,h,i){var x=null
return B.iw1(d,e,f,g,h,i)},
iw1(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DV=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hvO(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hey(r),$async$DV)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h_z(o),$async$DV)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8E(r),$async$DV)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWI)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MU(A.a([],g))
x=15
return A.b(d.f9(0,A.awZ("GET",A.cE(n,0,null))).dc(0,C.Ho),$async$DV)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8E(r),$async$DV)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lo(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DV)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b28(r,k),$async$DV)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DV)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wy(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a8E(r),$async$DV)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DV,w)},
aTh(d){return B.iw3(d)},
iw3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iF("media").W(0,d),$async$aTh)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTh,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[96]
F=c[118]
B=a.updateHolder(c[17],B)
D=c[117]
H=c[82]
G=c[92]
I=c[38]
K=c[111]
L=c[40]
B.cu_.prototype={
aHc(d,e){return this.cSq(d,e)},
cSq(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dH(r,s,t)
t.u(0,d)
u=new q(A.ko(A.cv(t)))
t=J.k(u)
v=B.i5B(C.cM.gco().aK(new A.dc(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHc,w)}}
B.b7h.prototype={
bDx(d){var x=this,w=x.w
w.onclose=A.hx(new B.ctV(x))
w.onopen=A.hx(new B.ctW(x))
w.onmessage=A.hx(new B.ctX(x))
w.onbufferedamountlow=A.hx(new B.ctY(x))},
gd4(d){return this.x},
ajl(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G3()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hgh(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$ajl)
case 8:v=t.hgh(s.apD(f,0,null))
x=1
break
case 7:case 4:v=B.hgh(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajl,w)}}
B.b7i.prototype={
bDy(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hx(new B.cu0(x)))
w.addEventListener("icecandidate",A.hx(new B.cu1(x)))
w.addEventListener("iceconnectionstatechange",A.hx(new B.cu2(x)))
w.onicegatheringstatechange=A.hx(new B.cu3(x))
w.addEventListener("signalingstatechange",A.hx(new B.cu4(x)))
if(!$.hoc())w.addEventListener("connectionstatechange",A.hx(new B.cu5(x)))
w.addEventListener("negotiationneeded",A.hx(new B.cu6(x)))
w.addEventListener("track",A.hx(new B.cu7(x)))},
an7(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$an7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ei(s.createAnswer(A.ko(A.cv(A.S(y.N,y.z)))),y.aQ),$async$an7)
case 3:t=f
v=new B.YR(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$an7,w)},
a9h(d,e){return this.bss(0,e)},
bss(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9h)
case 2:return A.h(null,w)}})
return A.i($async$a9h,w)},
a9p(d,e){return this.bsN(0,e)},
bsN(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9p)
case 2:return A.h(null,w)}})
return A.i($async$a9p,w)},
arv(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YR(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arv,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adV.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_N.prototype={
S(){return new B.aBS()},
gd2(){return this.c}}
B.aBS.prototype={
Z(){this.a4()
this.afR()},
afR(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2_(u.e,u.c),$async$afR)
case 2:t=e
if(v.c!=null)v.l(new B.deU(v,t))
return A.h(null,w)}})
return A.i($async$afR,w)},
Rr(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arr(t.e,t.c,!1),$async$Rr)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fwg)
x=1
break}x=4
return A.b(B.a8y(u.a.c,"individual"),$async$Rr)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a7D(A.e9(new B.deR(u),!1,null,y.H)),$async$Rr)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rr,w)},
K5(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fG0(o),$async$K5)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8C(o.e,r,s,q),$async$K5)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ftf)
x=1
break}x=5
return A.b(B.a8y(u.a.c,"member"),$async$K5)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a7D(A.e9(new B.deT(u),!1,null,y.H)),$async$K5)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K5,w)},
yP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8x(t.e,o,t.f,t.r,t.w,s),$async$yP)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8y(u.a.c,"org_owner"),$async$yP)
case 4:x=5
return A.b(B.arw(u.a.c),$async$yP)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fGv(o),$async$yP)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8A(s,t,o,q.c),$async$yP)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.ftb)
x=1
break}x=10
return A.b(B.arw(u.a.c),$async$yP)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a7D(A.e9(new B.deS(u),!1,null,y.H)),$async$yP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yP,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.nL:C.qD,p=B.het(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aE(d,C.dF,y.m).w
w=A.m(28)
v=A.a([new A.ab(0,C.H,C.aD.j(0.35),C.fZ,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fQu,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.hj,s,s,s),C.aA,D.h9E,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.cdt,C.m),s,s,s,s,C.eF,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m_(new B.deW(),s),C.P,v,C.e8,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.al,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeo(C.f1,C.aFs,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcla(),s),C.af],u))
w.push(new B.aeo(C.pM,C.a6g,"Team Member","Sign in with your organization access code + password",t.gcm3(),s))
w.push(C.af)
w.push(new B.aeo(C.aro,C.a7V,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gclz(),s))
return A.c5(s,q,A.bm(!0,A.cc(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeo.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.m8,s,s,s),C.au,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.W(C.zO,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.n(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEw.prototype={}
B.aHK.prototype={}
B.jH.prototype={
mR(d){var x=this.b,w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasb(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ab(x/1024,1)+" KB"
if(x<1073741824)return C.i.ab(x/1048576,1)+" MB"
return C.i.ab(x/1073741824,2)+" GB"},
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
bgI(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jH(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cQW(d){return this.bgI(null,d)},
aGW(d){return this.bgI(d,null)}}
B.Ws.prototype={
S(){return new B.aFT(new A.cC(null,y.A))},
gd2(){return this.c}}
B.aFT.prototype={
Z(){this.a4()
this.afS()},
afS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cs(u.a.c),$async$afS)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e0N(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afS,w)},
afT(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fy(s)),$async$afT)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fxb)
case 1:return A.h(v,w)}})
return A.i($async$afT,w)},
a0c(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqu(s.d,4),$async$a0c)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rr(r,"ngmy_my_code_"+m+".png"),$async$a0c)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0c,w)},
ajN(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abG("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajN,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.nL:C.qD,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lJ
else if(q.e==null)x=A.as(new A.D(C.eF,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.F,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.o(p,A.x(A.a([t,C.P,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,E.SS,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.al,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,C.ao_,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.H,C.aD.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.cc(A.x(A.a([x,C.nn,w,C.lh,new A.e6(A.o(p,A.qk(p,p,!1,B.i0v(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lh,A.A(A.a([A.E(A.em(C.DS,p,C.X2,q.gcdm(),p),1),C.ar,A.E(A.d8(C.Ae,p,C.adc,q.gcdn(),A.bn(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a5(1/0,p,A.em(G.a53,p,D.h5a,q.gcB7(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,I.aoA,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Ww.prototype={
S(){return new B.aFW(new A.at(C.ax,$.ax()),A.kf(!0,null,!0,!0,null,null,!1))}}
B.aFW.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.Jv(x==null?"":x)
if(w!=null)this.d.sb2(0,w)},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a3()},
a0d(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jv(u.d.a.a)
if(t==null){u.l(new B.e1W(u))
x=1
break}u.l(new B.e1X(u))
s=u.a
r=s.c
x=3
return A.b(B.a8w(s.d,new B.e1Y(u),t,r),$async$a0d)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e1Z(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0d,w)},
a3w(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cu(r.a.d)){x=1
break}r.l(new B.e2_(r))
u=4
q=J.fl(r.a.d)
x=7
return A.b(B.rZ(r.a.c,q),$async$a3w)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e20(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajp(p,m,l,j,k),$async$a3w)
case 8:o=e
if(r.c!=null)r.l(new B.e21(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e22(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e23(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3w,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ajX:D.ahq,h=j?D.alK:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aiV:C.bn
i=[i,e,h,g,f,j?C.fx:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c0n,C.f,k,k,new A.n(k,k,k,A.m(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.m),k,k,k,k,C.fb,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,E.SS,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v0(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmj()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.P3,k,k,"",k,!0,new A.b6(4,A.m(18),new A.av(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.av(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e24(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mH,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.Mz(l.a.d,4)
m=A.B(new A.N(m,new B.e25(x,new A.aJ1(i)),m.$ti.k("N<ak.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lt,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.dc,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.m),k,k,k,k,C.ex,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.frI)
else q.push(A.W(C.l4,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b_,new A.n(u,k,s,t,k,k,C.m),C.iX,k,k,k,k,C.eW,k,k,k)],r))}e=A.E(A.cc(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bIC,k,k,C.ah),1)
u=l.f?k:l.gcB8()
t=i[3]
s=i[1]
q=A.m(16)
s=A.em(G.a53,k,D.h6h,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b9(q,C.a1),new A.av(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdo()
t=A.bn(C.aD,k,k,0,C.c,k,C.nS,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lH(new B.e26(),A.x(A.a([e,new A.D(D.bI5,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.ub:D.h4x,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cn,C.a1g,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmj.prototype={
pg(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hr(C.bD,v.length),C.aP)}}
B.Wt.prototype={
S(){return new B.aFU()}}
B.aFU.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aR()
u.d=new A.at(new A.bd(w,C.b8,C.aP),v)
x=x.d
u.e!==$&&A.aR()
u.e=new A.at(new A.bd(x,C.b8,C.aP),v)
u.f!==$&&A.aR()
u.f=new A.at(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.ax()
v.R$=0
v=w.e
v===$&&A.d()
v.V$=x
v.R$=0
v=w.f
v===$&&A.d()
v.V$=x
v.R$=0
w.a3()},
afU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e0O(r))
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
return A.b(B.a8B(p,m,n,o,C.a.i(l).length===0?null:l),$async$afU)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fwN)
s=[1]
x=4
break}p.L(y.q).f.U(D.fvo)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e0P(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afU,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.nL:C.qD,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fXQ,s,s,s,1,s,!0),p=A.o(s,D.bA5,C.f,s,s,new A.n(s,s,s,A.m(22),s,C.IO,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c7M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c7H,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c7X,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdp()
u=A.bn(C.aD,s,s,s,s,C.hp,s,s,s,s,s,s)
return A.c5(q,r,A.cc(A.x(A.a([p,C.dc,o,C.af,x,C.af,w,C.nn,A.bJ(t.r?C.ub:C.aZw,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adC.prototype={}
B.bzg.prototype={
a6l(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.c9(r.a83()))
x=3
return A.b(B.Sx(t,s),$async$a6l)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6l,w)},
gd2(){return this.a}}
B.Ow.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_M.prototype={
S(){return new B.aBR(new A.at(C.ax,$.ax()),A.kf(!0,null,!0,!0,null,null,!1))}}
B.aBR.prototype={
Z(){this.a4()
$.aU.x1$.push(new B.deQ(this))},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a3()},
cdv(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2U(d),u=x.a.c,t=u?C.iR:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nL:v.a[0],p=A.m(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.H,C.aD.j(u?0.25:0.12),C.fZ,32)],n),l=A.o(w,H.au6,C.f,w,w,new A.n(w,w,w,A.m(18),A.a([new A.ab(0,C.H,C.aD.j(0.4),C.cz,16)],n),C.auW,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.F,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byT()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.D1,w,w,"",w,!0,new A.b6(4,A.m(16),new A.av(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b7I),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.deO(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mH,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cO(C.MJ,new A.bP(new A.n(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x_,A.x(A.a([l,C.aO,k,C.P,j,C.e8,i,C.e8,A.A(A.a([A.E(A.dU(C.ol,new B.deP(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b9(A.m(14),C.a1),new A.av(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.n(w,w,w,A.m(14),A.a([new A.ab(0,C.H,C.aD.j(0.35),C.cO,12)],n),F.R7,C.m),C.bm,A.aF(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eAN,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdu(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.M,0,C.p),w),w),w),w,w,w,C.Pc,w,C.d8,w,w,w)}}
B.byT.prototype={
pg(d,e){return e.an1(e.a.toUpperCase())}}
B.Wu.prototype={
S(){return new B.aFV(A.a([],y.r),A.aQ(y.N))},
gd2(){return this.c}}
B.aFV.prototype={
Z(){var x=this
x.a4()
x.uw()
x.w=A.de(C.jP,new B.e1U(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WD()
this.a3()},
a2o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ov(u.a.c),$async$a2o)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bm(u.a.c),$async$a2o)
case 4:u.l(new s.e1h(u,e))
u.ip("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2o,w)},
uw(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ov(u.a.c),$async$uw)
case 3:t=e
x=4
return A.b(B.Bm(u.a.c),$async$uw)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e1i(u,s))
if(t>0)u.ip("Received "+A.v(t)+" file(s) via My Code.")
u.Oz(u.d)
B.Cs(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uw,w)},
Oz(d){return this.bHD(d)},
bHD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8G(r,u.a.c),$async$Oz)
case 8:p=f
if(u.c==null){x=1
break}new B.e0R(u,r,p).$0()
u.c.er()
case 7:if(!(C.a.X(r.c,"video/")||r.mR(D.nh))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WB(r,u.a.c),$async$Oz)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bm(u.a.c),$async$Oz)
case 12:u.l(new o.e0S(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oz,w)},
OZ(d){return this.bO2(d)},
bO2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8G(d,u.a.c),$async$OZ)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e0X(u,d,t))
x=6
return A.b(A.fI(new A.fy(t)),$async$OZ)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fy(r.toUpperCase())),$async$OZ)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OZ,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ux(d,e){return this.cMb(d,e)},
cMb(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ux=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e1I(r,e))
u=3
x=6
return A.b(d.$0(),$async$ux)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e1J(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ux,w)},
gaYJ(){var x=this.a
return x.f||x.r||x.w},
IT(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYJ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cfK(s,n,r,q,o,t),$async$IT)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fTr(o,u.a.c),$async$IT)
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
return A.b(B.DX(s,o,r,q,n,t),$async$IT)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IT,w)},
a1r(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1r=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arw(u.a.c),$async$a1r)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ip("No organization portal found.")
x=1
break}t=J.a6(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a8(t,!1).cb(A.e9(new B.e1e(u,r,q),!1,null,y.H)),$async$a1r)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1r,w)},
a2y(d){return this.cuA(d)},
cuz(){return this.a2y(1)},
cuA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYJ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.art(u.a.c),$async$a2y)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2y,w)},
adK(d,e,f){return this.c43(d,e,f)},
c43(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.ux(new B.e1b(u,d,null,e,f),"Uploading\u2026"),$async$adK)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adK,w)},
bHM(){B.hLs(!1,new B.e0V(this))
return},
czI(){this.l(new B.e1m(this))},
aBp(){var x=0,w=A.j(y.H),v=this
var $async$aBp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHM()
return A.h(null,w)}})
return A.i($async$aBp,w)},
adG(){var x=0,w=A.j(y.H),v=this
var $async$adG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e10(v),"Importing\u2026"),$async$adG)
case 2:return A.h(null,w)}})
return A.i($async$adG,w)},
Tw(d){return this.cLu(d)},
cLu(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.X(t,"video/")||d.mR(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cb(A.e9(new B.e1F(u,d),!1,null,y.H)),$async$Tw)
case 5:x=1
break
case 4:x=C.a.X(t,"image/")||d.mR(D.Tb)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cb(A.e9(new B.e1G(u,d),!1,null,y.H)),$async$Tw)
case 8:x=1
break
case 7:x=u.c4M(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cb(A.e9(new B.e1H(u,d),!1,null,y.H)),$async$Tw)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tw,w)},
c4M(d){var x,w
if(C.a.X(d.c,"audio/"))return!0
x=d.b
w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cX8,C.a.aY(x,w+1).toLowerCase())},
ahv(d){return this.cle(d)},
cle(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.X(d.c,"video/")||d.mR(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cb(A.e9(new B.e1c(u,d),!1,null,y.H)),$async$ahv)
case 5:x=1
break
case 4:u.l(new B.e1d(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahv,w)},
SR(d){return this.cCC(d)},
cCC(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pH(t,s.c,s.f),$async$SR)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e1y(u,d),"Preparing QR\u2026"),$async$SR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
akc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e1z(),A.T(t).k("N<1,q>")).fG(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e1A(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SR(r),$async$akc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akc,w)},
ak5(d){return this.cC9(d)},
cC9(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2U(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e1s(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ak5)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tw(d)
break
case"qr":u.SR(A.a([d],y.r))
break
case"send_my_code":u.clT(A.a([d],y.r))
break
case"save":u.ajt(d)
break
case"delete":u.JO(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ak5,w)},
YV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0Y(),A.T(t).k("N<1,q>")).fG(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e0Z(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pH(t,s.c,s.f),$async$YV)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e1_(u,r),"Preparing file\u2026"),$async$YV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YV,w)},
aiB(d){return this.csS(d)},
csS(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hMt(d,!1),$async$aiB)
case 3:s=f
r=s==null
q=B.a8D(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiB,w)},
ahB(){var x=0,w=A.j(y.H),v=this,u
var $async$ahB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h0G(u,v.a.c),$async$ahB)
case 2:return A.h(null,w)}})
return A.i($async$ahB,w)},
bHL(){B.hLs(!1,new B.e0U(this,null))
return},
K4(d,e){return this.clU(d,e)},
b4q(d){return this.K4(null,d)},
clT(d){return this.K4(d,null)},
clU(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$K4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.B(new A.Y(p,new B.e1f(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xX.cq().apP(!0,C.a33,!1),$async$K4)
case 10:r=g
if(r==null||J.cu(r.a)){x=1
break}x=11
return A.b(s.ux(new B.e1g(l,s,r),"Preparing\u2026"),$async$K4)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.am.$1("[doc share send my code pick] "+A.v(q))
s.ip("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ip("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bHv(p,l,e,s.a.c),$async$K4)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K4,w)},
J9(d){return this.c3R(d)},
c3R(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.X(q,"NGMYDOCRCV|")||C.a.X(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i0u(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4q(t),$async$J9)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.X(d,"NGMYDOCSYNC3|")||C.a.X(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ux(new B.e19(u,d),"Receiving video\u2026"),$async$J9)
case 11:x=1
break
case 10:x=12
return A.b(u.ux(new B.e1a(u,d),"Receiving\u2026"),$async$J9)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J9,w)},
EZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DQ()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiB(t),$async$EZ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J9(s),$async$EZ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cb(A.e9(new B.e1k(u),!1,null,y.N)),$async$EZ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uw(),$async$EZ)
case 10:x=1
break
case 9:x=11
return A.b(u.J9(C.a.i(r)),$async$EZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EZ,w)},
ajt(d){return this.cyc(d)},
cyc(d){var x=0,w=A.j(y.H),v=this
var $async$ajt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e1j(v,d),"Saving\u2026"),$async$ajt)
case 2:return A.h(null,w)}})
return A.i($async$ajt,w)},
JO(d){return this.bQp(d)},
bQp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lp(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JO)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cfN(t),$async$JO)
case 6:case 5:s=d.a
x=7
return A.b(B.Fz(u.a.c,s),$async$JO)
case 7:u.r.W(0,s)
x=8
return A.b(u.uw(),$async$JO)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JO,w)},
aki(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aki=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2U(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e1E(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aki)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahB()
break
case"import":u.adG()
break}case 1:return A.h(v,w)}})
return A.i($async$aki,w)},
cds(d){var x=d.c
if(C.a.X(x,"video/")||d.mR(D.nh))return C.rb
if(C.a.X(x,"image/")||d.mR(D.Tb))return C.vj
if(C.a.q(x,"pdf"))return C.Iu
return D.arM},
B(d){var x,w,v=this,u=null,t=B.a2U(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.IG,u,u,u,new B.e1P(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c0Z,u,u,u,v.e?u:v.gclA(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gczH()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bW4:C.as9,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a50,u,u,u,v.e?u:v.gcdt(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.p0,u,u,u,v.e?u:v.gb5w(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c2N,u,u,u,v.e?u:new B.e1Q(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m_(new B.e1R(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jE(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBO(C.jB,s,!0,t,w?u:v.gcCD(),u),1)
x.push(new A.D(D.bGO,A.lH(new B.e1S(),A.A(A.a([s,C.ar,A.E(new B.aBO(C.ty,"Export",!1,t,w?u:v.gbUh(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cn,C.iJ,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgO(t,v.e?u:v.gb5w(),u)
else s=A.kw(!0,u,u,new B.e1T(v,t),s,u,D.bGF,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBO.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aD,t,t,0,C.c,t,C.tl,t,new A.b9(s,C.a1),t,t,t)
return A.d8(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tl,t,new A.b9(s,C.a1),new A.av(v,1,C.r,-1),t,t,t,t)
return A.em(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fg,t,t,t),u.r,v)}}
B.bgO.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lH(new B.deM(),new A.D(C.a2a,A.x(A.a([A.lH(new B.deN(),A.o(x,A.W(C.zS,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eh,C.hH,x,x,new A.bt(0.86,1,w),s),C.e8,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e8,A.d8(C.p0,x,D.h9Y,this.d,A.bn(C.aD,x,x,x,C.c,x,C.Pa,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.M,0,C.p),x),C.cn,C.CR,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adW.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.du(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.X(p,"video/")
if(!o||i.mR(D.nh))p=D.dya
else{p=C.a.X(p,"image/")||i.mR(D.Tb)
n=y.O
p=p?A.a([C.cX,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasb()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.nh))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.au,A.c(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fX,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cl))
if(!(!o||i.mR(D.nh)))l.push(A.hcd(C.aD,!1,j,j,j,!1,j,j,new B.df8(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.W(C.oV,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cl))
return A.lH(new B.df9(),new A.D(C.eb,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1E,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.av(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_O.prototype={
S(){return new B.aBT()},
gd2(){return this.c}}
B.aBT.prototype={
Z(){this.a4()
this.yE()},
t(){B.i0J(this.e)
this.a3()},
yE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rZ(o.c,o.d),$async$yE)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i0M(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i0L(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.df5(s))
x=1
break}s.l(new B.df6(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.df7(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yE,w)},
a3v(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rZ(t.c,t.d),$async$a3v)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.ftM)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajp(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3v)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3v,w)},
c3K(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kJ(u,C.z,v,new B.df3(w,t),C.hb,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fY(t,C.z,v,new B.df4(w),C.hb,C.dC,!0,v,!1,v,v)
else return C.bL
return A.v7(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2U(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DU,u,u,u,v.gb9l(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gg
else{q=v.r
if(q!=null)t=new A.D(C.eF,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eF,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.d8(C.DU,u,D.fSZ,v.gb9l(),A.bn(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.M,0,C.p),u)
t=p}else t=v.c3K()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_L.prototype={
S(){return new B.aBQ(A.ako(),C.bF,C.bF)},
gd2(){return this.c}}
B.aBQ.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fB(w,A.a4(w).k("fB<1>")).iG(new B.deJ(v))
x.gd_5().iG(new B.deK(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a4(x).k("fB<1>"))}if(x==null)x=C.be5
x.iG(new B.deL(v))
v.yE()},
yE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rZ(p.c,p.d),$async$yE)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.deC(s))
x=1
break}x=8
return A.b(s.d.vz(0,new A.a52(r,s.a.d.c)),$async$yE)
case 8:if(s.c==null){x=1
break}s.l(new B.deD(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.deE(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yE,w)},
a0e(){var x=0,w=A.j(y.H),v=this,u
var $async$a0e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hj(0),$async$a0e)
case 5:x=3
break
case 4:x=6
return A.b(u.iL(0),$async$a0e)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0e,w)},
aWz(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2U(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gg
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bX2,C.f,o,o,new A.n(o,o,o,A.m(24),o,F.R7,C.m),o,88,o,o,o,o,o,88)
t=A.l3(C.aD,o,o,m,0,new B.deF(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.c(p.aWz(p.w)+" / "+p.aWz(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aD,o,o,o,o,D.fqa,o,o,o,o,o,o)
r=p.f
q=A.W(r?C.vm:C.hc,o,o,o,o,o)
x=A.x(A.a([u,C.lh,t,x,C.dc,A.d8(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdw(),s)],y.p),C.l,o,C.e,C.M,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qW,x,o),o,o,o),o,!1,!1,o,o)}}
B.QV.prototype={
S(){return new B.aBW()},
gd2(){return this.c}}
B.aBW.prototype={
Z(){this.a4()
this.QI()},
QI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.heu(o.c,o.d,new B.dfm(s)),$async$QI)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dfn(s))
x=1
break}s.e=r
q=A.io4(r)
if(q==null){s.l(new B.dfo(s))
x=1
break}s.d=q
q.aV(0,s.gb4e())
x=8
return A.b(q.iY(0).dc(0,C.nR),$async$QI)
case 8:if(s.c==null){x=1
break}s.l(new B.dfp(s))
x=9
return A.b(q.qw(0),$async$QI)
case 9:q.u6(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dfq(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QI,w)},
cjN(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dfr(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DK(0,x.gb4e())
w=x.d
if(w!=null)w.t()
B.iye(x.e)
x.a3()},
afX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b27(u.c,u.d),$async$afX)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afX,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2U(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.o6,t,t,t,u.gcdq(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gg
else{q=u.r
if(q!=null)s=new A.D(C.eF,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajP(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fH(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AS(s,t),A.ay(t,A.xF(A.o(t,A.W(q?C.vm:C.hc,C.c,t,t,t,48),C.f,t,t,new A.n(C.b6,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dft(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_Q.prototype={
S(){return new B.aBU(new A.cC(null,y.A))}}
B.aBU.prototype={
gcLS(){var x,w,v=this.a
if(v.e!==D.UA)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"WR"))return w
return null},
gcLs(){var x,w,v=this.a
if(v.e!==D.AR)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcLS()
if(x!=null){v.RS(x)
v.e=A.de(C.Hs,new B.dfi(v,x))}w=v.gcLs()
if(w!=null){v.RR(w)
v.f=A.de(C.fU,new B.dfj(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
RR(d){return this.cr2(d)},
cr2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arB(d),$async$RR)
case 3:t=f
x=4
return A.b(B.cg5(d),$async$RR)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfa(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RR,w)},
RS(d){return this.cr3(d)},
cr3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h1p(d),$async$RS)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFh(t),$async$RS)
case 4:if(u.c==null){x=1
break}u.l(new B.dfb(u))
u.c.L(y.q).f.U(D.aWh)
case 1:return A.h(v,w)}})
return A.i($async$RS,w)},
gc9d(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdr(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3g(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DQ()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fwX)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cb(A.e9(new B.dfc(),!1,null,y.N)),$async$a3g)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFh(s),$async$a3g)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aWh)
case 1:return A.h(v,w)}})
return A.i($async$a3g,w)},
aby(d){return this.bO3(d)},
bO3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aby=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fy(C.d.aM(t,", "))),$async$aby)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aby,w)},
afV(d){return this.bNM(d)},
bNM(d){var x=0,w=A.j(y.H),v=this
var $async$afV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fy(v.a.c)),$async$afV)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fuf)
return A.h(null,w)}})
return A.i($async$afV,w)},
a3a(d){return this.cye(d)},
cye(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqu(s.d,4),$async$a3a)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rr(r,"ngmy_doc_share_qr.png"),$async$a3a)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3a,w)},
gaZZ(){var x,w=this.a
if(w.e!==D.JT)return null
x=C.a.i(w.c)
if(C.a.X(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.X(x,"http://")||C.a.X(x,"https://"))return x
if(C.a.X(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abv(d){return this.bNX(d)},
bNX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZZ()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fy(C.a.X(t,"http")?t:"N2|"+t)),$async$abv)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fvW)
case 1:return A.h(v,w)}})
return A.i($async$abv,w)},
afW(){var x=0,w=A.j(y.H),v=this,u
var $async$afW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WD(),$async$afW)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afW,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2U(d),i=m.a,h=i.c
if(h.length>48)h=C.a.az(h,0,44)+"\u2026"
i=i.e
i=i!==D.JT&&i!==D.UA&&i!==D.AR
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JT||t===D.UA||t===D.AR?l:A.aH(l,l,l,l,C.lx,l,l,l,m.gb25(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qk(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gc9d(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JT){t=C.aD.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.P,A.o(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.m),l,l,l,l,C.lW,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdr(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hq(D.c6P,D.h1H,new B.dfd(m,d),l)],p))}if(m.a.e===D.JT&&m.gaZZ()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hq(D.c38,D.fZe,new B.dfe(m,d),l)],p))
if(m.a.e===D.AR){x=(m.w?C.dP:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ab(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gk:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.m),l,l,l,l,C.lW,l,l,l)],p))}if(m.a.e===D.UA){x=(m.r?C.dP:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gk:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.m),l,l,l,l,C.lW,l,l,l),C.af,A.d8(D.bZx,l,D.h4R,m.gcyB(),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oV(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.h,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.em(C.DS,l,C.X2,new B.dff(m,d),l),1),C.ar,A.E(A.d8(C.Ae,l,C.adc,new B.dfg(m,d),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bv,l,m.gb25(),A.bn(C.aN,l,l,l,l,C.hp,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfh(),y.C)}}
B.adU.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.x(A.a([w,C.aO,A.o(x,A.qk(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.M,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bJ(C.Bw,x,new B.deB(d),x)],u),x,x,C.nB,v,x,x,x,x,D.fRW,x)}}
B.a_K.prototype={
S(){return new B.aBP(A.A2(C.z8,C.os,C.vy))}}
B.aBP.prototype={
t(){this.d.t()
this.a3()},
azW(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.X(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a8(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fZM,x,x,x,1,x,!0),C.v,A.A1(this.d,C.bZ,this.gazV()),x,!1,!1,x,x)}}
B.a_R.prototype={
S(){return new B.aBV(A.A2(C.z8,C.os,C.vy))},
gd2(){return this.c}}
B.aBV.prototype={
c4O(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.X(x,"NGMYDOCSYNC")||C.a.X(x,"N2|")||C.a.X(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N_("text/plain"),$async$ahY)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fwR)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahY,w)},
acm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hMt(p,!0),$async$acm)
case 3:t=e
p=t==null
s=B.a8D(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.ftm)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acm,w)},
t(){this.d.t()
this.a3()},
azW(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4O(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.atb,v,v,v,w.gbTL(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a57,v,v,v,w.gcon(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.vf:C.Qk,v,v,v,v,v),v,v,v,new B.dfl(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h5M,v,v,v,1,v,!0)
u=A.A1(w.d,C.bZ,w.gazV())
x=A.m(20)
return A.c5(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eH4],s),v),v,!1,!1,v,v)}}
B.bgP.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pC
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.o(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pC:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2g,A.A(A.a([u,C.bb,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.W(C.eL,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.ab3.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.PD.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YQ.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.PC.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.G4.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ctZ.prototype={}
B.G3.prototype={}
B.ab2.prototype={}
B.awb.prototype={}
B.YR.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jH)","q(jH)","Wu(Z)","~()","a_N(Z)","H(H,jH)","QV(Z)","~(nW)","cw(G3)","aA<jH?>(@)","Ws(Z)","Ww(Z)","D(jH)","jH(@)","aa<q,@>(jH)","a_M(Z)","Wt(Z)","a_O(Z)","a_L(Z)","a_Q(Z)","adU(Z)","ai<jH>()","a_R(Z)","adW(Z,H)","a_K(Z)","aa<q,aK>(jH)","cw(YQ)","cw(ab2)","aA<cw>(G3)"])
B.ctV.prototype={
$1(d){var x=this.a
x.x=D.aSZ
x.y.I(0,D.aSZ)},
$S:78}
B.ctW.prototype={
$1(d){var x=this.a
x.x=D.aSY
x.y.I(0,D.aSY)},
$S:78}
B.ctX.prototype={
$1(d){var x=this.a
x.ajl(A.aia(d.data)).bF(new B.ctU(x),y.b)},
$S:78}
B.ctU.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctY.prototype={
$1(d){},
$S:78}
B.cu0.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i5A(d.channel))},
$S:17}
B.cu1.prototype={
$1(d){},
$S:17}
B.cu2.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ipe(w.iceConnectionState)
x.cx=w
if($.hoc())switch(w.a){case 0:x.cy=D.aT3
break
case 1:x.cy=D.aT4
break
case 3:x.cy=D.aT5
break
case 5:x.cy=D.aT1
break
case 6:x.cy=D.aT2
break
case 7:x.cy=D.aaQ
break
default:break}},
$S:114}
B.cu3.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ipf(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:114}
B.cu4.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.izN(w.signalingState)},
$S:114}
B.cu5.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.ixW(w.connectionState)},
$S:114}
B.cu6.prototype={
$1(d){},
$S:114}
B.cu7.prototype={
$1(d){},
$S:17}
B.fBo.prototype={
$1(d){var x=y.F.a(new A.qA([],[]).o8(d.target.result,!1)),w=C.wP.q(x.objectStoreNames,"blobs")
if(!w)C.wM.Gw(x,"blobs")},
$S:178}
B.h0u.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xt.ft(this.b)
$.eX.mK()
this.c.$1(d)},
$S:414}
B.h0w.prototype={
$1(d){return this.a.$1(B.ieN(this.b,this.c))},
$S:32}
B.h0v.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.h0t.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h0J.prototype={
$1(d){var x=this
return B.hAL(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h0K.prototype={
$1(d){var x=this
return B.hAL(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fE4.prototype={
$1(d){var x=this
return B.cfH(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.deU.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.deR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfH(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.deT.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfH(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.deS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfH(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.deW.prototype={
$4(d,e,f,g){var x=null
return A.k4(A.A(A.a([A.aH(x,x,x,x,D.bY8,x,x,x,new B.deV(d),x,x,x,x,x,x),A.E(A.FQ(D.SV,!0,x,!1,C.a49,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.SV,x,g,C.aoR,0,e,f)},
$C:"$4",
$R:4,
$S:466}
B.deV.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fG3.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.f_,y.m).w,t=this.a,s=t?C.iR:C.c,r=A.m(28),q=A.o(v,D.bAp,C.f,v,v,D.b9m,v,v,v,v,D.aoG,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c1A,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.D3,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atr,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dU(C.dp,new B.fG1(d),v),1),C.ar,A.E(A.bJ(D.fYd,v,new B.fG2(p,x,d),A.bn(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.M,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.m),v,v,v,C.Hw,v,v,v,v),v)},
$S:69}
B.fG1.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fG2.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fuw)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aEw(v,x))},
$S:0}
B.fGx.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.f_,y.m).w,u=x.a,t=u?C.iR:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bAf,C.f,w,w,D.baR,w,w,w,w,D.aoG,w,w,1/0),new A.D(C.D3,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hjQ(u,"Organization name",C.I4,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hjQ(u,"Access code",C.mr,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hjQ(u,"Member password",C.DR,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h5T,w,new B.fGw(r,q,p,d),A.bn(C.aD,w,w,w,w,C.hp,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.M,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.m),w,w,w,C.Hw,w,w,w,w),w)},
$S:69}
B.fGw.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fuB)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aHK(u,x,w))},
$S:0}
B.cfy.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a6(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.X(j,"http")?A.cE(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vY(p,null).dc(0,C.a1f),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.c9(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ct(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ac(h)
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
B.cfE.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfF.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cfG.prototype={
$1(d){return d.b},
$S:z+2}
B.cfA.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfB.prototype={
$1(d){return d.b},
$S:z+2}
B.cfz.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cfC.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cfD.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h0H.prototype={
$1(d){return new B.Ws(this.a,null)},
$S:z+11}
B.h0I.prototype={
$1(d){return new B.Ww(this.a,this.b,this.c,null)},
$S:z+12}
B.e0N.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e1W.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e1X.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e1Y.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e1V(x,d))},
$S:2}
B.e1V.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1Z.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e2_.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e20.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e21.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e22.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e23.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e26.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:108}
B.e24.prototype={
$1(d){var x=this.a
return x.f?null:x.a0d()},
$S:2}
B.e25.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.X(s,"image/")||d.mR(D.Tb))s=C.vj
else s=C.a.X(s,"video/")||d.mR(D.nh)?C.rb:D.arM
x=this.b.a
w=y.p
return new A.D(C.kd,A.A(A.a([A.o(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasb(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e0O.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e0P.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfI.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:106}
B.cfJ.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:106}
B.h1I.prototype={
$2(d,e){return e===this.a},
$S:259}
B.fyo.prototype={
$1(d){return J.k(d)},
$S:16}
B.fEg.prototype={
$1(d){var x=this.b
B.icJ(C.HT.ga7Y(this.a)).bF(x.gCj(x),y.H)},
$S:133}
B.fEh.prototype={
$1(d){return this.a.de(0,null)},
$S:133}
B.fEi.prototype={
$0(){return null},
$S:11}
B.cfX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fEj.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
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
return new B.jH(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fIy.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fCs.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fCt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cg1.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nh)},
$S:z+1}
B.h5Y.prototype={
$1(d){return new B.a_M(this.a,null)},
$S:z+16}
B.deQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fX()},
$S:7}
B.deO.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.deP.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e1U.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2o()},
$S:12}
B.e1h.prototype={
$0(){var x=J.bIC(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e1i.prototype={
$0(){var x=J.bIC(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0R.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0Q(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGW(this.c)}},
$S:0}
B.e0Q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0S.prototype={
$0(){var x=J.bIC(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0X.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0W(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGW(this.c)}},
$S:0}
B.e0W.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1I.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e1J.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e1e.prototype={
$1(d){return new B.Wt(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e1b.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IT(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wx(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uw(),$async$$0)
case 5:s=J.a6(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2y(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0V.prototype={
$1(d){this.a.adK(d,"No files selected.","Added")},
$S:414}
B.e1m.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e1l(),A.T(x).k("N<1,q>")))},
$S:0}
B.e1l.prototype={
$1(d){return d.a},
$S:z+2}
B.e10.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xX.cq().d13(C.a33,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fl(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jN(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ac(j)
$.am.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ip("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.X(m,"NGMYDOCSYNC")&&!C.a.X(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arA(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cu(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uw(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e1F.prototype={
$1(d){return new B.QV(this.a.a.c,this.b,null)},
$S:z+7}
B.e1G.prototype={
$1(d){return new B.a_O(this.a.a.c,this.b,null)},
$S:z+18}
B.e1H.prototype={
$1(d){return new B.a_L(this.a.a.c,this.b,null)},
$S:z+19}
B.e1c.prototype={
$1(d){return new B.QV(this.a.a.c,this.b,null)},
$S:z+7}
B.e1d.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1y.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IT(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8F(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cuz(),$async$$0)
case 5:x=6
return A.b(p.uw(),$async$$0)
case 6:r=A.T(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e1u(p),r),new B.e1v(),r.k("N<ak.E,q>")).c0(0,new B.e1w())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cb(A.e9(new B.e1x(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pG(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WD(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1u.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e1t(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e1t.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1v.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e1w.prototype={
$1(d){return d.length!==0},
$S:3}
B.e1x.prototype={
$1(d){var x=this.a
return new B.a_Q(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e1z.prototype={
$1(d){return d.a},
$S:z+2}
B.e1A.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e1s.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kG,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasb(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.X(p.c,"video/")
w=!x||p.mR(D.nh)?C.tD:C.o4
p=!x||p.mR(D.nh)?"Play video":"View"
return new A.bP(new A.n(s,v,new A.bE(new A.av(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ll,v,v,C.m),C.bm,A.bm(!0,new A.D(C.D_,A.x(A.a([q,o,t,C.aA,B.a_P(!1,u,!1,w,p,new B.e1n(d),v),B.a_P(!1,u,!1,C.jB,"Share via QR",new B.e1o(d),"Letters/numbers QR code"),B.a_P(!1,u,!1,D.a4e,"Send to their Code",new B.e1p(d),"Enter someone else's personal code"),B.a_P(!1,u,!1,C.hM,"Download / save",new B.e1q(d),v),C.al,B.a_P(!1,u,!0,C.en,"Delete",new B.e1r(d),v)],y.p),C.am,v,C.e,C.M,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:613}
B.e1n.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e1o.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e1p.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e1q.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e1r.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e0Y.prototype={
$1(d){return d.a},
$S:z+2}
B.e0Z.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e1_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8H(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hw(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pG(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0U.prototype={
$1(d){var x=this.a
x.ux(new B.e0T(x,d,this.b),"Preparing\u2026")},
$S:414}
B.e0T.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wx(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cu(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bHv(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1f.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e1g.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hex(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e19.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hu(new B.e15(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e16(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e17(s))
case 5:x=8
return A.b(r.b.ix(0,C.Ho,new B.e18()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uw(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e15.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e12(x,d,e))},
$S:249}
B.e12.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e16.prototype={
$1(d){return new B.adU(this.a.a,null)},
$S:z+21}
B.e17.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e18.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e1a.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jv(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8v(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4q(B.Jv(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arA(new B.e13(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cu(r)){if(B.hew(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.X(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uw(),$async$$0)
case 10:o=J.cG(r)
p=o.eO(r,new B.e14()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e13.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e11(x,d,e))},
$S:249}
B.e11.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e14.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nh)},
$S:z+1}
B.e1k.prototype={
$1(d){return new B.a_R(this.a.a.c,null)},
$S:z+23}
B.e1j.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b27(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1E.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.n(v[2],x,new A.bE(new A.av(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ll,x,x,C.m),C.bm,A.bm(!0,new A.D(C.D_,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kG,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a_P(!0,w,!1,C.mr,"My Code",new B.e1B(d),"Your personal code & QR \u2014 others send docs to you"),B.a_P(!1,w,!1,D.a4e,"Send to their Code",new B.e1C(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_P(!1,w,!1,C.A6,"Import backup",new B.e1D(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.M,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:613}
B.e1B.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e1C.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bHL()},
$S:0}
B.e1D.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e1R.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JF(D.SV,x,C.a49,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.da(C.d.gH(D.SV).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:784}
B.e1P.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e1Q.prototype={
$0(){this.a.aki()
return null},
$S:0}
B.e1S.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*10)),e)},
$S:108}
B.e1T.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adW(e,w,v,this.b,x.e,x.cds(w),new B.e1L(x,w),new B.e1M(x,v,w),new B.e1N(x,w),new B.e1O(x,w),null)},
$S:z+24}
B.e1L.prototype={
$0(){this.a.ahv(this.b)
return null},
$S:0}
B.e1M.prototype={
$0(){var x=this.a
return x.l(new B.e1K(x,this.b,this.c))},
$S:0}
B.e1K.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1N.prototype={
$0(){this.a.OZ(this.b)
return null},
$S:0}
B.e1O.prototype={
$0(){this.a.ak5(this.b)
return null},
$S:0}
B.deM.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*18)),e)},
$S:108}
B.deN.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:115}
B.df9.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:108}
B.df8.prototype={
$1(d){return this.a.y.$0()},
$S:89}
B.df5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.df6.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.df7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.df3.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fY(w,C.z,x,new B.df1(this.a),C.hb,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.df2(this.a))
return C.bL},
$S:144}
B.df1.prototype={
$3(d,e,f){$.aU.x1$.push(new B.df_(this.a))
return C.bL},
$S:207}
B.df_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.deX(x))},
$S:7}
B.deX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.df2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.deZ(x))},
$S:7}
B.deZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.df4.prototype={
$3(d,e,f){$.aU.x1$.push(new B.df0(this.a))
return C.bL},
$S:207}
B.df0.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.deY(x))},
$S:7}
B.deY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deI(x,d))},
$S:2154}
B.deI.prototype={
$0(){return this.a.f=this.b===C.vV},
$S:0}
B.deK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deH(x,d))},
$S:7}
B.deH.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.deL.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deG(x,d))},
$S:7}
B.deG.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.deC.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.deD.prototype={
$0(){return this.a.e=!1},
$S:0}
B.deE.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.deF.prototype={
$1(d){return this.a.d.NU(0,A.du(0,0,0,C.i.T(d),0,0))},
$S:6}
B.dfm.prototype={
$0(){var x=this.a.a
return B.rZ(x.c,x.d)},
$S:2155}
B.dfn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dfo.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dfp.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dfq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dfr.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dft.prototype={
$0(){var x=this.a
x.l(new B.dfs(x))},
$S:0}
B.dfs.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hj(0)
else x.qw(0)},
$S:0}
B.dfi.prototype={
$1(d){return this.a.RS(this.b)},
$S:12}
B.dfj.prototype={
$1(d){return this.a.RR(this.b)},
$S:12}
B.dfa.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfb.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfc.prototype={
$1(d){return D.hHF},
$S:z+25}
B.dfh.prototype={
$2(d,e){if(d)B.WD()},
$S:131}
B.dfd.prototype={
$0(){return this.a.aby(this.b)},
$S:0}
B.dfe.prototype={
$0(){return this.a.abv(this.b)},
$S:0}
B.dff.prototype={
$0(){return this.a.afV(this.b)},
$S:0}
B.dfg.prototype={
$0(){return this.a.a3a(this.b)},
$S:0}
B.deB.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dfl.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qA(),$async$$0)
case 2:u.l(new B.dfk(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dfk.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cg3.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nh)},
$S:z+1}
B.cg4.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cg2.prototype={
$2(d,e){return this.bof(d,e)},
bof(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WE(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2156}
B.fIa.prototype={
$1(d){if(d===D.aaP&&(this.a.a.a&30)===0)this.a.h2(0)},
$S:z+27}
B.fIb.prototype={
$0(){},
$S:11}
B.fIM.prototype={
bpR(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fvp(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hvO(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpR(d,e)},
$S:848}
B.fIL.prototype={
$1(d){var x=this
d.b=new B.fIK(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fIK.prototype={
$1(d){return this.bpQ(d)},
bpQ(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b28(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.X.aP(0,n,null)
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
return A.b(B.fvp(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.de(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ac(j)
$.am.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8E(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.de(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aBS.prototype,"gcla","Rr",0)
x(v,"gcm3","K5",0)
x(v,"gclz","yP",0)
x(v=B.aFT.prototype,"gcdm","afT",0)
x(v,"gcdn","a0c",0)
x(v,"gcB7","ajN",0)
x(v=B.aFW.prototype,"gcdo","a0d",0)
x(v,"gcB8","a3w",0)
x(B.aFU.prototype,"gcdp","afU",0)
x(B.aBR.prototype,"gcdu","cdv",4)
x(v=B.aFV.prototype,"gclA","a1r",0)
x(v,"gczH","czI",4)
x(v,"gb5w","aBp",0)
x(v,"gcCD","akc",0)
x(v,"gbUh","YV",0)
x(v,"gcdt","EZ",0)
x(B.aBT.prototype,"gb9l","a3v",0)
x(B.aBQ.prototype,"gcdw","a0e",0)
x(v=B.aBW.prototype,"gb4e","cjN",4)
x(v,"gcdq","afX",0)
x(v=B.aBU.prototype,"gcyB","a3g",0)
x(v,"gb25","afW",0)
w(B.aBP.prototype,"gazV","azW",8)
x(v=B.aBV.prototype,"gcon","ahY",0)
x(v,"gbTL","acm",0)
w(v,"gazV","azW",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aK,[B.ctZ,B.ab2,B.awb,B.aEw,B.aHK,B.jH,B.adC,B.bzg,B.G3,B.YR])
w(B.cu_,B.ctZ)
w(B.b7h,B.ab2)
x(A.ks,[B.ctV,B.ctW,B.ctX,B.ctU,B.ctY,B.cu0,B.cu1,B.cu2,B.cu3,B.cu4,B.cu5,B.cu6,B.cu7,B.fBo,B.h0u,B.h0w,B.h0v,B.h0J,B.h0K,B.fE4,B.deR,B.deT,B.deS,B.deW,B.fG3,B.fGx,B.cfy,B.cfF,B.cfG,B.cfB,B.cfz,B.cfC,B.cfD,B.h0H,B.h0I,B.e1Y,B.e26,B.e24,B.e25,B.fyo,B.fEg,B.fEh,B.cfX,B.fEj,B.fIy,B.fCs,B.fCt,B.cg1,B.h5Y,B.deQ,B.deO,B.e1U,B.e0Q,B.e0W,B.e1e,B.e0V,B.e1l,B.e1F,B.e1G,B.e1H,B.e1c,B.e1u,B.e1t,B.e1v,B.e1w,B.e1x,B.e1z,B.e1A,B.e1s,B.e0Y,B.e0Z,B.e0U,B.e1f,B.e16,B.e14,B.e1k,B.e1E,B.e1R,B.e1S,B.deM,B.deN,B.df9,B.df8,B.df3,B.df1,B.df_,B.df2,B.df4,B.df0,B.deJ,B.deK,B.deL,B.deF,B.dfi,B.dfj,B.dfc,B.cg3,B.cg4,B.fIa,B.fIL,B.fIK])
w(B.b7i,B.awb)
x(A.mG,[B.h0t,B.deU,B.deV,B.fG1,B.fG2,B.fGw,B.e0N,B.e1W,B.e1X,B.e1V,B.e1Z,B.e2_,B.e20,B.e21,B.e22,B.e23,B.e0O,B.e0P,B.fEi,B.deP,B.e1h,B.e1i,B.e0R,B.e0S,B.e0X,B.e1I,B.e1J,B.e1b,B.e1m,B.e10,B.e1d,B.e1y,B.e1n,B.e1o,B.e1p,B.e1q,B.e1r,B.e1_,B.e0T,B.e1g,B.e19,B.e12,B.e17,B.e18,B.e1a,B.e11,B.e1j,B.e1B,B.e1C,B.e1D,B.e1P,B.e1Q,B.e1L,B.e1M,B.e1K,B.e1N,B.e1O,B.df5,B.df6,B.df7,B.deX,B.deZ,B.deY,B.deI,B.deH,B.deG,B.deC,B.deD,B.deE,B.dfm,B.dfn,B.dfo,B.dfp,B.dfq,B.dfr,B.dft,B.dfs,B.dfa,B.dfb,B.dfd,B.dfe,B.dff,B.dfg,B.deB,B.dfl,B.dfk,B.fIb])
x(A.qB,[B.adV,B.Ow,B.ab3,B.PD,B.YQ,B.PC,B.G4])
x(A.ag,[B.a_N,B.Ws,B.Ww,B.Wt,B.a_M,B.Wu,B.a_O,B.a_L,B.QV,B.a_Q,B.a_K,B.a_R])
x(A.ah,[B.aBS,B.aFT,B.aFW,B.aFU,B.aBR,B.aFV,B.aBT,B.aBQ,B.aBW,B.aBU,B.aBP,B.aBV])
x(A.aw,[B.aeo,B.aBO,B.bgO,B.adW,B.adU,B.bgP])
x(A.ml,[B.cfE,B.cfA,B.cfI,B.cfJ,B.h1I,B.e15,B.e13,B.e1T,B.dfh,B.cg2,B.fIM])
x(A.jP,[B.bmj,B.byT])})()
A.nN(b.typeUniverse,JSON.parse('{"b7h":{"ab2":[]},"b7i":{"awb":[]},"a_N":{"ag":[],"w":[]},"aBS":{"ah":["a_N"]},"aeo":{"aw":[],"w":[]},"Ws":{"ag":[],"w":[]},"Ww":{"ag":[],"w":[]},"aFT":{"ah":["Ws"]},"aFW":{"ah":["Ww"]},"bmj":{"jP":[]},"Wt":{"ag":[],"w":[]},"aFU":{"ah":["Wt"]},"a_M":{"ag":[],"w":[]},"Wu":{"ag":[],"w":[]},"adW":{"aw":[],"w":[]},"a_O":{"ag":[],"w":[]},"a_L":{"ag":[],"w":[]},"QV":{"ag":[],"w":[]},"a_Q":{"ag":[],"w":[]},"adU":{"aw":[],"w":[]},"a_K":{"ag":[],"w":[]},"a_R":{"ag":[],"w":[]},"aBR":{"ah":["a_M"]},"byT":{"jP":[]},"aFV":{"ah":["Wu"]},"aBO":{"aw":[],"w":[]},"bgO":{"aw":[],"w":[]},"aBT":{"ah":["a_O"]},"aBQ":{"ah":["a_L"]},"aBW":{"ah":["QV"]},"aBU":{"ah":["a_Q"]},"aBP":{"ah":["a_K"]},"aBV":{"ah":["a_R"]},"bgP":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.aD
return{J:x("nt"),k:x("MY()"),o:x("bq<q,q>"),F:x("zE"),g:x("aA<jH?>"),x:x("aA<~>"),V:x("U<ab>"),O:x("U<u>"),W:x("U<bk>"),Y:x("U<aa<q,Q>>"),t:x("U<aa<q,@>>"),r:x("U<jH>"),w:x("U<+file,name(mJ,q)>"),u:x("U<da>"),s:x("U<q>"),E:x("U<jP>"),a:x("U<e2>"),p:x("U<w>"),Z:x("U<H>"),G:x("bk"),A:x("cC<ah<ag>>"),n:x("ai<jH>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<q,q>"),P:x("aa<q,@>"),f:x("aa<@,@>"),m:x("kK"),e:x("iDS"),af:x("Ff"),U:x("jH"),b:x("cw"),C:x("aK"),aK:x("yy"),ab:x("G3"),br:x("awb"),v:x("YR"),N:x("q"),X:x("bt<G>"),Q:x("mX"),D:x("e2"),aw:x("bl<q>"),cd:x("Y<aa<q,@>>"),c7:x("w"),ch:x("c8<ai<jH>>"),aW:x("c8<e2?>"),aY:x("c8<~>"),cx:x("adV"),b1:x("bo<ai<jH>>"),cf:x("bo<e2?>"),d4:x("bo<~>"),c4:x("aEw"),bG:x("aHK"),q:x("p9"),B:x("pV<G3>"),c6:x("pV<ab3>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jH>?"),aL:x("ai<@>?"),h:x("aa<q,@>?"),l:x("jH?"),R:x("aK?"),c:x("YR?"),d:x("+answerQr,transfer(q,aA<ai<jH>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Ow,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e2?"),cm:x("adC?"),bk:x("aEw?"),ag:x("aHK?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b7I=new A.av(C.aD,2,C.r,-1)
D.cbv=new A.a7(C.a5,C.a9,C.x,C.a6g,null,null)
D.b9m=new A.n(null,null,null,C.mP,null,D.cbv,C.m)
D.baR=new A.n(null,null,null,C.mP,null,C.IO,C.m)
D.ahq=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aiV=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajX=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alK=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fSR=new A.C("Your team portal",null,C.dn,null,null,null,null,null,null,null,null,null)
D.h6R=new A.C("Share the access code and member password with your team. They only sign in once.",null,C.Fu,null,null,null,null,null,null,null,null,null)
D.doT=x([D.fSR,C.al,D.h6R],y.p)
D.bA5=new A.fo(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.doT,null)
D.hbm=new A.C("Create your organization",null,C.fL,null,null,null,null,null,null,null,null,null)
D.fXp=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fu,null,null,null,null,null,null,null,null,null)
D.dGw=x([D.hbm,C.al,D.fXp],y.p)
D.bAf=new A.fo(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGw,null)
D.h7v=new A.C("Team Member sign-in",null,C.fL,null,null,null,null,null,null,null,null,null)
D.h0o=new A.C("Enter the access code and password from your organization.",null,C.Fu,null,null,null,null,null,null,null,null,null)
D.dEc=x([D.h7v,C.al,D.h0o],y.p)
D.bAp=new A.fo(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dEc,null)
D.bGF=new A.P(16,10,16,28)
D.bGO=new A.P(16,14,16,4)
D.bI5=new A.P(20,0,20,16)
D.bIC=new A.P(20,8,20,16)
D.aoG=new A.P(24,22,24,20)
D.a4e=new A.a_(63394,"MaterialIcons",!1)
D.arM=new A.a_(63515,"MaterialIcons",!1)
D.bW4=new A.a_(983813,"MaterialIcons",!1)
D.bTb=new A.a_(62867,"MaterialIcons",!1)
D.bX2=new A.ae(D.bTb,44,C.c,null,null,null)
D.bY8=new A.ae(C.ki,null,C.ac,null,null,null)
D.bZx=new A.ae(C.jC,18,null,null,null,null)
D.c0n=new A.ae(D.a4e,26,C.c,null,null,null)
D.c0Z=new A.ae(C.DH,null,null,null,null,null)
D.c1A=new A.ae(C.DO,null,null,null,null,null)
D.c2N=new A.ae(L.a4q,null,null,null,null,null)
D.c38=new A.ae(C.i1,16,null,null,null,null)
D.c6P=new A.ae(C.tC,16,null,null,null,null)
D.bXk=new A.ae(C.mr,null,null,null,null,null)
D.c7H=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c27=new A.ae(C.I4,null,null,null,null,null)
D.c7M=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c27,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bXG=new A.ae(C.DR,null,null,null,null,null)
D.c7X=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cXL=x([C.fx,C.b5,C.aD],y.O)
D.cdt=new A.a7(C.ay,C.aC,C.x,D.cXL,null,null)
D.cX8=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.SV=x([C.fx,C.aD],y.O)
D.Tb=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nh=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dya=x([C.mZ,C.aD],y.O)
D.etk={iceServers:0}
D.aNt={urls:0}
D.dKr=new A.bq(D.aNt,["stun:stun.l.google.com:19302"],y.o)
D.dKq=new A.bq(D.aNt,["stun:stun1.l.google.com:19302"],y.o)
D.de3=x([D.dKr,D.dKq],A.aD("U<aa<q,q>>"))
D.dJx=new A.bq(D.etk,[D.de3],A.aD("bq<q,@>"))
D.JT=new B.Ow(0,"lanDirect")
D.Uz=new B.Ow(1,"cloudStash")
D.dXp=new B.Ow(2,"inlineInstant")
D.UA=new B.Ow(3,"webrtcLink")
D.AR=new B.Ow(4,"videoCloud")
D.h6Q=new A.C("Receive file",null,C.ns,null,null,null,null,null,null,null,null,null)
D.cMN=x([C.atA,C.aa,D.h6Q],y.p)
D.fl0=new A.c3(C.aL,C.b9,C.h,C.l,null,C.p,null,0,D.cMN,null)
D.eAN=new A.D(C.cm,D.fl0,null)
D.fJ9=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Ji,null,null,null)
D.fTr=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fJ9,null,C.K,null,null,null,null,null,null,null)
D.ezX=new A.D(C.D6,D.fTr,null)
D.bfr=new A.cl(C.z,null,null,D.ezX,null)
D.eH4=new A.cM(0,null,0,28,null,null,D.bfr,null)
D.eHo=new B.ab3(0,"RTCDataChannelConnecting")
D.aSY=new B.ab3(1,"RTCDataChannelOpen")
D.aSZ=new B.ab3(3,"RTCDataChannelClosed")
D.eHp=new B.G4(0,"RTCIceConnectionStateNew")
D.eHq=new B.G4(1,"RTCIceConnectionStateChecking")
D.eHr=new B.G4(2,"RTCIceConnectionStateCompleted")
D.eHs=new B.G4(3,"RTCIceConnectionStateConnected")
D.eHt=new B.G4(4,"RTCIceConnectionStateCount")
D.eHu=new B.G4(5,"RTCIceConnectionStateFailed")
D.eHv=new B.G4(6,"RTCIceConnectionStateDisconnected")
D.aT_=new B.G4(7,"RTCIceConnectionStateClosed")
D.aT0=new B.YQ(0,"RTCIceGatheringStateNew")
D.eHw=new B.YQ(1,"RTCIceGatheringStateGathering")
D.aaP=new B.YQ(2,"RTCIceGatheringStateComplete")
D.aaQ=new B.PC(0,"RTCPeerConnectionStateClosed")
D.aT1=new B.PC(1,"RTCPeerConnectionStateFailed")
D.aT2=new B.PC(2,"RTCPeerConnectionStateDisconnected")
D.aT3=new B.PC(3,"RTCPeerConnectionStateNew")
D.aT4=new B.PC(4,"RTCPeerConnectionStateConnecting")
D.aT5=new B.PC(5,"RTCPeerConnectionStateConnected")
D.eHx=new B.PD(0,"RTCSignalingStateStable")
D.eHy=new B.PD(1,"RTCSignalingStateHaveLocalOffer")
D.eHz=new B.PD(2,"RTCSignalingStateHaveRemoteOffer")
D.eHA=new B.PD(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eHB=new B.PD(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aT6=new B.PD(5,"RTCSignalingStateClosed")
D.fqa=new A.au(160,48)
D.bgH=new A.fm(2,null,null,null,null,C.aD,null,null,null,null)
D.frI=new A.a5(16,16,D.bgH,null)
D.fWK=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ftb=new A.b0(D.fWK,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3u=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ftf=new A.b0(D.h3u,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hcq=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ftm=new A.b0(D.hcq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWj=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ftM=new A.b0(D.fWj,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h7H=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWh=new A.b0(D.h7H,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h98=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fuf=new A.b0(D.h98,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hdV=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fuw=new A.b0(D.hdV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbQ=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new A.b0(D.hbQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hd5=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fvo=new A.b0(D.hd5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fUU=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fvW=new A.b0(D.fUU,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5o=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new A.b0(D.h5o,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZ3=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fwN=new A.b0(D.fZ3,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.he_=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fwR=new A.b0(D.he_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fV9=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fwX=new A.b0(D.fV9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTO=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fxb=new A.b0(D.fTO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQu=new A.C("NGMY DOC SHARE",null,C.aXG,null,null,null,null,null,null,null,null,null)
D.fRW=new A.C("Show this to sender",null,C.iP,null,null,null,null,null,null,null,null,null)
D.fSZ=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fXQ=new A.C("Organization settings",null,C.cH,null,null,null,null,null,null,null,null,null)
D.fYd=new A.C("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.fZe=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fZM=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h1H=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h4x=new A.C("Send to their Doc Share",null,C.nq,null,null,null,null,null,null,null,null,null)
D.h4R=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h5a=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h5M=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h5T=new A.C("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.h6h=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fg,null,null,null,null,null,null,null,null,null)
D.h9E=new A.C("Share files & videos\nwith a scan.",null,C.aXJ,null,null,null,null,null,null,null,null,null)
D.h9Y=new A.C("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.hHF=new B.a_K(null)
D.aed=new B.adV(0,"docShare")
D.aee=new B.adV(1,"gate")
D.XG=new B.adV(2,"gateNoIndividual")})();(function staticFields(){$.aQC=null
$.fsY=function(){var x=y.N
return A.S(x,x)}()
$.Hi=A.S(y.N,y.D)
$.ahZ=A.S(y.N,A.aD("mJ"))
$.Si=A.S(y.N,y.D)
$.ftE=A.S(y.N,A.aD("adC"))
$.cfW=A.S(y.S,A.aD("bzg"))
$.hvN=1
$.ikS=null
$.ikR=null
$.ic1=null
$.hk1=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iEm","hOt",()=>new B.cu_())
x($,"iCg","hoc",()=>C.a.q(A.bC(A.bC(A.bC(A.HQ(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["NBvbW04kS+5lcTmyGgoWt5HvN2o="]=a.current})($__dart_deferred_initializers__);