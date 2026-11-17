((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,E,P,G,Q,R,S,I,K,B={csH:function csH(){},
i0T(d){var x=null,w=new B.b6x(d,D.eDu,new A.pR(x,x,y.c6),new A.pR(x,x,y.B))
w.bCE(d)
return w},
b6x:function b6x(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
csC:function csC(d){this.a=d},
csD:function csD(d){this.a=d},
csE:function csE(d){this.a=d},
csB:function csB(d){this.a=d},
csF:function csF(d){this.a=d},
i0U(d,e){var x=y.N
x=new B.b6y(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCF(d,e)
return x},
b6y:function b6y(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csI:function csI(d){this.a=d},
csJ:function csJ(d){this.a=d},
csK:function csK(d){this.a=d},
csL:function csL(d){this.a=d},
csM:function csM(d){this.a=d},
csN:function csN(d){this.a=d},
csO:function csO(d){this.a=d},
csP:function csP(d){this.a=d},
hfk(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x2.GV(x,"ngmy_doc_share_v1",new B.fxN(),1)},
i7B(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.wR(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cK.aN(d)
return x}catch(w){return v}return v},
Sk(d,e){return B.in4(d,e)},
in4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sk=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPW
x=7
return A.b(o==null?$.aPW=B.hfk():o,$async$Sk)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mk(s,"blobs","readwrite")
C.iE.mh(J.mj(q,"blobs"),r,d)
x=8
return A.b(J.oy(q),$async$Sk)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$Sk,w)},
Sj(d){return B.in3(d)},
in3(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPW
x=7
return A.b(o==null?$.aPW=B.hfk():o,$async$Sj)
case 7:s=f
r=J.mk(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"blobs"),d),$async$Sj)
case 8:q=f
x=9
return A.b(J.oy(r),$async$Sj)
case 9:o=B.i7B(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$Sj,w)},
aig(d){return B.in2(d)},
in2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aig=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPW
x=7
return A.b(p==null?$.aPW=B.hfk():p,$async$aig)
case 7:s=f
r=J.mk(s,"blobs","readwrite")
C.iE.Gq(J.mj(r,"blobs"),d)
x=8
return A.b(J.oy(r),$async$aig)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aig,w)},
fxN:function fxN(){},
ia2(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brn(w,v))}return u},
hGN(d,e){var x,w={},v=A.aYz("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fXg(w,v,e)
C.x4.zb(v,"change",new B.fXi(w,v,!1))
C.x4.zb(v,"cancel",new B.fXh(w))
$.eY.mJ()
v.click()
A.bN(C.alQ,new B.fXf(w),y.H)},
fXg:function fXg(d,e,f){this.a=d
this.b=e
this.c=f},
fXi:function fXi(d,e,f){this.a=d
this.b=e
this.c=f},
fXh:function fXh(d){this.a=d},
fXf:function fXf(d){this.a=d},
DG(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUE()?3:4
break
case 3:x=5
return A.b(B.hBp(e,d,s,!0,!1,f,g,h,!1,i),$async$DG)
case 5:x=1
break
case 4:x=6
return A.b(B.RW(d,s,f,g,h,i),$async$DG)
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
return A.b(B.Jo(s,d),$async$DG)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fti(s,d),$async$DG)
case 14:x=12
return A.b(r.hBp(q,p,o,n,m,l,k,j,a1,i),$async$DG)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ed(new B.fXv(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ed(new B.fXw(s,i,d,f,g,h),!1,null,y.H)),$async$DG)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DG,w)},
RW(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RW=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1i(e),$async$RW)
case 3:u=k
x=4
return A.b(B.aqW(d,e,!1),$async$RW)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jo(e,d),$async$RW)
case 7:if(k){v=D.adm
x=1
break}x=8
return A.b(B.Wd(e),$async$RW)
case 8:v=t?D.X5:D.adn
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1g(d,e)){v=D.adm
x=1
break}x=11
return A.b(B.Wd(e),$async$RW)
case 11:v=t?D.X5:D.adn
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.had(d,e)){v=D.adm
x=1
break}x=14
return A.b(B.Wd(e),$async$RW)
case 14:v=D.X5
x=1
break
case 13:v=t?D.X5:D.adn
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RW,w)},
fti(d,e){var x=0,w=A.j(y.y),v
var $async$fti=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1g(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1i(d),$async$fti)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fti,w)},
hBp(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ed(new B.fAr(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hwi(d,e,f,g,h,i,j){return new B.a_r(e,j,d,g,h,i,f,null)},
fCl(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fCl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bT(C.L,null,new B.fCo(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fCl)
case 3:r=f
t.U$=u
t.R$=0
s.U$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCl,w)},
fCQ(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fCQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bT(C.L,null,new B.fCS(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fCQ)
case 3:q=f
t.U$=u
t.R$=0
s.U$=u
s.R$=0
r.U$=u
r.R$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCQ,w)},
hfw(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bz(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fPG(d,e){var x=0,w=A.j(y.H),v
var $async$fPG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wd(e),$async$fPG)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eq()
case 1:return A.h(v,w)}})
return A.i($async$fPG,w)},
fXv:function fXv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXw:function fXw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adv:function adv(d,e){this.a=d
this.b=e},
fAr:function fAr(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_r:function a_r(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBj:function aBj(){this.c=this.a=this.d=null},
dd4:function dd4(d,e){this.a=d
this.b=e},
dd1:function dd1(d){this.a=d},
dd3:function dd3(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd6:function dd6(){},
dd5:function dd5(d){this.a=d},
adZ:function adZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDY:function aDY(d,e){this.a=d
this.b=e},
aH8:function aH8(d,e,f){this.a=d
this.b=e
this.c=f},
fCo:function fCo(d,e,f){this.a=d
this.b=e
this.c=f},
fCm:function fCm(d){this.a=d},
fCn:function fCn(d,e,f){this.a=d
this.b=e
this.c=f},
fCS:function fCS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCR:function fCR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cen(d,e,f,g,h){return B.hWK(d,e,f,g,h)},
hWK(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cen=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iH(r.dN(d,new B.ceo(s,e,h,g,f,q),y.g),y.l),$async$cen)
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
return A.i($async$cen,w)},
b1d(d,e,f,g,h){return B.hWL(d,e,f,g,h)},
hWL(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1d=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awt("GET",d)
o=A.h6C()
if(o==null)o=new A.MJ(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.GV),$async$b1d)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CZ(),$async$b1d)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cg(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$b1d,w)},
b1c(d){return B.hWI(d)},
hWI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.ov),$async$b1c)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mf(A.mc(p.e)).cI(0,p.w),null)
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
return A.i($async$b1c,w)},
cem(d){return B.hWJ(d)},
hWJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cem=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.qD),$async$cem)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mf(A.mc(q.e)).cI(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
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
return A.i($async$cem,w)},
ceo:function ceo(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jG:function jG(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jm(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hWQ(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jm(C.a.b4(t,u.length))}return null},
hWR(d){var x=B.Jm(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hWM(){var x,w=$.ov(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a84(d){return B.hWN(d)},
hWN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a84=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bN),$async$a84)
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
return A.i($async$a84,w)},
a85(d,e){return B.hWO(d,e)},
hWO(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a85=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cO,null),$async$a85)
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
return A.i($async$a85,w)},
Cf(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cf)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jm(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a86(r),$async$Cf)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a84("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cf)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jm(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cf)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hWM()
x=14
return A.b(B.a86(m),$async$Cf)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a85("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cf)
case 15:k=f
x=16
return A.b(B.a85("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cf)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cf)
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
return A.i($async$Cf,w)},
a86(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a86=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jm(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a84("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a86)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a86,w)},
a87(d,e,f,g){return B.hWS(d,e,f,g)},
hWS(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a87=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jm(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a86(r),$async$a87)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cE(d,0,new B.ceu())>1048576||g.aU(d,new B.cev())){v=B.Fh(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8i("myCode",d,a0),$async$a87)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cu(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fh(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1l(u,g.gJ(d),a0),$async$a87)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ov().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cew(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1e(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a87)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a87,w)},
Fh(d,e,f,g,h){return B.hWP(d,e,f,g,h)},
hWP(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fh=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Fh)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cE(a6,0,new B.ceq())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ov().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cR.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jq(a9,q)
a0=new A.Lf(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fh)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.po(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abK(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.Ew(!0,q.c)),$async$Fh)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fh)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSw(r),$async$Fh)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.cer(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1e(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fh)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSw(r),$async$Fh)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fh,w)},
b1e(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a84(t),$async$b1e)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cep(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a85(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1e,w)},
Ok(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ok=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a84("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ok)
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
return A.b(B.b1f(k,a0),$async$Ok)
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
return A.b(B.b1k(h),$async$Ok)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wk(g,a0),$async$Ok)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ces(),q),n)
d=A.C(new A.Y(r,new B.cet(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a85("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Ok)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
b1f(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1f=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}o=J.a8(p)
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
break}i=B.iqZ(k,j)
C.d.u(s,i)
x=5
return A.b(B.DE(l,m,"Received via My Code",t,e,i),$async$b1f)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSw(s),$async$b1f)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1f,w)},
ceu:function ceu(){},
cev:function cev(){},
cew:function cew(){},
ceq:function ceq(){},
cer:function cer(){},
cep:function cep(){},
ces:function ces(){},
cet:function cet(){},
fXs(d,e){var x=0,w=A.j(y.H)
var $async$fXs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ed(new B.fXt(e),!1,null,y.H)),$async$fXs)
case 2:return A.h(null,w)}})
return A.i($async$fXs,w)},
bGu(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cu(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ed(new B.fXu(g,e,f),!1,null,y.y)),$async$bGu)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGu,w)},
fXt:function fXt(d){this.a=d},
fXu:function fXu(d,e,f){this.a=d
this.b=e
this.c=f},
Wa:function Wa(d,e){this.c=d
this.a=e},
aFk:function aFk(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZR:function dZR(d,e){this.a=d
this.b=e},
We:function We(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFn:function aFn(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e0_:function e0_(d){this.a=d},
e00:function e00(d){this.a=d},
e01:function e01(d){this.a=d},
e_Z:function e_Z(d,e){this.a=d
this.b=e},
e02:function e02(d){this.a=d},
e03:function e03(d){this.a=d},
e04:function e04(d,e){this.a=d
this.b=e},
e05:function e05(d,e){this.a=d
this.b=e},
e06:function e06(d,e){this.a=d
this.b=e},
e07:function e07(d){this.a=d},
e0a:function e0a(){},
e08:function e08(d){this.a=d},
e09:function e09(d,e){this.a=d
this.b=e},
blu:function blu(){},
Wb:function Wb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFl:function aFl(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZS:function dZS(d){this.a=d},
dZT:function dZT(d){this.a=d},
hae(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hWU(d){var x=d.l4
if(x>=0)return x
return 4.99},
hWT(d){var x=d.m8,w=y.N
w=x.jp(x,new B.cey(),w,w)
return w},
hri(d){var x=d.l5,w=y.N
w=x.jp(x,new B.cez(),w,w)
return w},
b1i(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1i)
case 7:s=f
r=A.w(p)
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
return A.i($async$b1i,w)},
a89(d,e){var x=0,w=A.j(y.H),v,u
var $async$a89=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a89)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a89)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
Wd(d){var x=0,w=A.j(y.H),v,u
var $async$Wd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wd)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wd,w)},
had(d,e){var x,w,v
if(B.hWU(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hWT(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b1g(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hri(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hrj(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hri(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqX(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqX)
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
return A.i($async$aqX,w)},
aqY(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqX(d),$async$aqY)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqY)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqY,w)},
aqW(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hae(d)
if(u<=0){v=!1
x=1
break}if(B.had(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqX(e),$async$aqW)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqW,w)},
b1h(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jo(e,d),$async$b1h)
case 3:if(g){v=-1
x=1
break}u=B.hae(d)
if(u<=0){v=-1
x=1
break}if(B.had(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqX(e),$async$b1h)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1h,w)},
ceB(d,e,f){var x=0,w=A.j(y.y),v
var $async$ceB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jo(e,d),$async$ceB)
case 3:if(h){v=!1
x=1
break}v=B.aqW(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceB,w)},
ceA(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ceA=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ceB(d,u,i.gUE()),$async$ceA)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceA,w)},
a88(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a88=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUE()){v=!0
x=1
break}if(B.b1g(d,u)){v=!0
x=1
break}x=5
return A.b(A.lD(u,C.Uk),$async$a88)
case 5:x=k?3:4
break
case 3:B.hrj(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a88)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.li(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Uk,"Doc Share for Organizations"),$async$a88)
case 7:if(!k){v=!1
x=1
break}B.hrj(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a88)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
cey:function cey(){},
cez:function cez(){},
fYs(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fYs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fYs)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fpz.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fpz.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYs,w)},
it7(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fpz.bq($.fpz,new B.fYu(d))},
fYu:function fYu(d){this.a=d},
frb(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$frb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],f))
s.toString
u=A.n5(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jq,null,y.H),$async$frb)
case 3:C.Br.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frb,w)},
ah9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fqf.n(0,d,new B.adc(A.bp(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah9)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ah9)
case 2:return A.h(null,w)}})
return A.i($async$ah9,w)},
ah3(d){return B.ibV(d)},
ibV(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fqf.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah3)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cu(s)){v=null
x=1
break}o=J.b8(s,new B.fuS(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.adc(r)
$.fqf.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah3,w)},
RM(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.H2.n(0,d,u)
x=3
return A.b(B.Sk(d,u),$async$RM)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RM,w)},
aQg(d){return B.ibT(d)},
ibT(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H2.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sj(d),$async$aQg)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H2.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQg)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cK.aN(r)
x=!J.cu(q)?9:10
break
case 9:B.RM(d,q)
x=11
return A.b(J.hd(s,d),$async$aQg)
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
return A.i($async$aQg,w)},
i82(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cf(J.eF(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cf(A.wR(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
return A.f4(null,y.K)},
a2W(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bl($.bE,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fAD(r,t),!1,s)
A.fC(r,"error",new B.fAE(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iK(0,C.Ob,new B.fAF())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2W,w)},
aQA(d,e,f){return B.ieh(d,e,f)},
ieh(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQA=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2W(i),$async$aQA)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sk(o,p),$async$aQA)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah9(k,j,s),$async$aQA)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQA,w)},
aQz(d,e,f){return B.ieg(d,e,f)},
ieg(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQz=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQA(d,e,f),$async$aQz)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2W(f),$async$aQz)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H2.n(0,s,r)
$.S4.n(0,s,r)
x=11
return A.b(B.RM(s,r),$async$aQz)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQz,w)},
Cg(d,e,f,g,h,i){return B.hX2(d,e,f,g,h,i)},
hX2(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cg=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jG(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1o(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RM(s,d),$async$Cg)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cg)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cV.gcu().aN(d)),$async$Cg)
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
return A.b(B.Be(e),$async$Cg)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hc(e,j),$async$Cg)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cg,w)},
Wf(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wf=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Be(d),$async$Wf)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cR.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hrl(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jG(m,n,k,l,j,"From folder",null,B.b1o(),null)
$.ahz.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2W(o),$async$Wf)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H2.n(0,h,g)
$.S4.n(0,h,g)
B.RM(h,g)
x=9
break
case 10:x=11
return A.b(B.aQz(d,m,o),$async$Wf)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hc(d,t),$async$Wf)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
hai(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hai=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hrl(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jp(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cg(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hai,w)},
Jp(d,e,f,g,h,i){return B.hX1(d,e,f,g,h,i)},
hX1(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jp=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lf(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jp)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cu(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.SS(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kM(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sk(k,l),$async$Jp)
case 11:J.c5(q,k);++p
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
return A.b(j.a1(0),$async$Jp)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sk(k,new Uint8Array(A.cf(n))),$async$Jp)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ah9(r,q,g),$async$Jp)
case 16:f=new B.jG(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1o(),null)
x=17
return A.b(B.Be(d),$async$Jp)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hc(d,e),$async$Jp)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jp,w)},
Wh(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wh=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahz.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2W(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah3(s),$async$Wh)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sj(u[o]),$async$Wh)
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
v=A.wR(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S4.h(0,s)
if(i==null)i=$.H2.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rW(d,e),$async$Wh)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S4.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wR(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
hrl(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rW(d,e){return B.hX3(d,e)},
hX3(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rW=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S4.h(0,f)
if(e==null)e=$.H2.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahz.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2W(s),$async$rW)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H2.n(0,f,r)
$.S4.n(0,f,r)
B.RM(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ah3(f),$async$rW)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aA6(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sj(g[l]),$async$rW)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqb()
if(!C.aI.gau(r)){$.H2.n(0,f,r)
$.S4.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQg(f),$async$rW)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S4.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wh(a0,a1,0,g),$async$rW)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cf(i))
$.H2.n(0,f,h)
$.S4.n(0,f,h)
B.RM(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rW,w)},
hX6(d){var x,w,v=$.ahz.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hX7(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hX4(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ar3(d,e,f,g,h){return B.hX5(d,e,f,g,h)},
hX5(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ar3=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahz.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2W(s),$async$ar3)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rW(g,e),$async$ar3)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f1().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.iE(d).xL(h,r,new A.Ew(!0,e.c)),$async$ar3)
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
return A.i($async$ar3,w)},
hrn(d,e,f,g,h){var x,w,v,u,t=$.hrm
$.hrm=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ceM.n(0,t,new B.byo(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aA6(u)))
return t},
haj(d){var x=0,w=A.j(y.H)
var $async$haj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$haj,w)},
Jq(d,e){var $async$Jq=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahz.h(0,h)
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
return A.qx(B.Wh(d,e,p,o<q?o:q),$async$Jq,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qx(A.GA(n),$async$Jq,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qx(B.ah3("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jq,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qx(B.Sj(h[l]),$async$Jq,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qx(A.GA(k),$async$Jq,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qx(B.rW(d,e),$async$Jq,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qx(A.GA(A.wR(j,p,o<i?o:i)),$async$Jq,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qx(null,0,w)
case 2:return A.qx(t.at(-1),1,w)}})
var x=0,w=A.hAg($async$Jq,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hC8(w)},
b1q(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ceM.h(0,d)
if(t==null||J.cu(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5U(),$async$b1q)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1q,w)},
Wg(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceM.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5U(),$async$Wg)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah9(r.c,u,r.z),$async$Wg)
case 4:t=new B.jG(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1o(),null)
u=r.a
x=5
return A.b(B.Be(u),$async$Wg)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hc(u,s),$async$Wg)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
a8f(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceM.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aig(u[s]),$async$a8f)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
ceO(d,e,f){var x=0,w=A.j(y.H)
var $async$ceO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDr(d,e,f),$async$ceO)
case 2:return A.h(null,w)}})
return A.i($async$ceO,w)},
ceP(d,e,f){var x=0,w=A.j(y.H)
var $async$ceP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDs(d,e,f),$async$ceP)
case 2:return A.h(null,w)}})
return A.i($async$ceP,w)},
Fi(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Be(d),$async$Fi)
case 2:p=g
J.nT(p,new B.ceN(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H2.W(0,v)
$.ahz.W(0,e)
x=3
return A.b(B.ah3(v),$async$Fi)
case 3:u=g
$.fqf.W(0,v)
x=4
return A.b(A.aA(),$async$Fi)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fi)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fi)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aig(s[q]),$async$Fi)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aig(v),$async$Fi)
case 13:x=14
return A.b(B.Hc(d,p),$async$Fi)
case 14:return A.h(null,w)}})
return A.i($async$Fi,w)},
b1p(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rW(d,e),$async$b1p)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.frb(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1p,w)},
Be(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Be=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Be)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fAG(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Be,w)},
Hc(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hc)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fEQ(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hc)
case 3:return A.h(null,w)}})
return A.i($async$Hc,w)},
bDr(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Be(d),$async$bDr)
case 3:u=h
t=J.cD(u)
s=t.bk(u,new B.fyR(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGi(f))
x=4
return A.b(B.Hc(d,u),$async$bDr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDr,w)},
bDs(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Be(d),$async$bDs)
case 3:u=h
t=J.cD(u)
s=t.bk(u,new B.fyS(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPf(f))
x=4
return A.b(B.Hc(d,u),$async$bDs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDs,w)},
adc:function adc(d){this.a=d},
fuS:function fuS(){},
fAD:function fAD(d,e){this.a=d
this.b=e},
fAE:function fAE(d){this.a=d},
fAF:function fAF(){},
ceN:function ceN(d){this.a=d},
byo:function byo(d,e,f,g,h,i,j,k,l){var _=this
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
fAG:function fAG(){},
fEQ:function fEQ(){},
fyR:function fyR(d){this.a=d},
fyS:function fyS(d){this.a=d},
a8g(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.ceS())?3:4
break
case 3:x=5
return A.b(B.b1r(d,e),$async$a8g)
case 5:u=g
if(u!=null){t=u.c
B.Om(d,u.b,e,t)}v=u
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
return A.b(B.b1m(s),$async$a8g)
case 10:case 9:if(g){v=new A.R8(1,D.TY,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wi(d,e),$async$a8g)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wn(!0,!0,d,e),$async$a8g)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Om(d,D.As,e,t)
v=new A.R8(p,D.As,t)
x=1
break}v=B.ceR(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
Wi(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8i(null,d,e),$async$Wi)
case 3:p=g
try{u=C.W.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cu(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1l(p,d.length,e),$async$Wi)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ceP(e,C.d.gH(d).a,r.b),$async$Wi)
case 7:case 6:q=r.a
x=8
return A.b(B.Om(d,D.TY,e,q),$async$Wi)
case 8:v=new A.R8(d.length,D.TY,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wi,w)},
Wj(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mQ(D.n8)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8h(d,e),$async$Wj)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ceK(s,d,e,t),$async$Wj)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1m(t),$async$Wj)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rW(e,d),$async$Wj)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wi(A.a([d],y.r),e),$async$Wj)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
Wl(){var x=0,w=A.j(y.H)
var $async$Wl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hac(),$async$Wl)
case 2:x=3
return A.b(B.aSS(),$async$Wl)
case 3:return A.h(null,w)}})
return A.i($async$Wl,w)},
a8h(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1o()
x=3
return A.b(B.ceO(e,d.a,u),$async$a8h)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
Om(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Om=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.TY&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b4(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8h(p,f),$async$Om)
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
return A.b(B.ceJ(o,p,u,f),$async$Om)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ceK(o,p,f,t),$async$Om)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ceI(o,u,p,f),$async$Om)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b1r(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceQ(e,d),$async$b1r)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wn(!1,!0,d,e),$async$b1r)
case 4:u=g
if(u!=null){t=u.b
v=new A.R8(u.a,D.As,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1r,w)},
ceQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ceQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wh(d,s,0,1),$async$ceQ)
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
return A.i($async$ceQ,w)},
ceR(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8i(null,d,e),$async$ceR)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hrk(u)
if(t.length>800){v=null
x=1
break}v=new A.R8(d.length,D.dTS,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceR,w)},
ar4(d,e,f){return B.hXa(d,e,f)},
hXa(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ar4=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.hah(g)?3:4
break
case 3:x=5
return A.b(B.ceL(g),$async$ar4)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fj(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b1k(q),$async$ar4)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wk(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.hag(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wk(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jr(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jr(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jr(h,d,a0)
x=1
break}if(J.eK(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wk(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ar4,w)},
Jr(d,e,f){return B.hX8(d,e,f)},
hX8(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jr=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b4(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b4(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cC(A.w(s)+"/manifest.json",0,null)
q=A.cC(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1c(r),$async$Jr)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1c(A.cC(s,0,null)),$async$Jr)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cu(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cen(o,r,a1,n,a2),$async$Jr)
case 11:m=a4
x=J.cu(m)?12:13
break
case 12:x=14
return A.b(B.cem(q),$async$Jr)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wk(l,a2),$async$Jr)
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
return A.i($async$Jr,w)},
a8i(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rW(f,r),$async$a8i)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cV.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.W.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
Wk(d,e){return B.hX9(d,e)},
hX9(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wk=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.W.aP(0,a2,null)
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
break}i=C.cK.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cg(i,a3,d,k,l,o),$async$Wk)
case 9:h=a5
if(h!=null)J.c5(n,h)
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
return A.i($async$Wk,w)},
Ol:function Ol(d,e){this.a=d
this.b=e},
ceS:function ceS(){},
a2v(d){var x=A.P(d).ax.a===C.I,w=x?D.aj6:D.agz,v=x?D.akR:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.ai3:C.bl
return new A.aIo([w,s,v,u,t,x?C.fq:C.bQ])},
hHP(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h1K(e),d,null,!0,!0,y.N)},
cex(d,e,f,g,h,i,j,k,l){return new B.Wc(e,l,d,f,k,j,g,h,i,null)},
a_t(d,e,f,g,h,i,j){return new B.bg2(g,h,j,e,i,d,f,null)},
h1K:function h1K(d){this.a=d},
a_q:function a_q(d,e){this.c=d
this.a=e},
aBi:function aBi(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dd0:function dd0(d){this.a=d},
dcZ:function dcZ(d){this.a=d},
dd_:function dd_(d){this.a=d},
by0:function by0(){},
Wc:function Wc(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFm:function aFm(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_Y:function e_Y(d){this.a=d},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e){this.a=d
this.b=e},
dZV:function dZV(d,e,f){this.a=d
this.b=e
this.c=f},
dZU:function dZU(d){this.a=d},
dZW:function dZW(d,e){this.a=d
this.b=e},
e_0:function e_0(d,e,f){this.a=d
this.b=e
this.c=f},
e__:function e__(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_N:function e_N(d){this.a=d},
e_i:function e_i(d,e,f){this.a=d
this.b=e
this.c=f},
e_f:function e_f(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZZ:function dZZ(d){this.a=d},
e_q:function e_q(d){this.a=d},
e_p:function e_p(){},
e_4:function e_4(d){this.a=d},
e_J:function e_J(d,e){this.a=d
this.b=e},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_y:function e_y(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_z:function e_z(){},
e_A:function e_A(){},
e_B:function e_B(d,e){this.a=d
this.b=e},
e_D:function e_D(){},
e_E:function e_E(d){this.a=d},
e_w:function e_w(d,e){this.a=d
this.b=e},
e_r:function e_r(d){this.a=d},
e_s:function e_s(d){this.a=d},
e_t:function e_t(d){this.a=d},
e_u:function e_u(d){this.a=d},
e_v:function e_v(d){this.a=d},
e_1:function e_1(){},
e_2:function e_2(d){this.a=d},
e_3:function e_3(d,e){this.a=d
this.b=e},
dZY:function dZY(d,e){this.a=d
this.b=e},
dZX:function dZX(d,e,f){this.a=d
this.b=e
this.c=f},
e_j:function e_j(d){this.a=d},
e_k:function e_k(d,e,f){this.a=d
this.b=e
this.c=f},
e_d:function e_d(d,e){this.a=d
this.b=e},
e_9:function e_9(d){this.a=d},
e_6:function e_6(d,e,f){this.a=d
this.b=e
this.c=f},
e_a:function e_a(d){this.a=d},
e_b:function e_b(d){this.a=d},
e_c:function e_c(){},
e_e:function e_e(d,e){this.a=d
this.b=e},
e_7:function e_7(d){this.a=d},
e_5:function e_5(d,e,f){this.a=d
this.b=e
this.c=f},
e_8:function e_8(){},
e_o:function e_o(d){this.a=d},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d,e){this.a=d
this.b=e},
e_H:function e_H(d){this.a=d},
e_V:function e_V(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_U:function e_U(d){this.a=d},
e_W:function e_W(){},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_P:function e_P(d,e){this.a=d
this.b=e},
e_Q:function e_Q(d,e,f){this.a=d
this.b=e
this.c=f},
e_O:function e_O(d,e,f){this.a=d
this.b=e
this.c=f},
e_R:function e_R(d,e){this.a=d
this.b=e},
e_S:function e_S(d,e){this.a=d
this.b=e},
aBf:function aBf(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bg1:function bg1(d,e,f){this.c=d
this.d=e
this.a=f},
dcX:function dcX(){},
dcY:function dcY(){},
adw:function adw(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddk:function ddk(){},
ddj:function ddj(d){this.a=d},
a_s:function a_s(d,e,f){this.c=d
this.d=e
this.a=f},
aBk:function aBk(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
ddg:function ddg(d){this.a=d},
ddh:function ddh(d,e,f){this.a=d
this.b=e
this.c=f},
ddi:function ddi(d,e){this.a=d
this.b=e},
dde:function dde(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
dda:function dda(d){this.a=d},
dd7:function dd7(d){this.a=d},
ddd:function ddd(d){this.a=d},
dd9:function dd9(d){this.a=d},
ddf:function ddf(d){this.a=d},
ddb:function ddb(d){this.a=d},
dd8:function dd8(d){this.a=d},
a_p:function a_p(d,e,f){this.c=d
this.d=e
this.a=f},
aBh:function aBh(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcU:function dcU(d){this.a=d},
dcT:function dcT(d,e){this.a=d
this.b=e},
dcV:function dcV(d){this.a=d},
dcS:function dcS(d,e){this.a=d
this.b=e},
dcW:function dcW(d){this.a=d},
dcR:function dcR(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dcO:function dcO(d){this.a=d},
dcP:function dcP(d,e){this.a=d
this.b=e},
dcQ:function dcQ(d){this.a=d},
QH:function QH(d,e,f){this.c=d
this.d=e
this.a=f},
aBn:function aBn(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddx:function ddx(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddA:function ddA(d){this.a=d},
ddB:function ddB(d,e){this.a=d
this.b=e},
ddC:function ddC(d){this.a=d},
ddE:function ddE(d){this.a=d},
ddD:function ddD(d){this.a=d},
a_u:function a_u(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBl:function aBl(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddt:function ddt(d,e){this.a=d
this.b=e},
ddu:function ddu(d,e){this.a=d
this.b=e},
ddl:function ddl(d,e,f){this.a=d
this.b=e
this.c=f},
ddm:function ddm(d){this.a=d},
ddn:function ddn(){},
dds:function dds(){},
ddo:function ddo(d,e){this.a=d
this.b=e},
ddp:function ddp(d,e){this.a=d
this.b=e},
ddq:function ddq(d,e){this.a=d
this.b=e},
ddr:function ddr(d,e){this.a=d
this.b=e},
adu:function adu(d,e){this.c=d
this.a=e},
dcM:function dcM(d){this.a=d},
a_o:function a_o(d){this.a=d},
aBg:function aBg(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_v:function a_v(d,e){this.c=d
this.a=e},
aBm:function aBm(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddw:function ddw(d){this.a=d},
ddv:function ddv(d){this.a=d},
bg2:function bg2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hXb(){var x,w=$.ov(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
On(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$On=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$On)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$On)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
return A.i($async$On,w)},
a8j(d){return B.hXc(d)},
hXc(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8j)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cO,null),$async$a8j)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8j,w)},
Wm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.On(),$async$Wm)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dL(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8j(s),$async$Wm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
Wn(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wn=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Wn)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceU(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hXb()
t=A.U(u).k("N<1,a9<n,aF>>")
r=A.C(new A.N(u,new B.ceV(s),t),t.k("ak.E"))
x=6
return A.b(B.On(),$async$Wn)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8j(q),$async$Wn)
case 7:x=8
return A.b(B.a8k(r,u,g,s),$async$Wn)
case 8:v=new A.brS(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
ar5(d){var x=0,w=A.j(y.y),v,u,t
var $async$ar5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.On(),$async$ar5)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar5,w)},
ceW(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.On(),$async$ceW)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a8(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceW,w)},
a8k(d,e,f,g){return B.hXd(d,e,f,g)},
hXd(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8k=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ar3("media",r,new B.ceT(s,e,g),f,q),$async$a8k)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wm(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8k)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wm(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8k)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wm(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8k)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8k,w)},
Fj(d,e,f){return B.hXe(d,e,f)},
hXe(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fj=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fj)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ar5(b3),$async$Fj)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.iR,null,g),$async$Fj)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ar5(b3),$async$Fj)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.On(),$async$Fj)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.j.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cu(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a8(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f1().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.po(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abK(a8.a,b0,"media",a8.d,a9).Dj(m)
k=A.cC(l,0,null)
x=17
return A.b(B.b1d(k,n,o,s,b7),$async$Fj)
case 17:j=c0
if(j!=null){J.c5(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
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
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f1().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.po(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abK(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fj)
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
a0=A.dL(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8j(e),$async$Fj)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fj,w)},
ceU:function ceU(){},
ceV:function ceV(d){this.a=d},
ceT:function ceT(d,e,f){this.a=d
this.b=e
this.c=f},
aSS(){var x=0,w=A.j(y.H),v,u
var $async$aSS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i7l=null
v=y.H
u=A.dN(null,v)
x=2
return A.b(u,$async$aSS)
case 2:u=A.dN(null,v)
x=3
return A.b(u,$async$aSS)
case 3:u=$.hfI
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dN(u,v),$async$aSS)
case 4:$.hfI=$.ig4=$.ig5=null
return A.h(null,w)}})
return A.i($async$aSS,w)},
fEr(d){var x=0,w=A.j(y.H),v,u
var $async$fEr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aa0){x=1
break}u=new A.bl($.bE,y.d4)
d.c=new B.fEs(new A.c3(u,y.aY))
x=3
return A.b(u.iK(0,C.ie,new B.fEt()),$async$fEr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fEr,w)},
ig2(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hWW(x):x},
hfM(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,13))
if(C.a.a_(u,"WR")){v=B.ar7(u)
x=1
break}v=B.hag(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfM,w)},
hfL(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,14))
if(C.a.a_(u,"WR")){v=B.ar8(u)
x=1
break}v=B.hag(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfL,w)},
fYb(d){var x=0,w=A.j(y.T),v
var $async$fYb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar8(d),$async$fYb)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYb,w)},
bEl(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hfL(d),$async$bEl)
case 3:q=f
if(q==null){x=1
break}t=C.W.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEl,w)},
fs_(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fs_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wg(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cg(d.aqb(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fs_,w)},
He(d,e,f){return B.iij(d,e,f)},
iij(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$He=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hfM(a1),$async$He)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.W.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a8(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b4(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hJP().aGz(D.dGe,null),$async$He)
case 4:l=d.hfI=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aA6(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bl($.bE,y.b1)
l.y=new B.fF2(f,k,new B.fF3(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8X(0,new B.Yw(r,"offer")),$async$He)
case 5:d=l
x=7
return A.b(l.amC(0),$async$He)
case 7:x=6
return A.b(d.a8P(0,a4),$async$He)
case 6:x=8
return A.b(B.fEr(l),$async$He)
case 8:x=9
return A.b(l.aqY(),$async$He)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ig2(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ar9(m,h),$async$He)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hrk(h)
case 11:v=new A.br7(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$He,w)},
fEs:function fEs(d){this.a=d},
fEt:function fEt(){},
fF3:function fF3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fF2:function fF2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fF1:function fF1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iko(d){switch(d){case"new":return D.eDv
case"checking":return D.eDw
case"connected":return D.eDy
case"completed":return D.eDx
case"failed":return D.eDA
case"disconnected":return D.eDB
case"closed":return D.aRX
case"count":return D.eDz}return D.aRX},
ikp(d){switch(d){case"new":return D.aRY
case"gathering":return D.eDC
case"complete":return D.aa0}return D.aRY},
iuG(d){switch(d){case"stable":return D.eDD
case"have-local-offer":return D.eDE
case"have-local-pranswer":return D.eDG
case"have-remote-offer":return D.eDF
case"have-remote-pranswer":return D.eDH
case"closed":return D.aS3}return D.aS3},
isP(d){switch(d){case"new":return D.aS0
case"connecting":return D.aS1
case"connected":return D.aS2
case"closed":return D.aa1
case"disconnected":return D.aS_
case"failed":return D.aRZ}return D.aa1},
aaG:function aaG(d,e){this.a=d
this.b=e},
Ps:function Ps(d,e){this.a=d
this.b=e},
Yv:function Yv(d,e){this.a=d
this.b=e},
Pr:function Pr(d,e){this.a=d
this.b=e},
FN:function FN(d,e){this.a=d
this.b=e},
csG:function csG(){},
hc1(d){var x=new B.FM()
x.a=d
x.b=!0
return x},
FM:function FM(){this.b=this.a=$},
aaF:function aaF(){},
avE:function avE(){},
Yw:function Yw(d,e){this.a=d
this.b=e},
hac(){var x=0,w=A.j(y.H)
var $async$hac=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hac,w)},
haf(d,e,f){var x=0,w=A.j(y.T),v
var $async$haf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mQ(D.n8))){v=null
x=1
break}v=B.fYs(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haf,w)},
hrk(d){var x,w=F.afY.a5D(C.dU.aN(d),null)
if(w.length===0){x=C.dU.aN(d)
return C.cV.gcu().aN(x)}return C.cV.gcu().aN(w)},
hWV(d){var x,w,v=C.cK.aN(d)
try{x=C.ca.cI(0,F.afX.bgn(v,!1))
return x}catch(w){x=C.ca.cI(0,v)
return x}},
hag(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hWV(C.a.b4(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b4(t,w.length)
try{v=C.ca.cI(0,C.cK.aN(x))
return v}catch(u){return x}}return null},
hWW(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aM(s,"\n")},
hWX(){var x,w=$.ov(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1j(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1j)
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
return A.i($async$b1j,w)},
ceC(d,e){return B.hWY(d,e)},
hWY(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ceC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cO,null),$async$ceC)
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
return A.i($async$ceC,w)},
b1m(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1j(d),$async$b1m)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1m,w)},
b1l(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hWX()
r=C.a.i(f)
t=C.dU.aN(s)
x=3
return A.b(B.ceC(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cV.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1l)
case 3:if(!h){v=null
x=1
break}v=new A.a1v("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1l,w)},
b1k(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1j(o),$async$b1k)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cI(0,C.cK.aN(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1k,w)},
ceD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ceD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bFh("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cO),$async$ceD)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ceD,w)},
b1n(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jn(),$async$b1n)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1n,w)},
ar0(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ar0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ar0)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1n(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar0,w)},
aqZ(d,e){var x=0,w=A.j(y.H)
var $async$aqZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqZ)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqZ)
case 2:return A.h(null,w)}})
return A.i($async$aqZ,w)},
a8b(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8b)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jn(),$async$a8b)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8a(s),$async$a8b)
case 5:x=6
return A.b(B.aqZ(f,u),$async$a8b)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
a8c(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8c=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8c)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jn(),$async$a8c)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
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
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aqZ(g,q),$async$a8c)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8a(u),$async$a8c)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8c,w)},
a8d(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8d)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jn(),$async$a8d)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1g(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8d)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8d)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
ceE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ceE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$ceE)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.W.aP(0,r,null)
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
return A.i($async$ceE,w)},
Jo(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceE(d),$async$Jo)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1n(t),$async$Jo)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ar_(d),$async$Jo)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1g(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ar_(d),$async$Jo)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jo,w)},
ar_(d){var x=0,w=A.j(y.H)
var $async$ar_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ar_)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ar_)
case 2:return A.h(null,w)}})
return A.i($async$ar_,w)},
b1o(){var x,w=$.ov(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8e(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hah(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ceH(d){return B.hX_(d)},
hX_(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ceH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8e(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$ceH)
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
return A.i($async$ceH,w)},
ar2(d,e){return B.hX0(d,e)},
hX0(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ar2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8e(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cO,null),$async$ar2)
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
return A.i($async$ar2,w)},
ceJ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ceJ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8e(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ar2(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ceJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ceJ,w)},
ceI(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ceI=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8e(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ar2(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ceI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ceI,w)},
ceK(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ceK=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8e(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ar2(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceK,w)},
ceL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ceL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hah(d)){v=null
x=1
break}x=3
return A.b(B.ceH(d),$async$ceL)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a8(u)
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
return A.i($async$ceL,w)},
a8l(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8l=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8l)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8l)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
return A.i($async$a8l,w)},
ar6(d){return B.hXf(d)},
hXf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ar6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$ar6)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cO,null),$async$ar6)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ar6,w)},
ar7(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ar7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ar7)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8l(),$async$ar7)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cI(0,C.cK.aN(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.ar6(s),$async$ar7)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ac(i)
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
return A.i($async$ar7,w)},
ar9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ar9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$ar9)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8l(),$async$ar9)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a1(s,r,q),r,q)
r=C.dU.aN(C.a.i(e))
q.n(0,"answer",C.cV.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.ar6(u),$async$ar9)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar9,w)},
ar8(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ar8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ar8)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8l(),$async$ar8)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cI(0,C.cK.aN(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ar8,w)},
aq_(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aq_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qm)){v=null
x=1
break}x=3
return A.b(p.lW(e),$async$aq_)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aq_)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.w0(o))
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
return A.i($async$aq_,w)},
iqZ(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
fWm(d){return B.ir0(d)},
ir0(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fWm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").Lx(d,3600),$async$fWm)
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
return A.i($async$fWm,w)},
DE(d,e,f,g,h,i){var x=null
return B.iqY(d,e,f,g,h,i)},
iqY(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DE=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hrn(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.haj(r),$async$DE)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fWm(o),$async$DE)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8f(r),$async$DE)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aVB)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MJ(A.a([],g))
x=15
return A.b(d.f9(0,A.awt("GET",A.cC(n,0,null))).dg(0,C.GV),$async$DE)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8f(r),$async$DE)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lf(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DE)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1q(r,k),$async$DE)
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
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wg(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8f(r),$async$DE)
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
aSw(d){return B.ir_(d)},
ir_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iE("media").W(0,d),$async$aSw)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSw,w)}},D,T,L,U,V,W,X,M,Y
J=c[1]
A=c[0]
C=c[2]
N=c[47]
F=c[268]
H=c[152]
O=c[238]
E=c[229]
P=c[239]
G=c[95]
Q=c[199]
R=c[153]
S=c[236]
I=c[273]
K=c[281]
B=a.updateHolder(c[22],B)
D=c[279]
T=c[198]
L=c[219]
U=c[74]
V=c[262]
W=c[80]
X=c[62]
M=c[94]
Y=c[280]
B.csH.prototype={
aGz(d,e){return this.cQK(d,e)},
cQK(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.u(0,d)
u=new q(A.kj(A.cw(t)))
t=J.k(u)
v=B.i0U(C.cV.gcu().aN(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGz,w)}}
B.b6x.prototype={
bCE(d){var x=this,w=x.w
w.onclose=A.hu(new B.csC(x))
w.onopen=A.hu(new B.csD(x))
w.onmessage=A.hu(new B.csE(x))
w.onbufferedamountlow=A.hu(new B.csF(x))},
gd6(d){return this.x},
aiR(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FM()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hc1(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aiR)
case 8:v=t.hc1(s.ap8(f,0,null))
x=1
break
case 7:case 4:v=B.hc1(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiR,w)}}
B.b6y.prototype={
bCF(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hu(new B.csI(x)))
w.addEventListener("icecandidate",A.hu(new B.csJ(x)))
w.addEventListener("iceconnectionstatechange",A.hu(new B.csK(x)))
w.onicegatheringstatechange=A.hu(new B.csL(x))
w.addEventListener("signalingstatechange",A.hu(new B.csM(x)))
if(!$.hjN())w.addEventListener("connectionstatechange",A.hu(new B.csN(x)))
w.addEventListener("negotiationneeded",A.hu(new B.csO(x)))
w.addEventListener("track",A.hu(new B.csP(x)))},
amC(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kj(A.cw(A.T(y.N,y.z)))),y.aQ),$async$amC)
case 3:t=f
v=new B.Yw(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amC,w)},
a8P(d,e){return this.brA(0,e)},
brA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8P)
case 2:return A.h(null,w)}})
return A.i($async$a8P,w)},
a8X(d,e){return this.brV(0,e)},
brV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8X)
case 2:return A.h(null,w)}})
return A.i($async$a8X,w)},
aqY(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yw(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqY,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f4(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.adv.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_r.prototype={
S(){return new B.aBj()},
gd1(){return this.c}}
B.aBj.prototype={
Y(){this.a3()
this.afn()},
afn(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1h(u.e,u.c),$async$afn)
case 2:t=e
if(v.c!=null)v.m(new B.dd4(v,t))
return A.h(null,w)}})
return A.i($async$afn,w)},
R6(){var x=0,w=A.j(y.H),v,u=this,t
var $async$R6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqW(t.e,t.c,!1),$async$R6)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.foJ)
x=1
break}x=4
return A.b(B.a89(u.a.c,"individual"),$async$R6)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7b(A.ed(new B.dd1(u),!1,null,y.H)),$async$R6)
case 5:case 1:return A.h(v,w)}})
return A.i($async$R6,w)},
JS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fCl(o),$async$JS)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8d(o.e,r,s,q),$async$JS)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.flH)
x=1
break}x=5
return A.b(B.a89(u.a.c,"member"),$async$JS)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7b(A.ed(new B.dd3(u),!1,null,y.H)),$async$JS)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JS,w)},
yI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a88(t.e,o,t.f,t.r,t.w,s),$async$yI)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a89(u.a.c,"org_owner"),$async$yI)
case 4:x=5
return A.b(B.ar0(u.a.c),$async$yI)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fCQ(o),$async$yI)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8b(s,t,o,q.c),$async$yI)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.flD)
x=1
break}x=10
return A.b(B.ar0(u.a.c),$async$yI)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7b(A.ed(new B.dd2(u),!1,null,y.H)),$async$yI)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yI,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I,q=r?C.nz:C.qq,p=B.hae(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fIS,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hl,s,s,s),C.aB,D.h1T,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cbt,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m_(new B.dd6(),s),C.P,v,C.e1,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.adZ(C.eW,C.aEr,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcjR(),s),C.af],u))
w.push(new B.adZ(C.pB,C.a5C,"Team Member","Sign in with your organization access code + password",t.gckI(),s))
w.push(C.af)
w.push(new B.adZ(C.aqr,C.a7g,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckd(),s))
return A.c4(s,q,A.bm(!0,A.ca(A.x(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,new A.Q(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adZ.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eB(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mE,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),1),A.W(C.zl,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aDY.prototype={}
B.aH8.prototype={}
B.jG.prototype={
mQ(d){var x=this.b,w=C.a.pd(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b4(x,w+1).toLowerCase())},
garF(){var x=this.d
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
bfR(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jG(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPf(d){return this.bfR(null,d)},
aGi(d){return this.bfR(d,null)}}
B.Wa.prototype={
S(){return new B.aFk(new A.cx(null,y.A))},
gd1(){return this.c}}
B.aFk.prototype={
Y(){this.a3()
this.afo()},
afo(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cf(u.a.c),$async$afo)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZR(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afo,w)},
afp(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fx(s)),$async$afp)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fpE)
case 1:return A.h(v,w)}})
return A.i($async$afp,w)},
a_N(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aq_(s.d,4),$async$a_N)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rk(r,"ngmy_my_code_"+m+".png"),$async$a_N)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_N,w)},
aji(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aji=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abj("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aji)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aji,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.nz:C.qq,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m5
else if(q.e==null)x=A.as(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.K(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a62,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.an3,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.ne,w,C.l9,new A.en(A.p(p,A.qe(p,p,!1,B.hWR(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l9,A.A(A.a([A.E(A.em(M.Dz,p,C.Wr,q.gcc6(),p),1),C.at,A.E(A.dh(C.zO,p,C.acl,q.gcc7(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.T,new A.a4(1/0,p,A.em(L.a4n,p,D.fYr,q.gczx(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,U.anC,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.We.prototype={
S(){return new B.aFn(new A.au(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aFn.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jm(x==null?"":x)
if(w!=null)this.d.sb3(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
a_O(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jm(u.d.a.a)
if(t==null){u.m(new B.e0_(u))
x=1
break}u.m(new B.e00(u))
s=u.a
r=s.c
x=3
return A.b(B.a87(s.d,new B.e01(u),t,r),$async$a_O)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e02(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_O,w)},
a33(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a33=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cu(r.a.d)){x=1
break}r.m(new B.e03(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rW(r.a.c,q),$async$a33)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e04(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj0(p,m,l,j,k),$async$a33)
case 8:o=e
if(r.c!=null)r.m(new B.e05(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e06(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e07(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a33,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aj6:D.agz,h=j?D.akR:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.ai3:C.bl
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bZv,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a62,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blu()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bz(k,k,k,C.Ox,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e08(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mo(l.a.d,4)
m=A.C(new A.N(m,new B.e09(x,new A.aIo(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ll,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a9,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.da,p,C.P,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fk9)
else q.push(A.W(C.kZ,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b0,new A.o(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,D.bGX,k,k,C.ah),1)
u=l.f?k:l.gczy()
t=i[3]
s=i[1]
q=A.l(16)
s=A.em(L.a4n,k,D.fZy,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcc8()
t=A.bo(C.aD,k,k,0,C.c,k,C.nF,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lF(new B.e0a(),A.x(A.a([e,new A.D(D.bGq,A.x(A.a([s,C.P,i,C.af,A.bI(l.f?C.tW:D.fXN,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cj,C.a0D,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blu.prototype={
p9(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hl(C.bB,v.length),C.aP)}}
B.Wb.prototype={
S(){return new B.aFl()}}
B.aFl.prototype={
Y(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b6,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.ax()
v.R$=0
v=w.e
v===$&&A.c()
v.U$=x
v.R$=0
v=w.f
v===$&&A.c()
v.U$=x
v.R$=0
w.a2()},
afq(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afq=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZS(r))
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
return A.b(B.a8c(p,m,n,o,C.a.i(l).length===0?null:l),$async$afq)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fpf)
s=[1]
x=4
break}p.L(y.q).f.T(D.fnQ)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZT(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afq,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.nz:C.qq,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fQ8,s,s,s,1,s,!0),p=A.p(s,D.byu,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Ij,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c5R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c5M,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c61,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcc9()
u=A.bo(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c4(q,r,A.ca(A.x(A.a([p,C.da,o,C.af,x,C.af,w,C.ne,A.bI(t.r?C.tW:C.aYr,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adc.prototype={}
B.byo.prototype={
a5U(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.aqb()))
x=3
return A.b(B.Sk(t,s),$async$a5U)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5U,w)},
gd1(){return this.a}}
B.Ol.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_q.prototype={
S(){return new B.aBi(new A.au(C.ax,$.ax()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aBi.prototype={
Y(){this.a3()
$.aU.x1$.push(new B.dd0(this))},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
ccf(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2v(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nz:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.at9,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.atZ,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.by0()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bz(w,w,w,C.CI,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b6E),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcZ(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eG(w,C.L,new A.cN(Q.Mf,new A.bM(new A.o(t,w,o,p,m,w,C.n),C.bi,new A.D(C.wF,A.x(A.a([l,C.aO,k,C.P,j,C.e1,i,C.e1,A.A(A.a([A.E(A.dV(C.o7,new B.dd_(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.at,A.E(new A.bM(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cJ,12)],n),K.Qz,C.n),C.bi,A.aG(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ewS,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcce(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OG,w,C.d6,w,w,w)}}
B.by0.prototype={
p9(d,e){return e.amw(e.a.toUpperCase())}}
B.Wc.prototype={
S(){return new B.aFm(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFm.prototype={
Y(){var x=this
x.a3()
x.ur()
x.w=A.dg(C.jJ,new B.e_Y(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wl()
this.a2()},
a1W(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ok(u.a.c),$async$a1W)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Be(u.a.c),$async$a1W)
case 4:u.m(new s.e_l(u,e))
u.io("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1W,w)},
ur(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ok(u.a.c),$async$ur)
case 3:t=e
x=4
return A.b(B.Be(u.a.c),$async$ur)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e_m(u,s))
if(t>0)u.io("Received "+A.w(t)+" file(s) via My Code.")
u.Oi(u.d)
B.Cf(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ur,w)},
Oi(d){return this.bGH(d)},
bGH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8h(r,u.a.c),$async$Oi)
case 8:p=f
if(u.c==null){x=1
break}new B.dZV(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mQ(D.n8))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wj(r,u.a.c),$async$Oi)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Be(u.a.c),$async$Oi)
case 12:u.m(new o.dZW(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oi,w)},
OI(d){return this.bN2(d)},
bN2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8h(d,u.a.c),$async$OI)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_0(u,d,t))
x=6
return A.b(A.fI(new A.fx(t)),$async$OI)
case 6:u.io("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fx(r.toUpperCase())),$async$OI)
case 7:u.io("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OI,w)},
io(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
us(d,e){return this.cKu(d,e)},
cKu(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$us=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e_M(r,e))
u=3
x=6
return A.b(d.$0(),$async$us)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e_N(r))
$.eY.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$us,w)},
gaY4(){var x=this.a
return x.f||x.r||x.w},
II(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$II=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaY4()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ceA(s,n,r,q,o,t),$async$II)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.io("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fPG(o,u.a.c),$async$II)
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
return A.b(B.DG(s,o,r,q,n,t),$async$II)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$II,w)},
a1_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar0(u.a.c),$async$a1_)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.io("No organization portal found.")
x=1
break}t=J.a8(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).ce(A.ed(new B.e_i(u,r,q),!1,null,y.H)),$async$a1_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1_,w)},
a25(d){return this.ct6(d)},
ct5(){return this.a25(1)},
ct6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a25=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaY4()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqY(u.a.c),$async$a25)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a25,w)},
adf(d,e,f){return this.c32(d,e,f)},
c32(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.io(e)
x=1
break}x=3
return A.b(u.us(new B.e_f(u,d,null,e,f),"Uploading\u2026"),$async$adf)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adf,w)},
bGQ(){B.hGN(!1,new B.dZZ(this))
return},
cy8(){this.m(new B.e_q(this))},
aAN(){var x=0,w=A.j(y.H),v=this
var $async$aAN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGQ()
return A.h(null,w)}})
return A.i($async$aAN,w)},
ada(){var x=0,w=A.j(y.H),v=this
var $async$ada=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_4(v),"Importing\u2026"),$async$ada)
case 2:return A.h(null,w)}})
return A.i($async$ada,w)},
T9(d){return this.cJO(d)},
cJO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mQ(D.n8)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ed(new B.e_J(u,d),!1,null,y.H)),$async$T9)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mQ(D.SA)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ed(new B.e_K(u,d),!1,null,y.H)),$async$T9)
case 8:x=1
break
case 7:x=u.c3L(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ed(new B.e_L(u,d),!1,null,y.H)),$async$T9)
case 11:x=1
break
case 10:u.io("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T9,w)},
c3L(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.pd(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cUM,C.a.b4(x,w+1).toLowerCase())},
ah0(d){return this.cjV(d)},
cjV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mQ(D.n8)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ed(new B.e_g(u,d),!1,null,y.H)),$async$ah0)
case 5:x=1
break
case 4:u.m(new B.e_h(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ah0,w)},
Sw(d){return this.cB1(d)},
cB1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.io("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$Sw)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.us(new B.e_C(u,d),"Preparing QR\u2026"),$async$Sw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sw,w)},
ajI(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_D(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_E(q),s),s.k("M.E"))
if(r.length===0){u.io("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sw(r),$async$ajI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajI,w)},
ajB(d){return this.cAz(d)},
cAz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2v(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.e_w(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajB)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T9(d)
break
case"qr":u.Sw(A.a([d],y.r))
break
case"send_my_code":u.ckx(A.a([d],y.r))
break
case"save":u.aiZ(d)
break
case"delete":u.JB(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajB,w)},
YA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_1(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_2(q),s),s.k("M.E"))
if(r.length===0){u.io("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$YA)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.us(new B.e_3(u,r),"Preparing file\u2026"),$async$YA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YA,w)},
ai5(d){return this.crq(d)},
crq(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ai5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hHP(d,!1),$async$ai5)
case 3:s=f
r=s==null
q=B.a8e(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.io("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai5,w)},
ah6(){var x=0,w=A.j(y.H),v=this,u
var $async$ah6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fXs(u,v.a.c),$async$ah6)
case 2:return A.h(null,w)}})
return A.i($async$ah6,w)},
bGP(){B.hGN(!1,new B.dZY(this,null))
return},
JR(d,e){return this.cky(d,e)},
b3D(d){return this.JR(null,d)},
ckx(d){return this.JR(d,null)},
cky(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e_j(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xO.cp().aph(!0,C.a2p,!1),$async$JR)
case 10:r=g
if(r==null||J.cu(r.a)){x=1
break}x=11
return A.b(s.us(new B.e_k(l,s,r),"Preparing\u2026"),$async$JR)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.io("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.io("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bGu(p,l,e,s.a.c),$async$JR)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.io("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JR,w)},
IY(d){return this.c2Q(d)},
c2Q(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hWQ(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3D(t),$async$IY)
case 8:x=6
break
case 7:u.io("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.io("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.us(new B.e_d(u,d),"Receiving video\u2026"),$async$IY)
case 11:x=1
break
case 10:x=12
return A.b(u.us(new B.e_e(u,d),"Receiving\u2026"),$async$IY)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IY,w)},
EP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DA()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ai5(t),$async$EP)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IY(s),$async$EP)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ed(new B.e_o(u),!1,null,y.N)),$async$EP)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ur(),$async$EP)
case 10:x=1
break
case 9:x=11
return A.b(u.IY(C.a.i(r)),$async$EP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EP,w)},
aiZ(d){return this.cwG(d)},
cwG(d){var x=0,w=A.j(y.H),v=this
var $async$aiZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_n(v,d),"Saving\u2026"),$async$aiZ)
case 2:return A.h(null,w)}})
return A.i($async$aiZ,w)},
JB(d){return this.bPn(d)},
bPn(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ls(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JB)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ceD(t),$async$JB)
case 6:case 5:s=d.a
x=7
return A.b(B.Fi(u.a.c,s),$async$JB)
case 7:u.r.W(0,s)
x=8
return A.b(u.ur(),$async$JB)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JB,w)},
ajO(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2v(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.e_I(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajO)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ah6()
break
case"import":u.ada()
break}case 1:return A.h(v,w)}})
return A.i($async$ajO,w)},
ccc(d){var x=d.c
if(C.a.a_(x,"video/")||d.mQ(D.n8))return C.qV
if(C.a.a_(x,"image/")||d.mQ(D.SA))return C.v0
if(C.a.q(x,"pdf"))return P.I_
return D.aqR},
B(d){var x,w,v=this,u=null,t=B.a2v(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.Ic,u,u,u,new B.e_T(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c_5,u,u,u,v.e?u:v.gcke(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcy7()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bUj:E.are,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a4k,u,u,u,v.e?u:v.gccd(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb4J(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c0T,u,u,u,v.e?u:new B.e_U(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m_(new B.e_V(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kr(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBf(C.ju,s,!0,t,w?u:v.gcB2(),u),1)
x.push(new A.D(D.bFb,A.lF(new B.e_W(),A.A(A.a([s,C.at,A.E(new B.aBf(C.v1,"Export",!1,t,w?u:v.gbTg(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cj,C.iB,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bg1(t,v.e?u:v.gb4J(),u)
else s=A.ks(!0,u,u,new B.e_X(v,t),s,u,D.bF3,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBf.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.t6,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cd,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t6,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.em(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.f9,t,t,t),u.r,v)}}
B.bg1.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lF(new B.dcX(),new A.D(E.a1w,A.x(A.a([A.lF(new B.dcY(),A.p(x,A.W(C.zp,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ec,C.hM,x,x,new A.bq(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e1,A.dh(C.oQ,x,D.h2c,this.d,A.bo(C.aD,x,x,x,C.c,x,C.OE,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.cj,C.Cu,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.adw.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mQ(D.n8))p=D.dv4
else{p=C.a.a_(p,"image/")||i.mQ(D.SA)
n=y.O
p=p?A.a([C.cU,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garF()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.n8))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.aw,A.d(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cg))
if(!(!o||i.mQ(D.n8)))l.push(A.h7X(C.aD,!1,j,j,j,!1,j,j,new B.ddj(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.W(C.oI,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cg))
return A.lF(new B.ddk(),new A.D(C.el,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1_,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cj,h,new A.bh("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_s.prototype={
S(){return new B.aBk()},
gd1(){return this.c}}
B.aBk.prototype={
Y(){this.a3()
this.yy()},
t(){B.hX4(this.e)
this.a2()},
yy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rW(o.c,o.d),$async$yy)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hX7(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hX6(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.ddg(s))
x=1
break}s.m(new B.ddh(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.ddi(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yy,w)},
a32(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a32=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rW(t.c,t.d),$async$a32)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fmd)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj0(q,s,t.length===0?"image/jpeg":t,null,s),$async$a32)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a32,w)},
c2J(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.z,v,new B.dde(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fV(t,C.z,v,new B.ddf(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2v(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DA,u,u,u,v.gb8v(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FQ
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.DA,u,D.fLj,v.gb8v(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c2J()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_p.prototype={
S(){return new B.aBh(A.ajX(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBh.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a3(w).k("fB<1>")).iF(new B.dcU(v))
x.gcYm().iF(new B.dcV(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a3(x).k("fB<1>"))}if(x==null)x=C.bd1
x.iF(new B.dcW(v))
v.yy()},
yy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rW(p.c,p.d),$async$yy)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcN(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4F(r,s.a.d.c)),$async$yy)
case 8:if(s.c==null){x=1
break}s.m(new B.dcO(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcP(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yy,w)},
a_P(){var x=0,w=A.j(y.H),v=this,u
var $async$a_P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a_P)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a_P)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_P,w)},
aVT(d){var x=d.a
return C.a.b0(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2v(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FQ
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bVf,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.Qz,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.dcQ(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aVT(p.w)+" / "+p.aVT(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a9,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.fiC,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.v5:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.l9,t,x,C.da,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccg(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qI,x,o),o,o,o),o,!1,!1,o,o)}}
B.QH.prototype={
S(){return new B.aBn()},
gd1(){return this.c}}
B.aBn.prototype={
Y(){this.a3()
this.Qp()},
Qp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.haf(o.c,o.d,new B.ddx(s)),$async$Qp)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddy(s))
x=1
break}s.e=r
q=N.ije(r)
if(q==null){s.m(new B.ddz(s))
x=1
break}s.d=q
q.aV(0,s.gb3r())
x=8
return A.b(q.iX(0).dg(0,C.t2),$async$Qp)
case 8:if(s.c==null){x=1
break}s.m(new B.ddA(s))
x=9
return A.b(q.qv(0),$async$Qp)
case 9:q.u0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.ddB(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qp,w)},
cit(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddC(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dz(0,x.gb3r())
w=x.d
if(w!=null)w.t()
B.it7(x.e)
x.a2()},
aft(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aft=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1p(u.c,u.d),$async$aft)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aft,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2v(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aI(t,t,t,t,C.oP,t,t,t,u.gcca(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iu(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FQ
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajo(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AK(s,t),A.az(t,A.xw(A.p(t,A.W(q?H.v5:C.he,C.c,t,t,t,48),C.f,t,t,new A.o(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.ddE(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_u.prototype={
S(){return new B.aBl(new A.cx(null,y.A))}}
B.aBl.prototype={
gcKb(){var x,w,v=this.a
if(v.e!==D.TZ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJM(){var x,w,v=this.a
if(v.e!==D.As)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcKb()
if(x!=null){v.Rx(x)
v.e=A.dg(R.GY,new B.ddt(v,x))}w=v.gcJM()
if(w!=null){v.Rw(w)
v.f=A.dg(C.fL,new B.ddu(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rw(d){return this.cpD(d)},
cpD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ar5(d),$async$Rw)
case 3:t=f
x=4
return A.b(B.ceW(d),$async$Rw)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.ddl(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rw,w)},
Rx(d){return this.cpE(d)},
cpE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fYb(d),$async$Rx)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEl(t),$async$Rx)
case 4:if(u.c==null){x=1
break}u.m(new B.ddm(u))
u.c.L(y.q).f.T(D.aVa)
case 1:return A.h(v,w)}})
return A.i($async$Rx,w)},
gc81(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccb(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2P(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DA()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fpp)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ed(new B.ddn(),!1,null,y.N)),$async$a2P)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEl(s),$async$a2P)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aVa)
case 1:return A.h(v,w)}})
return A.i($async$a2P,w)},
ab3(d){return this.bN3(d)},
bN3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fx(C.d.aM(t,", "))),$async$ab3)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ab3,w)},
afr(d){return this.bMM(d)},
bMM(d){var x=0,w=A.j(y.H),v=this
var $async$afr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fx(v.a.c)),$async$afr)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fmH)
return A.h(null,w)}})
return A.i($async$afr,w)},
a2J(d){return this.cwI(d)},
cwI(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aq_(s.d,4),$async$a2J)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rk(r,"ngmy_doc_share_qr.png"),$async$a2J)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2J,w)},
gaZk(){var x,w=this.a
if(w.e!==D.Jr)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b4(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b4(x,13))
return null},
ab0(d){return this.bMX(d)},
bMX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZk()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$ab0)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fon)
case 1:return A.h(v,w)}})
return A.i($async$ab0,w)},
afs(){var x=0,w=A.j(y.H),v=this,u
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wl(),$async$afs)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afs,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2v(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jr&&i!==D.TZ&&i!==D.As
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jr||t===D.TZ||t===D.As?l:A.aI(l,l,l,l,C.lq,l,l,l,m.gb1o(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qe(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc81(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jr){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lN,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccb(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c4U,D.fUX,new B.ddo(m,d),l)],p))}if(m.a.e===D.Jr&&m.gaZk()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a9,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c1e,D.fRx,new B.ddp(m,d),l)],p))
if(m.a.e===D.As){x=(m.w?C.dJ:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FT:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lN,l,l,l)],p))}if(m.a.e===D.TZ){x=(m.r?C.dJ:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FT:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lN,l,l,l),C.af,A.dh(D.bXI,l,D.fY6,m.gcx4(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b8,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.em(M.Dz,l,C.Wr,new B.ddq(m,d),l),1),C.at,A.E(A.dh(C.zO,l,C.acl,new B.ddr(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a4(1/0,l,A.bI(C.B7,l,m.gb1o(),A.bo(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dds(),y.C)}}
B.adu.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.p(x,A.qe(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bI(C.B8,x,new B.dcM(d),x)],u),x,x,C.np,v,x,x,x,x,D.fKi,x)}}
B.a_o.prototype={
S(){return new B.aBg(A.zT(C.yH,C.oe,C.vi))}}
B.aBg.prototype={
t(){this.d.t()
this.a2()},
azm(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c4(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fS4,x,x,x,1,x,!0),C.w,A.zS(this.d,C.c1,this.gazl()),x,!1,!1,x,x)}}
B.a_v.prototype={
S(){return new B.aBm(A.zT(C.yH,C.oe,C.vi))},
gd1(){return this.c}}
B.aBm.prototype={
c3N(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aht(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aht=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MP("text/plain"),$async$aht)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fpj)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aht,w)},
abS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hHP(p,!0),$async$abS)
case 3:t=e
p=t==null
s=B.a8e(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.flO)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$abS,w)},
t(){this.d.t()
this.a2()},
azm(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3N(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.ase,v,v,v,w.gbSK(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4r,v,v,v,w.gcn_(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.uX:O.PN,v,v,v,v,v),v,v,v,new B.ddw(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fZ2,v,v,v,1,v,!0)
u=A.zS(w.d,C.c1,w.gazl())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eDa],s),v),v,!1,!1,v,v)}}
B.bg2.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pr
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pr:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1C,A.A(A.a([u,C.bb,A.E(A.x(t,C.E,r,C.e,C.h,0,C.p),1),A.W(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaG.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Ps.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yv.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pr.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FN.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.csG.prototype={}
B.FM.prototype={}
B.aaF.prototype={}
B.avE.prototype={}
B.Yw.prototype={}
var z=a.updateTypes(["aB<~>()","R(jG)","n(jG)","Wc(Z)","~()","a_r(Z)","H(H,jG)","QH(Z)","~(mm)","cv(FM)","aB<jG?>(@)","Wa(Z)","We(Z)","D(jG)","jG(@)","a9<n,@>(jG)","a_q(Z)","Wb(Z)","a_s(Z)","a_p(Z)","a_u(Z)","adu(Z)","ai<jG>()","a_v(Z)","adw(Z,H)","a_o(Z)","a9<n,aF>(jG)","cv(Yv)","cv(aaF)","aB<cv>(FM)"])
B.csC.prototype={
$1(d){var x=this.a
x.x=D.aRW
x.y.I(0,D.aRW)},
$S:74}
B.csD.prototype={
$1(d){var x=this.a
x.x=D.aRV
x.y.I(0,D.aRV)},
$S:74}
B.csE.prototype={
$1(d){var x=this.a
x.aiR(A.ahM(d.data)).bG(new B.csB(x),y.b)},
$S:74}
B.csB.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csF.prototype={
$1(d){},
$S:74}
B.csI.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i0T(d.channel))},
$S:17}
B.csJ.prototype={
$1(d){},
$S:17}
B.csK.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iko(w.iceConnectionState)
x.cx=w
if($.hjN())switch(w.a){case 0:x.cy=D.aS0
break
case 1:x.cy=D.aS1
break
case 3:x.cy=D.aS2
break
case 5:x.cy=D.aRZ
break
case 6:x.cy=D.aS_
break
case 7:x.cy=D.aa1
break
default:break}},
$S:108}
B.csL.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ikp(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.csM.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iuG(w.signalingState)},
$S:108}
B.csN.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.isP(w.connectionState)},
$S:108}
B.csO.prototype={
$1(d){},
$S:108}
B.csP.prototype={
$1(d){},
$S:17}
B.fxN.prototype={
$1(d){var x=y.F.a(new A.qu([],[]).o4(d.target.result,!1)),w=C.ww.q(x.objectStoreNames,"blobs")
if(!w)C.wt.Gl(x,"blobs")},
$S:173}
B.fXg.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x4.fs(this.b)
$.eY.mJ()
this.c.$1(d)},
$S:448}
B.fXi.prototype={
$1(d){return this.a.$1(B.ia2(this.b,this.c))},
$S:29}
B.fXh.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:29}
B.fXf.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fXv.prototype={
$1(d){var x=this
return B.hwi(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fXw.prototype={
$1(d){var x=this
return B.hwi(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fAr.prototype={
$1(d){var x=this
return B.cex(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dd4.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dd1.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cex(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dd3.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cex(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dd2.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cex(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dd6.prototype={
$4(d,e,f,g){var x=null
return A.k2(A.A(A.a([A.aI(x,x,x,x,D.bWk,x,x,x,new B.dd5(d),x,x,x,x,x,x),A.E(A.Fy(D.Sk,!0,x,!1,C.a3u,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Sk,x,g,C.anT,0,e,f)},
$C:"$4",
$R:4,
$S:418}
B.dd5.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCo.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.p(v,D.byO,C.f,v,v,D.b8i,v,v,v,v,D.anI,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c_H,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.CK,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fCm(d),v),1),C.at,A.E(A.bI(D.fQw,v,new B.fCn(p,x,d),A.bo(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.H0,v,v,v,v),v)},
$S:61}
B.fCm.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCn.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fmY)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aDY(v,x))},
$S:0}
B.fCS.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.byE,C.f,w,w,D.b9N,w,w,w,w,D.anI,w,w,1/0),new A.D(C.CK,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hfw(u,"Organization name",C.Hz,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hfw(u,"Access code",C.mj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hfw(u,"Member password",C.Dy,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bI(D.fZ9,w,new B.fCR(r,q,p,d),A.bo(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.H0,w,w,w,w),w)},
$S:61}
B.fCR.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fn2)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aH8(u,x,w))},
$S:0}
B.ceo.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a8(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a_(j,"http")?A.cC(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vR(p,null).dg(0,C.a0C),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cg(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ceu.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cev.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cew.prototype={
$1(d){return d.b},
$S:z+2}
B.ceq.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cer.prototype={
$1(d){return d.b},
$S:z+2}
B.cep.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ces.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cet.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fXt.prototype={
$1(d){return new B.Wa(this.a,null)},
$S:z+11}
B.fXu.prototype={
$1(d){return new B.We(this.a,this.b,this.c,null)},
$S:z+12}
B.dZR.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0_.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e00.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e01.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_Z(x,d))},
$S:2}
B.e_Z.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e02.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e03.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e04.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e05.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e06.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e07.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0a.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.e08.prototype={
$1(d){var x=this.a
return x.f?null:x.a_O()},
$S:2}
B.e09.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mQ(D.SA))s=C.v0
else s=C.a.a_(s,"video/")||d.mQ(D.n8)?C.qV:D.aqR
x=this.b.a
w=y.p
return new A.D(C.kz,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garF(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.dZS.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZT.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cey.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:99}
B.cez.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:99}
B.fYu.prototype={
$2(d,e){return e===this.a},
$S:317}
B.fuS.prototype={
$1(d){return J.k(d)},
$S:16}
B.fAD.prototype={
$1(d){var x=this.b
B.i82(C.Hm.ga7w(this.a)).bG(x.gC8(x),y.H)},
$S:131}
B.fAE.prototype={
$1(d){return this.a.dd(0,null)},
$S:131}
B.fAF.prototype={
$0(){return null},
$S:11}
B.ceN.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAG.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
return new B.jG(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fEQ.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fyR.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyS.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceS.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n8)},
$S:z+1}
B.h1K.prototype={
$1(d){return new B.a_q(this.a,null)},
$S:z+16}
B.dd0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dcZ.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.dd_.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e_Y.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1W()},
$S:12}
B.e_l.prototype={
$0(){var x=J.bHy(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_m.prototype={
$0(){var x=J.bHy(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZV.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.dZU(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGi(this.c)}},
$S:0}
B.dZU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZW.prototype={
$0(){var x=J.bHy(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_0.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e__(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGi(this.c)}},
$S:0}
B.e__.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_M.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e_N.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e_i.prototype={
$1(d){return new B.Wb(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e_f.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.II(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wf(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ur(),$async$$0)
case 5:s=J.a8(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a25(s.gJ(t)),$async$$0)
case 8:case 7:r.io(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZZ.prototype={
$1(d){this.a.adf(d,"No files selected.","Added")},
$S:448}
B.e_q.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_p(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_p.prototype={
$1(d){return d.a},
$S:z+2}
B.e_4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xO.cp().d_k(C.a2p,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
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
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.io("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.io("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ar4(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cu(l)){o.io("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ur(),$async$$0)
case 9:o.io("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e_J.prototype={
$1(d){return new B.QH(this.a.a.c,this.b,null)},
$S:z+7}
B.e_K.prototype={
$1(d){return new B.a_s(this.a.a.c,this.b,null)},
$S:z+18}
B.e_L.prototype={
$1(d){return new B.a_p(this.a.a.c,this.b,null)},
$S:z+19}
B.e_g.prototype={
$1(d){return new B.QH(this.a.a.c,this.b,null)},
$S:z+7}
B.e_h.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_C.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.II(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8g(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.io("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ct5(),$async$$0)
case 5:x=6
return A.b(p.ur(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_y(p),r),new B.e_z(),r.k("N<ak.E,n>")).c_(0,new B.e_A())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ed(new B.e_B(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.py(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wl(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_y.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e_x(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_x.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_z.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_A.prototype={
$1(d){return d.length!==0},
$S:3}
B.e_B.prototype={
$1(d){var x=this.a
return new B.a_u(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_D.prototype={
$1(d){return d.a},
$S:z+2}
B.e_E.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_w.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.ky,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garF(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mQ(D.n8)?C.tm:C.nP
p=!x||p.mQ(D.n8)?"Play video":"View"
return new A.bM(new A.o(s,v,new A.bF(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ld,v,v,C.n),C.bi,A.bm(!0,new A.D(C.CG,A.x(A.a([q,o,t,C.aB,B.a_t(!1,u,!1,w,p,new B.e_r(d),v),B.a_t(!1,u,!1,C.ju,"Share via QR",new B.e_s(d),"Letters/numbers QR code"),B.a_t(!1,u,!1,D.a3z,"Send to their Code",new B.e_t(d),"Enter someone else's personal code"),B.a_t(!1,u,!1,C.hP,"Download / save",new B.e_u(d),v),C.am,B.a_t(!1,u,!0,C.ej,"Delete",new B.e_v(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:727}
B.e_r.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e_s.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e_t.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e_u.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e_v.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_1.prototype={
$1(d){return d.a},
$S:z+2}
B.e_2.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8i(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hg(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.py(s.c,s.f),$async$$0)
case 4:u.io(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZY.prototype={
$1(d){var x=this.a
x.us(new B.dZX(x,d,this.b),"Preparing\u2026")},
$S:448}
B.dZX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.io("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wf(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cu(s)){t.io("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGu(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.io("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_j.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e_k.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hai(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_d.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.He(new B.e_9(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.io("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e_a(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e_b(s))
case 5:x=8
return A.b(r.b.iK(0,C.GV,new B.e_c()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.io("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ur(),$async$$0)
case 9:s.io("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_9.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_6(x,d,e))},
$S:233}
B.e_6.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_a.prototype={
$1(d){return new B.adu(this.a.a,null)},
$S:z+21}
B.e_b.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e_c.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e_e.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jm(o)!=null?3:4
break
case 3:x=5
return A.b(B.a86(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3D(B.Jm(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ar4(new B.e_7(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cu(r)){if(B.hah(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.io(q)
x=1
break}x=10
return A.b(s.ur(),$async$$0)
case 10:o=J.cD(r)
p=o.eO(r,new B.e_8()).gJ(0)
s.io(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_7.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_5(x,d,e))},
$S:233}
B.e_5.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_8.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n8)},
$S:z+1}
B.e_o.prototype={
$1(d){return new B.a_v(this.a.a.c,null)},
$S:z+23}
B.e_n.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1p(u.a.c,v.b),$async$$0)
case 2:t.io(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_I.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bM(new A.o(v[2],x,new A.bF(new A.ay(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ld,x,x,C.n),C.bi,A.bm(!0,new A.D(C.CG,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.ky,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_t(!0,w,!1,C.mj,"My Code",new B.e_F(d),"Your personal code & QR \u2014 others send docs to you"),B.a_t(!1,w,!1,D.a3z,"Send to their Code",new B.e_G(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_t(!1,w,!1,S.zG,"Import backup",new B.e_H(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:727}
B.e_F.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e_G.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bGP()},
$S:0}
B.e_H.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e_V.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jw(D.Sk,x,C.a3u,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.Sk).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:704}
B.e_T.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e_U.prototype={
$0(){this.a.ajO()
return null},
$S:0}
B.e_W.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*10)),e)},
$S:102}
B.e_X.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adw(e,w,v,this.b,x.e,x.ccc(w),new B.e_P(x,w),new B.e_Q(x,v,w),new B.e_R(x,w),new B.e_S(x,w),null)},
$S:z+24}
B.e_P.prototype={
$0(){this.a.ah0(this.b)
return null},
$S:0}
B.e_Q.prototype={
$0(){var x=this.a
return x.m(new B.e_O(x,this.b,this.c))},
$S:0}
B.e_O.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_R.prototype={
$0(){this.a.OI(this.b)
return null},
$S:0}
B.e_S.prototype={
$0(){this.a.ajB(this.b)
return null},
$S:0}
B.dcX.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*18)),e)},
$S:102}
B.dcY.prototype={
$3(d,e,f){return A.e3(C.z,f,e,null,null)},
$S:114}
B.ddk.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:102}
B.ddj.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.ddg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.ddh.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.ddi.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dde.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fV(w,C.z,x,new B.ddc(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.ddd(this.a))
return C.bM},
$S:143}
B.ddc.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dda(this.a))
return C.bM},
$S:193}
B.dda.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd7(x))},
$S:7}
B.dd7.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddd.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd9(x))},
$S:7}
B.dd9.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddf.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddb(this.a))
return C.bM},
$S:193}
B.ddb.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd8(x))},
$S:7}
B.dd8.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcU.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcT(x,d))},
$S:1769}
B.dcT.prototype={
$0(){return this.a.f=this.b===C.vF},
$S:0}
B.dcV.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcS(x,d))},
$S:7}
B.dcS.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcW.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcR(x,d))},
$S:7}
B.dcR.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcN.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcO.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcP.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcQ.prototype={
$1(d){return this.a.d.ND(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.ddx.prototype={
$0(){var x=this.a.a
return B.rW(x.c,x.d)},
$S:1770}
B.ddy.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddz.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.ddA.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddB.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddC.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.ddE.prototype={
$0(){var x=this.a
x.m(new B.ddD(x))},
$S:0}
B.ddD.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.ddt.prototype={
$1(d){return this.a.Rx(this.b)},
$S:12}
B.ddu.prototype={
$1(d){return this.a.Rw(this.b)},
$S:12}
B.ddl.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.ddm.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddn.prototype={
$1(d){return D.hzN},
$S:z+25}
B.dds.prototype={
$2(d,e){if(d)B.Wl()},
$S:128}
B.ddo.prototype={
$0(){return this.a.ab3(this.b)},
$S:0}
B.ddp.prototype={
$0(){return this.a.ab0(this.b)},
$S:0}
B.ddq.prototype={
$0(){return this.a.afr(this.b)},
$S:0}
B.ddr.prototype={
$0(){return this.a.a2J(this.b)},
$S:0}
B.dcM.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.ddw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.ddv(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddv.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceU.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n8)},
$S:z+1}
B.ceV.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceT.prototype={
$2(d,e){return this.bno(d,e)},
bno(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wm(u.c,A.J(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1771}
B.fEs.prototype={
$1(d){if(d===D.aa0&&(this.a.a.a&30)===0)this.a.h0(0)},
$S:z+27}
B.fEt.prototype={
$0(){},
$S:11}
B.fF3.prototype={
boZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fs_(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hrn(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boZ(d,e)},
$S:551}
B.fF2.prototype={
$1(d){var x=this
d.b=new B.fF1(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fF1.prototype={
$1(d){return this.boY(d)},
boY(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1q(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.W.aP(0,n,null)
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
return A.b(B.fs_(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.ac(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8f(m),$async$$1)
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
x(v=B.aBj.prototype,"gcjR","R6",0)
x(v,"gckI","JS",0)
x(v,"gckd","yI",0)
x(v=B.aFk.prototype,"gcc6","afp",0)
x(v,"gcc7","a_N",0)
x(v,"gczx","aji",0)
x(v=B.aFn.prototype,"gcc8","a_O",0)
x(v,"gczy","a33",0)
x(B.aFl.prototype,"gcc9","afq",0)
x(B.aBi.prototype,"gcce","ccf",4)
x(v=B.aFm.prototype,"gcke","a1_",0)
x(v,"gcy7","cy8",4)
x(v,"gb4J","aAN",0)
x(v,"gcB2","ajI",0)
x(v,"gbTg","YA",0)
x(v,"gccd","EP",0)
x(B.aBk.prototype,"gb8v","a32",0)
x(B.aBh.prototype,"gccg","a_P",0)
x(v=B.aBn.prototype,"gb3r","cit",4)
x(v,"gcca","aft",0)
x(v=B.aBl.prototype,"gcx4","a2P",0)
x(v,"gb1o","afs",0)
w(B.aBg.prototype,"gazl","azm",8)
x(v=B.aBm.prototype,"gcn_","aht",0)
x(v,"gbSK","abS",0)
w(v,"gazl","azm",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.csG,B.aaF,B.avE,B.aDY,B.aH8,B.jG,B.adc,B.byo,B.FM,B.Yw])
w(B.csH,B.csG)
w(B.b6x,B.aaF)
x(A.hq,[B.csC,B.csD,B.csE,B.csB,B.csF,B.csI,B.csJ,B.csK,B.csL,B.csM,B.csN,B.csO,B.csP,B.fxN,B.fXg,B.fXi,B.fXh,B.fXv,B.fXw,B.fAr,B.dd1,B.dd3,B.dd2,B.dd6,B.fCo,B.fCS,B.ceo,B.cev,B.cew,B.cer,B.cep,B.ces,B.cet,B.fXt,B.fXu,B.e01,B.e0a,B.e08,B.e09,B.fuS,B.fAD,B.fAE,B.ceN,B.fAG,B.fEQ,B.fyR,B.fyS,B.ceS,B.h1K,B.dd0,B.dcZ,B.e_Y,B.dZU,B.e__,B.e_i,B.dZZ,B.e_p,B.e_J,B.e_K,B.e_L,B.e_g,B.e_y,B.e_x,B.e_z,B.e_A,B.e_B,B.e_D,B.e_E,B.e_w,B.e_1,B.e_2,B.dZY,B.e_j,B.e_a,B.e_8,B.e_o,B.e_I,B.e_V,B.e_W,B.dcX,B.dcY,B.ddk,B.ddj,B.dde,B.ddc,B.dda,B.ddd,B.ddf,B.ddb,B.dcU,B.dcV,B.dcW,B.dcQ,B.ddt,B.ddu,B.ddn,B.ceU,B.ceV,B.fEs,B.fF2,B.fF1])
w(B.b6y,B.avE)
x(A.iO,[B.fXf,B.dd4,B.dd5,B.fCm,B.fCn,B.fCR,B.dZR,B.e0_,B.e00,B.e_Z,B.e02,B.e03,B.e04,B.e05,B.e06,B.e07,B.dZS,B.dZT,B.fAF,B.dd_,B.e_l,B.e_m,B.dZV,B.dZW,B.e_0,B.e_M,B.e_N,B.e_f,B.e_q,B.e_4,B.e_h,B.e_C,B.e_r,B.e_s,B.e_t,B.e_u,B.e_v,B.e_3,B.dZX,B.e_k,B.e_d,B.e_6,B.e_b,B.e_c,B.e_e,B.e_5,B.e_n,B.e_F,B.e_G,B.e_H,B.e_T,B.e_U,B.e_P,B.e_Q,B.e_O,B.e_R,B.e_S,B.ddg,B.ddh,B.ddi,B.dd7,B.dd9,B.dd8,B.dcT,B.dcS,B.dcR,B.dcN,B.dcO,B.dcP,B.ddx,B.ddy,B.ddz,B.ddA,B.ddB,B.ddC,B.ddE,B.ddD,B.ddl,B.ddm,B.ddo,B.ddp,B.ddq,B.ddr,B.dcM,B.ddw,B.ddv,B.fEt])
x(A.l3,[B.adv,B.Ol,B.aaG,B.Ps,B.Yv,B.Pr,B.FN])
x(A.af,[B.a_r,B.Wa,B.We,B.Wb,B.a_q,B.Wc,B.a_s,B.a_p,B.QH,B.a_u,B.a_o,B.a_v])
x(A.ah,[B.aBj,B.aFk,B.aFn,B.aFl,B.aBi,B.aFm,B.aBk,B.aBh,B.aBn,B.aBl,B.aBg,B.aBm])
x(A.aw,[B.adZ,B.aBf,B.bg1,B.adw,B.adu,B.bg2])
x(A.jA,[B.ceu,B.ceq,B.cey,B.cez,B.fYu,B.e_9,B.e_7,B.e_X,B.dds,B.ceT,B.fF3])
x(A.j5,[B.blu,B.by0])})()
A.j6(b.typeUniverse,JSON.parse('{"b6x":{"aaF":[]},"b6y":{"avE":[]},"a_r":{"af":[],"v":[]},"aBj":{"ah":["a_r"]},"adZ":{"aw":[],"v":[]},"Wa":{"af":[],"v":[]},"We":{"af":[],"v":[]},"aFk":{"ah":["Wa"]},"aFn":{"ah":["We"]},"blu":{"j5":[]},"Wb":{"af":[],"v":[]},"aFl":{"ah":["Wb"]},"a_q":{"af":[],"v":[]},"Wc":{"af":[],"v":[]},"adw":{"aw":[],"v":[]},"a_s":{"af":[],"v":[]},"a_p":{"af":[],"v":[]},"QH":{"af":[],"v":[]},"a_u":{"af":[],"v":[]},"adu":{"aw":[],"v":[]},"a_o":{"af":[],"v":[]},"a_v":{"af":[],"v":[]},"aBi":{"ah":["a_q"]},"by0":{"j5":[]},"aFm":{"ah":["Wc"]},"aBf":{"aw":[],"v":[]},"bg1":{"aw":[],"v":[]},"aBk":{"ah":["a_s"]},"aBh":{"ah":["a_p"]},"aBn":{"ah":["QH"]},"aBl":{"ah":["a_u"]},"aBg":{"ah":["a_o"]},"aBm":{"ah":["a_v"]},"bg2":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uN"),k:x("MN()"),o:x("bs<n,n>"),F:x("rv"),g:x("aB<jG?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bk>"),Y:x("O<a9<n,R>>"),t:x("O<a9<n,@>>"),r:x("O<jG>"),w:x("O<+file,name(lU,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j5>"),a:x("O<dJ>"),p:x("O<v>"),Z:x("O<H>"),G:x("bk"),A:x("cx<ah<af>>"),n:x("ai<jG>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bA<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iw"),e:x("iyK"),af:x("EZ"),U:x("jG"),b:x("cv"),C:x("aF"),aK:x("wF"),ab:x("FM"),br:x("avE"),v:x("Yw"),N:x("n"),X:x("bq<G>"),Q:x("m6"),D:x("dJ"),aw:x("bh<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jG>>"),aW:x("c3<dJ?>"),aY:x("c3<~>"),cx:x("adv"),b1:x("bl<ai<jG>>"),cf:x("bl<dJ?>"),d4:x("bl<~>"),c4:x("aDY"),bG:x("aH8"),q:x("mb"),B:x("pR<FM>"),c6:x("pR<aaG>"),y:x("R"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jG>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jG?"),R:x("aF?"),c:x("Yw?"),d:x("+answerQr,transfer(n,aB<ai<jG>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Ol,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dJ?"),cm:x("adc?"),bk:x("aDY?"),ag:x("aH8?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b6E=new A.ay(C.aD,2,C.r,-1)
D.c9x=new A.a7(C.a5,C.a8,C.x,C.a5C,null,null)
D.b8i=new A.o(null,null,null,C.mJ,null,D.c9x,C.n)
D.b9N=new A.o(null,null,null,C.mJ,null,E.Ij,C.n)
D.agz=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ai3=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aj6=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.akR=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fLb=new A.B("Your team portal",null,C.dk,null,null,null,null,null,null,null,null,null)
D.h_6=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.F5,null,null,null,null,null,null,null,null,null)
D.dlZ=x([D.fLb,C.am,D.h_6],y.p)
D.byu=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dlZ,null)
D.h3B=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fPI=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.F5,null,null,null,null,null,null,null,null,null)
D.dDg=x([D.h3B,C.am,D.fPI],y.p)
D.byE=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dDg,null)
D.h_K=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fTG=new A.B("Enter the access code and password from your organization.",null,G.F5,null,null,null,null,null,null,null,null,null)
D.dB_=x([D.h_K,C.am,D.fTG],y.p)
D.byO=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dB_,null)
D.bF3=new A.Q(16,10,16,28)
D.bFb=new A.Q(16,14,16,4)
D.bGq=new A.Q(20,0,20,16)
D.bGX=new A.Q(20,8,20,16)
D.anI=new A.Q(24,22,24,20)
D.a3z=new A.a_(63394,"MaterialIcons",!1)
D.aqR=new A.a_(63515,"MaterialIcons",!1)
D.bUj=new A.a_(983813,"MaterialIcons",!1)
D.bRr=new A.a_(62867,"MaterialIcons",!1)
D.bVf=new A.ae(D.bRr,44,C.c,null,null,null)
D.bWk=new A.ae(C.ka,null,C.ab,null,null,null)
D.bXI=new A.ae(C.jv,18,null,null,null,null)
D.bZv=new A.ae(D.a3z,26,C.c,null,null,null)
D.c_5=new A.ae(C.Dn,null,null,null,null,null)
D.c_H=new A.ae(C.Dv,null,null,null,null,null)
D.c0T=new A.ae(W.a3K,null,null,null,null,null)
D.c1e=new A.ae(C.hR,16,null,null,null,null)
D.c4U=new A.ae(C.tl,16,null,null,null,null)
D.bVx=new A.ae(C.mj,null,null,null,null,null)
D.c5M=new A.e7(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c0e=new A.ae(C.Hz,null,null,null,null,null)
D.c5R=new A.e7(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c0e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVS=new A.ae(C.Dy,null,null,null,null,null)
D.c61=new A.e7(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cVn=x([C.fq,C.b2,C.aD],y.O)
D.cbt=new A.a7(C.ay,C.aC,C.x,D.cVn,null,null)
D.cUM=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Sk=x([C.fq,C.aD],y.O)
D.SA=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n8=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dv4=x([C.mR,C.aD],y.O)
D.epp={iceServers:0}
D.aMr={urls:0}
D.dGX=new A.bs(D.aMr,["stun:stun.l.google.com:19302"],y.o)
D.dGW=new A.bs(D.aMr,["stun:stun1.l.google.com:19302"],y.o)
D.dbn=x([D.dGX,D.dGW],A.at("O<a9<n,n>>"))
D.dGe=new A.bs(D.epp,[D.dbn],A.at("bs<n,@>"))
D.Jr=new B.Ol(0,"lanDirect")
D.TY=new B.Ol(1,"cloudStash")
D.dTS=new B.Ol(2,"inlineInstant")
D.TZ=new B.Ol(3,"webrtcLink")
D.As=new B.Ol(4,"videoCloud")
D.h_5=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cKx=x([E.asD,C.ae,D.h_5],y.p)
D.fdw=new A.c7(C.aL,C.b8,C.h,C.l,null,C.p,null,0,D.cKx,null)
D.ewS=new A.D(C.co,D.fdw,null)
D.fBx=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IP,null,null,null)
D.fLL=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fBx,null,C.K,null,null,null,null,null,null,null)
D.ew3=new A.D(C.CN,D.fLL,null)
D.bem=new A.cj(C.z,null,null,D.ew3,null)
D.eDa=new A.cK(0,null,0,28,null,null,D.bem,null)
D.eDu=new B.aaG(0,"RTCDataChannelConnecting")
D.aRV=new B.aaG(1,"RTCDataChannelOpen")
D.aRW=new B.aaG(3,"RTCDataChannelClosed")
D.eDv=new B.FN(0,"RTCIceConnectionStateNew")
D.eDw=new B.FN(1,"RTCIceConnectionStateChecking")
D.eDx=new B.FN(2,"RTCIceConnectionStateCompleted")
D.eDy=new B.FN(3,"RTCIceConnectionStateConnected")
D.eDz=new B.FN(4,"RTCIceConnectionStateCount")
D.eDA=new B.FN(5,"RTCIceConnectionStateFailed")
D.eDB=new B.FN(6,"RTCIceConnectionStateDisconnected")
D.aRX=new B.FN(7,"RTCIceConnectionStateClosed")
D.aRY=new B.Yv(0,"RTCIceGatheringStateNew")
D.eDC=new B.Yv(1,"RTCIceGatheringStateGathering")
D.aa0=new B.Yv(2,"RTCIceGatheringStateComplete")
D.aa1=new B.Pr(0,"RTCPeerConnectionStateClosed")
D.aRZ=new B.Pr(1,"RTCPeerConnectionStateFailed")
D.aS_=new B.Pr(2,"RTCPeerConnectionStateDisconnected")
D.aS0=new B.Pr(3,"RTCPeerConnectionStateNew")
D.aS1=new B.Pr(4,"RTCPeerConnectionStateConnecting")
D.aS2=new B.Pr(5,"RTCPeerConnectionStateConnected")
D.eDD=new B.Ps(0,"RTCSignalingStateStable")
D.eDE=new B.Ps(1,"RTCSignalingStateHaveLocalOffer")
D.eDF=new B.Ps(2,"RTCSignalingStateHaveRemoteOffer")
D.eDG=new B.Ps(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eDH=new B.Ps(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aS3=new B.Ps(5,"RTCSignalingStateClosed")
D.fiC=new A.av(160,48)
D.bfB=new A.fn(2,null,null,null,null,C.aD,null,null,null,null)
D.fk9=new A.a4(16,16,D.bfB,null)
D.fP2=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.flD=new A.b0(D.fP2,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWK=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.flH=new A.b0(D.fWK,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4E=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.flO=new A.b0(D.h4E,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOD=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fmd=new A.b0(D.fOD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_V=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVa=new A.b0(D.h_V,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1n=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fmH=new A.b0(D.h1n,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h67=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fmY=new A.b0(D.h67,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h43=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new A.b0(D.h43,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5i=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fnQ=new A.b0(D.h5i,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNd=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fon=new A.b0(D.fNd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYF=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.foJ=new A.b0(D.fYF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRm=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fpf=new A.b0(D.fRm,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6c=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fpj=new A.b0(D.h6c,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNt=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.b0(D.fNt,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fM8=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fpE=new A.b0(D.fM8,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fIS=new A.B("NGMY DOC SHARE",null,C.aWA,null,null,null,null,null,null,null,null,null)
D.fKi=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fLj=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fQ8=new A.B("Organization settings",null,C.cF,null,null,null,null,null,null,null,null,null)
D.fQw=new A.B("Sign in",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fRx=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fS4=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fUX=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fXN=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.fY6=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fYr=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fZ2=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZ9=new A.B("Create portal",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fZy=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.f9,null,null,null,null,null,null,null,null,null)
D.h1T=new A.B("Share files & videos\nwith a scan.",null,C.aWD,null,null,null,null,null,null,null,null,null)
D.h2c=new A.B("Add files",null,C.cd,null,null,null,null,null,null,null,null,null)
D.hzN=new B.a_o(null)
D.adm=new B.adv(0,"docShare")
D.adn=new B.adv(1,"gate")
D.X5=new B.adv(2,"gateNoIndividual")})();(function staticFields(){$.aPW=null
$.fpz=function(){var x=y.N
return A.T(x,x)}()
$.H2=A.T(y.N,y.D)
$.ahz=A.T(y.N,A.at("lU"))
$.S4=A.T(y.N,y.D)
$.fqf=A.T(y.N,A.at("adc"))
$.ceM=A.T(y.S,A.at("byo"))
$.hrm=1
$.ig5=null
$.ig4=null
$.i7l=null
$.hfI=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ize","hJP",()=>new B.csH())
x($,"ix8","hjN",()=>C.a.q(A.bB(A.bB(A.bB(A.HC(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["dehEqJohcynEZSoUyKkGDn/EiZA="]=a.current})($__dart_deferred_initializers__);