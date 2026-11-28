((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cwD:function cwD(){},
ihi(d){var x=null,w=new B.b98(d,D.eSs,new A.qc(x,x,y.c6),new A.qc(x,x,y.B))
w.bG9(d)
return w},
b98:function b98(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cwy:function cwy(d){this.a=d},
cwz:function cwz(d){this.a=d},
cwA:function cwA(d){this.a=d},
cwx:function cwx(d){this.a=d},
cwB:function cwB(d){this.a=d},
ihj(d,e){var x=y.N
x=new B.b99(d,e,A.S(x,y.e),A.S(x,y.z))
x.bGa(d,e)
return x},
b99:function b99(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cwE:function cwE(d){this.a=d},
cwF:function cwF(d){this.a=d},
cwG:function cwG(d){this.a=d},
cwH:function cwH(d){this.a=d},
cwI:function cwI(d){this.a=d},
cwJ:function cwJ(d){this.a=d},
cwK:function cwK(d){this.a=d},
cwL:function cwL(d){this.a=d},
htS(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xJ.HW(x,"ngmy_doc_share_v1",new B.fJx(),1)},
io9(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eE(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w9(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aM(d)
return x}catch(w){return v}return v},
T9(d,e){return B.iET(d,e)},
iET(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aS3
x=7
return A.b(o==null?$.aS3=B.htS():o,$async$T9)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mJ(s,"blobs","readwrite")
C.iY.mx(J.mH(q,"blobs"),r,d)
x=8
return A.b(J.oZ(q),$async$T9)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$T9,w)},
T8(d){return B.iES(d)},
iES(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aS3
x=7
return A.b(o==null?$.aS3=B.htS():o,$async$T8)
case 7:s=f
r=J.mJ(s,"blobs","readonly")
x=8
return A.b(C.iY.yv(J.mH(r,"blobs"),d),$async$T8)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$T8)
case 9:o=B.io9(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$T8,w)},
ajJ(d){return B.iER(d)},
iER(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aS3
x=7
return A.b(p==null?$.aS3=B.htS():p,$async$ajJ)
case 7:s=f
r=J.mJ(s,"blobs","readwrite")
C.iY.Hq(J.mH(r,"blobs"),d)
x=8
return A.b(J.oZ(r),$async$ajJ)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ajJ,w)},
fJx:function fJx(){},
iqT(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bug(w,v))}return u},
hWF(d,e){var x,w={},v=A.b_W("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.hai(w,v,e)
C.xL.xs(v,"change",new B.hak(w,v,!1))
C.xL.xs(v,"cancel",new B.haj(w))
$.eZ.mY()
v.click()
A.bN(C.anR,new B.hah(w),y.H)},
hai:function hai(d,e,f){this.a=d
this.b=e
this.c=f},
hak:function hak(d,e,f){this.a=d
this.b=e
this.c=f},
haj:function haj(d){this.a=d},
hah:function hah(d){this.a=d},
Ee(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ee=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVZ()?3:4
break
case 3:x=5
return A.b(B.hQZ(e,d,s,!0,!1,f,g,h,!1,i),$async$Ee)
case 5:x=1
break
case 4:x=6
return A.b(B.SM(d,s,f,g,h,i),$async$Ee)
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
return A.b(B.JT(s,d),$async$Ee)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fEO(s,d),$async$Ee)
case 14:x=12
return A.b(r.hQZ(q,p,o,n,m,l,k,j,a1,i),$async$Ee)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ca(A.e4(new B.hax(s,i,d,f,g,h),!1,null,y.H)),$async$Ee)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ca(A.e4(new B.hay(s,i,d,f,g,h),!1,null,y.H)),$async$Ee)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ee,w)},
SM(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SM=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3O(e),$async$SM)
case 3:u=k
x=4
return A.b(B.asD(d,e,!1),$async$SM)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JT(e,d),$async$SM)
case 7:if(k){v=D.afe
x=1
break}x=8
return A.b(B.X5(e),$async$SM)
case 8:v=t?D.Yu:D.aff
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b3M(d,e)){v=D.afe
x=1
break}x=11
return A.b(B.X5(e),$async$SM)
case 11:v=t?D.Yu:D.aff
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hov(d,e)){v=D.afe
x=1
break}x=14
return A.b(B.X5(e),$async$SM)
case 14:v=D.Yu
x=1
break
case 13:v=t?D.Yu:D.aff
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
fEO(d,e){var x=0,w=A.j(y.y),v
var $async$fEO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b3M(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3O(d),$async$fEO)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEO,w)},
hQZ(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ca(A.e4(new B.fMb(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hLc(d,e,f,g,h,i,j){return new B.a0y(e,j,d,g,h,i,f,null)},
fOe(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fOe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
x=3
return A.b(A.bX(C.L,null,new B.fOh(A.R(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fOe)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOe,w)},
fOJ(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fOJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.aw,u)
s=new A.au(C.aw,u)
r=new A.au(C.aw,u)
x=3
return A.b(A.bX(C.L,null,new B.fOL(A.R(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fOJ)
case 3:q=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
r.V$=u
r.W$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOJ,w)},
hu4(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aT
return A.bB(x,new A.b6(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h1F(d,e){var x=0,w=A.j(y.H),v
var $async$h1F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.X5(e),$async$h1F)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).e3()
case 1:return A.h(v,w)}})
return A.i($async$h1F,w)},
hax:function hax(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hay:function hay(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeT:function aeT(d,e){this.a=d
this.b=e},
fMb:function fMb(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0y:function a0y(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aD8:function aD8(){this.c=this.a=this.d=null},
dir:function dir(d,e){this.a=d
this.b=e},
dio:function dio(d){this.a=d},
diq:function diq(d){this.a=d},
dip:function dip(d){this.a=d},
dit:function dit(){},
dis:function dis(d){this.a=d},
afm:function afm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFR:function aFR(d,e){this.a=d
this.b=e},
aJ6:function aJ6(d,e,f){this.a=d
this.b=e
this.c=f},
fOh:function fOh(d,e,f){this.a=d
this.b=e
this.c=f},
fOf:function fOf(d){this.a=d},
fOg:function fOg(d,e,f){this.a=d
this.b=e
this.c=f},
fOL:function fOL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fOK:function fOK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chV(d,e,f,g,h){return B.ibY(d,e,f,g,h)},
ibY(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$chV=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a0(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hd(r.dT(d,new B.chW(s,e,h,g,f,q),y.g),y.l),$async$chV)
case 3:r=p.aL(j)
case 4:if(!r.A()){x=5
break}t=r.gO(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chV,w)},
b3J(d,e,f,g,h){return B.ibZ(d,e,f,g,h)},
ibZ(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b3J=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ayb("GET",d)
o=A.bKi()
if(o==null)o=new A.It(A.a([],y.W))
x=7
return A.b(o.fk(0,s).d4(0,C.HS),$async$b3J)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DW(),$async$b3J)
case 8:q=j
if(J.ab(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CK(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b3J,w)},
b3I(d){return B.ibW(d)},
ibW(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b3I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uT(d,null).d4(0,C.p0),$async$b3I)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.T.aL(0,A.mb(A.m8(p.e)).cG(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b3I,w)},
chU(d){return B.ibX(d)},
ibX(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$chU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uT(d,null).d4(0,C.rj),$async$chU)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mb(A.m8(q.e)).cG(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ad(o)
$.an.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$chU,w)},
chW:function chW(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jX:function jX(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JR(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
ic3(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JR(C.a.aV(t,u.length))}return null},
ic4(d){var x=B.JR(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
ic_(){var x,w=$.oh(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hq(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a9s(d){return B.ic0(d)},
ic0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a9s=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a9s)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9s,w)},
a9t(d,e){return B.ic1(d,e)},
ic1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a9t=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i4(d,e,!1,!1,C.d_,null),$async$a9t)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9t,w)},
CJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CJ)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JR(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9u(r),$async$CJ)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a9s("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CJ)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JR(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aA("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CJ)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.ic_()
x=14
return A.b(B.a9u(m),$async$CJ)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a9t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CJ)
case 15:k=f
x=16
return A.b(B.a9t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CJ)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aA("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CJ)
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
return A.i($async$CJ,w)},
a9u(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JR(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a9s("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9u)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9u,w)},
a9v(d,e,f,g){return B.ic5(d,e,f,g)},
ic5(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a9v=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a0(d)
if(g.gau(d)){v=!1
x=1
break}r=B.JR(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9u(r),$async$a9v)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.ci1())>1048576||g.aR(d,new B.ci2())){v=B.FP(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9G("myCode",d,a0),$async$a9v)
case 4:u=a3
try{t=C.T.aL(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ch(s)||J.ab(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ab(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FP(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3R(u,g.gI(d),a0),$async$a9v)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dT(d,new B.ci3(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b3K(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a9v)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9v,w)},
FP(d,e,f,g,h){return B.ic2(d,e,f,g,h)},
ic2(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FP=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FP)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cI(a6,0,new B.chY())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oh().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cX.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.A()){x=5
break}q=h.gO(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aD(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JV(a9,q)
a0=new A.LN(a1)
u=6
case 9:x=11
return A.b(a0.A(),$async$FP)
case 11:if(!b1){x=10
break}n=a0.gO(0)
if(J.ab(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nW(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.ad5(a1.a,a4,"media",a1.d,a2).ys(m,n,new A.F6(!0,q.c)),$async$FP)
case 12:J.bU(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FP)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUU(r),$async$FP)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dT(a6,new B.chZ(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b3K(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FP)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUU(r),$async$FP)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FP,w)},
b3K(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b3K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a9s(t),$async$b3K)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.chX(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a9t(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3K,w)},
P1(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$P1=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a9s("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$P1)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ch(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aL(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.A()){x=5
break}l=q.gO(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b3L(k,a0),$async$P1)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b3Q(h),$async$P1)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Xc(g,a0),$async$P1)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.ab(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("L.E")
e=A.B(new A.X(r,new B.ci_(),q),n)
d=A.B(new A.X(r,new B.ci0(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cD(d,0,A.dw(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a9t("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$P1)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$P1,w)},
b3L(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b3L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ch(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aL(h),r=y.f,q=0
case 3:if(!u.A()){x=4
break}p=u.gO(u)
if(!r.b(p)){x=3
break}o=J.a0(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.h.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iJh(k,j)
C.d.u(s,i)
x=5
return A.b(B.Ec(l,m,"Received via My Code",t,e,i),$async$b3L)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUU(s),$async$b3L)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3L,w)},
ci1:function ci1(){},
ci2:function ci2(){},
ci3:function ci3(){},
chY:function chY(){},
chZ:function chZ(){},
chX:function chX(){},
ci_:function ci_(){},
ci0:function ci0(){},
hau(d,e){var x=0,w=A.j(y.H)
var $async$hau=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ca(A.e4(new B.hav(e),!1,null,y.H)),$async$hau)
case 2:return A.h(null,w)}})
return A.i($async$hau,w)},
bJM(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ca(A.e4(new B.haw(g,e,f),!1,null,y.y)),$async$bJM)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJM,w)},
hav:function hav(d){this.a=d},
haw:function haw(d,e,f){this.a=d
this.b=e
this.c=f},
X2:function X2(d,e){this.c=d
this.a=e},
aHe:function aHe(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e5z:function e5z(d,e){this.a=d
this.b=e},
X6:function X6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHh:function aHh(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e6I:function e6I(d){this.a=d},
e6J:function e6J(d){this.a=d},
e6K:function e6K(d){this.a=d},
e6H:function e6H(d,e){this.a=d
this.b=e},
e6L:function e6L(d){this.a=d},
e6M:function e6M(d){this.a=d},
e6N:function e6N(d,e){this.a=d
this.b=e},
e6O:function e6O(d,e){this.a=d
this.b=e},
e6P:function e6P(d,e){this.a=d
this.b=e},
e6Q:function e6Q(d){this.a=d},
e6T:function e6T(){},
e6R:function e6R(d){this.a=d},
e6S:function e6S(d,e){this.a=d
this.b=e},
boh:function boh(){},
X3:function X3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aHf:function aHf(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e5A:function e5A(d){this.a=d},
e5B:function e5B(d){this.a=d},
how(d){var x=d.ih
if(x>=0)return C.n.L(x)
return 10},
ic7(d){var x=d.lc
if(x>=0)return x
return 4.99},
ic6(d){var x=d.m_,w=y.N
w=x.j7(x,new B.ci5(),w,w)
return w},
hG8(d){var x=d.kN,w=y.N
w=x.j7(x,new B.ci6(),w,w)
return w},
b3O(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3O)
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
return A.i($async$b3O,w)},
a9x(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9x)
case 4:x=3
return A.b(g.aA("String","ngmy_doc_share_path_"+u,e),$async$a9x)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9x,w)},
X5(d){var x=0,w=A.j(y.H),v,u
var $async$X5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$X5)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$X5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$X5,w)},
hov(d,e){var x,w,v
if(B.ic7(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.ic6(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b3M(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hG8(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hG9(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hG8(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bN(A.dy(f,0,0,0,0,0).a).aa().ag())
d.kN=w},
asE(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$asE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$asE)
case 7:s=f
r=A.v(p)
r=A.ew(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$asE,w)},
asF(d){var x=0,w=A.j(y.H),v,u,t
var $async$asF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.asE(d),$async$asF)
case 3:u=f
x=5
return A.b(A.aB(),$async$asF)
case 5:x=4
return A.b(f.aA("Int","ngmy_doc_share_usage_"+t,u+1),$async$asF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$asF,w)},
asD(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.how(d)
if(u<=0){v=!1
x=1
break}if(B.hov(d,e)){v=!1
x=1
break}x=3
return A.b(B.asE(e),$async$asD)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asD,w)},
b3N(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JT(e,d),$async$b3N)
case 3:if(g){v=-1
x=1
break}u=B.how(d)
if(u<=0){v=-1
x=1
break}if(B.hov(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.asE(e),$async$b3N)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3N,w)},
ci8(d,e,f){var x=0,w=A.j(y.y),v
var $async$ci8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JT(e,d),$async$ci8)
case 3:if(h){v=!1
x=1
break}v=B.asD(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ci8,w)},
ci7(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ci7=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.ci8(d,u,i.gVZ()),$async$ci7)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ci7,w)},
a9w(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9w=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gVZ()){v=!0
x=1
break}if(B.b3M(d,u)){v=!0
x=1
break}x=5
return A.b(A.m1(u,C.VM),$async$a9w)
case 5:x=k?3:4
break
case 3:B.hG9(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9w)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lB(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.VM,"Doc Share for Organizations"),$async$a9w)
case 7:if(!k){v=!1
x=1
break}B.hG9(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9w)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9w,w)},
ci5:function ci5(){},
ci6:function ci6(){},
hbu(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$hbu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$hbu)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fAO.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i5([r],e.c))
s.toString
$.fAO.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbu,w)},
iLB(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fAO.bs($.fAO,new B.hbw(d))},
hbw:function hbw(d){this.a=d},
fCA(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fCA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aD(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i5([d],f))
s.toString
u=A.np(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jC,null,y.H),$async$fCA)
case 3:C.Ca.fv(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eZ.mY()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCA,w)},
aiE(d,e,f){var x=0,w=A.j(y.H),v
var $async$aiE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fBy.n(0,d,new B.aeA(A.bs(e,!0,v)))
x=3
return A.b(A.aB(),$async$aiE)
case 3:x=2
return A.b(h.aA("String",d+"_manifest",C.T.ar(A.J(["parts",e,"size",f],v,y.C),null)),$async$aiE)
case 2:return A.h(null,w)}})
return A.i($async$aiE,w)},
aiy(d){return B.isX(d)},
isX(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aiy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fBy.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aiy)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.T.aL(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b8(s,new B.fGu(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.h.L(o)
q=m==null?0:m
p=new B.aeA(r)
$.fBy.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aiy,w)},
SC(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$SC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.HA.n(0,d,u)
x=3
return A.b(B.T9(d,u),$async$SC)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SC,w)},
aSp(d){return B.isV(d)},
isV(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.HA.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.T8(d),$async$aSp)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.HA.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aSp)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aM(r)
x=!J.ch(q)?9:10
break
case 9:B.SC(d,q)
x=11
return A.b(J.fO(s,d),$async$aSp)
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
return A.i($async$aSp,w)},
ioD(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.cd(J.eE(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.cd(A.w9(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
return A.fc(null,y.K)},
a4c(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a4c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bH,y.cf)
t=new A.cc(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fMp(r,t),!1,s)
A.fM(r,"error",new B.fMq(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i4(0,C.Pq,new B.fMr())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4c,w)},
aSK(d,e,f){return B.ivn(d,e,f)},
ivn(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSK=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.n.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a4c(i),$async$aSK)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ab(j)
x=11
return A.b(B.T9(o,p),$async$aSK)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bU(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ab(j)===0){x=1
break}x=12
return A.b(B.aiE(k,j,s),$async$aSK)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ad(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSK,w)},
aSJ(d,e,f){return B.ivm(d,e,f)},
ivm(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSJ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSK(d,e,f),$async$aSJ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a4c(f),$async$aSJ)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.HA.n(0,s,r)
$.SW.n(0,s,r)
x=11
return A.b(B.SC(s,r),$async$aSJ)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSJ,w)},
CK(d,e,f,g,h,i){return B.icg(d,e,f,g,h,i)},
icg(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CK=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cX.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jX(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3U(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.SC(s,d),$async$CK)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CK)
case 10:r=a2
x=11
return A.b(r.aA("String",s,C.cS.gcq().aM(d)),$async$CK)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.an.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.BE(e),$async$CK)
case 12:j=a2
J.bU(j,m)
x=13
return A.b(B.HK(e,j),$async$CK)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CK,w)},
X7(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X7=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.BE(d),$async$X7)
case 3:t=a1
s=e.length,r=J.cK(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cX.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hGb(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jX(m,n,k,l,j,"From folder",null,B.b3U(),null)
$.aj2.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a4c(o),$async$X7)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.HA.n(0,h,g)
$.SW.n(0,h,g)
B.SC(h,g)
x=9
break
case 10:x=11
return A.b(B.aSJ(d,m,o),$async$X7)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HK(d,t),$async$X7)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X7,w)},
hoA(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hoA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hGb(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JU(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.CK(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hoA,w)},
JU(d,e,f,g,h,i){return B.icf(d,e,f,g,h,i)},
icf(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JU=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cX.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LN(A.dw(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.A(),$async$JU)
case 8:if(!a6){x=7
break}m=j.gO(0)
if(J.ch(m)){x=6
break}J.fw(n,m)
o+=J.ab(m)
case 9:if(!(J.ab(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TK(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kB(0,1048576,J.ab(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T9(k,l),$async$JU)
case 11:J.bU(q,k);++p
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
return A.b(j.a2(0),$async$JU)
case 12:x=s.pop()
break
case 5:x=J.ab(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T9(k,new Uint8Array(A.cd(n))),$async$JU)
case 15:J.bU(q,k)
case 14:if(J.ab(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aiE(r,q,g),$async$JU)
case 16:f=new B.jX(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3U(),null)
x=17
return A.b(B.BE(d),$async$JU)
case 17:e=a6
J.bU(e,f)
x=18
return A.b(B.HK(d,e),$async$JU)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JU,w)},
X9(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X9=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aj2.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a4c(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aiy(s),$async$X9)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T8(u[o]),$async$X9)
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
v=A.w9(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SW.h(0,s)
if(i==null)i=$.HA.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ti(d,e),$async$X9)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.SW.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w9(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X9,w)},
hGb(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ti(d,e){return B.ich(d,e)},
ich(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ti=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SW.h(0,f)
if(e==null)e=$.HA.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.aj2.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a4c(s),$async$ti)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.HA.n(0,f,r)
$.SW.n(0,f,r)
B.SC(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ad(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aiy(f),$async$ti)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aew(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T8(g[l]),$async$ti)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a9s()
if(!C.aI.gau(r)){$.HA.n(0,f,r)
$.SW.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aSp(f),$async$ti)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.SW.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X9(a0,a1,0,g),$async$ti)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cd(i))
$.HA.n(0,f,h)
$.SW.n(0,f,h)
B.SC(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ti,w)},
ick(d){var x,w,v=$.aj2.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
icl(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i5([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
ici(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asL(d,e,f,g,h){return B.icj(d,e,f,g,h)},
icj(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asL=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aj2.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a4c(s),$async$asL)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ti(g,e),$async$asL)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ab(r)/2|0,J.ab(r))
n=$.eY().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.ij(d).ys(h,r,new A.F6(!0,e.c)),$async$asL)
case 12:f.$2(J.ab(r),J.ab(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asL,w)},
hGd(d,e,f,g,h){var x,w,v,u,t=$.hGc
$.hGc=t+1
x=Date.now()
w=""+1000*x+"_"+C.cX.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cij.n(0,t,new B.bBm(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aew(u)))
return t},
hoB(d){var x=0,w=A.j(y.H)
var $async$hoB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hoB,w)},
JV(d,e){var $async$JV=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aj2.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.n.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qV(B.X9(d,e,p,o<q?o:q),$async$JV,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qV(A.H6(n),$async$JV,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qV(B.aiy("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JV,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qV(B.T8(h[l]),$async$JV,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qV(A.H6(k),$async$JV,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qV(B.ti(d,e),$async$JV,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qV(A.H6(A.w9(j,p,o<i?o:i)),$async$JV,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qV(null,0,w)
case 2:return A.qV(t.at(-1),1,w)}})
var x=0,w=A.hPB($async$JV,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hRM(w)},
b3W(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cij.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7J(),$async$b3W)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3W,w)},
X8(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cij.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7J(),$async$X8)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aiE(r.c,u,r.z),$async$X8)
case 4:t=new B.jX(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3U(),null)
u=r.a
x=5
return A.b(B.BE(u),$async$X8)
case 5:s=f
J.bU(s,t)
x=6
return A.b(B.HK(u,s),$async$X8)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
a9D(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cij.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajJ(u[s]),$async$a9D)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9D,w)},
cil(d,e,f){var x=0,w=A.j(y.H)
var $async$cil=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGy(d,e,f),$async$cil)
case 2:return A.h(null,w)}})
return A.i($async$cil,w)},
cim(d,e,f){var x=0,w=A.j(y.H)
var $async$cim=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGz(d,e,f),$async$cim)
case 2:return A.h(null,w)}})
return A.i($async$cim,w)},
FQ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.BE(d),$async$FQ)
case 2:p=g
J.mI(p,new B.cik(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.HA.X(0,v)
$.aj2.X(0,e)
x=3
return A.b(B.aiy(v),$async$FQ)
case 3:u=g
$.fBy.X(0,v)
x=4
return A.b(A.aB(),$async$FQ)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FQ)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FQ)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajJ(s[q]),$async$FQ)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajJ(v),$async$FQ)
case 13:x=14
return A.b(B.HK(d,p),$async$FQ)
case 14:return A.h(null,w)}})
return A.i($async$FQ,w)},
b3V(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ti(d,e),$async$b3V)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fCA(t,A.aD(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3V,w)},
BE(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$BE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$BE)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.T.aL(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fMs(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$BE,w)},
HK(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HK)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fQX(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aA("String","ngmy_doc_share_index_v1_"+u,C.T.ar(t,null)),$async$HK)
case 3:return A.h(null,w)}})
return A.i($async$HK,w)},
bGy(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BE(d),$async$bGy)
case 3:u=h
t=J.cK(u)
s=t.bl(u,new B.fKz(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aIZ(f))
x=4
return A.b(B.HK(d,u),$async$bGy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGy,w)},
bGz(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BE(d),$async$bGz)
case 3:u=h
t=J.cK(u)
s=t.bl(u,new B.fKA(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cUH(f))
x=4
return A.b(B.HK(d,u),$async$bGz)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGz,w)},
aeA:function aeA(d){this.a=d},
fGu:function fGu(){},
fMp:function fMp(d,e){this.a=d
this.b=e},
fMq:function fMq(d){this.a=d},
fMr:function fMr(){},
cik:function cik(d){this.a=d},
bBm:function bBm(d,e,f,g,h,i,j,k,l){var _=this
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
fMs:function fMs(){},
fQX:function fQX(){},
fKz:function fKz(d){this.a=d},
fKA:function fKA(d){this.a=d},
a9E(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cip())?3:4
break
case 3:x=5
return A.b(B.b3X(d,e),$async$a9E)
case 5:u=g
if(u!=null){t=u.c
B.P3(d,u.b,e,t)}v=u
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
return A.b(B.b3S(s),$async$a9E)
case 10:case 9:if(g){v=new A.RX(1,D.Vp,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Xa(d,e),$async$a9E)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Xf(!0,!0,d,e),$async$a9E)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.P3(d,D.Bd,e,t)
v=new A.RX(p,D.Bd,t)
x=1
break}v=B.cio(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9E,w)},
Xa(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Xa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9G(null,d,e),$async$Xa)
case 3:p=g
try{u=C.T.aL(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ab(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3R(p,d.length,e),$async$Xa)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cim(e,C.d.gH(d).a,r.b),$async$Xa)
case 7:case 6:q=r.a
x=8
return A.b(B.P3(d,D.Vp,e,q),$async$Xa)
case 8:v=new A.RX(d.length,D.Vp,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xa,w)},
Xb(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Xb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n4(D.nw)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9F(d,e),$async$Xb)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cih(s,d,e,t),$async$Xb)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3S(t),$async$Xb)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ti(e,d),$async$Xb)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Xa(A.a([d],y.r),e),$async$Xb)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xb,w)},
Xd(){var x=0,w=A.j(y.H)
var $async$Xd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hou(),$async$Xd)
case 2:x=3
return A.b(B.aVf(),$async$Xd)
case 3:return A.h(null,w)}})
return A.i($async$Xd,w)},
a9F(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3U()
x=3
return A.b(B.cil(e,d.a,u),$async$a9F)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9F,w)},
P3(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$P3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Vp&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9F(p,f),$async$P3)
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
return A.b(B.cig(o,p,u,f),$async$P3)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cih(o,p,f,t),$async$P3)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cif(o,u,p,f),$async$P3)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$P3,w)},
b3X(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3X=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cin(e,d),$async$b3X)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Xf(!1,!0,d,e),$async$b3X)
case 4:u=g
if(u!=null){t=u.b
v=new A.RX(u.a,D.Bd,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3X,w)},
cin(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cin=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X9(d,s,0,1),$async$cin)
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
return A.i($async$cin,w)},
cio(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cio=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9G(null,d,e),$async$cio)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hGa(u)
if(t.length>800){v=null
x=1
break}v=new A.RX(d.length,D.e7f,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cio,w)},
asM(d,e,f){return B.ico(d,e,f)},
ico(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asM=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.de(g,"\ufeff"))g=J.no(g,1)
x=B.hoz(g)?3:4
break
case 3:x=5
return A.b(B.cii(g),$async$asM)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.de(g,"NGMYDOCSYNC4|")){s=C.a.i(J.no(g,13))
try{k=B.FR(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.de(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.no(g,13))
u=9
x=12
return A.b(B.b3Q(q),$async$asM)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Xc(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ad(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.de(g,"NGMYDOCSYNC0|"))try{n=B.hoy(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Xc(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.de(g,"N2|")){v=B.JW(C.a.i(J.no(g,3)),d,a0)
x=1
break}if(J.de(g,"NGMYDOCSYNC2|")){v=B.JW(C.a.i(J.no(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cH(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c3(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JW(h,d,a0)
x=1
break}if(J.ex(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Xc(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asM,w)},
JW(d,e,f){return B.icm(d,e,f)},
icm(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JW=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aD(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c3(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aD(g,f,"")}else j=e
s=j
r=A.cI(A.v(s)+"/manifest.json",0,null)
q=A.cI(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b3I(r),$async$JW)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b3I(A.cI(s,0,null)),$async$JW)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.chV(o,r,a1,n,a2),$async$JW)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.chU(q),$async$JW)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Xc(l,a2),$async$JW)
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
k=A.ad(d)
$.an.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JW,w)},
a9G(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9G=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aL(e),t=y.N,s=y.z
case 3:if(!u.A()){x=4
break}r=u.gO(u)
x=5
return A.b(B.ti(f,r),$async$a9G)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcq().aM(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.T.ar(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9G,w)},
Xc(d,e){return B.icn(d,e)},
icn(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Xc=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.T.aL(0,a2,null)
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
e=J.aL(r)
case 7:if(!e.A()){x=8
break}m=e.gO(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ab(j)===0){x=7
break}i=C.cM.aM(j)
d=J.ab(q)!==0?q:null
x=9
return A.b(B.CK(i,a3,d,k,l,o),$async$Xc)
case 9:h=a5
if(h!=null)J.bU(n,h)
x=7
break
case 8:f=J.ab(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.ad(a1)
$.an.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xc,w)},
P2:function P2(d,e){this.a=d
this.b=e},
cip:function cip(){},
a3M(d){var x=A.R(d).ax.a===C.I,w=x?D.al0:D.ait,v=x?D.amR:C.c,u=x?C.aT:C.a_,t=x?C.bQ:C.ao,s=x?D.ajZ:C.bo
return new A.aKp([w,s,v,u,t,x?C.fC:C.bW])},
hXJ(d,e){var x=e?C.v.j(0.72):C.bc
return A.cf(null,x,!0,null,new B.hfT(e),d,null,!0,!0,y.N)},
ci4(d,e,f,g,h,i,j,k,l){return new B.X4(e,l,d,f,k,j,g,h,i,null)},
a0A(d,e,f,g,h,i,j){return new B.biL(g,h,j,e,i,d,f,null)},
hfT:function hfT(d){this.a=d},
a0x:function a0x(d,e){this.c=d
this.a=e},
aD7:function aD7(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
din:function din(d){this.a=d},
dil:function dil(d){this.a=d},
dim:function dim(d){this.a=d},
bAY:function bAY(){},
X4:function X4(d,e,f,g,h,i,j,k,l,m){var _=this
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
aHg:function aHg(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e6G:function e6G(d){this.a=d},
e63:function e63(d,e){this.a=d
this.b=e},
e64:function e64(d,e){this.a=d
this.b=e},
e5D:function e5D(d,e,f){this.a=d
this.b=e
this.c=f},
e5C:function e5C(d){this.a=d},
e5E:function e5E(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e,f){this.a=d
this.b=e
this.c=f},
e5I:function e5I(d){this.a=d},
e6u:function e6u(d,e){this.a=d
this.b=e},
e6v:function e6v(d){this.a=d},
e60:function e60(d,e,f){this.a=d
this.b=e
this.c=f},
e5Y:function e5Y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e5H:function e5H(d){this.a=d},
e68:function e68(d){this.a=d},
e67:function e67(){},
e5N:function e5N(d){this.a=d},
e6r:function e6r(d,e){this.a=d
this.b=e},
e6s:function e6s(d,e){this.a=d
this.b=e},
e6t:function e6t(d,e){this.a=d
this.b=e},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e){this.a=d
this.b=e},
e6k:function e6k(d,e){this.a=d
this.b=e},
e6g:function e6g(d){this.a=d},
e6f:function e6f(d){this.a=d},
e6h:function e6h(){},
e6i:function e6i(){},
e6j:function e6j(d,e){this.a=d
this.b=e},
e6l:function e6l(){},
e6m:function e6m(d){this.a=d},
e6e:function e6e(d,e){this.a=d
this.b=e},
e69:function e69(d){this.a=d},
e6a:function e6a(d){this.a=d},
e6b:function e6b(d){this.a=d},
e6c:function e6c(d){this.a=d},
e6d:function e6d(d){this.a=d},
e5K:function e5K(){},
e5L:function e5L(d){this.a=d},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5G:function e5G(d,e){this.a=d
this.b=e},
e5F:function e5F(d,e,f){this.a=d
this.b=e
this.c=f},
e61:function e61(d){this.a=d},
e62:function e62(d,e,f){this.a=d
this.b=e
this.c=f},
e5W:function e5W(d,e){this.a=d
this.b=e},
e5S:function e5S(d){this.a=d},
e5P:function e5P(d,e,f){this.a=d
this.b=e
this.c=f},
e5T:function e5T(d){this.a=d},
e5U:function e5U(d){this.a=d},
e5V:function e5V(){},
e5X:function e5X(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5O:function e5O(d,e,f){this.a=d
this.b=e
this.c=f},
e5R:function e5R(){},
e66:function e66(d){this.a=d},
e65:function e65(d,e){this.a=d
this.b=e},
e6q:function e6q(d,e){this.a=d
this.b=e},
e6n:function e6n(d){this.a=d},
e6o:function e6o(d,e){this.a=d
this.b=e},
e6p:function e6p(d){this.a=d},
e6D:function e6D(d){this.a=d},
e6B:function e6B(d){this.a=d},
e6C:function e6C(d){this.a=d},
e6E:function e6E(){},
e6F:function e6F(d,e){this.a=d
this.b=e},
e6x:function e6x(d,e){this.a=d
this.b=e},
e6y:function e6y(d,e,f){this.a=d
this.b=e
this.c=f},
e6w:function e6w(d,e,f){this.a=d
this.b=e
this.c=f},
e6z:function e6z(d,e){this.a=d
this.b=e},
e6A:function e6A(d,e){this.a=d
this.b=e},
aD4:function aD4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
biK:function biK(d,e,f){this.c=d
this.d=e
this.a=f},
dij:function dij(){},
dik:function dik(){},
aeU:function aeU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
diH:function diH(){},
diG:function diG(d){this.a=d},
a0z:function a0z(d,e,f){this.c=d
this.d=e
this.a=f},
aD9:function aD9(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
diD:function diD(d){this.a=d},
diE:function diE(d,e,f){this.a=d
this.b=e
this.c=f},
diF:function diF(d,e){this.a=d
this.b=e},
diB:function diB(d,e){this.a=d
this.b=e},
diz:function diz(d){this.a=d},
dix:function dix(d){this.a=d},
diu:function diu(d){this.a=d},
diA:function diA(d){this.a=d},
diw:function diw(d){this.a=d},
diC:function diC(d){this.a=d},
diy:function diy(d){this.a=d},
div:function div(d){this.a=d},
a0w:function a0w(d,e,f){this.c=d
this.d=e
this.a=f},
aD6:function aD6(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dig:function dig(d){this.a=d},
dif:function dif(d,e){this.a=d
this.b=e},
dih:function dih(d){this.a=d},
die:function die(d,e){this.a=d
this.b=e},
dii:function dii(d){this.a=d},
did:function did(d,e){this.a=d
this.b=e},
di9:function di9(d){this.a=d},
dia:function dia(d){this.a=d},
dib:function dib(d,e){this.a=d
this.b=e},
dic:function dic(d){this.a=d},
Rv:function Rv(d,e,f){this.c=d
this.d=e
this.a=f},
aDc:function aDc(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
diU:function diU(d){this.a=d},
diV:function diV(d){this.a=d},
diW:function diW(d){this.a=d},
diX:function diX(d){this.a=d},
diY:function diY(d,e){this.a=d
this.b=e},
diZ:function diZ(d){this.a=d},
dj0:function dj0(d){this.a=d},
dj_:function dj_(d){this.a=d},
a0B:function a0B(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDa:function aDa(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
diQ:function diQ(d,e){this.a=d
this.b=e},
diR:function diR(d,e){this.a=d
this.b=e},
diI:function diI(d,e,f){this.a=d
this.b=e
this.c=f},
diJ:function diJ(d){this.a=d},
diK:function diK(){},
diP:function diP(){},
diL:function diL(d,e){this.a=d
this.b=e},
diM:function diM(d,e){this.a=d
this.b=e},
diN:function diN(d,e){this.a=d
this.b=e},
diO:function diO(d,e){this.a=d
this.b=e},
aeS:function aeS(d,e){this.c=d
this.a=e},
di8:function di8(d){this.a=d},
a0v:function a0v(d){this.a=d},
aD5:function aD5(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0C:function a0C(d,e){this.c=d
this.a=e},
aDb:function aDb(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
diT:function diT(d){this.a=d},
diS:function diS(d){this.a=d},
biL:function biL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
icp(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hq(v)},
P4(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$P4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$P4)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$P4)
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
q=A.ad(n)
$.an.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P4,w)},
a9H(d){return B.icq(d)},
icq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9H)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i4("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.d_,null),$async$a9H)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9H,w)},
Xe(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Xe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P4(),$async$Xe)
case 3:s=g
r=J.a0(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dD(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9H(s),$async$Xe)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xe,w)},
Xf(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Xf=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$Xf)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bs(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.cir(),t),t.k("L.E"))}if(u.length===0){v=null
x=1
break}s=B.icp()
t=A.T(u).k("O<1,a9<o,aG>>")
r=A.B(new A.O(u,new B.cis(s),t),t.k("aj.E"))
x=6
return A.b(B.P4(),$async$Xf)
case 6:q=i
J.aM(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9H(q),$async$Xf)
case 7:x=8
return A.b(B.a9I(r,u,g,s),$async$Xf)
case 8:v=new A.buN(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xf,w)},
asN(d){var x=0,w=A.j(y.y),v,u,t
var $async$asN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.P4(),$async$asN)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asN,w)},
cit(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cit=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.P4(),$async$cit)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a0(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cit,w)},
a9I(d,e,f,g){return B.icr(d,e,f,g)},
icr(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9I=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ab(q)===0){x=8
break}x=10
return A.b(B.asL("media",r,new B.ciq(s,e,g),f,q),$async$a9I)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Xe(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9I)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Xe(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9I)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.Xe(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9I)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9I,w)},
FR(d,e,f){return B.ics(d,e,f)},
ics(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FR=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FR)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asN(b3),$async$FR)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.j6,null,g),$async$FR)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asN(b3),$async$FR)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.P4(),$async$FR)
case 10:e=c0
g=J.a0(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a0(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a0(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.A()){x=12
break}a7=a2.gO(a2)
if(!a0.b(a7)){x=11
break}a8=J.a0(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ab(m)===0){x=11
break}u=14
a8=$.eY().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nW(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.ad5(a8.a,b0,"media",a8.d,a9).Eg(m)
k=A.cI(l,0,null)
x=17
return A.b(B.b3J(k,n,o,s,b7),$async$FR)
case 17:j=c0
if(j!=null){J.bU(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ad(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.ab(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.X(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.A()){x=22
break}a7=g.gO(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ab(h)!==0?25:26
break
case 25:u=28
a2=$.eY().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nW(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.ad5(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FR)
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
a0=A.dD(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9H(e),$async$FR)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FR,w)},
cir:function cir(){},
cis:function cis(d){this.a=d},
ciq:function ciq(d,e,f){this.a=d
this.b=e
this.c=f},
aVf(){var x=0,w=A.j(y.H),v,u
var $async$aVf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.inU=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aVf)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aVf)
case 3:u=$.huh
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aVf)
case 4:$.huh=$.ixo=$.ixp=null
return A.h(null,w)}})
return A.i($async$aVf,w)},
fQv(d){var x=0,w=A.j(y.H),v,u
var $async$fQv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abN){x=1
break}u=new A.bo($.bH,y.d4)
d.c=new B.fQw(new A.cc(u,y.aY))
x=3
return A.b(u.i4(0,C.hh,new B.fQx()),$async$fQv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fQv,w)},
ixk(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.ic9(x):x},
hum(d){var x=0,w=A.j(y.T),v,u,t
var $async$hum=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asP(u)
x=1
break}v=B.hoy(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hum,w)},
hul(d){var x=0,w=A.j(y.T),v,u,t
var $async$hul=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asQ(u)
x=1
break}v=B.hoy(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hul,w)},
hbd(d){var x=0,w=A.j(y.T),v
var $async$hbd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asQ(d),$async$hbd)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hbd,w)},
bHw(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bHw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hul(d),$async$bHw)
case 3:q=f
if(q==null){x=1
break}t=C.T.aL(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a0(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ab(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHw,w)},
fDu(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fDu=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X8(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CK(d.a9s(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDu,w)},
HL(d,e,f){return B.izT(d,e,f)},
izT(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HL=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hum(a1),$async$HL)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.T.aL(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a0(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ab(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hZL().aJh(D.dQa,null),$async$HL)
case 4:l=d.huh=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aew(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bH,y.b1)
l.y=new B.fR9(f,k,new B.fRa(f,a2,k,j,a0,p),a2,j,a0,p,new A.cc(t,y.ch))
x=5
return A.b(l.aaQ(0,new B.Zv(r,"offer")),$async$HL)
case 5:d=l
x=7
return A.b(l.aoM(0),$async$HL)
case 7:x=6
return A.b(d.aaI(0,a4),$async$HL)
case 6:x=8
return A.b(B.fQv(l),$async$HL)
case 8:x=9
return A.b(l.atb(),$async$HL)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ixk(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.T.ar(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asR(m,h),$async$HL)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hGa(h)
case 11:v=new A.bu0(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HL,w)},
fQw:function fQw(d){this.a=d},
fQx:function fQx(){},
fRa:function fRa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fR9:function fR9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fR8:function fR8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iBY(d){switch(d){case"new":return D.eSt
case"checking":return D.eSu
case"connected":return D.eSw
case"completed":return D.eSv
case"failed":return D.eSy
case"disconnected":return D.eSz
case"closed":return D.aUE
case"count":return D.eSx}return D.aUE},
iBZ(d){switch(d){case"new":return D.aUF
case"gathering":return D.eSA
case"complete":return D.abN}return D.aUF},
iNg(d){switch(d){case"stable":return D.eSB
case"have-local-offer":return D.eSC
case"have-local-pranswer":return D.eSE
case"have-remote-offer":return D.eSD
case"have-remote-pranswer":return D.eSF
case"closed":return D.aUL}return D.aUL},
iLh(d){switch(d){case"new":return D.aUI
case"connecting":return D.aUJ
case"connected":return D.aUK
case"closed":return D.abO
case"disconnected":return D.aUH
case"failed":return D.aUG}return D.abO},
ac2:function ac2(d,e){this.a=d
this.b=e},
Qe:function Qe(d,e){this.a=d
this.b=e},
Zu:function Zu(d,e){this.a=d
this.b=e},
Qd:function Qd(d,e){this.a=d
this.b=e},
Gl:function Gl(d,e){this.a=d
this.b=e},
cwC:function cwC(){},
hqr(d){var x=new B.Gk()
x.a=d
x.b=!0
return x},
Gk:function Gk(){this.b=this.a=$},
ac1:function ac1(){},
axn:function axn(){},
Zv:function Zv(d,e){this.a=d
this.b=e},
hou(){var x=0,w=A.j(y.H)
var $async$hou=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hou,w)},
hox(d,e,f){var x=0,w=A.j(y.T),v
var $async$hox=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n4(D.nw))){v=null
x=1
break}v=B.hbu(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hox,w)},
hGa(d){var x,w=F.ahU.a7s(C.e5.aM(d),null)
if(w.length===0){x=C.e5.aM(d)
return C.cS.gcq().aM(x)}return C.cS.gcq().aM(w)},
ic8(d){var x,w,v=C.cM.aM(d)
try{x=C.cd.cG(0,F.ahT.bjG(v,!1))
return x}catch(w){x=C.cd.cG(0,v)
return x}},
hoy(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.ic8(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cd.cG(0,C.cM.aM(x))
return v}catch(u){return x}}return null},
ic9(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Y(t,"a=extmap"))continue
if(C.a.Y(t,"a=ssrc"))continue
if(C.a.Y(t,"a=msid"))continue
if(C.a.Y(t,"a=rtcp"))continue
if(C.a.Y(t,"a=rtpmap"))continue
if(C.a.Y(t,"a=fmtp"))continue
if(C.a.Y(t,"a=rtcp-fb"))continue
if(C.a.Y(t,"a=mid:"))continue
if(C.a.Y(t,"a=group:"))continue
if(C.a.Y(t,"a=setup:"))continue
if(C.a.Y(t,"a=ice-options:"))continue
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aJ(s,"\n")},
ica(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hq(v)},
b3P(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b3P)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b3P,w)},
ci9(d,e){return B.icb(d,e)},
icb(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ci9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i4("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.d_,null),$async$ci9)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ci9,w)},
b3S(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3P(d),$async$b3S)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3S,w)},
b3R(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3R=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.ica()
r=C.a.i(f)
t=C.e5.aM(s)
x=3
return A.b(B.ci9(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcq().aM(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3R)
case 3:if(!h){v=null
x=1
break}v=new A.a2I("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3R,w)},
b3Q(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ab(o)===0){v=null
x=1
break}x=3
return A.b(B.b3P(o),$async$b3Q)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ab(u)===0){v=null
x=1
break}try{t=C.cd.cG(0,C.cM.aM(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3Q,w)},
cia(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cia=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ab(q)===0){x=1
break}u=4
x=7
return A.b(O.bIv("ngmy_doc_share_stash_v2_"+C.a.i(q),C.d_),$async$cia)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cia,w)},
b3T(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JS(),$async$b3T)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3T,w)},
asI(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$asI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asI)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3T(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asI,w)},
asG(d,e){var x=0,w=A.j(y.H)
var $async$asG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asG)
case 3:x=2
return A.b(g.aA("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$asG)
case 2:return A.h(null,w)}})
return A.i($async$asG,w)},
a9z(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9z)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JS(),$async$a9z)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dx(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9y(s),$async$a9z)
case 5:x=6
return A.b(B.asG(f,u),$async$a9z)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9z,w)},
a9A(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9A=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9A)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JS(),$async$a9A)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a0(u)
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
s.X(u,t)
s.n(u,o,p)
x=8
return A.b(B.asG(g,q),$async$a9A)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9y(u),$async$a9A)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9A,w)},
a9B(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9B=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9B)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JS(),$async$a9B)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a0(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b3M(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9B)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aA("String","ngmy_doc_share_school_session_"+s,C.T.ar(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9B)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9B,w)},
cib(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cib=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ab(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cib)
case 7:s=f
p=A.v(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.T.aL(0,r,null)
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
return A.i($async$cib,w)},
JT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cib(d),$async$JT)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3T(t),$async$JT)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asH(d),$async$JT)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b3M(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asH(d),$async$JT)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JT,w)},
asH(d){var x=0,w=A.j(y.H)
var $async$asH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asH)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asH)
case 2:return A.h(null,w)}})
return A.i($async$asH,w)},
b3U(){var x,w=$.oh(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hq(v)},
a9C(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hoz(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cie(d){return B.icd(d)},
icd(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cie=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9C(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cie)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cie,w)},
asK(d,e){return B.ice(d,e)},
ice(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9C(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.d_,null),$async$asK)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
$.an.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asK,w)},
cig(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cig=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9C(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asK(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cig)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cig,w)},
cif(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cif=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9C(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asK(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cif)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cif,w)},
cih(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cih=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9C(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asK(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cih,w)},
cii(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hoz(d)){v=null
x=1
break}x=3
return A.b(B.cie(d),$async$cii)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a0(u)
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
return A.i($async$cii,w)},
a9J(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9J=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9J)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9J)
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
q=A.ad(n)
$.an.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9J,w)},
asO(d){return B.ict(d)},
ict(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asO)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i4("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.d_,null),$async$asO)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asO,w)},
asP(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ab(j)===0||!J.de(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asP)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9J(),$async$asP)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ab(q)===0){v=null
x=1
break}u=6
p=C.cd.cG(0,C.cM.aM(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dD(A.a1(r,m,l),m,l)
J.aM(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aM(s,j,o)
x=9
return A.b(B.asO(s),$async$asP)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ad(i)
$.an.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asP,w)},
asR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asR)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9J(),$async$asR)
case 4:u=g
t=J.a0(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dD(A.a1(s,r,q),r,q)
r=C.e5.aM(C.a.i(e))
q.n(0,"answer",C.cS.gcq().aM(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asO(u),$async$asR)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asR,w)},
asQ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asQ)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9J(),$async$asQ)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ab(u)===0){v=null
x=1
break}try{r=C.cd.cG(0,C.cM.aM(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asQ,w)},
arE(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$arE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bo$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.oF)){v=null
x=1
break}x=3
return A.b(p.lK(e),$async$arE)
case 3:r=g
u=4
x=7
return A.b(r.ht(C.ht),$async$arE)
case 7:q=g
o=q
o=o==null?null:J.eU(J.tN(o))
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
return A.i($async$arE,w)},
iJh(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.n.v(w),5,"0")
return v},
h9m(d){return B.iJj(d)},
iJj(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h9m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.ij("media").MM(d,3600),$async$h9m)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$h9m,w)},
Ec(d,e,f,g,h,i){var x=null
return B.iJg(d,e,f,g,h,i)},
iJg(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ec=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hGd(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hoB(r),$async$Ec)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h9m(o),$async$Ec)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9D(r),$async$Ec)
case 14:v=null
x=1
break
case 13:e=$.bH.h(0,C.aYs)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.It(A.a([],g))
x=15
return A.b(d.fk(0,A.ayb("GET",A.cI(n,0,null))).d4(0,C.HS),$async$Ec)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9D(r),$async$Ec)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LN(d)
u=19
case 22:x=24
return A.b(d.A(),$async$Ec)
case 24:if(!b2){x=23
break}k=d.gO(0)
q+=J.ab(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3W(r,k),$async$Ec)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$Ec)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X8(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ad(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a9D(r),$async$Ec)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ec,w)},
aUU(d){return B.iJi(d)},
iJi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.ij("media").X(0,d),$async$aUU)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aUU,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[67]
I=c[100]
P=c[314]
Q=c[53]
F=c[307]
K=c[187]
G=c[69]
R=c[272]
S=c[273]
E=c[264]
H=c[102]
T=c[238]
U=c[72]
V=c[188]
W=c[270]
L=c[252]
X=c[299]
M=c[315]
B=a.updateHolder(c[27],B)
D=c[313]
Y=c[237]
N=c[246]
Z=c[78]
A_=c[87]
B.cwD.prototype={
aJh(d,e){return this.cWf(d,e)},
cWf(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aJh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dD(r,s,t)
t.u(0,d)
u=new q(A.kE(A.cz(t)))
t=J.k(u)
v=B.ihj(C.cS.gcq().aM(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aJh,w)}}
B.b98.prototype={
bG9(d){var x=this,w=x.w
w.onclose=A.hJ(new B.cwy(x))
w.onopen=A.hJ(new B.cwz(x))
w.onmessage=A.hJ(new B.cwA(x))
w.onbufferedamountlow=A.hJ(new B.cwB(x))},
gd6(d){return this.x},
al0(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$al0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gk()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hqr(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.el(d.arrayBuffer(),y.af),$async$al0)
case 8:v=t.hqr(s.aqN(f,0,null))
x=1
break
case 7:case 4:v=B.hqr(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$al0,w)}}
B.b99.prototype={
bGa(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hJ(new B.cwE(x)))
w.addEventListener("icecandidate",A.hJ(new B.cwF(x)))
w.addEventListener("iceconnectionstatechange",A.hJ(new B.cwG(x)))
w.onicegatheringstatechange=A.hJ(new B.cwH(x))
w.addEventListener("signalingstatechange",A.hJ(new B.cwI(x)))
if(!$.hyH())w.addEventListener("connectionstatechange",A.hJ(new B.cwJ(x)))
w.addEventListener("negotiationneeded",A.hJ(new B.cwK(x)))
w.addEventListener("track",A.hJ(new B.cwL(x)))},
aoM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aoM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.el(s.createAnswer(A.kE(A.cz(A.S(y.N,y.z)))),y.aQ),$async$aoM)
case 3:t=f
v=new B.Zv(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoM,w)},
aaI(d,e){return this.bv4(0,e)},
bv4(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aaI)
case 2:return A.h(null,w)}})
return A.i($async$aaI,w)},
aaQ(d,e){return this.bvp(0,e)},
bvp(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aaQ)
case 2:return A.h(null,w)}})
return A.i($async$aaQ,w)},
atb(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$atb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zv(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$atb,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aeT.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0y.prototype={
R(){return new B.aD8()},
gd8(){return this.c}}
B.aD8.prototype={
Z(){this.a4()
this.ahp()},
ahp(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3N(u.e,u.c),$async$ahp)
case 2:t=e
if(v.c!=null)v.l(new B.dir(v,t))
return A.h(null,w)}})
return A.i($async$ahp,w)},
Sr(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asD(t.e,t.c,!1),$async$Sr)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(D.fIG)
x=1
break}x=4
return A.b(B.a9x(u.a.c,"individual"),$async$Sr)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a92(A.e4(new B.dio(u),!1,null,y.H)),$async$Sr)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Sr,w)},
L2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$L2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fOe(o),$async$L2)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9B(o.e,r,s,q),$async$L2)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.T(D.fFF)
x=1
break}x=5
return A.b(B.a9x(u.a.c,"member"),$async$L2)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a92(A.e4(new B.diq(u),!1,null,y.H)),$async$L2)
case 6:case 1:return A.h(v,w)}})
return A.i($async$L2,w)},
zr(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9w(t.e,o,t.f,t.r,t.w,s),$async$zr)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9x(u.a.c,"org_owner"),$async$zr)
case 4:x=5
return A.b(B.asI(u.a.c),$async$zr)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fOJ(o),$async$zr)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9z(s,t,o,q.c),$async$zr)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.T(D.fFB)
x=1
break}x=10
return A.b(B.asI(u.a.c),$async$zr)
case 10:o=u.c
if(o==null){x=1
break}o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a92(A.e4(new B.dip(u),!1,null,y.H)),$async$zr)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zr,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.I,q=r?C.o_:C.nj,p=B.how(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aH(d,C.dM,y.m).w
w=A.n(28)
v=A.a([new A.ac(0,C.G,C.aB.j(0.35),C.fy,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.h2a,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hr,s,s,s),C.az,D.hmD,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cg5,C.m),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lY(new B.dit(),s),C.N,v,C.ee,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.ao,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.u(w,A.a([new B.afm(C.f9,C.aGX,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcon(),s),C.ae],u))
w.push(new B.afm(C.qc,C.a72,"Team Member","Sign in with your organization access code + password",t.gcpi(),s))
w.push(C.ae)
w.push(new B.afm(C.asE,C.a8L,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcoN(),s))
return A.c6(s,q,A.bm(!0,A.cb(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.Q(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.afm.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aN(!1,r,!0,A.eK(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a7(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.eD,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lS,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.R(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A6,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFR.prototype={}
B.aJ6.prototype={}
B.jX.prototype={
n4(d){var x=this.b,w=C.a.oz(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gatS(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.a1(x/1024,1)+" KB"
if(x<1073741824)return C.h.a1(x/1048576,1)+" MB"
return C.h.a1(x/1073741824,2)+" GB"},
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
bj8(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jX(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cUH(d){return this.bj8(null,d)},
aIZ(d){return this.bj8(d,null)}}
B.X2.prototype={
R(){return new B.aHe(new A.cB(null,y.A))},
gd8(){return this.c}}
B.aHe.prototype={
Z(){this.a4()
this.ahq()},
ahq(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CJ(u.a.c),$async$ahq)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e5z(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ahq,w)},
ahr(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ahr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fS(new A.fG(s)),$async$ahr)
case 3:t=u.c
if(t!=null)t.M(y.q).f.T(D.fJB)
case 1:return A.h(v,w)}})
return A.i($async$ahr,w)},
a1k(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a1k=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.arE(s.d,4),$async$a1k)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rK(r,"ngmy_my_code_"+m+".png"),$async$a1k)
case 8:q=e
o=s.c
if(o!=null)o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ad(l)
o=s.c
if(o!=null)o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1k,w)},
als(){var x=0,w=A.j(y.H),v,u=this,t
var $async$als=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acF("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$als)
case 3:case 1:return A.h(v,w)}})
return A.i($async$als,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.R(d).ax.a===C.I,n=o?C.o_:C.nj,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l5
else if(q.e==null)x=A.at(new A.C(C.eA,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aB.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AM,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a7(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.ap6,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aB.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cb(A.w(A.a([x,C.nC,w,C.lq,new A.ea(A.q(p,A.qA(p,p,!1,B.ic4(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.ae,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lq,A.A(A.a([A.E(A.eo(I.Ei,p,C.XR,q.gcgg(),p),1),C.ar,A.E(A.dg(C.AB,p,C.aec,q.gcgh(),A.bp(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a4(1/0,p,A.eo(N.a5Q,p,D.hi1,q.gcEC(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apI,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.X6.prototype={
R(){return new B.aHh(new A.au(C.aw,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aHh.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JR(x==null?"":x)
if(w!=null)this.d.sb_(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a1l(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1l=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JR(u.d.a.a)
if(t==null){u.l(new B.e6I(u))
x=1
break}u.l(new B.e6J(u))
s=u.a
r=s.c
x=3
return A.b(B.a9v(s.d,new B.e6K(u),t,r),$async$a1l)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e6L(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a1l,w)},
a4T(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4T=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.l(new B.e6M(r))
u=4
q=J.ez(r.a.d)
x=7
return A.b(B.ti(r.a.c,q),$async$a4T)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e6N(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ab(r.a.d)>1?"NGMY Doc Share ("+J.ab(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.akx(p,m,l,j,k),$async$a4T)
case 8:o=e
if(r.c!=null)r.l(new B.e6O(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e6P(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e6Q(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4T,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.R(d).ax.a===C.I,i=j?D.al0:D.ait,h=j?D.amR:C.c,g=j?C.aT:C.a_,f=j?C.bQ:C.ao,e=j?D.ajZ:C.bo
i=[i,e,h,g,f,j?C.fC:C.bW]
x=A.R(d).ax.a===C.I
w=J.ab(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bW(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bW(C.z,0.5,C.w,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c2V,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a7(C.ax,C.aC,C.w,A.a([i[5].j(0.85),C.aB],e),k,k),C.m),k,52,k,k,k,k,k,52),C.eD,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AM,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vk(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.boh()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aO(k,C.M,u==null,k,!0,C.t,k,A.aQ(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.PL,k,k,"",k,!0,new A.b6(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.n(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e6R(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mT,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.El(l.a.d,4)
m=A.B(new A.O(m,new B.e6S(x,new A.aKp(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.ab(l.a.d)>4)m.push(new A.C(C.kQ,A.c("+ "+(J.ab(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.eq,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fE7)
else q.push(A.V(C.kT,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cY(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.p(u,k,s,t,k,k,C.m),C.iw,k,k,k,k,C.f3,k,k,k)],r))}e=A.E(A.cb(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bKT,k,k,C.ah),1)
u=l.f?k:l.gcED()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eo(N.a5Q,k,D.hj8,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.bb(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcgi()
t=A.bp(C.aB,k,k,0,C.c,k,C.o8,k,new A.bb(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.l6(new B.e6T(),A.w(A.a([e,new A.C(D.bKm,A.w(A.a([s,C.N,i,C.ae,A.bI(l.f?C.uz:D.hhm,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a22,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.boh.prototype={
pw(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hn(C.bC,v.length),C.aP)}}
B.X3.prototype={
R(){return new B.aHf()}}
B.aHf.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aU()
u.d=new A.au(new A.bd(w,C.bb,C.aP),v)
x=x.d
u.e!==$&&A.aU()
u.e=new A.au(new A.bd(x,C.bb,C.aP),v)
u.f!==$&&A.aU()
u.f=new A.au(C.aw,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.ay()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a3()},
ahs(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ahs=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e5A(r))
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
return A.b(B.a9A(p,m,n,o,C.a.i(l).length===0?null:l),$async$ahs)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.M(y.q).f.T(D.fJc)
s=[1]
x=4
break}p.M(y.q).f.T(D.fHO)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e5B(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ahs,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.R(d).ax.a===C.I?C.o_:C.nj,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h9F,s,s,s,1,s,!0),p=A.q(s,D.bCj,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.Je,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aO(s,C.M,!1,s,!0,C.t,s,A.aQ(),o,s,s,s,s,s,2,D.cap,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.an,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aO(s,C.M,!1,s,!0,C.t,s,A.aQ(),x,s,s,s,s,s,2,D.cak,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.an,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aO(s,C.M,!1,s,!0,C.t,s,A.aQ(),w,s,s,s,s,s,2,D.caA,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.an,s,s,s,s)
v=t.r?s:t.gcgj()
u=A.bp(C.aB,s,s,s,s,C.hx,s,s,s,s,s,s)
return A.c6(q,r,A.cb(A.w(A.a([p,C.df,o,C.ae,x,C.ae,w,C.nC,A.bI(t.r?C.uz:C.b0o,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.aeA.prototype={}
B.bBm.prototype={
a7J(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a9s()))
x=3
return A.b(B.T9(t,s),$async$a7J)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7J,w)},
gd8(){return this.a}}
B.P2.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0x.prototype={
R(){return new B.aD7(new A.au(C.aw,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aD7.prototype={
Z(){this.a4()
$.aS.U$.push(new B.din(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cgp(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3M(d),u=x.a.c,t=u?C.j1:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.o_:v.a[0],p=A.n(24),o=A.K(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aB.j(u?0.25:0.12),C.fy,32)],n),l=A.q(w,Y.avs,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aB.j(0.4),C.cC,16)],n),C.awk,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vk(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAY()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aO(!1,C.M,!1,w,!0,C.t,w,A.aQ(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dt,w,w,"",w,!0,new A.b6(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.n(16),D.ba0),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dil(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mT,w,w,w,w)
f=f[1]
h=y.p
return A.eF(w,C.L,new A.cO(T.Nl,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bn,new A.C(C.xk,A.w(A.a([l,C.aN,k,C.N,j,C.ee,i,C.ee,A.A(A.a([A.E(A.dV(C.oC,new B.dim(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.bb(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ac(0,C.G,C.aB.j(0.35),C.cO,12)],n),M.RX,C.m),C.bn,A.aE(!1,C.a3,!0,w,A.aN(!1,A.n(14),!0,D.eLO,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcgo(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PT,w,C.db,w,w,w)}}
B.bAY.prototype={
pw(d,e){return e.aoG(e.a.toUpperCase())}}
B.X4.prototype={
R(){return new B.aHg(A.a([],y.r),A.aR(y.N))},
gd8(){return this.c}}
B.aHg.prototype={
Z(){var x=this
x.a4()
x.uU()
x.w=A.d5(C.jZ,new B.e6G(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.Xd()
this.a3()},
a3H(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P1(u.a.c),$async$a3H)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.BE(u.a.c),$async$a3H)
case 4:u.l(new s.e63(u,e))
u.iC("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a3H,w)},
uU(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P1(u.a.c),$async$uU)
case 3:t=e
x=4
return A.b(B.BE(u.a.c),$async$uU)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e64(u,s))
if(t>0)u.iC("Received "+A.v(t)+" file(s) via My Code.")
u.Pt(u.d)
B.CJ(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uU,w)},
Pt(d){return this.bKh(d)},
bKh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Pt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9F(r,u.a.c),$async$Pt)
case 8:p=f
if(u.c==null){x=1
break}new B.e5D(u,r,p).$0()
u.c.ez()
case 7:if(!(C.a.Y(r.c,"video/")||r.n4(D.nw))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Xb(r,u.a.c),$async$Pt)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.BE(u.a.c),$async$Pt)
case 12:u.l(new o.e5E(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Pt,w)},
PT(d){return this.bQL(d)},
bQL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$PT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9F(d,u.a.c),$async$PT)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e5J(u,d,t))
x=6
return A.b(A.fS(new A.fG(t)),$async$PT)
case 6:u.iC("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fS(new A.fG(r.toUpperCase())),$async$PT)
case 7:u.iC("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$PT,w)},
iC(d){var x=null,w=this.c
if(w==null)return
w.M(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uV(d,e){return this.cPT(d,e)},
cPT(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e6u(r,e))
u=3
x=6
return A.b(d.$0(),$async$uV)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e6v(r))
$.eZ.mY()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uV,w)},
gb_T(){var x=this.a
return x.f||x.r||x.w},
JM(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$JM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gb_T()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ci7(s,n,r,q,o,t),$async$JM)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iC("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h1F(o,u.a.c),$async$JM)
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
return A.b(B.Ee(s,o,r,q,n,t),$async$JM)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JM,w)},
a2H(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a2H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asI(u.a.c),$async$a2H)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iC("No organization portal found.")
x=1
break}t=J.a0(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).ca(A.e4(new B.e60(u,r,q),!1,null,y.H)),$async$a2H)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a2H,w)},
a3S(d){return this.cxX(d)},
cxW(){return this.a3S(1)},
cxX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3S=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gb_T()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.asF(u.a.c),$async$a3S)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3S,w)},
afd(d,e,f){return this.c6U(d,e,f)},
c6U(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$afd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iC(e)
x=1
break}x=3
return A.b(u.uV(new B.e5Y(u,d,null,e,f),"Uploading\u2026"),$async$afd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
bKq(){B.hWF(!1,new B.e5H(this))
return},
cD7(){this.l(new B.e68(this))},
aDj(){var x=0,w=A.j(y.H),v=this
var $async$aDj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bKq()
return A.h(null,w)}})
return A.i($async$aDj,w)},
af9(){var x=0,w=A.j(y.H),v=this
var $async$af9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uV(new B.e5N(v),"Importing\u2026"),$async$af9)
case 2:return A.h(null,w)}})
return A.i($async$af9,w)},
Uu(d){return this.cP9(d)},
cP9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Uu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n4(D.nw)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ca(A.e4(new B.e6r(u,d),!1,null,y.H)),$async$Uu)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n4(D.U1)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ca(A.e4(new B.e6s(u,d),!1,null,y.H)),$async$Uu)
case 8:x=1
break
case 7:x=u.c7C(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ca(A.e4(new B.e6t(u,d),!1,null,y.H)),$async$Uu)
case 11:x=1
break
case 10:u.iC("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Uu,w)},
c7C(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.oz(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.d_b,C.a.aV(x,w+1).toLowerCase())},
aj7(d){return this.cor(d)},
cor(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aj7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n4(D.nw)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ca(A.e4(new B.e5Z(u,d),!1,null,y.H)),$async$aj7)
case 5:x=1
break
case 4:u.l(new B.e6_(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aj7,w)},
TO(d){return this.cG6(d)},
cG6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$TO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iC("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pZ(t,s.c,s.f),$async$TO)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uV(new B.e6k(u,d),"Preparing QR\u2026"),$async$TO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TO,w)},
alT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$alT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e6l(),A.T(t).k("O<1,o>")).fJ(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e6m(q),s),s.k("L.E"))
if(r.length===0){u.iC("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.TO(r),$async$alT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$alT,w)},
alM(d){return this.cFE(d)},
cFE(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3M(r)
r=u.c
r.toString
x=3
return A.b(A.bX(C.L,null,new B.e6e(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$alM)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Uu(d)
break
case"qr":u.TO(A.a([d],y.r))
break
case"send_my_code":u.cp7(A.a([d],y.r))
break
case"save":u.al8(d)
break
case"delete":u.KI(d)
break}case 1:return A.h(v,w)}})
return A.i($async$alM,w)},
a__(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a__=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e5K(),A.T(t).k("O<1,o>")).fJ(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e5L(q),s),s.k("L.E"))
if(r.length===0){u.iC("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pZ(t,s.c,s.f),$async$a__)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uV(new B.e5M(u,r),"Preparing file\u2026"),$async$a__)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a__,w)},
akg(d){return this.cwd(d)},
cwd(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$akg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hXJ(d,!1),$async$akg)
case 3:s=f
r=s==null
q=B.a9C(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iC("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akg,w)},
ajd(){var x=0,w=A.j(y.H),v=this,u
var $async$ajd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.hau(u,v.a.c),$async$ajd)
case 2:return A.h(null,w)}})
return A.i($async$ajd,w)},
bKp(){B.hWF(!1,new B.e5G(this,null))
return},
L1(d,e){return this.cp8(d,e)},
b6J(d){return this.L1(null,d)},
cp7(d){return this.L1(d,null)},
cp8(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$L1=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e61(s),o),o.k("L.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y9.cr().arv(!0,C.a3U,!1),$async$L1)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.uV(new B.e62(l,s,r),"Preparing\u2026"),$async$L1)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iC("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iC("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJM(p,l,e,s.a.c),$async$L1)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iC("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$L1,w)},
K2(d){return this.c6H(d)},
c6H(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$K2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.ic3(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b6J(t),$async$K2)
case 8:x=6
break
case 7:u.iC("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iC("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uV(new B.e5W(u,d),"Receiving video\u2026"),$async$K2)
case 11:x=1
break
case 10:x=12
return A.b(u.uV(new B.e5X(u,d),"Receiving\u2026"),$async$K2)
case 12:case 1:return A.h(v,w)}})
return A.i($async$K2,w)},
FL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$FL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E8()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.akg(t),$async$FL)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.K2(s),$async$FL)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ca(A.e4(new B.e66(u),!1,null,y.N)),$async$FL)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uU(),$async$FL)
case 10:x=1
break
case 9:x=11
return A.b(u.K2(C.a.i(r)),$async$FL)
case 11:case 1:return A.h(v,w)}})
return A.i($async$FL,w)},
al8(d){return this.cBB(d)},
cBB(d){var x=0,w=A.j(y.H),v=this
var $async$al8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uV(new B.e65(v,d),"Saving\u2026"),$async$al8)
case 2:return A.h(null,w)}})
return A.i($async$al8,w)},
KI(d){return this.bTa(d)},
bTa(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$KI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lJ(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$KI)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cia(t),$async$KI)
case 6:case 5:s=d.a
x=7
return A.b(B.FQ(u.a.c,s),$async$KI)
case 7:u.r.X(0,s)
x=8
return A.b(u.uU(),$async$KI)
case 8:case 1:return A.h(v,w)}})
return A.i($async$KI,w)},
alZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3M(r)
r=u.c
r.toString
x=3
return A.b(A.bX(C.L,null,new B.e6q(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alZ)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ajd()
break
case"import":u.af9()
break}case 1:return A.h(v,w)}})
return A.i($async$alZ,w)},
cgm(d){var x=d.c
if(C.a.Y(x,"video/")||d.n4(D.nw))return C.rG
if(C.a.Y(x,"image/")||d.n4(D.U1))return C.vF
if(C.a.q(x,"pdf"))return S.IU
return D.at2},
C(d){var x,w,v=this,u=null,t=B.a3M(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.J6,u,u,u,new B.e6B(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c3x,u,u,u,v.e?u:v.gcoO(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcD6()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bYs:E.ats,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a5M,u,u,u,v.e?u:v.gcgn(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.pd,u,u,u,v.e?u:v.gb7P(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c5m,u,u,u,v.e?u:new B.e6C(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lY(new B.e6D(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bW(C.z,0.5,C.w,u,0,A.a([p.j(A.R(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bW(C.z,0.5,C.w,u,0,A.a([C.aB.j(A.R(d).ax.a===C.I?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jK(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aD4(C.jJ,s,!0,t,w?u:v.gcG7(),u),1)
x.push(new A.C(C.ap4,A.l6(new B.e6E(),A.A(A.a([s,C.ar,A.E(new B.aD4(C.tX,"Export",!1,t,w?u:v.gbX3(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iS,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.biK(t,v.e?u:v.gb7P(),u)
else s=A.kv(!0,u,u,new B.e6F(v,t),s,u,D.bIV,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aD4.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aB,t,t,0,C.c,t,C.tO,t,new A.bb(s,C.a1),t,t,t)
return A.dg(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tO,t,new A.bb(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eo(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.biK.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l6(new B.dij(),new A.C(E.a30,A.w(A.a([A.l6(new B.dik(),A.q(x,A.V(C.Ac,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a7(C.ax,C.aC,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.em,C.hC,x,x,new A.bq(0.86,1,w),s),C.ee,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ee,A.dg(C.pd,x,D.hmX,this.d,A.bp(C.aB,x,x,x,C.c,x,C.PR,x,new A.bb(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.Dd,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeU.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dy(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.n4(D.nw))p=D.dE4
else{p=C.a.Y(p,"image/")||i.n4(D.U1)
n=y.O
p=p?A.a([C.cZ,C.aB],n):A.a([C.aO.j(0.85),C.aB.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a7(C.ax,C.aC,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gatS()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n4(D.nw))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.at,A.c(C.d.aJ(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h4,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n4(D.nw)))l.push(A.hmj(C.aB,!1,j,j,j,!1,j,j,new B.diG(k),j,j,new A.bb(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p9,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l6(new B.diH(),new A.C(C.dX,A.aE(!1,C.a3,!0,j,A.aN(!1,r,!0,new A.C(C.a2s,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.bb(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.b9("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0z.prototype={
R(){return new B.aD9()},
gd8(){return this.c}}
B.aD9.prototype={
Z(){this.a4()
this.zf()},
t(){B.ici(this.e)
this.a3()},
zf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$zf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.ti(o.c,o.d),$async$zf)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.icl(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.ick(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.diD(s))
x=1
break}s.l(new B.diE(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.diF(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$zf,w)},
a4S(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4S=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ti(t.c,t.d),$async$a4S)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(D.fGb)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.akx(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4S)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4S,w)},
c6A(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ku(u,C.z,v,new B.diB(w,t),C.hi,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.ha(t,C.z,v,new B.diC(w),C.hi,C.dE,!0,v,!1,v,v)
else return C.bL
return A.u8(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3M(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Ek,u,u,u,v.gbbE(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.GJ
else{q=v.r
if(q!=null)t=new A.C(C.eA,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c3(w,".heic")||C.a.c3(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.eA,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.dg(C.Ek,u,D.h4G,v.gbbE(),A.bp(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c6A()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0w.prototype={
R(){return new B.aD6(A.a5M(),C.bG,C.bG)},
gd8(){return this.c}}
B.aD6.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fL(w,A.a3(w).k("fL<1>")).iQ(new B.dig(v))
x.gd2Z().iQ(new B.dih(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fL(x,A.a3(x).k("fL<1>"))}if(x==null)x=C.bgm
x.iQ(new B.dii(v))
v.zf()},
zf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$zf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ti(p.c,p.d),$async$zf)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.di9(s))
x=1
break}x=8
return A.b(s.d.uc(0,new A.a61(r,s.a.d.c)),$async$zf)
case 8:if(s.c==null){x=1
break}s.l(new B.dia(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dib(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$zf,w)},
a1m(){var x=0,w=A.j(y.H),v=this,u
var $async$a1m=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hs(0),$async$a1m)
case 5:x=3
break
case 4:x=6
return A.b(u.iT(0),$async$a1m)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a1m,w)},
aYK(d){var x=d.a
return C.a.b1(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.b1(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3M(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.GJ
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bZv,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RX,C.m),o,88,o,o,o,o,o,88)
t=A.kT(C.aB,o,o,o,m,0,o,new B.dic(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aYK(p.w)+" / "+p.aYK(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aB,o,o,o,o,D.fCz,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vI:C.fT,o,o,o,o,o)
x=A.w(A.a([u,C.lq,t,x,C.df,A.dg(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcgq(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.q2,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rv.prototype={
R(){return new B.aDc()},
gd8(){return this.c}}
B.aDc.prototype={
Z(){this.a4()
this.RH()},
RH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$RH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hox(o.c,o.d,new B.diU(s)),$async$RH)
case 7:r=e
if(r==null||r.length===0){s.l(new B.diV(s))
x=1
break}s.e=r
q=Q.iAO(r)
if(q==null){s.l(new B.diW(s))
x=1
break}s.d=q
q.aU(0,s.gb6w())
x=8
return A.b(q.j6(0).d4(0,C.o6),$async$RH)
case 8:if(s.c==null){x=1
break}s.l(new B.diX(s))
x=9
return A.b(q.qN(0),$async$RH)
case 9:q.uw(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.diY(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$RH,w)},
cmX(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.diZ(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ev(0,x.gb6w())
w=x.d
if(w!=null)w.t()
B.iLB(x.e)
x.a3()},
ahv(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3V(u.c,u.d),$async$ahv)
case 2:t=e
u=v.c
if(u!=null)u.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ahv,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3M(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aI(t,t,t,t,C.on,t,t,t,u.gcgk(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.GJ
else{q=u.r
if(q!=null)s=new A.C(C.eA,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akV(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fD(x,new A.am(C.z,t,C.ac,C.t,A.a([new A.B9(s,t),A.aA(t,A.xT(A.q(t,A.V(q?K.vI:C.fT,C.c,t,t,t,48),C.f,t,t,new A.p(C.bc,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dj0(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0B.prototype={
R(){return new B.aDa(new A.cB(null,y.A))}}
B.aDa.prototype={
gcPy(){var x,w,v=this.a
if(v.e!==D.Vq)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcP7(){var x,w,v=this.a
if(v.e!==D.Bd)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcPy()
if(x!=null){v.SR(x)
v.e=A.d5(V.Df,new B.diQ(v,x))}w=v.gcP7()
if(w!=null){v.SQ(w)
v.f=A.d5(C.fr,new B.diR(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
SQ(d){return this.cup(d)},
cup(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asN(d),$async$SQ)
case 3:t=f
x=4
return A.b(B.cit(d),$async$SQ)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.diI(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$SQ,w)},
SR(d){return this.cuq(d)},
cuq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.hbd(d),$async$SR)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bHw(t),$async$SR)
case 4:if(u.c==null){x=1
break}u.l(new B.diJ(u))
u.c.M(y.q).f.T(D.aY1)
case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
gcc7(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcgl(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a4B(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a4B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E8()){t=u.c
if(t!=null)t.M(y.q).f.T(D.fJm)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ca(A.e4(new B.diK(),!1,null,y.N)),$async$a4B)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bHw(s),$async$a4B)
case 4:t=u.c
if(t!=null)t.M(y.q).f.T(D.aY1)
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
acZ(d){return this.bQM(d)},
bQM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fS(new A.fG(C.d.aJ(t,", "))),$async$acZ)
case 3:if(d.e!=null){t=d.M(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acZ,w)},
aht(d){return this.bQu(d)},
bQu(d){var x=0,w=A.j(y.H),v=this
var $async$aht=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fS(new A.fG(v.a.c)),$async$aht)
case 2:if(d.e!=null)d.M(y.q).f.T(D.fGF)
return A.h(null,w)}})
return A.i($async$aht,w)},
a4v(d){return this.cBD(d)},
cBD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a4v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.arE(s.d,4),$async$a4v)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rK(r,"ngmy_doc_share_qr.png"),$async$a4v)
case 8:q=f
if(d.e!=null)d.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ad(n)
if(d.e!=null)d.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4v,w)},
gb19(){var x,w=this.a
if(w.e!==D.Kp)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acW(d){return this.bQF(d)},
bQF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb19()
if(t==null){x=1
break}x=3
return A.b(A.fS(new A.fG(C.a.Y(t,"http")?t:"N2|"+t)),$async$acW)
case 3:if(d.e!=null)d.M(y.q).f.T(D.fIl)
case 1:return A.h(v,w)}})
return A.i($async$acW,w)},
ahu(){var x=0,w=A.j(y.H),v=this,u
var $async$ahu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Xd(),$async$ahu)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ahu,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3M(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kp&&i!==D.Vq&&i!==D.Bd
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kp||t===D.Vq||t===D.Bd?l:A.aI(l,l,l,l,C.lJ,l,l,l,m.gb4k(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qA(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.c(""+q.d+" file(s) \xb7 "+m.gcc7(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kp){t=C.aB.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcgl(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aJ(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hA(D.c9s,D.hev,new B.diL(m,d),l)],p))}if(m.a.e===D.Kp&&m.gb19()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hA(D.c5J,D.hb4,new B.diM(m,d),l)],p))
if(m.a.e===D.Bd){x=(m.w?C.dT:C.aB).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GN:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.Vq){x=(m.r?C.dT:C.aB).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GN:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.ae,A.dg(D.c11,l,D.hhG,m.gcC0(),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pi(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.ba,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.eo(I.Ei,l,C.XR,new B.diN(m,d),l),1),C.ar,A.E(A.dg(C.AB,l,C.aec,new B.diO(m,d),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a4(1/0,l,A.bI(U.BQ,l,m.gb4k(),A.bp(C.aO,l,l,l,l,C.hx,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.diP(),y.C)}}
B.aeS.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.w(A.a([w,C.aN,A.q(x,A.qA(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bE,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bI(C.BR,x,new B.di8(d),x)],u),x,x,C.nQ,v,x,x,x,x,D.h3C,x)}}
B.a0v.prototype={
R(){return new B.aD5(A.Aj(C.zr,C.oJ,C.vU))}}
B.aD5.prototype={
t(){this.d.t()
this.a3()},
aBF(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
C(d){var x=null
return A.c6(A.eR(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.hbC,x,x,x,1,x,!0),C.v,A.Ai(this.d,C.c1,this.gaBE()),x,!1,!1,x,x)}}
B.a0C.prototype={
R(){return new B.aDb(A.Aj(C.zr,C.oJ,C.vU))},
gd8(){return this.c}}
B.aDb.prototype={
c7E(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ajE(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Np("text/plain"),$async$ajE)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.M(y.q).f.T(D.fJg)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ajE,w)},
adP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hXJ(p,!0),$async$adP)
case 3:t=e
p=t==null
s=B.a9C(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.M(y.q).f.T(D.fFM)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adP,w)},
t(){this.d.t()
this.a3()},
aBF(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c7E(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.auu,v,v,v,w.gbWx(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5U,v,v,v,w.gcrE(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.rz:R.R3,v,v,v,v,v),v,v,v,new B.diT(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hiD,v,v,v,1,v,!0)
u=A.Ai(w.d,C.c1,w.gaBE())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ac,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eS8],s),v),v,!1,!1,v,v)}}
B.biL.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pV
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pV:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aN(!1,w,!0,new A.C(C.a36,A.A(A.a([u,C.bd,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eO,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.ac2.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Qe.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zu.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Qd.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gl.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cwC.prototype={}
B.Gk.prototype={}
B.ac1.prototype={}
B.axn.prototype={}
B.Zv.prototype={}
var z=a.updateTypes(["az<~>()","P(jX)","o(jX)","X4(Z)","~()","a0y(Z)","F(F,jX)","Rv(Z)","~(lP)","cr(Gk)","az<jX?>(@)","X2(Z)","X6(Z)","C(jX)","jX(@)","a9<o,@>(jX)","a0x(Z)","X3(Z)","a0z(Z)","a0w(Z)","a0B(Z)","aeS(Z)","ah<jX>()","a0C(Z)","aeU(Z,F)","a0v(Z)","a9<o,aG>(jX)","cr(Zu)","cr(ac1)","az<cr>(Gk)"])
B.cwy.prototype={
$1(d){var x=this.a
x.x=D.aUD
x.y.K(0,D.aUD)},
$S:74}
B.cwz.prototype={
$1(d){var x=this.a
x.x=D.aUC
x.y.K(0,D.aUC)},
$S:74}
B.cwA.prototype={
$1(d){var x=this.a
x.al0(A.a4v(d.data)).bB(new B.cwx(x),y.b)},
$S:74}
B.cwx.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cwB.prototype={
$1(d){},
$S:74}
B.cwE.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.ihi(d.channel))},
$S:18}
B.cwF.prototype={
$1(d){},
$S:18}
B.cwG.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iBY(w.iceConnectionState)
x.cx=w
if($.hyH())switch(w.a){case 0:x.cy=D.aUI
break
case 1:x.cy=D.aUJ
break
case 3:x.cy=D.aUK
break
case 5:x.cy=D.aUG
break
case 6:x.cy=D.aUH
break
case 7:x.cy=D.abO
break
default:break}},
$S:112}
B.cwH.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iBZ(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:112}
B.cwI.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iNg(w.signalingState)},
$S:112}
B.cwJ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iLh(w.connectionState)},
$S:112}
B.cwK.prototype={
$1(d){},
$S:112}
B.cwL.prototype={
$1(d){},
$S:18}
B.fJx.prototype={
$1(d){var x=y.F.a(new A.qT([],[]).oo(d.target.result,!1)),w=C.xb.q(x.objectStoreNames,"blobs")
if(!w)C.x8.Hk(x,"blobs")},
$S:178}
B.hai.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xL.fv(this.b)
$.eZ.mY()
this.c.$1(d)},
$S:456}
B.hak.prototype={
$1(d){return this.a.$1(B.iqT(this.b,this.c))},
$S:33}
B.haj.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.hah.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.hax.prototype={
$1(d){var x=this
return B.hLc(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.hay.prototype={
$1(d){var x=this
return B.hLc(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fMb.prototype={
$1(d){var x=this
return B.ci4(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dir.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dio.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ci4(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.diq.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ci4(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dip.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ci4(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dit.prototype={
$4(d,e,f,g){var x=null
return A.kj(A.A(A.a([A.aI(x,x,x,x,D.c_C,x,x,x,new B.dis(d),x,x,x,x,x,x),A.E(A.G6(D.TJ,!0,x,!1,C.a4Z,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.TJ,x,g,C.aq2,0,e,f)},
$C:"$4",
$R:4,
$S:423}
B.dis.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fOh.prototype={
$1(d){var x,w,v=null,u=A.aH(d,C.eZ,y.m).w,t=this.a,s=t?C.j1:C.c,r=A.n(28),q=A.q(v,D.bCD,C.f,v,v,D.bbC,v,v,v,v,D.apO,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aT
o=A.aO(v,C.M,!1,v,!0,C.t,v,A.aQ(),p,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c48,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aT
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Dw,A.w(A.a([o,C.ae,A.aO(v,C.M,!1,v,!0,C.t,v,A.aQ(),x,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.auK,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.an,v,v,v,v),C.by,A.A(A.a([A.E(A.dV(C.dy,new B.fOf(d),v),1),C.ar,A.E(A.bI(D.ha2,v,new B.fOg(p,x,d),A.bp(C.b8,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HY,v,v,v,v),v)},
$S:65}
B.fOf.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fOg.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.M(y.q).f.T(D.fGW)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aFR(v,x))},
$S:0}
B.fOL.prototype={
$1(d){var x=this,w=null,v=A.aH(d,C.eZ,y.m).w,u=x.a,t=u?C.j1:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bCt,C.f,w,w,D.bd6,w,w,w,w,D.apO,w,w,1/0),new A.C(C.Dw,A.w(A.a([A.aO(w,C.M,!1,w,!0,C.t,w,A.aQ(),r,w,w,w,w,w,2,B.hu4(u,"Organization name",C.Iu,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.an,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aQ(),q,w,w,w,w,w,2,B.hu4(u,"Access code",C.mE,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.an,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aQ(),p,w,w,w,w,w,2,B.hu4(u,"Member password",C.Eh,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.an,w,w,w,w),C.by,A.bI(D.hiK,w,new B.fOK(r,q,p,d),A.bp(C.aB,w,w,w,w,C.hx,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HY,w,w,w,w),w)},
$S:65}
B.fOK.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.M(y.q).f.T(D.fH0)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aJ6(u,x,w))},
$S:0}
B.chW.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a0(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cI(j,0,null):s.b.aY(j)
u=4
x=7
return A.b(A.uT(p,null).d4(0,C.a21),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CK(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ad(h)
$.an.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.ci1.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ci2.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ci3.prototype={
$1(d){return d.b},
$S:z+2}
B.chY.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chZ.prototype={
$1(d){return d.b},
$S:z+2}
B.chX.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.ci_.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.ci0.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.hav.prototype={
$1(d){return new B.X2(this.a,null)},
$S:z+11}
B.haw.prototype={
$1(d){return new B.X6(this.a,this.b,this.c,null)},
$S:z+12}
B.e5z.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e6I.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e6J.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e6K.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e6H(x,d))},
$S:2}
B.e6H.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e6L.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e6M.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e6N.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e6O.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e6P.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e6Q.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e6T.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.e6R.prototype={
$1(d){var x=this.a
return x.f?null:x.a1l()},
$S:2}
B.e6S.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n4(D.U1))s=C.vF
else s=C.a.Y(s,"video/")||d.n4(D.nw)?C.rG:D.at2
x=this.b.a
w=y.p
return new A.C(C.k_,A.A(A.a([A.q(v,A.V(s,C.aB,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gatS(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e5A.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e5B.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ci5.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:100}
B.ci6.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:100}
B.hbw.prototype={
$2(d,e){return e===this.a},
$S:253}
B.fGu.prototype={
$1(d){return J.k(d)},
$S:15}
B.fMp.prototype={
$1(d){var x=this.b
B.ioD(C.Ij.ga9m(this.a)).bB(x.gD5(x),y.H)},
$S:137}
B.fMq.prototype={
$1(d){return this.a.dh(0,null)},
$S:137}
B.fMr.prototype={
$0(){return null},
$S:12}
B.cik.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fMs.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.h.L(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.W(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jX(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fQX.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fKz.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fKA.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cip.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.hfT.prototype={
$1(d){return new B.a0x(this.a,null)},
$S:z+16}
B.din.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:7}
B.dil.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.dim.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e6G.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a3H()},
$S:10}
B.e63.prototype={
$0(){var x=J.bKS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e64.prototype={
$0(){var x=J.bKS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5D.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e5C(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIZ(this.c)}},
$S:0}
B.e5C.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5E.prototype={
$0(){var x=J.bKS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5J.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e5I(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIZ(this.c)}},
$S:0}
B.e5I.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e6u.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e6v.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e60.prototype={
$1(d){return new B.X3(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e5Y.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.JM(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X7(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uU(),$async$$0)
case 5:s=J.a0(t)
x=s.gcp(t)?6:7
break
case 6:x=8
return A.b(r.a3S(s.gI(t)),$async$$0)
case 8:case 7:r.iC(s.gau(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5H.prototype={
$1(d){this.a.afd(d,"No files selected.","Added")},
$S:456}
B.e68.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e67(),A.T(x).k("O<1,o>")))},
$S:0}
B.e67.prototype={
$1(d){return d.a},
$S:z+2}
B.e5N.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y9.cr().d50(C.a3U,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.ez(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k1(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ad(j)
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.iC("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iC("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asM(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.iC("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uU(),$async$$0)
case 9:o.iC("Imported "+J.ab(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e6r.prototype={
$1(d){return new B.Rv(this.a.a.c,this.b,null)},
$S:z+7}
B.e6s.prototype={
$1(d){return new B.a0z(this.a.a.c,this.b,null)},
$S:z+18}
B.e6t.prototype={
$1(d){return new B.a0w(this.a.a.c,this.b,null)},
$S:z+19}
B.e5Z.prototype={
$1(d){return new B.Rv(this.a.a.c,this.b,null)},
$S:z+7}
B.e6_.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e6k.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.JM(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9E(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iC("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cxW(),$async$$0)
case 5:x=6
return A.b(p.uU(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e6g(p),r),new B.e6h(),r.k("O<aj.E,o>")).c1(0,new B.e6i())
q=A.B(r,r.$ti.k("L.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ca(A.e4(new B.e6j(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pY(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Xd(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e6g.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e6f(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e6f.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e6h.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e6i.prototype={
$1(d){return d.length!==0},
$S:3}
B.e6j.prototype={
$1(d){var x=this.a
return new B.a0B(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e6l.prototype={
$1(d){return d.a},
$S:z+2}
B.e6m.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e6e.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kN,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gatS(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n4(D.nw)?C.u0:C.ok
p=!x||p.n4(D.nw)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lv,v,v,C.m),C.bn,A.bm(!0,new A.C(C.Dr,A.w(A.a([q,o,t,C.az,B.a0A(!1,u,!1,w,p,new B.e69(d),v),B.a0A(!1,u,!1,C.jJ,"Share via QR",new B.e6a(d),"Letters/numbers QR code"),B.a0A(!1,u,!1,D.a53,"Send to their Code",new B.e6b(d),"Enter someone else's personal code"),B.a0A(!1,u,!1,C.hR,"Download / save",new B.e6c(d),v),C.aj,B.a0A(!1,u,!0,C.es,"Delete",new B.e6d(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:570}
B.e69.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e6a.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e6b.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e6c.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e6d.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e5K.prototype={
$1(d){return d.a},
$S:z+2}
B.e5L.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e5M.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9G(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HN(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pY(s.c,s.f),$async$$0)
case 4:u.iC(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5G.prototype={
$1(d){var x=this.a
x.uV(new B.e5F(x,d,this.b),"Preparing\u2026")},
$S:456}
B.e5F.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iC("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X7(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.iC("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJM(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iC("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e61.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e62.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aL(v.c.a),r=v.b,q=v.a
case 2:if(!s.A()){x=3
break}u=s.gO(s)
x=4
return A.b(B.hoA(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5W.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HL(new B.e5S(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iC("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e5T(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e5U(s))
case 5:x=8
return A.b(r.b.i4(0,C.HS,new B.e5V()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a0(t)
if(q.gau(t)){s.iC("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uU(),$async$$0)
case 9:s.iC("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5S.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e5P(x,d,e))},
$S:204}
B.e5P.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e5T.prototype={
$1(d){return new B.aeS(this.a.a,null)},
$S:z+21}
B.e5U.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e5V.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e5X.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JR(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9u(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b6J(B.JR(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asM(new B.e5Q(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.hoz(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iC(q)
x=1
break}x=10
return A.b(s.uU(),$async$$0)
case 10:o=J.cK(r)
p=o.eZ(r,new B.e5R()).gI(0)
s.iC(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5Q.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e5O(x,d,e))},
$S:204}
B.e5O.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e5R.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.e66.prototype={
$1(d){return new B.a0C(this.a.a.c,null)},
$S:z+23}
B.e65.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3V(u.a.c,v.b),$async$$0)
case 2:t.iC(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e6q.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.aB.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lv,x,x,C.m),C.bn,A.bm(!0,new A.C(C.Dr,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kN,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.a0A(!0,w,!1,C.mE,"My Code",new B.e6n(d),"Your personal code & QR \u2014 others send docs to you"),B.a0A(!1,w,!1,D.a53,"Send to their Code",new B.e6o(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0A(!1,w,!1,W.At,"Import backup",new B.e6p(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:570}
B.e6n.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e6o.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bKp()},
$S:0}
B.e6p.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e6D.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.K0(D.TJ,x,C.a4Z,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.TJ).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:597}
B.e6B.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e6C.prototype={
$0(){this.a.alZ()
return null},
$S:0}
B.e6E.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:95}
B.e6F.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeU(e,w,v,this.b,x.e,x.cgm(w),new B.e6x(x,w),new B.e6y(x,v,w),new B.e6z(x,w),new B.e6A(x,w),null)},
$S:z+24}
B.e6x.prototype={
$0(){this.a.aj7(this.b)
return null},
$S:0}
B.e6y.prototype={
$0(){var x=this.a
return x.l(new B.e6w(x,this.b,this.c))},
$S:0}
B.e6w.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e6z.prototype={
$0(){this.a.PT(this.b)
return null},
$S:0}
B.e6A.prototype={
$0(){this.a.alM(this.b)
return null},
$S:0}
B.dij.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:95}
B.dik.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.diH.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.diG.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.diD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.diE.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.diF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.diB.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.ha(w,C.z,x,new B.diz(this.a),C.hi,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.diA(this.a))
return C.bL},
$S:139}
B.diz.prototype={
$3(d,e,f){$.aS.U$.push(new B.dix(this.a))
return C.bL},
$S:205}
B.dix.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.diu(x))},
$S:7}
B.diu.prototype={
$0(){return this.a.w=!0},
$S:0}
B.diA.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.diw(x))},
$S:7}
B.diw.prototype={
$0(){return this.a.w=!0},
$S:0}
B.diC.prototype={
$3(d,e,f){$.aS.U$.push(new B.diy(this.a))
return C.bL},
$S:205}
B.diy.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.div(x))},
$S:7}
B.div.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dig.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dif(x,d))},
$S:1835}
B.dif.prototype={
$0(){return this.a.f=this.b===C.wh},
$S:0}
B.dih.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.die(x,d))},
$S:7}
B.die.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dii.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.did(x,d))},
$S:7}
B.did.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.di9.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dia.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dib.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dic.prototype={
$1(d){return this.a.d.OM(0,A.dy(0,0,0,C.h.S(d),0,0))},
$S:6}
B.diU.prototype={
$0(){var x=this.a.a
return B.ti(x.c,x.d)},
$S:1836}
B.diV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.diW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.diX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.diY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.diZ.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dj0.prototype={
$0(){var x=this.a
x.l(new B.dj_(x))},
$S:0}
B.dj_.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hs(0)
else x.qN(0)},
$S:0}
B.diQ.prototype={
$1(d){return this.a.SR(this.b)},
$S:10}
B.diR.prototype={
$1(d){return this.a.SQ(this.b)},
$S:10}
B.diI.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.diJ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.diK.prototype={
$1(d){return D.hV3},
$S:z+25}
B.diP.prototype={
$2(d,e){if(d)B.Xd()},
$S:135}
B.diL.prototype={
$0(){return this.a.acZ(this.b)},
$S:0}
B.diM.prototype={
$0(){return this.a.acW(this.b)},
$S:0}
B.diN.prototype={
$0(){return this.a.aht(this.b)},
$S:0}
B.diO.prototype={
$0(){return this.a.a4v(this.b)},
$S:0}
B.di8.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.diT.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qQ(),$async$$0)
case 2:u.l(new B.diS(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.diS.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cir.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.cis.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aD(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ciq.prototype={
$2(d,e){return this.bqO(d,e)},
bqO(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Xe(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1837}
B.fQw.prototype={
$1(d){if(d===D.abN&&(this.a.a.a&30)===0)this.a.ha(0)},
$S:z+27}
B.fQx.prototype={
$0(){},
$S:12}
B.fRa.prototype={
bss(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fDu(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hGd(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bss(d,e)},
$S:794}
B.fR9.prototype={
$1(d){var x=this
d.b=new B.fR8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fR8.prototype={
$1(d){return this.bsr(d)},
bsr(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b3W(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.T.aL(0,n,null)
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
return A.b(B.fDu(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ad(j)
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a9D(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aD8.prototype,"gcon","Sr",0)
x(v,"gcpi","L2",0)
x(v,"gcoN","zr",0)
x(v=B.aHe.prototype,"gcgg","ahr",0)
x(v,"gcgh","a1k",0)
x(v,"gcEC","als",0)
x(v=B.aHh.prototype,"gcgi","a1l",0)
x(v,"gcED","a4T",0)
x(B.aHf.prototype,"gcgj","ahs",0)
x(B.aD7.prototype,"gcgo","cgp",4)
x(v=B.aHg.prototype,"gcoO","a2H",0)
x(v,"gcD6","cD7",4)
x(v,"gb7P","aDj",0)
x(v,"gcG7","alT",0)
x(v,"gbX3","a__",0)
x(v,"gcgn","FL",0)
x(B.aD9.prototype,"gbbE","a4S",0)
x(B.aD6.prototype,"gcgq","a1m",0)
x(v=B.aDc.prototype,"gb6w","cmX",4)
x(v,"gcgk","ahv",0)
x(v=B.aDa.prototype,"gcC0","a4B",0)
x(v,"gb4k","ahu",0)
w(B.aD5.prototype,"gaBE","aBF",8)
x(v=B.aDb.prototype,"gcrE","ajE",0)
x(v,"gbWx","adP",0)
w(v,"gaBE","aBF",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aG,[B.cwC,B.ac1,B.axn,B.aFR,B.aJ6,B.jX,B.aeA,B.bBm,B.Gk,B.Zv])
w(B.cwD,B.cwC)
w(B.b98,B.ac1)
x(A.hs,[B.cwy,B.cwz,B.cwA,B.cwx,B.cwB,B.cwE,B.cwF,B.cwG,B.cwH,B.cwI,B.cwJ,B.cwK,B.cwL,B.fJx,B.hai,B.hak,B.haj,B.hax,B.hay,B.fMb,B.dio,B.diq,B.dip,B.dit,B.fOh,B.fOL,B.chW,B.ci2,B.ci3,B.chZ,B.chX,B.ci_,B.ci0,B.hav,B.haw,B.e6K,B.e6T,B.e6R,B.e6S,B.fGu,B.fMp,B.fMq,B.cik,B.fMs,B.fQX,B.fKz,B.fKA,B.cip,B.hfT,B.din,B.dil,B.e6G,B.e5C,B.e5I,B.e60,B.e5H,B.e67,B.e6r,B.e6s,B.e6t,B.e5Z,B.e6g,B.e6f,B.e6h,B.e6i,B.e6j,B.e6l,B.e6m,B.e6e,B.e5K,B.e5L,B.e5G,B.e61,B.e5T,B.e5R,B.e66,B.e6q,B.e6D,B.e6E,B.dij,B.dik,B.diH,B.diG,B.diB,B.diz,B.dix,B.diA,B.diC,B.diy,B.dig,B.dih,B.dii,B.dic,B.diQ,B.diR,B.diK,B.cir,B.cis,B.fQw,B.fR9,B.fR8])
w(B.b99,B.axn)
x(A.j0,[B.hah,B.dir,B.dis,B.fOf,B.fOg,B.fOK,B.e5z,B.e6I,B.e6J,B.e6H,B.e6L,B.e6M,B.e6N,B.e6O,B.e6P,B.e6Q,B.e5A,B.e5B,B.fMr,B.dim,B.e63,B.e64,B.e5D,B.e5E,B.e5J,B.e6u,B.e6v,B.e5Y,B.e68,B.e5N,B.e6_,B.e6k,B.e69,B.e6a,B.e6b,B.e6c,B.e6d,B.e5M,B.e5F,B.e62,B.e5W,B.e5P,B.e5U,B.e5V,B.e5X,B.e5O,B.e65,B.e6n,B.e6o,B.e6p,B.e6B,B.e6C,B.e6x,B.e6y,B.e6w,B.e6z,B.e6A,B.diD,B.diE,B.diF,B.diu,B.diw,B.div,B.dif,B.die,B.did,B.di9,B.dia,B.dib,B.diU,B.diV,B.diW,B.diX,B.diY,B.diZ,B.dj0,B.dj_,B.diI,B.diJ,B.diL,B.diM,B.diN,B.diO,B.di8,B.diT,B.diS,B.fQx])
x(A.lo,[B.aeT,B.P2,B.ac2,B.Qe,B.Zu,B.Qd,B.Gl])
x(A.af,[B.a0y,B.X2,B.X6,B.X3,B.a0x,B.X4,B.a0z,B.a0w,B.Rv,B.a0B,B.a0v,B.a0C])
x(A.ai,[B.aD8,B.aHe,B.aHh,B.aHf,B.aD7,B.aHg,B.aD9,B.aD6,B.aDc,B.aDa,B.aD5,B.aDb])
x(A.av,[B.afm,B.aD4,B.biK,B.aeU,B.aeS,B.biL])
x(A.j1,[B.ci1,B.chY,B.ci5,B.ci6,B.hbw,B.e5S,B.e5Q,B.e6F,B.diP,B.ciq,B.fRa])
x(A.jr,[B.boh,B.bAY])})()
A.jj(b.typeUniverse,JSON.parse('{"b98":{"ac1":[]},"b99":{"axn":[]},"a0y":{"af":[],"x":[]},"aD8":{"ai":["a0y"]},"afm":{"av":[],"x":[]},"X2":{"af":[],"x":[]},"X6":{"af":[],"x":[]},"aHe":{"ai":["X2"]},"aHh":{"ai":["X6"]},"boh":{"jr":[]},"X3":{"af":[],"x":[]},"aHf":{"ai":["X3"]},"a0x":{"af":[],"x":[]},"X4":{"af":[],"x":[]},"aeU":{"av":[],"x":[]},"a0z":{"af":[],"x":[]},"a0w":{"af":[],"x":[]},"Rv":{"af":[],"x":[]},"a0B":{"af":[],"x":[]},"aeS":{"av":[],"x":[]},"a0v":{"af":[],"x":[]},"a0C":{"af":[],"x":[]},"aD7":{"ai":["a0x"]},"bAY":{"jr":[]},"aHg":{"ai":["X4"]},"aD4":{"av":[],"x":[]},"biK":{"av":[],"x":[]},"aD9":{"ai":["a0z"]},"aD6":{"ai":["a0w"]},"aDc":{"ai":["Rv"]},"aDa":{"ai":["a0B"]},"aD5":{"ai":["a0v"]},"aDb":{"ai":["a0C"]},"biL":{"av":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n1"),k:x("Nn()"),o:x("bl<o,o>"),F:x("rU"),g:x("az<jX?>"),x:x("az<~>"),V:x("N<ac>"),O:x("N<u>"),W:x("N<bn>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jX>"),w:x("N<+file,name(mm,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jr>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bn"),A:x("cB<ai<af>>"),n:x("ah<jX>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("it"),e:x("iRl"),af:x("Fx"),U:x("jX"),b:x("cr"),C:x("aG"),aK:x("x4"),ab:x("Gk"),br:x("axn"),v:x("Zv"),N:x("o"),X:x("bq<H>"),Q:x("my"),D:x("dG"),aw:x("b9<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cc<ah<jX>>"),aW:x("cc<dG?>"),aY:x("cc<~>"),cx:x("aeT"),b1:x("bo<ah<jX>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFR"),bG:x("aJ6"),q:x("l7"),B:x("qc<Gk>"),c6:x("qc<ac2>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bn?"),_:x("ah<jX>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jX?"),R:x("aG?"),c:x("Zv?"),d:x("+answerQr,transfer(o,az<ah<jX>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,P2,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aeA?"),bk:x("aFR?"),ag:x("aJ6?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.ba0=new A.ax(C.aB,2,C.r,-1)
D.ce7=new A.a7(C.a5,C.a9,C.w,C.a72,null,null)
D.bbC=new A.p(null,null,null,C.n2,null,D.ce7,C.m)
D.bd6=new A.p(null,null,null,C.n2,null,E.Je,C.m)
D.ait=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajZ=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.al0=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amR=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h4y=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hjJ=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FX,null,null,null,null,null,null,null,null,null)
D.du5=x([D.h4y,C.aj,D.hjJ],y.p)
D.bCj=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.du5,null)
D.hoo=new A.D("Create your organization",null,C.fU,null,null,null,null,null,null,null,null,null)
D.h9d=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FX,null,null,null,null,null,null,null,null,null)
D.dNa=x([D.hoo,C.aj,D.h9d],y.p)
D.bCt=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dNa,null)
D.hko=new A.D("Team Member sign-in",null,C.fU,null,null,null,null,null,null,null,null,null)
D.hde=new A.D("Enter the access code and password from your organization.",null,H.FX,null,null,null,null,null,null,null,null,null)
D.dKB=x([D.hko,C.aj,D.hde],y.p)
D.bCD=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dKB,null)
D.bIV=new A.Q(16,10,16,28)
D.bKm=new A.Q(20,0,20,16)
D.bKT=new A.Q(20,8,20,16)
D.apO=new A.Q(24,22,24,20)
D.a53=new A.a_(63394,"MaterialIcons",!1)
D.at2=new A.a_(63515,"MaterialIcons",!1)
D.bYs=new A.a_(983813,"MaterialIcons",!1)
D.bVz=new A.a_(62867,"MaterialIcons",!1)
D.bZv=new A.ae(D.bVz,44,C.c,null,null,null)
D.c_C=new A.ae(C.k1,null,C.ab,null,null,null)
D.c11=new A.ae(C.jK,18,null,null,null,null)
D.c2V=new A.ae(D.a53,26,C.c,null,null,null)
D.c3x=new A.ae(C.E8,null,null,null,null,null)
D.c48=new A.ae(C.Ee,null,null,null,null,null)
D.c5m=new A.ae(A_.a5e,null,null,null,null,null)
D.c5J=new A.ae(C.i7,16,null,null,null,null)
D.c9s=new A.ae(C.u_,16,null,null,null,null)
D.bZN=new A.ae(C.mE,null,null,null,null,null)
D.cak=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4H=new A.ae(C.Iu,null,null,null,null,null)
D.cap=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c4H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_9=new A.ae(C.Eh,null,null,null,null,null)
D.caA=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.d_R=x([C.fC,C.b8,C.aB],y.O)
D.cg5=new A.a7(C.ax,C.aC,C.w,D.d_R,null,null)
D.d_b=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.TJ=x([C.fC,C.aB],y.O)
D.U1=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nw=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dE4=x([C.nd,C.aB],y.O)
D.eEa={iceServers:0}
D.aP4={urls:0}
D.dR6=new A.bl(D.aP4,["stun:stun.l.google.com:19302"],y.o)
D.dR5=new A.bl(D.aP4,["stun:stun1.l.google.com:19302"],y.o)
D.dig=x([D.dR6,D.dR5],A.as("N<a9<o,o>>"))
D.dQa=new A.bl(D.eEa,[D.dig],A.as("bl<o,@>"))
D.Kp=new B.P2(0,"lanDirect")
D.Vp=new B.P2(1,"cloudStash")
D.e7f=new B.P2(2,"inlineInstant")
D.Vq=new B.P2(3,"webrtcLink")
D.Bd=new B.P2(4,"videoCloud")
D.hjI=new A.D("Receive file",null,C.nH,null,null,null,null,null,null,null,null,null)
D.cPF=x([E.auT,C.aa,D.hjI],y.p)
D.fxo=new A.bZ(C.aJ,C.ba,C.i,C.l,null,C.p,null,0,D.cPF,null)
D.eLO=new A.C(C.cq,D.fxo,null)
D.fVL=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.JJ,null,null,null)
D.h5b=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fVL,null,C.K,null,null,null,null,null,null,null)
D.eKV=new A.C(C.zK,D.h5b,null)
D.bhI=new A.cq(C.z,null,null,D.eKV,null)
D.eS8=new A.cS(0,null,0,28,null,null,D.bhI,null)
D.eSs=new B.ac2(0,"RTCDataChannelConnecting")
D.aUC=new B.ac2(1,"RTCDataChannelOpen")
D.aUD=new B.ac2(3,"RTCDataChannelClosed")
D.eSt=new B.Gl(0,"RTCIceConnectionStateNew")
D.eSu=new B.Gl(1,"RTCIceConnectionStateChecking")
D.eSv=new B.Gl(2,"RTCIceConnectionStateCompleted")
D.eSw=new B.Gl(3,"RTCIceConnectionStateConnected")
D.eSx=new B.Gl(4,"RTCIceConnectionStateCount")
D.eSy=new B.Gl(5,"RTCIceConnectionStateFailed")
D.eSz=new B.Gl(6,"RTCIceConnectionStateDisconnected")
D.aUE=new B.Gl(7,"RTCIceConnectionStateClosed")
D.aUF=new B.Zu(0,"RTCIceGatheringStateNew")
D.eSA=new B.Zu(1,"RTCIceGatheringStateGathering")
D.abN=new B.Zu(2,"RTCIceGatheringStateComplete")
D.abO=new B.Qd(0,"RTCPeerConnectionStateClosed")
D.aUG=new B.Qd(1,"RTCPeerConnectionStateFailed")
D.aUH=new B.Qd(2,"RTCPeerConnectionStateDisconnected")
D.aUI=new B.Qd(3,"RTCPeerConnectionStateNew")
D.aUJ=new B.Qd(4,"RTCPeerConnectionStateConnecting")
D.aUK=new B.Qd(5,"RTCPeerConnectionStateConnected")
D.eSB=new B.Qe(0,"RTCSignalingStateStable")
D.eSC=new B.Qe(1,"RTCSignalingStateHaveLocalOffer")
D.eSD=new B.Qe(2,"RTCSignalingStateHaveRemoteOffer")
D.eSE=new B.Qe(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eSF=new B.Qe(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aUL=new B.Qe(5,"RTCSignalingStateClosed")
D.fCz=new A.aw(160,48)
D.biY=new A.fp(2,null,null,null,null,C.aB,null,null,null,null)
D.fE7=new A.a4(16,16,D.biY,null)
D.h8y=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fFB=new A.b4(D.h8y,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgj=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fFF=new A.b4(D.hgj,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hps=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fFM=new A.b4(D.hps,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h87=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fGb=new A.b4(D.h87,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkA=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aY1=new A.b4(D.hkA,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hm6=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fGF=new A.b4(D.hm6,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hqZ=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fGW=new A.b4(D.hqZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoS=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fH0=new A.b4(D.hoS,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hq8=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fHO=new A.b4(D.hq8,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h6F=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fIl=new A.b4(D.h6F,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hif=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fIG=new A.b4(D.hif,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.haU=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fJc=new A.b4(D.haU,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hr3=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fJg=new A.b4(D.hr3,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h6V=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fJm=new A.b4(D.h6V,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5y=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fJB=new A.b4(D.h5y,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2a=new A.D("NGMY DOC SHARE",null,C.aZu,null,null,null,null,null,null,null,null,null)
D.h3C=new A.D("Show this to sender",null,C.j_,null,null,null,null,null,null,null,null,null)
D.h4G=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h9F=new A.D("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.ha2=new A.D("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hb4=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.hbC=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hev=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hhm=new A.D("Send to their Doc Share",null,C.mW,null,null,null,null,null,null,null,null,null)
D.hhG=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hi1=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hiD=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hiK=new A.D("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hj8=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hmD=new A.D("Share files & videos\nwith a scan.",null,C.aZx,null,null,null,null,null,null,null,null,null)
D.hmX=new A.D("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hV3=new B.a0v(null)
D.afe=new B.aeT(0,"docShare")
D.aff=new B.aeT(1,"gate")
D.Yu=new B.aeT(2,"gateNoIndividual")})();(function staticFields(){$.aS3=null
$.fAO=function(){var x=y.N
return A.S(x,x)}()
$.HA=A.S(y.N,y.D)
$.aj2=A.S(y.N,A.as("mm"))
$.SW=A.S(y.N,y.D)
$.fBy=A.S(y.N,A.as("aeA"))
$.cij=A.S(y.S,A.as("bBm"))
$.hGc=1
$.ixp=null
$.ixo=null
$.inU=null
$.huh=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iRR","hZL",()=>new B.cwD())
x($,"iPK","hyH",()=>C.a.q(A.by(A.by(A.by(A.I7(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["OED/T56rBrC2SeFlSfiKruAFvyk="]=a.current})($__dart_deferred_initializers__);