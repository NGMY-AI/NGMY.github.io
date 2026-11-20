((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={cu5:function cu5(){},
i6y(d){var x=null,w=new B.b7j(d,D.eK_,new A.pV(x,x,y.c6),new A.pV(x,x,y.B))
w.bDF(d)
return w},
b7j:function b7j(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cu0:function cu0(d){this.a=d},
cu1:function cu1(d){this.a=d},
cu2:function cu2(d){this.a=d},
cu_:function cu_(d){this.a=d},
cu3:function cu3(d){this.a=d},
i6z(d,e){var x=y.N
x=new B.b7k(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDG(d,e)
return x},
b7k:function b7k(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cu6:function cu6(d){this.a=d},
cu7:function cu7(d){this.a=d},
cu8:function cu8(d){this.a=d},
cu9:function cu9(d){this.a=d},
cua:function cua(d){this.a=d},
cub:function cub(d){this.a=d},
cuc:function cuc(d){this.a=d},
cud:function cud(d){this.a=d},
hku(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xt.H5(x,"ngmy_doc_share_v1",new B.fCb(),1)},
idf(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.ew(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.vM(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cE.aK(d)
return x}catch(w){return v}return v},
Sx(d,e){return B.isT(d,e)},
isT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQE
x=7
return A.b(o==null?$.aQE=B.hku():o,$async$Sx)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.ml(s,"blobs","readwrite")
C.iN.mj(J.mk(q,"blobs"),r,d)
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
Sw(d){return B.isS(d)},
isS(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQE
x=7
return A.b(o==null?$.aQE=B.hku():o,$async$Sw)
case 7:s=f
r=J.ml(s,"blobs","readonly")
x=8
return A.b(C.iN.xT(J.mk(r,"blobs"),d),$async$Sw)
case 8:q=f
x=9
return A.b(J.oC(r),$async$Sw)
case 9:o=B.idf(q)
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
aiF(d){return B.isR(d)},
isR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQE
x=7
return A.b(p==null?$.aQE=B.hku():p,$async$aiF)
case 7:s=f
r=J.ml(s,"blobs","readwrite")
C.iN.GB(J.mk(r,"blobs"),d)
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
fCb:function fCb(){},
ifL(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bse(w,v))}return u},
hMn(d,e){var x,w={},v=A.aZj("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h1h(w,v,e)
C.xv.zj(v,"change",new B.h1j(w,v,!1))
C.xv.zj(v,"cancel",new B.h1i(w))
$.eY.mK()
v.click()
A.bM(C.amP,new B.h1g(w),y.H)},
h1h:function h1h(d,e,f){this.a=d
this.b=e
this.c=f},
h1j:function h1j(d,e,f){this.a=d
this.b=e
this.c=f},
h1i:function h1i(d){this.a=d},
h1g:function h1g(d){this.a=d},
DW(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DW=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd4()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV_()?3:4
break
case 3:x=5
return A.b(B.hGY(e,d,s,!0,!1,f,g,h,!1,i),$async$DW)
case 5:x=1
break
case 4:x=6
return A.b(B.S9(d,s,f,g,h,i),$async$DW)
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
return A.b(B.Jw(s,d),$async$DW)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fxv(s,d),$async$DW)
case 14:x=12
return A.b(r.hGY(q,p,o,n,m,l,k,j,a1,i),$async$DW)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).cb(A.ea(new B.h1w(s,i,d,f,g,h),!1,null,y.H)),$async$DW)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).cb(A.ea(new B.h1x(s,i,d,f,g,h),!1,null,y.H)),$async$DW)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DW,w)},
S9(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S9=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b22(e),$async$S9)
case 3:u=k
x=4
return A.b(B.arr(d,e,!1),$async$S9)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jw(e,d),$async$S9)
case 7:if(k){v=D.aeh
x=1
break}x=8
return A.b(B.Ww(e),$async$S9)
case 8:v=t?D.XL:D.aei
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b20(d,e)){v=D.aeh
x=1
break}x=11
return A.b(B.Ww(e),$async$S9)
case 11:v=t?D.XL:D.aei
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hff(d,e)){v=D.aeh
x=1
break}x=14
return A.b(B.Ww(e),$async$S9)
case 14:v=D.XL
x=1
break
case 13:v=t?D.XL:D.aei
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
fxv(d,e){var x=0,w=A.j(y.y),v
var $async$fxv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b20(e,d)){v=!1
x=1
break}x=3
return A.b(B.b22(d),$async$fxv)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxv,w)},
hGY(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).cb(A.ea(new B.fES(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hBE(d,e,f,g,h,i,j){return new B.a_O(e,j,d,g,h,i,f,null)},
fGO(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fGO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fGR(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fGO)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGO,w)},
fHi(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fHi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
r=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fHk(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fHi)
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
return A.i($async$fHi,w)},
hkG(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fUe(d,e){var x=0,w=A.j(y.H),v
var $async$fUe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ww(e),$async$fUe)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e7()
case 1:return A.h(v,w)}})
return A.i($async$fUe,w)},
h1w:function h1w(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h1x:function h1x(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adV:function adV(d,e){this.a=d
this.b=e},
fES:function fES(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_O:function a_O(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBT:function aBT(){this.c=this.a=this.d=null},
df_:function df_(d,e){this.a=d
this.b=e},
deX:function deX(d){this.a=d},
deZ:function deZ(d){this.a=d},
deY:function deY(d){this.a=d},
df1:function df1(){},
df0:function df0(d){this.a=d},
aeo:function aeo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEx:function aEx(d,e){this.a=d
this.b=e},
aHL:function aHL(d,e,f){this.a=d
this.b=e
this.c=f},
fGR:function fGR(d,e,f){this.a=d
this.b=e
this.c=f},
fGP:function fGP(d){this.a=d},
fGQ:function fGQ(d,e,f){this.a=d
this.b=e
this.c=f},
fHk:function fHk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fHj:function fHj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cfy(d,e,f,g,h){return B.i1l(d,e,f,g,h)},
i1l(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cfy=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ig(r.dO(d,new B.cfz(s,e,h,g,f,q),y.g),y.l),$async$cfy)
case 3:r=p.aS(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfy,w)},
b1Y(d,e,f,g,h){return B.i1m(d,e,f,g,h)},
i1m(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1Y=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ax_("GET",d)
o=A.hbG()
if(o==null)o=new A.MU(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dc(0,C.Hv),$async$b1Y)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Db(),$async$b1Y)
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
return A.i($async$b1Y,w)},
b1X(d){return B.i1j(d)},
i1j(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vY(d,null).dc(0,C.oK),$async$b1X)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.mf(A.mc(p.e)).cF(0,p.w),null)
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
return A.i($async$b1X,w)},
cfx(d){return B.i1k(d)},
i1k(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cfx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vY(d,null).dc(0,C.qV),$async$cfx)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mf(A.mc(q.e)).cF(0,q.w)
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
return A.i($async$cfx,w)},
cfz:function cfz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jI:function jI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ju(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i1r(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.X(t,u))return B.Ju(C.a.aY(t,u.length))}return null},
i1s(d){var x=B.Ju(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i1n(){var x,w=$.oz(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hh(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8t(d){return B.i1o(d)},
i1o(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f5(d,null,!1,C.bN),$async$a8t)
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
a8u(d,e){return B.i1p(d,e)},
i1p(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8u=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hV(d,e,!1,!1,C.cT,null),$async$a8u)
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
r=B.Ju(s==null?"":s)
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
p=B.Ju(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aF("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cs)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i1n()
x=14
return A.b(B.a8v(m),$async$Cs)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).ab().ag()
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
for(;;)switch(x){case 0:r=B.Ju(d)
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
a8w(d,e,f,g){return B.i1t(d,e,f,g)},
i1t(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8w=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Ju(f)
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
break}if(g.cC(d,0,new B.cfF())>1048576||g.aS(d,new B.cfG())){v=B.Fx(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8H("myCode",d,a0),$async$a8w)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cu(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fx(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b25(u,g.gJ(d),a0),$async$a8w)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oz().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dO(d,new B.cfH(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b1Z(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a8w)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8w,w)},
Fx(d,e,f,g,h){return B.i1q(d,e,f,g,h)},
i1q(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fx=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$Fx)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cH(a6)
k=l.cC(a6,0,new B.cfB())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.T(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oz().aw(9999)
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
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jy(a9,q)
a0=new A.Ln(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fx)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f1().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nC(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.ac6(a1.a,a4,"media",a1.d,a2).xQ(m,n,new A.EM(!0,q.c)),$async$Fx)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fx)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTj(r),$async$Fx)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dO(a6,new B.cfC(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b1Z(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$Fx)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTj(r),$async$Fx)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fx,w)},
b1Z(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8t(t),$async$b1Z)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cfA(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8u(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1Z,w)},
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
q=J.aS(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b2_(k,a0),$async$Ov)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b24(h),$async$Ov)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WD(g,a0),$async$Ov)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cfD(),q),n)
d=A.B(new A.X(r,new B.cfE(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cS(d,0,A.dx(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a8u("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Ov)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ov,w)},
b2_(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cu(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aS(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
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
break}i=B.ix0(k,j)
C.d.u(s,i)
x=5
return A.b(B.DU(l,m,"Received via My Code",t,e,i),$async$b2_)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTj(s),$async$b2_)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2_,w)},
cfF:function cfF(){},
cfG:function cfG(){},
cfH:function cfH(){},
cfB:function cfB(){},
cfC:function cfC(){},
cfA:function cfA(){},
cfD:function cfD(){},
cfE:function cfE(){},
h1t(d,e){var x=0,w=A.j(y.H)
var $async$h1t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).cb(A.ea(new B.h1u(e),!1,null,y.H)),$async$h1t)
case 2:return A.h(null,w)}})
return A.i($async$h1t,w)},
bHw(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bHw=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cu(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).cb(A.ea(new B.h1v(g,e,f),!1,null,y.y)),$async$bHw)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHw,w)},
h1u:function h1u(d){this.a=d},
h1v:function h1v(d,e,f){this.a=d
this.b=e
this.c=f},
Wt:function Wt(d,e){this.c=d
this.a=e},
aFU:function aFU(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e12:function e12(d,e){this.a=d
this.b=e},
Wx:function Wx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFX:function aFX(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d){this.a=d},
e2d:function e2d(d){this.a=d},
e2a:function e2a(d,e){this.a=d
this.b=e},
e2e:function e2e(d){this.a=d},
e2f:function e2f(d){this.a=d},
e2g:function e2g(d,e){this.a=d
this.b=e},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2j:function e2j(d){this.a=d},
e2m:function e2m(){},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d,e){this.a=d
this.b=e},
bml:function bml(){},
Wu:function Wu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFV:function aFV(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e13:function e13(d){this.a=d},
e14:function e14(d){this.a=d},
hfg(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i1v(d){var x=d.l3
if(x>=0)return x
return 4.99},
i1u(d){var x=d.lM,w=y.N
w=x.iZ(x,new B.cfJ(),w,w)
return w},
hwz(d){var x=d.kH,w=y.N
w=x.iZ(x,new B.cfK(),w,w)
return w},
b22(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b22=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b22)
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
return A.i($async$b22,w)},
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
Ww(d){var x=0,w=A.j(y.H),v,u
var $async$Ww=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Ww)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Ww)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Ww,w)},
hff(d,e){var x,w,v
if(B.i1v(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i1u(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.cc(new A.V(Date.now(),0,!1))},
b20(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hwz(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.cc(new A.V(Date.now(),0,!1))},
hwA(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hwz(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.cc(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bN(A.du(f,0,0,0,0,0).a).ab().ag())
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
r=A.er(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
break}u=B.hfg(d)
if(u<=0){v=!1
x=1
break}if(B.hff(d,e)){v=!1
x=1
break}x=3
return A.b(B.ars(e),$async$arr)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arr,w)},
b21(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b21=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jw(e,d),$async$b21)
case 3:if(g){v=-1
x=1
break}u=B.hfg(d)
if(u<=0){v=-1
x=1
break}if(B.hff(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ars(e),$async$b21)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b21,w)},
cfM(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jw(e,d),$async$cfM)
case 3:if(h){v=!1
x=1
break}v=B.arr(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfM,w)},
cfL(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cfL=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd4()
x=3
return A.b(B.cfM(d,u,i.gV_()),$async$cfL)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfL,w)},
a8x(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8x=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd4()
if(i.gV_()){v=!0
x=1
break}if(B.b20(d,u)){v=!0
x=1
break}x=5
return A.b(A.lD(u,C.V_),$async$a8x)
case 5:x=k?3:4
break
case 3:B.hwA(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8x)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lk(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V_,"Doc Share for Organizations"),$async$a8x)
case 7:if(!k){v=!1
x=1
break}B.hwA(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8x)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8x,w)},
cfJ:function cfJ(){},
cfK:function cfK(){},
h2t(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h2t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h2t)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.ftK.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hX([r],e.c))
s.toString
$.ftK.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2t,w)},
izc(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.ftK.bq($.ftK,new B.h2v(d))},
h2v:function h2v(d){this.a=d},
fvp(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fvp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hX([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jy,null,y.H),$async$fvp)
case 3:C.BQ.ft(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fvp,w)},
ahA(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fuq.n(0,d,new B.adC(A.bs(e,!0,v)))
x=3
return A.b(A.az(),$async$ahA)
case 3:x=2
return A.b(h.aF("String",d+"_manifest",C.V.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahA)
case 2:return A.h(null,w)}})
return A.i($async$ahA,w)},
ahu(d){return B.ihF(d)},
ihF(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fuq.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ahu)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cu(s)){v=null
x=1
break}o=J.b8(s,new B.fzb(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adC(r)
$.fuq.n(0,d,p)
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
break}u=new Uint8Array(A.cb(e))
$.Hh.n(0,d,u)
x=3
return A.b(B.Sx(d,u),$async$S_)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S_,w)},
aQZ(d){return B.ihD(d)},
ihD(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hh.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sw(d),$async$aQZ)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.Hh.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQZ)
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
return A.b(J.fQ(s,d),$async$aQZ)
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
return A.i($async$aQZ,w)},
idH(d){if(d==null)return A.f4(null,y.K)
if(y.J.b(d))return A.f4(new Uint8Array(A.cb(J.ew(d,0,null))),y.K)
if(y.D.b(d))return A.f4(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f4(new Uint8Array(A.cb(A.vM(d,0,null))),y.K)
if(y.I.b(d))return A.f4(new Uint8Array(A.cb(d)),y.K)
return A.f4(null,y.K)},
a3l(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.c9(u,y.aW)
s=y.aK
A.fE(r,"loadend",new B.fF3(r,t),!1,s)
A.fE(r,"error",new B.fF4(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.ON,new B.fF5())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3l,w)},
aRj(d,e,f){return B.ik1(d,e,f)},
ik1(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRj=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3l(i),$async$aRj)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sx(o,p),$async$aRj)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahA(k,j,s),$async$aRj)
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
return A.i($async$aRj,w)},
aRi(d,e,f){return B.ik0(d,e,f)},
ik0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRi=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRj(d,e,f),$async$aRi)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3l(f),$async$aRi)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hh.n(0,s,r)
$.Si.n(0,s,r)
x=11
return A.b(B.S_(s,r),$async$aRi)
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
return A.i($async$aRi,w)},
Ct(d,e,f,g,h,i){return B.i1E(d,e,f,g,h,i)},
i1E(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ct=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cR.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jI(p,q,o,n,new A.V(Date.now(),0,!1).ab().ag(),a0,f,B.b28(),null)
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
return A.b(B.Hr(e,j),$async$Ct)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ct,w)},
Wy(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wy=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bm(d),$async$Wy)
case 3:t=a1
s=e.length,r=J.cH(t),q=0
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
k=B.hwC(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).ab().ag()
i=new B.jI(m,n,k,l,j,"From folder",null,B.b28(),null)
$.ahZ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3l(o),$async$Wy)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.Hh.n(0,h,g)
$.Si.n(0,h,g)
B.S_(h,g)
x=9
break
case 10:x=11
return A.b(B.aRi(d,m,o),$async$Wy)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hr(d,t),$async$Wy)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wy,w)},
hfk(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hfk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hwC(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jx(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ct(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfk,w)},
Jx(d,e,f,g,h,i){return B.i1D(d,e,f,g,h,i)},
i1D(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jx=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cR.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ln(A.dx(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jx)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cu(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.T7(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kS(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.Sx(k,l),$async$Jx)
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
return A.b(j.a1(0),$async$Jx)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.Sx(k,new Uint8Array(A.cb(n))),$async$Jx)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahA(r,q,g),$async$Jx)
case 16:f=new B.jI(i,a1,a0,g,new A.V(Date.now(),0,!1).ab().ag(),a2,null,B.b28(),null)
x=17
return A.b(B.Bm(d),$async$Jx)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hr(d,e),$async$Jx)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jx,w)},
WA(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WA=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahZ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3l(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahu(s),$async$WA)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sw(u[o]),$async$WA)
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
if(i==null)i=$.Hh.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rZ(d,e),$async$WA)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.Si.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vM(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WA,w)},
hwC(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rZ(d,e){return B.i1F(d,e)},
i1F(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rZ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Si.h(0,f)
if(e==null)e=$.Hh.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahZ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3l(s),$async$rZ)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.Hh.n(0,f,r)
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
case 15:r=n.a85()
if(!C.aI.gau(r)){$.Hh.n(0,f,r)
$.Si.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQZ(f),$async$rZ)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.Si.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WA(a0,a1,0,g),$async$rZ)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cb(i))
$.Hh.n(0,f,h)
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
i1I(d){var x,w,v=$.ahZ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i1J(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hX([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i1G(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arz(d,e,f,g,h){return B.i1H(d,e,f,g,h)},
i1H(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
return A.b(B.a3l(s),$async$arz)
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
n=$.f1().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iF(d).xQ(h,r,new A.EM(!0,e.c)),$async$arz)
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
hwE(d,e,f,g,h){var x,w,v,u,t=$.hwD
$.hwD=t+1
x=Date.now()
w=""+1000*x+"_"+C.cR.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfX.n(0,t,new B.bzi(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adx(u)))
return t},
hfl(d){var x=0,w=A.j(y.H)
var $async$hfl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hfl,w)},
Jy(d,e){var $async$Jy=A.e(function(a0,a1){switch(a0){case 2:s=v
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
return A.qD(B.WA(d,e,p,o<q?o:q),$async$Jy,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qD(A.GP(n),$async$Jy,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qD(B.ahu("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jy,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qD(B.Sw(h[l]),$async$Jy,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qD(A.GP(k),$async$Jy,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qD(B.rZ(d,e),$async$Jy,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qD(A.GP(A.vM(j,p,o<i?o:i)),$async$Jy,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qD(null,0,w)
case 2:return A.qD(t.at(-1),1,w)}})
var x=0,w=A.hFI($async$Jy,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hHJ(w)},
b2a(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfX.h(0,d)
if(t==null||J.cu(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6n(),$async$b2a)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2a,w)},
Wz(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfX.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6n(),$async$Wz)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahA(r.c,u,r.z),$async$Wz)
case 4:t=new B.jI(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b28(),null)
u=r.a
x=5
return A.b(B.Bm(u),$async$Wz)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hr(u,s),$async$Wz)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wz,w)},
a8E(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfX.W(0,d)
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
cfZ(d,e,f){var x=0,w=A.j(y.H)
var $async$cfZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEl(d,e,f),$async$cfZ)
case 2:return A.h(null,w)}})
return A.i($async$cfZ,w)},
cg_(d,e,f){var x=0,w=A.j(y.H)
var $async$cg_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEm(d,e,f),$async$cg_)
case 2:return A.h(null,w)}})
return A.i($async$cg_,w)},
Fy(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bm(d),$async$Fy)
case 2:p=g
J.n2(p,new B.cfY(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hh.W(0,v)
$.ahZ.W(0,e)
x=3
return A.b(B.ahu(v),$async$Fy)
case 3:u=g
$.fuq.W(0,v)
x=4
return A.b(A.az(),$async$Fy)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fy)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fy)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiF(s[q]),$async$Fy)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiF(v),$async$Fy)
case 13:x=14
return A.b(B.Hr(d,p),$async$Fy)
case 14:return A.h(null,w)}})
return A.i($async$Fy,w)},
b29(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b29=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rZ(d,e),$async$b29)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fvp(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b29,w)},
Bm(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bm)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fF6(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bm,w)},
Hr(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hr)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fJl(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aF("String","ngmy_doc_share_index_v1_"+u,C.V.av(t,null)),$async$Hr)
case 3:return A.h(null,w)}})
return A.i($async$Hr,w)},
bEl(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bm(d),$async$bEl)
case 3:u=h
t=J.cH(u)
s=t.bk(u,new B.fDf(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aH0(f))
x=4
return A.b(B.Hr(d,u),$async$bEl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEl,w)},
bEm(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bm(d),$async$bEm)
case 3:u=h
t=J.cH(u)
s=t.bk(u,new B.fDg(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRb(f))
x=4
return A.b(B.Hr(d,u),$async$bEm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEm,w)},
adC:function adC(d){this.a=d},
fzb:function fzb(){},
fF3:function fF3(d,e){this.a=d
this.b=e},
fF4:function fF4(d){this.a=d},
fF5:function fF5(){},
cfY:function cfY(d){this.a=d},
bzi:function bzi(d,e,f,g,h,i,j,k,l){var _=this
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
fF6:function fF6(){},
fJl:function fJl(){},
fDf:function fDf(d){this.a=d},
fDg:function fDg(d){this.a=d},
a8F(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aS(d,new B.cg2())?3:4
break
case 3:x=5
return A.b(B.b2b(d,e),$async$a8F)
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
return A.b(B.b26(s),$async$a8F)
case 10:case 9:if(g){v=new A.Rl(1,D.UD,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WB(d,e),$async$a8F)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WG(!0,!0,d,e),$async$a8F)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ox(d,D.AS,e,t)
v=new A.Rl(p,D.AS,t)
x=1
break}v=B.cg1(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
WB(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8H(null,d,e),$async$WB)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cu(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b25(p,d.length,e),$async$WB)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cg_(e,C.d.gH(d).a,r.b),$async$WB)
case 7:case 6:q=r.a
x=8
return A.b(B.Ox(d,D.UD,e,q),$async$WB)
case 8:v=new A.Rl(d.length,D.UD,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WB,w)},
WC(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.X(d.c,"video/")||d.mR(D.nh)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8G(d,e),$async$WC)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfV(s,d,e,t),$async$WC)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b26(t),$async$WC)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rZ(e,d),$async$WC)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WB(A.a([d],y.r),e),$async$WC)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WC,w)},
WE(){var x=0,w=A.j(y.H)
var $async$WE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hfe(),$async$WE)
case 2:x=3
return A.b(B.aTF(),$async$WE)
case 3:return A.h(null,w)}})
return A.i($async$WE,w)},
a8G(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b28()
x=3
return A.b(B.cfZ(e,d.a,u),$async$a8G)
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
t=e===D.UD&&C.a.X(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
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
return A.b(B.cfU(o,p,u,f),$async$Ox)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfV(o,p,f,t),$async$Ox)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfT(o,u,p,f),$async$Ox)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ox,w)},
b2b(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cg0(e,d),$async$b2b)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WG(!1,!0,d,e),$async$b2b)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rl(u.a,D.AS,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2b,w)},
cg0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cg0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WA(d,s,0,1),$async$cg0)
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
return A.i($async$cg0,w)},
cg1(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cg1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8H(null,d,e),$async$cg1)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hwB(u)
if(t.length>800){v=null
x=1
break}v=new A.Rl(d.length,D.dZZ,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg1,w)},
arA(d,e,f){return B.i1M(d,e,f)},
i1M(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arA=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d6(g,"\ufeff"))g=J.n3(g,1)
x=B.hfj(g)?3:4
break
case 3:x=5
return A.b(B.cfW(g),$async$arA)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d6(g,"NGMYDOCSYNC4|")){s=C.a.i(J.n3(g,13))
try{k=B.Fz(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d6(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.n3(g,13))
u=9
x=12
return A.b(B.b24(q),$async$arA)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WD(p,a0)
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
case 11:case 7:if(J.d6(g,"NGMYDOCSYNC0|"))try{n=B.hfi(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WD(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d6(g,"N2|")){v=B.Jz(C.a.i(J.n3(g,3)),d,a0)
x=1
break}if(J.d6(g,"NGMYDOCSYNC2|")){v=B.Jz(C.a.i(J.n3(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.az(k,0,k.length-1)
else h=k
v=B.Jz(h,d,a0)
x=1
break}if(J.eD(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WD(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arA,w)},
Jz(d,e,f){return B.i1K(d,e,f)},
i1K(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jz=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
r=A.cF(A.v(s)+"/manifest.json",0,null)
q=A.cF(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1X(r),$async$Jz)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1X(A.cF(s,0,null)),$async$Jz)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cu(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cfy(o,r,a1,n,a2),$async$Jz)
case 11:m=a4
x=J.cu(m)?12:13
break
case 12:x=14
return A.b(B.cfx(q),$async$Jz)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WD(l,a2),$async$Jz)
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
return A.i($async$Jz,w)},
a8H(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aS(e),t=y.N,s=y.z
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
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).ab().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8H,w)},
WD(d,e){return B.i1L(d,e)},
i1L(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WD=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.V.aP(0,a2,null)
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
e=J.aS(r)
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
return A.b(B.Ct(i,a3,d,k,l,o),$async$WD)
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
return A.i($async$WD,w)},
Ow:function Ow(d,e){this.a=d
this.b=e},
cg2:function cg2(){},
a2V(d){var x=A.O(d).ax.a===C.I,w=x?D.ak0:D.ahu,v=x?D.alO:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aiZ:C.bn
return new A.aJ2([w,s,v,u,t,x?C.fy:C.bQ])},
hNo(d,e){var x=e?C.v.j(0.72):C.b6
return A.ce(null,x,!0,null,new B.h6L(e),d,null,!0,!0,y.N)},
cfI(d,e,f,g,h,i,j,k,l){return new B.Wv(e,l,d,f,k,j,g,h,i,null)},
a_Q(d,e,f,g,h,i,j){return new B.bgR(g,h,j,e,i,d,f,null)},
h6L:function h6L(d){this.a=d},
a_N:function a_N(d,e){this.c=d
this.a=e},
aBS:function aBS(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
deW:function deW(d){this.a=d},
deU:function deU(d){this.a=d},
deV:function deV(d){this.a=d},
byV:function byV(){},
Wv:function Wv(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFW:function aFW(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e29:function e29(d){this.a=d},
e1x:function e1x(d,e){this.a=d
this.b=e},
e1y:function e1y(d,e){this.a=d
this.b=e},
e16:function e16(d,e,f){this.a=d
this.b=e
this.c=f},
e15:function e15(d){this.a=d},
e17:function e17(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e,f){this.a=d
this.b=e
this.c=f},
e1b:function e1b(d){this.a=d},
e1Y:function e1Y(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d){this.a=d},
e1u:function e1u(d,e,f){this.a=d
this.b=e
this.c=f},
e1r:function e1r(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e1a:function e1a(d){this.a=d},
e1C:function e1C(d){this.a=d},
e1B:function e1B(){},
e1g:function e1g(d){this.a=d},
e1V:function e1V(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e){this.a=d
this.b=e},
e1X:function e1X(d,e){this.a=d
this.b=e},
e1s:function e1s(d,e){this.a=d
this.b=e},
e1t:function e1t(d,e){this.a=d
this.b=e},
e1O:function e1O(d,e){this.a=d
this.b=e},
e1K:function e1K(d){this.a=d},
e1J:function e1J(d){this.a=d},
e1L:function e1L(){},
e1M:function e1M(){},
e1N:function e1N(d,e){this.a=d
this.b=e},
e1P:function e1P(){},
e1Q:function e1Q(d){this.a=d},
e1I:function e1I(d,e){this.a=d
this.b=e},
e1D:function e1D(d){this.a=d},
e1E:function e1E(d){this.a=d},
e1F:function e1F(d){this.a=d},
e1G:function e1G(d){this.a=d},
e1H:function e1H(d){this.a=d},
e1d:function e1d(){},
e1e:function e1e(d){this.a=d},
e1f:function e1f(d,e){this.a=d
this.b=e},
e19:function e19(d,e){this.a=d
this.b=e},
e18:function e18(d,e,f){this.a=d
this.b=e
this.c=f},
e1v:function e1v(d){this.a=d},
e1w:function e1w(d,e,f){this.a=d
this.b=e
this.c=f},
e1p:function e1p(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
e1i:function e1i(d,e,f){this.a=d
this.b=e
this.c=f},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d){this.a=d},
e1o:function e1o(){},
e1q:function e1q(d,e){this.a=d
this.b=e},
e1j:function e1j(d){this.a=d},
e1h:function e1h(d,e,f){this.a=d
this.b=e
this.c=f},
e1k:function e1k(){},
e1A:function e1A(d){this.a=d},
e1z:function e1z(d,e){this.a=d
this.b=e},
e1U:function e1U(d,e){this.a=d
this.b=e},
e1R:function e1R(d){this.a=d},
e1S:function e1S(d,e){this.a=d
this.b=e},
e1T:function e1T(d){this.a=d},
e26:function e26(d){this.a=d},
e24:function e24(d){this.a=d},
e25:function e25(d){this.a=d},
e27:function e27(){},
e28:function e28(d,e){this.a=d
this.b=e},
e20:function e20(d,e){this.a=d
this.b=e},
e21:function e21(d,e,f){this.a=d
this.b=e
this.c=f},
e2_:function e2_(d,e,f){this.a=d
this.b=e
this.c=f},
e22:function e22(d,e){this.a=d
this.b=e},
e23:function e23(d,e){this.a=d
this.b=e},
aBP:function aBP(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgQ:function bgQ(d,e,f){this.c=d
this.d=e
this.a=f},
deS:function deS(){},
deT:function deT(){},
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
dff:function dff(){},
dfe:function dfe(d){this.a=d},
a_P:function a_P(d,e,f){this.c=d
this.d=e
this.a=f},
aBU:function aBU(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfb:function dfb(d){this.a=d},
dfc:function dfc(d,e,f){this.a=d
this.b=e
this.c=f},
dfd:function dfd(d,e){this.a=d
this.b=e},
df9:function df9(d,e){this.a=d
this.b=e},
df7:function df7(d){this.a=d},
df5:function df5(d){this.a=d},
df2:function df2(d){this.a=d},
df8:function df8(d){this.a=d},
df4:function df4(d){this.a=d},
dfa:function dfa(d){this.a=d},
df6:function df6(d){this.a=d},
df3:function df3(d){this.a=d},
a_M:function a_M(d,e,f){this.c=d
this.d=e
this.a=f},
aBR:function aBR(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
deP:function deP(d){this.a=d},
deO:function deO(d,e){this.a=d
this.b=e},
deQ:function deQ(d){this.a=d},
deN:function deN(d,e){this.a=d
this.b=e},
deR:function deR(d){this.a=d},
deM:function deM(d,e){this.a=d
this.b=e},
deI:function deI(d){this.a=d},
deJ:function deJ(d){this.a=d},
deK:function deK(d,e){this.a=d
this.b=e},
deL:function deL(d){this.a=d},
QV:function QV(d,e,f){this.c=d
this.d=e
this.a=f},
aBX:function aBX(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dfs:function dfs(d){this.a=d},
dft:function dft(d){this.a=d},
dfu:function dfu(d){this.a=d},
dfv:function dfv(d){this.a=d},
dfw:function dfw(d,e){this.a=d
this.b=e},
dfx:function dfx(d){this.a=d},
dfz:function dfz(d){this.a=d},
dfy:function dfy(d){this.a=d},
a_R:function a_R(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBV:function aBV(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dfo:function dfo(d,e){this.a=d
this.b=e},
dfp:function dfp(d,e){this.a=d
this.b=e},
dfg:function dfg(d,e,f){this.a=d
this.b=e
this.c=f},
dfh:function dfh(d){this.a=d},
dfi:function dfi(){},
dfn:function dfn(){},
dfj:function dfj(d,e){this.a=d
this.b=e},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfl:function dfl(d,e){this.a=d
this.b=e},
dfm:function dfm(d,e){this.a=d
this.b=e},
adU:function adU(d,e){this.c=d
this.a=e},
deH:function deH(d){this.a=d},
a_L:function a_L(d){this.a=d},
aBQ:function aBQ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_S:function a_S(d,e){this.c=d
this.a=e},
aBW:function aBW(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dfr:function dfr(d){this.a=d},
dfq:function dfq(d){this.a=d},
bgR:function bgR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i1N(){var x,w=$.oz(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hh(v)},
Oy(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Oy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$Oy)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Oy)
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
a8I(d){return B.i1O(d)},
i1O(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8I)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hV("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cT,null),$async$a8I)
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
WF(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oy(),$async$WF)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dG(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a8I(s),$async$WF)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WF,w)},
WG(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WG=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cc(),$async$WG)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bs(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.cg4(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i1N()
t=A.T(u).k("N<1,aa<p,aK>>")
r=A.B(new A.N(u,new B.cg5(s),t),t.k("aj.E"))
x=6
return A.b(B.Oy(),$async$WG)
case 6:q=i
J.aJ(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a8I(q),$async$WG)
case 7:x=8
return A.b(B.a8J(r,u,g,s),$async$WG)
case 8:v=new A.bsL(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WG,w)},
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
cg6(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cg6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Oy(),$async$cg6)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg6,w)},
a8J(d,e,f,g){return B.i1P(d,e,f,g)},
i1P(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8J=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arz("media",r,new B.cg3(s,e,g),f,q),$async$a8J)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WF(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8J)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WF(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a8J)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WF(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8J)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8J,w)},
Fz(d,e,f){return B.i1Q(d,e,f)},
i1Q(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fz=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.X(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$Fz)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arB(b3),$async$Fz)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.iY,null,g),$async$Fz)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arB(b3),$async$Fz)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Oy(),$async$Fz)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
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
a1=J.a5(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a5(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f1().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nC(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.ac6(a8.a,b0,"media",a8.d,a9).Dw(m)
k=A.cF(l,0,null)
x=17
return A.b(B.b1Y(k,n,o,s,b7),$async$Fz)
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
a2=$.f1().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nC(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.ac6(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fz)
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
a0=A.dG(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8I(e),$async$Fz)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fz,w)},
cg4:function cg4(){},
cg5:function cg5(d){this.a=d},
cg3:function cg3(d,e,f){this.a=d
this.b=e
this.c=f},
aTF(){var x=0,w=A.j(y.H),v,u
var $async$aTF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.id_=null
v=y.H
u=A.dM(null,v)
x=2
return A.b(u,$async$aTF)
case 2:u=A.dM(null,v)
x=3
return A.b(u,$async$aTF)
case 3:u=$.hkS
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dM(u,v),$async$aTF)
case 4:$.hkS=$.ilP=$.ilQ=null
return A.h(null,w)}})
return A.i($async$aTF,w)},
fIX(d){var x=0,w=A.j(y.H),v,u
var $async$fIX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaT){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fIY(new A.c9(u,y.aY))
x=3
return A.b(u.ix(0,C.ha,new B.fIZ()),$async$fIX)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fIX,w)},
ilN(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i1x(x):x},
hkW(d){var x=0,w=A.j(y.T),v,u,t
var $async$hkW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.X(u,"WR")){v=B.arD(u)
x=1
break}v=B.hfi(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hkW,w)},
hkV(d){var x=0,w=A.j(y.T),v,u,t
var $async$hkV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.X(u,"WR")){v=B.arE(u)
x=1
break}v=B.hfi(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hkV,w)},
h2c(d){var x=0,w=A.j(y.T),v
var $async$h2c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arE(d),$async$h2c)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2c,w)},
bFi(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hkV(d),$async$bFi)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFi,w)},
fwc(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fwc=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wz(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Ct(d.a85(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwc,w)},
Ht(d,e,f){return B.io7(d,e,f)},
io7(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ht=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hkW(a1),$async$Ht)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
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
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.X(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.X(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hPp().aHh(D.dM5,null),$async$Ht)
case 4:l=d.hkS=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adx(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fJy(f,k,new B.fJz(f,a2,k,j,a0,p),a2,j,a0,p,new A.c9(t,y.ch))
x=5
return A.b(l.a9r(0,new B.YS(r,"offer")),$async$Ht)
case 5:d=l
x=7
return A.b(l.anb(0),$async$Ht)
case 7:x=6
return A.b(d.a9j(0,a4),$async$Ht)
case 6:x=8
return A.b(B.fIX(l),$async$Ht)
case 8:x=9
return A.b(l.arz(),$async$Ht)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ilN(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arF(m,h),$async$Ht)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hwB(h)
case 11:v=new A.brZ(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ht,w)},
fIY:function fIY(d){this.a=d},
fIZ:function fIZ(){},
fJz:function fJz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJy:function fJy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fJx:function fJx(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iqc(d){switch(d){case"new":return D.eK0
case"checking":return D.eK1
case"connected":return D.eK3
case"completed":return D.eK2
case"failed":return D.eK5
case"disconnected":return D.eK6
case"closed":return D.aT2
case"count":return D.eK4}return D.aT2},
iqd(d){switch(d){case"new":return D.aT3
case"gathering":return D.eK7
case"complete":return D.aaT}return D.aT3},
iAL(d){switch(d){case"stable":return D.eK8
case"have-local-offer":return D.eK9
case"have-local-pranswer":return D.eKb
case"have-remote-offer":return D.eKa
case"have-remote-pranswer":return D.eKc
case"closed":return D.aT9}return D.aT9},
iyU(d){switch(d){case"new":return D.aT6
case"connecting":return D.aT7
case"connected":return D.aT8
case"closed":return D.aaU
case"disconnected":return D.aT5
case"failed":return D.aT4}return D.aaU},
ab3:function ab3(d,e){this.a=d
this.b=e},
PD:function PD(d,e){this.a=d
this.b=e},
YR:function YR(d,e){this.a=d
this.b=e},
PC:function PC(d,e){this.a=d
this.b=e},
G3:function G3(d,e){this.a=d
this.b=e},
cu4:function cu4(){},
hh5(d){var x=new B.G2()
x.a=d
x.b=!0
return x},
G2:function G2(){this.b=this.a=$},
ab2:function ab2(){},
awc:function awc(){},
YS:function YS(d,e){this.a=d
this.b=e},
hfe(){var x=0,w=A.j(y.H)
var $async$hfe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hfe,w)},
hfh(d,e,f){var x=0,w=A.j(y.T),v
var $async$hfh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.X(e.c,"video/")||e.mR(D.nh))){v=null
x=1
break}v=B.h2t(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hfh,w)},
hwB(d){var x,w=C.agV.a66(C.dZ.aK(d),null)
if(w.length===0){x=C.dZ.aK(d)
return C.cM.gco().aK(x)}return C.cM.gco().aK(w)},
i1w(d){var x,w,v=C.cE.aK(d)
try{x=C.cd.cF(0,C.agU.bhm(v,!1))
return x}catch(w){x=C.cd.cF(0,v)
return x}},
hfi(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.X(t,s))return B.i1w(C.a.aY(t,s.length))
w=e+"|"
if(C.a.X(t,w)){x=C.a.aY(t,w.length)
try{v=C.cd.cF(0,C.cE.aK(x))
return v}catch(u){return x}}return null},
i1x(d){var x,w,v,u,t,s=A.a([],y.s)
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
i1y(){var x,w=$.oz(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hh(v)},
b23(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b23=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b23)
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
return A.i($async$b23,w)},
cfN(d,e){return B.i1z(d,e)},
i1z(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hV("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cT,null),$async$cfN)
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
return A.i($async$cfN,w)},
b26(d){var x=0,w=A.j(y.y),v,u,t
var $async$b26=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b23(d),$async$b26)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b26,w)},
b25(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b25=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i1y()
r=C.a.i(f)
t=C.dZ.aK(s)
x=3
return A.b(B.cfN(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b25)
case 3:if(!h){v=null
x=1
break}v=new A.a1U("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b25,w)},
b24(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b24=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b23(o),$async$b24)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cd.cF(0,C.cE.aK(u))
if(J.j4(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b24,w)},
cfO(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cfO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bGh("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cT),$async$cfO)
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
return A.i($async$cfO,w)},
b27(d){var x=0,w=A.j(y.h),v,u,t
var $async$b27=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jv(),$async$b27)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b27,w)},
arw(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arw)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b27(s)
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
return A.b(A.cc(),$async$a8A)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jv(),$async$a8A)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dt(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.C))
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
return A.b(A.cc(),$async$a8B)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jv(),$async$a8B)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
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
return A.b(A.cc(),$async$a8C)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jv(),$async$a8C)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b20(d,J.k(s==null?"":s))
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
return A.b(r.aF("String","ngmy_doc_share_school_session_"+s,C.V.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a8C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8C,w)},
cfP(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfP)
case 7:s=f
p=A.v(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
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
return A.i($async$cfP,w)},
Jw(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfP(d),$async$Jw)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b27(t),$async$Jw)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arv(d),$async$Jw)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b20(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arv(d),$async$Jw)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jw,w)},
arv(d){var x=0,w=A.j(y.H)
var $async$arv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arv)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arv)
case 2:return A.h(null,w)}})
return A.i($async$arv,w)},
b28(){var x,w=$.oz(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hh(v)},
a8D(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hfj(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfS(d){return B.i1B(d)},
i1B(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8D(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f5("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfS)
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
return A.i($async$cfS,w)},
ary(d,e){return B.i1C(d,e)},
i1C(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ary=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8D(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hV("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cT,null),$async$ary)
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
cfU(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfU=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8D(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ary(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cfU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfU,w)},
cfT(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8D(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ary(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cfT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfT,w)},
cfV(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8D(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ary(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfV,w)},
cfW(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hfj(d)){v=null
x=1
break}x=3
return A.b(B.cfS(d),$async$cfW)
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
return A.i($async$cfW,w)},
a8K(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8K)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f5("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8K)
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
arC(d){return B.i1R(d)},
i1R(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$arC)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hV("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cT,null),$async$arC)
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
if(J.ad(j)===0||!J.d6(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arD)
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
p=C.cd.cF(0,C.cE.aK(q))
if(J.j4(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dG(A.a1(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).ab().ag())
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
return A.b(A.cc(),$async$arF)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8K(),$async$arF)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dG(A.a1(s,r,q),r,q)
r=C.dZ.aK(C.a.i(e))
q.n(0,"answer",C.cM.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).ab().ag())
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
return A.b(A.cc(),$async$arE)
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
break}try{r=C.cd.cF(0,C.cE.aK(u))
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
return A.b(r.hk(C.ho),$async$aqu)
case 7:q=g
o=q
o=o==null?null:J.eR(J.uO(o))
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
ix0(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
h0m(d){return B.ix2(d)},
ix2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h0m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f1().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iF("media").LQ(d,3600),$async$h0m)
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
return A.i($async$h0m,w)},
DU(d,e,f,g,h,i){var x=null
return B.ix_(d,e,f,g,h,i)},
ix_(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DU=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hwE(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hfl(r),$async$DU)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h0m(o),$async$DU)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8E(r),$async$DU)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWL)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MU(A.a([],g))
x=15
return A.b(d.f9(0,A.ax_("GET",A.cF(n,0,null))).dc(0,C.Hv),$async$DU)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8E(r),$async$DU)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ln(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DU)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2a(r,k),$async$DU)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DU)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wz(r)
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
return A.b(B.a8E(r),$async$DU)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DU,w)},
aTj(d){return B.ix1(d)},
ix1(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f1().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iF("media").W(0,d),$async$aTj)
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
return A.i($async$aTj,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[98]
F=c[120]
B=a.updateHolder(c[17],B)
D=c[119]
H=c[83]
G=c[94]
I=c[38]
K=c[113]
L=c[40]
B.cu5.prototype={
aHh(d,e){return this.cSG(d,e)},
cSG(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dG(r,s,t)
t.u(0,d)
u=new q(A.kq(A.cv(t)))
t=J.k(u)
v=B.i6z(C.cM.gco().aK(new A.de(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHh,w)}}
B.b7j.prototype={
bDF(d){var x=this,w=x.w
w.onclose=A.hy(new B.cu0(x))
w.onopen=A.hy(new B.cu1(x))
w.onmessage=A.hy(new B.cu2(x))
w.onbufferedamountlow=A.hy(new B.cu3(x))},
gd2(d){return this.x},
ajp(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G2()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hh5(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ajp)
case 8:v=t.hh5(s.apD(f,0,null))
x=1
break
case 7:case 4:v=B.hh5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajp,w)}}
B.b7k.prototype={
bDG(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hy(new B.cu6(x)))
w.addEventListener("icecandidate",A.hy(new B.cu7(x)))
w.addEventListener("iceconnectionstatechange",A.hy(new B.cu8(x)))
w.onicegatheringstatechange=A.hy(new B.cu9(x))
w.addEventListener("signalingstatechange",A.hy(new B.cua(x)))
if(!$.hp2())w.addEventListener("connectionstatechange",A.hy(new B.cub(x)))
w.addEventListener("negotiationneeded",A.hy(new B.cuc(x)))
w.addEventListener("track",A.hy(new B.cud(x)))},
anb(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ek(s.createAnswer(A.kq(A.cv(A.S(y.N,y.z)))),y.aQ),$async$anb)
case 3:t=f
v=new B.YS(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anb,w)},
a9j(d,e){return this.bsA(0,e)},
bsA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9j)
case 2:return A.h(null,w)}})
return A.i($async$a9j,w)},
a9r(d,e){return this.bsV(0,e)},
bsV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9r)
case 2:return A.h(null,w)}})
return A.i($async$a9r,w)},
arz(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YS(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arz,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f4(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adV.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_O.prototype={
S(){return new B.aBT()},
gd4(){return this.c}}
B.aBT.prototype={
Z(){this.a4()
this.afV()},
afV(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b21(u.e,u.c),$async$afV)
case 2:t=e
if(v.c!=null)v.l(new B.df_(v,t))
return A.h(null,w)}})
return A.i($async$afV,w)},
Rt(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arr(t.e,t.c,!1),$async$Rt)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fz8)
x=1
break}x=4
return A.b(B.a8y(u.a.c,"individual"),$async$Rt)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a7F(A.ea(new B.deX(u),!1,null,y.H)),$async$Rt)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rt,w)},
K6(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fGO(o),$async$K6)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8C(o.e,r,s,q),$async$K6)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fw7)
x=1
break}x=5
return A.b(B.a8y(u.a.c,"member"),$async$K6)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a7F(A.ea(new B.deZ(u),!1,null,y.H)),$async$K6)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K6,w)},
yQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8x(t.e,o,t.f,t.r,t.w,s),$async$yQ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8y(u.a.c,"org_owner"),$async$yQ)
case 4:x=5
return A.b(B.arw(u.a.c),$async$yQ)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fHi(o),$async$yQ)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8A(s,t,o,q.c),$async$yQ)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.fw3)
x=1
break}x=10
return A.b(B.arw(u.a.c),$async$yQ)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a7F(A.ea(new B.deY(u),!1,null,y.H)),$async$yQ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yQ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.nL:C.qH,p=B.hfg(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aE(d,C.dH,y.m).w
w=A.m(28)
v=A.a([new A.ab(0,C.H,C.aD.j(0.35),C.h_,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fTp,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.hk,s,s,s),C.aA,D.hcD,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.cdW,C.m),s,s,s,s,C.eF,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.m1(new B.df1(),s),C.O,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.ak,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeo(C.f3,C.aFv,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclm(),s),C.af],u))
w.push(new B.aeo(C.pR,C.a6k,"Team Member","Sign in with your organization access code + password",t.gcmf(),s))
w.push(C.af)
w.push(new B.aeo(C.arr,C.a7Y,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gclL(),s))
return A.c5(s,q,A.bm(!0,A.ca(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeo.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eF(A.A(A.a([A.o(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.mb,s,s,s),C.au,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.W(C.zP,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.n(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEx.prototype={}
B.aHL.prototype={}
B.jI.prototype={
mR(d){var x=this.b,w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasf(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.aa(x/1024,1)+" KB"
if(x<1073741824)return C.i.aa(x/1048576,1)+" MB"
return C.i.aa(x/1073741824,2)+" GB"},
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
bgQ(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jI(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRb(d){return this.bgQ(null,d)},
aH0(d){return this.bgQ(d,null)}}
B.Wt.prototype={
S(){return new B.aFU(new A.cB(null,y.A))},
gd4(){return this.c}}
B.aFU.prototype={
Z(){this.a4()
this.afW()},
afW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cs(u.a.c),$async$afW)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e12(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afW,w)},
afX(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fK(new A.fA(s)),$async$afX)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fA3)
case 1:return A.h(v,w)}})
return A.i($async$afX,w)},
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
if(o!=null)o.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0c,w)},
ajR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abG("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajR,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.nL:C.qH,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lN
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
w=A.o(p,A.x(A.a([t,C.O,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,E.SV,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ak,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,C.ao2,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.H,C.aD.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nn,w,C.lj,new A.e7(A.o(p,A.qk(p,p,!1,B.i1s(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lj,A.A(A.a([A.E(A.en(C.DU,p,C.X7,q.gcdw(),p),1),C.ar,A.E(A.da(C.Af,p,C.adg,q.gcdx(),A.bn(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.S,new A.a6(1/0,p,A.en(G.a57,p,D.h88,q.gcBm(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,I.aoD,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wx.prototype={
S(){return new B.aFX(new A.at(C.ax,$.ax()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.aFX.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.Ju(x==null?"":x)
if(w!=null)this.d.sb2(0,w)},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a3()},
a0d(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ju(u.d.a.a)
if(t==null){u.l(new B.e2b(u))
x=1
break}u.l(new B.e2c(u))
s=u.a
r=s.c
x=3
return A.b(B.a8w(s.d,new B.e2d(u),t,r),$async$a0d)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e2e(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0d,w)},
a3y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cu(r.a.d)){x=1
break}r.l(new B.e2f(r))
u=4
q=J.fn(r.a.d)
x=7
return A.b(B.rZ(r.a.c,q),$async$a3y)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e2g(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajp(p,m,l,j,k),$async$a3y)
case 8:o=e
if(r.c!=null)r.l(new B.e2h(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e2i(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e2j(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3y,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ak0:D.ahu,h=j?D.alO:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aiZ:C.bn
i=[i,e,h,g,f,j?C.fy:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dq(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dq(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c0N,C.f,k,k,new A.n(k,k,k,A.m(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.m),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.m),k,k,k,k,C.fc,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,E.SV,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v0(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bml()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.P6,k,k,"",k,!0,new A.b6(4,A.m(18),new A.av(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.av(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e2k(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mJ,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.F,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.Mz(l.a.d,4)
m=A.B(new A.N(m,new B.e2l(x,new A.aJ2(i)),m.$ti.k("N<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lw,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.dc,p,C.O,A.o(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.m),k,k,k,k,C.ey,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fuA)
else q.push(A.W(C.l6,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cV(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.b_,new A.n(u,k,s,t,k,k,C.m),C.iX,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJ0,k,k,C.ah),1)
u=l.f?k:l.gcBn()
t=i[3]
s=i[1]
q=A.m(16)
s=A.en(G.a57,k,D.h9f,u,A.dh(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.ba(q,C.a1),new A.av(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdy()
t=A.bn(C.aD,k,k,0,C.c,k,C.nS,k,new A.ba(A.m(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lI(new B.e2m(),A.x(A.a([e,new A.D(D.bIu,A.x(A.a([s,C.O,i,C.af,A.bI(l.f?C.ud:D.h7u,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cn,C.a1j,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bml.prototype={
pg(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fi(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hs(C.bD,v.length),C.aP)}}
B.Wu.prototype={
S(){return new B.aFV()}}
B.aFV.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bd(w,C.b8,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.at(new A.bd(x,C.b8,C.aP),v)
u.f!==$&&A.aQ()
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
afY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e13(r))
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
return A.b(B.a8B(p,m,n,o,C.a.i(l).length===0?null:l),$async$afY)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fzF)
s=[1]
x=4
break}p.L(y.q).f.U(D.fyg)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e14(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afY,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.nL:C.qH,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h_O,s,s,s,1,s,!0),p=A.o(s,D.bAt,C.f,s,s,new A.n(s,s,s,A.m(22),s,C.IT,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8e,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c89,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8p,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdz()
u=A.bn(C.aD,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c5(q,r,A.ca(A.x(A.a([p,C.dc,o,C.af,x,C.af,w,C.nn,A.bI(t.r?C.ud:C.aZA,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adC.prototype={}
B.bzi.prototype={
a6n(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.a85()))
x=3
return A.b(B.Sx(t,s),$async$a6n)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6n,w)},
gd4(){return this.a}}
B.Ow.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_N.prototype={
S(){return new B.aBS(new A.at(C.ax,$.ax()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.aBS.prototype={
Z(){this.a4()
$.aU.x1$.push(new B.deW(this))},
t(){var x=this.d
x.V$=$.ax()
x.R$=0
this.e.t()
this.a3()},
cdF(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2V(d),u=x.a.c,t=u?C.iR:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nL:v.a[0],p=A.m(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.H,C.aD.j(u?0.25:0.12),C.h_,32)],n),l=A.o(w,H.aua,C.f,w,w,new A.n(w,w,w,A.m(18),A.a([new A.ab(0,C.H,C.aD.j(0.4),C.cz,16)],n),C.av_,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.F,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byV()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.D4,w,w,"",w,!0,new A.b6(4,A.m(16),new A.av(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b85),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.deU(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mJ,w,w,w,w)
f=f[1]
h=y.p
return A.eJ(w,C.L,new A.cP(C.MO,new A.bP(new A.n(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x0,A.x(A.a([l,C.aO,k,C.O,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dV(C.om,new B.deV(d),A.dh(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.ba(A.m(14),C.a1),new A.av(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.n(w,w,w,A.m(14),A.a([new A.ab(0,C.H,C.aD.j(0.35),C.cO,12)],n),F.Ra,C.m),C.bm,A.aF(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eDo,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdE(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.M,0,C.p),w),w),w),w,w,w,C.Pf,w,C.d8,w,w,w)}}
B.byV.prototype={
pg(d,e){return e.an5(e.a.toUpperCase())}}
B.Wv.prototype={
S(){return new B.aFW(A.a([],y.r),A.aR(y.N))},
gd4(){return this.c}}
B.aFW.prototype={
Z(){var x=this
x.a4()
x.uw()
x.w=A.d9(C.jR,new B.e29(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WE()
this.a3()},
a2q(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ov(u.a.c),$async$a2q)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bm(u.a.c),$async$a2q)
case 4:u.l(new s.e1x(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2q,w)},
uw(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ov(u.a.c),$async$uw)
case 3:t=e
x=4
return A.b(B.Bm(u.a.c),$async$uw)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e1y(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OB(u.d)
B.Cs(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uw,w)},
OB(d){return this.bHM(d)},
bHM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8G(r,u.a.c),$async$OB)
case 8:p=f
if(u.c==null){x=1
break}new B.e16(u,r,p).$0()
u.c.er()
case 7:if(!(C.a.X(r.c,"video/")||r.mR(D.nh))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WC(r,u.a.c),$async$OB)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bm(u.a.c),$async$OB)
case 12:u.l(new o.e17(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OB,w)},
P0(d){return this.bOb(d)},
bOb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8G(d,u.a.c),$async$P0)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e1c(u,d,t))
x=6
return A.b(A.fK(new A.fA(t)),$async$P0)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fK(new A.fA(r.toUpperCase())),$async$P0)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P0,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ux(d,e){return this.cMr(d,e)},
cMr(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ux=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e1Y(r,e))
u=3
x=6
return A.b(d.$0(),$async$ux)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e1Z(r))
$.eY.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ux,w)},
gaYO(){var x=this.a
return x.f||x.r||x.w},
IT(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYO()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cfL(s,n,r,q,o,t),$async$IT)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fUe(o,u.a.c),$async$IT)
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
return A.b(B.DW(s,o,r,q,n,t),$async$IT)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IT,w)},
a1s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arw(u.a.c),$async$a1s)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iq("No organization portal found.")
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
return A.b(A.a8(t,!1).cb(A.ea(new B.e1u(u,r,q),!1,null,y.H)),$async$a1s)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1s,w)},
a2A(d){return this.cuP(d)},
cuO(){return this.a2A(1)},
cuP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYO()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.art(u.a.c),$async$a2A)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2A,w)},
adN(d,e,f){return this.c4c(d,e,f)},
c4c(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.ux(new B.e1r(u,d,null,e,f),"Uploading\u2026"),$async$adN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adN,w)},
bHV(){B.hMn(!1,new B.e1a(this))
return},
czX(){this.l(new B.e1C(this))},
aBt(){var x=0,w=A.j(y.H),v=this
var $async$aBt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHV()
return A.h(null,w)}})
return A.i($async$aBt,w)},
adJ(){var x=0,w=A.j(y.H),v=this
var $async$adJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e1g(v),"Importing\u2026"),$async$adJ)
case 2:return A.h(null,w)}})
return A.i($async$adJ,w)},
Tx(d){return this.cLK(d)},
cLK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.X(t,"video/")||d.mR(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cb(A.ea(new B.e1V(u,d),!1,null,y.H)),$async$Tx)
case 5:x=1
break
case 4:x=C.a.X(t,"image/")||d.mR(D.Tf)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).cb(A.ea(new B.e1W(u,d),!1,null,y.H)),$async$Tx)
case 8:x=1
break
case 7:x=u.c4V(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).cb(A.ea(new B.e1X(u,d),!1,null,y.H)),$async$Tx)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tx,w)},
c4V(d){var x,w
if(C.a.X(d.c,"audio/"))return!0
x=d.b
w=C.a.pk(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXR,C.a.aY(x,w+1).toLowerCase())},
ahz(d){return this.clq(d)},
clq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.X(d.c,"video/")||d.mR(D.nh)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).cb(A.ea(new B.e1s(u,d),!1,null,y.H)),$async$ahz)
case 5:x=1
break
case 4:u.l(new B.e1t(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahz,w)},
ST(d){return this.cCR(d)},
cCR(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ST=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pH(t,s.c,s.f),$async$ST)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e1O(u,d),"Preparing QR\u2026"),$async$ST)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ST,w)},
akg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e1P(),A.T(t).k("N<1,p>")).fB(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e1Q(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.ST(r),$async$akg)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akg,w)},
ak9(d){return this.cCo(d)},
cCo(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2V(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e1I(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ak9)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tx(d)
break
case"qr":u.ST(A.a([d],y.r))
break
case"send_my_code":u.cm4(A.a([d],y.r))
break
case"save":u.ajx(d)
break
case"delete":u.JO(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ak9,w)},
YW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e1d(),A.T(t).k("N<1,p>")).fB(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e1e(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pH(t,s.c,s.f),$async$YW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ux(new B.e1f(u,r),"Preparing file\u2026"),$async$YW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YW,w)},
aiF(d){return this.ct6(d)},
ct6(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hNo(d,!1),$async$aiF)
case 3:s=f
r=s==null
q=B.a8D(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiF,w)},
ahF(){var x=0,w=A.j(y.H),v=this,u
var $async$ahF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h1t(u,v.a.c),$async$ahF)
case 2:return A.h(null,w)}})
return A.i($async$ahF,w)},
bHU(){B.hMn(!1,new B.e19(this,null))
return},
K5(d,e){return this.cm5(d,e)},
b4x(d){return this.K5(null,d)},
cm4(d){return this.K5(d,null)},
cm5(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$K5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e1v(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xX.cq().apT(!0,C.a37,!1),$async$K5)
case 10:r=g
if(r==null||J.cu(r.a)){x=1
break}x=11
return A.b(s.ux(new B.e1w(l,s,r),"Preparing\u2026"),$async$K5)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.am.$1("[doc share send my code pick] "+A.v(q))
s.iq("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iq("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bHw(p,l,e,s.a.c),$async$K5)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$K5,w)},
J9(d){return this.c4_(d)},
c4_(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.X(q,"NGMYDOCRCV|")||C.a.X(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i1r(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4x(t),$async$J9)
case 8:x=6
break
case 7:u.iq("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iq("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.X(d,"NGMYDOCSYNC3|")||C.a.X(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ux(new B.e1p(u,d),"Receiving video\u2026"),$async$J9)
case 11:x=1
break
case 10:x=12
return A.b(u.ux(new B.e1q(u,d),"Receiving\u2026"),$async$J9)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J9,w)},
F_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DP()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiF(t),$async$F_)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J9(s),$async$F_)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).cb(A.ea(new B.e1A(u),!1,null,y.N)),$async$F_)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uw(),$async$F_)
case 10:x=1
break
case 9:x=11
return A.b(u.J9(C.a.i(r)),$async$F_)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F_,w)},
ajx(d){return this.cyr(d)},
cyr(d){var x=0,w=A.j(y.H),v=this
var $async$ajx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ux(new B.e1z(v,d),"Saving\u2026"),$async$ajx)
case 2:return A.h(null,w)}})
return A.i($async$ajx,w)},
JO(d){return this.bQy(d)},
bQy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lr(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JO)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cfO(t),$async$JO)
case 6:case 5:s=d.a
x=7
return A.b(B.Fy(u.a.c,s),$async$JO)
case 7:u.r.W(0,s)
x=8
return A.b(u.uw(),$async$JO)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JO,w)},
akm(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2V(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e1U(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akm)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahF()
break
case"import":u.adJ()
break}case 1:return A.h(v,w)}})
return A.i($async$akm,w)},
cdC(d){var x=d.c
if(C.a.X(x,"video/")||d.mR(D.nh))return C.rf
if(C.a.X(x,"image/")||d.mR(D.Tf))return C.vl
if(C.a.q(x,"pdf"))return C.Iz
return D.arP},
B(d){var x,w,v=this,u=null,t=B.a2V(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.IL,u,u,u,new B.e24(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c1o,u,u,u,v.e?u:v.gclM(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gczW()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bWs:C.asd,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a54,u,u,u,v.e?u:v.gcdD(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.p0,u,u,u,v.e?u:v.gb5D(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c3d,u,u,u,v.e?u:new B.e25(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.m1(new B.e26(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dq(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dq(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jt(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBP(C.jD,s,!0,t,w?u:v.gcCS(),u),1)
x.push(new A.D(D.bHc,A.lI(new B.e27(),A.A(A.a([s,C.ar,A.E(new B.aBP(C.tA,"Export",!1,t,w?u:v.gbUq(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cn,C.iJ,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgQ(t,v.e?u:v.gb5D(),u)
else s=A.kz(!0,u,u,new B.e28(v,t),s,u,D.bH3,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBP.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bn(C.aD,t,t,0,C.c,t,C.to,t,new A.ba(s,C.a1),t,t,t)
return A.da(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dh(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.to,t,new A.ba(s,C.a1),new A.av(v,1,C.r,-1),t,t,t,t)
return A.en(A.W(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fh,t,t,t),u.r,v)}}
B.bgQ.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lI(new B.deS(),new A.D(C.a2e,A.x(A.a([A.lI(new B.deT(),A.o(x,A.W(C.zT,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ei,C.hJ,x,x,new A.bt(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.da(C.p0,x,D.hcX,this.d,A.bn(C.aD,x,x,x,C.c,x,C.Pd,x,new A.ba(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.M,0,C.p),x),C.cn,C.CT,x,x,new A.bt(0,1,w),s),x,x,x)}}
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
if(!o||i.mR(D.nh))p=D.dAo
else{p=C.a.X(p,"image/")||i.mR(D.Tf)
n=y.O
p=p?A.a([C.cV,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.F,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasf()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.nh))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bb,A.E(A.x(A.a([q,C.au,A.c(C.d.aM(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fY,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cl))
if(!(!o||i.mR(D.nh)))l.push(A.hd0(C.aD,!1,j,j,j,!1,j,j,new B.dfe(k),j,j,new A.ba(A.m(5),C.a1),j,j,!1,u))
x=A.W(C.oW,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cl))
return A.lI(new B.dff(),new A.D(C.e9,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1H,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.av(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_P.prototype={
S(){return new B.aBU()},
gd4(){return this.c}}
B.aBU.prototype={
Z(){this.a4()
this.yF()},
t(){B.i1G(this.e)
this.a3()},
yF(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rZ(o.c,o.d),$async$yF)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i1J(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i1I(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfb(s))
x=1
break}s.l(new B.dfc(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfd(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yF,w)},
a3x(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3x=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rZ(t.c,t.d),$async$a3x)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fwE)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajp(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3x)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3x,w)},
c3T(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kL(u,C.z,v,new B.df9(w,t),C.hc,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.h2(t,C.z,v,new B.dfa(w),C.hc,C.dE,!0,v,!1,v,v)
else return C.bL
return A.v7(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2V(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DW,u,u,u,v.gb9s(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gj
else{q=v.r
if(q!=null)t=new A.D(C.eF,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eF,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.da(C.DW,u,D.fVV,v.gb9s(),A.bn(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.M,0,C.p),u)
t=p}else t=v.c3T()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_M.prototype={
S(){return new B.aBR(A.ako(),C.bF,C.bF)},
gd4(){return this.c}}
B.aBR.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fD(w,A.a4(w).k("fD<1>")).iG(new B.deP(v))
x.gd_l().iG(new B.deQ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fD(x,A.a4(x).k("fD<1>"))}if(x==null)x=C.bet
x.iG(new B.deR(v))
v.yF()},
yF(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rZ(p.c,p.d),$async$yF)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.deI(s))
x=1
break}x=8
return A.b(s.d.vz(0,new A.a52(r,s.a.d.c)),$async$yF)
case 8:if(s.c==null){x=1
break}s.l(new B.deJ(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.deK(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yF,w)},
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
aWE(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2V(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.F,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gj
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bXq,C.f,o,o,new A.n(o,o,o,A.m(24),o,F.Ra,C.m),o,88,o,o,o,o,o,88)
t=A.l4(C.aD,o,o,m,0,new B.deL(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.c(p.aWE(p.w)+" / "+p.aWE(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aD,o,o,o,o,D.ft2,o,o,o,o,o,o)
r=p.f
q=A.W(r?C.vo:C.hd,o,o,o,o,o)
x=A.x(A.a([u,C.lj,t,x,C.dc,A.da(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdG(),s)],y.p),C.l,o,C.e,C.M,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.r0,x,o),o,o,o),o,!1,!1,o,o)}}
B.QV.prototype={
S(){return new B.aBX()},
gd4(){return this.c}}
B.aBX.prototype={
Z(){this.a4()
this.QK()},
QK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hfh(o.c,o.d,new B.dfs(s)),$async$QK)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dft(s))
x=1
break}s.e=r
q=A.ip2(r)
if(q==null){s.l(new B.dfu(s))
x=1
break}s.d=q
q.aV(0,s.gb4l())
x=8
return A.b(q.iY(0).dc(0,C.nR),$async$QK)
case 8:if(s.c==null){x=1
break}s.l(new B.dfv(s))
x=9
return A.b(q.qw(0),$async$QK)
case 9:q.u6(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dfw(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QK,w)},
cjZ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dfx(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DL(0,x.gb4l())
w=x.d
if(w!=null)w.t()
B.izc(x.e)
x.a3()},
ag0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b29(u.c,u.d),$async$ag0)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ag0,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2V(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.F,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aH(t,t,t,t,C.o7,t,t,t,u.gcdA(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.it(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gj
else{q=u.r
if(q!=null)s=new A.D(C.eF,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajP(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fJ(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AS(s,t),A.ay(t,A.xF(A.o(t,A.W(q?C.vo:C.hd,C.c,t,t,t,48),C.f,t,t,new A.n(C.b6,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dfz(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bL}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_R.prototype={
S(){return new B.aBV(new A.cB(null,y.A))}}
B.aBV.prototype={
gcM7(){var x,w,v=this.a
if(v.e!==D.UE)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"WR"))return w
return null},
gcLI(){var x,w,v=this.a
if(v.e!==D.AS)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcM7()
if(x!=null){v.RU(x)
v.e=A.d9(C.CV,new B.dfo(v,x))}w=v.gcLI()
if(w!=null){v.RT(w)
v.f=A.d9(C.fM,new B.dfp(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
RT(d){return this.crh(d)},
crh(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arB(d),$async$RT)
case 3:t=f
x=4
return A.b(B.cg6(d),$async$RT)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfg(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RT,w)},
RU(d){return this.cri(d)},
cri(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h2c(d),$async$RU)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFi(t),$async$RU)
case 4:if(u.c==null){x=1
break}u.l(new B.dfh(u))
u.c.L(y.q).f.U(D.aWk)
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
gc9n(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdB(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3i(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DP()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fzP)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).cb(A.ea(new B.dfi(),!1,null,y.N)),$async$a3i)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFi(s),$async$a3i)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aWk)
case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
abB(d){return this.bOc(d)},
bOc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fK(new A.fA(C.d.aM(t,", "))),$async$abB)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abB,w)},
afZ(d){return this.bNV(d)},
bNV(d){var x=0,w=A.j(y.H),v=this
var $async$afZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fK(new A.fA(v.a.c)),$async$afZ)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fx7)
return A.h(null,w)}})
return A.i($async$afZ,w)},
a3c(d){return this.cyt(d)},
cyt(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqu(s.d,4),$async$a3c)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rr(r,"ngmy_doc_share_qr.png"),$async$a3c)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3c,w)},
gb_3(){var x,w=this.a
if(w.e!==D.JY)return null
x=C.a.i(w.c)
if(C.a.X(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.X(x,"http://")||C.a.X(x,"https://"))return x
if(C.a.X(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
aby(d){return this.bO5(d)},
bO5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aby=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_3()
if(t==null){x=1
break}x=3
return A.b(A.fK(new A.fA(C.a.X(t,"http")?t:"N2|"+t)),$async$aby)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fyO)
case 1:return A.h(v,w)}})
return A.i($async$aby,w)},
ag_(){var x=0,w=A.j(y.H),v=this,u
var $async$ag_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WE(),$async$ag_)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ag_,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2V(d),i=m.a,h=i.c
if(h.length>48)h=C.a.az(h,0,44)+"\u2026"
i=i.e
i=i!==D.JY&&i!==D.UE&&i!==D.AS
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JY||t===D.UE||t===D.AS?l:A.aH(l,l,l,l,C.lA,l,l,l,m.gb2a(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.qk(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gc9n(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JY){t=C.aD.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.O,A.o(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.m),l,l,l,l,C.lZ,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdB(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aM(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hr(D.c7h,D.h4E,new B.dfj(m,d),l)],p))}if(m.a.e===D.JY&&m.gb_3()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hr(D.c3z,D.h1c,new B.dfk(m,d),l)],p))
if(m.a.e===D.AS){x=(m.w?C.dQ:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.aa(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.O,A.o(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gn:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.m),l,l,l,l,C.lZ,l,l,l)],p))}if(m.a.e===D.UE){x=(m.r?C.dQ:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.O,A.o(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gn:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.F,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.m),l,l,l,l,C.lZ,l,l,l),C.af,A.da(D.bZV,l,D.h7O,m.gcyQ(),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oW(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.h,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.en(C.DU,l,C.X7,new B.dfl(m,d),l),1),C.ar,A.E(A.da(C.Af,l,C.adg,new B.dfm(m,d),A.bn(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.O,new A.a6(1/0,l,A.bI(C.Bw,l,m.gb2a(),A.bn(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfn(),y.C)}}
B.adU.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.o(x,A.qk(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bG,x,x,x)],u),C.l,x,C.e,C.M,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.eh(A.a([A.bI(C.Bx,x,new B.deH(d),x)],u),x,x,C.nB,v,x,x,x,x,D.fUR,x)}}
B.a_L.prototype={
S(){return new B.aBQ(A.A2(C.z9,C.ot,C.vA))}}
B.aBQ.prototype={
t(){this.d.t()
this.a3()},
aA_(d){var x,w,v,u,t
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
return A.c5(A.eS(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h1K,x,x,x,1,x,!0),C.v,A.A1(this.d,C.bZ,this.gazZ()),x,!1,!1,x,x)}}
B.a_S.prototype={
S(){return new B.aBW(A.A2(C.z9,C.ot,C.vA))},
gd4(){return this.c}}
B.aBW.prototype={
c4X(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.X(x,"NGMYDOCSYNC")||C.a.X(x,"N2|")||C.a.X(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ai1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N_("text/plain"),$async$ai1)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fzJ)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ai1,w)},
acp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hNo(p,!0),$async$acp)
case 3:t=e
p=t==null
s=B.a8D(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fwe)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acp,w)},
t(){this.d.t()
this.a3()},
aA_(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4X(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.atf,v,v,v,w.gbTU(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a5b,v,v,v,w.gcoA(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.vh:C.Qn,v,v,v,v,v),v,v,v,new B.dfr(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h8K,v,v,v,1,v,!0)
u=A.A1(w.d,C.bZ,w.gazZ())
x=A.m(20)
return A.c5(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJG],s),v),v,!1,!1,v,v)}}
B.bgR.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pF
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.o(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pF:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2k,A.A(A.a([u,C.bb,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.W(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.ab3.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.PD.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YR.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.PC.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.G3.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cu4.prototype={}
B.G2.prototype={}
B.ab2.prototype={}
B.awc.prototype={}
B.YS.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jI)","p(jI)","Wv(Z)","~()","a_O(Z)","G(G,jI)","QV(Z)","~(nW)","cw(G2)","aA<jI?>(@)","Wt(Z)","Wx(Z)","D(jI)","jI(@)","aa<p,@>(jI)","a_N(Z)","Wu(Z)","a_P(Z)","a_M(Z)","a_R(Z)","adU(Z)","ai<jI>()","a_S(Z)","adW(Z,G)","a_L(Z)","aa<p,aK>(jI)","cw(YR)","cw(ab2)","aA<cw>(G2)"])
B.cu0.prototype={
$1(d){var x=this.a
x.x=D.aT1
x.y.I(0,D.aT1)},
$S:79}
B.cu1.prototype={
$1(d){var x=this.a
x.x=D.aT0
x.y.I(0,D.aT0)},
$S:79}
B.cu2.prototype={
$1(d){var x=this.a
x.ajp(A.aia(d.data)).bE(new B.cu_(x),y.b)},
$S:79}
B.cu_.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cu3.prototype={
$1(d){},
$S:79}
B.cu6.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i6y(d.channel))},
$S:17}
B.cu7.prototype={
$1(d){},
$S:17}
B.cu8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iqc(w.iceConnectionState)
x.cx=w
if($.hp2())switch(w.a){case 0:x.cy=D.aT6
break
case 1:x.cy=D.aT7
break
case 3:x.cy=D.aT8
break
case 5:x.cy=D.aT4
break
case 6:x.cy=D.aT5
break
case 7:x.cy=D.aaU
break
default:break}},
$S:111}
B.cu9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iqd(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:111}
B.cua.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iAL(w.signalingState)},
$S:111}
B.cub.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iyU(w.connectionState)},
$S:111}
B.cuc.prototype={
$1(d){},
$S:111}
B.cud.prototype={
$1(d){},
$S:17}
B.fCb.prototype={
$1(d){var x=y.F.a(new A.qA([],[]).o8(d.target.result,!1)),w=C.wQ.q(x.objectStoreNames,"blobs")
if(!w)C.wN.Gw(x,"blobs")},
$S:183}
B.h1h.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xv.ft(this.b)
$.eY.mK()
this.c.$1(d)},
$S:502}
B.h1j.prototype={
$1(d){return this.a.$1(B.ifL(this.b,this.c))},
$S:32}
B.h1i.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.h1g.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h1w.prototype={
$1(d){var x=this
return B.hBE(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h1x.prototype={
$1(d){var x=this
return B.hBE(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fES.prototype={
$1(d){var x=this
return B.cfI(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.df_.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.deX.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfI(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.deZ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfI(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.deY.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfI(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.df1.prototype={
$4(d,e,f,g){var x=null
return A.k5(A.A(A.a([A.aH(x,x,x,x,D.bYw,x,x,x,new B.df0(d),x,x,x,x,x,x),A.E(A.FP(D.SY,!0,x,!1,C.a4d,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.SY,x,g,C.aoU,0,e,f)},
$C:"$4",
$R:4,
$S:490}
B.df0.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fGR.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.f0,y.m).w,t=this.a,s=t?C.iR:C.c,r=A.m(28),q=A.o(v,D.bAN,C.f,v,v,D.b9K,v,v,v,v,D.aoJ,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c20,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.D6,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atv,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dr,new B.fGP(d),v),1),C.ar,A.E(A.bI(D.h0b,v,new B.fGQ(p,x,d),A.bn(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.M,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.m),v,v,v,C.HB,v,v,v,v),v)},
$S:69}
B.fGP.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fGQ.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fxo)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aEx(v,x))},
$S:0}
B.fHk.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.f0,y.m).w,u=x.a,t=u?C.iR:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bAD,C.f,w,w,D.bbe,w,w,w,w,D.aoJ,w,w,1/0),new A.D(C.D6,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hkG(u,"Organization name",C.I9,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hkG(u,"Access code",C.mu,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.S,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hkG(u,"Member password",C.DT,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bI(D.h8R,w,new B.fHj(r,q,p,d),A.bn(C.aD,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.M,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.m),w,w,w,C.HB,w,w,w,w),w)},
$S:69}
B.fHj.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fxt)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aHL(u,x,w))},
$S:0}
B.cfz.prototype={
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
p=C.a.X(j,"http")?A.cF(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vY(p,null).dc(0,C.a1i),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
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
B.cfF.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfG.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cfH.prototype={
$1(d){return d.b},
$S:z+2}
B.cfB.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfC.prototype={
$1(d){return d.b},
$S:z+2}
B.cfA.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cfD.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cfE.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h1u.prototype={
$1(d){return new B.Wt(this.a,null)},
$S:z+11}
B.h1v.prototype={
$1(d){return new B.Wx(this.a,this.b,this.c,null)},
$S:z+12}
B.e12.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e2b.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e2c.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e2d.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e2a(x,d))},
$S:2}
B.e2a.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e2e.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e2f.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e2g.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e2h.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e2i.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e2j.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e2m.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:109}
B.e2k.prototype={
$1(d){var x=this.a
return x.f?null:x.a0d()},
$S:2}
B.e2l.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.X(s,"image/")||d.mR(D.Tf))s=C.vl
else s=C.a.X(s,"video/")||d.mR(D.nh)?C.rf:D.arP
x=this.b.a
w=y.p
return new A.D(C.ke,A.A(A.a([A.o(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasf(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e13.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e14.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfJ.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:100}
B.cfK.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:100}
B.h2v.prototype={
$2(d,e){return e===this.a},
$S:280}
B.fzb.prototype={
$1(d){return J.k(d)},
$S:15}
B.fF3.prototype={
$1(d){var x=this.b
B.idH(C.HY.ga8_(this.a)).bE(x.gCk(x),y.H)},
$S:136}
B.fF4.prototype={
$1(d){return this.a.de(0,null)},
$S:136}
B.fF5.prototype={
$0(){return null},
$S:12}
B.cfY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fF6.prototype={
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
u=J.k(u==null?new A.V(Date.now(),0,!1).ab().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jI(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fJl.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fDf.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fDg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cg2.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nh)},
$S:z+1}
B.h6L.prototype={
$1(d){return new B.a_N(this.a,null)},
$S:z+16}
B.deW.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fX()},
$S:7}
B.deU.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.deV.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e29.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2q()},
$S:11}
B.e1x.prototype={
$0(){var x=J.bID(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1y.prototype={
$0(){var x=J.bID(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e16.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e15(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH0(this.c)}},
$S:0}
B.e15.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e17.prototype={
$0(){var x=J.bID(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1c.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e1b(this.b))
if(w>=0){x=x.d
x[w]=x[w].aH0(this.c)}},
$S:0}
B.e1b.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1Y.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e1Z.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e1u.prototype={
$1(d){return new B.Wu(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e1r.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IT(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wy(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uw(),$async$$0)
case 5:s=J.a5(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2A(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1a.prototype={
$1(d){this.a.adN(d,"No files selected.","Added")},
$S:502}
B.e1C.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e1B(),A.T(x).k("N<1,p>")))},
$S:0}
B.e1B.prototype={
$1(d){return d.a},
$S:z+2}
B.e1g.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xX.cq().d1k(C.a37,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jO(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.iq("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.X(m,"NGMYDOCSYNC")&&!C.a.X(m,"{")){s.a.iq("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arA(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cu(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uw(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e1V.prototype={
$1(d){return new B.QV(this.a.a.c,this.b,null)},
$S:z+7}
B.e1W.prototype={
$1(d){return new B.a_P(this.a.a.c,this.b,null)},
$S:z+18}
B.e1X.prototype={
$1(d){return new B.a_M(this.a.a.c,this.b,null)},
$S:z+19}
B.e1s.prototype={
$1(d){return new B.QV(this.a.a.c,this.b,null)},
$S:z+7}
B.e1t.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e1O.prototype={
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
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cuO(),$async$$0)
case 5:x=6
return A.b(p.uw(),$async$$0)
case 6:r=A.T(t).k("N<1,p>")
r=new A.N(new A.N(t,new B.e1K(p),r),new B.e1L(),r.k("N<aj.E,p>")).c0(0,new B.e1M())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).cb(A.ea(new B.e1N(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pG(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WE(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1K.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e1J(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e1J.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1L.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e1M.prototype={
$1(d){return d.length!==0},
$S:3}
B.e1N.prototype={
$1(d){var x=this.a
return new B.a_R(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e1P.prototype={
$1(d){return d.a},
$S:z+2}
B.e1Q.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e1I.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasf(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.X(p.c,"video/")
w=!x||p.mR(D.nh)?C.tF:C.o5
p=!x||p.mR(D.nh)?"Play video":"View"
return new A.bP(new A.n(s,v,new A.bE(new A.av(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ln,v,v,C.m),C.bm,A.bm(!0,new A.D(C.D2,A.x(A.a([q,o,t,C.aA,B.a_Q(!1,u,!1,w,p,new B.e1D(d),v),B.a_Q(!1,u,!1,C.jD,"Share via QR",new B.e1E(d),"Letters/numbers QR code"),B.a_Q(!1,u,!1,D.a4i,"Send to their Code",new B.e1F(d),"Enter someone else's personal code"),B.a_Q(!1,u,!1,C.hP,"Download / save",new B.e1G(d),v),C.ak,B.a_Q(!1,u,!0,C.eo,"Delete",new B.e1H(d),v)],y.p),C.am,v,C.e,C.M,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:799}
B.e1D.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e1E.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e1F.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e1G.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e1H.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e1d.prototype={
$1(d){return d.a},
$S:z+2}
B.e1e.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e1f.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8H(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hv(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pG(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e19.prototype={
$1(d){var x=this.a
x.ux(new B.e18(x,d,this.b),"Preparing\u2026")},
$S:502}
B.e18.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wy(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cu(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bHw(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1v.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e1w.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aS(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hfk(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1p.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Ht(new B.e1l(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.e1m(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e1n(s))
case 5:x=8
return A.b(r.b.ix(0,C.Hv,new B.e1o()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gau(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uw(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1l.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e1i(x,d,e))},
$S:235}
B.e1i.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e1m.prototype={
$1(d){return new B.adU(this.a.a,null)},
$S:z+21}
B.e1n.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e1o.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e1q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ju(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8v(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4x(B.Ju(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arA(new B.e1j(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cu(r)){if(B.hfj(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.X(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uw(),$async$$0)
case 10:o=J.cH(r)
p=o.eO(r,new B.e1k()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1j.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e1h(x,d,e))},
$S:235}
B.e1h.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e1k.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nh)},
$S:z+1}
B.e1A.prototype={
$1(d){return new B.a_S(this.a.a.c,null)},
$S:z+23}
B.e1z.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b29(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1U.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.n(v[2],x,new A.bE(new A.av(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ln,x,x,C.m),C.bm,A.bm(!0,new A.D(C.D2,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kH,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a_Q(!0,w,!1,C.mu,"My Code",new B.e1R(d),"Your personal code & QR \u2014 others send docs to you"),B.a_Q(!1,w,!1,D.a4i,"Send to their Code",new B.e1S(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_Q(!1,w,!1,C.A7,"Import backup",new B.e1T(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.M,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:799}
B.e1R.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e1S.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bHU()},
$S:0}
B.e1T.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e26.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JE(D.SY,x,C.a4d,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.dc(C.d.gH(D.SY).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:781}
B.e24.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e25.prototype={
$0(){this.a.akm()
return null},
$S:0}
B.e27.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*10)),e)},
$S:109}
B.e28.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adW(e,w,v,this.b,x.e,x.cdC(w),new B.e20(x,w),new B.e21(x,v,w),new B.e22(x,w),new B.e23(x,w),null)},
$S:z+24}
B.e20.prototype={
$0(){this.a.ahz(this.b)
return null},
$S:0}
B.e21.prototype={
$0(){var x=this.a
return x.l(new B.e2_(x,this.b,this.c))},
$S:0}
B.e2_.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e22.prototype={
$0(){this.a.P0(this.b)
return null},
$S:0}
B.e23.prototype={
$0(){this.a.ak9(this.b)
return null},
$S:0}
B.deS.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*18)),e)},
$S:109}
B.deT.prototype={
$3(d,e,f){return A.e3(C.z,f,e,null,null)},
$S:115}
B.dff.prototype={
$3(d,e,f){return A.d3(A.dP(f,new A.r(0,(1-e)*14)),e)},
$S:109}
B.dfe.prototype={
$1(d){return this.a.y.$0()},
$S:88}
B.dfb.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfc.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.df9.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.h2(w,C.z,x,new B.df7(this.a),C.hc,C.dE,!0,x,!1,x,x)
$.aU.x1$.push(new B.df8(this.a))
return C.bL},
$S:156}
B.df7.prototype={
$3(d,e,f){$.aU.x1$.push(new B.df5(this.a))
return C.bL},
$S:207}
B.df5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.df2(x))},
$S:7}
B.df2.prototype={
$0(){return this.a.w=!0},
$S:0}
B.df8.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.df4(x))},
$S:7}
B.df4.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfa.prototype={
$3(d,e,f){$.aU.x1$.push(new B.df6(this.a))
return C.bL},
$S:207}
B.df6.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.df3(x))},
$S:7}
B.df3.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deP.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deO(x,d))},
$S:2155}
B.deO.prototype={
$0(){return this.a.f=this.b===C.vX},
$S:0}
B.deQ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deN(x,d))},
$S:7}
B.deN.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.deR.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.deM(x,d))},
$S:7}
B.deM.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.deI.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.deJ.prototype={
$0(){return this.a.e=!1},
$S:0}
B.deK.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.deL.prototype={
$1(d){return this.a.d.NW(0,A.du(0,0,0,C.i.T(d),0,0))},
$S:6}
B.dfs.prototype={
$0(){var x=this.a.a
return B.rZ(x.c,x.d)},
$S:2156}
B.dft.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dfu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dfv.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dfw.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dfx.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dfz.prototype={
$0(){var x=this.a
x.l(new B.dfy(x))},
$S:0}
B.dfy.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hj(0)
else x.qw(0)},
$S:0}
B.dfo.prototype={
$1(d){return this.a.RU(this.b)},
$S:11}
B.dfp.prototype={
$1(d){return this.a.RT(this.b)},
$S:11}
B.dfg.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfh.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfi.prototype={
$1(d){return D.hKF},
$S:z+25}
B.dfn.prototype={
$2(d,e){if(d)B.WE()},
$S:139}
B.dfj.prototype={
$0(){return this.a.abB(this.b)},
$S:0}
B.dfk.prototype={
$0(){return this.a.aby(this.b)},
$S:0}
B.dfl.prototype={
$0(){return this.a.afZ(this.b)},
$S:0}
B.dfm.prototype={
$0(){return this.a.a3c(this.b)},
$S:0}
B.deH.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dfr.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qA(),$async$$0)
case 2:u.l(new B.dfq(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dfq.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cg4.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.nh)},
$S:z+1}
B.cg5.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cg3.prototype={
$2(d,e){return this.bon(d,e)},
bon(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WF(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2157}
B.fIY.prototype={
$1(d){if(d===D.aaT&&(this.a.a.a&30)===0)this.a.h2(0)},
$S:z+27}
B.fIZ.prototype={
$0(){},
$S:12}
B.fJz.prototype={
bpZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fwc(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hwE(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpZ(d,e)},
$S:638}
B.fJy.prototype={
$1(d){var x=this
d.b=new B.fJx(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fJx.prototype={
$1(d){return this.bpY(d)},
bpY(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2a(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.V.aP(0,n,null)
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
return A.b(B.fwc(l,n.b,m,n.c,s.d),$async$$1)
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
x(v=B.aBT.prototype,"gclm","Rt",0)
x(v,"gcmf","K6",0)
x(v,"gclL","yQ",0)
x(v=B.aFU.prototype,"gcdw","afX",0)
x(v,"gcdx","a0c",0)
x(v,"gcBm","ajR",0)
x(v=B.aFX.prototype,"gcdy","a0d",0)
x(v,"gcBn","a3y",0)
x(B.aFV.prototype,"gcdz","afY",0)
x(B.aBS.prototype,"gcdE","cdF",4)
x(v=B.aFW.prototype,"gclM","a1s",0)
x(v,"gczW","czX",4)
x(v,"gb5D","aBt",0)
x(v,"gcCS","akg",0)
x(v,"gbUq","YW",0)
x(v,"gcdD","F_",0)
x(B.aBU.prototype,"gb9s","a3x",0)
x(B.aBR.prototype,"gcdG","a0e",0)
x(v=B.aBX.prototype,"gb4l","cjZ",4)
x(v,"gcdA","ag0",0)
x(v=B.aBV.prototype,"gcyQ","a3i",0)
x(v,"gb2a","ag_",0)
w(B.aBQ.prototype,"gazZ","aA_",8)
x(v=B.aBW.prototype,"gcoA","ai1",0)
x(v,"gbTU","acp",0)
w(v,"gazZ","aA_",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aK,[B.cu4,B.ab2,B.awc,B.aEx,B.aHL,B.jI,B.adC,B.bzi,B.G2,B.YS])
w(B.cu5,B.cu4)
w(B.b7j,B.ab2)
x(A.kv,[B.cu0,B.cu1,B.cu2,B.cu_,B.cu3,B.cu6,B.cu7,B.cu8,B.cu9,B.cua,B.cub,B.cuc,B.cud,B.fCb,B.h1h,B.h1j,B.h1i,B.h1w,B.h1x,B.fES,B.deX,B.deZ,B.deY,B.df1,B.fGR,B.fHk,B.cfz,B.cfG,B.cfH,B.cfC,B.cfA,B.cfD,B.cfE,B.h1u,B.h1v,B.e2d,B.e2m,B.e2k,B.e2l,B.fzb,B.fF3,B.fF4,B.cfY,B.fF6,B.fJl,B.fDf,B.fDg,B.cg2,B.h6L,B.deW,B.deU,B.e29,B.e15,B.e1b,B.e1u,B.e1a,B.e1B,B.e1V,B.e1W,B.e1X,B.e1s,B.e1K,B.e1J,B.e1L,B.e1M,B.e1N,B.e1P,B.e1Q,B.e1I,B.e1d,B.e1e,B.e19,B.e1v,B.e1m,B.e1k,B.e1A,B.e1U,B.e26,B.e27,B.deS,B.deT,B.dff,B.dfe,B.df9,B.df7,B.df5,B.df8,B.dfa,B.df6,B.deP,B.deQ,B.deR,B.deL,B.dfo,B.dfp,B.dfi,B.cg4,B.cg5,B.fIY,B.fJy,B.fJx])
w(B.b7k,B.awc)
x(A.mH,[B.h1g,B.df_,B.df0,B.fGP,B.fGQ,B.fHj,B.e12,B.e2b,B.e2c,B.e2a,B.e2e,B.e2f,B.e2g,B.e2h,B.e2i,B.e2j,B.e13,B.e14,B.fF5,B.deV,B.e1x,B.e1y,B.e16,B.e17,B.e1c,B.e1Y,B.e1Z,B.e1r,B.e1C,B.e1g,B.e1t,B.e1O,B.e1D,B.e1E,B.e1F,B.e1G,B.e1H,B.e1f,B.e18,B.e1w,B.e1p,B.e1i,B.e1n,B.e1o,B.e1q,B.e1h,B.e1z,B.e1R,B.e1S,B.e1T,B.e24,B.e25,B.e20,B.e21,B.e2_,B.e22,B.e23,B.dfb,B.dfc,B.dfd,B.df2,B.df4,B.df3,B.deO,B.deN,B.deM,B.deI,B.deJ,B.deK,B.dfs,B.dft,B.dfu,B.dfv,B.dfw,B.dfx,B.dfz,B.dfy,B.dfg,B.dfh,B.dfj,B.dfk,B.dfl,B.dfm,B.deH,B.dfr,B.dfq,B.fIZ])
x(A.qB,[B.adV,B.Ow,B.ab3,B.PD,B.YR,B.PC,B.G3])
x(A.ag,[B.a_O,B.Wt,B.Wx,B.Wu,B.a_N,B.Wv,B.a_P,B.a_M,B.QV,B.a_R,B.a_L,B.a_S])
x(A.ah,[B.aBT,B.aFU,B.aFX,B.aFV,B.aBS,B.aFW,B.aBU,B.aBR,B.aBX,B.aBV,B.aBQ,B.aBW])
x(A.aw,[B.aeo,B.aBP,B.bgQ,B.adW,B.adU,B.bgR])
x(A.mn,[B.cfF,B.cfB,B.cfJ,B.cfK,B.h2v,B.e1l,B.e1j,B.e28,B.dfn,B.cg3,B.fJz])
x(A.jQ,[B.bml,B.byV])})()
A.nN(b.typeUniverse,JSON.parse('{"b7j":{"ab2":[]},"b7k":{"awc":[]},"a_O":{"ag":[],"w":[]},"aBT":{"ah":["a_O"]},"aeo":{"aw":[],"w":[]},"Wt":{"ag":[],"w":[]},"Wx":{"ag":[],"w":[]},"aFU":{"ah":["Wt"]},"aFX":{"ah":["Wx"]},"bml":{"jQ":[]},"Wu":{"ag":[],"w":[]},"aFV":{"ah":["Wu"]},"a_N":{"ag":[],"w":[]},"Wv":{"ag":[],"w":[]},"adW":{"aw":[],"w":[]},"a_P":{"ag":[],"w":[]},"a_M":{"ag":[],"w":[]},"QV":{"ag":[],"w":[]},"a_R":{"ag":[],"w":[]},"adU":{"aw":[],"w":[]},"a_L":{"ag":[],"w":[]},"a_S":{"ag":[],"w":[]},"aBS":{"ah":["a_N"]},"byV":{"jQ":[]},"aFW":{"ah":["Wv"]},"aBP":{"aw":[],"w":[]},"bgQ":{"aw":[],"w":[]},"aBU":{"ah":["a_P"]},"aBR":{"ah":["a_M"]},"aBX":{"ah":["QV"]},"aBV":{"ah":["a_R"]},"aBQ":{"ah":["a_L"]},"aBW":{"ah":["a_S"]},"bgR":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.aD
return{J:x("nt"),k:x("MY()"),o:x("bq<p,p>"),F:x("zE"),g:x("aA<jI?>"),x:x("aA<~>"),V:x("U<ab>"),O:x("U<u>"),W:x("U<bk>"),Y:x("U<aa<p,Q>>"),t:x("U<aa<p,@>>"),r:x("U<jI>"),w:x("U<+file,name(mK,p)>"),u:x("U<dc>"),s:x("U<p>"),E:x("U<jQ>"),a:x("U<e4>"),p:x("U<w>"),Z:x("U<G>"),G:x("bk"),A:x("cB<ah<ag>>"),n:x("ai<jI>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bz<p,p>"),P:x("aa<p,@>"),f:x("aa<@,@>"),m:x("kM"),e:x("iEQ"),af:x("Fe"),U:x("jI"),b:x("cw"),C:x("aK"),aK:x("yy"),ab:x("G2"),br:x("awc"),v:x("YS"),N:x("p"),X:x("bt<H>"),Q:x("mY"),D:x("e4"),aw:x("bl<p>"),cd:x("X<aa<p,@>>"),c7:x("w"),ch:x("c9<ai<jI>>"),aW:x("c9<e4?>"),aY:x("c9<~>"),cx:x("adV"),b1:x("bo<ai<jI>>"),cf:x("bo<e4?>"),d4:x("bo<~>"),c4:x("aEx"),bG:x("aHL"),q:x("pa"),B:x("pV<G2>"),c6:x("pV<ab3>"),y:x("Q"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bk?"),_:x("ai<jI>?"),aL:x("ai<@>?"),h:x("aa<p,@>?"),l:x("jI?"),R:x("aK?"),c:x("YS?"),d:x("+answerQr,transfer(p,aA<ai<jI>>)?"),cw:x("+qrPayload,token,usesRemaining(p,p,G)?"),L:x("+fileCount,mode,qrPayload(G,Ow,p)?"),aX:x("+fileCount,qrPayload,token(G,p,p)?"),T:x("p?"),K:x("e4?"),cm:x("adC?"),bk:x("aEx?"),ag:x("aHL?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b85=new A.av(C.aD,2,C.r,-1)
D.cbY=new A.a7(C.a5,C.a9,C.x,C.a6k,null,null)
D.b9K=new A.n(null,null,null,C.mR,null,D.cbY,C.m)
D.bbe=new A.n(null,null,null,C.mR,null,C.IT,C.m)
D.ahu=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aiZ=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak0=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alO=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fVN=new A.C("Your team portal",null,C.dn,null,null,null,null,null,null,null,null,null)
D.h9P=new A.C("Share the access code and member password with your team. They only sign in once.",null,C.Fx,null,null,null,null,null,null,null,null,null)
D.dqN=x([D.fVN,C.ak,D.h9P],y.p)
D.bAt=new A.fq(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqN,null)
D.hem=new A.C("Create your organization",null,C.fP,null,null,null,null,null,null,null,null,null)
D.h_n=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fx,null,null,null,null,null,null,null,null,null)
D.dJ4=x([D.hem,C.ak,D.h_n],y.p)
D.bAD=new A.fq(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ4,null)
D.hat=new A.C("Team Member sign-in",null,C.fP,null,null,null,null,null,null,null,null,null)
D.h3l=new A.C("Enter the access code and password from your organization.",null,C.Fx,null,null,null,null,null,null,null,null,null)
D.dGD=x([D.hat,C.ak,D.h3l],y.p)
D.bAN=new A.fq(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGD,null)
D.bH3=new A.P(16,10,16,28)
D.bHc=new A.P(16,14,16,4)
D.bIu=new A.P(20,0,20,16)
D.bJ0=new A.P(20,8,20,16)
D.aoJ=new A.P(24,22,24,20)
D.a4i=new A.a_(63394,"MaterialIcons",!1)
D.arP=new A.a_(63515,"MaterialIcons",!1)
D.bWs=new A.a_(983813,"MaterialIcons",!1)
D.bTA=new A.a_(62867,"MaterialIcons",!1)
D.bXq=new A.ae(D.bTA,44,C.c,null,null,null)
D.bYw=new A.ae(C.kj,null,C.ac,null,null,null)
D.bZV=new A.ae(C.jE,18,null,null,null,null)
D.c0N=new A.ae(D.a4i,26,C.c,null,null,null)
D.c1o=new A.ae(C.DJ,null,null,null,null,null)
D.c20=new A.ae(C.DQ,null,null,null,null,null)
D.c3d=new A.ae(L.a4u,null,null,null,null,null)
D.c3z=new A.ae(C.i3,16,null,null,null,null)
D.c7h=new A.ae(C.tE,16,null,null,null,null)
D.bXI=new A.ae(C.mu,null,null,null,null,null)
D.c89=new A.e9(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2y=new A.ae(C.I9,null,null,null,null,null)
D.c8e=new A.e9(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bY3=new A.ae(C.DT,null,null,null,null,null)
D.c8p=new A.e9(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bY3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYw=x([C.fy,C.b5,C.aD],y.O)
D.cdW=new A.a7(C.ay,C.aC,C.x,D.cYw,null,null)
D.cXR=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.SY=x([C.fy,C.aD],y.O)
D.Tf=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nh=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAo=x([C.n_,C.aD],y.O)
D.evV={iceServers:0}
D.aNw={urls:0}
D.dN_=new A.bq(D.aNw,["stun:stun.l.google.com:19302"],y.o)
D.dMZ=new A.bq(D.aNw,["stun:stun1.l.google.com:19302"],y.o)
D.dfr=x([D.dN_,D.dMZ],A.aD("U<aa<p,p>>"))
D.dM5=new A.bq(D.evV,[D.dfr],A.aD("bq<p,@>"))
D.JY=new B.Ow(0,"lanDirect")
D.UD=new B.Ow(1,"cloudStash")
D.dZZ=new B.Ow(2,"inlineInstant")
D.UE=new B.Ow(3,"webrtcLink")
D.AS=new B.Ow(4,"videoCloud")
D.h9O=new A.C("Receive file",null,C.ns,null,null,null,null,null,null,null,null,null)
D.cNp=x([C.atE,C.aa,D.h9O],y.p)
D.fnT=new A.c3(C.aL,C.b9,C.h,C.l,null,C.p,null,0,D.cNp,null)
D.eDo=new A.D(C.cm,D.fnT,null)
D.fM3=new A.F(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.Jn,null,null,null)
D.fWo=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fM3,null,C.K,null,null,null,null,null,null,null)
D.eCy=new A.D(C.D9,D.fWo,null)
D.bfP=new A.cl(C.z,null,null,D.eCy,null)
D.eJG=new A.cN(0,null,0,28,null,null,D.bfP,null)
D.eK_=new B.ab3(0,"RTCDataChannelConnecting")
D.aT0=new B.ab3(1,"RTCDataChannelOpen")
D.aT1=new B.ab3(3,"RTCDataChannelClosed")
D.eK0=new B.G3(0,"RTCIceConnectionStateNew")
D.eK1=new B.G3(1,"RTCIceConnectionStateChecking")
D.eK2=new B.G3(2,"RTCIceConnectionStateCompleted")
D.eK3=new B.G3(3,"RTCIceConnectionStateConnected")
D.eK4=new B.G3(4,"RTCIceConnectionStateCount")
D.eK5=new B.G3(5,"RTCIceConnectionStateFailed")
D.eK6=new B.G3(6,"RTCIceConnectionStateDisconnected")
D.aT2=new B.G3(7,"RTCIceConnectionStateClosed")
D.aT3=new B.YR(0,"RTCIceGatheringStateNew")
D.eK7=new B.YR(1,"RTCIceGatheringStateGathering")
D.aaT=new B.YR(2,"RTCIceGatheringStateComplete")
D.aaU=new B.PC(0,"RTCPeerConnectionStateClosed")
D.aT4=new B.PC(1,"RTCPeerConnectionStateFailed")
D.aT5=new B.PC(2,"RTCPeerConnectionStateDisconnected")
D.aT6=new B.PC(3,"RTCPeerConnectionStateNew")
D.aT7=new B.PC(4,"RTCPeerConnectionStateConnecting")
D.aT8=new B.PC(5,"RTCPeerConnectionStateConnected")
D.eK8=new B.PD(0,"RTCSignalingStateStable")
D.eK9=new B.PD(1,"RTCSignalingStateHaveLocalOffer")
D.eKa=new B.PD(2,"RTCSignalingStateHaveRemoteOffer")
D.eKb=new B.PD(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKc=new B.PD(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aT9=new B.PD(5,"RTCSignalingStateClosed")
D.ft2=new A.au(160,48)
D.bh4=new A.fo(2,null,null,null,null,C.aD,null,null,null,null)
D.fuA=new A.a6(16,16,D.bh4,null)
D.fZI=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fw3=new A.b0(D.fZI,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6r=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new A.b0(D.h6r,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfq=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwe=new A.b0(D.hfq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZh=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwE=new A.b0(D.fZh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haF=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWk=new A.b0(D.haF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hc7=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new A.b0(D.hc7,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgV=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new A.b0(D.hgV,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.heQ=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new A.b0(D.heQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hg5=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new A.b0(D.hg5,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXS=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.b0(D.fXS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8m=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fz8=new A.b0(D.h8m,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h11=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzF=new A.b0(D.h11,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hh_=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzJ=new A.b0(D.hh_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fY7=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.b0(D.fY7,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWL=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.b0(D.fWL,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTp=new A.C("NGMY DOC SHARE",null,C.aXK,null,null,null,null,null,null,null,null,null)
D.fUR=new A.C("Show this to sender",null,C.iP,null,null,null,null,null,null,null,null,null)
D.fVV=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h_O=new A.C("Organization settings",null,C.cH,null,null,null,null,null,null,null,null,null)
D.h0b=new A.C("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.h1c=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h1K=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4E=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7u=new A.C("Send to their Doc Share",null,C.nq,null,null,null,null,null,null,null,null,null)
D.h7O=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h88=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h8K=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8R=new A.C("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.h9f=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fh,null,null,null,null,null,null,null,null,null)
D.hcD=new A.C("Share files & videos\nwith a scan.",null,C.aXN,null,null,null,null,null,null,null,null,null)
D.hcX=new A.C("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.hKF=new B.a_L(null)
D.aeh=new B.adV(0,"docShare")
D.aei=new B.adV(1,"gate")
D.XL=new B.adV(2,"gateNoIndividual")})();(function staticFields(){$.aQE=null
$.ftK=function(){var x=y.N
return A.S(x,x)}()
$.Hh=A.S(y.N,y.D)
$.ahZ=A.S(y.N,A.aD("mK"))
$.Si=A.S(y.N,y.D)
$.fuq=A.S(y.N,A.aD("adC"))
$.cfX=A.S(y.S,A.aD("bzi"))
$.hwD=1
$.ilQ=null
$.ilP=null
$.id_=null
$.hkS=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iFk","hPp",()=>new B.cu5())
x($,"iDe","hp2",()=>C.a.q(A.bC(A.bC(A.bC(A.HP(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["O9kLqhiBUzWKArma/u18D0eKMAk="]=a.current})($__dart_deferred_initializers__);