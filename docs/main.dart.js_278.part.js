((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,F,H,O,E,G,P,Q,R,I,K,B={csy:function csy(){},
i0k(d){var x=null,w=new B.b6u(d,D.eC0,new A.pS(x,x,y.c6),new A.pS(x,x,y.B))
w.bCm(d)
return w},
b6u:function b6u(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cst:function cst(d){this.a=d},
csu:function csu(d){this.a=d},
csv:function csv(d){this.a=d},
css:function css(d){this.a=d},
csw:function csw(d){this.a=d},
i0l(d,e){var x=y.N
x=new B.b6v(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCn(d,e)
return x},
b6v:function b6v(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
csz:function csz(d){this.a=d},
csA:function csA(d){this.a=d},
csB:function csB(d){this.a=d},
csC:function csC(d){this.a=d},
csD:function csD(d){this.a=d},
csE:function csE(d){this.a=d},
csF:function csF(d){this.a=d},
csG:function csG(d){this.a=d},
heU(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.x0.GS(x,"ngmy_doc_share_v1",new B.fxp(),1)},
i78(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.wT(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
Sj(d,e){return B.in9(d,e)},
in9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPR
x=7
return A.b(o==null?$.aPR=B.heU():o,$async$Sj)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mk(s,"blobs","readwrite")
C.iE.me(J.mj(q,"blobs"),r,d)
x=8
return A.b(J.oy(q),$async$Sj)
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
return A.i($async$Sj,w)},
Si(d){return B.in8(d)},
in8(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Si=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPR
x=7
return A.b(o==null?$.aPR=B.heU():o,$async$Si)
case 7:s=f
r=J.mk(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"blobs"),d),$async$Si)
case 8:q=f
x=9
return A.b(J.oy(r),$async$Si)
case 9:o=B.i78(q)
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
return A.i($async$Si,w)},
aig(d){return B.in7(d)},
in7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aig=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPR
x=7
return A.b(p==null?$.aPR=B.heU():p,$async$aig)
case 7:s=f
r=J.mk(s,"blobs","readwrite")
C.iE.Go(J.mj(r,"blobs"),d)
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
fxp:function fxp(){},
i9O(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brk(w,v))}return u},
hGd(d,e){var x,w={},v=A.aYx("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fWW(w,v,e)
C.x2.za(v,"change",new B.fWY(w,v,!1))
C.x2.za(v,"cancel",new B.fWX(w))
$.eY.mF()
v.click()
A.bO(C.alx,new B.fWV(w),y.H)},
fWW:function fWW(d,e,f){this.a=d
this.b=e
this.c=f},
fWY:function fWY(d,e,f){this.a=d
this.b=e
this.c=f},
fWX:function fWX(d){this.a=d},
fWV:function fWV(d){this.a=d},
DL(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUA()?3:4
break
case 3:x=5
return A.b(B.hAU(e,d,s,!0,!1,f,g,h,!1,i),$async$DL)
case 5:x=1
break
case 4:x=6
return A.b(B.RX(d,s,f,g,h,i),$async$DL)
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
return A.b(B.fsX(s,d),$async$DL)
case 14:x=12
return A.b(r.hAU(q,p,o,n,m,l,k,j,a1,i),$async$DL)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ed(new B.fXa(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ed(new B.fXb(s,i,d,f,g,h),!1,null,y.H)),$async$DL)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
RX(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RX=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1f(e),$async$RX)
case 3:u=k
x=4
return A.b(B.aqR(d,e,!1),$async$RX)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jr(e,d),$async$RX)
case 7:if(k){v=D.ad6
x=1
break}x=8
return A.b(B.We(e),$async$RX)
case 8:v=t?D.WR:D.ad7
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1d(d,e)){v=D.ad6
x=1
break}x=11
return A.b(B.We(e),$async$RX)
case 11:v=t?D.WR:D.ad7
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h9N(d,e)){v=D.ad6
x=1
break}x=14
return A.b(B.We(e),$async$RX)
case 14:v=D.WR
x=1
break
case 13:v=t?D.WR:D.ad7
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RX,w)},
fsX(d,e){var x=0,w=A.j(y.y),v
var $async$fsX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1d(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1f(d),$async$fsX)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsX,w)},
hAU(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ed(new B.fA3(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hvR(d,e,f,g,h,i,j){return new B.a_s(e,j,d,g,h,i,f,null)},
fBY(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fBY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fC0(A.P(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fBY)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBY,w)},
fCs(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fCs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fCu(A.P(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fCs)
case 3:q=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
r.U$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCs,w)},
hf4(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fPl(d,e){var x=0,w=A.j(y.H),v
var $async$fPl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.We(e),$async$fPl)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fPl,w)},
fXa:function fXa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fXb:function fXb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adx:function adx(d,e){this.a=d
this.b=e},
fA3:function fA3(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_s:function a_s(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBf:function aBf(){this.c=this.a=this.d=null},
dcW:function dcW(d,e){this.a=d
this.b=e},
dcT:function dcT(d){this.a=d},
dcV:function dcV(d){this.a=d},
dcU:function dcU(d){this.a=d},
dcY:function dcY(){},
dcX:function dcX(d){this.a=d},
ae0:function ae0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDU:function aDU(d,e){this.a=d
this.b=e},
aH3:function aH3(d,e,f){this.a=d
this.b=e
this.c=f},
fC0:function fC0(d,e,f){this.a=d
this.b=e
this.c=f},
fBZ:function fBZ(d){this.a=d},
fC_:function fC_(d,e,f){this.a=d
this.b=e
this.c=f},
fCu:function fCu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCt:function fCt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cee(d,e,f,g,h){return B.hWb(d,e,f,g,h)},
hWb(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cee=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iE(r.dN(d,new B.cef(s,e,h,g,f,q),y.g),y.l),$async$cee)
case 3:r=p.aT(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cee,w)},
b1a(d,e,f,g,h){return B.hWc(d,e,f,g,h)},
hWc(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1a=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awo("GET",d)
o=A.h6b()
if(o==null)o=new A.ML(A.a([],y.W))
x=7
return A.b(o.fa(0,s).dg(0,C.GN),$async$b1a)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CU(),$async$b1a)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cm(q,h,o,e,f,"Received via QR")
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
return A.i($async$b1a,w)},
b19(d){return B.hW9(d)},
hW9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b19=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vT(d,null).dg(0,C.ot),$async$b19)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aP(0,A.me(A.mc(p.e)).cJ(0,p.w),null)
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
return A.i($async$b19,w)},
ced(d){return B.hWa(d)},
hWa(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ced=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vT(d,null).dg(0,C.qC),$async$ced)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.me(A.mc(q.e)).cJ(0,q.w)
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
return A.i($async$ced,w)},
cef:function cef(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jF:function jF(d,e,f,g,h,i,j,k,l){var _=this
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
hWh(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jp(C.a.b2(t,u.length))}return null},
hWi(d){var x=B.Jp(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hWd(){var x,w=$.ov(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.hf(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a85(d){return B.hWe(d)},
hWe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a85=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bO),$async$a85)
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
return A.i($async$a85,w)},
a86(d,e){return B.hWf(d,e)},
hWf(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a86=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cP,null),$async$a86)
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
return A.i($async$a86,w)},
Cl(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Cl)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jp(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a87(r),$async$Cl)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a85("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cl)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jp(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aD("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cl)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hWd()
x=14
return A.b(B.a87(m),$async$Cl)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a86("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 15:k=f
x=16
return A.b(B.a86("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cl)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aD("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cl)
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
return A.i($async$Cl,w)},
a87(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a87=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jp(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a85("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a87)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a87,w)},
a88(d,e,f,g){return B.hWj(d,e,f,g)},
hWj(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a88=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jp(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a87(r),$async$a88)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cF(d,0,new B.cel())>1048576||g.aV(d,new B.cem())){v=B.Fm(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8j("myCode",d,a0),$async$a88)
case 4:u=a3
try{t=C.X.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fm(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1i(u,g.gJ(d),a0),$async$a88)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ov().az(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dN(d,new B.cen(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1b(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a88)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
Fm(d,e,f,g,h){return B.hWg(d,e,f,g,h)},
hWg(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fm=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fm)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cF(a6,0,new B.ceh())
if(k>524288e3){a7.$1("Too large to send by code ("+C.j.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ov().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cS.az(99999)
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
a1=B.Jt(a9,q)
a0=new A.Li(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fm)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pp(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abM(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.EA(!0,q.c)),$async$Fm)
case 12:J.c5(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fm)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSt(r),$async$Fm)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dN(a6,new B.cei(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1b(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fm)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSt(r),$async$Fm)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fm,w)},
b1b(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a85(t),$async$b1b)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b7(r,new B.ceg(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a86(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1b,w)},
Om(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Om=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a85("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Om)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b1c(k,a0),$async$Om)
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
return A.b(B.b1h(h),$async$Om)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wl(g,a0),$async$Om)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cej(),q),n)
d=A.C(new A.Y(r,new B.cek(),q),n)
q=A.C(e,y.P)
C.d.u(q,A.cX(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a86("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Om)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Om,w)},
b1c(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aT(h),r=y.f,q=0
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
break}i=B.ir5(k,j)
C.d.u(s,i)
x=5
return A.b(B.DJ(l,m,"Received via My Code",t,e,i),$async$b1c)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSt(s),$async$b1c)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1c,w)},
cel:function cel(){},
cem:function cem(){},
cen:function cen(){},
ceh:function ceh(){},
cei:function cei(){},
ceg:function ceg(){},
cej:function cej(){},
cek:function cek(){},
fX7(d,e){var x=0,w=A.j(y.H)
var $async$fX7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ed(new B.fX8(e),!1,null,y.H)),$async$fX7)
case 2:return A.h(null,w)}})
return A.i($async$fX7,w)},
bGn(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bGn=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ed(new B.fX9(g,e,f),!1,null,y.y)),$async$bGn)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGn,w)},
fX8:function fX8(d){this.a=d},
fX9:function fX9(d,e,f){this.a=d
this.b=e
this.c=f},
Wb:function Wb(d,e){this.c=d
this.a=e},
aFf:function aFf(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZw:function dZw(d,e){this.a=d
this.b=e},
Wf:function Wf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFi:function aFi(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_F:function e_F(d){this.a=d},
e_G:function e_G(d){this.a=d},
e_H:function e_H(d){this.a=d},
e_E:function e_E(d,e){this.a=d
this.b=e},
e_I:function e_I(d){this.a=d},
e_J:function e_J(d){this.a=d},
e_K:function e_K(d,e){this.a=d
this.b=e},
e_L:function e_L(d,e){this.a=d
this.b=e},
e_M:function e_M(d,e){this.a=d
this.b=e},
e_N:function e_N(d){this.a=d},
e_Q:function e_Q(){},
e_O:function e_O(d){this.a=d},
e_P:function e_P(d,e){this.a=d
this.b=e},
blq:function blq(){},
Wc:function Wc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFg:function aFg(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZx:function dZx(d){this.a=d},
dZy:function dZy(d){this.a=d},
h9O(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hWl(d){var x=d.l4
if(x>=0)return x
return 4.99},
hWk(d){var x=d.m7,w=y.N
w=x.jr(x,new B.cep(),w,w)
return w},
hqS(d){var x=d.l5,w=y.N
w=x.jr(x,new B.ceq(),w,w)
return w},
b1f(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b1f)
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
return A.i($async$b1f,w)},
a8a(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a8a)
case 4:x=3
return A.b(g.aD("String","ngmy_doc_share_path_"+u,e),$async$a8a)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
We(d){var x=0,w=A.j(y.H),v,u
var $async$We=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$We)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$We)
case 3:case 1:return A.h(v,w)}})
return A.i($async$We,w)},
h9N(d,e){var x,w,v
if(B.hWl(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hWk(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b1d(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hqS(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hqT(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hqS(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqS(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqS)
case 7:s=f
r=A.w(p)
r=A.en(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqS,w)},
aqT(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqS(d),$async$aqT)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqT)
case 5:x=4
return A.b(f.aD("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqT,w)},
aqR(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h9O(d)
if(u<=0){v=!1
x=1
break}if(B.h9N(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqS(e),$async$aqR)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqR,w)},
b1e(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jr(e,d),$async$b1e)
case 3:if(g){v=-1
x=1
break}u=B.h9O(d)
if(u<=0){v=-1
x=1
break}if(B.h9N(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqS(e),$async$b1e)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1e,w)},
ces(d,e,f){var x=0,w=A.j(y.y),v
var $async$ces=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jr(e,d),$async$ces)
case 3:if(h){v=!1
x=1
break}v=B.aqR(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ces,w)},
cer(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cer=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ces(d,u,i.gUA()),$async$cer)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cer,w)},
a89(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a89=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUA()){v=!0
x=1
break}if(B.b1d(d,u)){v=!0
x=1
break}x=5
return A.b(A.lB(u,C.U5),$async$a89)
case 5:x=k?3:4
break
case 3:B.hqT(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a89)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lh(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.U5,"Doc Share for Organizations"),$async$a89)
case 7:if(!k){v=!1
x=1
break}B.hqT(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a89)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
cep:function cep(){},
ceq:function ceq(){},
fY0(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fY0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fY0)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fpd.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fpd.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fY0,w)},
itL(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fpd.bq($.fpd,new B.fY2(d))},
fY2:function fY2(d){this.a=d},
fqV(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fqV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fqV)
case 3:C.Bm.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mF()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqV,w)},
aha(d,e,f){var x=0,w=A.j(y.H),v
var $async$aha=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fpZ.n(0,d,new B.ade(A.br(e,!0,v)))
x=3
return A.b(A.aA(),$async$aha)
case 3:x=2
return A.b(h.aD("String",d+"_manifest",C.X.aw(A.J(["parts",e,"size",f],v,y.C),null)),$async$aha)
case 2:return A.h(null,w)}})
return A.i($async$aha,w)},
ah4(d){return B.ibO(d)},
ibO(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fpZ.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah4)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b7(s,new B.fuw(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.j.M(o)
q=m==null?0:m
p=new B.ade(r)
$.fpZ.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah4,w)},
RN(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sj(d,u),$async$RN)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RN,w)},
aQd(d){return B.ibM(d)},
ibM(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Si(d),$async$aQd)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQd)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aO(r)
x=!J.ct(q)?9:10
break
case 9:B.RN(d,q)
x=11
return A.b(J.hc(s,d),$async$aQd)
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
return A.i($async$aQd,w)},
i7B(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cf(J.eF(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cf(A.wT(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cf(d)),y.K)
return A.f4(null,y.K)},
a2X(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fD(r,"loadend",new B.fAf(r,t),!1,s)
A.fD(r,"error",new B.fAg(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iJ(0,C.O2,new B.fAh())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2X,w)},
aQx(d,e,f){return B.iea(d,e,f)},
iea(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQx=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2X(i),$async$aQx)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sj(o,p),$async$aQx)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c5(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aha(k,j,s),$async$aQx)
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
return A.i($async$aQx,w)},
aQw(d,e,f){return B.ie9(d,e,f)},
ie9(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQw=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQx(d,e,f),$async$aQw)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2X(f),$async$aQw)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S3.n(0,s,r)
x=11
return A.b(B.RN(s,r),$async$aQw)
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
return A.i($async$aQw,w)},
Cm(d,e,f,g,h,i){return B.hWu(d,e,f,g,h,i)},
hWu(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cm=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cS.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jF(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1l(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RN(s,d),$async$Cm)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cm)
case 10:r=a2
x=11
return A.b(r.aD("String",s,C.cV.gcu().aO(d)),$async$Cm)
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
return A.b(B.Bk(e),$async$Cm)
case 12:j=a2
J.c5(j,m)
x=13
return A.b(B.Hg(e,j),$async$Cm)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cm,w)},
Wg(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wg=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bk(d),$async$Wg)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cS.az(99999)
n=p.b
l=o.type
l.toString
k=B.hqV(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jF(m,n,k,l,j,"From folder",null,B.b1l(),null)
$.ahA.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2X(o),$async$Wg)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S3.n(0,h,g)
B.RN(h,g)
x=9
break
case 10:x=11
return A.b(B.aQw(d,m,o),$async$Wg)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wg)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
h9S(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h9S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hqV(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Js(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cm(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9S,w)},
Js(d,e,f,g,h,i){return B.hWt(d,e,f,g,h,i)},
hWt(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Js=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cS.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Li(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Js)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.ct(m)){x=6
break}J.fZ(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.SR(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kM(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sj(k,l),$async$Js)
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
return A.b(j.a1(0),$async$Js)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sj(k,new Uint8Array(A.cf(n))),$async$Js)
case 15:J.c5(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aha(r,q,g),$async$Js)
case 16:f=new B.jF(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1l(),null)
x=17
return A.b(B.Bk(d),$async$Js)
case 17:e=a6
J.c5(e,f)
x=18
return A.b(B.Hg(d,e),$async$Js)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Js,w)},
Wi(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wi=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahA.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2X(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah4(s),$async$Wi)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Si(u[o]),$async$Wi)
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
case 5:i=$.S3.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rX(d,e),$async$Wi)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S3.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wT(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wi,w)},
hqV(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rX(d,e){return B.hWv(d,e)},
hWv(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S3.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahA.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2X(s),$async$rX)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S3.n(0,f,r)
B.RN(f,r)
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
return A.b(B.ah4(f),$async$rX)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aA2(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Si(g[l]),$async$rX)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aq0()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S3.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQd(f),$async$rX)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S3.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wi(a0,a1,0,g),$async$rX)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cf(i))
$.H6.n(0,f,h)
$.S3.n(0,f,h)
B.RN(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rX,w)},
hWy(d){var x,w,v=$.ahA.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hWz(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hWw(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqZ(d,e,f,g,h){return B.hWx(d,e,f,g,h)},
hWx(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqZ=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahA.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2X(s),$async$aqZ)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rX(g,e),$async$aqZ)
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
return A.b(n.iC(d).xL(h,r,new A.EA(!0,e.c)),$async$aqZ)
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
return A.i($async$aqZ,w)},
hqX(d,e,f,g,h){var x,w,v,u,t=$.hqW
$.hqW=t+1
x=Date.now()
w=""+1000*x+"_"+C.cS.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ceD.n(0,t,new B.byi(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aA2(u)))
return t},
h9T(d){var x=0,w=A.j(y.H)
var $async$h9T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9T,w)},
Jt(d,e){var $async$Jt=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahA.h(0,h)
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
return A.qx(B.Wi(d,e,p,o<q?o:q),$async$Jt,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qx(A.GF(n),$async$Jt,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qx(B.ah4("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jt,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qx(B.Si(h[l]),$async$Jt,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qx(A.GF(k),$async$Jt,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qx(B.rX(d,e),$async$Jt,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qx(A.GF(A.wT(j,p,o<i?o:i)),$async$Jt,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qx(null,0,w)
case 2:return A.qx(t.at(-1),1,w)}})
var x=0,w=A.hzN($async$Jt,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hBA(w)},
b1n(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ceD.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5N(),$async$b1n)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1n,w)},
Wh(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceD.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5N(),$async$Wh)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aha(r.c,u,r.z),$async$Wh)
case 4:t=new B.jF(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1l(),null)
u=r.a
x=5
return A.b(B.Bk(u),$async$Wh)
case 5:s=f
J.c5(s,t)
x=6
return A.b(B.Hg(u,s),$async$Wh)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
a8g(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceD.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aig(u[s]),$async$a8g)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
ceF(d,e,f){var x=0,w=A.j(y.H)
var $async$ceF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDl(d,e,f),$async$ceF)
case 2:return A.h(null,w)}})
return A.i($async$ceF,w)},
ceG(d,e,f){var x=0,w=A.j(y.H)
var $async$ceG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDm(d,e,f),$async$ceG)
case 2:return A.h(null,w)}})
return A.i($async$ceG,w)},
Fn(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bk(d),$async$Fn)
case 2:p=g
J.nU(p,new B.ceE(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahA.W(0,e)
x=3
return A.b(B.ah4(v),$async$Fn)
case 3:u=g
$.fpZ.W(0,v)
x=4
return A.b(A.aA(),$async$Fn)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fn)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fn)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aig(s[q]),$async$Fn)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aig(v),$async$Fn)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fn)
case 14:return A.h(null,w)}})
return A.i($async$Fn,w)},
b1m(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rX(d,e),$async$b1m)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fqV(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1m,w)},
Bk(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bk)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b7(u,new B.fAi(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bk,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b7(e,new B.fEv(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aD("String","ngmy_doc_share_index_v1_"+u,C.X.aw(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bDl(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bk(d),$async$bDl)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyt(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG8(f))
x=4
return A.b(B.Hg(d,u),$async$bDl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDl,w)},
bDm(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bk(d),$async$bDm)
case 3:u=h
t=J.cD(u)
s=t.bj(u,new B.fyu(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOH(f))
x=4
return A.b(B.Hg(d,u),$async$bDm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDm,w)},
ade:function ade(d){this.a=d},
fuw:function fuw(){},
fAf:function fAf(d,e){this.a=d
this.b=e},
fAg:function fAg(d){this.a=d},
fAh:function fAh(){},
ceE:function ceE(d){this.a=d},
byi:function byi(d,e,f,g,h,i,j,k,l){var _=this
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
fAi:function fAi(){},
fEv:function fEv(){},
fyt:function fyt(d){this.a=d},
fyu:function fyu(d){this.a=d},
a8h(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.ceJ())?3:4
break
case 3:x=5
return A.b(B.b1o(d,e),$async$a8h)
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
return A.b(B.b1j(s),$async$a8h)
case 10:case 9:if(g){v=new A.R9(1,D.TJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wj(d,e),$async$a8h)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wo(!0,!0,d,e),$async$a8h)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oo(d,D.Ao,e,t)
v=new A.R9(p,D.Ao,t)
x=1
break}v=B.ceI(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
Wj(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8j(null,d,e),$async$Wj)
case 3:p=g
try{u=C.X.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1i(p,d.length,e),$async$Wj)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ceG(e,C.d.gH(d).a,r.b),$async$Wj)
case 7:case 6:q=r.a
x=8
return A.b(B.Oo(d,D.TJ,e,q),$async$Wj)
case 8:v=new A.R9(d.length,D.TJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wj,w)},
Wk(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mM(D.nb)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8i(d,e),$async$Wk)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ceB(s,d,e,t),$async$Wk)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1j(t),$async$Wk)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rX(e,d),$async$Wk)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wj(A.a([d],y.r),e),$async$Wk)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
Wm(){var x=0,w=A.j(y.H)
var $async$Wm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h9M(),$async$Wm)
case 2:x=3
return A.b(B.aSP(),$async$Wm)
case 3:return A.h(null,w)}})
return A.i($async$Wm,w)},
a8i(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1l()
x=3
return A.b(B.ceF(e,d.a,u),$async$a8i)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
Oo(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.TJ&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8i(p,f),$async$Oo)
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
return A.b(B.ceA(o,p,u,f),$async$Oo)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ceB(o,p,f,t),$async$Oo)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cez(o,u,p,f),$async$Oo)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1o(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ceH(e,d),$async$b1o)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wo(!1,!0,d,e),$async$b1o)
case 4:u=g
if(u!=null){t=u.b
v=new A.R9(u.a,D.Ao,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1o,w)},
ceH(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ceH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wi(d,s,0,1),$async$ceH)
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
return A.i($async$ceH,w)},
ceI(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ceI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8j(null,d,e),$async$ceI)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hqU(u)
if(t.length>800){v=null
x=1
break}v=new A.R9(d.length,D.dSo,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceI,w)},
ar_(d,e,f){return B.hWC(d,e,f)},
hWC(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ar_=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h9R(g)?3:4
break
case 3:x=5
return A.b(B.ceC(g),$async$ar_)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fo(d,a0,s)
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
return A.b(B.b1h(q),$async$ar_)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wl(p,a0)
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
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h9Q(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wl(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Ju(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Ju(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Ju(h,d,a0)
x=1
break}if(J.eK(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wl(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ar_,w)},
Ju(d,e,f){return B.hWA(d,e,f)},
hWA(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ju=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cC(A.w(s)+"/manifest.json",0,null)
q=A.cC(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b19(r),$async$Ju)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b19(A.cC(s,0,null)),$async$Ju)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cee(o,r,a1,n,a2),$async$Ju)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ced(q),$async$Ju)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wl(l,a2),$async$Ju)
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
a8j(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8j=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rX(f,r),$async$a8j)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cV.gcu().aO(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.aw(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
Wl(d,e){return B.hWB(d,e)},
hWB(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wl=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cM.aO(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cm(i,a3,d,k,l,o),$async$Wl)
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
return A.i($async$Wl,w)},
On:function On(d,e){this.a=d
this.b=e},
ceJ:function ceJ(){},
a2w(d){var x=A.P(d).ax.a===C.H,w=x?D.aiO:D.agi,v=x?D.akA:C.c,u=x?C.aS:C.a_,t=x?C.bN:C.an,s=x?D.ahL:C.bj
return new A.aIj([w,s,v,u,t,x?C.fr:C.bQ])},
hHg(d,e){var x=e?C.w.j(0.72):C.b6
return A.cg(null,x,!0,null,new B.h1i(e),d,null,!0,!0,y.N)},
ceo(d,e,f,g,h,i,j,k,l){return new B.Wd(e,l,d,f,k,j,g,h,i,null)},
a_u(d,e,f,g,h,i,j){return new B.bfZ(g,h,j,e,i,d,f,null)},
h1i:function h1i(d){this.a=d},
a_r:function a_r(d,e){this.c=d
this.a=e},
aBe:function aBe(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcS:function dcS(d){this.a=d},
dcQ:function dcQ(d){this.a=d},
dcR:function dcR(d){this.a=d},
bxV:function bxV(){},
Wd:function Wd(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFh:function aFh(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_D:function e_D(d){this.a=d},
e_0:function e_0(d,e){this.a=d
this.b=e},
e_1:function e_1(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e,f){this.a=d
this.b=e
this.c=f},
dZz:function dZz(d){this.a=d},
dZB:function dZB(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e,f){this.a=d
this.b=e
this.c=f},
dZF:function dZF(d){this.a=d},
e_r:function e_r(d,e){this.a=d
this.b=e},
e_s:function e_s(d){this.a=d},
dZY:function dZY(d,e,f){this.a=d
this.b=e
this.c=f},
dZV:function dZV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZE:function dZE(d){this.a=d},
e_5:function e_5(d){this.a=d},
e_4:function e_4(){},
dZK:function dZK(d){this.a=d},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_q:function e_q(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZX:function dZX(d,e){this.a=d
this.b=e},
e_h:function e_h(d,e){this.a=d
this.b=e},
e_d:function e_d(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_e:function e_e(){},
e_f:function e_f(){},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_i:function e_i(){},
e_j:function e_j(d){this.a=d},
e_b:function e_b(d,e){this.a=d
this.b=e},
e_6:function e_6(d){this.a=d},
e_7:function e_7(d){this.a=d},
e_8:function e_8(d){this.a=d},
e_9:function e_9(d){this.a=d},
e_a:function e_a(d){this.a=d},
dZH:function dZH(){},
dZI:function dZI(d){this.a=d},
dZJ:function dZJ(d,e){this.a=d
this.b=e},
dZD:function dZD(d,e){this.a=d
this.b=e},
dZC:function dZC(d,e,f){this.a=d
this.b=e
this.c=f},
dZZ:function dZZ(d){this.a=d},
e__:function e__(d,e,f){this.a=d
this.b=e
this.c=f},
dZT:function dZT(d,e){this.a=d
this.b=e},
dZP:function dZP(d){this.a=d},
dZM:function dZM(d,e,f){this.a=d
this.b=e
this.c=f},
dZQ:function dZQ(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZS:function dZS(){},
dZU:function dZU(d,e){this.a=d
this.b=e},
dZN:function dZN(d){this.a=d},
dZL:function dZL(d,e,f){this.a=d
this.b=e
this.c=f},
dZO:function dZO(){},
e_3:function e_3(d){this.a=d},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_n:function e_n(d,e){this.a=d
this.b=e},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d,e){this.a=d
this.b=e},
e_m:function e_m(d){this.a=d},
e_A:function e_A(d){this.a=d},
e_y:function e_y(d){this.a=d},
e_z:function e_z(d){this.a=d},
e_B:function e_B(){},
e_C:function e_C(d,e){this.a=d
this.b=e},
e_u:function e_u(d,e){this.a=d
this.b=e},
e_v:function e_v(d,e,f){this.a=d
this.b=e
this.c=f},
e_t:function e_t(d,e,f){this.a=d
this.b=e
this.c=f},
e_w:function e_w(d,e){this.a=d
this.b=e},
e_x:function e_x(d,e){this.a=d
this.b=e},
aBb:function aBb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfY:function bfY(d,e,f){this.c=d
this.d=e
this.a=f},
dcO:function dcO(){},
dcP:function dcP(){},
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
ddb:function ddb(){},
dda:function dda(d){this.a=d},
a_t:function a_t(d,e,f){this.c=d
this.d=e
this.a=f},
aBg:function aBg(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dd7:function dd7(d){this.a=d},
dd8:function dd8(d,e,f){this.a=d
this.b=e
this.c=f},
dd9:function dd9(d,e){this.a=d
this.b=e},
dd5:function dd5(d,e){this.a=d
this.b=e},
dd3:function dd3(d){this.a=d},
dd1:function dd1(d){this.a=d},
dcZ:function dcZ(d){this.a=d},
dd4:function dd4(d){this.a=d},
dd0:function dd0(d){this.a=d},
dd6:function dd6(d){this.a=d},
dd2:function dd2(d){this.a=d},
dd_:function dd_(d){this.a=d},
a_q:function a_q(d,e,f){this.c=d
this.d=e
this.a=f},
aBd:function aBd(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcL:function dcL(d){this.a=d},
dcK:function dcK(d,e){this.a=d
this.b=e},
dcM:function dcM(d){this.a=d},
dcJ:function dcJ(d,e){this.a=d
this.b=e},
dcN:function dcN(d){this.a=d},
dcI:function dcI(d,e){this.a=d
this.b=e},
dcE:function dcE(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcG:function dcG(d,e){this.a=d
this.b=e},
dcH:function dcH(d){this.a=d},
QI:function QI(d,e,f){this.c=d
this.d=e
this.a=f},
aBj:function aBj(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
ddo:function ddo(d){this.a=d},
ddp:function ddp(d){this.a=d},
ddq:function ddq(d){this.a=d},
ddr:function ddr(d){this.a=d},
dds:function dds(d,e){this.a=d
this.b=e},
ddt:function ddt(d){this.a=d},
ddv:function ddv(d){this.a=d},
ddu:function ddu(d){this.a=d},
a_v:function a_v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBh:function aBh(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
ddk:function ddk(d,e){this.a=d
this.b=e},
ddl:function ddl(d,e){this.a=d
this.b=e},
ddc:function ddc(d,e,f){this.a=d
this.b=e
this.c=f},
ddd:function ddd(d){this.a=d},
dde:function dde(){},
ddj:function ddj(){},
ddf:function ddf(d,e){this.a=d
this.b=e},
ddg:function ddg(d,e){this.a=d
this.b=e},
ddh:function ddh(d,e){this.a=d
this.b=e},
ddi:function ddi(d,e){this.a=d
this.b=e},
adw:function adw(d,e){this.c=d
this.a=e},
dcD:function dcD(d){this.a=d},
a_p:function a_p(d){this.a=d},
aBc:function aBc(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_w:function a_w(d,e){this.c=d
this.a=e},
aBi:function aBi(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ddn:function ddn(d){this.a=d},
ddm:function ddm(d){this.a=d},
bfZ:function bfZ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hWD(){var x,w=$.ov(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.hf(v)},
Op(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Op=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Op)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bO),$async$Op)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
a8k(d){return B.hWE(d)},
hWE(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8k)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8k)
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
return A.i($async$a8k,w)},
Wn(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Op(),$async$Wn)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dL(A.a2(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8k(s),$async$Wn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
Wo(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wo)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceL(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hWD()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.ceM(s),t),t.k("ak.E"))
x=6
return A.b(B.Op(),$async$Wo)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8k(q),$async$Wo)
case 7:x=8
return A.b(B.a8l(r,u,g,s),$async$Wo)
case 8:v=new A.brP(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
ar0(d){var x=0,w=A.j(y.y),v,u,t
var $async$ar0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Op(),$async$ar0)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar0,w)},
ceN(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Op(),$async$ceN)
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
return A.i($async$ceN,w)},
a8l(d,e,f,g){return B.hWF(d,e,f,g)},
hWF(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8l=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqZ("media",r,new B.ceK(s,e,g),f,q),$async$a8l)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wn(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8l)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wn(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8l)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wn(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8l)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8l,w)},
Fo(d,e,f){return B.hWG(d,e,f)},
hWG(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fo=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fo)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ar0(b3),$async$Fo)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iQ,null,g),$async$Fo)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ar0(b3),$async$Fo)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Op(),$async$Fo)
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
if(!y.j.b(a4)||J.ct(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gJ(a4)
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
a8=$.f1().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.pp(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abM(a8.a,b0,"media",a8.d,a9).Df(m)
k=A.cC(l,0,null)
x=17
return A.b(B.b1a(k,n,o,s,b7),$async$Fo)
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
break}a7=g.gR(g)
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
a8=A.pp(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abM(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fo)
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
a0=A.dL(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8k(e),$async$Fo)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fo,w)},
ceL:function ceL(){},
ceM:function ceM(d){this.a=d},
ceK:function ceK(d,e,f){this.a=d
this.b=e
this.c=f},
aSP(){var x=0,w=A.j(y.H),v,u
var $async$aSP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i6O=null
v=y.H
u=A.dN(null,v)
x=2
return A.b(u,$async$aSP)
case 2:u=A.dN(null,v)
x=3
return A.b(u,$async$aSP)
case 3:u=$.hfh
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dN(u,v),$async$aSP)
case 4:$.hfh=$.ifX=$.ifY=null
return A.h(null,w)}})
return A.i($async$aSP,w)},
fE6(d){var x=0,w=A.j(y.H),v,u
var $async$fE6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9O){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fE7(new A.c3(u,y.aY))
x=3
return A.b(u.iJ(0,C.ij,new B.fE8()),$async$fE6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fE6,w)},
ifV(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hWn(x):x},
hfl(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.ar2(u)
x=1
break}v=B.h9Q(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfl,w)},
hfk(d){var x=0,w=A.j(y.T),v,u,t
var $async$hfk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.ar3(u)
x=1
break}v=B.h9Q(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfk,w)},
fXK(d){var x=0,w=A.j(y.T),v
var $async$fXK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ar3(d),$async$fXK)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXK,w)},
bEe(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hfk(d),$async$bEe)
case 3:q=f
if(q==null){x=1
break}t=C.X.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEe,w)},
frM(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$frM=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wh(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cm(d.aq0(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$frM,w)},
Hi(d,e,f){return B.iio(d,e,f)},
iio(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hfl(a1),$async$Hi)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aP(0,e,null)
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
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hJg().aGp(D.dFD,null),$async$Hi)
case 4:l=d.hfh=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aA2(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fEI(f,k,new B.fEJ(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8Q(0,new B.Yx(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amr(0),$async$Hi)
case 7:x=6
return A.b(d.a8I(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fE6(l),$async$Hi)
case 8:x=9
return A.b(l.aqN(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ifV(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aw(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ar4(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hqU(h)
case 11:v=new A.br4(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fE7:function fE7(d){this.a=d},
fE8:function fE8(){},
fEJ:function fEJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEI:function fEI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEH:function fEH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ikt(d){switch(d){case"new":return D.eC1
case"checking":return D.eC2
case"connected":return D.eC4
case"completed":return D.eC3
case"failed":return D.eC6
case"disconnected":return D.eC7
case"closed":return D.aRF
case"count":return D.eC5}return D.aRF},
iku(d){switch(d){case"new":return D.aRG
case"gathering":return D.eC8
case"complete":return D.a9O}return D.aRG},
ivj(d){switch(d){case"stable":return D.eC9
case"have-local-offer":return D.eCa
case"have-local-pranswer":return D.eCc
case"have-remote-offer":return D.eCb
case"have-remote-pranswer":return D.eCd
case"closed":return D.aRM}return D.aRM},
its(d){switch(d){case"new":return D.aRJ
case"connecting":return D.aRK
case"connected":return D.aRL
case"closed":return D.a9P
case"disconnected":return D.aRI
case"failed":return D.aRH}return D.a9P},
aaI:function aaI(d,e){this.a=d
this.b=e},
Pt:function Pt(d,e){this.a=d
this.b=e},
Yw:function Yw(d,e){this.a=d
this.b=e},
Ps:function Ps(d,e){this.a=d
this.b=e},
FS:function FS(d,e){this.a=d
this.b=e},
csx:function csx(){},
hbB(d){var x=new B.FR()
x.a=d
x.b=!0
return x},
FR:function FR(){this.b=this.a=$},
aaH:function aaH(){},
avz:function avz(){},
Yx:function Yx(d,e){this.a=d
this.b=e},
h9M(){var x=0,w=A.j(y.H)
var $async$h9M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h9M,w)},
h9P(d,e,f){var x=0,w=A.j(y.T),v
var $async$h9P=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mM(D.nb))){v=null
x=1
break}v=B.fY0(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9P,w)},
hqU(d){var x,w=F.afH.a5w(C.dW.aO(d),null)
if(w.length===0){x=C.dW.aO(d)
return C.cV.gcu().aO(x)}return C.cV.gcu().aO(w)},
hWm(d){var x,w,v=C.cM.aO(d)
try{x=C.ca.cJ(0,F.afG.bg5(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h9Q(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hWm(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cM.aO(x))
return v}catch(u){return x}}return null},
hWn(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hWo(){var x,w=$.ov(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.hf(v)},
b1g(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bO),$async$b1g)
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
return A.i($async$b1g,w)},
cet(d,e){return B.hWp(d,e)},
hWp(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cet=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$cet)
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
return A.i($async$cet,w)},
b1j(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1g(d),$async$b1j)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1j,w)},
b1i(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hWo()
r=C.a.i(f)
t=C.dW.aO(s)
x=3
return A.b(B.cet(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cV.gcu().aO(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1i)
case 3:if(!h){v=null
x=1
break}v=new A.a1w("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1i,w)},
b1h(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1g(o),$async$b1h)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cJ(0,C.cM.aO(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1h,w)},
ceu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ceu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(W.bFb("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$ceu)
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
return A.i($async$ceu,w)},
b1k(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jq(),$async$b1k)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1k,w)},
aqW(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqW)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1k(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqW,w)},
aqU(d,e){var x=0,w=A.j(y.H)
var $async$aqU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqU)
case 3:x=2
return A.b(g.aD("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqU)
case 2:return A.h(null,w)}})
return A.i($async$aqU,w)},
a8c(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8c=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8c)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8c)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8b(s),$async$a8c)
case 5:x=6
return A.b(B.aqU(f,u),$async$a8c)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8c,w)},
a8d(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8d=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8d)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8d)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
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
return A.b(B.aqU(g,q),$async$a8d)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8b(u),$async$a8d)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
a8e(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8e=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8e)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jq(),$async$a8e)
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
s=B.b1d(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8e)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aD("String","ngmy_doc_share_school_session_"+s,C.X.aw(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8e)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
cev(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cev=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$cev)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aP(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a2(q,y.N,y.z)
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
return A.i($async$cev,w)},
Jr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cev(d),$async$Jr)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1k(t),$async$Jr)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqV(d),$async$Jr)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1d(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqV(d),$async$Jr)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jr,w)},
aqV(d){var x=0,w=A.j(y.H)
var $async$aqV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqV)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqV)
case 2:return A.h(null,w)}})
return A.i($async$aqV,w)},
b1l(){var x,w=$.ov(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.hf(v)},
a8f(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h9R(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cey(d){return B.hWr(d)},
hWr(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cey=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8f(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bO),$async$cey)
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
return A.i($async$cey,w)},
aqY(d,e){return B.hWs(d,e)},
hWs(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8f(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$aqY)
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
return A.i($async$aqY,w)},
ceA(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ceA=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8f(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqY(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ceA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ceA,w)},
cez(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cez=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8f(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqY(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cez)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cez,w)},
ceB(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ceB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8f(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqY(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceB,w)},
ceC(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ceC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h9R(d)){v=null
x=1
break}x=3
return A.b(B.cey(d),$async$ceC)
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
return A.i($async$ceC,w)},
a8m(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8m=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8m)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bO),$async$a8m)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
return A.i($async$a8m,w)},
ar1(d){return B.hWH(d)},
hWH(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ar1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$ar1)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$ar1)
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
return A.i($async$ar1,w)},
ar2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ar2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar2)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8m(),$async$ar2)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cJ(0,C.cM.aO(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dL(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.ar1(s),$async$ar2)
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
return A.i($async$ar2,w)},
ar4(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ar4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$ar4)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8m(),$async$ar4)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dL(A.a2(s,r,q),r,q)
r=C.dW.aO(C.a.i(e))
q.n(0,"answer",C.cV.gcu().aO(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.ar1(u),$async$ar4)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ar4,w)},
ar3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ar3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$ar3)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8m(),$async$ar3)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cJ(0,C.cM.aO(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ar3,w)},
apV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.qn)){v=null
x=1
break}x=3
return A.b(p.lU(e),$async$apV)
case 3:r=g
u=4
x=7
return A.b(r.hi(C.ha),$async$apV)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.w2(o))
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
return A.i($async$apV,w)},
ir5(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.v(w),5,"0")
return v},
fW1(d){return B.ir7(d)},
ir7(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fW1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iC("media").Lu(d,3600),$async$fW1)
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
return A.i($async$fW1,w)},
DJ(d,e,f,g,h,i){var x=null
return B.ir4(d,e,f,g,h,i)},
ir4(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DJ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hqX(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h9T(r),$async$DJ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fW1(o),$async$DJ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8g(r),$async$DJ)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aVh)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.ML(A.a([],g))
x=15
return A.b(d.fa(0,A.awo("GET",A.cC(n,0,null))).dg(0,C.GN),$async$DJ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8g(r),$async$DJ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Li(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DJ)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1n(r,k),$async$DJ)
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
case 10:i=B.Wh(r)
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
return A.b(B.a8g(r),$async$DJ)
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
aSt(d){return B.ir6(d)},
ir6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iC("media").W(0,d),$async$aSt)
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
return A.i($async$aSt,w)}},D,S,L,T,U,V,W,M,X
J=c[1]
A=c[0]
C=c[2]
N=c[47]
F=c[265]
H=c[152]
O=c[235]
E=c[228]
G=c[95]
P=c[198]
Q=c[153]
R=c[233]
I=c[270]
K=c[278]
B=a.updateHolder(c[22],B)
D=c[276]
S=c[197]
L=c[218]
T=c[74]
U=c[259]
V=c[80]
W=c[62]
M=c[94]
X=c[277]
B.csy.prototype={
aGp(d,e){return this.cQb(d,e)},
cQb(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dL(r,s,t)
t.u(0,d)
u=new q(A.kk(A.cv(t)))
t=J.k(u)
v=B.i0l(C.cV.gcu().aO(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGp,w)}}
B.b6u.prototype={
bCm(d){var x=this,w=x.w
w.onclose=A.ht(new B.cst(x))
w.onopen=A.ht(new B.csu(x))
w.onmessage=A.ht(new B.csv(x))
w.onbufferedamountlow=A.ht(new B.csw(x))},
gd6(d){return this.x},
aiF(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FR()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hbB(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aiF)
case 8:v=t.hbB(s.ap4(f,0,null))
x=1
break
case 7:case 4:v=B.hbB(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiF,w)}}
B.b6v.prototype={
bCn(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ht(new B.csz(x)))
w.addEventListener("icecandidate",A.ht(new B.csA(x)))
w.addEventListener("iceconnectionstatechange",A.ht(new B.csB(x)))
w.onicegatheringstatechange=A.ht(new B.csC(x))
w.addEventListener("signalingstatechange",A.ht(new B.csD(x)))
if(!$.hjn())w.addEventListener("connectionstatechange",A.ht(new B.csE(x)))
w.addEventListener("negotiationneeded",A.ht(new B.csF(x)))
w.addEventListener("track",A.ht(new B.csG(x)))},
amr(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kk(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amr)
case 3:t=f
v=new B.Yx(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amr,w)},
a8I(d,e){return this.bri(0,e)},
bri(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8I)
case 2:return A.h(null,w)}})
return A.i($async$a8I,w)},
a8Q(d,e){return this.brD(0,e)},
brD(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8Q)
case 2:return A.h(null,w)}})
return A.i($async$a8Q,w)},
aqN(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yx(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqN,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f4(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adx.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_s.prototype={
S(){return new B.aBf()},
gd1(){return this.c}}
B.aBf.prototype={
Y(){this.a4()
this.afe()},
afe(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1e(u.e,u.c),$async$afe)
case 2:t=e
if(v.c!=null)v.m(new B.dcW(v,t))
return A.h(null,w)}})
return A.i($async$afe,w)},
R1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$R1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqR(t.e,t.c,!1),$async$R1)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fnk)
x=1
break}x=4
return A.b(B.a8a(u.a.c,"individual"),$async$R1)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a75(A.ed(new B.dcT(u),!1,null,y.H)),$async$R1)
case 5:case 1:return A.h(v,w)}})
return A.i($async$R1,w)},
JP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fBY(o),$async$JP)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8e(o.e,r,s,q),$async$JP)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fkj)
x=1
break}x=5
return A.b(B.a8a(u.a.c,"member"),$async$JP)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a75(A.ed(new B.dcV(u),!1,null,y.H)),$async$JP)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JP,w)},
yH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a89(t.e,o,t.f,t.r,t.w,s),$async$yH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8a(u.a.c,"org_owner"),$async$yH)
case 4:x=5
return A.b(B.aqW(u.a.c),$async$yH)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fCs(o),$async$yH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8c(s,t,o,q.c),$async$yH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fkf)
x=1
break}x=10
return A.b(B.aqW(u.a.c),$async$yH)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a75(A.ed(new B.dcU(u),!1,null,y.H)),$async$yH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yH,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H,q=r?C.nD:C.qp,p=B.h9O(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dO,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aB.j(0.35),C.fR,24)],y.V)
u=y.p
v=A.r(s,A.x(A.a([A.r(s,D.fHv,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hi,s,s,s),C.aC,D.h0u,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cb_,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m1(new B.dcY(),s),C.T,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.u(w,A.a([new B.ae0(C.f1,C.aEa,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcjl(),s),C.ae],u))
w.push(new B.ae0(C.py,C.a5p,"Team Member","Sign in with your organization access code + password",t.gckc(),s))
w.push(C.ae)
w.push(new B.ae0(C.aq8,C.a74,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjI(),s))
return A.c4(s,q,A.bm(!0,A.cb(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae0.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aH(!1,C.a3,!0,s,A.aN(!1,r,!0,A.eB(A.A(A.a([A.r(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.mD,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zh,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDU.prototype={}
B.aH3.prototype={}
B.jF.prototype={
mM(d){var x=this.b,w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garu(){var x=this.d
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
bfz(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jF(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOH(d){return this.bfz(null,d)},
aG8(d){return this.bfz(d,null)}}
B.Wb.prototype={
S(){return new B.aFf(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aFf.prototype={
Y(){this.a4()
this.aff()},
aff(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aff=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cl(u.a.c),$async$aff)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZw(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aff,w)},
afg(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fy(s)),$async$afg)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fof)
case 1:return A.h(v,w)}})
return A.i($async$afg,w)},
a_G(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_G=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apV(s.d,4),$async$a_G)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rl(r,"ngmy_my_code_"+m+".png"),$async$a_G)
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
return A.i($async$a_G,w)},
aj6(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aj6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abl("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aj6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj6,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.H,n=o?C.nD:C.qp,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m4
else if(q.e==null)x=A.as(new A.D(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.m(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.m(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.l(20)
u=A.K(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.r(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,I.a5R,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,X.amM,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aB.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.nh,w,C.l5,new A.em(A.r(p,A.qf(p,p,!1,B.hWi(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l5,A.A(A.a([A.E(A.ep(M.Dm,C.Wc,q.gcbM(),p),1),C.au,A.E(A.dh(C.zJ,p,C.ac6,q.gcbN(),A.bp(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.W,new A.a5(1/0,p,A.ep(L.a4a,D.fX3,q.gcz0(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,T.anj,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wf.prototype={
S(){return new B.aFi(new A.au(C.ax,$.ax()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFi.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jp(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
a_H(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jp(u.d.a.a)
if(t==null){u.m(new B.e_F(u))
x=1
break}u.m(new B.e_G(u))
s=u.a
r=s.c
x=3
return A.b(B.a88(s.d,new B.e_H(u),t,r),$async$a_H)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_I(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_H,w)},
a2X(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2X=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e_J(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.rX(r.a.c,q),$async$a2X)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_K(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj_(p,m,l,j,k),$async$a2X)
case 8:o=e
if(r.c!=null)r.m(new B.e_L(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e_M(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_N(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2X,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.H,i=j?D.aiO:D.agi,h=j?D.akA:C.c,g=j?C.aS:C.a_,f=j?C.bN:C.an,e=j?D.ahL:C.bj
i=[i,e,h,g,f,j?C.fr:C.bQ]
x=A.P(d).ax.a===C.H
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.r(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.r(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.r(k,A.A(A.a([A.r(k,D.bZ3,C.f,k,k,new A.o(k,k,k,A.l(16),k,new A.a8(C.aA,C.aD,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,I.a5R,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uZ(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blq()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aP(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.On,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ay(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_O(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mz,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mp(l.a.d,4)
m=A.C(new A.N(m,new B.e_P(x,new A.aIj(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lj,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.T,e,C.T,q,C.dc,p,C.T,A.r(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fiM)
else q.push(A.X(C.lR,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b_,new A.o(u,k,s,t,k,k,C.n),C.iP,k,k,k,k,C.eW,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bGx,k,k,C.ah),1)
u=l.f?k:l.gcz1()
t=i[3]
s=i[1]
q=A.l(16)
s=A.ep(L.a4a,D.fYa,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbO()
t=A.bp(C.aB,k,k,0,C.c,k,C.nI,k,new A.b9(A.l(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lE(new B.e_Q(),A.x(A.a([e,new A.D(D.bG0,A.x(A.a([s,C.T,i,C.ae,A.bJ(l.f?C.tQ:D.fWp,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cw,C.a0o,k,k,new A.bs(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blq.prototype={
p_(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hk(C.bC,v.length),C.aP)}}
B.Wc.prototype={
S(){return new B.aFg()}}
B.aFg.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b5,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b5,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.ax()
v.P$=0
v=w.e
v===$&&A.c()
v.U$=x
v.P$=0
v=w.f
v===$&&A.c()
v.U$=x
v.P$=0
w.a3()},
afh(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afh=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZx(r))
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
return A.b(B.a8d(p,m,n,o,C.a.i(l).length===0?null:l),$async$afh)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fnR)
s=[1]
x=4
break}p.L(y.q).f.T(D.fms)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZy(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afh,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H?C.nD:C.qp,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fOL,s,s,s,1,s,!0),p=A.r(s,D.by3,C.f,s,s,new A.o(s,s,s,A.l(22),s,E.Ia,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aP(),o,s,s,s,s,s,2,D.c5p,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aP(),x,s,s,s,s,s,2,D.c5k,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aP(),w,s,s,s,s,s,2,D.c5A,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbP()
u=A.bp(C.aB,s,s,s,s,C.hb,s,s,s,s,s,s)
return A.c4(q,r,A.cb(A.x(A.a([p,C.dc,o,C.ae,x,C.ae,w,C.nh,A.bJ(t.r?C.tQ:C.aY8,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.ade.prototype={}
B.byi.prototype={
a5N(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.aq0()))
x=3
return A.b(B.Sj(t,s),$async$a5N)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5N,w)},
gd1(){return this.a}}
B.On.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_r.prototype={
S(){return new B.aBe(new A.au(C.ax,$.ax()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBe.prototype={
Y(){this.a4()
$.aU.x1$.push(new B.dcS(this))},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
cbV(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2w(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nD:v.a[0],p=A.l(24),o=A.K(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aB.j(u?0.25:0.12),C.fR,32)],n),l=A.r(w,S.asQ,C.f,w,w,new A.o(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aB.j(0.4),C.cz,16)],n),C.atF,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uZ(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxV()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aP(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.Cy,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b6m),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcQ(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mz,w,w,w,w)
f=f[1]
h=y.p
return A.eG(w,C.L,new A.cO(P.M5,new A.bN(new A.o(t,w,o,p,m,w,C.n),C.bi,new A.D(C.wC,A.x(A.a([l,C.aO,k,C.T,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dV(C.o5,new B.dcR(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.l(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.au,A.E(new A.bN(new A.o(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aB.j(0.35),C.cL,12)],n),K.Qn,C.n),C.bi,A.aH(!1,C.a3,!0,w,A.aN(!1,A.l(14),!0,D.evo,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbU(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.O,0,C.p),w),w),w),w,w,w,C.Ov,w,C.d8,w,w,w)}}
B.bxV.prototype={
p_(d,e){return e.aml(e.a.toUpperCase())}}
B.Wd.prototype={
S(){return new B.aFh(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFh.prototype={
Y(){var x=this
x.a4()
x.ur()
x.w=A.dg(C.jH,new B.e_D(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wm()
this.a3()},
a1P(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$a1P)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bk(u.a.c),$async$a1P)
case 4:u.m(new s.e_0(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1P,w)},
ur(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ur=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Om(u.a.c),$async$ur)
case 3:t=e
x=4
return A.b(B.Bk(u.a.c),$async$ur)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e_1(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.Od(u.d)
B.Cl(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ur,w)},
Od(d){return this.bGp(d)},
bGp(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Od=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8i(r,u.a.c),$async$Od)
case 8:p=f
if(u.c==null){x=1
break}new B.dZA(u,r,p).$0()
u.c.ep()
case 7:if(!(C.a.a_(r.c,"video/")||r.mM(D.nb))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wk(r,u.a.c),$async$Od)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bk(u.a.c),$async$Od)
case 12:u.m(new o.dZB(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Od,w)},
OD(d){return this.bML(d)},
bML(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8i(d,u.a.c),$async$OD)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZG(u,d,t))
x=6
return A.b(A.fI(new A.fy(t)),$async$OD)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fy(r.toUpperCase())),$async$OD)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OD,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
us(d,e){return this.cJW(d,e)},
cJW(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$us=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e_r(r,e))
u=3
x=6
return A.b(d.$0(),$async$us)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e_s(r))
$.eY.mF()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$us,w)},
gaXU(){var x=this.a
return x.f||x.r||x.w},
IG(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXU()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cer(s,n,r,q,o,t),$async$IG)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fPl(o,u.a.c),$async$IG)
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
return A.b(B.DL(s,o,r,q,n,t),$async$IG)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IG,w)},
a0T(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqW(u.a.c),$async$a0T)
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
return A.b(A.a6(t,!1).ce(A.ed(new B.dZY(u,r,q),!1,null,y.H)),$async$a0T)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0T,w)},
a1Z(d){return this.csA(d)},
csz(){return this.a1Z(1)},
csA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXU()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqT(u.a.c),$async$a1Z)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1Z,w)},
ad6(d,e,f){return this.c2L(d,e,f)},
c2L(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.us(new B.dZV(u,d,null,e,f),"Uploading\u2026"),$async$ad6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad6,w)},
bGy(){B.hGd(!1,new B.dZE(this))
return},
cxC(){this.m(new B.e_5(this))},
aAE(){var x=0,w=A.j(y.H),v=this
var $async$aAE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGy()
return A.h(null,w)}})
return A.i($async$aAE,w)},
ad2(){var x=0,w=A.j(y.H),v=this
var $async$ad2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.dZK(v),"Importing\u2026"),$async$ad2)
case 2:return A.h(null,w)}})
return A.i($async$ad2,w)},
T5(d){return this.cJf(d)},
cJf(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mM(D.nb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ed(new B.e_o(u,d),!1,null,y.H)),$async$T5)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mM(D.Sn)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ed(new B.e_p(u,d),!1,null,y.H)),$async$T5)
case 8:x=1
break
case 7:x=u.c3t(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ed(new B.e_q(u,d),!1,null,y.H)),$async$T5)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T5,w)},
c3t(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cUk,C.a.b2(x,w+1).toLowerCase())},
agP(d){return this.cjp(d)},
cjp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mM(D.nb)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ed(new B.dZW(u,d),!1,null,y.H)),$async$agP)
case 5:x=1
break
case 4:u.m(new B.dZX(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agP,w)},
Sr(d){return this.cAv(d)},
cAv(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pA(t,s.c,s.f),$async$Sr)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.us(new B.e_h(u,d),"Preparing QR\u2026"),$async$Sr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sr,w)},
ajw(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e_i(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.e_j(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sr(r),$async$ajw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajw,w)},
ajp(d){return this.cA2(d)},
cA2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2w(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_b(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajp)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T5(d)
break
case"qr":u.Sr(A.a([d],y.r))
break
case"send_my_code":u.ck1(A.a([d],y.r))
break
case"save":u.aiN(d)
break
case"delete":u.Jz(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajp,w)},
Yt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZH(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZI(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pA(t,s.c,s.f),$async$Yt)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.us(new B.dZJ(u,r),"Preparing file\u2026"),$async$Yt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yt,w)},
ahU(d){return this.cqU(d)},
cqU(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hHg(d,!1),$async$ahU)
case 3:s=f
r=s==null
q=B.a8f(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahU,w)},
agV(){var x=0,w=A.j(y.H),v=this,u
var $async$agV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fX7(u,v.a.c),$async$agV)
case 2:return A.h(null,w)}})
return A.i($async$agV,w)},
bGx(){B.hGd(!1,new B.dZD(this,null))
return},
JO(d,e){return this.ck2(d,e)},
b3o(d){return this.JO(null,d)},
ck1(d){return this.JO(d,null)},
ck2(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZZ(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xR.cq().ap6(!0,C.a2b,!1),$async$JO)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.us(new B.e__(l,s,r),"Preparing\u2026"),$async$JO)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
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
return A.b(B.bGn(p,l,e,s.a.c),$async$JO)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JO,w)},
IW(d){return this.c2y(d)},
c2y(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hWh(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3o(t),$async$IW)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.us(new B.dZT(u,d),"Receiving video\u2026"),$async$IW)
case 11:x=1
break
case 10:x=12
return A.b(u.us(new B.dZU(u,d),"Receiving\u2026"),$async$IW)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IW,w)},
EN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DF()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahU(t),$async$EN)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IW(s),$async$EN)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ed(new B.e_3(u),!1,null,y.N)),$async$EN)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ur(),$async$EN)
case 10:x=1
break
case 9:x=11
return A.b(u.IW(C.a.i(r)),$async$EN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EN,w)},
aiN(d){return this.cw9(d)},
cw9(d){var x=0,w=A.j(y.H),v=this
var $async$aiN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.us(new B.e_2(v,d),"Saving\u2026"),$async$aiN)
case 2:return A.h(null,w)}})
return A.i($async$aiN,w)},
Jz(d){return this.bP5(d)},
bP5(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lq(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jz)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ceu(t),$async$Jz)
case 6:case 5:s=d.a
x=7
return A.b(B.Fn(u.a.c,s),$async$Jz)
case 7:u.r.W(0,s)
x=8
return A.b(u.ur(),$async$Jz)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jz,w)},
ajC(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2w(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_n(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajC)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agV()
break
case"import":u.ad2()
break}case 1:return A.h(v,w)}})
return A.i($async$ajC,w)},
cbS(d){var x=d.c
if(C.a.a_(x,"video/")||d.mM(D.nb))return C.qV
if(C.a.a_(x,"image/")||d.mM(D.Sn))return C.uZ
if(C.a.q(x,"pdf"))return E.PS
return D.aqz},
B(d){var x,w,v=this,u=null,t=B.a2w(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.I3,u,u,u,new B.e_y(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bZE,u,u,u,v.e?u:v.gcjJ(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxB()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bTR:E.aqZ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a47,u,u,u,v.e?u:v.gcbT(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oO,u,u,u,v.e?u:v.gb4t(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c0r,u,u,u,v.e?u:new B.e_z(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m1(new B.e_A(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.r(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.r(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aB.j(A.P(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ks(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBb(C.jN,s,!0,t,w?u:v.gcAw(),u),1)
x.push(new A.D(D.bEN,A.lE(new B.e_B(),A.A(A.a([s,C.au,A.E(new B.aBb(C.v_,"Export",!1,t,w?u:v.gbSZ(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cw,C.iB,u,u,new A.bs(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfY(t,v.e?u:v.gb4t(),u)
else s=A.kt(!0,u,u,new B.e_C(v,t),s,u,D.bEF,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBb.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aB,t,t,0,C.c,t,C.t1,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t1,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bfY.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lE(new B.dcO(),new A.D(E.a1i,A.x(A.a([A.lE(new B.dcP(),A.r(x,A.X(C.zj,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.aA,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e3,C.hK,x,x,new A.bs(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.dh(C.oO,x,D.h0O,this.d,A.bp(C.aB,x,x,x,C.c,x,C.Ot,x,new A.b9(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.O,0,C.p),x),C.cw,C.Ck,x,x,new A.bs(0,1,w),s),x,x,x)}}
B.ady.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mM(D.nb))p=D.dux
else{p=C.a.a_(p,"image/")||i.mM(D.Sn)
n=y.O
p=p?A.a([C.cJ,C.aB],n):A.a([C.aN.j(0.85),C.aB.j(0.7)],n)}p=A.r(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.aA,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garu()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mM(D.nb))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mM(D.nb)))l.push(A.h7w(C.aB,!1,j,j,j,!1,j,j,new B.dda(k),j,j,new A.b9(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oG,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lE(new B.ddb(),new A.D(C.eo,A.aH(!1,C.a3,!0,j,A.aN(!1,r,!0,new A.D(C.a0K,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.bo("docshare_row_"+i.a,y.aw),j,new A.bs(0,1,y.X),y.i)}}
B.a_t.prototype={
S(){return new B.aBg()},
gd1(){return this.c}}
B.aBg.prototype={
Y(){this.a4()
this.yx()},
t(){B.hWw(this.e)
this.a3()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rX(o.c,o.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hWz(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hWy(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dd7(s))
x=1
break}s.m(new B.dd8(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.dd9(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a2W(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rX(t.c,t.d),$async$a2W)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fkQ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj_(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2W)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2W,w)},
c2r(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kH(u,C.A,v,new B.dd5(w,t),C.hl,C.dD,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fU(t,C.A,v,new B.dd6(w),C.hl,C.dD,!0,v,!1,v,v)
else return C.bM
return A.v4(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2w(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Dn,u,u,u,v.gb8f(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.FF
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.Dn,u,D.fJW,v.gb8f(),A.bp(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c2r()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_q.prototype={
S(){return new B.aBd(A.ajV(),C.bF,C.bF)},
gd1(){return this.c}}
B.aBd.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fC(w,A.a4(w).k("fC<1>")).iD(new B.dcL(v))
x.gcXO().iD(new B.dcM(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fC(x,A.a4(x).k("fC<1>"))}if(x==null)x=C.bcK
x.iD(new B.dcN(v))
v.yx()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rX(p.c,p.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dcE(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4F(r,s.a.d.c)),$async$yx)
case 8:if(s.c==null){x=1
break}s.m(new B.dcF(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcG(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a_I(){var x=0,w=A.j(y.H),v=this,u
var $async$a_I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hh(0),$async$a_I)
case 5:x=3
break
case 4:x=6
return A.b(u.iH(0),$async$a_I)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_I,w)},
aVI(d){var x=d.a
return C.a.b_(C.o.v(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.v(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2w(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.FF
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.r(o,D.bUP,C.f,o,o,new A.o(o,o,o,A.l(24),o,K.Qn,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aB,o,o,m,0,new B.dcH(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVI(p.w)+" / "+p.aVI(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aB,o,o,o,o,D.fhe,o,o,o,o,o,o)
r=p.f
q=A.X(r?H.v3:C.hn,o,o,o,o,o)
x=A.x(A.a([u,C.l5,t,x,C.dc,A.dh(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbW(),s)],y.p),C.l,o,C.e,C.O,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qH,x,o),o,o,o),o,!1,!1,o,o)}}
B.QI.prototype={
S(){return new B.aBj()},
gd1(){return this.c}}
B.aBj.prototype={
Y(){this.a4()
this.Qk()},
Qk(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qk=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h9P(o.c,o.d,new B.ddo(s)),$async$Qk)
case 7:r=e
if(r==null||r.length===0){s.m(new B.ddp(s))
x=1
break}s.e=r
q=N.ijj(r)
if(q==null){s.m(new B.ddq(s))
x=1
break}s.d=q
q.aW(0,s.gb3b())
x=8
return A.b(q.iX(0).dg(0,C.rZ),$async$Qk)
case 8:if(s.c==null){x=1
break}s.m(new B.ddr(s))
x=9
return A.b(q.qr(0),$async$Qk)
case 9:q.u0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.dds(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qk,w)},
chX(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.ddt(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dw(0,x.gb3b())
w=x.d
if(w!=null)w.t()
B.itL(x.e)
x.a3()},
afk(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1m(u.c,u.d),$async$afk)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afk,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2w(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aI(t,t,t,t,C.oN,t,t,t,u.gcbQ(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.it(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.FF
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajn(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fH(x,new A.an(C.A,t,C.ad,C.t,A.a([new A.AQ(s,t),A.az(t,A.zo(A.r(t,A.X(q?H.v3:C.hn,C.c,t,t,t,48),C.f,t,t,new A.o(C.b6,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.ddv(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_v.prototype={
S(){return new B.aBh(new A.cw(null,y.A))}}
B.aBh.prototype={
gcJD(){var x,w,v=this.a
if(v.e!==D.TK)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJd(){var x,w,v=this.a
if(v.e!==D.Ao)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJD()
if(x!=null){v.Rs(x)
v.e=A.dg(Q.GQ,new B.ddk(v,x))}w=v.gcJd()
if(w!=null){v.Rr(w)
v.f=A.dg(C.fN,new B.ddl(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rr(d){return this.cp6(d)},
cp6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ar0(d),$async$Rr)
case 3:t=f
x=4
return A.b(B.ceN(d),$async$Rr)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.ddc(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rr,w)},
Rs(d){return this.cp7(d)},
cp7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fXK(d),$async$Rs)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEe(t),$async$Rs)
case 4:if(u.c==null){x=1
break}u.m(new B.ddd(u))
u.c.L(y.q).f.T(D.aUT)
case 1:return A.h(v,w)}})
return A.i($async$Rs,w)},
gc7H(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbR(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2I(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DF()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fo0)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ed(new B.dde(),!1,null,y.N)),$async$a2I)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEe(s),$async$a2I)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aUT)
case 1:return A.h(v,w)}})
return A.i($async$a2I,w)},
aaX(d){return this.bMM(d)},
bMM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fy(C.d.aN(t,", "))),$async$aaX)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaX,w)},
afi(d){return this.bMu(d)},
bMu(d){var x=0,w=A.j(y.H),v=this
var $async$afi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fy(v.a.c)),$async$afi)
case 2:if(d.e!=null)d.L(y.q).f.T(D.flj)
return A.h(null,w)}})
return A.i($async$afi,w)},
a2C(d){return this.cwb(d)},
cwb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2C=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apV(s.d,4),$async$a2C)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rl(r,"ngmy_doc_share_qr.png"),$async$a2C)
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
return A.i($async$a2C,w)},
gaZa(){var x,w=this.a
if(w.e!==D.Jj)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaU(d){return this.bMF(d)},
bMF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZa()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fy(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaU)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fn_)
case 1:return A.h(v,w)}})
return A.i($async$aaU,w)},
afj(){var x=0,w=A.j(y.H),v=this,u
var $async$afj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wm(),$async$afj)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afj,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2w(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jj&&i!==D.TK&&i!==D.Ao
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jj||t===D.TK||t===D.Ao?l:A.aI(l,l,l,l,C.lo,l,l,l,m.gb1d(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qf(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7H(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jj){t=C.aB.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.T,A.r(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gcbR(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c4s,D.fTz,new B.ddf(m,d),l)],p))}if(m.a.e===D.Jj&&m.gaZa()!=null)C.d.u(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.c0N,D.fQ9,new B.ddg(m,d),l)],p))
if(m.a.e===D.Ao){x=(m.w?C.dL:C.aB).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.j.ad(C.j.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.T,A.r(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.FI:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l)],p))}if(m.a.e===D.TK){x=(m.r?C.dL:C.aB).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.T,A.r(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.FI:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.me,l,l,l),C.ae,A.dh(D.bXh,l,D.fWJ,m.gcwy(),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oQ(i,A.c4(v,w,new A.D(C.ac,A.x(A.a([A.E(A.r(l,A.x(q,C.l,l,C.ba,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.ep(M.Dm,C.Wc,new B.ddh(m,d),l),1),C.au,A.E(A.dh(C.zJ,l,C.ac6,new B.ddi(m,d),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.B3,l,m.gb1d(),A.bp(C.aN,l,l,l,l,C.hb,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.ddj(),y.C)}}
B.adw.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.r(x,A.qf(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bJ(C.B4,x,new B.dcD(d),x)],u),x,x,C.nr,v,x,x,x,x,D.fIW,x)}}
B.a_p.prototype={
S(){return new B.aBc(A.zZ(C.yC,C.oc,C.vf))}}
B.aBc.prototype={
t(){this.d.t()
this.a3()},
azb(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fQH,x,x,x,1,x,!0),C.w,A.zY(this.d,C.c0,this.gaza()),x,!1,!1,x,x)}}
B.a_w.prototype={
S(){return new B.aBi(A.zZ(C.yC,C.oc,C.vf))},
gd1(){return this.c}}
B.aBi.prototype={
c3v(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahh(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MR("text/plain"),$async$ahh)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fnV)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ahh,w)},
abK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hHg(p,!0),$async$abK)
case 3:t=e
p=t==null
s=B.a8f(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fkq)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abK,w)},
t(){this.d.t()
this.a3()},
azb(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3v(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.arV,v,v,v,w.gbSs(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a4e,v,v,v,w.gcmt(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.uV:O.PA,v,v,v,v,v),v,v,v,new B.ddn(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fXF,v,v,v,1,v,!0)
u=A.zY(w.d,C.c0,w.gaza())
x=A.l(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.r(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eBH],s),v),v,!1,!1,v,v)}}
B.bfZ.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.po
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.l(12)
u=A.r(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.po:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a3,!0,r,A.aN(!1,w,!0,new A.D(C.a1o,A.A(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eJ,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaI.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pt.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Yw.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Ps.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FS.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.csx.prototype={}
B.FR.prototype={}
B.aaH.prototype={}
B.avz.prototype={}
B.Yx.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jF)","n(jF)","Wd(Z)","~()","a_s(Z)","H(H,jF)","QI(Z)","~(mm)","cu(FR)","aB<jF?>(@)","Wb(Z)","Wf(Z)","D(jF)","jF(@)","a9<n,@>(jF)","a_r(Z)","Wc(Z)","a_t(Z)","a_q(Z)","a_v(Z)","adw(Z)","ai<jF>()","a_w(Z)","ady(Z,H)","a_p(Z)","a9<n,aE>(jF)","cu(Yw)","cu(aaH)","aB<cu>(FR)"])
B.cst.prototype={
$1(d){var x=this.a
x.x=D.aRE
x.y.I(0,D.aRE)},
$S:75}
B.csu.prototype={
$1(d){var x=this.a
x.x=D.aRD
x.y.I(0,D.aRD)},
$S:75}
B.csv.prototype={
$1(d){var x=this.a
x.aiF(A.ahN(d.data)).bG(new B.css(x),y.b)},
$S:75}
B.css.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.csw.prototype={
$1(d){},
$S:75}
B.csz.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i0k(d.channel))},
$S:16}
B.csA.prototype={
$1(d){},
$S:16}
B.csB.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ikt(w.iceConnectionState)
x.cx=w
if($.hjn())switch(w.a){case 0:x.cy=D.aRJ
break
case 1:x.cy=D.aRK
break
case 3:x.cy=D.aRL
break
case 5:x.cy=D.aRH
break
case 6:x.cy=D.aRI
break
case 7:x.cy=D.a9P
break
default:break}},
$S:108}
B.csC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iku(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:108}
B.csD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ivj(w.signalingState)},
$S:108}
B.csE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.its(w.connectionState)},
$S:108}
B.csF.prototype={
$1(d){},
$S:108}
B.csG.prototype={
$1(d){},
$S:16}
B.fxp.prototype={
$1(d){var x=y.F.a(new A.qu([],[]).o_(d.target.result,!1)),w=C.wu.q(x.objectStoreNames,"blobs")
if(!w)C.wr.Gj(x,"blobs")},
$S:163}
B.fWW.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.x2.fs(this.b)
$.eY.mF()
this.c.$1(d)},
$S:436}
B.fWY.prototype={
$1(d){return this.a.$1(B.i9O(this.b,this.c))},
$S:32}
B.fWX.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fWV.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fXa.prototype={
$1(d){var x=this
return B.hvR(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fXb.prototype={
$1(d){var x=this
return B.hvR(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fA3.prototype={
$1(d){var x=this
return B.ceo(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcW.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcT.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceo(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcV.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceo(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcU.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ceo(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcY.prototype={
$4(d,e,f,g){var x=null
return A.k3(A.A(A.a([A.aI(x,x,x,x,D.bVU,x,x,x,new B.dcX(d),x,x,x,x,x,x),A.E(A.FD(D.S6,!0,x,!1,C.a3g,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.S6,x,g,C.anA,0,e,f)},
$C:"$4",
$R:4,
$S:467}
B.dcX.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fC0.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eT,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.r(v,D.byn,C.f,v,v,D.b80,v,v,v,v,D.anp,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aP(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c_f,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.r(v,A.x(A.a([q,new A.D(C.CA,A.x(A.a([o,C.ae,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aP(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asa,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dV(C.dt,new B.fBZ(d),v),1),C.au,A.E(A.bJ(D.fP8,v,new B.fC_(p,x,d),A.bp(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.GT,v,v,v,v),v)},
$S:61}
B.fBZ.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fC_.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.flA)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDU(v,x))},
$S:0}
B.fCu.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eT,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.r(w,A.x(A.a([A.r(w,D.byd,C.f,w,w,D.b9v,w,w,w,w,D.anp,w,w,1/0),new A.D(C.CA,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aP(),r,w,w,w,w,w,2,B.hf4(u,"Organization name",C.Hr,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aP(),q,w,w,w,w,w,2,B.hf4(u,"Access code",C.nO,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aP(),p,w,w,w,w,w,2,B.hf4(u,"Member password",C.Dl,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fXM,w,new B.fCt(r,q,p,d),A.bp(C.aB,w,w,w,w,C.hb,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.GT,w,w,w,w),w)},
$S:61}
B.fCt.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.flF)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aH3(u,x,w))},
$S:0}
B.cef.prototype={
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
p=C.a.a_(j,"http")?A.cC(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vT(p,null).dg(0,C.a0n),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cm(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cel.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cem.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cen.prototype={
$1(d){return d.b},
$S:z+2}
B.ceh.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cei.prototype={
$1(d){return d.b},
$S:z+2}
B.ceg.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:14}
B.cej.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cek.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fX8.prototype={
$1(d){return new B.Wb(this.a,null)},
$S:z+11}
B.fX9.prototype={
$1(d){return new B.Wf(this.a,this.b,this.c,null)},
$S:z+12}
B.dZw.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_F.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_G.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_H.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_E(x,d))},
$S:2}
B.e_E.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_I.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_J.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_K.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_L.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_M.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_N.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_Q.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.p(0,(1-e)*14)),e)},
$S:104}
B.e_O.prototype={
$1(d){var x=this.a
return x.f?null:x.a_H()},
$S:2}
B.e_P.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mM(D.Sn))s=C.uZ
else s=C.a.a_(s,"video/")||d.mM(D.nb)?C.qV:D.aqz
x=this.b.a
w=y.p
return new A.D(C.kU,A.A(A.a([A.r(v,A.X(s,C.aB,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garu(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dZx.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZy.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cep.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.ceq.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:97}
B.fY2.prototype={
$2(d,e){return e===this.a},
$S:313}
B.fuw.prototype={
$1(d){return J.k(d)},
$S:17}
B.fAf.prototype={
$1(d){var x=this.b
B.i7B(C.He.ga7q(this.a)).bG(x.gC4(x),y.H)},
$S:130}
B.fAg.prototype={
$1(d){return this.a.dd(0,null)},
$S:130}
B.fAh.prototype={
$0(){return null},
$S:11}
B.ceE.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAi.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
return new B.jF(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fEv.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fyt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fyu.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ceJ.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mM(D.nb)},
$S:z+1}
B.h1i.prototype={
$1(d){return new B.a_r(this.a,null)},
$S:z+16}
B.dcS.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dcQ.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dcR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_D.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1P()},
$S:12}
B.e_0.prototype={
$0(){var x=J.bHq(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e_1.prototype={
$0(){var x=J.bHq(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZA.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZz(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG8(this.c)}},
$S:0}
B.dZz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZB.prototype={
$0(){var x=J.bHq(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZG.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZF(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG8(this.c)}},
$S:0}
B.dZF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_r.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e_s.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZY.prototype={
$1(d){return new B.Wc(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IG(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wg(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ur(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1Z(s.gJ(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZE.prototype={
$1(d){this.a.ad6(d,"No files selected.","Added")},
$S:436}
B.e_5.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e_4(),A.U(x).k("N<1,n>")))},
$S:0}
B.e_4.prototype={
$1(d){return d.a},
$S:z+2}
B.dZK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xR.cq().cZM(C.a2b,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jM(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ar_(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ur(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e_o.prototype={
$1(d){return new B.QI(this.a.a.c,this.b,null)},
$S:z+7}
B.e_p.prototype={
$1(d){return new B.a_t(this.a.a.c,this.b,null)},
$S:z+18}
B.e_q.prototype={
$1(d){return new B.a_q(this.a.a.c,this.b,null)},
$S:z+19}
B.dZW.prototype={
$1(d){return new B.QI(this.a.a.c,this.b,null)},
$S:z+7}
B.dZX.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_h.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IG(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8h(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csz(),$async$$0)
case 5:x=6
return A.b(p.ur(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.e_d(p),r),new B.e_e(),r.k("N<ak.E,n>")).bY(0,new B.e_f())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ed(new B.e_g(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wm(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_d.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.e_c(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e_c.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_e.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e_f.prototype={
$1(d){return d.length!==0},
$S:3}
B.e_g.prototype={
$1(d){var x=this.a
return new B.a_v(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e_i.prototype={
$1(d){return d.a},
$S:z+2}
B.e_j.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e_b.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.as(A.r(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kw,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garu(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mM(D.nb)?C.th:C.nQ
p=!x||p.mM(D.nb)?"Play video":"View"
return new A.bN(new A.o(s,v,new A.bG(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.la,v,v,C.n),C.bi,A.bm(!0,new A.D(C.Cw,A.x(A.a([q,o,t,C.aC,B.a_u(!1,u,!1,w,p,new B.e_6(d),v),B.a_u(!1,u,!1,C.jN,"Share via QR",new B.e_7(d),"Letters/numbers QR code"),B.a_u(!1,u,!1,D.a3l,"Send to their Code",new B.e_8(d),"Enter someone else's personal code"),B.a_u(!1,u,!1,C.hP,"Download / save",new B.e_9(d),v),C.am,B.a_u(!1,u,!0,C.ek,"Delete",new B.e_a(d),v)],y.p),C.al,v,C.e,C.O,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:700}
B.e_6.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.e_7.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.e_8.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.e_9.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.e_a.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dZH.prototype={
$1(d){return d.a},
$S:z+2}
B.dZI.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8j(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hk(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pz(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZD.prototype={
$1(d){var x=this.a
x.us(new B.dZC(x,d,this.b),"Preparing\u2026")},
$S:436}
B.dZC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wg(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bGn(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZZ.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e__.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h9S(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.dZP(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dZQ(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZR(s))
case 5:x=8
return A.b(r.b.iJ(0,C.GN,new B.dZS()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ur(),$async$$0)
case 9:s.ij("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZM(x,d,e))},
$S:208}
B.dZM.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZQ.prototype={
$1(d){return new B.adw(this.a.a,null)},
$S:z+21}
B.dZR.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZS.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jp(o)!=null?3:4
break
case 3:x=5
return A.b(B.a87(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3o(B.Jp(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ar_(new B.dZN(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h9R(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.ur(),$async$$0)
case 10:o=J.cD(r)
p=o.eP(r,new B.dZO()).gJ(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZN.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZL(x,d,e))},
$S:208}
B.dZL.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZO.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mM(D.nb)},
$S:z+1}
B.e_3.prototype={
$1(d){return new B.a_w(this.a.a.c,null)},
$S:z+23}
B.e_2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1m(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_n.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.o(v[2],x,new A.bG(new A.ay(C.aB.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.la,x,x,C.n),C.bi,A.bm(!0,new A.D(C.Cw,A.x(A.a([A.as(A.r(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kw,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aC,B.a_u(!0,w,!1,C.nO,"My Code",new B.e_k(d),"Your personal code & QR \u2014 others send docs to you"),B.a_u(!1,w,!1,D.a3l,"Send to their Code",new B.e_l(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_u(!1,w,!1,R.zB,"Import backup",new B.e_m(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.O,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:700}
B.e_k.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.e_l.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGx()},
$S:0}
B.e_m.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.e_A.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jz(D.S6,x,C.a3g,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.S6).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:665}
B.e_y.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_z.prototype={
$0(){this.a.ajC()
return null},
$S:0}
B.e_B.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.p(0,(1-e)*10)),e)},
$S:104}
B.e_C.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ady(e,w,v,this.b,x.e,x.cbS(w),new B.e_u(x,w),new B.e_v(x,v,w),new B.e_w(x,w),new B.e_x(x,w),null)},
$S:z+24}
B.e_u.prototype={
$0(){this.a.agP(this.b)
return null},
$S:0}
B.e_v.prototype={
$0(){var x=this.a
return x.m(new B.e_t(x,this.b,this.c))},
$S:0}
B.e_t.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_w.prototype={
$0(){this.a.OD(this.b)
return null},
$S:0}
B.e_x.prototype={
$0(){this.a.ajp(this.b)
return null},
$S:0}
B.dcO.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.p(0,(1-e)*18)),e)},
$S:104}
B.dcP.prototype={
$3(d,e,f){return A.e2(C.A,f,e,null,null)},
$S:111}
B.ddb.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.p(0,(1-e)*14)),e)},
$S:104}
B.dda.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.dd7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dd8.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dd9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dd5.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fU(w,C.A,x,new B.dd3(this.a),C.hl,C.dD,!0,x,!1,x,x)
$.aU.x1$.push(new B.dd4(this.a))
return C.bM},
$S:147}
B.dd3.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dd1(this.a))
return C.bM},
$S:182}
B.dd1.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcZ(x))},
$S:7}
B.dcZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd4.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd0(x))},
$S:7}
B.dd0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dd6.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dd2(this.a))
return C.bM},
$S:182}
B.dd2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dd_(x))},
$S:7}
B.dd_.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcL.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcK(x,d))},
$S:1769}
B.dcK.prototype={
$0(){return this.a.f=this.b===C.vC},
$S:0}
B.dcM.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcJ(x,d))},
$S:7}
B.dcJ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dcN.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcI(x,d))},
$S:7}
B.dcI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dcE.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcF.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcG.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcH.prototype={
$1(d){return this.a.d.Nz(0,A.dw(0,0,0,C.j.V(d),0,0))},
$S:6}
B.ddo.prototype={
$0(){var x=this.a.a
return B.rX(x.c,x.d)},
$S:1770}
B.ddp.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.ddq.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.ddr.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dds.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.ddt.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.ddv.prototype={
$0(){var x=this.a
x.m(new B.ddu(x))},
$S:0}
B.ddu.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hh(0)
else x.qr(0)},
$S:0}
B.ddk.prototype={
$1(d){return this.a.Rs(this.b)},
$S:12}
B.ddl.prototype={
$1(d){return this.a.Rr(this.b)},
$S:12}
B.ddc.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.ddd.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dde.prototype={
$1(d){return D.hyl},
$S:z+25}
B.ddj.prototype={
$2(d,e){if(d)B.Wm()},
$S:129}
B.ddf.prototype={
$0(){return this.a.aaX(this.b)},
$S:0}
B.ddg.prototype={
$0(){return this.a.aaU(this.b)},
$S:0}
B.ddh.prototype={
$0(){return this.a.afi(this.b)},
$S:0}
B.ddi.prototype={
$0(){return this.a.a2C(this.b)},
$S:0}
B.dcD.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.ddn.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qv(),$async$$0)
case 2:u.m(new B.ddm(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.ddm.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceL.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mM(D.nb)},
$S:z+1}
B.ceM.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ceK.prototype={
$2(d,e){return this.bn6(d,e)},
bn6(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wn(u.c,A.J(["uploadProgress",C.j.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1771}
B.fE7.prototype={
$1(d){if(d===D.a9O&&(this.a.a.a&30)===0)this.a.h0(0)},
$S:z+27}
B.fE8.prototype={
$0(){},
$S:11}
B.fEJ.prototype={
boH(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.frM(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hqX(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boH(d,e)},
$S:540}
B.fEI.prototype={
$1(d){var x=this
d.b=new B.fEH(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fEH.prototype={
$1(d){return this.boG(d)},
boG(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1n(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
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
return A.b(B.frM(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a8g(m),$async$$1)
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
x(v=B.aBf.prototype,"gcjl","R1",0)
x(v,"gckc","JP",0)
x(v,"gcjI","yH",0)
x(v=B.aFf.prototype,"gcbM","afg",0)
x(v,"gcbN","a_G",0)
x(v,"gcz0","aj6",0)
x(v=B.aFi.prototype,"gcbO","a_H",0)
x(v,"gcz1","a2X",0)
x(B.aFg.prototype,"gcbP","afh",0)
x(B.aBe.prototype,"gcbU","cbV",4)
x(v=B.aFh.prototype,"gcjJ","a0T",0)
x(v,"gcxB","cxC",4)
x(v,"gb4t","aAE",0)
x(v,"gcAw","ajw",0)
x(v,"gbSZ","Yt",0)
x(v,"gcbT","EN",0)
x(B.aBg.prototype,"gb8f","a2W",0)
x(B.aBd.prototype,"gcbW","a_I",0)
x(v=B.aBj.prototype,"gb3b","chX",4)
x(v,"gcbQ","afk",0)
x(v=B.aBh.prototype,"gcwy","a2I",0)
x(v,"gb1d","afj",0)
w(B.aBc.prototype,"gaza","azb",8)
x(v=B.aBi.prototype,"gcmt","ahh",0)
x(v,"gbSs","abK",0)
w(v,"gaza","azb",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.csx,B.aaH,B.avz,B.aDU,B.aH3,B.jF,B.ade,B.byi,B.FR,B.Yx])
w(B.csy,B.csx)
w(B.b6u,B.aaH)
x(A.hx,[B.cst,B.csu,B.csv,B.css,B.csw,B.csz,B.csA,B.csB,B.csC,B.csD,B.csE,B.csF,B.csG,B.fxp,B.fWW,B.fWY,B.fWX,B.fXa,B.fXb,B.fA3,B.dcT,B.dcV,B.dcU,B.dcY,B.fC0,B.fCu,B.cef,B.cem,B.cen,B.cei,B.ceg,B.cej,B.cek,B.fX8,B.fX9,B.e_H,B.e_Q,B.e_O,B.e_P,B.fuw,B.fAf,B.fAg,B.ceE,B.fAi,B.fEv,B.fyt,B.fyu,B.ceJ,B.h1i,B.dcS,B.dcQ,B.e_D,B.dZz,B.dZF,B.dZY,B.dZE,B.e_4,B.e_o,B.e_p,B.e_q,B.dZW,B.e_d,B.e_c,B.e_e,B.e_f,B.e_g,B.e_i,B.e_j,B.e_b,B.dZH,B.dZI,B.dZD,B.dZZ,B.dZQ,B.dZO,B.e_3,B.e_n,B.e_A,B.e_B,B.dcO,B.dcP,B.ddb,B.dda,B.dd5,B.dd3,B.dd1,B.dd4,B.dd6,B.dd2,B.dcL,B.dcM,B.dcN,B.dcH,B.ddk,B.ddl,B.dde,B.ceL,B.ceM,B.fE7,B.fEI,B.fEH])
w(B.b6v,B.avz)
x(A.iO,[B.fWV,B.dcW,B.dcX,B.fBZ,B.fC_,B.fCt,B.dZw,B.e_F,B.e_G,B.e_E,B.e_I,B.e_J,B.e_K,B.e_L,B.e_M,B.e_N,B.dZx,B.dZy,B.fAh,B.dcR,B.e_0,B.e_1,B.dZA,B.dZB,B.dZG,B.e_r,B.e_s,B.dZV,B.e_5,B.dZK,B.dZX,B.e_h,B.e_6,B.e_7,B.e_8,B.e_9,B.e_a,B.dZJ,B.dZC,B.e__,B.dZT,B.dZM,B.dZR,B.dZS,B.dZU,B.dZL,B.e_2,B.e_k,B.e_l,B.e_m,B.e_y,B.e_z,B.e_u,B.e_v,B.e_t,B.e_w,B.e_x,B.dd7,B.dd8,B.dd9,B.dcZ,B.dd0,B.dd_,B.dcK,B.dcJ,B.dcI,B.dcE,B.dcF,B.dcG,B.ddo,B.ddp,B.ddq,B.ddr,B.dds,B.ddt,B.ddv,B.ddu,B.ddc,B.ddd,B.ddf,B.ddg,B.ddh,B.ddi,B.dcD,B.ddn,B.ddm,B.fE8])
x(A.lG,[B.adx,B.On,B.aaI,B.Pt,B.Yw,B.Ps,B.FS])
x(A.af,[B.a_s,B.Wb,B.Wf,B.Wc,B.a_r,B.Wd,B.a_t,B.a_q,B.QI,B.a_v,B.a_p,B.a_w])
x(A.ah,[B.aBf,B.aFf,B.aFi,B.aFg,B.aBe,B.aFh,B.aBg,B.aBd,B.aBj,B.aBh,B.aBc,B.aBi])
x(A.aw,[B.ae0,B.aBb,B.bfY,B.ady,B.adw,B.bfZ])
x(A.jz,[B.cel,B.ceh,B.cep,B.ceq,B.fY2,B.dZP,B.dZN,B.e_C,B.ddj,B.ceK,B.fEJ])
x(A.j6,[B.blq,B.bxV])})()
A.iW(b.typeUniverse,JSON.parse('{"b6u":{"aaH":[]},"b6v":{"avz":[]},"a_s":{"af":[],"v":[]},"aBf":{"ah":["a_s"]},"ae0":{"aw":[],"v":[]},"Wb":{"af":[],"v":[]},"Wf":{"af":[],"v":[]},"aFf":{"ah":["Wb"]},"aFi":{"ah":["Wf"]},"blq":{"j6":[]},"Wc":{"af":[],"v":[]},"aFg":{"ah":["Wc"]},"a_r":{"af":[],"v":[]},"Wd":{"af":[],"v":[]},"ady":{"aw":[],"v":[]},"a_t":{"af":[],"v":[]},"a_q":{"af":[],"v":[]},"QI":{"af":[],"v":[]},"a_v":{"af":[],"v":[]},"adw":{"aw":[],"v":[]},"a_p":{"af":[],"v":[]},"a_w":{"af":[],"v":[]},"aBe":{"ah":["a_r"]},"bxV":{"j6":[]},"aFh":{"ah":["Wd"]},"aBb":{"aw":[],"v":[]},"bfY":{"aw":[],"v":[]},"aBg":{"ah":["a_t"]},"aBd":{"ah":["a_q"]},"aBj":{"ah":["QI"]},"aBh":{"ah":["a_v"]},"aBc":{"ah":["a_p"]},"aBi":{"ah":["a_w"]},"bfZ":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uP"),k:x("MP()"),o:x("bv<n,n>"),F:x("rw"),g:x("aB<jF?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<n,Q>>"),t:x("O<a9<n,@>>"),r:x("O<jF>"),w:x("O<+file,name(lW,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j6>"),a:x("O<dJ>"),p:x("O<v>"),Z:x("O<H>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jF>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iF"),e:x("izn"),af:x("F3"),U:x("jF"),b:x("cu"),C:x("aE"),aK:x("wH"),ab:x("FR"),br:x("avz"),v:x("Yx"),N:x("n"),X:x("bs<G>"),Q:x("m7"),D:x("dJ"),aw:x("bo<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jF>>"),aW:x("c3<dJ?>"),aY:x("c3<~>"),cx:x("adx"),b1:x("bk<ai<jF>>"),cf:x("bk<dJ?>"),d4:x("bk<~>"),c4:x("aDU"),bG:x("aH3"),q:x("mC"),B:x("pS<FR>"),c6:x("pS<aaI>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bi?"),_:x("ai<jF>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jF?"),R:x("aE?"),c:x("Yx?"),d:x("+answerQr,transfer(n,aB<ai<jF>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,On,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dJ?"),cm:x("ade?"),bk:x("aDU?"),ag:x("aH3?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b6m=new A.ay(C.aB,2,C.r,-1)
D.c95=new A.a8(C.a7,C.aa,C.x,C.a5p,null,null)
D.b80=new A.o(null,null,null,C.mI,null,D.c95,C.n)
D.b9v=new A.o(null,null,null,C.mI,null,E.Ia,C.n)
D.agi=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ahL=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aiO=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.akA=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fJP=new A.B("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.fYJ=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EU,null,null,null,null,null,null,null,null,null)
D.dlw=x([D.fJP,C.am,D.fYJ],y.p)
D.by3=new A.fn(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dlw,null)
D.h2c=new A.B("Create your organization",null,C.fU,null,null,null,null,null,null,null,null,null)
D.fOk=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EU,null,null,null,null,null,null,null,null,null)
D.dCE=x([D.h2c,C.am,D.fOk],y.p)
D.byd=new A.fn(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCE,null)
D.fZm=new A.B("Team Member sign-in",null,C.fU,null,null,null,null,null,null,null,null,null)
D.fSi=new A.B("Enter the access code and password from your organization.",null,G.EU,null,null,null,null,null,null,null,null,null)
D.dAo=x([D.fZm,C.am,D.fSi],y.p)
D.byn=new A.fn(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dAo,null)
D.bEF=new A.R(16,10,16,28)
D.bEN=new A.R(16,14,16,4)
D.bG0=new A.R(20,0,20,16)
D.bGx=new A.R(20,8,20,16)
D.anp=new A.R(24,22,24,20)
D.a3l=new A.a_(63394,"MaterialIcons",!1)
D.aqz=new A.a_(63515,"MaterialIcons",!1)
D.bTR=new A.a_(983813,"MaterialIcons",!1)
D.bR3=new A.a_(62867,"MaterialIcons",!1)
D.bUP=new A.ae(D.bR3,44,C.c,null,null,null)
D.bVU=new A.ae(C.k7,null,C.ab,null,null,null)
D.bXh=new A.ae(C.ju,18,null,null,null,null)
D.bZ3=new A.ae(D.a3l,26,C.c,null,null,null)
D.bZE=new A.ae(C.Db,null,null,null,null,null)
D.c_f=new A.ae(C.Di,null,null,null,null,null)
D.c0r=new A.ae(V.a3w,null,null,null,null,null)
D.c0N=new A.ae(C.hS,16,null,null,null,null)
D.c4s=new A.ae(C.tg,16,null,null,null,null)
D.bV6=new A.ae(C.nO,null,null,null,null,null)
D.c5k=new A.e7(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bV6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_N=new A.ae(C.Hr,null,null,null,null,null)
D.c5p=new A.e7(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bVr=new A.ae(C.Dl,null,null,null,null,null)
D.c5A=new A.e7(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bVr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cUV=x([C.fr,C.b3,C.aB],y.O)
D.cb_=new A.a8(C.aA,C.aD,C.x,D.cUV,null,null)
D.cUk=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.S6=x([C.fr,C.aB],y.O)
D.Sn=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nb=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dux=x([C.nx,C.aB],y.O)
D.enW={iceServers:0}
D.aM9={urls:0}
D.dGl=new A.bv(D.aM9,["stun:stun.l.google.com:19302"],y.o)
D.dGk=new A.bv(D.aM9,["stun:stun1.l.google.com:19302"],y.o)
D.daR=x([D.dGl,D.dGk],A.at("O<a9<n,n>>"))
D.dFD=new A.bv(D.enW,[D.daR],A.at("bv<n,@>"))
D.Jj=new B.On(0,"lanDirect")
D.TJ=new B.On(1,"cloudStash")
D.dSo=new B.On(2,"inlineInstant")
D.TK=new B.On(3,"webrtcLink")
D.Ao=new B.On(4,"videoCloud")
D.fYI=new A.B("Receive file",null,C.nj,null,null,null,null,null,null,null,null,null)
D.cK4=x([E.asj,C.af,D.fYI],y.p)
D.fc9=new A.c8(C.aL,C.ba,C.i,C.l,null,C.p,null,0,D.cK4,null)
D.evo=new A.D(C.cp,D.fc9,null)
D.fAd=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,U.IH,null,null,null)
D.fKn=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fAd,null,C.K,null,null,null,null,null,null,null)
D.euA=new A.D(C.CD,D.fKn,null)
D.be4=new A.cj(C.A,null,null,D.euA,null)
D.eBH=new A.cK(0,null,0,28,null,null,D.be4,null)
D.eC0=new B.aaI(0,"RTCDataChannelConnecting")
D.aRD=new B.aaI(1,"RTCDataChannelOpen")
D.aRE=new B.aaI(3,"RTCDataChannelClosed")
D.eC1=new B.FS(0,"RTCIceConnectionStateNew")
D.eC2=new B.FS(1,"RTCIceConnectionStateChecking")
D.eC3=new B.FS(2,"RTCIceConnectionStateCompleted")
D.eC4=new B.FS(3,"RTCIceConnectionStateConnected")
D.eC5=new B.FS(4,"RTCIceConnectionStateCount")
D.eC6=new B.FS(5,"RTCIceConnectionStateFailed")
D.eC7=new B.FS(6,"RTCIceConnectionStateDisconnected")
D.aRF=new B.FS(7,"RTCIceConnectionStateClosed")
D.aRG=new B.Yw(0,"RTCIceGatheringStateNew")
D.eC8=new B.Yw(1,"RTCIceGatheringStateGathering")
D.a9O=new B.Yw(2,"RTCIceGatheringStateComplete")
D.a9P=new B.Ps(0,"RTCPeerConnectionStateClosed")
D.aRH=new B.Ps(1,"RTCPeerConnectionStateFailed")
D.aRI=new B.Ps(2,"RTCPeerConnectionStateDisconnected")
D.aRJ=new B.Ps(3,"RTCPeerConnectionStateNew")
D.aRK=new B.Ps(4,"RTCPeerConnectionStateConnecting")
D.aRL=new B.Ps(5,"RTCPeerConnectionStateConnected")
D.eC9=new B.Pt(0,"RTCSignalingStateStable")
D.eCa=new B.Pt(1,"RTCSignalingStateHaveLocalOffer")
D.eCb=new B.Pt(2,"RTCSignalingStateHaveRemoteOffer")
D.eCc=new B.Pt(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eCd=new B.Pt(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aRM=new B.Pt(5,"RTCSignalingStateClosed")
D.fhe=new A.av(160,48)
D.bfj=new A.fl(2,null,null,null,null,C.aB,null,null,null,null)
D.fiM=new A.a5(16,16,D.bfj,null)
D.fNF=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fkf=new A.b1(D.fNF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fVm=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.b1(D.fVm,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3e=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fkq=new A.b1(D.h3e,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNf=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fkQ=new A.b1(D.fNf,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZx=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aUT=new A.b1(D.fZx,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_Z=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.flj=new A.b1(D.h_Z,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4I=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.flA=new A.b1(D.h4I,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2F=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.flF=new A.b1(D.h2F,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3T=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fms=new A.b1(D.h3T,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fLQ=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fn_=new A.b1(D.fLQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXh=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fnk=new A.b1(D.fXh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fPZ=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fnR=new A.b1(D.fPZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h4N=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new A.b1(D.h4N,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fM5=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fo0=new A.b1(D.fM5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKL=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fof=new A.b1(D.fKL,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fHv=new A.B("NGMY DOC SHARE",null,C.aWg,null,null,null,null,null,null,null,null,null)
D.fIW=new A.B("Show this to sender",null,C.iG,null,null,null,null,null,null,null,null,null)
D.fJW=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fOL=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fP8=new A.B("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fQ9=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fQH=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fTz=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fWp=new A.B("Send to their Doc Share",null,C.o3,null,null,null,null,null,null,null,null,null)
D.fWJ=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fX3=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fXF=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fXM=new A.B("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fYa=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h0u=new A.B("Share files & videos\nwith a scan.",null,C.aWj,null,null,null,null,null,null,null,null,null)
D.h0O=new A.B("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hyl=new B.a_p(null)
D.ad6=new B.adx(0,"docShare")
D.ad7=new B.adx(1,"gate")
D.WR=new B.adx(2,"gateNoIndividual")})();(function staticFields(){$.aPR=null
$.fpd=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahA=A.T(y.N,A.at("lW"))
$.S3=A.T(y.N,y.D)
$.fpZ=A.T(y.N,A.at("ade"))
$.ceD=A.T(y.S,A.at("byi"))
$.hqW=1
$.ifY=null
$.ifX=null
$.i6O=null
$.hfh=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"izS","hJg",()=>new B.csy())
x($,"ixM","hjn",()=>C.a.q(A.bC(A.bC(A.bC(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["A47IqMWLog8XjrunwtbcBF7WzwY="]=a.current})($__dart_deferred_initializers__);