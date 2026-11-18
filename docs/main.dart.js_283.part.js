((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,P,E,G,Q,R,S,I,K,B={ct0:function ct0(){},
i1x(d){var x=null,w=new B.b6L(d,D.eE5,new A.pV(x,x,y.c6),new A.pV(x,x,y.B))
w.bCM(d)
return w},
b6L:function b6L(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
csW:function csW(d){this.a=d},
csX:function csX(d){this.a=d},
csY:function csY(d){this.a=d},
csV:function csV(d){this.a=d},
csZ:function csZ(d){this.a=d},
i1y(d,e){var x=y.N
x=new B.b6M(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCN(d,e)
return x},
b6M:function b6M(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ct1:function ct1(d){this.a=d},
ct2:function ct2(d){this.a=d},
ct3:function ct3(d){this.a=d},
ct4:function ct4(d){this.a=d},
ct5:function ct5(d){this.a=d},
ct6:function ct6(d){this.a=d},
ct7:function ct7(d){this.a=d},
ct8:function ct8(d){this.a=d},
hfR(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x5.GW(x,"ngmy_doc_share_v1",new B.fy7(),1)},
i8f(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.eu(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cL.aN(d)
return x}catch(w){return v}return v},
Sm(d,e){return B.inN(d,e)},
inN(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sm=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQ8
x=7
return A.b(o==null?$.aQ8=B.hfR():o,$async$Sm)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mo(s,"blobs","readwrite")
C.iE.mh(J.mn(q,"blobs"),r,d)
x=8
return A.b(J.oC(q),$async$Sm)
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
return A.i($async$Sm,w)},
Sl(d){return B.inM(d)},
inM(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQ8
x=7
return A.b(o==null?$.aQ8=B.hfR():o,$async$Sl)
case 7:s=f
r=J.mo(s,"blobs","readonly")
x=8
return A.b(C.iE.xP(J.mn(r,"blobs"),d),$async$Sl)
case 8:q=f
x=9
return A.b(J.oC(r),$async$Sl)
case 9:o=B.i8f(q)
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
return A.i($async$Sl,w)},
ail(d){return B.inL(d)},
inL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ail=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQ8
x=7
return A.b(p==null?$.aQ8=B.hfR():p,$async$ail)
case 7:s=f
r=J.mo(s,"blobs","readwrite")
C.iE.Gr(J.mn(r,"blobs"),d)
x=8
return A.b(J.oC(r),$async$ail)
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
return A.i($async$ail,w)},
fy7:function fy7(){},
iaI(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brz(w,v))}return u},
hHq(d,e){var x,w={},v=A.aYN("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fXL(w,v,e)
C.x7.zd(v,"change",new B.fXN(w,v,!1))
C.x7.zd(v,"cancel",new B.fXM(w))
$.eY.mJ()
v.click()
A.bN(C.am1,new B.fXK(w),y.H)},
fXL:function fXL(d,e,f){this.a=d
this.b=e
this.c=f},
fXN:function fXN(d,e,f){this.a=d
this.b=e
this.c=f},
fXM:function fXM(d){this.a=d},
fXK:function fXK(d){this.a=d},
DK(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUH()?3:4
break
case 3:x=5
return A.b(B.hC2(e,d,s,!0,!1,f,g,h,!1,i),$async$DK)
case 5:x=1
break
case 4:x=6
return A.b(B.RY(d,s,f,g,h,i),$async$DK)
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
return A.b(B.Jq(s,d),$async$DK)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.ftA(s,d),$async$DK)
case 14:x=12
return A.b(r.hC2(q,p,o,n,m,l,k,j,a1,i),$async$DK)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ee(new B.fY_(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ee(new B.fY0(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DK,w)},
RY(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RY=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1w(e),$async$RY)
case 3:u=k
x=4
return A.b(B.ar4(d,e,!1),$async$RY)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jq(e,d),$async$RY)
case 7:if(k){v=D.adw
x=1
break}x=8
return A.b(B.Wg(e),$async$RY)
case 8:v=t?D.X6:D.adx
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1u(d,e)){v=D.adw
x=1
break}x=11
return A.b(B.Wg(e),$async$RY)
case 11:v=t?D.X6:D.adx
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.haH(d,e)){v=D.adw
x=1
break}x=14
return A.b(B.Wg(e),$async$RY)
case 14:v=D.X6
x=1
break
case 13:v=t?D.X6:D.adx
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RY,w)},
ftA(d,e){var x=0,w=A.j(y.y),v
var $async$ftA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1u(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1w(d),$async$ftA)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftA,w)},
hC2(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ee(new B.fAN(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hwS(d,e,f,g,h,i,j){return new B.a_u(e,j,d,g,h,i,f,null)},
fCH(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fCH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fCK(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fCH)
case 3:r=f
t.U$=u
t.R$=0
s.U$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCH,w)},
fDb(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fDb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fDd(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fDb)
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
return A.i($async$fDb,w)},
hg2(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bz(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fQ3(d,e){var x=0,w=A.j(y.H),v
var $async$fQ3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wg(e),$async$fQ3)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eq()
case 1:return A.h(v,w)}})
return A.i($async$fQ3,w)},
fY_:function fY_(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fY0:function fY0(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adx:function adx(d,e){this.a=d
this.b=e},
fAN:function fAN(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_u:function a_u(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBv:function aBv(){this.c=this.a=this.d=null},
ddr:function ddr(d,e){this.a=d
this.b=e},
ddo:function ddo(d){this.a=d},
ddq:function ddq(d){this.a=d},
ddp:function ddp(d){this.a=d},
ddt:function ddt(){},
dds:function dds(d){this.a=d},
ae0:function ae0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aE9:function aE9(d,e){this.a=d
this.b=e},
aHk:function aHk(d,e,f){this.a=d
this.b=e
this.c=f},
fCK:function fCK(d,e,f){this.a=d
this.b=e
this.c=f},
fCI:function fCI(d){this.a=d},
fCJ:function fCJ(d,e,f){this.a=d
this.b=e
this.c=f},
fDd:function fDd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDc:function fDc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceH(d,e,f,g,h){return B.hXo(d,e,f,g,h)},
hXo(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ceH=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iK(r.dN(d,new B.ceI(s,e,h,g,f,q),y.g),y.l),$async$ceH)
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
return A.i($async$ceH,w)},
b1r(d,e,f,g,h){return B.hXp(d,e,f,g,h)},
hXp(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1r=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awC("GET",d)
o=A.h76()
if(o==null)o=new A.ML(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.GY),$async$b1r)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D1(),$async$b1r)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ck(q,h,o,e,f,"Received via QR")
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
return A.i($async$b1r,w)},
b1q(d){return B.hXm(d)},
hXm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.ov),$async$b1q)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mi(A.me(p.e)).cC(0,p.w),null)
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
return A.i($async$b1q,w)},
ceG(d){return B.hXn(d)},
hXn(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vR(d,null).dg(0,C.qE),$async$ceG)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mi(A.me(q.e)).cC(0,q.w)
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
return A.i($async$ceG,w)},
ceI:function ceI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jJ:function jJ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jo(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hXu(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jo(C.a.b4(t,u.length))}return null},
hXv(d){var x=B.Jo(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hXq(){var x,w=$.oz(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a86(d){return B.hXr(d)},
hXr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a86=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bN),$async$a86)
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
return A.i($async$a86,w)},
a87(d,e){return B.hXs(d,e)},
hXs(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a87=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hN(d,e,!1,!1,C.cP,null),$async$a87)
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
return A.i($async$a87,w)},
Cj(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cj)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jo(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a88(r),$async$Cj)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a86("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cj)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jo(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cj)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hXq()
x=14
return A.b(B.a88(m),$async$Cj)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a87("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cj)
case 15:k=f
x=16
return A.b(B.a87("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cj)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cj)
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
return A.i($async$Cj,w)},
a88(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a88=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jo(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a86("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a88)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
a89(d,e,f,g){return B.hXw(d,e,f,g)},
hXw(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a89=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jo(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a88(r),$async$a89)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.ceO())>1048576||g.aU(d,new B.ceP())){v=B.Fk(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8k("myCode",d,a0),$async$a89)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fk(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1z(u,g.gJ(d),a0),$async$a89)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oz().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.ceQ(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1s(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a89)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
Fk(d,e,f,g,h){return B.hXt(d,e,f,g,h)},
hXt(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fk=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Fk)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cF(a6,0,new B.ceK())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oz().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cT.aw(99999)
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
a1=B.Js(a9,q)
a0=new A.Lh(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fk)
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
a4=A.ps(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abM(a1.a,a4,"media",a1.d,a2).xM(m,n,new A.EA(!0,q.c)),$async$Fk)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fk)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSK(r),$async$Fk)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.ceL(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1s(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fk)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSK(r),$async$Fk)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fk,w)},
b1s(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a86(t),$async$b1s)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.ceJ(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a87(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1s,w)},
Om(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Om=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a86("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Om)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
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
return A.b(B.b1t(k,a0),$async$Om)
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
return A.b(B.b1y(h),$async$Om)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wn(g,a0),$async$Om)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ceM(),q),n)
d=A.C(new A.Y(r,new B.ceN(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a87("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Om)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b1t(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
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
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.irM(k,j)
C.d.u(s,i)
x=5
return A.b(B.DI(l,m,"Received via My Code",t,e,i),$async$b1t)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSK(s),$async$b1t)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1t,w)},
ceO:function ceO(){},
ceP:function ceP(){},
ceQ:function ceQ(){},
ceK:function ceK(){},
ceL:function ceL(){},
ceJ:function ceJ(){},
ceM:function ceM(){},
ceN:function ceN(){},
fXX(d,e){var x=0,w=A.j(y.H)
var $async$fXX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ee(new B.fXY(e),!1,null,y.H)),$async$fXX)
case 2:return A.h(null,w)}})
return A.i($async$fXX,w)},
bGH(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ee(new B.fXZ(g,e,f),!1,null,y.y)),$async$bGH)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGH,w)},
fXY:function fXY(d){this.a=d},
fXZ:function fXZ(d,e,f){this.a=d
this.b=e
this.c=f},
Wd:function Wd(d,e){this.c=d
this.a=e},
aFw:function aFw(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_c:function e_c(d,e){this.a=d
this.b=e},
Wh:function Wh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFz:function aFz(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e0l:function e0l(d){this.a=d},
e0m:function e0m(d){this.a=d},
e0n:function e0n(d){this.a=d},
e0k:function e0k(d,e){this.a=d
this.b=e},
e0o:function e0o(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0q:function e0q(d,e){this.a=d
this.b=e},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0t:function e0t(d){this.a=d},
e0w:function e0w(){},
e0u:function e0u(d){this.a=d},
e0v:function e0v(d,e){this.a=d
this.b=e},
blG:function blG(){},
We:function We(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFx:function aFx(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_d:function e_d(d){this.a=d},
e_e:function e_e(d){this.a=d},
haI(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hXy(d){var x=d.l4
if(x>=0)return x
return 4.99},
hXx(d){var x=d.m8,w=y.N
w=x.jp(x,new B.ceS(),w,w)
return w},
hrS(d){var x=d.l5,w=y.N
w=x.jp(x,new B.ceT(),w,w)
return w},
b1w(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1w)
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
return A.i($async$b1w,w)},
a8b(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a8b)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a8b)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
Wg(d){var x=0,w=A.j(y.H),v,u
var $async$Wg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wg)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
haH(d,e){var x,w,v
if(B.hXy(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hXx(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b1u(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hrS(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hrT(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hrS(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
ar5(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ar5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$ar5)
case 7:s=f
r=A.w(p)
r=A.ep(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ar5,w)},
ar6(d){var x=0,w=A.j(y.H),v,u,t
var $async$ar6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ar5(d),$async$ar6)
case 3:u=f
x=5
return A.b(A.aA(),$async$ar6)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$ar6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ar6,w)},
ar4(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ar4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.haI(d)
if(u<=0){v=!1
x=1
break}if(B.haH(d,e)){v=!1
x=1
break}x=3
return A.b(B.ar5(e),$async$ar4)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar4,w)},
b1v(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jq(e,d),$async$b1v)
case 3:if(g){v=-1
x=1
break}u=B.haI(d)
if(u<=0){v=-1
x=1
break}if(B.haH(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ar5(e),$async$b1v)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1v,w)},
ceV(d,e,f){var x=0,w=A.j(y.y),v
var $async$ceV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jq(e,d),$async$ceV)
case 3:if(h){v=!1
x=1
break}v=B.ar4(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceV,w)},
ceU(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ceU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ceV(d,u,i.gUH()),$async$ceU)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceU,w)},
a8a(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8a=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUH()){v=!0
x=1
break}if(B.b1u(d,u)){v=!0
x=1
break}x=5
return A.b(A.lF(u,C.Um),$async$a8a)
case 5:x=k?3:4
break
case 3:B.hrT(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8a)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lk(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Um,"Doc Share for Organizations"),$async$a8a)
case 7:if(!k){v=!1
x=1
break}B.hrT(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8a)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
ceS:function ceS(){},
ceT:function ceT(){},
fYX(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fYX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fYX)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fpT.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hP([r],e.c))
s.toString
$.fpT.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYX,w)},
itV(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fpT.bq($.fpT,new B.fYZ(d))},
fYZ:function fYZ(d){this.a=d},
frv(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$frv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hP([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jq,null,y.H),$async$frv)
case 3:C.Bt.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frv,w)},
ahd(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fqz.n(0,d,new B.ade(A.bp(e,!0,v)))
x=3
return A.b(A.aA(),$async$ahd)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahd)
case 2:return A.h(null,w)}})
return A.i($async$ahd,w)},
ah7(d){return B.icB(d)},
icB(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fqz.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah7)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b8(s,new B.fva(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ade(r)
$.fqz.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah7,w)},
RO(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sm(d,u),$async$RO)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RO,w)},
aQu(d){return B.icz(d)},
icz(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sl(d),$async$aQu)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQu)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cL.aN(r)
x=!J.ct(q)?9:10
break
case 9:B.RO(d,q)
x=11
return A.b(J.hf(s,d),$async$aQu)
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
return A.i($async$aQu,w)},
i8H(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cc(J.eu(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cc(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cc(d)),y.K)
return A.f4(null,y.K)},
a2Z(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bl($.bE,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fAZ(r,t),!1,s)
A.fC(r,"error",new B.fB_(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iJ(0,C.Od,new B.fB0())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2Z,w)},
aQO(d,e,f){return B.ieY(d,e,f)},
ieY(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQO=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2Z(i),$async$aQO)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sm(o,p),$async$aQO)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahd(k,j,s),$async$aQO)
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
return A.i($async$aQO,w)},
aQN(d,e,f){return B.ieX(d,e,f)},
ieX(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQN=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQO(d,e,f),$async$aQN)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2Z(f),$async$aQN)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S6.n(0,s,r)
x=11
return A.b(B.RO(s,r),$async$aQN)
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
return A.i($async$aQN,w)},
Ck(d,e,f,g,h,i){return B.hXH(d,e,f,g,h,i)},
hXH(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jJ(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1C(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RO(s,d),$async$Ck)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Ck)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cS.gcs().aN(d)),$async$Ck)
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
return A.b(B.Be(e),$async$Ck)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hg(e,j),$async$Ck)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ck,w)},
Wi(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wi=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Be(d),$async$Wi)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cT.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hrV(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jJ(m,n,k,l,j,"From folder",null,B.b1C(),null)
$.ahD.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2Z(o),$async$Wi)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S6.n(0,h,g)
B.RO(h,g)
x=9
break
case 10:x=11
return A.b(B.aQN(d,m,o),$async$Wi)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wi)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wi,w)},
haM(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$haM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hrV(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jr(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ck(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haM,w)},
Jr(d,e,f,g,h,i){return B.hXG(d,e,f,g,h,i)},
hXG(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jr=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cT.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lh(A.dD(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jr)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SU(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kP(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sm(k,l),$async$Jr)
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
return A.b(j.a1(0),$async$Jr)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sm(k,new Uint8Array(A.cc(n))),$async$Jr)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahd(r,q,g),$async$Jr)
case 16:f=new B.jJ(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1C(),null)
x=17
return A.b(B.Be(d),$async$Jr)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hg(d,e),$async$Jr)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
Wk(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wk=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahD.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2Z(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah7(s),$async$Wk)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sl(u[o]),$async$Wk)
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
v=A.wS(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S6.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rZ(d,e),$async$Wk)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S6.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
hrV(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rZ(d,e){return B.hXI(d,e)},
hXI(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rZ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S6.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahD.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2Z(s),$async$rZ)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S6.n(0,f,r)
B.RO(f,r)
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
return A.b(B.ah7(f),$async$rZ)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAg(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sl(g[l]),$async$rZ)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqf()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S6.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQu(f),$async$rZ)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S6.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wk(a0,a1,0,g),$async$rZ)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H6.n(0,f,h)
$.S6.n(0,f,h)
B.RO(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rZ,w)},
hXL(d){var x,w,v=$.ahD.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hXM(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hP([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hXJ(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arc(d,e,f,g,h){return B.hXK(d,e,f,g,h)},
hXK(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arc=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahD.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2Z(s),$async$arc)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rZ(g,e),$async$arc)
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
return A.b(n.iD(d).xM(h,r,new A.EA(!0,e.c)),$async$arc)
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
return A.i($async$arc,w)},
hrX(d,e,f,g,h){var x,w,v,u,t=$.hrW
$.hrW=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cf5.n(0,t,new B.byA(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAg(u)))
return t},
haN(d){var x=0,w=A.j(y.H)
var $async$haN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$haN,w)},
Js(d,e){var $async$Js=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahD.h(0,h)
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
return A.qB(B.Wk(d,e,p,o<q?o:q),$async$Js,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qB(A.GE(n),$async$Js,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qB(B.ah7("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Js,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qB(B.Sl(h[l]),$async$Js,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qB(A.GE(k),$async$Js,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qB(B.rZ(d,e),$async$Js,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qB(A.GE(A.wS(j,p,o<i?o:i)),$async$Js,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qB(null,0,w)
case 2:return A.qB(t.at(-1),1,w)}})
var x=0,w=A.hAT($async$Js,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hCN(w)},
b1E(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cf5.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5X(),$async$b1E)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1E,w)},
Wj(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cf5.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5X(),$async$Wj)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahd(r.c,u,r.z),$async$Wj)
case 4:t=new B.jJ(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1C(),null)
u=r.a
x=5
return A.b(B.Be(u),$async$Wj)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wj)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
a8h(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cf5.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ail(u[s]),$async$a8h)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
cf7(d,e,f){var x=0,w=A.j(y.H)
var $async$cf7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDD(d,e,f),$async$cf7)
case 2:return A.h(null,w)}})
return A.i($async$cf7,w)},
cf8(d,e,f){var x=0,w=A.j(y.H)
var $async$cf8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDE(d,e,f),$async$cf8)
case 2:return A.h(null,w)}})
return A.i($async$cf8,w)},
Fl(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Be(d),$async$Fl)
case 2:p=g
J.nY(p,new B.cf6(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahD.W(0,e)
x=3
return A.b(B.ah7(v),$async$Fl)
case 3:u=g
$.fqz.W(0,v)
x=4
return A.b(A.aA(),$async$Fl)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fl)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fl)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ail(s[q]),$async$Fl)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ail(v),$async$Fl)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fl)
case 14:return A.h(null,w)}})
return A.i($async$Fl,w)},
b1D(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rZ(d,e),$async$b1D)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.frv(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1D,w)},
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
break}r=J.b8(u,new B.fB1(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Be,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fFc(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bDD(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Be(d),$async$bDD)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzb(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGn(f))
x=4
return A.b(B.Hg(d,u),$async$bDD)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDD,w)},
bDE(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Be(d),$async$bDE)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzc(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPq(f))
x=4
return A.b(B.Hg(d,u),$async$bDE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDE,w)},
ade:function ade(d){this.a=d},
fva:function fva(){},
fAZ:function fAZ(d,e){this.a=d
this.b=e},
fB_:function fB_(d){this.a=d},
fB0:function fB0(){},
cf6:function cf6(d){this.a=d},
byA:function byA(d,e,f,g,h,i,j,k,l){var _=this
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
fB1:function fB1(){},
fFc:function fFc(){},
fzb:function fzb(d){this.a=d},
fzc:function fzc(d){this.a=d},
a8i(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.cfb())?3:4
break
case 3:x=5
return A.b(B.b1F(d,e),$async$a8i)
case 5:u=g
if(u!=null){t=u.c
B.Oo(d,u.b,e,t)}v=u
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
return A.b(B.b1A(s),$async$a8i)
case 10:case 9:if(g){v=new A.Ra(1,D.U_,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wl(d,e),$async$a8i)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wq(!0,!0,d,e),$async$a8i)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oo(d,D.Au,e,t)
v=new A.Ra(p,D.Au,t)
x=1
break}v=B.cfa(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
Wl(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8k(null,d,e),$async$Wl)
case 3:p=g
try{u=C.W.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1z(p,d.length,e),$async$Wl)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cf8(e,C.d.gH(d).a,r.b),$async$Wl)
case 7:case 6:q=r.a
x=8
return A.b(B.Oo(d,D.U_,e,q),$async$Wl)
case 8:v=new A.Ra(d.length,D.U_,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
Wm(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mQ(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8j(d,e),$async$Wm)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cf3(s,d,e,t),$async$Wm)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1A(t),$async$Wm)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rZ(e,d),$async$Wm)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wl(A.a([d],y.r),e),$async$Wm)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
Wo(){var x=0,w=A.j(y.H)
var $async$Wo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.haG(),$async$Wo)
case 2:x=3
return A.b(B.aT5(),$async$Wo)
case 3:return A.h(null,w)}})
return A.i($async$Wo,w)},
a8j(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1C()
x=3
return A.b(B.cf7(e,d.a,u),$async$a8j)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
Oo(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.U_&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b4(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8j(p,f),$async$Oo)
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
return A.b(B.cf2(o,p,u,f),$async$Oo)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cf3(o,p,f,t),$async$Oo)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cf1(o,u,p,f),$async$Oo)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1F(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cf9(e,d),$async$b1F)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wq(!1,!0,d,e),$async$b1F)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ra(u.a,D.Au,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1F,w)},
cf9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cf9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wk(d,s,0,1),$async$cf9)
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
return A.i($async$cf9,w)},
cfa(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8k(null,d,e),$async$cfa)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hrU(u)
if(t.length>800){v=null
x=1
break}v=new A.Ra(d.length,D.dUm,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfa,w)},
ard(d,e,f){return B.hXP(d,e,f)},
hXP(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ard=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nv(g,1)
x=B.haL(g)?3:4
break
case 3:x=5
return A.b(B.cf4(g),$async$ard)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nv(g,13))
try{k=B.Fm(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nv(g,13))
u=9
x=12
return A.b(B.b1y(q),$async$ard)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wn(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.haK(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wn(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jt(C.a.i(J.nv(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jt(C.a.i(J.nv(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jt(h,d,a0)
x=1
break}if(J.eK(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wn(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ard,w)},
Jt(d,e,f){return B.hXN(d,e,f)},
hXN(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jt=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b4(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b4(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1q(r),$async$Jt)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1q(A.cD(s,0,null)),$async$Jt)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ceH(o,r,a1,n,a2),$async$Jt)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceG(q),$async$Jt)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wn(l,a2),$async$Jt)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ct(m)?null:m
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
return A.i($async$Jt,w)},
a8k(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8k=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rZ(f,r),$async$a8k)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcs().aN(q)],t,s))
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
return A.i($async$a8k,w)},
Wn(d,e){return B.hXO(d,e)},
hXO(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wn=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cL.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Ck(i,a3,d,k,l,o),$async$Wn)
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
return A.i($async$Wn,w)},
On:function On(d,e){this.a=d
this.b=e},
cfb:function cfb(){},
a2y(d){var x=A.P(d).ax.a===C.I,w=x?D.aji:D.agK,v=x?D.al2:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aif:C.bm
return new A.aIA([w,s,v,u,t,x?C.fq:C.bQ])},
hIs(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h2e(e),d,null,!0,!0,y.N)},
ceR(d,e,f,g,h,i,j,k,l){return new B.Wf(e,l,d,f,k,j,g,h,i,null)},
a_w(d,e,f,g,h,i,j){return new B.bge(g,h,j,e,i,d,f,null)},
h2e:function h2e(d){this.a=d},
a_t:function a_t(d,e){this.c=d
this.a=e},
aBu:function aBu(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddn:function ddn(d){this.a=d},
ddl:function ddl(d){this.a=d},
ddm:function ddm(d){this.a=d},
byc:function byc(){},
Wf:function Wf(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFy:function aFy(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e0j:function e0j(d){this.a=d},
e_H:function e_H(d,e){this.a=d
this.b=e},
e_I:function e_I(d,e){this.a=d
this.b=e},
e_g:function e_g(d,e,f){this.a=d
this.b=e
this.c=f},
e_f:function e_f(d){this.a=d},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e,f){this.a=d
this.b=e
this.c=f},
e_l:function e_l(d){this.a=d},
e07:function e07(d,e){this.a=d
this.b=e},
e08:function e08(d){this.a=d},
e_E:function e_E(d,e,f){this.a=d
this.b=e
this.c=f},
e_B:function e_B(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_k:function e_k(d){this.a=d},
e_M:function e_M(d){this.a=d},
e_L:function e_L(){},
e_q:function e_q(d){this.a=d},
e04:function e04(d,e){this.a=d
this.b=e},
e05:function e05(d,e){this.a=d
this.b=e},
e06:function e06(d,e){this.a=d
this.b=e},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
e_U:function e_U(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_V:function e_V(){},
e_W:function e_W(){},
e_X:function e_X(d,e){this.a=d
this.b=e},
e_Z:function e_Z(){},
e0_:function e0_(d){this.a=d},
e_S:function e_S(d,e){this.a=d
this.b=e},
e_N:function e_N(d){this.a=d},
e_O:function e_O(d){this.a=d},
e_P:function e_P(d){this.a=d},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(d){this.a=d},
e_n:function e_n(){},
e_o:function e_o(d){this.a=d},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e){this.a=d
this.b=e},
e_i:function e_i(d,e,f){this.a=d
this.b=e
this.c=f},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d,e,f){this.a=d
this.b=e
this.c=f},
e_z:function e_z(d,e){this.a=d
this.b=e},
e_v:function e_v(d){this.a=d},
e_s:function e_s(d,e,f){this.a=d
this.b=e
this.c=f},
e_w:function e_w(d){this.a=d},
e_x:function e_x(d){this.a=d},
e_y:function e_y(){},
e_A:function e_A(d,e){this.a=d
this.b=e},
e_t:function e_t(d){this.a=d},
e_r:function e_r(d,e,f){this.a=d
this.b=e
this.c=f},
e_u:function e_u(){},
e_K:function e_K(d){this.a=d},
e_J:function e_J(d,e){this.a=d
this.b=e},
e03:function e03(d,e){this.a=d
this.b=e},
e00:function e00(d){this.a=d},
e01:function e01(d,e){this.a=d
this.b=e},
e02:function e02(d){this.a=d},
e0g:function e0g(d){this.a=d},
e0e:function e0e(d){this.a=d},
e0f:function e0f(d){this.a=d},
e0h:function e0h(){},
e0i:function e0i(d,e){this.a=d
this.b=e},
e0a:function e0a(d,e){this.a=d
this.b=e},
e0b:function e0b(d,e,f){this.a=d
this.b=e
this.c=f},
e09:function e09(d,e,f){this.a=d
this.b=e
this.c=f},
e0c:function e0c(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
aBr:function aBr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgd:function bgd(d,e,f){this.c=d
this.d=e
this.a=f},
ddj:function ddj(){},
ddk:function ddk(){},
ady:function ady(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddH:function ddH(){},
ddG:function ddG(d){this.a=d},
a_v:function a_v(d,e,f){this.c=d
this.d=e
this.a=f},
aBw:function aBw(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
ddD:function ddD(d){this.a=d},
ddE:function ddE(d,e,f){this.a=d
this.b=e
this.c=f},
ddF:function ddF(d,e){this.a=d
this.b=e},
ddB:function ddB(d,e){this.a=d
this.b=e},
ddz:function ddz(d){this.a=d},
ddx:function ddx(d){this.a=d},
ddu:function ddu(d){this.a=d},
ddA:function ddA(d){this.a=d},
ddw:function ddw(d){this.a=d},
ddC:function ddC(d){this.a=d},
ddy:function ddy(d){this.a=d},
ddv:function ddv(d){this.a=d},
a_s:function a_s(d,e,f){this.c=d
this.d=e
this.a=f},
aBt:function aBt(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
ddg:function ddg(d){this.a=d},
ddf:function ddf(d,e){this.a=d
this.b=e},
ddh:function ddh(d){this.a=d},
dde:function dde(d,e){this.a=d
this.b=e},
ddi:function ddi(d){this.a=d},
ddd:function ddd(d,e){this.a=d
this.b=e},
dd9:function dd9(d){this.a=d},
dda:function dda(d){this.a=d},
ddb:function ddb(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
QJ:function QJ(d,e,f){this.c=d
this.d=e
this.a=f},
aBz:function aBz(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddU:function ddU(d){this.a=d},
ddV:function ddV(d){this.a=d},
ddW:function ddW(d){this.a=d},
ddX:function ddX(d){this.a=d},
ddY:function ddY(d,e){this.a=d
this.b=e},
ddZ:function ddZ(d){this.a=d},
de0:function de0(d){this.a=d},
de_:function de_(d){this.a=d},
a_x:function a_x(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBx:function aBx(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddQ:function ddQ(d,e){this.a=d
this.b=e},
ddR:function ddR(d,e){this.a=d
this.b=e},
ddI:function ddI(d,e,f){this.a=d
this.b=e
this.c=f},
ddJ:function ddJ(d){this.a=d},
ddK:function ddK(){},
ddP:function ddP(){},
ddL:function ddL(d,e){this.a=d
this.b=e},
ddM:function ddM(d,e){this.a=d
this.b=e},
ddN:function ddN(d,e){this.a=d
this.b=e},
ddO:function ddO(d,e){this.a=d
this.b=e},
adw:function adw(d,e){this.c=d
this.a=e},
dd8:function dd8(d){this.a=d},
a_r:function a_r(d){this.a=d},
aBs:function aBs(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_y:function a_y(d,e){this.c=d
this.a=e},
aBy:function aBy(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddT:function ddT(d){this.a=d},
ddS:function ddS(d){this.a=d},
bge:function bge(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hXQ(){var x,w=$.oz(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
Op(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Op=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Op)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Op)
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
return A.i($async$Op,w)},
a8l(d){return B.hXR(d)},
hXR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8l)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hN("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8l)
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
return A.i($async$a8l,w)},
Wp(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Op(),$async$Wp)
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
return A.b(B.a8l(s),$async$Wp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
Wq(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Wq)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cfd(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hXQ()
t=A.U(u).k("N<1,a9<n,aF>>")
r=A.C(new A.N(u,new B.cfe(s),t),t.k("ak.E"))
x=6
return A.b(B.Op(),$async$Wq)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8l(q),$async$Wq)
case 7:x=8
return A.b(B.a8m(r,u,g,s),$async$Wq)
case 8:v=new A.bs3(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
are(d){var x=0,w=A.j(y.y),v,u,t
var $async$are=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Op(),$async$are)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$are,w)},
cff(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cff=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Op(),$async$cff)
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
return A.i($async$cff,w)},
a8m(d,e,f,g){return B.hXS(d,e,f,g)},
hXS(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8m=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arc("media",r,new B.cfc(s,e,g),f,q),$async$a8m)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wp(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8m)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wp(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8m)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wp(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8m)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8m,w)},
Fm(d,e,f){return B.hXT(d,e,f)},
hXT(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fm=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$Fm)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.are(b3),$async$Fm)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.iR,null,g),$async$Fm)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.are(b3),$async$Fm)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Op(),$async$Fm)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ct(a4)){v=null
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
b0=A.ps(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abM(a8.a,b0,"media",a8.d,a9).Dm(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1r(k,n,o,s,b7),$async$Fm)
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
a8=A.ps(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abM(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fm)
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
return A.b(B.a8l(e),$async$Fm)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fm,w)},
cfd:function cfd(){},
cfe:function cfe(d){this.a=d},
cfc:function cfc(d,e,f){this.a=d
this.b=e
this.c=f},
aT5(){var x=0,w=A.j(y.H),v,u
var $async$aT5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i8_=null
v=y.H
u=A.dN(null,v)
x=2
return A.b(u,$async$aT5)
case 2:u=A.dN(null,v)
x=3
return A.b(u,$async$aT5)
case 3:u=$.hge
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dN(u,v),$async$aT5)
case 4:$.hge=$.igM=$.igN=null
return A.h(null,w)}})
return A.i($async$aT5,w)},
fEO(d){var x=0,w=A.j(y.H),v,u
var $async$fEO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aa8){x=1
break}u=new A.bl($.bE,y.d4)
d.c=new B.fEP(new A.c3(u,y.aY))
x=3
return A.b(u.iJ(0,C.id,new B.fEQ()),$async$fEO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fEO,w)},
igK(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hXA(x):x},
hgi(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,13))
if(C.a.a_(u,"WR")){v=B.arg(u)
x=1
break}v=B.haK(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgi,w)},
hgh(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b4(t,14))
if(C.a.a_(u,"WR")){v=B.arh(u)
x=1
break}v=B.haK(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgh,w)},
fYG(d){var x=0,w=A.j(y.T),v
var $async$fYG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arh(d),$async$fYG)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYG,w)},
bEy(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hgh(d),$async$bEy)
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
return A.i($async$bEy,w)},
fsi(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fsi=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wj(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Ck(d.aqf(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsi,w)},
Hi(d,e,f){return B.ij1(d,e,f)},
ij1(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hgi(a1),$async$Hi)
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
return A.b($.hKs().aGE(D.dGJ,null),$async$Hi)
case 4:l=d.hge=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAg(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bl($.bE,y.b1)
l.y=new B.fFp(f,k,new B.fFq(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a9_(0,new B.Yz(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amF(0),$async$Hi)
case 7:x=6
return A.b(d.a8S(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fEO(l),$async$Hi)
case 8:x=9
return A.b(l.ar1(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.igK(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ari(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hrU(h)
case 11:v=new A.brj(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fEP:function fEP(d){this.a=d},
fEQ:function fEQ(){},
fFq:function fFq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFp:function fFp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fFo:function fFo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
il6(d){switch(d){case"new":return D.eE6
case"checking":return D.eE7
case"connected":return D.eE9
case"completed":return D.eE8
case"failed":return D.eEb
case"disconnected":return D.eEc
case"closed":return D.aS9
case"count":return D.eEa}return D.aS9},
il7(d){switch(d){case"new":return D.aSa
case"gathering":return D.eEd
case"complete":return D.aa8}return D.aSa},
ivt(d){switch(d){case"stable":return D.eEe
case"have-local-offer":return D.eEf
case"have-local-pranswer":return D.eEh
case"have-remote-offer":return D.eEg
case"have-remote-pranswer":return D.eEi
case"closed":return D.aSg}return D.aSg},
itC(d){switch(d){case"new":return D.aSd
case"connecting":return D.aSe
case"connected":return D.aSf
case"closed":return D.aa9
case"disconnected":return D.aSc
case"failed":return D.aSb}return D.aa9},
aaI:function aaI(d,e){this.a=d
this.b=e},
Pu:function Pu(d,e){this.a=d
this.b=e},
Yy:function Yy(d,e){this.a=d
this.b=e},
Pt:function Pt(d,e){this.a=d
this.b=e},
FR:function FR(d,e){this.a=d
this.b=e},
ct_:function ct_(){},
hcv(d){var x=new B.FQ()
x.a=d
x.b=!0
return x},
FQ:function FQ(){this.b=this.a=$},
aaH:function aaH(){},
avN:function avN(){},
Yz:function Yz(d,e){this.a=d
this.b=e},
haG(){var x=0,w=A.j(y.H)
var $async$haG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$haG,w)},
haJ(d,e,f){var x=0,w=A.j(y.T),v
var $async$haJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mQ(D.n7))){v=null
x=1
break}v=B.fYX(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haJ,w)},
hrU(d){var x,w=F.ag7.a5G(C.dV.aN(d),null)
if(w.length===0){x=C.dV.aN(d)
return C.cS.gcs().aN(x)}return C.cS.gcs().aN(w)},
hXz(d){var x,w,v=C.cL.aN(d)
try{x=C.cb.cC(0,F.ag6.bgv(v,!1))
return x}catch(w){x=C.cb.cC(0,v)
return x}},
haK(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hXz(C.a.b4(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b4(t,w.length)
try{v=C.cb.cC(0,C.cL.aN(x))
return v}catch(u){return x}}return null},
hXA(d){var x,w,v,u,t,s=A.a([],y.s)
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
hXB(){var x,w=$.oz(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1x(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1x)
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
return A.i($async$b1x,w)},
ceW(d,e){return B.hXC(d,e)},
hXC(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ceW=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hN("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$ceW)
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
return A.i($async$ceW,w)},
b1A(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1x(d),$async$b1A)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1A,w)},
b1z(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hXB()
r=C.a.i(f)
t=C.dV.aN(s)
x=3
return A.b(B.ceW(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcs().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1z)
case 3:if(!h){v=null
x=1
break}v=new A.a1y("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1z,w)},
b1y(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1x(o),$async$b1y)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cC(0,C.cL.aN(u))
if(J.j3(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1y,w)},
ceX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ceX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bFu("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$ceX)
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
return A.i($async$ceX,w)},
b1B(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jp(),$async$b1B)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1B,w)},
ar9(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ar9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ar9)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1B(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar9,w)},
ar7(d,e){var x=0,w=A.j(y.H)
var $async$ar7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ar7)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ar7)
case 2:return A.h(null,w)}})
return A.i($async$ar7,w)},
a8d(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8d)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a8d)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8c(s),$async$a8d)
case 5:x=6
return A.b(B.ar7(f,u),$async$a8d)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
a8e(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8e=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8e)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a8e)
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
return A.b(B.ar7(g,q),$async$a8e)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8c(u),$async$a8e)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
a8f(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8f)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jp(),$async$a8f)
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
s=B.b1u(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8f)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8f)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
ceY(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ceY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$ceY)
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
return A.i($async$ceY,w)},
Jq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceY(d),$async$Jq)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1B(t),$async$Jq)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ar8(d),$async$Jq)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1u(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ar8(d),$async$Jq)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
ar8(d){var x=0,w=A.j(y.H)
var $async$ar8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ar8)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ar8)
case 2:return A.h(null,w)}})
return A.i($async$ar8,w)},
b1C(){var x,w=$.oz(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8g(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
haL(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cf0(d){return B.hXE(d)},
hXE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cf0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8g(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cf0)
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
return A.i($async$cf0,w)},
arb(d,e){return B.hXF(d,e)},
hXF(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8g(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hN("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$arb)
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
return A.i($async$arb,w)},
cf2(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cf2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8g(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arb(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cf2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cf2,w)},
cf1(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cf1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8g(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arb(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cf1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cf1,w)},
cf3(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cf3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8g(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arb(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf3,w)},
cf4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cf4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.haL(d)){v=null
x=1
break}x=3
return A.b(B.cf0(d),$async$cf4)
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
return A.i($async$cf4,w)},
a8n(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8n=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8n)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8n)
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
return A.i($async$a8n,w)},
arf(d){return B.hXU(d)},
hXU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$arf)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hN("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$arf)
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
return A.i($async$arf,w)},
arg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$arg)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8n(),$async$arg)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cC(0,C.cL.aN(q))
if(J.j3(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.arf(s),$async$arg)
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
return A.i($async$arg,w)},
ari(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ari=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$ari)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8n(),$async$ari)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a1(s,r,q),r,q)
r=C.dV.aN(C.a.i(e))
q.n(0,"answer",C.cS.gcs().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arf(u),$async$ari)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ari,w)},
arh(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$arh)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8n(),$async$arh)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cC(0,C.cL.aN(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arh,w)},
aq8(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aq8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qq)){v=null
x=1
break}x=3
return A.b(p.lW(e),$async$aq8)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aq8)
case 7:q=g
o=q
o=o==null?null:J.eR(J.w0(o))
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
return A.i($async$aq8,w)},
irM(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
fWR(d){return B.irO(d)},
irO(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fWR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iD("media").Ly(d,3600),$async$fWR)
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
return A.i($async$fWR,w)},
DI(d,e,f,g,h,i){var x=null
return B.irL(d,e,f,g,h,i)},
irL(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DI=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hrX(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.haN(r),$async$DI)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fWR(o),$async$DI)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8h(r),$async$DI)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aVP)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.ML(A.a([],g))
x=15
return A.b(d.f9(0,A.awC("GET",A.cD(n,0,null))).dg(0,C.GY),$async$DI)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8h(r),$async$DI)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lh(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DI)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1E(r,k),$async$DI)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DI)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wj(r)
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
return A.b(B.a8h(r),$async$DI)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DI,w)},
aSK(d){return B.irN(d)},
irN(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iD("media").W(0,d),$async$aSK)
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
return A.i($async$aSK,w)}},D,T,L,U,V,W,X,M,Y
J=c[1]
A=c[0]
C=c[2]
N=c[47]
F=c[269]
H=c[152]
O=c[238]
P=c[239]
E=c[229]
G=c[95]
Q=c[199]
R=c[153]
S=c[236]
I=c[274]
K=c[282]
B=a.updateHolder(c[22],B)
D=c[280]
T=c[198]
L=c[219]
U=c[74]
V=c[263]
W=c[80]
X=c[62]
M=c[94]
Y=c[281]
B.ct0.prototype={
aGE(d,e){return this.cQV(d,e)},
cQV(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cv(t)))
t=J.k(u)
v=B.i1y(C.cS.gcs().aN(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGE,w)}}
B.b6L.prototype={
bCM(d){var x=this,w=x.w
w.onclose=A.hv(new B.csW(x))
w.onopen=A.hv(new B.csX(x))
w.onmessage=A.hv(new B.csY(x))
w.onbufferedamountlow=A.hv(new B.csZ(x))},
gd6(d){return this.x},
aiU(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hcv(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aiU)
case 8:v=t.hcv(s.aph(f,0,null))
x=1
break
case 7:case 4:v=B.hcv(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiU,w)}}
B.b6M.prototype={
bCN(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.ct1(x)))
w.addEventListener("icecandidate",A.hv(new B.ct2(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.ct3(x)))
w.onicegatheringstatechange=A.hv(new B.ct4(x))
w.addEventListener("signalingstatechange",A.hv(new B.ct5(x)))
if(!$.hkn())w.addEventListener("connectionstatechange",A.hv(new B.ct6(x)))
w.addEventListener("negotiationneeded",A.hv(new B.ct7(x)))
w.addEventListener("track",A.hv(new B.ct8(x)))},
amF(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kl(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amF)
case 3:t=f
v=new B.Yz(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amF,w)},
a8S(d,e){return this.brI(0,e)},
brI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8S)
case 2:return A.h(null,w)}})
return A.i($async$a8S,w)},
a9_(d,e){return this.bs2(0,e)},
bs2(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9_)
case 2:return A.h(null,w)}})
return A.i($async$a9_,w)},
ar1(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ar1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yz(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar1,w)},
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
B.adx.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_u.prototype={
S(){return new B.aBv()},
gd1(){return this.c}}
B.aBv.prototype={
Y(){this.a3()
this.afq()},
afq(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1v(u.e,u.c),$async$afq)
case 2:t=e
if(v.c!=null)v.m(new B.ddr(v,t))
return A.h(null,w)}})
return A.i($async$afq,w)},
R7(){var x=0,w=A.j(y.H),v,u=this,t
var $async$R7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ar4(t.e,t.c,!1),$async$R7)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fpJ)
x=1
break}x=4
return A.b(B.a8b(u.a.c,"individual"),$async$R7)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7e(A.ee(new B.ddo(u),!1,null,y.H)),$async$R7)
case 5:case 1:return A.h(v,w)}})
return A.i($async$R7,w)},
JT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fCH(o),$async$JT)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8f(o.e,r,s,q),$async$JT)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fmH)
x=1
break}x=5
return A.b(B.a8b(u.a.c,"member"),$async$JT)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7e(A.ee(new B.ddq(u),!1,null,y.H)),$async$JT)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JT,w)},
yK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8a(t.e,o,t.f,t.r,t.w,s),$async$yK)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8b(u.a.c,"org_owner"),$async$yK)
case 4:x=5
return A.b(B.ar9(u.a.c),$async$yK)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fDb(o),$async$yK)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8d(s,t,o,q.c),$async$yK)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fmD)
x=1
break}x=10
return A.b(B.ar9(u.a.c),$async$yK)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7e(A.ee(new B.ddp(u),!1,null,y.H)),$async$yK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yK,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I,q=r?C.ny:C.qr,p=B.haI(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fJQ,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hl,s,s,s),C.aB,D.h2Q,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cbW,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m2(new B.ddt(),s),C.P,v,C.e3,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae0(C.eW,C.aEE,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gck0(),s),C.af],u))
w.push(new B.ae0(C.pB,C.a5C,"Team Member","Sign in with your organization access code + password",t.gckS(),s))
w.push(C.af)
w.push(new B.ae0(C.aqD,C.a7h,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckn(),s))
return A.c4(s,q,A.bm(!0,A.c9(A.x(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.Q(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae0.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eC(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mE,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),1),A.W(C.zo,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aE9.prototype={}
B.aHk.prototype={}
B.jJ.prototype={
mQ(d){var x=this.b,w=C.a.pe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b4(x,w+1).toLowerCase())},
garJ(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ad(x/1024,1)+" KB"
if(x<1073741824)return C.i.ad(x/1048576,1)+" MB"
return C.i.ad(x/1073741824,2)+" GB"},
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
bfZ(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jJ(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPq(d){return this.bfZ(null,d)},
aGn(d){return this.bfZ(d,null)}}
B.Wd.prototype={
S(){return new B.aFw(new A.cx(null,y.A))},
gd1(){return this.c}}
B.aFw.prototype={
Y(){this.a3()
this.afr()},
afr(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cj(u.a.c),$async$afr)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_c(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afr,w)},
afs(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fx(s)),$async$afs)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fqE)
case 1:return A.h(v,w)}})
return A.i($async$afs,w)},
a_R(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_R=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aq8(s.d,4),$async$a_R)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rp(r,"ngmy_my_code_"+m+".png"),$async$a_R)
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
return A.i($async$a_R,w)},
ajl(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abl("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajl,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.ny:C.qr,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a62,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.ang,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.c9(A.x(A.a([x,C.nd,w,C.lb,new A.eo(A.p(p,A.qi(p,p,!1,B.hXv(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.en(M.Dz,p,C.Ws,q.gccg(),p),1),C.as,A.E(A.dh(C.zQ,p,C.acv,q.gcch(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.T,new A.a5(1/0,p,A.en(L.a4n,p,D.fZp,q.gczI(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,U.anP,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wh.prototype={
S(){return new B.aFz(new A.au(C.aw,$.ax()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.aFz.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jo(x==null?"":x)
if(w!=null)this.d.sb3(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
a_S(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_S=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jo(u.d.a.a)
if(t==null){u.m(new B.e0l(u))
x=1
break}u.m(new B.e0m(u))
s=u.a
r=s.c
x=3
return A.b(B.a89(s.d,new B.e0n(u),t,r),$async$a_S)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e0o(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_S,w)},
a37(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a37=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e0p(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rZ(r.a.c,q),$async$a37)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e0q(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj6(p,m,l,j,k),$async$a37)
case 8:o=e
if(r.c!=null)r.m(new B.e0r(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e0s(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e0t(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a37,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aji:D.agK,h=j?D.al2:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aif:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dt(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bZY,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a62,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blG()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bz(k,k,k,C.Oz,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e0u(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mq(l.a.d,4)
m=A.C(new A.N(m,new B.e0v(x,new A.aIA(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fl9)
else q.push(A.W(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b0,new A.o(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.c9(A.x(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bHn,k,k,C.ah),1)
u=l.f?k:l.gczJ()
t=i[3]
s=i[1]
q=A.l(16)
s=A.en(L.a4n,k,D.h_w,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcci()
t=A.bo(C.aD,k,k,0,C.c,k,C.nF,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lH(new B.e0w(),A.x(A.a([e,new A.D(D.bGR,A.x(A.a([s,C.P,i,C.af,A.bI(l.f?C.tW:D.fYM,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cj,C.a0E,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blG.prototype={
pa(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hn(C.bB,v.length),C.aP)}}
B.We.prototype={
S(){return new B.aFx()}}
B.aFx.prototype={
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
u.f=new A.au(C.aw,v)},
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
aft(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aft=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e_d(r))
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
return A.b(B.a8e(p,m,n,o,C.a.i(l).length===0?null:l),$async$aft)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fqf)
s=[1]
x=4
break}p.L(y.q).f.T(D.foR)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e_e(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aft,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.ny:C.qr,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fR7,s,s,s,1,s,!0),p=A.p(s,D.byU,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Im,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c6j,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6e,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c6u,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gccj()
u=A.bo(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c4(q,r,A.c9(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bI(t.r?C.tW:C.aYF,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.ade.prototype={}
B.byA.prototype={
a5X(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqf()))
x=3
return A.b(B.Sm(t,s),$async$a5X)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5X,w)},
gd1(){return this.a}}
B.On.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_t.prototype={
S(){return new B.aBu(new A.au(C.aw,$.ax()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.aBu.prototype={
Y(){this.a3()
$.aU.x1$.push(new B.ddn(this))},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
ccp(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2y(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.atl,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.aua,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byc()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bz(w,w,w,C.CJ,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b6R),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.ddl(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eG(w,C.L,new A.cN(Q.Mh,new A.bM(new A.o(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wH,A.x(A.a([l,C.aO,k,C.P,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dW(C.o7,new B.ddm(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bM(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cK,12)],n),K.QB,C.n),C.bk,A.aG(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.exu,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcco(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OI,w,C.d7,w,w,w)}}
B.byc.prototype={
pa(d,e){return e.amz(e.a.toUpperCase())}}
B.Wf.prototype={
S(){return new B.aFy(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFy.prototype={
Y(){var x=this
x.a3()
x.us()
x.w=A.dg(C.jJ,new B.e0j(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wo()
this.a2()},
a2_(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$a2_)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Be(u.a.c),$async$a2_)
case 4:u.m(new s.e_H(u,e))
u.io("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2_,w)},
us(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$us=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$us)
case 3:t=e
x=4
return A.b(B.Be(u.a.c),$async$us)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e_I(u,s))
if(t>0)u.io("Received "+A.w(t)+" file(s) via My Code.")
u.Oj(u.d)
B.Cj(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$us,w)},
Oj(d){return this.bGP(d)},
bGP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8j(r,u.a.c),$async$Oj)
case 8:p=f
if(u.c==null){x=1
break}new B.e_g(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mQ(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wm(r,u.a.c),$async$Oj)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Be(u.a.c),$async$Oj)
case 12:u.m(new o.e_h(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
OJ(d){return this.bNa(d)},
bNa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8j(d,u.a.c),$async$OJ)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_m(u,d,t))
x=6
return A.b(A.fI(new A.fx(t)),$async$OJ)
case 6:u.io("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fx(r.toUpperCase())),$async$OJ)
case 7:u.io("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
io(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ut(d,e){return this.cKF(d,e)},
cKF(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ut=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e07(r,e))
u=3
x=6
return A.b(d.$0(),$async$ut)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e08(r))
$.eY.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ut,w)},
gaYb(){var x=this.a
return x.f||x.r||x.w},
IK(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYb()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ceU(s,n,r,q,o,t),$async$IK)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.io("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fQ3(o,u.a.c),$async$IK)
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
return A.b(B.DK(s,o,r,q,n,t),$async$IK)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IK,w)},
a13(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar9(u.a.c),$async$a13)
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
return A.b(A.a6(t,!1).ce(A.ee(new B.e_E(u,r,q),!1,null,y.H)),$async$a13)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a13,w)},
a29(d){return this.cth(d)},
ctg(){return this.a29(1)},
cth(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a29=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYb()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ar6(u.a.c),$async$a29)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a29,w)},
adi(d,e,f){return this.c3b(d,e,f)},
c3b(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.io(e)
x=1
break}x=3
return A.b(u.ut(new B.e_B(u,d,null,e,f),"Uploading\u2026"),$async$adi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adi,w)},
bGY(){B.hHq(!1,new B.e_k(this))
return},
cyj(){this.m(new B.e_M(this))},
aAS(){var x=0,w=A.j(y.H),v=this
var $async$aAS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGY()
return A.h(null,w)}})
return A.i($async$aAS,w)},
ade(){var x=0,w=A.j(y.H),v=this
var $async$ade=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e_q(v),"Importing\u2026"),$async$ade)
case 2:return A.h(null,w)}})
return A.i($async$ade,w)},
Tb(d){return this.cJZ(d)},
cJZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mQ(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e04(u,d),!1,null,y.H)),$async$Tb)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mQ(D.SD)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ee(new B.e05(u,d),!1,null,y.H)),$async$Tb)
case 8:x=1
break
case 7:x=u.c3U(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ee(new B.e06(u,d),!1,null,y.H)),$async$Tb)
case 11:x=1
break
case 10:u.io("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tb,w)},
c3U(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.pe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cVe,C.a.b4(x,w+1).toLowerCase())},
ah3(d){return this.ck4(d)},
ck4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mQ(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e_C(u,d),!1,null,y.H)),$async$ah3)
case 5:x=1
break
case 4:u.m(new B.e_D(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ah3,w)},
Sx(d){return this.cBc(d)},
cBc(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.io("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$Sx)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e_Y(u,d),"Preparing QR\u2026"),$async$Sx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sx,w)},
ajL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_Z(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e0_(q),s),s.k("M.E"))
if(r.length===0){u.io("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sx(r),$async$ajL)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajL,w)},
ajE(d){return this.cAK(d)},
cAK(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2y(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.e_S(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajE)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tb(d)
break
case"qr":u.Sx(A.a([d],y.r))
break
case"send_my_code":u.ckH(A.a([d],y.r))
break
case"save":u.aj1(d)
break
case"delete":u.JC(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajE,w)},
YD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_n(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_o(q),s),s.k("M.E"))
if(r.length===0){u.io("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$YD)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e_p(u,r),"Preparing file\u2026"),$async$YD)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YD,w)},
ai8(d){return this.crA(d)},
crA(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ai8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hIs(d,!1),$async$ai8)
case 3:s=f
r=s==null
q=B.a8g(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.io("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai8,w)},
ah9(){var x=0,w=A.j(y.H),v=this,u
var $async$ah9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fXX(u,v.a.c),$async$ah9)
case 2:return A.h(null,w)}})
return A.i($async$ah9,w)},
bGX(){B.hHq(!1,new B.e_j(this,null))
return},
JS(d,e){return this.ckI(d,e)},
b3L(d){return this.JS(null,d)},
ckH(d){return this.JS(d,null)},
ckI(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e_F(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xP.cp().apl(!0,C.a2p,!1),$async$JS)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.ut(new B.e_G(l,s,r),"Preparing\u2026"),$async$JS)
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
return A.b(B.bGH(p,l,e,s.a.c),$async$JS)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.io("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JS,w)},
J_(d){return this.c2Z(d)},
c2Z(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hXu(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3L(t),$async$J_)
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
return A.b(u.ut(new B.e_z(u,d),"Receiving video\u2026"),$async$J_)
case 11:x=1
break
case 10:x=12
return A.b(u.ut(new B.e_A(u,d),"Receiving\u2026"),$async$J_)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J_,w)},
EQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DE()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ai8(t),$async$EQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J_(s),$async$EQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e_K(u),!1,null,y.N)),$async$EQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.us(),$async$EQ)
case 10:x=1
break
case 9:x=11
return A.b(u.J_(C.a.i(r)),$async$EQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EQ,w)},
aj1(d){return this.cwR(d)},
cwR(d){var x=0,w=A.j(y.H),v=this
var $async$aj1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e_J(v,d),"Saving\u2026"),$async$aj1)
case 2:return A.h(null,w)}})
return A.i($async$aj1,w)},
JC(d){return this.bPw(d)},
bPw(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lt(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JC)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ceX(t),$async$JC)
case 6:case 5:s=d.a
x=7
return A.b(B.Fl(u.a.c,s),$async$JC)
case 7:u.r.W(0,s)
x=8
return A.b(u.us(),$async$JC)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JC,w)},
ajR(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2y(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.e03(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajR)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ah9()
break
case"import":u.ade()
break}case 1:return A.h(v,w)}})
return A.i($async$ajR,w)},
ccm(d){var x=d.c
if(C.a.a_(x,"video/")||d.mQ(D.n7))return C.qW
if(C.a.a_(x,"image/")||d.mQ(D.SD))return C.v1
if(C.a.q(x,"pdf"))return P.I2
return D.ar2},
B(d){var x,w,v=this,u=null,t=B.a2y(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.If,u,u,u,new B.e0e(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c_y,u,u,u,v.e?u:v.gcko(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyi()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bUL:E.arq,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a4k,u,u,u,v.e?u:v.gccn(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb4R(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c1l,u,u,u,v.e?u:new B.e0f(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m2(new B.e0g(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ku(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBr(C.ju,s,!0,t,w?u:v.gcBd(),u),1)
x.push(new A.D(D.bFC,A.lH(new B.e0h(),A.A(A.a([s,C.as,A.E(new B.aBr(C.v2,"Export",!1,t,w?u:v.gbTp(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cj,C.iB,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgd(t,v.e?u:v.gb4R(),u)
else s=A.kv(!0,u,u,new B.e0i(v,t),s,u,D.bFu,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBr.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.t6,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cd,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t6,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.en(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgd.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lH(new B.ddj(),new A.D(E.a1w,A.x(A.a([A.lH(new B.ddk(),A.p(x,A.W(C.zs,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ec,C.hN,x,x,new A.bq(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.dh(C.oQ,x,D.h39,this.d,A.bo(C.aD,x,x,x,C.c,x,C.OG,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.cj,C.Cv,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ady.prototype={
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
if(!o||i.mQ(D.n7))p=D.dvz
else{p=C.a.a_(p,"image/")||i.mQ(D.SD)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garJ()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.ax,A.d(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fN,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cg))
if(!(!o||i.mQ(D.n7)))l.push(A.h8r(C.aD,!1,j,j,j,!1,j,j,new B.ddG(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.W(C.oI,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cg))
return A.lH(new B.ddH(),new A.D(C.el,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1_,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cj,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_v.prototype={
S(){return new B.aBw()},
gd1(){return this.c}}
B.aBw.prototype={
Y(){this.a3()
this.yA()},
t(){B.hXJ(this.e)
this.a2()},
yA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rZ(o.c,o.d),$async$yA)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hXM(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hXL(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.ddD(s))
x=1
break}s.m(new B.ddE(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.ddF(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yA,w)},
a36(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a36=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rZ(t.c,t.d),$async$a36)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fnd)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj6(q,s,t.length===0?"image/jpeg":t,null,s),$async$a36)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a36,w)},
c2S(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kJ(u,C.z,v,new B.ddB(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fX(t,C.z,v,new B.ddC(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2y(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DA,u,u,u,v.gb8D(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FS
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.DA,u,D.fMh,v.gb8D(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c2S()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_s.prototype={
S(){return new B.aBt(A.ak3(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBt.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a3(w).k("fB<1>")).iE(new B.ddg(v))
x.gcYy().iE(new B.ddh(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a3(x).k("fB<1>"))}if(x==null)x=C.bde
x.iE(new B.ddi(v))
v.yA()},
yA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rZ(p.c,p.d),$async$yA)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dd9(s))
x=1
break}x=8
return A.b(s.d.vv(0,new A.a4G(r,s.a.d.c)),$async$yA)
case 8:if(s.c==null){x=1
break}s.m(new B.dda(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.ddb(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yA,w)},
a_T(){var x=0,w=A.j(y.H),v=this,u
var $async$a_T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a_T)
case 5:x=3
break
case 4:x=6
return A.b(u.iI(0),$async$a_T)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_T,w)},
aW_(d){var x=d.a
return C.a.b0(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2y(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FS
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bVH,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.QB,C.n),o,88,o,o,o,o,o,88)
t=A.l3(C.aD,o,o,m,0,new B.ddc(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aW_(p.w)+" / "+p.aW_(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.fjC,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.v6:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccq(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QJ.prototype={
S(){return new B.aBz()},
gd1(){return this.c}}
B.aBz.prototype={
Y(){this.a3()
this.Qq()},
Qq(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qq=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.haJ(o.c,o.d,new B.ddU(s)),$async$Qq)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddV(s))
x=1
break}s.e=r
q=N.ijX(r)
if(q==null){s.m(new B.ddW(s))
x=1
break}s.d=q
q.aV(0,s.gb3z())
x=8
return A.b(q.iX(0).dg(0,C.t2),$async$Qq)
case 8:if(s.c==null){x=1
break}s.m(new B.ddX(s))
x=9
return A.b(q.qv(0),$async$Qq)
case 9:q.u1(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.ddY(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qq,w)},
ciD(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddZ(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DB(0,x.gb3z())
w=x.d
if(w!=null)w.t()
B.itV(x.e)
x.a2()},
afw(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1D(u.c,u.d),$async$afw)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afw,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2y(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aI(t,t,t,t,C.oP,t,t,t,u.gcck(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iw(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FS
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajv(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AK(s,t),A.az(t,A.xx(A.p(t,A.W(q?H.v6:C.he,C.c,t,t,t,48),C.f,t,t,new A.o(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.de0(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_x.prototype={
S(){return new B.aBx(new A.cx(null,y.A))}}
B.aBx.prototype={
gcKm(){var x,w,v=this.a
if(v.e!==D.U0)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJX(){var x,w,v=this.a
if(v.e!==D.Au)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b4(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcKm()
if(x!=null){v.Ry(x)
v.e=A.dg(R.H0,new B.ddQ(v,x))}w=v.gcJX()
if(w!=null){v.Rx(w)
v.f=A.dg(C.fL,new B.ddR(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Rx(d){return this.cpN(d)},
cpN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.are(d),$async$Rx)
case 3:t=f
x=4
return A.b(B.cff(d),$async$Rx)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.ddI(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rx,w)},
Ry(d){return this.cpO(d)},
cpO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ry=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fYG(d),$async$Ry)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEy(t),$async$Ry)
case 4:if(u.c==null){x=1
break}u.m(new B.ddJ(u))
u.c.L(y.q).f.T(D.aVo)
case 1:return A.h(v,w)}})
return A.i($async$Ry,w)},
gc8a(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccl(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2T(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DE()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fqp)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ee(new B.ddK(),!1,null,y.N)),$async$a2T)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEy(s),$async$a2T)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aVo)
case 1:return A.h(v,w)}})
return A.i($async$a2T,w)},
ab6(d){return this.bNb(d)},
bNb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fx(C.d.aM(t,", "))),$async$ab6)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ab6,w)},
afu(d){return this.bMU(d)},
bMU(d){var x=0,w=A.j(y.H),v=this
var $async$afu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fx(v.a.c)),$async$afu)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fnH)
return A.h(null,w)}})
return A.i($async$afu,w)},
a2N(d){return this.cwT(d)},
cwT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aq8(s.d,4),$async$a2N)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rp(r,"ngmy_doc_share_qr.png"),$async$a2N)
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
return A.i($async$a2N,w)},
gaZr(){var x,w=this.a
if(w.e!==D.Jt)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b4(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b4(x,13))
return null},
ab3(d){return this.bN4(d)},
bN4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZr()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$ab3)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fpo)
case 1:return A.h(v,w)}})
return A.i($async$ab3,w)},
afv(){var x=0,w=A.j(y.H),v=this,u
var $async$afv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wo(),$async$afv)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afv,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2y(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jt&&i!==D.U0&&i!==D.Au
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jt||t===D.U0||t===D.Au?l:A.aI(l,l,l,l,C.ls,l,l,l,m.gb1w(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8a(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jt){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccl(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c5m,D.fVW,new B.ddL(m,d),l)],p))}if(m.a.e===D.Jt&&m.gaZr()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hu(D.c1H,D.fSw,new B.ddM(m,d),l)],p))
if(m.a.e===D.Au){x=(m.w?C.dK:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ad(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FW:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U0){x=(m.r?C.dK:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FW:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.dh(D.bY9,l,D.fZ5,m.gcxf(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oU(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b8,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(M.Dz,l,C.Ws,new B.ddN(m,d),l),1),C.as,A.E(A.dh(C.zQ,l,C.acv,new B.ddO(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a5(1/0,l,A.bI(C.B9,l,m.gb1w(),A.bo(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.ddP(),y.C)}}
B.adw.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.c9(A.x(A.a([w,C.aO,A.p(x,A.qi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bI(C.Ba,x,new B.dd8(d),x)],u),x,x,C.no,v,x,x,x,x,D.fLg,x)}}
B.a_r.prototype={
S(){return new B.aBs(A.zT(C.yJ,C.oe,C.vj))}}
B.aBs.prototype={
t(){this.d.t()
this.a2()},
azr(d){var x,w,v,u,t
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
return A.c4(A.eS(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fT3,x,x,x,1,x,!0),C.w,A.zS(this.d,C.c_,this.gazq()),x,!1,!1,x,x)}}
B.a_y.prototype={
S(){return new B.aBy(A.zT(C.yJ,C.oe,C.vj))},
gd1(){return this.c}}
B.aBy.prototype={
c3W(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahw(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MR("text/plain"),$async$ahw)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fqj)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahw,w)},
abV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hIs(p,!0),$async$abV)
case 3:t=e
p=t==null
s=B.a8g(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fmO)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$abV,w)},
t(){this.d.t()
this.a2()},
azr(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3W(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.asq,v,v,v,w.gbST(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4r,v,v,v,w.gcn9(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.uY:O.PP,v,v,v,v,v),v,v,v,new B.ddT(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h_0,v,v,v,1,v,!0)
u=A.zS(w.d,C.c_,w.gazq())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eDM],s),v),v,!1,!1,v,v)}}
B.bge.prototype={
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
B.aaI.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pu.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yy.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pt.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FR.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ct_.prototype={}
B.FQ.prototype={}
B.aaH.prototype={}
B.avN.prototype={}
B.Yz.prototype={}
var z=a.updateTypes(["aB<~>()","R(jJ)","n(jJ)","Wf(Z)","~()","a_u(Z)","F(F,jJ)","QJ(Z)","~(mq)","cu(FQ)","aB<jJ?>(@)","Wd(Z)","Wh(Z)","D(jJ)","jJ(@)","a9<n,@>(jJ)","a_t(Z)","We(Z)","a_v(Z)","a_s(Z)","a_x(Z)","adw(Z)","ai<jJ>()","a_y(Z)","ady(Z,F)","a_r(Z)","a9<n,aF>(jJ)","cu(Yy)","cu(aaH)","aB<cu>(FQ)"])
B.csW.prototype={
$1(d){var x=this.a
x.x=D.aS8
x.y.I(0,D.aS8)},
$S:75}
B.csX.prototype={
$1(d){var x=this.a
x.x=D.aS7
x.y.I(0,D.aS7)},
$S:75}
B.csY.prototype={
$1(d){var x=this.a
x.aiU(A.ahQ(d.data)).bG(new B.csV(x),y.b)},
$S:75}
B.csV.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csZ.prototype={
$1(d){},
$S:75}
B.ct1.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i1x(d.channel))},
$S:16}
B.ct2.prototype={
$1(d){},
$S:16}
B.ct3.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.il6(w.iceConnectionState)
x.cx=w
if($.hkn())switch(w.a){case 0:x.cy=D.aSd
break
case 1:x.cy=D.aSe
break
case 3:x.cy=D.aSf
break
case 5:x.cy=D.aSb
break
case 6:x.cy=D.aSc
break
case 7:x.cy=D.aa9
break
default:break}},
$S:106}
B.ct4.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.il7(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:106}
B.ct5.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ivt(w.signalingState)},
$S:106}
B.ct6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.itC(w.connectionState)},
$S:106}
B.ct7.prototype={
$1(d){},
$S:106}
B.ct8.prototype={
$1(d){},
$S:16}
B.fy7.prototype={
$1(d){var x=y.F.a(new A.qy([],[]).o4(d.target.result,!1)),w=C.wy.q(x.objectStoreNames,"blobs")
if(!w)C.wv.Gm(x,"blobs")},
$S:164}
B.fXL.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x7.fs(this.b)
$.eY.mJ()
this.c.$1(d)},
$S:391}
B.fXN.prototype={
$1(d){return this.a.$1(B.iaI(this.b,this.c))},
$S:30}
B.fXM.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fXK.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fY_.prototype={
$1(d){var x=this
return B.hwS(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fY0.prototype={
$1(d){var x=this
return B.hwS(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fAN.prototype={
$1(d){var x=this
return B.ceR(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.ddr.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ddo.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceR(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.ddq.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceR(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.ddp.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceR(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.ddt.prototype={
$4(d,e,f,g){var x=null
return A.k4(A.A(A.a([A.aI(x,x,x,x,D.bWM,x,x,x,new B.dds(d),x,x,x,x,x,x),A.E(A.FC(D.Sm,!0,x,!1,C.a3u,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Sm,x,g,C.ao5,0,e,f)},
$C:"$4",
$R:4,
$S:389}
B.dds.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCK.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.p(v,D.bzd,C.f,v,v,D.b8v,v,v,v,v,D.anV,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c09,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.CL,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asG,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dW(C.ds,new B.fCI(d),v),1),C.as,A.E(A.bI(D.fRv,v,new B.fCJ(p,x,d),A.bo(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.H3,v,v,v,v),v)},
$S:63}
B.fCI.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCJ.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fnY)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aE9(v,x))},
$S:0}
B.fDd.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bz3,C.f,w,w,D.ba_,w,w,w,w,D.anV,w,w,1/0),new A.D(C.CL,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hg2(u,"Organization name",C.HC,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hg2(u,"Access code",C.mj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hg2(u,"Member password",C.Dy,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bI(D.h_7,w,new B.fDc(r,q,p,d),A.bo(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.H3,w,w,w,w),w)},
$S:63}
B.fDc.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fo2)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHk(u,x,w))},
$S:0}
B.ceI.prototype={
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
p=C.a.a_(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vR(p,null).dg(0,C.a0D),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ck(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ceO.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceP.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ceQ.prototype={
$1(d){return d.b},
$S:z+2}
B.ceK.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceL.prototype={
$1(d){return d.b},
$S:z+2}
B.ceJ.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ceM.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ceN.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fXY.prototype={
$1(d){return new B.Wd(this.a,null)},
$S:z+11}
B.fXZ.prototype={
$1(d){return new B.Wh(this.a,this.b,this.c,null)},
$S:z+12}
B.e_c.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0l.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e0m.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e0n.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e0k(x,d))},
$S:2}
B.e0k.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0o.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0p.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e0q.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e0r.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0s.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e0t.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0w.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:103}
B.e0u.prototype={
$1(d){var x=this.a
return x.f?null:x.a_S()},
$S:2}
B.e0v.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mQ(D.SD))s=C.v1
else s=C.a.a_(s,"video/")||d.mQ(D.n7)?C.qW:D.ar2
x=this.b.a
w=y.p
return new A.D(C.kB,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garJ(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e_d.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e_e.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ceS.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.ceT.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fYZ.prototype={
$2(d,e){return e===this.a},
$S:348}
B.fva.prototype={
$1(d){return J.k(d)},
$S:17}
B.fAZ.prototype={
$1(d){var x=this.b
B.i8H(C.Hp.ga7z(this.a)).bG(x.gCb(x),y.H)},
$S:124}
B.fB_.prototype={
$1(d){return this.a.dd(0,null)},
$S:124}
B.fB0.prototype={
$0(){return null},
$S:12}
B.cf6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fB1.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
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
return new B.jJ(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fFc.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fzb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzc.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfb.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.h2e.prototype={
$1(d){return new B.a_t(this.a,null)},
$S:z+16}
B.ddn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:8}
B.ddl.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.ddm.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0j.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2_()},
$S:11}
B.e_H.prototype={
$0(){var x=J.bHM(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_I.prototype={
$0(){var x=J.bHM(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_g.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_f(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGn(this.c)}},
$S:0}
B.e_f.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_h.prototype={
$0(){var x=J.bHM(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_m.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_l(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGn(this.c)}},
$S:0}
B.e_l.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e07.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e08.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e_E.prototype={
$1(d){return new B.We(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e_B.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IK(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wi(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.us(),$async$$0)
case 5:s=J.a8(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a29(s.gJ(t)),$async$$0)
case 8:case 7:r.io(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_k.prototype={
$1(d){this.a.adi(d,"No files selected.","Added")},
$S:391}
B.e_M.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_L(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_L.prototype={
$1(d){return d.a},
$S:z+2}
B.e_q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xP.cp().d_w(C.a2p,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jP(o,0,null)}u=2
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
return A.b(B.ard(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.io("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.us(),$async$$0)
case 9:o.io("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e04.prototype={
$1(d){return new B.QJ(this.a.a.c,this.b,null)},
$S:z+7}
B.e05.prototype={
$1(d){return new B.a_v(this.a.a.c,this.b,null)},
$S:z+18}
B.e06.prototype={
$1(d){return new B.a_s(this.a.a.c,this.b,null)},
$S:z+19}
B.e_C.prototype={
$1(d){return new B.QJ(this.a.a.c,this.b,null)},
$S:z+7}
B.e_D.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_Y.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IK(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8i(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.io("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ctg(),$async$$0)
case 5:x=6
return A.b(p.us(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_U(p),r),new B.e_V(),r.k("N<ak.E,n>")).c_(0,new B.e_W())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e_X(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wo(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_U.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e_T(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_T.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_V.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_W.prototype={
$1(d){return d.length!==0},
$S:3}
B.e_X.prototype={
$1(d){var x=this.a
return new B.a_x(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_Z.prototype={
$1(d){return d.a},
$S:z+2}
B.e0_.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_S.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kA,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garJ(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mQ(D.n7)?C.tm:C.nP
p=!x||p.mQ(D.n7)?"Play video":"View"
return new A.bM(new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CH,A.x(A.a([q,o,t,C.aB,B.a_w(!1,u,!1,w,p,new B.e_N(d),v),B.a_w(!1,u,!1,C.ju,"Share via QR",new B.e_O(d),"Letters/numbers QR code"),B.a_w(!1,u,!1,D.a3z,"Send to their Code",new B.e_P(d),"Enter someone else's personal code"),B.a_w(!1,u,!1,C.hB,"Download / save",new B.e_Q(d),v),C.am,B.a_w(!1,u,!0,C.ej,"Delete",new B.e_R(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:526}
B.e_N.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e_O.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e_P.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e_Q.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e_R.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_n.prototype={
$1(d){return d.a},
$S:z+2}
B.e_o.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_p.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8k(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hk(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pC(s.c,s.f),$async$$0)
case 4:u.io(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_j.prototype={
$1(d){var x=this.a
x.ut(new B.e_i(x,d,this.b),"Preparing\u2026")},
$S:391}
B.e_i.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.io("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wi(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.io("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGH(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.io("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_F.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e_G.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.haM(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_z.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.e_v(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.io("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e_w(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e_x(s))
case 5:x=8
return A.b(r.b.iJ(0,C.GY,new B.e_y()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.io("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.us(),$async$$0)
case 9:s.io("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_v.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_s(x,d,e))},
$S:239}
B.e_s.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_w.prototype={
$1(d){return new B.adw(this.a.a,null)},
$S:z+21}
B.e_x.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e_y.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e_A.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jo(o)!=null?3:4
break
case 3:x=5
return A.b(B.a88(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3L(B.Jo(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ard(new B.e_t(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.haL(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.io(q)
x=1
break}x=10
return A.b(s.us(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e_u()).gJ(0)
s.io(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_t.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_r(x,d,e))},
$S:239}
B.e_r.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_u.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.e_K.prototype={
$1(d){return new B.a_y(this.a.a.c,null)},
$S:z+23}
B.e_J.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1D(u.a.c,v.b),$async$$0)
case 2:t.io(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e03.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bM(new A.o(v[2],x,new A.bG(new A.ay(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CH,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kA,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_w(!0,w,!1,C.mj,"My Code",new B.e00(d),"Your personal code & QR \u2014 others send docs to you"),B.a_w(!1,w,!1,D.a3z,"Send to their Code",new B.e01(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_w(!1,w,!1,S.zI,"Import backup",new B.e02(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:526}
B.e00.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e01.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bGX()},
$S:0}
B.e02.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e0g.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jy(D.Sm,x,C.a3u,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.Sm).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:695}
B.e0e.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0f.prototype={
$0(){this.a.ajR()
return null},
$S:0}
B.e0h.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*10)),e)},
$S:103}
B.e0i.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ady(e,w,v,this.b,x.e,x.ccm(w),new B.e0a(x,w),new B.e0b(x,v,w),new B.e0c(x,w),new B.e0d(x,w),null)},
$S:z+24}
B.e0a.prototype={
$0(){this.a.ah3(this.b)
return null},
$S:0}
B.e0b.prototype={
$0(){var x=this.a
return x.m(new B.e09(x,this.b,this.c))},
$S:0}
B.e09.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0c.prototype={
$0(){this.a.OJ(this.b)
return null},
$S:0}
B.e0d.prototype={
$0(){this.a.ajE(this.b)
return null},
$S:0}
B.ddj.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*18)),e)},
$S:103}
B.ddk.prototype={
$3(d,e,f){return A.e4(C.z,f,e,null,null)},
$S:112}
B.ddH.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:103}
B.ddG.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.ddD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.ddE.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.ddF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.ddB.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fX(w,C.z,x,new B.ddz(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.ddA(this.a))
return C.bM},
$S:145}
B.ddz.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddx(this.a))
return C.bM},
$S:196}
B.ddx.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddu(x))},
$S:8}
B.ddu.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddw(x))},
$S:8}
B.ddw.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddC.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddy(this.a))
return C.bM},
$S:196}
B.ddy.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddv(x))},
$S:8}
B.ddv.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddg.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddf(x,d))},
$S:1771}
B.ddf.prototype={
$0(){return this.a.f=this.b===C.vG},
$S:0}
B.ddh.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dde(x,d))},
$S:8}
B.dde.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ddi.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddd(x,d))},
$S:8}
B.ddd.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dd9.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dda.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ddb.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddc.prototype={
$1(d){return this.a.d.NE(0,A.dw(0,0,0,C.i.V(d),0,0))},
$S:6}
B.ddU.prototype={
$0(){var x=this.a.a
return B.rZ(x.c,x.d)},
$S:1772}
B.ddV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.ddX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.ddY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddZ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.de0.prototype={
$0(){var x=this.a
x.m(new B.de_(x))},
$S:0}
B.de_.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.ddQ.prototype={
$1(d){return this.a.Ry(this.b)},
$S:11}
B.ddR.prototype={
$1(d){return this.a.Rx(this.b)},
$S:11}
B.ddI.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.ddJ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddK.prototype={
$1(d){return D.hAL},
$S:z+25}
B.ddP.prototype={
$2(d,e){if(d)B.Wo()},
$S:128}
B.ddL.prototype={
$0(){return this.a.ab6(this.b)},
$S:0}
B.ddM.prototype={
$0(){return this.a.ab3(this.b)},
$S:0}
B.ddN.prototype={
$0(){return this.a.afu(this.b)},
$S:0}
B.ddO.prototype={
$0(){return this.a.a2N(this.b)},
$S:0}
B.dd8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.ddT.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.ddS(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddS.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfd.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.cfe.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfc.prototype={
$2(d,e){return this.bnw(d,e)},
bnw(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wp(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1773}
B.fEP.prototype={
$1(d){if(d===D.aa8&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fEQ.prototype={
$0(){},
$S:12}
B.fFq.prototype={
bp6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fsi(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hrX(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bp6(d,e)},
$S:722}
B.fFp.prototype={
$1(d){var x=this
d.b=new B.fFo(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fFo.prototype={
$1(d){return this.bp5(d)},
bp5(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1E(n,m),$async$$1)
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
return A.b(B.fsi(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8h(m),$async$$1)
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
x(v=B.aBv.prototype,"gck0","R7",0)
x(v,"gckS","JT",0)
x(v,"gckn","yK",0)
x(v=B.aFw.prototype,"gccg","afs",0)
x(v,"gcch","a_R",0)
x(v,"gczI","ajl",0)
x(v=B.aFz.prototype,"gcci","a_S",0)
x(v,"gczJ","a37",0)
x(B.aFx.prototype,"gccj","aft",0)
x(B.aBu.prototype,"gcco","ccp",4)
x(v=B.aFy.prototype,"gcko","a13",0)
x(v,"gcyi","cyj",4)
x(v,"gb4R","aAS",0)
x(v,"gcBd","ajL",0)
x(v,"gbTp","YD",0)
x(v,"gccn","EQ",0)
x(B.aBw.prototype,"gb8D","a36",0)
x(B.aBt.prototype,"gccq","a_T",0)
x(v=B.aBz.prototype,"gb3z","ciD",4)
x(v,"gcck","afw",0)
x(v=B.aBx.prototype,"gcxf","a2T",0)
x(v,"gb1w","afv",0)
w(B.aBs.prototype,"gazq","azr",8)
x(v=B.aBy.prototype,"gcn9","ahw",0)
x(v,"gbST","abV",0)
w(v,"gazq","azr",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.ct_,B.aaH,B.avN,B.aE9,B.aHk,B.jJ,B.ade,B.byA,B.FQ,B.Yz])
w(B.ct0,B.ct_)
w(B.b6L,B.aaH)
x(A.hs,[B.csW,B.csX,B.csY,B.csV,B.csZ,B.ct1,B.ct2,B.ct3,B.ct4,B.ct5,B.ct6,B.ct7,B.ct8,B.fy7,B.fXL,B.fXN,B.fXM,B.fY_,B.fY0,B.fAN,B.ddo,B.ddq,B.ddp,B.ddt,B.fCK,B.fDd,B.ceI,B.ceP,B.ceQ,B.ceL,B.ceJ,B.ceM,B.ceN,B.fXY,B.fXZ,B.e0n,B.e0w,B.e0u,B.e0v,B.fva,B.fAZ,B.fB_,B.cf6,B.fB1,B.fFc,B.fzb,B.fzc,B.cfb,B.h2e,B.ddn,B.ddl,B.e0j,B.e_f,B.e_l,B.e_E,B.e_k,B.e_L,B.e04,B.e05,B.e06,B.e_C,B.e_U,B.e_T,B.e_V,B.e_W,B.e_X,B.e_Z,B.e0_,B.e_S,B.e_n,B.e_o,B.e_j,B.e_F,B.e_w,B.e_u,B.e_K,B.e03,B.e0g,B.e0h,B.ddj,B.ddk,B.ddH,B.ddG,B.ddB,B.ddz,B.ddx,B.ddA,B.ddC,B.ddy,B.ddg,B.ddh,B.ddi,B.ddc,B.ddQ,B.ddR,B.ddK,B.cfd,B.cfe,B.fEP,B.fFp,B.fFo])
w(B.b6M,B.avN)
x(A.iR,[B.fXK,B.ddr,B.dds,B.fCI,B.fCJ,B.fDc,B.e_c,B.e0l,B.e0m,B.e0k,B.e0o,B.e0p,B.e0q,B.e0r,B.e0s,B.e0t,B.e_d,B.e_e,B.fB0,B.ddm,B.e_H,B.e_I,B.e_g,B.e_h,B.e_m,B.e07,B.e08,B.e_B,B.e_M,B.e_q,B.e_D,B.e_Y,B.e_N,B.e_O,B.e_P,B.e_Q,B.e_R,B.e_p,B.e_i,B.e_G,B.e_z,B.e_s,B.e_x,B.e_y,B.e_A,B.e_r,B.e_J,B.e00,B.e01,B.e02,B.e0e,B.e0f,B.e0a,B.e0b,B.e09,B.e0c,B.e0d,B.ddD,B.ddE,B.ddF,B.ddu,B.ddw,B.ddv,B.ddf,B.dde,B.ddd,B.dd9,B.dda,B.ddb,B.ddU,B.ddV,B.ddW,B.ddX,B.ddY,B.ddZ,B.de0,B.de_,B.ddI,B.ddJ,B.ddL,B.ddM,B.ddN,B.ddO,B.dd8,B.ddT,B.ddS,B.fEQ])
x(A.l6,[B.adx,B.On,B.aaI,B.Pu,B.Yy,B.Pt,B.FR])
x(A.af,[B.a_u,B.Wd,B.Wh,B.We,B.a_t,B.Wf,B.a_v,B.a_s,B.QJ,B.a_x,B.a_r,B.a_y])
x(A.ah,[B.aBv,B.aFw,B.aFz,B.aFx,B.aBu,B.aFy,B.aBw,B.aBt,B.aBz,B.aBx,B.aBs,B.aBy])
x(A.aw,[B.ae0,B.aBr,B.bgd,B.ady,B.adw,B.bge])
x(A.jD,[B.ceO,B.ceK,B.ceS,B.ceT,B.fYZ,B.e_v,B.e_t,B.e0i,B.ddP,B.cfc,B.fFq])
x(A.j9,[B.blG,B.byc])})()
A.ja(b.typeUniverse,JSON.parse('{"b6L":{"aaH":[]},"b6M":{"avN":[]},"a_u":{"af":[],"v":[]},"aBv":{"ah":["a_u"]},"ae0":{"aw":[],"v":[]},"Wd":{"af":[],"v":[]},"Wh":{"af":[],"v":[]},"aFw":{"ah":["Wd"]},"aFz":{"ah":["Wh"]},"blG":{"j9":[]},"We":{"af":[],"v":[]},"aFx":{"ah":["We"]},"a_t":{"af":[],"v":[]},"Wf":{"af":[],"v":[]},"ady":{"aw":[],"v":[]},"a_v":{"af":[],"v":[]},"a_s":{"af":[],"v":[]},"QJ":{"af":[],"v":[]},"a_x":{"af":[],"v":[]},"adw":{"aw":[],"v":[]},"a_r":{"af":[],"v":[]},"a_y":{"af":[],"v":[]},"aBu":{"ah":["a_t"]},"byc":{"j9":[]},"aFy":{"ah":["Wf"]},"aBr":{"aw":[],"v":[]},"bgd":{"aw":[],"v":[]},"aBw":{"ah":["a_v"]},"aBt":{"ah":["a_s"]},"aBz":{"ah":["QJ"]},"aBx":{"ah":["a_x"]},"aBs":{"ah":["a_r"]},"aBy":{"ah":["a_y"]},"bge":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("mL"),k:x("MP()"),o:x("bs<n,n>"),F:x("ry"),g:x("aB<jJ?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bk>"),Y:x("O<a9<n,R>>"),t:x("O<a9<n,@>>"),r:x("O<jJ>"),w:x("O<+file,name(lW,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j9>"),a:x("O<dH>"),p:x("O<v>"),Z:x("O<F>"),G:x("bk"),A:x("cx<ah<af>>"),n:x("ai<jJ>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iy"),e:x("izx"),af:x("F1"),U:x("jJ"),b:x("cu"),C:x("aF"),aK:x("wG"),ab:x("FQ"),br:x("avN"),v:x("Yz"),N:x("n"),X:x("bq<H>"),Q:x("m8"),D:x("dH"),aw:x("bf<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jJ>>"),aW:x("c3<dH?>"),aY:x("c3<~>"),cx:x("adx"),b1:x("bl<ai<jJ>>"),cf:x("bl<dH?>"),d4:x("bl<~>"),c4:x("aE9"),bG:x("aHk"),q:x("md"),B:x("pV<FQ>"),c6:x("pV<aaI>"),y:x("R"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bk?"),_:x("ai<jJ>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jJ?"),R:x("aF?"),c:x("Yz?"),d:x("+answerQr,transfer(n,aB<ai<jJ>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,F)?"),L:x("+fileCount,mode,qrPayload(F,On,n)?"),aX:x("+fileCount,qrPayload,token(F,n,n)?"),T:x("n?"),K:x("dH?"),cm:x("ade?"),bk:x("aE9?"),ag:x("aHk?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b6R=new A.ay(C.aD,2,C.r,-1)
D.ca_=new A.a7(C.a5,C.a9,C.x,C.a5C,null,null)
D.b8v=new A.o(null,null,null,C.mJ,null,D.ca_,C.n)
D.ba_=new A.o(null,null,null,C.mJ,null,E.Im,C.n)
D.agK=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aif=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aji=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.al2=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fM9=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h04=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.F7,null,null,null,null,null,null,null,null,null)
D.dmt=x([D.fM9,C.am,D.h04],y.p)
D.byU=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dmt,null)
D.h4y=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fQH=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.F7,null,null,null,null,null,null,null,null,null)
D.dDL=x([D.h4y,C.am,D.fQH],y.p)
D.bz3=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dDL,null)
D.h0I=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fUF=new A.B("Enter the access code and password from your organization.",null,G.F7,null,null,null,null,null,null,null,null,null)
D.dBu=x([D.h0I,C.am,D.fUF],y.p)
D.bzd=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dBu,null)
D.bFu=new A.Q(16,10,16,28)
D.bFC=new A.Q(16,14,16,4)
D.bGR=new A.Q(20,0,20,16)
D.bHn=new A.Q(20,8,20,16)
D.anV=new A.Q(24,22,24,20)
D.a3z=new A.a_(63394,"MaterialIcons",!1)
D.ar2=new A.a_(63515,"MaterialIcons",!1)
D.bUL=new A.a_(983813,"MaterialIcons",!1)
D.bRT=new A.a_(62867,"MaterialIcons",!1)
D.bVH=new A.ae(D.bRT,44,C.c,null,null,null)
D.bWM=new A.ae(C.kb,null,C.ab,null,null,null)
D.bY9=new A.ae(C.jv,18,null,null,null,null)
D.bZY=new A.ae(D.a3z,26,C.c,null,null,null)
D.c_y=new A.ae(C.Dn,null,null,null,null,null)
D.c09=new A.ae(C.Dv,null,null,null,null,null)
D.c1l=new A.ae(W.a3K,null,null,null,null,null)
D.c1H=new A.ae(C.hR,16,null,null,null,null)
D.c5m=new A.ae(C.tl,16,null,null,null,null)
D.bVZ=new A.ae(C.mj,null,null,null,null,null)
D.c6e=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c0H=new A.ae(C.HC,null,null,null,null,null)
D.c6j=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c0H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWj=new A.ae(C.Dy,null,null,null,null,null)
D.c6u=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cVQ=x([C.fq,C.b2,C.aD],y.O)
D.cbW=new A.a7(C.ay,C.aC,C.x,D.cVQ,null,null)
D.cVe=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Sm=x([C.fq,C.aD],y.O)
D.SD=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dvz=x([C.mR,C.aD],y.O)
D.eq0={iceServers:0}
D.aME={urls:0}
D.dHr=new A.bs(D.aME,["stun:stun.l.google.com:19302"],y.o)
D.dHq=new A.bs(D.aME,["stun:stun1.l.google.com:19302"],y.o)
D.dbR=x([D.dHr,D.dHq],A.at("O<a9<n,n>>"))
D.dGJ=new A.bs(D.eq0,[D.dbR],A.at("bs<n,@>"))
D.Jt=new B.On(0,"lanDirect")
D.U_=new B.On(1,"cloudStash")
D.dUm=new B.On(2,"inlineInstant")
D.U0=new B.On(3,"webrtcLink")
D.Au=new B.On(4,"videoCloud")
D.h03=new A.B("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cL0=x([E.asP,C.ae,D.h03],y.p)
D.few=new A.c7(C.aM,C.b8,C.h,C.l,null,C.p,null,0,D.cL0,null)
D.exu=new A.D(C.cp,D.few,null)
D.fCx=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IS,null,null,null)
D.fMJ=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fCx,null,C.K,null,null,null,null,null,null,null)
D.ewF=new A.D(C.CO,D.fMJ,null)
D.bez=new A.cj(C.z,null,null,D.ewF,null)
D.eDM=new A.cK(0,null,0,28,null,null,D.bez,null)
D.eE5=new B.aaI(0,"RTCDataChannelConnecting")
D.aS7=new B.aaI(1,"RTCDataChannelOpen")
D.aS8=new B.aaI(3,"RTCDataChannelClosed")
D.eE6=new B.FR(0,"RTCIceConnectionStateNew")
D.eE7=new B.FR(1,"RTCIceConnectionStateChecking")
D.eE8=new B.FR(2,"RTCIceConnectionStateCompleted")
D.eE9=new B.FR(3,"RTCIceConnectionStateConnected")
D.eEa=new B.FR(4,"RTCIceConnectionStateCount")
D.eEb=new B.FR(5,"RTCIceConnectionStateFailed")
D.eEc=new B.FR(6,"RTCIceConnectionStateDisconnected")
D.aS9=new B.FR(7,"RTCIceConnectionStateClosed")
D.aSa=new B.Yy(0,"RTCIceGatheringStateNew")
D.eEd=new B.Yy(1,"RTCIceGatheringStateGathering")
D.aa8=new B.Yy(2,"RTCIceGatheringStateComplete")
D.aa9=new B.Pt(0,"RTCPeerConnectionStateClosed")
D.aSb=new B.Pt(1,"RTCPeerConnectionStateFailed")
D.aSc=new B.Pt(2,"RTCPeerConnectionStateDisconnected")
D.aSd=new B.Pt(3,"RTCPeerConnectionStateNew")
D.aSe=new B.Pt(4,"RTCPeerConnectionStateConnecting")
D.aSf=new B.Pt(5,"RTCPeerConnectionStateConnected")
D.eEe=new B.Pu(0,"RTCSignalingStateStable")
D.eEf=new B.Pu(1,"RTCSignalingStateHaveLocalOffer")
D.eEg=new B.Pu(2,"RTCSignalingStateHaveRemoteOffer")
D.eEh=new B.Pu(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eEi=new B.Pu(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSg=new B.Pu(5,"RTCSignalingStateClosed")
D.fjC=new A.av(160,48)
D.bfO=new A.fn(2,null,null,null,null,C.aD,null,null,null,null)
D.fl9=new A.a5(16,16,D.bfO,null)
D.fQ1=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fmD=new A.b0(D.fQ1,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXJ=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fmH=new A.b0(D.fXJ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5B=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fmO=new A.b0(D.h5B,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fPC=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fnd=new A.b0(D.fPC,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0T=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVo=new A.b0(D.h0T,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2k=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new A.b0(D.h2k,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h74=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fnY=new A.b0(D.h74,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h50=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fo2=new A.b0(D.h50,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6f=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.foR=new A.b0(D.h6f,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOc=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fpo=new A.b0(D.fOc,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZD=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fpJ=new A.b0(D.fZD,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSl=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqf=new A.b0(D.fSl,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h79=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fqj=new A.b0(D.h79,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOs=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fqp=new A.b0(D.fOs,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fN6=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fqE=new A.b0(D.fN6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fJQ=new A.B("NGMY DOC SHARE",null,C.aWO,null,null,null,null,null,null,null,null,null)
D.fLg=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fMh=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fR7=new A.B("Organization settings",null,C.cF,null,null,null,null,null,null,null,null,null)
D.fRv=new A.B("Sign in",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fSw=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fT3=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fVW=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fYM=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.fZ5=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZp=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h_0=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_7=new A.B("Create portal",null,C.cd,null,null,null,null,null,null,null,null,null)
D.h_w=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h2Q=new A.B("Share files & videos\nwith a scan.",null,C.aWR,null,null,null,null,null,null,null,null,null)
D.h39=new A.B("Add files",null,C.cd,null,null,null,null,null,null,null,null,null)
D.hAL=new B.a_r(null)
D.adw=new B.adx(0,"docShare")
D.adx=new B.adx(1,"gate")
D.X6=new B.adx(2,"gateNoIndividual")})();(function staticFields(){$.aQ8=null
$.fpT=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahD=A.T(y.N,A.at("lW"))
$.S6=A.T(y.N,y.D)
$.fqz=A.T(y.N,A.at("ade"))
$.cf5=A.T(y.S,A.at("byA"))
$.hrW=1
$.igN=null
$.igM=null
$.i8_=null
$.hge=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iA1","hKs",()=>new B.ct0())
x($,"ixW","hkn",()=>C.a.q(A.bB(A.bB(A.bB(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["YodFL7z0DxpFvxpedtCuUIHeB1w="]=a.current})($__dart_deferred_initializers__);