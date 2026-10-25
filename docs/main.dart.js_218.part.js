((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,Q,R,S,G,I,K,B={ccy:function ccy(){},
hks(d){var x=null,w=new B.b_X(d,D.dPY,new A.oO(x,x,y.c6),new A.oO(x,x,y.B))
w.bqG(d)
return w},
b_X:function b_X(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cct:function cct(d){this.a=d},
ccu:function ccu(d){this.a=d},
ccv:function ccv(d){this.a=d},
ccs:function ccs(d){this.a=d},
ccw:function ccw(d){this.a=d},
hkt(d,e){var x=y.N
x=new B.b_Y(d,e,A.Q(x,y.e),A.Q(x,y.z))
x.bqH(d,e)
return x},
b_Y:function b_Y(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ccz:function ccz(d){this.a=d},
ccA:function ccA(d){this.a=d},
ccB:function ccB(d){this.a=d},
ccC:function ccC(d){this.a=d},
ccD:function ccD(d){this.a=d},
ccE:function ccE(d){this.a=d},
ccF:function ccF(d){this.a=d},
ccG:function ccG(d){this.a=d},
fCK(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.ba("IndexedDB not available"))
return C.xc.Kd(x,"ngmy_doc_share_v1",new B.f1G(),1)},
hqW(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ck(d))
if(y.J.b(d))return new Uint8Array(A.ck(J.eQ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ck(A.AP(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
P4(d,e){return B.hFo(d,e)},
hFo(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$P4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aJX
x=7
return A.b(o==null?$.aJX=B.fCK():o,$async$P4)
case 7:s=g
r=new Uint8Array(A.ck(e))
q=J.mb(s,"blobs","readwrite")
C.ih.lJ(J.m9(q,"blobs"),r,d)
x=8
return A.b(J.oX(q),$async$P4)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P4,w)},
P3(d){return B.hFn(d)},
hFn(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$P3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aJX
x=7
return A.b(o==null?$.aJX=B.fCK():o,$async$P3)
case 7:s=f
r=J.mb(s,"blobs","readonly")
x=8
return A.b(C.ih.yo(J.m9(r,"blobs"),d),$async$P3)
case 8:q=f
x=9
return A.b(J.oX(r),$async$P3)
case 9:o=B.hqW(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P3,w)},
ae3(d){return B.hFm(d)},
hFm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ae3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aJX
x=7
return A.b(p==null?$.aJX=B.fCK():p,$async$ae3)
case 7:s=f
r=J.mb(s,"blobs","readwrite")
C.ih.Ei(J.m9(r,"blobs"),d)
x=8
return A.b(J.oX(r),$async$ae3)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ae3,w)},
f1G:function f1G(){},
ht7(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bk_(w,v))}return u},
h0G(d,e){var x,w={},v=A.aS4("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fm_(w,v,e)
C.uC.xh(v,"change",new B.fm1(w,v,!1))
C.uC.xh(v,"cancel",new B.fm0(w))
$.eG.lR()
v.click()
A.bK(C.abx,new B.flZ(w),y.H)},
fm_:function fm_(d,e,f){this.a=d
this.b=e
this.c=f},
fm1:function fm1(d,e,f){this.a=d
this.b=e
this.c=f},
fm0:function fm0(d){this.a=d},
flZ:function flZ(d){this.a=d},
Bz(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Bz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd5()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRv()?3:4
break
case 3:x=5
return A.b(B.fX_(e,d,s,!0,!1,f,g,h,!1,i),$async$Bz)
case 5:x=1
break
case 4:x=6
return A.b(B.OI(d,s,f,g,h,i),$async$Bz)
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
return A.b(B.GE(s,d),$async$Bz)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eYg(s,d),$async$Bz)
case 14:x=12
return A.b(r.fX_(q,p,o,n,m,l,k,j,a1,i),$async$Bz)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cz(A.eN(new B.fmd(s,i,d,f,g,h),!1,null,y.H)),$async$Bz)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cz(A.eN(new B.fme(s,i,d,f,g,h),!1,null,y.H)),$async$Bz)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Bz,w)},
OI(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OI=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVJ(e),$async$OI)
case 3:u=k
x=4
return A.b(B.am2(d,e,!1),$async$OI)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GE(e,d),$async$OI)
case 7:if(k){v=D.a4W
x=1
break}x=8
return A.b(B.SE(e),$async$OI)
case 8:v=t?D.Rp:D.a4X
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVH(d,e)){v=D.a4W
x=1
break}x=11
return A.b(B.SE(e),$async$OI)
case 11:v=t?D.Rp:D.a4X
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fy3(d,e)){v=D.a4W
x=1
break}x=14
return A.b(B.SE(e),$async$OI)
case 14:v=D.Rp
x=1
break
case 13:v=t?D.Rp:D.a4X
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
eYg(d,e){var x=0,w=A.j(y.y),v
var $async$eYg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVH(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVJ(d),$async$eYg)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYg,w)},
fX_(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cz(A.eN(new B.f2Z(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fSh(d,e,f,g,h,i,j){return new B.WK(e,j,d,g,h,i,f,null)},
f4V(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f4V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.as()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,new B.f4Y(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f4V)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f4V,w)},
f5p(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f5p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.as()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,new B.f5r(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f5p)
case 3:q=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
r.R$=u
r.O$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f5p,w)},
fCS(d,e,f,g){var x=null,w=A.U(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b0(4,A.m(16),C.V),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
feI(d,e){var x=0,w=A.j(y.H),v
var $async$feI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SE(e),$async$feI)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$feI,w)},
fmd:function fmd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fme:function fme(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9w:function a9w(d,e){this.a=d
this.b=e},
f2Z:function f2Z(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WK:function WK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
avS:function avS(){this.c=this.a=this.d=null},
cVU:function cVU(d,e){this.a=d
this.b=e},
cVR:function cVR(d){this.a=d},
cVT:function cVT(d){this.a=d},
cVS:function cVS(d){this.a=d},
cVW:function cVW(){},
cVV:function cVV(d){this.a=d},
a9Y:function a9Y(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayl:function ayl(d,e){this.a=d
this.b=e},
aBq:function aBq(d,e,f){this.a=d
this.b=e
this.c=f},
f4Y:function f4Y(d,e,f){this.a=d
this.b=e
this.c=f},
f4W:function f4W(d){this.a=d},
f4X:function f4X(d,e,f){this.a=d
this.b=e
this.c=f},
f5r:function f5r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f5q:function f5q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1o(d,e,f,g,h){return B.hft(d,e,f,g,h)},
hft(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1o=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.di(d,new B.c1p(s,e,h,g,f,q),y.g),y.l),$async$c1o)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1o,w)},
aVE(d,e,f,g,h){return B.hfu(d,e,f,g,h)},
hfu(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVE=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ard("GET",d)
o=A.fuy()
if(o==null)o=new A.JQ(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cI(0,C.Df),$async$aVE)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.B4(),$async$aVE)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ae(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVE,w)},
aVD(d){return B.hfr(d)},
hfr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.un(d,null).cI(0,C.nb),$async$aVD)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aC(0,A.io(A.im(p.e)).c4(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVD,w)},
c1n(d){return B.hfs(d)},
hfs(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.un(d,null).cI(0,C.oT),$async$c1n)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c4(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a5(o)
$.ak.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1n,w)},
c1p:function c1p(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j7:function j7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
GC(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hfz(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GC(C.a.aV(u,v.length))}return null},
hfA(d){var x=B.GC(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hfv(){var x,w=$.oV(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aE(10)
return C.d.fJ(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aE(24)]},
a4k(d){return B.hfw(d)},
hfw(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bE),$async$a4k)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4k,w)},
a4l(d,e){return B.hfx(d,e)},
hfx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4l=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cy,null),$async$a4l)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4l,w)},
Ad(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ad=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.au(),$async$Ad)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GC(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4m(r),$async$Ad)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4k("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ad)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GC(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ad)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hfv()
x=14
return A.b(B.a4m(m),$async$Ad)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4l("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ad)
case 15:k=f
x=16
return A.b(B.a4l("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ad)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ad)
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
return A.i($async$Ad,w)},
a4m(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GC(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4k("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4m)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4m,w)},
a4n(d,e,f,g){return B.hfB(d,e,f,g)},
hfB(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4n=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gag(d)){v=!1
x=1
break}r=B.GC(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4m(r),$async$a4n)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cO(d,0,new B.c1v())>1048576||g.bc(d,new B.c1w())){v=B.CZ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4y("myCode",d,a0),$async$a4n)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ch(s)||J.aa(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.CZ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aVM(u,g.gH(d),a0),$async$a4n)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oV().aE(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c1x(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVF(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4n)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4n,w)},
CZ(d,e,f,g,h){return B.hfy(d,e,f,g,h)},
hfy(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CZ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$CZ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cO(a6,0,new B.c1r())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oV().aE(9999)
h=Date.now()
g=""+1000*h+"_"+C.cz.aE(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GG(a9,q)
a0=new A.Ir(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$CZ)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eJ().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.on(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7O(a1.a,a4,"media",a1.d,a2).w_(m,n,new A.Cj(!0,q.c)),$async$CZ)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$CZ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMm(r),$async$CZ)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c1s(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVF(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$CZ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMm(r),$async$CZ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CZ,w)},
aVF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4k(t),$async$aVF)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b3(r,new B.c1q(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4l(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVF,w)},
Lm(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lm=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4k("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lm)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ch(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.Y(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aVG(k,a0),$async$Lm)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aVL(h),$async$Lm)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SL(g,a0),$async$Lm)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("E.E")
e=A.z(new A.a3(r,new B.c1t(),q),n)
d=A.z(new A.a3(r,new B.c1u(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dg(d,0,A.dK(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a4l("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Lm)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lm,w)},
aVG(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ch(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a4(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aQ(o.h(p,"partCount"))
j=o==null?null:C.k.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hJ4(k,j)
C.d.v(s,i)
x=5
return A.b(B.Bx(l,m,"Received via My Code",t,e,i),$async$aVG)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMm(s),$async$aVG)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVG,w)},
c1v:function c1v(){},
c1w:function c1w(){},
c1x:function c1x(){},
c1r:function c1r(){},
c1s:function c1s(){},
c1q:function c1q(){},
c1t:function c1t(){},
c1u:function c1u(){},
fma(d,e){var x=0,w=A.j(y.H)
var $async$fma=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cz(A.eN(new B.fmb(e),!1,null,y.H)),$async$fma)
case 2:return A.h(null,w)}})
return A.i($async$fma,w)},
byl(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cz(A.eN(new B.fmc(g,e,f),!1,null,y.y)),$async$byl)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byl,w)},
fmb:function fmb(d){this.a=d},
fmc:function fmc(d,e,f){this.a=d
this.b=e
this.c=f},
SB:function SB(d,e){this.c=d
this.a=e},
azI:function azI(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFh:function dFh(d,e){this.a=d
this.b=e},
SF:function SF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azL:function azL(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGq:function dGq(d){this.a=d},
dGr:function dGr(d){this.a=d},
dGs:function dGs(d){this.a=d},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGu:function dGu(d){this.a=d},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d,e){this.a=d
this.b=e},
dGy:function dGy(d){this.a=d},
dGB:function dGB(){},
dGz:function dGz(d){this.a=d},
dGA:function dGA(d,e){this.a=d
this.b=e},
ben:function ben(){},
SC:function SC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azJ:function azJ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFi:function dFi(d){this.a=d},
dFj:function dFj(d){this.a=d},
fy4(d){var x=d.hC
if(x>=0)return C.o.L(x)
return 10},
hfD(d){var x=d.k8
if(x>=0)return x
return 4.99},
hfC(d){var x=d.kQ,w=y.N
w=x.iC(x,new B.c1z(),w,w)
return w},
fNs(d){var x=d.k9,w=y.N
w=x.iC(x,new B.c1A(),w,w)
return w},
aVJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.au(),$async$aVJ)
case 7:s=f
r=A.t(p)
r=A.aR(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aVJ,w)},
a4p(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.au(),$async$a4p)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4p,w)},
SE(d){var x=0,w=A.j(y.H),v,u
var $async$SE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.au(),$async$SE)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SE,w)},
fy3(d,e){var x,w,v
if(B.hfD(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hfC(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.ca(new A.N(Date.now(),0,!1))},
aVH(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fNs(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.ca(new A.N(Date.now(),0,!1))},
fNt(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Y(B.fNs(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.ca(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dA(f,0,0,0,0,0).a).a4().aa())
d.k9=w},
am3(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$am3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.au(),$async$am3)
case 7:s=f
r=A.t(p)
r=A.eX(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$am3,w)},
am4(d){var x=0,w=A.j(y.H),v,u,t
var $async$am4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.am3(d),$async$am4)
case 3:u=f
x=5
return A.b(A.au(),$async$am4)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$am4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$am4,w)},
am2(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$am2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fy4(d)
if(u<=0){v=!1
x=1
break}if(B.fy3(d,e)){v=!1
x=1
break}x=3
return A.b(B.am3(e),$async$am2)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am2,w)},
aVI(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GE(e,d),$async$aVI)
case 3:if(g){v=-1
x=1
break}u=B.fy4(d)
if(u<=0){v=-1
x=1
break}if(B.fy3(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.am3(e),$async$aVI)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVI,w)},
c1C(d,e,f){var x=0,w=A.j(y.y),v
var $async$c1C=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GE(e,d),$async$c1C)
case 3:if(h){v=!1
x=1
break}v=B.am2(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1C,w)},
c1B(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c1B=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
x=3
return A.b(B.c1C(d,u,i.gRv()),$async$c1B)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1B,w)},
a4o(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4o=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
if(i.gRv()){v=!0
x=1
break}if(B.aVH(d,u)){v=!0
x=1
break}x=5
return A.b(A.kX(u,C.P_),$async$a4o)
case 5:x=k?3:4
break
case 3:B.fNt(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4o)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kD(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.P_,"Doc Share for Organizations"),$async$a4o)
case 7:if(!k){v=!1
x=1
break}B.fNt(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4o)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4o,w)},
c1z:function c1z(){},
c1A:function c1A(){},
fmG(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fmG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fmG)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eV9.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eV9.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmG,w)},
hL8(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eV9.bk($.eV9,new B.fmI(d))},
fmI:function fmI(d){this.a=d},
eWu(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eWu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mB(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.ja,null,y.H),$async$eWu)
case 3:C.ys.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eG.lR()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eWu,w)},
ad_(d,e,f){var x=0,w=A.j(y.H),v
var $async$ad_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eVG.m(0,d,new B.a9d(A.bi(e,!0,v)))
x=3
return A.b(A.au(),$async$ad_)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.ak(A.D(["parts",e,"size",f],v,y.C),null)),$async$ad_)
case 2:return A.h(null,w)}})
return A.i($async$ad_,w)},
acU(d){return B.huP(d)},
huP(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$acU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eVG.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.au(),$async$acU)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b3(s,new B.eZU(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.L(o)
q=m==null?0:m
p=new B.a9d(r)
$.eVG.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$acU,w)},
Oy(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Oy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ck(e))
$.Ez.m(0,d,u)
x=3
return A.b(B.P4(d,u),$async$Oy)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
aKg(d){return B.huN(d)},
huN(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Ez.h(0,d)
if(n!=null&&!C.aD.gag(n)){v=n
x=1
break}x=3
return A.b(B.P3(d),$async$aKg)
case 3:p=f
if(p!=null&&!C.aD.gag(p)){$.Ez.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.au(),$async$aKg)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aF(r)
x=!J.ch(q)?9:10
break
case 9:B.Oy(d,q)
x=11
return A.b(J.hB(s,d),$async$aKg)
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
return A.i($async$aKg,w)},
hrg(d){if(d==null)return A.f2(null,y.K)
if(y.J.b(d))return A.f2(new Uint8Array(A.ck(J.eQ(d,0,null))),y.K)
if(y.D.b(d))return A.f2(new Uint8Array(A.ck(d)),y.K)
if(y.Q.b(d))return A.f2(new Uint8Array(A.ck(A.AP(d,0,null))),y.K)
if(y.I.b(d))return A.f2(new Uint8Array(A.ck(d)),y.K)
return A.f2(null,y.K)},
a_7(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bc($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f3a(r,t),!1,s)
A.fA(r,"error",new B.f3b(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i_(0,C.Jo,new B.f3c())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_7,w)},
aKA(d,e,f){return B.hx_(d,e,f)},
hx_(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKA=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.U(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a_7(i),$async$aKA)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.P4(o,p),$async$aKA)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ad_(k,j,s),$async$aKA)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a5(h)
$.ak.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKA,w)},
aKz(d,e,f){return B.hwZ(d,e,f)},
hwZ(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKz=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKA(d,e,f),$async$aKz)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_7(f),$async$aKz)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Ez.m(0,s,r)
$.OQ.m(0,s,r)
x=11
return A.b(B.Oy(s,r),$async$aKz)
case 11:q=h
if(!q)$.ak.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a5(m)
$.ak.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKz,w)},
Ae(d,e,f,g,h,i){return B.hfM(d,e,f,g,h,i)},
hfM(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ae=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cz.aE(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j7(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aVP(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Oy(s,d),$async$Ae)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.au(),$async$Ae)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcs().aF(d)),$async$Ae)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.ak.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.zn(e),$async$Ae)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.EI(e,j),$async$Ae)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ae,w)},
SG(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zn(d),$async$SG)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cz.aE(99999)
n=p.b
l=o.type
l.toString
k=B.fNv(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j7(m,n,k,l,j,"From folder",null,B.aVP(),null)
$.adr.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_7(o),$async$SG)
case 7:g=a1
x=g!=null&&!C.aD.gag(g)?8:10
break
case 8:$.Ez.m(0,h,g)
$.OQ.m(0,h,g)
B.Oy(h,g)
x=9
break
case 10:x=11
return A.b(B.aKz(d,m,o),$async$SG)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EI(d,t),$async$SG)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
fy8(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fy8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fNv(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GF(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aD.gag(s)){v=B.Ae(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy8,w)},
GF(d,e,f,g,h,i){return B.hfL(d,e,f,g,h,i)},
hfL(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GF=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cz.aE(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ir(A.dK(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GF)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ch(m)){x=6
break}J.fR(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.ck(J.PC(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kk(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.P4(k,l),$async$GF)
case 11:J.ci(q,k);++p
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
return A.b(j.a9(0),$async$GF)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.P4(k,new Uint8Array(A.ck(n))),$async$GF)
case 15:J.ci(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ad_(r,q,g),$async$GF)
case 16:f=new B.j7(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aVP(),null)
x=17
return A.b(B.zn(d),$async$GF)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.EI(d,e),$async$GF)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GF,w)},
SI(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SI=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adr.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_7(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.acU(s),$async$SI)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.P3(u[o]),$async$SI)
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
v=A.AP(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OQ.h(0,s)
if(i==null)i=$.Ez.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qK(d,e),$async$SI)
case 12:i=a0
if(i!=null&&!C.aD.gag(i))$.OQ.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AP(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
fNv(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gai(x):""
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
qK(d,e){return B.hfN(d,e)},
hfN(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qK=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OQ.h(0,f)
if(e==null)e=$.Ez.h(0,f)
if(e!=null&&!C.aD.gag(e)){v=e
x=1
break}s=$.adr.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_7(s),$async$qK)
case 9:r=a3
if(r!=null&&!C.aD.gag(r)){$.Ez.m(0,f,r)
$.OQ.m(0,f,r)
B.Oy(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a5(d)
$.ak.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.acU(f),$async$qK)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auG(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.P3(g[l]),$async$qK)
case 16:k=a3
if(k!=null&&!C.aD.gag(k))n.G(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akg()
if(!C.aD.gag(r)){$.Ez.m(0,f,r)
$.OQ.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKg(f),$async$qK)
case 17:j=a3
if(j!=null&&!C.aD.gag(j)){$.OQ.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SI(a0,a1,0,g),$async$qK)
case 20:i=a3
if(i!=null&&!C.aD.gag(i)){h=new Uint8Array(A.ck(i))
$.Ez.m(0,f,h)
$.OQ.m(0,f,h)
B.Oy(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qK,w)},
hfQ(d){var x,w,v=$.adr.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hfR(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hfO(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ama(d,e,f,g,h){return B.hfP(d,e,f,g,h)},
hfP(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ama=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adr.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_7(s),$async$ama)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qK(g,e),$async$ama)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eJ().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w_(h,r,new A.Cj(!0,e.c)),$async$ama)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.ak.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ama,w)},
fNx(d,e,f,g,h){var x,w,v,u,t=$.fNw
$.fNw=t+1
x=Date.now()
w=""+1000*x+"_"+C.cz.aE(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c1N.m(0,t,new B.bqz(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auG(u)))
return t},
fy9(d){var x=0,w=A.j(y.H)
var $async$fy9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fy9,w)},
GG(d,e){var $async$GG=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adr.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.U(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.px(B.SI(d,e,p,o<q?o:q),$async$GG,w)
case 8:n=a1
x=n!=null&&!C.aD.gag(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.px(A.E8(n),$async$GG,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.px(B.acU("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GG,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.px(B.P3(h[l]),$async$GG,w)
case 18:k=a1
x=k!=null&&!C.aD.gag(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.px(A.E8(k),$async$GG,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.px(B.qK(d,e),$async$GG,w)
case 22:j=a1
x=j!=null&&!C.aD.gag(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.px(A.E8(A.AP(j,p,o<i?o:i)),$async$GG,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.px(null,0,w)
case 2:return A.px(t.at(-1),1,w)}})
var x=0,w=A.fVV($async$GG,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fXF(w)},
aVR(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aVR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c1N.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a1G(),$async$aVR)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVR,w)},
SH(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c1N.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a1G(),$async$SH)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ad_(r.c,u,r.z),$async$SH)
case 4:t=new B.j7(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aVP(),null)
u=r.a
x=5
return A.b(B.zn(u),$async$SH)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.EI(u,s),$async$SH)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
a4v(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c1N.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ae3(u[s]),$async$a4v)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4v,w)},
c1P(d,e,f){var x=0,w=A.j(y.H)
var $async$c1P=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvx(d,e,f),$async$c1P)
case 2:return A.h(null,w)}})
return A.i($async$c1P,w)},
c1Q(d,e,f){var x=0,w=A.j(y.H)
var $async$c1Q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvy(d,e,f),$async$c1Q)
case 2:return A.h(null,w)}})
return A.i($async$c1Q,w)},
D_(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zn(d),$async$D_)
case 2:p=g
J.mX(p,new B.c1O(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Ez.W(0,v)
$.adr.W(0,e)
x=3
return A.b(B.acU(v),$async$D_)
case 3:u=g
$.eVG.W(0,v)
x=4
return A.b(A.au(),$async$D_)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D_)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D_)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ae3(s[q]),$async$D_)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ae3(v),$async$D_)
case 13:x=14
return A.b(B.EI(d,p),$async$D_)
case 14:return A.h(null,w)}})
return A.i($async$D_,w)},
aVQ(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aVQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qK(d,e),$async$aVQ)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eWu(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVQ,w)},
zn(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$zn)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b3(u,new B.f3d(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zn,w)},
EI(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.au(),$async$EI)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b3(e,new B.f74(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.ak(t,null)),$async$EI)
case 3:return A.h(null,w)}})
return A.i($async$EI,w)},
bvx(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zn(d),$async$bvx)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f1S(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).az_(f))
x=4
return A.b(B.EI(d,u),$async$bvx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvx,w)},
bvy(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zn(d),$async$bvy)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f1T(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cwS(f))
x=4
return A.b(B.EI(d,u),$async$bvy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvy,w)},
a9d:function a9d(d){this.a=d},
eZU:function eZU(){},
f3a:function f3a(d,e){this.a=d
this.b=e},
f3b:function f3b(d){this.a=d},
f3c:function f3c(){},
c1O:function c1O(d){this.a=d},
bqz:function bqz(d,e,f,g,h,i,j,k,l){var _=this
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
f3d:function f3d(){},
f74:function f74(){},
f1S:function f1S(d){this.a=d},
f1T:function f1T(d){this.a=d},
a4w(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bc(d,new B.c1T())?3:4
break
case 3:x=5
return A.b(B.aVS(d,e),$async$a4w)
case 5:u=g
if(u!=null){t=u.c
B.Lo(d,u.b,e,t)}v=u
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
return A.b(B.aVN(s),$async$a4w)
case 10:case 9:if(g){v=new A.NW(1,D.OD,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SJ(d,e),$async$a4w)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SO(!0,!0,d,e),$async$a4w)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lo(d,D.xJ,e,t)
v=new A.NW(p,D.xJ,t)
x=1
break}v=B.c1S(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
SJ(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4y(null,d,e),$async$SJ)
case 3:p=g
try{u=C.Q.aC(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aVM(p,d.length,e),$async$SJ)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c1Q(e,C.d.gI(d).a,r.b),$async$SJ)
case 7:case 6:q=r.a
x=8
return A.b(B.Lo(d,D.OD,e,q),$async$SJ)
case 8:v=new A.NW(d.length,D.OD,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
SK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lW(D.lZ)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4x(d,e),$async$SK)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c1L(s,d,e,t),$async$SK)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aVN(t),$async$SK)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qK(e,d),$async$SK)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SJ(A.a([d],y.r),e),$async$SK)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
SM(){var x=0,w=A.j(y.H)
var $async$SM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fy2(),$async$SM)
case 2:x=3
return A.b(B.aMD(),$async$SM)
case 3:return A.h(null,w)}})
return A.i($async$SM,w)},
a4x(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aVP()
x=3
return A.b(B.c1P(e,d.a,u),$async$a4x)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
Lo(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OD&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4x(p,f),$async$Lo)
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
return A.b(B.c1K(o,p,u,f),$async$Lo)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c1L(o,p,f,t),$async$Lo)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c1J(o,u,p,f),$async$Lo)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lo,w)},
aVS(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aVS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c1R(e,d),$async$aVS)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SO(!1,!0,d,e),$async$aVS)
case 4:u=g
if(u!=null){t=u.b
v=new A.NW(u.a,D.xJ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVS,w)},
c1R(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c1R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SI(d,s,0,1),$async$c1R)
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
return A.i($async$c1R,w)},
c1S(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c1S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4y(null,d,e),$async$c1S)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fNu(u)
if(t.length>800){v=null
x=1
break}v=new A.NW(d.length,D.dcH,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1S,w)},
amb(d,e,f){return B.hfU(d,e,f)},
hfU(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amb=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.ma(g,1)
x=B.fy7(g)?3:4
break
case 3:x=5
return A.b(B.c1M(g),$async$amb)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ma(g,13))
try{k=B.D0(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a5(a1)
$.ak.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cS(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ma(g,13))
u=9
x=12
return A.b(B.aVL(q),$async$amb)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SL(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a5(f)
$.ak.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fy6(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SL(n,a0)
v=k
x=1
break}catch(a1){m=A.a5(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GH(C.a.i(J.ma(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GH(C.a.i(J.ma(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cw(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GH(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SL(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amb,w)},
GH(d,e,f){return B.hfS(d,e,f)},
hfS(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GH=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cp(A.t(s)+"/manifest.json",0,null)
q=A.cp(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVD(r),$async$GH)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVD(A.cp(s,0,null)),$async$GH)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1o(o,r,a1,n,a2),$async$GH)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.c1n(q),$async$GH)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SL(l,a2),$async$GH)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ch(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a5(d)
$.ak.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GH,w)},
a4y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qK(f,r),$async$a4y)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.D(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcs().aF(q)],t,s))
x=3
break
case 4:u=A.Q(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.N(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.ak(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
SL(d,e){return B.hfT(d,e)},
hfT(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SL=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aC(0,a2,null)
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
o=J.y(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cw.aF(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.Ae(i,a3,d,k,l,o),$async$SL)
case 9:h=a5
if(h!=null)J.ci(n,h)
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
g=A.a5(a1)
$.ak.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SL,w)},
Ln:function Ln(d,e){this.a=d
this.b=e},
c1T:function c1T(){},
ZH(d){var x=A.K(d).ax.a===C.H,w=x?D.a9r:D.a7N,v=x?D.aaP:C.c,u=x?C.aN:C.M,t=x?C.bO:C.ai,s=x?D.a8J:C.aJ
return new A.aCC([w,s,v,u,t,x?C.eS:C.bU])},
h1n(d,e){var x=e?C.x.j(0.72):C.aV
return A.cb(null,x,!0,null,new B.fqD(e),d,null,!0,!0,y.N)},
c1y(d,e,f,g,h,i,j,k,l){return new B.SD(e,l,d,f,k,j,g,h,i,null)},
WM(d,e,f,g,h,i,j){return new B.b96(g,h,j,e,i,d,f,null)},
fqD:function fqD(d){this.a=d},
WJ:function WJ(d,e){this.c=d
this.a=e},
avR:function avR(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cVQ:function cVQ(d){this.a=d},
cVO:function cVO(d){this.a=d},
cVP:function cVP(d){this.a=d},
bqe:function bqe(){},
SD:function SD(d,e,f,g,h,i,j,k,l,m){var _=this
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
azK:function azK(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGo:function dGo(d){this.a=d},
dFM:function dFM(d,e){this.a=d
this.b=e},
dFN:function dFN(d,e){this.a=d
this.b=e},
dFl:function dFl(d,e,f){this.a=d
this.b=e
this.c=f},
dFk:function dFk(d){this.a=d},
dFm:function dFm(d,e){this.a=d
this.b=e},
dFr:function dFr(d,e,f){this.a=d
this.b=e
this.c=f},
dFq:function dFq(d){this.a=d},
dGc:function dGc(d,e){this.a=d
this.b=e},
dGd:function dGd(d){this.a=d},
dFJ:function dFJ(d,e,f){this.a=d
this.b=e
this.c=f},
dFG:function dFG(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFp:function dFp(d){this.a=d},
dFR:function dFR(d){this.a=d},
dFQ:function dFQ(){},
dFv:function dFv(d){this.a=d},
dG9:function dG9(d,e){this.a=d
this.b=e},
dGa:function dGa(d,e){this.a=d
this.b=e},
dGb:function dGb(d,e){this.a=d
this.b=e},
dFH:function dFH(d,e){this.a=d
this.b=e},
dFI:function dFI(d,e){this.a=d
this.b=e},
dG2:function dG2(d,e){this.a=d
this.b=e},
dFZ:function dFZ(d){this.a=d},
dFY:function dFY(d){this.a=d},
dG_:function dG_(){},
dG0:function dG0(){},
dG1:function dG1(d,e){this.a=d
this.b=e},
dG3:function dG3(){},
dG4:function dG4(d){this.a=d},
dFX:function dFX(d,e){this.a=d
this.b=e},
dFS:function dFS(d){this.a=d},
dFT:function dFT(d){this.a=d},
dFU:function dFU(d){this.a=d},
dFV:function dFV(d){this.a=d},
dFW:function dFW(d){this.a=d},
dFs:function dFs(){},
dFt:function dFt(d){this.a=d},
dFu:function dFu(d,e){this.a=d
this.b=e},
dFo:function dFo(d,e){this.a=d
this.b=e},
dFn:function dFn(d,e,f){this.a=d
this.b=e
this.c=f},
dFK:function dFK(d){this.a=d},
dFL:function dFL(d,e,f){this.a=d
this.b=e
this.c=f},
dFE:function dFE(d,e){this.a=d
this.b=e},
dFA:function dFA(d){this.a=d},
dFx:function dFx(d,e,f){this.a=d
this.b=e
this.c=f},
dFB:function dFB(d){this.a=d},
dFC:function dFC(d){this.a=d},
dFD:function dFD(){},
dFF:function dFF(d,e){this.a=d
this.b=e},
dFy:function dFy(d){this.a=d},
dFw:function dFw(d,e,f){this.a=d
this.b=e
this.c=f},
dFz:function dFz(){},
dFP:function dFP(d){this.a=d},
dFO:function dFO(d,e){this.a=d
this.b=e},
dG8:function dG8(d,e){this.a=d
this.b=e},
dG5:function dG5(d){this.a=d},
dG6:function dG6(d,e){this.a=d
this.b=e},
dG7:function dG7(d){this.a=d},
dGl:function dGl(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGk:function dGk(d){this.a=d},
dGm:function dGm(){},
dGn:function dGn(d,e){this.a=d
this.b=e},
dGf:function dGf(d,e){this.a=d
this.b=e},
dGg:function dGg(d,e,f){this.a=d
this.b=e
this.c=f},
dGe:function dGe(d,e,f){this.a=d
this.b=e
this.c=f},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGi:function dGi(d,e){this.a=d
this.b=e},
avO:function avO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b95:function b95(d,e,f){this.c=d
this.d=e
this.a=f},
cVM:function cVM(){},
cVN:function cVN(){},
a9x:function a9x(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cW9:function cW9(){},
cW8:function cW8(d){this.a=d},
WL:function WL(d,e,f){this.c=d
this.d=e
this.a=f},
avT:function avT(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cW5:function cW5(d){this.a=d},
cW6:function cW6(d,e,f){this.a=d
this.b=e
this.c=f},
cW7:function cW7(d,e){this.a=d
this.b=e},
cW3:function cW3(d,e){this.a=d
this.b=e},
cW1:function cW1(d){this.a=d},
cW_:function cW_(d){this.a=d},
cVX:function cVX(d){this.a=d},
cW2:function cW2(d){this.a=d},
cVZ:function cVZ(d){this.a=d},
cW4:function cW4(d){this.a=d},
cW0:function cW0(d){this.a=d},
cVY:function cVY(d){this.a=d},
WI:function WI(d,e,f){this.c=d
this.d=e
this.a=f},
avQ:function avQ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cVJ:function cVJ(d){this.a=d},
cVI:function cVI(d,e){this.a=d
this.b=e},
cVK:function cVK(d){this.a=d},
cVH:function cVH(d,e){this.a=d
this.b=e},
cVL:function cVL(d){this.a=d},
cVG:function cVG(d,e){this.a=d
this.b=e},
cVC:function cVC(d){this.a=d},
cVD:function cVD(d){this.a=d},
cVE:function cVE(d,e){this.a=d
this.b=e},
cVF:function cVF(d){this.a=d},
Ny:function Ny(d,e,f){this.c=d
this.d=e
this.a=f},
avW:function avW(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWm:function cWm(d){this.a=d},
cWn:function cWn(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWp:function cWp(d){this.a=d},
cWq:function cWq(d,e){this.a=d
this.b=e},
cWr:function cWr(d){this.a=d},
cWt:function cWt(d){this.a=d},
cWs:function cWs(d){this.a=d},
WN:function WN(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
avU:function avU(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWi:function cWi(d,e){this.a=d
this.b=e},
cWj:function cWj(d,e){this.a=d
this.b=e},
cWa:function cWa(d,e,f){this.a=d
this.b=e
this.c=f},
cWb:function cWb(d){this.a=d},
cWc:function cWc(){},
cWh:function cWh(){},
cWd:function cWd(d,e){this.a=d
this.b=e},
cWe:function cWe(d,e){this.a=d
this.b=e},
cWf:function cWf(d,e){this.a=d
this.b=e},
cWg:function cWg(d,e){this.a=d
this.b=e},
a9v:function a9v(d,e){this.c=d
this.a=e},
cVB:function cVB(d){this.a=d},
WH:function WH(d){this.a=d},
avP:function avP(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WO:function WO(d,e){this.c=d
this.a=e},
avV:function avV(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWl:function cWl(d){this.a=d},
cWk:function cWk(d){this.a=d},
b96:function b96(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hfV(){var x,w=$.oV(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aE(32)]
return"VT"+C.d.fJ(v)},
Lp(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$Lp)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$Lp)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Y(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.Q(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lp,w)},
a4z(d){return B.hfW(d)},
hfW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4z)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4z)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.ak.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4z,w)},
SN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lp(),$async$SN)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dP(A.Y(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4z(s),$async$SN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
SO(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bW(),$async$SO)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.S(f).k("a3<1>")
u=A.z(new A.a3(f,new B.c1V(),t),t.k("E.E"))}if(u.length===0){v=null
x=1
break}s=B.hfV()
t=A.S(u).k("I<1,a0<n,aC>>")
r=A.z(new A.I(u,new B.c1W(s),t),t.k("ai.E"))
x=6
return A.b(B.Lp(),$async$SO)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4z(q),$async$SO)
case 7:x=8
return A.b(B.a4A(r,u,g,s),$async$SO)
case 8:v=new A.bkr(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
amc(d){var x=0,w=A.j(y.y),v,u,t
var $async$amc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lp(),$async$amc)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amc,w)},
c1X(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c1X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lp(),$async$c1X)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a4(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1X,w)},
a4A(d,e,f,g){return B.hfX(d,e,f,g)},
hfX(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4A=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.ama("media",r,new B.c1U(s,e,g),f,q),$async$a4A)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SN(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4A)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SN(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4A)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SN(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4A)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4A,w)},
D0(d,e,f){return B.hfY(d,e,f)},
hfY(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D0=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$D0)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amc(b3),$async$D0)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kQ,null,g),$async$D0)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amc(b3),$async$D0)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lp(),$async$D0)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gH(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a4(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.eJ().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.on(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7O(a8.a,b0,"media",a8.d,a9).Bp(m)
k=A.cp(l,0,null)
x=17
return A.b(B.aVE(k,n,o,s,b7),$async$D0)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a5(b4)
$.ak.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
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
case 18:g.W(e,b3)
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.eJ().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.on(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7O(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D0)
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
a0=A.dP(A.Y(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4z(e),$async$D0)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D0,w)},
c1V:function c1V(){},
c1W:function c1W(d){this.a=d},
c1U:function c1U(d,e,f){this.a=d
this.b=e
this.c=f},
aMD(){var x=0,w=A.j(y.H),v,u
var $async$aMD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hqJ=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aMD)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aMD)
case 3:u=$.fD2
u=u==null?null:u.bw(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aMD)
case 4:$.fD2=$.hyJ=$.hyK=null
return A.h(null,w)}})
return A.i($async$aMD,w)},
f6H(d){var x=0,w=A.j(y.H),v,u
var $async$f6H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a22){x=1
break}u=new A.bc($.bs,y.d4)
d.c=new B.f6I(new A.bL(u,y.aY))
x=3
return A.b(u.i_(0,C.hp,new B.f6J()),$async$f6H)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f6H,w)},
hyH(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hfF(x):x},
fD6(d){var x=0,w=A.j(y.T),v,u,t
var $async$fD6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.ame(u)
x=1
break}v=B.fy6(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fD6,w)},
fD5(d){var x=0,w=A.j(y.T),v,u,t
var $async$fD5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.amf(u)
x=1
break}v=B.fy6(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fD5,w)},
fmr(d){var x=0,w=A.j(y.T),v
var $async$fmr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amf(d),$async$fmr)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmr,w)},
bwo(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fD5(d),$async$bwo)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aC(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwo,w)},
eXi(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eXi=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SH(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.Ae(d.akg(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXi,w)},
EK(d,e,f){return B.hAW(d,e,f)},
hAW(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EK=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fD6(a1),$async$EK)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aC(0,e,null)
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
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h39().aze(D.d17,null),$async$EK)
case 4:l=d.fD2=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auG(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bc($.bs,y.b1)
l.y=new B.f7b(f,k,new B.f7c(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4w(0,new B.US(r,"offer")),$async$EK)
case 5:d=l
x=7
return A.b(l.ahb(0),$async$EK)
case 7:x=6
return A.b(d.a4o(0,a4),$async$EK)
case 6:x=8
return A.b(B.f6H(l),$async$EK)
case 8:x=9
return A.b(l.akZ(),$async$EK)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hyH(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.ak(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amg(m,h),$async$EK)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fNu(h)
case 11:v=new A.bjK(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EK,w)},
f6I:function f6I(d){this.a=d},
f6J:function f6J(){},
f7c:function f7c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7b:function f7b(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f7a:function f7a(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hCJ(d){switch(d){case"new":return D.dPZ
case"checking":return D.dQ_
case"connected":return D.dQ1
case"completed":return D.dQ0
case"failed":return D.dQ3
case"disconnected":return D.dQ4
case"closed":return D.aFk
case"count":return D.dQ2}return D.aFk},
hCK(d){switch(d){case"new":return D.aFl
case"gathering":return D.dQ5
case"complete":return D.a22}return D.aFl},
hMA(d){switch(d){case"stable":return D.dQ6
case"have-local-offer":return D.dQ7
case"have-local-pranswer":return D.dQ9
case"have-remote-offer":return D.dQ8
case"have-remote-pranswer":return D.dQa
case"closed":return D.aFr}return D.aFr},
hKV(d){switch(d){case"new":return D.aFo
case"connecting":return D.aFp
case"connected":return D.aFq
case"closed":return D.a23
case"disconnected":return D.aFn
case"failed":return D.aFm}return D.a23},
a6N:function a6N(d,e){this.a=d
this.b=e},
Mq:function Mq(d,e){this.a=d
this.b=e},
UR:function UR(d,e){this.a=d
this.b=e},
Mp:function Mp(d,e){this.a=d
this.b=e},
Dt:function Dt(d,e){this.a=d
this.b=e},
ccx:function ccx(){},
fzM(d){var x=new B.Ds()
x.a=d
x.b=!0
return x},
Ds:function Ds(){this.b=this.a=$},
a6M:function a6M(){},
aqo:function aqo(){},
US:function US(d,e){this.a=d
this.b=e},
fy2(){var x=0,w=A.j(y.H)
var $async$fy2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fy2,w)},
fy5(d,e,f){var x=0,w=A.j(y.T),v
var $async$fy5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lW(D.lZ))){v=null
x=1
break}v=B.fmG(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy5,w)},
fNu(d){var x,w=F.a7j.a1q(C.dA.aF(d),null)
if(w.length===0){x=C.dA.aF(d)
return C.cM.gcs().aF(x)}return C.cM.gcs().aF(w)},
hfE(d){var x,w,v=C.cw.aF(d)
try{x=C.c_.c4(0,F.a7i.b5V(v,!1))
return x}catch(w){x=C.c_.c4(0,v)
return x}},
fy6(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hfE(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c_.c4(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hfF(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a_(t,"a=extmap"))continue
if(C.a.a_(t,"a=ssrc"))continue
if(C.a.a_(t,"a=msid"))continue
if(C.a.a_(t,"a=rtcp"))continue
if(C.a.a_(t,"a=rtpmap"))continue
if(C.a.a_(t,"a=fmtp"))continue
if(C.a.a_(t,"a=rtcp-fb"))continue
if(C.a.a_(t,"a=mid:"))continue
if(C.a.a_(t,"a=group:"))continue
if(C.a.a_(t,"a=setup:"))continue
if(C.a.a_(t,"a=ice-options:"))continue
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aH(s,"\n")},
hfG(){var x,w=$.oV(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aE(32)]
return"DS"+C.d.fJ(v)},
aVK(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aVK)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVK,w)},
c1D(d,e){return B.hfH(d,e)},
hfH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c1D=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c1D)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1D,w)},
aVN(d){var x=0,w=A.j(y.y),v,u,t
var $async$aVN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVK(d),$async$aVN)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVN,w)},
aVM(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aVM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hfG()
r=C.a.i(f)
t=C.dA.aF(s)
x=3
return A.b(B.c1D(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcs().aF(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aVM)
case 3:if(!h){v=null
x=1
break}v=new A.YM("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVM,w)},
aVL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aVL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aVK(o),$async$aVL)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c_.c4(0,C.cw.aF(u))
if(J.iR(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a5(n)
$.ak.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aVL,w)},
c1E(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c1E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.bxi("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c1E)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1E,w)},
aVO(d){var x=0,w=A.j(y.h),v,u,t
var $async$aVO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GD(),$async$aVO)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Y(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVO,w)},
am7(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$am7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$am7)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aVO(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am7,w)},
am5(d,e){var x=0,w=A.j(y.H)
var $async$am5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$am5)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$am5)
case 2:return A.h(null,w)}})
return A.i($async$am5,w)},
a4r(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4r)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GD(),$async$a4r)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dd(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4q(s),$async$a4r)
case 5:x=6
return A.b(B.am5(f,u),$async$a4r)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4r,w)},
a4s(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4s=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4s)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GD(),$async$a4s)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Y(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.m(0,"schoolName",q)
p.m(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.m(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.am5(g,q),$async$a4s)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4q(u),$async$a4s)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4s,w)},
a4t(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4t)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GD(),$async$a4t)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aVH(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.au(),$async$a4t)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.ak(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4t)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4t,w)},
c1F(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c1F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.au(),$async$c1F)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aC(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Y(q,y.N,y.z)
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
return A.i($async$c1F,w)},
GE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c1F(d),$async$GE)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aVO(t),$async$GE)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.am6(d),$async$GE)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVH(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.am6(d),$async$GE)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GE,w)},
am6(d){var x=0,w=A.j(y.H)
var $async$am6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.au(),$async$am6)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$am6)
case 2:return A.h(null,w)}})
return A.i($async$am6,w)},
aVP(){var x,w=$.oV(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aE(32)]
return C.d.fJ(v)},
a4u(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fy7(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c1I(d){return B.hfJ(d)},
hfJ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c1I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4u(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c1I)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1I,w)},
am9(d,e){return B.hfK(d,e)},
hfK(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$am9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4u(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$am9)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.ak.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$am9,w)},
c1K(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c1K=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4u(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.am9(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c1K)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c1K,w)},
c1J(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c1J=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4u(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.am9(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c1J)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c1J,w)},
c1L(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c1L=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4u(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.am9(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1L,w)},
c1M(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c1M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fy7(d)){v=null
x=1
break}x=3
return A.b(B.c1I(d),$async$c1M)
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
return A.i($async$c1M,w)},
a4B(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4B=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4B)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a4B)
case 8:s=e
if(s==null){v=A.Q(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Y(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.ak.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.Q(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4B,w)},
amd(d){return B.hfZ(d)},
hfZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$amd)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amd)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.ak.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amd,w)},
ame(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ame=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$ame)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4B(),$async$ame)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c_.c4(0,C.cw.aF(q))
if(J.iR(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dP(A.Y(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amd(s),$async$ame)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a5(i)
$.ak.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ame,w)},
amg(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bW(),$async$amg)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4B(),$async$amg)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dP(A.Y(s,r,q),r,q)
r=C.dA.aF(C.a.i(e))
q.m(0,"answer",C.cM.gcs().aF(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amd(u),$async$amg)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amg,w)},
amf(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bW(),$async$amf)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4B(),$async$amf)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c_.c4(0,C.cw.aF(u))
v=r
x=1
break}catch(n){t=A.a5(n)
$.ak.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amf,w)},
alg(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alg=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.qR)){v=null
x=1
break}x=3
return A.b(p.mb(e),$async$alg)
case 3:r=g
u=4
x=7
return A.b(r.hv(C.fZ),$async$alg)
case 7:q=g
o=q
o=o==null?null:J.fa(J.xB(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.p()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$alg,w)},
hJ4(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fl6(d){return B.hJ6(d)},
hJ6(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fl6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eJ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").J6(d,3600),$async$fl6)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fl6,w)},
Bx(d,e,f,g,h,i){var x=null
return B.hJ3(d,e,f,g,h,i)},
hJ3(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Bx=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fNx(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fy9(r),$async$Bx)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fl6(o),$async$Bx)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4v(r),$async$Bx)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aI9)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JQ(A.a([],g))
x=15
return A.b(d.eK(0,A.ard("GET",A.cp(n,0,null))).cI(0,C.Df),$async$Bx)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4v(r),$async$Bx)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ir(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Bx)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aVR(r,k),$async$Bx)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Bx)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.SH(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a5(a4)
$.ak.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4v(r),$async$Bx)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bx,w)},
aMm(d){return B.hJ5(d)},
hJ5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eJ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMm)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.ak.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMm,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[208]
H=c[101]
P=c[189]
E=c[180]
Q=c[153]
R=c[102]
S=c[187]
G=c[83]
I=c[213]
K=c[219]
B=a.updateHolder(c[21],B)
D=c[217]
T=c[152]
L=c[170]
U=c[62]
V=c[220]
W=c[68]
X=c[53]
M=c[82]
Y=c[218]
N=c[112]
B.ccy.prototype={
aze(d,e){return this.cym(d,e)},
cym(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aze=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.Q(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dP(r,s,t)
t.v(0,d)
u=new q(A.k_(A.cr(t)))
t=J.k(u)
v=B.hkt(C.cM.gcs().aF(new A.cW(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aze,w)}}
B.b_X.prototype={
bqG(d){var x=this,w=x.w
w.onclose=A.h7(new B.cct(x))
w.onopen=A.h7(new B.ccu(x))
w.onmessage=A.h7(new B.ccv(x))
w.onbufferedamountlow=A.h7(new B.ccw(x))},
gdh(d){return this.x},
adE(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$adE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ds()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fzM(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.e9(d.arrayBuffer(),y.af),$async$adE)
case 8:v=t.fzM(s.aku(f,0,null))
x=1
break
case 7:case 4:v=B.fzM(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adE,w)}}
B.b_Y.prototype={
bqH(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.ccz(x)))
w.addEventListener("icecandidate",A.h7(new B.ccA(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.ccB(x)))
w.onicegatheringstatechange=A.h7(new B.ccC(x))
w.addEventListener("signalingstatechange",A.h7(new B.ccD(x)))
if(!$.fGt())w.addEventListener("connectionstatechange",A.h7(new B.ccE(x)))
w.addEventListener("negotiationneeded",A.h7(new B.ccF(x)))
w.addEventListener("track",A.h7(new B.ccG(x)))},
ahb(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.e9(s.createAnswer(A.k_(A.cr(A.Q(y.N,y.z)))),y.aQ),$async$ahb)
case 3:t=f
v=new B.US(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
a4o(d,e){return this.bgl(0,e)},
bgl(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.e9(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4o)
case 2:return A.h(null,w)}})
return A.i($async$a4o,w)},
a4w(d,e){return this.bgB(0,e)},
bgB(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.e9(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4w)
case 2:return A.h(null,w)}})
return A.i($async$a4w,w)},
akZ(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$akZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.US(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akZ,w)},
bw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f2(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bw,w)}}
B.a9w.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WK.prototype={
S(){return new B.avS()},
gd5(){return this.c}}
B.avS.prototype={
Z(){this.a0()
this.aay()},
aay(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aay=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVI(u.e,u.c),$async$aay)
case 2:t=e
if(v.c!=null)v.n(new B.cVU(v,t))
return A.h(null,w)}})
return A.i($async$aay,w)},
Oa(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Oa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.am2(t.e,t.c,!1),$async$Oa)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(D.eig)
x=1
break}x=4
return A.b(B.a4p(u.a.c,"individual"),$async$Oa)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a2Y(A.eN(new B.cVR(u),!1,null,y.H)),$async$Oa)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oa,w)},
Hv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Hv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f4V(o),$async$Hv)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4t(o.e,r,s,q),$async$Hv)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.E(y.q).f.P(D.efl)
x=1
break}x=5
return A.b(B.a4p(u.a.c,"member"),$async$Hv)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a2Y(A.eN(new B.cVT(u),!1,null,y.H)),$async$Hv)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Hv,w)},
wP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4o(t.e,o,t.f,t.r,t.w,s),$async$wP)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4p(u.a.c,"org_owner"),$async$wP)
case 4:x=5
return A.b(B.am7(u.a.c),$async$wP)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f5p(o),$async$wP)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4r(s,t,o,q.c),$async$wP)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.E(y.q).f.P(D.efi)
x=1
break}x=10
return A.b(B.am7(u.a.c),$async$wP)
case 10:o=u.c
if(o==null){x=1
break}o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a2Y(A.eN(new B.cVS(u),!1,null,y.H)),$async$wP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wP,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iQ:C.oM,q=B.fy4(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.a9(0,C.G,C.az.j(0.35),C.fI,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eA1,C.i,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.fW,t,t,t),C.aC,D.eRn,C.U,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.i,t,t,new A.o(t,t,t,p,w,D.bGy,C.n),t,t,t,t,C.ej,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lg(new B.cVW(),t),C.P,w,C.dZ,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aP:C.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.a9Y(C.eD,C.asD,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc3M(),t),C.ac],v))
p.push(new B.a9Y(C.o5,C.Za,"Team Member","Sign in with your organization access code + password",u.gc4B(),t))
p.push(C.ac)
p.push(new B.a9Y(C.afJ,C.a_v,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc47(),t))
return A.cg(t,r,A.br(!0,A.ce(A.u(p,C.al,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.ada,t,t,C.af),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.a9Y.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.eq(A.A(A.a([A.p(s,A.U(t.c,C.c,s,s,s,30),C.i,s,s,new A.o(s,s,s,v,s,new A.a7(C.a1,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eG,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.oq,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.U(C.zV,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c2,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.i,C.K,0,s,s,s,s,s,C.aa)}}
B.ayl.prototype={}
B.aBq.prototype={}
B.j7.prototype={
lW(d){var x=this.b,w=C.a.oX(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
galD(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.Q(y.N,y.z)
v.m(0,"id",w.a)
v.m(0,"name",w.b)
v.m(0,"mime",w.c)
v.m(0,"sizeBytes",w.d)
v.m(0,"createdAt",w.e)
x=w.f
if(x!=null&&C.a.i(x).length!==0)v.m(0,"note",x)
x=w.r
if(x!=null&&C.a.i(x).length!==0)v.m(0,"fromSender",x)
x=w.w
if(x!=null&&C.a.i(x).length!==0)v.m(0,"shortCode",x)
x=w.x
if(x!=null&&C.a.i(x).length!==0)v.m(0,"stashToken",x)
return v},
b5r(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j7(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cwS(d){return this.b5r(null,d)},
az_(d){return this.b5r(d,null)}}
B.SB.prototype={
S(){return new B.azI(new A.cn(null,y.A))},
gd5(){return this.c}}
B.azI.prototype={
Z(){this.a0()
this.aaz()},
aaz(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ad(u.a.c),$async$aaz)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFh(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaz,w)},
aaA(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$aaA)
case 3:t=u.c
if(t!=null)t.E(y.q).f.P(D.eja)
case 1:return A.h(v,w)}})
return A.i($async$aaA,w)},
X2(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$X2=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alg(s.d,4),$async$X2)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.re(r,"ngmy_my_code_"+m+".png"),$async$X2)
case 8:q=e
o=s.c
if(o!=null)o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
o=s.c
if(o!=null)o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$X2,w)},
ae4(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ae4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7n("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ae4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ae4,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iQ:C.oM,m=o?C.c:C.M,l=A.eK(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.md
else if(q.e==null)x=A.at(new A.B(C.ej,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.az.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZA,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.i,p,p,new A.o(p,p,u,v,p,new A.a7(C.a1,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.acL,p,p,1/0)
v=A.m(20)
u=A.a([new A.a9(0,C.G,C.az.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.ce(A.u(A.a([x,C.m6,w,C.k8,new A.es(A.p(p,A.ph(p,p,!1,B.hfA(s),p,!0,!0,220,!1,C.c),C.i,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c2,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.k8,A.A(A.a([A.C(A.ex(M.Aa,C.QW,q.gbY5(),p),1),C.av,A.C(A.dn(C.xb,C.a4i,q.gbY6(),A.bk(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.U,new A.a8(1/0,p,A.ex(L.Y4,D.eNG,q.gciD(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JM,p,p,C.af)
x=r}return A.cg(l,n,x,p,!1,!1,p,p)}}
B.SF.prototype={
S(){return new B.azL(new A.ao(C.aq,$.as()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.azL.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GC(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.as()
x.O$=0
this.e.p()
this.a2()},
X3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GC(u.d.a.a)
if(t==null){u.n(new B.dGq(u))
x=1
break}u.n(new B.dGr(u))
s=u.a
r=s.c
x=3
return A.b(B.a4n(s.d,new B.dGs(u),t,r),$async$X3)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGt(u))
if(q){s=u.c
s.toString
A.a6(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
a_5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.n(new B.dGu(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.qK(r.a.c,q),$async$a_5)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGv(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aeM(p,m,l,j,k),$async$a_5)
case 8:o=e
if(r.c!=null)r.n(new B.dGw(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a5(h)
if(r.c!=null)r.n(new B.dGx(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dGy(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_5,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9r:D.a7N,h=j?D.aaP:C.c,g=j?C.aN:C.M,f=j?C.bO:C.ai,e=j?D.a8J:C.aJ
i=[i,e,h,g,f,j?C.eS:C.bU]
x=A.K(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eK(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.ec(A.p(k,k,C.i,k,k,new A.o(k,k,k,k,k,new A.bT(C.C,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.ec(A.p(k,k,C.i,k,k,new A.o(k,k,k,k,k,new A.bT(C.C,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bvF,C.i,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aE,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eG,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.i,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZA,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uG(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.ben()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aI(k,C.T,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.JF,k,k,"",k,!0,new A.b0(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b0(4,A.m(18),new A.ay(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ad,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dGz(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.ly,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.Ju(l.a.d,4)
m=A.z(new A.I(m,new B.dGA(x,new A.aCC(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.B(C.ng,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a_,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.i,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.edU)
else q.push(A.U(C.kU,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aT,A.de(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.i8,k,k,k,C.eM,k,k,k)],r))}e=A.C(A.ce(A.u(e,C.al,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bh5,k,k,C.af),1)
u=l.f?k:l.gciE()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(L.Y4,D.eOA,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.c9,k,new A.b5(q,C.V),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbY7()
t=A.bk(C.az,k,k,0,C.c,k,C.ms,k,new A.b5(A.m(16),C.V),k,k,k)
return A.cg(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mR(new B.dGB(),A.u(A.a([e,new A.B(D.bgB,A.u(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.qJ:D.eN5,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cm,C.Uu,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.ben.prototype={
nT(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.b9(v,A.h1(C.bm,v.length),C.aL)}}
B.SC.prototype={
S(){return new B.azJ()}}
B.azJ.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(new A.b9(w,C.aY,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.b9(x,C.aY,C.aL),v)
u.f!==$&&A.aO()
u.f=new A.ao(C.aq,v)},
p(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.as()
v.O$=0
v=w.e
v===$&&A.c()
v.R$=x
v.O$=0
v=w.f
v===$&&A.c()
v.R$=x
v.O$=0
w.a2()},
aaB(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaB=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFi(r))
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
return A.b(B.a4s(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaB)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.E(y.q).f.P(D.eiM)
s=[1]
x=4
break}p.E(y.q).f.P(D.ehp)
p=r.c
p.toString
A.a6(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFj(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaB,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iQ:C.oM,q=A.eK(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eGi,s,s,s,1,s,!0),p=A.p(s,D.ba9,C.i,s,s,new A.o(s,s,s,A.m(22),s,E.EG,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aI(s,C.T,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bCj,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aI(s,C.T,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCe,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aI(s,C.T,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bCt,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbY8()
u=A.bk(C.az,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.cg(q,r,A.ce(A.u(A.a([p,C.d1,o,C.ac,x,C.ac,w,C.m6,A.bJ(t.r?C.qJ:C.aKF,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.af),s,!1,!1,s,s)}}
B.a9d.prototype={}
B.bqz.prototype={
a1G(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a1G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ck(r.akg()))
x=3
return A.b(B.P4(t,s),$async$a1G)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a1G,w)},
gd5(){return this.a}}
B.Ln.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WJ.prototype={
S(){return new B.avR(new A.ao(C.aq,$.as()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.avR.prototype={
Z(){this.a0()
$.aT.x1$.push(new B.cVQ(this))},
p(){var x=this.d
x.R$=$.as()
x.O$=0
this.e.p()
this.a2()},
bYe(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZH(d),u=x.a.c,t=u?C.hl:v.a[2],s=u?C.c:v.a[3],r=u?C.aP:v.a[4],q=u?C.iQ:v.a[0],p=A.m(24),o=A.H(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.a9(0,C.G,C.az.j(u?0.25:0.12),C.fI,32)],n),l=A.p(w,T.ail,C.i,w,w,new A.o(w,w,w,A.m(18),A.a([new A.a9(0,C.G,C.az.j(0.4),C.cv,16)],n),C.aj7,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uG(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqe()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aI(!1,C.T,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.Ds,w,w,"",w,!0,new A.b0(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b0(4,A.m(16),D.aPz),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ad,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cVO(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.ly,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mS,new B.cVP(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.c9,w,new A.b5(A.m(14),C.V),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.a9(0,C.G,C.az.j(0.35),C.cC,12)],n)
g=y.p
return A.ez(w,C.K,new A.d3(Q.HX,A.bQ(new A.B(C.wn,A.u(A.a([l,C.aT,k,C.P,j,C.dZ,i,C.dZ,A.A(A.a([f,C.av,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dLf,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbYd(),w,w,w,w,w,w,w),C.i,C.K,0,w,w,w,w,w,C.aa),new A.o(w,w,w,h,n,K.Lv,C.n),C.ba),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.ba),w),w,w,w,C.JO,C.cZ,w,w,w)}}
B.bqe.prototype={
nT(d,e){return e.ah6(e.a.toUpperCase())}}
B.SD.prototype={
S(){return new B.azK(A.a([],y.r),A.aY(y.N))},
gd5(){return this.c}}
B.azK.prototype={
Z(){var x=this
x.a0()
x.rN()
x.w=A.dD(C.iS,new B.dGo(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SM()
this.a2()},
YZ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$YZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lm(u.a.c),$async$YZ)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zn(u.a.c),$async$YZ)
case 4:u.n(new s.dFM(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$YZ,w)},
rN(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lm(u.a.c),$async$rN)
case 3:t=e
x=4
return A.b(B.zn(u.a.c),$async$rN)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dFN(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LI(u.d)
B.Ad(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rN,w)},
LI(d){return this.buv(d)},
buv(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4x(r,u.a.c),$async$LI)
case 8:p=f
if(u.c==null){x=1
break}new B.dFl(u,r,p).$0()
u.c.e1()
case 7:if(!(C.a.a_(r.c,"video/")||r.lW(D.lZ))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SK(r,u.a.c),$async$LI)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zn(u.a.c),$async$LI)
case 12:u.n(new o.dFm(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LI,w)},
M2(d){return this.bAs(d)},
bAs(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$M2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4x(d,u.a.c),$async$M2)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFr(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$M2)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$M2)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$M2,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.E(y.q).f.P(A.aZ(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rO(d,e){return this.csC(d,e)},
csC(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGc(r,e))
u=3
x=6
return A.b(d.$0(),$async$rO)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGd(r))
$.eG.lR()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rO,w)},
gaPB(){var x=this.a
return x.f||x.r||x.w},
Gy(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Gy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaPB()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c1B(s,n,r,q,o,t),$async$Gy)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.feI(o,u.a.c),$async$Gy)
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
return A.b(B.Bz(s,o,r,q,n,t),$async$Gy)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gy,w)},
Y4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Y4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.am7(u.a.c),$async$Y4)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hL("No organization portal found.")
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
return A.b(A.a6(t,!1).cz(A.eN(new B.dFJ(u,r,q),!1,null,y.H)),$async$Y4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Y4,w)},
Z9(d){return this.cct(d)},
ccs(){return this.Z9(1)},
cct(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Z9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaPB()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.am4(u.a.c),$async$Z9)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Z9,w)},
a8G(d,e,f){return this.bQs(d,e,f)},
bQs(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a8G=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rO(new B.dFG(u,d,null,e,f),"Uploading\u2026"),$async$a8G)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8G,w)},
buE(){B.h0G(!1,new B.dFp(this))
return},
chg(){this.n(new B.dFR(this))},
atV(){var x=0,w=A.j(y.H),v=this
var $async$atV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.buE()
return A.h(null,w)}})
return A.i($async$atV,w)},
a8C(){var x=0,w=A.j(y.H),v=this
var $async$a8C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dFv(v),"Importing\u2026"),$async$a8C)
case 2:return A.h(null,w)}})
return A.i($async$a8C,w)},
Q6(d){return this.cs4(d)},
cs4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lW(D.lZ)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cz(A.eN(new B.dG9(u,d),!1,null,y.H)),$async$Q6)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lW(D.Nq)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cz(A.eN(new B.dGa(u,d),!1,null,y.H)),$async$Q6)
case 8:x=1
break
case 7:x=u.bR9(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cz(A.eN(new B.dGb(u,d),!1,null,y.H)),$async$Q6)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Q6,w)},
bR9(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.oX(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cnv,C.a.aV(x,w+1).toLowerCase())},
abR(d){return this.c3Q(d)},
c3Q(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lW(D.lZ)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cz(A.eN(new B.dFH(u,d),!1,null,y.H)),$async$abR)
case 5:x=1
break
case 4:u.n(new B.dFI(u,d))
case 1:return A.h(v,w)}})
return A.i($async$abR,w)},
Px(d){return this.ck3(d)},
ck3(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Px=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oy(t,s.c,s.f),$async$Px)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dG2(u,d),"Preparing QR\u2026"),$async$Px)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Px,w)},
aet(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aet=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dG3(),A.S(t).k("I<1,n>")).fD(0)}t=u.d
s=A.S(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dG4(q),s),s.k("E.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Px(r),$async$aet)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aet,w)},
aem(d){return this.cjD(d)},
cjD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aem=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZH(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,new B.dFX(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aem)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Q6(d)
break
case"qr":u.Px(A.a([d],y.r))
break
case"send_my_code":u.c4q(A.a([d],y.r))
break
case"save":u.adK(d)
break
case"delete":u.Hg(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aem,w)},
V7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$V7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFs(),A.S(t).k("I<1,n>")).fD(0)}t=u.d
s=A.S(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dFt(q),s),s.k("E.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oy(t,s.c,s.f),$async$V7)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dFu(u,r),"Preparing file\u2026"),$async$V7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$V7,w)},
acX(d){return this.caZ(d)},
caZ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$acX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h1n(d,!1),$async$acX)
case 3:s=f
r=s==null
q=B.a4u(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$acX,w)},
abX(){var x=0,w=A.j(y.H),v=this,u
var $async$abX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fma(u,v.a.c),$async$abX)
case 2:return A.h(null,w)}})
return A.i($async$abX,w)},
buD(){B.h0G(!1,new B.dFo(this,null))
return},
Hu(d,e){return this.c4r(d,e)},
aV_(d){return this.Hu(null,d)},
c4q(d){return this.Hu(d,null)},
c4r(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Hu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a3<1>")
k=A.z(new A.a3(p,new B.dFK(s),o),o.k("E.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wb.c2().ajD(!0,C.Wd,!1),$async$Hu)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.rO(new B.dFL(l,s,r),"Preparing\u2026"),$async$Hu)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a5(j)
$.ak.$1("[doc share send my code pick] "+A.t(q))
s.hL("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hL("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.byl(p,l,e,s.a.c),$async$Hu)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Hu,w)},
GN(d){return this.bQf(d)},
bQf(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hfz(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aV_(t),$async$GN)
case 8:x=6
break
case 7:u.hL("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ad("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hL("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rO(new B.dFE(u,d),"Receiving video\u2026"),$async$GN)
case 11:x=1
break
case 10:x=12
return A.b(u.rO(new B.dFF(u,d),"Receiving\u2026"),$async$GN)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GN,w)},
CQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Bs()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.acX(t),$async$CQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GN(s),$async$CQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cz(A.eN(new B.dFP(u),!1,null,y.N)),$async$CQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rN(),$async$CQ)
case 10:x=1
break
case 9:x=11
return A.b(u.GN(C.a.i(r)),$async$CQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CQ,w)},
adK(d){return this.cfS(d)},
cfS(d){var x=0,w=A.j(y.H),v=this
var $async$adK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dFO(v,d),"Saving\u2026"),$async$adK)
case 2:return A.h(null,w)}})
return A.i($async$adK,w)},
Hg(d){return this.bCJ(d)},
bCJ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hg)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c1E(t),$async$Hg)
case 6:case 5:s=d.a
x=7
return A.b(B.D_(u.a.c,s),$async$Hg)
case 7:u.r.W(0,s)
x=8
return A.b(u.rN(),$async$Hg)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hg,w)},
aez(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aez=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZH(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,new B.dG8(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aez)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.abX()
break
case"import":u.a8C()
break}case 1:return A.h(v,w)}})
return A.i($async$aez,w)},
bYb(d){var x=d.c
if(C.a.a_(x,"video/")||d.lW(D.lZ))return C.p8
if(C.a.a_(x,"image/")||d.lW(D.Nq))return C.rP
if(C.a.q(x,"pdf"))return E.L1
return D.ag8},
B(d){var x,w,v=this,u=null,t=B.ZH(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.Ez,u,u,u,new B.dGj(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwa,u,u,u,v.e?u:v.gc48(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gchf()
n.push(A.aF(u,u,u,u,A.U(v.r.a===x?D.bqC:E.agy,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y1,u,u,u,v.e?u:v.gbYc(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nq,u,u,u,v.e?u:v.gaW1(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.bxL,u,u,u,v.e?u:new B.dGk(v),u,u,u,u,"More options",u))
q=A.eK(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lg(new B.dGl(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.ec(A.p(u,u,C.i,u,u,new A.o(u,u,u,u,u,new A.bT(C.C,0.5,C.w,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.ec(A.p(u,u,C.i,u,u,new A.o(u,u,u,u,u,new A.bT(C.C,0.5,C.w,u,0,A.a([C.az.j(A.K(d).ax.a===C.H?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mL(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.avO(C.iY,s,!0,t,w?u:v.gck4(),u),1)
x.push(new A.B(D.bfo,A.mR(new B.dGm(),A.A(A.a([s,C.av,A.C(new B.avO(C.up,"Export",!1,t,w?u:v.gbG7(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cm,C.i9,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b95(t,v.e?u:v.gaW1(),u)
else s=A.jQ(!0,u,u,new B.dGn(v,t),s,u,D.bfg,u,u,!1,!1)
x.push(A.C(s,1))
return A.cg(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.avO.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.az,t,t,0,C.c,t,C.u8,t,new A.b5(s,C.V),t,t,t)
return A.dn(A.U(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.u8,t,new A.b5(s,C.V),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ex(A.U(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ez,t,t,t),u.r,v)}}
B.b95.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.mR(new B.cVM(),new A.B(E.Vq,A.u(A.a([A.mR(new B.cVN(),A.p(x,A.U(C.wH,v[5],x,x,x,36),C.i,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aE,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.ia,x,new A.bm(0.86,1,w),s),C.dZ,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.U,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dZ,A.dn(C.nq,D.eRF,this.d,A.bk(C.az,x,x,x,C.c,x,C.Vl,x,new A.b5(A.m(16),C.V),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.cm,C.zj,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9x.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dA(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lW(D.lZ))p=D.cSM
else{p=C.a.a_(p,"image/")||i.lW(D.Nq)
n=y.O
p=p?A.a([C.cU,C.az],n):A.a([C.aK.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.U(k.w,C.c,j,j,j,22),C.i,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aE,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a0,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.galD()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lW(D.lZ))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.C(A.u(A.a([q,C.aw,A.d(C.d.aH(n," \xb7 "),j,2,C.a0,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.U(C.fv,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lW(D.lZ)))l.push(A.fvS(C.az,!1,j,j,j,!1,j,j,new B.cW8(k),j,j,new A.b5(A.m(5),C.V),j,j,!1,u))
x=A.U(C.nm,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mR(new B.cW9(),new A.B(C.e3,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.UR,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.i,w,0,j,j,new A.b5(v,new A.ay(t,s,C.r,-1)),j,j,C.aa),j),C.cm,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WL.prototype={
S(){return new B.avT()},
gd5(){return this.c}}
B.avT.prototype={
Z(){this.a0()
this.wH()},
p(){B.hfO(this.e)
this.a2()},
wH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qK(o.c,o.d),$async$wH)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aD.gag(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hfR(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hfQ(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cW5(s))
x=1
break}s.n(new B.cW6(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a5(l)
if(s.c==null){x=1
break}s.n(new B.cW7(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wH,w)},
a_4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qK(t.c,t.d),$async$a_4)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(D.efT)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aeM(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_4)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_4,w)},
bQ8(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k5(u,C.C,v,new B.cW3(w,t),C.fO,C.dq,!0,v,v,v,v)
else if(t!=null&&!C.aD.gag(t))x=A.fU(t,C.C,v,new B.cW4(w),C.fO,C.dq,!0,v,!1,v,v)
else return C.bF
return A.tE(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZH(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ac,u,u,u,v.gaZK(),u,u,u,u,"Share / save",u))
r=A.eK(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cm
else{q=v.r
if(q!=null)t=new A.B(C.ej,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.ej,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aT,A.dn(C.Ac,D.eC9,v.gaZK(),A.bk(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bQ8()}return A.cg(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.WI.prototype={
S(){return new B.avQ(A.afx(),C.bs,C.bs)},
gd5(){return this.c}}
B.avQ.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fk(w,A.a2(w).k("fk<1>")).hW(new B.cVJ(v))
x.gcFr().hW(new B.cVK(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fk(x,A.a2(x).k("fk<1>"))}if(x==null)x=C.aVn
x.hW(new B.cVL(v))
v.wH()},
wH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qK(p.c,p.d),$async$wH)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cVC(s))
x=1
break}x=8
return A.b(s.d.AT(0,new A.a0Q(r,s.a.d.c)),$async$wH)
case 8:if(s.c==null){x=1
break}s.n(new B.cVD(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
if(s.c==null){x=1
break}s.n(new B.cVE(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wH,w)},
X4(){var x=0,w=A.j(y.H),v=this,u
var $async$X4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$X4)
case 5:x=3
break
case 4:x=6
return A.b(u.hZ(0),$async$X4)
case 6:case 3:return A.h(null,w)}})
return A.i($async$X4,w)},
aNy(d){var x=d.a
return C.a.aU(C.o.u(C.o.aj(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.aj(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZH(d),m=C.o.aj(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eK(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cm
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.brA,C.i,o,o,new A.o(o,o,o,A.m(24),o,K.Lv,C.n),o,88,o,o,o,o,o,88)
t=A.mq(C.az,o,o,m,0,new B.cVF(p),C.o.D(C.o.aj(p.w.a,1000),0,m))
x=A.d(p.aNy(p.w)+" / "+p.aNy(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a_,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.az,o,o,o,o,D.ecr,o,o,o,o,o,o)
r=p.f
q=A.U(r?H.wT:C.iX,o,o,o,o,o)
x=A.u(A.a([u,C.k8,t,x,C.d1,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbYf(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cg(v,w,A.at(new A.B(C.uc,x,o),o,o,o),o,!1,!1,o,o)}}
B.Ny.prototype={
S(){return new B.avW()},
gd5(){return this.c}}
B.avW.prototype={
Z(){this.a0()
this.Nw()},
Nw(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Nw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fy5(o.c,o.d,new B.cWm(s)),$async$Nw)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWn(s))
x=1
break}s.e=r
q=O.hBL(r)
if(q==null){s.n(new B.cWo(s))
x=1
break}s.d=q
q.aJ(0,s.gaUP())
x=8
return A.b(q.ic(0).cI(0,C.rv),$async$Nw)
case 8:if(s.c==null){x=1
break}s.n(new B.cWp(s))
x=9
return A.b(q.p_(0),$async$Nw)
case 9:q.rp(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
if(s.c==null){x=1
break}s.n(new B.cWq(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nw,w)},
c2u(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWr(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BC(0,x.gaUP())
w=x.d
if(w!=null)w.p()
B.hL8(x.e)
x.a2()},
aaE(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVQ(u.c,u.d),$async$aaE)
case 2:t=e
u=v.c
if(u!=null)u.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aaE,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZH(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eK(A.a([A.aF(t,t,t,t,C.qj,t,t,t,u.gbY9(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i5(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cm
else{q=u.r
if(q!=null)s=new A.B(C.ej,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.af1(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fZ(x,new A.am(C.C,t,C.a9,C.q,A.a([new A.yV(s,t),A.aJ(t,A.Fe(A.p(t,A.U(q?H.wT:C.iX,C.c,t,t,t,48),C.i,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c2,t,t,t),C.b7,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWt(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cg(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.WN.prototype={
S(){return new B.avU(new A.cn(null,y.A))}}
B.avU.prototype={
gcsl(){var x,w,v=this.a
if(v.e!==D.OE)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcs2(){var x,w,v=this.a
if(v.e!==D.xJ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcsl()
if(x!=null){v.Oz(x)
v.e=A.dD(R.Di,new B.cWi(v,x))}w=v.gcs2()
if(w!=null){v.Oy(w)
v.f=A.dD(C.fV,new B.cWj(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
Oy(d){return this.c9g(d)},
c9g(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Oy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amc(d),$async$Oy)
case 3:t=f
x=4
return A.b(B.c1X(d),$async$Oy)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWa(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Oy,w)},
Oz(d){return this.c9h(d)},
c9h(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Oz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fmr(d),$async$Oz)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwo(t),$async$Oz)
case 4:if(u.c==null){x=1
break}u.n(new B.cWb(u))
u.c.E(y.q).f.P(D.aHL)
case 1:return A.h(v,w)}})
return A.i($async$Oz,w)},
gbUZ(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbYa(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
ZQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Bs()){t=u.c
if(t!=null)t.E(y.q).f.P(D.eiW)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cz(A.eN(new B.cWc(),!1,null,y.N)),$async$ZQ)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwo(s),$async$ZQ)
case 4:t=u.c
if(t!=null)t.E(y.q).f.P(D.aHL)
case 1:return A.h(v,w)}})
return A.i($async$ZQ,w)},
a6C(d){return this.bAt(d)},
bAt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aH(t,", "))),$async$a6C)
case 3:if(d.e!=null){t=d.E(y.q).f
t.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6C,w)},
aaC(d){return this.bAd(d)},
bAd(d){var x=0,w=A.j(y.H),v=this
var $async$aaC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$aaC)
case 2:if(d.e!=null)d.E(y.q).f.P(D.egl)
return A.h(null,w)}})
return A.i($async$aaC,w)},
ZL(d){return this.cfU(d)},
cfU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ZL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alg(s.d,4),$async$ZL)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.re(r,"ngmy_doc_share_qr.png"),$async$ZL)
case 8:q=f
if(d.e!=null)d.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a5(n)
if(d.e!=null)d.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZL,w)},
gaQB(){var x,w=this.a
if(w.e!==D.FG)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6z(d){return this.bAm(d)},
bAm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaQB()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6z)
case 3:if(d.e!=null)d.E(y.q).f.P(D.ehW)
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
aaD(){var x=0,w=A.j(y.H),v=this,u
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SM(),$async$aaD)
case 2:u=v.c
if(u!=null)A.a6(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$aaD,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZH(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FG&&i!==D.OE&&i!==D.xJ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eK(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FG||t===D.OE||t===D.xJ?l:A.aF(l,l,l,l,C.lq,l,l,l,m.gaT9(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.ph(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gbUZ(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FG){t=C.az.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.i,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}q.push(C.aT)
q.push(A.d(m.gbYa(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.U,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bBm,D.eKu,new B.cWd(m,d),l)],p))}if(m.a.e===D.FG&&m.gaQB()!=null)C.d.v(q,A.a([C.U,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a_,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.by4,D.eHx,new B.cWe(m,d),l)],p))
if(m.a.e===D.xJ){x=(m.w?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cp:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.i,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}if(m.a.e===D.OE){x=(m.r?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cp:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.i,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l),C.ac,A.dn(D.bu2,D.eNo,m.gcgh(),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nR(i,A.cg(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.i,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.C(A.ex(M.Aa,C.QW,new B.cWf(m,d),l),1),C.av,A.C(A.dn(C.xb,C.a4i,new B.cWg(m,d),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a8(1/0,l,A.bJ(C.yd,m.gaT9(),A.bk(C.aK,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWh(),y.C)}}
B.a9v.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ce(A.u(A.a([w,C.aT,A.p(x,A.ph(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.i,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.af)
return A.ei(A.a([A.bJ(C.BJ,new B.cVB(d),x)],u),x,x,C.mg,v,x,x,x,x,D.eBb,x)}}
B.WH.prototype={
S(){return new B.avP(A.y4(C.w3,C.n_,C.t_))}}
B.avP.prototype={
p(){this.d.p()
this.a2()},
asF(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).K(t)
return}}},
B(d){var x=null
return A.cg(A.eK(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eHX,x,x,x,1,x,!0),C.x,A.y3(this.d,C.bP,this.gasE()),x,!1,!1,x,x)}}
B.WO.prototype={
S(){return new B.avV(A.y4(C.w3,C.n_,C.t_))},
gd5(){return this.c}}
B.avV.prototype={
bRb(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acj(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q2("text/plain"),$async$acj)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.E(y.q).f.P(D.eiQ)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acj,w)},
a7m(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7m=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h1n(p,!0),$async$a7m)
case 3:t=e
p=t==null
s=B.a4u(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.E(y.q).f.P(D.efs)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7m,w)},
p(){this.d.p()
this.a2()},
asF(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bRb(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahr,v,v,v,w.gbFG(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Y8,v,v,v,w.gc6H(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eK(A.a([u,t,A.aF(v,v,v,v,A.U(w.f?C.rN:P.KL,v,v,v,v,v),v,v,v,new B.cWl(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eO9,v,v,v,1,v,!0)
u=A.y3(w.d,C.bP,w.gasE())
x=A.m(20)
return A.cg(t,C.x,new A.am(C.W,v,C.a9,C.q,A.a([u,A.at(A.p(v,v,C.i,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dPG],s),v),v,!1,!1,v,v)}}
B.b96.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nV
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.U(s.c,x,r,r,r,22),C.i,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nV:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.Vw,A.A(A.a([u,C.bb,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.U(C.el,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.i,C.K,0,r,r,r,r,r,C.aa)}}
B.a6N.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mq.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UR.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mp.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dt.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.ccx.prototype={}
B.Ds.prototype={}
B.a6M.prototype={}
B.aqo.prototype={}
B.US.prototype={}
var z=a.updateTypes(["av<~>()","R(j7)","n(j7)","SD(Z)","~()","WK(Z)","G(G,j7)","Ny(Z)","~(lB)","cu(Ds)","av<j7?>(@)","SB(Z)","SF(Z)","B(j7)","j7(@)","a0<n,@>(j7)","WJ(Z)","SC(Z)","WL(Z)","WI(Z)","WN(Z)","a9v(Z)","al<j7>()","WO(Z)","a9x(Z,G)","WH(Z)","a0<n,aC>(j7)","cu(UR)","cu(a6M)","av<cu>(Ds)"])
B.cct.prototype={
$1(d){var x=this.a
x.x=D.aFj
x.y.G(0,D.aFj)},
$S:68}
B.ccu.prototype={
$1(d){var x=this.a
x.x=D.aFi
x.y.G(0,D.aFi)},
$S:68}
B.ccv.prototype={
$1(d){var x=this.a
x.adE(A.aL4(d.data)).bC(new B.ccs(x),y.b)},
$S:68}
B.ccs.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ccw.prototype={
$1(d){},
$S:68}
B.ccz.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hks(d.channel))},
$S:15}
B.ccA.prototype={
$1(d){},
$S:15}
B.ccB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hCJ(w.iceConnectionState)
x.cx=w
if($.fGt())switch(w.a){case 0:x.cy=D.aFo
break
case 1:x.cy=D.aFp
break
case 3:x.cy=D.aFq
break
case 5:x.cy=D.aFm
break
case 6:x.cy=D.aFn
break
case 7:x.cy=D.a23
break
default:break}},
$S:152}
B.ccC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hCK(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.ccD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hMA(w.signalingState)},
$S:152}
B.ccE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hKV(w.connectionState)},
$S:152}
B.ccF.prototype={
$1(d){},
$S:152}
B.ccG.prototype={
$1(d){},
$S:15}
B.f1G.prototype={
$1(d){var x=y.F.a(new A.r4([],[]).oN(d.target.result,!1)),w=C.w4.q(x.objectStoreNames,"blobs")
if(!w)C.w0.J4(x,"blobs")},
$S:180}
B.fm_.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uC.f1(this.b)
$.eG.lR()
this.c.$1(d)},
$S:432}
B.fm1.prototype={
$1(d){return this.a.$1(B.ht7(this.b,this.c))},
$S:30}
B.fm0.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.flZ.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fmd.prototype={
$1(d){var x=this
return B.fSh(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fme.prototype={
$1(d){var x=this
return B.fSh(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f2Z.prototype={
$1(d){var x=this
return B.c1y(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cVU.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cVR.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1y(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cVT.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1y(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cVS.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1y(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cVW.prototype={
$4(d,e,f,g){var x=null
return A.js(A.A(A.a([A.aF(x,x,x,x,D.bsF,x,x,x,new B.cVV(d),x,x,x,x,x,x),A.C(A.De(D.Nc,!0,x,C.Xc,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nc,x,g,C.adt,0,e,f)},
$C:"$4",
$R:4,
$S:404}
B.cVV.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.f4Y.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.em,y.o).w,t=this.a,s=t?C.hl:C.c,r=A.m(28),q=A.p(v,D.bas,C.i,v,v,D.aRa,v,v,v,v,D.adk,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aI(v,C.T,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bwI,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zw,A.u(A.a([o,C.ac,A.aI(v,C.T,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahF,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.A(A.a([A.C(A.dU(C.dd,new B.f4W(d),v),1),C.av,A.C(A.bJ(D.eGA,new B.f4X(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.i,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Jv,v,v,v,v),v)},
$S:60}
B.f4W.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.f4X.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.E(y.q).f.P(D.egA)
return}x=w.b.a.a
A.a6(w.c,!1).K(new B.ayl(v,x))},
$S:0}
B.f5r.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.em,y.o).w,u=x.a,t=u?C.hl:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.bai,C.i,w,w,D.aSw,w,w,w,w,D.adk,w,w,1/0),new A.B(C.zw,A.u(A.a([A.aI(w,C.T,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fCS(u,"Organization name",C.DX,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.U,A.aI(w,C.T,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fCS(u,"Access code",C.mA,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.U,A.aI(w,C.T,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fCS(u,"Member password",N.Ev,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bJ(D.eOd,new B.f5q(r,q,p,d),A.bk(C.az,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.i,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Jv,w,w,w,w),w)},
$S:60}
B.f5q.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.E(y.q).f.P(D.egF)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).K(new B.aBq(u,x,w))},
$S:0}
B.c1p.prototype={
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
p=C.a.a_(j,"http")?A.cp(j,0,null):s.b.aN(j)
u=4
x=7
return A.b(A.un(p,null).cI(0,C.Ut),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ck(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ae(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a5(h)
$.ak.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c1v.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1w.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1x.prototype={
$1(d){return d.b},
$S:z+2}
B.c1r.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1s.prototype={
$1(d){return d.b},
$S:z+2}
B.c1q.prototype={
$1(d){return A.Y(y.f.a(d),y.N,y.z)},
$S:12}
B.c1t.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1u.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fmb.prototype={
$1(d){return new B.SB(this.a,null)},
$S:z+11}
B.fmc.prototype={
$1(d){return new B.SF(this.a,this.b,this.c,null)},
$S:z+12}
B.dFh.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGq.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGr.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGs.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGp(x,d))},
$S:2}
B.dGp.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGt.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGu.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGv.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dGw.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGx.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dGy.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGB.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.dGz.prototype={
$1(d){var x=this.a
return x.f?null:x.X3()},
$S:2}
B.dGA.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lW(D.Nq))s=C.rP
else s=C.a.a_(s,"video/")||d.lW(D.lZ)?C.p8:D.ag8
x=this.b.a
w=y.p
return new A.B(C.li,A.A(A.a([A.p(v,A.U(s,C.az,v,v,v,18),C.i,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.C(A.u(A.a([A.d(d.b,v,v,C.a0,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.galD(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFi.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFj.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c1z.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:88}
B.c1A.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:88}
B.fmI.prototype={
$2(d,e){return e===this.a},
$S:286}
B.eZU.prototype={
$1(d){return J.k(d)},
$S:17}
B.f3a.prototype={
$1(d){var x=this.b
B.hrg(C.DJ.ga3f(this.a)).bC(x.gcvh(x),y.H)},
$S:117}
B.f3b.prototype={
$1(d){return this.a.cZ(0,null)},
$S:117}
B.f3c.prototype={
$0(){return null},
$S:11}
B.c1O.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3d.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Y(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.L(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.N(Date.now(),0,!1).a4().aa():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.j7(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f74.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f1S.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f1T.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c1T.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lW(D.lZ)},
$S:z+1}
B.fqD.prototype={
$1(d){return new B.WJ(this.a,null)},
$S:z+16}
B.cVQ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fs()},
$S:8}
B.cVO.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).K(x)
return null},
$S:2}
B.cVP.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.dGo.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.YZ()},
$S:14}
B.dFM.prototype={
$0(){var x=J.bzm(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFN.prototype={
$0(){var x=J.bzm(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFl.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFk(this.b))
if(w>=0){x=x.d
x[w]=x[w].az_(this.c)}},
$S:0}
B.dFk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFm.prototype={
$0(){var x=J.bzm(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFr.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFq(this.b))
if(w>=0){x=x.d
x[w]=x[w].az_(this.c)}},
$S:0}
B.dFq.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGc.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGd.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dFJ.prototype={
$1(d){return new B.SC(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dFG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Gy(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SG(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rN(),$async$$0)
case 5:s=J.a4(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Z9(s.gH(t)),$async$$0)
case 8:case 7:r.hL(s.gag(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFp.prototype={
$1(d){this.a.a8G(d,"No files selected.","Added")},
$S:432}
B.dFR.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dFQ(),A.S(x).k("I<1,n>")))},
$S:0}
B.dFQ.prototype={
$1(d){return d.a},
$S:z+2}
B.dFv.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wb.c2().cHl(C.Wd,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aD.gag(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jc(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a5(j)
$.ak.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hL("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hL("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amb(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rN(),$async$$0)
case 9:o.hL("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dG9.prototype={
$1(d){return new B.Ny(this.a.a.c,this.b,null)},
$S:z+7}
B.dGa.prototype={
$1(d){return new B.WL(this.a.a.c,this.b,null)},
$S:z+18}
B.dGb.prototype={
$1(d){return new B.WI(this.a.a.c,this.b,null)},
$S:z+19}
B.dFH.prototype={
$1(d){return new B.Ny(this.a.a.c,this.b,null)},
$S:z+7}
B.dFI.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dG2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Gy(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4w(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ccs(),$async$$0)
case 5:x=6
return A.b(p.rN(),$async$$0)
case 6:r=A.S(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dFZ(p),r),new B.dG_(),r.k("I<ai.E,n>")).bZ(0,new B.dG0())
q=A.z(r,r.$ti.k("E.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cz(A.eN(new B.dG1(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.ox(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SM(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFZ.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dFY(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dFY.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dG_.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dG0.prototype={
$1(d){return d.length!==0},
$S:3}
B.dG1.prototype={
$1(d){var x=this.a
return new B.WN(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dG3.prototype={
$1(d){return d.a},
$S:z+2}
B.dG4.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFX.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.i,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kR,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a0,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.galD(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lW(D.lZ)?C.rR:C.o9
p=!x||p.lW(D.lZ)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zt,A.u(A.a([q,o,t,C.aC,B.WM(!1,u,!1,w,p,new B.dFS(d),v),B.WM(!1,u,!1,C.iY,"Share via QR",new B.dFT(d),"Letters/numbers QR code"),B.WM(!1,u,!1,D.Xh,"Send to their Code",new B.dFU(d),"Enter someone else's personal code"),B.WM(!1,u,!1,C.hd,"Download / save",new B.dFV(d),v),C.ar,B.WM(!1,u,!0,C.e4,"Delete",new B.dFW(d),v)],y.p),C.al,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ay(r,1,C.r,-1),C.V,C.V,C.V),C.kf,v,v,C.n),C.ba)},
$S:708}
B.dFS.prototype={
$0(){A.a6(this.a,!1).K("view")
return null},
$S:0}
B.dFT.prototype={
$0(){A.a6(this.a,!1).K("qr")
return null},
$S:0}
B.dFU.prototype={
$0(){A.a6(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dFV.prototype={
$0(){A.a6(this.a,!1).K("save")
return null},
$S:0}
B.dFW.prototype={
$0(){A.a6(this.a,!1).K("delete")
return null},
$S:0}
B.dFs.prototype={
$1(d){return d.a},
$S:z+2}
B.dFt.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFu.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4y(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EN(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.ox(s.c,s.f),$async$$0)
case 4:u.hL(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFo.prototype={
$1(d){var x=this.a
x.rO(new B.dFn(x,d,this.b),"Preparing\u2026")},
$S:432}
B.dFn.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SG(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byl(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFK.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dFL.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fy8(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EK(new B.dFA(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dFB(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dFC(s))
case 5:x=8
return A.b(r.b.i_(0,C.Df,new B.dFD()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gag(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rN(),$async$$0)
case 9:s.hL("Received "+q.gH(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFA.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFx(x,d,e))},
$S:140}
B.dFx.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFB.prototype={
$1(d){return new B.a9v(this.a.a,null)},
$S:z+21}
B.dFC.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dFD.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dFF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GC(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4m(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aV_(B.GC(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amb(new B.dFy(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.fy7(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rN(),$async$$0)
case 10:o=J.cB(r)
p=o.eB(r,new B.dFz()).gH(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFy.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFw(x,d,e))},
$S:140}
B.dFw.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFz.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lW(D.lZ)},
$S:z+1}
B.dFP.prototype={
$1(d){return new B.WO(this.a.a.c,null)},
$S:z+23}
B.dFO.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aVQ(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG8.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.az.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zt,A.u(A.a([A.at(A.p(x,x,C.i,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kR,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.WM(!0,w,!1,C.mA,"My Code",new B.dG5(d),"Your personal code & QR \u2014 others send docs to you"),B.WM(!1,w,!1,D.Xh,"Send to their Code",new B.dG6(this.a,d),"Enter someone else's 5-digit code + letter"),B.WM(!1,w,!1,S.x1,"Import backup",new B.dG7(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ay(t,1,C.r,-1),C.V,C.V,C.V),C.kf,x,x,C.n),C.ba)},
$S:708}
B.dG5.prototype={
$0(){A.a6(this.a,!1).K("my_code")
return null},
$S:0}
B.dG6.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.buD()},
$S:0}
B.dG7.prototype={
$0(){A.a6(this.a,!1).K("import")
return null},
$S:0}
B.dGl.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GL(D.Nc,x,C.Xc,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nc).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:687}
B.dGj.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.dGk.prototype={
$0(){this.a.aez()
return null},
$S:0}
B.dGm.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*10)),e)},
$S:106}
B.dGn.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9x(e,w,v,this.b,x.e,x.bYb(w),new B.dGf(x,w),new B.dGg(x,v,w),new B.dGh(x,w),new B.dGi(x,w),null)},
$S:z+24}
B.dGf.prototype={
$0(){this.a.abR(this.b)
return null},
$S:0}
B.dGg.prototype={
$0(){var x=this.a
return x.n(new B.dGe(x,this.b,this.c))},
$S:0}
B.dGe.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGh.prototype={
$0(){this.a.M2(this.b)
return null},
$S:0}
B.dGi.prototype={
$0(){this.a.aem(this.b)
return null},
$S:0}
B.cVM.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*18)),e)},
$S:106}
B.cVN.prototype={
$3(d,e,f){return A.e4(C.C,f,e,null,null)},
$S:136}
B.cW9.prototype={
$3(d,e,f){return A.d8(A.dN(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.cW8.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cW5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cW6.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cW7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cW3.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aD.gag(w))return A.fU(w,C.C,x,new B.cW1(this.a),C.fO,C.dq,!0,x,!1,x,x)
$.aT.x1$.push(new B.cW2(this.a))
return C.bF},
$S:129}
B.cW1.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cW_(this.a))
return C.bF},
$S:176}
B.cW_.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cVX(x))},
$S:8}
B.cVX.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cVZ(x))},
$S:8}
B.cVZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW4.prototype={
$3(d,e,f){$.aT.x1$.push(new B.cW0(this.a))
return C.bF},
$S:176}
B.cW0.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cVY(x))},
$S:8}
B.cVY.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cVJ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVI(x,d))},
$S:1722}
B.cVI.prototype={
$0(){return this.a.f=this.b===C.to},
$S:0}
B.cVK.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVH(x,d))},
$S:8}
B.cVH.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cVL.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVG(x,d))},
$S:8}
B.cVG.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cVC.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cVD.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cVE.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cVF.prototype={
$1(d){return this.a.d.L7(0,A.dA(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWm.prototype={
$0(){var x=this.a.a
return B.qK(x.c,x.d)},
$S:1723}
B.cWn.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWo.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWp.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWr.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWt.prototype={
$0(){var x=this.a
x.n(new B.cWs(x))},
$S:0}
B.cWs.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p_(0)},
$S:0}
B.cWi.prototype={
$1(d){return this.a.Oz(this.b)},
$S:14}
B.cWj.prototype={
$1(d){return this.a.Oy(this.b)},
$S:14}
B.cWa.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWb.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWc.prototype={
$1(d){return D.f0a},
$S:z+25}
B.cWh.prototype={
$2(d,e){if(d)B.SM()},
$S:121}
B.cWd.prototype={
$0(){return this.a.a6C(this.b)},
$S:0}
B.cWe.prototype={
$0(){return this.a.a6z(this.b)},
$S:0}
B.cWf.prototype={
$0(){return this.a.aaC(this.b)},
$S:0}
B.cWg.prototype={
$0(){return this.a.ZL(this.b)},
$S:0}
B.cVB.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.cWl.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p7(),$async$$0)
case 2:u.n(new B.cWk(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWk.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c1V.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lW(D.lZ)},
$S:z+1}
B.c1W.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c1U.prototype={
$2(d,e){return this.bcq(d,e)},
bcq(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SN(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1724}
B.f6I.prototype={
$1(d){if(d===D.a22&&(this.a.a.a&30)===0)this.a.fz(0)},
$S:z+27}
B.f6J.prototype={
$0(){},
$S:11}
B.f7c.prototype={
bdY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eXi(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fNx(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bdY(d,e)},
$S:533}
B.f7b.prototype={
$1(d){var x=this
d.b=new B.f7a(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f7a.prototype={
$1(d){return this.bdX(d)},
bdX(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aVR(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.G(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aC(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.y(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.y(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.eXi(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.cZ(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a5(j)
$.ak.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4v(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.cZ(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.avS.prototype,"gc3M","Oa",0)
x(v,"gc4B","Hv",0)
x(v,"gc47","wP",0)
x(v=B.azI.prototype,"gbY5","aaA",0)
x(v,"gbY6","X2",0)
x(v,"gciD","ae4",0)
x(v=B.azL.prototype,"gbY7","X3",0)
x(v,"gciE","a_5",0)
x(B.azJ.prototype,"gbY8","aaB",0)
x(B.avR.prototype,"gbYd","bYe",4)
x(v=B.azK.prototype,"gc48","Y4",0)
x(v,"gchf","chg",4)
x(v,"gaW1","atV",0)
x(v,"gck4","aet",0)
x(v,"gbG7","V7",0)
x(v,"gbYc","CQ",0)
x(B.avT.prototype,"gaZK","a_4",0)
x(B.avQ.prototype,"gbYf","X4",0)
x(v=B.avW.prototype,"gaUP","c2u",4)
x(v,"gbY9","aaE",0)
x(v=B.avU.prototype,"gcgh","ZQ",0)
x(v,"gaT9","aaD",0)
w(B.avP.prototype,"gasE","asF",8)
x(v=B.avV.prototype,"gc6H","acj",0)
x(v,"gbFG","a7m",0)
w(v,"gasE","asF",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ccx,B.a6M,B.aqo,B.ayl,B.aBq,B.j7,B.a9d,B.bqz,B.Ds,B.US])
w(B.ccy,B.ccx)
w(B.b_X,B.a6M)
x(A.i2,[B.cct,B.ccu,B.ccv,B.ccs,B.ccw,B.ccz,B.ccA,B.ccB,B.ccC,B.ccD,B.ccE,B.ccF,B.ccG,B.f1G,B.fm_,B.fm1,B.fm0,B.fmd,B.fme,B.f2Z,B.cVR,B.cVT,B.cVS,B.cVW,B.f4Y,B.f5r,B.c1p,B.c1w,B.c1x,B.c1s,B.c1q,B.c1t,B.c1u,B.fmb,B.fmc,B.dGs,B.dGB,B.dGz,B.dGA,B.eZU,B.f3a,B.f3b,B.c1O,B.f3d,B.f74,B.f1S,B.f1T,B.c1T,B.fqD,B.cVQ,B.cVO,B.dGo,B.dFk,B.dFq,B.dFJ,B.dFp,B.dFQ,B.dG9,B.dGa,B.dGb,B.dFH,B.dFZ,B.dFY,B.dG_,B.dG0,B.dG1,B.dG3,B.dG4,B.dFX,B.dFs,B.dFt,B.dFo,B.dFK,B.dFB,B.dFz,B.dFP,B.dG8,B.dGl,B.dGm,B.cVM,B.cVN,B.cW9,B.cW8,B.cW3,B.cW1,B.cW_,B.cW2,B.cW4,B.cW0,B.cVJ,B.cVK,B.cVL,B.cVF,B.cWi,B.cWj,B.cWc,B.c1V,B.c1W,B.f6I,B.f7b,B.f7a])
w(B.b_Y,B.aqo)
x(A.jj,[B.flZ,B.cVU,B.cVV,B.f4W,B.f4X,B.f5q,B.dFh,B.dGq,B.dGr,B.dGp,B.dGt,B.dGu,B.dGv,B.dGw,B.dGx,B.dGy,B.dFi,B.dFj,B.f3c,B.cVP,B.dFM,B.dFN,B.dFl,B.dFm,B.dFr,B.dGc,B.dGd,B.dFG,B.dFR,B.dFv,B.dFI,B.dG2,B.dFS,B.dFT,B.dFU,B.dFV,B.dFW,B.dFu,B.dFn,B.dFL,B.dFE,B.dFx,B.dFC,B.dFD,B.dFF,B.dFw,B.dFO,B.dG5,B.dG6,B.dG7,B.dGj,B.dGk,B.dGf,B.dGg,B.dGe,B.dGh,B.dGi,B.cW5,B.cW6,B.cW7,B.cVX,B.cVZ,B.cVY,B.cVI,B.cVH,B.cVG,B.cVC,B.cVD,B.cVE,B.cWm,B.cWn,B.cWo,B.cWp,B.cWq,B.cWr,B.cWt,B.cWs,B.cWa,B.cWb,B.cWd,B.cWe,B.cWf,B.cWg,B.cVB,B.cWl,B.cWk,B.f6J])
x(A.m7,[B.a9w,B.Ln,B.a6N,B.Mq,B.UR,B.Mp,B.Dt])
x(A.ae,[B.WK,B.SB,B.SF,B.SC,B.WJ,B.SD,B.WL,B.WI,B.Ny,B.WN,B.WH,B.WO])
x(A.ag,[B.avS,B.azI,B.azL,B.azJ,B.avR,B.azK,B.avT,B.avQ,B.avW,B.avU,B.avP,B.avV])
x(A.ar,[B.a9Y,B.avO,B.b95,B.a9x,B.a9v,B.b96])
x(A.kw,[B.c1v,B.c1r,B.c1z,B.c1A,B.fmI,B.dFA,B.dFy,B.dGn,B.cWh,B.c1U,B.f7c])
x(A.j_,[B.ben,B.bqe])})()
A.ka(b.typeUniverse,JSON.parse('{"b_X":{"a6M":[]},"b_Y":{"aqo":[]},"WK":{"ae":[],"r":[]},"avS":{"ag":["WK"]},"a9Y":{"ar":[],"r":[]},"SB":{"ae":[],"r":[]},"SF":{"ae":[],"r":[]},"azI":{"ag":["SB"]},"azL":{"ag":["SF"]},"ben":{"j_":[]},"SC":{"ae":[],"r":[]},"azJ":{"ag":["SC"]},"WJ":{"ae":[],"r":[]},"SD":{"ae":[],"r":[]},"a9x":{"ar":[],"r":[]},"WL":{"ae":[],"r":[]},"WI":{"ae":[],"r":[]},"Ny":{"ae":[],"r":[]},"WN":{"ae":[],"r":[]},"a9v":{"ar":[],"r":[]},"WH":{"ae":[],"r":[]},"WO":{"ae":[],"r":[]},"avR":{"ag":["WJ"]},"bqe":{"j_":[]},"azK":{"ag":["SD"]},"avO":{"ar":[],"r":[]},"b95":{"ar":[],"r":[]},"avT":{"ag":["WL"]},"avQ":{"ag":["WI"]},"avW":{"ag":["Ny"]},"avU":{"ag":["WN"]},"avP":{"ag":["WH"]},"avV":{"ag":["WO"]},"b96":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tp"),k:x("JV()"),m:x("bt<n,n>"),F:x("qm"),g:x("av<j7?>"),x:x("av<~>"),V:x("M<a9>"),O:x("M<x>"),W:x("M<bd>"),Y:x("M<a0<n,R>>"),t:x("M<a0<n,@>>"),r:x("M<j7>"),w:x("M<+file,name(lb,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<j_>"),a:x("M<dQ>"),p:x("M<r>"),Z:x("M<G>"),G:x("bd"),A:x("cn<ag<ae>>"),n:x("al<j7>"),j:x("al<@>"),I:x("al<G>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hQn"),af:x("CH"),U:x("j7"),b:x("cu"),C:x("aC"),aK:x("va"),ab:x("Ds"),br:x("aqo"),v:x("US"),N:x("n"),X:x("bm<P>"),Q:x("lm"),D:x("dQ"),aw:x("cv<n>"),cd:x("a3<a0<n,@>>"),c7:x("r"),ch:x("bL<al<j7>>"),aW:x("bL<dQ?>"),aY:x("bL<~>"),cx:x("a9w"),b1:x("bc<al<j7>>"),cf:x("bc<dQ?>"),d4:x("bc<~>"),c4:x("ayl"),bG:x("aBq"),q:x("mu"),B:x("oO<Ds>"),c6:x("oO<a6N>"),y:x("R"),i:x("P"),z:x("@"),S:x("G"),aQ:x("bd?"),_:x("al<j7>?"),aL:x("al<@>?"),h:x("a0<n,@>?"),l:x("j7?"),R:x("aC?"),c:x("US?"),d:x("+answerQr,transfer(n,av<al<j7>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Ln,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dQ?"),cm:x("a9d?"),bk:x("ayl?"),ag:x("aBq?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPz=new A.ay(C.az,2,C.r,-1)
D.bEP=new A.a7(C.a1,C.a7,C.w,C.Za,null,null)
D.aRa=new A.o(null,null,null,C.mX,null,D.bEP,C.n)
D.aSw=new A.o(null,null,null,C.mX,null,E.EG,C.n)
D.a7N=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8J=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9r=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaP=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eC3=new A.w("Your team portal",null,C.dQ,null,null,null,null,null,null,null,null,null)
D.eP3=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.QF,null,null,null,null,null,null,null,null,null)
D.cLI=x([D.eC3,C.ar,D.eP3],y.p)
D.ba9=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cLI,null)
D.eSU=new A.w("Create your organization",null,C.h3,null,null,null,null,null,null,null,null,null)
D.eFY=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.QF,null,null,null,null,null,null,null,null,null)
D.cZd=x([D.eSU,C.ar,D.eFY],y.p)
D.bai=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cZd,null)
D.ePy=new A.w("Team Member sign-in",null,C.h3,null,null,null,null,null,null,null,null,null)
D.eJn=new A.w("Enter the access code and password from your organization.",null,G.QF,null,null,null,null,null,null,null,null,null)
D.cXo=x([D.ePy,C.ar,D.eJn],y.p)
D.bas=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cXo,null)
D.bfg=new A.L(16,10,16,28)
D.bfo=new A.L(16,14,16,4)
D.bgB=new A.L(20,0,20,16)
D.bh5=new A.L(20,8,20,16)
D.adk=new A.L(24,22,24,20)
D.Xh=new A.a_(63394,"MaterialIcons",!1)
D.ag8=new A.a_(63515,"MaterialIcons",!1)
D.bqC=new A.a_(983813,"MaterialIcons",!1)
D.bnQ=new A.a_(62867,"MaterialIcons",!1)
D.brA=new A.ac(D.bnQ,44,C.c,null,null,null)
D.bsF=new A.ac(C.rJ,null,C.ak,null,null,null)
D.bu2=new A.ac(C.iC,18,null,null,null,null)
D.bvF=new A.ac(D.Xh,26,C.c,null,null,null)
D.bwa=new A.ac(C.El,null,null,null,null,null)
D.bwI=new A.ac(C.x3,null,null,null,null,null)
D.bxL=new A.ac(W.L_,null,null,null,null,null)
D.by4=new A.ac(C.he,16,null,null,null,null)
D.bBm=new A.ac(C.qg,16,null,null,null,null)
D.brS=new A.ac(C.mA,null,null,null,null,null)
D.bCe=new A.dZ(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.brS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxd=new A.ac(C.DX,null,null,null,null,null)
D.bCj=new A.dZ(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxd,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsc=new A.ac(N.Ev,null,null,null,null,null)
D.bCt=new A.dZ(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.co_=x([C.eS,C.aW,C.az],y.O)
D.bGy=new A.a7(C.ax,C.aE,C.w,D.co_,null,null)
D.cnv=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nc=x([C.eS,C.az],y.O)
D.Nq=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.lZ=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cSM=x([C.q_,C.az],y.O)
D.dGW={iceServers:0}
D.aAg={urls:0}
D.d1N=new A.bt(D.aAg,["stun:stun.l.google.com:19302"],y.m)
D.d1M=new A.bt(D.aAg,["stun:stun1.l.google.com:19302"],y.m)
D.cCZ=x([D.d1N,D.d1M],A.az("M<a0<n,n>>"))
D.d17=new A.bt(D.dGW,[D.cCZ],A.az("bt<n,@>"))
D.FG=new B.Ln(0,"lanDirect")
D.OD=new B.Ln(1,"cloudStash")
D.dcH=new B.Ln(2,"inlineInstant")
D.OE=new B.Ln(3,"webrtcLink")
D.xJ=new B.Ln(4,"videoCloud")
D.eP2=new A.w("Receive file",null,C.mQ,null,null,null,null,null,null,null,null,null)
D.cdJ=x([E.ahO,C.ab,D.eP2],y.p)
D.e8W=new A.cF(C.b_,C.b5,C.j,C.m,null,C.p,null,0,D.cdJ,null)
D.dLf=new A.B(C.c9,D.e8W,null)
D.etF=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZO,null,null,null)
D.eCz=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.etF,null,C.L,null,null,null,null,null,null,null)
D.dKA=new A.B(C.zz,D.eCz,null)
D.aWw=new A.cw(C.C,null,null,D.dKA,null)
D.dPG=new A.cE(0,null,0,28,null,null,D.aWw,null)
D.dPY=new B.a6N(0,"RTCDataChannelConnecting")
D.aFi=new B.a6N(1,"RTCDataChannelOpen")
D.aFj=new B.a6N(3,"RTCDataChannelClosed")
D.dPZ=new B.Dt(0,"RTCIceConnectionStateNew")
D.dQ_=new B.Dt(1,"RTCIceConnectionStateChecking")
D.dQ0=new B.Dt(2,"RTCIceConnectionStateCompleted")
D.dQ1=new B.Dt(3,"RTCIceConnectionStateConnected")
D.dQ2=new B.Dt(4,"RTCIceConnectionStateCount")
D.dQ3=new B.Dt(5,"RTCIceConnectionStateFailed")
D.dQ4=new B.Dt(6,"RTCIceConnectionStateDisconnected")
D.aFk=new B.Dt(7,"RTCIceConnectionStateClosed")
D.aFl=new B.UR(0,"RTCIceGatheringStateNew")
D.dQ5=new B.UR(1,"RTCIceGatheringStateGathering")
D.a22=new B.UR(2,"RTCIceGatheringStateComplete")
D.a23=new B.Mp(0,"RTCPeerConnectionStateClosed")
D.aFm=new B.Mp(1,"RTCPeerConnectionStateFailed")
D.aFn=new B.Mp(2,"RTCPeerConnectionStateDisconnected")
D.aFo=new B.Mp(3,"RTCPeerConnectionStateNew")
D.aFp=new B.Mp(4,"RTCPeerConnectionStateConnecting")
D.aFq=new B.Mp(5,"RTCPeerConnectionStateConnected")
D.dQ6=new B.Mq(0,"RTCSignalingStateStable")
D.dQ7=new B.Mq(1,"RTCSignalingStateHaveLocalOffer")
D.dQ8=new B.Mq(2,"RTCSignalingStateHaveRemoteOffer")
D.dQ9=new B.Mq(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dQa=new B.Mq(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFr=new B.Mq(5,"RTCSignalingStateClosed")
D.ecr=new A.ap(160,48)
D.aXE=new A.f7(2,null,null,null,null,C.az,null,null,null,null)
D.edU=new A.a8(16,16,D.aXE,null)
D.eFp=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.efi=new A.aX(D.eFp,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eM9=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.efl=new A.aX(D.eM9,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eTT=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.efs=new A.aX(D.eTT,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eF4=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.efT=new A.aX(D.eF4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.ePH=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aHL=new A.aX(D.ePH,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQX=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.egl=new A.aX(D.eQX,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVb=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.egA=new A.aX(D.eVb,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eTl=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.egF=new A.aX(D.eTl,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eUt=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ehp=new A.aX(D.eUt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eDP=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ehW=new A.aX(D.eDP,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNR=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eig=new A.aX(D.eNR,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eHn=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eiM=new A.aX(D.eHn,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVh=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eiQ=new A.aX(D.eVh,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eE3=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eiW=new A.aX(D.eE3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eCT=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eja=new A.aX(D.eCT,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eA1=new A.w("NGMY DOC SHARE",null,C.aJ1,null,null,null,null,null,null,null,null,null)
D.eBb=new A.w("Show this to sender",null,C.ka,null,null,null,null,null,null,null,null,null)
D.eC9=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eGi=new A.w("Organization settings",null,C.cr,null,null,null,null,null,null,null,null,null)
D.eGA=new A.w("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eHx=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eHX=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eKu=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eN5=new A.w("Send to their Doc Share",null,C.mP,null,null,null,null,null,null,null,null,null)
D.eNo=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eNG=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eO9=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eOd=new A.w("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eOA=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.ez,null,null,null,null,null,null,null,null,null)
D.eRn=new A.w("Share files & videos\nwith a scan.",null,C.aJ2,null,null,null,null,null,null,null,null,null)
D.eRF=new A.w("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.f0a=new B.WH(null)
D.a4W=new B.a9w(0,"docShare")
D.a4X=new B.a9w(1,"gate")
D.Rp=new B.a9w(2,"gateNoIndividual")})();(function staticFields(){$.aJX=null
$.eV9=function(){var x=y.N
return A.Q(x,x)}()
$.Ez=A.Q(y.N,y.D)
$.adr=A.Q(y.N,A.az("lb"))
$.OQ=A.Q(y.N,y.D)
$.eVG=A.Q(y.N,A.az("a9d"))
$.c1N=A.Q(y.S,A.az("bqz"))
$.fNw=1
$.hyK=null
$.hyJ=null
$.hqJ=null
$.fD2=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hQS","h39",()=>new B.ccy())
x($,"hON","fGt",()=>C.a.q(A.bp(A.bp(A.bp(A.F5(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["omkdXPBdEHqIPyrV7m45YzNSFTM="]=a.current})($__dart_deferred_initializers__);