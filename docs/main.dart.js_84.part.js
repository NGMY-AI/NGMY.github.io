((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,F,B={ctq:function ctq(){},
i36(d){var x=null,w=new B.b6Z(d,D.eFS,new A.pT(x,x,y.c6),new A.pT(x,x,y.B))
w.bD1(d)
return w},
b6Z:function b6Z(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ctl:function ctl(d){this.a=d},
ctm:function ctm(d){this.a=d},
ctn:function ctn(d){this.a=d},
ctk:function ctk(d){this.a=d},
cto:function cto(d){this.a=d},
i37(d,e){var x=y.N
x=new B.b7_(d,e,A.T(x,y.e),A.T(x,y.z))
x.bD2(d,e)
return x},
b7_:function b7_(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ctr:function ctr(d){this.a=d},
cts:function cts(d){this.a=d},
ctt:function ctt(d){this.a=d},
ctu:function ctu(d){this.a=d},
ctv:function ctv(d){this.a=d},
ctw:function ctw(d){this.a=d},
ctx:function ctx(d){this.a=d},
cty:function cty(d){this.a=d},
hhb(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.x9.H0(x,"ngmy_doc_share_v1",new B.fz9(),1)},
i9N(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cc(d))
if(y.J.b(d))return new Uint8Array(A.cc(J.er(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cc(A.wT(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cH.aL(d)
return x}catch(w){return v}return v},
Sr(d,e){return B.ipo(d,e)},
ipo(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQj
x=7
return A.b(o==null?$.aQj=B.hhb():o,$async$Sr)
case 7:s=g
r=new Uint8Array(A.cc(e))
q=J.mh(s,"blobs","readwrite")
C.iE.mj(J.mg(q,"blobs"),r,d)
x=8
return A.b(J.oA(q),$async$Sr)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
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
return A.i($async$Sr,w)},
Sq(d){return B.ipn(d)},
ipn(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQj
x=7
return A.b(o==null?$.aQj=B.hhb():o,$async$Sq)
case 7:s=f
r=J.mh(s,"blobs","readonly")
x=8
return A.b(C.iE.xS(J.mg(r,"blobs"),d),$async$Sq)
case 8:q=f
x=9
return A.b(J.oA(r),$async$Sq)
case 9:o=B.i9N(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
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
return A.i($async$Sq,w)},
aiq(d){return B.ipm(d)},
ipm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQj
x=7
return A.b(p==null?$.aQj=B.hhb():p,$async$aiq)
case 7:s=f
r=J.mh(s,"blobs","readwrite")
C.iE.Gw(J.mg(r,"blobs"),d)
x=8
return A.b(J.oA(r),$async$aiq)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aiq,w)},
fz9:function fz9(){},
ich(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.brO(w,v))}return u},
hIY(d,e){var x,w={},v=A.aZ_("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fZ1(w,v,e)
C.xb.zg(v,"change",new B.fZ3(w,v,!1))
C.xb.zg(v,"cancel",new B.fZ2(w))
$.eX.mK()
v.click()
A.bO(C.amc,new B.fZ0(w),y.H)},
fZ1:function fZ1(d,e,f){this.a=d
this.b=e
this.c=f},
fZ3:function fZ3(d,e,f){this.a=d
this.b=e
this.c=f},
fZ2:function fZ2(d){this.a=d},
fZ0:function fZ0(d){this.a=d},
DP(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DP=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUQ()?3:4
break
case 3:x=5
return A.b(B.hDx(e,d,s,!0,!1,f,g,h,!1,i),$async$DP)
case 5:x=1
break
case 4:x=6
return A.b(B.S3(d,s,f,g,h,i),$async$DP)
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
return A.b(B.Js(s,d),$async$DP)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fuw(s,d),$async$DP)
case 14:x=12
return A.b(r.hDx(q,p,o,n,m,l,k,j,a1,i),$async$DP)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ee(new B.fZg(s,i,d,f,g,h),!1,null,y.H)),$async$DP)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ee(new B.fZh(s,i,d,f,g,h),!1,null,y.H)),$async$DP)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DP,w)},
S3(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$S3=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1J(e),$async$S3)
case 3:u=k
x=4
return A.b(B.arb(d,e,!1),$async$S3)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Js(e,d),$async$S3)
case 7:if(k){v=D.adH
x=1
break}x=8
return A.b(B.Wn(e),$async$S3)
case 8:v=t?D.Xb:D.adI
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b1H(d,e)){v=D.adH
x=1
break}x=11
return A.b(B.Wn(e),$async$S3)
case 11:v=t?D.Xb:D.adI
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hc_(d,e)){v=D.adH
x=1
break}x=14
return A.b(B.Wn(e),$async$S3)
case 14:v=D.Xb
x=1
break
case 13:v=t?D.Xb:D.adI
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S3,w)},
fuw(d,e){var x=0,w=A.j(y.y),v
var $async$fuw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b1H(e,d)){v=!1
x=1
break}x=3
return A.b(B.b1J(d),$async$fuw)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fuw,w)},
hDx(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ee(new B.fBP(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hyj(d,e,f,g,h,i,j){return new B.a_D(e,j,d,g,h,i,f,null)},
fDJ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fDJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fDM(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fDJ)
case 3:r=f
t.V$=u
t.R$=0
s.V$=u
s.R$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDJ,w)},
fEd(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fEd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.at(C.aw,u)
s=new A.at(C.aw,u)
r=new A.at(C.aw,u)
x=3
return A.b(A.bU(C.L,null,new B.fEf(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fEd)
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
return A.i($async$fEd,w)},
hho(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.l(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fR8(d,e){var x=0,w=A.j(y.H),v
var $async$fR8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wn(e),$async$fR8)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eb()
case 1:return A.h(v,w)}})
return A.i($async$fR8,w)},
fZg:function fZg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fZh:function fZh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adG:function adG(d,e){this.a=d
this.b=e},
fBP:function fBP(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_D:function a_D(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aBE:function aBE(){this.c=this.a=this.d=null},
de8:function de8(d,e){this.a=d
this.b=e},
de5:function de5(d){this.a=d},
de7:function de7(d){this.a=d},
de6:function de6(d){this.a=d},
dea:function dea(){},
de9:function de9(d){this.a=d},
ae9:function ae9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEi:function aEi(d,e){this.a=d
this.b=e},
aHt:function aHt(d,e,f){this.a=d
this.b=e
this.c=f},
fDM:function fDM(d,e,f){this.a=d
this.b=e
this.c=f},
fDK:function fDK(d){this.a=d},
fDL:function fDL(d,e,f){this.a=d
this.b=e
this.c=f},
fEf:function fEf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fEe:function fEe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cf_(d,e,f,g,h){return B.hYW(d,e,f,g,h)},
hYW(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cf_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.ib(r.dO(d,new B.cf0(s,e,h,g,f,q),y.g),y.l),$async$cf_)
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
return A.i($async$cf_,w)},
b1E(d,e,f,g,h){return B.hYX(d,e,f,g,h)},
hYX(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b1E=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awJ("GET",d)
o=A.h8p()
if(o==null)o=new A.MO(A.a([],y.W))
x=7
return A.b(o.f9(0,s).dg(0,C.H6),$async$b1E)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.D5(),$async$b1E)
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
p=A.ab(m)
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
return A.i($async$b1E,w)},
b1D(d){return B.hYU(d)},
hYU(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b1D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dg(0,C.ov),$async$b1D)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.mb(A.m8(p.e)).cD(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
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
return A.i($async$b1D,w)},
ceZ(d){return B.hYV(d)},
hYV(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ceZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dg(0,C.qE),$async$ceZ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mb(A.m8(q.e)).cD(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
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
return A.i($async$ceZ,w)},
cf0:function cf0(d,e,f,g,h,i){var _=this
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
Jq(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hZ1(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jq(C.a.b_(t,u.length))}return null},
hZ2(d){var x=B.Jq(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hYY(){var x,w=$.ox(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hg(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8g(d){return B.hYZ(d)},
hYZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bN),$async$a8g)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
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
return A.i($async$a8g,w)},
a8h(d,e){return B.hZ_(d,e)},
hZ_(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8h=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hQ(d,e,!1,!1,C.cQ,null),$async$a8h)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
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
return A.i($async$a8h,w)},
Cj(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Cj)
case 3:u=f
t=C.a.i(i)
s=A.aW(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jq(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8i(r),$async$Cj)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8g("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cj)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jq(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cj)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hYY()
x=14
return A.b(B.a8i(m),$async$Cj)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8h("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cj)
case 15:k=f
x=16
return A.b(B.a8h("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cj)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aE("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cj)
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
a8i(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jq(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8g("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8i)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8i,w)},
a8j(d,e,f,g){return B.hZ3(d,e,f,g)},
hZ3(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8j=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jq(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8i(r),$async$a8j)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cB(d,0,new B.cf6())>1048576||g.aU(d,new B.cf7())){v=B.Fp(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8u("myCode",d,a0),$async$a8j)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fp(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b1M(u,g.gJ(d),a0),$async$a8j)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ox().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dO(d,new B.cf8(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b1F(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a8j)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
Fp(d,e,f,g,h){return B.hZ0(d,e,f,g,h)},
hZ0(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fp=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fp)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cB(a6,0,new B.cf2())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.T(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ox().aw(9999)
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
a1=B.Ju(a9,q)
a0=new A.Li(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fp)
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
a4=A.nz(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.abV(a1.a,a4,"media",a1.d,a2).xP(m,n,new A.EE(!0,q.c)),$async$Fp)
case 12:J.c4(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fp)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSZ(r),$async$Fp)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dO(a6,new B.cf3(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b1F(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fp)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSZ(r),$async$Fp)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fp,w)},
b1F(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b1F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8g(t),$async$b1F)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b9(r,new B.cf1(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8h(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1F,w)},
Oq(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oq=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8g("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oq)
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
return A.b(B.b1G(k,a0),$async$Oq)
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
return A.b(B.b1L(h),$async$Oq)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wu(g,a0),$async$Oq)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.Y(r,new B.cf4(),q),n)
d=A.B(new A.Y(r,new B.cf5(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cT(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8h("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$Oq)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oq,w)},
b1G(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1G=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.itu(k,j)
C.d.u(s,i)
x=5
return A.b(B.DN(l,m,"Received via My Code",t,e,i),$async$b1G)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSZ(s),$async$b1G)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1G,w)},
cf6:function cf6(){},
cf7:function cf7(){},
cf8:function cf8(){},
cf2:function cf2(){},
cf3:function cf3(){},
cf1:function cf1(){},
cf4:function cf4(){},
cf5:function cf5(){},
fZd(d,e){var x=0,w=A.j(y.H)
var $async$fZd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ee(new B.fZe(e),!1,null,y.H)),$async$fZd)
case 2:return A.h(null,w)}})
return A.i($async$fZd,w)},
bH_(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bH_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ee(new B.fZf(g,e,f),!1,null,y.y)),$async$bH_)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH_,w)},
fZe:function fZe(d){this.a=d},
fZf:function fZf(d,e,f){this.a=d
this.b=e
this.c=f},
Wk:function Wk(d,e){this.c=d
this.a=e},
aFF:function aFF(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e_Y:function e_Y(d,e){this.a=d
this.b=e},
Wo:function Wo(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFI:function aFI(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e16:function e16(d){this.a=d},
e17:function e17(d){this.a=d},
e18:function e18(d){this.a=d},
e15:function e15(d,e){this.a=d
this.b=e},
e19:function e19(d){this.a=d},
e1a:function e1a(d){this.a=d},
e1b:function e1b(d,e){this.a=d
this.b=e},
e1c:function e1c(d,e){this.a=d
this.b=e},
e1d:function e1d(d,e){this.a=d
this.b=e},
e1e:function e1e(d){this.a=d},
e1h:function e1h(){},
e1f:function e1f(d){this.a=d},
e1g:function e1g(d,e){this.a=d
this.b=e},
blV:function blV(){},
Wl:function Wl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aFG:function aFG(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e_Z:function e_Z(d){this.a=d},
e0_:function e0_(d){this.a=d},
hc0(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
hZ5(d){var x=d.l5
if(x>=0)return x
return 4.99},
hZ4(d){var x=d.lL,w=y.N
w=x.jp(x,new B.cfa(),w,w)
return w},
hth(d){var x=d.kI,w=y.N
w=x.jp(x,new B.cfb(),w,w)
return w},
b1J(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b1J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b1J)
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
return A.i($async$b1J,w)},
a8l(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a8l)
case 4:x=3
return A.b(g.aE("String","ngmy_doc_share_path_"+u,e),$async$a8l)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8l,w)},
Wn(d){var x=0,w=A.j(y.H),v,u
var $async$Wn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Wn)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wn,w)},
hc_(d,e){var x,w,v
if(B.hZ5(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hZ4(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bj(w)
return v!=null&&v.cb(new A.V(Date.now(),0,!1))},
b1H(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hth(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bj(x)
return w!=null&&w.cb(new A.V(Date.now(),0,!1))},
hti(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hth(d),x,x)
x=w.h(0,t)
v=A.bj(x==null?"":x)
u=v!=null&&v.cb(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kI=w},
arc(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$arc)
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
return A.i($async$arc,w)},
ard(d){var x=0,w=A.j(y.H),v,u,t
var $async$ard=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arc(d),$async$ard)
case 3:u=f
x=5
return A.b(A.az(),$async$ard)
case 5:x=4
return A.b(f.aE("Int","ngmy_doc_share_usage_"+t,u+1),$async$ard)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ard,w)},
arb(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hc0(d)
if(u<=0){v=!1
x=1
break}if(B.hc_(d,e)){v=!1
x=1
break}x=3
return A.b(B.arc(e),$async$arb)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arb,w)},
b1I(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b1I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Js(e,d),$async$b1I)
case 3:if(g){v=-1
x=1
break}u=B.hc0(d)
if(u<=0){v=-1
x=1
break}if(B.hc_(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arc(e),$async$b1I)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1I,w)},
cfd(d,e,f){var x=0,w=A.j(y.y),v
var $async$cfd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Js(e,d),$async$cfd)
case 3:if(h){v=!1
x=1
break}v=B.arb(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfd,w)},
cfc(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cfc=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.cfd(d,u,i.gUQ()),$async$cfc)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfc,w)},
a8k(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8k=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUQ()){v=!0
x=1
break}if(B.b1H(d,u)){v=!0
x=1
break}x=5
return A.b(A.lA(u,C.Uu),$async$a8k)
case 5:x=k?3:4
break
case 3:B.hti(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8k)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lf(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Uu,"Doc Share for Organizations"),$async$a8k)
case 7:if(!k){v=!1
x=1
break}B.hti(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8k)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8k,w)},
cfa:function cfa(){},
cfb:function cfb(){},
h_d(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h_d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h_d)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fqO.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fqO.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_d,w)},
ivE(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fqO.bq($.fqO,new B.h_f(d))},
h_f:function h_f(d){this.a=d},
fsq(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fsq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.n0(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jq,null,y.H),$async$fsq)
case 3:C.Bw.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mK()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsq,w)},
ahl(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fru.n(0,d,new B.adn(A.br(e,!0,v)))
x=3
return A.b(A.az(),$async$ahl)
case 3:x=2
return A.b(h.aE("String",d+"_manifest",C.V.av(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahl)
case 2:return A.h(null,w)}})
return A.i($async$ahl,w)},
ahf(d){return B.ieb(d)},
ieb(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fru.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ahf)
case 3:u=j.aW(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b9(s,new B.fwc(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aI(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.adn(r)
$.fru.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahf,w)},
RU(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cc(e))
$.Ha.n(0,d,u)
x=3
return A.b(B.Sr(d,u),$async$RU)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
aQE(d){return B.ie9(d)},
ie9(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQE=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Ha.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sq(d),$async$aQE)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.Ha.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aQE)
case 4:s=f
r=A.aW(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cH.aL(r)
x=!J.ct(q)?9:10
break
case 9:B.RU(d,q)
x=11
return A.b(J.fN(s,d),$async$aQE)
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
return A.i($async$aQE,w)},
iae(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cc(J.er(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cc(A.wT(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cc(d)),y.K)
return A.f3(null,y.K)},
a37(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a37=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bF,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fC(r,"loadend",new B.fC0(r,t),!1,s)
A.fC(r,"error",new B.fC1(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.Om,new B.fC2())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a37,w)},
aQZ(d,e,f){return B.igz(d,e,f)},
igz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQZ=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a37(i),$async$aQZ)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sr(o,p),$async$aQZ)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c4(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahl(k,j,s),$async$aQZ)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQZ,w)},
aQY(d,e,f){return B.igy(d,e,f)},
igy(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQY=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQZ(d,e,f),$async$aQY)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a37(f),$async$aQY)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Ha.n(0,s,r)
$.Sc.n(0,s,r)
x=11
return A.b(B.RU(s,r),$async$aQY)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQY,w)},
Ck(d,e,f,g,h,i){return B.hZe(d,e,f,g,h,i)},
hZe(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b1P(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RU(s,d),$async$Ck)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Ck)
case 10:r=a2
x=11
return A.b(r.aE("String",s,C.cL.gco().aL(d)),$async$Ck)
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
return A.b(B.Bd(e),$async$Ck)
case 12:j=a2
J.c4(j,m)
x=13
return A.b(B.Hk(e,j),$async$Ck)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ck,w)},
Wp(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wp=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bd(d),$async$Wp)
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
k=B.htk(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b1P(),null)
$.ahK.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a37(o),$async$Wp)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.Ha.n(0,h,g)
$.Sc.n(0,h,g)
B.RU(h,g)
x=9
break
case 10:x=11
return A.b(B.aQY(d,m,o),$async$Wp)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hk(d,t),$async$Wp)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wp,w)},
hc4(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hc4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.htk(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jt(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Ck(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hc4,w)},
Jt(d,e,f,g,h,i){return B.hZd(d,e,f,g,h,i)},
hZd(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jt=A.e(function(a5,a6){if(a5===1){t.push(a6)
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
return A.b(j.C(),$async$Jt)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ct(m)){x=6
break}J.h1(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cc(J.T0(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kM(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sr(k,l),$async$Jt)
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
return A.b(j.a1(0),$async$Jt)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sr(k,new Uint8Array(A.cc(n))),$async$Jt)
case 15:J.c4(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahl(r,q,g),$async$Jt)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b1P(),null)
x=17
return A.b(B.Bd(d),$async$Jt)
case 17:e=a6
J.c4(e,f)
x=18
return A.b(B.Hk(d,e),$async$Jt)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jt,w)},
Wr(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wr=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahK.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a37(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahf(s),$async$Wr)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sq(u[o]),$async$Wr)
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
case 5:i=$.Sc.h(0,s)
if(i==null)i=$.Ha.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rU(d,e),$async$Wr)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.Sc.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wT(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wr,w)},
htk(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rU(d,e){return B.hZf(d,e)},
hZf(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rU=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Sc.h(0,f)
if(e==null)e=$.Ha.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahK.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a37(s),$async$rU)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.Ha.n(0,f,r)
$.Sc.n(0,f,r)
B.RU(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ahf(f),$async$rU)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aAo(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sq(g[l]),$async$rU)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.aqq()
if(!C.aI.gau(r)){$.Ha.n(0,f,r)
$.Sc.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQE(f),$async$rU)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.Sc.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wr(a0,a1,0,g),$async$rU)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cc(i))
$.Ha.n(0,f,h)
$.Sc.n(0,f,h)
B.RU(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rU,w)},
hZi(d){var x,w,v=$.ahK.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hZj(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hZg(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arj(d,e,f,g,h){return B.hZh(d,e,f,g,h)},
hZh(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arj=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahK.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a37(s),$async$arj)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rU(g,e),$async$arj)
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
return A.b(n.iF(d).xP(h,r,new A.EE(!0,e.c)),$async$arj)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
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
return A.i($async$arj,w)},
htm(d,e,f,g,h){var x,w,v,u,t=$.htl
$.htl=t+1
x=Date.now()
w=""+1000*x+"_"+C.cT.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cfo.n(0,t,new B.byQ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aAo(u)))
return t},
hc5(d){var x=0,w=A.j(y.H)
var $async$hc5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hc5,w)},
Ju(d,e){var $async$Ju=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahK.h(0,h)
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
return A.qy(B.Wr(d,e,p,o<q?o:q),$async$Ju,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qy(A.GI(n),$async$Ju,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qy(B.ahf("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ju,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qy(B.Sq(h[l]),$async$Ju,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qy(A.GI(k),$async$Ju,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qy(B.rU(d,e),$async$Ju,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qy(A.GI(A.wT(j,p,o<i?o:i)),$async$Ju,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qy(null,0,w)
case 2:return A.qy(t.at(-1),1,w)}})
var x=0,w=A.hCl($async$Ju,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hEh(w)},
b1R(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cfo.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a65(),$async$b1R)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1R,w)},
Wq(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Wq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfo.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a65(),$async$Wq)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahl(r.c,u,r.z),$async$Wq)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b1P(),null)
u=r.a
x=5
return A.b(B.Bd(u),$async$Wq)
case 5:s=f
J.c4(s,t)
x=6
return A.b(B.Hk(u,s),$async$Wq)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
a8r(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cfo.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiq(u[s]),$async$a8r)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8r,w)},
cfq(d,e,f){var x=0,w=A.j(y.H)
var $async$cfq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDT(d,e,f),$async$cfq)
case 2:return A.h(null,w)}})
return A.i($async$cfq,w)},
cfr(d,e,f){var x=0,w=A.j(y.H)
var $async$cfr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bDU(d,e,f),$async$cfr)
case 2:return A.h(null,w)}})
return A.i($async$cfr,w)},
Fq(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bd(d),$async$Fq)
case 2:p=g
J.mY(p,new B.cfp(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Ha.W(0,v)
$.ahK.W(0,e)
x=3
return A.b(B.ahf(v),$async$Fq)
case 3:u=g
$.fru.W(0,v)
x=4
return A.b(A.az(),$async$Fq)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fq)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fq)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiq(s[q]),$async$Fq)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiq(v),$async$Fq)
case 13:x=14
return A.b(B.Hk(d,p),$async$Fq)
case 14:return A.h(null,w)}})
return A.i($async$Fq,w)},
b1Q(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b1Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rU(d,e),$async$b1Q)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fsq(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1Q,w)},
Bd(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Bd)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aW(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b9(u,new B.fC3(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bd,w)},
Hk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$Hk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b9(e,new B.fGf(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aE("String","ngmy_doc_share_index_v1_"+u,C.V.av(t,null)),$async$Hk)
case 3:return A.h(null,w)}})
return A.i($async$Hk,w)},
bDT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bd(d),$async$bDT)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fAd(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aGA(f))
x=4
return A.b(B.Hk(d,u),$async$bDT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDT,w)},
bDU(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bDU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bd(d),$async$bDU)
case 3:u=h
t=J.cE(u)
s=t.bk(u,new B.fAe(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cPN(f))
x=4
return A.b(B.Hk(d,u),$async$bDU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bDU,w)},
adn:function adn(d){this.a=d},
fwc:function fwc(){},
fC0:function fC0(d,e){this.a=d
this.b=e},
fC1:function fC1(d){this.a=d},
fC2:function fC2(){},
cfp:function cfp(d){this.a=d},
byQ:function byQ(d,e,f,g,h,i,j,k,l){var _=this
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
fC3:function fC3(){},
fGf:function fGf(){},
fAd:function fAd(d){this.a=d},
fAe:function fAe(d){this.a=d},
a8s(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aU(d,new B.cfu())?3:4
break
case 3:x=5
return A.b(B.b1S(d,e),$async$a8s)
case 5:u=g
if(u!=null){t=u.c
B.Os(d,u.b,e,t)}v=u
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
return A.b(B.b1N(s),$async$a8s)
case 10:case 9:if(g){v=new A.Re(1,D.U7,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Ws(d,e),$async$a8s)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wx(!0,!0,d,e),$async$a8s)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Os(d,D.Ay,e,t)
v=new A.Re(p,D.Ay,t)
x=1
break}v=B.cft(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8s,w)},
Ws(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Ws=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8u(null,d,e),$async$Ws)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b1M(p,d.length,e),$async$Ws)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cfr(e,C.d.gH(d).a,r.b),$async$Ws)
case 7:case 6:q=r.a
x=8
return A.b(B.Os(d,D.U7,e,q),$async$Ws)
case 8:v=new A.Re(d.length,D.U7,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ws,w)},
Wt(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mR(D.n7)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8t(d,e),$async$Wt)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cfm(s,d,e,t),$async$Wt)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b1N(t),$async$Wt)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rU(e,d),$async$Wt)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Ws(A.a([d],y.r),e),$async$Wt)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wt,w)},
Wv(){var x=0,w=A.j(y.H)
var $async$Wv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hbZ(),$async$Wv)
case 2:x=3
return A.b(B.aTl(),$async$Wv)
case 3:return A.h(null,w)}})
return A.i($async$Wv,w)},
a8t(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b1P()
x=3
return A.b(B.cfq(e,d.a,u),$async$a8t)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8t,w)},
Os(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Os=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.U7&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8t(p,f),$async$Os)
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
return A.b(B.cfl(o,p,u,f),$async$Os)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cfm(o,p,f,t),$async$Os)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cfk(o,u,p,f),$async$Os)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Os,w)},
b1S(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfs(e,d),$async$b1S)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wx(!1,!0,d,e),$async$b1S)
case 4:u=g
if(u!=null){t=u.b
v=new A.Re(u.a,D.Ay,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1S,w)},
cfs(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cfs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wr(d,s,0,1),$async$cfs)
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
return A.i($async$cfs,w)},
cft(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cft=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8u(null,d,e),$async$cft)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.htj(u)
if(t.length>800){v=null
x=1
break}v=new A.Re(d.length,D.dVP,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cft,w)},
ark(d,e,f){return B.hZm(d,e,f)},
hZm(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ark=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.mZ(g,1)
x=B.hc3(g)?3:4
break
case 3:x=5
return A.b(B.cfn(g),$async$ark)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mZ(g,13))
try{k=B.Fr(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mZ(g,13))
u=9
x=12
return A.b(B.b1L(q),$async$ark)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wu(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.hc2(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wu(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.Jv(C.a.i(J.mZ(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.Jv(C.a.i(J.mZ(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c6(k,"/"))h=C.a.aA(k,0,k.length-1)
else h=k
v=B.Jv(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wu(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ark,w)},
Jv(d,e,f){return B.hZk(d,e,f)},
hZk(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jv=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c6(e,"manifest.json")){g=C.a.aA(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b1D(r),$async$Jv)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b1D(A.cD(s,0,null)),$async$Jv)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cf_(o,r,a1,n,a2),$async$Jv)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ceZ(q),$async$Jv)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wu(l,a2),$async$Jv)
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
k=A.ab(d)
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
return A.i($async$Jv,w)},
a8u(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8u=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.rU(f,r),$async$a8u)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cL.gco().aL(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.av(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8u,w)},
Wu(d,e){return B.hZl(d,e)},
hZl(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wu=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cH.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Ck(i,a3,d,k,l,o),$async$Wu)
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
g=A.ab(a1)
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
return A.i($async$Wu,w)},
Or:function Or(d,e){this.a=d
this.b=e},
cfu:function cfu(){},
a2H(d){var x=A.O(d).ax.a===C.I,w=x?D.ajp:D.agS,v=x?D.alb:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aim:C.bm
return new A.aIL([w,s,v,u,t,x?C.fq:C.bQ])},
hK_(d,e){var x=e?C.w.j(0.72):C.b5
return A.cg(null,x,!0,null,new B.h3v(e),d,null,!0,!0,y.N)},
cf9(d,e,f,g,h,i,j,k,l){return new B.Wm(e,l,d,f,k,j,g,h,i,null)},
a_F(d,e,f,g,h,i,j){return new B.bgr(g,h,j,e,i,d,f,null)},
h3v:function h3v(d){this.a=d},
a_C:function a_C(d,e){this.c=d
this.a=e},
aBD:function aBD(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
de4:function de4(d){this.a=d},
de2:function de2(d){this.a=d},
de3:function de3(d){this.a=d},
bys:function bys(){},
Wm:function Wm(d,e,f,g,h,i,j,k,l,m){var _=this
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
aFH:function aFH(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e14:function e14(d){this.a=d},
e0s:function e0s(d,e){this.a=d
this.b=e},
e0t:function e0t(d,e){this.a=d
this.b=e},
e01:function e01(d,e,f){this.a=d
this.b=e
this.c=f},
e00:function e00(d){this.a=d},
e02:function e02(d,e){this.a=d
this.b=e},
e07:function e07(d,e,f){this.a=d
this.b=e
this.c=f},
e06:function e06(d){this.a=d},
e0T:function e0T(d,e){this.a=d
this.b=e},
e0U:function e0U(d){this.a=d},
e0p:function e0p(d,e,f){this.a=d
this.b=e
this.c=f},
e0m:function e0m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e05:function e05(d){this.a=d},
e0x:function e0x(d){this.a=d},
e0w:function e0w(){},
e0b:function e0b(d){this.a=d},
e0Q:function e0Q(d,e){this.a=d
this.b=e},
e0R:function e0R(d,e){this.a=d
this.b=e},
e0S:function e0S(d,e){this.a=d
this.b=e},
e0n:function e0n(d,e){this.a=d
this.b=e},
e0o:function e0o(d,e){this.a=d
this.b=e},
e0J:function e0J(d,e){this.a=d
this.b=e},
e0F:function e0F(d){this.a=d},
e0E:function e0E(d){this.a=d},
e0G:function e0G(){},
e0H:function e0H(){},
e0I:function e0I(d,e){this.a=d
this.b=e},
e0K:function e0K(){},
e0L:function e0L(d){this.a=d},
e0D:function e0D(d,e){this.a=d
this.b=e},
e0y:function e0y(d){this.a=d},
e0z:function e0z(d){this.a=d},
e0A:function e0A(d){this.a=d},
e0B:function e0B(d){this.a=d},
e0C:function e0C(d){this.a=d},
e08:function e08(){},
e09:function e09(d){this.a=d},
e0a:function e0a(d,e){this.a=d
this.b=e},
e04:function e04(d,e){this.a=d
this.b=e},
e03:function e03(d,e,f){this.a=d
this.b=e
this.c=f},
e0q:function e0q(d){this.a=d},
e0r:function e0r(d,e,f){this.a=d
this.b=e
this.c=f},
e0k:function e0k(d,e){this.a=d
this.b=e},
e0g:function e0g(d){this.a=d},
e0d:function e0d(d,e,f){this.a=d
this.b=e
this.c=f},
e0h:function e0h(d){this.a=d},
e0i:function e0i(d){this.a=d},
e0j:function e0j(){},
e0l:function e0l(d,e){this.a=d
this.b=e},
e0e:function e0e(d){this.a=d},
e0c:function e0c(d,e,f){this.a=d
this.b=e
this.c=f},
e0f:function e0f(){},
e0v:function e0v(d){this.a=d},
e0u:function e0u(d,e){this.a=d
this.b=e},
e0P:function e0P(d,e){this.a=d
this.b=e},
e0M:function e0M(d){this.a=d},
e0N:function e0N(d,e){this.a=d
this.b=e},
e0O:function e0O(d){this.a=d},
e11:function e11(d){this.a=d},
e1_:function e1_(d){this.a=d},
e10:function e10(d){this.a=d},
e12:function e12(){},
e13:function e13(d,e){this.a=d
this.b=e},
e0W:function e0W(d,e){this.a=d
this.b=e},
e0X:function e0X(d,e,f){this.a=d
this.b=e
this.c=f},
e0V:function e0V(d,e,f){this.a=d
this.b=e
this.c=f},
e0Y:function e0Y(d,e){this.a=d
this.b=e},
e0Z:function e0Z(d,e){this.a=d
this.b=e},
aBA:function aBA(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bgq:function bgq(d,e,f){this.c=d
this.d=e
this.a=f},
de0:function de0(){},
de1:function de1(){},
adH:function adH(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
deo:function deo(){},
den:function den(d){this.a=d},
a_E:function a_E(d,e,f){this.c=d
this.d=e
this.a=f},
aBF:function aBF(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dek:function dek(d){this.a=d},
del:function del(d,e,f){this.a=d
this.b=e
this.c=f},
dem:function dem(d,e){this.a=d
this.b=e},
dei:function dei(d,e){this.a=d
this.b=e},
deg:function deg(d){this.a=d},
dee:function dee(d){this.a=d},
deb:function deb(d){this.a=d},
deh:function deh(d){this.a=d},
ded:function ded(d){this.a=d},
dej:function dej(d){this.a=d},
def:function def(d){this.a=d},
dec:function dec(d){this.a=d},
a_B:function a_B(d,e,f){this.c=d
this.d=e
this.a=f},
aBC:function aBC(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
ddY:function ddY(d){this.a=d},
ddX:function ddX(d,e){this.a=d
this.b=e},
ddZ:function ddZ(d){this.a=d},
ddW:function ddW(d,e){this.a=d
this.b=e},
de_:function de_(d){this.a=d},
ddV:function ddV(d,e){this.a=d
this.b=e},
ddR:function ddR(d){this.a=d},
ddS:function ddS(d){this.a=d},
ddT:function ddT(d,e){this.a=d
this.b=e},
ddU:function ddU(d){this.a=d},
QO:function QO(d,e,f){this.c=d
this.d=e
this.a=f},
aBI:function aBI(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
deB:function deB(d){this.a=d},
deC:function deC(d){this.a=d},
deD:function deD(d){this.a=d},
deE:function deE(d){this.a=d},
deF:function deF(d,e){this.a=d
this.b=e},
deG:function deG(d){this.a=d},
deI:function deI(d){this.a=d},
deH:function deH(d){this.a=d},
a_G:function a_G(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aBG:function aBG(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dex:function dex(d,e){this.a=d
this.b=e},
dey:function dey(d,e){this.a=d
this.b=e},
dep:function dep(d,e,f){this.a=d
this.b=e
this.c=f},
deq:function deq(d){this.a=d},
der:function der(){},
dew:function dew(){},
des:function des(d,e){this.a=d
this.b=e},
det:function det(d,e){this.a=d
this.b=e},
deu:function deu(d,e){this.a=d
this.b=e},
dev:function dev(d,e){this.a=d
this.b=e},
adF:function adF(d,e){this.c=d
this.a=e},
ddQ:function ddQ(d){this.a=d},
a_A:function a_A(d){this.a=d},
aBB:function aBB(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_H:function a_H(d,e){this.c=d
this.a=e},
aBH:function aBH(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
deA:function deA(d){this.a=d},
dez:function dez(d){this.a=d},
bgr:function bgr(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hZn(){var x,w=$.ox(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hg(v)},
Ot(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ot=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Ot)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$Ot)
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
q=A.ab(n)
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
return A.i($async$Ot,w)},
a8v(d){return B.hZo(d)},
hZo(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8v)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$a8v)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8v,w)},
Ww(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Ww=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ot(),$async$Ww)
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
return A.b(B.a8v(s),$async$Ww)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ww,w)},
Wx(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wx=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wx)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.br(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.B(new A.Y(f,new B.cfw(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hZn()
t=A.U(u).k("N<1,aa<q,aJ>>")
r=A.B(new A.N(u,new B.cfx(s),t),t.k("ak.E"))
x=6
return A.b(B.Ot(),$async$Wx)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8v(q),$async$Wx)
case 7:x=8
return A.b(B.a8w(r,u,g,s),$async$Wx)
case 8:v=new A.bsi(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wx,w)},
arl(d){var x=0,w=A.j(y.y),v,u,t
var $async$arl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ot(),$async$arl)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arl,w)},
cfy(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cfy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ot(),$async$cfy)
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
return A.i($async$cfy,w)},
a8w(d,e,f,g){return B.hZp(d,e,f,g)},
hZp(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8w=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arj("media",r,new B.cfv(s,e,g),f,q),$async$a8w)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Ww(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8w)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Ww(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8w)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Ww(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8w)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8w,w)},
Fr(d,e,f){return B.hZq(d,e,f)},
hZq(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fr=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fr)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arl(b3),$async$Fr)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.iR,null,g),$async$Fr)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arl(b3),$async$Fr)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ot(),$async$Fr)
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
b0=A.nz(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.abV(a8.a,b0,"media",a8.d,a9).Dq(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b1E(k,n,o,s,b7),$async$Fr)
case 17:j=c0
if(j!=null){J.c4(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
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
a8=A.nz(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.abV(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fr)
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
return A.b(B.a8v(e),$async$Fr)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fr,w)},
cfw:function cfw(){},
cfx:function cfx(d){this.a=d},
cfv:function cfv(d,e,f){this.a=d
this.b=e
this.c=f},
aTl(){var x=0,w=A.j(y.H),v,u
var $async$aTl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i9x=null
v=y.H
u=A.dL(null,v)
x=2
return A.b(u,$async$aTl)
case 2:u=A.dL(null,v)
x=3
return A.b(u,$async$aTl)
case 3:u=$.hhA
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dL(u,v),$async$aTl)
case 4:$.hhA=$.iim=$.iin=null
return A.h(null,w)}})
return A.i($async$aTl,w)},
fFR(d){var x=0,w=A.j(y.H),v,u
var $async$fFR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aak){x=1
break}u=new A.bn($.bF,y.d4)
d.c=new B.fFS(new A.c7(u,y.aY))
x=3
return A.b(u.ix(0,C.id,new B.fFT()),$async$fFR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fFR,w)},
iik(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hZ7(x):x},
hhE(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.Y(u,"WR")){v=B.arn(u)
x=1
break}v=B.hc2(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhE,w)},
hhD(d){var x=0,w=A.j(y.T),v,u,t
var $async$hhD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.Y(u,"WR")){v=B.aro(u)
x=1
break}v=B.hc2(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhD,w)},
fZX(d){var x=0,w=A.j(y.T),v
var $async$fZX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aro(d),$async$fZX)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fZX,w)},
bEO(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bEO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hhD(d),$async$bEO)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEO,w)},
ftd(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$ftd=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Wq(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Ck(d.aqq(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftd,w)},
Hm(d,e,f){return B.ikE(d,e,f)},
ikE(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hhE(a1),$async$Hm)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
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
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hM_().aGR(D.dHZ,null),$async$Hm)
case 4:l=d.hhA=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aAo(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bF,y.b1)
l.y=new B.fGs(f,k,new B.fGt(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a98(0,new B.YI(r,"offer")),$async$Hm)
case 5:d=l
x=7
return A.b(l.amP(0),$async$Hm)
case 7:x=6
return A.b(d.a90(0,a4),$async$Hm)
case 6:x=8
return A.b(B.fFR(l),$async$Hm)
case 8:x=9
return A.b(l.ard(),$async$Hm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iik(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.av(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arp(m,h),$async$Hm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.htj(h)
case 11:v=new A.bry(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hm,w)},
fFS:function fFS(d){this.a=d},
fFT:function fFT(){},
fGt:function fGt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fGs:function fGs(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fGr:function fGr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
imJ(d){switch(d){case"new":return D.eFT
case"checking":return D.eFU
case"connected":return D.eFW
case"completed":return D.eFV
case"failed":return D.eFY
case"disconnected":return D.eFZ
case"closed":return D.aSk
case"count":return D.eFX}return D.aSk},
imK(d){switch(d){case"new":return D.aSl
case"gathering":return D.eG_
case"complete":return D.aak}return D.aSl},
ixc(d){switch(d){case"stable":return D.eG0
case"have-local-offer":return D.eG1
case"have-local-pranswer":return D.eG3
case"have-remote-offer":return D.eG2
case"have-remote-pranswer":return D.eG4
case"closed":return D.aSr}return D.aSr},
ivl(d){switch(d){case"new":return D.aSo
case"connecting":return D.aSp
case"connected":return D.aSq
case"closed":return D.aal
case"disconnected":return D.aSn
case"failed":return D.aSm}return D.aal},
aaR:function aaR(d,e){this.a=d
this.b=e},
Px:function Px(d,e){this.a=d
this.b=e},
YH:function YH(d,e){this.a=d
this.b=e},
Pw:function Pw(d,e){this.a=d
this.b=e},
FW:function FW(d,e){this.a=d
this.b=e},
ctp:function ctp(){},
hdP(d){var x=new B.FV()
x.a=d
x.b=!0
return x},
FV:function FV(){this.b=this.a=$},
aaQ:function aaQ(){},
avW:function avW(){},
YI:function YI(d,e){this.a=d
this.b=e},
hbZ(){var x=0,w=A.j(y.H)
var $async$hbZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hbZ,w)},
hc1(d,e,f){var x=0,w=A.j(y.T),v
var $async$hc1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mR(D.n7))){v=null
x=1
break}v=B.h_d(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hc1,w)},
htj(d){var x,w=C.agi.a5P(C.dW.aL(d),null)
if(w.length===0){x=C.dW.aL(d)
return C.cL.gco().aL(x)}return C.cL.gco().aL(w)},
hZ6(d){var x,w,v=C.cH.aL(d)
try{x=C.cb.cD(0,C.agh.bgM(v,!1))
return x}catch(w){x=C.cb.cD(0,v)
return x}},
hc2(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.hZ6(C.a.b_(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.b_(t,w.length)
try{v=C.cb.cD(0,C.cH.aL(x))
return v}catch(u){return x}}return null},
hZ7(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aN(s,"\n")},
hZ8(){var x,w=$.ox(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hg(v)},
b1K(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b1K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b1K)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$b1K,w)},
cfe(d,e){return B.hZ9(d,e)},
hZ9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cfe=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cQ,null),$async$cfe)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$cfe,w)},
b1N(d){var x=0,w=A.j(y.y),v,u,t
var $async$b1N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b1K(d),$async$b1N)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1N,w)},
b1M(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b1M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hZ8()
r=C.a.i(f)
t=C.dW.aL(s)
x=3
return A.b(B.cfe(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cL.gco().aL(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b1M)
case 3:if(!h){v=null
x=1
break}v=new A.a1H("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1M,w)},
b1L(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b1L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b1K(o),$async$b1L)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cb.cD(0,C.cH.aL(u))
if(J.j0(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b1L,w)},
cff(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cff=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(A.bFM("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cQ),$async$cff)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cff,w)},
b1O(d){var x=0,w=A.j(y.h),v,u,t
var $async$b1O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jr(),$async$b1O)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1O,w)},
arg(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arg)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aW(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b1O(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arg,w)},
are(d,e){var x=0,w=A.j(y.H)
var $async$are=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$are)
case 3:x=2
return A.b(g.aE("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$are)
case 2:return A.h(null,w)}})
return A.i($async$are,w)},
a8n(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8n=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8n)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jr(),$async$a8n)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dq(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a8m(s),$async$a8n)
case 5:x=6
return A.b(B.are(f,u),$async$a8n)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8n,w)},
a8o(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8o=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8o)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jr(),$async$a8o)
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
return A.b(B.are(g,q),$async$a8o)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8m(u),$async$a8o)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
a8p(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8p)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jr(),$async$a8p)
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
s=B.b1H(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a8p)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aE("String","ngmy_doc_share_school_session_"+s,C.V.av(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8p)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8p,w)},
cfg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cfg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cfg)
case 7:s=f
p=A.w(n)
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
return A.i($async$cfg,w)},
Js(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Js=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cfg(d),$async$Js)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b1O(t),$async$Js)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arf(d),$async$Js)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b1H(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arf(d),$async$Js)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Js,w)},
arf(d){var x=0,w=A.j(y.H)
var $async$arf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$arf)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arf)
case 2:return A.h(null,w)}})
return A.i($async$arf,w)},
b1P(){var x,w=$.ox(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hg(v)},
a8q(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hc3(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cfj(d){return B.hZb(d)},
hZb(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cfj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8q(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cfj)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$cfj,w)},
ari(d,e){return B.hZc(d,e)},
hZc(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ari=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8q(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hQ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cQ,null),$async$ari)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
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
return A.i($async$ari,w)},
cfl(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8q(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ari(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfl,w)},
cfk(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cfk=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8q(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ari(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cfk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cfk,w)},
cfm(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cfm=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8q(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ari(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfm,w)},
cfn(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cfn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hc3(d)){v=null
x=1
break}x=3
return A.b(B.cfj(d),$async$cfn)
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
return A.i($async$cfn,w)},
a8x(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8x)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8x)
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
q=A.ab(n)
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
return A.i($async$a8x,w)},
arm(d){return B.hZr(d)},
hZr(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$arm)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hQ("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cQ,null),$async$arm)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arm,w)},
arn(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$arn)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8x(),$async$arn)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cb.cD(0,C.cH.aL(q))
if(J.j0(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dI(A.a1(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.arm(s),$async$arn)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
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
return A.i($async$arn,w)},
arp(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$arp)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8x(),$async$arp)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dI(A.a1(s,r,q),r,q)
r=C.dW.aL(C.a.i(e))
q.n(0,"answer",C.cL.gco().aL(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.arm(u),$async$arp)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arp,w)},
aro(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aro=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aro)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8x(),$async$aro)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cb.cD(0,C.cH.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aro,w)},
aqf(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.r_)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$aqf)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.hf),$async$aqf)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.uK(o))
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
return A.i($async$aqf,w)},
itu(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b1(C.o.v(w),5,"0")
return v},
fY7(d){return B.itw(d)},
itw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fY7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iF("media").LG(d,3600),$async$fY7)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
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
return A.i($async$fY7,w)},
DN(d,e,f,g,h,i){var x=null
return B.itt(d,e,f,g,h,i)},
itt(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DN=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.htm(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hc5(r),$async$DN)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fY7(o),$async$DN)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8r(r),$async$DN)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aW0)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MO(A.a([],g))
x=15
return A.b(d.f9(0,A.awJ("GET",A.cD(n,0,null))).dg(0,C.H6),$async$DN)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8r(r),$async$DN)
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
return A.b(B.b1R(r,k),$async$DN)
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
case 10:i=B.Wq(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8r(r),$async$DN)
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
aSZ(d){return B.itv(d)},
itv(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iF("media").W(0,d),$async$aSZ)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSZ,w)}},D,H,G,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[143]
F=c[147]
B=a.updateHolder(c[17],B)
D=c[146]
H=c[112]
G=c[121]
I=c[43]
K=c[138]
L=c[45]
B.ctq.prototype={
aGR(d,e){return this.cRh(d,e)},
cRh(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.T(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dI(r,s,t)
t.u(0,d)
u=new q(A.kl(A.cu(t)))
t=J.k(u)
v=B.i37(C.cL.gco().aL(new A.d9(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGR,w)}}
B.b6Z.prototype={
bD1(d){var x=this,w=x.w
w.onclose=A.hv(new B.ctl(x))
w.onopen=A.hv(new B.ctm(x))
w.onmessage=A.hv(new B.ctn(x))
w.onbufferedamountlow=A.hv(new B.cto(x))},
gd2(d){return this.x},
aj2(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aj2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FV()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hdP(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$aj2)
case 8:v=t.hdP(s.apo(f,0,null))
x=1
break
case 7:case 4:v=B.hdP(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aj2,w)}}
B.b7_.prototype={
bD2(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hv(new B.ctr(x)))
w.addEventListener("icecandidate",A.hv(new B.cts(x)))
w.addEventListener("iceconnectionstatechange",A.hv(new B.ctt(x)))
w.onicegatheringstatechange=A.hv(new B.ctu(x))
w.addEventListener("signalingstatechange",A.hv(new B.ctv(x)))
if(!$.hlK())w.addEventListener("connectionstatechange",A.hv(new B.ctw(x)))
w.addEventListener("negotiationneeded",A.hv(new B.ctx(x)))
w.addEventListener("track",A.hv(new B.cty(x)))},
amP(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kl(A.cu(A.T(y.N,y.z)))),y.aQ),$async$amP)
case 3:t=f
v=new B.YI(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amP,w)},
a90(d,e){return this.brY(0,e)},
brY(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a90=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a90)
case 2:return A.h(null,w)}})
return A.i($async$a90,w)},
a98(d,e){return this.bsi(0,e)},
bsi(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a98=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a98)
case 2:return A.h(null,w)}})
return A.i($async$a98,w)},
ard(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ard=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.YI(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ard,w)},
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
B.adG.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_D.prototype={
S(){return new B.aBE()},
gd1(){return this.c}}
B.aBE.prototype={
Z(){this.a3()
this.afy()},
afy(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1I(u.e,u.c),$async$afy)
case 2:t=e
if(v.c!=null)v.m(new B.de8(v,t))
return A.h(null,w)}})
return A.i($async$afy,w)},
Ri(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ri=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arb(t.e,t.c,!1),$async$Ri)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.ftV)
x=1
break}x=4
return A.b(B.a8l(u.a.c,"individual"),$async$Ri)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7n(A.ee(new B.de5(u),!1,null,y.H)),$async$Ri)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ri,w)},
K_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$K_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fDJ(o),$async$K_)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8p(o.e,r,s,q),$async$K_)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.fqU)
x=1
break}x=5
return A.b(B.a8l(u.a.c,"member"),$async$K_)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7n(A.ee(new B.de7(u),!1,null,y.H)),$async$K_)
case 6:case 1:return A.h(v,w)}})
return A.i($async$K_,w)},
yN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8k(t.e,o,t.f,t.r,t.w,s),$async$yN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8l(u.a.c,"org_owner"),$async$yN)
case 4:x=5
return A.b(B.arg(u.a.c),$async$yN)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fEd(o),$async$yN)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8n(s,t,o,q.c),$async$yN)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.fqQ)
x=1
break}x=10
return A.b(B.arg(u.a.c),$async$yN)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7n(A.ee(new B.de6(u),!1,null,y.H)),$async$yN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I,q=r?C.nz:C.qr,p=B.hc0(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aE(d,C.dD,y.m).w
w=A.l(28)
v=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fP,24)],y.V)
u=y.p
v=A.o(s,A.x(A.a([A.o(s,D.fO2,C.f,s,s,new A.n(C.c.j(0.2),s,s,A.l(20),s,s,C.n),s,s,s,s,C.hm,s,s,s),C.aB,D.h74,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.m(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),C.f,s,s,new A.n(s,s,s,w,v,D.ccr,C.n),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.dea(),s),C.P,v,C.e4,A.d(w,s,s,s,s,s,s,A.m(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.m(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.ae9(C.eY,C.aEP,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gckh(),s),C.af],u))
w.push(new B.ae9(C.pA,C.a5L,"Team Member","Sign in with your organization access code + password",t.gcl8(),s))
w.push(C.af)
w.push(new B.ae9(C.aqO,C.a7q,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gckE(),s))
return A.c5(s,q,A.bm(!0,A.ca(A.x(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.P(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.ae9.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.l(22)
q=A.l(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.l(16)
u=y.p
return A.aF(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eE(A.A(A.a([A.o(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.n(s,s,s,v,s,new A.a7(C.a5,C.a9,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eu,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.lZ,s,s,s),C.ax,A.d(t.f,s,s,s,s,s,s,A.m(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.zt,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.n(p,s,w,q,s,s,C.n),s,C.bT,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEi.prototype={}
B.aHt.prototype={}
B.jD.prototype={
mR(d){var x=this.b,w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b_(x,w+1).toLowerCase())},
garU(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.ad(x/1024,1)+" KB"
if(x<1073741824)return C.h.ad(x/1048576,1)+" MB"
return C.h.ad(x/1073741824,2)+" GB"},
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
bgf(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cPN(d){return this.bgf(null,d)},
aGA(d){return this.bgf(d,null)}}
B.Wk.prototype={
S(){return new B.aFF(new A.cy(null,y.A))},
gd1(){return this.c}}
B.aFF.prototype={
Z(){this.a3()
this.afz()},
afz(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cj(u.a.c),$async$afz)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.e_Y(u,t))
case 1:return A.h(v,w)}})
return A.i($async$afz,w)},
afA(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fx(s)),$async$afA)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fuQ)
case 1:return A.h(v,w)}})
return A.i($async$afA,w)},
a00(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a00=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqf(s.d,4),$async$a00)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_my_code_"+m+".png"),$async$a00)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a00,w)},
aju(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aju=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abu("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aju)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aju,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.nz:C.qr,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m6
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
w=A.o(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.m(p,p,m,p,p,p,p,p,p,p,E.a6b,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.m(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.n(p,p,u,v,p,new A.a7(C.a5,C.a9,C.x,w,p,p),C.n),p,p,p,p,C.anq,p,p,1/0)
v=A.l(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nd,w,C.lb,new A.e6(A.o(p,A.qh(p,p,!1,B.hZ2(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.n(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bT,p,p,p),q.d),C.af,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.m(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lb,A.A(A.a([A.E(A.ep(C.DC,p,C.Wy,q.gccx(),p),1),C.as,A.E(A.de(C.zV,p,C.acG,q.gccy(),A.bp(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.T,new A.a5(1/0,p,A.ep(G.a4w,p,D.h2C,q.gcA3(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,I.anZ,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.Wo.prototype={
S(){return new B.aFI(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aFI.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.Jq(x==null?"":x)
if(w!=null)this.d.sb4(0,w)},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
a01(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jq(u.d.a.a)
if(t==null){u.m(new B.e16(u))
x=1
break}u.m(new B.e17(u))
s=u.a
r=s.c
x=3
return A.b(B.a8j(s.d,new B.e18(u),t,r),$async$a01)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e19(u))
if(q){s=u.c
s.toString
A.a6(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a01,w)},
a3g(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3g=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.e1a(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.rU(r.a.c,q),$async$a3g)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e1b(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aj8(p,m,l,j,k),$async$a3g)
case 8:o=e
if(r.c!=null)r.m(new B.e1c(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.e1d(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e1e(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3g,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ajp:D.agS,h=j?D.alb:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aim:C.bm
i=[i,e,h,g,f,j?C.fq:C.bQ]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.m(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dr(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dr(!0,A.o(k,k,C.f,k,k,new A.n(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.l(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.o(k,A.A(A.a([A.o(k,D.c_r,C.f,k,k,new A.n(k,k,k,A.l(16),k,new A.a7(C.ay,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eu,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.m(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.ax,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.n(u,k,s,t,k,k,C.n),k,k,k,k,C.fu,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.m(k,k,i[3],k,k,k,k,k,k,k,E.a6b,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blV()],y.E)
p=A.m(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.OI,k,k,"",k,!0,new A.b6(4,A.l(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.l(18),new A.ax(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e1f(l),k,!1,k,k,!1,k,!0,k,C.ac,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mB,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.l(18)
n=A.K(i[1],C.r,1)
m=J.Mt(l.a.d,4)
m=A.B(new A.N(m,new B.e1g(x,new A.aIL(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ln,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.db,p,C.P,A.o(k,A.x(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.n(o,k,n,u,k,k,C.n),k,k,k,k,C.ez,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.l(14)
s=A.K(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fpm)
else q.push(A.X(C.l_,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.m(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cU(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b0,new A.n(u,k,s,t,k,k,C.n),C.iQ,k,k,k,k,C.eX,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bHR,k,k,C.ah),1)
u=l.f?k:l.gcA4()
t=i[3]
s=i[1]
q=A.l(16)
s=A.ep(G.a4w,k,D.h3J,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.co,k,new A.ba(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.m(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gccz()
t=A.bp(C.aD,k,k,0,C.c,k,C.nG,k,new A.ba(A.l(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bm(!0,A.lD(new B.e1h(),A.x(A.a([e,new A.D(D.bHk,A.x(A.a([s,C.P,i,C.af,A.bJ(l.f?C.tZ:D.h1Z,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.ck,C.a0N,k,k,new A.bt(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blV.prototype={
pb(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ho(C.bB,v.length),C.aP)}}
B.Wl.prototype={
S(){return new B.aFG()}}
B.aFG.prototype={
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
u.f=new A.at(C.aw,v)},
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
afB(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afB=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.e_Z(r))
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
return A.b(B.a8o(p,m,n,o,C.a.i(l).length===0?null:l),$async$afB)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fur)
s=[1]
x=4
break}p.K(y.q).f.U(D.ft2)
p=r.c
p.toString
A.a6(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.e0_(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afB,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.nz:C.qr,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fVk,s,s,s,1,s,!0),p=A.o(s,D.bzm,C.f,s,s,new A.n(s,s,s,A.l(22),s,C.Iv,C.n),s,s,s,s,C.ac,s,s,s),o=t.d
o===$&&A.c()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c6N,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c6I,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c6Y,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ac,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gccA()
u=A.bp(C.aD,s,s,s,s,C.hg,s,s,s,s,s,s)
return A.c5(q,r,A.ca(A.x(A.a([p,C.db,o,C.af,x,C.af,w,C.nd,A.bJ(t.r?C.tZ:C.aYR,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ac,s,s,C.ah),s,!1,!1,s,s)}}
B.adn.prototype={}
B.byQ.prototype={
a65(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a65=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cc(r.aqq()))
x=3
return A.b(B.Sr(t,s),$async$a65)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a65,w)},
gd1(){return this.a}}
B.Or.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_C.prototype={
S(){return new B.aBD(new A.at(C.aw,$.aw()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aBD.prototype={
Z(){this.a3()
$.aU.x1$.push(new B.de4(this))},
t(){var x=this.d
x.V$=$.aw()
x.R$=0
this.e.t()
this.a2()},
ccG(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a2H(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nz:v.a[0],p=A.l(24),o=A.K(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fP,32)],n),l=A.o(w,H.atv,C.f,w,w,new A.n(w,w,w,A.l(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cz,16)],n),C.auk,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.m(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.m(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.m(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bys()],y.E),g=A.m(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.CL,w,w,"",w,!0,new A.b6(4,A.l(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.l(16),D.b73),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.de2(x),w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mB,w,w,w,w)
f=f[1]
h=y.p
return A.eI(w,C.L,new A.cN(C.Mr,new A.bN(new A.n(t,w,o,p,m,w,C.n),C.bk,new A.D(C.wK,A.x(A.a([l,C.aO,k,C.P,j,C.e4,i,C.e4,A.A(A.a([A.E(A.dV(C.o8,new B.de3(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.co,w,new A.ba(A.l(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.as,A.E(new A.bN(new A.n(w,w,w,A.l(14),A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cM,12)],n),F.QJ,C.n),C.bk,A.aF(!1,C.a3,!0,w,A.aM(!1,A.l(14),!0,D.ezg,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gccF(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.OR,w,C.d7,w,w,w)}}
B.bys.prototype={
pb(d,e){return e.amJ(e.a.toUpperCase())}}
B.Wm.prototype={
S(){return new B.aFH(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aFH.prototype={
Z(){var x=this
x.a3()
x.uu()
x.w=A.dh(C.jJ,new B.e14(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wv()
this.a2()},
a29(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a29=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oq(u.a.c),$async$a29)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bd(u.a.c),$async$a29)
case 4:u.m(new s.e0s(u,e))
u.ip("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a29,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oq(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bd(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.e0t(u,s))
if(t>0)u.ip("Received "+A.w(t)+" file(s) via My Code.")
u.Or(u.d)
B.Cj(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
Or(d){return this.bH4(d)},
bH4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Or=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8t(r,u.a.c),$async$Or)
case 8:p=f
if(u.c==null){x=1
break}new B.e01(u,r,p).$0()
u.c.eq()
case 7:if(!(C.a.Y(r.c,"video/")||r.mR(D.n7))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wt(r,u.a.c),$async$Or)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bd(u.a.c),$async$Or)
case 12:u.m(new o.e02(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Or,w)},
OR(d){return this.bNq(d)},
bNq(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$OR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8t(d,u.a.c),$async$OR)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.e07(u,d,t))
x=6
return A.b(A.fH(new A.fx(t)),$async$OR)
case 6:u.ip("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fx(r.toUpperCase())),$async$OR)
case 7:u.ip("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$OR,w)},
ip(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b2(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cL1(d,e)},
cL1(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e0T(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e0U(r))
$.eX.mK()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaYo(){var x=this.a
return x.f||x.r||x.w},
IP(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaYo()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cfc(s,n,r,q,o,t),$async$IP)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ip("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fR8(o,u.a.c),$async$IP)
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
a1c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arg(u.a.c),$async$a1c)
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
return A.b(A.a6(t,!1).ce(A.ee(new B.e0p(u,r,q),!1,null,y.H)),$async$a1c)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1c,w)},
a2j(d){return this.ctC(d)},
ctB(){return this.a2j(1)},
ctC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaYo()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ard(u.a.c),$async$a2j)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2j,w)},
adr(d,e,f){return this.c3r(d,e,f)},
c3r(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip(e)
x=1
break}x=3
return A.b(u.uv(new B.e0m(u,d,null,e,f),"Uploading\u2026"),$async$adr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adr,w)},
bHd(){B.hIY(!1,new B.e05(this))
return},
cyF(){this.m(new B.e0x(this))},
aB2(){var x=0,w=A.j(y.H),v=this
var $async$aB2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bHd()
return A.h(null,w)}})
return A.i($async$aB2,w)},
adn(){var x=0,w=A.j(y.H),v=this
var $async$adn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e0b(v),"Importing\u2026"),$async$adn)
case 2:return A.h(null,w)}})
return A.i($async$adn,w)},
Tl(d){return this.cKl(d)},
cKl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Tl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e0Q(u,d),!1,null,y.H)),$async$Tl)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mR(D.SL)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ee(new B.e0R(u,d),!1,null,y.H)),$async$Tl)
case 8:x=1
break
case 7:x=u.c49(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ee(new B.e0S(u,d),!1,null,y.H)),$async$Tl)
case 11:x=1
break
case 10:u.ip("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Tl,w)},
c49(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pf(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cVY,C.a.b_(x,w+1).toLowerCase())},
ahc(d){return this.ckl(d)},
ckl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mR(D.n7)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ee(new B.e0n(u,d),!1,null,y.H)),$async$ahc)
case 5:x=1
break
case 4:u.m(new B.e0o(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahc,w)},
SH(d){return this.cBy(d)},
cBy(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ip("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$SH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e0J(u,d),"Preparing QR\u2026"),$async$SH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
ajU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e0K(),A.U(t).k("N<1,q>")).fF(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e0L(q),s),s.k("M.E"))
if(r.length===0){u.ip("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SH(r),$async$ajU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajU,w)},
ajN(d){return this.cB5(d)},
cB5(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2H(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0D(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajN)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Tl(d)
break
case"qr":u.SH(A.a([d],y.r))
break
case"send_my_code":u.ckY(A.a([d],y.r))
break
case"save":u.aja(d)
break
case"delete":u.JJ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajN,w)},
YM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.e08(),A.U(t).k("N<1,q>")).fF(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.B(new A.Y(t,new B.e09(q),s),s.k("M.E"))
if(r.length===0){u.ip("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pD(t,s.c,s.f),$async$YM)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e0a(u,r),"Preparing file\u2026"),$async$YM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YM,w)},
aih(d){return this.crU(d)},
crU(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aih=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hK_(d,!1),$async$aih)
case 3:s=f
r=s==null
q=B.a8q(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ip("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aih,w)},
ahi(){var x=0,w=A.j(y.H),v=this,u
var $async$ahi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fZd(u,v.a.c),$async$ahi)
case 2:return A.h(null,w)}})
return A.i($async$ahi,w)},
bHc(){B.hIY(!1,new B.e04(this,null))
return},
JZ(d,e){return this.ckZ(d,e)},
b4_(d){return this.JZ(null,d)},
ckY(d){return this.JZ(d,null)},
ckZ(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.B(new A.Y(p,new B.e0q(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xR.cq().apw(!0,C.a2y,!1),$async$JZ)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e0r(l,s,r),"Preparing\u2026"),$async$JZ)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
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
return A.b(B.bH_(p,l,e,s.a.c),$async$JZ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JZ,w)},
J5(d){return this.c3e(d)},
c3e(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$J5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hZ1(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4_(t),$async$J5)
case 8:x=6
break
case 7:u.ip("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ip("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uv(new B.e0k(u,d),"Receiving video\u2026"),$async$J5)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e0l(u,d),"Receiving\u2026"),$async$J5)
case 12:case 1:return A.h(v,w)}})
return A.i($async$J5,w)},
EU(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DI()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aih(t),$async$EU)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.J5(s),$async$EU)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0v(u),!1,null,y.N)),$async$EU)
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
aja(d){return this.cxc(d)},
cxc(d){var x=0,w=A.j(y.H),v=this
var $async$aja=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e0u(v,d),"Saving\u2026"),$async$aja)
case 2:return A.h(null,w)}})
return A.i($async$aja,w)},
JJ(d){return this.bPM(d)},
bPM(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ln(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JJ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cff(t),$async$JJ)
case 6:case 5:s=d.a
x=7
return A.b(B.Fq(u.a.c,s),$async$JJ)
case 7:u.r.W(0,s)
x=8
return A.b(u.uu(),$async$JJ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JJ,w)},
ak_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ak_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2H(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e0P(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ak_)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahi()
break
case"import":u.adn()
break}case 1:return A.h(v,w)}})
return A.i($async$ak_,w)},
ccD(d){var x=d.c
if(C.a.Y(x,"video/")||d.mR(D.n7))return C.qW
if(C.a.Y(x,"image/")||d.mR(D.SL))return C.v5
if(C.a.q(x,"pdf"))return C.Ib
return D.arc},
B(d){var x,w,v=this,u=null,t=B.a2H(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.In,u,u,u,new B.e1_(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c01,u,u,u,v.e?u:v.gckF(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcyE()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bVe:C.arA,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a4t,u,u,u,v.e?u:v.gccE(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.oQ,u,u,u,v.e?u:v.gb55(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c1P,u,u,u,v.e?u:new B.e10(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.e11(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dr(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dr(!0,A.o(u,u,C.f,u,u,new A.n(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aD.j(A.O(d).ax.a===C.I?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kt(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aBA(C.ju,s,!0,t,w?u:v.gcBz(),u),1)
x.push(new A.D(D.bG4,A.lD(new B.e12(),A.A(A.a([s,C.as,A.E(new B.aBA(C.tl,"Export",!1,t,w?u:v.gbTF(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.ck,C.iB,u,u,new A.bt(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bgq(t,v.e?u:v.gb55(),u)
else s=A.ku(!0,u,u,new B.e13(v,t),s,u,D.bFX,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aBA.prototype={
B(d){var x,w,v,u=this,t=null,s=A.l(16)
if(u.e){x=A.bp(C.aD,t,t,0,C.c,t,C.t8,t,new A.ba(s,C.a1),t,t,t)
return A.de(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.t8,t,new A.ba(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.X(u.c,t,t,t,t,18),t,A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bgq.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lD(new B.de0(),new A.D(C.a1F,A.x(A.a([A.lD(new B.de1(),A.o(x,A.X(C.zx,v[5],x,x,x,36),C.f,x,x,new A.n(x,x,t,x,x,new A.a7(C.ay,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ed,C.hy,x,x,new A.bt(0.86,1,w),s),C.e4,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.m(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e4,A.de(C.oQ,x,D.h7o,this.d,A.bp(C.aD,x,x,x,C.c,x,C.OP,x,new A.ba(A.l(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.ck,C.Cy,x,x,new A.bt(0,1,w),s),x,x,x)}}
B.adH.prototype={
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
o=!C.a.Y(p,"video/")
if(!o||i.mR(D.n7))p=D.dwI
else{p=C.a.Y(p,"image/")||i.mR(D.SL)
n=y.O
p=p?A.a([C.cW,C.aD],n):A.a([C.aN.j(0.85),C.aD.j(0.7)],n)}p=A.o(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.n(j,j,j,q,j,new A.a7(C.ay,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.m(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garU()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mR(D.n7))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.ax,A.d(C.d.aN(n," \xb7 "),j,2,C.a2,j,j,j,A.m(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fO,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ch))
if(!(!o||i.mR(D.n7)))l.push(A.h9K(C.aD,!1,j,j,j,!1,j,j,new B.den(k),j,j,new A.ba(A.l(5),C.a1),j,j,!1,u))
x=A.X(C.oI,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ch))
return A.lD(new B.deo(),new A.D(C.el,A.aF(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a18,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.ba(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.ck,h,new A.bl("docshare_row_"+i.a,y.aw),j,new A.bt(0,1,y.X),y.i)}}
B.a_E.prototype={
S(){return new B.aBF()},
gd1(){return this.c}}
B.aBF.prototype={
Z(){this.a3()
this.yD()},
t(){B.hZg(this.e)
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
n=B.hZj(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hZi(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dek(s))
x=1
break}s.m(new B.del(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.dem(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a3f(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rU(t.c,t.d),$async$a3f)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.frq)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aj8(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3f)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3f,w)},
c37(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kG(u,C.z,v,new B.dei(w,t),C.h2,C.dB,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fY(t,C.z,v,new B.dej(w),C.h2,C.dB,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2H(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.m(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.DE,u,u,u,v.gb8T(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.G_
else{q=v.r
if(q!=null)t=new A.D(C.eA,A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c6(w,".heic")||C.a.c6(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eA,A.x(A.a([A.d(q,u,u,u,u,u,u,A.m(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.de(C.DE,u,D.fQv,v.gb8T(),A.bp(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c37()}return A.c5(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_B.prototype={
S(){return new B.aBC(A.ak7(),C.bC,C.bC)},
gd1(){return this.c}}
B.aBC.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fB(w,A.a3(w).k("fB<1>")).iG(new B.ddY(v))
x.gcYV().iG(new B.ddZ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fB(x,A.a3(x).k("fB<1>"))}if(x==null)x=C.bdt
x.iG(new B.de_(v))
v.yD()},
yD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rU(p.c,p.d),$async$yD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.ddR(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a4Q(r,s.a.d.c)),$async$yD)
case 8:if(s.c==null){x=1
break}s.m(new B.ddS(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.ddT(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yD,w)},
a02(){var x=0,w=A.j(y.H),v=this,u
var $async$a02=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hi(0),$async$a02)
case 5:x=3
break
case 4:x=6
return A.b(u.iL(0),$async$a02)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a02,w)},
aWc(d){var x=d.a
return C.a.b1(C.o.v(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b1(C.o.v(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2H(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.m(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.G_
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.o(o,D.bWa,C.f,o,o,new A.n(o,o,o,A.l(24),o,F.QJ,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aD,o,o,m,0,new B.ddU(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aWc(p.w)+" / "+p.aWc(p.x),o,o,o,o,o,o,A.m(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aD,o,o,o,o,D.fnN,o,o,o,o,o,o)
r=p.f
q=A.X(r?C.v9:C.he,o,o,o,o,o)
x=A.x(A.a([u,C.lb,t,x,C.db,A.de(q,o,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gccH(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.as(new A.D(C.qJ,x,o),o,o,o),o,!1,!1,o,o)}}
B.QO.prototype={
S(){return new B.aBI()},
gd1(){return this.c}}
B.aBI.prototype={
Z(){this.a3()
this.QA()},
QA(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QA=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hc1(o.c,o.d,new B.deB(s)),$async$QA)
case 7:r=e
if(r==null||r.length===0){s.m(new B.deC(s))
x=1
break}s.e=r
q=A.ilz(r)
if(q==null){s.m(new B.deD(s))
x=1
break}s.d=q
q.aV(0,s.gb3O())
x=8
return A.b(q.iY(0).dg(0,C.t4),$async$QA)
case 8:if(s.c==null){x=1
break}s.m(new B.deE(s))
x=9
return A.b(q.qv(0),$async$QA)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.deF(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QA,w)},
ciU(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.deG(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DF(0,x.gb3O())
w=x.d
if(w!=null)w.t()
B.ivE(x.e)
x.a2()},
afE(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b1Q(u.c,u.d),$async$afE)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afE,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2H(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.m(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aH(t,t,t,t,C.oP,t,t,t,u.gccB(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.im(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.G_
else{q=u.r
if(q!=null)s=new A.D(C.eA,A.d(q,t,t,t,t,t,t,A.m(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ajy(q)
q=q.f
w=q?0:0.85
v=A.l(50)
s=new A.fG(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.AJ(s,t),A.ay(t,A.xz(A.o(t,A.X(q?C.v9:C.he,C.c,t,t,t,48),C.f,t,t,new A.n(C.b5,t,t,v,t,t,C.n),t,t,t,t,C.bT,t,t,t),C.b0,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.deI(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c5(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_G.prototype={
S(){return new B.aBG(new A.cy(null,y.A))}}
B.aBG.prototype={
gcKJ(){var x,w,v=this.a
if(v.e!==D.U8)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcKj(){var x,w,v=this.a
if(v.e!==D.Ay)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcKJ()
if(x!=null){v.RJ(x)
v.e=A.dh(C.H9,new B.dex(v,x))}w=v.gcKj()
if(w!=null){v.RI(w)
v.f=A.dh(C.fM,new B.dey(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RI(d){return this.cq6(d)},
cq6(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arl(d),$async$RI)
case 3:t=f
x=4
return A.b(B.cfy(d),$async$RI)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dep(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RI,w)},
RJ(d){return this.cq7(d)},
cq7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fZX(d),$async$RJ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bEO(t),$async$RJ)
case 4:if(u.c==null){x=1
break}u.m(new B.deq(u))
u.c.K(y.q).f.U(D.aVA)
case 1:return A.h(v,w)}})
return A.i($async$RJ,w)},
gc8r(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gccC(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a31(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a31=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DI()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fuB)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ee(new B.der(),!1,null,y.N)),$async$a31)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bEO(s),$async$a31)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aVA)
case 1:return A.h(v,w)}})
return A.i($async$a31,w)},
abf(d){return this.bNr(d)},
bNr(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fx(C.d.aN(t,", "))),$async$abf)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b2(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abf,w)},
afC(d){return this.bN9(d)},
bN9(d){var x=0,w=A.j(y.H),v=this
var $async$afC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fx(v.a.c)),$async$afC)
case 2:if(d.e!=null)d.K(y.q).f.U(D.frU)
return A.h(null,w)}})
return A.i($async$afC,w)},
a2W(d){return this.cxe(d)},
cxe(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqf(s.d,4),$async$a2W)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rm(r,"ngmy_doc_share_qr.png"),$async$a2W)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b2(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2W,w)},
gaZE(){var x,w=this.a
if(w.e!==D.JB)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
abc(d){return this.bNk(d)},
bNk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZE()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fx(C.a.Y(t,"http")?t:"N2|"+t)),$async$abc)
case 3:if(d.e!=null)d.K(y.q).f.U(D.ftA)
case 1:return A.h(v,w)}})
return A.i($async$abc,w)},
afD(){var x=0,w=A.j(y.H),v=this,u
var $async$afD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wv(),$async$afD)
case 2:u=v.c
if(u!=null)A.a6(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$afD,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2H(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aA(h,0,44)+"\u2026"
i=i.e
i=i!==D.JB&&i!==D.U8&&i!==D.Ay
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.m(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.JB||t===D.U8||t===D.Ay?l:A.aH(l,l,l,l,C.ls,l,l,l,m.gb1K(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.l(24)
r=A.K(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.qh(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc8r(),l,l,l,l,l,l,A.m(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.JB){t=C.aD.j(0.12)
o=A.l(20)
C.d.u(q,A.a([C.P,A.o(l,A.d(k,l,l,l,l,l,l,A.m(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(t,l,l,o,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gccC(),l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aN(t,", ")
C.d.u(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c5Q,D.h_8,new B.des(m,d),l)],p))}if(m.a.e===D.JB&&m.gaZE()!=null)C.d.u(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.m(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.ht(D.c2a,D.fWJ,new B.det(m,d),l)],p))
if(m.a.e===D.Ay){x=(m.w?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.w?"Ready to receive":"Uploading "+C.h.ad(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.P,A.o(l,A.d(o,l,l,l,l,l,l,A.m(l,l,m.w?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l)],p))}if(m.a.e===D.U8){x=(m.r?C.dL:C.aD).j(0.12)
t=A.l(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.P,A.o(l,A.d(n,l,l,l,l,l,l,A.m(l,l,o?C.G3:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.n(x,l,l,t,l,l,C.n),l,l,l,l,C.lO,l,l,l),C.af,A.de(D.bYD,l,D.h2i,m.gcxB(),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oS(i,A.c5(v,w,new A.D(C.ac,A.x(A.a([A.E(A.o(l,A.x(q,C.l,l,C.b9,C.i,0,C.p),C.f,l,l,new A.n(u,l,r,s,l,l,C.n),l,l,l,l,C.ac,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(C.DC,l,C.Wy,new B.deu(m,d),l),1),C.as,A.E(A.de(C.zV,l,C.acG,new B.dev(m,d),A.bp(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.Bc,l,m.gb1K(),A.bp(C.aN,l,l,l,l,C.hg,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dew(),y.C)}}
B.adF.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.m(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.l(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.o(x,A.qh(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.n(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bH,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bJ(C.Bd,x,new B.ddQ(d),x)],u),x,x,C.np,v,x,x,x,x,D.fPu,x)}}
B.a_A.prototype={
S(){return new B.aBB(A.zU(C.yO,C.oe,C.vm))}}
B.aBB.prototype={
t(){this.d.t()
this.a2()},
azC(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eR(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fXg,x,x,x,1,x,!0),C.w,A.zT(this.d,C.bY,this.gazB()),x,!1,!1,x,x)}}
B.a_H.prototype={
S(){return new B.aBH(A.zU(C.yO,C.oe,C.vm))},
gd1(){return this.c}}
B.aBH.prototype={
c4b(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahF(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MU("text/plain"),$async$ahF)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fuv)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ahF,w)},
ac3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ac3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hK_(p,!0),$async$ac3)
case 3:t=e
p=t==null
s=B.a8q(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.fr0)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$ac3,w)},
t(){this.d.t()
this.a2()},
azC(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c4b(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,C.asA,v,v,v,w.gbT8(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,C.a4A,v,v,v,w.gcns(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.v1:C.PY,v,v,v,v,v),v,v,v,new B.deA(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h3d,v,v,v,1,v,!0)
u=A.zT(w.d,C.bY,w.gazB())
x=A.l(20)
return A.c5(t,C.w,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.as(A.o(v,v,C.f,v,v,new A.n(v,v,A.K(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eFy],s),v),v,!1,!1,v,v)}}
B.bgr.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pq
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.l(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.l(12)
u=A.o(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.n(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.m(r,r,q?C.pq:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.m(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a1L,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.aaR.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Px.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.YH.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Pw.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FW.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.ctp.prototype={}
B.FV.prototype={}
B.aaQ.prototype={}
B.avW.prototype={}
B.YI.prototype={}
var z=a.updateTypes(["aA<~>()","Q(jD)","q(jD)","Wm(Z)","~()","a_D(Z)","H(H,jD)","QO(Z)","~(nS)","cw(FV)","aA<jD?>(@)","Wk(Z)","Wo(Z)","D(jD)","jD(@)","aa<q,@>(jD)","a_C(Z)","Wl(Z)","a_E(Z)","a_B(Z)","a_G(Z)","adF(Z)","ai<jD>()","a_H(Z)","adH(Z,H)","a_A(Z)","aa<q,aJ>(jD)","cw(YH)","cw(aaQ)","aA<cw>(FV)"])
B.ctl.prototype={
$1(d){var x=this.a
x.x=D.aSj
x.y.I(0,D.aSj)},
$S:77}
B.ctm.prototype={
$1(d){var x=this.a
x.x=D.aSi
x.y.I(0,D.aSi)},
$S:77}
B.ctn.prototype={
$1(d){var x=this.a
x.aj2(A.ahW(d.data)).bG(new B.ctk(x),y.b)},
$S:77}
B.ctk.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cto.prototype={
$1(d){},
$S:77}
B.ctr.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i36(d.channel))},
$S:17}
B.cts.prototype={
$1(d){},
$S:17}
B.ctt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.imJ(w.iceConnectionState)
x.cx=w
if($.hlK())switch(w.a){case 0:x.cy=D.aSo
break
case 1:x.cy=D.aSp
break
case 3:x.cy=D.aSq
break
case 5:x.cy=D.aSm
break
case 6:x.cy=D.aSn
break
case 7:x.cy=D.aal
break
default:break}},
$S:111}
B.ctu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.imK(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:111}
B.ctv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ixc(w.signalingState)},
$S:111}
B.ctw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ivl(w.connectionState)},
$S:111}
B.ctx.prototype={
$1(d){},
$S:111}
B.cty.prototype={
$1(d){},
$S:17}
B.fz9.prototype={
$1(d){var x=y.F.a(new A.qw([],[]).o5(d.target.result,!1)),w=C.wB.q(x.objectStoreNames,"blobs")
if(!w)C.wy.Gr(x,"blobs")},
$S:171}
B.fZ1.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xb.fs(this.b)
$.eX.mK()
this.c.$1(d)},
$S:375}
B.fZ3.prototype={
$1(d){return this.a.$1(B.ich(this.b,this.c))},
$S:32}
B.fZ2.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fZ0.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fZg.prototype={
$1(d){var x=this
return B.hyj(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fZh.prototype={
$1(d){var x=this
return B.hyj(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBP.prototype={
$1(d){var x=this
return B.cf9(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.de8.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.de5.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf9(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.de7.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf9(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.de6.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cf9(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dea.prototype={
$4(d,e,f,g){var x=null
return A.k0(A.A(A.a([A.aH(x,x,x,x,D.bXf,x,x,x,new B.de9(d),x,x,x,x,x,x),A.E(A.FH(D.Sv,!0,x,!1,C.a3D,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.Sv,x,g,C.aof,0,e,f)},
$C:"$4",
$R:4,
$S:468}
B.de9.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDM.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eU,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.l(28),q=A.o(v,D.bzG,C.f,v,v,D.b8J,v,v,v,v,D.ao4,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c0D,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.P(0,0,0,u.f.d),A.o(v,A.x(A.a([q,new A.D(C.CN,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.l(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.asQ,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ac,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.ds,new B.fDK(d),v),1),C.as,A.E(A.bJ(D.fVI,v,new B.fDL(p,x,d),A.bp(C.b2,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.n(s,v,v,r,v,v,C.n),v,v,v,C.Hc,v,v,v,v),v)},
$S:69}
B.fDK.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.fDL.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.fsa)
return}x=w.b.a.a
A.a6(w.c,!1).N(new B.aEi(v,x))},
$S:0}
B.fEf.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eU,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.l(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.P(0,0,0,v.f.d),A.o(w,A.x(A.a([A.o(w,D.bzw,C.f,w,w,D.bae,w,w,w,w,D.ao4,w,w,1/0),new A.D(C.CN,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hho(u,"Organization name",C.HL,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hho(u,"Access code",C.mk,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.T,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hho(u,"Member password",C.DB,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bJ(D.h3k,w,new B.fEe(r,q,p,d),A.bp(C.aD,w,w,w,w,C.hg,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.n(t,w,w,s,w,w,C.n),w,w,w,C.Hc,w,w,w,w),w)},
$S:69}
B.fEe.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.fsf)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).N(new B.aHt(u,x,w))},
$S:0}
B.cf0.prototype={
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
p=C.a.Y(j,"http")?A.cD(j,0,null):s.b.aW(j)
u=4
x=7
return A.b(A.vS(p,null).dg(0,C.a0M),$async$$1)
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
m=A.ab(h)
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
B.cf6.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cf7.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cf8.prototype={
$1(d){return d.b},
$S:z+2}
B.cf2.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cf3.prototype={
$1(d){return d.b},
$S:z+2}
B.cf1.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.cf4.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cf5.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fZe.prototype={
$1(d){return new B.Wk(this.a,null)},
$S:z+11}
B.fZf.prototype={
$1(d){return new B.Wo(this.a,this.b,this.c,null)},
$S:z+12}
B.e_Y.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e16.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e17.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e18.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e15(x,d))},
$S:2}
B.e15.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e19.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1a.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e1b.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e1c.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e1d.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e1e.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e1h.prototype={
$3(d,e,f){return A.d1(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.e1f.prototype={
$1(d){var x=this.a
return x.f?null:x.a01()},
$S:2}
B.e1g.prototype={
$1(d){var x,w,v=null,u=A.l(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mR(D.SL))s=C.v5
else s=C.a.Y(s,"video/")||d.mR(D.n7)?C.qW:D.arc
x=this.b.a
w=y.p
return new A.D(C.kB,A.A(A.a([A.o(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.n(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.m(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garU(),v,v,v,v,v,v,A.m(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e_Z.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e0_.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cfa.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:104}
B.cfb.prototype={
$2(d,e){return new A.bC(J.k(d),J.k(e),y.M)},
$S:104}
B.h_f.prototype={
$2(d,e){return e===this.a},
$S:277}
B.fwc.prototype={
$1(d){return J.k(d)},
$S:16}
B.fC0.prototype={
$1(d){var x=this.b
B.iae(C.Hy.ga7I(this.a)).bG(x.gCe(x),y.H)},
$S:134}
B.fC1.prototype={
$1(d){return this.a.dd(0,null)},
$S:134}
B.fC2.prototype={
$0(){return null},
$S:11}
B.cfp.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fC3.prototype={
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
B.fGf.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fAd.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fAe.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cfu.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.h3v.prototype={
$1(d){return new B.a_C(this.a,null)},
$S:z+16}
B.de4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.de2.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).N(x)
return null},
$S:2}
B.de3.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e14.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a29()},
$S:12}
B.e0s.prototype={
$0(){var x=J.bI4(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e0t.prototype={
$0(){var x=J.bI4(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e01.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e00(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGA(this.c)}},
$S:0}
B.e00.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e02.prototype={
$0(){var x=J.bI4(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.e07.prototype={
$0(){var x=this.a,w=C.d.bk(x.d,new B.e06(this.b))
if(w>=0){x=x.d
x[w]=x[w].aGA(this.c)}},
$S:0}
B.e06.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0T.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e0U.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e0p.prototype={
$1(d){return new B.Wl(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e0m.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IP(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wp(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2j(s.gJ(t)),$async$$0)
case 8:case 7:r.ip(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e05.prototype={
$1(d){this.a.adr(d,"No files selected.","Added")},
$S:375}
B.e0x.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.u(0,new A.N(x,new B.e0w(),A.U(x).k("N<1,q>")))},
$S:0}
B.e0w.prototype={
$1(d){return d.a},
$S:z+2}
B.e0b.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xR.cq().d_T(C.a2y,!0),$async$$0)
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
p=A.ab(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ip("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.ip("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ark(null,m,o.a.c),$async$$0)
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
B.e0Q.prototype={
$1(d){return new B.QO(this.a.a.c,this.b,null)},
$S:z+7}
B.e0R.prototype={
$1(d){return new B.a_E(this.a.a.c,this.b,null)},
$S:z+18}
B.e0S.prototype={
$1(d){return new B.a_B(this.a.a.c,this.b,null)},
$S:z+19}
B.e0n.prototype={
$1(d){return new B.QO(this.a.a.c,this.b,null)},
$S:z+7}
B.e0o.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0J.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IP(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8s(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ip("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ctB(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("N<1,q>")
r=new A.N(new A.N(t,new B.e0F(p),r),new B.e0G(),r.k("N<ak.E,q>")).c1(0,new B.e0H())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ee(new B.e0I(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pC(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wv(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0F.prototype={
$1(d){var x=this.a,w=C.d.bk(x.d,new B.e0E(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e0E.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e0G.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e0H.prototype={
$1(d){return d.length!==0},
$S:3}
B.e0I.prototype={
$1(d){var x=this.a
return new B.a_G(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e0K.prototype={
$1(d){return d.a},
$S:z+2}
B.e0L.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0D.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.as(A.o(v,v,C.f,v,v,new A.n(t[4].j(0.35),v,v,A.l(99),v,v,C.n),v,4,v,C.kA,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.m(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garU(),v,v,v,v,v,v,A.m(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mR(D.n7)?C.tp:C.nQ
p=!x||p.mR(D.n7)?"Play video":"View"
return new A.bN(new A.n(s,v,new A.bH(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lf,v,v,C.n),C.bk,A.bm(!0,new A.D(C.CJ,A.x(A.a([q,o,t,C.aB,B.a_F(!1,u,!1,w,p,new B.e0y(d),v),B.a_F(!1,u,!1,C.ju,"Share via QR",new B.e0z(d),"Letters/numbers QR code"),B.a_F(!1,u,!1,D.a3I,"Send to their Code",new B.e0A(d),"Enter someone else's personal code"),B.a_F(!1,u,!1,C.hD,"Download / save",new B.e0B(d),v),C.am,B.a_F(!1,u,!0,C.ej,"Delete",new B.e0C(d),v)],y.p),C.al,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:517}
B.e0y.prototype={
$0(){A.a6(this.a,!1).N("view")
return null},
$S:0}
B.e0z.prototype={
$0(){A.a6(this.a,!1).N("qr")
return null},
$S:0}
B.e0A.prototype={
$0(){A.a6(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e0B.prototype={
$0(){A.a6(this.a,!1).N("save")
return null},
$S:0}
B.e0C.prototype={
$0(){A.a6(this.a,!1).N("delete")
return null},
$S:0}
B.e08.prototype={
$1(d){return d.a},
$S:z+2}
B.e09.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e0a.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8u(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Ho(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pC(s.c,s.f),$async$$0)
case 4:u.ip(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e04.prototype={
$1(d){var x=this.a
x.uv(new B.e03(x,d,this.b),"Preparing\u2026")},
$S:375}
B.e03.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ip("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wp(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ip("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bH_(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ip("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0q.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e0r.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hc4(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0k.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hm(new B.e0g(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ip("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.e0h(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.e0i(s))
case 5:x=8
return A.b(r.b.ix(0,C.H6,new B.e0j()),$async$$0)
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
B.e0g.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e0d(x,d,e))},
$S:244}
B.e0d.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0h.prototype={
$1(d){return new B.adF(this.a.a,null)},
$S:z+21}
B.e0i.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e0j.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e0l.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jq(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8i(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4_(B.Jq(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ark(new B.e0e(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.hc3(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ip(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cE(r)
p=o.eO(r,new B.e0f()).gJ(0)
s.ip(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0e.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.e0c(x,d,e))},
$S:244}
B.e0c.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e0f.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.e0v.prototype={
$1(d){return new B.a_H(this.a.a.c,null)},
$S:z+23}
B.e0u.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b1Q(u.a.c,v.b),$async$$0)
case 2:t.ip(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e0P.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.n(v[2],x,new A.bH(new A.ax(C.aD.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lf,x,x,C.n),C.bk,A.bm(!0,new A.D(C.CJ,A.x(A.a([A.as(A.o(x,x,C.f,x,x,new A.n(v[4].j(0.35),x,x,A.l(99),x,x,C.n),x,4,x,C.kA,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.m(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_F(!0,w,!1,C.mk,"My Code",new B.e0M(d),"Your personal code & QR \u2014 others send docs to you"),B.a_F(!1,w,!1,D.a3I,"Send to their Code",new B.e0N(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_F(!1,w,!1,C.zN,"Import backup",new B.e0O(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:517}
B.e0M.prototype={
$0(){A.a6(this.a,!1).N("my_code")
return null},
$S:0}
B.e0N.prototype={
$0(){A.a6(this.b,!1).N(null)
this.a.bHc()},
$S:0}
B.e0O.prototype={
$0(){A.a6(this.a,!1).N("import")
return null},
$S:0}
B.e11.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JA(D.Sv,x,C.a3D,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.m(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gH(D.Sv).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:635}
B.e1_.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.e10.prototype={
$0(){this.a.ak_()
return null},
$S:0}
B.e12.prototype={
$3(d,e,f){return A.d1(A.dO(f,new A.r(0,(1-e)*10)),e)},
$S:107}
B.e13.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adH(e,w,v,this.b,x.e,x.ccD(w),new B.e0W(x,w),new B.e0X(x,v,w),new B.e0Y(x,w),new B.e0Z(x,w),null)},
$S:z+24}
B.e0W.prototype={
$0(){this.a.ahc(this.b)
return null},
$S:0}
B.e0X.prototype={
$0(){var x=this.a
return x.m(new B.e0V(x,this.b,this.c))},
$S:0}
B.e0V.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e0Y.prototype={
$0(){this.a.OR(this.b)
return null},
$S:0}
B.e0Z.prototype={
$0(){this.a.ajN(this.b)
return null},
$S:0}
B.de0.prototype={
$3(d,e,f){return A.d1(A.dO(f,new A.r(0,(1-e)*18)),e)},
$S:107}
B.de1.prototype={
$3(d,e,f){return A.e1(C.z,f,e,null,null)},
$S:118}
B.deo.prototype={
$3(d,e,f){return A.d1(A.dO(f,new A.r(0,(1-e)*14)),e)},
$S:107}
B.den.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.dek.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.del.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dem.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dei.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fY(w,C.z,x,new B.deg(this.a),C.h2,C.dB,!0,x,!1,x,x)
$.aU.x1$.push(new B.deh(this.a))
return C.bM},
$S:147}
B.deg.prototype={
$3(d,e,f){$.aU.x1$.push(new B.dee(this.a))
return C.bM},
$S:208}
B.dee.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.deb(x))},
$S:7}
B.deb.prototype={
$0(){return this.a.w=!0},
$S:0}
B.deh.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.ded(x))},
$S:7}
B.ded.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dej.prototype={
$3(d,e,f){$.aU.x1$.push(new B.def(this.a))
return C.bM},
$S:208}
B.def.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dec(x))},
$S:7}
B.dec.prototype={
$0(){return this.a.w=!0},
$S:0}
B.ddY.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddX(x,d))},
$S:2046}
B.ddX.prototype={
$0(){return this.a.f=this.b===C.vJ},
$S:0}
B.ddZ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddW(x,d))},
$S:7}
B.ddW.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.de_.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.ddV(x,d))},
$S:7}
B.ddV.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.ddR.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.ddS.prototype={
$0(){return this.a.e=!1},
$S:0}
B.ddT.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.ddU.prototype={
$1(d){return this.a.d.NM(0,A.dx(0,0,0,C.h.T(d),0,0))},
$S:6}
B.deB.prototype={
$0(){var x=this.a.a
return B.rU(x.c,x.d)},
$S:2047}
B.deC.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.deD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.deE.prototype={
$0(){return this.a.f=!1},
$S:0}
B.deF.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.deG.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.deI.prototype={
$0(){var x=this.a
x.m(new B.deH(x))},
$S:0}
B.deH.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hi(0)
else x.qv(0)},
$S:0}
B.dex.prototype={
$1(d){return this.a.RJ(this.b)},
$S:12}
B.dey.prototype={
$1(d){return this.a.RI(this.b)},
$S:12}
B.dep.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.deq.prototype={
$0(){return this.a.r=!0},
$S:0}
B.der.prototype={
$1(d){return D.hF_},
$S:z+25}
B.dew.prototype={
$2(d,e){if(d)B.Wv()},
$S:135}
B.des.prototype={
$0(){return this.a.abf(this.b)},
$S:0}
B.det.prototype={
$0(){return this.a.abc(this.b)},
$S:0}
B.deu.prototype={
$0(){return this.a.afC(this.b)},
$S:0}
B.dev.prototype={
$0(){return this.a.a2W(this.b)},
$S:0}
B.ddQ.prototype={
$0(){A.a6(this.a,!1).N(null)
return null},
$S:0}
B.deA.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qz(),$async$$0)
case 2:u.m(new B.dez(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dez.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cfw.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mR(D.n7)},
$S:z+1}
B.cfx.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cfv.prototype={
$2(d,e){return this.bnN(d,e)},
bnN(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Ww(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:2048}
B.fFS.prototype={
$1(d){if(d===D.aak&&(this.a.a.a&30)===0)this.a.h1(0)},
$S:z+27}
B.fFT.prototype={
$0(){},
$S:11}
B.fGt.prototype={
bpn(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.ftd(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.htm(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bpn(d,e)},
$S:826}
B.fGs.prototype={
$1(d){var x=this
d.b=new B.fGr(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fGr.prototype={
$1(d){return this.bpm(d)},
bpm(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1R(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
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
return A.b(B.ftd(l,n.b,m,n.c,s.d),$async$$1)
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
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8r(m),$async$$1)
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
x(v=B.aBE.prototype,"gckh","Ri",0)
x(v,"gcl8","K_",0)
x(v,"gckE","yN",0)
x(v=B.aFF.prototype,"gccx","afA",0)
x(v,"gccy","a00",0)
x(v,"gcA3","aju",0)
x(v=B.aFI.prototype,"gccz","a01",0)
x(v,"gcA4","a3g",0)
x(B.aFG.prototype,"gccA","afB",0)
x(B.aBD.prototype,"gccF","ccG",4)
x(v=B.aFH.prototype,"gckF","a1c",0)
x(v,"gcyE","cyF",4)
x(v,"gb55","aB2",0)
x(v,"gcBz","ajU",0)
x(v,"gbTF","YM",0)
x(v,"gccE","EU",0)
x(B.aBF.prototype,"gb8T","a3f",0)
x(B.aBC.prototype,"gccH","a02",0)
x(v=B.aBI.prototype,"gb3O","ciU",4)
x(v,"gccB","afE",0)
x(v=B.aBG.prototype,"gcxB","a31",0)
x(v,"gb1K","afD",0)
w(B.aBB.prototype,"gazB","azC",8)
x(v=B.aBH.prototype,"gcns","ahF",0)
x(v,"gbT8","ac3",0)
w(v,"gazB","azC",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aJ,[B.ctp,B.aaQ,B.avW,B.aEi,B.aHt,B.jD,B.adn,B.byQ,B.FV,B.YI])
w(B.ctq,B.ctp)
w(B.b6Z,B.aaQ)
x(A.k8,[B.ctl,B.ctm,B.ctn,B.ctk,B.cto,B.ctr,B.cts,B.ctt,B.ctu,B.ctv,B.ctw,B.ctx,B.cty,B.fz9,B.fZ1,B.fZ3,B.fZ2,B.fZg,B.fZh,B.fBP,B.de5,B.de7,B.de6,B.dea,B.fDM,B.fEf,B.cf0,B.cf7,B.cf8,B.cf3,B.cf1,B.cf4,B.cf5,B.fZe,B.fZf,B.e18,B.e1h,B.e1f,B.e1g,B.fwc,B.fC0,B.fC1,B.cfp,B.fC3,B.fGf,B.fAd,B.fAe,B.cfu,B.h3v,B.de4,B.de2,B.e14,B.e00,B.e06,B.e0p,B.e05,B.e0w,B.e0Q,B.e0R,B.e0S,B.e0n,B.e0F,B.e0E,B.e0G,B.e0H,B.e0I,B.e0K,B.e0L,B.e0D,B.e08,B.e09,B.e04,B.e0q,B.e0h,B.e0f,B.e0v,B.e0P,B.e11,B.e12,B.de0,B.de1,B.deo,B.den,B.dei,B.deg,B.dee,B.deh,B.dej,B.def,B.ddY,B.ddZ,B.de_,B.ddU,B.dex,B.dey,B.der,B.cfw,B.cfx,B.fFS,B.fGs,B.fGr])
w(B.b7_,B.avW)
x(A.lR,[B.fZ0,B.de8,B.de9,B.fDK,B.fDL,B.fEe,B.e_Y,B.e16,B.e17,B.e15,B.e19,B.e1a,B.e1b,B.e1c,B.e1d,B.e1e,B.e_Z,B.e0_,B.fC2,B.de3,B.e0s,B.e0t,B.e01,B.e02,B.e07,B.e0T,B.e0U,B.e0m,B.e0x,B.e0b,B.e0o,B.e0J,B.e0y,B.e0z,B.e0A,B.e0B,B.e0C,B.e0a,B.e03,B.e0r,B.e0k,B.e0d,B.e0i,B.e0j,B.e0l,B.e0c,B.e0u,B.e0M,B.e0N,B.e0O,B.e1_,B.e10,B.e0W,B.e0X,B.e0V,B.e0Y,B.e0Z,B.dek,B.del,B.dem,B.deb,B.ded,B.dec,B.ddX,B.ddW,B.ddV,B.ddR,B.ddS,B.ddT,B.deB,B.deC,B.deD,B.deE,B.deF,B.deG,B.deI,B.deH,B.dep,B.deq,B.des,B.det,B.deu,B.dev,B.ddQ,B.deA,B.dez,B.fFT])
x(A.om,[B.adG,B.Or,B.aaR,B.Px,B.YH,B.Pw,B.FW])
x(A.ag,[B.a_D,B.Wk,B.Wo,B.Wl,B.a_C,B.Wm,B.a_E,B.a_B,B.QO,B.a_G,B.a_A,B.a_H])
x(A.ah,[B.aBE,B.aFF,B.aFI,B.aFG,B.aBD,B.aFH,B.aBF,B.aBC,B.aBI,B.aBG,B.aBB,B.aBH])
x(A.av,[B.ae9,B.aBA,B.bgq,B.adH,B.adF,B.bgr])
x(A.ls,[B.cf6,B.cf2,B.cfa,B.cfb,B.h_f,B.e0g,B.e0e,B.e13,B.dew,B.cfv,B.fGt])
x(A.jL,[B.blV,B.bys])})()
A.nh(b.typeUniverse,JSON.parse('{"b6Z":{"aaQ":[]},"b7_":{"avW":[]},"a_D":{"ag":[],"v":[]},"aBE":{"ah":["a_D"]},"ae9":{"av":[],"v":[]},"Wk":{"ag":[],"v":[]},"Wo":{"ag":[],"v":[]},"aFF":{"ah":["Wk"]},"aFI":{"ah":["Wo"]},"blV":{"jL":[]},"Wl":{"ag":[],"v":[]},"aFG":{"ah":["Wl"]},"a_C":{"ag":[],"v":[]},"Wm":{"ag":[],"v":[]},"adH":{"av":[],"v":[]},"a_E":{"ag":[],"v":[]},"a_B":{"ag":[],"v":[]},"QO":{"ag":[],"v":[]},"a_G":{"ag":[],"v":[]},"adF":{"av":[],"v":[]},"a_A":{"ag":[],"v":[]},"a_H":{"ag":[],"v":[]},"aBD":{"ah":["a_C"]},"bys":{"jL":[]},"aFH":{"ah":["Wm"]},"aBA":{"av":[],"v":[]},"bgq":{"av":[],"v":[]},"aBF":{"ah":["a_E"]},"aBC":{"ah":["a_B"]},"aBI":{"ah":["QO"]},"aBG":{"ah":["a_G"]},"aBB":{"ah":["a_A"]},"aBH":{"ah":["a_H"]},"bgr":{"av":[],"v":[]}}'))
var y=(function rtii(){var x=A.aC
return{J:x("np"),k:x("MS()"),o:x("bq<q,q>"),F:x("zw"),g:x("aA<jD?>"),x:x("aA<~>"),V:x("R<ac>"),O:x("R<u>"),W:x("R<bk>"),Y:x("R<aa<q,Q>>"),t:x("R<aa<q,@>>"),r:x("R<jD>"),w:x("R<+file,name(mE,q)>"),u:x("R<cX>"),s:x("R<q>"),E:x("R<jL>"),a:x("R<e2>"),p:x("R<v>"),Z:x("R<H>"),G:x("bk"),A:x("cy<ah<ag>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bC<q,q>"),P:x("aa<q,@>"),f:x("aa<@,@>"),m:x("jY"),e:x("iBg"),af:x("F6"),U:x("jD"),b:x("cw"),C:x("aJ"),aK:x("yr"),ab:x("FV"),br:x("avW"),v:x("YI"),N:x("q"),X:x("bt<F>"),Q:x("mT"),D:x("e2"),aw:x("bl<q>"),cd:x("Y<aa<q,@>>"),c7:x("v"),ch:x("c7<ai<jD>>"),aW:x("c7<e2?>"),aY:x("c7<~>"),cx:x("adG"),b1:x("bn<ai<jD>>"),cf:x("bn<e2?>"),d4:x("bn<~>"),c4:x("aEi"),bG:x("aHt"),q:x("nJ"),B:x("pT<FV>"),c6:x("pT<aaR>"),y:x("Q"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bk?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("aa<q,@>?"),l:x("jD?"),R:x("aJ?"),c:x("YI?"),d:x("+answerQr,transfer(q,aA<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(q,q,H)?"),L:x("+fileCount,mode,qrPayload(H,Or,q)?"),aX:x("+fileCount,qrPayload,token(H,q,q)?"),T:x("q?"),K:x("e2?"),cm:x("adn?"),bk:x("aEi?"),ag:x("aHt?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b73=new A.ax(C.aD,2,C.r,-1)
D.cau=new A.a7(C.a5,C.a9,C.x,C.a5L,null,null)
D.b8J=new A.n(null,null,null,C.mJ,null,D.cau,C.n)
D.bae=new A.n(null,null,null,C.mJ,null,C.Iv,C.n)
D.agS=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aim=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ajp=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alb=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fQn=new A.C("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.h4i=new A.C("Share the access code and member password with your team. They only sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dnv=x([D.fQn,C.am,D.h4i],y.p)
D.bzm=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dnv,null)
D.h8N=new A.C("Create your organization",null,C.fR,null,null,null,null,null,null,null,null,null)
D.fUU=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dEZ=x([D.h8N,C.am,D.fUU],y.p)
D.bzw=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dEZ,null)
D.h4X=new A.C("Team Member sign-in",null,C.fR,null,null,null,null,null,null,null,null,null)
D.fYS=new A.C("Enter the access code and password from your organization.",null,C.Fe,null,null,null,null,null,null,null,null,null)
D.dCH=x([D.h4X,C.am,D.fYS],y.p)
D.bzG=new A.fo(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dCH,null)
D.bFX=new A.P(16,10,16,28)
D.bG4=new A.P(16,14,16,4)
D.bHk=new A.P(20,0,20,16)
D.bHR=new A.P(20,8,20,16)
D.ao4=new A.P(24,22,24,20)
D.a3I=new A.a_(63394,"MaterialIcons",!1)
D.arc=new A.a_(63515,"MaterialIcons",!1)
D.bVe=new A.a_(983813,"MaterialIcons",!1)
D.bSm=new A.a_(62867,"MaterialIcons",!1)
D.bWa=new A.ae(D.bSm,44,C.c,null,null,null)
D.bXf=new A.ae(C.kb,null,C.ab,null,null,null)
D.bYD=new A.ae(C.jv,18,null,null,null,null)
D.c_r=new A.ae(D.a3I,26,C.c,null,null,null)
D.c01=new A.ae(C.Dq,null,null,null,null,null)
D.c0D=new A.ae(C.Dy,null,null,null,null,null)
D.c1P=new A.ae(L.a3T,null,null,null,null,null)
D.c2a=new A.ae(C.hR,16,null,null,null,null)
D.c5Q=new A.ae(C.to,16,null,null,null,null)
D.bWs=new A.ae(C.mk,null,null,null,null,null)
D.c6I=new A.e8(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWs,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c1a=new A.ae(C.HL,null,null,null,null,null)
D.c6N=new A.e8(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c1a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bWN=new A.ae(C.DB,null,null,null,null,null)
D.c6Y=new A.e8(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bWN,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cWz=x([C.fq,C.b2,C.aD],y.O)
D.ccr=new A.a7(C.ay,C.aC,C.x,D.cWz,null,null)
D.cVY=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Sv=x([C.fq,C.aD],y.O)
D.SL=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n7=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dwI=x([C.mR,C.aD],y.O)
D.erK={iceServers:0}
D.aMP={urls:0}
D.dIT=new A.bq(D.aMP,["stun:stun.l.google.com:19302"],y.o)
D.dIS=new A.bq(D.aMP,["stun:stun1.l.google.com:19302"],y.o)
D.dcM=x([D.dIT,D.dIS],A.aC("R<aa<q,q>>"))
D.dHZ=new A.bq(D.erK,[D.dcM],A.aC("bq<q,@>"))
D.JB=new B.Or(0,"lanDirect")
D.U7=new B.Or(1,"cloudStash")
D.dVP=new B.Or(2,"inlineInstant")
D.U8=new B.Or(3,"webrtcLink")
D.Ay=new B.Or(4,"videoCloud")
D.h4h=new A.C("Receive file",null,C.nf,null,null,null,null,null,null,null,null,null)
D.cLD=x([C.asZ,C.ae,D.h4h],y.p)
D.fiI=new A.c8(C.aM,C.b9,C.i,C.l,null,C.p,null,0,D.cLD,null)
D.ezg=new A.D(C.co,D.fiI,null)
D.fGK=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,K.J_,null,null,null)
D.fQX=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fGK,null,C.K,null,null,null,null,null,null,null)
D.eyr=new A.D(C.CQ,D.fQX,null)
D.beP=new A.ck(C.z,null,null,D.eyr,null)
D.eFy=new A.cK(0,null,0,28,null,null,D.beP,null)
D.eFS=new B.aaR(0,"RTCDataChannelConnecting")
D.aSi=new B.aaR(1,"RTCDataChannelOpen")
D.aSj=new B.aaR(3,"RTCDataChannelClosed")
D.eFT=new B.FW(0,"RTCIceConnectionStateNew")
D.eFU=new B.FW(1,"RTCIceConnectionStateChecking")
D.eFV=new B.FW(2,"RTCIceConnectionStateCompleted")
D.eFW=new B.FW(3,"RTCIceConnectionStateConnected")
D.eFX=new B.FW(4,"RTCIceConnectionStateCount")
D.eFY=new B.FW(5,"RTCIceConnectionStateFailed")
D.eFZ=new B.FW(6,"RTCIceConnectionStateDisconnected")
D.aSk=new B.FW(7,"RTCIceConnectionStateClosed")
D.aSl=new B.YH(0,"RTCIceGatheringStateNew")
D.eG_=new B.YH(1,"RTCIceGatheringStateGathering")
D.aak=new B.YH(2,"RTCIceGatheringStateComplete")
D.aal=new B.Pw(0,"RTCPeerConnectionStateClosed")
D.aSm=new B.Pw(1,"RTCPeerConnectionStateFailed")
D.aSn=new B.Pw(2,"RTCPeerConnectionStateDisconnected")
D.aSo=new B.Pw(3,"RTCPeerConnectionStateNew")
D.aSp=new B.Pw(4,"RTCPeerConnectionStateConnecting")
D.aSq=new B.Pw(5,"RTCPeerConnectionStateConnected")
D.eG0=new B.Px(0,"RTCSignalingStateStable")
D.eG1=new B.Px(1,"RTCSignalingStateHaveLocalOffer")
D.eG2=new B.Px(2,"RTCSignalingStateHaveRemoteOffer")
D.eG3=new B.Px(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eG4=new B.Px(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aSr=new B.Px(5,"RTCSignalingStateClosed")
D.fnN=new A.au(160,48)
D.bg5=new A.fi(2,null,null,null,null,C.aD,null,null,null,null)
D.fpm=new A.a5(16,16,D.bg5,null)
D.fUe=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fqQ=new A.b0(D.fUe,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0W=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fqU=new A.b0(D.h0W,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9Q=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fr0=new A.b0(D.h9Q,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTP=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.frq=new A.b0(D.fTP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h57=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aVA=new A.b0(D.h57,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6z=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.frU=new A.b0(D.h6z,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbj=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsa=new A.b0(D.hbj,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h9f=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fsf=new A.b0(D.h9f,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hau=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ft2=new A.b0(D.hau,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSp=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ftA=new A.b0(D.fSp,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2Q=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ftV=new A.b0(D.h2Q,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWy=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fur=new A.b0(D.fWy,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hbo=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fuv=new A.b0(D.hbo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSF=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fuB=new A.b0(D.fSF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fRj=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fuQ=new A.b0(D.fRj,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fO2=new A.C("NGMY DOC SHARE",null,C.aX_,null,null,null,null,null,null,null,null,null)
D.fPu=new A.C("Show this to sender",null,C.iH,null,null,null,null,null,null,null,null,null)
D.fQv=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fVk=new A.C("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fVI=new A.C("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fWJ=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fXg=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h_8=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h1Z=new A.C("Send to their Doc Share",null,C.o6,null,null,null,null,null,null,null,null,null)
D.h2i=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h2C=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h3d=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h3k=new A.C("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.h3J=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.h74=new A.C("Share files & videos\nwith a scan.",null,C.aX2,null,null,null,null,null,null,null,null,null)
D.h7o=new A.C("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hF_=new B.a_A(null)
D.adH=new B.adG(0,"docShare")
D.adI=new B.adG(1,"gate")
D.Xb=new B.adG(2,"gateNoIndividual")})();(function staticFields(){$.aQj=null
$.fqO=function(){var x=y.N
return A.T(x,x)}()
$.Ha=A.T(y.N,y.D)
$.ahK=A.T(y.N,A.aC("mE"))
$.Sc=A.T(y.N,y.D)
$.fru=A.T(y.N,A.aC("adn"))
$.cfo=A.T(y.S,A.aC("byQ"))
$.htl=1
$.iin=null
$.iim=null
$.i9x=null
$.hhA=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iBL","hM_",()=>new B.ctq())
x($,"izF","hlK",()=>C.a.q(A.bB(A.bB(A.bB(A.HI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["g4XRfWv8l5Wk62Rb5jtbcYqHnMU="]=a.current})($__dart_deferred_initializers__);