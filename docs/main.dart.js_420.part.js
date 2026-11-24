((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,P,K,Q,R,F,L,G,S,T,E,H,U,V,W,X,Y,M,N,B={cuE:function cuE(){},
i9j(d){var x=null,w=new B.b7E(d,D.eJY,new A.q4(x,x,y.c6),new A.q4(x,x,y.B))
w.bDT(d)
return w},
b7E:function b7E(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cuz:function cuz(d){this.a=d},
cuA:function cuA(d){this.a=d},
cuB:function cuB(d){this.a=d},
cuy:function cuy(d){this.a=d},
cuC:function cuC(d){this.a=d},
i9k(d,e){var x=y.N
x=new B.b7F(d,e,A.S(x,y.e),A.S(x,y.z))
x.bDU(d,e)
return x},
b7F:function b7F(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cuF:function cuF(d){this.a=d},
cuG:function cuG(d){this.a=d},
cuH:function cuH(d){this.a=d},
cuI:function cuI(d){this.a=d},
cuJ:function cuJ(d){this.a=d},
cuK:function cuK(d){this.a=d},
cuL:function cuL(d){this.a=d},
cuM:function cuM(d){this.a=d},
hmP(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xy.Hd(x,"ngmy_doc_share_v1",new B.fE1(),1)},
ig9(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cb(d))
if(y.J.b(d))return new Uint8Array(A.cb(J.ez(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cb(A.vW(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cH.aK(d)
return x}catch(w){return v}return v},
SH(d,e){return B.ivY(d,e)},
ivY(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SH=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aQR
x=7
return A.b(o==null?$.aQR=B.hmP():o,$async$SH)
case 7:s=g
r=new Uint8Array(A.cb(e))
q=J.my(s,"blobs","readwrite")
C.iR.mj(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.oM(q),$async$SH)
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
return A.i($async$SH,w)},
SG(d){return B.ivX(d)},
ivX(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aQR
x=7
return A.b(o==null?$.aQR=B.hmP():o,$async$SG)
case 7:s=f
r=J.my(s,"blobs","readonly")
x=8
return A.b(C.iR.xU(J.mx(r,"blobs"),d),$async$SG)
case 8:q=f
x=9
return A.b(J.oM(r),$async$SG)
case 9:o=B.ig9(q)
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
return A.i($async$SG,w)},
aiT(d){return B.ivW(d)},
ivW(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aiT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aQR
x=7
return A.b(p==null?$.aQR=B.hmP():p,$async$aiT)
case 7:s=f
r=J.my(s,"blobs","readwrite")
C.iR.GJ(J.mx(r,"blobs"),d)
x=8
return A.b(J.oM(r),$async$aiT)
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
return A.i($async$aiT,w)},
fE1:function fE1(){},
iiG(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bsF(w,v))}return u},
hOQ(d,e){var x,w={},v=A.aZC("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h3C(w,v,e)
C.xA.zo(v,"change",new B.h3E(w,v,!1))
C.xA.zo(v,"cancel",new B.h3D(w))
$.eW.mJ()
v.click()
A.bL(C.amQ,new B.h3B(w),y.H)},
h3C:function h3C(d,e,f){this.a=d
this.b=e
this.c=f},
h3E:function h3E(d,e,f){this.a=d
this.b=e
this.c=f},
h3D:function h3D(d){this.a=d},
h3B:function h3B(d){this.a=d},
E0(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E0=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gV3()?3:4
break
case 3:x=5
return A.b(B.hJn(e,d,s,!0,!1,f,g,h,!1,i),$async$E0)
case 5:x=1
break
case 4:x=6
return A.b(B.Sj(d,s,f,g,h,i),$async$E0)
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
return A.b(B.Jz(s,d),$async$E0)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fzj(s,d),$async$E0)
case 14:x=12
return A.b(r.hJn(q,p,o,n,m,l,k,j,a1,i),$async$E0)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cb(A.eb(new B.h3R(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cb(A.eb(new B.h3S(s,i,d,f,g,h),!1,null,y.H)),$async$E0)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E0,w)},
Sj(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Sj=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2m(e),$async$Sj)
case 3:u=k
x=4
return A.b(B.arF(d,e,!1),$async$Sj)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jz(e,d),$async$Sj)
case 7:if(k){v=D.aej
x=1
break}x=8
return A.b(B.WE(e),$async$Sj)
case 8:v=t?D.XP:D.aek
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2k(d,e)){v=D.aej
x=1
break}x=11
return A.b(B.WE(e),$async$Sj)
case 11:v=t?D.XP:D.aek
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hhB(d,e)){v=D.aej
x=1
break}x=14
return A.b(B.WE(e),$async$Sj)
case 14:v=D.XP
x=1
break
case 13:v=t?D.XP:D.aek
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sj,w)},
fzj(d,e){var x=0,w=A.j(y.y),v
var $async$fzj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2k(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2m(d),$async$fzj)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzj,w)},
hJn(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cb(A.eb(new B.fGI(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hDX(d,e,f,g,h,i,j){return new B.a_X(e,j,d,g,h,i,f,null)},
fIE(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fIE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fIH(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fIE)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fIE,w)},
fJ8(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fJ8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.az()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fJa(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fJ8)
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
return A.i($async$fJ8,w)},
hn1(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bC(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fWh(d,e){var x=0,w=A.j(y.H),v
var $async$fWh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WE(e),$async$fWh)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).e3()
case 1:return A.h(v,w)}})
return A.i($async$fWh,w)},
h3R:function h3R(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h3S:function h3S(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ae7:function ae7(d,e){this.a=d
this.b=e},
fGI:function fGI(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_X:function a_X(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aC8:function aC8(){this.c=this.a=this.d=null},
dfy:function dfy(d,e){this.a=d
this.b=e},
dfv:function dfv(d){this.a=d},
dfx:function dfx(d){this.a=d},
dfw:function dfw(d){this.a=d},
dfA:function dfA(){},
dfz:function dfz(d){this.a=d},
aeB:function aeB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aEO:function aEO(d,e){this.a=d
this.b=e},
aI0:function aI0(d,e,f){this.a=d
this.b=e
this.c=f},
fIH:function fIH(d,e,f){this.a=d
this.b=e
this.c=f},
fIF:function fIF(d){this.a=d},
fIG:function fIG(d,e,f){this.a=d
this.b=e
this.c=f},
fJa:function fJa(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fJ9:function fJ9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cg6(d,e,f,g,h){return B.i43(d,e,f,g,h)},
i43(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cg6=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a2(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dP(d,new B.cg7(s,e,h,g,f,q),y.g),y.l),$async$cg6)
case 3:r=p.aR(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cg6,w)},
b2h(d,e,f,g,h){return B.i44(d,e,f,g,h)},
i44(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2h=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axd("GET",d)
o=A.he0()
if(o==null)o=new A.MW(A.a([],y.W))
x=7
return A.b(o.fc(0,s).de(0,C.Hu),$async$b2h)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Di(),$async$b2h)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CA(q,h,o,e,f,"Received via QR")
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
return A.i($async$b2h,w)},
b2g(d){return B.i41(d)},
i41(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.oP),$async$b2g)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.U.aP(0,A.mt(A.mq(p.e)).cG(0,p.w),null)
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
return A.i($async$b2g,w)},
cg5(d){return B.i42(d)},
i42(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cg5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.w6(d,null).de(0,C.r2),$async$cg5)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mt(A.mq(q.e)).cG(0,q.w)
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
return A.i($async$cg5,w)},
cg7:function cg7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jS:function jS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jx(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i49(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.Jx(C.a.aY(t,u.length))}return null},
i4a(d){var x=B.Jx(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i45(){var x,w=$.oI(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a8G(d){return B.i46(d)},
i46(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a8G)
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
return A.i($async$a8G,w)},
a8H(d,e){return B.i47(d,e)},
i47(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8H=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i1(d,e,!1,!1,C.cX,null),$async$a8H)
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
return A.i($async$a8H,w)},
Cz(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cz)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jx(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a8I(r),$async$Cz)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8G("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cz)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jx(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cz)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i45()
x=14
return A.b(B.a8I(m),$async$Cz)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).ab().ag()
x=15
return A.b(B.a8H("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 15:k=f
x=16
return A.b(B.a8H("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cz)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cz)
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
return A.i($async$Cz,w)},
a8I(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a8I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jx(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8G("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a8I)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
a8J(d,e,f,g){return B.i4b(d,e,f,g)},
i4b(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a8J=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a2(d)
if(g.gar(d)){v=!1
x=1
break}r=B.Jx(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a8I(r),$async$a8J)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cgd())>1048576||g.aR(d,new B.cge())){v=B.FC(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a8U("myCode",d,a0),$async$a8J)
case 4:u=a3
try{t=C.U.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cv(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FC(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2p(u,g.gJ(d),a0),$async$a8J)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oI().av(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dP(d,new B.cgf(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2i(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).ab().ag(),"status","pending"],i,y.z),q),$async$a8J)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8J,w)},
FC(d,e,f,g,h){return B.i48(d,e,f,g,h)},
i48(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FC=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$FC)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cI(a6)
k=l.cD(a6,0,new B.cg9())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oI().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cV.av(99999)
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
a1=B.JB(a9,q)
a0=new A.Lr(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FC)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.b0(J.k(o),5,"0")
a1=$.f5().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nM(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.ack(a1.a,a4,"media",a1.d,a2).xR(m,n,new A.ET(!0,q.c)),$async$FC)
case 12:J.c6(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FC)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aTz(r),$async$FC)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dP(a6,new B.cga(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2i(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).ab().ag(),"status","pending"],e,d),a8),$async$FC)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aTz(r),$async$FC)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FC,w)},
b2i(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8G(t),$async$b2i)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cg8(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8H(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2i,w)},
OC(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OC=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8G("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OC)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cv(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aR(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a0(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b2j(k,a0),$async$OC)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b2o(h),$async$OC)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WL(g,a0),$async$OC)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).ab().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgb(),q),n)
d=A.B(new A.X(r,new B.cgc(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cU(d,0,A.dA(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8H("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OC)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OC,w)},
b2j(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2j=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cv(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aR(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a2(p)
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
break}i=B.iA5(k,j)
C.d.u(s,i)
x=5
return A.b(B.DZ(l,m,"Received via My Code",t,e,i),$async$b2j)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aTz(s),$async$b2j)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2j,w)},
cgd:function cgd(){},
cge:function cge(){},
cgf:function cgf(){},
cg9:function cg9(){},
cga:function cga(){},
cg8:function cg8(){},
cgb:function cgb(){},
cgc:function cgc(){},
h3O(d,e){var x=0,w=A.j(y.H)
var $async$h3O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cb(A.eb(new B.h3P(e),!1,null,y.H)),$async$h3O)
case 2:return A.h(null,w)}})
return A.i($async$h3O,w)},
bI2(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bI2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cv(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cb(A.eb(new B.h3Q(g,e,f),!1,null,y.y)),$async$bI2)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI2,w)},
h3P:function h3P(d){this.a=d},
h3Q:function h3Q(d,e,f){this.a=d
this.b=e
this.c=f},
WB:function WB(d,e){this.c=d
this.a=e},
aGa:function aGa(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e1S:function e1S(d,e){this.a=d
this.b=e},
WF:function WF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGd:function aGd(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e30:function e30(d){this.a=d},
e31:function e31(d){this.a=d},
e32:function e32(d){this.a=d},
e3_:function e3_(d,e){this.a=d
this.b=e},
e33:function e33(d){this.a=d},
e34:function e34(d){this.a=d},
e35:function e35(d,e){this.a=d
this.b=e},
e36:function e36(d,e){this.a=d
this.b=e},
e37:function e37(d,e){this.a=d
this.b=e},
e38:function e38(d){this.a=d},
e3b:function e3b(){},
e39:function e39(d){this.a=d},
e3a:function e3a(d,e){this.a=d
this.b=e},
bmK:function bmK(){},
WC:function WC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGb:function aGb(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e1T:function e1T(d){this.a=d},
e1U:function e1U(d){this.a=d},
hhC(d){var x=d.i8
if(x>=0)return C.o.M(x)
return 10},
i4d(d){var x=d.l2
if(x>=0)return x
return 4.99},
i4c(d){var x=d.lK,w=y.N
w=x.iW(x,new B.cgh(),w,w)
return w},
hyT(d){var x=d.kE,w=y.N
w=x.iW(x,new B.cgi(),w,w)
return w},
b2m(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2m=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2m)
case 7:s=f
r=A.v(p)
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
return A.i($async$b2m,w)},
a8L(d,e){var x=0,w=A.j(y.H),v,u
var $async$a8L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a8L)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a8L)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
WE(d){var x=0,w=A.j(y.H),v,u
var $async$WE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WE)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WE)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WE,w)},
hhB(d,e){var x,w,v
if(B.i4d(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i4c(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ce(new A.W(Date.now(),0,!1))},
b2k(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hyT(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ce(new A.W(Date.now(),0,!1))},
hyU(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hyT(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ce(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.dx(f,0,0,0,0,0).a).ab().ag())
d.kE=w},
arG(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$arG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$arG)
case 7:s=f
r=A.v(p)
r=A.et(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$arG,w)},
arH(d){var x=0,w=A.j(y.H),v,u,t
var $async$arH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.arG(d),$async$arH)
case 3:u=f
x=5
return A.b(A.aB(),$async$arH)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$arH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$arH,w)},
arF(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$arF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hhC(d)
if(u<=0){v=!1
x=1
break}if(B.hhB(d,e)){v=!1
x=1
break}x=3
return A.b(B.arG(e),$async$arF)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arF,w)},
b2l(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jz(e,d),$async$b2l)
case 3:if(g){v=-1
x=1
break}u=B.hhC(d)
if(u<=0){v=-1
x=1
break}if(B.hhB(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.arG(e),$async$b2l)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2l,w)},
cgk(d,e,f){var x=0,w=A.j(y.y),v
var $async$cgk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jz(e,d),$async$cgk)
case 3:if(h){v=!1
x=1
break}v=B.arF(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgk,w)},
cgj(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cgj=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.cgk(d,u,i.gV3()),$async$cgj)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgj,w)},
a8K(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a8K=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gV3()){v=!0
x=1
break}if(B.b2k(d,u)){v=!0
x=1
break}x=5
return A.b(A.lT(u,C.V8),$async$a8K)
case 5:x=k?3:4
break
case 3:B.hyU(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a8K)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lt(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.V8,"Doc Share for Organizations"),$async$a8K)
case 7:if(!k){v=!1
x=1
break}B.hyU(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a8K)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8K,w)},
cgh:function cgh(){},
cgi:function cgi(){},
h4O(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h4O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h4O)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fvx.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i3([r],e.c))
s.toString
$.fvx.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h4O,w)},
iCj(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fvx.bq($.fvx,new B.h4Q(d))},
h4Q:function h4Q(d){this.a=d},
fxc(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fxc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i3([d],f))
s.toString
u=A.ng(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bL(C.jA,null,y.H),$async$fxc)
case 3:C.BU.fv(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.mJ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxc,w)},
ahO(d,e,f){var x=0,w=A.j(y.H),v
var $async$ahO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fwd.n(0,d,new B.adP(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ahO)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.U.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ahO)
case 2:return A.h(null,w)}})
return A.i($async$ahO,w)},
ahI(d){return B.ikA(d)},
ikA(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ahI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fwd.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ahI)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.U.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cv(s)){v=null
x=1
break}o=J.b8(s,new B.fB_(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.adP(r)
$.fwd.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ahI,w)},
S9(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$S9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cb(e))
$.Hm.n(0,d,u)
x=3
return A.b(B.SH(d,u),$async$S9)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$S9,w)},
aRb(d){return B.iky(d)},
iky(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hm.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SG(d),$async$aRb)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hm.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRb)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cH.aK(r)
x=!J.cv(q)?9:10
break
case 9:B.S9(d,q)
x=11
return A.b(J.fQ(s,d),$async$aRb)
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
return A.i($async$aRb,w)},
igB(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cb(J.ez(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cb(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cb(A.vW(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cb(d)),y.K)
return A.f8(null,y.K)},
a3s(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.c7(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fGU(r,t),!1,s)
A.fG(r,"error",new B.fGV(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.OX,new B.fGW())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3s,w)},
aRw(d,e,f){return B.imX(d,e,f)},
imX(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aRw=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a3s(i),$async$aRw)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.SH(o,p),$async$aRw)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c6(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ahO(k,j,s),$async$aRw)
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
return A.i($async$aRw,w)},
aRv(d,e,f){return B.imW(d,e,f)},
imW(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRv=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aRw(d,e,f),$async$aRv)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3s(f),$async$aRv)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hm.n(0,s,r)
$.Ss.n(0,s,r)
x=11
return A.b(B.S9(s,r),$async$aRv)
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
return A.i($async$aRv,w)},
CA(d,e,f,g,h,i){return B.i4m(d,e,f,g,h,i)},
i4m(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CA=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jS(p,q,o,n,new A.W(Date.now(),0,!1).ab().ag(),a0,f,B.b2s(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.S9(s,d),$async$CA)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CA)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$CA)
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
return A.b(B.Bu(e),$async$CA)
case 12:j=a2
J.c6(j,m)
x=13
return A.b(B.Hw(e,j),$async$CA)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CA,w)},
WG(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bu(d),$async$WG)
case 3:t=a1
s=e.length,r=J.cI(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cV.av(99999)
n=p.b
l=o.type
l.toString
k=B.hyW(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).ab().ag()
i=new B.jS(m,n,k,l,j,"From folder",null,B.b2s(),null)
$.aic.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3s(o),$async$WG)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hm.n(0,h,g)
$.Ss.n(0,h,g)
B.S9(h,g)
x=9
break
case 10:x=11
return A.b(B.aRv(d,m,o),$async$WG)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hw(d,t),$async$WG)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WG,w)},
hhG(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hhG=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hyW(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JA(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CA(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhG,w)},
JA(d,e,f,g,h,i){return B.i4l(d,e,f,g,h,i)},
i4l(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JA=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lr(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JA)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cv(m)){x=6
break}J.hb(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cb(J.Th(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.ku(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.SH(k,l),$async$JA)
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
return A.b(j.a1(0),$async$JA)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.SH(k,new Uint8Array(A.cb(n))),$async$JA)
case 15:J.c6(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ahO(r,q,g),$async$JA)
case 16:f=new B.jS(i,a1,a0,g,new A.W(Date.now(),0,!1).ab().ag(),a2,null,B.b2s(),null)
x=17
return A.b(B.Bu(d),$async$JA)
case 17:e=a6
J.c6(e,f)
x=18
return A.b(B.Hw(d,e),$async$JA)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JA,w)},
WI(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WI=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aic.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3s(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ahI(s),$async$WI)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SG(u[o]),$async$WI)
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
v=A.vW(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Ss.h(0,s)
if(i==null)i=$.Hm.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t6(d,e),$async$WI)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.Ss.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.vW(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WI,w)},
hyW(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t6(d,e){return B.i4n(d,e)},
i4n(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t6=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Ss.h(0,f)
if(e==null)e=$.Hm.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aic.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3s(s),$async$t6)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hm.n(0,f,r)
$.Ss.n(0,f,r)
B.S9(f,r)
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
return A.b(B.ahI(f),$async$t6)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.adL(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SG(g[l]),$async$t6)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8d()
if(!C.aI.gar(r)){$.Hm.n(0,f,r)
$.Ss.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRb(f),$async$t6)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.Ss.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WI(a0,a1,0,g),$async$t6)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cb(i))
$.Hm.n(0,f,h)
$.Ss.n(0,f,h)
B.S9(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t6,w)},
i4q(d){var x,w,v=$.aic.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i4r(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i3([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i4o(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
arN(d,e,f,g,h){return B.i4p(d,e,f,g,h)},
i4p(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$arN=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aic.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3s(s),$async$arN)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t6(g,e),$async$arN)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f5().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iE(d).xR(h,r,new A.ET(!0,e.c)),$async$arN)
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
return A.i($async$arN,w)},
hyY(d,e,f,g,h){var x,w,v,u,t=$.hyX
$.hyX=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cgv.n(0,t,new B.bzJ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.adL(u)))
return t},
hhH(d){var x=0,w=A.j(y.H)
var $async$hhH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hhH,w)},
JB(d,e){var $async$JB=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aic.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qK(B.WI(d,e,p,o<q?o:q),$async$JB,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qK(A.GT(n),$async$JB,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qK(B.ahI("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JB,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qK(B.SG(h[l]),$async$JB,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qK(A.GT(k),$async$JB,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qK(B.t6(d,e),$async$JB,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qK(A.GT(A.vW(j,p,o<i?o:i)),$async$JB,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qK(null,0,w)
case 2:return A.qK(t.at(-1),1,w)}})
var x=0,w=A.hI5($async$JB,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hK8(w)},
b2u(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b2u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cgv.h(0,d)
if(t==null||J.cv(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6v(),$async$b2u)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2u,w)},
WH(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgv.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6v(),$async$WH)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ahO(r.c,u,r.z),$async$WH)
case 4:t=new B.jS(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).ab().ag(),r.f,r.r,B.b2s(),null)
u=r.a
x=5
return A.b(B.Bu(u),$async$WH)
case 5:s=f
J.c6(s,t)
x=6
return A.b(B.Hw(u,s),$async$WH)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WH,w)},
a8R(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cgv.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aiT(u[s]),$async$a8R)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a8R,w)},
cgx(d,e,f){var x=0,w=A.j(y.H)
var $async$cgx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bEQ(d,e,f),$async$cgx)
case 2:return A.h(null,w)}})
return A.i($async$cgx,w)},
cgy(d,e,f){var x=0,w=A.j(y.H)
var $async$cgy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bER(d,e,f),$async$cgy)
case 2:return A.h(null,w)}})
return A.i($async$cgy,w)},
FD(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bu(d),$async$FD)
case 2:p=g
J.ne(p,new B.cgw(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hm.X(0,v)
$.aic.X(0,e)
x=3
return A.b(B.ahI(v),$async$FD)
case 3:u=g
$.fwd.X(0,v)
x=4
return A.b(A.aB(),$async$FD)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FD)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FD)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aiT(s[q]),$async$FD)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aiT(v),$async$FD)
case 13:x=14
return A.b(B.Hw(d,p),$async$FD)
case 14:return A.h(null,w)}})
return A.i($async$FD,w)},
b2t(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b2t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t6(d,e),$async$b2t)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fxc(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2t,w)},
Bu(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Bu)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.U.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fGX(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bu,w)},
Hw(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$Hw)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fLe(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.U.au(t,null)),$async$Hw)
case 3:return A.h(null,w)}})
return A.i($async$Hw,w)},
bEQ(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bEQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bEQ)
case 3:u=h
t=J.cI(u)
s=t.bl(u,new B.fF5(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHd(f))
x=4
return A.b(B.Hw(d,u),$async$bEQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bEQ,w)},
bER(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bER=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bu(d),$async$bER)
case 3:u=h
t=J.cI(u)
s=t.bl(u,new B.fF6(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cRD(f))
x=4
return A.b(B.Hw(d,u),$async$bER)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bER,w)},
adP:function adP(d){this.a=d},
fB_:function fB_(){},
fGU:function fGU(d,e){this.a=d
this.b=e},
fGV:function fGV(d){this.a=d},
fGW:function fGW(){},
cgw:function cgw(d){this.a=d},
bzJ:function bzJ(d,e,f,g,h,i,j,k,l){var _=this
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
fGX:function fGX(){},
fLe:function fLe(){},
fF5:function fF5(d){this.a=d},
fF6:function fF6(d){this.a=d},
a8S(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.cgB())?3:4
break
case 3:x=5
return A.b(B.b2v(d,e),$async$a8S)
case 5:u=g
if(u!=null){t=u.c
B.OE(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gG(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b2q(s),$async$a8S)
case 10:case 9:if(g){v=new A.Ru(1,D.UM,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WJ(d,e),$async$a8S)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.WO(!0,!0,d,e),$async$a8S)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OE(d,D.AW,e,t)
v=new A.Ru(p,D.AW,t)
x=1
break}v=B.cgA(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8S,w)},
WJ(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8U(null,d,e),$async$WJ)
case 3:p=g
try{u=C.U.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cv(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2p(p,d.length,e),$async$WJ)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cgy(e,C.d.gG(d).a,r.b),$async$WJ)
case 7:case 6:q=r.a
x=8
return A.b(B.OE(d,D.UM,e,q),$async$WJ)
case 8:v=new A.Ru(d.length,D.UM,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WJ,w)},
WK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mQ(D.nl)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8T(d,e),$async$WK)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cgt(s,d,e,t),$async$WK)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b2q(t),$async$WK)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t6(e,d),$async$WK)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WJ(A.a([d],y.r),e),$async$WK)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
WM(){var x=0,w=A.j(y.H)
var $async$WM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hhA(),$async$WM)
case 2:x=3
return A.b(B.aTV(),$async$WM)
case 3:return A.h(null,w)}})
return A.i($async$WM,w)},
a8T(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b2s()
x=3
return A.b(B.cgx(e,d.a,u),$async$a8T)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8T,w)},
OE(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OE=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.UM&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8T(p,f),$async$OE)
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
return A.b(B.cgs(o,p,u,f),$async$OE)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cgt(o,p,f,t),$async$OE)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cgr(o,u,p,f),$async$OE)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OE,w)},
b2v(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b2v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgz(e,d),$async$b2v)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.WO(!1,!0,d,e),$async$b2v)
case 4:u=g
if(u!=null){t=u.b
v=new A.Ru(u.a,D.AW,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2v,w)},
cgz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cgz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WI(d,s,0,1),$async$cgz)
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
return A.i($async$cgz,w)},
cgA(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cgA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8U(null,d,e),$async$cgA)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hyV(u)
if(t.length>800){v=null
x=1
break}v=new A.Ru(d.length,D.dZX,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgA,w)},
arO(d,e,f){return B.i4u(d,e,f)},
i4u(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$arO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d9(g,"\ufeff"))g=J.nf(g,1)
x=B.hhF(g)?3:4
break
case 3:x=5
return A.b(B.cgu(g),$async$arO)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d9(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nf(g,13))
try{k=B.FE(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.d9(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nf(g,13))
u=9
x=12
return A.b(B.b2o(q),$async$arO)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WL(p,a0)
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
case 11:case 7:if(J.d9(g,"NGMYDOCSYNC0|"))try{n=B.hhE(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WL(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.d9(g,"N2|")){v=B.JC(C.a.i(J.nf(g,3)),d,a0)
x=1
break}if(J.d9(g,"NGMYDOCSYNC2|")){v=B.JC(C.a.i(J.nf(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aw(k,0,k.length-1)
else h=k
v=B.JC(h,d,a0)
x=1
break}if(J.eC(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WL(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$arO,w)},
JC(d,e,f){return B.i4s(d,e,f)},
i4s(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JC=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aw(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2g(r),$async$JC)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2g(A.cH(s,0,null)),$async$JC)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cv(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cg6(o,r,a1,n,a2),$async$JC)
case 11:m=a4
x=J.cv(m)?12:13
break
case 12:x=14
return A.b(B.cg5(q),$async$JC)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WL(l,a2),$async$JC)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cv(m)?null:m
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
return A.i($async$JC,w)},
a8U(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aR(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t6(f,r),$async$a8U)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).ab().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.U.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8U,w)},
WL(d,e){return B.i4t(d,e)},
i4t(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WL=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.U.aP(0,a2,null)
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
e=J.aR(r)
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
break}i=C.cH.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.CA(i,a3,d,k,l,o),$async$WL)
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
return A.i($async$WL,w)},
OD:function OD(d,e){this.a=d
this.b=e},
cgB:function cgB(){},
a31(d){var x=A.Q(d).ax.a===C.I,w=x?D.ak2:D.ahw,v=x?D.alQ:C.c,u=x?C.aS:C.a_,t=x?C.bP:C.an,s=x?D.aj0:C.bn
return new A.aJg([w,s,v,u,t,x?C.fz:C.bS])},
hPT(d,e){var x=e?C.v.j(0.72):C.b7
return A.cd(null,x,!0,null,new B.h95(e),d,null,!0,!0,y.N)},
cgg(d,e,f,g,h,i,j,k,l){return new B.WD(e,l,d,f,k,j,g,h,i,null)},
a_Z(d,e,f,g,h,i,j){return new B.bhe(g,h,j,e,i,d,f,null)},
h95:function h95(d){this.a=d},
a_W:function a_W(d,e){this.c=d
this.a=e},
aC7:function aC7(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dfu:function dfu(d){this.a=d},
dfs:function dfs(d){this.a=d},
dft:function dft(d){this.a=d},
bzl:function bzl(){},
WD:function WD(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGc:function aGc(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e2Z:function e2Z(d){this.a=d},
e2m:function e2m(d,e){this.a=d
this.b=e},
e2n:function e2n(d,e){this.a=d
this.b=e},
e1W:function e1W(d,e,f){this.a=d
this.b=e
this.c=f},
e1V:function e1V(d){this.a=d},
e1X:function e1X(d,e){this.a=d
this.b=e},
e21:function e21(d,e,f){this.a=d
this.b=e
this.c=f},
e20:function e20(d){this.a=d},
e2N:function e2N(d,e){this.a=d
this.b=e},
e2O:function e2O(d){this.a=d},
e2j:function e2j(d,e,f){this.a=d
this.b=e
this.c=f},
e2g:function e2g(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e2_:function e2_(d){this.a=d},
e2r:function e2r(d){this.a=d},
e2q:function e2q(){},
e25:function e25(d){this.a=d},
e2K:function e2K(d,e){this.a=d
this.b=e},
e2L:function e2L(d,e){this.a=d
this.b=e},
e2M:function e2M(d,e){this.a=d
this.b=e},
e2h:function e2h(d,e){this.a=d
this.b=e},
e2i:function e2i(d,e){this.a=d
this.b=e},
e2D:function e2D(d,e){this.a=d
this.b=e},
e2z:function e2z(d){this.a=d},
e2y:function e2y(d){this.a=d},
e2A:function e2A(){},
e2B:function e2B(){},
e2C:function e2C(d,e){this.a=d
this.b=e},
e2E:function e2E(){},
e2F:function e2F(d){this.a=d},
e2x:function e2x(d,e){this.a=d
this.b=e},
e2s:function e2s(d){this.a=d},
e2t:function e2t(d){this.a=d},
e2u:function e2u(d){this.a=d},
e2v:function e2v(d){this.a=d},
e2w:function e2w(d){this.a=d},
e22:function e22(){},
e23:function e23(d){this.a=d},
e24:function e24(d,e){this.a=d
this.b=e},
e1Z:function e1Z(d,e){this.a=d
this.b=e},
e1Y:function e1Y(d,e,f){this.a=d
this.b=e
this.c=f},
e2k:function e2k(d){this.a=d},
e2l:function e2l(d,e,f){this.a=d
this.b=e
this.c=f},
e2e:function e2e(d,e){this.a=d
this.b=e},
e2a:function e2a(d){this.a=d},
e27:function e27(d,e,f){this.a=d
this.b=e
this.c=f},
e2b:function e2b(d){this.a=d},
e2c:function e2c(d){this.a=d},
e2d:function e2d(){},
e2f:function e2f(d,e){this.a=d
this.b=e},
e28:function e28(d){this.a=d},
e26:function e26(d,e,f){this.a=d
this.b=e
this.c=f},
e29:function e29(){},
e2p:function e2p(d){this.a=d},
e2o:function e2o(d,e){this.a=d
this.b=e},
e2J:function e2J(d,e){this.a=d
this.b=e},
e2G:function e2G(d){this.a=d},
e2H:function e2H(d,e){this.a=d
this.b=e},
e2I:function e2I(d){this.a=d},
e2W:function e2W(d){this.a=d},
e2U:function e2U(d){this.a=d},
e2V:function e2V(d){this.a=d},
e2X:function e2X(){},
e2Y:function e2Y(d,e){this.a=d
this.b=e},
e2Q:function e2Q(d,e){this.a=d
this.b=e},
e2R:function e2R(d,e,f){this.a=d
this.b=e
this.c=f},
e2P:function e2P(d,e,f){this.a=d
this.b=e
this.c=f},
e2S:function e2S(d,e){this.a=d
this.b=e},
e2T:function e2T(d,e){this.a=d
this.b=e},
aC4:function aC4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhd:function bhd(d,e,f){this.c=d
this.d=e
this.a=f},
dfq:function dfq(){},
dfr:function dfr(){},
ae8:function ae8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dfO:function dfO(){},
dfN:function dfN(d){this.a=d},
a_Y:function a_Y(d,e,f){this.c=d
this.d=e
this.a=f},
aC9:function aC9(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dfK:function dfK(d){this.a=d},
dfL:function dfL(d,e,f){this.a=d
this.b=e
this.c=f},
dfM:function dfM(d,e){this.a=d
this.b=e},
dfI:function dfI(d,e){this.a=d
this.b=e},
dfG:function dfG(d){this.a=d},
dfE:function dfE(d){this.a=d},
dfB:function dfB(d){this.a=d},
dfH:function dfH(d){this.a=d},
dfD:function dfD(d){this.a=d},
dfJ:function dfJ(d){this.a=d},
dfF:function dfF(d){this.a=d},
dfC:function dfC(d){this.a=d},
a_V:function a_V(d,e,f){this.c=d
this.d=e
this.a=f},
aC6:function aC6(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dfn:function dfn(d){this.a=d},
dfm:function dfm(d,e){this.a=d
this.b=e},
dfo:function dfo(d){this.a=d},
dfl:function dfl(d,e){this.a=d
this.b=e},
dfp:function dfp(d){this.a=d},
dfk:function dfk(d,e){this.a=d
this.b=e},
dfg:function dfg(d){this.a=d},
dfh:function dfh(d){this.a=d},
dfi:function dfi(d,e){this.a=d
this.b=e},
dfj:function dfj(d){this.a=d},
R0:function R0(d,e,f){this.c=d
this.d=e
this.a=f},
aCc:function aCc(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dg0:function dg0(d){this.a=d},
dg1:function dg1(d){this.a=d},
dg2:function dg2(d){this.a=d},
dg3:function dg3(d){this.a=d},
dg4:function dg4(d,e){this.a=d
this.b=e},
dg5:function dg5(d){this.a=d},
dg7:function dg7(d){this.a=d},
dg6:function dg6(d){this.a=d},
a0_:function a0_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCa:function aCa(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dfX:function dfX(d,e){this.a=d
this.b=e},
dfY:function dfY(d,e){this.a=d
this.b=e},
dfP:function dfP(d,e,f){this.a=d
this.b=e
this.c=f},
dfQ:function dfQ(d){this.a=d},
dfR:function dfR(){},
dfW:function dfW(){},
dfS:function dfS(d,e){this.a=d
this.b=e},
dfT:function dfT(d,e){this.a=d
this.b=e},
dfU:function dfU(d,e){this.a=d
this.b=e},
dfV:function dfV(d,e){this.a=d
this.b=e},
ae6:function ae6(d,e){this.c=d
this.a=e},
dff:function dff(d){this.a=d},
a_U:function a_U(d){this.a=d},
aC5:function aC5(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a00:function a00(d,e){this.c=d
this.a=e},
aCb:function aCb(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dg_:function dg_(d){this.a=d},
dfZ:function dfZ(d){this.a=d},
bhe:function bhe(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i4v(){var x,w=$.oI(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.hl(v)},
OF(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OF=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$OF)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OF)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
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
return A.i($async$OF,w)},
a8V(d){return B.i4w(d)},
i4w(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8V)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cX,null),$async$a8V)
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
return A.i($async$a8V,w)},
WN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OF(),$async$WN)
case 3:s=g
r=J.a2(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dD(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).ab().ag())
r.n(s,d,t)
x=4
return A.b(B.a8V(s),$async$WN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WN,w)},
WO(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$WO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.cc(),$async$WO)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.cgD(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i4v()
t=A.U(u).k("O<1,a9<n,aE>>")
r=A.B(new A.O(u,new B.cgE(s),t),t.k("aj.E"))
x=6
return A.b(B.OF(),$async$WO)
case 6:q=i
J.aK(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=7
return A.b(B.a8V(q),$async$WO)
case 7:x=8
return A.b(B.a8W(r,u,g,s),$async$WO)
case 8:v=new A.bta(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WO,w)},
arP(d){var x=0,w=A.j(y.y),v,u,t
var $async$arP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OF(),$async$arP)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arP,w)},
cgF(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cgF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OF(),$async$cgF)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a2(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgF,w)},
a8W(d,e,f,g){return B.i4x(d,e,f,g)},
i4x(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8W=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.arN("media",r,new B.cgC(s,e,g),f,q),$async$a8W)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WN(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8W)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WN(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$a8W)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WN(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8W)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8W,w)},
FE(d,e,f){return B.i4y(d,e,f)},
i4y(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FE=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$FE)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.arP(b3),$async$FE)
case 7:if(c0){x=6
break}x=8
return A.b(A.bL(C.j2,null,g),$async$FE)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.arP(b3),$async$FE)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OF(),$async$FE)
case 10:e=c0
g=J.a2(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a2(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cv(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a2(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a2(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f5().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nM(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.ack(a8.a,b0,"media",a8.d,a9).DD(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b2h(k,n,o,s,b7),$async$FE)
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
case 18:g.X(e,b3)
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
a2=$.f5().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nM(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.ack(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FE)
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
a0=A.dD(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).ab().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8V(e),$async$FE)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FE,w)},
cgD:function cgD(){},
cgE:function cgE(d){this.a=d},
cgC:function cgC(d,e,f){this.a=d
this.b=e
this.c=f},
aTV(){var x=0,w=A.j(y.H),v,u
var $async$aTV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ifU=null
v=y.H
u=A.dQ(null,v)
x=2
return A.b(u,$async$aTV)
case 2:u=A.dQ(null,v)
x=3
return A.b(u,$async$aTV)
case 3:u=$.hnd
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dQ(u,v),$async$aTV)
case 4:$.hnd=$.ioO=$.ioP=null
return A.h(null,w)}})
return A.i($async$aTV,w)},
fKQ(d){var x=0,w=A.j(y.H),v,u
var $async$fKQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.aaS){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fKR(new A.c7(u,y.aY))
x=3
return A.b(u.ic(0,C.hb,new B.fKS()),$async$fKQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fKQ,w)},
ioM(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i4f(x):x},
hni(d){var x=0,w=A.j(y.T),v,u,t
var $async$hni=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.Y(u,"WR")){v=B.arR(u)
x=1
break}v=B.hhE(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hni,w)},
hnh(d){var x=0,w=A.j(y.T),v,u,t
var $async$hnh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.Y(u,"WR")){v=B.arS(u)
x=1
break}v=B.hhE(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnh,w)},
h4x(d){var x=0,w=A.j(y.T),v
var $async$h4x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arS(d),$async$h4x)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h4x,w)},
bFO(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bFO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hnh(d),$async$bFO)
case 3:q=f
if(q==null){x=1
break}t=C.U.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a2(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bFO,w)},
fy0(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fy0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WH(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.CA(d.a8d(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fy0,w)},
Hy(d,e,f){return B.ir8(d,e,f)},
ir8(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hy=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hni(a1),$async$Hy)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.U.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a2(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hRU().aHu(D.dM4,null),$async$Hy)
case 4:l=d.hnd=a4
f.a="file"
f.b="application/octet-stream"
k=new A.adL(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fLr(f,k,new B.fLs(f,a2,k,j,a0,p),a2,j,a0,p,new A.c7(t,y.ch))
x=5
return A.b(l.a9z(0,new B.Z0(r,"offer")),$async$Hy)
case 5:d=l
x=7
return A.b(l.ani(0),$async$Hy)
case 7:x=6
return A.b(d.a9r(0,a4),$async$Hy)
case 6:x=8
return A.b(B.fKQ(l),$async$Hy)
case 8:x=9
return A.b(l.arG(),$async$Hy)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ioM(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.U.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.arT(m,h),$async$Hy)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hyV(h)
case 11:v=new A.bsp(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hy,w)},
fKR:function fKR(d){this.a=d},
fKS:function fKS(){},
fLs:function fLs(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fLr:function fLr(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fLq:function fLq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
itd(d){switch(d){case"new":return D.eJZ
case"checking":return D.eK_
case"connected":return D.eK1
case"completed":return D.eK0
case"failed":return D.eK3
case"disconnected":return D.eK4
case"closed":return D.aT9
case"count":return D.eK2}return D.aT9},
ite(d){switch(d){case"new":return D.aTa
case"gathering":return D.eK5
case"complete":return D.aaS}return D.aTa},
iDS(d){switch(d){case"stable":return D.eK6
case"have-local-offer":return D.eK7
case"have-local-pranswer":return D.eK9
case"have-remote-offer":return D.eK8
case"have-remote-pranswer":return D.eKa
case"closed":return D.aTg}return D.aTg},
iC0(d){switch(d){case"new":return D.aTd
case"connecting":return D.aTe
case"connected":return D.aTf
case"closed":return D.aaT
case"disconnected":return D.aTc
case"failed":return D.aTb}return D.aaT},
abh:function abh(d,e){this.a=d
this.b=e},
PK:function PK(d,e){this.a=d
this.b=e},
Z_:function Z_(d,e){this.a=d
this.b=e},
PJ:function PJ(d,e){this.a=d
this.b=e},
G8:function G8(d,e){this.a=d
this.b=e},
cuD:function cuD(){},
hjr(d){var x=new B.G7()
x.a=d
x.b=!0
return x},
G7:function G7(){this.b=this.a=$},
abg:function abg(){},
awo:function awo(){},
Z0:function Z0(d,e){this.a=d
this.b=e},
hhA(){var x=0,w=A.j(y.H)
var $async$hhA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hhA,w)},
hhD(d,e,f){var x=0,w=A.j(y.T),v
var $async$hhD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mQ(D.nl))){v=null
x=1
break}v=B.h4O(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hhD,w)},
hyV(d){var x,w=F.agX.a6e(C.e1.aK(d),null)
if(w.length===0){x=C.e1.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i4e(d){var x,w,v=C.cH.aK(d)
try{x=C.ce.cG(0,F.agW.bhy(v,!1))
return x}catch(w){x=C.ce.cG(0,v)
return x}},
hhE(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i4e(C.a.aY(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aY(t,w.length)
try{v=C.ce.cG(0,C.cH.aK(x))
return v}catch(u){return x}}return null},
i4f(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aL(s,"\n")},
i4g(){var x,w=$.oI(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.hl(v)},
b2n(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2n)
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
return A.i($async$b2n,w)},
cgl(d,e){return B.i4h(d,e)},
i4h(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cgl=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cX,null),$async$cgl)
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
return A.i($async$cgl,w)},
b2q(d){var x=0,w=A.j(y.y),v,u,t
var $async$b2q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2n(d),$async$b2q)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2q,w)},
b2p(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2p=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i4g()
r=C.a.i(f)
t=C.e1.aK(s)
x=3
return A.b(B.cgl(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$b2p)
case 3:if(!h){v=null
x=1
break}v=new A.a21("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2p,w)},
b2o(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2n(o),$async$b2o)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ce.cG(0,C.cH.aK(u))
if(J.je(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2o,w)},
cgm(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cgm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(P.bGN("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cX),$async$cgm)
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
return A.i($async$cgm,w)},
b2r(d){var x=0,w=A.j(y.h),v,u,t
var $async$b2r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jy(),$async$b2r)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2r,w)},
arK(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$arK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arK)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b2r(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arK,w)},
arI(d,e){var x=0,w=A.j(y.H)
var $async$arI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arI)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$arI)
case 2:return A.h(null,w)}})
return A.i($async$arI,w)},
a8N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a8N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8N)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jy(),$async$a8N)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dw(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.C))
x=5
return A.b(A.a8M(s),$async$a8N)
case 5:x=6
return A.b(B.arI(f,u),$async$a8N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8N,w)},
a8O(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8O=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8O)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jy(),$async$a8O)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a2(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a0(r,y.N,y.z)
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
return A.b(B.arI(g,q),$async$a8O)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a8M(u),$async$a8O)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8O,w)},
a8P(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8P=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8P)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jy(),$async$a8P)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a2(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b2k(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a8P)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.U.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).ab().ag()],p,p),null)),$async$a8P)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
cgn(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cgn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$cgn)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.U.aP(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a0(q,y.N,y.z)
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
return A.i($async$cgn,w)},
Jz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cgn(d),$async$Jz)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b2r(t),$async$Jz)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.arJ(d),$async$Jz)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2k(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.arJ(d),$async$Jz)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jz,w)},
arJ(d){var x=0,w=A.j(y.H)
var $async$arJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$arJ)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$arJ)
case 2:return A.h(null,w)}})
return A.i($async$arJ,w)},
b2s(){var x,w=$.oI(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.hl(v)},
a8Q(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hhF(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cgq(d){return B.i4j(d)},
i4j(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cgq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8Q(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$cgq)
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
return A.i($async$cgq,w)},
arM(d,e){return B.i4k(d,e)},
i4k(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$arM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8Q(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cX,null),$async$arM)
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
return A.i($async$arM,w)},
cgs(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgs=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8Q(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.arM(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cgs)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgs,w)},
cgr(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cgr=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8Q(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.arM(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z)),$async$cgr)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cgr,w)},
cgt(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cgt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8Q(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.arM(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgt,w)},
cgu(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cgu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hhF(d)){v=null
x=1
break}x=3
return A.b(B.cgq(d),$async$cgu)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a2(u)
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
return A.i($async$cgu,w)},
a8X(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8X=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$a8X)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a8X)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
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
return A.i($async$a8X,w)},
arQ(d){return B.i4z(d)},
i4z(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$arQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.cc(),$async$arQ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i1("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).ab().ag()],y.N,y.z),!1,!1,C.cX,null),$async$arQ)
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
return A.i($async$arQ,w)},
arR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$arR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d9(j,"WR")){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arR)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8X(),$async$arR)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ce.cG(0,C.cH.aK(q))
if(J.je(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dD(A.a0(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.W(Date.now(),0,!1).ab().ag())
J.aK(s,j,o)
x=9
return A.b(B.arQ(s),$async$arR)
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
return A.i($async$arR,w)},
arT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$arT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.cc(),$async$arT)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8X(),$async$arT)
case 4:u=g
t=J.a2(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dD(A.a0(s,r,q),r,q)
r=C.e1.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).ab().ag())
t.n(u,p,q)
x=5
return A.b(B.arQ(u),$async$arT)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arT,w)},
arS(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$arS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.cc(),$async$arS)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8X(),$async$arS)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ce.cG(0,C.cH.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$arS,w)},
aqK(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aqK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.oq)){v=null
x=1
break}x=3
return A.b(p.lv(e),$async$aqK)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.ho),$async$aqK)
case 7:q=g
o=q
o=o==null?null:J.eU(J.uV(o))
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
return A.i($async$aqK,w)},
iA5(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b0(C.o.v(w),5,"0")
return v},
h2G(d){return B.iA7(d)},
iA7(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h2G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").LZ(d,3600),$async$h2G)
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
return A.i($async$h2G,w)},
DZ(d,e,f,g,h,i){var x=null
return B.iA4(d,e,f,g,h,i)},
iA4(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DZ=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hyY(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hhH(r),$async$DZ)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h2G(o),$async$DZ)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8R(r),$async$DZ)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aWS)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MW(A.a([],g))
x=15
return A.b(d.fc(0,A.axd("GET",A.cH(n,0,null))).de(0,C.Hu),$async$DZ)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8R(r),$async$DZ)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lr(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DZ)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b2u(r,k),$async$DZ)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DZ)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WH(r)
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
return A.b(B.a8R(r),$async$DZ)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DZ,w)},
aTz(d){return B.iA6(d)},
iA6(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aTz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iE("media").X(0,d),$async$aTz)
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
return A.i($async$aTz,w)}},D,Z,I,O,A_,A0,A1
J=c[1]
A=c[0]
C=c[2]
P=c[78]
K=c[118]
Q=c[372]
R=c[61]
F=c[364]
L=c[217]
G=c[83]
S=c[329]
T=c[330]
E=c[320]
H=c[120]
U=c[276]
V=c[137]
W=c[86]
X=c[218]
Y=c[327]
M=c[309]
N=c[373]
B=a.updateHolder(c[26],B)
D=c[371]
Z=c[275]
I=c[139]
O=c[303]
A_=c[93]
A0=c[356]
A1=c[101]
B.cuE.prototype={
aHu(d,e){return this.cT7(d,e)},
cT7(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aHu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dD(r,s,t)
t.u(0,d)
u=new q(A.kz(A.cy(t)))
t=J.k(u)
v=B.i9k(C.cS.gcp().aK(new A.di(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aHu,w)}}
B.b7E.prototype={
bDT(d){var x=this,w=x.w
w.onclose=A.hD(new B.cuz(x))
w.onopen=A.hD(new B.cuA(x))
w.onmessage=A.hD(new B.cuB(x))
w.onbufferedamountlow=A.hD(new B.cuC(x))},
gd4(d){return this.x},
ajx(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ajx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.G7()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hjr(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.em(d.arrayBuffer(),y.af),$async$ajx)
case 8:v=t.hjr(s.apT(f,0,null))
x=1
break
case 7:case 4:v=B.hjr(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajx,w)}}
B.b7F.prototype={
bDU(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hD(new B.cuF(x)))
w.addEventListener("icecandidate",A.hD(new B.cuG(x)))
w.addEventListener("iceconnectionstatechange",A.hD(new B.cuH(x)))
w.onicegatheringstatechange=A.hD(new B.cuI(x))
w.addEventListener("signalingstatechange",A.hD(new B.cuJ(x)))
if(!$.hrq())w.addEventListener("connectionstatechange",A.hD(new B.cuK(x)))
w.addEventListener("negotiationneeded",A.hD(new B.cuL(x)))
w.addEventListener("track",A.hD(new B.cuM(x)))},
ani(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ani=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.em(s.createAnswer(A.kz(A.cy(A.S(y.N,y.z)))),y.aQ),$async$ani)
case 3:t=f
v=new B.Z0(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ani,w)},
a9r(d,e){return this.bsP(0,e)},
bsP(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.em(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9r)
case 2:return A.h(null,w)}})
return A.i($async$a9r,w)},
a9z(d,e){return this.bt9(0,e)},
bt9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.em(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9z)
case 2:return A.h(null,w)}})
return A.i($async$a9z,w)},
arG(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$arG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Z0(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$arG,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.ae7.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a_X.prototype={
R(){return new B.aC8()},
gd6(){return this.c}}
B.aC8.prototype={
a_(){this.a3()
this.ag0()},
ag0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2l(u.e,u.c),$async$ag0)
case 2:t=e
if(v.c!=null)v.l(new B.dfy(v,t))
return A.h(null,w)}})
return A.i($async$ag0,w)},
Rz(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.arF(t.e,t.c,!1),$async$Rz)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fz8)
x=1
break}x=4
return A.b(B.a8L(u.a.c,"individual"),$async$Rz)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a7N(A.eb(new B.dfv(u),!1,null,y.H)),$async$Rz)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Rz,w)},
Kf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Kf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fIE(o),$async$Kf)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8P(o.e,r,s,q),$async$Kf)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fw7)
x=1
break}x=5
return A.b(B.a8L(u.a.c,"member"),$async$Kf)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a7N(A.eb(new B.dfx(u),!1,null,y.H)),$async$Kf)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Kf,w)},
yU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a8K(t.e,o,t.f,t.r,t.w,s),$async$yU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a8L(u.a.c,"org_owner"),$async$yU)
case 4:x=5
return A.b(B.arK(u.a.c),$async$yU)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fJ8(o),$async$yU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a8N(s,t,o,q.c),$async$yU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fw3)
x=1
break}x=10
return A.b(B.arK(u.a.c),$async$yU)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a7N(A.eb(new B.dfw(u),!1,null,y.H)),$async$yU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yU,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nP:I.qQ,p=B.hhC(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.aC.j(0.35),C.h1,24)],y.V)
u=y.p
v=A.p(s,A.x(A.a([A.p(s,D.fTv,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.hm,s,s,s),C.aA,D.hcN,C.R,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.cdY,C.m),s,s,s,s,C.eJ,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lP(new B.dfA(),s),C.M,v,C.ec,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.ak,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeB(C.f4,C.aFC,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gclD(),s),C.af],u))
w.push(new B.aeB(C.pZ,C.a6j,"Team Member","Sign in with your organization access code + password",t.gcmx(),s))
w.push(C.af)
w.push(new B.aeB(C.arx,C.a7X,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcm1(),s))
return A.c5(s,q,A.bo(!0,A.ca(A.x(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeB.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eJ(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a5,C.a9,C.x,x,s,s),C.m),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.c(t.e,s,s,s,s,s,s,C.ma,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(V.zT,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aEO.prototype={}
B.aI0.prototype={}
B.jS.prototype={
mQ(d){var x=this.b,w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aY(x,w+1).toLowerCase())},
gasm(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a5(x/1024,1)+" KB"
if(x<1073741824)return C.i.a5(x/1048576,1)+" MB"
return C.i.a5(x/1073741824,2)+" GB"},
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
bh1(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cRD(d){return this.bh1(null,d)},
aHd(d){return this.bh1(d,null)}}
B.WB.prototype={
R(){return new B.aGa(new A.cz(null,y.A))},
gd6(){return this.c}}
B.aGa.prototype={
a_(){this.a3()
this.ag1()},
ag1(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cz(u.a.c),$async$ag1)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e1S(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ag1,w)},
ag2(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ag2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fM(new A.fB(s)),$async$ag2)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fA3)
case 1:return A.h(v,w)}})
return A.i($async$ag2,w)},
a0g(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0g=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aqK(s.d,4),$async$a0g)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0g)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0g,w)},
ajZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ajZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abU("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ajZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajZ,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nP:I.qQ,m=o?C.c:C.a_,l=A.eV(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lq
else if(q.e==null)x=A.at(new A.D(C.eJ,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.aC.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.E,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.M,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,M.Jj,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ak,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a5,C.a9,C.x,w,p,p),C.m),p,p,p,p,Q.ao3,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.aC.j(0.2),C.dt,24)],y.V)
s=q.e
s.toString
r=A.ca(A.x(A.a([x,C.nr,w,C.lj,new A.e6(A.p(p,A.qs(p,p,!1,B.i4a(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lj,A.A(A.a([A.E(A.ep(K.DW,p,C.Xb,q.gcdP(),p),1),C.ar,A.E(A.db(C.Aj,p,C.adh,q.gcdQ(),A.bp(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.R,new A.a5(1/0,p,A.ep(O.a56,p,D.h8h,q.gcBK(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,A_.aoF,p,p,C.ah)
x=r}return A.c5(l,n,x,p,!1,!1,p,p)}}
B.WF.prototype={
R(){return new B.aGd(new A.au(C.ax,$.az()),A.ko(!0,null,!0,!0,null,null,!1))}}
B.aGd.prototype={
a_(){var x,w
this.a3()
x=this.a.e
w=B.Jx(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
a0h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jx(u.d.a.a)
if(t==null){u.l(new B.e30(u))
x=1
break}u.l(new B.e31(u))
s=u.a
r=s.c
x=3
return A.b(B.a8J(s.d,new B.e32(u),t,r),$async$a0h)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e33(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0h,w)},
a3E(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a3E=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cv(r.a.d)){x=1
break}r.l(new B.e34(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.t6(r.a.c,q),$async$a3E)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e35(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ajG(p,m,l,j,k),$async$a3E)
case 8:o=e
if(r.c!=null)r.l(new B.e36(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e37(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e38(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3E,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.ak2:D.ahw,h=j?D.alQ:C.c,g=j?C.aS:C.a_,f=j?C.bP:C.an,e=j?D.aj0:C.bn
i=[i,e,h,g,f,j?C.fz:C.bS]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eV(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.du(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.du(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.z,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c0Q,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.m),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.fa,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.E,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,M.Jj,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.v9(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bmK()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bC(k,k,k,C.Pg,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e39(l),k,!1,k,k,!1,k,!0,k,C.ae,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mK,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.E,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.E7(l.a.d,4)
m=A.B(new A.O(m,new B.e3a(x,new A.aJg(i)),m.$ti.k("O<aj.E,w>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lw,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.M,e,C.M,q,C.dh,p,C.M,A.p(k,A.x(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fuA)
else q.push(A.V(C.kM,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aO,A.cV(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j1,k,k,k,k,C.eY,k,k,k)],r))}e=A.E(A.ca(A.x(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJ9,k,k,C.ah),1)
u=l.f?k:l.gcBL()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ep(O.a56,k,D.h9o,u,A.dk(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cp,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcdR()
t=A.bp(C.aC,k,k,0,C.c,k,C.nX,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c5(g,h,new A.an(C.a0,k,C.ad,C.t,A.a([f,v,A.bo(!0,A.lz(new B.e3b(),A.x(A.a([e,new A.D(D.bID,A.x(A.a([s,C.M,i,C.af,A.bI(l.f?C.ul:D.h7D,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.co,C.a1l,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bmK.prototype={
pe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fl(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hw(C.bD,v.length),C.aP)}}
B.WC.prototype={
R(){return new B.aGb()}}
B.aGb.prototype={
a_(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.az()
u.d!==$&&A.aS()
u.d=new A.au(new A.bd(w,C.b6,C.aP),v)
x=x.d
u.e!==$&&A.aS()
u.e=new A.au(new A.bd(x,C.b6,C.aP),v)
u.f!==$&&A.aS()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.az()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a2()},
ag3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ag3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e1T(r))
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
return A.b(B.a8O(p,m,n,o,C.a.i(l).length===0?null:l),$async$ag3)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fzF)
s=[1]
x=4
break}p.K(y.q).f.T(D.fyg)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e1U(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ag3,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nP:I.qQ,q=A.eV(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h_V,s,s,s,1,s,!0),p=A.p(s,D.bAC,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.IW,C.m),s,s,s,s,C.ae,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8h,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8c,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c8s,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ae,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gcdS()
u=A.bp(C.aC,s,s,s,s,C.hr,s,s,s,s,s,s)
return A.c5(q,r,A.ca(A.x(A.a([p,C.dh,o,C.af,x,C.af,w,C.nr,A.bI(t.r?C.ul:C.aZI,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ae,s,s,C.ah),s,!1,!1,s,s)}}
B.adP.prototype={}
B.bzJ.prototype={
a6v(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cb(r.a8d()))
x=3
return A.b(B.SH(t,s),$async$a6v)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
gd6(){return this.a}}
B.OD.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a_W.prototype={
R(){return new B.aC7(new A.au(C.ax,$.az()),A.ko(!0,null,!0,!0,null,null,!1))}}
B.aC7.prototype={
a_(){this.a3()
$.aU.U$.push(new B.dfu(this))},
t(){var x=this.d
x.V$=$.az()
x.W$=0
this.e.t()
this.a2()},
cdY(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a31(d),u=x.a.c,t=u?C.iV:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nP:v.a[0],p=A.m(24),o=A.K(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.aC.j(u?0.25:0.12),C.h1,32)],n),l=A.p(w,Z.aug,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.aC.j(0.4),C.cz,16)],n),C.av6,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.E,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.v9(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bzl()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bC(w,w,w,C.D7,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8d),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dfs(x),w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mK,w,w,w,w)
f=f[1]
h=y.p
return A.eH(w,C.L,new A.cS(U.MU,new A.bQ(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.D(C.x7,A.x(A.a([l,C.aO,k,C.M,j,C.ec,i,C.ec,A.A(A.a([A.E(A.dY(C.op,new B.dft(d),A.dk(w,w,w,w,w,w,w,w,w,s,w,w,C.cp,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bQ(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.aC.j(0.35),C.cO,12)],n),N.Rk,C.m),C.bm,A.aG(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eDm,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcdX(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.N,0,C.p),w),w),w),w,w,w,C.Po,w,C.dc,w,w,w)}}
B.bzl.prototype={
pe(d,e){return e.anc(e.a.toUpperCase())}}
B.WD.prototype={
R(){return new B.aGc(A.a([],y.r),A.aQ(y.N))},
gd6(){return this.c}}
B.aGc.prototype={
a_(){var x=this
x.a3()
x.uu()
x.w=A.d0(C.jV,new B.e2Z(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WM()
this.a2()},
a2u(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OC(u.a.c),$async$a2u)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bu(u.a.c),$async$a2u)
case 4:u.l(new s.e2m(u,e))
u.iq("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2u,w)},
uu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OC(u.a.c),$async$uu)
case 3:t=e
x=4
return A.b(B.Bu(u.a.c),$async$uu)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e2n(u,s))
if(t>0)u.iq("Received "+A.v(t)+" file(s) via My Code.")
u.OH(u.d)
B.Cz(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uu,w)},
OH(d){return this.bI0(d)},
bI0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8T(r,u.a.c),$async$OH)
case 8:p=f
if(u.c==null){x=1
break}new B.e1W(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mQ(D.nl))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WK(r,u.a.c),$async$OH)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bu(u.a.c),$async$OH)
case 12:u.l(new o.e1X(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OH,w)},
P6(d){return this.bOr(d)},
bOr(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$P6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8T(d,u.a.c),$async$P6)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e21(u,d,t))
x=6
return A.b(A.fM(new A.fB(t)),$async$P6)
case 6:u.iq("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fM(new A.fB(r.toUpperCase())),$async$P6)
case 7:u.iq("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$P6,w)},
iq(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
uv(d,e){return this.cMU(d,e)},
cMU(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e2N(r,e))
u=3
x=6
return A.b(d.$0(),$async$uv)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e2O(r))
$.eW.mJ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uv,w)},
gaZ0(){var x=this.a
return x.f||x.r||x.w},
J1(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$J1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZ0()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cgj(s,n,r,q,o,t),$async$J1)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iq("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fWh(o,u.a.c),$async$J1)
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
return A.b(B.E0(s,o,r,q,n,t),$async$J1)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$J1,w)},
a1w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.arK(u.a.c),$async$a1w)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iq("No organization portal found.")
x=1
break}t=J.a2(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a7(t,!1).cb(A.eb(new B.e2j(u,r,q),!1,null,y.H)),$async$a1w)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1w,w)},
a2E(d){return this.cv7(d)},
cv6(){return this.a2E(1)},
cv7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a2E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZ0()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.arH(u.a.c),$async$a2E)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a2E,w)},
adT(d,e,f){return this.c4u(d,e,f)},
c4u(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$adT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq(e)
x=1
break}x=3
return A.b(u.uv(new B.e2g(u,d,null,e,f),"Uploading\u2026"),$async$adT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$adT,w)},
bI9(){B.hOQ(!1,new B.e2_(this))
return},
cAh(){this.l(new B.e2r(this))},
aBD(){var x=0,w=A.j(y.H),v=this
var $async$aBD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bI9()
return A.h(null,w)}})
return A.i($async$aBD,w)},
adP(){var x=0,w=A.j(y.H),v=this
var $async$adP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e25(v),"Importing\u2026"),$async$adP)
case 2:return A.h(null,w)}})
return A.i($async$adP,w)},
TC(d){return this.cMc(d)},
cMc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mQ(D.nl)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cb(A.eb(new B.e2K(u,d),!1,null,y.H)),$async$TC)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mQ(D.To)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cb(A.eb(new B.e2L(u,d),!1,null,y.H)),$async$TC)
case 8:x=1
break
case 7:x=u.c5c(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cb(A.eb(new B.e2M(u,d),!1,null,y.H)),$async$TC)
case 11:x=1
break
case 10:u.iq("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TC,w)},
c5c(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cXT,C.a.aY(x,w+1).toLowerCase())},
ahH(d){return this.clH(d)},
clH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mQ(D.nl)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cb(A.eb(new B.e2h(u,d),!1,null,y.H)),$async$ahH)
case 5:x=1
break
case 4:u.l(new B.e2i(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ahH,w)},
SY(d){return this.cDe(d)},
cDe(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iq("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pP(t,s.c,s.f),$async$SY)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e2D(u,d),"Preparing QR\u2026"),$async$SY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SY,w)},
ako(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ako=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e2E(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e2F(q),s),s.k("M.E"))
if(r.length===0){u.iq("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.SY(r),$async$ako)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ako,w)},
akh(d){return this.cCM(d)},
cCM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a31(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2x(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akh)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TC(d)
break
case"qr":u.SY(A.a([d],y.r))
break
case"send_my_code":u.cml(A.a([d],y.r))
break
case"save":u.ajF(d)
break
case"delete":u.JX(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akh,w)},
YZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e22(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e23(q),s),s.k("M.E"))
if(r.length===0){u.iq("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pP(t,s.c,s.f),$async$YZ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uv(new B.e24(u,r),"Preparing file\u2026"),$async$YZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$YZ,w)},
aiN(d){return this.ctq(d)},
ctq(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aiN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hPT(d,!1),$async$aiN)
case 3:s=f
r=s==null
q=B.a8Q(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iq("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
ahN(){var x=0,w=A.j(y.H),v=this,u
var $async$ahN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h3O(u,v.a.c),$async$ahN)
case 2:return A.h(null,w)}})
return A.i($async$ahN,w)},
bI8(){B.hOQ(!1,new B.e1Z(this,null))
return},
Ke(d,e){return this.cmm(d,e)},
b4I(d){return this.Ke(null,d)},
cml(d){return this.Ke(d,null)},
cmm(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Ke=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e2k(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y1.cq().aq_(!0,C.a39,!1),$async$Ke)
case 10:r=g
if(r==null||J.cv(r.a)){x=1
break}x=11
return A.b(s.uv(new B.e2l(l,s,r),"Preparing\u2026"),$async$Ke)
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
return A.b(B.bI2(p,l,e,s.a.c),$async$Ke)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ke,w)},
Ji(d){return this.c4h(d)},
c4h(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ji=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i49(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b4I(t),$async$Ji)
case 8:x=6
break
case 7:u.iq("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iq("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uv(new B.e2e(u,d),"Receiving video\u2026"),$async$Ji)
case 11:x=1
break
case 10:x=12
return A.b(u.uv(new B.e2f(u,d),"Receiving\u2026"),$async$Ji)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ji,w)},
F6(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$F6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DV()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aiN(t),$async$F6)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ji(s),$async$F6)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cb(A.eb(new B.e2p(u),!1,null,y.N)),$async$F6)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uu(),$async$F6)
case 10:x=1
break
case 9:x=11
return A.b(u.Ji(C.a.i(r)),$async$F6)
case 11:case 1:return A.h(v,w)}})
return A.i($async$F6,w)},
ajF(d){return this.cyM(d)},
cyM(d){var x=0,w=A.j(y.H),v=this
var $async$ajF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uv(new B.e2o(v,d),"Saving\u2026"),$async$ajF)
case 2:return A.h(null,w)}})
return A.i($async$ajF,w)},
JX(d){return this.bQO(d)},
bQO(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$JX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lC(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$JX)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cgm(t),$async$JX)
case 6:case 5:s=d.a
x=7
return A.b(B.FD(u.a.c,s),$async$JX)
case 7:u.r.X(0,s)
x=8
return A.b(u.uu(),$async$JX)
case 8:case 1:return A.h(v,w)}})
return A.i($async$JX,w)},
aku(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aku=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a31(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e2J(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aku)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ahN()
break
case"import":u.adP()
break}case 1:return A.h(v,w)}})
return A.i($async$aku,w)},
cdV(d){var x=d.c
if(C.a.Y(x,"video/")||d.mQ(D.nl))return C.rm
if(C.a.Y(x,"image/")||d.mQ(D.To))return C.vv
if(C.a.q(x,"pdf"))return T.IB
return D.arV},
B(d){var x,w,v=this,u=null,t=B.a31(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.IO,u,u,u,new B.e2U(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c1r,u,u,u,v.e?u:v.gcm2(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcAg()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bWv:E.asj,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a53,u,u,u,v.e?u:v.gcdW(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.p3,u,u,u,v.e?u:v.gb5P(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c3f,u,u,u,v.e?u:new B.e2V(v),u,u,u,u,"More options",u))
q=A.eV(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lP(new B.e2W(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.du(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.du(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.z,0.5,C.x,u,0,A.a([C.aC.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jE(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aC4(C.jG,s,!0,t,w?u:v.gcDf(),u),1)
x.push(new A.D(D.bHm,A.lz(new B.e2X(),A.A(A.a([s,C.ar,A.E(new B.aC4(C.tI,"Export",!1,t,w?u:v.gbUG(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.co,C.iN,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhd(t,v.e?u:v.gb5P(),u)
else s=A.kH(!0,u,u,new B.e2Y(v,t),s,u,D.bHd,u,u,!1,!1)
x.push(A.E(s,1))
return A.c5(q,r,new A.an(C.a0,u,C.ad,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aC4.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aC,t,t,0,C.c,t,C.tx,t,new A.b9(s,C.a1),t,t,t)
return A.db(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cd,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dk(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tx,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ep(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fi,t,t,t),u.r,v)}}
B.bhd.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.lz(new B.dfq(),new A.D(E.a2g,A.x(A.a([A.lz(new B.dfr(),A.p(x,A.V(C.zX,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ay,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ej,C.hx,x,x,new A.bq(0.86,1,w),s),C.ec,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.R,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ec,A.db(C.p3,x,D.hd6,this.d,A.bp(C.aC,x,x,x,C.c,x,C.Pm,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.N,0,C.p),x),C.co,C.CW,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ae8.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dx(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mQ(D.nl))p=D.dAm
else{p=C.a.Y(p,"image/")||i.mQ(D.To)
n=y.O
p=p?A.a([C.cY,C.aC],n):A.a([C.aN.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ay,C.aD,C.x,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.E,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasm()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mQ(D.nl))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h_,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cn))
if(!(!o||i.mQ(D.nl)))l.push(A.hfn(C.aC,!1,j,j,j,!1,j,j,new B.dfN(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.oZ,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cn))
return A.lz(new B.dfO(),new A.D(C.dU,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.D(C.a1J,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.co,h,new A.bf("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a_Y.prototype={
R(){return new B.aC9()},
gd6(){return this.c}}
B.aC9.prototype={
a_(){this.a3()
this.yH()},
t(){B.i4o(this.e)
this.a2()},
yH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t6(o.c,o.d),$async$yH)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i4r(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i4q(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dfK(s))
x=1
break}s.l(new B.dfL(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dfM(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yH,w)},
a3D(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a3D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t6(t.c,t.d),$async$a3D)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fwE)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ajG(q,s,t.length===0?"image/jpeg":t,null,s),$async$a3D)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a3D,w)},
c4a(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kX(u,C.z,v,new B.dfI(w,t),C.he,C.dI,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h5(t,C.z,v,new B.dfJ(w),C.he,C.dI,!0,v,!1,v,v)
else return C.bK
return A.vg(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a31(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.DY,u,u,u,v.gb9E(),u,u,u,u,"Share / save",u))
r=A.eV(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gm
else{q=v.r
if(q!=null)t=new A.D(C.eJ,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eJ,A.x(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.db(C.DY,u,D.fW_,v.gb9E(),A.bp(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.N,0,C.p),u)
t=p}else t=v.c4a()}return A.c5(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a_V.prototype={
R(){return new B.aC6(A.akE(),C.bH,C.bH)},
gd6(){return this.c}}
B.aC6.prototype={
a_(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fF(w,A.a3(w).k("fF<1>")).iF(new B.dfn(v))
x.gd_R().iF(new B.dfo(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fF(x,A.a3(x).k("fF<1>"))}if(x==null)x=C.beB
x.iF(new B.dfp(v))
v.yH()},
yH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t6(p.c,p.d),$async$yH)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dfg(s))
x=1
break}x=8
return A.b(s.d.vy(0,new A.a5f(r,s.a.d.c)),$async$yH)
case 8:if(s.c==null){x=1
break}s.l(new B.dfh(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dfi(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yH,w)},
a0i(){var x=0,w=A.j(y.H),v=this,u
var $async$a0i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0i)
case 5:x=3
break
case 4:x=6
return A.b(u.iJ(0),$async$a0i)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0i,w)},
aWR(d){var x=d.a
return C.a.b0(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.b0(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a31(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eV(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.E,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gm
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bXt,C.f,o,o,new A.o(o,o,o,A.m(24),o,N.Rk,C.m),o,88,o,o,o,o,o,88)
t=A.ld(C.aC,o,o,m,0,new B.dfj(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aWR(p.w)+" / "+p.aWR(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aC,o,o,o,o,D.ft2,o,o,o,o,o,o)
r=p.f
q=A.V(r?L.vy:C.fN,o,o,o,o,o)
x=A.x(A.a([u,C.lj,t,x,C.dh,A.db(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcdZ(),s)],y.p),C.l,o,C.e,C.N,0,C.p)}}return A.c5(v,w,A.at(new A.D(C.r7,x,o),o,o,o),o,!1,!1,o,o)}}
B.R0.prototype={
R(){return new B.aCc()},
gd6(){return this.c}}
B.aCc.prototype={
a_(){this.a3()
this.QQ()},
QQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$QQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hhD(o.c,o.d,new B.dg0(s)),$async$QQ)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dg1(s))
x=1
break}s.e=r
q=R.is3(r)
if(q==null){s.l(new B.dg2(s))
x=1
break}s.d=q
q.aU(0,s.gb4w())
x=8
return A.b(q.iV(0).de(0,C.nW),$async$QQ)
case 8:if(s.c==null){x=1
break}s.l(new B.dg3(s))
x=9
return A.b(q.qv(0),$async$QQ)
case 9:q.u4(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dg4(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QQ,w)},
ckf(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dg5(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.DS(0,x.gb4w())
w=x.d
if(w!=null)w.t()
B.iCj(x.e)
x.a2()},
ag6(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ag6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2t(u.c,u.d),$async$ag6)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ag6,w)},
B(d){var x,w,v,u=this,t=null,s=B.a31(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.E,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eV(A.a([A.aI(t,t,t,t,C.ob,t,t,t,u.gcdT(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iz(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gm
else{q=u.r
if(q!=null)s=new A.D(C.eJ,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ak4(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fL(x,new A.an(C.z,t,C.ad,C.t,A.a([new A.B_(s,t),A.aA(t,A.xL(A.p(t,A.V(q?L.vy:C.fN,C.c,t,t,t,48),C.f,t,t,new A.o(C.b7,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dg7(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c5(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0_.prototype={
R(){return new B.aCa(new A.cz(null,y.A))}}
B.aCa.prototype={
gcMA(){var x,w,v=this.a
if(v.e!==D.UN)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcMa(){var x,w,v=this.a
if(v.e!==D.AW)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.Y(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a3()
x=v.gcMA()
if(x!=null){v.S_(x)
v.e=A.d0(X.CY,new B.dfX(v,x))}w=v.gcMa()
if(w!=null){v.RZ(w)
v.f=A.d0(C.fv,new B.dfY(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
RZ(d){return this.crA(d)},
crA(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.arP(d),$async$RZ)
case 3:t=f
x=4
return A.b(B.cgF(d),$async$RZ)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dfP(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$RZ,w)},
S_(d){return this.crB(d)},
crB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h4x(d),$async$S_)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bFO(t),$async$S_)
case 4:if(u.c==null){x=1
break}u.l(new B.dfQ(u))
u.c.K(y.q).f.T(D.aWr)
case 1:return A.h(v,w)}})
return A.i($async$S_,w)},
gc9G(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcdU(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3n(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DV()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fzP)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cb(A.eb(new B.dfR(),!1,null,y.N)),$async$a3n)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bFO(s),$async$a3n)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWr)
case 1:return A.h(v,w)}})
return A.i($async$a3n,w)},
abH(d){return this.bOs(d)},
bOs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fM(new A.fB(C.d.aL(t,", "))),$async$abH)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$abH,w)},
ag4(d){return this.bOa(d)},
bOa(d){var x=0,w=A.j(y.H),v=this
var $async$ag4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fM(new A.fB(v.a.c)),$async$ag4)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fx7)
return A.h(null,w)}})
return A.i($async$ag4,w)},
a3h(d){return this.cyO(d)},
cyO(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aqK(s.d,4),$async$a3h)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3h)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.K(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3h,w)},
gb_g(){var x,w=this.a
if(w.e!==D.K1)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
abE(d){return this.bOl(d)},
bOl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$abE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_g()
if(t==null){x=1
break}x=3
return A.b(A.fM(new A.fB(C.a.Y(t,"http")?t:"N2|"+t)),$async$abE)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fyO)
case 1:return A.h(v,w)}})
return A.i($async$abE,w)},
ag5(){var x=0,w=A.j(y.H),v=this,u
var $async$ag5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WM(),$async$ag5)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ag5,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a31(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aw(h,0,44)+"\u2026"
i=i.e
i=i!==D.K1&&i!==D.UN&&i!==D.AW
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eV(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.K1||t===D.UN||t===D.AW?l:A.aI(l,l,l,l,C.lA,l,l,l,m.gb2o(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.M,A.qs(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.c(""+q.d+" file(s) \xb7 "+m.gc9G(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.K1){t=C.aC.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.M,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lX,l,l,l)],p))}q.push(C.aO)
q.push(A.c(m.gcdU(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.R,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c7k,D.h4N,new B.dfS(m,d),l)],p))}if(m.a.e===D.K1&&m.gb_g()!=null)C.d.u(q,A.a([C.R,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hv(D.c3B,D.h1k,new B.dfT(m,d),l)],p))
if(m.a.e===D.AW){x=(m.w?C.dR:C.aC).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.M,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gq:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lX,l,l,l)],p))}if(m.a.e===D.UN){x=(m.r?C.dR:C.aC).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.M,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gq:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.E,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lX,l,l,l),C.af,A.db(D.bZY,l,D.h7X,m.gcza(),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.p9(i,A.c5(v,w,new A.D(C.ae,A.x(A.a([A.E(A.p(l,A.x(q,C.l,l,C.ba,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ae,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ep(K.DW,l,C.Xb,new B.dfU(m,d),l),1),C.ar,A.E(A.db(C.Aj,l,C.adh,new B.dfV(m,d),A.bp(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.M,new A.a5(1/0,l,A.bI(W.BA,l,m.gb2o(),A.bp(C.aN,l,l,l,l,C.hr,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dfW(),y.C)}}
B.ae6.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.ca(A.x(A.a([w,C.aO,A.p(x,A.qs(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bF,x,x,x)],u),C.l,x,C.e,C.N,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.eh(A.a([A.bI(C.BB,x,new B.dff(d),x)],u),x,x,C.nF,v,x,x,x,x,D.fUX,x)}}
B.a_U.prototype={
R(){return new B.aC5(A.A8(C.zc,C.ow,C.vK))}}
B.aC5.prototype={
t(){this.d.t()
this.a2()},
aA7(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).N(t)
return}}},
B(d){var x=null
return A.c5(A.eV(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h1S,x,x,x,1,x,!0),C.v,A.A7(this.d,C.bY,this.gaA6()),x,!1,!1,x,x)}}
B.a00.prototype={
R(){return new B.aCb(A.A8(C.zc,C.ow,C.vK))},
gd6(){return this.c}}
B.aCb.prototype={
c5e(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ai9(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ai9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N1("text/plain"),$async$ai9)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fzJ)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ai9,w)},
acv(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hPT(p,!0),$async$acv)
case 3:t=e
p=t==null
s=B.a8Q(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fwe)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acv,w)},
t(){this.d.t()
this.a2()},
aA7(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c5e(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.atl,v,v,v,w.gbU9(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5a,v,v,v,w.gcoT(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eV(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.rg:S.Qx,v,v,v,v,v),v,v,v,new B.dg_(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.h8T,v,v,v,1,v,!0)
u=A.A7(w.d,C.bY,w.gaA6())
x=A.m(20)
return A.c5(t,C.v,new A.an(C.a0,v,C.ad,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aN,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eJE],s),v),v,!1,!1,v,v)}}
B.bhe.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pJ
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pJ:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.E,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.D(C.a2m,A.A(A.a([u,C.bc,A.E(A.x(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eM,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abh.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PK.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Z_.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PJ.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.G8.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cuD.prototype={}
B.G7.prototype={}
B.abg.prototype={}
B.awo.prototype={}
B.Z0.prototype={}
var z=a.updateTypes(["ay<~>()","P(jS)","n(jS)","WD(Z)","~()","a_X(Z)","F(F,jS)","R0(Z)","~(lH)","cn(G7)","ay<jS?>(@)","WB(Z)","WF(Z)","D(jS)","jS(@)","a9<n,@>(jS)","a_W(Z)","WC(Z)","a_Y(Z)","a_V(Z)","a0_(Z)","ae6(Z)","ai<jS>()","a00(Z)","ae8(Z,F)","a_U(Z)","a9<n,aE>(jS)","cn(Z_)","cn(abg)","ay<cn>(G7)"])
B.cuz.prototype={
$1(d){var x=this.a
x.x=D.aT8
x.y.I(0,D.aT8)},
$S:74}
B.cuA.prototype={
$1(d){var x=this.a
x.x=D.aT7
x.y.I(0,D.aT7)},
$S:74}
B.cuB.prototype={
$1(d){var x=this.a
x.ajx(A.aio(d.data)).bE(new B.cuy(x),y.b)},
$S:74}
B.cuy.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cuC.prototype={
$1(d){},
$S:74}
B.cuF.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i9j(d.channel))},
$S:18}
B.cuG.prototype={
$1(d){},
$S:18}
B.cuH.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.itd(w.iceConnectionState)
x.cx=w
if($.hrq())switch(w.a){case 0:x.cy=D.aTd
break
case 1:x.cy=D.aTe
break
case 3:x.cy=D.aTf
break
case 5:x.cy=D.aTb
break
case 6:x.cy=D.aTc
break
case 7:x.cy=D.aaT
break
default:break}},
$S:106}
B.cuI.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.ite(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:106}
B.cuJ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iDS(w.signalingState)},
$S:106}
B.cuK.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iC0(w.connectionState)},
$S:106}
B.cuL.prototype={
$1(d){},
$S:106}
B.cuM.prototype={
$1(d){},
$S:18}
B.fE1.prototype={
$1(d){var x=y.F.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wX.q(x.objectStoreNames,"blobs")
if(!w)C.wU.GD(x,"blobs")},
$S:170}
B.h3C.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xA.fv(this.b)
$.eW.mJ()
this.c.$1(d)},
$S:449}
B.h3E.prototype={
$1(d){return this.a.$1(B.iiG(this.b,this.c))},
$S:33}
B.h3D.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h3B.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h3R.prototype={
$1(d){var x=this
return B.hDX(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h3S.prototype={
$1(d){var x=this
return B.hDX(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fGI.prototype={
$1(d){var x=this
return B.cgg(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dfy.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dfv.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgg(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dfx.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgg(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dfw.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgg(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dfA.prototype={
$4(d,e,f,g){var x=null
return A.kd(A.A(A.a([A.aI(x,x,x,x,D.bYz,x,x,x,new B.dfz(d),x,x,x,x,x,x),A.E(A.FU(D.T6,!0,x,!1,C.a4d,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.T6,x,g,C.aoZ,0,e,f)},
$C:"$4",
$R:4,
$S:411}
B.dfz.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fIH.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f1,y.m).w,t=this.a,s=t?C.iV:C.c,r=A.m(28),q=A.p(v,D.bAW,C.f,v,v,D.b9S,v,v,v,v,D.aoL,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c22,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.D9,A.x(A.a([o,C.af,A.aN(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bC(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.atB,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ae,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.by,A.A(A.a([A.E(A.dY(C.dw,new B.fIF(d),v),1),C.ar,A.E(A.bI(D.h0i,v,new B.fIG(p,x,d),A.bp(C.b5,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HB,v,v,v,v),v)},
$S:63}
B.fIF.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fIG.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fxo)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aEO(v,x))},
$S:0}
B.fJa.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f1,y.m).w,u=x.a,t=u?C.iV:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bAM,C.f,w,w,D.bbm,w,w,w,w,D.aoL,w,w,1/0),new A.D(C.D9,A.x(A.a([A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hn1(u,"Organization name",C.Ia,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hn1(u,"Access code",C.mv,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hn1(u,"Member password",C.DV,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ae,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.by,A.bI(D.h9_,w,new B.fJ9(r,q,p,d),A.bp(C.aC,w,w,w,w,C.hr,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HB,w,w,w,w),w)},
$S:63}
B.fJ9.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fxt)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aI0(u,x,w))},
$S:0}
B.cg7.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a2(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.w6(p,null).de(0,C.a1k),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cb(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CA(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.cgd.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cge.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgf.prototype={
$1(d){return d.b},
$S:z+2}
B.cg9.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cga.prototype={
$1(d){return d.b},
$S:z+2}
B.cg8.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.cgb.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgc.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h3P.prototype={
$1(d){return new B.WB(this.a,null)},
$S:z+11}
B.h3Q.prototype={
$1(d){return new B.WF(this.a,this.b,this.c,null)},
$S:z+12}
B.e1S.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e30.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e31.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e32.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e3_(x,d))},
$S:2}
B.e3_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e33.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e34.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e35.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e36.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e37.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e38.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e3b.prototype={
$3(d,e,f){return A.d4(A.dT(f,new A.r(0,(1-e)*14)),e)},
$S:96}
B.e39.prototype={
$1(d){var x=this.a
return x.f?null:x.a0h()},
$S:2}
B.e3a.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mQ(D.To))s=C.vv
else s=C.a.Y(s,"video/")||d.mQ(D.nl)?C.rm:D.arV
x=this.b.a
w=y.p
return new A.D(C.jX,A.A(A.a([A.p(v,A.V(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.x(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasm(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e1T.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e1U.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cgh.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:94}
B.cgi.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:94}
B.h4Q.prototype={
$2(d,e){return e===this.a},
$S:246}
B.fB_.prototype={
$1(d){return J.k(d)},
$S:15}
B.fGU.prototype={
$1(d){var x=this.b
B.igB(C.HZ.ga87(this.a)).bE(x.gCr(x),y.H)},
$S:129}
B.fGV.prototype={
$1(d){return this.a.dg(0,null)},
$S:129}
B.fGW.prototype={
$0(){return null},
$S:12}
B.cgw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fGX.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.W(Date.now(),0,!1).ab().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jS(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fLe.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fF5.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fF6.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cgB.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nl)},
$S:z+1}
B.h95.prototype={
$1(d){return new B.a_W(this.a,null)},
$S:z+16}
B.dfu.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.h_()},
$S:7}
B.dfs.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dft.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e2Z.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2u()},
$S:10}
B.e2m.prototype={
$0(){var x=J.bJ8(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e2n.prototype={
$0(){var x=J.bJ8(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e1W.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e1V(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHd(this.c)}},
$S:0}
B.e1V.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e1X.prototype={
$0(){var x=J.bJ8(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e21.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e20(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHd(this.c)}},
$S:0}
B.e20.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2N.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e2O.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e2j.prototype={
$1(d){return new B.WC(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e2g.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.J1(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WG(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uu(),$async$$0)
case 5:s=J.a2(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a2E(s.gJ(t)),$async$$0)
case 8:case 7:r.iq(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2_.prototype={
$1(d){this.a.adT(d,"No files selected.","Added")},
$S:449}
B.e2r.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e2q(),A.U(x).k("O<1,n>")))},
$S:0}
B.e2q.prototype={
$1(d){return d.a},
$S:z+2}
B.e25.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y1.cq().d1Q(C.a39,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jX(o,0,null)}u=2
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
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iq("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.arO(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cv(l)){o.iq("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uu(),$async$$0)
case 9:o.iq("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e2K.prototype={
$1(d){return new B.R0(this.a.a.c,this.b,null)},
$S:z+7}
B.e2L.prototype={
$1(d){return new B.a_Y(this.a.a.c,this.b,null)},
$S:z+18}
B.e2M.prototype={
$1(d){return new B.a_V(this.a.a.c,this.b,null)},
$S:z+19}
B.e2h.prototype={
$1(d){return new B.R0(this.a.a.c,this.b,null)},
$S:z+7}
B.e2i.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2D.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.J1(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8S(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iq("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cv6(),$async$$0)
case 5:x=6
return A.b(p.uu(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e2z(p),r),new B.e2A(),r.k("O<aj.E,n>")).c0(0,new B.e2B())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cb(A.eb(new B.e2C(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pO(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WM(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2z.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e2y(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e2y.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e2A.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e2B.prototype={
$1(d){return d.length!==0},
$S:3}
B.e2C.prototype={
$1(d){var x=this.a
return new B.a0_(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e2E.prototype={
$1(d){return d.a},
$S:z+2}
B.e2F.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e2x.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasm(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mQ(D.nl)?C.tM:C.o9
p=!x||p.mQ(D.nl)?"Play video":"View"
return new A.bQ(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.ln,v,v,C.m),C.bm,A.bo(!0,new A.D(C.D5,A.x(A.a([q,o,t,C.aA,B.a_Z(!1,u,!1,w,p,new B.e2s(d),v),B.a_Z(!1,u,!1,C.jG,"Share via QR",new B.e2t(d),"Letters/numbers QR code"),B.a_Z(!1,u,!1,D.a4i,"Send to their Code",new B.e2u(d),"Enter someone else's personal code"),B.a_Z(!1,u,!1,C.hO,"Download / save",new B.e2v(d),v),C.ak,B.a_Z(!1,u,!0,C.eq,"Delete",new B.e2w(d),v)],y.p),C.am,v,C.e,C.N,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:699}
B.e2s.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e2t.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e2u.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e2v.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e2w.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e22.prototype={
$1(d){return d.a},
$S:z+2}
B.e23.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e24.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8U(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HA(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pO(s.c,s.f),$async$$0)
case 4:u.iq(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e1Z.prototype={
$1(d){var x=this.a
x.uv(new B.e1Y(x,d,this.b),"Preparing\u2026")},
$S:449}
B.e1Y.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iq("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WG(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cv(s)){t.iq("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bI2(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iq("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2k.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e2l.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aR(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hhG(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2e.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hy(new B.e2a(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iq("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cd(null,null,!1,null,new B.e2b(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e2c(s))
case 5:x=8
return A.b(r.b.ic(0,C.Hu,new B.e2d()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a2(t)
if(q.gar(t)){s.iq("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uu(),$async$$0)
case 9:s.iq("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2a.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e27(x,d,e))},
$S:210}
B.e27.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e2b.prototype={
$1(d){return new B.ae6(this.a.a,null)},
$S:z+21}
B.e2c.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e2d.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e2f.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jx(o)!=null?3:4
break
case 3:x=5
return A.b(B.a8I(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b4I(B.Jx(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.arO(new B.e28(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cv(r)){if(B.hhF(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iq(q)
x=1
break}x=10
return A.b(s.uu(),$async$$0)
case 10:o=J.cI(r)
p=o.eS(r,new B.e29()).gJ(0)
s.iq(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e28.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e26(x,d,e))},
$S:210}
B.e26.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e29.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nl)},
$S:z+1}
B.e2p.prototype={
$1(d){return new B.a00(this.a.a.c,null)},
$S:z+23}
B.e2o.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b2t(u.a.c,v.b),$async$$0)
case 2:t.iq(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e2J.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bQ(new A.o(v[2],x,new A.bE(new A.ax(C.aC.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.ln,x,x,C.m),C.bm,A.bo(!0,new A.D(C.D5,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kJ,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.a_Z(!0,w,!1,C.mv,"My Code",new B.e2G(d),"Your personal code & QR \u2014 others send docs to you"),B.a_Z(!1,w,!1,D.a4i,"Send to their Code",new B.e2H(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_Z(!1,w,!1,Y.Ab,"Import backup",new B.e2I(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.N,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:699}
B.e2G.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e2H.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bI8()},
$S:0}
B.e2I.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e2W.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JH(D.T6,x,C.a4d,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cZ(C.d.gG(D.T6).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:653}
B.e2U.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e2V.prototype={
$0(){this.a.aku()
return null},
$S:0}
B.e2X.prototype={
$3(d,e,f){return A.d4(A.dT(f,new A.r(0,(1-e)*10)),e)},
$S:96}
B.e2Y.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.ae8(e,w,v,this.b,x.e,x.cdV(w),new B.e2Q(x,w),new B.e2R(x,v,w),new B.e2S(x,w),new B.e2T(x,w),null)},
$S:z+24}
B.e2Q.prototype={
$0(){this.a.ahH(this.b)
return null},
$S:0}
B.e2R.prototype={
$0(){var x=this.a
return x.l(new B.e2P(x,this.b,this.c))},
$S:0}
B.e2P.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e2S.prototype={
$0(){this.a.P6(this.b)
return null},
$S:0}
B.e2T.prototype={
$0(){this.a.akh(this.b)
return null},
$S:0}
B.dfq.prototype={
$3(d,e,f){return A.d4(A.dT(f,new A.r(0,(1-e)*18)),e)},
$S:96}
B.dfr.prototype={
$3(d,e,f){return A.e9(C.z,f,e,null,null)},
$S:116}
B.dfO.prototype={
$3(d,e,f){return A.d4(A.dT(f,new A.r(0,(1-e)*14)),e)},
$S:96}
B.dfN.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.dfK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dfL.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dfM.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dfI.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h5(w,C.z,x,new B.dfG(this.a),C.he,C.dI,!0,x,!1,x,x)
$.aU.U$.push(new B.dfH(this.a))
return C.bK},
$S:139}
B.dfG.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfE(this.a))
return C.bK},
$S:184}
B.dfE.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfB(x))},
$S:7}
B.dfB.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfH.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfD(x))},
$S:7}
B.dfD.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfJ.prototype={
$3(d,e,f){$.aU.U$.push(new B.dfF(this.a))
return C.bK},
$S:184}
B.dfF.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dfC(x))},
$S:7}
B.dfC.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dfn.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfm(x,d))},
$S:1745}
B.dfm.prototype={
$0(){return this.a.f=this.b===C.w5},
$S:0}
B.dfo.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfl(x,d))},
$S:7}
B.dfl.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dfp.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dfk(x,d))},
$S:7}
B.dfk.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dfg.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dfh.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dfi.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dfj.prototype={
$1(d){return this.a.d.O1(0,A.dx(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dg0.prototype={
$0(){var x=this.a.a
return B.t6(x.c,x.d)},
$S:1746}
B.dg1.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dg2.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dg3.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dg4.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dg5.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dg7.prototype={
$0(){var x=this.a
x.l(new B.dg6(x))},
$S:0}
B.dg6.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qv(0)},
$S:0}
B.dfX.prototype={
$1(d){return this.a.S_(this.b)},
$S:10}
B.dfY.prototype={
$1(d){return this.a.RZ(this.b)},
$S:10}
B.dfP.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dfQ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dfR.prototype={
$1(d){return D.hKS},
$S:z+25}
B.dfW.prototype={
$2(d,e){if(d)B.WM()},
$S:127}
B.dfS.prototype={
$0(){return this.a.abH(this.b)},
$S:0}
B.dfT.prototype={
$0(){return this.a.abE(this.b)},
$S:0}
B.dfU.prototype={
$0(){return this.a.ag4(this.b)},
$S:0}
B.dfV.prototype={
$0(){return this.a.a3h(this.b)},
$S:0}
B.dff.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dg_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qy(),$async$$0)
case 2:u.l(new B.dfZ(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dfZ.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cgD.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mQ(D.nl)},
$S:z+1}
B.cgE.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cgC.prototype={
$2(d,e){return this.boA(d,e)},
boA(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WN(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1747}
B.fKR.prototype={
$1(d){if(d===D.aaS&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fKS.prototype={
$0(){},
$S:12}
B.fLs.prototype={
bqb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fy0(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hyY(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqb(d,e)},
$S:546}
B.fLr.prototype={
$1(d){var x=this
d.b=new B.fLq(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fLq.prototype={
$1(d){return this.bqa(d)},
bqa(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b2u(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.U.aP(0,n,null)
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
return A.b(B.fy0(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a6(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
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
return A.b(B.a8R(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dg(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aC8.prototype,"gclD","Rz",0)
x(v,"gcmx","Kf",0)
x(v,"gcm1","yU",0)
x(v=B.aGa.prototype,"gcdP","ag2",0)
x(v,"gcdQ","a0g",0)
x(v,"gcBK","ajZ",0)
x(v=B.aGd.prototype,"gcdR","a0h",0)
x(v,"gcBL","a3E",0)
x(B.aGb.prototype,"gcdS","ag3",0)
x(B.aC7.prototype,"gcdX","cdY",4)
x(v=B.aGc.prototype,"gcm2","a1w",0)
x(v,"gcAg","cAh",4)
x(v,"gb5P","aBD",0)
x(v,"gcDf","ako",0)
x(v,"gbUG","YZ",0)
x(v,"gcdW","F6",0)
x(B.aC9.prototype,"gb9E","a3D",0)
x(B.aC6.prototype,"gcdZ","a0i",0)
x(v=B.aCc.prototype,"gb4w","ckf",4)
x(v,"gcdT","ag6",0)
x(v=B.aCa.prototype,"gcza","a3n",0)
x(v,"gb2o","ag5",0)
w(B.aC5.prototype,"gaA6","aA7",8)
x(v=B.aCb.prototype,"gcoT","ai9",0)
x(v,"gbU9","acv",0)
w(v,"gaA6","aA7",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cuD,B.abg,B.awo,B.aEO,B.aI0,B.jS,B.adP,B.bzJ,B.G7,B.Z0])
w(B.cuE,B.cuD)
w(B.b7E,B.abg)
x(A.fR,[B.cuz,B.cuA,B.cuB,B.cuy,B.cuC,B.cuF,B.cuG,B.cuH,B.cuI,B.cuJ,B.cuK,B.cuL,B.cuM,B.fE1,B.h3C,B.h3E,B.h3D,B.h3R,B.h3S,B.fGI,B.dfv,B.dfx,B.dfw,B.dfA,B.fIH,B.fJa,B.cg7,B.cge,B.cgf,B.cga,B.cg8,B.cgb,B.cgc,B.h3P,B.h3Q,B.e32,B.e3b,B.e39,B.e3a,B.fB_,B.fGU,B.fGV,B.cgw,B.fGX,B.fLe,B.fF5,B.fF6,B.cgB,B.h95,B.dfu,B.dfs,B.e2Z,B.e1V,B.e20,B.e2j,B.e2_,B.e2q,B.e2K,B.e2L,B.e2M,B.e2h,B.e2z,B.e2y,B.e2A,B.e2B,B.e2C,B.e2E,B.e2F,B.e2x,B.e22,B.e23,B.e1Z,B.e2k,B.e2b,B.e29,B.e2p,B.e2J,B.e2W,B.e2X,B.dfq,B.dfr,B.dfO,B.dfN,B.dfI,B.dfG,B.dfE,B.dfH,B.dfJ,B.dfF,B.dfn,B.dfo,B.dfp,B.dfj,B.dfX,B.dfY,B.dfR,B.cgD,B.cgE,B.fKR,B.fLr,B.fLq])
w(B.b7F,B.awo)
x(A.hS,[B.h3B,B.dfy,B.dfz,B.fIF,B.fIG,B.fJ9,B.e1S,B.e30,B.e31,B.e3_,B.e33,B.e34,B.e35,B.e36,B.e37,B.e38,B.e1T,B.e1U,B.fGW,B.dft,B.e2m,B.e2n,B.e1W,B.e1X,B.e21,B.e2N,B.e2O,B.e2g,B.e2r,B.e25,B.e2i,B.e2D,B.e2s,B.e2t,B.e2u,B.e2v,B.e2w,B.e24,B.e1Y,B.e2l,B.e2e,B.e27,B.e2c,B.e2d,B.e2f,B.e26,B.e2o,B.e2G,B.e2H,B.e2I,B.e2U,B.e2V,B.e2Q,B.e2R,B.e2P,B.e2S,B.e2T,B.dfK,B.dfL,B.dfM,B.dfB,B.dfD,B.dfC,B.dfm,B.dfl,B.dfk,B.dfg,B.dfh,B.dfi,B.dg0,B.dg1,B.dg2,B.dg3,B.dg4,B.dg5,B.dg7,B.dg6,B.dfP,B.dfQ,B.dfS,B.dfT,B.dfU,B.dfV,B.dff,B.dg_,B.dfZ,B.fKS])
x(A.kQ,[B.ae7,B.OD,B.abh,B.PK,B.Z_,B.PJ,B.G8])
x(A.af,[B.a_X,B.WB,B.WF,B.WC,B.a_W,B.WD,B.a_Y,B.a_V,B.R0,B.a0_,B.a_U,B.a00])
x(A.ah,[B.aC8,B.aGa,B.aGd,B.aGb,B.aC7,B.aGc,B.aC9,B.aC6,B.aCc,B.aCa,B.aC5,B.aCb])
x(A.aw,[B.aeB,B.aC4,B.bhd,B.ae8,B.ae6,B.bhe])
x(A.ie,[B.cgd,B.cg9,B.cgh,B.cgi,B.h4Q,B.e2a,B.e28,B.e2Y,B.dfW,B.cgC,B.fLs])
x(A.jl,[B.bmK,B.bzl])})()
A.i0(b.typeUniverse,JSON.parse('{"b7E":{"abg":[]},"b7F":{"awo":[]},"a_X":{"af":[],"w":[]},"aC8":{"ah":["a_X"]},"aeB":{"aw":[],"w":[]},"WB":{"af":[],"w":[]},"WF":{"af":[],"w":[]},"aGa":{"ah":["WB"]},"aGd":{"ah":["WF"]},"bmK":{"jl":[]},"WC":{"af":[],"w":[]},"aGb":{"ah":["WC"]},"a_W":{"af":[],"w":[]},"WD":{"af":[],"w":[]},"ae8":{"aw":[],"w":[]},"a_Y":{"af":[],"w":[]},"a_V":{"af":[],"w":[]},"R0":{"af":[],"w":[]},"a0_":{"af":[],"w":[]},"ae6":{"aw":[],"w":[]},"a_U":{"af":[],"w":[]},"a00":{"af":[],"w":[]},"aC7":{"ah":["a_W"]},"bzl":{"jl":[]},"aGc":{"ah":["WD"]},"aC4":{"aw":[],"w":[]},"bhd":{"aw":[],"w":[]},"aC9":{"ah":["a_Y"]},"aC6":{"ah":["a_V"]},"aCc":{"ah":["R0"]},"aCa":{"ah":["a0_"]},"aC5":{"ah":["a_U"]},"aCb":{"ah":["a00"]},"bhe":{"aw":[],"w":[]}}'))
var y=(function rtii(){var x=A.ar
return{J:x("mA"),k:x("N_()"),o:x("bl<n,n>"),F:x("qV"),g:x("ay<jS?>"),x:x("ay<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bm>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jS>"),w:x("N<+file,name(m9,n)>"),u:x("N<cZ>"),s:x("N<n>"),E:x("N<jl>"),a:x("N<dC>"),p:x("N<w>"),Z:x("N<F>"),G:x("bm"),A:x("cz<ah<af>>"),n:x("ai<jS>"),j:x("ai<@>"),I:x("ai<F>"),M:x("bv<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("hW"),e:x("iHX"),af:x("Fk"),U:x("jS"),b:x("cn"),C:x("aE"),aK:x("wT"),ab:x("G7"),br:x("awo"),v:x("Z0"),N:x("n"),X:x("bq<G>"),Q:x("lX"),D:x("dC"),aw:x("bf<n>"),cd:x("X<a9<n,@>>"),c7:x("w"),ch:x("c7<ai<jS>>"),aW:x("c7<dC?>"),aY:x("c7<~>"),cx:x("ae7"),b1:x("bn<ai<jS>>"),cf:x("bn<dC?>"),d4:x("bn<~>"),c4:x("aEO"),bG:x("aI0"),q:x("ky"),B:x("q4<G7>"),c6:x("q4<abh>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bm?"),_:x("ai<jS>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jS?"),R:x("aE?"),c:x("Z0?"),d:x("+answerQr,transfer(n,ay<ai<jS>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,F)?"),L:x("+fileCount,mode,qrPayload(F,OD,n)?"),aX:x("+fileCount,qrPayload,token(F,n,n)?"),T:x("n?"),K:x("dC?"),cm:x("adP?"),bk:x("aEO?"),ag:x("aI0?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8d=new A.ax(C.aC,2,C.r,-1)
D.cc0=new A.a8(C.a5,C.a9,C.x,C.a6j,null,null)
D.b9S=new A.o(null,null,null,C.mT,null,D.cc0,C.m)
D.bbm=new A.o(null,null,null,C.mT,null,E.IW,C.m)
D.ahw=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.aj0=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.ak2=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.alQ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fVS=new A.C("Your team portal",null,C.du,null,null,null,null,null,null,null,null,null)
D.h9Y=new A.C("Share the access code and member password with your team. They only sign in once.",null,H.FA,null,null,null,null,null,null,null,null,null)
D.dqR=x([D.fVS,C.ak,D.h9Y],y.p)
D.bAC=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dqR,null)
D.hew=new A.C("Create your organization",null,C.fP,null,null,null,null,null,null,null,null,null)
D.h_u=new A.C("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FA,null,null,null,null,null,null,null,null,null)
D.dJ3=x([D.hew,C.ak,D.h_u],y.p)
D.bAM=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dJ3,null)
D.haC=new A.C("Team Member sign-in",null,C.fP,null,null,null,null,null,null,null,null,null)
D.h3u=new A.C("Enter the access code and password from your organization.",null,H.FA,null,null,null,null,null,null,null,null,null)
D.dGC=x([D.haC,C.ak,D.h3u],y.p)
D.bAW=new A.ft(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dGC,null)
D.bHd=new A.R(16,10,16,28)
D.bHm=new A.R(16,14,16,4)
D.bID=new A.R(20,0,20,16)
D.bJ9=new A.R(20,8,20,16)
D.aoL=new A.R(24,22,24,20)
D.a4i=new A.a_(63394,"MaterialIcons",!1)
D.arV=new A.a_(63515,"MaterialIcons",!1)
D.bWv=new A.a_(983813,"MaterialIcons",!1)
D.bTD=new A.a_(62867,"MaterialIcons",!1)
D.bXt=new A.ae(D.bTD,44,C.c,null,null,null)
D.bYz=new A.ae(C.kk,null,C.ab,null,null,null)
D.bZY=new A.ae(C.jH,18,null,null,null,null)
D.c0Q=new A.ae(D.a4i,26,C.c,null,null,null)
D.c1r=new A.ae(C.DL,null,null,null,null,null)
D.c22=new A.ae(C.DS,null,null,null,null,null)
D.c3f=new A.ae(A1.a4t,null,null,null,null,null)
D.c3B=new A.ae(C.i1,16,null,null,null,null)
D.c7k=new A.ae(C.tL,16,null,null,null,null)
D.bXL=new A.ae(C.mv,null,null,null,null,null)
D.c8c=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bXL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c2A=new A.ae(C.Ia,null,null,null,null,null)
D.c8h=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c2A,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bY6=new A.ae(C.DV,null,null,null,null,null)
D.c8s=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bY6,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cYw=x([C.fz,C.b5,C.aC],y.O)
D.cdY=new A.a8(C.ay,C.aD,C.x,D.cYw,null,null)
D.cXT=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.T6=x([C.fz,C.aC],y.O)
D.To=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nl=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dAm=x([C.n2,C.aC],y.O)
D.evU={iceServers:0}
D.aND={urls:0}
D.dMZ=new A.bl(D.aND,["stun:stun.l.google.com:19302"],y.o)
D.dMY=new A.bl(D.aND,["stun:stun1.l.google.com:19302"],y.o)
D.dfv=x([D.dMZ,D.dMY],A.ar("N<a9<n,n>>"))
D.dM4=new A.bl(D.evU,[D.dfv],A.ar("bl<n,@>"))
D.K1=new B.OD(0,"lanDirect")
D.UM=new B.OD(1,"cloudStash")
D.dZX=new B.OD(2,"inlineInstant")
D.UN=new B.OD(3,"webrtcLink")
D.AW=new B.OD(4,"videoCloud")
D.h9X=new A.C("Receive file",null,C.nw,null,null,null,null,null,null,null,null,null)
D.cNr=x([E.atK,C.aa,D.h9X],y.p)
D.fnT=new A.c1(C.aK,C.ba,C.h,C.l,null,C.p,null,0,D.cNr,null)
D.eDm=new A.D(C.cp,D.fnT,null)
D.fM6=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A0.Jr,null,null,null)
D.fWu=new A.C("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fM6,null,C.K,null,null,null,null,null,null,null)
D.eCw=new A.D(C.zw,D.fWu,null)
D.bfX=new A.cm(C.z,null,null,D.eCw,null)
D.eJE=new A.cO(0,null,0,28,null,null,D.bfX,null)
D.eJY=new B.abh(0,"RTCDataChannelConnecting")
D.aT7=new B.abh(1,"RTCDataChannelOpen")
D.aT8=new B.abh(3,"RTCDataChannelClosed")
D.eJZ=new B.G8(0,"RTCIceConnectionStateNew")
D.eK_=new B.G8(1,"RTCIceConnectionStateChecking")
D.eK0=new B.G8(2,"RTCIceConnectionStateCompleted")
D.eK1=new B.G8(3,"RTCIceConnectionStateConnected")
D.eK2=new B.G8(4,"RTCIceConnectionStateCount")
D.eK3=new B.G8(5,"RTCIceConnectionStateFailed")
D.eK4=new B.G8(6,"RTCIceConnectionStateDisconnected")
D.aT9=new B.G8(7,"RTCIceConnectionStateClosed")
D.aTa=new B.Z_(0,"RTCIceGatheringStateNew")
D.eK5=new B.Z_(1,"RTCIceGatheringStateGathering")
D.aaS=new B.Z_(2,"RTCIceGatheringStateComplete")
D.aaT=new B.PJ(0,"RTCPeerConnectionStateClosed")
D.aTb=new B.PJ(1,"RTCPeerConnectionStateFailed")
D.aTc=new B.PJ(2,"RTCPeerConnectionStateDisconnected")
D.aTd=new B.PJ(3,"RTCPeerConnectionStateNew")
D.aTe=new B.PJ(4,"RTCPeerConnectionStateConnecting")
D.aTf=new B.PJ(5,"RTCPeerConnectionStateConnected")
D.eK6=new B.PK(0,"RTCSignalingStateStable")
D.eK7=new B.PK(1,"RTCSignalingStateHaveLocalOffer")
D.eK8=new B.PK(2,"RTCSignalingStateHaveRemoteOffer")
D.eK9=new B.PK(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eKa=new B.PK(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTg=new B.PK(5,"RTCSignalingStateClosed")
D.ft2=new A.av(160,48)
D.bhc=new A.fr(2,null,null,null,null,C.aC,null,null,null,null)
D.fuA=new A.a5(16,16,D.bhc,null)
D.fZP=new A.C("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fw3=new A.b2(D.fZP,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h6A=new A.C("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fw7=new A.b2(D.h6A,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hfA=new A.C("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fwe=new A.b2(D.hfA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fZo=new A.C("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fwE=new A.b2(D.fZo,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.haO=new A.C("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWr=new A.b2(D.haO,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hch=new A.C("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fx7=new A.b2(D.hch,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hh4=new A.C("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxo=new A.b2(D.hh4,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hf_=new A.C("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fxt=new A.b2(D.hf_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hgf=new A.C("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fyg=new A.b2(D.hgf,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fXZ=new A.C("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fyO=new A.b2(D.fXZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h8v=new A.C("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fz8=new A.b2(D.h8v,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h19=new A.C("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fzF=new A.b2(D.h19,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.hh9=new A.C("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fzJ=new A.b2(D.hh9,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYe=new A.C("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fzP=new A.b2(D.fYe,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWS=new A.C("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fA3=new A.b2(D.fWS,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fTv=new A.C("NGMY DOC SHARE",null,C.aXR,null,null,null,null,null,null,null,null,null)
D.fUX=new A.C("Show this to sender",null,C.iT,null,null,null,null,null,null,null,null,null)
D.fW_=new A.C("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h_V=new A.C("Organization settings",null,C.cJ,null,null,null,null,null,null,null,null,null)
D.h0i=new A.C("Sign in",null,C.cd,null,null,null,null,null,null,null,null,null)
D.h1k=new A.C("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h1S=new A.C("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h4N=new A.C("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.h7D=new A.C("Send to their Doc Share",null,C.mM,null,null,null,null,null,null,null,null,null)
D.h7X=new A.C("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h8h=new A.C("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.h8T=new A.C("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.h9_=new A.C("Create portal",null,C.cd,null,null,null,null,null,null,null,null,null)
D.h9o=new A.C("Share via AirDrop / Bluetooth / Nearby",null,C.fi,null,null,null,null,null,null,null,null,null)
D.hcN=new A.C("Share files & videos\nwith a scan.",null,C.aXU,null,null,null,null,null,null,null,null,null)
D.hd6=new A.C("Add files",null,C.cd,null,null,null,null,null,null,null,null,null)
D.hKS=new B.a_U(null)
D.aej=new B.ae7(0,"docShare")
D.aek=new B.ae7(1,"gate")
D.XP=new B.ae7(2,"gateNoIndividual")})();(function staticFields(){$.aQR=null
$.fvx=function(){var x=y.N
return A.S(x,x)}()
$.Hm=A.S(y.N,y.D)
$.aic=A.S(y.N,A.ar("m9"))
$.Ss=A.S(y.N,y.D)
$.fwd=A.S(y.N,A.ar("adP"))
$.cgv=A.S(y.S,A.ar("bzJ"))
$.hyX=1
$.ioP=null
$.ioO=null
$.ifU=null
$.hnd=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iIr","hRU",()=>new B.cuE())
x($,"iGl","hrq",()=>C.a.q(A.bw(A.bw(A.bw(A.HS(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["szVNSrez1R6xYaUiNw7KI9UNQDI="]=a.current})($__dart_deferred_initializers__);