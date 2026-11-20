((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={ctz:function ctz(){},
i3l(d){var x=null,w=new B.b6Z(d,D.eGk,new A.pQ(x,x,y.c6),new A.pQ(x,x,y.B))
w.bD4(d)
return w},
b6Z:function b6Z(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctu:function ctu(d){this.a=d},
ctv:function ctv(d){this.a=d},
ctw:function ctw(d){this.a=d},
ctt:function ctt(d){this.a=d},
ctx:function ctx(d){this.a=d},
i3m(d,e){var x=y.N
x=new B.b7_(d,e,A.S(x,y.e),A.S(x,y.z))
x.bD5(d,e)
return x},
b7_:function b7_(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ctA:function ctA(d){this.a=d},
ctB:function ctB(d){this.a=d},
ctC:function ctC(d){this.a=d},
ctD:function ctD(d){this.a=d},
ctE:function ctE(d){this.a=d},
ctF:function ctF(d){this.a=d},
ctG:function ctG(d){this.a=d},
ctH:function ctH(d){this.a=d},
hhx(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.xa.H0(x,"ngmy_doc_share_v1",new B.fzm(),1)},
ia0(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.er(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wU(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cD.aK(d)
return x}catch(w){return v}return v},
So(d,e){return B.ipD(d,e)},
ipD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$So=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQi
x=7
return A.b(o==null?$.aQi=B.hhx():o,$async$So)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mc(s,"blobs","readwrite")
C.iG.mj(J.mb(q,"blobs"),r,d)
x=8
return A.b(J.ox(q),$async$So)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$So,w)},
Sn(d){return B.ipC(d)},
ipC(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQi
x=7
return A.b(o==null?$.aQi=B.hhx():o,$async$Sn)
case 7:s=f
r=J.mc(s,"blobs","readonly")
x=8
return A.b(C.iG.xS(J.mb(r,"blobs"),d),$async$Sn)
case 8:q=f
x=9
return A.b(J.ox(r),$async$Sn)
case 9:o=B.ia0(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$Sn,w)},
aip(d){return B.ipB(d)},
ipB(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aip=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQi
x=7
return A.b(p==null?$.aQi=B.hhx():p,$async$aip)
case 7:s=f
r=J.mc(s,"blobs","readwrite")
C.iG.Gw(J.mb(r,"blobs"),d)
x=8
return A.b(J.ox(r),$async$aip)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aip,w)},
fzm:function fzm(){},
icv(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brQ(w,v))}return u},
hJe(d,e){var x,w={},v=A.aYZ("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fZm(w,v,e)
C.xc.zg(v,"change",new B.fZo(w,v,!1))
C.xc.zg(v,"cancel",new B.fZn(w))
$.eX.mK()
v.click()
A.bO(C.amg,new B.fZl(w),y.H)},
fZm:function fZm(d,e,f){this.a=d
this.b=e
this.c=f},
fZo:function fZo(d,e,f){this.a=d
this.b=e
this.c=f},
fZn:function fZn(d){this.a=d},
fZl:function fZl(d){this.a=d},
DP(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DP=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUQ()?3:4
break
case 3:x=5
return A.b(B.hDP(e,d,s,!0,!1,f,g,h,!1,i),$async$DP)
case 5:x=1
break
case 4:x=6
return A.b(B.S0(d,s,f,g,h,i),$async$DP)
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
return A.b(B.Jr(s,d),$async$DP)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fuJ(s,d),$async$DP)
case 14:x=12
return A.b(r.hDP(q,p,o,n,m,l,k,j,a1,i),$async$DP)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cf(A.ef(new B.fZB(s,i,d,f,g,h),!1,null,y.H)),$async$DP)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cf(A.ef(new B.fZC(s,i,d,f,g,h),!1,null,y.H)),$async$DP)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DP,w)},
S0(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S0=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1I(e),$async$S0)
case 3:u=k
x=4
return A.b(B.ara(d,e,!1),$async$S0)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jr(e,d),$async$S0)
case 7:if(k){v=D.adL
x=1
break}x=8
return A.b(B.Wl(e),$async$S0)
case 8:v=t?D.Xg:D.adM
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1G(d,e)){v=D.adL
x=1
break}x=11
return A.b(B.Wl(e),$async$S0)
case 11:v=t?D.Xg:D.adM
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hcm(d,e)){v=D.adL
x=1
break}x=14
return A.b(B.Wl(e),$async$S0)
case 14:v=D.Xg
x=1
break
case 13:v=t?D.Xg:D.adM
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
fuJ(d,e){var x=0,w=A.j(y.y),v
var $async$fuJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1G(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1I(d),$async$fuJ)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuJ,w)},
hDP(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cf(A.ef(new B.fC1(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hyB(d,e,f,g,h,i,j){return new B.a_B(e,j,d,g,h,i,f,null)},
fDW(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fDW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fDZ(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fDW)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDW,w)},
fEq(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fEq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.ax,u)
s=new A.at(C.ax,u)
r=new A.at(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fEs(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fEq)
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
return A.i($async$fEq,w)},
hhJ(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fRl(d,e){var x=0,w=A.j(y.H),v
var $async$fRl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wl(e),$async$fRl)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eb()
case 1:return A.h(v,w)}})
return A.i($async$fRl,w)},
fZB:function fZB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZC:function fZC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adF:function adF(d,e){this.a=d
this.b=e},
fC1:function fC1(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_B:function a_B(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBD:function aBD(){this.c=this.a=this.d=null},
deh:function deh(d,e){this.a=d
this.b=e},
dee:function dee(d){this.a=d},
deg:function deg(d){this.a=d},
def:function def(d){this.a=d},
dej:function dej(){},
dei:function dei(d){this.a=d},
ae8:function ae8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEh:function aEh(d,e){this.a=d
this.b=e},
aHs:function aHs(d,e,f){this.a=d
this.b=e
this.c=f},
fDZ:function fDZ(d,e,f){this.a=d
this.b=e
this.c=f},
fDX:function fDX(d){this.a=d},
fDY:function fDY(d,e,f){this.a=d
this.b=e
this.c=f},
fEs:function fEs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEr:function fEr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cf8(d,e,f,g,h){return B.hZa(d,e,f,g,h)},
hZa(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cf8=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ic(r.dO(d,new B.cf9(s,e,h,g,f,q),y.g),y.l),$async$cf8)
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
return A.i($async$cf8,w)},
b1D(d,e,f,g,h){return B.hZb(d,e,f,g,h)},
hZb(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1D=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awI("GET",d)
o=A.h8L()
if(o==null)o=new A.MO(A.a([],y.W))
x=7
return A.b(o.f9(0,s).df(0,C.H8),$async$b1D)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D5(),$async$b1D)
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
p=A.aa(m)
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
return A.i($async$b1D,w)},
b1C(d){return B.hZ8(d)},
hZ8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1C=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).df(0,C.ot),$async$b1C)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.W.aP(0,A.m5(A.m2(p.e)).cE(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
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
return A.i($async$b1C,w)},
cf7(d){return B.hZ9(d)},
hZ9(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cf7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).df(0,C.qG),$async$cf7)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m5(A.m2(q.e)).cE(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.aa(o)
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
return A.i($async$cf7,w)},
cf9:function cf9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jD:function jD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jp(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hZg(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.X(t,u))return B.Jp(C.a.aY(t,u.length))}return null},
hZh(d){var x=B.Jp(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hZc(){var x,w=$.ou(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8f(d){return B.hZd(d)},
hZd(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8f)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$a8f,w)},
a8g(d,e){return B.hZe(d,e)},
hZe(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8g=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hQ(d,e,!1,!1,C.cR,null),$async$a8g)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$a8g,w)},
Ck(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Ck)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jp(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8h(r),$async$Ck)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8f("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ck)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jp(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aG("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ck)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hZc()
x=14
return A.b(B.a8h(m),$async$Ck)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8g("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 15:k=f
x=16
return A.b(B.a8g("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aG("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ck)
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
a8h(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jp(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8f("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8h)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8h,w)},
a8i(d,e,f,g){return B.hZi(d,e,f,g)},
hZi(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8i=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jp(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8h(r),$async$a8i)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cC(d,0,new B.cff())>1048576||g.aS(d,new B.cfg())){v=B.Fq(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8t("myCode",d,a0),$async$a8i)
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
v=B.Fq(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1L(u,g.gJ(d),a0),$async$a8i)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ou().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dO(d,new B.cfh(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1E(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8i)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
Fq(d,e,f,g,h){return B.hZf(d,e,f,g,h)},
hZf(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fq=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fq)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cC(a6,0,new B.cfb())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.T(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ou().aw(9999)
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
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Jt(a9,q)
a0=new A.Li(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fq)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b1(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.ny(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abU(a1.a,a4,"media",a1.d,a2).xP(m,n,new A.EE(!0,q.c)),$async$Fq)
case 12:J.c4(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fq)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSX(r),$async$Fq)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dO(a6,new B.cfc(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1E(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fq)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSX(r),$async$Fq)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fq,w)},
b1E(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8f(t),$async$b1E)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.cfa(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8g(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1E,w)},
Oo(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oo=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8f("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oo)
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
return A.b(B.b1F(k,a0),$async$Oo)
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
return A.b(B.b1K(h),$async$Oo)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Ws(g,a0),$async$Oo)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.Y(r,new B.cfd(),q),n)
d=A.B(new A.Y(r,new B.cfe(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cT(d,0,A.dA(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a8g("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Oo)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oo,w)},
b1F(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1F=A.e(function(f,g){if(f===1)return A.f(g,w)
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
o=A.aI(o.h(p,"partCount"))
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.itJ(k,j)
C.d.u(s,i)
x=5
return A.b(B.DN(l,m,"Received via My Code",t,e,i),$async$b1F)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSX(s),$async$b1F)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1F,w)},
cff:function cff(){},
cfg:function cfg(){},
cfh:function cfh(){},
cfb:function cfb(){},
cfc:function cfc(){},
cfa:function cfa(){},
cfd:function cfd(){},
cfe:function cfe(){},
fZy(d,e){var x=0,w=A.j(y.H)
var $async$fZy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cf(A.ef(new B.fZz(e),!1,null,y.H)),$async$fZy)
case 2:return A.h(null,w)}})
return A.i($async$fZy,w)},
bH4(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bH4=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cf(A.ef(new B.fZA(g,e,f),!1,null,y.y)),$async$bH4)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH4,w)},
fZz:function fZz(d){this.a=d},
fZA:function fZA(d,e,f){this.a=d
this.b=e
this.c=f},
Wi:function Wi(d,e){this.c=d
this.a=e},
aFE:function aFE(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e04:function e04(d,e){this.a=d
this.b=e},
Wm:function Wm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFH:function aFH(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e1d:function e1d(d){this.a=d},
e1e:function e1e(d){this.a=d},
e1f:function e1f(d){this.a=d},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1g:function e1g(d){this.a=d},
e1h:function e1h(d){this.a=d},
e1i:function e1i(d,e){this.a=d
this.b=e},
e1j:function e1j(d,e){this.a=d
this.b=e},
e1k:function e1k(d,e){this.a=d
this.b=e},
e1l:function e1l(d){this.a=d},
e1o:function e1o(){},
e1m:function e1m(d){this.a=d},
e1n:function e1n(d,e){this.a=d
this.b=e},
blX:function blX(){},
Wj:function Wj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFF:function aFF(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e05:function e05(d){this.a=d},
e06:function e06(d){this.a=d},
hcn(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hZk(d){var x=d.l5
if(x>=0)return x
return 4.99},
hZj(d){var x=d.lL,w=y.N
w=x.jq(x,new B.cfj(),w,w)
return w},
htz(d){var x=d.kI,w=y.N
w=x.jq(x,new B.cfk(),w,w)
return w},
b1I(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1I)
case 7:s=f
r=A.w(p)
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
return A.i($async$b1I,w)},
a8k(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8k)
case 4:x=3
return A.b(g.aG("String","ngmy_doc_share_path_"+u,e),$async$a8k)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
Wl(d){var x=0,w=A.j(y.H),v,u
var $async$Wl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wl)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
hcm(d,e){var x,w,v
if(B.hZk(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hZj(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1G(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.htz(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
htA(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.htz(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
arb(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$arb)
case 7:s=f
r=A.w(p)
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
return A.i($async$arb,w)},
arc(d){var x=0,w=A.j(y.H),v,u,t
var $async$arc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arb(d),$async$arc)
case 3:u=f
x=5
return A.b(A.az(),$async$arc)
case 5:x=4
return A.b(f.aG("Int","ngmy_doc_share_usage_"+t,u+1),$async$arc)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arc,w)},
ara(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ara=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hcn(d)
if(u<=0){v=!1
x=1
break}if(B.hcm(d,e)){v=!1
x=1
break}x=3
return A.b(B.arb(e),$async$ara)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ara,w)},
b1H(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jr(e,d),$async$b1H)
case 3:if(g){v=-1
x=1
break}u=B.hcn(d)
if(u<=0){v=-1
x=1
break}if(B.hcm(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arb(e),$async$b1H)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1H,w)},
cfm(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jr(e,d),$async$cfm)
case 3:if(h){v=!1
x=1
break}v=B.ara(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfm,w)},
cfl(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cfl=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cfm(d,u,i.gUQ()),$async$cfl)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfl,w)},
a8j(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8j=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUQ()){v=!0
x=1
break}if(B.b1G(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.Uy),$async$a8j)
case 5:x=k?3:4
break
case 3:B.htA(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8j)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Uy,"Doc Share for Organizations"),$async$a8j)
case 7:if(!k){v=!1
x=1
break}B.htA(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8j)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
cfj:function cfj(){},
cfk:function cfk(){},
h_y(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h_y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h_y)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fqZ.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fqZ.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_y,w)},
ivU(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fqZ.bq($.fqZ,new B.h_A(d))},
h_A:function h_A(d){this.a=d},
fsD(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fsD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.mZ(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fsD)
case 3:C.Bx.ft(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsD,w)},
ahk(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.frF.n(0,d,new B.adm(A.bs(e,!0,v)))
x=3
return A.b(A.az(),$async$ahk)
case 3:x=2
return A.b(h.aG("String",d+"_manifest",C.W.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahk)
case 2:return A.h(null,w)}})
return A.i($async$ahk,w)},
ahe(d){return B.iep(d)},
iep(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.frF.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ahe)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.W.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fwp(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.adm(r)
$.frF.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahe,w)},
RR(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.Ha.n(0,d,u)
x=3
return A.b(B.So(d,u),$async$RR)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RR,w)},
aQD(d){return B.ien(d)},
ien(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Ha.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sn(d),$async$aQD)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.Ha.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQD)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aK(r)
x=!J.ct(q)?9:10
break
case 9:B.RR(d,q)
x=11
return A.b(J.fN(s,d),$async$aQD)
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
return A.i($async$aQD,w)},
ias(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.er(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wU(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a36(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a36=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bF,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fCd(r,t),!1,s)
A.fC(r,"error",new B.fCe(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.Op,new B.fCf())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a36,w)},
aQY(d,e,f){return B.igN(d,e,f)},
igN(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQY=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a36(i),$async$aQY)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.So(o,p),$async$aQY)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahk(k,j,s),$async$aQY)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQY,w)},
aQX(d,e,f){return B.igM(d,e,f)},
igM(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQX=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQY(d,e,f),$async$aQX)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a36(f),$async$aQX)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Ha.n(0,s,r)
$.S9.n(0,s,r)
x=11
return A.b(B.RR(s,r),$async$aQX)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQX,w)},
Cl(d,e,f,g,h,i){return B.hZt(d,e,f,g,h,i)},
hZt(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1O(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RR(s,d),$async$Cl)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Cl)
case 10:r=a2
x=11
return A.b(r.aG("String",s,C.cL.gco().aK(d)),$async$Cl)
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
return A.b(B.Bc(e),$async$Cl)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Hk(e,j),$async$Cl)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cl,w)},
Wn(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wn=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bc(d),$async$Wn)
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
k=B.htC(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1O(),null)
$.ahJ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a36(o),$async$Wn)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.Ha.n(0,h,g)
$.S9.n(0,h,g)
B.RR(h,g)
x=9
break
case 10:x=11
return A.b(B.aQX(d,m,o),$async$Wn)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hk(d,t),$async$Wn)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
hcr(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hcr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.htC(r,C.d.gal(r.split(".")),null)
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
return A.i($async$hcr,w)},
Js(d,e,f,g,h,i){return B.hZs(d,e,f,g,h,i)},
hZs(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
j=new A.Li(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Js)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.SY(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kL(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.So(k,l),$async$Js)
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
return A.b(B.So(k,new Uint8Array(A.cc(n))),$async$Js)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahk(r,q,g),$async$Js)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1O(),null)
x=17
return A.b(B.Bc(d),$async$Js)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Hk(d,e),$async$Js)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Js,w)},
Wp(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wp=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahJ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a36(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahe(s),$async$Wp)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sn(u[o]),$async$Wp)
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
v=A.wU(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S9.h(0,s)
if(i==null)i=$.Ha.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rU(d,e),$async$Wp)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S9.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wU(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
htC(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rU(d,e){return B.hZu(d,e)},
hZu(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S9.h(0,f)
if(e==null)e=$.Ha.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahJ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a36(s),$async$rU)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.Ha.n(0,f,r)
$.S9.n(0,f,r)
B.RR(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahe(f),$async$rU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAn(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sn(g[l]),$async$rU)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqr()
if(!C.aI.gau(r)){$.Ha.n(0,f,r)
$.S9.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQD(f),$async$rU)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S9.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wp(a0,a1,0,g),$async$rU)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.Ha.n(0,f,h)
$.S9.n(0,f,h)
B.RR(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rU,w)},
hZx(d){var x,w,v=$.ahJ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hZy(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hZv(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ari(d,e,f,g,h){return B.hZw(d,e,f,g,h)},
hZw(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ari=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahJ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a36(s),$async$ari)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rU(g,e),$async$ari)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f0().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.iF(d).xP(h,r,new A.EE(!0,e.c)),$async$ari)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
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
return A.i($async$ari,w)},
htE(d,e,f,g,h){var x,w,v,u,t=$.htD
$.htD=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfx.n(0,t,new B.byT(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAn(u)))
return t},
hcs(d){var x=0,w=A.j(y.H)
var $async$hcs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hcs,w)},
Jt(d,e){var $async$Jt=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahJ.h(0,h)
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
return A.qx(B.Wp(d,e,p,o<q?o:q),$async$Jt,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qx(A.GI(n),$async$Jt,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qx(B.ahe("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Jt,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qx(B.Sn(h[l]),$async$Jt,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qx(A.GI(k),$async$Jt,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qx(B.rU(d,e),$async$Jt,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qx(A.GI(A.wU(j,p,o<i?o:i)),$async$Jt,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qx(null,0,w)
case 2:return A.qx(t.at(-1),1,w)}})
var x=0,w=A.hCD($async$Jt,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hEz(w)},
b1Q(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfx.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a66(),$async$b1Q)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1Q,w)},
Wo(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfx.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a66(),$async$Wo)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahk(r.c,u,r.z),$async$Wo)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1O(),null)
u=r.a
x=5
return A.b(B.Bc(u),$async$Wo)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Hk(u,s),$async$Wo)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wo,w)},
a8q(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfx.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aip(u[s]),$async$a8q)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8q,w)},
cfz(d,e,f){var x=0,w=A.j(y.H)
var $async$cfz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDW(d,e,f),$async$cfz)
case 2:return A.h(null,w)}})
return A.i($async$cfz,w)},
cfA(d,e,f){var x=0,w=A.j(y.H)
var $async$cfA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDX(d,e,f),$async$cfA)
case 2:return A.h(null,w)}})
return A.i($async$cfA,w)},
Fr(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bc(d),$async$Fr)
case 2:p=g
J.mW(p,new B.cfy(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Ha.W(0,v)
$.ahJ.W(0,e)
x=3
return A.b(B.ahe(v),$async$Fr)
case 3:u=g
$.frF.W(0,v)
x=4
return A.b(A.az(),$async$Fr)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fr)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fr)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aip(s[q]),$async$Fr)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aip(v),$async$Fr)
case 13:x=14
return A.b(B.Hk(d,p),$async$Fr)
case 14:return A.h(null,w)}})
return A.i($async$Fr,w)},
b1P(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rU(d,e),$async$b1P)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fsD(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1P,w)},
Bc(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bc)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.W.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fCg(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bc,w)},
Hk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fGs(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aG("String","ngmy_doc_share_index_v1_"+u,C.W.av(t,null)),$async$Hk)
case 3:return A.h(null,w)}})
return A.i($async$Hk,w)},
bDW(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bc(d),$async$bDW)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fAq(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGA(f))
x=4
return A.b(B.Hk(d,u),$async$bDW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDW,w)},
bDX(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bc(d),$async$bDX)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fAr(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPS(f))
x=4
return A.b(B.Hk(d,u),$async$bDX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDX,w)},
adm:function adm(d){this.a=d},
fwp:function fwp(){},
fCd:function fCd(d,e){this.a=d
this.b=e},
fCe:function fCe(d){this.a=d},
fCf:function fCf(){},
cfy:function cfy(d){this.a=d},
byT:function byT(d,e,f,g,h,i,j,k,l){var _=this
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
fCg:function fCg(){},
fGs:function fGs(){},
fAq:function fAq(d){this.a=d},
fAr:function fAr(d){this.a=d},
a8r(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aS(d,new B.cfD())?3:4
break
case 3:x=5
return A.b(B.b1R(d,e),$async$a8r)
case 5:u=g
if(u!=null){t=u.c
B.Oq(d,u.b,e,t)}v=u
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
return A.b(B.b1M(s),$async$a8r)
case 10:case 9:if(g){v=new A.Rc(1,D.Ub,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wq(d,e),$async$a8r)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wv(!0,!0,d,e),$async$a8r)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Oq(d,D.Az,e,t)
v=new A.Rc(p,D.Az,t)
x=1
break}v=B.cfC(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8r,w)},
Wq(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8t(null,d,e),$async$Wq)
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
return A.b(B.b1L(p,d.length,e),$async$Wq)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfA(e,C.d.gH(d).a,r.b),$async$Wq)
case 7:case 6:q=r.a
x=8
return A.b(B.Oq(d,D.Ub,e,q),$async$Wq)
case 8:v=new A.Rc(d.length,D.Ub,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
Wr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.X(d.c,"video/")||d.mR(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8s(d,e),$async$Wr)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfv(s,d,e,t),$async$Wr)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1M(t),$async$Wr)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rU(e,d),$async$Wr)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wq(A.a([d],y.r),e),$async$Wr)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wr,w)},
Wt(){var x=0,w=A.j(y.H)
var $async$Wt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hcl(),$async$Wt)
case 2:x=3
return A.b(B.aTj(),$async$Wt)
case 3:return A.h(null,w)}})
return A.i($async$Wt,w)},
a8s(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1O()
x=3
return A.b(B.cfz(e,d.a,u),$async$a8s)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8s,w)},
Oq(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Oq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ub&&C.a.X(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8s(p,f),$async$Oq)
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
return A.b(B.cfu(o,p,u,f),$async$Oq)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfv(o,p,f,t),$async$Oq)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cft(o,u,p,f),$async$Oq)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Oq,w)},
b1R(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfB(e,d),$async$b1R)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wv(!1,!0,d,e),$async$b1R)
case 4:u=g
if(u!=null){t=u.b
v=new A.Rc(u.a,D.Az,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1R,w)},
cfB(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wp(d,s,0,1),$async$cfB)
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
return A.i($async$cfB,w)},
cfC(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cfC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8t(null,d,e),$async$cfC)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.htB(u)
if(t.length>800){v=null
x=1
break}v=new A.Rc(d.length,D.dWm,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfC,w)},
arj(d,e,f){return B.hZB(d,e,f)},
hZB(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arj=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.mX(g,1)
x=B.hcq(g)?3:4
break
case 3:x=5
return A.b(B.cfw(g),$async$arj)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mX(g,13))
try{k=B.Fs(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mX(g,13))
u=9
x=12
return A.b(B.b1K(q),$async$arj)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ws(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.hcp(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ws(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.Ju(C.a.i(J.mX(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.Ju(C.a.i(J.mX(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Ju(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Ws(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arj,w)},
Ju(d,e,f){return B.hZz(d,e,f)},
hZz(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ju=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.X(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.X(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.X(e,"http://")&&!C.a.X(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1C(r),$async$Ju)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1C(A.cD(s,0,null)),$async$Ju)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cf8(o,r,a1,n,a2),$async$Ju)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.cf7(q),$async$Ju)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Ws(l,a2),$async$Ju)
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
k=A.aa(d)
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
a8t(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rU(f,r),$async$a8t)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cL.gco().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
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
return A.i($async$a8t,w)},
Ws(d,e){return B.hZA(d,e)},
hZA(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ws=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cD.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cl(i,a3,d,k,l,o),$async$Ws)
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
g=A.aa(a1)
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
return A.i($async$Ws,w)},
Op:function Op(d,e){this.a=d
this.b=e},
cfD:function cfD(){},
a2G(d){var x=A.O(d).ax.a===C.I,w=x?D.ajr:D.agW,v=x?D.ale:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aiq:C.bm
return new A.aIK([w,s,v,u,t,x?C.fq:C.bQ])},
hKf(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h3Q(e),d,null,!0,!0,y.N)},
cfi(d,e,f,g,h,i,j,k,l){return new B.Wk(e,l,d,f,k,j,g,h,i,null)},
a_D(d,e,f,g,h,i,j){return new B.bgt(g,h,j,e,i,d,f,null)},
h3Q:function h3Q(d){this.a=d},
a_A:function a_A(d,e){this.c=d
this.a=e},
aBC:function aBC(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ded:function ded(d){this.a=d},
deb:function deb(d){this.a=d},
dec:function dec(d){this.a=d},
byv:function byv(){},
Wk:function Wk(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFG:function aFG(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e1b:function e1b(d){this.a=d},
e0z:function e0z(d,e){this.a=d
this.b=e},
e0A:function e0A(d,e){this.a=d
this.b=e},
e08:function e08(d,e,f){this.a=d
this.b=e
this.c=f},
e07:function e07(d){this.a=d},
e09:function e09(d,e){this.a=d
this.b=e},
e0e:function e0e(d,e,f){this.a=d
this.b=e
this.c=f},
e0d:function e0d(d){this.a=d},
e1_:function e1_(d,e){this.a=d
this.b=e},
e10:function e10(d){this.a=d},
e0w:function e0w(d,e,f){this.a=d
this.b=e
this.c=f},
e0t:function e0t(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e0c:function e0c(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0D:function e0D(){},
e0i:function e0i(d){this.a=d},
e0X:function e0X(d,e){this.a=d
this.b=e},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0v:function e0v(d,e){this.a=d
this.b=e},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0M:function e0M(d){this.a=d},
e0L:function e0L(d){this.a=d},
e0N:function e0N(){},
e0O:function e0O(){},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0R:function e0R(){},
e0S:function e0S(d){this.a=d},
e0K:function e0K(d,e){this.a=d
this.b=e},
e0F:function e0F(d){this.a=d},
e0G:function e0G(d){this.a=d},
e0H:function e0H(d){this.a=d},
e0I:function e0I(d){this.a=d},
e0J:function e0J(d){this.a=d},
e0f:function e0f(){},
e0g:function e0g(d){this.a=d},
e0h:function e0h(d,e){this.a=d
this.b=e},
e0b:function e0b(d,e){this.a=d
this.b=e},
e0a:function e0a(d,e,f){this.a=d
this.b=e
this.c=f},
e0x:function e0x(d){this.a=d},
e0y:function e0y(d,e,f){this.a=d
this.b=e
this.c=f},
e0r:function e0r(d,e){this.a=d
this.b=e},
e0n:function e0n(d){this.a=d},
e0k:function e0k(d,e,f){this.a=d
this.b=e
this.c=f},
e0o:function e0o(d){this.a=d},
e0p:function e0p(d){this.a=d},
e0q:function e0q(){},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0l:function e0l(d){this.a=d},
e0j:function e0j(d,e,f){this.a=d
this.b=e
this.c=f},
e0m:function e0m(){},
e0C:function e0C(d){this.a=d},
e0B:function e0B(d,e){this.a=d
this.b=e},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0T:function e0T(d){this.a=d},
e0U:function e0U(d,e){this.a=d
this.b=e},
e0V:function e0V(d){this.a=d},
e18:function e18(d){this.a=d},
e16:function e16(d){this.a=d},
e17:function e17(d){this.a=d},
e19:function e19(){},
e1a:function e1a(d,e){this.a=d
this.b=e},
e12:function e12(d,e){this.a=d
this.b=e},
e13:function e13(d,e,f){this.a=d
this.b=e
this.c=f},
e11:function e11(d,e,f){this.a=d
this.b=e
this.c=f},
e14:function e14(d,e){this.a=d
this.b=e},
e15:function e15(d,e){this.a=d
this.b=e},
aBz:function aBz(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgs:function bgs(d,e,f){this.c=d
this.d=e
this.a=f},
de9:function de9(){},
dea:function dea(){},
adG:function adG(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dex:function dex(){},
dew:function dew(d){this.a=d},
a_C:function a_C(d,e,f){this.c=d
this.d=e
this.a=f},
aBE:function aBE(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
det:function det(d){this.a=d},
deu:function deu(d,e,f){this.a=d
this.b=e
this.c=f},
dev:function dev(d,e){this.a=d
this.b=e},
der:function der(d,e){this.a=d
this.b=e},
dep:function dep(d){this.a=d},
den:function den(d){this.a=d},
dek:function dek(d){this.a=d},
deq:function deq(d){this.a=d},
dem:function dem(d){this.a=d},
des:function des(d){this.a=d},
deo:function deo(d){this.a=d},
del:function del(d){this.a=d},
a_z:function a_z(d,e,f){this.c=d
this.d=e
this.a=f},
aBB:function aBB(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
de6:function de6(d){this.a=d},
de5:function de5(d,e){this.a=d
this.b=e},
de7:function de7(d){this.a=d},
de4:function de4(d,e){this.a=d
this.b=e},
de8:function de8(d){this.a=d},
de3:function de3(d,e){this.a=d
this.b=e},
de_:function de_(d){this.a=d},
de0:function de0(d){this.a=d},
de1:function de1(d,e){this.a=d
this.b=e},
de2:function de2(d){this.a=d},
QM:function QM(d,e,f){this.c=d
this.d=e
this.a=f},
aBH:function aBH(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
deK:function deK(d){this.a=d},
deL:function deL(d){this.a=d},
deM:function deM(d){this.a=d},
deN:function deN(d){this.a=d},
deO:function deO(d,e){this.a=d
this.b=e},
deP:function deP(d){this.a=d},
deR:function deR(d){this.a=d},
deQ:function deQ(d){this.a=d},
a_E:function a_E(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBF:function aBF(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
deG:function deG(d,e){this.a=d
this.b=e},
deH:function deH(d,e){this.a=d
this.b=e},
dey:function dey(d,e,f){this.a=d
this.b=e
this.c=f},
dez:function dez(d){this.a=d},
deA:function deA(){},
deF:function deF(){},
deB:function deB(d,e){this.a=d
this.b=e},
deC:function deC(d,e){this.a=d
this.b=e},
deD:function deD(d,e){this.a=d
this.b=e},
deE:function deE(d,e){this.a=d
this.b=e},
adE:function adE(d,e){this.c=d
this.a=e},
ddZ:function ddZ(d){this.a=d},
a_y:function a_y(d){this.a=d},
aBA:function aBA(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_F:function a_F(d,e){this.c=d
this.a=e},
aBG:function aBG(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
deJ:function deJ(d){this.a=d},
deI:function deI(d){this.a=d},
bgt:function bgt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hZC(){var x,w=$.ou(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
Or(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Or=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Or)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Or)
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
q=A.aa(n)
$.am.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Or,w)},
a8u(d){return B.hZD(d)},
hZD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8u)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cR,null),$async$a8u)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8u,w)},
Wu(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Or(),$async$Wu)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dI(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8u(s),$async$Wu)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wu,w)},
Wv(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wv)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bs(f,!0,y.U)
else{t=A.T(f).k("Y<1>")
u=A.B(new A.Y(f,new B.cfF(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hZC()
t=A.T(u).k("N<1,ac<q,aK>>")
r=A.B(new A.N(u,new B.cfG(s),t),t.k("ak.E"))
x=6
return A.b(B.Or(),$async$Wv)
case 6:q=i
J.aJ(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8u(q),$async$Wv)
case 7:x=8
return A.b(B.a8v(r,u,g,s),$async$Wv)
case 8:v=new A.bsl(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wv,w)},
ark(d){var x=0,w=A.j(y.y),v,u,t
var $async$ark=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Or(),$async$ark)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ark,w)},
cfH(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Or(),$async$cfH)
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
return A.i($async$cfH,w)},
a8v(d,e,f,g){return B.hZE(d,e,f,g)},
hZE(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8v=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ari("media",r,new B.cfE(s,e,g),f,q),$async$a8v)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wu(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8v)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wu(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8v)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wu(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8v)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8v,w)},
Fs(d,e,f){return B.hZF(d,e,f)},
hZF(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fs=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.X(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fs)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ark(b3),$async$Fs)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fs)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ark(b3),$async$Fs)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Or(),$async$Fs)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aI(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.M(a2)
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
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.ny(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abU(a8.a,b0,"media",a8.d,a9).Dq(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1D(k,n,o,s,b7),$async$Fs)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
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
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.ny(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abU(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fs)
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
a0=A.dI(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8u(e),$async$Fs)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fs,w)},
cfF:function cfF(){},
cfG:function cfG(d){this.a=d},
cfE:function cfE(d,e,f){this.a=d
this.b=e
this.c=f},
aTj(){var x=0,w=A.j(y.H),v,u
var $async$aTj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i9L=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTj)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTj)
case 3:u=$.hhV
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTj)
case 4:$.hhV=$.iiA=$.iiB=null
return A.h(null,w)}})
return A.i($async$aTj,w)},
fG3(d){var x=0,w=A.j(y.H),v,u
var $async$fG3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aam){x=1
break}u=new A.bn($.bF,y.d4)
d.c=new B.fG4(new A.c7(u,y.aY))
x=3
return A.b(u.ix(0,C.ie,new B.fG5()),$async$fG3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fG3,w)},
iiy(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hZm(x):x},
hhZ(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.X(u,"WR")){v=B.arm(u)
x=1
break}v=B.hcp(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhZ,w)},
hhY(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.X(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.X(u,"WR")){v=B.arn(u)
x=1
break}v=B.hcp(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhY,w)},
h_h(d){var x=0,w=A.j(y.T),v
var $async$h_h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arn(d),$async$h_h)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_h,w)},
bES(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bES=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hhY(d),$async$bES)
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
return A.i($async$bES,w)},
ftq(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ftq=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wo(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cl(d.aqr(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftq,w)},
Hm(d,e,f){return B.ikS(d,e,f)},
ikS(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hhZ(a1),$async$Hm)
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
if(C.a.X(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.X(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hMf().aGR(D.dIu,null),$async$Hm)
case 4:l=d.hhV=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAn(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bF,y.b1)
l.y=new B.fGF(f,k,new B.fGG(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a99(0,new B.YG(r,"offer")),$async$Hm)
case 5:d=l
x=7
return A.b(l.amQ(0),$async$Hm)
case 7:x=6
return A.b(d.a91(0,a4),$async$Hm)
case 6:x=8
return A.b(B.fG3(l),$async$Hm)
case 8:x=9
return A.b(l.are(),$async$Hm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iiy(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.W.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aro(m,h),$async$Hm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.htB(h)
case 11:v=new A.brA(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hm,w)},
fG4:function fG4(d){this.a=d},
fG5:function fG5(){},
fGG:function fGG(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGF:function fGF(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fGE:function fGE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
imX(d){switch(d){case"new":return D.eGl
case"checking":return D.eGm
case"connected":return D.eGo
case"completed":return D.eGn
case"failed":return D.eGq
case"disconnected":return D.eGr
case"closed":return D.aSs
case"count":return D.eGp}return D.aSs},
imY(d){switch(d){case"new":return D.aSt
case"gathering":return D.eGs
case"complete":return D.aam}return D.aSt},
ixs(d){switch(d){case"stable":return D.eGt
case"have-local-offer":return D.eGu
case"have-local-pranswer":return D.eGw
case"have-remote-offer":return D.eGv
case"have-remote-pranswer":return D.eGx
case"closed":return D.aSz}return D.aSz},
ivB(d){switch(d){case"new":return D.aSw
case"connecting":return D.aSx
case"connected":return D.aSy
case"closed":return D.aan
case"disconnected":return D.aSv
case"failed":return D.aSu}return D.aan},
aaQ:function aaQ(d,e){this.a=d
this.b=e},
Pv:function Pv(d,e){this.a=d
this.b=e},
YF:function YF(d,e){this.a=d
this.b=e},
Pu:function Pu(d,e){this.a=d
this.b=e},
FX:function FX(d,e){this.a=d
this.b=e},
cty:function cty(){},
heb(d){var x=new B.FW()
x.a=d
x.b=!0
return x},
FW:function FW(){this.b=this.a=$},
aaP:function aaP(){},
avV:function avV(){},
YG:function YG(d,e){this.a=d
this.b=e},
hcl(){var x=0,w=A.j(y.H)
var $async$hcl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hcl,w)},
hco(d,e,f){var x=0,w=A.j(y.T),v
var $async$hco=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.X(e.c,"video/")||e.mR(D.n7))){v=null
x=1
break}v=B.h_y(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hco,w)},
htB(d){var x,w=C.agm.a5Q(C.dW.aK(d),null)
if(w.length===0){x=C.dW.aK(d)
return C.cL.gco().aK(x)}return C.cL.gco().aK(w)},
hZl(d){var x,w,v=C.cD.aK(d)
try{x=C.cb.cE(0,C.agl.bgP(v,!1))
return x}catch(w){x=C.cb.cE(0,v)
return x}},
hcp(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.X(t,s))return B.hZl(C.a.aY(t,s.length))
w=e+"|"
if(C.a.X(t,w)){x=C.a.aY(t,w.length)
try{v=C.cb.cE(0,C.cD.aK(x))
return v}catch(u){return x}}return null},
hZm(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.X(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hZn(){var x,w=$.ou(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1J(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1J)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$b1J,w)},
cfn(d,e){return B.hZo(d,e)},
hZo(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cR,null),$async$cfn)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$cfn,w)},
b1M(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1J(d),$async$b1M)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1M,w)},
b1L(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1L=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hZn()
r=C.a.i(f)
t=C.dW.aK(s)
x=3
return A.b(B.cfn(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gco().aK(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1L)
case 3:if(!h){v=null
x=1
break}v=new A.a1F("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1L,w)},
b1K(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1J(o),$async$b1K)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cE(0,C.cD.aK(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1K,w)},
cfo(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cfo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bFR("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cR),$async$cfo)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cfo,w)},
b1N(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jq(),$async$b1N)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1N,w)},
arf(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arf)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1N(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arf,w)},
ard(d,e){var x=0,w=A.j(y.H)
var $async$ard=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ard)
case 3:x=2
return A.b(g.aG("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ard)
case 2:return A.h(null,w)}})
return A.i($async$ard,w)},
a8m(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8m=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8m)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8m)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dr(s)
if(q.an(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8l(s),$async$a8m)
case 5:x=6
return A.b(B.ard(f,u),$async$a8m)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8m,w)},
a8n(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8n=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8n)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jq(),$async$a8n)
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
if(o!==t&&s.an(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.ard(g,q),$async$a8n)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8l(u),$async$a8n)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
a8o(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8o=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8o)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jq(),$async$a8o)
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
s=B.b1G(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8o)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aG("String","ngmy_doc_share_school_session_"+s,C.W.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8o)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
cfp(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfp)
case 7:s=f
p=A.w(n)
r=A.aW(J.t(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$cfp,w)},
Jr(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfp(d),$async$Jr)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1N(t),$async$Jr)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.are(d),$async$Jr)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1G(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.are(d),$async$Jr)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jr,w)},
are(d){var x=0,w=A.j(y.H)
var $async$are=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$are)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$are)
case 2:return A.h(null,w)}})
return A.i($async$are,w)},
b1O(){var x,w=$.ou(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8p(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hcq(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfs(d){return B.hZq(d)},
hZq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8p(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfs)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$cfs,w)},
arh(d,e){return B.hZr(d,e)},
hZr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arh=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8p(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cR,null),$async$arh)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$arh,w)},
cfu(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8p(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arh(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfu,w)},
cft(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cft=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8p(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arh(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cft)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cft,w)},
cfv(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8p(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arh(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfv,w)},
cfw(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hcq(d)){v=null
x=1
break}x=3
return A.b(B.cfs(d),$async$cfw)
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
return A.i($async$cfw,w)},
a8w(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8w)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8w)
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
q=A.aa(n)
$.am.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8w,w)},
arl(d){return B.hZG(d)},
hZG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$arl)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cR,null),$async$arl)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arl,w)},
arm(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arm)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8w(),$async$arm)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cE(0,C.cD.aK(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dI(A.a1(r,m,l),m,l)
J.aJ(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aJ(s,j,o)
x=9
return A.b(B.arl(s),$async$arm)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
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
return A.i($async$arm,w)},
aro(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aro=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aro)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8w(),$async$aro)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dI(A.a1(s,r,q),r,q)
r=C.dW.aK(C.a.i(e))
q.n(0,"answer",C.cL.gco().aK(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arl(u),$async$aro)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aro,w)},
arn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arn)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8w(),$async$arn)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cE(0,C.cD.aK(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arn,w)},
aqd(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqd=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.t0)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqd)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.he),$async$aqd)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.uJ(o))
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
return A.i($async$aqd,w)},
itJ(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fYs(d){return B.itL(d)},
itL(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fYs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iF("media").LH(d,3600),$async$fYs)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$fYs,w)},
DN(d,e,f,g,h,i){var x=null
return B.itI(d,e,f,g,h,i)},
itI(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DN=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.htE(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hcs(r),$async$DN)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fYs(o),$async$DN)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8q(r),$async$DN)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aWa)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MO(A.a([],g))
x=15
return A.b(d.f9(0,A.awI("GET",A.cD(n,0,null))).df(0,C.H8),$async$DN)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8q(r),$async$DN)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Li(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DN)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1Q(r,k),$async$DN)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DN)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.Wo(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8q(r),$async$DN)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DN,w)},
aSX(d){return B.itK(d)},
itK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iF("media").W(0,d),$async$aSX)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSX,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[108]
F=c[111]
B=a.updateHolder(c[16],B)
D=c[110]
H=c[79]
G=c[88]
I=c[36]
K=c[103]
L=c[38]
B.ctz.prototype={
aGR(d,e){return this.cRm(d,e)},
cRm(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dI(r,s,t)
t.u(0,d)
u=new q(A.kk(A.cu(t)))
t=J.k(u)
v=B.i3m(C.cL.gco().aK(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGR,w)}}
B.b6Z.prototype={
bD4(d){var x=this,w=x.w
w.onclose=A.hv(new B.ctu(x))
w.onopen=A.hv(new B.ctv(x))
w.onmessage=A.hv(new B.ctw(x))
w.onbufferedamountlow=A.hv(new B.ctx(x))},
gd3(d){return this.x},
aj3(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aj3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FW()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.heb(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$aj3)
case 8:v=t.heb(s.apm(f,0,null))
x=1
break
case 7:case 4:v=B.heb(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj3,w)}}
B.b7_.prototype={
bD5(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.ctA(x)))
w.addEventListener("icecandidate",A.hv(new B.ctB(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.ctC(x)))
w.onicegatheringstatechange=A.hv(new B.ctD(x))
w.addEventListener("signalingstatechange",A.hv(new B.ctE(x)))
if(!$.hm4())w.addEventListener("connectionstatechange",A.hv(new B.ctF(x)))
w.addEventListener("negotiationneeded",A.hv(new B.ctG(x)))
w.addEventListener("track",A.hv(new B.ctH(x)))},
amQ(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.kk(A.cu(A.S(y.N,y.z)))),y.aQ),$async$amQ)
case 3:t=f
v=new B.YG(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amQ,w)},
a91(d,e){return this.bs0(0,e)},
bs0(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a91=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a91)
case 2:return A.h(null,w)}})
return A.i($async$a91,w)},
a99(d,e){return this.bsl(0,e)},
bsl(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a99=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a99)
case 2:return A.h(null,w)}})
return A.i($async$a99,w)},
are(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$are=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YG(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$are,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.adF.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_B.prototype={
S(){return new B.aBD()},
gd1(){return this.c}}
B.aBD.prototype={
Z(){this.a3()
this.afz()},
afz(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1H(u.e,u.c),$async$afz)
case 2:t=e
if(v.c!=null)v.m(new B.deh(v,t))
return A.h(null,w)}})
return A.i($async$afz,w)},
Ri(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ri=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ara(t.e,t.c,!1),$async$Ri)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.fus)
x=1
break}x=4
return A.b(B.a8k(u.a.c,"individual"),$async$Ri)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7o(A.ef(new B.dee(u),!1,null,y.H)),$async$Ri)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ri,w)},
K_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fDW(o),$async$K_)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8o(o.e,r,s,q),$async$K_)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.frr)
x=1
break}x=5
return A.b(B.a8k(u.a.c,"member"),$async$K_)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7o(A.ef(new B.deg(u),!1,null,y.H)),$async$K_)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K_,w)},
yN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8j(t.e,o,t.f,t.r,t.w,s),$async$yN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8k(u.a.c,"org_owner"),$async$yN)
case 4:x=5
return A.b(B.arf(u.a.c),$async$yN)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fEq(o),$async$yN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8m(s,t,o,q.c),$async$yN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.U(D.frn)
x=1
break}x=10
return A.b(B.arf(u.a.c),$async$yN)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7o(A.ef(new B.def(u),!1,null,y.H)),$async$yN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.ny:C.qs,p=B.hcn(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aD(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ab(0,C.G,C.aD.j(0.35),C.fP,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fOB,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hn,s,s,s),C.aB,D.h7D,C.U,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.ccI,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lT(new B.dej(),s),C.P,v,C.e3,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae8(C.eY,C.aEV,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gckl(),s),C.af],u))
w.push(new B.ae8(C.pz,C.a5O,"Team Member","Sign in with your organization access code + password",t.gclc(),s))
w.push(C.af)
w.push(new B.ae8(C.aqS,C.a7s,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckI(),s))
return A.c5(s,q,A.bm(!0,A.cb(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae8.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.m_,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zu,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.n(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aEh.prototype={}
B.aHs.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.ph(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
garV(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.ad(x/1024,1)+" KB"
if(x<1073741824)return C.h.ad(x/1048576,1)+" MB"
return C.h.ad(x/1073741824,2)+" GB"},
aj(){var x,w=this,v=A.S(y.N,y.z)
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
bgi(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPS(d){return this.bgi(null,d)},
aGA(d){return this.bgi(d,null)}}
B.Wi.prototype={
S(){return new B.aFE(new A.cB(null,y.A))},
gd1(){return this.c}}
B.aFE.prototype={
Z(){this.a3()
this.afA()},
afA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ck(u.a.c),$async$afA)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e04(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afA,w)},
afB(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fx(s)),$async$afB)
case 3:t=u.c
if(t!=null)t.L(y.q).f.U(D.fvn)
case 1:return A.h(v,w)}})
return A.i($async$afB,w)},
a01(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a01=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqd(s.d,4),$async$a01)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_my_code_"+m+".png"),$async$a01)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a01,w)},
ajv(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abt("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajv)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajv,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.ny:C.qs,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m7
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
w=A.o(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,E.a6d,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,C.anu,p,p,1/0)
v=A.l(20)
u=A.a([new A.ab(0,C.G,C.aD.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cb(A.x(A.a([x,C.nd,w,C.lb,new A.e5(A.o(p,A.qf(p,p,!1,B.hZh(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.ep(C.DC,p,C.WD,q.gccC(),p),1),C.as,A.E(A.de(C.zW,p,C.acK,q.gccD(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.U,new A.a5(1/0,p,A.ep(G.a4z,p,D.h3a,q.gcA8(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,I.ao2,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wm.prototype={
S(){return new B.aFH(new A.at(C.ax,$.aw()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aFH.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.Jp(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
a02(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a02=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jp(u.d.a.a)
if(t==null){u.m(new B.e1d(u))
x=1
break}u.m(new B.e1e(u))
s=u.a
r=s.c
x=3
return A.b(B.a8i(s.d,new B.e1f(u),t,r),$async$a02)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e1g(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a02,w)},
a3i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e1h(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rU(r.a.c,q),$async$a3i)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e1i(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj8(p,m,l,j,k),$async$a3i)
case 8:o=e
if(r.c!=null)r.m(new B.e1j(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.e1k(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e1l(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3i,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ajr:D.agW,h=j?D.ale:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aiq:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dn(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dn(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c_I,C.f,k,k,new A.n(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,E.a6d,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uW(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blX()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OL,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e1m(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mt(l.a.d,4)
m=A.B(new A.N(m,new B.e1n(x,new A.aIK(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fpU)
else q.push(A.X(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cU(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.n(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.cb(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bI7,k,k,C.ah),1)
u=l.f?k:l.gcA9()
t=i[3]
s=i[1]
q=A.l(16)
s=A.ep(G.a4z,k,D.h4h,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccE()
t=A.bp(C.aD,k,k,0,C.c,k,C.nF,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lB(new B.e1o(),A.x(A.a([e,new A.D(D.bHB,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.u_:D.h2x,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0Q,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blX.prototype={
pd(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ho(C.bB,v.length),C.aP)}}
B.Wj.prototype={
S(){return new B.aFF()}}
B.aFF.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.at(new A.bb(w,C.b7,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.at(new A.bb(x,C.b7,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.at(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.V$=$.aw()
v.R$=0
v=w.e
v===$&&A.c()
v.V$=x
v.R$=0
v=w.f
v===$&&A.c()
v.V$=x
v.R$=0
w.a2()},
afC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e05(r))
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
return A.b(B.a8n(p,m,n,o,C.a.i(l).length===0?null:l),$async$afC)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.U(D.fuZ)
s=[1]
x=4
break}p.L(y.q).f.U(D.ftA)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e06(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afC,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.ny:C.qs,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fVT,s,s,s,1,s,!0),p=A.o(s,D.bzD,C.f,s,s,new A.n(s,s,s,A.l(22),s,C.Ix,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c73,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6Z,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c7e,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gccF()
u=A.bp(C.aD,s,s,s,s,C.hh,s,s,s,s,s,s)
return A.c5(q,r,A.cb(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.u_:C.aZ_,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adm.prototype={}
B.byT.prototype={
a66(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a66=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqr()))
x=3
return A.b(B.So(t,s),$async$a66)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a66,w)},
gd1(){return this.a}}
B.Op.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_A.prototype={
S(){return new B.aBC(new A.at(C.ax,$.aw()),A.kb(!0,null,!0,!0,null,null,!1))}}
B.aBC.prototype={
Z(){this.a3()
$.aU.x1$.push(new B.ded(this))},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
ccL(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2G(d),u=x.a.c,t=u?C.iK:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.ny:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aD.j(u?0.25:0.12),C.fP,32)],n),l=A.o(w,H.atz,C.f,w,w,new A.n(w,w,w,A.l(18),A.a([new A.ab(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.auo,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uW(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.byv()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CL,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b7c),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.deb(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mA,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(C.Ms,new A.bN(new A.n(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wL,A.x(A.a([l,C.aO,k,C.P,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dV(C.o6,new B.dec(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.n(w,w,w,A.l(14),A.a([new A.ab(0,C.G,C.aD.j(0.35),C.cM,12)],n),F.QM,C.n),C.bk,A.aE(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ezJ,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccK(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OU,w,C.d7,w,w,w)}}
B.byv.prototype={
pd(d,e){return e.amK(e.a.toUpperCase())}}
B.Wk.prototype={
S(){return new B.aFG(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFG.prototype={
Z(){var x=this
x.a3()
x.uu()
x.w=A.dh(C.jJ,new B.e1b(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wt()
this.a2()},
a2b(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oo(u.a.c),$async$a2b)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bc(u.a.c),$async$a2b)
case 4:u.m(new s.e0z(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2b,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oo(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bc(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e0A(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Os(u.d)
B.Ck(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
Os(d){return this.bH7(d)},
bH7(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Os=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8s(r,u.a.c),$async$Os)
case 8:p=f
if(u.c==null){x=1
break}new B.e08(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.X(r.c,"video/")||r.mR(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wr(r,u.a.c),$async$Os)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bc(u.a.c),$async$Os)
case 12:u.m(new o.e09(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Os,w)},
OS(d){return this.bNv(d)},
bNv(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8s(d,u.a.c),$async$OS)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e0e(u,d,t))
x=6
return A.b(A.fH(new A.fx(t)),$async$OS)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fx(r.toUpperCase())),$async$OS)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OS,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.U(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cL6(d,e)},
cL6(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e1_(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e10(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYp(){var x=this.a
return x.f||x.r||x.w},
IP(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYp()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cfl(s,n,r,q,o,t),$async$IP)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fRl(o,u.a.c),$async$IP)
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
return A.b(B.DP(s,o,r,q,n,t),$async$IP)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
a1e(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arf(u.a.c),$async$a1e)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ip("No organization portal found.")
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
return A.b(A.a6(t,!1).cf(A.ef(new B.e0w(u,r,q),!1,null,y.H)),$async$a1e)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1e,w)},
a2l(d){return this.ctH(d)},
ctG(){return this.a2l(1)},
ctH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYp()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arc(u.a.c),$async$a2l)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2l,w)},
ads(d,e,f){return this.c3w(d,e,f)},
c3w(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ads=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.uv(new B.e0t(u,d,null,e,f),"Uploading\u2026"),$async$ads)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ads,w)},
bHg(){B.hJe(!1,new B.e0c(this))
return},
cyK(){this.m(new B.e0E(this))},
aB2(){var x=0,w=A.j(y.H),v=this
var $async$aB2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHg()
return A.h(null,w)}})
return A.i($async$aB2,w)},
ado(){var x=0,w=A.j(y.H),v=this
var $async$ado=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e0i(v),"Importing\u2026"),$async$ado)
case 2:return A.h(null,w)}})
return A.i($async$ado,w)},
Tl(d){return this.cKq(d)},
cKq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.X(t,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cf(A.ef(new B.e0X(u,d),!1,null,y.H)),$async$Tl)
case 5:x=1
break
case 4:x=C.a.X(t,"image/")||d.mR(D.SO)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cf(A.ef(new B.e0Y(u,d),!1,null,y.H)),$async$Tl)
case 8:x=1
break
case 7:x=u.c4e(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cf(A.ef(new B.e0Z(u,d),!1,null,y.H)),$async$Tl)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tl,w)},
c4e(d){var x,w
if(C.a.X(d.c,"audio/"))return!0
x=d.b
w=C.a.ph(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cWh,C.a.aY(x,w+1).toLowerCase())},
ahd(d){return this.ckp(d)},
ckp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.X(d.c,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cf(A.ef(new B.e0u(u,d),!1,null,y.H)),$async$ahd)
case 5:x=1
break
case 4:u.m(new B.e0v(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahd,w)},
SH(d){return this.cBD(d)},
cBD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$SH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e0Q(u,d),"Preparing QR\u2026"),$async$SH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
ajV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0R(),A.T(t).k("N<1,q>")).fF(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e0S(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SH(r),$async$ajV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajV,w)},
ajO(d){return this.cBa(d)},
cBa(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2G(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0K(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajO)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tl(d)
break
case"qr":u.SH(A.a([d],y.r))
break
case"send_my_code":u.cl1(A.a([d],y.r))
break
case"save":u.ajb(d)
break
case"delete":u.JJ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajO,w)},
YM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0f(),A.T(t).k("N<1,q>")).fF(0)}t=u.d
s=A.T(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e0g(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pz(t,s.c,s.f),$async$YM)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e0h(u,r),"Preparing file\u2026"),$async$YM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YM,w)},
aii(d){return this.crZ(d)},
crZ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aii=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hKf(d,!1),$async$aii)
case 3:s=f
r=s==null
q=B.a8p(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aii,w)},
ahj(){var x=0,w=A.j(y.H),v=this,u
var $async$ahj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fZy(u,v.a.c),$async$ahj)
case 2:return A.h(null,w)}})
return A.i($async$ahj,w)},
bHf(){B.hJe(!1,new B.e0b(this,null))
return},
JZ(d,e){return this.cl2(d,e)},
b42(d){return this.JZ(null,d)},
cl1(d){return this.JZ(d,null)},
cl2(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Y<1>")
k=A.B(new A.Y(p,new B.e0x(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xR.cq().apx(!0,C.a2B,!1),$async$JZ)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e0y(l,s,r),"Preparing\u2026"),$async$JZ)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
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
return A.b(B.bH4(p,l,e,s.a.c),$async$JZ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JZ,w)},
J5(d){return this.c3j(d)},
c3j(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.X(q,"NGMYDOCRCV|")||C.a.X(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hZg(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b42(t),$async$J5)
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
return A.b(u.uv(new B.e0r(u,d),"Receiving video\u2026"),$async$J5)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e0s(u,d),"Receiving\u2026"),$async$J5)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J5,w)},
EU(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DI()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aii(t),$async$EU)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J5(s),$async$EU)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cf(A.ef(new B.e0C(u),!1,null,y.N)),$async$EU)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$EU)
case 10:x=1
break
case 9:x=11
return A.b(u.J5(C.a.i(r)),$async$EU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EU,w)},
ajb(d){return this.cxh(d)},
cxh(d){var x=0,w=A.j(y.H),v=this
var $async$ajb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e0B(v,d),"Saving\u2026"),$async$ajb)
case 2:return A.h(null,w)}})
return A.i($async$ajb,w)},
JJ(d){return this.bPR(d)},
bPR(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lm(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JJ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cfo(t),$async$JJ)
case 6:case 5:s=d.a
x=7
return A.b(B.Fr(u.a.c,s),$async$JJ)
case 7:u.r.W(0,s)
x=8
return A.b(u.uu(),$async$JJ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JJ,w)},
ak0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2G(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0W(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ak0)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahj()
break
case"import":u.ado()
break}case 1:return A.h(v,w)}})
return A.i($async$ak0,w)},
ccI(d){var x=d.c
if(C.a.X(x,"video/")||d.mR(D.n7))return C.qY
if(C.a.X(x,"image/")||d.mR(D.SO))return C.v7
if(C.a.q(x,"pdf"))return C.Id
return D.arg},
B(d){var x,w,v=this,u=null,t=B.a2G(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ip,u,u,u,new B.e16(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c0i,u,u,u,v.e?u:v.gckJ(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyJ()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bVv:C.arE,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4w,u,u,u,v.e?u:v.gccJ(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oO,u,u,u,v.e?u:v.gb58(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c25,u,u,u,v.e?u:new B.e17(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lT(new B.e18(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kr(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBz(C.ju,s,!0,t,w?u:v.gcBE(),u),1)
x.push(new A.D(D.bGl,A.lB(new B.e19(),A.A(A.a([s,C.as,A.E(new B.aBz(C.tn,"Export",!1,t,w?u:v.gbTK(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iD,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgs(t,v.e?u:v.gb58(),u)
else s=A.ks(!0,u,u,new B.e1a(v,t),s,u,D.bGd,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBz.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.ta,t,new A.ba(s,C.a1),t,t,t)
return A.de(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ta,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fa,t,t,t),u.r,v)}}
B.bgs.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lB(new B.de9(),new A.D(C.a1I,A.x(A.a([A.lB(new B.dea(),A.o(x,A.X(C.zy,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hz,x,x,new A.bt(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.U,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.de(C.oO,x,D.h7X,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OS,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cy,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adG.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dx(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.l(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.l(18)
q=A.l(14)
p=i.c
o=!C.a.X(p,"video/")
if(!o||i.mR(D.n7))p=D.dx7
else{p=C.a.X(p,"image/")||i.mR(D.SO)
n=y.O
p=p?A.a([C.cX,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garV()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.aw,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ci))
if(!(!o||i.mR(D.n7)))l.push(A.ha5(C.aD,!1,j,j,j,!1,j,j,new B.dew(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oG,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ci))
return A.lB(new B.dex(),new A.D(C.el,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1b,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.aj),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_C.prototype={
S(){return new B.aBE()},
gd1(){return this.c}}
B.aBE.prototype={
Z(){this.a3()
this.yD()},
t(){B.hZv(this.e)
this.a2()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rU(o.c,o.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hZy(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hZx(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.det(s))
x=1
break}s.m(new B.deu(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.dev(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a3h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rU(t.c,t.d),$async$a3h)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(D.frY)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj8(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3h)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3h,w)},
c3c(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kE(u,C.z,v,new B.der(w,t),C.h2,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fY(t,C.z,v,new B.des(w),C.h2,C.dB,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2G(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DE,u,u,u,v.gb8W(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.G_
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.de(C.DE,u,D.fR3,v.gb8W(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c3c()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_z.prototype={
S(){return new B.aBB(A.ak7(),C.bD,C.bD)},
gd1(){return this.c}}
B.aBB.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a4(w).k("fB<1>")).iG(new B.de6(v))
x.gcZ_().iG(new B.de7(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a4(x).k("fB<1>"))}if(x==null)x=C.bdC
x.iG(new B.de8(v))
v.yD()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rU(p.c,p.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.de_(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a4P(r,s.a.d.c)),$async$yD)
case 8:if(s.c==null){x=1
break}s.m(new B.de0(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.de1(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a03(){var x=0,w=A.j(y.H),v=this,u
var $async$a03=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a03)
case 5:x=3
break
case 4:x=6
return A.b(u.iL(0),$async$a03)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a03,w)},
aWd(d){var x=d.a
return C.a.b1(C.o.v(C.o.ar(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.ar(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2G(d),m=C.o.ar(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.G_
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWr,C.f,o,o,new A.n(o,o,o,A.l(24),o,F.QM,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.de2(p),C.o.D(C.o.ar(p.w.a,1000),0,m))
x=A.d(p.aWd(p.w)+" / "+p.aWd(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.fok,o,o,o,o,o,o)
r=p.f
q=A.X(r?C.vb:C.hd,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.de(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccM(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qL,x,o),o,o,o),o,!1,!1,o,o)}}
B.QM.prototype={
S(){return new B.aBH()},
gd1(){return this.c}}
B.aBH.prototype={
Z(){this.a3()
this.QA()},
QA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hco(o.c,o.d,new B.deK(s)),$async$QA)
case 7:r=e
if(r==null||r.length===0){s.m(new B.deL(s))
x=1
break}s.e=r
q=A.ilN(r)
if(q==null){s.m(new B.deM(s))
x=1
break}s.d=q
q.aV(0,s.gb3R())
x=8
return A.b(q.iY(0).df(0,C.t6),$async$QA)
case 8:if(s.c==null){x=1
break}s.m(new B.deN(s))
x=9
return A.b(q.qw(0),$async$QA)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.deO(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QA,w)},
ciY(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.deP(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DF(0,x.gb3R())
w=x.d
if(w!=null)w.t()
B.ivU(x.e)
x.a2()},
afF(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1P(u.c,u.d),$async$afF)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afF,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2G(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.oN,t,t,t,u.gccG(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.G_
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajy(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fG(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AI(s,t),A.ay(t,A.xz(A.o(t,A.X(q?C.vb:C.hd,C.c,t,t,t,48),C.f,t,t,new A.n(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.deR(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_E.prototype={
S(){return new B.aBF(new A.cB(null,y.A))}}
B.aBF.prototype={
gcKO(){var x,w,v=this.a
if(v.e!==D.Uc)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"WR"))return w
return null},
gcKo(){var x,w,v=this.a
if(v.e!==D.Az)return null
x=C.a.i(v.c)
if(!C.a.X(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.X(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcKO()
if(x!=null){v.RJ(x)
v.e=A.dh(C.Hb,new B.deG(v,x))}w=v.gcKo()
if(w!=null){v.RI(w)
v.f=A.dh(C.fM,new B.deH(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RI(d){return this.cqb(d)},
cqb(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ark(d),$async$RI)
case 3:t=f
x=4
return A.b(B.cfH(d),$async$RI)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dey(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RI,w)},
RJ(d){return this.cqc(d)},
cqc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h_h(d),$async$RJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bES(t),$async$RJ)
case 4:if(u.c==null){x=1
break}u.m(new B.dez(u))
u.c.L(y.q).f.U(D.aVK)
case 1:return A.h(v,w)}})
return A.i($async$RJ,w)},
gc8w(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccH(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a33(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a33=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DI()){t=u.c
if(t!=null)t.L(y.q).f.U(D.fv8)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cf(A.ef(new B.deA(),!1,null,y.N)),$async$a33)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bES(s),$async$a33)
case 4:t=u.c
if(t!=null)t.L(y.q).f.U(D.aVK)
case 1:return A.h(v,w)}})
return A.i($async$a33,w)},
abg(d){return this.bNw(d)},
bNw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fx(C.d.aN(t,", "))),$async$abg)
case 3:if(d.e!=null){t=d.L(y.q).f
t.U(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abg,w)},
afD(d){return this.bNe(d)},
bNe(d){var x=0,w=A.j(y.H),v=this
var $async$afD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fx(v.a.c)),$async$afD)
case 2:if(d.e!=null)d.L(y.q).f.U(D.fsr)
return A.h(null,w)}})
return A.i($async$afD,w)},
a2Y(d){return this.cxj(d)},
cxj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqd(s.d,4),$async$a2Y)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_doc_share_qr.png"),$async$a2Y)
case 8:q=f
if(d.e!=null)d.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.L(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2Y,w)},
gaZF(){var x,w=this.a
if(w.e!==D.JC)return null
x=C.a.i(w.c)
if(C.a.X(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.X(x,"http://")||C.a.X(x,"https://"))return x
if(C.a.X(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abd(d){return this.bNp(d)},
bNp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZF()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fx(C.a.X(t,"http")?t:"N2|"+t)),$async$abd)
case 3:if(d.e!=null)d.L(y.q).f.U(D.fu7)
case 1:return A.h(v,w)}})
return A.i($async$abd,w)},
afE(){var x=0,w=A.j(y.H),v=this,u
var $async$afE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wt(),$async$afE)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afE,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2G(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.JC&&i!==D.Uc&&i!==D.Az
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JC||t===D.Uc||t===D.Az?l:A.aH(l,l,l,l,C.ls,l,l,l,m.gb1M(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qf(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8w(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JC){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.o(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.n),l,l,l,l,C.lP,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccH(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.U,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c66,D.h_H,new B.deB(m,d),l)],p))}if(m.a.e===D.JC&&m.gaZF()!=null)C.d.u(q,A.a([C.U,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c2r,D.fXh,new B.deC(m,d),l)],p))
if(m.a.e===D.Az){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lP,l,l,l)],p))}if(m.a.e===D.Uc){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lP,l,l,l),C.af,A.de(D.bYU,l,D.h2R,m.gcxG(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oO(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(C.DC,l,C.WD,new B.deD(m,d),l),1),C.as,A.E(A.de(C.zW,l,C.acK,new B.deE(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bd,l,m.gb1M(),A.bp(C.aN,l,l,l,l,C.hh,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.deF(),y.C)}}
B.adE.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.cb(A.x(A.a([w,C.aO,A.o(x,A.qf(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.en(A.a([A.bJ(C.Be,x,new B.ddZ(d),x)],u),x,x,C.no,v,x,x,x,x,D.fQ2,x)}}
B.a_y.prototype={
S(){return new B.aBA(A.zU(C.yP,C.oc,C.vo))}}
B.aBA.prototype={
t(){this.d.t()
this.a2()},
azC(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.X(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fXP,x,x,x,1,x,!0),C.w,A.zT(this.d,C.bY,this.gazB()),x,!1,!1,x,x)}}
B.a_F.prototype={
S(){return new B.aBG(A.zU(C.yP,C.oc,C.vo))},
gd1(){return this.c}}
B.aBG.prototype={
c4g(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.X(x,"NGMYDOCSYNC")||C.a.X(x,"N2|")||C.a.X(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahG(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MU("text/plain"),$async$ahG)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.U(D.fv2)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahG,w)},
ac4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ac4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hKf(p,!0),$async$ac4)
case 3:t=e
p=t==null
s=B.a8p(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.U(D.fry)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$ac4,w)},
t(){this.d.t()
this.a2()},
azC(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4g(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.asE,v,v,v,w.gbTd(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a4D,v,v,v,w.gcnw(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.v3:C.Q0,v,v,v,v,v),v,v,v,new B.deJ(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h3M,v,v,v,1,v,!0)
u=A.zT(w.d,C.bY,w.gazB())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eG0],s),v),v,!1,!1,v,v)}}
B.bgt.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pp
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.o(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pp:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1O,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaQ.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pv.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YF.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pu.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FX.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cty.prototype={}
B.FW.prototype={}
B.aaP.prototype={}
B.avV.prototype={}
B.YG.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jD)","q(jD)","Wk(Z)","~()","a_B(Z)","H(H,jD)","QM(Z)","~(nQ)","cw(FW)","aB<jD?>(@)","Wi(Z)","Wm(Z)","D(jD)","jD(@)","ac<q,@>(jD)","a_A(Z)","Wj(Z)","a_C(Z)","a_z(Z)","a_E(Z)","adE(Z)","ai<jD>()","a_F(Z)","adG(Z,H)","a_y(Z)","ac<q,aK>(jD)","cw(YF)","cw(aaP)","aB<cw>(FW)"])
B.ctu.prototype={
$1(d){var x=this.a
x.x=D.aSr
x.y.I(0,D.aSr)},
$S:78}
B.ctv.prototype={
$1(d){var x=this.a
x.x=D.aSq
x.y.I(0,D.aSq)},
$S:78}
B.ctw.prototype={
$1(d){var x=this.a
x.aj3(A.ahV(d.data)).bG(new B.ctt(x),y.b)},
$S:78}
B.ctt.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ctx.prototype={
$1(d){},
$S:78}
B.ctA.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i3l(d.channel))},
$S:17}
B.ctB.prototype={
$1(d){},
$S:17}
B.ctC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.imX(w.iceConnectionState)
x.cx=w
if($.hm4())switch(w.a){case 0:x.cy=D.aSw
break
case 1:x.cy=D.aSx
break
case 3:x.cy=D.aSy
break
case 5:x.cy=D.aSu
break
case 6:x.cy=D.aSv
break
case 7:x.cy=D.aan
break
default:break}},
$S:114}
B.ctD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.imY(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:114}
B.ctE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ixs(w.signalingState)},
$S:114}
B.ctF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ivB(w.connectionState)},
$S:114}
B.ctG.prototype={
$1(d){},
$S:114}
B.ctH.prototype={
$1(d){},
$S:17}
B.fzm.prototype={
$1(d){var x=y.F.a(new A.qu([],[]).o7(d.target.result,!1)),w=C.wC.q(x.objectStoreNames,"blobs")
if(!w)C.wz.Gr(x,"blobs")},
$S:186}
B.fZm.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xc.ft(this.b)
$.eX.mK()
this.c.$1(d)},
$S:491}
B.fZo.prototype={
$1(d){return this.a.$1(B.icv(this.b,this.c))},
$S:32}
B.fZn.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fZl.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fZB.prototype={
$1(d){var x=this
return B.hyB(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fZC.prototype={
$1(d){var x=this
return B.hyB(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fC1.prototype={
$1(d){var x=this
return B.cfi(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.deh.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dee.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfi(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.deg.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfi(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.def.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cfi(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dej.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXw,x,x,x,new B.dei(d),x,x,x,x,x,x),A.E(A.FI(D.Sy,!0,x,!1,C.a3G,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.Sy,x,g,C.aoj,0,e,f)},
$C:"$4",
$R:4,
$S:474}
B.dei.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDZ.prototype={
$1(d){var x,w,v=null,u=A.aD(d,C.eU,y.m).w,t=this.a,s=t?C.iK:C.c,r=A.l(28),q=A.o(v,D.bzX,C.f,v,v,D.b8S,v,v,v,v,D.ao8,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0U,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CN,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asU,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fDX(d),v),1),C.as,A.E(A.bJ(D.fWg,v,new B.fDY(p,x,d),A.bp(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.n),v,v,v,C.He,v,v,v,v),v)},
$S:68}
B.fDX.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDY.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.U(D.fsI)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEh(v,x))},
$S:0}
B.fEs.prototype={
$1(d){var x=this,w=null,v=A.aD(d,C.eU,y.m).w,u=x.a,t=u?C.iK:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bzN,C.f,w,w,D.ban,w,w,w,w,D.ao8,w,w,1/0),new A.D(C.CN,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hhJ(u,"Organization name",C.HN,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.U,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hhJ(u,"Access code",C.mj,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.U,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hhJ(u,"Member password",C.DB,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h3T,w,new B.fEr(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hh,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.n),w,w,w,C.He,w,w,w,w),w)},
$S:68}
B.fEr.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.U(D.fsN)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHs(u,x,w))},
$S:0}
B.cf9.prototype={
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
p=C.a.X(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vS(p,null).df(0,C.a0P),$async$$1)
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
m=A.aa(h)
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
B.cff.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfg.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cfh.prototype={
$1(d){return d.b},
$S:z+2}
B.cfb.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cfc.prototype={
$1(d){return d.b},
$S:z+2}
B.cfa.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cfd.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cfe.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fZz.prototype={
$1(d){return new B.Wi(this.a,null)},
$S:z+11}
B.fZA.prototype={
$1(d){return new B.Wm(this.a,this.b,this.c,null)},
$S:z+12}
B.e04.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e1d.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e1e.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e1f.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e1c(x,d))},
$S:2}
B.e1c.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1g.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1h.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e1i.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e1j.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1k.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e1l.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1o.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.e1m.prototype={
$1(d){var x=this.a
return x.f?null:x.a02()},
$S:2}
B.e1n.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.X(s,"image/")||d.mR(D.SO))s=C.v7
else s=C.a.X(s,"video/")||d.mR(D.n7)?C.qY:D.arg
x=this.b.a
w=y.p
return new A.D(C.kB,A.A(A.a([A.o(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garV(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e05.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e06.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfj.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:101}
B.cfk.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:101}
B.h_A.prototype={
$2(d,e){return e===this.a},
$S:261}
B.fwp.prototype={
$1(d){return J.k(d)},
$S:16}
B.fCd.prototype={
$1(d){var x=this.b
B.ias(C.HA.ga7J(this.a)).bG(x.gCf(x),y.H)},
$S:131}
B.fCe.prototype={
$1(d){return this.a.dd(0,null)},
$S:131}
B.fCf.prototype={
$0(){return null},
$S:11}
B.cfy.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fCg.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aI(p.h(0,"sizeBytes"))
v=v==null?q:C.h.M(v)
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
return new B.jD(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fGs.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fAq.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfD.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.h3Q.prototype={
$1(d){return new B.a_A(this.a,null)},
$S:z+16}
B.ded.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.deb.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.dec.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e1b.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2b()},
$S:12}
B.e0z.prototype={
$0(){var x=J.bIb(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0A.prototype={
$0(){var x=J.bIb(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e08.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e07(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGA(this.c)}},
$S:0}
B.e07.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e09.prototype={
$0(){var x=J.bIb(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0e.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e0d(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGA(this.c)}},
$S:0}
B.e0d.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1_.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e10.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e0w.prototype={
$1(d){return new B.Wj(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e0t.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IP(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wn(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2l(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0c.prototype={
$1(d){this.a.ads(d,"No files selected.","Added")},
$S:491}
B.e0E.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e0D(),A.T(x).k("N<1,q>")))},
$S:0}
B.e0D.prototype={
$1(d){return d.a},
$S:z+2}
B.e0i.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xR.cq().d_Y(C.a2B,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jJ(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.aa(j)
$.am.$1("[doc share import] "+A.w(p))
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
return A.b(B.arj(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ip("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.ip("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e0X.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0Y.prototype={
$1(d){return new B.a_C(this.a.a.c,this.b,null)},
$S:z+18}
B.e0Z.prototype={
$1(d){return new B.a_z(this.a.a.c,this.b,null)},
$S:z+19}
B.e0u.prototype={
$1(d){return new B.QM(this.a.a.c,this.b,null)},
$S:z+7}
B.e0v.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0Q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IP(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8r(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ctG(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.T(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e0M(p),r),new B.e0N(),r.k("N<ak.E,q>")).c0(0,new B.e0O())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cf(A.ef(new B.e0P(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.py(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wt(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0M.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0L(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0L.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0N.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0O.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0P.prototype={
$1(d){var x=this.a
return new B.a_E(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e0R.prototype={
$1(d){return d.a},
$S:z+2}
B.e0S.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0K.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kA,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garV(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.X(p.c,"video/")
w=!x||p.mR(D.n7)?C.tr:C.nP
p=!x||p.mR(D.n7)?"Play video":"View"
return new A.bN(new A.n(s,v,new A.bG(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CJ,A.x(A.a([q,o,t,C.aB,B.a_D(!1,u,!1,w,p,new B.e0F(d),v),B.a_D(!1,u,!1,C.ju,"Share via QR",new B.e0G(d),"Letters/numbers QR code"),B.a_D(!1,u,!1,D.a3L,"Send to their Code",new B.e0H(d),"Enter someone else's personal code"),B.a_D(!1,u,!1,C.hE,"Download / save",new B.e0I(d),v),C.am,B.a_D(!1,u,!0,C.ej,"Delete",new B.e0J(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:814}
B.e0F.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e0G.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e0H.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e0I.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0J.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e0f.prototype={
$1(d){return d.a},
$S:z+2}
B.e0g.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0h.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8t(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Ho(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.py(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0b.prototype={
$1(d){var x=this.a
x.uv(new B.e0a(x,d,this.b),"Preparing\u2026")},
$S:491}
B.e0a.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wn(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bH4(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0x.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0y.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hcr(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0r.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hm(new B.e0n(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e0o(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e0p(s))
case 5:x=8
return A.b(r.b.ix(0,C.H8,new B.e0q()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gau(t)){s.ip("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uu(),$async$$0)
case 9:s.ip("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0n.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e0k(x,d,e))},
$S:224}
B.e0k.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0o.prototype={
$1(d){return new B.adE(this.a.a,null)},
$S:z+21}
B.e0p.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e0q.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e0s.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jp(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8h(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b42(B.Jp(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arj(new B.e0l(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hcq(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.X(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e0m()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0l.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e0j(x,d,e))},
$S:224}
B.e0j.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0m.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.e0C.prototype={
$1(d){return new B.a_F(this.a.a.c,null)},
$S:z+23}
B.e0B.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1P(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0W.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.n(v[2],x,new A.bG(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CJ,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kA,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_D(!0,w,!1,C.mj,"My Code",new B.e0T(d),"Your personal code & QR \u2014 others send docs to you"),B.a_D(!1,w,!1,D.a3L,"Send to their Code",new B.e0U(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_D(!1,w,!1,C.zO,"Import backup",new B.e0V(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:814}
B.e0T.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e0U.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bHf()},
$S:0}
B.e0V.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e18.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jz(D.Sy,x,C.a3G,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d6(C.d.gH(D.Sy).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:801}
B.e16.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e17.prototype={
$0(){this.a.ak0()
return null},
$S:0}
B.e19.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*10)),e)},
$S:107}
B.e1a.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adG(e,w,v,this.b,x.e,x.ccI(w),new B.e12(x,w),new B.e13(x,v,w),new B.e14(x,w),new B.e15(x,w),null)},
$S:z+24}
B.e12.prototype={
$0(){this.a.ahd(this.b)
return null},
$S:0}
B.e13.prototype={
$0(){var x=this.a
return x.m(new B.e11(x,this.b,this.c))},
$S:0}
B.e11.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e14.prototype={
$0(){this.a.OS(this.b)
return null},
$S:0}
B.e15.prototype={
$0(){this.a.ajO(this.b)
return null},
$S:0}
B.de9.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*18)),e)},
$S:107}
B.dea.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:118}
B.dex.prototype={
$3(d,e,f){return A.d0(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.dew.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.det.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.deu.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dev.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.der.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fY(w,C.z,x,new B.dep(this.a),C.h2,C.dB,!0,x,!1,x,x)
$.aU.x1$.push(new B.deq(this.a))
return C.bM},
$S:154}
B.dep.prototype={
$3(d,e,f){$.aU.x1$.push(new B.den(this.a))
return C.bM},
$S:210}
B.den.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dek(x))},
$S:7}
B.dek.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deq.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dem(x))},
$S:7}
B.dem.prototype={
$0(){return this.a.w=!0},
$S:0}
B.des.prototype={
$3(d,e,f){$.aU.x1$.push(new B.deo(this.a))
return C.bM},
$S:210}
B.deo.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.del(x))},
$S:7}
B.del.prototype={
$0(){return this.a.w=!0},
$S:0}
B.de6.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.de5(x,d))},
$S:2150}
B.de5.prototype={
$0(){return this.a.f=this.b===C.vL},
$S:0}
B.de7.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.de4(x,d))},
$S:7}
B.de4.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.de8.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.de3(x,d))},
$S:7}
B.de3.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.de_.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.de0.prototype={
$0(){return this.a.e=!1},
$S:0}
B.de1.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.de2.prototype={
$1(d){return this.a.d.NN(0,A.dx(0,0,0,C.h.T(d),0,0))},
$S:6}
B.deK.prototype={
$0(){var x=this.a.a
return B.rU(x.c,x.d)},
$S:2151}
B.deL.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.deM.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.deN.prototype={
$0(){return this.a.f=!1},
$S:0}
B.deO.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.deP.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.deR.prototype={
$0(){var x=this.a
x.m(new B.deQ(x))},
$S:0}
B.deQ.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qw(0)},
$S:0}
B.deG.prototype={
$1(d){return this.a.RJ(this.b)},
$S:12}
B.deH.prototype={
$1(d){return this.a.RI(this.b)},
$S:12}
B.dey.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dez.prototype={
$0(){return this.a.r=!0},
$S:0}
B.deA.prototype={
$1(d){return D.hFA},
$S:z+25}
B.deF.prototype={
$2(d,e){if(d)B.Wt()},
$S:132}
B.deB.prototype={
$0(){return this.a.abg(this.b)},
$S:0}
B.deC.prototype={
$0(){return this.a.abd(this.b)},
$S:0}
B.deD.prototype={
$0(){return this.a.afD(this.b)},
$S:0}
B.deE.prototype={
$0(){return this.a.a2Y(this.b)},
$S:0}
B.ddZ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.deJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qA(),$async$$0)
case 2:u.m(new B.deI(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.deI.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfF.prototype={
$1(d){return C.a.X(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.cfG.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfE.prototype={
$2(d,e){return this.bnQ(d,e)},
bnQ(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wu(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2152}
B.fG4.prototype={
$1(d){if(d===D.aam&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fG5.prototype={
$0(){},
$S:11}
B.fGG.prototype={
bpq(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ftq(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.htE(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpq(d,e)},
$S:573}
B.fGF.prototype={
$1(d){var x=this
d.b=new B.fGE(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fGE.prototype={
$1(d){return this.bpp(d)},
bpp(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1Q(n,m),$async$$1)
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
return A.b(B.ftq(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.aa(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8q(m),$async$$1)
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
x(v=B.aBD.prototype,"gckl","Ri",0)
x(v,"gclc","K_",0)
x(v,"gckI","yN",0)
x(v=B.aFE.prototype,"gccC","afB",0)
x(v,"gccD","a01",0)
x(v,"gcA8","ajv",0)
x(v=B.aFH.prototype,"gccE","a02",0)
x(v,"gcA9","a3i",0)
x(B.aFF.prototype,"gccF","afC",0)
x(B.aBC.prototype,"gccK","ccL",4)
x(v=B.aFG.prototype,"gckJ","a1e",0)
x(v,"gcyJ","cyK",4)
x(v,"gb58","aB2",0)
x(v,"gcBE","ajV",0)
x(v,"gbTK","YM",0)
x(v,"gccJ","EU",0)
x(B.aBE.prototype,"gb8W","a3h",0)
x(B.aBB.prototype,"gccM","a03",0)
x(v=B.aBH.prototype,"gb3R","ciY",4)
x(v,"gccG","afF",0)
x(v=B.aBF.prototype,"gcxG","a33",0)
x(v,"gb1M","afE",0)
w(B.aBA.prototype,"gazB","azC",8)
x(v=B.aBG.prototype,"gcnw","ahG",0)
x(v,"gbTd","ac4",0)
w(v,"gazB","azC",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aK,[B.cty,B.aaP,B.avV,B.aEh,B.aHs,B.jD,B.adm,B.byT,B.FW,B.YG])
w(B.ctz,B.cty)
w(B.b6Z,B.aaP)
x(A.kX,[B.ctu,B.ctv,B.ctw,B.ctt,B.ctx,B.ctA,B.ctB,B.ctC,B.ctD,B.ctE,B.ctF,B.ctG,B.ctH,B.fzm,B.fZm,B.fZo,B.fZn,B.fZB,B.fZC,B.fC1,B.dee,B.deg,B.def,B.dej,B.fDZ,B.fEs,B.cf9,B.cfg,B.cfh,B.cfc,B.cfa,B.cfd,B.cfe,B.fZz,B.fZA,B.e1f,B.e1o,B.e1m,B.e1n,B.fwp,B.fCd,B.fCe,B.cfy,B.fCg,B.fGs,B.fAq,B.fAr,B.cfD,B.h3Q,B.ded,B.deb,B.e1b,B.e07,B.e0d,B.e0w,B.e0c,B.e0D,B.e0X,B.e0Y,B.e0Z,B.e0u,B.e0M,B.e0L,B.e0N,B.e0O,B.e0P,B.e0R,B.e0S,B.e0K,B.e0f,B.e0g,B.e0b,B.e0x,B.e0o,B.e0m,B.e0C,B.e0W,B.e18,B.e19,B.de9,B.dea,B.dex,B.dew,B.der,B.dep,B.den,B.deq,B.des,B.deo,B.de6,B.de7,B.de8,B.de2,B.deG,B.deH,B.deA,B.cfF,B.cfG,B.fG4,B.fGF,B.fGE])
w(B.b7_,B.avV)
x(A.np,[B.fZl,B.deh,B.dei,B.fDX,B.fDY,B.fEr,B.e04,B.e1d,B.e1e,B.e1c,B.e1g,B.e1h,B.e1i,B.e1j,B.e1k,B.e1l,B.e05,B.e06,B.fCf,B.dec,B.e0z,B.e0A,B.e08,B.e09,B.e0e,B.e1_,B.e10,B.e0t,B.e0E,B.e0i,B.e0v,B.e0Q,B.e0F,B.e0G,B.e0H,B.e0I,B.e0J,B.e0h,B.e0a,B.e0y,B.e0r,B.e0k,B.e0p,B.e0q,B.e0s,B.e0j,B.e0B,B.e0T,B.e0U,B.e0V,B.e16,B.e17,B.e12,B.e13,B.e11,B.e14,B.e15,B.det,B.deu,B.dev,B.dek,B.dem,B.del,B.de5,B.de4,B.de3,B.de_,B.de0,B.de1,B.deK,B.deL,B.deM,B.deN,B.deO,B.deP,B.deR,B.deQ,B.dey,B.dez,B.deB,B.deC,B.deD,B.deE,B.ddZ,B.deJ,B.deI,B.fG5])
x(A.qv,[B.adF,B.Op,B.aaQ,B.Pv,B.YF,B.Pu,B.FX])
x(A.ag,[B.a_B,B.Wi,B.Wm,B.Wj,B.a_A,B.Wk,B.a_C,B.a_z,B.QM,B.a_E,B.a_y,B.a_F])
x(A.ah,[B.aBD,B.aFE,B.aFH,B.aFF,B.aBC,B.aFG,B.aBE,B.aBB,B.aBH,B.aBF,B.aBA,B.aBG])
x(A.av,[B.ae8,B.aBz,B.bgs,B.adG,B.adE,B.bgt])
x(A.n0,[B.cff,B.cfb,B.cfj,B.cfk,B.h_A,B.e0n,B.e0l,B.e1a,B.deF,B.cfE,B.fGG])
x(A.jL,[B.blX,B.byv])})()
A.p2(b.typeUniverse,JSON.parse('{"b6Z":{"aaP":[]},"b7_":{"avV":[]},"a_B":{"ag":[],"v":[]},"aBD":{"ah":["a_B"]},"ae8":{"av":[],"v":[]},"Wi":{"ag":[],"v":[]},"Wm":{"ag":[],"v":[]},"aFE":{"ah":["Wi"]},"aFH":{"ah":["Wm"]},"blX":{"jL":[]},"Wj":{"ag":[],"v":[]},"aFF":{"ah":["Wj"]},"a_A":{"ag":[],"v":[]},"Wk":{"ag":[],"v":[]},"adG":{"av":[],"v":[]},"a_C":{"ag":[],"v":[]},"a_z":{"ag":[],"v":[]},"QM":{"ag":[],"v":[]},"a_E":{"ag":[],"v":[]},"adE":{"av":[],"v":[]},"a_y":{"ag":[],"v":[]},"a_F":{"ag":[],"v":[]},"aBC":{"ah":["a_A"]},"byv":{"jL":[]},"aFG":{"ah":["Wk"]},"aBz":{"av":[],"v":[]},"bgs":{"av":[],"v":[]},"aBE":{"ah":["a_C"]},"aBB":{"ah":["a_z"]},"aBH":{"ah":["QM"]},"aBF":{"ah":["a_E"]},"aBA":{"ah":["a_y"]},"aBG":{"ah":["a_F"]},"bgt":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aF
return{J:x("nn"),k:x("MS()"),o:x("bq<q,q>"),F:x("zx"),g:x("aB<jD?>"),x:x("aB<~>"),V:x("U<ab>"),O:x("U<u>"),W:x("U<bk>"),Y:x("U<ac<q,Q>>"),t:x("U<ac<q,@>>"),r:x("U<jD>"),w:x("U<+file,name(mC,q)>"),u:x("U<d6>"),s:x("U<q>"),E:x("U<jL>"),a:x("U<e8>"),p:x("U<v>"),Z:x("U<H>"),G:x("bk"),A:x("cB<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("ac<q,@>"),f:x("ac<@,@>"),m:x("kF"),e:x("iBx"),af:x("F7"),U:x("jD"),b:x("cw"),C:x("aK"),aK:x("yr"),ab:x("FW"),br:x("avV"),v:x("YG"),N:x("q"),X:x("bt<G>"),Q:x("mR"),D:x("e8"),aw:x("bl<q>"),cd:x("Y<ac<q,@>>"),c7:x("v"),ch:x("c7<ai<jD>>"),aW:x("c7<e8?>"),aY:x("c7<~>"),cx:x("adF"),b1:x("bn<ai<jD>>"),cf:x("bn<e8?>"),d4:x("bn<~>"),c4:x("aEh"),bG:x("aHs"),q:x("pO"),B:x("pQ<FW>"),c6:x("pQ<aaQ>"),y:x("Q"),i:x("G"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("ac<q,@>?"),l:x("jD?"),R:x("aK?"),c:x("YG?"),d:x("+answerQr,transfer(q,aB<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Op,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e8?"),cm:x("adm?"),bk:x("aEh?"),ag:x("aHs?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b7c=new A.ax(C.aD,2,C.r,-1)
D.caL=new A.a7(C.a5,C.a9,C.x,C.a5O,null,null)
D.b8S=new A.n(null,null,null,C.mJ,null,D.caL,C.n)
D.ban=new A.n(null,null,null,C.mJ,null,C.Ix,C.n)
D.agW=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aiq=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajr=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ale=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fQW=new A.C("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h4R=new A.C("Share the access code and member password with your team. They only sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dnW=x([D.fQW,C.am,D.h4R],y.p)
D.bzD=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnW,null)
D.h9l=new A.C("Create your organization",null,C.fR,null,null,null,null,null,null,null,null,null)
D.fVs=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dFt=x([D.h9l,C.am,D.fVs],y.p)
D.bzN=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dFt,null)
D.h5v=new A.C("Team Member sign-in",null,C.fR,null,null,null,null,null,null,null,null,null)
D.fZq=new A.C("Enter the access code and password from your organization.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dDb=x([D.h5v,C.am,D.fZq],y.p)
D.bzX=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dDb,null)
D.bGd=new A.P(16,10,16,28)
D.bGl=new A.P(16,14,16,4)
D.bHB=new A.P(20,0,20,16)
D.bI7=new A.P(20,8,20,16)
D.ao8=new A.P(24,22,24,20)
D.a3L=new A.a_(63394,"MaterialIcons",!1)
D.arg=new A.a_(63515,"MaterialIcons",!1)
D.bVv=new A.a_(983813,"MaterialIcons",!1)
D.bSD=new A.a_(62867,"MaterialIcons",!1)
D.bWr=new A.ae(D.bSD,44,C.c,null,null,null)
D.bXw=new A.ae(C.kb,null,C.aa,null,null,null)
D.bYU=new A.ae(C.jv,18,null,null,null,null)
D.c_I=new A.ae(D.a3L,26,C.c,null,null,null)
D.c0i=new A.ae(C.Dq,null,null,null,null,null)
D.c0U=new A.ae(C.Dy,null,null,null,null,null)
D.c25=new A.ae(L.a3W,null,null,null,null,null)
D.c2r=new A.ae(C.hS,16,null,null,null,null)
D.c66=new A.ae(C.tq,16,null,null,null,null)
D.bWJ=new A.ae(C.mj,null,null,null,null,null)
D.c6Z=new A.e7(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1r=new A.ae(C.HN,null,null,null,null,null)
D.c73=new A.e7(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1r,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bX3=new A.ae(C.DB,null,null,null,null,null)
D.c7e=new A.e7(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bX3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWT=x([C.fq,C.b3,C.aD],y.O)
D.ccI=new A.a7(C.ay,C.aC,C.x,D.cWT,null,null)
D.cWh=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Sy=x([C.fq,C.aD],y.O)
D.SO=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dx7=x([C.mS,C.aD],y.O)
D.esi={iceServers:0}
D.aMW={urls:0}
D.dJo=new A.bq(D.aMW,["stun:stun.l.google.com:19302"],y.o)
D.dJn=new A.bq(D.aMW,["stun:stun1.l.google.com:19302"],y.o)
D.dd7=x([D.dJo,D.dJn],A.aF("U<ac<q,q>>"))
D.dIu=new A.bq(D.esi,[D.dd7],A.aF("bq<q,@>"))
D.JC=new B.Op(0,"lanDirect")
D.Ub=new B.Op(1,"cloudStash")
D.dWm=new B.Op(2,"inlineInstant")
D.Uc=new B.Op(3,"webrtcLink")
D.Az=new B.Op(4,"videoCloud")
D.h4Q=new A.C("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLW=x([C.at2,C.ae,D.h4Q],y.p)
D.fjd=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLW,null)
D.ezJ=new A.D(C.co,D.fjd,null)
D.fHh=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.J1,null,null,null)
D.fRv=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fHh,null,C.K,null,null,null,null,null,null,null)
D.eyU=new A.D(C.CQ,D.fRv,null)
D.beY=new A.ck(C.z,null,null,D.eyU,null)
D.eG0=new A.cK(0,null,0,28,null,null,D.beY,null)
D.eGk=new B.aaQ(0,"RTCDataChannelConnecting")
D.aSq=new B.aaQ(1,"RTCDataChannelOpen")
D.aSr=new B.aaQ(3,"RTCDataChannelClosed")
D.eGl=new B.FX(0,"RTCIceConnectionStateNew")
D.eGm=new B.FX(1,"RTCIceConnectionStateChecking")
D.eGn=new B.FX(2,"RTCIceConnectionStateCompleted")
D.eGo=new B.FX(3,"RTCIceConnectionStateConnected")
D.eGp=new B.FX(4,"RTCIceConnectionStateCount")
D.eGq=new B.FX(5,"RTCIceConnectionStateFailed")
D.eGr=new B.FX(6,"RTCIceConnectionStateDisconnected")
D.aSs=new B.FX(7,"RTCIceConnectionStateClosed")
D.aSt=new B.YF(0,"RTCIceGatheringStateNew")
D.eGs=new B.YF(1,"RTCIceGatheringStateGathering")
D.aam=new B.YF(2,"RTCIceGatheringStateComplete")
D.aan=new B.Pu(0,"RTCPeerConnectionStateClosed")
D.aSu=new B.Pu(1,"RTCPeerConnectionStateFailed")
D.aSv=new B.Pu(2,"RTCPeerConnectionStateDisconnected")
D.aSw=new B.Pu(3,"RTCPeerConnectionStateNew")
D.aSx=new B.Pu(4,"RTCPeerConnectionStateConnecting")
D.aSy=new B.Pu(5,"RTCPeerConnectionStateConnected")
D.eGt=new B.Pv(0,"RTCSignalingStateStable")
D.eGu=new B.Pv(1,"RTCSignalingStateHaveLocalOffer")
D.eGv=new B.Pv(2,"RTCSignalingStateHaveRemoteOffer")
D.eGw=new B.Pv(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eGx=new B.Pv(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSz=new B.Pv(5,"RTCSignalingStateClosed")
D.fok=new A.au(160,48)
D.bge=new A.fi(2,null,null,null,null,C.aD,null,null,null,null)
D.fpU=new A.a5(16,16,D.bge,null)
D.fUN=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.frn=new A.b0(D.fUN,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1u=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.frr=new A.b0(D.h1u,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hao=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fry=new A.b0(D.hao,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fUn=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.frY=new A.b0(D.fUn,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h5G=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVK=new A.b0(D.h5G,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h77=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fsr=new A.b0(D.h77,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbS=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsI=new A.b0(D.hbS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9O=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsN=new A.b0(D.h9O,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hb2=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new A.b0(D.hb2,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSY=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fu7=new A.b0(D.fSY,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h3o=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fus=new A.b0(D.h3o,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fX6=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fuZ=new A.b0(D.fX6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbX=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fv2=new A.b0(D.hbX,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTd=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fv8=new A.b0(D.fTd,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRS=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fvn=new A.b0(D.fRS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fOB=new A.C("NGMY DOC SHARE",null,C.aX9,null,null,null,null,null,null,null,null,null)
D.fQ2=new A.C("Show this to sender",null,C.iI,null,null,null,null,null,null,null,null,null)
D.fR3=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fVT=new A.C("Organization settings",null,C.cH,null,null,null,null,null,null,null,null,null)
D.fWg=new A.C("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fXh=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fXP=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_H=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h2x=new A.C("Send to their Doc Share",null,C.o4,null,null,null,null,null,null,null,null,null)
D.h2R=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3a=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h3M=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3T=new A.C("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h4h=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fa,null,null,null,null,null,null,null,null,null)
D.h7D=new A.C("Share files & videos\nwith a scan.",null,C.aXc,null,null,null,null,null,null,null,null,null)
D.h7X=new A.C("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hFA=new B.a_y(null)
D.adL=new B.adF(0,"docShare")
D.adM=new B.adF(1,"gate")
D.Xg=new B.adF(2,"gateNoIndividual")})();(function staticFields(){$.aQi=null
$.fqZ=function(){var x=y.N
return A.S(x,x)}()
$.Ha=A.S(y.N,y.D)
$.ahJ=A.S(y.N,A.aF("mC"))
$.S9=A.S(y.N,y.D)
$.frF=A.S(y.N,A.aF("adm"))
$.cfx=A.S(y.S,A.aF("byT"))
$.htD=1
$.iiB=null
$.iiA=null
$.i9L=null
$.hhV=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iC1","hMf",()=>new B.ctz())
x($,"izW","hm4",()=>C.a.q(A.bB(A.bB(A.bB(A.HI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["Oc8wQtdg0xV3j+BJ3tcl6hTktcs="]=a.current})($__dart_deferred_initializers__);