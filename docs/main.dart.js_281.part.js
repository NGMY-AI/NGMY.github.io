((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cp3:function cp3(){},
hS6(d){var x=null,w=new B.b5a(d,D.esI,new A.pC(x,x,y.c6),new A.pC(x,x,y.B))
w.bA4(d)
return w},
b5a:function b5a(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
coZ:function coZ(d){this.a=d},
cp_:function cp_(d){this.a=d},
cp0:function cp0(d){this.a=d},
coY:function coY(d){this.a=d},
cp1:function cp1(d){this.a=d},
hS7(d,e){var x=y.N
x=new B.b5b(d,e,A.U(x,y.e),A.U(x,y.z))
x.bA5(d,e)
return x},
b5b:function b5b(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cp4:function cp4(d){this.a=d},
cp5:function cp5(d){this.a=d},
cp6:function cp6(d){this.a=d},
cp7:function cp7(d){this.a=d},
cp8:function cp8(d){this.a=d},
cp9:function cp9(d){this.a=d},
cpa:function cpa(d){this.a=d},
cpb:function cpb(d){this.a=d},
h7q(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zb.Mk(x,"ngmy_doc_share_v1",new B.frB(),1)},
hYH(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cm(d))
if(y.J.b(d))return new Uint8Array(A.cm(J.eI(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cm(A.yl(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cF.aN(d)
return x}catch(w){return v}return v},
Ry(d,e){return B.idi(d,e)},
idi(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ry=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aOF
x=7
return A.b(o==null?$.aOF=B.h7q():o,$async$Ry)
case 7:s=g
r=new Uint8Array(A.cm(e))
q=J.mU(s,"blobs","readwrite")
C.j0.mq(J.mT(q,"blobs"),r,d)
x=8
return A.b(J.pK(q),$async$Ry)
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
return A.i($async$Ry,w)},
Rx(d){return B.idh(d)},
idh(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aOF
x=7
return A.b(o==null?$.aOF=B.h7q():o,$async$Rx)
case 7:s=f
r=J.mU(s,"blobs","readonly")
x=8
return A.b(C.j0.zH(J.mT(r,"blobs"),d),$async$Rx)
case 8:q=f
x=9
return A.b(J.pK(r),$async$Rx)
case 9:o=B.hYH(q)
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
return A.i($async$Rx,w)},
ahk(d){return B.idg(d)},
idg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aOF
x=7
return A.b(p==null?$.aOF=B.h7q():p,$async$ahk)
case 7:s=f
r=J.mU(s,"blobs","readwrite")
C.j0.G1(J.mT(r,"blobs"),d)
x=8
return A.b(J.pK(r),$async$ahk)
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
return A.i($async$ahk,w)},
frB:function frB(){},
i06(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bpY(w,v))}return u},
hxK(d,e){var x,w={},v=A.aXe("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fPW(w,v,e)
C.wx.yG(v,"change",new B.fPY(w,v,!1))
C.wx.yG(v,"cancel",new B.fPX(w))
$.eX.mw()
v.click()
A.bP(C.aji,new B.fPV(w),y.H)},
fPW:function fPW(d,e,f){this.a=d
this.b=e
this.c=f},
fPY:function fPY(d,e,f){this.a=d
this.b=e
this.c=f},
fPX:function fPX(d){this.a=d},
fPV:function fPV(d){this.a=d},
Di(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Di=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd_()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gU6()?3:4
break
case 3:x=5
return A.b(B.hsM(e,d,s,!0,!1,f,g,h,!1,i),$async$Di)
case 5:x=1
break
case 4:x=6
return A.b(B.Rd(d,s,f,g,h,i),$async$Di)
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
return A.b(B.IP(s,d),$async$Di)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fnb(s,d),$async$Di)
case 14:x=12
return A.b(r.hsM(q,p,o,n,m,l,k,j,a1,i),$async$Di)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cc(A.e0(new B.fQa(s,i,d,f,g,h),!1,null,y.H)),$async$Di)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cc(A.e0(new B.fQb(s,i,d,f,g,h),!1,null,y.H)),$async$Di)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Di,w)},
Rd(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Rd=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_V(e),$async$Rd)
case 3:u=k
x=4
return A.b(B.apN(d,e,!1),$async$Rd)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IP(e,d),$async$Rd)
case 7:if(k){v=D.abd
x=1
break}x=8
return A.b(B.Vi(e),$async$Rd)
case 8:v=t?D.VO:D.abe
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_T(d,e)){v=D.abd
x=1
break}x=11
return A.b(B.Vi(e),$async$Rd)
case 11:v=t?D.VO:D.abe
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h2r(d,e)){v=D.abd
x=1
break}x=14
return A.b(B.Vi(e),$async$Rd)
case 14:v=D.VO
x=1
break
case 13:v=t?D.VO:D.abe
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Rd,w)},
fnb(d,e){var x=0,w=A.j(y.y),v
var $async$fnb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_T(e,d)){v=!1
x=1
break}x=3
return A.b(B.b_V(d),$async$fnb)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fnb,w)},
hsM(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cc(A.e0(new B.fu7(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hnO(d,e,f,g,h,i,j){return new B.Zx(e,j,d,g,h,i,f,null)},
fw3(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fw3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
x=3
return A.b(A.bU(C.L,null,new B.fw6(A.P(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fw3)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fw3,w)},
fwy(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fwy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.as(C.at,u)
s=new A.as(C.at,u)
r=new A.as(C.at,u)
x=3
return A.b(A.bU(C.L,null,new B.fwA(A.P(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fwy)
case 3:q=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
r.T$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fwy,w)},
h7A(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bt(x,new A.b5(4,A.n(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fIs(d,e){var x=0,w=A.j(y.H),v
var $async$fIs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Vi(e),$async$fIs)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eM()
case 1:return A.h(v,w)}})
return A.i($async$fIs,w)},
fQa:function fQa(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fQb:function fQb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acy:function acy(d,e){this.a=d
this.b=e},
fu7:function fu7(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zx:function Zx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aAb:function aAb(){this.c=this.a=this.d=null},
d8P:function d8P(d,e){this.a=d
this.b=e},
d8M:function d8M(d){this.a=d},
d8O:function d8O(d){this.a=d},
d8N:function d8N(d){this.a=d},
d8R:function d8R(){},
d8Q:function d8Q(d){this.a=d},
ad0:function ad0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCO:function aCO(d,e){this.a=d
this.b=e},
aFW:function aFW(d,e,f){this.a=d
this.b=e
this.c=f},
fw6:function fw6(d,e,f){this.a=d
this.b=e
this.c=f},
fw4:function fw4(d){this.a=d},
fw5:function fw5(d,e,f){this.a=d
this.b=e
this.c=f},
fwA:function fwA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fwz:function fwz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ccc(d,e,f,g,h){return B.hN0(d,e,f,g,h)},
hN0(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$ccc=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iU(r.dF(d,new B.ccd(s,e,h,g,f,q),y.g),y.l),$async$ccc)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gS(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccc,w)},
b_Q(d,e,f,g,h){return B.hN1(d,e,f,g,h)},
hN1(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_Q=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.avi("GET",d)
o=A.fZR()
if(o==null)o=new A.M5(A.a([],y.W))
x=7
return A.b(o.f5(0,s).da(0,C.G3),$async$b_Q)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Cu(),$async$b_Q)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BX(q,h,o,e,f,"Received via QR")
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
return A.i($async$b_Q,w)},
b_P(d){return B.hMZ(d)},
hMZ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_P=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vy(d,null).da(0,C.oa),$async$b_P)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aL(0,A.m3(A.m1(p.e)).cB(0,p.w),null)
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
return A.i($async$b_P,w)},
ccb(d){return B.hN_(d)},
hN_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$ccb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vy(d,null).da(0,C.qd),$async$ccb)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m3(A.m1(q.e)).cB(0,q.w)
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
return A.i($async$ccb,w)},
ccd:function ccd(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jw:function jw(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
IN(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hN6(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IN(C.a.b5(u,v.length))}return null},
hN7(d){var x=B.IN(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hN2(){var x,w=$.of(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.ap(10)
return C.d.hk(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(24)]},
a7c(d){return B.hN3(d)},
hN3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a7c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a7c)
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
return A.i($async$a7c,w)},
a7d(d,e){return B.hN4(d,e)},
hN4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a7d=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hM(d,e,!1,!1,C.cG,null),$async$a7d)
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
return A.i($async$a7d,w)},
BW(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BW)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IN(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a7e(r),$async$BW)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a7c("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BW)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IN(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BW)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hN2()
x=14
return A.b(B.a7e(m),$async$BW)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a7().ae()
x=15
return A.b(B.a7d("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BW)
case 15:k=f
x=16
return A.b(B.a7d("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.H(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BW)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BW)
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
return A.i($async$BW,w)},
a7e(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a7e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IN(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a7c("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a7e)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7e,w)},
a7f(d,e,f,g){return B.hN8(d,e,f,g)},
hN8(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a7f=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IN(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a7e(r),$async$a7f)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.ccj())>1048576||g.b3(d,new B.cck())){v=B.EP(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7q("myCode",d,a0),$async$a7f)
case 4:u=a3
try{t=C.X.aL(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.ct(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.EP(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b_Y(u,g.gL(d),a0),$async$a7f)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.of().ap(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.ccl(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_R(A.H(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],i,y.z),q),$async$a7f)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7f,w)},
EP(d,e,f,g,h){return B.hN5(d,e,f,g,h)},
hN5(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EP=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$EP)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.ccf())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.of().ap(9999)
h=Date.now()
g=""+1000*h+"_"+C.cK.ap(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gS(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.IR(a9,q)
a0=new A.KG(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$EP)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aW(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p9(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaP(a1.a,a4,"media",a1.d,a2).xh(m,n,new A.E6(!0,q.c)),$async$EP)
case 12:J.ca(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$EP)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aRc(r),$async$EP)
case 16:v=!1
x=1
break
case 15:f.push(A.H(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.ccg(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_R(A.H(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],e,d),a8),$async$EP)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aRc(r),$async$EP)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EP,w)},
b_R(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a7c(t),$async$b_R)
case 3:s=g
r=y.aL.a(J.r(s==null?A.H(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cce(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a7d(t,A.H(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_R,w)},
NJ(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NJ=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a7c("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NJ)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.ct(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gS(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b_S(k,a0),$async$NJ)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b_X(h),$async$NJ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vp(g,a0),$async$NJ)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Z(r,new B.cch(),q),n)
d=A.C(new A.Z(r,new B.cci(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d_(d,0,A.dA(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a7d("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.H(["deliveries",q],p,o)),$async$NJ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NJ,w)},
b_S(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ct(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gS(u)
if(!r.b(p)){x=3
break}o=J.a6(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ih8(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dg(l,m,"Received via My Code",t,e,i),$async$b_S)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aRc(s),$async$b_S)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_S,w)},
ccj:function ccj(){},
cck:function cck(){},
ccl:function ccl(){},
ccf:function ccf(){},
ccg:function ccg(){},
cce:function cce(){},
cch:function cch(){},
cci:function cci(){},
fQ7(d,e){var x=0,w=A.j(y.H)
var $async$fQ7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cc(A.e0(new B.fQ8(e),!1,null,y.H)),$async$fQ7)
case 2:return A.h(null,w)}})
return A.i($async$fQ7,w)},
bEN(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bEN=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ct(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cc(A.e0(new B.fQ9(g,e,f),!1,null,y.y)),$async$bEN)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bEN,w)},
fQ8:function fQ8(d){this.a=d},
fQ9:function fQ9(d,e,f){this.a=d
this.b=e
this.c=f},
Vf:function Vf(d,e){this.c=d
this.a=e},
aE9:function aE9(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dUO:function dUO(d,e){this.a=d
this.b=e},
Vj:function Vj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEc:function aEc(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dVX:function dVX(d){this.a=d},
dVY:function dVY(d){this.a=d},
dVZ:function dVZ(d){this.a=d},
dVW:function dVW(d,e){this.a=d
this.b=e},
dW_:function dW_(d){this.a=d},
dW0:function dW0(d){this.a=d},
dW1:function dW1(d,e){this.a=d
this.b=e},
dW2:function dW2(d,e){this.a=d
this.b=e},
dW3:function dW3(d,e){this.a=d
this.b=e},
dW4:function dW4(d){this.a=d},
dW7:function dW7(){},
dW5:function dW5(d){this.a=d},
dW6:function dW6(d,e){this.a=d
this.b=e},
bk8:function bk8(){},
Vg:function Vg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aEa:function aEa(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dUP:function dUP(d){this.a=d},
dUQ:function dUQ(d){this.a=d},
h2s(d){var x=d.i0
if(x>=0)return C.o.N(x)
return 10},
hNa(d){var x=d.kX
if(x>=0)return x
return 4.99},
hN9(d){var x=d.ly,w=y.N
w=x.ji(x,new B.ccn(),w,w)
return w},
hiT(d){var x=d.kY,w=y.N
w=x.ji(x,new B.cco(),w,w)
return w},
b_V(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b_V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b_V)
case 7:s=f
r=A.w(p)
r=A.aT(J.r(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b_V,w)},
a7h(d,e){var x=0,w=A.j(y.H),v,u
var $async$a7h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a7h)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a7h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a7h,w)},
Vi(d){var x=0,w=A.j(y.H),v,u
var $async$Vi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Vi)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Vi)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Vi,w)},
h2r(d,e){var x,w,v
if(B.hNa(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hN9(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bk(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b_T(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hiT(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bk(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hiU(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hiT(d),x,x)
x=w.h(0,t)
v=A.bk(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dC(f,0,0,0,0,0).a).a7().ae())
d.kY=w},
apO(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apO)
case 7:s=f
r=A.w(p)
r=A.eC(J.r(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apO,w)},
apP(d){var x=0,w=A.j(y.H),v,u,t
var $async$apP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apO(d),$async$apP)
case 3:u=f
x=5
return A.b(A.az(),$async$apP)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$apP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apP,w)},
apN(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h2s(d)
if(u<=0){v=!1
x=1
break}if(B.h2r(d,e)){v=!1
x=1
break}x=3
return A.b(B.apO(e),$async$apN)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apN,w)},
b_U(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_U=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IP(e,d),$async$b_U)
case 3:if(g){v=-1
x=1
break}u=B.h2s(d)
if(u<=0){v=-1
x=1
break}if(B.h2r(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apO(e),$async$b_U)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_U,w)},
ccq(d,e,f){var x=0,w=A.j(y.y),v
var $async$ccq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IP(e,d),$async$ccq)
case 3:if(h){v=!1
x=1
break}v=B.apN(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccq,w)},
ccp(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ccp=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd_()
x=3
return A.b(B.ccq(d,u,i.gU6()),$async$ccp)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccp,w)},
a7g(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a7g=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd_()
if(i.gU6()){v=!0
x=1
break}if(B.b_T(d,u)){v=!0
x=1
break}x=5
return A.b(A.lt(u,C.T_),$async$a7g)
case 5:x=k?3:4
break
case 3:B.hiU(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a7g)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l6(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.T_,"Doc Share for Organizations"),$async$a7g)
case 7:if(!k){v=!1
x=1
break}B.hiU(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a7g)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7g,w)},
ccn:function ccn(){},
cco:function cco(){},
fR_(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fR_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fR_)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fjM.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hN([r],e.c))
s.toString
$.fjM.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fR_,w)},
ijt(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fjM.bs($.fjM,new B.fR1(d))},
fR1:function fR1(d){this.a=d},
fle(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fle=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hN([d],f))
s.toString
u=A.mW(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.je,null,y.H),$async$fle)
case 3:C.AF.fm(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mw()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fle,w)},
aga(d,e,f){var x=0,w=A.j(y.H),v
var $async$aga=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fkk.n(0,d,new B.acf(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$aga)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.X.aq(A.H(["parts",e,"size",f],v,y.C),null)),$async$aga)
case 2:return A.h(null,w)}})
return A.i($async$aga,w)},
ag4(d){return B.i23(d)},
i23(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ag4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fkk.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$ag4)
case 3:u=j.aT(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aL(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.ct(s)){v=null
x=1
break}o=J.b6(s,new B.foM(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.acf(r)
$.fkk.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ag4,w)},
R3(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$R3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cm(e))
$.GA.n(0,d,u)
x=3
return A.b(B.Ry(d,u),$async$R3)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R3,w)},
aP1(d){return B.i21(d)},
i21(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aP1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.GA.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.Rx(d),$async$aP1)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.GA.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aP1)
case 4:s=f
r=A.aT(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aN(r)
x=!J.ct(q)?9:10
break
case 9:B.R3(d,q)
x=11
return A.b(J.hC(s,d),$async$aP1)
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
return A.i($async$aP1,w)},
hZ6(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.cm(J.eI(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.cm(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.cm(A.yl(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.cm(d)),y.K)
return A.f8(null,y.K)},
a22(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a22=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bi($.bB,y.cf)
t=new A.c_(u,y.aW)
s=y.aK
A.fz(r,"loadend",new B.fuj(r,t),!1,s)
A.fz(r,"error",new B.fuk(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ix(0,C.Nb,new B.ful())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a22,w)},
aPl(d,e,f){return B.i4k(d,e,f)},
i4k(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aPl=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a22(i),$async$aPl)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Ry(o,p),$async$aPl)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.ca(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aga(k,j,s),$async$aPl)
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
return A.i($async$aPl,w)},
aPk(d,e,f){return B.i4j(d,e,f)},
i4j(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aPk=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aPl(d,e,f),$async$aPk)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a22(f),$async$aPk)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.GA.n(0,s,r)
$.Rk.n(0,s,r)
x=11
return A.b(B.R3(s,r),$async$aPk)
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
return A.i($async$aPk,w)},
BX(d,e,f,g,h,i){return B.hNj(d,e,f,g,h,i)},
hNj(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BX=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cK.ap(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jw(p,q,o,n,new A.V(Date.now(),0,!1).a7().ae(),a0,f,B.b00(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.R3(s,d),$async$BX)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BX)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cJ.gct().aN(d)),$async$BX)
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
return A.b(B.AU(e),$async$BX)
case 12:j=a2
J.ca(j,m)
x=13
return A.b(B.GL(e,j),$async$BX)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BX,w)},
Vk(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vk=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AU(d),$async$Vk)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cK.ap(99999)
n=p.b
l=o.type
l.toString
k=B.hiW(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a7().ae()
i=new B.jw(m,n,k,l,j,"From folder",null,B.b00(),null)
$.agE.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a22(o),$async$Vk)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.GA.n(0,h,g)
$.Rk.n(0,h,g)
B.R3(h,g)
x=9
break
case 10:x=11
return A.b(B.aPk(d,m,o),$async$Vk)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GL(d,t),$async$Vk)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vk,w)},
h2w(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h2w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hiW(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IQ(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BX(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2w,w)},
IQ(d,e,f,g,h,i){return B.hNi(d,e,f,g,h,i)},
hNi(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IQ=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cK.ap(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KG(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IQ)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.ct(m)){x=6
break}J.h9(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cm(J.S7(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kD(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Ry(k,l),$async$IQ)
case 11:J.ca(q,k);++p
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
return A.b(j.a4(0),$async$IQ)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Ry(k,new Uint8Array(A.cm(n))),$async$IQ)
case 15:J.ca(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aga(r,q,g),$async$IQ)
case 16:f=new B.jw(i,a1,a0,g,new A.V(Date.now(),0,!1).a7().ae(),a2,null,B.b00(),null)
x=17
return A.b(B.AU(d),$async$IQ)
case 17:e=a6
J.ca(e,f)
x=18
return A.b(B.GL(d,e),$async$IQ)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IQ,w)},
Vm(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vm=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agE.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a22(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ag4(s),$async$Vm)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Rx(u[o]),$async$Vm)
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
v=A.yl(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Rk.h(0,s)
if(i==null)i=$.GA.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rF(d,e),$async$Vm)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rk.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.yl(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vm,w)},
hiW(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gak(x):""
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
rF(d,e){return B.hNk(d,e)},
hNk(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rF=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rk.h(0,f)
if(e==null)e=$.GA.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agE.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a22(s),$async$rF)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.GA.n(0,f,r)
$.Rk.n(0,f,r)
B.R3(f,r)
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
return A.b(B.ag4(f),$async$rF)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayV(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Rx(g[l]),$async$rF)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.aoU()
if(!C.aG.gan(r)){$.GA.n(0,f,r)
$.Rk.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aP1(f),$async$rF)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rk.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vm(a0,a1,0,g),$async$rF)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.cm(i))
$.GA.n(0,f,h)
$.Rk.n(0,f,h)
B.R3(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rF,w)},
hNn(d){var x,w,v=$.agE.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hNo(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hN([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hNl(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apV(d,e,f,g,h){return B.hNm(d,e,f,g,h)},
hNm(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apV=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agE.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a22(s),$async$apV)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rF(g,e),$async$apV)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f_().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ir(d).xh(h,r,new A.E6(!0,e.c)),$async$apV)
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
return A.i($async$apV,w)},
hiY(d,e,f,g,h){var x,w,v,u,t=$.hiX
$.hiX=t+1
x=Date.now()
w=""+1000*x+"_"+C.cK.ap(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ccB.n(0,t,new B.bwP(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayV(u)))
return t},
h2x(d){var x=0,w=A.j(y.H)
var $async$h2x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h2x,w)},
IR(d,e){var $async$IR=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agE.h(0,h)
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
return A.qj(B.Vm(d,e,p,o<q?o:q),$async$IR,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qj(A.G7(n),$async$IR,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qj(B.ag4("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IR,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qj(B.Rx(h[l]),$async$IR,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qj(A.G7(k),$async$IR,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qj(B.rF(d,e),$async$IR,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qj(A.G7(A.yl(j,p,o<i?o:i)),$async$IR,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qj(null,0,w)
case 2:return A.qj(t.at(-1),1,w)}})
var x=0,w=A.hrF($async$IR,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.htv(w)},
b02(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b02=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ccB.h(0,d)
if(t==null||J.ct(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a5f(),$async$b02)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b02,w)},
Vl(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccB.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5f(),$async$Vl)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aga(r.c,u,r.z),$async$Vl)
case 4:t=new B.jw(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a7().ae(),r.f,r.r,B.b00(),null)
u=r.a
x=5
return A.b(B.AU(u),$async$Vl)
case 5:s=f
J.ca(s,t)
x=6
return A.b(B.GL(u,s),$async$Vl)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vl,w)},
a7n(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ccB.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahk(u[s]),$async$a7n)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.aa(0)
case 1:return A.h(v,w)}})
return A.i($async$a7n,w)},
ccD(d,e,f){var x=0,w=A.j(y.H)
var $async$ccD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBO(d,e,f),$async$ccD)
case 2:return A.h(null,w)}})
return A.i($async$ccD,w)},
ccE(d,e,f){var x=0,w=A.j(y.H)
var $async$ccE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bBP(d,e,f),$async$ccE)
case 2:return A.h(null,w)}})
return A.i($async$ccE,w)},
EQ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AU(d),$async$EQ)
case 2:p=g
J.nE(p,new B.ccC(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.GA.W(0,v)
$.agE.W(0,e)
x=3
return A.b(B.ag4(v),$async$EQ)
case 3:u=g
$.fkk.W(0,v)
x=4
return A.b(A.az(),$async$EQ)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$EQ)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$EQ)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahk(s[q]),$async$EQ)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahk(v),$async$EQ)
case 13:x=14
return A.b(B.GL(d,p),$async$EQ)
case 14:return A.h(null,w)}})
return A.i($async$EQ,w)},
b01(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b01=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rF(d,e),$async$b01)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fle(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b01,w)},
AU(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AU)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aL(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fum(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AU,w)},
GL(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GL)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fys(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.X.aq(t,null)),$async$GL)
case 3:return A.h(null,w)}})
return A.i($async$GL,w)},
bBO(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AU(d),$async$bBO)
case 3:u=h
t=J.cD(u)
s=t.bh(u,new B.fsw(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEN(f))
x=4
return A.b(B.GL(d,u),$async$bBO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBO,w)},
bBP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bBP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AU(d),$async$bBP)
case 3:u=h
t=J.cD(u)
s=t.bh(u,new B.fsx(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cLh(f))
x=4
return A.b(B.GL(d,u),$async$bBP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bBP,w)},
acf:function acf(d){this.a=d},
foM:function foM(){},
fuj:function fuj(d,e){this.a=d
this.b=e},
fuk:function fuk(d){this.a=d},
ful:function ful(){},
ccC:function ccC(d){this.a=d},
bwP:function bwP(d,e,f,g,h,i,j,k,l){var _=this
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
fum:function fum(){},
fys:function fys(){},
fsw:function fsw(d){this.a=d},
fsx:function fsx(d){this.a=d},
a7o(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.ccH())?3:4
break
case 3:x=5
return A.b(B.b03(d,e),$async$a7o)
case 5:u=g
if(u!=null){t=u.c
B.NL(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gI(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b_Z(s),$async$a7o)
case 10:case 9:if(g){v=new A.Qq(1,D.SD,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vn(d,e),$async$a7o)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vs(!0,!0,d,e),$async$a7o)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NL(d,D.zP,e,t)
v=new A.Qq(p,D.zP,t)
x=1
break}v=B.ccG(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7o,w)},
Vn(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7q(null,d,e),$async$Vn)
case 3:p=g
try{u=C.X.aL(0,p,null)
t=y.f.b(u)?J.r(u,"files"):null
if(!y.j.b(t)||J.ct(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b_Y(p,d.length,e),$async$Vn)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.ccE(e,C.d.gI(d).a,r.b),$async$Vn)
case 7:case 6:q=r.a
x=8
return A.b(B.NL(d,D.SD,e,q),$async$Vn)
case 8:v=new A.Qq(d.length,D.SD,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
Vo(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mB(D.mR)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7p(d,e),$async$Vo)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.ccz(s,d,e,t),$async$Vo)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b_Z(t),$async$Vo)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rF(e,d),$async$Vo)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vn(A.a([d],y.r),e),$async$Vo)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vo,w)},
Vq(){var x=0,w=A.j(y.H)
var $async$Vq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h2q(),$async$Vq)
case 2:x=3
return A.b(B.aRw(),$async$Vq)
case 3:return A.h(null,w)}})
return A.i($async$Vq,w)},
a7p(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b00()
x=3
return A.b(B.ccD(e,d.a,u),$async$a7p)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7p,w)},
NL(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NL=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.SD&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7p(p,f),$async$NL)
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
return A.b(B.ccy(o,p,u,f),$async$NL)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.ccz(o,p,f,t),$async$NL)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ccx(o,u,p,f),$async$NL)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NL,w)},
b03(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b03=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ccF(e,d),$async$b03)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vs(!1,!0,d,e),$async$b03)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qq(u.a,D.zP,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b03,w)},
ccF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$ccF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vm(d,s,0,1),$async$ccF)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.L)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccF,w)},
ccG(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$ccG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7q(null,d,e),$async$ccG)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hiV(u)
if(t.length>800){v=null
x=1
break}v=new A.Qq(d.length,D.dJL,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccG,w)},
apW(d,e,f){return B.hNr(d,e,f)},
hNr(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apW=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d2(g,"\ufeff"))g=J.ni(g,1)
x=B.h2v(g)?3:4
break
case 3:x=5
return A.b(B.ccA(g),$async$apW)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d2(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ni(g,13))
try{k=B.ER(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d2(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ni(g,13))
u=9
x=12
return A.b(B.b_X(q),$async$apW)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vp(p,a0)
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
case 11:case 7:if(J.d2(g,"NGMYDOCSYNC0|"))try{n=B.h2u(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vp(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d2(g,"N2|")){v=B.IS(C.a.i(J.ni(g,3)),d,a0)
x=1
break}if(J.d2(g,"NGMYDOCSYNC2|")){v=B.IS(C.a.i(J.ni(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.ar(k,0,k.length-1)
else h=k
v=B.IS(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vp(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apW,w)},
IS(d,e,f){return B.hNp(d,e,f)},
hNp(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IS=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.ar(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cH(A.w(s)+"/manifest.json",0,null)
q=A.cH(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_P(r),$async$IS)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_P(A.cH(s,0,null)),$async$IS)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.ct(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.ccc(o,r,a1,n,a2),$async$IS)
case 11:m=a4
x=J.ct(m)?12:13
break
case 12:x=14
return A.b(B.ccb(q),$async$IS)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vp(l,a2),$async$IS)
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
return A.i($async$IS,w)},
a7q(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.rF(f,r),$async$a7q)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.H(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aN(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a7().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.aq(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7q,w)},
Vp(d,e){return B.hNq(d,e)},
hNq(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vp=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aL(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.r(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.r(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.r(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.r(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gS(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BX(i,a3,d,k,l,o),$async$Vp)
case 9:h=a5
if(h!=null)J.ca(n,h)
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
return A.i($async$Vp,w)},
NK:function NK(d,e){this.a=d
this.b=e},
ccH:function ccH(){},
a1C(d){var x=A.P(d).ax.a===C.J,w=x?D.agH:D.aen,v=x?D.aik:C.c,u=x?C.aP:C.N,t=x?C.bM:C.al,s=x?D.afG:C.aN
return new A.aHb([w,s,v,u,t,x?C.ff:C.bP])},
hyB(d,e){var x=e?C.w.j(0.72):C.aS
return A.ck(null,x,!0,null,new B.fV8(e),d,null,!0,!0,y.N)},
ccm(d,e,f,g,h,i,j,k,l){return new B.Vh(e,l,d,f,k,j,g,h,i,null)},
Zz(d,e,f,g,h,i,j){return new B.beF(g,h,j,e,i,d,f,null)},
fV8:function fV8(d){this.a=d},
Zw:function Zw(d,e){this.c=d
this.a=e},
aAa:function aAa(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d8L:function d8L(d){this.a=d},
d8J:function d8J(d){this.a=d},
d8K:function d8K(d){this.a=d},
bwr:function bwr(){},
Vh:function Vh(d,e,f,g,h,i,j,k,l,m){var _=this
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
aEb:function aEb(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dVV:function dVV(d){this.a=d},
dVi:function dVi(d,e){this.a=d
this.b=e},
dVj:function dVj(d,e){this.a=d
this.b=e},
dUS:function dUS(d,e,f){this.a=d
this.b=e
this.c=f},
dUR:function dUR(d){this.a=d},
dUT:function dUT(d,e){this.a=d
this.b=e},
dUY:function dUY(d,e,f){this.a=d
this.b=e
this.c=f},
dUX:function dUX(d){this.a=d},
dVJ:function dVJ(d,e){this.a=d
this.b=e},
dVK:function dVK(d){this.a=d},
dVf:function dVf(d,e,f){this.a=d
this.b=e
this.c=f},
dVc:function dVc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dUW:function dUW(d){this.a=d},
dVn:function dVn(d){this.a=d},
dVm:function dVm(){},
dV1:function dV1(d){this.a=d},
dVG:function dVG(d,e){this.a=d
this.b=e},
dVH:function dVH(d,e){this.a=d
this.b=e},
dVI:function dVI(d,e){this.a=d
this.b=e},
dVd:function dVd(d,e){this.a=d
this.b=e},
dVe:function dVe(d,e){this.a=d
this.b=e},
dVz:function dVz(d,e){this.a=d
this.b=e},
dVv:function dVv(d){this.a=d},
dVu:function dVu(d){this.a=d},
dVw:function dVw(){},
dVx:function dVx(){},
dVy:function dVy(d,e){this.a=d
this.b=e},
dVA:function dVA(){},
dVB:function dVB(d){this.a=d},
dVt:function dVt(d,e){this.a=d
this.b=e},
dVo:function dVo(d){this.a=d},
dVp:function dVp(d){this.a=d},
dVq:function dVq(d){this.a=d},
dVr:function dVr(d){this.a=d},
dVs:function dVs(d){this.a=d},
dUZ:function dUZ(){},
dV_:function dV_(d){this.a=d},
dV0:function dV0(d,e){this.a=d
this.b=e},
dUV:function dUV(d,e){this.a=d
this.b=e},
dUU:function dUU(d,e,f){this.a=d
this.b=e
this.c=f},
dVg:function dVg(d){this.a=d},
dVh:function dVh(d,e,f){this.a=d
this.b=e
this.c=f},
dVa:function dVa(d,e){this.a=d
this.b=e},
dV6:function dV6(d){this.a=d},
dV3:function dV3(d,e,f){this.a=d
this.b=e
this.c=f},
dV7:function dV7(d){this.a=d},
dV8:function dV8(d){this.a=d},
dV9:function dV9(){},
dVb:function dVb(d,e){this.a=d
this.b=e},
dV4:function dV4(d){this.a=d},
dV2:function dV2(d,e,f){this.a=d
this.b=e
this.c=f},
dV5:function dV5(){},
dVl:function dVl(d){this.a=d},
dVk:function dVk(d,e){this.a=d
this.b=e},
dVF:function dVF(d,e){this.a=d
this.b=e},
dVC:function dVC(d){this.a=d},
dVD:function dVD(d,e){this.a=d
this.b=e},
dVE:function dVE(d){this.a=d},
dVS:function dVS(d){this.a=d},
dVQ:function dVQ(d){this.a=d},
dVR:function dVR(d){this.a=d},
dVT:function dVT(){},
dVU:function dVU(d,e){this.a=d
this.b=e},
dVM:function dVM(d,e){this.a=d
this.b=e},
dVN:function dVN(d,e,f){this.a=d
this.b=e
this.c=f},
dVL:function dVL(d,e,f){this.a=d
this.b=e
this.c=f},
dVO:function dVO(d,e){this.a=d
this.b=e},
dVP:function dVP(d,e){this.a=d
this.b=e},
aA7:function aA7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beE:function beE(d,e,f){this.c=d
this.d=e
this.a=f},
d8H:function d8H(){},
d8I:function d8I(){},
acz:function acz(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d94:function d94(){},
d93:function d93(d){this.a=d},
Zy:function Zy(d,e,f){this.c=d
this.d=e
this.a=f},
aAc:function aAc(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d90:function d90(d){this.a=d},
d91:function d91(d,e,f){this.a=d
this.b=e
this.c=f},
d92:function d92(d,e){this.a=d
this.b=e},
d8Z:function d8Z(d,e){this.a=d
this.b=e},
d8X:function d8X(d){this.a=d},
d8V:function d8V(d){this.a=d},
d8S:function d8S(d){this.a=d},
d8Y:function d8Y(d){this.a=d},
d8U:function d8U(d){this.a=d},
d9_:function d9_(d){this.a=d},
d8W:function d8W(d){this.a=d},
d8T:function d8T(d){this.a=d},
Zv:function Zv(d,e,f){this.c=d
this.d=e
this.a=f},
aA9:function aA9(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d8E:function d8E(d){this.a=d},
d8D:function d8D(d,e){this.a=d
this.b=e},
d8F:function d8F(d){this.a=d},
d8C:function d8C(d,e){this.a=d
this.b=e},
d8G:function d8G(d){this.a=d},
d8B:function d8B(d,e){this.a=d
this.b=e},
d8x:function d8x(d){this.a=d},
d8y:function d8y(d){this.a=d},
d8z:function d8z(d,e){this.a=d
this.b=e},
d8A:function d8A(d){this.a=d},
Q_:function Q_(d,e,f){this.c=d
this.d=e
this.a=f},
aAf:function aAf(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d9h:function d9h(d){this.a=d},
d9i:function d9i(d){this.a=d},
d9j:function d9j(d){this.a=d},
d9k:function d9k(d){this.a=d},
d9l:function d9l(d,e){this.a=d
this.b=e},
d9m:function d9m(d){this.a=d},
d9o:function d9o(d){this.a=d},
d9n:function d9n(d){this.a=d},
ZA:function ZA(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aAd:function aAd(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d9d:function d9d(d,e){this.a=d
this.b=e},
d9e:function d9e(d,e){this.a=d
this.b=e},
d95:function d95(d,e,f){this.a=d
this.b=e
this.c=f},
d96:function d96(d){this.a=d},
d97:function d97(){},
d9c:function d9c(){},
d98:function d98(d,e){this.a=d
this.b=e},
d99:function d99(d,e){this.a=d
this.b=e},
d9a:function d9a(d,e){this.a=d
this.b=e},
d9b:function d9b(d,e){this.a=d
this.b=e},
acx:function acx(d,e){this.c=d
this.a=e},
d8w:function d8w(d){this.a=d},
Zu:function Zu(d){this.a=d},
aA8:function aA8(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
ZB:function ZB(d,e){this.c=d
this.a=e},
aAe:function aAe(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d9g:function d9g(d){this.a=d},
d9f:function d9f(d){this.a=d},
beF:function beF(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hNs(){var x,w=$.of(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"VT"+C.d.hk(v)},
NM(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$NM)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NM)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NM,w)},
a7r(d){return B.hNt(d)},
hNt(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7r)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_video_relay_v1",A.H(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7r)
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
return A.i($async$a7r,w)},
Vr(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NM(),$async$Vr)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dR(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,d,t)
x=4
return A.b(B.a7r(s),$async$Vr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vr,w)},
Vs(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vs=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Vs)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.T(f).k("Z<1>")
u=A.C(new A.Z(f,new B.ccJ(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hNs()
t=A.T(u).k("N<1,a8<m,aD>>")
r=A.C(new A.N(u,new B.ccK(s),t),t.k("ak.E"))
x=6
return A.b(B.NM(),$async$Vs)
case 6:q=i
J.aI(q,s,A.H(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=7
return A.b(B.a7r(q),$async$Vs)
case 7:x=8
return A.b(B.a7s(r,u,g,s),$async$Vs)
case 8:v=new A.bqq(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vs,w)},
apX(d){var x=0,w=A.j(y.y),v,u,t
var $async$apX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NM(),$async$apX)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apX,w)},
ccL(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ccL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NM(),$async$ccL)
case 3:s=r.r(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccL,w)},
a7s(d,e,f,g){return B.hNu(d,e,f,g)},
hNu(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7s=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apV("media",r,new B.ccI(s,e,g),f,q),$async$a7s)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vr(g,A.H(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7s)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vr(g,A.H(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$a7s)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vr(g,A.H(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7s)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7s,w)},
ER(d,e,f){return B.hNv(d,e,f)},
hNv(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$ER=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$ER)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apX(b3),$async$ER)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iU,null,g),$async$ER)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apX(b3),$async$ER)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NM(),$async$ER)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ct(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gS(a2)
if(!a0.b(a7)){x=11
break}a8=J.a6(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f_().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p9(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaP(a8.a,b0,"media",a8.d,a9).CQ(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b_Q(k,n,o,s,b7),$async$ER)
case 17:j=c0
if(j!=null){J.ca(p,j);++q
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
g=a1.gag(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gS(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.r(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f_().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p9(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaP(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$ER)
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
a0=A.dR(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7r(e),$async$ER)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ER,w)},
ccJ:function ccJ(){},
ccK:function ccK(d){this.a=d},
ccI:function ccI(d,e,f){this.a=d
this.b=e
this.c=f},
aRw(){var x=0,w=A.j(y.H),v,u
var $async$aRw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hYs=null
v=y.H
u=A.dV(null,v)
x=2
return A.b(u,$async$aRw)
case 2:u=A.dV(null,v)
x=3
return A.b(u,$async$aRw)
case 3:u=$.h7N
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dV(u,v),$async$aRw)
case 4:$.h7N=$.i6c=$.i6d=null
return A.h(null,w)}})
return A.i($async$aRw,w)},
fy3(d){var x=0,w=A.j(y.H),v,u
var $async$fy3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a81){x=1
break}u=new A.bi($.bB,y.d4)
d.c=new B.fy4(new A.c_(u,y.aY))
x=3
return A.b(u.ix(0,C.i2,new B.fy5()),$async$fy3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fy3,w)},
i6a(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hNc(x):x},
h7R(d){var x=0,w=A.j(y.T),v,u,t
var $async$h7R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.apZ(u)
x=1
break}v=B.h2u(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7R,w)},
h7Q(d){var x=0,w=A.j(y.T),v,u,t
var $async$h7Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.aq_(u)
x=1
break}v=B.h2u(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7Q,w)},
fQK(d){var x=0,w=A.j(y.T),v
var $async$fQK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aq_(d),$async$fQK)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQK,w)},
bCH(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bCH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h7Q(d),$async$bCH)
case 3:q=f
if(q==null){x=1
break}t=C.X.aL(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCH,w)},
fm2(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fm2=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vl(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BX(d.aoU(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fm2,w)},
GN(d,e,f){return B.i8D(d,e,f)},
i8D(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GN=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h7R(a1),$async$GN)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aL(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a6(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b5(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hAu().aF2(D.dxU,null),$async$GN)
case 4:l=d.h7N=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayV(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bi($.bB,y.b1)
l.y=new B.fyB(f,k,new B.fyC(f,a2,k,j,a0,p),a2,j,a0,p,new A.c_(t,y.ch))
x=5
return A.b(l.a8b(0,new B.Xx(r,"offer")),$async$GN)
case 5:d=l
x=7
return A.b(l.alC(0),$async$GN)
case 7:x=6
return A.b(d.a83(0,a4),$async$GN)
case 6:x=8
return A.b(B.fy3(l),$async$GN)
case 8:x=9
return A.b(l.apF(),$async$GN)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i6a(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aq(A.H(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aq0(m,h),$async$GN)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hiV(h)
case 11:v=new A.bpI(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GN,w)},
fy4:function fy4(d){this.a=d},
fy5:function fy5(){},
fyC:function fyC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyB:function fyB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fyA:function fyA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iaz(d){switch(d){case"new":return D.esJ
case"checking":return D.esK
case"connected":return D.esM
case"completed":return D.esL
case"failed":return D.esO
case"disconnected":return D.esP
case"closed":return D.aOT
case"count":return D.esN}return D.aOT},
iaA(d){switch(d){case"new":return D.aOU
case"gathering":return D.esQ
case"complete":return D.a81}return D.aOU},
ikY(d){switch(d){case"stable":return D.esR
case"have-local-offer":return D.esS
case"have-local-pranswer":return D.esU
case"have-remote-offer":return D.esT
case"have-remote-pranswer":return D.esV
case"closed":return D.aP_}return D.aP_},
ija(d){switch(d){case"new":return D.aOX
case"connecting":return D.aOY
case"connected":return D.aOZ
case"closed":return D.a82
case"disconnected":return D.aOW
case"failed":return D.aOV}return D.a82},
a9M:function a9M(d,e){this.a=d
this.b=e},
OO:function OO(d,e){this.a=d
this.b=e},
Xw:function Xw(d,e){this.a=d
this.b=e},
ON:function ON(d,e){this.a=d
this.b=e},
Fk:function Fk(d,e){this.a=d
this.b=e},
cp2:function cp2(){},
h4f(d){var x=new B.Fj()
x.a=d
x.b=!0
return x},
Fj:function Fj(){this.b=this.a=$},
a9L:function a9L(){},
aus:function aus(){},
Xx:function Xx(d,e){this.a=d
this.b=e},
h2q(){var x=0,w=A.j(y.H)
var $async$h2q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h2q,w)},
h2t(d,e,f){var x=0,w=A.j(y.T),v
var $async$h2t=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mB(D.mR))){v=null
x=1
break}v=B.fR_(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h2t,w)},
hiV(d){var x,w=F.adN.a5_(C.dO.aN(d),null)
if(w.length===0){x=C.dO.aN(d)
return C.cJ.gct().aN(x)}return C.cJ.gct().aN(w)},
hNb(d){var x,w,v=C.cF.aN(d)
try{x=C.ch.cB(0,F.adM.be0(v,!1))
return x}catch(w){x=C.ch.cB(0,v)
return x}},
h2u(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hNb(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.ch.cB(0,C.cF.aN(x))
return v}catch(u){return x}}return null},
hNc(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a0(t,"a=extmap"))continue
if(C.a.a0(t,"a=ssrc"))continue
if(C.a.a0(t,"a=msid"))continue
if(C.a.a0(t,"a=rtcp"))continue
if(C.a.a0(t,"a=rtpmap"))continue
if(C.a.a0(t,"a=fmtp"))continue
if(C.a.a0(t,"a=rtcp-fb"))continue
if(C.a.a0(t,"a=mid:"))continue
if(C.a.a0(t,"a=group:"))continue
if(C.a.a0(t,"a=setup:"))continue
if(C.a.a0(t,"a=ice-options:"))continue
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hNd(){var x,w=$.of(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.ap(32)]
return"DS"+C.d.hk(v)},
b_W(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_W)
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
return A.i($async$b_W,w)},
ccr(d,e){return B.hNe(d,e)},
hNe(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ccr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$ccr)
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
return A.i($async$ccr,w)},
b_Z(d){var x=0,w=A.j(y.y),v,u,t
var $async$b_Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_W(d),$async$b_Z)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_Z,w)},
b_Y(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b_Y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hNd()
r=C.a.i(f)
t=C.dO.aN(s)
x=3
return A.b(B.ccr(u,A.H(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$b_Y)
case 3:if(!h){v=null
x=1
break}v=new A.a0D("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_Y,w)},
b_X(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b_X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_W(o),$async$b_X)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ch.cB(0,C.cF.aN(u))
if(J.j4(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b_X,w)},
ccs(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ccs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bDD("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$ccs)
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
return A.i($async$ccs,w)},
b0_(d){var x=0,w=A.j(y.h),v,u,t
var $async$b0_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IO(),$async$b0_)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0_,w)},
apS(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apS)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b0_(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apS,w)},
apQ(d,e){var x=0,w=A.j(y.H)
var $async$apQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apQ)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apQ)
case 2:return A.h(null,w)}})
return A.i($async$apQ,w)},
a7j(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7j)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IO(),$async$a7j)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.H(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=5
return A.b(A.a7i(s),$async$a7j)
case 5:x=6
return A.b(B.apQ(f,u),$async$a7j)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7j,w)},
a7k(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7k=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7k)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IO(),$async$a7k)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.r(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.aj(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.apQ(g,q),$async$a7k)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7i(u),$async$a7k)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7k,w)},
a7l(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7l)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IO(),$async$a7l)
case 4:u=o.r(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b_T(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7l)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.X.aq(A.H(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a7().ae()],p,p),null)),$async$a7l)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7l,w)},
cct(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cct=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cct)
case 7:s=f
p=A.w(n)
r=A.aT(J.r(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aL(0,r,null)
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
return A.i($async$cct,w)},
IP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cct(d),$async$IP)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b0_(t),$async$IP)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apR(d),$async$IP)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b_T(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apR(d),$async$IP)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IP,w)},
apR(d){var x=0,w=A.j(y.H)
var $async$apR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apR)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apR)
case 2:return A.h(null,w)}})
return A.i($async$apR,w)},
b00(){var x,w=$.of(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.ap(32)]
return C.d.hk(v)},
a7m(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h2v(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ccw(d){return B.hNg(d)},
hNg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ccw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7m(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$ccw)
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
return A.i($async$ccw,w)},
apU(d,e){return B.hNh(d,e)},
hNh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apU=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7m(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hM("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apU)
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
return A.i($async$apU,w)},
ccy(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccy=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7m(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apU(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$ccy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccy,w)},
ccx(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ccx=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7m(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apU(u,A.H(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$ccx)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ccx,w)},
ccz(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$ccz=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7m(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apU(u,A.H(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ccz,w)},
ccA(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$ccA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h2v(d)){v=null
x=1
break}x=3
return A.b(B.ccw(d),$async$ccA)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a6(u)
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
return A.i($async$ccA,w)},
a7t(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7t)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7t)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
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
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7t,w)},
apY(d){return B.hNw(d)},
hNw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$apY)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hM("ngmy_doc_share_webrtc_signal_v1",A.H(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$apY)
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
return A.i($async$apY,w)},
apZ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d2(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$apZ)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7t(),$async$apZ)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ch.cB(0,C.cF.aN(q))
if(J.j4(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.a2(r,m,l),m,l)
J.aI(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a7().ae())
J.aI(s,j,o)
x=9
return A.b(B.apY(s),$async$apZ)
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
return A.i($async$apZ,w)},
aq0(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aq0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$aq0)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7t(),$async$aq0)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.a2(s,r,q),r,q)
r=C.dO.aN(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a7().ae())
t.n(u,p,q)
x=5
return A.b(B.apY(u),$async$aq0)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aq0,w)},
aq_(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aq_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$aq_)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7t(),$async$aq_)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ch.cB(0,C.cF.aN(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aq_,w)},
aoV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.q8)){v=null
x=1
break}x=3
return A.b(p.m6(e),$async$aoV)
case 3:r=g
u=4
x=7
return A.b(r.hw(C.h9),$async$aoV)
case 7:q=g
o=q
o=o==null?null:J.eS(J.vH(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.q()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoV,w)},
ih8(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aW(C.o.u(w),5,"0")
return v},
fP1(d){return B.iha(d)},
iha(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fP1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ir("media").L5(d,3600),$async$fP1)
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
return A.i($async$fP1,w)},
Dg(d,e,f,g,h,i){var x=null
return B.ih7(d,e,f,g,h,i)},
ih7(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dg=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hiY(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h2x(r),$async$Dg)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fP1(o),$async$Dg)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7n(r),$async$Dg)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aSc)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M5(A.a([],g))
x=15
return A.b(d.f5(0,A.avi("GET",A.cH(n,0,null))).da(0,C.G3),$async$Dg)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7n(r),$async$Dg)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KG(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dg)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b02(r,k),$async$Dg)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Dg)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Vl(r)
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
return A.b(B.a7n(r),$async$Dg)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dg,w)},
aRc(d){return B.ih9(d)},
ih9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aRc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ir("media").W(0,d),$async$aRc)
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
return A.i($async$aRc,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[155]
O=c[46]
F=c[262]
I=c[147]
P=c[232]
E=c[224]
G=c[94]
Q=c[194]
R=c[148]
S=c[230]
K=c[267]
L=c[276]
B=a.updateHolder(c[22],B)
D=c[274]
T=c[193]
M=c[214]
U=c[73]
V=c[256]
W=c[79]
X=c[62]
N=c[93]
Y=c[275]
B.cp3.prototype={
aF2(d,e){return this.cMO(d,e)},
cMO(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aF2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.H(["mandatory",A.U(t,t),"optional",A.a([A.H(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.ks(A.cC(t)))
t=J.k(u)
v=B.hS7(C.cJ.gct().aN(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aF2,w)}}
B.b5a.prototype={
bA4(d){var x=this,w=x.w
w.onclose=A.ht(new B.coZ(x))
w.onopen=A.ht(new B.cp_(x))
w.onmessage=A.ht(new B.cp0(x))
w.onbufferedamountlow=A.ht(new B.cp1(x))},
gdc(d){return this.x},
ahW(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Fj()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h4f(J.eS(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ee(d.arrayBuffer(),y.af),$async$ahW)
case 8:v=t.h4f(s.ao4(f,0,null))
x=1
break
case 7:case 4:v=B.h4f(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahW,w)}}
B.b5b.prototype={
bA5(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ht(new B.cp4(x)))
w.addEventListener("icecandidate",A.ht(new B.cp5(x)))
w.addEventListener("iceconnectionstatechange",A.ht(new B.cp6(x)))
w.onicegatheringstatechange=A.ht(new B.cp7(x))
w.addEventListener("signalingstatechange",A.ht(new B.cp8(x)))
if(!$.hby())w.addEventListener("connectionstatechange",A.ht(new B.cp9(x)))
w.addEventListener("negotiationneeded",A.ht(new B.cpa(x)))
w.addEventListener("track",A.ht(new B.cpb(x)))},
alC(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ee(s.createAnswer(A.ks(A.cC(A.U(y.N,y.z)))),y.aQ),$async$alC)
case 3:t=f
v=new B.Xx(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alC,w)},
a83(d,e){return this.bpb(0,e)},
bpb(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a83=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ee(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a83)
case 2:return A.h(null,w)}})
return A.i($async$a83,w)},
a8b(d,e){return this.bpw(0,e)},
bpw(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ee(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8b)
case 2:return A.h(null,w)}})
return A.i($async$a8b,w)},
apF(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xx(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apF,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.acy.prototype={
a6(){return"_DocShareEntry."+this.b}}
B.Zx.prototype={
R(){return new B.aAb()},
gd_(){return this.c}}
B.aAb.prototype={
Z(){this.a2()
this.aeB()},
aeB(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_U(u.e,u.c),$async$aeB)
case 2:t=e
if(v.c!=null)v.m(new B.d8P(v,t))
return A.h(null,w)}})
return A.i($async$aeB,w)},
QC(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apN(t.e,t.c,!1),$async$QC)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fcq)
x=1
break}x=4
return A.b(B.a7h(u.a.c,"individual"),$async$QC)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6y(A.e0(new B.d8M(u),!1,null,y.H)),$async$QC)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QC,w)},
Js(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Js=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fw3(o),$async$Js)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7l(o.e,r,s,q),$async$Js)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f9r)
x=1
break}x=5
return A.b(B.a7h(u.a.c,"member"),$async$Js)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6y(A.e0(new B.d8O(u),!1,null,y.H)),$async$Js)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Js,w)},
yd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a7g(t.e,o,t.f,t.r,t.w,s),$async$yd)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a7h(u.a.c,"org_owner"),$async$yd)
case 4:x=5
return A.b(B.apS(u.a.c),$async$yd)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fwy(o),$async$yd)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7j(s,t,o,q.c),$async$yd)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f9o)
x=1
break}x=10
return A.b(B.apS(u.a.c),$async$yd)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6y(A.e0(new B.d8N(u),!1,null,y.H)),$async$yd)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yd,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.J,r=s?C.jt:C.q3,q=B.h2s(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.h_,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fw9,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fPW,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c5_,C.n),t,t,t,t,C.eu,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lR(new B.d8R(),t),C.P,w,C.dT,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.N,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ae)
if(!u.a.x)C.d.v(p,A.a([new B.ad0(C.f_,C.aBs,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcgg(),t),C.ae],v))
p.push(new B.ad0(C.pe,C.a3N,"Team Member","Sign in with your organization access code + password",u.gch7(),t))
p.push(C.ae)
p.push(new B.ad0(C.anH,C.a5o,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcgD(),t))
return A.c7(t,r,A.bm(!0,A.cg(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.akY,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ad0.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aH(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eK(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oJ,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yN,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aCO.prototype={}
B.aFW.prototype={}
B.jw.prototype={
mB(d){var x=this.b,w=C.a.oQ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gaql(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
ah(){var x,w=this,v=A.U(y.N,y.z)
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
bdv(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jw(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cLh(d){return this.bdv(null,d)},
aEN(d){return this.bdv(d,null)}}
B.Vf.prototype={
R(){return new B.aE9(new A.cw(null,y.A))},
gd_(){return this.c}}
B.aE9.prototype={
Z(){this.a2()
this.aeC()},
aeC(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BW(u.a.c),$async$aeC)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dUO(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aeC,w)},
aeD(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fB(s)),$async$aeD)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fdk)
case 1:return A.h(v,w)}})
return A.i($async$aeD,w)},
a_a(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_a=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoV(s.d,4),$async$a_a)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t9(r,"ngmy_my_code_"+m+".png"),$async$a_a)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_a,w)},
aim(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aim=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aao("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aim)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aim,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.J,n=o?C.jt:C.q3,m=o?C.c:C.N,l=A.eJ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m_
else if(q.e==null)x=A.au(new A.D(C.eu,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aC.j(o?0.35:0.12)
w=A.a([w,C.aL.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.J(C.aC.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a4f,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.akw,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aC.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.cg(A.x(A.a([x,C.mZ,w,C.kU,new A.er(A.p(p,A.q0(p,p,!1,B.hN7(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.kU,A.B(A.a([A.E(A.ew(N.CB,C.Ve,q.gc98(),p),1),C.as,A.E(A.dl(C.za,C.aaf,q.gc99(),A.bo(C.aC,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a5(1/0,p,A.ew(M.a2x,D.fLy,q.gcvV(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,U.NC,p,p,C.ah)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.Vj.prototype={
R(){return new B.aEc(new A.as(C.at,$.ax()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.aEc.prototype={
Z(){var x,w
this.a2()
x=this.a.e
w=B.IN(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.q()
this.a1()},
a_b(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IN(u.d.a.a)
if(t==null){u.m(new B.dVX(u))
x=1
break}u.m(new B.dVY(u))
s=u.a
r=s.c
x=3
return A.b(B.a7f(s.d,new B.dVZ(u),t,r),$async$a_b)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dW_(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_b,w)},
a2q(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ct(r.a.d)){x=1
break}r.m(new B.dW0(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rF(r.a.c,q),$async$a2q)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dW1(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ai4(p,m,l,j,k),$async$a2q)
case 8:o=e
if(r.c!=null)r.m(new B.dW2(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dW3(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dW4(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2q,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.J,i=j?D.agH:D.aen,h=j?D.aik:C.c,g=j?C.aP:C.N,f=j?C.bM:C.al,e=j?D.afG:C.aN
i=[i,e,h,g,f,j?C.ff:C.bP]
x=A.P(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eJ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ap(80,A.dZ(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c2(C.A,0.5,C.x,k,0,A.a([C.aC.j(x?0.12:0.08),C.aC.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bTm,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a9(C.ay,C.aD,C.x,A.a([i[5].j(0.85),C.aC],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fk,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a4f,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uF(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bk8()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Y,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.bt(k,k,k,C.Nx,k,k,"",k,!0,new A.b5(4,A.n(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.n(18),new A.ay(C.aC,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dW5(l),k,!1,k,k,!1,k,!0,k,C.aa,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mo,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.J(i[1],C.r,1)
m=J.LJ(l.a.d,4)
m=A.C(new A.N(m,new B.dW6(x,new A.aHb(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l6,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.d4,p,C.P,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eB,k,k,k)],r)
if(l.r!=null){u=C.aC.j(x?0.16:0.1)
t=A.n(14)
s=A.J(C.aC.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f7W)
else q.push(A.X(C.lI,i[5],k,k,k,16))
q.push(C.as)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.da(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b7,new A.o(u,k,s,t,k,k,C.n),C.iB,k,k,k,k,C.eS,k,k,k)],r))}e=A.E(A.cg(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bBt,k,k,C.ah),1)
u=l.f?k:l.gcvW()
t=i[3]
s=i[1]
q=A.n(16)
s=A.ew(M.a2x,D.fMD,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b8(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gc9a()
t=A.bo(C.aC,k,k,0,C.c,k,C.np,k,new A.b8(A.n(16),C.a0),k,k,k)
return A.c7(g,h,new A.an(C.a_,k,C.ab,C.t,A.a([f,v,A.bm(!0,A.lw(new B.dW7(),A.x(A.a([e,new A.D(D.bAY,A.x(A.a([s,C.P,i,C.ae,A.bH(l.f?C.t9:D.fKU,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.ct,C.ZR,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bk8.prototype={
oM(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fh(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hl(C.by,v.length),C.aO)}}
B.Vg.prototype={
R(){return new B.aEa()}}
B.aEa.prototype={
Z(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.as(new A.ba(w,C.b3,C.aO),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.as(new A.ba(x,C.b3,C.aO),v)
u.f!==$&&A.aQ()
u.f=new A.as(C.at,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.T$=$.ax()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a1()},
aeE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aeE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dUP(r))
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
return A.b(B.a7k(p,m,n,o,C.a.i(l).length===0?null:l),$async$aeE)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.fcW)
s=[1]
x=4
break}p.K(y.q).f.U(D.fbz)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dUQ(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeE,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.J?C.jt:C.q3,q=A.eJ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fDk,s,s,s,1,s,!0),p=A.p(s,D.bta,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.Hz,C.n),s,s,s,s,C.aa,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.c_t,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.c_o,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c_E,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.aa,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.ao,s,s,s,s)
v=t.r?s:t.gc9b()
u=A.bo(C.aC,s,s,s,s,C.h0,s,s,s,s,s,s)
return A.c7(q,r,A.cg(A.x(A.a([p,C.d4,o,C.ae,x,C.ae,w,C.mZ,A.bH(t.r?C.t9:C.aUY,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.aa,s,s,C.ah),s,!1,!1,s,s)}}
B.acf.prototype={}
B.bwP.prototype={
a5f(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cm(r.aoU()))
x=3
return A.b(B.Ry(t,s),$async$a5f)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5f,w)},
gd_(){return this.a}}
B.NK.prototype={
a6(){return"NgmyDocShareQrMode."+this.b}}
B.Zw.prototype={
R(){return new B.aAa(new A.as(C.at,$.ax()),A.k4(!0,null,!0,!0,null,null,!1))}}
B.aAa.prototype={
Z(){this.a2()
$.aV.x1$.push(new B.d8L(this))},
q(){var x=this.d
x.T$=$.ax()
x.P$=0
this.e.q()
this.a1()},
c9h(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1C(d),u=x.a.c,t=u?C.ix:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.jt:v.a[0],p=A.n(24),o=A.J(C.aC.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aC.j(u?0.25:0.12),C.h_,32)],n),l=A.p(w,T.aqp,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aC.j(0.4),C.cx,16)],n),C.arc,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uF(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bwr()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Y,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.bt(w,w,w,C.Gg,w,w,"",w,!0,new A.b5(4,A.n(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.n(16),D.b2f),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d8J(x),w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mo,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nK,new B.d8K(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b8(A.n(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aC.j(0.35),C.cH,12)],n)
g=y.p
return A.eT(w,C.L,new A.cU(Q.Lm,A.c3(new A.D(C.yq,A.x(A.a([l,C.aQ,k,C.P,j,C.dT,i,C.dT,A.B(A.a([f,C.as,A.E(A.c3(A.aH(!1,C.a2,!0,w,A.aO(!1,A.n(14),!0,D.em7,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc9g(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,L.Pk,C.n),C.bh),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.O,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bh),w),w,w,w,C.NF,C.d8,w,w,w)}}
B.bwr.prototype={
oM(d,e){return e.alx(e.a.toUpperCase())}}
B.Vh.prototype={
R(){return new B.aEb(A.a([],y.r),A.aX(y.N))},
gd_(){return this.c}}
B.aEb.prototype={
Z(){var x=this
x.a2()
x.u_()
x.w=A.dh(C.jx,new B.dVV(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vq()
this.a1()},
a1h(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NJ(u.a.c),$async$a1h)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AU(u.a.c),$async$a1h)
case 4:u.m(new s.dVi(u,e))
u.ia("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1h,w)},
u_(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$u_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NJ(u.a.c),$async$u_)
case 3:t=e
x=4
return A.b(B.AU(u.a.c),$async$u_)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dVj(u,s))
if(t>0)u.ia("Received "+A.w(t)+" file(s) via My Code.")
u.NU(u.d)
B.BW(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$u_,w)},
NU(d){return this.bE3(d)},
bE3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7p(r,u.a.c),$async$NU)
case 8:p=f
if(u.c==null){x=1
break}new B.dUS(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a0(r.c,"video/")||r.mB(D.mR))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vo(r,u.a.c),$async$NU)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AU(u.a.c),$async$NU)
case 12:u.m(new o.dUT(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NU,w)},
Oh(d){return this.bKk(d)},
bKk(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7p(d,u.a.c),$async$Oh)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dUY(u,d,t))
x=6
return A.b(A.fH(new A.fB(t)),$async$Oh)
case 6:u.ia("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fB(r.toUpperCase())),$async$Oh)
case 7:u.ia("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oh,w)},
ia(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
u0(d,e){return this.cGC(d,e)},
cGC(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$u0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dVJ(r,e))
u=3
x=6
return A.b(d.$0(),$async$u0)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dVK(r))
$.eX.mw()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$u0,w)},
gaWa(){var x=this.a
return x.f||x.r||x.w},
Im(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Im=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaWa()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ccp(s,n,r,q,o,t),$async$Im)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ia("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fIs(o,u.a.c),$async$Im)
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
return A.b(B.Di(s,o,r,q,n,t),$async$Im)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Im,w)},
a0k(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apS(u.a.c),$async$a0k)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ia("No organization portal found.")
x=1
break}t=J.a6(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a4(t,!1).cc(A.e0(new B.dVf(u,r,q),!1,null,y.H)),$async$a0k)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0k,w)},
a1r(d){return this.cps(d)},
cpr(){return this.a1r(1)},
cps(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaWa()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apP(u.a.c),$async$a1r)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1r,w)},
acw(d,e,f){return this.c0f(d,e,f)},
c0f(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$acw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ia(e)
x=1
break}x=3
return A.b(u.u0(new B.dVc(u,d,null,e,f),"Uploading\u2026"),$async$acw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$acw,w)},
bEb(){B.hxK(!1,new B.dUW(this))
return},
cuv(){this.m(new B.dVn(this))},
aze(){var x=0,w=A.j(y.H),v=this
var $async$aze=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bEb()
return A.h(null,w)}})
return A.i($async$aze,w)},
acs(){var x=0,w=A.j(y.H),v=this
var $async$acs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u0(new B.dV1(v),"Importing\u2026"),$async$acs)
case 2:return A.h(null,w)}})
return A.i($async$acs,w)},
SF(d){return this.cFX(d)},
cFX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mB(D.mR)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cc(A.e0(new B.dVG(u,d),!1,null,y.H)),$async$SF)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mB(D.Ri)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cc(A.e0(new B.dVH(u,d),!1,null,y.H)),$async$SF)
case 8:x=1
break
case 7:x=u.c0X(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cc(A.e0(new B.dVI(u,d),!1,null,y.H)),$async$SF)
case 11:x=1
break
case 10:u.ia("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$SF,w)},
c0X(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oQ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cO0,C.a.b5(x,w+1).toLowerCase())},
ag8(d){return this.cgk(d)},
cgk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mB(D.mR)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cc(A.e0(new B.dVd(u,d),!1,null,y.H)),$async$ag8)
case 5:x=1
break
case 4:u.m(new B.dVe(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ag8,w)},
S0(d){return this.cxp(d)},
cxp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$S0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ia("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pk(t,s.c,s.f),$async$S0)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.u0(new B.dVz(u,d),"Preparing QR\u2026"),$async$S0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$S0,w)},
aiN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dVA(),A.T(t).k("N<1,m>")).fJ(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dVB(q),s),s.k("M.E"))
if(r.length===0){u.ia("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.S0(r),$async$aiN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiN,w)},
aiG(d){return this.cwX(d)},
cwX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1C(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.dVt(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aiG)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.SF(d)
break
case"qr":u.S0(A.a([d],y.r))
break
case"send_my_code":u.cgX(A.a([d],y.r))
break
case"save":u.ai2(d)
break
case"delete":u.Jc(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aiG,w)},
Y2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Y2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dUZ(),A.T(t).k("N<1,m>")).fJ(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dV_(q),s),s.k("M.E"))
if(r.length===0){u.ia("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pk(t,s.c,s.f),$async$Y2)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.u0(new B.dV0(u,r),"Preparing file\u2026"),$async$Y2)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Y2,w)},
ahd(d){return this.cnO(d)},
cnO(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hyB(d,!1),$async$ahd)
case 3:s=f
r=s==null
q=B.a7m(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ia("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahd,w)},
age(){var x=0,w=A.j(y.H),v=this,u
var $async$age=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fQ7(u,v.a.c),$async$age)
case 2:return A.h(null,w)}})
return A.i($async$age,w)},
bEa(){B.hxK(!1,new B.dUV(this,null))
return},
Jr(d,e){return this.cgY(d,e)},
b1r(d){return this.Jr(null,d)},
cgX(d){return this.Jr(d,null)},
cgY(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dVg(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xt.ca().aob(!0,C.a0F,!1),$async$Jr)
case 10:r=g
if(r==null||J.ct(r.a)){x=1
break}x=11
return A.b(s.u0(new B.dVh(l,s,r),"Preparing\u2026"),$async$Jr)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ia("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ia("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bEN(p,l,e,s.a.c),$async$Jr)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ia("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
IC(d){return this.c02(d)},
c02(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hN6(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b1r(t),$async$IC)
case 8:x=6
break
case 7:u.ia("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ia("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.u0(new B.dVa(u,d),"Receiving video\u2026"),$async$IC)
case 11:x=1
break
case 10:x=12
return A.b(u.u0(new B.dVb(u,d),"Receiving\u2026"),$async$IC)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IC,w)},
Eq(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Eq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Dc()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahd(t),$async$Eq)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IC(s),$async$Eq)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cc(A.e0(new B.dVl(u),!1,null,y.N)),$async$Eq)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.u_(),$async$Eq)
case 10:x=1
break
case 9:x=11
return A.b(u.IC(C.a.i(r)),$async$Eq)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Eq,w)},
ai2(d){return this.ct2(d)},
ct2(d){var x=0,w=A.j(y.H),v=this
var $async$ai2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.u0(new B.dVk(v,d),"Saving\u2026"),$async$ai2)
case 2:return A.h(null,w)}})
return A.i($async$ai2,w)},
Jc(d){return this.bMF(d)},
bMF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lh(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jc)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ccs(t),$async$Jc)
case 6:case 5:s=d.a
x=7
return A.b(B.EQ(u.a.c,s),$async$Jc)
case 7:u.r.W(0,s)
x=8
return A.b(u.u_(),$async$Jc)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jc,w)},
aiT(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1C(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.dVF(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiT)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.age()
break
case"import":u.acs()
break}case 1:return A.h(v,w)}})
return A.i($async$aiT,w)},
c9e(d){var x=d.c
if(C.a.a0(x,"video/")||d.mB(D.mR))return C.qy
if(C.a.a0(x,"image/")||d.mB(D.Ri))return C.ur
if(C.a.t(x,"pdf"))return E.OQ
return D.aoa},
B(d){var x,w,v=this,u=null,t=B.a1C(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.Hr,u,u,u,new B.dVQ(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bTW,u,u,u,v.e?u:v.gcgE(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcuu()
n.push(A.aG(u,u,u,u,A.X(v.r.a===x?D.bO7:E.aoA,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.a2u,u,u,u,v.e?u:v.gc9f(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.op,u,u,u,v.e?u:v.gb2x(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bVH,u,u,u,v.e?u:new B.dVR(v),u,u,u,u,"More options",u))
q=A.eJ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lR(new B.dVS(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ap(40,A.dZ(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c2(C.A,0.5,C.x,u,0,A.a([C.aC.j(A.P(d).ax.a===C.J?0.12:0.08),C.aC.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kx(s[1].j(0.5),u,C.aC,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aA7(C.jD,s,!0,t,w?u:v.gcxq(),u),1)
x.push(new A.D(D.bzI,A.lw(new B.dVT(),A.B(A.a([s,C.as,A.E(new B.aA7(C.us,"Export",!1,t,w?u:v.gbQt(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.ct,C.iT,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.beE(t,v.e?u:v.gb2x(),u)
else s=A.kj(!0,u,u,new B.dVU(v,t),s,u,D.bzA,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.a_,u,C.ab,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aA7.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bo(C.aC,t,t,0,C.c,t,C.vY,t,new A.b8(s,C.a0),t,t,t)
return A.dl(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vY,t,new A.b8(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.ew(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f3,t,t,t),u.r,v)}}
B.beE.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aC.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.lw(new B.d8H(),new A.D(E.a_K,A.x(A.a([A.lw(new B.d8I(),A.p(x,A.X(C.yO,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.hu,x,x,new A.bp(0.86,1,w),s),C.dT,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.dT,A.dl(C.op,D.fQf,this.d,A.bo(C.aC,x,x,x,C.c,x,C.ND,x,new A.b8(A.n(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.O,0,C.p),x),C.ct,C.BE,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.acz.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dC(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aC.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.mB(D.mR))p=D.dn4
else{p=C.a.a0(p,"image/")||i.mB(D.Ri)
n=y.O
p=p?A.a([C.cR,C.aC],n):A.a([C.aL.j(0.85),C.aC.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaql()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mB(D.mR))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.X(C.fQ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mB(D.mR)))l.push(A.h0a(C.aC,!1,j,j,j,!1,j,j,new B.d93(k),j,j,new A.b8(A.n(5),C.a0),j,j,!1,u))
x=A.X(C.oh,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.lw(new B.d94(),new A.D(C.ec,A.aH(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_c,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b8(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.ct,h,new A.bV("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.Zy.prototype={
R(){return new B.aAc()},
gd_(){return this.c}}
B.aAc.prototype={
Z(){this.a2()
this.y3()},
q(){B.hNl(this.e)
this.a1()},
y3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$y3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rF(o.c,o.d),$async$y3)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hNo(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hNn(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d90(s))
x=1
break}s.m(new B.d91(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d92(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y3,w)},
a2p(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rF(t.c,t.d),$async$a2p)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f9Y)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ai4(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2p)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2p,w)},
c_W(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kw(u,C.A,v,new B.d8Z(w,t),C.h7,C.dz,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fS(t,C.A,v,new B.d9_(w),C.h7,C.dz,!0,v,!1,v,v)
else return C.bJ
return A.uM(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1C(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.CC,u,u,u,v.gb6j(),u,u,u,u,"Share / save",u))
r=A.eJ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.EW
else{q=v.r
if(q!=null)t=new A.D(C.eu,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eu,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aQ,A.dl(C.CC,D.fyz,v.gb6j(),A.bo(C.aC,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.O,0,C.p),u)
t=p}else t=v.c_W()}return A.c7(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.Zv.prototype={
R(){return new B.aA9(A.aiU(),C.bB,C.bB)},
gd_(){return this.c}}
B.aA9.prototype={
Z(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fy(w,A.a7(w).k("fy<1>")).it(new B.d8E(v))
x.gcUl().it(new B.d8F(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fy(x,A.a7(x).k("fy<1>"))}if(x==null)x=C.b8s
x.it(new B.d8G(v))
v.y3()},
y3(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$y3=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rF(p.c,p.d),$async$y3)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d8x(s))
x=1
break}x=8
return A.b(s.d.v6(0,new A.a3F(r,s.a.d.c)),$async$y3)
case 8:if(s.c==null){x=1
break}s.m(new B.d8y(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d8z(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$y3,w)},
a_c(){var x=0,w=A.j(y.H),v=this,u
var $async$a_c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hb(0),$async$a_c)
case 5:x=3
break
case 4:x=6
return A.b(u.iw(0),$async$a_c)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_c,w)},
aU_(d){var x=d.a
return C.a.aW(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aW(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1C(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eJ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.EW
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bP9,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Pk,C.n),o,88,o,o,o,o,o,88)
t=A.kQ(C.aC,o,o,m,0,new B.d8A(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aU_(p.w)+" / "+p.aU_(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aC,o,o,o,o,D.f6n,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uu:C.hk,o,o,o,o,o)
x=A.x(A.a([u,C.kU,t,x,C.d4,A.dl(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc9i(),s)],y.p),C.m,o,C.e,C.O,0,C.p)}}return A.c7(v,w,A.au(new A.D(C.qi,x,o),o,o,o),o,!1,!1,o,o)}}
B.Q_.prototype={
R(){return new B.aAf()},
gd_(){return this.c}}
B.aAf.prototype={
Z(){this.a2()
this.PX()},
PX(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h2t(o.c,o.d,new B.d9h(s)),$async$PX)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d9i(s))
x=1
break}s.e=r
q=O.i9x(r)
if(q==null){s.m(new B.d9j(s))
x=1
break}s.d=q
q.aS(0,s.gb1e())
x=8
return A.b(q.is(0).da(0,C.rs),$async$PX)
case 8:if(s.c==null){x=1
break}s.m(new B.d9k(s))
x=9
return A.b(q.qa(0),$async$PX)
case 9:q.tF(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d9l(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PX,w)},
ceV(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d9m(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D6(0,x.gb1e())
w=x.d
if(w!=null)w.q()
B.ijt(x.e)
x.a1()},
aeH(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b01(u.c,u.d),$async$aeH)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeH,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1C(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eJ(A.a([A.aG(t,t,t,t,C.oo,t,t,t,u.gc9c(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.EW
else{q=u.r
if(q!=null)s=new A.D(C.eu,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ain(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fG(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.Ap(s,t),A.aB(t,A.Du(A.p(t,A.X(q?I.uu:C.hk,C.c,t,t,t,48),C.f,t,t,new A.o(C.aS,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b7,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d9o(u),t,t,t,t,t,t,!1,C.a3)],o),t),t)}else s=C.bJ}}return A.c7(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.ZA.prototype={
R(){return new B.aAd(new A.cw(null,y.A))}}
B.aAd.prototype={
gcGj(){var x,w,v=this.a
if(v.e!==D.SE)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcFV(){var x,w,v=this.a
if(v.e!==D.zP)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a2()
x=v.gcGj()
if(x!=null){v.R1(x)
v.e=A.dh(R.G6,new B.d9d(v,x))}w=v.gcFV()
if(w!=null){v.R0(w)
v.f=A.dh(C.fA,new B.d9e(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a1()},
R0(d){return this.cm_(d)},
cm_(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apX(d),$async$R0)
case 3:t=f
x=4
return A.b(B.ccL(d),$async$R0)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d95(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$R0,w)},
R1(d){return this.cm0(d)},
cm0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$R1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fQK(d),$async$R1)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bCH(t),$async$R1)
case 4:if(u.c==null){x=1
break}u.m(new B.d96(u))
u.c.K(y.q).f.U(D.aRO)
case 1:return A.h(v,w)}})
return A.i($async$R1,w)},
gc53(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc9d(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2b(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Dc()){t=u.c
if(t!=null)t.K(y.q).f.U(D.fd5)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cc(A.e0(new B.d97(),!1,null,y.N)),$async$a2b)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bCH(s),$async$a2b)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aRO)
case 1:return A.h(v,w)}})
return A.i($async$a2b,w)},
aam(d){return this.bKl(d)},
bKl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aam=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fB(C.d.aG(t,", "))),$async$aam)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aam,w)},
aeF(d){return this.bK4(d)},
bK4(d){var x=0,w=A.j(y.H),v=this
var $async$aeF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fB(v.a.c)),$async$aeF)
case 2:if(d.e!=null)d.K(y.q).f.U(D.far)
return A.h(null,w)}})
return A.i($async$aeF,w)},
a25(d){return this.ct4(d)},
ct4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a25=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoV(s.d,4),$async$a25)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t9(r,"ngmy_doc_share_qr.png"),$async$a25)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a25,w)},
gaXn(){var x,w=this.a
if(w.e!==D.IE)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
aaj(d){return this.bKe(d)},
bKe(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaXn()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$aaj)
case 3:if(d.e!=null)d.K(y.q).f.U(D.fc5)
case 1:return A.h(v,w)}})
return A.i($async$aaj,w)},
aeG(){var x=0,w=A.j(y.H),v=this,u
var $async$aeG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vq(),$async$aeG)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aeG,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1C(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ar(h,0,44)+"\u2026"
i=i.e
i=i!==D.IE&&i!==D.SE&&i!==D.zP
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eJ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.IE||t===D.SE||t===D.zP?l:A.aG(l,l,l,l,C.le,l,l,l,m.gb_l(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.J(C.aC.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.q0(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc53(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.IE){t=C.aC.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mI,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc9d(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.bZw,D.fI7,new B.d98(m,d),l)],p))}if(m.a.e===D.IE&&m.gaXn()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hs(D.bW0,D.fEJ,new B.d99(m,d),l)],p))
if(m.a.e===D.zP){x=(m.w?C.dE:C.aC).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EZ:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mI,l,l,l)],p))}if(m.a.e===D.SE){x=(m.r?C.dE:C.aC).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EZ:C.aC,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mI,l,l,l),C.ae,A.dl(D.bRC,D.fLf,m.gctt(),A.bo(C.aC,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oA(i,A.c7(v,w,new A.D(C.aa,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.aa,l,l,1/0),1),C.ae,A.B(A.a([A.E(A.ew(N.CB,C.Ve,new B.d9a(m,d),l),1),C.as,A.E(A.dl(C.za,C.aaf,new B.d9b(m,d),A.bo(C.aC,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.P,new A.a5(1/0,l,A.bH(C.An,l,m.gb_l(),A.bo(C.aL,l,l,l,l,C.h0,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.d9c(),y.C)}}
B.acx.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cg(A.x(A.a([w,C.aQ,A.p(x,A.q0(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bE,x,x,x)],u),C.m,x,C.e,C.O,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.ep(A.a([A.bH(C.x3,x,new B.d8w(d),x)],u),x,x,C.n7,v,x,x,x,x,D.fxy,x)}}
B.Zu.prototype={
R(){return new B.aA8(A.zz(C.y7,C.nQ,C.uH))}}
B.aA8.prototype={
q(){this.d.q()
this.a1()},
axT(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a4(x,!1).O(t)
return}}},
B(d){var x=null
return A.c7(A.eJ(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fFe,x,x,x,1,x,!0),C.w,A.zy(this.d,C.bW,this.gaxS()),x,!1,!1,x,x)}}
B.ZB.prototype={
R(){return new B.aAe(A.zz(C.y7,C.nQ,C.uH))},
gd_(){return this.c}}
B.aAe.prototype={
c0Z(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agB(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Mb("text/plain"),$async$agB)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.fd_)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agB,w)},
ab8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ab8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hyB(p,!0),$async$ab8)
case 3:t=e
p=t==null
s=B.a7m(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.f9y)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$ab8,w)},
q(){this.d.q()
this.a1()},
axT(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c0Z(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.apv,v,v,v,w.gbPZ(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.a2B,v,v,v,w.gcjn(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eJ(A.a([u,t,A.aG(v,v,v,v,A.X(w.f?C.un:P.OB,v,v,v,v,v),v,v,v,new B.d9g(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fM8,v,v,v,1,v,!0)
u=A.zy(w.d,C.bW,w.gaxS())
x=A.n(20)
return A.c7(t,C.w,new A.an(C.a_,v,C.ab,C.t,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aL,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eso],s),v),v,!1,!1,v,v)}}
B.beF.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.p4
else x=s.w?C.aC:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aC.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.p4:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a_Q,A.B(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.a9M.prototype={
a6(){return"RTCDataChannelState."+this.b}}
B.OO.prototype={
a6(){return"RTCSignalingState."+this.b}}
B.Xw.prototype={
a6(){return"RTCIceGatheringState."+this.b}}
B.ON.prototype={
a6(){return"RTCPeerConnectionState."+this.b}}
B.Fk.prototype={
a6(){return"RTCIceConnectionState."+this.b}}
B.cp2.prototype={}
B.Fj.prototype={}
B.a9L.prototype={}
B.aus.prototype={}
B.Xx.prototype={}
var z=a.updateTypes(["aA<~>()","R(jw)","m(jw)","Vh(Y)","~()","Zx(Y)","G(G,jw)","Q_(Y)","~(mb)","cv(Fj)","aA<jw?>(@)","Vf(Y)","Vj(Y)","D(jw)","jw(@)","a8<m,@>(jw)","Zw(Y)","Vg(Y)","Zy(Y)","Zv(Y)","ZA(Y)","acx(Y)","ai<jw>()","ZB(Y)","acz(Y,G)","Zu(Y)","a8<m,aD>(jw)","cv(Xw)","cv(a9L)","aA<cv>(Fj)"])
B.coZ.prototype={
$1(d){var x=this.a
x.x=D.aOS
x.y.M(0,D.aOS)},
$S:74}
B.cp_.prototype={
$1(d){var x=this.a
x.x=D.aOR
x.y.M(0,D.aOR)},
$S:74}
B.cp0.prototype={
$1(d){var x=this.a
x.ahW(A.aPV(d.data)).bM(new B.coY(x),y.b)},
$S:74}
B.coY.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cp1.prototype={
$1(d){},
$S:74}
B.cp4.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hS6(d.channel))},
$S:15}
B.cp5.prototype={
$1(d){},
$S:15}
B.cp6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iaz(w.iceConnectionState)
x.cx=w
if($.hby())switch(w.a){case 0:x.cy=D.aOX
break
case 1:x.cy=D.aOY
break
case 3:x.cy=D.aOZ
break
case 5:x.cy=D.aOV
break
case 6:x.cy=D.aOW
break
case 7:x.cy=D.a82
break
default:break}},
$S:144}
B.cp7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.iaA(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:144}
B.cp8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ikY(w.signalingState)},
$S:144}
B.cp9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ija(w.connectionState)},
$S:144}
B.cpa.prototype={
$1(d){},
$S:144}
B.cpb.prototype={
$1(d){},
$S:15}
B.frB.prototype={
$1(d){var x=y.F.a(new A.qZ([],[]).oz(d.target.result,!1)),w=C.y8.t(x.objectStoreNames,"blobs")
if(!w)C.y4.L3(x,"blobs")},
$S:184}
B.fPW.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wx.fm(this.b)
$.eX.mw()
this.c.$1(d)},
$S:453}
B.fPY.prototype={
$1(d){return this.a.$1(B.i06(this.b,this.c))},
$S:31}
B.fPX.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fPV.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fQa.prototype={
$1(d){var x=this
return B.hnO(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fQb.prototype={
$1(d){var x=this
return B.hnO(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fu7.prototype={
$1(d){var x=this
return B.ccm(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d8P.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d8M.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccm(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d8O.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccm(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d8N.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ccm(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d8R.prototype={
$4(d,e,f,g){var x=null
return A.jT(A.B(A.a([A.aG(x,x,x,x,D.bQe,x,x,x,new B.d8Q(d),x,x,x,x,x,x),A.E(A.F5(D.R1,!0,x,C.a1E,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.R1,x,g,C.ali,0,e,f)},
$C:"$4",
$R:4,
$S:414}
B.d8Q.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fw6.prototype={
$1(d){var x,w,v=null,u=A.aJ(d,C.eM,y.o).w,t=this.a,s=t?C.ix:C.c,r=A.n(28),q=A.p(v,D.btv,C.f,v,v,D.b3U,v,v,v,v,D.al8,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.bt(v,new A.b5(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bUw,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.Gl,A.x(A.a([o,C.ae,A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.bt(v,new A.b5(4,A.n(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.apL,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.aa,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.ao,v,v,v,v),C.bx,A.B(A.a([A.E(A.dT(C.di,new B.fw4(d),v),1),C.as,A.E(A.bH(D.fDJ,v,new B.fw5(p,x,d),A.bo(C.b0,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.O,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.G9,v,v,v,v),v)},
$S:60}
B.fw4.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fw5.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.faI)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCO(v,x))},
$S:0}
B.fwA.prototype={
$1(d){var x=this,w=null,v=A.aJ(d,C.eM,y.o).w,u=x.a,t=u?C.ix:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.btk,C.f,w,w,D.b5n,w,w,w,w,D.al8,w,w,1/0),new A.D(C.Gl,A.x(A.a([A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.h7A(u,"Organization name",C.GN,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.h7A(u,"Access code",C.nu,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.h7A(u,"Member password",H.Hm,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.aa,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.ao,w,w,w,w),C.bx,A.bH(D.fMf,w,new B.fwz(r,q,p,d),A.bo(C.aC,w,w,w,w,C.h0,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.O,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.G9,w,w,w,w),w)},
$S:60}
B.fwz.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.faN)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aFW(u,x,w))},
$S:0}
B.ccd.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a6(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cH(j,0,null):s.b.aT(j)
u=4
x=7
return A.b(A.vy(p,null).da(0,C.ZQ),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cm(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BX(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.ccj.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cck.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ccl.prototype={
$1(d){return d.b},
$S:z+2}
B.ccf.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ccg.prototype={
$1(d){return d.b},
$S:z+2}
B.cce.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cch.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.cci.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fQ8.prototype={
$1(d){return new B.Vf(this.a,null)},
$S:z+11}
B.fQ9.prototype={
$1(d){return new B.Vj(this.a,this.b,this.c,null)},
$S:z+12}
B.dUO.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dVX.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dVY.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dVZ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dVW(x,d))},
$S:2}
B.dVW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dW_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dW0.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dW1.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dW2.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dW3.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dW4.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dW7.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:101}
B.dW5.prototype={
$1(d){var x=this.a
return x.f?null:x.a_b()},
$S:2}
B.dW6.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aC.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mB(D.Ri))s=C.ur
else s=C.a.a0(s,"video/")||d.mB(D.mR)?C.qy:D.aoa
x=this.b.a
w=y.p
return new A.D(C.kI,A.B(A.a([A.p(v,A.X(s,C.aC,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.as,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaql(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dUP.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dUQ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ccn.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:96}
B.cco.prototype={
$2(d,e){return new A.bA(J.k(d),J.k(e),y.M)},
$S:96}
B.fR1.prototype={
$2(d,e){return e===this.a},
$S:320}
B.foM.prototype={
$1(d){return J.k(d)},
$S:17}
B.fuj.prototype={
$1(d){var x=this.b
B.hZ6(C.Gz.ga6T(this.a)).bM(x.gaEo(x),y.H)},
$S:130}
B.fuk.prototype={
$1(d){return this.a.d8(0,null)},
$S:130}
B.ful.prototype={
$0(){return null},
$S:12}
B.ccC.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fum.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).a7().ae():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jw(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fys.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fsw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fsx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ccH.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mB(D.mR)},
$S:z+1}
B.fV8.prototype={
$1(d){return new B.Zw(this.a,null)},
$S:z+16}
B.d8L.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fR()},
$S:9}
B.d8J.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d8K.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dVV.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1h()},
$S:11}
B.dVi.prototype={
$0(){var x=J.bFS(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dVj.prototype={
$0(){var x=J.bFS(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dUS.prototype={
$0(){var x=this.a,w=C.d.bh(x.d,new B.dUR(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEN(this.c)}},
$S:0}
B.dUR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dUT.prototype={
$0(){var x=J.bFS(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dUY.prototype={
$0(){var x=this.a,w=C.d.bh(x.d,new B.dUX(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEN(this.c)}},
$S:0}
B.dUX.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVJ.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dVK.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dVf.prototype={
$1(d){return new B.Vg(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dVc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Im(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vk(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.u_(),$async$$0)
case 5:s=J.a6(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1r(s.gL(t)),$async$$0)
case 8:case 7:r.ia(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUW.prototype={
$1(d){this.a.acw(d,"No files selected.","Added")},
$S:453}
B.dVn.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.aa(0)
else w.v(0,new A.N(x,new B.dVm(),A.T(x).k("N<1,m>")))},
$S:0}
B.dVm.prototype={
$1(d){return d.a},
$S:z+2}
B.dV1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xt.ca().cWj(C.a0F,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jC(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.ia("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.ia("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apW(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ct(l)){o.ia("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.u_(),$async$$0)
case 9:o.ia("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dVG.prototype={
$1(d){return new B.Q_(this.a.a.c,this.b,null)},
$S:z+7}
B.dVH.prototype={
$1(d){return new B.Zy(this.a.a.c,this.b,null)},
$S:z+18}
B.dVI.prototype={
$1(d){return new B.Zv(this.a.a.c,this.b,null)},
$S:z+19}
B.dVd.prototype={
$1(d){return new B.Q_(this.a.a.c,this.b,null)},
$S:z+7}
B.dVe.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVz.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Im(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7o(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ia("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cpr(),$async$$0)
case 5:x=6
return A.b(p.u_(),$async$$0)
case 6:r=A.T(t).k("N<1,m>")
r=new A.N(new A.N(t,new B.dVv(p),r),new B.dVw(),r.k("N<ak.E,m>")).c_(0,new B.dVx())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cc(A.e0(new B.dVy(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pj(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vq(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVv.prototype={
$1(d){var x=this.a,w=C.d.bh(x.d,new B.dVu(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dVu.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dVw.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dVx.prototype={
$1(d){return d.length!==0},
$S:3}
B.dVy.prototype={
$1(d){var x=this.a
return new B.ZA(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dVA.prototype={
$1(d){return d.a},
$S:z+2}
B.dVB.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dVt.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aC.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaql(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mB(D.mR)?C.rD:C.ph
p=!x||p.mB(D.mR)?"Play video":"View"
return A.c3(A.bm(!0,new A.D(C.BP,A.x(A.a([q,o,t,C.aA,B.Zz(!1,u,!1,w,p,new B.dVo(d),v),B.Zz(!1,u,!1,C.jD,"Share via QR",new B.dVp(d),"Letters/numbers QR code"),B.Zz(!1,u,!1,D.a1K,"Send to their Code",new B.dVq(d),"Enter someone else's personal code"),B.Zz(!1,u,!1,C.hR,"Download / save",new B.dVr(d),v),C.am,B.Zz(!1,u,!0,C.e9,"Delete",new B.dVs(d),v)],y.p),C.ak,v,C.e,C.O,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bI(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kY,v,v,C.n),C.bh)},
$S:649}
B.dVo.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dVp.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dVq.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dVr.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dVs.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dUZ.prototype={
$1(d){return d.a},
$S:z+2}
B.dV_.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dV0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7q(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GP(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pj(s.c,s.f),$async$$0)
case 4:u.ia(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUV.prototype={
$1(d){var x=this.a
x.u0(new B.dUU(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dUU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ia("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vk(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ct(s)){t.ia("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bEN(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ia("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVg.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dVh.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.h2w(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GN(new B.dV6(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ia("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ck(null,null,!1,null,new B.dV7(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dV8(s))
case 5:x=8
return A.b(r.b.ix(0,C.G3,new B.dV9()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gan(t)){s.ia("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.u_(),$async$$0)
case 9:s.ia("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV6.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dV3(x,d,e))},
$S:233}
B.dV3.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dV7.prototype={
$1(d){return new B.acx(this.a.a,null)},
$S:z+21}
B.dV8.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dV9.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dVb.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IN(o)!=null?3:4
break
case 3:x=5
return A.b(B.a7e(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b1r(B.IN(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apW(new B.dV4(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ct(r)){if(B.h2v(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ia(q)
x=1
break}x=10
return A.b(s.u_(),$async$$0)
case 10:o=J.cD(r)
p=o.eN(r,new B.dV5()).gL(0)
s.ia(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dV4.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dV2(x,d,e))},
$S:233}
B.dV2.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dV5.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mB(D.mR)},
$S:z+1}
B.dVl.prototype={
$1(d){return new B.ZB(this.a.a.c,null)},
$S:z+23}
B.dVk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b01(u.a.c,v.b),$async$$0)
case 2:t.ia(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dVF.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aC.j(0.35)
return A.c3(A.bm(!0,new A.D(C.BP,A.x(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kH,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Zz(!0,w,!1,C.nu,"My Code",new B.dVC(d),"Your personal code & QR \u2014 others send docs to you"),B.Zz(!1,w,!1,D.a1K,"Send to their Code",new B.dVD(this.a,d),"Enter someone else's 5-digit code + letter"),B.Zz(!1,w,!1,S.z2,"Import backup",new B.dVE(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.O,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bI(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kY,x,x,C.n),C.bh)},
$S:649}
B.dVC.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dVD.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bEa()},
$S:0}
B.dVE.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dVS.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IX(D.R1,x,C.a1E,g,e,32),C.as,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cV(C.d.gI(D.R1).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:615}
B.dVQ.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dVR.prototype={
$0(){this.a.aiT()
return null},
$S:0}
B.dVT.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*10)),e)},
$S:101}
B.dVU.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acz(e,w,v,this.b,x.e,x.c9e(w),new B.dVM(x,w),new B.dVN(x,v,w),new B.dVO(x,w),new B.dVP(x,w),null)},
$S:z+24}
B.dVM.prototype={
$0(){this.a.ag8(this.b)
return null},
$S:0}
B.dVN.prototype={
$0(){var x=this.a
return x.m(new B.dVL(x,this.b,this.c))},
$S:0}
B.dVL.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dVO.prototype={
$0(){this.a.Oh(this.b)
return null},
$S:0}
B.dVP.prototype={
$0(){this.a.aiG(this.b)
return null},
$S:0}
B.d8H.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*18)),e)},
$S:101}
B.d8I.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:109}
B.d94.prototype={
$3(d,e,f){return A.db(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:101}
B.d93.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d90.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d91.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d92.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d8Z.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fS(w,C.A,x,new B.d8X(this.a),C.h7,C.dz,!0,x,!1,x,x)
$.aV.x1$.push(new B.d8Y(this.a))
return C.bJ},
$S:134}
B.d8X.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d8V(this.a))
return C.bJ},
$S:188}
B.d8V.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8S(x))},
$S:9}
B.d8S.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8Y.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8U(x))},
$S:9}
B.d8U.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d9_.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d8W(this.a))
return C.bJ},
$S:188}
B.d8W.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8T(x))},
$S:9}
B.d8T.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8E.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8D(x,d))},
$S:1754}
B.d8D.prototype={
$0(){return this.a.f=this.b===C.v4},
$S:0}
B.d8F.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8C(x,d))},
$S:9}
B.d8C.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d8G.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d8B(x,d))},
$S:9}
B.d8B.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d8x.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d8y.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d8z.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d8A.prototype={
$1(d){return this.a.d.Nh(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d9h.prototype={
$0(){var x=this.a.a
return B.rF(x.c,x.d)},
$S:1755}
B.d9i.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d9j.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d9k.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d9l.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d9m.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d9o.prototype={
$0(){var x=this.a
x.m(new B.d9n(x))},
$S:0}
B.d9n.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hb(0)
else x.qa(0)},
$S:0}
B.d9d.prototype={
$1(d){return this.a.R1(this.b)},
$S:11}
B.d9e.prototype={
$1(d){return this.a.R0(this.b)},
$S:11}
B.d95.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d96.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d97.prototype={
$1(d){return D.hiZ},
$S:z+25}
B.d9c.prototype={
$2(d,e){if(d)B.Vq()},
$S:124}
B.d98.prototype={
$0(){return this.a.aam(this.b)},
$S:0}
B.d99.prototype={
$0(){return this.a.aaj(this.b)},
$S:0}
B.d9a.prototype={
$0(){return this.a.aeF(this.b)},
$S:0}
B.d9b.prototype={
$0(){return this.a.a25(this.b)},
$S:0}
B.d8w.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d9g.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qd(),$async$$0)
case 2:u.m(new B.d9f(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d9f.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ccJ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mB(D.mR)},
$S:z+1}
B.ccK.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.H(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ccI.prototype={
$2(d,e){return this.bl1(d,e)},
bl1(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vr(u.c,A.H(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1756}
B.fy4.prototype={
$1(d){if(d===D.a81&&(this.a.a.a&30)===0)this.a.fW(0)},
$S:z+27}
B.fy5.prototype={
$0(){},
$S:12}
B.fyC.prototype={
bmB(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fm2(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.aa(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hiY(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bmB(d,e)},
$S:704}
B.fyB.prototype={
$1(d){var x=this
d.b=new B.fyA(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fyA.prototype={
$1(d){return this.bmA(d)},
bmA(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b02(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aL(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.r(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.r(r,"name")
n=J.k(n==null?"file":n)
m=J.r(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.A(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.fm2(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.aa(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
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
return A.b(B.a7n(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aAb.prototype,"gcgg","QC",0)
x(v,"gch7","Js",0)
x(v,"gcgD","yd",0)
x(v=B.aE9.prototype,"gc98","aeD",0)
x(v,"gc99","a_a",0)
x(v,"gcvV","aim",0)
x(v=B.aEc.prototype,"gc9a","a_b",0)
x(v,"gcvW","a2q",0)
x(B.aEa.prototype,"gc9b","aeE",0)
x(B.aAa.prototype,"gc9g","c9h",4)
x(v=B.aEb.prototype,"gcgE","a0k",0)
x(v,"gcuu","cuv",4)
x(v,"gb2x","aze",0)
x(v,"gcxq","aiN",0)
x(v,"gbQt","Y2",0)
x(v,"gc9f","Eq",0)
x(B.aAc.prototype,"gb6j","a2p",0)
x(B.aA9.prototype,"gc9i","a_c",0)
x(v=B.aAf.prototype,"gb1e","ceV",4)
x(v,"gc9c","aeH",0)
x(v=B.aAd.prototype,"gctt","a2b",0)
x(v,"gb_l","aeG",0)
w(B.aA8.prototype,"gaxS","axT",8)
x(v=B.aAe.prototype,"gcjn","agB",0)
x(v,"gbPZ","ab8",0)
w(v,"gaxS","axT",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cp2,B.a9L,B.aus,B.aCO,B.aFW,B.jw,B.acf,B.bwP,B.Fj,B.Xx])
w(B.cp3,B.cp2)
w(B.b5a,B.a9L)
x(A.hx,[B.coZ,B.cp_,B.cp0,B.coY,B.cp1,B.cp4,B.cp5,B.cp6,B.cp7,B.cp8,B.cp9,B.cpa,B.cpb,B.frB,B.fPW,B.fPY,B.fPX,B.fQa,B.fQb,B.fu7,B.d8M,B.d8O,B.d8N,B.d8R,B.fw6,B.fwA,B.ccd,B.cck,B.ccl,B.ccg,B.cce,B.cch,B.cci,B.fQ8,B.fQ9,B.dVZ,B.dW7,B.dW5,B.dW6,B.foM,B.fuj,B.fuk,B.ccC,B.fum,B.fys,B.fsw,B.fsx,B.ccH,B.fV8,B.d8L,B.d8J,B.dVV,B.dUR,B.dUX,B.dVf,B.dUW,B.dVm,B.dVG,B.dVH,B.dVI,B.dVd,B.dVv,B.dVu,B.dVw,B.dVx,B.dVy,B.dVA,B.dVB,B.dVt,B.dUZ,B.dV_,B.dUV,B.dVg,B.dV7,B.dV5,B.dVl,B.dVF,B.dVS,B.dVT,B.d8H,B.d8I,B.d94,B.d93,B.d8Z,B.d8X,B.d8V,B.d8Y,B.d9_,B.d8W,B.d8E,B.d8F,B.d8G,B.d8A,B.d9d,B.d9e,B.d97,B.ccJ,B.ccK,B.fy4,B.fyB,B.fyA])
w(B.b5b,B.aus)
x(A.iF,[B.fPV,B.d8P,B.d8Q,B.fw4,B.fw5,B.fwz,B.dUO,B.dVX,B.dVY,B.dVW,B.dW_,B.dW0,B.dW1,B.dW2,B.dW3,B.dW4,B.dUP,B.dUQ,B.ful,B.d8K,B.dVi,B.dVj,B.dUS,B.dUT,B.dUY,B.dVJ,B.dVK,B.dVc,B.dVn,B.dV1,B.dVe,B.dVz,B.dVo,B.dVp,B.dVq,B.dVr,B.dVs,B.dV0,B.dUU,B.dVh,B.dVa,B.dV3,B.dV8,B.dV9,B.dVb,B.dV2,B.dVk,B.dVC,B.dVD,B.dVE,B.dVQ,B.dVR,B.dVM,B.dVN,B.dVL,B.dVO,B.dVP,B.d90,B.d91,B.d92,B.d8S,B.d8U,B.d8T,B.d8D,B.d8C,B.d8B,B.d8x,B.d8y,B.d8z,B.d9h,B.d9i,B.d9j,B.d9k,B.d9l,B.d9m,B.d9o,B.d9n,B.d95,B.d96,B.d98,B.d99,B.d9a,B.d9b,B.d8w,B.d9g,B.d9f,B.fy5])
x(A.lz,[B.acy,B.NK,B.a9M,B.OO,B.Xw,B.ON,B.Fk])
x(A.af,[B.Zx,B.Vf,B.Vj,B.Vg,B.Zw,B.Vh,B.Zy,B.Zv,B.Q_,B.ZA,B.Zu,B.ZB])
x(A.ah,[B.aAb,B.aE9,B.aEc,B.aEa,B.aAa,B.aEb,B.aAc,B.aA9,B.aAf,B.aAd,B.aA8,B.aAe])
x(A.aw,[B.ad0,B.aA7,B.beE,B.acz,B.acx,B.beF])
x(A.js,[B.ccj,B.ccf,B.ccn,B.cco,B.fR1,B.dV6,B.dV4,B.dVU,B.d9c,B.ccI,B.fyC])
x(A.iZ,[B.bk8,B.bwr])})()
A.j0(b.typeUniverse,JSON.parse('{"b5a":{"a9L":[]},"b5b":{"aus":[]},"Zx":{"af":[],"v":[]},"aAb":{"ah":["Zx"]},"ad0":{"aw":[],"v":[]},"Vf":{"af":[],"v":[]},"Vj":{"af":[],"v":[]},"aE9":{"ah":["Vf"]},"aEc":{"ah":["Vj"]},"bk8":{"iZ":[]},"Vg":{"af":[],"v":[]},"aEa":{"ah":["Vg"]},"Zw":{"af":[],"v":[]},"Vh":{"af":[],"v":[]},"acz":{"aw":[],"v":[]},"Zy":{"af":[],"v":[]},"Zv":{"af":[],"v":[]},"Q_":{"af":[],"v":[]},"ZA":{"af":[],"v":[]},"acx":{"aw":[],"v":[]},"Zu":{"af":[],"v":[]},"ZB":{"af":[],"v":[]},"aAa":{"ah":["Zw"]},"bwr":{"iZ":[]},"aEb":{"ah":["Vh"]},"aA7":{"aw":[],"v":[]},"beE":{"aw":[],"v":[]},"aAc":{"ah":["Zy"]},"aA9":{"ah":["Zv"]},"aAf":{"ah":["Q_"]},"aAd":{"ah":["ZA"]},"aA8":{"ah":["Zu"]},"aAe":{"ah":["ZB"]},"beF":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("ux"),k:x("M9()"),m:x("bw<m,m>"),F:x("rh"),g:x("aA<jw?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bh>"),Y:x("O<a8<m,R>>"),t:x("O<a8<m,@>>"),r:x("O<jw>"),w:x("O<+file,name(lM,m)>"),u:x("O<cV>"),s:x("O<m>"),E:x("O<iZ>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<G>"),G:x("bh"),A:x("cw<ah<af>>"),n:x("ai<jw>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bA<m,m>"),P:x("a8<m,@>"),f:x("a8<@,@>"),o:x("iA"),e:x("ioU"),af:x("Ew"),U:x("jw"),b:x("cv"),C:x("aD"),aK:x("wm"),ab:x("Fj"),br:x("aus"),v:x("Xx"),N:x("m"),X:x("bp<K>"),Q:x("lX"),D:x("dK"),aw:x("bV<m>"),cd:x("Z<a8<m,@>>"),c7:x("v"),ch:x("c_<ai<jw>>"),aW:x("c_<dK?>"),aY:x("c_<~>"),cx:x("acy"),b1:x("bi<ai<jw>>"),cf:x("bi<dK?>"),d4:x("bi<~>"),c4:x("aCO"),bG:x("aFW"),q:x("mr"),B:x("pC<Fj>"),c6:x("pC<a9M>"),y:x("R"),i:x("K"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jw>?"),aL:x("ai<@>?"),h:x("a8<m,@>?"),l:x("jw?"),R:x("aD?"),c:x("Xx?"),d:x("+answerQr,transfer(m,aA<ai<jw>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,NK,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dK?"),cm:x("acf?"),bk:x("aCO?"),ag:x("aFW?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b2f=new A.ay(C.aC,2,C.r,-1)
D.c36=new A.a9(C.a5,C.a8,C.x,C.a3N,null,null)
D.b3U=new A.o(null,null,null,C.mt,null,D.c36,C.n)
D.b5n=new A.o(null,null,null,C.mt,null,E.Hz,C.n)
D.aen=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.afG=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.agH=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.aik=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fys=new A.y("Your team portal",null,C.dd,null,null,null,null,null,null,null,null,null)
D.fNb=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.Ea,null,null,null,null,null,null,null,null,null)
D.dek=x([D.fys,C.am,D.fNb],y.p)
D.bta=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dek,null)
D.fRE=new A.y("Create your organization",null,C.fv,null,null,null,null,null,null,null,null,null)
D.fCU=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Ea,null,null,null,null,null,null,null,null,null)
D.duV=x([D.fRE,C.am,D.fCU],y.p)
D.btk=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.duV,null)
D.fNO=new A.y("Team Member sign-in",null,C.fv,null,null,null,null,null,null,null,null,null)
D.fGP=new A.y("Enter the access code and password from your organization.",null,G.Ea,null,null,null,null,null,null,null,null,null)
D.dsG=x([D.fNO,C.am,D.fGP],y.p)
D.btv=new A.fj(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dsG,null)
D.bzA=new A.Q(16,10,16,28)
D.bzI=new A.Q(16,14,16,4)
D.bAY=new A.Q(20,0,20,16)
D.bBt=new A.Q(20,8,20,16)
D.al8=new A.Q(24,22,24,20)
D.a1K=new A.a0(63394,"MaterialIcons",!1)
D.aoa=new A.a0(63515,"MaterialIcons",!1)
D.bO7=new A.a0(983813,"MaterialIcons",!1)
D.bLt=new A.a0(62867,"MaterialIcons",!1)
D.bP9=new A.ae(D.bLt,44,C.c,null,null,null)
D.bQe=new A.ae(C.kL,null,C.ad,null,null,null)
D.bRC=new A.ae(C.jg,18,null,null,null,null)
D.bTm=new A.ae(D.a1K,26,C.c,null,null,null)
D.bTW=new A.ae(C.Cp,null,null,null,null,null)
D.bUw=new A.ae(C.Cy,null,null,null,null,null)
D.bVH=new A.ae(W.a1U,null,null,null,null,null)
D.bW0=new A.ae(C.hA,16,null,null,null,null)
D.bZw=new A.ae(C.rC,16,null,null,null,null)
D.bPq=new A.ae(C.nu,null,null,null,null,null)
D.c_o=new A.e7(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bV3=new A.ae(C.GN,null,null,null,null,null)
D.c_t=new A.e7(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bV3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPM=new A.ae(H.Hm,null,null,null,null,null)
D.c_E=new A.e7(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cOy=x([C.ff,C.b0,C.aC],y.O)
D.c5_=new A.a9(C.ay,C.aD,C.x,D.cOy,null,null)
D.cO0=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.R1=x([C.ff,C.aC],y.O)
D.Ri=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mR=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dn4=x([C.o5,C.aC],y.O)
D.eeO={iceServers:0}
D.aJp={urls:0}
D.dyB=new A.bw(D.aJp,["stun:stun.l.google.com:19302"],y.m)
D.dyA=new A.bw(D.aJp,["stun:stun1.l.google.com:19302"],y.m)
D.d42=x([D.dyB,D.dyA],A.at("O<a8<m,m>>"))
D.dxU=new A.bw(D.eeO,[D.d42],A.at("bw<m,@>"))
D.IE=new B.NK(0,"lanDirect")
D.SD=new B.NK(1,"cloudStash")
D.dJL=new B.NK(2,"inlineInstant")
D.SE=new B.NK(3,"webrtcLink")
D.zP=new B.NK(4,"videoCloud")
D.fNa=new A.y("Receive file",null,C.n1,null,null,null,null,null,null,null,null,null)
D.cDR=x([E.apU,C.ac,D.fNa],y.p)
D.f1S=new A.cd(C.aM,C.b9,C.i,C.m,null,C.p,null,0,D.cDR,null)
D.em7=new A.D(C.cl,D.f1S,null)
D.fp3=new A.F(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.I0,null,null,null)
D.fz0=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fp3,null,C.K,null,null,null,null,null,null,null)
D.elj=new A.D(C.BU,D.fz0,null)
D.b9M=new A.ci(C.A,null,null,D.elj,null)
D.eso=new A.cN(0,null,0,28,null,null,D.b9M,null)
D.esI=new B.a9M(0,"RTCDataChannelConnecting")
D.aOR=new B.a9M(1,"RTCDataChannelOpen")
D.aOS=new B.a9M(3,"RTCDataChannelClosed")
D.esJ=new B.Fk(0,"RTCIceConnectionStateNew")
D.esK=new B.Fk(1,"RTCIceConnectionStateChecking")
D.esL=new B.Fk(2,"RTCIceConnectionStateCompleted")
D.esM=new B.Fk(3,"RTCIceConnectionStateConnected")
D.esN=new B.Fk(4,"RTCIceConnectionStateCount")
D.esO=new B.Fk(5,"RTCIceConnectionStateFailed")
D.esP=new B.Fk(6,"RTCIceConnectionStateDisconnected")
D.aOT=new B.Fk(7,"RTCIceConnectionStateClosed")
D.aOU=new B.Xw(0,"RTCIceGatheringStateNew")
D.esQ=new B.Xw(1,"RTCIceGatheringStateGathering")
D.a81=new B.Xw(2,"RTCIceGatheringStateComplete")
D.a82=new B.ON(0,"RTCPeerConnectionStateClosed")
D.aOV=new B.ON(1,"RTCPeerConnectionStateFailed")
D.aOW=new B.ON(2,"RTCPeerConnectionStateDisconnected")
D.aOX=new B.ON(3,"RTCPeerConnectionStateNew")
D.aOY=new B.ON(4,"RTCPeerConnectionStateConnecting")
D.aOZ=new B.ON(5,"RTCPeerConnectionStateConnected")
D.esR=new B.OO(0,"RTCSignalingStateStable")
D.esS=new B.OO(1,"RTCSignalingStateHaveLocalOffer")
D.esT=new B.OO(2,"RTCSignalingStateHaveRemoteOffer")
D.esU=new B.OO(3,"RTCSignalingStateHaveLocalPrAnswer")
D.esV=new B.OO(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aP_=new B.OO(5,"RTCSignalingStateClosed")
D.f6n=new A.av(160,48)
D.bb2=new A.fk(2,null,null,null,null,C.aC,null,null,null,null)
D.f7W=new A.a5(16,16,D.bb2,null)
D.fCe=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f9o=new A.b2(D.fCe,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fJS=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new A.b2(D.fJS,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fSI=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f9y=new A.b2(D.fSI,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fBP=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f9Y=new A.b2(D.fBP,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fNZ=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aRO=new A.b2(D.fNZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fPq=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.far=new A.b2(D.fPq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fUb=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.faI=new A.b2(D.fUb,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fS7=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.faN=new A.b2(D.fS7,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fTl=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fbz=new A.b2(D.fTl,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fAq=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fc5=new A.b2(D.fAq,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fLK=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fcq=new A.b2(D.fLK,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fEz=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fcW=new A.b2(D.fEz,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fUh=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fd_=new A.b2(D.fUh,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fAG=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new A.b2(D.fAG,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fzm=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fdk=new A.b2(D.fzm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fw9=new A.y("NGMY DOC SHARE",null,C.aT9,null,null,null,null,null,null,null,null,null)
D.fxy=new A.y("Show this to sender",null,C.it,null,null,null,null,null,null,null,null,null)
D.fyz=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fDk=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fDJ=new A.y("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fEJ=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fFe=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fI7=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fKU=new A.y("Send to their Doc Share",null,C.nH,null,null,null,null,null,null,null,null,null)
D.fLf=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fLy=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fM8=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fMf=new A.y("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fMD=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f3,null,null,null,null,null,null,null,null,null)
D.fPW=new A.y("Share files & videos\nwith a scan.",null,C.aTc,null,null,null,null,null,null,null,null,null)
D.fQf=new A.y("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.hiZ=new B.Zu(null)
D.abd=new B.acy(0,"docShare")
D.abe=new B.acy(1,"gate")
D.VO=new B.acy(2,"gateNoIndividual")})();(function staticFields(){$.aOF=null
$.fjM=function(){var x=y.N
return A.U(x,x)}()
$.GA=A.U(y.N,y.D)
$.agE=A.U(y.N,A.at("lM"))
$.Rk=A.U(y.N,y.D)
$.fkk=A.U(y.N,A.at("acf"))
$.ccB=A.U(y.S,A.at("bwP"))
$.hiX=1
$.i6d=null
$.i6c=null
$.hYs=null
$.h7N=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ipo","hAu",()=>new B.cp3())
x($,"inj","hby",()=>C.a.t(A.by(A.by(A.by(A.Ha(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["LUhMNOTuwis/bHYGW+7Z7RN+yUU="]=a.current})($__dart_deferred_initializers__);