((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cwi:function cwi(){},
ig7(d){var x=null,w=new B.b8X(d,D.eRY,new A.q9(x,x,y.c6),new A.q9(x,x,y.B))
w.bFP(d)
return w},
b8X:function b8X(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cwd:function cwd(d){this.a=d},
cwe:function cwe(d){this.a=d},
cwf:function cwf(d){this.a=d},
cwc:function cwc(d){this.a=d},
cwg:function cwg(d){this.a=d},
ig8(d,e){var x=y.N
x=new B.b8Y(d,e,A.S(x,y.e),A.S(x,y.z))
x.bFQ(d,e)
return x},
b8Y:function b8Y(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cwj:function cwj(d){this.a=d},
cwk:function cwk(d){this.a=d},
cwl:function cwl(d){this.a=d},
cwm:function cwm(d){this.a=d},
cwn:function cwn(d){this.a=d},
cwo:function cwo(d){this.a=d},
cwp:function cwp(d){this.a=d},
cwq:function cwq(d){this.a=d},
hsU(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xK.HT(x,"ngmy_doc_share_v1",new B.fIL(),1)},
in_(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eD(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w9(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aL(d)
return x}catch(w){return v}return v},
T6(d,e){return B.iDD(d,e)},
iDD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T6=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRY
x=7
return A.b(o==null?$.aRY=B.hsU():o,$async$T6)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mI(s,"blobs","readwrite")
C.iW.mw(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$T6)
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
return A.i($async$T6,w)},
T5(d){return B.iDC(d)},
iDC(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRY
x=7
return A.b(o==null?$.aRY=B.hsU():o,$async$T5)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iW.yq(J.mG(r,"blobs"),d),$async$T5)
case 8:q=f
x=9
return A.b(J.oY(r),$async$T5)
case 9:o=B.in_(q)
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
return A.i($async$T5,w)},
ajz(d){return B.iDB(d)},
iDB(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRY
x=7
return A.b(p==null?$.aRY=B.hsU():p,$async$ajz)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iW.Hn(J.mG(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$ajz)
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
return A.i($async$ajz,w)},
fIL:function fIL(){},
ipJ(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bu3(w,v))}return u},
hVv(d,e){var x,w={},v=A.b_P("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h9p(w,v,e)
C.xM.xn(v,"change",new B.h9r(w,v,!1))
C.xM.xn(v,"cancel",new B.h9q(w))
$.eY.mY()
v.click()
A.bM(C.anL,new B.h9o(w),y.H)},
h9p:function h9p(d,e,f){this.a=d
this.b=e
this.c=f},
h9r:function h9r(d,e,f){this.a=d
this.b=e
this.c=f},
h9q:function h9q(d){this.a=d},
h9o:function h9o(d){this.a=d},
Ed(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ed=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVR()?3:4
break
case 3:x=5
return A.b(B.hPQ(e,d,s,!0,!1,f,g,h,!1,i),$async$Ed)
case 5:x=1
break
case 4:x=6
return A.b(B.SJ(d,s,f,g,h,i),$async$Ed)
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
return A.b(B.JR(s,d),$async$Ed)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fE1(s,d),$async$Ed)
case 14:x=12
return A.b(r.hPQ(q,p,o,n,m,l,k,j,a1,i),$async$Ed)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e4(new B.h9E(s,i,d,f,g,h),!1,null,y.H)),$async$Ed)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e4(new B.h9F(s,i,d,f,g,h),!1,null,y.H)),$async$Ed)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ed,w)},
SJ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SJ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3E(e),$async$SJ)
case 3:u=k
x=4
return A.b(B.asv(d,e,!1),$async$SJ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JR(e,d),$async$SJ)
case 7:if(k){v=D.af5
x=1
break}x=8
return A.b(B.X2(e),$async$SJ)
case 8:v=t?D.Yp:D.af6
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b3C(d,e)){v=D.af5
x=1
break}x=11
return A.b(B.X2(e),$async$SJ)
case 11:v=t?D.Yp:D.af6
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hnx(d,e)){v=D.af5
x=1
break}x=14
return A.b(B.X2(e),$async$SJ)
case 14:v=D.Yp
x=1
break
case 13:v=t?D.Yp:D.af6
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SJ,w)},
fE1(d,e){var x=0,w=A.j(y.y),v
var $async$fE1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b3C(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3E(d),$async$fE1)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fE1,w)},
hPQ(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e4(new B.fLr(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hK6(d,e,f,g,h,i,j){return new B.a0s(e,j,d,g,h,i,f,null)},
fNq(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fNq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bU(C.L,null,new B.fNt(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fNq)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fNq,w)},
fNV(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fNV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bU(C.L,null,new B.fNX(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fNV)
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
return A.i($async$fNV,w)},
ht6(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b5(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h0M(d,e){var x=0,w=A.j(y.H),v
var $async$h0M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.X2(e),$async$h0M)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).dY()
case 1:return A.h(v,w)}})
return A.i($async$h0M,w)},
h9E:function h9E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h9F:function h9F(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeK:function aeK(d,e){this.a=d
this.b=e},
fLr:function fLr(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0s:function a0s(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aD1:function aD1(){this.c=this.a=this.d=null},
di6:function di6(d,e){this.a=d
this.b=e},
di3:function di3(d){this.a=d},
di5:function di5(d){this.a=d},
di4:function di4(d){this.a=d},
di8:function di8(){},
di7:function di7(d){this.a=d},
afd:function afd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFI:function aFI(d,e){this.a=d
this.b=e},
aIZ:function aIZ(d,e,f){this.a=d
this.b=e
this.c=f},
fNt:function fNt(d,e,f){this.a=d
this.b=e
this.c=f},
fNr:function fNr(d){this.a=d},
fNs:function fNs(d,e,f){this.a=d
this.b=e
this.c=f},
fNX:function fNX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNW:function fNW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chE(d,e,f,g,h){return B.iaO(d,e,f,g,h)},
iaO(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$chE=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a0(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hd(r.dS(d,new B.chF(s,e,h,g,f,q),y.g),y.l),$async$chE)
case 3:r=p.aN(j)
case 4:if(!r.A()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chE,w)},
b3z(d,e,f,g,h){return B.iaP(d,e,f,g,h)},
iaP(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b3z=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ay3("GET",d)
o=A.bK5()
if(o==null)o=new A.Is(A.a([],y.W))
x=7
return A.b(o.fi(0,s).d9(0,C.HN),$async$b3z)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DT(),$async$b3z)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CJ(q,h,o,e,f,"Received via QR")
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
return A.i($async$b3z,w)},
b3y(d){return B.iaM(d)},
iaM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b3y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wl(d,null).d9(0,C.p_),$async$b3y)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.T.aN(0,A.ma(A.m7(p.e)).cJ(0,p.w),null)
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
return A.i($async$b3y,w)},
chD(d){return B.iaN(d)},
iaN(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$chD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wl(d,null).d9(0,C.rk),$async$chD)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ma(A.m7(q.e)).cJ(0,q.w)
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
return A.i($async$chD,w)},
chF:function chF(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jW:function jW(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JP(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
iaU(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JP(C.a.aV(t,u.length))}return null},
iaV(d){var x=B.JP(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
iaQ(){var x,w=$.oh(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hp(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a9f(d){return B.iaR(d)},
iaR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a9f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a9f)
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
return A.i($async$a9f,w)},
a9g(d,e){return B.iaS(d,e)},
iaS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a9g=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i2(d,e,!1,!1,C.cZ,null),$async$a9g)
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
return A.i($async$a9g,w)},
CI(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CI)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JP(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9h(r),$async$CI)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a9f("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CI)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JP(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CI)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.iaQ()
x=14
return A.b(B.a9h(m),$async$CI)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a9g("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CI)
case 15:k=f
x=16
return A.b(B.a9g("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CI)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CI)
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
return A.i($async$CI,w)},
a9h(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JP(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a9f("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9h)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
a9i(d,e,f,g){return B.iaW(d,e,f,g)},
iaW(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a9i=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a0(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JP(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9h(r),$async$a9i)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.chL())>1048576||g.aR(d,new B.chM())){v=B.FQ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9t("myCode",d,a0),$async$a9i)
case 4:u=a3
try{t=C.T.aN(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ch(s)||J.aa(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FQ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3H(u,g.gI(d),a0),$async$a9i)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.chN(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b3A(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a9i)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9i,w)},
FQ(d,e,f,g,h){return B.iaT(d,e,f,g,h)},
iaT(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FQ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FQ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cH(a6,0,new B.chH())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oh().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.A()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aD(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JT(a9,q)
a0=new A.LI(a1)
u=6
case 9:x=11
return A.b(a0.A(),$async$FQ)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.aa(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f6().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nW(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acW(a1.a,a4,"media",a1.d,a2).yn(m,n,new A.F5(!0,q.c)),$async$FQ)
case 12:J.bW(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FQ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUM(r),$async$FQ)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.chI(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b3A(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FQ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUM(r),$async$FQ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FQ,w)},
b3A(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b3A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a9f(t),$async$b3A)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.chG(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a9g(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3A,w)},
OY(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OY=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a9f("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OY)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ch(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aN(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.A()){x=5
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
return A.b(B.b3B(k,a0),$async$OY)
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
return A.b(B.b3G(h),$async$OY)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.X9(g,a0),$async$OY)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.aa(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.chJ(),q),n)
d=A.B(new A.X(r,new B.chK(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cI(d,0,A.dy(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a9g("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OY)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OY,w)},
b3B(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b3B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ch(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aN(h),r=y.f,q=0
case 3:if(!u.A()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a0(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.h.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iI_(k,j)
C.d.u(s,i)
x=5
return A.b(B.Eb(l,m,"Received via My Code",t,e,i),$async$b3B)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUM(s),$async$b3B)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3B,w)},
chL:function chL(){},
chM:function chM(){},
chN:function chN(){},
chH:function chH(){},
chI:function chI(){},
chG:function chG(){},
chJ:function chJ(){},
chK:function chK(){},
h9B(d,e){var x=0,w=A.j(y.H)
var $async$h9B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e4(new B.h9C(e),!1,null,y.H)),$async$h9B)
case 2:return A.h(null,w)}})
return A.i($async$h9B,w)},
bJz(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e4(new B.h9D(g,e,f),!1,null,y.y)),$async$bJz)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJz,w)},
h9C:function h9C(d){this.a=d},
h9D:function h9D(d,e,f){this.a=d
this.b=e
this.c=f},
X_:function X_(d,e){this.c=d
this.a=e},
aH6:function aH6(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e4U:function e4U(d,e){this.a=d
this.b=e},
X3:function X3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aH9:function aH9(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e62:function e62(d){this.a=d},
e63:function e63(d){this.a=d},
e64:function e64(d){this.a=d},
e61:function e61(d,e){this.a=d
this.b=e},
e65:function e65(d){this.a=d},
e66:function e66(d){this.a=d},
e67:function e67(d,e){this.a=d
this.b=e},
e68:function e68(d,e){this.a=d
this.b=e},
e69:function e69(d,e){this.a=d
this.b=e},
e6a:function e6a(d){this.a=d},
e6d:function e6d(){},
e6b:function e6b(d){this.a=d},
e6c:function e6c(d,e){this.a=d
this.b=e},
bo5:function bo5(){},
X0:function X0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aH7:function aH7(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e4V:function e4V(d){this.a=d},
e4W:function e4W(d){this.a=d},
hny(d){var x=d.ig
if(x>=0)return C.n.L(x)
return 10},
iaY(d){var x=d.la
if(x>=0)return x
return 4.99},
iaX(d){var x=d.lX,w=y.N
w=x.j5(x,new B.chP(),w,w)
return w},
hF3(d){var x=d.kM,w=y.N
w=x.j5(x,new B.chQ(),w,w)
return w},
b3E(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3E)
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
return A.i($async$b3E,w)},
a9k(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9k)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9k)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9k,w)},
X2(d){var x=0,w=A.j(y.H),v,u
var $async$X2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$X2)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$X2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
hnx(d,e){var x,w,v
if(B.iaY(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.iaX(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b3C(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hF3(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hF4(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.hF3(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bM(A.dw(f,0,0,0,0,0).a).aa().ag())
d.kM=w},
asw(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$asw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$asw)
case 7:s=f
r=A.v(p)
r=A.ev(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$asw,w)},
asx(d){var x=0,w=A.j(y.H),v,u,t
var $async$asx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.asw(d),$async$asx)
case 3:u=f
x=5
return A.b(A.aB(),$async$asx)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$asx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$asx,w)},
asv(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hny(d)
if(u<=0){v=!1
x=1
break}if(B.hnx(d,e)){v=!1
x=1
break}x=3
return A.b(B.asw(e),$async$asv)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asv,w)},
b3D(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JR(e,d),$async$b3D)
case 3:if(g){v=-1
x=1
break}u=B.hny(d)
if(u<=0){v=-1
x=1
break}if(B.hnx(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.asw(e),$async$b3D)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3D,w)},
chS(d,e,f){var x=0,w=A.j(y.y),v
var $async$chS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JR(e,d),$async$chS)
case 3:if(h){v=!1
x=1
break}v=B.asv(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chS,w)},
chR(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$chR=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.chS(d,u,i.gVR()),$async$chR)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chR,w)},
a9j(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9j=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gVR()){v=!0
x=1
break}if(B.b3C(d,u)){v=!0
x=1
break}x=5
return A.b(A.m_(u,C.VJ),$async$a9j)
case 5:x=k?3:4
break
case 3:B.hF4(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9j)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lz(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.VJ,"Doc Share for Organizations"),$async$a9j)
case 7:if(!k){v=!1
x=1
break}B.hF4(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9j)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9j,w)},
chP:function chP(){},
chQ:function chQ(){},
haB(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$haB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$haB)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fA2.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i4([r],e.c))
s.toString
$.fA2.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$haB,w)},
iKi(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fA2.bs($.fA2,new B.haD(d))},
haD:function haD(d){this.a=d},
fBP(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fBP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aD(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i4([d],f))
s.toString
u=A.np(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fBP)
case 3:C.C9.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mY()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBP,w)},
aiv(d,e,f){var x=0,w=A.j(y.H),v
var $async$aiv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fAN.n(0,d,new B.aer(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aiv)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.T.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aiv)
case 2:return A.h(null,w)}})
return A.i($async$aiv,w)},
aip(d){return B.irK(d)},
irK(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aip=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fAN.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aip)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.T.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b8(s,new B.fFI(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.L(o)
q=m==null?0:m
p=new B.aer(r)
$.fAN.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aip,w)},
Sz(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.HB.n(0,d,u)
x=3
return A.b(B.T6(d,u),$async$Sz)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sz,w)},
aSi(d){return B.irI(d)},
irI(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.HB.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T5(d),$async$aSi)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.HB.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aSi)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aL(r)
x=!J.ch(q)?9:10
break
case 9:B.Sz(d,q)
x=11
return A.b(J.fN(s,d),$async$aSi)
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
return A.i($async$aSi,w)},
int(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.cd(J.eD(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.cd(A.w9(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
return A.fc(null,y.K)},
a42(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a42=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cc(u,y.aW)
s=y.aK
A.fK(r,"loadend",new B.fLF(r,t),!1,s)
A.fK(r,"error",new B.fLG(t),!1,s)
r.readAsArrayBuffer(d)
v=u.im(0,C.Po,new B.fLH())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a42,w)},
aSD(d,e,f){return B.iua(d,e,f)},
iua(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSD=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a42(i),$async$aSD)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.aa(j)
x=11
return A.b(B.T6(o,p),$async$aSD)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bW(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.aiv(k,j,s),$async$aSD)
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
return A.i($async$aSD,w)},
aSC(d,e,f){return B.iu9(d,e,f)},
iu9(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSC=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSD(d,e,f),$async$aSC)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a42(f),$async$aSC)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.HB.n(0,s,r)
$.ST.n(0,s,r)
x=11
return A.b(B.Sz(s,r),$async$aSC)
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
return A.i($async$aSC,w)},
CJ(d,e,f,g,h,i){return B.ib6(d,e,f,g,h,i)},
ib6(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CJ=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jW(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3K(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sz(s,d),$async$CJ)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CJ)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aL(d)),$async$CJ)
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
return A.b(B.BD(e),$async$CJ)
case 12:j=a2
J.bW(j,m)
x=13
return A.b(B.HL(e,j),$async$CJ)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CJ,w)},
X4(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X4=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.BD(d),$async$X4)
case 3:t=a1
s=e.length,r=J.cK(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hF6(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jW(m,n,k,l,j,"From folder",null,B.b3K(),null)
$.aiU.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a42(o),$async$X4)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.HB.n(0,h,g)
$.ST.n(0,h,g)
B.Sz(h,g)
x=9
break
case 10:x=11
return A.b(B.aSC(d,m,o),$async$X4)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HL(d,t),$async$X4)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X4,w)},
hnC(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hnC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hF6(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JS(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CJ(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnC,w)},
JS(d,e,f,g,h,i){return B.ib5(d,e,f,g,h,i)},
ib5(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JS=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LI(A.dy(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.A(),$async$JS)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ch(m)){x=6
break}J.fM(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TH(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kB(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T6(k,l),$async$JS)
case 11:J.bW(q,k);++p
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
return A.b(j.a2(0),$async$JS)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T6(k,new Uint8Array(A.cd(n))),$async$JS)
case 15:J.bW(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aiv(r,q,g),$async$JS)
case 16:f=new B.jW(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3K(),null)
x=17
return A.b(B.BD(d),$async$JS)
case 17:e=a6
J.bW(e,f)
x=18
return A.b(B.HL(d,e),$async$JS)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JS,w)},
X6(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X6=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiU.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a42(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aip(s),$async$X6)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T5(u[o]),$async$X6)
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
case 5:i=$.ST.h(0,s)
if(i==null)i=$.HB.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.tg(d,e),$async$X6)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.ST.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w9(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X6,w)},
hF6(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
tg(d,e){return B.ib7(d,e)},
ib7(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$tg=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.ST.h(0,f)
if(e==null)e=$.HB.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiU.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a42(s),$async$tg)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.HB.n(0,f,r)
$.ST.n(0,f,r)
B.Sz(f,r)
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
return A.b(B.aip(f),$async$tg)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aen(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T5(g[l]),$async$tg)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a9g()
if(!C.aI.gar(r)){$.HB.n(0,f,r)
$.ST.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aSi(f),$async$tg)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.ST.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X6(a0,a1,0,g),$async$tg)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.HB.n(0,f,h)
$.ST.n(0,f,h)
B.Sz(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tg,w)},
iba(d){var x,w,v=$.aiU.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
ibb(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i4([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
ib8(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asD(d,e,f,g,h){return B.ib9(d,e,f,g,h)},
ib9(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asD=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiU.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a42(s),$async$asD)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.tg(g,e),$async$asD)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.f6().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iO(d).yn(h,r,new A.F5(!0,e.c)),$async$asD)
case 12:f.$2(J.aa(r),J.aa(r))
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
return A.i($async$asD,w)},
hF8(d,e,f,g,h){var x,w,v,u,t=$.hF7
$.hF7=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ci2.n(0,t,new B.bBc(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aen(u)))
return t},
hnD(d){var x=0,w=A.j(y.H)
var $async$hnD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hnD,w)},
JT(d,e){var $async$JT=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiU.h(0,h)
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
return A.qS(B.X6(d,e,p,o<q?o:q),$async$JT,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qS(A.H7(n),$async$JT,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qS(B.aip("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JT,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qS(B.T5(h[l]),$async$JT,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qS(A.H7(k),$async$JT,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qS(B.tg(d,e),$async$JT,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qS(A.H7(A.w9(j,p,o<i?o:i)),$async$JT,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qS(null,0,w)
case 2:return A.qS(t.at(-1),1,w)}})
var x=0,w=A.hOs($async$JT,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hQC(w)},
b3M(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3M=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ci2.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7y(),$async$b3M)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3M,w)},
X5(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ci2.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7y(),$async$X5)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aiv(r.c,u,r.z),$async$X5)
case 4:t=new B.jW(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3K(),null)
u=r.a
x=5
return A.b(B.BD(u),$async$X5)
case 5:s=f
J.bW(s,t)
x=6
return A.b(B.HL(u,s),$async$X5)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X5,w)},
a9q(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ci2.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajz(u[s]),$async$a9q)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9q,w)},
ci4(d,e,f){var x=0,w=A.j(y.H)
var $async$ci4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGm(d,e,f),$async$ci4)
case 2:return A.h(null,w)}})
return A.i($async$ci4,w)},
ci5(d,e,f){var x=0,w=A.j(y.H)
var $async$ci5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGn(d,e,f),$async$ci5)
case 2:return A.h(null,w)}})
return A.i($async$ci5,w)},
FR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.BD(d),$async$FR)
case 2:p=g
J.mH(p,new B.ci3(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.HB.X(0,v)
$.aiU.X(0,e)
x=3
return A.b(B.aip(v),$async$FR)
case 3:u=g
$.fAN.X(0,v)
x=4
return A.b(A.aB(),$async$FR)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FR)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FR)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajz(s[q]),$async$FR)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajz(v),$async$FR)
case 13:x=14
return A.b(B.HL(d,p),$async$FR)
case 14:return A.h(null,w)}})
return A.i($async$FR,w)},
b3L(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.tg(d,e),$async$b3L)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fBP(t,A.aD(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3L,w)},
BD(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$BD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$BD)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.T.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fLI(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$BD,w)},
HL(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HL)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fQ7(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.T.au(t,null)),$async$HL)
case 3:return A.h(null,w)}})
return A.i($async$HL,w)},
bGm(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BD(d),$async$bGm)
case 3:u=h
t=J.cK(u)
s=t.bm(u,new B.fJP(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aIH(f))
x=4
return A.b(B.HL(d,u),$async$bGm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGm,w)},
bGn(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BD(d),$async$bGn)
case 3:u=h
t=J.cK(u)
s=t.bm(u,new B.fJQ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cUf(f))
x=4
return A.b(B.HL(d,u),$async$bGn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGn,w)},
aer:function aer(d){this.a=d},
fFI:function fFI(){},
fLF:function fLF(d,e){this.a=d
this.b=e},
fLG:function fLG(d){this.a=d},
fLH:function fLH(){},
ci3:function ci3(d){this.a=d},
bBc:function bBc(d,e,f,g,h,i,j,k,l){var _=this
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
fLI:function fLI(){},
fQ7:function fQ7(){},
fJP:function fJP(d){this.a=d},
fJQ:function fJQ(d){this.a=d},
a9r(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.ci8())?3:4
break
case 3:x=5
return A.b(B.b3N(d,e),$async$a9r)
case 5:u=g
if(u!=null){t=u.c
B.P_(d,u.b,e,t)}v=u
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
return A.b(B.b3I(s),$async$a9r)
case 10:case 9:if(g){v=new A.RU(1,D.Vm,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X7(d,e),$async$a9r)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Xc(!0,!0,d,e),$async$a9r)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.P_(d,D.Bd,e,t)
v=new A.RU(p,D.Bd,t)
x=1
break}v=B.ci7(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9r,w)},
X7(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9t(null,d,e),$async$X7)
case 3:p=g
try{u=C.T.aN(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3H(p,d.length,e),$async$X7)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ci5(e,C.d.gH(d).a,r.b),$async$X7)
case 7:case 6:q=r.a
x=8
return A.b(B.P_(d,D.Vm,e,q),$async$X7)
case 8:v=new A.RU(d.length,D.Vm,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X7,w)},
X8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$X8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n4(D.nw)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9s(d,e),$async$X8)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ci0(s,d,e,t),$async$X8)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3I(t),$async$X8)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.tg(e,d),$async$X8)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X7(A.a([d],y.r),e),$async$X8)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X8,w)},
Xa(){var x=0,w=A.j(y.H)
var $async$Xa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hnw(),$async$Xa)
case 2:x=3
return A.b(B.aV7(),$async$Xa)
case 3:return A.h(null,w)}})
return A.i($async$Xa,w)},
a9s(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3K()
x=3
return A.b(B.ci4(e,d.a,u),$async$a9s)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9s,w)},
P_(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$P_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Vm&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9s(p,f),$async$P_)
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
return A.b(B.ci_(o,p,u,f),$async$P_)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ci0(o,p,f,t),$async$P_)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.chZ(o,u,p,f),$async$P_)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$P_,w)},
b3N(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ci6(e,d),$async$b3N)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Xc(!1,!0,d,e),$async$b3N)
case 4:u=g
if(u!=null){t=u.b
v=new A.RU(u.a,D.Bd,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3N,w)},
ci6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ci6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X6(d,s,0,1),$async$ci6)
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
return A.i($async$ci6,w)},
ci7(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ci7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9t(null,d,e),$async$ci7)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hF5(u)
if(t.length>800){v=null
x=1
break}v=new A.RU(d.length,D.e6K,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ci7,w)},
asE(d,e,f){return B.ibe(d,e,f)},
ibe(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asE=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dc(g,"\ufeff"))g=J.no(g,1)
x=B.hnB(g)?3:4
break
case 3:x=5
return A.b(B.ci1(g),$async$asE)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dc(g,"NGMYDOCSYNC4|")){s=C.a.i(J.no(g,13))
try{k=B.FS(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dc(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.no(g,13))
u=9
x=12
return A.b(B.b3G(q),$async$asE)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X9(p,a0)
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
case 11:case 7:if(J.dc(g,"NGMYDOCSYNC0|"))try{n=B.hnA(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X9(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dc(g,"N2|")){v=B.JU(C.a.i(J.no(g,3)),d,a0)
x=1
break}if(J.dc(g,"NGMYDOCSYNC2|")){v=B.JU(C.a.i(J.no(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c4(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JU(h,d,a0)
x=1
break}if(J.eI(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.X9(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asE,w)},
JU(d,e,f){return B.ibc(d,e,f)},
ibc(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JU=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aD(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c4(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aD(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b3y(r),$async$JU)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b3y(A.cH(s,0,null)),$async$JU)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.chE(o,r,a1,n,a2),$async$JU)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.chD(q),$async$JU)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.X9(l,a2),$async$JU)
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
return A.i($async$JU,w)},
a9t(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aN(e),t=y.N,s=y.z
case 3:if(!u.A()){x=4
break}r=u.gP(u)
x=5
return A.b(B.tg(f,r),$async$a9t)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aL(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.T.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9t,w)},
X9(d,e){return B.ibd(d,e)},
ibd(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X9=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.T.aN(0,a2,null)
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
e=J.aN(r)
case 7:if(!e.A()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cM.aL(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.CJ(i,a3,d,k,l,o),$async$X9)
case 9:h=a5
if(h!=null)J.bW(n,h)
x=7
break
case 8:f=J.aa(n)===0?null:n
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
return A.i($async$X9,w)},
OZ:function OZ(d,e){this.a=d
this.b=e},
ci8:function ci8(){},
a3C(d){var x=A.Q(d).ax.a===C.I,w=x?D.akV:D.aim,v=x?D.amL:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajS:C.bo
return new A.aKh([w,s,v,u,t,x?C.fz:C.bU])},
hWz(d,e){var x=e?C.v.j(0.72):C.ba
return A.cf(null,x,!0,null,new B.heY(e),d,null,!0,!0,y.N)},
chO(d,e,f,g,h,i,j,k,l){return new B.X1(e,l,d,f,k,j,g,h,i,null)},
a0u(d,e,f,g,h,i,j){return new B.biB(g,h,j,e,i,d,f,null)},
heY:function heY(d){this.a=d},
a0r:function a0r(d,e){this.c=d
this.a=e},
aD0:function aD0(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
di2:function di2(d){this.a=d},
di0:function di0(d){this.a=d},
di1:function di1(d){this.a=d},
bAO:function bAO(){},
X1:function X1(d,e,f,g,h,i,j,k,l,m){var _=this
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
aH8:function aH8(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e60:function e60(d){this.a=d},
e5o:function e5o(d,e){this.a=d
this.b=e},
e5p:function e5p(d,e){this.a=d
this.b=e},
e4Y:function e4Y(d,e,f){this.a=d
this.b=e
this.c=f},
e4X:function e4X(d){this.a=d},
e4Z:function e4Z(d,e){this.a=d
this.b=e},
e53:function e53(d,e,f){this.a=d
this.b=e
this.c=f},
e52:function e52(d){this.a=d},
e5P:function e5P(d,e){this.a=d
this.b=e},
e5Q:function e5Q(d){this.a=d},
e5l:function e5l(d,e,f){this.a=d
this.b=e
this.c=f},
e5i:function e5i(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e51:function e51(d){this.a=d},
e5t:function e5t(d){this.a=d},
e5s:function e5s(){},
e57:function e57(d){this.a=d},
e5M:function e5M(d,e){this.a=d
this.b=e},
e5N:function e5N(d,e){this.a=d
this.b=e},
e5O:function e5O(d,e){this.a=d
this.b=e},
e5j:function e5j(d,e){this.a=d
this.b=e},
e5k:function e5k(d,e){this.a=d
this.b=e},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5B:function e5B(d){this.a=d},
e5A:function e5A(d){this.a=d},
e5C:function e5C(){},
e5D:function e5D(){},
e5E:function e5E(d,e){this.a=d
this.b=e},
e5G:function e5G(){},
e5H:function e5H(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5u:function e5u(d){this.a=d},
e5v:function e5v(d){this.a=d},
e5w:function e5w(d){this.a=d},
e5x:function e5x(d){this.a=d},
e5y:function e5y(d){this.a=d},
e54:function e54(){},
e55:function e55(d){this.a=d},
e56:function e56(d,e){this.a=d
this.b=e},
e50:function e50(d,e){this.a=d
this.b=e},
e5_:function e5_(d,e,f){this.a=d
this.b=e
this.c=f},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d,e,f){this.a=d
this.b=e
this.c=f},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5c:function e5c(d){this.a=d},
e59:function e59(d,e,f){this.a=d
this.b=e
this.c=f},
e5d:function e5d(d){this.a=d},
e5e:function e5e(d){this.a=d},
e5f:function e5f(){},
e5h:function e5h(d,e){this.a=d
this.b=e},
e5a:function e5a(d){this.a=d},
e58:function e58(d,e,f){this.a=d
this.b=e
this.c=f},
e5b:function e5b(){},
e5r:function e5r(d){this.a=d},
e5q:function e5q(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e){this.a=d
this.b=e},
e5I:function e5I(d){this.a=d},
e5J:function e5J(d,e){this.a=d
this.b=e},
e5K:function e5K(d){this.a=d},
e5Y:function e5Y(d){this.a=d},
e5W:function e5W(d){this.a=d},
e5X:function e5X(d){this.a=d},
e5Z:function e5Z(){},
e6_:function e6_(d,e){this.a=d
this.b=e},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5T:function e5T(d,e,f){this.a=d
this.b=e
this.c=f},
e5R:function e5R(d,e,f){this.a=d
this.b=e
this.c=f},
e5U:function e5U(d,e){this.a=d
this.b=e},
e5V:function e5V(d,e){this.a=d
this.b=e},
aCY:function aCY(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
biA:function biA(d,e,f){this.c=d
this.d=e
this.a=f},
dhZ:function dhZ(){},
di_:function di_(){},
aeL:function aeL(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dim:function dim(){},
dil:function dil(d){this.a=d},
a0t:function a0t(d,e,f){this.c=d
this.d=e
this.a=f},
aD2:function aD2(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dii:function dii(d){this.a=d},
dij:function dij(d,e,f){this.a=d
this.b=e
this.c=f},
dik:function dik(d,e){this.a=d
this.b=e},
dig:function dig(d,e){this.a=d
this.b=e},
die:function die(d){this.a=d},
dic:function dic(d){this.a=d},
di9:function di9(d){this.a=d},
dif:function dif(d){this.a=d},
dib:function dib(d){this.a=d},
dih:function dih(d){this.a=d},
did:function did(d){this.a=d},
dia:function dia(d){this.a=d},
a0q:function a0q(d,e,f){this.c=d
this.d=e
this.a=f},
aD_:function aD_(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dhW:function dhW(d){this.a=d},
dhV:function dhV(d,e){this.a=d
this.b=e},
dhX:function dhX(d){this.a=d},
dhU:function dhU(d,e){this.a=d
this.b=e},
dhY:function dhY(d){this.a=d},
dhT:function dhT(d,e){this.a=d
this.b=e},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d,e){this.a=d
this.b=e},
dhS:function dhS(d){this.a=d},
Rr:function Rr(d,e,f){this.c=d
this.d=e
this.a=f},
aD5:function aD5(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
diz:function diz(d){this.a=d},
diA:function diA(d){this.a=d},
diB:function diB(d){this.a=d},
diC:function diC(d){this.a=d},
diD:function diD(d,e){this.a=d
this.b=e},
diE:function diE(d){this.a=d},
diG:function diG(d){this.a=d},
diF:function diF(d){this.a=d},
a0v:function a0v(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD3:function aD3(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
div:function div(d,e){this.a=d
this.b=e},
diw:function diw(d,e){this.a=d
this.b=e},
din:function din(d,e,f){this.a=d
this.b=e
this.c=f},
dio:function dio(d){this.a=d},
dip:function dip(){},
diu:function diu(){},
diq:function diq(d,e){this.a=d
this.b=e},
dir:function dir(d,e){this.a=d
this.b=e},
dis:function dis(d,e){this.a=d
this.b=e},
dit:function dit(d,e){this.a=d
this.b=e},
aeJ:function aeJ(d,e){this.c=d
this.a=e},
dhO:function dhO(d){this.a=d},
a0p:function a0p(d){this.a=d},
aCZ:function aCZ(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0w:function a0w(d,e){this.c=d
this.a=e},
aD4:function aD4(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
diy:function diy(d){this.a=d},
dix:function dix(d){this.a=d},
biB:function biB(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ibf(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hp(v)},
P0(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$P0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$P0)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$P0)
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
return A.i($async$P0,w)},
a9u(d){return B.ibg(d)},
ibg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9u=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9u)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$a9u)
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
return A.i($async$a9u,w)},
Xb(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Xb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P0(),$async$Xb)
case 3:s=g
r=J.a0(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a1(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9u(s),$async$Xb)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xb,w)},
Xc(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Xc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$Xc)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.cia(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.ibf()
t=A.T(u).k("O<1,a9<o,aH>>")
r=A.B(new A.O(u,new B.cib(s),t),t.k("aj.E"))
x=6
return A.b(B.P0(),$async$Xc)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9u(q),$async$Xc)
case 7:x=8
return A.b(B.a9v(r,u,g,s),$async$Xc)
case 8:v=new A.buB(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xc,w)},
asF(d){var x=0,w=A.j(y.y),v,u,t
var $async$asF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.P0(),$async$asF)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asF,w)},
cic(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cic=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.P0(),$async$cic)
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
return A.i($async$cic,w)},
a9v(d,e,f,g){return B.ibh(d,e,f,g)},
ibh(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9v=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.asD("media",r,new B.ci9(s,e,g),f,q),$async$a9v)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Xb(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9v)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Xb(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9v)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.Xb(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9v)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9v,w)},
FS(d,e,f){return B.ibi(d,e,f)},
ibi(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FS=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FS)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asF(b3),$async$FS)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FS)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asF(b3),$async$FS)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.P0(),$async$FS)
case 10:e=c0
g=J.a0(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a0(d)
a2=A.aK(a1.h(d,"usesRemaining"))
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
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a0(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.aa(m)===0){x=11
break}u=14
a8=$.f6().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nW(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acW(a8.a,b0,"media",a8.d,a9).Ed(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b3z(k,n,o,s,b7),$async$FS)
case 17:j=c0
if(j!=null){J.bW(p,j);++q
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
case 12:if(J.aa(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.X(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.A()){x=22
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.f6().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nW(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acW(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FS)
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
a0=A.dE(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9u(e),$async$FS)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FS,w)},
cia:function cia(){},
cib:function cib(d){this.a=d},
ci9:function ci9(d,e,f){this.a=d
this.b=e
this.c=f},
aV7(){var x=0,w=A.j(y.H),v,u
var $async$aV7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.imK=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aV7)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aV7)
case 3:u=$.htj
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aV7)
case 4:$.htj=$.iwb=$.iwc=null
return A.h(null,w)}})
return A.i($async$aV7,w)},
fPG(d){var x=0,w=A.j(y.H),v,u
var $async$fPG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abD){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fPH(new A.cc(u,y.aY))
x=3
return A.b(u.im(0,C.he,new B.fPI()),$async$fPG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fPG,w)},
iw7(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.ib_(x):x},
hto(d){var x=0,w=A.j(y.T),v,u,t
var $async$hto=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asH(u)
x=1
break}v=B.hnA(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hto,w)},
htn(d){var x=0,w=A.j(y.T),v,u,t
var $async$htn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asI(u)
x=1
break}v=B.hnA(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$htn,w)},
hak(d){var x=0,w=A.j(y.T),v
var $async$hak=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asI(d),$async$hak)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hak,w)},
bHk(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bHk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.htn(d),$async$bHk)
case 3:q=f
if(q==null){x=1
break}t=C.T.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a0(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHk,w)},
fCI(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fCI=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X5(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CJ(d.a9g(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCI,w)},
HM(d,e,f){return B.iyG(d,e,f)},
iyG(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HM=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hto(a1),$async$HM)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.T.aN(0,e,null)
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
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hYB().aJ_(D.dPP,null),$async$HM)
case 4:l=d.htj=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aen(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fQk(f,k,new B.fQl(f,a2,k,j,a0,p),a2,j,a0,p,new A.cc(t,y.ch))
x=5
return A.b(l.aaE(0,new B.Zq(r,"offer")),$async$HM)
case 5:d=l
x=7
return A.b(l.aoz(0),$async$HM)
case 7:x=6
return A.b(d.aaw(0,a4),$async$HM)
case 6:x=8
return A.b(B.fPG(l),$async$HM)
case 8:x=9
return A.b(l.asY(),$async$HM)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.iw7(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.T.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asJ(m,h),$async$HM)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hF5(h)
case 11:v=new A.btO(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HM,w)},
fPH:function fPH(d){this.a=d},
fPI:function fPI(){},
fQl:function fQl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQk:function fQk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fQj:function fQj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iAL(d){switch(d){case"new":return D.eRZ
case"checking":return D.eS_
case"connected":return D.eS1
case"completed":return D.eS0
case"failed":return D.eS3
case"disconnected":return D.eS4
case"closed":return D.aUw
case"count":return D.eS2}return D.aUw},
iAM(d){switch(d){case"new":return D.aUx
case"gathering":return D.eS5
case"complete":return D.abD}return D.aUx},
iLX(d){switch(d){case"stable":return D.eS6
case"have-local-offer":return D.eS7
case"have-local-pranswer":return D.eS9
case"have-remote-offer":return D.eS8
case"have-remote-pranswer":return D.eSa
case"closed":return D.aUD}return D.aUD},
iK_(d){switch(d){case"new":return D.aUA
case"connecting":return D.aUB
case"connected":return D.aUC
case"closed":return D.abE
case"disconnected":return D.aUz
case"failed":return D.aUy}return D.abE},
abT:function abT(d,e){this.a=d
this.b=e},
Qa:function Qa(d,e){this.a=d
this.b=e},
Zp:function Zp(d,e){this.a=d
this.b=e},
Q9:function Q9(d,e){this.a=d
this.b=e},
Gm:function Gm(d,e){this.a=d
this.b=e},
cwh:function cwh(){},
hpt(d){var x=new B.Gl()
x.a=d
x.b=!0
return x},
Gl:function Gl(){this.b=this.a=$},
abS:function abS(){},
axf:function axf(){},
Zq:function Zq(d,e){this.a=d
this.b=e},
hnw(){var x=0,w=A.j(y.H)
var $async$hnw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hnw,w)},
hnz(d,e,f){var x=0,w=A.j(y.T),v
var $async$hnz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n4(D.nw))){v=null
x=1
break}v=B.haB(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hnz,w)},
hF5(d){var x,w=F.ahN.a7h(C.e5.aL(d),null)
if(w.length===0){x=C.e5.aL(d)
return C.cS.gcp().aL(x)}return C.cS.gcp().aL(w)},
iaZ(d){var x,w,v=C.cM.aL(d)
try{x=C.ch.cJ(0,F.ahM.bjl(v,!1))
return x}catch(w){x=C.ch.cJ(0,v)
return x}},
hnA(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.iaZ(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.ch.cJ(0,C.cM.aL(x))
return v}catch(u){return x}}return null},
ib_(d){var x,w,v,u,t,s=A.a([],y.s)
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
ib0(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hp(v)},
b3F(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b3F)
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
return A.i($async$b3F,w)},
chT(d,e){return B.ib1(d,e)},
ib1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$chT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cZ,null),$async$chT)
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
return A.i($async$chT,w)},
b3I(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3F(d),$async$b3I)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3I,w)},
b3H(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.ib0()
r=C.a.i(f)
t=C.e5.aL(s)
x=3
return A.b(B.chT(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aL(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3H)
case 3:if(!h){v=null
x=1
break}v=new A.a2z("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3H,w)},
b3G(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.b3F(o),$async$b3G)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.ch.cJ(0,C.cM.aL(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3G,w)},
chU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$chU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(O.bIj("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cZ),$async$chU)
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
return A.i($async$chU,w)},
b3J(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JQ(),$async$b3J)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3J,w)},
asA(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$asA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asA)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3J(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asA,w)},
asy(d,e){var x=0,w=A.j(y.H)
var $async$asy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asy)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$asy)
case 2:return A.h(null,w)}})
return A.i($async$asy,w)},
a9m(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9m=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9m)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JQ(),$async$a9m)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dz(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9l(s),$async$a9m)
case 5:x=6
return A.b(B.asy(f,u),$async$a9m)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9m,w)},
a9n(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9n=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9n)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JQ(),$async$a9n)
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
return A.b(B.asy(g,q),$async$a9n)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9l(u),$async$a9n)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
a9o(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9o=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9o)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JQ(),$async$a9o)
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
s=B.b3C(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9o)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.T.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9o)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9o,w)},
chV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$chV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$chV)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.T.aN(0,r,null)
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
return A.i($async$chV,w)},
JR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chV(d),$async$JR)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3J(t),$async$JR)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asz(d),$async$JR)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b3C(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asz(d),$async$JR)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JR,w)},
asz(d){var x=0,w=A.j(y.H)
var $async$asz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asz)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asz)
case 2:return A.h(null,w)}})
return A.i($async$asz,w)},
b3K(){var x,w=$.oh(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hp(v)},
a9p(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hnB(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
chY(d){return B.ib3(d)},
ib3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$chY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9p(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$chY)
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
return A.i($async$chY,w)},
asC(d,e){return B.ib4(d,e)},
ib4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9p(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cZ,null),$async$asC)
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
return A.i($async$asC,w)},
ci_(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ci_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9p(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asC(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ci_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ci_,w)},
chZ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9p(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asC(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chZ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chZ,w)},
ci0(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ci0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9p(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asC(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ci0,w)},
ci1(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ci1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hnB(d)){v=null
x=1
break}x=3
return A.b(B.chY(d),$async$ci1)
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
return A.i($async$ci1,w)},
a9w(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9w=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9w)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9w)
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
return A.i($async$a9w,w)},
asG(d){return B.ibj(d)},
ibj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asG)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$asG)
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
return A.i($async$asG,w)},
asH(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.dc(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asH)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9w(),$async$asH)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.ch.cJ(0,C.cM.aL(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a1(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asG(s),$async$asH)
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
return A.i($async$asH,w)},
asJ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asJ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asJ)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9w(),$async$asJ)
case 4:u=g
t=J.a0(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a1(s,r,q),r,q)
r=C.e5.aL(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aL(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asG(u),$async$asJ)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asJ,w)},
asI(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asI)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9w(),$async$asI)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.ch.cJ(0,C.cM.aL(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asI,w)},
arx(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$arx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oF)){v=null
x=1
break}x=3
return A.b(p.lG(e),$async$arx)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hr),$async$arx)
case 7:q=g
o=q
o=o==null?null:J.eU(J.tM(o))
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
return A.i($async$arx,w)},
iI_(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h8t(d){return B.iI1(d)},
iI1(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h8t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iO("media").MJ(d,3600),$async$h8t)
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
return A.i($async$h8t,w)},
Eb(d,e,f,g,h,i){var x=null
return B.iHZ(d,e,f,g,h,i)},
iHZ(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eb=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hF8(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hnD(r),$async$Eb)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h8t(o),$async$Eb)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9q(r),$async$Eb)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aYj)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Is(A.a([],g))
x=15
return A.b(d.fi(0,A.ay3("GET",A.cH(n,0,null))).d9(0,C.HN),$async$Eb)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9q(r),$async$Eb)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LI(d)
u=19
case 22:x=24
return A.b(d.A(),$async$Eb)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3M(r,k),$async$Eb)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$Eb)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X5(r)
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
return A.b(B.a9q(r),$async$Eb)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Eb,w)},
aUM(d){return B.iI0(d)},
iI0(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iO("media").X(0,d),$async$aUM)
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
return A.i($async$aUM,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[67]
I=c[99]
P=c[313]
Q=c[53]
F=c[306]
K=c[185]
G=c[69]
R=c[271]
S=c[272]
E=c[263]
H=c[101]
T=c[237]
U=c[72]
V=c[186]
W=c[269]
L=c[251]
X=c[298]
M=c[314]
B=a.updateHolder(c[27],B)
D=c[312]
Y=c[236]
N=c[245]
Z=c[78]
A_=c[86]
B.cwi.prototype={
aJ_(d,e){return this.cVN(d,e)},
cVN(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aJ_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kE(A.cz(t)))
t=J.k(u)
v=B.ig8(C.cS.gcp().aL(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aJ_,w)}}
B.b8X.prototype={
bFP(d){var x=this,w=x.w
w.onclose=A.hH(new B.cwd(x))
w.onopen=A.hH(new B.cwe(x))
w.onmessage=A.hH(new B.cwf(x))
w.onbufferedamountlow=A.hH(new B.cwg(x))},
gd6(d){return this.x},
akO(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$akO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gl()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hpt(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.el(d.arrayBuffer(),y.af),$async$akO)
case 8:v=t.hpt(s.aqG(f,0,null))
x=1
break
case 7:case 4:v=B.hpt(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akO,w)}}
B.b8Y.prototype={
bFQ(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hH(new B.cwj(x)))
w.addEventListener("icecandidate",A.hH(new B.cwk(x)))
w.addEventListener("iceconnectionstatechange",A.hH(new B.cwl(x)))
w.onicegatheringstatechange=A.hH(new B.cwm(x))
w.addEventListener("signalingstatechange",A.hH(new B.cwn(x)))
if(!$.hxD())w.addEventListener("connectionstatechange",A.hH(new B.cwo(x)))
w.addEventListener("negotiationneeded",A.hH(new B.cwp(x)))
w.addEventListener("track",A.hH(new B.cwq(x)))},
aoz(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aoz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.el(s.createAnswer(A.kE(A.cz(A.S(y.N,y.z)))),y.aQ),$async$aoz)
case 3:t=f
v=new B.Zq(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoz,w)},
aaw(d,e){return this.buJ(0,e)},
buJ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aaw)
case 2:return A.h(null,w)}})
return A.i($async$aaw,w)},
aaE(d,e){return this.bv3(0,e)},
bv3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aaE)
case 2:return A.h(null,w)}})
return A.i($async$aaE,w)},
asY(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$asY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zq(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asY,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.aeK.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0s.prototype={
R(){return new B.aD1()},
gd8(){return this.c}}
B.aD1.prototype={
Z(){this.a4()
this.ahe()},
ahe(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3D(u.e,u.c),$async$ahe)
case 2:t=e
if(v.c!=null)v.l(new B.di6(v,t))
return A.h(null,w)}})
return A.i($async$ahe,w)},
Sn(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asv(t.e,t.c,!1),$async$Sn)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(D.fHQ)
x=1
break}x=4
return A.b(B.a9k(u.a.c,"individual"),$async$Sn)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a8R(A.e4(new B.di3(u),!1,null,y.H)),$async$Sn)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Sn,w)},
L_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$L_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fNq(o),$async$L_)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9o(o.e,r,s,q),$async$L_)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.T(D.fEP)
x=1
break}x=5
return A.b(B.a9k(u.a.c,"member"),$async$L_)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a8R(A.e4(new B.di5(u),!1,null,y.H)),$async$L_)
case 6:case 1:return A.h(v,w)}})
return A.i($async$L_,w)},
zm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9j(t.e,o,t.f,t.r,t.w,s),$async$zm)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9k(u.a.c,"org_owner"),$async$zm)
case 4:x=5
return A.b(B.asA(u.a.c),$async$zm)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fNV(o),$async$zm)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9m(s,t,o,q.c),$async$zm)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.M(y.q).f.T(D.fEL)
x=1
break}x=10
return A.b(B.asA(u.a.c),$async$zm)
case 10:o=u.c
if(o==null){x=1
break}o.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a8R(A.e4(new B.di4(u),!1,null,y.H)),$async$zm)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zm,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.o0:C.nk,p=B.hny(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aE(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ac(0,C.G,C.aB.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.h1j,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hp,s,s,s),C.az,D.hlK,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cfY,C.m),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lW(new B.di8(),s),C.N,v,C.ee,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.afd(C.f9,C.aGQ,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gco_(),s),C.af],u))
w.push(new B.afd(C.qb,C.a6V,"Team Member","Sign in with your organization access code + password",t.gcoV(),s))
w.push(C.af)
w.push(new B.afd(C.asz,C.a8E,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcop(),s))
return A.c6(s,q,A.bm(!0,A.cb(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.afd.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eK(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.eu,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lS,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A7,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFI.prototype={}
B.aIZ.prototype={}
B.jW.prototype={
n4(d){var x=this.b,w=C.a.oy(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gatE(){var x=this.d
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
biP(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jW(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cUf(d){return this.biP(null,d)},
aIH(d){return this.biP(d,null)}}
B.X_.prototype={
R(){return new B.aH6(new A.cB(null,y.A))},
gd8(){return this.c}}
B.aH6.prototype={
Z(){this.a4()
this.ahf()},
ahf(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CI(u.a.c),$async$ahf)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e4U(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ahf,w)},
ahg(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ahg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fR(new A.fF(s)),$async$ahg)
case 3:t=u.c
if(t!=null)t.M(y.q).f.T(D.fIL)
case 1:return A.h(v,w)}})
return A.i($async$ahg,w)},
a17(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a17=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.arx(s.d,4),$async$a17)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rI(r,"ngmy_my_code_"+m+".png"),$async$a17)
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
return A.i($async$a17,w)},
ale(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ale=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acv("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ale)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ale,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.o0:C.nk,m=o?C.c:C.a_,l=A.eR(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l3
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
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AM,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.ap0,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aB.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cb(A.w(A.a([x,C.nC,w,C.lq,new A.ea(A.q(p,A.qx(p,p,!1,B.iaV(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lq,A.A(A.a([A.E(A.eo(I.Ee,p,C.XM,q.gcfV(),p),1),C.ar,A.E(A.df(C.AB,p,C.ae3,q.gcfW(),A.bp(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a4(1/0,p,A.eo(N.a5I,p,D.hh8,q.gcEf(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apC,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.X3.prototype={
R(){return new B.aH9(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aH9.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JP(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a18(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a18=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JP(u.d.a.a)
if(t==null){u.l(new B.e62(u))
x=1
break}u.l(new B.e63(u))
s=u.a
r=s.c
x=3
return A.b(B.a9i(s.d,new B.e64(u),t,r),$async$a18)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e65(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a18,w)},
a4G(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4G=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.l(new B.e66(r))
u=4
q=J.ex(r.a.d)
x=7
return A.b(B.tg(r.a.c,q),$async$a4G)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e67(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.akp(p,m,l,j,k),$async$a4G)
case 8:o=e
if(r.c!=null)r.l(new B.e68(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e69(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e6a(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4G,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akV:D.aim,h=j?D.amL:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajS:C.bo
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eR(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bV(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bV(C.z,0.5,C.w,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c2N,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.aB],e),k,k),C.m),k,52,k,k,k,k,k,52),C.eu,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AM,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vk(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bo5()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aO(k,C.M,u==null,k,!0,C.t,k,A.aP(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.PK,k,k,"",k,!0,new A.b5(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.n(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e6b(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mT,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.Ek(l.a.d,4)
m=A.B(new A.O(m,new B.e6c(x,new A.aKh(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.C(C.kP,A.c("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.es,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fDe)
else q.push(A.V(C.kR,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cZ(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.m),C.iP,k,k,k,k,C.f3,k,k,k)],r))}e=A.E(A.cb(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bKN,k,k,C.ah),1)
u=l.f?k:l.gcEg()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eo(N.a5I,k,D.hif,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.bb(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcfX()
t=A.bp(C.aB,k,k,0,C.c,k,C.o8,k,new A.bb(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.l5(new B.e6d(),A.w(A.a([e,new A.C(D.bKg,A.w(A.a([s,C.N,i,C.af,A.bI(l.f?C.uz:D.hgt,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1W,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bo5.prototype={
pu(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hm(C.bB,v.length),C.aP)}}
B.X0.prototype={
R(){return new B.aH7()}}
B.aH7.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,C.bb,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bd(x,C.bb,C.aP),v)
u.f!==$&&A.aT()
u.f=new A.au(C.ay,v)},
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
ahh(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ahh=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e4V(r))
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
return A.b(B.a9n(p,m,n,o,C.a.i(l).length===0?null:l),$async$ahh)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.M(y.q).f.T(D.fIm)
s=[1]
x=4
break}p.M(y.q).f.T(D.fGY)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e4W(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ahh,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.o0:C.nk,q=A.eR(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h8M,s,s,s,1,s,!0),p=A.q(s,D.bCi,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.J9,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),o,s,s,s,s,s,2,D.cah,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),x,s,s,s,s,s,2,D.cac,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),w,s,s,s,s,s,2,D.cas,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
v=t.r?s:t.gcfY()
u=A.bp(C.aB,s,s,s,s,C.hv,s,s,s,s,s,s)
return A.c6(q,r,A.cb(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.nC,A.bI(t.r?C.uz:C.b0h,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.aer.prototype={}
B.bBc.prototype={
a7y(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a9g()))
x=3
return A.b(B.T6(t,s),$async$a7y)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7y,w)},
gd8(){return this.a}}
B.OZ.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0r.prototype={
R(){return new B.aD0(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aD0.prototype={
Z(){this.a4()
$.aS.U$.push(new B.di2(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cg3(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3C(d),u=x.a.c,t=u?C.j_:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.o0:v.a[0],p=A.n(24),o=A.K(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aB.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.avm,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aB.j(0.4),C.cy,16)],n),C.awe,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vk(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAO()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aO(!1,C.M,!1,w,!0,C.t,w,A.aP(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dp,w,w,"",w,!0,new A.b5(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.n(16),D.b9R),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.di0(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mT,w,w,w,w)
f=f[1]
h=y.p
return A.eE(w,C.L,new A.cR(T.Ni,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bn,new A.C(C.xl,A.w(A.a([l,C.aN,k,C.N,j,C.ee,i,C.ee,A.A(A.a([A.E(A.dV(C.oB,new B.di1(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.bb(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ac(0,C.G,C.aB.j(0.35),C.cO,12)],n),M.RU,C.m),C.bn,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eLj,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcg2(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PS,w,C.db,w,w,w)}}
B.bAO.prototype={
pu(d,e){return e.aot(e.a.toUpperCase())}}
B.X1.prototype={
R(){return new B.aH8(A.a([],y.r),A.aR(y.N))},
gd8(){return this.c}}
B.aH8.prototype={
Z(){var x=this
x.a4()
x.uS()
x.w=A.d5(C.jY,new B.e60(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.Xa()
this.a3()},
a3u(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OY(u.a.c),$async$a3u)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.BD(u.a.c),$async$a3u)
case 4:u.l(new s.e5o(u,e))
u.iA("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a3u,w)},
uS(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OY(u.a.c),$async$uS)
case 3:t=e
x=4
return A.b(B.BD(u.a.c),$async$uS)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e5p(u,s))
if(t>0)u.iA("Received "+A.v(t)+" file(s) via My Code.")
u.Pp(u.d)
B.CI(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uS,w)},
Pp(d){return this.bJX(d)},
bJX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Pp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9s(r,u.a.c),$async$Pp)
case 8:p=f
if(u.c==null){x=1
break}new B.e4Y(u,r,p).$0()
u.c.ey()
case 7:if(!(C.a.Y(r.c,"video/")||r.n4(D.nw))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.X8(r,u.a.c),$async$Pp)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.BD(u.a.c),$async$Pp)
case 12:u.l(new o.e4Z(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Pp,w)},
PP(d){return this.bQo(d)},
bQo(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$PP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9s(d,u.a.c),$async$PP)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e53(u,d,t))
x=6
return A.b(A.fR(new A.fF(t)),$async$PP)
case 6:u.iA("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fR(new A.fF(r.toUpperCase())),$async$PP)
case 7:u.iA("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$PP,w)},
iA(d){var x=null,w=this.c
if(w==null)return
w.M(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uT(d,e){return this.cPu(d,e)},
cPu(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e5P(r,e))
u=3
x=6
return A.b(d.$0(),$async$uT)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e5Q(r))
$.eY.mY()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uT,w)},
gb_D(){var x=this.a
return x.f||x.r||x.w},
JK(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$JK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gb_D()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.chR(s,n,r,q,o,t),$async$JK)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iA("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h0M(o,u.a.c),$async$JK)
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
return A.b(B.Ed(s,o,r,q,n,t),$async$JK)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JK,w)},
a2u(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a2u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asA(u.a.c),$async$a2u)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iA("No organization portal found.")
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
return A.b(A.a7(t,!1).ca(A.e4(new B.e5l(u,r,q),!1,null,y.H)),$async$a2u)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a2u,w)},
a3F(d){return this.cxA(d)},
cxz(){return this.a3F(1)},
cxA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gb_D()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.asx(u.a.c),$async$a3F)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3F,w)},
af2(d,e,f){return this.c6v(d,e,f)},
c6v(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$af2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iA(e)
x=1
break}x=3
return A.b(u.uT(new B.e5i(u,d,null,e,f),"Uploading\u2026"),$async$af2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$af2,w)},
bK5(){B.hVv(!1,new B.e51(this))
return},
cCL(){this.l(new B.e5t(this))},
aD4(){var x=0,w=A.j(y.H),v=this
var $async$aD4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bK5()
return A.h(null,w)}})
return A.i($async$aD4,w)},
aeZ(){var x=0,w=A.j(y.H),v=this
var $async$aeZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uT(new B.e57(v),"Importing\u2026"),$async$aeZ)
case 2:return A.h(null,w)}})
return A.i($async$aeZ,w)},
Uo(d){return this.cOL(d)},
cOL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Uo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n4(D.nw)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e5M(u,d),!1,null,y.H)),$async$Uo)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n4(D.TY)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e4(new B.e5N(u,d),!1,null,y.H)),$async$Uo)
case 8:x=1
break
case 7:x=u.c7d(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e4(new B.e5O(u,d),!1,null,y.H)),$async$Uo)
case 11:x=1
break
case 10:u.iA("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Uo,w)},
c7d(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.oy(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.d_2,C.a.aV(x,w+1).toLowerCase())},
aiW(d){return this.co3(d)},
co3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n4(D.nw)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e5j(u,d),!1,null,y.H)),$async$aiW)
case 5:x=1
break
case 4:u.l(new B.e5k(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiW,w)},
TK(d){return this.cFK(d)},
cFK(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$TK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iA("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$TK)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uT(new B.e5F(u,d),"Preparing QR\u2026"),$async$TK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TK,w)},
alG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$alG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e5G(),A.T(t).k("O<1,o>")).fI(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e5H(q),s),s.k("M.E"))
if(r.length===0){u.iA("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.TK(r),$async$alG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$alG,w)},
alz(d){return this.cFh(d)},
cFh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3C(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e5z(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$alz)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Uo(d)
break
case"qr":u.TK(A.a([d],y.r))
break
case"send_my_code":u.coK(A.a([d],y.r))
break
case"save":u.akW(d)
break
case"delete":u.KF(d)
break}case 1:return A.h(v,w)}})
return A.i($async$alz,w)},
ZQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e54(),A.T(t).k("O<1,o>")).fI(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e55(q),s),s.k("M.E"))
if(r.length===0){u.iA("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$ZQ)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uT(new B.e56(u,r),"Preparing file\u2026"),$async$ZQ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZQ,w)},
ak3(d){return this.cvR(d)},
cvR(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ak3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hWz(d,!1),$async$ak3)
case 3:s=f
r=s==null
q=B.a9p(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iA("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ak3,w)},
aj1(){var x=0,w=A.j(y.H),v=this,u
var $async$aj1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h9B(u,v.a.c),$async$aj1)
case 2:return A.h(null,w)}})
return A.i($async$aj1,w)},
bK4(){B.hVv(!1,new B.e50(this,null))
return},
KZ(d,e){return this.coL(d,e)},
b6s(d){return this.KZ(null,d)},
coK(d){return this.KZ(d,null)},
coL(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$KZ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e5m(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.ya.cr().arh(!0,C.a3P,!1),$async$KZ)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.uT(new B.e5n(l,s,r),"Preparing\u2026"),$async$KZ)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iA("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iA("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJz(p,l,e,s.a.c),$async$KZ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iA("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$KZ,w)},
K0(d){return this.c6i(d)},
c6i(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$K0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.iaU(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b6s(t),$async$K0)
case 8:x=6
break
case 7:u.iA("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iA("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uT(new B.e5g(u,d),"Receiving video\u2026"),$async$K0)
case 11:x=1
break
case 10:x=12
return A.b(u.uT(new B.e5h(u,d),"Receiving\u2026"),$async$K0)
case 12:case 1:return A.h(v,w)}})
return A.i($async$K0,w)},
FI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$FI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E7()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ak3(t),$async$FI)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.K0(s),$async$FI)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5r(u),!1,null,y.N)),$async$FI)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uS(),$async$FI)
case 10:x=1
break
case 9:x=11
return A.b(u.K0(C.a.i(r)),$async$FI)
case 11:case 1:return A.h(v,w)}})
return A.i($async$FI,w)},
akW(d){return this.cBe(d)},
cBe(d){var x=0,w=A.j(y.H),v=this
var $async$akW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uT(new B.e5q(v,d),"Saving\u2026"),$async$akW)
case 2:return A.h(null,w)}})
return A.i($async$akW,w)},
KF(d){return this.bSN(d)},
bSN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$KF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lH(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$KF)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.chU(t),$async$KF)
case 6:case 5:s=d.a
x=7
return A.b(B.FR(u.a.c,s),$async$KF)
case 7:u.r.X(0,s)
x=8
return A.b(u.uS(),$async$KF)
case 8:case 1:return A.h(v,w)}})
return A.i($async$KF,w)},
alM(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3C(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e5L(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alM)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aj1()
break
case"import":u.aeZ()
break}case 1:return A.h(v,w)}})
return A.i($async$alM,w)},
cg0(d){var x=d.c
if(C.a.Y(x,"video/")||d.n4(D.nw))return C.rF
if(C.a.Y(x,"image/")||d.n4(D.TY))return C.vG
if(C.a.q(x,"pdf"))return S.IP
return D.asZ},
C(d){var x,w,v=this,u=null,t=B.a3C(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.J1,u,u,u,new B.e5W(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c3p,u,u,u,v.e?u:v.gcoq(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcCK()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bYk:E.atn,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a5E,u,u,u,v.e?u:v.gcg1(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.pc,u,u,u,v.e?u:v.gb7y(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c5e,u,u,u,v.e?u:new B.e5X(v),u,u,u,u,"More options",u))
q=A.eR(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lW(new B.e5Y(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bV(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bV(C.z,0.5,C.w,u,0,A.a([C.aB.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aB.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jK(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCY(C.jI,s,!0,t,w?u:v.gcFL(),u),1)
x.push(new A.C(C.aoZ,A.l5(new B.e5Z(),A.A(A.a([s,C.ar,A.E(new B.aCY(C.tX,"Export",!1,t,w?u:v.gbWG(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iQ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.biA(t,v.e?u:v.gb7y(),u)
else s=A.ku(!0,u,u,new B.e6_(v,t),s,u,D.bIT,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCY.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aB,t,t,0,C.c,t,C.tN,t,new A.bb(s,C.a1),t,t,t)
return A.df(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tN,t,new A.bb(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eo(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.biA.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l5(new B.dhZ(),new A.C(E.a2W,A.w(A.a([A.l5(new B.di_(),A.q(x,A.V(C.Ac,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ek,C.hA,x,x,new A.bq(0.86,1,w),s),C.ee,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ee,A.df(C.pc,x,D.hm3,this.d,A.bp(C.aB,x,x,x,C.c,x,C.PQ,x,new A.bb(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.Db,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeL.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
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
if(!o||i.n4(D.nw))p=D.dDL
else{p=C.a.Y(p,"image/")||i.n4(D.TY)
n=y.O
p=p?A.a([C.cY,C.aB],n):A.a([C.aO.j(0.85),C.aB.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gatE()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n4(D.nw))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.at,A.c(C.d.aJ(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h3,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n4(D.nw)))l.push(A.hll(C.aB,!1,j,j,j,!1,j,j,new B.dil(k),j,j,new A.bb(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p8,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l5(new B.dim(),new A.C(C.dX,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a2l,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.bb(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.b9("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0t.prototype={
R(){return new B.aD2()},
gd8(){return this.c}}
B.aD2.prototype={
Z(){this.a4()
this.za()},
t(){B.ib8(this.e)
this.a3()},
za(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$za=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.tg(o.c,o.d),$async$za)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.ibb(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.iba(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dii(s))
x=1
break}s.l(new B.dij(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.dik(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$za,w)},
a4F(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.tg(t.c,t.d),$async$a4F)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(D.fFl)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.akp(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4F)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
c6b(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kt(u,C.z,v,new B.dig(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.ha(t,C.z,v,new B.dih(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u7(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3C(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Eh,u,u,u,v.gbbo(),u,u,u,u,"Share / save",u))
r=A.eR(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.GF
else{q=v.r
if(q!=null)t=new A.C(C.eA,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c4(w,".heic")||C.a.c4(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.eA,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.df(C.Eh,u,D.h3P,v.gbbo(),A.bp(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c6b()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0q.prototype={
R(){return new B.aD_(A.alo(),C.bI,C.bI)},
gd8(){return this.c}}
B.aD_.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fJ(w,A.a3(w).k("fJ<1>")).iQ(new B.dhW(v))
x.gd2w().iQ(new B.dhX(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fJ(x,A.a3(x).k("fJ<1>"))}if(x==null)x=C.bgb
x.iQ(new B.dhY(v))
v.za()},
za(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$za=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.tg(p.c,p.d),$async$za)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dhP(s))
x=1
break}x=8
return A.b(s.d.vV(0,new A.a5Q(r,s.a.d.c)),$async$za)
case 8:if(s.c==null){x=1
break}s.l(new B.dhQ(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dhR(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$za,w)},
a19(){var x=0,w=A.j(y.H),v=this,u
var $async$a19=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hr(0),$async$a19)
case 5:x=3
break
case 4:x=6
return A.b(u.iT(0),$async$a19)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a19,w)},
aYt(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3C(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eR(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.GF
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bZm,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RU,C.m),o,88,o,o,o,o,o,88)
t=A.kT(C.aB,o,o,o,m,0,o,new B.dhS(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aYt(p.w)+" / "+p.aYt(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aB,o,o,o,o,D.fBG,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vJ:C.fR,o,o,o,o,o)
x=A.w(A.a([u,C.lq,t,x,C.df,A.df(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcg4(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.q1,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rr.prototype={
R(){return new B.aD5()},
gd8(){return this.c}}
B.aD5.prototype={
Z(){this.a4()
this.RC()},
RC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$RC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hnz(o.c,o.d,new B.diz(s)),$async$RC)
case 7:r=e
if(r==null||r.length===0){s.l(new B.diA(s))
x=1
break}s.e=r
q=Q.izB(r)
if(q==null){s.l(new B.diB(s))
x=1
break}s.d=q
q.aU(0,s.gb6f())
x=8
return A.b(q.j4(0).d9(0,C.o7),$async$RC)
case 8:if(s.c==null){x=1
break}s.l(new B.diC(s))
x=9
return A.b(q.qK(0),$async$RC)
case 9:q.uu(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.diD(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$RC,w)},
cmz(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.diE(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Es(0,x.gb6f())
w=x.d
if(w!=null)w.t()
B.iKi(x.e)
x.a3()},
ahk(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3L(u.c,u.d),$async$ahk)
case 2:t=e
u=v.c
if(u!=null)u.M(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ahk,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3C(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eR(A.a([A.aI(t,t,t,t,C.on,t,t,t,u.gcfZ(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iC(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.GF
else{q=u.r
if(q!=null)s=new A.C(C.eA,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akN(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fD(x,new A.am(C.z,t,C.ac,C.t,A.a([new A.B8(s,t),A.aA(t,A.xU(A.q(t,A.V(q?K.vJ:C.fR,C.c,t,t,t,48),C.f,t,t,new A.p(C.ba,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.diG(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0v.prototype={
R(){return new B.aD3(new A.cB(null,y.A))}}
B.aD3.prototype={
gcP9(){var x,w,v=this.a
if(v.e!==D.Vn)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcOJ(){var x,w,v=this.a
if(v.e!==D.Bd)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcP9()
if(x!=null){v.SN(x)
v.e=A.d5(V.Dd,new B.div(v,x))}w=v.gcOJ()
if(w!=null){v.SM(w)
v.f=A.d5(C.fr,new B.diw(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
SM(d){return this.cu1(d)},
cu1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asF(d),$async$SM)
case 3:t=f
x=4
return A.b(B.cic(d),$async$SM)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.din(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
SN(d){return this.cu2(d)},
cu2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.hak(d),$async$SN)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bHk(t),$async$SN)
case 4:if(u.c==null){x=1
break}u.l(new B.dio(u))
u.c.M(y.q).f.T(D.aXT)
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
gcbK(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcg_(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a4o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a4o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E7()){t=u.c
if(t!=null)t.M(y.q).f.T(D.fIw)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e4(new B.dip(),!1,null,y.N)),$async$a4o)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bHk(s),$async$a4o)
case 4:t=u.c
if(t!=null)t.M(y.q).f.T(D.aXT)
case 1:return A.h(v,w)}})
return A.i($async$a4o,w)},
acP(d){return this.bQp(d)},
bQp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fR(new A.fF(C.d.aJ(t,", "))),$async$acP)
case 3:if(d.e!=null){t=d.M(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acP,w)},
ahi(d){return this.bQ7(d)},
bQ7(d){var x=0,w=A.j(y.H),v=this
var $async$ahi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fR(new A.fF(v.a.c)),$async$ahi)
case 2:if(d.e!=null)d.M(y.q).f.T(D.fFP)
return A.h(null,w)}})
return A.i($async$ahi,w)},
a4i(d){return this.cBg(d)},
cBg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a4i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.arx(s.d,4),$async$a4i)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rI(r,"ngmy_doc_share_qr.png"),$async$a4i)
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
return A.i($async$a4i,w)},
gb0T(){var x,w=this.a
if(w.e!==D.Kj)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acM(d){return this.bQi(d)},
bQi(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0T()
if(t==null){x=1
break}x=3
return A.b(A.fR(new A.fF(C.a.Y(t,"http")?t:"N2|"+t)),$async$acM)
case 3:if(d.e!=null)d.M(y.q).f.T(D.fHv)
case 1:return A.h(v,w)}})
return A.i($async$acM,w)},
ahj(){var x=0,w=A.j(y.H),v=this,u
var $async$ahj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Xa(),$async$ahj)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ahj,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3C(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kj&&i!==D.Vn&&i!==D.Bd
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eR(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kj||t===D.Vn||t===D.Bd?l:A.aI(l,l,l,l,C.lK,l,l,l,m.gb43(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qx(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcbK(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kj){t=C.aB.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lF,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcg_(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aJ(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hz(D.c9k,D.hdC,new B.diq(m,d),l)],p))}if(m.a.e===D.Kj&&m.gb0T()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hz(D.c5B,D.hab,new B.dir(m,d),l)],p))
if(m.a.e===D.Bd){x=(m.w?C.dT:C.aB).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GJ:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lF,l,l,l)],p))}if(m.a.e===D.Vn){x=(m.r?C.dT:C.aB).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GJ:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lF,l,l,l),C.af,A.df(D.c0T,l,D.hgN,m.gcBE(),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pg(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bc,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eo(I.Ee,l,C.XM,new B.dis(m,d),l),1),C.ar,A.E(A.df(C.AB,l,C.ae3,new B.dit(m,d),A.bp(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a4(1/0,l,A.bI(U.BQ,l,m.gb43(),A.bp(C.aO,l,l,l,l,C.hv,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.diu(),y.C)}}
B.aeJ.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.w(A.a([w,C.aN,A.q(x,A.qx(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bI(C.BR,x,new B.dhO(d),x)],u),x,x,C.nR,v,x,x,x,x,D.h2L,x)}}
B.a0p.prototype={
R(){return new B.aCZ(A.Aj(C.zs,C.oI,C.vV))}}
B.aCZ.prototype={
t(){this.d.t()
this.a3()},
aBq(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).N(t)
return}}},
C(d){var x=null
return A.c6(A.eR(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.haJ,x,x,x,1,x,!0),C.v,A.Ai(this.d,C.c1,this.gaBp()),x,!1,!1,x,x)}}
B.a0w.prototype={
R(){return new B.aD4(A.Aj(C.zs,C.oI,C.vV))},
gd8(){return this.c}}
B.aD4.prototype={
c7f(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ajr(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Nl("text/plain"),$async$ajr)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.M(y.q).f.T(D.fIq)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ajr,w)},
adE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hWz(p,!0),$async$adE)
case 3:t=e
p=t==null
s=B.a9p(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.M(y.q).f.T(D.fEW)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adE,w)},
t(){this.d.t()
this.a3()},
aBq(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c7f(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.aup,v,v,v,w.gbW9(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5M,v,v,v,w.gcrg(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eR(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.ry:R.R1,v,v,v,v,v),v,v,v,new B.diy(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hhK,v,v,v,1,v,!0)
u=A.Ai(w.d,C.c1,w.gaBp())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ac,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eRE],s),v),v,!1,!1,v,v)}}
B.biB.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pU
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pU:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a31,A.A(A.a([u,C.bd,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eP,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abT.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Qa.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zp.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Q9.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gm.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cwh.prototype={}
B.Gl.prototype={}
B.abS.prototype={}
B.axf.prototype={}
B.Zq.prototype={}
var z=a.updateTypes(["az<~>()","P(jW)","o(jW)","X1(Z)","~()","a0s(Z)","F(F,jW)","Rr(Z)","~(lN)","cr(Gl)","az<jW?>(@)","X_(Z)","X3(Z)","C(jW)","jW(@)","a9<o,@>(jW)","a0r(Z)","X0(Z)","a0t(Z)","a0q(Z)","a0v(Z)","aeJ(Z)","ah<jW>()","a0w(Z)","aeL(Z,F)","a0p(Z)","a9<o,aH>(jW)","cr(Zp)","cr(abS)","az<cr>(Gl)"])
B.cwd.prototype={
$1(d){var x=this.a
x.x=D.aUv
x.y.K(0,D.aUv)},
$S:74}
B.cwe.prototype={
$1(d){var x=this.a
x.x=D.aUu
x.y.K(0,D.aUu)},
$S:74}
B.cwf.prototype={
$1(d){var x=this.a
x.akO(A.a4l(d.data)).bB(new B.cwc(x),y.b)},
$S:74}
B.cwc.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cwg.prototype={
$1(d){},
$S:74}
B.cwj.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.ig7(d.channel))},
$S:18}
B.cwk.prototype={
$1(d){},
$S:18}
B.cwl.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iAL(w.iceConnectionState)
x.cx=w
if($.hxD())switch(w.a){case 0:x.cy=D.aUA
break
case 1:x.cy=D.aUB
break
case 3:x.cy=D.aUC
break
case 5:x.cy=D.aUy
break
case 6:x.cy=D.aUz
break
case 7:x.cy=D.abE
break
default:break}},
$S:112}
B.cwm.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iAM(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:112}
B.cwn.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iLX(w.signalingState)},
$S:112}
B.cwo.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iK_(w.connectionState)},
$S:112}
B.cwp.prototype={
$1(d){},
$S:112}
B.cwq.prototype={
$1(d){},
$S:18}
B.fIL.prototype={
$1(d){var x=y.F.a(new A.qP([],[]).on(d.target.result,!1)),w=C.xb.q(x.objectStoreNames,"blobs")
if(!w)C.x8.Hh(x,"blobs")},
$S:173}
B.h9p.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xM.fs(this.b)
$.eY.mY()
this.c.$1(d)},
$S:456}
B.h9r.prototype={
$1(d){return this.a.$1(B.ipJ(this.b,this.c))},
$S:33}
B.h9q.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h9o.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h9E.prototype={
$1(d){var x=this
return B.hK6(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h9F.prototype={
$1(d){var x=this
return B.hK6(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fLr.prototype={
$1(d){var x=this
return B.chO(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.di6.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.di3.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chO(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.di5.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chO(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.di4.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chO(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.di8.prototype={
$4(d,e,f,g){var x=null
return A.kj(A.A(A.a([A.aI(x,x,x,x,D.c_t,x,x,x,new B.di7(d),x,x,x,x,x,x),A.E(A.G7(D.TG,!0,x,!1,C.a4S,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.TG,x,g,C.apX,0,e,f)},
$C:"$4",
$R:4,
$S:423}
B.di7.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fNt.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eW,y.m).w,t=this.a,s=t?C.j_:C.c,r=A.n(28),q=A.q(v,D.bCC,C.f,v,v,D.bbs,v,v,v,v,D.apI,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),p,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c40,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Ds,A.w(A.a([o,C.af,A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),x,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.auF,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fNr(d),v),1),C.ar,A.E(A.bI(D.h99,v,new B.fNs(p,x,d),A.bp(C.b8,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HS,v,v,v,v),v)},
$S:65}
B.fNr.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fNs.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.M(y.q).f.T(D.fG5)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aFI(v,x))},
$S:0}
B.fNX.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eW,y.m).w,u=x.a,t=u?C.j_:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bCs,C.f,w,w,D.bcX,w,w,w,w,D.apI,w,w,1/0),new A.C(C.Ds,A.w(A.a([A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),r,w,w,w,w,w,2,B.ht6(u,"Organization name",C.Ip,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),q,w,w,w,w,w,2,B.ht6(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),p,w,w,w,w,w,2,B.ht6(u,"Member password",C.Ed,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.bx,A.bI(D.hhR,w,new B.fNW(r,q,p,d),A.bp(C.aB,w,w,w,w,C.hv,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HS,w,w,w,w),w)},
$S:65}
B.fNW.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.M(y.q).f.T(D.fGa)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aIZ(u,x,w))},
$S:0}
B.chF.prototype={
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
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aZ(j)
u=4
x=7
return A.b(A.wl(p,null).d9(0,C.a1V),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CJ(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.chL.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chM.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.chN.prototype={
$1(d){return d.b},
$S:z+2}
B.chH.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chI.prototype={
$1(d){return d.b},
$S:z+2}
B.chG.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:14}
B.chJ.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.chK.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h9C.prototype={
$1(d){return new B.X_(this.a,null)},
$S:z+11}
B.h9D.prototype={
$1(d){return new B.X3(this.a,this.b,this.c,null)},
$S:z+12}
B.e4U.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e62.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e63.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e64.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e61(x,d))},
$S:2}
B.e61.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e65.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e66.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e67.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e68.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e69.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e6a.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e6d.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.e6b.prototype={
$1(d){var x=this.a
return x.f?null:x.a18()},
$S:2}
B.e6c.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n4(D.TY))s=C.vG
else s=C.a.Y(s,"video/")||d.n4(D.nw)?C.rF:D.asZ
x=this.b.a
w=y.p
return new A.C(C.jZ,A.A(A.a([A.q(v,A.V(s,C.aB,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gatE(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e4V.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e4W.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chP.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:99}
B.chQ.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:99}
B.haD.prototype={
$2(d,e){return e===this.a},
$S:252}
B.fFI.prototype={
$1(d){return J.k(d)},
$S:15}
B.fLF.prototype={
$1(d){var x=this.b
B.int(C.Id.ga9a(this.a)).bB(x.gCZ(x),y.H)},
$S:132}
B.fLG.prototype={
$1(d){return this.a.di(0,null)},
$S:132}
B.fLH.prototype={
$0(){return null},
$S:12}
B.ci3.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fLI.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
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
return new B.jW(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fQ7.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fJP.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJQ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ci8.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.heY.prototype={
$1(d){return new B.a0r(this.a,null)},
$S:z+16}
B.di2.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fN()},
$S:7}
B.di0.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.di1.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e60.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a3u()},
$S:10}
B.e5o.prototype={
$0(){var x=J.bKF(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5p.prototype={
$0(){var x=J.bKF(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4Y.prototype={
$0(){var x=this.a,w=C.d.bm(x.d,new B.e4X(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIH(this.c)}},
$S:0}
B.e4X.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4Z.prototype={
$0(){var x=J.bKF(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e53.prototype={
$0(){var x=this.a,w=C.d.bm(x.d,new B.e52(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIH(this.c)}},
$S:0}
B.e52.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5P.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e5Q.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e5l.prototype={
$1(d){return new B.X0(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e5i.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.JK(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X4(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uS(),$async$$0)
case 5:s=J.a0(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3F(s.gI(t)),$async$$0)
case 8:case 7:r.iA(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e51.prototype={
$1(d){this.a.af2(d,"No files selected.","Added")},
$S:456}
B.e5t.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e5s(),A.T(x).k("O<1,o>")))},
$S:0}
B.e5s.prototype={
$1(d){return d.a},
$S:z+2}
B.e57.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.ya.cr().d4y(C.a3P,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.ex(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
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
case 6:if(k==null||C.a.i(k).length===0){s.a.iA("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iA("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asE(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.iA("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uS(),$async$$0)
case 9:o.iA("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e5M.prototype={
$1(d){return new B.Rr(this.a.a.c,this.b,null)},
$S:z+7}
B.e5N.prototype={
$1(d){return new B.a0t(this.a.a.c,this.b,null)},
$S:z+18}
B.e5O.prototype={
$1(d){return new B.a0q(this.a.a.c,this.b,null)},
$S:z+19}
B.e5j.prototype={
$1(d){return new B.Rr(this.a.a.c,this.b,null)},
$S:z+7}
B.e5k.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5F.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.JK(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9r(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iA("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cxz(),$async$$0)
case 5:x=6
return A.b(p.uS(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e5B(p),r),new B.e5C(),r.k("O<aj.E,o>")).c2(0,new B.e5D())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5E(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Xa(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5B.prototype={
$1(d){var x=this.a,w=C.d.bm(x.d,new B.e5A(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e5A.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5C.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e5D.prototype={
$1(d){return d.length!==0},
$S:3}
B.e5E.prototype={
$1(d){var x=this.a
return new B.a0v(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e5G.prototype={
$1(d){return d.a},
$S:z+2}
B.e5H.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e5z.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gatE(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n4(D.nw)?C.u0:C.ol
p=!x||p.n4(D.nw)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lv,v,v,C.m),C.bn,A.bm(!0,new A.C(C.zI,A.w(A.a([q,o,t,C.az,B.a0u(!1,u,!1,w,p,new B.e5u(d),v),B.a0u(!1,u,!1,C.jI,"Share via QR",new B.e5v(d),"Letters/numbers QR code"),B.a0u(!1,u,!1,D.a4X,"Send to their Code",new B.e5w(d),"Enter someone else's personal code"),B.a0u(!1,u,!1,C.hP,"Download / save",new B.e5x(d),v),C.aj,B.a0u(!1,u,!0,C.et,"Delete",new B.e5y(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:570}
B.e5u.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e5v.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e5w.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e5x.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e5y.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e54.prototype={
$1(d){return d.a},
$S:z+2}
B.e55.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e56.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9t(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HO(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pW(s.c,s.f),$async$$0)
case 4:u.iA(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e50.prototype={
$1(d){var x=this.a
x.uT(new B.e5_(x,d,this.b),"Preparing\u2026")},
$S:456}
B.e5_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iA("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X4(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.iA("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJz(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iA("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5m.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e5n.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aN(v.c.a),r=v.b,q=v.a
case 2:if(!s.A()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hnC(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5g.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HM(new B.e5c(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iA("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e5d(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e5e(s))
case 5:x=8
return A.b(r.b.im(0,C.HN,new B.e5f()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a0(t)
if(q.gar(t)){s.iA("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uS(),$async$$0)
case 9:s.iA("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5c.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e59(x,d,e))},
$S:190}
B.e59.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e5d.prototype={
$1(d){return new B.aeJ(this.a.a,null)},
$S:z+21}
B.e5e.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e5f.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e5h.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JP(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9h(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b6s(B.JP(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asE(new B.e5a(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.hnB(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iA(q)
x=1
break}x=10
return A.b(s.uS(),$async$$0)
case 10:o=J.cK(r)
p=o.eY(r,new B.e5b()).gI(0)
s.iA(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5a.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e58(x,d,e))},
$S:190}
B.e58.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e5b.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.e5r.prototype={
$1(d){return new B.a0w(this.a.a.c,null)},
$S:z+23}
B.e5q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3L(u.a.c,v.b),$async$$0)
case 2:t.iA(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5L.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.aB.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lv,x,x,C.m),C.bn,A.bm(!0,new A.C(C.zI,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.a0u(!0,w,!1,C.mC,"My Code",new B.e5I(d),"Your personal code & QR \u2014 others send docs to you"),B.a0u(!1,w,!1,D.a4X,"Send to their Code",new B.e5J(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0u(!1,w,!1,W.At,"Import backup",new B.e5K(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:570}
B.e5I.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e5J.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bK4()},
$S:0}
B.e5K.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e5Y.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JZ(D.TG,x,C.a4S,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.TG).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:597}
B.e5W.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5X.prototype={
$0(){this.a.alM()
return null},
$S:0}
B.e5Z.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:95}
B.e6_.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeL(e,w,v,this.b,x.e,x.cg0(w),new B.e5S(x,w),new B.e5T(x,v,w),new B.e5U(x,w),new B.e5V(x,w),null)},
$S:z+24}
B.e5S.prototype={
$0(){this.a.aiW(this.b)
return null},
$S:0}
B.e5T.prototype={
$0(){var x=this.a
return x.l(new B.e5R(x,this.b,this.c))},
$S:0}
B.e5R.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5U.prototype={
$0(){this.a.PP(this.b)
return null},
$S:0}
B.e5V.prototype={
$0(){this.a.alz(this.b)
return null},
$S:0}
B.dhZ.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:95}
B.di_.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:111}
B.dim.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:95}
B.dil.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.dii.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dij.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dik.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dig.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.ha(w,C.z,x,new B.die(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dif(this.a))
return C.bK},
$S:144}
B.die.prototype={
$3(d,e,f){$.aS.U$.push(new B.dic(this.a))
return C.bK},
$S:186}
B.dic.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.di9(x))},
$S:7}
B.di9.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dif.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dib(x))},
$S:7}
B.dib.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dih.prototype={
$3(d,e,f){$.aS.U$.push(new B.did(this.a))
return C.bK},
$S:186}
B.did.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dia(x))},
$S:7}
B.dia.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhW.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhV(x,d))},
$S:1834}
B.dhV.prototype={
$0(){return this.a.f=this.b===C.wi},
$S:0}
B.dhX.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhU(x,d))},
$S:7}
B.dhU.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dhY.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhT(x,d))},
$S:7}
B.dhT.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dhP.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dhQ.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dhR.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dhS.prototype={
$1(d){return this.a.d.OJ(0,A.dw(0,0,0,C.h.S(d),0,0))},
$S:6}
B.diz.prototype={
$0(){var x=this.a.a
return B.tg(x.c,x.d)},
$S:1835}
B.diA.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.diB.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.diC.prototype={
$0(){return this.a.f=!1},
$S:0}
B.diD.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.diE.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.diG.prototype={
$0(){var x=this.a
x.l(new B.diF(x))},
$S:0}
B.diF.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hr(0)
else x.qK(0)},
$S:0}
B.div.prototype={
$1(d){return this.a.SN(this.b)},
$S:10}
B.diw.prototype={
$1(d){return this.a.SM(this.b)},
$S:10}
B.din.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dio.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dip.prototype={
$1(d){return D.hU8},
$S:z+25}
B.diu.prototype={
$2(d,e){if(d)B.Xa()},
$S:135}
B.diq.prototype={
$0(){return this.a.acP(this.b)},
$S:0}
B.dir.prototype={
$0(){return this.a.acM(this.b)},
$S:0}
B.dis.prototype={
$0(){return this.a.ahi(this.b)},
$S:0}
B.dit.prototype={
$0(){return this.a.a4i(this.b)},
$S:0}
B.dhO.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.diy.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qO(),$async$$0)
case 2:u.l(new B.dix(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dix.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cia.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n4(D.nw)},
$S:z+1}
B.cib.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aD(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ci9.prototype={
$2(d,e){return this.bqs(d,e)},
bqs(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Xb(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1836}
B.fPH.prototype={
$1(d){if(d===D.abD&&(this.a.a.a&30)===0)this.a.h8(0)},
$S:z+27}
B.fPI.prototype={
$0(){},
$S:12}
B.fQl.prototype={
bs6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fCI(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hF8(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bs6(d,e)},
$S:793}
B.fQk.prototype={
$1(d){var x=this
d.b=new B.fQj(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fQj.prototype={
$1(d){return this.bs5(d)},
bs5(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b3M(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.T.aN(0,n,null)
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
return A.b(B.fCI(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
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
return A.b(B.a9q(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aD1.prototype,"gco_","Sn",0)
x(v,"gcoV","L_",0)
x(v,"gcop","zm",0)
x(v=B.aH6.prototype,"gcfV","ahg",0)
x(v,"gcfW","a17",0)
x(v,"gcEf","ale",0)
x(v=B.aH9.prototype,"gcfX","a18",0)
x(v,"gcEg","a4G",0)
x(B.aH7.prototype,"gcfY","ahh",0)
x(B.aD0.prototype,"gcg2","cg3",4)
x(v=B.aH8.prototype,"gcoq","a2u",0)
x(v,"gcCK","cCL",4)
x(v,"gb7y","aD4",0)
x(v,"gcFL","alG",0)
x(v,"gbWG","ZQ",0)
x(v,"gcg1","FI",0)
x(B.aD2.prototype,"gbbo","a4F",0)
x(B.aD_.prototype,"gcg4","a19",0)
x(v=B.aD5.prototype,"gb6f","cmz",4)
x(v,"gcfZ","ahk",0)
x(v=B.aD3.prototype,"gcBE","a4o",0)
x(v,"gb43","ahj",0)
w(B.aCZ.prototype,"gaBp","aBq",8)
x(v=B.aD4.prototype,"gcrg","ajr",0)
x(v,"gbW9","adE",0)
w(v,"gaBp","aBq",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aH,[B.cwh,B.abS,B.axf,B.aFI,B.aIZ,B.jW,B.aer,B.bBc,B.Gl,B.Zq])
w(B.cwi,B.cwh)
w(B.b8X,B.abS)
x(A.hr,[B.cwd,B.cwe,B.cwf,B.cwc,B.cwg,B.cwj,B.cwk,B.cwl,B.cwm,B.cwn,B.cwo,B.cwp,B.cwq,B.fIL,B.h9p,B.h9r,B.h9q,B.h9E,B.h9F,B.fLr,B.di3,B.di5,B.di4,B.di8,B.fNt,B.fNX,B.chF,B.chM,B.chN,B.chI,B.chG,B.chJ,B.chK,B.h9C,B.h9D,B.e64,B.e6d,B.e6b,B.e6c,B.fFI,B.fLF,B.fLG,B.ci3,B.fLI,B.fQ7,B.fJP,B.fJQ,B.ci8,B.heY,B.di2,B.di0,B.e60,B.e4X,B.e52,B.e5l,B.e51,B.e5s,B.e5M,B.e5N,B.e5O,B.e5j,B.e5B,B.e5A,B.e5C,B.e5D,B.e5E,B.e5G,B.e5H,B.e5z,B.e54,B.e55,B.e50,B.e5m,B.e5d,B.e5b,B.e5r,B.e5L,B.e5Y,B.e5Z,B.dhZ,B.di_,B.dim,B.dil,B.dig,B.die,B.dic,B.dif,B.dih,B.did,B.dhW,B.dhX,B.dhY,B.dhS,B.div,B.diw,B.dip,B.cia,B.cib,B.fPH,B.fQk,B.fQj])
w(B.b8Y,B.axf)
x(A.j0,[B.h9o,B.di6,B.di7,B.fNr,B.fNs,B.fNW,B.e4U,B.e62,B.e63,B.e61,B.e65,B.e66,B.e67,B.e68,B.e69,B.e6a,B.e4V,B.e4W,B.fLH,B.di1,B.e5o,B.e5p,B.e4Y,B.e4Z,B.e53,B.e5P,B.e5Q,B.e5i,B.e5t,B.e57,B.e5k,B.e5F,B.e5u,B.e5v,B.e5w,B.e5x,B.e5y,B.e56,B.e5_,B.e5n,B.e5g,B.e59,B.e5e,B.e5f,B.e5h,B.e58,B.e5q,B.e5I,B.e5J,B.e5K,B.e5W,B.e5X,B.e5S,B.e5T,B.e5R,B.e5U,B.e5V,B.dii,B.dij,B.dik,B.di9,B.dib,B.dia,B.dhV,B.dhU,B.dhT,B.dhP,B.dhQ,B.dhR,B.diz,B.diA,B.diB,B.diC,B.diD,B.diE,B.diG,B.diF,B.din,B.dio,B.diq,B.dir,B.dis,B.dit,B.dhO,B.diy,B.dix,B.fPI])
x(A.ln,[B.aeK,B.OZ,B.abT,B.Qa,B.Zp,B.Q9,B.Gm])
x(A.af,[B.a0s,B.X_,B.X3,B.X0,B.a0r,B.X1,B.a0t,B.a0q,B.Rr,B.a0v,B.a0p,B.a0w])
x(A.ai,[B.aD1,B.aH6,B.aH9,B.aH7,B.aD0,B.aH8,B.aD2,B.aD_,B.aD5,B.aD3,B.aCZ,B.aD4])
x(A.aw,[B.afd,B.aCY,B.biA,B.aeL,B.aeJ,B.biB])
x(A.j1,[B.chL,B.chH,B.chP,B.chQ,B.haD,B.e5c,B.e5a,B.e6_,B.diu,B.ci9,B.fQl])
x(A.jr,[B.bo5,B.bAO])})()
A.jj(b.typeUniverse,JSON.parse('{"b8X":{"abS":[]},"b8Y":{"axf":[]},"a0s":{"af":[],"x":[]},"aD1":{"ai":["a0s"]},"afd":{"aw":[],"x":[]},"X_":{"af":[],"x":[]},"X3":{"af":[],"x":[]},"aH6":{"ai":["X_"]},"aH9":{"ai":["X3"]},"bo5":{"jr":[]},"X0":{"af":[],"x":[]},"aH7":{"ai":["X0"]},"a0r":{"af":[],"x":[]},"X1":{"af":[],"x":[]},"aeL":{"aw":[],"x":[]},"a0t":{"af":[],"x":[]},"a0q":{"af":[],"x":[]},"Rr":{"af":[],"x":[]},"a0v":{"af":[],"x":[]},"aeJ":{"aw":[],"x":[]},"a0p":{"af":[],"x":[]},"a0w":{"af":[],"x":[]},"aD0":{"ai":["a0r"]},"bAO":{"jr":[]},"aH8":{"ai":["X1"]},"aCY":{"aw":[],"x":[]},"biA":{"aw":[],"x":[]},"aD2":{"ai":["a0t"]},"aD_":{"ai":["a0q"]},"aD5":{"ai":["Rr"]},"aD3":{"ai":["a0v"]},"aCZ":{"ai":["a0p"]},"aD4":{"ai":["a0w"]},"biB":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n0"),k:x("Nj()"),o:x("bl<o,o>"),F:x("rS"),g:x("az<jW?>"),x:x("az<~>"),V:x("N<ac>"),O:x("N<u>"),W:x("N<bn>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jW>"),w:x("N<+file,name(ml,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jr>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bn"),A:x("cB<ai<af>>"),n:x("ah<jW>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("iq"),e:x("iQ1"),af:x("Fy"),U:x("jW"),b:x("cr"),C:x("aH"),aK:x("x4"),ab:x("Gl"),br:x("axf"),v:x("Zq"),N:x("o"),X:x("bq<G>"),Q:x("mx"),D:x("dG"),aw:x("b9<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cc<ah<jW>>"),aW:x("cc<dG?>"),aY:x("cc<~>"),cx:x("aeK"),b1:x("bo<ah<jW>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFI"),bG:x("aIZ"),q:x("l6"),B:x("q9<Gl>"),c6:x("q9<abT>"),y:x("P"),i:x("G"),z:x("@"),S:x("F"),aQ:x("bn?"),_:x("ah<jW>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jW?"),R:x("aH?"),c:x("Zq?"),d:x("+answerQr,transfer(o,az<ah<jW>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,OZ,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aer?"),bk:x("aFI?"),ag:x("aIZ?"),dd:x("G?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b9R=new A.ax(C.aB,2,C.r,-1)
D.ce_=new A.a6(C.a5,C.a9,C.w,C.a6V,null,null)
D.bbs=new A.p(null,null,null,C.n2,null,D.ce_,C.m)
D.bcX=new A.p(null,null,null,C.n2,null,E.J9,C.m)
D.aim=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajS=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akV=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amL=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h3H=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hiQ=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FU,null,null,null,null,null,null,null,null,null)
D.dtS=x([D.h3H,C.aj,D.hiQ],y.p)
D.bCi=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dtS,null)
D.hnv=new A.D("Create your organization",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h8k=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FU,null,null,null,null,null,null,null,null,null)
D.dMN=x([D.hnv,C.aj,D.h8k],y.p)
D.bCs=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dMN,null)
D.hjv=new A.D("Team Member sign-in",null,C.fT,null,null,null,null,null,null,null,null,null)
D.hcl=new A.D("Enter the access code and password from your organization.",null,H.FU,null,null,null,null,null,null,null,null,null)
D.dKd=x([D.hjv,C.aj,D.hcl],y.p)
D.bCC=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dKd,null)
D.bIT=new A.R(16,10,16,28)
D.bKg=new A.R(20,0,20,16)
D.bKN=new A.R(20,8,20,16)
D.apI=new A.R(24,22,24,20)
D.a4X=new A.a_(63394,"MaterialIcons",!1)
D.asZ=new A.a_(63515,"MaterialIcons",!1)
D.bYk=new A.a_(983813,"MaterialIcons",!1)
D.bVq=new A.a_(62867,"MaterialIcons",!1)
D.bZm=new A.ae(D.bVq,44,C.c,null,null,null)
D.c_t=new A.ae(C.ko,null,C.ab,null,null,null)
D.c0T=new A.ae(C.jJ,18,null,null,null,null)
D.c2N=new A.ae(D.a4X,26,C.c,null,null,null)
D.c3p=new A.ae(C.E4,null,null,null,null,null)
D.c40=new A.ae(C.Ea,null,null,null,null,null)
D.c5e=new A.ae(A_.a56,null,null,null,null,null)
D.c5B=new A.ae(C.i5,16,null,null,null,null)
D.c9k=new A.ae(C.u_,16,null,null,null,null)
D.bZE=new A.ae(C.mC,null,null,null,null,null)
D.cac=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4z=new A.ae(C.Ip,null,null,null,null,null)
D.cah=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c4z,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c_0=new A.ae(C.Ed,null,null,null,null,null)
D.cas=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c_0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.d_I=x([C.fz,C.b8,C.aB],y.O)
D.cfY=new A.a6(C.aw,C.aD,C.w,D.d_I,null,null)
D.d_2=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.TG=x([C.fz,C.aB],y.O)
D.TY=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nw=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dDL=x([C.ne,C.aB],y.O)
D.eDI={iceServers:0}
D.aOY={urls:0}
D.dQK=new A.bl(D.aOY,["stun:stun.l.google.com:19302"],y.o)
D.dQJ=new A.bl(D.aOY,["stun:stun1.l.google.com:19302"],y.o)
D.di3=x([D.dQK,D.dQJ],A.as("N<a9<o,o>>"))
D.dPP=new A.bl(D.eDI,[D.di3],A.as("bl<o,@>"))
D.Kj=new B.OZ(0,"lanDirect")
D.Vm=new B.OZ(1,"cloudStash")
D.e6K=new B.OZ(2,"inlineInstant")
D.Vn=new B.OZ(3,"webrtcLink")
D.Bd=new B.OZ(4,"videoCloud")
D.hiP=new A.D("Receive file",null,C.mX,null,null,null,null,null,null,null,null,null)
D.cPw=x([E.auO,C.aa,D.hiP],y.p)
D.fww=new A.c_(C.aJ,C.bc,C.i,C.l,null,C.p,null,0,D.cPw,null)
D.eLj=new A.C(C.cq,D.fww,null)
D.fUU=new A.H(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.JE,null,null,null)
D.h4k=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fUU,null,C.K,null,null,null,null,null,null,null)
D.eKr=new A.C(C.zL,D.h4k,null)
D.bhx=new A.cp(C.z,null,null,D.eKr,null)
D.eRE=new A.cS(0,null,0,28,null,null,D.bhx,null)
D.eRY=new B.abT(0,"RTCDataChannelConnecting")
D.aUu=new B.abT(1,"RTCDataChannelOpen")
D.aUv=new B.abT(3,"RTCDataChannelClosed")
D.eRZ=new B.Gm(0,"RTCIceConnectionStateNew")
D.eS_=new B.Gm(1,"RTCIceConnectionStateChecking")
D.eS0=new B.Gm(2,"RTCIceConnectionStateCompleted")
D.eS1=new B.Gm(3,"RTCIceConnectionStateConnected")
D.eS2=new B.Gm(4,"RTCIceConnectionStateCount")
D.eS3=new B.Gm(5,"RTCIceConnectionStateFailed")
D.eS4=new B.Gm(6,"RTCIceConnectionStateDisconnected")
D.aUw=new B.Gm(7,"RTCIceConnectionStateClosed")
D.aUx=new B.Zp(0,"RTCIceGatheringStateNew")
D.eS5=new B.Zp(1,"RTCIceGatheringStateGathering")
D.abD=new B.Zp(2,"RTCIceGatheringStateComplete")
D.abE=new B.Q9(0,"RTCPeerConnectionStateClosed")
D.aUy=new B.Q9(1,"RTCPeerConnectionStateFailed")
D.aUz=new B.Q9(2,"RTCPeerConnectionStateDisconnected")
D.aUA=new B.Q9(3,"RTCPeerConnectionStateNew")
D.aUB=new B.Q9(4,"RTCPeerConnectionStateConnecting")
D.aUC=new B.Q9(5,"RTCPeerConnectionStateConnected")
D.eS6=new B.Qa(0,"RTCSignalingStateStable")
D.eS7=new B.Qa(1,"RTCSignalingStateHaveLocalOffer")
D.eS8=new B.Qa(2,"RTCSignalingStateHaveRemoteOffer")
D.eS9=new B.Qa(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eSa=new B.Qa(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aUD=new B.Qa(5,"RTCSignalingStateClosed")
D.fBG=new A.av(160,48)
D.biO=new A.fp(2,null,null,null,null,C.aB,null,null,null,null)
D.fDe=new A.a4(16,16,D.biO,null)
D.h7F=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fEL=new A.b3(D.h7F,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hfq=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fEP=new A.b3(D.hfq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoz=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fEW=new A.b3(D.hoz,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h7e=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fFl=new A.b3(D.h7e,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjH=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aXT=new A.b3(D.hjH,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlc=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fFP=new A.b3(D.hlc,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hq6=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fG5=new A.b3(D.hq6,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hnZ=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fGa=new A.b3(D.hnZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hpg=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fGY=new A.b3(D.hpg,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5O=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fHv=new A.b3(D.h5O,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hhm=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fHQ=new A.b3(D.hhm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.ha0=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fIm=new A.b3(D.ha0,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hqb=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fIq=new A.b3(D.hqb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h63=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fIw=new A.b3(D.h63,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4H=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fIL=new A.b3(D.h4H,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1j=new A.D("NGMY DOC SHARE",null,C.aZm,null,null,null,null,null,null,null,null,null)
D.h2L=new A.D("Show this to sender",null,C.iY,null,null,null,null,null,null,null,null,null)
D.h3P=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h8M=new A.D("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h99=new A.D("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hab=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.haJ=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdC=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hgt=new A.D("Send to their Doc Share",null,C.mV,null,null,null,null,null,null,null,null,null)
D.hgN=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hh8=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hhK=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hhR=new A.D("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hif=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hlK=new A.D("Share files & videos\nwith a scan.",null,C.aZp,null,null,null,null,null,null,null,null,null)
D.hm3=new A.D("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hU8=new B.a0p(null)
D.af5=new B.aeK(0,"docShare")
D.af6=new B.aeK(1,"gate")
D.Yp=new B.aeK(2,"gateNoIndividual")})();(function staticFields(){$.aRY=null
$.fA2=function(){var x=y.N
return A.S(x,x)}()
$.HB=A.S(y.N,y.D)
$.aiU=A.S(y.N,A.as("ml"))
$.ST=A.S(y.N,y.D)
$.fAN=A.S(y.N,A.as("aer"))
$.ci2=A.S(y.S,A.as("bBc"))
$.hF7=1
$.iwc=null
$.iwb=null
$.imK=null
$.htj=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iQx","hYB",()=>new B.cwi())
x($,"iOq","hxD",()=>C.a.q(A.by(A.by(A.by(A.I6(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["DaGfXvybgX522dede0rnHsSKsy4="]=a.current})($__dart_deferred_initializers__);