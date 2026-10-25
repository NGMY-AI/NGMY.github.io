((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={ccN:function ccN(){},
hlm(d){var x=null,w=new B.b03(d,D.dQx,new A.oP(x,x,y.c6),new A.oP(x,x,y.B))
w.br2(d)
return w},
b03:function b03(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ccI:function ccI(d){this.a=d},
ccJ:function ccJ(d){this.a=d},
ccK:function ccK(d){this.a=d},
ccH:function ccH(d){this.a=d},
ccL:function ccL(d){this.a=d},
hln(d,e){var x=y.N
x=new B.b04(d,e,A.Q(x,y.e),A.Q(x,y.z))
x.br3(d,e)
return x},
b04:function b04(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ccO:function ccO(d){this.a=d},
ccP:function ccP(d){this.a=d},
ccQ:function ccQ(d){this.a=d},
ccR:function ccR(d){this.a=d},
ccS:function ccS(d){this.a=d},
ccT:function ccT(d){this.a=d},
ccU:function ccU(d){this.a=d},
ccV:function ccV(d){this.a=d},
fDE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xi.Kh(x,"ngmy_doc_share_v1",new B.f2l(),1)},
hrQ(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ck(d))
if(y.J.b(d))return new Uint8Array(A.ck(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ck(A.AS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
P9(d,e){return B.hGj(d,e)},
hGj(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$P9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aK4
x=7
return A.b(o==null?$.aK4=B.fDE():o,$async$P9)
case 7:s=g
r=new Uint8Array(A.ck(e))
q=J.md(s,"blobs","readwrite")
C.ik.lK(J.mb(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$P9)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
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
return A.i($async$P9,w)},
P8(d){return B.hGi(d)},
hGi(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$P8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aK4
x=7
return A.b(o==null?$.aK4=B.fDE():o,$async$P8)
case 7:s=f
r=J.md(s,"blobs","readonly")
x=8
return A.b(C.ik.yp(J.mb(r,"blobs"),d),$async$P8)
case 8:q=f
x=9
return A.b(J.oY(r),$async$P8)
case 9:o=B.hrQ(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
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
return A.i($async$P8,w)},
ae8(d){return B.hGh(d)},
hGh(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ae8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aK4
x=7
return A.b(p==null?$.aK4=B.fDE():p,$async$ae8)
case 7:s=f
r=J.md(s,"blobs","readwrite")
C.ik.El(J.mb(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$ae8)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
$.ak.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ae8,w)},
f2l:function f2l(){},
hu1(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bk7(w,v))}return u},
h1A(d,e){var x,w={},v=A.aSa("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fmP(w,v,e)
C.uG.xi(v,"change",new B.fmR(w,v,!1))
C.uG.xi(v,"cancel",new B.fmQ(w))
$.eH.lT()
v.click()
A.bK(C.abD,new B.fmO(w),y.H)},
fmP:function fmP(d,e,f){this.a=d
this.b=e
this.c=f},
fmR:function fmR(d,e,f){this.a=d
this.b=e
this.c=f},
fmQ:function fmQ(d){this.a=d},
fmO:function fmO(d){this.a=d},
BC(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BC=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd5()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRA()?3:4
break
case 3:x=5
return A.b(B.fXT(e,d,s,!0,!1,f,g,h,!1,i),$async$BC)
case 5:x=1
break
case 4:x=6
return A.b(B.ON(d,s,f,g,h,i),$async$BC)
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
return A.b(B.GI(s,d),$async$BC)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eYW(s,d),$async$BC)
case 14:x=12
return A.b(r.fXT(q,p,o,n,m,l,k,j,a1,i),$async$BC)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ct(A.eN(new B.fn3(s,i,d,f,g,h),!1,null,y.H)),$async$BC)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ct(A.eN(new B.fn4(s,i,d,f,g,h),!1,null,y.H)),$async$BC)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BC,w)},
ON(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$ON=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVP(e),$async$ON)
case 3:u=k
x=4
return A.b(B.am8(d,e,!1),$async$ON)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GI(e,d),$async$ON)
case 7:if(k){v=D.a54
x=1
break}x=8
return A.b(B.SG(e),$async$ON)
case 8:v=t?D.Rv:D.a55
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVN(d,e)){v=D.a54
x=1
break}x=11
return A.b(B.SG(e),$async$ON)
case 11:v=t?D.Rv:D.a55
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fyX(d,e)){v=D.a54
x=1
break}x=14
return A.b(B.SG(e),$async$ON)
case 14:v=D.Rv
x=1
break
case 13:v=t?D.Rv:D.a55
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ON,w)},
eYW(d,e){var x=0,w=A.j(y.y),v
var $async$eYW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVN(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVP(d),$async$eYW)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYW,w)},
fXT(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ct(A.eN(new B.f3E(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fT8(d,e,f,g,h,i,j){return new B.WN(e,j,d,g,h,i,f,null)},
f5A(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f5A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.as()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c1(C.K,new B.f5D(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f5A)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f5A,w)},
f64(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f64=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.as()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c1(C.K,new B.f66(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f64)
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
return A.i($async$f64,w)},
fDM(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aN
return A.bn(x,new A.b0(4,A.m(16),C.V),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
ffp(d,e){var x=0,w=A.j(y.H),v
var $async$ffp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SG(e),$async$ffp)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$ffp,w)},
fn3:function fn3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fn4:function fn4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9B:function a9B(d,e){this.a=d
this.b=e},
f3E:function f3E(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WN:function WN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
avY:function avY(){this.c=this.a=this.d=null},
cW8:function cW8(d,e){this.a=d
this.b=e},
cW5:function cW5(d){this.a=d},
cW7:function cW7(d){this.a=d},
cW6:function cW6(d){this.a=d},
cWa:function cWa(){},
cW9:function cW9(d){this.a=d},
aa2:function aa2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayr:function ayr(d,e){this.a=d
this.b=e},
aBx:function aBx(d,e,f){this.a=d
this.b=e
this.c=f},
f5D:function f5D(d,e,f){this.a=d
this.b=e
this.c=f},
f5B:function f5B(d){this.a=d},
f5C:function f5C(d,e,f){this.a=d
this.b=e
this.c=f},
f66:function f66(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f65:function f65(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1z(d,e,f,g,h){return B.hgn(d,e,f,g,h)},
hgn(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1z=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iA(r.di(d,new B.c1A(s,e,h,g,f,q),y.g),y.l),$async$c1z)
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
return A.i($async$c1z,w)},
aVK(d,e,f,g,h){return B.hgo(d,e,f,g,h)},
hgo(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVK=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arj("GET",d)
o=A.fvr()
if(o==null)o=new A.JV(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cI(0,C.Dj),$async$aVK)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.B4(),$async$aVK)
case 8:q=j
if(J.a9(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ah(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
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
return A.i($async$aVK,w)},
aVJ(d){return B.hgl(d)},
hgl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.up(d,null).cI(0,C.nc),$async$aVJ)
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
q=A.a4(n)
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
return A.i($async$aVJ,w)},
c1y(d){return B.hgm(d)},
hgm(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.up(d,null).cI(0,C.oV),$async$c1y)
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
r=A.a4(o)
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
return A.i($async$c1y,w)},
c1A:function c1A(d,e,f,g,h,i){var _=this
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
GG(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hgt(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GG(C.a.aV(u,v.length))}return null},
hgu(d){var x=B.GG(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hgp(){var x,w=$.oW(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aF(10)
return C.d.fL(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aF(24)]},
a4o(d){return B.hgq(d)},
hgq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bE),$async$a4o)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
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
return A.i($async$a4o,w)},
a4p(d,e){return B.hgr(d,e)},
hgr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4p=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cy,null),$async$a4p)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
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
return A.i($async$a4p,w)},
Ag(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ag=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.av(),$async$Ag)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GG(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4q(r),$async$Ag)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4o("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ag)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GG(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ag)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hgp()
x=14
return A.b(B.a4q(m),$async$Ag)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4p("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ag)
case 15:k=f
x=16
return A.b(B.a4p("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ag)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ag)
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
return A.i($async$Ag,w)},
a4q(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GG(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4o("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4q)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4q,w)},
a4r(d,e,f,g){return B.hgv(d,e,f,g)},
hgv(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4r=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GG(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4q(r),$async$a4r)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cP(d,0,new B.c1G())>1048576||g.bd(d,new B.c1H())){v=B.D1(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4C("myCode",d,a0),$async$a4r)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ch(s)||J.a9(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.a9(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D1(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aVS(u,g.gH(d),a0),$async$a4r)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oW().aF(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c1I(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVL(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4r)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4r,w)},
D1(d,e,f,g,h){return B.hgs(d,e,f,g,h)},
hgs(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D1=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$D1)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cP(a6,0,new B.c1C())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oW().aF(9999)
h=Date.now()
g=""+1000*h+"_"+C.cz.aF(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aI(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GK(a9,q)
a0=new A.Iv(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D1)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.a9(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eK().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oo(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7T(a1.a,a4,"media",a1.d,a2).w_(m,n,new A.Cm(!0,q.c)),$async$D1)
case 12:J.ci(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$D1)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMs(r),$async$D1)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c1D(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVL(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D1)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMs(r),$async$D1)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D1,w)},
aVL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4o(t),$async$aVL)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b3(r,new B.c1B(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4p(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVL,w)},
Lr(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lr=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4o("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lr)
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
return A.b(B.aVM(k,a0),$async$Lr)
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
return A.b(B.aVR(h),$async$Lr)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SN(g,a0),$async$Lr)
case 10:f=a3
if(f!=null&&J.ct(f)){m+=J.a9(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("E.E")
e=A.z(new A.a3(r,new B.c1E(),q),n)
d=A.z(new A.a3(r,new B.c1F(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dg(d,0,A.dL(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a4p("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Lr)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lr,w)},
aVM(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVM=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}o=J.a5(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aQ(o.h(p,"partCount"))
j=o==null?null:C.k.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hK1(k,j)
C.d.v(s,i)
x=5
return A.b(B.BA(l,m,"Received via My Code",t,e,i),$async$aVM)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMs(s),$async$aVM)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVM,w)},
c1G:function c1G(){},
c1H:function c1H(){},
c1I:function c1I(){},
c1C:function c1C(){},
c1D:function c1D(){},
c1B:function c1B(){},
c1E:function c1E(){},
c1F:function c1F(){},
fn0(d,e){var x=0,w=A.j(y.H)
var $async$fn0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ct(A.eN(new B.fn1(e),!1,null,y.H)),$async$fn0)
case 2:return A.h(null,w)}})
return A.i($async$fn0,w)},
byu(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ct(A.eN(new B.fn2(g,e,f),!1,null,y.y)),$async$byu)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byu,w)},
fn1:function fn1(d){this.a=d},
fn2:function fn2(d,e,f){this.a=d
this.b=e
this.c=f},
SD:function SD(d,e){this.c=d
this.a=e},
azO:function azO(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFw:function dFw(d,e){this.a=d
this.b=e},
SH:function SH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azR:function azR(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGF:function dGF(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGH:function dGH(d){this.a=d},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGI:function dGI(d){this.a=d},
dGJ:function dGJ(d){this.a=d},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGL:function dGL(d,e){this.a=d
this.b=e},
dGM:function dGM(d,e){this.a=d
this.b=e},
dGN:function dGN(d){this.a=d},
dGQ:function dGQ(){},
dGO:function dGO(d){this.a=d},
dGP:function dGP(d,e){this.a=d
this.b=e},
bev:function bev(){},
SE:function SE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azP:function azP(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFx:function dFx(d){this.a=d},
dFy:function dFy(d){this.a=d},
fyY(d){var x=d.hC
if(x>=0)return C.o.M(x)
return 10},
hgx(d){var x=d.k9
if(x>=0)return x
return 4.99},
hgw(d){var x=d.kR,w=y.N
w=x.iC(x,new B.c1K(),w,w)
return w},
fOk(d){var x=d.ka,w=y.N
w=x.iC(x,new B.c1L(),w,w)
return w},
aVP(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.av(),$async$aVP)
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
return A.i($async$aVP,w)},
a4t(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.av(),$async$a4t)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4t)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4t,w)},
SG(d){var x=0,w=A.j(y.H),v,u
var $async$SG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.av(),$async$SG)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
fyX(d,e){var x,w,v
if(B.hgx(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hgw(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.ca(new A.N(Date.now(),0,!1))},
aVN(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fOk(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.ca(new A.N(Date.now(),0,!1))},
fOl(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Y(B.fOk(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.ca(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
am9(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$am9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.av(),$async$am9)
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
return A.i($async$am9,w)},
ama(d){var x=0,w=A.j(y.H),v,u,t
var $async$ama=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.am9(d),$async$ama)
case 3:u=f
x=5
return A.b(A.av(),$async$ama)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$ama)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ama,w)},
am8(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$am8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fyY(d)
if(u<=0){v=!1
x=1
break}if(B.fyX(d,e)){v=!1
x=1
break}x=3
return A.b(B.am9(e),$async$am8)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$am8,w)},
aVO(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GI(e,d),$async$aVO)
case 3:if(g){v=-1
x=1
break}u=B.fyY(d)
if(u<=0){v=-1
x=1
break}if(B.fyX(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.am9(e),$async$aVO)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVO,w)},
c1N(d,e,f){var x=0,w=A.j(y.y),v
var $async$c1N=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GI(e,d),$async$c1N)
case 3:if(h){v=!1
x=1
break}v=B.am8(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1N,w)},
c1M(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c1M=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
x=3
return A.b(B.c1N(d,u,i.gRA()),$async$c1M)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1M,w)},
a4s(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4s=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd5()
if(i.gRA()){v=!0
x=1
break}if(B.aVN(d,u)){v=!0
x=1
break}x=5
return A.b(A.kY(u,C.P8),$async$a4s)
case 5:x=k?3:4
break
case 3:B.fOl(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4s)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kD(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.P8,"Doc Share for Organizations"),$async$a4s)
case 7:if(!k){v=!1
x=1
break}B.fOl(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4s)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4s,w)},
c1K:function c1K(){},
c1L:function c1L(){},
fnx(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fnx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fnx)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eVP.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eVP.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnx,w)},
hM8(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eVP.bk($.eVP,new B.fnz(d))},
fnz:function fnz(d){this.a=d},
eX9(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eX9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mD(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.ja,null,y.H),$async$eX9)
case 3:C.yx.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eH.lT()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eX9,w)},
ad3(d,e,f){var x=0,w=A.j(y.H),v
var $async$ad3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eWl.m(0,d,new B.a9i(A.bi(e,!0,v)))
x=3
return A.b(A.av(),$async$ad3)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.D(["parts",e,"size",f],v,y.C),null)),$async$ad3)
case 2:return A.h(null,w)}})
return A.i($async$ad3,w)},
acY(d){return B.hvJ(d)},
hvJ(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$acY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eWl.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.av(),$async$acY)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b3(s,new B.f_z(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.a9i(r)
$.eWl.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$acY,w)},
OD(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ck(e))
$.EC.m(0,d,u)
x=3
return A.b(B.P9(d,u),$async$OD)
case 3:t=g
if(!t)$.ak.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OD,w)},
aKo(d){return B.hvH(d)},
hvH(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EC.h(0,d)
if(n!=null&&!C.aD.gah(n)){v=n
x=1
break}x=3
return A.b(B.P8(d),$async$aKo)
case 3:p=f
if(p!=null&&!C.aD.gah(p)){$.EC.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.av(),$async$aKo)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aE(r)
x=!J.ch(q)?9:10
break
case 9:B.OD(d,q)
x=11
return A.b(J.hB(s,d),$async$aKo)
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
return A.i($async$aKo,w)},
hsa(d){if(d==null)return A.f2(null,y.K)
if(y.J.b(d))return A.f2(new Uint8Array(A.ck(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.f2(new Uint8Array(A.ck(d)),y.K)
if(y.Q.b(d))return A.f2(new Uint8Array(A.ck(A.AS(d,0,null))),y.K)
if(y.I.b(d))return A.f2(new Uint8Array(A.ck(d)),y.K)
return A.f2(null,y.K)},
a_b(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f3Q(r,t),!1,s)
A.fA(r,"error",new B.f3R(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jy,new B.f3S())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_b,w)},
aKI(d,e,f){return B.hxV(d,e,f)},
hxV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKI=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_b(i),$async$aKI)
case 10:p=a0
if(p==null||p.length===0){$.ak.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.a9(j)
x=11
return A.b(B.P9(o,p),$async$aKI)
case 11:n=a0
if(!n){$.ak.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ci(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.a9(j)===0){x=1
break}x=12
return A.b(B.ad3(k,j,s),$async$aKI)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a4(h)
$.ak.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKI,w)},
aKH(d,e,f){return B.hxU(d,e,f)},
hxU(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKH=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKI(d,e,f),$async$aKH)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_b(f),$async$aKH)
case 10:r=h
if(r==null||r.length===0){$.ak.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EC.m(0,s,r)
$.OV.m(0,s,r)
x=11
return A.b(B.OD(s,r),$async$aKH)
case 11:q=h
if(!q)$.ak.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a4(m)
$.ak.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKH,w)},
Ah(d,e,f,g,h,i){return B.hgG(d,e,f,g,h,i)},
hgG(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ah=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cz.aF(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j7(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aVV(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OD(s,d),$async$Ah)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.av(),$async$Ah)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cL.gcq().aE(d)),$async$Ah)
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
return A.b(B.zp(e),$async$Ah)
case 12:j=a2
J.ci(j,m)
x=13
return A.b(B.EL(e,j),$async$Ah)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ah,w)},
SI(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zp(d),$async$SI)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cz.aF(99999)
n=p.b
l=o.type
l.toString
k=B.fOn(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j7(m,n,k,l,j,"From folder",null,B.aVV(),null)
$.adv.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_b(o),$async$SI)
case 7:g=a1
x=g!=null&&!C.aD.gah(g)?8:10
break
case 8:$.EC.m(0,h,g)
$.OV.m(0,h,g)
B.OD(h,g)
x=9
break
case 10:x=11
return A.b(B.aKH(d,m,o),$async$SI)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EL(d,t),$async$SI)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
fz1(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fz1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fOn(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GJ(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aD.gah(s)){v=B.Ah(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fz1,w)},
GJ(d,e,f,g,h,i){return B.hgF(d,e,f,g,h,i)},
hgF(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GJ=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cz.aF(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Iv(A.dL(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GJ)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ch(m)){x=6
break}J.fS(n,m)
o+=J.a9(m)
case 9:if(!(J.a9(n)>=1048576)){x=10
break}l=new Uint8Array(A.ck(J.PG(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.km(0,1048576,J.a9(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.P9(k,l),$async$GJ)
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
return A.b(j.a9(0),$async$GJ)
case 12:x=s.pop()
break
case 5:x=J.a9(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.P9(k,new Uint8Array(A.ck(n))),$async$GJ)
case 15:J.ci(q,k)
case 14:if(J.a9(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ad3(r,q,g),$async$GJ)
case 16:f=new B.j7(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aVV(),null)
x=17
return A.b(B.zp(d),$async$GJ)
case 17:e=a6
J.ci(e,f)
x=18
return A.b(B.EL(d,e),$async$GJ)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GJ,w)},
SK(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SK=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adv.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_b(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.acY(s),$async$SK)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.P8(u[o]),$async$SK)
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
v=A.AS(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OV.h(0,s)
if(i==null)i=$.EC.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qM(d,e),$async$SK)
case 12:i=a0
if(i!=null&&!C.aD.gah(i))$.OV.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
fOn(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qM(d,e){return B.hgH(d,e)},
hgH(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qM=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OV.h(0,f)
if(e==null)e=$.EC.h(0,f)
if(e!=null&&!C.aD.gah(e)){v=e
x=1
break}s=$.adv.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_b(s),$async$qM)
case 9:r=a3
if(r!=null&&!C.aD.gah(r)){$.EC.m(0,f,r)
$.OV.m(0,f,r)
B.OD(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a4(d)
$.ak.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.acY(f),$async$qM)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auM(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.P8(g[l]),$async$qM)
case 16:k=a3
if(k!=null&&!C.aD.gah(k))n.G(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akp()
if(!C.aD.gah(r)){$.EC.m(0,f,r)
$.OV.m(0,f,r)
v=r
x=1
break}$.ak.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKo(f),$async$qM)
case 17:j=a3
if(j!=null&&!C.aD.gah(j)){$.OV.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SK(a0,a1,0,g),$async$qM)
case 20:i=a3
if(i!=null&&!C.aD.gah(i)){h=new Uint8Array(A.ck(i))
$.EC.m(0,f,h)
$.OV.m(0,f,h)
B.OD(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qM,w)},
hgK(d){var x,w,v=$.adv.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hgL(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hgI(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amg(d,e,f,g,h){return B.hgJ(d,e,f,g,h)},
hgJ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amg=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adv.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_b(s),$async$amg)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qM(g,e),$async$amg)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.a9(r)/2|0,J.a9(r))
n=$.eK().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w_(h,r,new A.Cm(!0,e.c)),$async$amg)
case 12:f.$2(J.a9(r),J.a9(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
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
return A.i($async$amg,w)},
fOp(d,e,f,g,h){var x,w,v,u,t=$.fOo
$.fOo=t+1
x=Date.now()
w=""+1000*x+"_"+C.cz.aF(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c1Y.m(0,t,new B.bqI(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auM(u)))
return t},
fz2(d){var x=0,w=A.j(y.H)
var $async$fz2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fz2,w)},
GK(d,e){var $async$GK=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adv.h(0,h)
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
return A.px(B.SK(d,e,p,o<q?o:q),$async$GK,w)
case 8:n=a1
x=n!=null&&!C.aD.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.px(A.Eb(n),$async$GK,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.px(B.acY("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GK,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.px(B.P8(h[l]),$async$GK,w)
case 18:k=a1
x=k!=null&&!C.aD.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.px(A.Eb(k),$async$GK,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.px(B.qM(d,e),$async$GK,w)
case 22:j=a1
x=j!=null&&!C.aD.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.px(A.Eb(A.AS(j,p,o<i?o:i)),$async$GK,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.px(null,0,w)
case 2:return A.px(t.at(-1),1,w)}})
var x=0,w=A.fWO($async$GK,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fYy(w)},
aVX(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aVX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c1Y.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a1N(),$async$aVX)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVX,w)},
SJ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c1Y.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a1N(),$async$SJ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.ak.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ad3(r.c,u,r.z),$async$SJ)
case 4:t=new B.j7(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aVV(),null)
u=r.a
x=5
return A.b(B.zp(u),$async$SJ)
case 5:s=f
J.ci(s,t)
x=6
return A.b(B.EL(u,s),$async$SJ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
a4z(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c1Y.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ae8(u[s]),$async$a4z)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4z,w)},
c2_(d,e,f){var x=0,w=A.j(y.H)
var $async$c2_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvG(d,e,f),$async$c2_)
case 2:return A.h(null,w)}})
return A.i($async$c2_,w)},
c20(d,e,f){var x=0,w=A.j(y.H)
var $async$c20=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvH(d,e,f),$async$c20)
case 2:return A.h(null,w)}})
return A.i($async$c20,w)},
D2(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zp(d),$async$D2)
case 2:p=g
J.mX(p,new B.c1Z(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EC.W(0,v)
$.adv.W(0,e)
x=3
return A.b(B.acY(v),$async$D2)
case 3:u=g
$.eWl.W(0,v)
x=4
return A.b(A.av(),$async$D2)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D2)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D2)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ae8(s[q]),$async$D2)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ae8(v),$async$D2)
case 13:x=14
return A.b(B.EL(d,p),$async$D2)
case 14:return A.h(null,w)}})
return A.i($async$D2,w)},
aVW(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aVW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qM(d,e),$async$aVW)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eX9(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVW,w)},
zp(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.av(),$async$zp)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b3(u,new B.f3T(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zp,w)},
EL(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.av(),$async$EL)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b3(e,new B.f7K(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EL)
case 3:return A.h(null,w)}})
return A.i($async$EL,w)},
bvG(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zp(d),$async$bvG)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f2x(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azd(f))
x=4
return A.b(B.EL(d,u),$async$bvG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvG,w)},
bvH(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zp(d),$async$bvH)
case 3:u=h
t=J.cB(u)
s=t.be(u,new B.f2y(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cxs(f))
x=4
return A.b(B.EL(d,u),$async$bvH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvH,w)},
a9i:function a9i(d){this.a=d},
f_z:function f_z(){},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3R:function f3R(d){this.a=d},
f3S:function f3S(){},
c1Z:function c1Z(d){this.a=d},
bqI:function bqI(d,e,f,g,h,i,j,k,l){var _=this
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
f3T:function f3T(){},
f7K:function f7K(){},
f2x:function f2x(d){this.a=d},
f2y:function f2y(d){this.a=d},
a4A(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bd(d,new B.c23())?3:4
break
case 3:x=5
return A.b(B.aVY(d,e),$async$a4A)
case 5:u=g
if(u!=null){t=u.c
B.Lt(d,u.b,e,t)}v=u
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
return A.b(B.aVT(s),$async$a4A)
case 10:case 9:if(g){v=new A.O0(1,D.OM,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SL(d,e),$async$a4A)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SQ(!0,!0,d,e),$async$a4A)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lt(d,D.xO,e,t)
v=new A.O0(p,D.xO,t)
x=1
break}v=B.c22(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4A,w)},
SL(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4C(null,d,e),$async$SL)
case 3:p=g
try{u=C.Q.aC(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.a9(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aVS(p,d.length,e),$async$SL)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c20(e,C.d.gI(d).a,r.b),$async$SL)
case 7:case 6:q=r.a
x=8
return A.b(B.Lt(d,D.OM,e,q),$async$SL)
case 8:v=new A.O0(d.length,D.OM,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
SM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lY(D.m_)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4B(d,e),$async$SM)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c1W(s,d,e,t),$async$SM)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aVT(t),$async$SM)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qM(e,d),$async$SM)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SL(A.a([d],y.r),e),$async$SM)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
SO(){var x=0,w=A.j(y.H)
var $async$SO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fyW(),$async$SO)
case 2:x=3
return A.b(B.aMJ(),$async$SO)
case 3:return A.h(null,w)}})
return A.i($async$SO,w)},
a4B(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aVV()
x=3
return A.b(B.c2_(e,d.a,u),$async$a4B)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
Lt(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OM&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4B(p,f),$async$Lt)
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
return A.b(B.c1V(o,p,u,f),$async$Lt)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c1W(o,p,f,t),$async$Lt)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c1U(o,u,p,f),$async$Lt)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lt,w)},
aVY(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aVY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c21(e,d),$async$aVY)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SQ(!1,!0,d,e),$async$aVY)
case 4:u=g
if(u!=null){t=u.b
v=new A.O0(u.a,D.xO,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVY,w)},
c21(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c21=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SK(d,s,0,1),$async$c21)
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
return A.i($async$c21,w)},
c22(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c22=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4C(null,d,e),$async$c22)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fOm(u)
if(t.length>800){v=null
x=1
break}v=new A.O0(d.length,D.dd7,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c22,w)},
amh(d,e,f){return B.hgO(d,e,f)},
hgO(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amh=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cT(g,"\ufeff"))g=J.mc(g,1)
x=B.fz0(g)?3:4
break
case 3:x=5
return A.b(B.c1X(g),$async$amh)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cT(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mc(g,13))
try{k=B.D3(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a4(a1)
$.ak.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cT(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mc(g,13))
u=9
x=12
return A.b(B.aVR(q),$async$amh)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SN(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a4(f)
$.ak.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cT(g,"NGMYDOCSYNC0|"))try{n=B.fz_(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SN(n,a0)
v=k
x=1
break}catch(a1){m=A.a4(a1)
$.ak.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cT(g,"N2|")){v=B.GL(C.a.i(J.mc(g,3)),d,a0)
x=1
break}if(J.cT(g,"NGMYDOCSYNC2|")){v=B.GL(C.a.i(J.mc(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GL(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SN(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amh,w)},
GL(d,e,f){return B.hgM(d,e,f)},
hgM(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GL=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cp(A.t(s)+"/manifest.json",0,null)
q=A.cp(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVJ(r),$async$GL)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVJ(A.cp(s,0,null)),$async$GL)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1z(o,r,a1,n,a2),$async$GL)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.c1y(q),$async$GL)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SN(l,a2),$async$GL)
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
k=A.a4(d)
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
return A.i($async$GL,w)},
a4C(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4C=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qM(f,r),$async$a4C)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.D(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cL.gcq().aE(q)],t,s))
x=3
break
case 4:u=A.Q(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.N(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.aj(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
SN(d,e){return B.hgN(d,e)},
hgN(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SN=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
if(J.a9(j)===0){x=7
break}i=C.cw.aE(j)
d=J.a9(q)!==0?q:null
x=9
return A.b(B.Ah(i,a3,d,k,l,o),$async$SN)
case 9:h=a5
if(h!=null)J.ci(n,h)
x=7
break
case 8:f=J.a9(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a4(a1)
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
return A.i($async$SN,w)},
Ls:function Ls(d,e){this.a=d
this.b=e},
c23:function c23(){},
ZL(d){var x=A.K(d).ax.a===C.H,w=x?D.a9y:D.a7V,v=x?D.aaW:C.c,u=x?C.aN:C.M,t=x?C.bP:C.ai,s=x?D.a8R:C.aJ
return new A.aCJ([w,s,v,u,t,x?C.eT:C.bU])},
h2h(d,e){var x=e?C.x.j(0.72):C.aV
return A.cb(null,x,!0,null,new B.frv(e),d,null,!0,!0,y.N)},
c1J(d,e,f,g,h,i,j,k,l){return new B.SF(e,l,d,f,k,j,g,h,i,null)},
WP(d,e,f,g,h,i,j){return new B.b9e(g,h,j,e,i,d,f,null)},
frv:function frv(d){this.a=d},
WM:function WM(d,e){this.c=d
this.a=e},
avX:function avX(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cW4:function cW4(d){this.a=d},
cW2:function cW2(d){this.a=d},
cW3:function cW3(d){this.a=d},
bqn:function bqn(){},
SF:function SF(d,e,f,g,h,i,j,k,l,m){var _=this
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
azQ:function azQ(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGD:function dGD(d){this.a=d},
dG0:function dG0(d,e){this.a=d
this.b=e},
dG1:function dG1(d,e){this.a=d
this.b=e},
dFA:function dFA(d,e,f){this.a=d
this.b=e
this.c=f},
dFz:function dFz(d){this.a=d},
dFB:function dFB(d,e){this.a=d
this.b=e},
dFG:function dFG(d,e,f){this.a=d
this.b=e
this.c=f},
dFF:function dFF(d){this.a=d},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGs:function dGs(d){this.a=d},
dFY:function dFY(d,e,f){this.a=d
this.b=e
this.c=f},
dFV:function dFV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFE:function dFE(d){this.a=d},
dG5:function dG5(d){this.a=d},
dG4:function dG4(){},
dFK:function dFK(d){this.a=d},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGp:function dGp(d,e){this.a=d
this.b=e},
dGq:function dGq(d,e){this.a=d
this.b=e},
dFW:function dFW(d,e){this.a=d
this.b=e},
dFX:function dFX(d,e){this.a=d
this.b=e},
dGh:function dGh(d,e){this.a=d
this.b=e},
dGd:function dGd(d){this.a=d},
dGc:function dGc(d){this.a=d},
dGe:function dGe(){},
dGf:function dGf(){},
dGg:function dGg(d,e){this.a=d
this.b=e},
dGi:function dGi(){},
dGj:function dGj(d){this.a=d},
dGb:function dGb(d,e){this.a=d
this.b=e},
dG6:function dG6(d){this.a=d},
dG7:function dG7(d){this.a=d},
dG8:function dG8(d){this.a=d},
dG9:function dG9(d){this.a=d},
dGa:function dGa(d){this.a=d},
dFH:function dFH(){},
dFI:function dFI(d){this.a=d},
dFJ:function dFJ(d,e){this.a=d
this.b=e},
dFD:function dFD(d,e){this.a=d
this.b=e},
dFC:function dFC(d,e,f){this.a=d
this.b=e
this.c=f},
dFZ:function dFZ(d){this.a=d},
dG_:function dG_(d,e,f){this.a=d
this.b=e
this.c=f},
dFT:function dFT(d,e){this.a=d
this.b=e},
dFP:function dFP(d){this.a=d},
dFM:function dFM(d,e,f){this.a=d
this.b=e
this.c=f},
dFQ:function dFQ(d){this.a=d},
dFR:function dFR(d){this.a=d},
dFS:function dFS(){},
dFU:function dFU(d,e){this.a=d
this.b=e},
dFN:function dFN(d){this.a=d},
dFL:function dFL(d,e,f){this.a=d
this.b=e
this.c=f},
dFO:function dFO(){},
dG3:function dG3(d){this.a=d},
dG2:function dG2(d,e){this.a=d
this.b=e},
dGn:function dGn(d,e){this.a=d
this.b=e},
dGk:function dGk(d){this.a=d},
dGl:function dGl(d,e){this.a=d
this.b=e},
dGm:function dGm(d){this.a=d},
dGA:function dGA(d){this.a=d},
dGy:function dGy(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGB:function dGB(){},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGu:function dGu(d,e){this.a=d
this.b=e},
dGv:function dGv(d,e,f){this.a=d
this.b=e
this.c=f},
dGt:function dGt(d,e,f){this.a=d
this.b=e
this.c=f},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d,e){this.a=d
this.b=e},
avU:function avU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9d:function b9d(d,e,f){this.c=d
this.d=e
this.a=f},
cW0:function cW0(){},
cW1:function cW1(){},
a9C:function a9C(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWo:function cWo(){},
cWn:function cWn(d){this.a=d},
WO:function WO(d,e,f){this.c=d
this.d=e
this.a=f},
avZ:function avZ(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWk:function cWk(d){this.a=d},
cWl:function cWl(d,e,f){this.a=d
this.b=e
this.c=f},
cWm:function cWm(d,e){this.a=d
this.b=e},
cWi:function cWi(d,e){this.a=d
this.b=e},
cWg:function cWg(d){this.a=d},
cWe:function cWe(d){this.a=d},
cWb:function cWb(d){this.a=d},
cWh:function cWh(d){this.a=d},
cWd:function cWd(d){this.a=d},
cWj:function cWj(d){this.a=d},
cWf:function cWf(d){this.a=d},
cWc:function cWc(d){this.a=d},
WL:function WL(d,e,f){this.c=d
this.d=e
this.a=f},
avW:function avW(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cVY:function cVY(d){this.a=d},
cVX:function cVX(d,e){this.a=d
this.b=e},
cVZ:function cVZ(d){this.a=d},
cVW:function cVW(d,e){this.a=d
this.b=e},
cW_:function cW_(d){this.a=d},
cVV:function cVV(d,e){this.a=d
this.b=e},
cVR:function cVR(d){this.a=d},
cVS:function cVS(d){this.a=d},
cVT:function cVT(d,e){this.a=d
this.b=e},
cVU:function cVU(d){this.a=d},
ND:function ND(d,e,f){this.c=d
this.d=e
this.a=f},
aw1:function aw1(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWB:function cWB(d){this.a=d},
cWC:function cWC(d){this.a=d},
cWD:function cWD(d){this.a=d},
cWE:function cWE(d){this.a=d},
cWF:function cWF(d,e){this.a=d
this.b=e},
cWG:function cWG(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWH:function cWH(d){this.a=d},
WQ:function WQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aw_:function aw_(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWx:function cWx(d,e){this.a=d
this.b=e},
cWy:function cWy(d,e){this.a=d
this.b=e},
cWp:function cWp(d,e,f){this.a=d
this.b=e
this.c=f},
cWq:function cWq(d){this.a=d},
cWr:function cWr(){},
cWw:function cWw(){},
cWs:function cWs(d,e){this.a=d
this.b=e},
cWt:function cWt(d,e){this.a=d
this.b=e},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWv:function cWv(d,e){this.a=d
this.b=e},
a9A:function a9A(d,e){this.c=d
this.a=e},
cVQ:function cVQ(d){this.a=d},
WK:function WK(d){this.a=d},
avV:function avV(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WR:function WR(d,e){this.c=d
this.a=e},
aw0:function aw0(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWA:function cWA(d){this.a=d},
cWz:function cWz(d){this.a=d},
b9e:function b9e(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hgP(){var x,w=$.oW(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aF(32)]
return"VT"+C.d.fL(v)},
Lu(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$Lu)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$Lu)
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
q=A.a4(n)
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
return A.i($async$Lu,w)},
a4D(d){return B.hgQ(d)},
hgQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4D)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4D)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.ak.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4D,w)},
SP(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lu(),$async$SP)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.Y(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4D(s),$async$SP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SP,w)},
SQ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bY(),$async$SQ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.S(f).k("a3<1>")
u=A.z(new A.a3(f,new B.c25(),t),t.k("E.E"))}if(u.length===0){v=null
x=1
break}s=B.hgP()
t=A.S(u).k("I<1,a0<n,aC>>")
r=A.z(new A.I(u,new B.c26(s),t),t.k("ai.E"))
x=6
return A.b(B.Lu(),$async$SQ)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4D(q),$async$SQ)
case 7:x=8
return A.b(B.a4E(r,u,g,s),$async$SQ)
case 8:v=new A.bkz(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SQ,w)},
ami(d){var x=0,w=A.j(y.y),v,u,t
var $async$ami=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lu(),$async$ami)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ami,w)},
c27(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c27=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lu(),$async$c27)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c27,w)},
a4E(d,e,f,g){return B.hgR(d,e,f,g)},
hgR(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4E=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.a9(q)===0){x=8
break}x=10
return A.b(B.amg("media",r,new B.c24(s,e,g),f,q),$async$a4E)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SP(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4E)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SP(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4E)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
$.ak.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SP(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4E)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4E,w)},
D3(d,e,f){return B.hgS(d,e,f)},
hgS(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D3=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$D3)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ami(b3),$async$D3)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kQ,null,g),$async$D3)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ami(b3),$async$D3)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lu(),$async$D3)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gH(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a5(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.a9(m)===0){x=11
break}u=14
a8=$.eK().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oo(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7T(a8.a,b0,"media",a8.d,a9).Bp(m)
k=A.cp(l,0,null)
x=17
return A.b(B.aVK(k,n,o,s,b7),$async$D3)
case 17:j=c0
if(j!=null){J.ci(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a4(b4)
$.ak.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.a9(p)===0){v=null
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
x=J.a9(h)!==0?25:26
break
case 25:u=28
a2=$.eK().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oo(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7T(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D3)
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
a0=A.dQ(A.Y(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4D(e),$async$D3)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D3,w)},
c25:function c25(){},
c26:function c26(d){this.a=d},
c24:function c24(d,e,f){this.a=d
this.b=e
this.c=f},
aMJ(){var x=0,w=A.j(y.H),v,u
var $async$aMJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hrD=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aMJ)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aMJ)
case 3:u=$.fDX
u=u==null?null:u.bw(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aMJ)
case 4:$.fDX=$.hzF=$.hzG=null
return A.h(null,w)}})
return A.i($async$aMJ,w)},
f7m(d){var x=0,w=A.j(y.H),v,u
var $async$f7m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a29){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f7n(new A.bL(u,y.aY))
x=3
return A.b(u.i0(0,C.hq,new B.f7o()),$async$f7m)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f7m,w)},
hzD(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hgz(x):x},
fE0(d){var x=0,w=A.j(y.T),v,u,t
var $async$fE0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amk(u)
x=1
break}v=B.fz_(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fE0,w)},
fE_(d){var x=0,w=A.j(y.T),v,u,t
var $async$fE_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.aml(u)
x=1
break}v=B.fz_(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fE_,w)},
fnh(d){var x=0,w=A.j(y.T),v
var $async$fnh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aml(d),$async$fnh)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnh,w)},
bwx(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fE_(d),$async$bwx)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aC(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.a9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwx,w)},
eXY(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eXY=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SJ(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.Ah(d.akp(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXY,w)},
EN(d,e,f){return B.hBS(d,e,f)},
hBS(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EN=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fE0(a1),$async$EN)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aC(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a5(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.a9(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h43().azs(D.d1x,null),$async$EN)
case 4:l=d.fDX=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auM(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f7R(f,k,new B.f7S(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4C(0,new B.UV(r,"offer")),$async$EN)
case 5:d=l
x=7
return A.b(l.ahk(0),$async$EN)
case 7:x=6
return A.b(d.a4u(0,a4),$async$EN)
case 6:x=8
return A.b(B.f7m(l),$async$EN)
case 8:x=9
return A.b(l.al7(),$async$EN)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hzD(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amm(m,h),$async$EN)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fOm(h)
case 11:v=new A.bjS(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EN,w)},
f7n:function f7n(d){this.a=d},
f7o:function f7o(){},
f7S:function f7S(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f7R:function f7R(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f7Q:function f7Q(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hDE(d){switch(d){case"new":return D.dQy
case"checking":return D.dQz
case"connected":return D.dQB
case"completed":return D.dQA
case"failed":return D.dQD
case"disconnected":return D.dQE
case"closed":return D.aFq
case"count":return D.dQC}return D.aFq},
hDF(d){switch(d){case"new":return D.aFr
case"gathering":return D.dQF
case"complete":return D.a29}return D.aFr},
hNB(d){switch(d){case"stable":return D.dQG
case"have-local-offer":return D.dQH
case"have-local-pranswer":return D.dQJ
case"have-remote-offer":return D.dQI
case"have-remote-pranswer":return D.dQK
case"closed":return D.aFx}return D.aFx},
hLV(d){switch(d){case"new":return D.aFu
case"connecting":return D.aFv
case"connected":return D.aFw
case"closed":return D.a2a
case"disconnected":return D.aFt
case"failed":return D.aFs}return D.a2a},
a6S:function a6S(d,e){this.a=d
this.b=e},
Mv:function Mv(d,e){this.a=d
this.b=e},
UU:function UU(d,e){this.a=d
this.b=e},
Mu:function Mu(d,e){this.a=d
this.b=e},
Dw:function Dw(d,e){this.a=d
this.b=e},
ccM:function ccM(){},
fAF(d){var x=new B.Dv()
x.a=d
x.b=!0
return x},
Dv:function Dv(){this.b=this.a=$},
a6R:function a6R(){},
aqu:function aqu(){},
UV:function UV(d,e){this.a=d
this.b=e},
fyW(){var x=0,w=A.j(y.H)
var $async$fyW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fyW,w)},
fyZ(d,e,f){var x=0,w=A.j(y.T),v
var $async$fyZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lY(D.m_))){v=null
x=1
break}v=B.fnx(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyZ,w)},
fOm(d){var x,w=F.a7r.a1x(C.dB.aE(d),null)
if(w.length===0){x=C.dB.aE(d)
return C.cL.gcq().aE(x)}return C.cL.gcq().aE(w)},
hgy(d){var x,w,v=C.cw.aE(d)
try{x=C.c0.c4(0,F.a7q.b6h(v,!1))
return x}catch(w){x=C.c0.c4(0,v)
return x}},
fz_(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hgy(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c4(0,C.cw.aE(x))
return v}catch(u){return x}}return null},
hgz(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hgA(){var x,w=$.oW(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aF(32)]
return"DS"+C.d.fL(v)},
aVQ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aVQ)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$aVQ,w)},
c1O(d,e){return B.hgB(d,e)},
hgB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c1O=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c1O)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$c1O,w)},
aVT(d){var x=0,w=A.j(y.y),v,u,t
var $async$aVT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVQ(d),$async$aVT)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVT,w)},
aVS(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aVS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hgA()
r=C.a.i(f)
t=C.dB.aE(s)
x=3
return A.b(B.c1O(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gcq().aE(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aVS)
case 3:if(!h){v=null
x=1
break}v=new A.YQ("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVS,w)},
aVR(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aVR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.a9(o)===0){v=null
x=1
break}x=3
return A.b(B.aVQ(o),$async$aVR)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.a9(u)===0){v=null
x=1
break}try{t=C.c0.c4(0,C.cw.aE(u))
if(J.iJ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a4(n)
$.ak.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aVR,w)},
c1P(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c1P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.a9(q)===0){x=1
break}u=4
x=7
return A.b(X.bxr("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c1P)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1P,w)},
aVU(d){var x=0,w=A.j(y.h),v,u,t
var $async$aVU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GH(),$async$aVU)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Y(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVU,w)},
amd(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.av(),$async$amd)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aVU(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amd,w)},
amb(d,e){var x=0,w=A.j(y.H)
var $async$amb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.av(),$async$amb)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amb)
case 2:return A.h(null,w)}})
return A.i($async$amb,w)},
a4v(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4v=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4v)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GH(),$async$a4v)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dd(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4u(s),$async$a4v)
case 5:x=6
return A.b(B.amb(f,u),$async$a4v)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4v,w)},
a4w(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4w=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4w)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GH(),$async$a4w)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
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
return A.b(B.amb(g,q),$async$a4w)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4u(u),$async$a4w)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
a4x(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4x=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4x)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GH(),$async$a4x)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aVN(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.av(),$async$a4x)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4x)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
c1Q(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c1Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.a9(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.av(),$async$c1Q)
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
return A.i($async$c1Q,w)},
GI(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c1Q(d),$async$GI)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aVU(t),$async$GI)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amc(d),$async$GI)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVN(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amc(d),$async$GI)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GI,w)},
amc(d){var x=0,w=A.j(y.H)
var $async$amc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.av(),$async$amc)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amc)
case 2:return A.h(null,w)}})
return A.i($async$amc,w)},
aVV(){var x,w=$.oW(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aF(32)]
return C.d.fL(v)},
a4y(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fz0(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c1T(d){return B.hgD(d)},
hgD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c1T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4y(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c1T)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$c1T,w)},
amf(d,e){return B.hgE(d,e)},
hgE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4y(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amf)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$amf,w)},
c1V(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c1V=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4y(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amf(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c1V)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c1V,w)},
c1U(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c1U=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4y(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amf(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c1U)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c1U,w)},
c1W(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c1W=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4y(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amf(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1W,w)},
c1X(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c1X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fz0(d)){v=null
x=1
break}x=3
return A.b(B.c1T(d),$async$c1X)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a5(u)
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
return A.i($async$c1X,w)},
a4F(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4F=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$a4F)
case 3:if(!e){v=A.Q(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a4F)
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
q=A.a4(n)
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
return A.i($async$a4F,w)},
amj(d){return B.hgT(d)},
hgT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bY(),$async$amj)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amj)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.ak.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amj,w)},
amk(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.a9(j)===0||!J.cT(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bY(),$async$amk)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4F(),$async$amk)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.a9(q)===0){v=null
x=1
break}u=6
p=C.c0.c4(0,C.cw.aE(q))
if(J.iJ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.Y(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amj(s),$async$amk)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a4(i)
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
return A.i($async$amk,w)},
amm(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bY(),$async$amm)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4F(),$async$amm)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.Y(s,r,q),r,q)
r=C.dB.aE(C.a.i(e))
q.m(0,"answer",C.cL.gcq().aE(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amj(u),$async$amm)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amm,w)},
aml(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aml=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bY(),$async$aml)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4F(),$async$aml)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.a9(u)===0){v=null
x=1
break}try{r=C.c0.c4(0,C.cw.aE(u))
v=r
x=1
break}catch(n){t=A.a4(n)
$.ak.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aml,w)},
alm(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alm)
case 3:r=g
u=4
x=7
return A.b(r.hk(C.fR),$async$alm)
case 7:q=g
o=q
o=o==null?null:J.f6(J.xC(o))
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
return A.i($async$alm,w)},
hK1(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
flW(d){return B.hK3(d)},
hK3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$flW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eK().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").J8(d,3600),$async$flW)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
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
return A.i($async$flW,w)},
BA(d,e,f,g,h,i){var x=null
return B.hK0(d,e,f,g,h,i)},
hK0(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BA=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fOp(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fz2(r),$async$BA)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.flW(o),$async$BA)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4z(r),$async$BA)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIe)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JV(A.a([],g))
x=15
return A.b(d.eK(0,A.arj("GET",A.cp(n,0,null))).cI(0,C.Dj),$async$BA)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4z(r),$async$BA)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Iv(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BA)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.a9(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aVX(r,k),$async$BA)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BA)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.SJ(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a4(a4)
$.ak.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4z(r),$async$BA)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BA,w)},
aMs(d){return B.hK2(d)},
hK2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eK().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMs)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.ak.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMs,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[209]
H=c[101]
P=c[190]
E=c[181]
G=c[83]
Q=c[154]
R=c[102]
S=c[188]
I=c[214]
K=c[220]
B=a.updateHolder(c[21],B)
D=c[218]
T=c[153]
L=c[171]
U=c[62]
V=c[221]
W=c[68]
X=c[53]
M=c[82]
Y=c[219]
N=c[112]
B.ccN.prototype={
azs(d,e){return this.cyX(d,e)},
cyX(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$azs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.Q(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.k1(A.cs(t)))
t=J.k(u)
v=B.hln(C.cL.gcq().aE(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$azs,w)}}
B.b03.prototype={
br2(d){var x=this,w=x.w
w.onclose=A.h7(new B.ccI(x))
w.onopen=A.h7(new B.ccJ(x))
w.onmessage=A.h7(new B.ccK(x))
w.onbufferedamountlow=A.h7(new B.ccL(x))},
gdh(d){return this.x},
adL(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$adL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dv()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fAF(J.f6(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$adL)
case 8:v=t.fAF(s.akA(f,0,null))
x=1
break
case 7:case 4:v=B.fAF(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adL,w)}}
B.b04.prototype={
br3(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.ccO(x)))
w.addEventListener("icecandidate",A.h7(new B.ccP(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.ccQ(x)))
w.onicegatheringstatechange=A.h7(new B.ccR(x))
w.addEventListener("signalingstatechange",A.h7(new B.ccS(x)))
if(!$.fHl())w.addEventListener("connectionstatechange",A.h7(new B.ccT(x)))
w.addEventListener("negotiationneeded",A.h7(new B.ccU(x)))
w.addEventListener("track",A.h7(new B.ccV(x)))},
ahk(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k1(A.cs(A.Q(y.N,y.z)))),y.aQ),$async$ahk)
case 3:t=f
v=new B.UV(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahk,w)},
a4u(d,e){return this.bgI(0,e)},
bgI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4u)
case 2:return A.h(null,w)}})
return A.i($async$a4u,w)},
a4C(d,e){return this.bgY(0,e)},
bgY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4C)
case 2:return A.h(null,w)}})
return A.i($async$a4C,w)},
al7(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$al7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.UV(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$al7,w)},
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
B.a9B.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WN.prototype={
S(){return new B.avY()},
gd5(){return this.c}}
B.avY.prototype={
Z(){this.a0()
this.aaD()},
aaD(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVO(u.e,u.c),$async$aaD)
case 2:t=e
if(v.c!=null)v.n(new B.cW8(v,t))
return A.h(null,w)}})
return A.i($async$aaD,w)},
Of(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Of=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.am8(t.e,t.c,!1),$async$Of)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(D.eje)
x=1
break}x=4
return A.b(B.a4t(u.a.c,"individual"),$async$Of)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a33(A.eN(new B.cW5(u),!1,null,y.H)),$async$Of)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Of,w)},
Hy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Hy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f5A(o),$async$Hy)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4x(o.e,r,s,q),$async$Hy)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.E(y.q).f.P(D.egj)
x=1
break}x=5
return A.b(B.a4t(u.a.c,"member"),$async$Hy)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a33(A.eN(new B.cW7(u),!1,null,y.H)),$async$Hy)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Hy,w)},
wQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4s(t.e,o,t.f,t.r,t.w,s),$async$wQ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4t(u.a.c,"org_owner"),$async$wQ)
case 4:x=5
return A.b(B.amd(u.a.c),$async$wQ)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f64(o),$async$wQ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4v(s,t,o,q.c),$async$wQ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.E(y.q).f.P(D.egg)
x=1
break}x=10
return A.b(B.amd(u.a.c),$async$wQ)
case 10:o=u.c
if(o==null){x=1
break}o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a33(A.eN(new B.cW6(u),!1,null,y.H)),$async$wQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wQ,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fyY(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.aa(0,C.G,C.az.j(0.35),C.fI,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eB1,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.fZ,t,t,t),C.aB,D.eSs,C.U,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bGQ,C.n),t,t,t,t,C.ek,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lh(new B.cWa(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aP:C.ai,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.aa2(C.eG,C.asJ,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc4g(),t),C.ac],v))
p.push(new B.aa2(C.o5,C.Zh,"Team Member","Sign in with your organization access code + password",u.gc55(),t))
p.push(C.ac)
p.push(new B.aa2(C.afP,C.a_C,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc4C(),t))
return A.cg(t,r,A.br(!0,A.cf(A.u(p,C.al,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adg,t,t,C.af),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aa2.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.er(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a_,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.es,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A0,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ab)}}
B.ayr.prototype={}
B.aBx.prototype={}
B.j7.prototype={
lY(d){var x=this.b,w=C.a.nY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
galM(){var x=this.d
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
b5N(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j7(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cxs(d){return this.b5N(null,d)},
azd(d){return this.b5N(d,null)}}
B.SD.prototype={
S(){return new B.azO(new A.cm(null,y.A))},
gd5(){return this.c}}
B.azO.prototype={
Z(){this.a0()
this.aaE()},
aaE(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ag(u.a.c),$async$aaE)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFw(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaE,w)},
aaF(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$aaF)
case 3:t=u.c
if(t!=null)t.E(y.q).f.P(D.ek8)
case 1:return A.h(v,w)}})
return A.i($async$aaF,w)},
X7(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$X7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alm(s.d,4),$async$X7)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.re(r,"ngmy_my_code_"+m+".png"),$async$X7)
case 8:q=e
o=s.c
if(o!=null)o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
o=s.c
if(o!=null)o.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$X7,w)},
aed(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aed=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7s("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aed)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aed,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.eG(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.me
else if(q.e==null)x=A.at(new A.B(C.ek,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.az.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZH,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a_,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.acS,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.G,C.az.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cf(A.u(A.a([x,C.m7,w,C.k9,new A.ep(A.p(p,A.ph(p,p,!1,B.hgu(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.k9,A.A(A.a([A.C(A.ex(M.Ag,C.R1,q.gbYw(),p),1),C.av,A.C(A.dj(C.xh,C.a4r,q.gbYx(),A.bk(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.U,new A.a7(1/0,p,A.ex(L.Ya,D.eOH,q.gcj8(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JW,p,p,C.af)
x=r}return A.cg(l,n,x,p,!1,!1,p,p)}}
B.SH.prototype={
S(){return new B.azR(new A.ao(C.aq,$.as()),A.k5(!0,null,!0,!0,null,null,!1))}}
B.azR.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GG(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.as()
x.O$=0
this.e.p()
this.a2()},
X8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GG(u.d.a.a)
if(t==null){u.n(new B.dGF(u))
x=1
break}u.n(new B.dGG(u))
s=u.a
r=s.c
x=3
return A.b(B.a4r(s.d,new B.dGH(u),t,r),$async$X8)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGI(u))
if(q){s=u.c
s.toString
A.a6(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
a_b(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_b=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.n(new B.dGJ(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.qM(r.a.c,q),$async$a_b)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGK(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.a9(r.a.d)>1?"NGMY Doc Share ("+J.a9(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aeS(p,m,l,j,k),$async$a_b)
case 8:o=e
if(r.c!=null)r.n(new B.dGL(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a4(h)
if(r.c!=null)r.n(new B.dGM(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dGN(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_b,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9y:D.a7V,h=j?D.aaW:C.c,g=j?C.aN:C.M,f=j?C.bP:C.ai,e=j?D.a8R:C.aJ
i=[i,e,h,g,f,j?C.eT:C.bU]
x=A.K(d).ax.a===C.H
w=J.a9(l.a.d)
h=i[0]
g=i[3]
g=A.eG(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.B,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bR(C.B,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bvU,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aE,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.n),k,52,k,k,k,k,k,52),C.es,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZH,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uJ(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bev()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.T,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bn(k,k,k,C.JP,k,k,"",k,!0,new A.b0(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b0(4,A.m(18),new A.ay(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ad,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dGO(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.ly,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.Jz(l.a.d,4)
m=A.z(new A.I(m,new B.dGP(x,new A.aCJ(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.a9(l.a.d)>4)m.push(new A.B(C.ni,A.d("+ "+(J.a9(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eeS)
else q.push(A.V(C.kV,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aS,A.de(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b8,new A.o(u,k,s,t,k,k,C.n),C.i9,k,k,k,C.eF,k,k,k)],r))}e=A.C(A.cf(A.u(e,C.al,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bha,k,k,C.af),1)
u=l.f?k:l.gcj9()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(L.Ya,D.ePB,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.c9,k,new A.b4(q,C.V),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbYy()
t=A.bk(C.az,k,k,0,C.c,k,C.mt,k,new A.b4(A.m(16),C.V),k,k,k)
return A.cg(g,h,new A.am(C.W,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mS(new B.dGQ(),A.u(A.a([e,new A.B(D.bgG,A.u(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.qK:D.eO6,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.Uz,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bev.prototype={
nU(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h1(C.bm,v.length),C.aL)}}
B.SE.prototype={
S(){return new B.azP()}}
B.azP.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.as()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.aY,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.aY,C.aL),v)
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
aaG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFx(r))
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
return A.b(B.a4w(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaG)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.E(y.q).f.P(D.ejK)
s=[1]
x=4
break}p.E(y.q).f.P(D.ein)
p=r.c
p.toString
A.a6(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFy(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaG,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iT:C.oO,q=A.eG(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eHi,s,s,s,1,s,!0),p=A.p(s,D.bae,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EL,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.T,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bCB,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.T,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bCw,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.T,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bCL,C.z,!0,s,!0,s,!1,s,C.ad,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbYz()
u=A.bk(C.az,s,s,s,s,C.fU,s,s,s,s,s,s)
return A.cg(q,r,A.cf(A.u(A.a([p,C.d1,o,C.ac,x,C.ac,w,C.m7,A.bJ(t.r?C.qK:C.aKJ,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.af),s,!1,!1,s,s)}}
B.a9i.prototype={}
B.bqI.prototype={
a1N(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a1N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ck(r.akp()))
x=3
return A.b(B.P9(t,s),$async$a1N)
case 3:if(!e){$.ak.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a1N,w)},
gd5(){return this.a}}
B.Ls.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WM.prototype={
S(){return new B.avX(new A.ao(C.aq,$.as()),A.k5(!0,null,!0,!0,null,null,!1))}}
B.avX.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cW4(this))},
p(){var x=this.d
x.R$=$.as()
x.O$=0
this.e.p()
this.a2()},
bYF(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZL(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aP:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.H(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.G,C.az.j(u?0.25:0.12),C.fI,32)],n),l=A.p(w,T.aip,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.G,C.az.j(0.4),C.cv,16)],n),C.ajb,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uJ(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqn()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.T,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bn(w,w,w,C.Dw,w,w,"",w,!0,new A.b0(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b0(4,A.m(16),D.aPD),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ad,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cW2(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.ly,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mT,new B.cW3(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.c9,w,new A.b4(A.m(14),C.V),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.aa(0,C.G,C.az.j(0.35),C.cC,12)],n)
g=y.p
return A.eA(w,C.K,new A.d3(Q.I5,A.bQ(new A.B(C.wt,A.u(A.a([l,C.aS,k,C.P,j,C.dW,i,C.dW,A.A(A.a([f,C.av,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dLP,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbYE(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ab),new A.o(w,w,w,h,n,K.LF,C.n),C.b6),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b6),w),w,w,w,C.JY,C.cZ,w,w,w)}}
B.bqn.prototype={
nU(d,e){return e.ahf(e.a.toUpperCase())}}
B.SF.prototype={
S(){return new B.azQ(A.a([],y.r),A.aY(y.N))},
gd5(){return this.c}}
B.azQ.prototype={
Z(){var x=this
x.a0()
x.rN()
x.w=A.dE(C.iV,new B.dGD(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SO()
this.a2()},
Z4(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lr(u.a.c),$async$Z4)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zp(u.a.c),$async$Z4)
case 4:u.n(new s.dG0(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Z4,w)},
rN(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lr(u.a.c),$async$rN)
case 3:t=e
x=4
return A.b(B.zp(u.a.c),$async$rN)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dG1(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LM(u.d)
B.Ag(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rN,w)},
LM(d){return this.buS(d)},
buS(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4B(r,u.a.c),$async$LM)
case 8:p=f
if(u.c==null){x=1
break}new B.dFA(u,r,p).$0()
u.c.e2()
case 7:if(!(C.a.a_(r.c,"video/")||r.lY(D.m_))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SM(r,u.a.c),$async$LM)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zp(u.a.c),$async$LM)
case 12:u.n(new o.dFB(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LM,w)},
M6(d){return this.bAP(d)},
bAP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$M6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4B(d,u.a.c),$async$M6)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFG(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$M6)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$M6)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$M6,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.E(y.q).f.P(A.aZ(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rO(d,e){return this.cta(d,e)},
cta(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGr(r,e))
u=3
x=6
return A.b(d.$0(),$async$rO)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGs(r))
$.eH.lT()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rO,w)},
gaPR(){var x=this.a
return x.f||x.r||x.w},
GB(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaPR()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c1M(s,n,r,q,o,t),$async$GB)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.ffp(o,u.a.c),$async$GB)
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
return A.b(B.BC(s,o,r,q,n,t),$async$GB)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GB,w)},
Ya(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Ya=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amd(u.a.c),$async$Ya)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hL("No organization portal found.")
x=1
break}t=J.a5(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).ct(A.eN(new B.dFY(u,r,q),!1,null,y.H)),$async$Ya)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ya,w)},
Zf(d){return this.ccY(d)},
ccX(){return this.Zf(1)},
ccY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaPR()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ama(u.a.c),$async$Zf)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zf,w)},
a8L(d,e,f){return this.bQQ(d,e,f)},
bQQ(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a8L=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rO(new B.dFV(u,d,null,e,f),"Uploading\u2026"),$async$a8L)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
bv0(){B.h1A(!1,new B.dFE(this))
return},
chM(){this.n(new B.dG5(this))},
au5(){var x=0,w=A.j(y.H),v=this
var $async$au5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bv0()
return A.h(null,w)}})
return A.i($async$au5,w)},
a8H(){var x=0,w=A.j(y.H),v=this
var $async$a8H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dFK(v),"Importing\u2026"),$async$a8H)
case 2:return A.h(null,w)}})
return A.i($async$a8H,w)},
Qb(d){return this.csE(d)},
csE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lY(D.m_)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ct(A.eN(new B.dGo(u,d),!1,null,y.H)),$async$Qb)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lY(D.Nz)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ct(A.eN(new B.dGp(u,d),!1,null,y.H)),$async$Qb)
case 8:x=1
break
case 7:x=u.bRx(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ct(A.eN(new B.dGq(u,d),!1,null,y.H)),$async$Qb)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qb,w)},
bRx(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nY(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cnO,C.a.aV(x,w+1).toLowerCase())},
abY(d){return this.c4k(d)},
c4k(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lY(D.m_)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ct(A.eN(new B.dFW(u,d),!1,null,y.H)),$async$abY)
case 5:x=1
break
case 4:u.n(new B.dFX(u,d))
case 1:return A.h(v,w)}})
return A.i($async$abY,w)},
PC(d){return this.ckz(d)},
ckz(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oz(t,s.c,s.f),$async$PC)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dGh(u,d),"Preparing QR\u2026"),$async$PC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PC,w)},
aeC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dGi(),A.S(t).k("I<1,n>")).fF(0)}t=u.d
s=A.S(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dGj(q),s),s.k("E.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PC(r),$async$aeC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeC,w)},
aev(d){return this.ck8(d)},
ck8(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aev=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZL(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,new B.dGb(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aev)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qb(d)
break
case"qr":u.PC(A.a([d],y.r))
break
case"send_my_code":u.c4V(A.a([d],y.r))
break
case"save":u.adS(d)
break
case"delete":u.Hj(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aev,w)},
Vc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFH(),A.S(t).k("I<1,n>")).fF(0)}t=u.d
s=A.S(t).k("a3<1>")
r=A.z(new A.a3(t,new B.dFI(q),s),s.k("E.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oz(t,s.c,s.f),$async$Vc)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rO(new B.dFJ(u,r),"Preparing file\u2026"),$async$Vc)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vc,w)},
ad3(d){return this.cbt(d)},
cbt(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ad3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h2h(d,!1),$async$ad3)
case 3:s=f
r=s==null
q=B.a4y(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
ac3(){var x=0,w=A.j(y.H),v=this,u
var $async$ac3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fn0(u,v.a.c),$async$ac3)
case 2:return A.h(null,w)}})
return A.i($async$ac3,w)},
bv_(){B.h1A(!1,new B.dFD(this,null))
return},
Hx(d,e){return this.c4W(d,e)},
aVh(d){return this.Hx(null,d)},
c4V(d){return this.Hx(d,null)},
c4W(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Hx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a3<1>")
k=A.z(new A.a3(p,new B.dFZ(s),o),o.k("E.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wc.c2().ajM(!0,C.Wj,!1),$async$Hx)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.rO(new B.dG_(l,s,r),"Preparing\u2026"),$async$Hx)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a4(j)
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
return A.b(B.byu(p,l,e,s.a.c),$async$Hx)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Hx,w)},
GQ(d){return this.bQD(d)},
bQD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hgt(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aVh(t),$async$GQ)
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
return A.b(u.rO(new B.dFT(u,d),"Receiving video\u2026"),$async$GQ)
case 11:x=1
break
case 10:x=12
return A.b(u.rO(new B.dFU(u,d),"Receiving\u2026"),$async$GQ)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GQ,w)},
CQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Bv()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ad3(t),$async$CQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GQ(s),$async$CQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ct(A.eN(new B.dG3(u),!1,null,y.N)),$async$CQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rN(),$async$CQ)
case 10:x=1
break
case 9:x=11
return A.b(u.GQ(C.a.i(r)),$async$CQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CQ,w)},
adS(d){return this.cgn(d)},
cgn(d){var x=0,w=A.j(y.H),v=this
var $async$adS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rO(new B.dG2(v,d),"Saving\u2026"),$async$adS)
case 2:return A.h(null,w)}})
return A.i($async$adS,w)},
Hj(d){return this.bD5(d)},
bD5(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hj)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c1P(t),$async$Hj)
case 6:case 5:s=d.a
x=7
return A.b(B.D2(u.a.c,s),$async$Hj)
case 7:u.r.W(0,s)
x=8
return A.b(u.rN(),$async$Hj)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hj,w)},
aeI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZL(r)
r=u.c
r.toString
x=3
return A.b(A.c1(C.K,new B.dGn(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aeI)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ac3()
break
case"import":u.a8H()
break}case 1:return A.h(v,w)}})
return A.i($async$aeI,w)},
bYC(d){var x=d.c
if(C.a.a_(x,"video/")||d.lY(D.m_))return C.pa
if(C.a.a_(x,"image/")||d.lY(D.Nz))return C.rR
if(C.a.q(x,"pdf"))return E.Lb
return D.age},
B(d){var x,w,v=this,u=null,t=B.ZL(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EE,u,u,u,new B.dGy(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwp,u,u,u,v.e?u:v.gc4D(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gchL()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.bqP:E.agE,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y7,u,u,u,v.e?u:v.gbYD(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nr,u,u,u,v.e?u:v.gaWj(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.by2,u,u,u,v.e?u:new B.dGz(v),u,u,u,u,"More options",u))
q=A.eG(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lh(new B.dGA(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.B,0.5,C.w,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bR(C.B,0.5,C.w,u,0,A.a([C.az.j(A.K(d).ax.a===C.H?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mN(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.avU(C.j_,s,!0,t,w?u:v.gckA(),u),1)
x.push(new A.B(D.bft,A.mS(new B.dGB(),A.A(A.a([s,C.av,A.C(new B.avU(C.us,"Export",!1,t,w?u:v.gbGv(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ib,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9d(t,v.e?u:v.gaWj(),u)
else s=A.jS(!0,u,u,new B.dGC(v,t),s,u,D.bfl,u,u,!1,!1)
x.push(A.C(s,1))
return A.cg(q,r,new A.am(C.W,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.avU.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.az,t,t,0,C.c,t,C.ua,t,new A.b4(s,C.V),t,t,t)
return A.dj(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ua,t,new A.b4(s,C.V),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ex(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eB,t,t,t),u.r,v)}}
B.b9d.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.mS(new B.cW0(),new A.B(E.Vw,A.u(A.a([A.mS(new B.cW1(),A.p(x,A.V(C.wN,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aE,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ic,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.U,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dj(C.nr,D.eSK,this.d,A.bk(C.az,x,x,x,C.c,x,C.Vr,x,new A.b4(A.m(16),C.V),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zq,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9C.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.lY(D.m_))p=D.cT9
else{p=C.a.a_(p,"image/")||i.lY(D.Nz)
n=y.O
p=p?A.a([C.cW,C.az],n):A.a([C.aK.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aE,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.galM()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lY(D.m_))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.C(A.u(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fv,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lY(D.m_)))l.push(A.fwL(C.az,!1,j,j,j,!1,j,j,new B.cWn(k),j,j,new A.b4(A.m(5),C.V),j,j,!1,u))
x=A.V(C.no,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mS(new B.cWo(),new A.B(C.e3,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.UW,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b4(v,new A.ay(t,s,C.r,-1)),j,j,C.ab),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WO.prototype={
S(){return new B.avZ()},
gd5(){return this.c}}
B.avZ.prototype={
Z(){this.a0()
this.wI()},
p(){B.hgI(this.e)
this.a2()},
wI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qM(o.c,o.d),$async$wI)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aD.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hgL(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hgK(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWk(s))
x=1
break}s.n(new B.cWl(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a4(l)
if(s.c==null){x=1
break}s.n(new B.cWm(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wI,w)},
a_a(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qM(t.c,t.d),$async$a_a)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(D.egR)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aeS(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_a)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_a,w)},
bQw(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k6(u,C.B,v,new B.cWi(w,t),C.fP,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aD.gah(t))x=A.fC(t,C.B,v,new B.cWj(w),C.fP,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tF(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZL(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ah,u,u,u,v.gb_1(),u,u,u,u,"Share / save",u))
r=A.eG(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cq
else{q=v.r
if(q!=null)t=new A.B(C.ek,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.ek,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aS,A.dj(C.Ah,D.eD9,v.gb_1(),A.bk(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bQw()}return A.cg(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.WL.prototype={
S(){return new B.avW(A.afD(),C.bt,C.bt)},
gd5(){return this.c}}
B.avW.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fk(w,A.a2(w).k("fk<1>")).hX(new B.cVY(v))
x.gcG3().hX(new B.cVZ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fk(x,A.a2(x).k("fk<1>"))}if(x==null)x=C.aVr
x.hX(new B.cW_(v))
v.wI()},
wI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qM(p.c,p.d),$async$wI)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cVR(s))
x=1
break}x=8
return A.b(s.d.AT(0,new A.a0U(r,s.a.d.c)),$async$wI)
case 8:if(s.c==null){x=1
break}s.n(new B.cVS(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
if(s.c==null){x=1
break}s.n(new B.cVT(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wI,w)},
X9(){var x=0,w=A.j(y.H),v=this,u
var $async$X9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$X9)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$X9)
case 6:case 3:return A.h(null,w)}})
return A.i($async$X9,w)},
aNO(d){var x=d.a
return C.a.aU(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZL(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eG(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cq
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.brN,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LF,C.n),o,88,o,o,o,o,o,88)
t=A.ms(C.az,o,o,m,0,new B.cVU(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aNO(p.w)+" / "+p.aNO(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.az,o,o,o,o,D.edp,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.iZ,o,o,o,o,o)
x=A.u(A.a([u,C.k9,t,x,C.d1,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbYG(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cg(v,w,A.at(new A.B(C.ue,x,o),o,o,o),o,!1,!1,o,o)}}
B.ND.prototype={
S(){return new B.aw1()},
gd5(){return this.c}}
B.aw1.prototype={
Z(){this.a0()
this.NA()},
NA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fyZ(o.c,o.d,new B.cWB(s)),$async$NA)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWC(s))
x=1
break}s.e=r
q=O.hCG(r)
if(q==null){s.n(new B.cWD(s))
x=1
break}s.d=q
q.aJ(0,s.gaV6())
x=8
return A.b(q.hW(0).cI(0,C.rx),$async$NA)
case 8:if(s.c==null){x=1
break}s.n(new B.cWE(s))
x=9
return A.b(q.p5(0),$async$NA)
case 9:q.rp(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
if(s.c==null){x=1
break}s.n(new B.cWF(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NA,w)},
c2Z(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWG(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BC(0,x.gaV6())
w=x.d
if(w!=null)w.p()
B.hM8(x.e)
x.a2()},
aaJ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVW(u.c,u.d),$async$aaJ)
case 2:t=e
u=v.c
if(u!=null)u.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aaJ,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZL(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eG(A.a([A.aF(t,t,t,t,C.ob,t,t,t,u.gbYA(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i5(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cq
else{q=u.r
if(q!=null)s=new A.B(C.ek,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.af7(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fT(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.yX(s,t),A.aJ(t,A.Fh(A.p(t,A.V(q?H.wZ:C.iZ,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b8,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWI(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cg(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.WQ.prototype={
S(){return new B.aw_(new A.cm(null,y.A))}}
B.aw_.prototype={
gcsV(){var x,w,v=this.a
if(v.e!==D.ON)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcsC(){var x,w,v=this.a
if(v.e!==D.xO)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcsV()
if(x!=null){v.OE(x)
v.e=A.dE(R.Dm,new B.cWx(v,x))}w=v.gcsC()
if(w!=null){v.OD(w)
v.f=A.dE(C.fY,new B.cWy(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OD(d){return this.c9L(d)},
c9L(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ami(d),$async$OD)
case 3:t=f
x=4
return A.b(B.c27(d),$async$OD)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWp(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OD,w)},
OE(d){return this.c9M(d)},
c9M(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fnh(d),$async$OE)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwx(t),$async$OE)
case 4:if(u.c==null){x=1
break}u.n(new B.cWq(u))
u.c.E(y.q).f.P(D.aHQ)
case 1:return A.h(v,w)}})
return A.i($async$OE,w)},
gbVo(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbYB(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
ZW(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ZW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Bv()){t=u.c
if(t!=null)t.E(y.q).f.P(D.ejU)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ct(A.eN(new B.cWr(),!1,null,y.N)),$async$ZW)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwx(s),$async$ZW)
case 4:t=u.c
if(t!=null)t.E(y.q).f.P(D.aHQ)
case 1:return A.h(v,w)}})
return A.i($async$ZW,w)},
a6I(d){return this.bAQ(d)},
bAQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aG(t,", "))),$async$a6I)
case 3:if(d.e!=null){t=d.E(y.q).f
t.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
aaH(d){return this.bAA(d)},
bAA(d){var x=0,w=A.j(y.H),v=this
var $async$aaH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$aaH)
case 2:if(d.e!=null)d.E(y.q).f.P(D.ehj)
return A.h(null,w)}})
return A.i($async$aaH,w)},
ZR(d){return this.cgp(d)},
cgp(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$ZR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alm(s.d,4),$async$ZR)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.re(r,"ngmy_doc_share_qr.png"),$async$ZR)
case 8:q=f
if(d.e!=null)d.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a4(n)
if(d.e!=null)d.E(y.q).f.P(A.aZ(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ZR,w)},
gaQR(){var x,w=this.a
if(w.e!==D.FM)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6F(d){return this.bAJ(d)},
bAJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaQR()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6F)
case 3:if(d.e!=null)d.E(y.q).f.P(D.eiU)
case 1:return A.h(v,w)}})
return A.i($async$a6F,w)},
aaI(){var x=0,w=A.j(y.H),v=this,u
var $async$aaI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SO(),$async$aaI)
case 2:u=v.c
if(u!=null)A.a6(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$aaI,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZL(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FM&&i!==D.ON&&i!==D.xO
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eG(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FM||t===D.ON||t===D.xO?l:A.aF(l,l,l,l,C.kY,l,l,l,m.gaTp(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.ph(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gbVo(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FM){t=C.az.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}q.push(C.aS)
q.push(A.d(m.gbYB(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.U,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bBE,D.eLv,new B.cWs(m,d),l)],p))}if(m.a.e===D.FM&&m.gaQR()!=null)C.d.v(q,A.a([C.U,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a1,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bym,D.eIy,new B.cWt(m,d),l)],p))
if(m.a.e===D.xO){x=(m.w?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Ct:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l)],p))}if(m.a.e===D.ON){x=(m.r?C.dr:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Ct:C.az,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mu,l,l,l),C.ac,A.dj(D.bug,D.eOp,m.gcgN(),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nS(i,A.cg(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.C(A.ex(M.Ag,C.R1,new B.cWu(m,d),l),1),C.av,A.C(A.dj(C.xh,C.a4r,new B.cWv(m,d),A.bk(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a7(1/0,l,A.bJ(C.yi,m.gaTp(),A.bk(C.aK,l,l,l,l,C.fU,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWw(),y.C)}}
B.a9A.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cf(A.u(A.a([w,C.aS,A.p(x,A.ph(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.af)
return A.ei(A.a([A.bJ(C.BN,new B.cVQ(d),x)],u),x,x,C.mh,v,x,x,x,x,D.eCb,x)}}
B.WK.prototype={
S(){return new B.avV(A.y5(C.w9,C.n0,C.t1))}}
B.avV.prototype={
p(){this.d.p()
this.a2()},
asP(d){var x,w,v,u,t
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
return A.cg(A.eG(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eIY,x,x,x,1,x,!0),C.x,A.y4(this.d,C.bM,this.gasO()),x,!1,!1,x,x)}}
B.WR.prototype={
S(){return new B.aw0(A.y5(C.w9,C.n0,C.t1))},
gd5(){return this.c}}
B.aw0.prototype={
bRz(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acq(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q6("text/plain"),$async$acq)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.E(y.q).f.P(D.ejO)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acq,w)},
a7s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h2h(p,!0),$async$a7s)
case 3:t=e
p=t==null
s=B.a4y(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.E(y.q).f.P(D.egq)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7s,w)},
p(){this.d.p()
this.a2()},
asP(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bRz(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahw,v,v,v,w.gbG3(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Ye,v,v,v,w.gc7b(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eG(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rP:P.KV,v,v,v,v,v),v,v,v,new B.cWA(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.ePa,v,v,v,1,v,!0)
u=A.y4(w.d,C.bM,w.gasO())
x=A.m(20)
return A.cg(t,C.x,new A.am(C.W,v,C.a9,C.q,A.a([u,A.at(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dQf],s),v),v,!1,!1,v,v)}}
B.b9e.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nW
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nW:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.VC,A.A(A.a([u,C.bb,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.el,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ab)}}
B.a6S.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mv.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UU.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mu.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dw.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.ccM.prototype={}
B.Dv.prototype={}
B.a6R.prototype={}
B.aqu.prototype={}
B.UV.prototype={}
var z=a.updateTypes(["au<~>()","R(j7)","n(j7)","SF(Z)","~()","WN(Z)","G(G,j7)","ND(Z)","~(lB)","cr(Dv)","au<j7?>(@)","SD(Z)","SH(Z)","B(j7)","j7(@)","a0<n,@>(j7)","WM(Z)","SE(Z)","WO(Z)","WL(Z)","WQ(Z)","a9A(Z)","al<j7>()","WR(Z)","a9C(Z,G)","WK(Z)","a0<n,aC>(j7)","cr(UU)","cr(a6R)","au<cr>(Dv)"])
B.ccI.prototype={
$1(d){var x=this.a
x.x=D.aFp
x.y.G(0,D.aFp)},
$S:68}
B.ccJ.prototype={
$1(d){var x=this.a
x.x=D.aFo
x.y.G(0,D.aFo)},
$S:68}
B.ccK.prototype={
$1(d){var x=this.a
x.adL(A.aLc(d.data)).bA(new B.ccH(x),y.b)},
$S:68}
B.ccH.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ccL.prototype={
$1(d){},
$S:68}
B.ccO.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hlm(d.channel))},
$S:15}
B.ccP.prototype={
$1(d){},
$S:15}
B.ccQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hDE(w.iceConnectionState)
x.cx=w
if($.fHl())switch(w.a){case 0:x.cy=D.aFu
break
case 1:x.cy=D.aFv
break
case 3:x.cy=D.aFw
break
case 5:x.cy=D.aFs
break
case 6:x.cy=D.aFt
break
case 7:x.cy=D.a2a
break
default:break}},
$S:152}
B.ccR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hDF(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.ccS.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hNB(w.signalingState)},
$S:152}
B.ccT.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hLV(w.connectionState)},
$S:152}
B.ccU.prototype={
$1(d){},
$S:152}
B.ccV.prototype={
$1(d){},
$S:15}
B.f2l.prototype={
$1(d){var x=y.F.a(new A.r5([],[]).oP(d.target.result,!1)),w=C.wa.q(x.objectStoreNames,"blobs")
if(!w)C.w6.J6(x,"blobs")},
$S:180}
B.fmP.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uG.f1(this.b)
$.eH.lT()
this.c.$1(d)},
$S:433}
B.fmR.prototype={
$1(d){return this.a.$1(B.hu1(this.b,this.c))},
$S:30}
B.fmQ.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fmO.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fn3.prototype={
$1(d){var x=this
return B.fT8(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fn4.prototype={
$1(d){var x=this
return B.fT8(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f3E.prototype={
$1(d){var x=this
return B.c1J(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cW8.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cW5.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1J(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cW7.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1J(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cW6.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1J(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWa.prototype={
$4(d,e,f,g){var x=null
return A.ju(A.A(A.a([A.aF(x,x,x,x,D.bsT,x,x,x,new B.cW9(d),x,x,x,x,x,x),A.C(A.Dh(D.Nl,!0,x,C.Xi,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nl,x,g,C.adz,0,e,f)},
$C:"$4",
$R:4,
$S:405}
B.cW9.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.f5D.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.em,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.bax,C.h,v,v,D.aRe,v,v,v,v,D.adq,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aN
o=A.aK(v,C.T,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bwY,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aN
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zD,A.u(A.a([o,C.ac,A.aK(v,C.T,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bn(v,new A.b0(4,A.m(16),C.V),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahK,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ad,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.A(A.a([A.C(A.dU(C.de,new B.f5B(d),v),1),C.av,A.C(A.bJ(D.eHB,new B.f5C(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JF,v,v,v,v),v)},
$S:60}
B.f5B.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.f5C.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.E(y.q).f.P(D.ehy)
return}x=w.b.a.a
A.a6(w.c,!1).K(new B.ayr(v,x))},
$S:0}
B.f66.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.em,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.ban,C.h,w,w,D.aSA,w,w,w,w,D.adq,w,w,1/0),new A.B(C.zD,A.u(A.a([A.aK(w,C.T,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fDM(u,"Organization name",C.E0,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.U,A.aK(w,C.T,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fDM(u,"Access code",C.mA,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.U,A.aK(w,C.T,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fDM(u,"Member password",N.Ez,w),C.z,!0,w,!0,w,!1,w,C.ad,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bJ(D.ePe,new B.f65(r,q,p,d),A.bk(C.az,w,w,w,w,C.fU,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JF,w,w,w,w),w)},
$S:60}
B.f65.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.E(y.q).f.P(D.ehD)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).K(new B.aBx(u,x,w))},
$S:0}
B.c1A.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a5(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cp(j,0,null):s.b.aN(j)
u=4
x=7
return A.b(A.up(p,null).cI(0,C.Uy),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ck(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ah(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a4(h)
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
B.c1G.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1H.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1I.prototype={
$1(d){return d.b},
$S:z+2}
B.c1C.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1D.prototype={
$1(d){return d.b},
$S:z+2}
B.c1B.prototype={
$1(d){return A.Y(y.f.a(d),y.N,y.z)},
$S:12}
B.c1E.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1F.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fn1.prototype={
$1(d){return new B.SD(this.a,null)},
$S:z+11}
B.fn2.prototype={
$1(d){return new B.SH(this.a,this.b,this.c,null)},
$S:z+12}
B.dFw.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGF.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGG.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGH.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGE(x,d))},
$S:2}
B.dGE.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGI.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGJ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGK.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dGL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGM.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dGN.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGQ.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.dGO.prototype={
$1(d){var x=this.a
return x.f?null:x.X8()},
$S:2}
B.dGP.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lY(D.Nz))s=C.rR
else s=C.a.a_(s,"video/")||d.lY(D.m_)?C.pa:D.age
x=this.b.a
w=y.p
return new A.B(C.lj,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.C(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.galM(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFx.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFy.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c1K.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c1L.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.fnz.prototype={
$2(d,e){return e===this.a},
$S:296}
B.f_z.prototype={
$1(d){return J.k(d)},
$S:17}
B.f3Q.prototype={
$1(d){var x=this.b
B.hsa(C.DN.ga3l(this.a)).bA(x.gcvR(x),y.H)},
$S:117}
B.f3R.prototype={
$1(d){return this.a.cZ(0,null)},
$S:117}
B.f3S.prototype={
$0(){return null},
$S:11}
B.c1Z.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3T.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Y(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.M(v)
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
B.f7K.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f2x.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f2y.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c23.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lY(D.m_)},
$S:z+1}
B.frv.prototype={
$1(d){return new B.WM(this.a,null)},
$S:z+16}
B.cW4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fs()},
$S:8}
B.cW2.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).K(x)
return null},
$S:2}
B.cW3.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.dGD.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Z4()},
$S:14}
B.dG0.prototype={
$0(){var x=J.bzv(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dG1.prototype={
$0(){var x=J.bzv(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFA.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFz(this.b))
if(w>=0){x=x.d
x[w]=x[w].azd(this.c)}},
$S:0}
B.dFz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFB.prototype={
$0(){var x=J.bzv(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFG.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dFF(this.b))
if(w>=0){x=x.d
x[w]=x[w].azd(this.c)}},
$S:0}
B.dFF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGr.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGs.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dFY.prototype={
$1(d){return new B.SE(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dFV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GB(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SI(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rN(),$async$$0)
case 5:s=J.a5(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Zf(s.gH(t)),$async$$0)
case 8:case 7:r.hL(s.gah(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFE.prototype={
$1(d){this.a.a8L(d,"No files selected.","Added")},
$S:433}
B.dG5.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dG4(),A.S(x).k("I<1,n>")))},
$S:0}
B.dG4.prototype={
$1(d){return d.a},
$S:z+2}
B.dFK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wc.c2().cHY(C.Wj,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aD.gah(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jc(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a4(j)
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
return A.b(B.amh(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rN(),$async$$0)
case 9:o.hL("Imported "+J.a9(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dGo.prototype={
$1(d){return new B.ND(this.a.a.c,this.b,null)},
$S:z+7}
B.dGp.prototype={
$1(d){return new B.WO(this.a.a.c,this.b,null)},
$S:z+18}
B.dGq.prototype={
$1(d){return new B.WL(this.a.a.c,this.b,null)},
$S:z+19}
B.dFW.prototype={
$1(d){return new B.ND(this.a.a.c,this.b,null)},
$S:z+7}
B.dFX.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GB(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4A(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ccX(),$async$$0)
case 5:x=6
return A.b(p.rN(),$async$$0)
case 6:r=A.S(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dGd(p),r),new B.dGe(),r.k("I<ai.E,n>")).bZ(0,new B.dGf())
q=A.z(r,r.$ti.k("E.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ct(A.eN(new B.dGg(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oy(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SO(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGd.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dGc(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGe.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGf.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGg.prototype={
$1(d){var x=this.a
return new B.WQ(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dGi.prototype={
$1(d){return d.a},
$S:z+2}
B.dGj.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGb.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kR,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.galM(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lY(D.m_)?C.rT:C.o9
p=!x||p.lY(D.m_)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zA,A.u(A.a([q,o,t,C.aB,B.WP(!1,u,!1,w,p,new B.dG6(d),v),B.WP(!1,u,!1,C.j_,"Share via QR",new B.dG7(d),"Letters/numbers QR code"),B.WP(!1,u,!1,D.Xn,"Send to their Code",new B.dG8(d),"Enter someone else's personal code"),B.WP(!1,u,!1,C.hf,"Download / save",new B.dG9(d),v),C.ar,B.WP(!1,u,!0,C.e4,"Delete",new B.dGa(d),v)],y.p),C.al,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ay(r,1,C.r,-1),C.V,C.V,C.V),C.kg,v,v,C.n),C.b6)},
$S:707}
B.dG6.prototype={
$0(){A.a6(this.a,!1).K("view")
return null},
$S:0}
B.dG7.prototype={
$0(){A.a6(this.a,!1).K("qr")
return null},
$S:0}
B.dG8.prototype={
$0(){A.a6(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dG9.prototype={
$0(){A.a6(this.a,!1).K("save")
return null},
$S:0}
B.dGa.prototype={
$0(){A.a6(this.a,!1).K("delete")
return null},
$S:0}
B.dFH.prototype={
$1(d){return d.a},
$S:z+2}
B.dFI.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4C(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EQ(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oy(s.c,s.f),$async$$0)
case 4:u.hL(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFD.prototype={
$1(d){var x=this.a
x.rO(new B.dFC(x,d,this.b),"Preparing\u2026")},
$S:433}
B.dFC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SI(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byu(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFZ.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dG_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fz1(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EN(new B.dFP(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cb(null,null,!1,null,new B.dFQ(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dFR(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dj,new B.dFS()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gah(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rN(),$async$$0)
case 9:s.hL("Received "+q.gH(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFM(x,d,e))},
$S:141}
B.dFM.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFQ.prototype={
$1(d){return new B.a9A(this.a.a,null)},
$S:z+21}
B.dFR.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dFS.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dFU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GG(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4q(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aVh(B.GG(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amh(new B.dFN(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.fz0(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rN(),$async$$0)
case 10:o=J.cB(r)
p=o.eB(r,new B.dFO()).gH(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFN.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFL(x,d,e))},
$S:141}
B.dFL.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFO.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lY(D.m_)},
$S:z+1}
B.dG3.prototype={
$1(d){return new B.WR(this.a.a.c,null)},
$S:z+23}
B.dG2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aVW(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGn.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.az.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zA,A.u(A.a([A.at(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kR,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.WP(!0,w,!1,C.mA,"My Code",new B.dGk(d),"Your personal code & QR \u2014 others send docs to you"),B.WP(!1,w,!1,D.Xn,"Send to their Code",new B.dGl(this.a,d),"Enter someone else's 5-digit code + letter"),B.WP(!1,w,!1,S.x6,"Import backup",new B.dGm(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ay(t,1,C.r,-1),C.V,C.V,C.V),C.kg,x,x,C.n),C.b6)},
$S:707}
B.dGk.prototype={
$0(){A.a6(this.a,!1).K("my_code")
return null},
$S:0}
B.dGl.prototype={
$0(){A.a6(this.b,!1).K(null)
this.a.bv_()},
$S:0}
B.dGm.prototype={
$0(){A.a6(this.a,!1).K("import")
return null},
$S:0}
B.dGA.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GP(D.Nl,x,C.Xi,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Nl).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:686}
B.dGy.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.dGz.prototype={
$0(){this.a.aeI()
return null},
$S:0}
B.dGB.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:106}
B.dGC.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9C(e,w,v,this.b,x.e,x.bYC(w),new B.dGu(x,w),new B.dGv(x,v,w),new B.dGw(x,w),new B.dGx(x,w),null)},
$S:z+24}
B.dGu.prototype={
$0(){this.a.abY(this.b)
return null},
$S:0}
B.dGv.prototype={
$0(){var x=this.a
return x.n(new B.dGt(x,this.b,this.c))},
$S:0}
B.dGt.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dGw.prototype={
$0(){this.a.M6(this.b)
return null},
$S:0}
B.dGx.prototype={
$0(){this.a.aev(this.b)
return null},
$S:0}
B.cW0.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:106}
B.cW1.prototype={
$3(d,e,f){return A.e4(C.B,f,e,null,null)},
$S:137}
B.cWo.prototype={
$3(d,e,f){return A.d5(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:106}
B.cWn.prototype={
$1(d){return this.a.y.$0()},
$S:77}
B.cWk.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWl.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWm.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWi.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aD.gah(w))return A.fC(w,C.B,x,new B.cWg(this.a),C.fP,C.dp,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWh(this.a))
return C.bF},
$S:130}
B.cWg.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWe(this.a))
return C.bF},
$S:176}
B.cWe.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWb(x))},
$S:8}
B.cWb.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWh.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWd(x))},
$S:8}
B.cWd.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWj.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWf(this.a))
return C.bF},
$S:176}
B.cWf.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWc(x))},
$S:8}
B.cWc.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cVY.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVX(x,d))},
$S:1725}
B.cVX.prototype={
$0(){return this.a.f=this.b===C.tq},
$S:0}
B.cVZ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVW(x,d))},
$S:8}
B.cVW.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cW_.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cVV(x,d))},
$S:8}
B.cVV.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cVR.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cVS.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cVT.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cVU.prototype={
$1(d){return this.a.d.Lb(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWB.prototype={
$0(){var x=this.a.a
return B.qM(x.c,x.d)},
$S:1726}
B.cWC.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWE.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWG.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWI.prototype={
$0(){var x=this.a
x.n(new B.cWH(x))},
$S:0}
B.cWH.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cWx.prototype={
$1(d){return this.a.OE(this.b)},
$S:14}
B.cWy.prototype={
$1(d){return this.a.OD(this.b)},
$S:14}
B.cWp.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWq.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWr.prototype={
$1(d){return D.f1g},
$S:z+25}
B.cWw.prototype={
$2(d,e){if(d)B.SO()},
$S:121}
B.cWs.prototype={
$0(){return this.a.a6I(this.b)},
$S:0}
B.cWt.prototype={
$0(){return this.a.a6F(this.b)},
$S:0}
B.cWu.prototype={
$0(){return this.a.aaH(this.b)},
$S:0}
B.cWv.prototype={
$0(){return this.a.ZR(this.b)},
$S:0}
B.cVQ.prototype={
$0(){A.a6(this.a,!1).K(null)
return null},
$S:0}
B.cWA.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cWz(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWz.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c25.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lY(D.m_)},
$S:z+1}
B.c26.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c24.prototype={
$2(d,e){return this.bcM(d,e)},
bcM(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SP(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1727}
B.f7n.prototype={
$1(d){if(d===D.a29&&(this.a.a.a&30)===0)this.a.fA(0)},
$S:z+27}
B.f7o.prototype={
$0(){},
$S:11}
B.f7S.prototype={
bej(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eXY(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fOp(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bej(d,e)},
$S:534}
B.f7R.prototype={
$1(d){var x=this
d.b=new B.f7Q(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f7Q.prototype={
$1(d){return this.bei(d)},
bei(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aVX(n,m),$async$$1)
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
return A.b(B.eXY(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.a4(j)
$.ak.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4z(m),$async$$1)
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
x(v=B.avY.prototype,"gc4g","Of",0)
x(v,"gc55","Hy",0)
x(v,"gc4C","wQ",0)
x(v=B.azO.prototype,"gbYw","aaF",0)
x(v,"gbYx","X7",0)
x(v,"gcj8","aed",0)
x(v=B.azR.prototype,"gbYy","X8",0)
x(v,"gcj9","a_b",0)
x(B.azP.prototype,"gbYz","aaG",0)
x(B.avX.prototype,"gbYE","bYF",4)
x(v=B.azQ.prototype,"gc4D","Ya",0)
x(v,"gchL","chM",4)
x(v,"gaWj","au5",0)
x(v,"gckA","aeC",0)
x(v,"gbGv","Vc",0)
x(v,"gbYD","CQ",0)
x(B.avZ.prototype,"gb_1","a_a",0)
x(B.avW.prototype,"gbYG","X9",0)
x(v=B.aw1.prototype,"gaV6","c2Z",4)
x(v,"gbYA","aaJ",0)
x(v=B.aw_.prototype,"gcgN","ZW",0)
x(v,"gaTp","aaI",0)
w(B.avV.prototype,"gasO","asP",8)
x(v=B.aw0.prototype,"gc7b","acq",0)
x(v,"gbG3","a7s",0)
w(v,"gasO","asP",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ccM,B.a6R,B.aqu,B.ayr,B.aBx,B.j7,B.a9i,B.bqI,B.Dv,B.UV])
w(B.ccN,B.ccM)
w(B.b03,B.a6R)
x(A.i2,[B.ccI,B.ccJ,B.ccK,B.ccH,B.ccL,B.ccO,B.ccP,B.ccQ,B.ccR,B.ccS,B.ccT,B.ccU,B.ccV,B.f2l,B.fmP,B.fmR,B.fmQ,B.fn3,B.fn4,B.f3E,B.cW5,B.cW7,B.cW6,B.cWa,B.f5D,B.f66,B.c1A,B.c1H,B.c1I,B.c1D,B.c1B,B.c1E,B.c1F,B.fn1,B.fn2,B.dGH,B.dGQ,B.dGO,B.dGP,B.f_z,B.f3Q,B.f3R,B.c1Z,B.f3T,B.f7K,B.f2x,B.f2y,B.c23,B.frv,B.cW4,B.cW2,B.dGD,B.dFz,B.dFF,B.dFY,B.dFE,B.dG4,B.dGo,B.dGp,B.dGq,B.dFW,B.dGd,B.dGc,B.dGe,B.dGf,B.dGg,B.dGi,B.dGj,B.dGb,B.dFH,B.dFI,B.dFD,B.dFZ,B.dFQ,B.dFO,B.dG3,B.dGn,B.dGA,B.dGB,B.cW0,B.cW1,B.cWo,B.cWn,B.cWi,B.cWg,B.cWe,B.cWh,B.cWj,B.cWf,B.cVY,B.cVZ,B.cW_,B.cVU,B.cWx,B.cWy,B.cWr,B.c25,B.c26,B.f7n,B.f7R,B.f7Q])
w(B.b04,B.aqu)
x(A.jl,[B.fmO,B.cW8,B.cW9,B.f5B,B.f5C,B.f65,B.dFw,B.dGF,B.dGG,B.dGE,B.dGI,B.dGJ,B.dGK,B.dGL,B.dGM,B.dGN,B.dFx,B.dFy,B.f3S,B.cW3,B.dG0,B.dG1,B.dFA,B.dFB,B.dFG,B.dGr,B.dGs,B.dFV,B.dG5,B.dFK,B.dFX,B.dGh,B.dG6,B.dG7,B.dG8,B.dG9,B.dGa,B.dFJ,B.dFC,B.dG_,B.dFT,B.dFM,B.dFR,B.dFS,B.dFU,B.dFL,B.dG2,B.dGk,B.dGl,B.dGm,B.dGy,B.dGz,B.dGu,B.dGv,B.dGt,B.dGw,B.dGx,B.cWk,B.cWl,B.cWm,B.cWb,B.cWd,B.cWc,B.cVX,B.cVW,B.cVV,B.cVR,B.cVS,B.cVT,B.cWB,B.cWC,B.cWD,B.cWE,B.cWF,B.cWG,B.cWI,B.cWH,B.cWp,B.cWq,B.cWs,B.cWt,B.cWu,B.cWv,B.cVQ,B.cWA,B.cWz,B.f7o])
x(A.m9,[B.a9B,B.Ls,B.a6S,B.Mv,B.UU,B.Mu,B.Dw])
x(A.ae,[B.WN,B.SD,B.SH,B.SE,B.WM,B.SF,B.WO,B.WL,B.ND,B.WQ,B.WK,B.WR])
x(A.ag,[B.avY,B.azO,B.azR,B.azP,B.avX,B.azQ,B.avZ,B.avW,B.aw1,B.aw_,B.avV,B.aw0])
x(A.ar,[B.aa2,B.avU,B.b9d,B.a9C,B.a9A,B.b9e])
x(A.kw,[B.c1G,B.c1C,B.c1K,B.c1L,B.fnz,B.dFP,B.dFN,B.dGC,B.cWw,B.c24,B.f7S])
x(A.j_,[B.bev,B.bqn])})()
A.kc(b.typeUniverse,JSON.parse('{"b03":{"a6R":[]},"b04":{"aqu":[]},"WN":{"ae":[],"r":[]},"avY":{"ag":["WN"]},"aa2":{"ar":[],"r":[]},"SD":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"azO":{"ag":["SD"]},"azR":{"ag":["SH"]},"bev":{"j_":[]},"SE":{"ae":[],"r":[]},"azP":{"ag":["SE"]},"WM":{"ae":[],"r":[]},"SF":{"ae":[],"r":[]},"a9C":{"ar":[],"r":[]},"WO":{"ae":[],"r":[]},"WL":{"ae":[],"r":[]},"ND":{"ae":[],"r":[]},"WQ":{"ae":[],"r":[]},"a9A":{"ar":[],"r":[]},"WK":{"ae":[],"r":[]},"WR":{"ae":[],"r":[]},"avX":{"ag":["WM"]},"bqn":{"j_":[]},"azQ":{"ag":["SF"]},"avU":{"ar":[],"r":[]},"b9d":{"ar":[],"r":[]},"avZ":{"ag":["WO"]},"avW":{"ag":["WL"]},"aw1":{"ag":["ND"]},"aw_":{"ag":["WQ"]},"avV":{"ag":["WK"]},"aw0":{"ag":["WR"]},"b9e":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tq"),k:x("K_()"),m:x("bt<n,n>"),F:x("qp"),g:x("au<j7?>"),x:x("au<~>"),V:x("M<aa>"),O:x("M<x>"),W:x("M<be>"),Y:x("M<a0<n,R>>"),t:x("M<a0<n,@>>"),r:x("M<j7>"),w:x("M<+file,name(lc,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<j_>"),a:x("M<dz>"),p:x("M<r>"),Z:x("M<G>"),G:x("be"),A:x("cm<ag<ae>>"),n:x("al<j7>"),j:x("al<@>"),I:x("al<G>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iB"),e:x("hRo"),af:x("CK"),U:x("j7"),b:x("cr"),C:x("aC"),aK:x("vd"),ab:x("Dv"),br:x("aqu"),v:x("UV"),N:x("n"),X:x("bm<P>"),Q:x("ln"),D:x("dz"),aw:x("cv<n>"),cd:x("a3<a0<n,@>>"),c7:x("r"),ch:x("bL<al<j7>>"),aW:x("bL<dz?>"),aY:x("bL<~>"),cx:x("a9B"),b1:x("bd<al<j7>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayr"),bG:x("aBx"),q:x("mv"),B:x("oP<Dv>"),c6:x("oP<a6S>"),y:x("R"),i:x("P"),z:x("@"),S:x("G"),aQ:x("be?"),_:x("al<j7>?"),aL:x("al<@>?"),h:x("a0<n,@>?"),l:x("j7?"),R:x("aC?"),c:x("UV?"),d:x("+answerQr,transfer(n,au<al<j7>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Ls,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9i?"),bk:x("ayr?"),ag:x("aBx?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPD=new A.ay(C.az,2,C.r,-1)
D.bF6=new A.a8(C.a_,C.a7,C.w,C.Zh,null,null)
D.aRe=new A.o(null,null,null,C.mY,null,D.bF6,C.n)
D.aSA=new A.o(null,null,null,C.mY,null,E.EL,C.n)
D.a7V=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8R=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9y=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaW=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eD3=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eQ5=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.H5,null,null,null,null,null,null,null,null,null)
D.cM3=x([D.eD3,C.ar,D.eQ5],y.p)
D.bae=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cM3,null)
D.eTZ=new A.w("Create your organization",null,C.h5,null,null,null,null,null,null,null,null,null)
D.eGY=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.H5,null,null,null,null,null,null,null,null,null)
D.cZD=x([D.eTZ,C.ar,D.eGY],y.p)
D.ban=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cZD,null)
D.eQB=new A.w("Team Member sign-in",null,C.h5,null,null,null,null,null,null,null,null,null)
D.eKo=new A.w("Enter the access code and password from your organization.",null,G.H5,null,null,null,null,null,null,null,null,null)
D.cXO=x([D.eQB,C.ar,D.eKo],y.p)
D.bax=new A.fs(C.af,C.e,C.j,C.F,null,C.p,null,0,D.cXO,null)
D.bfl=new A.L(16,10,16,28)
D.bft=new A.L(16,14,16,4)
D.bgG=new A.L(20,0,20,16)
D.bha=new A.L(20,8,20,16)
D.adq=new A.L(24,22,24,20)
D.Xn=new A.a_(63394,"MaterialIcons",!1)
D.age=new A.a_(63515,"MaterialIcons",!1)
D.bqP=new A.a_(983813,"MaterialIcons",!1)
D.bo2=new A.a_(62867,"MaterialIcons",!1)
D.brN=new A.ac(D.bo2,44,C.c,null,null,null)
D.bsT=new A.ac(C.rL,null,C.ak,null,null,null)
D.bug=new A.ac(C.iF,18,null,null,null,null)
D.bvU=new A.ac(D.Xn,26,C.c,null,null,null)
D.bwp=new A.ac(C.Ep,null,null,null,null,null)
D.bwY=new A.ac(C.x8,null,null,null,null,null)
D.by2=new A.ac(W.L9,null,null,null,null,null)
D.bym=new A.ac(C.hg,16,null,null,null,null)
D.bBE=new A.ac(C.qh,16,null,null,null,null)
D.bs4=new A.ac(C.mA,null,null,null,null,null)
D.bCw=new A.dZ(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bs4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxu=new A.ac(C.E0,null,null,null,null,null)
D.bCB=new A.dZ(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsp=new A.ac(N.Ez,null,null,null,null,null)
D.bCL=new A.dZ(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coi=x([C.eT,C.aW,C.az],y.O)
D.bGQ=new A.a8(C.ax,C.aE,C.w,D.coi,null,null)
D.cnO=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nl=x([C.eT,C.az],y.O)
D.Nz=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m_=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cT9=x([C.q0,C.az],y.O)
D.dHv={iceServers:0}
D.aAm={urls:0}
D.d2c=new A.bt(D.aAm,["stun:stun.l.google.com:19302"],y.m)
D.d2b=new A.bt(D.aAm,["stun:stun1.l.google.com:19302"],y.m)
D.cDj=x([D.d2c,D.d2b],A.az("M<a0<n,n>>"))
D.d1x=new A.bt(D.dHv,[D.cDj],A.az("bt<n,@>"))
D.FM=new B.Ls(0,"lanDirect")
D.OM=new B.Ls(1,"cloudStash")
D.dd7=new B.Ls(2,"inlineInstant")
D.ON=new B.Ls(3,"webrtcLink")
D.xO=new B.Ls(4,"videoCloud")
D.eQ4=new A.w("Receive file",null,C.mR,null,null,null,null,null,null,null,null,null)
D.ce1=x([E.ahT,C.aa,D.eQ4],y.p)
D.e9R=new A.cD(C.b_,C.b5,C.j,C.m,null,C.p,null,0,D.ce1,null)
D.dLP=new A.B(C.c9,D.e9R,null)
D.euD=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZV,null,null,null)
D.eDz=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.euD,null,C.L,null,null,null,null,null,null,null)
D.dL9=new A.B(C.zG,D.eDz,null)
D.aWA=new A.cw(C.B,null,null,D.dL9,null)
D.dQf=new A.cF(0,null,0,28,null,null,D.aWA,null)
D.dQx=new B.a6S(0,"RTCDataChannelConnecting")
D.aFo=new B.a6S(1,"RTCDataChannelOpen")
D.aFp=new B.a6S(3,"RTCDataChannelClosed")
D.dQy=new B.Dw(0,"RTCIceConnectionStateNew")
D.dQz=new B.Dw(1,"RTCIceConnectionStateChecking")
D.dQA=new B.Dw(2,"RTCIceConnectionStateCompleted")
D.dQB=new B.Dw(3,"RTCIceConnectionStateConnected")
D.dQC=new B.Dw(4,"RTCIceConnectionStateCount")
D.dQD=new B.Dw(5,"RTCIceConnectionStateFailed")
D.dQE=new B.Dw(6,"RTCIceConnectionStateDisconnected")
D.aFq=new B.Dw(7,"RTCIceConnectionStateClosed")
D.aFr=new B.UU(0,"RTCIceGatheringStateNew")
D.dQF=new B.UU(1,"RTCIceGatheringStateGathering")
D.a29=new B.UU(2,"RTCIceGatheringStateComplete")
D.a2a=new B.Mu(0,"RTCPeerConnectionStateClosed")
D.aFs=new B.Mu(1,"RTCPeerConnectionStateFailed")
D.aFt=new B.Mu(2,"RTCPeerConnectionStateDisconnected")
D.aFu=new B.Mu(3,"RTCPeerConnectionStateNew")
D.aFv=new B.Mu(4,"RTCPeerConnectionStateConnecting")
D.aFw=new B.Mu(5,"RTCPeerConnectionStateConnected")
D.dQG=new B.Mv(0,"RTCSignalingStateStable")
D.dQH=new B.Mv(1,"RTCSignalingStateHaveLocalOffer")
D.dQI=new B.Mv(2,"RTCSignalingStateHaveRemoteOffer")
D.dQJ=new B.Mv(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dQK=new B.Mv(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFx=new B.Mv(5,"RTCSignalingStateClosed")
D.edp=new A.ap(160,48)
D.aXI=new A.f9(2,null,null,null,null,C.az,null,null,null,null)
D.eeS=new A.a7(16,16,D.aXI,null)
D.eGp=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.egg=new A.aX(D.eGp,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNa=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.egj=new A.aX(D.eNa,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eUY=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.egq=new A.aX(D.eUY,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eG4=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.egR=new A.aX(D.eG4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eQK=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aHQ=new A.aX(D.eQK,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eS1=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ehj=new A.aX(D.eS1,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWg=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ehy=new A.aX(D.eWg,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eUq=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ehD=new A.aX(D.eUq,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVy=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ein=new A.aX(D.eVy,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eEP=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eiU=new A.aX(D.eEP,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eOS=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eje=new A.aX(D.eOS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eIo=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ejK=new A.aX(D.eIo,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWm=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ejO=new A.aX(D.eWm,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eF3=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ejU=new A.aX(D.eF3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eDT=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ek8=new A.aX(D.eDT,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eB1=new A.w("NGMY DOC SHARE",null,C.aJ5,null,null,null,null,null,null,null,null,null)
D.eCb=new A.w("Show this to sender",null,C.kb,null,null,null,null,null,null,null,null,null)
D.eD9=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eHi=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eHB=new A.w("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.eIy=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eIY=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eLv=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eO6=new A.w("Send to their Doc Share",null,C.mQ,null,null,null,null,null,null,null,null,null)
D.eOp=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eOH=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.ePa=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.ePe=new A.w("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.ePB=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eB,null,null,null,null,null,null,null,null,null)
D.eSs=new A.w("Share files & videos\nwith a scan.",null,C.aJ6,null,null,null,null,null,null,null,null,null)
D.eSK=new A.w("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.f1g=new B.WK(null)
D.a54=new B.a9B(0,"docShare")
D.a55=new B.a9B(1,"gate")
D.Rv=new B.a9B(2,"gateNoIndividual")})();(function staticFields(){$.aK4=null
$.eVP=function(){var x=y.N
return A.Q(x,x)}()
$.EC=A.Q(y.N,y.D)
$.adv=A.Q(y.N,A.az("lc"))
$.OV=A.Q(y.N,y.D)
$.eWl=A.Q(y.N,A.az("a9i"))
$.c1Y=A.Q(y.S,A.az("bqI"))
$.fOo=1
$.hzG=null
$.hzF=null
$.hrD=null
$.fDX=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hRT","h43",()=>new B.ccN())
x($,"hPO","fHl",()=>C.a.q(A.bp(A.bp(A.bp(A.F8(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["gB7ZNvBVxEWjVr27cab2iveXU7c="]=a.current})($__dart_deferred_initializers__);