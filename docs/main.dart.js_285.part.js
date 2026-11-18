((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,P,E,G,Q,R,S,I,K,B={ct3:function ct3(){},
i1M(d){var x=null,w=new B.b6P(d,D.eEA,new A.pV(x,x,y.c6),new A.pV(x,x,y.B))
w.bCN(d)
return w},
b6P:function b6P(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
csZ:function csZ(d){this.a=d},
ct_:function ct_(d){this.a=d},
ct0:function ct0(d){this.a=d},
csY:function csY(d){this.a=d},
ct1:function ct1(d){this.a=d},
i1N(d,e){var x=y.N
x=new B.b6Q(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCO(d,e)
return x},
b6Q:function b6Q(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ct4:function ct4(d){this.a=d},
ct5:function ct5(d){this.a=d},
ct6:function ct6(d){this.a=d},
ct7:function ct7(d){this.a=d},
ct8:function ct8(d){this.a=d},
ct9:function ct9(d){this.a=d},
cta:function cta(d){this.a=d},
ctb:function ctb(d){this.a=d},
hfZ(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x6.GW(x,"ngmy_doc_share_v1",new B.fyb(),1)},
i8u(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.es(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wT(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cL.aN(d)
return x}catch(w){return v}return v},
Sn(d,e){return B.io1(d,e)},
io1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQa
x=7
return A.b(o==null?$.aQa=B.hfZ():o,$async$Sn)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mp(s,"blobs","readwrite")
C.iE.mh(J.mo(q,"blobs"),r,d)
x=8
return A.b(J.oC(q),$async$Sn)
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
return A.i($async$Sn,w)},
Sm(d){return B.io0(d)},
io0(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQa
x=7
return A.b(o==null?$.aQa=B.hfZ():o,$async$Sm)
case 7:s=f
r=J.mp(s,"blobs","readonly")
x=8
return A.b(C.iE.xP(J.mo(r,"blobs"),d),$async$Sm)
case 8:q=f
x=9
return A.b(J.oC(r),$async$Sm)
case 9:o=B.i8u(q)
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
return A.i($async$Sm,w)},
aip(d){return B.io_(d)},
io_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aip=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQa
x=7
return A.b(p==null?$.aQa=B.hfZ():p,$async$aip)
case 7:s=f
r=J.mp(s,"blobs","readwrite")
C.iE.Gr(J.mo(r,"blobs"),d)
x=8
return A.b(J.oC(r),$async$aip)
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
return A.i($async$aip,w)},
fyb:function fyb(){},
iaX(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brC(w,v))}return u},
hHF(d,e){var x,w={},v=A.aYR("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fXT(w,v,e)
C.x8.zd(v,"change",new B.fXV(w,v,!1))
C.x8.zd(v,"cancel",new B.fXU(w))
$.eY.mJ()
v.click()
A.bN(C.am5,new B.fXS(w),y.H)},
fXT:function fXT(d,e,f){this.a=d
this.b=e
this.c=f},
fXV:function fXV(d,e,f){this.a=d
this.b=e
this.c=f},
fXU:function fXU(d){this.a=d},
fXS:function fXS(d){this.a=d},
DL(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUI()?3:4
break
case 3:x=5
return A.b(B.hCf(e,d,s,!0,!1,f,g,h,!1,i),$async$DL)
case 5:x=1
break
case 4:x=6
return A.b(B.RZ(d,s,f,g,h,i),$async$DL)
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
return A.b(B.Jr(s,d),$async$DL)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.ftE(s,d),$async$DL)
case 14:x=12
return A.b(r.hCf(q,p,o,n,m,l,k,j,a1,i),$async$DL)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ee(new B.fY7(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ee(new B.fY8(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
RZ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RZ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1A(e),$async$RZ)
case 3:u=k
x=4
return A.b(B.ar6(d,e,!1),$async$RZ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jr(e,d),$async$RZ)
case 7:if(k){v=D.adB
x=1
break}x=8
return A.b(B.Wh(e),$async$RZ)
case 8:v=t?D.X7:D.adC
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1y(d,e)){v=D.adB
x=1
break}x=11
return A.b(B.Wh(e),$async$RZ)
case 11:v=t?D.X7:D.adC
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.haP(d,e)){v=D.adB
x=1
break}x=14
return A.b(B.Wh(e),$async$RZ)
case 14:v=D.X7
x=1
break
case 13:v=t?D.X7:D.adC
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RZ,w)},
ftE(d,e){var x=0,w=A.j(y.y),v
var $async$ftE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1y(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1A(d),$async$ftE)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftE,w)},
hCf(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ee(new B.fAR(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hx1(d,e,f,g,h,i,j){return new B.a_v(e,j,d,g,h,i,f,null)},
fCL(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fCL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fCO(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fCL)
case 3:r=f
t.U$=u
t.R$=0
s.U$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCL,w)},
fDf(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fDf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bT(C.L,null,new B.fDh(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fDf)
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
return A.i($async$fDf,w)},
hga(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bz(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fQ7(d,e){var x=0,w=A.j(y.H),v
var $async$fQ7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wh(e),$async$fQ7)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eq()
case 1:return A.h(v,w)}})
return A.i($async$fQ7,w)},
fY7:function fY7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fY8:function fY8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adB:function adB(d,e){this.a=d
this.b=e},
fAR:function fAR(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_v:function a_v(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBx:function aBx(){this.c=this.a=this.d=null},
ddu:function ddu(d,e){this.a=d
this.b=e},
ddr:function ddr(d){this.a=d},
ddt:function ddt(d){this.a=d},
dds:function dds(d){this.a=d},
ddw:function ddw(){},
ddv:function ddv(d){this.a=d},
ae4:function ae4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEb:function aEb(d,e){this.a=d
this.b=e},
aHm:function aHm(d,e,f){this.a=d
this.b=e
this.c=f},
fCO:function fCO(d,e,f){this.a=d
this.b=e
this.c=f},
fCM:function fCM(d){this.a=d},
fCN:function fCN(d,e,f){this.a=d
this.b=e
this.c=f},
fDh:function fDh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fDg:function fDg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ceK(d,e,f,g,h){return B.hXD(d,e,f,g,h)},
hXD(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ceK=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iw(r.dN(d,new B.ceL(s,e,h,g,f,q),y.g),y.l),$async$ceK)
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
return A.i($async$ceK,w)},
b1v(d,e,f,g,h){return B.hXE(d,e,f,g,h)},
hXE(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1v=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awD("GET",d)
o=A.h7e()
if(o==null)o=new A.ML(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.GZ),$async$b1v)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D1(),$async$b1v)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cl(q,h,o,e,f,"Received via QR")
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
return A.i($async$b1v,w)},
b1u(d){return B.hXB(d)},
hXB(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dg(0,C.ov),$async$b1u)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.mj(A.mf(p.e)).cC(0,p.w),null)
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
return A.i($async$b1u,w)},
ceJ(d){return B.hXC(d)},
hXC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dg(0,C.qE),$async$ceJ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mj(A.mf(q.e)).cC(0,q.w)
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
return A.i($async$ceJ,w)},
ceL:function ceL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jK:function jK(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jp(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hXJ(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jp(C.a.b3(t,u.length))}return null},
hXK(d){var x=B.Jp(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hXF(){var x,w=$.oz(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a88(d){return B.hXG(d)},
hXG(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a88=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bN),$async$a88)
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
return A.i($async$a88,w)},
a89(d,e){return B.hXH(d,e)},
hXH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a89=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hO(d,e,!1,!1,C.cP,null),$async$a89)
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
return A.i($async$a89,w)},
Ck(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Ck)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.u(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jp(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8a(r),$async$Ck)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a88("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ck)
case 7:q=f
s=q==null?null:J.u(q,"code")
p=B.Jp(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ck)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hXF()
x=14
return A.b(B.a8a(m),$async$Ck)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a89("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 15:k=f
x=16
return A.b(B.a89("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ck)
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
return A.i($async$Ck,w)},
a8a(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8a=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jp(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a88("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8a)
case 3:u=f
t=u==null?null:J.u(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
a8b(d,e,f,g){return B.hXL(d,e,f,g)},
hXL(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8b=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jp(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8a(r),$async$a8b)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.ceR())>1048576||g.aU(d,new B.ceS())){v=B.Fk(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8m("myCode",d,a0),$async$a8b)
case 4:u=a3
try{t=C.W.aP(0,u,null)
if(y.f.b(t)){s=J.u(t,"files")
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
return A.b(B.b1D(u,g.gJ(d),a0),$async$a8b)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oz().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.ceT(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1w(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8b)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8b,w)},
Fk(d,e,f,g,h){return B.hXI(d,e,f,g,h)},
hXI(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fk=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$Fk)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cF(a6,0,new B.ceN())
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
a1=B.Jt(a9,q)
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
return A.b(new A.abQ(a1.a,a4,"media",a1.d,a2).xM(m,n,new A.EB(!0,q.c)),$async$Fk)
case 12:J.c4(r,m);++o
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
return A.b(B.aSN(r),$async$Fk)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.ceO(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1w(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fk)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSN(r),$async$Fk)
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
b1w(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a88(t),$async$b1w)
case 3:s=g
r=y.aL.a(J.u(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.ceM(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a89(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1w,w)},
Om(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Om=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a88("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Om)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.u(t,"deliveries")
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
return A.b(B.b1x(k,a0),$async$Om)
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
return A.b(B.b1C(h),$async$Om)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wo(g,a0),$async$Om)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.ceP(),q),n)
d=A.C(new A.Y(r,new B.ceQ(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cY(d,0,A.dD(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a89("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Om)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b1x(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1x=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.is1(k,j)
C.d.u(s,i)
x=5
return A.b(B.DJ(l,m,"Received via My Code",t,e,i),$async$b1x)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSN(s),$async$b1x)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1x,w)},
ceR:function ceR(){},
ceS:function ceS(){},
ceT:function ceT(){},
ceN:function ceN(){},
ceO:function ceO(){},
ceM:function ceM(){},
ceP:function ceP(){},
ceQ:function ceQ(){},
fY4(d,e){var x=0,w=A.j(y.H)
var $async$fY4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ee(new B.fY5(e),!1,null,y.H)),$async$fY4)
case 2:return A.h(null,w)}})
return A.i($async$fY4,w)},
bGK(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGK=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ee(new B.fY6(g,e,f),!1,null,y.y)),$async$bGK)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGK,w)},
fY5:function fY5(d){this.a=d},
fY6:function fY6(d,e,f){this.a=d
this.b=e
this.c=f},
We:function We(d,e){this.c=d
this.a=e},
aFy:function aFy(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_f:function e_f(d,e){this.a=d
this.b=e},
Wi:function Wi(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFB:function aFB(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e0o:function e0o(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0q:function e0q(d){this.a=d},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0r:function e0r(d){this.a=d},
e0s:function e0s(d){this.a=d},
e0t:function e0t(d,e){this.a=d
this.b=e},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0w:function e0w(d){this.a=d},
e0z:function e0z(){},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d,e){this.a=d
this.b=e},
blJ:function blJ(){},
Wf:function Wf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFz:function aFz(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_g:function e_g(d){this.a=d},
e_h:function e_h(d){this.a=d},
haQ(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hXN(d){var x=d.l5
if(x>=0)return x
return 4.99},
hXM(d){var x=d.lL,w=y.N
w=x.jp(x,new B.ceV(),w,w)
return w},
hs1(d){var x=d.kI,w=y.N
w=x.jp(x,new B.ceW(),w,w)
return w},
b1A(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1A)
case 7:s=f
r=A.w(p)
r=A.aV(J.u(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b1A,w)},
a8d(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a8d)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a8d)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
Wh(d){var x=0,w=A.j(y.H),v,u
var $async$Wh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wh)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
haP(d,e){var x,w,v
if(B.hXN(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hXM(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b1y(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hs1(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hs2(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hs1(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
ar7(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ar7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$ar7)
case 7:s=f
r=A.w(p)
r=A.ep(J.u(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$ar7,w)},
ar8(d){var x=0,w=A.j(y.H),v,u,t
var $async$ar8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ar7(d),$async$ar8)
case 3:u=f
x=5
return A.b(A.aA(),$async$ar8)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$ar8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ar8,w)},
ar6(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ar6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.haQ(d)
if(u<=0){v=!1
x=1
break}if(B.haP(d,e)){v=!1
x=1
break}x=3
return A.b(B.ar7(e),$async$ar6)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar6,w)},
b1z(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jr(e,d),$async$b1z)
case 3:if(g){v=-1
x=1
break}u=B.haQ(d)
if(u<=0){v=-1
x=1
break}if(B.haP(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ar7(e),$async$b1z)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1z,w)},
ceY(d,e,f){var x=0,w=A.j(y.y),v
var $async$ceY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jr(e,d),$async$ceY)
case 3:if(h){v=!1
x=1
break}v=B.ar6(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceY,w)},
ceX(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ceX=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ceY(d,u,i.gUI()),$async$ceX)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceX,w)},
a8c(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8c=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUI()){v=!0
x=1
break}if(B.b1y(d,u)){v=!0
x=1
break}x=5
return A.b(A.lF(u,C.Un),$async$a8c)
case 5:x=k?3:4
break
case 3:B.hs2(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8c)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lk(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Un,"Doc Share for Organizations"),$async$a8c)
case 7:if(!k){v=!1
x=1
break}B.hs2(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8c)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8c,w)},
ceV:function ceV(){},
ceW:function ceW(){},
fZ4(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fZ4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fZ4)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fpX.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hQ([r],e.c))
s.toString
$.fpX.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZ4,w)},
iua(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fpX.bq($.fpX,new B.fZ6(d))},
fZ6:function fZ6(d){this.a=d},
frz(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$frz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hQ([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jq,null,y.H),$async$frz)
case 3:C.Bt.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frz,w)},
ahh(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fqD.n(0,d,new B.adi(A.bp(e,!0,v)))
x=3
return A.b(A.aA(),$async$ahh)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahh)
case 2:return A.h(null,w)}})
return A.i($async$ahh,w)},
ahb(d){return B.icQ(d)},
icQ(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fqD.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ahb)
case 3:u=j.aV(i.u(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.u(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b8(s,new B.fve(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.u(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adi(r)
$.fqD.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
RP(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sn(d,u),$async$RP)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RP,w)},
aQw(d){return B.icO(d)},
icO(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sm(d),$async$aQw)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQw)
case 4:s=f
r=A.aV(J.u(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cL.aN(r)
x=!J.ct(q)?9:10
break
case 9:B.RP(d,q)
x=11
return A.b(J.h7(s,d),$async$aQw)
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
return A.i($async$aQw,w)},
i8W(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cc(J.es(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cc(A.wT(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cc(d)),y.K)
return A.f4(null,y.K)},
a3_(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bl($.bE,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fB2(r,t),!1,s)
A.fC(r,"error",new B.fB3(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iJ(0,C.Oe,new B.fB4())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3_,w)},
aQQ(d,e,f){return B.ifc(d,e,f)},
ifc(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQQ=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3_(i),$async$aQQ)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sn(o,p),$async$aQQ)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahh(k,j,s),$async$aQQ)
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
return A.i($async$aQQ,w)},
aQP(d,e,f){return B.ifb(d,e,f)},
ifb(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQP=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQQ(d,e,f),$async$aQP)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3_(f),$async$aQP)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S7.n(0,s,r)
x=11
return A.b(B.RP(s,r),$async$aQP)
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
return A.i($async$aQP,w)},
Cl(d,e,f,g,h,i){return B.hXW(d,e,f,g,h,i)},
hXW(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cT.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jK(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1G(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RP(s,d),$async$Cl)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cl)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cQ.gcr().aN(d)),$async$Cl)
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
return A.b(B.Be(e),$async$Cl)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Hg(e,j),$async$Cl)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cl,w)},
Wj(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wj=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Be(d),$async$Wj)
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
k=B.hs4(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jK(m,n,k,l,j,"From folder",null,B.b1G(),null)
$.ahH.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3_(o),$async$Wj)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S7.n(0,h,g)
B.RP(h,g)
x=9
break
case 10:x=11
return A.b(B.aQP(d,m,o),$async$Wj)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wj)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
haU(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$haU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hs4(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Js(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cl(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haU,w)},
Js(d,e,f,g,h,i){return B.hXV(d,e,f,g,h,i)},
hXV(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Js=A.e(function(a5,a6){if(a5===1){t.push(a6)
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
return A.b(j.C(),$async$Js)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SV(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kP(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sn(k,l),$async$Js)
case 11:J.c4(q,k);++p
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
return A.b(j.a1(0),$async$Js)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sn(k,new Uint8Array(A.cc(n))),$async$Js)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahh(r,q,g),$async$Js)
case 16:f=new B.jK(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1G(),null)
x=17
return A.b(B.Be(d),$async$Js)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Hg(d,e),$async$Js)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Js,w)},
Wl(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wl=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahH.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3_(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahb(s),$async$Wl)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sm(u[o]),$async$Wl)
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
v=A.wT(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S7.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rZ(d,e),$async$Wl)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S7.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wT(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
hs4(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rZ(d,e){return B.hXX(d,e)},
hXX(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rZ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S7.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahH.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3_(s),$async$rZ)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S7.n(0,f,r)
B.RP(f,r)
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
return A.b(B.ahb(f),$async$rZ)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAi(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sm(g[l]),$async$rZ)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqg()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S7.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQw(f),$async$rZ)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S7.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wl(a0,a1,0,g),$async$rZ)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.H6.n(0,f,h)
$.S7.n(0,f,h)
B.RP(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rZ,w)},
hY_(d){var x,w,v=$.ahH.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hY0(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hQ([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hXY(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
are(d,e,f,g,h){return B.hXZ(d,e,f,g,h)},
hXZ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$are=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahH.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3_(s),$async$are)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rZ(g,e),$async$are)
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
return A.b(n.iD(d).xM(h,r,new A.EB(!0,e.c)),$async$are)
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
return A.i($async$are,w)},
hs6(d,e,f,g,h){var x,w,v,u,t=$.hs5
$.hs5=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cf8.n(0,t,new B.byD(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAi(u)))
return t},
haV(d){var x=0,w=A.j(y.H)
var $async$haV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$haV,w)},
Jt(d,e){var $async$Jt=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahH.h(0,h)
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
return A.qC(B.Wl(d,e,p,o<q?o:q),$async$Jt,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qC(A.GE(n),$async$Jt,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qC(B.ahb("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jt,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qC(B.Sm(h[l]),$async$Jt,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qC(A.GE(k),$async$Jt,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qC(B.rZ(d,e),$async$Jt,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qC(A.GE(A.wT(j,p,o<i?o:i)),$async$Jt,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qC(null,0,w)
case 2:return A.qC(t.at(-1),1,w)}})
var x=0,w=A.hB5($async$Jt,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hD_(w)},
b1I(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cf8.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5Y(),$async$b1I)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1I,w)},
Wk(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cf8.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5Y(),$async$Wk)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahh(r.c,u,r.z),$async$Wk)
case 4:t=new B.jK(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1G(),null)
u=r.a
x=5
return A.b(B.Be(u),$async$Wk)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wk)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
a8j(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cf8.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aip(u[s]),$async$a8j)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
cfa(d,e,f){var x=0,w=A.j(y.H)
var $async$cfa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDG(d,e,f),$async$cfa)
case 2:return A.h(null,w)}})
return A.i($async$cfa,w)},
cfb(d,e,f){var x=0,w=A.j(y.H)
var $async$cfb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDH(d,e,f),$async$cfb)
case 2:return A.h(null,w)}})
return A.i($async$cfb,w)},
Fl(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Be(d),$async$Fl)
case 2:p=g
J.nY(p,new B.cf9(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahH.W(0,e)
x=3
return A.b(B.ahb(v),$async$Fl)
case 3:u=g
$.fqD.W(0,v)
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
return A.b(B.aip(s[q]),$async$Fl)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aip(v),$async$Fl)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fl)
case 14:return A.h(null,w)}})
return A.i($async$Fl,w)},
b1H(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rZ(d,e),$async$b1H)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.frz(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1H,w)},
Be(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Be=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Be)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.u(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fB5(),y.U)
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
t=J.b8(e,new B.fFg(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bDG(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Be(d),$async$bDG)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzf(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGo(f))
x=4
return A.b(B.Hg(d,u),$async$bDG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDG,w)},
bDH(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Be(d),$async$bDH)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fzg(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPr(f))
x=4
return A.b(B.Hg(d,u),$async$bDH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDH,w)},
adi:function adi(d){this.a=d},
fve:function fve(){},
fB2:function fB2(d,e){this.a=d
this.b=e},
fB3:function fB3(d){this.a=d},
fB4:function fB4(){},
cf9:function cf9(d){this.a=d},
byD:function byD(d,e,f,g,h,i,j,k,l){var _=this
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
fB5:function fB5(){},
fFg:function fFg(){},
fzf:function fzf(d){this.a=d},
fzg:function fzg(d){this.a=d},
a8k(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.cfe())?3:4
break
case 3:x=5
return A.b(B.b1J(d,e),$async$a8k)
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
return A.b(B.b1E(s),$async$a8k)
case 10:case 9:if(g){v=new A.Rb(1,D.U0,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wm(d,e),$async$a8k)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wr(!0,!0,d,e),$async$a8k)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oo(d,D.Av,e,t)
v=new A.Rb(p,D.Av,t)
x=1
break}v=B.cfd(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
Wm(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8m(null,d,e),$async$Wm)
case 3:p=g
try{u=C.W.aP(0,p,null)
t=y.f.b(u)?J.u(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1D(p,d.length,e),$async$Wm)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfb(e,C.d.gH(d).a,r.b),$async$Wm)
case 7:case 6:q=r.a
x=8
return A.b(B.Oo(d,D.U0,e,q),$async$Wm)
case 8:v=new A.Rb(d.length,D.U0,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wm,w)},
Wn(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mQ(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8l(d,e),$async$Wn)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cf6(s,d,e,t),$async$Wn)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1E(t),$async$Wn)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rZ(e,d),$async$Wn)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wm(A.a([d],y.r),e),$async$Wn)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
Wp(){var x=0,w=A.j(y.H)
var $async$Wp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.haO(),$async$Wp)
case 2:x=3
return A.b(B.aT9(),$async$Wp)
case 3:return A.h(null,w)}})
return A.i($async$Wp,w)},
a8l(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1G()
x=3
return A.b(B.cfa(e,d.a,u),$async$a8l)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8l,w)},
Oo(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.U0&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b3(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8l(p,f),$async$Oo)
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
return A.b(B.cf5(o,p,u,f),$async$Oo)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cf6(o,p,f,t),$async$Oo)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cf4(o,u,p,f),$async$Oo)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1J(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfc(e,d),$async$b1J)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wr(!1,!0,d,e),$async$b1J)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rb(u.a,D.Av,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1J,w)},
cfc(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wl(d,s,0,1),$async$cfc)
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
return A.i($async$cfc,w)},
cfd(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8m(null,d,e),$async$cfd)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hs3(u)
if(t.length>800){v=null
x=1
break}v=new A.Rb(d.length,D.dUN,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfd,w)},
arf(d,e,f){return B.hY3(d,e,f)},
hY3(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arf=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nv(g,1)
x=B.haT(g)?3:4
break
case 3:x=5
return A.b(B.cf7(g),$async$arf)
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
return A.b(B.b1C(q),$async$arf)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wo(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.haS(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wo(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Ju(C.a.i(J.nv(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Ju(C.a.i(J.nv(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Ju(h,d,a0)
x=1
break}if(J.eB(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wo(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arf,w)},
Ju(d,e,f){return B.hY1(d,e,f)},
hY1(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ju=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b3(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b3(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1u(r),$async$Ju)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1u(A.cD(s,0,null)),$async$Ju)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.u(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.u(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ceK(o,r,a1,n,a2),$async$Ju)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceJ(q),$async$Ju)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wo(l,a2),$async$Ju)
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
return A.i($async$Ju,w)},
a8m(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rZ(f,r),$async$a8m)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cQ.gcr().aN(q)],t,s))
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
return A.i($async$a8m,w)},
Wo(d,e){return B.hY2(d,e)},
hY2(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wo=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.W.aP(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.u(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.u(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.u(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.u(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aT(r)
case 7:if(!e.C()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.u(m,"name")
l=J.k(d==null?"file":d)
d=J.u(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.u(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cL.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cl(i,a3,d,k,l,o),$async$Wo)
case 9:h=a5
if(h!=null)J.c4(n,h)
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
return A.i($async$Wo,w)},
On:function On(d,e){this.a=d
this.b=e},
cfe:function cfe(){},
a2z(d){var x=A.P(d).ax.a===C.I,w=x?D.ajm:D.agP,v=x?D.al6:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aij:C.bm
return new A.aIC([w,s,v,u,t,x?C.fq:C.bQ])},
hIH(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h2m(e),d,null,!0,!0,y.N)},
ceU(d,e,f,g,h,i,j,k,l){return new B.Wg(e,l,d,f,k,j,g,h,i,null)},
a_x(d,e,f,g,h,i,j){return new B.bgh(g,h,j,e,i,d,f,null)},
h2m:function h2m(d){this.a=d},
a_u:function a_u(d,e){this.c=d
this.a=e},
aBw:function aBw(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ddq:function ddq(d){this.a=d},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d){this.a=d},
byf:function byf(){},
Wg:function Wg(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFA:function aFA(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e0m:function e0m(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_j:function e_j(d,e,f){this.a=d
this.b=e
this.c=f},
e_i:function e_i(d){this.a=d},
e_k:function e_k(d,e){this.a=d
this.b=e},
e_p:function e_p(d,e,f){this.a=d
this.b=e
this.c=f},
e_o:function e_o(d){this.a=d},
e0a:function e0a(d,e){this.a=d
this.b=e},
e0b:function e0b(d){this.a=d},
e_H:function e_H(d,e,f){this.a=d
this.b=e
this.c=f},
e_E:function e_E(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e_n:function e_n(d){this.a=d},
e_P:function e_P(d){this.a=d},
e_O:function e_O(){},
e_t:function e_t(d){this.a=d},
e07:function e07(d,e){this.a=d
this.b=e},
e08:function e08(d,e){this.a=d
this.b=e},
e09:function e09(d,e){this.a=d
this.b=e},
e_F:function e_F(d,e){this.a=d
this.b=e},
e_G:function e_G(d,e){this.a=d
this.b=e},
e00:function e00(d,e){this.a=d
this.b=e},
e_X:function e_X(d){this.a=d},
e_W:function e_W(d){this.a=d},
e_Y:function e_Y(){},
e_Z:function e_Z(){},
e0_:function e0_(d,e){this.a=d
this.b=e},
e01:function e01(){},
e02:function e02(d){this.a=d},
e_V:function e_V(d,e){this.a=d
this.b=e},
e_Q:function e_Q(d){this.a=d},
e_R:function e_R(d){this.a=d},
e_S:function e_S(d){this.a=d},
e_T:function e_T(d){this.a=d},
e_U:function e_U(d){this.a=d},
e_q:function e_q(){},
e_r:function e_r(d){this.a=d},
e_s:function e_s(d,e){this.a=d
this.b=e},
e_m:function e_m(d,e){this.a=d
this.b=e},
e_l:function e_l(d,e,f){this.a=d
this.b=e
this.c=f},
e_I:function e_I(d){this.a=d},
e_J:function e_J(d,e,f){this.a=d
this.b=e
this.c=f},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_y:function e_y(d){this.a=d},
e_v:function e_v(d,e,f){this.a=d
this.b=e
this.c=f},
e_z:function e_z(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_B:function e_B(){},
e_D:function e_D(d,e){this.a=d
this.b=e},
e_w:function e_w(d){this.a=d},
e_u:function e_u(d,e,f){this.a=d
this.b=e
this.c=f},
e_x:function e_x(){},
e_N:function e_N(d){this.a=d},
e_M:function e_M(d,e){this.a=d
this.b=e},
e06:function e06(d,e){this.a=d
this.b=e},
e03:function e03(d){this.a=d},
e04:function e04(d,e){this.a=d
this.b=e},
e05:function e05(d){this.a=d},
e0j:function e0j(d){this.a=d},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0k:function e0k(){},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0d:function e0d(d,e){this.a=d
this.b=e},
e0e:function e0e(d,e,f){this.a=d
this.b=e
this.c=f},
e0c:function e0c(d,e,f){this.a=d
this.b=e
this.c=f},
e0f:function e0f(d,e){this.a=d
this.b=e},
e0g:function e0g(d,e){this.a=d
this.b=e},
aBt:function aBt(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgg:function bgg(d,e,f){this.c=d
this.d=e
this.a=f},
ddm:function ddm(){},
ddn:function ddn(){},
adC:function adC(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
ddK:function ddK(){},
ddJ:function ddJ(d){this.a=d},
a_w:function a_w(d,e,f){this.c=d
this.d=e
this.a=f},
aBy:function aBy(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
ddG:function ddG(d){this.a=d},
ddH:function ddH(d,e,f){this.a=d
this.b=e
this.c=f},
ddI:function ddI(d,e){this.a=d
this.b=e},
ddE:function ddE(d,e){this.a=d
this.b=e},
ddC:function ddC(d){this.a=d},
ddA:function ddA(d){this.a=d},
ddx:function ddx(d){this.a=d},
ddD:function ddD(d){this.a=d},
ddz:function ddz(d){this.a=d},
ddF:function ddF(d){this.a=d},
ddB:function ddB(d){this.a=d},
ddy:function ddy(d){this.a=d},
a_t:function a_t(d,e,f){this.c=d
this.d=e
this.a=f},
aBv:function aBv(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
ddj:function ddj(d){this.a=d},
ddi:function ddi(d,e){this.a=d
this.b=e},
ddk:function ddk(d){this.a=d},
ddh:function ddh(d,e){this.a=d
this.b=e},
ddl:function ddl(d){this.a=d},
ddg:function ddg(d,e){this.a=d
this.b=e},
ddc:function ddc(d){this.a=d},
ddd:function ddd(d){this.a=d},
dde:function dde(d,e){this.a=d
this.b=e},
ddf:function ddf(d){this.a=d},
QK:function QK(d,e,f){this.c=d
this.d=e
this.a=f},
aBB:function aBB(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddX:function ddX(d){this.a=d},
ddY:function ddY(d){this.a=d},
ddZ:function ddZ(d){this.a=d},
de_:function de_(d){this.a=d},
de0:function de0(d,e){this.a=d
this.b=e},
de1:function de1(d){this.a=d},
de3:function de3(d){this.a=d},
de2:function de2(d){this.a=d},
a_y:function a_y(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBz:function aBz(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddT:function ddT(d,e){this.a=d
this.b=e},
ddU:function ddU(d,e){this.a=d
this.b=e},
ddL:function ddL(d,e,f){this.a=d
this.b=e
this.c=f},
ddM:function ddM(d){this.a=d},
ddN:function ddN(){},
ddS:function ddS(){},
ddO:function ddO(d,e){this.a=d
this.b=e},
ddP:function ddP(d,e){this.a=d
this.b=e},
ddQ:function ddQ(d,e){this.a=d
this.b=e},
ddR:function ddR(d,e){this.a=d
this.b=e},
adA:function adA(d,e){this.c=d
this.a=e},
ddb:function ddb(d){this.a=d},
a_s:function a_s(d){this.a=d},
aBu:function aBu(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_z:function a_z(d,e){this.c=d
this.a=e},
aBA:function aBA(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddW:function ddW(d){this.a=d},
ddV:function ddV(d){this.a=d},
bgh:function bgh(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hY4(){var x,w=$.oz(),v=J.e6(10,y.N)
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
break}r=J.u(s,"relays")
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
a8n(d){return B.hY5(d)},
hY5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8n)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hO("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8n)
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
return A.i($async$a8n,w)},
Wq(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Op(),$async$Wq)
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
return A.b(B.a8n(s),$async$Wq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
Wr(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Wr)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bp(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.cfg(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hY4()
t=A.U(u).k("N<1,a9<n,aF>>")
r=A.C(new A.N(u,new B.cfh(s),t),t.k("ak.E"))
x=6
return A.b(B.Op(),$async$Wr)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8n(q),$async$Wr)
case 7:x=8
return A.b(B.a8o(r,u,g,s),$async$Wr)
case 8:v=new A.bs6(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wr,w)},
arg(d){var x=0,w=A.j(y.y),v,u,t
var $async$arg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Op(),$async$arg)
case 3:u=t.u(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.u(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arg,w)},
cfi(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Op(),$async$cfi)
case 3:s=r.u(f,C.a.i(d))
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
return A.i($async$cfi,w)},
a8o(d,e,f,g){return B.hY6(d,e,f,g)},
hY6(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8o=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.u(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.are("media",r,new B.cff(s,e,g),f,q),$async$a8o)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wq(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8o)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wq(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8o)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wq(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8o)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8o,w)},
Fm(d,e,f){return B.hY7(d,e,f)},
hY7(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.arg(b3),$async$Fm)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.iR,null,g),$async$Fm)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arg(b3),$async$Fm)
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
l=new A.abQ(a8.a,b0,"media",a8.d,a9).Dm(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1v(k,n,o,s,b7),$async$Fm)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
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
case 23:a2=J.u(a7,"storagePath")
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
return A.b(new A.abQ(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fm)
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
return A.b(B.a8n(e),$async$Fm)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fm,w)},
cfg:function cfg(){},
cfh:function cfh(d){this.a=d},
cff:function cff(d,e,f){this.a=d
this.b=e
this.c=f},
aT9(){var x=0,w=A.j(y.H),v,u
var $async$aT9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i8e=null
v=y.H
u=A.dN(null,v)
x=2
return A.b(u,$async$aT9)
case 2:u=A.dN(null,v)
x=3
return A.b(u,$async$aT9)
case 3:u=$.hgm
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dN(u,v),$async$aT9)
case 4:$.hgm=$.ih0=$.ih1=null
return A.h(null,w)}})
return A.i($async$aT9,w)},
fES(d){var x=0,w=A.j(y.H),v,u
var $async$fES=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aad){x=1
break}u=new A.bl($.bE,y.d4)
d.c=new B.fET(new A.c3(u,y.aY))
x=3
return A.b(u.iJ(0,C.id,new B.fEU()),$async$fES)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fES,w)},
igZ(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hXP(x):x},
hgq(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,13))
if(C.a.a_(u,"WR")){v=B.ari(u)
x=1
break}v=B.haS(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgq,w)},
hgp(d){var x=0,w=A.j(y.T),v,u,t
var $async$hgp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b3(t,14))
if(C.a.a_(u,"WR")){v=B.arj(u)
x=1
break}v=B.haS(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hgp,w)},
fYO(d){var x=0,w=A.j(y.T),v
var $async$fYO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arj(d),$async$fYO)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fYO,w)},
bEB(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hgp(d),$async$bEB)
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
return A.i($async$bEB,w)},
fsm(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fsm=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wk(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cl(d.aqg(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsm,w)},
Hi(d,e,f){return B.ijg(d,e,f)},
ijg(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hgq(a1),$async$Hi)
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
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b3(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hKH().aGF(D.dH9,null),$async$Hi)
case 4:l=d.hgm=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAi(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bl($.bE,y.b1)
l.y=new B.fFt(f,k,new B.fFu(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a90(0,new B.YA(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amG(0),$async$Hi)
case 7:x=6
return A.b(d.a8T(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fES(l),$async$Hi)
case 8:x=9
return A.b(l.ar2(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.igZ(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ark(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hs3(h)
case 11:v=new A.brm(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fET:function fET(d){this.a=d},
fEU:function fEU(){},
fFu:function fFu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFt:function fFt(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fFs:function fFs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ill(d){switch(d){case"new":return D.eEB
case"checking":return D.eEC
case"connected":return D.eEE
case"completed":return D.eED
case"failed":return D.eEG
case"disconnected":return D.eEH
case"closed":return D.aSi
case"count":return D.eEF}return D.aSi},
ilm(d){switch(d){case"new":return D.aSj
case"gathering":return D.eEI
case"complete":return D.aad}return D.aSj},
ivJ(d){switch(d){case"stable":return D.eEJ
case"have-local-offer":return D.eEK
case"have-local-pranswer":return D.eEM
case"have-remote-offer":return D.eEL
case"have-remote-pranswer":return D.eEN
case"closed":return D.aSp}return D.aSp},
itS(d){switch(d){case"new":return D.aSm
case"connecting":return D.aSn
case"connected":return D.aSo
case"closed":return D.aae
case"disconnected":return D.aSl
case"failed":return D.aSk}return D.aae},
aaM:function aaM(d,e){this.a=d
this.b=e},
Pv:function Pv(d,e){this.a=d
this.b=e},
Yz:function Yz(d,e){this.a=d
this.b=e},
Pu:function Pu(d,e){this.a=d
this.b=e},
FR:function FR(d,e){this.a=d
this.b=e},
ct2:function ct2(){},
hcD(d){var x=new B.FQ()
x.a=d
x.b=!0
return x},
FQ:function FQ(){this.b=this.a=$},
aaL:function aaL(){},
avO:function avO(){},
YA:function YA(d,e){this.a=d
this.b=e},
haO(){var x=0,w=A.j(y.H)
var $async$haO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$haO,w)},
haR(d,e,f){var x=0,w=A.j(y.T),v
var $async$haR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mQ(D.n7))){v=null
x=1
break}v=B.fZ4(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haR,w)},
hs3(d){var x,w=F.agc.a5H(C.dV.aN(d),null)
if(w.length===0){x=C.dV.aN(d)
return C.cQ.gcr().aN(x)}return C.cQ.gcr().aN(w)},
hXO(d){var x,w,v=C.cL.aN(d)
try{x=C.cb.cC(0,F.agb.bgw(v,!1))
return x}catch(w){x=C.cb.cC(0,v)
return x}},
haS(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hXO(C.a.b3(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b3(t,w.length)
try{v=C.cb.cC(0,C.cL.aN(x))
return v}catch(u){return x}}return null},
hXP(d){var x,w,v,u,t,s=A.a([],y.s)
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
hXQ(){var x,w=$.oz(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1B(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1B)
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
return A.i($async$b1B,w)},
ceZ(d,e){return B.hXR(d,e)},
hXR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ceZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hO("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$ceZ)
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
return A.i($async$ceZ,w)},
b1E(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1B(d),$async$b1E)
case 3:t=f
if(t!=null){u=J.u(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1E,w)},
b1D(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1D=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hXQ()
r=C.a.i(f)
t=C.dV.aN(s)
x=3
return A.b(B.ceZ(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cQ.gcr().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1D)
case 3:if(!h){v=null
x=1
break}v=new A.a1z("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1D,w)},
b1C(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1B(o),$async$b1C)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.u(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cC(0,C.cL.aN(u))
if(J.j5(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1C,w)},
cf_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cf_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bFx("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$cf_)
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
return A.i($async$cf_,w)},
b1F(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jq(),$async$b1F)
case 3:u=t.u(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1F,w)},
arb(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$arb)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.u(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1F(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arb,w)},
ar9(d,e){var x=0,w=A.j(y.H)
var $async$ar9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ar9)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ar9)
case 2:return A.h(null,w)}})
return A.i($async$ar9,w)},
a8f(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8f)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8f)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8e(s),$async$a8f)
case 5:x=6
return A.b(B.ar9(f,u),$async$a8f)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
a8g(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8g=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8g)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8g)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.u(r,"ownerEmail")
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
return A.b(B.ar9(g,q),$async$a8g)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8e(u),$async$a8g)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
a8h(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8h)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jq(),$async$a8h)
case 4:u=o.u(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b1y(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8h)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8h)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
cf0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cf0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cf0)
case 7:s=f
p=A.w(n)
r=A.aV(J.u(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cf0,w)},
Jr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cf0(d),$async$Jr)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.u(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1F(t),$async$Jr)
case 4:s=g
x=s==null||!J.z(J.u(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ara(d),$async$Jr)
case 7:v=!1
x=1
break
case 6:u=J.u(s,"ownerEmail")
u=B.b1y(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ara(d),$async$Jr)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jr,w)},
ara(d){var x=0,w=A.j(y.H)
var $async$ara=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$ara)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ara)
case 2:return A.h(null,w)}})
return A.i($async$ara,w)},
b1G(){var x,w=$.oz(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8i(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
haT(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cf3(d){return B.hXT(d)},
hXT(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cf3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8i(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cf3)
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
return A.i($async$cf3,w)},
ard(d,e){return B.hXU(d,e)},
hXU(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ard=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8i(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hO("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$ard)
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
return A.i($async$ard,w)},
cf5(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cf5=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8i(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ard(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cf5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cf5,w)},
cf4(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cf4=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8i(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ard(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cf4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cf4,w)},
cf6(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cf6=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8i(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ard(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cf6,w)},
cf7(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cf7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.haT(d)){v=null
x=1
break}x=3
return A.b(B.cf3(d),$async$cf7)
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
return A.i($async$cf7,w)},
a8p(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8p=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a8p)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8p)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.u(s,"signals")
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
return A.i($async$a8p,w)},
arh(d){return B.hY8(d)},
hY8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$arh)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hO("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$arh)
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
return A.i($async$arh,w)},
ari(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ari=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ari)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8p(),$async$ari)
case 4:s=f
r=J.u(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.u(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cC(0,C.cL.aN(q))
if(J.j5(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.arh(s),$async$ari)
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
return A.i($async$ari,w)},
ark(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ark=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$ark)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8p(),$async$ark)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a1(s,r,q),r,q)
r=C.dV.aN(C.a.i(e))
q.n(0,"answer",C.cQ.gcr().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arh(u),$async$ark)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ark,w)},
arj(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$arj)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8p(),$async$arj)
case 4:s=o.u(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.u(s,"answer")
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
return A.i($async$arj,w)},
aqa(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqa=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qr)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqa)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aqa)
case 7:q=g
o=q
o=o==null?null:J.eR(J.uL(o))
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
return A.i($async$aqa,w)},
is1(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
fWZ(d){return B.is3(d)},
is3(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fWZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iD("media").Ly(d,3600),$async$fWZ)
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
return A.i($async$fWZ,w)},
DJ(d,e,f,g,h,i){var x=null
return B.is0(d,e,f,g,h,i)},
is0(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DJ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hs6(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.haV(r),$async$DJ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fWZ(o),$async$DJ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8j(r),$async$DJ)
case 14:v=null
x=1
break
case 13:e=$.bE.h(0,C.aVY)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.ML(A.a([],g))
x=15
return A.b(d.f9(0,A.awD("GET",A.cD(n,0,null))).dg(0,C.GZ),$async$DJ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8j(r),$async$DJ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lh(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DJ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1I(r,k),$async$DJ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DJ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wk(r)
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
return A.b(B.a8j(r),$async$DJ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DJ,w)},
aSN(d){return B.is2(d)},
is2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iD("media").W(0,d),$async$aSN)
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
return A.i($async$aSN,w)}},D,T,L,U,V,W,X,M,Y
J=c[1]
A=c[0]
C=c[2]
N=c[48]
F=c[271]
H=c[153]
O=c[240]
P=c[241]
E=c[231]
G=c[96]
Q=c[201]
R=c[154]
S=c[238]
I=c[276]
K=c[284]
B=a.updateHolder(c[22],B)
D=c[282]
T=c[200]
L=c[221]
U=c[75]
V=c[265]
W=c[81]
X=c[63]
M=c[95]
Y=c[283]
B.ct3.prototype={
aGF(d,e){return this.cQW(d,e)},
cQW(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cv(t)))
t=J.k(u)
v=B.i1N(C.cQ.gcr().aN(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGF,w)}}
B.b6P.prototype={
bCN(d){var x=this,w=x.w
w.onclose=A.hw(new B.csZ(x))
w.onopen=A.hw(new B.ct_(x))
w.onmessage=A.hw(new B.ct0(x))
w.onbufferedamountlow=A.hw(new B.ct1(x))},
gd6(d){return this.x},
aiV(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hcD(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aiV)
case 8:v=t.hcD(s.apj(f,0,null))
x=1
break
case 7:case 4:v=B.hcD(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiV,w)}}
B.b6Q.prototype={
bCO(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hw(new B.ct4(x)))
w.addEventListener("icecandidate",A.hw(new B.ct5(x)))
w.addEventListener("iceconnectionstatechange",A.hw(new B.ct6(x)))
w.onicegatheringstatechange=A.hw(new B.ct7(x))
w.addEventListener("signalingstatechange",A.hw(new B.ct8(x)))
if(!$.hkx())w.addEventListener("connectionstatechange",A.hw(new B.ct9(x)))
w.addEventListener("negotiationneeded",A.hw(new B.cta(x)))
w.addEventListener("track",A.hw(new B.ctb(x)))},
amG(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kl(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amG)
case 3:t=f
v=new B.YA(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amG,w)},
a8T(d,e){return this.brJ(0,e)},
brJ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8T)
case 2:return A.h(null,w)}})
return A.i($async$a8T,w)},
a90(d,e){return this.bs3(0,e)},
bs3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a90=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a90)
case 2:return A.h(null,w)}})
return A.i($async$a90,w)},
ar2(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ar2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YA(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar2,w)},
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
B.adB.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_v.prototype={
S(){return new B.aBx()},
gd1(){return this.c}}
B.aBx.prototype={
Y(){this.a3()
this.afr()},
afr(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1z(u.e,u.c),$async$afr)
case 2:t=e
if(v.c!=null)v.m(new B.ddu(v,t))
return A.h(null,w)}})
return A.i($async$afr,w)},
R9(){var x=0,w=A.j(y.H),v,u=this,t
var $async$R9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ar6(t.e,t.c,!1),$async$R9)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fqd)
x=1
break}x=4
return A.b(B.a8d(u.a.c,"individual"),$async$R9)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7f(A.ee(new B.ddr(u),!1,null,y.H)),$async$R9)
case 5:case 1:return A.h(v,w)}})
return A.i($async$R9,w)},
JT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fCL(o),$async$JT)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8h(o.e,r,s,q),$async$JT)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fnb)
x=1
break}x=5
return A.b(B.a8d(u.a.c,"member"),$async$JT)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7f(A.ee(new B.ddt(u),!1,null,y.H)),$async$JT)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JT,w)},
yK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8c(t.e,o,t.f,t.r,t.w,s),$async$yK)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8d(u.a.c,"org_owner"),$async$yK)
case 4:x=5
return A.b(B.arb(u.a.c),$async$yK)
case 5:r=e
x=r==null||!J.z(J.u(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fDf(o),$async$yK)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8f(s,t,o,q.c),$async$yK)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fn7)
x=1
break}x=10
return A.b(B.arb(u.a.c),$async$yK)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7f(A.ee(new B.dds(u),!1,null,y.H)),$async$yK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yK,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I,q=r?C.ny:C.qr,p=B.haQ(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fQ,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fKk,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hl,s,s,s),C.aB,D.h3j,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cci,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m3(new B.ddw(),s),C.P,v,C.e3,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae4(C.eW,C.aEJ,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gck1(),s),C.af],u))
w.push(new B.ae4(C.pB,C.a5D,"Team Member","Sign in with your organization access code + password",t.gckT(),s))
w.push(C.af)
w.push(new B.ae4(C.aqI,C.a7i,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcko(),s))
return A.c5(s,q,A.bm(!0,A.c9(A.x(w,C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae4.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eD(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mE,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.h,0,C.p),1),A.W(C.zp,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEb.prototype={}
B.aHm.prototype={}
B.jK.prototype={
mQ(d){var x=this.b,w=C.a.pe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b3(x,w+1).toLowerCase())},
garK(){var x=this.d
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
bg_(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jK(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPr(d){return this.bg_(null,d)},
aGo(d){return this.bg_(d,null)}}
B.We.prototype={
S(){return new B.aFy(new A.cx(null,y.A))},
gd1(){return this.c}}
B.aFy.prototype={
Y(){this.a3()
this.afs()},
afs(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ck(u.a.c),$async$afs)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_f(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afs,w)},
aft(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aft=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fx(s)),$async$aft)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fr8)
case 1:return A.h(v,w)}})
return A.i($async$aft,w)},
a_S(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_S=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqa(s.d,4),$async$a_S)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rp(r,"ngmy_my_code_"+m+".png"),$async$a_S)
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
return A.i($async$a_S,w)},
ajm(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abp("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajm,w)},
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
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a63,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,Y.ank,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.c9(A.x(A.a([x,C.nd,w,C.lb,new A.eo(A.p(p,A.qj(p,p,!1,B.hXK(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.en(M.DA,p,C.Wt,q.gcch(),p),1),C.as,A.E(A.dh(C.zR,p,C.acA,q.gcci(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.T,new A.a5(1/0,p,A.en(L.a4o,p,D.fZT,q.gczJ(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,U.anT,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wi.prototype={
S(){return new B.aFB(new A.au(C.aw,$.ax()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.aFB.prototype={
Y(){var x,w
this.a3()
x=this.a.e
w=B.Jp(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
a_T(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jp(u.d.a.a)
if(t==null){u.m(new B.e0o(u))
x=1
break}u.m(new B.e0p(u))
s=u.a
r=s.c
x=3
return A.b(B.a8b(s.d,new B.e0q(u),t,r),$async$a_T)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e0r(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_T,w)},
a38(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a38=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e0s(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rZ(r.a.c,q),$async$a38)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e0t(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj8(p,m,l,j,k),$async$a38)
case 8:o=e
if(r.c!=null)r.m(new B.e0u(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e0v(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e0w(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a38,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.ajm:D.agP,h=j?D.al6:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aij:C.bm
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
t=A.p(k,A.A(A.a([A.p(k,D.c_k,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a63,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uY(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blJ()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bz(k,k,k,C.OA,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e0x(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mq(l.a.d,4)
m=A.C(new A.N(m,new B.e0y(x,new A.aIC(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.flE)
else q.push(A.W(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b0,new A.o(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eV,k,k,k)],r))}e=A.E(A.c9(A.x(e,C.al,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bHJ,k,k,C.ah),1)
u=l.f?k:l.gczK()
t=i[3]
s=i[1]
q=A.l(16)
s=A.en(L.a4o,k,D.h0_,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccj()
t=A.bo(C.aD,k,k,0,C.c,k,C.nF,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lH(new B.e0z(),A.x(A.a([e,new A.D(D.bHc,A.x(A.a([s,C.P,i,C.af,A.bI(l.f?C.tY:D.fZf,k,u,t)],r),C.al,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cj,C.a0G,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blJ.prototype={
pa(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.ho(C.bB,v.length),C.aP)}}
B.Wf.prototype={
S(){return new B.aFz()}}
B.aFz.prototype={
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
afu(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afu=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e_g(r))
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
return A.b(B.a8g(p,m,n,o,C.a.i(l).length===0?null:l),$async$afu)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fqK)
s=[1]
x=4
break}p.L(y.q).f.T(D.fpl)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e_h(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afu,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.ny:C.qr,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fRB,s,s,s,1,s,!0),p=A.p(s,D.bzf,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.In,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c6G,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6B,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c6R,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcck()
u=A.bo(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c5(q,r,A.c9(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bI(t.r?C.tY:C.aYO,s,v,u)],y.p),C.al,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adi.prototype={}
B.byD.prototype={
a5Y(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqg()))
x=3
return A.b(B.Sn(t,s),$async$a5Y)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5Y,w)},
gd1(){return this.a}}
B.On.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_u.prototype={
S(){return new B.aBw(new A.au(C.aw,$.ax()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.aBw.prototype={
Y(){this.a3()
$.aU.x1$.push(new B.ddq(this))},
t(){var x=this.d
x.U$=$.ax()
x.R$=0
this.e.t()
this.a2()},
ccq(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2z(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.atq,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.auf,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uY(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byf()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bz(w,w,w,C.CJ,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b7_),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.ddo(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eH(w,C.L,new A.cN(Q.Mi,new A.bM(new A.o(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wI,A.x(A.a([l,C.aO,k,C.P,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dW(C.o7,new B.ddp(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bM(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cK,12)],n),K.QC,C.n),C.bk,A.aG(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.exZ,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccp(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OJ,w,C.d7,w,w,w)}}
B.byf.prototype={
pa(d,e){return e.amA(e.a.toUpperCase())}}
B.Wg.prototype={
S(){return new B.aFA(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFA.prototype={
Y(){var x=this
x.a3()
x.us()
x.w=A.dg(C.jJ,new B.e0m(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wp()
this.a2()},
a20(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a20=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$a20)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Be(u.a.c),$async$a20)
case 4:u.m(new s.e_K(u,e))
u.io("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a20,w)},
us(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$us=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$us)
case 3:t=e
x=4
return A.b(B.Be(u.a.c),$async$us)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e_L(u,s))
if(t>0)u.io("Received "+A.w(t)+" file(s) via My Code.")
u.Oj(u.d)
B.Ck(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$us,w)},
Oj(d){return this.bGQ(d)},
bGQ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8l(r,u.a.c),$async$Oj)
case 8:p=f
if(u.c==null){x=1
break}new B.e_j(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mQ(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wn(r,u.a.c),$async$Oj)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Be(u.a.c),$async$Oj)
case 12:u.m(new o.e_k(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oj,w)},
OJ(d){return this.bNb(d)},
bNb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8l(d,u.a.c),$async$OJ)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e_p(u,d,t))
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
ut(d,e){return this.cKG(d,e)},
cKG(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ut=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e0a(r,e))
u=3
x=6
return A.b(d.$0(),$async$ut)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e0b(r))
$.eY.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ut,w)},
gaYc(){var x=this.a
return x.f||x.r||x.w},
IK(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYc()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ceX(s,n,r,q,o,t),$async$IK)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.io("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fQ7(o,u.a.c),$async$IK)
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
return A.b(B.DL(s,o,r,q,n,t),$async$IK)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IK,w)},
a14(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arb(u.a.c),$async$a14)
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
return A.b(A.a6(t,!1).ce(A.ee(new B.e_H(u,r,q),!1,null,y.H)),$async$a14)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a14,w)},
a2a(d){return this.cti(d)},
cth(){return this.a2a(1)},
cti(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2a=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYc()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ar8(u.a.c),$async$a2a)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2a,w)},
adj(d,e,f){return this.c3c(d,e,f)},
c3c(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.io(e)
x=1
break}x=3
return A.b(u.ut(new B.e_E(u,d,null,e,f),"Uploading\u2026"),$async$adj)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adj,w)},
bGZ(){B.hHF(!1,new B.e_n(this))
return},
cyk(){this.m(new B.e_P(this))},
aAT(){var x=0,w=A.j(y.H),v=this
var $async$aAT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGZ()
return A.h(null,w)}})
return A.i($async$aAT,w)},
adf(){var x=0,w=A.j(y.H),v=this
var $async$adf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e_t(v),"Importing\u2026"),$async$adf)
case 2:return A.h(null,w)}})
return A.i($async$adf,w)},
Tc(d){return this.cK_(d)},
cK_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mQ(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e07(u,d),!1,null,y.H)),$async$Tc)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mQ(D.SD)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ee(new B.e08(u,d),!1,null,y.H)),$async$Tc)
case 8:x=1
break
case 7:x=u.c3V(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ee(new B.e09(u,d),!1,null,y.H)),$async$Tc)
case 11:x=1
break
case 10:u.io("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tc,w)},
c3V(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.pe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cVC,C.a.b3(x,w+1).toLowerCase())},
ah4(d){return this.ck5(d)},
ck5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ah4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mQ(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e_F(u,d),!1,null,y.H)),$async$ah4)
case 5:x=1
break
case 4:u.m(new B.e_G(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ah4,w)},
Sy(d){return this.cBd(d)},
cBd(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.io("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$Sy)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e00(u,d),"Preparing QR\u2026"),$async$Sy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sy,w)},
ajM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e01(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e02(q),s),s.k("M.E"))
if(r.length===0){u.io("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sy(r),$async$ajM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajM,w)},
ajF(d){return this.cAL(d)},
cAL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2z(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.e_V(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajF)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tc(d)
break
case"qr":u.Sy(A.a([d],y.r))
break
case"send_my_code":u.ckI(A.a([d],y.r))
break
case"save":u.aj2(d)
break
case"delete":u.JC(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajF,w)},
YE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_q(),A.U(t).k("N<1,n>")).fL(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_r(q),s),s.k("M.E"))
if(r.length===0){u.io("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$YE)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ut(new B.e_s(u,r),"Preparing file\u2026"),$async$YE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YE,w)},
ai9(d){return this.crB(d)},
crB(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ai9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hIH(d,!1),$async$ai9)
case 3:s=f
r=s==null
q=B.a8i(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.io("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ai9,w)},
aha(){var x=0,w=A.j(y.H),v=this,u
var $async$aha=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fY4(u,v.a.c),$async$aha)
case 2:return A.h(null,w)}})
return A.i($async$aha,w)},
bGY(){B.hHF(!1,new B.e_m(this,null))
return},
JS(d,e){return this.ckJ(d,e)},
b3M(d){return this.JS(null,d)},
ckI(d){return this.JS(d,null)},
ckJ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.e_I(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xQ.cp().apm(!0,C.a2r,!1),$async$JS)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.ut(new B.e_J(l,s,r),"Preparing\u2026"),$async$JS)
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
return A.b(B.bGK(p,l,e,s.a.c),$async$JS)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.io("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JS,w)},
J_(d){return this.c3_(d)},
c3_(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hXJ(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3M(t),$async$J_)
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
return A.b(u.ut(new B.e_C(u,d),"Receiving video\u2026"),$async$J_)
case 11:x=1
break
case 10:x=12
return A.b(u.ut(new B.e_D(u,d),"Receiving\u2026"),$async$J_)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J_,w)},
EQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DF()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ai9(t),$async$EQ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J_(s),$async$EQ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e_N(u),!1,null,y.N)),$async$EQ)
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
aj2(d){return this.cwS(d)},
cwS(d){var x=0,w=A.j(y.H),v=this
var $async$aj2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ut(new B.e_M(v,d),"Saving\u2026"),$async$aj2)
case 2:return A.h(null,w)}})
return A.i($async$aj2,w)},
JC(d){return this.bPx(d)},
bPx(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(B.cf_(t),$async$JC)
case 6:case 5:s=d.a
x=7
return A.b(B.Fl(u.a.c,s),$async$JC)
case 7:u.r.W(0,s)
x=8
return A.b(u.us(),$async$JC)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JC,w)},
ajS(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2z(r)
r=u.c
r.toString
x=3
return A.b(A.bT(C.L,null,new B.e06(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajS)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aha()
break
case"import":u.adf()
break}case 1:return A.h(v,w)}})
return A.i($async$ajS,w)},
ccn(d){var x=d.c
if(C.a.a_(x,"video/")||d.mQ(D.n7))return C.qW
if(C.a.a_(x,"image/")||d.mQ(D.SD))return C.v3
if(C.a.q(x,"pdf"))return P.I3
return D.ar7},
B(d){var x,w,v=this,u=null,t=B.a2z(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.Ig,u,u,u,new B.e0h(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c_V,u,u,u,v.e?u:v.gckp(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyj()
n.push(A.aI(u,u,u,u,A.W(v.r.a===x?D.bV7:E.arv,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a4l,u,u,u,v.e?u:v.gcco(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb4S(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c1I,u,u,u,v.e?u:new B.e0i(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m3(new B.e0j(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dt(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ku(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBt(C.ju,s,!0,t,w?u:v.gcBe(),u),1)
x.push(new A.D(D.bFY,A.lH(new B.e0k(),A.A(A.a([s,C.as,A.E(new B.aBt(C.tl,"Export",!1,t,w?u:v.gbTq(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cj,C.iB,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgg(t,v.e?u:v.gb4S(),u)
else s=A.kv(!0,u,u,new B.e0l(v,t),s,u,D.bFQ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBt.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.t8,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.cd,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t8,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.en(A.W(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgg.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lH(new B.ddm(),new A.D(E.a1y,A.x(A.a([A.lH(new B.ddn(),A.p(x,A.W(C.zt,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ec,C.hN,x,x,new A.bq(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.dh(C.oQ,x,D.h3D,this.d,A.bo(C.aD,x,x,x,C.c,x,C.OH,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.cj,C.Cv,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.adC.prototype={
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
if(!o||i.mQ(D.n7))p=D.dvY
else{p=C.a.a_(p,"image/")||i.mQ(D.SD)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garK()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.ax,A.d(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.W(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cg))
if(!(!o||i.mQ(D.n7)))l.push(A.h8z(C.aD,!1,j,j,j,!1,j,j,new B.ddJ(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.W(C.oI,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cg))
return A.lH(new B.ddK(),new A.D(C.el,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a11,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cj,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_w.prototype={
S(){return new B.aBy()},
gd1(){return this.c}}
B.aBy.prototype={
Y(){this.a3()
this.yA()},
t(){B.hXY(this.e)
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
n=B.hY0(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hY_(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.ddG(s))
x=1
break}s.m(new B.ddH(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.ddI(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yA,w)},
a37(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a37=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rZ(t.c,t.d),$async$a37)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fnI)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj8(q,s,t.length===0?"image/jpeg":t,null,s),$async$a37)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a37,w)},
c2T(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kJ(u,C.z,v,new B.ddE(w,t),C.h2,C.dC,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fX(t,C.z,v,new B.ddF(w),C.h2,C.dC,!0,v,!1,v,v)
else return C.bM
return A.v3(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2z(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DB,u,u,u,v.gb8E(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FT
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.DB,u,D.fMM,v.gb8E(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c2T()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_t.prototype={
S(){return new B.aBv(A.ak5(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBv.prototype={
Y(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a3(w).k("fB<1>")).iE(new B.ddj(v))
x.gcYz().iE(new B.ddk(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a3(x).k("fB<1>"))}if(x==null)x=C.bdo
x.iE(new B.ddl(v))
v.yA()},
yA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rZ(p.c,p.d),$async$yA)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.ddc(s))
x=1
break}x=8
return A.b(s.d.vv(0,new A.a4I(r,s.a.d.c)),$async$yA)
case 8:if(s.c==null){x=1
break}s.m(new B.ddd(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dde(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yA,w)},
a_U(){var x=0,w=A.j(y.H),v=this,u
var $async$a_U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a_U)
case 5:x=3
break
case 4:x=6
return A.b(u.iI(0),$async$a_U)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_U,w)},
aW0(d){var x=d.a
return C.a.b0(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2z(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FT
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bW3,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.QC,C.n),o,88,o,o,o,o,o,88)
t=A.l3(C.aD,o,o,m,0,new B.ddf(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aW0(p.w)+" / "+p.aW0(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.fk6,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.v7:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccr(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QK.prototype={
S(){return new B.aBB()},
gd1(){return this.c}}
B.aBB.prototype={
Y(){this.a3()
this.Qr()},
Qr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.haR(o.c,o.d,new B.ddX(s)),$async$Qr)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddY(s))
x=1
break}s.e=r
q=N.ikb(r)
if(q==null){s.m(new B.ddZ(s))
x=1
break}s.d=q
q.aV(0,s.gb3A())
x=8
return A.b(q.iX(0).dg(0,C.t4),$async$Qr)
case 8:if(s.c==null){x=1
break}s.m(new B.de_(s))
x=9
return A.b(q.qv(0),$async$Qr)
case 9:q.u1(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.de0(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qr,w)},
ciE(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.de1(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DB(0,x.gb3A())
w=x.d
if(w!=null)w.t()
B.iua(x.e)
x.a2()},
afx(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1H(u.c,u.d),$async$afx)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afx,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2z(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aI(t,t,t,t,C.oP,t,t,t,u.gccl(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ij(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FT
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajx(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AK(s,t),A.az(t,A.xy(A.p(t,A.W(q?H.v7:C.he,C.c,t,t,t,48),C.f,t,t,new A.o(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.de3(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_y.prototype={
S(){return new B.aBz(new A.cx(null,y.A))}}
B.aBz.prototype={
gcKn(){var x,w,v=this.a
if(v.e!==D.U1)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJY(){var x,w,v=this.a
if(v.e!==D.Av)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b3(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a3()
x=v.gcKn()
if(x!=null){v.Rz(x)
v.e=A.dg(R.H1,new B.ddT(v,x))}w=v.gcJY()
if(w!=null){v.Ry(w)
v.f=A.dg(C.fM,new B.ddU(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Ry(d){return this.cpO(d)},
cpO(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ry=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arg(d),$async$Ry)
case 3:t=f
x=4
return A.b(B.cfi(d),$async$Ry)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.ddL(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Ry,w)},
Rz(d){return this.cpP(d)},
cpP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fYO(d),$async$Rz)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEB(t),$async$Rz)
case 4:if(u.c==null){x=1
break}u.m(new B.ddM(u))
u.c.L(y.q).f.T(D.aVx)
case 1:return A.h(v,w)}})
return A.i($async$Rz,w)},
gc8b(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccm(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2U(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DF()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fqU)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ee(new B.ddN(),!1,null,y.N)),$async$a2U)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEB(s),$async$a2U)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aVx)
case 1:return A.h(v,w)}})
return A.i($async$a2U,w)},
ab7(d){return this.bNc(d)},
bNc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fx(C.d.aM(t,", "))),$async$ab7)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ab7,w)},
afv(d){return this.bMV(d)},
bMV(d){var x=0,w=A.j(y.H),v=this
var $async$afv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fx(v.a.c)),$async$afv)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fob)
return A.h(null,w)}})
return A.i($async$afv,w)},
a2O(d){return this.cwU(d)},
cwU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqa(s.d,4),$async$a2O)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rp(r,"ngmy_doc_share_qr.png"),$async$a2O)
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
return A.i($async$a2O,w)},
gaZs(){var x,w=this.a
if(w.e!==D.Ju)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b3(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b3(x,13))
return null},
ab4(d){return this.bN5(d)},
bN5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZs()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fx(C.a.a_(t,"http")?t:"N2|"+t)),$async$ab4)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fpT)
case 1:return A.h(v,w)}})
return A.i($async$ab4,w)},
afw(){var x=0,w=A.j(y.H),v=this,u
var $async$afw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wp(),$async$afw)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afw,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2z(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.Ju&&i!==D.U1&&i!==D.Av
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Ju||t===D.U1||t===D.Av?l:A.aI(l,l,l,l,C.ls,l,l,l,m.gb1x(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qj(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8b(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Ju){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccm(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c5J,D.fWp,new B.ddO(m,d),l)],p))}if(m.a.e===D.Ju&&m.gaZs()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c23,D.fT_,new B.ddP(m,d),l)],p))
if(m.a.e===D.Av){x=(m.w?C.dK:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ad(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FX:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U1){x=(m.r?C.dK:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FX:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.dh(D.bYw,l,D.fZz,m.gcxg(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oU(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.b8,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(M.DA,l,C.Wt,new B.ddQ(m,d),l),1),C.as,A.E(A.dh(C.zR,l,C.acA,new B.ddR(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.P,new A.a5(1/0,l,A.bI(C.B9,l,m.gb1x(),A.bo(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.ddS(),y.C)}}
B.adA.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.c9(A.x(A.a([w,C.aO,A.p(x,A.qj(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.ek(A.a([A.bI(C.Ba,x,new B.ddb(d),x)],u),x,x,C.no,v,x,x,x,x,D.fLL,x)}}
B.a_s.prototype={
S(){return new B.aBu(A.zU(C.yK,C.oe,C.vk))}}
B.aBu.prototype={
t(){this.d.t()
this.a2()},
azs(d){var x,w,v,u,t
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
return A.c5(A.eS(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fTx,x,x,x,1,x,!0),C.w,A.zT(this.d,C.c_,this.gazr()),x,!1,!1,x,x)}}
B.a_z.prototype={
S(){return new B.aBA(A.zU(C.yK,C.oe,C.vk))},
gd1(){return this.c}}
B.aBA.prototype={
c3X(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahx(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MR("text/plain"),$async$ahx)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fqO)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahx,w)},
abW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hIH(p,!0),$async$abW)
case 3:t=e
p=t==null
s=B.a8i(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fni)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$abW,w)},
t(){this.d.t()
this.a2()},
azs(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3X(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.asv,v,v,v,w.gbSU(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4s,v,v,v,w.gcna(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aI(v,v,v,v,A.W(w.f?C.v_:O.PQ,v,v,v,v,v),v,v,v,new B.ddW(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h_u,v,v,v,1,v,!0)
u=A.zT(w.d,C.c_,w.gazr())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eEg],s),v),v,!1,!1,v,v)}}
B.bgh.prototype={
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
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1E,A.A(A.a([u,C.bb,A.E(A.x(t,C.E,r,C.e,C.h,0,C.p),1),A.W(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaM.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pv.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yz.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pu.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FR.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ct2.prototype={}
B.FQ.prototype={}
B.aaL.prototype={}
B.avO.prototype={}
B.YA.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jK)","n(jK)","Wg(Z)","~()","a_v(Z)","F(F,jK)","QK(Z)","~(mr)","cu(FQ)","aB<jK?>(@)","We(Z)","Wi(Z)","D(jK)","jK(@)","a9<n,@>(jK)","a_u(Z)","Wf(Z)","a_w(Z)","a_t(Z)","a_y(Z)","adA(Z)","ai<jK>()","a_z(Z)","adC(Z,F)","a_s(Z)","a9<n,aF>(jK)","cu(Yz)","cu(aaL)","aB<cu>(FQ)"])
B.csZ.prototype={
$1(d){var x=this.a
x.x=D.aSh
x.y.I(0,D.aSh)},
$S:75}
B.ct_.prototype={
$1(d){var x=this.a
x.x=D.aSg
x.y.I(0,D.aSg)},
$S:75}
B.ct0.prototype={
$1(d){var x=this.a
x.aiV(A.ahU(d.data)).bG(new B.csY(x),y.b)},
$S:75}
B.csY.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ct1.prototype={
$1(d){},
$S:75}
B.ct4.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i1M(d.channel))},
$S:16}
B.ct5.prototype={
$1(d){},
$S:16}
B.ct6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ill(w.iceConnectionState)
x.cx=w
if($.hkx())switch(w.a){case 0:x.cy=D.aSm
break
case 1:x.cy=D.aSn
break
case 3:x.cy=D.aSo
break
case 5:x.cy=D.aSk
break
case 6:x.cy=D.aSl
break
case 7:x.cy=D.aae
break
default:break}},
$S:106}
B.ct7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ilm(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:106}
B.ct8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ivJ(w.signalingState)},
$S:106}
B.ct9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.itS(w.connectionState)},
$S:106}
B.cta.prototype={
$1(d){},
$S:106}
B.ctb.prototype={
$1(d){},
$S:16}
B.fyb.prototype={
$1(d){var x=y.F.a(new A.qz([],[]).o4(d.target.result,!1)),w=C.wz.q(x.objectStoreNames,"blobs")
if(!w)C.ww.Gm(x,"blobs")},
$S:164}
B.fXT.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x8.fs(this.b)
$.eY.mJ()
this.c.$1(d)},
$S:391}
B.fXV.prototype={
$1(d){return this.a.$1(B.iaX(this.b,this.c))},
$S:30}
B.fXU.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fXS.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fY7.prototype={
$1(d){var x=this
return B.hx1(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fY8.prototype={
$1(d){var x=this
return B.hx1(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fAR.prototype={
$1(d){var x=this
return B.ceU(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.ddu.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.ddr.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceU(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.ddt.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceU(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dds.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceU(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.ddw.prototype={
$4(d,e,f,g){var x=null
return A.k4(A.A(A.a([A.aI(x,x,x,x,D.bX8,x,x,x,new B.ddv(d),x,x,x,x,x,x),A.E(A.FC(D.Sn,!0,x,!1,C.a3v,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.Sn,x,g,C.ao9,0,e,f)},
$C:"$4",
$R:4,
$S:389}
B.ddv.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCO.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.p(v,D.bzz,C.f,v,v,D.b8F,v,v,v,v,D.anZ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0w,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.CL,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bz(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asL,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dW(C.ds,new B.fCM(d),v),1),C.as,A.E(A.bI(D.fRZ,v,new B.fCN(p,x,d),A.bo(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.H4,v,v,v,v),v)},
$S:63}
B.fCM.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fCN.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fot)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEb(v,x))},
$S:0}
B.fDh.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bzp,C.f,w,w,D.ba9,w,w,w,w,D.anZ,w,w,1/0),new A.D(C.CL,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hga(u,"Organization name",C.HD,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hga(u,"Access code",C.mj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hga(u,"Member password",C.Dz,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bI(D.h_B,w,new B.fDg(r,q,p,d),A.bo(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.H4,w,w,w,w),w)},
$S:63}
B.fDg.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.foy)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHm(u,x,w))},
$S:0}
B.ceL.prototype={
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
return A.b(A.vS(p,null).dg(0,C.a0F),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cc(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cl(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ceR.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceS.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ceT.prototype={
$1(d){return d.b},
$S:z+2}
B.ceN.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ceO.prototype={
$1(d){return d.b},
$S:z+2}
B.ceM.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ceP.prototype={
$1(d){var x=J.u(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ceQ.prototype={
$1(d){var x=J.u(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fY5.prototype={
$1(d){return new B.We(this.a,null)},
$S:z+11}
B.fY6.prototype={
$1(d){return new B.Wi(this.a,this.b,this.c,null)},
$S:z+12}
B.e_f.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e0o.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e0p.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e0q.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e0n(x,d))},
$S:2}
B.e0n.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0r.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0s.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e0t.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e0u.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e0v.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e0w.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e0z.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:103}
B.e0x.prototype={
$1(d){var x=this.a
return x.f?null:x.a_T()},
$S:2}
B.e0y.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mQ(D.SD))s=C.v3
else s=C.a.a_(s,"video/")||d.mQ(D.n7)?C.qW:D.ar7
x=this.b.a
w=y.p
return new A.D(C.kB,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garK(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e_g.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e_h.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ceV.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.ceW.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:95}
B.fZ6.prototype={
$2(d,e){return e===this.a},
$S:348}
B.fve.prototype={
$1(d){return J.k(d)},
$S:17}
B.fB2.prototype={
$1(d){var x=this.b
B.i8W(C.Hq.ga7A(this.a)).bG(x.gCb(x),y.H)},
$S:124}
B.fB3.prototype={
$1(d){return this.a.dd(0,null)},
$S:124}
B.fB4.prototype={
$0(){return null},
$S:12}
B.cf9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fB5.prototype={
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
return new B.jK(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fFg.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fzf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfe.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.h2m.prototype={
$1(d){return new B.a_u(this.a,null)},
$S:z+16}
B.ddq.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:8}
B.ddo.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.ddp.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0m.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a20()},
$S:11}
B.e_K.prototype={
$0(){var x=J.bHP(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_L.prototype={
$0(){var x=J.bHP(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_j.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_i(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGo(this.c)}},
$S:0}
B.e_i.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_k.prototype={
$0(){var x=J.bHP(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_p.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e_o(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGo(this.c)}},
$S:0}
B.e_o.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0a.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e0b.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e_H.prototype={
$1(d){return new B.Wf(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e_E.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IK(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wj(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.us(),$async$$0)
case 5:s=J.a8(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a2a(s.gJ(t)),$async$$0)
case 8:case 7:r.io(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_n.prototype={
$1(d){this.a.adj(d,"No files selected.","Added")},
$S:391}
B.e_P.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_O(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_O.prototype={
$1(d){return d.a},
$S:z+2}
B.e_t.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xQ.cp().d_x(C.a2r,!0),$async$$0)
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
return A.b(B.arf(null,m,o.a.c),$async$$0)
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
B.e07.prototype={
$1(d){return new B.QK(this.a.a.c,this.b,null)},
$S:z+7}
B.e08.prototype={
$1(d){return new B.a_w(this.a.a.c,this.b,null)},
$S:z+18}
B.e09.prototype={
$1(d){return new B.a_t(this.a.a.c,this.b,null)},
$S:z+19}
B.e_F.prototype={
$1(d){return new B.QK(this.a.a.c,this.b,null)},
$S:z+7}
B.e_G.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e00.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IK(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8k(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.io("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cth(),$async$$0)
case 5:x=6
return A.b(p.us(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_X(p),r),new B.e_Y(),r.k("N<ak.E,n>")).c_(0,new B.e_Z())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0_(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wp(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_X.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e_W(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_W.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_Y.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_Z.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0_.prototype={
$1(d){var x=this.a
return new B.a_y(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e01.prototype={
$1(d){return d.a},
$S:z+2}
B.e02.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_V.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kA,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garK(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mQ(D.n7)?C.tp:C.nP
p=!x||p.mQ(D.n7)?"Play video":"View"
return new A.bM(new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CH,A.x(A.a([q,o,t,C.aB,B.a_x(!1,u,!1,w,p,new B.e_Q(d),v),B.a_x(!1,u,!1,C.ju,"Share via QR",new B.e_R(d),"Letters/numbers QR code"),B.a_x(!1,u,!1,D.a3A,"Send to their Code",new B.e_S(d),"Enter someone else's personal code"),B.a_x(!1,u,!1,C.hB,"Download / save",new B.e_T(d),v),C.am,B.a_x(!1,u,!0,C.ej,"Delete",new B.e_U(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:526}
B.e_Q.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e_R.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e_S.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e_T.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e_U.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e_q.prototype={
$1(d){return d.a},
$S:z+2}
B.e_r.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_s.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8m(null,v.b,u.a.c),$async$$0)
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
B.e_m.prototype={
$1(d){var x=this.a
x.ut(new B.e_l(x,d,this.b),"Preparing\u2026")},
$S:391}
B.e_l.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.io("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wj(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.io("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGK(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.io("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_I.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e_J.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.haU(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_C.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.e_y(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.io("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e_z(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e_A(s))
case 5:x=8
return A.b(r.b.iJ(0,C.GZ,new B.e_B()),$async$$0)
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
B.e_y.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_v(x,d,e))},
$S:239}
B.e_v.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_z.prototype={
$1(d){return new B.adA(this.a.a,null)},
$S:z+21}
B.e_A.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e_B.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e_D.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jp(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8a(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3M(B.Jp(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arf(new B.e_w(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.haT(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.io(q)
x=1
break}x=10
return A.b(s.us(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e_x()).gJ(0)
s.io(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_w.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e_u(x,d,e))},
$S:239}
B.e_u.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e_x.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.e_N.prototype={
$1(d){return new B.a_z(this.a.a.c,null)},
$S:z+23}
B.e_M.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1H(u.a.c,v.b),$async$$0)
case 2:t.io(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e06.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bM(new A.o(v[2],x,new A.bG(new A.ay(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CH,A.x(A.a([A.as(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kA,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_x(!0,w,!1,C.mj,"My Code",new B.e03(d),"Your personal code & QR \u2014 others send docs to you"),B.a_x(!1,w,!1,D.a3A,"Send to their Code",new B.e04(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_x(!1,w,!1,S.zJ,"Import backup",new B.e05(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:526}
B.e03.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e04.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bGY()},
$S:0}
B.e05.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e0j.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jz(D.Sn,x,C.a3v,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.Sn).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:695}
B.e0h.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e0i.prototype={
$0(){this.a.ajS()
return null},
$S:0}
B.e0k.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*10)),e)},
$S:103}
B.e0l.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adC(e,w,v,this.b,x.e,x.ccn(w),new B.e0d(x,w),new B.e0e(x,v,w),new B.e0f(x,w),new B.e0g(x,w),null)},
$S:z+24}
B.e0d.prototype={
$0(){this.a.ah4(this.b)
return null},
$S:0}
B.e0e.prototype={
$0(){var x=this.a
return x.m(new B.e0c(x,this.b,this.c))},
$S:0}
B.e0c.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0f.prototype={
$0(){this.a.OJ(this.b)
return null},
$S:0}
B.e0g.prototype={
$0(){this.a.ajF(this.b)
return null},
$S:0}
B.ddm.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*18)),e)},
$S:103}
B.ddn.prototype={
$3(d,e,f){return A.e4(C.z,f,e,null,null)},
$S:112}
B.ddK.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:103}
B.ddJ.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.ddG.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.ddH.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.ddI.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.ddE.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fX(w,C.z,x,new B.ddC(this.a),C.h2,C.dC,!0,x,!1,x,x)
$.aU.x1$.push(new B.ddD(this.a))
return C.bM},
$S:145}
B.ddC.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddA(this.a))
return C.bM},
$S:196}
B.ddA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddx(x))},
$S:8}
B.ddx.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddD.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddz(x))},
$S:8}
B.ddz.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddF.prototype={
$3(d,e,f){$.aU.x1$.push(new B.ddB(this.a))
return C.bM},
$S:196}
B.ddB.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ddy(x))},
$S:8}
B.ddy.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddj.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddi(x,d))},
$S:1771}
B.ddi.prototype={
$0(){return this.a.f=this.b===C.vH},
$S:0}
B.ddk.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddh(x,d))},
$S:8}
B.ddh.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.ddl.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddg(x,d))},
$S:8}
B.ddg.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ddc.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.ddd.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dde.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddf.prototype={
$1(d){return this.a.d.NE(0,A.dw(0,0,0,C.i.V(d),0,0))},
$S:6}
B.ddX.prototype={
$0(){var x=this.a.a
return B.rZ(x.c,x.d)},
$S:1772}
B.ddY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddZ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.de_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.de0.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.de1.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.de3.prototype={
$0(){var x=this.a
x.m(new B.de2(x))},
$S:0}
B.de2.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.ddT.prototype={
$1(d){return this.a.Rz(this.b)},
$S:11}
B.ddU.prototype={
$1(d){return this.a.Ry(this.b)},
$S:11}
B.ddL.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.ddM.prototype={
$0(){return this.a.r=!0},
$S:0}
B.ddN.prototype={
$1(d){return D.hBe},
$S:z+25}
B.ddS.prototype={
$2(d,e){if(d)B.Wp()},
$S:128}
B.ddO.prototype={
$0(){return this.a.ab7(this.b)},
$S:0}
B.ddP.prototype={
$0(){return this.a.ab4(this.b)},
$S:0}
B.ddQ.prototype={
$0(){return this.a.afv(this.b)},
$S:0}
B.ddR.prototype={
$0(){return this.a.a2O(this.b)},
$S:0}
B.ddb.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.ddW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.ddV(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddV.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfg.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mQ(D.n7)},
$S:z+1}
B.cfh.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cff.prototype={
$2(d,e){return this.bnx(d,e)},
bnx(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wq(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1773}
B.fET.prototype={
$1(d){if(d===D.aad&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fEU.prototype={
$0(){},
$S:12}
B.fFu.prototype={
bp7(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fsm(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hs6(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bp7(d,e)},
$S:722}
B.fFt.prototype={
$1(d){var x=this
d.b=new B.fFs(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fFs.prototype={
$1(d){return this.bp6(d)},
bp6(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1I(n,m),$async$$1)
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
break}n=J.u(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.u(r,"name")
n=J.k(n==null?"file":n)
m=J.u(r,"mime")
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
return A.b(B.fsm(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8j(m),$async$$1)
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
x(v=B.aBx.prototype,"gck1","R9",0)
x(v,"gckT","JT",0)
x(v,"gcko","yK",0)
x(v=B.aFy.prototype,"gcch","aft",0)
x(v,"gcci","a_S",0)
x(v,"gczJ","ajm",0)
x(v=B.aFB.prototype,"gccj","a_T",0)
x(v,"gczK","a38",0)
x(B.aFz.prototype,"gcck","afu",0)
x(B.aBw.prototype,"gccp","ccq",4)
x(v=B.aFA.prototype,"gckp","a14",0)
x(v,"gcyj","cyk",4)
x(v,"gb4S","aAT",0)
x(v,"gcBe","ajM",0)
x(v,"gbTq","YE",0)
x(v,"gcco","EQ",0)
x(B.aBy.prototype,"gb8E","a37",0)
x(B.aBv.prototype,"gccr","a_U",0)
x(v=B.aBB.prototype,"gb3A","ciE",4)
x(v,"gccl","afx",0)
x(v=B.aBz.prototype,"gcxg","a2U",0)
x(v,"gb1x","afw",0)
w(B.aBu.prototype,"gazr","azs",8)
x(v=B.aBA.prototype,"gcna","ahx",0)
x(v,"gbSU","abW",0)
w(v,"gazr","azs",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aF,[B.ct2,B.aaL,B.avO,B.aEb,B.aHm,B.jK,B.adi,B.byD,B.FQ,B.YA])
w(B.ct3,B.ct2)
w(B.b6P,B.aaL)
x(A.ht,[B.csZ,B.ct_,B.ct0,B.csY,B.ct1,B.ct4,B.ct5,B.ct6,B.ct7,B.ct8,B.ct9,B.cta,B.ctb,B.fyb,B.fXT,B.fXV,B.fXU,B.fY7,B.fY8,B.fAR,B.ddr,B.ddt,B.dds,B.ddw,B.fCO,B.fDh,B.ceL,B.ceS,B.ceT,B.ceO,B.ceM,B.ceP,B.ceQ,B.fY5,B.fY6,B.e0q,B.e0z,B.e0x,B.e0y,B.fve,B.fB2,B.fB3,B.cf9,B.fB5,B.fFg,B.fzf,B.fzg,B.cfe,B.h2m,B.ddq,B.ddo,B.e0m,B.e_i,B.e_o,B.e_H,B.e_n,B.e_O,B.e07,B.e08,B.e09,B.e_F,B.e_X,B.e_W,B.e_Y,B.e_Z,B.e0_,B.e01,B.e02,B.e_V,B.e_q,B.e_r,B.e_m,B.e_I,B.e_z,B.e_x,B.e_N,B.e06,B.e0j,B.e0k,B.ddm,B.ddn,B.ddK,B.ddJ,B.ddE,B.ddC,B.ddA,B.ddD,B.ddF,B.ddB,B.ddj,B.ddk,B.ddl,B.ddf,B.ddT,B.ddU,B.ddN,B.cfg,B.cfh,B.fET,B.fFt,B.fFs])
w(B.b6Q,B.avO)
x(A.iT,[B.fXS,B.ddu,B.ddv,B.fCM,B.fCN,B.fDg,B.e_f,B.e0o,B.e0p,B.e0n,B.e0r,B.e0s,B.e0t,B.e0u,B.e0v,B.e0w,B.e_g,B.e_h,B.fB4,B.ddp,B.e_K,B.e_L,B.e_j,B.e_k,B.e_p,B.e0a,B.e0b,B.e_E,B.e_P,B.e_t,B.e_G,B.e00,B.e_Q,B.e_R,B.e_S,B.e_T,B.e_U,B.e_s,B.e_l,B.e_J,B.e_C,B.e_v,B.e_A,B.e_B,B.e_D,B.e_u,B.e_M,B.e03,B.e04,B.e05,B.e0h,B.e0i,B.e0d,B.e0e,B.e0c,B.e0f,B.e0g,B.ddG,B.ddH,B.ddI,B.ddx,B.ddz,B.ddy,B.ddi,B.ddh,B.ddg,B.ddc,B.ddd,B.dde,B.ddX,B.ddY,B.ddZ,B.de_,B.de0,B.de1,B.de3,B.de2,B.ddL,B.ddM,B.ddO,B.ddP,B.ddQ,B.ddR,B.ddb,B.ddW,B.ddV,B.fEU])
x(A.l6,[B.adB,B.On,B.aaM,B.Pv,B.Yz,B.Pu,B.FR])
x(A.af,[B.a_v,B.We,B.Wi,B.Wf,B.a_u,B.Wg,B.a_w,B.a_t,B.QK,B.a_y,B.a_s,B.a_z])
x(A.ah,[B.aBx,B.aFy,B.aFB,B.aFz,B.aBw,B.aFA,B.aBy,B.aBv,B.aBB,B.aBz,B.aBu,B.aBA])
x(A.aw,[B.ae4,B.aBt,B.bgg,B.adC,B.adA,B.bgh])
x(A.jE,[B.ceR,B.ceN,B.ceV,B.ceW,B.fZ6,B.e_y,B.e_w,B.e0l,B.ddS,B.cff,B.fFu])
x(A.jb,[B.blJ,B.byf])})()
A.j0(b.typeUniverse,JSON.parse('{"b6P":{"aaL":[]},"b6Q":{"avO":[]},"a_v":{"af":[],"v":[]},"aBx":{"ah":["a_v"]},"ae4":{"aw":[],"v":[]},"We":{"af":[],"v":[]},"Wi":{"af":[],"v":[]},"aFy":{"ah":["We"]},"aFB":{"ah":["Wi"]},"blJ":{"jb":[]},"Wf":{"af":[],"v":[]},"aFz":{"ah":["Wf"]},"a_u":{"af":[],"v":[]},"Wg":{"af":[],"v":[]},"adC":{"aw":[],"v":[]},"a_w":{"af":[],"v":[]},"a_t":{"af":[],"v":[]},"QK":{"af":[],"v":[]},"a_y":{"af":[],"v":[]},"adA":{"aw":[],"v":[]},"a_s":{"af":[],"v":[]},"a_z":{"af":[],"v":[]},"aBw":{"ah":["a_u"]},"byf":{"jb":[]},"aFA":{"ah":["Wg"]},"aBt":{"aw":[],"v":[]},"bgg":{"aw":[],"v":[]},"aBy":{"ah":["a_w"]},"aBv":{"ah":["a_t"]},"aBB":{"ah":["QK"]},"aBz":{"ah":["a_y"]},"aBu":{"ah":["a_s"]},"aBA":{"ah":["a_z"]},"bgh":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("mL"),k:x("MP()"),o:x("bs<n,n>"),F:x("ry"),g:x("aB<jK?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<t>"),W:x("O<bk>"),Y:x("O<a9<n,Q>>"),t:x("O<a9<n,@>>"),r:x("O<jK>"),w:x("O<+file,name(lX,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<jb>"),a:x("O<dH>"),p:x("O<v>"),Z:x("O<F>"),G:x("bk"),A:x("cx<ah<af>>"),n:x("ai<jK>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bA<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iz"),e:x("izN"),af:x("F1"),U:x("jK"),b:x("cu"),C:x("aF"),aK:x("wH"),ab:x("FQ"),br:x("avO"),v:x("YA"),N:x("n"),X:x("bq<H>"),Q:x("m9"),D:x("dH"),aw:x("bf<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jK>>"),aW:x("c3<dH?>"),aY:x("c3<~>"),cx:x("adB"),b1:x("bl<ai<jK>>"),cf:x("bl<dH?>"),d4:x("bl<~>"),c4:x("aEb"),bG:x("aHm"),q:x("me"),B:x("pV<FQ>"),c6:x("pV<aaM>"),y:x("Q"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bk?"),_:x("ai<jK>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jK?"),R:x("aF?"),c:x("YA?"),d:x("+answerQr,transfer(n,aB<ai<jK>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,F)?"),L:x("+fileCount,mode,qrPayload(F,On,n)?"),aX:x("+fileCount,qrPayload,token(F,n,n)?"),T:x("n?"),K:x("dH?"),cm:x("adi?"),bk:x("aEb?"),ag:x("aHm?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b7_=new A.ay(C.aD,2,C.r,-1)
D.cam=new A.a7(C.a5,C.a9,C.x,C.a5D,null,null)
D.b8F=new A.o(null,null,null,C.mJ,null,D.cam,C.n)
D.ba9=new A.o(null,null,null,C.mJ,null,E.In,C.n)
D.agP=new A.t(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aij=new A.t(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajm=new A.t(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.al6=new A.t(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fME=new A.B("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h0y=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.F8,null,null,null,null,null,null,null,null,null)
D.dmR=x([D.fME,C.am,D.h0y],y.p)
D.bzf=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dmR,null)
D.h51=new A.B("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fRa=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.F8,null,null,null,null,null,null,null,null,null)
D.dEa=x([D.h51,C.am,D.fRa],y.p)
D.bzp=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dEa,null)
D.h1b=new A.B("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.fV8=new A.B("Enter the access code and password from your organization.",null,G.F8,null,null,null,null,null,null,null,null,null)
D.dBU=x([D.h1b,C.am,D.fV8],y.p)
D.bzz=new A.fp(C.ah,C.e,C.h,C.E,null,C.p,null,0,D.dBU,null)
D.bFQ=new A.R(16,10,16,28)
D.bFY=new A.R(16,14,16,4)
D.bHc=new A.R(20,0,20,16)
D.bHJ=new A.R(20,8,20,16)
D.anZ=new A.R(24,22,24,20)
D.a3A=new A.a_(63394,"MaterialIcons",!1)
D.ar7=new A.a_(63515,"MaterialIcons",!1)
D.bV7=new A.a_(983813,"MaterialIcons",!1)
D.bSf=new A.a_(62867,"MaterialIcons",!1)
D.bW3=new A.ae(D.bSf,44,C.c,null,null,null)
D.bX8=new A.ae(C.kb,null,C.ab,null,null,null)
D.bYw=new A.ae(C.jv,18,null,null,null,null)
D.c_k=new A.ae(D.a3A,26,C.c,null,null,null)
D.c_V=new A.ae(C.Do,null,null,null,null,null)
D.c0w=new A.ae(C.Dw,null,null,null,null,null)
D.c1I=new A.ae(W.a3L,null,null,null,null,null)
D.c23=new A.ae(C.hR,16,null,null,null,null)
D.c5J=new A.ae(C.to,16,null,null,null,null)
D.bWl=new A.ae(C.mj,null,null,null,null,null)
D.c6B=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWl,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c13=new A.ae(C.HD,null,null,null,null,null)
D.c6G=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c13,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWG=new A.ae(C.Dz,null,null,null,null,null)
D.c6R=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWd=x([C.fq,C.b2,C.aD],y.O)
D.cci=new A.a7(C.ay,C.aC,C.x,D.cWd,null,null)
D.cVC=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Sn=x([C.fq,C.aD],y.O)
D.SD=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dvY=x([C.mR,C.aD],y.O)
D.equ={iceServers:0}
D.aMN={urls:0}
D.dHS=new A.bs(D.aMN,["stun:stun.l.google.com:19302"],y.o)
D.dHR=new A.bs(D.aMN,["stun:stun1.l.google.com:19302"],y.o)
D.dce=x([D.dHS,D.dHR],A.at("O<a9<n,n>>"))
D.dH9=new A.bs(D.equ,[D.dce],A.at("bs<n,@>"))
D.Ju=new B.On(0,"lanDirect")
D.U0=new B.On(1,"cloudStash")
D.dUN=new B.On(2,"inlineInstant")
D.U1=new B.On(3,"webrtcLink")
D.Av=new B.On(4,"videoCloud")
D.h0x=new A.B("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLn=x([E.asU,C.ae,D.h0x],y.p)
D.ff0=new A.c7(C.aM,C.b8,C.h,C.l,null,C.p,null,0,D.cLn,null)
D.exZ=new A.D(C.cp,D.ff0,null)
D.fD1=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IT,null,null,null)
D.fNd=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fD1,null,C.K,null,null,null,null,null,null,null)
D.ex9=new A.D(C.CO,D.fNd,null)
D.beJ=new A.cj(C.z,null,null,D.ex9,null)
D.eEg=new A.cK(0,null,0,28,null,null,D.beJ,null)
D.eEA=new B.aaM(0,"RTCDataChannelConnecting")
D.aSg=new B.aaM(1,"RTCDataChannelOpen")
D.aSh=new B.aaM(3,"RTCDataChannelClosed")
D.eEB=new B.FR(0,"RTCIceConnectionStateNew")
D.eEC=new B.FR(1,"RTCIceConnectionStateChecking")
D.eED=new B.FR(2,"RTCIceConnectionStateCompleted")
D.eEE=new B.FR(3,"RTCIceConnectionStateConnected")
D.eEF=new B.FR(4,"RTCIceConnectionStateCount")
D.eEG=new B.FR(5,"RTCIceConnectionStateFailed")
D.eEH=new B.FR(6,"RTCIceConnectionStateDisconnected")
D.aSi=new B.FR(7,"RTCIceConnectionStateClosed")
D.aSj=new B.Yz(0,"RTCIceGatheringStateNew")
D.eEI=new B.Yz(1,"RTCIceGatheringStateGathering")
D.aad=new B.Yz(2,"RTCIceGatheringStateComplete")
D.aae=new B.Pu(0,"RTCPeerConnectionStateClosed")
D.aSk=new B.Pu(1,"RTCPeerConnectionStateFailed")
D.aSl=new B.Pu(2,"RTCPeerConnectionStateDisconnected")
D.aSm=new B.Pu(3,"RTCPeerConnectionStateNew")
D.aSn=new B.Pu(4,"RTCPeerConnectionStateConnecting")
D.aSo=new B.Pu(5,"RTCPeerConnectionStateConnected")
D.eEJ=new B.Pv(0,"RTCSignalingStateStable")
D.eEK=new B.Pv(1,"RTCSignalingStateHaveLocalOffer")
D.eEL=new B.Pv(2,"RTCSignalingStateHaveRemoteOffer")
D.eEM=new B.Pv(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eEN=new B.Pv(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSp=new B.Pv(5,"RTCSignalingStateClosed")
D.fk6=new A.av(160,48)
D.bfY=new A.fn(2,null,null,null,null,C.aD,null,null,null,null)
D.flE=new A.a5(16,16,D.bfY,null)
D.fQv=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fn7=new A.b0(D.fQv,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYc=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fnb=new A.b0(D.fYc,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h64=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fni=new A.b0(D.h64,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fQ5=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fnI=new A.b0(D.fQ5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1m=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVx=new A.b0(D.h1m,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2O=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fob=new A.b0(D.h2O,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h7y=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fot=new A.b0(D.h7y,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5u=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.foy=new A.b0(D.h5u,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6J=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fpl=new A.b0(D.h6J,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOG=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fpT=new A.b0(D.fOG,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_6=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fqd=new A.b0(D.h_6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSP=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqK=new A.b0(D.fSP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h7D=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fqO=new A.b0(D.h7D,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOW=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fqU=new A.b0(D.fOW,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNA=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fr8=new A.b0(D.fNA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKk=new A.B("NGMY DOC SHARE",null,C.aWX,null,null,null,null,null,null,null,null,null)
D.fLL=new A.B("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fMM=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fRB=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fRZ=new A.B("Sign in",null,C.cd,null,null,null,null,null,null,null,null,null)
D.fT_=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fTx=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fWp=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fZf=new A.B("Send to their Doc Share",null,C.o5,null,null,null,null,null,null,null,null,null)
D.fZz=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fZT=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h_u=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_B=new A.B("Create portal",null,C.cd,null,null,null,null,null,null,null,null,null)
D.h0_=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h3j=new A.B("Share files & videos\nwith a scan.",null,C.aX_,null,null,null,null,null,null,null,null,null)
D.h3D=new A.B("Add files",null,C.cd,null,null,null,null,null,null,null,null,null)
D.hBe=new B.a_s(null)
D.adB=new B.adB(0,"docShare")
D.adC=new B.adB(1,"gate")
D.X7=new B.adB(2,"gateNoIndividual")})();(function staticFields(){$.aQa=null
$.fpX=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahH=A.T(y.N,A.at("lX"))
$.S7=A.T(y.N,y.D)
$.fqD=A.T(y.N,A.at("adi"))
$.cf8=A.T(y.S,A.at("byD"))
$.hs5=1
$.ih1=null
$.ih0=null
$.i8e=null
$.hgm=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iAh","hKH",()=>new B.ct3())
x($,"iyb","hkx",()=>C.a.q(A.bB(A.bB(A.bB(A.HH(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["1s46aK4/S1zL/hOASfmE7ECr9fo="]=a.current})($__dart_deferred_initializers__);